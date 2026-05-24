let skills = ["HTML", "CSS", "JavaScript", "Responsive Design", "Flexbox", "localStorage"];

function showSkills() {
  let container = document.getElementById("skillsList");
  container.innerHTML = "";

  skills.forEach(function(skill) {
    let badge = document.createElement("span");
    badge.innerText = skill;
    badge.className = "skill-badge";
    container.appendChild(badge);
  });
}

showSkills();