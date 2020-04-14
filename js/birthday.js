const music = new Howl({
    src: [
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Monk_Turner__Fascinoma/The_New_Birthday_Song_Contest/Monk_Turner__Fascinoma_-_01_-_Its_Your_Birthday.mp3",
    ],
    loop: true
  });
  
  const button = document.querySelector('button');
  button.onclick = () => start();
  
  if (navigator.lang == "en")
    document.querySelector('.container p').textContent = "Touch the button";
  
  const start = () => {
    music.play();
    document.body.innerHTML = `
      <div class="container-dep centered">
      <h2 class="text-center">¡Feliz cumpleaños papá, <b>eres el mejor</b>! ❤</h2>
      
      <div class="coffin">👨🏻</div>
        <div class="flex">
          <div class="man">🎂</div>
          <div class="man">🎁</div>
          <div class="man">🎉</div>
          <div class="man">🎈</div>
        </div>
      </div>
    `;
  }