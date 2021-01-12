const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var db = require('../config/db_connection');

app.listen(3000,()=>console.log('Express server on : 3000'));

//Get all Football player details data
app.get('/get_all_football_player_details',(req,res)=>{
  con.query("select * from Football_Player_Details", (err,rows,fields)=>{
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

//Get Football player details data by player id
app.post('/get_football_player_details_by_player_id',(req,res)=>{
  var player_id = req.param('player_id');
  db.query("select * from Football_Player_Details where Football_Player_id = ?",[player_id], (err,rows,fields)=>{
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

//Get Football player details data by name
app.post('/get_football_player_details_by_name',(req,res)=>{
  var player_name = req.param('player_name');
  db.query("select * from Football_Player_Details where Football_Player_Name = ?",[player_name], (err,rows,fields)=>{
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

//Get Football player details data by category
app.post('/get_football_player_details_by_category',(req,res)=>{
  var category = req.param('player_name');
    db.query("select * from Football_Player_Details where Football_Player_Category = ?",[category], (err,rows,fields)=>{
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

//Get Football player details data by birth date
app.post('/get_football_player_details_by_bdate',(req,res)=>{
  var bdate = req.param('player_name');
    db.query("select * from Football_Player_Details where Football_Player_BirthDate = ?",[bdate], (err,rows,fields)=>{
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

//Delete Football player details data by football player id
app.delete('/remove_football_player_details_by_player_id',(req,res)=>{
  var player_id = req.param('player_id');
  db.query("delete from Football_Player_Details where Football_Player_id = ?",[player_id], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});