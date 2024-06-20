require('dotenv').config();

const express=require('express');
const mongoose=require('mongoose');

const cors=require('cors');

const multer=require('multer');
const {storage}=require('./cloudinary');

const User=require('./models/user');

// const upload=multer({dest:'uploads/'});
const upload=multer({storage});

const app=express();
app.use(cors());

mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch(err=>{
    console.log('Error', err);
});


app.post('/api/adduser', upload.single('photo'), async(req, res)=>{
    const user=new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        college: req.body.college,
        payment: req.body.payment,
        imageUrl: req.body.payment=="yes"?req.file.path:'',
        step: req.body.payment=="yes"?"PAID":"REGISTERED"
    });

    await user.save();
    res.send({"status": "200"});
});





app.listen(process.env.PORT, ()=>{
    console.log(`Listening to port ${process.env.PORT}`);
});

