export default function PostSkeleton() {
  return (
    <div className='border-b '>
      <div className='flex p-2 justify-between '>
        <div className='flex gap-1'>
          <div className='rounded-full bg-slate-400 w-14 h-14 animate-pulse' />

          <div className='space-y-2 pt-1'>
            <p className='bg-slate-400 w-28 h-4 rounded animate-pulse'>{}</p>
            <p className='bg-slate-400 w-24 h-3 rounded animate-pulse'>{}</p>
          </div>
        </div>

        <span className='bg-slate-400 animate-pulse h-6 w-8 rounded-xl'></span>
      </div>

      <div className='bg-slate-400 h-96 animate-pulse'></div>
    </div>
  );
}
