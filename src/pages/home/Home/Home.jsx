import React from 'react';
import useTitle from '../../../hooks/useTitle';
import HomeBannar from '../HomeBannar/HomeBannar';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <HomeBannar></HomeBannar>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;