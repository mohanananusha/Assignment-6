function calculateGrade() {
  let total = 0;
  const subjects = 5;

  // Get marks for 5 subjects using prompt
  for (let i = 1; i <= subjects; i++) {
    let mark = parseFloat(prompt(`Enter marks for Subject ${i}:`));

    while (isNaN(mark) || mark < 0 || mark > 100) {
      mark = parseFloat(prompt(`Invalid input! Please enter valid marks (0–100) for Subject ${i}:`));
    }

    total += mark;
  }
  const average = total / subjects;
  let grade;
  if (average >= 90) grade = "A+";
  else if (average >= 80) grade = "A";
  else if (average >= 70) grade = "B";
  else if (average >= 60) grade = "C";
  else if (average >= 50) grade = "D";
  else grade = "F";

  alert(`Total Marks: ${total}\nAverage: ${average.toFixed(2)}\nGrade: ${grade}`);
}
