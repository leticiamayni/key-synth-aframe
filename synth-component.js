var myScene = document.querySelector("#myScene");

// The synth by: https://github.com/Jinksi/webvr-synth-tutorial
const synth = new Tone.Synth({
  volume: -12, // the oscillator volume set to -12dB
  oscillator: {
    type: "square" // oscillator type to square wave
  },
  envelope: {
    attack: 0.02, // envelope attack set to 20ms
    release: 1 // envelope release set to 1s
  }
}).toMaster(); // connect the synth's output to the filter

AFRAME.registerComponent("tone-synth", {
  schema: {
    note: {
      type: "string",
      default: "C4"
    },
    duration: {
      type: "string",
      default: "8n"
    }
  },

  init: function() {
    document.addEventListener("keydown", evt => {
      switch (evt.key) {
        case "h":
          return synth.triggerAttack("C4");
        case "j":
          return synth.triggerAttack("D4");
        case "k":
          return synth.triggerAttack("E4");
        case "l":
          return synth.triggerAttack("F4");
        default:
          return;
      }
    });
    document.addEventListener("keyup", evt => {
      switch (evt.key) {
        case "h":
        case "j":
        case "k":
        case "l":
          synth.triggerRelease();
      }
    });
  }
});