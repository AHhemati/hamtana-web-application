const User = require("../models/User");
const user = require("../models/User");
const { validationResult } = require("express-validator");

const getAllUsers = async (req, res) => {
  try {
    if (req.query.pn && req.query.pgn) {
      const paginate = req.query.pgn;
      const pagenumber = req.query.pn;
      const GoalUsers = await User.find()
        .sort({ _id: -1 })
        .skip((pagenumber - 1) * paginate)
        .limit(paginate)
        .select({
          ursername: 1,
          displayname: 1,
          email: 1,
          viewed: 1,
          userActive: 1,
          createdAt: 1,
        });
      const getAllUsersNum = await User.find().sort({ _id: -1 });
      res.status(200).json({ GoalUsers, getAllUsersNum });
    } else {
      const AllUsers = await User.find().sort({ _id: -1 });
      res.status(200).json(AllUsers);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

module.exports.getAllUsers = getAllUsers;

// // REGISTER
// const register =

const updateUser = async (req, res) => {
  try {
    // EXPRESS VALIDATOR
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ msg: errors.errors[0].msg });
    } else {
      const data = req.body;
      data.ursername = req.body.ursername.replace(/\s+/g, "_").toLowerCase();
      data.displayname = req.body.displayname
        .replace(/\s+/g, "_")
        .toLowerCase();
      data.email = req.body.email.replace(/\s+/g, "_").toLowerCase();
      data.password = req.body.password.replace(/\s+/g, "").toLowerCase();
      await User.findByIdAndUpdate(req.params.id, data, {
        new: true,
      });
      res.status(200).json({ msg: "کاربر با موفقیت به روز رسانی شد" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
module.exports.updateUser = updateUser;

const updateMiniUser = async (req, res) => {
  try {
    // EXPRESS VALIDATOR
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ msg: errors.errors[0].msg });
    } else {
      if (
        req.body.ursername ||
        req.body.email ||
        req.body.payments ||
        req.body.userProducts ||
        req.body.activeCode ||
        req.body.viewed ||
        req.body.userIsActive
      ) {
        res.status(400).json({ msg: "خطا در اطلاعات فرستاده شده ..." });
      } else {
        const data = req.body;
        data.displayname = req.body.displayname
          .replace(/\s+/g, "_")
          .toLowerCase();
        data.password = req.body.password.replace(/\s+/g, "").toLowerCase();
        await User.findByIdAndUpdate(req.params.id, data, {
          new: true,
        });
        res.status(200).json({ msg: "اطلاعات شما با موفقیت به روز رسانی شد" });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
module.exports.updateMiniUser = updateMiniUser;

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.id);
    res.status(200).json({ msg: "کاربر با موفقیت حذف شد." });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
module.exports.deleteUser = deleteUser;

const getOneUserById = async (req, res) => {
  try {
    const GoalUser = await User.findById(req.params.id);
    res.status(200).json(GoalUser);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
module.exports.getOneUserById = getOneUserById;

const searchUsers = async (req, res) => {
  try {
    const theUser = await User.find({ email: req.body.email });
    if (theUser.length > 0) {
      res.status(200).json({ userData: theUser[0] });
    } else {
      res.status(200).json({ userData: 0 });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
module.exports.searchUsers = searchUsers;
