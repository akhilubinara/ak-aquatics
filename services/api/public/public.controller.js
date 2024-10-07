
const knex = require('knex');
const {API_RESPONSE_MESSAGES, API_RESPONSE_STATUS_CODE} = require('../../common/constants');
const {_login, _sumbitRemarks} = require('./public.service');

module.exports = {
    login: async (req,res) => {
        try{
console.log("data:", req.body);
            var data = {
                mobileNumber: req.body.mobileNumber,
                password: req.body.password
            }
            if(!data.mobileNumber || !data.password){
                return res.status(400).json({
                    status:API_RESPONSE_STATUS_CODE.FAILED,
                    message:API_RESPONSE_MESSAGES.INVALID_REQUEST,
                })
            }

            var result = await _login(data);
            console.log("Result is :", result);

        }catch(error){
            console.log(error);
        }
    },
    sumbitRemarks: async (req,res) => {
        
        try{

            var data = {
                Name: req.body.Name,
                Email: req.body.Email,
                Notes: req.body.Notes,
                CustomerId: req.body.CustomerId
            }
            
            if(!data.Name || !data.Email || !data.Notes){
                return res.status(400).json({
                    status:API_RESPONSE_STATUS_CODE.FAILED,
                    message:API_RESPONSE_MESSAGES.INVALID_REQUEST,
                })
            }
            const result = await _sumbitRemarks(data);
            console.log("result===========",result);
            if(result){
                if(result.success){
                    return res.status(200).json({
                        status:API_RESPONSE_STATUS_CODE.SUCCESS,
                        message:API_RESPONSE_MESSAGES.SUCCESS,
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
        }
        catch(error){
            console.log("carch error:", error);
            return res.status(500).json({
                status:API_RESPONSE_STATUS_CODE.FAILED,
                message:API_RESPONSE_MESSAGES.SERVER_ERROR
            })
        }
    }
}