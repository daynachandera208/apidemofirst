const express = require('express');
var config = require('../dbconfig');
var app = express();
// const bodyparser = require('body-parser');

// app.use(bodyparser.json());

// var db = require('../config/db_connection');

// app.listen(3000,()=>console.log('Express server on : 3000'));
 
//Get Cricket venue data
async function getCricketVenues(req,res){
  await config.query("select Cricket_Venue_Id as Id, Cricket_Venue_Name as Name, Cricket_Venue_City as City, Cricket_Venue_Country as Country from Cricket_Venue", (err,rows,fields)=>{
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
  }
  
  //Get Cricket venue data by venue id
  async function getCricketVenueById(req,res){
    var venue_id = req.param('venue_id');
    await config.query("select Cricket_Venue_Id as Id, Cricket_Venue_Name as Name, Cricket_Venue_City as City, Cricket_Venue_Country as Country from Cricket_Venue where Cricket_Venue_id = ?",[venue_id], (err,rows,fields)=>{
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
  }
  
  //Get Cricket venue data by venue name
  app.post('/get_cricket_venue_by_venue_name',(req,res)=>{
    var venue_name = req.param('venue_name');
    db.query("select * from Cricket_Venue where Cricket_Venue_Name = ?",[venue_name], (err,rows,fields)=>{
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

  //Get Cricket venue data by venue city
  app.post('/get_cricket_venue_by_venue_city',(req,res)=>{
    var venue_city = req.param('venue_name');
    db.query("select * from Cricket_Venue where Cricket_Venue_City = ?",[venue_city], (err,rows,fields)=>{
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
  
  //Get Cricket venue data by venue country
  app.post('/get_cricket_venue_by_venue_country',(req,res)=>{
    var venue_country = req.param('venue_country');
    db.query("select * from Cricket_Venue where Cricket_Venue_Country = ?",[venue_country], (err,rows,fields)=>{
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

  //Delete Cricket venue data by venue id
  app.delete('/remove_cricket_venue_by_venue_id',(req,res)=>{
    var venue_id = req.param('venue_id');
    db.query("delete from Cricket_Venue where Cricket_Venue_id = ?",[venue_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });
  
  //Delete Cricket venue data by venue name
  app.delete('/remove_cricket_venue_by_venue_name',(req,res)=>{
    var venue_name = req.param('venue_name');
    db.query("delete from Cricket_Venue where Cricket_Venue_Name = ?",[venue_name], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

  //Delete Cricket venue data by venue city
  app.delete('/remove_cricket_venue_by_venue_city',(req,res)=>{
    var venue_city = req.param('venue_city');
    db.query("delete from Cricket_Venue where Cricket_Venue_City = ?",[venue_city], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

  //Delete Cricket venue data by venue country
  app.delete('/remove_cricket_venue_by_venue_country',(req,res)=>{
    var venue_country = req.param('venue_country');
    db.query("delete from Cricket_Venue where Cricket_Venue_Country = ?",[venue_country], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

  module.exports = {
    getCricketVenues : getCricketVenues,
    getCricketVenueById : getCricketVenueById
  }