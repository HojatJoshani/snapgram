import * as z from "zod";


export const SignupValidation = z.object({
    name: z.string().min(2, {message: 'نام کاربری خیلی کوتاه است'}),
    username: z.string().min(2, {message: 'نام کاربری خیلی کوتاه است'}),
    email: z.string().email(),
    password: z.string().min(8, {message: 'گذرواژه خیلی کوتاه است'})
  });