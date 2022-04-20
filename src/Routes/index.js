import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Footer from '../Pages/HeaderandFooter/footer.js'
import Header from '../Pages/HeaderandFooter/header.js'
import Home from '../Pages/Home/home.js';
import Panel from '../Pages/Panel of conduct/panel.js';
import Dataprotection from '../Pages/Panel of conduct/dataprotection.js';
import Login from '../Pages/login.js';
import Registration from '../Pages/Registration'

const Pages = () => {
    return (
        <div> {/** style={{minHeight:'100vh'}} */}
            {/* <Header /> */}
            <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/home' element={< Home />}></Route>
                <Route exact path='/panel' element={< Panel />}></Route>
                <Route exact path='/dataprotection' element={< Dataprotection />}></Route>
                <Route exact path='/login' element={< Login />}></Route>
                <Route exact path='/registration' element={<Registration />} ></Route>
            </Routes >
            {/* <Footer /> */}
        </ div>
    )
}

export default Pages