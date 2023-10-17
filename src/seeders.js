const userModel = require('./models/users.model');
const productsModel = require('./models/products.model');
const categoriesModel = require('./models/catgories.model');
const adminsModel = require('./models/admins.model');

const db = require('./Database/mongo');


(async() => {
    try {
        db.connectDB()

        // User Seeders
        // await userModel.insertMany([
        //     {
        //         fullname: "Isaac faithfullness",
        //         username: "faithie",
        //         email: "faithie@gmail.com",
        //         password: "faith123",
        //         phone_number: "080956734223",
        //         gender: "female",
        //         country: "niger"
        //     }
        // ])

        // // Categories Seeder
        // await categoriesModel.insertMany([
        //     {
        //         name: "Electronics",
        //         active: true,
        //         created_at: new Date(),
        //         updated_at: new Date(),
        //     },
        //     {
        //         name: "Phones",
        //         active: true,
        //         created_at: new Date(),
        //         updated_at: new Date(),
        //     },
        //     {
        //         name: "Laptop",
        //         active: true,
        //         created_at: new Date(),
        //         updated_at: new Date(),
        //     }

        // ]);

        // // Products Seeders
        // await productsModel.insertMany([
        //     {
        //         name: "Philips Iron",
        //         price: "54000",
        //         size: "medium",
        //         categories_id: 1,
        //         created_at: new Date(),
        //         updated_at: new Date(),
        //     },
        //     {
        //         name: "Samsung Standing Fan",
        //         price: "23000",
        //         size: "large",
        //         categories_id: 1,
        //         created_at: new Date(),
        //         updated_at: new Date(),
        //     },
        //     {
        //         name: "HP Elitebook corei7",
        //         price: "180000",
        //         size: "medium",
        //         categories_id: 3,
        //         created_at: new Date(),
        //         updated_at: new Date(),
        //     },
        //     {
        //         name: "OX Standing Fan",
        //         price: "26000",
        //         size: "large",
        //         categories_id: 1,
        //         created_at: new Date(),
        //         updated_at: new Date(),
        //     },
        //     {
        //         name: "Iphone XR",
        //         price: "165000",
        //         size: "medium",
        //         categories_id: 2,
        //         created_at: new Date(),
        //         updated_at: new Date(),
        //     },
        //     {
        //         name: "Samsung TV 16inch",
        //         price: "27000",
        //         size: "medium",
        //         categories_id: 1,
        //         created_at: new Date(),
        //         updated_at: new Date(),
        //     },
        //     {
        //         name: "HP Folio corei5",
        //         price: "140000",
        //         size: "medium",
        //         categories_id: 3,
        //         created_at: new Date(),
        //         updated_at: new Date(),
        //     },
        //     {
        //         name: "Sony TV 16inch",
        //         price: "26500",
        //         size: "medium",
        //         categories_id: 1,
        //         created_at: new Date(),
        //         updated_at: new Date(),
        //     },
        //     {
        //         name: "Iphone 11pro",
        //         price: "190000",
        //         size: "medium",
        //         categories_id: 2,
        //         created_at: new Date(),
        //         updated_at: new Date(),
        //     },
        //     {
        //         name: "Samsung Note10",
        //         price: "175000",
        //         size: "medium",
        //         categories_id: 2,
        //         created_at: new Date(),
        //         updated_at: new Date(),
        //     },
        //     {
        //         name: "Dell Alienware",
        //         price: "230000",
        //         size: "medium",
        //         categories_id: 1,
        //         created_at: new Date(),
        //         updated_at: new Date(),
        //     },
        //     {
        //         name: "Samsung S22 Ultra",
        //         price: "350000",
        //         size: "medium",
        //         categories_id: 2,
        //         created_at: new Date(),
        //         updated_at: new Date(),
        //     }
        // ])


        // Admins Seeders
        await adminsModel.insertMany([
            {
                username: "jhoanie",
                role: "Inventory Manager",
                user_id: 1,
                created_at: new Date(),
                updated_at: new Date(),
            }
        ])

    console.log("added to db successfully");
    process.exit(1)
    
    } catch (error) {
        console.log(`An error occured ${error}`);
    }
})()