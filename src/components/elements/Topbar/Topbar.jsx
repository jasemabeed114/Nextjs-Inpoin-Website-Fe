import React, { Component } from "react";
import { FaMobile } from "react-icons/fa"


import {
    Container,
    TopbarLogo
} from "./Topbar.elements";

import {
    Navbar,
} from '../../index';

class Topbar extends Component {
    render() {
        return (
            <>
                <Container>
                    <TopbarLogo src="http://in-poin.mahenza.com/wp-content/uploads/2021/02/inpoin_logo_svg.png"/>
                    <Navbar />
                </Container>
            </>
        )
    };
}

export default Topbar;