const Jobs = require('../models/jobModel')


// fetching all jobs from db
module.exports.index = async (req,res) => {
    try{
        const authorId = req.params.authorId;
        console.log("index:", authorId)
        //Find the job post by the author.
        const jobs = await Jobs.find({ user: authorId }).sort({createdAt: 1})
        console.log(jobs)
        res.json(jobs)
    }catch(error){
        console.log(error.message)
        res.json({error: error.message})
    }
}

// Delete function export to delete post 
module.exports.delete = async (req, res) => {
    try{
        //Finds data by ID and delete the query posts
        const jobs = await Jobs.findByIdAndDelete(req.params.id)
        res.json({message: 'Sucessfully Deleted'})
    }catch(error){
        console.log(error.message)
        res.json({error: error.message})
    }
}
// Update function export to update current post
module.exports.update = async (req,res) => {
    try{
        //Finds the post by ID and updates the data
        const updateJob = await Jobs.findByIdAndUpdate(req.params.id)
        res.json(updateJob)
    }catch(error){
        console.log(error.message)
        res.json({error: error.message})
    }
}

// Create function export to create a new post
module.exports.create = async (req,res) => {
    try{
        // Generate a new posts from the database
        console.log(req.body)
        const posts = await Jobs.create(req.body)
        res.json(posts)
    }catch(error){
        console.log(error.message)
        res.json({error: error.message})
    }
}
// Show function export to display post
module.exports.show = async (req, res) => {
    try{
        // This will get the data from the database by search for the ID
        const posts = await Jobs.findById(req.params.id)
        res.status(200).json(posts)
    }catch(error){
        console.log(error.message)
        res.status(404).json({error: error.message})
    }
}