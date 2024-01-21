/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: nld-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"div[class*=\\\"admarktTitle\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"h4\",\"tasks\":[[\"has-text\",\"Partners\"],[\"upward\",\"section\"]]}"],["{\"selector\":\"[id^=\\\"text-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"a[href]:has([width=\\\"300\\\"][height=\\\"250\\\"])\"}]]}"],["{\"selector\":\"a[href^=\\\"https://vnz.be\\\"]\",\"tasks\":[[\"upward\",\"div\"]]}"],["{\"selector\":\"div[class]:has(> .adsbygoogle)\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"a[href=\\\"/adverteren/\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".bannergroup\",\"tasks\":[[\"upward\",\".card\"]]}"],["{\"selector\":\".pub-imu\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\".pub-text\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"[id^=\\\"CBAWIDGET\\\"]\",\"tasks\":[[\"has-text\",\"partners\"],[\"upward\",1]]}"],["{\"selector\":\"div[style*=\\\"width:970px\\\"]\",\"tasks\":[[\"has-text\",\"Reclame\"]]}","{\"selector\":\"div[style^=\\\"width:336px;height:290px\\\"]\",\"tasks\":[[\"has-text\",\"Reclame\"]]}"],["{\"selector\":\".c-ad-space\",\"tasks\":[[\"upward\",\".col-item\"]]}"],["{\"selector\":\"div.gameinfo\",\"tasks\":[[\"has-text\",\"/sponsored links/i\"]]}"],["{\"selector\":\".elementor-widget-container > a:not([href*=\\\"https://motorrijder.be\\\"]) > img\",\"tasks\":[[\"upward\",\".elementor-widget-image\"]]}"],["{\"selector\":\".tekstboldwit td\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}","{\"selector\":\".tekstboldwit\",\"tasks\":[[\"has-text\",\"ADVERT\"]]}"],["{\"selector\":\".ad--cba[data-ad=\\\"cba\\\"]\",\"tasks\":[[\"upward\",\".widget\"],[\"has-text\",\"partners\"]]}"],["{\"selector\":\".adv-link\",\"tasks\":[[\"upward\",\".sidebar\"]]}"],["{\"selector\":\".palnw-widget\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\"[id^=\\\"media_image\\\"]\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}"],["{\"selector\":\"[id^=\\\"text-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"ADVERTEERDERS\"]]}]]}"],["{\"selector\":\"[id^=\\\"text-\\\"]\",\"tasks\":[[\"has-text\",\"sponsors\"]]}"],["{\"selector\":\".card-articles\",\"tasks\":[[\"has-text\",\"/gesponsord/i\"]]}"],["{\"selector\":\".wpb_wrapper > div[id^=\\\"techp\\\"]\",\"tasks\":[[\"upward\",\".g-cols.wpb_row\"]]}","{\"selector\":\".wpb_wrapper:has(> div[class^=\\\"g\\\"])\",\"tasks\":[[\"upward\",\"section[class$=\\\"wpb_row height_small\\\"]\"],[\"spath\",\":not(:nth-of-type(1))\"]]}"],["{\"selector\":\"[class*=\\\"rowcontainer\\\"]:has(div[class*=\\\"ad\\\"])\",\"tasks\":[[\"has-text\",\"/Gesponsorde inhoud/i\"]]}"],["{\"selector\":\".top-banner-container\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".widget-container\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"text-\\\"]:has(script[src*=\\\"/ad\\\"])\"}]]}"],["{\"selector\":\"section > span\",\"tasks\":[[\"has-text\",\"advertentie\"]]}","{\"selector\":\"section [data-adslot]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"[id^=\\\"rossel-leaderboard\\\"]\",\"tasks\":[[\"upward\",\".tdc-row\"]]}"],["{\"selector\":\".elementor-widget-heading\",\"tasks\":[[\"has-text\",\"/Partners|Advert/\"],[\"spath\",\" + section\"]]}","{\"selector\":\".elementor-widget-heading\",\"tasks\":[[\"has-text\",\"/Partners|Advert/\"]]}"],["{\"selector\":\"[id^=\\\"block\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"h1\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}]]}"],["{\"selector\":\"a[href*=\\\"banner\\\"] > img\",\"tasks\":[[\"upward\",\".elementor-widget-image\"]]}","{\"selector\":\"iframe[src*=\\\"Bitcoin_Kopen\\\"]\",\"tasks\":[[\"upward\",\".elementor-widget[data-element_type=\\\"widget\\\"]\"]]}"],["{\"selector\":\".bookingaff\",\"tasks\":[[\"upward\",\".card\"]]}"],["{\"selector\":\"[id^=\\\"div-gpt-ad\\\"]\",\"tasks\":[[\"upward\",\".elementor-column\"],[\"spath\",\":not(:has(article))\"]]}"],["{\"selector\":\".hide-for-small-only\",\"tasks\":[[\"has-text\",\"Sponsors\"]]}"],["{\"selector\":\"[id*=\\\"rectangle-halfpage\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".c-comparison-list__usp-label\",\"tasks\":[[\"has-text\",\"Adv\"],[\"upward\",\".c-comparison-list__item\"]]}"],["{\"selector\":\"div.ai-viewport-1\",\"tasks\":[[\"upward\",\"div[id^=\\\"ai_widget\\\"]\"]]}"],["{\"selector\":\".elementor-section\",\"tasks\":[[\"has-text\",\"partners\"]]}"],["{\"selector\":\".widgetbar > div.row > *\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\".sc-tbf0fc-2\",\"tasks\":[[\"has-text\",\"/Advert/i\"],[\"upward\",\"div[class]\"]]}"],["{\"selector\":\"[class^=\\\"zijbalk\\\"] > table > tbody\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}"],["{\"selector\":\"#posts .thead\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\"#topstory > div\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}"],["{\"selector\":\".adsbygoogle\",\"tasks\":[[\"upward\",\"[id^=\\\"custom_html\\\"]\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\",\"],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"/[a-z]|[0-9]/i\"]]}]]}"],["{\"selector\":\"div[class*=\\\"section-sidebar\\\"] figure\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}"],["{\"selector\":\".ezoic-adpicker-ad\",\"tasks\":[[\"upward\",\".section\"]]}","{\"selector\":\".ezoic-adpicker-ad\",\"tasks\":[[\"upward\",\"section[id^=\\\"custom_html\\\"]\"]]}"],["{\"selector\":\"[id^=\\\"div-gpt-rectangle\\\"]\",\"tasks\":[[\"upward\",\".banner-rectangle\"]]}"],["{\"selector\":\".gdlr-sidebar\",\"tasks\":[[\"has-text\",\"sponsoren\"]]}"],["{\"selector\":\".banner\",\"tasks\":[[\"upward\",\".widget\"]]}"],["{\"selector\":\".slider.container\",\"tasks\":[[\"has\",{\"selector\":\".twelvecol\",\"tasks\":[[\"has-text\",\"partners\"]]}]]}"],["{\"selector\":\".category\",\"tasks\":[[\"has-text\",\"Advert\"],[\"upward\",\"article.overview-item\"]]}","{\"selector\":\".sidebar-item > a.sidebar-item__content\",\"tasks\":[[\"has-text\",\"adv:\"]]}","{\"selector\":\"article.overview-item\",\"tasks\":[[\"has-text\",\"Sponsored\"]]}","{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"Inject=!\"]]}"],["{\"selector\":\".hidden-xs.az-adverts h2\",\"tasks\":[[\"has-text\",\"/Advert/i\"]]}"],["{\"selector\":\"div[id^=\\\"ai_widget\\\"]\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}"],["{\"selector\":\".b > .profilethumb\",\"tasks\":[[\"upward\",\".tab\"]]}","{\"selector\":\"img + [onclick=\\\"Klik('Footer_Advertentie');\\\"]\",\"tasks\":[[\"upward\",\".tab\"]]}","{\"selector\":\"img + [onclick=\\\"Klik('Footer_Contaxt');\\\"]\",\"tasks\":[[\"upward\",\".tab\"]]}"],["{\"selector\":\"div\",\"tasks\":[[\"matches-css-after\",{\"name\":\"content\",\"pseudo\":\"after\",\"value\":\"^\\\"Advertentie\\\"$\"}]]}","{\"selector\":\"div[class^=\\\"rectangle\\\"]\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}"],["{\"selector\":\"h4\",\"tasks\":[[\"has-text\",\"Advert\"],[\"upward\",\".widget_text\"]]}"],["{\"selector\":\"#bottom > h4\",\"tasks\":[[\"has-text\",\"Ads\"]]}"],["{\"selector\":\"[id^=\\\"div-gpt-ad-Homepage\\\"]\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\"[id^=\\\"div-gpt-ad-JourneyAdvice\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"[id^=\\\"loaBlock\\\"]\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}"],["{\"selector\":\"div[class*=\\\"slideshow-wrapper\\\"]\",\"tasks\":[[\"has-text\",\"/vriend|partners|hoofdsponsor/i\"]]}"],["{\"selector\":\"[id^=\\\"text-\\\"]\",\"tasks\":[[\"has-text\",\"adv\"]]}"],["{\"selector\":\"[id^=\\\"text\\\"][class$=\\\"sidebar-widget\\\"]\",\"tasks\":[[\"has-text\",\"/casino/i\"],[\"spath\",\":not(:has(div[class=\\\"widget-title\\\"]))\"]]}"],["{\"selector\":\".adv-link:not([href*=\\\"alblasserdamsnieuws.nl\\\"])\",\"tasks\":[[\"upward\",\"div[id^=\\\"albl\\\"]\"]]}","{\"selector\":\".sidebarbox > .widgettitle\",\"tasks\":[[\"has-text\",\"Banner\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"advertentie\"]]}"],["{\"selector\":\".advertisement_block\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".darksection\",\"tasks\":[[\"has-text\",\"/Door onze partners/i\"],[\"spath\",\":has(.postbox.owl-carousel)\"]]}","{\"selector\":\".promocentered\",\"tasks\":[[\"upward\",\"section\"]]}"],["{\"selector\":\"[href^=\\\"/banner-click.html\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div[data-name=\\\"dynamic-content-injected\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".theiaStickySidebar > .widget\",\"tasks\":[[\"has-text\",\"/Advertentie\\\\b/\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"/Partners/i\"]]}]]}"],["{\"selector\":\"div[id]\",\"tasks\":[[\"upward\",\".component__plugin\"]]}"],["{\"selector\":\".component__pubble-banner:has([advobject])\",\"tasks\":[[\"upward\",\".bg-gray-100\"]]}"],["{\"selector\":\".content-start > .w-full\",\"tasks\":[[\"has-text\",\"Externe\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"Links\"]]}"],["{\"selector\":\".tile-category\",\"tasks\":[[\"has-text\",\"/advert/i\"],[\"upward\",\".aw-tile\"]]}"],["{\"selector\":\"[id^=\\\"div-gpt-ad\\\"]\",\"tasks\":[[\"upward\",\".component__plugin\"]]}","{\"selector\":\"div.text-center[advobject]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".Textads\",\"tasks\":[[\"upward\",\".ContentRightBlock\"]]}"],["{\"selector\":\".block\",\"tasks\":[[\"has-text\",\"Advertenties\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"/Partners/i\"]]}]]}"],["{\"selector\":\".elementor-widget-image:has(img[data-lazy-srcset*=\\\"banner\\\"])\",\"tasks\":[[\"upward\",\"section\"]]}"],["{\"selector\":\"div[id^=\\\"ster-ad-bnnvara-\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"Sponsors\"]]}"],["{\"selector\":\".wpb_wrapper > [data-td-block-uid^=\\\"tdi_\\\"]\",\"tasks\":[[\"has-text\",\"Reclame\"],[\"spath\",\" + div:has(.owl-item)\"]]}","{\"selector\":\".wpb_wrapper > [data-td-block-uid^=\\\"tdi_\\\"]\",\"tasks\":[[\"has-text\",\"Reclame\"]]}"],["{\"selector\":\"a[href] > img[src*=\\\"wp.com\\\"]\",\"tasks\":[[\"upward\",\".wp-block-image\"],[\"spath\",\":not(:has(a[href*=\\\"backme.org\\\"]))\"]]}","{\"selector\":\"p.has-small-font-size\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}"],["{\"selector\":\"[id^=\\\"amzn-assoc-ad\\\"]\",\"tasks\":[[\"upward\",\"[id^=\\\"block\\\"]\"]]}"],["{\"selector\":\"iframe[src^=\\\"https://bitvavo.com/assets/static/widget/trade.html\\\"]\",\"tasks\":[[\"upward\",\".td_block_wrap\"]]}"],["{\"selector\":\"a[href^=\\\"https://cvandaag.nl/api/advertise-deliver/click/\\\"]\",\"tasks\":[[\"upward\",\"app-article-presentation\"]]}","{\"selector\":\"div.sponsored\",\"tasks\":[[\"has-text\",\"Gerelateerd\"]]}"],["{\"selector\":\"div[id*=\\\"-ros-\\\"]\",\"tasks\":[[\"upward\",\".raw-html-component\"]]}","{\"selector\":\"div[id*=\\\"_ROS_\\\"]\",\"tasks\":[[\"upward\",\".raw-html-component\"]]}"],["{\"selector\":\"aside[class^=\\\"td_block\\\"]\",\"tasks\":[[\"has-text\",\"/partners/i\"]]}"],["{\"selector\":\".elementor-widget-container\",\"tasks\":[[\"has-text\",\"/powered by/i\"]]}"],["{\"selector\":\".nxs-default-p > p\",\"tasks\":[[\"has-text\",\"advert\"]]}"],["{\"selector\":\".component__pubble-banner:has([advobject])\",\"tasks\":[[\"upward\",\".builder__row:not(.grid)\"]]}"],["{\"selector\":\"#text-2\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}"],["{\"selector\":\".elementor-element > .elementor-element-populated:has(.banner-container)\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"/podcast/i\"]]}]]}"],["{\"selector\":\".wrapper\",\"tasks\":[[\"has-text\",\"Youvia\"]]}"],["{\"selector\":\"aside h2\",\"tasks\":[[\"has-text\",\"DenD Promoties\"],[\"spath\",\" + [class]\"]]}","{\"selector\":\"aside h2\",\"tasks\":[[\"has-text\",\"DenD Promoties\"]]}","{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"DenD Partners\"],[\"upward\",\"section\"]]}"],["{\"selector\":\"[class*=\\\"elementor-element-\\\"]\",\"tasks\":[[\"has-text\",\"/onze sponsors/i\"]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"advert\"],[\"upward\",\"div\"]]}"],["{\"selector\":\"[id*=\\\"leaderboardwallpaper-\\\"]\",\"tasks\":[[\"upward\",3]]}","{\"selector\":\"[id^=\\\"ad_\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"a[href][target][onclick*=\\\"trackBannerClick\\\"]:not(a[href*=\\\"dutchitchannel.nl\\\"]) > img\",\"tasks\":[[\"upward\",\"a\"]]}"],["{\"selector\":\"td[background]\",\"tasks\":[[\"has-text\",\"Advert\"],[\"upward\",\"tbody\"]]}"],["{\"selector\":\"footer > section:has(.logo_showcase)\",\"tasks\":[[\"has-text\",\"partners\"]]}"],["{\"selector\":\"[class^=\\\"av_textblock\\\"]\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}","{\"selector\":\"aside section[class$=\\\"widget_text\\\"]\",\"tasks\":[[\"has-text\",\"wordt mede mogelijk gemaakt door\"]]}","{\"selector\":\"section[class^=\\\"avia_codeblock\\\"]\",\"tasks\":[[\"has-text\",\"wordt mede mogelijk gemaakt door\"]]}"],["{\"selector\":\"section\",\"tasks\":[[\"has\",{\"selector\":\".masonry-item:not(:has(a[href*=\\\"edelmetaal-info.nl\\\"]))\"}]]}"],["{\"selector\":\"section[class^=\\\"container nesteditem\\\"]\",\"tasks\":[[\"has-text\",\"/deals/i\"]]}"],["{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\"div[class$=\\\"left\\\"]\",\"tasks\":[[\"has-text\",\"/gokkasten|online casino|casino|sportwedden/i\"],[\"spath\",\":not(:has(a[href^=\\\"https://feijenoordnieuws.nl/\\\"]))\"]]}]]}"],["{\"selector\":\"div.profiel\",\"tasks\":[[\"has-text\",\"Powered by\"]]}"],["{\"selector\":\".spotlight\",\"tasks\":[[\"has-text\",\"Partners\"]]}"],["{\"selector\":\".adunitContainer\",\"tasks\":[[\"upward\",\".items-center\"]]}"],["{\"selector\":\".sidebar-content > div\",\"tasks\":[[\"has-text\",\"Kansino\"],[\"spath\",\":has(+ .afctr-wrapper)\"]]}"],["{\"selector\":\".Article__inner > .Article__title\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\"[href^=\\\"/nieuws/advert\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"aside.widget .swiper-slide img[title=\\\"Advertentie\\\"]\",\"tasks\":[[\"upward\",\".swiper-wrapper\"]]}","{\"selector\":\"aside.widget\",\"tasks\":[[\"has\",{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"Vrienden\"]]}]]}"],["{\"selector\":\".bannergroup\",\"tasks\":[[\"upward\",\".module\"]]}"],["{\"selector\":\"[id*=\\\"ros-300x600\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"[class^=\\\"advertisement\\\"]\",\"tasks\":[[\"upward\",\"li.card\"]]}"],["{\"selector\":\".widget-heading\",\"tasks\":[[\"has-text\",\"Advert\"],[\"spath\",\" + .textwidget\"]]}","{\"selector\":\".widget-heading\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\"#navleft > center\",\"tasks\":[[\"has-text\",\"advert\"]]}","{\"selector\":\"div#block-blue\",\"tasks\":[[\"has-text\",\"advert\"]]}"],["{\"selector\":\".rounded-md:has(p[class^=\\\"call-to-action\\\"])\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"/Akkoord en door naar/i\"]]}]]}"],["{\"selector\":\".network\",\"tasks\":[[\"has-text\",\"Gesponsorde links\"]]}","{\"selector\":\"section\",\"tasks\":[[\"has-text\",\"advertentie\"]]}"],["{\"selector\":\".tagwrapper\",\"tasks\":[[\"upward\",\".row__item\"]]}"],["{\"selector\":\".adswiper\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"#mvp-content-main .adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"links\"]]}"],["{\"selector\":\".pane_results > div\",\"tasks\":[[\"has-text\",\"Ads\"]]}"],["{\"selector\":\"[id*=\\\"dfptaghomeadvertorial\\\"]\",\"tasks\":[[\"upward\",\".views-rows > .row > .col\"]]}"],["{\"selector\":\"[id^=\\\"tdi_\\\"].tdc-row\",\"tasks\":[[\"has-text\",\"Casino\"]]}"],["{\"selector\":\".details-rectangle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"img[width=\\\"300\\\"][height=\\\"250\\\"]\",\"tasks\":[[\"upward\",\"aside.widget\"]]}"],["{\"selector\":\"div[id^=\\\"content\\\"]:not(:has(a[href^=\\\"index.php?\\\"]))\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"/\\\\b/i\"]]}]]}"],["{\"selector\":\".elementor-widget-container > a:not([href*=\\\"https://kicxstart.nl/\\\"]) > img\",\"tasks\":[[\"upward\",\".elementor-widget-image\"]]}"],["{\"selector\":\".node-advertorial\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"a[href*=\\\"/adverteren\\\"]\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\"div[class*=\\\"Sidebar\\\"] > [class]\",\"tasks\":[[\"has-text\",\"/Meesteressen/i\"]]}"],["{\"selector\":\"[id^=\\\"text-\\\"]\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\".panel-grid\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}"],["{\"selector\":\".cb-sidebar-widget\",\"tasks\":[[\"has-text\",\"Kijk ook eens op:\"]]}"],["{\"selector\":\".content > table\",\"tasks\":[[\"has\",{\"selector\":\":scope > tbody\",\"tasks\":[[\"has-text\",\"advert\"]]}]]}"],["{\"selector\":\"[class^=\\\"article-\\\"][class$=\\\"_article\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".category-label_label\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}"],["{\"selector\":\".widgettitle\",\"tasks\":[[\"has-text\",\"/advert|banner|reclame/i\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\".content > div[id^=\\\"luchtvaartnieuws.nl_web_\\\"]\",\"tasks\":[[\"upward\",\"[id^=\\\"block-block-\\\"]\"]]}","{\"selector\":\"[id^=\\\"block-block-\\\"]\",\"tasks\":[[\"has-text\",\"/voordelige/i\"]]}","{\"selector\":\"[id^=\\\"luchtvaartnieuws.nl_mob_mobilerectangle\\\"]\",\"tasks\":[[\"upward\",\"div[style]\"]]}"],["{\"selector\":\"[class^=\\\"r89-desktop-billboard-\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"[id^=\\\"custom_html\\\"]\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}"],["{\"selector\":\"a[href^=\\\"https://www.marktnet.nl/bs/clickOut\\\"]\",\"tasks\":[[\"upward\",\"[class^=\\\"tip\\\"]\"]]}"],["{\"selector\":\".sponsoren\",\"action\":[\"style\",\"visibility: collapse !important; position: fixed;\"],\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"a[target=\\\"_blank\\\"]:not([href*=\\\"messianieuws.nl\\\"]) > img[data-src*=\\\"messianieuws.nl/wp-content/uploads\\\"]\",\"tasks\":[[\"upward\",\"div[id^=\\\"block-\\\"]\"]]}","{\"selector\":\"aside > .sb-widget\",\"tasks\":[[\"has-text\",\"/Israël Weekbrief|Introductiecursus/\"]]}"],["{\"selector\":\".bannergroup\",\"tasks\":[[\"upward\",\"div[class^=\\\"t3-module\\\"]\"]]}"],["{\"selector\":\".sponsors-billboard\",\"tasks\":[[\"upward\",\".fullWidthWhite\"]]}"],["{\"selector\":\"div[style] [id*=\\\"728x90\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".rcol-titel\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\"[src^=\\\"https://partner.bol.com\\\"]\",\"tasks\":[[\"upward\",\"table.tablepress\"]]}"],["{\"selector\":\".latestnewsbx\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\".elementor-widget-container\",\"tasks\":[[\"has-text\",\"Advertentie\"],[\"upward\",2]]}","{\"selector\":\"a[href=\\\"/partner/profielpartner/\\\"]\",\"tasks\":[[\"upward\",\".elementor-widget-wrap\"]]}"],["{\"selector\":\".line\",\"tasks\":[[\"has-text\",\"Advertentie\"],[\"upward\",\".sidebar\"]]}"],["{\"selector\":\"a[href*=\\\"nieuwsmotor.nl/url/\\\"]\",\"tasks\":[[\"upward\",\".uk-grid\"]]}"],["{\"selector\":\".td_module_wrap\",\"tasks\":[[\"has\",{\"selector\":\".td-post-category\",\"tasks\":[[\"has-text\",\"Gesponsord\"]]}]]}"],["{\"selector\":\".js-banner-slider\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\".text-left\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\"article > div.entry-content > .mag-box-container\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Interessant\"]]}]]}"],["{\"selector\":\".sidebar-block\",\"tasks\":[[\"has-text\",\"/Advert/i\"]]}"],["{\"selector\":\".home .koptitel\",\"tasks\":[[\"has-text\",\"Advert\"],[\"spath\",\" ~ div\"]]}","{\"selector\":\".home .koptitel\",\"tasks\":[[\"has-text\",\"Advert\"],[\"spath\",\" ~ hr\"]]}","{\"selector\":\".home .koptitel\",\"tasks\":[[\"has-text\",\"Advert\"]]}","{\"selector\":\".widgettitle\",\"tasks\":[[\"has-text\",\"Advert\"]]}","{\"selector\":\".widgettitle\",\"tasks\":[[\"has-text\",\"partners\"]]}"],["{\"selector\":\"ul > li:has(script[src*=\\\"ster\\\"])\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}"],["{\"selector\":\"[id^=\\\"adid\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".articlelist.block\",\"tasks\":[[\"has-text\",\"Folder \\\\(Adverteerders\\\\)\"],[\"spath\",\" .list\"]]}"],["{\"selector\":\"aside.widget_block[id^=\\\"block\\\"]:not(:has([href*=\\\"omroepalmere.nl\\\"]))\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"/Informatie/i\"]]}]]}"],["{\"selector\":\"footer .footer-list\",\"tasks\":[[\"has-text\",\"/Reclame/i\"],[\"spath\",\" > li:not(:nth-of-type(2)) > a.external\"]]}"],["{\"selector\":\".wdslider\",\"tasks\":[[\"has-text\",\"/Sponsor|partners/i\"]]}"],["{\"selector\":\"[id^=\\\"div-gpt-ad\\\"]\",\"tasks\":[[\"upward\",\".taggrid__item\"]]}"],["{\"selector\":\".rclm_row\",\"tasks\":[[\"has-text\",\"advert\"]]}","{\"selector\":\".widget_sp_image-image-link:not(a[href*=\\\"www.pen.nl\\\"])\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"aside #rclm_block\",\"tasks\":[[\"has-text\",\"advert\"]]}"],["{\"selector\":\"#tekstpetitie > *\",\"tasks\":[[\"has-text\",\"advert\"],[\"spath\",\" + div\"]]}","{\"selector\":\"#tekstpetitie > *\",\"tasks\":[[\"has-text\",\"advert\"]]}"],["{\"selector\":\".sidebaritem\",\"tasks\":[[\"has-text\",\"/partners|online casino/i\"]]}"],["{\"selector\":\".rs_sponsorbanners_widget\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"a[class*=\\\"image-wrapper\\\"] img[src*=\\\"racesport.nl/wp-content/uploads/\\\"][src*=\\\"1120x250\\\"]\",\"tasks\":[[\"upward\",\".tdc-row\"]]}"],["{\"selector\":\"img[src^=\\\"/img/sponsors\\\"]\",\"tasks\":[[\"upward\",\".article-photo\"]]}"],["{\"selector\":\".meta-format\",\"tasks\":[[\"has-text\",\"Advert\"],[\"upward\",\".card\"]]}"],["{\"selector\":\"[id^=\\\"takeover\\\"]\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\"section.elementor-element\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"MOGELIJK GEMAAKT DOOR\"]]}]]}"],["{\"selector\":\"a[onclick*=\\\"Banner\\\"]:not(a[href*=\\\"riskcompliance.nl\\\"])\",\"tasks\":[[\"upward\",\"article\"]]}"],["{\"selector\":\".adsbygoogle:not(.adsbygoogle-noablate)\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".list-sponsors\",\"tasks\":[[\"upward\",\".content\"]]}"],["{\"selector\":\".autoscalable-block-wrapper\",\"tasks\":[[\"has-text\",\"/van onze partners/i\"]]}"],["{\"selector\":\"[id^=\\\"pg-1407\\\"]\",\"tasks\":[[\"has-text\",\"Vrienden\"],[\"spath\",\":has([class^=\\\"sp-logo-carousel\\\"] .sp-lcp-logo-wrapper):has(img[src])\"]]}"],["{\"selector\":\"div[class^=\\\"vc_column\\\"]\",\"tasks\":[[\"has-text\",\"/reclame/i\"]]}"],["{\"selector\":\".partner-grid\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".moreEscortM\",\"tasks\":[[\"has-text\",\"Sponsors\"]]}","{\"selector\":\"div.PREMEscorts\",\"tasks\":[[\"has-text\",\"Sponsors\"]]}","{\"selector\":\"div.vipEscortModel\",\"tasks\":[[\"has-text\",\"Sponsors\"]]}"],["{\"selector\":\"[id^=\\\"add\\\"]\",\"tasks\":[[\"upward\",\".dw-card\"]]}"],["{\"selector\":\"[id^=\\\"ad_native\\\"]\",\"tasks\":[[\"upward\",\".column\"]]}"],["{\"selector\":\".bcb-atts\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"table\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}"],["{\"selector\":\".item\",\"tasks\":[[\"has\",{\"selector\":\"[class^=\\\"item_special\\\"]\",\"tasks\":[[\"has-text\",\"tradetracker.net\"]]}]]}"],["{\"selector\":\"td[class]:has(a[href*=\\\"robohost.nl/clients/aff.php\\\"])\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".hpitem\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Partner\"]]}]]}"],["{\"selector\":\"[id^=\\\"menu-item\\\"]\",\"tasks\":[[\"has-text\",\"/gokken|casino/i\"]]}"],["{\"selector\":\"[id^=\\\"sky\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"AdvertSlot\"]]}]]}"],["{\"selector\":\"#right .desktopad[id*=\\\"TOURETAPPE_300\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".advertisement-new:not(:has(a[href$=\\\"/adverteerdersinformatie/\\\"]))\"}]]}"],["{\"selector\":\".highlighted-advertisers\",\"tasks\":[[\"upward\",\".row\"]]}"],["{\"selector\":\"aside\",\"tasks\":[[\"has\",{\"selector\":\"[class]\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}],[\"has\",{\"selector\":\"[href]:has([src*=\\\"media.prdn.nl\\\"])\"}]]}"],["{\"selector\":\".c-tag\",\"tasks\":[[\"has-text\",\"/advert/i\"],[\"upward\",\".c-articles-list__link\"]]}","{\"selector\":\"li[class*=\\\"highlights\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div[class*=\\\"articles-list\\\"][class*=\\\"item--highlight\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span[class]\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}]]}]]}"],["{\"selector\":\"[id*=\\\"miw_widget\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div[class]:has(a[href*=\\\"leverancier\\\"])\"}]]}"],["{\"selector\":\".Footer-sponsorList\",\"tasks\":[[\"upward\",\"div.Footer-column\"]]}"],["{\"selector\":\".blok\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Partners\"]]}]]}"],["{\"selector\":\".contentbox\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}","{\"selector\":\".smallbox\",\"tasks\":[[\"has-text\",\"Adds By Google\"]]}","{\"selector\":\".smallbox\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}"],["{\"selector\":\".ad-top_banner\",\"tasks\":[[\"upward\",\".mha_container--header\"]]}"],["{\"selector\":\"#right-sidebar > *\",\"tasks\":[[\"has\",{\"selector\":\".mb-3\",\"tasks\":[[\"has-text\",\"Advert\"]]}]]}","{\"selector\":\".mb-3\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\".d-md-block.d-none\",\"tasks\":[[\"has-text\",\"Met dank aan\"]]}"],["{\"selector\":\"p > a[href][rel$=\\\"sponsored\\\"]\",\"tasks\":[[\"upward\",\"aside > section\"]]}","{\"selector\":\"p.center2\",\"tasks\":[[\"has-text\",\"Advert\"]]}"],["{\"selector\":\"ins.adsbygoogle\",\"tasks\":[[\"upward\",\".card\"]]}"],["{\"selector\":\".widget-container\",\"tasks\":[[\"has\",{\"selector\":\".h3\",\"tasks\":[[\"has-text\",\"Wielerdeals\"]]}]]}","{\"selector\":\"li.list-item.list-item-aside\",\"tasks\":[[\"has\",{\"selector\":\".badge\",\"tasks\":[[\"has-text\",\"Ad\"]]}]]}","{\"selector\":\"li.list-item.list-item-default\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Ad\"]]}]]}"],["{\"selector\":\".vcex-module\",\"tasks\":[[\"has-text\",\"advert\"]]}"],["{\"selector\":\"[id*=\\\"rectangle\\\"]\",\"tasks\":[[\"upward\",\".block\"]]}","{\"selector\":\"[id*=\\\"web_billboard\\\"]\",\"tasks\":[[\"upward\",\"article > .field\"]]}","{\"selector\":\"[id*=\\\"web_halfpage\\\"]\",\"tasks\":[[\"upward\",\".block\"]]}","{\"selector\":\"[id*=\\\"web_hpa\\\"]\",\"tasks\":[[\"upward\",\".block\"]]}","{\"selector\":\"[id*=\\\"web_partners\\\"]\",\"tasks\":[[\"upward\",\".block\"]]}"],["{\"selector\":\".adv-link\",\"tasks\":[[\"upward\",\".fl-row\"],[\"has-text\",\"/advert/i\"],[\"spath\",\":not(:has(article))\"]]}","{\"selector\":\".adv-link\",\"tasks\":[[\"upward\",\"[id^=\\\"zeilw\\\"]\"]]}"],["{\"selector\":\".adv-link\",\"tasks\":[[\"upward\",\".wpb_wrapper\"]]}"],["{\"selector\":\"h6\",\"tasks\":[[\"has-text\",\"/advert/i\"],[\"upward\",1]]}"],["{\"selector\":\"[id^=\\\"custom_html-\\\"]\",\"tasks\":[[\"has-text\",\"/advert/i\"]]}"],["{\"selector\":\"[id^=\\\"custom_html-\\\"]\",\"tasks\":[[\"has-text\",\"Kennispartners\"],[\"spath\",\":has(a[href] > img)\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"/Gesponsoord/i\"]]}"],["{\"selector\":\"div[style] [id*=\\\"728x90\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\".bannerslid-add\",\"tasks\":[[\"upward\",\".container\"],[\"spath\",\":has(app-topleft)\"]]}"],["{\"selector\":\".advertisement\",\"tasks\":[[\"upward\",1]]}"]];

const hostnamesMap = new Map([["2dehands.be",0],["marktplaats.nl",0],["clubbrugge.be",1],["despirituelewereld.be",2],["doorbraak.be",3],["feestdagen-be.be",4],["feestdagen-nl.nl",4],["geelfm.be",5],["geile-sexverhalen.be",6],["geile-sexverhalen.nl",6],["gocar.be",7],["gva.be",8],["kinderspelletjes.be",9],["kinderspelletjes.nl",9],["made-in.be",10],["mariogames.be",11],["motorrijder.be",12],["netonline.be",13],["nieuwsblad.be",14],["nuus.be",15],["palnws.be",[16,17]],["maaslandradio.nl",17],["mariabode.nl",[17,140]],["radiozuidrand.be",18],["senseigaming.be",19],["spaargids.be",20],["techpulse.be",21],["tijd.be",22],["truck1.be",23],["truck1-nl.be",23],["truck1.nl",23],["voetbal4u.be",24],["vtwonen.be",25],["deondernemer.nl",25],["vtwonen.nl",25],["zita.be",26],["247spice.com",27],["bierdopje.com",28],["cryptobenelux.com",29],["dolcevia.com",30],["dwtonline.com",31],["farm-date.com",32],["footballtransfers.com",33],["gaslicht.com",34],["gfcnieuws.com",35],["nauticlink.com",36],["onderwijsland.com",37],["poki.com",38],["risallah.com",39],["forum.scholieren.com",40],["starnieuws.com",41],["stopdebankiers.com",42],["112-ov.nl",[42,55]],["frontline.digital",43],["cyclingmedia.eu",44],["ecobioliving.eu",45],["radiozenders.fm",46],["fierljeppenwinsum.frl",47],["itnijs.frl",48],["redbot.frl",49],["hardware.info",50],["republikein.com.na",51],["historiek.net",52],["opwindend.net",53],["tweakers.net",54],["112amersfoort.nl",56],["112amsterdam.nl",56],["112apeldoorn.nl",56],["112arnhem.nl",56],["112assen.nl",56],["112barneveld.nl",56],["112bunschoten.nl",56],["112doetinchem.nl",56],["112drenthe.nl",56],["112ede.nl",56],["112eindhoven.nl",56],["112emmen.nl",56],["112flevoland.nl",56],["112harderwijk.nl",56],["112hilversum.nl",56],["112inbeeld.nl",56],["112lelystad.nl",56],["112meppel.nl",56],["112nijkerk.nl",56],["112overijssel.nl",56],["112ridderkerk.nl",56],["112rotterdam.nl",56],["112scherpenzeel.nl",56],["112schiedam.nl",56],["112vallei.nl",56],["112vechtdal.nl",56],["112veenendaal.nl",56],["112wageningen.nl",56],["112zeewolde.nl",56],["112zwolle.nl",56],["9292.nl",57],["aafm.nl",58],["aavisie.nl",58],["accountancyvanmorgen.nl",59],["fiscaalvanmorgen.nl",59],["salarisvanmorgen.nl",59],["adbroere.nl",60],["ajaxreport.nl",61],["psvreport.nl",61],["alblasserdamsnieuws.nl",62],["allesoveropeningstijden.nl",63],["almere-nieuws.nl",64],["alphens.nl",65],["androidplanet.nl",66],["iphoned.nl",66],["ans-online.nl",67],["apparata.nl",68],["arenalokaal.nl",[69,70,71]],["belnieuws.nl",69],["dehavenloods.nl",[69,70]],["gooieneembode.nl",[69,110]],["hetkompassliedrecht.nl",69],["hetkrantje-online.nl",[69,70]],["leiderdorpsweekblad.nl",[69,70]],["weespernieuws.nl",69],["autoblog.nl",72],["autoweek.nl",73],["barneveldsekrant.nl",74],["destadamersfoort.nl",74],["edestad.nl",74],["scherpenzeelsekrant.nl",74],["belegger.nl",75],["nieuws.besteoverzicht.nl",76],["beveiligingnieuws.nl",77],["biflatie.nl",78],["bnnvara.nl",79],["bol-an.nl",80],["bollenstreekomroep.nl",81],["buttkicken.nl",82],["calorieenverbranden.nl",83],["cryptosjop.nl",84],["cvandaag.nl",85],["dagelijksestandaard.nl",86],["dartfreakz.nl",87],["dartsactueel.nl",88],["dekattensite.nl",89],["dekrantnieuws.nl",90],["destreekkrant.nu",90],["dekrantvantynaarlo.nl",91],["deliciousmagazine.nl",92],["detelefoongids.nl",93],["ditjesendatjes.nl",94],["domstadradio.nl",95],["dtvnieuws.nl",96],["omroephorstaandemaas.nl",96],["omroepvenlo.nl",96],["roulettefm.nl",[96,175]],["rtvstichtsevecht.nl",96],["wos.nl",96],["dumpert.nl",97],["dutchitchannel.nl",98],["dutchitleaders.nl",98],["dutchleader.nl",99],["duurzaam-actueel.nl",100],["duurzaamnieuws.nl",101],["edelmetaal-info.nl",102],["fcutrecht.nl",103],["feijenoordnieuws.nl",104],["fhm500.nl",105],["fleet-mobility.nl",106],["gamer.nl",107],["id.nl",[107,117]],["wasmachines.nl",107],["geenstijl.nl",108],["glutenvrij.nl",109],["groningerkrant.nl",111],["h2owaternetwerk.nl",112],["hardnieuws.nl",113],["hockey.nl",114],["hoekschnieuws.nl",115],["hollandskroonnieuws.nl",116],["wieringernieuws.nl",116],["iex.nl",118],["iexprofs.nl",119],["ijshockeynederland.nl",120],["indignatie.nl",121],["infinance.nl",122],["interglot.nl",123],["investmentofficer.nl",124],["itwm.nl",125],["jaap.nl",126],["janvissersweer.nl",127],["juf-milou.nl",128],["kicxstart.nl",129],["kidsweek.nl",130],["klapjes.nl",131],["kledingmaten.nl",132],["klokradio.nl",133],["kookboekennieuws.nl",134],["landenweb.nl",135],["linda.nl",136],["loemedia.nl",137],["luchtvaartnieuws.nl",138],["mannenzaken.nl",139],["omroepzilt.nl",140],["marktnet.nl",141],["meerdangewenst.nl",142],["messianieuws.nl",143],["midvliet.nl",144],["mijnserie.nl",145],["mijnwoordenboek.nl",146],["motocrossplanet.nl",147],["motorblog.nl",148],["moviemeter.nl",149],["mr-online.nl",150],["nederlandsmedianieuws.nl",151],["nieuwsmotor.nl",152],["nieuwsopbeeld.nl",153],["nieuwsuitnijmegen.nl",154],["ninefornews.nl",155],["noordernieuws.nl",156],["noordkopcentraal.nl",157],["npo3fm.nl",158],["nporadio4.nl",158],["nporadio1.nl",159],["nporadio2.nl",159],["nu.nl",160],["omroepalmere.nl",161],["omroepzeeland.nl",162],["osurtv.nl",163],["participaties.nl",164],["pen.nl",165],["petitie24.nl",166],["pokeren.nl",167],["racesport.nl",168],["racexpress.nl",169],["racingnews365.nl",170],["radio.nl",171],["radio182.nl",172],["riskcompliance.nl",173],["rotterdam-nesselande.nl",174],["rtlnieuws.nl",176],["rtvkrimpenerwaard.nl",177],["rtvpapendrecht.nl",178],["sc-heerenveen.nl",179],["sexguide.nl",180],["shespot.nl",181],["sikkom.nl",182],["soccernews.nl",183],["forum.spaarinformatie.nl",184],["startlijstjes.nl",185],["startlinken.nl",186],["tcroomburg.nl",187],["thatsgaming.nl",188],["top40.nl",189],["touretappe.nl",190],["transport-online.nl",191],["trucks.nl",192],["vastgoedjournaal.nl",193],["vi.nl",194],["vlootschouw.nl",195],["voetbal.nl",196],["voetbalcentraal.nl",197],["waarzo.nl",198],["want.nl",199],["wanttoknow.nl",200],["webcam-binnenvaart.nl",201],["webstick.nl",202],["weerstationleeuwarden.nl",203],["wielerflits.nl",204],["wkdarts.nl",205],["zakenreisnieuws.nl",206],["zeilwereld.nl",207],["nieuwsfiets.nu",208],["schie.nu",209],["dissident.one",210],["nljug.org",211],["omrekenen.org",212],["woorden.org",213],["sun.sr",214],["gids.tv",215]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
