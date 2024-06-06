// Run the server

const serverInstance = require("./app");

const PORT = process.env.PORT || 3000;

serverInstance.listen(PORT, () => {
    console.log("server is running")
});