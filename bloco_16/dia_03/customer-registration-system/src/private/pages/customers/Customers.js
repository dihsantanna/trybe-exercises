import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import './customer.css';

class Customers extends React.Component {
  renderCustomers() {
    const { customers } = this.props;
    return (
      <table className="customers-table">
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Email</th>
        </tr>
        { customers.map((customer, index) => (
          <tr
            key={ index + 1 }
          >
            <td
              className={ (index + 1) % 2 === 0 ? 'tb-odd' : 'td-pair' }
            >
              {customer.name}

            </td>
            <td
              className={ (index + 1) % 2 === 0 ? 'tb-odd' : 'td-pair' }
            >
              {customer.age}

            </td>
            <td
              className={ (index + 1) % 2 === 0 ? 'tb-odd' : 'td-pair' }
            >
              {customer.email}

            </td>
          </tr>
        )) }
      </table>
    );
  }

  render() {
    const { customers } = this.props;
    return (
      <div className="customer">
        <Header className="customer-header" />
        <main className="customer-main">
          <h2>Clientes Cadastrados </h2>
          {customers.length
            ? this.renderCustomers()
            : <h3>Nenhum cliente cadastrado</h3>}
        </main>
        <Footer className="customer-footer" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  customers: state.customersReducer.customers,
});

Customers.propTypes = {
  customers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default connect(mapStateToProps)(Customers);
