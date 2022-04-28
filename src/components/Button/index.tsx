import React, { useState, useEffect } from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: Props) {
    return (
        <Container { ...rest } activeOpacity={.7}>
            <Title>{ title }</Title>
        </Container>
    )
}