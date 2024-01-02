import { Card } from "flowbite-react";
import { Player } from "../lib/types";

export default function TopPerformersCards({
    players,
    title
}: {
    players: Player[],
    title: string
}) {
    return (
        <Card className="max-w-sm">
            <div className="mb-4 flex items-center justify-between">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{title}</h5>
            </div>
            <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {players.map((player) => {
                        return (
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{player.playerName}</p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        {player.goals}
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Card>
    );
}