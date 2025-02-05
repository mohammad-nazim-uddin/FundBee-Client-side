import React from 'react';
import banner from '../assets/image/banner.jpg'
import { Fade } from "react-awesome-reveal";
import slider1 from '../assets/image/slider1.jpg'
import slider2 from '../assets/image/slider2.jpg'
import slider3 from '../assets/image/slider3.jpg'
import './Banner.css'

const Banner = () => {

    return (
        <div>
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <img
                        src={slider1}
                        class="w-full h-3/4" />
                    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img
                        src={slider2}
                        class="w-full h-3/4" />
                    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img
                        src={slider3}
                        class="w-full h-3/4" />
                    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
            <div class="background">

                <div class="text w-3/4 text-white font-semibold text-7xl text-center">
                    <Fade  cascade>
                        <h1>A Little Care Can Change the World</h1>
                        <button className='btn bg-[#91cb55] hover:bg-[#75c8e5] w-3/4 text-black  text-2xl border-none rounded-full'>Start a Fundraiser</button>
                    </Fade>
                </div>



            </div>
        </div>
    );
};

export default Banner;