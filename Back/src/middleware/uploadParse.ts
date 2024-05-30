import { Request, Response, NextFunction } from "express";

const uploadParse = (req: Request, res: Response, next: NextFunction) => {

  if (!req.query.discordToken && !process.env.DISCORD_TOKEN)
    return res.status(400).send('No discord token found')
  if (!req.query.channelID && !process.env.DISCORD_CHANNEL_ID)
    return res.status(400).send('No channel ID found')
  if (!req.query.filename)
    return res.status(400).send('No filename found')
  if (!req.body)
    return res.status(400).send('No file found')
  next()
}

export default uploadParse