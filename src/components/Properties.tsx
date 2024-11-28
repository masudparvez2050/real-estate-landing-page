import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Modern Villa with Pool',
    location: 'Beverly Hills, CA',
    price: '$2,500,000',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
    beds: 5,
    baths: 4,
    sqft: 4200
  },
  {
    id: 2,
    title: 'Luxury Penthouse',
    location: 'Manhattan, NY',
    price: '$3,800,000',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    beds: 3,
    baths: 3,
    sqft: 2800
  },
  {
    id: 3,
    title: 'Waterfront Estate',
    location: 'Miami Beach, FL',
    price: '$4,200,000',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
    beds: 6,
    baths: 5,
    sqft: 5500
  }
];

export function Properties() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Properties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md">
                  {property.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin size={18} className="mr-2" />
                  {property.location}
                </div>
                <div className="flex justify-between text-gray-600">
                  <div className="flex items-center">
                    <Bed size={18} className="mr-2" />
                    {property.beds} Beds
                  </div>
                  <div className="flex items-center">
                    <Bath size={18} className="mr-2" />
                    {property.baths} Baths
                  </div>
                  <div className="flex items-center">
                    <Square size={18} className="mr-2" />
                    {property.sqft} sqft
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}