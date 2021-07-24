import React from 'react';
import { render, screen } from '@testing-library/react';
import Digimon from './Digimon';

const digiProp = {
    "name":"Agumon",
    "img":"https://digimon.shadowsmith.com/img/agumon.jpg",
    "level":"Rookie",
  };

describe('Teste da tela do Digimon', () => {
  it('renders Digimon', async () => {
    render(<Digimon digimon={digiProp} />);
    const digimonName = screen.queryByText(digiProp.name);
    const digimonLvl = screen.queryByText(`level: ${digiProp.level}`);
    const digimonImg = screen.getByRole('img', { name: digiProp.name });
    expect(digimonName).toBeInTheDocument();
    expect(digimonLvl).toBeInTheDocument();
    expect(digimonImg).toBeInTheDocument();

  });
});