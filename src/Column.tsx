import React from 'react';
import {ColumnContainer, ColumnTitle } from'./styles';

interface ColumnProps {
    text: string
}

function Column({ text }:ColumnProps) {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
        </ColumnContainer>
    )
}

export default Column
