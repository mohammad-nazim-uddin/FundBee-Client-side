import React, { useState } from 'react';
import auth from '../firebase/firebase.config';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Typewriter } from 'react-simple-typewriter'


const MyCampaign = () => {
    const email = auth.currentUser.email; // Get the current user's email
    console.log("User email:", email);

    const loadedData = useLoaderData()
    const [data, setData] = useState(loadedData);




    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://fund-bee-server.vercel.app/allCampaign/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(response => {
                        console.log(response)
                        if (response.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                            const remainingCampaigns = data.filter((d) => d._id !== _id);
                            setData(remainingCampaigns);
                        }
                    })


            }
        });


    }

    const url = `https://fund-bee-server.vercel.app/myCampaign?email=${encodeURIComponent(email)}`;

    fetch(url, {
        method: "GET",
        headers: { "content-type": "application/json" },
    })
        .then(res => res.json())
        .then(data => {
            console.log("Matched campaigns:", data);


        })



    return (
        <div>
            
            <div className="text-3xl">This is My campaing</div>

            <div className="overflow-x-auto mx-auto px-10 my-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Title</th>
                            <th>Donation</th>
                            <th>Deadline</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data.map(camp => <tr>

                                <td>
                                    {camp.campaignTitle}
                                </td>
                                <td>
                                    {camp.minDonation}
                                </td>
                                <td>{camp.deadline}</td>
                                <th>
                                    <Link to={`/updateCampaign/${camp._id}`}><button className="btn btn-ghost btn-xs">Update</button></Link>
                                    <button onClick={() => handleDelete(camp._id)} className="btn btn-ghost btn-xs ">Delete</button>
                                </th>
                            </tr>)
                        }



                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default MyCampaign;