var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
function getTotal(array) {
    var totalPrice = 0;
    var arrayLength = array.length;
    for (var i = 0; i < arrayLength; i++) {
        totalPrice += array[i].price;
    }
    return totalPrice;
}

console.log(getTotal(orders));