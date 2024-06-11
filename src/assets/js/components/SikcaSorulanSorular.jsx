import SoruKarti from "./SoruKarti";

export default function SikcaSorulanSorular() {
  const sssData = [
    {
      question: "Seyahat Dostu nasıl çalışır?",
      answer: "Seyahat Dostu, sürücü ve yolcuları buluşturan bir paylaşım uygulamasıdır. Sürücüler yolculuk bilgilerini paylaşır ve yolcular bu yolculuklara katılabilir. Her iki taraf da kimlik doğrulaması yaparak güvenliği sağlar."
    },
    {
      question: "Uygulamayı kullanmak güvenli mi?",
      answer: "Evet, Seyahat Dostu kullanıcı güvenliğini ön planda tutar. Kimlik doğrulama, profil değerlendirmeleri ve güvenlik özellikleri ile güvenli bir yolculuk deneyimi sunar."
    },
    {
      question: "Yolculuk detaylarını nasıl paylaşabilirim?",
      answer: "Yolculuk bilgilerinizi uygulama içindeki paylaşım ekranından kolayca girebilirsiniz. Buluşma noktası, varış yeri, tarih ve saat gibi bilgileri ekleyerek yolcuların sizi bulmasını sağlayabilirsiniz."
    },
    {
      question: "Acil durumlarda ne yapmalıyım?",
      answer: "Acil durumlarda uygulama üzerinden destek hattımıza ulaşabilirsiniz. Ayrıca yerel polis ve acil durum numaralarını da her zaman yanınızda bulundurmanız önerilir."
    },
    {
      question: "Uygulama ücretli mi?",
      answer: "Seyahat Dostu uygulaması ücretsizdir. Ancak, sürücüler yolculuk başına belirli bir ücret talep edebilir. Ücretler, yolculuk detaylarında açıkça belirtilir."
    },
  ];

  return (
    <section className="w-screen dot-pattern border-y border-2 py-8">
      <section id="Hakkinda" className="container max-w-4xl mx-auto flex flex-col justify-center overflow-hidden w-full text-center">
        <div className="flex justify-center">
          <img src="/images/logo.png" className="h-40"></img>
        </div>

        <h1 className="text-4xl font-extrabold mt-7 mb-4">Seyahat Dostu</h1>
        <p className="text-xl mb-12">Yolculuk yapmanın yeni ve keyifli hali.</p>


        <div className="text-gray-700">
          <h2 className="font-bold mb-2 text-gray-900">Sıkıldığımız Bazı Şeyler Vardı</h2>
          <p className="mb-8">
            <ul className="mb-2">
              <li>Uzun süren otobüs yolculukları</li>
              <li>Zamansız verilen molalar</li>
              <li>Sıkışık koltuklar</li>
              <li>Uzak terminaller</li>
              <li>Denk gelmeyen saatler</li>
            </ul>
            <div className="text-gray-900">
              Ve biz de Seyahat Dostu‘nu geliştirdik.
            </div>
          </p>

          <div className="text-left">
            <h2 className="text-2xl font-semibold mb-2 text-black">Neden Seyahat Dostu?</h2>
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

            <h2 className="text-2xl font-semibold mb-2 text-black">Nasıl kullanılır?</h2>
            <p>
              Seyahat Dostu web sitesini ziyaret et ve bir kullanıcı kaydı oluştur.<br />
              Gitmek istediğin yeri ve saati seç, senin için uygun yolculukları filtreleyeceğiz.<br />
              Yolculuk yapacağın aracı, şoför ve varsa diğer yolcular hakkındaki bilgilere göz at.<br />
              Detayları konuş ve yerini ayırt, artık yolculuk yapmaya hazırsın!
            </p>
          </div>
        </div>
      </section>

      <section id="SSS" className="max-w-4xl mx-auto py-10">
        <h1 className="text-4xl font-bold mb-8 mt-8 text-center">Sıkça Sorulan Sorular</h1>
        {sssData.map((sss, index) => (
          <SoruKarti key={index} question={sss.question} answer={sss.answer} />
        ))}
      </section>

      <section id="GizlilikPolitikasi" className="max-w-4xl mx-auto py-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Gizlilik Politikası</h1>
        <p className="text-gray-700 mb-4">
          Seyahat Dostu, kullanıcılarının gizliliğine büyük önem vermektedir. Bu gizlilik sözleşmesi, Seyahat Dostu uygulamasını kullanan kişilerin kişisel bilgilerini nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklamaktadır.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Toplanan Bilgiler</h2>
        <p className="text-gray-700 mb-4">
          Seyahat Dostu, kullanıcıların ad, soyad, e-posta adresi, telefon numarası gibi kişisel bilgilerini toplar. Bu bilgiler, kullanıcıların kimlik doğrulaması ve güvenliği için kullanılmaktadır.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Bilgilerin Kullanımı</h2>
        <p className="text-gray-700 mb-4">
          Toplanan kişisel bilgiler, Seyahat Dostu uygulamasının hizmetlerini sağlamak, kullanıcılarla iletişim kurmak ve kullanıcı deneyimini iyileştirmek için kullanılır. Seyahat Dostu, kullanıcı bilgilerini üçüncü şahıslarla paylaşmaz, satmaz veya kiralamaz.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Güvenlik</h2>
        <p className="text-gray-700 mb-4">
          Seyahat Dostu, kullanıcıların kişisel bilgilerini korumak için gerekli güvenlik önlemlerini almaktadır. Kullanıcı bilgileri, yetkisiz erişim, kullanım veya ifşa edilmelere karşı korunmaktadır.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Değişiklikler</h2>
        <p className="text-gray-700 mb-4">
          Seyahat Dostu, bu gizlilik sözleşmesini zaman zaman güncelleyebilir. Kullanıcılar, gizlilik sözleşmesindeki değişikliklerden haberdar edilmek için düzenli olarak bu sayfayı kontrol etmelidir.
        </p>
        <h2 className="text-2xl font-semibold mb-2">İletişim</h2>
        <p className="text-gray-700 mb-4">
          Bu gizlilik sözleşmesi ile ilgili herhangi bir sorunuz varsa, lütfen bizimle iletişime geçin. İletişim bilgileri, Seyahat Dostu uygulaması üzerinden veya web sitemizde bulunmaktadır.
        </p>
      </section>
    </section>
  );
}
