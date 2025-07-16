import Navbar from "../components/Navbar";
export default function CSSPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 px-6">
        <img
          src="/Css.png"
          alt="CSS"
          className="mx-auto my-6 w-[280px] h-[160px] lg:w-[500px] lg:h-[300px] max-w-full"
        />
        <h1 className="text-3xl font-bold text-center text-blue-600">CSS</h1>
        <p className="mt-4 lg:text-2xl text-center space-y-4">
          CSS brings life to a plain HTML structure by adding colors, layouts,
          spacing, fonts, and animations. It allows developers to style elements
          and control how they appear across different devices and screen sizes.
          With CSS, you can transform a simple HTML page into a visually
          engaging and responsive website.
        </p>
        <h4 className="text-center mt-6 font-semibold text-lg lg:text-2xl">
          Learn more about CSS:
        </h4>
        <div className="text-center mt-2">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            className="text-blue-500 hover:underline"
          >
            MDN Web Docs - CSS
          </a>
        </div>
      </main>
    </>
  );
}
