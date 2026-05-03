import React from 'react'
import Logo from '../Images/logo.png';
import { UserRound, CirclePlay } from 'lucide-react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className=" fixed
       top-0 left-0 w-full 
      flex items-center justify-between
      px-6 lg:px-30 z-10
    ">
            <Link to='/'>
                {/* Logo */}
                
                <img
                    src={Logo}
                    className="h-10 w-10 lg:h-20 lg:w-20 object-contain cursor-pointer"
                    alt="logo"
                />
            </Link>


            <span className="text-white/80 hover:text-white transition cursor-pointer">
                About
            </span>

            <span className="text-white/80 hover:text-white transition cursor-pointer">
                Contact
            </span>

            <span className="text-white/80 hover:text-white transition cursor-pointer">
                Features
            </span>

            <span className="text-white/80 hover:text-white transition cursor-pointer">
                Examples
            </span>

            <span className="text-white/80 hover:text-white transition cursor-pointer">
                Pricing
            </span>

            {/* Button */}
            <button className=" flex items-center gap-3
        relative px-5 py-2 
        text-sm font-medium uppercase tracking-[2px]
        text-white
        border border-cyan-200
        rounded-full
        bg-white/5 backdrop-blur-md
        overflow-hidden
        transition-all duration-300
        hover:border-cyan-400/60
        hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]
      ">
                <UserRound size={16} strokeWidth={2} />
                <span className="relative z-10">Sign In</span>

                <span className="
          absolute inset-0 
          bg-gradient-to-r from-cyan-400/0 via-cyan-400/30 to-purple-500/0
          opacity-0 hover:opacity-100
          transition duration-500
        "></span>
            </button>

        </div>
    )
}

export default Header