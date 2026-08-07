const Job=require("../models//job");
exports.home = (req, res, next) => {
    console.log(req.url, req.body);
    res.render("index");
};

exports.user_dashboard = (req, res, next) => {
    console.log("User Dashboard");
    res.render("user-dashboard");
};

exports.profile = (req, res, next) => {
    res.render("profile");
};

exports.resume = (req, res, next) => {
    res.render("resume");
};

exports.settings = (req, res, next) => {
    res.render("user_settings");
};

exports.applications = (req, res, next) => {
    res.render("applications");
};

exports.interviews = (req, res, next) => {
    res.render("user_interview");
};

exports.jobs = async(req, res, next) => {
    console.log("User Jobs");
    try{
        const jobs=await Job.find();
        res.render("jobs",{
            jobs
        })

    }catch(err){
        console.log(err);
        res.status(500).send("Error fetching jobs");
    }
};