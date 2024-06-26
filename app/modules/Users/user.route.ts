import express, { NextFunction, Request, Response } from 'express';
import { User_Controller } from './user.controller';
import Zod_Validation_Request from '../../middlewares/zod.validator.request';
import { Zod_Teacher_Schema } from '../Teachers/teacher.zod.validation';
import { Zod_Student_Schema } from '../Students/student.zod.validation';
import { upload } from '../../utils/uploadImage';

const router = express.Router();

router.post('/teacher', upload.single('file'),(req:Request,res:Response,next:NextFunction)=>{
    req.body = JSON.parse(req.body.data);
    next();
},
Zod_Validation_Request(Zod_Teacher_Schema),
User_Controller.Create_Teacher_Controller);
router.post('/student',Zod_Validation_Request(Zod_Student_Schema),User_Controller.Create_Student_Controller)



export const User_Router = router;