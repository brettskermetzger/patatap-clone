var circles = [];

function onKeyDown(e) {
    if(keyData[e.key]) {
        var maxPoint = new Point(view.size.width, view.size.height),
        randomPoint = Point.random(),
        point = maxPoint * randomPoint
        newCircle = new Path.Circle(point, 100);

        newCircle.fillColor = keyData[e.key].color;

        keyData[e.key].sound.play();
        
        circles.push(newCircle);
    } else {
        e.preventDefault();
    }
}

function onFrame(e) {
    for(var i = 0; i < circles.length; i++){
        circles[i].fillColor.hue += 1;
        circles[i].scale(.9);

        if(circles[i].area < 1){
            circles[i].remove();
            circles.splice(i, 1);
          }
    }
}