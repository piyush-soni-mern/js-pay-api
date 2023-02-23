const mongoose = require('mongoose');
mongoose.set('strictQuery',true);

const url = "mongodb+srv://js-pay:JSPay221@jspay.gkp7gh4.mongodb.net/jspay?retryWrites=true&w=majority";

mongoose.connect(url);