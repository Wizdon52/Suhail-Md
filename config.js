const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_42_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDk4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyLFxuICAgICAgICA3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDcyLFxuICAgICAgICAyNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNixcbiAgICAgICAgNzYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDU4LFxuICAgICAgICA0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA1OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgNjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxODksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDcyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTksXG4gICAgICAgIDQyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk2LFxuICAgICAgICA3OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzMixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMixcbiAgICAgICAgODksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMyLFxuICAgICAgICA0OCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgODksXG4gICAgICAgIDQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA3MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTA4LFxuICAgICAgICA1OSxcbiAgICAgICAgODcsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5LFxuICAgICAgICAyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA0NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDg0LFxuICAgICAgICA2MSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDksXG4gICAgICAgIDY3LFxuICAgICAgICA3LFxuICAgICAgICAyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidS9wUXFhT0dNN3l3TERmSFcwRjVDSS9Yd3h5aVRJWlJHNTY4NmZHbUtudz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZGtOakd0NXZUZm1KRldocjVVMWpkQVwiLFxuICBcInBob25lSWRcIjogXCIxNWYzZDNjYi00OWNkLTQ4Y2ItYmM0ZC1kMTdiZDg5MzVkZDFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMsXG4gICAgICA4NyxcbiAgICAgIDgxLFxuICAgICAgMjE4LFxuICAgICAgMjM5LFxuICAgICAgMTA3LFxuICAgICAgMTQ2LFxuICAgICAgNjksXG4gICAgICAxODksXG4gICAgICAxMTIsXG4gICAgICAxNTEsXG4gICAgICAxNTIsXG4gICAgICAxNzUsXG4gICAgICAxMzEsXG4gICAgICAyLFxuICAgICAgMzQsXG4gICAgICAxMDgsXG4gICAgICA4MSxcbiAgICAgIDk4LFxuICAgICAgNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjgsXG4gICAgICAxODksXG4gICAgICAxNDAsXG4gICAgICAxOTEsXG4gICAgICAyMjYsXG4gICAgICAxNzMsXG4gICAgICAyMTYsXG4gICAgICAxNDEsXG4gICAgICAxNTcsXG4gICAgICAyMCxcbiAgICAgIDE1MixcbiAgICAgIDUwLFxuICAgICAgMjUxLFxuICAgICAgMjUyLFxuICAgICAgMTQ4LFxuICAgICAgMixcbiAgICAgIDIzMSxcbiAgICAgIDIyNyxcbiAgICAgIDg4LFxuICAgICAgOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUzlWMTdUV0tcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMzY3NzcwMTA6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExODcwODY4NDk5MjUyNToyN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMbUV2OElCRVBHZ3NMTUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkt4UVFDKzhJVTFkUXFra3VBUEE2OXo1ZU4wZk41U1JHclIraWh5aDlkM0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSGZyd1g5RnN2WnhVWTlRR056a0hWd0cxLzFwcUtTdkpJaW5FbFYrQkptTTdURW5SMjY2N2JFM0dLaG02clVBVGp6ZmF1b1gxTktmMGp6WEdlNXJ1QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaUF6ZDdZVEZNdncrcXV0WkF1dm0wcWhHSWFUQTNzU2lJVEk3bTFhaTBRaVZNaC9YZkZGVjVlV2h0ckJBaFJSVlppTkIzV0RSS09WNGdoRFBCMGxMaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAzNjc3NzAxMDoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MzU4MTMzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR0h1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHSHUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwM3VPV2w2RmR6Zy8vZ25qYmRvZHZLUUNobXg2cUwvUmNrNkxweW1PRldRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQwNzg4MDI0OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
