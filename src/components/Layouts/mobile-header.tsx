import React from 'react';
import { Logo } from '../Icons/Logo';

interface Props {
    openMenu: () => void;
}


const MobileHeader = ({openMenu}:Props) => {
  return (
    <nav className='flex xl:hidden items-center px-4 xl:px-10 gap-3 pt-5'>

        <button 
            type="button" 
            className="inline-flex items-center text-sm text-primary-100 rounded-lg hover:text-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-100"
            onClick={openMenu}
        >
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
        </button>
        <div className='h-6'>
            <img
                src="/images/peppermint-wordmark.png"
                alt="peppermint logo"
                className="w-full h-full object-contain"
            />
        </div>
    </nav>
  )
}

export default MobileHeader