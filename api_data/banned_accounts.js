const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var db = require('../db_connection');

app.listen(3000,()=>console.log('Express server on : 3000'));

//Get User Banned Accounts
app.get('/get_all_banned_accounts',(req,res)=>{

  db.query("select * from Banned Accounts", (err,rows,fields)=>{
    if(!err)
    {
      var contype = req.headers['content-type'];
      var agenttype = req.headers['User-Agent'];
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

//Get Banned Accounts data by mac id
app.post('/get_banned_account_by_mac_id',(req,res)=>{
  var mac_id = req.param('mac_id');
  db.query("select * from Banned Accounts where Mac_id = ?",[mac_id], (err,rows,fields)=>{
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

//Get Banned Accounts data by user id
app.post('/get_banned_account_by_user_id',(req,res)=>{
  var user_id = req.param('user_id');
  db.query("select * from Banned Accounts where User_id = ?",[user_id], (err,rows,fields)=>{
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

//Delete Banned Accounts data by mac id
app.delete('/remove_banned_account_by_mac_id',(req,res)=>{
  var mac_id = req.param('mac_id');
    db.query("delete from Banned Accounts where Mac_id = ?",[mac_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
});

//Delete Wallet data by user id
app.delete('/remove_banned_account_by_user_id',(req,res)=>{
  var user_id = req.param('user_id');
  db.query("delete from Banned Accounts where User_id = ?",[user_id], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});