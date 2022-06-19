module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    // await queryInterface.bulkInsert('Users', [{
    //   name: 'leha',
    //   mail: 'leha@mail.ru',
    //   password: '$2b$10$QHgyyO.b0a1.9CfFvzOJ9ONDTvGjXzIIO7A7Hs4TGjvBRYOvEXDWy',
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // }], {});

    // await queryInterface.bulkInsert('Users', [{
    //   name: 'nikita',
    //   mail: 'nikita@mail.ru',
    //   password: '$2b$10$5JIBQT5Kv/YpSlpD5ECu.u2sqvCv.4Z.y8vFx7s7nPbX7mOqzQQBO',
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // }], {});

    // await queryInterface.bulkInsert('Users', [{
    //   name: 'vanya',
    //   mail: 'vanya@mail.ru',
    //   password: '$2b$10$EJGKeFSbIXZrgNXrAD9ioeJYEAFxmcgBSsTWkAZuL/jIdilPvk/E6',
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // await queryInterface.bulkDelete('Users', null, {});
  },
};
