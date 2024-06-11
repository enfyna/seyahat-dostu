import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
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
    const { email, password } = formData;

    if (!email || !password) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } else {
      // Authentication logic goes here
      router.post('/api/users/login', formData, {
        onFinish: () => router.visit('/'),
      })
    }
  };

  const handleSignUpRedirect = () => {
    window.location.href = '/signup';
  };

  return (
    <div className="flex flex-col justify-center bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
      <a href="/" className="flex justify-center pb-8 ">
        <img className="aspect-square w-1/4" src="/images/logo.png" alt="Seyahat Dostu"></img>
      </a>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="E-mail"
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
          />
        </div>
        <div>
          <div className="relative">
            <input
              placeholder="Şifre"
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md form-input focus:border-teal-400 transition duration-200 ease-in-out hover:border-teal-400"
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
            type="submit"
            className={`w-full py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition duration-200 ease-in-out ${shake ? 'shake' : ''}`}
          >
            Giriş Yap
          </button>
        </div>
        <div className="text-center mt-4 text-white">
          Hesabınız yok mu? <button onClick={handleSignUpRedirect} className="text-teal-400 hover:text-teal-500">Kaydol</button>
        </div>
      </form>
    </div>
  );
}

