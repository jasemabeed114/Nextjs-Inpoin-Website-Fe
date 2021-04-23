import React, { Component } from "react";
import Tilt from 'react-tilt';

import {
    ContentWrapper,
    Row,
    Side,
    Main,
    GameMechanics,
    GameMechanicsTitleGroup,
    GameMechanicsTitle,
    GameMechanicsSubtitle,
    Description,
    MobileDescription,
    GameMechanicsList,
    ListItem,
    ListItemTitle,
    ListItemDescription,
    PointsIcon,
    TierIcon,
    BadgesIcon,
    LeaderboardIcon,
    MissionIcon,
    IconBox,
    MobilePointsIcon,
    MobileTierIcon,
    MobileBadgesIcon,
    MobileLeaderboardIcon,
    MobileMissionIcon,
    MobileIconBox,
} from "./GameMechanicsView.elements";

class GameMechanicsView extends Component {
    render() {
        return (
            <ContentWrapper>
                <Row>
                    <Main>
                        <GameMechanicsList>
                            <ListItem className="box1">
                            <GameMechanics>
                                <Tilt className="Tilt" options={{ max: 35 }} >
                                <GameMechanicsTitleGroup>
                                    <GameMechanicsTitle>Game<GameMechanicsSubtitle>Mechanics</GameMechanicsSubtitle></GameMechanicsTitle>
                                </GameMechanicsTitleGroup>
                                </Tilt>
                                <Description>
                                        Build your customer loyalty through
                                    gamification approaches such as points, 
                                    tier, badges, leaderboard, and mission  to engage, motivate and reward them.
                                </Description>
                                <MobileDescription>
                                    Build your customer loyalty through <br/> 
                                    gamification approaches such as points, <br />
                                    tier, badges, leaderboard, and mission <br/> to engage, motivate and reward them.
                                </MobileDescription>
                            </GameMechanics>
                            </ListItem>
                            <ListItem >
                                <IconBox>
                                    <PointsIcon />
                                </IconBox>
                                <MobileIconBox>
                                    <MobilePointsIcon />
                                </MobileIconBox>
                                <ListItemTitle>
                                    Points
                                </ListItemTitle>
                                <ListItemDescription>
                                    Measure a user’s <br/>
                                    achievements in <br/>
                                    relation to his <br/>
                                    experiences or journey<br />
                                </ListItemDescription>
                            </ListItem>
                            <ListItem>                           
                                <IconBox>
                                    <TierIcon />
                                </IconBox>
                                <MobileIconBox>
                                    <MobileTierIcon />
                                </MobileIconBox>
                                <ListItemTitle>
                                    Tier
                                </ListItemTitle>
                                <ListItemDescription>
                                    Encourage users to<br/>
                                    progress and unlock<br/>
                                    new rewards<br/>
                                </ListItemDescription>
                            </ListItem>
                            <ListItem className="box2">
                                <IconBox>
                                    <BadgesIcon />
                                </IconBox>
                                <MobileIconBox>
                                    <MobileBadgesIcon />
                                </MobileIconBox>
                                <ListItemTitle>
                                    Badges
                                </ListItemTitle>
                                <ListItemDescription>
                                    Reward achievements <br/> 
                                    visually<br />
                                </ListItemDescription>
                            </ListItem>
                            <ListItem>
                                <IconBox>
                                    <LeaderboardIcon />
                                </IconBox>
                                <MobileIconBox>
                                    <MobileLeaderboardIcon />
                                </MobileIconBox>
                                <ListItemTitle>
                                    Leaderboard
                                </ListItemTitle>
                                <ListItemDescription>
                                    Organize players <br />
                                    by Rank<br />
                                </ListItemDescription>
                            </ListItem>
                            <ListItem>
                                <IconBox>
                                    <MissionIcon />
                                </IconBox>
                                <MobileIconBox>
                                    <MobileMissionIcon />
                                </MobileIconBox>
                                <ListItemTitle>
                                    Mission
                                </ListItemTitle>
                                <ListItemDescription>
                                    Encourage engagement <br />
                                    by offering specific<br />
                                    tasks to complete<br />
                                </ListItemDescription>
                            </ListItem>
                        </GameMechanicsList>
                    </Main>
                </Row>

                
            </ContentWrapper>
        );
    }
}

export default GameMechanicsView;