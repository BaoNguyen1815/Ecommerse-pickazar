import { plainToClass } from 'class-transformer';
import { info } from 'console';
import Order from './order.type';
import OrderProduct from './orderProduct.type';
const db= require('../../../database_client');

const loadOrders = () : Promise<Order[]>  =>{
    let result_orders = db.orders.findAll({
        include:[
            {
            model : db.products,
        },
        {
            model : db.order_details,
        }
    ]
    }).then((orders:[Order])=>{
        let result = orders.map((order : any)=>{
            // console.log(order);
            
            const jsonAddress = JSON.parse(order.deliveryAddress);
            const delivery_address = jsonAddress.address +", "+jsonAddress.city + ", " + jsonAddress.country;
            return {
                id: order.id,
                userId: order.userId,
                deliveryTime : order.deliveryTime,
                amount : order.amount,
                date : order.date,
                deliveryAddress: delivery_address,
                subtotal: order.subtotal,
                discount: order.discount,
                deliveryFee: order.deliveryFee,
                status : order.status,
                products: order.products.map((item :any ) =>{
                    let price = item.price;
                    let data = item.order_details;
                    // console.log('data: ',data);
                    let quantity = data.quantity;
                    let total = price * quantity;
                    return{
                        id: item.id,
                        title : item.title,
                        weight: item.unit,
                        price: price,
                        image: item.image,
                        // image:'http://s3.amazonaws.com/redqteam.com/headless-image/banana.jpg',
                        // details: item.order_details,
                        quantity: quantity,
                        total : total,
                    }
                })
            }
        });
        console.log(result[0])
        return result;
    })
    return result_orders;
}

// const loadOrders = (): Order[] => {
//   return plainToClass(Order, [
//     {
//       id: 1,
//       userId: 1,
//       deliveryTime: '13th April',
//       amount: 249.7,
//       date: '7th April 2019',
//       deliveryAddress: '1756  Roy Alley, GIRARDVILLE, Pennsylvania',
//       subtotal: 200,
//       discount: 0.0,
//       deliveryFee: 49.7,
//       products: [
//         {
//           id: 1,
//           title: 'Banana',
//           weight: '2lb',
//           price: 50,
//           image:
//             'http://s3.amazonaws.com/redqteam.com/headless-image/banana.jpg',
//           quantity: 2,
//           total: 100,
//         },
//         {
//           id: 2,
//           title: 'Onions',
//           image:
//             'http://s3.amazonaws.com/redqteam.com/headless-image/onions.jpg',
//           weight: '2lb',
//           price: 100,
//           quantity: 1,
//           total: 100,
//         },
//       ],
//       status: 2,
//     },
//     {
//       id: 2,
//       userId: 1,
//       amount: 339.0,
//       deliveryTime: '17th April',
//       date: '7th April 2019',
//       deliveryAddress: '1756  Roy Alley, GIRARDVILLE, Pennsylvania',
//       subtotal: 300.0,
//       discount: 0.0,
//       deliveryFee: 39.0,
//       products: [
//         {
//           id: 1,
//           title: 'Blue Grapes',
//           image:
//             'http://s3.amazonaws.com/redqteam.com/headless-image/blue_grapes.jpg',
//           weight: '2lb',
//           price: 150,
//           quantity: 1,
//           total: 150,
//         },
//         {
//           id: 2,
//           title: 'Coconut',
//           image:
//             'http://s3.amazonaws.com/redqteam.com/headless-image/cocnut.jpg',
//           weight: '2lb',
//           price: 150,
//           quantity: 1,
//           total: 150,
//         },
//       ],
//       status: 1,
//     },
//     {
//       id: 3,
//       userId: 1,
//       amount: 318.0,
//       deliveryTime: '17th April',
//       date: '12th April 2019',
//       deliveryAddress: '1756  Roy Alley, GIRARDVILLE, Pennsylvania',
//       subtotal: 279.0,
//       discount: 0.0,
//       deliveryFee: 39.0,
//       products: [
//         {
//           id: 1,
//           title: 'Garlic',
//           image:
//             'http://s3.amazonaws.com/redqteam.com/headless-image/garlic.jpg',
//           weight: '2lb',
//           price: 140,
//           quantity: 1,
//           total: 140,
//         },
//         {
//           id: 2,
//           title: 'Green Apple',
//           image:
//             'http://s3.amazonaws.com/redqteam.com/headless-image/Green_Apple.jpg',
//           weight: '2lb',
//           price: 139,
//           quantity: 1,
//           total: 139,
//         },
//       ],
//       status: 3,
//     },
//     {
//       id: 4,
//       userId: 1,
//       amount: 339.0,
//       deliveryTime: '17th April',
//       date: '17th April 2019',
//       deliveryAddress: '1756  Roy Alley, GIRARDVILLE, Pennsylvania',
//       subtotal: 300,
//       discount: 0.0,
//       deliveryFee: 39.0,
//       products: [
//         {
//           id: 1,
//           title: 'Guava',
//           image:
//             'http://s3.amazonaws.com/redqteam.com/headless-image/guava.jpg',
//           weight: '2lb',
//           price: 100,
//           quantity: 3,
//           total: 300,
//         },
//       ],
//       status: 2,
//     },
//     {
//       id: 5,
//       userId: 1,
//       amount: 326.0,
//       deliveryTime: '17th April',
//       date: '27th April 2019',
//       deliveryAddress: '1756  Roy Alley, GIRARDVILLE, Pennsylvania',
//       subtotal: 287.0,
//       discount: 0.0,
//       deliveryFee: 39.0,
//       products: [
//         {
//           id: 1,
//           title: 'Oranges',
//           image:
//             'http://s3.amazonaws.com/redqteam.com/headless-image/oranges.jpg',
//           weight: '2lb',
//           price: 100,
//           quantity: 2,
//           total: 200,
//         },
//         {
//           id: 2,
//           title: 'Pepper',
//           image:
//             'http://s3.amazonaws.com/redqteam.com/headless-image/pepper.jpg',
//           weight: '2lb',
//           price: 87,
//           quantity: 1,
//           total: 87,
//         },
//       ],
//       status: 1,
//     },
//   ]);
// };

export default loadOrders;
