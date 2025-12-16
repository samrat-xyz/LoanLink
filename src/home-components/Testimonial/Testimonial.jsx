import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const testimonials = [
  {
    id: 1,
    name: "Rahim Uddin",
    role: "Small Business Owner",
    review:
      "MicroLoan-Hub helped me expand my shop within weeks. The process was smooth and approval was super fast!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Ayesha Rahman",
    role: "Freelancer",
    review:
      "I needed quick funds to buy my laptop. This platform made everything so easy and reliable!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Sabbir Hossain",
    role: "Startup Founder",
    review:
      "I applied for a startup loan and got approval without any hassle. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 4,
    name: "Farhana Akter",
    role: "Teacher",
    review:
      "I got a small loan for my personal project. The support team guided me throughout. Excellent experience!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 5,
    name: "Kamal Hossain",
    role: "Entrepreneur",
    review:
      "Fast approval and very transparent process. I am impressed with MicroLoan-Hub.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 6,
    name: "Nadia Islam",
    role: "Designer",
    review:
      "Perfect platform for freelancers like me. Easy, reliable, and very user-friendly.",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            What Our Clients Say
          </h2>
          <p className="text-base-content/70 max-w-xl mx-auto">
            Real feedback from people who trusted MicroLoan-Hub for their financial needs.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide
              key={item.id}
              className="max-w-sm bg-base-100 shadow-md p-6 rounded-xl flex flex-col"
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg">{item.name}</h4>
                  <p className="text-sm text-base-content/60">{item.role}</p>
                </div>
              </div>

              {/* Review */}
              <p className="text-base-content/80 italic leading-relaxed mt-auto">
                “{item.review}”
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
