import React from "react";
import PropTypes from "prop-types";
import { VoteButtons } from "../Button";

const QnACard = (props) => {
  const {
    question,
    partnerName,
    partnerLogo,
    answerChoices,
    onAnswer,
    selectedChoiceIndex,
  } = props;
  return (
    <div className="mx-4 my-6">
      <div className="flex flex-row items-center gap-2 md:flex-col md:items-start">
        <img
          className="h-12 w-12 rounded-full"
          src={partnerLogo}
          alt={partnerName}
        />
        <span className="font-bold">{partnerName}</span>
      </div>
      <p className="qna-card__question-text mt-1 font-semibold">{question}</p>
      <div className="mt-4">
        <VoteButtons
          onVote={onAnswer}
          choice1={answerChoices[0]}
          choice2={answerChoices[1]}
          selectedChoiceIndex={selectedChoiceIndex}
        />
      </div>
    </div>
  );
};

QnACard.defaultProps = {
  partnerLogo: "https://via.placeholder.com/150", // TODO: replace with default logo
};

QnACard.propTypes = {
  partnerName: PropTypes.string.isRequired,
  partnerLogo: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answerChoices: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswer: PropTypes.func.isRequired,
  selectedChoiceIndex: PropTypes.number,
};

export default QnACard;
