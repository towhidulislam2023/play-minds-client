import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewProductDetails = () => {
    const loaderData=useLoaderData()

    return (
        <div>
            <h1 className="text-5xl text-center">This is View Product details</h1>
            <img src={loaderData?.pictureURL} alt="" />
        </div>
    );
};

export default ViewProductDetails;