const {_CustomerRegistration} = require('./customer-register.service');
const {API_RESPONSE_MESSAGES, API_RESPONSE_STATUS_CODE} = require('../../../common/constants');

module.exports = {
    CustomerRegistration: async (req,res) => {
        try{
console.log(req.body);

            var data = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                mobileNumber: req.body.mobileNumber,
                email: req.body.email,
                password: req.body.password
            }
            // console.log(data);
            
            if(!data.firstName || !data.mobileNumber){
                return res.status(400).json({
                    status:API_RESPONSE_STATUS_CODE.FAILED,
                    message:API_RESPONSE_MESSAGES.INVALID_REQUEST,
                })
            }
            const result = await _CustomerRegistration(data);
            console.log("result===========",result);
            if(result){
                if(result.status_code==3){
                    return res.status(200).json({
                        status:API_RESPONSE_STATUS_CODE.ALREADY_EXISTS,
                        message:API_RESPONSE_MESSAGES.USER_EXISTS,
                    })
                }
                if(result.success){
                    return res.status(200).json({
                        status:API_RESPONSE_STATUS_CODE.SUCCESS,
                        message:API_RESPONSE_MESSAGES.SIGNUP_SUCCESS,
                        UserId: result.userId
                    })
                }
            }
            else{
                return res.status(500).json({
                    status:API_RESPONSE_STATUS_CODE.FAILED,
                    message:API_RESPONSE_MESSAGES.SERVER_ERROR
                })
            }
        }catch(error){
            console.log("carch error");
            return res.status(500).json({
                status:API_RESPONSE_STATUS_CODE.FAILED,
                message:API_RESPONSE_MESSAGES.SERVER_ERROR
            })
        }
        
    },
    
}  