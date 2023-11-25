// import React, { Fragment, useEffect, useState } from 'react';
// import { Dialog, Transition } from '@headlessui/react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import BtnPrimary from './BtnPrimary';
// import BtnSecondary from './BtnSecondary';

// const AddTaskModal = ({ isAddTaskModalOpen, setAddTaskModal, projectId = null, taskId = null, edit = false, refreshData }) => {
//   console.log(projectId);
//   const [title, setTitle] = useState('');
//   const [desc, setDesc] = useState('');
//   const [assignedto, setAssignedto] = useState('');

//   const resetForm = () => {
//     setTitle('');
//     setDesc('');
//     setAssignedto('');
//   };

//   useEffect(() => {
//     // const fetchData = async () => {

//     //   if (edit && isAddTaskModalOpen && projectId !== null && taskId !== null) {
//     //     try {
//     //       const res = await axios.get(`http://localhost:9000/projects/${projectId}/tasks/${taskId}`);
//     //       const taskData = res.data;

//     //       if (taskData) {
//     //         setTitle(taskData.title);
//     //         setDesc(taskData.description);
//     //         setAssignedto(taskData.assignedTo);
//     //       } else {
//     //         toast.error('Task data not found');
//     //       }
//     //     } catch (error) {
//     //       console.error(error);
//     //       toast.error('Something went wrong');
//     //     }
//     //   }
//     // };
//     const fetchData = async () => {
//       if (edit && isAddTaskModalOpen && projectId !== null && taskId !== null) {
//         try {
//           const res = await axios.get(`http://localhost:9000/project/${projectId}`);
//           const taskData = res.data;
    
//           if (taskData) {
//             setTitle(taskData.title);
//             setDesc(taskData.description);
//             setAssignedto(taskData.assignedTo);
//           } else {
//             toast.error('Task data not found');
//           }
//         } catch (error) {
//           console.error(error);
//           toast.error('Something went wrong');
//         }
//       }
//     };
    
//     fetchData();
//   }, [isAddTaskModalOpen, edit, projectId, taskId]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const taskData = {
//       title,
//       description: desc,
//       assignedTo: assignedto,
//       projectId: projectId, // Make sure projectId is correctly set
//     };

//     if (!edit) {
//       axios
//         .post(`http://localhost:9000/tasks`, taskData)
//         .then((res) => {
//           setAddTaskModal(false);
//           toast.success('Task created successfully');
//           resetForm();
//         })
//         .catch((error) => {
//           console.error(error);
//           toast.error('Error creating task');
//         });
//     } else {
//       axios
//         .put(`http://localhost:9000/tasks/${taskId}`, taskData)
//         .then((res) => {
//           setAddTaskModal(false);
//           toast.success('Task is updated');
//           refreshData(true);
//           resetForm();
//         })
//         .catch((error) => {
//           console.error(error);
//           toast.error('Error updating task');
//         });
//     }
//   };
//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
  
//   //   const taskData = {
//   //     title,
//   //     description: desc,
//   //     assignedTo: assignedto,
//   //     projectId: projectId,
//   //   };
  
//   //   // Check if projectId exists before making the request
//   //   axios.get(`http://localhost:9000/projects/${projectId}`)
//   //     .then((response) => {
//   //       // Project exists, proceed with creating/updating the task
//   //       if (!edit) {
//   //         axios.post(`http://localhost:9000/tasks`, taskData)
//   //           .then((res) => {
//   //             setAddTaskModal(false);
//   //             toast.success('Task created successfully');
//   //             resetForm();
//   //           })
//   //           .catch((error) => {
//   //             console.error(error);
//   //             toast.error('Error creating task');
//   //           });
//   //       } else {
//   //         axios.put(`http://localhost:9000/tasks/${taskId}`, taskData)
//   //           .then((res) => {
//   //             setAddTaskModal(false);
//   //             toast.success('Task is updated');
//   //             refreshData(true);
//   //             resetForm();
//   //           })
//   //           .catch((error) => {
//   //             console.error(error);
//   //             toast.error('Error updating task');
//   //           });
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       // Project does not exist, show an error message
//   //       console.error(error);
//   //       toast.error('Project does not exist');
//   //     });
//   // };


  import React, { Fragment, useEffect, useState } from 'react';
  import { Dialog, Transition } from '@headlessui/react';
  import axios from 'axios';
  import toast from 'react-hot-toast';
  import BtnPrimary from './BtnPrimary';
  import BtnSecondary from './BtnSecondary';
  
  // const AddTaskModal = ({ isAddTaskModalOpen, setAddTaskModal, newParams, projectId = null, taskId = null, edit = false, refreshData }) => {
  //   const [title, setTitle] = useState('');
  //   const [desc, setDesc] = useState('');
  //   const [assignedto, setAssignedto] = useState('');
  //   const [currentProjectId, setCurrentProjectId] = useState(newParams || projectId);
  
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       if (edit && isAddTaskModalOpen && currentProjectId !== null && taskId !== null) {
  //         try {
  //           const res = await axios.get(`http://localhost:9000/project/${currentProjectId}`);
  //           const taskData = res.data;
  
  //           if (taskData) {
  //             setTitle(taskData.title);
  //             setDesc(taskData.description);
  //             setAssignedto(taskData.assignedTo);
  //           } else {
  //             toast.error('Task data not found');
  //           }
  //         } catch (error) {
  //           console.error(error);
  //           toast.error('Something went wrong');
  //         }
  //       }
  //     };
  
  //     fetchData();
  //   }, [isAddTaskModalOpen, edit, currentProjectId, taskId]);
  
  const AddTaskModal = ({ isAddTaskModalOpen, setAddTaskModal, newParams, projectId, taskId = null, edit = false, refreshData }) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [assignedto, setAssignedto] = useState('');
    const [currentProjectId, setCurrentProjectId] = useState(newParams || projectId);
  
    useEffect(() => {
      const fetchData = async () => {
        if (edit && isAddTaskModalOpen && currentProjectId !== null && taskId !== null) {
          try {
            const res = await axios.get(`https://project-planner-server1.onrender.com/project/${currentProjectId}`);
            const taskData = res.data;
            // Rest of your code
          } catch (error) {
            // Handle errors
          }
        }
      };
  
      fetchData();
    }, [isAddTaskModalOpen, edit, currentProjectId, taskId, newParams]);
    
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const taskData = {
        title,
        description: desc,
        assignedTo: assignedto,
        projectId: projectId,
      };
  
      if (!edit) {
        axios
          .post(`https://project-planner-server1.onrender.com/tasks`, taskData)
          .then((res) => {
            setAddTaskModal(false);
            toast.success('Task created successfully');
            resetForm();
          })
          .catch((error) => {
            console.error(error);
            toast.error('Error creating task');
          });
      } else {
        axios
          .put(`https://project-planner-server1.onrender.com/tasks/update/${taskId}`, taskData)
          .then((res) => {
            setAddTaskModal(false);
            toast.success('Task is updated');
            refreshData(true);
            resetForm();
            window.location.reload();
          })
          .catch((error) => {
            console.error(error);
            toast.error('Error updating task');
          });
      }
    };
  
    const resetForm = () => {
      setTitle('');
      setDesc('');
      setAssignedto('');
    };
  
    
  return (
    <Transition appear show={isAddTaskModalOpen} as={Fragment}>
      <Dialog as="div" open={isAddTaskModalOpen} onClose={() => setAddTaskModal(false)} className="relative z-50">
        <div className="fixed inset-0 overflow-y-auto">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>
          <div className="fixed inset-0 flex items-center justify-center p-4 w-screen h-screen">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="rounded-md bg-white w-6/12">
                <Dialog.Title as="div" className={'bg-white shadow px-6 py-4 rounded-t-md sticky top-0'}>
                  {!edit ? <h1 style={{ color: 'blue' }}>Add Task</h1> : <h1>Edit Task</h1>}
                  <button
                    onClick={() => setAddTaskModal(false)}
                    className="absolute right-6 top-4 text-gray-500 hover:bg-gray-100 rounded focus:outline-none focus:ring focus:ring-offset-1 focus:ring-indigo-200 "
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </Dialog.Title>
                <form onSubmit={handleSubmit} className="gap-4 px-8 py-4">
                  <div className="mb-3">
                    <label htmlFor="title" className="block text-yellow-600">
                      Title
                    </label>
                    <input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      type="text"
                      className="border border-gray-300 rounded-md w-full text-sm py-2 px-2.5 focus:border-indigo-500 focus:outline-offset-1 focus:outline-indigo-400"
                      placeholder="Task title"
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="Description" className="block text-gray-600">
                      Description
                    </label>
                    <textarea
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                      className="border border-gray-300 rounded-md w-full text-sm py-2 px-2.5 focus:border-indigo-500 focus:outline-offset-1 focus:outline-indigo-400"
                      rows="3"
                      placeholder="Task description"
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="AssignedTo" className="block text-blue-600">
                      Assigned to
                    </label>
                    <input
                      value={assignedto}
                      onChange={(e) => setAssignedto(e.target.value)}
                      type="text"
                      className="border border-gray-300 rounded-md w-full text-sm py-2 px-2.5 focus:border-indigo-500 focus:outline-offset-1 focus:outline-indigo-400"
                      placeholder="Project assigned to"
                    />
                  </div>
                  <div className="flex justify-end items-center space-x-2">
                    <BtnSecondary onClick={() => setAddTaskModal(false)}>Cancel</BtnSecondary>
                    <BtnPrimary type="submit">Save</BtnPrimary>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AddTaskModal;

