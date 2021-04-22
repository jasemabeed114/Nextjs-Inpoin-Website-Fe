import React, { Component } from "react";
import Link from "next/link";


import {
    Container
} from "./Topbar.elements";

import {
    Navbar,
} from '../../index';

class Topbar extends Component {
    render() {
        return (
            <>
                <Container>
                    <Link href="/">
                        <img src="http://in-poin.mahenza.com/wp-content/uploads/2021/02/inpoin_logo_svg.png"/>
                    </Link>
                    <Navbar />
                </Container>
            </>
        )
    };
}

export default Topbar;