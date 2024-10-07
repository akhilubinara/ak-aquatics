const {knex,connection} = require('../../../knex');
const pool = require('../../../config/database');
const {TABLE_NAME} = require('../../../common/tablenames');
const {API_RESPONSE_MESSAGES, API_RESPONSE_STATUS_CODE} = require('../../../common/constants');
const bcrypt = require('bcrypt');

module.exports ={
    _CustomerRegistration: async (data) =>{
        let isSuccess = false;
        let resObj = {
            success: false,
            message: "",
            status_code: 0,
            userId:null
        };
        try{
            const userExists = await knex(TABLE_NAME.Customer)
            .where(TABLE_NAME.Customer + '.MobileNumber', data.mobileNumber)
            .first();

            if(userExists){
                resObj.status_code=API_RESPONSE_STATUS_CODE.ALREADY_EXISTS;
                resObj.message=API_RESPONSE_MESSAGES.USER_EXISTS
                return resObj
            }
            const pass = await bcrypt.hash(data.password,10);

                const user = await knex(TABLE_NAME.Customer) 
                .insert({
                    FirstName: data.firstName, 
                    LastName: data.lastName,
                    MobileNumber: data.mobileNumber,
                    Email: data.email,
                    Password: pass
                },'CustomerId')
                
                isSuccess=true;
                resObj.success=isSuccess;
                resObj.status_code=API_RESPONSE_STATUS_CODE.SUCCESS;
                resObj.message = API_RESPONSE_MESSAGES.SIGNUP_SUCCESS
                console.log("========",resObj);
                return resObj;

        }catch(error){
            console.log(error);
        }
    },

}