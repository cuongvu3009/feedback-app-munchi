import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import React from "react";

interface ReactionDataPoint {
  reaction: string;
  quantity: number;
}

interface FeedbackChartProps {
  data: ReactionDataPoint[];
}

const FeedbackChart: React.FC<FeedbackChartProps> = ({ data }) => {
  // Find the maximum quantity in the data
  const maxQuantity = Math.max(...data.map((entry) => entry.quantity));

  // Calculate the tick interval based on the maximum quantity
  const tickInterval = Math.ceil(maxQuantity / 10); // Adjust 10 to suit your needs

  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="reaction" />
          <YAxis
            dataKey="quantity of reaction"
            domain={[0, maxQuantity + tickInterval]}
            ticks={[
              ...Array(
                Math.ceil((maxQuantity + tickInterval) / tickInterval)
              ).keys(),
            ].map((tick) => tick * tickInterval)}
          />
          <Tooltip />
          <Bar dataKey="quantity" fill="#8884d8" minPointSize={1} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FeedbackChart;
