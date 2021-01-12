const express = require('express');
var config = require('../dbconfig');
var app = express();
// const bodyparser = require('body-parser');

// app.use(bodyparser.json());

// var db = require('../config/db_connection');

// app.listen(3000,()=>console.log('Express server on : 3000'));

//Get Game details data
async function getGameList(req,res){
  await config.query("select Game_Id as Id, Game_Name as Name, Game_Category as Category, Game_Assets_Apk as Apk, Game_Url as Url from Game_Details", (err,rows,fields)=>{
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
  
  //Get Game details data by game id
  async function getGame(req,res){
    var game_id = req.param('game_id');
    await config.query("select Game_Id as Id, Game_Name as Name, Game_Category as Category, Game_Assets_Apk as Apk, Game_Url as Url from Game_Details where Game_id = ?",[game_id], (err,rows,fields)=>{
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
  
  //Get Game details ta by game name
  app.post('/get_game_details_by_game_name',(req,res)=>{
    var game_name = req.param('game_name');
    db.query("select * from Game_Details where Game_Name = ?",[game_name], (err,rows,fields)=>{
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

  //Get Game details data by category
  app.post('/get_game_details_by_category',(req,res)=>{
    var category = req.param('category');
    db.query("select * from Game_Details where Game_Category = ?",[category], (err,rows,fields)=>{
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
  
  //Delete Game details data by game id
  app.delete('/remove_game_details_by_game_id',(req,res)=>{
    var game_id = req.param('game_id');
    db.query("delete from Game_Details where Game_id = ?",[game_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });
  
  //Delete Game details data by game name
  app.delete('/remove_game_details_by_game_name',(req,res)=>{
    var game_name = req.param('game_name');
    db.query("delete from Game_Details where Game_Name = ?",[game_name], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

  //Delete Game details data by game category
  app.delete('/remove_game_details_by_category',(req,res)=>{
    var category = req.param('category');
    db.query("delete from Game_Details where Game_Category = ?",[category], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

  module.exports = {
    getGameList : getGameList,
    getGame : getGame
  }