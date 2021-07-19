import React from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    const { getByLabelText, getByText, queryByText } = render(<App />) // Caso precise de uma nova query adicione no object destructuring
    const inputTask = getByLabelText('Tarefa:');
    const btnAdd = getByText('Adicionar');

    listTodo.forEach((task) => {
      fireEvent.change(inputTask, { target: { value: task } });
      fireEvent.click(btnAdd);
      expect(queryByText(task)).toBeInTheDocument();
      expect(inputTask.value).toBe('');
    })

  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const props = 'Estudar';
    render(<Item content={ props } />);
    expect(screen.queryByText(props)).toBeInTheDocument();
  })
})
