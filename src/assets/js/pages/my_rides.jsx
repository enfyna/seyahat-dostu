import BeklemedeYolculukKarti from '@/components/BeklemedeYolculukKarti'
import AktifYolculukKarti from '@/components/AktifYolculukKarti'

export default function MyRides() {
  return (
    <div className="container mx-auto flex flex-col space-y-8 text-gray-700 my-12">

      <div>
        <div className="p-4 bg-gray-800 rounded-t">
          <h1 className="font-bold text-white text-2xl">Aktif Yolculuklarım</h1>
        </div>
        <div className="flex flex-row justify-center gap-4 p-4 flex-wrap bg-pink-200 rounded-b">
          <AktifYolculukKarti></AktifYolculukKarti>
          <AktifYolculukKarti></AktifYolculukKarti>
          <AktifYolculukKarti></AktifYolculukKarti>
          <AktifYolculukKarti></AktifYolculukKarti>
        </div>
      </div>

      <div>
        <div className="p-4 bg-gray-800 rounded-t">
          <h1 className="font-bold text-white text-2xl">Beklemede</h1>
        </div>
        <div className="flex flex-row justify-center gap-4 p-4 flex-wrap bg-pink-200 rounded-b">
          <BeklemedeYolculukKarti></BeklemedeYolculukKarti>
          <BeklemedeYolculukKarti></BeklemedeYolculukKarti>
          <BeklemedeYolculukKarti></BeklemedeYolculukKarti>
          <BeklemedeYolculukKarti></BeklemedeYolculukKarti>
          <BeklemedeYolculukKarti></BeklemedeYolculukKarti>
        </div>
      </div>

    </div>
  )
}


