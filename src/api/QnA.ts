export type QnAQuestion = {
    id: string;
    questionText: string;
    answerChoices: string[];
    partnerName: string;
    gameVideoUrl: string;
    answeredIndex?: number;
    correctAnswer?: string;
}