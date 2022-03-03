import Client from "./Client";
import OrderItem from "./OrderItem";

class Order {
  constructor(public payment: string = 'dinheiro', public discount: number = 0, public client: Client, public orderItens: OrderItem[]) {
    this.totalWithoutDiscount = this.totalWithoutDiscount.bind(this);
  }
  
  totalWithoutDiscount() {
    const { orderItens } = this;
    return orderItens.reduce((acc, { price }) => acc + price, 0);
  }

  totalWithDiscount() {
    const { discount, totalWithoutDiscount } = this;

    const total = totalWithoutDiscount();

    return total - (total * discount);
  }
}

const client1 = new Client('Fulano');

const item1 = new OrderItem('pastel', 3.5);

const item2 = new OrderItem('caldo de cana', 3.5);

const ordem = new Order('dinheiro', 0.1, client1, [item1, item2]);

console.log(ordem);

console.log(ordem.totalWithoutDiscount());

console.log(ordem.totalWithDiscount());
