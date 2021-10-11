import React from "react";
import Header from "../components/common/Header";
import {Terminal} from "react-feather";

const Layout = ({children}) => {
    return (
        <>
            <div id="wrapper">
                <Header/>
                {children}
            </div>
            <div id="desktop">
                <h1>
                    <Terminal/>
                    <span dir="rtl">این صفحه فقط برای موبایل می باشد.</span>
                </h1>
            </div>
        </>
    )
}

export default Layout;
