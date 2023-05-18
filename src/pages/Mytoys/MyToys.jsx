import React, { useContext, useEffect, useState } from 'react';
import  { AuthProviderContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const MyToys = () => {
    const{user}=useContext(AuthProviderContext)
    const [mytoys,setMytoys]=useState([])

    useEffect(()=>{
        if (!user) {
            return
        }
        fetch(`http://localhost:5000/myAddedtoys?email=${user?.email}`)
        .then(res=>res.json())
            .then(data => setMytoys(data))
    }, [user])
        
    return (
        <div>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Toy Name and Info <br />Sub-category</th>
                        <th>Seller Information</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Acton</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        mytoys && mytoys.map(data => <tr key={data._id}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={data.pictureURL} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{data.name}</div>
                                        <div className="text-sm opacity-50">{data.subcategory}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h2 className='text-xl'>{data.sellerName}</h2>
                                <div>{data.sellerEmail}</div>
                            </td>
                            <td>{data.price}</td>
                            <td>{data.availableQuantity}</td>
                            <th>
                                <Link to={`/updatetoys/${data._id}`}> <button className="btn btn-warning">Update</button></Link>
                            </th>
                        </tr>)
                    }

                </tbody>


            </table>
        </div>
    );
};

export default MyToys;