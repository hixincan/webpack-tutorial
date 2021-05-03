import { getUsers } from "./common/usersAPI";
import "./style.scss";
console.log("Hello webpack!");

getUsers().then(json => console.log('result=>',json));