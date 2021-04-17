//
// last updated: 16/04/2021
// @author: mahenza
import React, { Component } from 'react';
import { FaMobile } from "react-icons/fa"

import Link from 'next/link';
import { Button, Grid } from '@material-ui/core/';

import {
  Navbar,
  _TourWelcomeDialog,
  _AboutInpoinView,
  _OurServicesView,
  _ExperienceDashboardView,
  _BasedOnIndustryView,
  _ListPartnersFAQView,
  _JoinUsView,
} from '../../index';

import {
  Dialog,
  DialogDescription,
  DialogContent,
  DialogShowLandscape
} from '../../elements/Dialog/Dialog.elements';

import {
  TourWelcomeRedTitle
} from '../../elements/TourWelcomeView/TourWelcomeView.elements';


class MF_Home extends Component {
  
  state = {
    showDialog: this.props.from !== 'tour',
  }

  _handleCloseDialog = () => {
    this.setState({ showDialog: false });
  }

  _renderDialogStartGame = () => {
    const { showDialog } = this.state;

    return (
      <DialogShowLandscape open={showDialog} onClose={this._handleCloseDialog}>
        {/* <Dialog open={showDialog} onClose={this._handleCloseDialog}> */}
        <DialogContent>
          <img src="http://in-poin.mahenza.com/wp-content/uploads/2021/02/inpoin_logo_svg.png" />
          <TourWelcomeRedTitle>Welcome</TourWelcomeRedTitle>
          <DialogDescription>let's start your own journey!</DialogDescription>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Link href="/register">
                <Button color="primary" fullWidth variant="contained">Yes!</Button>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Button color="primary" fullWidth onClick={this._handleCloseDialog} variant="outlined">Skip</Button>
            </Grid>
          </Grid>
        </DialogContent>
      {/* </Dialog> */}
      </DialogShowLandscape>
    );
  }

  render() {
    return (
      <div>
        <div className="topbar"> 
          <img src="http://in-poin.mahenza.com/wp-content/uploads/2021/02/inpoin_logo_svg.png"></img>
          <Navbar />
        </div>
        <div className="tilt-me-display">
          <img src="http://in-poin.mahenza.com/wp-content/uploads/2021/02/inpoin_logo_svg.png"></img>
          <h2 className="tilt-me-subheader">Feel The Gamification Experience</h2>
          <FaMobile className="fa" style={{ fontSize: 60 }} />
          <h3 className="tilt-me-header"> Rotate your device (90 &deg;)</h3>
          
        </div>
        <div className="outer-container scrollmenu">
          <div className="container-home draggable">
            <section>
              <_AboutInpoinView />
            </section>
            <section>
              <_OurServicesView/>
            </section>
            <section>
              <_ExperienceDashboardView/>
            </section>
            <section>
              <_BasedOnIndustryView/>
            </section>
            <section>
              <_ListPartnersFAQView/>
            </section>
            <section>
              <_JoinUsView/>  
            </section>
          </div>
        </div>
        {this._renderDialogStartGame()}
      </div>
    );
  }
}

MF_Home.getInitialProps = async ({ query }) => {
  return {
    from: query.from
  };
};

export default MF_Home;
