const storage = JSON.parse(localStorage.getItem('customers')) || [];

const customers = [...storage];

localStorage.setItem('customers', JSON.stringify(customers));

export default customers;
