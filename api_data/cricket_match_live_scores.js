const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var db = require('../config/db_connection');

app.listen(3000,()=>console.log('Express server on : 3000'));

//Get cricket match live scores data
app.get('/get_all_cricket_match_live_scores',(req,res)=>{
    db.query("select * from Cricket_Match_Live_Scores", (err,rows,fields)=>{
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
  
  //Get cricket match live scores data by cricket match id
  app.post('/get_cricket_match_live_scores_by_match_id',(req,res)=>{
    var match_id = req.param('match_id');
    db.query("select * from Cricket_Match_Live_Scores where Cricket_Match_id = ?",[match_id], (err,rows,fields)=>{
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

  //Get cricket match live scores data by live wicket id
  app.post('/get_cricket_match_live_scores_by_live_wicket_id',(req,res)=>{
    var live_wicket_id = req.param('live_wicket_id');
    db.query("select * from Cricket_Match_Live_Scores where Cricket_Match_Live_Wicket_id = ?",[live_wicket_id], (err,rows,fields)=>{
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

  //Delete cricket match live scores data by match id
    app.delete('/remove_cricket_match_live_scores_by_match_id',(req,res)=>{
    var match_id = req.param('match_id');
    db.query("delete from Cricket_Match_Live_Scores where Cricket_Match_id = ?",[match_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

  //Delete cricket match live scores data by live wicket id
  app.delete('/remove_cricket_match_live_scores_by_live_wicket_id',(req,res)=>{
    var live_wicket_id = req.param('live_wicket_id');
    db.query("delete from Cricket_Match_Live_Scores where Cricket_Match_Live_Wicket_id = ?",[live_wicket_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });