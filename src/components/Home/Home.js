import React from 'react';

import Layout from '../Layout/Layout';
import Wordlist from "../Wordlist/Wordlist";

const Home = () => {
    return (
        <Layout>
            <Wordlist query={''} />
        </Layout>
    );
};

export default Home;