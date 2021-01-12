const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var db = require('../config/db_connection');

app.listen(3000,()=>console.log('Express server on : 3000'));

//Get football match live scores data
app.get('/get_all_football_match_live_scores',(req,res)=>{
    db.query("select * from Football_Match_Live_Scores", (err,rows,fields)=>{
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
  
  //Get football match live scores data by football match id
  app.post('/get_football_match_live_scores_by_match_id',(req,res)=>{
    var match_id = req.param('match_id');
    db.query("select * from Football_Match_Live_Scores where Football_Match_id = ?",[match_id], (err,rows,fields)=>{
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

  //Delete football match live scores data by match id
    app.delete('/remove_football_match_live_scores_by_match_id',(req,res)=>{
      var match_id = req.param('match_id');
    db.query("delete from Football_Match_Live_Scores where Football_Match_id = ?",[match_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });