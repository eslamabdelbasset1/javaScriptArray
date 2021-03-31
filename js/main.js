

var friends = [
    "Islam",
    "Eslam",
    "Ahmed",

];
console.log(friends);
console.log(friends.length);
console.log(friends.toString());
console.log(friends.toLocaleString());
friends.push("Mohammed");
console.log(friends);
friends.pop();
console.log(friends);
console.log(friends.slice(1,2));
console.log(friends.indexOf("Eslam"));
friends.sort();
console.log(friends);


if (Array.isArray(friends)) {

    console.log("good friends");

}else{console.log("bad friends");}