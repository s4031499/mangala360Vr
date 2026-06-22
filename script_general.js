(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"start":"this.init()","class":"Player","scrollBarColor":"#000000","minHeight":0,"data":{"textToSpeechConfig":{"speechOnInfoWindow":false,"pitch":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"volume":1,"stopBackgroundAudio":false,"rate":1},"displayTooltipInTouchScreens":true,"locales":{"en":"locale/en.txt"},"name":"Player893","defaultLocale":"en","history":{}},"minWidth":0,"scripts":{"initQuiz":TDV.Tour.Script.initQuiz,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"textToSpeech":TDV.Tour.Script.textToSpeech,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"showWindow":TDV.Tour.Script.showWindow,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getMediaByName":TDV.Tour.Script.getMediaByName,"unloadViewer":TDV.Tour.Script.unloadViewer,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"initAnalytics":TDV.Tour.Script.initAnalytics,"showPopupImage":TDV.Tour.Script.showPopupImage,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setValue":TDV.Tour.Script.setValue,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"translate":TDV.Tour.Script.translate,"historyGoBack":TDV.Tour.Script.historyGoBack,"clone":TDV.Tour.Script.clone,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getOverlays":TDV.Tour.Script.getOverlays,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"init":TDV.Tour.Script.init,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getKey":TDV.Tour.Script.getKey,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"playAudioList":TDV.Tour.Script.playAudioList,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"shareSocial":TDV.Tour.Script.shareSocial,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"setLocale":TDV.Tour.Script.setLocale,"resumePlayers":TDV.Tour.Script.resumePlayers,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getComponentByName":TDV.Tour.Script.getComponentByName,"setMapLocation":TDV.Tour.Script.setMapLocation,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"historyGoForward":TDV.Tour.Script.historyGoForward,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"isPanorama":TDV.Tour.Script.isPanorama,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"cloneBindings":TDV.Tour.Script.cloneBindings,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"enableVR":TDV.Tour.Script.enableVR,"mixObject":TDV.Tour.Script.mixObject,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"executeJS":TDV.Tour.Script.executeJS,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showWindowBase":TDV.Tour.Script.showWindowBase,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"registerKey":TDV.Tour.Script.registerKey,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizShowScore":TDV.Tour.Script.quizShowScore,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"createTween":TDV.Tour.Script.createTween,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getMainViewer":TDV.Tour.Script.getMainViewer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"quizStart":TDV.Tour.Script.quizStart,"existsKey":TDV.Tour.Script.existsKey,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"startMeasurement":TDV.Tour.Script.startMeasurement,"quizFinish":TDV.Tour.Script.quizFinish,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"disableVR":TDV.Tour.Script.disableVR,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"openLink":TDV.Tour.Script.openLink,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"downloadFile":TDV.Tour.Script.downloadFile,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"toggleVR":TDV.Tour.Script.toggleVR,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPixels":TDV.Tour.Script.getPixels,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags},"scrollBarMargin":2,"height":"100%","width":"100%","hash": "45c59190dd6ec98e6319e1b729f5ada81475a3c7b13bc835b51c4beb317c9d28", "definitions": [{"frames":[{"thumbnailUrl":"media/panorama_FC3EFBC3_EF3E_C5B1_41E1_EAED0B2A7971_t.webp","cube":{"class":"ImageResource","levels":[{"height":4608,"url":"media/panorama_FC3EFBC3_EF3E_C5B1_41E1_EAED0B2A7971_0/{face}/0/{row}_{column}.webp","tags":"ondemand","rowCount":9,"class":"TiledImageResourceLevel","colCount":54,"width":27648},{"height":2560,"url":"media/panorama_FC3EFBC3_EF3E_C5B1_41E1_EAED0B2A7971_0/{face}/1/{row}_{column}.webp","tags":"ondemand","rowCount":5,"class":"TiledImageResourceLevel","colCount":30,"width":15360},{"height":1536,"url":"media/panorama_FC3EFBC3_EF3E_C5B1_41E1_EAED0B2A7971_0/{face}/2/{row}_{column}.webp","tags":"ondemand","rowCount":3,"class":"TiledImageResourceLevel","colCount":18,"width":9216},{"height":1024,"url":"media/panorama_FC3EFBC3_EF3E_C5B1_41E1_EAED0B2A7971_0/{face}/3/{row}_{column}.webp","tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel","colCount":12,"width":6144},{"height":512,"url":"media/panorama_FC3EFBC3_EF3E_C5B1_41E1_EAED0B2A7971_0/{face}/4/{row}_{column}.webp","tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel","colCount":6,"width":3072}]},"class":"CubicPanoramaFrame"}],"class":"Panorama","vfov":180,"hfov":360,"label":trans('panorama_FC3EFBC3_EF3E_C5B1_41E1_EAED0B2A7971.label'),"data":{"label":"DJI_20260616155543_0324_D"},"thumbnailUrl":"media/panorama_FC3EFBC3_EF3E_C5B1_41E1_EAED0B2A7971_t.webp","overlays":["this.overlay_EA6940B2_F11A_43D3_41E4_903030B7930A","this.overlay_EB7A442A_F116_C2F3_41ED_0528F182390A","this.overlay_EC3D16D1_F12A_4F51_41D6_9AA5EA947618","this.overlay_EB387594_F12A_4DD7_41D7_EF9B65479B60","this.overlay_ED15543B_F12E_C2D1_41E1_3DAA1567425B","this.overlay_D1FC87B5_F12A_4DD1_41EA_60804D8A3C95","this.overlay_EC7388E9_F12A_4371_41E1_9F8B31ADEC43","this.overlay_ECA17254_F137_C757_41C4_C8518C86C210","this.overlay_EC1E8EB0_F12E_5FEF_41E7_4F8CD9109477","this.overlay_ED20C955_F12A_4551_41EB_03FBCE651B55","this.overlay_EC070CD0_F11F_C3AF_41E6_D368C98F945D","this.overlay_EDE6CDE6_F16A_5D73_41A6_6B2DB16D304B","this.overlay_EC42F7B7_F17A_4DD1_41D3_7F8B101B3AE1","this.overlay_EBFB9446_F179_C2B3_41EC_B2EAFE3309FC","this.overlay_ECA8173C_F17E_4ED7_41E5_78C1A65824C0","this.overlay_ED3700EC_F176_4377_41B5_F0173596044C","this.overlay_ED2B52E6_F176_C773_41EA_10CC71F60F32","this.overlay_ECA27FCA_F176_5DB3_41CC_200659BDBC32"],"hfovMax":130,"id":"panorama_FC3EFBC3_EF3E_C5B1_41E1_EAED0B2A7971"},{"initialPosition":{"yaw":155.27,"pitch":-43.58,"class":"PanoramaCameraPosition"},"class":"PanoramaCamera","id":"panorama_FC3EFBC3_EF3E_C5B1_41E1_EAED0B2A7971_camera","enterPointingToHorizon":true},{"items":[{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","media":"this.panorama_FC3EFBC3_EF3E_C5B1_41E1_EAED0B2A7971","camera":"this.panorama_FC3EFBC3_EF3E_C5B1_41E1_EAED0B2A7971_camera","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"vrPointerSelectionColor":"#FF6600","playbackBarHeadShadowOpacity":0.7,"vrPointerColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"vrPointerSelectionTime":2000,"minHeight":50,"toolTipFontFamily":"Arial","data":{"name":"Main Viewer"},"minWidth":100,"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"width":"100%","playbackBarProgressBackgroundColorRatios":[0],"playbackBarProgressBorderColor":"#000000","height":"100%","subtitlesFontFamily":"Arial","playbackBarHeadBorderRadius":0,"toolTipPaddingRight":6,"playbackBarHeadBorderColor":"#000000","vrThumbstickRotationStep":20,"toolTipBorderColor":"#767676","playbackBarBorderSize":0,"propagateClick":false,"progressBackgroundColorRatios":[0],"toolTipBackgroundColor":"#F6F6F6","subtitlesGap":0,"progressRight":"33%","toolTipFontSize":"1.11vmin","firstTransitionDuration":0,"subtitlesBackgroundColor":"#000000","progressOpacity":0.7,"id":"MainViewer","progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","playbackBarBackgroundOpacity":1,"playbackBarHeadShadowBlurRadius":3,"toolTipPaddingTop":4,"subtitlesTextShadowOpacity":1,"class":"ViewerArea","playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","subtitlesTextShadowVerticalLength":1,"subtitlesFontColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","subtitlesTextShadowColor":"#000000","playbackBarHeadShadow":true,"playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"surfaceReticleColor":"#FFFFFF","progressBackgroundColor":["#000000"],"subtitlesTop":0,"playbackBarHeadHeight":15,"toolTipPaddingLeft":6,"subtitlesFontSize":"3vmin","playbackBarHeadShadowHorizontalLength":0,"progressBottom":10,"toolTipTextShadowColor":"#000000","progressHeight":2,"subtitlesBackgroundOpacity":0.2,"progressBorderSize":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"subtitlesBottom":50,"progressBarBorderSize":0,"toolTipFontColor":"#606060","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadShadowVerticalLength":0,"toolTipPaddingBottom":4,"progressBarBorderRadius":2,"toolTipShadowColor":"#333138","subtitlesBorderColor":"#FFFFFF","playbackBarProgressBorderSize":0,"playbackBarHeight":10,"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","surfaceReticleSelectionColor":"#FFFFFF","playbackBarRight":0,"progressBorderRadius":2,"progressLeft":"33%"},{"aaEnabled":true,"class":"PanoramaPlayer","touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation","keepModel3DLoadedWithoutLocation":true,"displayPlaybackBar":true},{"class":"HotspotPanoramaOverlay","enabledInVR":true,"areas":["this.HotspotPanoramaOverlayArea_EAC97231_F11A_46D1_41C9_F6E7B70BD1A4"],"useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_EA6240A8_F11A_43FF_41D7_D8F88EDBB5FB"],"id":"overlay_EA6940B2_F11A_43D3_41E4_903030B7930A","maps":[],"data":{"label":"Text"}},{"class":"HotspotPanoramaOverlay","enabledInVR":true,"areas":["this.HotspotPanoramaOverlayArea_EBBA1456_F116_C353_41ED_A10E309ACDCB"],"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"data":{"label":"Polygon"},"image":{"class":"ImageResource","levels":[{"height":1031,"url":"media/panorama_FC3EFBC3_EF3E_C5B1_41E1_EAED0B2A7971_HS_y9v763l0.webp","class":"ImageResourceLevel","width":1787}]},"pitch":-51.42,"vfov":25.37,"yaw":146.91,"hfov":42.6}],"id":"overlay_EB7A442A_F116_C2F3_41ED_0528F182390A","maps":[],"data":{"label":"Polygon"}},{"class":"HotspotPanoramaOverlay","enabledInVR":true,"areas":["this.HotspotPanoramaOverlayArea_EC32B6D9_F12A_4F51_41E6_178783FA7DC3"],"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"data":{"label":"Polygon"},"image":{"class":"ImageResource","levels":[{"height":2048,"url":"media/panorama_FC3EFBC3_EF3E_C5B1_41E1_EAED0B2A7971_HS_paem9ny0_1.webp","class":"ImageResourceLevel","width":2048}]},"pitch":0,"vfov":90,"yaw":90,"hfov":90},{"distance":50,"class":"HotspotPanoramaOverlayImage","yaw":180,"image":{"class":"ImageResource","levels":[{"height":2048,"url":"media/panorama_FC3EFBC3_EF3E_C5B1_41E1_EAED0B2A7971_HS_paem9ny0_2.webp","class":"ImageResourceLevel","width":2048}]},"hfov":90},{"distance":50,"class":"HotspotPanoramaOverlayImage","yaw":-90,"image":{"class":"ImageResource","levels":[{"height":2048,"url":"media/panorama_FC3EFBC3_EF3E_C5B1_41E1_EAED0B2A7971_HS_paem9ny0_3.webp","class":"ImageResourceLevel","width":2048}]},"hfov":90}],"id":"overlay_EC3D16D1_F12A_4F51_41D6_9AA5EA947618","maps":[],"data":{"label":"Polygon"}},{"class":"HotspotPanoramaOverlay","enabledInVR":true,"areas":["this.HotspotPanoramaOverlayArea_EB4155A9_F12A_4DF1_41EB_E19E7C8B3F55"],"useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_EB3AE593_F12A_4DD1_41DD_3B80C131CDA6"],"id":"overlay_EB387594_F12A_4DD7_41D7_EF9B65479B60","maps":[],"data":{"label":"Text"}},{"class":"HotspotPanoramaOverlay","enabledInVR":true,"areas":["this.HotspotPanoramaOverlayArea_ED24F461_F12E_C371_41E2_7ECF18DD2011"],"useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_ED1B443A_F12E_C2D3_41BA_E549EE0B9F17"],"id":"overlay_ED15543B_F12E_C2D1_41E1_3DAA1567425B","maps":[],"data":{"label":"Text"}},{"class":"HotspotPanoramaOverlay","enabledInVR":true,"areas":["this.HotspotPanoramaOverlayArea_D1F227D1_F12A_4D51_41E3_AC2F7C4ADD66"],"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"data":{"label":"Polygon"},"image":{"class":"ImageResource","levels":[{"height":2048,"url":"media/panorama_FC3EFBC3_EF3E_C5B1_41E1_EAED0B2A7971_HS_m43atr4k_0.webp","class":"ImageResourceLevel","width":2048}]},"pitch":0,"vfov":90,"yaw":0,"hfov":90},{"distance":50,"class":"HotspotPanoramaOverlayImage","yaw":90,"image":{"class":"ImageResource","levels":[{"height":2048,"url":"media/panorama_FC3EFBC3_EF3E_C5B1_41E1_EAED0B2A7971_HS_m43atr4k_1.webp","class":"ImageResourceLevel","width":2048}]},"hfov":90},{"distance":50,"class":"HotspotPanoramaOverlayImage","yaw":-90,"image":{"class":"ImageResource","levels":[{"height":2048,"url":"media/panorama_FC3EFBC3_EF3E_C5B1_41E1_EAED0B2A7971_HS_m43atr4k_3.webp","class":"ImageResourceLevel","width":2048}]},"hfov":90},{"distance":50,"pitch":-90,"class":"HotspotPanoramaOverlayImage","image":{"class":"ImageResource","levels":[{"height":2048,"url":"media/panorama_FC3EFBC3_EF3E_C5B1_41E1_EAED0B2A7971_HS_m43atr4k_5.webp","class":"ImageResourceLevel","width":2048}]},"hfov":90}],"id":"overlay_D1FC87B5_F12A_4DD1_41EA_60804D8A3C95","maps":[],"data":{"label":"Polygon"}},{"class":"HotspotPanoramaOverlay","enabledInVR":true,"areas":["this.HotspotPanoramaOverlayArea_EC8F78EC_F12A_4377_41D3_4E950F73C8DA"],"useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_EC8DC8ED_F12A_4371_41DD_45A03475737B"],"id":"overlay_EC7388E9_F12A_4371_41E1_9F8B31ADEC43","maps":[],"data":{"label":"Text"}},{"class":"HotspotPanoramaOverlay","enabledInVR":true,"areas":["this.HotspotPanoramaOverlayArea_ECA11255_F137_C751_41BA_29B618D9C446"],"useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_ECA10255_F137_C751_41C3_383B89B0A81F"],"id":"overlay_ECA17254_F137_C757_41C4_C8518C86C210","maps":[],"data":{"label":"Text"}},{"class":"HotspotPanoramaOverlay","enabledInVR":true,"areas":["this.HotspotPanoramaOverlayArea_EBAD7F46_F12E_5EB3_41ED_47276EFC6235"],"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","vfov":25.49,"distance":50,"rotationX":-10.81,"roll":-60.5,"scaleMode":"fit_inside","rotationY":-23,"pitch":-58.32,"data":{"label":"Layer 2"},"image":"this.res_D0360D8C_F16A_DDB7_41D6_9552F56941B5","yaw":119.33,"hfov":49.29}],"id":"overlay_EC1E8EB0_F12E_5FEF_41E7_4F8CD9109477","maps":[],"data":{"label":"Layer 2"}},{"class":"HotspotPanoramaOverlay","enabledInVR":true,"areas":["this.HotspotPanoramaOverlayArea_EBAD19BF_F12A_45D1_41E9_509CF246D7D3"],"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","vfov":18.68,"distance":50,"rotationX":-11.63,"roll":64.22,"scaleMode":"fit_inside","rotationY":51.8,"pitch":-38.37,"data":{"label":"Layer 3"},"image":"this.res_D036DD8C_F16A_DDB7_41EC_EADE7CB13CCA","yaw":-103.58,"hfov":76.2}],"id":"overlay_ED20C955_F12A_4551_41EB_03FBCE651B55","maps":[],"data":{"label":"Layer 3"}},{"class":"HotspotPanoramaOverlay","enabledInVR":true,"areas":["this.HotspotPanoramaOverlayArea_EB8F8D51_F11F_DD51_41DF_BE73C9F3ACEE"],"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","vfov":17.76,"distance":50,"rotationX":-26.27,"roll":-64.37,"scaleMode":"fit_inside","rotationY":-54.29,"pitch":-21.31,"data":{"label":"Layer 6"},"image":"this.res_D036AD8D_F16A_DDB1_41C8_8987365C2B9B","yaw":103.3,"hfov":9.44}],"id":"overlay_EC070CD0_F11F_C3AF_41E6_D368C98F945D","maps":[],"data":{"label":"Layer 6"}},{"class":"HotspotPanoramaOverlay","enabledInVR":true,"areas":["this.HotspotPanoramaOverlayArea_EBCB1E1A_F16A_5ED3_41DC_5BAFEEA5AF47"],"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","vfov":34.76,"distance":50,"rotationX":-36.44,"roll":-54.13,"scaleMode":"fit_inside","rotationY":-52.43,"pitch":-30.86,"data":{"label":"Layer 8"},"image":"this.res_D0368D8D_F16A_DDB1_41D3_EA69281E1D4B","yaw":112.56,"hfov":38.03}],"id":"overlay_EDE6CDE6_F16A_5D73_41A6_6B2DB16D304B","maps":[],"data":{"label":"Layer 8"}},{"class":"HotspotPanoramaOverlay","enabledInVR":true,"areas":["this.HotspotPanoramaOverlayArea_EC4217B7_F17A_4DD1_41E4_81E0B23FFD15"],"useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_EC4207B7_F17A_4DD1_41D5_59C47378DDFA"],"id":"overlay_EC42F7B7_F17A_4DD1_41D3_7F8B101B3AE1","maps":[],"data":{"label":"Text"}},{"class":"HotspotPanoramaOverlay","enabledInVR":true,"areas":["this.HotspotPanoramaOverlayArea_EBFB6446_F179_C2B3_41D2_859A1330D8E1"],"useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_EBFAA447_F179_C2B1_41B7_38E3734B95FC"],"id":"overlay_EBFB9446_F179_C2B3_41EC_B2EAFE3309FC","maps":[],"data":{"label":"Text"}},{"class":"HotspotPanoramaOverlay","enabledInVR":true,"areas":["this.HotspotPanoramaOverlayArea_ECA8373C_F17E_4ED7_41E8_BDE288B851C2"],"useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_ECA8273C_F17E_4ED7_41C1_81C8080F5BCB"],"id":"overlay_ECA8173C_F17E_4ED7_41E5_78C1A65824C0","maps":[],"data":{"label":"Text"}},{"class":"HotspotPanoramaOverlay","enabledInVR":true,"areas":["this.HotspotPanoramaOverlayArea_EC2E4125_F176_42F1_41E6_D0E042542A94"],"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","vfov":6.87,"distance":50,"rotationX":2.58,"scaleMode":"fit_inside","pitch":13.86,"data":{"label":"3.1"},"image":"this.res_D0376D8D_F16A_DDB1_41EA_EEDE765CA1FC","yaw":159.93,"hfov":17.93}],"id":"overlay_ED3700EC_F176_4377_41B5_F0173596044C","maps":[],"data":{"label":"3.1"}},{"class":"HotspotPanoramaOverlay","enabledInVR":true,"areas":["this.HotspotPanoramaOverlayArea_ED26E330_F176_C6EF_41E3_6A53E9FA52BA"],"useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_ED2AA2E5_F176_C771_41DF_3CDFBFA6CFAD"],"id":"overlay_ED2B52E6_F176_C773_41EA_10CC71F60F32","maps":[],"data":{"label":"Text"}},{"class":"HotspotPanoramaOverlay","enabledInVR":true,"areas":["this.HotspotPanoramaOverlayArea_EBFDA048_F176_42B0_41DB_19DD0D87E8E0"],"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","vfov":7.59,"distance":50,"data":{"label":"1.1"},"scaleMode":"fit_inside","pitch":14.1,"image":"this.res_D0375D8D_F16A_DDB1_41EA_553A7E362A9E","yaw":139.46,"hfov":13.49}],"id":"overlay_ECA27FCA_F176_5DB3_41CC_200659BDBC32","maps":[],"data":{"label":"1.1"}},{"mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_EAC97231_F11A_46D1_41C9_F6E7B70BD1A4"},{"class":"HotspotPanoramaOverlayImage","vfov":5.25,"hfov":72.42,"distance":50,"image":{"class":"ImageResource","levels":["this.imlevel_D01FDE1C_F16A_DED7_41EB_D094E12ADF41"]},"data":{"label":"Text"},"rotationX":-3.42,"roll":3.87,"rotationY":42.33,"pitch":-8.75,"id":"HotspotPanoramaOverlayTextImage_EA6240A8_F11A_43FF_41D7_D8F88EDBB5FB","yaw":130.24},{"mapColor":"image","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_EBBA1456_F116_C353_41ED_A10E309ACDCB"},{"mapColor":"image","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_EC32B6D9_F12A_4F51_41E6_178783FA7DC3"},{"mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_EB4155A9_F12A_4DF1_41EB_E19E7C8B3F55"},{"class":"HotspotPanoramaOverlayImage","vfov":13.93,"hfov":44.78,"distance":50,"image":{"class":"ImageResource","levels":["this.imlevel_D3216EEE_F16A_7F73_41B0_66F05D872F26"]},"data":{"label":"Text"},"rotationX":42.88,"roll":-23.53,"rotationY":-25.12,"pitch":-44.26,"id":"HotspotPanoramaOverlayTextImage_EB3AE593_F12A_4DD1_41DD_3B80C131CDA6","yaw":150.54},{"mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_ED24F461_F12E_C371_41E2_7ECF18DD2011"},{"class":"HotspotPanoramaOverlayImage","vfov":28.43,"distance":50,"image":{"class":"ImageResource","levels":["this.imlevel_D3190B62_F16A_4573_41D4_0BA18641AC42"]},"data":{"label":"Text"},"rotationX":-22.05,"roll":-100.37,"pitch":-82.4,"id":"HotspotPanoramaOverlayTextImage_ED1B443A_F12E_C2D3_41BA_E549EE0B9F17","yaw":81.04,"hfov":87.74},{"mapColor":"image","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_D1F227D1_F12A_4D51_41E3_AC2F7C4ADD66"},{"mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_EC8F78EC_F12A_4377_41D3_4E950F73C8DA"},{"class":"HotspotPanoramaOverlayImage","vfov":21.37,"distance":50,"image":{"class":"ImageResource","levels":["this.imlevel_D31ADD63_F16A_5D71_41E7_FB7C59125C28"]},"data":{"label":"Text"},"rotationX":20.48,"pitch":-17.3,"id":"HotspotPanoramaOverlayTextImage_EC8DC8ED_F12A_4371_41DD_45A03475737B","yaw":10.72,"hfov":45.43},{"mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_ECA11255_F137_C751_41BA_29B618D9C446"},{"class":"HotspotPanoramaOverlayImage","vfov":16.39,"distance":50,"image":{"class":"ImageResource","levels":["this.imlevel_D4945EC0_F16A_7FAF_41CA_CDFAB40F7018"]},"data":{"label":"Text"},"rotationX":20.48,"pitch":-16.21,"id":"HotspotPanoramaOverlayTextImage_ECA10255_F137_C751_41C3_383B89B0A81F","yaw":178.88,"hfov":45.43},{"mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_EBAD7F46_F12E_5EB3_41ED_47276EFC6235"},{"class":"ImageResource","id":"res_D0360D8C_F16A_DDB7_41D6_9552F56941B5","levels":[{"height":578,"url":"media/res_D0360D8C_F16A_DDB7_41D6_9552F56941B5_0.webp","class":"ImageResourceLevel","width":1442}]},{"mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_EBAD19BF_F12A_45D1_41E9_509CF246D7D3"},{"class":"ImageResource","id":"res_D036DD8C_F16A_DDB7_41EC_EADE7CB13CCA","levels":[{"height":578,"url":"media/res_D036DD8C_F16A_DDB7_41EC_EADE7CB13CCA_0.webp","class":"ImageResourceLevel","width":3202}]},{"mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_EB8F8D51_F11F_DD51_41DF_BE73C9F3ACEE"},{"class":"ImageResource","id":"res_D036AD8D_F16A_DDB1_41C8_8987365C2B9B","levels":[{"height":878,"url":"media/res_D036AD8D_F16A_DDB1_41C8_8987365C2B9B_0.webp","class":"ImageResourceLevel","width":534}]},{"mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_EBCB1E1A_F16A_5ED3_41DC_5BAFEEA5AF47"},{"class":"ImageResource","id":"res_D0368D8D_F16A_DDB1_41D3_EA69281E1D4B","levels":[{"height":892,"url":"media/res_D0368D8D_F16A_DDB1_41D3_EA69281E1D4B_0.webp","class":"ImageResourceLevel","width":1816}]},{"mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_EC4217B7_F17A_4DD1_41E4_81E0B23FFD15"},{"class":"HotspotPanoramaOverlayImage","vfov":8.76,"hfov":11.36,"distance":50,"image":{"class":"ImageResource","levels":["this.imlevel_D3067AC2_F16A_47B3_41DF_041E125AA013"]},"data":{"label":"Text"},"rotationX":45.56,"roll":-43.1,"rotationY":-44.59,"pitch":-27.48,"id":"HotspotPanoramaOverlayTextImage_EC4207B7_F17A_4DD1_41D5_59C47378DDFA","yaw":120.47},{"mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_EBFB6446_F179_C2B3_41D2_859A1330D8E1"},{"class":"HotspotPanoramaOverlayImage","vfov":13.93,"hfov":43.94,"distance":50,"image":{"class":"ImageResource","levels":["this.imlevel_D07B0BFD_F16A_4551_41E8_C85A08A5BA7E"]},"data":{"label":"Text"},"rotationX":48.08,"roll":-59.07,"rotationY":-26.38,"pitch":-51.25,"id":"HotspotPanoramaOverlayTextImage_EBFAA447_F179_C2B1_41B7_38E3734B95FC","yaw":116.83},{"mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_ECA8373C_F17E_4ED7_41E8_BDE288B851C2"},{"class":"HotspotPanoramaOverlayImage","vfov":13.93,"hfov":43.79,"distance":50,"image":{"class":"ImageResource","levels":["this.imlevel_D378F8A0_F16A_43EF_41D8_ABA01B8EEF90"]},"data":{"label":"Text"},"rotationX":52.46,"roll":-31.96,"rotationY":-20.43,"pitch":-65.64,"id":"HotspotPanoramaOverlayTextImage_ECA8273C_F17E_4ED7_41C1_81C8080F5BCB","yaw":147.92},{"mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_EC2E4125_F176_42F1_41E6_D0E042542A94"},{"class":"ImageResource","id":"res_D0376D8D_F16A_DDB1_41EA_EEDE765CA1FC","levels":[{"height":386,"url":"media/res_D0376D8D_F16A_DDB1_41EA_EEDE765CA1FC_0.webp","class":"ImageResourceLevel","width":987}]},{"mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_ED26E330_F176_C6EF_41E3_6A53E9FA52BA"},{"class":"HotspotPanoramaOverlayImage","vfov":10.5,"distance":50,"image":{"class":"ImageResource","levels":["this.imlevel_D36A74E9_F16A_C371_41ED_0D4CBB08ED36"]},"data":{"label":"Text"},"pitch":-18.07,"id":"HotspotPanoramaOverlayTextImage_ED2AA2E5_F176_C771_41DF_3CDFBFA6CFAD","yaw":102.71,"hfov":14.58},{"mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_EBFDA048_F176_42B0_41DB_19DD0D87E8E0"},{"class":"ImageResource","id":"res_D0375D8D_F16A_DDB1_41EA_553A7E362A9E","levels":[{"height":401,"url":"media/res_D0375D8D_F16A_DDB1_41EA_553A7E362A9E_0.webp","class":"ImageResourceLevel","width":765}]},{"height":362.85,"id":"imlevel_D01FDE1C_F16A_DED7_41EB_D094E12ADF41","url":trans('imlevel_D01FDE1C_F16A_DED7_41EB_D094E12ADF41.url'),"class":"ImageResourceLevel","width":5793.35},{"height":1062.02,"id":"imlevel_D3216EEE_F16A_7F73_41B0_66F05D872F26","url":trans('imlevel_D3216EEE_F16A_7F73_41B0_66F05D872F26.url'),"class":"ImageResourceLevel","width":3582.8},{"height":1849.55,"id":"imlevel_D3190B62_F16A_4573_41D4_0BA18641AC42","url":trans('imlevel_D3190B62_F16A_4573_41D4_0BA18641AC42.url'),"class":"ImageResourceLevel","width":7019.31},{"height":1638.51,"id":"imlevel_D31ADD63_F16A_5D71_41E7_FB7C59125C28","url":trans('imlevel_D31ADD63_F16A_5D71_41E7_FB7C59125C28.url'),"class":"ImageResourceLevel","width":3634},{"height":1250.05,"id":"imlevel_D4945EC0_F16A_7FAF_41CA_CDFAB40F7018","url":trans('imlevel_D4945EC0_F16A_7FAF_41CA_CDFAB40F7018.url'),"class":"ImageResourceLevel","width":3634},{"height":699.65,"id":"imlevel_D3067AC2_F16A_47B3_41DF_041E125AA013","url":trans('imlevel_D3067AC2_F16A_47B3_41DF_041E125AA013.url'),"class":"ImageResourceLevel","width":908.59},{"height":1064.18,"id":"imlevel_D07B0BFD_F16A_4551_41E8_C85A08A5BA7E","url":trans('imlevel_D07B0BFD_F16A_4551_41E8_C85A08A5BA7E.url'),"class":"ImageResourceLevel","width":3515.56},{"height":1064.58,"id":"imlevel_D378F8A0_F16A_43EF_41D8_ABA01B8EEF90","url":trans('imlevel_D378F8A0_F16A_43EF_41D8_ABA01B8EEF90.url'),"class":"ImageResourceLevel","width":3503.14},{"height":837.81,"id":"imlevel_D36A74E9_F16A_C371_41ED_0D4CBB08ED36","url":trans('imlevel_D36A74E9_F16A_C371_41ED_0D4CBB08ED36.url'),"class":"ImageResourceLevel","width":1166.08}],"backgroundColorRatios":[0],"layout":"absolute","propagateClick":false,"backgroundColor":["#FFFFFF"],"watermark":false,"defaultMenu":["fullscreen","mute","rotation"],"children":["this.MainViewer"],"gap":10,"id":"rootPlayer"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.0.9, Mon Jun 22 2026