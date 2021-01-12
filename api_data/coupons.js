const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var db = require('../config/db_connection');

app.listen(3000,()=>console.log('Express server on : 3000'));

//Get Coupons data
app.get('/get_all_coupons',(req,res)=>{
    db.query("select * from Coupons", (err,rows,fields)=>{
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
  
  //Get Coupons data by coupons id
  app.post('/get_coupon_by_id',(req,res)=>{
    var coupon_id = req.param('coupon_id');
    db.query("select * from Coupons where Coupons_id = ?",[coupon_id], (err,rows,fields)=>{
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

  //Get Coupons data by match id
  app.post('/get_coupon_by_match_id',(req,res)=>{
    var match_id = req.param('match_id');
    db.query("select * from Coupons where Match_id = ?",[match_id], (err,rows,fields)=>{
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

  //Get Coupons data by user id
  app.post('/get_coupon_by_user_id',(req,res)=>{
    var user_id = req.param('user_id');
    db.query("select * from Coupons where User_id = ?",[user_id], (err,rows,fields)=>{
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

  //Get Coupons data by coupons type
  app.post('/get_coupon_by_type',(req,res)=>{
    var coupon_type = req.param('coupon_type');
    db.query("select * from Coupons where Coupons_Type = ?",[coupon_type], (err,rows,fields)=>{
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

  //Get Coupons data by coupons code
  app.post('/get_coupon_by_code',(req,res)=>{
    var coupon_code = req.param('coupon_code');
    db.query("select * from Coupons where Coupons_Code = ?",[coupon_code], (err,rows,fields)=>{
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

  //Delete Coupons data by coupons id
    app.delete('/remove_coupon_by_id',(req,res)=>{
      var coupon_id = req.param('coupon_id');
    db.query("delete from Coupons where Coupons_id = ?",[coupon_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

  //Delete Coupons data by user id
  app.delete('/remove_coupon_by_user_id',(req,res)=>{
    var user_id = req.param('user_id');
    db.query("delete from Coupons where User_id = ?",[user_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

  //Delete Coupons data by match id
  app.delete('/remove_coupon_by_match_id',(req,res)=>{
    var match_id = req.param('match_id');
    db.query("delete from Coupons where Match_id = ?",[match_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });
