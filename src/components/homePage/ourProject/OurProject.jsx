export default function OurProject() {
  return (
    <section className="py-16 relative bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-0">

        {/* Left Text */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Let's see our Recent & <br /> popular completed projects
          </h2>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h4 className="text-pink-500 font-semibold mb-2">OUR PROJECTS</h4>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Current Projects</h3>
          <p className="text-gray-600 mb-6">
            Everything melancholy uncommonly but solicitude inhabiting projection off. <br />
            Connection stimulated estimating excellence an to impression.
          </p>

          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full flex items-center mx-auto md:mx-0">
            VIEW ALL
            <span className="ml-2 border border-white rounded-full w-5 h-5 flex items-center justify-center text-sm">+</span>
          </button>
        </div>
      </div>

      {/* Optional Decorative Background */}
      <div className="absolute right-0 top-0 hidden md:block">
        {/* You can insert decorative SVGs or background images here if desired */}
      </div>
    </section>
  );
}
