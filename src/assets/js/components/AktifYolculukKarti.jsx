export default function AktifYolculukKarti() {
  return (
    <div className="basis-full sm:basis-1/4 bg-white border shadow-md rounded-lg">
      <div className="p-4 border-b">
        <h2 className="text-lg font-bold">İstanbul - Ankara Yolculuğu</h2>
        <p className="text-sm text-gray-500">Kalkış Tarihi: 26 Temmuz 2022, 09:00</p>
        <p className="text-sm text-gray-500">Yaklaşık Varış Tarihi: 26 Temmuz 2022, 15:00</p>
      </div>
      <div className="p-4">
        <h3 className="text-md font-bold mb-2">Rezervasyonlar</h3>
        <div className="flex flex-row w-full justify-between">
          <div>
            <p className="text-sm">John Doe</p>
            <p className="text-xs text-gray-500">25 yaşında, İstanbul</p>
          </div>
          <button className="text-center bg-blue-500 hover:bg-blue-900 border-blue-500 border-solid border-2 text-white px-3 py-2 text-sm font-medium rounded-full transition">Profilini İncele</button>
        </div>
      </div>
    </div>
  )
}



