import React, { useState } from 'react';
import tw, { styled, css } from 'twin.macro';

const Nav = styled.nav(() => [tw`flex items-center px-12`, css`
  input {
      background-color: transparent;

      ${[tw`w-3/4 border-0 border-b outline-none`]}
  }
`]);

const NavBar = () => {
  const [query, setQuery] = useState('');

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setQuery(event.currentTarget.value);
  }
 
  return (
    <Nav>
      <input value={query} onChange={handleChange} placeholder="Search for city..." />
    </Nav>
  );  
};

export default NavBar;
