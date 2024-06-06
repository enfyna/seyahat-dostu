export default function BeklemedeYolculukKarti() {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex flex-row p-4 border-b gap-x-24">
        <div>
          <h2 className="text-lg font-bold">Ankara - İzmir Yolculuğu</h2>
          <p className="text-sm text-gray-500">Kalkış Tarihi: 28 Temmuz 2022, 10:00</p>
          <p className="text-sm text-gray-500">Yaklaşık Varış Tarihi: 28 Temmuz 2022, 16:00</p>
        </div>
        <div className="flex flex-row gap-2">
          <button className="h-10 w-10 text-center bg-blue-500 hover:bg-blue-900 border-blue-500 border-solid border-2 text-white px-3 py-2 text-sm font-medium rounded-full transition">✎</button>
          <button className="h-10 w-10 rounded-full text-center bg-red-500 hover:bg-red-900 border-red-500 border-solid border-2 text-white px-3 py-2 text-sm font-medium transition">✗</button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-md font-bold mb-2">Rezervasyonlar</h3>
        <p className="text-sm text-gray-500">Beklemede</p>
      </div>
    </div>
  )
}


