username = 'sahbaee.ir'; // -> Your Target ig account
let domain = 'http://ui2.ir/'; // -> your terminal domain 

function userJson(username) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var resultData = this.responseText;
            var data = JSON.parse(resultData);
            let biography = data.graphql.user.biography;
            let full_name = data.graphql.user.full_name;
            let profile_pic_url = data.graphql.user.profile_pic_url;
            let username = data.graphql.user.username;
            show(profile_pic_url, biography, username, full_name);
        }
    };
    xhttp.open("GET", 'https://www.instagram.com/' + username + '/?__a=1', true);
    xhttp.send();
};
userJson(username);

function show(profile_pic_url, biography, username, full_name) {
    document.write('Terminal Run...');
    let domainUrl = `${domain}?`;
    
    window.location.href = `${domainUrl}profile_pic_url=${profile_pic_url}&biography=${biography}&username=${username}&full_name=${full_name}`;
};
