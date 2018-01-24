function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
<<<<<<< HEAD
  if (string.toLowerCase() == string) {
    return "I can't hear you!"}
  else if (string.toUpperCase() == string) {
    return "YES INDEED!"}
  else if (string == string) {
    return "I love you, too."}
=======
  if (string.toLowerCase === "hello") {
    return "I can\'t hear you!"}
  else if (string.toUpperCase === "HELLO") {
    return "YES INDEED!"}
  else (string === "I love you, grandma.") {
    return "I love you, too."
}
>>>>>>> f5524c591ad51a2ea1682be4c04496c04d5b01c9
}
