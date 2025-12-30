import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

type SkillChartProps = {
  data: Array<{
    name: string
    advanced: number
    intermediate: number
    beginner: number
  }>
}

export function SkillChart({ data }: SkillChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="advanced" stackId="a" fill="#0b0f14" />
        <Bar dataKey="intermediate" stackId="a" fill="#27c3a8" />
        <Bar dataKey="beginner" stackId="a" fill="#7aa8ff" />
      </BarChart>
    </ResponsiveContainer>
  )
}
