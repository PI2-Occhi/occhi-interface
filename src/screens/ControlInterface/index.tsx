import React from "react";
import {
    Container,
    Header,
    Icon,
    Title,
    Icons,
    MenuIcon,
    WarningIcon,
    Control,
    CircleContainer,
    Circle,
    Slices,
    Slice1,
    Slice2,
    Slice3,
    Slice4,
    Hole,
    ArrowUp,
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowIcon
} from "./styles";

export function ControlInterface() {
    return (
        <Container>
            <Header>
                <Icon name="videogame-asset"></Icon> 
                <Title>Interface de Controle</Title>
            </Header>
            <Icons>
                <MenuIcon name="menu"></MenuIcon>
                <WarningIcon name="bell"></WarningIcon>
            </Icons>
            <Control>
                <CircleContainer>
                    <Circle>
                        <Slices>
                            <Hole>
                            </Hole>
                            <ArrowUp><ArrowIcon name="ios-chevron-up-sharp"></ArrowIcon></ArrowUp>
                            <ArrowLeft><ArrowIcon name="ios-chevron-back-sharp"></ArrowIcon></ArrowLeft>
                            <ArrowRight><ArrowIcon name="ios-chevron-forward-sharp"></ArrowIcon></ArrowRight>
                            <ArrowDown><ArrowIcon name="ios-chevron-down-sharp"></ArrowIcon></ArrowDown>
                            <Slice1></Slice1>
                            <Slice2></Slice2>
                            <Slice3></Slice3>
                            <Slice4></Slice4>
                        </Slices>
                    </Circle>
                </CircleContainer>
            </Control>
        </Container>
    );
}