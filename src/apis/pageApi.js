export default {
    index: {
        path: '/',
        title: '首页'
    },
    login: {
        path: '/login',
        title: '登录'
    },
    home: {
        path: '/home',
        children: {
            barManager: {
                path:'/home/barManager',
                title: '网吧管理',
                children:{
                    allBar:{
                        path:'/home/barManager/barAll',
                        title:'全部网吧'
                    },
                    recentRemote:{
                        path:'/home/barManager/recentRemote',
                        title:'最近远程'
                    }
                }
            },
            staffManage: {
                path: '/home/staffManage',
                title: '员工管理'
            },
            accountSafe: {
                path: '/home/accountSafe',
                title: '账号安全'
            },
            operationLog: {
                path: '/home/operationLog',
                title: '操作日志'
            }
        }
    }
}