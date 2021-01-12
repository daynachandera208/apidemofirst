const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var db = require('../config/db_connection');

app.listen(3000,()=>console.log('Express server on : 3000'));
 
//Get Football Match data
app.get('/get_all_football_match',(req,res)=>{
  con.query("select * from Football_Match", (err,rows,fields)=>{
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

//Get Football Match data by football match id
app.post('/get_football_match_by_match_id',(req,res)=>{
  var match_id = req.param('match_id');
  db.query("select * from Football_Match where Football_Match_id = ?",[match_id], (err,rows,fields)=>{
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

//Get Football Match data by league id
app.post('/get_football_match_by_league_id',(req,res)=>{
  var league_id = req.param('match_id');
  db.query("select * from Football_Match where Football_League_id = ?",[league_id], (err,rows,fields)=>{
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

//Delete Football Match data by football match id
app.delete('/remove_football_match_by_match_id',(req,res)=>{
  var match_id = req.param('match_id');
  db.query("delete from Football_Match where Football_Match_id = ?",[match_id], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});

//Delete Football Match data by league id
app.delete('/remove_football_match_by_league_id',(req,res)=>{
  var league_id = req.param('match_id');
  db.query("delete from Football_Match where Football_League_id = ?",[league_id], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});