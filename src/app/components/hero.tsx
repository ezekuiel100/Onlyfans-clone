import { SignIn } from "@clerk/nextjs";

export default function Hero() {
  return (
    <div className="h-screen grid md:grid-cols-2 ">
      <div className="hidden md:grid grid-rows-2 bg-blue-400 h-screen place-items-center lg:justify-end lg:px-28">
        <div className="w-80 mx-auto">
          <img src="onlyfans.png" className="w-60 mb-3 select-none"></img>

          <h2 className="text-3xl text-white ">
            Inscreva-se para apoiar seus criadores favoritos
          </h2>
        </div>
      </div>

      <div className="m-auto">
        <SignIn routing="hash" />
      </div>
    </div>
  );
}
