import React from 'react'
import TaskCompletion from './task-completion';
import DeviceUsage from './device-usage';
import SatisfactionScore from './satisfaction-score';
import { Map } from '../Map/Map';
import { MapData } from '@/utils/constants/map';

interface Prop {
  data: ParticipantsData;
}

const SummaryCard = ({data}: Prop) => {
  return (
    <div className='px-4 xl:px-10 border-b border-b-gray-100'>
        <h3 className='font-bold text-[28px] leading-[33.89px]'>Demographics</h3>
        <div className='border-t border-t-gray-100 mt-4 flex flex-col md:flex-row'>
          <div className='w-full md:w-1/2 flex-shrink-0 px-5 md:px-10 md:pb-[41px] md:border-r border-r-gray-100'>
            <TaskCompletion taskCompletion={data?.metrics?.taskCompletion} totalTasks={data?.metrics?.totalTasks} />
            <SatisfactionScore data={data?.metrics}/>
            <DeviceUsage data={data?.deviceBreakdown} />
          </div>
          <div className='w-full md:w-1/2 flex-shrink-0 px-5 md:pl-10 relative'>
            <div className='flex w-full justify-between pt-5'>
              <p className='font-medium text-sm leading-[16.94px] text-primary-400'>Location</p>
              <p className='font-medium text-sm leading-[16.94px] text-blue-100'>View</p>
            </div>
            <div className="w-full md:h-[369px] graph-scroll" >
              <Map data={MapData} width={458} height={369} locationBreakdown={data?.locationBreakdown} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default SummaryCard;