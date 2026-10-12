
/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => { // webpackBootstrap
var __webpack_modules__ = ({
941: (function (module, __unused_webpack_exports, __webpack_require__) {
"use strict";
/**
 * Webflow: Interactions 2
 */ 
var Webflow = __webpack_require__(3949);
var ix2 = __webpack_require__(6011);
ix2.setEnv(Webflow.env);
Webflow.define('ix2', module.exports = function() {
    return ix2;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3NoYXJlZC9yZW5kZXIvcGx1Z2lucy9CYXNlU2l0ZU1vZHVsZXMvd2ViZmxvdy1peDIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXZWJmbG93OiBJbnRlcmFjdGlvbnMgMlxuICovXG52YXIgV2ViZmxvdyA9IHJlcXVpcmUoJy4vd2ViZmxvdy1saWInKTtcbnZhciBpeDIgPSByZXF1aXJlKCdAcGFja2FnZXMvc3lzdGVtcy9peDIvZW5naW5lJyk7XG5cbml4Mi5zZXRFbnYoV2ViZmxvdy5lbnYpO1xuXG5XZWJmbG93LmRlZmluZShcbiAgJ2l4MicsXG4gIChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gaXgyO1xuICB9KVxuKTtcbiJdLCJuYW1lcyI6WyJXZWJmbG93IiwicmVxdWlyZSIsIml4MiIsInNldEVudiIsImVudiIsImRlZmluZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDO0FBQ0QsSUFBSUEsVUFBVUMsUUFBUTtBQUN0QixJQUFJQyxNQUFNRCxRQUFRO0FBRWxCQyxJQUFJQyxNQUFNLENBQUNILFFBQVFJLEdBQUc7QUFFdEJKLFFBQVFLLE1BQU0sQ0FDWixPQUNDQyxPQUFPQyxPQUFPLEdBQUc7SUFDaEIsT0FBT0w7QUFDVCJ9

}),
3946: (function (__unused_webpack_module, exports, __webpack_require__) {
"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    actionListPlaybackChanged: function() {
        return actionListPlaybackChanged;
    },
    animationFrameChanged: function() {
        return animationFrameChanged;
    },
    clearRequested: function() {
        return clearRequested;
    },
    elementStateChanged: function() {
        return elementStateChanged;
    },
    eventListenerAdded: function() {
        return eventListenerAdded;
    },
    eventStateChanged: function() {
        return eventStateChanged;
    },
    instanceAdded: function() {
        return instanceAdded;
    },
    instanceRemoved: function() {
        return instanceRemoved;
    },
    instanceStarted: function() {
        return instanceStarted;
    },
    mediaQueriesDefined: function() {
        return mediaQueriesDefined;
    },
    parameterChanged: function() {
        return parameterChanged;
    },
    playbackRequested: function() {
        return playbackRequested;
    },
    previewRequested: function() {
        return previewRequested;
    },
    rawDataImported: function() {
        return rawDataImported;
    },
    sessionInitialized: function() {
        return sessionInitialized;
    },
    sessionStarted: function() {
        return sessionStarted;
    },
    sessionStopped: function() {
        return sessionStopped;
    },
    stopRequested: function() {
        return stopRequested;
    },
    testFrameRendered: function() {
        return testFrameRendered;
    },
    viewportWidthChanged: function() {
        return viewportWidthChanged;
    }
});
const _sharedconstants = __webpack_require__(7087);
const _shared = __webpack_require__(9468);
const { IX2_RAW_DATA_IMPORTED, IX2_SESSION_INITIALIZED, IX2_SESSION_STARTED, IX2_SESSION_STOPPED, IX2_PREVIEW_REQUESTED, IX2_PLAYBACK_REQUESTED, IX2_STOP_REQUESTED, IX2_CLEAR_REQUESTED, IX2_EVENT_LISTENER_ADDED, IX2_TEST_FRAME_RENDERED, IX2_EVENT_STATE_CHANGED, IX2_ANIMATION_FRAME_CHANGED, IX2_PARAMETER_CHANGED, IX2_INSTANCE_ADDED, IX2_INSTANCE_STARTED, IX2_INSTANCE_REMOVED, IX2_ELEMENT_STATE_CHANGED, IX2_ACTION_LIST_PLAYBACK_CHANGED, IX2_VIEWPORT_WIDTH_CHANGED, IX2_MEDIA_QUERIES_DEFINED } = _sharedconstants.IX2EngineActionTypes;
const { reifyState } = _shared.IX2VanillaUtils;
const rawDataImported = (rawData)=>({
        type: IX2_RAW_DATA_IMPORTED,
        payload: {
            ...reifyState(rawData)
        }
    });
const sessionInitialized = ({ hasBoundaryNodes, reducedMotion })=>({
        type: IX2_SESSION_INITIALIZED,
        payload: {
            hasBoundaryNodes,
            reducedMotion
        }
    });
const sessionStarted = ()=>({
        type: IX2_SESSION_STARTED
    });
const sessionStopped = ()=>({
        type: IX2_SESSION_STOPPED
    });
const previewRequested = ({ rawData, defer })=>({
        type: IX2_PREVIEW_REQUESTED,
        payload: {
            defer,
            rawData
        }
    });
const playbackRequested = ({ actionTypeId = _sharedconstants.ActionTypeConsts.GENERAL_START_ACTION, actionListId, actionItemId, eventId, allowEvents, immediate, testManual, verbose, rawData })=>({
        type: IX2_PLAYBACK_REQUESTED,
        payload: {
            actionTypeId,
            actionListId,
            actionItemId,
            testManual,
            eventId,
            allowEvents,
            immediate,
            verbose,
            rawData
        }
    });
const stopRequested = (actionListId)=>({
        type: IX2_STOP_REQUESTED,
        payload: {
            actionListId
        }
    });
const clearRequested = ()=>({
        type: IX2_CLEAR_REQUESTED
    });
const eventListenerAdded = (target, listenerParams)=>({
        type: IX2_EVENT_LISTENER_ADDED,
        payload: {
            target,
            listenerParams
        }
    });
const testFrameRendered = (step = 1)=>({
        type: IX2_TEST_FRAME_RENDERED,
        payload: {
            step
        }
    });
const eventStateChanged = (stateKey, newState)=>({
        type: IX2_EVENT_STATE_CHANGED,
        payload: {
            stateKey,
            newState
        }
    });
const animationFrameChanged = (now, parameters)=>({
        type: IX2_ANIMATION_FRAME_CHANGED,
        payload: {
            now,
            parameters
        }
    });
const parameterChanged = (key, value)=>({
        type: IX2_PARAMETER_CHANGED,
        payload: {
            key,
            value
        }
    });
const instanceAdded = (options)=>({
        type: IX2_INSTANCE_ADDED,
        payload: {
            ...options
        }
    });
const instanceStarted = (instanceId, time)=>({
        type: IX2_INSTANCE_STARTED,
        payload: {
            instanceId,
            time
        }
    });
const instanceRemoved = (instanceId)=>({
        type: IX2_INSTANCE_REMOVED,
        payload: {
            instanceId
        }
    });
const elementStateChanged = (elementId, actionTypeId, current, actionItem)=>({
        type: IX2_ELEMENT_STATE_CHANGED,
        payload: {
            elementId,
            actionTypeId,
            current,
            actionItem
        }
    });
const actionListPlaybackChanged = ({ actionListId, isPlaying })=>({
        type: IX2_ACTION_LIST_PLAYBACK_CHANGED,
        payload: {
            actionListId,
            isPlaying
        }
    });
const viewportWidthChanged = ({ width, mediaQueries })=>({
        type: IX2_VIEWPORT_WIDTH_CHANGED,
        payload: {
            width,
            mediaQueries
        }
    });
const mediaQueriesDefined = ()=>({
        type: IX2_MEDIA_QUERIES_DEFINED
    });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL2VuZ2luZS9hY3Rpb25zL0lYMkVuZ2luZUFjdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWN0aW9uVHlwZUNvbnN0cyxcbiAgSVgyRW5naW5lQWN0aW9uVHlwZXMsXG59IGZyb20gJ0BwYWNrYWdlcy9zeXN0ZW1zL2l4Mi9zaGFyZWQtY29uc3RhbnRzJztcblxuaW1wb3J0IHtJWDJWYW5pbGxhVXRpbHN9IGZyb20gJ0BwYWNrYWdlcy9zeXN0ZW1zL2l4Mi9zaGFyZWQnO1xuXG5pbXBvcnQgdHlwZSB7XG4gIEFjdGlvbkxpc3RJZCxcbiAgQWN0aW9uSWQsXG4gIEV2ZW50SWQsXG4gIENvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cElkLFxuICBBY3Rpb25UeXBlSWRUeXBlLFxuICBBY3Rpb25MaXN0c1R5cGUsXG4gIEV2ZW50c1R5cGUsXG4gIEV2ZW50VHlwZSxcbn0gZnJvbSAnQHBhY2thZ2VzL3N5c3RlbXMvaXgyL3R5cGVzLWNvcmUnO1xuaW1wb3J0IHtCcmVha3BvaW50SUR9IGZyb20gJ0BwYWNrYWdlcy9zeXN0ZW1zL3N0eWxlL3R5cGVzJztcblxuY29uc3Qge1xuICBJWDJfUkFXX0RBVEFfSU1QT1JURUQsXG4gIElYMl9TRVNTSU9OX0lOSVRJQUxJWkVELFxuICBJWDJfU0VTU0lPTl9TVEFSVEVELFxuICBJWDJfU0VTU0lPTl9TVE9QUEVELFxuICBJWDJfUFJFVklFV19SRVFVRVNURUQsXG4gIElYMl9QTEFZQkFDS19SRVFVRVNURUQsXG4gIElYMl9TVE9QX1JFUVVFU1RFRCxcbiAgSVgyX0NMRUFSX1JFUVVFU1RFRCxcbiAgSVgyX0VWRU5UX0xJU1RFTkVSX0FEREVELFxuICBJWDJfVEVTVF9GUkFNRV9SRU5ERVJFRCxcbiAgSVgyX0VWRU5UX1NUQVRFX0NIQU5HRUQsXG4gIElYMl9BTklNQVRJT05fRlJBTUVfQ0hBTkdFRCxcbiAgSVgyX1BBUkFNRVRFUl9DSEFOR0VELFxuICBJWDJfSU5TVEFOQ0VfQURERUQsXG4gIElYMl9JTlNUQU5DRV9TVEFSVEVELFxuICBJWDJfSU5TVEFOQ0VfUkVNT1ZFRCxcbiAgSVgyX0VMRU1FTlRfU1RBVEVfQ0hBTkdFRCxcbiAgSVgyX0FDVElPTl9MSVNUX1BMQVlCQUNLX0NIQU5HRUQsXG4gIElYMl9WSUVXUE9SVF9XSURUSF9DSEFOR0VELFxuICBJWDJfTUVESUFfUVVFUklFU19ERUZJTkVELFxufSA9IElYMkVuZ2luZUFjdGlvblR5cGVzO1xuXG5jb25zdCB7cmVpZnlTdGF0ZX0gPSBJWDJWYW5pbGxhVXRpbHM7XG5cbmV4cG9ydCB0eXBlIElYMlJhd0RhdGEgPSB7XG4gIGV2ZW50czogRXZlbnRzVHlwZTtcbiAgYWN0aW9uTGlzdHM6IEFjdGlvbkxpc3RzVHlwZTtcbiAgc2l0ZToge21lZGlhUXVlcmllczoge2tleTogQnJlYWtwb2ludElEOyBtaW46IG51bWJlcjsgbWF4OiBudW1iZXJ9W119O1xufTtcblxuZXhwb3J0IHR5cGUgcmF3RGF0YUltcG9ydGVkUGF5bG9hZCA9IHtcbiAgaXhEYXRhOiB7XG4gICAgZXZlbnRzOiBFdmVudHNUeXBlIHwgdW5kZWZpbmVkO1xuICAgIGFjdGlvbkxpc3RzOiBBY3Rpb25MaXN0c1R5cGUgfCB1bmRlZmluZWQ7XG4gICAgZXZlbnRUeXBlTWFwOiB7W2sgaW4gRXZlbnRUeXBlWydldmVudFR5cGVJZCddXToge1trZXk6IHN0cmluZ106IEV2ZW50VHlwZX19O1xuICAgIG1lZGlhUXVlcmllczogSVgyUmF3RGF0YVsnc2l0ZSddWydtZWRpYVF1ZXJpZXMnXTtcbiAgICBtZWRpYVF1ZXJ5S2V5czogQnJlYWtwb2ludElEW107XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgcmF3RGF0YUltcG9ydGVkID0gKHJhd0RhdGE6IElYMlJhd0RhdGEpID0+ICh7XG4gIHR5cGU6IElYMl9SQVdfREFUQV9JTVBPUlRFRCxcbiAgcGF5bG9hZDoge1xuICAgIC4uLnJlaWZ5U3RhdGUocmF3RGF0YSksXG4gIH0sXG59KTtcblxuZXhwb3J0IHR5cGUgc2Vzc2lvbkluaXRpYWxpemVkUGF5bG9hZCA9IHtcbiAgaGFzQm91bmRhcnlOb2RlczogYm9vbGVhbjtcbiAgcmVkdWNlZE1vdGlvbjogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXNzaW9uSW5pdGlhbGl6ZWQgPSAoe1xuICBoYXNCb3VuZGFyeU5vZGVzLFxuICByZWR1Y2VkTW90aW9uLFxufTogc2Vzc2lvbkluaXRpYWxpemVkUGF5bG9hZCkgPT4gKHtcbiAgdHlwZTogSVgyX1NFU1NJT05fSU5JVElBTElaRUQsXG4gIHBheWxvYWQ6IHtcbiAgICBoYXNCb3VuZGFyeU5vZGVzLFxuICAgIHJlZHVjZWRNb3Rpb24sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHNlc3Npb25TdGFydGVkID0gKCkgPT4gKHtcbiAgdHlwZTogSVgyX1NFU1NJT05fU1RBUlRFRCxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2Vzc2lvblN0b3BwZWQgPSAoKSA9PiAoe1xuICB0eXBlOiBJWDJfU0VTU0lPTl9TVE9QUEVELFxufSk7XG5cbmV4cG9ydCB0eXBlIHByZXZpZXdSZXF1ZXN0ZWRQYXlsb2FkID0ge1xuICByYXdEYXRhOiBJWDJSYXdEYXRhO1xuICBkZWZlcjogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBwcmV2aWV3UmVxdWVzdGVkID0gKHtcbiAgcmF3RGF0YSxcbiAgZGVmZXIsXG59OiBwcmV2aWV3UmVxdWVzdGVkUGF5bG9hZCkgPT4gKHtcbiAgdHlwZTogSVgyX1BSRVZJRVdfUkVRVUVTVEVELFxuICBwYXlsb2FkOiB7XG4gICAgZGVmZXIsXG4gICAgcmF3RGF0YSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgdHlwZSBwbGF5YmFja1JlcXVlc3RlZFBheWxvYWQgPSB7XG4gIGFjdGlvblR5cGVJZDpcbiAgICB8IHR5cGVvZiBBY3Rpb25UeXBlQ29uc3RzLkdFTkVSQUxfU1RBUlRfQUNUSU9OXG4gICAgfCB0eXBlb2YgQWN0aW9uVHlwZUNvbnN0cy5HRU5FUkFMX0NPTlRJTlVPVVNfQUNUSU9OO1xuICBhY3Rpb25MaXN0SWQ6IEFjdGlvbkxpc3RJZDtcbiAgYWN0aW9uSXRlbUlkOiBBY3Rpb25JZDtcbiAgZXZlbnRJZDogRXZlbnRJZDtcbiAgYWxsb3dFdmVudHM6IGJvb2xlYW47XG4gIGltbWVkaWF0ZTogYm9vbGVhbjtcbiAgdGVzdE1hbnVhbD86IGJvb2xlYW47XG4gIHZlcmJvc2U6IGJvb2xlYW47XG4gIHJhd0RhdGE6IElYMlJhd0RhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgcGxheWJhY2tSZXF1ZXN0ZWQgPSAoe1xuICBhY3Rpb25UeXBlSWQgPSBBY3Rpb25UeXBlQ29uc3RzLkdFTkVSQUxfU1RBUlRfQUNUSU9OLFxuICBhY3Rpb25MaXN0SWQsXG4gIGFjdGlvbkl0ZW1JZCxcbiAgZXZlbnRJZCxcbiAgYWxsb3dFdmVudHMsXG4gIGltbWVkaWF0ZSxcbiAgdGVzdE1hbnVhbCxcbiAgdmVyYm9zZSxcbiAgcmF3RGF0YSxcbn06IHBsYXliYWNrUmVxdWVzdGVkUGF5bG9hZCkgPT4gKHtcbiAgdHlwZTogSVgyX1BMQVlCQUNLX1JFUVVFU1RFRCxcbiAgcGF5bG9hZDoge1xuICAgIGFjdGlvblR5cGVJZCxcbiAgICBhY3Rpb25MaXN0SWQsXG4gICAgYWN0aW9uSXRlbUlkLFxuICAgIHRlc3RNYW51YWwsXG4gICAgZXZlbnRJZCxcbiAgICBhbGxvd0V2ZW50cyxcbiAgICBpbW1lZGlhdGUsXG4gICAgdmVyYm9zZSxcbiAgICByYXdEYXRhLFxuICB9LFxufSk7XG5cbmV4cG9ydCB0eXBlIHN0b3BSZXF1ZXN0ZWRQYXlsb2FkID0ge1xuICBhY3Rpb25MaXN0SWQ6IEFjdGlvbkxpc3RJZDtcbn07XG5cbmV4cG9ydCBjb25zdCBzdG9wUmVxdWVzdGVkID0gKFxuICBhY3Rpb25MaXN0SWQ6IHN0b3BSZXF1ZXN0ZWRQYXlsb2FkWydhY3Rpb25MaXN0SWQnXVxuKSA9PiAoe1xuICB0eXBlOiBJWDJfU1RPUF9SRVFVRVNURUQsXG4gIHBheWxvYWQ6IHtcbiAgICBhY3Rpb25MaXN0SWQsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGNsZWFyUmVxdWVzdGVkID0gKCkgPT4gKHtcbiAgdHlwZTogSVgyX0NMRUFSX1JFUVVFU1RFRCxcbn0pO1xuXG5leHBvcnQgdHlwZSBldmVudExpc3RlbmVyQWRkZWRQYXlsb2FkID0ge1xuICB0YXJnZXQ6IGFueTtcbiAgbGlzdGVuZXJQYXJhbXM6IGFueTtcbn07XG5cbmV4cG9ydCBjb25zdCBldmVudExpc3RlbmVyQWRkZWQgPSAoXG4gIHRhcmdldDogZXZlbnRMaXN0ZW5lckFkZGVkUGF5bG9hZFsndGFyZ2V0J10sXG4gIGxpc3RlbmVyUGFyYW1zOiBldmVudExpc3RlbmVyQWRkZWRQYXlsb2FkWydsaXN0ZW5lclBhcmFtcyddXG4pID0+ICh7XG4gIHR5cGU6IElYMl9FVkVOVF9MSVNURU5FUl9BRERFRCxcbiAgcGF5bG9hZDoge1xuICAgIHRhcmdldCxcbiAgICBsaXN0ZW5lclBhcmFtcyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgdHlwZSB0ZXN0RnJhbWVSZW5kZXJlZFBheWxvYWQgPSB7XG4gIHN0ZXA/OiBudW1iZXI7XG59O1xuXG5leHBvcnQgY29uc3QgdGVzdEZyYW1lUmVuZGVyZWQgPSAoXG4gIHN0ZXA6IHRlc3RGcmFtZVJlbmRlcmVkUGF5bG9hZFsnc3RlcCddID0gMVxuKSA9PiAoe1xuICB0eXBlOiBJWDJfVEVTVF9GUkFNRV9SRU5ERVJFRCxcbiAgcGF5bG9hZDoge1xuICAgIHN0ZXAsXG4gIH0sXG59KTtcblxuZXhwb3J0IHR5cGUgZXZlbnRTdGF0ZUNoYW5nZWRQYXlsb2FkID0ge1xuICBzdGF0ZUtleTogYW55O1xuICBuZXdTdGF0ZTogYW55O1xufTtcblxuZXhwb3J0IGNvbnN0IGV2ZW50U3RhdGVDaGFuZ2VkID0gKFxuICBzdGF0ZUtleTogZXZlbnRTdGF0ZUNoYW5nZWRQYXlsb2FkWydzdGF0ZUtleSddLFxuICBuZXdTdGF0ZTogZXZlbnRTdGF0ZUNoYW5nZWRQYXlsb2FkWyduZXdTdGF0ZSddXG4pID0+ICh7XG4gIHR5cGU6IElYMl9FVkVOVF9TVEFURV9DSEFOR0VELFxuICBwYXlsb2FkOiB7XG4gICAgc3RhdGVLZXksXG4gICAgbmV3U3RhdGUsXG4gIH0sXG59KTtcblxuZXhwb3J0IHR5cGUgYW5pbWF0aW9uRnJhbWVDaGFuZ2VkUGF5bG9hZCA9IHtcbiAgbm93OiBudW1iZXI7XG4gIHBhcmFtZXRlcnM6IGFueTtcbn07XG5cbmV4cG9ydCBjb25zdCBhbmltYXRpb25GcmFtZUNoYW5nZWQgPSAoXG4gIG5vdzogYW5pbWF0aW9uRnJhbWVDaGFuZ2VkUGF5bG9hZFsnbm93J10sXG4gIHBhcmFtZXRlcnM6IGFuaW1hdGlvbkZyYW1lQ2hhbmdlZFBheWxvYWRbJ3BhcmFtZXRlcnMnXVxuKSA9PiAoe1xuICB0eXBlOiBJWDJfQU5JTUFUSU9OX0ZSQU1FX0NIQU5HRUQsXG4gIHBheWxvYWQ6IHtcbiAgICBub3csXG4gICAgcGFyYW1ldGVycyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgcGFyYW1ldGVyQ2hhbmdlZCA9IChcbiAga2V5OiBDb250aW51b3VzUGFyYW1ldGVyR3JvdXBJZCxcbiAgdmFsdWU6IG51bWJlclxuKSA9PiAoe1xuICB0eXBlOiBJWDJfUEFSQU1FVEVSX0NIQU5HRUQsXG4gIHBheWxvYWQ6IHtcbiAgICBrZXksXG4gICAgdmFsdWUsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGluc3RhbmNlQWRkZWQgPSAob3B0aW9uczogYW55KSA9PiAoe1xuICB0eXBlOiBJWDJfSU5TVEFOQ0VfQURERUQsXG4gIHBheWxvYWQ6IHtcbiAgICAuLi5vcHRpb25zLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBpbnN0YW5jZVN0YXJ0ZWQgPSAoaW5zdGFuY2VJZDogc3RyaW5nLCB0aW1lOiBudW1iZXIpID0+ICh7XG4gIHR5cGU6IElYMl9JTlNUQU5DRV9TVEFSVEVELFxuICBwYXlsb2FkOiB7XG4gICAgaW5zdGFuY2VJZCxcbiAgICB0aW1lLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBpbnN0YW5jZVJlbW92ZWQgPSAoaW5zdGFuY2VJZDogc3RyaW5nKSA9PiAoe1xuICB0eXBlOiBJWDJfSU5TVEFOQ0VfUkVNT1ZFRCxcbiAgcGF5bG9hZDoge1xuICAgIGluc3RhbmNlSWQsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGVsZW1lbnRTdGF0ZUNoYW5nZWQgPSAoXG4gIGVsZW1lbnRJZDogYW55LFxuICBhY3Rpb25UeXBlSWQ6IEFjdGlvblR5cGVJZFR5cGUsXG4gIGN1cnJlbnQ6IGFueSxcbiAgYWN0aW9uSXRlbTogYW55XG4pID0+ICh7XG4gIHR5cGU6IElYMl9FTEVNRU5UX1NUQVRFX0NIQU5HRUQsXG4gIHBheWxvYWQ6IHtcbiAgICBlbGVtZW50SWQsXG4gICAgYWN0aW9uVHlwZUlkLFxuICAgIGN1cnJlbnQsXG4gICAgYWN0aW9uSXRlbSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgdHlwZSBhY3Rpb25MaXN0UGxheWJhY2tDaGFuZ2VkUGF5bG9hZCA9IHtcbiAgYWN0aW9uTGlzdElkOiBBY3Rpb25MaXN0SWQ7XG4gIGlzUGxheWluZzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb25MaXN0UGxheWJhY2tDaGFuZ2VkID0gKHtcbiAgYWN0aW9uTGlzdElkLFxuICBpc1BsYXlpbmcsXG59OiBhY3Rpb25MaXN0UGxheWJhY2tDaGFuZ2VkUGF5bG9hZCkgPT4gKHtcbiAgdHlwZTogSVgyX0FDVElPTl9MSVNUX1BMQVlCQUNLX0NIQU5HRUQsXG4gIHBheWxvYWQ6IHtcbiAgICBhY3Rpb25MaXN0SWQsXG4gICAgaXNQbGF5aW5nLFxuICB9LFxufSk7XG5cbmV4cG9ydCB0eXBlIHZpZXdwb3J0V2lkdGhDaGFuZ2VkUGF5bG9hZCA9IHtcbiAgd2lkdGg6IG51bWJlcjtcbiAgbWVkaWFRdWVyaWVzOiBhbnk7XG59O1xuXG5leHBvcnQgY29uc3Qgdmlld3BvcnRXaWR0aENoYW5nZWQgPSAoe1xuICB3aWR0aCxcbiAgbWVkaWFRdWVyaWVzLFxufTogdmlld3BvcnRXaWR0aENoYW5nZWRQYXlsb2FkKSA9PiAoe1xuICB0eXBlOiBJWDJfVklFV1BPUlRfV0lEVEhfQ0hBTkdFRCxcbiAgcGF5bG9hZDoge1xuICAgIHdpZHRoLFxuICAgIG1lZGlhUXVlcmllcyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgbWVkaWFRdWVyaWVzRGVmaW5lZCA9ICgpID0+ICh7XG4gIHR5cGU6IElYMl9NRURJQV9RVUVSSUVTX0RFRklORUQsXG59KTtcbiJdLCJuYW1lcyI6WyJhY3Rpb25MaXN0UGxheWJhY2tDaGFuZ2VkIiwiYW5pbWF0aW9uRnJhbWVDaGFuZ2VkIiwiY2xlYXJSZXF1ZXN0ZWQiLCJlbGVtZW50U3RhdGVDaGFuZ2VkIiwiZXZlbnRMaXN0ZW5lckFkZGVkIiwiZXZlbnRTdGF0ZUNoYW5nZWQiLCJpbnN0YW5jZUFkZGVkIiwiaW5zdGFuY2VSZW1vdmVkIiwiaW5zdGFuY2VTdGFydGVkIiwibWVkaWFRdWVyaWVzRGVmaW5lZCIsInBhcmFtZXRlckNoYW5nZWQiLCJwbGF5YmFja1JlcXVlc3RlZCIsInByZXZpZXdSZXF1ZXN0ZWQiLCJyYXdEYXRhSW1wb3J0ZWQiLCJzZXNzaW9uSW5pdGlhbGl6ZWQiLCJzZXNzaW9uU3RhcnRlZCIsInNlc3Npb25TdG9wcGVkIiwic3RvcFJlcXVlc3RlZCIsInRlc3RGcmFtZVJlbmRlcmVkIiwidmlld3BvcnRXaWR0aENoYW5nZWQiLCJJWDJfUkFXX0RBVEFfSU1QT1JURUQiLCJJWDJfU0VTU0lPTl9JTklUSUFMSVpFRCIsIklYMl9TRVNTSU9OX1NUQVJURUQiLCJJWDJfU0VTU0lPTl9TVE9QUEVEIiwiSVgyX1BSRVZJRVdfUkVRVUVTVEVEIiwiSVgyX1BMQVlCQUNLX1JFUVVFU1RFRCIsIklYMl9TVE9QX1JFUVVFU1RFRCIsIklYMl9DTEVBUl9SRVFVRVNURUQiLCJJWDJfRVZFTlRfTElTVEVORVJfQURERUQiLCJJWDJfVEVTVF9GUkFNRV9SRU5ERVJFRCIsIklYMl9FVkVOVF9TVEFURV9DSEFOR0VEIiwiSVgyX0FOSU1BVElPTl9GUkFNRV9DSEFOR0VEIiwiSVgyX1BBUkFNRVRFUl9DSEFOR0VEIiwiSVgyX0lOU1RBTkNFX0FEREVEIiwiSVgyX0lOU1RBTkNFX1NUQVJURUQiLCJJWDJfSU5TVEFOQ0VfUkVNT1ZFRCIsIklYMl9FTEVNRU5UX1NUQVRFX0NIQU5HRUQiLCJJWDJfQUNUSU9OX0xJU1RfUExBWUJBQ0tfQ0hBTkdFRCIsIklYMl9WSUVXUE9SVF9XSURUSF9DSEFOR0VEIiwiSVgyX01FRElBX1FVRVJJRVNfREVGSU5FRCIsIklYMkVuZ2luZUFjdGlvblR5cGVzIiwicmVpZnlTdGF0ZSIsIklYMlZhbmlsbGFVdGlscyIsInJhd0RhdGEiLCJ0eXBlIiwicGF5bG9hZCIsImhhc0JvdW5kYXJ5Tm9kZXMiLCJyZWR1Y2VkTW90aW9uIiwiZGVmZXIiLCJhY3Rpb25UeXBlSWQiLCJBY3Rpb25UeXBlQ29uc3RzIiwiR0VORVJBTF9TVEFSVF9BQ1RJT04iLCJhY3Rpb25MaXN0SWQiLCJhY3Rpb25JdGVtSWQiLCJldmVudElkIiwiYWxsb3dFdmVudHMiLCJpbW1lZGlhdGUiLCJ0ZXN0TWFudWFsIiwidmVyYm9zZSIsInRhcmdldCIsImxpc3RlbmVyUGFyYW1zIiwic3RlcCIsInN0YXRlS2V5IiwibmV3U3RhdGUiLCJub3ciLCJwYXJhbWV0ZXJzIiwia2V5IiwidmFsdWUiLCJvcHRpb25zIiwiaW5zdGFuY2VJZCIsInRpbWUiLCJlbGVtZW50SWQiLCJjdXJyZW50IiwiYWN0aW9uSXRlbSIsImlzUGxheWluZyIsIndpZHRoIiwibWVkaWFRdWVyaWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQXFSYUEseUJBQXlCO2VBQXpCQTs7SUFoRUFDLHFCQUFxQjtlQUFyQkE7O0lBdERBQyxjQUFjO2VBQWRBOztJQWtHQUMsbUJBQW1CO2VBQW5CQTs7SUF6RkFDLGtCQUFrQjtlQUFsQkE7O0lBNkJBQyxpQkFBaUI7ZUFBakJBOztJQXNDQUMsYUFBYTtlQUFiQTs7SUFlQUMsZUFBZTtlQUFmQTs7SUFSQUMsZUFBZTtlQUFmQTs7SUE4REFDLG1C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

}),
6011: (function (__unused_webpack_module, exports, __webpack_require__) {
"use strict";
// Array.includes needed for IE11 @packages/systems/ix2/shared-utils/quick-effects

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    actions: function() {
        return _IX2EngineActions;
    },
    destroy: function() {
        return destroy;
    },
    init: function() {
        return init;
    },
    setEnv: function() {
        return setEnv;
    },
    store: function() {
        return store;
    }
});
const _redux = __webpack_require__(9516);
const _IX2Reducer = /*#__PURE__*/ _interop_require_default(__webpack_require__(7243));
const _IX2VanillaEngine = __webpack_require__(1970);
const _IX2EngineActions = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(3946));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const store = (0, _redux.createStore)(_IX2Reducer.default);
function setEnv(env) {
    if (env()) {
        (0, _IX2VanillaEngine.observeRequests)(store);
    }
}
function init(rawData) {
    destroy();
    (0, _IX2VanillaEngine.startEngine)({
        store,
        rawData,
        allowEvents: true
    });
}
function destroy() {
    (0, _IX2VanillaEngine.stopEngine)(store);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL2VuZ2luZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBcnJheS5pbmNsdWRlcyBuZWVkZWQgZm9yIElFMTEgQHBhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC11dGlscy9xdWljay1lZmZlY3RzXG5pbXBvcnQgJ2NvcmUtanMvZmVhdHVyZXMvYXJyYXkvaW5jbHVkZXMnO1xuXG5pbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL0lYMlJlZHVjZXInO1xuaW1wb3J0IHtcbiAgc3RhcnRFbmdpbmUsXG4gIHN0b3BFbmdpbmUsXG4gIG9ic2VydmVSZXF1ZXN0cyxcbn0gZnJvbSAnLi9sb2dpYy9JWDJWYW5pbGxhRW5naW5lJztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zL0lYMkVuZ2luZUFjdGlvbnMnO1xuaW1wb3J0IHtcbiAgdHlwZSBJWDJSYXdEYXRhLFxuICB0eXBlIHJhd0RhdGFJbXBvcnRlZFBheWxvYWQsXG59IGZyb20gJy4vYWN0aW9ucy9JWDJFbmdpbmVBY3Rpb25zJztcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKTtcblxuZnVuY3Rpb24gc2V0RW52KGVudjogKGFyZzE/OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiBib29sZWFuKSB7XG4gIGlmIChlbnYoKSkge1xuICAgIG9ic2VydmVSZXF1ZXN0cyhzdG9yZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdChyYXdEYXRhOiBJWDJSYXdEYXRhKSB7XG4gIGRlc3Ryb3koKTtcblxuICBzdGFydEVuZ2luZSh7c3RvcmUsIHJhd0RhdGEsIGFsbG93RXZlbnRzOiB0cnVlfSk7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gIHN0b3BFbmdpbmUoc3RvcmUpO1xufVxuXG5leHBvcnQge1xuICBzZXRFbnYsXG4gIGluaXQsXG4gIGRlc3Ryb3ksXG4gIHN0b3JlLFxuICBhY3Rpb25zLFxuICB0eXBlIElYMlJhd0RhdGEsXG4gIHR5cGUgcmF3RGF0YUltcG9ydGVkUGF5bG9hZCxcbn07XG4iXSwibmFtZXMiOlsiYWN0aW9ucyIsImRlc3Ryb3kiLCJpbml0Iiwic2V0RW52Iiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJlbnYiLCJvYnNlcnZlUmVxdWVzdHMiLCJyYXdEYXRhIiwic3RhcnRFbmdpbmUiLCJhbGxvd0V2ZW50cyIsInN0b3BFbmdpbmUiXSwibWFwcGluZ3MiOiJBQUFBLGtGQUFrRjs7Ozs7Ozs7Ozs7O0lBdUNoRkEsT0FBTztlQUFQQTs7SUFGQUMsT0FBTztlQUFQQTs7SUFEQUMsSUFBSTtlQUFKQTs7SUFEQUMsTUFBTTtlQUFOQTs7SUFHQUMsS0FBSztlQUFMQTs7O3VCQW5Dd0I7bUVBQ047a0NBS2I7MEVBQ2tCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16QixNQUFNQSxRQUFRQyxJQUFBQSxrQkFBVyxFQUFDQyxtQkFBTztBQUVqQyxTQUFTSCxPQUFPSSxHQUFrRDtJQUNoRSxJQUFJQSxPQUFPO1FBQ1RDLElBQUFBLGlDQUFlLEVBQUNKO0lBQ2xCO0FBQ0Y7QUFFQSxTQUFTRixLQUFLTyxPQUFtQjtJQUMvQlI7SUFFQVMsSUFBQUEsNkJBQVcsRUFBQztRQUFDTjtRQUFPSztRQUFTRSxhQUFhO0lBQUk7QUFDaEQ7QUFFQSxTQUFTVjtJQUNQVyxJQUFBQSw0QkFBVSxFQUFDUjtBQUNiIn0=

}),
5012: (function (__unused_webpack_module, exports, __webpack_require__) {
"use strict";
/* eslint-env browser */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    elementContains: function() {
        return elementContains;
    },
    getChildElements: function() {
        return getChildElements;
    },
    getClosestElement: function() {
        return getClosestElement;
    },
    getProperty: function() {
        return getProperty;
    },
    getQuerySelector: function() {
        return getQuerySelector;
    },
    getRefType: function() {
        return getRefType;
    },
    getSiblingElements: function() {
        return getSiblingElements;
    },
    getStyle: function() {
        return getStyle;
    },
    getValidDocument: function() {
        return getValidDocument;
    },
    isSiblingNode: function() {
        return isSiblingNode;
    },
    matchSelector: function() {
        return matchSelector;
    },
    queryDocument: function() {
        return queryDocument;
    },
    setStyle: function() {
        return setStyle;
    }
});
const _shared = __webpack_require__(9468);
const _sharedconstants = __webpack_require__(7087);
const { ELEMENT_MATCHES } = _shared.IX2BrowserSupport;
const { IX2_ID_DELIMITER, HTML_ELEMENT, PLAIN_OBJECT, WF_PAGE } = _sharedconstants.IX2EngineConstants;
function setStyle(element, prop, value) {
    // @ts-expect-error - TS7015 - Element implicitly has an 'any' type because index expression is not of type 'number'.
    element.style[prop] = value;
}
function getStyle(element, prop) {
    if (prop.startsWith('--')) {
        return window.getComputedStyle(document.documentElement).getPropertyValue(prop);
    }
    if (element.style instanceof CSSStyleDeclaration) {
        // @ts-expect-error - TS7015 - Element implicitly has an 'any' type because index expression is not of type 'number'.
        return element.style[prop];
    }
}
function getProperty(element, prop) {
    // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'HTMLElement'.
    return element[prop];
}
function matchSelector(selector) {
    // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'HTMLElement'.
    return (element)=>element[ELEMENT_MATCHES](selector);
}
function getQuerySelector({ id, selector }) {
    if (id) {
        let nodeId = id;
        if (id.indexOf(IX2_ID_DELIMITER) !== -1) {
            const pair = id.split(IX2_ID_DELIMITER);
            const pageId = pair[0];
            // @ts-expect-error - TS2322 - Type 'string | undefined' is not assignable to type 'string'.
            nodeId = pair[1];
            // Short circuit query if we're on the wrong page
            if (pageId !== document.documentElement.getAttribute(WF_PAGE)) {
                return null;
            }
        }
        return `[data-w-id="${nodeId}"], [data-w-id^="${nodeId}_instance"]`;
    }
    return selector;
}
function getValidDocument(pageId) {
    if (pageId == null || pageId === document.documentElement.getAttribute(WF_PAGE)) {
        return document;
    }
    return null;
}
function queryDocument(baseSelector, descendantSelector) {
    return Array.prototype.slice.call(document.querySelectorAll(descendantSelector ? baseSelector + ' ' + descendantSelector : baseSelector));
}
function elementContains(parent, child) {
    return parent.contains(child);
}
function isSiblingNode(a, b) {
    return a !== b && a.parentNode === b.parentNode;
}
function getChildElements(// @ts-expect-error - TS2315 - Type 'NodeList' is not generic.
sourceElements) {
    const childElements = [];
    for(let i = 0, { length } = sourceElements || []; i < length; i++){
        const { children } = sourceElements[i];
        const { length: childCount } = children;
        if (!childCount) {
            continue;
        }
        for(let j = 0; j < childCount; j++){
            childElements.push(children[j]);
        }
    }
    return childElements;
}
function getSiblingElements(sourceElements = []) {
    const elements = [];
    const parentCache = [];
    for(let i = 0, { length } = sourceElements; i < length; i++){
        // @ts-expect-error - TS2339 - Property 'parentNode' does not exist on type 'undefined'.
        const { parentNode } = sourceElements[i];
        if (!parentNode || !parentNode.children || !parentNode.children.length) {
            continue;
        }
        if (parentCache.indexOf(parentNode) !== -1) {
            continue;
        }
        parentCache.push(parentNode);
        let el = parentNode.firstElementChild;
        while(el != null){
            if (sourceElements.indexOf(el) === -1) {
                elements.push(el);
            }
            el = el.nextElementSibling;
        }
    }
    return elements;
}
const getClosestElement = Element.prototype.closest ? (element, selector)=>{
    if (!document.documentElement.contains(element)) {
        return null;
    }
    return element.closest(selector);
} : (element, selector)=>{
    if (!document.documentElement.contains(element)) {
        return null;
    }
    let el = element;
    do {
        // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'HTMLElement'. | TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'HTMLElement'.
        if (el[ELEMENT_MATCHES] && el[ELEMENT_MATCHES](selector)) {
            return el;
        }
        // @ts-expect-error - TS2322 - Type 'ParentNode | null' is not assignable to type 'HTMLElement'.
        el = el.parentNode;
    }while (el != null);
    return null;
};
function getRefType(ref) {
    if (ref != null && typeof ref == 'object') {
        return ref instanceof Element ? HTML_ELEMENT : PLAIN_OBJECT;
    }
    return null;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL2VuZ2luZS9sb2dpYy9JWDJCcm93c2VyQXBpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuaW1wb3J0IHtJWDJCcm93c2VyU3VwcG9ydH0gZnJvbSAnQHBhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZCc7XG5pbXBvcnQge0lYMkVuZ2luZUNvbnN0YW50c30gZnJvbSAnQHBhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC1jb25zdGFudHMnO1xuY29uc3Qge0VMRU1FTlRfTUFUQ0hFU30gPSBJWDJCcm93c2VyU3VwcG9ydDtcbmNvbnN0IHtJWDJfSURfREVMSU1JVEVSLCBIVE1MX0VMRU1FTlQsIFBMQUlOX09CSkVDVCwgV0ZfUEFHRX0gPVxuICBJWDJFbmdpbmVDb25zdGFudHM7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHlsZShlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMTUgLSBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBpbmRleCBleHByZXNzaW9uIGlzIG5vdCBvZiB0eXBlICdudW1iZXInLlxuICBlbGVtZW50LnN0eWxlW3Byb3BdID0gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZShlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcDogc3RyaW5nKSB7XG4gIGlmIChwcm9wLnN0YXJ0c1dpdGgoJy0tJykpIHtcbiAgICByZXR1cm4gd2luZG93XG4gICAgICAuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpXG4gICAgICAuZ2V0UHJvcGVydHlWYWx1ZShwcm9wKTtcbiAgfVxuXG4gIGlmIChlbGVtZW50LnN0eWxlIGluc3RhbmNlb2YgQ1NTU3R5bGVEZWNsYXJhdGlvbikge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMTUgLSBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBpbmRleCBleHByZXNzaW9uIGlzIG5vdCBvZiB0eXBlICdudW1iZXInLlxuICAgIHJldHVybiBlbGVtZW50LnN0eWxlW3Byb3BdO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wZXJ0eShlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcDogc3RyaW5nKSB7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwNTMgLSBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBleHByZXNzaW9uIG9mIHR5cGUgJ3N0cmluZycgY2FuJ3QgYmUgdXNlZCB0byBpbmRleCB0eXBlICdIVE1MRWxlbWVudCcuXG4gIHJldHVybiBlbGVtZW50W3Byb3BdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hTZWxlY3RvcihcbiAgc2VsZWN0b3I6IHN0cmluZ1xuKTogKGFyZzE6IEhUTUxFbGVtZW50KSA9PiBib29sZWFuIHtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzA1MyAtIEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGV4cHJlc3Npb24gb2YgdHlwZSAnYW55JyBjYW4ndCBiZSB1c2VkIHRvIGluZGV4IHR5cGUgJ0hUTUxFbGVtZW50Jy5cbiAgcmV0dXJuIChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gZWxlbWVudFtFTEVNRU5UX01BVENIRVNdKHNlbGVjdG9yKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFF1ZXJ5U2VsZWN0b3Ioe1xuICBpZCxcbiAgc2VsZWN0b3IsXG59OiB7XG4gIGlkOiBudWxsIHwgdW5kZWZpbmVkIHwgc3RyaW5nO1xuICBzZWxlY3Rvcjogc3RyaW5nO1xufSkge1xuICBpZiAoaWQpIHtcbiAgICBsZXQgbm9kZUlkID0gaWQ7XG4gICAgaWYgKGlkLmluZGV4T2YoSVgyX0lEX0RFTElNSVRFUikgIT09IC0xKSB7XG4gICAgICBjb25zdCBwYWlyID0gaWQuc3BsaXQoSVgyX0lEX0RFTElNSVRFUik7XG4gICAgICBjb25zdCBwYWdlSWQgPSBwYWlyWzBdO1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjMyMiAtIFR5cGUgJ3N0cmluZyB8IHVuZGVmaW5lZCcgaXMgbm90IGFzc2lnbmFibGUgdG8gdHlwZSAnc3RyaW5nJy5cbiAgICAgIG5vZGVJZCA9IHBhaXJbMV07XG4gICAgICAvLyBTaG9ydCBjaXJjdWl0IHF1ZXJ5IGlmIHdlJ3JlIG9uIHRoZSB3cm9uZyBwYWdlXG4gICAgICBpZiAocGFnZUlkICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFdGX1BBR0UpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYFtkYXRhLXctaWQ9XCIke25vZGVJZH1cIl0sIFtkYXRhLXctaWRePVwiJHtub2RlSWR9X2luc3RhbmNlXCJdYDtcbiAgfVxuICByZXR1cm4gc2VsZWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWxpZERvY3VtZW50KHBhZ2VJZD86IG51bGwgfCBzdHJpbmcpIHtcbiAgaWYgKFxuICAgIHBhZ2VJZCA9PSBudWxsIHx8XG4gICAgcGFnZUlkID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFdGX1BBR0UpXG4gICkge1xuICAgIHJldHVybiBkb2N1bWVudDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5RG9jdW1lbnQoXG4gIGJhc2VTZWxlY3Rvcjogc3RyaW5nLFxuICBkZXNjZW5kYW50U2VsZWN0b3I/OiBudWxsIHwgc3RyaW5nXG4pOiBIVE1MRWxlbWVudFtdIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBkZXNjZW5kYW50U2VsZWN0b3JcbiAgICAgICAgPyBiYXNlU2VsZWN0b3IgKyAnICcgKyBkZXNjZW5kYW50U2VsZWN0b3JcbiAgICAgICAgOiBiYXNlU2VsZWN0b3JcbiAgICApXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50Q29udGFpbnMoXG4gIHBhcmVudDogSFRNTEVsZW1lbnQsXG4gIGNoaWxkOiBIVE1MRWxlbWVudFxuKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXJlbnQuY29udGFpbnMoY2hpbGQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTaWJsaW5nTm9kZShhOiBIVE1MRWxlbWVudCwgYjogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgcmV0dXJuIGEgIT09IGIgJiYgYS5wYXJlbnROb2RlID09PSBiLnBhcmVudE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGlsZEVsZW1lbnRzKFxuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzE1IC0gVHlwZSAnTm9kZUxpc3QnIGlzIG5vdCBnZW5lcmljLlxuICBzb3VyY2VFbGVtZW50czogQXJyYXk8SFRNTEVsZW1lbnQ+IHwgTm9kZUxpc3Q8SFRNTEVsZW1lbnQ+XG4pIHtcbiAgY29uc3QgY2hpbGRFbGVtZW50czogQXJyYXk8SFRNTEVsZW1lbnQgfCBhbnk+ID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDAsIHtsZW5ndGh9ID0gc291cmNlRWxlbWVudHMgfHwgW107IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHtjaGlsZHJlbn0gPSBzb3VyY2VFbGVtZW50c1tpXTtcbiAgICBjb25zdCB7bGVuZ3RoOiBjaGlsZENvdW50fSA9IGNoaWxkcmVuO1xuICAgIGlmICghY2hpbGRDb3VudCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRDb3VudDsgaisrKSB7XG4gICAgICBjaGlsZEVsZW1lbnRzLnB1c2goY2hpbGRyZW5bal0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNpYmxpbmdFbGVtZW50cyhcbiAgc291cmNlRWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBbXVxuKTogSFRNTEVsZW1lbnRbXSB7XG4gIGNvbnN0IGVsZW1lbnRzOiBBcnJheTxhbnk+ID0gW107XG4gIGNvbnN0IHBhcmVudENhY2hlOiBBcnJheTxhbnk+ID0gW107XG4gIGZvciAobGV0IGkgPSAwLCB7bGVuZ3RofSA9IHNvdXJjZUVsZW1lbnRzOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzM5IC0gUHJvcGVydHkgJ3BhcmVudE5vZGUnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ3VuZGVmaW5lZCcuXG4gICAgY29uc3Qge3BhcmVudE5vZGV9ID0gc291cmNlRWxlbWVudHNbaV07XG4gICAgaWYgKCFwYXJlbnROb2RlIHx8ICFwYXJlbnROb2RlLmNoaWxkcmVuIHx8ICFwYXJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChwYXJlbnRDYWNoZS5pbmRleE9mKHBhcmVudE5vZGUpICE9PSAtMSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHBhcmVudENhY2hlLnB1c2gocGFyZW50Tm9kZSk7XG4gICAgbGV0IGVsID0gcGFyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB3aGlsZSAoZWwgIT0gbnVsbCkge1xuICAgICAgaWYgKHNvdXJjZUVsZW1lbnRzLmluZGV4T2YoZWwpID09PSAtMSkge1xuICAgICAgICBlbGVtZW50cy5wdXNoKGVsKTtcbiAgICAgIH1cbiAgICAgIGVsID0gZWwubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzI3NzQgLSBUaGlzIGNvbmRpdGlvbiB3aWxsIGFsd2F5cyByZXR1cm4gdHJ1ZSBzaW5jZSB0aGlzIGZ1bmN0aW9uIGlzIGFsd2F5cyBkZWZpbmVkLiBEaWQgeW91IG1lYW4gdG8gY2FsbCBpdCBpbnN0ZWFkP1xuZXhwb3J0IGNvbnN0IGdldENsb3Nlc3RFbGVtZW50ID0gRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdFxuICA/IChlbGVtZW50OiBIVE1MRWxlbWVudCwgc2VsZWN0b3I6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnMoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpIGFzIEhUTUxFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICB9XG4gIDogKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzZWxlY3Rvcjogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgbGV0IGVsID0gZWxlbWVudDtcblxuICAgICAgZG8ge1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDUzIC0gRWxlbWVudCBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlIGJlY2F1c2UgZXhwcmVzc2lvbiBvZiB0eXBlICdhbnknIGNhbid0IGJlIHVzZWQgdG8gaW5kZXggdHlwZSAnSFRNTEVsZW1lbnQnLiB8IFRTNzA1MyAtIEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGV4cHJlc3Npb24gb2YgdHlwZSAnYW55JyBjYW4ndCBiZSB1c2VkIHRvIGluZGV4IHR5cGUgJ0hUTUxFbGVtZW50Jy5cbiAgICAgICAgaWYgKGVsW0VMRU1FTlRfTUFUQ0hFU10gJiYgZWxbRUxFTUVOVF9NQVRDSEVTXShzZWxlY3RvcikpIHtcbiAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjMyMiAtIFR5cGUgJ1BhcmVudE5vZGUgfCBudWxsJyBpcyBub3QgYXNzaWduYWJsZSB0byB0eXBlICdIVE1MRWxlbWVudCcuXG4gICAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcbiAgICAgIH0gd2hpbGUgKGVsICE9IG51bGwpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZlR5cGUocmVmOiBhbnkpIHtcbiAgaWYgKHJlZiAhPSBudWxsICYmIHR5cGVvZiByZWYgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gcmVmIGluc3RhbmNlb2YgRWxlbWVudCA/IEhUTUxfRUxFTUVOVCA6IFBMQUlOX09CSkVDVDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbiJdLCJuYW1lcyI6WyJlbGVtZW50Q29udGFpbnMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZ2V0Q2xvc2VzdEVsZW1lbnQiLCJnZXRQcm9wZXJ0eSIsImdldFF1ZXJ5U2VsZWN0b3IiLCJnZXRSZWZUeXBlIiwiZ2V0U2libGluZ0VsZW1lbnRzIiwiZ2V0U3R5bGUiLCJnZXRWYWxpZERvY3VtZW50IiwiaXNTaWJsaW5nTm9kZSIsIm1hdGNoU2VsZWN0b3IiLCJxdWVyeURvY3VtZW50Iiwic2V0U3R5bGUiLCJFTEVNRU5UX01BVENIRVMiLCJJWDJCcm93c2VyU3VwcG9ydCIsIklYMl9JRF9ERUxJTUlURVIiLCJIVE1MX0VMRU1FTlQiLCJQTEFJTl9PQkpFQ1QiLCJXRl9QQUdFIiwiSVgyRW5naW5lQ29uc3RhbnRzIiwiZWxlbWVudCIsInByb3AiLCJ2YWx1ZSIsInN0eWxlIiwic3RhcnRzV2l0aCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImdldFByb3BlcnR5VmFsdWUiLCJDU1NTdHlsZURlY2xhcmF0aW9uIiwic2VsZWN0b3IiLCJpZCIsIm5vZGVJZCIsImluZGV4T2YiLCJwYWlyIiwic3BsaXQiLCJwYWdlSWQiLCJnZXRBdHRyaWJ1dGUiLCJiYXNlU2VsZWN0b3IiLCJkZXNjZW5kYW50U2VsZWN0b3IiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJlbnQiLCJjaGlsZCIsImNvbnRhaW5zIiwiYSIsImIiLCJwYXJlbnROb2RlIiwic291cmNlRWxlbWVudHMiLCJjaGlsZEVsZW1lbnRzIiwiaSIsImxlbmd0aCIsImNoaWxkcmVuIiwiY2hpbGRDb3VudCIsImoiLCJwdXNoIiwiZWxlbWVudHMiLCJwYXJlbnRDYWNoZSIsImVsIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJFbGVtZW50IiwiY2xvc2VzdCIsInJlZiJdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCOzs7Ozs7Ozs7OztJQW9GTkEsZUFBZTtlQUFmQTs7SUFXQUMsZ0JBQWdCO2VBQWhCQTs7SUE4Q0hDLGlCQUFpQjtlQUFqQkE7O0lBcEhHQyxXQUFXO2VBQVhBOztJQVlBQyxnQkFBZ0I7ZUFBaEJBOztJQWtJQUMsVUFBVTtlQUFWQTs7SUFyREFDLGtCQUFrQjtlQUFsQkE7O0lBdEdBQyxRQUFRO2VBQVJBOztJQWlEQUMsZ0JBQWdCO2VBQWhCQTs7SUE4QkFDLGFBQWE7ZUFBYkE7O0lBN0RBQyxhQUFhO2VBQWJBOztJQXlDQUMsYUFBYTtlQUFiQTs7SUFoRUFDLFFBQVE7ZUFBUkE7Ozt3QkFOZ0I7aUNBQ0M7QUFDakMsTUFBTSxFQUFDQyxlQUFlLEVBQUMsR0FBR0MseUJBQWlCO0FBQzNDLE1BQU0sRUFBQ0MsZ0JBQWdCLEVBQUVDLFlBQVksRUFBRUMsWUFBWSxFQUFFQyxPQUFPLEVBQUMsR0FDM0RDLG1DQUFrQjtBQUViLFNBQVNQLFNBQVNRLE9BQW9CLEVBQUVDLElBQVksRUFBRUMsS0FBYTtJQUN4RSxxSEFBcUg7SUFDckhG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

}),
1970: (function (__unused_webpack_module, exports, __webpack_require__) {
"use strict";
/* eslint-env browser */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    observeRequests: function() {
        return observeRequests;
    },
    startActionGroup: function() {
        return startActionGroup;
    },
    startEngine: function() {
        return startEngine;
    },
    stopActionGroup: function() {
        return stopActionGroup;
    },
    stopAllActionGroups: function() {
        return stopAllActionGroups;
    },
    stopEngine: function() {
        return stopEngine;
    }
});
const _find = /*#__PURE__*/ _interop_require_default(__webpack_require__(9777));
const _get = /*#__PURE__*/ _interop_require_default(__webpack_require__(4738));
const _size = /*#__PURE__*/ _interop_require_default(__webpack_require__(4659));
const _omitBy = /*#__PURE__*/ _interop_require_default(__webpack_require__(3452));
const _isEmpty = /*#__PURE__*/ _interop_require_default(__webpack_require__(6633));
const _mapValues = /*#__PURE__*/ _interop_require_default(__webpack_require__(3729));
const _forEach = /*#__PURE__*/ _interop_require_default(__webpack_require__(2397));
const _throttle = /*#__PURE__*/ _interop_require_default(__webpack_require__(5082));
const _sharedconstants = __webpack_require__(7087);
const _shared = __webpack_require__(9468);
const _IX2EngineActions = __webpack_require__(3946);
const _IX2BrowserApi = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(5012));
const _IX2VanillaEvents = /*#__PURE__*/ _interop_require_default(__webpack_require__(8955));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const QuickEffectsIdList = Object.keys(_sharedconstants.QuickEffectIds);
const isQuickEffect = (actionTypeId)=>QuickEffectsIdList.includes(actionTypeId);
const { COLON_DELIMITER, BOUNDARY_SELECTOR, HTML_ELEMENT, RENDER_GENERAL, W_MOD_IX } = _sharedconstants.IX2EngineConstants;
const { getAffectedElements, getElementId, getDestinationValues, observeStore, getInstanceId, renderHTMLElement, clearAllStyles, getMaxDurationItemIndex, getComputedStyle, getInstanceOrigin, reduceListToGroup, shouldNamespaceEventParameter, getNamespacedParameterId, shouldAllowMediaQuery, cleanupHTMLElement, clearObjectCache, stringifyTarget, mediaQueriesEqual, shallowEqual } = _shared.IX2VanillaUtils;
const { isPluginType, createPluginInstance, getPluginDuration } = _shared.IX2VanillaPlugins;
const ua = navigator.userAgent;
const IS_MOBILE_SAFARI = ua.match(/iPad/i) || ua.match(/iPhone/);
// Keep throttled events at ~80fps to reduce reflows while maintaining render accuracy
const THROTTLED_EVENT_WAIT = 12;
function observeRequests(store) {
    observeStore({
        store,
        select: ({ ixRequest })=>ixRequest.preview,
        onChange: handlePreviewRequest
    });
    observeStore({
        store,
        select: ({ ixRequest })=>ixRequest.playback,
        onChange: handlePlaybackRequest
    });
    observeStore({
        store,
        select: ({ ixRequest })=>ixRequest.stop,
        onChange: handleStopRequest
    });
    observeStore({
        store,
        select: ({ ixRequest })=>ixRequest.clear,
        onChange: handleClearRequest
    });
}
function observeMediaQueryChange(store) {
    observeStore({
        store,
        select: ({ ixSession })=>ixSession.mediaQueryKey,
        onChange: ()=>{
            stopEngine(store);
            clearAllStyles({
                store,
                elementApi: _IX2BrowserApi
            });
            startEngine({
                store,
                allowEvents: true
            });
            dispatchPageUpdateEvent();
        }
    });
}
function observeOneRenderTick(store, onTick) {
    const unsubscribe = observeStore({
        store,
        select: ({ ixSession })=>ixSession.tick,
        // @ts-expect-error - TS7006 - Parameter 'tick' implicitly has an 'any' type.
        onChange: (tick)=>{
            onTick(tick);
            unsubscribe();
        }
    });
}
function handlePreviewRequest({ rawData, defer }, store) {
    const start = ()=>{
        startEngine({
            store,
            rawData,
            allowEvents: true
        });
        dispatchPageUpdateEvent();
    };
    defer ? setTimeout(start, 0) : start();
}
function dispatchPageUpdateEvent() {
    document.dispatchEvent(new CustomEvent('IX2_PAGE_UPDATE'));
}
function handlePlaybackRequest(playback, store) {
    const { actionTypeId, actionListId, actionItemId, eventId, allowEvents, immediate, testManual, verbose = true } = playback;
    let { rawData } = playback;
    if (actionListId && actionItemId && rawData && immediate) {
        const actionList = rawData.actionLists[actionListId];
        if (actionList) {
            rawData = reduceListToGroup({
                actionList,
                actionItemId,
                rawData
            });
        }
    }
    startEngine({
        store,
        rawData,
        allowEvents,
        testManual
    });
    if (actionListId && actionTypeId === _sharedconstants.ActionTypeConsts.GENERAL_START_ACTION || isQuickEffect(actionTypeId)) {
        // @ts-expect-error - TS2345 - Argument of type '{ store: any; actionListId: any; }' is not assignable to parameter of type '{ store: any; eventId: any; eventTarget: any; eventStateKey: any; actionListId: any; }'.
        stopActionGroup({
            store,
            actionListId
        });
        renderInitialGroup({
            store,
            actionListId,
            eventId
        });
        // @ts-expect-error - TS2345 - Argument of type '{ store: any; eventId: any; actionListId: any; immediate: any; verbose: any; }' is not assignable to parameter of type '{ store: any; eventId: any; eventTarget: any; eventStateKey: any; actionListId: any; groupIndex?: number | undefined; immediate: any; verbose: any; }'.
        const started = startActionGroup({
            store,
            eventId,
            actionListId,
            immediate,
            verbose
        });
        if (verbose && started) {
            store.dispatch((0, _IX2EngineActions.actionListPlaybackChanged)({
                actionListId,
                isPlaying: !immediate
            }));
        }
    }
}
function handleStopRequest({ actionListId }, store) {
    if (actionListId) {
        // @ts-expect-error - TS2345 - Argument of type '{ store: any; actionListId: any; }' is not assignable to parameter of type '{ store: any; eventId: any; eventTarget: any; eventStateKey: any; actionListId: any; }'.
        stopActionGroup({
            store,
            actionListId
        });
    } else {
        stopAllActionGroups({
            store
        });
    }
    stopEngine(store);
}
function handleClearRequest(state, store) {
    stopEngine(store);
    clearAllStyles({
        store,
        elementApi: _IX2BrowserApi
    });
}
function startEngine({ store, rawData, allowEvents, testManual }) {
    const { ixSession } = store.getState();
    if (rawData) {
        store.dispatch((0, _IX2EngineActions.rawDataImported)(rawData));
    }
    if (!ixSession.active) {
        store.dispatch((0, _IX2EngineActions.sessionInitialized)({
            hasBoundaryNodes: Boolean(document.querySelector(BOUNDARY_SELECTOR)),
            reducedMotion: document.body.hasAttribute('data-wf-ix-vacation') && window.matchMedia('(prefers-reduced-motion)').matches
        }));
        if (allowEvents) {
            bindEvents(store);
            addDocumentClass();
            if (store.getState().ixSession.hasDefinedMediaQueries) {
                observeMediaQueryChange(store);
            }
        }
        store.dispatch((0, _IX2EngineActions.sessionStarted)());
        startRenderLoop(store, testManual);
    }
}
function addDocumentClass() {
    const { documentElement } = document;
    if (documentElement.className.indexOf(W_MOD_IX) === -1) {
        documentElement.className += ` ${W_MOD_IX}`;
    }
}
function startRenderLoop(store, testManual) {
    const handleFrame = (now)=>{
        const { ixSession, ixParameters } = store.getState();
        if (ixSession.active) {
            store.dispatch((0, _IX2EngineActions.animationFrameChanged)(now, ixParameters));
            if (testManual) {
                observeOneRenderTick(store, handleFrame);
            } else {
                requestAnimationFrame(handleFrame);
            }
        }
    };
    handleFrame(window.performance.now());
}
function stopEngine(store) {
    const { ixSession } = store.getState();
    if (ixSession.active) {
        const { eventListeners } = ixSession;
        eventListeners.forEach(clearEventListener);
        clearObjectCache();
        store.dispatch((0, _IX2EngineActions.sessionStopped)());
    }
}
// @ts-expect-error - TS7031 - Binding element 'target' implicitly has an 'any' type. | TS7031 - Binding element 'listenerParams' implicitly has an 'any' type.
function clearEventListener({ target, listenerParams }) {
    // eslint-disable-next-line prefer-spread
    target.removeEventListener.apply(target, listenerParams);
}
function createGroupInstances({ // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
store, // @ts-expect-error - TS7031 - Binding element 'eventStateKey' implicitly has an 'any' type.
eventStateKey, // @ts-expect-error - TS7031 - Binding element 'eventTarget' implicitly has an 'any' type.
eventTarget, // @ts-expect-error - TS7031 - Binding element 'eventId' implicitly has an 'any' type.
eventId, // @ts-expect-error - TS7031 - Binding element 'eventConfig' implicitly has an 'any' type.
eventConfig, // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
actionListId, // @ts-expect-error - TS7031 - Binding element 'parameterGroup' implicitly has an 'any' type.
parameterGroup, // @ts-expect-error - TS7031 - Binding element 'smoothing' implicitly has an 'any' type.
smoothing, // @ts-expect-error - TS7031 - Binding element 'restingValue' implicitly has an 'any' type.
restingValue }) {
    const { ixData, ixSession } = store.getState();
    const { events } = ixData;
    const event = events[eventId];
    const { eventTypeId } = event;
    const targetCache = {};
    const instanceActionGroups = {};
    const instanceConfigs = [];
    const { continuousActionGroups } = parameterGroup;
    let { id: parameterId } = parameterGroup;
    if (shouldNamespaceEventParameter(eventTypeId, eventConfig)) {
        parameterId = getNamespacedParameterId(eventStateKey, parameterId);
    }
    // Limit affected elements when event target is within a boundary node
    const eventElementRoot = ixSession.hasBoundaryNodes && eventTarget ? _IX2BrowserApi.getClosestElement(eventTarget, BOUNDARY_SELECTOR) : null;
    // @ts-expect-error - TS7006 - Parameter 'actionGroup' implicitly has an 'any' type.
    continuousActionGroups.forEach((actionGroup)=>{
        const { keyframe, actionItems } = actionGroup;
        // @ts-expect-error - TS7006 - Parameter 'actionItem' implicitly has an 'any' type.
        actionItems.forEach((actionItem)=>{
            const { actionTypeId } = actionItem;
            const { target } = actionItem.config;
            if (!target) {
                return;
            }
            const elementRoot = target.boundaryMode ? eventElementRoot : null;
            const key = stringifyTarget(target) + COLON_DELIMITER + actionTypeId;
            instanceActionGroups[key] = appendActionItem(instanceActionGroups[key], keyframe, actionItem);
            if (!targetCache[key]) {
                targetCache[key] = true;
                const { config } = actionItem;
                getAffectedElements({
                    config,
                    event,
                    eventTarget,
                    elementRoot,
                    elementApi: _IX2BrowserApi
                }).forEach((element)=>{
                    instanceConfigs.push({
                        element,
                        key
                    });
                });
            }
        });
    });
    instanceConfigs.forEach(({ element, key })=>{
        const actionGroups = instanceActionGroups[key];
        const actionItem = (0, _get.default)(actionGroups, `[0].actionItems[0]`, {});
        const { actionTypeId } = actionItem;
        const shouldUsePlugin = // If it's targeted by class, don't query the element by pluginElementId
        actionTypeId === _sharedconstants.ActionTypeConsts.PLUGIN_RIVE ? (actionItem.config?.target?.selectorGuids || []).length === 0 : isPluginType(actionTypeId);
        const pluginInstance = shouldUsePlugin ? createPluginInstance(actionTypeId)?.(element, actionItem) : null;
        const destination = getDestinationValues({
            element,
            actionItem,
            elementApi: _IX2BrowserApi
        }, // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        pluginInstance);
        createInstance({
            store,
            element,
            eventId,
            actionListId,
            actionItem,
            destination,
            continuous: true,
            parameterId,
            actionGroups,
            smoothing,
            restingValue,
            pluginInstance
        });
    });
}
function appendActionItem(actionGroups = [], keyframe, actionItem) {
    const newActionGroups = [
        ...actionGroups
    ];
    let groupIndex;
    newActionGroups.some((group, index)=>{
        // @ts-expect-error - TS2339 - Property 'keyframe' does not exist on type 'never'.
        if (group.keyframe === keyframe) {
            groupIndex = index;
            return true;
        }
        return false;
    });
    if (groupIndex == null) {
        groupIndex = newActionGroups.length;
        // @ts-expect-error - TS2345 - Argument of type '{ keyframe: any; actionItems: never[]; }' is not assignable to parameter of type 'never'.
        newActionGroups.push({
            keyframe,
            actionItems: []
        });
    }
    // @ts-expect-error - TS2339 - Property 'actionItems' does not exist on type 'never'.
    newActionGroups[groupIndex].actionItems.push(actionItem);
    return newActionGroups;
}
function bindEvents(store) {
    const { ixData } = store.getState();
    const { eventTypeMap } = ixData;
    updateViewportWidth(store);
    (0, _forEach.default)(eventTypeMap, (events, key)=>{
        // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ SLIDER_ACTIVE: { handler: (options: any, state: any) => any; types: string; }; SLIDER_INACTIVE: { handler: (options: any, state: any) => any; types: string; }; DROPDOWN_OPEN: { handler: (options: any, state: any) => any; types: string; }; ... 21 more ...; PAGE_START: { ...; }; }'.
        const logic = _IX2VanillaEvents.default[key];
        if (!logic) {
            console.warn(`IX2 event type not configured: ${key}`);
            return;
        }
        bindEventType({
            // @ts-expect-error - TS7031 - Binding element 'logic' implicitly has an 'any' type.
            logic,
            store,
            events
        });
    });
    const { ixSession } = store.getState();
    if (ixSession.eventListeners.length) {
        bindResizeEvents(store);
    }
}
const WINDOW_RESIZE_EVENTS = [
    'resize',
    'orientationchange'
];
function bindResizeEvents(store) {
    const handleResize = ()=>{
        updateViewportWidth(store);
    };
    WINDOW_RESIZE_EVENTS.forEach((type)=>{
        window.addEventListener(type, handleResize);
        store.dispatch((0, _IX2EngineActions.eventListenerAdded)(window, [
            type,
            handleResize
        ]));
    });
    handleResize();
}
function updateViewportWidth(store) {
    const { ixSession, ixData } = store.getState();
    const width = window.innerWidth;
    if (width !== ixSession.viewportWidth) {
        const { mediaQueries } = ixData;
        store.dispatch((0, _IX2EngineActions.viewportWidthChanged)({
            width,
            mediaQueries
        }));
    }
}
const mapFoundValues = (object, iteratee)=>(0, _omitBy.default)((0, _mapValues.default)(object, iteratee), _isEmpty.default);
const forEachEventTarget = (eventTargets, eventCallback)=>{
    (0, _forEach.default)(eventTargets, (elements, eventId)=>{
        // @ts-expect-error - TS7006 - Parameter 'element' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type.
        elements.forEach((element, index)=>{
            const eventStateKey = eventId + COLON_DELIMITER + index;
            eventCallback(element, eventId, eventStateKey);
        });
    });
};
const getAffectedForEvent = (event)=>{
    const config = {
        target: event.target,
        targets: event.targets
    };
    return getAffectedElements({
        config,
        elementApi: _IX2BrowserApi
    });
};
// @ts-expect-error - TS7031 - Binding element 'logic' implicitly has an 'any' type. | TS7031 - Binding element 'store' implicitly has an 'any' type. | TS7031 - Binding element 'events' implicitly has an 'any' type.
function bindEventType({ logic, store, events }) {
    injectBehaviorCSSFixes(events);
    const { types: eventTypes, handler: eventHandler } = logic;
    const { ixData } = store.getState();
    const { actionLists } = ixData;
    const eventTargets = mapFoundValues(events, getAffectedForEvent);
    if (!(0, _size.default)(eventTargets)) {
        return;
    }
    (0, _forEach.default)(eventTargets, (elements, key)=>{
        const event = events[key];
        const { action: eventAction, id: eventId, mediaQueries = ixData.mediaQueryKeys } = event;
        const { actionListId } = eventAction.config;
        if (!mediaQueriesEqual(mediaQueries, ixData.mediaQueryKeys)) {
            store.dispatch((0, _IX2EngineActions.mediaQueriesDefined)());
        }
        if (eventAction.actionTypeId === _sharedconstants.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
            const configs = Array.isArray(event.config) ? event.config : [
                event.config
            ];
            // @ts-expect-error - TS7006 - Parameter 'eventConfig' implicitly has an 'any' type.
            configs.forEach((eventConfig)=>{
                const { continuousParameterGroupId } = eventConfig;
                const paramGroups = (0, _get.default)(actionLists, `${actionListId}.continuousParameterGroups`, []);
                const parameterGroup = (0, _find.default)(paramGroups, ({ id })=>id === continuousParameterGroupId);
                const smoothing = (eventConfig.smoothing || 0) / 100;
                const restingValue = (eventConfig.restingState || 0) / 100;
                if (!parameterGroup) {
                    return;
                }
                elements.forEach((eventTarget, index)=>{
                    const eventStateKey = eventId + COLON_DELIMITER + index;
                    createGroupInstances({
                        store,
                        eventStateKey,
                        eventTarget,
                        eventId,
                        eventConfig,
                        actionListId,
                        parameterGroup,
                        smoothing,
                        restingValue
                    });
                });
            });
        }
        if (eventAction.actionTypeId === _sharedconstants.ActionTypeConsts.GENERAL_START_ACTION || isQuickEffect(eventAction.actionTypeId)) {
            renderInitialGroup({
                store,
                actionListId,
                eventId
            });
        }
    });
    const handleEvent = (nativeEvent)=>{
        const { ixSession } = store.getState();
        forEachEventTarget(eventTargets, (element, eventId, eventStateKey)=>{
            const event = events[eventId];
            const oldState = ixSession.eventState[eventStateKey];
            const { action: eventAction, mediaQueries = ixData.mediaQueryKeys } = event;
            // Bypass event handler if current media query is not listed in event config
            if (!shouldAllowMediaQuery(mediaQueries, ixSession.mediaQueryKey)) {
                return;
            }
            const handleEventWithConfig = (eventConfig = {})=>{
                const newState = eventHandler({
                    store,
                    element,
                    event,
                    eventConfig,
                    nativeEvent,
                    eventStateKey
                }, oldState);
                if (!shallowEqual(newState, oldState)) {
                    store.dispatch((0, _IX2EngineActions.eventStateChanged)(eventStateKey, newState));
                }
            };
            if (eventAction.actionTypeId === _sharedconstants.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                const configs = Array.isArray(event.config) ? event.config : [
                    event.config
                ];
                configs.forEach(handleEventWithConfig);
            } else {
                handleEventWithConfig();
            }
        });
    };
    const handleEventThrottled = (0, _throttle.default)(handleEvent, THROTTLED_EVENT_WAIT);
    const addListeners = ({ target = document, // @ts-expect-error - TS7031 - Binding element 'types' implicitly has an 'any' type.
    types, // @ts-expect-error - TS7031 - Binding element 'shouldThrottle' implicitly has an 'any' type.
    throttle: shouldThrottle })=>{
        types.split(' ').filter(Boolean)// @ts-expect-error - TS7006 - Parameter 'type' implicitly has an 'any' type.
        .forEach((type)=>{
            const handlerFunc = shouldThrottle ? handleEventThrottled : handleEvent;
            target.addEventListener(type, handlerFunc);
            store.dispatch((0, _IX2EngineActions.eventListenerAdded)(target, [
                type,
                handlerFunc
            ]));
        });
    };
    if (Array.isArray(eventTypes)) {
        eventTypes.forEach(addListeners);
    } else if (typeof eventTypes === 'string') {
        addListeners(logic);
    }
}
/**
 * Injects CSS into the document to fix behavior issues across
 * different devices.
 */ function injectBehaviorCSSFixes(events) {
    if (!IS_MOBILE_SAFARI) {
        return;
    }
    const injectedSelectors = {};
    let cssText = '';
    for(const eventId in events){
        const { eventTypeId, target } = events[eventId];
        const selector = _IX2BrowserApi.getQuerySelector(target);
        // @ts-expect-error - TS2538 - Type 'null' cannot be used as an index type.
        if (injectedSelectors[selector]) {
            continue;
        }
        // add a "cursor: pointer" style rule to ensure that CLICK events get fired for IOS devices
        if (eventTypeId === _sharedconstants.EventTypeConsts.MOUSE_CLICK || eventTypeId === _sharedconstants.EventTypeConsts.MOUSE_SECOND_CLICK) {
            // @ts-expect-error - TS2538 - Type 'null' cannot be used as an index type.
            injectedSelectors[selector] = true;
            cssText += selector + '{' + 'cursor: pointer;' + 'touch-action: manipulation;' + '}';
        }
    }
    if (cssText) {
        const style = document.createElement('style');
        style.textContent = cssText;
        document.body.appendChild(style);
    }
}
function renderInitialGroup({ store, actionListId, eventId }) {
    const { ixData, ixSession } = store.getState();
    const { actionLists, events } = ixData;
    // @ts-expect-error - TS18048 - 'events' is possibly 'undefined'.
    const event = events[eventId];
    // @ts-expect-error - TS18048 - 'actionLists' is possibly 'undefined'.
    const actionList = actionLists[actionListId];
    // @ts-expect-error - Property 'useFirstGroupAsInitialState' does not exist on type 'ActionListType'.
    if (actionList && actionList.useFirstGroupAsInitialState) {
        const initialStateItems = (0, _get.default)(actionList, 'actionItemGroups[0].actionItems', []);
        // Bypass initial state render if current media query is not listed in event config
        const mediaQueries = (0, _get.default)(event, 'mediaQueries', ixData.mediaQueryKeys);
        if (!shouldAllowMediaQuery(mediaQueries, ixSession.mediaQueryKey)) {
            return;
        }
        initialStateItems.forEach((actionItem)=>{
            const { config: itemConfig, actionTypeId } = actionItem;
            const config = // When useEventTarget is explicitly true, use event target/targets to query elements
            // However, skip this condition when objectId is defined
            // @ts-expect-error - Property 'target' does not exist on type 'never'.
            itemConfig?.target?.useEventTarget === true && // @ts-expect-error - Property 'target' does not exist on type 'never'.
            itemConfig?.target?.objectId == null ? {
                target: event.target,
                targets: event.targets
            } : itemConfig;
            const itemElements = getAffectedElements({
                config,
                event,
                elementApi: _IX2BrowserApi
            });
            const shouldUsePlugin = isPluginType(actionTypeId);
            itemElements.forEach((element)=>{
                const pluginInstance = shouldUsePlugin ? createPluginInstance(actionTypeId)?.(element, actionItem) : null;
                createInstance({
                    destination: getDestinationValues({
                        element,
                        actionItem,
                        elementApi: _IX2BrowserApi
                    }, // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    pluginInstance),
                    immediate: true,
                    store,
                    element,
                    eventId,
                    actionItem,
                    actionListId,
                    pluginInstance
                });
            });
        });
    }
}
function stopAllActionGroups({ store }) {
    const { ixInstances } = store.getState();
    (0, _forEach.default)(ixInstances, (instance)=>{
        if (!instance.continuous) {
            const { actionListId, verbose } = instance;
            removeInstance(instance, store);
            if (verbose) {
                store.dispatch((0, _IX2EngineActions.actionListPlaybackChanged)({
                    actionListId,
                    isPlaying: false
                }));
            }
        }
    });
}
function stopActionGroup({ // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
store, // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
eventId, // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
eventTarget, // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
eventStateKey, // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
actionListId }) {
    const { ixInstances, ixSession } = store.getState();
    // Check for element boundary before stopping engine instances
    const eventElementRoot = ixSession.hasBoundaryNodes && eventTarget ? _IX2BrowserApi.getClosestElement(eventTarget, BOUNDARY_SELECTOR) : null;
    (0, _forEach.default)(ixInstances, (instance)=>{
        const boundaryMode = (0, _get.default)(instance, 'actionItem.config.target.boundaryMode');
        // Validate event key if eventStateKey was provided, otherwise default to true
        const validEventKey = eventStateKey ? instance.eventStateKey === eventStateKey : true;
        // Remove engine instances that match the required ids
        if (instance.actionListId === actionListId && instance.eventId === eventId && validEventKey) {
            // Avoid removal when root boundary does not contain instance element
            if (eventElementRoot && boundaryMode && !_IX2BrowserApi.elementContains(eventElementRoot, instance.element)) {
                return;
            }
            removeInstance(instance, store);
            if (instance.verbose) {
                store.dispatch((0, _IX2EngineActions.actionListPlaybackChanged)({
                    actionListId,
                    isPlaying: false
                }));
            }
        }
    });
}
function startActionGroup({ // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
store, // @ts-expect-error - TS7031 - Binding element 'eventId' implicitly has an 'any' type.
eventId, // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
eventTarget, // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
eventStateKey, // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
actionListId, groupIndex = 0, // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
immediate, // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
verbose }) {
    const { ixData, ixSession } = store.getState();
    const { events } = ixData;
    const event = events[eventId] || {};
    const { mediaQueries = ixData.mediaQueryKeys } = event;
    const actionList = (0, _get.default)(ixData, `actionLists.${actionListId}`, {});
    const { actionItemGroups, useFirstGroupAsInitialState } = actionList;
    // Abort playback if no action groups
    if (!actionItemGroups || !actionItemGroups.length) {
        return false;
    }
    // Reset to first group when event loop is configured
    if (groupIndex >= actionItemGroups.length && (0, _get.default)(event, 'config.loop')) {
        groupIndex = 0;
    }
    // Skip initial state group during action list playback, as it should already be applied
    if (groupIndex === 0 && useFirstGroupAsInitialState) {
        groupIndex++;
    }
    // Identify first animated group and apply the initial QuickEffect delay
    const isFirstGroup = groupIndex === 0 || groupIndex === 1 && useFirstGroupAsInitialState;
    const instanceDelay = isFirstGroup && isQuickEffect(event.action?.actionTypeId) ? event.config.delay : undefined;
    // Abort playback if no action items exist at group index
    const actionItems = (0, _get.default)(actionItemGroups, [
        groupIndex,
        'actionItems'
    ], []);
    if (!actionItems.length) {
        return false;
    }
    // Abort playback if current media query is not listed in event config
    if (!shouldAllowMediaQuery(mediaQueries, ixSession.mediaQueryKey)) {
        return false;
    }
    // Limit affected elements when event target is within a boundary node
    const eventElementRoot = ixSession.hasBoundaryNodes && eventTarget ? _IX2BrowserApi.getClosestElement(eventTarget, BOUNDARY_SELECTOR) : null;
    const carrierIndex = getMaxDurationItemIndex(actionItems);
    let groupStartResult = false;
    // @ts-expect-error - TS7006 - Parameter 'actionItem' implicitly has an 'any' type. | TS7006 - Parameter 'actionIndex' implicitly has an 'any' type.
    actionItems.forEach((actionItem, actionIndex)=>{
        const { config, actionTypeId } = actionItem;
        const shouldUsePlugin = isPluginType(actionTypeId);
        const { target } = config;
        if (!target) {
            return;
        }
        const elementRoot = target.boundaryMode ? eventElementRoot : null;
        const elements = getAffectedElements({
            config,
            event,
            eventTarget,
            elementRoot,
            elementApi: _IX2BrowserApi
        });
        elements.forEach((element, elementIndex)=>{
            const pluginInstance = shouldUsePlugin ? createPluginInstance(actionTypeId)?.(element, actionItem) : null;
            const pluginDuration = shouldUsePlugin ? getPluginDuration(actionTypeId)(element, actionItem) : null;
            groupStartResult = true;
            const isCarrier = carrierIndex === actionIndex && elementIndex === 0;
            const computedStyle = getComputedStyle({
                element,
                actionItem
            });
            const destination = getDestinationValues({
                element,
                actionItem,
                elementApi: _IX2BrowserApi
            }, // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            pluginInstance);
            createInstance({
                store,
                element,
                actionItem,
                eventId,
                eventTarget,
                eventStateKey,
                actionListId,
                groupIndex,
                isCarrier,
                computedStyle,
                destination,
                immediate,
                verbose,
                pluginInstance,
                pluginDuration,
                instanceDelay
            });
        });
    });
    return groupStartResult;
}
// @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type.
function createInstance(options) {
    const { store, computedStyle, ...rest } = options;
    const { element, actionItem, immediate, pluginInstance, continuous, restingValue, eventId } = rest;
    const autoStart = !continuous;
    const instanceId = getInstanceId();
    const { ixElements, ixSession, ixData } = store.getState();
    const elementId = getElementId(ixElements, element);
    const { refState } = ixElements[elementId] || {};
    const refType = _IX2BrowserApi.getRefType(element);
    const skipMotion = // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ readonly TRANSFORM_MOVE: true; readonly TRANSFORM_SCALE: true; readonly TRANSFORM_ROTATE: true; readonly TRANSFORM_SKEW: true; readonly STYLE_SIZE: true; readonly STYLE_FILTER: true; readonly STYLE_FONT_VARIATION: true; }'.
    ixSession.reducedMotion && _sharedconstants.ReducedMotionTypes[actionItem.actionTypeId];
    let skipToValue;
    if (skipMotion && continuous) {
        switch(ixData.events[eventId]?.eventTypeId){
            case _sharedconstants.EventTypeConsts.MOUSE_MOVE:
            case _sharedconstants.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                skipToValue = restingValue;
                break;
            default:
                skipToValue = 0.5;
                break;
        }
    }
    const origin = getInstanceOrigin(element, refState, computedStyle, actionItem, _IX2BrowserApi, // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    pluginInstance);
    store.dispatch((0, _IX2EngineActions.instanceAdded)({
        instanceId,
        elementId,
        origin,
        refType,
        skipMotion,
        skipToValue,
        ...rest
    }));
    dispatchCustomEvent(document.body, 'ix2-animation-started', instanceId);
    if (immediate) {
        renderImmediateInstance(store, instanceId);
        return;
    }
    observeStore({
        store,
        // @ts-expect-error - TS7031 - Binding element 'ixInstances' implicitly has an 'any' type.
        select: ({ ixInstances })=>ixInstances[instanceId],
        onChange: handleInstanceChange
    });
    if (autoStart) {
        store.dispatch((0, _IX2EngineActions.instanceStarted)(instanceId, ixSession.tick));
    }
}
function removeInstance(instance, store) {
    dispatchCustomEvent(document.body, 'ix2-animation-stopping', {
        instanceId: instance.id,
        state: store.getState()
    });
    const { elementId, actionItem } = instance;
    const { ixElements } = store.getState();
    const { ref, refType } = ixElements[elementId] || {};
    if (refType === HTML_ELEMENT) {
        cleanupHTMLElement(ref, actionItem, _IX2BrowserApi);
    }
    store.dispatch((0, _IX2EngineActions.instanceRemoved)(instance.id));
}
function dispatchCustomEvent(element, eventName, detail) {
    const event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, true, true, detail);
    // @ts-expect-error - TS18047 - 'element' is possibly 'null'.
    element.dispatchEvent(event);
}
function renderImmediateInstance(store, instanceId) {
    const { ixParameters } = store.getState();
    store.dispatch((0, _IX2EngineActions.instanceStarted)(instanceId, 0));
    store.dispatch((0, _IX2EngineActions.animationFrameChanged)(performance.now(), ixParameters));
    const { ixInstances } = store.getState();
    handleInstanceChange(ixInstances[instanceId], store);
}
function handleInstanceChange(instance, store) {
    const { active, continuous, complete, elementId, actionItem, actionTypeId, renderType, current, groupIndex, eventId, eventTarget, eventStateKey, actionListId, isCarrier, styleProp, verbose, pluginInstance } = instance;
    // Bypass render if current media query is not listed in event config
    const { ixData, ixSession } = store.getState();
    const { events } = ixData;
    const event = events && events[eventId] ? events[eventId] : {};
    // @ts-expect-error - TS2339 -  Property 'mediaQueries' does not exist on type '{} | undefined'.
    const { mediaQueries = ixData.mediaQueryKeys } = event;
    if (!shouldAllowMediaQuery(mediaQueries, ixSession.mediaQueryKey)) {
        return;
    }
    if (continuous || active || complete) {
        if (current || renderType === RENDER_GENERAL && complete) {
            // Render current values to ref state and grab latest
            store.dispatch((0, _IX2EngineActions.elementStateChanged)(elementId, actionTypeId, current, actionItem));
            const { ixElements } = store.getState();
            const { ref, refType, refState } = ixElements[elementId] || {};
            const actionState = refState && refState[actionTypeId];
            // Render HTML and plugin elements
            if (refType === HTML_ELEMENT || isPluginType(actionTypeId)) {
                renderHTMLElement(// @ts-expect-error - ref can be undefined
                ref, refState, actionState, eventId, actionItem, styleProp, _IX2BrowserApi, renderType, pluginInstance);
            }
        }
        if (complete) {
            if (isCarrier) {
                // @ts-expect-error - TS2345 - Argument of type '{ store: any; eventId: any; eventTarget: any; eventStateKey: any; actionListId: any; groupIndex: any; verbose: any; }' is not assignable to parameter of type '{ store: any; eventId: any; eventTarget: any; eventStateKey: any; actionListId: any; groupIndex?: number | undefined; immediate: any; verbose: any; }'.
                const started = startActionGroup({
                    store,
                    eventId,
                    eventTarget,
                    eventStateKey,
                    actionListId,
                    groupIndex: groupIndex + 1,
                    verbose
                });
                if (verbose && !started) {
                    store.dispatch((0, _IX2EngineActions.actionListPlaybackChanged)({
                        actionListId,
                        isPlaying: false
                    }));
                }
            }
            removeInstance(instance, store);
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL2VuZ2luZS9sb2dpYy9JWDJWYW5pbGxhRW5naW5lLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuaW1wb3J0IGZpbmQgZnJvbSAnbG9kYXNoL2ZpbmQnO1xuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2gvZ2V0JztcbmltcG9ydCBzaXplIGZyb20gJ2xvZGFzaC9zaXplJztcbmltcG9ydCBvbWl0QnkgZnJvbSAnbG9kYXNoL29taXRCeSc7XG5pbXBvcnQgaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XG5pbXBvcnQgbWFwVmFsdWVzIGZyb20gJ2xvZGFzaC9tYXBWYWx1ZXMnO1xuaW1wb3J0IGZvckVhY2ggZnJvbSAnbG9kYXNoL2ZvckVhY2gnO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC90aHJvdHRsZSc7XG5pbXBvcnQge1xuICBFdmVudFR5cGVDb25zdHMsXG4gIEFjdGlvblR5cGVDb25zdHMsXG4gIElYMkVuZ2luZUNvbnN0YW50cyxcbiAgUXVpY2tFZmZlY3RJZHMsXG4gIFJlZHVjZWRNb3Rpb25UeXBlcyxcbn0gZnJvbSAnQHBhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC1jb25zdGFudHMnO1xuXG5jb25zdCBRdWlja0VmZmVjdHNJZExpc3QgPSBPYmplY3Qua2V5cyhRdWlja0VmZmVjdElkcyk7XG5cbmNvbnN0IGlzUXVpY2tFZmZlY3QgPSAoYWN0aW9uVHlwZUlkOiBzdHJpbmcpID0+XG4gIFF1aWNrRWZmZWN0c0lkTGlzdC5pbmNsdWRlcyhhY3Rpb25UeXBlSWQpO1xuXG5pbXBvcnQge0lYMlZhbmlsbGFVdGlscywgSVgyVmFuaWxsYVBsdWdpbnN9IGZyb20gJ0BwYWNrYWdlcy9zeXN0ZW1zL2l4Mi9zaGFyZWQnO1xuXG5jb25zdCB7XG4gIENPTE9OX0RFTElNSVRFUixcbiAgQk9VTkRBUllfU0VMRUNUT1IsXG4gIEhUTUxfRUxFTUVOVCxcbiAgUkVOREVSX0dFTkVSQUwsXG4gIFdfTU9EX0lYLFxufSA9IElYMkVuZ2luZUNvbnN0YW50cztcblxuY29uc3Qge1xuICBnZXRBZmZlY3RlZEVsZW1lbnRzLFxuICBnZXRFbGVtZW50SWQsXG4gIGdldERlc3RpbmF0aW9uVmFsdWVzLFxuICBvYnNlcnZlU3RvcmUsXG4gIGdldEluc3RhbmNlSWQsXG4gIHJlbmRlckhUTUxFbGVtZW50LFxuICBjbGVhckFsbFN0eWxlcyxcbiAgZ2V0TWF4RHVyYXRpb25JdGVtSW5kZXgsXG4gIGdldENvbXB1dGVkU3R5bGUsXG4gIGdldEluc3RhbmNlT3JpZ2luLFxuICByZWR1Y2VMaXN0VG9Hcm91cCxcbiAgc2hvdWxkTmFtZXNwYWNlRXZlbnRQYXJhbWV0ZXIsXG4gIGdldE5hbWVzcGFjZWRQYXJhbWV0ZXJJZCxcbiAgc2hvdWxkQWxsb3dNZWRpYVF1ZXJ5LFxuICBjbGVhbnVwSFRNTEVsZW1lbnQsXG4gIGNsZWFyT2JqZWN0Q2FjaGUsXG4gIHN0cmluZ2lmeVRhcmdldCxcbiAgbWVkaWFRdWVyaWVzRXF1YWwsXG4gIHNoYWxsb3dFcXVhbCxcbn0gPSBJWDJWYW5pbGxhVXRpbHM7XG5jb25zdCB7aXNQbHVnaW5UeXBlLCBjcmVhdGVQbHVnaW5JbnN0YW5jZSwgZ2V0UGx1Z2luRHVyYXRpb259ID1cbiAgSVgyVmFuaWxsYVBsdWdpbnM7XG5cbmltcG9ydCB7XG4gIHJhd0RhdGFJbXBvcnRlZCxcbiAgc2Vzc2lvbkluaXRpYWxpemVkLFxuICBzZXNzaW9uU3RhcnRlZCxcbiAgc2Vzc2lvblN0b3BwZWQsXG4gIGV2ZW50TGlzdGVuZXJBZGRlZCxcbiAgZXZlbnRTdGF0ZUNoYW5nZWQsXG4gIGFuaW1hdGlvbkZyYW1lQ2hhbmdlZCxcbiAgaW5zdGFuY2VBZGRlZCxcbiAgaW5zdGFuY2VTdGFydGVkLFxuICBpbnN0YW5jZVJlbW92ZWQsXG4gIGVsZW1lbnRTdGF0ZUNoYW5nZWQsXG4gIGFjdGlvbkxpc3RQbGF5YmFja0NoYW5nZWQsXG4gIHZpZXdwb3J0V2lkdGhDaGFuZ2VkLFxuICBtZWRpYVF1ZXJpZXNEZWZpbmVkLFxuICBJWDJSYXdEYXRhLFxufSBmcm9tICcuLi9hY3Rpb25zL0lYMkVuZ2luZUFjdGlvbnMnO1xuXG5pbXBvcnQgKiBhcyBlbGVtZW50QXBpIGZyb20gJy4vSVgyQnJvd3NlckFwaSc7XG5cbmltcG9ydCBJWDJWYW5pbGxhRXZlbnRzIGZyb20gJy4vSVgyVmFuaWxsYUV2ZW50cyc7XG5pbXBvcnQge1xuICBJWDJFbmdpbmVSZWR1Y2VyU3RhdGVTaGFwZSxcbiAgSVgyRW5naW5lUmVkdWNlclN0b3JlLFxufSBmcm9tICcuLi9yZWR1Y2Vycy9JWDJSZWR1Y2VyJztcbmltcG9ydCB7QWN0aW9uTGlzdElkfSBmcm9tICdAcGFja2FnZXMvc3lzdGVtcy9peDIvdHlwZXMtY29yZSc7XG5cbmNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbmNvbnN0IElTX01PQklMRV9TQUZBUkkgPSB1YS5tYXRjaCgvaVBhZC9pKSB8fCB1YS5tYXRjaCgvaVBob25lLyk7XG5cbi8vIEtlZXAgdGhyb3R0bGVkIGV2ZW50cyBhdCB+ODBmcHMgdG8gcmVkdWNlIHJlZmxvd3Mgd2hpbGUgbWFpbnRhaW5pbmcgcmVuZGVyIGFjY3VyYWN5XG5jb25zdCBUSFJPVFRMRURfRVZFTlRfV0FJVCA9IDEyO1xuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZVJlcXVlc3RzKHN0b3JlOiBJWDJFbmdpbmVSZWR1Y2VyU3RvcmUpIHtcbiAgb2JzZXJ2ZVN0b3JlKHtcbiAgICBzdG9yZSxcbiAgICBzZWxlY3Q6ICh7XG4gICAgICBpeFJlcXVlc3QsXG4gICAgfToge1xuICAgICAgaXhSZXF1ZXN0OiBJWDJFbmdpbmVSZWR1Y2VyU3RhdGVTaGFwZVsnaXhSZXF1ZXN0J107XG4gICAgfSkgPT4gaXhSZXF1ZXN0LnByZXZpZXcsXG4gICAgb25DaGFuZ2U6IGhhbmRsZVByZXZpZXdSZXF1ZXN0LFxuICB9KTtcbiAgb2JzZXJ2ZVN0b3JlKHtcbiAgICBzdG9yZSxcbiAgICBzZWxlY3Q6ICh7XG4gICAgICBpeFJlcXVlc3QsXG4gICAgfToge1xuICAgICAgaXhSZXF1ZXN0OiBJWDJFbmdpbmVSZWR1Y2VyU3RhdGVTaGFwZVsnaXhSZXF1ZXN0J107XG4gICAgfSkgPT4gaXhSZXF1ZXN0LnBsYXliYWNrLFxuICAgIG9uQ2hhbmdlOiBoYW5kbGVQbGF5YmFja1JlcXVlc3QsXG4gIH0pO1xuICBvYnNlcnZlU3RvcmUoe1xuICAgIHN0b3JlLFxuICAgIHNlbGVjdDogKHtcbiAgICAgIGl4UmVxdWVzdCxcbiAgICB9OiB7XG4gICAgICBpeFJlcXVlc3Q6IElYMkVuZ2luZVJlZHVjZXJTdGF0ZVNoYXBlWydpeFJlcXVlc3QnXTtcbiAgICB9KSA9PiBpeFJlcXVlc3Quc3RvcCxcbiAgICBvbkNoYW5nZTogaGFuZGxlU3RvcFJlcXVlc3QsXG4gIH0pO1xuICBvYnNlcnZlU3RvcmUoe1xuICAgIHN0b3JlLFxuICAgIHNlbGVjdDogKHtcbiAgICAgIGl4UmVxdWVzdCxcbiAgICB9OiB7XG4gICAgICBpeFJlcXVlc3Q6IElYMkVuZ2luZVJlZHVjZXJTdGF0ZVNoYXBlWydpeFJlcXVlc3QnXTtcbiAgICB9KSA9PiBpeFJlcXVlc3QuY2xlYXIsXG4gICAgb25DaGFuZ2U6IGhhbmRsZUNsZWFyUmVxdWVzdCxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9ic2VydmVNZWRpYVF1ZXJ5Q2hhbmdlKHN0b3JlOiBJWDJFbmdpbmVSZWR1Y2VyU3RvcmUpIHtcbiAgb2JzZXJ2ZVN0b3JlKHtcbiAgICBzdG9yZSxcbiAgICBzZWxlY3Q6ICh7XG4gICAgICBpeFNlc3Npb24sXG4gICAgfToge1xuICAgICAgaXhTZXNzaW9uOiBJWDJFbmdpbmVSZWR1Y2VyU3RhdGVTaGFwZVsnaXhTZXNzaW9uJ107XG4gICAgfSkgPT4gaXhTZXNzaW9uLm1lZGlhUXVlcnlLZXksXG4gICAgb25DaGFuZ2U6ICgpID0+IHtcbiAgICAgIHN0b3BFbmdpbmUoc3RvcmUpO1xuICAgICAgY2xlYXJBbGxTdHlsZXMoe3N0b3JlLCBlbGVtZW50QXBpfSk7XG4gICAgICBzdGFydEVuZ2luZSh7c3RvcmUsIGFsbG93RXZlbnRzOiB0cnVlfSk7XG4gICAgICBkaXNwYXRjaFBhZ2VVcGRhdGVFdmVudCgpO1xuICAgIH0sXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvYnNlcnZlT25lUmVuZGVyVGljayhcbiAgc3RvcmU6IElYMkVuZ2luZVJlZHVjZXJTdG9yZSxcbiAgb25UaWNrOiAobm93OiBhbnkgfCBudW1iZXIpID0+IHZvaWRcbikge1xuICBjb25zdCB1bnN1YnNjcmliZSA9IG9ic2VydmVTdG9yZSh7XG4gICAgc3RvcmUsXG4gICAgc2VsZWN0OiAoe1xuICAgICAgaXhTZXNzaW9uLFxuICAgIH06IHtcbiAgICAgIGl4U2Vzc2lvbjogSVgyRW5naW5lUmVkdWNlclN0YXRlU2hhcGVbJ2l4U2Vzc2lvbiddO1xuICAgIH0pID0+IGl4U2Vzc2lvbi50aWNrLFxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ3RpY2snIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gICAgb25DaGFuZ2U6ICh0aWNrKSA9PiB7XG4gICAgICBvblRpY2sodGljayk7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgIH0sXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQcmV2aWV3UmVxdWVzdChcbiAge3Jhd0RhdGEsIGRlZmVyfToge3Jhd0RhdGE6IElYMlJhd0RhdGE7IGRlZmVyOiBib29sZWFufSxcbiAgc3RvcmU6IElYMkVuZ2luZVJlZHVjZXJTdG9yZVxuKSB7XG4gIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgIHN0YXJ0RW5naW5lKHtzdG9yZSwgcmF3RGF0YSwgYWxsb3dFdmVudHM6IHRydWV9KTtcbiAgICBkaXNwYXRjaFBhZ2VVcGRhdGVFdmVudCgpO1xuICB9O1xuICBkZWZlciA/IHNldFRpbWVvdXQoc3RhcnQsIDApIDogc3RhcnQoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hQYWdlVXBkYXRlRXZlbnQoKSB7XG4gIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdJWDJfUEFHRV9VUERBVEUnKSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVBsYXliYWNrUmVxdWVzdChwbGF5YmFjazogYW55LCBzdG9yZTogSVgyRW5naW5lUmVkdWNlclN0b3JlKSB7XG4gIGNvbnN0IHtcbiAgICBhY3Rpb25UeXBlSWQsXG4gICAgYWN0aW9uTGlzdElkLFxuICAgIGFjdGlvbkl0ZW1JZCxcbiAgICBldmVudElkLFxuICAgIGFsbG93RXZlbnRzLFxuICAgIGltbWVkaWF0ZSxcbiAgICB0ZXN0TWFudWFsLFxuICAgIHZlcmJvc2UgPSB0cnVlLFxuICB9ID0gcGxheWJhY2s7XG4gIGxldCB7cmF3RGF0YX0gPSBwbGF5YmFjaztcblxuICBpZiAoYWN0aW9uTGlzdElkICYmIGFjdGlvbkl0ZW1JZCAmJiByYXdEYXRhICYmIGltbWVkaWF0ZSkge1xuICAgIGNvbnN0IGFjdGlvbkxpc3QgPSByYXdEYXRhLmFjdGlvbkxpc3RzW2FjdGlvbkxpc3RJZF07XG5cbiAgICBpZiAoYWN0aW9uTGlzdCkge1xuICAgICAgcmF3RGF0YSA9IHJlZHVjZUxpc3RUb0dyb3VwKHtcbiAgICAgICAgYWN0aW9uTGlzdCxcbiAgICAgICAgYWN0aW9uSXRlbUlkLFxuICAgICAgICByYXdEYXRhLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRFbmdpbmUoe3N0b3JlLCByYXdEYXRhLCBhbGxvd0V2ZW50cywgdGVzdE1hbnVhbH0pO1xuXG4gIGlmIChcbiAgICAoYWN0aW9uTGlzdElkICYmIGFjdGlvblR5cGVJZCA9PT0gQWN0aW9uVHlwZUNvbnN0cy5HRU5FUkFMX1NUQVJUX0FDVElPTikgfHxcbiAgICBpc1F1aWNrRWZmZWN0KGFjdGlvblR5cGVJZClcbiAgKSB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjM0NSAtIEFyZ3VtZW50IG9mIHR5cGUgJ3sgc3RvcmU6IGFueTsgYWN0aW9uTGlzdElkOiBhbnk7IH0nIGlzIG5vdCBhc3NpZ25hYmxlIHRvIHBhcmFtZXRlciBvZiB0eXBlICd7IHN0b3JlOiBhbnk7IGV2ZW50SWQ6IGFueTsgZXZlbnRUYXJnZXQ6IGFueTsgZXZlbnRTdGF0ZUtleTogYW55OyBhY3Rpb25MaXN0SWQ6IGFueTsgfScuXG4gICAgc3RvcEFjdGlvbkdyb3VwKHtzdG9yZSwgYWN0aW9uTGlzdElkfSk7XG4gICAgcmVuZGVySW5pdGlhbEdyb3VwKHtzdG9yZSwgYWN0aW9uTGlzdElkLCBldmVudElkfSk7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjM0NSAtIEFyZ3VtZW50IG9mIHR5cGUgJ3sgc3RvcmU6IGFueTsgZXZlbnRJZDogYW55OyBhY3Rpb25MaXN0SWQ6IGFueTsgaW1tZWRpYXRlOiBhbnk7IHZlcmJvc2U6IGFueTsgfScgaXMgbm90IGFzc2lnbmFibGUgdG8gcGFyYW1ldGVyIG9mIHR5cGUgJ3sgc3RvcmU6IGFueTsgZXZlbnRJZDogYW55OyBldmVudFRhcmdldDogYW55OyBldmVudFN0YXRlS2V5OiBhbnk7IGFjdGlvbkxpc3RJZDogYW55OyBncm91cEluZGV4PzogbnVtYmVyIHwgdW5kZWZpbmVkOyBpbW1lZGlhdGU6IGFueTsgdmVyYm9zZTogYW55OyB9Jy5cbiAgICBjb25zdCBzdGFydGVkID0gc3RhcnRBY3Rpb25Hcm91cCh7XG4gICAgICBzdG9yZSxcbiAgICAgIGV2ZW50SWQsXG4gICAgICBhY3Rpb25MaXN0SWQsXG4gICAgICBpbW1lZGlhdGUsXG4gICAgICB2ZXJib3NlLFxuICAgIH0pO1xuICAgIGlmICh2ZXJib3NlICYmIHN0YXJ0ZWQpIHtcbiAgICAgIHN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBhY3Rpb25MaXN0UGxheWJhY2tDaGFuZ2VkKHthY3Rpb25MaXN0SWQsIGlzUGxheWluZzogIWltbWVkaWF0ZX0pXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVTdG9wUmVxdWVzdChcbiAge2FjdGlvbkxpc3RJZH06IHthY3Rpb25MaXN0SWQ6IEFjdGlvbkxpc3RJZH0sXG4gIHN0b3JlOiBJWDJFbmdpbmVSZWR1Y2VyU3RvcmVcbikge1xuICBpZiAoYWN0aW9uTGlzdElkKSB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjM0NSAtIEFyZ3VtZW50IG9mIHR5cGUgJ3sgc3RvcmU6IGFueTsgYWN0aW9uTGlzdElkOiBhbnk7IH0nIGlzIG5vdCBhc3NpZ25hYmxlIHRvIHBhcmFtZXRlciBvZiB0eXBlICd7IHN0b3JlOiBhbnk7IGV2ZW50SWQ6IGFueTsgZXZlbnRUYXJnZXQ6IGFueTsgZXZlbnRTdGF0ZUtleTogYW55OyBhY3Rpb25MaXN0SWQ6IGFueTsgfScuXG4gICAgc3RvcEFjdGlvbkdyb3VwKHtzdG9yZSwgYWN0aW9uTGlzdElkfSk7XG4gIH0gZWxzZSB7XG4gICAgc3RvcEFsbEFjdGlvbkdyb3Vwcyh7c3RvcmV9KTtcbiAgfVxuICBzdG9wRW5naW5lKHN0b3JlKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2xlYXJSZXF1ZXN0KHN0YXRlOiBhbnksIHN0b3JlOiBJWDJFbmdpbmVSZWR1Y2VyU3RvcmUpIHtcbiAgc3RvcEVuZ2luZShzdG9yZSk7XG4gIGNsZWFyQWxsU3R5bGVzKHtzdG9yZSwgZWxlbWVudEFwaX0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRFbmdpbmUoe1xuICBzdG9yZSxcbiAgcmF3RGF0YSxcbiAgYWxsb3dFdmVudHMsXG4gIHRlc3RNYW51YWwsXG59OiB7XG4gIHN0b3JlOiBJWDJFbmdpbmVSZWR1Y2VyU3RvcmU7XG4gIHJhd0RhdGE/OiBJWDJSYXdEYXRhO1xuICB0ZXN0TWFudWFsPzogYm9vbGVhbjtcbiAgYWxsb3dFdmVudHM/OiBib29sZWFuO1xufSkge1xuICBjb25zdCB7aXhTZXNzaW9ufSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIGlmIChyYXdEYXRhKSB7XG4gICAgc3RvcmUuZGlzcGF0Y2gocmF3RGF0YUltcG9ydGVkKHJhd0RhdGEpKTtcbiAgfVxuICBpZiAoIWl4U2Vzc2lvbi5hY3RpdmUpIHtcbiAgICBzdG9yZS5kaXNwYXRjaChcbiAgICAgIHNlc3Npb25Jbml0aWFsaXplZCh7XG4gICAgICAgIGhhc0JvdW5kYXJ5Tm9kZXM6IEJvb2xlYW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihCT1VOREFSWV9TRUxFQ1RPUikpLFxuICAgICAgICByZWR1Y2VkTW90aW9uOlxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuaGFzQXR0cmlidXRlKCdkYXRhLXdmLWl4LXZhY2F0aW9uJykgJiZcbiAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtcmVkdWNlZC1tb3Rpb24pJykubWF0Y2hlcyxcbiAgICAgIH0pXG4gICAgKTtcbiAgICBpZiAoYWxsb3dFdmVudHMpIHtcbiAgICAgIGJpbmRFdmVudHMoc3RvcmUpO1xuICAgICAgYWRkRG9jdW1lbnRDbGFzcygpO1xuXG4gICAgICBpZiAoc3RvcmUuZ2V0U3RhdGUoKS5peFNlc3Npb24uaGFzRGVmaW5lZE1lZGlhUXVlcmllcykge1xuICAgICAgICBvYnNlcnZlTWVkaWFRdWVyeUNoYW5nZShzdG9yZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHN0b3JlLmRpc3BhdGNoKHNlc3Npb25TdGFydGVkKCkpO1xuICAgIHN0YXJ0UmVuZGVyTG9vcChzdG9yZSwgdGVzdE1hbnVhbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkRG9jdW1lbnRDbGFzcygpIHtcbiAgY29uc3Qge2RvY3VtZW50RWxlbWVudH0gPSBkb2N1bWVudDtcbiAgaWYgKGRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUuaW5kZXhPZihXX01PRF9JWCkgPT09IC0xKSB7XG4gICAgZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZSArPSBgICR7V19NT0RfSVh9YDtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdGFydFJlbmRlckxvb3Aoc3RvcmU6IElYMkVuZ2luZVJlZHVjZXJTdG9yZSwgdGVzdE1hbnVhbD86IGJvb2xlYW4pIHtcbiAgY29uc3QgaGFuZGxlRnJhbWUgPSAobm93OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB7aXhTZXNzaW9uLCBpeFBhcmFtZXRlcnN9ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICBpZiAoaXhTZXNzaW9uLmFjdGl2ZSkge1xuICAgICAgc3RvcmUuZGlzcGF0Y2goYW5pbWF0aW9uRnJhbWVDaGFuZ2VkKG5vdywgaXhQYXJhbWV0ZXJzKSk7XG4gICAgICBpZiAodGVzdE1hbnVhbCkge1xuICAgICAgICBvYnNlcnZlT25lUmVuZGVyVGljayhzdG9yZSwgaGFuZGxlRnJhbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGhhbmRsZUZyYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGhhbmRsZUZyYW1lKHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9wRW5naW5lKHN0b3JlOiBJWDJFbmdpbmVSZWR1Y2VyU3RvcmUpIHtcbiAgY29uc3Qge2l4U2Vzc2lvbn0gPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBpZiAoaXhTZXNzaW9uLmFjdGl2ZSkge1xuICAgIGNvbnN0IHtldmVudExpc3RlbmVyc30gPSBpeFNlc3Npb247XG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaChjbGVhckV2ZW50TGlzdGVuZXIpO1xuICAgIGNsZWFyT2JqZWN0Q2FjaGUoKTtcbiAgICBzdG9yZS5kaXNwYXRjaChzZXNzaW9uU3RvcHBlZCgpKTtcbiAgfVxufVxuXG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICd0YXJnZXQnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdsaXN0ZW5lclBhcmFtcycgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbmZ1bmN0aW9uIGNsZWFyRXZlbnRMaXN0ZW5lcih7dGFyZ2V0LCBsaXN0ZW5lclBhcmFtc30pIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1zcHJlYWRcbiAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGFyZ2V0LCBsaXN0ZW5lclBhcmFtcyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdyb3VwSW5zdGFuY2VzKHtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnc3RvcmUnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gIHN0b3JlLFxuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdldmVudFN0YXRlS2V5JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBldmVudFN0YXRlS2V5LFxuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdldmVudFRhcmdldCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgZXZlbnRUYXJnZXQsXG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2V2ZW50SWQnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gIGV2ZW50SWQsXG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2V2ZW50Q29uZmlnJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBldmVudENvbmZpZyxcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnYWN0aW9uTGlzdElkJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBhY3Rpb25MaXN0SWQsXG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ3BhcmFtZXRlckdyb3VwJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBwYXJhbWV0ZXJHcm91cCxcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnc21vb3RoaW5nJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBzbW9vdGhpbmcsXG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ3Jlc3RpbmdWYWx1ZScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgcmVzdGluZ1ZhbHVlLFxufSkge1xuICBjb25zdCB7aXhEYXRhLCBpeFNlc3Npb259ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgY29uc3Qge2V2ZW50c30gPSBpeERhdGE7XG4gIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2V2ZW50SWRdO1xuICBjb25zdCB7ZXZlbnRUeXBlSWR9ID0gZXZlbnQ7XG4gIGNvbnN0IHRhcmdldENhY2hlOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG4gIGNvbnN0IGluc3RhbmNlQWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG4gIGNvbnN0IGluc3RhbmNlQ29uZmlnczogQXJyYXk8XG4gICAgfCBhbnlcbiAgICB8IHtcbiAgICAgICAgZWxlbWVudDogSFRNTEVsZW1lbnQgfCBhbnk7XG4gICAgICAgIGtleTogc3RyaW5nO1xuICAgICAgfVxuICA+ID0gW107XG5cbiAgY29uc3Qge2NvbnRpbnVvdXNBY3Rpb25Hcm91cHN9ID0gcGFyYW1ldGVyR3JvdXA7XG4gIGxldCB7aWQ6IHBhcmFtZXRlcklkfSA9IHBhcmFtZXRlckdyb3VwO1xuICBpZiAoc2hvdWxkTmFtZXNwYWNlRXZlbnRQYXJhbWV0ZXIoZXZlbnRUeXBlSWQsIGV2ZW50Q29uZmlnKSkge1xuICAgIHBhcmFtZXRlcklkID0gZ2V0TmFtZXNwYWNlZFBhcmFtZXRlcklkKGV2ZW50U3RhdGVLZXksIHBhcmFtZXRlcklkKTtcbiAgfVxuXG4gIC8vIExpbWl0IGFmZmVjdGVkIGVsZW1lbnRzIHdoZW4gZXZlbnQgdGFyZ2V0IGlzIHdpdGhpbiBhIGJvdW5kYXJ5IG5vZGVcbiAgY29uc3QgZXZlbnRFbGVtZW50Um9vdCA9XG4gICAgaXhTZXNzaW9uLmhhc0JvdW5kYXJ5Tm9kZXMgJiYgZXZlbnRUYXJnZXRcbiAgICAgID8gZWxlbWVudEFwaS5nZXRDbG9zZXN0RWxlbWVudChldmVudFRhcmdldCwgQk9VTkRBUllfU0VMRUNUT1IpXG4gICAgICA6IG51bGw7XG5cbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAnYWN0aW9uR3JvdXAnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gIGNvbnRpbnVvdXNBY3Rpb25Hcm91cHMuZm9yRWFjaCgoYWN0aW9uR3JvdXApID0+IHtcbiAgICBjb25zdCB7a2V5ZnJhbWUsIGFjdGlvbkl0ZW1zfSA9IGFjdGlvbkdyb3VwO1xuXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAnYWN0aW9uSXRlbScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgICBhY3Rpb25JdGVtcy5mb3JFYWNoKChhY3Rpb25JdGVtKSA9PiB7XG4gICAgICBjb25zdCB7YWN0aW9uVHlwZUlkfSA9IGFjdGlvbkl0ZW07XG4gICAgICBjb25zdCB7dGFyZ2V0fSA9IGFjdGlvbkl0ZW0uY29uZmlnO1xuICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZWxlbWVudFJvb3QgPSB0YXJnZXQuYm91bmRhcnlNb2RlID8gZXZlbnRFbGVtZW50Um9vdCA6IG51bGw7XG5cbiAgICAgIGNvbnN0IGtleSA9IHN0cmluZ2lmeVRhcmdldCh0YXJnZXQpICsgQ09MT05fREVMSU1JVEVSICsgYWN0aW9uVHlwZUlkO1xuICAgICAgaW5zdGFuY2VBY3Rpb25Hcm91cHNba2V5XSA9IGFwcGVuZEFjdGlvbkl0ZW0oXG4gICAgICAgIGluc3RhbmNlQWN0aW9uR3JvdXBzW2tleV0sXG4gICAgICAgIGtleWZyYW1lLFxuICAgICAgICBhY3Rpb25JdGVtXG4gICAgICApO1xuXG4gICAgICBpZiAoIXRhcmdldENhY2hlW2tleV0pIHtcbiAgICAgICAgdGFyZ2V0Q2FjaGVba2V5XSA9IHRydWU7XG4gICAgICAgIGNvbnN0IHtjb25maWd9ID0gYWN0aW9uSXRlbTtcbiAgICAgICAgZ2V0QWZmZWN0ZWRFbGVtZW50cyh7XG4gICAgICAgICAgY29uZmlnLFxuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIGV2ZW50VGFyZ2V0LFxuICAgICAgICAgIGVsZW1lbnRSb290LFxuICAgICAgICAgIGVsZW1lbnRBcGksXG4gICAgICAgIH0pLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBpbnN0YW5jZUNvbmZpZ3MucHVzaCh7ZWxlbWVudCwga2V5fSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBpbnN0YW5jZUNvbmZpZ3MuZm9yRWFjaCgoe2VsZW1lbnQsIGtleX0pID0+IHtcbiAgICBjb25zdCBhY3Rpb25Hcm91cHMgPSBpbnN0YW5jZUFjdGlvbkdyb3Vwc1trZXldO1xuICAgIGNvbnN0IGFjdGlvbkl0ZW0gPSBnZXQoYWN0aW9uR3JvdXBzLCBgWzBdLmFjdGlvbkl0ZW1zWzBdYCwge30pO1xuICAgIGNvbnN0IHthY3Rpb25UeXBlSWR9ID0gYWN0aW9uSXRlbTtcbiAgICBjb25zdCBzaG91bGRVc2VQbHVnaW4gPVxuICAgICAgLy8gSWYgaXQncyB0YXJnZXRlZCBieSBjbGFzcywgZG9uJ3QgcXVlcnkgdGhlIGVsZW1lbnQgYnkgcGx1Z2luRWxlbWVudElkXG4gICAgICBhY3Rpb25UeXBlSWQgPT09IEFjdGlvblR5cGVDb25zdHMuUExVR0lOX1JJVkVcbiAgICAgICAgPyAoYWN0aW9uSXRlbS5jb25maWc/LnRhcmdldD8uc2VsZWN0b3JHdWlkcyB8fCBbXSkubGVuZ3RoID09PSAwXG4gICAgICAgIDogaXNQbHVnaW5UeXBlKGFjdGlvblR5cGVJZCk7XG5cbiAgICBjb25zdCBwbHVnaW5JbnN0YW5jZSA9IHNob3VsZFVzZVBsdWdpblxuICAgICAgPyBjcmVhdGVQbHVnaW5JbnN0YW5jZShhY3Rpb25UeXBlSWQpPy4oZWxlbWVudCwgYWN0aW9uSXRlbSlcbiAgICAgIDogbnVsbDtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IGdldERlc3RpbmF0aW9uVmFsdWVzKFxuICAgICAge2VsZW1lbnQsIGFjdGlvbkl0ZW0sIGVsZW1lbnRBcGl9LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgcGx1Z2luSW5zdGFuY2VcbiAgICApO1xuICAgIGNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIHN0b3JlLFxuICAgICAgZWxlbWVudCxcbiAgICAgIGV2ZW50SWQsXG4gICAgICBhY3Rpb25MaXN0SWQsXG4gICAgICBhY3Rpb25JdGVtLFxuICAgICAgZGVzdGluYXRpb24sXG4gICAgICBjb250aW51b3VzOiB0cnVlLFxuICAgICAgcGFyYW1ldGVySWQsXG4gICAgICBhY3Rpb25Hcm91cHMsXG4gICAgICBzbW9vdGhpbmcsXG4gICAgICByZXN0aW5nVmFsdWUsXG4gICAgICBwbHVnaW5JbnN0YW5jZSxcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEFjdGlvbkl0ZW0oYWN0aW9uR3JvdXBzID0gW10sIGtleWZyYW1lOiBhbnksIGFjdGlvbkl0ZW06IGFueSkge1xuICBjb25zdCBuZXdBY3Rpb25Hcm91cHMgPSBbLi4uYWN0aW9uR3JvdXBzXTtcbiAgbGV0IGdyb3VwSW5kZXg7XG4gIG5ld0FjdGlvbkdyb3Vwcy5zb21lKChncm91cCwgaW5kZXgpID0+IHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzM5IC0gUHJvcGVydHkgJ2tleWZyYW1lJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICduZXZlcicuXG4gICAgaWYgKGdyb3VwLmtleWZyYW1lID09PSBrZXlmcmFtZSkge1xuICAgICAgZ3JvdXBJbmRleCA9IGluZGV4O1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG4gIGlmIChncm91cEluZGV4ID09IG51bGwpIHtcbiAgICBncm91cEluZGV4ID0gbmV3QWN0aW9uR3JvdXBzLmxlbmd0aDtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzQ1IC0gQXJndW1lbnQgb2YgdHlwZSAneyBrZXlmcmFtZTogYW55OyBhY3Rpb25JdGVtczogbmV2ZXJbXTsgfScgaXMgbm90IGFzc2lnbmFibGUgdG8gcGFyYW1ldGVyIG9mIHR5cGUgJ25ldmVyJy5cbiAgICBuZXdBY3Rpb25Hcm91cHMucHVzaCh7XG4gICAgICBrZXlmcmFtZSxcbiAgICAgIGFjdGlvbkl0ZW1zOiBbXSxcbiAgICB9KTtcbiAgfVxuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzM5IC0gUHJvcGVydHkgJ2FjdGlvbkl0ZW1zJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICduZXZlcicuXG4gIG5ld0FjdGlvbkdyb3Vwc1tncm91cEluZGV4XS5hY3Rpb25JdGVtcy5wdXNoKGFjdGlvbkl0ZW0pO1xuICByZXR1cm4gbmV3QWN0aW9uR3JvdXBzO1xufVxuXG5mdW5jdGlvbiBiaW5kRXZlbnRzKHN0b3JlOiBJWDJFbmdpbmVSZWR1Y2VyU3RvcmUpIHtcbiAgY29uc3Qge2l4RGF0YX0gPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBjb25zdCB7ZXZlbnRUeXBlTWFwfSA9IGl4RGF0YTtcblxuICB1cGRhdGVWaWV3cG9ydFdpZHRoKHN0b3JlKTtcblxuICBmb3JFYWNoKGV2ZW50VHlwZU1hcCwgKGV2ZW50cywga2V5KSA9PiB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzA1MyAtIEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGV4cHJlc3Npb24gb2YgdHlwZSAnc3RyaW5nJyBjYW4ndCBiZSB1c2VkIHRvIGluZGV4IHR5cGUgJ3sgU0xJREVSX0FDVElWRTogeyBoYW5kbGVyOiAob3B0aW9uczogYW55LCBzdGF0ZTogYW55KSA9PiBhbnk7IHR5cGVzOiBzdHJpbmc7IH07IFNMSURFUl9JTkFDVElWRTogeyBoYW5kbGVyOiAob3B0aW9uczogYW55LCBzdGF0ZTogYW55KSA9PiBhbnk7IHR5cGVzOiBzdHJpbmc7IH07IERST1BET1dOX09QRU46IHsgaGFuZGxlcjogKG9wdGlvbnM6IGFueSwgc3RhdGU6IGFueSkgPT4gYW55OyB0eXBlczogc3RyaW5nOyB9OyAuLi4gMjEgbW9yZSAuLi47IFBBR0VfU1RBUlQ6IHsgLi4uOyB9OyB9Jy5cbiAgICBjb25zdCBsb2dpYyA9IElYMlZhbmlsbGFFdmVudHNba2V5XTtcbiAgICBpZiAoIWxvZ2ljKSB7XG4gICAgICBjb25zb2xlLndhcm4oYElYMiBldmVudCB0eXBlIG5vdCBjb25maWd1cmVkOiAke2tleX1gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYmluZEV2ZW50VHlwZSh7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdsb2dpYycgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgICAgIGxvZ2ljLFxuICAgICAgc3RvcmUsXG4gICAgICBldmVudHMsXG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHtpeFNlc3Npb259ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgaWYgKGl4U2Vzc2lvbi5ldmVudExpc3RlbmVycy5sZW5ndGgpIHtcbiAgICBiaW5kUmVzaXplRXZlbnRzKHN0b3JlKTtcbiAgfVxufVxuXG5jb25zdCBXSU5ET1dfUkVTSVpFX0VWRU5UUyA9IFsncmVzaXplJywgJ29yaWVudGF0aW9uY2hhbmdlJ107XG5cbmZ1bmN0aW9uIGJpbmRSZXNpemVFdmVudHMoc3RvcmU6IElYMkVuZ2luZVJlZHVjZXJTdG9yZSkge1xuICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgdXBkYXRlVmlld3BvcnRXaWR0aChzdG9yZSk7XG4gIH07XG4gIFdJTkRPV19SRVNJWkVfRVZFTlRTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVSZXNpemUpO1xuICAgIHN0b3JlLmRpc3BhdGNoKGV2ZW50TGlzdGVuZXJBZGRlZCh3aW5kb3csIFt0eXBlLCBoYW5kbGVSZXNpemVdKSk7XG4gIH0pO1xuICBoYW5kbGVSZXNpemUoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVmlld3BvcnRXaWR0aChzdG9yZTogSVgyRW5naW5lUmVkdWNlclN0b3JlKSB7XG4gIGNvbnN0IHtpeFNlc3Npb24sIGl4RGF0YX0gPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICBpZiAod2lkdGggIT09IGl4U2Vzc2lvbi52aWV3cG9ydFdpZHRoKSB7XG4gICAgY29uc3Qge21lZGlhUXVlcmllc30gPSBpeERhdGE7XG4gICAgc3RvcmUuZGlzcGF0Y2godmlld3BvcnRXaWR0aENoYW5nZWQoe3dpZHRoLCBtZWRpYVF1ZXJpZXN9KSk7XG4gIH1cbn1cblxuY29uc3QgbWFwRm91bmRWYWx1ZXMgPSAoXG4gIG9iamVjdDogYW55LFxuICBpdGVyYXRlZTogKGV2ZW50PzogYW55KSA9PiBBcnJheTxIVE1MRWxlbWVudCB8IGFueT5cbikgPT4gb21pdEJ5KG1hcFZhbHVlcyhvYmplY3QsIGl0ZXJhdGVlKSwgaXNFbXB0eSk7XG5cbmNvbnN0IGZvckVhY2hFdmVudFRhcmdldCA9IChcbiAgZXZlbnRUYXJnZXRzOiBhbnksXG4gIGV2ZW50Q2FsbGJhY2s6IChlbGVtZW50OiBhbnksIGV2ZW50SWQ6IGFueSwgZXZlbnRTdGF0ZUtleTogc3RyaW5nKSA9PiB2b2lkXG4pID0+IHtcbiAgZm9yRWFjaChldmVudFRhcmdldHMsIChlbGVtZW50cywgZXZlbnRJZCkgPT4ge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ2VsZW1lbnQnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDA2IC0gUGFyYW1ldGVyICdpbmRleCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZXZlbnRTdGF0ZUtleSA9IGV2ZW50SWQgKyBDT0xPTl9ERUxJTUlURVIgKyBpbmRleDtcbiAgICAgIGV2ZW50Q2FsbGJhY2soZWxlbWVudCwgZXZlbnRJZCwgZXZlbnRTdGF0ZUtleSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0QWZmZWN0ZWRGb3JFdmVudCA9IChldmVudDogYW55KSA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IHt0YXJnZXQ6IGV2ZW50LnRhcmdldCwgdGFyZ2V0czogZXZlbnQudGFyZ2V0c30gYXMgY29uc3Q7XG4gIHJldHVybiBnZXRBZmZlY3RlZEVsZW1lbnRzKHtjb25maWcsIGVsZW1lbnRBcGl9KTtcbn07XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2xvZ2ljJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLiB8IFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnc3RvcmUnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdldmVudHMnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG5mdW5jdGlvbiBiaW5kRXZlbnRUeXBlKHtsb2dpYywgc3RvcmUsIGV2ZW50c306IHtzdG9yZTogSVgyRW5naW5lUmVkdWNlclN0b3JlfSkge1xuICBpbmplY3RCZWhhdmlvckNTU0ZpeGVzKGV2ZW50cyk7XG4gIGNvbnN0IHt0eXBlczogZXZlbnRUeXBlcywgaGFuZGxlcjogZXZlbnRIYW5kbGVyfSA9IGxvZ2ljO1xuICBjb25zdCB7aXhEYXRhfSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIGNvbnN0IHthY3Rpb25MaXN0c30gPSBpeERhdGE7XG4gIGNvbnN0IGV2ZW50VGFyZ2V0cyA9IG1hcEZvdW5kVmFsdWVzKGV2ZW50cywgZ2V0QWZmZWN0ZWRGb3JFdmVudCk7XG5cbiAgaWYgKCFzaXplKGV2ZW50VGFyZ2V0cykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBmb3JFYWNoKGV2ZW50VGFyZ2V0cywgKGVsZW1lbnRzLCBrZXkpID0+IHtcbiAgICBjb25zdCBldmVudCA9IGV2ZW50c1trZXldO1xuICAgIGNvbnN0IHtcbiAgICAgIGFjdGlvbjogZXZlbnRBY3Rpb24sXG4gICAgICBpZDogZXZlbnRJZCxcbiAgICAgIG1lZGlhUXVlcmllcyA9IGl4RGF0YS5tZWRpYVF1ZXJ5S2V5cyxcbiAgICB9ID0gZXZlbnQ7XG4gICAgY29uc3Qge2FjdGlvbkxpc3RJZH0gPSBldmVudEFjdGlvbi5jb25maWc7XG5cbiAgICBpZiAoIW1lZGlhUXVlcmllc0VxdWFsKG1lZGlhUXVlcmllcywgaXhEYXRhLm1lZGlhUXVlcnlLZXlzKSkge1xuICAgICAgc3RvcmUuZGlzcGF0Y2gobWVkaWFRdWVyaWVzRGVmaW5lZCgpKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBldmVudEFjdGlvbi5hY3Rpb25UeXBlSWQgPT09IEFjdGlvblR5cGVDb25zdHMuR0VORVJBTF9DT05USU5VT1VTX0FDVElPTlxuICAgICkge1xuICAgICAgY29uc3QgY29uZmlncyA9IEFycmF5LmlzQXJyYXkoZXZlbnQuY29uZmlnKVxuICAgICAgICA/IGV2ZW50LmNvbmZpZ1xuICAgICAgICA6IFtldmVudC5jb25maWddO1xuXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDA2IC0gUGFyYW1ldGVyICdldmVudENvbmZpZycgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgICAgIGNvbmZpZ3MuZm9yRWFjaCgoZXZlbnRDb25maWcpID0+IHtcbiAgICAgICAgY29uc3Qge2NvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cElkfSA9IGV2ZW50Q29uZmlnO1xuICAgICAgICBjb25zdCBwYXJhbUdyb3VwcyA9IGdldChcbiAgICAgICAgICBhY3Rpb25MaXN0cyxcbiAgICAgICAgICBgJHthY3Rpb25MaXN0SWR9LmNvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cHNgLFxuICAgICAgICAgIFtdXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHBhcmFtZXRlckdyb3VwID0gZmluZChcbiAgICAgICAgICBwYXJhbUdyb3VwcyxcbiAgICAgICAgICAoe2lkfSkgPT4gaWQgPT09IGNvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cElkXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNtb290aGluZyA9IChldmVudENvbmZpZy5zbW9vdGhpbmcgfHwgMCkgLyAxMDA7XG4gICAgICAgIGNvbnN0IHJlc3RpbmdWYWx1ZSA9IChldmVudENvbmZpZy5yZXN0aW5nU3RhdGUgfHwgMCkgLyAxMDA7XG5cbiAgICAgICAgaWYgKCFwYXJhbWV0ZXJHcm91cCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGV2ZW50VGFyZ2V0LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGV2ZW50U3RhdGVLZXkgPSBldmVudElkICsgQ09MT05fREVMSU1JVEVSICsgaW5kZXg7XG4gICAgICAgICAgY3JlYXRlR3JvdXBJbnN0YW5jZXMoe1xuICAgICAgICAgICAgc3RvcmUsXG4gICAgICAgICAgICBldmVudFN0YXRlS2V5LFxuICAgICAgICAgICAgZXZlbnRUYXJnZXQsXG4gICAgICAgICAgICBldmVudElkLFxuICAgICAgICAgICAgZXZlbnRDb25maWcsXG4gICAgICAgICAgICBhY3Rpb25MaXN0SWQsXG4gICAgICAgICAgICBwYXJhbWV0ZXJHcm91cCxcbiAgICAgICAgICAgIHNtb290aGluZyxcbiAgICAgICAgICAgIHJlc3RpbmdWYWx1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBldmVudEFjdGlvbi5hY3Rpb25UeXBlSWQgPT09IEFjdGlvblR5cGVDb25zdHMuR0VORVJBTF9TVEFSVF9BQ1RJT04gfHxcbiAgICAgIGlzUXVpY2tFZmZlY3QoZXZlbnRBY3Rpb24uYWN0aW9uVHlwZUlkKVxuICAgICkge1xuICAgICAgcmVuZGVySW5pdGlhbEdyb3VwKHtzdG9yZSwgYWN0aW9uTGlzdElkLCBldmVudElkfSk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBoYW5kbGVFdmVudCA9IChuYXRpdmVFdmVudDogYW55KSA9PiB7XG4gICAgY29uc3Qge2l4U2Vzc2lvbn0gPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgIGZvckVhY2hFdmVudFRhcmdldChldmVudFRhcmdldHMsIChlbGVtZW50LCBldmVudElkLCBldmVudFN0YXRlS2V5KSA9PiB7XG4gICAgICBjb25zdCBldmVudCA9IGV2ZW50c1tldmVudElkXTtcbiAgICAgIGNvbnN0IG9sZFN0YXRlID0gaXhTZXNzaW9uLmV2ZW50U3RhdGVbZXZlbnRTdGF0ZUtleV07XG4gICAgICBjb25zdCB7YWN0aW9uOiBldmVudEFjdGlvbiwgbWVkaWFRdWVyaWVzID0gaXhEYXRhLm1lZGlhUXVlcnlLZXlzfSA9IGV2ZW50O1xuICAgICAgLy8gQnlwYXNzIGV2ZW50IGhhbmRsZXIgaWYgY3VycmVudCBtZWRpYSBxdWVyeSBpcyBub3QgbGlzdGVkIGluIGV2ZW50IGNvbmZpZ1xuICAgICAgaWYgKCFzaG91bGRBbGxvd01lZGlhUXVlcnkobWVkaWFRdWVyaWVzLCBpeFNlc3Npb24ubWVkaWFRdWVyeUtleSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaGFuZGxlRXZlbnRXaXRoQ29uZmlnID0gKGV2ZW50Q29uZmlnID0ge30pID0+IHtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBldmVudEhhbmRsZXIoXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RvcmUsXG4gICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICBldmVudENvbmZpZyxcbiAgICAgICAgICAgIG5hdGl2ZUV2ZW50LFxuICAgICAgICAgICAgZXZlbnRTdGF0ZUtleSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9sZFN0YXRlXG4gICAgICAgICk7XG4gICAgICAgIGlmICghc2hhbGxvd0VxdWFsKG5ld1N0YXRlLCBvbGRTdGF0ZSkpIHtcbiAgICAgICAgICBzdG9yZS5kaXNwYXRjaChldmVudFN0YXRlQ2hhbmdlZChldmVudFN0YXRlS2V5LCBuZXdTdGF0ZSkpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgaWYgKFxuICAgICAgICBldmVudEFjdGlvbi5hY3Rpb25UeXBlSWQgPT09IEFjdGlvblR5cGVDb25zdHMuR0VORVJBTF9DT05USU5VT1VTX0FDVElPTlxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZ3MgPSBBcnJheS5pc0FycmF5KGV2ZW50LmNvbmZpZylcbiAgICAgICAgICA/IGV2ZW50LmNvbmZpZ1xuICAgICAgICAgIDogW2V2ZW50LmNvbmZpZ107XG4gICAgICAgIGNvbmZpZ3MuZm9yRWFjaChoYW5kbGVFdmVudFdpdGhDb25maWcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGFuZGxlRXZlbnRXaXRoQ29uZmlnKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRXZlbnRUaHJvdHRsZWQgPSB0aHJvdHRsZShoYW5kbGVFdmVudCwgVEhST1RUTEVEX0VWRU5UX1dBSVQpO1xuXG4gIGNvbnN0IGFkZExpc3RlbmVycyA9ICh7XG4gICAgdGFyZ2V0ID0gZG9jdW1lbnQsXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAndHlwZXMnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gICAgdHlwZXMsXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnc2hvdWxkVGhyb3R0bGUnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gICAgdGhyb3R0bGU6IHNob3VsZFRocm90dGxlLFxuICB9KSA9PiB7XG4gICAgdHlwZXNcbiAgICAgIC5zcGxpdCgnICcpXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDA2IC0gUGFyYW1ldGVyICd0eXBlJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICAgICAgLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlckZ1bmMgPSBzaG91bGRUaHJvdHRsZSA/IGhhbmRsZUV2ZW50VGhyb3R0bGVkIDogaGFuZGxlRXZlbnQ7XG4gICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXJGdW5jKTtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goZXZlbnRMaXN0ZW5lckFkZGVkKHRhcmdldCwgW3R5cGUsIGhhbmRsZXJGdW5jXSkpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnRUeXBlcykpIHtcbiAgICBldmVudFR5cGVzLmZvckVhY2goYWRkTGlzdGVuZXJzKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXZlbnRUeXBlcyA9PT0gJ3N0cmluZycpIHtcbiAgICBhZGRMaXN0ZW5lcnMobG9naWMpO1xuICB9XG59XG5cbi8qKlxuICogSW5qZWN0cyBDU1MgaW50byB0aGUgZG9jdW1lbnQgdG8gZml4IGJlaGF2aW9yIGlzc3VlcyBhY3Jvc3NcbiAqIGRpZmZlcmVudCBkZXZpY2VzLlxuICovXG5cbmZ1bmN0aW9uIGluamVjdEJlaGF2aW9yQ1NTRml4ZXMoZXZlbnRzOiBhbnkpIHtcbiAgaWYgKCFJU19NT0JJTEVfU0FGQVJJKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaW5qZWN0ZWRTZWxlY3RvcnM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcblxuICBsZXQgY3NzVGV4dCA9ICcnO1xuICBmb3IgKGNvbnN0IGV2ZW50SWQgaW4gZXZlbnRzKSB7XG4gICAgY29uc3Qge2V2ZW50VHlwZUlkLCB0YXJnZXR9ID0gZXZlbnRzW2V2ZW50SWRdO1xuXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBlbGVtZW50QXBpLmdldFF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyNTM4IC0gVHlwZSAnbnVsbCcgY2Fubm90IGJlIHVzZWQgYXMgYW4gaW5kZXggdHlwZS5cbiAgICBpZiAoaW5qZWN0ZWRTZWxlY3RvcnNbc2VsZWN0b3JdKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBhZGQgYSBcImN1cnNvcjogcG9pbnRlclwiIHN0eWxlIHJ1bGUgdG8gZW5zdXJlIHRoYXQgQ0xJQ0sgZXZlbnRzIGdldCBmaXJlZCBmb3IgSU9TIGRldmljZXNcbiAgICBpZiAoXG4gICAgICBldmVudFR5cGVJZCA9PT0gRXZlbnRUeXBlQ29uc3RzLk1PVVNFX0NMSUNLIHx8XG4gICAgICBldmVudFR5cGVJZCA9PT0gRXZlbnRUeXBlQ29uc3RzLk1PVVNFX1NFQ09ORF9DTElDS1xuICAgICkge1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjUzOCAtIFR5cGUgJ251bGwnIGNhbm5vdCBiZSB1c2VkIGFzIGFuIGluZGV4IHR5cGUuXG4gICAgICBpbmplY3RlZFNlbGVjdG9yc1tzZWxlY3Rvcl0gPSB0cnVlO1xuICAgICAgY3NzVGV4dCArPVxuICAgICAgICBzZWxlY3RvciArXG4gICAgICAgICd7JyArXG4gICAgICAgICdjdXJzb3I6IHBvaW50ZXI7JyArXG4gICAgICAgICd0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjsnICtcbiAgICAgICAgJ30nO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjc3NUZXh0KSB7XG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLnRleHRDb250ZW50ID0gY3NzVGV4dDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJJbml0aWFsR3JvdXAoe1xuICBzdG9yZSxcbiAgYWN0aW9uTGlzdElkLFxuICBldmVudElkLFxufToge1xuICBzdG9yZTogSVgyRW5naW5lUmVkdWNlclN0b3JlO1xuICBhY3Rpb25MaXN0SWQ6IG51bWJlcjtcbiAgZXZlbnRJZDogbnVtYmVyO1xufSkge1xuICBjb25zdCB7aXhEYXRhLCBpeFNlc3Npb259ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgY29uc3Qge2FjdGlvbkxpc3RzLCBldmVudHN9ID0gaXhEYXRhO1xuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMxODA0OCAtICdldmVudHMnIGlzIHBvc3NpYmx5ICd1bmRlZmluZWQnLlxuICBjb25zdCBldmVudCA9IGV2ZW50c1tldmVudElkXTtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMTgwNDggLSAnYWN0aW9uTGlzdHMnIGlzIHBvc3NpYmx5ICd1bmRlZmluZWQnLlxuICBjb25zdCBhY3Rpb25MaXN0ID0gYWN0aW9uTGlzdHNbYWN0aW9uTGlzdElkXTtcblxuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gUHJvcGVydHkgJ3VzZUZpcnN0R3JvdXBBc0luaXRpYWxTdGF0ZScgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAnQWN0aW9uTGlzdFR5cGUnLlxuICBpZiAoYWN0aW9uTGlzdCAmJiBhY3Rpb25MaXN0LnVzZUZpcnN0R3JvdXBBc0luaXRpYWxTdGF0ZSkge1xuICAgIGNvbnN0IGluaXRpYWxTdGF0ZUl0ZW1zID0gZ2V0KFxuICAgICAgYWN0aW9uTGlzdCxcbiAgICAgICdhY3Rpb25JdGVtR3JvdXBzWzBdLmFjdGlvbkl0ZW1zJyxcbiAgICAgIFtdXG4gICAgKTtcblxuICAgIC8vIEJ5cGFzcyBpbml0aWFsIHN0YXRlIHJlbmRlciBpZiBjdXJyZW50IG1lZGlhIHF1ZXJ5IGlzIG5vdCBsaXN0ZWQgaW4gZXZlbnQgY29uZmlnXG4gICAgY29uc3QgbWVkaWFRdWVyaWVzID0gZ2V0KGV2ZW50LCAnbWVkaWFRdWVyaWVzJywgaXhEYXRhLm1lZGlhUXVlcnlLZXlzKTtcbiAgICBpZiAoIXNob3VsZEFsbG93TWVkaWFRdWVyeShtZWRpYVF1ZXJpZXMsIGl4U2Vzc2lvbi5tZWRpYVF1ZXJ5S2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGluaXRpYWxTdGF0ZUl0ZW1zLmZvckVhY2goKGFjdGlvbkl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHtjb25maWc6IGl0ZW1Db25maWcsIGFjdGlvblR5cGVJZH0gPSBhY3Rpb25JdGVtO1xuICAgICAgY29uc3QgY29uZmlnID1cbiAgICAgICAgLy8gV2hlbiB1c2VFdmVudFRhcmdldCBpcyBleHBsaWNpdGx5IHRydWUsIHVzZSBldmVudCB0YXJnZXQvdGFyZ2V0cyB0byBxdWVyeSBlbGVtZW50c1xuICAgICAgICAvLyBIb3dldmVyLCBza2lwIHRoaXMgY29uZGl0aW9uIHdoZW4gb2JqZWN0SWQgaXMgZGVmaW5lZFxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gUHJvcGVydHkgJ3RhcmdldCcgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAnbmV2ZXInLlxuICAgICAgICBpdGVtQ29uZmlnPy50YXJnZXQ/LnVzZUV2ZW50VGFyZ2V0ID09PSB0cnVlICYmXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBQcm9wZXJ0eSAndGFyZ2V0JyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICduZXZlcicuXG4gICAgICAgIGl0ZW1Db25maWc/LnRhcmdldD8ub2JqZWN0SWQgPT0gbnVsbFxuICAgICAgICAgID8gLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMTgwNDggLSAnZXZlbnQnIGlzIHBvc3NpYmx5ICd1bmRlZmluZWQnLlxuICAgICAgICAgICAge3RhcmdldDogZXZlbnQudGFyZ2V0LCB0YXJnZXRzOiBldmVudC50YXJnZXRzfVxuICAgICAgICAgIDogaXRlbUNvbmZpZztcbiAgICAgIGNvbnN0IGl0ZW1FbGVtZW50cyA9IGdldEFmZmVjdGVkRWxlbWVudHMoe2NvbmZpZywgZXZlbnQsIGVsZW1lbnRBcGl9KTtcbiAgICAgIGNvbnN0IHNob3VsZFVzZVBsdWdpbiA9IGlzUGx1Z2luVHlwZShhY3Rpb25UeXBlSWQpO1xuXG4gICAgICBpdGVtRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBwbHVnaW5JbnN0YW5jZSA9IHNob3VsZFVzZVBsdWdpblxuICAgICAgICAgID8gY3JlYXRlUGx1Z2luSW5zdGFuY2UoYWN0aW9uVHlwZUlkKT8uKGVsZW1lbnQsIGFjdGlvbkl0ZW0pXG4gICAgICAgICAgOiBudWxsO1xuICAgICAgICBjcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgICAgZGVzdGluYXRpb246IGdldERlc3RpbmF0aW9uVmFsdWVzKFxuICAgICAgICAgICAge2VsZW1lbnQsIGFjdGlvbkl0ZW0sIGVsZW1lbnRBcGl9LFxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICAgICAgcGx1Z2luSW5zdGFuY2VcbiAgICAgICAgICApLFxuICAgICAgICAgIGltbWVkaWF0ZTogdHJ1ZSxcbiAgICAgICAgICBzdG9yZSxcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIGV2ZW50SWQsXG4gICAgICAgICAgYWN0aW9uSXRlbSxcbiAgICAgICAgICBhY3Rpb25MaXN0SWQsXG4gICAgICAgICAgcGx1Z2luSW5zdGFuY2UsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BBbGxBY3Rpb25Hcm91cHMoe3N0b3JlfToge3N0b3JlOiBJWDJFbmdpbmVSZWR1Y2VyU3RvcmV9KSB7XG4gIGNvbnN0IHtpeEluc3RhbmNlc30gPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBmb3JFYWNoKGl4SW5zdGFuY2VzLCAoaW5zdGFuY2UpID0+IHtcbiAgICBpZiAoIWluc3RhbmNlLmNvbnRpbnVvdXMpIHtcbiAgICAgIGNvbnN0IHthY3Rpb25MaXN0SWQsIHZlcmJvc2V9ID0gaW5zdGFuY2U7XG4gICAgICByZW1vdmVJbnN0YW5jZShpbnN0YW5jZSwgc3RvcmUpO1xuICAgICAgaWYgKHZlcmJvc2UpIHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgYWN0aW9uTGlzdFBsYXliYWNrQ2hhbmdlZCh7YWN0aW9uTGlzdElkLCBpc1BsYXlpbmc6IGZhbHNlfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcEFjdGlvbkdyb3VwKHtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnc3RvcmUnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gIHN0b3JlLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgZXZlbnRJZCxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gIGV2ZW50VGFyZ2V0LFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgZXZlbnRTdGF0ZUtleSxcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnYWN0aW9uTGlzdElkJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBhY3Rpb25MaXN0SWQsXG59KSB7XG4gIGNvbnN0IHtpeEluc3RhbmNlcywgaXhTZXNzaW9ufSA9IHN0b3JlLmdldFN0YXRlKCk7XG5cbiAgLy8gQ2hlY2sgZm9yIGVsZW1lbnQgYm91bmRhcnkgYmVmb3JlIHN0b3BwaW5nIGVuZ2luZSBpbnN0YW5jZXNcbiAgY29uc3QgZXZlbnRFbGVtZW50Um9vdCA9XG4gICAgaXhTZXNzaW9uLmhhc0JvdW5kYXJ5Tm9kZXMgJiYgZXZlbnRUYXJnZXRcbiAgICAgID8gZWxlbWVudEFwaS5nZXRDbG9zZXN0RWxlbWVudChldmVudFRhcmdldCwgQk9VTkRBUllfU0VMRUNUT1IpXG4gICAgICA6IG51bGw7XG5cbiAgZm9yRWFjaChpeEluc3RhbmNlcywgKGluc3RhbmNlKSA9PiB7XG4gICAgY29uc3QgYm91bmRhcnlNb2RlID0gZ2V0KGluc3RhbmNlLCAnYWN0aW9uSXRlbS5jb25maWcudGFyZ2V0LmJvdW5kYXJ5TW9kZScpO1xuICAgIC8vIFZhbGlkYXRlIGV2ZW50IGtleSBpZiBldmVudFN0YXRlS2V5IHdhcyBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHQgdG8gdHJ1ZVxuICAgIGNvbnN0IHZhbGlkRXZlbnRLZXkgPSBldmVudFN0YXRlS2V5XG4gICAgICA/IGluc3RhbmNlLmV2ZW50U3RhdGVLZXkgPT09IGV2ZW50U3RhdGVLZXlcbiAgICAgIDogdHJ1ZTtcbiAgICAvLyBSZW1vdmUgZW5naW5lIGluc3RhbmNlcyB0aGF0IG1hdGNoIHRoZSByZXF1aXJlZCBpZHNcbiAgICBpZiAoXG4gICAgICBpbnN0YW5jZS5hY3Rpb25MaXN0SWQgPT09IGFjdGlvbkxpc3RJZCAmJlxuICAgICAgaW5zdGFuY2UuZXZlbnRJZCA9PT0gZXZlbnRJZCAmJlxuICAgICAgdmFsaWRFdmVudEtleVxuICAgICkge1xuICAgICAgLy8gQXZvaWQgcmVtb3ZhbCB3aGVuIHJvb3QgYm91bmRhcnkgZG9lcyBub3QgY29udGFpbiBpbnN0YW5jZSBlbGVtZW50XG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50RWxlbWVudFJvb3QgJiZcbiAgICAgICAgYm91bmRhcnlNb2RlICYmXG4gICAgICAgICFlbGVtZW50QXBpLmVsZW1lbnRDb250YWlucyhldmVudEVsZW1lbnRSb290LCBpbnN0YW5jZS5lbGVtZW50KVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJlbW92ZUluc3RhbmNlKGluc3RhbmNlLCBzdG9yZSk7XG4gICAgICBpZiAoaW5zdGFuY2UudmVyYm9zZSkge1xuICAgICAgICBzdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICBhY3Rpb25MaXN0UGxheWJhY2tDaGFuZ2VkKHthY3Rpb25MaXN0SWQsIGlzUGxheWluZzogZmFsc2V9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydEFjdGlvbkdyb3VwKHtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnc3RvcmUnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gIHN0b3JlLFxuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdldmVudElkJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBldmVudElkLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgZXZlbnRUYXJnZXQsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICBldmVudFN0YXRlS2V5LFxuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdhY3Rpb25MaXN0SWQnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gIGFjdGlvbkxpc3RJZCxcbiAgZ3JvdXBJbmRleCA9IDAsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICBpbW1lZGlhdGUsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICB2ZXJib3NlLFxufSkge1xuICBjb25zdCB7aXhEYXRhLCBpeFNlc3Npb259ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgY29uc3Qge2V2ZW50c30gPSBpeERhdGE7XG4gIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2V2ZW50SWRdIHx8IHt9O1xuICBjb25zdCB7bWVkaWFRdWVyaWVzID0gaXhEYXRhLm1lZGlhUXVlcnlLZXlzfSA9IGV2ZW50O1xuICBjb25zdCBhY3Rpb25MaXN0ID0gZ2V0KGl4RGF0YSwgYGFjdGlvbkxpc3RzLiR7YWN0aW9uTGlzdElkfWAsIHt9KTtcbiAgY29uc3Qge2FjdGlvbkl0ZW1Hcm91cHMsIHVzZUZpcnN0R3JvdXBBc0luaXRpYWxTdGF0ZX0gPSBhY3Rpb25MaXN0O1xuICAvLyBBYm9ydCBwbGF5YmFjayBpZiBubyBhY3Rpb24gZ3JvdXBzXG4gIGlmICghYWN0aW9uSXRlbUdyb3VwcyB8fCAhYWN0aW9uSXRlbUdyb3Vwcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gUmVzZXQgdG8gZmlyc3QgZ3JvdXAgd2hlbiBldmVudCBsb29wIGlzIGNvbmZpZ3VyZWRcbiAgaWYgKGdyb3VwSW5kZXggPj0gYWN0aW9uSXRlbUdyb3Vwcy5sZW5ndGggJiYgZ2V0KGV2ZW50LCAnY29uZmlnLmxvb3AnKSkge1xuICAgIGdyb3VwSW5kZXggPSAwO1xuICB9XG4gIC8vIFNraXAgaW5pdGlhbCBzdGF0ZSBncm91cCBkdXJpbmcgYWN0aW9uIGxpc3QgcGxheWJhY2ssIGFzIGl0IHNob3VsZCBhbHJlYWR5IGJlIGFwcGxpZWRcbiAgaWYgKGdyb3VwSW5kZXggPT09IDAgJiYgdXNlRmlyc3RHcm91cEFzSW5pdGlhbFN0YXRlKSB7XG4gICAgZ3JvdXBJbmRleCsrO1xuICB9XG4gIC8vIElkZW50aWZ5IGZpcnN0IGFuaW1hdGVkIGdyb3VwIGFuZCBhcHBseSB0aGUgaW5pdGlhbCBRdWlja0VmZmVjdCBkZWxheVxuICBjb25zdCBpc0ZpcnN0R3JvdXAgPVxuICAgIGdyb3VwSW5kZXggPT09IDAgfHwgKGdyb3VwSW5kZXggPT09IDEgJiYgdXNlRmlyc3RHcm91cEFzSW5pdGlhbFN0YXRlKTtcbiAgY29uc3QgaW5zdGFuY2VEZWxheSA9XG4gICAgaXNGaXJzdEdyb3VwICYmIGlzUXVpY2tFZmZlY3QoZXZlbnQuYWN0aW9uPy5hY3Rpb25UeXBlSWQpXG4gICAgICA/IGV2ZW50LmNvbmZpZy5kZWxheVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgLy8gQWJvcnQgcGxheWJhY2sgaWYgbm8gYWN0aW9uIGl0ZW1zIGV4aXN0IGF0IGdyb3VwIGluZGV4XG4gIGNvbnN0IGFjdGlvbkl0ZW1zID0gZ2V0KGFjdGlvbkl0ZW1Hcm91cHMsIFtncm91cEluZGV4LCAnYWN0aW9uSXRlbXMnXSwgW10pO1xuICBpZiAoIWFjdGlvbkl0ZW1zLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBBYm9ydCBwbGF5YmFjayBpZiBjdXJyZW50IG1lZGlhIHF1ZXJ5IGlzIG5vdCBsaXN0ZWQgaW4gZXZlbnQgY29uZmlnXG4gIGlmICghc2hvdWxkQWxsb3dNZWRpYVF1ZXJ5KG1lZGlhUXVlcmllcywgaXhTZXNzaW9uLm1lZGlhUXVlcnlLZXkpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIExpbWl0IGFmZmVjdGVkIGVsZW1lbnRzIHdoZW4gZXZlbnQgdGFyZ2V0IGlzIHdpdGhpbiBhIGJvdW5kYXJ5IG5vZGVcbiAgY29uc3QgZXZlbnRFbGVtZW50Um9vdCA9XG4gICAgaXhTZXNzaW9uLmhhc0JvdW5kYXJ5Tm9kZXMgJiYgZXZlbnRUYXJnZXRcbiAgICAgID8gZWxlbWVudEFwaS5nZXRDbG9zZXN0RWxlbWVudChldmVudFRhcmdldCwgQk9VTkRBUllfU0VMRUNUT1IpXG4gICAgICA6IG51bGw7XG5cbiAgY29uc3QgY2FycmllckluZGV4ID0gZ2V0TWF4RHVyYXRpb25JdGVtSW5kZXgoYWN0aW9uSXRlbXMpO1xuICBsZXQgZ3JvdXBTdGFydFJlc3VsdCA9IGZhbHNlO1xuXG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ2FjdGlvbkl0ZW0nIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDA2IC0gUGFyYW1ldGVyICdhY3Rpb25JbmRleCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgYWN0aW9uSXRlbXMuZm9yRWFjaCgoYWN0aW9uSXRlbSwgYWN0aW9uSW5kZXgpID0+IHtcbiAgICBjb25zdCB7Y29uZmlnLCBhY3Rpb25UeXBlSWR9ID0gYWN0aW9uSXRlbTtcbiAgICBjb25zdCBzaG91bGRVc2VQbHVnaW4gPSBpc1BsdWdpblR5cGUoYWN0aW9uVHlwZUlkKTtcbiAgICBjb25zdCB7dGFyZ2V0fSA9IGNvbmZpZztcbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50Um9vdCA9IHRhcmdldC5ib3VuZGFyeU1vZGUgPyBldmVudEVsZW1lbnRSb290IDogbnVsbDtcbiAgICBjb25zdCBlbGVtZW50cyA9IGdldEFmZmVjdGVkRWxlbWVudHMoe1xuICAgICAgY29uZmlnLFxuICAgICAgZXZlbnQsXG4gICAgICBldmVudFRhcmdldCxcbiAgICAgIGVsZW1lbnRSb290LFxuICAgICAgZWxlbWVudEFwaSxcbiAgICB9KTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50LCBlbGVtZW50SW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHBsdWdpbkluc3RhbmNlID0gc2hvdWxkVXNlUGx1Z2luXG4gICAgICAgID8gY3JlYXRlUGx1Z2luSW5zdGFuY2UoYWN0aW9uVHlwZUlkKT8uKGVsZW1lbnQsIGFjdGlvbkl0ZW0pXG4gICAgICAgIDogbnVsbDtcbiAgICAgIGNvbnN0IHBsdWdpbkR1cmF0aW9uID0gc2hvdWxkVXNlUGx1Z2luXG4gICAgICAgID8gZ2V0UGx1Z2luRHVyYXRpb24oYWN0aW9uVHlwZUlkKShlbGVtZW50LCBhY3Rpb25JdGVtKVxuICAgICAgICA6IG51bGw7XG4gICAgICBncm91cFN0YXJ0UmVzdWx0ID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGlzQ2FycmllciA9IGNhcnJpZXJJbmRleCA9PT0gYWN0aW9uSW5kZXggJiYgZWxlbWVudEluZGV4ID09PSAwO1xuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoe2VsZW1lbnQsIGFjdGlvbkl0ZW19KTtcbiAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gZ2V0RGVzdGluYXRpb25WYWx1ZXMoXG4gICAgICAgIHtlbGVtZW50LCBhY3Rpb25JdGVtLCBlbGVtZW50QXBpfSxcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgIHBsdWdpbkluc3RhbmNlXG4gICAgICApO1xuXG4gICAgICBjcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgIHN0b3JlLFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICBhY3Rpb25JdGVtLFxuICAgICAgICBldmVudElkLFxuICAgICAgICBldmVudFRhcmdldCxcbiAgICAgICAgZXZlbnRTdGF0ZUtleSxcbiAgICAgICAgYWN0aW9uTGlzdElkLFxuICAgICAgICBncm91cEluZGV4LFxuICAgICAgICBpc0NhcnJpZXIsXG4gICAgICAgIGNvbXB1dGVkU3R5bGUsXG4gICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICBpbW1lZGlhdGUsXG4gICAgICAgIHZlcmJvc2UsXG4gICAgICAgIHBsdWdpbkluc3RhbmNlLFxuICAgICAgICBwbHVnaW5EdXJhdGlvbixcbiAgICAgICAgaW5zdGFuY2VEZWxheSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGdyb3VwU3RhcnRSZXN1bHQ7XG59XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ29wdGlvbnMnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShvcHRpb25zKSB7XG4gIGNvbnN0IHtzdG9yZSwgY29tcHV0ZWRTdHlsZSwgLi4ucmVzdH0gPSBvcHRpb25zO1xuICBjb25zdCB7XG4gICAgZWxlbWVudCxcbiAgICBhY3Rpb25JdGVtLFxuXG4gICAgaW1tZWRpYXRlLFxuICAgIHBsdWdpbkluc3RhbmNlLFxuXG4gICAgY29udGludW91cyxcblxuICAgIHJlc3RpbmdWYWx1ZSxcbiAgICBldmVudElkLFxuICB9ID0gcmVzdDtcbiAgY29uc3QgYXV0b1N0YXJ0ID0gIWNvbnRpbnVvdXM7XG4gIGNvbnN0IGluc3RhbmNlSWQgPSBnZXRJbnN0YW5jZUlkKCk7XG5cbiAgY29uc3Qge2l4RWxlbWVudHMsIGl4U2Vzc2lvbiwgaXhEYXRhfSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIGNvbnN0IGVsZW1lbnRJZCA9IGdldEVsZW1lbnRJZChpeEVsZW1lbnRzLCBlbGVtZW50KTtcbiAgY29uc3Qge3JlZlN0YXRlfSA9IGl4RWxlbWVudHNbZWxlbWVudElkXSB8fCB7fTtcbiAgY29uc3QgcmVmVHlwZSA9IGVsZW1lbnRBcGkuZ2V0UmVmVHlwZShlbGVtZW50KTtcblxuICBjb25zdCBza2lwTW90aW9uID1cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDUzIC0gRWxlbWVudCBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlIGJlY2F1c2UgZXhwcmVzc2lvbiBvZiB0eXBlICdhbnknIGNhbid0IGJlIHVzZWQgdG8gaW5kZXggdHlwZSAneyByZWFkb25seSBUUkFOU0ZPUk1fTU9WRTogdHJ1ZTsgcmVhZG9ubHkgVFJBTlNGT1JNX1NDQUxFOiB0cnVlOyByZWFkb25seSBUUkFOU0ZPUk1fUk9UQVRFOiB0cnVlOyByZWFkb25seSBUUkFOU0ZPUk1fU0tFVzogdHJ1ZTsgcmVhZG9ubHkgU1RZTEVfU0laRTogdHJ1ZTsgcmVhZG9ubHkgU1RZTEVfRklMVEVSOiB0cnVlOyByZWFkb25seSBTVFlMRV9GT05UX1ZBUklBVElPTjogdHJ1ZTsgfScuXG4gICAgaXhTZXNzaW9uLnJlZHVjZWRNb3Rpb24gJiYgUmVkdWNlZE1vdGlvblR5cGVzW2FjdGlvbkl0ZW0uYWN0aW9uVHlwZUlkXTtcbiAgbGV0IHNraXBUb1ZhbHVlO1xuICBpZiAoc2tpcE1vdGlvbiAmJiBjb250aW51b3VzKSB7XG4gICAgc3dpdGNoIChpeERhdGEuZXZlbnRzW2V2ZW50SWRdPy5ldmVudFR5cGVJZCkge1xuICAgICAgY2FzZSBFdmVudFR5cGVDb25zdHMuTU9VU0VfTU9WRTpcbiAgICAgIGNhc2UgRXZlbnRUeXBlQ29uc3RzLk1PVVNFX01PVkVfSU5fVklFV1BPUlQ6XG4gICAgICAgIHNraXBUb1ZhbHVlID0gcmVzdGluZ1ZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHNraXBUb1ZhbHVlID0gMC41O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBjb25zdCBvcmlnaW4gPSBnZXRJbnN0YW5jZU9yaWdpbihcbiAgICBlbGVtZW50LFxuICAgIHJlZlN0YXRlLFxuICAgIGNvbXB1dGVkU3R5bGUsXG4gICAgYWN0aW9uSXRlbSxcbiAgICBlbGVtZW50QXBpLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgcGx1Z2luSW5zdGFuY2VcbiAgKTtcblxuICBzdG9yZS5kaXNwYXRjaChcbiAgICBpbnN0YW5jZUFkZGVkKHtcbiAgICAgIGluc3RhbmNlSWQsXG4gICAgICBlbGVtZW50SWQsXG4gICAgICBvcmlnaW4sXG4gICAgICByZWZUeXBlLFxuICAgICAgc2tpcE1vdGlvbixcbiAgICAgIHNraXBUb1ZhbHVlLFxuICAgICAgLi4ucmVzdCxcbiAgICB9KVxuICApO1xuXG4gIGRpc3BhdGNoQ3VzdG9tRXZlbnQoZG9jdW1lbnQuYm9keSwgJ2l4Mi1hbmltYXRpb24tc3RhcnRlZCcsIGluc3RhbmNlSWQpO1xuXG4gIGlmIChpbW1lZGlhdGUpIHtcbiAgICByZW5kZXJJbW1lZGlhdGVJbnN0YW5jZShzdG9yZSwgaW5zdGFuY2VJZCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb2JzZXJ2ZVN0b3JlKHtcbiAgICBzdG9yZSxcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdpeEluc3RhbmNlcycgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgICBzZWxlY3Q6ICh7aXhJbnN0YW5jZXN9KSA9PiBpeEluc3RhbmNlc1tpbnN0YW5jZUlkXSxcbiAgICBvbkNoYW5nZTogaGFuZGxlSW5zdGFuY2VDaGFuZ2UsXG4gIH0pO1xuXG4gIGlmIChhdXRvU3RhcnQpIHtcbiAgICBzdG9yZS5kaXNwYXRjaChpbnN0YW5jZVN0YXJ0ZWQoaW5zdGFuY2VJZCwgaXhTZXNzaW9uLnRpY2spKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVJbnN0YW5jZShpbnN0YW5jZTogYW55LCBzdG9yZTogSVgyRW5naW5lUmVkdWNlclN0b3JlKSB7XG4gIGRpc3BhdGNoQ3VzdG9tRXZlbnQoZG9jdW1lbnQuYm9keSwgJ2l4Mi1hbmltYXRpb24tc3RvcHBpbmcnLCB7XG4gICAgaW5zdGFuY2VJZDogaW5zdGFuY2UuaWQsXG4gICAgc3RhdGU6IHN0b3JlLmdldFN0YXRlKCksXG4gIH0pO1xuICBjb25zdCB7ZWxlbWVudElkLCBhY3Rpb25JdGVtfSA9IGluc3RhbmNlO1xuICBjb25zdCB7aXhFbGVtZW50c30gPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBjb25zdCB7cmVmLCByZWZUeXBlfSA9IGl4RWxlbWVudHNbZWxlbWVudElkXSB8fCB7fTtcbiAgaWYgKHJlZlR5cGUgPT09IEhUTUxfRUxFTUVOVCkge1xuICAgIGNsZWFudXBIVE1MRWxlbWVudChyZWYsIGFjdGlvbkl0ZW0sIGVsZW1lbnRBcGkpO1xuICB9XG4gIHN0b3JlLmRpc3BhdGNoKGluc3RhbmNlUmVtb3ZlZChpbnN0YW5jZS5pZCkpO1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaEN1c3RvbUV2ZW50KFxuICBlbGVtZW50OiBudWxsIHwgSFRNTEVsZW1lbnQsXG4gIGV2ZW50TmFtZTogc3RyaW5nLFxuICBkZXRhaWw6XG4gICAgfCBzdHJpbmdcbiAgICB8IHtcbiAgICAgICAgaW5zdGFuY2VJZDogYW55O1xuICAgICAgICBzdGF0ZTogYW55O1xuICAgICAgfVxuKSB7XG4gIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gIGV2ZW50LmluaXRDdXN0b21FdmVudChldmVudE5hbWUsIHRydWUsIHRydWUsIGRldGFpbCk7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzE4MDQ3IC0gJ2VsZW1lbnQnIGlzIHBvc3NpYmx5ICdudWxsJy5cbiAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVySW1tZWRpYXRlSW5zdGFuY2UoXG4gIHN0b3JlOiBJWDJFbmdpbmVSZWR1Y2VyU3RvcmUsXG4gIGluc3RhbmNlSWQ6IHN0cmluZ1xuKSB7XG4gIGNvbnN0IHtpeFBhcmFtZXRlcnN9ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgc3RvcmUuZGlzcGF0Y2goaW5zdGFuY2VTdGFydGVkKGluc3RhbmNlSWQsIDApKTtcbiAgc3RvcmUuZGlzcGF0Y2goYW5pbWF0aW9uRnJhbWVDaGFuZ2VkKHBlcmZvcm1hbmNlLm5vdygpLCBpeFBhcmFtZXRlcnMpKTtcbiAgY29uc3Qge2l4SW5zdGFuY2VzfSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIGhhbmRsZUluc3RhbmNlQ2hhbmdlKGl4SW5zdGFuY2VzW2luc3RhbmNlSWRdLCBzdG9yZSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUluc3RhbmNlQ2hhbmdlKGluc3RhbmNlOiBhbnksIHN0b3JlOiBJWDJFbmdpbmVSZWR1Y2VyU3RvcmUpIHtcbiAgY29uc3Qge1xuICAgIGFjdGl2ZSxcbiAgICBjb250aW51b3VzLFxuICAgIGNvbXBsZXRlLFxuICAgIGVsZW1lbnRJZCxcbiAgICBhY3Rpb25JdGVtLFxuICAgIGFjdGlvblR5cGVJZCxcbiAgICByZW5kZXJUeXBlLFxuICAgIGN1cnJlbnQsXG4gICAgZ3JvdXBJbmRleCxcbiAgICBldmVudElkLFxuICAgIGV2ZW50VGFyZ2V0LFxuICAgIGV2ZW50U3RhdGVLZXksXG4gICAgYWN0aW9uTGlzdElkLFxuICAgIGlzQ2FycmllcixcbiAgICBzdHlsZVByb3AsXG4gICAgdmVyYm9zZSxcbiAgICBwbHVnaW5JbnN0YW5jZSxcbiAgfSA9IGluc3RhbmNlO1xuXG4gIC8vIEJ5cGFzcyByZW5kZXIgaWYgY3VycmVudCBtZWRpYSBxdWVyeSBpcyBub3QgbGlzdGVkIGluIGV2ZW50IGNvbmZpZ1xuICBjb25zdCB7aXhEYXRhLCBpeFNlc3Npb259ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgY29uc3Qge2V2ZW50c30gPSBpeERhdGE7XG4gIGNvbnN0IGV2ZW50ID0gZXZlbnRzICYmIGV2ZW50c1tldmVudElkXSA/IGV2ZW50c1tldmVudElkXSA6IHt9O1xuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzM5IC0gIFByb3BlcnR5ICdtZWRpYVF1ZXJpZXMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ3t9IHwgdW5kZWZpbmVkJy5cbiAgY29uc3Qge21lZGlhUXVlcmllcyA9IGl4RGF0YS5tZWRpYVF1ZXJ5S2V5c30gPSBldmVudDtcbiAgaWYgKCFzaG91bGRBbGxvd01lZGlhUXVlcnkobWVkaWFRdWVyaWVzLCBpeFNlc3Npb24ubWVkaWFRdWVyeUtleSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY29udGludW91cyB8fCBhY3RpdmUgfHwgY29tcGxldGUpIHtcbiAgICBpZiAoY3VycmVudCB8fCAocmVuZGVyVHlwZSA9PT0gUkVOREVSX0dFTkVSQUwgJiYgY29tcGxldGUpKSB7XG4gICAgICAvLyBSZW5kZXIgY3VycmVudCB2YWx1ZXMgdG8gcmVmIHN0YXRlIGFuZCBncmFiIGxhdGVzdFxuICAgICAgc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIGVsZW1lbnRTdGF0ZUNoYW5nZWQoZWxlbWVudElkLCBhY3Rpb25UeXBlSWQsIGN1cnJlbnQsIGFjdGlvbkl0ZW0pXG4gICAgICApO1xuICAgICAgY29uc3Qge2l4RWxlbWVudHN9ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgIGNvbnN0IHtyZWYsIHJlZlR5cGUsIHJlZlN0YXRlfSA9IGl4RWxlbWVudHNbZWxlbWVudElkXSB8fCB7fTtcbiAgICAgIGNvbnN0IGFjdGlvblN0YXRlID0gcmVmU3RhdGUgJiYgcmVmU3RhdGVbYWN0aW9uVHlwZUlkXTtcblxuICAgICAgLy8gUmVuZGVyIEhUTUwgYW5kIHBsdWdpbiBlbGVtZW50c1xuICAgICAgaWYgKHJlZlR5cGUgPT09IEhUTUxfRUxFTUVOVCB8fCBpc1BsdWdpblR5cGUoYWN0aW9uVHlwZUlkKSkge1xuICAgICAgICByZW5kZXJIVE1MRWxlbWVudChcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gcmVmIGNhbiBiZSB1bmRlZmluZWRcbiAgICAgICAgICByZWYsXG4gICAgICAgICAgcmVmU3RhdGUsXG4gICAgICAgICAgYWN0aW9uU3RhdGUsXG4gICAgICAgICAgZXZlbnRJZCxcbiAgICAgICAgICBhY3Rpb25JdGVtLFxuICAgICAgICAgIHN0eWxlUHJvcCxcbiAgICAgICAgICBlbGVtZW50QXBpLFxuICAgICAgICAgIHJlbmRlclR5cGUsXG4gICAgICAgICAgcGx1Z2luSW5zdGFuY2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29tcGxldGUpIHtcbiAgICAgIGlmIChpc0NhcnJpZXIpIHtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjM0NSAtIEFyZ3VtZW50IG9mIHR5cGUgJ3sgc3RvcmU6IGFueTsgZXZlbnRJZDogYW55OyBldmVudFRhcmdldDogYW55OyBldmVudFN0YXRlS2V5OiBhbnk7IGFjdGlvbkxpc3RJZDogYW55OyBncm91cEluZGV4OiBhbnk7IHZlcmJvc2U6IGFueTsgfScgaXMgbm90IGFzc2lnbmFibGUgdG8gcGFyYW1ldGVyIG9mIHR5cGUgJ3sgc3RvcmU6IGFueTsgZXZlbnRJZDogYW55OyBldmVudFRhcmdldDogYW55OyBldmVudFN0YXRlS2V5OiBhbnk7IGFjdGlvbkxpc3RJZDogYW55OyBncm91cEluZGV4PzogbnVtYmVyIHwgdW5kZWZpbmVkOyBpbW1lZGlhdGU6IGFueTsgdmVyYm9zZTogYW55OyB9Jy5cbiAgICAgICAgY29uc3Qgc3RhcnRlZCA9IHN0YXJ0QWN0aW9uR3JvdXAoe1xuICAgICAgICAgIHN0b3JlLFxuICAgICAgICAgIGV2ZW50SWQsXG4gICAgICAgICAgZXZlbnRUYXJnZXQsXG4gICAgICAgICAgZXZlbnRTdGF0ZUtleSxcbiAgICAgICAgICBhY3Rpb25MaXN0SWQsXG4gICAgICAgICAgZ3JvdXBJbmRleDogZ3JvdXBJbmRleCArIDEsXG4gICAgICAgICAgdmVyYm9zZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh2ZXJib3NlICYmICFzdGFydGVkKSB7XG4gICAgICAgICAgc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgICBhY3Rpb25MaXN0UGxheWJhY2tDaGFuZ2VkKHthY3Rpb25MaXN0SWQsIGlzUGxheWluZzogZmFsc2V9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVtb3ZlSW5zdGFuY2UoaW5zdGFuY2UsIHN0b3JlKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJvYnNlcnZlUmVxdWVzdHMiLCJzdGFydEFjdGlvbkdyb3VwIiwic3RhcnRFbmdpbmUiLCJzdG9wQWN0aW9uR3JvdXAiLCJzdG9wQWxsQWN0aW9uR3JvdXBzIiwic3RvcEVuZ2luZSIsIlF1aWNrRWZmZWN0c0lkTGlzdCIsIk9iamVjdCIsImtleXMiLCJRdWlja0VmZmVjdElkcyIsImlzUXVpY2tFZmZlY3QiLCJhY3Rpb25UeXBlSWQiLCJpbmNsdWRlcyIsIkNPTE9OX0RFTElNSVRFUiIsIkJPVU5EQVJZX1NFTEVDVE9SIiwiSFRNTF9FTEVNRU5UIiwiUkVOREVSX0dFTkVSQUwiLCJXX01PRF9JWCIsIklYMkVuZ2luZUNvbnN0YW50cyIsImdldEFmZmVjdGVkRWxlbWVudHMiLCJnZXRFbGVtZW50SWQiLCJnZXREZXN0aW5hdGlvblZhbHVlcyIsIm9ic2VydmVTdG9yZSIsImdldEluc3RhbmNlSWQiLCJyZW5kZXJIVE1MRWxlbWVudCIsImNsZWFyQWxsU3R5bGVzIiwiZ2V0TWF4RHVyYXRpb25JdGVtSW5kZXgiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0SW5zdGFuY2VPcmlnaW4iLCJyZWR1Y2VMaXN0VG9Hcm91cCIsInNob3VsZE5hbWVzcGFjZUV2ZW50UGFyYW1ldGVyIiwiZ2V0TmFtZXNwYWNlZFBhcmFtZXRlcklkIiwic2hvdWxkQWxsb3dNZWRpYVF1ZXJ5IiwiY2xlYW51cEhUTUxFbGVtZW50IiwiY2xlYXJPYmplY3RDYWNoZSIsInN0cmluZ2lmeVRhcmdldCIsIm1lZGlhUXVlcmllc0VxdWFsIiwic2hhbGxvd0VxdWFsIiwiSVgyVmFuaWxsYVV0aWxzIiwiaXNQbHVnaW5UeXBlIiwiY3JlYXRlUGx1Z2luSW5zdGFuY2UiLCJnZXRQbHVnaW5EdXJhdGlvbiIsIklYMlZhbmlsbGFQbHVnaW5zIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJJU19NT0JJTEVfU0FGQVJJIiwibWF0Y2giLCJUSFJPVFRMRURfRVZFTlRfV0FJVCIsInN0b3JlIiwic2VsZWN0IiwiaXhSZXF1ZXN0IiwicHJldmlldyIsIm9uQ2hhbmdlIiwiaGFuZGxlUHJldmlld1JlcXVlc3QiLCJwbGF5YmFjayIsImhhbmRsZVBsYXliYWNrUmVxdWVzdCIsInN0b3AiLCJoYW5kbGVTdG9wUmVxdWVzdCIsImNsZWFyIiwiaGFuZGxlQ2xlYXJSZXF1ZXN0Iiwib2JzZXJ2ZU1lZGlhUXVlcnlDaGFuZ2UiLCJpeFNlc3Npb24iLCJtZWRpYVF1ZXJ5S2V5IiwiZWxlbWVudEFwaSIsImFsbG93RXZlbnRzIiwiZGlzcGF0Y2hQYWdlVXBkYXRlRXZlbnQiLCJvYnNlcnZlT25lUmVuZGVyVGljayIsIm9uVGljayIsInVuc3Vic2NyaWJlIiwidGljayIsInJhd0RhdGEiLCJkZWZlciIsInN0YXJ0Iiwic2V0VGltZW91dCIsImRvY3VtZW50IiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiYWN0aW9uTGlzdElkIiwiYWN0aW9uSXRlbUlkIiwiZXZlbnRJZCIsImltbWVkaWF0ZSIsInRlc3RNYW51YWwiLCJ2ZXJib3NlIiwiYWN0aW9uTGlzdCIsImFjdGlvbkxpc3RzIiwiQWN0aW9uVHlwZUNvbnN0cyIsIkdFTkVSQUxfU1RBUlRfQUNUSU9OIiwicmVuZGVySW5pdGlhbEdyb3VwIiwic3RhcnRlZCIsImRpc3BhdGNoIiwiYWN0aW9uTGlzdFBsYXliYWNrQ2hhbmdlZCIsImlzUGxheWluZyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJyYXdEYXRhSW1wb3J0ZWQiLCJhY3RpdmUiLCJzZXNzaW9uSW5pdGlhbGl6ZWQiLCJoYXNCb3VuZGFyeU5vZGVzIiwiQm9vbGVhbiIsInF1ZXJ5U2VsZWN0b3IiLCJyZWR1Y2VkTW90aW9uIiwiYm9keSIsImhhc0F0dHJpYnV0ZSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiYmluZEV2ZW50cyIsImFkZERvY3VtZW50Q2xhc3MiLCJoYXNEZWZpbmVkTWVkaWFRdWVyaWVzIiwic2Vzc2lvblN0YXJ0ZWQiLCJzdGFydFJlbmRlckxvb3AiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbmRleE9mIiwiaGFuZGxlRnJhbWUiLCJub3ciLCJpeFBhcmFtZXRlcnMiLCJhbmltYXRpb25GcmFtZUNoYW5nZWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwZXJmb3JtYW5jZSIsImV2ZW50TGlzdGVuZXJzIiwiZm9yRWFjaCIsImNsZWFyRXZlbnRMaXN0ZW5lciIsInNlc3Npb25TdG9wcGVkIiwidGFyZ2V0IiwibGlzdGVuZXJQYXJhbXMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYXBwbHkiLCJjcmVhdGVHcm91cEluc3RhbmNlcyIsImV2ZW50U3RhdGVLZXkiLCJldmVudFRhcmdldCIsImV2ZW50Q29uZmlnIiwicGFyYW1ldGVyR3JvdXAiLCJzbW9vdGhpbmciLCJyZXN0aW5nVmFsdWUiLCJpeERhdGEiLCJldmVudHMiLCJldmVudCIsImV2ZW50VHlwZUlkIiwidGFyZ2V0Q2FjaGUiLCJpbnN0YW5jZUFjdGlvbkdyb3VwcyIsImluc3RhbmNlQ29uZmlncyIsImNvbnRpbnVvdXNBY3Rpb25Hcm91cHMiLCJpZCIsInBhcmFtZXRlcklkIiwiZXZlbnRFbGVtZW50Um9vdCIsImdldENsb3Nlc3RFbGVtZW50IiwiYWN0aW9uR3JvdXAiLCJrZXlmcmFtZSIsImFjdGlvbkl0ZW1zIiwiYWN0aW9uSXRlbSIsImNvbmZpZyIsImVsZW1lbnRSb290IiwiYm91bmRhcnlNb2RlIiwia2V5IiwiYXBwZW5kQWN0aW9uSXRlbSIsImVsZW1lbnQiLCJwdXNoIiwiYWN0aW9uR3JvdXBzIiwiZ2V0Iiwic2hvdWxkVXNlUGx1Z2luIiwiUExVR0lOX1JJVkUiLCJzZWxlY3Rvckd1aWRzIiwibGVuZ3RoIiwicGx1Z2luSW5zdGFuY2UiLCJkZXN0aW5hdGlvbiIsImNyZWF0ZUluc3RhbmNlIiwiY29udGludW91cyIsIm5ld0FjdGlvbkdyb3VwcyIsImdyb3VwSW5kZXgiLCJzb21lIiwiZ3JvdXAiLCJpbmRleCIsImV2ZW50VHlwZU1hcCIsInVwZGF0ZVZpZXdwb3J0V2lkdGgiLCJsb2dpYyIsIklYMlZhbmlsbGFFdmVudHMiLCJjb25zb2xlIiwid2FybiIsImJpbmRFdmVudFR5cGUiLCJiaW5kUmVzaXplRXZlbnRzIiwiV0lORE9XX1JFU0laRV9FVkVOVFMiLCJoYW5kbGVSZXNpemUiLCJ0eXBlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50TGlzdGVuZXJBZGRlZCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInZpZXdwb3J0V2lkdGgiLCJtZWRpYVF1ZXJpZXMiLCJ2aWV3cG9ydFdpZHRoQ2hhbmdlZCIsIm1hcEZvdW5kVmFsdWVzIiwib2JqZWN0IiwiaXRlcmF0ZWUiLCJvbWl0QnkiLCJtYXBWYWx1ZXMiLCJpc0VtcHR5IiwiZm9yRWFjaEV2ZW50VGFyZ2V0IiwiZXZlbnRUYXJnZXRzIiwiZXZlbnRDYWxsYmFjayIsImVsZW1lbnRzIiwiZ2V0QWZmZWN0ZWRGb3JFdmVudCIsInRhcmdldHMiLCJpbmplY3RCZWhhdmlvckNTU0ZpeGVzIiwidHlwZXMiLCJldmVudFR5cGVzIiwiaGFuZGxlciIsImV2ZW50SGFuZGxlciIsInNpemUiLCJhY3Rpb24iLCJldmVudEFjdGlvbiIsIm1lZGlhUXVlcnlLZXlzIiwibWVkaWFRdWVyaWVzRGVmaW5lZCIsIkdFTkVSQUxfQ09OVElOVU9VU19BQ1RJT04iLCJjb25maWdzIiwiQXJyYXkiLCJpc0FycmF5IiwiY29udGludW91c1BhcmFtZXRlckdyb3VwSWQiLCJwYXJhbUdyb3VwcyIsImZpbmQiLCJyZXN0aW5nU3RhdGUiLCJoYW5kbGVFdmVudCIsIm5hdGl2ZUV2ZW50Iiwib2xkU3RhdGUiLCJldmVudFN0YXRlIiwiaGFuZGxlRXZlbnRXaXRoQ29uZmlnIiwibmV3U3RhdGUiLCJldmVudFN0YXRlQ2hhbmdlZCIsImhhbmRsZUV2ZW50VGhyb3R0bGVkIiwidGhyb3R0bGUiLCJhZGRMaXN0ZW5lcnMiLCJzaG91bGRUaHJvdHRsZSIsInNwbGl0IiwiZmlsdGVyIiwiaGFuZGxlckZ1bmMiLCJpbmplY3RlZFNlbGVjdG9ycyIsImNzc1RleHQiLCJzZWxlY3RvciIsImdldFF1ZXJ5U2VsZWN0b3IiLCJFdmVudFR5cGVDb25zdHMiLCJNT1VTRV9DTElDSyIsIk1PVVNFX1NFQ09ORF9DTElDSyIsInN0eWxlIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJ1c2VGaXJzdEdyb3VwQXNJbml0aWFsU3RhdGUiLCJpbml0aWFsU3RhdGVJdGVtcyIsIml0ZW1Db25maWciLCJ1c2VFdmVudFRhcmdldCIsIm9iamVjdElkIiwiaXRlbUVsZW1lbnRzIiwiaXhJbnN0YW5jZXMiLCJpbnN0YW5jZSIsInJlbW92ZUluc3RhbmNlIiwidmFsaWRFdmVudEtleSIsImVsZW1lbnRDb250YWlucyIsImFjdGlvbkl0ZW1Hcm91cHMiLCJpc0ZpcnN0R3JvdXAiLCJpbnN0YW5jZURlbGF5IiwiZGVsYXkiLCJ1bmRlZmluZWQiLCJjYXJyaWVySW5kZXgiLCJncm91cFN0YXJ0UmVzdWx0IiwiYWN0aW9uSW5kZXgiLCJlbGVtZW50SW5kZXgiLCJwbHVnaW5EdXJhdGlvbiIsImlzQ2FycmllciIsImNvbXB1dGVkU3R5bGUiLCJvcHRpb25zIiwicmVzdCIsImF1dG9TdGFydCIsImluc3RhbmNlSWQiLCJpeEVsZW1lbnRzIiwiZWxlbWVudElkIiwicmVmU3RhdGUiLCJyZWZUeXBlIiwiZ2V0UmVmVHlwZSIsInNraXBNb3Rpb24iLCJSZWR1Y2VkTW90aW9uVHlwZXMiLCJza2lwVG9WYWx1ZSIsIk1PVVNFX01PVkUiLCJNT1VTRV9NT1ZFX0lOX1ZJRVdQT1JUIiwib3JpZ2luIiwiaW5zdGFuY2VBZGRlZCIsImRpc3BhdGNoQ3VzdG9tRXZlbnQiLCJyZW5kZXJJbW1lZGlhdGVJbnN0YW5jZSIsImhhbmRsZUluc3RhbmNlQ2hhbmdlIiwiaW5zdGFuY2VTdGFydGVkIiwicmVmIiwiaW5zdGFuY2VSZW1vdmVkIiwiZXZlbnROYW1lIiwiZGV0YWlsIiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJjb21wbGV0ZSIsInJlbmRlclR5cGUiLCJjdXJyZW50Iiwic3R5bGVQcm9wIiwiZWxlbWVudFN0YXRlQ2hhbmdlZCIsImFjdGlvblN0YXRlIl0sIm1hcHBpbmdzIjoiQUFBQSxzQkFBc0I7Ozs7Ozs7Ozs7O0lBeUZOQSxlQUFlO2VBQWZBOztJQW13QkFDLGdCQUFnQjtlQUFoQkE7O0lBcm1CQUMsV0FBVztlQUFYQTs7SUFnakJBQyxlQUFlO2VBQWZBOztJQWZBQyxtQkFBbUI7ZUFBbkJBOztJQXRlQUMsVUFBVTtlQUFWQTs7OzZEQWpUQzs0REFDRDs2REFDQzsrREFDRTtnRUFDQztrRUFDRTtnRUFDRjtpRUFDQztpQ0FPZDt3QkFPMEM7a0NBa0QxQzt1RUFFcUI7eUVBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBM0Q3QixNQUFNQyxxQkFBcUJDLE9BQU9DLElBQUksQ0FBQ0MsK0JBQWM7QUFFckQsTUFBTUMsZ0JBQWdCLENBQUNDLGVBQ3JCTCxtQkFBbUJNLFFBQVEsQ0FBQ0Q7QUFJOUIsTUFBTSxFQUNKRSxlQUFlLEVBQ2ZDLGlCQUFpQixFQUNqQkMsWUFBWSxFQUNaQyxjQUFjLEVBQ2RDLFFBQVEsRUFDVCxHQUFHQyxtQ0FBa0I7QUFFdEIsTUFBTSxFQUNKQyxtQkFBbUIsRUFDbkJDLFlBQVksRUFDWkMsb0JBQW9CLEVBQ3BCQyxZQUFZLEVBQ1pDLGFBQWEsRUFDYkMsaUJBQWlCLEVBQ2pCQyxjQUFjLEVBQ2RDLHVCQUF1QixFQUN2QkMsZ0JBQWdCLEVBQ2hCQyxpQkFBaUIsRUFDakJDLGlCQUFpQixFQUNqQkMsNkJBQTZCLEVBQzdCQyx3QkFBd0IsRUFDeEJDLHFCQUFxQixFQUNyQkMsa0JBQWtCLEVBQ2xCQyxnQkFBZ0IsRUFDaEJDLGVBQWUsRUFDZkMsaUJBQWlCLEVBQ2pCQyxZQUFZLEVBQ2IsR0FBR0MsdUJBQWU7QUFDbkIs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

}),
8955: (function (__unused_webpack_module, exports, __webpack_require__) {
"use strict";
/* eslint-env browser */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _flow = /*#__PURE__*/ _interop_require_default(__webpack_require__(5801));
const _get = /*#__PURE__*/ _interop_require_default(__webpack_require__(4738));
const _clamp = /*#__PURE__*/ _interop_require_default(__webpack_require__(3789));
const _sharedconstants = __webpack_require__(7087);
const _IX2VanillaEngine = __webpack_require__(1970);
const _IX2EngineActions = __webpack_require__(3946);
const _shared = __webpack_require__(9468);
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { MOUSE_CLICK, MOUSE_SECOND_CLICK, MOUSE_DOWN, MOUSE_UP, MOUSE_OVER, MOUSE_OUT, DROPDOWN_CLOSE, DROPDOWN_OPEN, SLIDER_ACTIVE, SLIDER_INACTIVE, TAB_ACTIVE, TAB_INACTIVE, NAVBAR_CLOSE, NAVBAR_OPEN, MOUSE_MOVE, PAGE_SCROLL_DOWN, SCROLL_INTO_VIEW, SCROLL_OUT_OF_VIEW, PAGE_SCROLL_UP, SCROLLING_IN_VIEW, PAGE_FINISH, ECOMMERCE_CART_CLOSE, ECOMMERCE_CART_OPEN, PAGE_START, PAGE_SCROLL } = _sharedconstants.EventTypeConsts;
const COMPONENT_ACTIVE = 'COMPONENT_ACTIVE';
const COMPONENT_INACTIVE = 'COMPONENT_INACTIVE';
const { COLON_DELIMITER } = _sharedconstants.IX2EngineConstants;
const { getNamespacedParameterId } = _shared.IX2VanillaUtils;
const composableFilter = (predicate)=>(options)=>{
        if (typeof options === 'object' && predicate(options)) {
            return true;
        }
        return options;
    };
const isElement = composableFilter(({ element, nativeEvent })=>{
    return element === nativeEvent.target;
});
const containsElement = composableFilter(({ element, nativeEvent })=>{
    return element.contains(nativeEvent.target);
});
const isOrContainsElement = (0, _flow.default)([
    isElement,
    containsElement
]);
const getAutoStopEvent = (store, autoStopEventId)=>{
    if (autoStopEventId) {
        const { ixData } = store.getState();
        const { events } = ixData;
        const eventToStop = events[autoStopEventId];
        // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ readonly PAGE_START: "PAGE_START"; readonly PAGE_FINISH: "PAGE_FINISH"; }'.
        if (eventToStop && !AUTO_STOP_DISABLED_EVENTS[eventToStop.eventTypeId]) {
            return eventToStop;
        }
    }
    return null;
};
// @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type. | TS7031 - Binding element 'event' implicitly has an 'any' type.
const hasAutoStopEvent = ({ store, event })=>{
    const { action: eventAction } = event;
    const { autoStopEventId } = eventAction.config;
    return Boolean(getAutoStopEvent(store, autoStopEventId));
};
// @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type. | TS7031 - Binding element 'event' implicitly has an 'any' type. | TS7031 - Binding element 'element' implicitly has an 'any' type. | TS7031 - Binding element 'eventStateKey' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
const actionGroupCreator = ({ store, event, element, eventStateKey }, state)=>{
    const { action: eventAction, id: eventId } = event;
    const { actionListId, autoStopEventId } = eventAction.config;
    const eventToStop = getAutoStopEvent(store, autoStopEventId);
    if (eventToStop) {
        (0, _IX2VanillaEngine.stopActionGroup)({
            store,
            eventId: autoStopEventId,
            eventTarget: element,
            eventStateKey: autoStopEventId + COLON_DELIMITER + eventStateKey.split(COLON_DELIMITER)[1],
            actionListId: (0, _get.default)(eventToStop, 'action.config.actionListId')
        });
    }
    (0, _IX2VanillaEngine.stopActionGroup)({
        store,
        eventId,
        eventTarget: element,
        eventStateKey,
        actionListId
    });
    // @ts-expect-error - TS2345 - Argument of type '{ store: any; eventId: any; eventTarget: any; eventStateKey: any; actionListId: any; }' is not assignable to parameter of type '{ store: any; eventId: any; eventTarget: any; eventStateKey: any; actionListId: any; groupIndex?: number | undefined; immediate: any; verbose: any; }'.
    (0, _IX2VanillaEngine.startActionGroup)({
        store,
        eventId,
        eventTarget: element,
        eventStateKey,
        actionListId
    });
    return state;
};
// @ts-expect-error - TS7006 - Parameter 'filter' implicitly has an 'any' type. | TS7006 - Parameter 'handler' implicitly has an 'any' type.
const withFilter = (filter, handler)=>(options, state)=>filter(options, state) === true ? handler(options, state) : state;
const baseActionGroupOptions = {
    handler: withFilter(isOrContainsElement, actionGroupCreator)
};
const baseActivityActionGroupOptions = {
    ...baseActionGroupOptions,
    types: [
        COMPONENT_ACTIVE,
        COMPONENT_INACTIVE
    ].join(' ')
};
const SCROLL_EVENT_TYPES = [
    {
        target: window,
        types: 'resize orientationchange',
        throttle: true
    },
    {
        target: document,
        types: 'scroll wheel readystatechange IX2_PAGE_UPDATE',
        throttle: true
    }
];
const MOUSE_OVER_OUT_TYPES = 'mouseover mouseout';
const baseScrollActionGroupOptions = {
    types: SCROLL_EVENT_TYPES
};
const AUTO_STOP_DISABLED_EVENTS = {
    PAGE_START,
    PAGE_FINISH
};
const getDocumentState = (()=>{
    const supportOffset = window.pageXOffset !== undefined;
    const isCSS1Compat = document.compatMode === 'CSS1Compat';
    const rootElement = isCSS1Compat ? document.documentElement : document.body;
    return ()=>({
            scrollLeft: supportOffset ? window.pageXOffset : rootElement.scrollLeft,
            scrollTop: supportOffset ? window.pageYOffset : rootElement.scrollTop,
            // required to remove elasticity in Safari scrolling.
            stiffScrollTop: (0, _clamp.default)(supportOffset ? window.pageYOffset : rootElement.scrollTop, 0, rootElement.scrollHeight - window.innerHeight),
            scrollWidth: rootElement.scrollWidth,
            scrollHeight: rootElement.scrollHeight,
            clientWidth: rootElement.clientWidth,
            clientHeight: rootElement.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight
        });
})();
const areBoxesIntersecting = (a, b)=>!(a.left > b.right || a.right < b.left || a.top > b.bottom || a.bottom < b.top);
// @ts-expect-error - TS7031 - Binding element 'element' implicitly has an 'any' type. | TS7031 - Binding element 'nativeEvent' implicitly has an 'any' type.
const isElementHovered = ({ element, nativeEvent })=>{
    const { type, target, relatedTarget } = nativeEvent;
    const containsTarget = element.contains(target);
    if (type === 'mouseover' && containsTarget) {
        return true;
    }
    const containsRelated = element.contains(relatedTarget);
    if (type === 'mouseout' && containsTarget && containsRelated) {
        return true;
    }
    return false;
};
const isElementVisible = (options)=>{
    const { element, event: { config } } = options;
    const { clientWidth, clientHeight } = getDocumentState();
    const scrollOffsetValue = config.scrollOffsetValue;
    const scrollOffsetUnit = config.scrollOffsetUnit;
    const isPX = scrollOffsetUnit === 'PX';
    const offsetPadding = isPX ? scrollOffsetValue : clientHeight * (scrollOffsetValue || 0) / 100;
    return areBoxesIntersecting(element.getBoundingClientRect(), {
        left: 0,
        top: offsetPadding,
        right: clientWidth,
        bottom: clientHeight - offsetPadding
    });
};
const whenComponentActiveChange = // @ts-expect-error - TS7006 - Parameter 'handler' implicitly has an 'any' type.
(handler)=>(options, oldState)=>{
        const { type } = options.nativeEvent;
        // prettier-ignore
        const isActive = [
            COMPONENT_ACTIVE,
            COMPONENT_INACTIVE
        ].indexOf(type) !== -1 ? type === COMPONENT_ACTIVE : oldState.isActive;
        const newState = {
            ...oldState,
            isActive
        };
        if (!oldState || newState.isActive !== oldState.isActive) {
            return handler(options, newState) || newState;
        }
        return newState;
    };
const whenElementHoverChange = (handler)=>(options, oldState)=>{
        const newState = {
            elementHovered: isElementHovered(options)
        };
        if (oldState ? newState.elementHovered !== oldState.elementHovered : newState.elementHovered) {
            // @ts-expect-error - TS1345 - An expression of type 'void' cannot be tested for truthiness.
            return handler(options, newState) || newState;
        }
        return newState;
    };
const whenElementVisibiltyChange = (handler)=>(options, oldState)=>{
        const newState = {
            ...oldState,
            elementVisible: isElementVisible(options)
        };
        if (oldState ? newState.elementVisible !== oldState.elementVisible : newState.elementVisible) {
            return handler(options, newState) || newState;
        }
        return newState;
    };
const whenScrollDirectionChange = // @ts-expect-error - TS7006 - Parameter 'handler' implicitly has an 'any' type.
(handler)=>(options, oldState = {})=>{
        const { stiffScrollTop: scrollTop, scrollHeight, innerHeight } = getDocumentState();
        const { event: { config, eventTypeId } } = options;
        const { scrollOffsetValue, scrollOffsetUnit } = config;
        const isPX = scrollOffsetUnit === 'PX';
        const scrollHeightBounds = scrollHeight - innerHeight;
        // percent top since innerHeight may change for mobile devices which also changes the scrollTop value.
        const percentTop = Number((scrollTop / scrollHeightBounds).toFixed(2));
        // no state change
        // @ts-expect-error - TS2339 - Property 'percentTop' does not exist on type '{}'.
        if (oldState && oldState.percentTop === percentTop) {
            return oldState;
        }
        const scrollTopPadding = (isPX ? scrollOffsetValue : innerHeight * (scrollOffsetValue || 0) / 100) / scrollHeightBounds;
        let scrollingDown;
        let scrollDirectionChanged;
        let anchorTop = 0;
        if (oldState) {
            // @ts-expect-error - TS2339 - Property 'percentTop' does not exist on type '{}'.
            scrollingDown = percentTop > oldState.percentTop;
            // @ts-expect-error - TS2339 - Property 'scrollingDown' does not exist on type '{}'.
            scrollDirectionChanged = oldState.scrollingDown !== scrollingDown;
            // @ts-expect-error - TS2339 - Property 'anchorTop' does not exist on type '{}'.
            anchorTop = scrollDirectionChanged ? percentTop : oldState.anchorTop;
        }
        const inBounds = eventTypeId === PAGE_SCROLL_DOWN ? percentTop >= anchorTop + scrollTopPadding : percentTop <= anchorTop - scrollTopPadding;
        const newState = {
            ...oldState,
            percentTop,
            inBounds,
            anchorTop,
            scrollingDown
        };
        if (oldState && inBounds && // @ts-expect-error - TS2339 - Property 'inBounds' does not exist on type '{}'.
        (scrollDirectionChanged || newState.inBounds !== oldState.inBounds)) {
            return handler(options, newState) || newState;
        }
        return newState;
    };
const pointIntersects = (point, rect)=>point.left > rect.left && point.left < rect.right && point.top > rect.top && point.top < rect.bottom;
const whenPageLoadFinish = (handler)=>(options, oldState)=>{
        const newState = {
            finished: document.readyState === 'complete'
        };
        if (newState.finished && !(oldState && oldState.finshed)) {
            // @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
            handler(options);
        }
        return newState;
    };
const whenPageLoadStart = (handler)=>(options, oldState)=>{
        const newState = {
            started: true
        };
        if (!oldState) {
            // @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
            handler(options);
        }
        return newState;
    };
const whenClickCountChange = (handler)=>(options, oldState = {
        clickCount: 0
    })=>{
        const newState = {
            clickCount: oldState.clickCount % 2 + 1
        };
        if (newState.clickCount !== oldState.clickCount) {
            // @ts-expect-error - TS1345 - An expression of type 'void' cannot be tested for truthiness.
            return handler(options, newState) || newState;
        }
        return newState;
    };
const getComponentActiveOptions = (allowNestedChildrenEvents = true)=>({
        ...baseActivityActionGroupOptions,
        handler: withFilter(allowNestedChildrenEvents ? isOrContainsElement : isElement, // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
        whenComponentActiveChange((options, state)=>{
            return state.isActive ? baseActionGroupOptions.handler(options, state) : state;
        }))
    });
const getComponentInactiveOptions = (allowNestedChildrenEvents = true)=>({
        ...baseActivityActionGroupOptions,
        handler: withFilter(allowNestedChildrenEvents ? isOrContainsElement : isElement, // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
        whenComponentActiveChange((options, state)=>{
            return !state.isActive ? baseActionGroupOptions.handler(options, state) : state;
        }))
    });
const scrollIntoOutOfViewOptions = {
    ...baseScrollActionGroupOptions,
    handler: whenElementVisibiltyChange((options, state)=>{
        const { elementVisible } = state;
        const { event, store } = options;
        const { ixData } = store.getState();
        const { events } = ixData;
        // trigger the handler only once if only one of SCROLL_INTO or SCROLL_OUT_OF event types
        // are registered.
        if (!events[event.action.config.autoStopEventId] && state.triggered) {
            return state;
        }
        if (event.eventTypeId === SCROLL_INTO_VIEW === elementVisible) {
            // @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
            actionGroupCreator(options);
            return {
                ...state,
                triggered: true
            };
        } else {
            return state;
        }
    })
};
const MOUSE_OUT_ROUND_THRESHOLD = 0.05;
const _default = {
    [SLIDER_ACTIVE]: getComponentActiveOptions(),
    [SLIDER_INACTIVE]: getComponentInactiveOptions(),
    [DROPDOWN_OPEN]: getComponentActiveOptions(),
    [DROPDOWN_CLOSE]: getComponentInactiveOptions(),
    // navbar elements may contain nested components in the menu. To prevent activity misfires, only listed for activity
    // events where the target is the navbar element, and ignore children that dispatch activitiy events.
    [NAVBAR_OPEN]: getComponentActiveOptions(false),
    [NAVBAR_CLOSE]: getComponentInactiveOptions(false),
    [TAB_ACTIVE]: getComponentActiveOptions(),
    [TAB_INACTIVE]: getComponentInactiveOptions(),
    [ECOMMERCE_CART_OPEN]: {
        types: 'ecommerce-cart-open',
        handler: withFilter(isOrContainsElement, actionGroupCreator)
    },
    [ECOMMERCE_CART_CLOSE]: {
        types: 'ecommerce-cart-close',
        handler: withFilter(isOrContainsElement, actionGroupCreator)
    },
    [MOUSE_CLICK]: {
        types: 'click',
        handler: withFilter(isOrContainsElement, whenClickCountChange((options, { clickCount })=>{
            if (hasAutoStopEvent(options)) {
                // @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
                clickCount === 1 && actionGroupCreator(options);
            } else {
                // @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
                actionGroupCreator(options);
            }
        }))
    },
    [MOUSE_SECOND_CLICK]: {
        types: 'click',
        handler: withFilter(isOrContainsElement, whenClickCountChange((options, { clickCount })=>{
            if (clickCount === 2) {
                // @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
                actionGroupCreator(options);
            }
        }))
    },
    [MOUSE_DOWN]: {
        ...baseActionGroupOptions,
        types: 'mousedown'
    },
    [MOUSE_UP]: {
        ...baseActionGroupOptions,
        types: 'mouseup'
    },
    [MOUSE_OVER]: {
        types: MOUSE_OVER_OUT_TYPES,
        handler: withFilter(isOrContainsElement, whenElementHoverChange((options, state)=>{
            if (state.elementHovered) {
                // @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
                actionGroupCreator(options);
            }
        }))
    },
    [MOUSE_OUT]: {
        types: MOUSE_OVER_OUT_TYPES,
        handler: withFilter(isOrContainsElement, whenElementHoverChange((options, state)=>{
            if (!state.elementHovered) {
                // @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
                actionGroupCreator(options);
            }
        }))
    },
    [MOUSE_MOVE]: {
        types: 'mousemove mouseout scroll',
        handler: (// eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        { store, element, eventConfig, nativeEvent, eventStateKey }, state = {
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0
        })=>{
            const { basedOn, selectedAxis, continuousParameterGroupId, reverse, restingState = 0 } = eventConfig;
            const { clientX = state.clientX, clientY = state.clientY, pageX = state.pageX, pageY = state.pageY } = nativeEvent;
            const isXAxis = selectedAxis === 'X_AXIS';
            const isMouseOut = nativeEvent.type === 'mouseout';
            let value = restingState / 100;
            let namespacedParameterId = continuousParameterGroupId;
            let elementHovered = false;
            switch(basedOn){
                case _sharedconstants.EventBasedOn.VIEWPORT:
                    {
                        value = isXAxis ? Math.min(clientX, window.innerWidth) / window.innerWidth : Math.min(clientY, window.innerHeight) / window.innerHeight;
                        break;
                    }
                // @ts-expect-error - TS2339 - Property 'PAGE' does not exist on type '{ readonly ELEMENT: "ELEMENT"; readonly VIEWPORT: "VIEWPORT"; }'.
                case _sharedconstants.EventBasedOn.PAGE:
                    {
                        const { scrollLeft, scrollTop, scrollWidth, scrollHeight } = getDocumentState();
                        value = isXAxis ? Math.min(scrollLeft + pageX, scrollWidth) / scrollWidth : Math.min(scrollTop + pageY, scrollHeight) / scrollHeight;
                        break;
                    }
                case _sharedconstants.EventBasedOn.ELEMENT:
                default:
                    {
                        namespacedParameterId = getNamespacedParameterId(eventStateKey, continuousParameterGroupId);
                        const isMouseEvent = nativeEvent.type.indexOf('mouse') === 0;
                        // Use isOrContainsElement for mouse events since they are fired from the target
                        if (isMouseEvent && isOrContainsElement({
                            element,
                            nativeEvent
                        }) !== true) {
                            break;
                        }
                        const rect = element.getBoundingClientRect();
                        const { left, top, width, height } = rect;
                        // Otherwise we'll need to calculate the mouse position from the previous handler state
                        // against the target element's rect
                        if (!isMouseEvent && !pointIntersects({
                            left: clientX,
                            top: clientY
                        }, rect)) {
                            break;
                        }
                        elementHovered = true;
                        value = isXAxis ? (clientX - left) / width : (clientY - top) / height;
                        break;
                    }
            }
            // cover case where the event is a mouse out, but the value is not quite at 100%
            if (isMouseOut && (value > 1 - MOUSE_OUT_ROUND_THRESHOLD || value < MOUSE_OUT_ROUND_THRESHOLD)) {
                value = Math.round(value);
            }
            // Only update based on element if the mouse is moving over or has just left the element
            if (basedOn !== _sharedconstants.EventBasedOn.ELEMENT || elementHovered || // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            elementHovered !== state.elementHovered) {
                value = reverse ? 1 - value : value;
                store.dispatch((0, _IX2EngineActions.parameterChanged)(namespacedParameterId, value));
            }
            return {
                elementHovered,
                clientX,
                clientY,
                pageX,
                pageY
            };
        }
    },
    [PAGE_SCROLL]: {
        types: SCROLL_EVENT_TYPES,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        handler: ({ store, eventConfig })=>{
            const { continuousParameterGroupId, reverse } = eventConfig;
            const { scrollTop, scrollHeight, clientHeight } = getDocumentState();
            let value = scrollTop / (scrollHeight - clientHeight);
            value = reverse ? 1 - value : value;
            store.dispatch((0, _IX2EngineActions.parameterChanged)(continuousParameterGroupId, value));
        }
    },
    [SCROLLING_IN_VIEW]: {
        types: SCROLL_EVENT_TYPES,
        handler: (// eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        { element, store, eventConfig, eventStateKey }, state = {
            scrollPercent: 0
        })=>{
            const { scrollLeft, scrollTop, scrollWidth, scrollHeight, clientHeight: visibleHeight } = getDocumentState();
            const { basedOn, selectedAxis, continuousParameterGroupId, startsEntering, startsExiting, addEndOffset, addStartOffset, addOffsetValue = 0, endOffsetValue = 0 } = eventConfig;
            const isXAxis = selectedAxis === 'X_AXIS';
            if (basedOn === _sharedconstants.EventBasedOn.VIEWPORT) {
                const value = isXAxis ? scrollLeft / scrollWidth : scrollTop / scrollHeight;
                if (value !== state.scrollPercent) {
                    store.dispatch((0, _IX2EngineActions.parameterChanged)(continuousParameterGroupId, value));
                }
                return {
                    scrollPercent: value
                };
            } else {
                const namespacedParameterId = getNamespacedParameterId(eventStateKey, continuousParameterGroupId);
                const elementRect = element.getBoundingClientRect();
                let offsetStartPerc = (addStartOffset ? addOffsetValue : 0) / 100;
                let offsetEndPerc = (addEndOffset ? endOffsetValue : 0) / 100;
                // flip the offset percentages depending on start / exit type
                offsetStartPerc = startsEntering ? offsetStartPerc : 1 - offsetStartPerc;
                offsetEndPerc = startsExiting ? offsetEndPerc : 1 - offsetEndPerc;
                const offsetElementTop = elementRect.top + Math.min(elementRect.height * offsetStartPerc, visibleHeight);
                const offsetElementBottom = elementRect.top + elementRect.height * offsetEndPerc;
                const offsetHeight = offsetElementBottom - offsetElementTop;
                const fixedScrollHeight = Math.min(visibleHeight + offsetHeight, scrollHeight);
                const fixedScrollTop = Math.min(Math.max(0, visibleHeight - offsetElementTop), fixedScrollHeight);
                const fixedScrollPerc = fixedScrollTop / fixedScrollHeight;
                if (fixedScrollPerc !== state.scrollPercent) {
                    store.dispatch((0, _IX2EngineActions.parameterChanged)(namespacedParameterId, fixedScrollPerc));
                }
                return {
                    scrollPercent: fixedScrollPerc
                };
            }
        }
    },
    [SCROLL_INTO_VIEW]: scrollIntoOutOfViewOptions,
    [SCROLL_OUT_OF_VIEW]: scrollIntoOutOfViewOptions,
    [PAGE_SCROLL_DOWN]: {
        ...baseScrollActionGroupOptions,
        // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
        handler: whenScrollDirectionChange((options, state)=>{
            if (state.scrollingDown) {
                // @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
                actionGroupCreator(options);
            }
        })
    },
    [PAGE_SCROLL_UP]: {
        ...baseScrollActionGroupOptions,
        // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
        handler: whenScrollDirectionChange((options, state)=>{
            if (!state.scrollingDown) {
                // @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
                actionGroupCreator(options);
            }
        })
    },
    [PAGE_FINISH]: {
        types: 'readystatechange IX2_PAGE_UPDATE',
        handler: withFilter(isElement, whenPageLoadFinish(actionGroupCreator))
    },
    [PAGE_START]: {
        types: 'readystatechange IX2_PAGE_UPDATE',
        handler: withFilter(isElement, whenPageLoadStart(actionGroupCreator))
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL2VuZ2luZS9sb2dpYy9JWDJWYW5pbGxhRXZlbnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuaW1wb3J0IGZsb3cgZnJvbSAnbG9kYXNoL2Zsb3cnO1xuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2gvZ2V0JztcbmltcG9ydCBjbGFtcCBmcm9tICdsb2Rhc2gvY2xhbXAnO1xuXG5pbXBvcnQge1xuICBFdmVudFR5cGVDb25zdHMsXG4gIEV2ZW50QmFzZWRPbixcbiAgSVgyRW5naW5lQ29uc3RhbnRzLFxufSBmcm9tICdAcGFja2FnZXMvc3lzdGVtcy9peDIvc2hhcmVkLWNvbnN0YW50cyc7XG5cbmltcG9ydCB7c3RvcEFjdGlvbkdyb3VwLCBzdGFydEFjdGlvbkdyb3VwfSBmcm9tICcuL0lYMlZhbmlsbGFFbmdpbmUnO1xuaW1wb3J0IHtwYXJhbWV0ZXJDaGFuZ2VkfSBmcm9tICcuLi9hY3Rpb25zL0lYMkVuZ2luZUFjdGlvbnMnO1xuaW1wb3J0IHtJWDJWYW5pbGxhVXRpbHN9IGZyb20gJ0BwYWNrYWdlcy9zeXN0ZW1zL2l4Mi9zaGFyZWQnO1xuXG5jb25zdCB7XG4gIE1PVVNFX0NMSUNLLFxuICBNT1VTRV9TRUNPTkRfQ0xJQ0ssXG4gIE1PVVNFX0RPV04sXG4gIE1PVVNFX1VQLFxuICBNT1VTRV9PVkVSLFxuICBNT1VTRV9PVVQsXG4gIERST1BET1dOX0NMT1NFLFxuICBEUk9QRE9XTl9PUEVOLFxuICBTTElERVJfQUNUSVZFLFxuICBTTElERVJfSU5BQ1RJVkUsXG4gIFRBQl9BQ1RJVkUsXG4gIFRBQl9JTkFDVElWRSxcbiAgTkFWQkFSX0NMT1NFLFxuICBOQVZCQVJfT1BFTixcbiAgTU9VU0VfTU9WRSxcbiAgUEFHRV9TQ1JPTExfRE9XTixcbiAgU0NST0xMX0lOVE9fVklFVyxcbiAgU0NST0xMX09VVF9PRl9WSUVXLFxuICBQQUdFX1NDUk9MTF9VUCxcbiAgU0NST0xMSU5HX0lOX1ZJRVcsXG4gIFBBR0VfRklOSVNILFxuICBFQ09NTUVSQ0VfQ0FSVF9DTE9TRSxcbiAgRUNPTU1FUkNFX0NBUlRfT1BFTixcbiAgUEFHRV9TVEFSVCxcbiAgUEFHRV9TQ1JPTEwsXG59ID0gRXZlbnRUeXBlQ29uc3RzO1xuXG5jb25zdCBDT01QT05FTlRfQUNUSVZFID0gJ0NPTVBPTkVOVF9BQ1RJVkUnO1xuY29uc3QgQ09NUE9ORU5UX0lOQUNUSVZFID0gJ0NPTVBPTkVOVF9JTkFDVElWRSc7XG5cbmNvbnN0IHtDT0xPTl9ERUxJTUlURVJ9ID0gSVgyRW5naW5lQ29uc3RhbnRzO1xuXG5jb25zdCB7Z2V0TmFtZXNwYWNlZFBhcmFtZXRlcklkfSA9IElYMlZhbmlsbGFVdGlscztcblxuY29uc3QgY29tcG9zYWJsZUZpbHRlciA9XG4gIChwcmVkaWNhdGU6ICgoYXJnMT86IGFueSkgPT4gYW55KSB8ICgoYXJnMT86IGFueSkgPT4gYm9vbGVhbikpID0+XG4gIChvcHRpb25zOiBhbnkpID0+IHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnICYmIHByZWRpY2F0ZShvcHRpb25zKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zO1xuICB9O1xuXG5jb25zdCBpc0VsZW1lbnQgPSBjb21wb3NhYmxlRmlsdGVyKCh7ZWxlbWVudCwgbmF0aXZlRXZlbnR9KSA9PiB7XG4gIHJldHVybiBlbGVtZW50ID09PSBuYXRpdmVFdmVudC50YXJnZXQ7XG59KTtcblxuY29uc3QgY29udGFpbnNFbGVtZW50ID0gY29tcG9zYWJsZUZpbHRlcigoe2VsZW1lbnQsIG5hdGl2ZUV2ZW50fSkgPT4ge1xuICByZXR1cm4gZWxlbWVudC5jb250YWlucyhuYXRpdmVFdmVudC50YXJnZXQpO1xufSk7XG5cbmNvbnN0IGlzT3JDb250YWluc0VsZW1lbnQgPSBmbG93KFtpc0VsZW1lbnQsIGNvbnRhaW5zRWxlbWVudF0pO1xuXG5jb25zdCBnZXRBdXRvU3RvcEV2ZW50ID0gKHN0b3JlOiBhbnksIGF1dG9TdG9wRXZlbnRJZDogYW55KSA9PiB7XG4gIGlmIChhdXRvU3RvcEV2ZW50SWQpIHtcbiAgICBjb25zdCB7aXhEYXRhfSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gICAgY29uc3Qge2V2ZW50c30gPSBpeERhdGE7XG4gICAgY29uc3QgZXZlbnRUb1N0b3AgPSBldmVudHNbYXV0b1N0b3BFdmVudElkXTtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDUzIC0gRWxlbWVudCBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlIGJlY2F1c2UgZXhwcmVzc2lvbiBvZiB0eXBlICdhbnknIGNhbid0IGJlIHVzZWQgdG8gaW5kZXggdHlwZSAneyByZWFkb25seSBQQUdFX1NUQVJUOiBcIlBBR0VfU1RBUlRcIjsgcmVhZG9ubHkgUEFHRV9GSU5JU0g6IFwiUEFHRV9GSU5JU0hcIjsgfScuXG4gICAgaWYgKGV2ZW50VG9TdG9wICYmICFBVVRPX1NUT1BfRElTQUJMRURfRVZFTlRTW2V2ZW50VG9TdG9wLmV2ZW50VHlwZUlkXSkge1xuICAgICAgcmV0dXJuIGV2ZW50VG9TdG9wO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ3N0b3JlJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLiB8IFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnZXZlbnQnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG5jb25zdCBoYXNBdXRvU3RvcEV2ZW50ID0gKHtzdG9yZSwgZXZlbnR9KSA9PiB7XG4gIGNvbnN0IHthY3Rpb246IGV2ZW50QWN0aW9ufSA9IGV2ZW50O1xuICBjb25zdCB7YXV0b1N0b3BFdmVudElkfSA9IGV2ZW50QWN0aW9uLmNvbmZpZztcbiAgcmV0dXJuIEJvb2xlYW4oZ2V0QXV0b1N0b3BFdmVudChzdG9yZSwgYXV0b1N0b3BFdmVudElkKSk7XG59O1xuXG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdzdG9yZScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2V2ZW50JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLiB8IFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnZWxlbWVudCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2V2ZW50U3RhdGVLZXknIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDA2IC0gUGFyYW1ldGVyICdzdGF0ZScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbmNvbnN0IGFjdGlvbkdyb3VwQ3JlYXRvciA9ICh7c3RvcmUsIGV2ZW50LCBlbGVtZW50LCBldmVudFN0YXRlS2V5fSwgc3RhdGUpID0+IHtcbiAgY29uc3Qge2FjdGlvbjogZXZlbnRBY3Rpb24sIGlkOiBldmVudElkfSA9IGV2ZW50O1xuICBjb25zdCB7YWN0aW9uTGlzdElkLCBhdXRvU3RvcEV2ZW50SWR9ID0gZXZlbnRBY3Rpb24uY29uZmlnO1xuICBjb25zdCBldmVudFRvU3RvcCA9IGdldEF1dG9TdG9wRXZlbnQoc3RvcmUsIGF1dG9TdG9wRXZlbnRJZCk7XG4gIGlmIChldmVudFRvU3RvcCkge1xuICAgIHN0b3BBY3Rpb25Hcm91cCh7XG4gICAgICBzdG9yZSxcbiAgICAgIGV2ZW50SWQ6IGF1dG9TdG9wRXZlbnRJZCxcbiAgICAgIGV2ZW50VGFyZ2V0OiBlbGVtZW50LFxuICAgICAgZXZlbnRTdGF0ZUtleTpcbiAgICAgICAgYXV0b1N0b3BFdmVudElkICtcbiAgICAgICAgQ09MT05fREVMSU1JVEVSICtcbiAgICAgICAgZXZlbnRTdGF0ZUtleS5zcGxpdChDT0xPTl9ERUxJTUlURVIpWzFdLFxuICAgICAgYWN0aW9uTGlzdElkOiBnZXQoZXZlbnRUb1N0b3AsICdhY3Rpb24uY29uZmlnLmFjdGlvbkxpc3RJZCcpLFxuICAgIH0pO1xuICB9XG4gIHN0b3BBY3Rpb25Hcm91cCh7XG4gICAgc3RvcmUsXG4gICAgZXZlbnRJZCxcbiAgICBldmVudFRhcmdldDogZWxlbWVudCxcbiAgICBldmVudFN0YXRlS2V5LFxuICAgIGFjdGlvbkxpc3RJZCxcbiAgfSk7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzNDUgLSBBcmd1bWVudCBvZiB0eXBlICd7IHN0b3JlOiBhbnk7IGV2ZW50SWQ6IGFueTsgZXZlbnRUYXJnZXQ6IGFueTsgZXZlbnRTdGF0ZUtleTogYW55OyBhY3Rpb25MaXN0SWQ6IGFueTsgfScgaXMgbm90IGFzc2lnbmFibGUgdG8gcGFyYW1ldGVyIG9mIHR5cGUgJ3sgc3RvcmU6IGFueTsgZXZlbnRJZDogYW55OyBldmVudFRhcmdldDogYW55OyBldmVudFN0YXRlS2V5OiBhbnk7IGFjdGlvbkxpc3RJZDogYW55OyBncm91cEluZGV4PzogbnVtYmVyIHwgdW5kZWZpbmVkOyBpbW1lZGlhdGU6IGFueTsgdmVyYm9zZTogYW55OyB9Jy5cbiAgc3RhcnRBY3Rpb25Hcm91cCh7XG4gICAgc3RvcmUsXG4gICAgZXZlbnRJZCxcbiAgICBldmVudFRhcmdldDogZWxlbWVudCxcbiAgICBldmVudFN0YXRlS2V5LFxuICAgIGFjdGlvbkxpc3RJZCxcbiAgfSk7XG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ2ZpbHRlcicgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMDYgLSBQYXJhbWV0ZXIgJ2hhbmRsZXInIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG5jb25zdCB3aXRoRmlsdGVyID0gKGZpbHRlciwgaGFuZGxlcikgPT4gKG9wdGlvbnM6IGFueSwgc3RhdGU6IGFueSkgPT5cbiAgZmlsdGVyKG9wdGlvbnMsIHN0YXRlKSA9PT0gdHJ1ZSA/IGhhbmRsZXIob3B0aW9ucywgc3RhdGUpIDogc3RhdGU7XG5cbmNvbnN0IGJhc2VBY3Rpb25Hcm91cE9wdGlvbnMgPSB7XG4gIGhhbmRsZXI6IHdpdGhGaWx0ZXIoaXNPckNvbnRhaW5zRWxlbWVudCwgYWN0aW9uR3JvdXBDcmVhdG9yKSxcbn0gYXMgY29uc3Q7XG5cbmNvbnN0IGJhc2VBY3Rpdml0eUFjdGlvbkdyb3VwT3B0aW9ucyA9IHtcbiAgLi4uYmFzZUFjdGlvbkdyb3VwT3B0aW9ucyxcbiAgdHlwZXM6IFtDT01QT05FTlRfQUNUSVZFLCBDT01QT05FTlRfSU5BQ1RJVkVdLmpvaW4oJyAnKSxcbn0gYXMgY29uc3Q7XG5cbmNvbnN0IFNDUk9MTF9FVkVOVF9UWVBFUyA9IFtcbiAge3RhcmdldDogd2luZG93LCB0eXBlczogJ3Jlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZScsIHRocm90dGxlOiB0cnVlfSxcbiAge1xuICAgIHRhcmdldDogZG9jdW1lbnQsXG4gICAgdHlwZXM6ICdzY3JvbGwgd2hlZWwgcmVhZHlzdGF0ZWNoYW5nZSBJWDJfUEFHRV9VUERBVEUnLFxuICAgIHRocm90dGxlOiB0cnVlLFxuICB9LFxuXTtcblxuY29uc3QgTU9VU0VfT1ZFUl9PVVRfVFlQRVMgPSAnbW91c2VvdmVyIG1vdXNlb3V0JztcblxuY29uc3QgYmFzZVNjcm9sbEFjdGlvbkdyb3VwT3B0aW9ucyA9IHtcbiAgdHlwZXM6IFNDUk9MTF9FVkVOVF9UWVBFUyxcbn0gYXMgY29uc3Q7XG5cbmNvbnN0IEFVVE9fU1RPUF9ESVNBQkxFRF9FVkVOVFMgPSB7XG4gIFBBR0VfU1RBUlQsXG4gIFBBR0VfRklOSVNILFxufSBhcyBjb25zdDtcblxuY29uc3QgZ2V0RG9jdW1lbnRTdGF0ZSA9ICgoKSA9PiB7XG4gIGNvbnN0IHN1cHBvcnRPZmZzZXQgPSB3aW5kb3cucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZDtcbiAgY29uc3QgaXNDU1MxQ29tcGF0ID0gZG9jdW1lbnQuY29tcGF0TW9kZSA9PT0gJ0NTUzFDb21wYXQnO1xuICBjb25zdCByb290RWxlbWVudCA9IGlzQ1NTMUNvbXBhdCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA6IGRvY3VtZW50LmJvZHk7XG4gIHJldHVybiAoKSA9PiAoe1xuICAgIHNjcm9sbExlZnQ6IHN1cHBvcnRPZmZzZXQgPyB3aW5kb3cucGFnZVhPZmZzZXQgOiByb290RWxlbWVudC5zY3JvbGxMZWZ0LFxuXG4gICAgc2Nyb2xsVG9wOiBzdXBwb3J0T2Zmc2V0ID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogcm9vdEVsZW1lbnQuc2Nyb2xsVG9wLFxuXG4gICAgLy8gcmVxdWlyZWQgdG8gcmVtb3ZlIGVsYXN0aWNpdHkgaW4gU2FmYXJpIHNjcm9sbGluZy5cbiAgICBzdGlmZlNjcm9sbFRvcDogY2xhbXAoXG4gICAgICBzdXBwb3J0T2Zmc2V0ID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogcm9vdEVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgICAgMCxcblxuICAgICAgcm9vdEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgKSxcblxuICAgIHNjcm9sbFdpZHRoOiByb290RWxlbWVudC5zY3JvbGxXaWR0aCxcblxuICAgIHNjcm9sbEhlaWdodDogcm9vdEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LFxuXG4gICAgY2xpZW50V2lkdGg6IHJvb3RFbGVtZW50LmNsaWVudFdpZHRoLFxuXG4gICAgY2xpZW50SGVpZ2h0OiByb290RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgaW5uZXJXaWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgaW5uZXJIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgfSk7XG59KSgpO1xuXG5jb25zdCBhcmVCb3hlc0ludGVyc2VjdGluZyA9IChcbiAgYTogYW55LFxuICBiOiB7XG4gICAgYm90dG9tOiBudW1iZXI7XG4gICAgbGVmdDogbnVtYmVyO1xuICAgIHJpZ2h0OiBudW1iZXI7XG4gICAgdG9wOiBhbnkgfCBudW1iZXI7XG4gIH1cbikgPT5cbiAgIShcbiAgICBhLmxlZnQgPiBiLnJpZ2h0IHx8XG4gICAgYS5yaWdodCA8IGIubGVmdCB8fFxuICAgIGEudG9wID4gYi5ib3R0b20gfHxcbiAgICBhLmJvdHRvbSA8IGIudG9wXG4gICk7XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2VsZW1lbnQnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICduYXRpdmVFdmVudCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbmNvbnN0IGlzRWxlbWVudEhvdmVyZWQgPSAoe2VsZW1lbnQsIG5hdGl2ZUV2ZW50fSkgPT4ge1xuICBjb25zdCB7dHlwZSwgdGFyZ2V0LCByZWxhdGVkVGFyZ2V0fSA9IG5hdGl2ZUV2ZW50O1xuICBjb25zdCBjb250YWluc1RhcmdldCA9IGVsZW1lbnQuY29udGFpbnModGFyZ2V0KTtcbiAgaWYgKHR5cGUgPT09ICdtb3VzZW92ZXInICYmIGNvbnRhaW5zVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3QgY29udGFpbnNSZWxhdGVkID0gZWxlbWVudC5jb250YWlucyhyZWxhdGVkVGFyZ2V0KTtcbiAgaWYgKHR5cGUgPT09ICdtb3VzZW91dCcgJiYgY29udGFpbnNUYXJnZXQgJiYgY29udGFpbnNSZWxhdGVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNFbGVtZW50VmlzaWJsZSA9IChvcHRpb25zOiBhbnkpID0+IHtcbiAgY29uc3Qge1xuICAgIGVsZW1lbnQsXG4gICAgZXZlbnQ6IHtjb25maWd9LFxuICB9ID0gb3B0aW9ucztcblxuICBjb25zdCB7Y2xpZW50V2lkdGgsIGNsaWVudEhlaWdodH0gPSBnZXREb2N1bWVudFN0YXRlKCk7XG4gIGNvbnN0IHNjcm9sbE9mZnNldFZhbHVlID0gY29uZmlnLnNjcm9sbE9mZnNldFZhbHVlO1xuICBjb25zdCBzY3JvbGxPZmZzZXRVbml0ID0gY29uZmlnLnNjcm9sbE9mZnNldFVuaXQ7XG4gIGNvbnN0IGlzUFggPSBzY3JvbGxPZmZzZXRVbml0ID09PSAnUFgnO1xuXG4gIGNvbnN0IG9mZnNldFBhZGRpbmcgPSBpc1BYXG4gICAgPyBzY3JvbGxPZmZzZXRWYWx1ZVxuICAgIDogKGNsaWVudEhlaWdodCAqIChzY3JvbGxPZmZzZXRWYWx1ZSB8fCAwKSkgLyAxMDA7XG5cbiAgcmV0dXJuIGFyZUJveGVzSW50ZXJzZWN0aW5nKGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHtcbiAgICBsZWZ0OiAwLFxuICAgIHRvcDogb2Zmc2V0UGFkZGluZyxcbiAgICByaWdodDogY2xpZW50V2lkdGgsXG4gICAgYm90dG9tOiBjbGllbnRIZWlnaHQgLSBvZmZzZXRQYWRkaW5nLFxuICB9KTtcbn07XG5cbmNvbnN0IHdoZW5Db21wb25lbnRBY3RpdmVDaGFuZ2UgPVxuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDA2IC0gUGFyYW1ldGVyICdoYW5kbGVyJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICAoaGFuZGxlcikgPT4gKG9wdGlvbnM6IGFueSwgb2xkU3RhdGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHt0eXBlfSA9IG9wdGlvbnMubmF0aXZlRXZlbnQ7XG4gICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgY29uc3QgaXNBY3RpdmUgPSBbQ09NUE9ORU5UX0FDVElWRSwgQ09NUE9ORU5UX0lOQUNUSVZFXS5pbmRleE9mKHR5cGUpICE9PSAtMVxuICAgID8gdHlwZSA9PT0gQ09NUE9ORU5UX0FDVElWRVxuICAgIDogb2xkU3RhdGUuaXNBY3RpdmU7XG5cbiAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgIC4uLm9sZFN0YXRlLFxuICAgICAgaXNBY3RpdmUsXG4gICAgfSBhcyBjb25zdDtcblxuICAgIGlmICghb2xkU3RhdGUgfHwgbmV3U3RhdGUuaXNBY3RpdmUgIT09IG9sZFN0YXRlLmlzQWN0aXZlKSB7XG4gICAgICByZXR1cm4gaGFuZGxlcihvcHRpb25zLCBuZXdTdGF0ZSkgfHwgbmV3U3RhdGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1N0YXRlO1xuICB9O1xuXG5jb25zdCB3aGVuRWxlbWVudEhvdmVyQ2hhbmdlID1cbiAgKFxuICAgIGhhbmRsZXI6IChcbiAgICAgIG9wdGlvbnM6IGFueSxcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIGVsZW1lbnRIb3ZlcmVkOiBib29sZWFuO1xuICAgICAgfVxuICAgICkgPT4gdm9pZFxuICApID0+XG4gIChvcHRpb25zOiBhbnksIG9sZFN0YXRlOiBhbnkpID0+IHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgIGVsZW1lbnRIb3ZlcmVkOiBpc0VsZW1lbnRIb3ZlcmVkKG9wdGlvbnMpLFxuICAgIH0gYXMgY29uc3Q7XG4gICAgaWYgKFxuICAgICAgb2xkU3RhdGVcbiAgICAgICAgPyBuZXdTdGF0ZS5lbGVtZW50SG92ZXJlZCAhPT0gb2xkU3RhdGUuZWxlbWVudEhvdmVyZWRcbiAgICAgICAgOiBuZXdTdGF0ZS5lbGVtZW50SG92ZXJlZFxuICAgICkge1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMTM0NSAtIEFuIGV4cHJlc3Npb24gb2YgdHlwZSAndm9pZCcgY2Fubm90IGJlIHRlc3RlZCBmb3IgdHJ1dGhpbmVzcy5cbiAgICAgIHJldHVybiBoYW5kbGVyKG9wdGlvbnMsIG5ld1N0YXRlKSB8fCBuZXdTdGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1N0YXRlO1xuICB9O1xuXG5jb25zdCB3aGVuRWxlbWVudFZpc2liaWx0eUNoYW5nZSA9XG4gIChoYW5kbGVyOiAob3B0aW9ucz86IGFueSwgc3RhdGU/OiBhbnkpID0+IGFueSkgPT5cbiAgKG9wdGlvbnM6IGFueSwgb2xkU3RhdGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgLi4ub2xkU3RhdGUsXG4gICAgICBlbGVtZW50VmlzaWJsZTogaXNFbGVtZW50VmlzaWJsZShvcHRpb25zKSxcbiAgICB9IGFzIGNvbnN0O1xuICAgIGlmIChcbiAgICAgIG9sZFN0YXRlXG4gICAgICAgID8gbmV3U3RhdGUuZWxlbWVudFZpc2libGUgIT09IG9sZFN0YXRlLmVsZW1lbnRWaXNpYmxlXG4gICAgICAgIDogbmV3U3RhdGUuZWxlbWVudFZpc2libGVcbiAgICApIHtcbiAgICAgIHJldHVybiBoYW5kbGVyKG9wdGlvbnMsIG5ld1N0YXRlKSB8fCBuZXdTdGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1N0YXRlO1xuICB9O1xuXG5jb25zdCB3aGVuU2Nyb2xsRGlyZWN0aW9uQ2hhbmdlID1cbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAnaGFuZGxlcicgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cblxuICAoaGFuZGxlcikgPT5cbiAgICAob3B0aW9uczogYW55LCBvbGRTdGF0ZSA9IHt9KSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHN0aWZmU2Nyb2xsVG9wOiBzY3JvbGxUb3AsXG4gICAgICAgIHNjcm9sbEhlaWdodCxcbiAgICAgICAgaW5uZXJIZWlnaHQsXG4gICAgICB9ID0gZ2V0RG9jdW1lbnRTdGF0ZSgpO1xuICAgICAgY29uc3Qge1xuICAgICAgICBldmVudDoge2NvbmZpZywgZXZlbnRUeXBlSWR9LFxuICAgICAgfSA9IG9wdGlvbnM7XG4gICAgICBjb25zdCB7c2Nyb2xsT2Zmc2V0VmFsdWUsIHNjcm9sbE9mZnNldFVuaXR9ID0gY29uZmlnO1xuICAgICAgY29uc3QgaXNQWCA9IHNjcm9sbE9mZnNldFVuaXQgPT09ICdQWCc7XG5cbiAgICAgIGNvbnN0IHNjcm9sbEhlaWdodEJvdW5kcyA9IHNjcm9sbEhlaWdodCAtIGlubmVySGVpZ2h0O1xuICAgICAgLy8gcGVyY2VudCB0b3Agc2luY2UgaW5uZXJIZWlnaHQgbWF5IGNoYW5nZSBmb3IgbW9iaWxlIGRldmljZXMgd2hpY2ggYWxzbyBjaGFuZ2VzIHRoZSBzY3JvbGxUb3AgdmFsdWUuXG4gICAgICBjb25zdCBwZXJjZW50VG9wID0gTnVtYmVyKChzY3JvbGxUb3AgLyBzY3JvbGxIZWlnaHRCb3VuZHMpLnRvRml4ZWQoMikpO1xuXG4gICAgICAvLyBubyBzdGF0ZSBjaGFuZ2VcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzMzkgLSBQcm9wZXJ0eSAncGVyY2VudFRvcCcgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAne30nLlxuICAgICAgaWYgKG9sZFN0YXRlICYmIG9sZFN0YXRlLnBlcmNlbnRUb3AgPT09IHBlcmNlbnRUb3ApIHtcbiAgICAgICAgcmV0dXJuIG9sZFN0YXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzY3JvbGxUb3BQYWRkaW5nID1cbiAgICAgICAgKGlzUFhcbiAgICAgICAgICA/IHNjcm9sbE9mZnNldFZhbHVlXG4gICAgICAgICAgOiAoaW5uZXJIZWlnaHQgKiAoc2Nyb2xsT2Zmc2V0VmFsdWUgfHwgMCkpIC8gMTAwKSAvXG4gICAgICAgIHNjcm9sbEhlaWdodEJvdW5kcztcblxuICAgICAgbGV0IHNjcm9sbGluZ0Rvd247XG4gICAgICBsZXQgc2Nyb2xsRGlyZWN0aW9uQ2hhbmdlZDtcbiAgICAgIGxldCBhbmNob3JUb3AgPSAwO1xuXG4gICAgICBpZiAob2xkU3RhdGUpIHtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjMzOSAtIFByb3BlcnR5ICdwZXJjZW50VG9wJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICd7fScuXG4gICAgICAgIHNjcm9sbGluZ0Rvd24gPSBwZXJjZW50VG9wID4gb2xkU3RhdGUucGVyY2VudFRvcDtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjMzOSAtIFByb3BlcnR5ICdzY3JvbGxpbmdEb3duJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICd7fScuXG4gICAgICAgIHNjcm9sbERpcmVjdGlvbkNoYW5nZWQgPSBvbGRTdGF0ZS5zY3JvbGxpbmdEb3duICE9PSBzY3JvbGxpbmdEb3duO1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzM5IC0gUHJvcGVydHkgJ2FuY2hvclRvcCcgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAne30nLlxuICAgICAgICBhbmNob3JUb3AgPSBzY3JvbGxEaXJlY3Rpb25DaGFuZ2VkID8gcGVyY2VudFRvcCA6IG9sZFN0YXRlLmFuY2hvclRvcDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5Cb3VuZHMgPVxuICAgICAgICBldmVudFR5cGVJZCA9PT0gUEFHRV9TQ1JPTExfRE9XTlxuICAgICAgICAgID8gcGVyY2VudFRvcCA+PSBhbmNob3JUb3AgKyBzY3JvbGxUb3BQYWRkaW5nXG4gICAgICAgICAgOiBwZXJjZW50VG9wIDw9IGFuY2hvclRvcCAtIHNjcm9sbFRvcFBhZGRpbmc7XG5cbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAuLi5vbGRTdGF0ZSxcbiAgICAgICAgcGVyY2VudFRvcCxcbiAgICAgICAgaW5Cb3VuZHMsXG4gICAgICAgIGFuY2hvclRvcCxcbiAgICAgICAgc2Nyb2xsaW5nRG93bixcbiAgICAgIH0gYXMgY29uc3Q7XG5cbiAgICAgIGlmIChcbiAgICAgICAgb2xkU3RhdGUgJiZcbiAgICAgICAgaW5Cb3VuZHMgJiZcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjMzOSAtIFByb3BlcnR5ICdpbkJvdW5kcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAne30nLlxuICAgICAgICAoc2Nyb2xsRGlyZWN0aW9uQ2hhbmdlZCB8fCBuZXdTdGF0ZS5pbkJvdW5kcyAhPT0gb2xkU3RhdGUuaW5Cb3VuZHMpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIob3B0aW9ucywgbmV3U3RhdGUpIHx8IG5ld1N0YXRlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfTtcblxuY29uc3QgcG9pbnRJbnRlcnNlY3RzID0gKFxuICBwb2ludDoge1xuICAgIGxlZnQ6IGFueSB8IG51bWJlcjtcbiAgICB0b3A6IGFueSB8IG51bWJlcjtcbiAgfSxcbiAgcmVjdDogYW55XG4pID0+XG4gIHBvaW50LmxlZnQgPiByZWN0LmxlZnQgJiZcbiAgcG9pbnQubGVmdCA8IHJlY3QucmlnaHQgJiZcbiAgcG9pbnQudG9wID4gcmVjdC50b3AgJiZcbiAgcG9pbnQudG9wIDwgcmVjdC5ib3R0b207XG5cbmNvbnN0IHdoZW5QYWdlTG9hZEZpbmlzaCA9XG4gIChoYW5kbGVyOiAoYXJnMTogYW55LCBzdGF0ZTogdW5kZWZpbmVkIHwgYW55KSA9PiB1bmRlZmluZWQgfCBhbnkpID0+XG4gIChvcHRpb25zOiBhbnksIG9sZFN0YXRlOiBhbnkpID0+IHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgIGZpbmlzaGVkOiBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnLFxuICAgIH0gYXMgY29uc3Q7XG4gICAgaWYgKG5ld1N0YXRlLmZpbmlzaGVkICYmICEob2xkU3RhdGUgJiYgb2xkU3RhdGUuZmluc2hlZCkpIHtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzI1NTQgLSBFeHBlY3RlZCAyIGFyZ3VtZW50cywgYnV0IGdvdCAxLlxuICAgICAgaGFuZGxlcihvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1N0YXRlO1xuICB9O1xuXG5jb25zdCB3aGVuUGFnZUxvYWRTdGFydCA9XG4gIChoYW5kbGVyOiAoYXJnMTogYW55LCBzdGF0ZTogdW5kZWZpbmVkIHwgYW55KSA9PiB1bmRlZmluZWQgfCBhbnkpID0+XG4gIChvcHRpb25zOiBhbnksIG9sZFN0YXRlOiBhbnkpID0+IHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgIHN0YXJ0ZWQ6IHRydWUsXG4gICAgfSBhcyBjb25zdDtcbiAgICBpZiAoIW9sZFN0YXRlKSB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyNTU0IC0gRXhwZWN0ZWQgMiBhcmd1bWVudHMsIGJ1dCBnb3QgMS5cbiAgICAgIGhhbmRsZXIob3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgfTtcblxuY29uc3Qgd2hlbkNsaWNrQ291bnRDaGFuZ2UgPVxuICAoXG4gICAgaGFuZGxlcjogKFxuICAgICAgb3B0aW9uczogYW55LFxuICAgICAgYXJnMjoge1xuICAgICAgICBjbGlja0NvdW50OiBudW1iZXI7XG4gICAgICB9XG4gICAgKSA9PiB2b2lkXG4gICkgPT5cbiAgKG9wdGlvbnM6IGFueSwgb2xkU3RhdGUgPSB7Y2xpY2tDb3VudDogMH0pID0+IHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgIGNsaWNrQ291bnQ6IChvbGRTdGF0ZS5jbGlja0NvdW50ICUgMikgKyAxLFxuICAgIH0gYXMgY29uc3Q7XG4gICAgaWYgKG5ld1N0YXRlLmNsaWNrQ291bnQgIT09IG9sZFN0YXRlLmNsaWNrQ291bnQpIHtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzEzNDUgLSBBbiBleHByZXNzaW9uIG9mIHR5cGUgJ3ZvaWQnIGNhbm5vdCBiZSB0ZXN0ZWQgZm9yIHRydXRoaW5lc3MuXG4gICAgICByZXR1cm4gaGFuZGxlcihvcHRpb25zLCBuZXdTdGF0ZSkgfHwgbmV3U3RhdGU7XG4gICAgfVxuICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgfTtcblxuY29uc3QgZ2V0Q29tcG9uZW50QWN0aXZlT3B0aW9ucyA9IChhbGxvd05lc3RlZENoaWxkcmVuRXZlbnRzID0gdHJ1ZSkgPT4gKHtcbiAgLi4uYmFzZUFjdGl2aXR5QWN0aW9uR3JvdXBPcHRpb25zLFxuICBoYW5kbGVyOiB3aXRoRmlsdGVyKFxuICAgIGFsbG93TmVzdGVkQ2hpbGRyZW5FdmVudHMgPyBpc09yQ29udGFpbnNFbGVtZW50IDogaXNFbGVtZW50LFxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ29wdGlvbnMnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDA2IC0gUGFyYW1ldGVyICdzdGF0ZScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgICB3aGVuQ29tcG9uZW50QWN0aXZlQ2hhbmdlKChvcHRpb25zLCBzdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHN0YXRlLmlzQWN0aXZlXG4gICAgICAgID8gYmFzZUFjdGlvbkdyb3VwT3B0aW9ucy5oYW5kbGVyKG9wdGlvbnMsIHN0YXRlKVxuICAgICAgICA6IHN0YXRlO1xuICAgIH0pXG4gICksXG59KTtcblxuY29uc3QgZ2V0Q29tcG9uZW50SW5hY3RpdmVPcHRpb25zID0gKGFsbG93TmVzdGVkQ2hpbGRyZW5FdmVudHMgPSB0cnVlKSA9PiAoe1xuICAuLi5iYXNlQWN0aXZpdHlBY3Rpb25Hcm91cE9wdGlvbnMsXG4gIGhhbmRsZXI6IHdpdGhGaWx0ZXIoXG4gICAgYWxsb3dOZXN0ZWRDaGlsZHJlbkV2ZW50cyA/IGlzT3JDb250YWluc0VsZW1lbnQgOiBpc0VsZW1lbnQsXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAnb3B0aW9ucycgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMDYgLSBQYXJhbWV0ZXIgJ3N0YXRlJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICAgIHdoZW5Db21wb25lbnRBY3RpdmVDaGFuZ2UoKG9wdGlvbnMsIHN0YXRlKSA9PiB7XG4gICAgICByZXR1cm4gIXN0YXRlLmlzQWN0aXZlXG4gICAgICAgID8gYmFzZUFjdGlvbkdyb3VwT3B0aW9ucy5oYW5kbGVyKG9wdGlvbnMsIHN0YXRlKVxuICAgICAgICA6IHN0YXRlO1xuICAgIH0pXG4gICksXG59KTtcblxuY29uc3Qgc2Nyb2xsSW50b091dE9mVmlld09wdGlvbnMgPSB7XG4gIC4uLmJhc2VTY3JvbGxBY3Rpb25Hcm91cE9wdGlvbnMsXG4gIGhhbmRsZXI6IHdoZW5FbGVtZW50VmlzaWJpbHR5Q2hhbmdlKChvcHRpb25zLCBzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IHtlbGVtZW50VmlzaWJsZX0gPSBzdGF0ZTtcbiAgICBjb25zdCB7ZXZlbnQsIHN0b3JlfSA9IG9wdGlvbnM7XG4gICAgY29uc3Qge2l4RGF0YX0gPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgIGNvbnN0IHtldmVudHN9ID0gaXhEYXRhO1xuXG4gICAgLy8gdHJpZ2dlciB0aGUgaGFuZGxlciBvbmx5IG9uY2UgaWYgb25seSBvbmUgb2YgU0NST0xMX0lOVE8gb3IgU0NST0xMX09VVF9PRiBldmVudCB0eXBlc1xuICAgIC8vIGFyZSByZWdpc3RlcmVkLlxuICAgIGlmICghZXZlbnRzW2V2ZW50LmFjdGlvbi5jb25maWcuYXV0b1N0b3BFdmVudElkXSAmJiBzdGF0ZS50cmlnZ2VyZWQpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICBpZiAoKGV2ZW50LmV2ZW50VHlwZUlkID09PSBTQ1JPTExfSU5UT19WSUVXKSA9PT0gZWxlbWVudFZpc2libGUpIHtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzI1NTQgLSBFeHBlY3RlZCAyIGFyZ3VtZW50cywgYnV0IGdvdCAxLlxuICAgICAgYWN0aW9uR3JvdXBDcmVhdG9yKG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRyaWdnZXJlZDogdHJ1ZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH0pLFxufSBhcyBjb25zdDtcblxuY29uc3QgTU9VU0VfT1VUX1JPVU5EX1RIUkVTSE9MRCA9IDAuMDU7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW1NMSURFUl9BQ1RJVkVdOiBnZXRDb21wb25lbnRBY3RpdmVPcHRpb25zKCksXG4gIFtTTElERVJfSU5BQ1RJVkVdOiBnZXRDb21wb25lbnRJbmFjdGl2ZU9wdGlvbnMoKSxcbiAgW0RST1BET1dOX09QRU5dOiBnZXRDb21wb25lbnRBY3RpdmVPcHRpb25zKCksXG4gIFtEUk9QRE9XTl9DTE9TRV06IGdldENvbXBvbmVudEluYWN0aXZlT3B0aW9ucygpLFxuXG4gIC8vIG5hdmJhciBlbGVtZW50cyBtYXkgY29udGFpbiBuZXN0ZWQgY29tcG9uZW50cyBpbiB0aGUgbWVudS4gVG8gcHJldmVudCBhY3Rpdml0eSBtaXNmaXJlcywgb25seSBsaXN0ZWQgZm9yIGFjdGl2aXR5XG4gIC8vIGV2ZW50cyB3aGVyZSB0aGUgdGFyZ2V0IGlzIHRoZSBuYXZiYXIgZWxlbWVudCwgYW5kIGlnbm9yZSBjaGlsZHJlbiB0aGF0IGRpc3BhdGNoIGFjdGl2aXRpeSBldmVudHMuXG4gIFtOQVZCQVJfT1BFTl06IGdldENvbXBvbmVudEFjdGl2ZU9wdGlvbnMoZmFsc2UpLFxuICBbTkFWQkFSX0NMT1NFXTogZ2V0Q29tcG9uZW50SW5hY3RpdmVPcHRpb25zKGZhbHNlKSxcbiAgW1RBQl9BQ1RJVkVdOiBnZXRDb21wb25lbnRBY3RpdmVPcHRpb25zKCksXG4gIFtUQUJfSU5BQ1RJVkVdOiBnZXRDb21wb25lbnRJbmFjdGl2ZU9wdGlvbnMoKSxcbiAgW0VDT01NRVJDRV9DQVJUX09QRU5dOiB7XG4gICAgdHlwZXM6ICdlY29tbWVyY2UtY2FydC1vcGVuJyxcbiAgICBoYW5kbGVyOiB3aXRoRmlsdGVyKGlzT3JDb250YWluc0VsZW1lbnQsIGFjdGlvbkdyb3VwQ3JlYXRvciksXG4gIH0sXG4gIFtFQ09NTUVSQ0VfQ0FSVF9DTE9TRV06IHtcbiAgICB0eXBlczogJ2Vjb21tZXJjZS1jYXJ0LWNsb3NlJyxcbiAgICBoYW5kbGVyOiB3aXRoRmlsdGVyKGlzT3JDb250YWluc0VsZW1lbnQsIGFjdGlvbkdyb3VwQ3JlYXRvciksXG4gIH0sXG4gIFtNT1VTRV9DTElDS106IHtcbiAgICB0eXBlczogJ2NsaWNrJyxcbiAgICBoYW5kbGVyOiB3aXRoRmlsdGVyKFxuICAgICAgaXNPckNvbnRhaW5zRWxlbWVudCxcbiAgICAgIHdoZW5DbGlja0NvdW50Q2hhbmdlKChvcHRpb25zLCB7Y2xpY2tDb3VudH0pID0+IHtcbiAgICAgICAgaWYgKGhhc0F1dG9TdG9wRXZlbnQob3B0aW9ucykpIHtcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyNTU0IC0gRXhwZWN0ZWQgMiBhcmd1bWVudHMsIGJ1dCBnb3QgMS5cbiAgICAgICAgICBjbGlja0NvdW50ID09PSAxICYmIGFjdGlvbkdyb3VwQ3JlYXRvcihvcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyNTU0IC0gRXhwZWN0ZWQgMiBhcmd1bWVudHMsIGJ1dCBnb3QgMS5cbiAgICAgICAgICBhY3Rpb25Hcm91cENyZWF0b3Iob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKSxcbiAgfSxcbiAgW01PVVNFX1NFQ09ORF9DTElDS106IHtcbiAgICB0eXBlczogJ2NsaWNrJyxcbiAgICBoYW5kbGVyOiB3aXRoRmlsdGVyKFxuICAgICAgaXNPckNvbnRhaW5zRWxlbWVudCxcbiAgICAgIHdoZW5DbGlja0NvdW50Q2hhbmdlKChvcHRpb25zLCB7Y2xpY2tDb3VudH0pID0+IHtcbiAgICAgICAgaWYgKGNsaWNrQ291bnQgPT09IDIpIHtcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyNTU0IC0gRXhwZWN0ZWQgMiBhcmd1bWVudHMsIGJ1dCBnb3QgMS5cbiAgICAgICAgICBhY3Rpb25Hcm91cENyZWF0b3Iob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKSxcbiAgfSxcbiAgW01PVVNFX0RPV05dOiB7XG4gICAgLi4uYmFzZUFjdGlvbkdyb3VwT3B0aW9ucyxcbiAgICB0eXBlczogJ21vdXNlZG93bicsXG4gIH0sXG4gIFtNT1VTRV9VUF06IHtcbiAgICAuLi5iYXNlQWN0aW9uR3JvdXBPcHRpb25zLFxuICAgIHR5cGVzOiAnbW91c2V1cCcsXG4gIH0sXG4gIFtNT1VTRV9PVkVSXToge1xuICAgIHR5cGVzOiBNT1VTRV9PVkVSX09VVF9UWVBFUyxcbiAgICBoYW5kbGVyOiB3aXRoRmlsdGVyKFxuICAgICAgaXNPckNvbnRhaW5zRWxlbWVudCxcbiAgICAgIHdoZW5FbGVtZW50SG92ZXJDaGFuZ2UoKG9wdGlvbnMsIHN0YXRlKSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZS5lbGVtZW50SG92ZXJlZCkge1xuICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzI1NTQgLSBFeHBlY3RlZCAyIGFyZ3VtZW50cywgYnV0IGdvdCAxLlxuICAgICAgICAgIGFjdGlvbkdyb3VwQ3JlYXRvcihvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApLFxuICB9LFxuICBbTU9VU0VfT1VUXToge1xuICAgIHR5cGVzOiBNT1VTRV9PVkVSX09VVF9UWVBFUyxcbiAgICBoYW5kbGVyOiB3aXRoRmlsdGVyKFxuICAgICAgaXNPckNvbnRhaW5zRWxlbWVudCxcbiAgICAgIHdoZW5FbGVtZW50SG92ZXJDaGFuZ2UoKG9wdGlvbnMsIHN0YXRlKSA9PiB7XG4gICAgICAgIGlmICghc3RhdGUuZWxlbWVudEhvdmVyZWQpIHtcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyNTU0IC0gRXhwZWN0ZWQgMiBhcmd1bWVudHMsIGJ1dCBnb3QgMS5cbiAgICAgICAgICBhY3Rpb25Hcm91cENyZWF0b3Iob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKSxcbiAgfSxcbiAgW01PVVNFX01PVkVdOiB7XG4gICAgdHlwZXM6ICdtb3VzZW1vdmUgbW91c2VvdXQgc2Nyb2xsJyxcbiAgICBoYW5kbGVyOiAoXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICB7c3RvcmUsIGVsZW1lbnQsIGV2ZW50Q29uZmlnLCBuYXRpdmVFdmVudCwgZXZlbnRTdGF0ZUtleX0sXG5cbiAgICAgIHN0YXRlID0ge2NsaWVudFg6IDAsIGNsaWVudFk6IDAsIHBhZ2VYOiAwLCBwYWdlWTogMH1cbiAgICApID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgYmFzZWRPbixcbiAgICAgICAgc2VsZWN0ZWRBeGlzLFxuICAgICAgICBjb250aW51b3VzUGFyYW1ldGVyR3JvdXBJZCxcbiAgICAgICAgcmV2ZXJzZSxcbiAgICAgICAgcmVzdGluZ1N0YXRlID0gMCxcbiAgICAgIH0gPSBldmVudENvbmZpZztcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY2xpZW50WCA9IHN0YXRlLmNsaWVudFgsXG4gICAgICAgIGNsaWVudFkgPSBzdGF0ZS5jbGllbnRZLFxuICAgICAgICBwYWdlWCA9IHN0YXRlLnBhZ2VYLFxuICAgICAgICBwYWdlWSA9IHN0YXRlLnBhZ2VZLFxuICAgICAgfSA9IG5hdGl2ZUV2ZW50O1xuICAgICAgY29uc3QgaXNYQXhpcyA9IHNlbGVjdGVkQXhpcyA9PT0gJ1hfQVhJUyc7XG4gICAgICBjb25zdCBpc01vdXNlT3V0ID0gbmF0aXZlRXZlbnQudHlwZSA9PT0gJ21vdXNlb3V0JztcblxuICAgICAgbGV0IHZhbHVlID0gcmVzdGluZ1N0YXRlIC8gMTAwO1xuICAgICAgbGV0IG5hbWVzcGFjZWRQYXJhbWV0ZXJJZCA9IGNvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cElkO1xuICAgICAgbGV0IGVsZW1lbnRIb3ZlcmVkID0gZmFsc2U7XG5cbiAgICAgIHN3aXRjaCAoYmFzZWRPbikge1xuICAgICAgICBjYXNlIEV2ZW50QmFzZWRPbi5WSUVXUE9SVDoge1xuICAgICAgICAgIHZhbHVlID0gaXNYQXhpc1xuICAgICAgICAgICAgPyBNYXRoLm1pbihjbGllbnRYLCB3aW5kb3cuaW5uZXJXaWR0aCkgLyB3aW5kb3cuaW5uZXJXaWR0aFxuICAgICAgICAgICAgOiBNYXRoLm1pbihjbGllbnRZLCB3aW5kb3cuaW5uZXJIZWlnaHQpIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzMzkgLSBQcm9wZXJ0eSAnUEFHRScgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAneyByZWFkb25seSBFTEVNRU5UOiBcIkVMRU1FTlRcIjsgcmVhZG9ubHkgVklFV1BPUlQ6IFwiVklFV1BPUlRcIjsgfScuXG4gICAgICAgIGNhc2UgRXZlbnRCYXNlZE9uLlBBR0U6IHtcbiAgICAgICAgICBjb25zdCB7c2Nyb2xsTGVmdCwgc2Nyb2xsVG9wLCBzY3JvbGxXaWR0aCwgc2Nyb2xsSGVpZ2h0fSA9XG4gICAgICAgICAgICBnZXREb2N1bWVudFN0YXRlKCk7XG4gICAgICAgICAgdmFsdWUgPSBpc1hBeGlzXG4gICAgICAgICAgICA/IE1hdGgubWluKHNjcm9sbExlZnQgKyBwYWdlWCwgc2Nyb2xsV2lkdGgpIC8gc2Nyb2xsV2lkdGhcbiAgICAgICAgICAgIDogTWF0aC5taW4oc2Nyb2xsVG9wICsgcGFnZVksIHNjcm9sbEhlaWdodCkgLyBzY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBFdmVudEJhc2VkT24uRUxFTUVOVDpcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIG5hbWVzcGFjZWRQYXJhbWV0ZXJJZCA9IGdldE5hbWVzcGFjZWRQYXJhbWV0ZXJJZChcbiAgICAgICAgICAgIGV2ZW50U3RhdGVLZXksXG4gICAgICAgICAgICBjb250aW51b3VzUGFyYW1ldGVyR3JvdXBJZFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjb25zdCBpc01vdXNlRXZlbnQgPSBuYXRpdmVFdmVudC50eXBlLmluZGV4T2YoJ21vdXNlJykgPT09IDA7XG5cbiAgICAgICAgICAvLyBVc2UgaXNPckNvbnRhaW5zRWxlbWVudCBmb3IgbW91c2UgZXZlbnRzIHNpbmNlIHRoZXkgYXJlIGZpcmVkIGZyb20gdGhlIHRhcmdldFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGlzTW91c2VFdmVudCAmJlxuICAgICAgICAgICAgaXNPckNvbnRhaW5zRWxlbWVudCh7ZWxlbWVudCwgbmF0aXZlRXZlbnR9KSAhPT0gdHJ1ZVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgY29uc3Qge2xlZnQsIHRvcCwgd2lkdGgsIGhlaWdodH0gPSByZWN0O1xuXG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIHdlJ2xsIG5lZWQgdG8gY2FsY3VsYXRlIHRoZSBtb3VzZSBwb3NpdGlvbiBmcm9tIHRoZSBwcmV2aW91cyBoYW5kbGVyIHN0YXRlXG4gICAgICAgICAgLy8gYWdhaW5zdCB0aGUgdGFyZ2V0IGVsZW1lbnQncyByZWN0XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIWlzTW91c2VFdmVudCAmJlxuICAgICAgICAgICAgIXBvaW50SW50ZXJzZWN0cyh7bGVmdDogY2xpZW50WCwgdG9wOiBjbGllbnRZfSwgcmVjdClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsZW1lbnRIb3ZlcmVkID0gdHJ1ZTtcblxuICAgICAgICAgIHZhbHVlID0gaXNYQXhpcyA/IChjbGllbnRYIC0gbGVmdCkgLyB3aWR0aCA6IChjbGllbnRZIC0gdG9wKSAvIGhlaWdodDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBjb3ZlciBjYXNlIHdoZXJlIHRoZSBldmVudCBpcyBhIG1vdXNlIG91dCwgYnV0IHRoZSB2YWx1ZSBpcyBub3QgcXVpdGUgYXQgMTAwJVxuICAgICAgaWYgKFxuICAgICAgICBpc01vdXNlT3V0ICYmXG4gICAgICAgICh2YWx1ZSA+IDEgLSBNT1VTRV9PVVRfUk9VTkRfVEhSRVNIT0xEIHx8XG4gICAgICAgICAgdmFsdWUgPCBNT1VTRV9PVVRfUk9VTkRfVEhSRVNIT0xEKVxuICAgICAgKSB7XG4gICAgICAgIHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE9ubHkgdXBkYXRlIGJhc2VkIG9uIGVsZW1lbnQgaWYgdGhlIG1vdXNlIGlzIG1vdmluZyBvdmVyIG9yIGhhcyBqdXN0IGxlZnQgdGhlIGVsZW1lbnRcbiAgICAgIGlmIChcbiAgICAgICAgYmFzZWRPbiAhPT0gRXZlbnRCYXNlZE9uLkVMRU1FTlQgfHxcbiAgICAgICAgZWxlbWVudEhvdmVyZWQgfHxcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgIGVsZW1lbnRIb3ZlcmVkICE9PSBzdGF0ZS5lbGVtZW50SG92ZXJlZFxuICAgICAgKSB7XG4gICAgICAgIHZhbHVlID0gcmV2ZXJzZSA/IDEgLSB2YWx1ZSA6IHZhbHVlO1xuICAgICAgICBzdG9yZS5kaXNwYXRjaChwYXJhbWV0ZXJDaGFuZ2VkKG5hbWVzcGFjZWRQYXJhbWV0ZXJJZCwgdmFsdWUpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudEhvdmVyZWQsXG4gICAgICAgIGNsaWVudFgsXG4gICAgICAgIGNsaWVudFksXG4gICAgICAgIHBhZ2VYLFxuICAgICAgICBwYWdlWSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcblxuICBbUEFHRV9TQ1JPTExdOiB7XG4gICAgdHlwZXM6IFNDUk9MTF9FVkVOVF9UWVBFUyxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGhhbmRsZXI6ICh7c3RvcmUsIGV2ZW50Q29uZmlnfSkgPT4ge1xuICAgICAgY29uc3Qge2NvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cElkLCByZXZlcnNlfSA9IGV2ZW50Q29uZmlnO1xuICAgICAgY29uc3Qge3Njcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHR9ID0gZ2V0RG9jdW1lbnRTdGF0ZSgpO1xuICAgICAgbGV0IHZhbHVlID0gc2Nyb2xsVG9wIC8gKHNjcm9sbEhlaWdodCAtIGNsaWVudEhlaWdodCk7XG4gICAgICB2YWx1ZSA9IHJldmVyc2UgPyAxIC0gdmFsdWUgOiB2YWx1ZTtcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHBhcmFtZXRlckNoYW5nZWQoY29udGludW91c1BhcmFtZXRlckdyb3VwSWQsIHZhbHVlKSk7XG4gICAgfSxcbiAgfSxcblxuICBbU0NST0xMSU5HX0lOX1ZJRVddOiB7XG4gICAgdHlwZXM6IFNDUk9MTF9FVkVOVF9UWVBFUyxcbiAgICBoYW5kbGVyOiAoXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICB7ZWxlbWVudCwgc3RvcmUsIGV2ZW50Q29uZmlnLCBldmVudFN0YXRlS2V5fSxcblxuICAgICAgc3RhdGUgPSB7c2Nyb2xsUGVyY2VudDogMH1cbiAgICApID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgc2Nyb2xsTGVmdCxcbiAgICAgICAgc2Nyb2xsVG9wLFxuICAgICAgICBzY3JvbGxXaWR0aCxcbiAgICAgICAgc2Nyb2xsSGVpZ2h0LFxuICAgICAgICBjbGllbnRIZWlnaHQ6IHZpc2libGVIZWlnaHQsXG4gICAgICB9ID0gZ2V0RG9jdW1lbnRTdGF0ZSgpO1xuXG4gICAgICBjb25zdCB7XG4gICAgICAgIGJhc2VkT24sXG4gICAgICAgIHNlbGVjdGVkQXhpcyxcbiAgICAgICAgY29udGludW91c1BhcmFtZXRlckdyb3VwSWQsXG4gICAgICAgIHN0YXJ0c0VudGVyaW5nLFxuICAgICAgICBzdGFydHNFeGl0aW5nLFxuICAgICAgICBhZGRFbmRPZmZzZXQsXG4gICAgICAgIGFkZFN0YXJ0T2Zmc2V0LFxuICAgICAgICBhZGRPZmZzZXRWYWx1ZSA9IDAsXG4gICAgICAgIGVuZE9mZnNldFZhbHVlID0gMCxcbiAgICAgIH0gPSBldmVudENvbmZpZztcblxuICAgICAgY29uc3QgaXNYQXhpcyA9IHNlbGVjdGVkQXhpcyA9PT0gJ1hfQVhJUyc7XG5cbiAgICAgIGlmIChiYXNlZE9uID09PSBFdmVudEJhc2VkT24uVklFV1BPUlQpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpc1hBeGlzXG4gICAgICAgICAgPyBzY3JvbGxMZWZ0IC8gc2Nyb2xsV2lkdGhcbiAgICAgICAgICA6IHNjcm9sbFRvcCAvIHNjcm9sbEhlaWdodDtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBzdGF0ZS5zY3JvbGxQZXJjZW50KSB7XG4gICAgICAgICAgc3RvcmUuZGlzcGF0Y2gocGFyYW1ldGVyQ2hhbmdlZChjb250aW51b3VzUGFyYW1ldGVyR3JvdXBJZCwgdmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNjcm9sbFBlcmNlbnQ6IHZhbHVlLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmFtZXNwYWNlZFBhcmFtZXRlcklkID0gZ2V0TmFtZXNwYWNlZFBhcmFtZXRlcklkKFxuICAgICAgICAgIGV2ZW50U3RhdGVLZXksXG4gICAgICAgICAgY29udGludW91c1BhcmFtZXRlckdyb3VwSWRcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBsZXQgb2Zmc2V0U3RhcnRQZXJjID0gKGFkZFN0YXJ0T2Zmc2V0ID8gYWRkT2Zmc2V0VmFsdWUgOiAwKSAvIDEwMDtcbiAgICAgICAgbGV0IG9mZnNldEVuZFBlcmMgPSAoYWRkRW5kT2Zmc2V0ID8gZW5kT2Zmc2V0VmFsdWUgOiAwKSAvIDEwMDtcblxuICAgICAgICAvLyBmbGlwIHRoZSBvZmZzZXQgcGVyY2VudGFnZXMgZGVwZW5kaW5nIG9uIHN0YXJ0IC8gZXhpdCB0eXBlXG4gICAgICAgIG9mZnNldFN0YXJ0UGVyYyA9IHN0YXJ0c0VudGVyaW5nXG4gICAgICAgICAgPyBvZmZzZXRTdGFydFBlcmNcbiAgICAgICAgICA6IDEgLSBvZmZzZXRTdGFydFBlcmM7XG4gICAgICAgIG9mZnNldEVuZFBlcmMgPSBzdGFydHNFeGl0aW5nID8gb2Zmc2V0RW5kUGVyYyA6IDEgLSBvZmZzZXRFbmRQZXJjO1xuXG4gICAgICAgIGNvbnN0IG9mZnNldEVsZW1lbnRUb3AgPVxuICAgICAgICAgIGVsZW1lbnRSZWN0LnRvcCArXG4gICAgICAgICAgTWF0aC5taW4oZWxlbWVudFJlY3QuaGVpZ2h0ICogb2Zmc2V0U3RhcnRQZXJjLCB2aXNpYmxlSGVpZ2h0KTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0RWxlbWVudEJvdHRvbSA9XG4gICAgICAgICAgZWxlbWVudFJlY3QudG9wICsgZWxlbWVudFJlY3QuaGVpZ2h0ICogb2Zmc2V0RW5kUGVyYztcbiAgICAgICAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gb2Zmc2V0RWxlbWVudEJvdHRvbSAtIG9mZnNldEVsZW1lbnRUb3A7XG5cbiAgICAgICAgY29uc3QgZml4ZWRTY3JvbGxIZWlnaHQgPSBNYXRoLm1pbihcbiAgICAgICAgICB2aXNpYmxlSGVpZ2h0ICsgb2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgIHNjcm9sbEhlaWdodFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGZpeGVkU2Nyb2xsVG9wID0gTWF0aC5taW4oXG4gICAgICAgICAgTWF0aC5tYXgoMCwgdmlzaWJsZUhlaWdodCAtIG9mZnNldEVsZW1lbnRUb3ApLFxuICAgICAgICAgIGZpeGVkU2Nyb2xsSGVpZ2h0XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGZpeGVkU2Nyb2xsUGVyYyA9IGZpeGVkU2Nyb2xsVG9wIC8gZml4ZWRTY3JvbGxIZWlnaHQ7XG5cbiAgICAgICAgaWYgKGZpeGVkU2Nyb2xsUGVyYyAhPT0gc3RhdGUuc2Nyb2xsUGVyY2VudCkge1xuICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgcGFyYW1ldGVyQ2hhbmdlZChuYW1lc3BhY2VkUGFyYW1ldGVySWQsIGZpeGVkU2Nyb2xsUGVyYylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc2Nyb2xsUGVyY2VudDogZml4ZWRTY3JvbGxQZXJjLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIFtTQ1JPTExfSU5UT19WSUVXXTogc2Nyb2xsSW50b091dE9mVmlld09wdGlvbnMsXG4gIFtTQ1JPTExfT1VUX09GX1ZJRVddOiBzY3JvbGxJbnRvT3V0T2ZWaWV3T3B0aW9ucyxcblxuICBbUEFHRV9TQ1JPTExfRE9XTl06IHtcbiAgICAuLi5iYXNlU2Nyb2xsQWN0aW9uR3JvdXBPcHRpb25zLFxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ29wdGlvbnMnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDA2IC0gUGFyYW1ldGVyICdzdGF0ZScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgICBoYW5kbGVyOiB3aGVuU2Nyb2xsRGlyZWN0aW9uQ2hhbmdlKChvcHRpb25zLCBzdGF0ZSkgPT4ge1xuICAgICAgaWYgKHN0YXRlLnNjcm9sbGluZ0Rvd24pIHtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjU1NCAtIEV4cGVjdGVkIDIgYXJndW1lbnRzLCBidXQgZ290IDEuXG4gICAgICAgIGFjdGlvbkdyb3VwQ3JlYXRvcihvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9KSxcbiAgfSxcblxuICBbUEFHRV9TQ1JPTExfVVBdOiB7XG4gICAgLi4uYmFzZVNjcm9sbEFjdGlvbkdyb3VwT3B0aW9ucyxcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDA2IC0gUGFyYW1ldGVyICdvcHRpb25zJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLiB8IFRTNzAwNiAtIFBhcmFtZXRlciAnc3RhdGUnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gICAgaGFuZGxlcjogd2hlblNjcm9sbERpcmVjdGlvbkNoYW5nZSgob3B0aW9ucywgc3RhdGUpID0+IHtcbiAgICAgIGlmICghc3RhdGUuc2Nyb2xsaW5nRG93bikge1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyNTU0IC0gRXhwZWN0ZWQgMiBhcmd1bWVudHMsIGJ1dCBnb3QgMS5cbiAgICAgICAgYWN0aW9uR3JvdXBDcmVhdG9yKG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0pLFxuICB9LFxuXG4gIFtQQUdFX0ZJTklTSF06IHtcbiAgICB0eXBlczogJ3JlYWR5c3RhdGVjaGFuZ2UgSVgyX1BBR0VfVVBEQVRFJyxcbiAgICBoYW5kbGVyOiB3aXRoRmlsdGVyKGlzRWxlbWVudCwgd2hlblBhZ2VMb2FkRmluaXNoKGFjdGlvbkdyb3VwQ3JlYXRvcikpLFxuICB9LFxuXG4gIFtQQUdFX1NUQVJUXToge1xuICAgIHR5cGVzOiAncmVhZHlzdGF0ZWNoYW5nZSBJWDJfUEFHRV9VUERBVEUnLFxuICAgIGhhbmRsZXI6IHdpdGhGaWx0ZXIoaXNFbGVtZW50LCB3aGVuUGFnZUxvYWRTdGFydChhY3Rpb25Hcm91cENyZWF0b3IpKSxcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsiTU9VU0VfQ0xJQ0siLCJNT1VTRV9TRUNPTkRfQ0xJQ0siLCJNT1VTRV9ET1dOIiwiTU9VU0VfVVAiLCJNT1VTRV9PVkVSIiwiTU9VU0VfT1VUIiwiRFJPUERPV05fQ0xPU0UiLCJEUk9QRE9XTl9PUEVOIiwiU0xJREVSX0FDVElWRSIsIlNMSURFUl9JTkFDVElWRSIsIlRBQl9BQ1RJVkUiLCJUQUJfSU5BQ1RJVkUiLCJOQVZCQVJfQ0xPU0UiLCJOQVZCQVJfT1BFTiIsIk1PVVNFX01PVkUiLCJQQUdFX1NDUk9MTF9ET1dOIiwiU0NST0xMX0lOVE9fVklFVyIsIlNDUk9MTF9PVVRfT0ZfVklFVyIsIlBBR0VfU0NST0xMX1VQIiwiU0NST0xMSU5HX0lOX1ZJRVciLCJQQUdFX0ZJTklTSCIsIkVDT01NRVJDRV9DQVJUX0NMT1NFIiwiRUNPTU1FUkNFX0NBUlRfT1BFTiIsIlBBR0VfU1RBUlQiLCJQQUdFX1NDUk9MTCIsIkV2ZW50VHlwZUNvbnN0cyIsIkNPTVBPTkVOVF9BQ1RJVkUiLCJDT01QT05FTlRfSU5BQ1RJVkUiLCJDT0xPTl9ERUxJTUlURVIiLCJJWDJFbmdpbmVDb25zdGFudHMiLCJnZXROYW1lc3BhY2VkUGFyYW1ldGVySWQiLCJJWDJWYW5pbGxhVXRpbHMiLCJjb21wb3NhYmxlRmlsdGVyIiwicHJlZGljYXRlIiwib3B0aW9ucyIsImlzRWxlbWVudCIsImVsZW1lbnQiLCJuYXRpdmVFdmVudCIsInRhcmdldCIsImNvbnRhaW5zRWxlbWVudCIsImNvbnRhaW5zIiwiaXNPckNvbnRhaW5zRWxlbWVudCIsImZsb3ciLCJnZXRBdXRvU3RvcEV2ZW50Iiwic3RvcmUiLCJhdXRvU3RvcEV2ZW50SWQiLCJpeERhdGEiLCJnZXRTdGF0ZSIsImV2ZW50cyIsImV2ZW50VG9TdG9wIiwiQVVUT19TVE9QX0RJU0FCTEVEX0VWRU5UUyIsImV2ZW50VHlwZUlkIiwiaGFzQXV0b1N0b3BFdmVudCIsImV2ZW50IiwiYWN0aW9uIiwiZXZlbnRBY3Rpb24iLCJjb25maWciLCJCb29sZWFuIiwiYWN0aW9uR3JvdXBDcmVhdG9yIiwiZXZlbnRTdGF0ZUtleSIsInN0YXRlIiwiaWQiLCJldmVudElkIiwiYWN0aW9uTGlzdElkIiwic3RvcEFjdGlvbkdyb3VwIiwiZXZlbnRUYXJnZXQiLCJzcGxpdCIsImdldCIsInN0YXJ0QWN0aW9uR3JvdXAiLCJ3aXRoRmlsdGVyIiwiZmlsdGVyIiwiaGFuZGxlciIsImJhc2VBY3Rpb25Hcm91cE9wdGlvbnMiLCJiYXNlQWN0aXZpdHlBY3Rpb25Hcm91cE9wdGlvbnMiLCJ0eXBlcyIsImpvaW4iLCJTQ1JPTExfRVZFTlRfVFlQRVMiLCJ3aW5kb3ciLCJ0aHJvdHRsZSIsImRvY3VtZW50IiwiTU9VU0VfT1ZFUl9PVVRfVFlQRVMiLCJiYXNlU2Nyb2xsQWN0aW9uR3JvdXBPcHRpb25zIiwiZ2V0RG9jdW1lbnRTdGF0ZSIsInN1cHBvcnRPZmZzZXQiLCJwYWdlWE9mZnNldCIsInVuZGVmaW5lZCIsImlzQ1NTMUNvbXBhdCIsImNvbXBhdE1vZGUiLCJyb290RWxlbWVudCIsImRvY3VtZW50RWxlbWVudCIsImJvZHkiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJzdGlmZlNjcm9sbFRvcCIsImNsYW1wIiwic2Nyb2xsSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxXaWR0aCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJXaWR0aCIsImFyZUJveGVzSW50ZXJzZWN0aW5nIiwiYSIsImIiLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJpc0VsZW1lbnRIb3ZlcmVkIiwidHlwZSIsInJlbGF0ZWRUYXJnZXQiLCJjb250YWluc1RhcmdldCIsImNvbnRhaW5zUmVsYXRlZCIsImlzRWxlbWVudFZpc2libGUiLCJzY3JvbGxPZmZzZXRWYWx1ZSIsInNjcm9sbE9mZnNldFVuaXQiLCJpc1BYIiwib2Zmc2V0UGFkZGluZyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndoZW5Db21wb25lbnRBY3RpdmVDaGFuZ2UiLCJvbGRTdGF0ZSIsImlzQWN0aXZlIiwiaW5kZXhPZiIsIm5ld1N0YXRlIiwid2hlbkVsZW1lbnRIb3ZlckNoYW5nZSIsImVsZW1lbnRIb3ZlcmVkIiwid2hlbkVsZW1lbnRWaXNpYmlsdHlDaGFuZ2UiLCJlbGVtZW50VmlzaWJsZSIsIndoZW5TY3JvbGxEaXJlY3Rpb25DaGFuZ2UiLCJzY3JvbGxIZWlnaHRCb3VuZHMiLCJwZXJjZW50VG9wIiwiTnVtYmVyIiwidG9GaXhlZCIsInNjcm9sbFRvcFBhZGRpbmciLCJzY3JvbGxpbmdEb3duIiwic2Nyb2xsRGlyZWN0aW9uQ2hhbmdlZCIsImFuY2hvclRvcCIsImluQm91bmRzIiwicG9pbnRJbnRlcnNlY3RzIiwicG9pbnQiLCJyZWN0Iiwid2hlblBhZ2VMb2FkRmluaXNoIiwiZmluaXNoZWQiLCJyZWFkeVN0YXRlIiwiZmluc2hlZCIsIndoZW5QYWdlTG9hZFN0YXJ0Iiwic3RhcnRlZCIsIndoZW5DbGlja0NvdW50Q2hhbmdlIiwiY2xpY2tDb3VudCIsImdldENvbXBvbmVudEFjdGl2ZU9wdGlvbnMiLCJhbGxvd05lc3RlZENoaWxkcmVuRXZlbnRzIiwiZ2V0Q29tcG9uZW50SW5hY3RpdmVPcHRpb25zIiwic2Nyb2xsSW50b091dE9mVmlld09wdGlvbnMiLCJ0cmlnZ2VyZWQiLCJNT1VTRV9PVVRfUk9VTkRfVEhSRVNIT0xEIiwiZXZlbnRDb25maWciLCJjbGllbnRYIiwiY2xpZW50WSIsInBhZ2VYIiwicGFnZVkiLCJiYXNlZE9uIiwic2VsZWN0ZWRBeGlzIiwiY29udGludW91c1BhcmFtZXRlckdyb3VwSWQiLCJyZXZlcnNlIiwicmVzdGluZ1N0YXRlIiwiaXNYQXhpcyIsImlzTW91c2VPdXQiLCJ2YWx1ZSIsIm5hbWVzcGFjZWRQYXJhbWV0ZXJJZCIsIkV2ZW50QmFzZWRPbiIsIlZJRVdQT1JUIiwiTWF0aCIsIm1pbiIsIlBBR0UiLCJFTEVNRU5UIiwiaXNNb3VzZUV2ZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJyb3VuZCIsImRpc3BhdGNoIiwicGFyYW1ldGVyQ2hhbmdlZCIsInNjcm9sbFBlcmNlbnQiLCJ2aXNpYmxlSGVpZ2h0Iiwic3RhcnRzRW50ZXJpbmciLCJzdGFydHNFeGl0aW5nIiwiYWRkRW5kT2Zmc2V0IiwiYWRkU3RhcnRPZmZzZXQiLCJhZGRPZmZzZXRWYWx1ZSIsImVuZE9mZnNldFZhbHVlIiwiZWxlbWVudFJlY3QiLCJvZmZzZXRTdGFydFBlcmMiLCJvZmZzZXRFbmRQZXJjIiwib2Zmc2V0RWxlbWVudFRvcCIsIm9mZnNldEVsZW1lbnRCb3R0b20iLCJvZmZzZXRIZWlnaHQiLCJmaXhlZFNjcm9sbEhlaWdodCIsImZpeGVkU2Nyb2xsVG9wIiwibWF4IiwiZml4ZWRTY3JvbGxQZXJjIl0sIm1hcHBpbmdzIjoiQUFBQSxzQkFBc0I7Ozs7K0JBb2V0Qjs7O2VBQUE7Ozs2REFuZWlCOzREQUNEOzhEQUNFO2lDQU1YO2tDQUV5QztrQ0FDakI7d0JBQ0Q7Ozs7OztBQUU5QixNQUFNLEVBQ0pBLFdBQVcsRUFDWEMsa0JBQWtCLEVBQ2xCQyxVQUFVLEVBQ1ZDLFFBQVEsRUFDUkMsVUFBVSxFQUNWQyxTQUFTLEVBQ1RDLGNBQWMsRUFDZEMsYUFBYSxFQUNiQyxhQUFhLEVBQ2JDLGVBQWUsRUFDZkMsVUFBVSxFQUNWQyxZQUFZLEVBQ1pDLFlBQVksRUFDWkMsV0FBVyxFQUNYQyxVQUFVLEVBQ1ZDLGdCQUFnQixFQUNoQkMsZ0JBQWdCLEVBQ2hCQyxrQkFBa0IsRUFDbEJDLGNBQWMsRUFDZEMsaUJBQWlCLEVBQ2pCQyxXQUFXLEVBQ1hDLG9CQUFvQixFQUNwQkMsbUJBQW1CLEVBQ25CQyxVQUFVLEVBQ1ZDLFdBQVcsRUFDWixHQUFHQyxnQ0FBZTtBQUVuQixNQUFNQyxtQkFBbUI7QUFDekIsTUFBTUMscUJBQXFCO0FBRTNCLE1BQU0sRUFBQ0MsZUFBZSxFQUFDLEdBQUdDLG1DQUFrQjtBQUU1QyxNQUFNLEVBQUNDLHdCQUF3QixFQUFDLEdBQUdDLHVCQUFlO0FBRWxELE1BQU1DLG1CQUNKLENBQUNDLFlBQ0QsQ0FBQ0M7UUFDQyxJQUFJLE9BQU9BLFlBQVksWUFBWUQsVUFBVUMsVUFBVTtZQUNyRCxPQUFPO1FBQ1Q7UUFDQSxPQUFPQTtJQUNUO0FBRUYsTUFBTUMsWUFBWUgsaUJBQWlCLENBQUMsRUFBQ0ksT0FBTyxFQUFFQyxXQUFXLEVBQUM7SUFDeEQsT0FBT0QsWUFBWUMsWUFBWUMsTUFBTTtBQUN2QztBQUVBLE1BQU1DLGtCQUFrQlAsaUJBQWlCLENBQUMsRUFBQ0ksT0FB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

}),
4609: (function (__unused_webpack_module, exports, __webpack_require__) {
"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ixData", ({
    enumerable: true,
    get: function() {
        return ixData;
    }
}));
const _sharedconstants = __webpack_require__(7087);
const { IX2_RAW_DATA_IMPORTED } = _sharedconstants.IX2EngineActionTypes;
const ixData = (state = Object.freeze({}), action)=>{
    switch(action.type){
        case IX2_RAW_DATA_IMPORTED:
            {
                return action.payload.ixData || Object.freeze({});
            }
        default:
            {
                return state;
            }
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL2VuZ2luZS9yZWR1Y2Vycy9JWDJEYXRhUmVkdWNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lYMkVuZ2luZUFjdGlvblR5cGVzfSBmcm9tICdAcGFja2FnZXMvc3lzdGVtcy9peDIvc2hhcmVkLWNvbnN0YW50cyc7XG5pbXBvcnQge3Jhd0RhdGFJbXBvcnRlZFBheWxvYWR9IGZyb20gJy4uL2FjdGlvbnMvSVgyRW5naW5lQWN0aW9ucyc7XG5jb25zdCB7SVgyX1JBV19EQVRBX0lNUE9SVEVEfSA9IElYMkVuZ2luZUFjdGlvblR5cGVzO1xuXG50eXBlIGl4RGF0YVJlZHVjZXJBY3Rpb24gPSB7XG4gIHR5cGU6IHR5cGVvZiBJWDJfUkFXX0RBVEFfSU1QT1JURUQ7XG4gIHBheWxvYWQ6IHJhd0RhdGFJbXBvcnRlZFBheWxvYWQ7XG59O1xuXG5leHBvcnQgdHlwZSBpeERhdGFSZWR1Y2VyU3RhdGUgPSByYXdEYXRhSW1wb3J0ZWRQYXlsb2FkWydpeERhdGEnXTtcblxuZXhwb3J0IGNvbnN0IGl4RGF0YSA9IChcbiAgc3RhdGU6IGl4RGF0YVJlZHVjZXJTdGF0ZSA9IE9iamVjdC5mcmVlemUoXG4gICAge31cbiAgKSBhcyByYXdEYXRhSW1wb3J0ZWRQYXlsb2FkWydpeERhdGEnXSxcbiAgYWN0aW9uOiBpeERhdGFSZWR1Y2VyQWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgSVgyX1JBV19EQVRBX0lNUE9SVEVEOiB7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQuaXhEYXRhIHx8IE9iamVjdC5mcmVlemUoe30pO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG59O1xuIl0sIm5hbWVzIjpbIml4RGF0YSIsIklYMl9SQVdfREFUQV9JTVBPUlRFRCIsIklYMkVuZ2luZUFjdGlvblR5cGVzIiwic3RhdGUiLCJPYmplY3QiLCJmcmVlemUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFXYUE7OztlQUFBQTs7O2lDQVhzQjtBQUVuQyxNQUFNLEVBQUNDLHFCQUFxQixFQUFDLEdBQUdDLHFDQUFvQjtBQVM3QyxNQUFNRixTQUFTLENBQ3BCRyxRQUE0QkMsT0FBT0MsTUFBTSxDQUN2QyxDQUFDLEVBQ2tDLEVBQ3JDQztJQUVBLE9BQVFBLE9BQU9DLElBQUk7UUFDakIsS0FBS047WUFBdUI7Z0JBQzFCLE9BQU9LLE9BQU9FLE9BQU8sQ0FBQ1IsTUFBTSxJQUFJSSxPQUFPQyxNQUFNLENBQUMsQ0FBQztZQUNqRDtRQUNBO1lBQVM7Z0JBQ1AsT0FBT0Y7WUFDVDtJQUNGO0FBQ0YifQ==

}),
7718: (function (__unused_webpack_module, exports, __webpack_require__) {
"use strict";
/* eslint-env browser */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ixInstances", ({
    enumerable: true,
    get: function() {
        return ixInstances;
    }
}));
const _sharedconstants = __webpack_require__(7087);
const _shared = __webpack_require__(9468);
const _timm = __webpack_require__(1185);
const { IX2_RAW_DATA_IMPORTED, IX2_SESSION_STOPPED, IX2_INSTANCE_ADDED, IX2_INSTANCE_STARTED, IX2_INSTANCE_REMOVED, IX2_ANIMATION_FRAME_CHANGED } = _sharedconstants.IX2EngineActionTypes;
const { optimizeFloat, applyEasing, createBezierEasing } = _shared.IX2EasingUtils;
const { RENDER_GENERAL } = _sharedconstants.IX2EngineConstants;
const { getItemConfigByKey, getRenderType, getStyleProp } = _shared.IX2VanillaUtils;
const continuousInstance = (state, action)=>{
    const { position: lastPosition, parameterId, actionGroups, destinationKeys, smoothing, restingValue, actionTypeId, customEasingFn, skipMotion, skipToValue } = state;
    const { parameters } = action.payload;
    let velocity = Math.max(1 - smoothing, 0.01);
    let paramValue = parameters[parameterId];
    if (paramValue == null) {
        velocity = 1;
        paramValue = restingValue;
    }
    const nextPosition = Math.max(paramValue, 0) || 0;
    const positionDiff = optimizeFloat(nextPosition - lastPosition);
    const position = skipMotion ? skipToValue : optimizeFloat(lastPosition + positionDiff * velocity);
    const keyframePosition = position * 100;
    if (position === lastPosition && state.current) {
        return state;
    }
    let fromActionItem;
    let toActionItem;
    let positionOffset;
    let positionRange;
    for(let i = 0, { length } = actionGroups; i < length; i++){
        const { keyframe, actionItems } = actionGroups[i];
        if (i === 0) {
            fromActionItem = actionItems[0];
        }
        if (keyframePosition >= keyframe) {
            fromActionItem = actionItems[0];
            const nextGroup = actionGroups[i + 1];
            const hasNextItem = nextGroup && keyframePosition !== keyframe;
            toActionItem = hasNextItem ? nextGroup.actionItems[0] : null;
            if (hasNextItem) {
                positionOffset = keyframe / 100;
                positionRange = (nextGroup.keyframe - keyframe) / 100;
            }
        }
    }
    const current = {};
    if (fromActionItem && !toActionItem) {
        for(let i = 0, { length } = destinationKeys; i < length; i++){
            const key = destinationKeys[i];
            current[key] = getItemConfigByKey(actionTypeId, key, fromActionItem.config);
        }
    } else if (fromActionItem && toActionItem && positionOffset !== undefined && positionRange !== undefined) {
        const localPosition = (position - positionOffset) / positionRange;
        const easing = fromActionItem.config.easing;
        const eased = applyEasing(easing, localPosition, customEasingFn);
        for(let i = 0, { length } = destinationKeys; i < length; i++){
            const key = destinationKeys[i];
            const fromVal = getItemConfigByKey(actionTypeId, key, fromActionItem.config);
            const toVal = getItemConfigByKey(actionTypeId, key, toActionItem.config);
            const diff = toVal - fromVal;
            const value = diff * eased + fromVal;
            current[key] = value;
        }
    }
    return (0, _timm.merge)(state, {
        position,
        current
    });
};
const timedInstance = (state, action)=>{
    const { active, origin, start, immediate, renderType, verbose, actionItem, destination, destinationKeys, pluginDuration, instanceDelay, customEasingFn, skipMotion } = state;
    const easing = actionItem.config.easing;
    let { duration, delay } = actionItem.config;
    if (pluginDuration != null) {
        duration = pluginDuration;
    }
    delay = instanceDelay != null ? instanceDelay : delay;
    if (renderType === RENDER_GENERAL) {
        duration = 0;
    } else if (immediate || skipMotion) {
        duration = delay = 0;
    }
    const { now } = action.payload;
    if (active && origin) {
        const delta = now - (start + delay);
        if (verbose) {
            const verboseDelta = now - start;
            const verboseDuration = duration + delay;
            const verbosePosition = optimizeFloat(Math.min(Math.max(0, verboseDelta / verboseDuration), 1));
            state = (0, _timm.set)(state, 'verboseTimeElapsed', verboseDuration * verbosePosition);
        }
        if (delta < 0) {
            return state;
        }
        const position = optimizeFloat(Math.min(Math.max(0, delta / duration), 1));
        const eased = applyEasing(easing, position, customEasingFn);
        const newProps = {};
        let current = null;
        if (destinationKeys.length) {
            // @ts-expect-error - TS2347 - Untyped function calls may not accept type arguments. | TS7006 - Parameter 'result' implicitly has an 'any' type. | TS7006 - Parameter 'key' implicitly has an 'any' type.
            current = destinationKeys.reduce((result, key)=>{
                const destValue = destination[key];
                const originVal = parseFloat(origin[key]) || 0;
                const diff = parseFloat(destValue) - originVal;
                const value = diff * eased + originVal;
                result[key] = value;
                return result;
            }, {});
        }
        newProps.current = current;
        newProps.position = position;
        if (position === 1) {
            newProps.active = false;
            newProps.complete = true;
        }
        return (0, _timm.merge)(state, newProps);
    }
    return state;
};
const ixInstances = (state = Object.freeze({}), action)=>{
    switch(action.type){
        case IX2_RAW_DATA_IMPORTED:
            {
                return action.payload.ixInstances || Object.freeze({});
            }
        case IX2_SESSION_STOPPED:
            {
                return Object.freeze({});
            }
        case IX2_INSTANCE_ADDED:
            {
                const { instanceId, elementId, actionItem, eventId, eventTarget, eventStateKey, actionListId, groupIndex, isCarrier, origin, destination, immediate, verbose, continuous, parameterId, actionGroups, smoothing, restingValue, pluginInstance, pluginDuration, instanceDelay, skipMotion, skipToValue } = action.payload;
                const { actionTypeId } = actionItem;
                const renderType = getRenderType(actionTypeId);
                const styleProp = getStyleProp(renderType, actionTypeId);
                const destinationKeys = Object.keys(destination).filter((key)=>// Skip null destination values
                    destination[key] != null && // Skip string destination values
                    typeof destination[key] !== 'string');
                const { easing } = actionItem.config;
                return (0, _timm.set)(state, instanceId, {
                    id: instanceId,
                    elementId,
                    active: false,
                    position: 0,
                    start: 0,
                    origin,
                    destination,
                    destinationKeys,
                    immediate,
                    verbose,
                    current: null,
                    actionItem,
                    actionTypeId,
                    eventId,
                    eventTarget,
                    eventStateKey,
                    actionListId,
                    groupIndex,
                    renderType,
                    isCarrier,
                    styleProp,
                    continuous,
                    parameterId,
                    actionGroups,
                    smoothing,
                    restingValue,
                    pluginInstance,
                    pluginDuration,
                    instanceDelay,
                    skipMotion,
                    skipToValue,
                    customEasingFn: Array.isArray(easing) && easing.length === 4 ? createBezierEasing(easing) : undefined
                });
            }
        case IX2_INSTANCE_STARTED:
            {
                const { instanceId, time } = action.payload;
                return (0, _timm.mergeIn)(state, [
                    instanceId
                ], {
                    active: true,
                    complete: false,
                    start: time
                });
            }
        case IX2_INSTANCE_REMOVED:
            {
                const { instanceId } = action.payload;
                if (!state[instanceId]) {
                    return state;
                }
                const newState = {};
                const keys = Object.keys(state);
                const { length } = keys;
                for(let i = 0; i < length; i++){
                    const key = keys[i];
                    if (key !== instanceId) {
                        // @ts-expect-error - TS2538 - Type 'undefined' cannot be used as an index type. | TS2538 - Type 'undefined' cannot be used as an index type.
                        newState[key] = state[key];
                    }
                }
                return newState;
            }
        case IX2_ANIMATION_FRAME_CHANGED:
            {
                let newState = state;
                const keys = Object.keys(state);
                const { length } = keys;
                for(let i = 0; i < length; i++){
                    const key = keys[i];
                    // @ts-expect-error - TS2538 - Type 'undefined' cannot be used as an index type.
                    const instance = state[key];
                    const reducer = instance.continuous ? continuousInstance : timedInstance;
                    // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'Key'.
                    newState = (0, _timm.set)(newState, key, reducer(instance, action));
                }
                return newState;
            }
        default:
            {
                return state;
            }
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL2VuZ2luZS9yZWR1Y2Vycy9JWDJJbnN0YW5jZXNSZWR1Y2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQge1xuICBJWDJFbmdpbmVDb25zdGFudHMsXG4gIElYMkVuZ2luZUFjdGlvblR5cGVzLFxufSBmcm9tICdAcGFja2FnZXMvc3lzdGVtcy9peDIvc2hhcmVkLWNvbnN0YW50cyc7XG5cbmltcG9ydCB7SVgyRWFzaW5nVXRpbHMsIElYMlZhbmlsbGFVdGlsc30gZnJvbSAnQHBhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZCc7XG5cbmNvbnN0IHtcbiAgSVgyX1JBV19EQVRBX0lNUE9SVEVELFxuICBJWDJfU0VTU0lPTl9TVE9QUEVELFxuICBJWDJfSU5TVEFOQ0VfQURERUQsXG4gIElYMl9JTlNUQU5DRV9TVEFSVEVELFxuICBJWDJfSU5TVEFOQ0VfUkVNT1ZFRCxcbiAgSVgyX0FOSU1BVElPTl9GUkFNRV9DSEFOR0VELFxufSA9IElYMkVuZ2luZUFjdGlvblR5cGVzO1xuY29uc3Qge29wdGltaXplRmxvYXQsIGFwcGx5RWFzaW5nLCBjcmVhdGVCZXppZXJFYXNpbmd9ID0gSVgyRWFzaW5nVXRpbHM7XG5jb25zdCB7UkVOREVSX0dFTkVSQUx9ID0gSVgyRW5naW5lQ29uc3RhbnRzO1xuY29uc3Qge2dldEl0ZW1Db25maWdCeUtleSwgZ2V0UmVuZGVyVHlwZSwgZ2V0U3R5bGVQcm9wfSA9IElYMlZhbmlsbGFVdGlscztcblxuaW1wb3J0IHtzZXQsIG1lcmdlLCBtZXJnZUlufSBmcm9tICd0aW1tJztcblxuY29uc3QgY29udGludW91c0luc3RhbmNlID0gKHN0YXRlOiBhbnksIGFjdGlvbjogYW55KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBwb3NpdGlvbjogbGFzdFBvc2l0aW9uLFxuICAgIHBhcmFtZXRlcklkLFxuICAgIGFjdGlvbkdyb3VwcyxcbiAgICBkZXN0aW5hdGlvbktleXMsXG4gICAgc21vb3RoaW5nLFxuICAgIHJlc3RpbmdWYWx1ZSxcbiAgICBhY3Rpb25UeXBlSWQsXG4gICAgY3VzdG9tRWFzaW5nRm4sXG4gICAgc2tpcE1vdGlvbixcbiAgICBza2lwVG9WYWx1ZSxcbiAgfSA9IHN0YXRlO1xuXG4gIGNvbnN0IHtwYXJhbWV0ZXJzfSA9IGFjdGlvbi5wYXlsb2FkO1xuICBsZXQgdmVsb2NpdHkgPSBNYXRoLm1heCgxIC0gc21vb3RoaW5nLCAwLjAxKTtcbiAgbGV0IHBhcmFtVmFsdWUgPSBwYXJhbWV0ZXJzW3BhcmFtZXRlcklkXTtcbiAgaWYgKHBhcmFtVmFsdWUgPT0gbnVsbCkge1xuICAgIHZlbG9jaXR5ID0gMTtcbiAgICBwYXJhbVZhbHVlID0gcmVzdGluZ1ZhbHVlO1xuICB9XG4gIGNvbnN0IG5leHRQb3NpdGlvbiA9IE1hdGgubWF4KHBhcmFtVmFsdWUsIDApIHx8IDA7XG4gIGNvbnN0IHBvc2l0aW9uRGlmZiA9IG9wdGltaXplRmxvYXQobmV4dFBvc2l0aW9uIC0gbGFzdFBvc2l0aW9uKTtcbiAgY29uc3QgcG9zaXRpb24gPSBza2lwTW90aW9uXG4gICAgPyBza2lwVG9WYWx1ZVxuICAgIDogb3B0aW1pemVGbG9hdChsYXN0UG9zaXRpb24gKyBwb3NpdGlvbkRpZmYgKiB2ZWxvY2l0eSk7XG4gIGNvbnN0IGtleWZyYW1lUG9zaXRpb24gPSBwb3NpdGlvbiAqIDEwMDtcblxuICBpZiAocG9zaXRpb24gPT09IGxhc3RQb3NpdGlvbiAmJiBzdGF0ZS5jdXJyZW50KSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgbGV0IGZyb21BY3Rpb25JdGVtO1xuICBsZXQgdG9BY3Rpb25JdGVtO1xuICBsZXQgcG9zaXRpb25PZmZzZXQ7XG4gIGxldCBwb3NpdGlvblJhbmdlO1xuXG4gIGZvciAobGV0IGkgPSAwLCB7bGVuZ3RofSA9IGFjdGlvbkdyb3VwczsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qge2tleWZyYW1lLCBhY3Rpb25JdGVtc30gPSBhY3Rpb25Hcm91cHNbaV07XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgZnJvbUFjdGlvbkl0ZW0gPSBhY3Rpb25JdGVtc1swXTtcbiAgICB9XG5cbiAgICBpZiAoa2V5ZnJhbWVQb3NpdGlvbiA+PSBrZXlmcmFtZSkge1xuICAgICAgZnJvbUFjdGlvbkl0ZW0gPSBhY3Rpb25JdGVtc1swXTtcblxuICAgICAgY29uc3QgbmV4dEdyb3VwID0gYWN0aW9uR3JvdXBzW2kgKyAxXTtcbiAgICAgIGNvbnN0IGhhc05leHRJdGVtID0gbmV4dEdyb3VwICYmIGtleWZyYW1lUG9zaXRpb24gIT09IGtleWZyYW1lO1xuXG4gICAgICB0b0FjdGlvbkl0ZW0gPSBoYXNOZXh0SXRlbSA/IG5leHRHcm91cC5hY3Rpb25JdGVtc1swXSA6IG51bGw7XG5cbiAgICAgIGlmIChoYXNOZXh0SXRlbSkge1xuICAgICAgICBwb3NpdGlvbk9mZnNldCA9IGtleWZyYW1lIC8gMTAwO1xuICAgICAgICBwb3NpdGlvblJhbmdlID0gKG5leHRHcm91cC5rZXlmcmFtZSAtIGtleWZyYW1lKSAvIDEwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBjdXJyZW50OiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG5cbiAgaWYgKGZyb21BY3Rpb25JdGVtICYmICF0b0FjdGlvbkl0ZW0pIHtcbiAgICBmb3IgKGxldCBpID0gMCwge2xlbmd0aH0gPSBkZXN0aW5hdGlvbktleXM7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0gZGVzdGluYXRpb25LZXlzW2ldO1xuICAgICAgY3VycmVudFtrZXldID0gZ2V0SXRlbUNvbmZpZ0J5S2V5KFxuICAgICAgICBhY3Rpb25UeXBlSWQsXG4gICAgICAgIGtleSxcbiAgICAgICAgZnJvbUFjdGlvbkl0ZW0uY29uZmlnXG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICBmcm9tQWN0aW9uSXRlbSAmJlxuICAgIHRvQWN0aW9uSXRlbSAmJlxuICAgIHBvc2l0aW9uT2Zmc2V0ICE9PSB1bmRlZmluZWQgJiZcbiAgICBwb3NpdGlvblJhbmdlICE9PSB1bmRlZmluZWRcbiAgKSB7XG4gICAgY29uc3QgbG9jYWxQb3NpdGlvbiA9IChwb3NpdGlvbiAtIHBvc2l0aW9uT2Zmc2V0KSAvIHBvc2l0aW9uUmFuZ2U7XG4gICAgY29uc3QgZWFzaW5nID0gZnJvbUFjdGlvbkl0ZW0uY29uZmlnLmVhc2luZztcbiAgICBjb25zdCBlYXNlZCA9IGFwcGx5RWFzaW5nKGVhc2luZywgbG9jYWxQb3NpdGlvbiwgY3VzdG9tRWFzaW5nRm4pO1xuICAgIGZvciAobGV0IGkgPSAwLCB7bGVuZ3RofSA9IGRlc3RpbmF0aW9uS2V5czsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSBkZXN0aW5hdGlvbktleXNbaV07XG4gICAgICBjb25zdCBmcm9tVmFsID0gZ2V0SXRlbUNvbmZpZ0J5S2V5KFxuICAgICAgICBhY3Rpb25UeXBlSWQsXG4gICAgICAgIGtleSxcbiAgICAgICAgZnJvbUFjdGlvbkl0ZW0uY29uZmlnXG4gICAgICApO1xuICAgICAgY29uc3QgdG9WYWwgPSBnZXRJdGVtQ29uZmlnQnlLZXkoYWN0aW9uVHlwZUlkLCBrZXksIHRvQWN0aW9uSXRlbS5jb25maWcpO1xuICAgICAgY29uc3QgZGlmZiA9IHRvVmFsIC0gZnJvbVZhbDtcbiAgICAgIGNvbnN0IHZhbHVlID0gZGlmZiAqIGVhc2VkICsgZnJvbVZhbDtcbiAgICAgIGN1cnJlbnRba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXJnZShzdGF0ZSwge1xuICAgIHBvc2l0aW9uLFxuICAgIGN1cnJlbnQsXG4gIH0pO1xufTtcblxuY29uc3QgdGltZWRJbnN0YW5jZSA9IChzdGF0ZTogYW55LCBhY3Rpb246IGFueSkgPT4ge1xuICBjb25zdCB7XG4gICAgYWN0aXZlLFxuICAgIG9yaWdpbixcbiAgICBzdGFydCxcbiAgICBpbW1lZGlhdGUsXG4gICAgcmVuZGVyVHlwZSxcbiAgICB2ZXJib3NlLFxuICAgIGFjdGlvbkl0ZW0sXG4gICAgZGVzdGluYXRpb24sXG4gICAgZGVzdGluYXRpb25LZXlzLFxuICAgIHBsdWdpbkR1cmF0aW9uLFxuICAgIGluc3RhbmNlRGVsYXksXG4gICAgY3VzdG9tRWFzaW5nRm4sXG4gICAgc2tpcE1vdGlvbixcbiAgfSA9IHN0YXRlO1xuXG4gIGNvbnN0IGVhc2luZyA9IGFjdGlvbkl0ZW0uY29uZmlnLmVhc2luZztcbiAgbGV0IHtkdXJhdGlvbiwgZGVsYXl9ID0gYWN0aW9uSXRlbS5jb25maWc7XG5cbiAgaWYgKHBsdWdpbkR1cmF0aW9uICE9IG51bGwpIHtcbiAgICBkdXJhdGlvbiA9IHBsdWdpbkR1cmF0aW9uO1xuICB9XG5cbiAgZGVsYXkgPSBpbnN0YW5jZURlbGF5ICE9IG51bGwgPyBpbnN0YW5jZURlbGF5IDogZGVsYXk7XG5cbiAgaWYgKHJlbmRlclR5cGUgPT09IFJFTkRFUl9HRU5FUkFMKSB7XG4gICAgZHVyYXRpb24gPSAwO1xuICB9IGVsc2UgaWYgKGltbWVkaWF0ZSB8fCBza2lwTW90aW9uKSB7XG4gICAgZHVyYXRpb24gPSBkZWxheSA9IDA7XG4gIH1cbiAgY29uc3Qge25vd30gPSBhY3Rpb24ucGF5bG9hZDtcblxuICBpZiAoYWN0aXZlICYmIG9yaWdpbikge1xuICAgIGNvbnN0IGRlbHRhID0gbm93IC0gKHN0YXJ0ICsgZGVsYXkpO1xuXG4gICAgaWYgKHZlcmJvc2UpIHtcbiAgICAgIGNvbnN0IHZlcmJvc2VEZWx0YSA9IG5vdyAtIHN0YXJ0O1xuICAgICAgY29uc3QgdmVyYm9zZUR1cmF0aW9uID0gZHVyYXRpb24gKyBkZWxheTtcbiAgICAgIGNvbnN0IHZlcmJvc2VQb3NpdGlvbiA9IG9wdGltaXplRmxvYXQoXG4gICAgICAgIE1hdGgubWluKE1hdGgubWF4KDAsIHZlcmJvc2VEZWx0YSAvIHZlcmJvc2VEdXJhdGlvbiksIDEpXG4gICAgICApO1xuICAgICAgc3RhdGUgPSBzZXQoXG4gICAgICAgIHN0YXRlLFxuICAgICAgICAndmVyYm9zZVRpbWVFbGFwc2VkJyxcbiAgICAgICAgdmVyYm9zZUR1cmF0aW9uICogdmVyYm9zZVBvc2l0aW9uXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChkZWx0YSA8IDApIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IG9wdGltaXplRmxvYXQoTWF0aC5taW4oTWF0aC5tYXgoMCwgZGVsdGEgLyBkdXJhdGlvbiksIDEpKTtcbiAgICBjb25zdCBlYXNlZCA9IGFwcGx5RWFzaW5nKGVhc2luZywgcG9zaXRpb24sIGN1c3RvbUVhc2luZ0ZuKTtcblxuICAgIGNvbnN0IG5ld1Byb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG5cbiAgICBsZXQgY3VycmVudCA9IG51bGw7XG5cbiAgICBpZiAoZGVzdGluYXRpb25LZXlzLmxlbmd0aCkge1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjM0NyAtIFVudHlwZWQgZnVuY3Rpb24gY2FsbHMgbWF5IG5vdCBhY2NlcHQgdHlwZSBhcmd1bWVudHMuIHwgVFM3MDA2IC0gUGFyYW1ldGVyICdyZXN1bHQnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDA2IC0gUGFyYW1ldGVyICdrZXknIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gICAgICBjdXJyZW50ID0gZGVzdGluYXRpb25LZXlzLnJlZHVjZTxSZWNvcmQ8c3RyaW5nLCBhbnk+PigocmVzdWx0LCBrZXkpID0+IHtcbiAgICAgICAgY29uc3QgZGVzdFZhbHVlID0gZGVzdGluYXRpb25ba2V5XTtcbiAgICAgICAgY29uc3Qgb3JpZ2luVmFsID0gcGFyc2VGbG9hdChvcmlnaW5ba2V5XSkgfHwgMDtcbiAgICAgICAgY29uc3QgZGlmZiA9IHBhcnNlRmxvYXQoZGVzdFZhbHVlKSAtIG9yaWdpblZhbDtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBkaWZmICogZWFzZWQgKyBvcmlnaW5WYWw7XG4gICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgbmV3UHJvcHMuY3VycmVudCA9IGN1cnJlbnQ7XG4gICAgbmV3UHJvcHMucG9zaXRpb24gPSBwb3NpdGlvbjtcblxuICAgIGlmIChwb3NpdGlvbiA9PT0gMSkge1xuICAgICAgbmV3UHJvcHMuYWN0aXZlID0gZmFsc2U7XG4gICAgICBuZXdQcm9wcy5jb21wbGV0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlKHN0YXRlLCBuZXdQcm9wcyk7XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxudHlwZSBpeEluc3RhbmNlc1JlZHVjZXJTdGF0ZSA9IFJlY29yZDxcbiAgc3RyaW5nLFxuICAvLyBUT0RPOiBtYW55IG9mIHRoZSB2YWxpZCBmaWVsZHMgYXJlIHN0aWxsIG1pc3NpbmcgaW4gdGhpcyBzaGFwZSAtIGFkZCB0aGVtLCBwbGVhc2VcbiAge2NvbnRpbnVvdXM6IGJvb2xlYW47IGFjdGlvbkxpc3RJZDogc3RyaW5nOyB2ZXJib3NlOiBib29sZWFufVxuPjtcblxuZXhwb3J0IGNvbnN0IGl4SW5zdGFuY2VzID0gKFxuICBzdGF0ZTogaXhJbnN0YW5jZXNSZWR1Y2VyU3RhdGUgPSBPYmplY3QuZnJlZXplKHt9KSxcbiAgYWN0aW9uOiBhbnlcbik6IGl4SW5zdGFuY2VzUmVkdWNlclN0YXRlID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgSVgyX1JBV19EQVRBX0lNUE9SVEVEOiB7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQuaXhJbnN0YW5jZXMgfHwgT2JqZWN0LmZyZWV6ZSh7fSk7XG4gICAgfVxuICAgIGNhc2UgSVgyX1NFU1NJT05fU1RPUFBFRDoge1xuICAgICAgcmV0dXJuIE9iamVjdC5mcmVlemUoe30pO1xuICAgIH1cbiAgICBjYXNlIElYMl9JTlNUQU5DRV9BRERFRDoge1xuICAgICAgY29uc3Qge1xuICAgICAgICBpbnN0YW5jZUlkLFxuICAgICAgICBlbGVtZW50SWQsXG4gICAgICAgIGFjdGlvbkl0ZW0sXG4gICAgICAgIGV2ZW50SWQsXG4gICAgICAgIGV2ZW50VGFyZ2V0LFxuICAgICAgICBldmVudFN0YXRlS2V5LFxuICAgICAgICBhY3Rpb25MaXN0SWQsXG4gICAgICAgIGdyb3VwSW5kZXgsXG4gICAgICAgIGlzQ2FycmllcixcbiAgICAgICAgb3JpZ2luLFxuICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgaW1tZWRpYXRlLFxuICAgICAgICB2ZXJib3NlLFxuICAgICAgICBjb250aW51b3VzLFxuICAgICAgICBwYXJhbWV0ZXJJZCxcbiAgICAgICAgYWN0aW9uR3JvdXBzLFxuICAgICAgICBzbW9vdGhpbmcsXG4gICAgICAgIHJlc3RpbmdWYWx1ZSxcbiAgICAgICAgcGx1Z2luSW5zdGFuY2UsXG4gICAgICAgIHBsdWdpbkR1cmF0aW9uLFxuICAgICAgICBpbnN0YW5jZURlbGF5LFxuICAgICAgICBza2lwTW90aW9uLFxuICAgICAgICBza2lwVG9WYWx1ZSxcbiAgICAgIH0gPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgY29uc3Qge2FjdGlvblR5cGVJZH0gPSBhY3Rpb25JdGVtO1xuICAgICAgY29uc3QgcmVuZGVyVHlwZSA9IGdldFJlbmRlclR5cGUoYWN0aW9uVHlwZUlkKTtcbiAgICAgIGNvbnN0IHN0eWxlUHJvcCA9IGdldFN0eWxlUHJvcChyZW5kZXJUeXBlLCBhY3Rpb25UeXBlSWQpO1xuICAgICAgY29uc3QgZGVzdGluYXRpb25LZXlzID0gT2JqZWN0LmtleXMoZGVzdGluYXRpb24pLmZpbHRlcihcbiAgICAgICAgKGtleSkgPT5cbiAgICAgICAgICAvLyBTa2lwIG51bGwgZGVzdGluYXRpb24gdmFsdWVzXG4gICAgICAgICAgZGVzdGluYXRpb25ba2V5XSAhPSBudWxsICYmXG4gICAgICAgICAgLy8gU2tpcCBzdHJpbmcgZGVzdGluYXRpb24gdmFsdWVzXG4gICAgICAgICAgdHlwZW9mIGRlc3RpbmF0aW9uW2tleV0gIT09ICdzdHJpbmcnXG4gICAgICApO1xuXG4gICAgICBjb25zdCB7ZWFzaW5nfSA9IGFjdGlvbkl0ZW0uY29uZmlnO1xuXG4gICAgICByZXR1cm4gc2V0KHN0YXRlLCBpbnN0YW5jZUlkLCB7XG4gICAgICAgIGlkOiBpbnN0YW5jZUlkLFxuICAgICAgICBlbGVtZW50SWQsXG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIHBvc2l0aW9uOiAwLFxuICAgICAgICBzdGFydDogMCxcbiAgICAgICAgb3JpZ2luLFxuICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgZGVzdGluYXRpb25LZXlzLFxuICAgICAgICBpbW1lZGlhdGUsXG4gICAgICAgIHZlcmJvc2UsXG4gICAgICAgIGN1cnJlbnQ6IG51bGwsXG4gICAgICAgIGFjdGlvbkl0ZW0sXG4gICAgICAgIGFjdGlvblR5cGVJZCxcbiAgICAgICAgZXZlbnRJZCxcbiAgICAgICAgZXZlbnRUYXJnZXQsXG4gICAgICAgIGV2ZW50U3RhdGVLZXksXG4gICAgICAgIGFjdGlvbkxpc3RJZCxcbiAgICAgICAgZ3JvdXBJbmRleCxcbiAgICAgICAgcmVuZGVyVHlwZSxcbiAgICAgICAgaXNDYXJyaWVyLFxuICAgICAgICBzdHlsZVByb3AsXG4gICAgICAgIGNvbnRpbnVvdXMsXG4gICAgICAgIHBhcmFtZXRlcklkLFxuICAgICAgICBhY3Rpb25Hcm91cHMsXG4gICAgICAgIHNtb290aGluZyxcbiAgICAgICAgcmVzdGluZ1ZhbHVlLFxuICAgICAgICBwbHVnaW5JbnN0YW5jZSxcbiAgICAgICAgcGx1Z2luRHVyYXRpb24sXG4gICAgICAgIGluc3RhbmNlRGVsYXksXG4gICAgICAgIHNraXBNb3Rpb24sXG4gICAgICAgIHNraXBUb1ZhbHVlLFxuICAgICAgICBjdXN0b21FYXNpbmdGbjpcbiAgICAgICAgICBBcnJheS5pc0FycmF5KGVhc2luZykgJiYgZWFzaW5nLmxlbmd0aCA9PT0gNFxuICAgICAgICAgICAgPyAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzQ1IC0gQXJndW1lbnQgb2YgdHlwZSAnYW55W10nIGlzIG5vdCBhc3NpZ25hYmxlIHRvIHBhcmFtZXRlciBvZiB0eXBlICdJWDJFYXNpbmdDdXN0b21UeXBlJy5cbiAgICAgICAgICAgICAgY3JlYXRlQmV6aWVyRWFzaW5nKGVhc2luZylcbiAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGNhc2UgSVgyX0lOU1RBTkNFX1NUQVJURUQ6IHtcbiAgICAgIGNvbnN0IHtpbnN0YW5jZUlkLCB0aW1lfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgcmV0dXJuIG1lcmdlSW4oc3RhdGUsIFtpbnN0YW5jZUlkXSwge1xuICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgc3RhcnQ6IHRpbWUsXG4gICAgICB9KTtcbiAgICB9XG4gICAgY2FzZSBJWDJfSU5TVEFOQ0VfUkVNT1ZFRDoge1xuICAgICAgY29uc3Qge2luc3RhbmNlSWR9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBpZiAoIXN0YXRlW2luc3RhbmNlSWRdKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5ld1N0YXRlOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoc3RhdGUpO1xuICAgICAgY29uc3Qge2xlbmd0aH0gPSBrZXlzO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBpZiAoa2V5ICE9PSBpbnN0YW5jZUlkKSB7XG4gICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjUzOCAtIFR5cGUgJ3VuZGVmaW5lZCcgY2Fubm90IGJlIHVzZWQgYXMgYW4gaW5kZXggdHlwZS4gfCBUUzI1MzggLSBUeXBlICd1bmRlZmluZWQnIGNhbm5vdCBiZSB1c2VkIGFzIGFuIGluZGV4IHR5cGUuXG4gICAgICAgICAgbmV3U3RhdGVba2V5XSA9IHN0YXRlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9XG4gICAgY2FzZSBJWDJfQU5JTUFUSU9OX0ZSQU1FX0NIQU5HRUQ6IHtcbiAgICAgIGxldCBuZXdTdGF0ZSA9IHN0YXRlO1xuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHN0YXRlKTtcbiAgICAgIGNvbnN0IHtsZW5ndGh9ID0ga2V5cztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjUzOCAtIFR5cGUgJ3VuZGVmaW5lZCcgY2Fubm90IGJlIHVzZWQgYXMgYW4gaW5kZXggdHlwZS5cbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBzdGF0ZVtrZXldO1xuICAgICAgICBjb25zdCByZWR1Y2VyID0gaW5zdGFuY2UuY29udGludW91c1xuICAgICAgICAgID8gY29udGludW91c0luc3RhbmNlXG4gICAgICAgICAgOiB0aW1lZEluc3RhbmNlO1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzQ1IC0gQXJndW1lbnQgb2YgdHlwZSAnc3RyaW5nIHwgdW5kZWZpbmVkJyBpcyBub3QgYXNzaWduYWJsZSB0byBwYXJhbWV0ZXIgb2YgdHlwZSAnS2V5Jy5cbiAgICAgICAgbmV3U3RhdGUgPSBzZXQobmV3U3RhdGUsIGtleSwgcmVkdWNlcihpbnN0YW5jZSwgYWN0aW9uKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiaXhJbnN0YW5jZXMiLCJJWDJfUkFXX0RBVEFfSU1QT1JURUQiLCJJWDJfU0VTU0lPTl9TVE9QUEVEIiwiSVgyX0lOU1RBTkNFX0FEREVEIiwiSVgyX0lOU1RBTkNFX1NUQVJURUQiLCJJWDJfSU5TVEFOQ0VfUkVNT1ZFRCIsIklYMl9BTklNQVRJT05fRlJBTUVfQ0hBTkdFRCIsIklYMkVuZ2luZUFjdGlvblR5cGVzIiwib3B0aW1pemVGbG9hdCIsImFwcGx5RWFzaW5nIiwiY3JlYXRlQmV6aWVyRWFzaW5nIiwiSVgyRWFzaW5nVXRpbHMiLCJSRU5ERVJfR0VORVJBTCIsIklYMkVuZ2luZUNvbnN0YW50cyIsImdldEl0ZW1Db25maWdCeUtleSIsImdldFJlbmRlclR5cGUiLCJnZXRTdHlsZVByb3AiLCJJWDJWYW5pbGxhVXRpbHMiLCJjb250aW51b3VzSW5zdGFuY2UiLCJzdGF0ZSIsImFjdGlvbiIsInBvc2l0aW9uIiwibGFzdFBvc2l0aW9uIiwicGFyYW1ldGVySWQiLCJhY3Rpb25Hcm91cHMiLCJkZXN0aW5hdGlvbktleXMiLCJzbW9vdGhpbmciLCJyZXN0aW5nVmFsdWUiLCJhY3Rpb25UeXBlSWQiLCJjdXN0b21FYXNpbmdGbiIsInNraXBNb3Rpb24iLCJza2lwVG9WYWx1ZSIsInBhcmFtZXRlcnMiLCJwYXlsb2FkIiwidmVsb2NpdHkiLCJNYXRoIiwibWF4IiwicGFyYW1WYWx1ZSIsIm5leHRQb3NpdGlvbiIsInBvc2l0aW9uRGlmZiIsImtleWZyYW1lUG9zaXRpb24iLCJjdXJyZW50IiwiZnJvbUFjdGlvbkl0ZW0iLCJ0b0FjdGlvbkl0ZW0iLCJwb3NpdGlvbk9mZnNldCIsInBvc2l0aW9uUmFuZ2UiLCJpIiwibGVuZ3RoIiwia2V5ZnJhbWUiLCJhY3Rpb25JdGVtcyIsIm5leHRHcm91cCIsImhhc05leHRJdGVtIiwia2V5IiwiY29uZmlnIiwidW5kZWZpbmVkIiwibG9jYWxQb3NpdGlvbiIsImVhc2luZyIsImVhc2VkIiwiZnJvbVZhbCIsInRvVmFsIiwiZGlmZiIsInZhbHVlIiwibWVyZ2UiLCJ0aW1lZEluc3RhbmNlIiwiYWN0aXZlIiwib3JpZ2luIiwic3RhcnQiLCJpbW1lZGlhdGUiLCJyZW5kZXJUeXBlIiwidmVyYm9zZSIsImFjdGlvbkl0ZW0iLCJkZXN0aW5hdGlvbiIsInBsdWdpbkR1cmF0aW9uIiwiaW5zdGFuY2VEZWxheSIsImR1cmF0aW9uIiwiZGVsYXkiLCJub3ciLCJkZWx0YSIsInZlcmJvc2VEZWx0YSIsInZlcmJvc2VEdXJhdGlvbiIsInZlcmJvc2VQb3NpdGlvbiIsIm1pbiIsInNldCIsIm5ld1Byb3BzIiwicmVkdWNlIiwicmVzdWx0IiwiZGVzdFZhbHVlIiwib3JpZ2luVmFsIiwicGFyc2VGbG9hdCIsImNvbXBsZXRlIiwiT2JqZWN0IiwiZnJlZXplIiwidHlwZSIsImluc3RhbmNlSWQiLCJlbGVtZW50SWQiLCJldmVudElkIiwiZXZlbnRUYXJnZXQiLCJldmVudFN0YXRlS2V5IiwiYWN0aW9uTGlzdElkIiwiZ3JvdXBJbmRleCIsImlzQ2FycmllciIsImNvbnRpbnVvdXMiLCJwbHVnaW5JbnN0YW5jZSIsInN0eWxlUHJvcCIsImtleXMiLCJmaWx0ZXIiLCJpZCIsIkFycmF5IiwiaXNBcnJheSIsInRpbWUiLCJtZXJnZUluIiwibmV3U3RhdGUiLCJpbnN0YW5jZSIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFzQjs7OzsrQkFxTlRBOzs7ZUFBQUE7OztpQ0FoTk47d0JBRXVDO3NCQWNaO0FBWmxDLE1BQU0sRUFDSkMscUJBQXFCLEVBQ3JCQyxtQkFBbUIsRUFDbkJDLGtCQUFrQixFQUNsQkMsb0JBQW9CLEVBQ3BCQyxvQkFBb0IsRUFDcEJDLDJCQUEyQixFQUM1QixHQUFHQyxxQ0FBb0I7QUFDeEIsTUFBTSxFQUFDQyxhQUFhLEVBQUVDLFdBQVcsRUFBRUMsa0JBQWtCLEVBQUMsR0FBR0Msc0JBQWM7QUFDdkUsTUFBTSxFQUFDQyxjQUFjLEVBQUMsR0FBR0MsbUNBQWtCO0FBQzNDLE1BQU0sRUFBQ0Msa0JBQWtC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

}),
1540: (function (__unused_webpack_module, exports, __webpack_require__) {
"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ixParameters", ({
    enumerable: true,
    get: function() {
        return ixParameters;
    }
}));
const _sharedconstants = __webpack_require__(7087);
const { IX2_RAW_DATA_IMPORTED, IX2_SESSION_STOPPED, IX2_PARAMETER_CHANGED } = _sharedconstants.IX2EngineActionTypes;
const ixParameters = (state = {}, action)=>{
    switch(action.type){
        case IX2_RAW_DATA_IMPORTED:
            {
                return(// @ts-expect-error - Further investigation is needed as looks like IX2_RAW_DATA_IMPORTED is never triggered with ixParameters
                action.payload.ixParameters || {});
            }
        case IX2_SESSION_STOPPED:
            {
                return {};
            }
        case IX2_PARAMETER_CHANGED:
            {
                const { key, value } = action.payload;
                state[key] = value;
                return state;
            }
        default:
            {
                return state;
            }
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL2VuZ2luZS9yZWR1Y2Vycy9JWDJQYXJhbWV0ZXJzUmVkdWNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lYMkVuZ2luZUFjdGlvblR5cGVzfSBmcm9tICdAcGFja2FnZXMvc3lzdGVtcy9peDIvc2hhcmVkLWNvbnN0YW50cyc7XG5pbXBvcnQge3Jhd0RhdGFJbXBvcnRlZFBheWxvYWR9IGZyb20gJy4uL2FjdGlvbnMvSVgyRW5naW5lQWN0aW9ucyc7XG5jb25zdCB7SVgyX1JBV19EQVRBX0lNUE9SVEVELCBJWDJfU0VTU0lPTl9TVE9QUEVELCBJWDJfUEFSQU1FVEVSX0NIQU5HRUR9ID1cbiAgSVgyRW5naW5lQWN0aW9uVHlwZXM7XG5cbnR5cGUgaXhQYXJhbWV0ZXJzQWN0aW9uID1cbiAgfCB7XG4gICAgICB0eXBlOiB0eXBlb2YgSVgyX1JBV19EQVRBX0lNUE9SVEVEO1xuICAgICAgcGF5bG9hZDogcmF3RGF0YUltcG9ydGVkUGF5bG9hZDtcbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogdHlwZW9mIElYMl9TRVNTSU9OX1NUT1BQRUQ7XG4gICAgfVxuICB8IHtcbiAgICAgIHR5cGU6IHR5cGVvZiBJWDJfUEFSQU1FVEVSX0NIQU5HRUQ7XG4gICAgICBwYXlsb2FkOiB7a2V5OiBzdHJpbmc7IHZhbHVlOiBudW1iZXJ9O1xuICAgIH07XG5cbnR5cGUgaXhQYXJhbWV0ZXJzUmVkdWNlclN0YXRlID0gUmVjb3JkPHN0cmluZywgbnVtYmVyPjtcblxuLy8gcHJldHRpZXItaWdub3JlXG5leHBvcnQgY29uc3QgaXhQYXJhbWV0ZXJzID0gKFxuICBzdGF0ZTogaXhQYXJhbWV0ZXJzUmVkdWNlclN0YXRlID0gey8qbXV0YWJsZSBmbGF0IHN0YXRlKi99LFxuICBhY3Rpb246IGl4UGFyYW1ldGVyc0FjdGlvblxuKTogaXhQYXJhbWV0ZXJzUmVkdWNlclN0YXRlID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgSVgyX1JBV19EQVRBX0lNUE9SVEVEOiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRnVydGhlciBpbnZlc3RpZ2F0aW9uIGlzIG5lZWRlZCBhcyBsb29rcyBsaWtlIElYMl9SQVdfREFUQV9JTVBPUlRFRCBpcyBuZXZlciB0cmlnZ2VyZWQgd2l0aCBpeFBhcmFtZXRlcnNcbiAgICAgICAgYWN0aW9uLnBheWxvYWQuaXhQYXJhbWV0ZXJzIHx8IHsvKm11dGFibGUgZmxhdCBzdGF0ZSovfVxuICAgICAgKTtcbiAgICB9XG4gICAgY2FzZSBJWDJfU0VTU0lPTl9TVE9QUEVEOiB7XG4gICAgICByZXR1cm4gey8qbXV0YWJsZSBmbGF0IHN0YXRlKi99O1xuICAgIH1cbiAgICBjYXNlIElYMl9QQVJBTUVURVJfQ0hBTkdFRDoge1xuICAgICAgY29uc3Qge2tleSwgdmFsdWV9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBzdGF0ZVtrZXldID0gdmFsdWU7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiaXhQYXJhbWV0ZXJzIiwiSVgyX1JBV19EQVRBX0lNUE9SVEVEIiwiSVgyX1NFU1NJT05fU1RPUFBFRCIsIklYMl9QQVJBTUVURVJfQ0hBTkdFRCIsIklYMkVuZ2luZUFjdGlvblR5cGVzIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImtleSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7OytCQXFCYUE7OztlQUFBQTs7O2lDQXJCc0I7QUFFbkMsTUFBTSxFQUFDQyxxQkFBcUIsRUFBRUMsbUJBQW1CLEVBQUVDLHFCQUFxQixFQUFDLEdBQ3ZFQyxxQ0FBb0I7QUFrQmYsTUFBTUosZUFBZSxDQUMxQkssUUFBa0MsQ0FBdUIsQ0FBQyxFQUMxREM7SUFFQSxPQUFRQSxPQUFPQyxJQUFJO1FBQ2pCLEtBQUtOO1lBQXVCO2dCQUMxQixPQUNFLDhIQUE4SDtnQkFDOUhLLE9BQU9FLE9BQU8sQ0FBQ1IsWUFBWSxJQUFJLENBQXVCO1lBRTFEO1FBQ0EsS0FBS0U7WUFBcUI7Z0JBQ3hCLE9BQU8sQ0FBdUI7WUFDaEM7UUFDQSxLQUFLQztZQUF1QjtnQkFDMUIsTUFBTSxFQUFDTSxHQUFHLEVBQUVDLEtBQUssRUFBQyxHQUFHSixPQUFPRSxPQUFPO2dCQUNuQ0gsS0FBSyxDQUFDSSxJQUFJLEdBQUdDO2dCQUNiLE9BQU9MO1lBQ1Q7UUFDQTtZQUFTO2dCQUNQLE9BQU9BO1lBQ1Q7SUFDRjtBQUNGIn0=

}),
7243: (function (__unused_webpack_module, exports, __webpack_require__) {
"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _redux = __webpack_require__(9516);
const _IX2DataReducer = __webpack_require__(4609);
const _IX2RequestReducer = __webpack_require__(628);
const _IX2SessionReducer = __webpack_require__(5862);
const _shared = __webpack_require__(9468);
const _IX2InstancesReducer = __webpack_require__(7718);
const _IX2ParametersReducer = __webpack_require__(1540);
const { ixElements } = _shared.IX2ElementsReducer;
const _default = (0, _redux.combineReducers)({
    ixData: _IX2DataReducer.ixData,
    ixRequest: _IX2RequestReducer.ixRequest,
    ixSession: _IX2SessionReducer.ixSession,
    ixElements,
    ixInstances: _IX2InstancesReducer.ixInstances,
    ixParameters: _IX2ParametersReducer.ixParameters
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL2VuZ2luZS9yZWR1Y2Vycy9JWDJSZWR1Y2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3RvcmUsIGNvbWJpbmVSZWR1Y2VycywgdHlwZSBSZWR1Y2VyfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCB7aXhEYXRhLCB0eXBlIGl4RGF0YVJlZHVjZXJTdGF0ZX0gZnJvbSAnLi9JWDJEYXRhUmVkdWNlcic7XG5pbXBvcnQge2l4UmVxdWVzdH0gZnJvbSAnLi9JWDJSZXF1ZXN0UmVkdWNlcic7XG5pbXBvcnQge2l4U2Vzc2lvbn0gZnJvbSAnLi9JWDJTZXNzaW9uUmVkdWNlcic7XG5pbXBvcnQge0lYMkVsZW1lbnRzUmVkdWNlcn0gZnJvbSAnQHBhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZCc7XG5jb25zdCB7aXhFbGVtZW50c30gPSBJWDJFbGVtZW50c1JlZHVjZXI7XG5pbXBvcnQge2l4SW5zdGFuY2VzfSBmcm9tICcuL0lYMkluc3RhbmNlc1JlZHVjZXInO1xuaW1wb3J0IHtpeFBhcmFtZXRlcnN9IGZyb20gJy4vSVgyUGFyYW1ldGVyc1JlZHVjZXInO1xuXG50eXBlIElYMkJyb3dzZXJSZWYgPSBIVE1MRWxlbWVudCB8IERvY3VtZW50IHwgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG5cbmV4cG9ydCB0eXBlIElYMkVuZ2luZVJlZHVjZXJTdGF0ZVNoYXBlID0ge1xuICBpeERhdGE6IFJldHVyblR5cGU8dHlwZW9mIGl4RGF0YT47XG4gIGl4UGFyYW1ldGVyczogUmV0dXJuVHlwZTx0eXBlb2YgaXhQYXJhbWV0ZXJzPjtcbiAgaXhTZXNzaW9uOiBSZXR1cm5UeXBlPHR5cGVvZiBpeFNlc3Npb24+O1xuICBpeEVsZW1lbnRzOiBJWDJFbGVtZW50c1JlZHVjZXIuRWxlbWVudHNTdGF0ZTxJWDJCcm93c2VyUmVmPjtcbiAgaXhJbnN0YW5jZXM6IFJldHVyblR5cGU8dHlwZW9mIGl4SW5zdGFuY2VzPjtcbiAgaXhSZXF1ZXN0OiBSZXR1cm5UeXBlPHR5cGVvZiBpeFJlcXVlc3Q+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzPElYMkVuZ2luZVJlZHVjZXJTdGF0ZVNoYXBlPih7XG4gIGl4RGF0YTogaXhEYXRhIGFzIFJlZHVjZXI8aXhEYXRhUmVkdWNlclN0YXRlPixcbiAgaXhSZXF1ZXN0LFxuICBpeFNlc3Npb24sXG4gIGl4RWxlbWVudHMsXG4gIGl4SW5zdGFuY2VzLFxuICBpeFBhcmFtZXRlcnMsXG59KTtcblxuZXhwb3J0IHR5cGUgSVgyRW5naW5lUmVkdWNlclN0b3JlID0gU3RvcmU8SVgyRW5naW5lUmVkdWNlclN0YXRlU2hhcGU+O1xuIl0sIm5hbWVzIjpbIml4RWxlbWVudHMiLCJJWDJFbGVtZW50c1JlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpeERhdGEiLCJpeFJlcXVlc3QiLCJpeFNlc3Npb24iLCJpeEluc3RhbmNlcyIsIml4UGFyYW1ldGVycyJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFxQkE7OztlQUFBOzs7dUJBckJtRDtnQ0FFTDttQ0FDdEI7bUNBQ0E7d0JBQ1M7cUNBRVA7c0NBQ0M7QUFGM0IsTUFBTSxFQUFDQSxVQUFVLEVBQUMsR0FBR0MsMEJBQWtCO01BZXZDLFdBQWVDLElBQUFBLHNCQUFlLEVBQTZCO0lBQ3pEQyxRQUFRQSxzQkFBTTtJQUNkQyxXQUFBQSw0QkFBUztJQUNUQyxXQUFBQSw0QkFBUztJQUNUTDtJQUNBTSxhQUFBQSxnQ0FBVztJQUNYQyxjQUFBQSxrQ0FBWTtBQUNkIn0=

}),
628: (function (__unused_webpack_module, exports, __webpack_require__) {
"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ixRequest", ({
    enumerable: true,
    get: function() {
        return ixRequest;
    }
}));
const _sharedconstants = __webpack_require__(7087);
const _timm = __webpack_require__(1185);
const { IX2_PREVIEW_REQUESTED, IX2_PLAYBACK_REQUESTED, IX2_STOP_REQUESTED, IX2_CLEAR_REQUESTED } = _sharedconstants.IX2EngineActionTypes;
const initialState = {
    preview: {},
    playback: {},
    stop: {},
    clear: {}
};
const stateKeys = Object.create(null, {
    [IX2_PREVIEW_REQUESTED]: {
        value: 'preview'
    },
    [IX2_PLAYBACK_REQUESTED]: {
        value: 'playback'
    },
    [IX2_STOP_REQUESTED]: {
        value: 'stop'
    },
    [IX2_CLEAR_REQUESTED]: {
        value: 'clear'
    }
});
const ixRequest = (state = initialState, action)=>{
    if (action.type in stateKeys) {
        const key = [
            stateKeys[action.type]
        ];
        return (0, _timm.setIn)(state, [
            key
        ], {
            ...action.payload
        });
    }
    return state;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL2VuZ2luZS9yZWR1Y2Vycy9JWDJSZXF1ZXN0UmVkdWNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lYMkVuZ2luZUFjdGlvblR5cGVzfSBmcm9tICdAcGFja2FnZXMvc3lzdGVtcy9peDIvc2hhcmVkLWNvbnN0YW50cyc7XG5jb25zdCB7XG4gIElYMl9QUkVWSUVXX1JFUVVFU1RFRCxcbiAgSVgyX1BMQVlCQUNLX1JFUVVFU1RFRCxcbiAgSVgyX1NUT1BfUkVRVUVTVEVELFxuICBJWDJfQ0xFQVJfUkVRVUVTVEVELFxufSA9IElYMkVuZ2luZUFjdGlvblR5cGVzO1xuaW1wb3J0IHtzZXRJbn0gZnJvbSAndGltbSc7XG5pbXBvcnQge1xuICBwbGF5YmFja1JlcXVlc3RlZFBheWxvYWQsXG4gIHByZXZpZXdSZXF1ZXN0ZWRQYXlsb2FkLFxuICBzdG9wUmVxdWVzdGVkUGF5bG9hZCxcbn0gZnJvbSAnLi4vYWN0aW9ucy9JWDJFbmdpbmVBY3Rpb25zJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBwcmV2aWV3OiB7fSBhcyBwcmV2aWV3UmVxdWVzdGVkUGF5bG9hZCxcbiAgcGxheWJhY2s6IHt9IGFzIHBsYXliYWNrUmVxdWVzdGVkUGF5bG9hZCxcbiAgc3RvcDoge30gYXMgc3RvcFJlcXVlc3RlZFBheWxvYWQsXG4gIGNsZWFyOiB7fSxcbn07XG5cbmNvbnN0IHN0YXRlS2V5cyA9IE9iamVjdC5jcmVhdGUobnVsbCwge1xuICBbSVgyX1BSRVZJRVdfUkVRVUVTVEVEXToge3ZhbHVlOiAncHJldmlldyd9LFxuICBbSVgyX1BMQVlCQUNLX1JFUVVFU1RFRF06IHt2YWx1ZTogJ3BsYXliYWNrJ30sXG4gIFtJWDJfU1RPUF9SRVFVRVNURURdOiB7dmFsdWU6ICdzdG9wJ30sXG4gIFtJWDJfQ0xFQVJfUkVRVUVTVEVEXToge3ZhbHVlOiAnY2xlYXInfSxcbn0pO1xuXG50eXBlIGl4UmVxdWVzdFN0YXRlID0ge1xuICBwcmV2aWV3OiBwcmV2aWV3UmVxdWVzdGVkUGF5bG9hZDtcbiAgcGxheWJhY2s6IHBsYXliYWNrUmVxdWVzdGVkUGF5bG9hZDtcbiAgc3RvcDogc3RvcFJlcXVlc3RlZFBheWxvYWQ7XG4gIGNsZWFyOiBSZWNvcmQ8bmV2ZXIsIG5ldmVyPjtcbn07XG5cbnR5cGUgaXhSZXF1ZXN0QWN0aW9uID1cbiAgfCB7XG4gICAgICB0eXBlOiB0eXBlb2YgSVgyX1BSRVZJRVdfUkVRVUVTVEVEO1xuICAgICAgcGF5bG9hZDogcHJldmlld1JlcXVlc3RlZFBheWxvYWQ7XG4gICAgfVxuICB8IHtcbiAgICAgIHR5cGU6IHR5cGVvZiBJWDJfUExBWUJBQ0tfUkVRVUVTVEVEO1xuICAgICAgcGF5bG9hZDogcGxheWJhY2tSZXF1ZXN0ZWRQYXlsb2FkO1xuICAgIH1cbiAgfCB7XG4gICAgICB0eXBlOiB0eXBlb2YgSVgyX1NUT1BfUkVRVUVTVEVEO1xuICAgICAgcGF5bG9hZDogc3RvcFJlcXVlc3RlZFBheWxvYWQ7XG4gICAgfVxuICB8IHtcbiAgICAgIHR5cGU6IHR5cGVvZiBJWDJfQ0xFQVJfUkVRVUVTVEVEO1xuICAgICAgcGF5bG9hZD86IG5ldmVyO1xuICAgIH07XG5cbmV4cG9ydCBjb25zdCBpeFJlcXVlc3QgPSAoXG4gIHN0YXRlOiBpeFJlcXVlc3RTdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBpeFJlcXVlc3RBY3Rpb25cbik6IGl4UmVxdWVzdFN0YXRlID0+IHtcbiAgaWYgKGFjdGlvbi50eXBlIGluIHN0YXRlS2V5cykge1xuICAgIGNvbnN0IGtleSA9IFtzdGF0ZUtleXNbYWN0aW9uLnR5cGVdXSBhcyBhbnk7XG4gICAgcmV0dXJuIHNldEluKHN0YXRlLCBba2V5XSwgey4uLmFjdGlvbi5wYXlsb2FkfSk7XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufTtcbiJdLCJuYW1lcyI6WyJpeFJlcXVlc3QiLCJJWDJfUFJFVklFV19SRVFVRVNURUQiLCJJWDJfUExBWUJBQ0tfUkVRVUVTVEVEIiwiSVgyX1NUT1BfUkVRVUVTVEVEIiwiSVgyX0NMRUFSX1JFUVVFU1RFRCIsIklYMkVuZ2luZUFjdGlvblR5cGVzIiwiaW5pdGlhbFN0YXRlIiwicHJldmlldyIsInBsYXliYWNrIiwic3RvcCIsImNsZWFyIiwic3RhdGVLZXlzIiwiT2JqZWN0IiwiY3JlYXRlIiwidmFsdWUiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJrZXkiLCJzZXRJbiIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBcURhQTs7O2VBQUFBOzs7aUNBckRzQjtzQkFPZjtBQU5wQixNQUFNLEVBQ0pDLHFCQUFxQixFQUNyQkMsc0JBQXNCLEVBQ3RCQyxrQkFBa0IsRUFDbEJDLG1CQUFtQixFQUNwQixHQUFHQyxxQ0FBb0I7QUFReEIsTUFBTUMsZUFBZTtJQUNuQkMsU0FBUyxDQUFDO0lBQ1ZDLFVBQVUsQ0FBQztJQUNYQyxNQUFNLENBQUM7SUFDUEMsT0FBTyxDQUFDO0FBQ1Y7QUFFQSxNQUFNQyxZQUFZQyxPQUFPQyxNQUFNLENBQUMsTUFBTTtJQUNwQyxDQUFDWixzQkFBc0IsRUFBRTtRQUFDYSxPQUFPO0lBQVM7SUFDMUMsQ0FBQ1osdUJBQXVCLEVBQUU7UUFBQ1ksT0FBTztJQUFVO0lBQzVDLENBQUNYLG1CQUFtQixFQUFFO1FBQUNXLE9BQU87SUFBTTtJQUNwQyxDQUFDVixvQkFBb0IsRUFBRTtRQUFDVSxPQUFPO0lBQU87QUFDeEM7QUEyQk8sTUFBTWQsWUFBWSxDQUN2QmUsUUFBd0JULFlBQVksRUFDcENVO0lBRUEsSUFBSUEsT0FBT0MsSUFBSSxJQUFJTixXQUFXO1FBQzVCLE1BQU1PLE1BQU07WUFBQ1AsU0FBUyxDQUFDSyxPQUFPQyxJQUFJLENBQUM7U0FBQztRQUNwQyxPQUFPRSxJQUFBQSxXQUFLLEVBQUNKLE9BQU87WUFBQ0c7U0FBSSxFQUFFO1lBQUMsR0FBR0YsT0FBT0ksT0FBTztRQUFBO0lBQy9DO0lBQ0EsT0FBT0w7QUFDVCJ9

}),
5862: (function (__unused_webpack_module, exports, __webpack_require__) {
"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ixSession", ({
    enumerable: true,
    get: function() {
        return ixSession;
    }
}));
const _sharedconstants = __webpack_require__(7087);
const _timm = __webpack_require__(1185);
const { IX2_SESSION_INITIALIZED, IX2_SESSION_STARTED, IX2_TEST_FRAME_RENDERED, IX2_SESSION_STOPPED, IX2_EVENT_LISTENER_ADDED, IX2_EVENT_STATE_CHANGED, IX2_ANIMATION_FRAME_CHANGED, IX2_ACTION_LIST_PLAYBACK_CHANGED, IX2_VIEWPORT_WIDTH_CHANGED, IX2_MEDIA_QUERIES_DEFINED } = _sharedconstants.IX2EngineActionTypes;
const initialState = {
    active: false,
    tick: 0,
    eventListeners: [],
    eventState: {},
    playbackState: {},
    viewportWidth: 0,
    mediaQueryKey: null,
    hasBoundaryNodes: false,
    hasDefinedMediaQueries: false,
    reducedMotion: false
};
const TEST_FRAME_STEPS_SIZE = 20;
const ixSession = (state = initialState, action)=>{
    switch(action.type){
        case IX2_SESSION_INITIALIZED:
            {
                const { hasBoundaryNodes, reducedMotion } = action.payload;
                return (0, _timm.merge)(state, {
                    hasBoundaryNodes,
                    reducedMotion
                });
            }
        case IX2_SESSION_STARTED:
            {
                return (0, _timm.set)(state, 'active', true);
            }
        case IX2_TEST_FRAME_RENDERED:
            {
                const { payload: { step = TEST_FRAME_STEPS_SIZE } } = action;
                return (0, _timm.set)(state, 'tick', state.tick + step);
            }
        case IX2_SESSION_STOPPED:
            {
                return initialState;
            }
        case IX2_ANIMATION_FRAME_CHANGED:
            {
                const { payload: { now } } = action;
                return (0, _timm.set)(state, 'tick', now);
            }
        case IX2_EVENT_LISTENER_ADDED:
            {
                const eventListeners = (0, _timm.addLast)(state.eventListeners, action.payload);
                return (0, _timm.set)(state, 'eventListeners', eventListeners);
            }
        case IX2_EVENT_STATE_CHANGED:
            {
                const { stateKey, newState } = action.payload;
                return (0, _timm.setIn)(state, [
                    'eventState',
                    stateKey
                ], newState);
            }
        case IX2_ACTION_LIST_PLAYBACK_CHANGED:
            {
                const { actionListId, isPlaying } = action.payload;
                return (0, _timm.setIn)(state, [
                    'playbackState',
                    actionListId
                ], isPlaying);
            }
        case IX2_VIEWPORT_WIDTH_CHANGED:
            {
                const { width, mediaQueries } = action.payload;
                const mediaQueryCount = mediaQueries.length;
                let mediaQueryKey = null;
                for(let i = 0; i < mediaQueryCount; i++){
                    const { key, min, max } = mediaQueries[i];
                    if (width >= min && width <= max) {
                        mediaQueryKey = key;
                        break;
                    }
                }
                return (0, _timm.merge)(state, {
                    viewportWidth: width,
                    mediaQueryKey
                });
            }
        case IX2_MEDIA_QUERIES_DEFINED:
            {
                return (0, _timm.set)(state, 'hasDefinedMediaQueries', true);
            }
        default:
            {
                return state;
            }
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL2VuZ2luZS9yZWR1Y2Vycy9JWDJTZXNzaW9uUmVkdWNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lYMkVuZ2luZUFjdGlvblR5cGVzfSBmcm9tICdAcGFja2FnZXMvc3lzdGVtcy9peDIvc2hhcmVkLWNvbnN0YW50cyc7XG5jb25zdCB7XG4gIElYMl9TRVNTSU9OX0lOSVRJQUxJWkVELFxuICBJWDJfU0VTU0lPTl9TVEFSVEVELFxuICBJWDJfVEVTVF9GUkFNRV9SRU5ERVJFRCxcbiAgSVgyX1NFU1NJT05fU1RPUFBFRCxcbiAgSVgyX0VWRU5UX0xJU1RFTkVSX0FEREVELFxuICBJWDJfRVZFTlRfU1RBVEVfQ0hBTkdFRCxcbiAgSVgyX0FOSU1BVElPTl9GUkFNRV9DSEFOR0VELFxuICBJWDJfQUNUSU9OX0xJU1RfUExBWUJBQ0tfQ0hBTkdFRCxcbiAgSVgyX1ZJRVdQT1JUX1dJRFRIX0NIQU5HRUQsXG4gIElYMl9NRURJQV9RVUVSSUVTX0RFRklORUQsXG59ID0gSVgyRW5naW5lQWN0aW9uVHlwZXM7XG5pbXBvcnQge3NldCwgc2V0SW4sIGFkZExhc3QsIG1lcmdlfSBmcm9tICd0aW1tJztcbmltcG9ydCB7XG4gIGFjdGlvbkxpc3RQbGF5YmFja0NoYW5nZWRQYXlsb2FkLFxuICBhbmltYXRpb25GcmFtZUNoYW5nZWRQYXlsb2FkLFxuICBldmVudExpc3RlbmVyQWRkZWRQYXlsb2FkLFxuICBldmVudFN0YXRlQ2hhbmdlZFBheWxvYWQsXG4gIHNlc3Npb25Jbml0aWFsaXplZFBheWxvYWQsXG4gIHRlc3RGcmFtZVJlbmRlcmVkUGF5bG9hZCxcbiAgdmlld3BvcnRXaWR0aENoYW5nZWRQYXlsb2FkLFxufSBmcm9tICcuLi9hY3Rpb25zL0lYMkVuZ2luZUFjdGlvbnMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHRpY2s6IDAsXG4gIGV2ZW50TGlzdGVuZXJzOiBbXSxcbiAgZXZlbnRTdGF0ZToge30sXG4gIHBsYXliYWNrU3RhdGU6IHt9LFxuICB2aWV3cG9ydFdpZHRoOiAwLFxuICBtZWRpYVF1ZXJ5S2V5OiBudWxsLFxuICBoYXNCb3VuZGFyeU5vZGVzOiBmYWxzZSxcbiAgaGFzRGVmaW5lZE1lZGlhUXVlcmllczogZmFsc2UsXG4gIHJlZHVjZWRNb3Rpb246IGZhbHNlLFxufTtcblxuY29uc3QgVEVTVF9GUkFNRV9TVEVQU19TSVpFID0gMjA7XG5cbnR5cGUgaXhTZXNzaW9uUmVkdWNlclN0YXRlID0ge1xuICBhY3RpdmU6IGJvb2xlYW47XG4gIHRpY2s6IG51bWJlcjtcbiAgZXZlbnRMaXN0ZW5lcnM6IGFueVtdO1xuICBldmVudFN0YXRlOiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICBwbGF5YmFja1N0YXRlOiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICB2aWV3cG9ydFdpZHRoOiBudW1iZXI7XG4gIG1lZGlhUXVlcnlLZXk6IG51bGw7XG4gIGhhc0JvdW5kYXJ5Tm9kZXM6IGJvb2xlYW47XG4gIGhhc0RlZmluZWRNZWRpYVF1ZXJpZXM6IGJvb2xlYW47XG4gIHJlZHVjZWRNb3Rpb246IGJvb2xlYW47XG59O1xuXG50eXBlIGl4U2Vzc2lvblJlZHVjZXJBY3Rpb24gPVxuICB8IHtcbiAgICAgIHR5cGU6IHR5cGVvZiBJWDJfU0VTU0lPTl9JTklUSUFMSVpFRDtcbiAgICAgIHBheWxvYWQ6IHNlc3Npb25Jbml0aWFsaXplZFBheWxvYWQ7XG4gICAgfVxuICB8IHtcbiAgICAgIHR5cGU6IHR5cGVvZiBJWDJfU0VTU0lPTl9TVEFSVEVEO1xuICAgIH1cbiAgfCB7XG4gICAgICB0eXBlOiB0eXBlb2YgSVgyX1RFU1RfRlJBTUVfUkVOREVSRUQ7XG4gICAgICBwYXlsb2FkOiB0ZXN0RnJhbWVSZW5kZXJlZFBheWxvYWQ7XG4gICAgfVxuICB8IHtcbiAgICAgIHR5cGU6IHR5cGVvZiBJWDJfU0VTU0lPTl9TVE9QUEVEO1xuICAgIH1cbiAgfCB7XG4gICAgICB0eXBlOiB0eXBlb2YgSVgyX0FOSU1BVElPTl9GUkFNRV9DSEFOR0VEO1xuICAgICAgcGF5bG9hZDogYW5pbWF0aW9uRnJhbWVDaGFuZ2VkUGF5bG9hZDtcbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogdHlwZW9mIElYMl9FVkVOVF9MSVNURU5FUl9BRERFRDtcbiAgICAgIHBheWxvYWQ6IGV2ZW50TGlzdGVuZXJBZGRlZFBheWxvYWQ7XG4gICAgfVxuICB8IHtcbiAgICAgIHR5cGU6IHR5cGVvZiBJWDJfRVZFTlRfU1RBVEVfQ0hBTkdFRDtcbiAgICAgIHBheWxvYWQ6IGV2ZW50U3RhdGVDaGFuZ2VkUGF5bG9hZDtcbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogdHlwZW9mIElYMl9BQ1RJT05fTElTVF9QTEFZQkFDS19DSEFOR0VEO1xuICAgICAgcGF5bG9hZDogYWN0aW9uTGlzdFBsYXliYWNrQ2hhbmdlZFBheWxvYWQ7XG4gICAgfVxuICB8IHtcbiAgICAgIHR5cGU6IHR5cGVvZiBJWDJfVklFV1BPUlRfV0lEVEhfQ0hBTkdFRDtcbiAgICAgIHBheWxvYWQ6IHZpZXdwb3J0V2lkdGhDaGFuZ2VkUGF5bG9hZDtcbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogdHlwZW9mIElYMl9NRURJQV9RVUVSSUVTX0RFRklORUQ7XG4gICAgfTtcblxuZXhwb3J0IGNvbnN0IGl4U2Vzc2lvbiA9IChcbiAgc3RhdGU6IGl4U2Vzc2lvblJlZHVjZXJTdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBpeFNlc3Npb25SZWR1Y2VyQWN0aW9uXG4pOiBpeFNlc3Npb25SZWR1Y2VyU3RhdGUgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBJWDJfU0VTU0lPTl9JTklUSUFMSVpFRDoge1xuICAgICAgY29uc3Qge2hhc0JvdW5kYXJ5Tm9kZXMsIHJlZHVjZWRNb3Rpb259ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4gbWVyZ2Uoc3RhdGUsIHtcbiAgICAgICAgaGFzQm91bmRhcnlOb2RlcyxcbiAgICAgICAgcmVkdWNlZE1vdGlvbixcbiAgICAgIH0pIGFzIGl4U2Vzc2lvblJlZHVjZXJTdGF0ZTtcbiAgICB9XG4gICAgY2FzZSBJWDJfU0VTU0lPTl9TVEFSVEVEOiB7XG4gICAgICByZXR1cm4gc2V0KHN0YXRlLCAnYWN0aXZlJywgdHJ1ZSk7XG4gICAgfVxuICAgIGNhc2UgSVgyX1RFU1RfRlJBTUVfUkVOREVSRUQ6IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcGF5bG9hZDoge3N0ZXAgPSBURVNUX0ZSQU1FX1NURVBTX1NJWkV9LFxuICAgICAgfSA9IGFjdGlvbjtcbiAgICAgIHJldHVybiBzZXQoc3RhdGUsICd0aWNrJywgc3RhdGUudGljayArIHN0ZXApO1xuICAgIH1cbiAgICBjYXNlIElYMl9TRVNTSU9OX1NUT1BQRUQ6IHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgfVxuICAgIGNhc2UgSVgyX0FOSU1BVElPTl9GUkFNRV9DSEFOR0VEOiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHBheWxvYWQ6IHtub3d9LFxuICAgICAgfSA9IGFjdGlvbjtcbiAgICAgIHJldHVybiBzZXQoc3RhdGUsICd0aWNrJywgbm93KTtcbiAgICB9XG4gICAgY2FzZSBJWDJfRVZFTlRfTElTVEVORVJfQURERUQ6IHtcbiAgICAgIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gYWRkTGFzdChzdGF0ZS5ldmVudExpc3RlbmVycywgYWN0aW9uLnBheWxvYWQpO1xuICAgICAgcmV0dXJuIHNldChzdGF0ZSwgJ2V2ZW50TGlzdGVuZXJzJywgZXZlbnRMaXN0ZW5lcnMpO1xuICAgIH1cbiAgICBjYXNlIElYMl9FVkVOVF9TVEFURV9DSEFOR0VEOiB7XG4gICAgICBjb25zdCB7c3RhdGVLZXksIG5ld1N0YXRlfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgcmV0dXJuIHNldEluKHN0YXRlLCBbJ2V2ZW50U3RhdGUnLCBzdGF0ZUtleV0sIG5ld1N0YXRlKTtcbiAgICB9XG4gICAgY2FzZSBJWDJfQUNUSU9OX0xJU1RfUExBWUJBQ0tfQ0hBTkdFRDoge1xuICAgICAgY29uc3Qge2FjdGlvbkxpc3RJZCwgaXNQbGF5aW5nfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgcmV0dXJuIHNldEluKHN0YXRlLCBbJ3BsYXliYWNrU3RhdGUnLCBhY3Rpb25MaXN0SWRdLCBpc1BsYXlpbmcpO1xuICAgIH1cbiAgICBjYXNlIElYMl9WSUVXUE9SVF9XSURUSF9DSEFOR0VEOiB7XG4gICAgICBjb25zdCB7d2lkdGgsIG1lZGlhUXVlcmllc30gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGNvbnN0IG1lZGlhUXVlcnlDb3VudCA9IG1lZGlhUXVlcmllcy5sZW5ndGg7XG4gICAgICBsZXQgbWVkaWFRdWVyeUtleSA9IG51bGw7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lZGlhUXVlcnlDb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHtrZXksIG1pbiwgbWF4fSA9IG1lZGlhUXVlcmllc1tpXTtcbiAgICAgICAgaWYgKHdpZHRoID49IG1pbiAmJiB3aWR0aCA8PSBtYXgpIHtcbiAgICAgICAgICBtZWRpYVF1ZXJ5S2V5ID0ga2V5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbWVyZ2Uoc3RhdGUsIHtcbiAgICAgICAgdmlld3BvcnRXaWR0aDogd2lkdGgsXG4gICAgICAgIG1lZGlhUXVlcnlLZXksXG4gICAgICB9KSBhcyBpeFNlc3Npb25SZWR1Y2VyU3RhdGU7XG4gICAgfVxuICAgIGNhc2UgSVgyX01FRElBX1FVRVJJRVNfREVGSU5FRDoge1xuICAgICAgcmV0dXJuIHNldChzdGF0ZSwgJ2hhc0RlZmluZWRNZWRpYVF1ZXJpZXMnLCB0cnVlKTtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJpeFNlc3Npb24iLCJJWDJfU0VTU0lPTl9JTklUSUFMSVpFRCIsIklYMl9TRVNTSU9OX1NUQVJURUQiLCJJWDJfVEVTVF9GUkFNRV9SRU5ERVJFRCIsIklYMl9TRVNTSU9OX1NUT1BQRUQiLCJJWDJfRVZFTlRfTElTVEVORVJfQURERUQiLCJJWDJfRVZFTlRfU1RBVEVfQ0hBTkdFRCIsIklYMl9BTklNQVRJT05fRlJBTUVfQ0hBTkdFRCIsIklYMl9BQ1RJT05fTElTVF9QTEFZQkFDS19DSEFOR0VEIiwiSVgyX1ZJRVdQT1JUX1dJRFRIX0NIQU5HRUQiLCJJWDJfTUVESUFfUVVFUklFU19ERUZJTkVEIiwiSVgyRW5naW5lQWN0aW9uVHlwZXMiLCJpbml0aWFsU3RhdGUiLCJhY3RpdmUiLCJ0aWNrIiwiZXZlbnRMaXN0ZW5lcnMiLCJldmVudFN0YXRlIiwicGxheWJhY2tTdGF0ZSIsInZpZXdwb3J0V2lkdGgiLCJtZWRpYVF1ZXJ5S2V5IiwiaGFzQm91bmRhcnlOb2RlcyIsImhhc0RlZmluZWRNZWRpYVF1ZXJpZXMiLCJyZWR1Y2VkTW90aW9uIiwiVEVTVF9GUkFNRV9TVEVQU19TSVpFIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsIm1lcmdlIiwic2V0Iiwic3RlcCIsIm5vdyIsImFkZExhc3QiLCJzdGF0ZUtleSIsIm5ld1N0YXRlIiwic2V0SW4iLCJhY3Rpb25MaXN0SWQiLCJpc1BsYXlpbmciLCJ3aWR0aCIsIm1lZGlhUXVlcmllcyIsIm1lZGlhUXVlcnlDb3VudCIsImxlbmd0aCIsImkiLCJrZXkiLCJtaW4iLCJtYXgiXSwibWFwcGluZ3MiOiI7Ozs7K0JBMkZhQTs7O2VBQUFBOzs7aUNBM0ZzQjtzQkFhTTtBQVp6QyxNQUFNLEVBQ0pDLHVCQUF1QixFQUN2QkMsbUJBQW1CLEVBQ25CQyx1QkFBdUIsRUFDdkJDLG1CQUFtQixFQUNuQkMsd0JBQXdCLEVBQ3hCQyx1QkFBdUIsRUFDdkJDLDJCQUEyQixFQUMzQkMsZ0NBQWdDLEVBQ2hDQywwQkFBMEIsRUFDMUJDLHlCQUF5QixFQUMxQixHQUFHQyxx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

}),
7377: (function (__unused_webpack_module, exports) {
"use strict";
/* eslint-env browser */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    clearPlugin: function() {
        return clearPlugin;
    },
    createPluginInstance: function() {
        return createPluginInstance;
    },
    getPluginConfig: function() {
        return getPluginConfig;
    },
    getPluginDestination: function() {
        return getPluginDestination;
    },
    getPluginDuration: function() {
        return getPluginDuration;
    },
    getPluginOrigin: function() {
        return getPluginOrigin;
    },
    renderPlugin: function() {
        return renderPlugin;
    }
});
const getPluginConfig = (actionItemConfig)=>{
    return actionItemConfig.value;
};
const getPluginDuration = (element, actionItem)=>{
    if (actionItem.config.duration !== 'auto') {
        return null;
    }
    const duration = parseFloat(element.getAttribute('data-duration'));
    if (duration > 0) {
        return duration * 1000;
    }
    return parseFloat(element.getAttribute('data-default-duration')) * 1000;
};
const getPluginOrigin = (refState)=>{
    return refState || {
        value: 0
    };
};
const getPluginDestination = (actionItemConfig)=>{
    return {
        value: actionItemConfig.value
    };
};
const createPluginInstance = (element)=>{
    const lottie = window.Webflow.require('lottie');
    if (!lottie) return null;
    const instance = lottie.createInstance(element);
    instance.stop();
    instance.setSubframe(true);
    return instance;
};
const renderPlugin = (pluginInstance, refState, actionItem)=>{
    if (!pluginInstance) {
        return;
    }
    const percent = refState[actionItem.actionTypeId].value / 100;
    pluginInstance.goToFrame(pluginInstance.frames * percent);
};
const clearPlugin = (element)=>{
    const lottie = window.Webflow.require('lottie');
    if (lottie) {
        lottie.createInstance(element).stop();
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3BsdWdpbnMvSVgyTG90dGllLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5leHBvcnQgY29uc3QgZ2V0UGx1Z2luQ29uZmlnID0gKGFjdGlvbkl0ZW1Db25maWcpID0+IHtcbiAgcmV0dXJuIGFjdGlvbkl0ZW1Db25maWcudmFsdWU7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UGx1Z2luRHVyYXRpb24gPSAoZWxlbWVudCwgYWN0aW9uSXRlbSkgPT4ge1xuICBpZiAoYWN0aW9uSXRlbS5jb25maWcuZHVyYXRpb24gIT09ICdhdXRvJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgZHVyYXRpb24gPSBwYXJzZUZsb2F0KGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWR1cmF0aW9uJykpO1xuXG4gIGlmIChkdXJhdGlvbiA+IDApIHtcbiAgICByZXR1cm4gZHVyYXRpb24gKiAxMDAwO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlRmxvYXQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVmYXVsdC1kdXJhdGlvbicpKSAqIDEwMDA7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UGx1Z2luT3JpZ2luID0gKHJlZlN0YXRlKSA9PiB7XG4gIHJldHVybiByZWZTdGF0ZSB8fCB7dmFsdWU6IDB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFBsdWdpbkRlc3RpbmF0aW9uID0gKGFjdGlvbkl0ZW1Db25maWcpID0+IHtcbiAgcmV0dXJuIHt2YWx1ZTogYWN0aW9uSXRlbUNvbmZpZy52YWx1ZX07XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUGx1Z2luSW5zdGFuY2UgPSAoZWxlbWVudCkgPT4ge1xuICBjb25zdCBsb3R0aWUgPSB3aW5kb3cuV2ViZmxvdy5yZXF1aXJlKCdsb3R0aWUnKTtcbiAgaWYgKCFsb3R0aWUpIHJldHVybiBudWxsO1xuICBjb25zdCBpbnN0YW5jZSA9IGxvdHRpZS5jcmVhdGVJbnN0YW5jZShlbGVtZW50KTtcbiAgaW5zdGFuY2Uuc3RvcCgpO1xuICBpbnN0YW5jZS5zZXRTdWJmcmFtZSh0cnVlKTtcbiAgcmV0dXJuIGluc3RhbmNlO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbmRlclBsdWdpbiA9IChwbHVnaW5JbnN0YW5jZSwgcmVmU3RhdGUsIGFjdGlvbkl0ZW0pID0+IHtcbiAgaWYgKCFwbHVnaW5JbnN0YW5jZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBwZXJjZW50ID0gcmVmU3RhdGVbYWN0aW9uSXRlbS5hY3Rpb25UeXBlSWRdLnZhbHVlIC8gMTAwO1xuICBwbHVnaW5JbnN0YW5jZS5nb1RvRnJhbWUocGx1Z2luSW5zdGFuY2UuZnJhbWVzICogcGVyY2VudCk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJQbHVnaW4gPSAoZWxlbWVudCkgPT4ge1xuICBjb25zdCBsb3R0aWUgPSB3aW5kb3cuV2ViZmxvdy5yZXF1aXJlKCdsb3R0aWUnKTtcbiAgaWYgKGxvdHRpZSkge1xuICAgIGxvdHRpZS5jcmVhdGVJbnN0YW5jZShlbGVtZW50KS5zdG9wKCk7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiY2xlYXJQbHVnaW4iLCJjcmVhdGVQbHVnaW5JbnN0YW5jZSIsImdldFBsdWdpbkNvbmZpZyIsImdldFBsdWdpbkRlc3RpbmF0aW9uIiwiZ2V0UGx1Z2luRHVyYXRpb24iLCJnZXRQbHVnaW5PcmlnaW4iLCJyZW5kZXJQbHVnaW4iLCJhY3Rpb25JdGVtQ29uZmlnIiwidmFsdWUiLCJlbGVtZW50IiwiYWN0aW9uSXRlbSIsImNvbmZpZyIsImR1cmF0aW9uIiwicGFyc2VGbG9hdCIsImdldEF0dHJpYnV0ZSIsInJlZlN0YXRlIiwibG90dGllIiwid2luZG93IiwiV2ViZmxvdyIsInJlcXVpcmUiLCJpbnN0YW5jZSIsImNyZWF0ZUluc3RhbmNlIiwic3RvcCIsInNldFN1YmZyYW1lIiwicGx1Z2luSW5zdGFuY2UiLCJwZXJjZW50IiwiYWN0aW9uVHlwZUlkIiwiZ29Ub0ZyYW1lIiwiZnJhbWVzIl0sIm1hcHBpbmdzIjoiQUFBQSxzQkFBc0I7Ozs7Ozs7Ozs7O0lBNkNUQSxXQUFXO2VBQVhBOztJQWpCQUMsb0JBQW9CO2VBQXBCQTs7SUExQkFDLGVBQWU7ZUFBZkE7O0lBc0JBQyxvQkFBb0I7ZUFBcEJBOztJQWxCQUMsaUJBQWlCO2VBQWpCQTs7SUFjQUMsZUFBZTtlQUFmQTs7SUFpQkFDLFlBQVk7ZUFBWkE7OztBQW5DTixNQUFNSixrQkFBa0IsQ0FBQ0s7SUFDOUIsT0FBT0EsaUJBQWlCQyxLQUFLO0FBQy9CO0FBRU8sTUFBTUosb0JBQW9CLENBQUNLLFNBQVNDO0lBQ3pDLElBQUlBLFdBQVdDLE1BQU0sQ0FBQ0MsUUFBUSxLQUFLLFFBQVE7UUFDekMsT0FBTztJQUNUO0lBRUEsTUFBTUEsV0FBV0MsV0FBV0osUUFBUUssWUFBWSxDQUFDO0lBRWpELElBQUlGLFdBQVcsR0FBRztRQUNoQixPQUFPQSxXQUFXO0lBQ3BCO0lBRUEsT0FBT0MsV0FBV0osUUFBUUssWUFBWSxDQUFDLDRCQUE0QjtBQUNyRTtBQUVPLE1BQU1ULGtCQUFrQixDQUFDVTtJQUM5QixPQUFPQSxZQUFZO1FBQUNQLE9BQU87SUFBQztBQUM5QjtBQUVPLE1BQU1MLHVCQUF1QixDQUFDSTtJQUNuQyxPQUFPO1FBQUNDLE9BQU9ELGlCQUFpQkMsS0FBSztJQUFBO0FBQ3ZDO0FBRU8sTUFBTVAsdUJBQXVCLENBQUNRO0lBQ25DLE1BQU1PLFNBQVNDLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDO0lBQ3RDLElBQUksQ0FBQ0gsUUFBUSxPQUFPO0lBQ3BCLE1BQU1JLFdBQVdKLE9BQU9LLGNBQWMsQ0FBQ1o7SUFDdkNXLFNBQVNFLElBQUk7SUFDYkYsU0FBU0csV0FBVyxDQUFDO0lBQ3JCLE9BQU9IO0FBQ1Q7QUFFTyxNQUFNZCxlQUFlLENBQUNrQixnQkFBZ0JULFVBQVVMO0lBQ3JELElBQUksQ0FBQ2MsZ0JBQWdCO1FBQ25CO0lBQ0Y7SUFDQSxNQUFNQyxVQUFVVixRQUFRLENBQUNMLFdBQVdnQixZQUFZLENBQUMsQ0FBQ2xCLEtBQUssR0FBRztJQUMxRGdCLGVBQWVHLFNBQVMsQ0FBQ0gsZUFBZUksTUFBTSxHQUFHSDtBQUNuRDtBQUVPLE1BQU16QixjQUFjLENBQUNTO0lBQzFCLE1BQU1PLFNBQVNDLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDO0lBQ3RDLElBQUlILFFBQVE7UUFDVkEsT0FBT0ssY0FBYyxDQUFDWixTQUFTYSxJQUFJO0lBQ3JDO0FBQ0YifQ==

}),
2570: (function (__unused_webpack_module, exports) {
"use strict";
/* eslint-env browser */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    clearPlugin: function() {
        return clearPlugin;
    },
    createPluginInstance: function() {
        return createPluginInstance;
    },
    getPluginConfig: function() {
        return getPluginConfig;
    },
    getPluginDestination: function() {
        return getPluginDestination;
    },
    getPluginDuration: function() {
        return getPluginDuration;
    },
    getPluginOrigin: function() {
        return getPluginOrigin;
    },
    renderPlugin: function() {
        return renderPlugin;
    }
});
const FIT_KEY = '--wf-rive-fit';
const ALIGNMENT_KEY = '--wf-rive-alignment';
const queryContainerElement = (elementId)=>document.querySelector(`[data-w-id="${elementId}"]`);
const getFrontendModule = ()=>window.Webflow.require('rive');
const getPluginConfig = (actionItemConfig, key)=>actionItemConfig.value.inputs[key];
const getPluginDuration = ()=>null; // Not used by this plugin
const getPluginOrigin = (refState, actionItem)=>{
    if (refState) return refState;
    const result = {};
    const { inputs = {} } = actionItem.config.value;
    for(const input in inputs)if (inputs[input] == null) result[input] = 0;
    return result;
};
const getPluginDestination = (actionItemConfig)=>actionItemConfig.value.inputs ?? {};
const createPluginInstance = (element, actionItem)=>{
    const selectorGuids = actionItem.config?.target?.selectorGuids || [];
    if (selectorGuids.length > 0) return element;
    // In this case, we define pluginInstance as a reference to the container element
    const pluginElementId = actionItem?.config?.target?.pluginElement;
    return pluginElementId ? queryContainerElement(pluginElementId) : null;
};
const renderPlugin = (containerElement, { PLUGIN_RIVE: props }, actionItem)=>{
    const frontendModule = getFrontendModule();
    if (!frontendModule) return;
    const instance = frontendModule.getInstance(containerElement);
    const StateMachineInputType = frontendModule.rive.StateMachineInputType;
    const { name, inputs = {} } = actionItem.config.value || {};
    function renderRive(riveInstance) {
        if (riveInstance.loaded) {
            render();
        } else {
            // Render instance immediately on load and then clean up handler
            const onLoad = ()=>{
                render();
                riveInstance?.off('load', onLoad);
            };
            riveInstance?.on('load', onLoad);
        }
        function render() {
            const stateMachineInputs = riveInstance.stateMachineInputs(name);
            if (stateMachineInputs == null) return; // exit early since no inputs found
            if (!riveInstance.isPlaying) riveInstance.play(name, false); // set autoplay: false because IX engine is controlling playback.
            if (FIT_KEY in inputs || ALIGNMENT_KEY in inputs) {
                const currentLayout = riveInstance.layout;
                const nextFit = inputs[FIT_KEY] ?? currentLayout.fit;
                const nextAlignment = inputs[ALIGNMENT_KEY] ?? currentLayout.alignment;
                if (nextFit !== currentLayout.fit || nextAlignment !== currentLayout.alignment) {
                    riveInstance.layout = currentLayout.copyWith({
                        fit: nextFit,
                        alignment: nextAlignment
                    });
                }
            }
            for(const inputName in inputs){
                if (inputName === FIT_KEY || inputName === ALIGNMENT_KEY) continue;
                const machineInput = stateMachineInputs.find((m)=>m.name === inputName);
                if (machineInput == null) continue;
                switch(machineInput.type){
                    case StateMachineInputType.Boolean:
                        {
                            if (inputs[inputName] != null) {
                                const booleanValue = Boolean(inputs[inputName]);
                                machineInput.value = booleanValue;
                            }
                            break;
                        }
                    case StateMachineInputType.Number:
                        {
                            const numberValue = props[inputName];
                            if (numberValue != null) machineInput.value = numberValue;
                            break;
                        }
                    case StateMachineInputType.Trigger:
                        {
                            if (inputs[inputName]) machineInput.fire();
                            break;
                        }
                }
            }
        }
    }
    // Render rive if the instance is available
    if (instance?.rive) renderRive(instance.rive);
    else frontendModule.setLoadHandler(containerElement, renderRive);
};
const clearPlugin = (_containerElement, _actionItem)=>null; // Not used by this plugin

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3BsdWdpbnMvSVgyUml2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgRklUX0tFWSA9ICctLXdmLXJpdmUtZml0JztcbmNvbnN0IEFMSUdOTUVOVF9LRVkgPSAnLS13Zi1yaXZlLWFsaWdubWVudCc7XG5cbmNvbnN0IHF1ZXJ5Q29udGFpbmVyRWxlbWVudCA9IChlbGVtZW50SWQpID0+XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXctaWQ9XCIke2VsZW1lbnRJZH1cIl1gKTtcblxuY29uc3QgZ2V0RnJvbnRlbmRNb2R1bGUgPSAoKSA9PiB3aW5kb3cuV2ViZmxvdy5yZXF1aXJlKCdyaXZlJyk7XG5cbmV4cG9ydCBjb25zdCBnZXRQbHVnaW5Db25maWcgPSAoYWN0aW9uSXRlbUNvbmZpZywga2V5KSA9PlxuICBhY3Rpb25JdGVtQ29uZmlnLnZhbHVlLmlucHV0c1trZXldO1xuXG5leHBvcnQgY29uc3QgZ2V0UGx1Z2luRHVyYXRpb24gPSAoKSA9PiBudWxsOyAvLyBOb3QgdXNlZCBieSB0aGlzIHBsdWdpblxuXG5leHBvcnQgY29uc3QgZ2V0UGx1Z2luT3JpZ2luID0gKHJlZlN0YXRlLCBhY3Rpb25JdGVtKSA9PiB7XG4gIGlmIChyZWZTdGF0ZSkgcmV0dXJuIHJlZlN0YXRlO1xuICBjb25zdCByZXN1bHQgPSB7fTtcbiAgY29uc3Qge2lucHV0cyA9IHt9fSA9IGFjdGlvbkl0ZW0uY29uZmlnLnZhbHVlO1xuICBmb3IgKGNvbnN0IGlucHV0IGluIGlucHV0cykgaWYgKGlucHV0c1tpbnB1dF0gPT0gbnVsbCkgcmVzdWx0W2lucHV0XSA9IDA7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UGx1Z2luRGVzdGluYXRpb24gPSAoYWN0aW9uSXRlbUNvbmZpZykgPT5cbiAgYWN0aW9uSXRlbUNvbmZpZy52YWx1ZS5pbnB1dHMgPz8ge307XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQbHVnaW5JbnN0YW5jZSA9IChlbGVtZW50LCBhY3Rpb25JdGVtKSA9PiB7XG4gIGNvbnN0IHNlbGVjdG9yR3VpZHMgPSBhY3Rpb25JdGVtLmNvbmZpZz8udGFyZ2V0Py5zZWxlY3Rvckd1aWRzIHx8IFtdO1xuICBpZiAoc2VsZWN0b3JHdWlkcy5sZW5ndGggPiAwKSByZXR1cm4gZWxlbWVudDtcblxuICAvLyBJbiB0aGlzIGNhc2UsIHdlIGRlZmluZSBwbHVnaW5JbnN0YW5jZSBhcyBhIHJlZmVyZW5jZSB0byB0aGUgY29udGFpbmVyIGVsZW1lbnRcbiAgY29uc3QgcGx1Z2luRWxlbWVudElkID0gYWN0aW9uSXRlbT8uY29uZmlnPy50YXJnZXQ/LnBsdWdpbkVsZW1lbnQ7XG4gIHJldHVybiBwbHVnaW5FbGVtZW50SWQgPyBxdWVyeUNvbnRhaW5lckVsZW1lbnQocGx1Z2luRWxlbWVudElkKSA6IG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgcmVuZGVyUGx1Z2luID0gKFxuICBjb250YWluZXJFbGVtZW50LFxuICB7UExVR0lOX1JJVkU6IHByb3BzfSxcbiAgYWN0aW9uSXRlbVxuKSA9PiB7XG4gIGNvbnN0IGZyb250ZW5kTW9kdWxlID0gZ2V0RnJvbnRlbmRNb2R1bGUoKTtcbiAgaWYgKCFmcm9udGVuZE1vZHVsZSkgcmV0dXJuO1xuICBjb25zdCBpbnN0YW5jZSA9IGZyb250ZW5kTW9kdWxlLmdldEluc3RhbmNlKGNvbnRhaW5lckVsZW1lbnQpO1xuICBjb25zdCBTdGF0ZU1hY2hpbmVJbnB1dFR5cGUgPSBmcm9udGVuZE1vZHVsZS5yaXZlLlN0YXRlTWFjaGluZUlucHV0VHlwZTtcbiAgY29uc3Qge25hbWUsIGlucHV0cyA9IHt9fSA9IGFjdGlvbkl0ZW0uY29uZmlnLnZhbHVlIHx8IHt9O1xuXG4gIGZ1bmN0aW9uIHJlbmRlclJpdmUocml2ZUluc3RhbmNlKSB7XG4gICAgaWYgKHJpdmVJbnN0YW5jZS5sb2FkZWQpIHtcbiAgICAgIHJlbmRlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZW5kZXIgaW5zdGFuY2UgaW1tZWRpYXRlbHkgb24gbG9hZCBhbmQgdGhlbiBjbGVhbiB1cCBoYW5kbGVyXG4gICAgICBjb25zdCBvbkxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHJlbmRlcigpO1xuICAgICAgICByaXZlSW5zdGFuY2U/Lm9mZignbG9hZCcsIG9uTG9hZCk7XG4gICAgICB9O1xuXG4gICAgICByaXZlSW5zdGFuY2U/Lm9uKCdsb2FkJywgb25Mb2FkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBjb25zdCBzdGF0ZU1hY2hpbmVJbnB1dHMgPSByaXZlSW5zdGFuY2Uuc3RhdGVNYWNoaW5lSW5wdXRzKG5hbWUpO1xuICAgICAgaWYgKHN0YXRlTWFjaGluZUlucHV0cyA9PSBudWxsKSByZXR1cm47IC8vIGV4aXQgZWFybHkgc2luY2Ugbm8gaW5wdXRzIGZvdW5kXG5cbiAgICAgIGlmICghcml2ZUluc3RhbmNlLmlzUGxheWluZykgcml2ZUluc3RhbmNlLnBsYXkobmFtZSwgZmFsc2UpOyAvLyBzZXQgYXV0b3BsYXk6IGZhbHNlIGJlY2F1c2UgSVggZW5naW5lIGlzIGNvbnRyb2xsaW5nIHBsYXliYWNrLlxuXG4gICAgICBpZiAoRklUX0tFWSBpbiBpbnB1dHMgfHwgQUxJR05NRU5UX0tFWSBpbiBpbnB1dHMpIHtcbiAgICAgICAgY29uc3QgY3VycmVudExheW91dCA9IHJpdmVJbnN0YW5jZS5sYXlvdXQ7XG4gICAgICAgIGNvbnN0IG5leHRGaXQgPSBpbnB1dHNbRklUX0tFWV0gPz8gY3VycmVudExheW91dC5maXQ7XG4gICAgICAgIGNvbnN0IG5leHRBbGlnbm1lbnQgPSBpbnB1dHNbQUxJR05NRU5UX0tFWV0gPz8gY3VycmVudExheW91dC5hbGlnbm1lbnQ7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIG5leHRGaXQgIT09IGN1cnJlbnRMYXlvdXQuZml0IHx8XG4gICAgICAgICAgbmV4dEFsaWdubWVudCAhPT0gY3VycmVudExheW91dC5hbGlnbm1lbnRcbiAgICAgICAgKSB7XG4gICAgICAgICAgcml2ZUluc3RhbmNlLmxheW91dCA9IGN1cnJlbnRMYXlvdXQuY29weVdpdGgoe1xuICAgICAgICAgICAgZml0OiBuZXh0Rml0LFxuICAgICAgICAgICAgYWxpZ25tZW50OiBuZXh0QWxpZ25tZW50LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3QgaW5wdXROYW1lIGluIGlucHV0cykge1xuICAgICAgICBpZiAoaW5wdXROYW1lID09PSBGSVRfS0VZIHx8IGlucHV0TmFtZSA9PT0gQUxJR05NRU5UX0tFWSkgY29udGludWU7XG5cbiAgICAgICAgY29uc3QgbWFjaGluZUlucHV0ID0gc3RhdGVNYWNoaW5lSW5wdXRzLmZpbmQoXG4gICAgICAgICAgKG0pID0+IG0ubmFtZSA9PT0gaW5wdXROYW1lXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKG1hY2hpbmVJbnB1dCA9PSBudWxsKSBjb250aW51ZTtcblxuICAgICAgICBzd2l0Y2ggKG1hY2hpbmVJbnB1dC50eXBlKSB7XG4gICAgICAgICAgY2FzZSBTdGF0ZU1hY2hpbmVJbnB1dFR5cGUuQm9vbGVhbjoge1xuICAgICAgICAgICAgaWYgKGlucHV0c1tpbnB1dE5hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgYm9vbGVhblZhbHVlID0gQm9vbGVhbihpbnB1dHNbaW5wdXROYW1lXSk7XG4gICAgICAgICAgICAgIG1hY2hpbmVJbnB1dC52YWx1ZSA9IGJvb2xlYW5WYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgU3RhdGVNYWNoaW5lSW5wdXRUeXBlLk51bWJlcjoge1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyVmFsdWUgPSBwcm9wc1tpbnB1dE5hbWVdO1xuICAgICAgICAgICAgaWYgKG51bWJlclZhbHVlICE9IG51bGwpIG1hY2hpbmVJbnB1dC52YWx1ZSA9IG51bWJlclZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSBTdGF0ZU1hY2hpbmVJbnB1dFR5cGUuVHJpZ2dlcjoge1xuICAgICAgICAgICAgaWYgKGlucHV0c1tpbnB1dE5hbWVdKSBtYWNoaW5lSW5wdXQuZmlyZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUmVuZGVyIHJpdmUgaWYgdGhlIGluc3RhbmNlIGlzIGF2YWlsYWJsZVxuICBpZiAoaW5zdGFuY2U/LnJpdmUpIHJlbmRlclJpdmUoaW5zdGFuY2Uucml2ZSk7XG4gIC8vIE90aGVyd2lzZSwgc3RvcmUgbGF0ZXN0IHJlbmRlciBhcyBhIGNhbGxiYWNrIHRvIGZpcmUgd2hlbiBsb2FkZWRcbiAgZWxzZSBmcm9udGVuZE1vZHVsZS5zZXRMb2FkSGFuZGxlcihjb250YWluZXJFbGVtZW50LCByZW5kZXJSaXZlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjbGVhclBsdWdpbiA9IChfY29udGFpbmVyRWxlbWVudCwgX2FjdGlvbkl0ZW0pID0+IG51bGw7IC8vIE5vdCB1c2VkIGJ5IHRoaXMgcGx1Z2luXG4iXSwibmFtZXMiOlsiY2xlYXJQbHVnaW4iLCJjcmVhdGVQbHVnaW5JbnN0YW5jZSIsImdldFBsdWdpbkNvbmZpZyIsImdldFBsdWdpbkRlc3RpbmF0aW9uIiwiZ2V0UGx1Z2luRHVyYXRpb24iLCJnZXRQbHVnaW5PcmlnaW4iLCJyZW5kZXJQbHVnaW4iLCJGSVRfS0VZIiwiQUxJR05NRU5UX0tFWSIsInF1ZXJ5Q29udGFpbmVyRWxlbWVudCIsImVsZW1lbnRJZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEZyb250ZW5kTW9kdWxlIiwid2luZG93IiwiV2ViZmxvdyIsInJlcXVpcmUiLCJhY3Rpb25JdGVtQ29uZmlnIiwia2V5IiwidmFsdWUiLCJpbnB1dHMiLCJyZWZTdGF0ZSIsImFjdGlvbkl0ZW0iLCJyZXN1bHQiLCJjb25maWciLCJpbnB1dCIsImVsZW1lbnQiLCJzZWxlY3Rvckd1aWRzIiwidGFyZ2V0IiwibGVuZ3RoIiwicGx1Z2luRWxlbWVudElkIiwicGx1Z2luRWxlbWVudCIsImNvbnRhaW5lckVsZW1lbnQiLCJQTFVHSU5fUklWRSIsInByb3BzIiwiZnJvbnRlbmRNb2R1bGUiLCJpbnN0YW5jZSIsImdldEluc3RhbmNlIiwiU3RhdGVNYWNoaW5lSW5wdXRUeXBlIiwicml2ZSIsIm5hbWUiLCJyZW5kZXJSaXZlIiwicml2ZUluc3RhbmNlIiwibG9hZGVkIiwicmVuZGVyIiwib25Mb2FkIiwib2ZmIiwib24iLCJzdGF0ZU1hY2hpbmVJbnB1dHMiLCJpc1BsYXlpbmciLCJwbGF5IiwiY3VycmVudExheW91dCIsImxheW91dCIsIm5leHRGaXQiLCJmaXQiLCJuZXh0QWxpZ25tZW50IiwiYWxpZ25tZW50IiwiY29weVdpdGgiLCJpbnB1dE5hbWUiLCJtYWNoaW5lSW5wdXQiLCJmaW5kIiwibSIsInR5cGUiLCJCb29sZWFuIiwiYm9vbGVhblZhbHVlIiwiTnVtYmVyIiwibnVtYmVyVmFsdWUiLCJUcmlnZ2VyIiwiZmlyZSIsInNldExvYWRIYW5kbGVyIiwiX2NvbnRhaW5lckVsZW1lbnQiLCJfYWN0aW9uSXRlbSJdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCOzs7Ozs7Ozs7OztJQXdIVEEsV0FBVztlQUFYQTs7SUE5RkFDLG9CQUFvQjtlQUFwQkE7O0lBaEJBQyxlQUFlO2VBQWZBOztJQWFBQyxvQkFBb0I7ZUFBcEJBOztJQVZBQyxpQkFBaUI7ZUFBakJBOztJQUVBQyxlQUFlO2VBQWZBOztJQW9CQUMsWUFBWTtlQUFaQTs7O0FBakNiLE1BQU1DLFVBQVU7QUFDaEIsTUFBTUMsZ0JBQWdCO0FBRXRCLE1BQU1DLHdCQUF3QixDQUFDQyxZQUM3QkMsU0FBU0MsYUFBYSxDQUFDLENBQUMs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

}),
2866: (function (__unused_webpack_module, exports) {
"use strict";
/* eslint-env browser */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    clearPlugin: function() {
        return clearPlugin;
    },
    createPluginInstance: function() {
        return createPluginInstance;
    },
    getPluginConfig: function() {
        return getPluginConfig;
    },
    getPluginDestination: function() {
        return getPluginDestination;
    },
    getPluginDuration: function() {
        return getPluginDuration;
    },
    getPluginOrigin: function() {
        return getPluginOrigin;
    },
    renderPlugin: function() {
        return renderPlugin;
    }
});
const queryContainerElement = (elementId)=>document.querySelector(`[data-w-id="${elementId}"]`);
const getFrontendModule = ()=>window.Webflow.require('spline');
const difference = (arr1, arr2)=>arr1.filter((x)=>!arr2.includes(x));
const getPluginConfig = (actionItemConfig, key)=>{
    return actionItemConfig.value[key];
};
const getPluginDuration = ()=>{
    // Not used by this plugin
    return null;
};
const DEFAULT_VALUES = Object.freeze({
    positionX: 0,
    positionY: 0,
    positionZ: 0,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1
});
const getPluginOrigin = (refState, actionItem)=>{
    // Determine which props we care about in the destination
    const destination = actionItem.config.value;
    const destinationKeys = Object.keys(destination);
    // Check the current state for any missing origin props
    if (refState) {
        const stateKeys = Object.keys(refState);
        const diffKeys = difference(destinationKeys, stateKeys);
        // If new props are needed, merge new origin values with current state
        if (diffKeys.length) {
            const origin = diffKeys.reduce((result, key)=>{
                result[key] = DEFAULT_VALUES[key];
                return result;
            }, refState);
            return origin;
        }
        // No difference, return current state
        return refState;
    }
    // State doesn't exist so define new origin based on destination
    const origin = destinationKeys.reduce((result, key)=>{
        result[key] = DEFAULT_VALUES[key];
        return result;
    }, {});
    return origin;
};
const getPluginDestination = (actionItemConfig)=>{
    return actionItemConfig.value;
};
const createPluginInstance = (element, actionItem)=>{
    // In this case, we define pluginInstance as a reference to the container element
    const pluginElementId = actionItem?.config?.target?.pluginElement;
    return pluginElementId ? queryContainerElement(pluginElementId) : null;
};
const renderPlugin = (containerElement, refState, actionItem)=>{
    const frontendModule = getFrontendModule();
    if (!frontendModule) return;
    const instance = frontendModule.getInstance(containerElement);
    const objectId = actionItem.config.target.objectId;
    const renderSpline = (spline)=>{
        if (!spline) {
            throw new Error('Invalid spline app passed to renderSpline');
        }
        const obj = objectId && spline.findObjectById(objectId);
        if (!obj) {
            return;
        }
        const { PLUGIN_SPLINE: props } = refState;
        if (props.positionX != null) {
            obj.position.x = props.positionX;
        }
        if (props.positionY != null) {
            obj.position.y = props.positionY;
        }
        if (props.positionZ != null) {
            obj.position.z = props.positionZ;
        }
        if (props.rotationX != null) {
            obj.rotation.x = props.rotationX;
        }
        if (props.rotationY != null) {
            obj.rotation.y = props.rotationY;
        }
        if (props.rotationZ != null) {
            obj.rotation.z = props.rotationZ;
        }
        if (props.scaleX != null) {
            obj.scale.x = props.scaleX;
        }
        if (props.scaleY != null) {
            obj.scale.y = props.scaleY;
        }
        if (props.scaleZ != null) {
            obj.scale.z = props.scaleZ;
        }
    };
    if (instance) {
        // Render spline if the app instance is already loaded
        renderSpline(instance.spline);
    } else {
        // Otherwise, store latest render as a callback to fire when loaded
        frontendModule.setLoadHandler(containerElement, renderSpline);
    }
};
const clearPlugin = ()=>{
    // Not used by this plugin
    return null;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3BsdWdpbnMvSVgyU3BsaW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jb25zdCBxdWVyeUNvbnRhaW5lckVsZW1lbnQgPSAoZWxlbWVudElkKSA9PlxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS13LWlkPVwiJHtlbGVtZW50SWR9XCJdYCk7XG5cbmNvbnN0IGdldEZyb250ZW5kTW9kdWxlID0gKCkgPT4gd2luZG93LldlYmZsb3cucmVxdWlyZSgnc3BsaW5lJyk7XG5cbmNvbnN0IGRpZmZlcmVuY2UgPSAoYXJyMSwgYXJyMikgPT4gYXJyMS5maWx0ZXIoKHgpID0+ICFhcnIyLmluY2x1ZGVzKHgpKTtcblxuZXhwb3J0IGNvbnN0IGdldFBsdWdpbkNvbmZpZyA9IChhY3Rpb25JdGVtQ29uZmlnLCBrZXkpID0+IHtcbiAgcmV0dXJuIGFjdGlvbkl0ZW1Db25maWcudmFsdWVba2V5XTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQbHVnaW5EdXJhdGlvbiA9ICgpID0+IHtcbiAgLy8gTm90IHVzZWQgYnkgdGhpcyBwbHVnaW5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBERUZBVUxUX1ZBTFVFUyA9IE9iamVjdC5mcmVlemUoe1xuICBwb3NpdGlvblg6IDAsXG4gIHBvc2l0aW9uWTogMCxcbiAgcG9zaXRpb25aOiAwLFxuICByb3RhdGlvblg6IDAsXG4gIHJvdGF0aW9uWTogMCxcbiAgcm90YXRpb25aOiAwLFxuICBzY2FsZVg6IDEsXG4gIHNjYWxlWTogMSxcbiAgc2NhbGVaOiAxLFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRQbHVnaW5PcmlnaW4gPSAocmVmU3RhdGUsIGFjdGlvbkl0ZW0pID0+IHtcbiAgLy8gRGV0ZXJtaW5lIHdoaWNoIHByb3BzIHdlIGNhcmUgYWJvdXQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gIGNvbnN0IGRlc3RpbmF0aW9uID0gYWN0aW9uSXRlbS5jb25maWcudmFsdWU7XG4gIGNvbnN0IGRlc3RpbmF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGRlc3RpbmF0aW9uKTtcbiAgLy8gQ2hlY2sgdGhlIGN1cnJlbnQgc3RhdGUgZm9yIGFueSBtaXNzaW5nIG9yaWdpbiBwcm9wc1xuICBpZiAocmVmU3RhdGUpIHtcbiAgICBjb25zdCBzdGF0ZUtleXMgPSBPYmplY3Qua2V5cyhyZWZTdGF0ZSk7XG4gICAgY29uc3QgZGlmZktleXMgPSBkaWZmZXJlbmNlKGRlc3RpbmF0aW9uS2V5cywgc3RhdGVLZXlzKTtcbiAgICAvLyBJZiBuZXcgcHJvcHMgYXJlIG5lZWRlZCwgbWVyZ2UgbmV3IG9yaWdpbiB2YWx1ZXMgd2l0aCBjdXJyZW50IHN0YXRlXG4gICAgaWYgKGRpZmZLZXlzLmxlbmd0aCkge1xuICAgICAgY29uc3Qgb3JpZ2luID0gZGlmZktleXMucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgICAgICByZXN1bHRba2V5XSA9IERFRkFVTFRfVkFMVUVTW2tleV07XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9LCByZWZTdGF0ZSk7XG4gICAgICByZXR1cm4gb3JpZ2luO1xuICAgIH1cbiAgICAvLyBObyBkaWZmZXJlbmNlLCByZXR1cm4gY3VycmVudCBzdGF0ZVxuICAgIHJldHVybiByZWZTdGF0ZTtcbiAgfVxuICAvLyBTdGF0ZSBkb2Vzbid0IGV4aXN0IHNvIGRlZmluZSBuZXcgb3JpZ2luIGJhc2VkIG9uIGRlc3RpbmF0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGRlc3RpbmF0aW9uS2V5cy5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgcmVzdWx0W2tleV0gPSBERUZBVUxUX1ZBTFVFU1trZXldO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIG9yaWdpbjtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQbHVnaW5EZXN0aW5hdGlvbiA9IChhY3Rpb25JdGVtQ29uZmlnKSA9PiB7XG4gIHJldHVybiBhY3Rpb25JdGVtQ29uZmlnLnZhbHVlO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBsdWdpbkluc3RhbmNlID0gKGVsZW1lbnQsIGFjdGlvbkl0ZW0pID0+IHtcbiAgLy8gSW4gdGhpcyBjYXNlLCB3ZSBkZWZpbmUgcGx1Z2luSW5zdGFuY2UgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGNvbnRhaW5lciBlbGVtZW50XG4gIGNvbnN0IHBsdWdpbkVsZW1lbnRJZCA9IGFjdGlvbkl0ZW0/LmNvbmZpZz8udGFyZ2V0Py5wbHVnaW5FbGVtZW50O1xuICByZXR1cm4gcGx1Z2luRWxlbWVudElkID8gcXVlcnlDb250YWluZXJFbGVtZW50KHBsdWdpbkVsZW1lbnRJZCkgOiBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbmRlclBsdWdpbiA9IChjb250YWluZXJFbGVtZW50LCByZWZTdGF0ZSwgYWN0aW9uSXRlbSkgPT4ge1xuICBjb25zdCBmcm9udGVuZE1vZHVsZSA9IGdldEZyb250ZW5kTW9kdWxlKCk7XG4gIGlmICghZnJvbnRlbmRNb2R1bGUpIHJldHVybjtcbiAgY29uc3QgaW5zdGFuY2UgPSBmcm9udGVuZE1vZHVsZS5nZXRJbnN0YW5jZShjb250YWluZXJFbGVtZW50KTtcbiAgY29uc3Qgb2JqZWN0SWQgPSBhY3Rpb25JdGVtLmNvbmZpZy50YXJnZXQub2JqZWN0SWQ7XG5cbiAgY29uc3QgcmVuZGVyU3BsaW5lID0gKHNwbGluZSkgPT4ge1xuICAgIGlmICghc3BsaW5lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3BsaW5lIGFwcCBwYXNzZWQgdG8gcmVuZGVyU3BsaW5lJyk7XG4gICAgfVxuICAgIGNvbnN0IG9iaiA9IG9iamVjdElkICYmIHNwbGluZS5maW5kT2JqZWN0QnlJZChvYmplY3RJZCk7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qge1BMVUdJTl9TUExJTkU6IHByb3BzfSA9IHJlZlN0YXRlO1xuICAgIGlmIChwcm9wcy5wb3NpdGlvblggIT0gbnVsbCkge1xuICAgICAgb2JqLnBvc2l0aW9uLnggPSBwcm9wcy5wb3NpdGlvblg7XG4gICAgfVxuICAgIGlmIChwcm9wcy5wb3NpdGlvblkgIT0gbnVsbCkge1xuICAgICAgb2JqLnBvc2l0aW9uLnkgPSBwcm9wcy5wb3NpdGlvblk7XG4gICAgfVxuICAgIGlmIChwcm9wcy5wb3NpdGlvblogIT0gbnVsbCkge1xuICAgICAgb2JqLnBvc2l0aW9uLnogPSBwcm9wcy5wb3NpdGlvblo7XG4gICAgfVxuICAgIGlmIChwcm9wcy5yb3RhdGlvblggIT0gbnVsbCkge1xuICAgICAgb2JqLnJvdGF0aW9uLnggPSBwcm9wcy5yb3RhdGlvblg7XG4gICAgfVxuICAgIGlmIChwcm9wcy5yb3RhdGlvblkgIT0gbnVsbCkge1xuICAgICAgb2JqLnJvdGF0aW9uLnkgPSBwcm9wcy5yb3RhdGlvblk7XG4gICAgfVxuICAgIGlmIChwcm9wcy5yb3RhdGlvblogIT0gbnVsbCkge1xuICAgICAgb2JqLnJvdGF0aW9uLnogPSBwcm9wcy5yb3RhdGlvblo7XG4gICAgfVxuICAgIGlmIChwcm9wcy5zY2FsZVggIT0gbnVsbCkge1xuICAgICAgb2JqLnNjYWxlLnggPSBwcm9wcy5zY2FsZVg7XG4gICAgfVxuICAgIGlmIChwcm9wcy5zY2FsZVkgIT0gbnVsbCkge1xuICAgICAgb2JqLnNjYWxlLnkgPSBwcm9wcy5zY2FsZVk7XG4gICAgfVxuICAgIGlmIChwcm9wcy5zY2FsZVogIT0gbnVsbCkge1xuICAgICAgb2JqLnNjYWxlLnogPSBwcm9wcy5zY2FsZVo7XG4gICAgfVxuICB9O1xuXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIC8vIFJlbmRlciBzcGxpbmUgaWYgdGhlIGFwcCBpbnN0YW5jZSBpcyBhbHJlYWR5IGxvYWRlZFxuICAgIHJlbmRlclNwbGluZShpbnN0YW5jZS5zcGxpbmUpO1xuICB9IGVsc2Uge1xuICAgIC8vIE90aGVyd2lzZSwgc3RvcmUgbGF0ZXN0IHJlbmRlciBhcyBhIGNhbGxiYWNrIHRvIGZpcmUgd2hlbiBsb2FkZWRcbiAgICBmcm9udGVuZE1vZHVsZS5zZXRMb2FkSGFuZGxlcihjb250YWluZXJFbGVtZW50LCByZW5kZXJTcGxpbmUpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJQbHVnaW4gPSAoKSA9PiB7XG4gIC8vIE5vdCB1c2VkIGJ5IHRoaXMgcGx1Z2luXG4gIHJldHVybiBudWxsO1xufTtcbiJdLCJuYW1lcyI6WyJjbGVhclBsdWdpbiIsImNyZWF0ZVBsdWdpbkluc3RhbmNlIiwiZ2V0UGx1Z2luQ29uZmlnIiwiZ2V0UGx1Z2luRGVzdGluYXRpb24iLCJnZXRQbHVnaW5EdXJhdGlvbiIsImdldFBsdWdpbk9yaWdpbiIsInJlbmRlclBsdWdpbiIsInF1ZXJ5Q29udGFpbmVyRWxlbWVudCIsImVsZW1lbnRJZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEZyb250ZW5kTW9kdWxlIiwid2luZG93IiwiV2ViZmxvdyIsInJlcXVpcmUiLCJkaWZmZXJlbmNlIiwiYXJyMSIsImFycjIiLCJmaWx0ZXIiLCJ4IiwiaW5jbHVkZXMiLCJhY3Rpb25JdGVtQ29uZmlnIiwia2V5IiwidmFsdWUiLCJERUZBVUxUX1ZBTFVFUyIsIk9iamVjdCIsImZyZWV6ZSIsInBvc2l0aW9uWCIsInBvc2l0aW9uWSIsInBvc2l0aW9uWiIsInJvdGF0aW9uWCIsInJvdGF0aW9uWSIsInJvdGF0aW9uWiIsInNjYWxlWCIsInNjYWxlWSIsInNjYWxlWiIsInJlZlN0YXRlIiwiYWN0aW9uSXRlbSIsImRlc3RpbmF0aW9uIiwiY29uZmlnIiwiZGVzdGluYXRpb25LZXlzIiwia2V5cyIsInN0YXRlS2V5cyIsImRpZmZLZXlzIiwibGVuZ3RoIiwib3JpZ2luIiwicmVkdWNlIiwicmVzdWx0IiwiZWxlbWVudCIsInBsdWdpbkVsZW1lbnRJZCIsInRhcmdldCIsInBsdWdpbkVsZW1lbnQiLCJjb250YWluZXJFbGVtZW50IiwiZnJvbnRlbmRNb2R1bGUiLCJpbnN0YW5jZSIsImdldEluc3RhbmNlIiwib2JqZWN0SWQiLCJyZW5kZXJTcGxpbmUiLCJzcGxpbmUiLCJFcnJvciIsIm9iaiIsImZpbmRPYmplY3RCeUlkIiwiUExVR0lOX1NQTElORSIsInByb3BzIiwicG9zaXRpb24iLCJ5IiwieiIsInJvdGF0aW9uIiwic2NhbGUiLCJzZXRMb2FkSGFuZGxlciJdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCOzs7Ozs7Ozs7OztJQXdIVEEsV0FBVztlQUFYQTs7SUEzREFDLG9CQUFvQjtlQUFwQkE7O0lBcERBQyxlQUFlO2VBQWZBOztJQWdEQUMsb0JBQW9CO2VBQXBCQTs7SUE1Q0FDLGlCQUFpQjtlQUFqQkE7O0lBaUJBQyxlQUFlO2VBQWZBOztJQXFDQUMsWUFBWTtlQUFaQTs7O0FBakViLE1BQU1DLHdCQUF3QixDQUFDQyxZQUM3QkMsU0FBU0MsYUFBYSxDQUFDLENBQUMsWUFBWSxFQUFFRixVQUFVLEVBQUUsQ0FBQztBQUVyRCxNQUFNRyxvQkFBb0IsSUFBTUMsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUM7QUFFdkQsTUFBTUMsYUFBYSxDQUFDQyxNQUFNQyxPQUFTRCxLQUFLRSxNQUFNLENBQUMsQ0FBQ0MsSUFBTSxDQUFDRixLQUFLRyxRQUFRLENBQUNEO0FBRTlELE1BQU1qQixrQkFBa0IsQ0FBQ21CLGtCQUFrQkM7SUFDaEQsT0FBT0QsaUJBQWlCRSxLQUFLLENBQUNELElBQUk7QUFDcEM7QUFFTyxNQUFNbEIsb0JBQW9CO0lBQy9CLDBCQUEwQjtJQUMxQixPQUFPO0FBQ1Q7QUFFQSxNQUFNb0IsaUJBQWlCQyxPQUFPQyxNQUFNLENBQUM7SUFDbkNDLFdBQVc7SUFDWEMsV0FBVztJQUNYQyxXQUFXO0lBQ1hDLFdBQVc7SUFDWEMsV0FBVztJQUNYQyxXQUFXO0lBQ1hDLFFBQVE7SUFDUkMsUUFBUTtJQUNSQyxRQUFRO0FBQ1Y7QUFFTyxNQUFNOUIsa0JBQWtCLENBQUMrQixVQUFVQztJQUN4Qyx5REFBeUQ7SUFDekQsTUFBTUMsY0FB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

}),
1407: (function (__unused_webpack_module, exports, __webpack_require__) {
"use strict";
/* eslint-env browser */ // Importing directly to avoid importing the entire shared-utils package.
// eslint-disable-next-line webflow/package-boundaries

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    clearPlugin: function() {
        return clearPlugin;
    },
    createPluginInstance: function() {
        return createPluginInstance;
    },
    getPluginConfig: function() {
        return getPluginConfig;
    },
    getPluginDestination: function() {
        return getPluginDestination;
    },
    getPluginDuration: function() {
        return getPluginDuration;
    },
    getPluginOrigin: function() {
        return getPluginOrigin;
    },
    renderPlugin: function() {
        return renderPlugin;
    }
});
const _normalizeColor = __webpack_require__(380);
const getPluginConfig = (actionItemConfig, key)=>{
    return actionItemConfig.value[key];
};
const getPluginDuration = ()=>{
    // Not used by this plugin
    return null;
};
const getPluginOrigin = (refState, actionItem)=>{
    if (refState) {
        return refState;
    }
    // Determine which props we care about in the destination
    const destination = actionItem.config.value;
    // Look up root variable to parse origin values
    const objectId = actionItem.config.target.objectId;
    const computedValue = getComputedStyle(document.documentElement).getPropertyValue(objectId);
    if (destination.size != null) {
        return {
            size: parseInt(computedValue, 10)
        };
    }
    if (destination.unit === '%' || destination.unit === '-') {
        return {
            size: parseFloat(computedValue)
        };
    }
    if (destination.red != null && destination.green != null && destination.blue != null) {
        return (0, _normalizeColor.normalizeColor)(computedValue);
    }
};
const getPluginDestination = (actionItemConfig)=>{
    return actionItemConfig.value;
};
const createPluginInstance = ()=>{
    // Not used by this plugin
    return null;
};
const variableHandlers = {
    color: {
        match: ({ red, green, blue, alpha })=>[
                red,
                green,
                blue,
                alpha
            ].every((x)=>x != null),
        getValue: ({ red, green, blue, alpha })=>`rgba(${red}, ${green}, ${blue}, ${alpha})`
    },
    // Size, Percentage, and Unitless variables.
    size: {
        match: ({ size })=>size != null,
        getValue: ({ size }, unit)=>{
            switch(unit){
                case '-':
                    return size;
                default:
                    return `${size}${unit}`;
            }
        }
    }
};
const renderPlugin = (_, refState, actionItem)=>{
    const { target: { objectId }, value: { unit } } = actionItem.config;
    const props = refState.PLUGIN_VARIABLE;
    const handler = Object.values(variableHandlers).find((h)=>h.match(props, unit));
    if (handler) {
        document.documentElement.style.setProperty(objectId, handler.getValue(props, unit));
    }
};
const clearPlugin = (ref, actionItem)=>{
    const objectId = actionItem.config.target.objectId;
    document.documentElement.style.removeProperty(objectId);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3BsdWdpbnMvSVgyVmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbi8vIEltcG9ydGluZyBkaXJlY3RseSB0byBhdm9pZCBpbXBvcnRpbmcgdGhlIGVudGlyZSBzaGFyZWQtdXRpbHMgcGFja2FnZS5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB3ZWJmbG93L3BhY2thZ2UtYm91bmRhcmllc1xuaW1wb3J0IHtub3JtYWxpemVDb2xvcn0gZnJvbSAnLi4vc2hhcmVkLXV0aWxzL25vcm1hbGl6ZUNvbG9yJztcblxuZXhwb3J0IGNvbnN0IGdldFBsdWdpbkNvbmZpZyA9IChhY3Rpb25JdGVtQ29uZmlnLCBrZXkpID0+IHtcbiAgcmV0dXJuIGFjdGlvbkl0ZW1Db25maWcudmFsdWVba2V5XTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQbHVnaW5EdXJhdGlvbiA9ICgpID0+IHtcbiAgLy8gTm90IHVzZWQgYnkgdGhpcyBwbHVnaW5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UGx1Z2luT3JpZ2luID0gKHJlZlN0YXRlLCBhY3Rpb25JdGVtKSA9PiB7XG4gIGlmIChyZWZTdGF0ZSkge1xuICAgIHJldHVybiByZWZTdGF0ZTtcbiAgfVxuXG4gIC8vIERldGVybWluZSB3aGljaCBwcm9wcyB3ZSBjYXJlIGFib3V0IGluIHRoZSBkZXN0aW5hdGlvblxuICBjb25zdCBkZXN0aW5hdGlvbiA9IGFjdGlvbkl0ZW0uY29uZmlnLnZhbHVlO1xuXG4gIC8vIExvb2sgdXAgcm9vdCB2YXJpYWJsZSB0byBwYXJzZSBvcmlnaW4gdmFsdWVzXG4gIGNvbnN0IG9iamVjdElkID0gYWN0aW9uSXRlbS5jb25maWcudGFyZ2V0Lm9iamVjdElkO1xuICBjb25zdCBjb21wdXRlZFZhbHVlID0gZ2V0Q29tcHV0ZWRTdHlsZShcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgKS5nZXRQcm9wZXJ0eVZhbHVlKG9iamVjdElkKTtcblxuICBpZiAoZGVzdGluYXRpb24uc2l6ZSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIHtzaXplOiBwYXJzZUludChjb21wdXRlZFZhbHVlLCAxMCl9O1xuICB9XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnVuaXQgPT09ICclJyB8fCBkZXN0aW5hdGlvbi51bml0ID09PSAnLScpIHtcbiAgICByZXR1cm4ge3NpemU6IHBhcnNlRmxvYXQoY29tcHV0ZWRWYWx1ZSl9O1xuICB9XG5cbiAgaWYgKFxuICAgIGRlc3RpbmF0aW9uLnJlZCAhPSBudWxsICYmXG4gICAgZGVzdGluYXRpb24uZ3JlZW4gIT0gbnVsbCAmJlxuICAgIGRlc3RpbmF0aW9uLmJsdWUgIT0gbnVsbFxuICApIHtcbiAgICByZXR1cm4gbm9ybWFsaXplQ29sb3IoY29tcHV0ZWRWYWx1ZSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQbHVnaW5EZXN0aW5hdGlvbiA9IChhY3Rpb25JdGVtQ29uZmlnKSA9PiB7XG4gIHJldHVybiBhY3Rpb25JdGVtQ29uZmlnLnZhbHVlO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBsdWdpbkluc3RhbmNlID0gKCkgPT4ge1xuICAvLyBOb3QgdXNlZCBieSB0aGlzIHBsdWdpblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IHZhcmlhYmxlSGFuZGxlcnMgPSB7XG4gIGNvbG9yOiB7XG4gICAgbWF0Y2g6ICh7cmVkLCBncmVlbiwgYmx1ZSwgYWxwaGF9KSA9PlxuICAgICAgW3JlZCwgZ3JlZW4sIGJsdWUsIGFscGhhXS5ldmVyeSgoeCkgPT4geCAhPSBudWxsKSxcbiAgICBnZXRWYWx1ZTogKHtyZWQsIGdyZWVuLCBibHVlLCBhbHBoYX0pID0+XG4gICAgICBgcmdiYSgke3JlZH0sICR7Z3JlZW59LCAke2JsdWV9LCAke2FscGhhfSlgLFxuICB9LFxuXG4gIC8vIFNpemUsIFBlcmNlbnRhZ2UsIGFuZCBVbml0bGVzcyB2YXJpYWJsZXMuXG4gIHNpemU6IHtcbiAgICBtYXRjaDogKHtzaXplfSkgPT4gc2l6ZSAhPSBudWxsLFxuICAgIGdldFZhbHVlOiAoe3NpemV9LCB1bml0KSA9PiB7XG4gICAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgcmV0dXJuIHNpemU7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGAke3NpemV9JHt1bml0fWA7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCByZW5kZXJQbHVnaW4gPSAoXywgcmVmU3RhdGUsIGFjdGlvbkl0ZW0pID0+IHtcbiAgY29uc3Qge1xuICAgIHRhcmdldDoge29iamVjdElkfSxcbiAgICB2YWx1ZToge3VuaXR9LFxuICB9ID0gYWN0aW9uSXRlbS5jb25maWc7XG4gIGNvbnN0IHByb3BzID0gcmVmU3RhdGUuUExVR0lOX1ZBUklBQkxFO1xuXG4gIGNvbnN0IGhhbmRsZXIgPSBPYmplY3QudmFsdWVzKHZhcmlhYmxlSGFuZGxlcnMpLmZpbmQoKGgpID0+XG4gICAgaC5tYXRjaChwcm9wcywgdW5pdClcbiAgKTtcblxuICBpZiAoaGFuZGxlcikge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIG9iamVjdElkLFxuICAgICAgaGFuZGxlci5nZXRWYWx1ZShwcm9wcywgdW5pdClcbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJQbHVnaW4gPSAocmVmLCBhY3Rpb25JdGVtKSA9PiB7XG4gIGNvbnN0IG9iamVjdElkID0gYWN0aW9uSXRlbS5jb25maWcudGFyZ2V0Lm9iamVjdElkO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkob2JqZWN0SWQpO1xufTtcbiJdLCJuYW1lcyI6WyJjbGVhclBsdWdpbiIsImNyZWF0ZVBsdWdpbkluc3RhbmNlIiwiZ2V0UGx1Z2luQ29uZmlnIiwiZ2V0UGx1Z2luRGVzdGluYXRpb24iLCJnZXRQbHVnaW5EdXJhdGlvbiIsImdldFBsdWdpbk9yaWdpbiIsInJlbmRlclBsdWdpbiIsImFjdGlvbkl0ZW1Db25maWciLCJrZXkiLCJ2YWx1ZSIsInJlZlN0YXRlIiwiYWN0aW9uSXRlbSIsImRlc3RpbmF0aW9uIiwiY29uZmlnIiwib2JqZWN0SWQiLCJ0YXJnZXQiLCJjb21wdXRlZFZhbHVlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0UHJvcGVydHlWYWx1ZSIsInNpemUiLCJwYXJzZUludCIsInVuaXQiLCJwYXJzZUZsb2F0IiwicmVkIiwiZ3JlZW4iLCJibHVlIiwibm9ybWFsaXplQ29sb3IiLCJ2YXJpYWJsZUhhbmRsZXJzIiwiY29sb3IiLCJtYXRjaCIsImFscGhhIiwiZXZlcnkiLCJ4IiwiZ2V0VmFsdWUiLCJfIiwicHJvcHMiLCJQTFVHSU5fVkFSSUFCTEUiLCJoYW5kbGVyIiwiT2JqZWN0IiwidmFsdWVzIiwiZmluZCIsImgiLCJzdHlsZSIsInNldFByb3BlcnR5IiwicmVmIiwicmVtb3ZlUHJvcGVydHkiXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFzQixHQUV0Qix5RUFBeUU7QUFDekUsc0RBQXNEOzs7Ozs7Ozs7Ozs7SUE2RnpDQSxXQUFXO2VBQVhBOztJQTlDQUMsb0JBQW9CO2VBQXBCQTs7SUE1Q0FDLGVBQWU7ZUFBZkE7O0lBd0NBQyxvQkFBb0I7ZUFBcEJBOztJQXBDQUMsaUJBQWlCO2VBQWpCQTs7SUFLQUMsZUFBZTtlQUFmQTs7SUE4REFDLFlBQVk7ZUFBWkE7OztnQ0F6RWdCO0FBRXRCLE1BQU1KLGtCQUFrQixDQUFDSyxrQkFBa0JDO0lBQ2hELE9BQU9ELGlCQUFpQkUsS0FBSyxDQUFDRCxJQUFJO0FBQ3BDO0FBRU8sTUFBTUosb0JBQW9CO0lBQy9CLDBCQUEwQjtJQUMxQixPQUFPO0FBQ1Q7QUFFTyxNQUFNQyxrQkFBa0IsQ0FBQ0ssVUFB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

}),
3690: (function (__unused_webpack_module, exports, __webpack_require__) {
"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "pluginMethodMap", ({
    enumerable: true,
    get: function() {
        return pluginMethodMap;
    }
}));
const _sharedconstants = __webpack_require__(7087);
const _IX2Lottie = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(7377));
const _IX2Spline = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(2866));
const _IX2Rive = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(2570));
const _IX2Variable = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(1407));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const pluginMethodMap = new Map([
    [
        _sharedconstants.ActionTypeConsts.PLUGIN_LOTTIE,
        {
            ..._IX2Lottie
        }
    ],
    [
        _sharedconstants.ActionTypeConsts.PLUGIN_SPLINE,
        {
            ..._IX2Spline
        }
    ],
    [
        _sharedconstants.ActionTypeConsts.PLUGIN_RIVE,
        {
            ..._IX2Rive
        }
    ],
    [
        _sharedconstants.ActionTypeConsts.PLUGIN_VARIABLE,
        {
            ..._IX2Variable
        }
    ]
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3BsdWdpbnMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBY3Rpb25UeXBlQ29uc3RzfSBmcm9tICdAcGFja2FnZXMvc3lzdGVtcy9peDIvc2hhcmVkLWNvbnN0YW50cyc7XG5cbmltcG9ydCAqIGFzIGxvdHRpZSBmcm9tICcuL0lYMkxvdHRpZSc7XG5pbXBvcnQgKiBhcyBzcGxpbmUgZnJvbSAnLi9JWDJTcGxpbmUnO1xuaW1wb3J0ICogYXMgcml2ZSBmcm9tICcuL0lYMlJpdmUnO1xuaW1wb3J0ICogYXMgdmFyaWFibGUgZnJvbSAnLi9JWDJWYXJpYWJsZSc7XG5cbmV4cG9ydCB0eXBlIFBsdWdpblR5cGUgPVxuICB8IHR5cGVvZiBBY3Rpb25UeXBlQ29uc3RzLlBMVUdJTl9MT1RUSUVcbiAgfCB0eXBlb2YgQWN0aW9uVHlwZUNvbnN0cy5QTFVHSU5fU1BMSU5FXG4gIHwgdHlwZW9mIEFjdGlvblR5cGVDb25zdHMuUExVR0lOX1ZBUklBQkxFXG4gIHwgdHlwZW9mIEFjdGlvblR5cGVDb25zdHMuUExVR0lOX1JJVkU7XG5cbmV4cG9ydCBjb25zdCBwbHVnaW5NZXRob2RNYXAgPSBuZXcgTWFwKFtcbiAgW0FjdGlvblR5cGVDb25zdHMuUExVR0lOX0xPVFRJRSwgey4uLmxvdHRpZX1dLFxuICBbQWN0aW9uVHlwZUNvbnN0cy5QTFVHSU5fU1BMSU5FLCB7Li4uc3BsaW5lfV0sXG4gIFtBY3Rpb25UeXBlQ29uc3RzLlBMVUdJTl9SSVZFLCB7Li4ucml2ZX1dLFxuICBbQWN0aW9uVHlwZUNvbnN0cy5QTFVHSU5fVkFSSUFCTEUsIHsuLi52YXJpYWJsZX1dLFxuXSk7XG4iXSwibmFtZXMiOlsicGx1Z2luTWV0aG9kTWFwIiwiTWFwIiwiQWN0aW9uVHlwZUNvbnN0cyIsIlBMVUdJTl9MT1RUSUUiLCJsb3R0aWUiLCJQTFVHSU5fU1BMSU5FIiwic3BsaW5lIiwiUExVR0lOX1JJVkUiLCJyaXZlIiwiUExVR0lOX1ZBUklBQkxFIiwidmFyaWFibGUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBYWFBOzs7ZUFBQUE7OztpQ0Fia0I7bUVBRVA7bUVBQ0E7aUVBQ0Y7cUVBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFuQixNQUFNQSxrQkFBa0IsSUFBSUMsSUFBSTtJQUNyQztRQUFDQyxpQ0FBZ0IsQ0FBQ0MsYUFBYTtRQUFFO1lBQUMsR0FBR0MsVUFBTTtRQUFBO0tBQUU7SUFDN0M7UUFBQ0YsaUNBQWdCLENBQUNHLGFBQWE7UUFBRTtZQUFDLEdBQUdDLFVBQU07UUFBQTtLQUFFO0lBQzdDO1FBQUNKLGlDQUFnQixDQUFDSyxXQUFXO1FBQUU7WUFBQyxHQUFHQyxRQUFJO1FBQUE7S0FBRTtJQUN6QztRQUFDTixpQ0FBZ0IsQ0FBQ08sZUFBZTtRQUFFO1lBQUMsR0FBR0MsWUFBUTtRQUFBO0tBQUU7Q0FDbEQifQ==

}),
8023: (function (__unused_webpack_module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: function() {
        return IX2_ACTION_LIST_PLAYBACK_CHANGED;
    },
    IX2_ANIMATION_FRAME_CHANGED: function() {
        return IX2_ANIMATION_FRAME_CHANGED;
    },
    IX2_CLEAR_REQUESTED: function() {
        return IX2_CLEAR_REQUESTED;
    },
    IX2_ELEMENT_STATE_CHANGED: function() {
        return IX2_ELEMENT_STATE_CHANGED;
    },
    IX2_EVENT_LISTENER_ADDED: function() {
        return IX2_EVENT_LISTENER_ADDED;
    },
    IX2_EVENT_STATE_CHANGED: function() {
        return IX2_EVENT_STATE_CHANGED;
    },
    IX2_INSTANCE_ADDED: function() {
        return IX2_INSTANCE_ADDED;
    },
    IX2_INSTANCE_REMOVED: function() {
        return IX2_INSTANCE_REMOVED;
    },
    IX2_INSTANCE_STARTED: function() {
        return IX2_INSTANCE_STARTED;
    },
    IX2_MEDIA_QUERIES_DEFINED: function() {
        return IX2_MEDIA_QUERIES_DEFINED;
    },
    IX2_PARAMETER_CHANGED: function() {
        return IX2_PARAMETER_CHANGED;
    },
    IX2_PLAYBACK_REQUESTED: function() {
        return IX2_PLAYBACK_REQUESTED;
    },
    IX2_PREVIEW_REQUESTED: function() {
        return IX2_PREVIEW_REQUESTED;
    },
    IX2_RAW_DATA_IMPORTED: function() {
        return IX2_RAW_DATA_IMPORTED;
    },
    IX2_SESSION_INITIALIZED: function() {
        return IX2_SESSION_INITIALIZED;
    },
    IX2_SESSION_STARTED: function() {
        return IX2_SESSION_STARTED;
    },
    IX2_SESSION_STOPPED: function() {
        return IX2_SESSION_STOPPED;
    },
    IX2_STOP_REQUESTED: function() {
        return IX2_STOP_REQUESTED;
    },
    IX2_TEST_FRAME_RENDERED: function() {
        return IX2_TEST_FRAME_RENDERED;
    },
    IX2_VIEWPORT_WIDTH_CHANGED: function() {
        return IX2_VIEWPORT_WIDTH_CHANGED;
    }
});
const IX2_RAW_DATA_IMPORTED = 'IX2_RAW_DATA_IMPORTED';
const IX2_SESSION_INITIALIZED = 'IX2_SESSION_INITIALIZED';
const IX2_SESSION_STARTED = 'IX2_SESSION_STARTED';
const IX2_SESSION_STOPPED = 'IX2_SESSION_STOPPED';
const IX2_PREVIEW_REQUESTED = 'IX2_PREVIEW_REQUESTED';
const IX2_PLAYBACK_REQUESTED = 'IX2_PLAYBACK_REQUESTED';
const IX2_STOP_REQUESTED = 'IX2_STOP_REQUESTED';
const IX2_CLEAR_REQUESTED = 'IX2_CLEAR_REQUESTED';
const IX2_EVENT_LISTENER_ADDED = 'IX2_EVENT_LISTENER_ADDED';
const IX2_EVENT_STATE_CHANGED = 'IX2_EVENT_STATE_CHANGED';
const IX2_ANIMATION_FRAME_CHANGED = 'IX2_ANIMATION_FRAME_CHANGED';
const IX2_PARAMETER_CHANGED = 'IX2_PARAMETER_CHANGED';
const IX2_INSTANCE_ADDED = 'IX2_INSTANCE_ADDED';
const IX2_INSTANCE_STARTED = 'IX2_INSTANCE_STARTED';
const IX2_INSTANCE_REMOVED = 'IX2_INSTANCE_REMOVED';
const IX2_ELEMENT_STATE_CHANGED = 'IX2_ELEMENT_STATE_CHANGED';
const IX2_ACTION_LIST_PLAYBACK_CHANGED = 'IX2_ACTION_LIST_PLAYBACK_CHANGED';
const IX2_VIEWPORT_WIDTH_CHANGED = 'IX2_VIEWPORT_WIDTH_CHANGED';
const IX2_MEDIA_QUERIES_DEFINED = 'IX2_MEDIA_QUERIES_DEFINED';
const IX2_TEST_FRAME_RENDERED = 'IX2_TEST_FRAME_RENDERED';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC1jb25zdGFudHMvSVgyRW5naW5lQWN0aW9uVHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IElYMl9SQVdfREFUQV9JTVBPUlRFRCA9ICdJWDJfUkFXX0RBVEFfSU1QT1JURUQnO1xuZXhwb3J0IGNvbnN0IElYMl9TRVNTSU9OX0lOSVRJQUxJWkVEID0gJ0lYMl9TRVNTSU9OX0lOSVRJQUxJWkVEJztcbmV4cG9ydCBjb25zdCBJWDJfU0VTU0lPTl9TVEFSVEVEID0gJ0lYMl9TRVNTSU9OX1NUQVJURUQnO1xuZXhwb3J0IGNvbnN0IElYMl9TRVNTSU9OX1NUT1BQRUQgPSAnSVgyX1NFU1NJT05fU1RPUFBFRCc7XG5leHBvcnQgY29uc3QgSVgyX1BSRVZJRVdfUkVRVUVTVEVEID0gJ0lYMl9QUkVWSUVXX1JFUVVFU1RFRCc7XG5leHBvcnQgY29uc3QgSVgyX1BMQVlCQUNLX1JFUVVFU1RFRCA9ICdJWDJfUExBWUJBQ0tfUkVRVUVTVEVEJztcbmV4cG9ydCBjb25zdCBJWDJfU1RPUF9SRVFVRVNURUQgPSAnSVgyX1NUT1BfUkVRVUVTVEVEJztcbmV4cG9ydCBjb25zdCBJWDJfQ0xFQVJfUkVRVUVTVEVEID0gJ0lYMl9DTEVBUl9SRVFVRVNURUQnO1xuZXhwb3J0IGNvbnN0IElYMl9FVkVOVF9MSVNURU5FUl9BRERFRCA9ICdJWDJfRVZFTlRfTElTVEVORVJfQURERUQnO1xuZXhwb3J0IGNvbnN0IElYMl9FVkVOVF9TVEFURV9DSEFOR0VEID0gJ0lYMl9FVkVOVF9TVEFURV9DSEFOR0VEJztcbmV4cG9ydCBjb25zdCBJWDJfQU5JTUFUSU9OX0ZSQU1FX0NIQU5HRUQgPSAnSVgyX0FOSU1BVElPTl9GUkFNRV9DSEFOR0VEJztcbmV4cG9ydCBjb25zdCBJWDJfUEFSQU1FVEVSX0NIQU5HRUQgPSAnSVgyX1BBUkFNRVRFUl9DSEFOR0VEJztcbmV4cG9ydCBjb25zdCBJWDJfSU5TVEFOQ0VfQURERUQgPSAnSVgyX0lOU1RBTkNFX0FEREVEJztcbmV4cG9ydCBjb25zdCBJWDJfSU5TVEFOQ0VfU1RBUlRFRCA9ICdJWDJfSU5TVEFOQ0VfU1RBUlRFRCc7XG5leHBvcnQgY29uc3QgSVgyX0lOU1RBTkNFX1JFTU9WRUQgPSAnSVgyX0lOU1RBTkNFX1JFTU9WRUQnO1xuZXhwb3J0IGNvbnN0IElYMl9FTEVNRU5UX1NUQVRFX0NIQU5HRUQgPSAnSVgyX0VMRU1FTlRfU1RBVEVfQ0hBTkdFRCc7XG5leHBvcnQgY29uc3QgSVgyX0FDVElPTl9MSVNUX1BMQVlCQUNLX0NIQU5HRUQgPVxuICAnSVgyX0FDVElPTl9MSVNUX1BMQVlCQUNLX0NIQU5HRUQnO1xuZXhwb3J0IGNvbnN0IElYMl9WSUVXUE9SVF9XSURUSF9DSEFOR0VEID0gJ0lYMl9WSUVXUE9SVF9XSURUSF9DSEFOR0VEJztcbmV4cG9ydCBjb25zdCBJWDJfTUVESUFfUVVFUklFU19ERUZJTkVEID0gJ0lYMl9NRURJQV9RVUVSSUVTX0RFRklORUQnO1xuZXhwb3J0IGNvbnN0IElYMl9URVNUX0ZSQU1FX1JFTkRFUkVEID0gJ0lYMl9URVNUX0ZSQU1FX1JFTkRFUkVEJztcbiJdLCJuYW1lcyI6WyJJWDJfQUNUSU9OX0xJU1RfUExBWUJBQ0tfQ0hBTkdFRCIsIklYMl9BTklNQVRJT05fRlJBTUVfQ0hBTkdFRCIsIklYMl9DTEVBUl9SRVFVRVNURUQiLCJJWDJfRUxFTUVOVF9TVEFURV9DSEFOR0VEIiwiSVgyX0VWRU5UX0xJU1RFTkVSX0FEREVEIiwiSVgyX0VWRU5UX1NUQVRFX0NIQU5HRUQiLCJJWDJfSU5TVEFOQ0VfQURERUQiLCJJWDJfSU5TVEFOQ0VfUkVNT1ZFRCIsIklYMl9JTlNUQU5DRV9TVEFSVEVEIiwiSVgyX01FRElBX1FVRVJJRVNfREVGSU5FRCIsIklYMl9QQVJBTUVURVJfQ0hBTkdFRCIsIklYMl9QTEFZQkFDS19SRVFVRVNURUQiLCJJWDJfUFJFVklFV19SRVFVRVNURUQiLCJJWDJfUkFXX0RBVEFfSU1QT1JURUQiLCJJWDJfU0VTU0lPTl9JTklUSUFMSVpFRCIsIklYMl9TRVNTSU9OX1NUQVJURUQiLCJJWDJfU0VTU0lPTl9TVE9QUEVEIiwiSVgyX1NUT1BfUkVRVUVTVEVEIiwiSVgyX1RFU1RfRlJBTUVfUkVOREVSRUQiLCJJWDJfVklFV1BPUlRfV0lEVEhfQ0hBTkdFRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFnQmFBLGdDQUFnQztlQUFoQ0E7O0lBTkFDLDJCQUEyQjtlQUEzQkE7O0lBSEFDLG1CQUFtQjtlQUFuQkE7O0lBUUFDLHlCQUF5QjtlQUF6QkE7O0lBUEFDLHdCQUF3QjtlQUF4QkE7O0lBQ0FDLHVCQUF1QjtlQUF2QkE7O0lBR0FDLGtCQUFrQjtlQUFsQkE7O0lBRUFDLG9CQUFvQjtlQUFwQkE7O0lBREFDLG9CQUFvQjtlQUFwQkE7O0lBTUFDLHlCQUF5QjtlQUF6QkE7O0lBUkFDLHFCQUFxQjtlQUFyQkE7O0lBTkFDLHNCQUFzQjtlQUF0QkE7O0lBREFDLHFCQUFxQjtlQUFyQkE7O0lBSkFDLHFCQUFxQjtlQUFyQkE7O0lBQ0FDLHVCQUF1QjtlQUF2QkE7O0lBQ0FDLG1CQUFtQjtlQUFuQkE7O0lBQ0FDLG1CQUFtQjtlQUFuQkE7O0lBR0FDLGtCQUFrQjtlQUFsQkE7O0lBY0FDLHVCQUF1QjtlQUF2QkE7O0lBRkFDLDBCQUEwQjtlQUExQkE7OztBQWxCTixNQUFNTix3QkFBd0I7QUFDOUIsTUFBTUMsMEJBQTBCO0FBQ2hDLE1BQU1DLHNCQUFzQjtBQUM1QixNQUFNQyxzQkFBc0I7QUFDNUIsTUFBTUosd0JBQXdCO0FBQzlCLE1BQU1ELHlCQUF5QjtBQUMvQixNQUFNTSxxQkFBcUI7QUFDM0IsTUFBTWYsc0JBQXNCO0FBQzVCLE1BQU1FLDJCQUEyQjtBQUNqQyxNQUFNQywwQkFBMEI7QUFDaEMsTUFBTUosOEJBQThCO0FBQ3BDLE1BQU1TLHdCQUF3QjtBQUM5QixNQUFNSixxQkFBcUI7QUFDM0IsTUFBTUUsdUJBQXVCO0FBQzdCLE1BQU1ELHVCQUF1QjtBQUM3QixNQUFNSiw0QkFBNEI7QUFDbEMsTUFBTUgsbUNBQ1g7QUFDSyxNQUFNbUIsNkJBQTZCO0FBQ25DLE1BQU1WLDRCQUE0QjtBQUNsQyxNQUFNUywwQkFBMEIifQ==

}),
2686: (function (__unused_webpack_module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    AUTO: function() {
        return AUTO;
    },
    BACKGROUND: function() {
        return BACKGROUND;
    },
    BACKGROUND_COLOR: function() {
        return BACKGROUND_COLOR;
    },
    BAR_DELIMITER: function() {
        return BAR_DELIMITER;
    },
    BORDER_COLOR: function() {
        return BORDER_COLOR;
    },
    BOUNDARY_SELECTOR: function() {
        return BOUNDARY_SELECTOR;
    },
    CHILDREN: function() {
        return CHILDREN;
    },
    COLON_DELIMITER: function() {
        return COLON_DELIMITER;
    },
    COLOR: function() {
        return COLOR;
    },
    COMMA_DELIMITER: function() {
        return COMMA_DELIMITER;
    },
    CONFIG_UNIT: function() {
        return CONFIG_UNIT;
    },
    CONFIG_VALUE: function() {
        return CONFIG_VALUE;
    },
    CONFIG_X_UNIT: function() {
        return CONFIG_X_UNIT;
    },
    CONFIG_X_VALUE: function() {
        return CONFIG_X_VALUE;
    },
    CONFIG_Y_UNIT: function() {
        return CONFIG_Y_UNIT;
    },
    CONFIG_Y_VALUE: function() {
        return CONFIG_Y_VALUE;
    },
    CONFIG_Z_UNIT: function() {
        return CONFIG_Z_UNIT;
    },
    CONFIG_Z_VALUE: function() {
        return CONFIG_Z_VALUE;
    },
    DISPLAY: function() {
        return DISPLAY;
    },
    EXPRESSION_ELEMENT: function() {
        return EXPRESSION_ELEMENT;
    },
    FILTER: function() {
        return FILTER;
    },
    FLEX: function() {
        return FLEX;
    },
    FONT_VARIATION_SETTINGS: function() {
        return FONT_VARIATION_SETTINGS;
    },
    HEIGHT: function() {
        return HEIGHT;
    },
    HTML_ELEMENT: function() {
        return HTML_ELEMENT;
    },
    IMMEDIATE_CHILDREN: function() {
        return IMMEDIATE_CHILDREN;
    },
    IX2_ID_DELIMITER: function() {
        return IX2_ID_DELIMITER;
    },
    OPACITY: function() {
        return OPACITY;
    },
    PARENT: function() {
        return PARENT;
    },
    PLAIN_OBJECT: function() {
        return PLAIN_OBJECT;
    },
    PRESERVE_3D: function() {
        return PRESERVE_3D;
    },
    RENDER_GENERAL: function() {
        return RENDER_GENERAL;
    },
    RENDER_PLUGIN: function() {
        return RENDER_PLUGIN;
    },
    RENDER_STYLE: function() {
        return RENDER_STYLE;
    },
    RENDER_TRANSFORM: function() {
        return RENDER_TRANSFORM;
    },
    ROTATE_X: function() {
        return ROTATE_X;
    },
    ROTATE_Y: function() {
        return ROTATE_Y;
    },
    ROTATE_Z: function() {
        return ROTATE_Z;
    },
    SCALE_3D: function() {
        return SCALE_3D;
    },
    SCALE_X: function() {
        return SCALE_X;
    },
    SCALE_Y: function() {
        return SCALE_Y;
    },
    SCALE_Z: function() {
        return SCALE_Z;
    },
    SIBLINGS: function() {
        return SIBLINGS;
    },
    SKEW: function() {
        return SKEW;
    },
    SKEW_X: function() {
        return SKEW_X;
    },
    SKEW_Y: function() {
        return SKEW_Y;
    },
    TRANSFORM: function() {
        return TRANSFORM;
    },
    TRANSLATE_3D: function() {
        return TRANSLATE_3D;
    },
    TRANSLATE_X: function() {
        return TRANSLATE_X;
    },
    TRANSLATE_Y: function() {
        return TRANSLATE_Y;
    },
    TRANSLATE_Z: function() {
        return TRANSLATE_Z;
    },
    WF_PAGE: function() {
        return WF_PAGE;
    },
    WIDTH: function() {
        return WIDTH;
    },
    WILL_CHANGE: function() {
        return WILL_CHANGE;
    },
    W_MOD_IX: function() {
        return W_MOD_IX;
    },
    W_MOD_JS: function() {
        return W_MOD_JS;
    }
});
const IX2_ID_DELIMITER = '|';
const WF_PAGE = 'data-wf-page';
const W_MOD_JS = 'w-mod-js';
const W_MOD_IX = 'w-mod-ix';
const BOUNDARY_SELECTOR = '.w-dyn-item';
const CONFIG_X_VALUE = 'xValue';
const CONFIG_Y_VALUE = 'yValue';
const CONFIG_Z_VALUE = 'zValue';
const CONFIG_VALUE = 'value';
const CONFIG_X_UNIT = 'xUnit';
const CONFIG_Y_UNIT = 'yUnit';
const CONFIG_Z_UNIT = 'zUnit';
const CONFIG_UNIT = 'unit';
const TRANSFORM = 'transform';
const TRANSLATE_X = 'translateX';
const TRANSLATE_Y = 'translateY';
const TRANSLATE_Z = 'translateZ';
const TRANSLATE_3D = 'translate3d';
const SCALE_X = 'scaleX';
const SCALE_Y = 'scaleY';
const SCALE_Z = 'scaleZ';
const SCALE_3D = 'scale3d';
const ROTATE_X = 'rotateX';
const ROTATE_Y = 'rotateY';
const ROTATE_Z = 'rotateZ';
const SKEW = 'skew';
const SKEW_X = 'skewX';
const SKEW_Y = 'skewY';
const OPACITY = 'opacity';
const FILTER = 'filter';
const FONT_VARIATION_SETTINGS = 'font-variation-settings';
const WIDTH = 'width';
const HEIGHT = 'height';
const BACKGROUND_COLOR = 'backgroundColor';
const BACKGROUND = 'background';
const BORDER_COLOR = 'borderColor';
const COLOR = 'color';
const DISPLAY = 'display';
const FLEX = 'flex';
const WILL_CHANGE = 'willChange';
const AUTO = 'AUTO';
const COMMA_DELIMITER = ',';
const COLON_DELIMITER = ':';
const BAR_DELIMITER = '|';
const CHILDREN = 'CHILDREN';
const IMMEDIATE_CHILDREN = 'IMMEDIATE_CHILDREN';
const SIBLINGS = 'SIBLINGS';
const PARENT = 'PARENT';
const PRESERVE_3D = 'preserve-3d';
const HTML_ELEMENT = 'HTML_ELEMENT';
const PLAIN_OBJECT = 'PLAIN_OBJECT';
const EXPRESSION_ELEMENT = 'EXPRESSION_ELEMENT';
const RENDER_TRANSFORM = 'RENDER_TRANSFORM';
const RENDER_GENERAL = 'RENDER_GENERAL';
const RENDER_STYLE = 'RENDER_STYLE';
const RENDER_PLUGIN = 'RENDER_PLUGIN';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC1jb25zdGFudHMvSVgyRW5naW5lQ29uc3RhbnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBJWDJfSURfREVMSU1JVEVSID0gJ3wnO1xuLyoqXG4gKiBTdG9yZXMgcGFnZUlkIG9mIHRoZSBjdXJyZW50IHBhZ2UsIHNvIGl0IGNhbiBiZSBhY2Nlc3NlZCBpbiB0aGUgSVgyQnJvd3NlckFwaVxuICovXG5leHBvcnQgY29uc3QgV0ZfUEFHRSA9ICdkYXRhLXdmLXBhZ2UnO1xuZXhwb3J0IGNvbnN0IFdfTU9EX0pTID0gJ3ctbW9kLWpzJztcbmV4cG9ydCBjb25zdCBXX01PRF9JWCA9ICd3LW1vZC1peCc7XG5leHBvcnQgY29uc3QgQk9VTkRBUllfU0VMRUNUT1IgPSAnLnctZHluLWl0ZW0nO1xuZXhwb3J0IGNvbnN0IENPTkZJR19YX1ZBTFVFID0gJ3hWYWx1ZSc7XG5leHBvcnQgY29uc3QgQ09ORklHX1lfVkFMVUUgPSAneVZhbHVlJztcbmV4cG9ydCBjb25zdCBDT05GSUdfWl9WQUxVRSA9ICd6VmFsdWUnO1xuZXhwb3J0IGNvbnN0IENPTkZJR19WQUxVRSA9ICd2YWx1ZSc7XG5leHBvcnQgY29uc3QgQ09ORklHX1hfVU5JVCA9ICd4VW5pdCc7XG5leHBvcnQgY29uc3QgQ09ORklHX1lfVU5JVCA9ICd5VW5pdCc7XG5leHBvcnQgY29uc3QgQ09ORklHX1pfVU5JVCA9ICd6VW5pdCc7XG5leHBvcnQgY29uc3QgQ09ORklHX1VOSVQgPSAndW5pdCc7XG5leHBvcnQgY29uc3QgVFJBTlNGT1JNID0gJ3RyYW5zZm9ybSc7XG5leHBvcnQgY29uc3QgVFJBTlNMQVRFX1ggPSAndHJhbnNsYXRlWCc7XG5leHBvcnQgY29uc3QgVFJBTlNMQVRFX1kgPSAndHJhbnNsYXRlWSc7XG5leHBvcnQgY29uc3QgVFJBTlNMQVRFX1ogPSAndHJhbnNsYXRlWic7XG5leHBvcnQgY29uc3QgVFJBTlNMQVRFXzNEID0gJ3RyYW5zbGF0ZTNkJztcbmV4cG9ydCBjb25zdCBTQ0FMRV9YID0gJ3NjYWxlWCc7XG5leHBvcnQgY29uc3QgU0NBTEVfWSA9ICdzY2FsZVknO1xuZXhwb3J0IGNvbnN0IFNDQUxFX1ogPSAnc2NhbGVaJztcbmV4cG9ydCBjb25zdCBTQ0FMRV8zRCA9ICdzY2FsZTNkJztcbmV4cG9ydCBjb25zdCBST1RBVEVfWCA9ICdyb3RhdGVYJztcbmV4cG9ydCBjb25zdCBST1RBVEVfWSA9ICdyb3RhdGVZJztcbmV4cG9ydCBjb25zdCBST1RBVEVfWiA9ICdyb3RhdGVaJztcbmV4cG9ydCBjb25zdCBTS0VXID0gJ3NrZXcnO1xuZXhwb3J0IGNvbnN0IFNLRVdfWCA9ICdza2V3WCc7XG5leHBvcnQgY29uc3QgU0tFV19ZID0gJ3NrZXdZJztcbmV4cG9ydCBjb25zdCBPUEFDSVRZID0gJ29wYWNpdHknO1xuZXhwb3J0IGNvbnN0IEZJTFRFUiA9ICdmaWx0ZXInO1xuZXhwb3J0IGNvbnN0IEZPTlRfVkFSSUFUSU9OX1NFVFRJTkdTID0gJ2ZvbnQtdmFyaWF0aW9uLXNldHRpbmdzJztcbmV4cG9ydCBjb25zdCBXSURUSCA9ICd3aWR0aCc7XG5leHBvcnQgY29uc3QgSEVJR0hUID0gJ2hlaWdodCc7XG5leHBvcnQgY29uc3QgQkFDS0dST1VORF9DT0xPUiA9ICdiYWNrZ3JvdW5kQ29sb3InO1xuZXhwb3J0IGNvbnN0IEJBQ0tHUk9VTkQgPSAnYmFja2dyb3VuZCc7XG5leHBvcnQgY29uc3QgQk9SREVSX0NPTE9SID0gJ2JvcmRlckNvbG9yJztcbmV4cG9ydCBjb25zdCBDT0xPUiA9ICdjb2xvcic7XG5leHBvcnQgY29uc3QgRElTUExBWSA9ICdkaXNwbGF5JztcbmV4cG9ydCBjb25zdCBGTEVYID0gJ2ZsZXgnO1xuZXhwb3J0IGNvbnN0IFdJTExfQ0hBTkdFID0gJ3dpbGxDaGFuZ2UnO1xuZXhwb3J0IGNvbnN0IEFVVE8gPSAnQVVUTyc7XG5leHBvcnQgY29uc3QgQ09NTUFfREVMSU1JVEVSID0gJywnO1xuZXhwb3J0IGNvbnN0IENPTE9OX0RFTElNSVRFUiA9ICc6JztcbmV4cG9ydCBjb25zdCBCQVJfREVMSU1JVEVSID0gJ3wnO1xuZXhwb3J0IGNvbnN0IENISUxEUkVOID0gJ0NISUxEUkVOJztcbmV4cG9ydCBjb25zdCBJTU1FRElBVEVfQ0hJTERSRU4gPSAnSU1NRURJQVRFX0NISUxEUkVOJztcbmV4cG9ydCBjb25zdCBTSUJMSU5HUyA9ICdTSUJMSU5HUyc7XG5leHBvcnQgY29uc3QgUEFSRU5UID0gJ1BBUkVOVCc7XG5leHBvcnQgY29uc3QgUFJFU0VSVkVfM0QgPSAncHJlc2VydmUtM2QnO1xuZXhwb3J0IGNvbnN0IEhUTUxfRUxFTUVOVCA9ICdIVE1MX0VMRU1FTlQnO1xuZXhwb3J0IGNvbnN0IFBMQUlOX09CSkVDVCA9ICdQTEFJTl9PQkpFQ1QnO1xuZXhwb3J0IGNvbnN0IEVYUFJFU1NJT05fRUxFTUVOVCA9ICdFWFBSRVNTSU9OX0VMRU1FTlQnO1xuZXhwb3J0IGNvbnN0IFJFTkRFUl9UUkFOU0ZPUk0gPSAnUkVOREVSX1RSQU5TRk9STSc7XG5leHBvcnQgY29uc3QgUkVOREVSX0dFTkVSQUwgPSAnUkVOREVSX0dFTkVSQUwnO1xuZXhwb3J0IGNvbnN0IFJFTkRFUl9TVFlMRSA9ICdSRU5ERVJfU1RZTEUnO1xuZXhwb3J0IGNvbnN0IFJFTkRFUl9QTFVHSU4gPSAnUkVOREVSX1BMVUdJTic7XG4iXSwibmFtZXMiOlsiQVVUTyIsIkJBQ0tHUk9VTkQiLCJCQUNLR1JPVU5EX0NPTE9SIiwiQkFSX0RFTElNSVRFUiIsIkJPUkRFUl9DT0xPUiIsIkJPVU5EQVJZX1NFTEVDVE9SIiwiQ0hJTERSRU4iLCJDT0xPTl9ERUxJTUlURVIiLCJDT0xPUiIsIkNPTU1BX0RFTElNSVRFUiIsIkNPTkZJR19VTklUIiwiQ09ORklHX1ZBTFVFIiwiQ09ORklHX1hfVU5JVCIsIkNPTkZJR19YX1ZBTFVFIiwiQ09ORklHX1lfVU5JVCIsIkNPTkZJR19ZX1ZBTFVFIiwiQ09ORklHX1pfVU5JVCIsIkNPTkZJR19aX1ZBTFVFIiwiRElTUExBWSIsIkVYUFJFU1NJT05fRUxFTUVOVCIsIkZJTFRFUiIsIkZMRVgiLCJGT05UX1ZBUklBVElPTl9TRVRUSU5HUyIsIkhFSUdIVCIsIkhUTUxfRUxFTUVOVCIsIklNTUVESUFURV9DSElMRFJFTiIsIklYMl9JRF9ERUxJTUlURVIiLCJPUEFDSVRZIiwiUEFSRU5UIiwiUExBSU5fT0JKRUNUIiwiUFJFU0VSVkVfM0QiLCJSRU5ERVJfR0VORVJBTCIsIlJFTkRFUl9QTFVHSU4iLCJSRU5ERVJfU1RZTEUiLCJSRU5ERVJfVFJBTlNGT1JNIiwiUk9UQVRFX1giLCJST1RBVEVfWSIsIlJPVEFURV9aIiwiU0NBTEVfM0QiLCJTQ0FMRV9YIiwiU0NBTEVfWSIsIlNDQUxFX1oiLCJTSUJMSU5HUyIsIlNLRVciLCJTS0VXX1giLCJTS0VXX1kiLCJUUkFOU0ZPUk0iLCJUUkFOU0xBVEVfM0QiLCJUUkFOU0xBVEVfWCIsIlRSQU5TTEFURV9ZIiwiVFJBTlNMQVRFX1oiLCJXRl9QQUdFIiwiV0lEVEgiLCJXSUxMX0NIQU5HRSIsIldfTU9EX0lYIiwiV19NT0RfSlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBMkNhQSxJQUFJO2VBQUpBOztJQU5BQyxVQUFVO2VBQVZBOztJQURBQyxnQkFBZ0I7ZUFBaEJBOztJQVVBQyxhQUFhO2VBQWJBOztJQVJBQyxZQUFZO2VBQVpBOztJQS9CQUMsaUJBQWlCO2VBQWpCQTs7SUF3Q0FDLFFBQVE7ZUFBUkE7O0lBRkFDLGVBQWU7ZUFBZkE7O0lBTkFDLEtBQUs7ZUFBTEE7O0lBS0FDLGVBQWU7ZUFBZkE7O0lBN0JBQyxXQUFXO2VBQVhBOztJQUpBQyxZQUFZO2VBQVpBOztJQUNBQyxhQUFhO2VBQWJBOztJQUpBQyxjQUFjO2VBQWRBOztJQUtBQyxhQUFhO2VBQWJBOztJQUpBQyxjQUFjO2VBQWRBOztJQUtBQyxhQUFhO2VBQWJBOztJQUpBQyxjQUFjO2VBQWRBOztJQThCQUMsT0FBTztlQUFQQTs7SUFjQUMsa0JBQWtCO2VBQWxC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

}),
262: (function (__unused_webpack_module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ActionAppliesTo: function() {
        return ActionAppliesTo;
    },
    ActionTypeConsts: function() {
        return ActionTypeConsts;
    }
});
const ActionTypeConsts = {
    TRANSFORM_MOVE: 'TRANSFORM_MOVE',
    TRANSFORM_SCALE: 'TRANSFORM_SCALE',
    TRANSFORM_ROTATE: 'TRANSFORM_ROTATE',
    TRANSFORM_SKEW: 'TRANSFORM_SKEW',
    STYLE_OPACITY: 'STYLE_OPACITY',
    STYLE_SIZE: 'STYLE_SIZE',
    STYLE_FILTER: 'STYLE_FILTER',
    STYLE_FONT_VARIATION: 'STYLE_FONT_VARIATION',
    STYLE_BACKGROUND_COLOR: 'STYLE_BACKGROUND_COLOR',
    STYLE_BORDER: 'STYLE_BORDER',
    STYLE_TEXT_COLOR: 'STYLE_TEXT_COLOR',
    OBJECT_VALUE: 'OBJECT_VALUE',
    PLUGIN_LOTTIE: 'PLUGIN_LOTTIE',
    PLUGIN_SPLINE: 'PLUGIN_SPLINE',
    PLUGIN_RIVE: 'PLUGIN_RIVE',
    PLUGIN_VARIABLE: 'PLUGIN_VARIABLE',
    GENERAL_DISPLAY: 'GENERAL_DISPLAY',
    GENERAL_START_ACTION: 'GENERAL_START_ACTION',
    GENERAL_CONTINUOUS_ACTION: 'GENERAL_CONTINUOUS_ACTION',
    // TODO: Clean these up below because they're not used at this time
    GENERAL_COMBO_CLASS: 'GENERAL_COMBO_CLASS',
    GENERAL_STOP_ACTION: 'GENERAL_STOP_ACTION',
    GENERAL_LOOP: 'GENERAL_LOOP',
    STYLE_BOX_SHADOW: 'STYLE_BOX_SHADOW'
};
const ActionAppliesTo = {
    ELEMENT: 'ELEMENT',
    ELEMENT_CLASS: 'ELEMENT_CLASS',
    TRIGGER_ELEMENT: 'TRIGGER_ELEMENT'
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC1jb25zdGFudHMvYW5pbWF0aW9uLWFjdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFjdGlvblR5cGVDb25zdHMgPSB7XG4gIFRSQU5TRk9STV9NT1ZFOiAnVFJBTlNGT1JNX01PVkUnIGFzIGNvbnN0LFxuICBUUkFOU0ZPUk1fU0NBTEU6ICdUUkFOU0ZPUk1fU0NBTEUnIGFzIGNvbnN0LFxuICBUUkFOU0ZPUk1fUk9UQVRFOiAnVFJBTlNGT1JNX1JPVEFURScgYXMgY29uc3QsXG4gIFRSQU5TRk9STV9TS0VXOiAnVFJBTlNGT1JNX1NLRVcnIGFzIGNvbnN0LFxuICBTVFlMRV9PUEFDSVRZOiAnU1RZTEVfT1BBQ0lUWScgYXMgY29uc3QsXG4gIFNUWUxFX1NJWkU6ICdTVFlMRV9TSVpFJyBhcyBjb25zdCxcbiAgU1RZTEVfRklMVEVSOiAnU1RZTEVfRklMVEVSJyBhcyBjb25zdCxcbiAgU1RZTEVfRk9OVF9WQVJJQVRJT046ICdTVFlMRV9GT05UX1ZBUklBVElPTicgYXMgY29uc3QsXG4gIFNUWUxFX0JBQ0tHUk9VTkRfQ09MT1I6ICdTVFlMRV9CQUNLR1JPVU5EX0NPTE9SJyBhcyBjb25zdCxcbiAgU1RZTEVfQk9SREVSOiAnU1RZTEVfQk9SREVSJyBhcyBjb25zdCxcbiAgU1RZTEVfVEVYVF9DT0xPUjogJ1NUWUxFX1RFWFRfQ09MT1InIGFzIGNvbnN0LFxuICBPQkpFQ1RfVkFMVUU6ICdPQkpFQ1RfVkFMVUUnIGFzIGNvbnN0LFxuICBQTFVHSU5fTE9UVElFOiAnUExVR0lOX0xPVFRJRScgYXMgY29uc3QsXG4gIFBMVUdJTl9TUExJTkU6ICdQTFVHSU5fU1BMSU5FJyBhcyBjb25zdCxcbiAgUExVR0lOX1JJVkU6ICdQTFVHSU5fUklWRScgYXMgY29uc3QsXG4gIFBMVUdJTl9WQVJJQUJMRTogJ1BMVUdJTl9WQVJJQUJMRScgYXMgY29uc3QsXG4gIEdFTkVSQUxfRElTUExBWTogJ0dFTkVSQUxfRElTUExBWScgYXMgY29uc3QsXG4gIEdFTkVSQUxfU1RBUlRfQUNUSU9OOiAnR0VORVJBTF9TVEFSVF9BQ1RJT04nIGFzIGNvbnN0LFxuICBHRU5FUkFMX0NPTlRJTlVPVVNfQUNUSU9OOiAnR0VORVJBTF9DT05USU5VT1VTX0FDVElPTicgYXMgY29uc3QsXG5cbiAgLy8gVE9ETzogQ2xlYW4gdGhlc2UgdXAgYmVsb3cgYmVjYXVzZSB0aGV5J3JlIG5vdCB1c2VkIGF0IHRoaXMgdGltZVxuICBHRU5FUkFMX0NPTUJPX0NMQVNTOiAnR0VORVJBTF9DT01CT19DTEFTUycgYXMgY29uc3QsXG4gIEdFTkVSQUxfU1RPUF9BQ1RJT046ICdHRU5FUkFMX1NUT1BfQUNUSU9OJyBhcyBjb25zdCxcbiAgR0VORVJBTF9MT09QOiAnR0VORVJBTF9MT09QJyBhcyBjb25zdCxcbiAgU1RZTEVfQk9YX1NIQURPVzogJ1NUWUxFX0JPWF9TSEFET1cnIGFzIGNvbnN0LFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgQWN0aW9uVHlwZUlkVHlwZSA9IGtleW9mIHR5cGVvZiBBY3Rpb25UeXBlQ29uc3RzO1xuXG5leHBvcnQgY29uc3QgQWN0aW9uQXBwbGllc1RvID0ge1xuICBFTEVNRU5UOiAnRUxFTUVOVCcgYXMgY29uc3QsXG4gIEVMRU1FTlRfQ0xBU1M6ICdFTEVNRU5UX0NMQVNTJyBhcyBjb25zdCxcbiAgVFJJR0dFUl9FTEVNRU5UOiAnVFJJR0dFUl9FTEVNRU5UJyBhcyBjb25zdCxcbn0gYXMgY29uc3Q7XG4iXSwibmFtZXMiOlsiQWN0aW9uQXBwbGllc1RvIiwiQWN0aW9uVHlwZUNvbnN0cyIsIlRSQU5TRk9STV9NT1ZFIiwiVFJBTlNGT1JNX1NDQUxFIiwiVFJBTlNGT1JNX1JPVEFURSIsIlRSQU5TRk9STV9TS0VXIiwiU1RZTEVfT1BBQ0lUWSIsIlNUWUxFX1NJWkUiLCJTVFlMRV9GSUxURVIiLCJTVFlMRV9GT05UX1ZBUklBVElPTiIsIlNUWUxFX0JBQ0tHUk9VTkRfQ09MT1IiLCJTVFlMRV9CT1JERVIiLCJTVFlMRV9URVhUX0NPTE9SIiwiT0JKRUNUX1ZBTFVFIiwiUExVR0lOX0xPVFRJRSIsIlBMVUdJTl9TUExJTkUiLCJQTFVHSU5fUklWRSIsIlBMVUdJTl9WQVJJQUJMRSIsIkdFTkVSQUxfRElTUExBWSIsIkdFTkVSQUxfU1RBUlRfQUNUSU9OIiwiR0VORVJBTF9DT05USU5VT1VTX0FDVElPTiIsIkdFTkVSQUxfQ09NQk9fQ0xBU1MiLCJHRU5FUkFMX1NUT1BfQUNUSU9OIiwiR0VORVJBTF9MT09QIiwiU1RZTEVfQk9YX1NIQURPVyIsIkVMRU1FTlQiLCJFTEVNRU5UX0NMQVNTIiwiVFJJR0dFUl9FTEVNRU5UIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQThCYUEsZUFBZTtlQUFmQTs7SUE5QkFDLGdCQUFnQjtlQUFoQkE7OztBQUFOLE1BQU1BLG1CQUFtQjtJQUM5QkMsZ0JBQWdCO0lBQ2hCQyxpQkFBaUI7SUFDakJDLGtCQUFrQjtJQUNsQkMsZ0JBQWdCO0lBQ2hCQyxlQUFlO0lBQ2ZDLFlBQVk7SUFDWkMsY0FBYztJQUNkQyxzQkFBc0I7SUFDdEJDLHdCQUF3QjtJQUN4QkMsY0FBYztJQUNkQyxrQkFBa0I7SUFDbEJDLGNBQWM7SUFDZEMsZUFBZTtJQUNmQyxlQUFlO0lBQ2ZDLGFBQWE7SUFDYkMsaUJBQWlCO0lBQ2pCQyxpQkFBaUI7SUFDakJDLHNCQUFzQjtJQUN0QkMsMkJBQTJCO0lBRTNCLG1FQUFtRTtJQUNuRUMscUJBQXFCO0lBQ3JCQyxxQkFBcUI7SUFDckJDLGNBQWM7SUFDZEMsa0JBQWtCO0FBQ3BCO0FBSU8sTUFBTXhCLGtCQUFrQjtJQUM3QnlCLFNBQVM7SUFDVEMsZUFBZTtJQUNmQyxpQkFBaUI7QUFDbkIifQ==

}),
7087: (function (__unused_webpack_module, exports, __webpack_require__) {
"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ActionTypeConsts: function() {
        return _animationactions.ActionTypeConsts;
    },
    IX2EngineActionTypes: function() {
        return _IX2EngineActionTypes;
    },
    IX2EngineConstants: function() {
        return _IX2EngineConstants;
    },
    QuickEffectIds: function() {
        return _triggerevents.QuickEffectIds;
    }
});
const _triggerevents = _export_star(__webpack_require__(1833), exports);
const _animationactions = _export_star(__webpack_require__(262), exports);
_export_star(__webpack_require__(8704), exports);
_export_star(__webpack_require__(3213), exports);
const _IX2EngineActionTypes = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(8023));
const _IX2EngineConstants = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(2686));
function _export_star(from, to) {
    Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
            Object.defineProperty(to, k, {
                enumerable: true,
                get: function() {
                    return from[k];
                }
            });
        }
    });
    return from;
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC1jb25zdGFudHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi90cmlnZ2VyLWV2ZW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2FuaW1hdGlvbi1hY3Rpb25zJztcbmV4cG9ydCAqIGZyb20gJy4vdHJpZ2dlci1pbnRlcmFjdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWR1Y2VkLW1vdGlvbic7XG5cbmltcG9ydCAqIGFzIElYMkVuZ2luZUFjdGlvblR5cGVzIGZyb20gJy4vSVgyRW5naW5lQWN0aW9uVHlwZXMnO1xuaW1wb3J0ICogYXMgSVgyRW5naW5lQ29uc3RhbnRzIGZyb20gJy4vSVgyRW5naW5lQ29uc3RhbnRzJztcbmV4cG9ydCB7SVgyRW5naW5lQWN0aW9uVHlwZXMsIElYMkVuZ2luZUNvbnN0YW50c307XG5cbmV4cG9ydCB7QWN0aW9uVHlwZUNvbnN0c30gZnJvbSAnLi9hbmltYXRpb24tYWN0aW9ucyc7XG5leHBvcnQge1F1aWNrRWZmZWN0SWRzfSBmcm9tICcuL3RyaWdnZXItZXZlbnRzJztcbiJdLCJuYW1lcyI6WyJBY3Rpb25UeXBlQ29uc3RzIiwiSVgyRW5naW5lQWN0aW9uVHlwZXMiLCJJWDJFbmdpbmVDb25zdGFudHMiLCJRdWlja0VmZmVjdElkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFTUUEsZ0JBQWdCO2VBQWhCQSxrQ0FBZ0I7O0lBRmhCQyxvQkFBb0I7ZUFBcEJBOztJQUFzQkMsa0JBQWtCO2VBQWxCQTs7SUFHdEJDLGNBQWM7ZUFBZEEsNkJBQWM7Ozs0Q0FWUjsrQ0FDQTtxQkFDQTtxQkFDQTs4RUFFd0I7NEVBQ0YifQ==

}),
3213: (function (__unused_webpack_module, exports, __webpack_require__) {
"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ReducedMotionTypes", ({
    enumerable: true,
    get: function() {
        return ReducedMotionTypes;
    }
}));
const _animationactions = __webpack_require__(262);
const { TRANSFORM_MOVE, TRANSFORM_SCALE, TRANSFORM_ROTATE, TRANSFORM_SKEW, STYLE_SIZE, STYLE_FILTER, STYLE_FONT_VARIATION } = _animationactions.ActionTypeConsts;
const ReducedMotionTypes = {
    [TRANSFORM_MOVE]: true,
    [TRANSFORM_SCALE]: true,
    [TRANSFORM_ROTATE]: true,
    [TRANSFORM_SKEW]: true,
    [STYLE_SIZE]: true,
    [STYLE_FILTER]: true,
    [STYLE_FONT_VARIATION]: true
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC1jb25zdGFudHMvcmVkdWNlZC1tb3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBY3Rpb25UeXBlQ29uc3RzfSBmcm9tICcuL2FuaW1hdGlvbi1hY3Rpb25zJztcblxuY29uc3Qge1xuICBUUkFOU0ZPUk1fTU9WRSxcbiAgVFJBTlNGT1JNX1NDQUxFLFxuICBUUkFOU0ZPUk1fUk9UQVRFLFxuICBUUkFOU0ZPUk1fU0tFVyxcbiAgU1RZTEVfU0laRSxcbiAgU1RZTEVfRklMVEVSLFxuICBTVFlMRV9GT05UX1ZBUklBVElPTixcbn0gPSBBY3Rpb25UeXBlQ29uc3RzO1xuXG4vKipcbiAqIFJlZHVjZWQgTW90aW9uOiBBY3Rpb24gdHlwZXMgdG8gYnlwYXNzIGR1cmluZyBgcHJlZmVycy1yZWR1Y2VkLW1vdGlvbmBcbiAqL1xuXG5leHBvcnQgY29uc3QgUmVkdWNlZE1vdGlvblR5cGVzID0ge1xuICBbVFJBTlNGT1JNX01PVkVdOiB0cnVlLFxuICBbVFJBTlNGT1JNX1NDQUxFXTogdHJ1ZSxcbiAgW1RSQU5TRk9STV9ST1RBVEVdOiB0cnVlLFxuICBbVFJBTlNGT1JNX1NLRVddOiB0cnVlLFxuICBbU1RZTEVfU0laRV06IHRydWUsXG4gIFtTVFlMRV9GSUxURVJdOiB0cnVlLFxuICBbU1RZTEVfRk9OVF9WQVJJQVRJT05dOiB0cnVlLFxufSBhcyBjb25zdDtcbiJdLCJuYW1lcyI6WyJSZWR1Y2VkTW90aW9uVHlwZXMiLCJUUkFOU0ZPUk1fTU9WRSIsIlRSQU5TRk9STV9TQ0FMRSIsIlRSQU5TRk9STV9ST1RBVEUiLCJUUkFOU0ZPUk1fU0tFVyIsIlNUWUxFX1NJWkUiLCJTVFlMRV9GSUxURVIiLCJTVFlMRV9GT05UX1ZBUklBVElPTiIsIkFjdGlvblR5cGVDb25zdHMiXSwibWFwcGluZ3MiOiI7Ozs7K0JBZ0JhQTs7O2VBQUFBOzs7a0NBaEJrQjtBQUUvQixNQUFNLEVBQ0pDLGNBQWMsRUFDZEMsZUFBZSxFQUNmQyxnQkFBZ0IsRUFDaEJDLGNBQWMsRUFDZEMsVUFBVSxFQUNWQyxZQUFZLEVBQ1pDLG9CQUFvQixFQUNyQixHQUFHQyxrQ0FBZ0I7QUFNYixNQUFNUixxQkFBcUI7SUFDaEMsQ0FBQ0MsZUFBZSxFQUFFO0lBQ2xCLENBQUNDLGdCQUFnQixFQUFFO0lBQ25CLENBQUNDLGlCQUFpQixFQUFFO0lBQ3BCLENBQUNDLGVBQWUsRUFBRTtJQUNsQixDQUFDQyxXQUFXLEVBQUU7SUFDZCxDQUFDQyxhQUFhLEVBQUU7SUFDaEIsQ0FBQ0MscUJBQXFCLEVBQUU7QUFDMUIifQ==

}),
1833: (function (__unused_webpack_module, exports) {
"use strict";
/**
 * Event Type IDs
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    EventAppliesTo: function() {
        return EventAppliesTo;
    },
    EventBasedOn: function() {
        return EventBasedOn;
    },
    EventContinuousMouseAxes: function() {
        return EventContinuousMouseAxes;
    },
    EventLimitAffectedElements: function() {
        return EventLimitAffectedElements;
    },
    EventTypeConsts: function() {
        return EventTypeConsts;
    },
    QuickEffectDirectionConsts: function() {
        return QuickEffectDirectionConsts;
    },
    QuickEffectIds: function() {
        return QuickEffectIds;
    }
});
const EventTypeConsts = {
    NAVBAR_OPEN: 'NAVBAR_OPEN',
    NAVBAR_CLOSE: 'NAVBAR_CLOSE',
    TAB_ACTIVE: 'TAB_ACTIVE',
    TAB_INACTIVE: 'TAB_INACTIVE',
    SLIDER_ACTIVE: 'SLIDER_ACTIVE',
    SLIDER_INACTIVE: 'SLIDER_INACTIVE',
    DROPDOWN_OPEN: 'DROPDOWN_OPEN',
    DROPDOWN_CLOSE: 'DROPDOWN_CLOSE',
    MOUSE_CLICK: 'MOUSE_CLICK',
    MOUSE_SECOND_CLICK: 'MOUSE_SECOND_CLICK',
    MOUSE_DOWN: 'MOUSE_DOWN',
    MOUSE_UP: 'MOUSE_UP',
    MOUSE_OVER: 'MOUSE_OVER',
    MOUSE_OUT: 'MOUSE_OUT',
    MOUSE_MOVE: 'MOUSE_MOVE',
    MOUSE_MOVE_IN_VIEWPORT: 'MOUSE_MOVE_IN_VIEWPORT',
    SCROLL_INTO_VIEW: 'SCROLL_INTO_VIEW',
    SCROLL_OUT_OF_VIEW: 'SCROLL_OUT_OF_VIEW',
    SCROLLING_IN_VIEW: 'SCROLLING_IN_VIEW',
    ECOMMERCE_CART_OPEN: 'ECOMMERCE_CART_OPEN',
    ECOMMERCE_CART_CLOSE: 'ECOMMERCE_CART_CLOSE',
    PAGE_START: 'PAGE_START',
    PAGE_FINISH: 'PAGE_FINISH',
    PAGE_SCROLL_UP: 'PAGE_SCROLL_UP',
    PAGE_SCROLL_DOWN: 'PAGE_SCROLL_DOWN',
    PAGE_SCROLL: 'PAGE_SCROLL'
};
const EventAppliesTo = {
    ELEMENT: 'ELEMENT',
    CLASS: 'CLASS',
    PAGE: 'PAGE'
};
const EventBasedOn = {
    ELEMENT: 'ELEMENT',
    VIEWPORT: 'VIEWPORT'
};
const EventContinuousMouseAxes = {
    X_AXIS: 'X_AXIS',
    Y_AXIS: 'Y_AXIS'
};
const EventLimitAffectedElements = {
    CHILDREN: 'CHILDREN',
    SIBLINGS: 'SIBLINGS',
    IMMEDIATE_CHILDREN: 'IMMEDIATE_CHILDREN'
};
const QuickEffectIds = {
    FADE_EFFECT: 'FADE_EFFECT',
    SLIDE_EFFECT: 'SLIDE_EFFECT',
    GROW_EFFECT: 'GROW_EFFECT',
    SHRINK_EFFECT: 'SHRINK_EFFECT',
    SPIN_EFFECT: 'SPIN_EFFECT',
    FLY_EFFECT: 'FLY_EFFECT',
    POP_EFFECT: 'POP_EFFECT',
    FLIP_EFFECT: 'FLIP_EFFECT',
    JIGGLE_EFFECT: 'JIGGLE_EFFECT',
    PULSE_EFFECT: 'PULSE_EFFECT',
    DROP_EFFECT: 'DROP_EFFECT',
    BLINK_EFFECT: 'BLINK_EFFECT',
    BOUNCE_EFFECT: 'BOUNCE_EFFECT',
    FLIP_LEFT_TO_RIGHT_EFFECT: 'FLIP_LEFT_TO_RIGHT_EFFECT',
    FLIP_RIGHT_TO_LEFT_EFFECT: 'FLIP_RIGHT_TO_LEFT_EFFECT',
    RUBBER_BAND_EFFECT: 'RUBBER_BAND_EFFECT',
    JELLO_EFFECT: 'JELLO_EFFECT',
    GROW_BIG_EFFECT: 'GROW_BIG_EFFECT',
    SHRINK_BIG_EFFECT: 'SHRINK_BIG_EFFECT',
    PLUGIN_LOTTIE_EFFECT: 'PLUGIN_LOTTIE_EFFECT'
};
const QuickEffectDirectionConsts = {
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
    BOTTOM: 'BOTTOM',
    TOP: 'TOP',
    BOTTOM_LEFT: 'BOTTOM_LEFT',
    BOTTOM_RIGHT: 'BOTTOM_RIGHT',
    TOP_RIGHT: 'TOP_RIGHT',
    TOP_LEFT: 'TOP_LEFT',
    CLOCKWISE: 'CLOCKWISE',
    COUNTER_CLOCKWISE: 'COUNTER_CLOCKWISE'
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC1jb25zdGFudHMvdHJpZ2dlci1ldmVudHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBFdmVudCBUeXBlIElEc1xuICovXG5cbmV4cG9ydCBjb25zdCBFdmVudFR5cGVDb25zdHMgPSB7XG4gIE5BVkJBUl9PUEVOOiAnTkFWQkFSX09QRU4nIGFzIGNvbnN0LFxuICBOQVZCQVJfQ0xPU0U6ICdOQVZCQVJfQ0xPU0UnIGFzIGNvbnN0LFxuICBUQUJfQUNUSVZFOiAnVEFCX0FDVElWRScgYXMgY29uc3QsXG4gIFRBQl9JTkFDVElWRTogJ1RBQl9JTkFDVElWRScgYXMgY29uc3QsXG4gIFNMSURFUl9BQ1RJVkU6ICdTTElERVJfQUNUSVZFJyBhcyBjb25zdCxcbiAgU0xJREVSX0lOQUNUSVZFOiAnU0xJREVSX0lOQUNUSVZFJyBhcyBjb25zdCxcbiAgRFJPUERPV05fT1BFTjogJ0RST1BET1dOX09QRU4nIGFzIGNvbnN0LFxuICBEUk9QRE9XTl9DTE9TRTogJ0RST1BET1dOX0NMT1NFJyBhcyBjb25zdCxcbiAgTU9VU0VfQ0xJQ0s6ICdNT1VTRV9DTElDSycgYXMgY29uc3QsXG4gIE1PVVNFX1NFQ09ORF9DTElDSzogJ01PVVNFX1NFQ09ORF9DTElDSycgYXMgY29uc3QsXG4gIE1PVVNFX0RPV046ICdNT1VTRV9ET1dOJyBhcyBjb25zdCxcbiAgTU9VU0VfVVA6ICdNT1VTRV9VUCcgYXMgY29uc3QsXG4gIE1PVVNFX09WRVI6ICdNT1VTRV9PVkVSJyBhcyBjb25zdCxcbiAgTU9VU0VfT1VUOiAnTU9VU0VfT1VUJyBhcyBjb25zdCxcbiAgTU9VU0VfTU9WRTogJ01PVVNFX01PVkUnIGFzIGNvbnN0LFxuICBNT1VTRV9NT1ZFX0lOX1ZJRVdQT1JUOiAnTU9VU0VfTU9WRV9JTl9WSUVXUE9SVCcgYXMgY29uc3QsXG4gIFNDUk9MTF9JTlRPX1ZJRVc6ICdTQ1JPTExfSU5UT19WSUVXJyBhcyBjb25zdCxcbiAgU0NST0xMX09VVF9PRl9WSUVXOiAnU0NST0xMX09VVF9PRl9WSUVXJyBhcyBjb25zdCxcbiAgU0NST0xMSU5HX0lOX1ZJRVc6ICdTQ1JPTExJTkdfSU5fVklFVycgYXMgY29uc3QsXG4gIEVDT01NRVJDRV9DQVJUX09QRU46ICdFQ09NTUVSQ0VfQ0FSVF9PUEVOJyBhcyBjb25zdCxcbiAgRUNPTU1FUkNFX0NBUlRfQ0xPU0U6ICdFQ09NTUVSQ0VfQ0FSVF9DTE9TRScgYXMgY29uc3QsXG4gIFBBR0VfU1RBUlQ6ICdQQUdFX1NUQVJUJyBhcyBjb25zdCxcbiAgUEFHRV9GSU5JU0g6ICdQQUdFX0ZJTklTSCcgYXMgY29uc3QsXG4gIFBBR0VfU0NST0xMX1VQOiAnUEFHRV9TQ1JPTExfVVAnIGFzIGNvbnN0LFxuICBQQUdFX1NDUk9MTF9ET1dOOiAnUEFHRV9TQ1JPTExfRE9XTicgYXMgY29uc3QsXG4gIFBBR0VfU0NST0xMOiAnUEFHRV9TQ1JPTEwnIGFzIGNvbnN0LFxufSBhcyBjb25zdDtcblxuLyoqXG4gKiBFdmVudCBDb25maWcgRW51bXNcbiAqL1xuXG5leHBvcnQgY29uc3QgRXZlbnRBcHBsaWVzVG8gPSB7XG4gIEVMRU1FTlQ6ICdFTEVNRU5UJyBhcyBjb25zdCxcbiAgQ0xBU1M6ICdDTEFTUycgYXMgY29uc3QsXG4gIFBBR0U6ICdQQUdFJyBhcyBjb25zdCxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBFdmVudEJhc2VkT24gPSB7XG4gIEVMRU1FTlQ6ICdFTEVNRU5UJyBhcyBjb25zdCxcbiAgVklFV1BPUlQ6ICdWSUVXUE9SVCcgYXMgY29uc3QsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgRXZlbnRDb250aW51b3VzTW91c2VBeGVzID0ge1xuICBYX0FYSVM6ICdYX0FYSVMnIGFzIGNvbnN0LFxuICBZX0FYSVM6ICdZX0FYSVMnIGFzIGNvbnN0LFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IEV2ZW50TGltaXRBZmZlY3RlZEVsZW1lbnRzID0ge1xuICBDSElMRFJFTjogJ0NISUxEUkVOJyBhcyBjb25zdCxcbiAgU0lCTElOR1M6ICdTSUJMSU5HUycgYXMgY29uc3QsXG4gIElNTUVESUFURV9DSElMRFJFTjogJ0lNTUVESUFURV9DSElMRFJFTicgYXMgY29uc3QsXG59IGFzIGNvbnN0O1xuXG4vKipcbiAqIFF1aWNrIEVmZmVjdCBFbnVtc1xuICovXG5leHBvcnQgY29uc3QgUXVpY2tFZmZlY3RJZHMgPSB7XG4gIEZBREVfRUZGRUNUOiAnRkFERV9FRkZFQ1QnIGFzIGNvbnN0LFxuICBTTElERV9FRkZFQ1Q6ICdTTElERV9FRkZFQ1QnIGFzIGNvbnN0LFxuICBHUk9XX0VGRkVDVDogJ0dST1dfRUZGRUNUJyBhcyBjb25zdCxcbiAgU0hSSU5LX0VGRkVDVDogJ1NIUklOS19FRkZFQ1QnIGFzIGNvbnN0LFxuICBTUElOX0VGRkVDVDogJ1NQSU5fRUZGRUNUJyBhcyBjb25zdCxcbiAgRkxZX0VGRkVDVDogJ0ZMWV9FRkZFQ1QnIGFzIGNvbnN0LFxuICBQT1BfRUZGRUNUOiAnUE9QX0VGRkVDVCcgYXMgY29uc3QsXG4gIEZMSVBfRUZGRUNUOiAnRkxJUF9FRkZFQ1QnIGFzIGNvbnN0LFxuICBKSUdHTEVfRUZGRUNUOiAnSklHR0xFX0VGRkVDVCcgYXMgY29uc3QsXG4gIFBVTFNFX0VGRkVDVDogJ1BVTFNFX0VGRkVDVCcgYXMgY29uc3QsXG4gIERST1BfRUZGRUNUOiAnRFJPUF9FRkZFQ1QnIGFzIGNvbnN0LFxuICBCTElOS19FRkZFQ1Q6ICdCTElOS19FRkZFQ1QnIGFzIGNvbnN0LFxuICBCT1VOQ0VfRUZGRUNUOiAnQk9VTkNFX0VGRkVDVCcgYXMgY29uc3QsXG4gIEZMSVBfTEVGVF9UT19SSUdIVF9FRkZFQ1Q6ICdGTElQX0xFRlRfVE9fUklHSFRfRUZGRUNUJyBhcyBjb25zdCxcbiAgRkxJUF9SSUdIVF9UT19MRUZUX0VGRkVDVDogJ0ZMSVBfUklHSFRfVE9fTEVGVF9FRkZFQ1QnIGFzIGNvbnN0LFxuICBSVUJCRVJfQkFORF9FRkZFQ1Q6ICdSVUJCRVJfQkFORF9FRkZFQ1QnIGFzIGNvbnN0LFxuICBKRUxMT19FRkZFQ1Q6ICdKRUxMT19FRkZFQ1QnIGFzIGNvbnN0LFxuICBHUk9XX0JJR19FRkZFQ1Q6ICdHUk9XX0JJR19FRkZFQ1QnIGFzIGNvbnN0LFxuICBTSFJJTktfQklHX0VGRkVDVDogJ1NIUklOS19CSUdfRUZGRUNUJyBhcyBjb25zdCxcbiAgUExVR0lOX0xPVFRJRV9FRkZFQ1Q6ICdQTFVHSU5fTE9UVElFX0VGRkVDVCcgYXMgY29uc3QsXG59IGFzIGNvbnN0O1xuXG4vKipcbiAqIFF1aWNrIEVmZmVjdCBEaXJlY3Rpb24gRW51bXNcbiAqL1xuZXhwb3J0IGNvbnN0IFF1aWNrRWZmZWN0RGlyZWN0aW9uQ29uc3RzID0ge1xuICBMRUZUOiAnTEVGVCcgYXMgY29uc3QsXG4gIFJJR0hUOiAnUklHSFQnIGFzIGNvbnN0LFxuICBCT1RUT006ICdCT1RUT00nIGFzIGNvbnN0LFxuICBUT1A6ICdUT1AnIGFzIGNvbnN0LFxuICBCT1RUT01fTEVGVDogJ0JPVFRPTV9MRUZUJyBhcyBjb25zdCxcbiAgQk9UVE9NX1JJR0hUOiAnQk9UVE9NX1JJR0hUJyBhcyBjb25zdCxcbiAgVE9QX1JJR0hUOiAnVE9QX1JJR0hUJyBhcyBjb25zdCxcbiAgVE9QX0xFRlQ6ICdUT1BfTEVGVCcgYXMgY29uc3QsXG4gIENMT0NLV0lTRTogJ0NMT0NLV0lTRScgYXMgY29uc3QsXG4gIENPVU5URVJfQ0xPQ0tXSVNFOiAnQ09VTlRFUl9DTE9DS1dJU0UnIGFzIGNvbnN0LFxufSBhcyBjb25zdDtcbiJdLCJuYW1lcyI6WyJFdmVudEFwcGxpZXNUbyIsIkV2ZW50QmFzZWRPbiIsIkV2ZW50Q29udGludW91c01vdXNlQXhlcyIsIkV2ZW50TGltaXRBZmZlY3RlZEVsZW1lbnRzIiwiRXZlbnRUeXBlQ29uc3RzIiwiUXVpY2tFZmZlY3REaXJlY3Rpb25Db25zdHMiLCJRdWlja0VmZmVjdElkcyIsIk5BVkJBUl9PUEVOIiwiTkFWQkFSX0NMT1NFIiwiVEFCX0FDVElWRSIsIlRBQl9JTkFDVElWRSIsIlNMSURFUl9BQ1RJVkUiLCJTTElERVJfSU5BQ1RJVkUiLCJEUk9QRE9XTl9PUEVOIiwiRFJPUERPV05fQ0xPU0UiLCJNT1VTRV9DTElDSyIsIk1PVVNFX1NFQ09ORF9DTElDSyIsIk1PVVNFX0RPV04iLCJNT1VTRV9VUCIsIk1PVVNFX09WRVIiLCJNT1VTRV9PVVQiLCJNT1VTRV9NT1ZFIiwiTU9VU0VfTU9WRV9JTl9WSUVXUE9SVCIsIlNDUk9MTF9JTlRPX1ZJRVciLCJTQ1JPTExfT1VUX09GX1ZJRVciLCJTQ1JPTExJTkdfSU5fVklFVyIsIkVDT01NRVJDRV9DQVJUX09QRU4iLCJFQ09NTUVSQ0VfQ0FSVF9DTE9TRSIsIlBBR0VfU1RBUlQiLCJQQUdFX0ZJTklTSCIsIlBBR0VfU0NST0xMX1VQIiwiUEFHRV9TQ1JPTExfRE9XTiIsIlBBR0VfU0NST0xMIiwiRUxFTUVOVCIsIkNMQVNTIiwiUEFHRSIsIlZJRVdQT1JUIiwiWF9BWElTIiwiWV9BWElTIiwiQ0hJTERSRU4iLCJTSUJMSU5HUyIsIklNTUVESUFURV9DSElMRFJFTiIsIkZBREVfRUZGRUNUIiwiU0xJREVfRUZGRUNUIiwiR1JPV19FRkZFQ1QiLCJTSFJJTktfRUZGRUNUIiwiU1BJTl9FRkZFQ1QiLCJGTFlfRUZGRUNUIiwiUE9QX0VGRkVDVCIsIkZMSVBfRUZGRUNUIiwiSklHR0xFX0VGRkVDVCIsIlBVTFNFX0VGRkVDVCIsIkRST1BfRUZGRUNUIiwiQkxJTktfRUZGRUNUIiwiQk9VTkNFX0VGRkVDVCIsIkZMSVBfTEVGVF9UT19SSUdIVF9FRkZFQ1QiLCJGTElQX1JJR0hUX1RPX0xFRlRfRUZGRUNUIiwiUlVCQkVSX0JBTkRfRUZGRUNUIiwiSkVMTE9fRUZGRUNUIiwiR1JPV19CSUdfRUZGRUNUIiwiU0hSSU5LX0JJR19FRkZFQ1QiLCJQTFVHSU5fTE9UVElFX0VGRkVDVCIsIkxFRlQiLCJSSUdIVCIsIkJPVFRPTSIsIlRPUCIsIkJPVFRPTV9MRUZUIiwiQk9UVE9NX1JJR0hUIiwiVE9QX1JJR0hUIiwiVE9QX0xFRlQiLCJDTE9DS1dJU0UiLCJDT1VOVEVSX0NMT0NLV0lTRSJdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUM7Ozs7Ozs7Ozs7O0lBbUNZQSxjQUFjO2VBQWRBOztJQU1BQyxZQUFZO2VBQVpBOztJQUtBQyx3QkFBd0I7ZUFBeEJBOztJQUtBQywwQkFBMEI7ZUFBMUJBOztJQWpEQUMsZUFBZTtlQUFmQTs7SUFvRkFDLDBCQUEwQjtlQUExQkE7O0lBMUJBQyxjQUFjO2VBQWRBOzs7QUExRE4sTUFBTUYsa0JBQWtCO0lBQzdCRyxhQUFhO0lBQ2JDLGNBQWM7SUFDZEMsWUFBWTtJQUNaQyxjQUFjO0lBQ2RDLGVBQWU7SUFDZkMsaUJBQWlCO0lBQ2pCQyxlQUFlO0lBQ2ZDLGdCQUFnQjtJQUNoQkMsYUFBYTtJQUNiQyxvQkFBb0I7SUFDcEJDLFlBQVk7SUFDWkMsVUFBVTtJQUNWQyxZQUFZO0lBQ1pDLFdBQVc7SUFDWEMsWUFBWTtJQUNaQyx3QkFBd0I7SUFDeEJDLGtCQUFrQjtJQUNsQkMsb0JBQW9CO0lBQ3BCQyxtQkFBbUI7SUFDbkJDLHFCQUFxQjtJQUNyQkMsc0JBQXNCO0lBQ3RCQyxZQUFZO0lBQ1pDLGFBQWE7SUFDYkMsZ0JBQWdCO0lBQ2hCQyxrQkFBa0I7SUFDbEJDLGFBQWE7QUFDZjtBQU1PLE1BQU1oQyxpQkFBaUI7SUFDNUJpQyxTQUFTO0lBQ1RDLE9BQU87SUFDUEMsTUFBTTtBQUNSO0FBRU8sTUFBTWxDLGVBQWU7SUFDMUJnQyxTQUFTO0lBQ1RHLFVBQVU7QUFDWjtBQUVPLE1BQU1sQywyQkFBMkI7SUFDdENtQyxRQUFRO0lBQ1JDLFFBQVE7QUFDVjtBQUVPLE1BQU1uQyw2QkFBNkI7SUFDeENvQyxVQUFVO0lBQ1ZDLFVBQVU7SUFDVkMsb0JBQW9CO0FBQ3RCO0FBS08sTUFBTW5DLGlCQUFpQjtJQUM1Qm9DLGFBQWE7SUFDYkMsY0FBYztJQUNkQyxhQUFhO0lBQ2JDLGVBQWU7SUFDZkMsYUFBYTtJQUNiQyxZQUFZO0lBQ1pDLFlBQVk7SUFDWkMsYUFBYTtJQUNiQyxlQUFlO0lBQ2ZDLGNBQWM7SUFDZEMsYUFBYTtJQUNiQyxjQUFjO0lBQ2RDLGVBQWU7SUFDZkMsMkJBQTJCO0lBQzNCQywyQkFBMkI7SUFDM0JDLG9CQUFvQjtJQUNwQkMsY0FBYztJQUNkQyxpQkFBaUI7SUFDakJDLG1CQUFtQjtJQUNuQkMsc0JBQXNCO0FBQ3hCO0FBS08sTUFBTXhELDZCQUE2QjtJQUN4Q3lELE1BQU07SUFDTkMsT0FBTztJQUNQQyxRQUFRO0lBQ1JDLEtBQUs7SUFDTEMsYUFBYTtJQUNiQyxjQUFjO0lBQ2RDLFdBQVc7SUFDWEMsVUFBVTtJQUNWQyxXQUFXO0lBQ1hDLG1CQUFtQjtBQUNyQiJ9

}),
8704: (function (__unused_webpack_module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "InteractionTypeConsts", ({
    enumerable: true,
    get: function() {
        return InteractionTypeConsts;
    }
}));
const InteractionTypeConsts = {
    MOUSE_CLICK_INTERACTION: 'MOUSE_CLICK_INTERACTION',
    MOUSE_HOVER_INTERACTION: 'MOUSE_HOVER_INTERACTION',
    MOUSE_MOVE_INTERACTION: 'MOUSE_MOVE_INTERACTION',
    SCROLL_INTO_VIEW_INTERACTION: 'SCROLL_INTO_VIEW_INTERACTION',
    SCROLLING_IN_VIEW_INTERACTION: 'SCROLLING_IN_VIEW_INTERACTION',
    MOUSE_MOVE_IN_VIEWPORT_INTERACTION: 'MOUSE_MOVE_IN_VIEWPORT_INTERACTION',
    PAGE_IS_SCROLLING_INTERACTION: 'PAGE_IS_SCROLLING_INTERACTION',
    PAGE_LOAD_INTERACTION: 'PAGE_LOAD_INTERACTION',
    PAGE_SCROLLED_INTERACTION: 'PAGE_SCROLLED_INTERACTION',
    NAVBAR_INTERACTION: 'NAVBAR_INTERACTION',
    DROPDOWN_INTERACTION: 'DROPDOWN_INTERACTION',
    ECOMMERCE_CART_INTERACTION: 'ECOMMERCE_CART_INTERACTION',
    TAB_INTERACTION: 'TAB_INTERACTION',
    SLIDER_INTERACTION: 'SLIDER_INTERACTION'
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC1jb25zdGFudHMvdHJpZ2dlci1pbnRlcmFjdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEludGVyYWN0aW9uVHlwZUNvbnN0cyA9IHtcbiAgTU9VU0VfQ0xJQ0tfSU5URVJBQ1RJT046ICdNT1VTRV9DTElDS19JTlRFUkFDVElPTicgYXMgY29uc3QsXG4gIE1PVVNFX0hPVkVSX0lOVEVSQUNUSU9OOiAnTU9VU0VfSE9WRVJfSU5URVJBQ1RJT04nIGFzIGNvbnN0LFxuICBNT1VTRV9NT1ZFX0lOVEVSQUNUSU9OOiAnTU9VU0VfTU9WRV9JTlRFUkFDVElPTicgYXMgY29uc3QsXG4gIFNDUk9MTF9JTlRPX1ZJRVdfSU5URVJBQ1RJT046ICdTQ1JPTExfSU5UT19WSUVXX0lOVEVSQUNUSU9OJyBhcyBjb25zdCxcbiAgU0NST0xMSU5HX0lOX1ZJRVdfSU5URVJBQ1RJT046ICdTQ1JPTExJTkdfSU5fVklFV19JTlRFUkFDVElPTicgYXMgY29uc3QsXG4gIE1PVVNFX01PVkVfSU5fVklFV1BPUlRfSU5URVJBQ1RJT046XG4gICAgJ01PVVNFX01PVkVfSU5fVklFV1BPUlRfSU5URVJBQ1RJT04nIGFzIGNvbnN0LFxuICBQQUdFX0lTX1NDUk9MTElOR19JTlRFUkFDVElPTjogJ1BBR0VfSVNfU0NST0xMSU5HX0lOVEVSQUNUSU9OJyBhcyBjb25zdCxcbiAgUEFHRV9MT0FEX0lOVEVSQUNUSU9OOiAnUEFHRV9MT0FEX0lOVEVSQUNUSU9OJyBhcyBjb25zdCxcbiAgUEFHRV9TQ1JPTExFRF9JTlRFUkFDVElPTjogJ1BBR0VfU0NST0xMRURfSU5URVJBQ1RJT04nIGFzIGNvbnN0LFxuICBOQVZCQVJfSU5URVJBQ1RJT046ICdOQVZCQVJfSU5URVJBQ1RJT04nIGFzIGNvbnN0LFxuICBEUk9QRE9XTl9JTlRFUkFDVElPTjogJ0RST1BET1dOX0lOVEVSQUNUSU9OJyBhcyBjb25zdCxcbiAgRUNPTU1FUkNFX0NBUlRfSU5URVJBQ1RJT046ICdFQ09NTUVSQ0VfQ0FSVF9JTlRFUkFDVElPTicgYXMgY29uc3QsXG4gIFRBQl9JTlRFUkFDVElPTjogJ1RBQl9JTlRFUkFDVElPTicgYXMgY29uc3QsXG4gIFNMSURFUl9JTlRFUkFDVElPTjogJ1NMSURFUl9JTlRFUkFDVElPTicgYXMgY29uc3QsXG59IGFzIGNvbnN0O1xuIl0sIm5hbWVzIjpbIkludGVyYWN0aW9uVHlwZUNvbnN0cyIsIk1PVVNFX0NMSUNLX0lOVEVSQUNUSU9OIiwiTU9VU0VfSE9WRVJfSU5URVJBQ1RJT04iLCJNT1VTRV9NT1ZFX0lOVEVSQUNUSU9OIiwiU0NST0xMX0lOVE9fVklFV19JTlRFUkFDVElPTiIsIlNDUk9MTElOR19JTl9WSUVXX0lOVEVSQUNUSU9OIiwiTU9VU0VfTU9WRV9JTl9WSUVXUE9SVF9JTlRFUkFDVElPTiIsIlBBR0VfSVNfU0NST0xMSU5HX0lOVEVSQUNUSU9OIiwiUEFHRV9MT0FEX0lOVEVSQUNUSU9OIiwiUEFHRV9TQ1JPTExFRF9JTlRFUkFDVElPTiIsIk5BVkJBUl9JTlRFUkFDVElPTiIsIkRST1BET1dOX0lOVEVSQUNUSU9OIiwiRUNPTU1FUkNFX0NBUlRfSU5URVJBQ1RJT04iLCJUQUJfSU5URVJBQ1RJT04iLCJTTElERVJfSU5URVJBQ1RJT04iXSwibWFwcGluZ3MiOiI7Ozs7K0JBQWFBOzs7ZUFBQUE7OztBQUFOLE1BQU1BLHdCQUF3QjtJQUNuQ0MseUJBQXlCO0lBQ3pCQyx5QkFBeUI7SUFDekJDLHdCQUF3QjtJQUN4QkMsOEJBQThCO0lBQzlCQywrQkFBK0I7SUFDL0JDLG9DQUNFO0lBQ0ZDLCtCQUErQjtJQUMvQkMsdUJBQXVCO0lBQ3ZCQywyQkFBMkI7SUFDM0JDLG9CQUFvQjtJQUNwQkMsc0JBQXNCO0lBQ3RCQyw0QkFBNEI7SUFDNUJDLGlCQUFpQjtJQUNqQkMsb0JBQW9CO0FBQ3RCIn0=

}),
380: (function (__unused_webpack_module, exports) {
"use strict";
// Big List of Colors
// ------------------
// <https://www.w3.org/TR/css-color-4/#named-colors>

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizeColor", ({
    enumerable: true,
    get: function() {
        return normalizeColor;
    }
}));
const colorNamesObj = {
    aliceblue: '#F0F8FF',
    antiquewhite: '#FAEBD7',
    aqua: '#00FFFF',
    aquamarine: '#7FFFD4',
    azure: '#F0FFFF',
    beige: '#F5F5DC',
    bisque: '#FFE4C4',
    black: '#000000',
    blanchedalmond: '#FFEBCD',
    blue: '#0000FF',
    blueviolet: '#8A2BE2',
    brown: '#A52A2A',
    burlywood: '#DEB887',
    cadetblue: '#5F9EA0',
    chartreuse: '#7FFF00',
    chocolate: '#D2691E',
    coral: '#FF7F50',
    cornflowerblue: '#6495ED',
    cornsilk: '#FFF8DC',
    crimson: '#DC143C',
    cyan: '#00FFFF',
    darkblue: '#00008B',
    darkcyan: '#008B8B',
    darkgoldenrod: '#B8860B',
    darkgray: '#A9A9A9',
    darkgreen: '#006400',
    darkgrey: '#A9A9A9',
    darkkhaki: '#BDB76B',
    darkmagenta: '#8B008B',
    darkolivegreen: '#556B2F',
    darkorange: '#FF8C00',
    darkorchid: '#9932CC',
    darkred: '#8B0000',
    darksalmon: '#E9967A',
    darkseagreen: '#8FBC8F',
    darkslateblue: '#483D8B',
    darkslategray: '#2F4F4F',
    darkslategrey: '#2F4F4F',
    darkturquoise: '#00CED1',
    darkviolet: '#9400D3',
    deeppink: '#FF1493',
    deepskyblue: '#00BFFF',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1E90FF',
    firebrick: '#B22222',
    floralwhite: '#FFFAF0',
    forestgreen: '#228B22',
    fuchsia: '#FF00FF',
    gainsboro: '#DCDCDC',
    ghostwhite: '#F8F8FF',
    gold: '#FFD700',
    goldenrod: '#DAA520',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#ADFF2F',
    grey: '#808080',
    honeydew: '#F0FFF0',
    hotpink: '#FF69B4',
    indianred: '#CD5C5C',
    indigo: '#4B0082',
    ivory: '#FFFFF0',
    khaki: '#F0E68C',
    lavender: '#E6E6FA',
    lavenderblush: '#FFF0F5',
    lawngreen: '#7CFC00',
    lemonchiffon: '#FFFACD',
    lightblue: '#ADD8E6',
    lightcoral: '#F08080',
    lightcyan: '#E0FFFF',
    lightgoldenrodyellow: '#FAFAD2',
    lightgray: '#D3D3D3',
    lightgreen: '#90EE90',
    lightgrey: '#D3D3D3',
    lightpink: '#FFB6C1',
    lightsalmon: '#FFA07A',
    lightseagreen: '#20B2AA',
    lightskyblue: '#87CEFA',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#B0C4DE',
    lightyellow: '#FFFFE0',
    lime: '#00FF00',
    limegreen: '#32CD32',
    linen: '#FAF0E6',
    magenta: '#FF00FF',
    maroon: '#800000',
    mediumaquamarine: '#66CDAA',
    mediumblue: '#0000CD',
    mediumorchid: '#BA55D3',
    mediumpurple: '#9370DB',
    mediumseagreen: '#3CB371',
    mediumslateblue: '#7B68EE',
    mediumspringgreen: '#00FA9A',
    mediumturquoise: '#48D1CC',
    mediumvioletred: '#C71585',
    midnightblue: '#191970',
    mintcream: '#F5FFFA',
    mistyrose: '#FFE4E1',
    moccasin: '#FFE4B5',
    navajowhite: '#FFDEAD',
    navy: '#000080',
    oldlace: '#FDF5E6',
    olive: '#808000',
    olivedrab: '#6B8E23',
    orange: '#FFA500',
    orangered: '#FF4500',
    orchid: '#DA70D6',
    palegoldenrod: '#EEE8AA',
    palegreen: '#98FB98',
    paleturquoise: '#AFEEEE',
    palevioletred: '#DB7093',
    papayawhip: '#FFEFD5',
    peachpuff: '#FFDAB9',
    peru: '#CD853F',
    pink: '#FFC0CB',
    plum: '#DDA0DD',
    powderblue: '#B0E0E6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#FF0000',
    rosybrown: '#BC8F8F',
    royalblue: '#4169E1',
    saddlebrown: '#8B4513',
    salmon: '#FA8072',
    sandybrown: '#F4A460',
    seagreen: '#2E8B57',
    seashell: '#FFF5EE',
    sienna: '#A0522D',
    silver: '#C0C0C0',
    skyblue: '#87CEEB',
    slateblue: '#6A5ACD',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#FFFAFA',
    springgreen: '#00FF7F',
    steelblue: '#4682B4',
    tan: '#D2B48C',
    teal: '#008080',
    thistle: '#D8BFD8',
    tomato: '#FF6347',
    turquoise: '#40E0D0',
    violet: '#EE82EE',
    wheat: '#F5DEB3',
    white: '#FFFFFF',
    whitesmoke: '#F5F5F5',
    yellow: '#FFFF00',
    yellowgreen: '#9ACD32'
};
function normalizeColor(inputColor) {
    let red;
    let green;
    let blue;
    let alpha = 1; // Default alpha to 1
    const rawColor = inputColor.replace(/\s/g, '').toLowerCase();
    const namedColor = typeof colorNamesObj[rawColor] === 'string' ? colorNamesObj[rawColor].toLowerCase() : null;
    const cleanColor = namedColor || rawColor;
    if (cleanColor.startsWith('#')) {
        const hex = cleanColor.substring(1);
        if (hex.length === 3 || hex.length === 4) {
            red = parseInt(hex[0] + hex[0], 16);
            green = parseInt(hex[1] + hex[1], 16);
            blue = parseInt(hex[2] + hex[2], 16);
            if (hex.length === 4) {
                alpha = parseInt(hex[3] + hex[3], 16) / 255;
            }
        } else if (hex.length === 6 || hex.length === 8) {
            red = parseInt(hex.substring(0, 2), 16);
            green = parseInt(hex.substring(2, 4), 16);
            blue = parseInt(hex.substring(4, 6), 16);
            if (hex.length === 8) {
                alpha = parseInt(hex.substring(6, 8), 16) / 255;
            }
        }
    } else if (cleanColor.startsWith('rgba')) {
        const rgbaValues = cleanColor.match(/rgba\(([^)]+)\)/)[1].split(',');
        red = parseInt(rgbaValues[0], 10);
        green = parseInt(rgbaValues[1], 10);
        blue = parseInt(rgbaValues[2], 10);
        alpha = parseFloat(rgbaValues[3]);
    } else if (cleanColor.startsWith('rgb')) {
        const rgbValues = cleanColor.match(/rgb\(([^)]+)\)/)[1].split(',');
        red = parseInt(rgbValues[0], 10);
        green = parseInt(rgbValues[1], 10);
        blue = parseInt(rgbValues[2], 10);
    } else if (cleanColor.startsWith('hsla')) {
        const hslaValues = cleanColor.match(/hsla\(([^)]+)\)/)[1].split(',');
        const h = parseFloat(hslaValues[0]);
        const s = parseFloat(hslaValues[1].replace('%', '')) / 100;
        const l = parseFloat(hslaValues[2].replace('%', '')) / 100;
        alpha = parseFloat(hslaValues[3]);
        // Convert HSL to RGB
        const C = (1 - Math.abs(2 * l - 1)) * s;
        const X = C * (1 - Math.abs(h / 60 % 2 - 1));
        const m = l - C / 2;
        let R;
        let G;
        let B;
        if (h >= 0 && h < 60) {
            R = C;
            G = X;
            B = 0;
        } else if (h >= 60 && h < 120) {
            R = X;
            G = C;
            B = 0;
        } else if (h >= 120 && h < 180) {
            R = 0;
            G = C;
            B = X;
        } else if (h >= 180 && h < 240) {
            R = 0;
            G = X;
            B = C;
        } else if (h >= 240 && h < 300) {
            R = X;
            G = 0;
            B = C;
        } else {
            R = C;
            G = 0;
            B = X;
        }
        red = Math.round((R + m) * 255);
        green = Math.round((G + m) * 255);
        blue = Math.round((B + m) * 255);
    } else if (cleanColor.startsWith('hsl')) {
        const hslValues = cleanColor.match(/hsl\(([^)]+)\)/)[1].split(',');
        const h = parseFloat(hslValues[0]);
        const s = parseFloat(hslValues[1].replace('%', '')) / 100;
        const l = parseFloat(hslValues[2].replace('%', '')) / 100;
        // Convert HSL to RGB (without alpha)
        const C = (1 - Math.abs(2 * l - 1)) * s;
        const X = C * (1 - Math.abs(h / 60 % 2 - 1));
        const m = l - C / 2;
        let R;
        let G;
        let B;
        if (h >= 0 && h < 60) {
            R = C;
            G = X;
            B = 0;
        } else if (h >= 60 && h < 120) {
            R = X;
            G = C;
            B = 0;
        } else if (h >= 120 && h < 180) {
            R = 0;
            G = C;
            B = X;
        } else if (h >= 180 && h < 240) {
            R = 0;
            G = X;
            B = C;
        } else if (h >= 240 && h < 300) {
            R = X;
            G = 0;
            B = C;
        } else {
            R = C;
            G = 0;
            B = X;
        }
        red = Math.round((R + m) * 255);
        green = Math.round((G + m) * 255);
        blue = Math.round((B + m) * 255);
    }
    if (Number.isNaN(red) || Number.isNaN(green) || Number.isNaN(blue)) {
        throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${inputColor}'`);
    }
    return {
        red,
        green,
        blue,
        alpha
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC11dGlscy9ub3JtYWxpemVDb2xvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCaWcgTGlzdCBvZiBDb2xvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gPGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3MtY29sb3ItNC8jbmFtZWQtY29sb3JzPlxuY29uc3QgY29sb3JOYW1lc09iaiA9IHtcbiAgYWxpY2VibHVlOiAnI0YwRjhGRicsXG4gIGFudGlxdWV3aGl0ZTogJyNGQUVCRDcnLFxuICBhcXVhOiAnIzAwRkZGRicsXG4gIGFxdWFtYXJpbmU6ICcjN0ZGRkQ0JyxcbiAgYXp1cmU6ICcjRjBGRkZGJyxcbiAgYmVpZ2U6ICcjRjVGNURDJyxcbiAgYmlzcXVlOiAnI0ZGRTRDNCcsXG4gIGJsYWNrOiAnIzAwMDAwMCcsXG4gIGJsYW5jaGVkYWxtb25kOiAnI0ZGRUJDRCcsXG4gIGJsdWU6ICcjMDAwMEZGJyxcbiAgYmx1ZXZpb2xldDogJyM4QTJCRTInLFxuICBicm93bjogJyNBNTJBMkEnLFxuICBidXJseXdvb2Q6ICcjREVCODg3JyxcbiAgY2FkZXRibHVlOiAnIzVGOUVBMCcsXG4gIGNoYXJ0cmV1c2U6ICcjN0ZGRjAwJyxcbiAgY2hvY29sYXRlOiAnI0QyNjkxRScsXG4gIGNvcmFsOiAnI0ZGN0Y1MCcsXG4gIGNvcm5mbG93ZXJibHVlOiAnIzY0OTVFRCcsXG4gIGNvcm5zaWxrOiAnI0ZGRjhEQycsXG4gIGNyaW1zb246ICcjREMxNDNDJyxcbiAgY3lhbjogJyMwMEZGRkYnLFxuICBkYXJrYmx1ZTogJyMwMDAwOEInLFxuICBkYXJrY3lhbjogJyMwMDhCOEInLFxuICBkYXJrZ29sZGVucm9kOiAnI0I4ODYwQicsXG4gIGRhcmtncmF5OiAnI0E5QTlBOScsXG4gIGRhcmtncmVlbjogJyMwMDY0MDAnLFxuICBkYXJrZ3JleTogJyNBOUE5QTknLFxuICBkYXJra2hha2k6ICcjQkRCNzZCJyxcbiAgZGFya21hZ2VudGE6ICcjOEIwMDhCJyxcbiAgZGFya29saXZlZ3JlZW46ICcjNTU2QjJGJyxcbiAgZGFya29yYW5nZTogJyNGRjhDMDAnLFxuICBkYXJrb3JjaGlkOiAnIzk5MzJDQycsXG4gIGRhcmtyZWQ6ICcjOEIwMDAwJyxcbiAgZGFya3NhbG1vbjogJyNFOTk2N0EnLFxuICBkYXJrc2VhZ3JlZW46ICcjOEZCQzhGJyxcbiAgZGFya3NsYXRlYmx1ZTogJyM0ODNEOEInLFxuICBkYXJrc2xhdGVncmF5OiAnIzJGNEY0RicsXG4gIGRhcmtzbGF0ZWdyZXk6ICcjMkY0RjRGJyxcbiAgZGFya3R1cnF1b2lzZTogJyMwMENFRDEnLFxuICBkYXJrdmlvbGV0OiAnIzk0MDBEMycsXG4gIGRlZXBwaW5rOiAnI0ZGMTQ5MycsXG4gIGRlZXBza3libHVlOiAnIzAwQkZGRicsXG4gIGRpbWdyYXk6ICcjNjk2OTY5JyxcbiAgZGltZ3JleTogJyM2OTY5NjknLFxuICBkb2RnZXJibHVlOiAnIzFFOTBGRicsXG4gIGZpcmVicmljazogJyNCMjIyMjInLFxuICBmbG9yYWx3aGl0ZTogJyNGRkZBRjAnLFxuICBmb3Jlc3RncmVlbjogJyMyMjhCMjInLFxuICBmdWNoc2lhOiAnI0ZGMDBGRicsXG4gIGdhaW5zYm9ybzogJyNEQ0RDREMnLFxuICBnaG9zdHdoaXRlOiAnI0Y4RjhGRicsXG4gIGdvbGQ6ICcjRkZENzAwJyxcbiAgZ29sZGVucm9kOiAnI0RBQTUyMCcsXG4gIGdyYXk6ICcjODA4MDgwJyxcbiAgZ3JlZW46ICcjMDA4MDAwJyxcbiAgZ3JlZW55ZWxsb3c6ICcjQURGRjJGJyxcbiAgZ3JleTogJyM4MDgwODAnLFxuICBob25leWRldzogJyNGMEZGRjAnLFxuICBob3RwaW5rOiAnI0ZGNjlCNCcsXG4gIGluZGlhbnJlZDogJyNDRDVDNUMnLFxuICBpbmRpZ286ICcjNEIwMDgyJyxcbiAgaXZvcnk6ICcjRkZGRkYwJyxcbiAga2hha2k6ICcjRjBFNjhDJyxcbiAgbGF2ZW5kZXI6ICcjRTZFNkZBJyxcbiAgbGF2ZW5kZXJibHVzaDogJyNGRkYwRjUnLFxuICBsYXduZ3JlZW46ICcjN0NGQzAwJyxcbiAgbGVtb25jaGlmZm9uOiAnI0ZGRkFDRCcsXG4gIGxpZ2h0Ymx1ZTogJyNBREQ4RTYnLFxuICBsaWdodGNvcmFsOiAnI0YwODA4MCcsXG4gIGxpZ2h0Y3lhbjogJyNFMEZGRkYnLFxuICBsaWdodGdvbGRlbnJvZHllbGxvdzogJyNGQUZBRDInLFxuICBsaWdodGdyYXk6ICcjRDNEM0QzJyxcbiAgbGlnaHRncmVlbjogJyM5MEVFOTAnLFxuICBsaWdodGdyZXk6ICcjRDNEM0QzJyxcbiAgbGlnaHRwaW5rOiAnI0ZGQjZDMScsXG4gIGxpZ2h0c2FsbW9uOiAnI0ZGQTA3QScsXG4gIGxpZ2h0c2VhZ3JlZW46ICcjMjBCMkFBJyxcbiAgbGlnaHRza3libHVlOiAnIzg3Q0VGQScsXG4gIGxpZ2h0c2xhdGVncmF5OiAnIzc3ODg5OScsXG4gIGxpZ2h0c2xhdGVncmV5OiAnIzc3ODg5OScsXG4gIGxpZ2h0c3RlZWxibHVlOiAnI0IwQzRERScsXG4gIGxpZ2h0eWVsbG93OiAnI0ZGRkZFMCcsXG4gIGxpbWU6ICcjMDBGRjAwJyxcbiAgbGltZWdyZWVuOiAnIzMyQ0QzMicsXG4gIGxpbmVuOiAnI0ZBRjBFNicsXG4gIG1hZ2VudGE6ICcjRkYwMEZGJyxcbiAgbWFyb29uOiAnIzgwMDAwMCcsXG4gIG1lZGl1bWFxdWFtYXJpbmU6ICcjNjZDREFBJyxcbiAgbWVkaXVtYmx1ZTogJyMwMDAwQ0QnLFxuICBtZWRpdW1vcmNoaWQ6ICcjQkE1NUQzJyxcbiAgbWVkaXVtcHVycGxlOiAnIzkzNzBEQicsXG4gIG1lZGl1bXNlYWdyZWVuOiAnIzNDQjM3MScsXG4gIG1lZGl1bXNsYXRlYmx1ZTogJyM3QjY4RUUnLFxuICBtZWRpdW1zcHJpbmdncmVlbjogJyMwMEZBOUEnLFxuICBtZWRpdW10dXJxdW9pc2U6ICcjNDhEMUNDJyxcbiAgbWVkaXVtdmlvbGV0cmVkOiAnI0M3MTU4NScsXG4gIG1pZG5pZ2h0Ymx1ZTogJyMxOTE5NzAnLFxuICBtaW50Y3JlYW06ICcjRjVGRkZBJyxcbiAgbWlzdHlyb3NlOiAnI0ZGRTRFMScsXG4gIG1vY2Nhc2luOiAnI0ZGRTRCNScsXG4gIG5hdmFqb3doaXRlOiAnI0ZGREVBRCcsXG4gIG5hdnk6ICcjMDAwMDgwJyxcbiAgb2xkbGFjZTogJyNGREY1RTYnLFxuICBvbGl2ZTogJyM4MDgwMDAnLFxuICBvbGl2ZWRyYWI6ICcjNkI4RTIzJyxcbiAgb3JhbmdlOiAnI0ZGQTUwMCcsXG4gIG9yYW5nZXJlZDogJyNGRjQ1MDAnLFxuICBvcmNoaWQ6ICcjREE3MEQ2JyxcbiAgcGFsZWdvbGRlbnJvZDogJyNFRUU4QUEnLFxuICBwYWxlZ3JlZW46ICcjOThGQjk4JyxcbiAgcGFsZXR1cnF1b2lzZTogJyNBRkVFRUUnLFxuICBwYWxldmlvbGV0cmVkOiAnI0RCNzA5MycsXG4gIHBhcGF5YXdoaXA6ICcjRkZFRkQ1JyxcbiAgcGVhY2hwdWZmOiAnI0ZGREFCOScsXG4gIHBlcnU6ICcjQ0Q4NTNGJyxcbiAgcGluazogJyNGRkMwQ0InLFxuICBwbHVtOiAnI0REQTBERCcsXG4gIHBvd2RlcmJsdWU6ICcjQjBFMEU2JyxcbiAgcHVycGxlOiAnIzgwMDA4MCcsXG4gIHJlYmVjY2FwdXJwbGU6ICcjNjYzMzk5JyxcbiAgcmVkOiAnI0ZGMDAwMCcsXG4gIHJvc3licm93bjogJyNCQzhGOEYnLFxuICByb3lhbGJsdWU6ICcjNDE2OUUxJyxcbiAgc2FkZGxlYnJvd246ICcjOEI0NTEzJyxcbiAgc2FsbW9uOiAnI0ZBODA3MicsXG4gIHNhbmR5YnJvd246ICcjRjRBNDYwJyxcbiAgc2VhZ3JlZW46ICcjMkU4QjU3JyxcbiAgc2Vhc2hlbGw6ICcjRkZGNUVFJyxcbiAgc2llbm5hOiAnI0EwNTIyRCcsXG4gIHNpbHZlcjogJyNDMEMwQzAnLFxuICBza3libHVlOiAnIzg3Q0VFQicsXG4gIHNsYXRlYmx1ZTogJyM2QTVBQ0QnLFxuICBzbGF0ZWdyYXk6ICcjNzA4MDkwJyxcbiAgc2xhdGVncmV5OiAnIzcwODA5MCcsXG4gIHNub3c6ICcjRkZGQUZBJyxcbiAgc3ByaW5nZ3JlZW46ICcjMDBGRjdGJyxcbiAgc3RlZWxibHVlOiAnIzQ2ODJCNCcsXG4gIHRhbjogJyNEMkI0OEMnLFxuICB0ZWFsOiAnIzAwODA4MCcsXG4gIHRoaXN0bGU6ICcjRDhCRkQ4JyxcbiAgdG9tYXRvOiAnI0ZGNjM0NycsXG4gIHR1cnF1b2lzZTogJyM0MEUwRDAnLFxuICB2aW9sZXQ6ICcjRUU4MkVFJyxcbiAgd2hlYXQ6ICcjRjVERUIzJyxcbiAgd2hpdGU6ICcjRkZGRkZGJyxcbiAgd2hpdGVzbW9rZTogJyNGNUY1RjUnLFxuICB5ZWxsb3c6ICcjRkZGRjAwJyxcbiAgeWVsbG93Z3JlZW46ICcjOUFDRDMyJyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVDb2xvcihpbnB1dENvbG9yKSB7XG4gIGxldCByZWQ7XG4gIGxldCBncmVlbjtcbiAgbGV0IGJsdWU7XG4gIGxldCBhbHBoYSA9IDE7IC8vIERlZmF1bHQgYWxwaGEgdG8gMVxuICBjb25zdCByYXdDb2xvciA9IGlucHV0Q29sb3IucmVwbGFjZSgvXFxzL2csICcnKS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBuYW1lZENvbG9yID1cbiAgICB0eXBlb2YgY29sb3JOYW1lc09ialtyYXdDb2xvcl0gPT09ICdzdHJpbmcnXG4gICAgICA/IGNvbG9yTmFtZXNPYmpbcmF3Q29sb3JdLnRvTG93ZXJDYXNlKClcbiAgICAgIDogbnVsbDtcbiAgY29uc3QgY2xlYW5Db2xvciA9IG5hbWVkQ29sb3IgfHwgcmF3Q29sb3I7XG5cbiAgaWYgKGNsZWFuQ29sb3Iuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgY29uc3QgaGV4ID0gY2xlYW5Db2xvci5zdWJzdHJpbmcoMSk7XG5cbiAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMyB8fCBoZXgubGVuZ3RoID09PSA0KSB7XG4gICAgICByZWQgPSBwYXJzZUludChoZXhbMF0gKyBoZXhbMF0sIDE2KTtcbiAgICAgIGdyZWVuID0gcGFyc2VJbnQoaGV4WzFdICsgaGV4WzFdLCAxNik7XG4gICAgICBibHVlID0gcGFyc2VJbnQoaGV4WzJdICsgaGV4WzJdLCAxNik7XG4gICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gNCkge1xuICAgICAgICBhbHBoYSA9IHBhcnNlSW50KGhleFszXSArIGhleFszXSwgMTYpIC8gMjU1O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaGV4Lmxlbmd0aCA9PT0gNiB8fCBoZXgubGVuZ3RoID09PSA4KSB7XG4gICAgICByZWQgPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDAsIDIpLCAxNik7XG4gICAgICBncmVlbiA9IHBhcnNlSW50KGhleC5zdWJzdHJpbmcoMiwgNCksIDE2KTtcbiAgICAgIGJsdWUgPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDQsIDYpLCAxNik7XG4gICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gOCkge1xuICAgICAgICBhbHBoYSA9IHBhcnNlSW50KGhleC5zdWJzdHJpbmcoNiwgOCksIDE2KSAvIDI1NTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoY2xlYW5Db2xvci5zdGFydHNXaXRoKCdyZ2JhJykpIHtcbiAgICBjb25zdCByZ2JhVmFsdWVzID0gY2xlYW5Db2xvci5tYXRjaCgvcmdiYVxcKChbXildKylcXCkvKVsxXS5zcGxpdCgnLCcpO1xuICAgIHJlZCA9IHBhcnNlSW50KHJnYmFWYWx1ZXNbMF0sIDEwKTtcbiAgICBncmVlbiA9IHBhcnNlSW50KHJnYmFWYWx1ZXNbMV0sIDEwKTtcbiAgICBibHVlID0gcGFyc2VJbnQocmdiYVZhbHVlc1syXSwgMTApO1xuICAgIGFscGhhID0gcGFyc2VGbG9hdChyZ2JhVmFsdWVzWzNdKTtcbiAgfSBlbHNlIGlmIChjbGVhbkNvbG9yLnN0YXJ0c1dpdGgoJ3JnYicpKSB7XG4gICAgY29uc3QgcmdiVmFsdWVzID0gY2xlYW5Db2xvci5tYXRjaCgvcmdiXFwoKFteKV0rKVxcKS8pWzFdLnNwbGl0KCcsJyk7XG4gICAgcmVkID0gcGFyc2VJbnQocmdiVmFsdWVzWzBdLCAxMCk7XG4gICAgZ3JlZW4gPSBwYXJzZUludChyZ2JWYWx1ZXNbMV0sIDEwKTtcbiAgICBibHVlID0gcGFyc2VJbnQocmdiVmFsdWVzWzJdLCAxMCk7XG4gIH0gZWxzZSBpZiAoY2xlYW5Db2xvci5zdGFydHNXaXRoKCdoc2xhJykpIHtcbiAgICBjb25zdCBoc2xhVmFsdWVzID0gY2xlYW5Db2xvci5tYXRjaCgvaHNsYVxcKChbXildKylcXCkvKVsxXS5zcGxpdCgnLCcpO1xuICAgIGNvbnN0IGggPSBwYXJzZUZsb2F0KGhzbGFWYWx1ZXNbMF0pO1xuICAgIGNvbnN0IHMgPSBwYXJzZUZsb2F0KGhzbGFWYWx1ZXNbMV0ucmVwbGFjZSgnJScsICcnKSkgLyAxMDA7XG4gICAgY29uc3QgbCA9IHBhcnNlRmxvYXQoaHNsYVZhbHVlc1syXS5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcbiAgICBhbHBoYSA9IHBhcnNlRmxvYXQoaHNsYVZhbHVlc1szXSk7XG5cbiAgICAvLyBDb252ZXJ0IEhTTCB0byBSR0JcbiAgICBjb25zdCBDID0gKDEgLSBNYXRoLmFicygyICogbCAtIDEpKSAqIHM7XG4gICAgY29uc3QgWCA9IEMgKiAoMSAtIE1hdGguYWJzKCgoaCAvIDYwKSAlIDIpIC0gMSkpO1xuICAgIGNvbnN0IG0gPSBsIC0gQyAvIDI7XG4gICAgbGV0IFI7XG4gICAgbGV0IEc7XG4gICAgbGV0IEI7XG5cbiAgICBpZiAoaCA+PSAwICYmIGggPCA2MCkge1xuICAgICAgUiA9IEM7XG4gICAgICBHID0gWDtcbiAgICAgIEIgPSAwO1xuICAgIH0gZWxzZSBpZiAoaCA+PSA2MCAmJiBoIDwgMTIwKSB7XG4gICAgICBSID0gWDtcbiAgICAgIEcgPSBDO1xuICAgICAgQiA9IDA7XG4gICAgfSBlbHNlIGlmIChoID49IDEyMCAmJiBoIDwgMTgwKSB7XG4gICAgICBSID0gMDtcbiAgICAgIEcgPSBDO1xuICAgICAgQiA9IFg7XG4gICAgfSBlbHNlIGlmIChoID49IDE4MCAmJiBoIDwgMjQwKSB7XG4gICAgICBSID0gMDtcbiAgICAgIEcgPSBYO1xuICAgICAgQiA9IEM7XG4gICAgfSBlbHNlIGlmIChoID49IDI0MCAmJiBoIDwgMzAwKSB7XG4gICAgICBSID0gWDtcbiAgICAgIEcgPSAwO1xuICAgICAgQiA9IEM7XG4gICAgfSBlbHNlIHtcbiAgICAgIFIgPSBDO1xuICAgICAgRyA9IDA7XG4gICAgICBCID0gWDtcbiAgICB9XG5cbiAgICByZWQgPSBNYXRoLnJvdW5kKChSICsgbSkgKiAyNTUpO1xuICAgIGdyZWVuID0gTWF0aC5yb3VuZCgoRyArIG0pICogMjU1KTtcbiAgICBibHVlID0gTWF0aC5yb3VuZCgoQiArIG0pICogMjU1KTtcbiAgfSBlbHNlIGlmIChjbGVhbkNvbG9yLnN0YXJ0c1dpdGgoJ2hzbCcpKSB7XG4gICAgY29uc3QgaHNsVmFsdWVzID0gY2xlYW5Db2xvci5tYXRjaCgvaHNsXFwoKFteKV0rKVxcKS8pWzFdLnNwbGl0KCcsJyk7XG4gICAgY29uc3QgaCA9IHBhcnNlRmxvYXQoaHNsVmFsdWVzWzBdKTtcbiAgICBjb25zdCBzID0gcGFyc2VGbG9hdChoc2xWYWx1ZXNbMV0ucmVwbGFjZSgnJScsICcnKSkgLyAxMDA7XG4gICAgY29uc3QgbCA9IHBhcnNlRmxvYXQoaHNsVmFsdWVzWzJdLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwO1xuXG4gICAgLy8gQ29udmVydCBIU0wgdG8gUkdCICh3aXRob3V0IGFscGhhKVxuICAgIGNvbnN0IEMgPSAoMSAtIE1hdGguYWJzKDIgKiBsIC0gMSkpICogcztcbiAgICBjb25zdCBYID0gQyAqICgxIC0gTWF0aC5hYnMoKChoIC8gNjApICUgMikgLSAxKSk7XG4gICAgY29uc3QgbSA9IGwgLSBDIC8gMjtcbiAgICBsZXQgUjtcbiAgICBsZXQgRztcbiAgICBsZXQgQjtcblxuICAgIGlmIChoID49IDAgJiYgaCA8IDYwKSB7XG4gICAgICBSID0gQztcbiAgICAgIEcgPSBYO1xuICAgICAgQiA9IDA7XG4gICAgfSBlbHNlIGlmIChoID49IDYwICYmIGggPCAxMjApIHtcbiAgICAgIFIgPSBYO1xuICAgICAgRyA9IEM7XG4gICAgICBCID0gMDtcbiAgICB9IGVsc2UgaWYgKGggPj0gMTIwICYmIGggPCAxODApIHtcbiAgICAgIFIgPSAwO1xuICAgICAgRyA9IEM7XG4gICAgICBCID0gWDtcbiAgICB9IGVsc2UgaWYgKGggPj0gMTgwICYmIGggPCAyNDApIHtcbiAgICAgIFIgPSAwO1xuICAgICAgRyA9IFg7XG4gICAgICBCID0gQztcbiAgICB9IGVsc2UgaWYgKGggPj0gMjQwICYmIGggPCAzMDApIHtcbiAgICAgIFIgPSBYO1xuICAgICAgRyA9IDA7XG4gICAgICBCID0gQztcbiAgICB9IGVsc2Uge1xuICAgICAgUiA9IEM7XG4gICAgICBHID0gMDtcbiAgICAgIEIgPSBYO1xuICAgIH1cblxuICAgIHJlZCA9IE1hdGgucm91bmQoKFIgKyBtKSAqIDI1NSk7XG4gICAgZ3JlZW4gPSBNYXRoLnJvdW5kKChHICsgbSkgKiAyNTUpO1xuICAgIGJsdWUgPSBNYXRoLnJvdW5kKChCICsgbSkgKiAyNTUpO1xuICB9XG5cbiAgaWYgKE51bWJlci5pc05hTihyZWQpIHx8IE51bWJlci5pc05hTihncmVlbikgfHwgTnVtYmVyLmlzTmFOKGJsdWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYEludmFsaWQgY29sb3IgaW4gW2l4Mi9zaGFyZWQvdXRpbHMvbm9ybWFsaXplQ29sb3IuanNdICcke2lucHV0Q29sb3J9J2BcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHtyZWQsIGdyZWVuLCBibHVlLCBhbHBoYX07XG59XG4iXSwibmFtZXMiOlsibm9ybWFsaXplQ29sb3IiLCJjb2xvck5hbWVzT2JqIiwiYWxpY2VibHVlIiwiYW50aXF1ZXdoaXRlIiwiYXF1YSIsImFxdWFtYXJpbmUiLCJhenVyZSIsImJlaWdlIiwiYmlzcXVlIiwiYmxhY2siLCJibGFuY2hlZGFsbW9uZCIsImJsdWUiLCJibHVldmlvbGV0IiwiYnJvd24iLCJidXJseXdvb2QiLCJjYWRldGJsdWUiLCJjaGFydHJldXNlIiwiY2hvY29sYXRlIiwiY29yYWwiLCJjb3JuZmxvd2VyYmx1ZSIsImNvcm5zaWxrIiwiY3JpbXNvbiIsImN5YW4iLCJkYXJrYmx1ZSIsImRhcmtjeWFuIiwiZGFya2dvbGRlbnJvZCIsImRhcmtncmF5IiwiZGFya2dyZWVuIiwiZGFya2dyZXkiLCJkYXJra2hha2kiLCJkYXJrbWFnZW50YSIsImRhcmtvbGl2ZWdyZWVuIiwiZGFya29yYW5nZSIsImRhcmtvcmNoaWQiLCJkYXJrcmVkIiwiZGFya3NhbG1vbiIsImRhcmtzZWFncmVlbiIsImRhcmtzbGF0ZWJsdWUiLCJkYXJrc2xhdGVncmF5IiwiZGFya3NsYXRlZ3JleSIsImRhcmt0dXJxdW9pc2UiLCJkYXJrdmlvbGV0IiwiZGVlcHBpbmsiLCJkZWVwc2t5Ymx1ZSIsImRpbWdyYXkiLCJkaW1ncmV5IiwiZG9kZ2VyYmx1ZSIsImZpcmVicmljayIsImZsb3JhbHdoaXRlIiwiZm9yZXN0Z3JlZW4iLCJmdWNoc2lhIiwiZ2FpbnNib3JvIiwiZ2hvc3R3aGl0ZSIsImdvbGQiLCJnb2xkZW5yb2QiLCJncmF5IiwiZ3JlZW4iLCJncmVlbnllbGxvdyIsImdyZXkiLCJob25leWRldyIsImhvdHBpbmsiLCJpbmRpYW5yZWQiLCJpbmRpZ28iLCJpdm9yeSIsImtoYWtpIiwibGF2ZW5kZXIiLCJsYXZlbmRlcmJsdXNoIiwibGF3bmdyZWVuIiwibGVtb25jaGlmZm9uIiwibGlnaHRibHVlIiwibGlnaHRjb3JhbCIsImxpZ2h0Y3lhbiIsImxpZ2h0Z29sZGVucm9keWVsbG93IiwibGlnaHRncmF5IiwibGlnaHRncmVlbiIsImxpZ2h0Z3JleSIsImxpZ2h0cGluayIsImxpZ2h0c2FsbW9uIiwibGlnaHRzZWFncmVlbiIsImxpZ2h0c2t5Ymx1ZSIsImxpZ2h0c2xhdGVncmF5IiwibGlnaHRzbGF0ZWdyZXkiLCJsaWdodHN0ZWVsYmx1ZSIsImxpZ2h0eWVsbG93IiwibGltZSIsImxpbWVncmVlbiIsImxpbmVuIiwibWFnZW50YSIsIm1hcm9vbiIsIm1lZGl1bWFxdWFtYXJpbmUiLCJtZWRpdW1ibHVlIiwibWVkaXVtb3JjaGlkIiwibWVkaXVtcHVycGxlIiwibWVkaXVtc2VhZ3JlZW4iLCJtZWRpdW1zbGF0ZWJsdWUiLCJtZWRpdW1zcHJpbmdncmVlbiIsIm1lZGl1bXR1cnF1b2lzZSIsIm1lZGl1bXZpb2xldHJlZCIsIm1pZG5pZ2h0Ymx1ZSIsIm1pbnRjcmVhbSIsIm1pc3R5cm9zZSIsIm1vY2Nhc2luIiwibmF2YWpvd2hpdGUiLCJuYXZ5Iiwib2xkbGFjZSIsIm9saXZlIiwib2xpdmVkcmFiIiwib3JhbmdlIiwib3JhbmdlcmVkIiwib3JjaGlkIiwicGFsZWdvbGRlbnJvZCIsInBhbGVncmVlbiIsInBhbGV0dXJxdW9pc2UiLCJwYWxldmlvbGV0cmVkIiwicGFwYXlhd2hpcCIsInBlYWNocHVmZiIsInBlcnUiLCJwaW5rIiwicGx1bSIsInBvd2RlcmJsdWUiLCJwdXJwbGUiLCJyZWJlY2NhcHVycGxlIiwicmVkIiwicm9zeWJyb3duIiwicm95YWxibHVlIiwic2FkZGxlYnJvd24iLCJzYWxtb24iLCJzYW5keWJyb3duIiwic2VhZ3JlZW4iLCJzZWFzaGVsbCIsInNpZW5uYSIsInNpbHZlciIsInNreWJsdWUiLCJzbGF0ZWJsdWUiLCJzbGF0ZWdyYXkiLCJzbGF0ZWdyZXkiLCJzbm93Iiwic3ByaW5nZ3JlZW4iLCJzdGVlbGJsdWUiLCJ0YW4iLCJ0ZWFsIiwidGhpc3RsZSIsInRvbWF0byIsInR1cnF1b2lzZSIsInZpb2xldCIsIndoZWF0Iiwid2hpdGUiLCJ3aGl0ZXNtb2tlIiwieWVsbG93IiwieWVsbG93Z3JlZW4iLCJpbnB1dENvbG9yIiwiYWxwaGEiLCJyYXdDb2xvciIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsIm5hbWVkQ29sb3IiLCJjbGVhbkNvbG9yIiwic3RhcnRzV2l0aCIsImhleCIsInN1YnN0cmluZyIsImxlbmd0aCIsInBhcnNlSW50IiwicmdiYVZhbHVlcyIsIm1hdGNoIiwic3BsaXQiLCJwYXJzZUZsb2F0IiwicmdiVmFsdWVzIiwiaHNsYVZhbHVlcyIsImgiLCJzIiwibCIsIkMiLCJNYXRoIiwiYWJzIiwiWCIsIm0iLCJSIiwiRyIsIkIiLCJyb3VuZCIsImhzbFZhbHVlcyIsIk51bWJlciIsImlzTmFOIiwiRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckIsb0RBQW9EOzs7OzsrQkF3SnBDQTs7O2VBQUFBOzs7QUF2SmhCLE1BQU1DLGdCQUFnQjtJQUNwQkMsV0FBVztJQUNYQyxjQUFjO0lBQ2RDLE1BQU07SUFDTkMsWUFBWTtJQUNaQyxPQUFPO0lBQ1BDLE9BQU87SUFDUEMsUUFBUTtJQUNSQyxPQUFPO0lBQ1BDLGdCQUFnQjtJQUNoQkMsTUFBTTtJQUNOQyxZQUFZO0lBQ1pDLE9BQU87SUFDUEMsV0FBVztJQUNYQyxXQUFXO0lBQ1hDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxPQUFPO0lBQ1BDLGdCQUFnQjtJQUNoQkMsVUFBVTtJQUNWQyxTQUFTO0lBQ1RDLE1BQU07SUFDTkMsVUFBVTtJQUNWQyxVQUFVO0lBQ1ZDLGVBQWU7SUFDZkMsVUFBVTtJQUNWQyxXQUFXO0lBQ1hDLFVBQVU7SUFDVkMsV0FBVztJQUNYQyxhQUFhO0lBQ2JDLGdCQUFnQjtJQUNoQkMsWUFBWTtJQUNaQyxZQUFZO0lBQ1pDLFNBQVM7SUFDVEMsWUFBWTtJQUNaQyxjQUFjO0lBQ2RDLGVBQWU7SUFDZkMsZUFBZTtJQUNmQyxlQUFlO0lBQ2ZDLGVBQWU7SUFDZkMsWUFBWTtJQUNaQyxVQUFVO0lBQ1ZDLGFBQWE7SUFDYkMsU0FBUztJQUNUQyxTQUFTO0lBQ1RDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxhQUFhO0lBQ2JDLGFBQWE7SUFDYkMsU0FBUztJQUNUQyxXQUFXO0lBQ1hDLFlBQVk7SUFDWkMsTUFBTTtJQUNOQyxXQUFXO0lBQ1hDLE1BQU07SUFDTkMsT0FBTztJQUNQQyxhQUFhO0lBQ2JDLE1BQU07SUFDTkMsVUFBVTtJQUNWQyxTQUFTO0lBQ1RDLFdBQVc7SUFDWEMsUUFBUTtJ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

}),
9468: (function (__unused_webpack_module, exports, __webpack_require__) {
"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    // IX2Actions,
    IX2BrowserSupport: function() {
        return _IX2BrowserSupport;
    },
    IX2EasingUtils: function() {
        return _IX2EasingUtils;
    },
    IX2Easings: function() {
        return _IX2Easings;
    },
    IX2ElementsReducer: function() {
        return _IX2ElementsReducer;
    },
    IX2VanillaPlugins: function() {
        return _IX2VanillaPlugins;
    },
    IX2VanillaUtils: function() {
        return _IX2VanillaUtils;
    }
});
const _IX2BrowserSupport = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(2662));
const _IX2Easings = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(8686));
const _IX2EasingUtils = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(3767));
const _IX2ElementsReducer = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(5861));
const _IX2VanillaPlugins = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(1799));
const _IX2VanillaUtils = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(4124));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBJWDJCcm93c2VyU3VwcG9ydCBmcm9tICcuL2xvZ2ljL0lYMkJyb3dzZXJTdXBwb3J0JztcbmltcG9ydCAqIGFzIElYMkVhc2luZ3MgZnJvbSAnLi9sb2dpYy9JWDJFYXNpbmdzJztcbmltcG9ydCAqIGFzIElYMkVhc2luZ1V0aWxzIGZyb20gJy4vbG9naWMvSVgyRWFzaW5nVXRpbHMnO1xuaW1wb3J0ICogYXMgSVgyRWxlbWVudHNSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvSVgyRWxlbWVudHNSZWR1Y2VyJztcbmltcG9ydCAqIGFzIElYMlZhbmlsbGFQbHVnaW5zIGZyb20gJy4vbG9naWMvSVgyVmFuaWxsYVBsdWdpbnMnO1xuaW1wb3J0ICogYXMgSVgyVmFuaWxsYVV0aWxzIGZyb20gJy4vbG9naWMvSVgyVmFuaWxsYVV0aWxzJztcbmV4cG9ydCB7XG4gIC8vIElYMkFjdGlvbnMsXG4gIElYMkJyb3dzZXJTdXBwb3J0LFxuICBJWDJFYXNpbmdzLFxuICBJWDJFYXNpbmdVdGlscyxcbiAgSVgyRWxlbWVudHNSZWR1Y2VyLFxuICBJWDJWYW5pbGxhUGx1Z2lucyxcbiAgSVgyVmFuaWxsYVV0aWxzLFxufTtcbiJdLCJuYW1lcyI6WyJJWDJCcm93c2VyU3VwcG9ydCIsIklYMkVhc2luZ1V0aWxzIiwiSVgyRWFzaW5ncyIsIklYMkVsZW1lbnRzUmVkdWNlciIsIklYMlZhbmlsbGFQbHVnaW5zIiwiSVgyVmFuaWxsYVV0aWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQU9FLGNBQWM7SUFDZEEsaUJBQWlCO2VBQWpCQTs7SUFFQUMsY0FBYztlQUFkQTs7SUFEQUMsVUFBVTtlQUFWQTs7SUFFQUMsa0JBQWtCO2VBQWxCQTs7SUFDQUMsaUJBQWlCO2VBQWpCQTs7SUFDQUMsZUFBZTtlQUFmQTs7OzJFQWJpQztvRUFDUDt3RUFDSTs0RUFDSTsyRUFDRDt5RUFDRiJ9

}),
2662: (function (__unused_webpack_module, exports, __webpack_require__) {
"use strict";
/* eslint-env browser */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ELEMENT_MATCHES: function() {
        return ELEMENT_MATCHES;
    },
    FLEX_PREFIXED: function() {
        return FLEX_PREFIXED;
    },
    IS_BROWSER_ENV: function() {
        return IS_BROWSER_ENV;
    },
    TRANSFORM_PREFIXED: function() {
        return TRANSFORM_PREFIXED;
    },
    TRANSFORM_STYLE_PREFIXED: function() {
        return TRANSFORM_STYLE_PREFIXED;
    },
    withBrowser: function() {
        return withBrowser;
    }
});
const _find = /*#__PURE__*/ _interop_require_default(__webpack_require__(9777));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const IS_BROWSER_ENV = typeof window !== 'undefined';
const withBrowser = (fn, fallback)=>{
    if (IS_BROWSER_ENV) {
        return fn();
    }
    return fallback;
};
const ELEMENT_MATCHES = withBrowser(()=>{
    return (0, _find.default)([
        'matches',
        'matchesSelector',
        'mozMatchesSelector',
        'msMatchesSelector',
        'oMatchesSelector',
        'webkitMatchesSelector'
    ], (key)=>key in Element.prototype);
});
const FLEX_PREFIXED = withBrowser(()=>{
    const el = document.createElement('i');
    const values = [
        'flex',
        '-webkit-flex',
        '-ms-flexbox',
        '-moz-box',
        '-webkit-box'
    ];
    const none = '';
    try {
        const { length } = values;
        for(let i = 0; i < length; i++){
            const value = values[i];
            // @ts-expect-error - TS2322 - Type 'string | undefined' is not assignable to type 'string'.
            el.style.display = value;
            if (el.style.display === value) {
                return value;
            }
        }
        return none;
    } catch (err) {
        return none;
    }
}, 'flex');
const TRANSFORM_PREFIXED = withBrowser(()=>{
    const el = document.createElement('i');
    if (el.style.transform == null) {
        const prefixes = [
            'Webkit',
            'Moz',
            'ms'
        ];
        const suffix = 'Transform';
        const { length } = prefixes;
        for(let i = 0; i < length; i++){
            const prop = prefixes[i] + suffix;
            // @ts-expect-error - TS7015 - Element implicitly has an 'any' type because index expression is not of type 'number'.
            if (el.style[prop] !== undefined) {
                return prop;
            }
        }
    }
    return 'transform';
}, 'transform');
const TRANSFORM_PREFIX = TRANSFORM_PREFIXED.split('transform')[0];
const TRANSFORM_STYLE_PREFIXED = TRANSFORM_PREFIX ? TRANSFORM_PREFIX + 'TransformStyle' : 'transformStyle';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC9sb2dpYy9JWDJCcm93c2VyU3VwcG9ydC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cbmltcG9ydCBmaW5kIGZyb20gJ2xvZGFzaC9maW5kJztcblxuZXhwb3J0IGNvbnN0IElTX0JST1dTRVJfRU5WID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5cbmV4cG9ydCBjb25zdCB3aXRoQnJvd3NlciA9IChmbjogYW55LCBmYWxsYmFjazogYW55KSA9PiB7XG4gIGlmIChJU19CUk9XU0VSX0VOVikge1xuICAgIHJldHVybiBmbigpO1xuICB9XG4gIHJldHVybiBmYWxsYmFjaztcbn07XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzI1NTQgLSBFeHBlY3RlZCAyIGFyZ3VtZW50cywgYnV0IGdvdCAxLlxuZXhwb3J0IGNvbnN0IEVMRU1FTlRfTUFUQ0hFUyA9IHdpdGhCcm93c2VyKCgpID0+IHtcbiAgcmV0dXJuIGZpbmQoXG4gICAgW1xuICAgICAgJ21hdGNoZXMnLFxuICAgICAgJ21hdGNoZXNTZWxlY3RvcicsXG4gICAgICAnbW96TWF0Y2hlc1NlbGVjdG9yJyxcbiAgICAgICdtc01hdGNoZXNTZWxlY3RvcicsXG4gICAgICAnb01hdGNoZXNTZWxlY3RvcicsXG4gICAgICAnd2Via2l0TWF0Y2hlc1NlbGVjdG9yJyxcbiAgICBdLFxuICAgIChrZXkpID0+IGtleSBpbiBFbGVtZW50LnByb3RvdHlwZVxuICApO1xufSk7XG5cbmV4cG9ydCBjb25zdCBGTEVYX1BSRUZJWEVEID0gd2l0aEJyb3dzZXIoKCkgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgY29uc3QgdmFsdWVzID0gW1xuICAgICdmbGV4JyxcbiAgICAnLXdlYmtpdC1mbGV4JyxcbiAgICAnLW1zLWZsZXhib3gnLFxuICAgICctbW96LWJveCcsXG4gICAgJy13ZWJraXQtYm94JyxcbiAgXTtcbiAgY29uc3Qgbm9uZSA9ICcnO1xuICB0cnkge1xuICAgIGNvbnN0IHtsZW5ndGh9ID0gdmFsdWVzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjMyMiAtIFR5cGUgJ3N0cmluZyB8IHVuZGVmaW5lZCcgaXMgbm90IGFzc2lnbmFibGUgdG8gdHlwZSAnc3RyaW5nJy5cbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSB2YWx1ZTtcbiAgICAgIGlmIChlbC5zdHlsZS5kaXNwbGF5ID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub25lO1xuICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgIHJldHVybiBub25lO1xuICB9XG59LCAnZmxleCcpO1xuXG5leHBvcnQgY29uc3QgVFJBTlNGT1JNX1BSRUZJWEVEOiBzdHJpbmcgPSB3aXRoQnJvd3NlcigoKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBpZiAoZWwuc3R5bGUudHJhbnNmb3JtID09IG51bGwpIHtcbiAgICBjb25zdCBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ01veicsICdtcyddO1xuICAgIGNvbnN0IHN1ZmZpeCA9ICdUcmFuc2Zvcm0nO1xuICAgIGNvbnN0IHtsZW5ndGh9ID0gcHJlZml4ZXM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcHJvcCA9IHByZWZpeGVzW2ldICsgc3VmZml4O1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAxNSAtIEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGluZGV4IGV4cHJlc3Npb24gaXMgbm90IG9mIHR5cGUgJ251bWJlcicuXG4gICAgICBpZiAoZWwuc3R5bGVbcHJvcF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gcHJvcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuICd0cmFuc2Zvcm0nO1xufSwgJ3RyYW5zZm9ybScpO1xuXG5jb25zdCBUUkFOU0ZPUk1fUFJFRklYID0gVFJBTlNGT1JNX1BSRUZJWEVELnNwbGl0KCd0cmFuc2Zvcm0nKVswXTtcblxuZXhwb3J0IGNvbnN0IFRSQU5TRk9STV9TVFlMRV9QUkVGSVhFRCA9IFRSQU5TRk9STV9QUkVGSVhcbiAgPyBUUkFOU0ZPUk1fUFJFRklYICsgJ1RyYW5zZm9ybVN0eWxlJ1xuICA6ICd0cmFuc2Zvcm1TdHlsZSc7XG4iXSwibmFtZXMiOlsiRUxFTUVOVF9NQVRDSEVTIiwiRkxFWF9QUkVGSVhFRCIsIklTX0JST1dTRVJfRU5WIiwiVFJBTlNGT1JNX1BSRUZJWEVEIiwiVFJBTlNGT1JNX1NUWUxFX1BSRUZJWEVEIiwid2l0aEJyb3dzZXIiLCJ3aW5kb3ciLCJmbiIsImZhbGxiYWNrIiwiZmluZCIsImtleSIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInZhbHVlcyIsIm5vbmUiLCJsZW5ndGgiLCJpIiwidmFsdWUiLCJzdHlsZSIsImRpc3BsYXkiLCJlcnIiLCJ0cmFuc2Zvcm0iLCJwcmVmaXhlcyIsInN1ZmZpeCIsInByb3AiLCJ1bmRlZmluZWQiLCJUUkFOU0ZPUk1fUFJFRklYIiwic3BsaXQiXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFzQjs7Ozs7Ozs7Ozs7SUFhVEEsZUFBZTtlQUFmQTs7SUFjQUMsYUFBYTtlQUFiQTs7SUF4QkFDLGNBQWM7ZUFBZEE7O0lBa0RBQyxrQkFBa0I7ZUFBbEJBOztJQW1CQUMsd0JBQXdCO2VBQXhCQTs7SUFuRUFDLFdBQVc7ZUFBWEE7Ozs2REFKSTs7Ozs7O0FBRVYsTUFBTUgsaUJBQWlCLE9BQU9JLFdBQVc7QUFFekMsTUFBTUQsY0FBYyxDQUFDRSxJQUFTQztJQUNuQyxJQUFJTixnQkFBZ0I7UUFDbEIsT0FBT0s7SUFDVDtJQUNBLE9BQU9DO0FBQ1Q7QUFHTyxNQUFNUixrQkFBa0JLLFlBQVk7SUFDekMsT0FBT0ksSUFBQUEsYUFBSSxFQUNUO1FBQ0U7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0QsRUFDRCxDQUFDQyxNQUFRQSxPQUFPQyxRQUFRQyxTQUFTO0FBRXJDO0FBRU8sTUFBTVgsZ0JBQWdCSSxZQUFZO0lBQ3ZDLE1BQU1RLEtBQUtDLFNBQVNDLGFBQWEsQ0FBQztJQUNsQyxNQUFNQyxTQUFTO1FBQ2I7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNEO0lBQ0QsTUFBTUMsT0FBTztJQUNiLElBQUk7UUFDRixNQUFNLEVBQUNDLE1BQU0sRUFBQyxHQUFHRjtRQUNqQixJQUFLLElBQUlHLElBQUksR0FBR0EsSUFBSUQsUUFBUUMsSUFBSztZQUMvQixNQUFNQyxRQUFRSixNQUFNLENBQUNHLEVBQUU7WUFDdkIsNEZBQTRGO1lBQzVGTixHQUFHUSxLQUFLLENBQUNDLE9BQU8sR0FBR0Y7WUFDbkIsSUFBSVAsR0FBR1EsS0FBSyxDQUFDQyxPQUFPLEtBQUtGLE9BQU87Z0JBQzlCLE9BQU9BO1lBQ1Q7UUFDRjtRQUNBLE9BQU9IO0lBQ1QsRUFBRSxPQUFPTSxLQUFVO1FBQ2pCLE9BQU9OO0lBQ1Q7QUFDRixHQUFHO0FBRUksTUFBTWQscUJBQTZCRSxZQUFZO0lBQ3BELE1BQU1RLEtBQUtDLFNBQVNDLGFBQWEsQ0FBQztJQUNsQyxJQUFJRixHQUFHUSxLQUFLLENBQUNHLFNBQVMsSUFBSSxNQUFNO1FBQzlCLE1BQU1DLFdBQVc7WUFBQztZQUFVO1lBQU87U0FBSztRQUN4QyxNQUFNQyxTQUFTO1FBQ2YsTUFBTSxFQUFDUixNQUFNLEVBQUMsR0FBR087UUFDakIsSUFBSyxJQUFJTixJQUFJLEdBQUdBLElBQUlELFFBQVFDLElBQUs7WUFDL0IsTUFBTVEsT0FBT0YsUUFBUSxDQUFDTixFQUFFLEdBQUdPO1lBQzNCLHFIQUFxSDtZQUNySCxJQUFJYixHQUFHUSxLQUFLLENBQUNNLEtBQUssS0FBS0MsV0FBVztnQkFDaEMsT0FBT0Q7WUFDVDtRQUNGO0lBQ0Y7SUFDQSxPQUFPO0FBQ1QsR0FBRztBQUVILE1BQU1FLG1CQUFtQjFCLG1CQUFtQjJCLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRTtBQUUxRCxNQUFNMUIsMkJBQTJCeUIsbUJBQ3BDQSxtQkFBbUIsbUJBQ25CIn0=

}),
3767: (function (__unused_webpack_module, exports, __webpack_require__) {
"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    applyEasing: function() {
        return applyEasing;
    },
    createBezierEasing: function() {
        return createBezierEasing;
    },
    optimizeFloat: function() {
        return optimizeFloat;
    }
});
const _IX2Easings = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(8686));
const _beziereasing = /*#__PURE__*/ _interop_require_default(__webpack_require__(1361));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function optimizeFloat(value, digits = 5, base = 10) {
    const pow = Math.pow(base, digits);
    const float = Number(Math.round(value * pow) / pow);
    return Math.abs(float) > 0.0001 ? float : 0;
}
function createBezierEasing(easing) {
    return (0, _beziereasing.default)(...easing);
}
function applyEasing(easing, position, customEasingFn) {
    if (position === 0) {
        return 0;
    }
    if (position === 1) {
        return 1;
    }
    if (customEasingFn) {
        return optimizeFloat(position > 0 ? customEasingFn(position) : position);
    }
    return optimizeFloat(position > 0 && easing && _IX2Easings[easing] ? _IX2Easings[easing](position) : position);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC9sb2dpYy9JWDJFYXNpbmdVdGlscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7XG4gIElYMkVhc2luZ0VudW1UeXBlLFxuICBJWDJFYXNpbmdDdXN0b21UeXBlLFxufSBmcm9tICdAcGFja2FnZXMvc3lzdGVtcy9peDIvdHlwZXMtY29yZSc7XG5pbXBvcnQgKiBhcyBlYXNpbmdzIGZyb20gJy4vSVgyRWFzaW5ncyc7XG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDE2IC0gQ291bGQgbm90IGZpbmQgYSBkZWNsYXJhdGlvbiBmaWxlIGZvciBtb2R1bGUgJ2Jlemllci1lYXNpbmcnLiAnL2hvbWUvcnVubmVyL3dvcmsvZmxvdy10by10eXBlc2NyaXB0LWNvZGVtb2QvZmxvdy10by10eXBlc2NyaXB0LWNvZGVtb2Qvd2ViZmxvdy9ub2RlX21vZHVsZXMvYmV6aWVyLWVhc2luZy9zcmMvaW5kZXguanMnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG5pbXBvcnQgQmV6aWVyRWFzaW5nIGZyb20gJ2Jlemllci1lYXNpbmcnO1xuXG5leHBvcnQgZnVuY3Rpb24gb3B0aW1pemVGbG9hdChcbiAgdmFsdWU6IG51bWJlcixcbiAgZGlnaXRzOiBudW1iZXIgPSA1LFxuICBiYXNlOiBudW1iZXIgPSAxMFxuKTogbnVtYmVyIHtcbiAgY29uc3QgcG93ID0gTWF0aC5wb3coYmFzZSwgZGlnaXRzKTtcbiAgY29uc3QgZmxvYXQgPSBOdW1iZXIoTWF0aC5yb3VuZCh2YWx1ZSAqIHBvdykgLyBwb3cpO1xuICByZXR1cm4gTWF0aC5hYnMoZmxvYXQpID4gMC4wMDAxID8gZmxvYXQgOiAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQmV6aWVyRWFzaW5nKFxuICBlYXNpbmc6IElYMkVhc2luZ0N1c3RvbVR5cGVcbik6IChhcmcxOiBudW1iZXIpID0+IG51bWJlciB7XG4gIHJldHVybiBCZXppZXJFYXNpbmcoLi4uZWFzaW5nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5RWFzaW5nKFxuICBlYXNpbmc6IElYMkVhc2luZ0VudW1UeXBlLFxuICBwb3NpdGlvbjogbnVtYmVyLFxuICBjdXN0b21FYXNpbmdGbj86IChhcmcxOiBudW1iZXIpID0+IG51bWJlclxuKSB7XG4gIGlmIChwb3NpdGlvbiA9PT0gMCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGlmIChwb3NpdGlvbiA9PT0gMSkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgaWYgKGN1c3RvbUVhc2luZ0ZuKSB7XG4gICAgcmV0dXJuIG9wdGltaXplRmxvYXQocG9zaXRpb24gPiAwID8gY3VzdG9tRWFzaW5nRm4ocG9zaXRpb24pIDogcG9zaXRpb24pO1xuICB9XG5cbiAgcmV0dXJuIG9wdGltaXplRmxvYXQoXG4gICAgcG9zaXRpb24gPiAwICYmIGVhc2luZyAmJiBlYXNpbmdzW2Vhc2luZ11cbiAgICAgID8gZWFzaW5nc1tlYXNpbmddKHBvc2l0aW9uKVxuICAgICAgOiBwb3NpdGlvblxuICApO1xufVxuIl0sIm5hbWVzIjpbImFwcGx5RWFzaW5nIiwiY3JlYXRlQmV6aWVyRWFzaW5nIiwib3B0aW1pemVGbG9hdCIsInZhbHVlIiwiZGlnaXRzIiwiYmFzZSIsInBvdyIsIk1hdGgiLCJmbG9hdCIsIk51bWJlciIsInJvdW5kIiwiYWJzIiwiZWFzaW5nIiwiQmV6aWVyRWFzaW5nIiwicG9zaXRpb24iLCJjdXN0b21FYXNpbmdGbiIsImVhc2luZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBd0JnQkEsV0FBVztlQUFYQTs7SUFOQUMsa0JBQWtCO2VBQWxCQTs7SUFWQUMsYUFBYTtlQUFiQTs7O29FQUpTO3FFQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQixTQUFTQSxjQUNkQyxLQUFhLEVBQ2JDLFNBQWlCLENBQUMsRUFDbEJDLE9BQWUsRUFBRTtJQUVqQixNQUFNQyxNQUFNQyxLQUFLRCxHQUFHLENBQUNELE1BQU1EO0lBQzNCLE1BQU1JLFFBQVFDLE9BQU9GLEtBQUtHLEtBQUssQ0FBQ1AsUUFBUUcsT0FBT0E7SUFDL0MsT0FBT0MsS0FBS0ksR0FBRyxDQUFDSCxTQUFTLFNBQVNBLFFBQVE7QUFDNUM7QUFFTyxTQUFTUCxtQkFDZFcsTUFBMkI7SUFFM0IsT0FBT0MsSUFBQUEscUJBQVksS0FBSUQ7QUFDekI7QUFFTyxTQUFTWixZQUNkWSxNQUF5QixFQUN6QkUsUUFBZ0IsRUFDaEJDLGNBQXlDO0lBRXpDLElBQUlELGFBQWEsR0FBRztRQUNsQixPQUFPO0lBQ1Q7SUFDQSxJQUFJQSxhQUFhLEdBQUc7UUFDbEIsT0FBTztJQUNUO0lBRUEsSUFBSUMsZ0JBQWdCO1FBQ2xCLE9BQU9iLGNBQWNZLFdBQVcsSUFBSUMsZUFBZUQsWUFBWUE7SUFDakU7SUFFQSxPQUFPWixjQUNMWSxXQUFXLEtBQUtGLFVBQVVJLFdBQU8sQ0FBQ0osT0FBTyxHQUNyQ0ksV0FBTyxDQUFDSixPQUFPLENBQUNFLFlBQ2hCQTtBQUVSIn0=

}),
8686: (function (__unused_webpack_module, exports, __webpack_require__) {
"use strict";
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'bezier-easing'. '/home/runner/work/flow-to-typescript-codemod/flow-to-typescript-codemod/webflow/node_modules/bezier-easing/src/index.js' implicitly has an 'any' type.

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    bounce: function() {
        return bounce;
    },
    bouncePast: function() {
        return bouncePast;
    },
    ease: function() {
        return ease;
    },
    easeIn: function() {
        return easeIn;
    },
    easeInOut: function() {
        return easeInOut;
    },
    easeOut: function() {
        return easeOut;
    },
    inBack: function() {
        return inBack;
    },
    inCirc: function() {
        return inCirc;
    },
    inCubic: function() {
        return inCubic;
    },
    inElastic: function() {
        return inElastic;
    },
    inExpo: function() {
        return inExpo;
    },
    inOutBack: function() {
        return inOutBack;
    },
    inOutCirc: function() {
        return inOutCirc;
    },
    inOutCubic: function() {
        return inOutCubic;
    },
    inOutElastic: function() {
        return inOutElastic;
    },
    inOutExpo: function() {
        return inOutExpo;
    },
    inOutQuad: function() {
        return inOutQuad;
    },
    inOutQuart: function() {
        return inOutQuart;
    },
    inOutQuint: function() {
        return inOutQuint;
    },
    inOutSine: function() {
        return inOutSine;
    },
    inQuad: function() {
        return inQuad;
    },
    inQuart: function() {
        return inQuart;
    },
    inQuint: function() {
        return inQuint;
    },
    inSine: function() {
        return inSine;
    },
    outBack: function() {
        return outBack;
    },
    outBounce: function() {
        return outBounce;
    },
    outCirc: function() {
        return outCirc;
    },
    outCubic: function() {
        return outCubic;
    },
    outElastic: function() {
        return outElastic;
    },
    outExpo: function() {
        return outExpo;
    },
    outQuad: function() {
        return outQuad;
    },
    outQuart: function() {
        return outQuart;
    },
    outQuint: function() {
        return outQuint;
    },
    outSine: function() {
        return outSine;
    },
    swingFrom: function() {
        return swingFrom;
    },
    swingFromTo: function() {
        return swingFromTo;
    },
    swingTo: function() {
        return swingTo;
    }
});
const _beziereasing = /*#__PURE__*/ _interop_require_default(__webpack_require__(1361));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// Easing functions adapted from Thomas Fuchs & Jeremy Kahn
// Easing Equations (c) 2003 Robert Penner, BSD license
// https://raw.github.com/danro/easing-js/master/LICENSE
const magicSwing = 1.70158;
const ease = (0, _beziereasing.default)(0.25, 0.1, 0.25, 1.0);
const easeIn = (0, _beziereasing.default)(0.42, 0.0, 1.0, 1.0);
const easeOut = (0, _beziereasing.default)(0.0, 0.0, 0.58, 1.0);
const easeInOut = (0, _beziereasing.default)(0.42, 0.0, 0.58, 1.0);
function inQuad(pos) {
    return Math.pow(pos, 2);
}
function outQuad(pos) {
    return -(Math.pow(pos - 1, 2) - 1);
}
function inOutQuad(pos) {
    if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 2);
    }
    return -0.5 * ((pos -= 2) * pos - 2);
}
function inCubic(pos) {
    return Math.pow(pos, 3);
}
function outCubic(pos) {
    return Math.pow(pos - 1, 3) + 1;
}
function inOutCubic(pos) {
    if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 3);
    }
    return 0.5 * (Math.pow(pos - 2, 3) + 2);
}
function inQuart(pos) {
    return Math.pow(pos, 4);
}
function outQuart(pos) {
    return -(Math.pow(pos - 1, 4) - 1);
}
function inOutQuart(pos) {
    if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 4);
    }
    return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
}
function inQuint(pos) {
    return Math.pow(pos, 5);
}
function outQuint(pos) {
    return Math.pow(pos - 1, 5) + 1;
}
function inOutQuint(pos) {
    if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 5);
    }
    return 0.5 * (Math.pow(pos - 2, 5) + 2);
}
function inSine(pos) {
    return -Math.cos(pos * (Math.PI / 2)) + 1;
}
function outSine(pos) {
    return Math.sin(pos * (Math.PI / 2));
}
function inOutSine(pos) {
    return -0.5 * (Math.cos(Math.PI * pos) - 1);
}
function inExpo(pos) {
    return pos === 0 ? 0 : Math.pow(2, 10 * (pos - 1));
}
function outExpo(pos) {
    return pos === 1 ? 1 : -Math.pow(2, -10 * pos) + 1;
}
function inOutExpo(pos) {
    if (pos === 0) {
        return 0;
    }
    if (pos === 1) {
        return 1;
    }
    if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(2, 10 * (pos - 1));
    }
    return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
}
function inCirc(pos) {
    return -(Math.sqrt(1 - pos * pos) - 1);
}
function outCirc(pos) {
    return Math.sqrt(1 - Math.pow(pos - 1, 2));
}
function inOutCirc(pos) {
    if ((pos /= 0.5) < 1) {
        return -0.5 * (Math.sqrt(1 - pos * pos) - 1);
    }
    return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
}
function outBounce(pos) {
    if (pos < 1 / 2.75) {
        return 7.5625 * pos * pos;
    } else if (pos < 2 / 2.75) {
        return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
    } else if (pos < 2.5 / 2.75) {
        return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
    } else {
        return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
    }
}
function inBack(pos) {
    const s = magicSwing;
    return pos * pos * ((s + 1) * pos - s);
}
function outBack(pos) {
    const s = magicSwing;
    return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
}
function inOutBack(pos) {
    let s = magicSwing;
    if ((pos /= 0.5) < 1) {
        return 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s));
    }
    return 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
}
function inElastic(pos) {
    let s = magicSwing;
    let p = 0;
    let a = 1;
    if (pos === 0) {
        return 0;
    }
    if (pos === 1) {
        return 1;
    }
    if (!p) {
        p = 0.3;
    }
    if (a < 1) {
        a = 1;
        s = p / 4;
    } else {
        s = p / (2 * Math.PI) * Math.asin(1 / a);
    }
    return -(a * Math.pow(2, 10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p));
}
function outElastic(pos) {
    let s = magicSwing;
    let p = 0;
    let a = 1;
    if (pos === 0) {
        return 0;
    }
    if (pos === 1) {
        return 1;
    }
    if (!p) {
        p = 0.3;
    }
    if (a < 1) {
        a = 1;
        s = p / 4;
    } else {
        s = p / (2 * Math.PI) * Math.asin(1 / a);
    }
    return a * Math.pow(2, -10 * pos) * Math.sin((pos - s) * (2 * Math.PI) / p) + 1;
}
function inOutElastic(pos) {
    let s = magicSwing;
    let p = 0;
    let a = 1;
    if (pos === 0) {
        return 0;
    }
    if ((pos /= 1 / 2) === 2) {
        return 1;
    }
    if (!p) {
        p = 0.3 * 1.5;
    }
    if (a < 1) {
        a = 1;
        s = p / 4;
    } else {
        s = p / (2 * Math.PI) * Math.asin(1 / a);
    }
    if (pos < 1) {
        return -0.5 * (a * Math.pow(2, 10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p));
    }
    return a * Math.pow(2, -10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p) * 0.5 + 1;
}
function swingFromTo(pos) {
    let s = magicSwing;
    return (pos /= 0.5) < 1 ? 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s)) : 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
}
function swingFrom(pos) {
    const s = magicSwing;
    return pos * pos * ((s + 1) * pos - s);
}
function swingTo(pos) {
    const s = magicSwing;
    return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
}
function bounce(pos) {
    if (pos < 1 / 2.75) {
        return 7.5625 * pos * pos;
    } else if (pos < 2 / 2.75) {
        return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
    } else if (pos < 2.5 / 2.75) {
        return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
    } else {
        return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
    }
}
function bouncePast(pos) {
    if (pos < 1 / 2.75) {
        return 7.5625 * pos * pos;
    } else if (pos < 2 / 2.75) {
        return 2 - (7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75);
    } else if (pos < 2.5 / 2.75) {
        return 2 - (7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375);
    } else {
        return 2 - (7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC9sb2dpYy9JWDJFYXNpbmdzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMTYgLSBDb3VsZCBub3QgZmluZCBhIGRlY2xhcmF0aW9uIGZpbGUgZm9yIG1vZHVsZSAnYmV6aWVyLWVhc2luZycuICcvaG9tZS9ydW5uZXIvd29yay9mbG93LXRvLXR5cGVzY3JpcHQtY29kZW1vZC9mbG93LXRvLXR5cGVzY3JpcHQtY29kZW1vZC93ZWJmbG93L25vZGVfbW9kdWxlcy9iZXppZXItZWFzaW5nL3NyYy9pbmRleC5qcycgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbmltcG9ydCBCZXppZXJFYXNpbmcgZnJvbSAnYmV6aWVyLWVhc2luZyc7XG5cbi8vIEVhc2luZyBmdW5jdGlvbnMgYWRhcHRlZCBmcm9tIFRob21hcyBGdWNocyAmIEplcmVteSBLYWhuXG4vLyBFYXNpbmcgRXF1YXRpb25zIChjKSAyMDAzIFJvYmVydCBQZW5uZXIsIEJTRCBsaWNlbnNlXG4vLyBodHRwczovL3Jhdy5naXRodWIuY29tL2RhbnJvL2Vhc2luZy1qcy9tYXN0ZXIvTElDRU5TRVxuXG5jb25zdCBtYWdpY1N3aW5nID0gMS43MDE1ODtcblxudHlwZSBFYXNpbmdGdW5jdGlvbiA9IChhcmcxOiBudW1iZXIpID0+IG51bWJlcjtcblxuZXhwb3J0IGNvbnN0IGVhc2U6IEVhc2luZ0Z1bmN0aW9uID0gQmV6aWVyRWFzaW5nKDAuMjUsIDAuMSwgMC4yNSwgMS4wKTtcbmV4cG9ydCBjb25zdCBlYXNlSW46IEVhc2luZ0Z1bmN0aW9uID0gQmV6aWVyRWFzaW5nKDAuNDIsIDAuMCwgMS4wLCAxLjApO1xuZXhwb3J0IGNvbnN0IGVhc2VPdXQ6IEVhc2luZ0Z1bmN0aW9uID0gQmV6aWVyRWFzaW5nKDAuMCwgMC4wLCAwLjU4LCAxLjApO1xuZXhwb3J0IGNvbnN0IGVhc2VJbk91dDogRWFzaW5nRnVuY3Rpb24gPSBCZXppZXJFYXNpbmcoMC40MiwgMC4wLCAwLjU4LCAxLjApO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5RdWFkKHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgucG93KHBvcywgMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvdXRRdWFkKHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIC0oTWF0aC5wb3cocG9zIC0gMSwgMikgLSAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluT3V0UXVhZChwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIGlmICgocG9zIC89IDAuNSkgPCAxKSB7XG4gICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KHBvcywgMik7XG4gIH1cbiAgcmV0dXJuIC0wLjUgKiAoKHBvcyAtPSAyKSAqIHBvcyAtIDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5DdWJpYyhwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLnBvdyhwb3MsIDMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3V0Q3ViaWMocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5wb3cocG9zIC0gMSwgMykgKyAxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5PdXRDdWJpYyhwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIGlmICgocG9zIC89IDAuNSkgPCAxKSB7XG4gICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KHBvcywgMyk7XG4gIH1cbiAgcmV0dXJuIDAuNSAqIChNYXRoLnBvdyhwb3MgLSAyLCAzKSArIDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5RdWFydChwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLnBvdyhwb3MsIDQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3V0UXVhcnQocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gLShNYXRoLnBvdyhwb3MgLSAxLCA0KSAtIDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5PdXRRdWFydChwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIGlmICgocG9zIC89IDAuNSkgPCAxKSB7XG4gICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KHBvcywgNCk7XG4gIH1cbiAgcmV0dXJuIC0wLjUgKiAoKHBvcyAtPSAyKSAqIE1hdGgucG93KHBvcywgMykgLSAyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluUXVpbnQocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5wb3cocG9zLCA1KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG91dFF1aW50KHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgucG93KHBvcyAtIDEsIDUpICsgMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluT3V0UXVpbnQocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAoKHBvcyAvPSAwLjUpIDwgMSkge1xuICAgIHJldHVybiAwLjUgKiBNYXRoLnBvdyhwb3MsIDUpO1xuICB9XG4gIHJldHVybiAwLjUgKiAoTWF0aC5wb3cocG9zIC0gMiwgNSkgKyAyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluU2luZShwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiAtTWF0aC5jb3MocG9zICogKE1hdGguUEkgLyAyKSkgKyAxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3V0U2luZShwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLnNpbihwb3MgKiAoTWF0aC5QSSAvIDIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluT3V0U2luZShwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiAtMC41ICogKE1hdGguY29zKE1hdGguUEkgKiBwb3MpIC0gMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbkV4cG8ocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gcG9zID09PSAwID8gMCA6IE1hdGgucG93KDIsIDEwICogKHBvcyAtIDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG91dEV4cG8ocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gcG9zID09PSAxID8gMSA6IC1NYXRoLnBvdygyLCAtMTAgKiBwb3MpICsgMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluT3V0RXhwbyhwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChwb3MgPT09IDApIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBpZiAocG9zID09PSAxKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgaWYgKChwb3MgLz0gMC41KSA8IDEpIHtcbiAgICByZXR1cm4gMC41ICogTWF0aC5wb3coMiwgMTAgKiAocG9zIC0gMSkpO1xuICB9XG4gIHJldHVybiAwLjUgKiAoLU1hdGgucG93KDIsIC0xMCAqIC0tcG9zKSArIDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5DaXJjKHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIC0oTWF0aC5zcXJ0KDEgLSBwb3MgKiBwb3MpIC0gMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvdXRDaXJjKHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGguc3FydCgxIC0gTWF0aC5wb3cocG9zIC0gMSwgMikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5PdXRDaXJjKHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKChwb3MgLz0gMC41KSA8IDEpIHtcbiAgICByZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIHBvcyAqIHBvcykgLSAxKTtcbiAgfVxuICByZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKHBvcyAtPSAyKSAqIHBvcykgKyAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG91dEJvdW5jZShwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChwb3MgPCAxIC8gMi43NSkge1xuICAgIHJldHVybiA3LjU2MjUgKiBwb3MgKiBwb3M7XG4gIH0gZWxzZSBpZiAocG9zIDwgMiAvIDIuNzUpIHtcbiAgICByZXR1cm4gNy41NjI1ICogKHBvcyAtPSAxLjUgLyAyLjc1KSAqIHBvcyArIDAuNzU7XG4gIH0gZWxzZSBpZiAocG9zIDwgMi41IC8gMi43NSkge1xuICAgIHJldHVybiA3LjU2MjUgKiAocG9zIC09IDIuMjUgLyAyLjc1KSAqIHBvcyArIDAuOTM3NTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gNy41NjI1ICogKHBvcyAtPSAyLjYyNSAvIDIuNzUpICogcG9zICsgMC45ODQzNzU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluQmFjayhwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IHMgPSBtYWdpY1N3aW5nO1xuICByZXR1cm4gcG9zICogcG9zICogKChzICsgMSkgKiBwb3MgLSBzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG91dEJhY2socG9zOiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCBzID0gbWFnaWNTd2luZztcbiAgcmV0dXJuIChwb3MgLT0gMSkgKiBwb3MgKiAoKHMgKyAxKSAqIHBvcyArIHMpICsgMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluT3V0QmFjayhwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBzID0gbWFnaWNTd2luZztcbiAgaWYgKChwb3MgLz0gMC41KSA8IDEpIHtcbiAgICByZXR1cm4gMC41ICogKHBvcyAqIHBvcyAqICgoKHMgKj0gMS41MjUpICsgMSkgKiBwb3MgLSBzKSk7XG4gIH1cbiAgcmV0dXJuIDAuNSAqICgocG9zIC09IDIpICogcG9zICogKCgocyAqPSAxLjUyNSkgKyAxKSAqIHBvcyArIHMpICsgMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbkVsYXN0aWMocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgcyA9IG1hZ2ljU3dpbmc7XG4gIGxldCBwID0gMDtcbiAgbGV0IGEgPSAxO1xuICBpZiAocG9zID09PSAwKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgaWYgKHBvcyA9PT0gMSkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIGlmICghcCkge1xuICAgIHAgPSAwLjM7XG4gIH1cbiAgaWYgKGEgPCAxKSB7XG4gICAgYSA9IDE7XG4gICAgcyA9IHAgLyA0O1xuICB9IGVsc2Uge1xuICAgIHMgPSAocCAvICgyICogTWF0aC5QSSkpICogTWF0aC5hc2luKDEgLyBhKTtcbiAgfVxuICByZXR1cm4gLShcbiAgICBhICpcbiAgICBNYXRoLnBvdygyLCAxMCAqIChwb3MgLT0gMSkpICpcbiAgICBNYXRoLnNpbigoKHBvcyAtIHMpICogKDIgKiBNYXRoLlBJKSkgLyBwKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3V0RWxhc3RpYyhwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBzID0gbWFnaWNTd2luZztcbiAgbGV0IHAgPSAwO1xuICBsZXQgYSA9IDE7XG4gIGlmIChwb3MgPT09IDApIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBpZiAocG9zID09PSAxKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgaWYgKCFwKSB7XG4gICAgcCA9IDAuMztcbiAgfVxuICBpZiAoYSA8IDEpIHtcbiAgICBhID0gMTtcbiAgICBzID0gcCAvIDQ7XG4gIH0gZWxzZSB7XG4gICAgcyA9IChwIC8gKDIgKiBNYXRoLlBJKSkgKiBNYXRoLmFzaW4oMSAvIGEpO1xuICB9XG4gIHJldHVybiAoXG4gICAgYSAqIE1hdGgucG93KDIsIC0xMCAqIHBvcykgKiBNYXRoLnNpbigoKHBvcyAtIHMpICogKDIgKiBNYXRoLlBJKSkgLyBwKSArIDFcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluT3V0RWxhc3RpYyhwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBzID0gbWFnaWNTd2luZztcbiAgbGV0IHAgPSAwO1xuICBsZXQgYSA9IDE7XG4gIGlmIChwb3MgPT09IDApIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBpZiAoKHBvcyAvPSAxIC8gMikgPT09IDIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBpZiAoIXApIHtcbiAgICBwID0gMC4zICogMS41O1xuICB9XG4gIGlmIChhIDwgMSkge1xuICAgIGEgPSAxO1xuICAgIHMgPSBwIC8gNDtcbiAgfSBlbHNlIHtcbiAgICBzID0gKHAgLyAoMiAqIE1hdGguUEkpKSAqIE1hdGguYXNpbigxIC8gYSk7XG4gIH1cbiAgaWYgKHBvcyA8IDEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgLTAuNSAqXG4gICAgICAoYSAqXG4gICAgICAgIE1hdGgucG93KDIsIDEwICogKHBvcyAtPSAxKSkgKlxuICAgICAgICBNYXRoLnNpbigoKHBvcyAtIHMpICogKDIgKiBNYXRoLlBJKSkgLyBwKSlcbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgYSAqXG4gICAgICBNYXRoLnBvdygyLCAtMTAgKiAocG9zIC09IDEpKSAqXG4gICAgICBNYXRoLnNpbigoKHBvcyAtIHMpICogKDIgKiBNYXRoLlBJKSkgLyBwKSAqXG4gICAgICAwLjUgK1xuICAgIDFcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3aW5nRnJvbVRvKHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgbGV0IHMgPSBtYWdpY1N3aW5nO1xuICByZXR1cm4gKHBvcyAvPSAwLjUpIDwgMVxuICAgID8gMC41ICogKHBvcyAqIHBvcyAqICgoKHMgKj0gMS41MjUpICsgMSkgKiBwb3MgLSBzKSlcbiAgICA6IDAuNSAqICgocG9zIC09IDIpICogcG9zICogKCgocyAqPSAxLjUyNSkgKyAxKSAqIHBvcyArIHMpICsgMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzd2luZ0Zyb20ocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCBzID0gbWFnaWNTd2luZztcbiAgcmV0dXJuIHBvcyAqIHBvcyAqICgocyArIDEpICogcG9zIC0gcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzd2luZ1RvKHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgcyA9IG1hZ2ljU3dpbmc7XG4gIHJldHVybiAocG9zIC09IDEpICogcG9zICogKChzICsgMSkgKiBwb3MgKyBzKSArIDE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuY2UocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAocG9zIDwgMSAvIDIuNzUpIHtcbiAgICByZXR1cm4gNy41NjI1ICogcG9zICogcG9zO1xuICB9IGVsc2UgaWYgKHBvcyA8IDIgLyAyLjc1KSB7XG4gICAgcmV0dXJuIDcuNTYyNSAqIChwb3MgLT0gMS41IC8gMi43NSkgKiBwb3MgKyAwLjc1O1xuICB9IGVsc2UgaWYgKHBvcyA8IDIuNSAvIDIuNzUpIHtcbiAgICByZXR1cm4gNy41NjI1ICogKHBvcyAtPSAyLjI1IC8gMi43NSkgKiBwb3MgKyAwLjkzNzU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDcuNTYyNSAqIChwb3MgLT0gMi42MjUgLyAyLjc1KSAqIHBvcyArIDAuOTg0Mzc1O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuY2VQYXN0KHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKHBvcyA8IDEgLyAyLjc1KSB7XG4gICAgcmV0dXJuIDcuNTYyNSAqIHBvcyAqIHBvcztcbiAgfSBlbHNlIGlmIChwb3MgPCAyIC8gMi43NSkge1xuICAgIHJldHVybiAyIC0gKDcuNTYyNSAqIChwb3MgLT0gMS41IC8gMi43NSkgKiBwb3MgKyAwLjc1KTtcbiAgfSBlbHNlIGlmIChwb3MgPCAyLjUgLyAyLjc1KSB7XG4gICAgcmV0dXJuIDIgLSAoNy41NjI1ICogKHBvcyAtPSAyLjI1IC8gMi43NSkgKiBwb3MgKyAwLjkzNzUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAyIC0gKDcuNTYyNSAqIChwb3MgLT0gMi42MjUgLyAyLjc1KSAqIHBvcyArIDAuOTg0Mzc1KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImJvdW5jZSIsImJvdW5jZVBhc3QiLCJlYXNlIiwiZWFzZUluIiwiZWFzZUluT3V0IiwiZWFzZU91dCIsImluQmFjayIsImluQ2lyYyIsImluQ3ViaWMiLCJpbkVsYXN0aWMiLCJpbkV4cG8iLCJpbk91dEJhY2siLCJpbk91dENpcmMiLCJpbk91dEN1YmljIiwiaW5PdXRFbGFzdGljIiwiaW5PdXRFeHBvIiwiaW5PdXRRdWFkIiwiaW5PdXRRdWFydCIsImluT3V0UXVpbnQiLCJpbk91dFNpbmUiLCJpblF1YWQiLCJpblF1YXJ0IiwiaW5RdWludCIsImluU2luZSIsIm91dEJhY2siLCJvdXRCb3VuY2UiLCJvdXRDaXJjIiwib3V0Q3ViaWMiLCJvdXRFbGFzdGljIiwib3V0RXhwbyIsIm91dFF1YWQiLCJvdXRRdWFydCIsIm91dFF1aW50Iiwib3V0U2luZSIsInN3aW5nRnJvbSIsInN3aW5nRnJvbVRvIiwic3dpbmdUbyIsIm1hZ2ljU3dpbmciLCJCZXppZXJFYXNpbmciLCJwb3MiLCJNYXRoIiwicG93IiwiY29zIiwiUEkiLCJzaW4iLCJzcXJ0IiwicyIsInAiLCJhIiwiYXNpbiJdLCJtYXBwaW5ncyI6IkFBQUEsb1BBQW9QOzs7Ozs7Ozs7Ozs7SUFpUXBPQSxNQUFNO2VBQU5BOztJQVlBQyxVQUFVO2VBQVZBOztJQWxRSEMsSUFBSTtlQUFKQTs7SUFDQUMsTUFBTTtlQUFOQTs7SUFFQUMsU0FBUztlQUFUQTs7SUFEQUMsT0FBTztlQUFQQTs7SUEySEdDLE1BQU07ZUFBTkE7O0lBM0JBQyxNQUFNO2VBQU5BOztJQTlFQUMsT0FBTztlQUFQQTs7SUEySEFDLFNBQVM7ZUFBVEE7O0lBbEVBQyxNQUFNO2VBQU5BOztJQTBEQUMsU0FBUztlQUFUQTs7SUE3QkFDLFNBQVM7ZUFBVEE7O0lBOUVBQyxVQUFVO2VBQVZBOztJQXFLQUMsWUFBWTtlQUFaQTs7SUE1R0FDLFNBQVM7ZUFBVEE7O0lBeEVBQyxTQUFTO2VBQVRBOztJQThCQUMsVUFBVTtlQUFWQTs7SUFlQUMsVUFBVTtlQUFWQTs7SUFlQUMsU0FBUztlQUFUQTs7SUFwRUFDLE1BQU07ZUFBTkE7O0lBOEJBQyxPQUFPO2VBQVBBOztJQWVBQyxPQUFPO2VBQVBBOztJQWVBQyxNQUFN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

}),
1799: (function (__unused_webpack_module, exports, __webpack_require__) {
"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    clearPlugin: function() {
        return clearPlugin;
    },
    createPluginInstance: function() {
        return createPluginInstance;
    },
    getPluginConfig: function() {
        return getPluginConfig;
    },
    getPluginDestination: function() {
        return getPluginDestination;
    },
    getPluginDuration: function() {
        return getPluginDuration;
    },
    getPluginOrigin: function() {
        return getPluginOrigin;
    },
    isPluginType: function() {
        return isPluginType;
    },
    renderPlugin: function() {
        return renderPlugin;
    }
});
const _IX2BrowserSupport = __webpack_require__(2662);
const _plugins = __webpack_require__(3690);
function isPluginType(actionTypeId) {
    // @ts-expect-error - TS2345 - Argument of type '"TRANSFORM_MOVE" | "TRANSFORM_SCALE" | "TRANSFORM_ROTATE" | "TRANSFORM_SKEW" | "STYLE_OPACITY" | "STYLE_SIZE" | "STYLE_FILTER" | "STYLE_FONT_VARIATION" | "STYLE_BACKGROUND_COLOR" | ... 12 more ... | "STYLE_BOX_SHADOW"' is not assignable to parameter of type '"PLUGIN_LOTTIE" | "PLUGIN_SPLINE" | "PLUGIN_VARIABLE"'.
    return _plugins.pluginMethodMap.has(actionTypeId);
}
const pluginMethod = (methodName)=>(actionTypeId)=>{
        if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
            // IX2 plugins require browser libs for now
            return ()=>null;
        }
        const plugin = _plugins.pluginMethodMap.get(actionTypeId);
        if (!plugin) {
            throw new Error(`IX2 no plugin configured for: ${actionTypeId}`);
        }
        const method = plugin[methodName];
        if (!method) {
            throw new Error(`IX2 invalid plugin method: ${methodName}`);
        }
        return method;
    };
const getPluginConfig = pluginMethod('getPluginConfig');
const getPluginOrigin = pluginMethod('getPluginOrigin');
const getPluginDuration = pluginMethod('getPluginDuration');
const getPluginDestination = pluginMethod('getPluginDestination');
const createPluginInstance = pluginMethod('createPluginInstance');
const renderPlugin = pluginMethod('renderPlugin');
const clearPlugin = pluginMethod('clearPlugin');

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC9sb2dpYy9JWDJWYW5pbGxhUGx1Z2lucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lTX0JST1dTRVJfRU5WfSBmcm9tICcuL0lYMkJyb3dzZXJTdXBwb3J0JztcbmltcG9ydCB7cGx1Z2luTWV0aG9kTWFwfSBmcm9tICdAcGFja2FnZXMvc3lzdGVtcy9peDIvcGx1Z2lucyc7XG5cbmltcG9ydCB0eXBlIHtBY3Rpb25UeXBlSWRUeXBlfSBmcm9tICdAcGFja2FnZXMvc3lzdGVtcy9peDIvdHlwZXMtY29yZSc7XG5pbXBvcnQgdHlwZSB7UGx1Z2luVHlwZX0gZnJvbSAnQHBhY2thZ2VzL3N5c3RlbXMvaXgyL3BsdWdpbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNQbHVnaW5UeXBlKGFjdGlvblR5cGVJZDogQWN0aW9uVHlwZUlkVHlwZSk6IGJvb2xlYW4ge1xuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzQ1IC0gQXJndW1lbnQgb2YgdHlwZSAnXCJUUkFOU0ZPUk1fTU9WRVwiIHwgXCJUUkFOU0ZPUk1fU0NBTEVcIiB8IFwiVFJBTlNGT1JNX1JPVEFURVwiIHwgXCJUUkFOU0ZPUk1fU0tFV1wiIHwgXCJTVFlMRV9PUEFDSVRZXCIgfCBcIlNUWUxFX1NJWkVcIiB8IFwiU1RZTEVfRklMVEVSXCIgfCBcIlNUWUxFX0ZPTlRfVkFSSUFUSU9OXCIgfCBcIlNUWUxFX0JBQ0tHUk9VTkRfQ09MT1JcIiB8IC4uLiAxMiBtb3JlIC4uLiB8IFwiU1RZTEVfQk9YX1NIQURPV1wiJyBpcyBub3QgYXNzaWduYWJsZSB0byBwYXJhbWV0ZXIgb2YgdHlwZSAnXCJQTFVHSU5fTE9UVElFXCIgfCBcIlBMVUdJTl9TUExJTkVcIiB8IFwiUExVR0lOX1ZBUklBQkxFXCInLlxuICByZXR1cm4gcGx1Z2luTWV0aG9kTWFwLmhhcyhhY3Rpb25UeXBlSWQpO1xufVxuXG50eXBlIFBsdWdpbk1ldGhvZE5hbWUgPVxuICB8ICdnZXRQbHVnaW5Db25maWcnXG4gIHwgJ2dldFBsdWdpbk9yaWdpbidcbiAgfCAnZ2V0UGx1Z2luRHVyYXRpb24nXG4gIHwgJ2dldFBsdWdpbkRlc3RpbmF0aW9uJ1xuICB8ICdjcmVhdGVQbHVnaW5JbnN0YW5jZSdcbiAgfCAncmVuZGVyUGx1Z2luJ1xuICB8ICdjbGVhclBsdWdpbic7XG5cbmNvbnN0IHBsdWdpbk1ldGhvZCA9XG4gIChtZXRob2ROYW1lOiBQbHVnaW5NZXRob2ROYW1lKSA9PiAoYWN0aW9uVHlwZUlkOiBQbHVnaW5UeXBlKSA9PiB7XG4gICAgaWYgKCFJU19CUk9XU0VSX0VOVikge1xuICAgICAgLy8gSVgyIHBsdWdpbnMgcmVxdWlyZSBicm93c2VyIGxpYnMgZm9yIG5vd1xuICAgICAgcmV0dXJuICgpID0+IG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHBsdWdpbiA9IHBsdWdpbk1ldGhvZE1hcC5nZXQoYWN0aW9uVHlwZUlkKTtcbiAgICBpZiAoIXBsdWdpbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJWDIgbm8gcGx1Z2luIGNvbmZpZ3VyZWQgZm9yOiAke2FjdGlvblR5cGVJZH1gKTtcbiAgICB9XG4gICAgY29uc3QgbWV0aG9kID0gcGx1Z2luW21ldGhvZE5hbWVdO1xuICAgIGlmICghbWV0aG9kKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYElYMiBpbnZhbGlkIHBsdWdpbiBtZXRob2Q6ICR7bWV0aG9kTmFtZX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIG1ldGhvZDtcbiAgfTtcblxuZXhwb3J0IGNvbnN0IGdldFBsdWdpbkNvbmZpZyA9IHBsdWdpbk1ldGhvZCgnZ2V0UGx1Z2luQ29uZmlnJyk7XG5leHBvcnQgY29uc3QgZ2V0UGx1Z2luT3JpZ2luID0gcGx1Z2luTWV0aG9kKCdnZXRQbHVnaW5PcmlnaW4nKTtcbmV4cG9ydCBjb25zdCBnZXRQbHVnaW5EdXJhdGlvbiA9IHBsdWdpbk1ldGhvZCgnZ2V0UGx1Z2luRHVyYXRpb24nKTtcbmV4cG9ydCBjb25zdCBnZXRQbHVnaW5EZXN0aW5hdGlvbiA9IHBsdWdpbk1ldGhvZCgnZ2V0UGx1Z2luRGVzdGluYXRpb24nKTtcbmV4cG9ydCBjb25zdCBjcmVhdGVQbHVnaW5JbnN0YW5jZSA9IHBsdWdpbk1ldGhvZCgnY3JlYXRlUGx1Z2luSW5zdGFuY2UnKTtcbmV4cG9ydCBjb25zdCByZW5kZXJQbHVnaW4gPSBwbHVnaW5NZXRob2QoJ3JlbmRlclBsdWdpbicpO1xuZXhwb3J0IGNvbnN0IGNsZWFyUGx1Z2luID0gcGx1Z2luTWV0aG9kKCdjbGVhclBsdWdpbicpO1xuIl0sIm5hbWVzIjpbImNsZWFyUGx1Z2luIiwiY3JlYXRlUGx1Z2luSW5zdGFuY2UiLCJnZXRQbHVnaW5Db25maWciLCJnZXRQbHVnaW5EZXN0aW5hdGlvbiIsImdldFBsdWdpbkR1cmF0aW9uIiwiZ2V0UGx1Z2luT3JpZ2luIiwiaXNQbHVnaW5UeXBlIiwicmVuZGVyUGx1Z2luIiwiYWN0aW9uVHlwZUlkIiwicGx1Z2luTWV0aG9kTWFwIiwiaGFzIiwicGx1Z2luTWV0aG9kIiwibWV0aG9kTmFtZSIsIklTX0JST1dTRVJfRU5WIiwicGx1Z2luIiwiZ2V0IiwiRXJyb3IiLCJtZXRob2QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBMkNhQSxXQUFXO2VBQVhBOztJQUZBQyxvQkFBb0I7ZUFBcEJBOztJQUpBQyxlQUFlO2VBQWZBOztJQUdBQyxvQkFBb0I7ZUFBcEJBOztJQURBQyxpQkFBaUI7ZUFBakJBOztJQURBQyxlQUFlO2VBQWZBOztJQWhDR0MsWUFBWTtlQUFaQTs7SUFvQ0hDLFlBQVk7ZUFBWkE7OzttQ0ExQ2dCO3lCQUNDO0FBS3ZCLFNBQVNELGFBQWFFLFlBQThCO0lBQ3pELDJXQUEyVztJQUMzVyxPQUFPQyx3QkFBZSxDQUFDQyxHQUFHLENBQUNGO0FBQzdCO0FBV0EsTUFBTUcsZUFDSixDQUFDQyxhQUFpQyxDQUFDSjtRQUNqQyxJQUFJLENBQUNLLGlDQUFjLEVBQUU7WUFDbkIsMkNBQTJDO1lBQzNDLE9BQU8sSUFBTTtRQUNmO1FBQ0EsTUFBTUMsU0FBU0wsd0JBQWUsQ0FBQ00sR0FBRyxDQUFDUDtRQUNuQyxJQUFJLENBQUNNLFFBQVE7WUFDWCxNQUFNLElBQUlFLE1BQU0sQ0FBQyw4QkFBOEIsRUFBRVIsYUFBYSxDQUFDO1FBQ2pFO1FBQ0EsTUFBTVMsU0FBU0gsTUFBTSxDQUFDRixXQUFXO1FBQ2pDLElBQUksQ0FBQ0ssUUFBUTtZQUNYLE1BQU0sSUFBSUQsTUFBTSxDQUFDLDJCQUEyQixFQUFFSixXQUFXLENBQUM7UUFDNUQ7UUFDQSxPQUFPSztJQUNUO0FBRUssTUFBTWYsa0JBQWtCUyxhQUFhO0FBQ3JDLE1BQU1OLGtCQUFrQk0sYUFBYTtBQUNyQyxNQUFNUCxvQkFBb0JPLGFBQWE7QUFDdkMsTUFBTVIsdUJBQXVCUSxhQUFhO0FBQzFDLE1BQU1WLHVCQUF1QlUsYUFBYTtBQUMxQyxNQUFNSixlQUFlSSxhQUFhO0FBQ2xDLE1BQU1YLGNBQWNXLGFBQWEifQ==

}),
4124: (function (__unused_webpack_module, exports, __webpack_require__) {
"use strict";
/* eslint-env browser */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    cleanupHTMLElement: function() {
        return cleanupHTMLElement;
    },
    clearAllStyles: function() {
        return clearAllStyles;
    },
    clearObjectCache: function() {
        return clearObjectCache;
    },
    getActionListProgress: function() {
        return getActionListProgress;
    },
    getAffectedElements: function() {
        return getAffectedElements;
    },
    getComputedStyle: function() {
        return getComputedStyle;
    },
    getDestinationValues: function() {
        return getDestinationValues;
    },
    getElementId: function() {
        return getElementId;
    },
    getInstanceId: function() {
        return getInstanceId;
    },
    getInstanceOrigin: function() {
        return getInstanceOrigin;
    },
    getItemConfigByKey: function() {
        return getItemConfigByKey;
    },
    getMaxDurationItemIndex: function() {
        return getMaxDurationItemIndex;
    },
    getNamespacedParameterId: function() {
        return getNamespacedParameterId;
    },
    getRenderType: function() {
        return getRenderType;
    },
    getStyleProp: function() {
        return getStyleProp;
    },
    mediaQueriesEqual: function() {
        return mediaQueriesEqual;
    },
    observeStore: function() {
        return observeStore;
    },
    reduceListToGroup: function() {
        return reduceListToGroup;
    },
    reifyState: function() {
        return reifyState;
    },
    renderHTMLElement: function() {
        return renderHTMLElement;
    },
    shallowEqual: function() {
        return _shallowEqual.default;
    },
    shouldAllowMediaQuery: function() {
        return shouldAllowMediaQuery;
    },
    shouldNamespaceEventParameter: function() {
        return shouldNamespaceEventParameter;
    },
    stringifyTarget: function() {
        return stringifyTarget;
    }
});
const _defaultTo = /*#__PURE__*/ _interop_require_default(__webpack_require__(4075));
const _reduce = /*#__PURE__*/ _interop_require_default(__webpack_require__(1455));
const _findLast = /*#__PURE__*/ _interop_require_default(__webpack_require__(5720));
const _timm = __webpack_require__(1185);
const _sharedconstants = __webpack_require__(7087);
const _shallowEqual = /*#__PURE__*/ _interop_require_default(__webpack_require__(7164));
const _IX2EasingUtils = __webpack_require__(3767);
const _normalizeColor = __webpack_require__(380);
const _IX2VanillaPlugins = __webpack_require__(1799);
const _IX2BrowserSupport = __webpack_require__(2662);
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { BACKGROUND, TRANSFORM, TRANSLATE_3D, SCALE_3D, ROTATE_X, ROTATE_Y, ROTATE_Z, SKEW, PRESERVE_3D, FLEX, OPACITY, FILTER, FONT_VARIATION_SETTINGS, WIDTH, HEIGHT, BACKGROUND_COLOR, BORDER_COLOR, COLOR, CHILDREN, IMMEDIATE_CHILDREN, SIBLINGS, PARENT, DISPLAY, WILL_CHANGE, AUTO, COMMA_DELIMITER, COLON_DELIMITER, BAR_DELIMITER, RENDER_TRANSFORM, RENDER_GENERAL, RENDER_STYLE, RENDER_PLUGIN } = _sharedconstants.IX2EngineConstants;
const { TRANSFORM_MOVE, TRANSFORM_SCALE, TRANSFORM_ROTATE, TRANSFORM_SKEW, STYLE_OPACITY, STYLE_FILTER, STYLE_FONT_VARIATION, STYLE_SIZE, STYLE_BACKGROUND_COLOR, STYLE_BORDER, STYLE_TEXT_COLOR, GENERAL_DISPLAY, OBJECT_VALUE } = _sharedconstants.ActionTypeConsts;
// @ts-expect-error - TS7006 - Parameter 'v' implicitly has an 'any' type.
const trim = (v)=>v.trim();
const colorStyleProps = Object.freeze({
    [STYLE_BACKGROUND_COLOR]: BACKGROUND_COLOR,
    [STYLE_BORDER]: BORDER_COLOR,
    [STYLE_TEXT_COLOR]: COLOR
});
const willChangeProps = Object.freeze({
    [_IX2BrowserSupport.TRANSFORM_PREFIXED]: TRANSFORM,
    [BACKGROUND_COLOR]: BACKGROUND,
    [OPACITY]: OPACITY,
    [FILTER]: FILTER,
    [WIDTH]: WIDTH,
    [HEIGHT]: HEIGHT,
    [FONT_VARIATION_SETTINGS]: FONT_VARIATION_SETTINGS
});
const objectCache = new Map();
function clearObjectCache() {
    objectCache.clear();
}
let instanceCount = 1;
function getInstanceId() {
    return 'i' + instanceCount++;
}
let elementCount = 1;
function getElementId(ixElements, ref) {
    // TODO: optimize element lookup
    for(const key in ixElements){
        const ixEl = ixElements[key];
        if (ixEl && ixEl.ref === ref) {
            return ixEl.id;
        }
    }
    return 'e' + elementCount++;
}
function reifyState({ events, actionLists, site } = {}) {
    const eventTypeMap = (0, _reduce.default)(events, (result, event)=>{
        const { eventTypeId } = event;
        if (!result[eventTypeId]) {
            result[eventTypeId] = {};
        }
        result[eventTypeId][event.id] = event;
        return result;
    }, {});
    let mediaQueries = site && site.mediaQueries;
    let mediaQueryKeys = [];
    if (mediaQueries) {
        mediaQueryKeys = mediaQueries.map((mq)=>mq.key);
    } else {
        mediaQueries = [];
        console.warn(`IX2 missing mediaQueries in site data`);
    }
    return {
        ixData: {
            events,
            actionLists,
            eventTypeMap,
            mediaQueries,
            mediaQueryKeys
        }
    };
}
const strictEqual = (a, b)=>a === b;
function observeStore({ // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
store, // @ts-expect-error - TS7031 - Binding element 'select' implicitly has an 'any' type.
select, // @ts-expect-error - TS7031 - Binding element 'onChange' implicitly has an 'any' type.
onChange, comparator = strictEqual }) {
    const { getState, subscribe } = store;
    const unsubscribe = subscribe(handleChange);
    let currentState = select(getState());
    function handleChange() {
        const nextState = select(getState());
        if (nextState == null) {
            unsubscribe();
            return;
        }
        if (!comparator(nextState, currentState)) {
            currentState = nextState;
            onChange(currentState, store);
        }
    }
    return unsubscribe;
}
// @ts-expect-error - TS7006 - Parameter 'target' implicitly has an 'any' type.
function normalizeTarget(target) {
    const type = typeof target;
    if (type === 'string') {
        return {
            id: target
        };
    } else if (target != null && type === 'object') {
        const { id, objectId, selector, selectorGuids, appliesTo, useEventTarget } = target;
        return {
            id,
            objectId,
            selector,
            selectorGuids,
            appliesTo,
            useEventTarget
        };
    }
    return {};
}
function getAffectedElements({ config, event, eventTarget, elementRoot, elementApi }) {
    if (!elementApi) {
        throw new Error('IX2 missing elementApi');
    }
    const { targets } = config;
    if (Array.isArray(targets) && targets.length > 0) {
        return targets.reduce((accumulator, target)=>accumulator.concat(getAffectedElements({
                config: {
                    target
                },
                event,
                eventTarget,
                elementRoot,
                elementApi
            })), []);
    }
    const { getValidDocument, getQuerySelector, queryDocument, getChildElements, getSiblingElements, matchSelector, elementContains, isSiblingNode } = elementApi;
    const { target } = config;
    if (!target) {
        return [];
    }
    const { id, objectId, selector, selectorGuids, appliesTo, useEventTarget } = normalizeTarget(target);
    if (objectId) {
        const ref = objectCache.has(objectId) ? objectCache.get(objectId) : objectCache.set(objectId, {}).get(objectId);
        return [
            ref
        ];
    }
    if (appliesTo === _sharedconstants.EventAppliesTo.PAGE) {
        const doc = getValidDocument(id);
        return doc ? [
            doc
        ] : [];
    }
    const overrides = event?.action?.config?.affectedElements ?? {};
    const override = overrides[id || selector] || {};
    const validOverride = Boolean(override.id || override.selector);
    let limitAffectedElements;
    let baseSelector;
    let finalSelector;
    const eventTargetSelector = event && getQuerySelector(normalizeTarget(event.target));
    if (validOverride) {
        limitAffectedElements = override.limitAffectedElements;
        baseSelector = eventTargetSelector;
        finalSelector = getQuerySelector(override);
    } else {
        // pass in selectorGuids as well for server-side rendering.
        baseSelector = finalSelector = getQuerySelector({
            id,
            selector,
            selectorGuids
        });
    }
    if (event && useEventTarget) {
        // eventTarget is not defined when this function is called in a clear request, so find
        // all target elements associated with the event data, and return affected elements.
        const eventTargets = eventTarget && (finalSelector || useEventTarget === true) ? [
            eventTarget
        ] : queryDocument(eventTargetSelector);
        if (finalSelector) {
            if (useEventTarget === PARENT) {
                return queryDocument(finalSelector).filter((parentElement)=>eventTargets.some((targetElement)=>elementContains(parentElement, targetElement)));
            }
            if (useEventTarget === CHILDREN) {
                return queryDocument(finalSelector).filter((childElement)=>eventTargets.some((targetElement)=>elementContains(targetElement, childElement)));
            }
            if (useEventTarget === SIBLINGS) {
                return queryDocument(finalSelector).filter((siblingElement)=>eventTargets.some((targetElement)=>isSiblingNode(targetElement, siblingElement)));
            }
        }
        return eventTargets;
    }
    if (baseSelector == null || finalSelector == null) {
        return [];
    }
    if (_IX2BrowserSupport.IS_BROWSER_ENV && elementRoot) {
        return queryDocument(finalSelector).filter((element)=>// @ts-expect-error - elementRoot is HTMLElement in browser
            elementRoot.contains(element));
    }
    if (limitAffectedElements === CHILDREN) {
        return queryDocument(baseSelector, finalSelector);
    } else if (limitAffectedElements === IMMEDIATE_CHILDREN) {
        return getChildElements(queryDocument(baseSelector)).filter(matchSelector(finalSelector));
    } else if (limitAffectedElements === SIBLINGS) {
        return getSiblingElements(queryDocument(baseSelector)).filter(matchSelector(finalSelector));
    } else {
        return queryDocument(finalSelector);
    }
}
function getComputedStyle({ element, actionItem }) {
    if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
        return {};
    }
    const { actionTypeId } = actionItem;
    switch(actionTypeId){
        case STYLE_SIZE:
        case STYLE_BACKGROUND_COLOR:
        case STYLE_BORDER:
        case STYLE_TEXT_COLOR:
        case GENERAL_DISPLAY:
            return window.getComputedStyle(element);
        default:
            return {};
    }
}
const pxValueRegex = /px/;
// @ts-expect-error - TS7006 - Parameter 'filters' implicitly has an 'any' type.
const getFilterDefaults = (actionState, filters)=>// @ts-expect-error - TS7006 - Parameter 'result' implicitly has an 'any' type. | TS7006 - Parameter 'filter' implicitly has an 'any' type.
    filters.reduce((result, filter)=>{
        if (result[filter.type] == null) {
            result[filter.type] = // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'Readonly<{ blur: 0; 'hue-rotate': 0; invert: 0; grayscale: 0; saturate: 100; sepia: 0; contrast: 100; brightness: 100; }>'.
            filterDefaults[filter.type];
        }
        return result;
    }, actionState || {});
const getFontVariationDefaults = (actionState, fontVariations)=>fontVariations.reduce((result, fontVariation)=>{
        if (result[fontVariation.type] == null) {
            result[fontVariation.type] = // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Readonly<{ wght: 0; opsz: 0; wdth: 0; slnt: 0; }>'.
            fontVariationDefaults[fontVariation.type] || // @ts-expect-error - TS2339 - Property 'defaultValue' does not exist on type 'FontVariationItemConfigType'.
            fontVariation.defaultValue || 0;
        }
        return result;
    }, actionState || {});
function getInstanceOrigin(element, refState = {}, computedStyle = {}, actionItem, elementApi) {
    const { getStyle } = elementApi;
    // Flow Hack: Passing actionTypeId to isPluginType and then trying
    // to do type refinement using the same variable via a switch statement
    // breaks down. This is is a workaround to ensure we can use type refinement.
    const { actionTypeId } = actionItem;
    if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
        // @ts-expect-error - TS2345 - Argument of type '"TRANSFORM_MOVE" | "TRANSFORM_SCALE" | "TRANSFORM_ROTATE" | "TRANSFORM_SKEW" | "STYLE_OPACITY" | "STYLE_SIZE" | "STYLE_FILTER" | "STYLE_FONT_VARIATION" | "STYLE_BACKGROUND_COLOR" | "STYLE_BORDER" | "STYLE_TEXT_COLOR" | "PLUGIN_LOTTIE" | "GENERAL_DISPLAY"' is not assignable to parameter of type 'PluginType'. | TS7053 - Element implicitly has an 'any' type because expression of type '"TRANSFORM_MOVE" | "TRANSFORM_SCALE" | "TRANSFORM_ROTATE" | "TRANSFORM_SKEW" | "STYLE_OPACITY" | "STYLE_SIZE" | "STYLE_FILTER" | "STYLE_FONT_VARIATION" | "STYLE_BACKGROUND_COLOR" | "STYLE_BORDER" | "STYLE_TEXT_COLOR" | "PLUGIN_LOTTIE" | "GENERAL_DISPLAY"' can't be used to index type '{}'.
        return (0, _IX2VanillaPlugins.getPluginOrigin)(actionTypeId)(refState[actionTypeId], actionItem);
    }
    switch(actionItem.actionTypeId){
        case TRANSFORM_MOVE:
        case TRANSFORM_SCALE:
        case TRANSFORM_ROTATE:
        case TRANSFORM_SKEW:
            {
                return(// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"TRANSFORM_MOVE" | "TRANSFORM_SCALE" | "TRANSFORM_ROTATE" | "TRANSFORM_SKEW"' can't be used to index type '{}'.
                refState[actionItem.actionTypeId] || transformDefaults[actionItem.actionTypeId]);
            }
        case STYLE_FILTER:
            return getFilterDefaults(// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"STYLE_FILTER"' can't be used to index type '{}'.
            refState[actionItem.actionTypeId], actionItem.config.filters);
        case STYLE_FONT_VARIATION:
            return getFontVariationDefaults(// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"STYLE_FONT_VARIATION"' can't be used to index type '{}'.
            refState[actionItem.actionTypeId], actionItem.config.fontVariations);
        case STYLE_OPACITY:
            return {
                value: (0, _defaultTo.default)(parseFloat(getStyle(element, OPACITY)), 1.0)
            };
        case STYLE_SIZE:
            {
                const inlineWidth = getStyle(element, WIDTH);
                const inlineHeight = getStyle(element, HEIGHT);
                let widthValue;
                let heightValue;
                // When destination unit is 'AUTO', ensure origin values are in px
                if (actionItem.config.widthUnit === AUTO) {
                    widthValue = pxValueRegex.test(inlineWidth) ? parseFloat(inlineWidth) : parseFloat(computedStyle.width);
                } else {
                    widthValue = (0, _defaultTo.default)(parseFloat(inlineWidth), // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
                    parseFloat(computedStyle.width));
                }
                if (actionItem.config.heightUnit === AUTO) {
                    heightValue = pxValueRegex.test(inlineHeight) ? parseFloat(inlineHeight) : parseFloat(computedStyle.height);
                } else {
                    heightValue = (0, _defaultTo.default)(parseFloat(inlineHeight), // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
                    parseFloat(computedStyle.height));
                }
                return {
                    widthValue,
                    heightValue
                };
            }
        case STYLE_BACKGROUND_COLOR:
        case STYLE_BORDER:
        case STYLE_TEXT_COLOR:
            return parseColor({
                element,
                actionTypeId: actionItem.actionTypeId,
                computedStyle,
                getStyle
            });
        case GENERAL_DISPLAY:
            return {
                // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
                value: (0, _defaultTo.default)(getStyle(element, DISPLAY), computedStyle.display)
            };
        // @ts-expect-error - `OBJECT_VALUE` is not an expected `actionTypeId`
        case OBJECT_VALUE:
            // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{}'. | TS2339 - Property 'actionTypeId' does not exist on type 'never'.
            return refState[actionItem.actionTypeId] || {
                value: 0
            };
        default:
            {
                // As far as the type system can tell, we're missing a handler for
                // PLUGIN_LOTTIE.
                //
                // This is actually handled by `isPluginType` above.
                //
                /*:: (actionItem: empty); */ return;
            }
    }
}
// @ts-expect-error - TS7006 - Parameter 'result' implicitly has an 'any' type. | TS7006 - Parameter 'filter' implicitly has an 'any' type.
const reduceFilters = (result, filter)=>{
    if (filter) {
        result[filter.type] = filter.value || 0;
    }
    return result;
};
const reduceFontVariations = (result, fontVariation)=>{
    if (fontVariation) {
        result[fontVariation.type] = fontVariation.value || 0;
    }
    return result;
};
const getItemConfigByKey = (actionTypeId, key, config)=>{
    if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
        return (0, _IX2VanillaPlugins.getPluginConfig)(actionTypeId)(config, key);
    }
    switch(actionTypeId){
        case STYLE_FILTER:
            {
                const filter = (0, _findLast.default)(config.filters, ({ type })=>type === key);
                return filter ? filter.value : 0;
            }
        case STYLE_FONT_VARIATION:
            {
                const fontVariation = (0, _findLast.default)(config.fontVariations, ({ type })=>type === key);
                return fontVariation ? fontVariation.value : 0;
            }
        default:
            return config[key];
    }
};
function getDestinationValues({ element, actionItem, elementApi }) {
    if ((0, _IX2VanillaPlugins.isPluginType)(actionItem.actionTypeId)) {
        // @ts-expect-error - TS2345 - Argument of type '"TRANSFORM_MOVE" | "TRANSFORM_SCALE" | "TRANSFORM_ROTATE" | "TRANSFORM_SKEW" | "STYLE_OPACITY" | "STYLE_SIZE" | "STYLE_FILTER" | "STYLE_FONT_VARIATION" | "STYLE_BACKGROUND_COLOR" | "STYLE_BORDER" | "STYLE_TEXT_COLOR" | "PLUGIN_LOTTIE" | "GENERAL_DISPLAY"' is not assignable to parameter of type 'PluginType'.
        return (0, _IX2VanillaPlugins.getPluginDestination)(actionItem.actionTypeId)(actionItem.config);
    }
    switch(actionItem.actionTypeId){
        case TRANSFORM_MOVE:
        case TRANSFORM_SCALE:
        case TRANSFORM_ROTATE:
        case TRANSFORM_SKEW:
            {
                const { xValue, yValue, zValue } = actionItem.config;
                return {
                    xValue,
                    yValue,
                    zValue
                };
            }
        case STYLE_SIZE:
            {
                const { getStyle, setStyle, getProperty } = elementApi;
                const { widthUnit, heightUnit } = actionItem.config;
                let { widthValue, heightValue } = actionItem.config;
                if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
                    return {
                        widthValue,
                        heightValue
                    };
                }
                if (widthUnit === AUTO) {
                    const temp = getStyle(element, WIDTH);
                    setStyle(element, WIDTH, '');
                    // @ts-expect-error - TS2322 - Type 'string | null' is not assignable to type 'number | undefined'.
                    widthValue = getProperty(element, 'offsetWidth');
                    setStyle(element, WIDTH, temp);
                }
                if (heightUnit === AUTO) {
                    const temp = getStyle(element, HEIGHT);
                    setStyle(element, HEIGHT, '');
                    // @ts-expect-error - TS2322 - Type 'string | null' is not assignable to type 'number | undefined'.
                    heightValue = getProperty(element, 'offsetHeight');
                    setStyle(element, HEIGHT, temp);
                }
                return {
                    widthValue,
                    heightValue
                };
            }
        case STYLE_BACKGROUND_COLOR:
        case STYLE_BORDER:
        case STYLE_TEXT_COLOR:
            {
                const { rValue, gValue, bValue, aValue, globalSwatchId } = actionItem.config;
                if (globalSwatchId && globalSwatchId.startsWith('--')) {
                    const { getStyle } = elementApi;
                    const value = getStyle(element, globalSwatchId);
                    const normalizedValue = (0, _normalizeColor.normalizeColor)(value);
                    return {
                        rValue: normalizedValue.red,
                        gValue: normalizedValue.green,
                        bValue: normalizedValue.blue,
                        aValue: normalizedValue.alpha
                    };
                }
                return {
                    rValue,
                    gValue,
                    bValue,
                    aValue
                };
            }
        case STYLE_FILTER:
            {
                return actionItem.config.filters.reduce(reduceFilters, {});
            }
        case STYLE_FONT_VARIATION:
            {
                return actionItem.config.fontVariations.reduce(reduceFontVariations, {});
            }
        default:
            {
                const { value } = actionItem.config;
                return {
                    value
                };
            }
    }
}
function getRenderType(actionTypeId) {
    if (/^TRANSFORM_/.test(actionTypeId)) {
        return RENDER_TRANSFORM;
    }
    if (/^STYLE_/.test(actionTypeId)) {
        return RENDER_STYLE;
    }
    if (/^GENERAL_/.test(actionTypeId)) {
        return RENDER_GENERAL;
    }
    if (/^PLUGIN_/.test(actionTypeId)) {
        return RENDER_PLUGIN;
    }
}
function getStyleProp(renderType, actionTypeId) {
    return renderType === RENDER_STYLE ? actionTypeId.replace('STYLE_', '').toLowerCase() : null;
}
function renderHTMLElement(element, refState, actionState, eventId, actionItem, styleProp, elementApi, renderType, pluginInstance) {
    switch(renderType){
        case RENDER_TRANSFORM:
            {
                return renderTransform(element, refState, actionState, actionItem, elementApi);
            }
        case RENDER_STYLE:
            {
                return renderStyle(element, refState, actionState, actionItem, styleProp, elementApi);
            }
        case RENDER_GENERAL:
            {
                return renderGeneral(element, actionItem, elementApi);
            }
        case RENDER_PLUGIN:
            {
                const { actionTypeId } = actionItem;
                if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
                    return (0, _IX2VanillaPlugins.renderPlugin)(actionTypeId)(pluginInstance, refState, actionItem);
                }
            }
    }
}
const transformDefaults = {
    [TRANSFORM_MOVE]: Object.freeze({
        xValue: 0,
        yValue: 0,
        zValue: 0
    }),
    [TRANSFORM_SCALE]: Object.freeze({
        xValue: 1,
        yValue: 1,
        zValue: 1
    }),
    [TRANSFORM_ROTATE]: Object.freeze({
        xValue: 0,
        yValue: 0,
        zValue: 0
    }),
    [TRANSFORM_SKEW]: Object.freeze({
        xValue: 0,
        yValue: 0
    })
};
const filterDefaults = Object.freeze({
    blur: 0,
    'hue-rotate': 0,
    invert: 0,
    grayscale: 0,
    saturate: 100,
    sepia: 0,
    contrast: 100,
    brightness: 100
});
const fontVariationDefaults = Object.freeze({
    wght: 0,
    opsz: 0,
    wdth: 0,
    slnt: 0
});
// @ts-expect-error - TS7006 - Parameter 'filterType' implicitly has an 'any' type. | TS7006 - Parameter 'actionItemConfig' implicitly has an 'any' type.
const getFilterUnit = (filterType, actionItemConfig)=>{
    const filter = (0, _findLast.default)(actionItemConfig.filters, ({ type })=>type === filterType);
    if (filter && filter.unit) {
        return filter.unit;
    }
    switch(filterType){
        case 'blur':
            return 'px';
        case 'hue-rotate':
            return 'deg';
        default:
            return '%';
    }
};
const transformKeys = Object.keys(transformDefaults);
function renderTransform(element, refState, actionState, actionItem, elementApi) {
    const newTransform = transformKeys.map((actionTypeId)=>{
        // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly TRANSFORM_MOVE: Readonly<{ xValue: 0; yValue: 0; zValue: 0; }>; readonly TRANSFORM_SCALE: Readonly<{ xValue: 1; yValue: 1; zValue: 1; }>; readonly TRANSFORM_ROTATE: Readonly<{ xValue: 0; yValue: 0; zValue: 0; }>; readonly TRANSFORM_SKEW: Readonly<...>; }'.
        const defaults = transformDefaults[actionTypeId];
        const { xValue = defaults.xValue, yValue = defaults.yValue, zValue = defaults.zValue, xUnit = '', yUnit = '', zUnit = '' } = refState[actionTypeId] || {};
        switch(actionTypeId){
            case TRANSFORM_MOVE:
                return `${TRANSLATE_3D}(${xValue}${xUnit}, ${yValue}${yUnit}, ${zValue}${zUnit})`;
            case TRANSFORM_SCALE:
                return `${SCALE_3D}(${xValue}${xUnit}, ${yValue}${yUnit}, ${zValue}${zUnit})`;
            case TRANSFORM_ROTATE:
                return `${ROTATE_X}(${xValue}${xUnit}) ${ROTATE_Y}(${yValue}${yUnit}) ${ROTATE_Z}(${zValue}${zUnit})`;
            case TRANSFORM_SKEW:
                return `${SKEW}(${xValue}${xUnit}, ${yValue}${yUnit})`;
            default:
                return '';
        }
    }).join(' ');
    const { setStyle } = elementApi;
    addWillChange(element, _IX2BrowserSupport.TRANSFORM_PREFIXED, elementApi);
    setStyle(element, _IX2BrowserSupport.TRANSFORM_PREFIXED, newTransform);
    // Set transform-style: preserve-3d
    if (hasDefined3dTransform(actionItem, actionState)) {
        setStyle(element, _IX2BrowserSupport.TRANSFORM_STYLE_PREFIXED, PRESERVE_3D);
    }
}
function renderFilter(element, actionState, actionItemConfig, elementApi) {
    const filterValue = (0, _reduce.default)(actionState, (result, value, type)=>`${result} ${type}(${value}${getFilterUnit(type, actionItemConfig)})`, '');
    const { setStyle } = elementApi;
    addWillChange(element, FILTER, elementApi);
    setStyle(element, FILTER, filterValue);
}
function renderFontVariation(element, actionState, actionItemConfig, elementApi) {
    const fontVariationValue = (0, _reduce.default)(actionState, (result, value, type)=>{
        // @ts-expect-error - TS2345 - Argument of type 'string' is not assignable to parameter of type 'never'.
        result.push(`"${type}" ${value}`);
        return result;
    }, []).join(', ');
    const { setStyle } = elementApi;
    addWillChange(element, FONT_VARIATION_SETTINGS, elementApi);
    setStyle(element, FONT_VARIATION_SETTINGS, fontVariationValue);
}
// @ts-expect-error - TS7031 - Binding element 'actionTypeId' implicitly has an 'any' type. | TS7031 - Binding element 'xValue' implicitly has an 'any' type. | TS7031 - Binding element 'yValue' implicitly has an 'any' type. | TS7031 - Binding element 'zValue' implicitly has an 'any' type.
function hasDefined3dTransform({ actionTypeId }, { xValue, yValue, zValue }) {
    // TRANSLATE_Z
    return actionTypeId === TRANSFORM_MOVE && zValue !== undefined || // SCALE_Z
    actionTypeId === TRANSFORM_SCALE && zValue !== undefined || // ROTATE_X or ROTATE_Y
    actionTypeId === TRANSFORM_ROTATE && (xValue !== undefined || yValue !== undefined);
}
const paramCapture = '\\(([^)]+)\\)';
const rgbValidRegex = /^rgb/;
const rgbMatchRegex = RegExp(`rgba?${paramCapture}`);
function getFirstMatch(regex, value) {
    const match = regex.exec(value);
    return match ? match[1] : '';
}
// @ts-expect-error - TS7031 - Binding element 'element' implicitly has an 'any' type. | TS7031 - Binding element 'actionTypeId' implicitly has an 'any' type. | TS7031 - Binding element 'computedStyle' implicitly has an 'any' type. | TS7031 - Binding element 'getStyle' implicitly has an 'any' type.
function parseColor({ element, actionTypeId, computedStyle, getStyle }) {
    // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'Readonly<{ STYLE_BACKGROUND_COLOR: "backgroundColor"; STYLE_BORDER: "borderColor"; STYLE_TEXT_COLOR: "color"; }>'.
    const prop = colorStyleProps[actionTypeId];
    const inlineValue = getStyle(element, prop);
    const value = rgbValidRegex.test(inlineValue) ? inlineValue : computedStyle[prop];
    // @ts-expect-error - TS2532 - Object is possibly 'undefined'.
    const matches = getFirstMatch(rgbMatchRegex, value).split(COMMA_DELIMITER);
    return {
        // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
        rValue: (0, _defaultTo.default)(parseInt(matches[0], 10), 255),
        // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
        gValue: (0, _defaultTo.default)(parseInt(matches[1], 10), 255),
        // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
        bValue: (0, _defaultTo.default)(parseInt(matches[2], 10), 255),
        // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
        aValue: (0, _defaultTo.default)(parseFloat(matches[3]), 1)
    };
}
function renderStyle(element, refState, actionState, actionItem, styleProp, elementApi) {
    const { setStyle } = elementApi;
    switch(actionItem.actionTypeId){
        case STYLE_SIZE:
            {
                let { widthUnit = '', heightUnit = '' } = actionItem.config;
                const { widthValue, heightValue } = actionState;
                if (widthValue !== undefined) {
                    if (widthUnit === AUTO) {
                        widthUnit = 'px';
                    }
                    addWillChange(element, WIDTH, elementApi);
                    setStyle(element, WIDTH, widthValue + widthUnit);
                }
                if (heightValue !== undefined) {
                    if (heightUnit === AUTO) {
                        heightUnit = 'px';
                    }
                    addWillChange(element, HEIGHT, elementApi);
                    setStyle(element, HEIGHT, heightValue + heightUnit);
                }
                break;
            }
        case STYLE_FILTER:
            {
                renderFilter(element, actionState, actionItem.config, elementApi);
                break;
            }
        case STYLE_FONT_VARIATION:
            {
                renderFontVariation(element, actionState, actionItem.config, elementApi);
                break;
            }
        case STYLE_BACKGROUND_COLOR:
        case STYLE_BORDER:
        case STYLE_TEXT_COLOR:
            {
                const prop = colorStyleProps[actionItem.actionTypeId];
                const rValue = Math.round(actionState.rValue);
                const gValue = Math.round(actionState.gValue);
                const bValue = Math.round(actionState.bValue);
                const aValue = actionState.aValue;
                addWillChange(element, prop, elementApi);
                setStyle(element, prop, aValue >= 1 ? `rgb(${rValue},${gValue},${bValue})` : `rgba(${rValue},${gValue},${bValue},${aValue})`);
                break;
            }
        default:
            {
                // @ts-expect-error - TS2339 - Property 'unit' does not exist on type '{ delay: number; easing: IX2EasingType; duration: number; target: ActionItemTargetType; xValue: number | undefined; yValue: number | undefined; zValue: number | undefined; xUnit: "%" | ... 4 more ... | "VW"; yUnit: "%" | ... 4 more ... | "VW"; zUnit: "%" | ... 4 more ... | "VW"; } | ... 5 more ... | { ...; }'.
                const { unit = '' } = actionItem.config;
                addWillChange(element, styleProp, elementApi);
                setStyle(element, styleProp, actionState.value + unit);
                break;
            }
    }
}
function renderGeneral(element, actionItem, elementApi) {
    const { setStyle } = elementApi;
    switch(actionItem.actionTypeId){
        case GENERAL_DISPLAY:
            {
                const { value } = actionItem.config;
                if (value === FLEX && _IX2BrowserSupport.IS_BROWSER_ENV) {
                    setStyle(element, DISPLAY, _IX2BrowserSupport.FLEX_PREFIXED);
                } else {
                    setStyle(element, DISPLAY, value);
                }
                return;
            }
    }
}
function addWillChange(element, prop, elementApi) {
    if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
        return;
    }
    const validProp = willChangeProps[prop];
    if (!validProp) {
        return;
    }
    const { getStyle, setStyle } = elementApi;
    const value = getStyle(element, WILL_CHANGE);
    if (!value) {
        setStyle(element, WILL_CHANGE, validProp);
        return;
    }
    const values = value.split(COMMA_DELIMITER).map(trim);
    if (values.indexOf(validProp) === -1) {
        setStyle(element, WILL_CHANGE, values.concat(validProp).join(COMMA_DELIMITER));
    }
}
// @ts-expect-error - TS7006 - Parameter 'prop' implicitly has an 'any' type.
function removeWillChange(element, prop, elementApi) {
    if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
        return;
    }
    const validProp = willChangeProps[prop];
    if (!validProp) {
        return;
    }
    const { getStyle, setStyle } = elementApi;
    const value = getStyle(element, WILL_CHANGE);
    if (!value || value.indexOf(validProp) === -1) {
        return;
    }
    setStyle(element, WILL_CHANGE, value.split(COMMA_DELIMITER).map(trim)// @ts-expect-error - TS7006 - Parameter 'v' implicitly has an 'any' type.
    .filter((v)=>v !== validProp).join(COMMA_DELIMITER));
}
function clearAllStyles({ store, elementApi }) {
    const { ixData } = store.getState();
    const { events = {}, actionLists = {} } = ixData;
    Object.keys(events).forEach((eventId)=>{
        const event = events[eventId];
        const { config } = event.action;
        const { actionListId } = config;
        const actionList = actionLists[actionListId];
        if (actionList) {
            clearActionListStyles({
                actionList,
                event,
                elementApi
            });
        }
    });
    Object.keys(actionLists).forEach((actionListId)=>{
        // @ts-expect-error - TS2345 - Argument of type '{ actionList: any; elementApi: any; }' is not assignable to parameter of type '{ actionList?: {} | undefined; event: any; elementApi: any; }'.
        clearActionListStyles({
            actionList: actionLists[actionListId],
            elementApi
        });
    });
}
// @ts-expect-error - TS7031 - Binding element 'event' implicitly has an 'any' type. | TS7031 - Binding element 'elementApi' implicitly has an 'any' type.
function clearActionListStyles({ actionList = {}, event, elementApi }) {
    // @ts-expect-error - TS2339 - Property 'actionItemGroups' does not exist on type '{}'. | TS2339 - Property 'continuousParameterGroups' does not exist on type '{}'.
    const { actionItemGroups, continuousParameterGroups } = actionList;
    actionItemGroups && // @ts-expect-error - TS7006 - Parameter 'actionGroup' implicitly has an 'any' type.
    actionItemGroups.forEach((actionGroup)=>{
        clearActionGroupStyles({
            actionGroup,
            event,
            elementApi
        });
    });
    continuousParameterGroups && // @ts-expect-error - TS7006 - Parameter 'paramGroup' implicitly has an 'any' type.
    continuousParameterGroups.forEach((paramGroup)=>{
        const { continuousActionGroups } = paramGroup;
        // @ts-expect-error - TS7006 - Parameter 'actionGroup' implicitly has an 'any' type.
        continuousActionGroups.forEach((actionGroup)=>{
            clearActionGroupStyles({
                actionGroup,
                event,
                elementApi
            });
        });
    });
}
// @ts-expect-error - TS7031 - Binding element 'actionGroup' implicitly has an 'any' type. | TS7031 - Binding element 'event' implicitly has an 'any' type. | TS7031 - Binding element 'elementApi' implicitly has an 'any' type.
function clearActionGroupStyles({ actionGroup, event, elementApi }) {
    const { actionItems } = actionGroup;
    // @ts-expect-error - TS7006 - Parameter 'actionItem' implicitly has an 'any' type.
    actionItems.forEach((actionItem)=>{
        const { actionTypeId, config } = actionItem;
        let clearElement;
        if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
            // @ts-expect-error - TS7006 - Parameter 'ref' implicitly has an 'any' type.
            clearElement = (ref)=>(0, _IX2VanillaPlugins.clearPlugin)(actionTypeId)(ref, actionItem);
        } else {
            clearElement = processElementByType({
                effect: clearStyleProp,
                actionTypeId,
                elementApi
            });
        }
        getAffectedElements({
            config,
            event,
            elementApi
        }).forEach(clearElement);
    });
}
function cleanupHTMLElement(element, actionItem, elementApi) {
    const { setStyle, getStyle } = elementApi;
    const { actionTypeId } = actionItem;
    if (actionTypeId === STYLE_SIZE) {
        const { config } = actionItem;
        if (config.widthUnit === AUTO) {
            setStyle(element, WIDTH, '');
        }
        if (config.heightUnit === AUTO) {
            setStyle(element, HEIGHT, '');
        }
    }
    if (getStyle(element, WILL_CHANGE)) {
        processElementByType({
            effect: removeWillChange,
            actionTypeId,
            elementApi
        })(element);
    }
}
const processElementByType = ({ effect, actionTypeId, elementApi })=>// @ts-expect-error - TS7006 - Parameter 'element' implicitly has an 'any' type.
    (element)=>{
        switch(actionTypeId){
            case TRANSFORM_MOVE:
            case TRANSFORM_SCALE:
            case TRANSFORM_ROTATE:
            case TRANSFORM_SKEW:
                effect(element, _IX2BrowserSupport.TRANSFORM_PREFIXED, elementApi);
                break;
            case STYLE_FILTER:
                effect(element, FILTER, elementApi);
                break;
            case STYLE_FONT_VARIATION:
                effect(element, FONT_VARIATION_SETTINGS, elementApi);
                break;
            case STYLE_OPACITY:
                effect(element, OPACITY, elementApi);
                break;
            case STYLE_SIZE:
                effect(element, WIDTH, elementApi);
                effect(element, HEIGHT, elementApi);
                break;
            case STYLE_BACKGROUND_COLOR:
            case STYLE_BORDER:
            case STYLE_TEXT_COLOR:
                effect(element, colorStyleProps[actionTypeId], elementApi);
                break;
            case GENERAL_DISPLAY:
                effect(element, DISPLAY, elementApi);
                break;
        }
    };
// @ts-expect-error - TS7006 - Parameter 'prop' implicitly has an 'any' type.
function clearStyleProp(element, prop, elementApi) {
    const { setStyle } = elementApi;
    removeWillChange(element, prop, elementApi);
    setStyle(element, prop, '');
    // Clear transform-style: preserve-3d
    if (prop === _IX2BrowserSupport.TRANSFORM_PREFIXED) {
        setStyle(element, _IX2BrowserSupport.TRANSFORM_STYLE_PREFIXED, '');
    }
}
function getMaxDurationItemIndex(actionItems) {
    let maxDuration = 0;
    let resultIndex = 0;
    // @ts-expect-error - TS7006 - Parameter 'actionItem' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type.
    actionItems.forEach((actionItem, index)=>{
        const { config } = actionItem;
        const total = config.delay + config.duration;
        if (total >= maxDuration) {
            maxDuration = total;
            resultIndex = index;
        }
    });
    return resultIndex;
}
function getActionListProgress(actionList, instance) {
    const { actionItemGroups, useFirstGroupAsInitialState } = actionList;
    const { actionItem: instanceItem, verboseTimeElapsed = 0 } = instance;
    let totalDuration = 0;
    let elapsedDuration = 0;
    // @ts-expect-error - TS7006 - Parameter 'group' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type.
    actionItemGroups.forEach((group, index)=>{
        if (useFirstGroupAsInitialState && index === 0) {
            return;
        }
        const { actionItems } = group;
        const carrierItem = actionItems[getMaxDurationItemIndex(actionItems)];
        const { config, actionTypeId } = carrierItem;
        if (instanceItem.id === carrierItem.id) {
            elapsedDuration = totalDuration + verboseTimeElapsed;
        }
        const duration = getRenderType(actionTypeId) === RENDER_GENERAL ? 0 : config.duration;
        totalDuration += config.delay + duration;
    });
    return totalDuration > 0 ? (0, _IX2EasingUtils.optimizeFloat)(elapsedDuration / totalDuration) : 0;
}
function reduceListToGroup({ actionList, actionItemId, rawData }) {
    // @ts-expect-error - FIXME - TS2339 - Property 'actionItemGroups' does not exist on type 'ActionListType'.
    const { actionItemGroups, continuousParameterGroups } = actionList;
    const newActionItems = [];
    const takeItemUntilMatch = (actionItem)=>{
        newActionItems.push((0, _timm.mergeIn)(actionItem, [
            'config'
        ], {
            delay: 0,
            duration: 0
        }));
        return actionItem.id === actionItemId;
    };
    actionItemGroups && actionItemGroups.some(({ actionItems })=>{
        return actionItems.some(takeItemUntilMatch);
    });
    continuousParameterGroups && continuousParameterGroups.some((paramGroup)=>{
        const { continuousActionGroups } = paramGroup;
        return continuousActionGroups.some(({ actionItems })=>{
            return actionItems.some(takeItemUntilMatch);
        });
    });
    return (0, _timm.setIn)(rawData, [
        'actionLists'
    ], {
        [actionList.id]: {
            id: actionList.id,
            actionItemGroups: [
                {
                    actionItems: newActionItems
                }
            ]
        }
    });
}
function shouldNamespaceEventParameter(eventTypeId, { basedOn }) {
    return eventTypeId === _sharedconstants.EventTypeConsts.SCROLLING_IN_VIEW && (basedOn === _sharedconstants.EventBasedOn.ELEMENT || basedOn == null) || eventTypeId === _sharedconstants.EventTypeConsts.MOUSE_MOVE && basedOn === _sharedconstants.EventBasedOn.ELEMENT;
}
function getNamespacedParameterId(eventStateKey, continuousParameterGroupId) {
    const namespacedParameterId = eventStateKey + COLON_DELIMITER + continuousParameterGroupId;
    return namespacedParameterId;
}
function shouldAllowMediaQuery(mediaQueries, mediaQueryKey) {
    // During design mode, current media query key does not exist
    if (mediaQueryKey == null) {
        return true;
    }
    return mediaQueries.indexOf(mediaQueryKey) !== -1;
}
function mediaQueriesEqual(listA, listB) {
    return (0, _shallowEqual.default)(listA && listA.sort(), listB && listB.sort());
}
function stringifyTarget(target) {
    if (typeof target === 'string') {
        return target;
    }
    if (target.pluginElement && target.objectId) {
        return target.pluginElement + BAR_DELIMITER + target.objectId;
    }
    if (target.objectId) {
        return target.objectId;
    }
    const { id = '', selector = '', useEventTarget = '' } = target;
    return id + BAR_DELIMITER + selector + BAR_DELIMITER + useEventTarget;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC9sb2dpYy9JWDJWYW5pbGxhVXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCB0eXBlIHtcbiAgQ29udGludW91c1BhcmFtZXRlckdyb3VwSWQsXG4gIEFjdGlvbkl0ZW1UeXBlLFxuICBBY3Rpb25JZCxcbiAgRm9udFZhcmlhdGlvbkl0ZW1Db25maWdUeXBlLFxuICBGb250VmFyaWF0aW9uQWN0aW9uQ29uZmlnVHlwZSxcbiAgRXZlbnRUeXBlLFxuICBBY3Rpb25MaXN0VHlwZSxcbiAgQWN0aW9uSXRlbXNUeXBlLFxuICBDb250aW51b3VzUGFyYW1ldGVyR3JvdXBUeXBlLFxufSBmcm9tICdAcGFja2FnZXMvc3lzdGVtcy9peDIvdHlwZXMtY29yZSc7XG5cbmltcG9ydCBkZWZhdWx0VG8gZnJvbSAnbG9kYXNoL2RlZmF1bHRUbyc7XG5pbXBvcnQgcmVkdWNlIGZyb20gJ2xvZGFzaC9yZWR1Y2UnO1xuaW1wb3J0IGZpbmRMYXN0IGZyb20gJ2xvZGFzaC9maW5kTGFzdCc7XG5pbXBvcnQge3NldEluLCBtZXJnZUlufSBmcm9tICd0aW1tJztcbmltcG9ydCB7XG4gIEV2ZW50VHlwZUNvbnN0cyxcbiAgRXZlbnRBcHBsaWVzVG8sXG4gIEV2ZW50QmFzZWRPbixcbiAgQWN0aW9uVHlwZUNvbnN0cyxcbiAgSVgyRW5naW5lQ29uc3RhbnRzLFxufSBmcm9tICdAcGFja2FnZXMvc3lzdGVtcy9peDIvc2hhcmVkLWNvbnN0YW50cyc7XG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gJy4vc2hhbGxvd0VxdWFsJztcblxuaW1wb3J0IHtvcHRpbWl6ZUZsb2F0fSBmcm9tICcuL0lYMkVhc2luZ1V0aWxzJztcblxuLy8gSW1wb3J0aW5nIGRpcmVjdGx5IHRvIGF2b2lkIGltcG9ydGluZyB0aGUgZW50aXJlIHNoYXJlZC11dGlscyBwYWNrYWdlLlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHdlYmZsb3cvcGFja2FnZS1ib3VuZGFyaWVzXG5pbXBvcnQge25vcm1hbGl6ZUNvbG9yfSBmcm9tICcuLi8uLi9zaGFyZWQtdXRpbHMvbm9ybWFsaXplQ29sb3InO1xuaW1wb3J0IHtcbiAgaXNQbHVnaW5UeXBlLFxuICBnZXRQbHVnaW5Db25maWcsXG4gIGdldFBsdWdpbk9yaWdpbixcbiAgZ2V0UGx1Z2luRGVzdGluYXRpb24sXG4gIHJlbmRlclBsdWdpbixcbiAgY2xlYXJQbHVnaW4sXG59IGZyb20gJy4vSVgyVmFuaWxsYVBsdWdpbnMnO1xuXG5pbXBvcnQge1xuICBJU19CUk9XU0VSX0VOVixcbiAgRkxFWF9QUkVGSVhFRCxcbiAgVFJBTlNGT1JNX1BSRUZJWEVELFxuICBUUkFOU0ZPUk1fU1RZTEVfUFJFRklYRUQsXG59IGZyb20gJy4vSVgyQnJvd3NlclN1cHBvcnQnO1xuaW1wb3J0IHtcbiAgdHlwZSBJWDJSYXdEYXRhLFxuICB0eXBlIHJhd0RhdGFJbXBvcnRlZFBheWxvYWQsXG59IGZyb20gJ0BwYWNrYWdlcy9zeXN0ZW1zL2l4Mi9lbmdpbmUnO1xuaW1wb3J0IHtCcmVha3BvaW50SUR9IGZyb20gJ0BwYWNrYWdlcy9zeXN0ZW1zL3N0eWxlL3R5cGVzJztcbmltcG9ydCB7UmVmVHlwZXN9IGZyb20gJy4uL3JlZHVjZXJzL0lYMkVsZW1lbnRzUmVkdWNlcic7XG5cbmV4cG9ydCB0eXBlIEVsZW1lbnRBcGk8RWxlbWVudFR5cGUsIFNlbGVjdG9yVHlwZT4gPSB7XG4gIGdldFN0eWxlOiAoYXJnMTogRWxlbWVudFR5cGUsIGFyZzI6IHN0cmluZykgPT4gc3RyaW5nO1xuICBzZXRTdHlsZTogKGFyZzE6IEVsZW1lbnRUeXBlLCBhcmcyOiBzdHJpbmcsIGFyZzM6IHN0cmluZykgPT4gdm9pZDtcbiAgZ2V0UHJvcGVydHk6IChhcmcxOiBFbGVtZW50VHlwZSwgYXJnMjogc3RyaW5nKSA9PiBudWxsIHwgc3RyaW5nO1xuICBnZXRWYWxpZERvY3VtZW50OiAoYXJnMTogSVgyVGFyZ2V0KSA9PiBhbnk7XG4gIGdldFF1ZXJ5U2VsZWN0b3I6IChhcmcxOiBJWDJUYXJnZXQpID0+IG51bGwgfCBTZWxlY3RvclR5cGU7XG4gIC8vIFNob3VsZCB0aGVzZSBgQXJyYXlgcyBiZSBgTm9kZUxpc3Rgcz9cbiAgcXVlcnlEb2N1bWVudDogKFxuICAgIGFyZzE6IFNlbGVjdG9yVHlwZSxcbiAgICBhcmcyPzogU2VsZWN0b3JUeXBlIHwgbnVsbCB8IHVuZGVmaW5lZFxuICApID0+IEVsZW1lbnRUeXBlW107XG4gIGdldENoaWxkRWxlbWVudHM6IChhcmcxOiBFbGVtZW50VHlwZVtdKSA9PiBFbGVtZW50VHlwZVtdO1xuICBnZXRTaWJsaW5nRWxlbWVudHM6IChhcmcxOiBFbGVtZW50VHlwZVtdKSA9PiBFbGVtZW50VHlwZVtdO1xuXG4gIG1hdGNoU2VsZWN0b3I6IChhcmcxOiBTZWxlY3RvclR5cGUpID0+IChhcmcxOiBFbGVtZW50VHlwZSkgPT4gYm9vbGVhbjtcbiAgZWxlbWVudENvbnRhaW5zOiAoYXJnMTogRWxlbWVudFR5cGUsIGFyZzI6IEVsZW1lbnRUeXBlKSA9PiBib29sZWFuO1xuICBpc1NpYmxpbmdOb2RlOiAoYXJnMTogRWxlbWVudFR5cGUsIGFyZzI6IEVsZW1lbnRUeXBlKSA9PiBib29sZWFuO1xuICBnZXRDbG9zZXN0RWxlbWVudDogKFxuICAgIGFyZzE6IEVsZW1lbnRUeXBlLFxuICAgIGFyZzI6IHN0cmluZ1xuICApID0+IEVsZW1lbnRUeXBlIHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgZ2V0UmVmVHlwZTogKGFyZzE6IEVsZW1lbnRUeXBlKSA9PiBSZWZUeXBlcyB8IG51bGw7XG59O1xuXG5jb25zdCB7XG4gIEJBQ0tHUk9VTkQsXG4gIFRSQU5TRk9STSxcbiAgVFJBTlNMQVRFXzNELFxuICBTQ0FMRV8zRCxcbiAgUk9UQVRFX1gsXG4gIFJPVEFURV9ZLFxuICBST1RBVEVfWixcbiAgU0tFVyxcbiAgUFJFU0VSVkVfM0QsXG4gIEZMRVgsXG4gIE9QQUNJVFksXG4gIEZJTFRFUixcbiAgRk9OVF9WQVJJQVRJT05fU0VUVElOR1MsXG4gIFdJRFRILFxuICBIRUlHSFQsXG4gIEJBQ0tHUk9VTkRfQ09MT1IsXG4gIEJPUkRFUl9DT0xPUixcbiAgQ09MT1IsXG4gIENISUxEUkVOLFxuICBJTU1FRElBVEVfQ0hJTERSRU4sXG4gIFNJQkxJTkdTLFxuICBQQVJFTlQsXG4gIERJU1BMQVksXG4gIFdJTExfQ0hBTkdFLFxuICBBVVRPLFxuICBDT01NQV9ERUxJTUlURVIsXG4gIENPTE9OX0RFTElNSVRFUixcbiAgQkFSX0RFTElNSVRFUixcbiAgUkVOREVSX1RSQU5TRk9STSxcbiAgUkVOREVSX0dFTkVSQUwsXG4gIFJFTkRFUl9TVFlMRSxcbiAgUkVOREVSX1BMVUdJTixcbn0gPSBJWDJFbmdpbmVDb25zdGFudHM7XG5cbmNvbnN0IHtcbiAgVFJBTlNGT1JNX01PVkUsXG4gIFRSQU5TRk9STV9TQ0FMRSxcbiAgVFJBTlNGT1JNX1JPVEFURSxcbiAgVFJBTlNGT1JNX1NLRVcsXG4gIFNUWUxFX09QQUNJVFksXG4gIFNUWUxFX0ZJTFRFUixcbiAgU1RZTEVfRk9OVF9WQVJJQVRJT04sXG4gIFNUWUxFX1NJWkUsXG4gIFNUWUxFX0JBQ0tHUk9VTkRfQ09MT1IsXG4gIFNUWUxFX0JPUkRFUixcbiAgU1RZTEVfVEVYVF9DT0xPUixcbiAgR0VORVJBTF9ESVNQTEFZLFxuICBPQkpFQ1RfVkFMVUUsXG59ID0gQWN0aW9uVHlwZUNvbnN0cztcblxuZXhwb3J0IHtzaGFsbG93RXF1YWx9O1xuXG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDA2IC0gUGFyYW1ldGVyICd2JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuY29uc3QgdHJpbSA9ICh2KSA9PiB2LnRyaW0oKTtcblxuY29uc3QgY29sb3JTdHlsZVByb3BzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIFtTVFlMRV9CQUNLR1JPVU5EX0NPTE9SXTogQkFDS0dST1VORF9DT0xPUixcbiAgW1NUWUxFX0JPUkRFUl06IEJPUkRFUl9DT0xPUixcbiAgW1NUWUxFX1RFWFRfQ09MT1JdOiBDT0xPUixcbn0pO1xuXG5jb25zdCB3aWxsQ2hhbmdlUHJvcHMgPSBPYmplY3QuZnJlZXplKHtcbiAgW1RSQU5TRk9STV9QUkVGSVhFRF06IFRSQU5TRk9STSxcbiAgW0JBQ0tHUk9VTkRfQ09MT1JdOiBCQUNLR1JPVU5ELFxuICBbT1BBQ0lUWV06IE9QQUNJVFksXG4gIFtGSUxURVJdOiBGSUxURVIsXG4gIFtXSURUSF06IFdJRFRILFxuICBbSEVJR0hUXTogSEVJR0hULFxuICBbRk9OVF9WQVJJQVRJT05fU0VUVElOR1NdOiBGT05UX1ZBUklBVElPTl9TRVRUSU5HUyxcbn0pO1xuXG5jb25zdCBvYmplY3RDYWNoZSA9IG5ldyBNYXAoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyT2JqZWN0Q2FjaGUoKSB7XG4gIG9iamVjdENhY2hlLmNsZWFyKCk7XG59XG5cbmxldCBpbnN0YW5jZUNvdW50ID0gMTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnN0YW5jZUlkKCkge1xuICByZXR1cm4gJ2knICsgaW5zdGFuY2VDb3VudCsrO1xufVxuXG5sZXQgZWxlbWVudENvdW50ID0gMTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50SWQoaXhFbGVtZW50czogYW55LCByZWY6IGFueSkge1xuICAvLyBUT0RPOiBvcHRpbWl6ZSBlbGVtZW50IGxvb2t1cFxuICBmb3IgKGNvbnN0IGtleSBpbiBpeEVsZW1lbnRzKSB7XG4gICAgY29uc3QgaXhFbCA9IGl4RWxlbWVudHNba2V5XTtcbiAgICBpZiAoaXhFbCAmJiBpeEVsLnJlZiA9PT0gcmVmKSB7XG4gICAgICByZXR1cm4gaXhFbC5pZDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICdlJyArIGVsZW1lbnRDb3VudCsrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVpZnlTdGF0ZSh7XG4gIGV2ZW50cyxcbiAgYWN0aW9uTGlzdHMsXG4gIHNpdGUsXG59OiBQYXJ0aWFsPElYMlJhd0RhdGE+ID0ge30pOiByYXdEYXRhSW1wb3J0ZWRQYXlsb2FkIHtcbiAgY29uc3QgZXZlbnRUeXBlTWFwID0gcmVkdWNlKFxuICAgIGV2ZW50cyxcbiAgICAocmVzdWx0LCBldmVudCkgPT4ge1xuICAgICAgY29uc3Qge2V2ZW50VHlwZUlkfSA9IGV2ZW50O1xuXG4gICAgICBpZiAoIXJlc3VsdFtldmVudFR5cGVJZF0pIHtcbiAgICAgICAgcmVzdWx0W2V2ZW50VHlwZUlkXSA9IHt9IGFzIHtba2V5OiBzdHJpbmddOiBFdmVudFR5cGV9O1xuICAgICAgfVxuXG4gICAgICByZXN1bHRbZXZlbnRUeXBlSWRdW2V2ZW50LmlkXSA9IGV2ZW50O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIHt9IGFzIHJhd0RhdGFJbXBvcnRlZFBheWxvYWRbJ2l4RGF0YSddWydldmVudFR5cGVNYXAnXVxuICApO1xuXG4gIGxldCBtZWRpYVF1ZXJpZXMgPSBzaXRlICYmIHNpdGUubWVkaWFRdWVyaWVzO1xuICBsZXQgbWVkaWFRdWVyeUtleXMgPSBbXSBhcyBCcmVha3BvaW50SURbXTtcbiAgaWYgKG1lZGlhUXVlcmllcykge1xuICAgIG1lZGlhUXVlcnlLZXlzID0gbWVkaWFRdWVyaWVzLm1hcCgobXEpID0+IG1xLmtleSk7XG4gIH0gZWxzZSB7XG4gICAgbWVkaWFRdWVyaWVzID0gW107XG4gICAgY29uc29sZS53YXJuKGBJWDIgbWlzc2luZyBtZWRpYVF1ZXJpZXMgaW4gc2l0ZSBkYXRhYCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGl4RGF0YToge1xuICAgICAgZXZlbnRzLFxuICAgICAgYWN0aW9uTGlzdHMsXG4gICAgICBldmVudFR5cGVNYXAsXG4gICAgICBtZWRpYVF1ZXJpZXMsXG4gICAgICBtZWRpYVF1ZXJ5S2V5cyxcbiAgICB9LFxuICB9O1xufVxuXG5jb25zdCBzdHJpY3RFcXVhbCA9IChhOiBhbnksIGI6IGFueSkgPT4gYSA9PT0gYjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmVTdG9yZSh7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ3N0b3JlJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBzdG9yZSxcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnc2VsZWN0JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBzZWxlY3QsXG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ29uQ2hhbmdlJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBvbkNoYW5nZSxcbiAgY29tcGFyYXRvciA9IHN0cmljdEVxdWFsLFxufSkge1xuICBjb25zdCB7Z2V0U3RhdGUsIHN1YnNjcmliZX0gPSBzdG9yZTtcbiAgY29uc3QgdW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoaGFuZGxlQ2hhbmdlKTtcbiAgbGV0IGN1cnJlbnRTdGF0ZSA9IHNlbGVjdChnZXRTdGF0ZSgpKTtcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKCkge1xuICAgIGNvbnN0IG5leHRTdGF0ZSA9IHNlbGVjdChnZXRTdGF0ZSgpKTtcbiAgICBpZiAobmV4dFN0YXRlID09IG51bGwpIHtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghY29tcGFyYXRvcihuZXh0U3RhdGUsIGN1cnJlbnRTdGF0ZSkpIHtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICAgIG9uQ2hhbmdlKGN1cnJlbnRTdGF0ZSwgc3RvcmUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5zdWJzY3JpYmU7XG59XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ3RhcmdldCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVRhcmdldCh0YXJnZXQpIHtcbiAgY29uc3QgdHlwZSA9IHR5cGVvZiB0YXJnZXQ7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB7aWQ6IHRhcmdldH07XG4gIH0gZWxzZSBpZiAodGFyZ2V0ICE9IG51bGwgJiYgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBjb25zdCB7aWQsIG9iamVjdElkLCBzZWxlY3Rvciwgc2VsZWN0b3JHdWlkcywgYXBwbGllc1RvLCB1c2VFdmVudFRhcmdldH0gPVxuICAgICAgdGFyZ2V0O1xuICAgIHJldHVybiB7aWQsIG9iamVjdElkLCBzZWxlY3Rvciwgc2VsZWN0b3JHdWlkcywgYXBwbGllc1RvLCB1c2VFdmVudFRhcmdldH07XG4gIH1cbiAgcmV0dXJuIHt9O1xufVxuXG50eXBlIElYMlRhcmdldCA9IGFueTsgLy8gc2VyaWFsaXplZCBJWDJFdmVudFRhcmdldERhdGFcblxudHlwZSBBZmZlY3RlZEVsZW1lbnRzUHJvcHM8RWxlbWVudFR5cGUsIFNlbGVjdG9yVHlwZT4gPSB7XG4gIGNvbmZpZzoge1xuICAgIHRhcmdldDogSVgyVGFyZ2V0O1xuICAgIHRhcmdldHM/OiBBcnJheTxJWDJUYXJnZXQ+O1xuICB9O1xuICBldmVudD86IGFueTsgLy8gc2VyaWFsaXplZCBJWDJFdmVudFR5cGU7XG4gIGV2ZW50VGFyZ2V0PzogRWxlbWVudFR5cGUgfCBudWxsIHwgdW5kZWZpbmVkO1xuICBlbGVtZW50Um9vdD86IEVsZW1lbnRUeXBlIHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgZWxlbWVudEFwaTogRWxlbWVudEFwaTxFbGVtZW50VHlwZSwgU2VsZWN0b3JUeXBlPjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBZmZlY3RlZEVsZW1lbnRzPEVsZW1lbnRUeXBlLCBTZWxlY3RvclR5cGU+KHtcbiAgY29uZmlnLFxuICBldmVudCxcbiAgZXZlbnRUYXJnZXQsXG4gIGVsZW1lbnRSb290LFxuICBlbGVtZW50QXBpLFxufTogQWZmZWN0ZWRFbGVtZW50c1Byb3BzPEVsZW1lbnRUeXBlLCBTZWxlY3RvclR5cGU+KTogRWxlbWVudFR5cGVbXSB7XG4gIGlmICghZWxlbWVudEFwaSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSVgyIG1pc3NpbmcgZWxlbWVudEFwaScpO1xuICB9XG5cbiAgY29uc3Qge3RhcmdldHN9ID0gY29uZmlnO1xuICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXRzKSAmJiB0YXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gdGFyZ2V0cy5yZWR1Y2U8QXJyYXk8YW55Pj4oXG4gICAgICAoYWNjdW11bGF0b3IsIHRhcmdldCk6IEFycmF5PEhUTUxFbGVtZW50PiA9PlxuICAgICAgICBhY2N1bXVsYXRvci5jb25jYXQoXG4gICAgICAgICAgZ2V0QWZmZWN0ZWRFbGVtZW50cyh7XG4gICAgICAgICAgICBjb25maWc6IHt0YXJnZXR9LFxuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICBldmVudFRhcmdldCxcbiAgICAgICAgICAgIGVsZW1lbnRSb290LFxuICAgICAgICAgICAgZWxlbWVudEFwaSxcbiAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgW11cbiAgICApO1xuICB9XG5cbiAgY29uc3Qge1xuICAgIGdldFZhbGlkRG9jdW1lbnQsXG4gICAgZ2V0UXVlcnlTZWxlY3RvcixcbiAgICBxdWVyeURvY3VtZW50LFxuICAgIGdldENoaWxkRWxlbWVudHMsXG4gICAgZ2V0U2libGluZ0VsZW1lbnRzLFxuICAgIG1hdGNoU2VsZWN0b3IsXG4gICAgZWxlbWVudENvbnRhaW5zLFxuICAgIGlzU2libGluZ05vZGUsXG4gIH0gPSBlbGVtZW50QXBpO1xuXG4gIGNvbnN0IHt0YXJnZXR9ID0gY29uZmlnO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IHtcbiAgICBpZCxcblxuICAgIG9iamVjdElkLFxuXG4gICAgc2VsZWN0b3IsXG5cbiAgICBzZWxlY3Rvckd1aWRzLFxuXG4gICAgYXBwbGllc1RvLFxuXG4gICAgdXNlRXZlbnRUYXJnZXQsXG4gIH0gPSBub3JtYWxpemVUYXJnZXQodGFyZ2V0KTtcblxuICBpZiAob2JqZWN0SWQpIHtcbiAgICBjb25zdCByZWYgPSBvYmplY3RDYWNoZS5oYXMob2JqZWN0SWQpXG4gICAgICA/IG9iamVjdENhY2hlLmdldChvYmplY3RJZClcbiAgICAgIDogb2JqZWN0Q2FjaGUuc2V0KG9iamVjdElkLCB7fSkuZ2V0KG9iamVjdElkKTtcbiAgICByZXR1cm4gW3JlZl07XG4gIH1cblxuICBpZiAoYXBwbGllc1RvID09PSBFdmVudEFwcGxpZXNUby5QQUdFKSB7XG4gICAgY29uc3QgZG9jID0gZ2V0VmFsaWREb2N1bWVudChpZCk7XG4gICAgcmV0dXJuIGRvYyA/IFtkb2NdIDogW107XG4gIH1cblxuICBjb25zdCBvdmVycmlkZXMgPSBldmVudD8uYWN0aW9uPy5jb25maWc/LmFmZmVjdGVkRWxlbWVudHMgPz8ge307XG4gIGNvbnN0IG92ZXJyaWRlID0gb3ZlcnJpZGVzW2lkIHx8IHNlbGVjdG9yXSB8fCB7fTtcbiAgY29uc3QgdmFsaWRPdmVycmlkZSA9IEJvb2xlYW4ob3ZlcnJpZGUuaWQgfHwgb3ZlcnJpZGUuc2VsZWN0b3IpO1xuXG4gIGxldCBsaW1pdEFmZmVjdGVkRWxlbWVudHM7XG4gIGxldCBiYXNlU2VsZWN0b3I7XG4gIGxldCBmaW5hbFNlbGVjdG9yO1xuXG4gIGNvbnN0IGV2ZW50VGFyZ2V0U2VsZWN0b3IgPVxuICAgIGV2ZW50ICYmIGdldFF1ZXJ5U2VsZWN0b3Iobm9ybWFsaXplVGFyZ2V0KGV2ZW50LnRhcmdldCkpO1xuXG4gIGlmICh2YWxpZE92ZXJyaWRlKSB7XG4gICAgbGltaXRBZmZlY3RlZEVsZW1lbnRzID0gb3ZlcnJpZGUubGltaXRBZmZlY3RlZEVsZW1lbnRzO1xuICAgIGJhc2VTZWxlY3RvciA9IGV2ZW50VGFyZ2V0U2VsZWN0b3I7XG4gICAgZmluYWxTZWxlY3RvciA9IGdldFF1ZXJ5U2VsZWN0b3Iob3ZlcnJpZGUpO1xuICB9IGVsc2Uge1xuICAgIC8vIHBhc3MgaW4gc2VsZWN0b3JHdWlkcyBhcyB3ZWxsIGZvciBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuXG4gICAgYmFzZVNlbGVjdG9yID0gZmluYWxTZWxlY3RvciA9IGdldFF1ZXJ5U2VsZWN0b3Ioe1xuICAgICAgaWQsXG4gICAgICBzZWxlY3RvcixcbiAgICAgIHNlbGVjdG9yR3VpZHMsXG4gICAgfSk7XG4gIH1cblxuICBpZiAoZXZlbnQgJiYgdXNlRXZlbnRUYXJnZXQpIHtcbiAgICAvLyBldmVudFRhcmdldCBpcyBub3QgZGVmaW5lZCB3aGVuIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGluIGEgY2xlYXIgcmVxdWVzdCwgc28gZmluZFxuICAgIC8vIGFsbCB0YXJnZXQgZWxlbWVudHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBldmVudCBkYXRhLCBhbmQgcmV0dXJuIGFmZmVjdGVkIGVsZW1lbnRzLlxuICAgIGNvbnN0IGV2ZW50VGFyZ2V0cyA9XG4gICAgICBldmVudFRhcmdldCAmJiAoZmluYWxTZWxlY3RvciB8fCB1c2VFdmVudFRhcmdldCA9PT0gdHJ1ZSlcbiAgICAgICAgPyBbZXZlbnRUYXJnZXRdXG4gICAgICAgIDogcXVlcnlEb2N1bWVudChldmVudFRhcmdldFNlbGVjdG9yKTtcblxuICAgIGlmIChmaW5hbFNlbGVjdG9yKSB7XG4gICAgICBpZiAodXNlRXZlbnRUYXJnZXQgPT09IFBBUkVOVCkge1xuICAgICAgICByZXR1cm4gcXVlcnlEb2N1bWVudChmaW5hbFNlbGVjdG9yKS5maWx0ZXIoKHBhcmVudEVsZW1lbnQpID0+XG4gICAgICAgICAgZXZlbnRUYXJnZXRzLnNvbWUoKHRhcmdldEVsZW1lbnQpID0+XG4gICAgICAgICAgICBlbGVtZW50Q29udGFpbnMocGFyZW50RWxlbWVudCwgdGFyZ2V0RWxlbWVudClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAodXNlRXZlbnRUYXJnZXQgPT09IENISUxEUkVOKSB7XG4gICAgICAgIHJldHVybiBxdWVyeURvY3VtZW50KGZpbmFsU2VsZWN0b3IpLmZpbHRlcigoY2hpbGRFbGVtZW50KSA9PlxuICAgICAgICAgIGV2ZW50VGFyZ2V0cy5zb21lKCh0YXJnZXRFbGVtZW50KSA9PlxuICAgICAgICAgICAgZWxlbWVudENvbnRhaW5zKHRhcmdldEVsZW1lbnQsIGNoaWxkRWxlbWVudClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAodXNlRXZlbnRUYXJnZXQgPT09IFNJQkxJTkdTKSB7XG4gICAgICAgIHJldHVybiBxdWVyeURvY3VtZW50KGZpbmFsU2VsZWN0b3IpLmZpbHRlcigoc2libGluZ0VsZW1lbnQpID0+XG4gICAgICAgICAgZXZlbnRUYXJnZXRzLnNvbWUoKHRhcmdldEVsZW1lbnQpID0+XG4gICAgICAgICAgICBpc1NpYmxpbmdOb2RlKHRhcmdldEVsZW1lbnQsIHNpYmxpbmdFbGVtZW50KVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50VGFyZ2V0cztcbiAgfVxuXG4gIGlmIChiYXNlU2VsZWN0b3IgPT0gbnVsbCB8fCBmaW5hbFNlbGVjdG9yID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBpZiAoSVNfQlJPV1NFUl9FTlYgJiYgZWxlbWVudFJvb3QpIHtcbiAgICByZXR1cm4gcXVlcnlEb2N1bWVudChmaW5hbFNlbGVjdG9yKS5maWx0ZXIoKGVsZW1lbnQpID0+XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gZWxlbWVudFJvb3QgaXMgSFRNTEVsZW1lbnQgaW4gYnJvd3NlclxuICAgICAgZWxlbWVudFJvb3QuY29udGFpbnMoZWxlbWVudClcbiAgICApO1xuICB9XG5cbiAgaWYgKGxpbWl0QWZmZWN0ZWRFbGVtZW50cyA9PT0gQ0hJTERSRU4pIHtcbiAgICByZXR1cm4gcXVlcnlEb2N1bWVudChiYXNlU2VsZWN0b3IsIGZpbmFsU2VsZWN0b3IpO1xuICB9IGVsc2UgaWYgKGxpbWl0QWZmZWN0ZWRFbGVtZW50cyA9PT0gSU1NRURJQVRFX0NISUxEUkVOKSB7XG4gICAgcmV0dXJuIGdldENoaWxkRWxlbWVudHMocXVlcnlEb2N1bWVudChiYXNlU2VsZWN0b3IpKS5maWx0ZXIoXG4gICAgICBtYXRjaFNlbGVjdG9yKGZpbmFsU2VsZWN0b3IpXG4gICAgKTtcbiAgfSBlbHNlIGlmIChsaW1pdEFmZmVjdGVkRWxlbWVudHMgPT09IFNJQkxJTkdTKSB7XG4gICAgcmV0dXJuIGdldFNpYmxpbmdFbGVtZW50cyhxdWVyeURvY3VtZW50KGJhc2VTZWxlY3RvcikpLmZpbHRlcihcbiAgICAgIG1hdGNoU2VsZWN0b3IoZmluYWxTZWxlY3RvcilcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBxdWVyeURvY3VtZW50KGZpbmFsU2VsZWN0b3IpO1xuICB9XG59XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2VsZW1lbnQnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdhY3Rpb25JdGVtJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoe2VsZW1lbnQsIGFjdGlvbkl0ZW19KSB7XG4gIGlmICghSVNfQlJPV1NFUl9FTlYpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgY29uc3Qge2FjdGlvblR5cGVJZH0gPSBhY3Rpb25JdGVtO1xuICBzd2l0Y2ggKGFjdGlvblR5cGVJZCkge1xuICAgIGNhc2UgU1RZTEVfU0laRTpcbiAgICBjYXNlIFNUWUxFX0JBQ0tHUk9VTkRfQ09MT1I6XG4gICAgY2FzZSBTVFlMRV9CT1JERVI6XG4gICAgY2FzZSBTVFlMRV9URVhUX0NPTE9SOlxuICAgIGNhc2UgR0VORVJBTF9ESVNQTEFZOlxuICAgICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4ge307XG4gIH1cbn1cblxuY29uc3QgcHhWYWx1ZVJlZ2V4ID0gL3B4LztcblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAnZmlsdGVycycgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbmNvbnN0IGdldEZpbHRlckRlZmF1bHRzID0gKGFjdGlvblN0YXRlOiBhbnksIGZpbHRlcnMpID0+XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ3Jlc3VsdCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMDYgLSBQYXJhbWV0ZXIgJ2ZpbHRlcicgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgZmlsdGVycy5yZWR1Y2UoKHJlc3VsdCwgZmlsdGVyKSA9PiB7XG4gICAgaWYgKHJlc3VsdFtmaWx0ZXIudHlwZV0gPT0gbnVsbCkge1xuICAgICAgcmVzdWx0W2ZpbHRlci50eXBlXSA9XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwNTMgLSBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBleHByZXNzaW9uIG9mIHR5cGUgJ2FueScgY2FuJ3QgYmUgdXNlZCB0byBpbmRleCB0eXBlICdSZWFkb25seTx7IGJsdXI6IDA7ICdodWUtcm90YXRlJzogMDsgaW52ZXJ0OiAwOyBncmF5c2NhbGU6IDA7IHNhdHVyYXRlOiAxMDA7IHNlcGlhOiAwOyBjb250cmFzdDogMTAwOyBicmlnaHRuZXNzOiAxMDA7IH0+Jy5cbiAgICAgICAgZmlsdGVyRGVmYXVsdHNbZmlsdGVyLnR5cGVdO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIGFjdGlvblN0YXRlIHx8IHt9KTtcblxuY29uc3QgZ2V0Rm9udFZhcmlhdGlvbkRlZmF1bHRzID0gKFxuICBhY3Rpb25TdGF0ZTogYW55LFxuICBmb250VmFyaWF0aW9uczogQXJyYXk8Rm9udFZhcmlhdGlvbkl0ZW1Db25maWdUeXBlPlxuKSA9PlxuICBmb250VmFyaWF0aW9ucy5yZWR1Y2UoKHJlc3VsdCwgZm9udFZhcmlhdGlvbikgPT4ge1xuICAgIGlmIChyZXN1bHRbZm9udFZhcmlhdGlvbi50eXBlXSA9PSBudWxsKSB7XG4gICAgICByZXN1bHRbZm9udFZhcmlhdGlvbi50eXBlXSA9XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwNTMgLSBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBleHByZXNzaW9uIG9mIHR5cGUgJ3N0cmluZycgY2FuJ3QgYmUgdXNlZCB0byBpbmRleCB0eXBlICdSZWFkb25seTx7IHdnaHQ6IDA7IG9wc3o6IDA7IHdkdGg6IDA7IHNsbnQ6IDA7IH0+Jy5cbiAgICAgICAgZm9udFZhcmlhdGlvbkRlZmF1bHRzW2ZvbnRWYXJpYXRpb24udHlwZV0gfHxcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjMzOSAtIFByb3BlcnR5ICdkZWZhdWx0VmFsdWUnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ0ZvbnRWYXJpYXRpb25JdGVtQ29uZmlnVHlwZScuXG4gICAgICAgIGZvbnRWYXJpYXRpb24uZGVmYXVsdFZhbHVlIHx8XG4gICAgICAgIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwgYWN0aW9uU3RhdGUgfHwge30pO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5zdGFuY2VPcmlnaW4oXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuXG4gIHJlZlN0YXRlID0ge30sXG4gIGNvbXB1dGVkU3R5bGU6XG4gICAgfCB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgICAgIH1cbiAgICB8IG51bGxcbiAgICB8IHVuZGVmaW5lZCA9IHt9LFxuICBhY3Rpb25JdGVtOiBBY3Rpb25JdGVtVHlwZSxcbiAgZWxlbWVudEFwaTogRWxlbWVudEFwaTxIVE1MRWxlbWVudCwgc3RyaW5nPlxuKSB7XG4gIGNvbnN0IHtnZXRTdHlsZX0gPSBlbGVtZW50QXBpO1xuICAvLyBGbG93IEhhY2s6IFBhc3NpbmcgYWN0aW9uVHlwZUlkIHRvIGlzUGx1Z2luVHlwZSBhbmQgdGhlbiB0cnlpbmdcbiAgLy8gdG8gZG8gdHlwZSByZWZpbmVtZW50IHVzaW5nIHRoZSBzYW1lIHZhcmlhYmxlIHZpYSBhIHN3aXRjaCBzdGF0ZW1lbnRcbiAgLy8gYnJlYWtzIGRvd24uIFRoaXMgaXMgaXMgYSB3b3JrYXJvdW5kIHRvIGVuc3VyZSB3ZSBjYW4gdXNlIHR5cGUgcmVmaW5lbWVudC5cbiAgY29uc3Qge2FjdGlvblR5cGVJZH0gPSBhY3Rpb25JdGVtO1xuXG4gIGlmIChpc1BsdWdpblR5cGUoYWN0aW9uVHlwZUlkKSkge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzNDUgLSBBcmd1bWVudCBvZiB0eXBlICdcIlRSQU5TRk9STV9NT1ZFXCIgfCBcIlRSQU5TRk9STV9TQ0FMRVwiIHwgXCJUUkFOU0ZPUk1fUk9UQVRFXCIgfCBcIlRSQU5TRk9STV9TS0VXXCIgfCBcIlNUWUxFX09QQUNJVFlcIiB8IFwiU1RZTEVfU0laRVwiIHwgXCJTVFlMRV9GSUxURVJcIiB8IFwiU1RZTEVfRk9OVF9WQVJJQVRJT05cIiB8IFwiU1RZTEVfQkFDS0dST1VORF9DT0xPUlwiIHwgXCJTVFlMRV9CT1JERVJcIiB8IFwiU1RZTEVfVEVYVF9DT0xPUlwiIHwgXCJQTFVHSU5fTE9UVElFXCIgfCBcIkdFTkVSQUxfRElTUExBWVwiJyBpcyBub3QgYXNzaWduYWJsZSB0byBwYXJhbWV0ZXIgb2YgdHlwZSAnUGx1Z2luVHlwZScuIHwgVFM3MDUzIC0gRWxlbWVudCBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlIGJlY2F1c2UgZXhwcmVzc2lvbiBvZiB0eXBlICdcIlRSQU5TRk9STV9NT1ZFXCIgfCBcIlRSQU5TRk9STV9TQ0FMRVwiIHwgXCJUUkFOU0ZPUk1fUk9UQVRFXCIgfCBcIlRSQU5TRk9STV9TS0VXXCIgfCBcIlNUWUxFX09QQUNJVFlcIiB8IFwiU1RZTEVfU0laRVwiIHwgXCJTVFlMRV9GSUxURVJcIiB8IFwiU1RZTEVfRk9OVF9WQVJJQVRJT05cIiB8IFwiU1RZTEVfQkFDS0dST1VORF9DT0xPUlwiIHwgXCJTVFlMRV9CT1JERVJcIiB8IFwiU1RZTEVfVEVYVF9DT0xPUlwiIHwgXCJQTFVHSU5fTE9UVElFXCIgfCBcIkdFTkVSQUxfRElTUExBWVwiJyBjYW4ndCBiZSB1c2VkIHRvIGluZGV4IHR5cGUgJ3t9Jy5cbiAgICByZXR1cm4gZ2V0UGx1Z2luT3JpZ2luKGFjdGlvblR5cGVJZCkocmVmU3RhdGVbYWN0aW9uVHlwZUlkXSwgYWN0aW9uSXRlbSk7XG4gIH1cblxuICBzd2l0Y2ggKGFjdGlvbkl0ZW0uYWN0aW9uVHlwZUlkKSB7XG4gICAgY2FzZSBUUkFOU0ZPUk1fTU9WRTpcbiAgICBjYXNlIFRSQU5TRk9STV9TQ0FMRTpcbiAgICBjYXNlIFRSQU5TRk9STV9ST1RBVEU6XG4gICAgY2FzZSBUUkFOU0ZPUk1fU0tFVzoge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzA1MyAtIEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGV4cHJlc3Npb24gb2YgdHlwZSAnXCJUUkFOU0ZPUk1fTU9WRVwiIHwgXCJUUkFOU0ZPUk1fU0NBTEVcIiB8IFwiVFJBTlNGT1JNX1JPVEFURVwiIHwgXCJUUkFOU0ZPUk1fU0tFV1wiJyBjYW4ndCBiZSB1c2VkIHRvIGluZGV4IHR5cGUgJ3t9Jy5cbiAgICAgICAgcmVmU3RhdGVbYWN0aW9uSXRlbS5hY3Rpb25UeXBlSWRdIHx8XG4gICAgICAgIHRyYW5zZm9ybURlZmF1bHRzW2FjdGlvbkl0ZW0uYWN0aW9uVHlwZUlkXVxuICAgICAgKTtcbiAgICB9XG4gICAgY2FzZSBTVFlMRV9GSUxURVI6XG4gICAgICByZXR1cm4gZ2V0RmlsdGVyRGVmYXVsdHMoXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwNTMgLSBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBleHByZXNzaW9uIG9mIHR5cGUgJ1wiU1RZTEVfRklMVEVSXCInIGNhbid0IGJlIHVzZWQgdG8gaW5kZXggdHlwZSAne30nLlxuICAgICAgICByZWZTdGF0ZVthY3Rpb25JdGVtLmFjdGlvblR5cGVJZF0sXG4gICAgICAgIGFjdGlvbkl0ZW0uY29uZmlnLmZpbHRlcnNcbiAgICAgICk7XG4gICAgY2FzZSBTVFlMRV9GT05UX1ZBUklBVElPTjpcbiAgICAgIHJldHVybiBnZXRGb250VmFyaWF0aW9uRGVmYXVsdHMoXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwNTMgLSBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBleHByZXNzaW9uIG9mIHR5cGUgJ1wiU1RZTEVfRk9OVF9WQVJJQVRJT05cIicgY2FuJ3QgYmUgdXNlZCB0byBpbmRleCB0eXBlICd7fScuXG4gICAgICAgIHJlZlN0YXRlW2FjdGlvbkl0ZW0uYWN0aW9uVHlwZUlkXSxcbiAgICAgICAgYWN0aW9uSXRlbS5jb25maWcuZm9udFZhcmlhdGlvbnNcbiAgICAgICk7XG4gICAgY2FzZSBTVFlMRV9PUEFDSVRZOlxuICAgICAgcmV0dXJuIHt2YWx1ZTogZGVmYXVsdFRvKHBhcnNlRmxvYXQoZ2V0U3R5bGUoZWxlbWVudCwgT1BBQ0lUWSkpLCAxLjApfTtcbiAgICBjYXNlIFNUWUxFX1NJWkU6IHtcbiAgICAgIGNvbnN0IGlubGluZVdpZHRoID0gZ2V0U3R5bGUoZWxlbWVudCwgV0lEVEgpO1xuICAgICAgY29uc3QgaW5saW5lSGVpZ2h0ID0gZ2V0U3R5bGUoZWxlbWVudCwgSEVJR0hUKTtcbiAgICAgIGxldCB3aWR0aFZhbHVlO1xuICAgICAgbGV0IGhlaWdodFZhbHVlO1xuICAgICAgLy8gV2hlbiBkZXN0aW5hdGlvbiB1bml0IGlzICdBVVRPJywgZW5zdXJlIG9yaWdpbiB2YWx1ZXMgYXJlIGluIHB4XG4gICAgICBpZiAoYWN0aW9uSXRlbS5jb25maWcud2lkdGhVbml0ID09PSBBVVRPKSB7XG4gICAgICAgIHdpZHRoVmFsdWUgPSBweFZhbHVlUmVnZXgudGVzdChpbmxpbmVXaWR0aClcbiAgICAgICAgICA/IHBhcnNlRmxvYXQoaW5saW5lV2lkdGgpXG4gICAgICAgICAgOiAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMxODA0NyAtICdjb21wdXRlZFN0eWxlJyBpcyBwb3NzaWJseSAnbnVsbCcuXG4gICAgICAgICAgICBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUud2lkdGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2lkdGhWYWx1ZSA9IGRlZmF1bHRUbyhcbiAgICAgICAgICBwYXJzZUZsb2F0KGlubGluZVdpZHRoKSxcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMxODA0NyAtICdjb21wdXRlZFN0eWxlJyBpcyBwb3NzaWJseSAnbnVsbCcuXG4gICAgICAgICAgcGFyc2VGbG9hdChjb21wdXRlZFN0eWxlLndpZHRoKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKGFjdGlvbkl0ZW0uY29uZmlnLmhlaWdodFVuaXQgPT09IEFVVE8pIHtcbiAgICAgICAgaGVpZ2h0VmFsdWUgPSBweFZhbHVlUmVnZXgudGVzdChpbmxpbmVIZWlnaHQpXG4gICAgICAgICAgPyBwYXJzZUZsb2F0KGlubGluZUhlaWdodClcbiAgICAgICAgICA6IC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzE4MDQ3IC0gJ2NvbXB1dGVkU3R5bGUnIGlzIHBvc3NpYmx5ICdudWxsJy5cbiAgICAgICAgICAgIHBhcnNlRmxvYXQoY29tcHV0ZWRTdHlsZS5oZWlnaHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVpZ2h0VmFsdWUgPSBkZWZhdWx0VG8oXG4gICAgICAgICAgcGFyc2VGbG9hdChpbmxpbmVIZWlnaHQpLFxuICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzE4MDQ3IC0gJ2NvbXB1dGVkU3R5bGUnIGlzIHBvc3NpYmx5ICdudWxsJy5cbiAgICAgICAgICBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUuaGVpZ2h0KVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGhWYWx1ZSxcbiAgICAgICAgaGVpZ2h0VmFsdWUsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIFNUWUxFX0JBQ0tHUk9VTkRfQ09MT1I6XG4gICAgY2FzZSBTVFlMRV9CT1JERVI6XG4gICAgY2FzZSBTVFlMRV9URVhUX0NPTE9SOlxuICAgICAgcmV0dXJuIHBhcnNlQ29sb3Ioe1xuICAgICAgICBlbGVtZW50LFxuICAgICAgICBhY3Rpb25UeXBlSWQ6IGFjdGlvbkl0ZW0uYWN0aW9uVHlwZUlkLFxuICAgICAgICBjb21wdXRlZFN0eWxlLFxuICAgICAgICBnZXRTdHlsZSxcbiAgICAgIH0pO1xuICAgIGNhc2UgR0VORVJBTF9ESVNQTEFZOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMTgwNDcgLSAnY29tcHV0ZWRTdHlsZScgaXMgcG9zc2libHkgJ251bGwnLlxuICAgICAgICB2YWx1ZTogZGVmYXVsdFRvKGdldFN0eWxlKGVsZW1lbnQsIERJU1BMQVkpLCBjb21wdXRlZFN0eWxlLmRpc3BsYXkpLFxuICAgICAgfTtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gYE9CSkVDVF9WQUxVRWAgaXMgbm90IGFuIGV4cGVjdGVkIGBhY3Rpb25UeXBlSWRgXG4gICAgY2FzZSBPQkpFQ1RfVkFMVUU6XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDUzIC0gRWxlbWVudCBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlIGJlY2F1c2UgZXhwcmVzc2lvbiBvZiB0eXBlICdhbnknIGNhbid0IGJlIHVzZWQgdG8gaW5kZXggdHlwZSAne30nLiB8IFRTMjMzOSAtIFByb3BlcnR5ICdhY3Rpb25UeXBlSWQnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ25ldmVyJy5cbiAgICAgIHJldHVybiByZWZTdGF0ZVthY3Rpb25JdGVtLmFjdGlvblR5cGVJZF0gfHwge3ZhbHVlOiAwfTtcbiAgICBkZWZhdWx0OiB7XG4gICAgICAvLyBBcyBmYXIgYXMgdGhlIHR5cGUgc3lzdGVtIGNhbiB0ZWxsLCB3ZSdyZSBtaXNzaW5nIGEgaGFuZGxlciBmb3JcbiAgICAgIC8vIFBMVUdJTl9MT1RUSUUuXG4gICAgICAvL1xuICAgICAgLy8gVGhpcyBpcyBhY3R1YWxseSBoYW5kbGVkIGJ5IGBpc1BsdWdpblR5cGVgIGFib3ZlLlxuICAgICAgLy9cbiAgICAgIC8qOjogKGFjdGlvbkl0ZW06IGVtcHR5KTsgKi9cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn1cblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAncmVzdWx0JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLiB8IFRTNzAwNiAtIFBhcmFtZXRlciAnZmlsdGVyJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuY29uc3QgcmVkdWNlRmlsdGVycyA9IChyZXN1bHQsIGZpbHRlcikgPT4ge1xuICBpZiAoZmlsdGVyKSB7XG4gICAgcmVzdWx0W2ZpbHRlci50eXBlXSA9IGZpbHRlci52YWx1ZSB8fCAwO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCByZWR1Y2VGb250VmFyaWF0aW9ucyA9IChcbiAgcmVzdWx0OiBSZWNvcmQ8YW55LCBhbnk+LFxuICBmb250VmFyaWF0aW9uOlxuICAgIHwgRm9udFZhcmlhdGlvbkl0ZW1Db25maWdUeXBlXG4gICAgfCB7XG4gICAgICAgIGlkOiBudWxsIHwgc3RyaW5nO1xuICAgICAgICB0eXBlOiBzdHJpbmc7XG4gICAgICAgIHZhbHVlOiBudW1iZXI7XG4gICAgICB9XG4pID0+IHtcbiAgaWYgKGZvbnRWYXJpYXRpb24pIHtcbiAgICByZXN1bHRbZm9udFZhcmlhdGlvbi50eXBlXSA9IGZvbnRWYXJpYXRpb24udmFsdWUgfHwgMDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEl0ZW1Db25maWdCeUtleSA9IChcbiAgYWN0aW9uVHlwZUlkOiBhbnksXG4gIGtleTogYW55LFxuICBjb25maWc6IGFueVxuKSA9PiB7XG4gIGlmIChpc1BsdWdpblR5cGUoYWN0aW9uVHlwZUlkKSkge1xuICAgIHJldHVybiBnZXRQbHVnaW5Db25maWcoYWN0aW9uVHlwZUlkKShjb25maWcsIGtleSk7XG4gIH1cblxuICBzd2l0Y2ggKGFjdGlvblR5cGVJZCkge1xuICAgIGNhc2UgU1RZTEVfRklMVEVSOiB7XG4gICAgICBjb25zdCBmaWx0ZXIgPSBmaW5kTGFzdChjb25maWcuZmlsdGVycywgKHt0eXBlfSkgPT4gdHlwZSA9PT0ga2V5KTtcbiAgICAgIHJldHVybiBmaWx0ZXIgPyBmaWx0ZXIudmFsdWUgOiAwO1xuICAgIH1cbiAgICBjYXNlIFNUWUxFX0ZPTlRfVkFSSUFUSU9OOiB7XG4gICAgICBjb25zdCBmb250VmFyaWF0aW9uID0gZmluZExhc3QoXG4gICAgICAgIGNvbmZpZy5mb250VmFyaWF0aW9ucyxcbiAgICAgICAgKHt0eXBlfSkgPT4gdHlwZSA9PT0ga2V5XG4gICAgICApO1xuICAgICAgcmV0dXJuIGZvbnRWYXJpYXRpb24gPyBmb250VmFyaWF0aW9uLnZhbHVlIDogMDtcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBjb25maWdba2V5XTtcbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlc3RpbmF0aW9uVmFsdWVzPEVsZW1lbnRUeXBlLCBTZWxlY3RvclR5cGU+KHtcbiAgZWxlbWVudCxcbiAgYWN0aW9uSXRlbSxcbiAgZWxlbWVudEFwaSxcbn06IHtcbiAgZWxlbWVudDogRWxlbWVudFR5cGU7XG4gIGFjdGlvbkl0ZW06IEFjdGlvbkl0ZW1UeXBlO1xuICBlbGVtZW50QXBpOiBFbGVtZW50QXBpPEVsZW1lbnRUeXBlLCBTZWxlY3RvclR5cGU+O1xufSkge1xuICBpZiAoaXNQbHVnaW5UeXBlKGFjdGlvbkl0ZW0uYWN0aW9uVHlwZUlkKSkge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzNDUgLSBBcmd1bWVudCBvZiB0eXBlICdcIlRSQU5TRk9STV9NT1ZFXCIgfCBcIlRSQU5TRk9STV9TQ0FMRVwiIHwgXCJUUkFOU0ZPUk1fUk9UQVRFXCIgfCBcIlRSQU5TRk9STV9TS0VXXCIgfCBcIlNUWUxFX09QQUNJVFlcIiB8IFwiU1RZTEVfU0laRVwiIHwgXCJTVFlMRV9GSUxURVJcIiB8IFwiU1RZTEVfRk9OVF9WQVJJQVRJT05cIiB8IFwiU1RZTEVfQkFDS0dST1VORF9DT0xPUlwiIHwgXCJTVFlMRV9CT1JERVJcIiB8IFwiU1RZTEVfVEVYVF9DT0xPUlwiIHwgXCJQTFVHSU5fTE9UVElFXCIgfCBcIkdFTkVSQUxfRElTUExBWVwiJyBpcyBub3QgYXNzaWduYWJsZSB0byBwYXJhbWV0ZXIgb2YgdHlwZSAnUGx1Z2luVHlwZScuXG4gICAgcmV0dXJuIGdldFBsdWdpbkRlc3RpbmF0aW9uKGFjdGlvbkl0ZW0uYWN0aW9uVHlwZUlkKShhY3Rpb25JdGVtLmNvbmZpZyk7XG4gIH1cblxuICBzd2l0Y2ggKGFjdGlvbkl0ZW0uYWN0aW9uVHlwZUlkKSB7XG4gICAgY2FzZSBUUkFOU0ZPUk1fTU9WRTpcbiAgICBjYXNlIFRSQU5TRk9STV9TQ0FMRTpcbiAgICBjYXNlIFRSQU5TRk9STV9ST1RBVEU6XG4gICAgY2FzZSBUUkFOU0ZPUk1fU0tFVzoge1xuICAgICAgY29uc3Qge3hWYWx1ZSwgeVZhbHVlLCB6VmFsdWV9ID0gYWN0aW9uSXRlbS5jb25maWc7XG4gICAgICByZXR1cm4ge3hWYWx1ZSwgeVZhbHVlLCB6VmFsdWV9O1xuICAgIH1cbiAgICBjYXNlIFNUWUxFX1NJWkU6IHtcbiAgICAgIGNvbnN0IHtnZXRTdHlsZSwgc2V0U3R5bGUsIGdldFByb3BlcnR5fSA9IGVsZW1lbnRBcGk7XG4gICAgICBjb25zdCB7d2lkdGhVbml0LCBoZWlnaHRVbml0fSA9IGFjdGlvbkl0ZW0uY29uZmlnO1xuICAgICAgbGV0IHt3aWR0aFZhbHVlLCBoZWlnaHRWYWx1ZX0gPSBhY3Rpb25JdGVtLmNvbmZpZztcbiAgICAgIGlmICghSVNfQlJPV1NFUl9FTlYpIHtcbiAgICAgICAgcmV0dXJuIHt3aWR0aFZhbHVlLCBoZWlnaHRWYWx1ZX07XG4gICAgICB9XG4gICAgICBpZiAod2lkdGhVbml0ID09PSBBVVRPKSB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBnZXRTdHlsZShlbGVtZW50LCBXSURUSCk7XG4gICAgICAgIHNldFN0eWxlKGVsZW1lbnQsIFdJRFRILCAnJyk7XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzMjIgLSBUeXBlICdzdHJpbmcgfCBudWxsJyBpcyBub3QgYXNzaWduYWJsZSB0byB0eXBlICdudW1iZXIgfCB1bmRlZmluZWQnLlxuICAgICAgICB3aWR0aFZhbHVlID0gZ2V0UHJvcGVydHkoZWxlbWVudCwgJ29mZnNldFdpZHRoJyk7XG4gICAgICAgIHNldFN0eWxlKGVsZW1lbnQsIFdJRFRILCB0ZW1wKTtcbiAgICAgIH1cbiAgICAgIGlmIChoZWlnaHRVbml0ID09PSBBVVRPKSB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBnZXRTdHlsZShlbGVtZW50LCBIRUlHSFQpO1xuICAgICAgICBzZXRTdHlsZShlbGVtZW50LCBIRUlHSFQsICcnKTtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjMyMiAtIFR5cGUgJ3N0cmluZyB8IG51bGwnIGlzIG5vdCBhc3NpZ25hYmxlIHRvIHR5cGUgJ251bWJlciB8IHVuZGVmaW5lZCcuXG4gICAgICAgIGhlaWdodFZhbHVlID0gZ2V0UHJvcGVydHkoZWxlbWVudCwgJ29mZnNldEhlaWdodCcpO1xuICAgICAgICBzZXRTdHlsZShlbGVtZW50LCBIRUlHSFQsIHRlbXApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHt3aWR0aFZhbHVlLCBoZWlnaHRWYWx1ZX07XG4gICAgfVxuICAgIGNhc2UgU1RZTEVfQkFDS0dST1VORF9DT0xPUjpcbiAgICBjYXNlIFNUWUxFX0JPUkRFUjpcbiAgICBjYXNlIFNUWUxFX1RFWFRfQ09MT1I6IHtcbiAgICAgIGNvbnN0IHtyVmFsdWUsIGdWYWx1ZSwgYlZhbHVlLCBhVmFsdWUsIGdsb2JhbFN3YXRjaElkfSA9XG4gICAgICAgIGFjdGlvbkl0ZW0uY29uZmlnO1xuXG4gICAgICBpZiAoZ2xvYmFsU3dhdGNoSWQgJiYgZ2xvYmFsU3dhdGNoSWQuc3RhcnRzV2l0aCgnLS0nKSkge1xuICAgICAgICBjb25zdCB7Z2V0U3R5bGV9ID0gZWxlbWVudEFwaTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBnZXRTdHlsZShlbGVtZW50LCBnbG9iYWxTd2F0Y2hJZCk7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRWYWx1ZSA9IG5vcm1hbGl6ZUNvbG9yKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByVmFsdWU6IG5vcm1hbGl6ZWRWYWx1ZS5yZWQsXG4gICAgICAgICAgZ1ZhbHVlOiBub3JtYWxpemVkVmFsdWUuZ3JlZW4sXG4gICAgICAgICAgYlZhbHVlOiBub3JtYWxpemVkVmFsdWUuYmx1ZSxcbiAgICAgICAgICBhVmFsdWU6IG5vcm1hbGl6ZWRWYWx1ZS5hbHBoYSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtyVmFsdWUsIGdWYWx1ZSwgYlZhbHVlLCBhVmFsdWV9O1xuICAgIH1cbiAgICBjYXNlIFNUWUxFX0ZJTFRFUjoge1xuICAgICAgcmV0dXJuIGFjdGlvbkl0ZW0uY29uZmlnLmZpbHRlcnMucmVkdWNlPFJlY29yZDxzdHJpbmcsIGFueT4+KFxuICAgICAgICByZWR1Y2VGaWx0ZXJzLFxuICAgICAgICB7fVxuICAgICAgKTtcbiAgICB9XG4gICAgY2FzZSBTVFlMRV9GT05UX1ZBUklBVElPTjoge1xuICAgICAgcmV0dXJuIGFjdGlvbkl0ZW0uY29uZmlnLmZvbnRWYXJpYXRpb25zLnJlZHVjZTxSZWNvcmQ8c3RyaW5nLCBhbnk+PihcbiAgICAgICAgcmVkdWNlRm9udFZhcmlhdGlvbnMsXG4gICAgICAgIHt9XG4gICAgICApO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCB7dmFsdWV9ID0gYWN0aW9uSXRlbS5jb25maWc7XG4gICAgICByZXR1cm4ge3ZhbHVlfTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlbmRlclR5cGUoYWN0aW9uVHlwZUlkOiBhbnkpIHtcbiAgaWYgKC9eVFJBTlNGT1JNXy8udGVzdChhY3Rpb25UeXBlSWQpKSB7XG4gICAgcmV0dXJuIFJFTkRFUl9UUkFOU0ZPUk07XG4gIH1cbiAgaWYgKC9eU1RZTEVfLy50ZXN0KGFjdGlvblR5cGVJZCkpIHtcbiAgICByZXR1cm4gUkVOREVSX1NUWUxFO1xuICB9XG4gIGlmICgvXkdFTkVSQUxfLy50ZXN0KGFjdGlvblR5cGVJZCkpIHtcbiAgICByZXR1cm4gUkVOREVSX0dFTkVSQUw7XG4gIH1cbiAgaWYgKC9eUExVR0lOXy8udGVzdChhY3Rpb25UeXBlSWQpKSB7XG4gICAgcmV0dXJuIFJFTkRFUl9QTFVHSU47XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlUHJvcChyZW5kZXJUeXBlOiBhbnksIGFjdGlvblR5cGVJZDogYW55KSB7XG4gIHJldHVybiByZW5kZXJUeXBlID09PSBSRU5ERVJfU1RZTEVcbiAgICA/IGFjdGlvblR5cGVJZC5yZXBsYWNlKCdTVFlMRV8nLCAnJykudG9Mb3dlckNhc2UoKVxuICAgIDogbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckhUTUxFbGVtZW50PEVsZW1lbnRUeXBlLCBTZWxlY3RvclR5cGU+KFxuICBlbGVtZW50OiBFbGVtZW50VHlwZSxcblxuICByZWZTdGF0ZTogYW55LFxuXG4gIGFjdGlvblN0YXRlOiBhbnksXG5cbiAgZXZlbnRJZDogYW55LFxuXG4gIGFjdGlvbkl0ZW06IGFueSxcblxuICBzdHlsZVByb3A6IGFueSxcblxuICBlbGVtZW50QXBpOiBFbGVtZW50QXBpPEVsZW1lbnRUeXBlLCBTZWxlY3RvclR5cGU+LFxuXG4gIHJlbmRlclR5cGU6IGFueSxcblxuICBwbHVnaW5JbnN0YW5jZTogYW55XG4pIHtcbiAgc3dpdGNoIChyZW5kZXJUeXBlKSB7XG4gICAgY2FzZSBSRU5ERVJfVFJBTlNGT1JNOiB7XG4gICAgICByZXR1cm4gcmVuZGVyVHJhbnNmb3JtKFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICByZWZTdGF0ZSxcbiAgICAgICAgYWN0aW9uU3RhdGUsXG4gICAgICAgIGFjdGlvbkl0ZW0sXG4gICAgICAgIGVsZW1lbnRBcGlcbiAgICAgICk7XG4gICAgfVxuICAgIGNhc2UgUkVOREVSX1NUWUxFOiB7XG4gICAgICByZXR1cm4gcmVuZGVyU3R5bGUoXG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIHJlZlN0YXRlLFxuICAgICAgICBhY3Rpb25TdGF0ZSxcbiAgICAgICAgYWN0aW9uSXRlbSxcbiAgICAgICAgc3R5bGVQcm9wLFxuICAgICAgICBlbGVtZW50QXBpXG4gICAgICApO1xuICAgIH1cbiAgICBjYXNlIFJFTkRFUl9HRU5FUkFMOiB7XG4gICAgICByZXR1cm4gcmVuZGVyR2VuZXJhbChlbGVtZW50LCBhY3Rpb25JdGVtLCBlbGVtZW50QXBpKTtcbiAgICB9XG4gICAgY2FzZSBSRU5ERVJfUExVR0lOOiB7XG4gICAgICBjb25zdCB7YWN0aW9uVHlwZUlkfSA9IGFjdGlvbkl0ZW07XG4gICAgICBpZiAoaXNQbHVnaW5UeXBlKGFjdGlvblR5cGVJZCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbmRlclBsdWdpbihhY3Rpb25UeXBlSWQpKHBsdWdpbkluc3RhbmNlLCByZWZTdGF0ZSwgYWN0aW9uSXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHRyYW5zZm9ybURlZmF1bHRzID0ge1xuICBbVFJBTlNGT1JNX01PVkVdOiBPYmplY3QuZnJlZXplKHtcbiAgICB4VmFsdWU6IDAsXG4gICAgeVZhbHVlOiAwLFxuICAgIHpWYWx1ZTogMCxcbiAgfSksXG4gIFtUUkFOU0ZPUk1fU0NBTEVdOiBPYmplY3QuZnJlZXplKHtcbiAgICB4VmFsdWU6IDEsXG4gICAgeVZhbHVlOiAxLFxuICAgIHpWYWx1ZTogMSxcbiAgfSksXG4gIFtUUkFOU0ZPUk1fUk9UQVRFXTogT2JqZWN0LmZyZWV6ZSh7XG4gICAgeFZhbHVlOiAwLFxuICAgIHlWYWx1ZTogMCxcbiAgICB6VmFsdWU6IDAsXG4gIH0pLFxuICBbVFJBTlNGT1JNX1NLRVddOiBPYmplY3QuZnJlZXplKHtcbiAgICB4VmFsdWU6IDAsXG4gICAgeVZhbHVlOiAwLFxuICB9KSxcbn0gYXMgY29uc3Q7XG5cbmNvbnN0IGZpbHRlckRlZmF1bHRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIGJsdXI6IDAsXG4gICdodWUtcm90YXRlJzogMCxcbiAgaW52ZXJ0OiAwLFxuICBncmF5c2NhbGU6IDAsXG4gIHNhdHVyYXRlOiAxMDAsXG4gIHNlcGlhOiAwLFxuICBjb250cmFzdDogMTAwLFxuICBicmlnaHRuZXNzOiAxMDAsXG59KTtcblxuY29uc3QgZm9udFZhcmlhdGlvbkRlZmF1bHRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIHdnaHQ6IDAsXG4gIG9wc3o6IDAsXG4gIHdkdGg6IDAsXG4gIHNsbnQ6IDAsXG59KTtcblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAnZmlsdGVyVHlwZScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMDYgLSBQYXJhbWV0ZXIgJ2FjdGlvbkl0ZW1Db25maWcnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG5jb25zdCBnZXRGaWx0ZXJVbml0ID0gKGZpbHRlclR5cGUsIGFjdGlvbkl0ZW1Db25maWcpID0+IHtcbiAgY29uc3QgZmlsdGVyID0gZmluZExhc3QoXG4gICAgYWN0aW9uSXRlbUNvbmZpZy5maWx0ZXJzLFxuICAgICh7dHlwZX0pID0+IHR5cGUgPT09IGZpbHRlclR5cGVcbiAgKTtcblxuICBpZiAoZmlsdGVyICYmIGZpbHRlci51bml0KSB7XG4gICAgcmV0dXJuIGZpbHRlci51bml0O1xuICB9XG5cbiAgc3dpdGNoIChmaWx0ZXJUeXBlKSB7XG4gICAgY2FzZSAnYmx1cic6XG4gICAgICByZXR1cm4gJ3B4JztcbiAgICBjYXNlICdodWUtcm90YXRlJzpcbiAgICAgIHJldHVybiAnZGVnJztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICclJztcbiAgfVxufTtcblxuY29uc3QgdHJhbnNmb3JtS2V5cyA9IE9iamVjdC5rZXlzKHRyYW5zZm9ybURlZmF1bHRzKTtcblxuZnVuY3Rpb24gcmVuZGVyVHJhbnNmb3JtPEVsZW1lbnRUeXBlLCBTZWxlY3RvclR5cGU+KFxuICBlbGVtZW50OiBFbGVtZW50VHlwZSxcbiAgcmVmU3RhdGU6IGFueSxcbiAgYWN0aW9uU3RhdGU6IGFueSxcbiAgYWN0aW9uSXRlbTogYW55LFxuICBlbGVtZW50QXBpOiBFbGVtZW50QXBpPEVsZW1lbnRUeXBlLCBTZWxlY3RvclR5cGU+XG4pIHtcbiAgY29uc3QgbmV3VHJhbnNmb3JtID0gdHJhbnNmb3JtS2V5c1xuICAgIC5tYXAoKGFjdGlvblR5cGVJZCkgPT4ge1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzA1MyAtIEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGV4cHJlc3Npb24gb2YgdHlwZSAnc3RyaW5nJyBjYW4ndCBiZSB1c2VkIHRvIGluZGV4IHR5cGUgJ3sgcmVhZG9ubHkgVFJBTlNGT1JNX01PVkU6IFJlYWRvbmx5PHsgeFZhbHVlOiAwOyB5VmFsdWU6IDA7IHpWYWx1ZTogMDsgfT47IHJlYWRvbmx5IFRSQU5TRk9STV9TQ0FMRTogUmVhZG9ubHk8eyB4VmFsdWU6IDE7IHlWYWx1ZTogMTsgelZhbHVlOiAxOyB9PjsgcmVhZG9ubHkgVFJBTlNGT1JNX1JPVEFURTogUmVhZG9ubHk8eyB4VmFsdWU6IDA7IHlWYWx1ZTogMDsgelZhbHVlOiAwOyB9PjsgcmVhZG9ubHkgVFJBTlNGT1JNX1NLRVc6IFJlYWRvbmx5PC4uLj47IH0nLlxuICAgICAgY29uc3QgZGVmYXVsdHMgPSB0cmFuc2Zvcm1EZWZhdWx0c1thY3Rpb25UeXBlSWRdO1xuICAgICAgY29uc3Qge1xuICAgICAgICB4VmFsdWUgPSBkZWZhdWx0cy54VmFsdWUsXG4gICAgICAgIHlWYWx1ZSA9IGRlZmF1bHRzLnlWYWx1ZSxcblxuICAgICAgICB6VmFsdWUgPSBkZWZhdWx0cy56VmFsdWUsXG4gICAgICAgIHhVbml0ID0gJycsXG4gICAgICAgIHlVbml0ID0gJycsXG4gICAgICAgIHpVbml0ID0gJycsXG4gICAgICB9ID0gcmVmU3RhdGVbYWN0aW9uVHlwZUlkXSB8fCB7fTtcbiAgICAgIHN3aXRjaCAoYWN0aW9uVHlwZUlkKSB7XG4gICAgICAgIGNhc2UgVFJBTlNGT1JNX01PVkU6XG4gICAgICAgICAgcmV0dXJuIGAke1RSQU5TTEFURV8zRH0oJHt4VmFsdWV9JHt4VW5pdH0sICR7eVZhbHVlfSR7eVVuaXR9LCAke3pWYWx1ZX0ke3pVbml0fSlgO1xuICAgICAgICBjYXNlIFRSQU5TRk9STV9TQ0FMRTpcbiAgICAgICAgICByZXR1cm4gYCR7U0NBTEVfM0R9KCR7eFZhbHVlfSR7eFVuaXR9LCAke3lWYWx1ZX0ke3lVbml0fSwgJHt6VmFsdWV9JHt6VW5pdH0pYDtcbiAgICAgICAgY2FzZSBUUkFOU0ZPUk1fUk9UQVRFOlxuICAgICAgICAgIHJldHVybiBgJHtST1RBVEVfWH0oJHt4VmFsdWV9JHt4VW5pdH0pICR7Uk9UQVRFX1l9KCR7eVZhbHVlfSR7eVVuaXR9KSAke1JPVEFURV9afSgke3pWYWx1ZX0ke3pVbml0fSlgO1xuICAgICAgICBjYXNlIFRSQU5TRk9STV9TS0VXOlxuICAgICAgICAgIHJldHVybiBgJHtTS0VXfSgke3hWYWx1ZX0ke3hVbml0fSwgJHt5VmFsdWV9JHt5VW5pdH0pYDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignICcpO1xuXG4gIGNvbnN0IHtzZXRTdHlsZX0gPSBlbGVtZW50QXBpO1xuICBhZGRXaWxsQ2hhbmdlKGVsZW1lbnQsIFRSQU5TRk9STV9QUkVGSVhFRCwgZWxlbWVudEFwaSk7XG4gIHNldFN0eWxlKGVsZW1lbnQsIFRSQU5TRk9STV9QUkVGSVhFRCwgbmV3VHJhbnNmb3JtKTtcblxuICAvLyBTZXQgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZFxuICBpZiAoaGFzRGVmaW5lZDNkVHJhbnNmb3JtKGFjdGlvbkl0ZW0sIGFjdGlvblN0YXRlKSkge1xuICAgIHNldFN0eWxlKGVsZW1lbnQsIFRSQU5TRk9STV9TVFlMRV9QUkVGSVhFRCwgUFJFU0VSVkVfM0QpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckZpbHRlcjxFbGVtZW50VHlwZSwgU2VsZWN0b3JUeXBlPihcbiAgZWxlbWVudDogRWxlbWVudFR5cGUsXG4gIGFjdGlvblN0YXRlOiBhbnksXG4gIGFjdGlvbkl0ZW1Db25maWc6IGFueSxcbiAgZWxlbWVudEFwaTogRWxlbWVudEFwaTxFbGVtZW50VHlwZSwgU2VsZWN0b3JUeXBlPlxuKSB7XG4gIGNvbnN0IGZpbHRlclZhbHVlID0gcmVkdWNlKFxuICAgIGFjdGlvblN0YXRlLFxuICAgIChyZXN1bHQsIHZhbHVlLCB0eXBlKSA9PlxuICAgICAgYCR7cmVzdWx0fSAke3R5cGV9KCR7dmFsdWV9JHtnZXRGaWx0ZXJVbml0KHR5cGUsIGFjdGlvbkl0ZW1Db25maWcpfSlgLFxuICAgICcnXG4gICk7XG5cbiAgY29uc3Qge3NldFN0eWxlfSA9IGVsZW1lbnRBcGk7XG4gIGFkZFdpbGxDaGFuZ2UoZWxlbWVudCwgRklMVEVSLCBlbGVtZW50QXBpKTtcbiAgc2V0U3R5bGUoZWxlbWVudCwgRklMVEVSLCBmaWx0ZXJWYWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckZvbnRWYXJpYXRpb248RWxlbWVudFR5cGUsIFNlbGVjdG9yVHlwZT4oXG4gIGVsZW1lbnQ6IEVsZW1lbnRUeXBlLFxuICBhY3Rpb25TdGF0ZTogYW55LFxuICBhY3Rpb25JdGVtQ29uZmlnOiBGb250VmFyaWF0aW9uQWN0aW9uQ29uZmlnVHlwZSxcbiAgZWxlbWVudEFwaTogRWxlbWVudEFwaTxFbGVtZW50VHlwZSwgU2VsZWN0b3JUeXBlPlxuKSB7XG4gIGNvbnN0IGZvbnRWYXJpYXRpb25WYWx1ZSA9IHJlZHVjZShcbiAgICBhY3Rpb25TdGF0ZSxcbiAgICAocmVzdWx0LCB2YWx1ZSwgdHlwZSkgPT4ge1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjM0NSAtIEFyZ3VtZW50IG9mIHR5cGUgJ3N0cmluZycgaXMgbm90IGFzc2lnbmFibGUgdG8gcGFyYW1ldGVyIG9mIHR5cGUgJ25ldmVyJy5cbiAgICAgIHJlc3VsdC5wdXNoKGBcIiR7dHlwZX1cIiAke3ZhbHVlfWApO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIFtdXG4gICkuam9pbignLCAnKTtcblxuICBjb25zdCB7c2V0U3R5bGV9ID0gZWxlbWVudEFwaTtcbiAgYWRkV2lsbENoYW5nZShlbGVtZW50LCBGT05UX1ZBUklBVElPTl9TRVRUSU5HUywgZWxlbWVudEFwaSk7XG4gIHNldFN0eWxlKGVsZW1lbnQsIEZPTlRfVkFSSUFUSU9OX1NFVFRJTkdTLCBmb250VmFyaWF0aW9uVmFsdWUpO1xufVxuXG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdhY3Rpb25UeXBlSWQnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICd4VmFsdWUnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICd5VmFsdWUnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICd6VmFsdWUnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG5mdW5jdGlvbiBoYXNEZWZpbmVkM2RUcmFuc2Zvcm0oe2FjdGlvblR5cGVJZH0sIHt4VmFsdWUsIHlWYWx1ZSwgelZhbHVlfSkge1xuICAvLyBUUkFOU0xBVEVfWlxuICByZXR1cm4gKFxuICAgIChhY3Rpb25UeXBlSWQgPT09IFRSQU5TRk9STV9NT1ZFICYmIHpWYWx1ZSAhPT0gdW5kZWZpbmVkKSB8fFxuICAgIC8vIFNDQUxFX1pcbiAgICAoYWN0aW9uVHlwZUlkID09PSBUUkFOU0ZPUk1fU0NBTEUgJiYgelZhbHVlICE9PSB1bmRlZmluZWQpIHx8XG4gICAgLy8gUk9UQVRFX1ggb3IgUk9UQVRFX1lcbiAgICAoYWN0aW9uVHlwZUlkID09PSBUUkFOU0ZPUk1fUk9UQVRFICYmXG4gICAgICAoeFZhbHVlICE9PSB1bmRlZmluZWQgfHwgeVZhbHVlICE9PSB1bmRlZmluZWQpKVxuICApO1xufVxuXG5jb25zdCBwYXJhbUNhcHR1cmUgPSAnXFxcXCgoW14pXSspXFxcXCknO1xuY29uc3QgcmdiVmFsaWRSZWdleCA9IC9ecmdiLztcbmNvbnN0IHJnYk1hdGNoUmVnZXggPSBSZWdFeHAoYHJnYmE/JHtwYXJhbUNhcHR1cmV9YCk7XG5cbmZ1bmN0aW9uIGdldEZpcnN0TWF0Y2gocmVnZXg6IFJlZ0V4cCwgdmFsdWU6IHN0cmluZykge1xuICBjb25zdCBtYXRjaCA9IHJlZ2V4LmV4ZWModmFsdWUpO1xuICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsxXSA6ICcnO1xufVxuXG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdlbGVtZW50JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLiB8IFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnYWN0aW9uVHlwZUlkJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLiB8IFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnY29tcHV0ZWRTdHlsZScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2dldFN0eWxlJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuZnVuY3Rpb24gcGFyc2VDb2xvcih7ZWxlbWVudCwgYWN0aW9uVHlwZUlkLCBjb21wdXRlZFN0eWxlLCBnZXRTdHlsZX0pOiB7XG4gIHJWYWx1ZTogbnVtYmVyO1xuICBnVmFsdWU6IG51bWJlcjtcbiAgYlZhbHVlOiBudW1iZXI7XG4gIGFWYWx1ZTogbnVtYmVyO1xufSB7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwNTMgLSBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBleHByZXNzaW9uIG9mIHR5cGUgJ2FueScgY2FuJ3QgYmUgdXNlZCB0byBpbmRleCB0eXBlICdSZWFkb25seTx7IFNUWUxFX0JBQ0tHUk9VTkRfQ09MT1I6IFwiYmFja2dyb3VuZENvbG9yXCI7IFNUWUxFX0JPUkRFUjogXCJib3JkZXJDb2xvclwiOyBTVFlMRV9URVhUX0NPTE9SOiBcImNvbG9yXCI7IH0+Jy5cbiAgY29uc3QgcHJvcCA9IGNvbG9yU3R5bGVQcm9wc1thY3Rpb25UeXBlSWRdO1xuICBjb25zdCBpbmxpbmVWYWx1ZSA9IGdldFN0eWxlKGVsZW1lbnQsIHByb3ApO1xuICBjb25zdCB2YWx1ZSA9IHJnYlZhbGlkUmVnZXgudGVzdChpbmxpbmVWYWx1ZSlcbiAgICA/IGlubGluZVZhbHVlXG4gICAgOiBjb21wdXRlZFN0eWxlW3Byb3BdO1xuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyNTMyIC0gT2JqZWN0IGlzIHBvc3NpYmx5ICd1bmRlZmluZWQnLlxuICBjb25zdCBtYXRjaGVzID0gZ2V0Rmlyc3RNYXRjaChyZ2JNYXRjaFJlZ2V4LCB2YWx1ZSkuc3BsaXQoQ09NTUFfREVMSU1JVEVSKTtcbiAgcmV0dXJuIHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzQ1IC0gQXJndW1lbnQgb2YgdHlwZSAnc3RyaW5nIHwgdW5kZWZpbmVkJyBpcyBub3QgYXNzaWduYWJsZSB0byBwYXJhbWV0ZXIgb2YgdHlwZSAnc3RyaW5nJy5cbiAgICByVmFsdWU6IGRlZmF1bHRUbyhwYXJzZUludChtYXRjaGVzWzBdLCAxMCksIDI1NSksXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjM0NSAtIEFyZ3VtZW50IG9mIHR5cGUgJ3N0cmluZyB8IHVuZGVmaW5lZCcgaXMgbm90IGFzc2lnbmFibGUgdG8gcGFyYW1ldGVyIG9mIHR5cGUgJ3N0cmluZycuXG4gICAgZ1ZhbHVlOiBkZWZhdWx0VG8ocGFyc2VJbnQobWF0Y2hlc1sxXSwgMTApLCAyNTUpLFxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzNDUgLSBBcmd1bWVudCBvZiB0eXBlICdzdHJpbmcgfCB1bmRlZmluZWQnIGlzIG5vdCBhc3NpZ25hYmxlIHRvIHBhcmFtZXRlciBvZiB0eXBlICdzdHJpbmcnLlxuICAgIGJWYWx1ZTogZGVmYXVsdFRvKHBhcnNlSW50KG1hdGNoZXNbMl0sIDEwKSwgMjU1KSxcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzQ1IC0gQXJndW1lbnQgb2YgdHlwZSAnc3RyaW5nIHwgdW5kZWZpbmVkJyBpcyBub3QgYXNzaWduYWJsZSB0byBwYXJhbWV0ZXIgb2YgdHlwZSAnc3RyaW5nJy5cbiAgICBhVmFsdWU6IGRlZmF1bHRUbyhwYXJzZUZsb2F0KG1hdGNoZXNbM10pLCAxKSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyU3R5bGU8RWxlbWVudFR5cGUsIFNlbGVjdG9yVHlwZT4oXG4gIGVsZW1lbnQ6IEVsZW1lbnRUeXBlLFxuICByZWZTdGF0ZTogYW55LFxuICBhY3Rpb25TdGF0ZTogYW55LFxuICBhY3Rpb25JdGVtOiBBY3Rpb25JdGVtVHlwZSxcbiAgc3R5bGVQcm9wOiBhbnksXG4gIGVsZW1lbnRBcGk6IEVsZW1lbnRBcGk8RWxlbWVudFR5cGUsIFNlbGVjdG9yVHlwZT5cbikge1xuICBjb25zdCB7c2V0U3R5bGV9ID0gZWxlbWVudEFwaTtcbiAgc3dpdGNoIChhY3Rpb25JdGVtLmFjdGlvblR5cGVJZCkge1xuICAgIGNhc2UgU1RZTEVfU0laRToge1xuICAgICAgbGV0IHt3aWR0aFVuaXQgPSAnJywgaGVpZ2h0VW5pdCA9ICcnfSA9IGFjdGlvbkl0ZW0uY29uZmlnO1xuICAgICAgY29uc3Qge3dpZHRoVmFsdWUsIGhlaWdodFZhbHVlfSA9IGFjdGlvblN0YXRlO1xuICAgICAgaWYgKHdpZHRoVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAod2lkdGhVbml0ID09PSBBVVRPKSB7XG4gICAgICAgICAgd2lkdGhVbml0ID0gJ3B4JztcbiAgICAgICAgfVxuICAgICAgICBhZGRXaWxsQ2hhbmdlKGVsZW1lbnQsIFdJRFRILCBlbGVtZW50QXBpKTtcbiAgICAgICAgc2V0U3R5bGUoZWxlbWVudCwgV0lEVEgsIHdpZHRoVmFsdWUgKyB3aWR0aFVuaXQpO1xuICAgICAgfVxuICAgICAgaWYgKGhlaWdodFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGhlaWdodFVuaXQgPT09IEFVVE8pIHtcbiAgICAgICAgICBoZWlnaHRVbml0ID0gJ3B4JztcbiAgICAgICAgfVxuICAgICAgICBhZGRXaWxsQ2hhbmdlKGVsZW1lbnQsIEhFSUdIVCwgZWxlbWVudEFwaSk7XG4gICAgICAgIHNldFN0eWxlKGVsZW1lbnQsIEhFSUdIVCwgaGVpZ2h0VmFsdWUgKyBoZWlnaHRVbml0KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFNUWUxFX0ZJTFRFUjoge1xuICAgICAgcmVuZGVyRmlsdGVyKGVsZW1lbnQsIGFjdGlvblN0YXRlLCBhY3Rpb25JdGVtLmNvbmZpZywgZWxlbWVudEFwaSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBTVFlMRV9GT05UX1ZBUklBVElPTjoge1xuICAgICAgcmVuZGVyRm9udFZhcmlhdGlvbihlbGVtZW50LCBhY3Rpb25TdGF0ZSwgYWN0aW9uSXRlbS5jb25maWcsIGVsZW1lbnRBcGkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgU1RZTEVfQkFDS0dST1VORF9DT0xPUjpcbiAgICBjYXNlIFNUWUxFX0JPUkRFUjpcbiAgICBjYXNlIFNUWUxFX1RFWFRfQ09MT1I6IHtcbiAgICAgIGNvbnN0IHByb3AgPSBjb2xvclN0eWxlUHJvcHNbYWN0aW9uSXRlbS5hY3Rpb25UeXBlSWRdO1xuXG4gICAgICBjb25zdCByVmFsdWUgPSBNYXRoLnJvdW5kKGFjdGlvblN0YXRlLnJWYWx1ZSk7XG4gICAgICBjb25zdCBnVmFsdWUgPSBNYXRoLnJvdW5kKGFjdGlvblN0YXRlLmdWYWx1ZSk7XG4gICAgICBjb25zdCBiVmFsdWUgPSBNYXRoLnJvdW5kKGFjdGlvblN0YXRlLmJWYWx1ZSk7XG4gICAgICBjb25zdCBhVmFsdWUgPSBhY3Rpb25TdGF0ZS5hVmFsdWU7XG5cbiAgICAgIGFkZFdpbGxDaGFuZ2UoZWxlbWVudCwgcHJvcCwgZWxlbWVudEFwaSk7XG5cbiAgICAgIHNldFN0eWxlKFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICBwcm9wLFxuICAgICAgICBhVmFsdWUgPj0gMVxuICAgICAgICAgID8gYHJnYigke3JWYWx1ZX0sJHtnVmFsdWV9LCR7YlZhbHVlfSlgXG4gICAgICAgICAgOiBgcmdiYSgke3JWYWx1ZX0sJHtnVmFsdWV9LCR7YlZhbHVlfSwke2FWYWx1ZX0pYFxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzM5IC0gUHJvcGVydHkgJ3VuaXQnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ3sgZGVsYXk6IG51bWJlcjsgZWFzaW5nOiBJWDJFYXNpbmdUeXBlOyBkdXJhdGlvbjogbnVtYmVyOyB0YXJnZXQ6IEFjdGlvbkl0ZW1UYXJnZXRUeXBlOyB4VmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZDsgeVZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQ7IHpWYWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkOyB4VW5pdDogXCIlXCIgfCAuLi4gNCBtb3JlIC4uLiB8IFwiVldcIjsgeVVuaXQ6IFwiJVwiIHwgLi4uIDQgbW9yZSAuLi4gfCBcIlZXXCI7IHpVbml0OiBcIiVcIiB8IC4uLiA0IG1vcmUgLi4uIHwgXCJWV1wiOyB9IHwgLi4uIDUgbW9yZSAuLi4gfCB7IC4uLjsgfScuXG4gICAgICBjb25zdCB7dW5pdCA9ICcnfSA9IGFjdGlvbkl0ZW0uY29uZmlnO1xuICAgICAgYWRkV2lsbENoYW5nZShlbGVtZW50LCBzdHlsZVByb3AsIGVsZW1lbnRBcGkpO1xuICAgICAgc2V0U3R5bGUoZWxlbWVudCwgc3R5bGVQcm9wLCBhY3Rpb25TdGF0ZS52YWx1ZSArIHVuaXQpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckdlbmVyYWw8RWxlbWVudFR5cGUsIFNlbGVjdG9yVHlwZT4oXG4gIGVsZW1lbnQ6IEVsZW1lbnRUeXBlLFxuICBhY3Rpb25JdGVtOiBhbnksXG4gIGVsZW1lbnRBcGk6IEVsZW1lbnRBcGk8RWxlbWVudFR5cGUsIFNlbGVjdG9yVHlwZT5cbikge1xuICBjb25zdCB7c2V0U3R5bGV9ID0gZWxlbWVudEFwaTtcbiAgc3dpdGNoIChhY3Rpb25JdGVtLmFjdGlvblR5cGVJZCkge1xuICAgIGNhc2UgR0VORVJBTF9ESVNQTEFZOiB7XG4gICAgICBjb25zdCB7dmFsdWV9ID0gYWN0aW9uSXRlbS5jb25maWc7XG4gICAgICBpZiAodmFsdWUgPT09IEZMRVggJiYgSVNfQlJPV1NFUl9FTlYpIHtcbiAgICAgICAgc2V0U3R5bGUoZWxlbWVudCwgRElTUExBWSwgRkxFWF9QUkVGSVhFRCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTdHlsZShlbGVtZW50LCBESVNQTEFZLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFdpbGxDaGFuZ2U8RWxlbWVudFR5cGUsIFNlbGVjdG9yVHlwZT4oXG4gIGVsZW1lbnQ6IEVsZW1lbnRUeXBlLFxuICBwcm9wOiBzdHJpbmcsXG4gIGVsZW1lbnRBcGk6IEVsZW1lbnRBcGk8RWxlbWVudFR5cGUsIFNlbGVjdG9yVHlwZT5cbikge1xuICBpZiAoIUlTX0JST1dTRVJfRU5WKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHZhbGlkUHJvcCA9IHdpbGxDaGFuZ2VQcm9wc1twcm9wXTtcbiAgaWYgKCF2YWxpZFByb3ApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qge2dldFN0eWxlLCBzZXRTdHlsZX0gPSBlbGVtZW50QXBpO1xuICBjb25zdCB2YWx1ZSA9IGdldFN0eWxlKGVsZW1lbnQsIFdJTExfQ0hBTkdFKTtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHNldFN0eWxlKGVsZW1lbnQsIFdJTExfQ0hBTkdFLCB2YWxpZFByb3ApO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB2YWx1ZXMgPSB2YWx1ZS5zcGxpdChDT01NQV9ERUxJTUlURVIpLm1hcCh0cmltKTtcbiAgaWYgKHZhbHVlcy5pbmRleE9mKHZhbGlkUHJvcCkgPT09IC0xKSB7XG4gICAgc2V0U3R5bGUoXG4gICAgICBlbGVtZW50LFxuICAgICAgV0lMTF9DSEFOR0UsXG4gICAgICB2YWx1ZXMuY29uY2F0KHZhbGlkUHJvcCkuam9pbihDT01NQV9ERUxJTUlURVIpXG4gICAgKTtcbiAgfVxufVxuXG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDA2IC0gUGFyYW1ldGVyICdwcm9wJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuZnVuY3Rpb24gcmVtb3ZlV2lsbENoYW5nZShlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcCwgZWxlbWVudEFwaTogYW55KSB7XG4gIGlmICghSVNfQlJPV1NFUl9FTlYpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgdmFsaWRQcm9wID0gd2lsbENoYW5nZVByb3BzW3Byb3BdO1xuICBpZiAoIXZhbGlkUHJvcCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7Z2V0U3R5bGUsIHNldFN0eWxlfSA9IGVsZW1lbnRBcGk7XG4gIGNvbnN0IHZhbHVlID0gZ2V0U3R5bGUoZWxlbWVudCwgV0lMTF9DSEFOR0UpO1xuICBpZiAoIXZhbHVlIHx8IHZhbHVlLmluZGV4T2YodmFsaWRQcm9wKSA9PT0gLTEpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgc2V0U3R5bGUoXG4gICAgZWxlbWVudCxcbiAgICBXSUxMX0NIQU5HRSxcbiAgICB2YWx1ZVxuICAgICAgLnNwbGl0KENPTU1BX0RFTElNSVRFUilcbiAgICAgIC5tYXAodHJpbSlcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ3YnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gICAgICAuZmlsdGVyKCh2KSA9PiB2ICE9PSB2YWxpZFByb3ApXG4gICAgICAuam9pbihDT01NQV9ERUxJTUlURVIpXG4gICk7XG59XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ3N0b3JlJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLiB8IFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnZWxlbWVudEFwaScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckFsbFN0eWxlcyh7c3RvcmUsIGVsZW1lbnRBcGl9KSB7XG4gIGNvbnN0IHtpeERhdGF9ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgY29uc3Qge2V2ZW50cyA9IHt9LCBhY3Rpb25MaXN0cyA9IHt9fSA9IGl4RGF0YTtcbiAgT2JqZWN0LmtleXMoZXZlbnRzKS5mb3JFYWNoKChldmVudElkKSA9PiB7XG4gICAgY29uc3QgZXZlbnQgPSBldmVudHNbZXZlbnRJZF07XG4gICAgY29uc3Qge2NvbmZpZ30gPSBldmVudC5hY3Rpb247XG4gICAgY29uc3Qge2FjdGlvbkxpc3RJZH0gPSBjb25maWc7XG4gICAgY29uc3QgYWN0aW9uTGlzdCA9IGFjdGlvbkxpc3RzW2FjdGlvbkxpc3RJZF07XG4gICAgaWYgKGFjdGlvbkxpc3QpIHtcbiAgICAgIGNsZWFyQWN0aW9uTGlzdFN0eWxlcyh7YWN0aW9uTGlzdCwgZXZlbnQsIGVsZW1lbnRBcGl9KTtcbiAgICB9XG4gIH0pO1xuICBPYmplY3Qua2V5cyhhY3Rpb25MaXN0cykuZm9yRWFjaCgoYWN0aW9uTGlzdElkKSA9PiB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjM0NSAtIEFyZ3VtZW50IG9mIHR5cGUgJ3sgYWN0aW9uTGlzdDogYW55OyBlbGVtZW50QXBpOiBhbnk7IH0nIGlzIG5vdCBhc3NpZ25hYmxlIHRvIHBhcmFtZXRlciBvZiB0eXBlICd7IGFjdGlvbkxpc3Q/OiB7fSB8IHVuZGVmaW5lZDsgZXZlbnQ6IGFueTsgZWxlbWVudEFwaTogYW55OyB9Jy5cbiAgICBjbGVhckFjdGlvbkxpc3RTdHlsZXMoe2FjdGlvbkxpc3Q6IGFjdGlvbkxpc3RzW2FjdGlvbkxpc3RJZF0sIGVsZW1lbnRBcGl9KTtcbiAgfSk7XG59XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2V2ZW50JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLiB8IFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnZWxlbWVudEFwaScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbmZ1bmN0aW9uIGNsZWFyQWN0aW9uTGlzdFN0eWxlcyh7YWN0aW9uTGlzdCA9IHt9LCBldmVudCwgZWxlbWVudEFwaX0pIHtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjMzOSAtIFByb3BlcnR5ICdhY3Rpb25JdGVtR3JvdXBzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICd7fScuIHwgVFMyMzM5IC0gUHJvcGVydHkgJ2NvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ3t9Jy5cbiAgY29uc3Qge2FjdGlvbkl0ZW1Hcm91cHMsIGNvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cHN9ID0gYWN0aW9uTGlzdDtcbiAgYWN0aW9uSXRlbUdyb3VwcyAmJlxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ2FjdGlvbkdyb3VwJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICAgIGFjdGlvbkl0ZW1Hcm91cHMuZm9yRWFjaCgoYWN0aW9uR3JvdXApID0+IHtcbiAgICAgIGNsZWFyQWN0aW9uR3JvdXBTdHlsZXMoe2FjdGlvbkdyb3VwLCBldmVudCwgZWxlbWVudEFwaX0pO1xuICAgIH0pO1xuICBjb250aW51b3VzUGFyYW1ldGVyR3JvdXBzICYmXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAncGFyYW1Hcm91cCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgICBjb250aW51b3VzUGFyYW1ldGVyR3JvdXBzLmZvckVhY2goKHBhcmFtR3JvdXApID0+IHtcbiAgICAgIGNvbnN0IHtjb250aW51b3VzQWN0aW9uR3JvdXBzfSA9IHBhcmFtR3JvdXA7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDA2IC0gUGFyYW1ldGVyICdhY3Rpb25Hcm91cCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgICAgIGNvbnRpbnVvdXNBY3Rpb25Hcm91cHMuZm9yRWFjaCgoYWN0aW9uR3JvdXApID0+IHtcbiAgICAgICAgY2xlYXJBY3Rpb25Hcm91cFN0eWxlcyh7YWN0aW9uR3JvdXAsIGV2ZW50LCBlbGVtZW50QXBpfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbn1cblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnYWN0aW9uR3JvdXAnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdldmVudCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2VsZW1lbnRBcGknIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG5mdW5jdGlvbiBjbGVhckFjdGlvbkdyb3VwU3R5bGVzKHthY3Rpb25Hcm91cCwgZXZlbnQsIGVsZW1lbnRBcGl9KSB7XG4gIGNvbnN0IHthY3Rpb25JdGVtc30gPSBhY3Rpb25Hcm91cDtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAnYWN0aW9uSXRlbScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgYWN0aW9uSXRlbXMuZm9yRWFjaCgoYWN0aW9uSXRlbSkgPT4ge1xuICAgIGNvbnN0IHthY3Rpb25UeXBlSWQsIGNvbmZpZ30gPSBhY3Rpb25JdGVtO1xuICAgIGxldCBjbGVhckVsZW1lbnQ7XG5cbiAgICBpZiAoaXNQbHVnaW5UeXBlKGFjdGlvblR5cGVJZCkpIHtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ3JlZicgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgICAgIGNsZWFyRWxlbWVudCA9IChyZWYpID0+IGNsZWFyUGx1Z2luKGFjdGlvblR5cGVJZCkocmVmLCBhY3Rpb25JdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xlYXJFbGVtZW50ID0gcHJvY2Vzc0VsZW1lbnRCeVR5cGUoe1xuICAgICAgICBlZmZlY3Q6IGNsZWFyU3R5bGVQcm9wLFxuICAgICAgICBhY3Rpb25UeXBlSWQsXG4gICAgICAgIGVsZW1lbnRBcGksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRBZmZlY3RlZEVsZW1lbnRzKHtjb25maWcsIGV2ZW50LCBlbGVtZW50QXBpfSkuZm9yRWFjaChjbGVhckVsZW1lbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFudXBIVE1MRWxlbWVudChcbiAgZWxlbWVudDogYW55LFxuICBhY3Rpb25JdGVtOiBhbnksXG4gIGVsZW1lbnRBcGk6IGFueVxuKSB7XG4gIGNvbnN0IHtzZXRTdHlsZSwgZ2V0U3R5bGV9ID0gZWxlbWVudEFwaTtcbiAgY29uc3Qge2FjdGlvblR5cGVJZH0gPSBhY3Rpb25JdGVtO1xuXG4gIGlmIChhY3Rpb25UeXBlSWQgPT09IFNUWUxFX1NJWkUpIHtcbiAgICBjb25zdCB7Y29uZmlnfSA9IGFjdGlvbkl0ZW07XG4gICAgaWYgKGNvbmZpZy53aWR0aFVuaXQgPT09IEFVVE8pIHtcbiAgICAgIHNldFN0eWxlKGVsZW1lbnQsIFdJRFRILCAnJyk7XG4gICAgfVxuICAgIGlmIChjb25maWcuaGVpZ2h0VW5pdCA9PT0gQVVUTykge1xuICAgICAgc2V0U3R5bGUoZWxlbWVudCwgSEVJR0hULCAnJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGdldFN0eWxlKGVsZW1lbnQsIFdJTExfQ0hBTkdFKSkge1xuICAgIHByb2Nlc3NFbGVtZW50QnlUeXBlKHtlZmZlY3Q6IHJlbW92ZVdpbGxDaGFuZ2UsIGFjdGlvblR5cGVJZCwgZWxlbWVudEFwaX0pKFxuICAgICAgZWxlbWVudFxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgcHJvY2Vzc0VsZW1lbnRCeVR5cGUgPVxuICAoe1xuICAgIGVmZmVjdCxcbiAgICBhY3Rpb25UeXBlSWQsXG4gICAgZWxlbWVudEFwaSxcbiAgfToge1xuICAgIGVmZmVjdDogKFxuICAgICAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgICBwcm9wOiBhbnkgfCB1bmRlZmluZWQgfCBzdHJpbmcsXG5cbiAgICAgIGVsZW1lbnRBcGk/OiBhbnlcbiAgICApID0+IHZvaWQ7XG4gICAgYWN0aW9uVHlwZUlkOiBBY3Rpb25JZDtcbiAgICBlbGVtZW50QXBpOiBFbGVtZW50QXBpPEhUTUxFbGVtZW50LCBzdHJpbmc+O1xuICB9KSA9PlxuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDA2IC0gUGFyYW1ldGVyICdlbGVtZW50JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICAoZWxlbWVudCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uVHlwZUlkKSB7XG4gICAgICBjYXNlIFRSQU5TRk9STV9NT1ZFOlxuICAgICAgY2FzZSBUUkFOU0ZPUk1fU0NBTEU6XG4gICAgICBjYXNlIFRSQU5TRk9STV9ST1RBVEU6XG4gICAgICBjYXNlIFRSQU5TRk9STV9TS0VXOlxuICAgICAgICBlZmZlY3QoZWxlbWVudCwgVFJBTlNGT1JNX1BSRUZJWEVELCBlbGVtZW50QXBpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNUWUxFX0ZJTFRFUjpcbiAgICAgICAgZWZmZWN0KGVsZW1lbnQsIEZJTFRFUiwgZWxlbWVudEFwaSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTVFlMRV9GT05UX1ZBUklBVElPTjpcbiAgICAgICAgZWZmZWN0KGVsZW1lbnQsIEZPTlRfVkFSSUFUSU9OX1NFVFRJTkdTLCBlbGVtZW50QXBpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNUWUxFX09QQUNJVFk6XG4gICAgICAgIGVmZmVjdChlbGVtZW50LCBPUEFDSVRZLCBlbGVtZW50QXBpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNUWUxFX1NJWkU6XG4gICAgICAgIGVmZmVjdChlbGVtZW50LCBXSURUSCwgZWxlbWVudEFwaSk7XG4gICAgICAgIGVmZmVjdChlbGVtZW50LCBIRUlHSFQsIGVsZW1lbnRBcGkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU1RZTEVfQkFDS0dST1VORF9DT0xPUjpcbiAgICAgIGNhc2UgU1RZTEVfQk9SREVSOlxuICAgICAgY2FzZSBTVFlMRV9URVhUX0NPTE9SOlxuICAgICAgICBlZmZlY3QoZWxlbWVudCwgY29sb3JTdHlsZVByb3BzW2FjdGlvblR5cGVJZF0sIGVsZW1lbnRBcGkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgR0VORVJBTF9ESVNQTEFZOlxuICAgICAgICBlZmZlY3QoZWxlbWVudCwgRElTUExBWSwgZWxlbWVudEFwaSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAncHJvcCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbmZ1bmN0aW9uIGNsZWFyU3R5bGVQcm9wKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wLCBlbGVtZW50QXBpOiBhbnkpIHtcbiAgY29uc3Qge3NldFN0eWxlfSA9IGVsZW1lbnRBcGk7XG4gIHJlbW92ZVdpbGxDaGFuZ2UoZWxlbWVudCwgcHJvcCwgZWxlbWVudEFwaSk7XG4gIHNldFN0eWxlKGVsZW1lbnQsIHByb3AsICcnKTtcbiAgLy8gQ2xlYXIgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZFxuICBpZiAocHJvcCA9PT0gVFJBTlNGT1JNX1BSRUZJWEVEKSB7XG4gICAgc2V0U3R5bGUoZWxlbWVudCwgVFJBTlNGT1JNX1NUWUxFX1BSRUZJWEVELCAnJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1heER1cmF0aW9uSXRlbUluZGV4KGFjdGlvbkl0ZW1zOiBhbnkpIHtcbiAgbGV0IG1heER1cmF0aW9uID0gMDtcbiAgbGV0IHJlc3VsdEluZGV4ID0gMDtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAnYWN0aW9uSXRlbScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMDYgLSBQYXJhbWV0ZXIgJ2luZGV4JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBhY3Rpb25JdGVtcy5mb3JFYWNoKChhY3Rpb25JdGVtLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHtjb25maWd9ID0gYWN0aW9uSXRlbTtcbiAgICBjb25zdCB0b3RhbCA9IGNvbmZpZy5kZWxheSArIGNvbmZpZy5kdXJhdGlvbjtcbiAgICBpZiAodG90YWwgPj0gbWF4RHVyYXRpb24pIHtcbiAgICAgIG1heER1cmF0aW9uID0gdG90YWw7XG4gICAgICByZXN1bHRJbmRleCA9IGluZGV4O1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHRJbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGlvbkxpc3RQcm9ncmVzcyhhY3Rpb25MaXN0OiBhbnksIGluc3RhbmNlOiBhbnkpIHtcbiAgY29uc3Qge2FjdGlvbkl0ZW1Hcm91cHMsIHVzZUZpcnN0R3JvdXBBc0luaXRpYWxTdGF0ZX0gPSBhY3Rpb25MaXN0O1xuICBjb25zdCB7YWN0aW9uSXRlbTogaW5zdGFuY2VJdGVtLCB2ZXJib3NlVGltZUVsYXBzZWQgPSAwfSA9IGluc3RhbmNlO1xuICBsZXQgdG90YWxEdXJhdGlvbiA9IDA7XG4gIGxldCBlbGFwc2VkRHVyYXRpb24gPSAwO1xuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDA2IC0gUGFyYW1ldGVyICdncm91cCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMDYgLSBQYXJhbWV0ZXIgJ2luZGV4JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBhY3Rpb25JdGVtR3JvdXBzLmZvckVhY2goKGdyb3VwLCBpbmRleCkgPT4ge1xuICAgIGlmICh1c2VGaXJzdEdyb3VwQXNJbml0aWFsU3RhdGUgJiYgaW5kZXggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qge2FjdGlvbkl0ZW1zfSA9IGdyb3VwO1xuICAgIGNvbnN0IGNhcnJpZXJJdGVtID0gYWN0aW9uSXRlbXNbZ2V0TWF4RHVyYXRpb25JdGVtSW5kZXgoYWN0aW9uSXRlbXMpXTtcbiAgICBjb25zdCB7Y29uZmlnLCBhY3Rpb25UeXBlSWR9ID0gY2Fycmllckl0ZW07XG4gICAgaWYgKGluc3RhbmNlSXRlbS5pZCA9PT0gY2Fycmllckl0ZW0uaWQpIHtcbiAgICAgIGVsYXBzZWREdXJhdGlvbiA9IHRvdGFsRHVyYXRpb24gKyB2ZXJib3NlVGltZUVsYXBzZWQ7XG4gICAgfVxuICAgIGNvbnN0IGR1cmF0aW9uID1cbiAgICAgIGdldFJlbmRlclR5cGUoYWN0aW9uVHlwZUlkKSA9PT0gUkVOREVSX0dFTkVSQUwgPyAwIDogY29uZmlnLmR1cmF0aW9uO1xuICAgIHRvdGFsRHVyYXRpb24gKz0gY29uZmlnLmRlbGF5ICsgZHVyYXRpb247XG4gIH0pO1xuICByZXR1cm4gdG90YWxEdXJhdGlvbiA+IDAgPyBvcHRpbWl6ZUZsb2F0KGVsYXBzZWREdXJhdGlvbiAvIHRvdGFsRHVyYXRpb24pIDogMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUxpc3RUb0dyb3VwKHtcbiAgYWN0aW9uTGlzdCxcbiAgYWN0aW9uSXRlbUlkLFxuICByYXdEYXRhLFxufToge1xuICBhY3Rpb25MaXN0OiBBY3Rpb25MaXN0VHlwZTtcbiAgYWN0aW9uSXRlbUlkOiBzdHJpbmc7XG4gIHJhd0RhdGE6IElYMlJhd0RhdGE7XG59KSB7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBGSVhNRSAtIFRTMjMzOSAtIFByb3BlcnR5ICdhY3Rpb25JdGVtR3JvdXBzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICdBY3Rpb25MaXN0VHlwZScuXG4gIGNvbnN0IHthY3Rpb25JdGVtR3JvdXBzLCBjb250aW51b3VzUGFyYW1ldGVyR3JvdXBzfSA9IGFjdGlvbkxpc3Q7XG4gIGNvbnN0IG5ld0FjdGlvbkl0ZW1zOiBBcnJheTxBY3Rpb25JdGVtVHlwZT4gPSBbXTtcblxuICBjb25zdCB0YWtlSXRlbVVudGlsTWF0Y2ggPSAoYWN0aW9uSXRlbTogQWN0aW9uSXRlbVR5cGUpID0+IHtcbiAgICBuZXdBY3Rpb25JdGVtcy5wdXNoKFxuICAgICAgbWVyZ2VJbihhY3Rpb25JdGVtLCBbJ2NvbmZpZyddLCB7XG4gICAgICAgIGRlbGF5OiAwLFxuICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm4gYWN0aW9uSXRlbS5pZCA9PT0gYWN0aW9uSXRlbUlkO1xuICB9O1xuXG4gIGFjdGlvbkl0ZW1Hcm91cHMgJiZcbiAgICBhY3Rpb25JdGVtR3JvdXBzLnNvbWUoKHthY3Rpb25JdGVtc306IHthY3Rpb25JdGVtczogQWN0aW9uSXRlbXNUeXBlfSkgPT4ge1xuICAgICAgcmV0dXJuIGFjdGlvbkl0ZW1zLnNvbWUodGFrZUl0ZW1VbnRpbE1hdGNoKTtcbiAgICB9KTtcblxuICBjb250aW51b3VzUGFyYW1ldGVyR3JvdXBzICYmXG4gICAgY29udGludW91c1BhcmFtZXRlckdyb3Vwcy5zb21lKFxuICAgICAgKFxuICAgICAgICBwYXJhbUdyb3VwOlxuICAgICAgICAgIHwgQ29udGludW91c1BhcmFtZXRlckdyb3VwVHlwZTwnTU9VU0VfWCc+XG4gICAgICAgICAgfCBDb250aW51b3VzUGFyYW1ldGVyR3JvdXBUeXBlPCdNT1VTRV9ZJz5cbiAgICAgICAgICB8IENvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cFR5cGU8J1NDUk9MTF9QUk9HUkVTUyc+XG4gICAgICApID0+IHtcbiAgICAgICAgY29uc3Qge2NvbnRpbnVvdXNBY3Rpb25Hcm91cHN9ID0gcGFyYW1Hcm91cDtcbiAgICAgICAgcmV0dXJuIGNvbnRpbnVvdXNBY3Rpb25Hcm91cHMuc29tZShcbiAgICAgICAgICAoe2FjdGlvbkl0ZW1zfToge2FjdGlvbkl0ZW1zOiBBY3Rpb25JdGVtc1R5cGV9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uSXRlbXMuc29tZSh0YWtlSXRlbVVudGlsTWF0Y2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICApO1xuXG4gIHJldHVybiBzZXRJbihyYXdEYXRhLCBbJ2FjdGlvbkxpc3RzJ10sIHtcbiAgICBbYWN0aW9uTGlzdC5pZF06IHtcbiAgICAgIGlkOiBhY3Rpb25MaXN0LmlkLFxuICAgICAgYWN0aW9uSXRlbUdyb3VwczogW1xuICAgICAgICB7XG4gICAgICAgICAgYWN0aW9uSXRlbXM6IG5ld0FjdGlvbkl0ZW1zLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9KTtcbn1cblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnYmFzZWRPbicgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbmV4cG9ydCBmdW5jdGlvbiBzaG91bGROYW1lc3BhY2VFdmVudFBhcmFtZXRlcihldmVudFR5cGVJZDogYW55LCB7YmFzZWRPbn0pIHtcbiAgcmV0dXJuIChcbiAgICAoZXZlbnRUeXBlSWQgPT09IEV2ZW50VHlwZUNvbnN0cy5TQ1JPTExJTkdfSU5fVklFVyAmJlxuICAgICAgKGJhc2VkT24gPT09IEV2ZW50QmFzZWRPbi5FTEVNRU5UIHx8IGJhc2VkT24gPT0gbnVsbCkpIHx8XG4gICAgKGV2ZW50VHlwZUlkID09PSBFdmVudFR5cGVDb25zdHMuTU9VU0VfTU9WRSAmJlxuICAgICAgYmFzZWRPbiA9PT0gRXZlbnRCYXNlZE9uLkVMRU1FTlQpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROYW1lc3BhY2VkUGFyYW1ldGVySWQoXG4gIGV2ZW50U3RhdGVLZXk6IGFueSxcbiAgY29udGludW91c1BhcmFtZXRlckdyb3VwSWQ6IENvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cElkXG4pIHtcbiAgY29uc3QgbmFtZXNwYWNlZFBhcmFtZXRlcklkID1cbiAgICBldmVudFN0YXRlS2V5ICsgQ09MT05fREVMSU1JVEVSICsgY29udGludW91c1BhcmFtZXRlckdyb3VwSWQ7XG5cbiAgcmV0dXJuIG5hbWVzcGFjZWRQYXJhbWV0ZXJJZCBhcyBDb250aW51b3VzUGFyYW1ldGVyR3JvdXBJZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZEFsbG93TWVkaWFRdWVyeShtZWRpYVF1ZXJpZXM6IGFueSwgbWVkaWFRdWVyeUtleTogYW55KSB7XG4gIC8vIER1cmluZyBkZXNpZ24gbW9kZSwgY3VycmVudCBtZWRpYSBxdWVyeSBrZXkgZG9lcyBub3QgZXhpc3RcbiAgaWYgKG1lZGlhUXVlcnlLZXkgPT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBtZWRpYVF1ZXJpZXMuaW5kZXhPZihtZWRpYVF1ZXJ5S2V5KSAhPT0gLTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWRpYVF1ZXJpZXNFcXVhbChsaXN0QTogYW55LCBsaXN0QjogYW55KSB7XG4gIHJldHVybiBzaGFsbG93RXF1YWwobGlzdEEgJiYgbGlzdEEuc29ydCgpLCBsaXN0QiAmJiBsaXN0Qi5zb3J0KCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5VGFyZ2V0KHRhcmdldDogYW55KSB7XG4gIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbiAgaWYgKHRhcmdldC5wbHVnaW5FbGVtZW50ICYmIHRhcmdldC5vYmplY3RJZCkge1xuICAgIHJldHVybiB0YXJnZXQucGx1Z2luRWxlbWVudCArIEJBUl9ERUxJTUlURVIgKyB0YXJnZXQub2JqZWN0SWQ7XG4gIH1cbiAgaWYgKHRhcmdldC5vYmplY3RJZCkge1xuICAgIHJldHVybiB0YXJnZXQub2JqZWN0SWQ7XG4gIH1cbiAgY29uc3Qge2lkID0gJycsIHNlbGVjdG9yID0gJycsIHVzZUV2ZW50VGFyZ2V0ID0gJyd9ID0gdGFyZ2V0O1xuICByZXR1cm4gaWQgKyBCQVJfREVMSU1JVEVSICsgc2VsZWN0b3IgKyBCQVJfREVMSU1JVEVSICsgdXNlRXZlbnRUYXJnZXQ7XG59XG4iXSwibmFtZXMiOlsiY2xlYW51cEhUTUxFbGVtZW50IiwiY2xlYXJBbGxTdHlsZXMiLCJjbGVhck9iamVjdENhY2hlIiwiZ2V0QWN0aW9uTGlzdFByb2dyZXNzIiwiZ2V0QWZmZWN0ZWRFbGVtZW50cyIsImdldENvbXB1dGVkU3R5bGUiLCJnZXREZXN0aW5hdGlvblZhbHVlcyIsImdldEVsZW1lbnRJZCIsImdldEluc3RhbmNlSWQiLCJnZXRJbnN0YW5jZU9yaWdpbiIsImdldEl0ZW1Db25maWdCeUtleSIsImdldE1heER1cmF0aW9uSXRlbUluZGV4IiwiZ2V0TmFtZXNwYWNlZFBhcmFtZXRlcklkIiwiZ2V0UmVuZGVyVHlwZSIsImdldFN0eWxlUHJvcCIsIm1lZGlhUXVlcmllc0VxdWFsIiwib2JzZXJ2ZVN0b3JlIiwicmVkdWNlTGlzdFRvR3JvdXAiLCJyZWlmeVN0YXRlIiwicmVuZGVySFRNTEVsZW1lbnQiLCJzaGFsbG93RXF1YWwiLCJzaG91bGRBbGxvd01lZGlhUXVlcnkiLCJzaG91bGROYW1lc3BhY2VFdmVudFBhcmFtZXRlciIsInN0cmluZ2lmeVRhcmdldCIsIkJBQ0tHUk9VTkQiLCJUUkFOU0ZPUk0iLCJUUkFOU0xBVEVfM0QiLCJTQ0FMRV8zRCIsIlJPVEFURV9YIiwiUk9UQVRFX1kiLCJST1RBVEVfWiIsIlNLRVciLCJQUkVTRVJWRV8zRCIsIkZMRVgiLCJPUEFDSVRZIiwiRklMVEVSIiwiRk9OVF9WQVJJQVRJT05fU0VUVElOR1MiLCJXSURUSCIsIkhFSUdIVCIsIkJBQ0tHUk9VTkRfQ09MT1IiLCJCT1JERVJfQ09MT1IiLCJDT0xPUiIsIkNISUxEUkVOIiwiSU1NRURJQVRFX0NISUxEUkVOIiwiU0lCTElOR1MiLCJQQVJFTlQiLCJESVNQTEFZIiwiV0lMTF9DSEFOR0UiLCJBVVRPIiwiQ09NTUFfREVMSU1JVEVSIiwiQ09MT05fREVMSU1JVEVSIiwiQkFSX0RFTElNSVRFUiIsIlJFTkRFUl9UUkFOU0ZPUk0iLCJSRU5ERVJfR0VORVJBTCIsIlJFTkRFUl9TVFlMRSIsIlJFTkRFUl9QTFVHSU4iLCJJWDJFbmdpbmVDb25zdGFudHMiLCJUUkFOU0ZPUk1fTU9WRSIsIlRSQU5TRk9STV9TQ0FMRSIsIlRSQU5TRk9STV9ST1RBVEUiLCJUUkFOU0ZPUk1fU0tFVyIsIlNUWUxFX09QQUNJVFkiLCJTVFlMRV9GSUxURVIiLCJTVFlMRV9GT05UX1ZBUklBVElPTiIsIlNUWUxFX1NJWkUiLCJTVFlMRV9CQUNLR1JPVU5EX0NPTE9SIiwiU1RZTEVfQk9SREVSIiwiU1RZTEVfVEVYVF9DT0xPUiIsIkdFTkVSQUxfRElTUExBWSIsIk9CSkVDVF9WQUxVRSIsIkFjdGlvblR5cGVDb25zdHMiLCJ0cmltIiwidiIsImNvbG9yU3R5bGVQcm9wcyIsIk9iamVjdCIsImZyZWV6ZSIsIndpbGxDaGFuZ2VQcm9wcyIsIlRSQU5TRk9STV9QUkVGSVhFRCIsIm9iamVjdENhY2hlIiwiTWFwIiwiY2xlYXIiLCJpbnN0YW5jZUNvdW50IiwiZWxlbWVudENvdW50IiwiaXhFbGVtZW50cyIsInJlZiIsImtleSIsIml4RWwiLCJpZCIsImV2ZW50cyIsImFjdGlvbkxpc3RzIiwic2l0ZSIsImV2ZW50VHlwZU1hcCIsInJlZHVjZSIsInJlc3VsdCIsImV2ZW50IiwiZXZlbnRUeXBlSWQiLCJtZWRpYVF1ZXJpZXMiLCJtZWRpYVF1ZXJ5S2V5cyIsIm1hcCIsIm1xIiwiY29uc29sZSIsIndhcm4iLCJpeERhdGEiLCJzdHJpY3RFcXVhbCIsImEiLCJiIiwic3RvcmUiLCJzZWxlY3QiLCJvbkNoYW5nZSIsImNvbXBhcmF0b3IiLCJnZXRTdGF0ZSIsInN1YnNjcmliZSIsInVuc3Vic2NyaWJlIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFN0YXRlIiwibmV4dFN0YXRlIiwibm9ybWFsaXplVGFyZ2V0IiwidGFyZ2V0IiwidHlwZSIsIm9iamVjdElkIiwic2VsZWN0b3IiLCJzZWxlY3Rvckd1aWRzIiwiYXBwbGllc1RvIiwidXNlRXZlbnRUYXJnZXQiLCJjb25maWciLCJldmVudFRhcmdldCIsImVsZW1lbnRSb290IiwiZWxlbWVudEFwaSIsIkVycm9yIiwidGFyZ2V0cyIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImFjY3VtdWxhdG9yIiwiY29uY2F0IiwiZ2V0VmFsaWREb2N1bWVudCIsImdldFF1ZXJ5U2VsZWN0b3IiLCJxdWVyeURvY3VtZW50IiwiZ2V0Q2hpbGRFbGVtZW50cyIsImdldFNpYmxpbmdFbGVtZW50cyIsIm1hdGNoU2VsZWN0b3IiLCJlbGVtZW50Q29udGFpbnMiLCJpc1NpYmxpbmdOb2RlIiwiaGFzIiwiZ2V0Iiwic2V0IiwiRXZlbnRBcHBsaWVzVG8iLCJQQUdFIiwiZG9jIiwib3ZlcnJpZGVzIiwiYWN0aW9uIiwiYWZmZWN0ZWRFbGVtZW50cyIsIm92ZXJyaWRlIiwidmFsaWRPdmVycmlkZSIsIkJvb2xlYW4iLCJsaW1pdEFmZmVjdGVkRWxlbWVudHMiLCJiYXNlU2VsZWN0b3IiLCJmaW5hbFNlbGVjdG9yIiwiZXZlbnRUYXJnZXRTZWxlY3RvciIsImV2ZW50VGFyZ2V0cyIsImZpbHRlciIsInBhcmVudEVsZW1lbnQiLCJzb21lIiwidGFyZ2V0RWxlbWVudCIsImNoaWxkRWxlbWVudCIsInNpYmxpbmdFbGVtZW50IiwiSVNfQlJPV1NFUl9FTlYiLCJlbGVtZW50IiwiY29udGFpbnMiLCJhY3Rpb25JdGVtIiwiYWN0aW9uVHlwZUlkIiwid2luZG93IiwicHhWYWx1ZVJlZ2V4IiwiZ2V0RmlsdGVyRGVmYXVsdHMiLCJhY3Rpb25TdGF0ZSIsImZpbHRlcnMiLCJmaWx0ZXJEZWZhdWx0cyIsImdldEZvbnRWYXJpYXRpb25EZWZhdWx0cyIsImZvbnRWYXJpYXRpb25zIiwiZm9udFZhcmlhdGlvbiIsImZvbnRWYXJpYXRpb25EZWZhdWx0cyIsImRlZmF1bHRWYWx1ZSIsInJlZlN0YXRlIiwiY29tcHV0ZWRTdHlsZSIsImdldFN0eWxlIiwiaXNQbHVnaW5UeXBlIiwiZ2V0UGx1Z2luT3JpZ2luIiwidHJhbnNmb3JtRGVmYXVsdHMiLCJ2YWx1ZSIsImRlZmF1bHRUbyIsInBhcnNlRmxvYXQiLCJpbmxpbmVXaWR0aCIsImlubGluZUhlaWdodCIsIndpZHRoVmFsdWUiLCJoZWlnaHRWYWx1ZSIsIndpZHRoVW5pdCIsInRlc3QiLCJ3aWR0aCIsImhlaWdodFVuaXQiLCJoZWlnaHQiLCJwYXJzZUNvbG9yIiwiZGlzcGxheSIsInJlZHVjZUZpbHRlcnMiLCJyZWR1Y2VGb250VmFyaWF0aW9ucyIsImdldFBsdWdpbkNvbmZpZyIsImZpbmRMYXN0IiwiZ2V0UGx1Z2luRGVzdGluYXRpb24iLCJ4VmFsdWUiLCJ5VmFsdWUiLCJ6VmFsdWUiLCJzZXRTdHlsZSIsImdldFByb3BlcnR5IiwidGVtcCIsInJWYWx1ZSIsImdWYWx1ZSIsImJWYWx1ZSIsImFWYWx1ZSIsImdsb2JhbFN3YXRjaElkIiwic3RhcnRzV2l0aCIsIm5vcm1hbGl6ZWRWYWx1ZSIsIm5vcm1hbGl6ZUNvbG9yIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiYWxwaGEiLCJyZW5kZXJUeXBlIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiZXZlbnRJZCIsInN0eWxlUHJvcCIsInBsdWdpbkluc3RhbmNlIiwicmVuZGVyVHJhbnNmb3JtIiwicmVuZGVyU3R5bGUiLCJyZW5kZXJHZW5lcmFsIiwicmVuZGVyUGx1Z2luIiwiYmx1ciIsImludmVydCIsImdyYXlzY2FsZSIsInNhdHVyYXRlIiwic2VwaWEiLCJjb250cmFzdCIsImJyaWdodG5lc3MiLCJ3Z2h0Iiwib3BzeiIsIndkdGgiLCJzbG50IiwiZ2V0RmlsdGVyVW5pdCIsImZpbHRlclR5cGUiLCJhY3Rpb25JdGVtQ29uZmlnIiwidW5pdCIsInRyYW5zZm9ybUtleXMiLCJrZXlzIiwibmV3VHJhbnNmb3JtIiwiZGVmYXVsdHMiLCJ4VW5pdCIsInlVbml0IiwielVuaXQiLCJqb2luIiwiYWRkV2lsbENoYW5nZSIsImhhc0RlZmluZWQzZFRyYW5zZm9ybSIsIlRSQU5TRk9STV9TVFlMRV9QUkVGSVhFRCIsInJlbmRlckZpbHRlciIsImZpbHRlclZhbHVlIiwicmVuZGVyRm9udFZhcmlhdGlvbiIsImZvbnRWYXJpYXRpb25WYWx1ZSIsInB1c2giLCJ1bmRlZmluZWQiLCJwYXJhbUNhcHR1cmUiLCJyZ2JWYWxpZFJlZ2V4IiwicmdiTWF0Y2hSZWdleCIsIlJlZ0V4cCIsImdldEZpcnN0TWF0Y2giLCJyZWdleCIsIm1hdGNoIiwiZXhlYyIsInByb3AiLCJpbmxpbmVWYWx1ZSIsIm1hdGNoZXMiLCJzcGxpdCIsInBhcnNlSW50IiwiTWF0aCIsInJvdW5kIiwiRkxFWF9QUkVGSVhFRCIsInZhbGlkUHJvcCIsInZhbHVlcyIsImluZGV4T2YiLCJyZW1vdmVXaWxsQ2hhbmdlIiwiZm9yRWFjaCIsImFjdGlvbkxpc3RJZCIsImFjdGlvbkxpc3QiLCJjbGVhckFjdGlvbkxpc3RTdHlsZXMiLCJhY3Rpb25JdGVtR3JvdXBzIiwiY29udGludW91c1BhcmFtZXRlckdyb3VwcyIsImFjdGlvbkdyb3VwIiwiY2xlYXJBY3Rpb25Hcm91cFN0eWxlcyIsInBhcmFtR3JvdXAiLCJjb250aW51b3VzQWN0aW9uR3JvdXBzIiwiYWN0aW9uSXRlbXMiLCJjbGVhckVsZW1lbnQiLCJjbGVhclBsdWdpbiIsInByb2Nlc3NFbGVtZW50QnlUeXBlIiwiZWZmZWN0IiwiY2xlYXJTdHlsZVByb3AiLCJtYXhEdXJhdGlvbiIsInJlc3VsdEluZGV4IiwiaW5kZXgiLCJ0b3RhbCIsImRlbGF5IiwiZHVyYXRpb24iLCJpbnN0YW5jZSIsInVzZUZpcnN0R3JvdXBBc0luaXRpYWxTdGF0ZSIsImluc3RhbmNlSXRlbSIsInZlcmJvc2VUaW1lRWxhcHNlZCIsInRvdGFsRHVyYXRpb24iLCJlbGFwc2VkRHVyYXRpb24iLCJncm91cCIsImNhcnJpZXJJdGVtIiwib3B0aW1pemVGbG9hdCIsImFjdGlvbkl0ZW1JZCIsInJhd0RhdGEiLCJuZXdBY3Rpb25JdGVtcyIsInRha2VJdGVtVW50aWxNYXRjaCIsIm1lcmdlSW4iLCJzZXRJbiIsImJhc2VkT24iLCJFdmVudFR5cGVDb25zdHMiLCJTQ1JPTExJTkdfSU5fVklFVyIsIkV2ZW50QmFzZWRPbiIsIkVMRU1FTlQiLCJNT1VTRV9NT1ZFIiwiZXZlbnRTdGF0ZUtleSIsImNvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cElkIiwibmFtZXNwYWNlZFBhcmFtZXRlcklkIiwibWVkaWFRdWVyeUtleSIsImxpc3RBIiwibGlzdEIiLCJzb3J0IiwicGx1Z2luRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCOzs7Ozs7Ozs7OztJQXNxQ05BLGtCQUFrQjtlQUFsQkE7O0lB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

}),
7164: (function (__unused_webpack_module, exports) {
"use strict";
// from https://github.com/acdlite/recompose/blob/master/src/packages/recompose/shallowEqual.js
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule shallowEqual
 * @typechecks
 */ /* eslint-disable no-self-compare */ /**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
function is(x, y) {
    // SameValue algorithm
    if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        // Added the nonzero y check to make Flow happy, but it is redundant
        return x !== 0 || y !== 0 || 1 / x === 1 / y;
    }
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
}
/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */ function shallowEqual(objA, objB) {
    if (is(objA, objB)) {
        return true;
    }
    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
        return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    // Test for A's keys different from B.
    for(let i = 0; i < keysA.length; i++){
        if (!Object.hasOwn(objB, // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'PropertyKey'.
        keysA[i]) || // @ts-expect-error - TS2538 - Type 'undefined' cannot be used as an index type. | TS2538 - Type 'undefined' cannot be used as an index type.
        !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}
const _default = shallowEqual;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC9sb2dpYy9zaGFsbG93RXF1YWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYWNkbGl0ZS9yZWNvbXBvc2UvYmxvYi9tYXN0ZXIvc3JjL3BhY2thZ2VzL3JlY29tcG9zZS9zaGFsbG93RXF1YWwuanNcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgc2hhbGxvd0VxdWFsXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSAqL1xuXG4vKipcbiAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICovXG5mdW5jdGlvbiBpcyh4OiBudW1iZXIgfCBSZWNvcmQ8YW55LCBhbnk+LCB5OiBudW1iZXIgfCBSZWNvcmQ8YW55LCBhbnk+KSB7XG4gIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgaWYgKHggPT09IHkpIHtcbiAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgIC8vIEFkZGVkIHRoZSBub256ZXJvIHkgY2hlY2sgdG8gbWFrZSBGbG93IGhhcHB5LCBidXQgaXQgaXMgcmVkdW5kYW50XG4gICAgcmV0dXJuIHggIT09IDAgfHwgeSAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gIH1cbiAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBlcXVhbGl0eSBieSBpdGVyYXRpbmcgdGhyb3VnaCBrZXlzIG9uIGFuIG9iamVjdCBhbmQgcmV0dXJuaW5nIGZhbHNlXG4gKiB3aGVuIGFueSBrZXkgaGFzIHZhbHVlcyB3aGljaCBhcmUgbm90IHN0cmljdGx5IGVxdWFsIGJldHdlZW4gdGhlIGFyZ3VtZW50cy5cbiAqIFJldHVybnMgdHJ1ZSB3aGVuIHRoZSB2YWx1ZXMgb2YgYWxsIGtleXMgYXJlIHN0cmljdGx5IGVxdWFsLlxuICovXG5mdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQTogUmVjb3JkPGFueSwgYW55Piwgb2JqQjogUmVjb3JkPGFueSwgYW55Pik6IGJvb2xlYW4ge1xuICBpZiAoaXMob2JqQSwgb2JqQikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChcbiAgICB0eXBlb2Ygb2JqQSAhPT0gJ29iamVjdCcgfHxcbiAgICBvYmpBID09PSBudWxsIHx8XG4gICAgdHlwZW9mIG9iakIgIT09ICdvYmplY3QnIHx8XG4gICAgb2JqQiA9PT0gbnVsbFxuICApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICBjb25zdCBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFRlc3QgZm9yIEEncyBrZXlzIGRpZmZlcmVudCBmcm9tIEIuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5c0EubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoXG4gICAgICAhT2JqZWN0Lmhhc093bihcbiAgICAgICAgb2JqQixcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjM0NSAtIEFyZ3VtZW50IG9mIHR5cGUgJ3N0cmluZyB8IHVuZGVmaW5lZCcgaXMgbm90IGFzc2lnbmFibGUgdG8gcGFyYW1ldGVyIG9mIHR5cGUgJ1Byb3BlcnR5S2V5Jy5cbiAgICAgICAga2V5c0FbaV1cbiAgICAgICkgfHxcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzI1MzggLSBUeXBlICd1bmRlZmluZWQnIGNhbm5vdCBiZSB1c2VkIGFzIGFuIGluZGV4IHR5cGUuIHwgVFMyNTM4IC0gVHlwZSAndW5kZWZpbmVkJyBjYW5ub3QgYmUgdXNlZCBhcyBhbiBpbmRleCB0eXBlLlxuICAgICAgIWlzKG9iakFba2V5c0FbaV1dLCBvYmpCW2tleXNBW2ldXSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hhbGxvd0VxdWFsO1xuIl0sIm5hbWVzIjpbImlzIiwieCIsInkiLCJzaGFsbG93RXF1YWwiLCJvYmpBIiwib2JqQiIsImtleXNBIiwiT2JqZWN0Iiwia2V5cyIsImtleXNCIiwibGVuZ3RoIiwiaSIsImhhc093biJdLCJtYXBwaW5ncyI6IkFBQUEsK0ZBQStGO0FBRS9GOzs7Ozs7OztDQVFDLEdBRUQsa0NBQWtDLEdBRWxDOzs7Q0FHQzs7OzsrQkF5REQ7OztlQUFBOzs7QUF4REEsU0FBU0EsR0FBR0MsQ0FBNEIsRUFBRUMsQ0FBNEI7SUFDcEUsc0JBQXNCO0lBQ3RCLElBQUlELE1BQU1DLEdBQUc7UUFDWCxrQkFBa0I7UUFDbEIsMEJBQTBCO1FBQzFCLG9FQUFvRTtRQUNwRSxPQUFPRCxNQUFNLEtBQUtDLE1BQU0sS0FBSyxJQUFJRCxNQUFNLElBQUlDO0lBQzdDO0lBQ0EsdUJBQXVCO0lBQ3ZCLE9BQU9ELE1BQU1BLEtBQUtDLE1BQU1BO0FBQzFCO0FBRUE7Ozs7Q0FJQyxHQUNELFNBQVNDLGFBQWFDLElBQXNCLEVBQUVDLElBQXNCO0lBQ2xFLElBQUlMLEdBQUdJLE1BQU1DLE9BQU87UUFDbEIsT0FBTztJQUNUO0lBRUEsSUFDRSxPQUFPRCxTQUFTLFlBQ2hCQSxTQUFTLFFBQ1QsT0FBT0MsU0FBUyxZQUNoQkEsU0FBUyxNQUNUO1FBQ0EsT0FBTztJQUNUO0lBRUEsTUFBTUMsUUFBUUMsT0FBT0MsSUFBSSxDQUFDSjtJQUMxQixNQUFNSyxRQUFRRixPQUFPQyxJQUFJLENBQUNIO0lBRTFCLElBQUlDLE1BQU1JLE1BQU0sS0FBS0QsTUFBTUMsTUFBTSxFQUFFO1FBQ2pDLE9BQU87SUFDVDtJQUVBLHNDQUFzQztJQUN0QyxJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUwsTUFBTUksTUFBTSxFQUFFQyxJQUFLO1FBQ3JDLElBQ0UsQ0FBQ0osT0FBT0ssTUFBTSxDQUNaUCxNQUNBLDBIQUEwSDtRQUMxSEMsS0FBSyxDQUFDSyxFQUFFLEtBRVYsNklBQTZJO1FBQzdJLENBQUNYLEdBQUdJLElBQUksQ0FBQ0UsS0FBSyxDQUFDSyxFQUFFLENBQUMsRUFBRU4sSUFBSSxDQUFDQyxLQUFLLENBQUNLLEVBQUUsQ0FBQyxHQUNsQztZQUNBLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBTztBQUNUO01BRUEsV0FBZVIifQ==

}),
5861: (function (__unused_webpack_module, exports, __webpack_require__) {
"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createElementState: function() {
        return createElementState;
    },
    ixElements: function() {
        return ixElements;
    },
    mergeActionState: function() {
        return mergeActionState;
    }
});
const _timm = __webpack_require__(1185);
const _sharedconstants = __webpack_require__(7087);
const { HTML_ELEMENT, PLAIN_OBJECT, EXPRESSION_ELEMENT, CONFIG_X_VALUE, CONFIG_Y_VALUE, CONFIG_Z_VALUE, CONFIG_VALUE, CONFIG_X_UNIT, CONFIG_Y_UNIT, CONFIG_Z_UNIT, CONFIG_UNIT } = _sharedconstants.IX2EngineConstants;
const { IX2_SESSION_STOPPED, IX2_INSTANCE_ADDED, IX2_ELEMENT_STATE_CHANGED } = _sharedconstants.IX2EngineActionTypes;
const initialState = {};
const refState = 'refState';
const ixElements = (state = initialState, action = {})=>{
    switch(action.type){
        case IX2_SESSION_STOPPED:
            {
                return initialState;
            }
        case IX2_INSTANCE_ADDED:
            {
                const { elementId, element: ref, origin, actionItem, refType } = action.payload;
                const { actionTypeId } = actionItem;
                let newState = state;
                // Create new ref entry if it doesn't exist
                if ((0, _timm.getIn)(newState, [
                    elementId,
                    ref
                ]) !== ref) {
                    newState = createElementState(newState, ref, refType, elementId, actionItem);
                }
                // Merge origin values into ref state
                return mergeActionState(newState, elementId, actionTypeId, origin, actionItem);
            }
        case IX2_ELEMENT_STATE_CHANGED:
            {
                const { elementId, actionTypeId, current, actionItem } = action.payload;
                return mergeActionState(state, elementId, actionTypeId, current, actionItem);
            }
        default:
            {
                return state;
            }
    }
};
function createElementState(state, ref, refType, elementId, actionItem) {
    const refId = refType === PLAIN_OBJECT ? (0, _timm.getIn)(actionItem, [
        'config',
        'target',
        'objectId'
    ]) : null;
    return (0, _timm.mergeIn)(state, [
        elementId
    ], {
        id: elementId,
        ref,
        refId,
        refType
    });
}
function mergeActionState(state, elementId, actionTypeId, actionState, actionItem) {
    const units = pickUnits(actionItem);
    const mergePath = [
        elementId,
        refState,
        actionTypeId
    ];
    return (0, _timm.mergeIn)(state, mergePath, actionState, units);
}
const valueUnitPairs = [
    [
        CONFIG_X_VALUE,
        CONFIG_X_UNIT
    ],
    [
        CONFIG_Y_VALUE,
        CONFIG_Y_UNIT
    ],
    [
        CONFIG_Z_VALUE,
        CONFIG_Z_UNIT
    ],
    [
        CONFIG_VALUE,
        CONFIG_UNIT
    ]
];
function pickUnits(actionItem) {
    const { config } = actionItem;
    return valueUnitPairs.reduce((result, pair)=>{
        const valueKey = pair[0];
        const unitKey = pair[1];
        // @ts-expect-error - TS2538 - Type 'undefined' cannot be used as an index type.
        const configValue = config[valueKey];
        // @ts-expect-error - TS2538 - Type 'undefined' cannot be used as an index type.
        const configUnit = config[unitKey];
        if (configValue != null && configUnit != null) {
            // @ts-expect-error - TS2538 - Type 'undefined' cannot be used as an index type.
            result[unitKey] = configUnit;
        }
        return result;
    }, {});
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC9yZWR1Y2Vycy9JWDJFbGVtZW50c1JlZHVjZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRJbiwgbWVyZ2VJbn0gZnJvbSAndGltbSc7XG5pbXBvcnQge1xuICBJWDJFbmdpbmVBY3Rpb25UeXBlcyxcbiAgSVgyRW5naW5lQ29uc3RhbnRzLFxufSBmcm9tICdAcGFja2FnZXMvc3lzdGVtcy9peDIvc2hhcmVkLWNvbnN0YW50cyc7XG5cbmNvbnN0IHtcbiAgSFRNTF9FTEVNRU5ULFxuICBQTEFJTl9PQkpFQ1QsXG4gIEVYUFJFU1NJT05fRUxFTUVOVCxcbiAgQ09ORklHX1hfVkFMVUUsXG4gIENPTkZJR19ZX1ZBTFVFLFxuICBDT05GSUdfWl9WQUxVRSxcbiAgQ09ORklHX1ZBTFVFLFxuICBDT05GSUdfWF9VTklULFxuICBDT05GSUdfWV9VTklULFxuICBDT05GSUdfWl9VTklULFxuICBDT05GSUdfVU5JVCxcbn0gPSBJWDJFbmdpbmVDb25zdGFudHM7XG5cbmNvbnN0IHtJWDJfU0VTU0lPTl9TVE9QUEVELCBJWDJfSU5TVEFOQ0VfQURERUQsIElYMl9FTEVNRU5UX1NUQVRFX0NIQU5HRUR9ID1cbiAgSVgyRW5naW5lQWN0aW9uVHlwZXM7XG5cbmV4cG9ydCB0eXBlIFJlZlR5cGVzID1cbiAgfCB0eXBlb2YgSFRNTF9FTEVNRU5UXG4gIHwgdHlwZW9mIFBMQUlOX09CSkVDVFxuICB8IHR5cGVvZiBFWFBSRVNTSU9OX0VMRU1FTlQ7XG5cbnR5cGUgQWN0aW9uU3RhdGUgPSB7XG4gIHhWYWx1ZT86IG51bWJlcjtcbiAgeVZhbHVlPzogbnVtYmVyO1xuICB6VmFsdWU/OiBudW1iZXI7XG4gIHZhbHVlPzogbnVtYmVyO1xuICB4VW5pdD86IHN0cmluZztcbiAgeVVuaXQ/OiBzdHJpbmc7XG4gIHpVbml0Pzogc3RyaW5nO1xuICB1bml0Pzogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgRWxlbWVudHNTdGF0ZTxFbGVtZW50VHlwZT4gPSB7XG4gIFtlbGVtZW50SWQ6IHN0cmluZ106IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHJlZjogRWxlbWVudFR5cGU7IC8vIEhUTUxFbGVtZW50IHwgT2JqZWN0O1xuICAgIHJlZklkOiBzdHJpbmcgfCBudWxsO1xuICAgIHJlZlR5cGU6IFJlZlR5cGVzO1xuICAgIHJlZlN0YXRlOiB7XG4gICAgICBbYWN0aW9uVHlwZUlkOiBzdHJpbmddOiBBY3Rpb25TdGF0ZTtcbiAgICB9O1xuICB9O1xufTtcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBFbGVtZW50c1N0YXRlPGFueT4gPSB7fTtcbmNvbnN0IHJlZlN0YXRlID0gJ3JlZlN0YXRlJztcblxuZXhwb3J0IGNvbnN0IGl4RWxlbWVudHMgPSA8RWxlbWVudFR5cGU+KFxuICBzdGF0ZTogRWxlbWVudHNTdGF0ZTxFbGVtZW50VHlwZT4gPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogUmVjb3JkPGFueSwgYW55PiA9IHt9XG4pOiBFbGVtZW50c1N0YXRlPEVsZW1lbnRUeXBlPiA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIElYMl9TRVNTSU9OX1NUT1BQRUQ6IHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgfVxuICAgIGNhc2UgSVgyX0lOU1RBTkNFX0FEREVEOiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGVsZW1lbnRJZCxcbiAgICAgICAgZWxlbWVudDogcmVmLFxuICAgICAgICBvcmlnaW4sXG4gICAgICAgIGFjdGlvbkl0ZW0sXG4gICAgICAgIHJlZlR5cGUsXG4gICAgICB9ID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgIGNvbnN0IHthY3Rpb25UeXBlSWR9ID0gYWN0aW9uSXRlbTtcbiAgICAgIGxldCBuZXdTdGF0ZSA9IHN0YXRlO1xuXG4gICAgICAvLyBDcmVhdGUgbmV3IHJlZiBlbnRyeSBpZiBpdCBkb2Vzbid0IGV4aXN0XG4gICAgICBpZiAoZ2V0SW4obmV3U3RhdGUsIFtlbGVtZW50SWQsIHJlZl0pICE9PSByZWYpIHtcbiAgICAgICAgbmV3U3RhdGUgPSBjcmVhdGVFbGVtZW50U3RhdGUoXG4gICAgICAgICAgbmV3U3RhdGUsXG4gICAgICAgICAgcmVmLFxuICAgICAgICAgIHJlZlR5cGUsXG4gICAgICAgICAgZWxlbWVudElkLFxuICAgICAgICAgIGFjdGlvbkl0ZW1cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gTWVyZ2Ugb3JpZ2luIHZhbHVlcyBpbnRvIHJlZiBzdGF0ZVxuICAgICAgcmV0dXJuIG1lcmdlQWN0aW9uU3RhdGUoXG4gICAgICAgIG5ld1N0YXRlLFxuICAgICAgICBlbGVtZW50SWQsXG4gICAgICAgIGFjdGlvblR5cGVJZCxcbiAgICAgICAgb3JpZ2luLFxuICAgICAgICBhY3Rpb25JdGVtXG4gICAgICApO1xuICAgIH1cbiAgICBjYXNlIElYMl9FTEVNRU5UX1NUQVRFX0NIQU5HRUQ6IHtcbiAgICAgIGNvbnN0IHtlbGVtZW50SWQsIGFjdGlvblR5cGVJZCwgY3VycmVudCwgYWN0aW9uSXRlbX0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiBtZXJnZUFjdGlvblN0YXRlKFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAgZWxlbWVudElkLFxuICAgICAgICBhY3Rpb25UeXBlSWQsXG4gICAgICAgIGN1cnJlbnQsXG4gICAgICAgIGFjdGlvbkl0ZW1cbiAgICAgICk7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50U3RhdGU8RWxlbWVudFR5cGU+KFxuICBzdGF0ZTogRWxlbWVudHNTdGF0ZTxFbGVtZW50VHlwZT4sXG4gIHJlZjogRWxlbWVudFR5cGUsXG4gIHJlZlR5cGU6IFJlZlR5cGVzLFxuICBlbGVtZW50SWQ6IHN0cmluZyxcbiAgYWN0aW9uSXRlbToge1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfVxuKTogRWxlbWVudHNTdGF0ZTxFbGVtZW50VHlwZT4ge1xuICBjb25zdCByZWZJZCA9XG4gICAgcmVmVHlwZSA9PT0gUExBSU5fT0JKRUNUXG4gICAgICA/IGdldEluKGFjdGlvbkl0ZW0sIFsnY29uZmlnJywgJ3RhcmdldCcsICdvYmplY3RJZCddKVxuICAgICAgOiBudWxsO1xuICByZXR1cm4gbWVyZ2VJbihzdGF0ZSwgW2VsZW1lbnRJZF0sIHtcbiAgICBpZDogZWxlbWVudElkLFxuICAgIHJlZixcbiAgICByZWZJZCxcbiAgICByZWZUeXBlLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQWN0aW9uU3RhdGU8RWxlbWVudFR5cGU+KFxuICBzdGF0ZTogRWxlbWVudHNTdGF0ZTxFbGVtZW50VHlwZT4sXG4gIGVsZW1lbnRJZDogc3RyaW5nLFxuICBhY3Rpb25UeXBlSWQ6IHN0cmluZyxcbiAgYWN0aW9uU3RhdGU6IEFjdGlvblN0YXRlLFxuICBhY3Rpb25JdGVtOiBSZWNvcmQ8YW55LCBhbnk+XG4pOiBFbGVtZW50c1N0YXRlPEVsZW1lbnRUeXBlPiB7XG4gIGNvbnN0IHVuaXRzID0gcGlja1VuaXRzKGFjdGlvbkl0ZW0pO1xuICBjb25zdCBtZXJnZVBhdGggPSBbZWxlbWVudElkLCByZWZTdGF0ZSwgYWN0aW9uVHlwZUlkXTtcbiAgcmV0dXJuIG1lcmdlSW4oc3RhdGUsIG1lcmdlUGF0aCwgYWN0aW9uU3RhdGUsIHVuaXRzKTtcbn1cblxuY29uc3QgdmFsdWVVbml0UGFpcnMgPSBbXG4gIFtDT05GSUdfWF9WQUxVRSwgQ09ORklHX1hfVU5JVF0sXG4gIFtDT05GSUdfWV9WQUxVRSwgQ09ORklHX1lfVU5JVF0sXG4gIFtDT05GSUdfWl9WQUxVRSwgQ09ORklHX1pfVU5JVF0sXG4gIFtDT05GSUdfVkFMVUUsIENPTkZJR19VTklUXSxcbl07XG5cbmZ1bmN0aW9uIHBpY2tVbml0cyhhY3Rpb25JdGVtOiBSZWNvcmQ8YW55LCBhbnk+KSB7XG4gIGNvbnN0IHtjb25maWd9ID0gYWN0aW9uSXRlbTtcbiAgcmV0dXJuIHZhbHVlVW5pdFBhaXJzLnJlZHVjZTxSZWNvcmQ8c3RyaW5nLCBhbnk+PigocmVzdWx0LCBwYWlyKSA9PiB7XG4gICAgY29uc3QgdmFsdWVLZXkgPSBwYWlyWzBdO1xuICAgIGNvbnN0IHVuaXRLZXkgPSBwYWlyWzFdO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzI1MzggLSBUeXBlICd1bmRlZmluZWQnIGNhbm5vdCBiZSB1c2VkIGFzIGFuIGluZGV4IHR5cGUuXG4gICAgY29uc3QgY29uZmlnVmFsdWUgPSBjb25maWdbdmFsdWVLZXldO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzI1MzggLSBUeXBlICd1bmRlZmluZWQnIGNhbm5vdCBiZSB1c2VkIGFzIGFuIGluZGV4IHR5cGUuXG4gICAgY29uc3QgY29uZmlnVW5pdCA9IGNvbmZpZ1t1bml0S2V5XTtcbiAgICBpZiAoY29uZmlnVmFsdWUgIT0gbnVsbCAmJiBjb25maWdVbml0ICE9IG51bGwpIHtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzI1MzggLSBUeXBlICd1bmRlZmluZWQnIGNhbm5vdCBiZSB1c2VkIGFzIGFuIGluZGV4IHR5cGUuXG4gICAgICByZXN1bHRbdW5pdEtleV0gPSBjb25maWdVbml0O1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCB7fSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudFN0YXRlIiwiaXhFbGVtZW50cyIsIm1lcmdlQWN0aW9uU3RhdGUiLCJIVE1MX0VMRU1FTlQiLCJQTEFJTl9PQkpFQ1QiLCJFWFBSRVNTSU9OX0VMRU1FTlQiLCJDT05GSUdfWF9WQUxVRSIsIkNPTkZJR19ZX1ZBTFVFIiwiQ09ORklHX1pfVkFMVUUiLCJDT05GSUdfVkFMVUUiLCJDT05GSUdfWF9VTklUIiwiQ09ORklHX1lfVU5JVCIsIkNPTkZJR19aX1VOSVQiLCJDT05GSUdfVU5JVCIsIklYMkVuZ2luZUNvbnN0YW50cyIsIklYMl9TRVNTSU9OX1NUT1BQRUQiLCJJWDJfSU5TVEFOQ0VfQURERUQiLCJJWDJfRUxFTUVOVF9TVEFURV9DSEFOR0VEIiwiSVgyRW5naW5lQWN0aW9uVHlwZXMiLCJpbml0aWFsU3RhdGUiLCJyZWZTdGF0ZSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImVsZW1lbnRJZCIsImVsZW1lbnQiLCJyZWYiLCJvcmlnaW4iLCJhY3Rpb25JdGVtIiwicmVmVHlwZSIsInBheWxvYWQiLCJhY3Rpb25UeXBlSWQiLCJuZXdTdGF0ZSIsImdldEluIiwiY3VycmVudCIsInJlZklkIiwibWVyZ2VJbiIsImlkIiwiYWN0aW9uU3RhdGUiLCJ1bml0cyIsInBpY2tVbml0cyIsIm1lcmdlUGF0aCIsInZhbHVlVW5pdFBhaXJzIiwiY29uZmlnIiwicmVkdWNlIiwicmVzdWx0IiwicGFpciIsInZhbHVlS2V5IiwidW5pdEtleSIsImNvbmZpZ1ZhbHVlIiwiY29uZmlnVW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUE4R2dCQSxrQkFBa0I7ZUFBbEJBOztJQXhESEMsVUFBVTtlQUFWQTs7SUE2RUdDLGdCQUFnQjtlQUFoQkE7OztzQkFuSWE7aUNBSXRCO0FBRVAsTUFBTSxFQUNKQyxZQUFZLEVBQ1pDLFlBQVksRUFDWkMsa0JBQWtCLEVBQ2xCQyxjQUFjLEVBQ2RDLGNBQWMsRUFDZEMsY0FBYyxFQUNkQyxZQUFZLEVBQ1pDLGFBQWEsRUFDYkMsYUFBYSxFQUNiQyxhQUFhLEVBQ2JDLFdBQVcsRUFDWixHQUFHQyxtQ0FBa0I7QUFFdEIsTUFBTSxFQUFDQyxtQkFBbUIsRUFBRUMsa0JBQWtCLEVBQUVDLHlCQUF5QixFQUFDLEdBQ3hFQyxxQ0FBb0I7QUE4QnRCLE1BQU1DLGVBQW1DLENBQUM7QUFDMUMsTUFBTUMsV0FBVztBQUVWLE1BQU1uQixhQUFhLENBQ3hCb0IsUUFBb0NGLFlBQVksRUFDaERHLFNBQTJCLENBQUMsQ0FBQztJQUU3QixPQUFRQSxPQUFPQyxJQUFJO1FBQ2pCLEtB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

}),
3353: (function () {
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init(
{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68ee4e94ba6faaed832849b6|703e6ae3-d2c9-64d6-6b3f-a2e7155bcdff","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68ee4e94ba6faaed832849b6|703e6ae3-d2c9-64d6-6b3f-a2e7155bcdff","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1760605996202},"e-5":{"id":"e-5","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68ee4e94ba6faaed832849b6|be78f068-aad3-3358-462d-8ed65f7100e6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68ee4e94ba6faaed832849b6|be78f068-aad3-3358-462d-8ed65f7100e6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1760606389052},"e-7":{"id":"e-7","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68fa2f2916639f18001135f1|98ca72a1-52e8-e39d-2861-e15ef8a31bc0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68fa2f2916639f18001135f1|98ca72a1-52e8-e39d-2861-e15ef8a31bc0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1760606389052},"e-9":{"id":"e-9","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-10"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq_question","originalId":"68fa2f2916639f18001135f1|233ce368-1c48-e870-e704-8582a62d70cf","appliesTo":"CLASS"},"targets":[{"selector":".faq_question","originalId":"68fa2f2916639f18001135f1|233ce368-1c48-e870-e704-8582a62d70cf","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1762030192902},"e-10":{"id":"e-10","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-9"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq_question","originalId":"68fa2f2916639f18001135f1|233ce368-1c48-e870-e704-8582a62d70cf","appliesTo":"CLASS"},"targets":[{"selector":".faq_question","originalId":"68fa2f2916639f18001135f1|233ce368-1c48-e870-e704-8582a62d70cf","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1762030192902},"e-11":{"id":"e-11","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-12"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68fa2f2916639f18001135f1|41e3ff1d-793e-2f0b-d0a7-bc2a1311ac8e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68fa2f2916639f18001135f1|41e3ff1d-793e-2f0b-d0a7-bc2a1311ac8e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1762449105891}},"actionLists":{"a-4":{"id":"a-4","title":"CTA-tel_PV","actionItemGroups":[{"actionItems":[{"id":"a-4-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"68ee4e94ba6faaed832849b6|be78f068-aad3-3358-462d-8ed65f7100e6"},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1762173711699},"a-2":{"id":"a-2","title":"FAQ Open","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".faq_answer","selectorGuids":["88a5ac45-7700-d3db-b6de-51835cbfd59c"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-2-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".faq_answer","selectorGuids":["88a5ac45-7700-d3db-b6de-51835cbfd59c"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-2-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-plus-l","selectorGuids":["a9806a6b-7c82-b34e-297f-cf3b3ce7c81b"]},"heightValue":0,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-2-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-plus-wrap","selectorGuids":["faa47d63-daaa-7e3f-3e80-0e156cd64d8c"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1762030260177},"a-3":{"id":"a-3","title":"FAQ Close","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".faq_answer","selectorGuids":["88a5ac45-7700-d3db-b6de-51835cbfd59c"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-3-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".faq-plus-l","selectorGuids":["a9806a6b-7c82-b34e-297f-cf3b3ce7c81b"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-3-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutBack","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-plus-wrap","selectorGuids":["faa47d63-daaa-7e3f-3e80-0e156cd64d8c"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1762157523496}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}
);


}),
4953: (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
__webpack_require__(9461);__webpack_require__(7624);__webpack_require__(286);__webpack_require__(8334);__webpack_require__(2338);__webpack_require__(3695);__webpack_require__(322);__webpack_require__(1655);__webpack_require__(9858);__webpack_require__(9078);__webpack_require__(941);__webpack_require__(5134);__webpack_require__(7527);__webpack_require__(3353);

}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
id: moduleId,
loaded: false,
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Flag the module as loaded
module.loaded = true;
// Return the exports of the module
return module.exports;

}

// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

/************************************************************************/
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/esm_module_decorator
(() => {
__webpack_require__.hmd = (module) => {
  module = Object.create(module);
  if (!module.children) module.children = [];
  Object.defineProperty(module, 'exports', {
      enumerable: true,
      set: () => {
          throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
      }
  });
  return module;
};
})();
// webpack/runtime/global
(() => {
__webpack_require__.g = (() => {
	if (typeof globalThis === 'object') return globalThis;
	try {
		return this || new Function('return this')();
	} catch (e) {
		if (typeof window === 'object') return window;
	}
})();
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
// webpack/runtime/node_module_decorator
(() => {
__webpack_require__.nmd = (module) => {
  module.paths = [];
  if (!module.children) module.children = [];
  return module;
};
})();
// webpack/runtime/on_chunk_loaded
(() => {
var deferred = [];
__webpack_require__.O = (result, chunkIds, fn, priority) => {
	if (chunkIds) {
		priority = priority || 0;
		for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
			deferred[i] = deferred[i - 1];
		deferred[i] = [chunkIds, fn, priority];
		return;
	}
	var notFulfilled = Infinity;
	for (var i = 0; i < deferred.length; i++) {
		var [chunkIds, fn, priority] = deferred[i];
		var fulfilled = true;
		for (var j = 0; j < chunkIds.length; j++) {
			if (
				(priority & (1 === 0) || notFulfilled >= priority) &&
				Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))
			) {
				chunkIds.splice(j--, 1);
			} else {
				fulfilled = false;
				if (priority < notFulfilled) notFulfilled = priority;
			}
		}
		if (fulfilled) {
			deferred.splice(i--, 1);
			var r = fn();
			if (r !== undefined) result = r;
		}
	}
	return result;
};

})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = () => ("1.3.9")
})();
// webpack/runtime/jsonp_chunk_loading
(() => {

      // object to store loaded and loading chunks
      // undefined = chunk not loaded, null = chunk preloaded/prefetched
      // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
      var installedChunks = {"898": 0,};
      __webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
// install a JSONP callback for chunk loading
var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
	var [chunkIds, moreModules, runtime] = data;
	// add "moreModules" to the modules object,
	// then flag all "chunkIds" as loaded and fire callback
	var moduleId, chunkId, i = 0;
	if (chunkIds.some((id) => (installedChunks[id] !== 0))) {
		for (moduleId in moreModules) {
			if (__webpack_require__.o(moreModules, moduleId)) {
				__webpack_require__.m[moduleId] = moreModules[moduleId];
			}
		}
		if (runtime) var result = runtime(__webpack_require__);
	}
	if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
	for (; i < chunkIds.length; i++) {
		chunkId = chunkIds[i];
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId]
		) {
			installedChunks[chunkId][0]();
		}
		installedChunks[chunkId] = 0;
	}
	return __webpack_require__.O(result);
};

var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));

})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.3.9";

})();
/************************************************************************/
// startup
// Load entry module and return exports
// This entry module depends on other loaded chunks and execution need to be delayed
var __webpack_exports__ = __webpack_require__.O(undefined, ["87", "421", "729"], function() { return __webpack_require__(4953) });
__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})()
;