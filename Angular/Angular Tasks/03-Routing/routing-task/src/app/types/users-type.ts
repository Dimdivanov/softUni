export interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: number;
  website: string;
  company: Company;
}

export interface Company {
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface Address {
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
  };
}

export interface Geo {
  geo: {
    lat: number;
    lng: number;
  };
}
