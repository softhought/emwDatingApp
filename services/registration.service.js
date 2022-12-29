import axios from "axios";
import { BASE_API_URL } from "../constants/URL";
import { headerConfig } from "../constants/RequestHeaderConfig";






// const accountGroupTopParent = async (data) => {
//     const response = await axios
//         .post(BASE_API_URL + "account/group-top-partent",data, headerConfig);
//     return response;
// };



const signUpSave = async (data) => {
    const response = await axios
        .post(BASE_API_URL + "user/user_action", data, headerConfig);
        return response.data;
};


const updateSingleValue = async (data) => {
    const response = await axios
        .post(BASE_API_URL + "user/user_update_single", data, headerConfig);
        return response.data;
};

const checkLogin = async (data) => {
    const response = await axios
        .post(BASE_API_URL + "user/check_user_data", data, headerConfig);
        return response.data;
};


const checkDuplicateUser = async (data) => {
    const response = await axios
        .post(BASE_API_URL + "user/check_user_name", data, headerConfig);
        return response.data;
};

// const subCategoryByCategoryList = async (data) => {
//     const response = await axios
//         .post(BASE_API_URL + "account/subgroupbycat",data, headerConfig);
//     return response;
// };









// const paymentModeSave = async (data) => {
//     const response = await axios
//         .post(BASE_API_URL + "account/payment-mode-action", data, headerConfig);
//         return response.data;
//   };




const registrationService = {
    checkLogin,
    signUpSave,
    updateSingleValue,
    checkDuplicateUser
};

export default registrationService;