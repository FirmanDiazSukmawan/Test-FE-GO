import React from 'react';

interface SpinnerProps {
  size?: string; 
}

const Spinner: React.FC<SpinnerProps> = ({ size = 'w-5 h-5' }) => (
  <div className={`${size} border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin`}></div>
);

export default Spinner;
