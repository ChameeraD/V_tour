const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const bcrypt = require('bcryptjs');

var { ItenararyPayment } = require('../../data/itenararyPayment/itenararyPayment.model');
var ItenararyPaymentModel = require('../../data/itenararyPayment/itenararyPayment.model.js');

router.get('/', (req, res) => {
    ItenararyPayment.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Payments :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    ItenararyPayment.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Payments :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var itenararypayment = new ItenararyPayment({
        clientid:req.body.clientid,
        amount: req.body.amount,
        date: req.body.date,
        status: "Pending",
    });
itenararypayment.save(itenararypayment, (err, doc) => {
        if (err) {
            res.json({ state: false, msg: "data not inserted" });
        }
        if (doc) {
            res.json({ state: true, msg: "data  inserted" });
        }
    }
    );
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    ItenararyPayment.findByIdAndUpdate(req.params.id, {
        $set: {
            clientid: req.body.clientid,
            amount: req.body.amount,
            date: req.body.date,
            status: req.body.status,
        }
    }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    ItenararyPayment.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Travel Agent Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;