const express = require("express");
const router = express();
const { check, validationResult } = require("express-validator");

const UserCtrl = require("../controllers/UserCtrl");
const User = require("../models/User");

router.get("/users", UserCtrl.getAllUsers);
// router.post("/new-user", [
//   check("title", "تعداد کارتر عنوا").isLength({ min: 8 }),
//   check("published", "talkjfaldfj a").isBoolean(),
//   check("relatedusers", "afafasfasf").isArray(),
//   check("tags", "adfafafaf").isArray(),
//   check("slug", "afafafafaf").custom((value) => {
//     return User.find({
//       slug: value,
//     }).then((user) => {
//       if (user.length > 0) {
//         throw "لطفا اسلاگ دیگری انتخاب کنید ...";
//       }
//     });
//   }),
// ],UserCtrl.newsuer);

router.post(
  "/update-user/:id",
  [
    check(
      "username",
      "تعداد کارتر نام کاربری باید بیشتر از 8 تا 20 کارکتر باشد "
    ).isLength({ min: 8, max: 20 }),

    check(
      "displayname",
      "تعداد کارتر نام کاربری باید بیشتر از 8 تا 20 کارکتر باشد "
    ).isLength({ min: 8, max: 20 }),

    check("password", "talkjfaldfj a").isLength({ min: 8, max: 20 }),
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
  ],
  UserCtrl.updateuser
);

router.post("/delete-user/:id", UserCtrl.deleteuser);
router.get("/get-user-by-id/:id", UserCtrl.getOneuserById);
router.post("/search-user", UserCtrl.Searchusers);

module.exports = router;
