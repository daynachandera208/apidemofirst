const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var db = require('../config/db_connection');

app.listen(3000,()=>console.log('Express server on : 3000'));

//Get Game Tournament Details data
app.get('/get_all_game_tournament_details',(req,res)=>{
  con.query("select * from Game_Tournament_Details", (err,rows,fields)=>{
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

//Get Game Tournament Details data by game id
app.post('/get_game_tournament_details_by_game_id',(req,res)=>{
  var game_id = req.param('game_id');
  db.query("select * from Game_Tournament_Details where Game_id = ?",[game_id], (err,rows,fields)=>{
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

//Get Game Tournament Details data by tournament id
app.post('/get_game_tournament_details_by_tournament_id',(req,res)=>{
  var tournament_id = req.param('tournament_id');
  db.query("select * from Game_Tournament_Details where Game_Tournament_id = ?",[tournament_id], (err,rows,fields)=>{
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

//Delete Game Tournament Details data by game id
app.delete('/remove_game_tournament_details_by_game_id',(req,res)=>{
  var game_id = req.param('game_id');
  db.query("delete from Game_Tournament_Details where Game_id = ?",[game_id], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});

//Delete Game Tournament Details data by tournament id
app.delete('/remove_game_tournament_details_by_tournament_id/:id',(req,res)=>{
  var tournament_id = req.param('tournament_id');
  db.query("delete from Game_Tournament_Details where Game_Tournament_id = ?",[req.params.id], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});