// import React, { Component } from "react";
// import { ReactMultiEmail } from "react-multi-email";
// import "react-multi-email/style.css";
// import "semantic-ui-css/semantic.min.css";
// import { Icon, Label } from "semantic-ui-react";
// import firebase from "firebase";
// import InviteSuccess from "./InviteSuccess";
// import { Modal, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// require('dotenv').config();

// class InviteEmail extends Component {
//   state = {
//     email: [],
//     displayName: firebase.auth().currentUser.displayName,
//     showSuccess: false,
//     closeSucsess: false,
//     showError: false,
//     closeError: false,
//     errorMessage: false,
//     inviteSuccessMessage: 'The invitaions has been sent successfully'
//   };
//   // handleChange = (e) => {
//   //   this.setState({
//   //     [e.target.id]: e.target.value,
//   //   });
//   // };
//   handleCloseSuccess = () => {
//     this.setState({ showSuccess: false });
//   };
//   handleShowSuccess = () => {
//     this.setState({ showSuccess: true });
//   };

//   handleCloseError = () => {
//     this.setState({ showError: false });
//   };
//   handleShowError = () => {
//     this.setState({ showError: true });
//   };
//   sendEmail = (e) => {
//     const { email } = this.state;
//     const { displayName } = this.state;

//     if (this.state.email.length === 0) {
//       alert("Please Enter email id to send invite");
//     } else {
//       fetch(
//         process.env.REACT_APP_SERVER +
//         `/InviteFriends?recipient=${email}&name=${displayName}`
//       ) //query string url
//         .then(this.setState({ showSuccess: true }))

//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   };

//   render() {
//     const { email } = this.state;
//     const myStyle = {};
//     return (
//       <>
//         <div>
//           <ReactMultiEmail
//             style={myStyle}
//             email={email}
//             placeholder="Enter Email Address"
//             onChange={(_email) => {
//               this.setState({ email: _email });
//             }}
//             getLabel={(email, index, removeEmail) => {
//               return (
//                 <Label key={index}>
//                   {email}

//                   <Icon name="delete" onClick={() => removeEmail(index)}></Icon>
//                 </Label>
//               );
//             }}
//           />

//           <button className="btn btn-primary mt-4" onClick={this.sendEmail}>
//             {" "}
//             Send Email{" "}
//           </button>
//         </div>
//         <>
//           <Modal
//             show={this.state.showSuccess}
//             onHide={this.handleCloseSuccess}
//             animation={false}
//           >
//             <Modal.Header closeButton>
//               <Modal.Title>
//                 <img src="../assets/invite-success.png" />
//               </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <h3 className="invite-success"> Successful</h3>
//               <p className="invite-success-msg">
//                   {this.state.inviteSuccessMessage}
//               </p>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button onClick={this.handleCloseSuccess}>
//                 {" "}
//                 Send more Invites
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         </>
//         <>
//           <Modal
//             show={this.state.showError}
//             onHide={this.handleCloseError}
//             animation={false}
//           >
//             <Modal.Header closeButton>
//               <Modal.Title>
//                 <img src="../assets/invite-error.png" />
//               </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <h3 className="invite-success"> Something went wrong</h3>
//               <p className="invite-success-msg">
//                 The invitation has not been sent due to technical issue{" "}
//               </p>

//               <Link to="/InviteFriends">
//                 <Button
//                   className="btn-danger"
//                   id="try-again-btn"
//                   onClick={this.handleCloseError}
//                 >
//                   {" "}
//                   Try again
//                 </Button>
//               </Link>
//             </Modal.Body>
//           </Modal>
//         </>
//       </>
//     );
//   }
// }
// export default InviteEmail;

import React from "react";

const InviteEmail = () => {
  return (
    <div>
      <input type="text" placeholder="Enter the Email" />
    </div>
  );
};

export default InviteEmail;
