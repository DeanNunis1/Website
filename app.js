const home = document.querySelector('#mobile-menu')
const homeLinks = document.querySelector('.navigationBar__menu')


home.addEventListener('click', function() {
    home.classList.toggle('is-active');
    homeLinks.classList.toggle('active');
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

document.addEventListener("DOMContentLoaded", function() {
const projectCards = document.querySelectorAll(".project");

projectCards.forEach(card => {
    const title = card.querySelector("h2");
    card.addEventListener("mouseenter", function() {
        title.style.color = "#ff9800";
    });
    card.addEventListener("mouseleave", function() {
        title.style.color = "#fff";
    });
});
});




document.addEventListener("DOMContentLoaded", function () {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(24, window.innerWidth / window.innerHeight, 0.1, 500);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  document.getElementById('globe-container').appendChild(renderer.domElement);

  function updateSize() {
    const globeContainer = document.getElementById('globe-container');
    const width = globeContainer.clientWidth;
    const height = globeContainer.clientHeight * 2.1;
    const aspectRatio = width / height;

    camera.aspect = aspectRatio;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
}
  updateSize();
  window.addEventListener("resize", updateSize);

  const fontLoader = new THREE.FontLoader();

  fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {

      // Define the words to display on the sphere
      const words = [
          'HTML',
          'CSS',
          'JavaScript',
          'Python',
          'Java',
          'C++',
          'Swift',
          'C#',
          'AWS',
          'SQL'
      ];

      // Create a material for the text
      const textMaterial = new THREE.MeshBasicMaterial({
          color: 0xff0000
      });

      // Create a material for the wireframe
      const wireframeMaterial = new THREE.MeshBasicMaterial({
          color: 0x0000ff,
          wireframe: true
      });

      // Create a group to hold the text and wireframe mesh
      const group = new THREE.Group();

      // Create the wireframe mesh
      const sphereRadius = 2;
      const mesh = new THREE.Mesh(
          new THREE.SphereGeometry(sphereRadius, 64, 64),
          wireframeMaterial
      );
      group.add(mesh);

      // Create a text mesh for each word
      for (let i = 0; i < words.length; i++) {
          const textGeometry = new THREE.TextGeometry(words[i], {
              font: font,
              size: 0.2,
              height: 0.01,
              curveSegments: 12,
              bevelEnabled: true,
              bevelThickness: 0.005,
              bevelSize: 0.005,
              bevelOffset: 0,
              bevelSegments: 5
          });

          const textMesh = new THREE.Mesh(textGeometry, textMaterial);

          // Position each text mesh on the sphere
          const phi = Math.acos(-1 + (2 * i) / (words.length - 1));
          const theta = Math.sqrt(words.length * Math.PI) * phi;

          textMesh.position.x = sphereRadius * Math.cos(theta) * Math.sin(phi);
          textMesh.position.y = sphereRadius * Math.sin(theta) * Math.sin(phi);
          textMesh.position.z = sphereRadius * Math.cos(phi);

          // Orient text mesh towards the sphere's center
          textMesh.lookAt(new THREE.Vector3(0, 0, 0));
          textMesh.scale.x = -1;
          group.add(textMesh);
      }

      // Add the group to the scene
      scene.add(group);

      // Position the camera
      camera.position.z = 11;

      // Animate the scene
      function animate() {
          requestAnimationFrame(animate);

          // Rotate the group
          group.rotation.x += 0.00;
          group.rotation.y += 0.001;

          renderer.render(scene, camera);
      }

      animate();
  });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_ihnu776', 'template_pvqidpj', this)
    .then(function() {
        console.log('SUCCESS!');
        document.getElementById('contact-form').reset(); // Clear the form fields
        document.getElementById('success-message').style.display = 'block'; // Show the success message
    }, function(error) {
        console.log('FAILED...', error);
    });
});