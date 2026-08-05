exports.recruiterdashboard = (req, res) => {
    res.render("recruiter-dashboard");
};

exports.postjob = (req, res) => {
    res.render("post_job");
};

exports.managejobs = (req, res) => {
    res.render("manage_jobs");
};

exports.viewapplicants = (req, res) => {
    res.render("view_applicants");
};

exports.interviewschedule = (req, res) => {
    res.render("interview_schedule");
};

exports.companyprofile = (req, res) => {
    res.render("company_profile");
};