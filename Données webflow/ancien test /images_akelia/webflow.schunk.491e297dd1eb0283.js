
/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["729"], {
6524: (function (__unused_webpack_module, exports) {
var __webpack_unused_export__;
/**
 * Webflow: Forms (Hosted)
 */ 
__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return hostedSubmitWebflow;
    }
}));
function hostedSubmitWebflow(reset, loc, Webflow, collectEnterpriseTrackingCookies, preventDefault, findFields, alert, findFileUploads, disableBtn, siteId, afterSubmit, $, formUrl) {
    return function(data) {
        reset(data);
        var form = data.form;
        var payload = {
            name: form.attr('data-name') || form.attr('name') || 'Untitled Form',
            pageId: form.attr('data-wf-page-id') || '',
            elementId: form.attr('data-wf-element-id') || '',
            domain: $('html').attr('data-wf-domain') || null,
            collectionId: $('html').attr('data-wf-collection') || null,
            itemSlug: $('html').attr('data-wf-item-slug') || null,
            source: loc.href,
            test: Webflow.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(form.html()),
            trackingCookies: collectEnterpriseTrackingCookies()
        };
        const wfFlow = form.attr('data-wf-flow');
        if (wfFlow) {
            payload.wfFlow = wfFlow;
        }
        // only send localeId if it's a localized form
        const localeId = form.attr('data-wf-locale-id');
        if (localeId) {
            payload.localeId = localeId;
        }
        preventDefault(data);
        // Find & populate all fields
        var status = findFields(form, payload.fields);
        if (status) {
            return alert(status);
        }
        payload.fileUploads = findFileUploads(form);
        // Disable submit button
        disableBtn(data);
        // Read site ID
        // NOTE: If this site is exported, the HTML tag must retain the data-wf-site attribute for forms to work
        if (!siteId) {
            afterSubmit(data);
            return;
        }
        $.ajax({
            url: formUrl,
            type: 'POST',
            data: payload,
            dataType: 'json',
            crossDomain: true
        }).done(function(response) {
            if (response && response.code === 200) {
                data.success = true;
            }
            afterSubmit(data);
        }).fail(function() {
            afterSubmit(data);
        });
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3NoYXJlZC9yZW5kZXIvcGx1Z2lucy9Gb3JtL3dlYmZsb3ctZm9ybXMtaG9zdGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2ViZmxvdzogRm9ybXMgKEhvc3RlZClcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob3N0ZWRTdWJtaXRXZWJmbG93KFxuICByZXNldCxcbiAgbG9jLFxuICBXZWJmbG93LFxuICBjb2xsZWN0RW50ZXJwcmlzZVRyYWNraW5nQ29va2llcyxcbiAgcHJldmVudERlZmF1bHQsXG4gIGZpbmRGaWVsZHMsXG4gIGFsZXJ0LFxuICBmaW5kRmlsZVVwbG9hZHMsXG4gIGRpc2FibGVCdG4sXG4gIHNpdGVJZCxcbiAgYWZ0ZXJTdWJtaXQsXG4gICQsXG4gIGZvcm1Vcmxcbikge1xuICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICByZXNldChkYXRhKTtcblxuICAgIHZhciBmb3JtID0gZGF0YS5mb3JtO1xuICAgIHZhciBwYXlsb2FkID0ge1xuICAgICAgbmFtZTogZm9ybS5hdHRyKCdkYXRhLW5hbWUnKSB8fCBmb3JtLmF0dHIoJ25hbWUnKSB8fCAnVW50aXRsZWQgRm9ybScsXG4gICAgICBwYWdlSWQ6IGZvcm0uYXR0cignZGF0YS13Zi1wYWdlLWlkJykgfHwgJycsXG4gICAgICBlbGVtZW50SWQ6IGZvcm0uYXR0cignZGF0YS13Zi1lbGVtZW50LWlkJykgfHwgJycsXG4gICAgICBkb21haW46ICQoJ2h0bWwnKS5hdHRyKCdkYXRhLXdmLWRvbWFpbicpIHx8IG51bGwsXG4gICAgICBjb2xsZWN0aW9uSWQ6ICQoJ2h0bWwnKS5hdHRyKCdkYXRhLXdmLWNvbGxlY3Rpb24nKSB8fCBudWxsLFxuICAgICAgaXRlbVNsdWc6ICQoJ2h0bWwnKS5hdHRyKCdkYXRhLXdmLWl0ZW0tc2x1ZycpIHx8IG51bGwsXG4gICAgICBzb3VyY2U6IGxvYy5ocmVmLFxuICAgICAgdGVzdDogV2ViZmxvdy5lbnYoKSxcbiAgICAgIGZpZWxkczoge30sXG4gICAgICBmaWxlVXBsb2Fkczoge30sXG4gICAgICBkb2xwaGluOiAvcGFzc1tcXHMtX10/KHdvcmR8Y29kZSl8c2VjcmV0fGxvZ2lufGNyZWRlbnRpYWxzL2kudGVzdChcbiAgICAgICAgZm9ybS5odG1sKClcbiAgICAgICksXG4gICAgICB0cmFja2luZ0Nvb2tpZXM6IGNvbGxlY3RFbnRlcnByaXNlVHJhY2tpbmdDb29raWVzKCksXG4gICAgfTtcblxuICAgIGNvbnN0IHdmRmxvdyA9IGZvcm0uYXR0cignZGF0YS13Zi1mbG93Jyk7XG4gICAgaWYgKHdmRmxvdykge1xuICAgICAgcGF5bG9hZC53ZkZsb3cgPSB3ZkZsb3c7XG4gICAgfVxuXG4gICAgLy8gb25seSBzZW5kIGxvY2FsZUlkIGlmIGl0J3MgYSBsb2NhbGl6ZWQgZm9ybVxuICAgIGNvbnN0IGxvY2FsZUlkID0gZm9ybS5hdHRyKCdkYXRhLXdmLWxvY2FsZS1pZCcpO1xuICAgIGlmIChsb2NhbGVJZCkge1xuICAgICAgcGF5bG9hZC5sb2NhbGVJZCA9IGxvY2FsZUlkO1xuICAgIH1cblxuICAgIHByZXZlbnREZWZhdWx0KGRhdGEpO1xuXG4gICAgLy8gRmluZCAmIHBvcHVsYXRlIGFsbCBmaWVsZHNcbiAgICB2YXIgc3RhdHVzID0gZmluZEZpZWxkcyhmb3JtLCBwYXlsb2FkLmZpZWxkcyk7XG4gICAgaWYgKHN0YXR1cykge1xuICAgICAgcmV0dXJuIGFsZXJ0KHN0YXR1cyk7XG4gICAgfVxuXG4gICAgcGF5bG9hZC5maWxlVXBsb2FkcyA9IGZpbmRGaWxlVXBsb2Fkcyhmb3JtKTtcblxuICAgIC8vIERpc2FibGUgc3VibWl0IGJ1dHRvblxuICAgIGRpc2FibGVCdG4oZGF0YSk7XG5cbiAgICAvLyBSZWFkIHNpdGUgSURcbiAgICAvLyBOT1RFOiBJZiB0aGlzIHNpdGUgaXMgZXhwb3J0ZWQsIHRoZSBIVE1MIHRhZyBtdXN0IHJldGFpbiB0aGUgZGF0YS13Zi1zaXRlIGF0dHJpYnV0ZSBmb3IgZm9ybXMgdG8gd29ya1xuICAgIGlmICghc2l0ZUlkKSB7XG4gICAgICBhZnRlclN1Ym1pdChkYXRhKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBmb3JtVXJsLFxuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgZGF0YTogcGF5bG9hZCxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICB9KVxuICAgICAgLmRvbmUoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICBkYXRhLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgYWZ0ZXJTdWJtaXQoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmZhaWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBhZnRlclN1Ym1pdChkYXRhKTtcbiAgICAgIH0pO1xuICB9O1xufVxuIl0sIm5hbWVzIjpbImhvc3RlZFN1Ym1pdFdlYmZsb3ciLCJyZXNldCIsImxvYyIsIldlYmZsb3ciLCJjb2xsZWN0RW50ZXJwcmlzZVRyYWNraW5nQ29va2llcyIsInByZXZlbnREZWZhdWx0IiwiZmluZEZpZWxkcyIsImFsZXJ0IiwiZmluZEZpbGVVcGxvYWRzIiwiZGlzYWJsZUJ0biIsInNpdGVJZCIsImFmdGVyU3VibWl0IiwiJCIsImZvcm1VcmwiLCJkYXRhIiwiZm9ybSIsInBheWxvYWQiLCJuYW1lIiwiYXR0ciIsInBhZ2VJZCIsImVsZW1lbnRJZCIsImRvbWFpbiIsImNvbGxlY3Rpb25JZCIsIml0ZW1TbHVnIiwic291cmNlIiwiaHJlZiIsInRlc3QiLCJlbnYiLCJmaWVsZHMiLCJmaWxlVXBsb2FkcyIsImRvbHBoaW4iLCJodG1sIiwidHJhY2tpbmdDb29raWVzIiwid2ZGbG93IiwibG9jYWxlSWQiLCJzdGF0dXMiLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGFUeXBlIiwiY3Jvc3NEb21haW4iLCJkb25lIiwicmVzcG9uc2UiLCJjb2RlIiwic3VjY2VzcyIsImZhaWwiXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDOzs7OytCQUVEOzs7ZUFBd0JBOzs7QUFBVCxTQUFTQSxvQkFDdEJDLEtBQUssRUFDTEMsR0FBRyxFQUNIQyxPQUFPLEVBQ1BDLGdDQUFnQyxFQUNoQ0MsY0FBYyxFQUNkQyxVQUFVLEVBQ1ZDLEtBQUssRUFDTEMsZUFBZSxFQUNmQyxVQUFVLEVBQ1ZDLE1BQU0sRUFDTkMsV0FBVyxFQUNYQyxDQUFDLEVBQ0RDLE9BQU87SUFFUCxPQUFPLFNBQVVDLElBQUk7UUFDbkJiLE1BQU1hO1FBRU4sSUFBSUMsT0FBT0QsS0FBS0MsSUFBSTtRQUNwQixJQUFJQyxVQUFVO1lBQ1pDLE1BQU1GLEtBQUtHLElBQUksQ0FBQyxnQkFBZ0JILEtBQUtHLElBQUksQ0FBQyxXQUFXO1lBQ3JEQyxRQUFRSixLQUFLRyxJQUFJLENBQUMsc0JBQXNCO1lBQ3hDRSxXQUFXTCxLQUFLRyxJQUFJLENBQUMseUJBQXlCO1lBQzlDRyxRQUFRVCxFQUFFLFFBQVFNLElBQUksQ0FBQyxxQkFBcUI7WUFDNUNJLGNBQWNWLEVBQUUsUUFBUU0sSUFBSSxDQUFDLHlCQUF5QjtZQUN0REssVUFBVVgsRUFBRSxRQUFRTSxJQUFJLENBQUMsd0JBQXdCO1lBQ2pETSxRQUFRdEIsSUFBSXVCLElBQUk7WUFDaEJDLE1BQU12QixRQUFRd0IsR0FBRztZQUNqQkMsUUFBUSxDQUFDO1lBQ1RDLGFBQWEsQ0FBQztZQUNkQyxTQUFTLG1EQUFtREosSUFBSSxDQUM5RFgsS0FBS2dCLElBQUk7WUFFWEMsaUJBQWlCNUI7UUFDbkI7UUFFQSxNQUFNNkIsU0FBU2xCLEtBQUtHLElBQUksQ0FBQztRQUN6QixJQUFJZSxRQUFRO1lBQ1ZqQixRQUFRaUIsTUFBTSxHQUFHQTtRQUNuQjtRQUVBLDhDQUE4QztRQUM5QyxNQUFNQyxXQUFXbkIsS0FBS0csSUFBSSxDQUFDO1FBQzNCLElBQUlnQixVQUFVO1lBQ1psQixRQUFRa0IsUUFBUSxHQUFHQTtRQUNyQjtRQUVBN0IsZUFBZVM7UUFFZiw2QkFBNkI7UUFDN0IsSUFBSXFCLFNBQVM3QixXQUFXUyxNQUFNQyxRQUFRWSxNQUFNO1FBQzVDLElBQUlPLFFBQVE7WUFDVixPQUFPNUIsTUFBTTRCO1FBQ2Y7UUFFQW5CLFFBQVFhLFdBQVcsR0FBR3JCLGdCQUFnQk87UUFFdEMsd0JBQXdCO1FBQ3hCTixXQUFXSztRQUVYLGVBQWU7UUFDZix3R0FBd0c7UUFDeEcsSUFBSSxDQUFDSixRQUFRO1lBQ1hDLFlBQVlHO1lBQ1o7UUFDRjtRQUVBRixFQUFFd0IsSUFBSSxDQUFDO1lBQ0xDLEtBQUt4QjtZQUNMeUIsTUFBTTtZQUNOeEIsTUFBTUU7WUFDTnVCLFVBQVU7WUFDVkMsYUFBYTtRQUNmLEdBQ0dDLElBQUksQ0FBQyxTQUFVQyxRQUFRO1lBQ3RCLElBQUlBLFlBQVlBLFNBQVNDLElBQUksS0FBSyxLQUFLO2dCQUNyQzdCLEtBQUs4QixPQUFPLEdBQUc7WUFDakI7WUFFQWpDLFlBQVlHO1FBQ2QsR0FDQytCLElBQUksQ0FBQztZQUNKbEMsWUFBWUc7UUFDZDtJQUNKO0FBQ0YifQ==

}),
7527: (function (module, __unused_webpack_exports, __webpack_require__) {
/* globals
  window,
  document,
  IntersectionObserver,
  WEBFLOW_FORM_API_HOST,
  WEBFLOW_FORM_OLDIE_HOST,
  WEBFLOW_EXPORT_MODE,
  turnstile
*/ /**
 * Webflow: Forms
 */ 
var Webflow = __webpack_require__(3949);
const renderTurnstileCaptcha = (siteKey, formElement, cb, errorCallback // () => void | boolean
)=>{
    const captchaContainer = document.createElement('div');
    formElement.appendChild(captchaContainer);
    // Render the captcha
    turnstile.render(captchaContainer, {
        sitekey: siteKey,
        callback: function(token) {
            cb(token);
        },
        'error-callback': function() {
            errorCallback();
        }
    });
};
Webflow.define('forms', module.exports = function($, _) {
    const TURNSTILE_LOADED_EVENT = 'TURNSTILE_LOADED';
    var api = {};
    var $doc = $(document);
    var $forms;
    var loc = window.location;
    var retro = window.XDomainRequest && !window.atob;
    var namespace = '.w-form';
    var siteId;
    var emailField = /e(-)?mail/i;
    var emailValue = /^\S+@\S+$/;
    var alert = window.alert;
    var inApp = Webflow.env();
    var listening;
    var formUrl;
    var signFileUrl;
    const turnstileSiteKey = $doc.find('[data-turnstile-sitekey]').data('turnstile-sitekey');
    let turnstileScript;
    // MailChimp domains: list-manage.com + mirrors
    var chimpRegex = /list-manage[1-9]?.com/i;
    var disconnected = _.debounce(function() {
        console.warn('Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.');
    }, 100);
    api.ready = api.design = api.preview = function() {
        // start by loading the turnstile script (if the user has the feature enabled)
        loadTurnstileScript();
        // Init forms
        init();
        // Wire document events on published and in preview workflow only once
        if ((!inApp || Webflow.env('preview')) && !listening) {
            addListeners();
        }
    };
    function init() {
        siteId = $('html').attr('data-wf-site');
        formUrl = "https://webflow.com" + '/api/v1/form/' + siteId;
        // Work around same-protocol IE XDR limitation - without this IE9 and below forms won't submit
        if (retro && formUrl.indexOf("https://webflow.com") >= 0) {
            formUrl = formUrl.replace("https://webflow.com", "https://formdata.webflow.com");
        }
        signFileUrl = `${formUrl}/signFile`;
        $forms = $(namespace + ' form');
        if (!$forms.length) {
            return;
        }
        $forms.each(build);
    }
    function loadTurnstileScript() {
        if (turnstileSiteKey) {
            const doLoad = ()=>{
                // Create script tag for turnstile
                turnstileScript = document.createElement('script');
                turnstileScript.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
                document.head.appendChild(turnstileScript);
                turnstileScript.onload = ()=>{
                    // after the script loads, emit an event that we listen to below.
                    // this enables us to listen for the event on each form on the page and render the turnstile token for each of them.
                    $doc.trigger(TURNSTILE_LOADED_EVENT);
                };
            };
            // Defer loading until the browser is idle to avoid blocking page-load
            // animations. Safari is particularly sensitive to main-thread work from
            // the Turnstile script executing during animation frames.
            if (typeof requestIdleCallback === 'function') {
                window.requestIdleCallback(doLoad);
            } else {
                // Fallback for Safari < 16 which lacks requestIdleCallback support.
                setTimeout(doLoad, 200);
            }
        }
    }
    function build(i, el) {
        // Store form state using namespace
        var $el = $(el);
        var data = $.data(el, namespace);
        if (!data) {
            data = $.data(el, namespace, {
                form: $el
            });
        } // data.form
        reset(data);
        var wrap = $el.closest('div.w-form');
        data.done = wrap.find('> .w-form-done');
        data.fail = wrap.find('> .w-form-fail');
        data.fileUploads = wrap.find('.w-file-upload');
        data.fileUploads.each(function(j) {
            initFileUpload(j, data);
        });
        if (turnstileSiteKey && !$el.is('[data-wf-no-turnstile]')) {
            // Once all custom fonts are loaded, set the button state to indicate Turnstile is loading
            setButtonToTurnstileLoading(data);
            // Add loading state to the form wrapper
            setFormLoadingState($el, true);
            // this is probably overkill, but if the turnstile script has already loaded and we reached this point then
            // we'll fire the callback below immediately. Otherwise we'll wait for the TURNSTILE_LOADED_EVENT to fire.
            $doc.on(typeof turnstile !== 'undefined' ? 'ready' : TURNSTILE_LOADED_EVENT, function() {
                function doRender() {
                    // render the hidden input with the turnstile token for each form on the page
                    renderTurnstileCaptcha(turnstileSiteKey, el, (token)=>{
                        // The turnstile token gets automatically attached to the form as a hidden input field & sent on submission to the server.
                        // Here we are using this `data.turnstileToken` value to decide whether or not the submit button should be enabled.
                        data.turnstileToken = token;
                        // enable the submit button and restore text once turnstile is done rendering
                        reset(data);
                        setFormLoadingState($el, false);
                    }, ()=>{
                        // If Turnstile fails, keep the button disabled but restore original state (tooltip, etc.)
                        reset(data);
                        // Ensure button is definitely disabled if reset didn't handle it (e.g., if turnstileSiteKey logic changes)
                        if (data.btn) {
                            data.btn.prop('disabled', true);
                        }
                        setFormLoadingState($el, false);
                    });
                }
                // Defer widget render until the form is near the viewport. Calling
                // turnstile.render() for every off-screen form simultaneously blocks
                // Safari's main thread and causes multi-second below-the-fold delays
                // on iOS. Forms already in (or near) the viewport render immediately.
                if (typeof IntersectionObserver !== 'undefined') {
                    var observer = new IntersectionObserver(function(entries) {
                        if (entries[0].isIntersecting) {
                            observer.disconnect();
                            doRender();
                        }
                    }, {
                        rootMargin: '200px'
                    });
                    observer.observe(el);
                } else {
                    doRender();
                }
            });
        }
        // Accessibility fixes
        var formName = data.form.attr('aria-label') || data.form.attr('data-name') || 'Form';
        if (!data.done.attr('aria-label')) {
            data.form.attr('aria-label', formName);
        }
        data.done.attr('tabindex', '-1');
        data.done.attr('role', 'region');
        if (!data.done.attr('aria-label')) {
            data.done.attr('aria-label', formName + ' success');
        }
        data.fail.attr('tabindex', '-1');
        data.fail.attr('role', 'region');
        if (!data.fail.attr('aria-label')) {
            data.fail.attr('aria-label', formName + ' failure');
        }
        var action = data.action = $el.attr('action');
        data.handler = null;
        data.redirect = $el.attr('data-redirect');
        // MailChimp form
        if (chimpRegex.test(action)) {
            data.handler = submitMailChimp;
            return;
        }
        // Custom form action
        if (action) {
            return;
        }
        // Webflow forms for hosting accounts
        if (siteId) {
            data.handler =  false ? 0 : (()=>{
                const hostedSubmitHandler = (__webpack_require__(6524)/* ["default"] */["default"]);
                return hostedSubmitHandler(reset, loc, Webflow, collectEnterpriseTrackingCookies, preventDefault, findFields, alert, findFileUploads, disableBtn, siteId, afterSubmit, $, formUrl);
            })();
            return;
        }
        // Alert for disconnected Webflow forms
        disconnected();
    }
    function addListeners() {
        listening = true;
        $doc.on('submit', namespace + ' form', function(evt) {
            var data = $.data(this, namespace);
            if (data.handler) {
                data.evt = evt;
                data.handler(data);
            }
        });
        // handle checked ui for custom checkbox and radio button
        const CHECKBOX_CLASS_NAME = '.w-checkbox-input';
        const RADIO_INPUT_CLASS_NAME = '.w-radio-input';
        const CHECKED_CLASS = 'w--redirected-checked';
        const FOCUSED_CLASS = 'w--redirected-focus';
        const FOCUSED_VISIBLE_CLASS = 'w--redirected-focus-visible';
        const focusVisibleSelectors = ':focus-visible, [data-wf-focus-visible]';
        const CUSTOM_CONTROLS = [
            [
                'checkbox',
                CHECKBOX_CLASS_NAME
            ],
            [
                'radio',
                RADIO_INPUT_CLASS_NAME
            ]
        ];
        $doc.on('change', namespace + ` form input[type="checkbox"]:not(` + CHECKBOX_CLASS_NAME + ')', (evt)=>{
            $(evt.target).siblings(CHECKBOX_CLASS_NAME).toggleClass(CHECKED_CLASS);
        });
        $doc.on('change', namespace + ` form input[type="radio"]`, (evt)=>{
            $(`input[name="${evt.target.name}"]:not(${CHECKBOX_CLASS_NAME})`).map((i, el)=>$(el).siblings(RADIO_INPUT_CLASS_NAME).removeClass(CHECKED_CLASS));
            const $target = $(evt.target);
            if (!$target.hasClass('w-radio-input')) {
                $target.siblings(RADIO_INPUT_CLASS_NAME).addClass(CHECKED_CLASS);
            }
        });
        CUSTOM_CONTROLS.forEach(([controlType, customControlClassName])=>{
            $doc.on('focus', namespace + ` form input[type="${controlType}"]:not(` + customControlClassName + ')', (evt)=>{
                $(evt.target).siblings(customControlClassName).addClass(FOCUSED_CLASS);
                $(evt.target).filter(focusVisibleSelectors).siblings(customControlClassName).addClass(FOCUSED_VISIBLE_CLASS);
            });
            $doc.on('blur', namespace + ` form input[type="${controlType}"]:not(` + customControlClassName + ')', (evt)=>{
                $(evt.target).siblings(customControlClassName).removeClass(`${FOCUSED_CLASS} ${FOCUSED_VISIBLE_CLASS}`);
            });
        });
    }
    // Reset data common to all submit handlers
    function reset(data) {
        var btn = data.btn = data.form.find(':input[type="submit"]');
        data.wait = data.btn.attr('data-wait') || null;
        data.success = false;
        // Determine if the button should be disabled
        const isDisabled = Boolean(turnstileSiteKey && !data.turnstileToken);
        btn.prop('disabled', isDisabled);
        btn.removeClass('w-form-loading');
        data.label && btn.val(data.label);
    }
    // Disable submit button during actual submission
    function disableBtn(data) {
        var btn = data.btn;
        var wait = data.wait; // Use the value from data-wait attribute
        btn.prop('disabled', true);
        // Show wait text and store previous label
        if (wait) {
            data.label = btn.val(); // Store the current label before overwriting
            btn.val(wait);
        }
    }
    // Set button state while Turnstile script is loading
    function setButtonToTurnstileLoading(data) {
        const btn = data.btn || data.form.find(':input[type="submit"]');
        if (!data.btn) data.btn = btn;
        btn.prop('disabled', true);
        btn.addClass('w-form-loading');
    }
    // Add/remove loading class from the form wrapper
    function setFormLoadingState($formEl, isLoading) {
        const $wrapper = $formEl.closest('.w-form');
        if (isLoading) {
            $wrapper.addClass('w-form-loading');
        } else {
            $wrapper.removeClass('w-form-loading');
        }
    }
    // Find form fields, validate, and set value pairs
    function findFields(form, result) {
        var status = null;
        result = result || {};
        // The ":input" selector is a jQuery shortcut to select all inputs, selects, textareas
        form.find(':input:not([type="submit"]):not([type="file"]):not([type="button"])').each(function(i, el) {
            var field = $(el);
            var type = field.attr('type');
            var name = field.attr('data-name') || field.attr('name') || 'Field ' + (i + 1);
            // Encoding the field name will prevent fields that have brackets
            // in their name from being parsed by `bodyParser.urlencoded` as
            // objects which would have unintended consequences like not saving
            // the content of the field.
            // https://webflow.atlassian.net/browse/CMSAUTH-2495
            name = encodeURIComponent(name);
            var value = field.val();
            if (type === 'checkbox') {
                value = field.is(':checked');
            } else if (type === 'radio') {
                // Radio group value already processed
                if (result[name] === null || typeof result[name] === 'string') {
                    return;
                }
                value = form.find('input[name="' + field.attr('name') + '"]:checked').val() || null;
            }
            if (typeof value === 'string') {
                value = $.trim(value);
            }
            result[name] = value;
            status = status || getStatus(field, type, name, value);
        });
        return status;
    }
    function findFileUploads(form) {
        var result = {};
        form.find(':input[type="file"]').each(function(i, el) {
            var field = $(el);
            var name = field.attr('data-name') || field.attr('name') || 'File ' + (i + 1);
            var value = field.attr('data-value');
            if (typeof value === 'string') {
                value = $.trim(value);
            }
            result[name] = value;
        });
        return result;
    }
    const trackingCookieNameMap = {
        _mkto_trk: 'marketo'
    };
    function collectEnterpriseTrackingCookies() {
        const cookies = document.cookie.split('; ').reduce(function(acc, cookie) {
            const splitCookie = cookie.split('=');
            const name = splitCookie[0];
            if (name in trackingCookieNameMap) {
                const mappedName = trackingCookieNameMap[name];
                const value = splitCookie.slice(1).join('=');
                acc[mappedName] = value;
            }
            return acc;
        }, {});
        return cookies;
    }
    function getStatus(field, type, name, value) {
        var status = null;
        if (type === 'password') {
            status = 'Passwords cannot be submitted.';
        } else if (field.attr('required')) {
            if (!value) {
                status = 'Please fill out the required field: ' + name;
            } else if (emailField.test(field.attr('type'))) {
                if (!emailValue.test(value)) {
                    status = 'Please enter a valid email address for: ' + name;
                }
            }
        } else if (name === 'g-recaptcha-response' && !value) {
            status = "Please confirm you're not a robot.";
        }
        return status;
    }
    function exportedSubmitWebflow(data) {
        preventDefault(data);
        afterSubmit(data);
    }
    // Submit form to MailChimp
    function submitMailChimp(data) {
        reset(data);
        var form = data.form;
        var payload = {};
        // Skip Ajax submission if http/s mismatch, fallback to POST instead
        if (/^https/.test(loc.href) && !/^https/.test(data.action)) {
            form.attr('method', 'post');
            return;
        }
        preventDefault(data);
        // Find & populate all fields
        var status = findFields(form, payload);
        if (status) {
            return alert(status);
        }
        // Disable submit button
        disableBtn(data);
        // Use special format for MailChimp params
        var fullName;
        _.each(payload, function(value, key) {
            if (emailField.test(key)) {
                payload.EMAIL = value;
            }
            if (/^((full[ _-]?)?name)$/i.test(key)) {
                fullName = value;
            }
            if (/^(first[ _-]?name)$/i.test(key)) {
                payload.FNAME = value;
            }
            if (/^(last[ _-]?name)$/i.test(key)) {
                payload.LNAME = value;
            }
        });
        if (fullName && !payload.FNAME) {
            fullName = fullName.split(' ');
            payload.FNAME = fullName[0];
            payload.LNAME = payload.LNAME || fullName[1];
        }
        // Use the (undocumented) MailChimp jsonp api
        var url = data.action.replace('/post?', '/post-json?') + '&c=?';
        // Add special param to prevent bot signups
        var userId = url.indexOf('u=') + 2;
        userId = url.substring(userId, url.indexOf('&', userId));
        var listId = url.indexOf('id=') + 3;
        listId = url.substring(listId, url.indexOf('&', listId));
        payload['b_' + userId + '_' + listId] = '';
        $.ajax({
            url,
            data: payload,
            dataType: 'jsonp'
        }).done(function(resp) {
            data.success = resp.result === 'success' || /already/.test(resp.msg);
            if (!data.success) {
                console.info('MailChimp error: ' + resp.msg);
            }
            afterSubmit(data);
        }).fail(function() {
            afterSubmit(data);
        });
    }
    // Common callback which runs after all Ajax submissions
    function afterSubmit(data) {
        var form = data.form;
        var redirect = data.redirect;
        var success = data.success;
        // Redirect to a success url if defined
        if (success && redirect) {
            Webflow.location(redirect);
            return;
        }
        // Show or hide status divs
        data.done.toggle(success);
        data.fail.toggle(!success);
        if (success) {
            data.done.focus();
        } else {
            data.fail.focus();
        }
        // Hide form on success
        form.toggle(!success);
        // Reset data and enable submit button
        reset(data);
    }
    function preventDefault(data) {
        data.evt && data.evt.preventDefault();
        data.evt = null;
    }
    function initFileUpload(i, form) {
        if (!form.fileUploads || !form.fileUploads[i]) {
            return;
        }
        var file;
        var $el = $(form.fileUploads[i]);
        var $defaultWrap = $el.find('> .w-file-upload-default');
        var $uploadingWrap = $el.find('> .w-file-upload-uploading');
        var $successWrap = $el.find('> .w-file-upload-success');
        var $errorWrap = $el.find('> .w-file-upload-error');
        var $input = $defaultWrap.find('.w-file-upload-input');
        var $label = $defaultWrap.find('.w-file-upload-label');
        var $labelChildren = $label.children();
        var $errorMsgEl = $errorWrap.find('.w-file-upload-error-msg');
        var $fileEl = $successWrap.find('.w-file-upload-file');
        var $removeEl = $successWrap.find('.w-file-remove-link');
        var $fileNameEl = $fileEl.find('.w-file-upload-file-name');
        var sizeErrMsg = $errorMsgEl.attr('data-w-size-error');
        var typeErrMsg = $errorMsgEl.attr('data-w-type-error');
        var genericErrMsg = $errorMsgEl.attr('data-w-generic-error');
        // Accessibility fixes
        // The file upload Input is not stylable by the designer, so we are
        // going to pretend the Label is the input. ¯\_(ツ)_/¯
        if (!inApp) {
            $label.on('click keydown', function(e) {
                if (e.type === 'keydown' && e.which !== 13 && e.which !== 32) {
                    return;
                }
                e.preventDefault();
                $input.click();
            });
        }
        // Both of these are added through CSS
        $label.find('.w-icon-file-upload-icon').attr('aria-hidden', 'true');
        $removeEl.find('.w-icon-file-upload-remove').attr('aria-hidden', 'true');
        if (!inApp) {
            $removeEl.on('click keydown', function(e) {
                if (e.type === 'keydown') {
                    if (e.which !== 13 && e.which !== 32) {
                        return;
                    }
                    e.preventDefault();
                }
                $input.removeAttr('data-value');
                $input.val('');
                $fileNameEl.html('');
                $defaultWrap.toggle(true);
                $successWrap.toggle(false);
                $label.focus();
            });
            $input.on('change', function(e) {
                file = e.target && e.target.files && e.target.files[0];
                if (!file) {
                    return;
                }
                // Show uploading
                $defaultWrap.toggle(false);
                $errorWrap.toggle(false);
                $uploadingWrap.toggle(true);
                $uploadingWrap.focus();
                // Set filename
                $fileNameEl.text(file.name);
                // Disable submit button
                if (!isUploading()) {
                    disableBtn(form);
                }
                form.fileUploads[i].uploading = true;
                signFile(file, afterSign);
            });
            // Setting input width 1px and height equal label
            // This is so the browser required error will show up
            var height = $label.outerHeight();
            $input.height(height);
            $input.width(1);
        } else {
            $input.on('click', function(e) {
                e.preventDefault();
            });
            $label.on('click', function(e) {
                e.preventDefault();
            });
            $labelChildren.on('click', function(e) {
                e.preventDefault();
            });
        }
        function parseError(err) {
            var errorMsg = err.responseJSON && err.responseJSON.msg;
            var userError = genericErrMsg;
            if (typeof errorMsg === 'string' && errorMsg.indexOf('InvalidFileTypeError') === 0) {
                userError = typeErrMsg;
            } else if (typeof errorMsg === 'string' && errorMsg.indexOf('MaxFileSizeError') === 0) {
                userError = sizeErrMsg;
            }
            $errorMsgEl.text(userError);
            $input.removeAttr('data-value');
            $input.val('');
            $uploadingWrap.toggle(false);
            $defaultWrap.toggle(true);
            $errorWrap.toggle(true);
            $errorWrap.focus();
            form.fileUploads[i].uploading = false;
            if (!isUploading()) {
                reset(form);
            }
        }
        function afterSign(err, data) {
            if (err) {
                return parseError(err);
            }
            var fileName = data.fileName;
            var postData = data.postData;
            var fileId = data.fileId;
            var s3Url = data.s3Url;
            $input.attr('data-value', fileId);
            uploadS3(s3Url, postData, file, fileName, afterUpload);
        }
        function afterUpload(err) {
            if (err) {
                return parseError(err);
            }
            // Show success
            $uploadingWrap.toggle(false);
            $successWrap.css('display', 'inline-block');
            $successWrap.focus();
            form.fileUploads[i].uploading = false;
            if (!isUploading()) {
                reset(form);
            }
        }
        function isUploading() {
            var uploads = form.fileUploads && form.fileUploads.toArray() || [];
            return uploads.some(function(value) {
                return value.uploading;
            });
        }
    }
    function signFile(file, cb) {
        var payload = new URLSearchParams({
            name: file.name,
            size: file.size
        });
        $.ajax({
            type: 'GET',
            url: `${signFileUrl}?${payload}`,
            crossDomain: true
        }).done(function(data) {
            cb(null, data);
        }).fail(function(err) {
            cb(err);
        });
    }
    function uploadS3(url, data, file, fileName, cb) {
        var formData = new FormData();
        for(var k in data){
            formData.append(k, data[k]);
        }
        formData.append('file', file, fileName);
        $.ajax({
            type: 'POST',
            url,
            data: formData,
            processData: false,
            contentType: false
        }).done(function() {
            cb(null);
        }).fail(function(err) {
            cb(err);
        });
    }
    // Export module
    return api;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3NoYXJlZC9yZW5kZXIvcGx1Z2lucy9Gb3JtL3dlYmZsb3ctZm9ybXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsc1xuICB3aW5kb3csXG4gIGRvY3VtZW50LFxuICBJbnRlcnNlY3Rpb25PYnNlcnZlcixcbiAgV0VCRkxPV19GT1JNX0FQSV9IT1NULFxuICBXRUJGTE9XX0ZPUk1fT0xESUVfSE9TVCxcbiAgV0VCRkxPV19FWFBPUlRfTU9ERSxcbiAgdHVybnN0aWxlXG4qL1xuXG4vKipcbiAqIFdlYmZsb3c6IEZvcm1zXG4gKi9cblxudmFyIFdlYmZsb3cgPSByZXF1aXJlKCcuLi9CYXNlU2l0ZU1vZHVsZXMvd2ViZmxvdy1saWInKTtcblxuY29uc3QgcmVuZGVyVHVybnN0aWxlQ2FwdGNoYSA9IChcbiAgc2l0ZUtleSwgLy8gc3RyaW5nXG4gIGZvcm1FbGVtZW50LCAvLyBIVE1MRm9ybUVsZW1lbnRcbiAgY2IsIC8vICh0b2tlbjogc3RyaW5nKSA9PiB2b2lkXG4gIGVycm9yQ2FsbGJhY2sgLy8gKCkgPT4gdm9pZCB8IGJvb2xlYW5cbikgPT4ge1xuICBjb25zdCBjYXB0Y2hhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1FbGVtZW50LmFwcGVuZENoaWxkKGNhcHRjaGFDb250YWluZXIpO1xuXG4gIC8vIFJlbmRlciB0aGUgY2FwdGNoYVxuICB0dXJuc3RpbGUucmVuZGVyKGNhcHRjaGFDb250YWluZXIsIHtcbiAgICBzaXRla2V5OiBzaXRlS2V5LFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgIGNiKHRva2VuKTtcbiAgICB9LFxuICAgICdlcnJvci1jYWxsYmFjayc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGVycm9yQ2FsbGJhY2soKTtcbiAgICB9LFxuICB9KTtcbn07XG5cbldlYmZsb3cuZGVmaW5lKFxuICAnZm9ybXMnLFxuICAobW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJCwgXykge1xuICAgIGNvbnN0IFRVUk5TVElMRV9MT0FERURfRVZFTlQgPSAnVFVSTlNUSUxFX0xPQURFRCc7XG4gICAgdmFyIGFwaSA9IHt9O1xuXG4gICAgdmFyICRkb2MgPSAkKGRvY3VtZW50KTtcbiAgICB2YXIgJGZvcm1zO1xuICAgIHZhciBsb2MgPSB3aW5kb3cubG9jYXRpb247XG4gICAgdmFyIHJldHJvID0gd2luZG93LlhEb21haW5SZXF1ZXN0ICYmICF3aW5kb3cuYXRvYjtcbiAgICB2YXIgbmFtZXNwYWNlID0gJy53LWZvcm0nO1xuICAgIHZhciBzaXRlSWQ7XG4gICAgdmFyIGVtYWlsRmllbGQgPSAvZSgtKT9tYWlsL2k7XG4gICAgdmFyIGVtYWlsVmFsdWUgPSAvXlxcUytAXFxTKyQvO1xuICAgIHZhciBhbGVydCA9IHdpbmRvdy5hbGVydDtcbiAgICB2YXIgaW5BcHAgPSBXZWJmbG93LmVudigpO1xuICAgIHZhciBsaXN0ZW5pbmc7XG5cbiAgICB2YXIgZm9ybVVybDtcbiAgICB2YXIgc2lnbkZpbGVVcmw7XG5cbiAgICBjb25zdCB0dXJuc3RpbGVTaXRlS2V5ID0gJGRvY1xuICAgICAgLmZpbmQoJ1tkYXRhLXR1cm5zdGlsZS1zaXRla2V5XScpXG4gICAgICAuZGF0YSgndHVybnN0aWxlLXNpdGVrZXknKTtcbiAgICBsZXQgdHVybnN0aWxlU2NyaXB0O1xuXG4gICAgLy8gTWFpbENoaW1wIGRvbWFpbnM6IGxpc3QtbWFuYWdlLmNvbSArIG1pcnJvcnNcbiAgICB2YXIgY2hpbXBSZWdleCA9IC9saXN0LW1hbmFnZVsxLTldPy5jb20vaTtcblxuICAgIHZhciBkaXNjb25uZWN0ZWQgPSBfLmRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ09vcHMhIFRoaXMgcGFnZSBoYXMgaW1wcm9wZXJseSBjb25maWd1cmVkIGZvcm1zLiBQbGVhc2UgY29udGFjdCB5b3VyIHdlYnNpdGUgYWRtaW5pc3RyYXRvciB0byBmaXggdGhpcyBpc3N1ZS4nXG4gICAgICApO1xuICAgIH0sIDEwMCk7XG5cbiAgICBhcGkucmVhZHkgPVxuICAgICAgYXBpLmRlc2lnbiA9XG4gICAgICBhcGkucHJldmlldyA9XG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBzdGFydCBieSBsb2FkaW5nIHRoZSB0dXJuc3RpbGUgc2NyaXB0IChpZiB0aGUgdXNlciBoYXMgdGhlIGZlYXR1cmUgZW5hYmxlZClcbiAgICAgICAgICBsb2FkVHVybnN0aWxlU2NyaXB0KCk7XG5cbiAgICAgICAgICAvLyBJbml0IGZvcm1zXG4gICAgICAgICAgaW5pdCgpO1xuXG4gICAgICAgICAgLy8gV2lyZSBkb2N1bWVudCBldmVudHMgb24gcHVibGlzaGVkIGFuZCBpbiBwcmV2aWV3IHdvcmtmbG93IG9ubHkgb25jZVxuICAgICAgICAgIGlmICgoIWluQXBwIHx8IFdlYmZsb3cuZW52KCdwcmV2aWV3JykpICYmICFsaXN0ZW5pbmcpIHtcbiAgICAgICAgICAgIGFkZExpc3RlbmVycygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICBzaXRlSWQgPSAkKCdodG1sJykuYXR0cignZGF0YS13Zi1zaXRlJyk7XG5cbiAgICAgIGZvcm1VcmwgPSBXRUJGTE9XX0ZPUk1fQVBJX0hPU1QgKyAnL2FwaS92MS9mb3JtLycgKyBzaXRlSWQ7XG5cbiAgICAgIC8vIFdvcmsgYXJvdW5kIHNhbWUtcHJvdG9jb2wgSUUgWERSIGxpbWl0YXRpb24gLSB3aXRob3V0IHRoaXMgSUU5IGFuZCBiZWxvdyBmb3JtcyB3b24ndCBzdWJtaXRcbiAgICAgIGlmIChyZXRybyAmJiBmb3JtVXJsLmluZGV4T2YoV0VCRkxPV19GT1JNX0FQSV9IT1NUKSA+PSAwKSB7XG4gICAgICAgIGZvcm1VcmwgPSBmb3JtVXJsLnJlcGxhY2UoXG4gICAgICAgICAgV0VCRkxPV19GT1JNX0FQSV9IT1NULFxuICAgICAgICAgIFdFQkZMT1dfRk9STV9PTERJRV9IT1NUXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHNpZ25GaWxlVXJsID0gYCR7Zm9ybVVybH0vc2lnbkZpbGVgO1xuXG4gICAgICAkZm9ybXMgPSAkKG5hbWVzcGFjZSArICcgZm9ybScpO1xuICAgICAgaWYgKCEkZm9ybXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgICRmb3Jtcy5lYWNoKGJ1aWxkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHVybnN0aWxlU2NyaXB0KCkge1xuICAgICAgaWYgKHR1cm5zdGlsZVNpdGVLZXkpIHtcbiAgICAgICAgY29uc3QgZG9Mb2FkID0gKCkgPT4ge1xuICAgICAgICAgIC8vIENyZWF0ZSBzY3JpcHQgdGFnIGZvciB0dXJuc3RpbGVcbiAgICAgICAgICB0dXJuc3RpbGVTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICB0dXJuc3RpbGVTY3JpcHQuc3JjID1cbiAgICAgICAgICAgICdodHRwczovL2NoYWxsZW5nZXMuY2xvdWRmbGFyZS5jb20vdHVybnN0aWxlL3YwL2FwaS5qcyc7XG4gICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0dXJuc3RpbGVTY3JpcHQpO1xuICAgICAgICAgIHR1cm5zdGlsZVNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyBhZnRlciB0aGUgc2NyaXB0IGxvYWRzLCBlbWl0IGFuIGV2ZW50IHRoYXQgd2UgbGlzdGVuIHRvIGJlbG93LlxuICAgICAgICAgICAgLy8gdGhpcyBlbmFibGVzIHVzIHRvIGxpc3RlbiBmb3IgdGhlIGV2ZW50IG9uIGVhY2ggZm9ybSBvbiB0aGUgcGFnZSBhbmQgcmVuZGVyIHRoZSB0dXJuc3RpbGUgdG9rZW4gZm9yIGVhY2ggb2YgdGhlbS5cbiAgICAgICAgICAgICRkb2MudHJpZ2dlcihUVVJOU1RJTEVfTE9BREVEX0VWRU5UKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIERlZmVyIGxvYWRpbmcgdW50aWwgdGhlIGJyb3dzZXIgaXMgaWRsZSB0byBhdm9pZCBibG9ja2luZyBwYWdlLWxvYWRcbiAgICAgICAgLy8gYW5pbWF0aW9ucy4gU2FmYXJpIGlzIHBhcnRpY3VsYXJseSBzZW5zaXRpdmUgdG8gbWFpbi10aHJlYWQgd29yayBmcm9tXG4gICAgICAgIC8vIHRoZSBUdXJuc3RpbGUgc2NyaXB0IGV4ZWN1dGluZyBkdXJpbmcgYW5pbWF0aW9uIGZyYW1lcy5cbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0SWRsZUNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgd2luZG93LnJlcXVlc3RJZGxlQ2FsbGJhY2soZG9Mb2FkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBGYWxsYmFjayBmb3IgU2FmYXJpIDwgMTYgd2hpY2ggbGFja3MgcmVxdWVzdElkbGVDYWxsYmFjayBzdXBwb3J0LlxuICAgICAgICAgIHNldFRpbWVvdXQoZG9Mb2FkLCAyMDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnVpbGQoaSwgZWwpIHtcbiAgICAgIC8vIFN0b3JlIGZvcm0gc3RhdGUgdXNpbmcgbmFtZXNwYWNlXG4gICAgICB2YXIgJGVsID0gJChlbCk7XG4gICAgICB2YXIgZGF0YSA9ICQuZGF0YShlbCwgbmFtZXNwYWNlKTtcbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gJC5kYXRhKGVsLCBuYW1lc3BhY2UsIHtmb3JtOiAkZWx9KTtcbiAgICAgIH0gLy8gZGF0YS5mb3JtXG5cbiAgICAgIHJlc2V0KGRhdGEpO1xuICAgICAgdmFyIHdyYXAgPSAkZWwuY2xvc2VzdCgnZGl2LnctZm9ybScpO1xuICAgICAgZGF0YS5kb25lID0gd3JhcC5maW5kKCc+IC53LWZvcm0tZG9uZScpO1xuICAgICAgZGF0YS5mYWlsID0gd3JhcC5maW5kKCc+IC53LWZvcm0tZmFpbCcpO1xuICAgICAgZGF0YS5maWxlVXBsb2FkcyA9IHdyYXAuZmluZCgnLnctZmlsZS11cGxvYWQnKTtcblxuICAgICAgZGF0YS5maWxlVXBsb2Fkcy5lYWNoKGZ1bmN0aW9uIChqKSB7XG4gICAgICAgIGluaXRGaWxlVXBsb2FkKGosIGRhdGEpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0dXJuc3RpbGVTaXRlS2V5ICYmICEkZWwuaXMoJ1tkYXRhLXdmLW5vLXR1cm5zdGlsZV0nKSkge1xuICAgICAgICAvLyBPbmNlIGFsbCBjdXN0b20gZm9udHMgYXJlIGxvYWRlZCwgc2V0IHRoZSBidXR0b24gc3RhdGUgdG8gaW5kaWNhdGUgVHVybnN0aWxlIGlzIGxvYWRpbmdcbiAgICAgICAgc2V0QnV0dG9uVG9UdXJuc3RpbGVMb2FkaW5nKGRhdGEpO1xuXG4gICAgICAgIC8vIEFkZCBsb2FkaW5nIHN0YXRlIHRvIHRoZSBmb3JtIHdyYXBwZXJcbiAgICAgICAgc2V0Rm9ybUxvYWRpbmdTdGF0ZSgkZWwsIHRydWUpO1xuXG4gICAgICAgIC8vIHRoaXMgaXMgcHJvYmFibHkgb3ZlcmtpbGwsIGJ1dCBpZiB0aGUgdHVybnN0aWxlIHNjcmlwdCBoYXMgYWxyZWFkeSBsb2FkZWQgYW5kIHdlIHJlYWNoZWQgdGhpcyBwb2ludCB0aGVuXG4gICAgICAgIC8vIHdlJ2xsIGZpcmUgdGhlIGNhbGxiYWNrIGJlbG93IGltbWVkaWF0ZWx5LiBPdGhlcndpc2Ugd2UnbGwgd2FpdCBmb3IgdGhlIFRVUk5TVElMRV9MT0FERURfRVZFTlQgdG8gZmlyZS5cbiAgICAgICAgJGRvYy5vbihcbiAgICAgICAgICB0eXBlb2YgdHVybnN0aWxlICE9PSAndW5kZWZpbmVkJyA/ICdyZWFkeScgOiBUVVJOU1RJTEVfTE9BREVEX0VWRU5ULFxuICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRvUmVuZGVyKCkge1xuICAgICAgICAgICAgICAvLyByZW5kZXIgdGhlIGhpZGRlbiBpbnB1dCB3aXRoIHRoZSB0dXJuc3RpbGUgdG9rZW4gZm9yIGVhY2ggZm9ybSBvbiB0aGUgcGFnZVxuICAgICAgICAgICAgICByZW5kZXJUdXJuc3RpbGVDYXB0Y2hhKFxuICAgICAgICAgICAgICAgIHR1cm5zdGlsZVNpdGVLZXksXG4gICAgICAgICAgICAgICAgZWwsXG4gICAgICAgICAgICAgICAgKHRva2VuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyBUaGUgdHVybnN0aWxlIHRva2VuIGdldHMgYXV0b21hdGljYWxseSBhdHRhY2hlZCB0byB0aGUgZm9ybSBhcyBhIGhpZGRlbiBpbnB1dCBmaWVsZCAmIHNlbnQgb24gc3VibWlzc2lvbiB0byB0aGUgc2VydmVyLlxuICAgICAgICAgICAgICAgICAgLy8gSGVyZSB3ZSBhcmUgdXNpbmcgdGhpcyBgZGF0YS50dXJuc3RpbGVUb2tlbmAgdmFsdWUgdG8gZGVjaWRlIHdoZXRoZXIgb3Igbm90IHRoZSBzdWJtaXQgYnV0dG9uIHNob3VsZCBiZSBlbmFibGVkLlxuICAgICAgICAgICAgICAgICAgZGF0YS50dXJuc3RpbGVUb2tlbiA9IHRva2VuO1xuICAgICAgICAgICAgICAgICAgLy8gZW5hYmxlIHRoZSBzdWJtaXQgYnV0dG9uIGFuZCByZXN0b3JlIHRleHQgb25jZSB0dXJuc3RpbGUgaXMgZG9uZSByZW5kZXJpbmdcbiAgICAgICAgICAgICAgICAgIHJlc2V0KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgc2V0Rm9ybUxvYWRpbmdTdGF0ZSgkZWwsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIC8vIElmIFR1cm5zdGlsZSBmYWlscywga2VlcCB0aGUgYnV0dG9uIGRpc2FibGVkIGJ1dCByZXN0b3JlIG9yaWdpbmFsIHN0YXRlICh0b29sdGlwLCBldGMuKVxuICAgICAgICAgICAgICAgICAgcmVzZXQoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAvLyBFbnN1cmUgYnV0dG9uIGlzIGRlZmluaXRlbHkgZGlzYWJsZWQgaWYgcmVzZXQgZGlkbid0IGhhbmRsZSBpdCAoZS5nLiwgaWYgdHVybnN0aWxlU2l0ZUtleSBsb2dpYyBjaGFuZ2VzKVxuICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuYnRuKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYnRuLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBzZXRGb3JtTG9hZGluZ1N0YXRlKCRlbCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRGVmZXIgd2lkZ2V0IHJlbmRlciB1bnRpbCB0aGUgZm9ybSBpcyBuZWFyIHRoZSB2aWV3cG9ydC4gQ2FsbGluZ1xuICAgICAgICAgICAgLy8gdHVybnN0aWxlLnJlbmRlcigpIGZvciBldmVyeSBvZmYtc2NyZWVuIGZvcm0gc2ltdWx0YW5lb3VzbHkgYmxvY2tzXG4gICAgICAgICAgICAvLyBTYWZhcmkncyBtYWluIHRocmVhZCBhbmQgY2F1c2VzIG11bHRpLXNlY29uZCBiZWxvdy10aGUtZm9sZCBkZWxheXNcbiAgICAgICAgICAgIC8vIG9uIGlPUy4gRm9ybXMgYWxyZWFkeSBpbiAob3IgbmVhcikgdGhlIHZpZXdwb3J0IHJlbmRlciBpbW1lZGlhdGVseS5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZW50cmllcykge1xuICAgICAgICAgICAgICAgICAgaWYgKGVudHJpZXNbMF0uaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICBkb1JlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge3Jvb3RNYXJnaW46ICcyMDBweCd9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZG9SZW5kZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFjY2Vzc2liaWxpdHkgZml4ZXNcbiAgICAgIHZhciBmb3JtTmFtZSA9XG4gICAgICAgIGRhdGEuZm9ybS5hdHRyKCdhcmlhLWxhYmVsJykgfHwgZGF0YS5mb3JtLmF0dHIoJ2RhdGEtbmFtZScpIHx8ICdGb3JtJztcbiAgICAgIGlmICghZGF0YS5kb25lLmF0dHIoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICBkYXRhLmZvcm0uYXR0cignYXJpYS1sYWJlbCcsIGZvcm1OYW1lKTtcbiAgICAgIH1cblxuICAgICAgZGF0YS5kb25lLmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICBkYXRhLmRvbmUuYXR0cigncm9sZScsICdyZWdpb24nKTtcbiAgICAgIGlmICghZGF0YS5kb25lLmF0dHIoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICBkYXRhLmRvbmUuYXR0cignYXJpYS1sYWJlbCcsIGZvcm1OYW1lICsgJyBzdWNjZXNzJyk7XG4gICAgICB9XG4gICAgICBkYXRhLmZhaWwuYXR0cigndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgIGRhdGEuZmFpbC5hdHRyKCdyb2xlJywgJ3JlZ2lvbicpO1xuICAgICAgaWYgKCFkYXRhLmZhaWwuYXR0cignYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgIGRhdGEuZmFpbC5hdHRyKCdhcmlhLWxhYmVsJywgZm9ybU5hbWUgKyAnIGZhaWx1cmUnKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFjdGlvbiA9IChkYXRhLmFjdGlvbiA9ICRlbC5hdHRyKCdhY3Rpb24nKSk7XG4gICAgICBkYXRhLmhhbmRsZXIgPSBudWxsO1xuICAgICAgZGF0YS5yZWRpcmVjdCA9ICRlbC5hdHRyKCdkYXRhLXJlZGlyZWN0Jyk7XG5cbiAgICAgIC8vIE1haWxDaGltcCBmb3JtXG4gICAgICBpZiAoY2hpbXBSZWdleC50ZXN0KGFjdGlvbikpIHtcbiAgICAgICAgZGF0YS5oYW5kbGVyID0gc3VibWl0TWFpbENoaW1wO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEN1c3RvbSBmb3JtIGFjdGlvblxuICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFdlYmZsb3cgZm9ybXMgZm9yIGhvc3RpbmcgYWNjb3VudHNcbiAgICAgIGlmIChzaXRlSWQpIHtcbiAgICAgICAgZGF0YS5oYW5kbGVyID0gV0VCRkxPV19FWFBPUlRfTU9ERVxuICAgICAgICAgID8gZXhwb3J0ZWRTdWJtaXRXZWJmbG93XG4gICAgICAgICAgOiAoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBob3N0ZWRTdWJtaXRIYW5kbGVyID1cbiAgICAgICAgICAgICAgICByZXF1aXJlKCcuL3dlYmZsb3ctZm9ybXMtaG9zdGVkJykuZGVmYXVsdDtcbiAgICAgICAgICAgICAgcmV0dXJuIGhvc3RlZFN1Ym1pdEhhbmRsZXIoXG4gICAgICAgICAgICAgICAgcmVzZXQsXG4gICAgICAgICAgICAgICAgbG9jLFxuICAgICAgICAgICAgICAgIFdlYmZsb3csXG4gICAgICAgICAgICAgICAgY29sbGVjdEVudGVycHJpc2VUcmFja2luZ0Nvb2tpZXMsXG4gICAgICAgICAgICAgICAgcHJldmVudERlZmF1bHQsXG4gICAgICAgICAgICAgICAgZmluZEZpZWxkcyxcbiAgICAgICAgICAgICAgICBhbGVydCxcbiAgICAgICAgICAgICAgICBmaW5kRmlsZVVwbG9hZHMsXG4gICAgICAgICAgICAgICAgZGlzYWJsZUJ0bixcbiAgICAgICAgICAgICAgICBzaXRlSWQsXG4gICAgICAgICAgICAgICAgYWZ0ZXJTdWJtaXQsXG4gICAgICAgICAgICAgICAgJCxcbiAgICAgICAgICAgICAgICBmb3JtVXJsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEFsZXJ0IGZvciBkaXNjb25uZWN0ZWQgV2ViZmxvdyBmb3Jtc1xuICAgICAgZGlzY29ubmVjdGVkKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgICAgbGlzdGVuaW5nID0gdHJ1ZTtcblxuICAgICAgJGRvYy5vbignc3VibWl0JywgbmFtZXNwYWNlICsgJyBmb3JtJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgZGF0YSA9ICQuZGF0YSh0aGlzLCBuYW1lc3BhY2UpO1xuICAgICAgICBpZiAoZGF0YS5oYW5kbGVyKSB7XG4gICAgICAgICAgZGF0YS5ldnQgPSBldnQ7XG4gICAgICAgICAgZGF0YS5oYW5kbGVyKGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gaGFuZGxlIGNoZWNrZWQgdWkgZm9yIGN1c3RvbSBjaGVja2JveCBhbmQgcmFkaW8gYnV0dG9uXG4gICAgICBjb25zdCBDSEVDS0JPWF9DTEFTU19OQU1FID0gJy53LWNoZWNrYm94LWlucHV0JztcbiAgICAgIGNvbnN0IFJBRElPX0lOUFVUX0NMQVNTX05BTUUgPSAnLnctcmFkaW8taW5wdXQnO1xuICAgICAgY29uc3QgQ0hFQ0tFRF9DTEFTUyA9ICd3LS1yZWRpcmVjdGVkLWNoZWNrZWQnO1xuICAgICAgY29uc3QgRk9DVVNFRF9DTEFTUyA9ICd3LS1yZWRpcmVjdGVkLWZvY3VzJztcbiAgICAgIGNvbnN0IEZPQ1VTRURfVklTSUJMRV9DTEFTUyA9ICd3LS1yZWRpcmVjdGVkLWZvY3VzLXZpc2libGUnO1xuICAgICAgY29uc3QgZm9jdXNWaXNpYmxlU2VsZWN0b3JzID0gJzpmb2N1cy12aXNpYmxlLCBbZGF0YS13Zi1mb2N1cy12aXNpYmxlXSc7XG5cbiAgICAgIGNvbnN0IENVU1RPTV9DT05UUk9MUyA9IFtcbiAgICAgICAgWydjaGVja2JveCcsIENIRUNLQk9YX0NMQVNTX05BTUVdLFxuICAgICAgICBbJ3JhZGlvJywgUkFESU9fSU5QVVRfQ0xBU1NfTkFNRV0sXG4gICAgICBdO1xuXG4gICAgICAkZG9jLm9uKFxuICAgICAgICAnY2hhbmdlJyxcbiAgICAgICAgbmFtZXNwYWNlICtcbiAgICAgICAgICBgIGZvcm0gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdChgICtcbiAgICAgICAgICBDSEVDS0JPWF9DTEFTU19OQU1FICtcbiAgICAgICAgICAnKScsXG4gICAgICAgIChldnQpID0+IHtcbiAgICAgICAgICAkKGV2dC50YXJnZXQpXG4gICAgICAgICAgICAuc2libGluZ3MoQ0hFQ0tCT1hfQ0xBU1NfTkFNRSlcbiAgICAgICAgICAgIC50b2dnbGVDbGFzcyhDSEVDS0VEX0NMQVNTKTtcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgJGRvYy5vbignY2hhbmdlJywgbmFtZXNwYWNlICsgYCBmb3JtIGlucHV0W3R5cGU9XCJyYWRpb1wiXWAsIChldnQpID0+IHtcbiAgICAgICAgJChgaW5wdXRbbmFtZT1cIiR7ZXZ0LnRhcmdldC5uYW1lfVwiXTpub3QoJHtDSEVDS0JPWF9DTEFTU19OQU1FfSlgKS5tYXAoXG4gICAgICAgICAgKGksIGVsKSA9PlxuICAgICAgICAgICAgJChlbCkuc2libGluZ3MoUkFESU9fSU5QVVRfQ0xBU1NfTkFNRSkucmVtb3ZlQ2xhc3MoQ0hFQ0tFRF9DTEFTUylcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldnQudGFyZ2V0KTtcblxuICAgICAgICBpZiAoISR0YXJnZXQuaGFzQ2xhc3MoJ3ctcmFkaW8taW5wdXQnKSkge1xuICAgICAgICAgICR0YXJnZXQuc2libGluZ3MoUkFESU9fSU5QVVRfQ0xBU1NfTkFNRSkuYWRkQ2xhc3MoQ0hFQ0tFRF9DTEFTUyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBDVVNUT01fQ09OVFJPTFMuZm9yRWFjaCgoW2NvbnRyb2xUeXBlLCBjdXN0b21Db250cm9sQ2xhc3NOYW1lXSkgPT4ge1xuICAgICAgICAkZG9jLm9uKFxuICAgICAgICAgICdmb2N1cycsXG4gICAgICAgICAgbmFtZXNwYWNlICtcbiAgICAgICAgICAgIGAgZm9ybSBpbnB1dFt0eXBlPVwiJHtjb250cm9sVHlwZX1cIl06bm90KGAgK1xuICAgICAgICAgICAgY3VzdG9tQ29udHJvbENsYXNzTmFtZSArXG4gICAgICAgICAgICAnKScsXG4gICAgICAgICAgKGV2dCkgPT4ge1xuICAgICAgICAgICAgJChldnQudGFyZ2V0KVxuICAgICAgICAgICAgICAuc2libGluZ3MoY3VzdG9tQ29udHJvbENsYXNzTmFtZSlcbiAgICAgICAgICAgICAgLmFkZENsYXNzKEZPQ1VTRURfQ0xBU1MpO1xuICAgICAgICAgICAgJChldnQudGFyZ2V0KVxuICAgICAgICAgICAgICAuZmlsdGVyKGZvY3VzVmlzaWJsZVNlbGVjdG9ycylcbiAgICAgICAgICAgICAgLnNpYmxpbmdzKGN1c3RvbUNvbnRyb2xDbGFzc05hbWUpXG4gICAgICAgICAgICAgIC5hZGRDbGFzcyhGT0NVU0VEX1ZJU0lCTEVfQ0xBU1MpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgJGRvYy5vbihcbiAgICAgICAgICAnYmx1cicsXG4gICAgICAgICAgbmFtZXNwYWNlICtcbiAgICAgICAgICAgIGAgZm9ybSBpbnB1dFt0eXBlPVwiJHtjb250cm9sVHlwZX1cIl06bm90KGAgK1xuICAgICAgICAgICAgY3VzdG9tQ29udHJvbENsYXNzTmFtZSArXG4gICAgICAgICAgICAnKScsXG4gICAgICAgICAgKGV2dCkgPT4ge1xuICAgICAgICAgICAgJChldnQudGFyZ2V0KVxuICAgICAgICAgICAgICAuc2libGluZ3MoY3VzdG9tQ29udHJvbENsYXNzTmFtZSlcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGAke0ZPQ1VTRURfQ0xBU1N9ICR7Rk9DVVNFRF9WSVNJQkxFX0NMQVNTfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJlc2V0IGRhdGEgY29tbW9uIHRvIGFsbCBzdWJtaXQgaGFuZGxlcnNcbiAgICBmdW5jdGlvbiByZXNldChkYXRhKSB7XG4gICAgICB2YXIgYnRuID0gKGRhdGEuYnRuID0gZGF0YS5mb3JtLmZpbmQoJzppbnB1dFt0eXBlPVwic3VibWl0XCJdJykpO1xuICAgICAgZGF0YS53YWl0ID0gZGF0YS5idG4uYXR0cignZGF0YS13YWl0JykgfHwgbnVsbDtcbiAgICAgIGRhdGEuc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAvLyBEZXRlcm1pbmUgaWYgdGhlIGJ1dHRvbiBzaG91bGQgYmUgZGlzYWJsZWRcbiAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBCb29sZWFuKHR1cm5zdGlsZVNpdGVLZXkgJiYgIWRhdGEudHVybnN0aWxlVG9rZW4pO1xuICAgICAgYnRuLnByb3AoJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gICAgICBidG4ucmVtb3ZlQ2xhc3MoJ3ctZm9ybS1sb2FkaW5nJyk7XG4gICAgICBkYXRhLmxhYmVsICYmIGJ0bi52YWwoZGF0YS5sYWJlbCk7XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSBzdWJtaXQgYnV0dG9uIGR1cmluZyBhY3R1YWwgc3VibWlzc2lvblxuICAgIGZ1bmN0aW9uIGRpc2FibGVCdG4oZGF0YSkge1xuICAgICAgdmFyIGJ0biA9IGRhdGEuYnRuO1xuICAgICAgdmFyIHdhaXQgPSBkYXRhLndhaXQ7IC8vIFVzZSB0aGUgdmFsdWUgZnJvbSBkYXRhLXdhaXQgYXR0cmlidXRlXG5cbiAgICAgIGJ0bi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAvLyBTaG93IHdhaXQgdGV4dCBhbmQgc3RvcmUgcHJldmlvdXMgbGFiZWxcbiAgICAgIGlmICh3YWl0KSB7XG4gICAgICAgIGRhdGEubGFiZWwgPSBidG4udmFsKCk7IC8vIFN0b3JlIHRoZSBjdXJyZW50IGxhYmVsIGJlZm9yZSBvdmVyd3JpdGluZ1xuICAgICAgICBidG4udmFsKHdhaXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNldCBidXR0b24gc3RhdGUgd2hpbGUgVHVybnN0aWxlIHNjcmlwdCBpcyBsb2FkaW5nXG4gICAgZnVuY3Rpb24gc2V0QnV0dG9uVG9UdXJuc3RpbGVMb2FkaW5nKGRhdGEpIHtcbiAgICAgIGNvbnN0IGJ0biA9IGRhdGEuYnRuIHx8IGRhdGEuZm9ybS5maW5kKCc6aW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpO1xuICAgICAgaWYgKCFkYXRhLmJ0bikgZGF0YS5idG4gPSBidG47XG5cbiAgICAgIGJ0bi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgYnRuLmFkZENsYXNzKCd3LWZvcm0tbG9hZGluZycpO1xuICAgIH1cblxuICAgIC8vIEFkZC9yZW1vdmUgbG9hZGluZyBjbGFzcyBmcm9tIHRoZSBmb3JtIHdyYXBwZXJcbiAgICBmdW5jdGlvbiBzZXRGb3JtTG9hZGluZ1N0YXRlKCRmb3JtRWwsIGlzTG9hZGluZykge1xuICAgICAgY29uc3QgJHdyYXBwZXIgPSAkZm9ybUVsLmNsb3Nlc3QoJy53LWZvcm0nKTtcbiAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgJHdyYXBwZXIuYWRkQ2xhc3MoJ3ctZm9ybS1sb2FkaW5nJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkd3JhcHBlci5yZW1vdmVDbGFzcygndy1mb3JtLWxvYWRpbmcnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGaW5kIGZvcm0gZmllbGRzLCB2YWxpZGF0ZSwgYW5kIHNldCB2YWx1ZSBwYWlyc1xuICAgIGZ1bmN0aW9uIGZpbmRGaWVsZHMoZm9ybSwgcmVzdWx0KSB7XG4gICAgICB2YXIgc3RhdHVzID0gbnVsbDtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdCB8fCB7fTtcblxuICAgICAgLy8gVGhlIFwiOmlucHV0XCIgc2VsZWN0b3IgaXMgYSBqUXVlcnkgc2hvcnRjdXQgdG8gc2VsZWN0IGFsbCBpbnB1dHMsIHNlbGVjdHMsIHRleHRhcmVhc1xuICAgICAgZm9ybVxuICAgICAgICAuZmluZChcbiAgICAgICAgICAnOmlucHV0Om5vdChbdHlwZT1cInN1Ym1pdFwiXSk6bm90KFt0eXBlPVwiZmlsZVwiXSk6bm90KFt0eXBlPVwiYnV0dG9uXCJdKSdcbiAgICAgICAgKVxuICAgICAgICAuZWFjaChmdW5jdGlvbiAoaSwgZWwpIHtcbiAgICAgICAgICB2YXIgZmllbGQgPSAkKGVsKTtcbiAgICAgICAgICB2YXIgdHlwZSA9IGZpZWxkLmF0dHIoJ3R5cGUnKTtcbiAgICAgICAgICB2YXIgbmFtZSA9XG4gICAgICAgICAgICBmaWVsZC5hdHRyKCdkYXRhLW5hbWUnKSB8fCBmaWVsZC5hdHRyKCduYW1lJykgfHwgJ0ZpZWxkICcgKyAoaSArIDEpO1xuICAgICAgICAgIC8vIEVuY29kaW5nIHRoZSBmaWVsZCBuYW1lIHdpbGwgcHJldmVudCBmaWVsZHMgdGhhdCBoYXZlIGJyYWNrZXRzXG4gICAgICAgICAgLy8gaW4gdGhlaXIgbmFtZSBmcm9tIGJlaW5nIHBhcnNlZCBieSBgYm9keVBhcnNlci51cmxlbmNvZGVkYCBhc1xuICAgICAgICAgIC8vIG9iamVjdHMgd2hpY2ggd291bGQgaGF2ZSB1bmludGVuZGVkIGNvbnNlcXVlbmNlcyBsaWtlIG5vdCBzYXZpbmdcbiAgICAgICAgICAvLyB0aGUgY29udGVudCBvZiB0aGUgZmllbGQuXG4gICAgICAgICAgLy8gaHR0cHM6Ly93ZWJmbG93LmF0bGFzc2lhbi5uZXQvYnJvd3NlL0NNU0FVVEgtMjQ5NVxuICAgICAgICAgIG5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gZmllbGQudmFsKCk7XG5cbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgdmFsdWUgPSBmaWVsZC5pcygnOmNoZWNrZWQnKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIC8vIFJhZGlvIGdyb3VwIHZhbHVlIGFscmVhZHkgcHJvY2Vzc2VkXG4gICAgICAgICAgICBpZiAocmVzdWx0W25hbWVdID09PSBudWxsIHx8IHR5cGVvZiByZXN1bHRbbmFtZV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUgPVxuICAgICAgICAgICAgICBmb3JtXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2lucHV0W25hbWU9XCInICsgZmllbGQuYXR0cignbmFtZScpICsgJ1wiXTpjaGVja2VkJylcbiAgICAgICAgICAgICAgICAudmFsKCkgfHwgbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFsdWUgPSAkLnRyaW0odmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXN1bHRbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICBzdGF0dXMgPSBzdGF0dXMgfHwgZ2V0U3RhdHVzKGZpZWxkLCB0eXBlLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc3RhdHVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmRGaWxlVXBsb2Fkcyhmb3JtKSB7XG4gICAgICB2YXIgcmVzdWx0ID0ge307XG5cbiAgICAgIGZvcm0uZmluZCgnOmlucHV0W3R5cGU9XCJmaWxlXCJdJykuZWFjaChmdW5jdGlvbiAoaSwgZWwpIHtcbiAgICAgICAgdmFyIGZpZWxkID0gJChlbCk7XG4gICAgICAgIHZhciBuYW1lID1cbiAgICAgICAgICBmaWVsZC5hdHRyKCdkYXRhLW5hbWUnKSB8fCBmaWVsZC5hdHRyKCduYW1lJykgfHwgJ0ZpbGUgJyArIChpICsgMSk7XG4gICAgICAgIHZhciB2YWx1ZSA9IGZpZWxkLmF0dHIoJ2RhdGEtdmFsdWUnKTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB2YWx1ZSA9ICQudHJpbSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0W25hbWVdID0gdmFsdWU7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBjb25zdCB0cmFja2luZ0Nvb2tpZU5hbWVNYXAgPSB7XG4gICAgICBfbWt0b190cms6ICdtYXJrZXRvJyxcbiAgICAgIC8vIF9faHN0YzogJ2h1YnNwb3QnLFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjb2xsZWN0RW50ZXJwcmlzZVRyYWNraW5nQ29va2llcygpIHtcbiAgICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykucmVkdWNlKGZ1bmN0aW9uIChcbiAgICAgICAgYWNjLFxuICAgICAgICBjb29raWVcbiAgICAgICkge1xuICAgICAgICBjb25zdCBzcGxpdENvb2tpZSA9IGNvb2tpZS5zcGxpdCgnPScpO1xuICAgICAgICBjb25zdCBuYW1lID0gc3BsaXRDb29raWVbMF07XG4gICAgICAgIGlmIChuYW1lIGluIHRyYWNraW5nQ29va2llTmFtZU1hcCkge1xuICAgICAgICAgIGNvbnN0IG1hcHBlZE5hbWUgPSB0cmFja2luZ0Nvb2tpZU5hbWVNYXBbbmFtZV07XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBzcGxpdENvb2tpZS5zbGljZSgxKS5qb2luKCc9Jyk7XG4gICAgICAgICAgYWNjW21hcHBlZE5hbWVdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcblxuICAgICAgcmV0dXJuIGNvb2tpZXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U3RhdHVzKGZpZWxkLCB0eXBlLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgdmFyIHN0YXR1cyA9IG51bGw7XG5cbiAgICAgIGlmICh0eXBlID09PSAncGFzc3dvcmQnKSB7XG4gICAgICAgIHN0YXR1cyA9ICdQYXNzd29yZHMgY2Fubm90IGJlIHN1Ym1pdHRlZC4nO1xuICAgICAgfSBlbHNlIGlmIChmaWVsZC5hdHRyKCdyZXF1aXJlZCcpKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICBzdGF0dXMgPSAnUGxlYXNlIGZpbGwgb3V0IHRoZSByZXF1aXJlZCBmaWVsZDogJyArIG5hbWU7XG4gICAgICAgIH0gZWxzZSBpZiAoZW1haWxGaWVsZC50ZXN0KGZpZWxkLmF0dHIoJ3R5cGUnKSkpIHtcbiAgICAgICAgICBpZiAoIWVtYWlsVmFsdWUudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzIGZvcjogJyArIG5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdnLXJlY2FwdGNoYS1yZXNwb25zZScgJiYgIXZhbHVlKSB7XG4gICAgICAgIHN0YXR1cyA9IFwiUGxlYXNlIGNvbmZpcm0geW91J3JlIG5vdCBhIHJvYm90LlwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhdHVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4cG9ydGVkU3VibWl0V2ViZmxvdyhkYXRhKSB7XG4gICAgICBwcmV2ZW50RGVmYXVsdChkYXRhKTtcbiAgICAgIGFmdGVyU3VibWl0KGRhdGEpO1xuICAgIH1cblxuICAgIC8vIFN1Ym1pdCBmb3JtIHRvIE1haWxDaGltcFxuICAgIGZ1bmN0aW9uIHN1Ym1pdE1haWxDaGltcChkYXRhKSB7XG4gICAgICByZXNldChkYXRhKTtcblxuICAgICAgdmFyIGZvcm0gPSBkYXRhLmZvcm07XG4gICAgICB2YXIgcGF5bG9hZCA9IHt9O1xuXG4gICAgICAvLyBTa2lwIEFqYXggc3VibWlzc2lvbiBpZiBodHRwL3MgbWlzbWF0Y2gsIGZhbGxiYWNrIHRvIFBPU1QgaW5zdGVhZFxuICAgICAgaWYgKC9eaHR0cHMvLnRlc3QobG9jLmhyZWYpICYmICEvXmh0dHBzLy50ZXN0KGRhdGEuYWN0aW9uKSkge1xuICAgICAgICBmb3JtLmF0dHIoJ21ldGhvZCcsICdwb3N0Jyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcHJldmVudERlZmF1bHQoZGF0YSk7XG5cbiAgICAgIC8vIEZpbmQgJiBwb3B1bGF0ZSBhbGwgZmllbGRzXG4gICAgICB2YXIgc3RhdHVzID0gZmluZEZpZWxkcyhmb3JtLCBwYXlsb2FkKTtcbiAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KHN0YXR1cyk7XG4gICAgICB9XG5cbiAgICAgIC8vIERpc2FibGUgc3VibWl0IGJ1dHRvblxuICAgICAgZGlzYWJsZUJ0bihkYXRhKTtcblxuICAgICAgLy8gVXNlIHNwZWNpYWwgZm9ybWF0IGZvciBNYWlsQ2hpbXAgcGFyYW1zXG4gICAgICB2YXIgZnVsbE5hbWU7XG4gICAgICBfLmVhY2gocGF5bG9hZCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKGVtYWlsRmllbGQudGVzdChrZXkpKSB7XG4gICAgICAgICAgcGF5bG9hZC5FTUFJTCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvXigoZnVsbFsgXy1dPyk/bmFtZSkkL2kudGVzdChrZXkpKSB7XG4gICAgICAgICAgZnVsbE5hbWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL14oZmlyc3RbIF8tXT9uYW1lKSQvaS50ZXN0KGtleSkpIHtcbiAgICAgICAgICBwYXlsb2FkLkZOQU1FID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9eKGxhc3RbIF8tXT9uYW1lKSQvaS50ZXN0KGtleSkpIHtcbiAgICAgICAgICBwYXlsb2FkLkxOQU1FID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZnVsbE5hbWUgJiYgIXBheWxvYWQuRk5BTUUpIHtcbiAgICAgICAgZnVsbE5hbWUgPSBmdWxsTmFtZS5zcGxpdCgnICcpO1xuICAgICAgICBwYXlsb2FkLkZOQU1FID0gZnVsbE5hbWVbMF07XG4gICAgICAgIHBheWxvYWQuTE5BTUUgPSBwYXlsb2FkLkxOQU1FIHx8IGZ1bGxOYW1lWzFdO1xuICAgICAgfVxuXG4gICAgICAvLyBVc2UgdGhlICh1bmRvY3VtZW50ZWQpIE1haWxDaGltcCBqc29ucCBhcGlcbiAgICAgIHZhciB1cmwgPSBkYXRhLmFjdGlvbi5yZXBsYWNlKCcvcG9zdD8nLCAnL3Bvc3QtanNvbj8nKSArICcmYz0/JztcbiAgICAgIC8vIEFkZCBzcGVjaWFsIHBhcmFtIHRvIHByZXZlbnQgYm90IHNpZ251cHNcbiAgICAgIHZhciB1c2VySWQgPSB1cmwuaW5kZXhPZigndT0nKSArIDI7XG4gICAgICB1c2VySWQgPSB1cmwuc3Vic3RyaW5nKHVzZXJJZCwgdXJsLmluZGV4T2YoJyYnLCB1c2VySWQpKTtcbiAgICAgIHZhciBsaXN0SWQgPSB1cmwuaW5kZXhPZignaWQ9JykgKyAzO1xuICAgICAgbGlzdElkID0gdXJsLnN1YnN0cmluZyhsaXN0SWQsIHVybC5pbmRleE9mKCcmJywgbGlzdElkKSk7XG4gICAgICBwYXlsb2FkWydiXycgKyB1c2VySWQgKyAnXycgKyBsaXN0SWRdID0gJyc7XG5cbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybCxcbiAgICAgICAgZGF0YTogcGF5bG9hZCxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29ucCcsXG4gICAgICB9KVxuICAgICAgICAuZG9uZShmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgIGRhdGEuc3VjY2VzcyA9IHJlc3AucmVzdWx0ID09PSAnc3VjY2VzcycgfHwgL2FscmVhZHkvLnRlc3QocmVzcC5tc2cpO1xuICAgICAgICAgIGlmICghZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oJ01haWxDaGltcCBlcnJvcjogJyArIHJlc3AubXNnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWZ0ZXJTdWJtaXQoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5mYWlsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhZnRlclN1Ym1pdChkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQ29tbW9uIGNhbGxiYWNrIHdoaWNoIHJ1bnMgYWZ0ZXIgYWxsIEFqYXggc3VibWlzc2lvbnNcbiAgICBmdW5jdGlvbiBhZnRlclN1Ym1pdChkYXRhKSB7XG4gICAgICB2YXIgZm9ybSA9IGRhdGEuZm9ybTtcbiAgICAgIHZhciByZWRpcmVjdCA9IGRhdGEucmVkaXJlY3Q7XG4gICAgICB2YXIgc3VjY2VzcyA9IGRhdGEuc3VjY2VzcztcblxuICAgICAgLy8gUmVkaXJlY3QgdG8gYSBzdWNjZXNzIHVybCBpZiBkZWZpbmVkXG4gICAgICBpZiAoc3VjY2VzcyAmJiByZWRpcmVjdCkge1xuICAgICAgICBXZWJmbG93LmxvY2F0aW9uKHJlZGlyZWN0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBTaG93IG9yIGhpZGUgc3RhdHVzIGRpdnNcbiAgICAgIGRhdGEuZG9uZS50b2dnbGUoc3VjY2Vzcyk7XG4gICAgICBkYXRhLmZhaWwudG9nZ2xlKCFzdWNjZXNzKTtcblxuICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgZGF0YS5kb25lLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhLmZhaWwuZm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgLy8gSGlkZSBmb3JtIG9uIHN1Y2Nlc3NcbiAgICAgIGZvcm0udG9nZ2xlKCFzdWNjZXNzKTtcblxuICAgICAgLy8gUmVzZXQgZGF0YSBhbmQgZW5hYmxlIHN1Ym1pdCBidXR0b25cbiAgICAgIHJlc2V0KGRhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGRhdGEpIHtcbiAgICAgIGRhdGEuZXZ0ICYmIGRhdGEuZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkYXRhLmV2dCA9IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdEZpbGVVcGxvYWQoaSwgZm9ybSkge1xuICAgICAgaWYgKCFmb3JtLmZpbGVVcGxvYWRzIHx8ICFmb3JtLmZpbGVVcGxvYWRzW2ldKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGZpbGU7XG4gICAgICB2YXIgJGVsID0gJChmb3JtLmZpbGVVcGxvYWRzW2ldKTtcbiAgICAgIHZhciAkZGVmYXVsdFdyYXAgPSAkZWwuZmluZCgnPiAudy1maWxlLXVwbG9hZC1kZWZhdWx0Jyk7XG4gICAgICB2YXIgJHVwbG9hZGluZ1dyYXAgPSAkZWwuZmluZCgnPiAudy1maWxlLXVwbG9hZC11cGxvYWRpbmcnKTtcbiAgICAgIHZhciAkc3VjY2Vzc1dyYXAgPSAkZWwuZmluZCgnPiAudy1maWxlLXVwbG9hZC1zdWNjZXNzJyk7XG4gICAgICB2YXIgJGVycm9yV3JhcCA9ICRlbC5maW5kKCc+IC53LWZpbGUtdXBsb2FkLWVycm9yJyk7XG4gICAgICB2YXIgJGlucHV0ID0gJGRlZmF1bHRXcmFwLmZpbmQoJy53LWZpbGUtdXBsb2FkLWlucHV0Jyk7XG4gICAgICB2YXIgJGxhYmVsID0gJGRlZmF1bHRXcmFwLmZpbmQoJy53LWZpbGUtdXBsb2FkLWxhYmVsJyk7XG4gICAgICB2YXIgJGxhYmVsQ2hpbGRyZW4gPSAkbGFiZWwuY2hpbGRyZW4oKTtcbiAgICAgIHZhciAkZXJyb3JNc2dFbCA9ICRlcnJvcldyYXAuZmluZCgnLnctZmlsZS11cGxvYWQtZXJyb3ItbXNnJyk7XG4gICAgICB2YXIgJGZpbGVFbCA9ICRzdWNjZXNzV3JhcC5maW5kKCcudy1maWxlLXVwbG9hZC1maWxlJyk7XG4gICAgICB2YXIgJHJlbW92ZUVsID0gJHN1Y2Nlc3NXcmFwLmZpbmQoJy53LWZpbGUtcmVtb3ZlLWxpbmsnKTtcbiAgICAgIHZhciAkZmlsZU5hbWVFbCA9ICRmaWxlRWwuZmluZCgnLnctZmlsZS11cGxvYWQtZmlsZS1uYW1lJyk7XG5cbiAgICAgIHZhciBzaXplRXJyTXNnID0gJGVycm9yTXNnRWwuYXR0cignZGF0YS13LXNpemUtZXJyb3InKTtcbiAgICAgIHZhciB0eXBlRXJyTXNnID0gJGVycm9yTXNnRWwuYXR0cignZGF0YS13LXR5cGUtZXJyb3InKTtcbiAgICAgIHZhciBnZW5lcmljRXJyTXNnID0gJGVycm9yTXNnRWwuYXR0cignZGF0YS13LWdlbmVyaWMtZXJyb3InKTtcblxuICAgICAgLy8gQWNjZXNzaWJpbGl0eSBmaXhlc1xuICAgICAgLy8gVGhlIGZpbGUgdXBsb2FkIElucHV0IGlzIG5vdCBzdHlsYWJsZSBieSB0aGUgZGVzaWduZXIsIHNvIHdlIGFyZVxuICAgICAgLy8gZ29pbmcgdG8gcHJldGVuZCB0aGUgTGFiZWwgaXMgdGhlIGlucHV0LiDCr1xcXyjjg4QpXy/Cr1xuICAgICAgaWYgKCFpbkFwcCkge1xuICAgICAgICAkbGFiZWwub24oJ2NsaWNrIGtleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGlmIChlLnR5cGUgPT09ICdrZXlkb3duJyAmJiBlLndoaWNoICE9PSAxMyAmJiBlLndoaWNoICE9PSAzMikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAkaW5wdXQuY2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEJvdGggb2YgdGhlc2UgYXJlIGFkZGVkIHRocm91Z2ggQ1NTXG4gICAgICAkbGFiZWwuZmluZCgnLnctaWNvbi1maWxlLXVwbG9hZC1pY29uJykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgJHJlbW92ZUVsLmZpbmQoJy53LWljb24tZmlsZS11cGxvYWQtcmVtb3ZlJykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICBpZiAoIWluQXBwKSB7XG4gICAgICAgICRyZW1vdmVFbC5vbignY2xpY2sga2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKGUudHlwZSA9PT0gJ2tleWRvd24nKSB7XG4gICAgICAgICAgICBpZiAoZS53aGljaCAhPT0gMTMgJiYgZS53aGljaCAhPT0gMzIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJGlucHV0LnJlbW92ZUF0dHIoJ2RhdGEtdmFsdWUnKTtcbiAgICAgICAgICAkaW5wdXQudmFsKCcnKTtcbiAgICAgICAgICAkZmlsZU5hbWVFbC5odG1sKCcnKTtcbiAgICAgICAgICAkZGVmYXVsdFdyYXAudG9nZ2xlKHRydWUpO1xuICAgICAgICAgICRzdWNjZXNzV3JhcC50b2dnbGUoZmFsc2UpO1xuICAgICAgICAgICRsYWJlbC5mb2N1cygpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkaW5wdXQub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZmlsZSA9IGUudGFyZ2V0ICYmIGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICAgIGlmICghZmlsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFNob3cgdXBsb2FkaW5nXG4gICAgICAgICAgJGRlZmF1bHRXcmFwLnRvZ2dsZShmYWxzZSk7XG4gICAgICAgICAgJGVycm9yV3JhcC50b2dnbGUoZmFsc2UpO1xuICAgICAgICAgICR1cGxvYWRpbmdXcmFwLnRvZ2dsZSh0cnVlKTtcbiAgICAgICAgICAkdXBsb2FkaW5nV3JhcC5mb2N1cygpO1xuXG4gICAgICAgICAgLy8gU2V0IGZpbGVuYW1lXG4gICAgICAgICAgJGZpbGVOYW1lRWwudGV4dChmaWxlLm5hbWUpO1xuXG4gICAgICAgICAgLy8gRGlzYWJsZSBzdWJtaXQgYnV0dG9uXG4gICAgICAgICAgaWYgKCFpc1VwbG9hZGluZygpKSB7XG4gICAgICAgICAgICBkaXNhYmxlQnRuKGZvcm0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtLmZpbGVVcGxvYWRzW2ldLnVwbG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgICBzaWduRmlsZShmaWxlLCBhZnRlclNpZ24pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZXR0aW5nIGlucHV0IHdpZHRoIDFweCBhbmQgaGVpZ2h0IGVxdWFsIGxhYmVsXG4gICAgICAgIC8vIFRoaXMgaXMgc28gdGhlIGJyb3dzZXIgcmVxdWlyZWQgZXJyb3Igd2lsbCBzaG93IHVwXG4gICAgICAgIHZhciBoZWlnaHQgPSAkbGFiZWwub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgJGlucHV0LmhlaWdodChoZWlnaHQpO1xuICAgICAgICAkaW5wdXQud2lkdGgoMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkaW5wdXQub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkbGFiZWwub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkbGFiZWxDaGlsZHJlbi5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHBhcnNlRXJyb3IoZXJyKSB7XG4gICAgICAgIHZhciBlcnJvck1zZyA9IGVyci5yZXNwb25zZUpTT04gJiYgZXJyLnJlc3BvbnNlSlNPTi5tc2c7XG4gICAgICAgIHZhciB1c2VyRXJyb3IgPSBnZW5lcmljRXJyTXNnO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdHlwZW9mIGVycm9yTXNnID09PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIGVycm9yTXNnLmluZGV4T2YoJ0ludmFsaWRGaWxlVHlwZUVycm9yJykgPT09IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgdXNlckVycm9yID0gdHlwZUVyck1zZztcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICB0eXBlb2YgZXJyb3JNc2cgPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgZXJyb3JNc2cuaW5kZXhPZignTWF4RmlsZVNpemVFcnJvcicpID09PSAwXG4gICAgICAgICkge1xuICAgICAgICAgIHVzZXJFcnJvciA9IHNpemVFcnJNc2c7XG4gICAgICAgIH1cblxuICAgICAgICAkZXJyb3JNc2dFbC50ZXh0KHVzZXJFcnJvcik7XG5cbiAgICAgICAgJGlucHV0LnJlbW92ZUF0dHIoJ2RhdGEtdmFsdWUnKTtcbiAgICAgICAgJGlucHV0LnZhbCgnJyk7XG4gICAgICAgICR1cGxvYWRpbmdXcmFwLnRvZ2dsZShmYWxzZSk7XG4gICAgICAgICRkZWZhdWx0V3JhcC50b2dnbGUodHJ1ZSk7XG4gICAgICAgICRlcnJvcldyYXAudG9nZ2xlKHRydWUpO1xuICAgICAgICAkZXJyb3JXcmFwLmZvY3VzKCk7XG5cbiAgICAgICAgZm9ybS5maWxlVXBsb2Fkc1tpXS51cGxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKCFpc1VwbG9hZGluZygpKSB7XG4gICAgICAgICAgcmVzZXQoZm9ybSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYWZ0ZXJTaWduKGVyciwgZGF0YSkge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlRXJyb3IoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmaWxlTmFtZSA9IGRhdGEuZmlsZU5hbWU7XG4gICAgICAgIHZhciBwb3N0RGF0YSA9IGRhdGEucG9zdERhdGE7XG4gICAgICAgIHZhciBmaWxlSWQgPSBkYXRhLmZpbGVJZDtcbiAgICAgICAgdmFyIHMzVXJsID0gZGF0YS5zM1VybDtcbiAgICAgICAgJGlucHV0LmF0dHIoJ2RhdGEtdmFsdWUnLCBmaWxlSWQpO1xuXG4gICAgICAgIHVwbG9hZFMzKHMzVXJsLCBwb3N0RGF0YSwgZmlsZSwgZmlsZU5hbWUsIGFmdGVyVXBsb2FkKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYWZ0ZXJVcGxvYWQoZXJyKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VFcnJvcihlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2hvdyBzdWNjZXNzXG4gICAgICAgICR1cGxvYWRpbmdXcmFwLnRvZ2dsZShmYWxzZSk7XG4gICAgICAgICRzdWNjZXNzV3JhcC5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgICAgICRzdWNjZXNzV3JhcC5mb2N1cygpO1xuXG4gICAgICAgIGZvcm0uZmlsZVVwbG9hZHNbaV0udXBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmICghaXNVcGxvYWRpbmcoKSkge1xuICAgICAgICAgIHJlc2V0KGZvcm0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGlzVXBsb2FkaW5nKCkge1xuICAgICAgICB2YXIgdXBsb2FkcyA9IChmb3JtLmZpbGVVcGxvYWRzICYmIGZvcm0uZmlsZVVwbG9hZHMudG9BcnJheSgpKSB8fCBbXTtcbiAgICAgICAgcmV0dXJuIHVwbG9hZHMuc29tZShmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUudXBsb2FkaW5nO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaWduRmlsZShmaWxlLCBjYikge1xuICAgICAgdmFyIHBheWxvYWQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgICB9KTtcblxuICAgICAgJC5hamF4KHt0eXBlOiAnR0VUJywgdXJsOiBgJHtzaWduRmlsZVVybH0/JHtwYXlsb2FkfWAsIGNyb3NzRG9tYWluOiB0cnVlfSlcbiAgICAgICAgLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZhaWwoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGNiKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwbG9hZFMzKHVybCwgZGF0YSwgZmlsZSwgZmlsZU5hbWUsIGNiKSB7XG4gICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZvciAodmFyIGsgaW4gZGF0YSkge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoaywgZGF0YVtrXSk7XG4gICAgICB9XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBmaWxlTmFtZSk7XG5cbiAgICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgdXJsLFxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICB9KVxuICAgICAgICAuZG9uZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2IobnVsbCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5mYWlsKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBjYihlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBFeHBvcnQgbW9kdWxlXG4gICAgcmV0dXJuIGFwaTtcbiAgfSlcbik7XG4iXSwibmFtZXMiOlsiV2ViZmxvdyIsInJlcXVpcmUiLCJyZW5kZXJUdXJuc3RpbGVDYXB0Y2hhIiwic2l0ZUtleSIsImZvcm1FbGVtZW50IiwiY2IiLCJlcnJvckNhbGxiYWNrIiwiY2FwdGNoYUNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwidHVybnN0aWxlIiwicmVuZGVyIiwic2l0ZWtleSIsImNhbGxiYWNrIiwidG9rZW4iLCJkZWZpbmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiJCIsIl8iLCJUVVJOU1RJTEVfTE9BREVEX0VWRU5UIiwiYXBpIiwiJGRvYyIsIiRmb3JtcyIsImxvYyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmV0cm8iLCJYRG9tYWluUmVxdWVzdCIsImF0b2IiLCJuYW1lc3BhY2UiLCJzaXRlSWQiLCJlbWFpbEZpZWxkIiwiZW1haWxWYWx1ZSIsImFsZXJ0IiwiaW5BcHAiLCJlbnYiLCJsaXN0ZW5pbmciLCJmb3JtVXJsIiwic2lnbkZpbGVVcmwiLCJ0dXJuc3RpbGVTaXRlS2V5IiwiZmluZCIsImRhdGEiLCJ0dXJuc3RpbGVTY3JpcHQiLCJjaGltcFJlZ2V4IiwiZGlzY29ubmVjdGVkIiwiZGVib3VuY2UiLCJjb25zb2xlIiwid2FybiIsInJlYWR5IiwiZGVzaWduIiwicHJldmlldyIsImxvYWRUdXJuc3RpbGVTY3JpcHQiLCJpbml0IiwiYWRkTGlzdGVuZXJzIiwiYXR0ciIsIldFQkZMT1dfRk9STV9BUElfSE9TVCIsImluZGV4T2YiLCJyZXBsYWNlIiwiV0VCRkxPV19GT1JNX09MRElFX0hPU1QiLCJsZW5ndGgiLCJlYWNoIiwiYnVpbGQiLCJkb0xvYWQiLCJzcmMiLCJoZWFkIiwib25sb2FkIiwidHJpZ2dlciIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZXRUaW1lb3V0IiwiaSIsImVsIiwiJGVsIiwiZm9ybSIsInJlc2V0Iiwid3JhcCIsImNsb3Nlc3QiLCJkb25lIiwiZmFpbCIsImZpbGVVcGxvYWRzIiwiaiIsImluaXRGaWxlVXBsb2FkIiwiaXMiLCJzZXRCdXR0b25Ub1R1cm5zdGlsZUxvYWRpbmciLCJzZXRGb3JtTG9hZGluZ1N0YXRlIiwib24iLCJkb1JlbmRlciIsInR1cm5zdGlsZVRva2VuIiwiYnRuIiwicHJvcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJkaXNjb25uZWN0Iiwicm9vdE1hcmdpbiIsIm9ic2VydmUiLCJmb3JtTmFtZSIsImFjdGlvbiIsImhhbmRsZXIiLCJyZWRpcmVjdCIsInRlc3QiLCJzdWJtaXRNYWlsQ2hpbXAiLCJXRUJGTE9XX0VYUE9SVF9NT0RFIiwiZXhwb3J0ZWRTdWJtaXRXZWJmbG93IiwiaG9zdGVkU3VibWl0SGFuZGxlciIsImRlZmF1bHQiLCJjb2xsZWN0RW50ZXJwcmlzZVRyYWNraW5nQ29va2llcyIsInByZXZlbnREZWZhdWx0IiwiZmluZEZpZWxkcyIsImZpbmRGaWxlVXBsb2FkcyIsImRpc2FibGVCdG4iLCJhZnRlclN1Ym1pdCIsImV2dCIsIkNIRUNLQk9YX0NMQVNTX05BTUUiLCJSQURJT19JTlBVVF9DTEFTU19OQU1FIiwiQ0hFQ0tFRF9DTEFTUyIsIkZPQ1VTRURfQ0xBU1MiLCJGT0NVU0VEX1ZJU0lCTEVfQ0xBU1MiLCJmb2N1c1Zpc2libGVTZWxlY3RvcnMiLCJDVVNUT01fQ09OVFJPTFMiLCJ0YXJnZXQiLCJzaWJsaW5ncyIsInRvZ2dsZUNsYXNzIiwibmFtZSIsIm1hcCIsInJlbW92ZUNsYXNzIiwiJHRhcmdldCIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJmb3JFYWNoIiwiY29udHJvbFR5cGUiLCJjdXN0b21Db250cm9sQ2xhc3NOYW1lIiwiZmlsdGVyIiwid2FpdCIsInN1Y2Nlc3MiLCJpc0Rpc2FibGVkIiwiQm9vbGVhbiIsImxhYmVsIiwidmFsIiwiJGZvcm1FbCIsImlzTG9hZGluZyIsIiR3cmFwcGVyIiwicmVzdWx0Iiwic3RhdHVzIiwiZmllbGQiLCJ0eXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidmFsdWUiLCJ0cmltIiwiZ2V0U3RhdHVzIiwidHJhY2tpbmdDb29raWVOYW1lTWFwIiwiX21rdG9fdHJrIiwiY29va2llcyIsImNvb2tpZSIsInNwbGl0IiwicmVkdWNlIiwiYWNjIiwic3BsaXRDb29raWUiLCJtYXBwZWROYW1lIiwic2xpY2UiLCJqb2luIiwicGF5bG9hZCIsImhyZWYiLCJmdWxsTmFtZSIsImtleSIsIkVNQUlMIiwiRk5BTUUiLCJMTkFNRSIsInVybCIsInVzZXJJZCIsInN1YnN0cmluZyIsImxpc3RJZCIsImFqYXgiLCJkYXRhVHlwZSIsInJlc3AiLCJtc2ciLCJpbmZvIiwidG9nZ2xlIiwiZm9jdXMiLCJmaWxlIiwiJGRlZmF1bHRXcmFwIiwiJHVwbG9hZGluZ1dyYXAiLCIkc3VjY2Vzc1dyYXAiLCIkZXJyb3JXcmFwIiwiJGlucHV0IiwiJGxhYmVsIiwiJGxhYmVsQ2hpbGRyZW4iLCJjaGlsZHJlbiIsIiRlcnJvck1zZ0VsIiwiJGZpbGVFbCIsIiRyZW1vdmVFbCIsIiRmaWxlTmFtZUVsIiwic2l6ZUVyck1zZyIsInR5cGVFcnJNc2ciLCJnZW5lcmljRXJyTXNnIiwiZSIsIndoaWNoIiwiY2xpY2siLCJyZW1vdmVBdHRyIiwiaHRtbCIsImZpbGVzIiwidGV4dCIsImlzVXBsb2FkaW5nIiwidXBsb2FkaW5nIiwic2lnbkZpbGUiLCJhZnRlclNpZ24iLCJoZWlnaHQiLCJvdXRlckhlaWdodCIsIndpZHRoIiwicGFyc2VFcnJvciIsImVyciIsImVycm9yTXNnIiwicmVzcG9uc2VKU09OIiwidXNlckVycm9yIiwiZmlsZU5hbWUiLCJwb3N0RGF0YSIsImZpbGVJZCIsInMzVXJsIiwidXBsb2FkUzMiLCJhZnRlclVwbG9hZCIsImNzcyIsInVwbG9hZHMiLCJ0b0FycmF5Iiwic29tZSIsIlVSTFNlYXJjaFBhcmFtcyIsInNpemUiLCJjcm9zc0RvbWFpbiIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJrIiwiYXBwZW5kIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBUUEsR0FF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

}),

}]);