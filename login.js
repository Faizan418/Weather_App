let prevStudents = localStorage.getItem("students");
let students = prevStudents ? JSON.parse(prevStudents) : [];

function login() {
  let name = document.getElementById("loginName").value;
  let password = document.getElementById("loginPassword").value;

  let found = students.find(
    (student) => student.name === name && student.password === password
  );

  if (found) {
    Swal.fire({
      icon: "success",
      title: "Login Successfully",
      draggable: true
    });

    localStorage.setItem("currentUser", name);
    window.location.href = "index.html";
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Invalid Credentials",
    });
  }
}
