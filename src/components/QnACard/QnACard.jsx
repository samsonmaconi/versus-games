import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../Icons'
import { VoteButtons } from '../Button'

const QnACard = props => {
    const { question, partnerName, partnerLogo, answerChoices } = props
  return (
    <div className="mx-4 my-6">
        <div className="flex flex-row md:flex-col gap-2">
            <img className="rounded-full h-12 w-12" src={props.partnerLogo} alt={props.partnerName} />
            <span className="font-bold">{props.partnerName}</span>
        </div>
        <p className="qna-card__question-text font-semibold mt-1">{props.question}</p>
        <div className="mt-4">
            <VoteButtons choice1={answerChoices[0]} choice2={answerChoices[1]}/>
        </div>
    </div>
  )
}

QnACard.defaultProps = {
    partnerLogo: 'https://via.placeholder.com/150', // TODO: replace with default logo
}

QnACard.propTypes = {
    partnerName: PropTypes.string.isRequired,
    partnerLogo: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answerChoices: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default QnACard