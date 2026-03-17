"use client";

export default function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 z-[9999] bg-brand-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-premium hover:scale-110 transition"
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}