package main

import (
	"syscall/js"
)

// This calls a JS function from Go.
func main() {
	wait := make(chan struct{}, 0)
	js.Global().Set("xxx", js.FuncOf(xxx))
	<-wait
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

func xxx(this js.Value, args []js.Value) interface{} {
	to := args[0].Int()
	sum := 0
	for i := 0; i < to; i++ {
		sum = i + sum
	}
	return sum
}

//export threads
func threads() {
	c := make(chan int, 10)
	go func() {
		println("go程")
		c <- 1
	}()
	println("main")
}
