export default {
    path:'/my',
    name:"我的",
    component:()=>import("../../views/my.vue"),
    children:[
        {
            path:'orderlist',
            name:'首页',
            component:()=>import('../../components/my/orderlist.vue')
        },
        {
            path:'address',
            name:'地址',
            component:()=>import('../../components/my/address.vue')
        },
        {
            path:'serve',
            name:'服务',
            component:()=>import('../../components/my/serve.vue')
        },
        {
            path:'user',
            name:'个人',
            component:()=>import('../../components/my/user.vue')
        },
    ]
}
