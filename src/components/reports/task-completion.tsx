import React from 'react'
import InfoIcon from '../Icons/info-icon';

interface Props {
    taskCompletion: number;
    totalTasks: number;
}

const TaskCompletion = ({taskCompletion, totalTasks}:Props) => {
  return (
    <div className='flex w-full justify-between pb-5 border-b border-b-gray-100'>
        <div className='flex flex-col gap-[7px] pt-5 pb-8'>
            <div className='flex items-center gap-2'>
                <p className='text-sm leading-[16.94px] text-primary-400'>Task Completion</p>
                <InfoIcon className='w-3 h-3' />
            </div>
            <p className='text-[20px] leading-[24.2px] text-black-200'>{`${taskCompletion}%`}</p>
            <p className='text-xs leading-[14.52px] text-primary-300'>Overall completion rate</p>
        </div>
        <div className='flex flex-col gap-[7px] pt-5 pb-8'>
            <p className='text-sm leading-[16.94px] text-blue-100 text-right'>View</p>
            <p className='text-[16px] leading-[19.36px] text-primary-300 text-right'>{totalTasks}</p>
            <p className='text-xs leading-[14.52px] text-primary-300'>Total tasks</p>
        </div>
    </div>
  )
}

export default TaskCompletion