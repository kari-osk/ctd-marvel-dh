export type CheckoutInput = {
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    address: {
      address1: string;
      number: string;
      complement: string | null;
      city: string;
      state: string;
      zipCode: string;
    };
  };
  card: {
    number: string;
    cvc: string;
    expDate: string;
    nameOnCard: string;
  };
  order: {
    name: string;
    image: string;
    price: number;
  };
};
