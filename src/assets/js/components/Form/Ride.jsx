import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function RideForm() {
  const [formData, setFormData] = useState({
    Departure_Point: '',
    Arrival_Point: '',
    Departure_Time: '',
    Price: '',
    Number_of_Ppl: '',
    Time: '',
    Car_Brand: '',
    Car_Model: '',
    Message: ''
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
      Departure_Point,
      Departure_Time,
      Arrival_Point,
      Price,
      Number_of_Ppl,
      Time,
      Car_Brand,
      Car_Model,
      Message
    } = formData;

    if (
      !Departure_Point || !Arrival_Point || !Date || !Price || !Number_of_Ppl ||
      !Message || !Time || !Car_Brand || !Car_Model
    ) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } else if (new Date(Departure_Time).getTime() <= new Date().getTime()){
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
    else {
      router.post('/api/rides', formData, {
        onFinish: () => router.visit('/my_rides'),
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
          <select
            id="Departure_Point"
            name="Departure_Point"
            value={formData.Departure_Point}
            onChange={handleChange}
            className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
          >
            <option value="">Kalkış Noktası</option>
            <option value="İstanbul">İstanbul</option>
            <option value="Ankara">Ankara</option>
            <option value="İzmir">İzmir</option>
            <option value="Antalya">Antalya</option>
            <option value="Adana">Adana</option>
          </select>
        </div>
        <div>
          <select
            id="Arrival_Point"
            name="Arrival_Point"
            value={formData.Arrival_Point}
            onChange={handleChange}
            className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
          >
            <option value="">Varış Noktası</option>
            <option value="İstanbul">İstanbul</option>
            <option value="Ankara">Ankara</option>
            <option value="İzmir">İzmir</option>
            <option value="Antalya">Antalya</option>
            <option value="Adana">Adana</option>
          </select>
        </div>
        <div>
          <input
            type="datetime-local"
            id="Departure_Time"
            name="Departure_Time"
            value={formData.Departure_Time}
            onChange={handleChange}
            className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
          />
        </div>
        <div>
          <input
            placeholder="Fiyat"
            type="number"
            id="Price"
            name="Price"
            value={formData.Price}
            onChange={handleChange}
            className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
          />
        </div>
        <div>
          <input
            placeholder="Yolcu Kapasitesi"
            type="number"
            id="Number_of_Ppl"
            name="Number_of_Ppl"
            value={formData.Number_of_Ppl}
            onChange={handleChange}
            className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
          />
        </div>










        <div>
          <input
            placeholder="Tahmini Yolculuk Süresi (Saat)"
            type="text"
            id="Time"
            name="Time"
            value={formData.Time}
            onChange={handleChange}
            className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
          />
        </div>
        <div>
          <input
            placeholder="Araba Markası"
            type="text"
            id="Car_Brand"
            name="Car_Brand"
            value={formData.Car_Brand}
            onChange={handleChange}
            className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
          />
        </div>
        <div>
          <input
            placeholder="Araba Modeli"
            type="text"
            id="Car_Model"
            name="Car_Model"
            value={formData.Car_Model}
            onChange={handleChange}
            className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
          />
        </div>
        <div>
          <textarea
            placeholder="Özel Mesajınız"
            id="Message"
            name="Message"
            value={formData.Message}
            onChange={handleChange}
            className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className={`w-full py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200 ease-in-out ${shake ? 'shake' : ''}`}
          >
            Yolculuğu Oluştur
          </button>
        </div>
      </form>
    </div>
  );
}

