import Standings from "../ui/standings";
import Roster from "../ui/roster";
import TopPerformersCards from "../ui/top-performers-cards";

export default function League() {
    return (
        <main>
            <h1 className="mb-4 text-xl md:text-2xl">League standings</h1>
            {/* Cards showing top performers across the league in a few key stats (goals, xG, shots, etc.) */}
            <div className="flex justify-start items-center space-x-4 mb-4">
                <div className="w-full">
                    <Standings />
                </div>
                <div className="w-3/6">
                    <TopPerformersCards />
                </div>
            </div>
            <div className="">
                <Roster />
            </div>
            {/* Add info about upcoming games for current player's teams */}
        </main>
    );
}