import React from 'react';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const HeroSub = () => {
    return (
        <div className='border border-white p-6 rounded-3xl absolute  shadow-lg mx-auto'>
            {/* Image, name, role */}
            <div className='text-center mb-6'>
                <img 
                    className='h-40 w-40 rounded-full mx-auto border-4 border-gray-600 object-cover' 
                    src="https://i.ibb.co/bRmkw3fw/ratul.jpg" 
                    alt="Ratul" 
                />
                <h1 className='text-white font-bold text-2xl mt-4'>Ratul</h1>
                <h2 className='text-indigo-400 font-semibold text-xl'>Web Developer</h2>
            </div>

            {/* Contact info */}
            <div className='space-y-4 text-white'>
                <div className='flex items-center space-x-3'>
                    <FaEnvelope className='text-indigo-400' size={20} />
                    <a href="mailto:ratul@example.com" className='hover:underline'>ratul@example.com</a>
                </div>
                <div className='flex items-center space-x-3'>
                    <FaWhatsapp className='text-green-500' size={20} />
                    <a href="https://wa.me/8801234567890" target="_blank" rel="noopener noreferrer" className='hover:underline'>
                        +880 1234 567 890
                    </a>
                </div>
                <div className='flex items-center space-x-3'>
                    <FaLinkedin className='text-blue-600' size={20} />
                    <a href="https://linkedin.com/in/ratul" target="_blank" rel="noopener noreferrer" className='hover:underline'>
                        linkedin.com/in/ratul
                    </a>
                </div>
                <div className='flex items-center space-x-3'>
                    <FaMapMarkerAlt className='text-red-500' size={20} />
                    <span>Dhaka, Bangladesh</span>
                </div>
            </div>
        </div>
    );
};

export default HeroSub;
