const Meme = require('../models/meme');

exports.saveMemes = (req,res)=>{
    console.log(req.body)
    var meme = new Meme(req.body);
    meme.save((err,meme)=>{
        if(err){
            return res.status(400).json({
                message: "Cannot Save the meme to the Database. Might be this url already exists in our Database",
            })
        }
        res.status(200).json({
            "id": meme._id
        })
    })
}

exports.getMemes = (req, res)=>{
    Meme.find().sort({ createdAt: -1 }).limit(100).exec((err,memes)=>{
        if(err){
            return res.status(500).json({
                err:"Error occurred"
            })
        }
        if(!memes)return res.status(200).send([]);
        res.status(200).json(memes);

    })
}

exports.getMemeById = (req, res) =>{
    Meme.findById(req.params.memeId).exec((err,meme)=>{
        if(err || !meme){
            return res.status(404).json({
                err:"Can not get the meme"
            })
        }
        console.log(meme);
        res.status(200).json({
            id:meme._id,
            name:meme.name,
            url:meme.url,
            caption:meme.caption
        });
    })

}

exports.updateMeme = (req,res)=>{
    if(req.body.name) return res.status(403).json({error:"You Can not Change te name"});
    console.log(req.body)
    Meme.findOneAndUpdate(
        {_id:req.params.memeId},
        {$set:req.body},
        {new: true,useFindAndModify:false},
        (err,meme)=>{
            console.log(err);
            console.log(meme);
            if(err && !meme) return res.status(403).json({error:"Can not Update the Details.Might be you are creating Duplicates"});
            return res.json({
                id:meme._id,
                name:meme.name,
                url:meme.url,
                caption:meme.caption
            });
        }
    )

}

exports.getAllMemes = (req, res)=>{
    Meme.find().sort({ createdAt: -1 }).exec((err,memes)=>{
        if(err){
            return res.status(500).json({
                err:"Error occurred"
            })
        }
        if(!memes)return res.status(200).send([]);
        res.status(200).send(memes);

    })
}