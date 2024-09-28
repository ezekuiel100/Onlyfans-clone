import { lucia, prisma } from "../lib/auth";

export default function RegisterPage() {
  return (
    <>
      <h1>Create an account</h1>
      <form action={signup} className='space-y-3'>
        <label htmlFor='email'>email</label>
        <input name='email' id='email' className=' border-2' />
        <br />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          className='border-2'
        />
        <br />
        <button className='bg-blue-300 p-2'>Continue</button>
      </form>
    </>
  );
}

async function signup(formData: FormData) {
  "use server";

  const email = formData.get("email");
  const password = formData.get("password");

  const user = await prisma.user.create({
    data: {
      email,
      password,
    },
  });

  const session = await lucia.createSession(user.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);

  console.log(user);
}
