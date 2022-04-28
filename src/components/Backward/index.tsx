import React, { useState, useEffect } from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, ArrowIcon } from "./styles";

interface Props extends TouchableOpacityProps {
    iconName: string;
}

export function Backward({ iconName, ...rest }: Props) {
    return (
        <Container { ...rest } activeOpacity={.7}>
            <ArrowIcon name={ iconName }></ArrowIcon>
        </Container>
    )
}