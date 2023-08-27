const express = require("express");
const router = express();
const {
  check,
  validationResult
} = require("express-validator");

const UserCtrl = require("../controllers/UserCtrl");
const User = require("../models/User");

router.get("/users", UserCtrl.getAllUsers);

router.post(
  "/new-user",
  [
    check(
      "username",
      "تعداد کارتر نام کاربری باید بیشتر از 8 تا 20 کارکتر باشد "
    ).isLength({
      min: 8,
      max: 20
    }),

    check(
      "displayname",
      "تعداد کارتر نام کاربری باید بیشتر از 8 تا 20 کارکتر باشد "
    ).isLength({
      min: 8,
      max: 20
    }),

    check("password", "talkjfaldfj a").isLength({
      min: 8,
      max: 20
    }),
    check("email", "talkjfaldfj a").isEmail(),
    check("email", "لطفا ایمیل دیگری انتخاب کنید ...").custom((value) => {
      return User.find({
        email: value,
      }).then((user) => {
        if (user.length > 0) {
          throw "لطفا ایمیل دیگری انتخاب کنید ...";
        }
      });
    }),
    check("username", "لطفا ایمیل دیگری انتخاب کنید ...").custom((value) => {
      return User.find({
        ursername: value,
      }).then((user) => {
        if (user.length > 0) {
          throw "لطفا ایمیل دیگری انتخاب کنید ...";
        }
      });
    }),
    check("favoriteProducts", "فرمت یکس تز وردی ها ").isArray(),
    check("userProducts", "talkjfaldfj a").isArray(),
    check("comments", "talkjfaldfj a").isArray(),
    check("payments", "talkjfaldfj a").isArray(),
    check("cart", "talkjfaldfj a").isArray(),
    check("viewed", "talkjfaldfj a").isBoolean(),
    check("userIsActive", "talkjfaldfj a").isBoolean(),
  ],
  UserCtrl.registerUser
);

router.post(
  "/update-user/:id",
  [
    check(
      "username",
      "تعداد کارتر نام کاربری باید بیشتر از 8 تا 20 کارکتر باشد "
    ).isLength({
      min: 8,
      max: 20
    }),

    check(
      "displayname",
      "تعداد کارتر نام نمایشی باید بیشتر از 8 تا 20 کارکتر باشد "
    ).isLength({
      min: 8,
      max: 20
    }),

    check("password", "تعداد کارتر رمز عبور باید بیشتر از 8 تا 20 کارکتر باشد  a").isLength({
      min: 8,
      max: 20
    }),
    check("email", " ").isEmail(),
    check("email", "لطفا ایمیل دیگری انتخاب کنید ...").custom((value) => {
      return User.find({
        email: value,
      }).then((user) => {
        if (user.length > 0) {
          throw "لطفا ایمیل دیگری انتخاب کنید ...";
        }
      });
    }),
    check("username", "لطفا نام کاربری دیگری انتخاب کنید ...").custom((value) => {
      return User.find({
        ursername: value,
      }).then((user) => {
        if (user.length > 0) {
          throw "لطفا ایمیل دیگری انتخاب کنید ...";
        }
      });
    }),
  ],
  UserCtrl.updateUser
);

router.post(
  "/update-mini-user/:id",
  [
    check(
      "username",
      "تعداد کارتر نام کاربری باید بیشتر از 8 تا 20 کارکتر باشد "
    ).isLength({
      min: 8,
      max: 20
    }),

    check(
      "displayname",
      "تعداد کارتر نام کاربری باید بیشتر از 8 تا 20 کارکتر باشد "
    ).isLength({
      min: 8,
      max: 20
    }),

    check("password", "talkjfaldfj a").isLength({
      min: 8,
      max: 20
    }),
  ],
  UserCtrl.updateUser
);

router.post("/delete-user/:id", UserCtrl.deleteUser);
router.get("/get-user-by-id/:id", UserCtrl.getOneUserById);
router.post(
  "/search-user",
  [check("email", "فرمت ایمیل اشتباه است").isEmail()],
  UserCtrl.searchUsers
);

module.exports = router;