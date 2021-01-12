const express = require('express');
var config = require('../dbconfig');
// require("dotenv").config();
var app = express();
// const bodyparser = require('body-parser');

// app.use(bodyparser.json());

// var db = require('../config/db_connection');

// app.listen(3000,()=>console.log("Express server on : ", 3000));

//Get Cricket Match data
async function getCricketMatches(req,res){
  await config.query("select Cricket_Match_Id as Match_id,Cricket_League_Id as League_Id, Game_Id as Game_Id, Cricket_Title as Cricket_Title, Cricket_Match_Format as Format, Cricket_Match_Status as Status, Cricket_Match_time_Date as Date, Cricket_Match_Lineup_available as Lineup_available, Cricket_Match_Live_Stream_available as Live_Stream_available, Cricket_Match_TeamA as TeamA,Cricket_Match_TeamB as TeamB, Cricket_Match_TeamA_Runs as TeamA_Runs, Cricket_Match_TeamB_Runs as TeamB_Runs, Cricket_Match_TeamA_Wickets as TeamA_Wickets, Cricket_Match_TeamB_Wickets as TeamB_Wickets, Cricket_Match_Lineup_TeamA as Lineup_TeamA, Cricket_Match_Lineup_TeamB as Lineup_TeamB, Cricket_Match_Winning_Team_Id as Winning_Team_Id from Cricket_Match", function (err,rows,fields){
    if(!err)
    {
      var contype = req.headers['content-type'];
      // req.headers['User-Agent']='PlayMax';
      if (!contype || contype.indexOf('application/json') !== 0)
      {
        res.send('Invalid parameters');
      }
      else
      {
        res.setHeader('Content-Type', 'application/json');
        // var MatchMap = {};
        // var match_team = [];
        // rows.forEach(function(row) {
        //   var category = MatchMap[row.Cricket_Match_Id];
        //   if (!category) {
        //       category = {
        //         Match_id: row.Cricket_Match_Id,
        //         Game_id: row.Game_Id,
        //         League_id: row.Cricket_League_Id,
        //         Cricket_Title: row.Cricket_Title,
        //         Format: row.Cricket_Match_Format,
        //         Status:row.Cricket_Match_Status,
        //         Date:row.Cricket_Match_Time_Date,
        //         Lineup_available:row.Cricket_Match_Lineup_available,
        //         Live_Stream_available:row.Cricket_Match_Live_Stream_available,
        //         match: []
        //       };
        //       MatchMap[row.Cricket_Title] = category;
        //       match_team.push(category);
        //   }
        //   category.match.push({
        //     Match_TeamA: row.Cricket_Match_TeamA,
        //     Match_TeamB: row.Cricket_Match_TeamB,
        //     Match_TeamA_Runs: row.Cricket_Match_TeamA_Runs,
        //     Match_TeamB_Runs: row.Cricket_Match_TeamB_Runs,
        //     Match_TeamA_Wickets: row.Cricket_Match_TeamA_Wickets,
        //     Match_TeamB_Wickets: row.Cricket_Match_TeamB_Wickets,
        //     Match_Lineup_TeamA:row.Cricket_Match_Lineup_TeamA,
        //     Match_Lineup_TeamB:row.Cricket_Match_Lineup_TeamB,
        //     Match_Winning_Team_Id:row.Cricket_Match_Winning_Team_Id
        //   });
        // });
        // res.send(JSON.stringify(match_team));
        // res.json(match_team);
        res.send(JSON.stringify(rows));
      }
    }
    else
    console.log(err);
  })
}

//Get Cricket Match data by cricket match id
async function getCricketMatch(req,res){
  var match_id = req.param('match_id');
  await config.query("select Cricket_Match_Id as Match_id,Cricket_League_Id as League_Id, Game_Id as Game_Id, Cricket_Title as Cricket_Title, Cricket_Match_Format as Format, Cricket_Match_Status as Status, Cricket_Match_time_Date as Date, Cricket_Match_Lineup_available as Lineup_available, Cricket_Match_Live_Stream_available as Live_Stream_available, Cricket_Match_TeamA as TeamA,Cricket_Match_TeamB as TeamB, Cricket_Match_TeamA_Runs as TeamA_Runs, Cricket_Match_TeamB_Runs as TeamB_Runs, Cricket_Match_TeamA_Wickets as TeamA_Wickets, Cricket_Match_TeamB_Wickets as TeamB_Wickets, Cricket_Match_Lineup_TeamA as Lineup_TeamA, Cricket_Match_Lineup_TeamB as Lineup_TeamB, Cricket_Match_Winning_Team_Id as Winning_Team_Id from Cricket_Match where Cricket_Match_id = ?",[match_id], (err,rows,fields)=>{
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

//Get Cricket Match data by league id
app.post('/get_cricket_match_by_league_id',(req,res)=>{
  var league_id = req.param('league_id');
  db.query("select * from Cricket_Match where Cricket_League_id = ?",[league_id], (err,rows,fields)=>{
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

//Delete Cricket Match data by cricket match id
app.delete('/remove_cricket_match_by_match_id',(req,res)=>{
  var match_id = req.param('match_id');
  db.query("delete from Cricket_Match where Cricket_Match_id = ?",[matchid], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});

//Delete Cricket Match data by league id
app.delete('/remove_cricket_match_by_league_id',(req,res)=>{
  var league_id = req.param('league_id');
  db.query("delete from Cricket_Match where Cricket_League_id = ?",[leagueid], (err,rows,fields)=>{
    if(!err)
    res.send('delete sucessfully.');
    else
    console.log(err);
  })
});

module.exports = {
  getCricketMatches : getCricketMatches,
  getCricketMatch : getCricketMatch
}