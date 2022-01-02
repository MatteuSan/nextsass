import React from 'react';
import { NextPage } from 'next';
import DefaultLayout from '../layouts/DefaultLayout';

const HomePage: NextPage = () => {
    return (
        <DefaultLayout title="Home">
            Home Page
        </DefaultLayout>
    );
};

export default HomePage;