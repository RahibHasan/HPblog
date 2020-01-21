import CustomerComponent from './components/customer.vue'
import DashboardComponent from './components/dashboard.vue'
export const routes=[
	{
		path:"/customer",
		component:CustomerComponent,
		name:"customer",
		meta:{
			title:"Customer"
		}
	},
	{
		path:"/home",
		component:DashboardComponent,
		name:"dashboard",
		meta:{
			title:"Dashboard"
		}
	},
	{
		path:"/",
		component:DashboardComponent,
		name:"defaultview",
		meta:{
			title:"Dashboard"
		}
	}

	
];