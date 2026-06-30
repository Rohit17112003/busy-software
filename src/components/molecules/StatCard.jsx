import React from "react";
import Card from "./Card";

const StatCard = ({ stat }) => {
    return (
        <Card bodyClassName="p-4">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm text-gray-500">
                        {stat.title}
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-gray-800">
                        {stat.value}
                    </h2>

                    <div
                        className={`mt-3 flex items-center gap-1 text-xs font-medium ${stat.positive ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        <i
                            className={`${stat.positive
                                ? "ri-arrow-up-line"
                                : "ri-arrow-down-line"
                                }`}
                        />

                        {stat.change}
                    </div>
                </div>

                <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl ${stat.color}`}
                >
                    <i className={`${stat.icon} text-2xl`} />
                </div>
            </div>
        </Card>
    );
};

export default StatCard;