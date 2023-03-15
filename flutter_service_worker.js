'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "174fff9ee547e663d47e510dd36bc764",
"splash/img/light-2x.png": "6ee1d14e0bb5f00a7bdddcb7b2db59b6",
"splash/img/dark-4x.png": "434624290c368c013efa279e31df8b91",
"splash/img/light-3x.png": "85b86f8f484377947f123a22d6a57459",
"splash/img/dark-3x.png": "ec8f2cde64dc6f629a80bcd9ea8fe40a",
"splash/img/light-4x.png": "511f8d593a00358372d122aab1bc4c1d",
"splash/img/dark-2x.png": "6f55bfd2240c8cb3e6147595d2be4906",
"splash/img/dark-1x.png": "9032e33ff6513990352860c9a35b7324",
"splash/img/light-1x.png": "67ca0d91856f681052dcacb80c98078c",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "862483e90899a5ebf9c74206a29e6d12",
"index.html": "2f042578797e21c676afd543350d8d0c",
"/": "2f042578797e21c676afd543350d8d0c",
"main.dart.js": "85098fd5a7cce56ca55005f40046617b",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "c7630fc9bff18b0634e48360e8fe4b27",
"icons/Icon-192.png": "801c7c7408f95733af181348736c0c7c",
"icons/Icon-maskable-192.png": "801c7c7408f95733af181348736c0c7c",
"icons/Icon-maskable-512.png": "411614624576604fdf6eba0e8f90c04f",
"icons/Icon-512.png": "411614624576604fdf6eba0e8f90c04f",
"manifest.json": "c977f4bd4291baa7519c0973435a64e3",
".git/config": "38a37e30d25771632ee11003d2371ad8",
".git/objects/61/f7a9dafeda44c21565572b455f73379465793e": "503966e6306c4d54330258ac1cb76124",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/04/69a204f01b6aedfba7c710ad1085cf47a64052": "5104a1c6901cbf7792fada622c47fa6f",
".git/objects/0b/42b4eee3218283dce07d3f8150a38bc2ad41bf": "f4f5a77072fba847e1424b77515e6721",
".git/objects/93/cc31e53d8f4f750d3c5599c869040461f84c5a": "147a6c89d49a6731fcd4d45a3cc03167",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/60/418bf07b88f68fa26d562b6095ac39405b2712": "e5e873c40f673b4f26e45545a3cc0f5a",
".git/objects/60/40796e83d167c4475b4d17f8a42703e1b37a04": "df3bdf2c34e34359e717de2b50fc6bd9",
".git/objects/b5/304b9f8b4bfb5b5ec1b53e09c1c770aa099a86": "49fb86c20b0557222498959d9249f382",
".git/objects/ac/9d24eaac988c403b073f14a3b7fe05045b1f2f": "e39ad17f74bc9044f29a761d2282fc12",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/df/ec75f772fe8aa6e3d3b256101852e3ba770a63": "2d3af4e77295a9f490e30923fd01fc9c",
".git/objects/da/e8e68c0f32cde8f86e15ee6ab1efe294e4f632": "5bd86bfbe6d444e5a9105022b7e51ff2",
".git/objects/bd/14225d871f42e276844070ae20dd434d71797f": "93416b9aa31fe5206a716b07518299b3",
".git/objects/bc/dff2d22e9898b4f48f782a4974f790f4ce9df9": "8225657671fd86883132b0184ce78ea4",
".git/objects/ae/729a736b111fd552206a32f742037d9405ef75": "bcbd9d53a8edc256c24c410ce92a80ea",
".git/objects/ab/59821691c47817e121dbcc863cde95f09139c6": "0b1f94dd6afc0374c3dac7f260e0e7bd",
".git/objects/e2/80ff30834ed8aedf43f37c7b1e03518db5a82f": "fb33b34e6277935fd7f8ad3a43f9bb13",
".git/objects/e2/fa57b1190e19979b8078343ab5cc993961bacb": "a01280435ce903c634506967ce18aaeb",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fd/23b655472b4bf67b3971ee2226931fe8f41174": "6c58845557326404a98670f33462db6e",
".git/objects/e3/6eaa4d34e7bf20b0f9e828204419224e048264": "0db17145d93ed1e18261ca81c0a5fc28",
".git/objects/e4/2663c60cf48364eb97d6b6a33bf8f50f7c7edf": "d2cf93bc7c48036a9978e8c2deca4171",
".git/objects/ec/934301f4fcbb05eee1b7199cabc7057658c0be": "cf7c6d21dc0f2672f3b4e513d121731b",
".git/objects/4e/95e05c8d30734098f27a45c359af2480f141f1": "0ee3d664e837adf9c529162b474954f2",
".git/objects/7c/d0ccc110b1f8a2a84133ecba76fa5924e28132": "11a02a12b7e82c062852b04aa6ea517c",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/42/8192b4cea31c49d83093e8b15a6ecacbe7c5c1": "8f5def01ff0bece625bd1f9f4a20d046",
".git/objects/1f/bf27680c8743f6f118606d22842965b25e97bc": "ac197fcb5192f81a9fc038e7bff076d6",
".git/objects/80/7ae9f1566c0d7132ff71b8a98e6c0ff3aa08e9": "793ecf661216d5d878d41fca4dfcf11e",
".git/objects/80/0fb51f53a32d127234a19299ae21edcb6355d5": "c84ec8c89e95c42d781ec75aa1e74078",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/28/64e0580ec283f8fdc4986d6f0a9572e6289a23": "1435db33aa991bbb5a39cbcfccaedb4d",
".git/objects/7e/018f3b343caf35f4ab2da923e870f7fa0844e5": "f452e7994e4d75cd7762a20ee703e049",
".git/objects/4c/ccf7f80372b0b8e1d5425df5e79d49ef6f95c8": "fe93693d33c07ba5ea22867b642402e4",
".git/objects/88/3ccfdb0d6c5e550a361b746ca3dd73f7dc242d": "b7b5cbf7431ba7e953c93c3020803e19",
".git/objects/38/46a91b4f25b79a542c6545d782b55581c4e981": "8713bb91de5afc6fb63b1710e98bf822",
".git/objects/00/13cb1db162369fba635cf8edffa6ac6c83b27e": "a176c0df423ce9aeb7a2e9174d6695f8",
".git/objects/09/caf9fc4f7d1200493c0ef916e8cc45c83006a9": "58ec60932458c13bea7eb5bb7714da26",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/65/fb6eb27a168e8d6761c47bdc98d71ba2547d3e": "b017fc68cd68ad06c9f6c6ae337dd357",
".git/objects/3a/3c7a44fa212ae2eee6347101e307bf832b2760": "bc36a8540fd5080530c9fcff7371e2fd",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/08/d87d51f581dcd2cd2011f75a768a9be7f14972": "3d621d68ef5a3623cb96b0c19570ff22",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/55/c3157e664cb9ff4945b42226c757f89f0363b8": "12b3d3ce2d4b9a9d0a15c34f7a5e8d86",
".git/objects/97/9ede6f3a6d8c0c5de7e7de739529e28fb12562": "5967b0c95851690900d0f0332f7aa1bb",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/63/8cda7e84356e3b8882cf5e02981795478c72cc": "e08ee93ead97b8e71775e06d4d2b89bd",
".git/objects/0f/bafbb41310a727452b5aedcfe3cd4e8a4b37d6": "92974a5c8f44ef196906613ac69d5bec",
".git/objects/64/c9115056533345f7a9eaed9e35d26aeba302d5": "e2103e9e2ba6332cbaf5d6944b57f4fa",
".git/objects/d4/d204cc7e4a4fbdda16b7d204055d96f319b20e": "2807507644cddae114fc091ff3021525",
".git/objects/a7/5a5fd5329747dc05150a723e2dbd59d1ce47be": "c9e22a948c36322ef0d3d14dca133b94",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/b6/60734ce08779009a758717c21738f87dae301a": "f229e588f71d60ff0e88492c224a4774",
".git/objects/d5/8edccb888f82058efac8cfaec253555a4cd0f4": "01a084d1239bfc80eb4a2ab15d18f019",
".git/objects/a8/7cf59c4815cb667ea55d293aad66f32ba69b91": "71471ec35c80d980f492e92d98baa12b",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/a6/205bc9edd2cb9c932c3a9db2ebc8d920f8e022": "52dd829c5089bf5e66a6910537e1679f",
".git/objects/a1/56d813c8a397d7ed06840bdb78b0814c5195cf": "0962b9188afe4ba188daff8ea5dca344",
".git/objects/c3/767c765a573b58c4128140f6d23023278345ec": "3e387a8666691a11b4189ec3be8fb712",
".git/objects/c4/939c60b18632e8e38ea4b0f6a6ffee16eef3b5": "8b2bf5532263ab2f598465c9e844a2f3",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e6/f815a5f8816f5ee22756b3fb9841679544362c": "4fac588a5531a218cefc3244c438638c",
".git/objects/f0/851d08352fee7bb7b9e5c7db55fa0768e91d89": "8c61ce15720225cfbf25e0455cdbfb53",
".git/objects/ff/b37bb3921b759297a0f711a5880a9c2ad55c63": "5e564b6e1cc548d1c6342513c48c6006",
".git/objects/e7/514f17c1e9f71485ac465f55bfe9f6c1b181ce": "507254338ffa42e6fea4c427e10c6fa3",
".git/objects/f8/6c13a37691496ab96f292fd75e07a7ee7150d8": "b1a2126a75e7422bed0a31c8e0d34380",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/2c/88d6047291d5cadd96a2a9935a833c2a1f9f6c": "47b8c7c34c153f14a0db1c17f7ed2f29",
".git/objects/83/96e3247e0049fb0cfeae802a91446203e3e47f": "5e003625870c6e3e773d1c611a7d3bed",
".git/objects/48/31c234db6bbafddab048dc18c88c2a9783de47": "d5e6ac9be836823cdc6db3e927dd139c",
".git/objects/12/7aa16745ead2d60b412627a8b5cccc68872bfb": "3e4ce7081d1e460f8c1d785821efcc9b",
".git/objects/85/7a56948d2ae0b9fad6aa80f2bdc327608b472b": "d774da4b8b6703bf5407e02ade13cb8e",
".git/objects/2e/6d8a369802834be86b7b2d01c97ccd5b0305cb": "e4e3d977254d246055f92a35514ad8e3",
".git/objects/2b/00285acdbed2910bdcc07d9cb2365438f7b752": "d3b8c3f2253e231b59bebabbaaac6e6e",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/78/03286add5917499791057d14170ddd0470b4f5": "475bb2043453cf2d92fcf7b1c039adaf",
".git/objects/7f/73422047bbcc43604efbb7e2eab86326743fdb": "75f6f538d3ce22c2bef72d13b10e5792",
".git/objects/7a/2d97b2278da2ff3d82b6704cad3d72c03874e2": "25901f9a9bcade568d8cf703f4b4cc1b",
".git/objects/14/d94f35425f0d112c5a667674157f5ea5b98f0e": "d5f2fbb7018f75e555b27ad2a38c89b4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0a7c5670565a38b674e0bd571d613e02",
".git/logs/refs/heads/main": "7465203c6a3832e36b4ed7bae6f105a8",
".git/logs/refs/remotes/origin/main": "63fc0aa10dfcac8643d939269d624ba6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "8adc3f9cf90b6fe0a78ff5d33b593302",
".git/refs/remotes/origin/main": "8adc3f9cf90b6fe0a78ff5d33b593302",
".git/index": "a71ffd5e5537222d4624f902c4af26d3",
".git/COMMIT_EDITMSG": "dc488e5788b32d3d3413367f11fd24f6",
"assets/AssetManifest.json": "a5bfc9aaf24f6c08c1d584e5508c15db",
"assets/NOTICES": "ba6cb804cbd74f2297484d4a43ecdc0f",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/shaders/ink_sparkle.frag": "87886eaac04ea6e4d7b46350184e7426",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/svg/logo_ups_blanco.svg": "9563763ce868de910fe1b624f078a957",
"assets/assets/svg/logo_ups.svg": "ee51b2497dd10d31a340a2c4aeb06ac7",
"assets/assets/svg/ico-uio.svg": "5554235c4c19b27383c09a2129dff922",
"assets/assets/images/ups_backgorund.jpeg": "b27aea4fedc0466d076353ae3fe2764d",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
