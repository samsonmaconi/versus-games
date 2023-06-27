import React, { useEffect, useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import "./VoteButtons.scss";
import { Icon } from "../Icons";
import { animated, useSpring, config } from "@react-spring/web";

enum VoteButtonsState {
  UNPLAYED = "UNPLAYED",
  SIDE_A_PLAYED = "SIDE_A_PLAYED",
  SIDE_B_PLAYED = "SIDE_B_PLAYED",
  DISABLED = "DISABLED",
}

const VoteButtons = (props: any) => {
  const { choice1, choice2, onVote, selectedChoiceIndex } = props;
  const [playState, setPlayState] = useState(VoteButtonsState.UNPLAYED);

  useEffect(() => {
    // rotate and zoom out animation
    rotateSpringsApi.start({
      from: { transform: "rotate(-360deg) scale(0.2)" },
      to: { transform: "rotate(360deg) scale(1)" },
      config: config.molasses,
    });

    updatePlayState();
  });

  const updatePlayState = () => {
    switch (selectedChoiceIndex) {
      case 0:
        setPlayState(VoteButtonsState.SIDE_A_PLAYED);
        break;
      case 1:
        setPlayState(VoteButtonsState.SIDE_B_PLAYED);
        break;
      default:
        setPlayState(VoteButtonsState.UNPLAYED);
        break;
    }
  };

  const handleVote = (event: any, choiceIndex: number, choice: string) => {
    if (playState === VoteButtonsState.UNPLAYED) {
      setPlayState(
        choiceIndex === 0
          ? VoteButtonsState.SIDE_A_PLAYED
          : VoteButtonsState.SIDE_B_PLAYED
      );
      onVote && onVote(choiceIndex);
    }
  };

  const renderVoteButton = (
    choice: string,
    choiceIndex: number,
    customClasses?: string
  ) => {
    return (
      <Button
        id={`vote-button-${choiceIndex}`}
        label={choice}
        onClick={(e) => handleVote(e, choiceIndex, choice)}
        className={`${customClasses} flex-1 whitespace-normal break-words rounded-full border border-gray-500 bg-white p-4 font-semibold uppercase shadow-md`}
      />
    );
  };

  const [rotateSprings, rotateSpringsApi] = useSpring(() => ({
    from: { transform: "rotate(-360deg) scale(0.2)" },
    to: { transform: "rotate(360deg) scale(1)" },
  }));

  return (
    <div className={`group relative flex gap-1 ${playState}`}>
      {renderVoteButton(
        choice1,
        0,
        "text-versus_pink sm:hover:bg-versus_pink sm:hover:text-white"
      )}
      <animated.div style={rotateSprings}>
        <Icon
          name="VersusDark"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform "
        />
      </animated.div>
      {renderVoteButton(
        choice2,
        1,
        "text-versus_green sm:hover:bg-versus_green sm:hover:text-white"
      )}
    </div>
  );
};

VoteButtons.propTypes = {
  choice1: PropTypes.string.isRequired,
  choice2: PropTypes.string.isRequired,
  onVote: PropTypes.func,
  selectedChoiceIndex: PropTypes.number,
};

export default VoteButtons;
