// import React, { Fragment, memo, useEffect, useState } from 'react'
// import { Dialog, Transition } from '@headlessui/react'
// import BtnPrimary from './BtnPrimary'
// import BtnSecondary from './BtnSecondary'
// import axios from "axios"
// import toast from 'react-hot-toast'

// const AddProjectModal = ({ props.props.isModalOpen, props.closeModal, props.edit = false, props.id = null }) => {

//     const [title, setTitle] = useState('')
//     const [desc, setDesc] = useState('');

//     useEffect(() => {
//         if (props.edit && props.isModalOpen) {
//             axios.get(`http://localhost:9000/project/${props.id}`)
//                 .then((res) => {
//                     setTitle(res.data[0].title)
//                     setDesc(res.data[0].description)
//                 })
//                 .catch((error) => {
//                     toast.error('Something went wrong')
//                 })
//         }
//     }, [props.isModalOpen]);


//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if (!props.edit) {
//             axios.post('http://localhost:9000/project/', { title, description: desc })
//                 .then((res) => {
//                     props.closeModal()
//                     const customEvent = new CustomEvent('projectUpdate', { detail: { ...res.data } });
//                     document.dispatchEvent(customEvent);
//                     toast.success('Project created successfully')
//                     setTitle('')
//                     setDesc('')
//                 })
//                 .catch((error) => {
//                     if (error.response.status === 422) {
//                         toast.error(error.response.data.details[0].message)
//                     } else {
//                         toast.error('Something went wrong')
//                     }
//                 })
//         } else {
//             axios.put(`http://localhost:9000/project/${props.id}`, { title, description: desc })
//                 .then((res) => {
//                     props.closeModal()
//                     const customEvent = new CustomEvent('projectUpdate', { detail: { ...res.data } });
//                     document.dispatchEvent(customEvent);
//                     toast.success('Project updated successfully')
//                     setTitle('')
//                     setDesc('')
//                 })
//                 .catch((error) => {
//                     if (error.response.status === 422) {
//                         toast.error(error.response.data.details[0].message)
//                     } else {
//                         toast.error('Something went wrong')
//                     }
//                 })
//         }

//     }

//     return (
//         <Transition appear show={props.isModalOpen} as={Fragment}>
//             <Dialog as='div' open={props.isModalOpen} onClose={() => props.closeModal()} className="relative z-50">
//                 <div className="fixed inset-0 overflow-y-auto">
//                     <Transition.Child
//                         as={Fragment}
//                         enter="ease-out duration-300"
//                         enterFrom="opacity-0"
//                         enterTo="opacity-100"
//                         leave="ease-in duration-200"
//                         leaveFrom="opacity-100"
//                         leaveTo="opacity-0"
//                     >
//                         <div className="fixed inset-0 bg-black/30" />
//                     </Transition.Child>
//                     <div className="fixed inset-0 flex items-center justify-center p-4 w-screen h-screen ">
//                         {/* <div className="fixed inset-0 "> */}
//                         <Transition.Child
//                             as={Fragment}
//                             enter="ease-out duration-300 "
//                             enterFrom="opacity-0 scale-95"
//                             enterTo="opacity-100 scale-100"
//                             leave="ease-in duration-200"
//                             leaveFrom="opacity-100 scale-100"
//                             leaveTo="opacity-0 scale-95"
//                         >
//                             <Dialog.Panel className="rounded-md bg-white w-6/12">

//                                 <Dialog.Title as='div' className={'bg-white shadow px-6 py-4 rounded-t-md sticky top-0'}>
//                                     {props.edit ? (<h1>props.edit Project</h1>) : (<h1 style={{color:'red'}}>Create Project</h1>)}
//                                     <button onClick={() => props.closeModal()} className=' absolute right-6 top-4 text-gray-500 hover:bg-gray-100 rounded focus:outline-none focus:ring focus:ring-offset-1 focus:ring-red-200 '>
//                                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" w-6 h-6">
//                                             <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
//                                         </svg>
//                                     </button>
//                                 </Dialog.Title>
//                                 <form onSubmit={handleSubmit} className='gap-4 px-8 py-4'>
//                                     <div className='mb-3'>
//                                         <label htmlFor="title" className='block text-blue-600'>Title</label>
//                                         <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className='border border-gray-300 rounded-md w-full text-sm py-2 px-2.5 focus:border-indigo-500 focus:outline-offset-1 focus:outline-red-400' placeholder='Project title' />
//                                     </div>
//                                     <div className='mb-2'>
//                                         <label htmlFor="Description" className='block text-blue-600'>Description</label>
//                                         <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className='border border-gray-300 rounded-md w-full text-sm py-2 px-2.5 focus:border-indigo-500 focus:outline-offset-1 focus:outline-red-400' rows="6" placeholder='Project description'></textarea>
//                                     </div>
//                                     {/* <div className='mb-2'>
//                                         <label htmlFor="AssignedTo" className='block text-blue-600'>Assigned to</label>
//                                         <input value={assignedto} onChange={(e) => setAssignedto(e.target.value)} className='border border-gray-300 rounded-md w-full text-sm py-2 px-2.5 focus:border-indigo-500 focus:outline-offset-1 focus:outline-red-400' rows="6" placeholder='Project Assigned to'/>
//                                     </div> */}
//                                     <div className='flex justify-end items-center space-x-2'>
//                                         <BtnSecondary onClick={() => props.closeModal()}>Cancel</BtnSecondary>
//                                         <BtnPrimary>Save</BtnPrimary>
//                                     </div>
//                                 </form>

//                             </Dialog.Panel>
//                         </Transition.Child>

//                     </div>
//                 </div>
//             </Dialog>
//         </Transition>
//     )
// }

// export default memo(AddProjectModal)
import React, { Fragment, memo, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import BtnPrimary from './BtnPrimary';
import BtnSecondary from './BtnSecondary';
import axios from 'axios';
import toast from 'react-hot-toast';

// const AddProjectModal = ({ props.isModalOpen, props.closeModal, props.edit = false, props.id = null }) => {
//   const [title, setTitle] = useState('');
//   const [desc, setDesc] = useState('');
//   const [assignedto, setAssignedto] = useState('');


  // useEffect(() => {
  //   if (props.edit && props.isModalOpen) {
  //     axios
  //       .get(`http://localhost:9000/project/${props.id}`)
  //       .then((res) => {
  //         const projectData = res.data[0];
  //         if (projectData) {
  //           setTitle(projectData.title);
  //           setDesc(projectData.description);
  //           setAssignedto(projectData.assignedTo);
  //         } else {
  //           toast.error('Project data not found');
  //         }
  //       })
  //       .catch((error) => {
  //         if (error.response && error.response.status === 422) {
  //           toast.error(error.response.data.details[0].message);
  //         } else {
  //           toast.error('Something went wrong');
  //         }
  //       });
  //   }
  // }, [props.edit, props.id, props.isModalOpen]);
  // useEffect(() => {
  //   if (props.edit && props.isModalOpen && props.id !== null) {  // Check if props.id is not null
  //     axios
  //       .get(`http://localhost:9000/project/${props.id}`)

  const AddProjectModal = (props) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [assignedto, setAssignedto] = useState('');
  
    useEffect(() => {
      if (props.edit && props.id !== null) {
        // axios
        //   .get(`http://localhost:9000/project/${props.newParams}`)
        // .then((res) => {
        //   const projectData = res.data[0];
        //   if (projectData) {
        //     setTitle(projectData.title);
        //     setDesc(projectData.description);
        //     setAssignedto(projectData.assignedTo);
        //   } else {
        //     toast.error('Project data not found');
        //   }
        // })
        // .catch((error) => {
        //   if (error.response && error.response.status === 422) {
        //     toast.error(error.response.data.details[0].message);
        //   } else {
        //     toast.error('Something went wrong');
        //   }
        // });
    }
  },[props.edit, props.id, props.isModalOpen, props.newParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props.id)
    // const projectData = { title, description: desc, assignedto };
    const projectData = {
      title,
      description: desc,
      assignedTo: assignedto,
      userid:props.id
    };

    const handleSuccess = (message) => {
      props.closeModal();
      toast.success(message); // Show success toast
      setTitle('');
      setDesc('');
      setAssignedto('');
    };

    const handleError = (error) => {
      if (error.response && error.response.status === 422) {
        toast.error(error.response.data.details[0].message); // Show error toast
      } else {
        toast.error('Something went wrong');
      }
    };

    if (!props.edit) {
      axios
        .post('https://project-planner-server1.onrender.com/project/', projectData)
        .then((res) => {
          handleSuccess('Project created successfully');
          const { data } = res;
          if (data) {
            document.dispatchEvent(new CustomEvent('projectUpdate', { detail: { ...data } }));
          }
          window.location.reload();
        })
        .catch(handleError);
    } else {
      axios
        .put(`https://project-planner-server1.onrender.com/project/${props.prid}`, projectData)
        .then(() => {handleSuccess('Project updated successfully')
        window.location.reload()
      
      })
        .catch(handleError);
    }
  };

  return (
    <Transition appear show={props.isModalOpen} as={Fragment}>
      <Dialog as="div" open={props.isModalOpen} onClose={() => props.closeModal()} className="relative z-50">
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
          <div className="fixed inset-0 flex items-center justify-center p-4 w-screen h-screen ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300 "
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="rounded-md bg-white w-6/12">
                <Dialog.Title as="div" className={'bg-white shadow px-6 py-4 rounded-t-md sticky top-0'}>
                  {props.edit ? <h1>Edit Project</h1> : <h1 style={{ color: 'red' }}>Create Project</h1>}
                  <button
                    onClick={() => props.closeModal()}
                    className=" absolute right-6 top-4 text-gray-500 hover:bg-gray-100 rounded focus:outline-none focus:ring focus:ring-offset-1 focus:ring-red-200 "
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" w-6 h-6">
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
                    <label htmlFor="title" className="block text-blue-600">
                      Title
                    </label>
                    <input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      type="text"
                      className="border border-gray-300 rounded-md w-full text-sm py-2 px-2.5 focus:border-indigo-500 focus:outline-offset-1 focus:outline-red-400"
                      placeholder="Project title"
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="Description" className="block text-blue-600">
                      Description
                    </label>
                    <textarea
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                      className="border border-gray-300 rounded-md w-full text-sm py-2 px-2.5 focus:border-indigo-500 focus:outline-offset-1 focus:outline-red-400"
                      placeholder="Project description"
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
                      className="border border-gray-300 rounded-md w-full text-sm py-2 px-2.5 focus:border-indigo-500 focus:outline-offset-1 focus:outline-red-400"
                      placeholder="Project assigned to"
                    />
                  </div>
                  <div className="flex justify-end items-center space-x-2">
                    <BtnSecondary onClick={() => props.closeModal()}>Cancel</BtnSecondary>
                    <BtnPrimary>
                      <button type="button" onClick={handleSubmit}>
                        Save
                      </button>
                    </BtnPrimary>
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

export default memo(AddProjectModal);
