export default function Home() {
    return (
        <div className="flex flex-col w-screen h-screen justify-center items-center tracking-tighter text-neutral-200/70 gap-3 font-extralight px-4 text-center bg-gradient-to-br from-slate-900 to-slate-700; text-shadow-sm text-shadow-silver-300">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter">
                Next.js Starter Boilerplate
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-light tracking-tighter">
                Delete this and start your project!
            </p>
        </div>
    );
}
