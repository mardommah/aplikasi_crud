import express from 'express'
import bodyParser from 'body-parser'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const app = express()

app.use(bodyParser.json())

app.post("/", async(req, res)=>{
    let namaBarang = req.body.namaBarang
    let merkBarang = req.body.merkBarang
    let hargaBarang = req.body.hargaBarang

    let random = (Math.random() + 100).toString(36).substring(7)

    let createSlug = (namaBarang + "-" + random)
    console.log(createSlug)

    let barang = await prisma.dataBarang.create({
        data: {
            namaBarang : namaBarang,
            slugBarang : createSlug,
            merkBarang : merkBarang,
            hargaBarang : hargaBarang
        }
    })

    if(barang){
        res.status(200).json({
            Description: "Success"
        })
    }
})

app.post("/category", async(req, res)=>{
    let namaJenis = req.body.namaJenis
    let idBarang = req.body.idBarang

    let random = (Math.random() + 100).toString(36).substring(7)
    let createSlug = namaJenis + "-" + random

    let categoryBarang = await prisma.JenisBarang.create({
        data : {
            slugJenis : createSlug,
            namaJenis : namaJenis,
            barangId : idBarang
        }
    })

    if (categoryBarang){
        res.send(200).json({
            Description: "success add category"
        })
    }
})

app.get("/barang/:namaBarang", async(req,res)=>{
    // get barang
    let namaBarang = req.params.namaBarang


    const barang = await prisma.dataBarang.findMany({
        where:{
            namaBarang: namaBarang
        }
    })

    if(barang){
        res.json({
            Status: "200",
            Description: barang
        })
    }

})

app.get("/jenis_barang/:nama", async(req,res)=>{
    // get barang
    let nama = req.params.nama


    const barang = await prisma.JenisBarang.findMany({
        where:{
            namaJenis: nama
        },
        include:{
            barang: true
        }
    })

    console.log((barang[0].barang.namaBarang))



    if(barang){
        res.json({
            Status: "200",
            Description: barang
        })
    }

})

export default app