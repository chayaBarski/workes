const jwt = require('jsonwebtoken')
const User = require('../modals/user')

const checkAdmin = async (req, res, next) => {
   

    let token = req.headers.authorization;
    let user = jwt.verify(token, process.env.SECERT)
    try {
        let finduser = await User.findOne({
            password: user.password,
            eamil: user.eamil
        })

        if (!finduser)
            res.status(500).json("you dont connection");
           
       
         if (finduser.email == 'admin@workers.com' && finduser.password == 'admin2765') {
            req.AdminId = finduser._id
            return next()
        }
    }

    catch (err) {
        res.status(500).json({ err: err });
    }
}
module.exports = checkAdmin; 