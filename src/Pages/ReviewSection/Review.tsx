import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules";
import {
  Container,
  Title,
  ReviewContainer,
  Review,
  ReviewAuthor,
  Star,
  ReviewText,
  Rating,
} from "./Review.styled.ts";

const ReviewSection = () => {
  const reviews = [
    {
      text: "Starting my role as a WordPress administrator has been a joy, thanks to its intuitive interface, media management, security, and plugin integration, making website management a breeze.",
      author: "Tom S.",
      rating: 5,
    },
    {
      text: "Starting my role as a WordPress administrator has been a joy, thanks to its intuitive interface, media management, security, and plugin integration, making website management a breeze.",
      author: "Liz S.",
      rating: 5,
    },
    {
      text: "Starting my role as a WordPress administrator has been a joy, thanks to its intuitive interface, media management, security, and plugin integration, making website management a breeze.",
      author: "Mike A.",
      rating: 4,
    },
    {
      text: "Starting my role as a WordPress administrator has been a joy, thanks to its intuitive interface, media management, security, and plugin integration, making website management a breeze.",
      author: "Blud C.",
      rating: 3,
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <Title>What people are saying</Title>
      <Container>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 2000 }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            900: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewContainer>
                <Review>
                  <Rating>
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} $filled={i < review.rating}>
                        &#9733;
                      </Star>
                    ))}
                  </Rating>
                  <ReviewText>{review.text}</ReviewText>
                  <ReviewAuthor>{review.author}</ReviewAuthor>
                </Review>
              </ReviewContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default ReviewSection;
