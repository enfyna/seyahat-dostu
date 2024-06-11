import RatingForm from '@/components/Form/Comment'
import FormAlani from '@/components/FormAlani'
import Navbar from '@/components/Navbar'

export default function CreateRating({ userID, driverID, rideID }) {
  return (
    <>
      <Navbar></Navbar>
      <FormAlani renk="yesil" kayan_yazi="YorumYap" form={RatingForm} form_props={{ userID, driverID, rideID }}></FormAlani>
    </>
  )
}

