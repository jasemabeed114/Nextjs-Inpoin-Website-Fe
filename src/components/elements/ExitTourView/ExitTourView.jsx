import React, { Component } from "react";
import { FaDoorOpen } from "react-icons/fa"
import Tilt from 'react-tilt';
import Link from "next/link";

import {
    ContentWrapper,
    Row,
    Side,
    Main,
    ExitTourWhiteTitle,
    ExitText,
    Visual,
    RedeemButton,
    ExitScoring,
    ExitScoringLogo,
    ExitTour,
    ExitTourTitle,
    ExitButton,
} from "./ExitTourView.elements";

// This is just a sample function to make this code snippet work
const Translate = () => 1;

function toReactTranslate(text) {
    let langTagRegex = /\[([\w\.]+)\]/g
    let result = [];
    let nextStart = 0;
    let tagMatch;

    do {
        tagMatch = langTagRegex.exec(text);

        if (tagMatch) {
            let id = tagMatch[1];
            let before = text.substring(nextStart, tagMatch.index);

            if (before) {
                result.push(before);
            }

            // Add React Translate component to result
            result.push(<Translate id={id} />);
            nextStart = tagMatch.index + tagMatch[0].length;
        }
    } while (tagMatch);

    if (nextStart) {
        let after = text.substr(nextStart);

        if (after) {
            result.push(after);
        }
    }

    return result.length ? result : text;
}

class ExitTourView extends Component {
  render() {
    const { poin } = this.props;
    return (
      <ContentWrapper>
        <Row>
          <Side>
            <ExitTour>
              <Tilt className="Tilt" options={{ max: 35 }} >
              <ExitTourTitle>
                <ExitTourWhiteTitle>
                  Congratulations!
                </ExitTourWhiteTitle>
              </ExitTourTitle>
              <ExitText>you have completed the tour</ExitText>
              <ExitScoring>YOU GOT {poin} points from <ExitScoringLogo src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/myinpoin-logo.png"></ExitScoringLogo> </ExitScoring>
              </Tilt>
              <Link href="/?from=tour" >
                <RedeemButton> Redeem Now </RedeemButton>
              </Link>
              
            </ExitTour>
          </Side>
          <Main>
            <Visual src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/visual-tour-9.png"></Visual>
          </Main>
          <ExitButton>exit
          <Link href="/?from=tour" >
            <FaDoorOpen/>
          </Link>
          </ExitButton>
        </Row>
      </ContentWrapper>
    );
  }
}

export default ExitTourView;