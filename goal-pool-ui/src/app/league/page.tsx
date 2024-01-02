import Standings from "../ui/standings";
import Roster from "../ui/roster";
import TopPerformersCards from "../ui/top-performers-cards";


const seasonLeaders = [
    {
        "playerID": 1,
        "playerName": 'Alex Ovechkin',
        "teamID": 1,
        "position": 'LW',
        "goals": 49
    },
    {
        "playerID": 2,
        "playerName": 'Auston Matthews',
        "teamID": 2,
        "position": 'C',
        "goals": 44
    }
]

export default function League() {
    return (
        <main>
            <h1 className="mb-4 text-xl md:text-2xl">League standings</h1>
            {/* Cards showing top performers across the league in a few key stats (goals, xG, shots, etc.) */}
            <div className="flex justify-start items-start space-x-4 mb-4">
                <div className="w-3/6">
                    <Standings />
                </div>
                <div className="w-3/6">
                    {/* Have two of these cards, one for season long top scorers and one for most recent */}
                    <div className="w-3/6 mb-4">
                        <TopPerformersCards title={"Season Top Scorers"} players={seasonLeaders} />
                    </div>
                    <div className="w-3/6">
                        <TopPerformersCards title={"Weekly Top Scorers"} players={seasonLeaders} />
                    </div>
                </div>
            </div>
            <div className="">
                <Roster />
            </div>
            {/* Add info about upcoming games for current player's teams */}
        </main>
    );
}