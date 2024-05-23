import TanitimKartlari from '@/components/TanitimKartlari'
import SikcaSorulanSorular from '@/components/SikcaSorulanSorular'
import FormAlani from '@/components/FormAlani'
import HakkindaKarti from '@/components/HakkındaKarti'
import Navbar from '@/components/Navbar'

export default function Index() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col justify-center gap-y-24 my-12 w-screen">
        <FormAlani></FormAlani>
        <TanitimKartlari></TanitimKartlari>
        <HakkindaKarti></HakkindaKarti>
        <SikcaSorulanSorular></SikcaSorulanSorular>
      </div>
    </>
  )
}
