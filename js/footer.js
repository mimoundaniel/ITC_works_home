const codingLanguages = ["HTML", "CSS", "JavaScript"];
codingLanguages.splice(1, 0, ",  ");
codingLanguages.splice(3, 0, " and ");


document.getElementById("table").innerHTML = codingLanguages.join(" ");


// document.getElementById("table").innerHTML = codingLanguages;