import { Container, Header, List, StyledLink } from '../styled'
import { Outlet } from 'react-router-dom'
import { Suspense } from "react";

const SharedLayout = () => {
    return <Container>
        <Header>
            <List>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/catalog'>Cars</StyledLink>
                <StyledLink to='/favorites'>Favorite Cars</StyledLink>
            </List>
        </Header>
        <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
        </Suspense>
    </Container>
};

export default SharedLayout