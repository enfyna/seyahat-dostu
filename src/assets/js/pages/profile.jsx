import Navbar from '@/components/Navbar';
import Yorum from '@/components/Yorum'

export default function Profile({ user, profile, ratings }) {
  return (
    <>
      <Navbar user={user}></Navbar>
      <div className="flex f-screen flex-col items-center justify-center space-y-8 my-12 text-center text-gray-700 dot-pattern">
        <div className="container mx-auto">
          <div>

            <div className="p-4 bg-gray-800 rounded-t">
              <h1 className="text-white text-left text-2xl font-bold">Profil Sayfası</h1>
            </div>

            <div className="flex flex-row gap-4 justify-center p-4 flex-wrap bg-blue-200 rounded-b">
              <div className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-3/4 mx-auto">

                <div className="flex items-center justify-between p-6 border-b">
                  <div className='flex flex-row'>
                    <img src={`data:image/jpeg;base64,${profile['Photograph']}`} alt="Profile Picture" className="mr-4 w-24 h-24 rounded-full border-2 border-teal-300 shadow-lg"></img>
                    <div className='text-left'>
                      <h2 className="text-2xl font-bold mb-2">{profile['Name']}</h2>
                      <p className="text-gray-500">{profile['Age']} yaşında</p>
                      <p className="text-gray-500">{profile['Location']}</p>
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <span className="font-extrabold text-4xl text-yellow-500 ">{profile['Point']}</span>
                    <span className="font-bold">Puan</span>
                  </div>
                </div>

                <div className="flex flex-col items-start justify-center p-6 border-b">
                  <h3 className="text-lg font-bold mb-2 text-left">İlgi Alanları</h3>
                  <p className='mb-4'><span className="font-bold text-green-400 text-left ">{profile['Interests']}</span></p>
                  {
                    profile['Smoking'] &&
                    <p><span className="font-bold text-red-400 text-left">Sigara İçiyor</span></p>
                  }
                </div>
                <div className="flex flex-col items-start justify-center p-6 border-b">
                  <div className="text-left">
                    <h3 className="text-lg font-bold mb-4">Hakkımda</h3>
                    <p className='mb-8'>
                      {profile['About']}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >

        <div className="container mx-auto">
          <div>
            <div className="p-4 bg-gray-800 rounded-t">
              <h1 className="text-white text-left text-2xl font-bold">Yorumlar ve Puanlar</h1>
            </div>
            <div className="flex flex-row justify-center p-4 flex-wrap bg-blue-200 rounded-b">
              <div className="container flex flex-col gap-4 items-center justify-center mx-auto">
                {
                  ratings.map((rating) => {
                    return (<Yorum key={rating.id} yorum={rating} />)
                  })
                }
              </div>
            </div>
          </div>
        </div >
      </div >
    </>
  )
}

