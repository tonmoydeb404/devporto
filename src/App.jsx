// import 'material-design-icons/iconfont/material-icons.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './static/styles/main.css';

const App = () => (
    <Layout className="py-10">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Layout>
);

export default App;
