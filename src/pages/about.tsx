import '../styles/pages/info.scss';
import React from 'react';
import Layout from '../components/layout/Layout';
import {Hammer} from '../components/common/Hammer';

const InfoPage = () => {
    return (
        <Layout>
            <div className="info-page">
                <Hammer />
            </div>
        </Layout>
    );
};

export default InfoPage;
