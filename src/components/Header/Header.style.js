import styled from 'styled-components';

import device from '../assets/device';

export const StyledHeader = styled.header`
padding: 15px 0px;
#container {
    width: 100%;
    margin-bottom: 35%;

    @media ${device.mobileM} {
        margin-bottom: 30%;
    }

    @media ${device.tablet} {
        margin-bottom: 25%;
    }

    @media ${device.laptop} {
        margin-bottom: 16%;
    }
}

#containerImg {
    padding: 5% 0 0 5%;
    position: absolute;

    @media ${device.tablet} {
        padding: 5% 0 0 12%;
    }

    @media ${device.laptop} {
        padding: 4% 0 0 27%;
    }
}

h1 {
    line-height: 1;
    font-weight: 900;
    font-size: 35px;
    color: white;
    float: left;
    padding-left: 32%;
    font-family: 'Nixie One';

    @media ${device.tablet} {
        font-size: 58px;
        padding: 0 0 0 38%;
    }

    @media ${device.laptop} {
        font-size: 60px;
        padding: 2% 0 0 45%;
        width: 30%;
    }
}
`;

export const Wrapper = styled.div``;
