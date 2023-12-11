// STRETCH
const cars = [
    {
        vin: 'JT6HT00W4Y0093462',
        make: 'toyota',
        model: 'prius',
        mileage: 30000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '1FV3GFBC0YHA74039',
        make: 'toyota',
        model: 'corolla',
        mileage: 250000,
        title: 'fair',
        transmission: 'manual'
    },
    {
        vin: 'SAJGX2040XC042591',
        make: 'ford',
        model: 'focus',
        mileage: 30000,
    },
]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}