// import commonUtility from "./Utils";

// const userStorage = JSON.parse(localStorage.getItem('user'));

// let token = "";

// if(commonUtility.sanitizeObject(userStorage)){
//     token = userStorage.token;
// }


// export const headerConfig = {
//     headers: {
//          'Authorization' : `Bearer ${token}` ,
//          'Content-Type'  : 'application/json',
//         }
// };


// export const mediaHeaderConfig = {
//     headers: {
//          'Authorization' : `Bearer ${token}` ,
//          'Content-Type'  : 'multipart/form-data',
//         }
// };


export const headerConfig = {
    headers: {
         'Content-Type'  : 'application/json'
        }
};
