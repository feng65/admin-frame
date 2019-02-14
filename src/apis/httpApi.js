const baseUrl=`api`
export default {
    user:{
        login:`/${baseUrl}/login`,
        register:`/${baseUrl}/register`,
        registeredCode:`/api/common/getImgCode`,
        registeredSmsCode:`/${baseUrl}/common/getRegisterSms`,
        reset:`/${baseUrl}/reset`
    }
}