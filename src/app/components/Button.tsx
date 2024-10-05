export default function Button({ text }: { text: string }) {
  return (
    <button className='rounded-full bg-blue-400 py-2 text-white uppercase hover:bg-blue-500 transition-all'>
      {text}
    </button>
  );
}
