export function User() {
  this.fName = "";
  this.lName = "";
  this.email = "";
  this.address = "";
  this.password = "";
  this.citizenID = "";
  this.phone = "";
  this.childID = [];
  this.nursID = [];
  return Object.assign({}, this);
}

function Child() {
  this.name = "";
  this.age = "";
  this.score = "";
  this.nursID = "";
  this.userID = "";
  return Object.assign({}, this);
}
/*
function Estimation(name, age, result, comment, nursID) {
  this.name = name;
  this.age = age;
  this.result = result;
  this.comment = comment;
  this.nursID = nursID;
  return Object.assign({}, this);
}

function Nursery(name, password, pagedata, address, childID) {
  this.name = name;
  this.password = password;
  this.pagedata = pagedata;
  this.address = address;
  this.childID = childID;
  return Object.assign({}, this);
}

function Pagedata(pic, header, description) {
  this.pic = pic;
  this.header = header;
  this.description = description;
  return Object.assign({}, this);
}

function ChatBox(userID, nursID) {
  this.userID = userID;
  this.nursID = nursID;
  return Object.assign({}, this);
}

function Chat(text, time, senderID) {
  this.text = text;
  this.time = time;
  this.senderID = senderID;
  return Object.assign({}, this);
}

function Request(status, fieldname, userID, nursID, childID) {
  this.status = status;
  this.fieldname = fieldname;
  this.userID = userID;
  this.nursID = nursID;
  this.childID - childID;
  return Object.assign({}, this);
}

function QuestionGM(age, video, description, tool) {
  this.age = age;
  this.video = video;
  this.description = description;
  this.tool = tool;
  return Object.assign({}, this);
}

function QuestionFM(age, video, description, tool) {
  this.age = age;
  this.video = video;
  this.description = description;
  this.tool = tool;
  return Object.assign({}, this);
}

function QuestionRL(age, video, description, tool) {
  this.age = age;
  this.video = video;
  this.description = description;
  this.tool = tool;
  return Object.assign({}, this);
}

function QuestionEL(age, video, description, tool) {
  this.age = age;
  this.video = video;
  this.description = description;
  this.tool = tool;
  return Object.assign({}, this);
}

function QuestionPS(age, video, description, tool) {
  this.age = age;
  this.video = video;
  this.description = description;
  this.tool = tool;
  return Object.assign({}, this);
}

function NurseryUser(name, password, priority, email, phone, nursID) {
  this.name = name;
  this.password = password;
  this.priority = priority;
  this.email = email;
  this.phone = phone;
  this.nursID = nursID;
  return Object.assign({}, this);
}
*/
