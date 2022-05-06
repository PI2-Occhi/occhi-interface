import React from 'react';
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
  ButtonsContainer,
} from './styles';

import { Forward } from '../../components/Forward';
import { Left } from '../../components/Left';
import { Right } from '../../components/Right';
import { Backward } from '../../components/Backward';
import { StopButton } from '../../components/StopButton';
import { RotateButton } from '../../components/RotateButton';

export function ControlInterface({ setCommand }) {
  // useState

  function handleMoveChairToForward() {
    setCommand('FW');
  }

  function handleMoveChairToLeft() {
    setCommand('LT');
  }

  function handleMoveChairToRight() {
    setCommand('RT');
  }

  function handleMoveChairToBackward() {
    setCommand('BW');
  }

  function handleStopChair() {
    setCommand('ST');
  }

  function handleRotate180Degrees() {
    setCommand('TR');
  }

  return (
    <Container>
      <Header>
        <Icon name="videogame-asset" />
        <Title>Interface de Controle</Title>
      </Header>
      <Icons>
        <MenuIcon name="menu" />
        <WarningIcon name="bell" />
      </Icons>
      <Control>
        <CircleContainer>
          <Circle>
            <Slices>
              <Hole />
              <Forward iconName="ios-chevron-up-sharp" onPress={handleMoveChairToForward} />
              <Left iconName="ios-chevron-back-sharp" onPress={handleMoveChairToLeft} />
              <Right iconName="ios-chevron-forward-sharp" onPress={handleMoveChairToRight} />
              <Backward iconName="ios-chevron-down-sharp" onPress={handleMoveChairToBackward} />
              <Slice1 />
              <Slice2 />
              <Slice3 />
              <Slice4 />
            </Slices>
          </Circle>
        </CircleContainer>
      </Control>
      <ButtonsContainer>
        <StopButton iconName="pause" onPress={handleStopChair} />
        <RotateButton iconName="rotate-cw" onPress={handleRotate180Degrees} />
      </ButtonsContainer>
    </Container>
  );
}
