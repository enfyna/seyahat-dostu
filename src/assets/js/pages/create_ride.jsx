import RideForm from '@/components/Form/Ride'
import FormAlani from '@/components/FormAlani'
import Navbar from '@/components/Navbar'

export default function CreateRide({ user }) {
  return (
    <>
      <Navbar user={user}></Navbar>
      <FormAlani renk="yesil" kayan_yazi="YolculukOluştur" form={RideForm}></FormAlani>
    </>
  )
}

