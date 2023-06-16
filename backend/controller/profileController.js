const Profile = require("../models/profile_model.js")
const Request = require("../models/request_model.js")

const mongoose = require("mongoose")

const getProfiles = async(req, res) => {
    console.log(req)
    const profiles = await Profile.find({}).sort({createdAt: -1})
    res.status(200).json(profiles)
}

const getRequests = async(req, res) => {
    console.log(req)
    const requestsAll = await Request.find({}).sort({createdAt: -1})
    res.status(200).json(requestsAll)
}


const getoneProfile = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such user"})

    }
    const profile = await Profile.findById(id)

    if(!profile){
        return res
        .status(404).json({error: "No such user"})
    }

    res.status(200).json(profile)

}

// const createProfile = async (req, res) => {
//     const {name, age,degree,year,course,section,current_cg,passing_out,roll_no, email_id,personal_mail,advisor, dob, perf } = req.body
//     try{
//         const profile = await Profile.create({name, age,degree,year,course,section,current_cg,passing_out,roll_no, email_id,personal_mail,advisor, dob, perf}) 
//         res.status(200).json(profile)
//     }catch(error){
//         res.status(400).json({error:error.message})
//     }
//     res.json({})
// }


const createRequest = async (req, res) => {
    const {name, roll_no,request } = req.body
    try{
        const newRequest = await Request.create({name, roll_no,request}) 
        console.log(newRequest)
        res.status(200).json(newRequest)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

const getoneRequest = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such user"})

    }
    const request = await Request.findById(id)

    if(!request){
        return res
        .status(404).json({error: "No such user"})
    }

    res.status(200).json(request)
}


const deleteProfile = async(req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such user"})

    }
    const profile = await Profile.findOneAndDelete({_id:id})

    
    if(!profile){
        return res.status(404).json({error: "No such user"})
    }

    res.status(200).json(profile)
}

const updateProfile = async(req,res)=>{
    const {id} = req.params 
    if(!mongoose.Types.ObjectId.isVaild(id)){
        return res.status(404).json({error:"No such user"})
    }

    const details = await Profile.findOneAndUpdate({_id: id}, {
        ...req.body 
    })


    if(!details) {
        return res.status(404).json({error:"No such user"})
    }

    res.status(200).json(details)
}

module.exports = {
     getProfiles, getoneProfile,getRequests, deleteProfile, updateProfile, getoneRequest,createRequest
}