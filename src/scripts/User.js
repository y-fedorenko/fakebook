export class User {
  #id;
  #name;
  #username;
  #email;

  constructor(id, name, username, email) {
    this.#id = id;
    this.#name = name;
    this.#username = username;
    this.#email = email;
  }

  get id() { return this.#id; }
  get name() { return this.#name; }
  get username() { return this.#username; }
  get email() { return this.#email; }

  getInfo() {
    return `${this.#id}|${this.#name}|${this.#username}|${this.#email}`;
  }

  setId(id) { this.#id = id; }
  setName(name) { this.#name = name; }
  setUsername(username) { this.#username = username; }
  setEmail(email) { this.#email = email; }
}

export class Subscriber extends User {
  #pages;
  #groups;
  #canMonetize;

  constructor(id, name, username, email, pages = [], groups = [], canMonetize = false) {
    super(id, name, username, email);

    if (!Array.isArray(pages) || !Array.isArray(groups)) {
      throw new Error('Pages and groups must be arrays');
    }

    if (typeof canMonetize !== 'boolean') {
      throw new Error('Can monetize must be a boolean');
    }

    this.#pages = pages;
    this.#groups = groups;
    this.#canMonetize = canMonetize;
  }

  get pages() { return this.#pages; }
  get groups() { return this.#groups; }
  get canMonetize() { return this.#canMonetize; }

  setPages(pages) {
    if (!Array.isArray(pages)) {
      throw new Error('Pages must be an array');
    }
    this.#pages = pages;
  }

  setGroups(groups) {
    if (!Array.isArray(groups)) {
      throw new Error('Groups must be an array');
    }
    this.#groups = groups;
  }

  setCanMonetize(canMonetize) {
    if (typeof canMonetize !== 'boolean') {
      throw new Error('Can monetize must be a boolean');
    }
    this.#canMonetize = canMonetize;
  }

  getInfo() {
    return `${super.getInfo()}|${this.#pages}|${this.#groups}|${this.#canMonetize}`;
  }
}
