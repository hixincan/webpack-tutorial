// import { getUsers } from "./common/usersAPI";
const getUserModule = () => import(/* webpackChunkName: "usersAPI" */ "./common/usersAPI");


const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    // getUsers().then(json => console.log(json));
    getUserModule().then(({ getUsers }) => {
        getUsers().then(json => console.log(json));
    });
});
