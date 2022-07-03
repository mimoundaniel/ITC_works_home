//replace with your user:
const GITHUB_URL = "https://api.github.com/users/KimberleyUzan";

fetch(GITHUB_URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const profileImage = document.getElementById("profile-image");
        document.getElementById("profile-image").src = data.avatar_url;





        // profileImage.imgContent = data['avatar_url'];
        // console.log(data['avatar_url']);



        const profileName = document.getElementById("profile-name");
        profileName.textContent = data['login'];
        // update the profileImage and profileName with the information retrieved.

    });