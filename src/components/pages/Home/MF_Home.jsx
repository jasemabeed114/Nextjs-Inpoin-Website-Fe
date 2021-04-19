//
// last updated: 16/04/2021
// @author: mahenza
import React, { Component } from 'react';
import { FaMobile, FaHome } from "react-icons/fa"

import Link from 'next/link';
import { Button, Grid } from '@material-ui/core/';

import {
  Navbar,
  Topbar,
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
        <Topbar />
        <div className="tilt-me-display">
          <img src="http://in-poin.mahenza.com/wp-content/uploads/2021/02/inpoin_logo_svg.png"/>
          <h2 className="tilt-me-subheader">Feel The Gamification Experience</h2>
          <FaMobile className="fa-rotate" style={{ fontSize: 60, width: '100%'}} />
          <h3 className="tilt-me-header"> 
            Rotate your device (90 &deg;)
          </h3>
        </div>
        <div className="outer-container scrollmenu">
          <div className="container-home draggable">
            <section id="home-1">
              <_AboutInpoinView />
            </section>
            <section id="home-2">
              <_OurServicesView/>
            </section>
            <section id="home-3">
              <_ExperienceDashboardView/>
            </section>
            <section id="home-4">
              <_BasedOnIndustryView/>
            </section>
            <section id="home-5">
              <_ListPartnersFAQView/>
            </section>
            <section id="home-6">
              <_JoinUsView/>  
            </section>
          </div>
        </div>
        {this._renderDialogStartGame()}
        {/* <footer className="footer">
          <FaMobile className="fa" style={{ fontSize: 30 }} />
          <nav aria-label="Breadcrumb" class="breadcrumb">
            <ul>
                <li><a href="#home-1">About Inpoin</a></li>
                <li><a href="#home-2">Our Services</a></li>
                <li><a href="#home-3">Experience Dashboard</a></li>
                <li><a href="#home-4">Based on Industry</a></li>
                <li><a href="#home-5">List Partner FAQ</a></li>
                <li><a href="#home-6">Join Us</a></li>
                <li><span aria-current="page">Home</span></li>
              </ul>
          </nav>
        </footer> */}
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
