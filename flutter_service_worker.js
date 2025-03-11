'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "34461c9bd8c3c52cb443d1c66f3fe48c",
"assets/AssetManifest.bin.json": "4199106d711332006f6d0a17775adcb9",
"assets/AssetManifest.json": "82f105930ea95ec30ac8437ebcfa22ed",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Tinos-Bold.ttf": "78608e0544ac6285956a5cc050d4143f",
"assets/assets/fonts/Tinos-BoldItalic.ttf": "83eb748d53dd6c4be1f08117ba3823fc",
"assets/assets/fonts/Tinos-Italic.ttf": "ba02ef4e04db931e4f64f19cbab41f11",
"assets/assets/fonts/Tinos-Regular.ttf": "5d50b7efd868452d058b828cf13dd1ac",
"assets/assets/images/adaptive_foreground_icon.png": "7a18e1be99cf8aa30934f762f368e433",
"assets/assets/images/app_launcher_icon.png": "7a18e1be99cf8aa30934f762f368e433",
"assets/assets/images/black_leather_texture_oq318q90qun0mt90ucjc_2.png": "ba9910063c8cd6e37ab874dd44f39e7c",
"assets/assets/images/error_image.png": "d8754649e7f9280b1b85b52af6498214",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/fijek_4.png": "ca5014ac89bcbcb5fc7321541e4147fc",
"assets/assets/images/for_months_our_firm_has_worked_closely_with_individuals_afflicted_by_sps_consulting_with_top_neurol_cnx8j4y0fn71bj4r9l4q_2.png": "d8345fd58c30837d2f8f54f9375109ec",
"assets/assets/images/GREEN_(14).png": "2208587506e2c0cab9e99973b6977b07",
"assets/assets/images/GREEN_(15).png": "c60f5245adcd507b91259c1f63b1c2a2",
"assets/assets/images/GREEN_(6).png": "d33fe8554018f2c4ab2c91af826dfbe0",
"assets/assets/images/judge_with_gavel_28rpp671um40vvtiripm_0.png": "d6786fc550de34abe96ead5b81743a3e",
"assets/assets/images/legal_libary_z5l6xspdhqnc91ehnamr_2.png": "48eb4f4275908e486b678cce074191f5",
"assets/assets/images/LOGO-W.png": "7a18e1be99cf8aa30934f762f368e433",
"assets/assets/images/NOW_(11).png": "3cda584349fe9e61dc7d0753da078a74",
"assets/assets/images/progressive_muscle_stiffness_in_the_torso_and_limbs__your_muscles_lock_up_gradually_robbing_you_of__9uzdj6q3s3udr993po8l_2.png": "c84c2cea0a0d2b34717ca26851ee89c7",
"assets/assets/images/sps_is_a_rare_and_debilitating_neurological_disorder_characterized_by-__progressive_muscle_stiffnes_jd9qw6xyww2my2965f4m_0.png": "373f8ae85ee357358d76309d4e9d1159",
"assets/assets/images/sps_is_a_rare_and_debilitating_neurological_disorder_characterized_by-__progressive_muscle_stiffnes_v6xbljvrmtjy5e74rvhh_2.png": "433248b2e8f460122860b5dd3f581ba2",
"assets/assets/images/vnimc_1.png": "634d06944687f6c4e8b482356b977aef",
"assets/assets/jsons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "df075f139b997b4df1b90c3e4fc5afa2",
"assets/fonts/MaterialIcons-Regular.otf": "e5354f35d8935479a987a12a6b081668",
"assets/NOTICES": "2a5300f52715535d10d7d7cc79c6dcb7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c51c58455afba997eb4bd92393d3ad3e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "06527846b771cc9442b974d98a595025",
"assets/packages/youtube_player_iframe/assets/player.html": "fedadd807717e2e72a56a1117ebb1338",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "90c602cbcde3f279cc8c0d68ee5bef07",
"GREEN_(15).png": "c60f5245adcd507b91259c1f63b1c2a2",
"icons/app_launcher_icon.png": "7a18e1be99cf8aa30934f762f368e433",
"icons/error_image.png": "d8754649e7f9280b1b85b52af6498214",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a26fad22cd6d5a2cba60bdabe76560f5",
"/": "a26fad22cd6d5a2cba60bdabe76560f5",
"LOGO-W.png": "7a18e1be99cf8aa30934f762f368e433",
"main.dart.js": "b86eb579174d64ceb3f42e9f50f8d184",
"version.json": "2b94ae582d729e14ac3081dd4f1369c7"};
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
