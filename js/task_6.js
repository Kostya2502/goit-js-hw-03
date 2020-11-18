// Напиши функцию calculateTotalPrice(allProdcuts, productName),
// которая получает массив объектов и имя продукта(значение свойства name).
// Возвращает общую стоимость продукта(цена умноженная на количество).



// function calculateTotalPrice (array, prop) {
//     'use strict';
//     let total = 0;
//     for (let i = 0; i < array.length; i += 1) {
//         // let values = Object.values(array[i]);
//         if (values[0] === prop) { 
//             total += values[1] * values[2]
//         }
//     }
//     return total;
  
// }


// 2ой варик
// let values = Object.values(array[i]); (убрать)
// values[0] - заменить на array[I].name
// values[1], values[2] - соответственно на price & quantity

//  let totalCost = 0;
//      for (const arrElement of array){
//       let values = Object.values(arrElement);
//           if (values[0] === prop) {
//           totalCost += values[1] * values[2];
//          };
//       };
//               return totalCost;
//    }
