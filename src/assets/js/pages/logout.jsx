import { router, usePage } from "@inertiajs/react"

export default function Logout() {
  const { props } = usePage()
  const { loggedInUser } = props

  if (!loggedInUser) {
    router.visit('/')
  }

  router.post('/api/users/logout', null, {
    onFinish: () => {
      setTimeout(() => {
        router.visit('/')
      }, 3000)
    }
  })

  return (
    <div className="flex overflow-hidden flex-col justify-center w-screen min-h-screen xl:min-h-[50vh]">
      <div className="flex flex-col justify-center form-pattern py-4 min-h-screen xl:min-h-[50vh]">
        <div className="w-50 h-full flex items-center z-0">
          <div className="flex whitespace-nowrap">
            <div className="flex animate-scroll">
              <span className="text-blue-900 font-extrabold text-8xl 2xl:text-[11rem]">ÇıkışYapılıyor</span>
              <span className="text-blue-900 font-extrabold text-8xl 2xl:text-[11rem]">ÇıkışYapılıyor</span>
              <span className="text-blue-900 font-extrabold text-8xl 2xl:text-[11rem]">ÇıkışYapılıyor</span>
              <span className="text-blue-900 font-extrabold text-8xl 2xl:text-[11rem]">ÇıkışYapılıyor</span>
              <span className="text-blue-900 font-extrabold text-8xl 2xl:text-[11rem]">ÇıkışYapılıyor</span>
              <span className="text-blue-900 font-extrabold text-8xl 2xl:text-[11rem]">ÇıkışYapılıyor</span>
              <span className="text-blue-900 font-extrabold text-8xl 2xl:text-[11rem]">ÇıkışYapılıyor</span>
              <span className="text-blue-900 font-extrabold text-8xl 2xl:text-[11rem]">ÇıkışYapılıyor</span>
              <span className="text-blue-900 font-extrabold text-8xl 2xl:text-[11rem]">ÇıkışYapılıyor</span>
              <span className="text-blue-900 font-extrabold text-8xl 2xl:text-[11rem]">ÇıkışYapılıyor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


