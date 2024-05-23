import NavbarKullaniciMenu from "./NavbarKullaniciMenu";
import { useEffect, useState, useRef } from 'react';
import { usePage } from "@inertiajs/react";

export default function Navbar() {
  const { props } = usePage();
  const { loggedInUser } = props;

  const [show, setShow] = useState(false);
  const toggle = () => setShow(show => !show)

  const menuRef = useRef(null)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Clicked outside of the menu, so close it
        setShow(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <nav ref={menuRef} className="bg-gray-800 w-screen">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button onClick={toggle} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="rounded-full aspect-square">
              <a href="/">
                <img className="h-12 w-12" src="/images/logo.png" alt="Seyahat Dostu"></img>
              </a>
            </div>
            {loggedInUser ?
              <div className="hidden sm:ml-6 sm:flex space-x-4 justify-center items-center">
                <a href="/my_rides" className="text-white bg-yellow-600 hover:bg-yellow-300 hover:text-black rounded-md px-3 py-2 text-sm font-medium transition">Yolculuklarım</a>
                <a href="/reservations" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium transition" aria-current="page">Rezervasyonlarım</a>
              </div>
              :
              <div className="hidden sm:ml-6 sm:flex space-x-4 justify-center items-center">
                <a href="/signup" className="text-white bg-yellow-600 hover:bg-yellow-300 hover:text-black block rounded-md px-3 py-2 text-base font-medium transition">Kayıt Ol</a>
                <a href="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium transition" aria-current="page">Giriş Yap</a>
              </div>
            }
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {loggedInUser &&
              <>
                <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Bildirimler</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </button>
                <NavbarKullaniciMenu></NavbarKullaniciMenu>
              </>
            }
          </div>
        </div>
      </div>
      {loggedInUser ?
        <div className={`${show ? 'h-24' : 'h-0'} transition-all overflow-hidden space-y-1 px-4 sm:hidden`} id="mobile-menu">
          <a href="/my_rides" className="text-white bg-yellow-600 hover:bg-yellow-300 hover:text-black block rounded-md px-3 py-2 text-base font-medium transition">Yolculuklarım</a>
          <a href="/reservations" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium transition" aria-current="page">Rezervasyonlarım</a>
        </div>
        :
        <div className={`${show ? 'h-24' : 'h-0'} transition-all overflow-hidden space-y-1 px-4 sm:hidden`} id="mobile-menu">
          <a href="/signup" className="text-white bg-yellow-600 hover:bg-yellow-300 hover:text-black block rounded-md px-3 py-2 text-base font-medium transition">Kayıt Ol</a>
          <a href="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium transition" aria-current="page">Giriş Yap</a>
        </div>
      }
    </nav>
  )
}
