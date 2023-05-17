import React from 'react';
import useTitle from '../../../hooks/useTitle';
import HomeBannar from '../HomeBannar/HomeBannar';
import Gallery from '../Gallery/Gallery';
import ShopByCatagory from '../ShopByCatagory/ShopByCatagory';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <HomeBannar></HomeBannar>
            <Gallery></Gallery>
            <ShopByCatagory></ShopByCatagory>
        </div>
    );
};

export default Home;