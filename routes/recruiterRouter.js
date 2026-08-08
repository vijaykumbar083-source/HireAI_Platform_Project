const express = require("express");
const controller = require("../controllers/recruiterController");

const router = express.Router();

router.get("/", controller.recruiterdashboard);

router.get("/post_job", controller.postjob);
router.post("/post_job",controller.createJob);

router.get("/manage_jobs", controller.managejobs);
router.get("/view_applicants", controller.viewapplicants);
router.get("/interview_schedule", controller.interviewschedule);
router.get("/company_profile", controller.companyprofile);

router.get("/delete_job/:id", controller.deleteJob);

router.get("/edit_job/:id",controller.editjob);
router.post("/edit_job/:id",controller.updateJob);
module.exports = router;