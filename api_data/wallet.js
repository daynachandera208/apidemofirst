const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var db = require('../config/db_connection');

app.listen(3000,()=>console.log('Express server on : 3000'));

//Get User Wallet
app.get('/get_all_wallets',(req,res)=>{
  db.query("select * from Wallet", (err,rows,fields)=>{
    if(!err)
    console.log(rows);
    else
    console.log(err);
  })
});

//Get Wallet data by wallet id
app.post('/get_wallet_data_by_wallet_id',(req,res)=>{
  var wallet_id = req.param('wallet_id');
  db.query("select * from Wallet where Wallet_id = ?",[wallet_id], (err,rows,fields)=>{
    if(!err)
    {
      var contype = req.headers['content-type'];
        if (!contype || contype.indexOf('application/json') !== 0)
        {
          res.send('Invalid parameters');
        }
        else
        {
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(rows));
        }
    }
    else
    console.log(err);
  })
});

//Get Wallet data by user id
app.post('/get_wallet_data_by_user_id',(req,res)=>{
  var user_id = req.param('user_id');
  db.query("select * from Wallet where User_id = ?",[user_id], (err,rows,fields)=>{
    if(!err)
    {
      var contype = req.headers['content-type'];
        if (!contype || contype.indexOf('application/json') !== 0)
        {
          res.send('Invalid parameters');
        }
        else
        {
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(rows));
        }
    }
    else
    console.log(err);
  })
});

//Get Wallet data by user token
app.post('/get_wallet_data_by_user_tokens',(req,res)=>{
  var user_token = req.param('user_token');
    db.query("select * from Wallet where User_Tokens = ?",[user_token], (err,rows,fields)=>{
      if(!err)
      {
        var contype = req.headers['content-type'];
        if (!contype || contype.indexOf('application/json') !== 0)
        {
          res.send('Invalid parameters');
        }
        else
        {
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(rows));
        }
      }
      else
      console.log(err);
    })
  });

//Get Wallet data by user aadhar number
app.post('/get_wallet_data_by_user_aadhar',(req,res)=>{
  var aadhar_number = req.param('aadhar_number');
    db.query("select * from Wallet where User_Aadhar_Number = ?",[aadhar_number], (err,rows,fields)=>{
      if(!err)
      {
        var contype = req.headers['content-type'];
        if (!contype || contype.indexOf('application/json') !== 0)
        {
          res.send('Invalid parameters');
        }
        else
        {
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(rows));
        }
      }
      else
      console.log(err);
    })
  });

//Get Wallet data by user pan number
app.post('/get_wallet_data_by_user_aadhar',(req,res)=>{
  var pan_number = req.param('pan_number');
    db.query("select * from Wallet where User_Pan_Number = ?",[pan_number], (err,rows,fields)=>{
      if(!err)
      {
        var contype = req.headers['content-type'];
        if (!contype || contype.indexOf('application/json') !== 0)
        {
          res.send('Invalid parameters');
        }
        else
        {
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(rows));
        }
      }
      else
      console.log(err);
    })
  });

  //Delete Wallet data by wallet id
app.delete('/remove_wallet_data_by_wallet_id',(req,res)=>{
  var wallet_id = req.param('wallet_id');
    db.query("delete from Wallet where Wallet_id = ?",[wallet_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

//Delete Wallet data by user id
app.delete('/remove_wallet_data_by_user_id',(req,res)=>{
  var user_id = req.param('user_id');
  db.query("delete from Wallet where User_id = ?",[user_id], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});

//Delete Wallet data by aadhar number
app.delete('/remove_wallet_data_by_aadhar_number',(req,res)=>{
  var aadhar_number = req.param('aadhar_number');
  db.query("delete from Wallet where User_Aadhar_Number = ?",[aadhar_number], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});

//Delete Wallet data by pan number
app.delete('/remove_wallet_data_by_pan_number',(req,res)=>{
  var pan_number = req.param('pan_number');
    db.query("delete from Wallet where User_Pan_Number = ?",[pan_number], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

//Delete Wallet data by user token
app.delete('/remove_wallet_data_by_user_tokens',(req,res)=>{
  var user_token = req.param('user_token');
    db.query("delete from Wallet where User_Tokens = ?",[user_token], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });