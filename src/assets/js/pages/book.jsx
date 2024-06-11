import BookForm from "@/components/Form/Book";
import FormAlani from "@/components/FormAlani";
import Navbar from "@/components/Navbar";

export default function Book({ rideID }) {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex f-screen flex-col items-center justify-center space-y-8 text-center text-gray-700">
        <FormAlani kayan_yazi={"RezervasyonAl"} renk={"yesil"} form={BookForm} form_props={{rideID }}></FormAlani>
      </div>
    </>
  )
}


