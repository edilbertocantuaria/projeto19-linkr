import joi from "joi"

export const signUpSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    photo: joi.string().uri().required()
  }) 
  
  export const signInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
  })