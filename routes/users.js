var express = require('express');
var router = express.Router();
var userSchema = require('../model/user');

/* GET users listing. */
router.post('/signin', async function(req, res, next) {
  const{ username, password} = req.body;
  try {
    var record = await new userSchema({
      username: username,
      password: password
    });
    record.save();
    if(record){
      if(record){
        res.status(200).json({ IsSuccess: true,  Data: record, Message: 'Usser registered' });
    }else{
        res.status(200).json({ IsSuccess: false, Data: 0, Message: 'User not registered' });
    }
    }
  } catch (error) {
    res.status(500).json({ IsSuccess: false, Message: error.message });
  }
});

module.exports = router;
