import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import React, { useState, useEffect } from "react";

function App() {
  const state = {
    courses: [{ name: "html" }, { name: "css" }, { name: "jQuery" }],
  };
  const [current, setCurrent] = useState("");
  const [Courses, setCourses] = useState(state.courses);

  //update course
  const updateCourse = (e) => {
    setCurrent(e.target.value);
  };

  //add course
  const addCourse = (e) => {
    e.preventDefault();
    if ((current === "") || (current.match(/^ *$/) !== null)){ 
      return false;
    } else {
      Courses.push({ name: current });
      setCourses(Courses);
      setCurrent("");
    }
  };

  // deleteCourse
  const deleteCourse = (index) => {
    // const Courses = state.courses;
    // let ddddd = Courses.splice(index, 1);
    // setCourses(Courses);
    setCourses(
      Courses.filter((c, _index) => {
        return index !== _index;
      })
    );
  };
  //editCourse
  const editCourse =(index, value) => {
    let course = Courses[index]
    course['name'] = value;
    setCourses(Courses);
  }

  // const { courses } = state;
  const courseList = Courses.map((course, index) => {
    return (
        <CourseList
          details={course}
          key={index}
          index={index}
          deleteCourse={deleteCourse}
          editCourse={editCourse}
        />
    );
  });

  return (
    <section className="App">
      <h2>Add course</h2>

      <CourseForm
        current={current}
        updateCourse={updateCourse}
        addCourse={addCourse}
      />
      {Courses.length > 0 ? <ul>{courseList}</ul> : <p>three is no courses</p>}
    </section>
  );
}

export default App;
