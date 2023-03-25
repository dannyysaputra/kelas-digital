'use strict';

const { faker } = require('@faker-js/faker/locale/id_ID');
const bcrypt = require('bcrypt');

const name = faker.name.firstName();
// const pw = async (pw) => {
//   await bcrypt.hash(pw, 10)
// }

// const users = [...Array(5)].map( async (user) => (
//   {
//     // id: faker.datatype.uuid(),
//     name: name,
//     profesion: faker.helpers.arrayElement(['web developer', 'student']),
//     role: faker.helpers.arrayElement(['admin', 'student']),
//     email: faker.helpers.unique(faker.internet.email, [name]),
//     password: await pw(faker.internet.password()),
//     created_at: new Date(),
//     updated_at: new Date(),
//   }
// ))

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',
    [{
      id: faker.datatype.uuid(),
      name: name,
      profession: faker.helpers.arrayElement(['web developer', 'student']),
      role: faker.helpers.arrayElement(['admin', 'student']),
      email: faker.helpers.unique(faker.internet.email, [name]),
      password: await bcrypt.hash(name, 10),
      created_at: new Date(),
      updated_at: new Date(),  
    }]
    );
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
