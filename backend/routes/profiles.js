const express = require ("express")
const Profile = require("../models/profile_model")
const Request = require("../models/request_model")


const { createRequest, getProfiles,getRequests, getoneProfile,deleteProfile, updateProfile, getoneRequest} = require("../controller/profileController")
const router = express.Router()

router.get("/",  getProfiles)

router.get("/:id",getoneProfile)
// router.get("/requests/:id",getoneRequest)
// router.get("/allrequests",getRequests)



// router.post("/", createProfile)

// router.post("/", createRequest)


router.delete("/:id",  deleteProfile) 

router.patch("/:id", updateProfile)

module.exports = router