import Navbar from '@/components/Navbar'
import BeklemedeYolculukKarti from '@/components/BeklemedeYolculukKarti'
import AktifYolculukKarti from '@/components/AktifYolculukKarti.jsx'
import GecmisYolculukKarti from '@/components/GecmisYolculukKarti';

export default function MyRides({ active_rides, waiting_rides, history_rides }) {
  return (
    <>
      <Navbar></Navbar>
      <div className='dot-pattern w-screen'>
        <div className="container mx-auto flex flex-col space-y-8 text-gray-700 my-12 ">

          <div>
            <div className="flex flex-row justify-center gap-4 p-4 flex-wrap rounded-b">
              <a href="/create_ride" className="rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-32 mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">+ &nbsp;&nbsp; Yeni Yolculuk Oluştur</span>
              </a>
            </div>
          </div>

          <div>
            <div className="p-4 bg-gray-800 rounded-t">
              <h1 className="font-bold text-white text-2xl">Aktif Yolculuklarım</h1>
            </div>
            <div className="flex flex-row justify-center gap-4 p-4 flex-wrap bg-pink-200 rounded-b">
              {
                active_rides.map((ride) => {
                  return (<AktifYolculukKarti key={ride.id} tip={"Müşteri"} yolculuk={ride} />)
                })
              }
            </div>
          </div>

          <div>
            <div className="p-4 bg-gray-800 rounded-t">
              <h1 className="font-bold text-white text-2xl">Beklemede</h1>
            </div>
            <div className="flex flex-row justify-center gap-4 p-4 flex-wrap bg-pink-200 rounded-b">
              {
                waiting_rides.map((ride) => {
                  return (<BeklemedeYolculukKarti key={ride.id} yolculuk={ride} />)
                })
              }
            </div>
          </div>

          <div>
            <div className="p-4 bg-gray-800 rounded-t">
              <h1 className="font-bold text-white text-2xl">Geçmiş Yolculuklarım</h1>
            </div>
            <div className="flex flex-row justify-center gap-4 p-4 flex-wrap bg-pink-200 rounded-b">
              {
                history_rides.map((ride) => {
                  return (<GecmisYolculukKarti key={ride.id} tip={"Müşteri"} yolculuk={ride} />)
                })
              }
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
