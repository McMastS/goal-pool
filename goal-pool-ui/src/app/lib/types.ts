export type User = {
    userID: number;
    username: string;
    email: string;
    password: string;
}

export type League = {
    leagueID: number;
    leagueName: string;
    creatorID: number;
}

export type Team = {
    teamID: number;
    teamName: string;
    ownerID: number;
    leagueID: number;
}

export type Player = {
    playerID: number;
    playerName: string;
    teamID: number;
    position: string;
}

export type Stats = {
    statID: number;
    playerID: number;
    gameDate: string;
    goals: number;
    assists: number;
    saves: number;
}
