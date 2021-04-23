import React, { Component } from "react";
import { FaMobile } from "react-icons/fa"

import {
    Topbar,
    _MyInpoinView,
    _ShowcaseView,
    _HowWeWorkView,
    GameMechanicsView,
    ListVouchersView,
    UnderConstruction
} from "../../index";

class ProductServices extends Component {
    render() {
        return (
            <>
                <Topbar/>
                <div className="tilt-me-display">
                    <img src="http://in-poin.mahenza.com/wp-content/uploads/2021/02/inpoin_logo_svg.png" />
                    <h2 className="tilt-me-subheader">Feel The Gamification Experience</h2>
                    <FaMobile className="fa-rotate" style={{ fontSize: 60, width: '100%' }} />
                    <h3 className="tilt-me-header">
                        Rotate your device (90 &deg;)
                    </h3>
                </div>
                <div className="outer-container scrollmenu">
                    <div className="container-product-services draggable">
                        <section>
                            <UnderConstruction />
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