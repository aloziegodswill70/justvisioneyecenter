import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="container grid md:grid-cols-4 gap-12">

        {/* ABOUT */}
        <div>
          <h3 className="text-xl mb-4 font-semibold">
            Just Vision Eye Center
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            A leading eye clinic in Ikeja and Surulere, Lagos, Nigeria
            providing advanced ophthalmology and optometry services
            including cataract surgery, glaucoma treatment and
            comprehensive eye examinations.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="mb-4 font-semibold">Eye Care Services</h4>
          <ul className="space-y-2 text-gray-300 text-sm">

            <li>
              <Link href="/cataract-surgery-lagos" className="hover:text-white">
                Cataract Surgery
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
              <Link href="/cost-of-cataract-surgery-in-lagos" className="hover:text-white">
                Cost of Cataract Surgery
              </Link>
            </li>

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
              <Link href="/doctors/dr-clara-adekunle" className="hover:text-white">
                Dr. Clara Adekunle
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
            Email: info@justvisioneyecenter.com
          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Just Vision Eye Center |
        Best Eye Clinic in Ikeja & Surulere Lagos.
        All Rights Reserved.
      </div>
    </footer>
  );
}