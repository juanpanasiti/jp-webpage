import styled from 'styled-components';

const FakePageContainer = styled.div`
    padding: 0 3rem;
    min-height: 80vh;
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

    :hover {
        color: white;
        border-color: white;
        background-color: ${props => props.theme.primary};
    }
`;

export { FakeBorderedButton, FakePageContainer };
