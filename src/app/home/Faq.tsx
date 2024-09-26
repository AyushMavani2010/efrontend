"use client";
import HeroImage from "../../assets/images/image.png";
import styled from "@emotion/styled";
import ArrowDown from "../../componets/ArrowDown";
import ArrowUp from "../../componets/ArrowUp";

const RootContainer = styled.div({
  paddingBottom: "100px",
  padding: "0 20px",
});

const HeadingContainer = styled.div({
  padding: "0px 0px 0px 100px",
  "@media (max-width: 768px)": {
    padding: "0px 0px 0px 20px",
  },
});

const Button = styled.button({
  width: "40px",
  height: "40px",
  BgColor: "white",
  borderRadius: "50px",
  color: "black",
  border: "none",
  "@media (max-width: 768px)": {
    width: "36px",
    height: "36px",
  },
});
const QuestionContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  padding: "25px 0px",
  alignItems: "center",
  gap: "20px",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
  },
});

const QuestionChildRoot = styled.div({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  "@media (max-width: 768px)": {
    flexDirection: "row",
    gap: "10px",
  },
});

const QuestionNumber = styled.p({
  fontSize: "23px",
  fontWeight: 500,
  "@media (max-width: 768px)": {
    fontSize: "18px",
  },
});

const Question = styled.div({
  fontSize: "23px",
  fontWeight: 500,
  "@media (max-width: 768px)": {
    fontSize: "18px",
  },
});

const Answer = styled.p({
  fontSize: "18px",
  fontWeight: 400,
  marginTop: "10px",
  "@media (max-width: 768px)": {
    fontSize: "16px",
  },
});

const HeadingFont = styled.p({
  fontSize: "39px",
  fontWeight: 600,
  "@media (max-width: 768px)": {
    fontSize: "29px",
  },
});

const BorderMain = styled.div(() => ({
  border: "1px solid rgba(217, 217, 217, 1)",
}));

const Faq = () => {
  return (
    <RootContainer>
      <HeadingContainer>
        <HeadingFont>We have got the answers to your questions</HeadingFont>
        <QuestionContainer>
          <QuestionChildRoot>
            <QuestionNumber>01</QuestionNumber>
            <div>
              <Question>What types of furniture do you offer?</Question>
              <Answer>
                We offer a wide range of contemporary furniture including sofas,
                chairs, tables, beds, storage solutions, and outdoor furniture.
                Our collection is designed to suit modern aesthetics and
                functional needs.
              </Answer>
            </div>
          </QuestionChildRoot>
          <Button>
            <ArrowDown color="black" size={25} />
          </Button>
        </QuestionContainer>
        <BorderMain />

        <QuestionContainer>
          <QuestionChildRoot>
            <QuestionNumber>02</QuestionNumber>
            <div>
              <Question>Do you offer international shipping?</Question>
            </div>
          </QuestionChildRoot>
          <Button>
            <ArrowUp color="black" size={25} />
          </Button>
        </QuestionContainer>
        <BorderMain />

        <QuestionContainer>
          <QuestionChildRoot>
            <QuestionNumber>03</QuestionNumber>
            <div>
              <Question>What is your return policy?</Question>
            </div>
          </QuestionChildRoot>
          <Button>
            <ArrowUp color="black" size={25} />
          </Button>
        </QuestionContainer>
        <BorderMain />

        <QuestionContainer>
          <QuestionChildRoot>
            <QuestionNumber>04</QuestionNumber>
            <div>
              <Question>What payment methods do you accept?</Question>
              <Answer>
                We accept various payment methods including credit/debit cards,
                PayPal, and bank transfers.
              </Answer>
            </div>
          </QuestionChildRoot>
          <Button>
            <ArrowDown color="black" size={25} />
          </Button>
        </QuestionContainer>
        <BorderMain />
      </HeadingContainer>
    </RootContainer>
  );
};

export default Faq;
