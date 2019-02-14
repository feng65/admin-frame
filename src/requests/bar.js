import http from '@/utils/http'
import httpApi from '@/apis/httpApi'

// 获取网吧分组列表
export const getBarGroupList = () => {
    return new Promise((resolve) => {
        resolve(http.usualPost({
            url: httpApi.bar.getGroupList
        }))
    })
}

// 获取全部网吧的在线数-总数
export const getAllBarOnlineTotalNum = () => {
    return http.usualPost({
        url: httpApi.bar.getAllBarOnlineTotalNum
    })
}

// 获取最近远程数
export const getRecentRemoteNum = () => {
    return http.usualPost({
        url: httpApi.bar.getRecentRemoteNum
    })
}

// 获取服务器离线的网吧数
export const getServerOfflineBarNum = () => {
    return http.usualPost({
        url: httpApi.bar.getServerOfflineBarNum
    })
}

// 获取网吧列表
export const getBarList = ({
    groupName,
    page,
    pageSize,
    searchTxt
}) => {
    return http.usualPost({
        url: httpApi.bar.getBarList,
        data: {
            groupName,
            page,
            pageSize,
            searchTxt
        }
    })
}