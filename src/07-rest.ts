import { User, ROLES } from './01-enum';
/**
 * REST params in JS
 * Receive any params -> ...args
 * const myFunct = (...args) => console.log(args);
 * *input -> myFunct()
 * !output -> []
 * *input -> myFunct(1)
 * !output -> [1]
 * *input -> myFunct(1,2,3,4,5)
 * !output -> [1,2,3,4,5]
 */

const currentUser: User = {
  username: 'davidNegreteL',
  role: ROLES.CUSTOMER,
};

export const checkCustomerRole = () => {
  // It is also possible to use 'customer' as a string
  if (currentUser.role === ROLES.CUSTOMER) {
    return true;
  }
  return false;
};

const rta = checkCustomerRole();
console.log('checkCustomerRole', rta);

const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role2) {
    return true;
  }
  return false;
};
const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log('checkRole', rta2);

/**
 * Example like an Array
 */
const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};
const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
console.log('checkRoleV2', rta3);

/**
 * Example like an Rest param
 */
const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};
// Params not should be an Array
const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.CUSTOMER);
console.log('checkRoleV3', rta4);
