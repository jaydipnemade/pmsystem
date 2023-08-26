// import { useForm } from "react-hook-form";


// function RecruiterInfo(){

//     return (
//     <>
//       <div className="row justify-content-center">
//         <div className="box col-sm-12 col-md-6 m-5 py-5 rounded shadow-lg p-3 mb-5 rounded ">
//           <div className="text mb-3 text-center">Recruiter Information</div>
//            <form className="form px-5">

//             <div className="CompanyName ">
//               <div className="mb-2">Company Name</div>
//                 <input
//                     type="text"
//                     className="company-input form-control form-control-lg mb-2"
//                     placeholder="Enter Company Name"
//                     name="company"
//                 />
//             </div>

//             <div className="Number mt-4">
//               <div className="mb-2">Contact No.</div>
//                 <input
//                     type="number"
//                     className="number-input form-control form-control-lg mb-2"
//                     placeholder="Enter Phone Number"
//                     name="number"
//                 />
//             </div>


//             <div className="Technology mt-4">
//               <div className="mb-2">Technology</div>
//                 <input
//                     type="text"
//                     className="technology-input form-control form-control-lg mb-2"
//                     placeholder="Enter the technology"
//                     name="number"
//                 />
//             </div>

//             <div className="Description mt-4">
//               <div className="mb-2">Description</div>
//               <textarea className="form-control"  rows="3" placeholder="Type here"/>
//             </div>



//             <div className="Button mt-5 d-flex justify-content-center">
//               <button
//                 type="submit"
//                 className="Button w-50 btn btn-primary btn-lg mb-5 rounded-pill"
//               >
//                 Submit
//               </button>
//             </div>

//           </form>

//         </div>
//     </div>
//        </>
//     );
// }

// export default RecruiterInfo;


import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import { Axios } from "axios";
import "./RecruiterInfo.css";
import company from "./company.jpg";

function RecruiterInfo() {
    const [companyName, setCompanyName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [technology, setTechnology] = useState('');
    const [description, setDescription] = useState('');
    const [date, setdate] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await Axios.post('http://localhost:8080', {
                companyName: data.text,
                contactNumber: data.number,
                technology: data.text,
                description,
                date
            });
    
            console.log('Data sent successfully:', response.data);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };
    
    return (
        <>
            <div className="row justify-content-center">
                <div className="box col-sm-12 col-md-8 m-5 py-5 rounded shadow-lg p-3 mb-5 rounded ">
                     <div>
                        <img src={company} className="img-fluid"/>
                     </div>
                    <div className="text mb-3 text-center"><h2>Recruiter Information</h2></div>
                    <form className="form px-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="CompanyName ">
                            <label htmlFor="company">Company Name</label>
                            <input
                                type="text"
                                {...register("text", { required:true })}
                                className="company-input form-control form-control-lg mb-2"
                                placeholder="Enter Company Name"
                                id="company"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                             <span className="text-danger">
                              { errors.text?.type==="required" && "Company name is Required"}
                            </span>
                        </div>

                        <div className="Number mt-4">
                            <label htmlFor="number">Contact No.</label>
                            <input
                                type="number"


                                {...register("number", { required:true, pattern:"/^[6-9]\d{9}$/" })}
                                className="number-input form-control form-control-lg mb-2"
                                placeholder="Enter Phone Number"
                                id="number"
                                value={contactNumber}
                                onChange={(e) => setContactNumber(e.target.value)}
                            />
                             <span className="text-danger">
                              { errors.number?.type==="required" && "Contact number is Required"}
                            </span>
                        </div>

                        <div className="Technology mt-4">
                            <label htmlFor="technology">Technology</label>
                            <input
                                type="text"
                                {...register("text", { required:true })}
                                className="technology-input form-control form-control-lg mb-2"
                                placeholder="Enter the technology"
                                id="technology"
                                value={technology}
                                onChange={(e) => setTechnology(e.target.value)}
                            />
                            <span className="text-danger">
                              { errors.text?.type==="required" && "Technology is Required"}
                            </span>
                        </div>

                        <div className="Date mt-4">
                            <label htmlFor="date">Date</label>
                            <input   
                                type="date"
                                {...register("date", { required:true })}
                                className="form-control datepicker"
                                id="date"
                                value={date}
                                onChange={(e) => setdate(e.target.value)}
                            />
                             <span className="text-danger">
                              { errors.date?.type==="required" && "date is Required"}
                            </span>
                        </div>

                        <div className="Description mt-4">
                            <label htmlFor="description">Description</label>
                            <textarea
                                className="form-control"
                                rows="3"
                                placeholder="Type here"
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <div className="Button mt-5 d-flex justify-content-center">
                            <button
                                type="submit"
                                className="Button w-50 btn btn-primary btn-lg mb-5 rounded-pill"
                            >
                                Submit
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}

export default RecruiterInfo;


// [789][0-9]{9}