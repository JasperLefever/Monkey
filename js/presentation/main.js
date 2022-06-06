"use strict";
import { User } from "../domain/user.js";

window.onload = () => {
  let user = new User("test", "test");
  console.log(user.userId);
  console.log(user.username);
  console.log(user.password);
  console.log(user.likes);
  console.log(user.comments);
  console.log(user.registeredSince);
};
