const express = require('express');
const { tables } = require('../utils/mocks/tables');

const api = (app) => {
    const router = express.Router();
    app.use('/api', router);

    router.get('/tables', async (req, res, next) => {
        try {

            res.status(200).json({
                data: tables,
                message: 'Tables listed'
            })
        } catch (err) {
            next(err);
        }
    })

    router.post('/tables', async (req, res, next) => {
        try {

            console.log(req.body)
        
            // res.status(200).json({
            //     data: {
            //         customerName:
            //         phoneNumber:
            //         customerEmail:
            //         customerId:
            //     },
            //     message: 'Table created'
            // })
            tables.push({
                customerName: req.body.customerName,
                phoneNumber: req.body.customerName,
                customerEmail: req.body.customerName,
                customerId: req.body.customerName,
            })
            res.status(200).json({
                data: tables,
                message: "Reservation has been created succesfully"
            })
        } catch (err) {
            next(err);
        }
    })
}

module.exports = api;