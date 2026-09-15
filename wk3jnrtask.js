orderCustomer = [

    {CName:"Ali", PName:"burger", qty:3, price:500, Status:"pending"},
    {CName:"Ahmed", PName:"pizza", qty:2, price:1500, Status:"shipped"},
    {CName:"Samad", PName:"chicken karahi", qty:3, price:1800, Status:"delivered"}
];
//calculateOrderTotal
const calculateOrderTotal = (order) => {
    return order.qty * order.price;
};

for (let i = 0; i < orderCustomer.length; i++) {
    console.log(orderCustomer[i].PName + " Total = " +calculateOrderTotal(orderCustomer[i]));

}
//findCustomerSpending
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
//step 3 filterOrders
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
//step4
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
//step5 
const applyDiscount = (order) => {
    let total = order.qty * order.price;

    if (total > 1000) {
        total = total - (total * 0.10);
    }

    return total;
};

for (let i = 0; i < orderCustomer.length; i++) {
    console.log(
        orderCustomer[i].PName + " Final Price = " +
        applyDiscount(orderCustomer[i])
    );
}
//step6
const countOrdersByStatus = (Status) => {
    let count = 0;

    for (let i = 0; i < orderCustomer.length; i++) {
        if (orderCustomer[i].Status === Status) {
            count++;
        }
    }

    return count;
};

console.log("Pending Orders = " + countOrdersByStatus("pending"));
console.log("Shipped Orders = " + countOrdersByStatus("shipped"));
console.log("Delivered Orders = " + countOrdersByStatus("delivered"));
