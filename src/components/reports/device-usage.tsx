import React from 'react'

interface Props {
    data: DeviceBreakdown[];
}

const DeviceUsage = ({data}: Props) => {
  return (
    <div className='flex w-full flex-col gap-[7px] pt-5'>
        <div className='flex w-full gap-2 justify-between'>
            <p className='font-medium text-sm leading-[16.94px] text-primary-400'>Device Usage</p>
            <p className='font-medium text-sm leading-[16.94px] text-blue-100'>Browser</p>
        </div>
        {data && data.map((device, index)=>(
            <div className='flex w-full gap-2 justify-between' key={index}>
                <p className='text-primary-300 text-base font-normal leading-[19.36px]'>{device?.name}</p>
                <p className='text-black-200 text-base font-normal leading-[19.36px]'>{device?.count}</p>
            </div>
        ))}
    </div>
  )
}

export default DeviceUsage