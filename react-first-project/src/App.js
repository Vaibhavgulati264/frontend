

import React, { useState } from 'react';
import './App.css';

function App() {
  const [courses, setCourses] = useState([]);
  const [instances, setInstances] = useState([]);
  const [courseTitle, setCourseTitle] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');

  const addCourse = () => {
    const newCourse = { title: courseTitle, code: courseCode, description: courseDescription };
    setCourses([...courses, newCourse]);
    setCourseTitle('');
    setCourseCode('');
    setCourseDescription('');
  };

  const addInstance = () => {
    const newInstance = { course: selectedCourse, year, semester };
    setInstances([...instances, newInstance]);
    setYear('');
    setSemester('');
  };

  const deleteCourse = (code) => {
    setCourses(courses.filter(course => course.code !== code));
  };

  const deleteInstance = (index) => {
    setInstances(instances.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <div className="add-course">
        <h3>Add Course</h3>
        <input
          type="text"
          placeholder="Course title"
          value={courseTitle}
          onChange={e => setCourseTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Course code"
          value={courseCode}
          onChange={e => setCourseCode(e.target.value)}
        />
        <input
          type="text"
          placeholder="Course description"
          value={courseDescription}
          onChange={e => setCourseDescription(e.target.value)}
        />
        <button onClick={addCourse}>Add course</button>
      </div>

      <div className="add-instance">
        <h3>Add Instance</h3>
        <select onChange={e => setSelectedCourse(e.target.value)} value={selectedCourse}>
          <option value="">Select course</option>
          {courses.map(course => (
            <option key={course.code} value={course.code}>{course.title}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={e => setYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Semester"
          value={semester}
          onChange={e => setSemester(e.target.value)}
        />
        <button onClick={addInstance}>Add instance</button>
      </div>

      <div className="list-courses">
        <h3>Courses</h3>
        <button onClick={() => {}}>List courses</button>
        <table>
          <thead>
            <tr>
              <th>Course Title</th>
              <th>Code</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.code}>
                <td>{course.title}</td>
                <td>{course.code}</td>
                <td>
                  <button onClick={() => {}}>🔍</button>
                  <button onClick={() => deleteCourse(course.code)}>🗑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="list-instances">
        <h3>Course Instances</h3>
        <button onClick={() => {}}>List instances</button>
        <table>
          <thead>
            <tr>
              <th>Course Title</th>
              <th>Year-Sem</th>
              <th>Code</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {instances.map((instance, index) => (
              <tr key={index}>
                <td>{courses.find(course => course.code === instance.course)?.title}</td>
                <td>{instance.year}-{instance.semester}</td>
                <td>{instance.course}</td>
                <td>
                  <button onClick={() => {}}>🔍</button>
                  <button onClick={() => deleteInstance(index)}>🗑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;