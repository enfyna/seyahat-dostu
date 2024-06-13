import { Link, router } from "@inertiajs/react"

export default function AktifYolculukKarti({ tip, yolculuk }) {
  const user = tip == "Müşteri" ? yolculuk.Customer : yolculuk.Driver

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  const date = new Date(yolculuk.Departure_Time)

  const est_time = yolculuk.Time

  return (
    <div className="basis-full bg-white border shadow-md rounded">
      <div className="flex flex-row justify-between p-4 border-b">
        <div>
          <h2 className="text-lg font-bold">{yolculuk['Departure_Point']} - {yolculuk['Arrival_Point']} Yolculuğu</h2>
          <p className="text-sm text-gray-500">Kalkış Tarihi: {date.toLocaleDateString("tr", options)}</p>
          <p className="text-sm text-gray-500">Tahmini Yolculuk Süresi: {est_time} saat</p>
        </div>
        {
          tip == "Müşteri" && date.getTime() <= new Date().getTime() &&
          <div>
            <Link method="post" data={{ rideID: yolculuk.id }} href="/api/rides/complete" as="button" onFinish={() => router.visit('/my_rides')} className="text-center bg-green-500 hover:bg-green-900 border-green-500 border-solid border-2 text-white px-3 py-2 text-sm font-medium rounded-full transition">
              ✔&nbsp;Yolculuğu Sonlandır
            </Link>
          </div>
        }
      </div>
      <div className="p-4">
        <h3 className="text-md font-semibold mb-2">{tip}</h3>
        <div className="flex flex-row w-full justify-between">
          <div>
            <p className="text-sm">{user.Name}</p>
            <p className="text-xs text-gray-500">{user.Age} yaşında, {user.Location}</p>
          </div>
          <a href={"/profile?id=" + user.id}>
            <button className="text-center bg-blue-500 hover:bg-blue-900 border-blue-500 border-solid border-2 text-white px-3 py-2 text-sm font-medium rounded-full transition">Profilini İncele ↗</button>
          </a>
        </div>
      </div>
    </div>
  )
}



