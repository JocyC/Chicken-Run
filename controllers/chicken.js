const Chicken = require("../models/Chicken");

const getAllChicken = async (req, res) => {
  try {
    const chicken = await Chicken.find({});
    res.status(200).json({ chicken });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getSingleChicken = async (req, res) => {
  try {
    const { id: chickenID } = req.params;
    const chicken = await Chicken.findOne({ _id: chickenID });
    if (!chicken) {
      return res
        .status(404)
        .json({ msg: `No chicken with this id : ${chickenID}` });
    }
    res.status(200).json({ chicken });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createChicken = async (req, res) => {
  try {
    const chicken = await Chicken.create(req.body);
    res.status(201).json({ chicken });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const replaceChicken = async (req, res) => {
  try {
    const { id: chickenID } = req.params;
    const chicken = await Chicken.findOneAndUpdate(
      { _id: chickenID },
      req.body,
      { new: true, runValidators: true, overwrite: true }
    );
    if (!chicken) {
      return res
        .status(404)
        .json({ msg: `No chicken with this id : ${chickenID}` });
    }
    res.status(200).json({ chicken });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const updateChicken = async (req, res) => {
  try {
    const { id: chickenID } = req.params;
    const chicken = await Chicken.findOneAndUpdate(
      { _id: chickenID },
      req.body,
      { new: true, runValidators: true }
    );
    if (!chicken) {
      return res
        .status(404)
        .json({ msg: `No chicken with this id : ${chickenID}` });
    }
    res.status(200).json({ chicken });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteChicken = async (req, res) => {
  try {
    const { id: chickenID } = req.params;
    const chicken = await Chicken.findOneAndDelete({ _id: chickenID });
    if (!chicken) {
      return res
        .status(404)
        .json({ msg: `No chicken with this id : ${chickenID}` });
    }
    res.status(200).json({ chicken });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllChicken,
  getSingleChicken,
  createChicken,
  updateChicken,
  replaceChicken,
  deleteChicken,
};
