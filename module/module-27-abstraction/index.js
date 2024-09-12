/* 
     ​‌‍‌⁡⁢⁣⁢Abstraction (Abstraksi)⁡​
*/

// ⁡⁣⁢⁢Abstraction⁡ ⁡⁣⁣⁡⁣⁣⁢adalah proses menyembunyikan detail implementasi dari pengguna dan hanya menampilkan esensi atau fitur utama. Ini dilakukan dengan menggunakan abstract class atau interface (tidak sepenuhnya didukung dalam JavaScript, tetapi dapat disimulasikan).⁡

class Shape {
    constructor(name) {
        if (this.constructor === Shape) {
            throw new Error("Cannot instantiate abstract class");
        }
        this.name = name;
    }

    calculateArea() {
        throw new Error("Abstract method must be implemented");
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

let myRectangle = new Rectangle(10, 20);
console.log(myRectangle.calculateArea()); // Output: 200


/*
    Shape adalah abstraksi yang tidak dapat diinstansiasi secara langsung.
    Subclass seperti Rectangle harus mengimplementasikan method calculateArea.
*/

