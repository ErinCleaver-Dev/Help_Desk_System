import React from 'react';
import styled from 'styled-components';
import RequestForms from './RequestForms';

const Header = () => {
    return (
        <Container>
            <RequestForms />
            
        </Container>
    )    
}

export default Header

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: #a4bab3;
    height: 10vh;
`