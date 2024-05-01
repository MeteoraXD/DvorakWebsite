import { Container , Title,ReviewContainer , Review , ReviewAuthor , Star , ReviewText , Rating   } from './Review.styled.ts'


const ReviewSection = () => {
    const reviews = [
        {
            text: "Starting my role as a WordPress administrator has been a joy, thanks to its intuitive interface, media management, security, and plugin integration, making website management a breeze.",
            author: 'Tom S.',
            rating: 5,
        },
        {
            text: "Starting my role as a WordPress administrator has been a joy, thanks to its intuitive interface, media management, security, and plugin integration, making website management a breeze.",
            author: 'Liz S.',
            rating: 5,
        },
        {
            text: "Starting my role as a WordPress administrator has been a joy, thanks to its intuitive interface, media management, security, and plugin integration, making website management a breeze.",
            author: 'Mike A.',
            rating: 4,
        },
    ];

    return (
        <Container>
            <Title>What people are saying</Title>
            <ReviewContainer>
                {reviews.map((review, index) => (
                    <Review key={index}>
                        <Rating>
                            {Array.from({ length: 5 }, (_, i) => (
                                <Star key={i} filled={i < review.rating}>
                                    &#9733;
                                </Star>
                            ))}
                        </Rating>
                        <ReviewText>{review.text}</ReviewText>
                        <ReviewAuthor>{review.author}</ReviewAuthor>
                    </Review>
                ))}
            </ReviewContainer>
        </Container>
    );
};

export default ReviewSection;