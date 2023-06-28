import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import VoteButtons from "./VoteButtons";

describe("VoteButtons", () => {
  it('should have a "SIDE_A_PLAYED" class when the choice1 button is selected', () => {
    const props = {
      choice1: "React",
      choice2: "Angular",
      selectedChoiceIndex: 0,
    };
    render(<VoteButtons {...props} />);
    const voteButton = screen.getByTestId("vote-buttons");
    expect(voteButton).toHaveClass("SIDE_A_PLAYED");
  });

  it('should have a "SIDE_B_PLAYED" class when the choice2 button is selected', () => {
    const props = {
      choice1: "React",
      choice2: "Angular",
      selectedChoiceIndex: 1,
    };

    render(<VoteButtons {...props} />);
    const voteButton = screen.getByTestId("vote-buttons");
    expect(voteButton).toHaveClass("SIDE_B_PLAYED");
  });

  it('should have a "UNPLAYED" class when no button is selected', () => {
    const props = {
      choice1: "React",
      choice2: "Angular",
    };

    render(<VoteButtons {...props} />);
    const voteButton = screen.getByTestId("vote-buttons");
    expect(voteButton).toHaveClass("UNPLAYED");
  });
});
