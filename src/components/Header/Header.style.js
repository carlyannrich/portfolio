import styled from 'styled-components';

import device from '../device';

export const StyledHeader = styled.header`
font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
padding: 15px 0px;
#container {
    width: 100%;
    margin-bottom: 35%;

    @media ${device.mobileM} {
        margin-bottom: 30%;
    }

    @media ${device.tablet} {
        margin-bottom: 20%;
    }

    @media ${device.laptop} {
        margin-bottom: 15%;
    }
}

#containerImg {
    padding-left: 5%;
    position: absolute;

    @media ${device.tablet} {
        padding-left: 10%;
    }

    @media ${device.laptop} {
        padding-left: 12%;
    }

    @media ${device.laptopL} {
        padding-left: 18%;
    }
}

h1 {
    line-height: 1;
    font-weight: 900;
    font-size: 35px;
    color: white;
    float: left;
    padding-left: 32%;

    @media ${device.tablet} {
        font-size: 45px;
        padding-left: 38%;
    }

    @media ${device.laptop} {
        font-size: 60px;
        padding-left: 38%;
    }
}
`;

export const Wrapper = styled.div``;
