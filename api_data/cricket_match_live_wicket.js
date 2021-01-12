const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var db = require('../config/db_connection');

app.listen(3000,()=>console.log('Express server on : 3000'));

//Get cricket match live wicket data
app.get('/get_all_cricket_match_live_wicket',(req,res)=>{
    db.query("select * from Cricket_Match_Live_Wicket", (err,rows,fields)=>{
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
  
  //Get cricket match live wicket data by match live wicket id
  app.post('/get_cricket_match_live_wicket_by_live_wicket_id',(req,res)=>{
    var live_wicket_id = req.param('live_wicket_id');
    db.query("select * from Cricket_Match_Live_Wicket where Cricket_Match_Live_Wicket_id = ?",[live_wicket_id], (err,rows,fields)=>{
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

  //Delete cricket match live wicket data by match live wicket id
    app.delete('/remove_cricket_match_live_wicket_by_live_wicket_id',(req,res)=>{
    var live_wicket_id = req.param('live_wicket_id');
    db.query("delete from Cricket_Match_Live_Wicket where Cricket_Match_Live_Wicket_id = ?",[live_wicket_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });