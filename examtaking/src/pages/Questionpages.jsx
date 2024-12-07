// import React, { useEffect, useState } from "react";
// import "./App.css"; // Add your CSS styles
// import { useSelector } from "react-redux";
// const [arr, setArr] = useState([{'question':'','options':['a','b','c','f']}]);
// const Questionpages = () => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [questionStatus, setQuestionStatus] = useState(
//     Array(30).fill("not-viewed")
//   );
//   const [questionno,setquestionno]=useState(0);
//   const [isSidebarVisible, setIsSidebarVisible] = useState(true);

//   const handleOptionChange = (option) => setSelectedOption(option);

//   const handleSave = (index) => {
//     const updatedStatus = [...questionStatus];
//     updatedStatus[index] = "attempted";
//     setQuestionStatus(updatedStatus);
//     setquestionno((prevQuestionNo) => prevQuestionNo + 1);
//   };

//   const handleReviewLater = (index) => {
//     const updatedStatus = [...questionStatus];
//     updatedStatus[index] = "to-review";
//     setQuestionStatus(updatedStatus);
//   };

//   useEffect(()=>{
//     // arr=JSON.parse(localStorage.getItem('questionarr'));
//     console.log(arr);
    

//   },[])

  
 
  
   
   
//   return (
//     <div className="quiz-app">
//       {/* Header */}
//       <header className="header">
//         {/* <div className="subjects">
//           <button>Physics</button>
//           <button>Chemistry</button>
//           <button className="active">Biology</button>
//           <button>Reasoning</button>
//           <button>English</button>
//         </div> */}
//         <div className="timer">TIMER</div>
//       </header>

//       {/* Main Content */}
//       <div className="main">
//         {/* Question Section */}
//         <div className="question-section">
//           <h3>Question No: {questionno+1}</h3>
//           <p>{arr[questionno].question}</p>
//           <div className="options">
//             {[arr[questionno].options[0].a,arr[questionno].options[0].b,arr[questionno].options[0].c,arr[questionno].options[0].d].map(
//               (option, index) => (
//                 <label key={index}>
//                   <input
//                     type="radio"
//                     name="answer"
//                     value={option}
//                     checked={selectedOption === option}
//                     onChange={() => handleOptionChange(option)}
//                   />
//                   {option}
//                 </label>
//               )
//             )}
//           </div>
//           <div className="actions">
//             <button onClick={() => handleSave(3)}>Next Question</button>
//             <button onClick={() => handleReviewLater(3)}>Review Later</button>
//             <button onClick={() => setSelectedOption(null)}>
//               Clear Selection
//             </button>
//           </div>
//         </div>

//         {/* Sidebar */}
//         <div className={`sidebar ${isSidebarVisible ? "visible" : "hidden"}`}>
//           <button
//             className="toggle-button"
//             onClick={() => setIsSidebarVisible(!isSidebarVisible)}
//           >
//             {isSidebarVisible ? "❮" : "❯"}
//           </button>
//           {isSidebarVisible && (
//             <div>
//               <h4>Question Overview</h4>
//               <div className="overview">
//                 {questionStatus.map((status, index) => (
//                   <div
//                     key={index}
//                     className={`question-status ${status}`}
//                     title={status}
//                   >
//                     {index + 1}
//                   </div>
//                 ))}
//               </div>
//               <ul>
//                 <li>
//                   <span className="attempted"></span> Attempted
//                 </li>
//                 <li>
//                   <span className="not-attempted"></span> Not Attempted
//                 </li>
//                 <li>
//                   <span className="to-review"></span> To be reviewed
//                 </li>
//                 <li>
//                   <span className="not-viewed"></span> Not viewed yet
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Questionpages;
