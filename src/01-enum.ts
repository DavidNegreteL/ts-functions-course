export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type User = {
  username: string;
  role: ROLES;
};

const davidUser: User = {
  username: 'davidNegreteL',
  role: ROLES.SELLER,
};
