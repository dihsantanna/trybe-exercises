// Considere os dados abaixo. Você deve criar uma função que receba dois parâmetros: o id do funcionário e a informação disponível sobre ele ( firstName , lastName , specialties ). Você também deverá criar os testes para essa função. Sua função deverá então retornar os resultados da busca pelo id para aquele funcionário e a informação consultada. Caso o id não conste no quadro de funcionários, sua função deve retornar o erro "ID não identificada" . Se a informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível" .

// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialties: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialties: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialties: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialties: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialties: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialties: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  const employee = professionalBoard.find((professional) => professional.id === id);
  if (!employee) throw new Error('ID não identificada');
  if (!employee[detail]) throw new Error('Informação indisponível');
  return employee[detail];
};


module.exports = {
  searchEmployee,
  professionalBoard
}