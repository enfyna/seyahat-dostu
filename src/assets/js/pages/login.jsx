import Navbar from '@/components/Navbar'

export default function Login() {
  return (
    <div className="flex f-screen flex-col items-center justify-center space-y-8 text-center text-gray-700">
      <Navbar></Navbar>

      <div className="container mx-auto p-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-1/2 mx-auto">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6">Giriş Yap</h2>
            <form action="#" method="POST">
              <div className="mb-4">
                <label for="email" className="block text-sm font-medium text-gray-700">E-Posta Adresi</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
                </input>
              </div>
              <div className="mb-4">
                <label for="password" className="block text-sm font-medium text-gray-700">Şifre</label>
                <input type="password" id="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
                </input>
              </div>
              <div className="flex items-center justify-between">
                <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-400 transition-colors duration-300">Giriş Yap</button>
                <a href="#" className="text-blue-500 hover:underline">Şifremi Unuttum</a>
              </div>
            </form>
          </div>
          <div className="bg-gray-200 p-4 text-center">
            <p className="text-sm">Hesabınız yok mu? <a href="#" className="text-blue-500 hover:underline">Kayıt Ol</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
