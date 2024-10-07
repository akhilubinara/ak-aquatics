const router = require('express').Router();

const {CustomerRegistration } = require('./customer-registration/customer-register.controller');
const {login, sumbitRemarks} = require('./public.controller')

router.post('/customer-registration', CustomerRegistration);
router.post('/login', login);
router.post('/submit-remarks', sumbitRemarks);

module.exports = router;