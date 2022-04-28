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
    ArrowIcon
} from "./styles";

import { Forward } from "../../components/Forward";
import { Left } from "../../components/Left";
import { Right } from "../../components/Right";
import { Backward } from "../../components/Backward";

export function ControlInterface() {
    // useState
    
    function handleMoveChairToForward() {
        console.log("Mover para frente");
        // TODO: implements the function to move the chair to forward
    }

    function handleMoveChairToLeft() {
        console.log("Mover para a esquerda");
        // TODO: implements the function to move the chair to left
    }

    function handleMoveChairToRight() {
        console.log("Mover para a direita");
        // TODO: implements the function to move the chair to right
    }

    function handleMoveChairToBackward() {
        console.log("Mover para trás");
        // TODO: implements the function to move the chair to backward
    }

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
                            <Forward iconName="ios-chevron-up-sharp" onPress={handleMoveChairToForward}/>
                            <Left iconName="ios-chevron-back-sharp" onPress={handleMoveChairToLeft}/>
                            <Right iconName="ios-chevron-forward-sharp" onPress={handleMoveChairToRight}/>
                            <Backward iconName="ios-chevron-down-sharp" onPress={handleMoveChairToBackward}/>
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