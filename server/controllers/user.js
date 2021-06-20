const User = require('../modals/user')
const jwt = require('jsonwebtoken')

const checkPermission = async (req, res) => {
    let { password, email } = req.body
    User.findOne({ password: password, email: email })
        .then((user) => {
            if (user === null) {
                return res.status(500).json({ err: "Incorrect username and password" })
            }
            let token = jwt.sign(req.body, process.env.SECERT)
            res.status(200).json({ user:usr,token: token })

        })
        .catch((err) => {
            res.status(500).json("err")
        })
}
const getAllEmployed = async (req, res) => {
    if (req.userId){
      User.find().sort({'fullName':1}).then((users) => {
            res.status(200).json({ users: users })

        }).
        catch (err=> {
            res.status(500).json("err")
        })
    }
    
}
const getEmployedById = async (req, res) => {
    console.log(req.AdminId);

    if (req.params.id == req.userId||req.AdminId){
        User.findById(req.params.id)
            .then((user) => {
                if (user === null) {
                    return res.status(500).json({ err: "not found" })
                }
                res.status(200).json({ user: user })

            })
            .catch((err) => {
                res.status(500).json({ "err": err })
            })
        }
}
const setNewEmployed = async (req, res) => {
    if (req.AdminId) {
        let user = new User(req.body)
        user.save().then((user) => {
            res.status(200).json({ user: user })

        })
            .catch((err) => {

                res.status(500).json({ "err": err })
            })
    }
   
}

const updateEmployed = async (req, res) => {
    if (req.AdminId) {
        User.findByIdAndUpdate(req.params.id,req.body).then((user) => {
            res.status(200).json({ user: user })

        })
            .catch((err) => {

                res.status(500).json({ "err": err })
            })
    }
   
 }
module.exports = { checkPermission, getAllEmployed, getEmployedById, setNewEmployed, updateEmployed }