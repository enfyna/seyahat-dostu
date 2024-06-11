import { Link } from "@inertiajs/react";

export default function GecmisRezervasyonKarti({ tip = "", yolculuk }) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  const date = new Date(yolculuk.Departure_Time)

  const est_time = yolculuk.Time
  return (
    <div className="basis-full bg-white border shadow-md rounded overflow-hidden min-w-fit">
      <div className="flex flex-row p-4 justify-between border-b">
        <div className="">
          <h2 className="text-lg font-bold">{yolculuk['Departure_Point']} - {yolculuk['Arrival_Point']} Yolculuğu</h2>
          <p className="text-sm text-gray-500">Kalkış Tarihi: {date.toLocaleDateString("tr", options)}</p>
          <p className="text-sm text-gray-500">Tahmini Yolculuk Süresi: {est_time} saat</p>
        </div>
        {
          tip == "Yorum" &&
          <div>
            <Link href="/create_comment" data={{ rideID: yolculuk.id }} as="button" className="text-center bg-green-500 hover:bg-green-900 border-green-500 border-solid border-2 text-white px-3 py-2 text-sm font-medium rounded-full transition">
              Yorum Yaz
            </Link>
          </div>
        }
      </div>
      <div className="p-4 flex justify-between items-center">
        <div>
          <p className="text-sm">{yolculuk.Driver.Name}</p>
          <p className="text-xs text-gray-500">{yolculuk.Driver.Age} yaşında, {yolculuk.Driver.Location}</p>
        </div>
        <a href={"/profile?id=" + yolculuk.Driver.id}>
          <button className="text-center bg-blue-500 hover:bg-blue-900 border-blue-500 border-solid border-2 text-white px-3 py-2 text-sm font-medium rounded-full transition">Profilini İncele ↗</button>
        </a>
      </div>
    </div>
  )
}
