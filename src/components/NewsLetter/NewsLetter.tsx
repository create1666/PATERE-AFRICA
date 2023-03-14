import { Box, Button, Text } from '@mantine/core';
import React from 'react';

import { useNewsletter } from '@/Hooks/useNewsLetter';

import { EmailInput } from '../SearchInput/EmailField';

interface NewsletterProps {
  className?: string;
}

const Newsletter = ({ className }: NewsletterProps) => {
  const { email, handleChange, handleSubmit } = useNewsletter();

  return (
    <form className={`${className}`} onSubmit={handleSubmit}>
      <Box className="mb-5 text-[16px] font-[600] text-[#FFFFFF]">
        Stay updated with our weekly newsletter
      </Box>
      <EmailInput
        emailValue={email}
        handleInputChange={handleChange}
        inputHeight="52px"
      />
      <Button className=" top-[.7rem]  h-[56px] w-[193px] bg-[#FF6700]">
        Search
      </Button>
      <Box className="mt-20 flex justify-end">
        <Text className="text-[#FFFFFF]">
          Terms and Condtions . Privacy Policy
        </Text>
      </Box>
    </form>
  );
};

export default Newsletter;
