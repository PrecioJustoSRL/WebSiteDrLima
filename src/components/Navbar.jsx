'use client'
import { useUser } from '@/context/Context'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { handleSignOut } from '@/firebase/database'
import Button from '@/components/Button'


export default function Navbar({ children }) {
    const { user, userDB, item, setUserItem, modal, setUserModal, setUserProfile, setUserSuccess, success, setUserDatas } = useUser()

    const router = useRouter()

    const [nav, setNav] = useState(false)
    const [active, setActive] = useState(undefined)

    const signOutHandler = () => {
        handleSignOut()
    }

    const pathnameHandler = (item) => {
        setActive(item)
        setNav(false)
    }

    
    return (
        <nav className="w-screen fixed top-0 z-10 ">
            <div className='bg-[#00D2FF] py-1 text-center text-black'>
           <marquee> <a href='tel:76174846'>Emergencias llama, click aqui 76174846.</a></marquee>
            </div>
            <div className="max-w-screen flex flex-wrap items-center justify-between bg-[#6EE6FF] border-b-[5px] border-gray-200 mx-auto p-2 z-[1000]">
                <a className="flex items-center text-black">
                    <img src="/logo.png" className="h-[40px] mr-3 rounded-[5px]" alt="Flowbite Logo" /><span className='text-[14px] text-black'>{userDB && userDB !== undefined && userDB.frontPage !== undefined && userDB.frontPage['nombre'] !== undefined && userDB.frontPage['nombre']}</span>
                </a>
                <button type="button" className="inline-flex items-center p-2 text-sm text-black rounded-lg lg:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200  " onClick={() => setNav(!nav)}>
                    <span className="sr-only">Open menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"  ></path></svg>
                </button>
            </div>
            {<div className={`absolute top-[80px] w-1/2  transition-all z-0 ${nav ? 'right-0' : 'right-[-550px]'} lg:w-auto lg:right-[50px] lg:top-[45px] lg:flex lg:h-[40px]`} >
                <ul className="h-[250px] lg:h-auto flex flex-col justify-around bg-[#6EE6FF] font-bold p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg  lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:flex-row lg:items-center">
                    <li>
                        <a href="#" className={` lg:block py-2 pl-3 pr-4 text-black font-bold rounded lg:bg-transparent lg:p-0 ${active === undefined && 'text-black' }`} onClick={()=>pathnameHandler(undefined)}>Inicio</a>
                    </li>
                    <li>
                        <a href="#Servicios" className={` lg:block py-2 pl-3 pr-4 text-black font-bold  rounded  lg:hover:bg-transparent lg:p-0  ${active === 'Servicios' && 'text-black' }`} onClick={()=>pathnameHandler('Servicios')}>Servicios</a>
                    </li>
                    <li>
                        <a href="#Testimonios" className={` lg:block py-2 pl-3 pr-4 text-black font-bold  rounded  lg:hover:bg-transparent lg:p-0  ${active === 'Testimonios' && 'text-black' }`} onClick={()=>pathnameHandler('Testimonios')}>Testimonios</a>
                    </li>
                    <li>
                        <a href="#De interes" className={` lg:block py-2 pl-3 pr-4 text-black rounded  lg:hover:bg-transparent lg:p-0  ${active === 'De interes' && 'text-black' }`} onClick={()=>pathnameHandler('De interes')}>De interes</a>
                    </li>
                    {/* <li>
                        <a href="#AcercaDeMi" className="block py-2 pl-3 pr-4 text-black rounded  lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 ${active === undefined && 'text-black' }`} onClick={pathnameHandler}>Acerca de mi</a>
                    </li> */}
                    <li>
                        <a href="#Contactos" className={` lg:block py-2 pl-3 pr-4 text-black font-bold  rounded  lg:hover:bg-transparent lg:p-0  ${active === 'Contactos' && 'text-black' }`} onClick={()=>pathnameHandler('Contactos')}>Contactos</a>
                    </li>
                    {/* <li>
                        <a href="#Soporte" className={`hidden lg:block py-2 pl-3 pr-4 text-black rounded  lg:hover:bg-transparent lg:p-0  ${active === 'Soporte' && 'text-black' }`} onClick={()=>pathnameHandler('Soporte')}>Soporte</a>
                    </li> */}
                    {user && <li>
                        <Button theme="MiniPrimary" click={signOutHandler}>Cerrar sesión</Button>
                    </li>}
                </ul>
            </div>}
        </nav>
    )
}