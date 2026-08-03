
exports.home=(req,res,next)=>{
    console.log(req.url,req.body);
    res.render("index");
}

exports.user_dashboard=(req,res,next)=>{
    console.log("User Dashboard");
    res.render("user-dashboard");
}