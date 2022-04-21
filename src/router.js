import { createRouter, createWebHashHistory } from 'vue-router';
import Dashboard from './components/Dashboard.vue';

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./pages/auth/Login.vue'),
    },
    
    {
        path: '/profile',
        name: 'profile',
        component: () => import('./pages/profile/Profile.vue'),
    },
    {
        path: '/profile/edit',
        name: 'profile.edit',
        component: () => import('./pages/profile/EditProfile.vue'),
    },
    {
        path: '/users',
        name: 'users.index',
        component: () => import('./pages/users/Index.vue'),
    },
    {
        path: '/users/create',
        name: 'users.create',
        component: () => import('./pages/users/Create.vue'),
    },
    {
        path: '/users/:id/edit',
        name: 'users.edit',
        component: () => import('./pages/users/Edit.vue'),
    },
    {
        path: '/users/:id/show',
        name: 'users.show',
        component: () => import('./pages/users/Show.vue'),
    },
    {
        path: '/users/import',
        name: 'users.import',
        component: () => import('./pages/users/Import.vue'),
    },
    {
        path: '/users/update-roll-numbers',
        name: 'users.update-roll-numbers',
        component: () => import('./pages/users/UpdateRollNumberImport.vue'),
    },
    {
        path: '/roles',
        name: 'roles.index',
        component: () => import('./pages/roles/Index.vue'),
    },
    {
        path: '/roles/create',
        name: 'roles.create',
        component: () => import('./pages/roles/Create.vue'),
    },
    {
        path: '/roles/:id/edit',
        name: 'roles.edit',
        component: () => import('./pages/roles/Edit.vue'),
    },
    {
        path: '/roles/:id/show',
        name: 'roles.show',
        component: () => import('./pages/roles/Show.vue'),
    },

    {
        path: '/subjects',
        name: 'subjects.index',
        component: () => import('./pages/subjects/Index.vue'),
    },
    {
        path: '/subjects/create',
        name: 'subjects.create',
        component: () => import('./pages/subjects/Create.vue'),
    },
    {
        path: '/subjects/:id/edit',
        name: 'subjects.edit',
        component: () => import('./pages/subjects/Edit.vue'),
    },
    {
        path: '/subjects/:id/show',
        name: 'subjects.show',
        component: () => import('./pages/subjects/Show.vue'),
    },

    {
        path: '/colleges',
        name: 'colleges.index',
        component: () => import('./pages/colleges/Index.vue'),
    },
    {
        path: '/colleges/create',
        name: 'colleges.create',
        component: () => import('./pages/colleges/Create.vue'),
    },
    {
        path: '/colleges/:id/edit',
        name: 'colleges.edit',
        component: () => import('./pages/colleges/Edit.vue'),
    },
    {
        path: '/colleges/:id/show',
        name: 'colleges.show',
        component: () => import('./pages/colleges/Show.vue'),
    },

    {
        path: '/assignments',
        name: 'assignments.index',
        component: () => import('./pages/assignments/Index.vue'),
    },
    {
        path: '/assignments/create',
        name: 'assignments.create',
        component: () => import('./pages/assignments/Create.vue'),
    },
    {
        path: '/assignments/:id/edit',
        name: 'assignments.edit',
        component: () => import('./pages/assignments/Edit.vue'),
    },
    {
        path: '/assignments/:id/show',
        name: 'assignments.show',
        component: () => import('./pages/assignments/Show.vue'),
    },

    {
        path: '/assignments/:assignment_id/submissions',
        name: 'assignment-submissions.index',
        component: () => import('./pages/assignment-submissions/Index.vue'),
    },
    {
        path: '/assignments/:assignment_id/submissions/add',
        name: 'assignment-submissions.create',
        component: () => import('./pages/assignment-submissions/Create.vue'),
    },
    {
        path: '/assignments/:assignment_id/submissions/auto-evaluate',
        name: 'assignment-submissions.auto-evaluate',
        component: () => import('./pages/assignment-submissions/AutoEvaluate.vue'),
    },
    {
        path: '/assignments/:assignment_id/submissions/:id/add-marks',
        name: 'assignment-submissions.add-marks',
        component: () => import('./pages/assignment-submissions/AddMarks.vue'),
    },
    {
        path: '/assignments/:assignment_id/submissions/:id/show',
        name: 'assignment-submissions.show',
        component: () => import('./pages/assignment-submissions/Show.vue'),
    },

    // {
    //     path: '/formlayout',
    //     name: 'formlayout',
    //     component: () => import('./components/FormLayoutDemo.vue'),
    // },
    // {
    //     path: '/input',
    //     name: 'input',
    //     component: () => import('./components/InputDemo.vue'),
    // },
    // {
    //     path: '/floatlabel',
    //     name: 'floatlabel',
    //     component: () => import('./components/FloatLabelDemo.vue'),
    // },
    // {
    //     path: '/invalidstate',
    //     name: 'invalidstate',
    //     component: () => import('./components/InvalidStateDemo.vue'),
    // },
    // {
    //     path: '/button',
    //     name: 'button',
    //     component: () => import('./components/ButtonDemo.vue'),
    // },
    // {
    //     path: '/table',
    //     name: 'table',
    //     component: () => import('./components/TableDemo.vue'),
    // },
    // {
    //     path: '/list',
    //     name: 'list',
    //     component: () => import('./components/ListDemo.vue'),
    // },
    // {
    //     path: '/tree',
    //     name: 'tree',
    //     component: () => import('./components/TreeDemo.vue'),
    // },
    // {
    //     path: '/panel',
    //     name: 'panel',
    //     component: () => import('./components/PanelsDemo.vue'),
    // },
    // {
    //     path: '/overlay',
    //     name: 'overlay',
    //     component: () => import('./components/OverlayDemo.vue'),
    // },
    // {
    //     path: '/menu',
    //     component: () => import('./components/MenuDemo.vue'),
    //     children: [
    //         {
    //             path: '',
    //             component: () => import('./components/menu/PersonalDemo.vue'),
    //         },
    //         {
    //             path: '/menu/seat',
    //             component: () => import('./components/menu/SeatDemo.vue'),
    //         },
    //         {
    //             path: '/menu/payment',
    //             component: () => import('./components/menu/PaymentDemo.vue'),
    //         },
    //         {
    //             path: '/menu/confirmation',
    //             component: () => import('./components/menu/ConfirmationDemo.vue'),
    //         },
    //     ],
    // },
    // {
    //     path: '/messages',
    //     name: 'messages',
    //     component: () => import('./components/MessagesDemo.vue'),
    // },
    // {
    //     path: '/file',
    //     name: 'file',
    //     component: () => import('./components/FileDemo.vue'),
    // },
    // {
    //     path: '/chart',
    //     name: 'chart',
    //     component: () => import('./components/ChartDemo.vue'),
    // },
    // {
    //     path: '/misc',
    //     name: 'misc',
    //     component: () => import('./components/MiscDemo.vue'),
    // },
    // {
    //     path: '/crud',
    //     name: 'crud',
    //     component: () => import('./pages/CrudDemo.vue'),
    // },
    // {
    //     path: '/timeline',
    //     name: 'timeline',
    //     component: () => import('./pages/TimelineDemo.vue'),
    // },
    // {
    //     path: '/empty',
    //     name: 'empty',
    //     component: () => import('./components/EmptyPage.vue'),
    // },
    // {
    //     path: '/documentation',
    //     name: 'documentation',
    //     component: () => import('./components/Documentation.vue'),
    // },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
