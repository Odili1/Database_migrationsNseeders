'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Products', [
    {
      name: "Philips Iron",
      price: "54000",
      size: "medium",
      categories_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: "Samsung Standing Fan",
      price: "23000",
      size: "large",
      categories_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: "HP Elitebook corei7",
      price: "180000",
      size: "medium",
      categories_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: "OX Standing Fan",
      price: "26000",
      size: "large",
      categories_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: "Iphone XR",
      price: "165000",
      size: "medium",
      categories_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: "Samsung TV 16inch",
      price: "27000",
      size: "medium",
      categories_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: "HP Folio corei5",
      price: "140000",
      size: "medium",
      categories_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: "Sony TV 16inch",
      price: "26500",
      size: "medium",
      categories_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: "Iphone 11pro",
      price: "190000",
      size: "medium",
      categories_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: "Samsung Note10",
      price: "175000",
      size: "medium",
      categories_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: "Dell Alienware",
      price: "230000",
      size: "medium",
      categories_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: "Samsung S22 Ultra",
      price: "350000",
      size: "medium",
      categories_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
