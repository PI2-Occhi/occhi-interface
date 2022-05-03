import React from "react";
import {
    Container,
    Header,
    Icon,
    Title,
    Icons,
    MenuIcon,
    CloseIcon,
    TutorialContainer,
    ForwardArrowContainer,
    Arrow,
    ArrowIcon,
    Text,
    RotateStopIcons,
} from "./styles";

export function Tutorial() {
    return (
        <Container>
            <Header>
                <Icon name="question-circle"></Icon>
                <Title>Tutorial de Uso</Title>
            </Header>
            <Icons>
                <MenuIcon name="menu"></MenuIcon>
                <CloseIcon name="close"></CloseIcon>
            </Icons>
            <TutorialContainer>
                <ForwardArrowContainer>
                    <Arrow><ArrowIcon name="ios-chevron-up-sharp"/></Arrow>
                    <Text>Movimenta a cadeira para frente</Text>
                </ForwardArrowContainer>
                <ForwardArrowContainer>
                    <Arrow><ArrowIcon name="ios-chevron-back-sharp"/></Arrow>
                    <Text>Movimenta a cadeira para a esquerda</Text>
                </ForwardArrowContainer>
                <ForwardArrowContainer>
                    <Arrow><ArrowIcon name="ios-chevron-forward-sharp"/></Arrow>
                    <Text>Movimenta a cadeira para a direita</Text>
                </ForwardArrowContainer>
                <ForwardArrowContainer>
                    <Arrow><ArrowIcon name="ios-chevron-down-sharp"/></Arrow>
                    <Text>Movimenta a cadeira para trás</Text>
                </ForwardArrowContainer>
                <ForwardArrowContainer>
                    <Arrow><RotateStopIcons name="rotate-cw"/></Arrow>
                    <Text>Movimenta a cadeira em 180 graus</Text>
                </ForwardArrowContainer>
                <ForwardArrowContainer>
                    <Arrow><RotateStopIcons name="pause"/></Arrow>
                    <Text>Parar a cadeira</Text>
                </ForwardArrowContainer>
            </TutorialContainer>
        </Container>
    );
}