"use client";

import { FormEvent, useState } from "react";

const WHATSAPP_NUMBER = "919652099908";

const services = [
  {
    title: "LED TV Repair",
    description: "Home service for different types of LED TV problems.",
    icon: "📺",
  },
  {
    title: "LCD TV Repair",
    description: "Reliable home service for LCD television problems.",
    icon: "🖥️",
  },
  {
    title: "Smart TV Repair",
    description: "Help with common Smart TV problems and issues.",
    icon: "📡",
  },
  {
    title: "Display Problems",
    description: "Screen, picture, lines, brightness and display issues.",
    icon: "🔧",
  },
  {
    title: "No Power Issues",
    description: "TV not switching on or other power-related problems.",
    icon: "⚡",
  },
  {
    title: "Sound Problems",
    description: "Troubleshooting and service for TV sound problems.",
    icon: "🔊",
  },
];

const previousWorks = [
  {
    title: "LED TV Repair",
    description: "Real completed service photo will be added here.",
  },
  {
    title: "LCD TV Repair",
    description: "Real completed service photo will be added here.",
  },
  {
    title: "Smart TV Repair",
    description: "Real completed service photo will be added here.",
  },
  {
    title: "Display Repair",
    description: "Real completed service photo will be added here.",
  },
  {
    title: "Power Issue Service",
    description: "Real completed service photo will be added here.",
  },
  {
    title: "Home Service Work",
    description: "Real completed service photo will be added here.",
  },
];

function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    tvType: "",
    brand: "",
    problem: "",
  });

  const defaultWhatsAppMessage =
    "Hello Happy Electronics, I need TV repair home service. Please contact me.";

  const handleBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = `Hello Happy Electronics, I would like to request a home TV repair service.

Name: ${formData.name}
Phone: ${formData.phone}
Area / Address: ${formData.area}
TV Type: ${formData.tvType}
TV Brand: ${formData.brand}
Problem: ${formData.problem}

Please contact me regarding the home service.`;

    window.open(getWhatsAppLink(message), "_blank");
  };

  const scrollToBooking = () => {
    document
      .getElementById("book-service")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-bold text-white shadow-sm">
              HE
            </div>

            <div>
              <h1 className="text-lg font-bold leading-tight text-slate-900">
                Happy Electronics
              </h1>
              <p className="text-xs text-slate-500">
                TV Repair Home Service
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            <a
              href="#home"
              className="text-sm font-medium text-slate-600 hover:text-blue-600"
            >
              Home
            </a>

            <a
              href="#services"
              className="text-sm font-medium text-slate-600 hover:text-blue-600"
            >
              Services
            </a>

            <a
              href="#our-work"
              className="text-sm font-medium text-slate-600 hover:text-blue-600"
            >
              Our Work
            </a>

            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-600 hover:text-blue-600"
            >
              How It Works
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-slate-600 hover:text-blue-600"
            >
              Contact
            </a>
          </nav>

          <button
            onClick={scrollToBooking}
            className="hidden rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 md:block"
          >
            Book Service
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-slate-200 p-2 text-xl md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="font-medium text-slate-700"
              >
                Home
              </a>

              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="font-medium text-slate-700"
              >
                Services
              </a>

              <a
                href="#our-work"
                onClick={() => setMenuOpen(false)}
                className="font-medium text-slate-700"
              >
                Our Work
              </a>

              <a
                href="#how-it-works"
                onClick={() => setMenuOpen(false)}
                className="font-medium text-slate-700"
              >
                How It Works
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="font-medium text-slate-700"
              >
                Contact
              </a>

              <button
                onClick={() => {
                  setMenuOpen(false);
                  scrollToBooking();
                }}
                className="rounded-xl bg-green-600 px-5 py-3 text-center font-semibold text-white"
              >
                Book Home Service
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="bg-gradient-to-br from-blue-50 via-white to-slate-50"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Home Service Available in Eluru
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
             Trusted TV Repair in El
<span className="block text-blue-600">Home Service at Your Doorstep 🏠</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Reliable home service for LED and LCD TV repairs in Eluru and
              surrounding rural and urban areas.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={scrollToBooking}
                className="rounded-xl bg-green-600 px-7 py-4 font-bold text-white shadow-lg hover:bg-green-700"
              >
                💬 Book Home Service
              </button>

              <a
                href="tel:+919652099908"
                className="rounded-xl border border-slate-300 bg-white px-7 py-4 text-center font-bold text-slate-800 hover:bg-blue-50"
              >
                📞 Call Now
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xl">🏠</p>
                <p className="mt-2 text-sm font-bold">Home Service</p>
                <p className="mt-1 text-xs text-slate-500">
                  Service at your doorstep
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xl">📺</p>
                <p className="mt-2 text-sm font-bold">LED & LCD Repairs</p>
                <p className="mt-1 text-xs text-slate-500">
                  Help for different TV issues
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xl">💬</p>
                <p className="mt-2 text-sm font-bold">Easy to Contact</p>
                <p className="mt-1 text-xs text-slate-500">
                  Send your request on WhatsApp
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-lg rounded-3xl border border-blue-100 bg-white p-5 shadow-2xl">
            <div className="rounded-2xl bg-slate-950 p-5">
              <div className="flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-950">
                <div className="text-center">
                  <div className="text-7xl">📺</div>
                  <p className="mt-4 text-sm font-medium text-slate-300">
                    Happy Electronics
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    TV Repair Home Service
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-blue-50 p-4">
                <p className="text-2xl">🏠</p>
                <p className="mt-2 text-sm font-bold">Doorstep Service</p>
                <p className="mt-1 text-xs text-slate-500">
                  At your location
                </p>
              </div>

              <div className="rounded-xl bg-green-50 p-4">
                <p className="text-2xl">💬</p>
                <p className="mt-2 text-sm font-bold">Easy Booking</p>
                <p className="mt-1 text-xs text-slate-500">
                  Through WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-slate-100 py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Why Happy Electronics
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Simple and Convenient Home Service
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Contact us about your TV problem and arrange a home service visit.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["🏠", "Home Service", "TV service at your location."],
              ["🔧", "TV Repairs", "LED and LCD TV repair service."],
              ["📍", "Eluru Service", "Urban, rural and nearby areas."],
              ["💬", "Easy Contact", "Send your service request on WhatsApp."],
            ].map(([icon, title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              TV Repair Services
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Tell us about your TV problem and contact us for home service.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                  {service.icon}
                </div>

                <h3 className="mt-5 text-lg font-bold">{service.title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={scrollToBooking}
              className="rounded-xl bg-green-600 px-7 py-4 font-bold text-white hover:bg-green-700"
            >
              💬 Request Home Service
            </button>
          </div>
        </div>
      </section>

      {/* OUR WORK */}
      <section id="our-work" className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Our Work
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Our Recent Service Works
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Real photos of completed Happy Electronics service work will be
              added here.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {previousWorks.map((work, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="flex aspect-[4/3] items-center justify-center bg-slate-100">
                  <div className="text-center">
                    <div className="text-5xl">📷</div>
                    <p className="mt-3 text-sm font-semibold text-slate-500">
                      Service Photo
                    </p>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold">{work.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {work.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-dashed border-blue-200 bg-blue-50 p-5 text-center text-sm text-blue-800">
            📸 Real previous-service photos can be added here later.
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="bg-slate-950 py-20 text-white"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
              Simple Process
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              How Home Service Works
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              [
                "01",
                "Send Request",
                "Enter your TV problem and service details.",
              ],
              [
                "02",
                "WhatsApp Opens",
                "Your complete request opens directly in WhatsApp.",
              ],
              [
                "03",
                "We Contact You",
                "We discuss the problem and service visit.",
              ],
              [
                "04",
                "Home Service",
                "Service is arranged at your location.",
              ],
            ].map(([number, title, description]) => (
              <div key={number}>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold">
                  {number}
                </div>

                <h3 className="text-lg font-bold">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="book-service" className="bg-blue-50 py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-10">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Book a Home Service
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
                Tell Us About Your TV Problem
              </h2>

              <p className="mt-4 text-slate-600">
                Fill in the details below. When you submit, WhatsApp will open
                with your complete service request.
              </p>
            </div>

            <form onSubmit={handleBooking} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="Enter mobile number"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Area / Address *
                </label>
                <input
                  type="text"
                  required
                  value={formData.area}
                  onChange={(e) =>
                    setFormData({ ...formData, area: e.target.value })
                  }
                  placeholder="Example: Powerpet, Eluru"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    TV Type *
                  </label>
                  <select
                    required
                    value={formData.tvType}
                    onChange={(e) =>
                      setFormData({ ...formData, tvType: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                  >
                    <option value="">Select TV type</option>
                    <option>LED TV</option>
                    <option>LCD TV</option>
                    <option>Smart TV</option>
                    <option>Android TV</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    TV Brand
                  </label>
                  <input
                    type="text"
                    value={formData.brand}
                    onChange={(e) =>
                      setFormData({ ...formData, brand: e.target.value })
                    }
                    placeholder="Example: Samsung, LG"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Describe the Problem *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.problem}
                  onChange={(e) =>
                    setFormData({ ...formData, problem: e.target.value })
                  }
                  placeholder="Example: TV is not turning on"
                  className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-green-600 px-6 py-4 text-lg font-bold text-white shadow-lg hover:bg-green-700"
              >
                💬 Send Request on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Service Area
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Home Service in Eluru & Nearby Areas
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Happy Electronics provides TV repair home service in Eluru Urban,
            Eluru Rural and surrounding nearby areas.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Eluru Urban", "Eluru Rural", "Nearby Areas"].map((area) => (
              <span
                key={area}
                className="rounded-full border border-blue-100 bg-blue-50 px-5 py-3 text-sm font-semibold"
              >
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white shadow-2xl sm:p-12">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
                  Contact Happy Electronics
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Need TV Repair at Home?
                </h2>

                <p className="mt-4 leading-7 text-blue-100">
                  Send your service request through the form or call us directly.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={scrollToBooking}
                  className="rounded-xl bg-green-500 px-6 py-4 text-center font-bold text-white hover:bg-green-600"
                >
                  💬 Book Home Service
                </button>

                <a
                  href="tel:+919652099908"
                  className="rounded-xl bg-white px-6 py-4 text-center font-bold text-blue-700 hover:bg-blue-50"
                >
                  📞 96520 99908
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-bold text-slate-900">
                Happy Electronics
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                TV Repair Home Service in Eluru
              </p>
            </div>

            <div className="text-sm text-slate-500">
              <p>📍 Eluru Urban & Rural Areas</p>
              <p className="mt-1">📞 96520 99908</p>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} Happy Electronics. All rights
            reserved.
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={getWhatsAppLink(defaultWhatsAppMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Happy Electronics on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-3xl shadow-xl hover:scale-105 hover:bg-green-700"
      >
        💬
      </a>
    </main>
  );
}