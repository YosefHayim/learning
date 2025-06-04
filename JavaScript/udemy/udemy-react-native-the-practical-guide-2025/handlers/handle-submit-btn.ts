const handleSubmitBtn = (
  goalText: string,
  goals: string[],
  setGoals: React.Dispatch<React.SetStateAction<string[]>>,
  setGoalText: React.Dispatch<React.SetStateAction<string>>
) => {
  if (!goalText.trim()) return;
  setGoals([...goals, goalText]);
  setGoalText("");
};

export default handleSubmitBtn;
