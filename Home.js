import React from "react";
import TopDeals from './topDeals/TopDeals';
import CategoryHolder from './category/CategoryHolder';
import Banner from './banner/Banner';

function Home(){
    return(
        <>
        <Banner></Banner>
        <CategoryHolder></CategoryHolder>
        <TopDeals></TopDeals>
        </>
    )
}

export default Home;