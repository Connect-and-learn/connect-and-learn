const router = require("express").Router();
const User = require('../models/User.model');
const bcrypt = require('bcryptjs')


router.get('/signup', (req, res, next) => {
	res.render('signup')
});

router.post('/signup', (req, res, next) => {
	const { username, password } = req.body
	User.findOne({ username: username })
		.then(userFromDB => {
			if (userFromDB !== null) {
				res.render('signup', { message: 'Your username is already taken' })
				return
			} else {
				const salt = bcrypt.genSaltSync()
				const hash = bcrypt.hashSync(password, salt)
				User.create({
					username: username,
					password: hash
				})
					.then (createdUser => {
						console.log(createdUser)
						res.redirect('/login')
					})
					.catch(err => {
						next(err)
					})
			}
		})
});


router.get('/profile', (req, res, next) => {
	res.render('profile')
});


module.exports = router;