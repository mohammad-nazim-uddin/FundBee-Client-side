import React from 'react';
import { Link } from 'react-router-dom';

const SingleCampaign = ({ campaign }) => {
    const {_id, campaignTitle, photo, campaignType, minDonation, deadline, email, name, description } = campaign
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl mb-5">
            <figure>
                <img
                    src={photo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{campaignTitle}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                   <Link to={`/campaignDetails/${_id}`}> <button className="btn btn-primary">See More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCampaign;