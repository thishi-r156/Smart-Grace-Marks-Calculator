const express = require ("express")
const Profile = require("../models/profile_model")
const Request = require("../models/request_model")


const { createRequest, getProfiles,getRequests, getoneProfile,deleteProfile, updateProfile, getoneRequest} = require("../controller/profileController")

const router = express.Router();

router.get("/", getRequests);
router.get("/:id", getoneRequest);
router.post("/", createRequest);

module.exports = router;