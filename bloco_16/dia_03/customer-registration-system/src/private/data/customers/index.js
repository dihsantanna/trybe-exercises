// const storage = JSON.parse(localStorage.getItem('customers')) || [];

const customers = [
  {
    name: 'Diogo Sant\'Anna',
    age: '29',
    email: 'trybe@trybe.com',
  },
  {
    name: 'Diogo Sant\'Anna',
    age: '29',
    email: 'trybe@trybe.com',
  },
  // ...storage,
];

localStorage.setItem('customers', JSON.stringify(customers));

export default customers;
