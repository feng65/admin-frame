import http from '@/utils/http'
import httpApi from '@/apis/httpApi'

export const getUserInfoData=()=>{
    return http.post({
        url:httpApi.user.login,
    })
}

export const setUserInfoData=()=>{
    return http.post({
        url:httpApi.user.register,
    })
}

export const resetUserInfoData=()=>{
    return http.post({
        url:httpApi.user.reset,
    })
}

export const getLogin=({username,password,smsCode})=>{
    return http.post({
        url:httpApi.user.login,
        data:{
            username,
            password,
            smsCode
        }
    })
}

export const getCode=({phone,imgCode})=>{
    return http.post({
        url:httpApi.user.registeredSmsCode,
        data:{
            phone,
            imgCode,
        }
    })
}

export const getPhoneCode=({passport_mobile,passport_code})=>{
    return http.post({
        url:httpApi.user.register,
        data:{
            passport_mobile,
            passport_code
        }
    })
}

export const getRegister=({passportName,passportPassword,passportMobile,passportCode,passportQq,personalName})=>{
    return http.post({
        url:httpApi.user.register,
        data:{
            passportName,
            passportPassword,
            passportMobile,
            passportCode,
            passportQq,
            personalName
        }
    })
}