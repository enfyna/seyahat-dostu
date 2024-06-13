export default function HakkindaKarti() {
  return (
    <div className="w-screen dot-pattern border">
      <div id="Hakkinda" className="container max-w-4xl mx-auto flex flex-col justify-center p-8 overflow-hidden w-full text-center">
        <div className="flex justify-center">
          <img src="/images/logo.png" className="h-40"></img>
        </div>

        <h1 className="text-4xl font-extrabold mt-7 mb-4">Seyahat Dostu</h1>
        <p className="text-xl mb-12">Yolculuk yapmanın yeni ve keyifli hali.</p>


        <div className="text-gray-700">

          <h2 className="font-bold mb-2">Sıkıldığımız Bazı Şeyler Vardı</h2>
          <p className="mb-8">
            <ul className="mb-2">
              <li>Uzun süren otobüs yolculukları</li>
              <li>Zamansız verilen molalar</li>
              <li>Sıkışık koltuklar</li>
              <li>Uzak terminaller</li>
              <li>Denk gelmeyen saatler</li>
            </ul>
            Ve biz de Seyahat Dostu‘nu geliştirdik.
          </p>

          <div className="text-left">
            <h2 className="font-bold mb-2">Neden Seyahat Dostu?</h2>
            <p>
              Ekonomik Yolculuklar: Seyahat Dostu bireysel yolculuk maliyetlerinizi azaltmanın harika bir yoludur. Paylaşımlı yolculuk yaparak ya da boş koltuklarınızı paylaşarak benzin ve yol ücretlerinden tasarruf edin.
            </p>
            <p>
              Yeni İnsanlarla Tanışma Fırsatı: Yolculuklarınızı paylaşırken yeni insanlarla tanışın. Yolculuklarınızı daha keyifli ve sosyal hale getirin.
            </p>
            <p>
              Güvenli ve Güvenilir: Seyahat Dostu, güvenli bir seyahat deneyimi sağlamak için güvenlik önlemleri alır ve kullanıcı değerlendirmeleriyle güvenilir sürücülerin ve yolcuların profilini oluşturur.
            </p>
            <p className="mb-4">
              Her Yerden Ulaşım: WEB tabanlı altyapısıyla bütün cihazlarınızdan erişin.
            </p>

            <h2 className="font-bold mb-2">Nasıl kullanılır?</h2>
            <p>
              Seyahat Dostu web sitesini ziyaret et ve bir kullanıcı kaydı oluştur.<br />
              Gitmek istediğin yeri ve saati seç, senin için uygun yolculukları filtreleyeceğiz.<br />
              Yolculuk yapacağın aracı, şoför ve varsa diğer yolcular hakkındaki bilgilere göz at.<br />
              Detayları konuş ve yerini ayırt, artık yolculuk yapmaya hazırsın!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
