const Boba = require('../models/boba')

const getAllBobas = async (req, res) => {
  try {
    const boba = await Boba.find()
    return res.status(200).json(boba)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getBoba = async (req, res) => {
  try {
    const boba = await Boba.findById(req.params.id)
    return res.status(200).json(boba)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllBobas,
  getBoba
}
