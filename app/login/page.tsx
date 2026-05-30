import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <main className="relative w-full min-h-dvh flex items-center justify-center lg:justify-end overflow-hidden pt-20 md:pt-20 lg:pt-18 xl:pt-24 lg:pr-18 xl:pr-24">
      <div className="absolute inset-0 -z-10 top-8 block md:hidden">
        <Image
          src="/images/login/login-hero-mobile.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="absolute inset-0 top-16 lg:top-18 xl:top-24 -z-10 hidden md:block">
        <Image
          src="/images/login/login-hero.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <section className="flex flex-col w-9/10 md:w-4/5 lg:basis-[42%] bg-background rounded-xl md:rounded-2xl lg:rounded-xl xl:rounded-2xl px-8 md:px-16 lg:px-12 xl:px-24 py-12 md:py-14 lg:py-12 xl:py-14 gap-8">
        <div className="w-full flex flex-col justify-center items-center gap-8">
          <div className="relative w-8 xl:w-10 h-10 xl:h-12">
            <Image
              src={"/images/logo.png"}
              alt="logo"
              fill
              className="object-cover hover:opacity-70 transition-all duration-300"
              sizes="25vw"
              quality={100}
            />
          </div>

          <h1 className="text-[30px] md:text-[40px] lg:text-[30px] xl:text-[40px] tracking-wider text-primary font-bold">
            Login
          </h1>
        </div>

        <form
          action=""
          className="flex flex-col gap-6 md:gap-8 lg:gap-6 xl:gap-8"
        >
          <div className="flex flex-col gap-2 md:gap-3 lg:gap-2 xl:gap-3">
            <label
              htmlFor="email"
              className="text-lg md:text-xl lg:text-lg xl:text-xl"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Type in your email"
              required
              className="text-sm md:text-base lg:text-sm xl:text-base px-3 md:px-4 lg:px-3 xl:px-4 py-2 md:py-3 lg:py-2 xl:py-3 bg-[#f4f4f4] focus:ring-1 focus:ring-primary outline-none placeholder:text-muted-foreground transition-all duration-300"
            />
          </div>

          <div className="flex flex-col gap-2 md:gap-3 lg:gap-2 xl:gap-3">
            <label
              htmlFor="name"
              className="text-lg md:text-xl lg:text-lg xl:text-xl"
            >
              Password
            </label>
            <input
              type="password"
              name="name"
              placeholder="Type in your password"
              required
              className="text-sm md:text-base lg:text-sm xl:text-base px-3 md:px-4 lg:px-3 xl:px-4 py-2 md:py-3 lg:py-2 xl:py-3 bg-[#f4f4f4] focus:ring-1 focus:ring-primary outline-none placeholder:text-muted-foreground transition-all duration-300"
            />
          </div>

          <Link href={'/register'} className="-mt-2 self-end text-sm md:text-base lg:text-sm xl:text-base text-primary hover:opacity-75 transition-all duration-300">Don&apos;t have an account? Register</Link>

          <input
            type="submit"
            value={"Login"}
            className="self-center px-6 py-3 mt-3 md:mt-4 lg:mt-3 xl:mt-4 text-background text-sm md:text-base lg:text-sm xl:text-base bg-primary w-max rounded-full border border-primary hover:text-primary hover:scale-101 hover:bg-background transition-all duration-300"
          />
        </form>
      </section>
    </main>
  );
}
