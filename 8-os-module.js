const os = require('os')

//info about current user
const user = os.userInfo()
//console.log(user)

// method returns the system uptimne in seconds
console.log(`the System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem()/1024000,
    freeMem: os.freemem()/1024000
}
console.log(currentOS);