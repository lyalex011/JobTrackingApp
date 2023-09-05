const jwt = require('jsonwebtoken')

function authorize(req, res, next) {


    try {
        // 1. Check if the request has a token (in the Authorization header)

        let token = req.header("Authorization")

        if (!token) {
            return res.status(403).json({ error: 'No token provided'})
        }
        token = token.replace("Bearer ", "")


        // 2. Check that the token is valid and not expired

        const payload = jwt.verify(token, process.env.JWT_SECRET)
        
   

        if (payload.error) {
            return res.status(403).json({ error: payload.error })
        }

        // 3. Attach the payload from the token to the request object (req)

        req.id = payload.id 
        req.username = payload.username

        // 4. Move on to the requested route (next)

        next()

    } catch(err) {

        console.log(err.message)
        res.status(403).json({ error: err.message })

    }
}

module.exports = {
    authorize
}