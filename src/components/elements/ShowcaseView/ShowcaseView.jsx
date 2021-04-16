import React, { Component } from "react";
import { Dialog } from "@material-ui/core";
import { runGame } from "../../../actions";
import { ACTIVITY } from "../../../configs";
import { Iframe, PlayButton, DialogContent } from "../TourWelcomeView/TourWelcomeView.elements";

import {
    ContentWrapper,
    Showcase,
    ShowcaseTitle,
    ShowcaseBlackTitle,
    ShowcaseRedTitle,
    ShowcaseGroup,
    ShowcaseFrame,
    Visual,
} from "./ShowcaseView.elements";

class ShowcaseView extends Component {

  state = {
    gameUrl: ''
  }

  _handleStartLuckyEnvelope = async () => {

    const { onSuccessStartGame } = this.props;
    const response = await runGame({ activityCode: ACTIVITY.MAINLE });
    this.setState({ gameUrl: response.data.gameUrl });
    onSuccessStartGame(response.data);
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

  render() {
    return (
      <ContentWrapper>
        <Showcase>
          <ShowcaseTitle>
            <ShowcaseBlackTitle>
                Experience our game and earn {'   '}
                <ShowcaseRedTitle>Your Points!</ShowcaseRedTitle>
            </ShowcaseBlackTitle>
          </ShowcaseTitle>
          <ShowcaseGroup>
            <PlayButton onClick={this._handleStartLuckyEnvelope}>Let's Play</PlayButton>
          </ShowcaseGroup>                   
        </Showcase>
        <Visual src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/visual-tour-8.png"></Visual>
        {/* <ShowcaseFrame></ShowcaseFrame> */}
        
      {this._renderDialogLuckySpin()}
      </ContentWrapper>
    );
  }
}

export default ShowcaseView;