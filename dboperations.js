var config = require('./dbconfig');
var Match = require('./cricket_matches');

async function getCricketMatches(response)
{
    try{
        let cricket_matches = await config.query('select * from Cricket_Match',function (err,rows,fields){
            if(!err)
            {
                response.send(rows);
                // console.log(rows);
                return rows;
            }
            else
            console.log(err);
        });
        // return cricket_matches.log;

    }
    catch(error)
    {
        console.log(error);
    }
}

module.exports = {
    getCricketMatches : getCricketMatches
}