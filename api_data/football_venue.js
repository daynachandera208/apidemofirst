const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var db = require('../config/db_connection');

app.listen(3000,()=>console.log('Express server on : 3000'));
 
//Get Football venue data
app.get('/get_all_football_venue',(req,res)=>{
    con.query("select * from Football_Venue", (err,rows,fields)=>{
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
  
  //Get Football venue data by venue id
  app.post('/get_football_venue_by_venue_id',(req,res)=>{
    var venue_id = req.param('venue_id');
    db.query("select * from Football_Venue where Football_Venue_id = ?",[venue_id], (err,rows,fields)=>{
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
  
  //Get Football venue data by venue name
  app.post('/get_football_venue_by_venue_name',(req,res)=>{
    var venue_name = req.param('venue_name');
    db.query("select * from Football_Venue where Football_Venue_Name = ?",[venue_name], (err,rows,fields)=>{
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

  //Get Football venue data by venue city
  app.post('/get_football_venue_by_venue_city',(req,res)=>{
    var venue_city = req.param('venue_city');
    db.query("select * from Football_Venue where Football_Venue_City = ?",[venue_city], (err,rows,fields)=>{
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
  
  //Get Football venue data by venue country
  app.post('/get_football_venue_by_venue_country',(req,res)=>{
    var venue_country = req.param('venue_country');
    db.query("select * from Football_Venue where Football_Venue_Country = ?",[venue_country], (err,rows,fields)=>{
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

  //Delete Football venue data by venue id
  app.delete('/remove_football_venue_by_venue_id',(req,res)=>{
    var venue_id = req.param('venue_id');
    db.query("delete from Football_Venue where Football_Venue_id = ?",[venue_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });
  
  //Delete Football venue data by venue name
  app.delete('/remove_football_venue_by_venue_name',(req,res)=>{
    var venue_name = req.param('venue_name');
    db.query("delete from Football_Venue where Football_Venue_Name = ?",[venue_name], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

  //Delete Football venue data by venue city
  app.delete('/remove_football_venue_by_venue_city',(req,res)=>{
    var venue_city = req.param('venue_city');
    db.query("delete from Football_Venue where Football_Venue_City = ?",[venue_city], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

  //Delete Football venue data by venue country
  app.delete('/remove_football_venue_by_venue_country/:vcountry',(req,res)=>{
    var venue_country = req.param('venue_country');
    db.query("delete from Football_Venue where Football_Venue_Country = ?",[req.params.vcountry], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });