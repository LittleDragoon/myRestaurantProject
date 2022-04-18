
import entree1 from '../assets/entree1.png'
import entree2 from '../assets/entree2.png'
import entree3 from '../assets/entree3.png'
import plat1 from '../assets/plat1.png'
import plat2 from '../assets/plat2.png'
import plat3 from '../assets/plat3.png'
import dessert1 from '../assets/dessert1.png'
import dessert2 from '../assets/dessert2.png'
import dessert3 from '../assets/dessert3.png'





const data = {
    products: [
        [
            {
                id: 1,
                title: "Salade César",
                description: "Hmm, c'est très bon ! ",
                price: 10,
                image: entree1,
            },
            {
                id: 2,
                title: "Charcuterie",
                description: "Hmm, c'est très bon ! ",
                price: 11,
                image: entree2,
            },
            {
                id: 3,
                title: "Salade de Crevette",
                description: "Hmm, c'est très bon ! ",
                price: 9,
                image: entree3,
            }],
        [{
            id: 4,
            title: "Pâtes Carbonara",
            description: "Hmm, c'est très bon ! ",
            price: 9,
            image: plat1,
        }, {
            id: 5,
            title: "Pizza",
            description: "Hmm, c'est très bon ! ",
            price: 9,
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80"
        }, {
            id: 6,
            title: "Galette Bretonne",
            description: "Hmm, c'est très bon ! ",
            price: 9,
            image: plat3,
        },
        ], [{
            id: 7,
            title: "Glace",
            description: "Hmm, c'est très bon ! ",
            price: 9,
            image: dessert1,
        }, {
            id: 8,
            title: "Macaron",
            description: "Hmm, c'est très bon ! ",
            price: 9,
            image: dessert2,
        }, {
            id: 9,
            title: "Ile Flottante",
            description: "Hmm, c'est très bon ! ",
            price: 9,
            image: dessert3,
        }
        ]], //{id, title, desc, price, img}
    panier: [],  // {id, title, desc, price, img, qty}

};

export default data;