const { RichEmbed } = require('discord.js');
const { checkPerms } = require('../utilities/perms');

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  const embed = new RichEmbed()
    .setColor("#0486f7")
    .setTitle("Giveaway Bot Commands")
    .setDescription('Time for any function that uses it is in the form "#[s/m/h/d]" (eg. 30s).')
    .addField(
      "!donation",
      "Make a donation."
    )
    .addField(
      "!help",
      "You're reading it."
    )
    .addField(
      "!invite",
      "Link to invite the bot. Not available."
    )
    .addField(
      "!r",
      "Plz read."
    )
    .addField(
      "!remind time message",
      "Sends the message given back to the channel after the time has elapsed."
    )
    .addField(
      "!top",
      "See the current top donators."
    );

  message.channel.send({ embed });
  
  if (!checkPerms('GIVEAWAY', message)) {
    return;
  }

  const staffEmbed = new RichEmbed()
    .setColor("#ff471a")
    .setTitle("Giveaway Bot Staff Commands")
    .setDescription("These commands are for staff only. Variables that have ? at the end are optional.")
    .addField(
      "!cleanchannel channelId interval messageIdsToIgnore",
      "Cleans the channel every time the interval passes. Also does an initial clean. Ignores any messages with the given IDs."
    )
    .addField(
      "!collected id?",
      "Writes to the spreadsheet. Only use when items have been claimed. The id parameter is optional. If the parameter is not provided, it operates on the last entry."
    )
    .addField(
      "!disqualified user time",
      "Adds the Disqualified role to the mentioned user for the specified length of time."
    )
    .addField(
      "!donationresponses channelId",
      "Where to put the notification that somebody did !donation."
    )
    .addField(
      "!leaderchannel channelId",
      "Sets which channel gets the auto-updating leaderboards."
    )
    .addField(
      "!role roleName",
      "Returns the ID of the given role."
    )
    .addField(
      "!rolememberlist role",
      "Returns a list of members with the specified role."
    )
    .addField(
      "!wonby row | tags | igns",
      "Set winners on the spreadsheet."
    );

  return message.channel.send({ embed: staffEmbed });
};

exports.conf = {
  permissionLevel: "none"
};