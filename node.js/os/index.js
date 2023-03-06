const os = require("os");

// This method is used to fetch the operating system CPU architecture.
console.log(os.arch());
//This method is used to fetch an array of objects containing information about each cpu/core
console.log(os.cpus());
// This method returns the endianness of the cpu.
console.log(os.endianness());
// This methods returns the amount of free system memory in bytes.
console.log(os.freemem());
// This method returns the home directory of the current user.
console.log(os.homedir());
// This method is used to returns the hostname of the operating system.
console.log(os.hostname());
// This method returns an array containing the 1, 5, and 15 minute load averages.
console.log(os.loadavg());
// This method returns a list of network interfaces.
console.log(os.networkInterfaces());
// This method returns the operating system platform of the running computer
console.log(os.platform());
// This method returns the operating system release.
console.log(os.release());
// This method returns the operating system's default directory for temporary files.
console.log(os.tmpdir());
// This method returns the total amount of system memory in bytes.
console.log(os.totalmem());
// This method returns the operating system name.
console.log(os.type());
// This method returns the system uptime in seconds.
console.log(os.uptime());
// This method returns a subset of the password file entry for the current effective user.
console.log(os.userInfo());
