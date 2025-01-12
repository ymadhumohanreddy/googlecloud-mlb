import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Baseball Analytics</h1>
        <p className="text-xl mb-8">Discover advanced insights and personalized highlights for your favorite teams and players.</p>
        <Link href="/features" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Explore Features
        </Link>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  <div className="border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow  dark:bg-gray-800 dark:border-gray-700">
    <h3 className="text-xl font-bold mb-2">Personalized Highlights</h3>
    <p className="mb-4">Get custom highlights for your favorite teams and players. Stay up-to-date with personalized notifications for key moments in each game.</p>
    <ul className="list-disc pl-5">
      <li>Track key plays and moments.</li>
      <li>Set preferences for your favorite teams and players.</li>
      <li>Watch highlights at your convenience.</li>
    </ul>
  </div>
  <div className="border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow  dark:bg-gray-800 dark:border-gray-700">
    <h3 className="text-xl font-bold mb-2">Real-Time Insights</h3>
    <p className="mb-4">Access live game data with strategy explanations. Get the latest stats, player performance, and game trends instantly.</p>
    <ul className="list-disc pl-5">
      <li>Live tracking of player stats and performance.</li>
      <li>Real-time strategy insights and analytics.</li>
      <li>Interactive charts and visuals.</li>
    </ul>
  </div>
  <div className="border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow  dark:bg-gray-800 dark:border-gray-700">
    <h3 className="text-xl font-bold mb-2">Statcast Analysis</h3>
    <p className="mb-4">Extract and analyze Statcast data from game videos. Gain deeper insights into player actions and team strategies.</p>
    <ul className="list-disc pl-5">
      <li>Advanced player tracking and metrics.</li>
      <li>Identify key moments with statistical analysis.</li>
      <li>Compare player and team performance over time.</li>
    </ul>
  </div>
  <div className="border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow  dark:bg-gray-800 dark:border-gray-700">
    <h3 className="text-xl font-bold mb-2">Prospect Predictions</h3>
    <p className="mb-4">Get AI-powered predictions for rising baseball stars. Discover potential future stars based on historical data and trends.</p>
    <ul className="list-disc pl-5">
      <li>Analyze up-and-coming players using AI insights.</li>
      <li>Predict player development and future success.</li>
      <li>Track potential stars and their progress in the league.</li>
    </ul>
  </div>
</div>

      </section>
    </div>
  )
}

