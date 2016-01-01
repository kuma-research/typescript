class CustomerId {
  constructor (public customerIdValue: number) {}
  
  get value() {
    return this.customerIdValue;
  }
}

class Customer {
  constructor (public id: CustomerId, public name: string) {  
  }
}

interface Repository<T, TId> {
  getById(id: TId): T;
  persist(model: T): TId;
}

class CustomerRepository implements Repository<Customer, CustomerId> {
  constructor (private customers: Customer[]) {}
  
  getById(customerId: CustomerId) {
    return this.customers[customerId.value];
  }
  
  persist(customer: Customer) {
    this.customers[customer.id.value] = customer;
    return customer.id;
  }
}