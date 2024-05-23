import { router, usePage } from "@inertiajs/react"

export default function Logout() {
  const { props } = usePage()
  const { loggedInUser } = props

  if (!loggedInUser) {
    router.visit('/')
    return
  }

  router.post('/api/users/logout', null, {
    onFinish: () => {
      setTimeout(() => {
        router.visit('/')
      }, 3000)
    }
  })

  return (
    <div className="flex flex-col justify-center w-screen min-h-screen">
      <div className="relative flex flex-col justify-end form-pattern py-4">
        <div className="overflow-hidden absolute w-50 h-full flex items-center z-0">
          <div className="flex whitespace-nowrap">
            <div className="flex animate-scroll">
              <span className="text-blue-900 font-extrabold text-8xl 2xl:text-[11rem]">ÇıkışYap</span>
              <span className="text-blue-900 font-extrabold text-8xl 2xl:text-[11rem]">ÇıkışYap</span>
              <span className="text-blue-900 font-extrabold text-8xl 2xl:text-[11rem]">ÇıkışYap</span>
              <span className="text-blue-900 font-extrabold text-8xl 2xl:text-[11rem]">ÇıkışYap</span>
              <span className="text-blue-900 font-extrabold text-8xl 2xl:text-[11rem]">ÇıkışYap</span>
              <span className="text-blue-900 font-extrabold text-8xl 2xl:text-[11rem]">ÇıkışYap</span>
              <span className="text-blue-900 font-extrabold text-8xl 2xl:text-[11rem]">ÇıkışYap</span>
              <span className="text-blue-900 font-extrabold text-8xl 2xl:text-[11rem]">ÇıkışYap</span>
              <span className="text-blue-900 font-extrabold text-8xl 2xl:text-[11rem]">ÇıkışYap</span>
              <span className="text-blue-900 font-extrabold text-8xl 2xl:text-[11rem]">ÇıkışYap</span>
            </div>
          </div>
        </div>
        <div className="w-screen relative z-10">
          <div className="container m-auto flex items-center justify-center lg:justify-end gap-4">
            <div className="basis-2/3 max-w-md">
              Çıkış Yapılıyor
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


