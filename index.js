const leaf = document.querySelector("#marijuana-leaf");

new TimelineMax({ repeat: -1 })
  .from(leaf, 1, {
    opacity: 0
  })
  .to(leaf, 0.6, {
    delay: 1,
    morphSVG:
      "M265.2,128c30.3,19.5,67.4,5.4,80.5,15.2c31.8,21.5-63.4,92.8-63.4,92.8s123.4-52.1,103.1-112.6c-12.5-37-55.1-30.9-91.7-16.9c-49,18.9-27.6-40.4-3-55.8C285.9,51.4,220.8,97.1,265.2,128z M189.8,253.1c-11.5,45.9,35.8,97.2,100.9,62.6c65-35.1,96.6,7.9,69,36.8c-44.8,46.8-21.7,97.4-21.7,97.4s-5.4-45.5,46.5-92.3c71.7-64.6-10.6-156-88.3-109c-60.6,36.5-66.4,18.2-70.2,3.8c-6.8-26.3,60-75.2,60-75.2S201.3,207.2,189.8,253.1z M316.9,461.6c-61.7-57.9,29-121.1,29-121.1s-97.5,45.1-96.1,84.2s31.3,31.9,50.1,50.8c18.9,19.4-24,73.9-24,73.9S351.2,490.6,316.9,461.6z",
    ease: Power2.easeOut
  })
  .to(
    leaf,
    2,
    {
      y: -50,
      scaleY: 0.8,
      transformOrigin: "center",
      opacity: 0,
      ease: Power1.easeOut
    },
    "-=0.6"
  );i

'use strict';

var fs = require('fs');
var path = require('path');

fs.readdirSync(path.resolve(__dirname, './providers'))
  .forEach(function (provider) {
    provider = provider.split('.')[0];
    module.exports[provider] = require('./providers/' + provider);
  });
