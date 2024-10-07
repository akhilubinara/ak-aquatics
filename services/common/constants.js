const API_RESPONSE_STATUS_CODE = {
    FAILED: 0,
    SUCCESS: 1,
    NOT_FOUND:2,
    ALREADY_EXISTS:3
  }
const API_RESPONSE_MESSAGES = {
    SUCCESS:'success',
    SERVER_ERROR: 'Server error',
    INVALID_EMAIL: 'Invalid email',
    INVALID_MOBILE: 'Invalid mobile number',
    USER_EXISTS:"Account already exists",
    SIGNUP_SUCCESS:"User account created successfully",
    PROVIDER_SIGNUP_SUCCESS:"Provider account created successfully",
    INVALID_LOGIN_CREDENTIALS:"Invalid Username or Password",
    INVALID_LOGIN_CREDENTIALS_MOBILE:"Invalid OTP",
    REQUIRED_EMAIL: 'Email is required',
    REQUIRED_PASSWORD: 'Password is required',
    ALREADY_EXISTS:"Already exists",
    NO_DATA_FOUND: 'No data found',
    INVALID_REQUEST:"Invalid request",
    INVALID_MOBILE_NUMBER:"Invalid mobile number",
    OTP_SENT:"OTP has been sent",    
    NOT_REGISTERED:"Not registered with us",
    INVALID_OTP:'Please enter valid OTP',
    JOB_INTEREST_EXISTS:"Already submitted",
    LOGGED_OUT:"You are logged out",
    BAD_REQUEST: 'Bad Request',
    ACCOUNT_DELETE_SUCCESS:"Your account has been successfully removed",
    REQUIRED_COMPANY_DETAILS: 'Company details are required',
    REQUIRED_COMPANY_NAME: 'Company name is required',
    REQUIRED_COMPANY_CONTACT_NUMBER: 'Contact number is required',
    ROLE_NOT_FOUND:'Your account is not valid for using this app',
    REQUIRED_VAT: 'VAT/GST is required',
    REQUIRED_COMPANY_REG_NUMBER: 'Company reg. number is required',
    REQUIRED_COMPANY_EMAIL: 'Company email id is required',
    INVALID_COMPANY_EMAIL: 'Please enter valid company email id',
    REQUIRED_COMPANY_CONTACT_PERSON_FIRSTNAME: 'Contact person first name is required',
    REQUIRED_COMPANY_CONTACT_PERSON_EMAIL: 'Contact person email id is required',
    INVALID_COMPANY_CONTACT_PERSON_EMAIL: 'Please enter valid contact person email id',
    REQUIRED_COMPANY_CONTACT_PERSON_CONTACT_NUMBER: 'Contact person mobile number is required',
    INVALID_COMPANY_CONTACT_PERSON_CONTACT_NUMBER: 'Please enter valid contact person mobile number',
    REQUIRED_COMPANY_ADDRESS: 'Company address is required',
    REQUIRED_COMPANY_CITY: 'City is required in company address',
    REQUIRED_COMPANY_ZIP: 'Zip code is required in company address',
    REQUIRED_COMPANY_STATE: 'State is required in company address',
    REQUIRED_COMPANY_COUNTRY: 'Country is required in company address',

    REQUIRED_USER_SALUTATION: 'Salutation is required',
    REQUIRED_USER_FIRST_NAME: 'First name is required',
    REQUIRED_USER_LAST_NAME: 'Last name is required',
    REQUIRED_USER_ID_FILE:'ID file is required',
    REQUIRED_USER_ID_FILE_TYPE: 'ID file type is required',
    REQUIRED_USER_ADDRESS: 'User address is required',
    REQUIRED_USER_CITY: 'City is required',
    REQUIRED_USER_ZIP: 'Zip code is required',
    REQUIRED_USER_STATE: 'State is required',
    REQUIRED_USER_COUNTRY: 'Country is required',
    ALREADY_SUBMITTED:"Already submitted",

    INVALID_AMOUNT: "Invalid amount",
    INVALID_DATA_FORMAT: "Invalid data format",
    
    REGISTERED_AS_REQUESTOR_NOT_PROVIDER:"To become a service provider, please register with a different phone number",
    REGISTERED_AS_PROVIDER_NOT_REQUESTOR:"To become a public user, please register with a different phone number",
    REGISTERED_AS_CRMUSER:"To become a public/provider user, please register with a different phone number",
    YOUR_ACCOUNT_IS_NOT_ACTIVE:"Your account is not active",
    DELETE_ACCOUNT_ACTIVE_REQUEST_WARNING:"You have {COUNT} active request(s)",
    DELETE_ACCOUNT_ACTIVE_BID_WARNING:"You have {COUNT} active bid(s)",
    YOU_ARE_NOT_AUTHORIZED_TO_ACCESS:"You are not authorized to access this app",
    MAX_RESEND_ATTEMPTS_EXCEEDED: "Maximum resend attempts exceeded",
    SEND_EMAIL_SUCCESS: "Email sent successfully",
    SEND_EMAIL_FAILED: "Error while sending email",
}
const MonthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
const DayNames = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ];

  module.exports={
    API_RESPONSE_STATUS_CODE,
    API_RESPONSE_MESSAGES,
    MonthNames,
    DayNames
  }