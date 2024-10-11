export default function ProfileSkeleton() {
  return (
    <>
      <div className='pb-8'>
        <div className='w-full h-44 relative bg-slate-400 animate-pulse '></div>
        <div className='relative grid grid-cols-2 -mt-7 ml-3 z-50 '>
          <div className='w-20 h-20 border-2 select-none rounded-full bg-slate-400 animate-pulse' />

          <button className='w-40 h-11 place-self-end mr-3 rounded-full bg-slate-400 animate-pulse'></button>
        </div>
      </div>
    </>
  );
}
