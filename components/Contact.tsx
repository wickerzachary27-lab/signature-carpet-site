import { Phone, MapPin, Calendar, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 lg:divide-x lg:divide-cream/10">
          {/* Left column — info */}
          <div
            className="flex flex-col justify-center p-8 md:p-10 rounded-2xl lg:rounded-none lg:pr-12 bg-gradient-to-br from-navy to-navy/90"
          >
            <h2 className="font-display text-5xl md:text-6xl font-semibold text-cream mb-6 leading-tight">
              Ready for Clean Carpets?
            </h2>
            <p className="text-cream/70 font-body text-lg leading-relaxed mb-10">
              Call or schedule online. We serve Eugene, Springfield, and
              surrounding Lane County.
            </p>

            <div className="space-y-6">
              <a
                href="tel:5413425326"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-teal/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-teal" size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-cream/70 text-sm font-body">Call us</p>
                  <p className="text-cream font-display text-xl font-semibold group-hover:text-teal transition-colors">
                    (541) 342-5326
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-teal" size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-cream/70 text-sm font-body">Visit us</p>
                  <p className="text-cream font-body">
                    1070 S Bertelsen Rd, Eugene, OR 97402
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-teal" size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-cream/70 text-sm font-body">Hours</p>
                  <p className="text-cream font-body">Mon–Fri 9am–5pm</p>
                </div>
              </div>

              <a
                href="https://sigcarpet.com/schedule"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-teal/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar
                    className="text-teal"
                    size={22}
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="text-cream/70 text-sm font-body">Online</p>
                  <p className="text-cream font-display text-xl font-semibold group-hover:text-teal transition-colors">
                    Schedule Appointment
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right column — form */}
          <div className="lg:pl-12 flex flex-col justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
