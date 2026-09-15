const orderCustomer = [
    { CName: "Ali", PName: "burger", qty: 3, price: 500, Status: "pending" },
    { CName: "Ahmed", PName: "pizza", qty: 2, price: 1500, Status: "shipped" },
    { CName: "Samad", PName: "chicken karahi", qty: 3, price: 1800, Status: "delivered" }
];
//step1 Calculate Order Total
const calculateOrderTotal = (order) => {
    return order.qty * order.price;
};

for (let i = 0; i < orderCustomer.length; i++) {
    console.log(orderCustomer[i].PName + " Total = " + calculateOrderTotal(orderCustomer[i]));
}

//step2 customer spending
const findCustomerSpending = (CName) => {
    let total = 0;
    for (let i = 0; i < orderCustomer.length; i++) {
        if (orderCustomer[i].CName === CName) {
            total = total + (orderCustomer[i].qty * orderCustomer[i].price);
        }
    }
    return total;
};

console.log("Ali Spending = " + findCustomerSpending("Ali"));

// step 3 filter 

const filterOrders = (Status) => {
    let result = [];
    for (let i = 0; i < orderCustomer.length; i++) {
        if (orderCustomer[i].Status === Status) {
            result.push(orderCustomer[i]);
        }
    }
    return result;
};

console.log(filterOrders("pending"));
console.log(filterOrders("shipped"));
console.log(filterOrders("delivered"));

//step4 best selling product
const bestSellingProduct = () => {
    let productQty = {};

    for (let i = 0; i < orderCustomer.length; i++) {
        let product = orderCustomer[i].PName;

        if (productQty[product] === undefined) {
            productQty[product] = orderCustomer[i].qty;
        } else {
            productQty[product] += orderCustomer[i].qty;
        }
    }

    let bestProduct = "";
    let highestQty = 0;

    for (let product in productQty) {
        if (productQty[product] > highestQty) {
            highestQty = productQty[product];
            bestProduct = product;
        }
    }

    return bestProduct;
};

console.log("Best Selling Product = " + bestSellingProduct());
//step 5

const applyDiscount = (order) => {
    let total = calculateOrderTotal(order);

    if (total > 10000) {
        total = total - (total * 0.10);
    }

    return total;
};

for (let i = 0; i < orderCustomer.length; i++) {
    console.log(orderCustomer[i].PName + " Final Price = " + applyDiscount(orderCustomer[i]));
}
//step 6
const findHighestOrder = () => {
    let highestOrder = orderCustomer[0];
    let highestAmount = applyDiscount(orderCustomer[0]);

    for (let i = 1; i < orderCustomer.length; i++) {
        let finalAmount = applyDiscount(orderCustomer[i]);

        if (finalAmount > highestAmount) {
            highestAmount = finalAmount;
            highestOrder = orderCustomer[i];
        }
    }

    return highestOrder.CName;
};

console.log("Highest Order Customer = " + findHighestOrder());

//step 7

const displaySummary = () => {
    for (let i = 0; i < orderCustomer.length; i++) {
        let originalTotal = calculateOrderTotal(orderCustomer[i]);
        let finalAmount = applyDiscount(orderCustomer[i]);
        let discount = originalTotal - finalAmount;

        console.log("Customer Name = " + orderCustomer[i].CName);
        console.log("Product = " + orderCustomer[i].PName);
        console.log("Original Total = " + originalTotal);
        console.log("Discount = " + discount);
        console.log("Final Amount = " + finalAmount);
        console.log("--------------------------");
    }
};

displaySummary();