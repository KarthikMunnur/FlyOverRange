import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Dashboard/Home";
import Notifications from "../Dashboard/Notifications";
import Profile from "../Dashboard/Profile";
import createPost from "../Posts/createPost";
import Landing from "../Dashboard/Landing";
import Nav from "./Nav";
import SignInPage from "../../Pages/Signinpage";
import SignUpPage from "../../Pages/SignUpPage";
import PostDetail from "../Posts/PostDetail";
import AdminDashboard from "../admin/AdminDashboard";
import InviteFriends from "../Posts/InviteFriends";
import ForgotPasswordPage from "../../Pages/ForgotPasswordPage";
import InviteSuccess from "../Posts/InviteSuccess";
import Moderate from "../admin/Posts/Moderate";
import AcceptedPost from "../admin/Posts/AcceptedPost";
import RejectedPost from "../admin/Posts/RejectedPost";
import SavedForLaterPost from "../admin/Posts/SavedForLaterPost";
import MarketPage from "../Dashboard/MarketPage";
import AcceptedComments from "../admin/Comments/AcceptedComments";
import UserNameSelection from "../userCommon/UserNameSelection";
import Viewallnotifications from "../Dashboard/Viewallnotifications";
import RegistrationLink from "../auth/RegistrationLink";
import PendingEmailVerification from "../auth/PendingEmailVerification";
import ReportedPost from "../admin/Posts/ReportedPost";
import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../../Pages/Dashboard";
import Gallery from "../../Pages/Gallery";
import Competitor from "../../Pages/Competitor";
import Horses from "../../Pages/Horses";
import Judge from "../../Pages/Judge";
import Riders from "../../Pages/Riders";
import ProfileSettngs from "../../Pages/ProfileSettngs";
import Events from "../../Pages/Events";
import Announcements from "../../Pages/Announcements";
import Maps from "../../Pages/Maps";

export default class LayoutPage extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/confirmation" component={RegistrationLink} />
            <Route
              path="/PendingEmailVerification"
              component={PendingEmailVerification}
            />
            <Route path="/login" component={SignInPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/forgotpassword" component={ForgotPasswordPage} />
            /* START Admin Pages */
            <PrivateRoute path="/admindashboard" component={AdminDashboard} />
            <PrivateRoute
              exact
              path="/yet-Moderate"
              component={Moderate}
            ></PrivateRoute>
            <PrivateRoute path="/acceptedpost" component={AcceptedPost} />
            <PrivateRoute path="/rejectedpost" component={RejectedPost} />
            <PrivateRoute
              path="/savedlaterpost"
              component={SavedForLaterPost}
            />
            <PrivateRoute
              path="/acceptedcomments"
              component={AcceptedComments}
            />
            <PrivateRoute path="/reportpost" component={ReportedPost} />
            /* END Admin Pages */
            <Route path="/MarketPage" component={MarketPage} />
            <div className="container-fluid p-0 m-0">
              <Nav />

              <Route path="/createpost" component={createPost} />
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/competitor" component={Competitor} />
              <Route exact path="/horses" component={Horses} />
              <Route exact path="/judge" component={Judge} />
              <Route exact path="/riders" component={Riders} />
              <Route exact path="/settings" component={ProfileSettngs} />
              <Route exact path="/events" component={Events} />
              <Route exact path="/announcements" component={Announcements} />
              <Route exact path="/maps" component={Maps} />



              <Route path="/username" component={UserNameSelection} />
              <Route path="/stories" component={Landing} />
              <Route path="/profile/:id" component={Profile} />
              <Route path="/post/:id" component={PostDetail} />
              <Route path="/InviteFriends" component={InviteFriends} />
              <Route path="/InviteSuccess" component={InviteSuccess} />
              <Route
                path="/Viewallnotifications"
                component={Viewallnotifications}
              />
              <Route path="/Notifications" component={Notifications} />
              {/* <Route component={NotFound} /> */}
            </div>
          </Switch>
        </Router>
      </div>
    );
  }
}
