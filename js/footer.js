const codingLanguages = ["HTML", "CSS", "JavaScript"];
codingLanguages.splice(2, 0, " and ");
document.getElementById("table").innerHTML = codingLanguages;