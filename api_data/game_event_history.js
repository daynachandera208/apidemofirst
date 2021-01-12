const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var db = require('../config/db_connection');

app.listen(3000,()=>console.log('Express server on : 3000'));

//Get Game event history data
app.get('/get_all_game_event_history',(req,res)=>{
    con.query("select * from Game_Event_History", (err,rows,fields)=>{
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
  
  //Get Game event history data by event id
  app.post('/get_game_event_history_by_event_id',(req,res)=>{
    var event_id = req.param('event_id');
    db.query("select * from Game_Event_History where Game_Event_id = ?",[event_id], (err,rows,fields)=>{
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
  
  //Get Game event history data by game event lobby id
  app.post('/get_game_event_history_by_game_id',(req,res)=>{
    var lobby_id = req.param('lobby_id');
    db.query("select * from Game_Event_History where Game_Event_lobby_id = ?",[lobby_id], (err,rows,fields)=>{
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

  //Get Game event history ta by user id
  app.post('/get_game_event_history_by_user_id',(req,res)=>{
    var user_id = req.param('user_id');
    db.query("select * from Game_Event_History where User_id = ?",[user_id], (err,rows,fields)=>{
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
  
  //Delete Game event history data by event id
  app.delete('/remove_game_event_history_by_event_id',(req,res)=>{
    var event_id = req.param('event_id');
    db.query("delete from Game_Event_History where Game_Event_id = ?",[event_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

  //Delete Game event history data by user id
  app.delete('/remove_game_event_history_by_user_id',(req,res)=>{
    var user_id = req.param('user_id');
    db.query("delete from Game_Event_History where User_id = ?",[user_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

  //Delete Game event history data by game event lobby id
  app.delete('/remove_game_event_history_by_lobby_id',(req,res)=>{
    var lobby_id = req.param('lobby_id');
    db.query("delete from Game_Event_History where Game_Event_lobby_id = ?",[lobby_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });