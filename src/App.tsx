import React, { useEffect } from "react";
import "./App.css";
import { Menu, QnACard, SliderContainer } from "./components";
import { useMockApi } from "./api/useMockApi";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { QnAQuestion } from "./api/QnA";
import {
  updateActiveQuestionIndex,
  updateAnsweredQuestion,
} from "./redux/slices/gameQuestionsSlice";

function App() {
  useMockApi();

  const dispatcher = useAppDispatch();
  const { activeQuestionIndex, allQuestions } = useAppSelector(
    (state) => state.gameQuestions
  );

  const handleSlideChange = (currentIndex: number) => {
    dispatcher(updateActiveQuestionIndex(currentIndex));
  };

  const handleQuestionAnswered = (questionIndex: number) => {
    return (answerIndex: number) => {
      dispatcher(updateAnsweredQuestion({ questionIndex, answerIndex }));
    };
  };

  return (
    <div>
      <div className="mx-auto flex h-screen flex-col sm:flex-row">
        <Menu className="order-2 flex-shrink-0 sm:order-1" />
        <div className="relative order-1 flex w-full flex-1 sm:order-2">
          <SliderContainer
            className="flex-1"
            onSlideChange={handleSlideChange}
          />
          <div className="absolute bottom-0 w-full flex-1 bg-transparent text-white md:relative md:bg-white md:text-black">
            {renderQnACard(
              activeQuestionIndex,
              allQuestions,
              handleQuestionAnswered
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const renderQnACard = (
  activeQuestionIndex: number,
  allQuestions: QnAQuestion[],
  handleQuestionAnswered: Function
) => {
  const question = allQuestions[activeQuestionIndex];
  if (!question) {
    return null;
  }
  const { id, answerChoices, partnerName, questionText } = question;

  return (
    <QnACard
      key={id}
      answerChoices={answerChoices}
      partnerName={partnerName}
      question={questionText}
      onAnswer={handleQuestionAnswered(activeQuestionIndex)}
      selectedChoiceIndex={question.answeredIndex}
    />
  );
};

export default React.memo(App);
