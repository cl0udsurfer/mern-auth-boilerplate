const express = require('express');
const router = express.Router();

const { signup, accountActivation, signin } = require('../controllers/auth');

const {
  userSignupValidator,
  userSigninValidator
} = require('../validators/auth');
const { runValidation } = require('../validators');

router.post('/auth/signup', userSignupValidator, runValidation, signup);
router.post('/auth/account-activation', accountActivation);
router.post('/auth/signin', userSigninValidator, runValidation, signin);

module.exports = router;
