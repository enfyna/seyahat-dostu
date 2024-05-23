import { useState, useRef, useEffect } from "react";
import { usePage } from "@inertiajs/react";

export default function NavbarKullaniciMenu() {
  const { props } = usePage()
  const { loggedInUser } = props

  if(!loggedInUser) return null;

  const [show, setShow] = useState(false)
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
    <div ref={menuRef} className="relative ml-3 z-50">
      <div>
        <button onClick={toggle} type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">Kullanıcı menüsünü aç</span>
          <img className="h-8 w-8 rounded-full" src={`data:image/jpeg;base64,${loggedInUser['Photograph']}`} alt="">
          </img>
        </button>
      </div>
      <div className={`${show ? 'h-32 rounded-md shadow-lg ring-1 ring-black ring-opacity-5' : 'h-0'} overflow-hidden transition-all absolute right-0 z-10 w-48 origin-top-right bg-white focus:outline-none`}>
        <div className="" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
          <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-200 m-1 rounded transition-all" role="menuitem" id="user-menu-item-0">Profil</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-200 m-1 rounded transition-all" role="menuitem" id="user-menu-item-1">Ayarlar</a>
          <a href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-200 m-1 rounded transition-all" role="menuitem" id="user-menu-item-2">Çıkış Yap</a>
        </div>
      </div>
    </div>
  )
}
