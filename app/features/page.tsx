export default function Features() {
  return (
    <div className="container mx-auto px-4 py-12 dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-8 dark:text-gray-100">Our Features</h1>
      
      <section className="mb-12 dark:bg-gray-800 dark:text-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">Personalized Fan Highlights</h2>
        <p className="mb-4 dark:text-gray-100">Select your favorite teams and players to receive customized highlight reels after each game.</p>
        {/* Add a demo video or interactive component here */}
      </section>

      <section className="mb-12 dark:bg-gray-800 dark:text-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">Real-Time "Tool Tips"</h2>
        <p className="mb-4 dark:text-gray-100">Get instant insights and strategy explanations during live games.</p>
        {/* Add an interactive demo here */}
      </section>

      <section className="mb-12 dark:bg-gray-800 dark:text-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">Statcast Data Extraction</h2>
        <p className="mb-4 dark:text-gray-100">Upload game videos and extract valuable Statcast data for in-depth analysis.</p>
        {/* Add a file upload component or demo here */}
      </section>

      <section className="mb-12 dark:bg-gray-800 dark:text-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">Prospect Prediction</h2>
        <p className="mb-4 dark:text-gray-100">Use our AI-powered tool to predict the potential of rising baseball stars.</p>
        {/* Add a demo prediction form or results here */}
      </section>
    </div>
  )
}

