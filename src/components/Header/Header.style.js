import styled from 'styled-components';

export const StyledHeader = styled.header`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px 20px;
    display: flex;
    align-items: center;
    max-width: 60%;

    @media screen and (min-width: 768px) {
        font-size: 50px;
    }

        @media screen and (min-width: 1025px) {
        font-size: 60px;
    }

    .profile-image {
        display: inline-block;
        vertical-align: top;
    }

    h1 {
        font-weight: 900;
        font-size: 24px;
        line-height: 1;
        margin: 2% 2% 2% 2%;
        display: inline-block;
        vertical-align: top;
        color: white;
        width: 90%;

        @media screen and (min-width: 480px) {
            font-size: 50px;
        }
    }
`;

export const Wrapper = styled.div``;
