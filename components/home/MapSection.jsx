export default function MapSection() {
  return (
    <section className="pb-20">
      <div className="container">
        <iframe
          src="https://www.google.com/maps?q=Ikeja,Lagos&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}