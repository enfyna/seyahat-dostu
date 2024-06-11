import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function SearchForm() {
  const [formData, setFormData] = useState({
    departure: '',
    destination: '',
    passengers: 1,
    date: ''
  });

  const [shake, setShake] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { departure, destination, passengers, date } = formData;

    if (!departure || passengers < 1) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
    else {
      router.visit('/search', {
        data: formData,
      })
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
      <a href="/" className="flex justify-center pb-8 ">
        <img className="aspect-square w-1/4" src="/images/logo.png" alt="Seyahat Dostu"></img>
      </a>
      <form className="space-y-6 w-full" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="departure" className="block text-sm font-medium text-white">Kalkış Noktası*</label>
          <select
            id="departure"
            name="departure"
            value={formData.departure}
            onChange={handleChange}
            className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
          >
            <option value="">Seçiniz</option>
            <option value="İstanbul">İstanbul</option>
            <option value="Ankara">Ankara</option>
            <option value="İzmir">İzmir</option>
            <option value="Antalya">Antalya</option>
            <option value="Adana">Adana</option>
          </select>
        </div>
        <div>
          <label htmlFor="destination" className="block text-sm font-medium text-white">Varış Noktası</label>
          <select
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
          >
            <option value="">Seçiniz</option>
            <option value="İstanbul">İstanbul</option>
            <option value="Ankara">Ankara</option>
            <option value="İzmir">İzmir</option>
            <option value="Antalya">Antalya</option>
            <option value="Adana">Adana</option>
          </select>
        </div>
        <div>
          <label htmlFor="passengers" className="block text-sm font-medium text-white">Kişi Sayısı</label>
          <input
            type="number"
            id="passengers"
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
            className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-white">Tarih</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
          />
        </div>
        <div>
          <button
            type="submit"
            className={`w-full py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition duration-200 ease-in-out ${shake ? 'shake' : ''}`}
          >
            Ara →
          </button>
        </div>
      </form>
    </div>
  )
}
