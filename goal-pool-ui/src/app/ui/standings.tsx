export default function Standings() {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-black">
                <thead className="text-xs text-white uppercase bg-blue-600">
                    <tr>
                        <th className="px-4 py-2">Rank</th>
                        <th className="px-4 py-2">Team</th>
                        <th className="px-4 py-2">Total Goals</th>
                        <th className="px-4 py-2">Shots</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="border px-4 py-2">1</td>
                        <td className="border px-4 py-2">John Doe</td>
                        <td className="border px-4 py-2">30</td>
                        <td className="border px-4 py-2">100</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="border px-4 py-2">2</td>
                        <td className="border px-4 py-2">Jane Smith</td>
                        <td className="border px-4 py-2">25</td>
                        <td className="border px-4 py-2">1200</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="border px-4 py-2">3</td>
                        <td className="border px-4 py-2">Spencer McMaster</td>
                        <td className="border px-4 py-2">12</td>
                        <td className="border px-4 py-2">1200</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="border px-4 py-2">4</td>
                        <td className="border px-4 py-2">Jordan McMaster</td>
                        <td className="border px-4 py-2">10</td>
                        <td className="border px-4 py-2">1200</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="border px-4 py-2">5</td>
                        <td className="border px-4 py-2">Ethan Kemp</td>
                        <td className="border px-4 py-2">5</td>
                        <td className="border px-4 py-2">1200</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="border px-4 py-2">6</td>
                        <td className="border px-4 py-2">Kevan McBean</td>
                        <td className="border px-4 py-2">4</td>
                        <td className="border px-4 py-2">1200</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="border px-4 py-2">7</td>
                        <td className="border px-4 py-2">Jane Smith</td>
                        <td className="border px-4 py-2">3</td>
                        <td className="border px-4 py-2">1200</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="border px-4 py-2">8</td>
                        <td className="border px-4 py-2">Jane Smith</td>
                        <td className="border px-4 py-2">2</td>
                        <td className="border px-4 py-2">1200</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="border px-4 py-2">9</td>
                        <td className="border px-4 py-2">Jane Smith</td>
                        <td className="border px-4 py-2">1</td>
                        <td className="border px-4 py-2">1200</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="border px-4 py-2">10</td>
                        <td className="border px-4 py-2">Jane Smith</td>
                        <td className="border px-4 py-2">0</td>
                        <td className="border px-4 py-2">1200</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}