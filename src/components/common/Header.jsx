import React from "react";
import {MoreHorizontal, ShoppingBag, Pocket, Smartphone, Home} from "react-feather";

const Header = () => {
    return (
        <header>
            <nav>
                <div className="mobile-menu">
                    <div>
                        <MoreHorizontal/>
                        <span>بیشتر</span>
                    </div>
                    <div>
                        <ShoppingBag/>
                        <span>ثبت خرید</span>
                    </div>
                    <div className="mobile-menu_active">
                        <Pocket/>
                    </div>
                    <div>
                        <Smartphone/>
                        <span>لیست گوشی</span>
                    </div>
                    <div>
                        <Home/>
                        <span>خانه</span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
