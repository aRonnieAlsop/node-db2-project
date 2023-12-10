const Cars = require('./cars-model')

const db = require('../../data/db-config')

const checkCarId = async (req, res, next) => {
  try {
    const car = await Cars.getById(req.params.id)
    if (!car) {
      next({ status: 404, message: `car with id ${req.params.id} is not found` })
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = async (req, res, next) => {
  try {
    const existingVin = await db('cars').where('name', req.body.vin.trim()).first()
    if (existingVin) {
      next({ status: 400, message: `vin ${req.body.vin} already exists` })
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
}




//   - `checkCarPayload` returns a status 400 with a `{ message: "<field name> is missing" }` if any required field is missing.

//   - `checkVinNumberValid` returns a status 400 with a `{ message: "vin <vin number> is invalid" }` if the vin number is [invalid](https://www.npmjs.com/package/vin-validator).

//   - `checkVinNumberUnique` returns a status 400 with a `{ message: "vin <vin number> already exists" }` if the vin number already exists in the database.