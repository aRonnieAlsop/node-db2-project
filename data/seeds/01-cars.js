// STRETCH
const cars = [
    {
        vin: '12345678910111213',
        make: 'toyota',
        model: 'prius',
        mileage: 30000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '12345678910155555',
        make: 'toyota',
        model: 'corolla',
        mileage: 250000,
        title: 'fair',
        transmission: 'manual'
    },
    {
        vin: '12345678910666666',
        make: 'ford',
        model: 'focus',
        mileage: 30000,
    },
]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}