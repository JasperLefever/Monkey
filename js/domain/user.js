"use strict";
export class User {
  #userId;
  #username;
  #password;
  #likes = [];
  #comments = [];
  #registeredSince;

  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.#userId = this.generateUserId(32);
    this.#registeredSince = new Date();
  }

  generateUserId(length) {
    return crypto.randomUUID().substring(0, 8);
  }

  //getters and setters
  get userId() {
    return this.#userId;
  }

  get likes() {
    return this.#likes;
  }

  set likes(likes) {
    this.#likes = likes;
  }

  get comments() {
    return this.#comments;
  }

  set comments(comments) {
    this.#comments = comments;
  }

  get registeredSince() {
    return this.#registeredSince;
  }

  get username() {
    return this.#username;
  }

  set username(username) {
    this.#username = username;
  }

  get password() {
    return this.#password;
  }

  set password(password) {
    this.#password = password;
  }
}
