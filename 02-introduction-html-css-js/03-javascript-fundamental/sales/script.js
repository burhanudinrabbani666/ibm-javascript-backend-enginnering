const transactions = [
    {
        item: "book", // string
        quantity: 1, // number
        price: 12.0, // Float
    },
    {
        item: "pen",
        quantity: 3,
        price: 2.5,
    },
    {
        item: "notebook",
        quantity: 2,
        price: 5.75,
    },
    {
        item: "backpack",
        quantity: 1,
        price: 29.99,
    },
    {
        item: "pencil",
        quantity: 5,
        price: 1.2,
    },
    {
        item: "eraser",
        quantity: 2,
        price: 0.99,
    },
    {
        item: "marker",
        quantity: 4,
        price: 3.5,
    },
    {
        item: "stapler",
        quantity: 1,
        price: 8.75,
    },
    {
        item: "folder",
        quantity: 3,
        price: 2.25,
    },
    {
        item: "calculator",
        quantity: 1,
        price: 19.99,
    },
];

function calculateSales(transactions) {
    const totalSales = transactions.reduce(
        (acc, transaction) =>
            acc + transaction.price * transaction.quantity,
        0,
    );

    return totalSales;
}
console.log("Total trasaction:", calculateSales(transactions));
