import React, { useState, useEffect } from 'react';
import { FaMobile } from "react-icons/fa"
import { profileFullNameStorage } from '../../../utils/storage';

import TourWelcomeView from '../../elements/TourWelcomeView/TourWelcomeView';
import ShowcaseView from '../../elements/ShowcaseView/ShowcaseView';
import ExitTourView from '../../elements/ExitTourView/ExitTourView';


import {
  _HowWeWorkView as HowWeWorkView,
  _ExperienceDashboardView as ExperienceDashboardView,
  _AboutInpoinView as AboutInpoinView,
  _OurServicesView as OurServicesView,
  _MyInpoinView as MyInpoinView,
} from "../../index";

function WebTour ({ fullName }) {
  const [ showAboutInpoin, setShowAboutInpoin ] = useState(false);
  const [ poin, setPoin] = useState(0);

  useEffect(() => {
    setShowAboutInpoin(true);
  }, []);

  const handleSuccesStartGame = (data) => {
    setPoin(data.coinUpdate);
  };

  return (
    <>
      <div className="topbar">
        <img src="http://in-poin.mahenza.com/wp-content/uploads/2021/02/inpoin_logo_svg.png" />
      </div>
      <div className="tilt-me-display">
        <img src="http://in-poin.mahenza.com/wp-content/uploads/2021/02/inpoin_logo_svg.png" />
        <h2 className="tilt-me-subheader">Feel The Gamification Experience</h2>
        <FaMobile className="fa-rotate" style={{ fontSize: 60, width: '100%' }} />
        <h3 className="tilt-me-header">
          Rotate your device (90 &deg;)
          </h3>
      </div>
      <div className="outer-container">
        <div className="container-webtour">
          <section id="tour-1">        
              <TourWelcomeView fullName={fullName} onSuccessStartGame={handleSuccesStartGame} />
          </section>
          <section id="tour-2">
              { showAboutInpoin && <AboutInpoinView /> }
          </section>
          <section id="tour-3">
              <OurServicesView />
          </section>
          <section id="tour-4">
              <ExperienceDashboardView />
          </section>
          <section id="tour-5">
              <MyInpoinView />
          </section>
          <section id="tour-7">
              <HowWeWorkView />
          </section>
          <section id="tour-8">
              <ShowcaseView onSuccessStartGame={handleSuccesStartGame} />
          </section>
          <section id="tour-9">
              <ExitTourView poin={poin} />
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

export default WebTour;
