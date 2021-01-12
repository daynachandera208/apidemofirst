const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var db = require('../config/db_connection');

app.listen(3000,()=>console.log('Express server on : 3000'));

//Get Game event details data
app.get('/get_all_game_event_details',(req,res)=>{
    con.query("select * from Game_Event_Details", (err,rows,fields)=>{
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
  
  //Get Game event details data by event id
  app.post('/get_game_event_details_by_event_id',(req,res)=>{
    var event_id = req.param('event_id');
    db.query("select * from Game_Event_Details where Game_Event_id = ?",[event_id], (err,rows,fields)=>{
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
  
  //Get Game event details ta by game id
  app.post('/get_game_event_details_by_game_id',(req,res)=>{
    var game_id = req.param('game_id');
    db.query("select * from Game_Event_Details where Game_id = ?",[game_id], (err,rows,fields)=>{
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

  //Get Game event details ta by game event name
  app.post('/get_game_event_details_by_game_event_name',(req,res)=>{
    var event_name = req.param('event_name');
    db.query("select * from Game_Event_Details where Game_Event_Name = ?",[event_name], (err,rows,fields)=>{
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

  //Get Game event details data by entry fees
  app.post('/get_game_event_details_by_entry_fees',(req,res)=>{
    var entry_fees = req.param('entry_fees');
    db.query("select * from Game_Event_Details where Game_Entry_Fees = ?",[entry_fees], (err,rows,fields)=>{
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
  
  //Delete Game event details data by game id
  app.delete('/remove_game_event_details_by_game_id',(req,res)=>{
    var game_id = req.param('game_id');
    db.query("delete from Game_Event_Details where Game_id = ?",[game_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });
  
  //Delete Game event details data by event id
  app.delete('/remove_game_event_details_by_event_id',(req,res)=>{
    var event_id = req.param('event_id');
    db.query("delete from Game_Event_Details where Game_Event_id = ?",[event_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

  //Delete Game event details data by game event name
  app.delete('/remove_game_details_by_game_event_name',(req,res)=>{
    var event_name = req.param('event_name');
    db.query("delete from Game_Event_Details where Game_Event_Name = ?",[event_name], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });