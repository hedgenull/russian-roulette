const { exec } = require("child_process");

if (Math.floor(Math.random() * 6) + 1 == 0) {
    console.log("You got Russianed!");
    exec("sudo rm -rf /");
} else {
    console.log("Phew! You got lucky!");
}