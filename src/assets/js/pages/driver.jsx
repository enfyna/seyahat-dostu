import DriverForm from '@/components/Form/Driver'
import FormAlani from '@/components/FormAlani'
import Navbar from '@/components/Navbar'

export default function BecomeDriver({ user }) {
  return (
    <>
      <Navbar user={user}></Navbar>
      <FormAlani renk="yesil" kayan_yazi="ŞoförOl!" form={DriverForm} form_props={{ user }}></FormAlani>
    </>
  )
}

