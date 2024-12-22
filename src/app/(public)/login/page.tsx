"use client";
import { useActionStateCompat } from "@strozw/use-action-state-compat";
import { login } from "./actions";

type FormState = null | string;

// const myAction = async (_state: any, data: FormData) => {
//   return new Promise<null | string>((resolve) => {
//     console.log(data.get("usuario"));
//     // window.setTimeout(() => {
//     //   if (!data.get("word")) {
//     //     resolve("please input `word`");
//     //   }
//     //   resolve(null);
//     // }, 3000);
//   });
// };

// export default function Page() {
//   const [currentState, action, isPending] = useActionStateCompat(
//     myAction,
//     null
//   );
//   // ...
//   return <form action={action}>{/* ... */}</form>;
// }

export default function Page() {
  const [currentState, action, isPending] = useActionStateCompat(login, null);
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-white ">
        <div className=" form-container w-full max-w-sm">
          {/* <div className="w-full p-4 flex justify-center"><img width="100" src="img/pmp.png"/></div> */}
          <h1
            style={{
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            className="text-3xl font-bold te text-gray-800 text-center mb-4 "
          >
            CMEP <br />
            {isPending}
            <br />
            {/* {currentState} */}
          </h1>

          <form action={action}>
            <div className="mb-4">
              {/* <label htmlFor="email" className="block  text-gray-600 mb-1">Usuário</label> */}
              <input
                type="text"
                required
                name="usuario"
                placeholder="Usuário"
                className="w-full font-light p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              {/* <label htmlFor="password" className="block text-gray-600 mb-1">Senha</label> */}
              <input
                type="password"
                required
                id="password"
                name="password"
                placeholder="Senha"
                className="w-full p-2  font-light rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#376D2B] shadow-lg hover:bg-[#385d2b] text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>
          <div className="p-8 flex justify-center">
            <span className="text-sm font-light">Lot of love DTIC@2024</span>
          </div>
        </div>
      </div>
    </>
  );
}
