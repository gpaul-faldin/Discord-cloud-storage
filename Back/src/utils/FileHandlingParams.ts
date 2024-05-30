

export default function fileHandlingParams(token: string | undefined, channelID: string | undefined) {
  var retToken, retChannelID;

  if (!token) {
    retToken = process.env.DISCORD_TOKEN as string
  } else {
    retToken = token
  }

  if (!channelID) {
    retChannelID = process.env.DISCORD_CHANNEL_ID as string
  } else {
    retChannelID = channelID
  }

  return { retToken, retChannelID }
}