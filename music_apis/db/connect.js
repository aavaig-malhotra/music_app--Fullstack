// DB Connection
const mongoose = require('mongoose');
// mongoose.connect(process.env.DB_URL,
mongoose.connect(
  'mongodb+srv://aavaigMalhotra:aavaig123@cluster0.dewgt.mongodb.net/musicdb?retryWrites=true&w=majority',
  { poolSize: 5 },
  (err) => {
    if (err) {
      console.log('Problem in DB Connection');
    } else {
      console.log('DB Connection Created....');
    }
  }
);

// mongoose.connect(
//   'mongodb+srv://aavaigMalhotra:aavaig123@cluster0.dewgt.mongodb.net/musicdb?retryWrites=true&w=majority',
//   { poolSize: 5 }
// );
module.exports = mongoose;
