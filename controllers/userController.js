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

exports.jobs = (req, res, next) => {
    res.render("jobs");
};