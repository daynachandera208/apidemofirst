const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var db = require('../config/db_connection');

app.listen(3000,()=>console.log('Express server on : 3000'));

//Get Payment History data
app.get('/get_all_payment_history',(req,res)=>{
  con.query("select * from Payment_History", (err,rows,fields)=>{
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

//Get Payment History data by payment id
app.post('/get_payment_history_by_payment_id',(req,res)=>{
  var payment_id = req.param('payment_id');
  db.query("select * from Payment_History where Payment_id = ?",[payment_id], (err,rows,fields)=>{
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

//Get Payment History data by transaction id
app.post('/get_payment_history_by_transaction_id',(req,res)=>{
  var transaction_id = req.param('transaction_id');
  db.query("select * from Payment_History where Transaction_id = ?",[transaction_id], (err,rows,fields)=>{
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

//Get Payment History data by user id
app.post('/get_payment_history_by_user_id',(req,res)=>{
  var user_id = req.param('user_id');
    db.query("select * from Payment_History where User_id = ?",[user_id], (err,rows,fields)=>{
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

//Delete Payment History data by payment id
app.delete('/remove_payment_history_by_payment_id',(req,res)=>{
  var payment_id = req.param('payment_id');
  db.query("delete from Payment_History where Payment_id = ?",[payment_id], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});

//Delete Payment History data by transaction id
app.delete('/remove_payment_history_by_transaction_id',(req,res)=>{
  var transaction_id = req.param('transaction_id');
  db.query("delete from Payment_History where Transaction_id = ?",[transaction_id], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});

//Delete Payment History data by user id
app.delete('/remove_payment_history_by_user_id',(req,res)=>{
  var user_id = req.param('user_id');
    db.query("delete from Payment_History where User_id = ?",[user_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });