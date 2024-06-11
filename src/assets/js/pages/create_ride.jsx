import RideForm from '@/components/Form/Ride'
import FormAlani from '@/components/FormAlani'
import Navbar from '@/components/Navbar'

export default function CreateRide() {
  return (
    <>
      <Navbar></Navbar>
      <FormAlani renk="yesil" kayan_yazi="YolculukOluştur" form={RideForm}></FormAlani>
    </>
  )
}

