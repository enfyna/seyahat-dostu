import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function SignupForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Password: '',
    confirmPassword: '',
    Interests: [],
    Smoking: false,
    Photograph: null,
    Age: 18,
    Location: '',
    About: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [shake, setShake] = useState(false);
  const [newInterest, setNewInterest] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'Phone') {
      const formattedPhone = formatPhoneNumber(value);
      setFormData({
        ...formData,
        Phone: formattedPhone
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
        setFormData({
          ...formData,
          Photograph: base64String
        });
      };
      reader.readAsDataURL(file);
    } else {
      alert('Yalnızca JPG veya PNG dosyalarına izin verilmektedir.');
    }
  };

  const handleNextStep = () => {
    const { Email, Phone, Name, Password, confirmPassword } = formData;
    if (!Email || !Phone || !Name || !Password || !confirmPassword || Password !== confirmPassword) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } else {
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { Name, Password, Age, Location } = formData;
    if (!Name || !Password || !Age || !Location || Age < 18) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } else {
      // Form submission logic goes here
      delete formData.confirmPassword
      if (typeof formData.Interests == 'object')
        formData.Interests = formData.Interests.join(", ")

      router.post('/api/users', formData, {
        onFinish: () => router.visit('/'),
      })
    }
  };

  const handleAddInterest = () => {
    if (newInterest && !formData.Interests.includes(newInterest)) {
      setFormData({
        ...formData,
        Interests: [...formData.Interests, newInterest]
      });
      setNewInterest('');
    }
  };

  const handleRemoveInterest = (interest) => {
    setFormData({
      ...formData,
      Interests: formData.Interests.filter(i => i !== interest)
    });
  };

  const formatPhoneNumber = (Phone) => {
    Phone = Phone.replace(/[^\d]/g, '');
    if (Phone.length > 10) Phone = Phone.slice(0, 10);
    const match = Phone.match(/(\d{3})(\d{3})(\d{4})/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return Phone;
  };

  const handleSignUpRedirect = () => {
    window.location.href = '/login';
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
      <a href="/" className="flex justify-center pb-8 ">
        <img className="aspect-square w-1/4" src="/images/logo.png" alt="Seyahat Dostu"></img>
      </a>
      <form className="space-y-6 w-full" onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <div>
              <input
                placeholder="E-mail"
                type="Email"
                id="Email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
              />
            </div>
            <div>
              <input
                type="text"
                id="Phone"
                name="Phone"
                value={formData.Phone}
                onChange={handleChange}
                className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
                placeholder="Telefon Numarası"
              />
            </div>
            <div>
              <input
                placeholder="Adınız Soyadınız"
                type="text"
                id="Name"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
              />
            </div>
            <div>
              <div className="relative">
                <input
                  placeholder="Şifre"
                  type={showPassword ? 'text' : 'Password'}
                  id="Password"
                  name="Password"
                  value={formData.Password}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 px-3 py-2 text-white"
                >
                  {showPassword ? 'Gizle' : 'Göster'}
                </button>
              </div>
            </div>
            <div>
              <div className="relative">
                <input
                  placeholder="Şifre Doğrula"
                  type={showPassword ? 'text' : 'Password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 px-3 py-2 text-white"
                >
                  {showPassword ? 'Gizle' : 'Göster'}
                </button>
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={handleNextStep}
                className={`w-full py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition duration-200 ease-in-out ${shake ? 'shake' : ''}`}
              >
                İleri
              </button>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div>
              <label htmlFor="Interests" className="block text-sm font-medium text-white text-center">Platformu etkin bir şekilde kullanabilmen için daha fazla bilgiye ihtiyacımız var ^_^</label>
            </div>
            <div>
              <label htmlFor="Interests" className="block text-sm font-medium text-white">İlgi Alanları</label>
              <div className="flex space-x-3 mt-1">
                <select
                  id="Interests"
                  name="Interests"
                  value={newInterest}
                  onChange={(e) => setNewInterest(e.target.value)}
                  className="block w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
                >
                  <option value="">Seçiniz</option>
                  <option value="Spor">Spor</option>
                  <option value="Müzik">Müzik</option>
                  <option value="Sanat">Sanat</option>
                  <option value="Teknoloji">Teknoloji</option>
                  <option value="Gezmek">Gezmek</option>
                </select>
                <button
                  type="button"
                  onClick={handleAddInterest}
                  className="py-3 px-4 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition duration-200 ease-in-out"
                >
                  Ekle
                </button>
              </div>
              <div className="mt-2 flex flex-wrap space-x-2">
                {formData.Interests.map((interest, index) => (
                  <span key={index} className="bg-teal-600 text-white py-1 px-3 rounded-md flex items-center space-x-2">
                    <span>{interest}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveInterest(interest)}
                      className="text-white ml-2"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            </div>
            <div className='flex flex-row justify-between items-center'>
              <div className="block text-sm font-medium text-white mb-2">Sigara içiyor musunuz?</div>
              <div className='relative inline-block w-8 h-8'>
                <input
                  type="checkbox"
                  id="Smoking"
                  name="Smoking"
                  checked={formData.Smoking}
                  onChange={handleChange}
                  className="peer absolute inset-0 appearance-none w-8 h-8 border-2 border-teal-400 rounded-full bg-white checked:bg-teal-400 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-teal-100 disabled:border-red-400 disabled:bg-red-400"
                />
                <svg
                  className="absolute inset-0 m-auto pointer-events-none w-4 h-4 hidden peer-checked:block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" className='pointer-events-none'></polyline>
                </svg>
              </div>
            </div>
            <div>
              <label htmlFor="Photograph" className="block mb-2 mt-8 text-sm font-medium text-gray-900 dark:text-white">Profil Fotoğrafı</label>
              <input
                type="file"
                id="Photograph"
                name="Photograph"
                accept="image/jpeg, image/png"
                onChange={handleFileChange}
                className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4 dark:file:bg-gray-700 dark:file:text-gray-400"
              />
            </div>
            <div>
              <label htmlFor="Age" className="block text-sm font-medium text-white">Yaş</label>
              <input
                type="number"
                id="Age"
                name="Age"
                value={formData.Age}
                onChange={handleChange}
                className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
              />
            </div>
            <div>
              <label htmlFor="Location" className="block text-sm font-medium text-white">Lokasyon</label>
              <select

                id="Location"
                name="Location"
                value={formData.Location}
                onChange={handleChange}
                className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
              >
                <option value="">Seçiniz</option>
                <option value="İstanbul">İstanbul</option>
                <option value="Ankara">Ankara</option>
                <option value="İzmir">İzmir</option>
                <option value="Denizli">Denizli</option>
                <option value="Antalya">Antalya</option>
                <option value="Adana">Adana</option>
              </select>
            </div>
            <div>
              <label htmlFor="About" className="block text-sm font-medium text-white">Hakkımda</label>
              <textarea
                id="About"
                name="About"
                value={formData.About}
                onChange={handleChange}
                className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
              />
            </div>
            <div>
              <button
                type="submit"
                className={`w-full py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition duration-200 ease-in-out ${shake ? 'shake' : ''}`}
              >
                Kaydol
              </button>
            </div>
          </>
        )}
        <div className="text-center mt-4 text-white">
          Hesabınız var mu? <button onClick={handleSignUpRedirect} className="text-teal-400 hover:text-teal-500">Giriş Yap</button>
        </div>
      </form>
    </div >
  );
}
