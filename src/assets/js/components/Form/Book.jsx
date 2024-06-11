import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function BookForm({ rideID }) {
  const [formData, setFormData] = useState({
    Payment: '',
  });

  const [shake, setShake] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      Payment,
    } = formData;

    if (!Payment) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } else {
      router.post('/api/rides/join', { rideID }, {
        onFinish: () => router.visit(
          '/reservations'
        ),
      });
    }
  };

  return (
    <div className="flex flex-col justify-center bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
      <a href="/" className="flex justify-center pb-8 ">
        <img className="aspect-square w-1/4" src="/images/logo.png" alt="Seyahat Dostu"></img>
      </a>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <div className='text-white mb-4'>
            Ödeme Yap
          </div>
          <div className='relative inline-block w-8 h-8'>
            <input
              placeholder="Ödeme"
              type="checkbox"
              id="Payment"
              name="Payment"
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
          <button
            type="submit"
            className={`w-full py-3 mt-12 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200 ease-in-out ${shake ? 'shake' : ''}`}
          >
            Rezervasyon Yap
          </button>
        </div>
      </form>
    </div>
  );
}


