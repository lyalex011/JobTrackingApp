const User = require('../models/userModel')

//show
module.exports.show = async (req, res) => {

    try {
        const foundUser = await User.findById(req.id)

        res.json({
            firstName: foundUser.firstName, 
            lastName: foundUser.lastName, 
            email: foundUser.email,
            id: foundUser._id
        })
    } catch(error) {
        res.json({ error: error.message })
    }
}

//delete
module.exports.delete = async (req, res) => {
    try{
        const posts = await User.findByIdAndDelete(req.params.authorId)
        res.json({message: 'User Deleted'})
    }catch(error){
        console.log(error.message)
        res.json({error: error.message})
    }
}

// update
module.exports.update = async (req, res) => {

    try {
        const foundUser = await User.findByIdAndUpdate({_id: req.params.authorId}, req.body)
        
        res.json({message: `user is ${foundUser.email}`})

    } catch (error) {
        res.json({ error: error.message })
    }
}
