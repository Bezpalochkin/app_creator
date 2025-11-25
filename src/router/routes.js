import { ROUTE_NAMES } from '@r/constants'
import { organizationGuard } from '@r/guards'


const creatorRoutes = [
//     {
//         path: ROUTE_NAMES.BASE_SETTINGS_SCREEN,
//         name: ROUTE_NAMES.BASE_SETTINGS_SCREEN,
//         meta: { screen: 'baseSettingsScreen' },
//         component: () => import('@v/BaseSettingsView.vue'),
//     },                    
//     {
//         path: ROUTE_NAMES.SPLASH_SCREEN,
//         name: ROUTE_NAMES.SPLASH_SCREEN,
//         meta: { screen: 'splashScreen' },
//         component: () => import('@v/SplashScreenView.vue'),
//     },                    
        {
            path: ROUTE_NAMES.START_SCREEN,
            name: ROUTE_NAMES.START_SCREEN,
            meta: { 
                screen: 'mainScreen', 
                leftSidebar: 'components',
                rightSidebar: 'settings'
            },
            component: () => import('@v/StartScreenEdit.vue'),
        },
        {
            path: ROUTE_NAMES.LEFT_MENU_SCREEN,
            name: ROUTE_NAMES.LEFT_MENU_SCREEN,
            meta: { 
                screen: 'leftMenu',
                leftSidebar: 'content',
                rightSidebar: 'settings'
            },
            component: () => import('@v/leftMenuScreenEdit.vue'),
        },
        {
            path: ROUTE_NAMES.CATALOG_SCREEN,
            name: ROUTE_NAMES.CATALOG_SCREEN,
            meta: { 
                screen: 'catalogScreen', 
                leftSidebar: 'components',
                rightSidebar: 'settings'
            },                
            component: () => import('@v/CatalogScreenEdit.vue'),
        },
]
const routes = [
    {
        path: '/error',
        name: ROUTE_NAMES.ERROR_SCREEN,
        component: () => import('@l/ErrorLayout.vue')
    },
    {
        path: '/org/:organizationId',
        component: () => import('@l/DefaultLayout.vue'),
        beforeEnter: organizationGuard,
        // redirect: { name: ROUTE_NAMES.BASE_SETTINGS_SCREEN },
        children: [
            { 
                path: 'creator',
                component: () => import('@l/CreatorLayout.vue'),
                children: creatorRoutes
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/error'
    }
]

export default routes