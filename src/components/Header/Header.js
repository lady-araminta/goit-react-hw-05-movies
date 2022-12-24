import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, HeaderLink, HeaderStyled } from './Header.styled';

export const Header = () => {
  return (
    <Container>
      <HeaderStyled>
        <HeaderLink to="/" end>
          Home
        </HeaderLink>
        <HeaderLink to="/movies">Movies</HeaderLink>
      </HeaderStyled>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
