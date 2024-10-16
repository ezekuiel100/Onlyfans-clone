type StatsItemProps = {
  icon: React.ElementType;
  value: string;
};

export default function ProfileStatsItem({
  icon: Icon,
  value,
}: StatsItemProps) {
  return (
    <div className='flex gap-1 text-white'>
      <Icon className='size-6' />
      {value}
    </div>
  );
}
