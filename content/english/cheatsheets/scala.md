---
title: "Scala"
meta_title: ""
description: "**Scala cheatsheet**"
author: "CodeYodha"
draft: false
---

# 📘 Scala Cheatsheet - Essential Syntax & Commands


### 🛠️ Setup & Running
scala: Start REPL (interactive shell)

scalac MyFile.scala: Compile Scala file

scala MyFile: Run compiled class

scala MyFile.scala: Run script directly

### 📄 Variables & Data Types
val x = 10: Immutable value

var y = 20: Mutable variable

val name: String = "Scala": Explicit type

Common types: Int, Double, Boolean, String, Unit, Any

### 📦 Collections
Lists: val nums = List(1, 2, 3)

Sets: val items = Set("a", "b")

Maps: val m = Map("a" -> 1, "b" -> 2)

Arrays: val arr = Array(1, 2, 3)

### 🧮 Operators
Arithmetic: +, -, *, /, %

Comparison: ==, !=, >, <, >=, <=

Logical: &&, ||, !

### 🔁 Control Flow
If/Else: if (x > 0) println("Positive") else println("Negative")

Match (like switch):
x match { case 1 => "One"; case _ => "Other" }

For loop: for (i <- 1 to 5) println(i)

### 🔄 Functions
Basic: def add(a: Int, b: Int): Int = a + b

Anonymous: val add = (a: Int, b: Int) => a + b

### 🧱 Classes & Objects
Class: class Person(val name: String, val age: Int)

Object (Singleton):
object Hello { def main(args: Array[String]): Unit = println("Hello, Scala") }

### 🧬 Case Classes & Pattern Matching
Case Class: case class User(name: String, age: Int)

Pattern Matching:
user match { case User(name, age) => println(s"Hi $name") }

### 📚 Higher-Order Functions
Map: List(1, 2, 3).map(_ * 2)

Filter: List(1, 2, 3).filter(_ % 2 == 1)

Reduce: List(1, 2, 3).reduce(_ + _)

### 🧵 Traits (Interfaces)
Define Trait: trait Greeter { def greet(): Unit }

Use Trait: class Person extends Greeter { def greet(): Unit = println("Hello!") }

### 🛠️ SBT (Simple Build Tool)
sbt: Open sbt shell

sbt compile: Compile project

sbt run: Run main class

sbt test: Run tests

build.sbt:
name := "MyApp"
scalaVersion := "2.13.12"

---

[⬇️ Download the Scala Cheatsheet PDF](/downloads/scala.pdf)

<!-- store the pdfs in static>downloads> -->