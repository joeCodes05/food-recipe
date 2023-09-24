import { useContext, useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Button from './button'
import { GlobalContext } from '../context/themeContext'
import * as BsIcons from 'react-icons/bs'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navbarData = [
    {name: "Home", pagePath: "/"},
    {name: "About", pagePath: "/about"},
    {name: "Menu", pagePath: "/menu"},
    {name: "FAQs", pagePath: "/faq"}
  ]

  const { theme, handleThemeChange}  = useContext(GlobalContext)

  return (
    <header className={theme ? "bg-gray-900 fixed top-0 left-0 right-0 w-full duration-700" : "bg-white fixed top-0 left-0 right-0 w-full duration-700"}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-0" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <div className="navbar_brand">
              eatrite.
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${theme ? "text-white" : "text-gray-900"}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {navbarData.map((data, index) => {
            const { name, pagePath } = data
            return (
              <Link key={index} to={pagePath} className={`text-md font-[400] leading-6 ${theme ? "text-white" : "text-gray-900"} relative hover:text-primary before:absolute before:bottom-0 before:left-[50%] before:-translate-x-[50%] before:h-[2px] before:w-0 before:duration-700 duration-700 before:bg-primary hover:before:w-full`}>
                {name}
              </Link>
            )
          })}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/sign-up" className="text-sm font-semibold leading-6 text-gray-900">
            <Button 
              text={'Get started'}
            />
          </Link>
          <div className="ms-10 flex items-center">
            {theme ? <BsIcons.BsSun className='cursor-pointer text-[20px] text-white' onClick={handleThemeChange} /> : <BsIcons.BsMoon className='cursor-pointer text-[20px] text-gray-900' onClick={handleThemeChange} />}
          </div>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className={`fixed inset-y-0 right-0 z-10 w-full overflow-y-auto ${theme ? "bg-gray-900" : "bg-white"} p-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}>
          <div className="flex items-center justify-between">
          <Link to="/" className="-m-1.5 p-1.5">
            <div className="navbar_brand">
              eatrite.
            </div>
          </Link>
            <button
              type="button"
              className={`-m-2.5 rounded-md p-2.5 ${theme ? "text-white" : "text-gray-900"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className={`-my-6 divide-y ${theme ? "divide-gray-200" : "divide-gray-500/10"}`}>
              <div className="space-y-2 py-6">
                {navbarData.map((data, index) => {
                  const { name, pagePath } = data;
                  return (
                    <Link key={index} to={pagePath} className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${theme ? "text-white hover:bg-gray-700" : "text-gray-900 hover:bg-gray-50"}`}>
                      {name}
                    </Link>
                  )
                })}
              </div>
              <div className="py-6">
                <Link
                  to="/sign-up"
                  className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 ${theme ? "text-white hover:bg-gray-700" : "text-gray-900 hover:bg-gray-50"}`}
                >
                  Get Started
                </Link>
              </div>
              <div className="py-6 flex items-center">
                {theme ? <BsIcons.BsSun className='cursor-pointer text-[20px] text-white' onClick={handleThemeChange} /> : <BsIcons.BsMoon className='cursor-pointer text-[20px] text-gray-900' onClick={handleThemeChange} />}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
