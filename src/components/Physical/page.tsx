// pages/index.tsx
"use client"
import { useEffect } from 'react';
import Matter from 'matter-js';

const ConcaveDemo = () => {
  useEffect(() => {
    const { Engine, Render, Runner, Common, MouseConstraint, Mouse, Composite, Vertices, Bodies } = Matter;

    // provide concave decomposition support library
    Common.setDecomp(require('poly-decomp'));

    // create engine
    const engine = Engine.create();
    const world = engine.world;

    // create renderer
    const render = Render.create({
      element: document.getElementById('matter-canvas')!,
      engine: engine,
      options: {
        width: 2300,
        height: 1200,
      },
    });

    Render.run(render);

    // create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // add walls
    Composite.add(world, [
      Bodies.rectangle(400, 0, 1200, 50, { isStatic: true }),  // top wall
      Bodies.rectangle(400, 600, 1200, 50, { isStatic: true }),  // bottom wall
      Bodies.rectangle(940, 300, 50, 600, { isStatic: true }),  // right wall
      Bodies.rectangle(                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   10, 300, 550, 600, { isStatic: true }),  // left wall
    ]);

    // Define the shapes
    const arrow = Vertices.fromPath('M0.919865 234.63L34.9658 178.321L216.022 206.577L217.552 204.046L108.413 56.844L142.459 0.534505L358.418 131.108L331.64 175.396L191.077 90.4087L189.993 92.2014L295.711 232.439L277.476 262.597L103.65 233.816L102.566 235.609L243.656 320.915L216.878 365.203L0.919865 234.63Z');
    const chevron = Vertices.fromPath('M151.133 14.1103L202.774 0.690153L243.995 159.31C248.623 177.12 248.419 193.809 243.383 209.377C238.426 224.925 229.326 238.409 216.082 249.829C202.818 261.17 186.088 269.465 165.892 274.713C145.618 279.982 126.926 280.892 109.819 277.444C92.6903 273.917 78.1765 266.57 66.2774 255.402C54.3782 244.235 46.1144 229.747 41.4861 211.937L0.26498 53.3168L51.9059 39.8967L91.9802 194.104C94.3977 203.406 98.5741 211.148 104.509 217.33C110.524 223.491 117.805 227.667 126.354 229.859C134.902 232.052 144.145 231.856 154.084 229.274C164.102 226.67 172.271 222.34 178.591 216.284C184.99 210.208 189.277 203.025 191.452 194.736C193.706 186.426 193.625 177.62 191.207 168.317L151.133 14.1103Z');
    const star = Vertices.fromPath('M169.199 296.176L0.208821 108.747L39.8361 73.0179L179.369 227.775L259.722 155.327L289.18 187.999L169.199 296.176Z');
    const horseShoe = Vertices.fromPath(
      'M140.185 32.9475L169.683 0.311127L323.448 139.287L293.951 171.923L236.632 120.117L96.9125 274.706L57.7854 239.342L197.505 84.7535L140.185 32.9475Z'
    );

    // Create one object for each shape
    const arrowObject = Bodies.fromVertices(200, 200, arrow, {
      render: {
        fillStyle: '#f19648', // Color of the object
        strokeStyle: '#f19648',
        lineWidth: 1,
      },
    });

    const chevronObject = Bodies.fromVertices(400, 200, chevron, {
      render: {
        fillStyle: '#f5d259', // Color of the object
        strokeStyle: '#f5d259',
        lineWidth: 1,
      },
    });

    const starObject = Bodies.fromVertices(600, 200, star, {
      render: {
        fillStyle: '#f55a3c', // Color of the object
        strokeStyle: '#f55a3c',
        lineWidth: 1,
      },
    });

    const horseShoeObject = Bodies.fromVertices(800, 200, horseShoe, {
      render: {
        fillStyle: '#063e7b', // Color of the object
        strokeStyle: '#063e7b',
        lineWidth: 1,
      },
    });

    // Add each object to the world
    Composite.add(world, [arrowObject, chevronObject, starObject, horseShoeObject]);

    // add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 600 },
    });

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div id="matter-canvas" className="bg-white" />
    </div>
  );
};

export default ConcaveDemo;
