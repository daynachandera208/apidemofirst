const express = require('express');
var config = require('../dbconfig');
var app = express();
// const bodyparser = require('body-parser');

// app.use(bodyparser.json());

// var db = require('../config/db_connection');

// app.listen(3000,()=>console.log('Express server on : 3000'));
 
//Get Cricket season data
async function getCricketSeasons(req,res){
  await config.query("select Cricket_Season_Id as Season_Id, Cricket_Season_Name as Season_Name from Cricket_Season", (err,rows,fields)=>{
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
  
  //Get Cricket season data by cricket season id
  async function getCricketSeasonById(req,res){
    var season_id = req.param('season_id');
    await config.query("select Cricket_Season_Id as Season_Id, Cricket_Season_Name as Season_Name from Cricket_Season where Cricket_Season_id = ?",[season_id], (err,rows,fields)=>{
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
  
  //Get Cricket season data by season name
  app.post('/get_cricket_season_by_name',(req,res)=>{
    var season_name = req.param('season_name');
    db.query("select * from Cricket_Season where Cricket_Season_Name = ?",[season_name], (err,rows,fields)=>{
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
  
  //Delete Cricket season data by cricket seson id
  app.delete('/remove_cricket_season_by_season_id',(req,res)=>{
    var season_id = req.param('season_id');
    db.query("delete from Cricket_Season where Cricket_Season_id = ?",[season_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });
  
  //Delete Cricket season data by season name
  app.delete('/remove_cricket_match_by_name',(req,res)=>{
    var season_name = req.param('season_name');
    db.query("delete from Cricket_Season where Cricket_Season_Name = ?",[season_name], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

  module.exports = {
    getCricketSeasons : getCricketSeasons,
    getCricketSeasonById : getCricketSeasonById
  }