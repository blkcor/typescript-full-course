abstract class Geom {
    //abstract function getArea
    abstract getArea(): number;
}

class Circle extends Geom {
    private radius: number;
    getArea() {
        return Math.PI * (this.radius ** 2);
    }
}

class Square {
    private width: number;
    getArea() {
        return this.width ** 2;
    }
}

class Triangle {
    private width: number;
    private height: number;
    getArea() {
        return this.width * this.height;
    }
}