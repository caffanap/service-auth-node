const User = require('../models/User');
const Login = require('../models/Login');
const RandomString = require('../utils/RandomString');
const UserRepositories = require('../repositories/UserRepositories');
const Validator = require('../utils/Validator');
const Jwt = require('../libraries/Jwt');

class UserController {
    userSignUp(req, res, next) {
        const { valid, error } = Validator.compare(User, req.body)
        if (valid) {
            const password = RandomString.build(4);
            req.body.password = password;

            if (UserRepositories.cekUsername(req.body.username)) {
                if (UserRepositories.addUser(req.body)) {
                    res.status(201).json({
                        message: "User created",
                        data: req.body,
                    });
                } else {
                    res.status(406).json({
                        message: "Error insert DB",
                        data: req.body,
                    });
                }
            } else {
                res.status(406).json({
                    message: "Username already taken!",
                });
            }
        } else {
            Validator.errorValidation(res, error)
        }
    }

    userSignIn(req, res, next) {
        const { valid, error } = Validator.compare(Login, req.body)
        if (valid) {
            const user = UserRepositories.getUserByPhonePassword(req.body.phone, req.body.password)
            if (user) {
                res.status(200).send({
                    message: "Login Successfully!",
                    token: Jwt.generateToken(user)
                })
            } else {
                res.status(401).send({
                    message: "Phone or Password is WRONG!",
                })
            }
        } else {
            Validator.errorValidation(res, error)
        }
    }

    userProfile(req, res, next) {
        return res.status(200).send({
            message: "Successfully",
            data: req.userData
        })
    }
}

module.exports = new UserController()