//create prompt
const userInput = prompt("Enter flavors separated by commas:")


//split user input with commas
const order = userInput.split(",")
console.log(order)

//create function
function orderQty(order) {
    let orderCt = {};

    for (let i = 0; i < order.length; i++) {
        let leFlavor = order[i];

        if (orderCt[leFlavor]) {
            orderCt[leFlavor]++;
        } else {
            orderCt[leFlavor] = 1;
        }
    }

    return orderCt;
}


console.log(orderQty(order))