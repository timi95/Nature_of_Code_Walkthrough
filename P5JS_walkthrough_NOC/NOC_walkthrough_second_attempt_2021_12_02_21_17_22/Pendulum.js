class Pendulum {
  constructor(origin_, r_) {
    // this.r=5; //Length of arm
    this.angle = 0.00001; //Pendulum arm angle
    this.aVelocity = 0; //Angular velocity
    this.aAcceleration = 0.0001; //Angular acceleration

    this.location = createVector();
    this.damping = 0.995;
    this.origin = origin_ ? origin_ : createVector(windowWidth / 2, 150);
    this.r = r_ ? r_ : 200;
  }

  update() {
    let gravity = 1; /*Arbitrary constant
    Calculate acceleration according to our
    formula.*/
    let force = gravity * sin(this.angle);
    this.aAcceleration = force / this.r;

    this.aVelocity += this.aAcceleration; //Increment velocity.
    this.angle += this.aVelocity; //Increment angle.
    this.aVelocity *= this.damping;

    this.location.set(
      this.r * sin(this.angle) + this.origin.x,
      -1 * this.r * cos(this.angle) + this.origin.y,
      0
    );
  }

  display() {
    stroke(0);
    fill(175);
    line(this.origin.x, this.origin.y, this.location.x, this.location.y);
    ellipse(this.location.x, this.location.y, 16, 16);
  }
}
