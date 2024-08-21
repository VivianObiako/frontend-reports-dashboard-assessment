import React from 'react'
import SearchIcon from '../Icons/SearchIcon'
import ArrowDown from '../Icons/ArrowDown'
import { Badge } from 'flowbite-react'

const TopSection = () => {
  return (
    <div className='pb-4 border-b border-b-gray-100 mb-8'>
        <div className='w-full flex justify-between flex-col sm:flex-row px-4  xl:px-10 mb-8'>
            <div className='flex gap-2 items-center'>
                <SearchIcon className='h-3 w-3' />
                <p className='font-medium text-sm leading-[20px] text-primary-100'>Search...</p>
            </div>
            <div className='flex items-center gap-4'>
                <p className='text-purple-100 text-sm'>Switch to Test Plan</p>
                <button className='bg-black-100 text-white-100 text-[13px] px-3 py-2 rounded-[4px]'>Share Report</button>
            </div>
        </div>
        <div className="flex gap-[6px] font-medium text-sm items-center px-4  xl:px-10 mb-8">
            <a className="text-primary-200 hover:text-primary-400" href="/">Reports</a>
            <ArrowDown className="rotate-[-90deg]" />
            <a className="text-purple-100 hover:text-blue-100" href="/">Wallet Feature</a>
        </div>
        <div className="flex gap-4 font-medium text-sm items-center px-4  xl:px-10">
            <Badge color="gray" className='font-medium text-xs text-primary-400'>Usability Study</Badge>
            <p className="text-primary-100 text-[15px]">13 March 2024 01:56 AM</p>
        </div>
    </div>
  )
}

export default TopSection