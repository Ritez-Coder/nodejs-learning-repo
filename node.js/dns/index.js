const dns = require("dns");

const dns_server = dns.getServers();
console.log(dns_server);

dns.lookup("127.0.0.53", (err, addresses, family) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("addresses:", addresses);
  console.log("family:", family);
});
