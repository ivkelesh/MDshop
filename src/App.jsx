import 'antd/dist/antd.css';
import './App.css';
import React from 'react';
 import { Layout } from "antd";
 import {  MenuLayout } from "./Layouts/MenuLayout/MenuLayout";
 import { HeaderLayout } from './Layouts/HeaderLayout/HeaderLayout';
 import { ContentLayout } from './Layouts/ContentLayout/ContentLayout';
import { FooterLayout } from './Layouts/FooterLayout/FoooterLayout';



function App() {
    return ( 
    <>
    
         <Layout>
            <HeaderLayout/>
           
            <ContentLayout/>
              
            <FooterLayout/>   
        </Layout> 
    </>
    );
}

export default App;