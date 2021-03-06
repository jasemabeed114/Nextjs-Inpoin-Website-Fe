import React, { Component } from "react";

import {
    Navbar,
    _MyInpoinView,
    _ShowcaseView,
    _HowWeWorkView,
    GameMechanicsView,
    ListVouchersView,
} from "../../index";

class ProductServices extends Component {
    render() {
        return (
            <>
                <div className="topbar">
                    <img src="http://in-poin.mahenza.com/wp-content/uploads/2021/02/inpoin_logo_svg.png"></img>
                    <Navbar />
                </div>
                <div className="tilt-me-display">
                    <img src="http://in-poin.mahenza.com/wp-content/uploads/2021/02/inpoin_logo_svg.png"></img>
                    <h2 className="tilt-me-subheader">Feel The Gamification Experience</h2>
                    <h3 className="tilt-me-header"> Rotate your screen (90 &deg;)</h3>
                </div>
                <div className="outer-container scrollmenu">
                    <div className="container-product-services draggable">
                        <section>
                            <_MyInpoinView />
                        </section>
                        <section>
                            <_ShowcaseView />
                        </section>
                        <section>
                            <GameMechanicsView/>
                        </section>
                        <section>
                            <_HowWeWorkView />
                        </section>
                        <section>
                            <ListVouchersView/>
                        </section>
                    </div>
                </div>
            </>
        );
    }
}

export default ProductServices;