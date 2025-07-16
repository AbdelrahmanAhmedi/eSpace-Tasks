import Navbar from "../components/Navbar";
export default function JSPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 px-6">
        <img
          src="/JS.png"
          alt="JS"
          className="mx-auto my-6 w-[280px] h-[160px] lg:w-[500px] lg:h-[300px] max-w-full"
        />
        <h1 className="text-3xl font-bold text-center text-yellow-400">
          JavaScript
        </h1>
        <p className="mt-4 lg:text-2xl text-center space-y-4">
          JavaScript adds interactivity and dynamic behavior to websites. It
          allows users to interact with elements like buttons, forms, sliders,
          and real-time updates without needing to reload the page. From basic
          form validation to building full single-page applications, JavaScript
          is a powerful tool that makes web experiences seamless and engaging.
        </p>
        <h4 className="text-center mt-6 font-semibold text-lg lg:text-2xl">
          Learn more about JavaScript:
        </h4>
        <div className="text-center mt-2">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            className="text-blue-500 hover:underline"
          >
            MDN Web Docs - JavaScript
          </a>
        </div>
      </main>
    </>
  );
}
