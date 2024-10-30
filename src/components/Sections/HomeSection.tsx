// components/sections/HomeSection.tsx
export default function HomeSection() {
    return (
      <section id="home" className="home-section bg-gray-100 py-16 px-4 md:px-8">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-4">
      Empowering You with AI-Driven Market Insights
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
      Our platform harnesses the power of advanced machine learning models to bring you precise stock predictions and tailored insights. Whether you’re a beginner or a seasoned investor, we help you make informed, confident decisions with ease.
    </p>

    {/* Highlighted Benefits Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      <div className="bg-white shadow-md rounded-lg p-6 hover:bg-gray-50">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Real-Time Predictions</h3>
        <p className="text-gray-600">
          Stay ahead with real-time market predictions powered by AI algorithms that continuously adapt to market trends.
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 hover:bg-gray-50">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Tailored Insights</h3>
        <p className="text-gray-600">
          Receive insights specifically crafted to match your investment style, helping you make well-informed decisions.
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 hover:bg-gray-50">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">User-Friendly Experience</h3>
        <p className="text-gray-600">
          Access intuitive tools and visuals that simplify stock analysis, regardless of your experience level.
        </p>
      </div>
    </div>

    {/* Call to Action */}
    <div className="text-center">
      <a
        href="#features"
        className="inline-block bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-blue-500 transition duration-200"
      >
        Explore Features
      </a>
      <a
        href="#contact"
        className="inline-block ml-4 bg-gray-300 text-gray-800 py-3 px-8 rounded-full text-lg font-medium hover:bg-gray-400 transition duration-200"
      >
        Contact Us
      </a>
    </div>
  </div>
</section>
    );
  }
  