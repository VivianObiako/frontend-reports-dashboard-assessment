import * as d3 from 'd3';
import { useState } from 'react';
import { FeatureCollection } from 'geojson';
import { Tooltip } from './Tooltip';

type MapProps = {
  width: number;
  height: number;
  data: FeatureCollection;
  locationBreakdown: LocationBreakdown[];
};

export const Map = ({ width, height, data, locationBreakdown }: MapProps) => {
  const [tooltipContent, setTooltipContent] = useState<{ country: string; count: number }>({
    country: '',
    count: 0,
  });
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number } | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const countryCounts: { [key: string]: number } = locationBreakdown.reduce(
    (acc, { country, count }) => {
      acc[country] = count;
      return acc;
    },
    {} as { [key: string]: number }
  );

  let selectedProjection = d3.geoMercator().scale(70).center([210, 10]);
  const geoPathGenerator = d3.geoPath().projection(selectedProjection);

  const handleMouseEnter = (event: React.MouseEvent<SVGPathElement, MouseEvent>, shape: any) => {
    const countryName = shape.properties.name;
    const count = countryCounts[countryName] || 0;

    setHoveredCountry(shape.id);
    setTooltipContent({ country: countryName, count });
    setTooltipPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMouseLeave = () => {
    setHoveredCountry(null);
    setTooltipContent({ country: '', count: 0 });
    setTooltipPosition(null);
  };


  const allSvgPaths = data.features
    .filter((shape) => shape.id !== 'ATA')
    .map((shape) => {
      const isHovered = shape.id === hoveredCountry;

      return (
        <path
          key={shape.id}
          d={geoPathGenerator(shape) || ''}
          stroke="#635BFF"
          strokeWidth={0.1}
          fill={ isHovered ? '#635BFF' : '#635BFF1A'}
          fillOpacity={0.7}
          className=""
          onMouseEnter={(event) => handleMouseEnter(event, shape)}
          onMouseLeave={handleMouseLeave}
        />
      );
    });

  return (
    <div className="">
      <svg width={width} height={height} className="mapSvg cursor-pointer">
        {allSvgPaths}
      </svg>
      <Tooltip country={tooltipContent.country} count={tooltipContent.count} position={tooltipPosition} />
    </div>
  );
};
