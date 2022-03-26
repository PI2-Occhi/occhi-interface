import React from "react";
import { WarningList } from "../../components/WarningList";
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
    WeeklyText
} from "./styles";

export function Warnings() {
    return (
        <Container>
            <Header>
                <Icon name="bell"></Icon>
                <Title>Avisos</Title>
            </Header>
            <Icons>
                <MenuIcon name="menu"></MenuIcon>
                <CloseIcon name="close"></CloseIcon>
            </Icons>
            <FilterContainer>
                <Diary><DiaryText>Diário</DiaryText></Diary>
                <Weekly><WeeklyText>Semanal</WeeklyText></Weekly>
            </FilterContainer>
            <WarningList title="Colisão" time="Há 8 min" description="A cadeira está com risco de colisão frontal."/>
            <WarningList title="Colisão" time="Há 15 min" description="A cadeira está com risco de colisão lateral direita."/>
            <WarningList title="Desuso" time="Há 30 min" description="O usuário não está sobre a cadeira de rodas."/>
            <WarningList title="Colisão" time="Há 1h" description="A cadeira está com risco de colisão lateral esquerda."/>
            <WarningList title="Bateria" time="Há 1h" description="A Bateria está com a carga abaixo de 20%."/>
        </Container>
    );
}