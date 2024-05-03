import React from 'react'

// @solid variants
export const SolidColorVariants = {
  primary:
    'bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 border border-blue-400 active:border-blue-300',
  secondary:
    'bg-purple-500 text-gray-800 shadow-md shadow-purple-500/20 hover:shadow-purple-500/40 border border-purple-400 active:border-purple-300',
  success:
    'bg-green-500 text-white shadow-md shadow-green-500/20 hover:shadow-green-500/40 border border-green-400 active:border-green-300',
  warning:
    'bg-yellow-500 text-white shadow-md shadow-yellow-500/20 hover:shadow-yellow-500/40 border border-yellow-400 active:border-yellow-300',
  danger:
    'bg-red-500 text-white shadow-md shadow-red-500/20 hover:shadow-red-500/40 border border-red-400 active:border-red-300',
  base: 'bg-gray-500 text-white border border-gray-500 active:border-gray-100',
}

const Button = ({ onClick, title, variant, type = 'button' }) => {
  return (
    <button
      type={type}
      className={`flex items-center justify-center text-white font-semibold py-1 px-2 rounded-md ${SolidColorVariants[variant]}`}
      onClick={onClick}
    >
      <p>{title}</p>
    </button>
  )
}

export { Button }
