{
    interface Circle { //interface type Circle
        shape: 'circle';
        radius: number;
    }
    interface Rectangle {  //interface type Rectangle.
        shape: 'rectangle';
        width: number;
        height: number;
    }
    type Shape = Circle | Rectangle;    //Union type
    const calculateShapeArea = (shapeValue: Shape) => {
        if (shapeValue.shape === 'circle') {
            const circleArea = Math.PI * shapeValue.radius * shapeValue.radius;
            return circleArea.toFixed(2);
        } else if (shapeValue.shape === 'rectangle') {
            const rectangleArea = shapeValue.height * shapeValue.width;
            return rectangleArea.toFixed(2);
        } else {
            return console.log("Unknown input value");
        }

    }


    const circleArea=calculateShapeArea({ shape: "circle", radius: 5 });
    console.log (circleArea)
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    })
    console.log(rectangleArea);

}