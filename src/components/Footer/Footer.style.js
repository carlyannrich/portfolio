import styled from 'styled-components';

export const StyledFooter = styled.footer`
    height: 2.5%;
    width: 100%;
    background-color: #655D90;
    margin-top: 3%;
}

.footer-wrapper {
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    height: calc(100% - 2.5%);
}

.twitter-icon {
    cursor: pointer;
    display: inline-block;
    vertical-align: top;
    margin-left: 2%;
    transition: transform .2s;
        &:hover {
        transform: scale(1.3);
    }
}

`;

export const Wrapper = styled.div``;
