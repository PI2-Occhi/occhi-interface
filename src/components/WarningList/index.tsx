import React from "react";

import {
    Container,
    Header,
    Icon,
    ContentContainer,
    IconContainer,
    Title,
    Time,
    Description
} from "./styles";

interface WarningProps {
    title: string;
    time: string;
    description: string;   
}

export function WarningList({ title, time, description }: WarningProps) {
    return (
        <Container>
            <IconContainer>
                <Icon name="bell"></Icon>
            </IconContainer>
            <ContentContainer>
                <Header>
                    <Title>{title}</Title>
                    <Time>{time}</Time>
                </Header>
                <Description>{description}</Description>
            </ContentContainer>
        </Container>
    )
}