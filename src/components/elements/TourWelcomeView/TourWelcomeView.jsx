import React, { Component } from 'react';
import Tilt from 'react-tilt'

import { Dialog } from '@material-ui/core/';
import Router from 'next/router';
import {
    ContentWrapper,
    Row,
    Side,
    Main,
    PlayButton,
    Visual,
    TourWelcome,
    TourWelcomeBlackTitle,
    TourWelcomeRedTitle,
    DialogContent,
    Iframe,
} from './TourWelcomeView.elements';
import { runGame } from '../../../actions';
import { ACTIVITY } from '../../../configs';

class TourWelcomeView extends Component{
  
  state = {
    showDialog: !this.props.fullName,
    gameUrl: ''
  }

  _handleCloseDialog = () => {
    this.setState({ showDialog: false });
  }

  _handleStartLuckySpin = async () => {
    const { onSuccessStartGame, fullName } = this.props;
    if(fullName) {
      const response = await runGame({ activityCode: ACTIVITY.MAINLS });
      this.setState({ gameUrl: response.data.gameUrl });
      onSuccessStartGame(response.data);
    } else {
      Router.push('/register');
    }
  }

  

  _renderDialogLuckySpin = () => {
    const { gameUrl } = this.state;
    return (
      <Dialog open={Boolean(gameUrl)} onClose={() => this.setState({ gameUrl: '' })}>
        <DialogContent>
          {gameUrl && <Iframe src={gameUrl} />}
        </DialogContent>
      </Dialog>
    );
  }

  render(){

    const { fullName = '' } = this.props;
    const firstName = fullName.split(' ').slice(0,1)[0];

    return(
      <ContentWrapper>
        <Row>
          <Side>
              <Visual src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/Sally.png"/>
          </Side>
          <Main>
            <TourWelcome>
              <Tilt className="Tilt" options={{ max: 35 }} >
              {firstName &&
                <TourWelcomeRedTitle lineHeight="0.6">
                  Hello {firstName}
                </TourWelcomeRedTitle>
              }
              <TourWelcomeBlackTitle>
                Push <br></br>the button <br></br>and get
              </TourWelcomeBlackTitle>
              <TourWelcomeRedTitle>
                Your Points!
              </TourWelcomeRedTitle>
              </Tilt>
              <PlayButton onClick={this._handleStartLuckySpin}>Play</PlayButton>
            </TourWelcome>
          </Main>
        </Row>
        {this._renderDialogLuckySpin()}        
      </ContentWrapper>
    );
  }
}

export default TourWelcomeView;