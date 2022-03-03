import Client from "./Client";
import OrderItem from "./OrderItem";

class Order {
  constructor(public payment: string = 'dinheiro', public discount: number = 0, public client: Client, public orderItem: OrderItem[]) {}
}
