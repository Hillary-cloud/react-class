import React from "react";
import Student from "./Student";
import man1 from "../src/assets/man1.jpg";
import man2 from "../src/assets/man2.jpg";
import woman1 from "../src/assets/woman1.jpg";

// Lists and keys

const tasks = ["wake up", "brush teeth", "eat breakfask", "go to work"];

const students = [
  { id: 1, name: "Fred", age: 40, isStudent: false, image: man1 },
  { id: 2, name: "Tony", age: 20, isStudent: true, image: man2 },
  { id: 3, name: "Stella", age: 80, isStudent: true, image: woman1 },
];

const Home = () => {
  return (
    <div>
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
      <div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
        {students.map((student) => (
          <Student
            key={student.id}
            name={student.name}
            age={student.age}
            isStudent={student.isStudent}
            image={student.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
