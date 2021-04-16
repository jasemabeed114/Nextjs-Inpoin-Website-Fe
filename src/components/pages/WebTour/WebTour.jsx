import React, { useState, useEffect } from 'react';
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
      <div className="outer-container">
        <div className="container-webtour">
          <section id="tour-1">
            <div className="content">
              <TourWelcomeView fullName={fullName} onSuccessStartGame={handleSuccesStartGame} />
            </div>
          </section>
          <section id="tour-2">
            <div className="content">
              { showAboutInpoin && <AboutInpoinView /> }
            </div>
          </section>
          <section id="tour-3">
            <div className="content">
              <OurServicesView />
            </div>
          </section>
          <section id="tour-4">
            <div className="content">
              <ExperienceDashboardView />
            </div>
          </section>
          <section id="tour-5">
            <div className="content">
              <MyInpoinView />
            </div>
          </section>
          <section id="tour-7">
            <div className="content">
              <HowWeWorkView />
            </div>
          </section>
          <section id="tour-8">
            <div className="content">
              <ShowcaseView onSuccessStartGame={handleSuccesStartGame} />
            </div>
          </section>
          <section id="tour-9">
            <div className="content">
              <ExitTourView poin={poin} />
          </div>
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
