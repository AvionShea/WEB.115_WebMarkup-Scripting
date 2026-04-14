const btn = document.getElementById("submitBtn");
btn.addEventListener("click", function submitForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const course = document.getElementById("course").value;
    const sectionNumber = document.getElementById("sectionNumber").value;
    const role = document.querySelector("input[name='role']:checked").value;
    const person = {
        firstName: firstName,
        lastName: lastName,
        course: course,
        sectionNumber: sectionNumber,
        role: role
    };

    console.log(person);
    console.log(JSON.stringify(person, null, 2));
});