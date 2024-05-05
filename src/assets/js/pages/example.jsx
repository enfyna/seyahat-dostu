import { Link } from '@inertiajs/react'
import Navbar from '@/components/Navbar'
export default function Hello({ quote }) {
  return (
    <div className="flex h-screen flex-col items-center space-y-8 text-center text-gray-700">
      <Navbar></Navbar>
      <p className="text-xl">{quote}</p>
      <Link href="/" className="text-purple-600 underline">
        Back to Home
      </Link>
    </div>
  )
}
