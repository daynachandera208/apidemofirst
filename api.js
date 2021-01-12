var Match = require('./cricket_matches');
const cricket_match = require('./api_data/cricket_match');
const cricket_player_details = require('./api_data/cricket_player_details');
const user_profile = require('./api_data/user_profile');
const banners = require('./api_data/banner_data');
const cricket_team = require('./api_data/cricket_teams');
const follower = require('./api_data/follower');
const following = require('./api_data/following');
const season = require('./api_data/cricket_season');
const venue = require('./api_data/cricket_venue');
const games = require('./api_data/game_details');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { response, request } = require('express');
// const con = require('./db_connection');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);

router.use((request,response,next)=>{
    console.log('middleware');
    next();
})

router.route('/cricket_matches').get((request,response)=>{
    cricket_match.getCricketMatches(request,response);
})

router.route('/cricket_match').post((request,response)=>{
    cricket_match.getCricketMatch(request,response);
})

router.route('/cricket_player_details').get((request,response)=>{
    cricket_player_details.getPlayerDetails(request,response);
})

router.route('/get_cricket_players_by_nationality').post((request,response)=>{
    cricket_player_details.getCricketPlayersByNationality(request,response);
})

router.route('/get_cricket_player_by_player_id').post((request,response)=>{
    cricket_player_details.getCricketPlayerByPlayerId(request,response);
})

router.route('/get_user_profiles').get((request,response)=>{
    user_profile.getUserProfiles(request,response);
})

router.route('/get_user_profile_by_mobile').post((request,response)=>{
    user_profile.getUserProfileByMobile(request,response);
})

router.route('/get_banners').get((request,response)=>{
    banners.getBanners(request,response);
})

router.route('/get_banner_by_id').post((request,response)=>{
    banners.getBannerById(request,response);
})

router.route('/get_cricket_teams').get((request,response)=>{
    cricket_team.getCricketTeams(request,response);
})

router.route('/get_cricket_team_by_league_id').post((request,response)=>{
    cricket_team.getCricketTeamByLeagueId(request,response);
})

router.route('/get_followers').get((request,response)=>{
    follower.getFollowers(request,response);
})

router.route('/get_follower_by_id').post((request,response)=>{
    follower.getFollowerById(request,response);
})

router.route('/get_following').get((request,response)=>{
    following.getFollowing(request,response);
})

router.route('/get_following_by_id').post((request,response)=>{
    following.getFollowingById(request,response);
})

router.route('/get_cricket_season').get((request,response)=>{
    season.getCricketSeasons(request,response);
})

router.route('/get_cricket_season_by_season_id').post((request,response)=>{
    season.getCricketSeasonById(request,response);
})

router.route('/get_cricket_venues').get((request,response)=>{
    venue.getCricketVenues(request,response);
})

router.route('/get_cricket_venue_by_venue_id').post((request,response)=>{
    venue.getCricketVenueById(request,response);
})

router.route('/get_game_list').get((request,response)=>{
    games.getGameList(request,response);
})

router.route('/get_game').post((request,response)=>{
    games.getGame(request,response);
})

var port = process.env.PORT || 8090;
app.listen(port);
console.log('API running on port no : ' + port);