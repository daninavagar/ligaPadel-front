import supabase from "../plugins/supabase";

export const getTeams = async () => {

    const { data, error } = await supabase
        .from('teams')
        .select('*')
    
    if (error) return error

    return data
}

export const getPlayers = async () => {
    
    const { data, error } = await supabase
        .from('players')
        .select('*')
    if (error) return error
    
    return data
}

export const getTeamsPlayers = async () => {

    const teams = await getTeams()
    const players = await getPlayers()
    const teamsWithPlayers: {[key: string]: {jugadores: Array<{nombre: string}>}} = {}

    const { data, error } = await supabase
        .from('player_teams')
        .select('*')
    if (error) return error;

    const teams_players = data

    teams_players.map((playerTeam) => {
        const team = (teams as Array<any>)?.find(team => team.id === playerTeam.team_id)
        const player = (players as Array<any>)?.find(player => player.id === playerTeam.player_id)

        if (!team) return;

        if (!teamsWithPlayers[team.name]) {
            teamsWithPlayers[team.name] = { jugadores: [] };
        }

        // Añadimos el jugador al equipo
        teamsWithPlayers[team.name].jugadores.push({ nombre: player?.name || '' });
    })
    
    return teamsWithPlayers;
}