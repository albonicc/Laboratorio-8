const express = require('express');
const { reservations } = require('../utils/mocks/reservations');
const { waitingList } = require('../utils/mocks/waitingList');

const api = (app) => {
    const router = express.Router();
    app.use('/api', router);

    router.get('/tables', async (req, res, next) => {
        try {
            res.status(200).json({
                data: reservations,
                message: 'Tables listed'
            })
        } catch (err) {
            next(err);
        }
    })

    router.get('/waiting-list', async (req, res, next) => {
        try {
            res.status(200).json({
                data: waitingList,
                message: 'Waiting List listed'
            })
        } catch (err) {
            next(err);
        }
    })

    router.post('/tables', async (req, res, next) => {
        try {
            console.log(reservations.length)
            if (reservations.length <= 5)
            {
                reservations.push({
                    customerName: req.body.customerName,
                    customerNumber: req.body.customerNumber,
                    customerEmail: req.body.customerEmail,
                    customerId: req.body.customerId,
                })
                res.status(200).json({
                    data: reservations,
                    message: "Reservation has been created succesfully"
                })

            } else {
                waitingList.push({
                    customerName: req.body.customerName,
                    customerNumber: req.body.customerNumber,
                    customerEmail: req.body.customerEmail,
                    customerId: req.body.customerId,
                })
                res.status(200).json({
                    data: waitingList,
                    message: "Reservation has been added to WaitingList"
                })
            }
        } catch (err) {
            next(err);
        }
    })
}

module.exports = api;