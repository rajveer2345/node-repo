const express = require('express');
const router = express.Router();
const user_controller = require('../controller/userController');
const blog_controller = require('../controller/blogController');

//user routes
router.post('/user/add', user_controller.add);
router.get("/user/getall", user_controller.getAll);
router.get("/user/:id", user_controller.getById);
router.patch("/user/edit/:id", user_controller.edit);
//router.delete("/user/delete/:id", user_controller.delete);
router.post("/user/login", user_controller.login);

//blog routes
router.post('/blog/add', blog_controller.add);
router.get("/blog/getall", blog_controller.getAll);
router.get("/blog/:id", blog_controller.getById);
router.patch("/blog/edit/:id", blog_controller.edit);
router.delete("/blog/delete/:id", blog_controller.delete);


router.get("/blog/getByUserId/:id", blog_controller.getByUserId);
module.exports = router;