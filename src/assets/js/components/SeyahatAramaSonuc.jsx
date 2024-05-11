export default function SeyahatAramaSonuc(props) {
  return (
    <div>
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
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-400 transition-colors duration-300">Profilini İncele</button>
      </div>
    </div>
  )
}
