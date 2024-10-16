import { SignIn } from "@clerk/nextjs";

export default function Hero() {
  return (
    <div className="h-screen grid lg:grid-cols-2 place-items-center ">
      <div className="hidden lg:grid lg:grid-cols-2 grid-rows-2 bg-blue-400 h-screen items-center">
        <div className="col-start-2 ">
          <img src="onlyfans.png" className="w-60 mb-3 select-none"></img>

          <h2 className="text-3xl text-white">
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
