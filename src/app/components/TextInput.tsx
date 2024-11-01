export default function TextInput({ label }) {
  return (
    <div>
      <span className="text-sm text-gray-400">{label}</span>
      <input
        type="text"
        className="border border-gray-400 w-full p-2 rounded-md outline-none hover:border-gray-500 transition-all focus:border-blue-300"
      />
    </div>
  );
}
