import styled from 'styled-components';

import device from '../../assets/device';

export const StyledFooter = styled.footer`
width: 100%;
background-color: #000;

    @media ${device.tablet} {
    }

    @media ${device.laptop} {
    }

.footer-wrapper {
    @media ${device.tablet} {
    }

    @media ${device.laptop} {
    }
}

.icon-wrapper {
    cursor: pointer;
    margin-left: 2%;
    transition: transform .2s;
        &:hover {
        transform: scale(1.3);
    }
}

.twitter-icon {
    color: white;
}

#footer-content {
    color: white;
    font-family: 'Roboto';
    display: inline;
    padding: 0 0 0 1%;
}


`;

export const Wrapper = styled.div``;
