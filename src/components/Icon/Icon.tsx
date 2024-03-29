import React from 'react';
import { ReactSVG } from 'react-svg';

const Icon = ({ src, alt, className, ...props }: any) => (
  <ReactSVG src={src} className={className} alt={alt} {...props} />
);

export default Icon;
