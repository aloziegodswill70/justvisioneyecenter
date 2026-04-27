import Link from "next/link";
import BackToTopButton from "./BackToTopButton";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 relative">
      <div className="container grid md:grid-cols-4 gap-12">

        {/* ABOUT */}
        <div>
          <h3 className="text-xl mb-4 font-semibold">
            Just Vision Eye Centre
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            A leading eye clinic in Ikeja and Surulere, Lagos, Nigeria
            providing advanced ophthalmology and optometry services
            including glaucoma treatment and comprehensive eye examinations.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="mb-4 font-semibold">Eye Care Services</h4>
          <ul className="space-y-2 text-gray-300 text-sm">

            <li>
              <Link href="/services" className="hover:text-white">
                Optical & Digital Glasses
              </Link>
            </li>

            <li>
              <Link href="/glaucoma-treatment-lagos" className="hover:text-white">
                Glaucoma Treatment
              </Link>
            </li>

            <li>
              <Link href="/eye-test-ikeja" className="hover:text-white">
                Comprehensive Eye Test
              </Link>
            </li>

            <li>
              <Link href="/services" className="hover:text-white">
                View All Services
              </Link>
            </li>

          </ul>
        </div>

        {/* COST GUIDES */}
        <div>
          <h4 className="mb-4 font-semibold">Treatment Cost Guides</h4>
          <ul className="space-y-2 text-gray-300 text-sm">

            <li>
              <Link href="/cost-of-glaucoma-treatment-in-lagos" className="hover:text-white">
                Cost of Glaucoma Treatment
              </Link>
            </li>

            <li>
              <Link href="/best-optometrist-in-lagos" className="hover:text-white">
                Best Optometrist in Lagos
              </Link>
            </li>

            {/* EXISTING SEO */}
            <li>
              <Link href="/best-eye-clinic-near-me" className="hover:text-white">
                Eye Clinic Near Me
              </Link>
            </li>

            <li>
              <Link href="/google-map-eye-clinic-in-lagos" className="hover:text-white">
                Eye Clinic on Google Map
              </Link>
            </li>

            <li>
              <Link href="/blue-light-glasses-in-ikeja" className="hover:text-white">
                Blue Light Glasses Ikeja
              </Link>
            </li>

            {/* ✅ NEW 4 PAGES */}
            <li>
              <Link href="/5-best-eye-clinic-in-lagos" className="hover:text-white">
                5 Best Eye Clinics in Lagos
              </Link>
            </li>

            <li>
              <Link href="/no-one-best-eye-clinic-in-lagos" className="hover:text-white">
                No. 1 Best Eye Clinic in Lagos
              </Link>
            </li>

            <li>
              <Link href="/best-eye-doctor-ikeja" className="hover:text-white">
                Best Eye Doctor in Ikeja
              </Link>
            </li>

            <li>
              <Link href="/best-eye-doctor-in-lagos" className="hover:text-white">
                Best Eye Doctor in Lagos
              </Link>
            </li>

          </ul>
        </div>

        {/* LOCATION + AUTHORITY */}
        <div>
          <h4 className="mb-4 font-semibold">Our Locations</h4>
          <ul className="space-y-2 text-gray-300 text-sm">

            <li>
              <Link href="/best-eye-clinic-in-ikeja" className="hover:text-white">
                Eye Clinic in Ikeja
              </Link>
            </li>

            <li>
              <Link href="/best-eye-clinic-near-surulere" className="hover:text-white">
                Eye Clinic Near Surulere
              </Link>
            </li>

            <li>
              <Link href="/dr-chara-adekunle-best-eye-doctor-in-ikeja" className="hover:text-white">
                Dr. Chara Adekunle
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-white">
                About Our Clinic
              </Link>
            </li>

          </ul>

          <div className="mt-6 text-sm text-gray-300">
            Ikeja & Surulere, Lagos <br />
            Phone: +234 803 123 4567 <br />
            Email: info@justvisioneyecentre.com
          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Just Vision Eye Centre |
        Best Eye Clinic in Ikeja & Surulere Lagos.
        All Rights Reserved.
      </div>

      {/* BACK TO TOP */}
      <BackToTopButton />

    </footer>
  );
}