// ==UserScript==
// @name          Manga OnlineViewer
// @author        Tago
// @updateURL     https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.meta.js
// @downloadURL   https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @description   Shows all pages at once in online view for these sites: Alandal, Asura Scans, Batoto, BilibiliComics, ComiCastle, Comick, Dynasty-Scans, INKR, InManga, KLManga, Leitor, LHTranslation, Local Files, LynxScans, MangaBuddy, MangaDemon, MangaDex, MangaFox, MangaHere, Mangago, MangaHosted, MangaHub, MangasIn, MangaKakalot, MangaNelo, MangaNato, MangaOni, MangaPark, Mangareader, MangaSee, Manga4life, MangaTigre, MangaToons, MangaTown, ManhuaScan, ManhwaWeb, MangaGeko.com, MangaGeko.cc, NaniScans, NineManga, OlympusScans, PandaManga, RawDevart, ReadComicsOnline, ReadManga Today, ReaperScans, SenManga(Raw), KLManga, TenManga, TuMangaOnline, TuManhwas, UnionMangas, WebNovel, WebToons, Manga33, YugenMangas, ZeroScans, MangaStream WordPress Plugin, Flame Comics, Realm Oasis, Voids-Scans, Luminous Scans, Shimada Scans, Night Scans, Manhwa-Freak, OzulScansEn, CypherScans, MangaGalaxy, LuaScans, Drake Scans, Rizzfables, FoOlSlide, Kireicake, Madara WordPress Plugin, MangaHaus, Isekai Scan, Comic Kiba, Zinmanga, mangatx, Toonily, Mngazuki, JaiminisBox, DisasterScans, ManhuaPlus, TopManhua, NovelMic, Reset-Scans, LeviatanScans, Dragon Tea, SetsuScans, ToonGod
// @version       2024.10.26
// @license       MIT
// @icon          https://cdn-icons-png.flaticon.com/32/2281/2281832.png
// @run-at        document-end
// @grant         unsafeWindow
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_listValues
// @grant         GM_deleteValue
// @grant         GM_xmlhttpRequest
// @noframes      on
// @connect       *
// @require       https://cdnjs.cloudflare.com/ajax/libs/tinycolor/1.6.0/tinycolor.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.8/sweetalert2.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js
// @require       https://cdn.jsdelivr.net/npm/hotkeys-js@3.13.7/dist/hotkeys.min.js
// @require       https://cdn.jsdelivr.net/npm/range-slider-input@2.4.4/dist/rangeslider.nostyle.umd.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/UAParser.js/1.0.37/ua-parser.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/blob-util/2.0.2/blob-util.min.js
// @include       /https?:\/\/alandal.com\/chapter\/.+\/\d+/
// @include       /https?:\/\/(www.)?(asuracomic).(net)\/.+/
// @include       /https?:\/\/(www\.)?bato.to\/(chapter|title).*/
// @include       /https?:\/\/(www\.)?(bilibilicomics).net\/episode\/.+/
// @include       /https?:\/\/comic\.nizamkomputer.com\/read\/.+\/\d+.*/
// @include       /https?:\/\/(www\.)?comick.io\/.+/
// @include       /https?:\/\/(www\.)?dynasty-scans.com\/chapters\/.+/
// @include       /https?:\/\/(comics\.)?inkr.com\/title\/.+\/chapter\/.+/
// @include       /https?:\/\/(www\.)?inmanga.com\/ver\/manga\/.+\/.+/
// @include       /https?:\/\/(www\.)?klmanga.com\/.+chapter.+/
// @include       /https?:\/\/(www\.)?leitor.net\/manga\/.+\/.+\/.+/
// @include       /https?:\/\/(www\.)?lhtranslation.net\/read.+/
// @include       /(file:\/\/\/.+(index)?.html)/
// @include       /https?:\/\/(www\.)?lynxscans.com\/comics?\/.+/
// @include       /https?:\/\/(www\.)?mangabuddy.com\/.+\/chapter.+/
// @include       /https?:\/\/(www\.)?demonicscans\.org\/title\/.+\/chapter\/.+/
// @include       /https?:\/\/(www\.)?mangadex.org/
// @include       /https?:\/\/(www\.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//
// @include       /https?:\/\/(www\.)?mangago.me\/.*\/.*\/.*/
// @include       /https?:\/\/(www\.)?mangahosted.com\/manga\/.+\/.+/
// @include       /https?:\/\/(www\.)?(mangahub).io\/chapter\/.+\/.+/
// @include       /https?:\/\/(www\.)?mangas.in\/manga\/.+\/.+\/\d+/
// @include       /https?:\/\/(www\.)?(read|chap)?(manganelo|mangakakalot|manganato).(com|to).*\/chapter.+/
// @include       /https?:\/\/(www\.)?manga-oni.com\/lector\/.+\/\d+\/cascada/
// @include       /https?:\/\/(www\.)?mangapark.(com|me|org|net)\/title\/.+\/.+/
// @include       /https?:\/\/(www\.)?mangareader.to\/read\/.+\/.+\/.+/
// @include       /https?:\/\/(www\.)?(mangasee123|manga4life).com\/read-online\/.+/
// @include       /https?:\/\/(www\.)?mangatigre.net\/.+\/.+\/.+/
// @include       /https?:\/\/.*mangatoon.mobi\/.+\/watch\/.+/
// @include       /https?:\/\/(www\.|m\.)?mangatown.com\/manga\/.+\/.+/
// @include       /https?:\/\/(www\.)?manhuascan.com\/manga\/.+\/chapter.+/
// @include       /https?:\/\/(www\.)?manhwaweb.com\/leer\/.+/
// @include       /https?:\/\/(www\.)?mgeko.(com|cc)?\/reader\/.*/
// @include       /https?:\/\/(www\.)?(naniscans).com\/chapters\/.+\/read/
// @include       /https?:\/\/(www\.)?ninemanga.com\/chapter\/.+\/.+\.html/
// @include       /https?:\/\/(www\.)?olympusscans.com\/capitulo\/.+\/.+/
// @include       /https?:\/\/(www\.)?pandamanga.xyz\/.+\/.+\/.+/
// @include       /https?:\/\/(www\.)?rawdevart.com\/comic\/.+\/.+\//
// @include       /https?:\/\/(www\.)?readcomicsonline.ru\/comic\/.*\/\d*/
// @include       /https?:\/\/(www\.)?readm.today\/.+\/\d+/
// @include       /https?:\/\/(www\.)?reaperscans\.com\/series\/.+\/chapter.+/
// @include       /https?:\/\/raw\.senmanga.com\/.+\/.+\/?/
// @include       /https?:\/\/(www\.)?tapas.io\/episode\/.+/
// @include       /https?:\/\/(www\.)?(tenmanga|gardenmanage).com\/(chapter|statuses)\/.+/
// @include       /https?:\/\/(www\.)?(.+).com\/(viewer|news)\/.+\/(paginated|cascade)/
// @include       /https?:\/\/(www\.)?tumanhwas.com\/news\/.+/
// @include       /https?:\/\/(www\.)?unionleitor.top\/leitor\/.+\/.+/
// @include       /https?:\/\/(www\.)?webnovel.com\/comic\/.+/
// @include       /https?:\/\/(www\.)?webtoons.com\/.+viewer.+/
// @include       /https?:\/\/(www\.)?(manga33).com\/manga\/.+/
// @include       /https?:\/\/(www\.)?(yugenmangas).(com|net|lat)\/series\/.+/
// @include       /https?:\/\/(www\.)?zscans.com\/comics\/.+/
// @include       /https?:\/\/[^/]*(scans|comic|realmoasis|hivetoon|rizzfables)[^/]*\/.+/
// @include       /^(?!.*jaiminisbox).*\/read\/.+/
// @include       /https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon)\/.+\/.+/
// @exclude       /https?:\/\/(www\.)?tsumino.com\/.+/
// @exclude       /https?:\/\/(www\.)?pururin.io\/.+/
// ==/UserScript==