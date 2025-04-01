document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let contact = document.getElementById("contact").value;
            let address = document.getElementById("address").value;

            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push({ name, email, contact, address });
            localStorage.setItem("users", JSON.stringify(users));
            form.reset();
            alert("User Registered Successfully!");
        });
    }
    
    const tableBody = document.getElementById("userTableBody");
    if (tableBody) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.forEach(user => {
            let row = `<tr>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.contact}</td>
                        <td>${user.address}</td>
                      </tr>`;
            tableBody.innerHTML += row;
        });
    }
});
