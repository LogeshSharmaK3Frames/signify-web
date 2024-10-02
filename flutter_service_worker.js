'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b6d85631bef2338d73c8e7b2255815b2",
"index.html": "a2ba67c81e9fd696fa5a724baf373ceb",
"/": "a2ba67c81e9fd696fa5a724baf373ceb",
"main.dart.js": "4e4d046204087ad7056d72ebcaf276a9",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "575ffeceba67b75d308a7d998b128ede",
"assets/AssetManifest.json": "e73fc3f0a8b62e7f490346e0b137b8e6",
"assets/NOTICES": "791559cdc838a974e2f1f311b62a97aa",
"assets/FontManifest.json": "cd6db18080fb01c4b3763ff51d78646d",
"assets/AssetManifest.bin.json": "f331d2dd392b3948dd0565fb861f3e17",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/toast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/toast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4dba504125f500379ddd00eb00824895",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/svg/lot_creation_selected.svg": "c16f1452102220ca33ee2d9425eabba4",
"assets/assets/svg/policy_side_menu_icon.svg": "9c9beb1e6433d9e21524a3232cf1b697",
"assets/assets/svg/home_side_menu_icon.svg": "21e0108130ed7eeac4f836e89971f7b2",
"assets/assets/svg/register_warranty_selected.svg": "e7ff4a4ad881497aee5c4b2448ef4695",
"assets/assets/svg/report_selected.svg": "f640b1adcaee14bb2cfaf971005bda7e",
"assets/assets/svg/dashboard_deselected.svg": "ca06bb698add3069c0b98f6e06e33192",
"assets/assets/svg/deselected_bg.svg": "439e3738f23e45321d3e1deec891a1cc",
"assets/assets/svg/perview_dli_deselected.svg": "ce031d6241acd123d518562366f2dc32",
"assets/assets/svg/support_side_menu_icon.svg": "43dfff02badc7e3b64eff4fd5592ecd3",
"assets/assets/svg/tnc_side_menu_icon.svg": "81f7ef40767ae75b42d09d491fd07941",
"assets/assets/svg/view_profile_deselected.svg": "993eb7555f1815de0a7886a70b80a847",
"assets/assets/svg/wsl_approved_seleted.svg": "b7d77ffe4cc221886328aa96b7d3067b",
"assets/assets/svg/wsl_pending_retailer_deselected.svg": "fc4e222485fa81c73c1148bc8dc1d532",
"assets/assets/svg/claim_warranty_deselected.svg": "0fd8c37e862edb300440059650d77971",
"assets/assets/svg/lot_creation_deselected.svg": "a2e9bd7ff6091a4836f982a7de1bbd77",
"assets/assets/svg/customer_claim_selected.svg": "ad92f96ed6bbbe3ea31b87d02288d143",
"assets/assets/svg/warranty_history_selected.svg": "f883039cf49f3cf72380449080a6f271",
"assets/assets/svg/profile_side_menu_icon.svg": "c99d8a762f886f5eccddc92fb43c1e43",
"assets/assets/svg/distributor_list_selected.svg": "02609d285b9977bdd5a6ce97c268c9c8",
"assets/assets/svg/whole_seller_icon.svg": "22d6ad4df3ec0bfc851c05def51458b2",
"assets/assets/svg/claim_warranty_selected.svg": "ebef615c61897197cc6f87354b376fc6",
"assets/assets/svg/ecoLink.svg": "3c1fcee15a311a4b49ad875f62a16569",
"assets/assets/svg/headset_mic.svg": "a600d1fadc2a60ee882b94a54f0cd986",
"assets/assets/svg/feedback_side_menu_icon.svg": "f8e25771be313ddb7788237ce6b095f6",
"assets/assets/svg/retailer_list_selected.svg": "e46e38e73e938efbd27bdc78057b471b",
"assets/assets/svg/response_success_white_icon.svg": "0a11f83baca2cc314776c6c0695ba49b",
"assets/assets/svg/button_blue_bg.svg": "34fb341481b95b01f91642240267d5e8",
"assets/assets/svg/green_tick.svg": "0d8c354a469001c22222e1ef8dce3908",
"assets/assets/svg/wsl_pending_retailer_selected.svg": "17eeb575ac1e7ebf6841ffa52d1a00ca",
"assets/assets/svg/response_fail_icon.svg": "54f16fe1549d7e2f787fe6cb76c1188d",
"assets/assets/svg/philips.svg": "8de331579806a96b663061a1dedbfc3b",
"assets/assets/svg/customer_icon.svg": "396279addfeba3facc6143bafa629d72",
"assets/assets/svg/response_success_icon.svg": "87fc33105573c8fafcb961020e9ebfd8",
"assets/assets/svg/claim_status_deselected.svg": "e48a209e11ab306bc6372ef04d334020",
"assets/assets/svg/dashboard_selected.svg": "b00d70823cc90a23107ede628b61f24b",
"assets/assets/svg/deactivate_side_menu_icon.svg": "470ba979f79e9c2bc1bac49a43bac965",
"assets/assets/svg/register_warranty_deselected.svg": "4adf0466484e6a098ee2de5d328c30ab",
"assets/assets/svg/welcome_app_logo.svg": "2f56a5f066f5803a246ff330f809099a",
"assets/assets/svg/home_menu.svg": "f1fe737d6556aa6a733eeae6be1d5bb4",
"assets/assets/svg/report_deselected.svg": "4f10af30237a16cc3d9397cbe61e51b3",
"assets/assets/svg/warranty_history_deselected.svg": "e426fa65122dc2ceba96250449711096",
"assets/assets/svg/customer_claim_deselected.svg": "c3518d1979b0e2f5c8505d935681e297",
"assets/assets/svg/wsl_approved_deseleted.svg": "7860d62ce4e583406bcc85c4607aefea",
"assets/assets/svg/register_side_menu_icon.svg": "ff17095a56f56da7be0bd414cf10b4dc",
"assets/assets/svg/claim_status_selected.svg": "2784de0aad76d493d165705f9231680f",
"assets/assets/svg/user_icon.svg": "b3b29df666f4f055e7386a2c916366c2",
"assets/assets/svg/app_bar.svg": "c9453b494d8b6c12c3a22a3f7058768f",
"assets/assets/svg/welcome_app_logo_old.svg": "6366b18e072b3e5ee03d846dab31e1e2",
"assets/assets/svg/view_profile_selected.svg": "21625db37ba16e85651a91b3b30dcd6e",
"assets/assets/svg/selected_bg.svg": "d3efca8194831879f1d9ddee5837f1c2",
"assets/assets/svg/claim_side_menu_icon.svg": "84f7bc7f9920070bc5324ffee4748f85",
"assets/assets/svg/distributor_list_deselected.svg": "260f7e5799bd99a6835af8e2c3672855",
"assets/assets/svg/retailer_icon.svg": "8632bb266a1e366a56d11bf315e7ac8d",
"assets/assets/svg/super_stocklist_icon.svg": "56aafc06a73480b4eb3fb2eada1a354c",
"assets/assets/svg/parent_control_side_menu_icon.svg": "269bb219f573d8ac4a67a0ca2d632f9f",
"assets/assets/svg/grey_tick.svg": "1e1c7883ce6905d8045fd925c7233fd0",
"assets/assets/svg/perview_dli_selected.svg": "e5bbf4d7507778e8d5a515075e5e7683",
"assets/assets/images/signify_logo_old2.png": "c08585adf5ea57dd3cc586272c0186fe",
"assets/assets/images/retailer_list_selected.png": "e5324b609d268ce6e27a71dd021d0356",
"assets/assets/images/signify_logo.png": "5c070aee4a06e7d2dda9c704d155cf23",
"assets/assets/images/welcome_bg.png": "07d6c3dd62925f0da0cf1a675fba33cf",
"assets/assets/images/signify_gradient.png": "5d63957e3686e4b4924f42cc1066fb74",
"assets/assets/images/pending_approval_selected.png": "a862a27637a8dc27b618343b56963da3",
"assets/assets/images/background_Support_screen.png": "572198e9e609ebd7012aaaf27d0d3bb2",
"assets/assets/images/profile.png": "0414a226da20edc714f1deb35111c7dd",
"assets/assets/images/pending_approval.png": "81d5bdfd5ea33ce2e483fbb35b548df2",
"assets/assets/images/philips_png.png": "1839718b8ce706787be409daed99504b",
"assets/assets/images/signify_logo_old.png": "5dbd6a52e4441278af13e8149b5e1a67",
"assets/assets/images/retailer_list.png": "2b8a726f8f38a33abc47e8aaab1dbdbd",
"assets/assets/sounds/camera_click.aac": "32f8c47e844c0dccd2d10661f7beac27",
"assets/assets/sounds/camera_click.wav": "9708773da266fdaa0ac67cc5adfc0a53",
"assets/assets/fonts/bebas-neue-ui.ttf": "b2b293064f557c41411aac04d6f6710d",
"assets/assets/fonts/roboto-ui.ttf": "afe8eacfc0903cc0612dc696881f0480",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
