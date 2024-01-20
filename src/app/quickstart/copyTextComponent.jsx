'use client'
import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa';

const CopyTextComponent = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const textToCopy = `npm install -D tailwindcss\nnpx tailwindcss init`;
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;

    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    setCopied(true);

    // Reset the "Copied" state after a brief delay
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
       {copied ? 'Copied!' :  (
            <FaCopy  onClick={handleCopyClick} className='mr-2 text-black cursor-pointer' />
          )
          }
          
    </>
  );
};
export default CopyTextComponent;