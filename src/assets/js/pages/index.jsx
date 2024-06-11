import TanitimKartlari from '@/components/TanitimKartlari'
import SikcaSorulanSorular from '@/components/SikcaSorulanSorular'
import FormAlani from '@/components/FormAlani'
import SearchForm from '@/components/Form/Search'
import Navbar from '@/components/Navbar'

export default function Index() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col justify-center gap-y-24 my-12 w-screen">
        <FormAlani kayan_yazi="SeyahatDostu" renk="logo" form={SearchForm}></FormAlani>
        <TanitimKartlari></TanitimKartlari>
        <SikcaSorulanSorular></SikcaSorulanSorular>

      </div>
    </>
  )
}
