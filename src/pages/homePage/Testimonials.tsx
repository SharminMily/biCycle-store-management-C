import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Alice Johnson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    stars: 5,
    review:
      "I absolutely love my new bicycle! The ride is incredibly smooth, and the build quality is outstanding. It’s lightweight, making it easy to handle. Perfect for daily commuting. I highly recommend it to anyone looking for a great cycling experience!",
  },
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    stars: 4,
    review:
      "Great bike for the price! The speed is fantastic, and the design is sleek. The seat is comfortable for long rides. Customer support was responsive and helpful. Definitely worth the investment if you're looking for something reliable and stylish.",
  },
  {
    name: "Sophia Martinez",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
    stars: 5,
    review:
      "This bicycle exceeded my expectations. The tires grip well on different surfaces, and the brakes are very responsive. The frame feels strong yet lightweight. I enjoy riding it every day. It's truly the best purchase I’ve made this year!",
  },
  {
    name: "Michael Brown",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    stars: 4,
    review:
      "I’ve been using this bicycle for a month now, and I love it! The gear shifting is smooth, and the performance on hills is excellent. It’s well-built, durable, and stylish. Would recommend this to any cycling enthusiast or commuter.",
  },
  {
    name: "Emma Wilson",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    stars: 5,
    review:
      "A fantastic bicycle! The design is modern, and the ride is effortless. The suspension makes rough roads feel smooth. It’s perfect for both casual and serious riders. I feel so much healthier now that I ride every day!",
  },
  {
    name: "David Lee",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5,
    review:
      "Excellent quality and performance! This bike has transformed my daily commute. Super comfortable, fast, and looks amazing. Best decision ever!",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          What Our Customers Say
        </h2>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                {/* Customer Image & Name */}
                <div className="text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-green-500 shadow-md"
                  />
                  <h3 className="text-xl font-bold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <div className="text-yellow-500 text-2xl my-3">
                    {"⭐".repeat(testimonial.stars)}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-base leading-relaxed mt-4 italic text-center">
                  "{testimonial.review}"
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;