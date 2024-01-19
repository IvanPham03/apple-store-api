import Joi from 'joi'
// dùng joi đẻ verìy json


// verify json for sign up new account
const userValidationSignUp = data =>{
    const userSchema = Joi.object({
        email: Joi.string().email().lowercase(),
        // phone: Joi.string().pattern(/^[0-9]{10,11}$/),
        name: Joi.string().required(),
        role: Joi.string().default('user'),
        active: Joi.boolean().default(true),
        password: Joi.string().min(8).required()
        })
        //.or('email', 'phone')
        //nếu cho đăng nhập bằng sđt thì thêm vào để đảm bảo tồn tại ít nhất 1
        return userSchema.validate(data)
}

const userValidationSignIn = data =>{
    const userSchema = Joi.object({
        email: Joi.string().email().lowercase(),
        // phone: Joi.string().pattern(/^[0-9]{10,11}$/),
        password: Joi.string().required()
        })
        //.xor('email', 'phone') c
        return userSchema.validate(data)
}


export const  validation = {
    userValidationSignUp,
    userValidationSignIn
}