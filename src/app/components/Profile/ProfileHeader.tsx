export default function ProfileHeader() {
  return (
    <div className='w-full h-44 bg-blue-300 relative'>
      <img
        src='paisagem.webp'
        className='h-44 w-full object-cover select-none'
      ></img>

      <div className='absolute top-0 bg-black/20  w-full h-full'></div>
    </div>
  );
}
