import Image from "next/image";
import Link from "next/link";

const LoginForm = () => {
  return (
    <>
      <div className="flex min-h-full w-[90%] flex-col justify-center px-6 py-8 lg:px-8 bg-white/90 rounded-lg">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            width={140}
            height={140}
            alt="Logo Loteo"
            src="/logo-transparent.webp"
            className="mx-auto w-auto"
          />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-text"
              >
                Correo
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="micuenta@gmail.com"
                  required
                  autoComplete="email"
                  className="block w-full rounded-sm px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-secondary-400 placeholder:text-secondary-400/90 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-400 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-text"
                >
                  Contraseña
                </label>
                <div className="text-sm">
                  <Link
                    href="/forgot-password"
                    className="text-primary underline hover:text-primary-800 transition-all"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="********"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-sm px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-secondary-400 placeholder:text-secondary-400/90 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-400 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary "
              >
                Iniciar sesión
              </button>
            </div>
          </form>

          <p className="mt-10 text-center">
          Tu lote navideño <span className="text-primary">personalizado</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
