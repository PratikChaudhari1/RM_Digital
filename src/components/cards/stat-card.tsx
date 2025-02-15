import { Counter } from "@/components/ui/counter";

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
}

export function StatCard({ value, label, suffix }: StatCardProps) {
  return (
    <div className="space-y-2">
      <div className="text-5xl font-bold drop-shadow-2xl text-primary">
        <Counter end={value} suffix={suffix} />
      </div>
      <div className="text-primary text-xl">{label}</div>
    </div>
  );
}