// SDK de Mercado Pago
const mercadopago = require('mercadopago')

const PaymentController = {};

// Agrega credenciales
mercadopago.configure({
  sandbox: true,
  access_token: 'APP_USR-2878045987965744-011322-c6b81875b860ebc3ab551a68bbdf7778-476304282'
});
// Crea un objeto de preferencia
let preference = {
  items: [
    {
      title: 'Mi producto',
      unit_price: 100,
      quantity: 1,
    }
  ]
};
mercadopago.preferences.create(preference)
.then((response) => {
// Este valor reemplazará el string "$$init_point$$" en tu HTML
  global.init_point = response.body.init_point;
}).catch((err) => {
  console.log(err);
});


PaymentController.processPayment = async (req, res) => {
  // const { id } = req.params;
  // const employee = await Employee.findById(id);
  // res.json();
  console.log(req, res);
};

module.exports = PaymentController;