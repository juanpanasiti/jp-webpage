import styled from 'styled-components'
import * as Loader from "react-spinners";
import { lightTheme } from '../../themes/lightTheme';

export const Loading = () => {
    return (
        <Container>
            <Loader.SyncLoader color={lightTheme.primary} loading={true} size={30} margin={5} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 3rem;
`