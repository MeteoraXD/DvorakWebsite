import styled from "styled-components";

interface StarProps {
  $filled: boolean;
}

const Container = styled.div`
  display: flex;
  padding: 50px;
  align-items: center;
`;

const Title = styled.h2`
  margin-bottom: 3rem;
  font-weight: 600;
  font-size: 36px;
`;

const ReviewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row !important;
  text-align: justify;
  align-items: flex-start;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Review = styled.div`
  background: #e4e4e4;
  border-radius: 4px;
  border: 2px solid #e4e4e4;
  padding: 10px;
  white-space: normal;
  word-break: normal;
  width: 100%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const ReviewText = styled.p`
  margin-bottom: 0.5rem;
  font-size: 16px;
  line-height: 1.5;
`;

const ReviewAuthor = styled.span`
  font-size: 20px;
`;

const Rating = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
`;

const Star = styled.span.attrs<StarProps>((props) => ({
  style: {
    color: props.$filled ? "black" : "lightgray",
  },
}))`
  font-size: 36px;
`;

export {
  Container,
  Title,
  ReviewContainer,
  Review,
  ReviewAuthor,
  Star,
  ReviewText,
  Rating,
};
