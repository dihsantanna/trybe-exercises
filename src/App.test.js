import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const digiJson = [
  {
    name: 'Agumon',
    img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
    level: 'Rookie',
  },
];

const mockFetch = jest.spyOn(global, 'fetch');

describe('Teste da aplicação toda', () => {
  it('renders App', () => {
    const { getByText } = render(<App />);

    const linkElement = getByText(/Faça uma pesquisa/i);

    expect(linkElement).toBeInTheDocument();
  });

  it(`Verifica se a aplicação possui um input para adicionar a
  pesquisa do digimon e um botão para fazer a requisição de pesquisa`, () => {
    const { getByTestId } = render(<App />);

    const inputSearch = getByTestId('input');
    const btnSearch = getByTestId('buttonSearch');

    expect(inputSearch).toBeInTheDocument();
    expect(btnSearch).toBeInTheDocument();
  });

  it(`Verifica se ao adicionar o nome do digimon no imput e clicar
  no botão de pesquisa é encontrado o pokemon`, async () => {
    mockFetch.mockResolvedValue({
      json: () => Promise.resolve(digiJson),
    });

    const { getByTestId } = render(<App />);

    const inputSearch = getByTestId('input');
    const btnSearch = getByTestId('buttonSearch');

    await userEvent.type(inputSearch, 'Agumon');
    expect(inputSearch).toHaveValue('Agumon');

    userEvent.click(btnSearch);

    expect(await screen.findByText('Agumon')).toBeInTheDocument();
    expect(await screen.findByText('level: Rookie')).toBeInTheDocument();
    expect(await screen.findByAltText('Agumon')).toBeInTheDocument();
  });

  it(`Verifica se caso não encontre o nome do digimon mostar uma
  menssagem "Digiomonx is not a Digimon in our database."`, async () => {
    const NOME_ERRADO = 'DigimonX';
    const MSG = 'Digiomonx is not a Digimon in our database.';
    mockFetch.mockResolvedValue({ json: () => Promise.resolve({ ErrorMsg: MSG }) });

    render(<App />);

    const inputSearch = screen.getByTestId('input');
    const btnSearch = screen.getByTestId('buttonSearch');

    await userEvent.type(inputSearch, NOME_ERRADO);
    userEvent.click(btnSearch);

    expect(await screen.findByText(MSG)).toBeInTheDocument();
  });
});
