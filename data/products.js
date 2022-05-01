
/*const entree1 = require('../../src/assets/entree1.png');
const entree2 = require('../../src/assets/entree2.png');
const entree3 = require('../../src/assets/entree3.png');

const plat1 = require('../../src/assets/plat1.png');
const plat2 = require('../../src/assets/plat2.png');
const plat3 = require('../../src/assets/plat3.png');
const dessert1 = require('../../src/assets/dessert1.png');
const dessert2 = require('../../src/assets/dessert2.png');
const dessert3 = require('../../src/assets/dessert3.png');*/


const products = [
    [
        {
            title: "Salade composée",
            description: "Hmm, c'est très bon ! ",
            price: 10,
            image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWR8ZW58MHx8MHx8&w=1000&q=80",
            qty: 0,
            type: "entree"
        },
        {

            title: "Assortiment de charcuterie",
            description: "Hmm, c'est très bon ! ",
            price: 11,
            image: "https://images.unsplash.com/photo-1611764197743-702a4d01463b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhcmN1dGVyaWV8ZW58MHx8MHx8&w=1000&q=80",
            qty: 0,
            type: "entree"

        },
        {

            title: "Crevette frites à l'ail, poivre",
            description: "Hmm, c'est très bon ! ",
            price: 9,
            image: "https://media.istockphoto.com/photos/fried-shrimp-with-garlic-pepper-picture-id1033045298?k=20&m=1033045298&s=612x612&w=0&h=YZ8m3wE7DTtR22-iVJHaCV-QG5Dga_GeKpB5v_OddEg=",
            qty: 0,
            type: "entree"

        }],
    [{
        title: "Filet de saumon grillé",
        description: "Hmm, c'est très bon ! ",
        price: 9,
        image: "https://media.istockphoto.com/photos/grilled-salmon-fillet-and-fresh-vegetable-salad-mediterranean-diet-picture-id1308223808?k=20&m=1308223808&s=612x612&w=0&h=jvLO1TAx7oGRiZpWmadlKNqUYrRq2m78upRQ1SHymi4=",
        qty: 0,
        type: "plat"

    }, {
        title: "Pizza",
        description: "Hmm, c'est très bon ! ",
        price: 9,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80",
        qty: 0,
        type: "plat"
    }, {
        title: "Sandwich de la maison",
        description: "Hmm, c'est très bon ! ",
        price: 9,
        image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        qty: 0,
        type: "plat"
    },
    ], [{
        title: "Glace",
        description: "Hmm, c'est très bon ! ",
        price: 9,
        image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        qty: 0,
        type: "dessert"
    }, {
        title: "Gateau fait maison",
        description: "Hmm, c'est très bon ! ",
        price: 9,
        image: "https://images.unsplash.com/photo-1484300681262-5cca666b0954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNha2UlMjBkaXNofGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        qty: 0,
        type: "dessert"
    }, {
        title: "Fondant au chocolat",
        description: "Hmm, c'est très bon ! ",
        price: 9,
        image: "https://media.istockphoto.com/photos/chocolate-mousse-desserts-concept-picture-id1189235789?k=20&m=1189235789&s=612x612&w=0&h=oIKg3Goa4g5J5jZw693zzSXU4hrzic4TYnR1aWEcmd0=",
        qty: 0,
        type: "dessert"
    }

    ]]

module.exports = products;
