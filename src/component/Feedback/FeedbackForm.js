// import React, { useState } from "react";
// import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import { InputGroup, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import { Col } from "react-bootstrap";
// import "react-phone-number-input/FeedbackForm.css";
// import PhoneInput from "react-phone-number-input";
// import Alert from "react-bootstrap/Alert";
// import "./FeedbackForm.css"


// function FeedbackForm() {
//   const [displayform, setDisplay] = useState(true);
//   const [em_value, setEmValue] = useState("");
//   const [nm_value, setNmValue] = useState("");
//   const [ph_value, setPhValue] = useState();

//   const [error_msg, setErrorMsg] = useState(
//     "Please enter the value for the above field"
//   );

//   const validateForm = () => {
//     setErrorMsg("Please enter the value for the above field");

//     [...document.getElementsByClassName("alert-danger")].forEach((element) => {
//       element.style.display = "none";
//     });
//     if (nm_value === "") {
//       document.getElementById("name_er").style.display = "block";
//     } else if (em_value === "") {
//       document.getElementById("email_er").style.display = "block";
//     } else if (!em_value.includes(".com") || !em_value.includes("@")) {
//       document.getElementById("email_er").style.display = "block";
//       setErrorMsg("Invalid Email");
//     } else if (!ph_value) {
//       document.getElementById("phone_er").style.display = "block";
//     } else if (ph_value.length < 13) {
//       document.getElementById("phone_er").style.display = "block";
//       setErrorMsg("Invalid Phone number");
//     } else return true;
//   };

//   const formSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       setDisplay(false);
//     }
//   };

//   return (
//     <Container>
//       {displayform ? (
//         <Card>
//           <Card.Header>
//             <cite title="Source Title">Your feedback is valuable for us.</cite>
//           </Card.Header>

//           <Container className="padding30px">
//             <Form>
//               <Row>
//                 <Col>
//                   <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label className="required-field">
//                       Your Name
//                     </Form.Label>
//                     <Form.Control
//                       type="text"
//                       required
//                       placeholder="E.g. jon snow"
//                       value={nm_value}
//                       onChange={(e) => setNmValue(e.target.value)}
//                     />
//                   </Form.Group>
//                   <Alert variant="danger" id="name_er">
//                     &#9432;{error_msg}
//                   </Alert>
//                 </Col>
//                 <Col>
//                   <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label className="required-field">
//                       Email address
//                     </Form.Label>
//                     <Form.Control
//                       type="email"
//                       required
//                       placeholder="E.g. abc@gmail.com"
//                       value={em_value}
//                       onChange={(e) => setEmValue(e.target.value)}
//                     />
//                   </Form.Group>
//                   <Alert variant="danger" id="email_er">
//                     &#9432;{error_msg}
//                   </Alert>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col>
//                   <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label className="required-field">Phone</Form.Label>
//                     <InputGroup>
//                       <PhoneInput
//                         placeholder="9999999999"
//                         value={ph_value}
//                         onChange={setPhValue}
//                       />
//                     </InputGroup>
//                   </Form.Group>
//                   <Alert variant="danger" id="phone_er">
//                     &#9432;{error_msg}
//                   </Alert>
//                 </Col>
//                 <Col></Col>
//               </Row>
//               <Form.Group controlId="feedbackText">
//                 <Form.Label>Feedback</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={4}
//                   name="feedbackText"
//                   placeholder="please enter your feedback!"
//                   required
//                 />
//               </Form.Group>

//               <Button className="btn_purp" onClick={(e) => formSubmit(e)}>
//                 Submit
//               </Button>
//             </Form>
//           </Container>
//         </Card>
//       ) : (
//         <Card bg="light" text="dark">
//           <Card.Body>
//             <div className="padding30px">
//               <div class="circle">
//                 <div class="checkmark"></div>
//               </div>
//             </div>
//             <Card.Text>Thank you for providing the feedback</Card.Text>
//             <Form.Text muted>
//               We will work towards improving your experience
//             </Form.Text>
//             <div className="padding30px">
//               <Button
//                 className="btn_purp"
//                 onClick={() => (window.location.href = "/")}
//               >
//                 Close
//               </Button>
//             </div>
//           </Card.Body>
//         </Card>
//       )}
//     </Container>
//   );
// }

// export default FeedbackForm;
