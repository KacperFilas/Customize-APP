import './loading-spinner.css';
import React from 'react';

const Spinner = () => {
  return (
    <video id="spinner" src="/loading.webm" playsInline autoPlay muted loop />
  );
};

export default Spinner;
