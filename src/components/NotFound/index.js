import React from 'react';
import styled from 'styled-components'

const NotFoundArea = styled.div`
    height: calc(100vh - 200px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NotFound = ()=>{
    return (
        <NotFoundArea>
            <h1>Página não encontrada</h1>
        </NotFoundArea>
    )
}

export default NotFound;