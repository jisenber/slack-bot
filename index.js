
//brings in rea
var RtmClient = require('@slack/client').RtmClient;

//brings in the events property
var RTM_EVENTS = require('@slack/client').RTM_EVENTS;

//API token for the Jacob Bot
var bot_token = process.env.SLACK_BOT_TOKEN || '';

var rtm = new RtmClient(bot_token);
rtm.start();

rtm.on(RTM_EVENTS.MESSAGE, function handleRtmMessage(message) {
  if (message.text === 'Hello robo-jacob') {
    //var channel = '#bot'; //could also be a channel, group, DM, or user ID (C1234), or a username (@don)
    rtm.sendMessage('Hello <@' + message.user + '>! Jacob\'s AI implementation leaves something to be desired', message.channel);
  } else if (message.text === 'shit') {
    rtm.sendMessage('watch your language', message.channel);
  }
});
