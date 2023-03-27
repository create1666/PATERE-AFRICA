/* eslint-disable no-console */
import { Box, Button, Text } from '@mantine/core';
import type { AxiosResponse } from 'axios';
import React from 'react';
import { useToasts } from 'react-toast-notifications';

import { useNewsletter } from '@/Hooks/useNewsLetter';

import { EmailInput } from '../SearchInput/EmailField';

interface NewsletterProps {
  className?: string;
}
interface ErrorResponse {
  error: unknown;
}

const Newsletter = ({ className }: NewsletterProps) => {
  const { emailValue, handleChange, handleSubmit } = useNewsletter();
  const { addToast } = useToasts();

  const handleCloseBtn = async () => {
    const response: AxiosResponse | ErrorResponse = await handleSubmit();
    const status = response?.status;

    // check if the response has the expected properties
    if (response && status === 200) {
      addToast('Subscribed successfully, thank you!', {
        appearance: 'success',
        autoDismiss: true,
      });
    } else {
      addToast('Subscription failed, please try again!', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  };

  return (
    <div className={`${className}`}>
      <Box className="mb-5 text-[16px] font-[600] text-[#FFFFFF]">
        Stay updated with our weekly newsletter
      </Box>
      <EmailInput
        emailValue={emailValue}
        handleInputChange={handleChange}
        inputHeight="52px"
      />
      <Button
        onClick={() => {
          handleSubmit();
          handleCloseBtn();
        }}
        className="top-[.7rem] h-[56px] w-[193px] bg-[#FF6700]"
      >
        Subscribe
      </Button>
      <Box className="mt-20 flex justify-end">
        <Text className="text-[#FFFFFF]">
          Terms and Condtions . Privacy Policy
        </Text>
      </Box>
    </div>
  );
};

export default Newsletter;
