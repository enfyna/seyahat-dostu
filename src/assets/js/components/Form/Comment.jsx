import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function RatingForm({ userID, driverID, rideID }) {
  const [formData, setFormData] = useState({
    Rating: '',
    Point: '',
    Receiver: driverID,
    Ratinger: userID
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
    const { Rating, Point } = formData;

    if (!Rating || !Point) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
    else {
      router.post('/api/rides/comment', { rideID }, {
        onFinish: () => {
          router.post('/api/comment/create', formData, {
            onFinish: () => {
              router.post('/api/users/point', { driverID, Point }, {
                onFinish: () => {
                  router.visit('/reservations');
                }
              });
            }
          });
        }
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
          <textarea
            placeholder="Yorumunuz"
            id="Rating"
            name="Rating"
            value={formData.Rating}
            onChange={handleChange}
            className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
          />
        </div>
        <div>
          <div className="relative">
            <input
              placeholder="Puanınız"
              type='number'
              min='1'
              max='5'
              id="Point"
              name="Point"
              value={formData.Point}
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
            Yorum Yap!
          </button>
        </div>
      </form>
    </div>
  );
}
