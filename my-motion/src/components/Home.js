import React, { useState,useRef } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import image from "./images/einstein.png";
import robotImg from './images/robot.png'
import { inputName } from "../redux/action";

const mapStateToProps = (state)=> {
  return {
    name: state.myName
  }

}

function Home({name,inputName}) {
  console.log('my name from home',name.length)
  const [homePage,setHomePage] = useState(true)
  const my_canvasRef = useRef(null);
  React.useEffect(() => {
    // console.log(my_canvasRef.current)
    const canvas = my_canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray;

    //  get mouse position
    let mouse = {
      x: null,
      y: null,
      radius: (canvas.height / 80) * (canvas.width / 80),
    };

    window.addEventListener("mousemove", function (event) {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    //  create particles with class
    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      //  Methods
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = "black";
        ctx.fill();
      }
      // check particle position, check mouse position , move the particle , draw the particle
      update() {
        // check if the particle is still within canvas
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }
        // check collision detection - mouse positon / particle position

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius + this.size) {
          if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
            this.x += 10;
          }
          if (mouse.x > this.x && this.x > this.size * 10) {
            this.x -= 10;
          }
          if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
            this.y += 10;
          }
          if (mouse.y > this.y && this.y > this.size * 10) {
            this.y -= 10;
          }
        }
        // move particles after collsion
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    //   create particle array

    function init() {
      particlesArray = [];
      let numberofParticles = (canvas.height * canvas.width) / 8000;
      for (let i = 0; i < numberofParticles; i++) {
        let size = Math.random() * 5 + 1;
        let x =
          Math.random() * (window.innerWidth - size * 2 - size * 2) + size * 2;
        let y =
          Math.random() * (window.innerHeight - size * 2 - size * 2) + size * 2;
        let directionX = Math.random() * 5 - 2.5;
        let directionY = Math.random() * 5 - 2.5;
        let color = "#8C5523";

        particlesArray.push(
          new Particle(x, y, directionX, directionY, size, color)
        );
      }
    }
    // Check if particles are close enough to draw line between them

    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = 0; b < particlesArray.length; b++) {
          let distance =
            (particlesArray[a].x - particlesArray[b].x) *
              (particlesArray[a].x - particlesArray[b].x) +
            (particlesArray[a].y - particlesArray[b].y) *
              (particlesArray[a].y - particlesArray[b].y);
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - distance / 20000;
            ctx.strokeStyle = "rgba(1,5,1," + opacityValue + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    // animation loop

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }
    // resize window size
    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      mouse.radius = (canvas.height / 80) * (canvas.width / 80);
      init();
    });

    //  mouse out event
    window.addEventListener("mouseout", function () {
      mouse.x = undefined;
      mouse.y = undefined;
    });

    init();
    animate();
  });
  return (
    <div>
      <div>
        <canvas id="canvas1" ref={my_canvasRef}></canvas>
      </div>
     {homePage?  <section className="quote-section">
        <div className="quote-container">
          <img src={image} alt="image" />
          <div className="button-paragraph_container">
            <div className="p-container--item">
              <p>
                "I am enough of an artist to draw freely upon my imagination.
                Imagination is more important than knowledge. Knowledge is
                limited.Imagination encircles the world."
              </p>
              <p>---Albert Einstein</p>
            </div>
            <div className="button-container">
              <button onClick={()=> setHomePage(false)}>
                <span>Next>></span>
              </button>
            </div>
          </div>
        </div>
      </section>: <div className='input-name'>
        <div className="input-name-container">
        <img src={robotImg} alt=""/>
        <div className="input-name-get-input">
          <p>Hi!</p>
          <p>I am P.A(Personal Asistance) of this owoner. I will be honour if i get your name. Thank You.</p>
          <div className="inpu-nextbutton">
          <input type='text' value={name} onChange={(e)=> inputName(e.target.value)} placeholder='Name Here'/>
          <Link to="/home-page" style={{ textDecoration: "none" }}>
                <span>Next>></span>
              </Link>
          </div>
        </div>
        </div>
        </div>}
    </div>
  );
}

const mapDispatchToProps=(dispatch)=> {
  return {
    inputName: (inputname)=> dispatch(inputName(inputname))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
