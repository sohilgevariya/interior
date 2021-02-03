const express = require('express');

const router = express.Router();
var registerSchema = require('../model/register');

router.post('/getdata', async(req,res) => {
    try{
        const record = await registerSchema.find();
        if(record){
              res.status(200).json({ IsSuccess: true,  Data: record });
        }else{
              res.status(200).json({ IsSuccess: true, Data: 0, Message: 'Users not found' });
          }
    }catch(error){
        res.status(500).json({ IsSuccess: false, Message: error.message });
    }
});
  
router.post('/signin', async function(req, res, next) {
    const{ name, email, phone, password, profile} = req.body;
    try {
      var record = await new registerSchema({
        name: name,
        email: email,
        phone: phone,
        password: password,
        profile: profile
      });

        var existphone = await registerSchema.aggregate([{
          $match: {phone: phone}
        }]);

        if(existphone){
        res.status(200).json({ IsSuccess: true, Message: 'mobile no. already registerd' });
        }
        else if(record){
            record.save();
            res.status(200).json({ IsSuccess: true,  Data: record, Message: 'Usser registered' });
        }else{
            res.status(200).json({ IsSuccess: false, Data: 0, Message: 'User not registered' });
        }
    } catch (error) {
      res.status(500).json({ IsSuccess: false, Message: error.message });
    }
  });
  


module.exports = router;