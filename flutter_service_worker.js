'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6b77585fe9995886a5de07929f81885d",
".git/config": "9e1120bdb45fee58cb1ea0e6a19b9289",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "17c079f9ef309e866e411ecd8a45d2c4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d015a5a1d2e94e3feee9c50bbbf150ee",
".git/logs/refs/heads/main": "49823bd5363fb261d8b66cb930491da5",
".git/logs/refs/remotes/origin/main": "478d8c0a2bb6089fc5f20cf0ed1167ad",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/02/456653e6f2439c4b610a2d412d01d3d5ceee5c": "f7e686c532ab5fb9b5896554248c43f7",
".git/objects/05/cfdd08e4a9fe5ce244137badedd2867a177cbb": "349c99ad8cccc14a8210d42b79d596aa",
".git/objects/07/715961ae3f16831fde2eb5e0dbf6641f997c64": "e00d6205763d07657e00b24640603284",
".git/objects/12/3aa31333e26d379ef8a0e416ece317f46daa77": "322cfff5259e049c8605b3ebe3c55fcd",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/28/53517b4800a284e653739216765c02d71fc3b6": "3a09dd186dccf69d3d3b04d03be01e41",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2a/38df6342470c946fde34c2a2c67671393a1040": "10035730c02d604a24bf80b7b9b375e0",
".git/objects/45/2c81386d068bef0be93ddcb8ed14d6ab3d4eda": "3ef0acebd823cd685f83f072f316dbfe",
".git/objects/4d/34012a6f67c38e7d8f3814dcaa8c86766dea4d": "4f878fbf4d1bb45198adcd539e7c7ade",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/5d/155230c19b9d975642c8fab07f94fdaccfb680": "878e3ca6f88371073fdd2ee99dc07cb0",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/75/64c8210d285f90cb6c618606378e2c9c2f6477": "7c73cbfd5c4a9803c0afa5ff19ed8686",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/85/2d57fcb77d21d3778cccdea6319517c58eb786": "9c18203daa4e30607d69d20c33150e2b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/7a061a5cc25ae7c999dae3970b675f6e7421ef": "6efeacd4f385e40cdcfadcc81aa187a4",
".git/objects/96/c51dbae53f4a53b8b77852695c8e4c52779a10": "506c1f984d012b6cc5db3eaf5deb9739",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9d/8f550202eff452c083b09b70880afd05edee64": "fde8f3e4e34c918c125f235d8c2447ec",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a7/9b8cf77608a84b11e52a9b474a868f7f86512b": "f1afc06c6898841c9744f8c2ab626e88",
".git/objects/b2/c21344243e3e48468b861af8aa6447a79cae26": "6a75c7ff58403dd7116bab580d238bcd",
".git/objects/b2/cc211c0c7168c5cc8a0209860b16cae413a24c": "6d48fd2595d0f3090f6ba6b5f775996c",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/ce5271b00b9840a93010ff6bee9afcb88fcab2": "1dad8fe29be5250ac7fe0d5e25dceff1",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/35085bbdc720edfcf7dbb31d7e731df57e4ff1": "826925ada77b7167a55105dcf8bb5e8d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cc/933b5b21d57180e199700f28da1dc3a0c2b3a0": "01ac3fcabe6dbb5c41d0bf80e9958bc0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/6f75601cc44fdeec7677694d95ce030857eff0": "bd9e237e288b95d85c6ca46851b94023",
".git/objects/d6/6d2075ab6723cb0c93fec84426a9ed4bb1f66e": "5a0203fe9ee2c8a6f20ee1c43de2544a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c7ee3cb01d54cb11629ad1078fa46edd303748": "2940b2874e14307aafb9265393924aaa",
".git/objects/d7/4f6fc47b57a45eb36f94d84510bf05d34ab78e": "497a0162fd498d82b68ffe9b3f2905a6",
".git/objects/db/150c6e3dc0f7eaaf0eba721a1efe272c2cf099": "12cf9194eee7191cb553ce2719f48818",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e6/93cb500251a66d4026ecf246ed4ddd1bdaf41d": "96b193620e61e7f1aaf8460d0b4005d3",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ed/d990a6b4a972cc2a0a4df30efc171244d37fe2": "404db3c3f07afc16a33b1b586b253d95",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/2048426eeb0f68ed3122d02672dde3a342207a": "d0dabd7205bc5111bc1e88c56611a8e0",
".git/objects/f8/7753d07eb9fc4e83611896874777035de4222f": "becb0dde4036ff29585dd17a6680c77c",
".git/objects/fb/6885701d05f54d13b70ba0ce4a2b500eac0420": "314febabb404d32fa612719e82ea54d3",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ff/0b905fba373b5de2dfbea77db9d6bd058c8042": "8fdd953518ca4fb0a297f4d5e0e206db",
".git/refs/heads/main": "b55f2ef9bdcadc63f57e654e5451292d",
".git/refs/remotes/origin/main": "b55f2ef9bdcadc63f57e654e5451292d",
".github/workflows/flutter.yml": "dc7b34fa1d891e66ffd06e5674fe2954",
"assets/AssetManifest.bin": "9fd7987c1fc27ff2d6beda87252bdf13",
"assets/AssetManifest.bin.json": "dc97b8c87dbf7faab345711b2df50d5c",
"assets/AssetManifest.json": "92a21aa8b14077dff58f9e60b4c8a780",
"assets/assets/images/logo.png": "cfbbe2d01d9297450d9eebaa588c976b",
"assets/FontManifest.json": "c75f7af11fb9919e042ad2ee704db319",
"assets/fonts/MaterialIcons-Regular.otf": "539b951f4f522ad1f3d713cb80c1eab1",
"assets/NOTICES": "02c12bfc29eac26921f4fb9beb34daf6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "e5c4e784ee91fa5a54bba05ed11ad707",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"CNAME": "afe180f8278aa0958023037c975bb4b5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "bc4bd0ae0d36d339f8127e9cbecf99f3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "23b8d918ac931d7f3f14926ae35eb3b5",
"/": "23b8d918ac931d7f3f14926ae35eb3b5",
"main.dart.js": "8584caa92c90e4e5ae48a43f65e12c6d",
"manifest.json": "4734db19b089f1a4d7b37fdc9824bcd2",
"version.json": "2a5ea895654afb496a691e165de6c89b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
