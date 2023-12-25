let marks = [];
let student1 = new Student("Вася", "мужской", 25);

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  return subject;
}

Student.prototype.addMarks = function (...marks) {
  if(marks.length === 0 || !marks) {
    return false;
  } else {
    marks.push(...arguments)
  }
}

Student.prototype.getAverage = function () {
    for(let i = 0; i < marks.length; i++) {
        totalSum += marks[i];
        if(marks.length === 0 || !marks) {
            return 0;
          } else {
            let average = totalSum / marks.length;
          }
    }
}

Student.prototype.exclude = function (reason) {
  delete subject;
  delete marks;
  let excluded = new reason;
}
