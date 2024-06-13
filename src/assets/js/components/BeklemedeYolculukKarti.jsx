import { Link, router } from "@inertiajs/react";

export default function BeklemedeYolculukKarti({ yolculuk }) {
  //<button className="h-10 w-10 text-center bg-blue-500 hover:bg-blue-900 border-blue-500 border-solid border-2 text-white px-3 py-2 text-sm font-medium rounded-full transition">✎</button>
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  const date = new Date(yolculuk.Departure_Time)

  const est_time = yolculuk.Time
  return (
    <div className="basis-full bg-white shadow-md rounded overflow-hidden">
      <div className="flex flex-row justify-between p-4 border-b gap-x-24">
        <div>
          <h2 className="text-lg font-bold">{yolculuk['Departure_Point']} - {yolculuk['Arrival_Point']} Yolculuğu</h2>
          <p className="text-sm text-gray-500">Kalkış Tarihi: {date.toLocaleDateString("tr", options)}</p>
          <p className="text-sm text-gray-500">Tahmini Yolculuk Süresi: {est_time} saat</p>
        </div>
        <div className="flex flex-row gap-2">
          <Link href={'/api/rides/' + yolculuk.id} method="delete" onFinish={() => router.visit('/my_rides')} className="h-10 w-10 rounded-full text-center bg-red-500 hover:bg-red-900 border-red-500 border-solid border-2 text-white px-3 py-2 text-sm font-medium transition" as="button">✗</Link>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-md font-bold mb-2">Rezervasyonlar</h3>
        <p className="text-sm text-gray-500">Beklemede</p>
      </div>
    </div>
  )
}


