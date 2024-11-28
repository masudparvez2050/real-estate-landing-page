import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
          alt="Luxury home"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Find Your Dream Home
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Discover the perfect property that matches your lifestyle and aspirations
          </p>
          
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full p-3 border rounded-md"
                />
              </div>
              <div className="flex-1">
                <select className="w-full p-3 border rounded-md">
                  <option value="">Property Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                </select>
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
                <Search size={20} />
                Search
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}