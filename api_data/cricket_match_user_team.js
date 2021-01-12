const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var db = require('../config/db_connection');

app.listen(3000,()=>console.log('Express server on : 3000'));

//Get cricket match user team data
app.get('/get_all_cricket_match_user_team',(req,res)=>{
    db.query("select * from Cricket_Match_User_Team", (err,rows,fields)=>{
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
  
  //Get cricket match user team data by user id
  app.post('/get_cricket_match_user_team_by_user_id',(req,res)=>{
    var user_id = req.param('user_id');
    db.query("select * from Cricket_Match_User_Team where User_id = ?",[user_id], (err,rows,fields)=>{
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

  //Get cricket match user team data by match id
  app.post('/get_cricket_match_user_team_by_match_id',(req,res)=>{
    var match_id = req.param('user_id');
    db.query("select * from Cricket_Match_User_Team where Cricket_Match_id = ?",[match_id], (err,rows,fields)=>{
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

  //Get cricket match user team data by user team id
  app.post('/get_cricket_match_user_team_by_user_team_id',(req,res)=>{
    var team_id = req.param('team_id');
    db.query("select * from Cricket_Match_User_Team where Cricket_Match_User_Team_id = ?",[team_id], (err,rows,fields)=>{
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

  //Get cricket match user team data by captain
  app.post('/get_cricket_match_user_team_by_captain',(req,res)=>{
    var captain = req.param('captain');
    db.query("select * from Cricket_Match_User_Team where Captain = ?",[captain], (err,rows,fields)=>{
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

  //Get cricket match user team data by vice captain
  app.post('/get_cricket_match_user_teamby_vice_captain',(req,res)=>{
    var vice_captain = req.param('vice_captain');
    db.query("select * from Cricket_Match_User_Team where Vice_Captain = ?",[vice_captain], (err,rows,fields)=>{
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

  //Get cricket match user team data by jackpot player
    app.post('/get_cricket_match_user_team_by_jackpot_player',(req,res)=>{
    var jackpot_player = req.param('jackpot_player');
    db.query("select * from Cricket_Match_User_Team where Jackpot_Player = ?",[jackpot_player], (err,rows,fields)=>{
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

  //Get cricket match user team data by get_cricket_match_user_team_player1
  app.post('/get_cricket_match_user_team_player1',(req,res)=>{
    var team_player1 = req.param('team_player1');
    db.query("select * from Cricket_Match_User_Team where Cricket_Match_User_Team_Player1_id = ?",[team_player1], (err,rows,fields)=>{
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

  //Get cricket match user team data by get_cricket_match_user_team_player2
  app.post('/get_cricket_match_user_team_player2',(req,res)=>{
    var team_player2 = req.param('team_player2');
    db.query("select * from Cricket_Match_User_Team where Cricket_Match_User_Team_Player2_id = ?",[team_player2], (err,rows,fields)=>{
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

  //Get cricket match user team data by get_cricket_match_user_team_player3
  app.post('/get_cricket_match_user_team_player3',(req,res)=>{
    var team_player3 = req.param('team_player3');
    db.query("select * from Cricket_Match_User_Team where Cricket_Match_User_Team_Player3_id = ?",[team_player3], (err,rows,fields)=>{
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

  //Get cricket match user team data by get_cricket_match_user_team_player4
  app.post('/get_cricket_match_user_team_player4',(req,res)=>{
    var team_player4 = req.param('team_player4');
    db.query("select * from Cricket_Match_User_Team where Cricket_Match_User_Team_Player4_id = ?",[team_player4], (err,rows,fields)=>{
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

  //Get cricket match user team data by get_cricket_match_user_team_player5
  app.post('/get_cricket_match_user_team_player5',(req,res)=>{
    var team_player5 = req.param('team_player5');
    db.query("select * from Cricket_Match_User_Team where Cricket_Match_User_Team_Player5_id = ?",[team_player5], (err,rows,fields)=>{
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

  //Get cricket match user team data by get_cricket_match_user_team_player6
  app.post('/get_cricket_match_user_team_player6',(req,res)=>{
    var team_player6 = req.param('team_player6');
    db.query("select * from Cricket_Match_User_Team where Cricket_Match_User_Team_Player6_id = ?",[team_player6], (err,rows,fields)=>{
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

  //Get cricket match user team data by get_cricket_match_user_team_player7
  app.post('/get_cricket_match_user_team_player7',(req,res)=>{
    var team_player7 = req.param('team_player7');
    db.query("select * from Cricket_Match_User_Team where Cricket_Match_User_Team_Player7_id = ?",[team_player7], (err,rows,fields)=>{
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

  //Get cricket match user team data by get_cricket_match_user_team_player8
  app.post('/get_cricket_match_user_team_player8',(req,res)=>{
    var team_player8 = req.param('team_player8');
    db.query("select * from Cricket_Match_User_Team where Cricket_Match_User_Team_Player8_id = ?",[team_player8], (err,rows,fields)=>{
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

  //Get cricket match user team data by get_cricket_match_user_team_player9
  app.post('/get_cricket_match_user_team_player9',(req,res)=>{
    var team_player9 = req.param('team_player9');
    db.query("select * from Cricket_Match_User_Team where Cricket_Match_User_Team_Player9_id = ?",[team_player9], (err,rows,fields)=>{
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

  //Get cricket match user team data by get_cricket_match_user_team_player10
  app.post('/get_cricket_match_user_team_player10',(req,res)=>{
    var team_player10 = req.param('team_player10');
    db.query("select * from Cricket_Match_User_Team where Cricket_Match_User_Team_Player10_id = ?",[team_player10], (err,rows,fields)=>{
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

  //Get cricket match user team data by get_cricket_match_user_team_player11
  app.post('/get_cricket_match_user_team_player11',(req,res)=>{
    var team_player11 = req.param('team_player11');
    db.query("select * from Cricket_Match_User_Team where Cricket_Match_User_Team_Player11_id = ?",[team_player11], (err,rows,fields)=>{
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

  //Delete cricket match user team data by user id
  app.delete('/remove_cricket_match_user_team_by_user_id',(req,res)=>{
    var user_id = req.param('user_id');
    db.query("delete from Cricket_Match_User_Team where User_id = ?",[user_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

  //Delete cricket match user team data by match id
  app.delete('/remove_cricket_match_user_teamby_match_id',(req,res)=>{
    var match_id = req.param('match_id');
    db.query("delete from Cricket_Match_User_Team where Cricket_Match_id = ?",[match_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });

  //Delete cricket match user team data by user team id
  app.delete('/remove_cricket_match_user_team_by_user_team_id',(req,res)=>{
    var user_match_id = req.param('user_match_id');
    db.query("delete from Cricket_Match_User_Team where Cricket_Match_User_Team_id = ?",[user_match_id], (err,rows,fields)=>{
      if(!err)
      res.send('delete sucessfully.');
      else
      console.log(err);
    })
  });
