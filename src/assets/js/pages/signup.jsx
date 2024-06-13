import SignupForm from '@/components/Form/SignUp'
import FormAlani from '@/components/FormAlani'
import Navbar from '@/components/Navbar'

export default function SignUp({ user }) {
  return (
    <>
      <Navbar user={user}></Navbar>
      <FormAlani renk="kirmizi" kayan_yazi="KayıtOl" form={SignupForm}></FormAlani>
    </>
  )
}
