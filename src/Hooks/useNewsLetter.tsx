/* eslint-disable no-console */
import type { AxiosResponse } from 'axios';
import { useState } from 'react';

import useApi from './Services/useApi';

const apiUrl = process.env.NEXT_PUBLIC_API_URL?.toString() ?? '';
interface ErrorResponse {
  error: unknown;
}

interface SuccessResponse {
  data: string;
  status: number;
}

type Response = SuccessResponse | ErrorResponse;
export const useNewsletter = () => {
  const [emailValue, setEmail] = useState('');
  const { loading, error, post } = useApi(apiUrl);
  const [status, setStatus] = useState<number>(0);

  const handleSubmit = async (): Promise<AxiosResponse<Response>> => {
    const formData = {
      email: emailValue,
    };
    try {
      const responseData: AxiosResponse<Response> = await post('/newsletters', {
        data: formData,
      });
      if ('status' in responseData) {
        setStatus(responseData.status);
      }
      setEmail('');
      return responseData;
    } catch (err: any) {
      return Promise.reject(err.response);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return {
    emailValue,
    status,
    handleChange,
    handleSubmit,
    loading,
    error,
  };
};
