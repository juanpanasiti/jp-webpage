import styled from 'styled-components';

const FakePageContainer = styled.div`
    padding: 0 3rem;
    min-height: 80vh;
`;

const FakeTitle = styled.h1`
    font-size: 30px;
    font-family: 'Comfortaa';
`;
const FakeSubtitle = styled.h2`
    font-size: 25px;
    font-family: 'Comfortaa';
    margin: 0;
    padding: 1rem 0;
`;

const FakeBorderedButton = styled.div`
    color: ${props => props.theme.primary};
    border: 2px solid ${props => props.theme.primary};
    margin: 0.5rem 1rem;
    padding: 0.5rem 0.8rem;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none;
        color: inherit;
    }

    :hover {
        color: white;
        border-color: white;
        background-color: ${props => props.theme.primary};
    }
`;

export { FakeBorderedButton, FakePageContainer, FakeTitle, FakeSubtitle };
