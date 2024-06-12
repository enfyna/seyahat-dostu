import RatingForm from '@/components/Form/Comment'
import FormAlani from '@/components/FormAlani'
import Navbar from '@/components/Navbar'

export default function CreateRating({ user, userID, driverID, rideID }) {
  return (
    <>
      <Navbar user={ user }></Navbar>
      <FormAlani renk="yesil" kayan_yazi="YorumYap" form={RatingForm} form_props={{ userID, driverID, rideID }}></FormAlani>
    </>
  )
}

