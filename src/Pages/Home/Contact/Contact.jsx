import React from "react";
import { useForm } from "react-hook-form";
import Particles from "../../../Particles";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <section id="contact" className="relative w-full px-8 py-20 text-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Background gradient + particles */}
        <div className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-gradient-to-br from-black to-black opacity-90" />
          <Particles
            particleColors={["#a78bfa", "#60a5fa", "#ffffff"]}
            particleCount={120}
            particleSpread={15}
            speed={0.2}
            particleBaseSize={80}
            moveParticlesOnHover
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-16 relative z-10">
          {/* Left Section */}
          <div className="md:w-1/2 flex flex-col items-center md:items-center space-y-12">
          
            

            {/* Contact Info */}
            <div className="w-full max-w-md bg-black bg-opacity-60 rounded-2xl p-10 shadow-2xl backdrop-blur-md border border-indigo-600">
              <motion.h2
                id="about-title"
                className="text-4xl md:text-3xl font-extrabold text-center mb-12 bg-primary bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Contact Me
              </motion.h2>

              <ul className="space-y-7 text-xl font-semibold text-gray-200">
                {[
                  {
                    icon: "📱",
                    label: "WhatsApp",
                    value: "+880 1784773949",
                    href: null,
                  },
                  {
                    icon: "🔗",
                    label: "LinkedIn",
                    value: "linkedin.com/in/Mahmudul Hasan Ratul",
                    href: "https://www.linkedin.com/in/devmhratul/",
                  },
                  {
                    icon: "🐱",
                    label: "GitHub",
                    value: "github.com/devratul",
                    href: "https://github.com/dev-ratul",
                  },
                  {
                    icon: "📧",
                    label: "Email",
                    value: "dev.mhratul@gmail.com",
                    href: "mailto:dev.mhratul@example.com",
                  },
                  {
                    icon: "📍",
                    label: "Location",
                    value: "Dhaka, Bangladesh",
                    href: null,
                  },
                ].map(({ icon, label, value, href }) => (
                  <li
                    key={label}
                    className="flex items-center gap-5 transition-colors duration-300 cursor-pointer"
                  >
                    <span className="text-3xl">{icon}</span>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline underline-white "
                      >
                        {value}
                      </a>
                    ) : (
                      <span>{value}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className=" md:w-1/2  bg-opacity-90 rounded-3xl p-12 shadow-2xl backdrop-blur-md ">
            <motion.h2
              id="about-title"
              className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-primary bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Send a Message
            </motion.h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-7"
              noValidate
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("fullName", {
                    required: "Full Name is required",
                  })}
                  className={`flex-1 rounded-xl border border-indigo-600 px-6 py-4 text-white font-semibold placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-600 transition-shadow duration-300 ${
                    errors.fullName ? "ring-2 ring-red-600" : ""
                  }`}
                />
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  className={`flex-1 border border-indigo-600 rounded-xl px-6 py-4 text-white font-semibold placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-600 transition-shadow duration-300 ${
                    errors.email ? "ring-2 ring-red-600" : ""
                  }`}
                />
              </div>
              {errors.fullName && (
                <p className="text-red-500 text-sm -mt-4">
                  {errors.fullName.message}
                </p>
              )}
              {errors.email && (
                <p className="text-red-500 text-sm -mt-4">
                  {errors.email.message}
                </p>
              )}

              <textarea
                rows="6"
                placeholder="Your message"
                {...register("message", { required: "Message is required" })}
                className={`w-full rounded-xl border border-indigo-600 px-6 py-5 resize-none text-white font-semibold placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-600 transition-shadow duration-300 ${
                  errors.message ? "ring-2 ring-red-600" : ""
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm -mt-4">
                  {errors.message.message}
                </p>
              )}

              <button
                type="submit"
                className="mt-4 bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 rounded-xl py-4 text-xl font-extrabold text-white shadow-lg shadow-blue-400/50 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
