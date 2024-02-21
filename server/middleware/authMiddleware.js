import JWT from "jsonwebtoken"

//protected route for home page
export const requiredSignIn = async (res, req, next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET)
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
    }
}