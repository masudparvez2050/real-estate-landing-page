import { motion } from 'framer-motion';
import { Home, Key, BadgeCheck, Clock } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Wide Selection',
    description: 'Browse through thousands of carefully curated properties'
  },
  {
    icon: Key,
    title: 'Easy Process',
    description: 'Streamlined buying and selling process with expert guidance'
  },
  {
    icon: BadgeCheck,
    title: 'Verified Listings',
    description: 'All properties are verified and inspected for quality'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Our team is always available to help you with any questions'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive real estate services that make finding your dream home easier than ever
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}