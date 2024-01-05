import React, {useEffect, useState, useRef} from 'react';
import '../App.css'
const title = '';
const content = `
<section class="homepage-section standalone-module" data-module-template="tv-plus-gallery"
data-analytics-region="tv-plus-gallery">
<div class="module-content">

    <script type="text/javascript">
        window.tvPlusHpData = { "data": { "shelf": { "cachingPolicy": { "cache": true, "maxAge": 0, "type": "RefreshWithCanvas" }, "displayType": "river", "id": "edt.col.626ae340-a5f3-4474-8cc5-8b716ded72e5", "items": [{ "extendedMetadata": { "images": { "channelSplashWide": { "width": 4320, "height": 1800, "url": "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/7b/37/90/7b3790f1-2439-ba15-935b-f7f3036fc3c2/4d101480-3317-4e4a-9bac-2284f350922b.png/{w}x{h}sr.{f}", "joeColor": "b:rgb(56,92,120) p:rgb(233,235,230) s:rgb(232,226,220) t:rgb(198,207,208) q:rgb(197,200,200)" }, "posterArt": { "width": 3840, "height": 2160, "url": "https://is1-ssl.mzstatic.com/image/thumb/tPJwMGtsAr_psAVlyf2Rzg/{w}x{h}.{f}", "supportsLayeredImage": true, "joeColor": "b:rgb(64,100,129) p:rgb(251,246,225) s:rgb(252,243,177) t:rgb(213,217,206) q:rgb(214,214,167)" }, "channelSplashTall": { "width": 1680, "height": 3636, "url": "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/c0/11/15/c0111558-3dd9-6fbe-705b-0afec6323294/6be3427d-8d09-4897-839f-5e93924496db.png/{w}x{h}tc.{f}", "joeColor": "b:rgb(34,65,88) p:rgb(232,233,223) s:rgb(230,210,189) t:rgb(192,199,196) q:rgb(191,181,169)" }, "singleColorContentLogo": { "width": 2792, "height": 1328, "url": "https://is1-ssl.mzstatic.com/image/thumb/J7vM2h0h2cFSUDB5x44EKg/{w}x{h}.{f}", "joeColor": "b:rgb(255,255,255) p:rgb(12,12,12) s:rgb(25,25,25) t:rgb(61,61,61) q:rgb(71,71,71)" } }, "longNote": "A thrilling road trip comedy." }, "genres": [{ "id": "umc.gnr.mov.comedy", "name": "Comedy", "type": "Genre", "url": "https://tv.apple.com/us/genre/comedy/umc.gnr.mov.comedy" }], "id": "umc.cmc.6o6y3wel2lez2tkdu2cv8dzd1", "images": { "shelfImage": { "height": 2160, "isP3": false, "joeColor": "b:rgb(64,100,129) p:rgb(251,246,225) s:rgb(252,243,177) t:rgb(213,217,206) q:rgb(214,214,167)", "supportsLayeredImage": true, "url": "https://is1-ssl.mzstatic.com/image/thumb/tPJwMGtsAr_psAVlyf2Rzg/{w}x{h}.{f}", "width": 3840 }, "shelfImageBackground": { "height": 2160, "isP3": false, "joeColor": "b:rgb(180,181,179) p:rgb(35,28,24) s:rgb(37,35,32) t:rgb(64,58,55) q:rgb(66,64,61)", "supportsLayeredImage": false, "url": "https://is1-ssl.mzstatic.com/image/thumb/3QeIazFewU4Mox-YZ1BBhA/{w}x{h}.{f}", "width": 3840 }, "transitionImage": { "height": 3240, "isP3": false, "joeColor": "b:rgb(167,173,168) p:rgb(14,10,6) s:rgb(27,19,13) t:rgb(45,43,38) q:rgb(55,50,44)", "supportsLayeredImage": false, "url": "https://is1-ssl.mzstatic.com/image/thumb/zOQ4Gz7BdkLtExHLasRDdg/{w}x{h}sr.{f}", "width": 4320 } }, "isAppleOriginal": true, "releaseDate": 1702598400000, "secondaryActions": ["AddToUpNext"], "title": "The Family Plan", "type": "Movie", "url": "https://tv.apple.com/us/movie/the-family-plan/umc.cmc.6o6y3wel2lez2tkdu2cv8dzd1" }, { "extendedMetadata": { "caption": "NEW EPISODES FRIDAYS", "images": { "channelSplashWide": { "width": 4320, "height": 1800, "url": "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/ee/cd/b4/eecdb452-4553-ef29-a24e-283f9abac2ef/3e43b2c4-0719-45ed-88ab-48fb6688d344.png/{w}x{h}sr.{f}", "joeColor": "b:rgb(1,30,19) p:rgb(234,225,129) s:rgb(175,202,129) t:rgb(187,186,107) q:rgb(140,167,107)" }, "posterArt": { "width": 3840, "height": 2160, "url": "https://is1-ssl.mzstatic.com/image/thumb/mZsXfk4apSIl3Q5QZqztiQ/{w}x{h}.{f}", "supportsLayeredImage": true, "joeColor": "b:rgb(6,39,27) p:rgb(235,234,154) s:rgb(132,200,109) t:rgb(189,195,129) q:rgb(107,167,93)" }, "channelSplashTall": { "width": 1680, "height": 3636, "url": "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/70/36/e0/7036e04c-845f-61d1-bfb7-26334074376a/b0eae62f-8ea4-4883-8f26-245eb2f13e7f.png/{w}x{h}tc.{f}", "joeColor": "b:rgb(6,29,23) p:rgb(232,224,159) s:rgb(226,220,133) t:rgb(187,185,132) q:rgb(182,182,111)" }, "singleColorContentLogo": { "width": 4954, "height": 1196, "url": "https://is1-ssl.mzstatic.com/image/thumb/2Pvq9Q1gy7cxOpfXK1_8Ew/{w}x{h}.{f}", "joeColor": "b:rgb(255,255,255) p:rgb(12,12,12) s:rgb(25,25,25) t:rgb(61,61,61) q:rgb(71,71,71)" } }, "longNote": "Some secrets cannot be contained." }, "genres": [{ "id": "umc.gnr.tv.adventure", "name": "Adventure", "type": "Genre", "url": "https://tv.apple.com/us/genre/adventure/umc.gnr.tv.adventure" }], "id": "umc.cmc.62l8x0ixrhyq3yaqa5y8yo7ew", "images": { "shelfImage": { "height": 2160, "isP3": false, "joeColor": "b:rgb(6,39,27) p:rgb(235,234,154) s:rgb(132,200,109) t:rgb(189,195,129) q:rgb(107,167,93)", "supportsLayeredImage": true, "url": "https://is1-ssl.mzstatic.com/image/thumb/mZsXfk4apSIl3Q5QZqztiQ/{w}x{h}.{f}", "width": 3840 }, "shelfImageBackground": { "height": 2160, "isP3": false, "joeColor": "b:rgb(3,35,30) p:rgb(238,231,144) s:rgb(208,222,132) t:rgb(191,192,121) q:rgb(167,185,112)", "supportsLayeredImage": false, "url": "https://is1-ssl.mzstatic.com/image/thumb/ZpgnpMND_O-u7ME4602c-Q/{w}x{h}.{f}", "width": 3840 }, "transitionImage": { "height": 3240, "isP3": false, "joeColor": "b:rgb(26,29,11) p:rgb(227,226,145) s:rgb(160,200,116) t:rgb(187,186,118) q:rgb(133,166,95)", "supportsLayeredImage": false, "url": "https://is1-ssl.mzstatic.com/image/thumb/OFHNmCIAhV3ZWgWz09nXIA/{w}x{h}sr.{f}", "width": 4320 } }, "isAppleOriginal": true, "releaseDate": 1700179200000, "secondaryActions": ["AddToUpNext"], "title": "Monarch: Legacy of Monsters", "type": "Show", "url": "https://tv.apple.com/us/show/monarch-legacy-of-monsters/umc.cmc.62l8x0ixrhyq3yaqa5y8yo7ew" }, { "extendedMetadata": { "caption": "AVAILABLE UNTIL JANUARY 30", "images": { "channelSplashWide": { "width": 4320, "height": 1800, "url": "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/0a/44/33/0a443398-eed9-3104-be8b-1adc88d66a55/4d59ac84-e71f-43be-8cdd-aa1ff7ae65d9.png/{w}x{h}sr.{f}", "joeColor": "b:rgb(5,5,15) p:rgb(250,175,136) s:rgb(219,138,72) t:rgb(201,141,112) q:rgb(176,112,61)" }, "posterArt": { "width": 3840, "height": 2160, "url": "https://is1-ssl.mzstatic.com/image/thumb/14EMzw_K3xobvKcajf9fdQ/{w}x{h}.{f}", "supportsLayeredImage": true, "joeColor": "b:rgb(29,13,14) p:rgb(253,247,228) s:rgb(224,174,114) t:rgb(208,200,185) q:rgb(185,141,94)" }, "channelSplashTall": { "width": 1680, "height": 3636, "url": "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/48/e9/9b/48e99b23-f30e-f184-9c8c-bd13742768ac/e20ca1a1-44f5-4f76-8ef3-1b30203f2be1.png/{w}x{h}tc.{f}", "joeColor": "b:rgb(43,20,18) p:rgb(228,206,193) s:rgb(233,160,121) t:rgb(191,169,158) q:rgb(195,132,100)" }, "singleColorContentLogo": { "width": 6533, "height": 2774, "url": "https://is1-ssl.mzstatic.com/image/thumb/fA5lRjCKsH7ETHn89q0Eig/{w}x{h}.{f}", "joeColor": "b:rgb(255,255,255) p:rgb(12,12,12) s:rgb(25,25,25) t:rgb(61,61,61) q:rgb(71,71,71)" } }, "longNote": "Peggy Gou and Honey Dijon play exclusive DJ sets in New York." }, "genres": [{ "id": "umc.gnr.mov.music", "name": "Music", "type": "Genre", "url": "https://tv.apple.com/us/genre/music/umc.gnr.mov.music" }], "id": "umc.cmc.5p21upcwrwehs6ypw9hmaygdx", "images": { "shelfImage": { "height": 2160, "isP3": false, "joeColor": "b:rgb(29,13,14) p:rgb(253,247,228) s:rgb(224,174,114) t:rgb(208,200,185) q:rgb(185,141,94)", "supportsLayeredImage": true, "url": "https://is1-ssl.mzstatic.com/image/thumb/14EMzw_K3xobvKcajf9fdQ/{w}x{h}.{f}", "width": 3840 }, "shelfImageBackground": { "height": 2160, "isP3": false, "joeColor": "b:rgb(28,19,18) p:rgb(250,226,196) s:rgb(242,198,166) t:rgb(206,184,161) q:rgb(199,162,136)", "supportsLayeredImage": false, "url": "https://is1-ssl.mzstatic.com/image/thumb/fdaGEta-Sn0glO-BYBbacQ/{w}x{h}.{f}", "width": 3840 }, "transitionImage": { "height": 3240, "isP3": false, "joeColor": "b:rgb(31,19,18) p:rgb(228,185,154) s:rgb(214,165,132) t:rgb(188,152,127) q:rgb(178,136,109)", "supportsLayeredImage": false, "url": "https://is1-ssl.mzstatic.com/image/thumb/EpokoNXxMIOw-BtoK-uMFg/{w}x{h}sr.{f}", "width": 4320 } }, "isAppleOriginal": true, "releaseDate": 1703980800000, "secondaryActions": ["AddToUpNext"], "title": "Apple Music Live: NYE", "type": "Movie", "url": "https://tv.apple.com/us/movie/apple-music-live-nye/umc.cmc.5p21upcwrwehs6ypw9hmaygdx" }, { "extendedMetadata": { "caption": "IN THEATERS NOW", "comingSoon": { "tvs.sbd.4000": { "comingSoonCustomText": "At a Later Date", "isComingSoon": true } }, "images": { "channelSplashWide": { "width": 4320, "height": 1800, "url": "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/07/03/75/0703751a-ecf1-f94f-e70a-876c2f817a33/b9084ba3-6a4e-4a70-821d-f8d1d8d50125.png/{w}x{h}sr.{f}", "joeColor": "b:rgb(137,175,175) p:rgb(0,4,5) s:rgb(20,26,26) t:rgb(28,38,39) q:rgb(43,55,56)" }, "posterArt": { "width": 3840, "height": 2160, "url": "https://is1-ssl.mzstatic.com/image/thumb/FVXovQ_qyfe9iwKjx4dRxA/{w}x{h}.{f}", "supportsLayeredImage": true, "joeColor": "b:rgb(164,206,205) p:rgb(61,25,22) s:rgb(29,37,38) t:rgb(81,61,58) q:rgb(56,71,71)" }, "channelSplashTall": { "width": 1680, "height": 3636, "url": "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/bd/32/c7/bd32c7cc-13a9-01b4-9d12-8521d2eb1d09/2b4502ff-6444-4b60-b969-6eb627c8bae8.png/{w}x{h}tc.{f}", "joeColor": "b:rgb(157,190,189) p:rgb(1,3,4) s:rgb(23,22,20) t:rgb(32,40,41) q:rgb(50,56,54)" }, "singleColorContentLogo": { "width": 5750, "height": 751, "url": "https://is1-ssl.mzstatic.com/image/thumb/m5oxgdVzeqPOTTfDAaSEQw/{w}x{h}.{f}", "joeColor": "b:rgb(255,255,255) p:rgb(12,12,12) s:rgb(25,25,25) t:rgb(61,61,61) q:rgb(71,71,71)" } }, "longNote": "In theaters now." }, "genres": [{ "id": "umc.gnr.mov.drama", "name": "Drama", "type": "Genre", "url": "https://tv.apple.com/us/genre/drama/umc.gnr.mov.drama" }], "id": "umc.cmc.25k80oxl3vo69c8rimk8v81s1", "images": { "shelfImage": { "height": 2160, "isP3": false, "joeColor": "b:rgb(164,206,205) p:rgb(61,25,22) s:rgb(29,37,38) t:rgb(81,61,58) q:rgb(56,71,71)", "supportsLayeredImage": true, "url": "https://is1-ssl.mzstatic.com/image/thumb/FVXovQ_qyfe9iwKjx4dRxA/{w}x{h}.{f}", "width": 3840 }, "shelfImageBackground": { "height": 2160, "isP3": false, "joeColor": "b:rgb(88,82,77) p:rgb(250,231,201) s:rgb(247,228,194) t:rgb(217,201,176) q:rgb(215,199,170)", "supportsLayeredImage": false, "url": "https://is1-ssl.mzstatic.com/image/thumb/snPwSmNlBXPKGHPgkTh0ww/{w}x{h}.{f}", "width": 3840 }, "transitionImage": { "height": 3240, "isP3": false, "joeColor": "b:rgb(139,185,187) p:rgb(9,11,11) s:rgb(26,27,25) t:rgb(35,46,46) q:rgb(48,58,57)", "supportsLayeredImage": false, "url": "https://is1-ssl.mzstatic.com/image/thumb/ev_xryrZVdS_VEe9RI05Pg/{w}x{h}sr.{f}", "width": 4320 } }, "isAppleOriginal": true, "releaseDate": 1700611200000, "secondaryActions": ["AddToUpNext"], "title": "Napoleon", "type": "Movie", "url": "https://tv.apple.com/us/movie/napoleon/umc.cmc.25k80oxl3vo69c8rimk8v81s1" }, { "extendedMetadata": { "images": { "channelSplashWide": { "width": 4320, "height": 1800, "url": "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/83/a1/40/83a14037-38e1-9ffc-c157-5d64fe4a961b/9ffb9656-8c53-4e3c-8c03-9eb3c676346a.png/{w}x{h}sr.{f}", "joeColor": "b:rgb(14,49,59) p:rgb(233,213,55) s:rgb(230,187,130) t:rgb(189,180,55) q:rgb(186,160,115)" }, "posterArt": { "width": 3840, "height": 2160, "url": "https://is1-ssl.mzstatic.com/image/thumb/-RJ9s2YmRAo0GqNUf3GNlg/{w}x{h}.{f}", "supportsLayeredImage": true, "joeColor": "b:rgb(7,76,89) p:rgb(198,229,233) s:rgb(238,176,62) t:rgb(160,198,204) q:rgb(192,156,67)" }, "channelSplashTall": { "width": 1680, "height": 3636, "url": "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/c8/7c/e0/c87ce004-c510-a128-9fae-ebe04c1d27bd/eeee2e40-1096-45e5-b78b-d6f73ed4db9b.png/{w}x{h}tc.{f}", "joeColor": "b:rgb(12,63,73) p:rgb(234,232,225) s:rgb(245,188,64) t:rgb(190,198,195) q:rgb(198,163,65)" }, "singleColorContentLogo": { "width": 7434, "height": 1578, "url": "https://is1-ssl.mzstatic.com/image/thumb/9K4820tYJgYYE_Q7JwcFgA/{w}x{h}.{f}", "joeColor": "b:rgb(255,255,255) p:rgb(12,12,12) s:rgb(25,25,25) t:rgb(61,61,61) q:rgb(71,71,71)" } }, "longNote": "It\u2019s spy vs. spy vs. spy." }, "genres": [{ "id": "umc.gnr.tv.thriller", "name": "Thriller", "type": "Genre", "url": "https://tv.apple.com/us/genre/thriller/umc.gnr.tv.thriller" }], "id": "umc.cmc.2szz3fdt71tl1ulnbp8utgq5o", "images": { "shelfImage": { "height": 2160, "isP3": false, "joeColor": "b:rgb(7,76,89) p:rgb(198,229,233) s:rgb(238,176,62) t:rgb(160,198,204) q:rgb(192,156,67)", "supportsLayeredImage": true, "url": "https://is1-ssl.mzstatic.com/image/thumb/-RJ9s2YmRAo0GqNUf3GNlg/{w}x{h}.{f}", "width": 3840 }, "shelfImageBackground": { "height": 2160, "isP3": false, "joeColor": "b:rgb(8,68,74) p:rgb(240,209,69) s:rgb(219,207,162) t:rgb(193,181,70) q:rgb(177,179,145)", "supportsLayeredImage": false, "url": "https://is1-ssl.mzstatic.com/image/thumb/2VfN61GJRnrEDDRDFuYkMg/{w}x{h}.{f}", "width": 3840 }, "transitionImage": { "height": 3240, "isP3": false, "joeColor": "b:rgb(6,12,15) p:rgb(249,67,48) s:rgb(252,58,35) t:rgb(200,56,41) q:rgb(203,48,31)", "supportsLayeredImage": false, "url": "https://is1-ssl.mzstatic.com/image/thumb/HlLe_jShqs5ROg_vBKuWIQ/{w}x{h}sr.{f}", "width": 4320 } }, "isAppleOriginal": true, "releaseDate": 1648771200000, "secondaryActions": ["AddToUpNext"], "title": "Slow Horses", "type": "Show", "url": "https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o" }, { "extendedMetadata": { "images": { "channelSplashWide": { "width": 4320, "height": 1800, "url": "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/28/39/2c/28392c38-d54d-4e4e-49fb-c9e4f434f2a6/42161e50-1a82-40ec-8d8a-cc7eba86d61f.png/{w}x{h}sr.{f}", "joeColor": "b:rgb(4,17,47) p:rgb(153,169,199) s:rgb(71,155,221) t:rgb(118,133,164) q:rgb(55,122,182)" }, "posterArt": { "width": 3840, "height": 2160, "url": "https://is1-ssl.mzstatic.com/image/thumb/ageP1PYyLi7UlNiWMva32Q/{w}x{h}.{f}", "supportsLayeredImage": true, "joeColor": "b:rgb(2,30,84) p:rgb(121,193,225) s:rgb(14,139,235) t:rgb(97,160,197) q:rgb(11,117,204)" }, "channelSplashTall": { "width": 1680, "height": 3636, "url": "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/b3/fa/77/b3fa7718-b692-ca56-87ce-5af818a447f7/955d54ab-6986-4e68-981d-b11df46a0029.png/{w}x{h}tc.{f}", "joeColor": "b:rgb(3,20,64) p:rgb(92,149,220) s:rgb(75,147,231) t:rgb(72,119,185) q:rgb(59,117,193)" }, "singleColorContentLogo": { "width": 5937, "height": 892, "url": "https://is1-ssl.mzstatic.com/image/thumb/Cc6MMzxFzD1gVqnd6IslKA/{w}x{h}.{f}", "joeColor": "b:rgb(255,255,255) p:rgb(12,12,12) s:rgb(25,25,25) t:rgb(61,61,61) q:rgb(71,71,71)" } }, "longNote": "21 Emmy\u00ae Nominations\nIncluding Best Comedy" }, "genres": [{ "id": "umc.gnr.tv.comedy", "name": "Comedy", "type": "Genre", "url": "https://tv.apple.com/us/genre/comedy/umc.gnr.tv.comedy" }], "id": "umc.cmc.vtoh0mn0xn7t3c643xqonfzy", "images": { "shelfImage": { "height": 2160, "isP3": false, "joeColor": "b:rgb(2,30,84) p:rgb(121,193,225) s:rgb(14,139,235) t:rgb(97,160,197) q:rgb(11,117,204)", "supportsLayeredImage": true, "url": "https://is1-ssl.mzstatic.com/image/thumb/ageP1PYyLi7UlNiWMva32Q/{w}x{h}.{f}", "width": 3840 }, "shelfImageBackground": { "height": 2160, "isP3": false, "joeColor": "b:rgb(1,27,78) p:rgb(100,194,225) s:rgb(75,148,224) t:rgb(81,161,196) q:rgb(60,124,195)", "supportsLayeredImage": false, "url": "https://is1-ssl.mzstatic.com/image/thumb/ihJBSuOxRtRXE6aDXdA7dw/{w}x{h}.{f}", "width": 3840 }, "transitionImage": { "height": 3240, "isP3": false, "joeColor": "b:rgb(2,5,41) p:rgb(165,200,235) s:rgb(108,156,216) t:rgb(132,161,196) q:rgb(87,126,181)", "supportsLayeredImage": false, "url": "https://is1-ssl.mzstatic.com/image/thumb/8tZXIVmGubplrBRmZfc_fw/{w}x{h}sr.{f}", "width": 4320 } }, "isAppleOriginal": true, "releaseDate": 1597363200000, "secondaryActions": ["AddToUpNext"], "title": "Ted Lasso", "type": "Show", "url": "https://tv.apple.com/us/show/ted-lasso/umc.cmc.vtoh0mn0xn7t3c643xqonfzy" }, { "extendedMetadata": { "images": { "channelSplashWide": { "width": 4320, "height": 1800, "url": "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/00/39/86/00398675-949c-5a5d-81fd-39450110d5c8/121e2a53-c130-4d77-a055-68efba5c7473.png/{w}x{h}sr.{f}", "joeColor": "b:rgb(186,109,48) p:rgb(14,2,0) s:rgb(32,15,5) t:rgb(49,23,10) q:rgb(63,34,14)" }, "posterArt": { "width": 3840, "height": 2160, "url": "https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/{w}x{h}.{f}", "supportsLayeredImage": true, "joeColor": "b:rgb(200,131,67) p:rgb(24,8,2) s:rgb(35,16,10) t:rgb(59,33,15) q:rgb(68,39,22)" }, "channelSplashTall": { "width": 1680, "height": 3636, "url": "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/27/70/4a/27704afa-feb6-8ed8-9d0e-9d4f3536de2a/d404c65c-cb7e-481b-8ecd-846293327946.png/{w}x{h}tc.{f}", "joeColor": "b:rgb(180,103,47) p:rgb(4,1,0) s:rgb(5,2,0) t:rgb(39,22,9) q:rgb(40,22,9)" }, "singleColorContentLogo": { "width": 7884, "height": 2382, "url": "https://is1-ssl.mzstatic.com/image/thumb/qOsAe0YuSE0kbguTATsVLQ/{w}x{h}.{f}", "joeColor": "b:rgb(255,255,255) p:rgb(12,12,12) s:rgb(25,25,25) t:rgb(61,61,61) q:rgb(71,71,71)" } }, "longNote": "Change is on the air." }, "genres": [{ "id": "umc.gnr.tv.drama", "name": "Drama", "type": "Genre", "url": "https://tv.apple.com/us/genre/drama/umc.gnr.tv.drama" }], "id": "umc.cmc.25tn3v8ku4b39tr6ccgb8nl6m", "images": { "shelfImage": { "height": 2160, "isP3": false, "joeColor": "b:rgb(200,131,67) p:rgb(24,8,2) s:rgb(35,16,10) t:rgb(59,33,15) q:rgb(68,39,22)", "supportsLayeredImage": true, "url": "https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/{w}x{h}.{f}", "width": 3840 }, "shelfImageBackground": { "height": 2160, "isP3": false, "joeColor": "b:rgb(57,20,10) p:rgb(255,253,234) s:rgb(223,149,94) t:rgb(215,206,189) q:rgb(190,123,77)", "supportsLayeredImage": false, "url": "https://is1-ssl.mzstatic.com/image/thumb/ghWMYp06twqtitvO7vdJkA/{w}x{h}.{f}", "width": 3840 }, "transitionImage": { "height": 3240, "isP3": false, "joeColor": "b:rgb(37,6,0) p:rgb(244,182,86) s:rgb(233,149,62) t:rgb(202,147,69) q:rgb(194,121,49)", "supportsLayeredImage": false, "url": "https://is1-ssl.mzstatic.com/image/thumb/uSzgbcE8ABK93r6BwYQrbQ/{w}x{h}sr.{f}", "width": 4320 } }, "isAppleOriginal": true, "releaseDate": 1572566400000, "secondaryActions": ["AddToUpNext"], "title": "The Morning Show", "type": "Show", "url": "https://tv.apple.com/us/show/the-morning-show/umc.cmc.25tn3v8ku4b39tr6ccgb8nl6m" }, { "extendedMetadata": { "caption": "NEW EPISODES FRIDAYS", "images": { "channelSplashWide": { "width": 4320, "height": 1800, "url": "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/6d/33/ac/6d33acc9-39b6-537f-1a57-84cc7f76824e/3d9812fb-b8ca-4d1d-a9f2-fca47b4afca1.png/{w}x{h}sr.{f}", "joeColor": "b:rgb(7,7,1) p:rgb(217,183,18) s:rgb(204,168,15) t:rgb(175,148,15) q:rgb(165,136,12)" }, "posterArt": { "width": 3840, "height": 2160, "url": "https://is1-ssl.mzstatic.com/image/thumb/q8QlFpnNct0G9kpRmyMyNw/{w}x{h}.{f}", "supportsLayeredImage": true, "joeColor": "b:rgb(40,22,2) p:rgb(231,202,59) s:rgb(213,171,40) t:rgb(192,166,48) q:rgb(178,141,32)" }, "channelSplashTall": { "width": 1680, "height": 3636, "url": "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/fb/d7/5c/fbd75ca7-202f-80a1-3c0b-9df0be06f149/0a730dbf-3922-48fb-9357-f1bcf20c16c8.png/{w}x{h}tc.{f}", "joeColor": "b:rgb(17,11,5) p:rgb(223,184,21) s:rgb(206,171,16) t:rgb(182,149,18) q:rgb(168,139,14)" }, "singleColorContentLogo": { "width": 4263, "height": 1314, "url": "https://is1-ssl.mzstatic.com/image/thumb/v-xqGz_rdBcQ-OZ4HvFeVw/{w}x{h}.{f}", "joeColor": "b:rgb(255,255,255) p:rgb(12,12,12) s:rgb(25,25,25) t:rgb(61,61,61) q:rgb(71,71,71)" } }, "longNote": "A new gold rush begins." }, "genres": [{ "id": "umc.gnr.tv.drama", "name": "Drama", "type": "Genre", "url": "https://tv.apple.com/us/genre/drama/umc.gnr.tv.drama" }], "id": "umc.cmc.6wsi780sz5tdbqcf11k76mkp7", "images": { "shelfImage": { "height": 2160, "isP3": false, "joeColor": "b:rgb(40,22,2) p:rgb(231,202,59) s:rgb(213,171,40) t:rgb(192,166,48) q:rgb(178,141,32)", "supportsLayeredImage": true, "url": "https://is1-ssl.mzstatic.com/image/thumb/q8QlFpnNct0G9kpRmyMyNw/{w}x{h}.{f}", "width": 3840 }, "shelfImageBackground": { "height": 2160, "isP3": false, "joeColor": "b:rgb(1,6,1) p:rgb(227,172,31) s:rgb(214,176,18) t:rgb(182,139,25) q:rgb(171,142,14)", "supportsLayeredImage": false, "url": "https://is1-ssl.mzstatic.com/image/thumb/fZjAjsh7NRbAGrh91K1rLQ/{w}x{h}.{f}", "width": 3840 }, "transitionImage": { "height": 3240, "isP3": false, "joeColor": "b:rgb(46,22,17) p:rgb(232,160,21) s:rgb(219,124,19) t:rgb(194,132,20) q:rgb(185,103,19)", "supportsLayeredImage": false, "url": "https://is1-ssl.mzstatic.com/image/thumb/WFcAzHblDIVkquiKvhUWqA/{w}x{h}sr.{f}", "width": 4320 } }, "isAppleOriginal": true, "releaseDate": 1572566400000, "secondaryActions": ["AddToUpNext"], "title": "For All Mankind", "type": "Show", "url": "https://tv.apple.com/us/show/for-all-mankind/umc.cmc.6wsi780sz5tdbqcf11k76mkp7" }, { "extendedMetadata": { "images": { "channelSplashWide": { "width": 4320, "height": 1800, "url": "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/7b/e1/21/7be12119-5cf5-8d25-127d-094e0b2d7794/7fbdd574-711b-4387-9511-6f7c4a8d3147.png/{w}x{h}sr.{f}", "joeColor": "b:rgb(28,22,18) p:rgb(239,235,244) s:rgb(168,190,224) t:rgb(197,192,198) q:rgb(140,157,183)" }, "posterArt": { "width": 3840, "height": 2160, "url": "https://is1-ssl.mzstatic.com/image/thumb/R_l1v_QVLik6NRU2FL9yrw/{w}x{h}.{f}", "supportsLayeredImage": true, "joeColor": "b:rgb(154,175,199) p:rgb(9,6,4) s:rgb(23,17,13) t:rgb(38,40,43) q:rgb(49,49,50)" }, "channelSplashTall": { "width": 1680, "height": 3636, "url": "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/94/5f/1d/945f1d65-7665-7a01-aeec-23b5c26683d3/18a76c94-6d70-42d0-ae57-51ef7a2919c7.png/{w}x{h}tc.{f}", "joeColor": "b:rgb(212,210,216) p:rgb(16,11,8) s:rgb(39,38,35) t:rgb(55,51,50) q:rgb(73,72,71)" }, "singleColorContentLogo": { "width": 3147, "height": 1571, "url": "https://is1-ssl.mzstatic.com/image/thumb/BrZIPLScjdIb3x6OW-2nAQ/{w}x{h}.{f}", "joeColor": "b:rgb(255,255,255) p:rgb(12,12,12) s:rgb(25,25,25) t:rgb(61,61,61) q:rgb(71,71,71)" } }, "longNote": "Life rarely follows a formula." }, "genres": [{ "id": "umc.gnr.tv.drama", "name": "Drama", "type": "Genre", "url": "https://tv.apple.com/us/genre/drama/umc.gnr.tv.drama" }], "id": "umc.cmc.40yycssgxelw4zur8m2ilmvyx", "images": { "shelfImage": { "height": 2160, "isP3": false, "joeColor": "b:rgb(154,175,199) p:rgb(9,6,4) s:rgb(23,17,13) t:rgb(38,40,43) q:rgb(49,49,50)", "supportsLayeredImage": true, "url": "https://is1-ssl.mzstatic.com/image/thumb/R_l1v_QVLik6NRU2FL9yrw/{w}x{h}.{f}", "width": 3840 }, "shelfImageBackground": { "height": 2160, "isP3": false, "joeColor": "b:rgb(34,28,24) p:rgb(236,234,243) s:rgb(180,204,230) t:rgb(195,192,199) q:rgb(150,169,189)", "supportsLayeredImage": false, "url": "https://is1-ssl.mzstatic.com/image/thumb/hKEgAYImCcEuKZNOx9l8IA/{w}x{h}.{f}", "width": 3840 }, "transitionImage": { "height": 3240, "isP3": false, "joeColor": "b:rgb(30,21,16) p:rgb(224,226,237) s:rgb(183,206,230) t:rgb(185,185,193) q:rgb(152,169,187)", "supportsLayeredImage": false, "url": "https://is1-ssl.mzstatic.com/image/thumb/PMcGyfR9w1JdYpgfuH_Waw/{w}x{h}sr.{f}", "width": 4320 } }, "isAppleOriginal": true, "releaseDate": 1697155200000, "secondaryActions": ["AddToUpNext"], "title": "Lessons in Chemistry", "type": "Show", "url": "https://tv.apple.com/us/show/lessons-in-chemistry/umc.cmc.40yycssgxelw4zur8m2ilmvyx" }], "metrics": { "data.uts.shelfCategoryId": "edt.cat.unknown.edt.col.626ae340-a5f3-4474-8cc5-8b716ded72e5", "data.uts.shelfCategoryName": "uts.category.unknown.edt.col.626ae340-a5f3-4474-8cc5-8b716ded72e5", "data.uts.responseId": "3daf4959-ef45-44f6-8d6c-42d990f05abd", "data.uts.displayType": "River" }, "url": "https://tv.apple.com/us/collection/edt.col.626ae340-a5f3-4474-8cc5-8b716ded72e5?ctx_dt=river" } }, "utsk": "6e3013c6d6fae3c2::::::235656c069bb0efb", "marcom": { "timestamp_utc": "2024-01-03T13:34:10.652Z", "locale": "en-US", "storefront": "143441", "collection_id": "edt.col.626ae340-a5f3-4474-8cc5-8b716ded72e5", "url": "https://uts-api-web-marketing.itunes.apple.com/uts/v3/shelves/edt.col.626ae340-a5f3-4474-8cc5-8b716ded72e5?caller=web-marketing&ctx_dt=river&v=54&pfm=web&profile=Full&sf=143441&locale=en-US" } }
    </script>




    <div id="tv-plus-gallery" data-analytics-gallery-id="Tv Plus Gallery"
        data-analytics-section-engagement="name:tv-plus-gallery" aria-label="Tv Plus Gallery" role="group"
        class="gallery" data-watch-now="Stream now" data-preview-now="Preview now"
        data-watch-now-aria="Stream now, {title}" data-preview-now-aria="Preview now, {title}"
        data-token="itscg=10000&amp;itsct=atv-apl_hp-stream_now--220622"
        data-watch-now-sports="Watch it live now" data-preview-now-sports="Add to up next"
        data-watch-now-sports-aria="Watch {title} live now"
        data-preview-now-sports-aria="Add {title} to up next" data-play-aria="play Apple TV plus gallery"
        data-pause-aria="pause Apple TV plus gallery" data-dotnav-item-aria="Item {n}"
        data-prev-aria-template="Show previous TV Series, ${title}"
        data-next-aria-template="Show next TV Series, ${title}" data-fnb-genre="Sports"
        data-fnb-title="Friday Night Baseball" data-fnb-supported="true"
        data-fnb-copy="Live MLB games every Friday." data-fnb-cta="Stream now"
        data-fnb-url="https://tv.apple.com/room/edt.item.62327df1-6874-470e-98b2-a5bbeac509a2">
        <h4 class="visuallyhidden">Apple TV+</h4>
        <div class="item-container" style="transform: translate3d(0px, 0px, 0px);">
            <div id="tv-plus-gallery-item-1" data-analytics-gallery-item-id="Tv Plus Gallery item 1"
                data-ac-gallery-item="" class="gallery-item theme-dark current" role="tabpanel"
                aria-labelledby="tv-plus-gallery-item-1-trigger"
                style="--progress: 0; z-index: 1; opacity: 1; transform: translate(0px, 0px);">
                <a href="https://tv.apple.com/us/movie/the-family-plan/umc.cmc.6o6y3wel2lez2tkdu2cv8dzd1?itscg=10000&amp;itsct=atv-apl_hp-stream_now--220622"
                    style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/tPJwMGtsAr_psAVlyf2Rzg/1250x703.jpg)"
                    data-analytics-title="stream now" data-rid-relay="{&quot;289&quot;:&quot;itsct&quot;}"
                    data-analytics-exit-link=""
                    data-analytics-activitymap-region-id="tv-plus-gallery-the family plan">

                    <div class="inner">
                        <div class="info-top">
                            <figure class="atv-plus-icon"></figure>
                            <figure class="logo"
                                style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/J7vM2h0h2cFSUDB5x44EKg/548x260.png)">
                            </figure>
                        </div>
                        <div class="info-bottom">
                            <div class="custom-button play" aria-label="Stream now, The Family Plan">Stream
                                now</div>
                            <p class="typography-shows-genre"><span class="genre">Comedy</span> <span
                                    class="m-dot" aria-hidden="true">·</span> A thrilling road trip comedy.
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <div id="tv-plus-gallery-item-2" data-analytics-gallery-item-id="Tv Plus Gallery item 2"
                data-ac-gallery-item="" class="gallery-item theme-dark" role="tabpanel"
                aria-labelledby="tv-plus-gallery-item-2-trigger" data-original-aria-hidden=""
                aria-hidden="true"
                style="--progress: 1; z-index: 0; opacity: 1; transform: translate(1265px, 0px);">
                <a href="https://tv.apple.com/us/show/monarch-legacy-of-monsters/umc.cmc.62l8x0ixrhyq3yaqa5y8yo7ew?itscg=10000&amp;itsct=atv-apl_hp-stream_now--220622"
                    style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/mZsXfk4apSIl3Q5QZqztiQ/1250x703.jpg)"
                    data-analytics-title="stream now" data-rid-relay="{&quot;289&quot;:&quot;itsct&quot;}"
                    data-analytics-exit-link=""
                    data-analytics-activitymap-region-id="tv-plus-gallery-monarch: legacy of monsters"
                    data-original-tabindex="" tabindex="-1">

                    <div class="inner">
                        <div class="info-top">
                            <figure class="atv-plus-icon"></figure>
                            <figure class="logo"
                                style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/2Pvq9Q1gy7cxOpfXK1_8Ew/548x132.png)">
                            </figure>
                        </div>
                        <div class="info-bottom">
                            <div class="custom-button play"
                                aria-label="Stream now, Monarch: Legacy of Monsters">Stream now</div>
                            <p class="typography-shows-genre"><span class="genre">Adventure</span> <span
                                    class="m-dot" aria-hidden="true">·</span> Some secrets cannot be
                                contained.</p>
                        </div>
                    </div>
                </a>
            </div>
            <div id="tv-plus-gallery-item-3" data-analytics-gallery-item-id="Tv Plus Gallery item 3"
                data-ac-gallery-item="" class="gallery-item theme-dark" role="tabpanel"
                aria-labelledby="tv-plus-gallery-item-3-trigger" data-original-aria-hidden=""
                aria-hidden="true"
                style="--progress: 2; z-index: 0; opacity: 1; transform: translate(2530px, 0px);">
                <a href="https://tv.apple.com/us/movie/apple-music-live-nye/umc.cmc.5p21upcwrwehs6ypw9hmaygdx?itscg=10000&amp;itsct=atv-apl_hp-stream_now--220622"
                    style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/14EMzw_K3xobvKcajf9fdQ/1250x703.jpg)"
                    data-analytics-title="stream now" data-rid-relay="{&quot;289&quot;:&quot;itsct&quot;}"
                    data-analytics-exit-link=""
                    data-analytics-activitymap-region-id="tv-plus-gallery-apple music live: nye"
                    data-original-tabindex="" tabindex="-1">

                    <div class="inner">
                        <div class="info-top">
                            <figure class="atv-plus-icon"></figure>
                            <figure class="logo"
                                style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/fA5lRjCKsH7ETHn89q0Eig/548x232.png)">
                            </figure>
                        </div>
                        <div class="info-bottom">
                            <div class="custom-button play" aria-label="Stream now, Apple Music Live: NYE">
                                Stream now</div>
                            <p class="typography-shows-genre"><span class="genre">Music</span> <span
                                    class="m-dot" aria-hidden="true">·</span> Peggy Gou and Honey Dijon play
                                exclusive DJ sets in New York.</p>
                        </div>
                    </div>
                </a>
            </div>
            <div id="tv-plus-gallery-item-4" data-analytics-gallery-item-id="Tv Plus Gallery item 4"
                data-ac-gallery-item="" class="gallery-item theme-dark" role="tabpanel"
                aria-labelledby="tv-plus-gallery-item-4-trigger" data-original-aria-hidden=""
                aria-hidden="true"
                style="--progress: 3; z-index: 0; opacity: 1; transform: translate(3795px, 0px);">
                <a href="https://tv.apple.com/us/movie/napoleon/umc.cmc.25k80oxl3vo69c8rimk8v81s1?itscg=10000&amp;itsct=atv-apl_hp-stream_now--220622"
                    style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/FVXovQ_qyfe9iwKjx4dRxA/1250x703.jpg)"
                    data-analytics-title="preview now" data-rid-relay="{&quot;289&quot;:&quot;itsct&quot;}"
                    data-analytics-exit-link=""
                    data-analytics-activitymap-region-id="tv-plus-gallery-napoleon"
                    data-original-tabindex="" tabindex="-1">

                    <div class="inner">
                        <div class="info-top">
                            <figure class="atv-plus-icon"></figure>
                            <figure class="logo"
                                style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/m5oxgdVzeqPOTTfDAaSEQw/548x71.png)">
                            </figure>
                        </div>
                        <div class="info-bottom">
                            <div class="custom-button play" aria-label="Preview now, Napoleon">Preview now
                            </div>
                            <p class="typography-shows-genre"><span class="genre">Drama</span> <span
                                    class="m-dot" aria-hidden="true">·</span> In theaters now.</p>
                        </div>
                    </div>
                </a>
            </div>
            <div id="tv-plus-gallery-item-5" data-analytics-gallery-item-id="Tv Plus Gallery item 5"
                data-ac-gallery-item="" class="gallery-item theme-dark" role="tabpanel"
                aria-labelledby="tv-plus-gallery-item-5-trigger" data-original-aria-hidden=""
                aria-hidden="true"
                style="--progress: 4; z-index: 0; opacity: 1; transform: translate(5060px, 0px);">
                <a href="https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o?itscg=10000&amp;itsct=atv-apl_hp-stream_now--220622"
                    style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/-RJ9s2YmRAo0GqNUf3GNlg/1250x703.jpg)"
                    data-analytics-title="stream now" data-rid-relay="{&quot;289&quot;:&quot;itsct&quot;}"
                    data-analytics-exit-link=""
                    data-analytics-activitymap-region-id="tv-plus-gallery-slow horses"
                    data-original-tabindex="" tabindex="-1">

                    <div class="inner">
                        <div class="info-top">
                            <figure class="atv-plus-icon"></figure>
                            <figure class="logo"
                                style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/9K4820tYJgYYE_Q7JwcFgA/548x116.png)">
                            </figure>
                        </div>
                        <div class="info-bottom">
                            <div class="custom-button play" aria-label="Stream now, Slow Horses">Stream now
                            </div>
                            <p class="typography-shows-genre"><span class="genre">Thriller</span> <span
                                    class="m-dot" aria-hidden="true">·</span> It’s spy vs. spy vs. spy.</p>
                        </div>
                    </div>
                </a>
            </div>
            <div id="tv-plus-gallery-item-6" data-analytics-gallery-item-id="Tv Plus Gallery item 6"
                data-ac-gallery-item="" class="gallery-item theme-dark" role="tabpanel"
                aria-labelledby="tv-plus-gallery-item-6-trigger" data-original-aria-hidden=""
                aria-hidden="true"
                style="--progress: 5; z-index: 0; opacity: 1; transform: translate(6325px, 0px);">
                <a href="https://tv.apple.com/us/show/ted-lasso/umc.cmc.vtoh0mn0xn7t3c643xqonfzy?itscg=10000&amp;itsct=atv-apl_hp-stream_now--220622"
                    style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/ageP1PYyLi7UlNiWMva32Q/1250x703.jpg)"
                    data-analytics-title="stream now" data-rid-relay="{&quot;289&quot;:&quot;itsct&quot;}"
                    data-analytics-exit-link=""
                    data-analytics-activitymap-region-id="tv-plus-gallery-ted lasso"
                    data-original-tabindex="" tabindex="-1">

                    <div class="inner">
                        <div class="info-top">
                            <figure class="atv-plus-icon"></figure>
                            <figure class="logo"
                                style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/Cc6MMzxFzD1gVqnd6IslKA/548x82.png)">
                            </figure>
                        </div>
                        <div class="info-bottom">
                            <div class="custom-button play" aria-label="Stream now, Ted Lasso">Stream now
                            </div>
                            <p class="typography-shows-genre"><span class="genre">Comedy</span> <span
                                    class="m-dot" aria-hidden="true">·</span> 21 Emmy® Nominations
                                Including Best Comedy</p>
                        </div>
                    </div>
                </a>
            </div>
            <div id="tv-plus-gallery-item-7" data-analytics-gallery-item-id="Tv Plus Gallery item 7"
                data-ac-gallery-item="" class="gallery-item theme-dark" role="tabpanel"
                aria-labelledby="tv-plus-gallery-item-7-trigger" data-original-aria-hidden=""
                aria-hidden="true"
                style="--progress: 6; z-index: 0; opacity: 1; transform: translate(7590px, 0px);">
                <a href="https://tv.apple.com/us/show/the-morning-show/umc.cmc.25tn3v8ku4b39tr6ccgb8nl6m?itscg=10000&amp;itsct=atv-apl_hp-stream_now--220622"
                    style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/1250x703.jpg)"
                    data-analytics-title="stream now" data-rid-relay="{&quot;289&quot;:&quot;itsct&quot;}"
                    data-analytics-exit-link=""
                    data-analytics-activitymap-region-id="tv-plus-gallery-the morning show"
                    data-original-tabindex="" tabindex="-1">

                    <div class="inner">
                        <div class="info-top">
                            <figure class="atv-plus-icon"></figure>
                            <figure class="logo"
                                style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/qOsAe0YuSE0kbguTATsVLQ/548x165.png)">
                            </figure>
                        </div>
                        <div class="info-bottom">
                            <div class="custom-button play" aria-label="Stream now, The Morning Show">Stream
                                now</div>
                            <p class="typography-shows-genre"><span class="genre">Drama</span> <span
                                    class="m-dot" aria-hidden="true">·</span> Change is on the air.</p>
                        </div>
                    </div>
                </a>
            </div>
            <div id="tv-plus-gallery-item-8" data-analytics-gallery-item-id="Tv Plus Gallery item 8"
                data-ac-gallery-item="" class="gallery-item theme-dark" role="tabpanel"
                aria-labelledby="tv-plus-gallery-item-8-trigger" data-original-aria-hidden=""
                aria-hidden="true"
                style="--progress: 7; z-index: 0; opacity: 1; transform: translate(8855px, 0px);">
                <a href="https://tv.apple.com/us/show/for-all-mankind/umc.cmc.6wsi780sz5tdbqcf11k76mkp7?itscg=10000&amp;itsct=atv-apl_hp-stream_now--220622"
                    style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/q8QlFpnNct0G9kpRmyMyNw/1250x703.jpg)"
                    data-analytics-title="stream now" data-rid-relay="{&quot;289&quot;:&quot;itsct&quot;}"
                    data-analytics-exit-link=""
                    data-analytics-activitymap-region-id="tv-plus-gallery-for all mankind"
                    data-original-tabindex="" tabindex="-1">

                    <div class="inner">
                        <div class="info-top">
                            <figure class="atv-plus-icon"></figure>
                            <figure class="logo"
                                style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/v-xqGz_rdBcQ-OZ4HvFeVw/548x168.png)">
                            </figure>
                        </div>
                        <div class="info-bottom">
                            <div class="custom-button play" aria-label="Stream now, For All Mankind">Stream
                                now</div>
                            <p class="typography-shows-genre"><span class="genre">Drama</span> <span
                                    class="m-dot" aria-hidden="true">·</span> A new gold rush begins.</p>
                        </div>
                    </div>
                </a>
            </div>
            <div id="tv-plus-gallery-item-9" data-analytics-gallery-item-id="Tv Plus Gallery item 9"
                data-ac-gallery-item="" class="gallery-item theme-dark" role="tabpanel"
                aria-labelledby="tv-plus-gallery-item-9-trigger" data-original-aria-hidden=""
                aria-hidden="true"
                style="--progress: 8; z-index: 0; opacity: 1; transform: translate(-1265px, 0px);">
                <a href="https://tv.apple.com/us/show/lessons-in-chemistry/umc.cmc.40yycssgxelw4zur8m2ilmvyx?itscg=10000&amp;itsct=atv-apl_hp-stream_now--220622"
                    style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/R_l1v_QVLik6NRU2FL9yrw/1250x703.jpg)"
                    data-analytics-title="stream now" data-rid-relay="{&quot;289&quot;:&quot;itsct&quot;}"
                    data-analytics-exit-link=""
                    data-analytics-activitymap-region-id="tv-plus-gallery-lessons in chemistry"
                    data-original-tabindex="" tabindex="-1">

                    <div class="inner">
                        <div class="info-top">
                            <figure class="atv-plus-icon"></figure>
                            <figure class="logo"
                                style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/BrZIPLScjdIb3x6OW-2nAQ/548x273.png)">
                            </figure>
                        </div>
                        <div class="info-bottom">
                            <div class="custom-button play" aria-label="Stream now, Lessons in Chemistry">
                                Stream now</div>
                            <p class="typography-shows-genre"><span class="genre">Drama</span> <span
                                    class="m-dot" aria-hidden="true">·</span> Life rarely follows a formula.
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <div data-analytics-gallery-interaction-type="paddlenav" class="paddlenav paddlenav-framed">
            <ul>
                <li class="previous"><button aria-label="Show previous TV Series, Lessons in Chemistry"
                        class="paddlenav-arrow paddlenav-arrow-previous"></button></li>
                <li class="next"><button aria-label="Show next TV Series, Monarch: Legacy of Monsters"
                        class="paddlenav-arrow paddlenav-arrow-next"></button></li>
            </ul>
        </div>

        <div class="tablist-wrapper">
            <div data-analytics-gallery-interaction-type="dotnav" class="dotnav">
                <ul role="tablist" class="dotnav-items">
                    <li role="presentation" class="current">
                        <a href="https://www.apple.com/#tv-plus-gallery-item-1"
                            id="tv-plus-gallery-item-1-trigger" aria-label="item 1 - the family plan"
                            data-ac-gallery-trigger="tv-plus-gallery-item-1" class="dotnav-item current"
                            role="tab" aria-controls="tv-plus-gallery-item-1" tabindex="0"
                            aria-selected="true">
                            <span class="visuallyhidden">Item 1</span>
                        </a>
                    </li>
                    <li role="presentation">
                        <a href="https://www.apple.com/#tv-plus-gallery-item-2"
                            id="tv-plus-gallery-item-2-trigger"
                            aria-label="item 2 - monarch: legacy of monsters"
                            data-ac-gallery-trigger="tv-plus-gallery-item-2" class="dotnav-item" role="tab"
                            aria-controls="tv-plus-gallery-item-2" tabindex="-1" aria-selected="false">
                            <span class="visuallyhidden">Item 2</span>
                        </a>
                    </li>
                    <li role="presentation">
                        <a href="https://www.apple.com/#tv-plus-gallery-item-3"
                            id="tv-plus-gallery-item-3-trigger" aria-label="item 3 - apple music live: nye"
                            data-ac-gallery-trigger="tv-plus-gallery-item-3" class="dotnav-item" role="tab"
                            aria-controls="tv-plus-gallery-item-3" tabindex="-1" aria-selected="false">
                            <span class="visuallyhidden">Item 3</span>
                        </a>
                    </li>
                    <li role="presentation">
                        <a href="https://www.apple.com/#tv-plus-gallery-item-4"
                            id="tv-plus-gallery-item-4-trigger" aria-label="item 4 - napoleon"
                            data-ac-gallery-trigger="tv-plus-gallery-item-4" class="dotnav-item" role="tab"
                            aria-controls="tv-plus-gallery-item-4" tabindex="-1" aria-selected="false">
                            <span class="visuallyhidden">Item 4</span>
                        </a>
                    </li>
                    <li role="presentation">
                        <a href="https://www.apple.com/#tv-plus-gallery-item-5"
                            id="tv-plus-gallery-item-5-trigger" aria-label="item 5 - slow horses"
                            data-ac-gallery-trigger="tv-plus-gallery-item-5" class="dotnav-item" role="tab"
                            aria-controls="tv-plus-gallery-item-5" tabindex="-1" aria-selected="false">
                            <span class="visuallyhidden">Item 5</span>
                        </a>
                    </li>
                    <li role="presentation">
                        <a href="https://www.apple.com/#tv-plus-gallery-item-6"
                            id="tv-plus-gallery-item-6-trigger" aria-label="item 6 - ted lasso"
                            data-ac-gallery-trigger="tv-plus-gallery-item-6" class="dotnav-item" role="tab"
                            aria-controls="tv-plus-gallery-item-6" tabindex="-1" aria-selected="false">
                            <span class="visuallyhidden">Item 6</span>
                        </a>
                    </li>
                    <li role="presentation">
                        <a href="https://www.apple.com/#tv-plus-gallery-item-7"
                            id="tv-plus-gallery-item-7-trigger" aria-label="item 7 - the morning show"
                            data-ac-gallery-trigger="tv-plus-gallery-item-7" class="dotnav-item" role="tab"
                            aria-controls="tv-plus-gallery-item-7" tabindex="-1" aria-selected="false">
                            <span class="visuallyhidden">Item 7</span>
                        </a>
                    </li>
                    <li role="presentation">
                        <a href="https://www.apple.com/#tv-plus-gallery-item-8"
                            id="tv-plus-gallery-item-8-trigger" aria-label="item 8 - for all mankind"
                            data-ac-gallery-trigger="tv-plus-gallery-item-8" class="dotnav-item" role="tab"
                            aria-controls="tv-plus-gallery-item-8" tabindex="-1" aria-selected="false">
                            <span class="visuallyhidden">Item 8</span>
                        </a>
                    </li>
                    <li role="presentation">
                        <a href="https://www.apple.com/#tv-plus-gallery-item-9"
                            id="tv-plus-gallery-item-9-trigger" aria-label="item 9 - lessons in chemistry"
                            data-ac-gallery-trigger="tv-plus-gallery-item-9" class="dotnav-item" role="tab"
                            aria-controls="tv-plus-gallery-item-9" tabindex="-1" aria-selected="false">
                            <span class="visuallyhidden">Item 9</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <button class="play-pause playing show" aria-label="pause Apple TV plus gallery"
            data-analytics-title="pause-gallery" data-analytics-click="prop3:pause-gallery">
            <svg viewBox="0 0 85 85" style="display: none">
                <defs>
                    <g id="pause-icon">
                        <path
                            d="M42.5,84.5c-23.16,0-42-18.84-42-42c0-23.16,18.84-42,42-42c23.16,0,42,18.84,42,42C84.5,65.66,65.66,84.5,42.5,84.5z M42.5,4.5c-20.95,0-38,17.05-38,38s17.05,38,38,38s38-17.05,38-38S63.45,4.5,42.5,4.5z">
                        </path>
                        <path
                            d="M50,28.25c1.1,0,2,0.9,2,2v24c0,1.1-0.9,2-2,2s-2-0.9-2-2v-24C48,29.15,48.9,28.25,50,28.25z">
                        </path>
                        <path
                            d="M35,28.25c1.1,0,2,0.9,2,2v24c0,1.1-0.9,2-2,2s-2-0.9-2-2v-24C33,29.15,33.9,28.25,35,28.25z">
                        </path>
                    </g>
                    <g id="play-icon">
                        <path
                            d="M42.5,84.5c-23.16,0-42-18.84-42-42c0-23.16,18.84-42,42-42c23.16,0,42,18.84,42,42C84.5,65.66,65.66,84.5,42.5,84.5z M42.5,4.5c-20.95,0-38,17.05-38,38s17.05,38,38,38s38-17.05,38-38S63.45,4.5,42.5,4.5z">
                        </path>
                        <path
                            d="M55.73,41.55c0.3,0.45,0.3,1.03,0,1.48c-0.11,0.23-0.29,0.41-0.52,0.52L35.27,56.1c-0.23,0.12-0.48,0.17-0.74,0.15 c-0.8-0.03-1.45-0.68-1.48-1.48v-25c-0.01-0.26,0.07-0.52,0.22-0.74c0.11-0.23,0.29-0.41,0.52-0.52c0.22-0.15,0.48-0.23,0.74-0.22 c0.25,0.01,0.5,0.06,0.74,0.15L55.21,41c0.21,0.16,0.39,0.36,0.52,0.59">
                        </path>
                    </g>
                </defs>
            </svg>
        </button>

    </div>

</div>
</section>`;
const slides = [
    { img: 'https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/1250x703.jpg', title: 'Slide 1' },
    { img: 'https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/1250x703.jpg', title: 'Slide 2' },
    // Add more slides as necessary
];
const Carousel = props => {
    const html_ref = useRef(null);
    let [is_script_loaded, setIsScriptLoaded] = useState(false);
    const [is_carousel_loaded, setIsCarouselLoaded] = useState(false);
    useEffect(() => {
        if (html_ref.current) {
          // Attach a shadow root to the div
    
          if (!html_ref.current.shadowRoot) {
            const shadowRoot = html_ref.current.attachShadow({ mode: "open" });
    
            // Create a container for the fetched HTML
            const htmlContainer = document.createElement("div");
            htmlContainer.innerHTML = content; // assuming the HTML is in response.data
            shadowRoot.appendChild(htmlContainer);
            // setIsHtmlInit(true);
          }
        }
      }, []);
    useEffect(() => {
        // Function to load a script dynamically
        if(!is_script_loaded) {
          is_script_loaded = true;
          const loadScript = (src, callback = null) => {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = src;
            script.onload = () => callback();
            document.head.appendChild(script);
          };
      
          // Load the CKEditor script
          loadScript('/lib/carousel.js', () => {
              setIsCarouselLoaded(true);
          });
        }
      }, []);
    return (
        <div dangerouslySetInnerHTML={{ __html: content}}>

        </div>
        
    )
}

export default Carousel;