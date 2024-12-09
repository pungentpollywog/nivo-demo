import { ResponsiveBar } from '@nivo/bar';

export default function BarChart({ data, keys }) {
  console.log('called BarChart', data, keys);
  return (
    <ResponsiveBar
      data={data}
      keys={["total"]}
      indexBy="_id"
      layout={'horizontal'}
      borderRadius={3}
      margin={{ top: 50, right: 100, bottom: 120, left: 220 }}
      padding={0.4}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      // colors={{scheme: 'yellow_green'}}
      colors={{scheme: 'nivo'}}
      // enableTotals={true}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Total',
        legendPosition: 'middle',
        legendOffset: 50,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Specialty',
        legendPosition: 'middle',
        legendOffset: -210,
        truncateTickAt: 0,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      ariaLabel="Nivo bar chart demo"
    />
  );
}
