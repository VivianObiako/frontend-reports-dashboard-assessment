import { Badge } from 'flowbite-react';
import React from 'react'
import InfoIcon from '../Icons/info-icon';

interface Props {
    data: Metrics;
  }

const SatisfactionScore = ({data}:Props) => {
  return (
    <div className='py-5 border-b border-b-gray-100'>
        <p className='font-medium text-sm leading-[16.94px] text-primary-400 pt-5 pb-[7px]'>User Satisfaction Score</p>
        <div className='flex w-full justify-between gap-4 flex-wrap pb-5'>
            <div>
                <div className='flex items-center gap-2'>
                    <p className='text-[20px] leading-[24.2px] text-black-200'>{data?.sus}</p>
                    <Badge className='bg-green-200 text-green-100'>Grade B</Badge>
                </div>
                <div className='flex items-center gap-2 mt-[6px]'>
                    <p className='text-xs leading-[14.52px] text-primary-300'>SUS</p>
                    <InfoIcon className='w-3 h-3' />
                </div>
            </div>
            <div>
                <div className='flex items-center gap-2'>
                    <p className='text-[20px] leading-[24.2px] text-black-200'>{data?.nps}</p>
                    <Badge className='bg-orange-200 text-orange-100'>Good</Badge>
                </div>
                <div className='flex items-center gap-2 mt-[6px]'>
                    <p className='text-xs leading-[14.52px] text-primary-300'>NPS</p>
                    <InfoIcon className='w-3 h-3' />
                </div>
            </div>
            <div>
                <div className='flex items-center gap-2'>
                    <p className='text-[20px] leading-[24.2px] text-black-200'>{data?.ces}</p>
                    <Badge className='bg-orange-200 text-orange-100'>Average</Badge>
                </div>
                <div className='flex items-center gap-2 mt-[6px]'>
                    <p className='text-xs leading-[14.52px] text-primary-300'>CES</p>
                    <InfoIcon className='w-3 h-3' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SatisfactionScore