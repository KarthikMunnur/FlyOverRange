import React, { Component } from "react";
import { storage } from "../../config/fbConfig";
import { connect } from "react-redux";
import firebase from "firebase";
import { uploadProfileStatus } from "../../store/actions/postActions";
import Avatar from "react-avatar";


class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: firebase.auth().currentUser.photoURL,
      displayName:firebase.auth().currentUser.displayName,
      percentUploaded: 0,
      uploadTask: null,
      file: null,
      uploadState: false,
      errors: [],
    };
  }

  uploadFile = (file) => {
    const { auth, uploadSuccessfulAction } = this.props;

    if (this.state.file != null) {
      const filePath = `trades/images/file.name`;

      this.setState(
        {
          uploadTask: storage.ref(`images/${file.name}`).put(this.state.file),
        },
        () => {
          this.state.uploadTask.on(
            "state_changed",
            (snap) => {
              const percentUploaded = Math.round(
                (snap.bytesTransferred / snap.totalBytes) * 100
              );
              this.setState({ percentUploaded });
            },
            (err) => {
              console.error(err);
              this.setState({
                errors: this.state.errors.concat(err),
                uploadState: "error",
                uploadTask: null,
              });
            },
            () => {
              this.state.uploadTask.snapshot.ref
                .getDownloadURL()
                .then((downloadUrl) => {
                  this.setState({ url: downloadUrl });

                  if (this.state.percentUploaded === 100) {
                    const myUserId = auth.uid;

                    const db = firebase.firestore();
                    db.collection("users").doc(myUserId).update({
                      photoURL: this.state.url,
                    });

                    const user = firebase.auth().currentUser;

                    user
                      .updateProfile({
                        photoURL: this.state.url,
                      })
                      .then(() => {
                        this.setState({ uploadState: true });
                        uploadSuccessfulAction();
                      })
                      .catch((error) => {
                        // An error occurred
                        // ...
                      });
                  }
                })
                .catch((err) => {
                  console.error(err);
                  this.setState({
                    errors: this.state.errors.concat(err),
                    uploadState: "error",
                    uploadTask: null,
                  });
                });
            }
          );
        }
      );
    } else {
      alert("please select a file");
    }
  };

  handleChange = (e) => {
    if (e.target.files[0]) {
      this.setState({
        file: e.target.files[0],
      });
    }
  };

  render() {
    const { handleCloseImagePopup } = this.props;

    return (
      <div>
        <progress value={this.state.percentUploaded} max="100" />
        {/* <div className="image-upload">
          <label htmlfor="file-input">
            <img src="https://icon-library.net/images/upload-photo-icon/upload-photo-icon-21.jpg" />
          </label>

          <input id="file-input" type="file" onChange={handleChange} />
          <button disabled={!file}>upload to firebase</button>
        </div> */}
        <div class="file-upload pro-image-upload">
          {/* <label for="upload" class="file-upload__label">
            <img src="../assets/pen.png" />
          </label> */}
          
         

                      <Avatar
                      size={350}
                      className="upload-profile-image"
                      title="none"
                      src={this.state.url}
                      name={this.state.displayName}
                    />

          <label class="custom-file-upload">
            <input
              type="file"
              name="file-upload"
              onChange={this.handleChange}
            />
            <p>Choose File</p>
          </label>

          <button className="btn" onClick={this.uploadFile}>
            upload
          </button>

          <button className="btn" onClick={handleCloseImagePopup}>
            close
          </button>

          {/* {url} */}
          <br />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = {
  uploadSuccessfulAction: uploadProfileStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload);
