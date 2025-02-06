import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
      name: "Alice Johnson",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      stars: 5,
      review: "I absolutely love my new bicycle! The ride is incredibly smooth, and the build quality is outstanding. It’s lightweight, making it easy to handle. Perfect for daily commuting. I highly recommend it to anyone looking for a great cycling experience!",
    },
    {
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      stars: 4,
      review: "Great bike for the price! The speed is fantastic, and the design is sleek. The seat is comfortable for long rides. Customer support was responsive and helpful. Definitely worth the investment if you're looking for something reliable and stylish.",
    },
    {
      name: "Sophia Martinez",
      image: "https://randomuser.me/api/portraits/women/47.jpg",
      stars: 5,
      review: "This bicycle exceeded my expectations. The tires grip well on different surfaces, and the brakes are very responsive. The frame feels strong yet lightweight. I enjoy riding it every day. It's truly the best purchase I’ve made this year!",
    },
    {
      name: "Michael Brown",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
      stars: 4,
      review: "I’ve been using this bicycle for a month now, and I love it! The gear shifting is smooth, and the performance on hills is excellent. It’s well-built, durable, and stylish. Would recommend this to any cycling enthusiast or commuter.",
    },
    {
      name: "Emma Wilson",
      image: "https://randomuser.me/api/portraits/women/52.jpg",
      stars: 5,
      review: "A fantastic bicycle! The design is modern, and the ride is effortless. The suspension makes rough roads feel smooth. It’s perfect for both casual and serious riders. I feel so much healthier now that I ride every day!",
    },
  ];
  
  const Testimonials = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
    };

  return (
    <div className="max-w-4xl mx-auto text-white p-8">
      <h2 className="text-3xl font-bold text-center my-10">Customer Testimonials</h2>
      
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-800 p-16 rounded-lg text-center shadow-lg">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-gray-400"
            />
            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
            <p className="text-yellow-400">
              {"⭐".repeat(testimonial.stars)}
            </p>
            <p className="text-gray-300 mt-2">"{testimonial.review}"</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
