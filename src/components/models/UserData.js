export class UserData {
  constructor(displayName, age, gender,photoURL, location, bio,userid) {
    this.displayName =  displayName  ===  undefined ? '' : displayName;
    this.age =  age ===  undefined? '' : age;
    this.gender = gender ===  undefined? '' : gender;
      this.photoURL= photoURL ===  undefined ? '' : photoURL;
    this.location = location ===  undefined? '' : location;
    this.bio = bio ===  undefined? '' : bio;
      this.userid = userid ===  undefined? '' :userid;
  }
}
