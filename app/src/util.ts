const data = [
    {
        id: "1",
        name: "Cheeseburger",
        summary: "Wendy's Burger",
        price: 8.24,
        rating: 4.9,
        image: "/images/wendys_burger.png",
        description:
            "The Cheeseburger Wendy's Burger is a classic fast food burger that packs a punch of flavor in every bite. Made with a juicy beef   patty cooked to perfection, it's topped with melted American cheese, crispy lettuce, ripe tomato, and crunchy pickles.",
    },
    {
        id: "2",
        name: "Hamburger",
        summary: "Veggie Burger",
        price: 10.75,
        rating: 4.8,
        image: "/images/veggie_burger.png",
        description:
            "A wholesome veggie burger made with a savory plant-based patty, grilled to perfection. Topped with fresh lettuce, tomato, red onion, and creamy vegan mayo, all nestled in a toasted whole grain bun.",
    },
    {
        id: "3",
        name: "Hamburger",
        summary: "Chicken Burger",
        price: 11.30,
        rating: 4.6,
        image: "/images/chicken_burger.png",
        description:
            "A delicious chicken burger featuring a tender, grilled chicken breast. Paired with crisp lettuce, juicy tomato slices, and a tangy mayo sauce, all served on a warm sesame seed bun.",
    },
    {
        id: "4",
        name: "Hamburger",
        summary: "Fried Chicken Burger",
        price: 9.95,
        rating: 4.5,
        image: "/images/fried_chicken_burger.png",
        description:
            "Crispy on the outside and juicy on the inside, this fried chicken burger is loaded with flavor. Topped with crunchy pickles, creamy coleslaw, and spicy sauce on a soft, toasted bun.",
    },
];

export default data;

export const getProducts = () => {
    return data;
}

export const getProduct = (productId: string) => {
    return data.find(product => product.id === productId);
}

export type Product = {
    id: string;
    name: string;
    summary: string;
    price: number;
    rating: number;
    image: string;
    description: string;
}