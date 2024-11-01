function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }
  
  function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  function hasPassingGrade(score) {
    return getGrade(score) !== "F";
  }
  
  function studentMsg(totalScores, studentScore) {
    const classAverage = getAverage(totalScores); // Calculate class average
    const studentGrade = getGrade(studentScore); // Get student's grade
  
    if (studentScore >= 60) { // Check if student passed (grade >= 60)
      return `Class average: ${classAverage}. Your grade: ${studentGrade}. You passed the course.`;
    } else {
      return `Class average: ${classAverage}. Your grade: ${studentGrade}. You failed the course.`;
    }
  }
  
  // Example usage:
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
  
  