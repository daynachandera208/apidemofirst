class Cricket_Matches{
    constructor(Cricket_League_Id,Cricket_Match_Format,Cricket_Match_Id,
        Cricket_Match_Lineup_available,Cricket_Match_Lineup_TeamA,Cricket_Match_Lineup_TeamB,
        Cricket_Match_Live_Stream_available,Cricket_Match_Status,Cricket_Match_TeamA,
        Cricket_Match_TeamA_Runs,Cricket_Match_TeamA_Wickets,Cricket_Match_TeamB,
        Cricket_Match_TeamB_Runs,Cricket_Match_TeamB_Wickets,Cricket_Match_Time_Date,
        Cricket_Match_Winning_Team_Id,Cricket_Title,Game_Id)
        {
            this.Cricket_League_Id=Cricket_League_Id;
            this.Cricket_Match_Format=Cricket_Match_Format;
            this.Cricket_Match_Id=Cricket_Match_Id;
            this.Cricket_Match_Lineup_available=Cricket_Match_Lineup_available;
            this.Cricket_Match_Lineup_TeamA=Cricket_Match_Lineup_TeamA;
            this.Cricket_Match_Lineup_TeamB=Cricket_Match_Lineup_TeamB;
            this.Cricket_Match_Live_Stream_available=Cricket_Match_Live_Stream_available;
            this.Cricket_Match_Status=Cricket_Match_Status;
            this.Cricket_Match_TeamA=Cricket_Match_TeamA;
            this.Cricket_Match_TeamA_Runs=Cricket_Match_TeamA_Runs;
            this.Cricket_Match_TeamA_Wickets=Cricket_Match_TeamA_Wickets;
            this.Cricket_Match_TeamB=Cricket_Match_TeamB;
            this.Cricket_Match_TeamB_Runs=Cricket_Match_TeamB_Runs;
            this.Cricket_Match_TeamB_Wickets=Cricket_Match_TeamB_Wickets;
            this.Cricket_Match_Time_Date=Cricket_Match_Time_Date;
            this.Cricket_Match_Winning_Team_Id=Cricket_Match_Winning_Team_Id;
            this.Cricket_Title-=Cricket_Title;
            this.Game_Id=Game_Id;
        }
}

module.exports = Cricket_Matches;