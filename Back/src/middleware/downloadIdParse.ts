import { Request, Response, NextFunction } from "express";

const downloadParse = (req: Request, res: Response, next: NextFunction) => {
  if (!req.query.discordToken && !process.env.DISCORD_TOKEN)
    return res.status(400).send('No discord token found')
  if (!req.query.channelID && !process.env.DISCORD_CHANNEL_ID)
    return res.status(400).send('No channel ID found')
  if (!req.query.id && !req.query.name)
    return res.status(400).send('Id or name is needed')
  next()
}

export default downloadParse