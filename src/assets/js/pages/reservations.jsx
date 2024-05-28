import AktifRezervasyonKarti from '@/components/AktifRezervasyonKarti'
import GecmisRezervasyonKarti from '@/components/GeçmişRezervasyonKarti'
//import { Link } from '@inertiajs/react'

export default function Reservations() {
  return (
    <div className="container mx-auto flex f-screen flex-col space-y-8 text-gray-700 my-12">

      <div>
        <div className="p-4 bg-gray-800 rounded-t">
          <h1 className="font-bold text-white text-2xl">Rezervasyonlarım</h1>
        </div>
        <div className="flex flex-row gap-4 justify-center p-4 flex-wrap bg-blue-200 rounded-b">
          <AktifRezervasyonKarti></AktifRezervasyonKarti>
          <AktifRezervasyonKarti></AktifRezervasyonKarti>
          <AktifRezervasyonKarti></AktifRezervasyonKarti>
          <AktifRezervasyonKarti></AktifRezervasyonKarti>
          <AktifRezervasyonKarti></AktifRezervasyonKarti>
        </div>
      </div>

      <div>
        <div className="p-4 bg-gray-800 rounded-t">
          <h1 className="font-bold text-white text-2xl">Geçmiş Rezervasyonlarım</h1>
        </div>
        <div className="flex flex-row gap-4 p-4 flex-wrap bg-blue-200 rounded-b">
          <GecmisRezervasyonKarti></GecmisRezervasyonKarti>
          <GecmisRezervasyonKarti></GecmisRezervasyonKarti>
          <GecmisRezervasyonKarti></GecmisRezervasyonKarti>
          <GecmisRezervasyonKarti></GecmisRezervasyonKarti>
          <GecmisRezervasyonKarti></GecmisRezervasyonKarti>
          <GecmisRezervasyonKarti></GecmisRezervasyonKarti>
        </div>
      </div>

    </div>
  )
}


