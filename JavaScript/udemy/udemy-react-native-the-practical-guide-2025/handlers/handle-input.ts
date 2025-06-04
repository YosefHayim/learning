const handleInput = (setGoalText: React.Dispatch<React.SetStateAction<string>>, newGoalText?: string | undefined): void => {
  if (!newGoalText) return;
  setGoalText(newGoalText);
};

export default handleInput;
