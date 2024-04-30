const Numbers = [1,2,3]

// const Total = Numbers.reduce(function (accumulator, currentValue) {
//     console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
//     return accumulator + currentValue;
// }, 0)


// const Total = Numbers.reduce( (accumulator,currentValue) => (accumulator+currentValue), 0)
// console.log(Total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "py course",
        price: 1999
    },
    {
        itemName: "java course",
        price: 9999
    }

]

const priceToPay = shoppingCart.reduce( (accumulator,item)=> accumulator + item.price,0);

console.log(priceToPay);