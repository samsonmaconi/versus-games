import React from 'react'
import PropTypes from 'prop-types'

const QnACard = props => {
  return (
    <div>QnACard</div>
  )
}

QnACard.propTypes = {
    partnerName: PropTypes.string.isRequired,
    partnerLogo: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default QnACard