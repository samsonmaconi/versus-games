import React from "react";
import "./App.css";
import { Menu, QnACard, SliderContainer } from "./components";
import { useMockApi } from "./api/useMockApi";
import { useAppSelector } from "./redux/hooks";
import { QnAQuestion } from "./api/QnA";

function App() {
  useMockApi();
  const { activeQuestionIndex, allQuestions } = useAppSelector(
    (state) => state.gameQuestions
  );

  return (
    <div>
      <div className="container mx-auto flex h-screen flex-col sm:flex-row">
        <Menu className="order-2 sm:order-1" />
        <div className="order-1 flex w-full flex-1 sm:order-2">
          <SliderContainer className="flex-1" />
          <div className="hidden flex-1 bg-white md:flex">
            {allQuestions[activeQuestionIndex] &&
              renderQnACard(allQuestions[activeQuestionIndex])}
          </div>
        </div>
      </div>
    </div>
  );
}

const renderQnACard = (question: QnAQuestion) => {
  const { id, answerChoices, partnerName, questionText } = question;
  return (
    <QnACard
      key={id}
      answerChoices={answerChoices}
      partnerName={partnerName}
      question={questionText}
    />
  );
};

export default App;
