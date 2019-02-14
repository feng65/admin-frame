import PAGE_API from '@/apis/pageApi'
import {
    getLastPath
} from '@/utils/url'


export default [{
        path: '/',
        name: 'index',
        redirect: PAGE_API.home.path,
    },
    // 登录后首页
    {
        path: PAGE_API.home.path,
        name: 'homeIndex',
        meta: {
            notCache: true
        },
        component: () =>
            import('@/pages/home'),
        children: [
            // 登录后首页重定向网吧管理页面
            {
                path: '',
                name: 'PAGE_API.home.children.barManager.path',
                redirect: PAGE_API.home.children.barManager.path,
            },
            // 网吧管理
            {
                path: getLastPath(PAGE_API.home.children.barManager.path),
                name: 'PAGE_API.home.children.barManager.path',
                meta: {
                    notCache: true,
                    // title: '网吧管理'
                },
                component: () =>
                    import('@/pages/barManager'),
                children: [{
                        path: '',
                        name: 'PAGE_API.home.children.barManager.path',
                        redirect: PAGE_API.home.children.barManager.children.allBar.path,
                    },
                    // 全部网吧
                    {
                        path: getLastPath(PAGE_API.home.children.barManager.children.allBar.path),
                        name: 'PAGE_API.home.children.barManager.children.allBar.path',
                        meta: {
                            notCache: true
                        },
                        component: () =>
                            import('@/pages/barManager/router/allBar/index')
                    },
                    // 最近远程
                    {
                        path: getLastPath(PAGE_API.home.children.barManager.children.recentRemote.path),
                        name: 'PAGE_API.home.children.barManager.children.recentRemote.path',
                        meta: {
                            notCache: true
                        }
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        name: 'error_404',
        redirect: '/',
        meta: {},
    },
    {
        path: '*',
        name: 'error_404',
        redirect: '/',
        meta: {},
    }
]