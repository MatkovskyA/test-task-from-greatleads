import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className='flex flex-col gap-3 pt-6 w-56'
      onSubmit={handleSubmit} >
      <span>Имя:</span>
      <label>
        <input className='w-full p-1 text-black rounded-lg focus:outline-none focus:ring focus:ring-sky-500' type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <span>Почта:</span>
      <label>
        <input className='w-full p-1 text-black rounded-lg focus:outline-none focus:ring focus:ring-sky-500' type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <span>Ваш вопрос: </span>
      <label>
        <textarea className='w-full p-1 h-36 text-black rounded-lg focus:outline-none focus:ring focus:ring-sky-500' name="message" value={formData.message} onChange={handleChange} />
      </label>
      <button className='p-3 bg-sky-500 hover:bg-sky-700 hover:text-white inline-block text-black rounded-lg'
        type="submit">Отправить</button>
    </form>
  )
}

export default Form;