import React, { useContext } from "react"
import { useRouter } from "next/router"
import { HomeIcon } from "../Icons/home-icon"
import { ReportsIcon } from "../Icons/reports-icon"
import {Drawer} from "flowbite-react";
import ArrowDown from "../Icons/arrow-down";

type Props = {
  isMenuOpen: boolean;
  onClose: ()=>void;
}

export const LeftSideMenu: React.FC<Props> = ({ isMenuOpen, onClose }) => {
  const router = useRouter();

  return (
    <Drawer 
      id="sidebar-multi-level-sidebar" 
      className={`fixed top-0 left-0 p-0 z-40 w-[280px] bg-[#F7F8F9] flex-shrink-0 h-screen transition-transform -translate-x-full xl:translate-x-0 ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } xl:translate-x-0 xl:static xl:inset-0`}
      aria-label="Sidebar"
      open={isMenuOpen}
      backdrop={true}
      onClose={onClose}
    >
      <div className="h-full px-5 w-[280px] py-[2rem] xl:py-3 bg-[#F7F8F9] flex flex-col items-start relative">
        <div className="flex w-full justify-between items-center mb-9">
          <div className="w-[120px] h-6">
            <img
              src="/images/peppermint-wordmark.png"
              alt="peppermint logo"
              className="w-full h-full object-contain"
            />
          </div>
          <button 
              type="button" 
              className="inline-flex items-center xl:hidden text-sm text-primary-100 rounded-lg hover:text-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-100"
              onClick={onClose}
          >
              <span className="sr-only">close sidebar</span>
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
          </button>
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src={'/images/logo-grey.png'}
              alt="company logo"
              className="h-[28px] w-[28px]"
            />
            <h4 className="text-base">ABC Company</h4>
          </div>
          <ArrowDown className="cursor-pointer" />
        </div>
        <div className="w-full">
          <ul className="flex flex-col gap-4 mt-9">
            <li
              onClick={() => {
                router.prefetch("/")
                setTimeout(() => router.push("/"), 350)
              }}
              className={`flex gap-[14px] text-black-200 hover:text-blue-100 items-center cursor-pointer rounded-[0.4rem]`}>
              <HomeIcon
                className="h-[16px] w-[16px]"
                fill={"#4F566B"} />
              <p className="text-[14px] leading-[16.94px] font-normal">
                Dashboard
              </p>
            </li>

            <li
              onClick={() => {
                router.prefetch("/")
                setTimeout(() => router.push("/"), 350)
              }}
              className={`flex gap-[14px] text-blue-100 items-center cursor-pointer rounded-[0.4rem]`}>
              <ReportsIcon
                className="h-[16px] w-[16px]"
              />
              <p className="text-[14px] leading-[16.94px] font-semibold">
                Reports
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Drawer>
  )
}
