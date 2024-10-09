export default function SubscribeButton() {
  return (
    <div className='flex flex-col font-semibold justify-center gap-3 px-4 py-4 '>
      <p className='uppercase text-gray-500'>Subscription</p>
      <button className='p-2 py-3 text-white text-sm  bg-blue-400 hover:bg-blue-500  font-semibold rounded-full transition-all uppercase'>
        Subscribe
      </button>
    </div>
  );
}
