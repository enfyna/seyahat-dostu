import Navbar from '@/components/Navbar'
import GecmisRezervasyonKarti from '@/components/GeçmişRezervasyonKarti'
import AktifYolculukKarti from '@/components/AktifYolculukKarti';

export default function Reservations({ active_reservations, waiting_reservations, old_reservations }) {
  return (
    <>
      <Navbar></Navbar>
      <div className='w-screen dot-pattern'>
        <div className="container mx-auto flex f-screen flex-col space-y-8 text-gray-700 my-12">

          <div>
            <div className="p-4 bg-gray-800 rounded-t">
              <h1 className="font-bold text-white text-2xl">Rezervasyonlarım</h1>
            </div>
            <div className="flex flex-row gap-4 justify-center p-4 flex-wrap bg-blue-200 rounded-b">
              {
                active_reservations.map((ride) => {
                  return (<AktifYolculukKarti key={ride.id} tip={"Sürücü"} yolculuk={ride} />)
                })
              }
            </div>
          </div>

          <div>
            <div className="p-4 bg-gray-800 rounded-t">
              <h1 className="font-bold text-white text-2xl">Değerlendirme Bekleyen Rezervasyonlarım</h1>
            </div>
            <div className="flex flex-row gap-4 p-4 flex-wrap bg-blue-200 rounded-b">
              {
                waiting_reservations.map((ride) => {
                  return (<GecmisRezervasyonKarti key={ride.id} yolculuk={ride} tip="Yorum" />)
                })
              }
            </div>
          </div>

          <div>
            <div className="p-4 bg-gray-800 rounded-t">
              <h1 className="font-bold text-white text-2xl">Geçmiş Rezervasyonlarım</h1>
            </div>
            <div className="flex flex-row gap-4 p-4 flex-wrap bg-blue-200 rounded-b">
              {
                old_reservations.map((ride) => {
                  return (<GecmisRezervasyonKarti key={ride.id} yolculuk={ride} />)
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
