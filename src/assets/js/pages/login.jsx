import LoginForm from '@/components/Form/Login'
import FormAlani from '@/components/FormAlani.jsx'
import Navbar from '@/components/Navbar'

export default function Login() {
  return (
    <>
      <Navbar></Navbar>
      <FormAlani renk="yesil" kayan_yazi="GirişYap" form={LoginForm}></FormAlani>
    </>
  )
}
