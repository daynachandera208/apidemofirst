const express = require('express');
var config = require('../dbconfig');
var app = express();
// const bodyparser = require('body-parser');

// app.use(bodyparser.json());

// var db = require('../config/db_connection');

// app.listen(3000,()=>console.log('Express server on : 3000'));

//Get Banner data
async function getBanners(req,res){
  await config.query("select Banners_Id as Id, Banners_Image as Image, Banners_Disscount as Discount, Banners_Categories as Categories, Match_Id as Match_Id, Banners_type as Banners_Type, Banners_Enable as Enable, Banners_Description as Description from Banners", (err,rows,fields)=>{
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

//Get Banner data by banner id
async function getBannerById(req,res){
  var banner_id = req.param('banner_id');
  await config.query("select Banners_Id as Id, Banners_Image as Image, Banners_Disscount as Discount, Banners_Categories as Categories, Match_Id as Match_Id, Banners_type as Banners_Type, Banners_Enable as Enable, Banners_Description as Description from Banners where Banners_id = ?",[banner_id], (err,rows,fields)=>{
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

//Get Banner data by match id
app.post('/get_banner_by_match_id',(req,res)=>{
  var match_id = req.param('match_id');
  db.query("select * from Banners where Match_id = ?",[match_id], (err,rows,fields)=>{
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

//Get Banner data by banner type
app.post('/get_banner_by_type',(req,res)=>{
  var banner_type = req.param('banner_type');
  db.query("select * from Banners where Banner_Type = ?",[banner_type], (err,rows,fields)=>{
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

//Delete Banner data by banner id
app.delete('/remove_banner_by_id',(req,res)=>{
  var banner_type = req.param('banner_type');
  db.query("delete from Banners where Banners_id = ?",[banner_type], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});

//Delete Banner data by match id
app.delete('/remove_banner_by_match_id',(req,res)=>{
  var match_id = req.param('match_id');
  db.query("delete from Banners where Match_id = ?",[match_id], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});

module.exports = {
  getBanners : getBanners,
  getBannerById : getBannerById
}