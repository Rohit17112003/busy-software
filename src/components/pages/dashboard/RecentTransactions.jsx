import React from "react";
import Card from "../../molecules/Card";
import { recentTransactions } from "../../../config/DashboardDummyData";

const statusClasses = {
    Posted: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Cancelled: "bg-red-100 text-red-700",
};

const RecentTransactions = () => {
    return (
        <Card
            title="Recent Transactions"
            subtitle="Latest vouchers entered in the system"
        >
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-gray-300 bg-gray-50">
                            <th className="px-4 py-3 text-left font-semibold text-gray-600">
                                Voucher
                            </th>

                            <th className="px-4 py-3 text-left font-semibold text-gray-600">
                                Date
                            </th>

                            <th className="px-4 py-3 text-left font-semibold text-gray-600">
                                Party
                            </th>

                            <th className="px-4 py-3 text-left font-semibold text-gray-600">
                                Type
                            </th>

                            <th className="px-4 py-3 text-right font-semibold text-gray-600">
                                Amount
                            </th>

                            <th className="px-4 py-3 text-center font-semibold text-gray-600">
                                Status
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {recentTransactions.map((item, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-300 last:border-0 hover:bg-gray-50"
                            >
                                <td className="px-4 py-4 font-medium text-gray-700">
                                    {item.voucher}
                                </td>

                                <td className="px-4 py-4 text-gray-500">
                                    {item.date}
                                </td>

                                <td className="px-4 py-4 text-gray-700">
                                    {item.party}
                                </td>

                                <td className="px-4 py-4">
                                    <span className="rounded bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                                        {item.type}
                                    </span>
                                </td>

                                <td className="px-4 py-4 text-right font-semibold">
                                    {item.amount}
                                </td>

                                <td className="px-4 py-4 text-center">
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClasses[item.status]
                                            }`}
                                    >
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};

export default RecentTransactions;