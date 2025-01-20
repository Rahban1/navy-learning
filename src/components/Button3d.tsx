import React, { useState, useRef, useEffect } from 'react'
import { HTMLMotionProps, motion } from 'framer-motion'

type ButtonType = 'primary' | 'secondary' | 'danger'

interface Button3DProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  buttonType?: ButtonType;
  onclick? : ()=> void
}

const Button3D: React.FC<Button3DProps> = ({ 
  children, 
  buttonType = 'primary', 
  className = '',
  onclick,
  ...props 
}) => {
  const [tiltStyle, setTiltStyle] = useState({})
  const buttonRef = useRef<HTMLButtonElement>(null)

  const baseClasses = 'px-6 py-4 font-bold font-rock2 text-lg rounded-lg transition-all duration-200 transform focus:outline-none'
  
  const typeClasses = {
    primary: 'bg-blue-500 text-white border-b-4 border-blue-700 hover:bg-blue-400',
    secondary: 'bg-gray-300 text-gray-800 border-b-4 border-gray-500 hover:bg-gray-200',
    danger: 'bg-red-500 text-white border-b-4 border-red-700 hover:bg-red-400'
  }

  const activeClasses = 'active:translate-y-1 active:border-b-0 active:shadow-inner'

  const classes = `${baseClasses} ${typeClasses[buttonType]} ${activeClasses} ${className}`

  const buttonVariants = {
    initial: { scale: 1 },
    pressed: { scale: 0.95 }
  }

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const tiltX = (y - centerY) / 10
      const tiltY = (centerX - x) / 10

      const pressEffect = (x < centerX) ? -10 : 10;
      setTiltStyle({
        transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(${pressEffect}px)`,
        transition: 'transform 0.1s ease-out'
      })
    }

    const handleMouseLeave = () => {
      setTiltStyle({
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
        transition: 'transform 0.3s ease-out'
      })
    }

    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <motion.button 
      ref={buttonRef}
      className={classes} 
      style={tiltStyle}
      variants={buttonVariants}
      initial="initial"
      whileTap="pressed"
      onClick={onclick}
      {...props as HTMLMotionProps<'button'>}
    >
      {children}
    </motion.button>
  )
}

export default Button3D

