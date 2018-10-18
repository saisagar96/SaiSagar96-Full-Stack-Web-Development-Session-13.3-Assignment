window.onload = function() {

    var url = 'data.json';
    fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(function(studentinfoJson) {
        render(studentinfoJson);
    })
    .catch(function(err) {
        console.log(err);
    });

    function render(obj) {
        document.getElementById("pname1").innerHTML ="Name : " + obj[0].name;
        document.getElementById("page1").innerHTML = "Age : " + obj[0].age;
        document.getElementById("pweight1").innerHTML ="Weight : " + obj[0].Weight + " kgs";
        document.getElementById("pheight1").innerHTML ="Height : " + obj[0].height + " ft ";
        document.getElementById("pfriends1").innerHTML ="Friends : " + obj[0].Friends;
        document.getElementById("pcollege1").innerHTML ="College Name : " + obj[0].College.Name + ", City : " + obj[0].College.City + ", Pincode : " + obj[0].College.Pincode;
    
        document.getElementById("pname2").innerHTML ="Name : " + obj[1].name;
        document.getElementById("page2").innerHTML = "Age : " + obj[1].age;
        document.getElementById("pweight2").innerHTML ="Weight : " + obj[1].Weight + " kgs";
        document.getElementById("pheight2").innerHTML ="Height : " + obj[1].height + " ft ";
        document.getElementById("pfriends2").innerHTML ="Friends : " + obj[1].Friends;
        document.getElementById("pcollege2").innerHTML ="College Name : " + obj[1].College.Name + ", City : " + obj[1].College.City + ", Pincode : " + obj[1].College.Pincode;
    }
}