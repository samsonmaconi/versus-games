import React, { useEffect } from "react";
import { VoteButtons } from "../Button";
import {
  updateAnsweredQuestion,
  useAppDispatch,
  useAppSelector,
} from "../../redux";
import { animated, useSpring, config } from "@react-spring/web";

const DEFAULT_PARTNER_LOGO = "https://via.placeholder.com/150";

const QnACard = () => {
  const { activeQuestionIndex, allQuestions, answerIndices } = useAppSelector(
    (state) => state.gameQuestions
  );
  const dispatcher = useAppDispatch();

  const {
    answerChoices,
    partnerName,
    partnerLogo = DEFAULT_PARTNER_LOGO,
    questionText,
  } = allQuestions[activeQuestionIndex] || {};

  const handleOnVote = (answerIndex: number) => {
    dispatcher(
      updateAnsweredQuestion({
        questionIndex: activeQuestionIndex,
        answerIndex,
      })
    );
  };

  useEffect(() => {
    // fall animation
    fallSpringsApi.start({
      from: {
        y: -100,
      },
      to: {
        y: 0,
      },
      config: config.slow,
    });
  }, [activeQuestionIndex]);

  const [fallSprings, fallSpringsApi] = useSpring(() => ({
    from: { y: -100 },
    to: { y: 0 },
  }));

  return allQuestions.length ? (
    <animated.div className="mx-4 my-6" style={{ ...fallSprings }}>
      <div className="flex flex-row items-center gap-2 md:flex-col md:items-start">
        <img
          className="h-12 w-12 rounded-full"
          src={partnerLogo}
          alt={partnerName}
        />
        <span className="font-bold">{partnerName}</span>
      </div>
      <p className="qna-card__question-text mt-1 font-semibold">
        {questionText}
      </p>
      <div className="mt-4">
        <VoteButtons
          onVote={handleOnVote}
          choice1={answerChoices[0]}
          choice2={answerChoices[1]}
          selectedChoiceIndex={answerIndices[activeQuestionIndex]}
        />
      </div>
    </animated.div>
  ) : null;
};

export default QnACard;
