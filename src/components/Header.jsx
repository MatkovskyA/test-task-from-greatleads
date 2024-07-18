import React, { useState } from "react";
import LogoIcon from "../assets/icons/logo.svg"
import NavItem from "./NavItem"
import { Button } from "./Button";

import closeNavBarBtn from "../assets/icons/Icon_close.svg"
import openNavBarBtn from "../assets/icons/btn_burger.svg"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const imageStyles = "h-6";
  const toggleNavBar = () => {
    setIsOpen(!isOpen)
    console.log("hello")
  }
  return (
    <header className="fixed inset-x-0 top-0 bg-gradient-to-r from-cyan-500 to-blue-400">
      <div className="container  flex items-center justify-between py-3 mx-auto px-4">
        {/* Взял любую картинку для лого */}
        <div className="min-w-28">
          <img src={LogoIcon} alt="Logo icon" />
        </div>
        <nav className="hidden justivy-between md:flex">
          <NavItem listItemStyle='flex space-x-6' />
        </nav>
        {isOpen && (
          <div className="flex basic-full absolute bg-blue-400 p-10 right-0 top-14">
            <NavItem listItemStyle="text-xl"/>
          </div>
        )}
        <div className="w-12 md:hidden">
          <Button onClick={toggleNavBar} buttonStyle={"w-full h-6 block hover:scale-110"} text={isOpen ? <img src={closeNavBarBtn} /> : <img src={openNavBarBtn} />}>
          </Button>
        </div>
      </div>
    </header>
  )
}