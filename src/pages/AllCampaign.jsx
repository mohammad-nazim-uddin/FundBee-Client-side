import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import auth from '../firebase/firebase.config';
import { Typewriter } from 'react-simple-typewriter'

const AllCampaign = () => {

    // Load data and set up state
    const loadedData = useLoaderData();
    const [campaigns, setCampaigns] = useState(loadedData);

    // Function to sort campaigns by donation amount in descending order
    const sortByDonationDescending = () => {
        const sortedCampaigns = [...campaigns].sort((a, b) => b.minDonation - a.minDonation);
        setCampaigns(sortedCampaigns);
    };

    return (
        <div className='m-10'>
            <h1 className='text-2xl font-bold mb-10 text-center' style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                Human Resposibility: {' '}
                <span style={{ color: 'red', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['Be kind', 'Be helpful', 'Love for humanity']}
                        loop={5}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}

                    />
                </span>
            </h1>
            <div className="text-5xl mt-10">This is all campaign {campaigns.length}</div>
            {/* Sort Button */}
            <div className="flex justify-end px-10 my-5">
                <button
                    onClick={sortByDonationDescending}
                    className="btn btn-primary text-lg font-bold"
                >
                    Sort by Donation (Descending)
                </button>
            </div>
            {/* Table */}
            <div className="overflow-x-auto mx-auto px-10 my-10">
                <table className="table text-base">
                    {/* Table Head */}
                    <thead className="text-2xl font-bold">
                        <tr>
                            <th>Title</th>
                            <th className="text-center">Donation Amount</th>
                            <th>Deadline</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Table Rows */}
                        {campaigns.map((camp) => (
                            <tr key={camp._id}>
                                <td>{camp.campaignTitle}</td>
                                <td className="text-center">{camp.minDonation}</td>
                                <td>{camp.deadline}</td>
                                <th>
                                    <Link to={`/campaignDetails/${camp._id}`}>
                                        <button className="btn btn-ghost text-xl font-bold">See more</button>
                                    </Link>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCampaign;
