const dataNewEmployee = (fullName) => {
    const replaceName = fullName.replace(' ', '');
    const dataEmployee = {
        nomeCompleto: fullName,
        email: `${replaceName.toLowerCase()}@trybe.com`,
    }
    return dataEmployee;
};

const newEmployees = () => {
    const employees = {
      id1: dataNewEmployee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: dataNewEmployee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: dataNewEmployee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  console.log(newEmployees());