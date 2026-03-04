export default function FAQSection() {
  return (
    <section className="section bg-white">
      <div className="container max-w-4xl">
        <h2 className="text-4xl mb-12 text-center font-bold">
          Frequently Asked Questions
        </h2>

        <div className="space-y-10">

          {/* LOCATION */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Where are your branches located?
            </h3>
            <p className="text-brand-muted leading-relaxed">
              We have two convenient branches in Lagos:
              <br /><br />
              <strong>Ikeja Branch:</strong> 7, Odunuga Street, Off Opebi Link Bridge, Ikeja, Lagos State.
              <br />
              <strong>Surulere Branch:</strong> 7, Adeniran Ogunsanya Street, Surulere, Lagos State.
              <br /><br />
              Both locations are easily accessible and fully equipped with modern diagnostic facilities.
            </p>
          </div>

          {/* EYE TEST */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              What does your comprehensive eye test include?
            </h3>
            <p className="text-brand-muted leading-relaxed">
              Our eye examination includes vision testing, refraction for glasses,
              eye pressure measurement (glaucoma screening), retina examination,
              and detailed assessment for early cataract, diabetic retinopathy
              and hypertensive retinopathy. Early detection helps prevent
              permanent vision loss.
            </p>
          </div>

          {/* GLAUCOMA */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Can you detect glaucoma and cataract early?
            </h3>
            <p className="text-brand-muted leading-relaxed">
              Yes. Our specialists are experienced in diagnosing early glaucoma
              and cataract using modern equipment. Early diagnosis allows for
              timely treatment and better long-term vision preservation.
            </p>
          </div>

          {/* DIGITAL GLASSES */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Do you sell anti-blue light and digital glasses?
            </h3>
            <p className="text-brand-muted leading-relaxed">
              Yes. We provide premium anti-blue light glasses for laptop and
              phone users, anti-UV protective glasses for outdoor use, and
              professionally recommended digital glasses to reduce screen
              strain and eye fatigue. We also stock high-quality frames
              for different styles and preferences.
            </p>
          </div>

          {/* APPOINTMENT */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              How can I book an appointment?
            </h3>
            <p className="text-brand-muted leading-relaxed">
              You can book an appointment directly through our website or
              contact us via WhatsApp or phone at <strong>0803 303 0008</strong>.
              Our team will assist you in selecting a preferred branch and
              scheduling a convenient time.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}