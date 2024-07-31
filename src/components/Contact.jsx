import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = '';

    if (!value) {
      error = 'This field is required';
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      error = 'Invalid email address';
    }

    setErrors({ ...errors, [name]: error });
  };

  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" value={form.name} onChange={handleChange} onBlur={handleBlur} />
        {errors.name && <span>{errors.name}</span>}
      </label>
      <label>
        Email:
        <input type="email" name="email" value={form.email} onChange={handleChange} onBlur={handleBlur} />
        {errors.email && <span>{errors.email}</span>}
      </label>
      <label>
        Message:
        <textarea name="message" value={form.message} onChange={handleChange} onBlur={handleBlur}></textarea>
        {errors.message && <span>{errors.message}</span>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;
