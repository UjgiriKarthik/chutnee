import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold mb-4">CHUTНEE</h3>
            <p className="text-white/80">
              Where tradition meets innovation in every bite.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li className="hover:text-white cursor-pointer transition-colors"><a href="#">Home</a></li>
              <li className="hover:text-white cursor-pointer transition-colors"><a href="https://chutnee.co.uk/menu/">Menu</a></li>
              <li className="hover:text-white cursor-pointer transition-colors"><a href="https://chutnee-1709392623.resos.com/booking?fbclid=PAY2xjawJjLm1leHRuA2FlbQIxMQABp6XclgsrI8NlL8lLSFH-Zv9bzMyEK3jdaUkvdVIhMrSDEd_mme_UZlmwXKaL_aem_u8IS-CMD9pb7NbpM5_Y56g">Reservations</a></li>
              <li className="hover:text-white cursor-pointer transition-colors"><a href="https://chutnee.co.uk/our-story/">About Us</a></li>
              <li className="hover:text-white cursor-pointer transition-colors"><a href="https://chutnee.co.uk/contact/">Contact</a></li>
            </ul>
          </div>
          

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={18} />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={18} />
                <span>hello@chutnee.com</span>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <MapPin size={18} />
                <span>123 Food Street, NY</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-all hover:scale-110">
                <Facebook size={20} />
              </div>
              <div className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-all hover:scale-110">
                <a href="https://www.instagram.com/CHUTNEE.LONDON/"><Instagram size={20} /></a>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-all hover:scale-110">
                <Twitter size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; 2025 CHUTНEE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
