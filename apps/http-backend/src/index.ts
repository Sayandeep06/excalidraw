import express from 'express'
import { Request, Response } from 'express';
import middleware from './middleware';
import jwt from "jsonwebtoken"
import { JWT_SECRET } from '@repo/backend-common/config'
import {CreateUserSchema, CreateRoomSchema, SigninSchema} from '@repo/common/types';
import {prisma} from '@repo/db/client'
const app = express()
app.use(express.json())

app.post('/signup', async (req: Request, res: Response)=>{

    const parsedData = CreateUserSchema.safeParse(req.body);
    if(!parsedData.success){
        console.log(parsedData.error)
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }
    const user: any = await prisma.user.findFirst({
        where:{
            email: req.body.username,
        }
    })
    if(user){

        res.json({
            message: "user already exists"
        })
        return;
    }
    const result = await prisma.user.create({
        data:{
            email: parsedData.data.username,
            password: parsedData.data.password,
            name: parsedData.data.name,
        }
    });
    res.json({
        message: "created",
        id: result.id
    })
})

app.post('/signin', async (req: Request, res: Response)=>{

    const data = SigninSchema.safeParse(req.body);
    if(!data.success){
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }

    const user: any = await prisma.user.findFirst({
        where:{
            email: req.body.email,
            password: req.body.password
        }
    })
    if(!user){
        res.json({
            message: "User doesnt exist"
        })  
        return;
    }

    const userId = user.id;
    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "Signed in successfully",
        token: token
    })
})

app.post('/room', middleware, async (req: Request, res: Response)=>{
    const parsedData = CreateRoomSchema.safeParse(req.body);
    //@ts-ignore
    const userId = req.userId;
    if(!parsedData.success){
        res.json({
            message: "Incorrect inputs"
        })
        return
    }

    const room = await prisma.room.create({
        data:{
            slug: parsedData.data.name,
            adminId: userId
        }
    })

    res.json({
        room: room.id
    })
})

app.get("/chats/:roomId", async (req, res) => {
    try {
        const roomId = Number(req.params.roomId);
        console.log(req.params.roomId);
        const messages = await prisma.chat.findMany({
            where: {
                roomId: roomId
            },
            orderBy: {
                id: "desc"
            },
            take: 1000
        });

        res.json({
            messages
        })
    } catch(e) {
        console.log(e);
        res.json({
            messages: []
        })
    }
    
})

app.listen(3001);
