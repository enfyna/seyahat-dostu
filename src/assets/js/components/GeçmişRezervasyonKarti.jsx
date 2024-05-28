export default function GecmisRezervasyonKarti() {
  return (
    <div className="basis-full bg-white border shadow-md rounded-lg overflow-hidden min-w-fit">
      <div className="p-4 border-b">
        <h2 className="text-lg font-bold">Ankara - İzmir Yolculuğu</h2>
        <p className="text-sm text-gray-500">Kalkış Tarihi: 30 Temmuz 2022, 10:00</p>
        <p className="text-sm text-gray-500">Yaklaşık Varış Tarihi: 30 Temmuz 2022, 16:00</p>
      </div>
      <div className="p-4 flex justify-between items-center">
        <div>
          <p className="text-sm">Jane Doe</p>
          <p className="text-xs text-gray-500">30 yaşında, Ankara</p>
        </div>
        <button className="text-center bg-blue-500 hover:bg-blue-900 border-blue-500 border-solid border-2 text-white px-3 py-2 text-sm font-medium rounded-full transition">Profilini İncele</button>
      </div>
    </div>
  )
}


