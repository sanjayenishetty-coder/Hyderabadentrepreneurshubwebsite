function VideoTestimonial({ videoId }: { videoId: string }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-xl border border-platinum/50 mx-auto w-full max-w-[340px]">
      <div className="aspect-[9/16]">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Member Testimonial"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const videoIds = [
    "FOuI4vQXQJE",
    "9Gsa21gmH2o",
    "rv2avRy4A8Q",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary-blue mb-6">
            What Our Members Say
          </h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Hear from entrepreneurs who have experienced the power of HEH's community-driven growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {videoIds.map((id) => (
            <VideoTestimonial key={id} videoId={id} />
          ))}
        </div>
      </div>
    </section>
  );
}
