import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Donation = () => {
    const loadedData = useLoaderData()

    return (
        <div>
            <div className="text-5xl m-10">My Donations</div>
            <div className='border-2 border-red-500 w-96 ml-10 mt-[-20px]'></div>
            <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 m-10'>
                {
                    loadedData.map(d => <div className="card bg-base-100 w-96 shadow-2xl">
                        <figure>
                            <img
                                src={d.photo}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            {d.campaignTitle}
                                <div className="badge badge-secondary"></div>
                            </h2>
                            <p></p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Donation;