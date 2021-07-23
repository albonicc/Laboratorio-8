const express = require('express');
const { tables } = require('../utils/mocks/tables');

const api = (app) => {
    const router = express.Router();
    app.use('/api', router);

    router.get('/tables', async (req, res, next) => {
        try {
            const tablesData = await Promise.resolve(tables);

            res.status(200).json({
                data: tablesData,
                message: 'Tables listed'
            })
        } catch (err) {
            next(err);
        }
    })
}

module.exports = api;