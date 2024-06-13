import LoginForm from '@/components/Form/Login'
import FormAlani from '@/components/FormAlani.jsx'
import Navbar from '@/components/Navbar'

export default function Login({ user }) {
  return (
    <>
      <Navbar user={user}></Navbar>
      <FormAlani renk="yesil" kayan_yazi="GirişYap" form={LoginForm}></FormAlani>
    </>
  )
}
