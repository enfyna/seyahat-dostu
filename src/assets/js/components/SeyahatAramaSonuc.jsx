export default function SeyahatAramaSonuc({ yolculuk }) {
  //<div className="p-4 flex justify-between items-center">
  //  <div className="text-left">
  //    <p className="text-sm">{yolculuk.Driver.Name}</p>
  //    <p className="text-xs text-gray-500">{yolculuk.Driver.Age} yaşında, {yolculuk.Driver.Location}</p>
  //  </div>
  //  <a href={"/profile?id=" + yolculuk.Driver.id}>
  //    <button className="text-center bg-blue-500 hover:bg-blue-900 border-blue-500 border-solid border-2 text-white px-3 py-2 text-sm font-medium rounded-full transition">Profilini İncele ↗</button>
  //  </a>
  //</div>
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  const date = new Date(yolculuk.Departure_Time)

  const est_time = yolculuk.Time
  return (
    <div className="border rounded w-6/12 bg-white shadow-md">
      <div className="flex flex-row p-4 border-b justify-between">
        <div className="text-left">
          <h2 className="text-lg font-bold mb-2">{yolculuk['Departure_Point']} - {yolculuk['Arrival_Point']} Yolculuğu</h2>
          <p className="text-sm text-gray-500">Kalkış Tarihi: {date.toLocaleDateString("tr", options)}</p>
          <p className="text-sm text-gray-500">Tahmini Yolculuk Süresi: {est_time} saat</p>
          <p className="text-sm text-gray-500">Yolcu Kapasitesi: {yolculuk.Number_of_Ppl}</p>
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-2xl">
            {yolculuk.Price}₺
          </div>
          <a href={"/ride?id=" + yolculuk.id}>
            <button className="text-center bg-green-500 hover:bg-green-900 border-green-500 border-solid border-2 text-white px-3 py-2 text-sm font-medium rounded-full transition">İncele</button>
          </a>
        </div>
      </div>
    </div>
  )
}
