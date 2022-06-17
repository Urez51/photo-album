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
    // await queryInterface.bulkInsert('Albums', [{
    //   title: 'Выдры',
    //   body: 'Тут фотки выдр',
    //   user_id: 1,
    //   privat: false,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // }], {});

    // await queryInterface.bulkInsert('Albums', [{
    //   title: 'PHP',
    //   body: 'помогите...',
    //   user_id: 2,
    //   privat: true,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // }], {});

    // await queryInterface.bulkInsert('Albums', [{
    //   title: 'Сабмитнулся',
    //   body: 'берёшь и делаешь сабмит',
    //   user_id: 3,
    //   privat: true,
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
    // await queryInterface.bulkDelete('Albums', null, {});
  },
};
