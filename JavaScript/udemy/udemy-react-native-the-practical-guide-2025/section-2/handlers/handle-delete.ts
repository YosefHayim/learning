const handleDeleteTask = (goalToDelete: string, setGoals: React.Dispatch<React.SetStateAction<string[]>>) => {
  setGoals((currentGoals) => currentGoals.filter((goal) => goal !== goalToDelete));
};

export default handleDeleteTask;
