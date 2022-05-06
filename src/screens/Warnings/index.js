import React, { useEffect, useState } from 'react';
import { WarningList } from '../../components/WarningList';
import {
  Container,
  Header,
  Icon,
  Title,
  Icons,
  MenuIcon,
  CloseIcon,
  FilterContainer,
  Diary,
  Weekly,
  DiaryText,
  WeeklyText,
} from './styles';

export function Warnings({ alerts }) {
  return (
    <Container>
      <Header>
        <Icon name="bell" />
        <Title>Avisos</Title>
      </Header>
      <Icons>
        <MenuIcon name="menu" />
        <CloseIcon name="close" />
      </Icons>
      <FilterContainer>
        <Diary><DiaryText>Diário</DiaryText></Diary>
        <Weekly><WeeklyText>Semanal</WeeklyText></Weekly>
      </FilterContainer>
      {
             alerts.map((alert) => (
               alert.type == 'power' && <WarningList title="Bateria" description={`Restam ${alert.value * 100}% de bateria`} />
                    || alert.type == 'overturn' && <WarningList title="Capotamento" description="A cadeira sinalizou capotamento" />
                    || alert.type == 'colision' && <WarningList title="Colisão" description={`Risco de colisão ${alert.value}`} />
                    || alert.type == 'chair' && <WarningList title="Cadeira" description="O usuário não está sentado na cadeira" />
             ))
            }
    </Container>
  );
}
