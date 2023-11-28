import React from 'react';
import gbLogo from '../assets/gb_icon.png';
import { useGbMode } from '../context/GbModeContext';

function GbModeToggle() {
  const { isGbMode, toggleGbMode } = useGbMode();

  return (
    <button onClick={toggleGbMode}>
      <img src={gbLogo} alt="" />
    </button>
  );
}

export default GbModeToggle;
