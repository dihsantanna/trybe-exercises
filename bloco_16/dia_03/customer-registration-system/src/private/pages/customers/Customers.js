import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import './customer.css';

class Customers extends React.Component {
  render() {
    return (
      <div className="customer">
        <Header className="customer-header" />
        <main className="customer-main">
          <h2>Clientes Cadastrados </h2>
        </main>
        <Footer className="customer-footer" />
      </div>
    );
  }
}

export default Customers;
