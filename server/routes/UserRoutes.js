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

    check("password", "تعداد کارتر رمز عبور باید بیشتر از 8 تا 20 کارکتر باشد  ").isLength({
      min: 8,
      max: 20
    }),
    check("email", "لطفا ایمیل دیگری انتخاب کنید ...").isEmail(),
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
    check("favoriteProducts", "فرمت یکی از وردی های ثبت نام کاربر اشتباه است ").isArray(),
    check("userProducts", "فرمت یکی از وردی های ثبت نام کاربر اشتباه است ").isArray(),
    check("comments", "فرمت یکی از وردی های ثبت نام کاربر اشتباه است ").isArray(),
    check("payments", "فرمت یکی از وردی های ثبت نام کاربر اشتباه است ").isArray(),
    check("cart", "فرمت یکی از وردی های ثبت نام کاربر اشتباه است ").isArray(),
    check("viewed", "فرمت یکی از وردی های ثبت نام کاربر اشتباه است ").isBoolean(),
    check("userIsActive", "فرمت یکی از وردی های ثبت نام کاربر اشتباه است ").isBoolean(),
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

    check("password", "تعداد کارتر رمز عبور باید بیشتر از 8 تا 20 کارکتر باشد  ").isLength({
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