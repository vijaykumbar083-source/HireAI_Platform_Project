const Job=require("../models/job");

exports.recruiterdashboard = (req, res) => {
    console.log("recruiterdashboard");
    res.render("recruiter-dashboard");
};

exports.postjob = (req, res) => {
    console.log("post job");
    res.render("post_job");
};

exports.managejobs = async(req, res) => {
    console.log("manage jobs");
    try{
        const jobs=await Job.find();
        res.render("manage_jobs",{
            jobs
        })

    }catch(err){
        console.log(err)
        res.send("Error");

    }
    
};

exports.viewapplicants = (req, res) => {
    console.log("view applicants");
    res.render("view_applicants");
};

exports.interviewschedule = (req, res) => {
    console.log("intervuew schedule");
    res.render("interview_schedule");
};

exports.companyprofile = (req, res) => {
    console.log("company profile");
    res.render("company_profile");
};

//post 
exports.createJob=async(req,res)=>{
    console.log("Job Created Succefully");
    try{
         const job=new Job(req.body);
         await job.save();

         res.redirect("/recruiter_dashboard/manage_jobs");
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Error while posting job");
    }

}