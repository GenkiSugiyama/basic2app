export function setName(name) {
  return{ type: "SET_NAME", name };
}

export function setAge(age) {
  return{ type: "SET_AGE", age};
}

export function setNull() {
  return {type: "SET_NULL"}
}