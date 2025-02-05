import React, { useState } from 'react';
import auth from '../firebase/firebase.config';
import { useLoaderData } from 'react-router-dom';

import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'

const UpdateCamp = () => {
    const campaign = useLoaderData();
    const {_id, campaignTitle, photo, campaignType, minDonation, deadline, description } = campaign
    const email = auth.currentUser.email
    const name = auth.currentUser.displayName
    console.log(email)
    console.log(_id)
    

   
    const [selectedType, setSelectedType] = useState('');
    const handleUpdateCampaign = (e) => {
        e.preventDefault()
        const form = e.target
        const photo = form.photo.value
        const campaignTitle = form.campaignTitle.value
        const campaignType = selectedType
        const minDonation = form.minDonation.value
        const deadline = form.deadline.value
        
        const description = form.description.value
        // console.log(name, campaignTitle, minDonation, photo, deadline, description, campaignType)

        const newCampaign = { campaignTitle, photo, campaignType, minDonation, deadline,email, name, description }

        

        fetch(`https://fund-bee-server.vercel.app/allCampaign/${_id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newCampaign)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Campaign updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                    e.target.reset();
                }
            })

    }
    const handleSelectChange = (event) => {
        setSelectedType(event.target.value);
    };
    return (
        <div className='bg-base-300'>
            <div className="p-10 ">
                <form onSubmit={handleUpdateCampaign} className="bg-base-100 shadow-xl rounded-xl card-body p-10">
                    <div className='grid md:grid-cols-2 gap-3 items-center'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Enter campaign image URL</span>
                            </label>
                            <input name='photo' type="text" placeholder="image url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Campaign Title</span>
                            </label>
                            <input type="text" name="campaignTitle" placeholder="Campaign Title" className="input input-bordered" required />

                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Campaign Type</span>
                            </label>
                            <select
                                className="select select-bordered join-item w-full"
                                onChange={handleSelectChange}
                                value={selectedType}
                            >
                                <option disabled value="">
                                    Type
                                </option>
                                <option className="hover:bg-red-400" value="Charity">
                                    Charity
                                </option>
                                <option value="Treatment">Treatment</option>
                                <option value="Education">Education</option>
                            </select>


                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Minimun Donation Amount</span>
                            </label>
                            <input type="Number" name='minDonation' placeholder="Donation Amount" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Dead Line</span>
                            </label>
                            <input type="text" name='deadline' placeholder="Deadline to Donation" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Email</span>
                            </label>
                            <input type="email" value={email} placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Name</span>
                            </label>
                            <input type="text" value={name} placeholder="Enter Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="About your campaign" className="input input-bordered" required />
                        </div>
                    </div>

                    <button type="submit" className="btn bg-[#91cb55] hover:bg-[#75c8e5] text-xl font-bold">Update Campaign</button>

                </form>



            </div>

        </div>
    );
};

export default UpdateCamp;