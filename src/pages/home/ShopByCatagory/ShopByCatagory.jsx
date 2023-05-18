import React, { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { FaStar } from "react-icons/fa";
const ShopByCategory = () => {
    const [selectedIndex, setSelectedIndex] = useState('Science Toys');
    const [catagoryData, setCatagoryData] = useState([]);

    useEffect(() => {
        if (selectedIndex) {
            fetch(`http://localhost:5000/toys?subcategory=${selectedIndex}`)
                .then((res) => res.json())
                .then((data) => setCatagoryData(data))
                .catch((error) => console.log(error));
        }
    }, [selectedIndex]);
    console.log(catagoryData);

    const options = ['Science Toys', 'Language Toys', 'Math Toys'];

    return (
        <div className="my-10 px-6 md:px-0">
            <div>
                <h1 className="text-4xl font-bold">Explore Our Product</h1>
                <div className="divider"></div>
            </div>
            <Tabs>
                <TabList>
                    {options.map((category, idx) => (
                        <Tab onClick={() => setSelectedIndex(category)} key={idx}>
                            {category}
                        </Tab>
                    ))}
                </TabList>
                {options.map((idx) => (
                    <TabPanel key={idx}>
                        <div className=' grid md:grid-cols-3 gap-6 '>
                            {catagoryData.map((catagory) => (
                                <div key={catagory._id} className=''>

                                    <div className="card card-side  bg-base-100 shadow-xl my-4">
                                        <figure><img className='w-36 h-full' src={catagory.pictureURL} alt="Movie" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title"> {catagory.name}</h2>
                                            <p>Price:  ${catagory.price}</p>
                                            <p className='flex items-center gap-5'> <FaStar className='text-warning text-xl'></FaStar> <span className='text-xl'>{catagory.rating}</span></p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-warning">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default ShopByCategory;
