import React, { useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../assets/logo.png';
import gbLogo from '../assets/gb_icon.png';
import { Link, useLocation } from 'react-router-dom';
import { resetRandomPokemons } from '../app/slices/PokemonSlice';
import { useAppDispatch } from '../app/hooks';
import { LeftNavBlock, Nav, NavData, RightNavBlock } from '../UI/StyledNavBar';
import GbModeToggle from '../components/GbModeToggle';

export default function Navbar() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navigationRoutes = [
    {
      name: 'Search',
      route: '/search',
    },
    {
      name: 'Compare',
      route: '/compare',
    },
    {
      name: 'Pokemon',
      route: '/pokemon',
    },
    {
      name: 'My List',
      route: '/list',
    },
  ];
  const location = useLocation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const index = navigationRoutes.findIndex(({ route }) =>
      location.pathname.includes(route)
    );
    ul(index);
  }, [location.pathname, navigationRoutes]);
  function ul(index: number) {
    let underlines = document.querySelectorAll<HTMLElement>('.underline');
    for (let i = 0; i < underlines.length; i++) {
      underlines[i].style.transform = 'translate3d(' + index * 100 + '%,0,0)';
    }
  }

  return (
    <Nav>
      <LeftNavBlock>
        <Link to="/" onClick={() => dispatch(resetRandomPokemons())}>
          <img src={logo} alt="" />
        </Link>
      </LeftNavBlock>
      <NavData>
        <ul>
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="underline"></div>
          {navigationRoutes.map(({ name, route }, index) => {
            return (
              <Link
                to={route}
                key={index}
                onClick={(e) => dispatch(resetRandomPokemons())}
              >
                <li>{name}</li>
              </Link>
            );
          })}
        </ul>
      </NavData>
      <RightNavBlock>
        <GbModeToggle />
      </RightNavBlock>
    </Nav>
  );
}
