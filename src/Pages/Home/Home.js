import React from 'react';
import CreatePost from './CreatePost';
import HomePost from './HomePost';
import TopSection from './TopSection';
import './Home.css';



const Home = () => {
    return (
        <main className='lg:w-[80vw] h-screen overflow-y-scroll fixed right-0 p-5 bg-slate-500'>
            <TopSection></TopSection>
            <CreatePost></CreatePost>
            <HomePost></HomePost>
        </main>
    );
};

export default Home;