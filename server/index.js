const express = require("express"); //needed to launch server
const cors = require("cors"); //needed to disable sendgrid security
const sgMail = require("@sendgrid/mail"); //sendgrid library to send emails

// unrevealdOfficial@gmail.com;
// noreply@unreveald.com

const app = express();
const senderEmail = "noreply@unreveald.com";

//sendgrid api key
sgMail.setApiKey(
  // "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"
  "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"
);

app.use(cors()); //utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!

// Welcome page of the express server:
app.get("/", (req, res) => {
  res.send("Welcome to the Sendgrid Emailing Server");
});

app.get("/InviteFriends", (req, res) => {
  const { recipient, name } = req.query;

  var multiEmail = recipient;
  result = multiEmail.split(",");

  const msg = {
    to: result,
    from: senderEmail,
    subject: "Unreveald",
    html:
      '<div style="background-color: #f6f9ff; color:#2D2D2D;text-align: center; padding-top: 50px; padding-bottom: 50px;"><p style="padding: 15px 15px 15px 15px; margin: 0;"><a href="http://localhost:4000/"><img style="width: 80px;" src="https://www.inovarconsulting.co.in/staging/wp-content/uploads/2021/07/ur-logo.png" /></a></p><p style="font-size: 22px; font-weight: bold; margin: 0;">Hi,</p><p style="font-weight: bold; margin: 0;"><span style="font-family: Google Sans, Roboto, RobotoDraft, Helvetica, Arial, sans-serif;"><span style="font-size: 22px; font-variant-ligatures: no-contextual; font-weight: bold;">Your Friend&nbsp;</span><span style="font-size: 22px; font-variant-ligatures: no-contextual;">' +
      name +
      ', has invited you to UNREVEALD.</span></span></p  <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; margin: 0;"></p><p style="padding: 12px; margin: 0;"><img src="https://www.inovarconsulting.co.in/staging/wp-content/uploads/2021/07/email.png" /></p><p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; margin: 0;"><span style="background-color: #f6f9ff;"><a href="http://localhost:4000/signup" target="_blank" rel="noopener">Click Here to Accept Invitation</a></span></p></div>',
  };

  sgMail
    .sendMultiple(msg)
    .then(() => {
      console.log(
        "emails sent some successfully upon successful inviting friends!" +
          msg.to
      );
    })
    .catch((error) => {
      console.log(error);
    });

  return res.send(result);
});

app.get("/pending", (req, res) => {
  const { recipient, postedname } = req.query;

  const msg = {
    to: recipient,
    from: senderEmail,
    subject: "Unreveald - Post Pending",
    html:
      '<div style="background-color: #f6f9ff; color:#2D2D2D;text-align: center; padding-top: 50px; padding-bottom: 50px;"><p style="padding: 15px 15px 15px 15px; margin: 0;"><a href="http://localhost:4000/"> <img style="width: 80px;" src="https://www.inovarconsulting.co.in/staging/wp-content/uploads/2021/07/ur-logo.png" /></a></p><p style="font-size: 22px; font-weight: bold; margin: 0;text-transform: capitalize;">Hi ' +
      postedname +
      ', <br></p><p style="font-weight: bold; margin: 0;"><div style="font-family: Google Sans, Roboto, RobotoDraft, Helvetica, Arial, sans-serif;"><div style="font-size: 22px; font-variant-ligatures: no-contextual; font-weight: bold;">your post is under review!</div></div></p><p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; margin: 0;"></p><p style="padding: 12px; margin: 0;"><img src="https://www.inovarconsulting.co.in/staging/wp-content/uploads/2021/07/email.png" /></p><p style="padding: 12px; border-left: 4px solid #d0d0d0; font-size: 22.5px;font-weight: normal;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: -0.01px;text-align: center;color: #5d5f64; margin: 0;"> <span style="background-color: #f6f9ff;"> Your post is under review by Admin <br/> it will appear on the timeline once the admin approves. </span></p></div>',
  };

  sgMail
    .sendMultiple(msg)
    .then(() => {
      console.log("emails sent successfully for posts pending!" + msg.to);
    })
    .catch((error) => {
      console.log(error);
    });

  return res.send(" i am the pending");
});

//  welcome email

app.get("/WelcomeEmail", (req, res) => {
  const { recipient, displayName } = req.query;

  const msg = {
    to: recipient,
    from: senderEmail,
    subject: "Welcome to Unreveald",
    html: '<div style="background-color:#f6f9ff; color:#2D2D2D; padding:50px 20px"> <p style=";font-size: 30px; font-weight: bold; margin: 0;text-transform: capitalize;"> Welcome to Unreveald , <br></p>            <p style="font-weight: bold; margin: 0; margin-top:15px">          <div style="font-size:20px"> We are excited to have you and looking forward to the stories you share with us.</div></p>    <button style="color:#fff; padding:13px; background-color:#FB6060; font-size:22px; border-radius:10px; border:none">Create a story</button><p><div style=";font-size: 30px; font-weight: bold; margin: 0;text-transform: capitalize; margin-top:50px">Your Stories and Confessions are safe with us!</div></p> <p style=" margin-top:70px "><div>If you need further help, please do not hesitate to contact us @ hello@unreveald.com  </div></p><p> Cheers! </p>   <p>Unreveald App Team</p> </div>',
  };

  sgMail
    .sendMultiple(msg)
    .then(() => {
      console.log("emails sent successfully with welcome messsage!" + msg.to);
    })
    .catch((error) => {
      console.log(error);
    });

  return res.send("welcome email");
});

app.get("/approvedpost", (req, res) => {
  const { recipient, postedname } = req.query;

  const msg = {
    to: recipient,
    from: senderEmail,
    subject: "Unreveald - Post Approved",
    html:
      '<div style="background-color: #f6f9ff; color:#2D2D2D;text-align: center; padding-top: 50px; padding-bottom: 50px;"><p style="padding: 15px 15px 15px 15px; margin: 0;"><a href="http://localhost:4000/"> <img style="width: 80px;" src="https://www.inovarconsulting.co.in/staging/wp-content/uploads/2021/07/ur-logo.png" /></a></p><p style="font-size: 22px; font-weight: bold; margin: 0;text-transform: capitalize;">Hi ' +
      postedname +
      ', <br></p><p style="font-weight: bold; margin: 0;"><div style="font-family: Google Sans, Roboto, RobotoDraft, Helvetica, Arial, sans-serif;"><div style="font-size: 22px; font-variant-ligatures: no-contextual; font-weight: bold;">your post has been approved!</div></div></p><p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; margin: 0;"></p><p style="padding: 12px; margin: 0;"><img src="https://www.inovarconsulting.co.in/staging/wp-content/uploads/2021/07/email.png" /></p><p style="padding: 12px; border-left: 4px solid #d0d0d0; font-size: 22.5px;font-weight: normal;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: -0.01px;text-align: center;color: #5d5f64; margin: 0;"> <span style="background-color: #f6f9ff;"> Your post has been approved and you can view the post in the timeline now.  </span></p></div>',
  };

  sgMail
    .sendMultiple(msg)
    .then(() => {
      console.log(
        "emails sent successfully for posts approved by admin!" + msg.to
      );
    })
    .catch((error) => {
      console.log(error);
    });
  return res.send("welcome email");
});

app.get("/rejectedpost", (req, res) => {
  const { recipient, postedname } = req.query;

  const msg = {
    to: recipient,
    from: senderEmail,
    subject: "Unreveald - Post rejected",
    html:
      '<div style="background-color: #f6f9ff; color:#2D2D2D;text-align: center; padding-top: 50px; padding-bottom: 50px;"><p style="padding: 15px 15px 15px 15px; margin: 0;"><a href="http://localhost:4000/"> <img style="width: 80px;" src="https://www.inovarconsulting.co.in/staging/wp-content/uploads/2021/07/ur-logo.png" /></a></p><p style="font-size: 22px; font-weight: bold; margin: 0;text-transform: capitalize;">Hi ' +
      postedname +
      ', <br></p><p style="font-weight: bold; margin: 0;"><div style="font-family: Google Sans, Roboto, RobotoDraft, Helvetica, Arial, sans-serif;"><div style="font-size: 22px; font-variant-ligatures: no-contextual; font-weight: bold;">your post is rejected!</div></div></p><p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; margin: 0;"></p><p style="padding: 12px; margin: 0;"><img src="https://www.inovarconsulting.co.in/staging/wp-content/uploads/2021/07/email.png" /></p><p style="padding: 12px; border-left: 4px solid #d0d0d0; font-size: 22.5px;font-weight: normal;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: -0.01px;text-align: center;color: #5d5f64; margin: 0;"> <span style="background-color: #f6f9ff;"> Your post has been rejected  </span></p></div>',
  };

  sgMail
    .sendMultiple(msg)
    .then(() => {
      console.log("emails sent successfully!" + msg.to);
    })
    .catch((error) => {
      console.log(error);
    });
  return res.send("welcome email");
});

/*comments*/

app.get("/commentspending", (req, res) => {
  const { recipient, postedname } = req.query;

  const msg = {
    to: recipient,
    from: senderEmail,
    subject: "Unreveald - Comment Pending",
    html:
      '<div style="background-color: #f6f9ff; color:#2D2D2D;text-align: center; padding-top: 50px; padding-bottom: 50px;"><p style="padding: 15px 15px 15px 15px; margin: 0;"><a href="http://localhost:4000/"> <img style="width: 80px;" src="https://www.inovarconsulting.co.in/staging/wp-content/uploads/2021/07/ur-logo.png" /></a></p><p style="font-size: 22px; font-weight: bold; margin: 0;text-transform: capitalize;">Hi ' +
      postedname +
      ', <br></p><p style="font-weight: bold; margin: 0;"><div style="font-family: Google Sans, Roboto, RobotoDraft, Helvetica, Arial, sans-serif;"><div style="font-size: 22px; font-variant-ligatures: no-contextual; font-weight: bold;">your post is under review!</div></div></p><p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; margin: 0;"></p><p style="padding: 12px; margin: 0;"><img src="https://www.inovarconsulting.co.in/staging/wp-content/uploads/2021/07/email.png" /></p><p style="padding: 12px; border-left: 4px solid #d0d0d0; font-size: 22.5px;font-weight: normal;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: -0.01px;text-align: center;color: #5d5f64; margin: 0;"> <span style="background-color: #f6f9ff;"> Your Comment is under review by Admin and it will appear on the timeline once the admin approves. </span></p></div>',
  };

  sgMail
    .sendMultiple(msg)
    .then(() => {
      console.log("emails sent successfully for comments pending!" + msg.to);
    })
    .catch((error) => {
      console.log(error);
    });
  return res.send("welcome email");
});

app.get("/approvedcomments", (req, res) => {
  const { recipient, commentedUserName } = req.query;

  const msg = {
    to: recipient,
    from: senderEmail,
    subject: "Unreveald - Comment Approved",
    html:
      '<div style="background-color: #f6f9ff; color:#2D2D2D;text-align: center; padding-top: 50px; padding-bottom: 50px;"><p style="padding: 15px 15px 15px 15px; margin: 0;"><a href="http://localhost:4000/"> <img style="width: 80px;" src="https://www.inovarconsulting.co.in/staging/wp-content/uploads/2021/07/ur-logo.png" /></a></p><p style="font-size: 22px; font-weight: bold; margin: 0;text-transform: capitalize;">Hi ' +
      commentedUserName +
      ', <br></p><p style="font-weight: bold; margin: 0;"><div style="font-family: Google Sans, Roboto, RobotoDraft, Helvetica, Arial, sans-serif;"><div style="font-size: 22px; font-variant-ligatures: no-contextual; font-weight: bold;">your comment has been approved!</div></div></p><p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; margin: 0;"></p><p style="padding: 12px; margin: 0;"><img src="https://www.inovarconsulting.co.in/staging/wp-content/uploads/2021/07/email.png" /></p><p style="padding: 12px; border-left: 4px solid #d0d0d0; font-size: 22.5px;font-weight: normal;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: -0.01px;text-align: center;color: #5d5f64; margin: 0;"> <span style="background-color: #f6f9ff;"> Your comment has been approved and you can view the comment in the timeline now.  </span></p></div>',
  };

  sgMail
    .sendMultiple(msg)
    .then(() => {
      console.log(
        " emails sent successfully for comments approved by admin!" + msg.to
      );
    })
    .catch((error) => {
      console.log(error);
    });
  return res.send("welcome email");
});

app.get("/rejectedcomments", (req, res) => {
  const { recipient, commentedUserName } = req.query;

  const msg = {
    to: recipient,
    from: senderEmail,
    subject: "Unreveald - Comment Rejected",
    html:
      '<div style="background-color: #f6f9ff; color:#2D2D2D;text-align: center; padding-top: 50px; padding-bottom: 50px;"><p style="padding: 15px 15px 15px 15px; margin: 0;"><a href="http://localhost:4000/"> <img style="width: 80px;" src="https://www.inovarconsulting.co.in/staging/wp-content/uploads/2021/07/ur-logo.png" /></a></p><p style="font-size: 22px; font-weight: bold; margin: 0;text-transform: capitalize;">Hi ' +
      commentedUserName +
      ', <br></p><p style="font-weight: bold; margin: 0;"><div style="font-family: Google Sans, Roboto, RobotoDraft, Helvetica, Arial, sans-serif;"><div style="font-size: 22px; font-variant-ligatures: no-contextual; font-weight: bold;">your comment has been rejected!</div></div></p><p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; margin: 0;"></p><p style="padding: 12px; margin: 0;"><img src="https://www.inovarconsulting.co.in/staging/wp-content/uploads/2021/07/email.png" /></p><p style="padding: 12px; border-left: 4px solid #d0d0d0; font-size: 22.5px;font-weight: normal;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: -0.01px;text-align: center;color: #5d5f64; margin: 0;"> <span style="background-color: #f6f9ff;"> Your comment has been rejected. and you can not view the post in the timeline now.  </span></p></div>',
  };
  sgMail
    .sendMultiple(msg)
    .then(() => {
      console.log(
        "emails sent successfully for rejecting comment by admin !" + msg.to
      );
    })
    .catch((error) => {
      console.log(error);
    });
  return res.send("welcome email");
});

/*----solutions----*/

app.get("/solutionpending", (req, res) => {
  const { recipient, postedname } = req.query;

  const msg = {
    to: recipient,
    from: senderEmail,
    subject: "Unreveald - Solution Pending",
    html:
      '<div style="background-color: #f6f9ff; color:#2D2D2D;text-align: center; padding-top: 50px; padding-bottom: 50px;"><p style="padding: 15px 15px 15px 15px; margin: 0;"><a href="http://localhost:4000/"> <img style="width: 80px;" src="https://www.inovarconsulting.co.in/staging/wp-content/uploads/2021/07/ur-logo.png" /></a></p><p style="font-size: 22px; font-weight: bold; margin: 0;text-transform: capitalize;">Hi ' +
      postedname +
      ', <br></p><p style="font-weight: bold; margin: 0;"><div style="font-family: Google Sans, Roboto, RobotoDraft, Helvetica, Arial, sans-serif;"><div style="font-size: 22px; font-variant-ligatures: no-contextual; font-weight: bold;">your post is under review!</div></div></p><p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; margin: 0;"></p><p style="padding: 12px; margin: 0;"><img src="https://www.inovarconsulting.co.in/staging/wp-content/uploads/2021/07/email.png" /></p><p style="padding: 12px; border-left: 4px solid #d0d0d0; font-size: 22.5px;font-weight: normal;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: -0.01px;text-align: center;color: #5d5f64; margin: 0;"> <span style="background-color: #f6f9ff;"> Your Solution is under review by Admin and it will appear on the timeline once the admin approves. </span></p></div>',
  };

  sgMail
    .sendMultiple(msg)
    .then(() => {
      console.log("emails sent successfully for solution pending!" + msg.to);
    })
    .catch((error) => {
      console.log(error);
    });
  return res.send("welcome email");
});

app.get("/approvedsolutions", (req, res) => {
  const { recipient, solutionedUserName } = req.query;

  const msg = {
    to: recipient,
    from: senderEmail,
    subject: "Unreveald - Solution Approved",
    html:
      '<div style="background-color: #f6f9ff; color:#2D2D2D;text-align: center; padding-top: 50px; padding-bottom: 50px;"><p style="padding: 15px 15px 15px 15px; margin: 0;"><a href="http://localhost:4000/"> <img style="width: 80px;" src="https://www.inovarconsulting.co.in/staging/wp-content/uploads/2021/07/ur-logo.png" /></a></p><p style="font-size: 22px; font-weight: bold; margin: 0;text-transform: capitalize;">Hi ' +
      solutionedUserName +
      ', <br></p><p style="font-weight: bold; margin: 0;"><div style="font-family: Google Sans, Roboto, RobotoDraft, Helvetica, Arial, sans-serif;"><div style="font-size: 22px; font-variant-ligatures: no-contextual; font-weight: bold;">your solution has been approved!</div></div></p><p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; margin: 0;"></p><p style="padding: 12px; margin: 0;"><img src="https://www.inovarconsulting.co.in/staging/wp-content/uploads/2021/07/email.png" /></p><p style="padding: 12px; border-left: 4px solid #d0d0d0; font-size: 22.5px;font-weight: normal;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: -0.01px;text-align: center;color: #5d5f64; margin: 0;"> <span style="background-color: #f6f9ff;"> Your solution has been approved and you can view the solution in the timeline now.  </span></p></div>',
  };

  sgMail
    .sendMultiple(msg)
    .then(() => {
      console.log(
        "emails sent successfully for solutions approved by admin!" + msg.to
      );
    })
    .catch((error) => {
      console.log(error);
    });
  return res.send("welcome email");
});

app.get("/rejectedsolutions", (req, res) => {
  const { recipient, solutionedUserName } = req.query;

  const msg = {
    to: recipient,
    from: senderEmail,
    subject: "Unreveald - Solution Rejected",
    html:
      '<div style="background-color: #f6f9ff; color:#2D2D2D;text-align: center; padding-top: 50px; padding-bottom: 50px;"><p style="padding: 15px 15px 15px 15px; margin: 0;"><a href="http://localhost:4000/"> <img style="width: 80px;" src="https://www.inovarconsulting.co.in/staging/wp-content/uploads/2021/07/ur-logo.png" /></a></p><p style="font-size: 22px; font-weight: bold; margin: 0;text-transform: capitalize;">Hi ' +
      solutionedUserName +
      ', <br></p><p style="font-weight: bold; margin: 0;"><div style="font-family: Google Sans, Roboto, RobotoDraft, Helvetica, Arial, sans-serif;"><div style="font-size: 22px; font-variant-ligatures: no-contextual; font-weight: bold;">your solution has been Rejected!</div></div></p><p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; margin: 0;"></p><p style="padding: 12px; margin: 0;"><img src="https://www.inovarconsulting.co.in/staging/wp-content/uploads/2021/07/email.png" /></p><p style="padding: 12px; border-left: 4px solid #d0d0d0; font-size: 22.5px;font-weight: normal;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: -0.01px;text-align: center;color: #5d5f64; margin: 0;"> <span style="background-color: #f6f9ff;"> Your solution has been rejected and you can  not view the solution in the timeline now.  </span></p></div>',
  };
  sgMail
    .sendMultiple(msg)
    .then(() => {
      console.log(
        "emails sent successfully for rejecting solution by admin!" + msg.to
      );
    })
    .catch((error) => {
      console.log(error);
    });
  return res.send("welcome email");
});

/*****************************************************************************************************
                        Solution 
****************************************************************************************************/

// to access server run 'nodemon index.js' then click here: http://localhost:4000/
app.listen(4000, () => console.log("Running on Port 4000"));
