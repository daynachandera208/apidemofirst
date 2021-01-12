const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var db = require('../config/db_connection');

app.listen(3000,()=>console.log('Express server on : 3000'));
 
//Get Fantasy Cricket Event Details data
app.get('/get_all_fantasy_cricket_event_details',(req,res)=>{
  con.query("select * from Fantasy_Cricket_Event_Details", (err,rows,fields)=>{
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

//Get Fantasy Cricket Event Details data by cricket match id
app.post('/get_fantasy_cricket_event_details_by_match_id',(req,res)=>{
  var match_id = req.param('match_id');
  db.query("select * from Fantasy_Cricket_Event_Details where Cricket_Match_id = ?",[match_id], (err,rows,fields)=>{
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

//Get Fantasy Cricket Event Details data by cricket season id
app.post('/get_fantasy_cricket_event_details_by_season_id',(req,res)=>{
  var season_id = req.param('season_id');
  db.query("select * from Fantasy_Cricket_Event_Details where Cricket_Season_id = ?",[season_id], (err,rows,fields)=>{
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

//Get Fantasy Cricket Event Details data by cricket event id
app.post('/get_fantasy_cricket_event_details_by_event_id',(req,res)=>{
  var event_id = req.param('event_id');
    db.query("select * from Fantasy_Cricket_Event_Details where Fantasy_Cricket_Event_id = ?",[event_id], (err,rows,fields)=>{
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

//Get Fantasy Cricket Event Details data by cricket event name
app.post('/get_fantasy_cricket_event_details_by_event_name',(req,res)=>{
  var event_name = req.param('event_name');
    db.query("select * from Fantasy_Cricket_Event_Details where Fantasy_Cricket_Event_Name = ?",[event_name], (err,rows,fields)=>{
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

//Delete Fantasy Cricket Event Details data by cricket match id
app.delete('/remove_fantasy_cricket_event_details_by_match_id',(req,res)=>{
  var match_id = req.param('match_id');
  db.query("delete from Fantasy_Cricket_Event_Details where Cricket_Match_id = ?",[match_id], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});

//Delete Fantasy Cricket Event Details data by season id
app.delete('/remove_fantasy_cricket_event_details_by_season_id',(req,res)=>{
  var season_id = req.param('season_id');
  db.query("delete from Fantasy_Cricket_Event_Details where Cricket_Season_id = ?",[season_id], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});

//Delete Fantasy Cricket Event Details data by event id
app.delete('/remove_fantasy_cricket_event_details_by_event_id',(req,res)=>{
  var event_id = req.param('event_id');
    db.query("delete from Fantasy_Cricket_Event_Details where Fantasy_Cricket_Event_id = ?",[event_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

  //Delete Fantasy Cricket Event Details data by event name
app.delete('/remove_fantasy_cricket_event_details_by_event_name',(req,res)=>{
  var event_name = req.param('event_name');
    db.query("delete from Fantasy_Cricket_Event_Details where Fantasy_Cricket_Event_Name = ?",[event_name], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });