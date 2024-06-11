import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function DriverForm() {
  const [formData, setFormData] = useState({
    opt1: '',
    opt2: '',
    opt3: '',
  });

  const [shake, setShake] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
        setFormData({
          ...formData,
          opt3: base64String
        });
      };
      reader.readAsDataURL(file);
    } else {
      alert('Yalnızca JPG veya PNG dosyalarına izin verilmektedir.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { opt1, opt2 } = formData;

    if (!opt1 || !opt2) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } else {
      router.post('/api/users/enable-driver', formData, {
        onFinish: () => router.visit('/my_rides'),
      })
    }
  };

  return (
    <div className="flex flex-col justify-center bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
      <a href="/" className="flex justify-center pb-8 ">
        <img className="aspect-square w-1/4" src="/images/logo.png" alt="Seyahat Dostu"></img>
      </a>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className='flex flex-row justify-between items-center'>
          <div className='text-white'>
            Ehliyetiniz var mı ?
          </div>
          <div className='relative inline-block w-8 h-8'>
            <input
              placeholder=""
              type="checkbox"
              id="opt1"
              name="opt1"
              value="true"
              onChange={handleChange}
              className="peer absolute inset-0 appearance-none w-8 h-8 border-2 border-teal-500 rounded-full bg-white checked:bg-teal-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-teal-100 disabled:border-red-400 disabled:bg-red-400"
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
          <label htmlFor="Ehliyet" className="block mb-2 mt-8 text-sm font-medium text-gray-900 dark:text-white">Ehliyet</label>
          <input
            type="file"
            id="Ehliyet"
            name="Ehliyet"
            accept="image/jpeg, image/png"
            onChange={handleFileChange}
            className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4 dark:file:bg-gray-700 dark:file:text-gray-400"
          />
        </div>
        <div>
          <div className="relative">
            <input
              placeholder="'ONAYLIYORUM'"
              type='text'
              id="opt2"
              name="opt2"
              value={formData.opt2}
              onChange={handleChange}
              className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className={`w-full py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200 ease-in-out ${shake ? 'shake' : ''}`}
          >
            Şoför Ol!
          </button>
        </div>
      </form>
    </div>
  );
}

