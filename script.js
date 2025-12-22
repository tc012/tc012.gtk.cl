var x = document.getElementById("radiovapor");
  function playStream() {
    x.play();
    console.log('Started audio stream')
  }
   function StopStream() {
    x.pause()
    x.currentTime = 0;
    console.log('Stopped audio stream')
  }
