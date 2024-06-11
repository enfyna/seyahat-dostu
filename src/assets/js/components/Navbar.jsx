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
                {loggedInUser['Driver'] &&
                  <a href="/my_rides" className="border-2 border-yellow-600 text-white bg-yellow-600 hover:bg-yellow-800 rounded-full px-3 py-2 text-sm font-medium transition">Yolculuklarım</a>
                }
                <a href="/reservations" className="border-2 border-gray-700 text-gray-300 bg-gray-700 hover:bg-gray-900 hover:text-white rounded-full px-3 py-2 text-sm font-medium transition" aria-current="page">Rezervasyonlarım</a>
              </div>
              :
              <div className="hidden sm:ml-6 sm:flex space-x-4 justify-center items-center">
                <a href="/signup" className="border-2 border-yellow-600 text-white bg-yellow-600 hover:bg-yellow-800 rounded-full px-3 py-2 text-sm font-medium transition">Kayıt Ol</a>
                <a href="/login" className="border-2 border-gray-700 text-gray-300 bg-gray-700 hover:bg-gray-900 hover:text-white rounded-full px-3 py-2 text-sm font-medium transition" aria-current="page">Giriş Yap</a>
              </div>
            }
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {loggedInUser &&
              <NavbarKullaniciMenu user={loggedInUser}></NavbarKullaniciMenu>
            }
          </div>
        </div>
      </div>
      {loggedInUser ?
        <div className={`${show ? 'h-24' : 'h-0'} transition-all overflow-hidden space-y-1 px-4 sm:hidden`} id="mobile-menu">
          {loggedInUser['Driver'] &&
            <a href="/my_rides" className="block border-2 border-yellow-600 text-white bg-yellow-600 hover:bg-yellow-800 rounded-full px-3 py-2 text-sm font-medium transition">Yolculuklarım</a>
          }
          <a href="/reservations" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-full px-3 py-2 text-base font-medium transition" aria-current="page">Rezervasyonlarım</a>
        </div>
        :
        <div className={`${show ? 'h-24' : 'h-0'} transition-all overflow-hidden space-y-1 px-4 sm:hidden`} id="mobile-menu">
          <a href="/signup" className="block border-2 border-yellow-600 text-white bg-yellow-600 hover:bg-yellow-800 rounded-full px-3 py-2 text-sm font-medium transition">Kayıt Ol</a>
          <a href="/login" className="block border-2 border-gray-700 text-gray-300 bg-gray-700 hover:bg-gray-900 hover:text-white rounded-full px-3 py-2 text-sm font-medium transition" aria-current="page">Giriş Yap</a>
        </div>
      }
    </nav>
  )
}
