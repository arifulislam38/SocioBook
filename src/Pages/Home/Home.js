import React from 'react';
import CreatePost from './CreatePost';
import TopSection from './TopSection';

const Home = () => {
    return (
        <main className='flex-1 border'>
            <TopSection></TopSection>
            <CreatePost></CreatePost>
            <section>
                
            </section>
        </main>
    );
};

export default Home;