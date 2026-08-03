const express = require("express");
const path = require("path");
const userRouter=require('./routes/userRouter');
const app = express();

app.set("view engine", "ejs");

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, "public")));

app.use('/',userRouter);
app.use('/user_dashboard',userRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server Connected: http://localhost:${PORT}`);
});