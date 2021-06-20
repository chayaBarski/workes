const router = require('express').Router()

const user = require('../controllers/user');
const checkUser = require('../middlewares/checkUser')
const checkAdmin = require('../middlewares/checkAdmin')

router.post('/checkPermission', user.checkPermission)
router.get('/getAllEmployed',checkUser,user.getAllEmployed)
router.get('/getEmployedById/:id',checkUser,checkAdmin,user.getEmployedById)
router.post('/setNewEmployed', checkUser,checkAdmin, user.setNewEmployed)
router.post('/updateEmployed/:id', checkUser,checkAdmin, user.setNewEmployed)

module.exports = router;
