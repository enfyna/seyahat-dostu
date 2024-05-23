import SignupForm from '@/components/SignUpForm'
import Navbar from '@/components/Navbar'

export default function SignUp() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col justify-center gap-y-24 my-12 w-screen">
        <div className="relative flex flex-col justify-end form-pattern py-4">
          <div className="overflow-hidden absolute w-50 h-full flex items-center z-0">
            <div className="flex whitespace-nowrap">
              <div className="flex animate-scroll">
                <span className="text-green-900 font-extrabold text-8xl 2xl:text-[11rem]">KayıtOl</span>
                <span className="text-green-900 font-extrabold text-8xl 2xl:text-[11rem]">KayıtOl</span>
                <span className="text-green-900 font-extrabold text-8xl 2xl:text-[11rem]">KayıtOl</span>
                <span className="text-green-900 font-extrabold text-8xl 2xl:text-[11rem]">KayıtOl</span>
                <span className="text-green-900 font-extrabold text-8xl 2xl:text-[11rem]">KayıtOl</span>
                <span className="text-green-900 font-extrabold text-8xl 2xl:text-[11rem]">KayıtOl</span>
                <span className="text-green-900 font-extrabold text-8xl 2xl:text-[11rem]">KayıtOl</span>
                <span className="text-green-900 font-extrabold text-8xl 2xl:text-[11rem]">KayıtOl</span>
                <span className="text-green-900 font-extrabold text-8xl 2xl:text-[11rem]">KayıtOl</span>
                <span className="text-green-900 font-extrabold text-8xl 2xl:text-[11rem]">KayıtOl</span>
              </div>
            </div>
          </div>
          <div className="w-screen relative z-10">
            <div className="container m-auto flex items-center justify-center lg:justify-end gap-4">
              <div className="basis-2/3 max-w-md">
                <SignupForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

