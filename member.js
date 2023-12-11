function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var about = document.getElementById("about");
    var memberButton = document.getElementById("memberButton");
    var skillsButton = document.getElementById("skillsButton");
    var projectsButton = document.getElementById("projectsButton");
    var contactButton = document.getElementById("contactButton");
    var aboutButton = document.getElementById("aboutButton");
    member.style.display = "block";
    skills.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";
    about.style.display = "none";
    memberButton.style.backgroundColor = "#4CAF50";
    skillsButton.style.backgroundColor = "#333";
    projectsButton.style.backgroundColor = "#333";
    contactButton.style.backgroundColor = "#333";
    aboutButton.style.backgroundColor = "#333";
}