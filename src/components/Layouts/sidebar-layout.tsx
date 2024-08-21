import React, { ReactNode, useState } from "react"
import { LeftSideMenu } from "../Menus/left-side"
import MobileHeader from "./mobile-header"

type Props = {
  children: ReactNode
}

export const SideBarLayout: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <MobileHeader openMenu={toggleSidebar} />
      <div className={`flex items-start`}>
        <LeftSideMenu isMenuOpen={isOpen} onClose={toggleSidebar} />
        {children}
      </div>
    </div>
  )
}
