import React from 'react';
import { Link } from 'react-router-dom';

const ErroPage = () => {
    return (
        <div className='text-center mt-44'>
            <div className='text-7xl font-bold text-xl text-center'>
                The page your'e looking for -- Not Found
            </div>
            <div className='text-xl mt-10 btn'>
                <Link to="/">Go to Home</Link>
            </div>


        </div>
    );
};

export default ErroPage;