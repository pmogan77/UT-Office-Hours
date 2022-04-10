import React, { useState } from "react";
import Block from "./Block.js";

function StudentView() {
    const [students, setStudents] = useState([
        { name: "Amphetamine", place: 0, key: 0 },
        { name: "Botamy", place: 1, key: 1 },
        { name: "Cilandry", place: 2, key: 2 },
    ]);

    return (
        <div className="studentView">
            {students.map(student => (
                <><Block name={student.name} place={student.place} /><br></br></>
            ))}
        </div>
    );
}

export default StudentView;