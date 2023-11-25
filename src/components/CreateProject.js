// CreateProject.js
import React from "react";
import { Link, useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Kanban from './Kanban';
// import TeamIdeation from './TeamIdeation';

const CreateProject = () => {
  return (
    
    <div className="flex flex-col items-center w-full pt-10">
      <h1>Choose a workspace:</h1>
      <Link to="/kanban">Kanban space</Link>
      
    </div>
  );
};

export default CreateProject;
// import React from "react";
 
// const About = () => {
//     return (
//         <div>
//             <h1>
//                 GeeksforGeeks is a Computer
//                 Science portal for geeks.
//             </h1>
//         </div>
//     );
// };
 
// export default About;