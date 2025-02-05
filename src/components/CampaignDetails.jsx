import React from 'react';
import { useLoaderData } from 'react-router-dom';
import auth from '../firebase/firebase.config';

const CampaignDetails = () => {
    const campaign = useLoaderData();
    const userName = auth.currentUser.displayName;
    const UserEmail = auth.currentUser.email;

    const { _id, campaignTitle, photo, campaignType, minDonation, deadline, email, name, description } = campaign

    const donationDetails = {userName, UserEmail, campaignTitle, photo, campaignType, minDonation, deadline, email, name, description}

    const handleDonate = () =>{
        fetch('https://fund-bee-server.vercel.app/myDonation', {
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(donationDetails)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col gap-10 lg:flex-row">
                <img
                    className='md:w-1/2'
                    src={photo} />
                <div>
                    <h1 className="text-5xl font-bold">{campaignTitle}</h1>
                    <p className="py-6">
                        {description}
                    </p>
                    <p>
                       Campaign Type: {campaignType}
                    </p>
                    <p>
                        Donation Amount: $ {minDonation}
                    </p>
                    <p>
                        {deadline}
                    </p>
                    <p>
                        Fund Raiser : {name}
                        
                    </p>
                    <p>
                        Email: {email}
                    </p>
                    <button onClick={handleDonate} className="btn btn-primary">Donate Now</button>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;