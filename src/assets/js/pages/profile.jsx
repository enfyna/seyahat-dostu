import Yorum from '@/components/Yorum'

export default function Profile() {
  return (
    <div className="flex f-screen flex-col items-center justify-center space-y-8 my-12 text-center text-gray-700">
      <div className="container mx-auto">
        <div>
          <div className="p-4 bg-gray-800 rounded-t">
            <h1 className="text-white text-left text-2xl font-bold">Profil Sayfası</h1>
          </div>
          <div className="flex flex-row gap-4 justify-center p-4 flex-wrap bg-blue-200 rounded-b">

            <div className="bg-white p-6 shadow-md rounded-lg overflow-hidden w-full md:w-3/4 mx-auto">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">John Doe</h2>
                  <p className="text-gray-500">25 yaşında</p>
                  <p className="text-gray-500">İstanbul, Türkiye</p>
                </div>
                <img src="https://via.placeholder.com/150" alt="Profile Picture" className="w-24 h-24 rounded-full">
                </img>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold">Profil Bilgileri</h3>
                <p><span className="font-bold">Araç:</span> BMW X5</p>
                <p><span className="font-bold">İlgi Alanları:</span> Doğa yürüyüşü, tarih, fotoğrafçılık</p>
                <p><span className="font-bold">Sigara İçiyor mu:</span> Hayır</p>
                <p><span className="font-bold">Alkol İçiyor mu:</span> Nadiren</p>
                <p><span className="font-bold">Puan Değerlendirmesi:</span> 4.7</p>
                <div className="mt-8">
                  <h3 className="text-lg font-bold">Hakkımda</h3>
                  <p>Merhaba! Ben John Doe, seyahat etmeyi seven biriyim. Doğayla iç içe olmayı, yeni kültürler keşfetmeyi ve harika manzaraları fotoğraflamayı çok seviyorum. Sigara içmiyorum, nadiren alkol tüketirim. Seyahatlerim sırasında edindiğim deneyimleri ve izlenimleri paylaşmayı, yeni yerler keşfetmeyi ve farklı kültürlerle etkileşimde bulunmayı seviyorum. Seyahat arkadaşlarımla keyifli zaman geçirmek benim için önemli. Gelecekte daha birçok güzel yeri keşfetmek ve unutulmaz anılar biriktirmek istiyorum!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >

      <div className="container mx-auto">
        <div>
          <div className="p-4 bg-gray-800 rounded-t">
            <h1 className="text-white text-left text-2xl font-bold">Yorumlar ve Puanlar</h1>
          </div>
          <div className="flex flex-row gap-4 justify-center p-4 flex-wrap bg-blue-200 rounded-b">
            <div className="container flex flex-col gap-8 items-center justify-center mx-auto">

              <Yorum></Yorum>
              <Yorum></Yorum>
              <Yorum></Yorum>

            </div>
          </div>

        </div>

      </div >

    </div >
  )
}

