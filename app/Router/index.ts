import express from 'express'
import { User_Router } from '../modules/Users/user.route'


const router = express.Router()


const ProjectRoutes = [
    {
        path : '/user',
        route : User_Router
    }
]

ProjectRoutes.forEach(one =>router.use(one.path,one.route));


export default router;