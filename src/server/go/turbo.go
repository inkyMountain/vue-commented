package main

// This calls a JS function from Go.
func main() {
	println("go process running 🚀🚀🚀", add(10000))
}

//export multiply
func multiply(to int) int {
	sum := 0
	for i := 0; i < to; i++ {
		sum += i
	}
	return sum
}

//export add
func add(to int) int {
	sum := 0
	for i := 0; i < to; i++ {
		sum = i + sum
	}
	return sum
}
