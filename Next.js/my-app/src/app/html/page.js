import Navbar from "../components/Navbar";

export default function HTMLPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 px-6 ">
        <img
          src="/HTML.webp"
          alt="HTML"
          className="mx-auto my-6 w-[280px] h-[160px] lg:w-[500px] lg:h-[300px] max-w-full"
        />
        <h1 className="text-3xl font-bold text-center text-orange-600">HTML</h1>

        <p className="mt-4 lg:text-2xl text-center space-y-4">
          HTML is the backbone of every web page. It provides the structure and
          meaning to content by defining elements such as headings, paragraphs,
          links, images, and lists. Think of HTML as the skeleton of a website —
          it organizes and holds everything in place, forming the foundation
          before any styling or functionality is added.
        </p>

        <h4 className="text-center mt-6 font-semibold text-lg lg:text-2xl">
          Learn more about HTML:
        </h4>

        <div className="text-center mt-2">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            className="text-blue-500 hover:underline"
          >
            MDN Web Docs - HTML
          </a>
        </div>
      </main>
    </>
  );
}
