import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import {priya} from "../../../public/images/priya_verma";

const testimonials = [
  {
    name: "Amit Sharma",
    position: "CTO, CodeNexus",
    image: "/images/client/amit_sharma.jpg",
    feedback: "BhabaniShankar transformed our outdated system into a sleek, modern platform. The UX improvements were game-changing!",
  },
  {
    name: "Priya Verma",
    position: "CEO, DigitalWave",
    image: "/images/client/priya_verma.webp",
    feedback: "An absolute pleasure to work with! The attention to detail and creativity in design truly set BhabaniShankar apart.",
  },
  {
    name: "Rahul Mehta",
    position: "Founder, TechCraft",
    image: "/images/client/rahul_meheta.png",
    feedback: "Exceeded our expectations! The animations and responsiveness made our web app feel premium and super engaging.",
  },
  {
    name: "Sonia Patel",
    position: "Product Lead, InnovateX",
    image: "/images/client/sonia_patel.jpg",
    feedback: "Working with BhabaniShankar was a breeze. The project was delivered ahead of schedule with outstanding results.",
  },
];

export default function ClientStories() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold text-purple-400">Client Stories</h2>
          <p className="text-gray-300 mt-4">
            Here’s what my clients say about working with me. I strive to deliver premium quality and innovative solutions that leave a lasting impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-lg w-full"
        >
          <Slider {...settings}>
            {testimonials.map((client, index) => (
              <div key={index} className="p-6 bg-gray-900 rounded-xl shadow-md border border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="w-1/2">
                    <h3 className="text-lg font-semibold">{client.name}</h3>
                    <p className="text-sm text-gray-400">{client.position}</p>
                    <p className="mt-4 text-gray-300 italic">
                      <FaQuoteLeft className="inline text-purple-400 text-2xl mr-2" />
                      {client.feedback}
                    </p>
                  </div>

                  <div className="w-1/2">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-full h-full object-cover border-2 border-purple-400 rounded-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>

      </div>

      <style jsx>{`
        .slick-slide {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .slick-slide img {
          object-fit: cover;
        }
      `}</style>
    </section>
  );
}
