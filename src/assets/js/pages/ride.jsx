import Navbar from "@/components/Navbar";

export default function Ride({ ride }) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  const date = new Date(ride.Departure_Time)

  const est_time = ride.Time
  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto p-8 dot-pattern">
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-3/4 mx-auto">
          <div>

            <div className="flex items-center justify-between border-b p-8">
              <div className="">
                <h2 className="text-2xl font-bold mb-4">{ride['Departure_Point']} - {ride['Arrival_Point']}</h2>
                <p className="text-gray-900">Kalkış Tarihi: {date.toLocaleDateString("tr", options)}</p>
                <p className="text-gray-900">Tahmini Yolculuk Süresi: {est_time} saat</p>
              </div>
              <img src="/images/logo.png" alt="User Avatar" className="w-24 h-24 rounded-full">
              </img>
            </div>

            <div className="border-b p-8">
              <h3 className="text-lg font-bold mb-2">Yolculuk Ayrıntıları</h3>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-900">Araç: {ride['Car_Brand']} {ride['Car_Model']}</p>
                  <p className="text-gray-900">Fiyat: {ride['Price']} TL</p>
                  <p className="text-gray-900">Yolcu Kapasitesi: {ride['Number_of_Ppl']}</p>
                </div>
              </div>
            </div>

            <div className="border-b p-8">
              <h3 className="text-lg font-bold mb-4">Özel Mesaj</h3>
              <p className="text-gray-900">{ride['Message']}</p>
            </div>

            <div className="border-b p-8">
              <h3 className="text-lg font-bold mb-4">Sürücü</h3>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-bold">{ride['Driver']['Name']}</p>
                  <p className="font-extralight mb-4 text-gray-500">{ride['Driver']['Age']} yaşında, {ride['Driver']['Location']}</p>
                </div>
                <div>
                  <a href={"/profile?id=" + ride.Driver.id}>
                    <button className="text-center bg-blue-500 hover:bg-blue-900 border-blue-500 border-solid border-2 text-white px-3 py-2 text-sm font-medium rounded-full transition">Profilini İncele ↗</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 p-4 text-center">
            <a href={"/book?id=" + ride.id}>
              <button className="text-center bg-blue-500 hover:bg-blue-900 border-blue-500 border-solid border-2 text-white px-3 py-2 text-sm font-medium rounded-full transition">Rezervasyon Al</button>
            </a>
          </div>
        </div>
      </div >
    </>
  )
}
