let prevStudents = localStorage.getItem("students");
let students = prevStudents ? JSON.parse(prevStudents) : [];

function signUp() {
  let name = document.getElementById("signUpName").value;
  let password = document.getElementById("signUpPassword").value;

  if (name && password) {
    let student = { name, password };
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
    Swal.fire({
      icon: "success",
      title: "Signed Up Successfully pleace login",
      draggable: true
    });
    window.location.href = "login.html";
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "try again!",
    });
  }
}
