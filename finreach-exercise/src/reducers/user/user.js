import * as types from './constants';
import moment from 'moment';
import faker from 'faker';

const initialState = {
  users: [{
    userId: 0,
    firstName: 'Jane',
    lastName: 'Doe',
    birthYear: 1987,
    birthDay: '07',
    birthMonth: 'October',
    company: 'Acme Inc'
  },
  {
    userId: 1,
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1967,
    birthDay: '03',
    birthMonth: 'December',
    company: 'Youtube GmbH'
  }]
};

const user = (state = initialState, action) => {
  const { type } = action;

  switch(type) {
    case types.ADD_RANDOM_USER:
      const dob = faker.date.past(50, new Date('Sat Sep 20 1992 21:35:02 GMT+0200 (CEST)'));
      const randomUser = {
        userId: state.users.length,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        birthDay: moment(dob).format('DD'),
        birthYear: dob.getFullYear(),
        birthMonth: moment(dob).format('MMMM'),
        company: faker.company.companyName()
      }
      return {
        ...state,
        users: [...state.users, randomUser]
      };
    default:
      return state;
  }
}

export default user;
