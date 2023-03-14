import { useState } from 'react';

import useApi from './Services/useApi';

const apiUrl = 'https://your-strapi-url.com';

export const useNewsletter = () => {
  const [email, setEmail] = useState('');
  const { loading, error, post } = useApi(apiUrl);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Triggered!');
    try {
      await post('/newsletters', { email });
      setEmail('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return {
    email,
    handleChange,
    handleSubmit,
    loading,
    error,
  };
};
