// Напиши функцию calculateTotalPrice(allProdcuts, productName),
// которая получает массив объектов и имя продукта(значение свойства name).
// Возвращает общую стоимость продукта(цена умноженная на количество).



function calculateTotalPrice (array, prop) {
    'use strict';
    let total = 0;
    for (let i = 0; i < array.length; i += 1) {
        let values = Object.values(array[i]);
        if (values[0] === prop) { 
            total += values[1] * values[2]
        }
    }
    return total;
  
}

//  let totalCost = 0;
//      for (const arrElement of array){
//       let values = Object.values(arrElement);
//           if (values[0] === prop) {
//           totalCost += values[1] * values[2];
//          };
//       };
//               return totalCost;
//    }

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Радар', price: 1280, quantity: 2 },
    { name: 'Радар', price: 1320, quantity: 1 },
    { name: 'Сканер', price: 2700, quantity: 1 },
    { name: 'Сканер', price: 2500, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 }
]; 

console.log(calculateTotalPrice(products, 'Радар'));  
// 9080

console.log(calculateTotalPrice(products, 'Сканер')); 
// 10200

console.log(calculateTotalPrice(products, 'Захват'));
// 2400

console.log(calculateTotalPrice(products, 'Дроид')); 
// 2800