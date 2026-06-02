const form = document.getElementById("projectForm");
const tableBody = document.getElementById("tableBody");

let projects = JSON.parse(localStorage.getItem("mySavedProjects")) || [];

function renderSavedProjects() {
    tableBody.innerHTML = "";
    projects.forEach(project => {
        addProjectToTable(project.name, project.description, project.url, project.tech, project.imageSrc, project.date);
    });
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name");
    const description = document.getElementById("description");
    const url = document.getElementById("url");
    const tech = document.getElementById("tech");
    const date = document.getElementById("date");
    const image = document.getElementById("image");

    document.getElementById("nameError").textContent = "";
    document.getElementById("descriptionError").textContent = "";
    document.getElementById("urlError").textContent = "";
    document.getElementById("dateError").textContent = "";
    document.getElementById("imageError").textContent = "";

    if (name.value.trim() === "") {
        document.getElementById("nameError").textContent = "Project name is required.";
        valid = false;
    }

    if (description.value.trim() === "") {
        document.getElementById("descriptionError").textContent = "Description is required.";
        valid = false;
    }

    if (url.value.trim() === "") {
        document.getElementById("urlError").textContent = "Project URL is required.";
        valid = false;
    }

    if (date.value === "") {
        document.getElementById("dateError").textContent = "Completion date is required.";
        valid = false;
    }

    if (image.value.trim() === "") {
        document.getElementById("imageError").textContent = "Image URL is required.";
        valid = false;
    }

    if (valid) {
        const newProject = {
            name: name.value,
            description: description.value,
            url: url.value,
            tech: tech.value,
            imageSrc: image.value,
            date: date.value
        };

        projects.push(newProject);
        localStorage.setItem("mySavedProjects", JSON.stringify(projects));

        addProjectToTable(newProject.name, newProject.description, newProject.url, newProject.tech, newProject.imageSrc, newProject.date);
        
        form.reset();
    }
});

function addProjectToTable(name, description, url, tech, imageSrc, date) {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = name;

    const descriptionCell = document.createElement("td");
    descriptionCell.textContent = description;

    const urlCell = document.createElement("td");
    const link = document.createElement("a");
    link.href = url;
    link.textContent = "Visit";
    link.target = "_blank";
    urlCell.appendChild(link);

    const techCell = document.createElement("td");
    techCell.textContent = tech;

    const imageCell = document.createElement("td");
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = "Project image";
    img.width = 80;
    img.loading = "lazy";
    imageCell.appendChild(img);

    const dateCell = document.createElement("td");
    dateCell.textContent = date;

    row.appendChild(nameCell);
    row.appendChild(descriptionCell);
    row.appendChild(urlCell);
    row.appendChild(techCell);
    row.appendChild(imageCell);
    row.appendChild(dateCell);

    tableBody.appendChild(row);
}

renderSavedProjects();