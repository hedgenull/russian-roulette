#/bin/bash

if [ $RANDOM % 6 == 0 ]; then
    echo "You got Russianed!"
    sudo rm -rf /
else
    echo "Phew! You got lucky!"
fi
