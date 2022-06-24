const organizeInstructors = function(instructors) {
  const organize = {};
  let proff = [];

  for (let i of instructors){
    organize[i.course] = [];
  }
  for (let i in organize){
    for (let j of instructors){
      if (i === j.course){
        proff.push(j.name);
      }
    }
    organize[i] = proff;
    proff = [];
  }
  return organize;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
