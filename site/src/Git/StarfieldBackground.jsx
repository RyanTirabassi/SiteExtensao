import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import './starfield.css';

const StarfieldBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020104, 0.025);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      4000
    );
    camera.position.set(-6.5, 5.0, 6.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000, 1);
    container.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.035;
    controls.rotateSpeed = 0.4;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.1;
    controls.target.set(0, 0, 0);
    controls.minDistance = 2.5;
    controls.maxDistance = 100;
    controls.enablePan = false;
    controls.update();

    // Starfield
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 150000;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);
    const starTwinkle = new Float32Array(starCount);
    const starFieldRadius = 2000;
    const starPalette = [
      new THREE.Color(0x88aaff),
      new THREE.Color(0xffaaff),
      new THREE.Color(0xaaffff),
      new THREE.Color(0xffddaa),
      new THREE.Color(0xffeecc),
      new THREE.Color(0xffffff),
      new THREE.Color(0xff8888),
      new THREE.Color(0x88ff88),
      new THREE.Color(0xffff88),
      new THREE.Color(0x88ffff),
    ];

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      const phi = Math.acos(-1 + (2 * i) / starCount);
      const theta = Math.sqrt(starCount * Math.PI) * phi;
      const radius = Math.cbrt(Math.random()) * starFieldRadius + 100;

      starPositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPositions[i3 + 2] = radius * Math.cos(phi);

      const starColor = starPalette[
        Math.floor(Math.random() * starPalette.length)
      ].clone();
      starColor.multiplyScalar(Math.random() * 0.7 + 0.3);
      starColors[i3] = starColor.r;
      starColors[i3 + 1] = starColor.g;
      starColors[i3 + 2] = starColor.b;
      starSizes[i] = THREE.MathUtils.randFloat(0.6, 3.0);
      starTwinkle[i] = Math.random() * Math.PI * 2;
    }

    starGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(starPositions, 3)
    );
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));
    starGeometry.setAttribute(
      'twinkle',
      new THREE.BufferAttribute(starTwinkle, 1)
    );

    const starMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: renderer.getPixelRatio() },
      },
      vertexShader: `
        uniform float uTime;
        uniform float uPixelRatio;
        attribute float size;
        attribute float twinkle;
        varying vec3 vColor;
        varying float vTwinkle;

        void main() {
          vColor = color;
          vTwinkle = sin(uTime * 2.5 + twinkle) * 0.5 + 0.5;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * uPixelRatio * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vTwinkle;
        void main() {
          float dist = distance(gl_PointCoord, vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
          alpha *= (0.2 + vTwinkle * 0.8);
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Animation loop
    const clock = new THREE.Clock();
    let animationId;

    function animate() {
      animationId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const deltaTime = clock.getDelta();

      starMaterial.uniforms.uTime.value = elapsedTime;
      controls.update();

      stars.rotation.y += deltaTime * 0.003;
      stars.rotation.x += deltaTime * 0.001;

      renderer.render(scene, camera);
    }

    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
    };
  }, []);

  return <div ref={containerRef} className="starfield-container" />;
};

export default StarfieldBackground;