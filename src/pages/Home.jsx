import React from "react";
import {data} from "../utils/data";
import {Links} from "../components/Links";

const Header = () => {

    return (
        <>
            <main>
                <section>
                    <div className="user-intro">
                        <div className="user-intro__img-wrapper">
                            <img src="./images/pages/home/me.jpg" alt="User"/>
                        </div>
                        <div>
                            <h4>محمد فرهادی</h4>
                            <span>کاربر عادی</span>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="user-profile">
                        <div className="user-profile__wallet">
                            <div>
                                <h4>0</h4>
                                <span>تومان بلوکه شده</span>
                            </div>
                            <div>
                                <h4>2,450,000</h4>
                                <span>تومان موجودی</span>
                            </div>
                        </div>
                        <div className="user-profile__links">
                            <Links data={data}/>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Header;
