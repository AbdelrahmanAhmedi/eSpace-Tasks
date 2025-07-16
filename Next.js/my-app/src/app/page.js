import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24 lg:pt-15 px-6 ">
        <h1 className="lg:text-4xl text-2xl text-center">
          Welcome to the Home Page
        </h1>
        <p className="text-center lg:text-2xl mt-4">
          This roadmap introduces you to the foundational technologies of web
          development: HTML, CSS, and JavaScript. Scroll or navigate to learn
          each in detail.
        </p>

        <img
          src="/mainpic.png"
          alt="RoadMap"
          className="mx-auto my-6 w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] lg:mb-0 max-w-full"
        />
        <section className="mt-1">
          <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-4">
            Why?
          </h2>
          <div className="grid gap-3 md:grid-cols-3 text-center">
            <a
              href="/html"
              className="p-6 lg:p-24 lg:mb-5 shadow-xl rounded-xl bg-amber-600"
            >
              <a className="text-xl font-bold mb-2">HTML</a>
              <p>
                Structure the web with semantic elements and accessible design.
              </p>
            </a>
            <a
              href="/css"
              className="p-6 lg:p-24 lg:mb-5 shadow-xl rounded-xl bg-blue-500"
            >
              <h3 className="text-xl font-bold mb-2">CSS</h3>
              <p>
                Style your pages with layout systems, animations, and
                responsiveness.
              </p>
            </a>
            <a
              href="/js"
              className="p- lg:p-24 lg:mb-5 shadow-xl rounded-xl bg-yellow-300 mb-2 lg:mb-0"
            >
              <h3 className="text-xl font-bold mb-2">JavaScript</h3>
              <p>Make your pages interactive and build dynamic experiences.</p>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
