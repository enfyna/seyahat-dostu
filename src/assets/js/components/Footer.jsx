import SosyalMedyaButonu from '@/components/SosyalMedyaButonu';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center footer-pattern">
      <div className="w-screen">
        <div className="lg:container mx-auto min-h-[25vh]">
          <div className="min-h-[13vh] p-2 mt-8">
            <div className="h-full w-full font-extrabold text-center text-6xl lg:text-7xl/relaxed text-gray-50">
              Seyahat Dostu
            </div>
            <div className="text-center text-md lg:text-2xl/relaxed text-gray-400">
              Yolculuk yapmanın yeni ve keyifli hali.
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-between p-6 py-12 gap-8">
            <div className="basis-full md:basis-3/5 text-gray-100">
              Seyahat Dostu, paylaşımlı yolculuklarla bireysel yolculuk maliyetlerini azaltmanın ve yeni insanlarla tanışmanın harika bir yoludur. Güvenlik önlemleri ve kullanıcı değerlendirmeleri sayesinde güvenli ve güvenilir bir seyahat deneyimi sunar. WEB tabanlı altyapısı sayesinde her yerden erişim imkanı sağlar.
            </div>
            <div className="flex flex-row flex-wrap gap-4 basis-full md:basis-1/5 justify-center md:justify-end items-center">
              <a href="/#Hakkinda" className="text-center bg-gray-700 hover:bg-gray-900 border-gray-700 border-solid border-2 text-white px-3 py-2 text-sm font-medium rounded-full w-40 transition">
                Hakkımızda
              </a>
              <a href="/#GizlilikPolitikasi" className="text-center bg-gray-700 hover:bg-gray-900 border-gray-700 border-solid border-2 text-white px-3 py-2 text-sm font-medium rounded-full w-40 transition">
                Gizlilik Politikası
              </a>
              <a href="/#SSS" className="text-center bg-gray-700 hover:bg-gray-900 border-gray-700 border-solid border-2 text-white px-3 py-2 text-sm font-medium rounded-full w-40 transition">
                SSS
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center mt-4 w-full min-h-[10vh]">
            <div className="border-gray-400  w-full lg:w-1/3 p-2 flex flex-col">
              <div className="text-gray-100 text-lg font-bold text-center">
                Sosyal Medya
              </div>
              <div className="flex justify-center mb-4">
                <SosyalMedyaButonu type="Instagram" url="https://github.com/enfyna/seyahat-dostu" color="red" />
                <SosyalMedyaButonu type="X" url="https://www.linkedin.com" color="blue" />
                <SosyalMedyaButonu type="Snapchat" url="https://www.linkedin.com" color="yellow" />
              </div>
            </div>
            <div className="border-gray-400 border-t-2 sm:border-x-2 sm:border-t-0 w-full lg:w-1/3 p-2 flex flex-col">
              <div className="text-gray-100 text-lg font-bold text-center">
                İletişim
              </div>
              <div className="flex justify-center mb-4">
                <SosyalMedyaButonu type="Whatsapp" url="https://www.linkedin.com" color="green" />
                <SosyalMedyaButonu type="Telegram" url="https://www.linkedin.com" color="blue" />
                <SosyalMedyaButonu type="Messenger" url="https://www.linkedin.com" color="blue" />
              </div>
            </div>
            <div className="border-gray-400 border-t-2 sm:border-t-0 w-full lg:w-1/3 p-2 flex flex-col">
              <div className="text-gray-100 text-lg font-bold text-center">
                Proje
              </div>
              <div className="flex justify-center mb-4">
                <SosyalMedyaButonu type="Github" url="https://www.github.com/enfyna/seyahat-dostu" color="blue" />
                <SosyalMedyaButonu type="Linkedin" url="https://www.linkedin.com" color="blue" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen p-4 text-red-600 text-center text-xl/relaxed">
          <p>❤</p>
        </div>
      </div>
    </footer>
  );
}

