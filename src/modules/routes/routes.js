const express = require('express');
const Router = require('express').Router
const userController = require('../controllers/user-controller');
const router = new Router()
const {body} = require('express-validator')
const authMiddleware = require('../middlewares/auth-middleware')

const {
  add,
  show,
  update,
  del
} = require('../controllers/list.controller');

router.post('/add', add)
router.get('/show', show)
router.patch('/update', update)
router.delete('/delete', del)
router.post('/registration', 
  body('password').isLength({min: 6, max: 32}),
  userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/refresh', userController.refresh)
router.get('/users', authMiddleware, userController.getUsers)

module.exports = router