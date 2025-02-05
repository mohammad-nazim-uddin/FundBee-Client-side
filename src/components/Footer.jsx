import React from 'react';
import { IoLogoFacebook } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-[#1f0733] text-white '>
            <footer className="p-10 flex justify-between">

                <aside className='w-1/2' >
                    <p className='font-bold text-2xl '>
                        Supporting entrepreneurs, creators and creative communities since 2008
                    </p>
                    <p className='text-5xl font-bold mt-10 mb-5'>Follow us on </p>
                    <div className='flex gap-5 text-2xl '>
                        <IoLogoFacebook className='cursor-pointer hover:text-blue-500' />
                        <FiInstagram className='cursor-pointer hover:text-pink-500' />
                        <FaXTwitter className='cursor-pointer hover:text-red-500' />
                        <FaYoutube className='cursor-pointer  hover:text-red-700'></FaYoutube>

                    </div>
                </aside>
                <div className='flex  gap-16'>
                    <nav className='flex flex-col gap-2'>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav className='flex flex-col gap-2'>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className='flex flex-col gap-2'>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
            </footer>
            <div className='text-center font-extrabold text-9xl mb-5 text-[#75c8e5]'>
                <span className='text-[#1f2937]'>FUND</span>BEE
            </div>
        </div>
    );
};

export default Footer;