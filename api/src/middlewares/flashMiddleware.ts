import { Request, Response, NextFunction } from 'express'



export const flashMeassage(req, res, next){
  req.locals.success = req.flash('success')
  next()
}