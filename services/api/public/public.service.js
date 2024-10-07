const {knex,connection} = require('../../knex');
const pool = require('../../config/database');
const {TABLE_NAME} = require('../../common/tablenames');
const {API_RESPONSE_MESSAGES, API_RESPONSE_STATUS_CODE} = require('../../common/constants');
const bcrypt = require('bcrypt');

module.exports = {
    _login: async (data) =>{
        return 'Hey'
    },
    _sumbitRemarks: async (data) =>{
        let isSuccess = false;
        let resObj = {
            success: false,
            message: "",
            status_code: 0,
            Id:null
        };
        try{
            const user = await knex(TABLE_NAME.UserRemarks) 
            .insert({
                Name: data.Name, 
                Email: data.Email,
                Notes: data.Notes,
                // CustomerId: data.CustomerId ?? null
            },'Id')
            
            isSuccess=true;
            resObj.success=isSuccess;
            resObj.Id=user.Id
            resObj.status_code=API_RESPONSE_STATUS_CODE.SUCCESS;
            resObj.message = API_RESPONSE_MESSAGES.SIGNUP_SUCCESS
            console.log("========",resObj);
            return resObj;
        }
        catch(error){
            console.log(error);
        }
    }
}
