import { Link } from '@inertiajs/react'
import Navbar from '@/components/Navbar'
import Logo from '@/components/Logo'

export default function Index() {
  return (
    <div className="flex f-screen flex-col items-center justify-center space-y-8 text-center text-gray-700">
      <Navbar></Navbar>

      <Link href="/search" className="text-purple-600 underline">
        Seyahat Bul
      </Link>

      <div className="flex flex-row items-center justify-center space-x-8">
        <Logo url="tailwind.com" name="tailwind"></Logo>
        <Logo url="tailwind.com" name="tailwind"></Logo>
        <Logo url="tailwind.com" name="tailwind"></Logo>
        <Logo url="tailwind.com" name="tailwind"></Logo>
      </div>

    </div>
  )
}


