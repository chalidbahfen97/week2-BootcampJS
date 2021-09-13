const students = ["asep","budi","charlie","budi","jeni","asep"];

let countStudents = students.reduce(function duplicateElement(prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});
  
  
  console.log(countStudents);