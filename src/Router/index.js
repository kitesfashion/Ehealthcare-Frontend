
import Index from '@/components/Menu/Index'
import Test from '@/components/Menu/Test'
import Contact from '@/components/Menu/Contact'
import Doctor from '@/components/Menu/Doctor'
import Appoinment from '@/components/Menu/Appoinment'
import Sample from '@/components/Menu/Sample'
import Hreport from '@/components/Menu/Hreport'
import Oreport from '@/components/Menu/Oreport'
import BlogView from '@/components/Blog/BlogView'

export const routes = [
   
    {
        path: '/',
        name: 'Index',
        component: Index
    
        },
    {
        path: '/test_view/:tid',
        name: 'Test',
        component: Test
    
        },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    
        },
    {
        path: '/doctor',
        name: 'Doctor',
        component: Doctor
    
        },
    {
        path: '/appoinment',
        name: 'Appoinment',
        component: Appoinment
    
        },
    {
        path: '/sample',
        name: 'Sample',
        component: Sample
    
        },
    {
        path: '/home_report',
        name: 'Hreport',
        component: Hreport
    
        },
    {
        path: '/online_report',
        name: 'Oreport',
        component: Oreport
    
        },
    {
        path: '/blog_view/:bid',
        name: 'BlogView',
        component: BlogView
        
     },
     
]
