// Get ReactDOM
import ReactDOM from "react-dom";

const node = ReactDOM.findDOMNode(this);

// const admin = require('firebase-admin');
// const fuserList = document.querySelector(".userList");
const userForm = node.querySelector(".userForm");
userForm.addEventListener("submit", addUser);

// document.addEventListener("DOMContentLoaded", (event) => {
//   console.log("active!!!")
  // const app = firebase.app();
  // const db = firebase.firestore();
  // const userList = db.collection("User");
  // userList.onSnapshot((users) => {
  //   fuserList.innerHTML = ``;
  //   users.forEach((user) => {
  //     const data = user.data();
  //     fuserList.innerHTML += `<p>${data.name}</p>`;
  //   });
  // });
// });

function addUser(e) {
  e.preventDefault();
  const db = firebase.firestore();
  const name = userForm.querySelector(".fName").value;
  const email = userForm.querySelector(".email").value;
  const password = userForm.querySelector(".password").value;
  // const citizenID = userForm.querySelector(".citizenID").value;
  const phone = userForm.querySelector(".phone").value;
  const userData = new User(name, email, password, citizenID, phone, [], []);

  const newUser = db.collection("User").doc();
  newUser.set(userData);
}

function addChild(e) {}

// function updatePost(e) {
//   let doc = document.querySelector("#doc").value;
//   console.log(doc);
//   let esdata = new Estimation("dd", 5, 1, "ddsa");
//   let esdata2 = new Estimation("ee", 6, 2, "dfwfdsa");
//   let data = new Child("ff", 12, 20, "1", "2");
//   console.log(data);
//   const db = firebase.firestore();
//   const newChild = db.collection("Children").doc(doc);
//   newChild.set(data);
//   const esti = newChild.collection("Estimation");
//   esti.doc(e.target.value).set(esdata);
//   esti.doc("ddg").set(esdata2);
//   esti.get().then((datas) => {
//     datas.forEach((data) => {
//       console.log(data.id, "=>", data.data());
//     });
//   });
//   // let score = results.reduce((a, b) => a + b, 0);
// }