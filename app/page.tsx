"use client";

import Link from "next/link";
import FloatingChakras from "@/components/FloatingChakras";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { CheckCircle, Dumbbell, Sparkles, Brain, Zap, Scale } from "lucide-react";
import Testimonials from "./Testimonials";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 🎨 Helper function for responsive animations
  const fadeOrSlide = (direction: "left" | "right" | "up" = "left") => ({
    hidden: isMobile
      ? { opacity: 0 }
      : { opacity: 0, x: direction === "left" ? -50 : direction === "right" ? 50 : 0 },
    visible: isMobile ? { opacity: 1 } : { opacity: 1, x: 0 },
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <img
          src="/home.gif"
          alt="Home background"
          className="absolute top-10 inset-0 w-full h-full object-cover object-center object-bottom opacity-30"
        />

        <FloatingChakras />
        <div className="absolute inset-0 bg-gradient-to-b from-muted-green/30 via-transparent to-muted-green/20" />

        <div className="relative z-10 text-center px-4 max-w-3xl">
          <div className="mb-8 inline-block">
            <div className="animate-glow animate-pulse w-20 h-20 rounded-full bg-gradient-to-br from-golden to-golden-light mx-auto flex items-center justify-center">
              <span className="text-4xl">ॐ</span>
            </div>
          </div>

          <h1 className="font-josefin text-5xl md:text-6xl font-bold text-deep-green mb-4 leading-tight drop-shadow-lg">
            Awaken Your Inner Energy
          </h1>
          <p className="text-xl text-foreground/90 font-bold mb-12 leading-relaxed drop-shadow-md">
            With Mishthy Yog Sadhna – Your gateway to holistic wellness,
            spiritual healing, and inner peace
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-white to-orange-500 text-green-700 font-semibold hover:from-orange-100 hover:to-orange-600 hover:shadow-lg hover:scale-105 inline-block"
            >
              Join a Class
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-lg border-2 border-orange-500 text-green-700 font-semibold hover:bg-orange-100 inline-block"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </section>



      {/* Why Choose Us - Corrected Structure */}
      <section className="relative flex items-center justify-center min-h-[700px] lg:min-h-[900px] mt-20">
        <h2 className="absolute top-0 text-center text-5xl text-green-900 font-bold mt-8">Why Choose Us?</h2>
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Center Image */}
          <div className="absolute z-10">
            <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-sage-300 shadow-2xl bg-gradient-to-br from-white to-sage-50">
              <img src="/SapnaKulshreshtha.jpg" alt="Yoga Woman" className="w-full h-[330] object-cover" />
            </div>
          </div>

          {/* Features */}
          {(() => {
            const radiusX = 400; // horizontal spread
            const radiusY = 300; // vertical spread
            const features = [
              { title: "Personalized Attention", desc: "Individual guidance tailored to your unique needs and goals" },
              { title: "Holistic Approach", desc: "Mind, body, and spirit wellness through integrated practices" },
              { title: "Expert Instructor", desc: "Certified professional with 10+ years of experience" },
              { title: "Affordable Excellence", desc: "Quality services at accessible prices for everyone" },
              { title: "Proven Results", desc: "99% satisfaction rate with transformative outcomes" },
              { title: "Spiritual Growth", desc: "Deepen your connection with your inner self and universe" },
              { title: "Holistic Wellness", desc: "Comprehensive care addressing physical, mental, and spiritual health" },
              { title: "Women & Kids Services", desc: "Dedicated space for women and children up to 18" },
            ];

            const angles = [200, 245, 150, 110, 70, 27, -20, -65];

            return features.map((feature, i) => {
              const rad = (angles[i] * Math.PI) / 180;
              const x = Math.cos(rad) * radiusX;
              const y = Math.sin(rad) * radiusY;

              return (
                <motion.div
                  key={i}
                  className="absolute w-60 lg:w-48 p-4 rounded-xl bg-gradient-to-br from-white to-sage-50 hover:shadow-xl hover:scale-105 transition-all duration-500 border border-sage-200/50 backdrop-blur-sm flex flex-col items-center text-center shadow-lg z-20"
                  style={{
                    left: `calc(50% - 7.5rem + ${x}px)`, // 50% - half of item width (w-60) + offset
                    top: `calc(50% - 5rem + ${y}px)`,
                  }}
                  initial={{ opacity: 0, scale: 0.3 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <CheckCircle className="text-2xl lg:text-3xl text-forest-green mb-3 drop-shadow-sm" />
                  <h3 className="font-poppins text-sm lg:text-base font-semibold text-deep-green mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="font-poppins text-foreground/70 text-xs lg:text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            });
          })()}
        </div>
      </section>


      {/* About Preview */}
      <section className="py-20 bg-gradient-to-b from-soft-gray to-muted-green/10">
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex ${
            isMobile
              ? "flex flex-col text-center items-center"
              : "grid md:grid-cols-2 gap-12 items-center"
          }`}
        >
          <motion.div
            className={`${isMobile ? "w-full mb-8" : ""}`}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            key={isMobile ? "mobile-about-text" : "desktop-about-text"}
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeOrSlide("left")}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h2 className="font-josefin text-4xl font-bold text-deep-green mb-6">
              Meet Mrs. Sapna Kulshreshtha
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A certified Yoga Teacher, Reiki Grand Master, Energy Healing
              Expert, Sound Healer and Hypnotherapist dedicated to transforming lives
              through holistic wellness.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-8">
              With years of expertise, Mrs. Sapna leads Mishthy Yog Sadhna with
              compassion and authentic knowledge, helping individuals achieve
              physical wellness and spiritual growth.
            </p>
            <Link
              href="/about"
              className="inline-block text-deep-green font-semibold hover:text-golden transition relative group"
            >
              Learn More
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-golden group-hover:w-full transition-all" />
            </Link>
          </motion.div>

          <motion.div
            key={isMobile ? "mobile-about-image" : "desktop-about-image"}
            variants={fadeOrSlide("right")}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className={`relative h-96 bg-gradient-to-br from-muted-green to-muted-green rounded-lg flex items-center justify-center ${
              isMobile ? "mx-auto w-4/5" : ""
            }`}
            >
            <img
              src="/SapnaKulshreshtha.jpg"
              alt="Mrs. Sapna Kulshreshtha"
              className="w-full h-full object-[50%_15%] object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-b from-soft-gray to-muted-green/10">
  <div
    className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
      isMobile
      ? "flex flex-col items-center justify-center text-center gap-10"
      : "grid md:grid-cols-2 gap-12 items-center"
    }`}
    >
    {/* Left: Video */}
    <motion.div
      className={`relative ${
        isMobile
        ? "flex justify-center items-center w-full"
        : "flex justify-start"
      }`}
      key={isMobile ? "mobile-story-video" : "desktop-story-video"}
      variants={fadeOrSlide("left")}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div
        className={`aspect-video rounded-lg overflow-hidden ${
          isMobile ? "w-[90%]" : "w-full"
        }`}
        >
        <iframe
          src="https://www.youtube.com/embed/Iqywfk6xQt4?rel=0"
          title="Our Story Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          ></iframe>
      </div>
    </motion.div>

    {/* Right: Text */}
    <motion.div
      className={`${
        isMobile
        ? "flex flex-col items-center text-center"
        : "w-full text-left"
      }`}
      key={isMobile ? "mobile-story-text" : "desktop-story-text"}
      variants={fadeOrSlide("right")}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h2 className="font-josefin text-4xl font-bold text-deep-green mb-6">
        Our Story
      </h2>
      <p className="text-foreground/80 leading-relaxed">
        [Placeholder for story text - to be updated later]
      </p>
    </motion.div>
  </div>
</section>


      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-josefin text-4xl font-bold text-center text-deep-green mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Our Services
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {[
              {
                icon: Dumbbell,
                title: "Hatha Yoga",
                desc: "Strengthen and balance your body",
              },
              {
                icon: Dumbbell,
                title: "Power Yoga",
                desc: "Build strength and endurance",
              },
              {
                icon: Sparkles,
                title: "Reiki Healing",
                desc: "Energy healing and restoration",
              },
              {
                icon: Brain,
                title: "Meditation",
                desc: "Calm your mind and soul",
              },
              {
                icon: Zap,
                title: "Hypnotherapy",
                desc: "Transform limiting beliefs",
              },
              {
                icon: Scale,
                title: "Wellness Counseling",
                desc: "Weight management guidance",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                className="p-8 rounded-lg bg-gradient-to-br from-muted-green/40 to-muted-green/30 hover:shadow-lg hover:scale-105 transition border border-muted-green/30"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="text-5xl mb-4 text-deep-green"><service.icon /></div>
                <h3 className="font-josefin text-xl font-bold text-deep-green mb-2">
                  {service.title}
                </h3>
                <p className="text-foreground/70">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <Link
              href="/services"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-white to-orange-500 text-green-700 font-semibold hover:from-orange-100 hover:to-orange-600 hover:shadow-lg hover:scale-105 transition"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}
