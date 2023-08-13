import React, {  useState } from "react";
import axios from "axios";
const CourseForm = () => {
  const [courseId, setCourseId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ courseId, title, description });
    
     // Call the REST API
     axios.post('http://localhost:2020/api', {
      courseId,
      title,
      description,
    }).then(response => {
      console.log(response);
      setSuccess(true);
    });
  };

    
  return (
    <div style={{ textAlign: "center", margin: "0 auto" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Course ID"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            style={{ textAlign: "center", verticalAlign: "middle" }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ textAlign: "center", verticalAlign: "middle" }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ textAlign: "center", verticalAlign: "middle" }}
          />
        </div>
        <button type="submit">Submit</button>
        {success && <p style={{ color: "green" }}>Course created successfully!</p>}
      </form>
    </div>
  );
};

export default CourseForm;