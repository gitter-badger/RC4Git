const { Router } = require("express")
const router = Router()
const loginController = require('../controllers/login')
const getRepositoriesController = require('../controllers/getRepositories')
const createChannelController = require('../controllers/createChannel')

router.get('/auth/github/callback', loginController.createToken)
router.get('/getRepositories', getRepositoriesController);
router.post('/createChannel', createChannelController)

module.exports = router;