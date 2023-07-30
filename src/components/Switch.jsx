import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { switchMode } from '../redux/features/darkSlice';

function Switch() {
  const [isSelected, setSelected] = useState(false);
  const dispatch = useDispatch()
  const dark = useSelector((state) => console.log(state.dark.dark))

  return (
    <div onClick={() => dispatch(switchMode())} className="mx-3">
      <div
        className={`cursor-pointer	w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 ${
          isSelected ? 'bg-gray-500 justify-end' : 'justify-start'
        }`}
        onClick={() => setSelected(!isSelected)}
      >
        <motion.div
          layout
          className="bg-white w-4 h-4 rounded-full shadow-md"
        ></motion.div>
      </div>
    </div>
  );
}

export default Switch;