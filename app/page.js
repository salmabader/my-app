'use client'
import React, { useRef, useState } from 'react';
import PinField from "react-pin-field";

export default function home() {

  function handleComplete() {
    alert('Hi')
  }
  return (
    <div className='flex items-center justify-center min-h-screen'>
    <PinField
      length={5}
      onComplete={handleComplete}
      autoFocus
      className="border border-black"
      />
      </div>
  );
};