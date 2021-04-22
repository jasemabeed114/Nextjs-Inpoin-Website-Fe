import React, { useState, useEffect } from 'react';
import { FaMobile } from "react-icons/fa"
import { profileFullNameStorage } from '../../../utils/storage';


function Community({ fullName }) {
    const [showAboutInpoin, setShowAboutInpoin] = useState(false);
    const [poin, setPoin] = useState(0);

    useEffect(() => {
        setShowAboutInpoin(true);
    }, []);

    const handleSuccesStartGame = (data) => {
        setPoin(data.coinUpdate);
    };

    return (
        <>
            <Topbar />
            <div className="tilt-me-display">
                <img src="http://in-poin.mahenza.com/wp-content/uploads/2021/02/inpoin_logo_svg.png" />
                <h2 className="tilt-me-subheader">Feel The Gamification Experience</h2>
                <FaMobile className="fa-rotate" style={{ fontSize: 60, width: '100%' }} />
                <h3 className="tilt-me-header">
                    Rotate your device (90 &deg;)
                </h3>
            </div>
            <div className="outer-container">
                <div className="container-community">
                    <section>
                        {/* <TourWelcomeView fullName={fullName} onSuccessStartGame={handleSuccesStartGame} />                         */}
                    </section>                   
                </div>
            </div>
        </>
    );
}

WebTour.getInitialProps = async (ctx) => {
    const fullName = profileFullNameStorage.get(ctx);
    return {
        fullName
    };
};

export default Community;
