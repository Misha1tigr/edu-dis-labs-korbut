/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "ce7745672c65467cf22843f94fdd3608"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.44552956.css",
    "revision": "9f84358d82d8ec5fba166a490199ccc1"
  },
  {
    "url": "assets/img/1.675f8835.png",
    "revision": "675f88359ea766d07c9223159fe5f406"
  },
  {
    "url": "assets/img/1a.c8929ceb.png",
    "revision": "c8929ceb92f88fb0498d9f2b68accd3b"
  },
  {
    "url": "assets/img/2.351d7e34.png",
    "revision": "351d7e3438ffff97da9659eb114996bb"
  },
  {
    "url": "assets/img/2a.a046d2e7.png",
    "revision": "a046d2e73a3aaa2cca9f2c07e6ded8cd"
  },
  {
    "url": "assets/img/3.8b7d2f90.png",
    "revision": "8b7d2f909cf28d6c83358cfa728a8e42"
  },
  {
    "url": "assets/img/3a.69b57808.png",
    "revision": "69b578080e7d02610ee4b63acdf852e8"
  },
  {
    "url": "assets/img/3c.ed57e0ca.png",
    "revision": "ed57e0ca126558fa71f6bd78adbb573d"
  },
  {
    "url": "assets/img/4.bfd389c6.png",
    "revision": "bfd389c685feaa8e0d628e37d617db36"
  },
  {
    "url": "assets/img/4a.b338dc5d.png",
    "revision": "b338dc5d646143f3c5936d6bd3d0937e"
  },
  {
    "url": "assets/img/4c.aada1560.png",
    "revision": "aada1560b715bd61c8c027ab39528ed5"
  },
  {
    "url": "assets/img/5.f6f25146.png",
    "revision": "f6f2514623843b07619d69957fd22f6d"
  },
  {
    "url": "assets/img/5a.d0019db3.png",
    "revision": "d0019db3cb218dab5986cf781dc79314"
  },
  {
    "url": "assets/img/5c.10a63625.png",
    "revision": "10a63625fc5c07f3d74a75e28bfa1d36"
  },
  {
    "url": "assets/img/e1.1bde6e6d.png",
    "revision": "1bde6e6deb23866197987b812c67f7cc"
  },
  {
    "url": "assets/img/e1a.31df0b0e.png",
    "revision": "31df0b0ea65708efb56de8fc07dae160"
  },
  {
    "url": "assets/img/e2.8991816c.png",
    "revision": "8991816c5309a473104c912008bc22c8"
  },
  {
    "url": "assets/img/e2a.47e345cc.png",
    "revision": "47e345cc1aa6c0986c2bcd8ebdb17340"
  },
  {
    "url": "assets/img/relational_scheme.9a21dee3.png",
    "revision": "9a21dee39bd4cf9d79c7c00b7826d2ed"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/start.398d424d.png",
    "revision": "398d424de39b91afd33d6948ad86a7a2"
  },
  {
    "url": "assets/js/10.75b440dc.js",
    "revision": "843ca06b6324c73e1faccac31f7e18db"
  },
  {
    "url": "assets/js/11.4cb60fa0.js",
    "revision": "a3916bea359c7c37f9584953c18baf01"
  },
  {
    "url": "assets/js/12.9caeee7d.js",
    "revision": "1b7d8ae0eec01831821302aef129ea12"
  },
  {
    "url": "assets/js/13.8f355ff5.js",
    "revision": "04be63da84e3f5a6c52b022d53006075"
  },
  {
    "url": "assets/js/14.94c3075b.js",
    "revision": "0bdc358ed53c8a5b6a0115da08305ea2"
  },
  {
    "url": "assets/js/15.78199be7.js",
    "revision": "534f082029119ff57cbc26f9f6af74cc"
  },
  {
    "url": "assets/js/16.f284de56.js",
    "revision": "7d9735acd7925338ab808448a8ee5583"
  },
  {
    "url": "assets/js/17.7aab5a9e.js",
    "revision": "63ecab19e36e0d14b13cb3ea324970d1"
  },
  {
    "url": "assets/js/18.bb4de841.js",
    "revision": "a7ea824c5f1f1eda722e861a37c46cb4"
  },
  {
    "url": "assets/js/19.8a7d0f8f.js",
    "revision": "b9e1ddb8ec3a0edf02b46f935e328cfb"
  },
  {
    "url": "assets/js/2.28e6a8c1.js",
    "revision": "15809e08139f5198d3d5b80c07124be6"
  },
  {
    "url": "assets/js/20.76966545.js",
    "revision": "bc6a7790dd6930f5dd59f3415c68e2c3"
  },
  {
    "url": "assets/js/21.8542e9aa.js",
    "revision": "6a441a89928915cb425b4fc00c2ed1d8"
  },
  {
    "url": "assets/js/22.7ad7a42c.js",
    "revision": "1fa5b8b7390b63194a26e1d9acee5c09"
  },
  {
    "url": "assets/js/23.5e97faad.js",
    "revision": "9476f46badde39175836c746c1e54780"
  },
  {
    "url": "assets/js/24.ed76ab12.js",
    "revision": "83b606bc5bc232c9c1e549d45df80dcb"
  },
  {
    "url": "assets/js/26.41d20dc7.js",
    "revision": "058d1850acc933be9709b88b2a9aa2e0"
  },
  {
    "url": "assets/js/3.5705e869.js",
    "revision": "33d0ca622930351c9de1c5b1366471c1"
  },
  {
    "url": "assets/js/4.fe74a46a.js",
    "revision": "27b3c1d9bb5ba393b74bb4bfe924efc9"
  },
  {
    "url": "assets/js/5.069c0b69.js",
    "revision": "29bc06df25f404ebd94eaccac29c89af"
  },
  {
    "url": "assets/js/6.e6705529.js",
    "revision": "2a15b79831d13b0fe98b9100b9a3eea9"
  },
  {
    "url": "assets/js/7.a2e66a62.js",
    "revision": "e086fed79d5e074856f1e5a2adf76591"
  },
  {
    "url": "assets/js/8.7b540ffb.js",
    "revision": "cb08d45d2093176116f0b6111c496907"
  },
  {
    "url": "assets/js/9.052aa021.js",
    "revision": "b2f26d5fc62fa54dd11ace10cb7477db"
  },
  {
    "url": "assets/js/app.0a6c8de1.js",
    "revision": "992295663f0f4bcd3645b1421f4e4cfa"
  },
  {
    "url": "conclusion/index.html",
    "revision": "288bba6a289f72ff53962894f0ca15f9"
  },
  {
    "url": "design/index.html",
    "revision": "b3512e468966a5edd579640000f04859"
  },
  {
    "url": "index.html",
    "revision": "dee595d885a4d3a2fda746a5f20a7e38"
  },
  {
    "url": "intro/index.html",
    "revision": "9bb500ae93cf370dabb25afdaa1094fa"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "83b21e44ea1cbc6d5b063d82ec815ae0"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "93832ffac694a8f52ada6175b67b63a3"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "117a0c43bd8b10aea7ba03b839408ea3"
  },
  {
    "url": "software/index.html",
    "revision": "b2ae3555d01811214f6b3c88664e488f"
  },
  {
    "url": "test/index.html",
    "revision": "b63501cefa21f89486429f9286f03875"
  },
  {
    "url": "use-cases/index.html",
    "revision": "0e0a7c4914bbf5a67ead7547bd217a5b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
