"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

// Classes WordPress/Astra/Elementor put on <body> for this exact page
// (wp-page-id-19474, template "Elementor Canvas"). Several of the ported
// Astra CSS rules are keyed off this combination — most importantly
// `ast-page-builder-template.ast-no-sidebar`, which is what makes Astra
// render `.ast-container` as a plain block instead of its normal two-column
// `display:flex` sidebar layout. Without it, `.ast-container` stays a flex
// container and the Elementor page root (a flex item with the browser's
// default `min-width:auto`) refuses to shrink below its content's natural
// width, ballooning to several thousand px and pushing everything off the
// right edge of the viewport.
const BODY_CLASSES = [
  "wp-singular",
  "page-template-default",
  "page",
  "page-id-19474",
  "wp-custom-logo",
  "wp-theme-astra",
  "wp-child-theme-astra-child",
  "ast-page-builder-template",
  "ast-no-sidebar",
  "astra-4.13.0",
  "ast-replace-site-logo-transparent",
  "ast-inherit-site-logo-transparent",
  "ast-theme-transparent-header",
  "ast-hfb-header",
  "ast-normal-title-enabled",
  "elementor-default",
  "elementor-template-full-width",
  "elementor-kit-6",
  "elementor-page",
  "elementor-page-19474",
];

const STYLESHEETS = [
  // Same Google Fonts the live page loads (Albert Sans / Fraunces / Onest) —
  // required because the ported WP/Elementor CSS below references these
  // family names directly.
  "https://fonts.googleapis.com/css?family=Albert%20Sans%3A400%2C%2C500%7CFraunces%3A400%2C%2C600%7CFraunces%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CAlbert%20Sans%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7COnest%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=swap",
  // Same order the live page enqueues these (later files legitimately win
  // cascade ties against earlier ones, so keep this order intact).
  "/landing-page/css/wp-img-auto-sizes-inline.css",
  "/landing-page/css/astra-main.css",
  // Astra theme's Customizer-generated CSS — this is where the site's
  // custom Elementor global colors (e.g. --e-global-color-astglobalcolor3,
  // used by the hero heading) actually get defined. Without it, every
  // element referencing one of those vars silently fell back to an
  // inherited default color instead of its real one.
  "/landing-page/css/astra-theme-inline.css",
  "/landing-page/css/astra-menu-animation.css",
  "/landing-page/css/wp-components.css",
  "/landing-page/css/wp-preferences.css",
  "/landing-page/css/wp-block-editor.css",
  // WordPress core "global styles" (block editor defaults).
  "/landing-page/css/wp-global-styles-inline.css",
  "/landing-page/css/contact-form-7.css",
  "/landing-page/css/astra-cf7-compat.css",
  "/landing-page/css/popup-maker.css",
  "/landing-page/css/astra-child.css",
  "/landing-page/css/elementor-frontend.css",
  "/landing-page/css/kit-global.css",
  "/landing-page/css/elementor-widget-image.css",
  "/landing-page/css/elementor-widget-nav-menu.css",
  "/landing-page/css/elementor-sticky.css",
  "/landing-page/css/elementor-widget-heading.css",
  "/landing-page/css/elementor-widget-image-box.css",
  "/landing-page/css/swiper.css",
  "/landing-page/css/elementor-e-swiper.css",
  "/landing-page/css/elementor-widget-image-carousel.css",
  "/landing-page/css/elementor-widget-nested-accordion.css",
  "/landing-page/css/elementor-widget-icon-list.css",
  "/landing-page/css/elementor-widget-nested-tabs.css",
  "/landing-page/css/anim-fadeIn.css",
  "/landing-page/css/elementor-widget-icon-box.css",
  "/landing-page/css/elementor-widget-nested-carousel.css",
  "/landing-page/css/elementor-widget-spacer.css",
  "/landing-page/css/anim-fadeInDown.css",
  "/landing-page/css/page-landing.css",
  // Site-wide custom CSS (an unnamed <style> block on the live page) —
  // defines .cus_italic_style, .global-pill-list and other custom classes
  // referenced directly in content.html.
  "/landing-page/css/elementor-custom-global-inline.css",
  "/landing-page/css/elementor-lazyload-inline.css",
];

const CORE_SCRIPTS = [
  "/landing-page/js/jquery.min.js",
  "/landing-page/js/wp-hooks.min.js",
  "/landing-page/js/wp-i18n.min.js",
  "/landing-page/js/jquery-ui-core.min.js",
];

/**
 * Boots the page with the same vendor stack the live site uses (jQuery,
 * Elementor + Elementor Pro frontend.js, Swiper, Popup Maker — all bundled
 * together by WP Rocket into one file, copied verbatim to
 * public/landing-page/js/vendor-bundle.js) so entrance animations, the
 * sticky header, image carousels and the enquiry popups behave exactly like
 * the original. Any endpoints that pointed at the live WordPress backend
 * (admin-ajax.php, the WP REST API) are blanked out below — see
 * initFormHandoff, which submits the popup/contact forms to this project's
 * own /api/enquiry route instead.
 */
function loadScriptsSequentially(srcs: string[], onDone: () => void) {
  let i = 0;
  function next() {
    if (i >= srcs.length) {
      onDone();
      return;
    }
    const s = document.createElement("script");
    s.src = srcs[i];
    s.async = false;
    s.onload = () => {
      i += 1;
      next();
    };
    s.onerror = () => {
      i += 1;
      next();
    };
    document.body.appendChild(s);
  }
  next();
}

function setLocalizedConfig() {
  const w = window as unknown as Record<string, unknown>;

  w.astra = {
    break_point: "1024",
    isRtl: "",
    is_scroll_to_id: "1",
    is_scroll_to_top: "",
    is_header_footer_builder_active: "1",
    responsive_cart_click: "flyout",
    is_dark_palette: "",
  };

  w.pum_vars = {
    version: "1.22.0",
    pm_dir_url: "/landing-page/",
    ajaxurl: "",
    restapi: "",
    rest_nonce: null,
    default_theme: "19048",
    debug_mode: "",
    disable_tracking: "1",
    home_url: "/",
    message_position: "top",
    core_sub_forms_enabled: "1",
    popups: [],
    cookie_domain: "",
    paramNames: { popup_id: "pid", cta: "cta", notrack: "notrack" },
    analytics_enabled: "",
    analytics_route: "analytics",
    analytics_api: "",
  };
  w.pum_sub_vars = { ajaxurl: "", message_position: "top" };
  w.pum_popups = {
    "pum-20836": {
      triggers: [{ type: "auto_open", settings: { cookie_name: "", delay: "999999" } }],
      cookies: [],
      theme_id: "19049",
      size: "tiny",
      custom_width: "640px",
      custom_height: "380px",
      animation_type: "fade",
      animation_speed: "350",
      animation_origin: "center top",
      location: "center",
      position_fixed: true,
      zindex: "1999999999",
      close_on_form_submission: true,
      close_on_form_submission_delay: "10000",
      theme_slug: "lightbox",
      id: 20836,
      slug: "enquiry-autopopup",
    },
    "pum-19763": {
      triggers: [{ type: "click_open", settings: { cookie_name: "", extra_selectors: ".floorplan-popup" } }],
      cookies: [],
      theme_id: "19049",
      size: "tiny",
      custom_width: "640px",
      custom_height: "380px",
      animation_type: "fade",
      animation_speed: "350",
      animation_origin: "center top",
      location: "center",
      position_fixed: true,
      zindex: "1999999999",
      close_on_form_submission: true,
      close_on_form_submission_delay: "10000",
      theme_slug: "lightbox",
      id: 19763,
      slug: "lp-popup-floor-plan-brochure",
    },
    "pum-19057": {
      triggers: [
        { type: "click_open", settings: { cookie_name: "", extra_selectors: ".open-popup" } },
        { type: "auto_open", settings: { cookie_name: "", delay: "5000" } },
      ],
      cookies: [],
      theme_id: "19049",
      size: "tiny",
      custom_width: "640px",
      custom_height: "380px",
      animation_type: "fade",
      animation_speed: "350",
      animation_origin: "center top",
      location: "center",
      position_fixed: true,
      zindex: "1999999999",
      close_on_form_submission: true,
      close_on_form_submission_delay: "10000",
      theme_slug: "lightbox",
      id: 19057,
      slug: "download-brochure",
    },
  };

  w.elementorFrontendConfig = {
    environmentMode: { edit: false, wpPreview: false, isScriptDebug: false },
    i18n: {
      shareOnFacebook: "Share on Facebook",
      shareOnTwitter: "Share on Twitter",
      pinIt: "Pin it",
      download: "Download",
      downloadImage: "Download image",
      fullscreen: "Fullscreen",
      zoom: "Zoom",
      share: "Share",
      playVideo: "Play Video",
      previous: "Previous",
      next: "Next",
      close: "Close",
      a11yCarouselPrevSlideMessage: "Previous slide",
      a11yCarouselNextSlideMessage: "Next slide",
      a11yCarouselFirstSlideMessage: "This is the first slide",
      a11yCarouselLastSlideMessage: "This is the last slide",
      a11yCarouselPaginationBulletMessage: "Go to slide",
    },
    is_rtl: false,
    breakpoints: { xs: 0, sm: 480, md: 768, lg: 1025, xl: 1440, xxl: 1600 },
    responsive: {
      breakpoints: {
        mobile: { label: "Mobile Portrait", value: 767, default_value: 767, direction: "max", is_enabled: true },
        mobile_extra: { label: "Mobile Landscape", value: 880, default_value: 880, direction: "max", is_enabled: false },
        tablet: { label: "Tablet Portrait", value: 1024, default_value: 1024, direction: "max", is_enabled: true },
        tablet_extra: { label: "Tablet Landscape", value: 1200, default_value: 1200, direction: "max", is_enabled: false },
        laptop: { label: "Laptop", value: 1366, default_value: 1366, direction: "max", is_enabled: false },
        widescreen: { label: "Widescreen", value: 2400, default_value: 2400, direction: "min", is_enabled: false },
      },
      hasCustomBreakpoints: false,
    },
    version: "4.0.3",
    is_static: false,
    experimentalFeatures: { e_font_icon_svg: true, container: true },
    urls: { assets: "/landing-page/", ajaxurl: "", uploadUrl: "/landing-page/img" },
    nonces: {},
    swiperClass: "swiper",
    settings: { page: [], editorPreferences: [] },
    kit: {
      body_background_background: "classic",
      active_breakpoints: ["viewport_mobile", "viewport_tablet"],
      global_image_lightbox: "yes",
      lightbox_enable_counter: "yes",
      lightbox_enable_fullscreen: "yes",
      lightbox_enable_zoom: "yes",
      lightbox_enable_share: "yes",
      lightbox_title_src: "title",
      lightbox_description_src: "description",
    },
    post: { id: 19474, title: "Apartments for Sale in Kudlu Gate, Hosur Road", excerpt: "", featuredImage: false },
  };

  w.ElementorProFrontendConfig = {
    ajaxurl: "",
    nonce: "",
    urls: { assets: "/landing-page/", rest: "" },
    settings: { lazy_load_background_images: false },
    popup: { hasPopUps: true },
    shareButtonsNetworks: {},
    facebook_sdk: { lang: "en_US", app_id: "" },
    lottie: { defaultAnimationUrl: "" },
  };
}

/**
 * The vendor bundle includes Contact Form 7's own submit handler, which
 * would try to POST to the (nonexistent, here) WP REST API. We intercept
 * submit on the form itself — during the "at target" phase, before it can
 * bubble up to any document-level listener CF7 registered — and hand off to
 * this project's own /api/enquiry route, then reproduce CF7's success-state
 * markup swap (#popup-form -> #popup-msg) so the UI behaves identically.
 */
function initFormHandoff(root: HTMLElement) {
  const forms = root.querySelectorAll<HTMLFormElement>("form.wpcf7-form");
  forms.forEach((form) => {
    form.addEventListener(
      "submit",
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        if ((e as unknown as { stopImmediatePropagation?: () => void }).stopImmediatePropagation) {
          (e as unknown as { stopImmediatePropagation: () => void }).stopImmediatePropagation();
        }

        const wrapper = form.closest(".cf7-form-wrapper") ?? form.parentElement;
        const container = wrapper?.parentElement;
        const successEl = container?.querySelector<HTMLElement>("#popup-msg, .cf7-success-message");

        const submitBtn = form.querySelector<HTMLInputElement>('input[type="submit"]');
        if (submitBtn) submitBtn.disabled = true;

        const data = new FormData(form);
        const payload: Record<string, string> = {};
        data.forEach((value, key) => {
          if (key === "checkbox-accept[]") return;
          payload[key] = String(value);
        });
        payload["checkbox-accept"] = data.get("checkbox-accept[]") ? "1" : "";

        fetch("/api/enquiry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
          .catch(() => null)
          .finally(() => {
            if (submitBtn) submitBtn.disabled = false;
            form.reset();
            if (wrapper) (wrapper as HTMLElement).style.display = "none";
            if (successEl) successEl.style.display = "block";
          });
      },
      true,
    );
  });
}

/** Elementor's own lazy-load CSS (elementor-lazyload-inline.css) hides every
 * section's background-image with `!important` — `.e-con.e-parent:not(.e-
 * lazyloaded):not(.e-no-lazyload)` — until JS adds `.e-lazyloaded` as that
 * section scrolls near the viewport. On the live site elementor-frontend.js
 * owns that marking; our copy of the vendor bundle doesn't reproduce it, so
 * every section's background silently stayed hidden. Since this mirror
 * doesn't need progressive image loading, just mark every section
 * pre-revealed up front instead of reimplementing the real scroll trigger. */
function initLazyloadFallback(root: HTMLElement) {
  root.querySelectorAll(".e-con.e-parent").forEach((el) => el.classList.add("e-lazyloaded"));
}

/**
 * Elementor's "Nested Tabs" widget (used for the Gallery Interior/Exterior
 * switcher) normally gets its click-to-switch behavior from an Elementor Pro
 * frontend module that isn't present in our copy of the vendor bundle, so
 * clicking a tab did nothing. This reproduces just the show/hide + a11y
 * bookkeeping: on click, mark the clicked `.e-n-tab-title` selected within
 * its own `.e-n-tabs-heading` group, and toggle `.e-active` on the matching
 * `.e-n-tabs-content` panel (that's the class the ported CSS keys visibility
 * off — see `.e-n-tabs-content > .e-con:not(.e-active){display:none}` in
 * elementor-widget-nested-tabs.css).
 */
function initNestedTabsFallback(root: HTMLElement) {
  root.addEventListener("click", (e) => {
    const button = (e.target as HTMLElement).closest<HTMLElement>(".e-n-tab-title");
    if (!button || !root.contains(button)) return;

    const heading = button.closest(".e-n-tabs-heading");
    const tabsRoot = button.closest(".e-n-tabs");
    const content = tabsRoot?.querySelector(".e-n-tabs-content");
    if (!heading || !content) return;

    heading.querySelectorAll<HTMLElement>(".e-n-tab-title").forEach((btn) => {
      const selected = btn === button;
      btn.setAttribute("aria-selected", String(selected));
      btn.setAttribute("tabindex", selected ? "0" : "-1");
    });

    const targetId = button.getAttribute("aria-controls");
    content.querySelectorAll<HTMLElement>(":scope > [role='tabpanel']").forEach((panel) => {
      panel.classList.toggle("e-active", panel.id === targetId);
    });
  });
}

/** Elementor's own entrance-animation trigger (IntersectionObserver-based
 * approximation of what elementor-frontend.js's waypoints module does):
 * reveal any `.elementor-invisible` element with its configured animation
 * class once it scrolls into view. The real vendor bundle normally owns
 * this; this is a safety net in case it hasn't attached yet when an element
 * is already in view on load. */
function initEntranceAnimationFallback(root: HTMLElement) {
  const targets = root.querySelectorAll<HTMLElement>(".elementor-invisible[data-settings]");
  if (!targets.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        if (!el.classList.contains("elementor-invisible")) return;
        let settings: { _animation?: string; _animation_delay?: number } = {};
        try {
          settings = JSON.parse(el.getAttribute("data-settings") || "{}");
        } catch {
          /* ignore */
        }
        const anim = settings._animation || "fadeIn";
        const delay = settings._animation_delay || 0;
        window.setTimeout(() => {
          el.classList.remove("elementor-invisible");
          el.classList.add("animated", anim);
        }, delay);
        io.unobserve(el);
      });
    },
    { threshold: 0.1 },
  );
  targets.forEach((el) => io.observe(el));
}

export function LandingPageClient({ html }: { html: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bootedRef = useRef(false);

  // Runs before paint so the page never flashes with the broken
  // (sidebar-flex) layout, or with every section's background hidden, on
  // first frame.
  useLayoutEffect(() => {
    document.body.classList.add(...BODY_CLASSES);
    if (containerRef.current) initLazyloadFallback(containerRef.current);
    return () => {
      document.body.classList.remove(...BODY_CLASSES);
    };
  }, []);

  useEffect(() => {
    if (bootedRef.current) return;
    bootedRef.current = true;

    const root = containerRef.current;
    if (root) {
      initFormHandoff(root);
      initEntranceAnimationFallback(root);
      initNestedTabsFallback(root);
    }

    loadScriptsSequentially(CORE_SCRIPTS, () => {
      setLocalizedConfig();
      loadScriptsSequentially(["/landing-page/js/vendor-bundle.js"], () => {
        // Vendor bundle (jQuery-based) has now wired up sticky header,
        // entrance animations, Swiper carousels, menu toggle and the
        // enquiry popups against the DOM above.
      });
    });
  }, []);

  return (
    <>
      {STYLESHEETS.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      {/* The live site's theme-header scroll script (bundled into
          vendor-bundle.js) unconditionally does
          `document.querySelector('.site-header').classList...` on every
          scroll — on this template the theme header is disabled in favor of
          the custom `.landing-header` above, so `.site-header` is null and
          that line throws on the production site too. This inert, hidden
          stand-in just gives the selector something to find so the (harmless
          but noisy) upstream error doesn't spam the console here. */}
      <div className="site-header" style={{ display: "none" }} aria-hidden="true" />
      <div
        ref={containerRef}
        className="landing-page-root"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
}
