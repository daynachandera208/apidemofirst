const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var db = require('../config/db_connection');

app.listen(3000,()=>console.log('Express server on : 3000'));
 
//Get Fantasy Football Event History data
app.get('/get_all_fantasy_football_event_history',(req,res)=>{
  con.query("select * from Fantasy_Football_Event_History", (err,rows,fields)=>{
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

//Get Fantasy Football Event History data by user id
app.post('/get_fantasy_football_event_history_by_user_id',(req,res)=>{
  var user_id = req.param('user_id');
  db.query("select * from Fantasy_Football_Event_History where User_id = ?",[user_id], (err,rows,fields)=>{
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

//Get Fantasy Football Event History data by football event id
app.post('/get_fantasy_football_event_history_by_event_id',(req,res)=>{
  var event_id = req.param('event_id');
    db.query("select * from Fantasy_Football_Event_History where Fantasy_Football_Event_id = ?",[event_id], (err,rows,fields)=>{
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

//Get Fantasy Football Event History data by football user team id
app.post('/get_fantasy_football_event_history_by_user_team_id',(req,res)=>{
  var user_team_id = req.param('user_team_id');
    db.query("select * from Fantasy_Football_Event_History where Football_Match_User_Team_id = ?",[user_team_id], (err,rows,fields)=>{
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

//Delete Fantasy Football Event History data by user id
app.delete('/remove_fantasy_football_event_history_by_user_id',(req,res)=>{
  var user_id = req.param('user_id');
  db.query("delete from Fantasy_Football_Event_History where User_id = ?",[user_id], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});

//Delete Fantasy Football Event History data by event id
app.delete('/remove_fantasy_football_event_history_by_event_id',(req,res)=>{
  var event_id = req.param('event_id');
    db.query("delete from Fantasy_Football_Event_History where Fantasy_Football_Event_id = ?",[event_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

  //Delete Fantasy Football Event History data by user team id
app.delete('/remove_fantasy_football_event_history_by_user_team_id',(req,res)=>{
  var user_team_id = req.param('user_team_id');
    db.query("delete from Fantasy_Football_Event_History where Football_Match_User_Team_id = ?",[user_team_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });