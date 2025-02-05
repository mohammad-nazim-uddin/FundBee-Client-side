import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router-dom';
import { Slide } from "react-awesome-reveal";

import SingleCampaign from '../components/SingleCampaign';

const Home = () => {
    const loadedData = useLoaderData()
    return (
        <div>
            <Banner />
            <div className='text-center mt-5 flex flex-col gap-3'>
                <h1 className=' font-bold text-5xl'>Runnig Campaign</h1>
                <p className='text-xl mx-auto w-1/2'>The campaing that are running on and an great oppurtunity of helping mankind</p>
            </div>


            <div className='grid gap-3 justify-center m-5 md:grid-cols-2 lg:grid-cols-3'>

                {
                    loadedData.map(campaign => <SingleCampaign key={campaign._id} campaign={campaign} ></SingleCampaign>)
                }
            </div>

            <div>
                <div className='mx-40 grid justify-center lg:flex  items-center p-10 '>
                    <Slide damping >
                        <div className='font-bold text-5xl animate__animated animate__bounce  animate__repeat-3'>
                            Frequently Asked Question <span className='text-8xl ml-10'>?</span>
                        </div>
                    </Slide>
                    <div className='bg-base-200 rounded-xl mt-5 w-full'>
                        <div className="collapse collapse-arrow bg-base-200 mb-5">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-xl font-medium">Is it trustworthy? </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200 mb-5">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">How organiztion audit their collection?</div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">Which area are covered in this Campaign</div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className='flex flex-col bg-[#1f0733] text-white m-5 p-2  '>
                <div className=' grid gap-5 lg:flex justify-between p-5 items-center'>
                    <div className='ml-10'>
                        <p className='text-4xl font-bold mb-3'>Bridging communities <br /> together</p>
                        <p>Sign up for ReliefBD Newsletter.</p>
                    </div>
                    <div >
                        <input className='bg-[#1f0733]' type="text" name="first" id="" placeholder='First name ' />
                        <input className='bg-[#1f0733]' type="text" name="last" id="" placeholder='Last name' />
                        <input className='bg-[#1f0733]' type="email" name="email" id="" placeholder='Your email' />
                    </div>
                </div>
                <div className='flex justify-end mr-24 mb-5 mt-[-20px] '>
                    <button className='btn bg-[#f44d63] rounded-full px-7 font-bold text-xl text-white '>Subscribe</button>
                </div>
            </div>

        </div>
    );
};

export default Home;