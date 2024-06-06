import TanitimKartlari from '@/components/TanitimKartlari'
import SikcaSorulanSorular from '@/components/SikcaSorulanSorular'
import FormAlani from '@/components/FormAlani'
import Form from '@/components/Form'
import HakkindaKarti from '@/components/HakkındaKarti'

export default function Index() {
  return (
    <div className="flex flex-col justify-center gap-y-24 my-12 w-screen">
      <FormAlani kayan_yazi="SeyahatDostu" renk="logo" form={Form}></FormAlani>
      <TanitimKartlari></TanitimKartlari>
      <SikcaSorulanSorular></SikcaSorulanSorular>
      <HakkindaKarti></HakkindaKarti>
    </div>
  )
}
