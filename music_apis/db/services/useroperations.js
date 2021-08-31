const UserModel = require('../models/user');
const userOperations = {
  async register(userObject) {
    console.log(userObject);

    const result = await UserModel.create(userObject);
    console.log('Result is ', result);
    // console.log(result._id);
    // const result = await UserModel.findOne({
    //   userid: userObject.userid,
    //   password: userObject.password,
    // });

    return result;
  },
  async login({ userid, password }) {
    const result = await UserModel.findOne({
      userid: userid,
      password: password,
    });
    // if (result.admin === true) {
    //   console.log('This user is an admin');
    // } else {
    //   console.log('this user is not an admin');
    // }
    console.log('Login Result is ', result);
    return result;
  },
  // login({userid, password}){
  //     if(userid == password){
  //         return "Welcome "+userid;
  //     }
  //     else{
  //         return "Invalid userid or password";
  //     }
  // }
};
// userOperations.register({
//   userid: 'ram',
//   password: '123456789',
//   name: 'Ram Kumar',
// });
module.exports = userOperations;
