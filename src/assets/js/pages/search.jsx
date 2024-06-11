import HakkindaKarti from '@/components/HakkındaKarti'
import Navbar from '@/components/Navbar'
import SeyahatAramaSonuc from '@/components/SeyahatAramaSonuc'

export default function Search({ rides }) {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex f-screen flex-col items-center justify-center space-y-8 p-8 text-center text-gray-700 dot-pattern">

        {
          rides.length > 0 ? rides.map((ride) => {
            return (<SeyahatAramaSonuc key={ride.id} yolculuk={ride} />)
          })
            :
            <div className="border rounded w-6/12 bg-white shadow-md min-h-[50vh]">
              <div className="flex flex-row p-4 border-b justify-between text-center">
                Yolculuk Bulunamadı
              </div>
              <div className='p-4 flex flex-row min-h-[85%] justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="h-32 w-32" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
                </svg>
              </div>
            </div>
        }

      </div>
    </>
  )
}

