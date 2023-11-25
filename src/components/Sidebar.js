// import React, { useCallback, useEffect, useState } from 'react'
// import AddProjectModal from './AddProjectModal'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// // import toast from 'react-hot-toast'
// const Sidebar = () => {

//   const [isModalOpen, setModalState] = useState(false)
//   const [projects, setProjects] = useState([])
//   const [paramsWindow, setParamsWindow] = useState(window.location.pathname.slice(1))
//   useEffect(() => {
//   })

//   // const handleLocation = (e) => {
//   //   e.preventDefault();
//   //   setParamsWindow(new URL(e.currentTarget.href).pathname.slice(1));
//   // }
//   const handleLocation = (e) => {
//     e.preventDefault();
//     const newParams = new URL(e.currentTarget.href).pathname.slice(1);
//     console.log('New Params:', newParams);
//     setParamsWindow(newParams);
//   };

//   const openModal = useCallback(() => {
//     setModalState(true)
//   }, [])

//   const closeModal = useCallback(() => {
//     setModalState(false)
//   }, [])

//   const projectData = () => {
//     axios.get('http://localhost:9000/project')  // Change 'projects' to 'project'
//       .then((res) => {
//         setProjects(res.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching projects:', error);
//       });
//   };
  

//   useEffect(() => {
//     projectData();
//     document.addEventListener('projectUpdate', ({ detail }) => {
//       projectData();
//     });
//     return () => {
//       document.removeEventListener('projectUpdate', {}, false);
//     };
//   }, []);



//   return (
//     <div className='py-5'>
//       <div className="px-4 mb-3 flex items-center justify-between">
//         <span style={{marginLeft:'0px',marginRight:'20px'}}>Projects</span>
//         <button onClick={openModal} className='bg-indigo-200 rounded-full p-[2px] focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-offset-1'>
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-indigo-600">
//             <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
//           </svg>
//         </button>
//       </div>
//       <ul className='border-r border-gray-300 pr-2'>
//         {projects.map((project, index) => (
//           <Link key={index} to={project._id ? `/${project._id}` : '/'} onClick={(e) => handleLocation(e)}>
//             <li className={`px-5 py-1.5 mb-1 text-gray-600 font text-sm capitalize select-none hover:text-indigo-600 rounded transition-colors hover:bg-indigo-200/80 ${paramsWindow === project._id && 'text-indigo-600 bg-indigo-200/80'}`}>
//               {project.title}
//             </li>
//           </Link>
          
//         ))}
//       </ul>
//       <AddProjectModal isModalOpen={isModalOpen} closeModal={closeModal} />
//     </div>
//   )
// }

// export default Sidebar;

import React, { useCallback, useEffect, useState } from 'react';
import AddProjectModal from './AddProjectModal';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// const Sidebar = () => {
//   const [isModalOpen, setModalState] = useState(false);
//   const [projects, setProjects] = useState([]);
//   const [paramsWindow, setParamsWindow] = useState(window.location.pathname.slice(1));

//   useEffect(() => {
//     projectData();
//     document.addEventListener('projectUpdate', ({ detail }) => {
//       projectData();
//     });
//     return () => {
//       document.removeEventListener('projectUpdate', {}, false);
//     };
//   }, []);

//   const openModal = useCallback(() => {
//     setModalState(true);
//   }, []);

//   const closeModal = useCallback(() => {
//     setModalState(false);
//   }, []);

//   const projectData = () => {
//     axios.get('http://localhost:9000/projects')
//       .then((res) => {
//         console.log('Projects:', res.data);
//         setProjects(res.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching projects:', error);
//       });
//   };
//   axios.post('http://localhost:9000/project', projectData)
//   .then((res) => {
//     console.log('Project created:', res.data);
//     closeModal();
//     document.dispatchEvent(new Event('projectUpdate'));
//   })
//   .catch((error) => {
//     console.error('Error creating project:', error);
//   });

//   const handleLocation = (e) => {
//     e.preventDefault();
//     const newParams = new URL(e.currentTarget.href).pathname.slice(1);
//     console.log('New Params:', newParams);
//     setParamsWindow(newParams);
//   };

//   return (
//     <div className='py-5'>
//       <div className="px-4 mb-3 flex items-center justify-between">
//         <span style={{marginLeft:'0px',marginRight:'20px'}}>Projects</span>
//         <button onClick={openModal} className='bg-indigo-200 rounded-full p-[2px] focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-offset-1'>
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-indigo-600">
//             <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
//           </svg>
//         </button>
//       </div>
//       <ul className='border-r border-gray-300 pr-2'>
//         {projects.map((project, index) => (
//           <Link key={index} to={project._id ? `/${project._id}` : '/'} onClick={(e) => handleLocation(e)}>
//   <li className={`px-5 py-1.5 mb-1 text-gray-600 font text-sm capitalize select-none hover:text-indigo-600 rounded transition-colors hover:bg-indigo-200/80 ${paramsWindow === project._id && 'text-indigo-600 bg-indigo-200/80'}`}>
//     {project.title}
//   </li>
//   {/* <p>Project ID: {project._id}</p> */}
// </Link>
//         ))}
//       </ul>
//       <AddProjectModal isModalOpen={isModalOpen} closeModal={closeModal} />
//     </div>
//   );
// };

// export default Sidebar;


{/* <p>Project ID: {project._id}</p> */}

const Sidebar = (props) => {
  const [isModalOpen, setModalState] = useState(false);
  const [projects, setProjects] = useState([]);
  const [paramsWindow, setParamsWindow] = useState(window.location.pathname.slice(1));
  const createProject = () => {
    const projectData = {
      title: 'Project Title',
      description: 'Project Description',
      assignedTo: 'Assigned User',
      userId: props.id.id,
    };

    axios.post('https://project-planner-server1.onrender.com/project', projectData)
      .then((res) => {
        console.log('Project created:', res.data);
        closeModal();
        document.dispatchEvent(new Event('projectUpdate'));
      })
      .catch((error) => {
        console.error('Error creating project:', error);
      });
  };

  useEffect(() => {
    {console.log(props.id.id,"akjsbjsnfs")}
    // projectData();
    // document.addEventListener('projectUpdate', () => {
    //   projectData();
    // });
    // return () => {
    //   document.removeEventListener('projectUpdate', {}, false);
    // };
    var rr=[]
    var count=0;
    axios.get('https://project-planner-server1.onrender.com/project')
      .then((res) => {
        console.log(res.data,props.id)
        res.data.map((val,index)=>{
          if(val.userid===props.id){
            rr[count]=val;
            count+=1
          }
          setProjects(rr);
        })
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
      });
      console.log(rr,projects)
  }, [props.id]);

  const openModal = useCallback(() => {
    setModalState(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalState(false);
  }, []);

  // const createProject = () => {
  //   const projectData = {
  //     title: 'Project Title',
  //     description: 'Project Description',
  //     assignedTo: 'Assigned User',
  //     userId: 'User ID',
  //   };

  //   axios.post('http://localhost:9000/project', projectData)
  //     .then((res) => {
  //       console.log('Project created:', res.data);
  //       closeModal();
  //       document.dispatchEvent(new Event('projectUpdate'));
  //     })
  //     .catch((error) => {
  //       console.error('Error creating project:', error);
  //     });
  // };

  const projectData = () => {
    // var rr=[]
    // var count=0;
    // axios.get('http://localhost:9000/project')
    //   .then((res) => {
    //     res.data.map((val,index)=>{
    //       if(val.userid===props.id){
    //         rr[count]=val;
    //         count+=1
    //       }
    //       setProjects(rr);
    //     })
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching projects:', error);
    //   });

  };

  const handleLocation = (e,data) => {
    e.preventDefault(); // Corrected from data.preventDefault() to data.preventDefault()
    console.log("clicked")
    props.getPrId(data);
    const newParams = new URL(e.currentTarget.href).pathname.slice(1);
    console.log('New Params:', newParams);
    setParamsWindow(newParams);
  };

  return (
    <div className='py-5'>
      <div className="px-4 mb-3 flex items-center justify-between">
        <span style={{ marginLeft: '0px', marginRight: '20px' }}>Projects</span>
        <button onClick={openModal} className='bg-indigo-200 rounded-full p-[2px] focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-offset-1'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-indigo-600">
            <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <ul className='border-r border-gray-300 pr-2'>
      {console.log(projects,"askjfksjdf")}
        {projects.map((project, index) => (
          <Link key={index}  onClick={(e) => handleLocation(e,{id:project._id,name:project.title})}>
            <li className={`px-5 py-1.5 mb-1 text-gray-600 font text-sm capitalize select-none hover:text-indigo-600 rounded transition-colors hover:bg-indigo-200/80 ${paramsWindow === project._id && 'text-indigo-600 bg-indigo-200/80'}`}>
              {project.title}
            </li>
          </Link>
        ))}
      </ul>
      <AddProjectModal id={props.id} isModalOpen={isModalOpen} closeModal={closeModal} createProject={createProject} />
    </div>
  );
};

export default Sidebar;
