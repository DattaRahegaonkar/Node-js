const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationship");
}

const Schema = mongoose.Schema;

const orderschema = new Schema({
  item: String,
  price: Number,
});

// const addorder = async () => {
  
  //     await order.insertMany([
    //         {item: "samosa", price: 20},
    //         {item: "poha", price: 25},
    //         {item: "vadapav", price: 20},
    //         {item: "idali", price: 40},
    //     ]).then((res)=>{
      //       console.log(res);
      //     })
      //   };
      //   addorder();
      
const customerschema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "order",
    },
  ],
});

customer.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let res = await order.deleteMany({ _id: { $in: customer.orders } });
    console.log(res);
  }
  console.log("post is running");
});

const order = mongoose.model("order", orderschema);
const customer = mongoose.model("customer", customerschema);

const addcustomer = async () => {
let newcus = new customer({
  name: "ram",
});

// let order1 = new order({
//   item: "khichadi",
//   price: 30,
// });

// let order1 = await order.findOne({ item: "poha" });
// let order2 = await order.findOne({ item: "vadapav" });
// let order3 = await order.findOne({ item: "khichadi" });
// let order4 = await order.findOne({ item: "idali" });
// let order5 = await order.findOne({ item: "samosa" });

// newcus.orders.push(order1);
// newcus.orders.push(order2);
// newcus.orders.push(order3);
// newcus.orders.push(order4);
// newcus.orders.push(order5);

// newcus.orders = order1;
// newcus.orders = order2;
// newcus.orders = order3;
// await order1.save().then((res) => console.log(res));
// await newcus.save();

//   let res = await newcus.save();
//   console.log(res);
console.log("added");

};

// addcustomer();

const findcustomer = async () => {
  let res = await customer.findById('66bba6a51c1456e28eeb76f2');
  console.log(res);
};

// findcustomer();

const delcustomer = async () => {
  let res = await customer.findByIdAndDelete('66ba05ae3d8e511a030fb7e5');
  console.log(res);
};

// delcustomer();