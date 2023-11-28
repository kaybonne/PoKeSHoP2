import React from 'react';
import { useLocation } from 'react-router-dom';
import { MdOutlinePowerSettingsNew } from 'react-icons/md';
import { signOut } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebaseConfig';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setPokemonTab, setToast, setUserStatus } from '../app/slices/AppSlice';
import { pokemonTabs } from '../utils/constants';
import { FaGithub } from 'react-icons/fa';
import { Block, FooterData, StyledFooter } from '../UI/StyledFooter';

export default function Footer() {
  const location = useLocation();
  const currentPokemonTab = useAppSelector(
    ({ app: { currentPokemonTab } }) => currentPokemonTab
  );
  const userInfo = useAppSelector(({ app }) => app.userInfo); // Assuming userInfo indicates user login status
  const dispatch = useAppDispatch();

  const logOutUser = () => {
    signOut(firebaseAuth);
    dispatch(setUserStatus(undefined));
    dispatch(setToast('Logged out successfully from Firebase'));
  };

  const routes = [
    {
      name: pokemonTabs.description,
      value: 'Description',
    },
    {
      name: pokemonTabs.evolution,
      value: 'Evolution',
    },
  ];

  return (
    <StyledFooter>
      <Block>
        <a
          href="https://github.com/kaybonne"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </Block>
      <FooterData>
        {location.pathname.includes('/pokemon') && (
          <ul>
            {routes.map((route) => (
              <li
                key={route.name}
                className={`${
                  currentPokemonTab === route.name ? 'active' : ''
                }`}
                onClick={() => dispatch(setPokemonTab(route.name))}
              >
                {route.value}
              </li>
            ))}
          </ul>
        )}
      </FooterData>
      {userInfo && ( // Conditionally render the logout button based on the user login status
        <Block>
          <MdOutlinePowerSettingsNew onClick={logOutUser} />
        </Block>
      )}
    </StyledFooter>
  );
}
