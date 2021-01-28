var express = require('express');
var router = express.Router();
var interiorSchema = require('../model/interior');

router.post('/getInfo', async(req, res, next) => {
    try{
        var record = await interiorSchema.find();

        if(record.length > 0){
            res.status(200).json({ IsSuccess: true, Data: record, Message: 'Data found' });
        }else{
            res.status(200).json({ IsSuccess: false, Data: 0, Message: 'Data not found' });
        }
    }catch(error){
        res.status(500).json({ Message: error.message });
    }
});

router.post('/addInfo', async(req, res, next) => {
    const{task, type} = req.body;
    try{
        var record = await new interiorSchema({
            task: task,
            type: type
        });
        record.save();

        if(record){
            res.status(200).json({ IsSuccess: true, Data: record, Message: 'Record Successfully inserted' });
        }else{
            res.status(200).json({ IsSuccess: false, Data: 0, Message: 'Record not inserted' });
        }
    }catch(error){
        res.status(500).json({ Message: error.message });
    }
});

module.exports = router;