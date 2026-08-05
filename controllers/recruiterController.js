exports.recruiterdashboard = (req, res) => {
    console.log("recruiterdashboard");
    res.render("recruiter-dashboard");
};

exports.postjob = (req, res) => {
    console.log("post job");
    res.render("post_job");
};

exports.managejobs = (req, res) => {
    console.log("manage jobs");
    res.render("manage_jobs");
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