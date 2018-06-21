let students = ["petia","boria"];

function loadStudents(){
    let newStud = document.getElementById("firstname").value;
    students.push(newStud);
}

function renderStudents(){
    let template = document.getElementById("post-template");
    let content = template.content.querySelector("h1");
    for ( let i=0;i<students.length;i++){
        let student = document.importNode(content,true);
        student.textContent = students[i];
        document.getElementById("students").appendChild(student);
    }
}
renderStudents();




