/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var e = {
      807: (e) => {
        var t = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
        e.exports = t;
      },
      913: function (e) {
        e.exports = (function () {
          "use strict";
          var e = function () {
              return (
                (e =
                  Object.assign ||
                  function (e) {
                    for (var t, i = 1, s = arguments.length; i < s; i++)
                      for (var r in (t = arguments[i]))
                        Object.prototype.hasOwnProperty.call(t, r) &&
                          (e[r] = t[r]);
                    return e;
                  }),
                e.apply(this, arguments)
              );
            },
            t = {
              afterAppendSlide: "lgAfterAppendSlide",
              init: "lgInit",
              hasVideo: "lgHasVideo",
              containerResize: "lgContainerResize",
              updateSlides: "lgUpdateSlides",
              afterAppendSubHtml: "lgAfterAppendSubHtml",
              beforeOpen: "lgBeforeOpen",
              afterOpen: "lgAfterOpen",
              slideItemLoad: "lgSlideItemLoad",
              beforeSlide: "lgBeforeSlide",
              afterSlide: "lgAfterSlide",
              posterClick: "lgPosterClick",
              dragStart: "lgDragStart",
              dragMove: "lgDragMove",
              dragEnd: "lgDragEnd",
              beforeNextSlide: "lgBeforeNextSlide",
              beforePrevSlide: "lgBeforePrevSlide",
              beforeClose: "lgBeforeClose",
              afterClose: "lgAfterClose",
              rotateLeft: "lgRotateLeft",
              rotateRight: "lgRotateRight",
              flipHorizontal: "lgFlipHorizontal",
              flipVertical: "lgFlipVertical",
              autoplay: "lgAutoplay",
              autoplayStart: "lgAutoplayStart",
              autoplayStop: "lgAutoplayStop",
            },
            i = { pager: !0 };
          return (function () {
            function s(t, s) {
              return (
                (this.core = t),
                (this.$LG = s),
                (this.settings = e(e({}, i), this.core.settings)),
                this
              );
            }
            return (
              (s.prototype.getPagerHtml = function (e) {
                for (var t = "", i = 0; i < e.length; i++)
                  t +=
                    '<span  data-lg-item-id="' +
                    i +
                    '" class="lg-pager-cont"> \n                    <span data-lg-item-id="' +
                    i +
                    '" class="lg-pager"></span>\n                    <div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' +
                    e[i].thumb +
                    '" /></div>\n                    </span>';
                return t;
              }),
              (s.prototype.init = function () {
                var e = this;
                if (this.settings.pager) {
                  var i;
                  this.core.$lgComponents.prepend(
                    '<div class="lg-pager-outer"></div>',
                  );
                  var s = this.core.outer.find(".lg-pager-outer");
                  s.html(this.getPagerHtml(this.core.galleryItems)),
                    s.first().on("click.lg touchend.lg", function (t) {
                      var i = e.$LG(t.target);
                      if (i.hasAttribute("data-lg-item-id")) {
                        var s = parseInt(i.attr("data-lg-item-id"));
                        e.core.slide(s, !1, !0, !1);
                      }
                    }),
                    s.first().on("mouseover.lg", function () {
                      clearTimeout(i), s.addClass("lg-pager-hover");
                    }),
                    s.first().on("mouseout.lg", function () {
                      i = setTimeout(function () {
                        s.removeClass("lg-pager-hover");
                      });
                    }),
                    this.core.LGel.on(t.beforeSlide + ".pager", function (t) {
                      var i = t.detail.index;
                      e.manageActiveClass.call(e, i);
                    }),
                    this.core.LGel.on(t.updateSlides + ".pager", function () {
                      s.empty(),
                        s.html(e.getPagerHtml(e.core.galleryItems)),
                        e.manageActiveClass(e.core.index);
                    });
                }
              }),
              (s.prototype.manageActiveClass = function (e) {
                var t = this.core.outer.find(".lg-pager-cont");
                t.removeClass("lg-pager-active"),
                  t.eq(e).addClass("lg-pager-active");
              }),
              (s.prototype.destroy = function () {
                this.core.outer.find(".lg-pager-outer").remove(),
                  this.core.LGel.off(".lg.pager"),
                  this.core.LGel.off(".pager");
              }),
              s
            );
          })();
        })();
      },
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var s in i)
                      Object.prototype.hasOwnProperty.call(i, s) &&
                        (e[s] = i[s]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            i =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            s = t && "IntersectionObserver" in window,
            r = t && "classList" in document.createElement("p"),
            n = t && window.devicePixelRatio > 1,
            o = {
              elements_selector: ".lazy",
              container: i || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            l = function (t) {
              return e({}, o, t);
            },
            a = function (e, t) {
              var i,
                s = "LazyLoad::Initialized",
                r = new e(t);
              try {
                i = new CustomEvent(s, { detail: { instance: r } });
              } catch (e) {
                (i = document.createEvent("CustomEvent")).initCustomEvent(
                  s,
                  !1,
                  !1,
                  { instance: r },
                );
              }
              window.dispatchEvent(i);
            },
            c = "src",
            d = "srcset",
            u = "sizes",
            h = "poster",
            p = "llOriginalAttrs",
            f = "data",
            g = "loading",
            m = "loaded",
            v = "applied",
            b = "error",
            y = "native",
            w = "data-",
            S = "ll-status",
            x = function (e, t) {
              return e.getAttribute(w + t);
            },
            E = function (e) {
              return x(e, S);
            },
            C = function (e, t) {
              return (function (e, t, i) {
                var s = "data-ll-status";
                null !== i ? e.setAttribute(s, i) : e.removeAttribute(s);
              })(e, 0, t);
            },
            T = function (e) {
              return C(e, null);
            },
            A = function (e) {
              return null === E(e);
            },
            L = function (e) {
              return E(e) === y;
            },
            O = [g, m, v, b],
            I = function (e, t, i, s) {
              e &&
                "function" == typeof e &&
                (void 0 === s ? (void 0 === i ? e(t) : e(t, i)) : e(t, i, s));
            },
            M = function (e, t) {
              r
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            k = function (e, t) {
              r
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            _ = function (e) {
              return e.llTempImage;
            },
            P = function (e, t) {
              if (t) {
                var i = t._observer;
                i && i.unobserve(e);
              }
            },
            z = function (e, t) {
              e && (e.loadingCount += t);
            },
            D = function (e, t) {
              e && (e.toLoadCount = t);
            },
            N = function (e) {
              for (var t, i = [], s = 0; (t = e.children[s]); s += 1)
                "SOURCE" === t.tagName && i.push(t);
              return i;
            },
            V = function (e, t) {
              var i = e.parentNode;
              i && "PICTURE" === i.tagName && N(i).forEach(t);
            },
            H = function (e, t) {
              N(e).forEach(t);
            },
            G = [c],
            B = [c, h],
            W = [c, d, u],
            F = [f],
            R = function (e) {
              return !!e[p];
            },
            $ = function (e) {
              return e[p];
            },
            j = function (e) {
              return delete e[p];
            },
            q = function (e, t) {
              if (!R(e)) {
                var i = {};
                t.forEach(function (t) {
                  i[t] = e.getAttribute(t);
                }),
                  (e[p] = i);
              }
            },
            U = function (e, t) {
              if (R(e)) {
                var i = $(e);
                t.forEach(function (t) {
                  !(function (e, t, i) {
                    i ? e.setAttribute(t, i) : e.removeAttribute(t);
                  })(e, t, i[t]);
                });
              }
            },
            Y = function (e, t, i) {
              M(e, t.class_applied),
                C(e, v),
                i &&
                  (t.unobserve_completed && P(e, t),
                  I(t.callback_applied, e, i));
            },
            X = function (e, t, i) {
              M(e, t.class_loading),
                C(e, g),
                i && (z(i, 1), I(t.callback_loading, e, i));
            },
            K = function (e, t, i) {
              i && e.setAttribute(t, i);
            },
            Z = function (e, t) {
              K(e, u, x(e, t.data_sizes)),
                K(e, d, x(e, t.data_srcset)),
                K(e, c, x(e, t.data_src));
            },
            Q = {
              IMG: function (e, t) {
                V(e, function (e) {
                  q(e, W), Z(e, t);
                }),
                  q(e, W),
                  Z(e, t);
              },
              IFRAME: function (e, t) {
                q(e, G), K(e, c, x(e, t.data_src));
              },
              VIDEO: function (e, t) {
                H(e, function (e) {
                  q(e, G), K(e, c, x(e, t.data_src));
                }),
                  q(e, B),
                  K(e, h, x(e, t.data_poster)),
                  K(e, c, x(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                q(e, F), K(e, f, x(e, t.data_src));
              },
            },
            J = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            ee = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                I(e.callback_finish, t);
            },
            te = function (e, t, i) {
              e.addEventListener(t, i), (e.llEvLisnrs[t] = i);
            },
            ie = function (e, t, i) {
              e.removeEventListener(t, i);
            },
            se = function (e) {
              return !!e.llEvLisnrs;
            },
            re = function (e) {
              if (se(e)) {
                var t = e.llEvLisnrs;
                for (var i in t) {
                  var s = t[i];
                  ie(e, i, s);
                }
                delete e.llEvLisnrs;
              }
            },
            ne = function (e, t, i) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                z(i, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(i),
                k(e, t.class_loading),
                t.unobserve_completed && P(e, i);
            },
            oe = function (e, t, i) {
              var s = _(e) || e;
              se(s) ||
                (function (e, t, i) {
                  se(e) || (e.llEvLisnrs = {});
                  var s = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  te(e, s, t), te(e, "error", i);
                })(
                  s,
                  function (r) {
                    !(function (e, t, i, s) {
                      var r = L(t);
                      ne(t, i, s),
                        M(t, i.class_loaded),
                        C(t, m),
                        I(i.callback_loaded, t, s),
                        r || ee(i, s);
                    })(0, e, t, i),
                      re(s);
                  },
                  function (r) {
                    !(function (e, t, i, s) {
                      var r = L(t);
                      ne(t, i, s),
                        M(t, i.class_error),
                        C(t, b),
                        I(i.callback_error, t, s),
                        i.restore_on_error && U(t, W),
                        r || ee(i, s);
                    })(0, e, t, i),
                      re(s);
                  },
                );
            },
            le = function (e, t, i) {
              !(function (e) {
                return J.indexOf(e.tagName) > -1;
              })(e)
                ? (function (e, t, i) {
                    !(function (e) {
                      e.llTempImage = document.createElement("IMG");
                    })(e),
                      oe(e, t, i),
                      (function (e) {
                        R(e) ||
                          (e[p] = { backgroundImage: e.style.backgroundImage });
                      })(e),
                      (function (e, t, i) {
                        var s = x(e, t.data_bg),
                          r = x(e, t.data_bg_hidpi),
                          o = n && r ? r : s;
                        o &&
                          ((e.style.backgroundImage = 'url("'.concat(o, '")')),
                          _(e).setAttribute(c, o),
                          X(e, t, i));
                      })(e, t, i),
                      (function (e, t, i) {
                        var s = x(e, t.data_bg_multi),
                          r = x(e, t.data_bg_multi_hidpi),
                          o = n && r ? r : s;
                        o && ((e.style.backgroundImage = o), Y(e, t, i));
                      })(e, t, i),
                      (function (e, t, i) {
                        var s = x(e, t.data_bg_set);
                        if (s) {
                          var r = s.split("|"),
                            n = r.map(function (e) {
                              return "image-set(".concat(e, ")");
                            });
                          (e.style.backgroundImage = n.join()),
                            "" === e.style.backgroundImage &&
                              ((n = r.map(function (e) {
                                return "-webkit-image-set(".concat(e, ")");
                              })),
                              (e.style.backgroundImage = n.join())),
                            Y(e, t, i);
                        }
                      })(e, t, i);
                  })(e, t, i)
                : (function (e, t, i) {
                    oe(e, t, i),
                      (function (e, t, i) {
                        var s = Q[e.tagName];
                        s && (s(e, t), X(e, t, i));
                      })(e, t, i);
                  })(e, t, i);
            },
            ae = function (e) {
              e.removeAttribute(c), e.removeAttribute(d), e.removeAttribute(u);
            },
            ce = function (e) {
              V(e, function (e) {
                U(e, W);
              }),
                U(e, W);
            },
            de = {
              IMG: ce,
              IFRAME: function (e) {
                U(e, G);
              },
              VIDEO: function (e) {
                H(e, function (e) {
                  U(e, G);
                }),
                  U(e, B),
                  e.load();
              },
              OBJECT: function (e) {
                U(e, F);
              },
            },
            ue = function (e, t) {
              (function (e) {
                var t = de[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (R(e)) {
                        var t = $(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  A(e) ||
                    L(e) ||
                    (k(e, t.class_entered),
                    k(e, t.class_exited),
                    k(e, t.class_applied),
                    k(e, t.class_loading),
                    k(e, t.class_loaded),
                    k(e, t.class_error));
                })(e, t),
                T(e),
                j(e);
            },
            he = ["IMG", "IFRAME", "VIDEO"],
            pe = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            fe = function (e, t, i) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, i, s) {
                      var r = (function (e) {
                        return O.indexOf(E(e)) >= 0;
                      })(e);
                      C(e, "entered"),
                        M(e, i.class_entered),
                        k(e, i.class_exited),
                        (function (e, t, i) {
                          t.unobserve_entered && P(e, i);
                        })(e, i, s),
                        I(i.callback_enter, e, t, s),
                        r || le(e, i, s);
                    })(e.target, e, t, i)
                  : (function (e, t, i, s) {
                      A(e) ||
                        (M(e, i.class_exited),
                        (function (e, t, i, s) {
                          i.cancel_on_exit &&
                            (function (e) {
                              return E(e) === g;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (re(e),
                            (function (e) {
                              V(e, function (e) {
                                ae(e);
                              }),
                                ae(e);
                            })(e),
                            ce(e),
                            k(e, i.class_loading),
                            z(s, -1),
                            T(e),
                            I(i.callback_cancel, e, t, s));
                        })(e, t, i, s),
                        I(i.callback_exit, e, t, s));
                    })(e.target, e, t, i);
              });
            },
            ge = function (e) {
              return Array.prototype.slice.call(e);
            },
            me = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ve = function (e) {
              return (function (e) {
                return E(e) === b;
              })(e);
            },
            be = function (e, t) {
              return (function (e) {
                return ge(e).filter(A);
              })(e || me(t));
            },
            ye = function (e, i) {
              var r = l(e);
              (this._settings = r),
                (this.loadingCount = 0),
                (function (e, t) {
                  s &&
                    !pe(e) &&
                    (t._observer = new IntersectionObserver(
                      function (i) {
                        fe(i, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e),
                    ));
                })(r, this),
                (function (e, i) {
                  t &&
                    ((i._onlineHandler = function () {
                      !(function (e, t) {
                        var i;
                        ((i = me(e)), ge(i).filter(ve)).forEach(function (t) {
                          k(t, e.class_error), T(t);
                        }),
                          t.update();
                      })(e, i);
                    }),
                    window.addEventListener("online", i._onlineHandler));
                })(r, this),
                this.update(i);
            };
          return (
            (ye.prototype = {
              update: function (e) {
                var t,
                  r,
                  n = this._settings,
                  o = be(e, n);
                D(this, o.length),
                  !i && s
                    ? pe(n)
                      ? (function (e, t, i) {
                          e.forEach(function (e) {
                            -1 !== he.indexOf(e.tagName) &&
                              (function (e, t, i) {
                                e.setAttribute("loading", "lazy"),
                                  oe(e, t, i),
                                  (function (e, t) {
                                    var i = Q[e.tagName];
                                    i && i(e, t);
                                  })(e, t),
                                  C(e, y);
                              })(e, t, i);
                          }),
                            D(i, 0);
                        })(o, n, this)
                      : ((r = o),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, r))
                    : this.loadAll(o);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  t &&
                    window.removeEventListener("online", this._onlineHandler),
                  me(this._settings).forEach(function (e) {
                    j(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  i = this._settings;
                be(e, i).forEach(function (e) {
                  P(e, t), le(e, i, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                me(e).forEach(function (t) {
                  ue(t, e);
                });
              },
            }),
            (ye.load = function (e, t) {
              var i = l(t);
              le(e, i);
            }),
            (ye.resetStatus = function (e) {
              T(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var i, s = 0; (i = t[s]); s += 1) a(e, i);
                  else a(e, t);
              })(ye, window.lazyLoadOptions),
            ye
          );
        })();
      },
    },
    t = {};
  function i(s) {
    var r = t[s];
    if (void 0 !== r) return r.exports;
    var n = (t[s] = { exports: {} });
    return e[s].call(n.exports, n, n.exports, i), n.exports;
  }
  (() => {
    "use strict";
    function e(e) {
      this.type = e;
    }
    (e.prototype.init = function () {
      const e = this;
      (this.оbjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let e = 0; e < this.nodes.length; e++) {
        const t = this.nodes[e],
          i = t.dataset.da.trim().split(","),
          s = {};
        (s.element = t),
          (s.parent = t.parentNode),
          (s.destination = document.querySelector(i[0].trim())),
          (s.breakpoint = i[1] ? i[1].trim() : "767"),
          (s.place = i[2] ? i[2].trim() : "last"),
          (s.index = this.indexInParent(s.parent, s.element)),
          this.оbjects.push(s);
      }
      this.arraySort(this.оbjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.оbjects,
          function (e) {
            return (
              "(" +
              this.type +
              "-width: " +
              e.breakpoint +
              "px)," +
              e.breakpoint
            );
          },
          this,
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (e, t, i) {
            return Array.prototype.indexOf.call(i, e) === t;
          },
        ));
      for (let t = 0; t < this.mediaQueries.length; t++) {
        const i = this.mediaQueries[t],
          s = String.prototype.split.call(i, ","),
          r = window.matchMedia(s[0]),
          n = s[1],
          o = Array.prototype.filter.call(this.оbjects, function (e) {
            return e.breakpoint === n;
          });
        r.addListener(function () {
          e.mediaHandler(r, o);
        }),
          this.mediaHandler(r, o);
      }
    }),
      (e.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            (i.index = this.indexInParent(i.parent, i.element)),
              this.moveTo(i.place, i.element, i.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const i = t[e];
            i.element.classList.contains(this.daClassname) &&
              this.moveBack(i.parent, i.element, i.index);
          }
      }),
      (e.prototype.moveTo = function (e, t, i) {
        t.classList.add(this.daClassname),
          "last" === e || e >= i.children.length
            ? i.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? i.children[e].insertAdjacentElement("beforebegin", t)
            : i.insertAdjacentElement("afterbegin", t);
      }),
      (e.prototype.moveBack = function (e, t, i) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[i]
            ? e.children[i].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (e.prototype.indexInParent = function (e, t) {
        const i = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(i, t);
      }),
      (e.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    new e("max").init();
    class t {
      constructor(e) {
        let t = {
          logging: !0,
          init: !0,
          attributeOpenButton: "data-popup",
          attributeCloseButton: "data-close",
          fixElementSelector: "[data-lp]",
          youtubeAttribute: "data-youtube",
          youtubePlaceAttribute: "data-youtube-place",
          setAutoplayYoutube: !0,
          classes: {
            popup: "popup",
            popupContent: "popup-content",
            popupActive: "popup_show",
            bodyActive: "popup-show",
          },
          focusCatch: !0,
          closeEsc: !0,
          bodyLock: !0,
          bodyLockDelay: 500,
          hashSettings: { location: !0, goHash: !0 },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        };
        (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = {
            ...t,
            ...e,
            classes: { ...t.classes, ...e?.classes },
            hashSettings: { ...t.hashSettings, ...e?.hashSettings },
            on: { ...t.on, ...e?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("Проснулся"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (e) {
            const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (t)
              return (
                e.preventDefault(),
                (this._dataValue = t.getAttribute(
                  this.options.attributeOpenButton,
                )
                  ? t.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = t),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `Ой ой, не заполнен атрибут у ${t.classList}`,
                    )
              );
            return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (e.preventDefault(), void this.close())
              : void 0;
          }.bind(this),
        ),
          document.addEventListener(
            "keydown",
            function (e) {
              if (
                this.options.closeEsc &&
                27 == e.which &&
                "Escape" === e.code &&
                this.isOpen
              )
                return e.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == e.which &&
                this.isOpen &&
                this._focusCatch(e);
            }.bind(this),
          ),
          document.querySelector("form[data-ajax],form[data-dev]") &&
            document.addEventListener(
              "formSent",
              function (e) {
                const t = e.detail.form.dataset.popupMessage;
                t && this.open(t);
              }.bind(this),
            ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this),
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this),
            ));
      }
      open(e) {
        if (
          (e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector,
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute,
              )}?rel=0&showinfo=0&autoplay=1`,
              t = document.createElement("iframe");
            t.setAttribute("allowfullscreen", "");
            const i = this.options.setAutoplayYoutube ? "autoplay;" : "";
            t.setAttribute("allow", `${i}; encrypted-media`),
              t.setAttribute("src", e),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`,
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(t);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive,
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : o(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } }),
            ),
            this.popupLogging("Открыл попап");
        } else
          this.popupLogging(
            "Ой ой, такого попапа нет. Проверьте корректность ввода. ",
          );
      }
      close(e) {
        e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          (this.previousOpen.selector = e),
          this.isOpen &&
            n &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute,
            ) &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`,
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`,
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive,
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              o(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("Закрыл попап"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let e = document.querySelector(
          `.${window.location.hash.replace("#", "")}`,
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${e}"]`,
        ) &&
          e &&
          this.open(e);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(e) {
        const t = this.targetOpen.element.querySelectorAll(this._focusEl),
          i = Array.prototype.slice.call(t),
          s = i.indexOf(document.activeElement);
        e.shiftKey && 0 === s && (i[i.length - 1].focus(), e.preventDefault()),
          e.shiftKey ||
            s !== i.length - 1 ||
            (i[0].focus(), e.preventDefault());
      }
      _focusTrap() {
        const e = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : e[0].focus();
      }
      popupLogging(e) {
        this.options.logging && c(`[Попапос]: ${e}`);
      }
    }
    let s = (e, t = 500, i = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = i ? `${i}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !i),
              !i && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !i && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t));
      },
      r = (e, t = 500, i = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            i && e.style.removeProperty("height");
          let s = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = i ? `${i}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = s + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide");
            }, t);
        }
      },
      n = !0,
      o = (e = 500) => {
        document.documentElement.classList.contains("lock") ? l(e) : a(e);
      },
      l = (e = 500) => {
        let t = document.querySelector("body");
        if (n) {
          let i = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < i.length; e++) {
              i[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (n = !1),
            setTimeout(function () {
              n = !0;
            }, e);
        }
      },
      a = (e = 500) => {
        let t = document.querySelector("body");
        if (n) {
          let i = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < i.length; e++) {
            i[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (n = !1),
            setTimeout(function () {
              n = !0;
            }, e);
        }
      };
    function c(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function d(e) {
      return e.filter(function (e, t, i) {
        return i.indexOf(e) === t;
      });
    }
    function u(e, t) {
      const i = Array.from(e).filter(function (e, i, s) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (i.length) {
        const e = [];
        i.forEach((i) => {
          const s = {},
            r = i.dataset[t].split(",");
          (s.value = r[0]),
            (s.type = r[1] ? r[1].trim() : "max"),
            (s.item = i),
            e.push(s);
        });
        let s = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        s = d(s);
        const r = [];
        if (s.length)
          return (
            s.forEach((t) => {
              const i = t.split(","),
                s = i[1],
                n = i[2],
                o = window.matchMedia(i[0]),
                l = e.filter(function (e) {
                  if (e.value === s && e.type === n) return !0;
                });
              r.push({ itemsArray: l, matchMedia: o });
            }),
            r
          );
      }
    }
    let h = (e, t = !1, i = 500, s = 0) => {
      const r = document.querySelector(e);
      if (r) {
        let n = "",
          o = 0;
        t &&
          ((n = "header.header"), (o = document.querySelector(n).offsetHeight));
        let a = {
          speedAsDuration: !0,
          speed: i,
          header: n,
          offset: s,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (l(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(r, "", a);
        else {
          let e = r.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: o ? e - o : e, behavior: "smooth" });
        }
        c(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else c(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    };
    const p = { inputMaskModule: null, selectModule: null };
    let f = {
      getErrors(e) {
        let t = 0,
          i = e.querySelectorAll("*[data-required]");
        return (
          i.length &&
            i.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`,
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error"),
            );
      },
      formClean(e) {
        e.reset(),
          setTimeout(() => {
            let t = e.querySelectorAll("input,textarea");
            for (let e = 0; e < t.length; e++) {
              const i = t[e];
              i.parentElement.classList.remove("_form-focus"),
                i.classList.remove("_form-focus"),
                f.removeError(i),
                (i.value = i.dataset.placeholder);
            }
            let i = e.querySelectorAll(".checkbox__input");
            if (i.length > 0)
              for (let e = 0; e < i.length; e++) {
                i[e].checked = !1;
              }
            if (p.selectModule) {
              let t = e.querySelectorAll(".select");
              if (t.length)
                for (let e = 0; e < t.length; e++) {
                  const i = t[e].querySelector("select");
                  p.selectModule.selectBuild(i);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    var g, m;
    function v(e) {
      return "object" == typeof e && "function" == typeof e.to;
    }
    function b(e) {
      e.parentElement.removeChild(e);
    }
    function y(e) {
      return null != e;
    }
    function w(e) {
      e.preventDefault();
    }
    function S(e) {
      return "number" == typeof e && !isNaN(e) && isFinite(e);
    }
    function x(e, t, i) {
      i > 0 &&
        (A(e, t),
        setTimeout(function () {
          L(e, t);
        }, i));
    }
    function E(e) {
      return Math.max(Math.min(e, 100), 0);
    }
    function C(e) {
      return Array.isArray(e) ? e : [e];
    }
    function T(e) {
      var t = (e = String(e)).split(".");
      return t.length > 1 ? t[1].length : 0;
    }
    function A(e, t) {
      e.classList && !/\s/.test(t)
        ? e.classList.add(t)
        : (e.className += " " + t);
    }
    function L(e, t) {
      e.classList && !/\s/.test(t)
        ? e.classList.remove(t)
        : (e.className = e.className.replace(
            new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"),
            " ",
          ));
    }
    function O(e) {
      var t = void 0 !== window.pageXOffset,
        i = "CSS1Compat" === (e.compatMode || "");
      return {
        x: t
          ? window.pageXOffset
          : i
          ? e.documentElement.scrollLeft
          : e.body.scrollLeft,
        y: t
          ? window.pageYOffset
          : i
          ? e.documentElement.scrollTop
          : e.body.scrollTop,
      };
    }
    function I(e, t) {
      return 100 / (t - e);
    }
    function M(e, t, i) {
      return (100 * t) / (e[i + 1] - e[i]);
    }
    function k(e, t) {
      for (var i = 1; e >= t[i]; ) i += 1;
      return i;
    }
    function _(e, t, i) {
      if (i >= e.slice(-1)[0]) return 100;
      var s = k(i, e),
        r = e[s - 1],
        n = e[s],
        o = t[s - 1],
        l = t[s];
      return (
        o +
        (function (e, t) {
          return M(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0], 0);
        })([r, n], i) /
          I(o, l)
      );
    }
    function P(e, t, i, s) {
      if (100 === s) return s;
      var r = k(s, e),
        n = e[r - 1],
        o = e[r];
      return i
        ? s - n > (o - n) / 2
          ? o
          : n
        : t[r - 1]
        ? e[r - 1] +
          (function (e, t) {
            return Math.round(e / t) * t;
          })(s - e[r - 1], t[r - 1])
        : s;
    }
    !(function (e) {
      (e.Range = "range"),
        (e.Steps = "steps"),
        (e.Positions = "positions"),
        (e.Count = "count"),
        (e.Values = "values");
    })(g || (g = {})),
      (function (e) {
        (e[(e.None = -1)] = "None"),
          (e[(e.NoValue = 0)] = "NoValue"),
          (e[(e.LargeValue = 1)] = "LargeValue"),
          (e[(e.SmallValue = 2)] = "SmallValue");
      })(m || (m = {}));
    var z = (function () {
        function e(e, t, i) {
          var s;
          (this.xPct = []),
            (this.xVal = []),
            (this.xSteps = []),
            (this.xNumSteps = []),
            (this.xHighestCompleteStep = []),
            (this.xSteps = [i || !1]),
            (this.xNumSteps = [!1]),
            (this.snap = t);
          var r = [];
          for (
            Object.keys(e).forEach(function (t) {
              r.push([C(e[t]), t]);
            }),
              r.sort(function (e, t) {
                return e[0][0] - t[0][0];
              }),
              s = 0;
            s < r.length;
            s++
          )
            this.handleEntryPoint(r[s][1], r[s][0]);
          for (
            this.xNumSteps = this.xSteps.slice(0), s = 0;
            s < this.xNumSteps.length;
            s++
          )
            this.handleStepPoint(s, this.xNumSteps[s]);
        }
        return (
          (e.prototype.getDistance = function (e) {
            for (var t = [], i = 0; i < this.xNumSteps.length - 1; i++)
              t[i] = M(this.xVal, e, i);
            return t;
          }),
          (e.prototype.getAbsoluteDistance = function (e, t, i) {
            var s,
              r = 0;
            if (e < this.xPct[this.xPct.length - 1])
              for (; e > this.xPct[r + 1]; ) r++;
            else
              e === this.xPct[this.xPct.length - 1] &&
                (r = this.xPct.length - 2);
            i || e !== this.xPct[r + 1] || r++, null === t && (t = []);
            var n = 1,
              o = t[r],
              l = 0,
              a = 0,
              c = 0,
              d = 0;
            for (
              s = i
                ? (e - this.xPct[r]) / (this.xPct[r + 1] - this.xPct[r])
                : (this.xPct[r + 1] - e) / (this.xPct[r + 1] - this.xPct[r]);
              o > 0;

            )
              (l = this.xPct[r + 1 + d] - this.xPct[r + d]),
                t[r + d] * n + 100 - 100 * s > 100
                  ? ((a = l * s), (n = (o - 100 * s) / t[r + d]), (s = 1))
                  : ((a = ((t[r + d] * l) / 100) * n), (n = 0)),
                i
                  ? ((c -= a), this.xPct.length + d >= 1 && d--)
                  : ((c += a), this.xPct.length - d >= 1 && d++),
                (o = t[r + d] * n);
            return e + c;
          }),
          (e.prototype.toStepping = function (e) {
            return (e = _(this.xVal, this.xPct, e));
          }),
          (e.prototype.fromStepping = function (e) {
            return (function (e, t, i) {
              if (i >= 100) return e.slice(-1)[0];
              var s = k(i, t),
                r = e[s - 1],
                n = e[s],
                o = t[s - 1];
              return (function (e, t) {
                return (t * (e[1] - e[0])) / 100 + e[0];
              })([r, n], (i - o) * I(o, t[s]));
            })(this.xVal, this.xPct, e);
          }),
          (e.prototype.getStep = function (e) {
            return (e = P(this.xPct, this.xSteps, this.snap, e));
          }),
          (e.prototype.getDefaultStep = function (e, t, i) {
            var s = k(e, this.xPct);
            return (
              (100 === e || (t && e === this.xPct[s - 1])) &&
                (s = Math.max(s - 1, 1)),
              (this.xVal[s] - this.xVal[s - 1]) / i
            );
          }),
          (e.prototype.getNearbySteps = function (e) {
            var t = k(e, this.xPct);
            return {
              stepBefore: {
                startValue: this.xVal[t - 2],
                step: this.xNumSteps[t - 2],
                highestStep: this.xHighestCompleteStep[t - 2],
              },
              thisStep: {
                startValue: this.xVal[t - 1],
                step: this.xNumSteps[t - 1],
                highestStep: this.xHighestCompleteStep[t - 1],
              },
              stepAfter: {
                startValue: this.xVal[t],
                step: this.xNumSteps[t],
                highestStep: this.xHighestCompleteStep[t],
              },
            };
          }),
          (e.prototype.countStepDecimals = function () {
            var e = this.xNumSteps.map(T);
            return Math.max.apply(null, e);
          }),
          (e.prototype.hasNoSize = function () {
            return this.xVal[0] === this.xVal[this.xVal.length - 1];
          }),
          (e.prototype.convert = function (e) {
            return this.getStep(this.toStepping(e));
          }),
          (e.prototype.handleEntryPoint = function (e, t) {
            var i;
            if (
              !S((i = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e))) ||
              !S(t[0])
            )
              throw new Error("noUiSlider: 'range' value isn't numeric.");
            this.xPct.push(i), this.xVal.push(t[0]);
            var s = Number(t[1]);
            i
              ? this.xSteps.push(!isNaN(s) && s)
              : isNaN(s) || (this.xSteps[0] = s),
              this.xHighestCompleteStep.push(0);
          }),
          (e.prototype.handleStepPoint = function (e, t) {
            if (t)
              if (this.xVal[e] !== this.xVal[e + 1]) {
                this.xSteps[e] =
                  M([this.xVal[e], this.xVal[e + 1]], t, 0) /
                  I(this.xPct[e], this.xPct[e + 1]);
                var i = (this.xVal[e + 1] - this.xVal[e]) / this.xNumSteps[e],
                  s = Math.ceil(Number(i.toFixed(3)) - 1),
                  r = this.xVal[e] + this.xNumSteps[e] * s;
                this.xHighestCompleteStep[e] = r;
              } else
                this.xSteps[e] = this.xHighestCompleteStep[e] = this.xVal[e];
          }),
          e
        );
      })(),
      D = {
        to: function (e) {
          return void 0 === e ? "" : e.toFixed(2);
        },
        from: Number,
      },
      N = {
        target: "target",
        base: "base",
        origin: "origin",
        handle: "handle",
        handleLower: "handle-lower",
        handleUpper: "handle-upper",
        touchArea: "touch-area",
        horizontal: "horizontal",
        vertical: "vertical",
        background: "background",
        connect: "connect",
        connects: "connects",
        ltr: "ltr",
        rtl: "rtl",
        textDirectionLtr: "txt-dir-ltr",
        textDirectionRtl: "txt-dir-rtl",
        draggable: "draggable",
        drag: "state-drag",
        tap: "state-tap",
        active: "active",
        tooltip: "tooltip",
        pips: "pips",
        pipsHorizontal: "pips-horizontal",
        pipsVertical: "pips-vertical",
        marker: "marker",
        markerHorizontal: "marker-horizontal",
        markerVertical: "marker-vertical",
        markerNormal: "marker-normal",
        markerLarge: "marker-large",
        markerSub: "marker-sub",
        value: "value",
        valueHorizontal: "value-horizontal",
        valueVertical: "value-vertical",
        valueNormal: "value-normal",
        valueLarge: "value-large",
        valueSub: "value-sub",
      },
      V = { tooltips: ".__tooltips", aria: ".__aria" };
    function H(e, t) {
      if (!S(t)) throw new Error("noUiSlider: 'step' is not numeric.");
      e.singleStep = t;
    }
    function G(e, t) {
      if (!S(t))
        throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
      e.keyboardPageMultiplier = t;
    }
    function B(e, t) {
      if (!S(t))
        throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
      e.keyboardMultiplier = t;
    }
    function W(e, t) {
      if (!S(t))
        throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
      e.keyboardDefaultStep = t;
    }
    function F(e, t) {
      if ("object" != typeof t || Array.isArray(t))
        throw new Error("noUiSlider: 'range' is not an object.");
      if (void 0 === t.min || void 0 === t.max)
        throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
      e.spectrum = new z(t, e.snap || !1, e.singleStep);
    }
    function R(e, t) {
      if (((t = C(t)), !Array.isArray(t) || !t.length))
        throw new Error("noUiSlider: 'start' option is incorrect.");
      (e.handles = t.length), (e.start = t);
    }
    function $(e, t) {
      if ("boolean" != typeof t)
        throw new Error("noUiSlider: 'snap' option must be a boolean.");
      e.snap = t;
    }
    function j(e, t) {
      if ("boolean" != typeof t)
        throw new Error("noUiSlider: 'animate' option must be a boolean.");
      e.animate = t;
    }
    function q(e, t) {
      if ("number" != typeof t)
        throw new Error(
          "noUiSlider: 'animationDuration' option must be a number.",
        );
      e.animationDuration = t;
    }
    function U(e, t) {
      var i,
        s = [!1];
      if (
        ("lower" === t ? (t = [!0, !1]) : "upper" === t && (t = [!1, !0]),
        !0 === t || !1 === t)
      ) {
        for (i = 1; i < e.handles; i++) s.push(t);
        s.push(!1);
      } else {
        if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1)
          throw new Error(
            "noUiSlider: 'connect' option doesn't match handle count.",
          );
        s = t;
      }
      e.connect = s;
    }
    function Y(e, t) {
      switch (t) {
        case "horizontal":
          e.ort = 0;
          break;
        case "vertical":
          e.ort = 1;
          break;
        default:
          throw new Error("noUiSlider: 'orientation' option is invalid.");
      }
    }
    function X(e, t) {
      if (!S(t))
        throw new Error("noUiSlider: 'margin' option must be numeric.");
      0 !== t && (e.margin = e.spectrum.getDistance(t));
    }
    function K(e, t) {
      if (!S(t)) throw new Error("noUiSlider: 'limit' option must be numeric.");
      if (((e.limit = e.spectrum.getDistance(t)), !e.limit || e.handles < 2))
        throw new Error(
          "noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.",
        );
    }
    function Z(e, t) {
      var i;
      if (!S(t) && !Array.isArray(t))
        throw new Error(
          "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.",
        );
      if (Array.isArray(t) && 2 !== t.length && !S(t[0]) && !S(t[1]))
        throw new Error(
          "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.",
        );
      if (0 !== t) {
        for (
          Array.isArray(t) || (t = [t, t]),
            e.padding = [
              e.spectrum.getDistance(t[0]),
              e.spectrum.getDistance(t[1]),
            ],
            i = 0;
          i < e.spectrum.xNumSteps.length - 1;
          i++
        )
          if (e.padding[0][i] < 0 || e.padding[1][i] < 0)
            throw new Error(
              "noUiSlider: 'padding' option must be a positive number(s).",
            );
        var s = t[0] + t[1],
          r = e.spectrum.xVal[0];
        if (s / (e.spectrum.xVal[e.spectrum.xVal.length - 1] - r) > 1)
          throw new Error(
            "noUiSlider: 'padding' option must not exceed 100% of the range.",
          );
      }
    }
    function Q(e, t) {
      switch (t) {
        case "ltr":
          e.dir = 0;
          break;
        case "rtl":
          e.dir = 1;
          break;
        default:
          throw new Error("noUiSlider: 'direction' option was not recognized.");
      }
    }
    function J(e, t) {
      if ("string" != typeof t)
        throw new Error(
          "noUiSlider: 'behaviour' must be a string containing options.",
        );
      var i = t.indexOf("tap") >= 0,
        s = t.indexOf("drag") >= 0,
        r = t.indexOf("fixed") >= 0,
        n = t.indexOf("snap") >= 0,
        o = t.indexOf("hover") >= 0,
        l = t.indexOf("unconstrained") >= 0,
        a = t.indexOf("drag-all") >= 0,
        c = t.indexOf("smooth-steps") >= 0;
      if (r) {
        if (2 !== e.handles)
          throw new Error(
            "noUiSlider: 'fixed' behaviour must be used with 2 handles",
          );
        X(e, e.start[1] - e.start[0]);
      }
      if (l && (e.margin || e.limit))
        throw new Error(
          "noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit",
        );
      e.events = {
        tap: i || n,
        drag: s,
        dragAll: a,
        smoothSteps: c,
        fixed: r,
        snap: n,
        hover: o,
        unconstrained: l,
      };
    }
    function ee(e, t) {
      if (!1 !== t)
        if (!0 === t || v(t)) {
          e.tooltips = [];
          for (var i = 0; i < e.handles; i++) e.tooltips.push(t);
        } else {
          if ((t = C(t)).length !== e.handles)
            throw new Error(
              "noUiSlider: must pass a formatter for all handles.",
            );
          t.forEach(function (e) {
            if ("boolean" != typeof e && !v(e))
              throw new Error(
                "noUiSlider: 'tooltips' must be passed a formatter or 'false'.",
              );
          }),
            (e.tooltips = t);
        }
    }
    function te(e, t) {
      if (t.length !== e.handles)
        throw new Error("noUiSlider: must pass a attributes for all handles.");
      e.handleAttributes = t;
    }
    function ie(e, t) {
      if (!v(t))
        throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
      e.ariaFormat = t;
    }
    function se(e, t) {
      if (
        !(function (e) {
          return v(e) && "function" == typeof e.from;
        })(t)
      )
        throw new Error(
          "noUiSlider: 'format' requires 'to' and 'from' methods.",
        );
      e.format = t;
    }
    function re(e, t) {
      if ("boolean" != typeof t)
        throw new Error(
          "noUiSlider: 'keyboardSupport' option must be a boolean.",
        );
      e.keyboardSupport = t;
    }
    function ne(e, t) {
      e.documentElement = t;
    }
    function oe(e, t) {
      if ("string" != typeof t && !1 !== t)
        throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
      e.cssPrefix = t;
    }
    function le(e, t) {
      if ("object" != typeof t)
        throw new Error("noUiSlider: 'cssClasses' must be an object.");
      "string" == typeof e.cssPrefix
        ? ((e.cssClasses = {}),
          Object.keys(t).forEach(function (i) {
            e.cssClasses[i] = e.cssPrefix + t[i];
          }))
        : (e.cssClasses = t);
    }
    function ae(e) {
      var t = {
          margin: null,
          limit: null,
          padding: null,
          animate: !0,
          animationDuration: 300,
          ariaFormat: D,
          format: D,
        },
        i = {
          step: { r: !1, t: H },
          keyboardPageMultiplier: { r: !1, t: G },
          keyboardMultiplier: { r: !1, t: B },
          keyboardDefaultStep: { r: !1, t: W },
          start: { r: !0, t: R },
          connect: { r: !0, t: U },
          direction: { r: !0, t: Q },
          snap: { r: !1, t: $ },
          animate: { r: !1, t: j },
          animationDuration: { r: !1, t: q },
          range: { r: !0, t: F },
          orientation: { r: !1, t: Y },
          margin: { r: !1, t: X },
          limit: { r: !1, t: K },
          padding: { r: !1, t: Z },
          behaviour: { r: !0, t: J },
          ariaFormat: { r: !1, t: ie },
          format: { r: !1, t: se },
          tooltips: { r: !1, t: ee },
          keyboardSupport: { r: !0, t: re },
          documentElement: { r: !1, t: ne },
          cssPrefix: { r: !0, t: oe },
          cssClasses: { r: !0, t: le },
          handleAttributes: { r: !1, t: te },
        },
        s = {
          connect: !1,
          direction: "ltr",
          behaviour: "tap",
          orientation: "horizontal",
          keyboardSupport: !0,
          cssPrefix: "noUi-",
          cssClasses: N,
          keyboardPageMultiplier: 5,
          keyboardMultiplier: 1,
          keyboardDefaultStep: 10,
        };
      e.format && !e.ariaFormat && (e.ariaFormat = e.format),
        Object.keys(i).forEach(function (r) {
          if (y(e[r]) || void 0 !== s[r]) i[r].t(t, y(e[r]) ? e[r] : s[r]);
          else if (i[r].r)
            throw new Error("noUiSlider: '" + r + "' is required.");
        }),
        (t.pips = e.pips);
      var r = document.createElement("div"),
        n = void 0 !== r.style.msTransform,
        o = void 0 !== r.style.transform;
      t.transformRule = o ? "transform" : n ? "msTransform" : "webkitTransform";
      return (
        (t.style = [
          ["left", "top"],
          ["right", "bottom"],
        ][t.dir][t.ort]),
        t
      );
    }
    function ce(e, t, i) {
      var s,
        r,
        n,
        o,
        l,
        a,
        c,
        d = window.navigator.pointerEnabled
          ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
          : window.navigator.msPointerEnabled
          ? {
              start: "MSPointerDown",
              move: "MSPointerMove",
              end: "MSPointerUp",
            }
          : {
              start: "mousedown touchstart",
              move: "mousemove touchmove",
              end: "mouseup touchend",
            },
        u =
          window.CSS &&
          CSS.supports &&
          CSS.supports("touch-action", "none") &&
          (function () {
            var e = !1;
            try {
              var t = Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0;
                },
              });
              window.addEventListener("test", null, t);
            } catch (e) {}
            return e;
          })(),
        h = e,
        p = t.spectrum,
        f = [],
        v = [],
        S = [],
        T = 0,
        I = {},
        M = e.ownerDocument,
        k = t.documentElement || M.documentElement,
        _ = M.body,
        P = "rtl" === M.dir || 1 === t.ort ? 0 : 100;
      function z(e, t) {
        var i = M.createElement("div");
        return t && A(i, t), e.appendChild(i), i;
      }
      function D(e, i) {
        var s = z(e, t.cssClasses.origin),
          r = z(s, t.cssClasses.handle);
        if (
          (z(r, t.cssClasses.touchArea),
          r.setAttribute("data-handle", String(i)),
          t.keyboardSupport &&
            (r.setAttribute("tabindex", "0"),
            r.addEventListener("keydown", function (e) {
              return (function (e, i) {
                if (G() || B(i)) return !1;
                var s = ["Left", "Right"],
                  r = ["Down", "Up"],
                  n = ["PageDown", "PageUp"],
                  o = ["Home", "End"];
                t.dir && !t.ort
                  ? s.reverse()
                  : t.ort && !t.dir && (r.reverse(), n.reverse());
                var l,
                  a = e.key.replace("Arrow", ""),
                  c = a === n[0],
                  d = a === n[1],
                  u = a === r[0] || a === s[0] || c,
                  h = a === r[1] || a === s[1] || d,
                  g = a === o[0],
                  m = a === o[1];
                if (!(u || h || g || m)) return !0;
                if ((e.preventDefault(), h || u)) {
                  var b = u ? 0 : 1,
                    y = ve(i)[b];
                  if (null === y) return !1;
                  !1 === y &&
                    (y = p.getDefaultStep(v[i], u, t.keyboardDefaultStep)),
                    (y *=
                      d || c ? t.keyboardPageMultiplier : t.keyboardMultiplier),
                    (y = Math.max(y, 1e-7)),
                    (y *= u ? -1 : 1),
                    (l = f[i] + y);
                } else
                  l = m
                    ? t.spectrum.xVal[t.spectrum.xVal.length - 1]
                    : t.spectrum.xVal[0];
                return (
                  he(i, p.toStepping(l), !0, !0),
                  ne("slide", i),
                  ne("update", i),
                  ne("change", i),
                  ne("set", i),
                  !1
                );
              })(e, i);
            })),
          void 0 !== t.handleAttributes)
        ) {
          var n = t.handleAttributes[i];
          Object.keys(n).forEach(function (e) {
            r.setAttribute(e, n[e]);
          });
        }
        return (
          r.setAttribute("role", "slider"),
          r.setAttribute("aria-orientation", t.ort ? "vertical" : "horizontal"),
          0 === i
            ? A(r, t.cssClasses.handleLower)
            : i === t.handles - 1 && A(r, t.cssClasses.handleUpper),
          (s.handle = r),
          s
        );
      }
      function N(e, i) {
        return !!i && z(e, t.cssClasses.connect);
      }
      function H(e, i) {
        return (
          !(!t.tooltips || !t.tooltips[i]) &&
          z(e.firstChild, t.cssClasses.tooltip)
        );
      }
      function G() {
        return h.hasAttribute("disabled");
      }
      function B(e) {
        return r[e].hasAttribute("disabled");
      }
      function W() {
        l &&
          (re("update" + V.tooltips),
          l.forEach(function (e) {
            e && b(e);
          }),
          (l = null));
      }
      function F() {
        W(),
          (l = r.map(H)),
          se("update" + V.tooltips, function (e, i, s) {
            if (l && t.tooltips && !1 !== l[i]) {
              var r = e[i];
              !0 !== t.tooltips[i] && (r = t.tooltips[i].to(s[i])),
                (l[i].innerHTML = r);
            }
          });
      }
      function R(e, t) {
        return e.map(function (e) {
          return p.fromStepping(t ? p.getStep(e) : e);
        });
      }
      function $(e) {
        var t,
          i = (function (e) {
            if (e.mode === g.Range || e.mode === g.Steps) return p.xVal;
            if (e.mode === g.Count) {
              if (e.values < 2)
                throw new Error(
                  "noUiSlider: 'values' (>= 2) required for mode 'count'.",
                );
              for (var t = e.values - 1, i = 100 / t, s = []; t--; )
                s[t] = t * i;
              return s.push(100), R(s, e.stepped);
            }
            return e.mode === g.Positions
              ? R(e.values, e.stepped)
              : e.mode === g.Values
              ? e.stepped
                ? e.values.map(function (e) {
                    return p.fromStepping(p.getStep(p.toStepping(e)));
                  })
                : e.values
              : [];
          })(e),
          s = {},
          r = p.xVal[0],
          n = p.xVal[p.xVal.length - 1],
          o = !1,
          l = !1,
          a = 0;
        return (
          (t = i.slice().sort(function (e, t) {
            return e - t;
          })),
          (i = t.filter(function (e) {
            return !this[e] && (this[e] = !0);
          }, {}))[0] !== r && (i.unshift(r), (o = !0)),
          i[i.length - 1] !== n && (i.push(n), (l = !0)),
          i.forEach(function (t, r) {
            var n,
              c,
              d,
              u,
              h,
              f,
              v,
              b,
              y,
              w,
              S = t,
              x = i[r + 1],
              E = e.mode === g.Steps;
            for (
              E && (n = p.xNumSteps[r]),
                n || (n = x - S),
                void 0 === x && (x = S),
                n = Math.max(n, 1e-7),
                c = S;
              c <= x;
              c = Number((c + n).toFixed(7))
            ) {
              for (
                b = (h = (u = p.toStepping(c)) - a) / (e.density || 1),
                  w = h / (y = Math.round(b)),
                  d = 1;
                d <= y;
                d += 1
              )
                s[(f = a + d * w).toFixed(5)] = [p.fromStepping(f), 0];
              (v =
                i.indexOf(c) > -1
                  ? m.LargeValue
                  : E
                  ? m.SmallValue
                  : m.NoValue),
                !r && o && c !== x && (v = 0),
                (c === x && l) || (s[u.toFixed(5)] = [c, v]),
                (a = u);
            }
          }),
          s
        );
      }
      function j(e, i, s) {
        var r,
          n,
          o = M.createElement("div"),
          l =
            (((r = {})[m.None] = ""),
            (r[m.NoValue] = t.cssClasses.valueNormal),
            (r[m.LargeValue] = t.cssClasses.valueLarge),
            (r[m.SmallValue] = t.cssClasses.valueSub),
            r),
          a =
            (((n = {})[m.None] = ""),
            (n[m.NoValue] = t.cssClasses.markerNormal),
            (n[m.LargeValue] = t.cssClasses.markerLarge),
            (n[m.SmallValue] = t.cssClasses.markerSub),
            n),
          c = [t.cssClasses.valueHorizontal, t.cssClasses.valueVertical],
          d = [t.cssClasses.markerHorizontal, t.cssClasses.markerVertical];
        function u(e, i) {
          var s = i === t.cssClasses.value,
            r = s ? l : a;
          return i + " " + (s ? c : d)[t.ort] + " " + r[e];
        }
        return (
          A(o, t.cssClasses.pips),
          A(
            o,
            0 === t.ort
              ? t.cssClasses.pipsHorizontal
              : t.cssClasses.pipsVertical,
          ),
          Object.keys(e).forEach(function (r) {
            !(function (e, r, n) {
              if ((n = i ? i(r, n) : n) !== m.None) {
                var l = z(o, !1);
                (l.className = u(n, t.cssClasses.marker)),
                  (l.style[t.style] = e + "%"),
                  n > m.NoValue &&
                    (((l = z(o, !1)).className = u(n, t.cssClasses.value)),
                    l.setAttribute("data-value", String(r)),
                    (l.style[t.style] = e + "%"),
                    (l.innerHTML = String(s.to(r))));
              }
            })(r, e[r][0], e[r][1]);
          }),
          o
        );
      }
      function q() {
        o && (b(o), (o = null));
      }
      function U(e) {
        q();
        var t = $(e),
          i = e.filter,
          s = e.format || {
            to: function (e) {
              return String(Math.round(e));
            },
          };
        return (o = h.appendChild(j(t, i, s)));
      }
      function Y() {
        var e = s.getBoundingClientRect(),
          i = "offset" + ["Width", "Height"][t.ort];
        return 0 === t.ort ? e.width || s[i] : e.height || s[i];
      }
      function X(e, i, s, r) {
        var n = function (n) {
            var o,
              l,
              a = (function (e, t, i) {
                var s = 0 === e.type.indexOf("touch"),
                  r = 0 === e.type.indexOf("mouse"),
                  n = 0 === e.type.indexOf("pointer"),
                  o = 0,
                  l = 0;
                0 === e.type.indexOf("MSPointer") && (n = !0);
                if ("mousedown" === e.type && !e.buttons && !e.touches)
                  return !1;
                if (s) {
                  var a = function (t) {
                    var s = t.target;
                    return (
                      s === i ||
                      i.contains(s) ||
                      (e.composed && e.composedPath().shift() === i)
                    );
                  };
                  if ("touchstart" === e.type) {
                    var c = Array.prototype.filter.call(e.touches, a);
                    if (c.length > 1) return !1;
                    (o = c[0].pageX), (l = c[0].pageY);
                  } else {
                    var d = Array.prototype.find.call(e.changedTouches, a);
                    if (!d) return !1;
                    (o = d.pageX), (l = d.pageY);
                  }
                }
                (t = t || O(M)),
                  (r || n) && ((o = e.clientX + t.x), (l = e.clientY + t.y));
                return (
                  (e.pageOffset = t),
                  (e.points = [o, l]),
                  (e.cursor = r || n),
                  e
                );
              })(n, r.pageOffset, r.target || i);
            return (
              !!a &&
              !(G() && !r.doNotReject) &&
              ((o = h),
              (l = t.cssClasses.tap),
              !(
                (o.classList
                  ? o.classList.contains(l)
                  : new RegExp("\\b" + l + "\\b").test(o.className)) &&
                !r.doNotReject
              ) &&
                !(e === d.start && void 0 !== a.buttons && a.buttons > 1) &&
                (!r.hover || !a.buttons) &&
                (u || a.preventDefault(),
                (a.calcPoint = a.points[t.ort]),
                void s(a, r)))
            );
          },
          o = [];
        return (
          e.split(" ").forEach(function (e) {
            i.addEventListener(e, n, !!u && { passive: !0 }), o.push([e, n]);
          }),
          o
        );
      }
      function K(e) {
        var i,
          r,
          n,
          o,
          l,
          a,
          c =
            (100 *
              (e -
                ((i = s),
                (r = t.ort),
                (n = i.getBoundingClientRect()),
                (o = i.ownerDocument),
                (l = o.documentElement),
                (a = O(o)),
                /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) &&
                  (a.x = 0),
                r ? n.top + a.y - l.clientTop : n.left + a.x - l.clientLeft))) /
            Y();
        return (c = E(c)), t.dir ? 100 - c : c;
      }
      function Z(e, t) {
        "mouseout" === e.type &&
          "HTML" === e.target.nodeName &&
          null === e.relatedTarget &&
          J(e, t);
      }
      function Q(e, i) {
        if (
          -1 === navigator.appVersion.indexOf("MSIE 9") &&
          0 === e.buttons &&
          0 !== i.buttonsProperty
        )
          return J(e, i);
        var s = (t.dir ? -1 : 1) * (e.calcPoint - i.startCalcPoint);
        ce(
          s > 0,
          (100 * s) / i.baseSize,
          i.locations,
          i.handleNumbers,
          i.connect,
        );
      }
      function J(e, i) {
        i.handle && (L(i.handle, t.cssClasses.active), (T -= 1)),
          i.listeners.forEach(function (e) {
            k.removeEventListener(e[0], e[1]);
          }),
          0 === T &&
            (L(h, t.cssClasses.drag),
            ue(),
            e.cursor &&
              ((_.style.cursor = ""), _.removeEventListener("selectstart", w))),
          t.events.smoothSteps &&
            (i.handleNumbers.forEach(function (e) {
              he(e, v[e], !0, !0, !1, !1);
            }),
            i.handleNumbers.forEach(function (e) {
              ne("update", e);
            })),
          i.handleNumbers.forEach(function (e) {
            ne("change", e), ne("set", e), ne("end", e);
          });
      }
      function ee(e, i) {
        if (!i.handleNumbers.some(B)) {
          var s;
          if (1 === i.handleNumbers.length)
            (s = r[i.handleNumbers[0]].children[0]),
              (T += 1),
              A(s, t.cssClasses.active);
          e.stopPropagation();
          var n = [],
            o = X(d.move, k, Q, {
              target: e.target,
              handle: s,
              connect: i.connect,
              listeners: n,
              startCalcPoint: e.calcPoint,
              baseSize: Y(),
              pageOffset: e.pageOffset,
              handleNumbers: i.handleNumbers,
              buttonsProperty: e.buttons,
              locations: v.slice(),
            }),
            l = X(d.end, k, J, {
              target: e.target,
              handle: s,
              listeners: n,
              doNotReject: !0,
              handleNumbers: i.handleNumbers,
            }),
            a = X("mouseout", k, Z, {
              target: e.target,
              handle: s,
              listeners: n,
              doNotReject: !0,
              handleNumbers: i.handleNumbers,
            });
          n.push.apply(n, o.concat(l, a)),
            e.cursor &&
              ((_.style.cursor = getComputedStyle(e.target).cursor),
              r.length > 1 && A(h, t.cssClasses.drag),
              _.addEventListener("selectstart", w, !1)),
            i.handleNumbers.forEach(function (e) {
              ne("start", e);
            });
        }
      }
      function te(e) {
        e.stopPropagation();
        var i = K(e.calcPoint),
          s = (function (e) {
            var t = 100,
              i = !1;
            return (
              r.forEach(function (s, r) {
                if (!B(r)) {
                  var n = v[r],
                    o = Math.abs(n - e);
                  (o < t || (o <= t && e > n) || (100 === o && 100 === t)) &&
                    ((i = r), (t = o));
                }
              }),
              i
            );
          })(i);
        !1 !== s &&
          (t.events.snap || x(h, t.cssClasses.tap, t.animationDuration),
          he(s, i, !0, !0),
          ue(),
          ne("slide", s, !0),
          ne("update", s, !0),
          t.events.snap
            ? ee(e, { handleNumbers: [s] })
            : (ne("change", s, !0), ne("set", s, !0)));
      }
      function ie(e) {
        var t = K(e.calcPoint),
          i = p.getStep(t),
          s = p.fromStepping(i);
        Object.keys(I).forEach(function (e) {
          "hover" === e.split(".")[0] &&
            I[e].forEach(function (e) {
              e.call(be, s);
            });
        });
      }
      function se(e, t) {
        (I[e] = I[e] || []),
          I[e].push(t),
          "update" === e.split(".")[0] &&
            r.forEach(function (e, t) {
              ne("update", t);
            });
      }
      function re(e) {
        var t = e && e.split(".")[0],
          i = t ? e.substring(t.length) : e;
        Object.keys(I).forEach(function (e) {
          var s = e.split(".")[0],
            r = e.substring(s.length);
          (t && t !== s) ||
            (i && i !== r) ||
            ((function (e) {
              return e === V.aria || e === V.tooltips;
            })(r) &&
              i !== r) ||
            delete I[e];
        });
      }
      function ne(e, i, s) {
        Object.keys(I).forEach(function (r) {
          var n = r.split(".")[0];
          e === n &&
            I[r].forEach(function (e) {
              e.call(
                be,
                f.map(t.format.to),
                i,
                f.slice(),
                s || !1,
                v.slice(),
                be,
              );
            });
        });
      }
      function oe(e, i, s, n, o, l, a) {
        var c;
        return (
          r.length > 1 &&
            !t.events.unconstrained &&
            (n &&
              i > 0 &&
              ((c = p.getAbsoluteDistance(e[i - 1], t.margin, !1)),
              (s = Math.max(s, c))),
            o &&
              i < r.length - 1 &&
              ((c = p.getAbsoluteDistance(e[i + 1], t.margin, !0)),
              (s = Math.min(s, c)))),
          r.length > 1 &&
            t.limit &&
            (n &&
              i > 0 &&
              ((c = p.getAbsoluteDistance(e[i - 1], t.limit, !1)),
              (s = Math.min(s, c))),
            o &&
              i < r.length - 1 &&
              ((c = p.getAbsoluteDistance(e[i + 1], t.limit, !0)),
              (s = Math.max(s, c)))),
          t.padding &&
            (0 === i &&
              ((c = p.getAbsoluteDistance(0, t.padding[0], !1)),
              (s = Math.max(s, c))),
            i === r.length - 1 &&
              ((c = p.getAbsoluteDistance(100, t.padding[1], !0)),
              (s = Math.min(s, c)))),
          a || (s = p.getStep(s)),
          !((s = E(s)) === e[i] && !l) && s
        );
      }
      function le(e, i) {
        var s = t.ort;
        return (s ? i : e) + ", " + (s ? e : i);
      }
      function ce(e, i, s, r, n) {
        var o = s.slice(),
          l = r[0],
          a = t.events.smoothSteps,
          c = [!e, e],
          d = [e, !e];
        (r = r.slice()),
          e && r.reverse(),
          r.length > 1
            ? r.forEach(function (e, t) {
                var s = oe(o, e, o[e] + i, c[t], d[t], !1, a);
                !1 === s ? (i = 0) : ((i = s - o[e]), (o[e] = s));
              })
            : (c = d = [!0]);
        var u = !1;
        r.forEach(function (e, t) {
          u = he(e, s[e] + i, c[t], d[t], !1, a) || u;
        }),
          u &&
            (r.forEach(function (e) {
              ne("update", e), ne("slide", e);
            }),
            null != n && ne("drag", l));
      }
      function de(e, i) {
        return t.dir ? 100 - e - i : e;
      }
      function ue() {
        S.forEach(function (e) {
          var t = v[e] > 50 ? -1 : 1,
            i = 3 + (r.length + t * e);
          r[e].style.zIndex = String(i);
        });
      }
      function he(e, i, s, n, o, l) {
        return (
          o || (i = oe(v, e, i, s, n, !1, l)),
          !1 !== i &&
            ((function (e, i) {
              (v[e] = i), (f[e] = p.fromStepping(i));
              var s = "translate(" + le(de(i, 0) - P + "%", "0") + ")";
              (r[e].style[t.transformRule] = s), pe(e), pe(e + 1);
            })(e, i),
            !0)
        );
      }
      function pe(e) {
        if (n[e]) {
          var i = 0,
            s = 100;
          0 !== e && (i = v[e - 1]), e !== n.length - 1 && (s = v[e]);
          var r = s - i,
            o = "translate(" + le(de(i, r) + "%", "0") + ")",
            l = "scale(" + le(r / 100, "1") + ")";
          n[e].style[t.transformRule] = o + " " + l;
        }
      }
      function fe(e, i) {
        return null === e || !1 === e || void 0 === e
          ? v[i]
          : ("number" == typeof e && (e = String(e)),
            !1 !== (e = t.format.from(e)) && (e = p.toStepping(e)),
            !1 === e || isNaN(e) ? v[i] : e);
      }
      function ge(e, i, s) {
        var r = C(e),
          n = void 0 === v[0];
        (i = void 0 === i || i),
          t.animate && !n && x(h, t.cssClasses.tap, t.animationDuration),
          S.forEach(function (e) {
            he(e, fe(r[e], e), !0, !1, s);
          });
        var o = 1 === S.length ? 0 : 1;
        if (n && p.hasNoSize() && ((s = !0), (v[0] = 0), S.length > 1)) {
          var l = 100 / (S.length - 1);
          S.forEach(function (e) {
            v[e] = e * l;
          });
        }
        for (; o < S.length; ++o)
          S.forEach(function (e) {
            he(e, v[e], !0, !0, s);
          });
        ue(),
          S.forEach(function (e) {
            ne("update", e), null !== r[e] && i && ne("set", e);
          });
      }
      function me(e) {
        if ((void 0 === e && (e = !1), e))
          return 1 === f.length ? f[0] : f.slice(0);
        var i = f.map(t.format.to);
        return 1 === i.length ? i[0] : i;
      }
      function ve(e) {
        var i = v[e],
          s = p.getNearbySteps(i),
          r = f[e],
          n = s.thisStep.step,
          o = null;
        if (t.snap)
          return [
            r - s.stepBefore.startValue || null,
            s.stepAfter.startValue - r || null,
          ];
        !1 !== n &&
          r + n > s.stepAfter.startValue &&
          (n = s.stepAfter.startValue - r),
          (o =
            r > s.thisStep.startValue
              ? s.thisStep.step
              : !1 !== s.stepBefore.step && r - s.stepBefore.highestStep),
          100 === i ? (n = null) : 0 === i && (o = null);
        var l = p.countStepDecimals();
        return (
          null !== n && !1 !== n && (n = Number(n.toFixed(l))),
          null !== o && !1 !== o && (o = Number(o.toFixed(l))),
          [o, n]
        );
      }
      A((a = h), t.cssClasses.target),
        0 === t.dir ? A(a, t.cssClasses.ltr) : A(a, t.cssClasses.rtl),
        0 === t.ort
          ? A(a, t.cssClasses.horizontal)
          : A(a, t.cssClasses.vertical),
        A(
          a,
          "rtl" === getComputedStyle(a).direction
            ? t.cssClasses.textDirectionRtl
            : t.cssClasses.textDirectionLtr,
        ),
        (s = z(a, t.cssClasses.base)),
        (function (e, i) {
          var s = z(i, t.cssClasses.connects);
          (r = []), (n = []).push(N(s, e[0]));
          for (var o = 0; o < t.handles; o++)
            r.push(D(i, o)), (S[o] = o), n.push(N(s, e[o + 1]));
        })(t.connect, s),
        (c = t.events).fixed ||
          r.forEach(function (e, t) {
            X(d.start, e.children[0], ee, { handleNumbers: [t] });
          }),
        c.tap && X(d.start, s, te, {}),
        c.hover && X(d.move, s, ie, { hover: !0 }),
        c.drag &&
          n.forEach(function (e, i) {
            if (!1 !== e && 0 !== i && i !== n.length - 1) {
              var s = r[i - 1],
                o = r[i],
                l = [e],
                a = [s, o],
                u = [i - 1, i];
              A(e, t.cssClasses.draggable),
                c.fixed && (l.push(s.children[0]), l.push(o.children[0])),
                c.dragAll && ((a = r), (u = S)),
                l.forEach(function (t) {
                  X(d.start, t, ee, {
                    handles: a,
                    handleNumbers: u,
                    connect: e,
                  });
                });
            }
          }),
        ge(t.start),
        t.pips && U(t.pips),
        t.tooltips && F(),
        re("update" + V.aria),
        se("update" + V.aria, function (e, i, s, n, o) {
          S.forEach(function (e) {
            var i = r[e],
              n = oe(v, e, 0, !0, !0, !0),
              l = oe(v, e, 100, !0, !0, !0),
              a = o[e],
              c = String(t.ariaFormat.to(s[e]));
            (n = p.fromStepping(n).toFixed(1)),
              (l = p.fromStepping(l).toFixed(1)),
              (a = p.fromStepping(a).toFixed(1)),
              i.children[0].setAttribute("aria-valuemin", n),
              i.children[0].setAttribute("aria-valuemax", l),
              i.children[0].setAttribute("aria-valuenow", a),
              i.children[0].setAttribute("aria-valuetext", c);
          });
        });
      var be = {
        destroy: function () {
          for (
            re(V.aria),
              re(V.tooltips),
              Object.keys(t.cssClasses).forEach(function (e) {
                L(h, t.cssClasses[e]);
              });
            h.firstChild;

          )
            h.removeChild(h.firstChild);
          delete h.noUiSlider;
        },
        steps: function () {
          return S.map(ve);
        },
        on: se,
        off: re,
        get: me,
        set: ge,
        setHandle: function (e, t, i, s) {
          if (!((e = Number(e)) >= 0 && e < S.length))
            throw new Error("noUiSlider: invalid handle number, got: " + e);
          he(e, fe(t, e), !0, !0, s), ne("update", e), i && ne("set", e);
        },
        reset: function (e) {
          ge(t.start, e);
        },
        disable: function (e) {
          null != e
            ? (r[e].setAttribute("disabled", ""),
              r[e].handle.removeAttribute("tabindex"))
            : (h.setAttribute("disabled", ""),
              r.forEach(function (e) {
                e.handle.removeAttribute("tabindex");
              }));
        },
        enable: function (e) {
          null != e
            ? (r[e].removeAttribute("disabled"),
              r[e].handle.setAttribute("tabindex", "0"))
            : (h.removeAttribute("disabled"),
              r.forEach(function (e) {
                e.removeAttribute("disabled"),
                  e.handle.setAttribute("tabindex", "0");
              }));
        },
        __moveHandles: function (e, t, i) {
          ce(e, t, v, i);
        },
        options: i,
        updateOptions: function (e, s) {
          var r = me(),
            n = [
              "margin",
              "limit",
              "padding",
              "range",
              "animate",
              "snap",
              "step",
              "format",
              "pips",
              "tooltips",
            ];
          n.forEach(function (t) {
            void 0 !== e[t] && (i[t] = e[t]);
          });
          var o = ae(i);
          n.forEach(function (i) {
            void 0 !== e[i] && (t[i] = o[i]);
          }),
            (p = o.spectrum),
            (t.margin = o.margin),
            (t.limit = o.limit),
            (t.padding = o.padding),
            t.pips ? U(t.pips) : q(),
            t.tooltips ? F() : W(),
            (v = []),
            ge(y(e.start) ? e.start : r, s);
        },
        target: h,
        removePips: q,
        removeTooltips: W,
        getPositions: function () {
          return v.slice();
        },
        getTooltips: function () {
          return l;
        },
        getOrigins: function () {
          return r;
        },
        pips: U,
      };
      return be;
    }
    function de(e, t) {
      if (!e || !e.nodeName)
        throw new Error(
          "noUiSlider: create requires a single element, got: " + e,
        );
      if (e.noUiSlider)
        throw new Error("noUiSlider: Slider was already initialized.");
      var i = ce(e, ae(t), t);
      return (e.noUiSlider = i), i;
    }
    function ue(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function he(e, t) {
      void 0 === e && (e = {}),
        void 0 === t && (t = {}),
        Object.keys(t).forEach((i) => {
          void 0 === e[i]
            ? (e[i] = t[i])
            : ue(t[i]) &&
              ue(e[i]) &&
              Object.keys(t[i]).length > 0 &&
              he(e[i], t[i]);
        });
    }
    !(function () {
      const e = document.getElementById("range");
      if (e) {
        de(e, {
          start: [0, 1e5],
          connect: !0,
          step: 1,
          range: { min: [0], max: [1e5] },
        });
        const t = document.getElementById("input-0"),
          i = document.getElementById("input-1"),
          s = [t, i];
        function r() {
          let s, r;
          (s = t.value), (r = i.value), e.noUiSlider.set([s, r]);
        }
        e.noUiSlider.on("update", function (e, t) {
          s && (s[t].value = Math.round(e[t]));
        }),
          s.forEach((e) => {
            e.addEventListener("change", r);
          });
      }
    })();
    const pe = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function fe() {
      const e = "undefined" != typeof document ? document : {};
      return he(e, pe), e;
    }
    const ge = {
      document: pe,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function me() {
      const e = "undefined" != typeof window ? window : {};
      return he(e, ge), e;
    }
    function ve(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function be() {
      return Date.now();
    }
    function ye(e, t) {
      void 0 === t && (t = "x");
      const i = me();
      let s, r, n;
      const o = (function (e) {
        const t = me();
        let i;
        return (
          t.getComputedStyle && (i = t.getComputedStyle(e, null)),
          !i && e.currentStyle && (i = e.currentStyle),
          i || (i = e.style),
          i
        );
      })(e);
      return (
        i.WebKitCSSMatrix
          ? ((r = o.transform || o.webkitTransform),
            r.split(",").length > 6 &&
              (r = r
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (n = new i.WebKitCSSMatrix("none" === r ? "" : r)))
          : ((n =
              o.MozTransform ||
              o.OTransform ||
              o.MsTransform ||
              o.msTransform ||
              o.transform ||
              o
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (s = n.toString().split(","))),
        "x" === t &&
          (r = i.WebKitCSSMatrix
            ? n.m41
            : 16 === s.length
            ? parseFloat(s[12])
            : parseFloat(s[4])),
        "y" === t &&
          (r = i.WebKitCSSMatrix
            ? n.m42
            : 16 === s.length
            ? parseFloat(s[13])
            : parseFloat(s[5])),
        r || 0
      );
    }
    function we(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function Se() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let s = 1; s < arguments.length; s += 1) {
        const r = s < 0 || arguments.length <= s ? void 0 : arguments[s];
        if (
          null != r &&
          ((i = r),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? i instanceof HTMLElement
            : i && (1 === i.nodeType || 11 === i.nodeType)))
        ) {
          const i = Object.keys(Object(r)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, s = i.length; t < s; t += 1) {
            const s = i[t],
              n = Object.getOwnPropertyDescriptor(r, s);
            void 0 !== n &&
              n.enumerable &&
              (we(e[s]) && we(r[s])
                ? r[s].__swiper__
                  ? (e[s] = r[s])
                  : Se(e[s], r[s])
                : !we(e[s]) && we(r[s])
                ? ((e[s] = {}),
                  r[s].__swiper__ ? (e[s] = r[s]) : Se(e[s], r[s]))
                : (e[s] = r[s]));
          }
        }
      }
      var i;
      return e;
    }
    function xe(e, t, i) {
      e.style.setProperty(t, i);
    }
    function Ee(e) {
      let { swiper: t, targetPosition: i, side: s } = e;
      const r = me(),
        n = -t.translate;
      let o,
        l = null;
      const a = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        r.cancelAnimationFrame(t.cssModeFrameID);
      const c = i > n ? "next" : "prev",
        d = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
        u = () => {
          (o = new Date().getTime()), null === l && (l = o);
          const e = Math.max(Math.min((o - l) / a, 1), 0),
            c = 0.5 - Math.cos(e * Math.PI) / 2;
          let h = n + c * (i - n);
          if ((d(h, i) && (h = i), t.wrapperEl.scrollTo({ [s]: h }), d(h, i)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [s]: h });
              }),
              void r.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = r.requestAnimationFrame(u);
        };
      u();
    }
    function Ce(e, t) {
      return (
        void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t))
      );
    }
    function Te(e) {
      try {
        return void console.warn(e);
      } catch (e) {}
    }
    function Ae(e, t) {
      void 0 === t && (t = []);
      const i = document.createElement(e);
      return (
        i.classList.add(
          ...(Array.isArray(t)
            ? t
            : (function (e) {
                return (
                  void 0 === e && (e = ""),
                  e
                    .trim()
                    .split(" ")
                    .filter((e) => !!e.trim())
                );
              })(t)),
        ),
        i
      );
    }
    function Le(e, t) {
      return me().getComputedStyle(e, null).getPropertyValue(t);
    }
    function Oe(e) {
      let t,
        i = e;
      if (i) {
        for (t = 0; null !== (i = i.previousSibling); )
          1 === i.nodeType && (t += 1);
        return t;
      }
    }
    function Ie(e, t, i) {
      const s = me();
      return i
        ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
            parseFloat(
              s
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-right" : "margin-top",
                ),
            ) +
            parseFloat(
              s
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-left" : "margin-bottom",
                ),
            )
        : e.offsetWidth;
    }
    let Me, ke, _e;
    function Pe() {
      return (
        Me ||
          (Me = (function () {
            const e = me(),
              t = fe();
            return {
              smoothScroll:
                t.documentElement &&
                t.documentElement.style &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
            };
          })()),
        Me
      );
    }
    function ze(e) {
      return (
        void 0 === e && (e = {}),
        ke ||
          (ke = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const i = Pe(),
              s = me(),
              r = s.navigator.platform,
              n = t || s.navigator.userAgent,
              o = { ios: !1, android: !1 },
              l = s.screen.width,
              a = s.screen.height,
              c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = n.match(/(iPad).*OS\s([\d_]+)/);
            const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
              h = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              p = "Win32" === r;
            let f = "MacIntel" === r;
            return (
              !d &&
                f &&
                i.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${l}x${a}`) >= 0 &&
                ((d = n.match(/(Version)\/([\d.]+)/)),
                d || (d = [0, 1, "13_0_0"]),
                (f = !1)),
              c && !p && ((o.os = "android"), (o.android = !0)),
              (d || h || u) && ((o.os = "ios"), (o.ios = !0)),
              o
            );
          })(e)),
        ke
      );
    }
    function De() {
      return (
        _e ||
          (_e = (function () {
            const e = me();
            let t = !1;
            function i() {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            }
            if (i()) {
              const i = String(e.navigator.userAgent);
              if (i.includes("Version/")) {
                const [e, s] = i
                  .split("Version/")[1]
                  .split(" ")[0]
                  .split(".")
                  .map((e) => Number(e));
                t = e < 16 || (16 === e && s < 2);
              }
            }
            return {
              isSafari: t || i(),
              needPerspectiveFix: t,
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent,
              ),
            };
          })()),
        _e
      );
    }
    var Ne = {
      on(e, t, i) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof t) return s;
        const r = i ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            s.eventsListeners[e] || (s.eventsListeners[e] = []),
              s.eventsListeners[e][r](t);
          }),
          s
        );
      },
      once(e, t, i) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof t) return s;
        function r() {
          s.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
          for (var i = arguments.length, n = new Array(i), o = 0; o < i; o++)
            n[o] = arguments[o];
          t.apply(s, n);
        }
        return (r.__emitterProxy = t), s.on(e, r, i);
      },
      onAny(e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof e) return i;
        const s = t ? "unshift" : "push";
        return (
          i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const i = t.eventsAnyListeners.indexOf(e);
        return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
      },
      off(e, t) {
        const i = this;
        return !i.eventsListeners || i.destroyed
          ? i
          : i.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (i.eventsListeners[e] = [])
                : i.eventsListeners[e] &&
                  i.eventsListeners[e].forEach((s, r) => {
                    (s === t || (s.__emitterProxy && s.__emitterProxy === t)) &&
                      i.eventsListeners[e].splice(r, 1);
                  });
            }),
            i)
          : i;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, i, s;
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
          n[o] = arguments[o];
        "string" == typeof n[0] || Array.isArray(n[0])
          ? ((t = n[0]), (i = n.slice(1, n.length)), (s = e))
          : ((t = n[0].events), (i = n[0].data), (s = n[0].context || e)),
          i.unshift(s);
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(s, [t, ...i]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(s, i);
                });
          }),
          e
        );
      },
    };
    const Ve = (e, t) => {
        if (!e || e.destroyed || !e.params) return;
        const i = t.closest(
          e.isElement ? "swiper-slide" : `.${e.params.slideClass}`,
        );
        if (i) {
          let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
          !t &&
            e.isElement &&
            (i.shadowRoot
              ? (t = i.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`,
                ))
              : requestAnimationFrame(() => {
                  i.shadowRoot &&
                    ((t = i.shadowRoot.querySelector(
                      `.${e.params.lazyPreloaderClass}`,
                    )),
                    t && t.remove());
                })),
            t && t.remove();
        }
      },
      He = (e, t) => {
        if (!e.slides[t]) return;
        const i = e.slides[t].querySelector('[loading="lazy"]');
        i && i.removeAttribute("loading");
      },
      Ge = (e) => {
        if (!e || e.destroyed || !e.params) return;
        let t = e.params.lazyPreloadPrevNext;
        const i = e.slides.length;
        if (!i || !t || t < 0) return;
        t = Math.min(t, i);
        const s =
            "auto" === e.params.slidesPerView
              ? e.slidesPerViewDynamic()
              : Math.ceil(e.params.slidesPerView),
          r = e.activeIndex;
        if (e.params.grid && e.params.grid.rows > 1) {
          const i = r,
            n = [i - t];
          return (
            n.push(...Array.from({ length: t }).map((e, t) => i + s + t)),
            void e.slides.forEach((t, i) => {
              n.includes(t.column) && He(e, i);
            })
          );
        }
        const n = r + s - 1;
        if (e.params.rewind || e.params.loop)
          for (let s = r - t; s <= n + t; s += 1) {
            const t = ((s % i) + i) % i;
            (t < r || t > n) && He(e, t);
          }
        else
          for (let s = Math.max(r - t, 0); s <= Math.min(n + t, i - 1); s += 1)
            s !== r && (s > n || s < r) && He(e, s);
      };
    var Be = {
      updateSize: function () {
        const e = this;
        let t, i;
        const s = e.el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : s.clientWidth),
          (i =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : s.clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === i && e.isVertical()) ||
            ((t =
              t -
              parseInt(Le(s, "padding-left") || 0, 10) -
              parseInt(Le(s, "padding-right") || 0, 10)),
            (i =
              i -
              parseInt(Le(s, "padding-top") || 0, 10) -
              parseInt(Le(s, "padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(i) && (i = 0),
            Object.assign(e, {
              width: t,
              height: i,
              size: e.isHorizontal() ? t : i,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t, i) {
          return parseFloat(t.getPropertyValue(e.getDirectionLabel(i)) || 0);
        }
        const i = e.params,
          {
            wrapperEl: s,
            slidesEl: r,
            size: n,
            rtlTranslate: o,
            wrongRTL: l,
          } = e,
          a = e.virtual && i.virtual.enabled,
          c = a ? e.virtual.slides.length : e.slides.length,
          d = Ce(r, `.${e.params.slideClass}, swiper-slide`),
          u = a ? e.virtual.slides.length : d.length;
        let h = [];
        const p = [],
          f = [];
        let g = i.slidesOffsetBefore;
        "function" == typeof g && (g = i.slidesOffsetBefore.call(e));
        let m = i.slidesOffsetAfter;
        "function" == typeof m && (m = i.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          b = e.slidesGrid.length;
        let y = i.spaceBetween,
          w = -g,
          S = 0,
          x = 0;
        if (void 0 === n) return;
        "string" == typeof y && y.indexOf("%") >= 0
          ? (y = (parseFloat(y.replace("%", "")) / 100) * n)
          : "string" == typeof y && (y = parseFloat(y)),
          (e.virtualSize = -y),
          d.forEach((e) => {
            o ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
              (e.style.marginBottom = ""),
              (e.style.marginTop = "");
          }),
          i.centeredSlides &&
            i.cssMode &&
            (xe(s, "--swiper-centered-offset-before", ""),
            xe(s, "--swiper-centered-offset-after", ""));
        const E = i.grid && i.grid.rows > 1 && e.grid;
        let C;
        E ? e.grid.initSlides(d) : e.grid && e.grid.unsetSlides();
        const T =
          "auto" === i.slidesPerView &&
          i.breakpoints &&
          Object.keys(i.breakpoints).filter(
            (e) => void 0 !== i.breakpoints[e].slidesPerView,
          ).length > 0;
        for (let s = 0; s < u; s += 1) {
          let r;
          if (
            ((C = 0),
            d[s] && (r = d[s]),
            E && e.grid.updateSlide(s, r, d),
            !d[s] || "none" !== Le(r, "display"))
          ) {
            if ("auto" === i.slidesPerView) {
              T && (d[s].style[e.getDirectionLabel("width")] = "");
              const n = getComputedStyle(r),
                o = r.style.transform,
                l = r.style.webkitTransform;
              if (
                (o && (r.style.transform = "none"),
                l && (r.style.webkitTransform = "none"),
                i.roundLengths)
              )
                C = e.isHorizontal() ? Ie(r, "width", !0) : Ie(r, "height", !0);
              else {
                const e = t(n, "width"),
                  i = t(n, "padding-left"),
                  s = t(n, "padding-right"),
                  o = t(n, "margin-left"),
                  l = t(n, "margin-right"),
                  a = n.getPropertyValue("box-sizing");
                if (a && "border-box" === a) C = e + o + l;
                else {
                  const { clientWidth: t, offsetWidth: n } = r;
                  C = e + i + s + o + l + (n - t);
                }
              }
              o && (r.style.transform = o),
                l && (r.style.webkitTransform = l),
                i.roundLengths && (C = Math.floor(C));
            } else
              (C = (n - (i.slidesPerView - 1) * y) / i.slidesPerView),
                i.roundLengths && (C = Math.floor(C)),
                d[s] && (d[s].style[e.getDirectionLabel("width")] = `${C}px`);
            d[s] && (d[s].swiperSlideSize = C),
              f.push(C),
              i.centeredSlides
                ? ((w = w + C / 2 + S / 2 + y),
                  0 === S && 0 !== s && (w = w - n / 2 - y),
                  0 === s && (w = w - n / 2 - y),
                  Math.abs(w) < 0.001 && (w = 0),
                  i.roundLengths && (w = Math.floor(w)),
                  x % i.slidesPerGroup == 0 && h.push(w),
                  p.push(w))
                : (i.roundLengths && (w = Math.floor(w)),
                  (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                    e.params.slidesPerGroup ==
                    0 && h.push(w),
                  p.push(w),
                  (w = w + C + y)),
              (e.virtualSize += C + y),
              (S = C),
              (x += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, n) + m),
          o &&
            l &&
            ("slide" === i.effect || "coverflow" === i.effect) &&
            (s.style.width = `${e.virtualSize + y}px`),
          i.setWrapperSize &&
            (s.style[e.getDirectionLabel("width")] = `${e.virtualSize + y}px`),
          E && e.grid.updateWrapperSize(C, h),
          !i.centeredSlides)
        ) {
          const t = [];
          for (let s = 0; s < h.length; s += 1) {
            let r = h[s];
            i.roundLengths && (r = Math.floor(r)),
              h[s] <= e.virtualSize - n && t.push(r);
          }
          (h = t),
            Math.floor(e.virtualSize - n) - Math.floor(h[h.length - 1]) > 1 &&
              h.push(e.virtualSize - n);
        }
        if (a && i.loop) {
          const t = f[0] + y;
          if (i.slidesPerGroup > 1) {
            const s = Math.ceil(
                (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                  i.slidesPerGroup,
              ),
              r = t * i.slidesPerGroup;
            for (let e = 0; e < s; e += 1) h.push(h[h.length - 1] + r);
          }
          for (
            let s = 0;
            s < e.virtual.slidesBefore + e.virtual.slidesAfter;
            s += 1
          )
            1 === i.slidesPerGroup && h.push(h[h.length - 1] + t),
              p.push(p[p.length - 1] + t),
              (e.virtualSize += t);
        }
        if ((0 === h.length && (h = [0]), 0 !== y)) {
          const t =
            e.isHorizontal() && o
              ? "marginLeft"
              : e.getDirectionLabel("marginRight");
          d.filter(
            (e, t) => !(i.cssMode && !i.loop) || t !== d.length - 1,
          ).forEach((e) => {
            e.style[t] = `${y}px`;
          });
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
          let e = 0;
          f.forEach((t) => {
            e += t + (y || 0);
          }),
            (e -= y);
          const t = e - n;
          h = h.map((e) => (e <= 0 ? -g : e > t ? t + m : e));
        }
        if (i.centerInsufficientSlides) {
          let e = 0;
          if (
            (f.forEach((t) => {
              e += t + (y || 0);
            }),
            (e -= y),
            e < n)
          ) {
            const t = (n - e) / 2;
            h.forEach((e, i) => {
              h[i] = e - t;
            }),
              p.forEach((e, i) => {
                p[i] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: d,
            snapGrid: h,
            slidesGrid: p,
            slidesSizesGrid: f,
          }),
          i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
        ) {
          xe(s, "--swiper-centered-offset-before", -h[0] + "px"),
            xe(
              s,
              "--swiper-centered-offset-after",
              e.size / 2 - f[f.length - 1] / 2 + "px",
            );
          const t = -e.snapGrid[0],
            i = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + i));
        }
        if (
          (u !== c && e.emit("slidesLengthChange"),
          h.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          p.length !== b && e.emit("slidesGridLengthChange"),
          i.watchSlidesProgress && e.updateSlidesOffset(),
          !(a || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
        ) {
          const t = `${i.containerModifierClass}backface-hidden`,
            s = e.el.classList.contains(t);
          u <= i.maxBackfaceHiddenSlides
            ? s || e.el.classList.add(t)
            : s && e.el.classList.remove(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          i = [],
          s = t.virtual && t.params.virtual.enabled;
        let r,
          n = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const o = (e) => (s ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach((e) => {
              i.push(e);
            });
          else
            for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
              const e = t.activeIndex + r;
              if (e > t.slides.length && !s) break;
              i.push(o(e));
            }
        else i.push(o(t.activeIndex));
        for (r = 0; r < i.length; r += 1)
          if (void 0 !== i[r]) {
            const e = i[r].offsetHeight;
            n = e > n ? e : n;
          }
        (n || 0 === n) && (t.wrapperEl.style.height = `${n}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides,
          i = e.isElement
            ? e.isHorizontal()
              ? e.wrapperEl.offsetLeft
              : e.wrapperEl.offsetTop
            : 0;
        for (let s = 0; s < t.length; s += 1)
          t[s].swiperSlideOffset =
            (e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop) -
            i -
            e.cssOverflowAdjustment();
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          i = t.params,
          { slides: s, rtlTranslate: r, snapGrid: n } = t;
        if (0 === s.length) return;
        void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
        let o = -e;
        r && (o = e),
          s.forEach((e) => {
            e.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass);
          }),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        let l = i.spaceBetween;
        "string" == typeof l && l.indexOf("%") >= 0
          ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
          : "string" == typeof l && (l = parseFloat(l));
        for (let e = 0; e < s.length; e += 1) {
          const a = s[e];
          let c = a.swiperSlideOffset;
          i.cssMode && i.centeredSlides && (c -= s[0].swiperSlideOffset);
          const d =
              (o + (i.centeredSlides ? t.minTranslate() : 0) - c) /
              (a.swiperSlideSize + l),
            u =
              (o - n[0] + (i.centeredSlides ? t.minTranslate() : 0) - c) /
              (a.swiperSlideSize + l),
            h = -(o - c),
            p = h + t.slidesSizesGrid[e],
            f = h >= 0 && h <= t.size - t.slidesSizesGrid[e];
          ((h >= 0 && h < t.size - 1) ||
            (p > 1 && p <= t.size) ||
            (h <= 0 && p >= t.size)) &&
            (t.visibleSlides.push(a),
            t.visibleSlidesIndexes.push(e),
            s[e].classList.add(i.slideVisibleClass)),
            f && s[e].classList.add(i.slideFullyVisibleClass),
            (a.progress = r ? -d : d),
            (a.originalProgress = r ? -u : u);
        }
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const i = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * i) || 0;
        }
        const i = t.params,
          s = t.maxTranslate() - t.minTranslate();
        let { progress: r, isBeginning: n, isEnd: o, progressLoop: l } = t;
        const a = n,
          c = o;
        if (0 === s) (r = 0), (n = !0), (o = !0);
        else {
          r = (e - t.minTranslate()) / s;
          const i = Math.abs(e - t.minTranslate()) < 1,
            l = Math.abs(e - t.maxTranslate()) < 1;
          (n = i || r <= 0), (o = l || r >= 1), i && (r = 0), l && (r = 1);
        }
        if (i.loop) {
          const i = t.getSlideIndexByData(0),
            s = t.getSlideIndexByData(t.slides.length - 1),
            r = t.slidesGrid[i],
            n = t.slidesGrid[s],
            o = t.slidesGrid[t.slidesGrid.length - 1],
            a = Math.abs(e);
          (l = a >= r ? (a - r) / o : (a + o - n) / o), l > 1 && (l -= 1);
        }
        Object.assign(t, {
          progress: r,
          progressLoop: l,
          isBeginning: n,
          isEnd: o,
        }),
          (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
            t.updateSlidesProgress(e),
          n && !a && t.emit("reachBeginning toEdge"),
          o && !c && t.emit("reachEnd toEdge"),
          ((a && !n) || (c && !o)) && t.emit("fromEdge"),
          t.emit("progress", r);
      },
      updateSlidesClasses: function () {
        const e = this,
          { slides: t, params: i, slidesEl: s, activeIndex: r } = e,
          n = e.virtual && i.virtual.enabled,
          o = e.grid && i.grid && i.grid.rows > 1,
          l = (e) => Ce(s, `.${i.slideClass}${e}, swiper-slide${e}`)[0];
        let a, c, d;
        if (
          (t.forEach((e) => {
            e.classList.remove(
              i.slideActiveClass,
              i.slideNextClass,
              i.slidePrevClass,
            );
          }),
          n)
        )
          if (i.loop) {
            let t = r - e.virtual.slidesBefore;
            t < 0 && (t = e.virtual.slides.length + t),
              t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
              (a = l(`[data-swiper-slide-index="${t}"]`));
          } else a = l(`[data-swiper-slide-index="${r}"]`);
        else
          o
            ? ((a = t.filter((e) => e.column === r)[0]),
              (d = t.filter((e) => e.column === r + 1)[0]),
              (c = t.filter((e) => e.column === r - 1)[0]))
            : (a = t[r]);
        a &&
          (a.classList.add(i.slideActiveClass),
          o
            ? (d && d.classList.add(i.slideNextClass),
              c && c.classList.add(i.slidePrevClass))
            : ((d = (function (e, t) {
                const i = [];
                for (; e.nextElementSibling; ) {
                  const s = e.nextElementSibling;
                  t ? s.matches(t) && i.push(s) : i.push(s), (e = s);
                }
                return i;
              })(a, `.${i.slideClass}, swiper-slide`)[0]),
              i.loop && !d && (d = t[0]),
              d && d.classList.add(i.slideNextClass),
              (c = (function (e, t) {
                const i = [];
                for (; e.previousElementSibling; ) {
                  const s = e.previousElementSibling;
                  t ? s.matches(t) && i.push(s) : i.push(s), (e = s);
                }
                return i;
              })(a, `.${i.slideClass}, swiper-slide`)[0]),
              i.loop && 0 === !c && (c = t[t.length - 1]),
              c && c.classList.add(i.slidePrevClass))),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          i = t.rtlTranslate ? t.translate : -t.translate,
          {
            snapGrid: s,
            params: r,
            activeIndex: n,
            realIndex: o,
            snapIndex: l,
          } = t;
        let a,
          c = e;
        const d = (e) => {
          let i = e - t.virtual.slidesBefore;
          return (
            i < 0 && (i = t.virtual.slides.length + i),
            i >= t.virtual.slides.length && (i -= t.virtual.slides.length),
            i
          );
        };
        if (
          (void 0 === c &&
            (c = (function (e) {
              const { slidesGrid: t, params: i } = e,
                s = e.rtlTranslate ? e.translate : -e.translate;
              let r;
              for (let e = 0; e < t.length; e += 1)
                void 0 !== t[e + 1]
                  ? s >= t[e] && s < t[e + 1] - (t[e + 1] - t[e]) / 2
                    ? (r = e)
                    : s >= t[e] && s < t[e + 1] && (r = e + 1)
                  : s >= t[e] && (r = e);
              return (
                i.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0), r
              );
            })(t)),
          s.indexOf(i) >= 0)
        )
          a = s.indexOf(i);
        else {
          const e = Math.min(r.slidesPerGroupSkip, c);
          a = e + Math.floor((c - e) / r.slidesPerGroup);
        }
        if ((a >= s.length && (a = s.length - 1), c === n && !t.params.loop))
          return void (
            a !== l && ((t.snapIndex = a), t.emit("snapIndexChange"))
          );
        if (c === n && t.params.loop && t.virtual && t.params.virtual.enabled)
          return void (t.realIndex = d(c));
        const u = t.grid && r.grid && r.grid.rows > 1;
        let h;
        if (t.virtual && r.virtual.enabled && r.loop) h = d(c);
        else if (u) {
          const e = t.slides.filter((e) => e.column === c)[0];
          let i = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
          Number.isNaN(i) && (i = Math.max(t.slides.indexOf(e), 0)),
            (h = Math.floor(i / r.grid.rows));
        } else if (t.slides[c]) {
          const e = t.slides[c].getAttribute("data-swiper-slide-index");
          h = e ? parseInt(e, 10) : c;
        } else h = c;
        Object.assign(t, {
          previousSnapIndex: l,
          snapIndex: a,
          previousRealIndex: o,
          realIndex: h,
          previousIndex: n,
          activeIndex: c,
        }),
          t.initialized && Ge(t),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            (o !== h && t.emit("realIndexChange"), t.emit("slideChange"));
      },
      updateClickedSlide: function (e, t) {
        const i = this,
          s = i.params;
        let r = e.closest(`.${s.slideClass}, swiper-slide`);
        !r &&
          i.isElement &&
          t &&
          t.length > 1 &&
          t.includes(e) &&
          [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
            !r &&
              e.matches &&
              e.matches(`.${s.slideClass}, swiper-slide`) &&
              (r = e);
          });
        let n,
          o = !1;
        if (r)
          for (let e = 0; e < i.slides.length; e += 1)
            if (i.slides[e] === r) {
              (o = !0), (n = e);
              break;
            }
        if (!r || !o)
          return (i.clickedSlide = void 0), void (i.clickedIndex = void 0);
        (i.clickedSlide = r),
          i.virtual && i.params.virtual.enabled
            ? (i.clickedIndex = parseInt(
                r.getAttribute("data-swiper-slide-index"),
                10,
              ))
            : (i.clickedIndex = n),
          s.slideToClickedSlide &&
            void 0 !== i.clickedIndex &&
            i.clickedIndex !== i.activeIndex &&
            i.slideToClickedSlide();
      },
    };
    var We = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const { params: t, rtlTranslate: i, translate: s, wrapperEl: r } = this;
        if (t.virtualTranslate) return i ? -s : s;
        if (t.cssMode) return s;
        let n = ye(r, e);
        return (n += this.cssOverflowAdjustment()), i && (n = -n), n || 0;
      },
      setTranslate: function (e, t) {
        const i = this,
          { rtlTranslate: s, params: r, wrapperEl: n, progress: o } = i;
        let l,
          a = 0,
          c = 0;
        i.isHorizontal() ? (a = s ? -e : e) : (c = e),
          r.roundLengths && ((a = Math.floor(a)), (c = Math.floor(c))),
          (i.previousTranslate = i.translate),
          (i.translate = i.isHorizontal() ? a : c),
          r.cssMode
            ? (n[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                i.isHorizontal() ? -a : -c)
            : r.virtualTranslate ||
              (i.isHorizontal()
                ? (a -= i.cssOverflowAdjustment())
                : (c -= i.cssOverflowAdjustment()),
              (n.style.transform = `translate3d(${a}px, ${c}px, 0px)`));
        const d = i.maxTranslate() - i.minTranslate();
        (l = 0 === d ? 0 : (e - i.minTranslate()) / d),
          l !== o && i.updateProgress(e),
          i.emit("setTranslate", i.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, i, s, r) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === i && (i = !0),
          void 0 === s && (s = !0);
        const n = this,
          { params: o, wrapperEl: l } = n;
        if (n.animating && o.preventInteractionOnTransition) return !1;
        const a = n.minTranslate(),
          c = n.maxTranslate();
        let d;
        if (
          ((d = s && e > a ? a : s && e < c ? c : e),
          n.updateProgress(d),
          o.cssMode)
        ) {
          const e = n.isHorizontal();
          if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!n.support.smoothScroll)
              return (
                Ee({ swiper: n, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            l.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (n.setTransition(0),
              n.setTranslate(d),
              i &&
                (n.emit("beforeTransitionStart", t, r),
                n.emit("transitionEnd")))
            : (n.setTransition(t),
              n.setTranslate(d),
              i &&
                (n.emit("beforeTransitionStart", t, r),
                n.emit("transitionStart")),
              n.animating ||
                ((n.animating = !0),
                n.onTranslateToWrapperTransitionEnd ||
                  (n.onTranslateToWrapperTransitionEnd = function (e) {
                    n &&
                      !n.destroyed &&
                      e.target === this &&
                      (n.wrapperEl.removeEventListener(
                        "transitionend",
                        n.onTranslateToWrapperTransitionEnd,
                      ),
                      (n.onTranslateToWrapperTransitionEnd = null),
                      delete n.onTranslateToWrapperTransitionEnd,
                      i && n.emit("transitionEnd"));
                  }),
                n.wrapperEl.addEventListener(
                  "transitionend",
                  n.onTranslateToWrapperTransitionEnd,
                ))),
          !0
        );
      },
    };
    function Fe(e) {
      let { swiper: t, runCallbacks: i, direction: s, step: r } = e;
      const { activeIndex: n, previousIndex: o } = t;
      let l = s;
      if (
        (l || (l = n > o ? "next" : n < o ? "prev" : "reset"),
        t.emit(`transition${r}`),
        i && n !== o)
      ) {
        if ("reset" === l) return void t.emit(`slideResetTransition${r}`);
        t.emit(`slideChangeTransition${r}`),
          "next" === l
            ? t.emit(`slideNextTransition${r}`)
            : t.emit(`slidePrevTransition${r}`);
      }
    }
    var Re = {
      slideTo: function (e, t, i, s, r) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === i && (i = !0),
          "string" == typeof e && (e = parseInt(e, 10));
        const n = this;
        let o = e;
        o < 0 && (o = 0);
        const {
          params: l,
          snapGrid: a,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: u,
          rtlTranslate: h,
          wrapperEl: p,
          enabled: f,
        } = n;
        if (
          (n.animating && l.preventInteractionOnTransition) ||
          (!f && !s && !r)
        )
          return !1;
        const g = Math.min(n.params.slidesPerGroupSkip, o);
        let m = g + Math.floor((o - g) / n.params.slidesPerGroup);
        m >= a.length && (m = a.length - 1);
        const v = -a[m];
        if (l.normalizeSlideIndex)
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * v),
              i = Math.floor(100 * c[e]),
              s = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= i && t < s - (s - i) / 2
                ? (o = e)
                : t >= i && t < s && (o = e + 1)
              : t >= i && (o = e);
          }
        if (n.initialized && o !== u) {
          if (
            !n.allowSlideNext &&
            (h
              ? v > n.translate && v > n.minTranslate()
              : v < n.translate && v < n.minTranslate())
          )
            return !1;
          if (
            !n.allowSlidePrev &&
            v > n.translate &&
            v > n.maxTranslate() &&
            (u || 0) !== o
          )
            return !1;
        }
        let b;
        if (
          (o !== (d || 0) && i && n.emit("beforeSlideChangeStart"),
          n.updateProgress(v),
          (b = o > u ? "next" : o < u ? "prev" : "reset"),
          (h && -v === n.translate) || (!h && v === n.translate))
        )
          return (
            n.updateActiveIndex(o),
            l.autoHeight && n.updateAutoHeight(),
            n.updateSlidesClasses(),
            "slide" !== l.effect && n.setTranslate(v),
            "reset" !== b && (n.transitionStart(i, b), n.transitionEnd(i, b)),
            !1
          );
        if (l.cssMode) {
          const e = n.isHorizontal(),
            i = h ? v : -v;
          if (0 === t) {
            const t = n.virtual && n.params.virtual.enabled;
            t &&
              ((n.wrapperEl.style.scrollSnapType = "none"),
              (n._immediateVirtual = !0)),
              t && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
                ? ((n._cssModeVirtualInitialSet = !0),
                  requestAnimationFrame(() => {
                    p[e ? "scrollLeft" : "scrollTop"] = i;
                  }))
                : (p[e ? "scrollLeft" : "scrollTop"] = i),
              t &&
                requestAnimationFrame(() => {
                  (n.wrapperEl.style.scrollSnapType = ""),
                    (n._immediateVirtual = !1);
                });
          } else {
            if (!n.support.smoothScroll)
              return (
                Ee({ swiper: n, targetPosition: i, side: e ? "left" : "top" }),
                !0
              );
            p.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
          }
          return !0;
        }
        return (
          n.setTransition(t),
          n.setTranslate(v),
          n.updateActiveIndex(o),
          n.updateSlidesClasses(),
          n.emit("beforeTransitionStart", t, s),
          n.transitionStart(i, b),
          0 === t
            ? n.transitionEnd(i, b)
            : n.animating ||
              ((n.animating = !0),
              n.onSlideToWrapperTransitionEnd ||
                (n.onSlideToWrapperTransitionEnd = function (e) {
                  n &&
                    !n.destroyed &&
                    e.target === this &&
                    (n.wrapperEl.removeEventListener(
                      "transitionend",
                      n.onSlideToWrapperTransitionEnd,
                    ),
                    (n.onSlideToWrapperTransitionEnd = null),
                    delete n.onSlideToWrapperTransitionEnd,
                    n.transitionEnd(i, b));
                }),
              n.wrapperEl.addEventListener(
                "transitionend",
                n.onSlideToWrapperTransitionEnd,
              )),
          !0
        );
      },
      slideToLoop: function (e, t, i, s) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === i && (i = !0),
          "string" == typeof e)
        ) {
          e = parseInt(e, 10);
        }
        const r = this,
          n = r.grid && r.params.grid && r.params.grid.rows > 1;
        let o = e;
        if (r.params.loop)
          if (r.virtual && r.params.virtual.enabled)
            o += r.virtual.slidesBefore;
          else {
            let e;
            if (n) {
              const t = o * r.params.grid.rows;
              e = r.slides.filter(
                (e) => 1 * e.getAttribute("data-swiper-slide-index") === t,
              )[0].column;
            } else e = r.getSlideIndexByData(o);
            const t = n
                ? Math.ceil(r.slides.length / r.params.grid.rows)
                : r.slides.length,
              { centeredSlides: i } = r.params;
            let s = r.params.slidesPerView;
            "auto" === s
              ? (s = r.slidesPerViewDynamic())
              : ((s = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
                i && s % 2 == 0 && (s += 1));
            let l = t - e < s;
            if ((i && (l = l || e < Math.ceil(s / 2)), l)) {
              const s = i
                ? e < r.activeIndex
                  ? "prev"
                  : "next"
                : e - r.activeIndex - 1 < r.params.slidesPerView
                ? "next"
                : "prev";
              r.loopFix({
                direction: s,
                slideTo: !0,
                activeSlideIndex: "next" === s ? e + 1 : e - t + 1,
                slideRealIndex: "next" === s ? r.realIndex : void 0,
              });
            }
            if (n) {
              const e = o * r.params.grid.rows;
              o = r.slides.filter(
                (t) => 1 * t.getAttribute("data-swiper-slide-index") === e,
              )[0].column;
            } else o = r.getSlideIndexByData(o);
          }
        return (
          requestAnimationFrame(() => {
            r.slideTo(o, t, i, s);
          }),
          r
        );
      },
      slideNext: function (e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const s = this,
          { enabled: r, params: n, animating: o } = s;
        if (!r) return s;
        let l = n.slidesPerGroup;
        "auto" === n.slidesPerView &&
          1 === n.slidesPerGroup &&
          n.slidesPerGroupAuto &&
          (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
        const a = s.activeIndex < n.slidesPerGroupSkip ? 1 : l,
          c = s.virtual && n.virtual.enabled;
        if (n.loop) {
          if (o && !c && n.loopPreventsSliding) return !1;
          if (
            (s.loopFix({ direction: "next" }),
            (s._clientLeft = s.wrapperEl.clientLeft),
            s.activeIndex === s.slides.length - 1 && n.cssMode)
          )
            return (
              requestAnimationFrame(() => {
                s.slideTo(s.activeIndex + a, e, t, i);
              }),
              !0
            );
        }
        return n.rewind && s.isEnd
          ? s.slideTo(0, e, t, i)
          : s.slideTo(s.activeIndex + a, e, t, i);
      },
      slidePrev: function (e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const s = this,
          {
            params: r,
            snapGrid: n,
            slidesGrid: o,
            rtlTranslate: l,
            enabled: a,
            animating: c,
          } = s;
        if (!a) return s;
        const d = s.virtual && r.virtual.enabled;
        if (r.loop) {
          if (c && !d && r.loopPreventsSliding) return !1;
          s.loopFix({ direction: "prev" }),
            (s._clientLeft = s.wrapperEl.clientLeft);
        }
        function u(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const h = u(l ? s.translate : -s.translate),
          p = n.map((e) => u(e));
        let f = n[p.indexOf(h) - 1];
        if (void 0 === f && r.cssMode) {
          let e;
          n.forEach((t, i) => {
            h >= t && (e = i);
          }),
            void 0 !== e && (f = n[e > 0 ? e - 1 : e]);
        }
        let g = 0;
        if (
          (void 0 !== f &&
            ((g = o.indexOf(f)),
            g < 0 && (g = s.activeIndex - 1),
            "auto" === r.slidesPerView &&
              1 === r.slidesPerGroup &&
              r.slidesPerGroupAuto &&
              ((g = g - s.slidesPerViewDynamic("previous", !0) + 1),
              (g = Math.max(g, 0)))),
          r.rewind && s.isBeginning)
        ) {
          const r =
            s.params.virtual && s.params.virtual.enabled && s.virtual
              ? s.virtual.slides.length - 1
              : s.slides.length - 1;
          return s.slideTo(r, e, t, i);
        }
        return r.loop && 0 === s.activeIndex && r.cssMode
          ? (requestAnimationFrame(() => {
              s.slideTo(g, e, t, i);
            }),
            !0)
          : s.slideTo(g, e, t, i);
      },
      slideReset: function (e, t, i) {
        return (
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, i)
        );
      },
      slideToClosest: function (e, t, i, s) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === s && (s = 0.5);
        const r = this;
        let n = r.activeIndex;
        const o = Math.min(r.params.slidesPerGroupSkip, n),
          l = o + Math.floor((n - o) / r.params.slidesPerGroup),
          a = r.rtlTranslate ? r.translate : -r.translate;
        if (a >= r.snapGrid[l]) {
          const e = r.snapGrid[l];
          a - e > (r.snapGrid[l + 1] - e) * s && (n += r.params.slidesPerGroup);
        } else {
          const e = r.snapGrid[l - 1];
          a - e <= (r.snapGrid[l] - e) * s && (n -= r.params.slidesPerGroup);
        }
        return (
          (n = Math.max(n, 0)),
          (n = Math.min(n, r.slidesGrid.length - 1)),
          r.slideTo(n, e, t, i)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, slidesEl: i } = e,
          s =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let r,
          n = e.clickedIndex;
        const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
        if (t.loop) {
          if (e.animating) return;
          (r = parseInt(
            e.clickedSlide.getAttribute("data-swiper-slide-index"),
            10,
          )),
            t.centeredSlides
              ? n < e.loopedSlides - s / 2 ||
                n > e.slides.length - e.loopedSlides + s / 2
                ? (e.loopFix(),
                  (n = e.getSlideIndex(
                    Ce(i, `${o}[data-swiper-slide-index="${r}"]`)[0],
                  )),
                  ve(() => {
                    e.slideTo(n);
                  }))
                : e.slideTo(n)
              : n > e.slides.length - s
              ? (e.loopFix(),
                (n = e.getSlideIndex(
                  Ce(i, `${o}[data-swiper-slide-index="${r}"]`)[0],
                )),
                ve(() => {
                  e.slideTo(n);
                }))
              : e.slideTo(n);
        } else e.slideTo(n);
      },
    };
    var $e = {
      loopCreate: function (e) {
        const t = this,
          { params: i, slidesEl: s } = t;
        if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
        const r = () => {
            Ce(s, `.${i.slideClass}, swiper-slide`).forEach((e, t) => {
              e.setAttribute("data-swiper-slide-index", t);
            });
          },
          n = t.grid && i.grid && i.grid.rows > 1,
          o = i.slidesPerGroup * (n ? i.grid.rows : 1),
          l = t.slides.length % o != 0,
          a = n && t.slides.length % i.grid.rows != 0,
          c = (e) => {
            for (let s = 0; s < e; s += 1) {
              const e = t.isElement
                ? Ae("swiper-slide", [i.slideBlankClass])
                : Ae("div", [i.slideClass, i.slideBlankClass]);
              t.slidesEl.append(e);
            }
          };
        if (l) {
          if (i.loopAddBlankSlides) {
            c(o - (t.slides.length % o)), t.recalcSlides(), t.updateSlides();
          } else
            Te(
              "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
            );
          r();
        } else if (a) {
          if (i.loopAddBlankSlides) {
            c(i.grid.rows - (t.slides.length % i.grid.rows)),
              t.recalcSlides(),
              t.updateSlides();
          } else
            Te(
              "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
            );
          r();
        } else r();
        t.loopFix({
          slideRealIndex: e,
          direction: i.centeredSlides ? void 0 : "next",
        });
      },
      loopFix: function (e) {
        let {
          slideRealIndex: t,
          slideTo: i = !0,
          direction: s,
          setTranslate: r,
          activeSlideIndex: n,
          byController: o,
          byMousewheel: l,
        } = void 0 === e ? {} : e;
        const a = this;
        if (!a.params.loop) return;
        a.emit("beforeLoopFix");
        const {
            slides: c,
            allowSlidePrev: d,
            allowSlideNext: u,
            slidesEl: h,
            params: p,
          } = a,
          { centeredSlides: f } = p;
        if (
          ((a.allowSlidePrev = !0),
          (a.allowSlideNext = !0),
          a.virtual && p.virtual.enabled)
        )
          return (
            i &&
              (p.centeredSlides || 0 !== a.snapIndex
                ? p.centeredSlides && a.snapIndex < p.slidesPerView
                  ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
                  : a.snapIndex === a.snapGrid.length - 1 &&
                    a.slideTo(a.virtual.slidesBefore, 0, !1, !0)
                : a.slideTo(a.virtual.slides.length, 0, !1, !0)),
            (a.allowSlidePrev = d),
            (a.allowSlideNext = u),
            void a.emit("loopFix")
          );
        let g = p.slidesPerView;
        "auto" === g
          ? (g = a.slidesPerViewDynamic())
          : ((g = Math.ceil(parseFloat(p.slidesPerView, 10))),
            f && g % 2 == 0 && (g += 1));
        const m = p.slidesPerGroupAuto ? g : p.slidesPerGroup;
        let v = m;
        v % m != 0 && (v += m - (v % m)),
          (v += p.loopAdditionalSlides),
          (a.loopedSlides = v);
        const b = a.grid && p.grid && p.grid.rows > 1;
        c.length < g + v
          ? Te(
              "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters",
            )
          : b &&
            "row" === p.grid.fill &&
            Te(
              "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`",
            );
        const y = [],
          w = [];
        let S = a.activeIndex;
        void 0 === n
          ? (n = a.getSlideIndex(
              c.filter((e) => e.classList.contains(p.slideActiveClass))[0],
            ))
          : (S = n);
        const x = "next" === s || !s,
          E = "prev" === s || !s;
        let C = 0,
          T = 0;
        const A = b ? Math.ceil(c.length / p.grid.rows) : c.length,
          L = (b ? c[n].column : n) + (f && void 0 === r ? -g / 2 + 0.5 : 0);
        if (L < v) {
          C = Math.max(v - L, m);
          for (let e = 0; e < v - L; e += 1) {
            const t = e - Math.floor(e / A) * A;
            if (b) {
              const e = A - t - 1;
              for (let t = c.length - 1; t >= 0; t -= 1)
                c[t].column === e && y.push(t);
            } else y.push(A - t - 1);
          }
        } else if (L + g > A - v) {
          T = Math.max(L - (A - 2 * v), m);
          for (let e = 0; e < T; e += 1) {
            const t = e - Math.floor(e / A) * A;
            b
              ? c.forEach((e, i) => {
                  e.column === t && w.push(i);
                })
              : w.push(t);
          }
        }
        if (
          ((a.__preventObserver__ = !0),
          requestAnimationFrame(() => {
            a.__preventObserver__ = !1;
          }),
          E &&
            y.forEach((e) => {
              (c[e].swiperLoopMoveDOM = !0),
                h.prepend(c[e]),
                (c[e].swiperLoopMoveDOM = !1);
            }),
          x &&
            w.forEach((e) => {
              (c[e].swiperLoopMoveDOM = !0),
                h.append(c[e]),
                (c[e].swiperLoopMoveDOM = !1);
            }),
          a.recalcSlides(),
          "auto" === p.slidesPerView
            ? a.updateSlides()
            : b &&
              ((y.length > 0 && E) || (w.length > 0 && x)) &&
              a.slides.forEach((e, t) => {
                a.grid.updateSlide(t, e, a.slides);
              }),
          p.watchSlidesProgress && a.updateSlidesOffset(),
          i)
        )
          if (y.length > 0 && E) {
            if (void 0 === t) {
              const e = a.slidesGrid[S],
                t = a.slidesGrid[S + C] - e;
              l
                ? a.setTranslate(a.translate - t)
                : (a.slideTo(S + C, 0, !1, !0),
                  r &&
                    ((a.touchEventsData.startTranslate =
                      a.touchEventsData.startTranslate - t),
                    (a.touchEventsData.currentTranslate =
                      a.touchEventsData.currentTranslate - t)));
            } else if (r) {
              const e = b ? y.length / p.grid.rows : y.length;
              a.slideTo(a.activeIndex + e, 0, !1, !0),
                (a.touchEventsData.currentTranslate = a.translate);
            }
          } else if (w.length > 0 && x)
            if (void 0 === t) {
              const e = a.slidesGrid[S],
                t = a.slidesGrid[S - T] - e;
              l
                ? a.setTranslate(a.translate - t)
                : (a.slideTo(S - T, 0, !1, !0),
                  r &&
                    ((a.touchEventsData.startTranslate =
                      a.touchEventsData.startTranslate - t),
                    (a.touchEventsData.currentTranslate =
                      a.touchEventsData.currentTranslate - t)));
            } else {
              const e = b ? w.length / p.grid.rows : w.length;
              a.slideTo(a.activeIndex - e, 0, !1, !0);
            }
        if (
          ((a.allowSlidePrev = d),
          (a.allowSlideNext = u),
          a.controller && a.controller.control && !o)
        ) {
          const e = {
            slideRealIndex: t,
            direction: s,
            setTranslate: r,
            activeSlideIndex: n,
            byController: !0,
          };
          Array.isArray(a.controller.control)
            ? a.controller.control.forEach((t) => {
                !t.destroyed &&
                  t.params.loop &&
                  t.loopFix({
                    ...e,
                    slideTo: t.params.slidesPerView === p.slidesPerView && i,
                  });
              })
            : a.controller.control instanceof a.constructor &&
              a.controller.control.params.loop &&
              a.controller.control.loopFix({
                ...e,
                slideTo:
                  a.controller.control.params.slidesPerView ===
                    p.slidesPerView && i,
              });
        }
        a.emit("loopFix");
      },
      loopDestroy: function () {
        const e = this,
          { params: t, slidesEl: i } = e;
        if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
        e.recalcSlides();
        const s = [];
        e.slides.forEach((e) => {
          const t =
            void 0 === e.swiperSlideIndex
              ? 1 * e.getAttribute("data-swiper-slide-index")
              : e.swiperSlideIndex;
          s[t] = e;
        }),
          e.slides.forEach((e) => {
            e.removeAttribute("data-swiper-slide-index");
          }),
          s.forEach((e) => {
            i.append(e);
          }),
          e.recalcSlides(),
          e.slideTo(e.realIndex, 0);
      },
    };
    function je(e, t, i) {
      const s = me(),
        { params: r } = e,
        n = r.edgeSwipeDetection,
        o = r.edgeSwipeThreshold;
      return (
        !n ||
        !(i <= o || i >= s.innerWidth - o) ||
        ("prevent" === n && (t.preventDefault(), !0))
      );
    }
    function qe(e) {
      const t = this,
        i = fe();
      let s = e;
      s.originalEvent && (s = s.originalEvent);
      const r = t.touchEventsData;
      if ("pointerdown" === s.type) {
        if (null !== r.pointerId && r.pointerId !== s.pointerId) return;
        r.pointerId = s.pointerId;
      } else
        "touchstart" === s.type &&
          1 === s.targetTouches.length &&
          (r.touchId = s.targetTouches[0].identifier);
      if ("touchstart" === s.type)
        return void je(t, s, s.targetTouches[0].pageX);
      const { params: n, touches: o, enabled: l } = t;
      if (!l) return;
      if (!n.simulateTouch && "mouse" === s.pointerType) return;
      if (t.animating && n.preventInteractionOnTransition) return;
      !t.animating && n.cssMode && n.loop && t.loopFix();
      let a = s.target;
      if ("wrapper" === n.touchEventsTarget && !t.wrapperEl.contains(a)) return;
      if ("which" in s && 3 === s.which) return;
      if ("button" in s && s.button > 0) return;
      if (r.isTouched && r.isMoved) return;
      const c = !!n.noSwipingClass && "" !== n.noSwipingClass,
        d = s.composedPath ? s.composedPath() : s.path;
      c && s.target && s.target.shadowRoot && d && (a = d[0]);
      const u = n.noSwipingSelector
          ? n.noSwipingSelector
          : `.${n.noSwipingClass}`,
        h = !(!s.target || !s.target.shadowRoot);
      if (
        n.noSwiping &&
        (h
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(i) {
                  if (!i || i === fe() || i === me()) return null;
                  i.assignedSlot && (i = i.assignedSlot);
                  const s = i.closest(e);
                  return s || i.getRootNode
                    ? s || t(i.getRootNode().host)
                    : null;
                })(t)
              );
            })(u, a)
          : a.closest(u))
      )
        return void (t.allowClick = !0);
      if (n.swipeHandler && !a.closest(n.swipeHandler)) return;
      (o.currentX = s.pageX), (o.currentY = s.pageY);
      const p = o.currentX,
        f = o.currentY;
      if (!je(t, s, p)) return;
      Object.assign(r, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
        (o.startX = p),
        (o.startY = f),
        (r.touchStartTime = be()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        n.threshold > 0 && (r.allowThresholdMove = !1);
      let g = !0;
      a.matches(r.focusableElements) &&
        ((g = !1), "SELECT" === a.nodeName && (r.isTouched = !1)),
        i.activeElement &&
          i.activeElement.matches(r.focusableElements) &&
          i.activeElement !== a &&
          i.activeElement.blur();
      const m = g && t.allowTouchMove && n.touchStartPreventDefault;
      (!n.touchStartForcePreventDefault && !m) ||
        a.isContentEditable ||
        s.preventDefault(),
        n.freeMode &&
          n.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !n.cssMode &&
          t.freeMode.onTouchStart(),
        t.emit("touchStart", s);
    }
    function Ue(e) {
      const t = fe(),
        i = this,
        s = i.touchEventsData,
        { params: r, touches: n, rtlTranslate: o, enabled: l } = i;
      if (!l) return;
      if (!r.simulateTouch && "mouse" === e.pointerType) return;
      let a,
        c = e;
      if (
        (c.originalEvent && (c = c.originalEvent), "pointermove" === c.type)
      ) {
        if (null !== s.touchId) return;
        if (c.pointerId !== s.pointerId) return;
      }
      if ("touchmove" === c.type) {
        if (
          ((a = [...c.changedTouches].filter(
            (e) => e.identifier === s.touchId,
          )[0]),
          !a || a.identifier !== s.touchId)
        )
          return;
      } else a = c;
      if (!s.isTouched)
        return void (
          s.startMoving &&
          s.isScrolling &&
          i.emit("touchMoveOpposite", c)
        );
      const d = a.pageX,
        u = a.pageY;
      if (c.preventedByNestedSwiper) return (n.startX = d), void (n.startY = u);
      if (!i.allowTouchMove)
        return (
          c.target.matches(s.focusableElements) || (i.allowClick = !1),
          void (
            s.isTouched &&
            (Object.assign(n, {
              startX: d,
              startY: u,
              currentX: d,
              currentY: u,
            }),
            (s.touchStartTime = be()))
          )
        );
      if (r.touchReleaseOnEdges && !r.loop)
        if (i.isVertical()) {
          if (
            (u < n.startY && i.translate <= i.maxTranslate()) ||
            (u > n.startY && i.translate >= i.minTranslate())
          )
            return (s.isTouched = !1), void (s.isMoved = !1);
        } else if (
          (d < n.startX && i.translate <= i.maxTranslate()) ||
          (d > n.startX && i.translate >= i.minTranslate())
        )
          return;
      if (
        t.activeElement &&
        c.target === t.activeElement &&
        c.target.matches(s.focusableElements)
      )
        return (s.isMoved = !0), void (i.allowClick = !1);
      s.allowTouchCallbacks && i.emit("touchMove", c),
        (n.previousX = n.currentX),
        (n.previousY = n.currentY),
        (n.currentX = d),
        (n.currentY = u);
      const h = n.currentX - n.startX,
        p = n.currentY - n.startY;
      if (i.params.threshold && Math.sqrt(h ** 2 + p ** 2) < i.params.threshold)
        return;
      if (void 0 === s.isScrolling) {
        let e;
        (i.isHorizontal() && n.currentY === n.startY) ||
        (i.isVertical() && n.currentX === n.startX)
          ? (s.isScrolling = !1)
          : h * h + p * p >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(p), Math.abs(h))) / Math.PI),
            (s.isScrolling = i.isHorizontal()
              ? e > r.touchAngle
              : 90 - e > r.touchAngle));
      }
      if (
        (s.isScrolling && i.emit("touchMoveOpposite", c),
        void 0 === s.startMoving &&
          ((n.currentX === n.startX && n.currentY === n.startY) ||
            (s.startMoving = !0)),
        s.isScrolling)
      )
        return void (s.isTouched = !1);
      if (!s.startMoving) return;
      (i.allowClick = !1),
        !r.cssMode && c.cancelable && c.preventDefault(),
        r.touchMoveStopPropagation && !r.nested && c.stopPropagation();
      let f = i.isHorizontal() ? h : p,
        g = i.isHorizontal()
          ? n.currentX - n.previousX
          : n.currentY - n.previousY;
      r.oneWayMovement &&
        ((f = Math.abs(f) * (o ? 1 : -1)), (g = Math.abs(g) * (o ? 1 : -1))),
        (n.diff = f),
        (f *= r.touchRatio),
        o && ((f = -f), (g = -g));
      const m = i.touchesDirection;
      (i.swipeDirection = f > 0 ? "prev" : "next"),
        (i.touchesDirection = g > 0 ? "prev" : "next");
      const v = i.params.loop && !r.cssMode,
        b =
          ("next" === i.touchesDirection && i.allowSlideNext) ||
          ("prev" === i.touchesDirection && i.allowSlidePrev);
      if (!s.isMoved) {
        if (
          (v && b && i.loopFix({ direction: i.swipeDirection }),
          (s.startTranslate = i.getTranslate()),
          i.setTransition(0),
          i.animating)
        ) {
          const e = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          i.wrapperEl.dispatchEvent(e);
        }
        (s.allowMomentumBounce = !1),
          !r.grabCursor ||
            (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
            i.setGrabCursor(!0),
          i.emit("sliderFirstMove", c);
      }
      if (
        (new Date().getTime(),
        s.isMoved &&
          s.allowThresholdMove &&
          m !== i.touchesDirection &&
          v &&
          b &&
          Math.abs(f) >= 1)
      )
        return (
          Object.assign(n, {
            startX: d,
            startY: u,
            currentX: d,
            currentY: u,
            startTranslate: s.currentTranslate,
          }),
          (s.loopSwapReset = !0),
          void (s.startTranslate = s.currentTranslate)
        );
      i.emit("sliderMove", c),
        (s.isMoved = !0),
        (s.currentTranslate = f + s.startTranslate);
      let y = !0,
        w = r.resistanceRatio;
      if (
        (r.touchReleaseOnEdges && (w = 0),
        f > 0
          ? (v &&
              b &&
              s.allowThresholdMove &&
              s.currentTranslate >
                (r.centeredSlides
                  ? i.minTranslate() - i.slidesSizesGrid[i.activeIndex + 1]
                  : i.minTranslate()) &&
              i.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0,
              }),
            s.currentTranslate > i.minTranslate() &&
              ((y = !1),
              r.resistance &&
                (s.currentTranslate =
                  i.minTranslate() -
                  1 +
                  (-i.minTranslate() + s.startTranslate + f) ** w)))
          : f < 0 &&
            (v &&
              b &&
              s.allowThresholdMove &&
              s.currentTranslate <
                (r.centeredSlides
                  ? i.maxTranslate() +
                    i.slidesSizesGrid[i.slidesSizesGrid.length - 1]
                  : i.maxTranslate()) &&
              i.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex:
                  i.slides.length -
                  ("auto" === r.slidesPerView
                    ? i.slidesPerViewDynamic()
                    : Math.ceil(parseFloat(r.slidesPerView, 10))),
              }),
            s.currentTranslate < i.maxTranslate() &&
              ((y = !1),
              r.resistance &&
                (s.currentTranslate =
                  i.maxTranslate() +
                  1 -
                  (i.maxTranslate() - s.startTranslate - f) ** w))),
        y && (c.preventedByNestedSwiper = !0),
        !i.allowSlideNext &&
          "next" === i.swipeDirection &&
          s.currentTranslate < s.startTranslate &&
          (s.currentTranslate = s.startTranslate),
        !i.allowSlidePrev &&
          "prev" === i.swipeDirection &&
          s.currentTranslate > s.startTranslate &&
          (s.currentTranslate = s.startTranslate),
        i.allowSlidePrev ||
          i.allowSlideNext ||
          (s.currentTranslate = s.startTranslate),
        r.threshold > 0)
      ) {
        if (!(Math.abs(f) > r.threshold || s.allowThresholdMove))
          return void (s.currentTranslate = s.startTranslate);
        if (!s.allowThresholdMove)
          return (
            (s.allowThresholdMove = !0),
            (n.startX = n.currentX),
            (n.startY = n.currentY),
            (s.currentTranslate = s.startTranslate),
            void (n.diff = i.isHorizontal()
              ? n.currentX - n.startX
              : n.currentY - n.startY)
          );
      }
      r.followFinger &&
        !r.cssMode &&
        (((r.freeMode && r.freeMode.enabled && i.freeMode) ||
          r.watchSlidesProgress) &&
          (i.updateActiveIndex(), i.updateSlidesClasses()),
        r.freeMode &&
          r.freeMode.enabled &&
          i.freeMode &&
          i.freeMode.onTouchMove(),
        i.updateProgress(s.currentTranslate),
        i.setTranslate(s.currentTranslate));
    }
    function Ye(e) {
      const t = this,
        i = t.touchEventsData;
      let s,
        r = e;
      r.originalEvent && (r = r.originalEvent);
      if ("touchend" === r.type || "touchcancel" === r.type) {
        if (
          ((s = [...r.changedTouches].filter(
            (e) => e.identifier === i.touchId,
          )[0]),
          !s || s.identifier !== i.touchId)
        )
          return;
      } else {
        if (null !== i.touchId) return;
        if (r.pointerId !== i.pointerId) return;
        s = r;
      }
      if (
        ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
          r.type,
        )
      ) {
        if (
          !(
            ["pointercancel", "contextmenu"].includes(r.type) &&
            (t.browser.isSafari || t.browser.isWebView)
          )
        )
          return;
      }
      (i.pointerId = null), (i.touchId = null);
      const {
        params: n,
        touches: o,
        rtlTranslate: l,
        slidesGrid: a,
        enabled: c,
      } = t;
      if (!c) return;
      if (!n.simulateTouch && "mouse" === r.pointerType) return;
      if (
        (i.allowTouchCallbacks && t.emit("touchEnd", r),
        (i.allowTouchCallbacks = !1),
        !i.isTouched)
      )
        return (
          i.isMoved && n.grabCursor && t.setGrabCursor(!1),
          (i.isMoved = !1),
          void (i.startMoving = !1)
        );
      n.grabCursor &&
        i.isMoved &&
        i.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const d = be(),
        u = d - i.touchStartTime;
      if (t.allowClick) {
        const e = r.path || (r.composedPath && r.composedPath());
        t.updateClickedSlide((e && e[0]) || r.target, e),
          t.emit("tap click", r),
          u < 300 &&
            d - i.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", r);
      }
      if (
        ((i.lastClickTime = be()),
        ve(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !i.isTouched ||
          !i.isMoved ||
          !t.swipeDirection ||
          (0 === o.diff && !i.loopSwapReset) ||
          (i.currentTranslate === i.startTranslate && !i.loopSwapReset))
      )
        return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
      let h;
      if (
        ((i.isTouched = !1),
        (i.isMoved = !1),
        (i.startMoving = !1),
        (h = n.followFinger
          ? l
            ? t.translate
            : -t.translate
          : -i.currentTranslate),
        n.cssMode)
      )
        return;
      if (n.freeMode && n.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: h });
      let p = 0,
        f = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < a.length;
        e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
      ) {
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== a[e + t]
          ? h >= a[e] && h < a[e + t] && ((p = e), (f = a[e + t] - a[e]))
          : h >= a[e] && ((p = e), (f = a[a.length - 1] - a[a.length - 2]));
      }
      let g = null,
        m = null;
      n.rewind &&
        (t.isBeginning
          ? (m =
              n.virtual && n.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (g = 0));
      const v = (h - a[p]) / f,
        b = p < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      if (u > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (v >= n.longSwipesRatio
            ? t.slideTo(n.rewind && t.isEnd ? g : p + b)
            : t.slideTo(p)),
          "prev" === t.swipeDirection &&
            (v > 1 - n.longSwipesRatio
              ? t.slideTo(p + b)
              : null !== m && v < 0 && Math.abs(v) > n.longSwipesRatio
              ? t.slideTo(m)
              : t.slideTo(p));
      } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
          ? r.target === t.navigation.nextEl
            ? t.slideTo(p + b)
            : t.slideTo(p)
          : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : p + b),
            "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p));
      }
    }
    function Xe() {
      const e = this,
        { params: t, el: i } = e;
      if (i && 0 === i.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: s, allowSlidePrev: r, snapGrid: n } = e,
        o = e.virtual && e.params.virtual.enabled;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses();
      const l = o && t.loop;
      !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
      !e.isEnd ||
      e.isBeginning ||
      e.params.centeredSlides ||
      l
        ? e.params.loop && !o
          ? e.slideToLoop(e.realIndex, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0)
        : e.slideTo(e.slides.length - 1, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          (clearTimeout(e.autoplay.resizeTimeout),
          (e.autoplay.resizeTimeout = setTimeout(() => {
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.resume();
          }, 500))),
        (e.allowSlidePrev = r),
        (e.allowSlideNext = s),
        e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
    }
    function Ke(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function Ze() {
      const e = this,
        { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
      if (!s) return;
      let r;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const n = e.maxTranslate() - e.minTranslate();
      (r = 0 === n ? 0 : (e.translate - e.minTranslate()) / n),
        r !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    function Qe(e) {
      const t = this;
      Ve(t, e.target),
        t.params.cssMode ||
          ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
          t.update();
    }
    function Je() {
      const e = this;
      e.documentTouchHandlerProceeded ||
        ((e.documentTouchHandlerProceeded = !0),
        e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
    }
    const et = (e, t) => {
      const i = fe(),
        { params: s, el: r, wrapperEl: n, device: o } = e,
        l = !!s.nested,
        a = "on" === t ? "addEventListener" : "removeEventListener",
        c = t;
      i[a]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: l }),
        r[a]("touchstart", e.onTouchStart, { passive: !1 }),
        r[a]("pointerdown", e.onTouchStart, { passive: !1 }),
        i[a]("touchmove", e.onTouchMove, { passive: !1, capture: l }),
        i[a]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
        i[a]("touchend", e.onTouchEnd, { passive: !0 }),
        i[a]("pointerup", e.onTouchEnd, { passive: !0 }),
        i[a]("pointercancel", e.onTouchEnd, { passive: !0 }),
        i[a]("touchcancel", e.onTouchEnd, { passive: !0 }),
        i[a]("pointerout", e.onTouchEnd, { passive: !0 }),
        i[a]("pointerleave", e.onTouchEnd, { passive: !0 }),
        i[a]("contextmenu", e.onTouchEnd, { passive: !0 }),
        (s.preventClicks || s.preventClicksPropagation) &&
          r[a]("click", e.onClick, !0),
        s.cssMode && n[a]("scroll", e.onScroll),
        s.updateOnWindowResize
          ? e[c](
              o.ios || o.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              Xe,
              !0,
            )
          : e[c]("observerUpdate", Xe, !0),
        r[a]("load", e.onLoad, { capture: !0 });
    };
    const tt = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var it = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      eventsPrefix: "swiper",
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopAddBlankSlides: !0,
      loopAdditionalSlides: 0,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-blank",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideFullyVisibleClass: "swiper-slide-fully-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function st(e, t) {
      return function (i) {
        void 0 === i && (i = {});
        const s = Object.keys(i)[0],
          r = i[s];
        "object" == typeof r && null !== r
          ? (!0 === e[s] && (e[s] = { enabled: !0 }),
            "navigation" === s &&
              e[s] &&
              e[s].enabled &&
              !e[s].prevEl &&
              !e[s].nextEl &&
              (e[s].auto = !0),
            ["pagination", "scrollbar"].indexOf(s) >= 0 &&
              e[s] &&
              e[s].enabled &&
              !e[s].el &&
              (e[s].auto = !0),
            s in e && "enabled" in r
              ? ("object" != typeof e[s] ||
                  "enabled" in e[s] ||
                  (e[s].enabled = !0),
                e[s] || (e[s] = { enabled: !1 }),
                Se(t, i))
              : Se(t, i))
          : Se(t, i);
      };
    }
    const rt = {
        eventsEmitter: Ne,
        update: Be,
        translate: We,
        transition: {
          setTransition: function (e, t) {
            const i = this;
            i.params.cssMode ||
              ((i.wrapperEl.style.transitionDuration = `${e}ms`),
              (i.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
              i.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const i = this,
              { params: s } = i;
            s.cssMode ||
              (s.autoHeight && i.updateAutoHeight(),
              Fe({ swiper: i, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const i = this,
              { params: s } = i;
            (i.animating = !1),
              s.cssMode ||
                (i.setTransition(0),
                Fe({ swiper: i, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: Re,
        loop: $e,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const i =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            t.isElement && (t.__preventObserver__ = !0),
              (i.style.cursor = "move"),
              (i.style.cursor = e ? "grabbing" : "grab"),
              t.isElement &&
                requestAnimationFrame(() => {
                  t.__preventObserver__ = !1;
                });
          },
          unsetGrabCursor: function () {
            const e = this;
            (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e.isElement && (e.__preventObserver__ = !0),
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = ""),
              e.isElement &&
                requestAnimationFrame(() => {
                  e.__preventObserver__ = !1;
                }));
          },
        },
        events: {
          attachEvents: function () {
            const e = this,
              { params: t } = e;
            (e.onTouchStart = qe.bind(e)),
              (e.onTouchMove = Ue.bind(e)),
              (e.onTouchEnd = Ye.bind(e)),
              (e.onDocumentTouchStart = Je.bind(e)),
              t.cssMode && (e.onScroll = Ze.bind(e)),
              (e.onClick = Ke.bind(e)),
              (e.onLoad = Qe.bind(e)),
              et(e, "on");
          },
          detachEvents: function () {
            et(this, "off");
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              { realIndex: t, initialized: i, params: s, el: r } = e,
              n = s.breakpoints;
            if (!n || (n && 0 === Object.keys(n).length)) return;
            const o = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
            if (!o || e.currentBreakpoint === o) return;
            const l = (o in n ? n[o] : void 0) || e.originalParams,
              a = tt(e, s),
              c = tt(e, l),
              d = s.enabled;
            a && !c
              ? (r.classList.remove(
                  `${s.containerModifierClass}grid`,
                  `${s.containerModifierClass}grid-column`,
                ),
                e.emitContainerClasses())
              : !a &&
                c &&
                (r.classList.add(`${s.containerModifierClass}grid`),
                ((l.grid.fill && "column" === l.grid.fill) ||
                  (!l.grid.fill && "column" === s.grid.fill)) &&
                  r.classList.add(`${s.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
              ["navigation", "pagination", "scrollbar"].forEach((t) => {
                if (void 0 === l[t]) return;
                const i = s[t] && s[t].enabled,
                  r = l[t] && l[t].enabled;
                i && !r && e[t].disable(), !i && r && e[t].enable();
              });
            const u = l.direction && l.direction !== s.direction,
              h = s.loop && (l.slidesPerView !== s.slidesPerView || u),
              p = s.loop;
            u && i && e.changeDirection(), Se(e.params, l);
            const f = e.params.enabled,
              g = e.params.loop;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              d && !f ? e.disable() : !d && f && e.enable(),
              (e.currentBreakpoint = o),
              e.emit("_beforeBreakpoint", l),
              i &&
                (h
                  ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                  : !p && g
                  ? (e.loopCreate(t), e.updateSlides())
                  : p && !g && e.loopDestroy()),
              e.emit("breakpoint", l);
          },
          getBreakpoint: function (e, t, i) {
            if (
              (void 0 === t && (t = "window"), !e || ("container" === t && !i))
            )
              return;
            let s = !1;
            const r = me(),
              n = "window" === t ? r.innerHeight : i.clientHeight,
              o = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: n * t, point: e };
                }
                return { value: e, point: e };
              });
            o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < o.length; e += 1) {
              const { point: n, value: l } = o[e];
              "window" === t
                ? r.matchMedia(`(min-width: ${l}px)`).matches && (s = n)
                : l <= i.clientWidth && (s = n);
            }
            return s || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: i } = e,
              { slidesOffsetBefore: s } = i;
            if (s) {
              const t = e.slides.length - 1,
                i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
              e.isLocked = e.size > i;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: {
          addClasses: function () {
            const e = this,
              { classNames: t, params: i, rtl: s, el: r, device: n } = e,
              o = (function (e, t) {
                const i = [];
                return (
                  e.forEach((e) => {
                    "object" == typeof e
                      ? Object.keys(e).forEach((s) => {
                          e[s] && i.push(t + s);
                        })
                      : "string" == typeof e && i.push(t + e);
                  }),
                  i
                );
              })(
                [
                  "initialized",
                  i.direction,
                  { "free-mode": e.params.freeMode && i.freeMode.enabled },
                  { autoheight: i.autoHeight },
                  { rtl: s },
                  { grid: i.grid && i.grid.rows > 1 },
                  {
                    "grid-column":
                      i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
                  },
                  { android: n.android },
                  { ios: n.ios },
                  { "css-mode": i.cssMode },
                  { centered: i.cssMode && i.centeredSlides },
                  { "watch-progress": i.watchSlidesProgress },
                ],
                i.containerModifierClass,
              );
            t.push(...o), r.classList.add(...t), e.emitContainerClasses();
          },
          removeClasses: function () {
            const { el: e, classNames: t } = this;
            e.classList.remove(...t), this.emitContainerClasses();
          },
        },
      },
      nt = {};
    class ot {
      constructor() {
        let e, t;
        for (var i = arguments.length, s = new Array(i), r = 0; r < i; r++)
          s[r] = arguments[r];
        1 === s.length &&
        s[0].constructor &&
        "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
          ? (t = s[0])
          : ([e, t] = s),
          t || (t = {}),
          (t = Se({}, t)),
          e && !t.el && (t.el = e);
        const n = fe();
        if (
          t.el &&
          "string" == typeof t.el &&
          n.querySelectorAll(t.el).length > 1
        ) {
          const e = [];
          return (
            n.querySelectorAll(t.el).forEach((i) => {
              const s = Se({}, t, { el: i });
              e.push(new ot(s));
            }),
            e
          );
        }
        const o = this;
        (o.__swiper__ = !0),
          (o.support = Pe()),
          (o.device = ze({ userAgent: t.userAgent })),
          (o.browser = De()),
          (o.eventsListeners = {}),
          (o.eventsAnyListeners = []),
          (o.modules = [...o.__modules__]),
          t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
        const l = {};
        o.modules.forEach((e) => {
          e({
            params: t,
            swiper: o,
            extendParams: st(t, l),
            on: o.on.bind(o),
            once: o.once.bind(o),
            off: o.off.bind(o),
            emit: o.emit.bind(o),
          });
        });
        const a = Se({}, it, l);
        return (
          (o.params = Se({}, a, nt, t)),
          (o.originalParams = Se({}, o.params)),
          (o.passedParams = Se({}, t)),
          o.params &&
            o.params.on &&
            Object.keys(o.params.on).forEach((e) => {
              o.on(e, o.params.on[e]);
            }),
          o.params && o.params.onAny && o.onAny(o.params.onAny),
          Object.assign(o, {
            enabled: o.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === o.params.direction,
            isVertical: () => "vertical" === o.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            allowSlideNext: o.params.allowSlideNext,
            allowSlidePrev: o.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: o.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              pointerId: null,
              touchId: null,
            },
            allowClick: !0,
            allowTouchMove: o.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          o.emit("_swiper"),
          o.params.init && o.init(),
          o
        );
      }
      getDirectionLabel(e) {
        return this.isHorizontal()
          ? e
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[e];
      }
      getSlideIndex(e) {
        const { slidesEl: t, params: i } = this,
          s = Oe(Ce(t, `.${i.slideClass}, swiper-slide`)[0]);
        return Oe(e) - s;
      }
      getSlideIndexByData(e) {
        return this.getSlideIndex(
          this.slides.filter(
            (t) => 1 * t.getAttribute("data-swiper-slide-index") === e,
          )[0],
        );
      }
      recalcSlides() {
        const { slidesEl: e, params: t } = this;
        this.slides = Ce(e, `.${t.slideClass}, swiper-slide`);
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const i = this;
        e = Math.min(Math.max(e, 0), 1);
        const s = i.minTranslate(),
          r = (i.maxTranslate() - s) * e + s;
        i.translateTo(r, void 0 === t ? 0 : t),
          i.updateActiveIndex(),
          i.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass),
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass),
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((i) => {
          const s = e.getSlideClasses(i);
          t.push({ slideEl: i, classNames: s }), e.emit("_slideClass", i, s);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: i,
          slides: s,
          slidesGrid: r,
          slidesSizesGrid: n,
          size: o,
          activeIndex: l,
        } = this;
        let a = 1;
        if ("number" == typeof i.slidesPerView) return i.slidesPerView;
        if (i.centeredSlides) {
          let e,
            t = s[l] ? s[l].swiperSlideSize : 0;
          for (let i = l + 1; i < s.length; i += 1)
            s[i] &&
              !e &&
              ((t += s[i].swiperSlideSize), (a += 1), t > o && (e = !0));
          for (let i = l - 1; i >= 0; i -= 1)
            s[i] &&
              !e &&
              ((t += s[i].swiperSlideSize), (a += 1), t > o && (e = !0));
        } else if ("current" === e)
          for (let e = l + 1; e < s.length; e += 1) {
            (t ? r[e] + n[e] - r[l] < o : r[e] - r[l] < o) && (a += 1);
          }
        else
          for (let e = l - 1; e >= 0; e -= 1) {
            r[l] - r[e] < o && (a += 1);
          }
        return a;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: i } = e;
        function s() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let r;
        if (
          (i.breakpoints && e.setBreakpoint(),
          [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
            t.complete && Ve(e, t);
          }),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          i.freeMode && i.freeMode.enabled && !i.cssMode)
        )
          s(), i.autoHeight && e.updateAutoHeight();
        else {
          if (
            ("auto" === i.slidesPerView || i.slidesPerView > 1) &&
            e.isEnd &&
            !i.centeredSlides
          ) {
            const t =
              e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
            r = e.slideTo(t.length - 1, 0, !1, !0);
          } else r = e.slideTo(e.activeIndex, 0, !1, !0);
          r || s();
        }
        i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const i = this,
          s = i.params.direction;
        return (
          e || (e = "horizontal" === s ? "vertical" : "horizontal"),
          e === s ||
            ("horizontal" !== e && "vertical" !== e) ||
            (i.el.classList.remove(`${i.params.containerModifierClass}${s}`),
            i.el.classList.add(`${i.params.containerModifierClass}${e}`),
            i.emitContainerClasses(),
            (i.params.direction = e),
            i.slides.forEach((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            i.emit("changeDirection"),
            t && i.update()),
          i
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let i = e || t.params.el;
        if (("string" == typeof i && (i = document.querySelector(i)), !i))
          return !1;
        (i.swiper = t),
          i.parentNode &&
            i.parentNode.host &&
            "SWIPER-CONTAINER" === i.parentNode.host.nodeName &&
            (t.isElement = !0);
        const s = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let r = (() => {
          if (i && i.shadowRoot && i.shadowRoot.querySelector) {
            return i.shadowRoot.querySelector(s());
          }
          return Ce(i, s())[0];
        })();
        return (
          !r &&
            t.params.createElements &&
            ((r = Ae("div", t.params.wrapperClass)),
            i.append(r),
            Ce(i, `.${t.params.slideClass}`).forEach((e) => {
              r.append(e);
            })),
          Object.assign(t, {
            el: i,
            wrapperEl: r,
            slidesEl:
              t.isElement && !i.parentNode.host.slideSlots
                ? i.parentNode.host
                : r,
            hostEl: t.isElement ? i.parentNode.host : i,
            mounted: !0,
            rtl: "rtl" === i.dir.toLowerCase() || "rtl" === Le(i, "direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === i.dir.toLowerCase() || "rtl" === Le(i, "direction")),
            wrongRTL: "-webkit-box" === Le(r, "display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        if (!1 === t.mount(e)) return t;
        t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.loop && t.virtual && t.params.virtual.enabled
            ? t.slideTo(
                t.params.initialSlide + t.virtual.slidesBefore,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0,
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0,
              ),
          t.params.loop && t.loopCreate(),
          t.attachEvents();
        const i = [...t.el.querySelectorAll('[loading="lazy"]')];
        return (
          t.isElement &&
            i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
          i.forEach((e) => {
            e.complete
              ? Ve(t, e)
              : e.addEventListener("load", (e) => {
                  Ve(t, e.target);
                });
          }),
          Ge(t),
          (t.initialized = !0),
          Ge(t),
          t.emit("init"),
          t.emit("afterInit"),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const i = this,
          { params: s, el: r, wrapperEl: n, slides: o } = i;
        return (
          void 0 === i.params ||
            i.destroyed ||
            (i.emit("beforeDestroy"),
            (i.initialized = !1),
            i.detachEvents(),
            s.loop && i.loopDestroy(),
            t &&
              (i.removeClasses(),
              r.removeAttribute("style"),
              n.removeAttribute("style"),
              o &&
                o.length &&
                o.forEach((e) => {
                  e.classList.remove(
                    s.slideVisibleClass,
                    s.slideFullyVisibleClass,
                    s.slideActiveClass,
                    s.slideNextClass,
                    s.slidePrevClass,
                  ),
                    e.removeAttribute("style"),
                    e.removeAttribute("data-swiper-slide-index");
                })),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach((e) => {
              i.off(e);
            }),
            !1 !== e &&
              ((i.el.swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(i)),
            (i.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        Se(nt, e);
      }
      static get extendedDefaults() {
        return nt;
      }
      static get defaults() {
        return it;
      }
      static installModule(e) {
        ot.prototype.__modules__ || (ot.prototype.__modules__ = []);
        const t = ot.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => ot.installModule(e)), ot)
          : (ot.installModule(e), ot);
      }
    }
    function lt(e) {
      let { swiper: t, extendParams: i, on: s } = e;
      i({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-thumbs",
        },
      });
      let r = !1,
        n = !1;
      function o() {
        const e = t.thumbs.swiper;
        if (!e || e.destroyed) return;
        const i = e.clickedIndex,
          s = e.clickedSlide;
        if (s && s.classList.contains(t.params.thumbs.slideThumbActiveClass))
          return;
        if (null == i) return;
        let r;
        (r = e.params.loop
          ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)
          : i),
          t.params.loop ? t.slideToLoop(r) : t.slideTo(r);
      }
      function l() {
        const { thumbs: e } = t.params;
        if (r) return !1;
        r = !0;
        const i = t.constructor;
        if (e.swiper instanceof i)
          (t.thumbs.swiper = e.swiper),
            Object.assign(t.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            Object.assign(t.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            t.thumbs.swiper.update();
        else if (we(e.swiper)) {
          const s = Object.assign({}, e.swiper);
          Object.assign(s, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
            (t.thumbs.swiper = new i(s)),
            (n = !0);
        }
        return (
          t.thumbs.swiper.el.classList.add(
            t.params.thumbs.thumbsContainerClass,
          ),
          t.thumbs.swiper.on("tap", o),
          !0
        );
      }
      function a(e) {
        const i = t.thumbs.swiper;
        if (!i || i.destroyed) return;
        const s =
          "auto" === i.params.slidesPerView
            ? i.slidesPerViewDynamic()
            : i.params.slidesPerView;
        let r = 1;
        const n = t.params.thumbs.slideThumbActiveClass;
        if (
          (t.params.slidesPerView > 1 &&
            !t.params.centeredSlides &&
            (r = t.params.slidesPerView),
          t.params.thumbs.multipleActiveThumbs || (r = 1),
          (r = Math.floor(r)),
          i.slides.forEach((e) => e.classList.remove(n)),
          i.params.loop || (i.params.virtual && i.params.virtual.enabled))
        )
          for (let e = 0; e < r; e += 1)
            Ce(
              i.slidesEl,
              `[data-swiper-slide-index="${t.realIndex + e}"]`,
            ).forEach((e) => {
              e.classList.add(n);
            });
        else
          for (let e = 0; e < r; e += 1)
            i.slides[t.realIndex + e] &&
              i.slides[t.realIndex + e].classList.add(n);
        const o = t.params.thumbs.autoScrollOffset,
          l = o && !i.params.loop;
        if (t.realIndex !== i.realIndex || l) {
          const r = i.activeIndex;
          let n, a;
          if (i.params.loop) {
            const e = i.slides.filter(
              (e) =>
                e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`,
            )[0];
            (n = i.slides.indexOf(e)),
              (a = t.activeIndex > t.previousIndex ? "next" : "prev");
          } else (n = t.realIndex), (a = n > t.previousIndex ? "next" : "prev");
          l && (n += "next" === a ? o : -1 * o),
            i.visibleSlidesIndexes &&
              i.visibleSlidesIndexes.indexOf(n) < 0 &&
              (i.params.centeredSlides
                ? (n =
                    n > r
                      ? n - Math.floor(s / 2) + 1
                      : n + Math.floor(s / 2) - 1)
                : n > r && i.params.slidesPerGroup,
              i.slideTo(n, e ? 0 : void 0));
        }
      }
      (t.thumbs = { swiper: null }),
        s("beforeInit", () => {
          const { thumbs: e } = t.params;
          if (e && e.swiper)
            if (
              "string" == typeof e.swiper ||
              e.swiper instanceof HTMLElement
            ) {
              const i = fe(),
                s = () => {
                  const s =
                    "string" == typeof e.swiper
                      ? i.querySelector(e.swiper)
                      : e.swiper;
                  if (s && s.swiper) (e.swiper = s.swiper), l(), a(!0);
                  else if (s) {
                    const i = (r) => {
                      (e.swiper = r.detail[0]),
                        s.removeEventListener("init", i),
                        l(),
                        a(!0),
                        e.swiper.update(),
                        t.update();
                    };
                    s.addEventListener("init", i);
                  }
                  return s;
                },
                r = () => {
                  if (t.destroyed) return;
                  s() || requestAnimationFrame(r);
                };
              requestAnimationFrame(r);
            } else l(), a(!0);
        }),
        s("slideChange update resize observerUpdate", () => {
          a();
        }),
        s("setTransition", (e, i) => {
          const s = t.thumbs.swiper;
          s && !s.destroyed && s.setTransition(i);
        }),
        s("beforeDestroy", () => {
          const e = t.thumbs.swiper;
          e && !e.destroyed && n && e.destroy();
        }),
        Object.assign(t.thumbs, { init: l, update: a });
    }
    function at() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)',
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    Object.keys(rt).forEach((e) => {
      Object.keys(rt[e]).forEach((t) => {
        ot.prototype[t] = rt[e][t];
      });
    }),
      ot.use([
        function (e) {
          let { swiper: t, on: i, emit: s } = e;
          const r = me();
          let n = null,
            o = null;
          const l = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (s("beforeResize"), s("resize"));
            },
            a = () => {
              t && !t.destroyed && t.initialized && s("orientationchange");
            };
          i("init", () => {
            t.params.resizeObserver && void 0 !== r.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((n = new ResizeObserver((e) => {
                  o = r.requestAnimationFrame(() => {
                    const { width: i, height: s } = t;
                    let r = i,
                      n = s;
                    e.forEach((e) => {
                      let { contentBoxSize: i, contentRect: s, target: o } = e;
                      (o && o !== t.el) ||
                        ((r = s ? s.width : (i[0] || i).inlineSize),
                        (n = s ? s.height : (i[0] || i).blockSize));
                    }),
                      (r === i && n === s) || l();
                  });
                })),
                n.observe(t.el))
              : (r.addEventListener("resize", l),
                r.addEventListener("orientationchange", a));
          }),
            i("destroy", () => {
              o && r.cancelAnimationFrame(o),
                n && n.unobserve && t.el && (n.unobserve(t.el), (n = null)),
                r.removeEventListener("resize", l),
                r.removeEventListener("orientationchange", a);
            });
        },
        function (e) {
          let { swiper: t, extendParams: i, on: s, emit: r } = e;
          const n = [],
            o = me(),
            l = function (e, i) {
              void 0 === i && (i = {});
              const s = new (o.MutationObserver || o.WebkitMutationObserver)(
                (e) => {
                  if (t.__preventObserver__) return;
                  if (1 === e.length) return void r("observerUpdate", e[0]);
                  const i = function () {
                    r("observerUpdate", e[0]);
                  };
                  o.requestAnimationFrame
                    ? o.requestAnimationFrame(i)
                    : o.setTimeout(i, 0);
                },
              );
              s.observe(e, {
                attributes: void 0 === i.attributes || i.attributes,
                childList: void 0 === i.childList || i.childList,
                characterData: void 0 === i.characterData || i.characterData,
              }),
                n.push(s);
            };
          i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            s("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = (function (e, t) {
                    const i = [];
                    let s = e.parentElement;
                    for (; s; )
                      t ? s.matches(t) && i.push(s) : i.push(s),
                        (s = s.parentElement);
                    return i;
                  })(t.hostEl);
                  for (let t = 0; t < e.length; t += 1) l(e[t]);
                }
                l(t.hostEl, { childList: t.params.observeSlideChildren }),
                  l(t.wrapperEl, { attributes: !1 });
              }
            }),
            s("destroy", () => {
              n.forEach((e) => {
                e.disconnect();
              }),
                n.splice(0, n.length);
            });
        },
      ]),
      window.addEventListener("load", function (e) {
        at(),
          document.querySelector(".swiper") &&
            (new ot(".header-popup__slider", {
              modules: [lt],
              thumbs: { swiper: ".thumbs__slider" },
              observer: !0,
              observeParents: !0,
              observeSlideChildren: !0,
              slidesPerView: 1,
              spaceBetween: 0,
              autoHeight: !1,
              speed: 300,
            }),
            new ot(".thumbs__slider", {
              observer: !0,
              observeParents: !0,
              observeSlideChildren: !0,
              slidesPerView: 6,
              spaceBetween: 10,
              autoHeight: !1,
              speed: 800,
              breakpoints: {
                320: { slidesPerView: 3.55 },
                375: { slidesPerView: 4.15 },
                480: { slidesPerView: 5.5 },
                574: { slidesPerView: 4.9 },
                660: { slidesPerView: 5.7 },
                768: { slidesPerView: 4.6 },
                992: { slidesPerView: 5.5 },
                1440: { slidesPerView: 5.8 },
                1919: { spaceBetween: 20 },
              },
            }));
      });
    var ct = i(807);
    const dt = function (e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t);
    };
    const ut =
      "object" == typeof global && global && global.Object === Object && global;
    var ht = "object" == typeof self && self && self.Object === Object && self;
    const pt = ut || ht || Function("return this")();
    const ft = function () {
      return pt.Date.now();
    };
    var gt = /\s/;
    const mt = function (e) {
      for (var t = e.length; t-- && gt.test(e.charAt(t)); );
      return t;
    };
    var vt = /^\s+/;
    const bt = function (e) {
      return e ? e.slice(0, mt(e) + 1).replace(vt, "") : e;
    };
    const yt = pt.Symbol;
    var wt = Object.prototype,
      St = wt.hasOwnProperty,
      xt = wt.toString,
      Et = yt ? yt.toStringTag : void 0;
    const Ct = function (e) {
      var t = St.call(e, Et),
        i = e[Et];
      try {
        e[Et] = void 0;
        var s = !0;
      } catch (e) {}
      var r = xt.call(e);
      return s && (t ? (e[Et] = i) : delete e[Et]), r;
    };
    var Tt = Object.prototype.toString;
    const At = function (e) {
      return Tt.call(e);
    };
    var Lt = yt ? yt.toStringTag : void 0;
    const Ot = function (e) {
      return null == e
        ? void 0 === e
          ? "[object Undefined]"
          : "[object Null]"
        : Lt && Lt in Object(e)
        ? Ct(e)
        : At(e);
    };
    const It = function (e) {
      return null != e && "object" == typeof e;
    };
    const Mt = function (e) {
      return "symbol" == typeof e || (It(e) && "[object Symbol]" == Ot(e));
    };
    var kt = /^[-+]0x[0-9a-f]+$/i,
      _t = /^0b[01]+$/i,
      Pt = /^0o[0-7]+$/i,
      zt = parseInt;
    const Dt = function (e) {
      if ("number" == typeof e) return e;
      if (Mt(e)) return NaN;
      if (dt(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = dt(t) ? t + "" : t;
      }
      if ("string" != typeof e) return 0 === e ? e : +e;
      e = bt(e);
      var i = _t.test(e);
      return i || Pt.test(e)
        ? zt(e.slice(2), i ? 2 : 8)
        : kt.test(e)
        ? NaN
        : +e;
    };
    var Nt = Math.max,
      Vt = Math.min;
    const Ht = function (e, t, i) {
      var s,
        r,
        n,
        o,
        l,
        a,
        c = 0,
        d = !1,
        u = !1,
        h = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      function p(t) {
        var i = s,
          n = r;
        return (s = r = void 0), (c = t), (o = e.apply(n, i));
      }
      function f(e) {
        var i = e - a;
        return void 0 === a || i >= t || i < 0 || (u && e - c >= n);
      }
      function g() {
        var e = ft();
        if (f(e)) return m(e);
        l = setTimeout(
          g,
          (function (e) {
            var i = t - (e - a);
            return u ? Vt(i, n - (e - c)) : i;
          })(e),
        );
      }
      function m(e) {
        return (l = void 0), h && s ? p(e) : ((s = r = void 0), o);
      }
      function v() {
        var e = ft(),
          i = f(e);
        if (((s = arguments), (r = this), (a = e), i)) {
          if (void 0 === l)
            return (function (e) {
              return (c = e), (l = setTimeout(g, t)), d ? p(e) : o;
            })(a);
          if (u) return clearTimeout(l), (l = setTimeout(g, t)), p(a);
        }
        return void 0 === l && (l = setTimeout(g, t)), o;
      }
      return (
        (t = Dt(t) || 0),
        dt(i) &&
          ((d = !!i.leading),
          (n = (u = "maxWait" in i) ? Nt(Dt(i.maxWait) || 0, t) : n),
          (h = "trailing" in i ? !!i.trailing : h)),
        (v.cancel = function () {
          void 0 !== l && clearTimeout(l), (c = 0), (s = a = r = l = void 0);
        }),
        (v.flush = function () {
          return void 0 === l ? o : m(ft());
        }),
        v
      );
    };
    const Gt = function (e, t, i) {
      var s = !0,
        r = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      return (
        dt(i) &&
          ((s = "leading" in i ? !!i.leading : s),
          (r = "trailing" in i ? !!i.trailing : r)),
        Ht(e, t, { leading: s, maxWait: t, trailing: r })
      );
    };
    var Bt = function () {
        return (
          (Bt =
            Object.assign ||
            function (e) {
              for (var t, i = 1, s = arguments.length; i < s; i++)
                for (var r in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }),
          Bt.apply(this, arguments)
        );
      },
      Wt = null,
      Ft = null;
    function Rt() {
      if (null === Wt) {
        if ("undefined" == typeof document) return (Wt = 0);
        var e = document.body,
          t = document.createElement("div");
        t.classList.add("simplebar-hide-scrollbar"), e.appendChild(t);
        var i = t.getBoundingClientRect().right;
        e.removeChild(t), (Wt = i);
      }
      return Wt;
    }
    function $t(e) {
      return e && e.ownerDocument && e.ownerDocument.defaultView
        ? e.ownerDocument.defaultView
        : window;
    }
    function jt(e) {
      return e && e.ownerDocument ? e.ownerDocument : document;
    }
    ct &&
      window.addEventListener("resize", function () {
        Ft !== window.devicePixelRatio &&
          ((Ft = window.devicePixelRatio), (Wt = null));
      });
    var qt = function (e) {
      return Array.prototype.reduce.call(
        e,
        function (e, t) {
          var i = t.name.match(/data-simplebar-(.+)/);
          if (i) {
            var s = i[1].replace(/\W+(.)/g, function (e, t) {
              return t.toUpperCase();
            });
            switch (t.value) {
              case "true":
                e[s] = !0;
                break;
              case "false":
                e[s] = !1;
                break;
              case void 0:
                e[s] = !0;
                break;
              default:
                e[s] = t.value;
            }
          }
          return e;
        },
        {},
      );
    };
    function Ut(e, t) {
      var i;
      e && (i = e.classList).add.apply(i, t.split(" "));
    }
    function Yt(e, t) {
      e &&
        t.split(" ").forEach(function (t) {
          e.classList.remove(t);
        });
    }
    function Xt(e) {
      return ".".concat(e.split(" ").join("."));
    }
    var Kt = Object.freeze({
        __proto__: null,
        getElementWindow: $t,
        getElementDocument: jt,
        getOptions: qt,
        addClasses: Ut,
        removeClasses: Yt,
        classNamesToQuery: Xt,
      }),
      Zt = $t,
      Qt = jt,
      Jt = qt,
      ei = Ut,
      ti = Yt,
      ii = Xt,
      si = (function () {
        function e(t, i) {
          void 0 === i && (i = {});
          var s = this;
          if (
            ((this.removePreventClickId = null),
            (this.minScrollbarWidth = 20),
            (this.stopScrollDelay = 175),
            (this.isScrolling = !1),
            (this.isMouseEntering = !1),
            (this.scrollXTicking = !1),
            (this.scrollYTicking = !1),
            (this.wrapperEl = null),
            (this.contentWrapperEl = null),
            (this.contentEl = null),
            (this.offsetEl = null),
            (this.maskEl = null),
            (this.placeholderEl = null),
            (this.heightAutoObserverWrapperEl = null),
            (this.heightAutoObserverEl = null),
            (this.rtlHelpers = null),
            (this.scrollbarWidth = 0),
            (this.resizeObserver = null),
            (this.mutationObserver = null),
            (this.elStyles = null),
            (this.isRtl = null),
            (this.mouseX = 0),
            (this.mouseY = 0),
            (this.onMouseMove = function () {}),
            (this.onWindowResize = function () {}),
            (this.onStopScrolling = function () {}),
            (this.onMouseEntered = function () {}),
            (this.onScroll = function () {
              var e = Zt(s.el);
              s.scrollXTicking ||
                (e.requestAnimationFrame(s.scrollX), (s.scrollXTicking = !0)),
                s.scrollYTicking ||
                  (e.requestAnimationFrame(s.scrollY), (s.scrollYTicking = !0)),
                s.isScrolling ||
                  ((s.isScrolling = !0), ei(s.el, s.classNames.scrolling)),
                s.showScrollbar("x"),
                s.showScrollbar("y"),
                s.onStopScrolling();
            }),
            (this.scrollX = function () {
              s.axis.x.isOverflowing && s.positionScrollbar("x"),
                (s.scrollXTicking = !1);
            }),
            (this.scrollY = function () {
              s.axis.y.isOverflowing && s.positionScrollbar("y"),
                (s.scrollYTicking = !1);
            }),
            (this._onStopScrolling = function () {
              ti(s.el, s.classNames.scrolling),
                s.options.autoHide &&
                  (s.hideScrollbar("x"), s.hideScrollbar("y")),
                (s.isScrolling = !1);
            }),
            (this.onMouseEnter = function () {
              s.isMouseEntering ||
                (ei(s.el, s.classNames.mouseEntered),
                s.showScrollbar("x"),
                s.showScrollbar("y"),
                (s.isMouseEntering = !0)),
                s.onMouseEntered();
            }),
            (this._onMouseEntered = function () {
              ti(s.el, s.classNames.mouseEntered),
                s.options.autoHide &&
                  (s.hideScrollbar("x"), s.hideScrollbar("y")),
                (s.isMouseEntering = !1);
            }),
            (this._onMouseMove = function (e) {
              (s.mouseX = e.clientX),
                (s.mouseY = e.clientY),
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                  s.onMouseMoveForAxis("x"),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                  s.onMouseMoveForAxis("y");
            }),
            (this.onMouseLeave = function () {
              s.onMouseMove.cancel(),
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                  s.onMouseLeaveForAxis("x"),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                  s.onMouseLeaveForAxis("y"),
                (s.mouseX = -1),
                (s.mouseY = -1);
            }),
            (this._onWindowResize = function () {
              (s.scrollbarWidth = s.getScrollbarWidth()),
                s.hideNativeScrollbar();
            }),
            (this.onPointerEvent = function (e) {
              var t, i;
              s.axis.x.track.el &&
                s.axis.y.track.el &&
                s.axis.x.scrollbar.el &&
                s.axis.y.scrollbar.el &&
                ((s.axis.x.track.rect =
                  s.axis.x.track.el.getBoundingClientRect()),
                (s.axis.y.track.rect =
                  s.axis.y.track.el.getBoundingClientRect()),
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                  (t = s.isWithinBounds(s.axis.x.track.rect)),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                  (i = s.isWithinBounds(s.axis.y.track.rect)),
                (t || i) &&
                  (e.stopPropagation(),
                  "pointerdown" === e.type &&
                    "touch" !== e.pointerType &&
                    (t &&
                      ((s.axis.x.scrollbar.rect =
                        s.axis.x.scrollbar.el.getBoundingClientRect()),
                      s.isWithinBounds(s.axis.x.scrollbar.rect)
                        ? s.onDragStart(e, "x")
                        : s.onTrackClick(e, "x")),
                    i &&
                      ((s.axis.y.scrollbar.rect =
                        s.axis.y.scrollbar.el.getBoundingClientRect()),
                      s.isWithinBounds(s.axis.y.scrollbar.rect)
                        ? s.onDragStart(e, "y")
                        : s.onTrackClick(e, "y")))));
            }),
            (this.drag = function (t) {
              var i, r, n, o, l, a, c, d, u, h, p;
              if (s.draggedAxis && s.contentWrapperEl) {
                var f = s.axis[s.draggedAxis].track,
                  g =
                    null !==
                      (r =
                        null === (i = f.rect) || void 0 === i
                          ? void 0
                          : i[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== r
                      ? r
                      : 0,
                  m = s.axis[s.draggedAxis].scrollbar,
                  v =
                    null !==
                      (o =
                        null === (n = s.contentWrapperEl) || void 0 === n
                          ? void 0
                          : n[s.axis[s.draggedAxis].scrollSizeAttr]) &&
                    void 0 !== o
                      ? o
                      : 0,
                  b = parseInt(
                    null !==
                      (a =
                        null === (l = s.elStyles) || void 0 === l
                          ? void 0
                          : l[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== a
                      ? a
                      : "0px",
                    10,
                  );
                t.preventDefault(), t.stopPropagation();
                var y =
                    ("y" === s.draggedAxis ? t.pageY : t.pageX) -
                    (null !==
                      (d =
                        null === (c = f.rect) || void 0 === c
                          ? void 0
                          : c[s.axis[s.draggedAxis].offsetAttr]) && void 0 !== d
                      ? d
                      : 0) -
                    s.axis[s.draggedAxis].dragOffset,
                  w =
                    ((y =
                      "x" === s.draggedAxis && s.isRtl
                        ? (null !==
                            (h =
                              null === (u = f.rect) || void 0 === u
                                ? void 0
                                : u[s.axis[s.draggedAxis].sizeAttr]) &&
                          void 0 !== h
                            ? h
                            : 0) -
                          m.size -
                          y
                        : y) /
                      (g - m.size)) *
                    (v - b);
                "x" === s.draggedAxis &&
                  s.isRtl &&
                  (w = (
                    null === (p = e.getRtlHelpers()) || void 0 === p
                      ? void 0
                      : p.isScrollingToNegative
                  )
                    ? -w
                    : w),
                  (s.contentWrapperEl[s.axis[s.draggedAxis].scrollOffsetAttr] =
                    w);
              }
            }),
            (this.onEndDrag = function (e) {
              var t = Qt(s.el),
                i = Zt(s.el);
              e.preventDefault(),
                e.stopPropagation(),
                ti(s.el, s.classNames.dragging),
                t.removeEventListener("mousemove", s.drag, !0),
                t.removeEventListener("mouseup", s.onEndDrag, !0),
                (s.removePreventClickId = i.setTimeout(function () {
                  t.removeEventListener("click", s.preventClick, !0),
                    t.removeEventListener("dblclick", s.preventClick, !0),
                    (s.removePreventClickId = null);
                }));
            }),
            (this.preventClick = function (e) {
              e.preventDefault(), e.stopPropagation();
            }),
            (this.el = t),
            (this.options = Bt(Bt({}, e.defaultOptions), i)),
            (this.classNames = Bt(
              Bt({}, e.defaultOptions.classNames),
              i.classNames,
            )),
            (this.axis = {
              x: {
                scrollOffsetAttr: "scrollLeft",
                sizeAttr: "width",
                scrollSizeAttr: "scrollWidth",
                offsetSizeAttr: "offsetWidth",
                offsetAttr: "left",
                overflowAttr: "overflowX",
                dragOffset: 0,
                isOverflowing: !0,
                forceVisible: !1,
                track: { size: null, el: null, rect: null, isVisible: !1 },
                scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
              },
              y: {
                scrollOffsetAttr: "scrollTop",
                sizeAttr: "height",
                scrollSizeAttr: "scrollHeight",
                offsetSizeAttr: "offsetHeight",
                offsetAttr: "top",
                overflowAttr: "overflowY",
                dragOffset: 0,
                isOverflowing: !0,
                forceVisible: !1,
                track: { size: null, el: null, rect: null, isVisible: !1 },
                scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
              },
            }),
            "object" != typeof this.el || !this.el.nodeName)
          )
            throw new Error(
              "Argument passed to SimpleBar must be an HTML element instead of ".concat(
                this.el,
              ),
            );
          (this.onMouseMove = Gt(this._onMouseMove, 64)),
            (this.onWindowResize = Ht(this._onWindowResize, 64, {
              leading: !0,
            })),
            (this.onStopScrolling = Ht(
              this._onStopScrolling,
              this.stopScrollDelay,
            )),
            (this.onMouseEntered = Ht(
              this._onMouseEntered,
              this.stopScrollDelay,
            )),
            this.init();
        }
        return (
          (e.getRtlHelpers = function () {
            if (e.rtlHelpers) return e.rtlHelpers;
            var t = document.createElement("div");
            t.innerHTML =
              '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
            var i = t.firstElementChild,
              s = null == i ? void 0 : i.firstElementChild;
            if (!s) return null;
            document.body.appendChild(i), (i.scrollLeft = 0);
            var r = e.getOffset(i),
              n = e.getOffset(s);
            i.scrollLeft = -999;
            var o = e.getOffset(s);
            return (
              document.body.removeChild(i),
              (e.rtlHelpers = {
                isScrollOriginAtZero: r.left !== n.left,
                isScrollingToNegative: n.left !== o.left,
              }),
              e.rtlHelpers
            );
          }),
          (e.prototype.getScrollbarWidth = function () {
            try {
              return (this.contentWrapperEl &&
                "none" ===
                  getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar")
                    .display) ||
                "scrollbarWidth" in document.documentElement.style ||
                "-ms-overflow-style" in document.documentElement.style
                ? 0
                : Rt();
            } catch (e) {
              return Rt();
            }
          }),
          (e.getOffset = function (e) {
            var t = e.getBoundingClientRect(),
              i = Qt(e),
              s = Zt(e);
            return {
              top: t.top + (s.pageYOffset || i.documentElement.scrollTop),
              left: t.left + (s.pageXOffset || i.documentElement.scrollLeft),
            };
          }),
          (e.prototype.init = function () {
            ct &&
              (this.initDOM(),
              (this.rtlHelpers = e.getRtlHelpers()),
              (this.scrollbarWidth = this.getScrollbarWidth()),
              this.recalculate(),
              this.initListeners());
          }),
          (e.prototype.initDOM = function () {
            var e, t;
            (this.wrapperEl = this.el.querySelector(
              ii(this.classNames.wrapper),
            )),
              (this.contentWrapperEl =
                this.options.scrollableNode ||
                this.el.querySelector(ii(this.classNames.contentWrapper))),
              (this.contentEl =
                this.options.contentNode ||
                this.el.querySelector(ii(this.classNames.contentEl))),
              (this.offsetEl = this.el.querySelector(
                ii(this.classNames.offset),
              )),
              (this.maskEl = this.el.querySelector(ii(this.classNames.mask))),
              (this.placeholderEl = this.findChild(
                this.wrapperEl,
                ii(this.classNames.placeholder),
              )),
              (this.heightAutoObserverWrapperEl = this.el.querySelector(
                ii(this.classNames.heightAutoObserverWrapperEl),
              )),
              (this.heightAutoObserverEl = this.el.querySelector(
                ii(this.classNames.heightAutoObserverEl),
              )),
              (this.axis.x.track.el = this.findChild(
                this.el,
                ""
                  .concat(ii(this.classNames.track))
                  .concat(ii(this.classNames.horizontal)),
              )),
              (this.axis.y.track.el = this.findChild(
                this.el,
                ""
                  .concat(ii(this.classNames.track))
                  .concat(ii(this.classNames.vertical)),
              )),
              (this.axis.x.scrollbar.el =
                (null === (e = this.axis.x.track.el) || void 0 === e
                  ? void 0
                  : e.querySelector(ii(this.classNames.scrollbar))) || null),
              (this.axis.y.scrollbar.el =
                (null === (t = this.axis.y.track.el) || void 0 === t
                  ? void 0
                  : t.querySelector(ii(this.classNames.scrollbar))) || null),
              this.options.autoHide ||
                (ei(this.axis.x.scrollbar.el, this.classNames.visible),
                ei(this.axis.y.scrollbar.el, this.classNames.visible));
          }),
          (e.prototype.initListeners = function () {
            var e,
              t = this,
              i = Zt(this.el);
            if (
              (this.el.addEventListener("mouseenter", this.onMouseEnter),
              this.el.addEventListener("pointerdown", this.onPointerEvent, !0),
              this.el.addEventListener("mousemove", this.onMouseMove),
              this.el.addEventListener("mouseleave", this.onMouseLeave),
              null === (e = this.contentWrapperEl) ||
                void 0 === e ||
                e.addEventListener("scroll", this.onScroll),
              i.addEventListener("resize", this.onWindowResize),
              this.contentEl)
            ) {
              if (window.ResizeObserver) {
                var s = !1,
                  r = i.ResizeObserver || ResizeObserver;
                (this.resizeObserver = new r(function () {
                  s &&
                    i.requestAnimationFrame(function () {
                      t.recalculate();
                    });
                })),
                  this.resizeObserver.observe(this.el),
                  this.resizeObserver.observe(this.contentEl),
                  i.requestAnimationFrame(function () {
                    s = !0;
                  });
              }
              (this.mutationObserver = new i.MutationObserver(function () {
                i.requestAnimationFrame(function () {
                  t.recalculate();
                });
              })),
                this.mutationObserver.observe(this.contentEl, {
                  childList: !0,
                  subtree: !0,
                  characterData: !0,
                });
            }
          }),
          (e.prototype.recalculate = function () {
            if (
              this.heightAutoObserverEl &&
              this.contentEl &&
              this.contentWrapperEl &&
              this.wrapperEl &&
              this.placeholderEl
            ) {
              var e = Zt(this.el);
              (this.elStyles = e.getComputedStyle(this.el)),
                (this.isRtl = "rtl" === this.elStyles.direction);
              var t = this.contentEl.offsetWidth,
                i = this.heightAutoObserverEl.offsetHeight <= 1,
                s = this.heightAutoObserverEl.offsetWidth <= 1 || t > 0,
                r = this.contentWrapperEl.offsetWidth,
                n = this.elStyles.overflowX,
                o = this.elStyles.overflowY;
              (this.contentEl.style.padding = ""
                .concat(this.elStyles.paddingTop, " ")
                .concat(this.elStyles.paddingRight, " ")
                .concat(this.elStyles.paddingBottom, " ")
                .concat(this.elStyles.paddingLeft)),
                (this.wrapperEl.style.margin = "-"
                  .concat(this.elStyles.paddingTop, " -")
                  .concat(this.elStyles.paddingRight, " -")
                  .concat(this.elStyles.paddingBottom, " -")
                  .concat(this.elStyles.paddingLeft));
              var l = this.contentEl.scrollHeight,
                a = this.contentEl.scrollWidth;
              (this.contentWrapperEl.style.height = i ? "auto" : "100%"),
                (this.placeholderEl.style.width = s
                  ? "".concat(t || a, "px")
                  : "auto"),
                (this.placeholderEl.style.height = "".concat(l, "px"));
              var c = this.contentWrapperEl.offsetHeight;
              (this.axis.x.isOverflowing = 0 !== t && a > t),
                (this.axis.y.isOverflowing = l > c),
                (this.axis.x.isOverflowing =
                  "hidden" !== n && this.axis.x.isOverflowing),
                (this.axis.y.isOverflowing =
                  "hidden" !== o && this.axis.y.isOverflowing),
                (this.axis.x.forceVisible =
                  "x" === this.options.forceVisible ||
                  !0 === this.options.forceVisible),
                (this.axis.y.forceVisible =
                  "y" === this.options.forceVisible ||
                  !0 === this.options.forceVisible),
                this.hideNativeScrollbar();
              var d = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                u = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
              (this.axis.x.isOverflowing =
                this.axis.x.isOverflowing && a > r - u),
                (this.axis.y.isOverflowing =
                  this.axis.y.isOverflowing && l > c - d),
                (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
                (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
                this.axis.x.scrollbar.el &&
                  (this.axis.x.scrollbar.el.style.width = "".concat(
                    this.axis.x.scrollbar.size,
                    "px",
                  )),
                this.axis.y.scrollbar.el &&
                  (this.axis.y.scrollbar.el.style.height = "".concat(
                    this.axis.y.scrollbar.size,
                    "px",
                  )),
                this.positionScrollbar("x"),
                this.positionScrollbar("y"),
                this.toggleTrackVisibility("x"),
                this.toggleTrackVisibility("y");
            }
          }),
          (e.prototype.getScrollbarSize = function (e) {
            var t, i;
            if (
              (void 0 === e && (e = "y"),
              !this.axis[e].isOverflowing || !this.contentEl)
            )
              return 0;
            var s,
              r = this.contentEl[this.axis[e].scrollSizeAttr],
              n =
                null !==
                  (i =
                    null === (t = this.axis[e].track.el) || void 0 === t
                      ? void 0
                      : t[this.axis[e].offsetSizeAttr]) && void 0 !== i
                  ? i
                  : 0,
              o = n / r;
            return (
              (s = Math.max(~~(o * n), this.options.scrollbarMinSize)),
              this.options.scrollbarMaxSize &&
                (s = Math.min(s, this.options.scrollbarMaxSize)),
              s
            );
          }),
          (e.prototype.positionScrollbar = function (t) {
            var i, s, r;
            void 0 === t && (t = "y");
            var n = this.axis[t].scrollbar;
            if (
              this.axis[t].isOverflowing &&
              this.contentWrapperEl &&
              n.el &&
              this.elStyles
            ) {
              var o = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
                l =
                  (null === (i = this.axis[t].track.el) || void 0 === i
                    ? void 0
                    : i[this.axis[t].offsetSizeAttr]) || 0,
                a = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                c = this.contentWrapperEl[this.axis[t].scrollOffsetAttr];
              (c =
                "x" === t &&
                this.isRtl &&
                (null === (s = e.getRtlHelpers()) || void 0 === s
                  ? void 0
                  : s.isScrollOriginAtZero)
                  ? -c
                  : c),
                "x" === t &&
                  this.isRtl &&
                  (c = (
                    null === (r = e.getRtlHelpers()) || void 0 === r
                      ? void 0
                      : r.isScrollingToNegative
                  )
                    ? c
                    : -c);
              var d = c / (o - a),
                u = ~~((l - n.size) * d);
              (u = "x" === t && this.isRtl ? -u + (l - n.size) : u),
                (n.el.style.transform =
                  "x" === t
                    ? "translate3d(".concat(u, "px, 0, 0)")
                    : "translate3d(0, ".concat(u, "px, 0)"));
            }
          }),
          (e.prototype.toggleTrackVisibility = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].track.el,
              i = this.axis[e].scrollbar.el;
            t &&
              i &&
              this.contentWrapperEl &&
              (this.axis[e].isOverflowing || this.axis[e].forceVisible
                ? ((t.style.visibility = "visible"),
                  (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                    "scroll"),
                  this.el.classList.add(
                    "".concat(this.classNames.scrollable, "-").concat(e),
                  ))
                : ((t.style.visibility = "hidden"),
                  (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                    "hidden"),
                  this.el.classList.remove(
                    "".concat(this.classNames.scrollable, "-").concat(e),
                  )),
              this.axis[e].isOverflowing
                ? (i.style.display = "block")
                : (i.style.display = "none"));
          }),
          (e.prototype.showScrollbar = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].isOverflowing &&
                !this.axis[e].scrollbar.isVisible &&
                (ei(this.axis[e].scrollbar.el, this.classNames.visible),
                (this.axis[e].scrollbar.isVisible = !0));
          }),
          (e.prototype.hideScrollbar = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].isOverflowing &&
                this.axis[e].scrollbar.isVisible &&
                (ti(this.axis[e].scrollbar.el, this.classNames.visible),
                (this.axis[e].scrollbar.isVisible = !1));
          }),
          (e.prototype.hideNativeScrollbar = function () {
            this.offsetEl &&
              ((this.offsetEl.style[this.isRtl ? "left" : "right"] =
                this.axis.y.isOverflowing || this.axis.y.forceVisible
                  ? "-".concat(this.scrollbarWidth, "px")
                  : "0px"),
              (this.offsetEl.style.bottom =
                this.axis.x.isOverflowing || this.axis.x.forceVisible
                  ? "-".concat(this.scrollbarWidth, "px")
                  : "0px"));
          }),
          (e.prototype.onMouseMoveForAxis = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e];
            t.track.el &&
              t.scrollbar.el &&
              ((t.track.rect = t.track.el.getBoundingClientRect()),
              (t.scrollbar.rect = t.scrollbar.el.getBoundingClientRect()),
              this.isWithinBounds(t.track.rect)
                ? (this.showScrollbar(e),
                  ei(t.track.el, this.classNames.hover),
                  this.isWithinBounds(t.scrollbar.rect)
                    ? ei(t.scrollbar.el, this.classNames.hover)
                    : ti(t.scrollbar.el, this.classNames.hover))
                : (ti(t.track.el, this.classNames.hover),
                  this.options.autoHide && this.hideScrollbar(e)));
          }),
          (e.prototype.onMouseLeaveForAxis = function (e) {
            void 0 === e && (e = "y"),
              ti(this.axis[e].track.el, this.classNames.hover),
              ti(this.axis[e].scrollbar.el, this.classNames.hover),
              this.options.autoHide && this.hideScrollbar(e);
          }),
          (e.prototype.onDragStart = function (e, t) {
            var i;
            void 0 === t && (t = "y");
            var s = Qt(this.el),
              r = Zt(this.el),
              n = this.axis[t].scrollbar,
              o = "y" === t ? e.pageY : e.pageX;
            (this.axis[t].dragOffset =
              o -
              ((null === (i = n.rect) || void 0 === i
                ? void 0
                : i[this.axis[t].offsetAttr]) || 0)),
              (this.draggedAxis = t),
              ei(this.el, this.classNames.dragging),
              s.addEventListener("mousemove", this.drag, !0),
              s.addEventListener("mouseup", this.onEndDrag, !0),
              null === this.removePreventClickId
                ? (s.addEventListener("click", this.preventClick, !0),
                  s.addEventListener("dblclick", this.preventClick, !0))
                : (r.clearTimeout(this.removePreventClickId),
                  (this.removePreventClickId = null));
          }),
          (e.prototype.onTrackClick = function (e, t) {
            var i,
              s,
              r,
              n,
              o = this;
            void 0 === t && (t = "y");
            var l = this.axis[t];
            if (
              this.options.clickOnTrack &&
              l.scrollbar.el &&
              this.contentWrapperEl
            ) {
              e.preventDefault();
              var a = Zt(this.el);
              this.axis[t].scrollbar.rect =
                l.scrollbar.el.getBoundingClientRect();
              var c =
                  null !==
                    (s =
                      null === (i = this.axis[t].scrollbar.rect) || void 0 === i
                        ? void 0
                        : i[this.axis[t].offsetAttr]) && void 0 !== s
                    ? s
                    : 0,
                d = parseInt(
                  null !==
                    (n =
                      null === (r = this.elStyles) || void 0 === r
                        ? void 0
                        : r[this.axis[t].sizeAttr]) && void 0 !== n
                    ? n
                    : "0px",
                  10,
                ),
                u = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                h =
                  ("y" === t ? this.mouseY - c : this.mouseX - c) < 0 ? -1 : 1,
                p = -1 === h ? u - d : u + d,
                f = function () {
                  o.contentWrapperEl &&
                    (-1 === h
                      ? u > p &&
                        ((u -= 40),
                        (o.contentWrapperEl[o.axis[t].scrollOffsetAttr] = u),
                        a.requestAnimationFrame(f))
                      : u < p &&
                        ((u += 40),
                        (o.contentWrapperEl[o.axis[t].scrollOffsetAttr] = u),
                        a.requestAnimationFrame(f)));
                };
              f();
            }
          }),
          (e.prototype.getContentElement = function () {
            return this.contentEl;
          }),
          (e.prototype.getScrollElement = function () {
            return this.contentWrapperEl;
          }),
          (e.prototype.removeListeners = function () {
            var e = Zt(this.el);
            this.el.removeEventListener("mouseenter", this.onMouseEnter),
              this.el.removeEventListener(
                "pointerdown",
                this.onPointerEvent,
                !0,
              ),
              this.el.removeEventListener("mousemove", this.onMouseMove),
              this.el.removeEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl &&
                this.contentWrapperEl.removeEventListener(
                  "scroll",
                  this.onScroll,
                ),
              e.removeEventListener("resize", this.onWindowResize),
              this.mutationObserver && this.mutationObserver.disconnect(),
              this.resizeObserver && this.resizeObserver.disconnect(),
              this.onMouseMove.cancel(),
              this.onWindowResize.cancel(),
              this.onStopScrolling.cancel(),
              this.onMouseEntered.cancel();
          }),
          (e.prototype.unMount = function () {
            this.removeListeners();
          }),
          (e.prototype.isWithinBounds = function (e) {
            return (
              this.mouseX >= e.left &&
              this.mouseX <= e.left + e.width &&
              this.mouseY >= e.top &&
              this.mouseY <= e.top + e.height
            );
          }),
          (e.prototype.findChild = function (e, t) {
            var i =
              e.matches ||
              e.webkitMatchesSelector ||
              e.mozMatchesSelector ||
              e.msMatchesSelector;
            return Array.prototype.filter.call(e.children, function (e) {
              return i.call(e, t);
            })[0];
          }),
          (e.rtlHelpers = null),
          (e.defaultOptions = {
            forceVisible: !1,
            clickOnTrack: !0,
            scrollbarMinSize: 25,
            scrollbarMaxSize: 0,
            ariaLabel: "scrollable content",
            classNames: {
              contentEl: "simplebar-content",
              contentWrapper: "simplebar-content-wrapper",
              offset: "simplebar-offset",
              mask: "simplebar-mask",
              wrapper: "simplebar-wrapper",
              placeholder: "simplebar-placeholder",
              scrollbar: "simplebar-scrollbar",
              track: "simplebar-track",
              heightAutoObserverWrapperEl:
                "simplebar-height-auto-observer-wrapper",
              heightAutoObserverEl: "simplebar-height-auto-observer",
              visible: "simplebar-visible",
              horizontal: "simplebar-horizontal",
              vertical: "simplebar-vertical",
              hover: "simplebar-hover",
              dragging: "simplebar-dragging",
              scrolling: "simplebar-scrolling",
              scrollable: "simplebar-scrollable",
              mouseEntered: "simplebar-mouse-entered",
            },
            scrollableNode: null,
            contentNode: null,
            autoHide: !0,
          }),
          (e.getOptions = Jt),
          (e.helpers = Kt),
          e
        );
      })(),
      ri = function (e, t) {
        return (
          (ri =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }),
          ri(e, t)
        );
      };
    var ni = si.helpers,
      oi = ni.getOptions,
      li = ni.addClasses,
      ai = (function (e) {
        function t() {
          for (var i = [], s = 0; s < arguments.length; s++)
            i[s] = arguments[s];
          var r = e.apply(this, i) || this;
          return t.instances.set(i[0], r), r;
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function i() {
              this.constructor = e;
            }
            ri(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((i.prototype = t.prototype), new i()));
          })(t, e),
          (t.initDOMLoadedElements = function () {
            document.removeEventListener(
              "DOMContentLoaded",
              this.initDOMLoadedElements,
            ),
              window.removeEventListener("load", this.initDOMLoadedElements),
              Array.prototype.forEach.call(
                document.querySelectorAll("[data-simplebar]"),
                function (e) {
                  "init" === e.getAttribute("data-simplebar") ||
                    t.instances.has(e) ||
                    new t(e, oi(e.attributes));
                },
              );
          }),
          (t.removeObserver = function () {
            var e;
            null === (e = t.globalObserver) || void 0 === e || e.disconnect();
          }),
          (t.prototype.initDOM = function () {
            var e,
              t,
              i,
              s = this;
            if (
              !Array.prototype.filter.call(this.el.children, function (e) {
                return e.classList.contains(s.classNames.wrapper);
              }).length
            ) {
              for (
                this.wrapperEl = document.createElement("div"),
                  this.contentWrapperEl = document.createElement("div"),
                  this.offsetEl = document.createElement("div"),
                  this.maskEl = document.createElement("div"),
                  this.contentEl = document.createElement("div"),
                  this.placeholderEl = document.createElement("div"),
                  this.heightAutoObserverWrapperEl =
                    document.createElement("div"),
                  this.heightAutoObserverEl = document.createElement("div"),
                  li(this.wrapperEl, this.classNames.wrapper),
                  li(this.contentWrapperEl, this.classNames.contentWrapper),
                  li(this.offsetEl, this.classNames.offset),
                  li(this.maskEl, this.classNames.mask),
                  li(this.contentEl, this.classNames.contentEl),
                  li(this.placeholderEl, this.classNames.placeholder),
                  li(
                    this.heightAutoObserverWrapperEl,
                    this.classNames.heightAutoObserverWrapperEl,
                  ),
                  li(
                    this.heightAutoObserverEl,
                    this.classNames.heightAutoObserverEl,
                  );
                this.el.firstChild;

              )
                this.contentEl.appendChild(this.el.firstChild);
              this.contentWrapperEl.appendChild(this.contentEl),
                this.offsetEl.appendChild(this.contentWrapperEl),
                this.maskEl.appendChild(this.offsetEl),
                this.heightAutoObserverWrapperEl.appendChild(
                  this.heightAutoObserverEl,
                ),
                this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                this.wrapperEl.appendChild(this.maskEl),
                this.wrapperEl.appendChild(this.placeholderEl),
                this.el.appendChild(this.wrapperEl),
                null === (e = this.contentWrapperEl) ||
                  void 0 === e ||
                  e.setAttribute("tabindex", "0"),
                null === (t = this.contentWrapperEl) ||
                  void 0 === t ||
                  t.setAttribute("role", "region"),
                null === (i = this.contentWrapperEl) ||
                  void 0 === i ||
                  i.setAttribute("aria-label", this.options.ariaLabel);
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
              var r = document.createElement("div"),
                n = document.createElement("div");
              li(r, this.classNames.track),
                li(n, this.classNames.scrollbar),
                r.appendChild(n),
                (this.axis.x.track.el = r.cloneNode(!0)),
                li(this.axis.x.track.el, this.classNames.horizontal),
                (this.axis.y.track.el = r.cloneNode(!0)),
                li(this.axis.y.track.el, this.classNames.vertical),
                this.el.appendChild(this.axis.x.track.el),
                this.el.appendChild(this.axis.y.track.el);
            }
            si.prototype.initDOM.call(this),
              this.el.setAttribute("data-simplebar", "init");
          }),
          (t.prototype.unMount = function () {
            si.prototype.unMount.call(this), t.instances.delete(this.el);
          }),
          (t.initHtmlApi = function () {
            (this.initDOMLoadedElements =
              this.initDOMLoadedElements.bind(this)),
              "undefined" != typeof MutationObserver &&
                ((this.globalObserver = new MutationObserver(
                  t.handleMutations,
                )),
                this.globalObserver.observe(document, {
                  childList: !0,
                  subtree: !0,
                })),
              "complete" === document.readyState ||
              ("loading" !== document.readyState &&
                !document.documentElement.doScroll)
                ? window.setTimeout(this.initDOMLoadedElements)
                : (document.addEventListener(
                    "DOMContentLoaded",
                    this.initDOMLoadedElements,
                  ),
                  window.addEventListener("load", this.initDOMLoadedElements));
          }),
          (t.handleMutations = function (e) {
            e.forEach(function (e) {
              e.addedNodes.forEach(function (e) {
                1 === e.nodeType &&
                  (e.hasAttribute("data-simplebar")
                    ? !t.instances.has(e) &&
                      document.documentElement.contains(e) &&
                      new t(e, oi(e.attributes))
                    : e
                        .querySelectorAll("[data-simplebar]")
                        .forEach(function (e) {
                          "init" !== e.getAttribute("data-simplebar") &&
                            !t.instances.has(e) &&
                            document.documentElement.contains(e) &&
                            new t(e, oi(e.attributes));
                        }));
              }),
                e.removedNodes.forEach(function (e) {
                  1 === e.nodeType &&
                    ("init" === e.getAttribute("data-simplebar")
                      ? t.instances.has(e) &&
                        !document.documentElement.contains(e) &&
                        t.instances.get(e).unMount()
                      : Array.prototype.forEach.call(
                          e.querySelectorAll('[data-simplebar="init"]'),
                          function (e) {
                            t.instances.has(e) &&
                              !document.documentElement.contains(e) &&
                              t.instances.get(e).unMount();
                          },
                        ));
                });
            });
          }),
          (t.instances = new WeakMap()),
          t
        );
      })(si);
    ct && ai.initHtmlApi();
    new (i(732))({
      elements_selector: "[data-src]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    class ci {
      constructor(e) {
        (this.config = Object.assign({ logging: !0 }, e)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]"),
          );
      }
      scrollWatcherConstructor(e) {
        if (e.length) {
          this.scrollWatcherLogging(
            `Проснулся, слежу за объектами (${e.length})...`,
          ),
            d(
              Array.from(e).map(function (e) {
                return `${e.dataset.watchRoot ? e.dataset.watchRoot : null}|${
                  e.dataset.watchMargin ? e.dataset.watchMargin : "0px"
                }|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
              }),
            ).forEach((t) => {
              let i = t.split("|"),
                s = { root: i[0], margin: i[1], threshold: i[2] },
                r = Array.from(e).filter(function (e) {
                  let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                    i = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                    r = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                  if (
                    String(t) === s.root &&
                    String(i) === s.margin &&
                    String(r) === s.threshold
                  )
                    return e;
                }),
                n = this.getScrollWatcherConfig(s);
              this.scrollWatcherInit(r, n);
            });
        } else
          this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
      }
      getScrollWatcherConfig(e) {
        let t = {};
        if (
          (document.querySelector(e.root)
            ? (t.root = document.querySelector(e.root))
            : "null" !== e.root &&
              this.scrollWatcherLogging(
                `Эмм... родительского объекта ${e.root} нет на странице`,
              ),
          (t.rootMargin = e.margin),
          !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
        ) {
          if ("prx" === e.threshold) {
            e.threshold = [];
            for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
          } else e.threshold = e.threshold.split(",");
          return (t.threshold = e.threshold), t;
        }
        this.scrollWatcherLogging(
          "Ой ой, настройку data-watch-margin нужно задавать в PX или %",
        );
      }
      scrollWatcherCreate(e) {
        this.observer = new IntersectionObserver((e, t) => {
          e.forEach((e) => {
            this.scrollWatcherCallback(e, t);
          });
        }, e);
      }
      scrollWatcherInit(e, t) {
        this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
      }
      scrollWatcherIntersecting(e, t) {
        e.isIntersecting
          ? (!t.classList.contains("_watcher-view") &&
              t.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `Я вижу ${t.classList}, добавил класс _watcher-view`,
            ))
          : (t.classList.contains("_watcher-view") &&
              t.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `Я не вижу ${t.classList}, убрал класс _watcher-view`,
            ));
      }
      scrollWatcherOff(e, t) {
        t.unobserve(e),
          this.scrollWatcherLogging(`Я перестал следить за ${e.classList}`);
      }
      scrollWatcherLogging(e) {
        this.config.logging && c(`[Наблюдатель]: ${e}`);
      }
      scrollWatcherCallback(e, t) {
        const i = e.target;
        this.scrollWatcherIntersecting(e, i),
          i.hasAttribute("data-watch-once") &&
            e.isIntersecting &&
            this.scrollWatcherOff(i, t),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: e } }),
          );
      }
    }
    let di = !1;
    setTimeout(() => {
      if (di) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0);
    var ui = function () {
      return (
        (ui =
          Object.assign ||
          function (e) {
            for (var t, i = 1, s = arguments.length; i < s; i++)
              for (var r in (t = arguments[i]))
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e;
          }),
        ui.apply(this, arguments)
      );
    };
    var hi = "lgAfterAppendSlide",
      pi = "lgInit",
      fi = "lgHasVideo",
      gi = "lgContainerResize",
      mi = "lgUpdateSlides",
      vi = "lgAfterAppendSubHtml",
      bi = "lgBeforeOpen",
      yi = "lgAfterOpen",
      wi = "lgSlideItemLoad",
      Si = "lgBeforeSlide",
      xi = "lgAfterSlide",
      Ei = "lgPosterClick",
      Ci = "lgDragStart",
      Ti = "lgDragMove",
      Ai = "lgDragEnd",
      Li = "lgBeforeNextSlide",
      Oi = "lgBeforePrevSlide",
      Ii = "lgBeforeClose",
      Mi = "lgAfterClose",
      ki = {
        mode: "lg-slide",
        easing: "ease",
        speed: 400,
        licenseKey: "0000-0000-000-0000",
        height: "100%",
        width: "100%",
        addClass: "",
        startClass: "lg-start-zoom",
        backdropDuration: 300,
        container: "",
        startAnimationDuration: 400,
        zoomFromOrigin: !0,
        hideBarsDelay: 0,
        showBarsAfter: 1e4,
        slideDelay: 0,
        supportLegacyBrowser: !0,
        allowMediaOverlap: !1,
        videoMaxSize: "1280-720",
        loadYouTubePoster: !0,
        defaultCaptionHeight: 0,
        ariaLabelledby: "",
        ariaDescribedby: "",
        resetScrollPosition: !0,
        hideScrollbar: !1,
        closable: !0,
        swipeToClose: !0,
        closeOnTap: !0,
        showCloseIcon: !0,
        showMaximizeIcon: !1,
        loop: !0,
        escKey: !0,
        keyPress: !0,
        trapFocus: !0,
        controls: !0,
        slideEndAnimation: !0,
        hideControlOnEnd: !1,
        mousewheel: !1,
        getCaptionFromTitleOrAlt: !0,
        appendSubHtmlTo: ".lg-sub-html",
        subHtmlSelectorRelative: !1,
        preload: 2,
        numberOfSlideItemsInDom: 10,
        selector: "",
        selectWithin: "",
        nextHtml: "",
        prevHtml: "",
        index: 0,
        iframeWidth: "100%",
        iframeHeight: "100%",
        iframeMaxWidth: "100%",
        iframeMaxHeight: "100%",
        download: !0,
        counter: !0,
        appendCounterTo: ".lg-toolbar",
        swipeThreshold: 50,
        enableSwipe: !0,
        enableDrag: !0,
        dynamic: !1,
        dynamicEl: [],
        extraProps: [],
        exThumbImage: "",
        isMobile: void 0,
        mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 },
        plugins: [],
        strings: {
          closeGallery: "Close gallery",
          toggleMaximize: "Toggle maximize",
          previousSlide: "Previous slide",
          nextSlide: "Next slide",
          download: "Download",
          playVideo: "Play video",
          mediaLoadingFailed: "Oops... Failed to load content...",
        },
      };
    var _i = (function () {
      function e(e) {
        return (
          (this.cssVenderPrefixes = [
            "TransitionDuration",
            "TransitionTimingFunction",
            "Transform",
            "Transition",
          ]),
          (this.selector = this._getSelector(e)),
          (this.firstElement = this._getFirstEl()),
          this
        );
      }
      return (
        (e.generateUUID = function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (e) {
              var t = (16 * Math.random()) | 0;
              return ("x" == e ? t : (3 & t) | 8).toString(16);
            },
          );
        }),
        (e.prototype._getSelector = function (e, t) {
          return (
            void 0 === t && (t = document),
            "string" != typeof e
              ? e
              : ((t = t || document),
                "#" === e.substring(0, 1)
                  ? t.querySelector(e)
                  : t.querySelectorAll(e))
          );
        }),
        (e.prototype._each = function (e) {
          return this.selector
            ? (void 0 !== this.selector.length
                ? [].forEach.call(this.selector, e)
                : e(this.selector, 0),
              this)
            : this;
        }),
        (e.prototype._setCssVendorPrefix = function (e, t, i) {
          var s = t.replace(/-([a-z])/gi, function (e, t) {
            return t.toUpperCase();
          });
          -1 !== this.cssVenderPrefixes.indexOf(s)
            ? ((e.style[s.charAt(0).toLowerCase() + s.slice(1)] = i),
              (e.style["webkit" + s] = i),
              (e.style["moz" + s] = i),
              (e.style["ms" + s] = i),
              (e.style["o" + s] = i))
            : (e.style[s] = i);
        }),
        (e.prototype._getFirstEl = function () {
          return this.selector && void 0 !== this.selector.length
            ? this.selector[0]
            : this.selector;
        }),
        (e.prototype.isEventMatched = function (e, t) {
          var i = t.split(".");
          return e
            .split(".")
            .filter(function (e) {
              return e;
            })
            .every(function (e) {
              return -1 !== i.indexOf(e);
            });
        }),
        (e.prototype.attr = function (e, t) {
          return void 0 === t
            ? this.firstElement
              ? this.firstElement.getAttribute(e)
              : ""
            : (this._each(function (i) {
                i.setAttribute(e, t);
              }),
              this);
        }),
        (e.prototype.find = function (e) {
          return Pi(this._getSelector(e, this.selector));
        }),
        (e.prototype.first = function () {
          return this.selector && void 0 !== this.selector.length
            ? Pi(this.selector[0])
            : Pi(this.selector);
        }),
        (e.prototype.eq = function (e) {
          return Pi(this.selector[e]);
        }),
        (e.prototype.parent = function () {
          return Pi(this.selector.parentElement);
        }),
        (e.prototype.get = function () {
          return this._getFirstEl();
        }),
        (e.prototype.removeAttr = function (e) {
          var t = e.split(" ");
          return (
            this._each(function (e) {
              t.forEach(function (t) {
                return e.removeAttribute(t);
              });
            }),
            this
          );
        }),
        (e.prototype.wrap = function (e) {
          if (!this.firstElement) return this;
          var t = document.createElement("div");
          return (
            (t.className = e),
            this.firstElement.parentNode.insertBefore(t, this.firstElement),
            this.firstElement.parentNode.removeChild(this.firstElement),
            t.appendChild(this.firstElement),
            this
          );
        }),
        (e.prototype.addClass = function (e) {
          return (
            void 0 === e && (e = ""),
            this._each(function (t) {
              e.split(" ").forEach(function (e) {
                e && t.classList.add(e);
              });
            }),
            this
          );
        }),
        (e.prototype.removeClass = function (e) {
          return (
            this._each(function (t) {
              e.split(" ").forEach(function (e) {
                e && t.classList.remove(e);
              });
            }),
            this
          );
        }),
        (e.prototype.hasClass = function (e) {
          return !!this.firstElement && this.firstElement.classList.contains(e);
        }),
        (e.prototype.hasAttribute = function (e) {
          return !!this.firstElement && this.firstElement.hasAttribute(e);
        }),
        (e.prototype.toggleClass = function (e) {
          return this.firstElement
            ? (this.hasClass(e) ? this.removeClass(e) : this.addClass(e), this)
            : this;
        }),
        (e.prototype.css = function (e, t) {
          var i = this;
          return (
            this._each(function (s) {
              i._setCssVendorPrefix(s, e, t);
            }),
            this
          );
        }),
        (e.prototype.on = function (t, i) {
          var s = this;
          return this.selector
            ? (t.split(" ").forEach(function (t) {
                Array.isArray(e.eventListeners[t]) ||
                  (e.eventListeners[t] = []),
                  e.eventListeners[t].push(i),
                  s.selector.addEventListener(t.split(".")[0], i);
              }),
              this)
            : this;
        }),
        (e.prototype.once = function (e, t) {
          var i = this;
          return (
            this.on(e, function () {
              i.off(e), t(e);
            }),
            this
          );
        }),
        (e.prototype.off = function (t) {
          var i = this;
          return this.selector
            ? (Object.keys(e.eventListeners).forEach(function (s) {
                i.isEventMatched(t, s) &&
                  (e.eventListeners[s].forEach(function (e) {
                    i.selector.removeEventListener(s.split(".")[0], e);
                  }),
                  (e.eventListeners[s] = []));
              }),
              this)
            : this;
        }),
        (e.prototype.trigger = function (e, t) {
          if (!this.firstElement) return this;
          var i = new CustomEvent(e.split(".")[0], { detail: t || null });
          return this.firstElement.dispatchEvent(i), this;
        }),
        (e.prototype.load = function (e) {
          var t = this;
          return (
            fetch(e)
              .then(function (e) {
                return e.text();
              })
              .then(function (e) {
                t.selector.innerHTML = e;
              }),
            this
          );
        }),
        (e.prototype.html = function (e) {
          return void 0 === e
            ? this.firstElement
              ? this.firstElement.innerHTML
              : ""
            : (this._each(function (t) {
                t.innerHTML = e;
              }),
              this);
        }),
        (e.prototype.append = function (e) {
          return (
            this._each(function (t) {
              "string" == typeof e
                ? t.insertAdjacentHTML("beforeend", e)
                : t.appendChild(e);
            }),
            this
          );
        }),
        (e.prototype.prepend = function (e) {
          return (
            this._each(function (t) {
              t.insertAdjacentHTML("afterbegin", e);
            }),
            this
          );
        }),
        (e.prototype.remove = function () {
          return (
            this._each(function (e) {
              e.parentNode.removeChild(e);
            }),
            this
          );
        }),
        (e.prototype.empty = function () {
          return (
            this._each(function (e) {
              e.innerHTML = "";
            }),
            this
          );
        }),
        (e.prototype.scrollTop = function (e) {
          return void 0 !== e
            ? ((document.body.scrollTop = e),
              (document.documentElement.scrollTop = e),
              this)
            : window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;
        }),
        (e.prototype.scrollLeft = function (e) {
          return void 0 !== e
            ? ((document.body.scrollLeft = e),
              (document.documentElement.scrollLeft = e),
              this)
            : window.pageXOffset ||
                document.documentElement.scrollLeft ||
                document.body.scrollLeft ||
                0;
        }),
        (e.prototype.offset = function () {
          if (!this.firstElement) return { left: 0, top: 0 };
          var e = this.firstElement.getBoundingClientRect(),
            t = Pi("body").style().marginLeft;
          return {
            left: e.left - parseFloat(t) + this.scrollLeft(),
            top: e.top + this.scrollTop(),
          };
        }),
        (e.prototype.style = function () {
          return this.firstElement
            ? this.firstElement.currentStyle ||
                window.getComputedStyle(this.firstElement)
            : {};
        }),
        (e.prototype.width = function () {
          var e = this.style();
          return (
            this.firstElement.clientWidth -
            parseFloat(e.paddingLeft) -
            parseFloat(e.paddingRight)
          );
        }),
        (e.prototype.height = function () {
          var e = this.style();
          return (
            this.firstElement.clientHeight -
            parseFloat(e.paddingTop) -
            parseFloat(e.paddingBottom)
          );
        }),
        (e.eventListeners = {}),
        e
      );
    })();
    function Pi(e) {
      return (
        (function () {
          if ("function" == typeof window.CustomEvent) return !1;
          window.CustomEvent = function (e, t) {
            t = t || { bubbles: !1, cancelable: !1, detail: null };
            var i = document.createEvent("CustomEvent");
            return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
          };
        })(),
        Element.prototype.matches ||
          (Element.prototype.matches =
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector),
        new _i(e)
      );
    }
    var zi = [
      "src",
      "sources",
      "subHtml",
      "subHtmlUrl",
      "html",
      "video",
      "poster",
      "slideName",
      "responsive",
      "srcset",
      "sizes",
      "iframe",
      "downloadUrl",
      "download",
      "width",
      "facebookShareUrl",
      "tweetText",
      "iframeTitle",
      "twitterShareUrl",
      "pinterestShareUrl",
      "pinterestText",
      "fbHtml",
      "disqusIdentifier",
      "disqusUrl",
    ];
    function Di(e) {
      return "href" === e
        ? "src"
        : (e = (e =
            (e = e.replace("data-", "")).charAt(0).toLowerCase() +
            e.slice(1)).replace(/-([a-z])/g, function (e) {
            return e[1].toUpperCase();
          }));
    }
    var Ni = function (e, t, i, s) {
        void 0 === i && (i = 0);
        var r = Pi(e).attr("data-lg-size") || s;
        if (r) {
          var n = r.split(",");
          if (n[1])
            for (var o = window.innerWidth, l = 0; l < n.length; l++) {
              var a = n[l];
              if (parseInt(a.split("-")[2], 10) > o) {
                r = a;
                break;
              }
              l === n.length - 1 && (r = a);
            }
          var c = r.split("-"),
            d = parseInt(c[0], 10),
            u = parseInt(c[1], 10),
            h = t.width(),
            p = t.height() - i,
            f = Math.min(h, d),
            g = Math.min(p, u),
            m = Math.min(f / d, g / u);
          return { width: d * m, height: u * m };
        }
      },
      Vi = function (e, t, i, s, r) {
        if (r) {
          var n = Pi(e).find("img").first();
          if (n.get()) {
            var o = t.get().getBoundingClientRect(),
              l = o.width,
              a = t.height() - (i + s),
              c = n.width(),
              d = n.height(),
              u = n.style(),
              h =
                (l - c) / 2 -
                n.offset().left +
                (parseFloat(u.paddingLeft) || 0) +
                (parseFloat(u.borderLeft) || 0) +
                Pi(window).scrollLeft() +
                o.left,
              p =
                (a - d) / 2 -
                n.offset().top +
                (parseFloat(u.paddingTop) || 0) +
                (parseFloat(u.borderTop) || 0) +
                Pi(window).scrollTop() +
                i;
            return (
              "translate3d(" +
              (h *= -1) +
              "px, " +
              (p *= -1) +
              "px, 0) scale3d(" +
              c / r.width +
              ", " +
              d / r.height +
              ", 1)"
            );
          }
        }
      },
      Hi = function (e, t, i, s, r, n) {
        return (
          '<div class="lg-video-cont lg-has-iframe" style="width:' +
          e +
          "; max-width:" +
          i +
          "; height: " +
          t +
          "; max-height:" +
          s +
          '">\n                    <iframe class="lg-object" frameborder="0" ' +
          (n ? 'title="' + n + '"' : "") +
          ' src="' +
          r +
          '"  allowfullscreen="true"></iframe>\n                </div>'
        );
      },
      Gi = function (e, t, i, s, r, n) {
        var o =
            "<img " +
            i +
            " " +
            (s ? 'srcset="' + s + '"' : "") +
            "  " +
            (r ? 'sizes="' + r + '"' : "") +
            ' class="lg-object lg-image" data-index="' +
            e +
            '" src="' +
            t +
            '" />',
          l = "";
        n &&
          (l = ("string" == typeof n ? JSON.parse(n) : n).map(function (e) {
            var t = "";
            return (
              Object.keys(e).forEach(function (i) {
                t += " " + i + '="' + e[i] + '"';
              }),
              "<source " + t + "></source>"
            );
          }));
        return "" + l + o;
      },
      Bi = function (e) {
        for (var t = [], i = [], s = "", r = 0; r < e.length; r++) {
          var n = e[r].split(" ");
          "" === n[0] && n.splice(0, 1), i.push(n[0]), t.push(n[1]);
        }
        for (var o = window.innerWidth, l = 0; l < t.length; l++)
          if (parseInt(t[l], 10) > o) {
            s = i[l];
            break;
          }
        return s;
      },
      Wi = function (e) {
        return !!e && !!e.complete && 0 !== e.naturalWidth;
      },
      Fi = function (e, t, i, s, r) {
        return (
          '<div class="lg-video-cont ' +
          (r && r.youtube
            ? "lg-has-youtube"
            : r && r.vimeo
            ? "lg-has-vimeo"
            : "lg-has-html5") +
          '" style="' +
          i +
          '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' +
          s +
          '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' +
          s +
          '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
          (t || "") +
          '\n            <img class="lg-object lg-video-poster" src="' +
          e +
          '" />\n        </div>'
        );
      },
      Ri = function (e) {
        var t = e.querySelectorAll(
          'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])',
        );
        return [].filter.call(t, function (e) {
          var t = window.getComputedStyle(e);
          return "none" !== t.display && "hidden" !== t.visibility;
        });
      },
      $i = function (e, t, i, s) {
        var r = [],
          n = (function () {
            for (var e = 0, t = 0, i = arguments.length; t < i; t++)
              e += arguments[t].length;
            var s = Array(e),
              r = 0;
            for (t = 0; t < i; t++)
              for (var n = arguments[t], o = 0, l = n.length; o < l; o++, r++)
                s[r] = n[o];
            return s;
          })(zi, t);
        return (
          [].forEach.call(e, function (e) {
            for (var t = {}, o = 0; o < e.attributes.length; o++) {
              var l = e.attributes[o];
              if (l.specified) {
                var a = Di(l.name),
                  c = "";
                n.indexOf(a) > -1 && (c = a), c && (t[c] = l.value);
              }
            }
            var d = Pi(e),
              u = d.find("img").first().attr("alt"),
              h = d.attr("title"),
              p = s ? d.attr(s) : d.find("img").first().attr("src");
            (t.thumb = p),
              i && !t.subHtml && (t.subHtml = h || u || ""),
              (t.alt = u || h || ""),
              r.push(t);
          }),
          r
        );
      },
      ji = function () {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      },
      qi = function (e, t, i) {
        if (!e)
          return t
            ? { html5: !0 }
            : void console.error(
                "lightGallery :- data-src is not provided on slide item " +
                  (i + 1) +
                  ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/",
              );
        var s = e.match(
            /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i,
          ),
          r = e.match(
            /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i,
          ),
          n = e.match(
            /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/,
          );
        return s
          ? { youtube: s }
          : r
          ? { vimeo: r }
          : n
          ? { wistia: n }
          : void 0;
      },
      Ui = 0,
      Yi = (function () {
        function e(e, t) {
          if (
            ((this.lgOpened = !1),
            (this.index = 0),
            (this.plugins = []),
            (this.lGalleryOn = !1),
            (this.lgBusy = !1),
            (this.currentItemsInDom = []),
            (this.prevScrollTop = 0),
            (this.bodyPaddingRight = 0),
            (this.isDummyImageRemoved = !1),
            (this.dragOrSwipeEnabled = !1),
            (this.mediaContainerPosition = { top: 0, bottom: 0 }),
            !e)
          )
            return this;
          if (
            (Ui++,
            (this.lgId = Ui),
            (this.el = e),
            (this.LGel = Pi(e)),
            this.generateSettings(t),
            this.buildModules(),
            this.settings.dynamic &&
              void 0 !== this.settings.dynamicEl &&
              !Array.isArray(this.settings.dynamicEl))
          )
            throw "When using dynamic mode, you must also define dynamicEl as an Array.";
          return (
            (this.galleryItems = this.getItems()),
            this.normalizeSettings(),
            this.init(),
            this.validateLicense(),
            this
          );
        }
        return (
          (e.prototype.generateSettings = function (e) {
            if (
              ((this.settings = ui(ui({}, ki), e)),
              this.settings.isMobile &&
              "function" == typeof this.settings.isMobile
                ? this.settings.isMobile()
                : ji())
            ) {
              var t = ui(
                ui({}, this.settings.mobileSettings),
                this.settings.mobileSettings,
              );
              this.settings = ui(ui({}, this.settings), t);
            }
          }),
          (e.prototype.normalizeSettings = function () {
            this.settings.slideEndAnimation &&
              (this.settings.hideControlOnEnd = !1),
              this.settings.closable || (this.settings.swipeToClose = !1),
              (this.zoomFromOrigin = this.settings.zoomFromOrigin),
              this.settings.dynamic && (this.zoomFromOrigin = !1),
              this.settings.container ||
                (this.settings.container = document.body),
              (this.settings.preload = Math.min(
                this.settings.preload,
                this.galleryItems.length,
              ));
          }),
          (e.prototype.init = function () {
            var e = this;
            this.addSlideVideoInfo(this.galleryItems),
              this.buildStructure(),
              this.LGel.trigger(pi, { instance: this }),
              this.settings.keyPress && this.keyPress(),
              setTimeout(function () {
                e.enableDrag(), e.enableSwipe(), e.triggerPosterClick();
              }, 50),
              this.arrow(),
              this.settings.mousewheel && this.mousewheel(),
              this.settings.dynamic || this.openGalleryOnItemClick();
          }),
          (e.prototype.openGalleryOnItemClick = function () {
            for (
              var e = this,
                t = function (t) {
                  var s = i.items[t],
                    r = Pi(s),
                    n = _i.generateUUID();
                  r.attr("data-lg-id", n).on(
                    "click.lgcustom-item-" + n,
                    function (i) {
                      i.preventDefault();
                      var r = e.settings.index || t;
                      e.openGallery(r, s);
                    },
                  );
                },
                i = this,
                s = 0;
              s < this.items.length;
              s++
            )
              t(s);
          }),
          (e.prototype.buildModules = function () {
            var e = this;
            this.settings.plugins.forEach(function (t) {
              e.plugins.push(new t(e, Pi));
            });
          }),
          (e.prototype.validateLicense = function () {
            this.settings.licenseKey
              ? "0000-0000-000-0000" === this.settings.licenseKey &&
                console.warn(
                  "lightGallery: " +
                    this.settings.licenseKey +
                    " license key is not valid for production use",
                )
              : console.error("Please provide a valid license key");
          }),
          (e.prototype.getSlideItem = function (e) {
            return Pi(this.getSlideItemId(e));
          }),
          (e.prototype.getSlideItemId = function (e) {
            return "#lg-item-" + this.lgId + "-" + e;
          }),
          (e.prototype.getIdName = function (e) {
            return e + "-" + this.lgId;
          }),
          (e.prototype.getElementById = function (e) {
            return Pi("#" + this.getIdName(e));
          }),
          (e.prototype.manageSingleSlideClassName = function () {
            this.galleryItems.length < 2
              ? this.outer.addClass("lg-single-item")
              : this.outer.removeClass("lg-single-item");
          }),
          (e.prototype.buildStructure = function () {
            var e = this;
            if (!(this.$container && this.$container.get())) {
              var t = "",
                i = "";
              this.settings.controls &&
                (t =
                  '<button type="button" id="' +
                  this.getIdName("lg-prev") +
                  '" aria-label="' +
                  this.settings.strings.previousSlide +
                  '" class="lg-prev lg-icon"> ' +
                  this.settings.prevHtml +
                  ' </button>\n                <button type="button" id="' +
                  this.getIdName("lg-next") +
                  '" aria-label="' +
                  this.settings.strings.nextSlide +
                  '" class="lg-next lg-icon"> ' +
                  this.settings.nextHtml +
                  " </button>"),
                ".lg-item" !== this.settings.appendSubHtmlTo &&
                  (i =
                    '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
              var s = "";
              this.settings.allowMediaOverlap && (s += "lg-media-overlap ");
              var r = this.settings.ariaLabelledby
                  ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
                  : "",
                n = this.settings.ariaDescribedby
                  ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
                  : "",
                o =
                  "lg-container " +
                  this.settings.addClass +
                  " " +
                  (document.body !== this.settings.container
                    ? "lg-inline"
                    : ""),
                l =
                  this.settings.closable && this.settings.showCloseIcon
                    ? '<button type="button" aria-label="' +
                      this.settings.strings.closeGallery +
                      '" id="' +
                      this.getIdName("lg-close") +
                      '" class="lg-close lg-icon"></button>'
                    : "",
                a = this.settings.showMaximizeIcon
                  ? '<button type="button" aria-label="' +
                    this.settings.strings.toggleMaximize +
                    '" id="' +
                    this.getIdName("lg-maximize") +
                    '" class="lg-maximize lg-icon"></button>'
                  : "",
                c =
                  '\n        <div class="' +
                  o +
                  '" id="' +
                  this.getIdName("lg-container") +
                  '" tabindex="-1" aria-modal="true" ' +
                  r +
                  " " +
                  n +
                  ' role="dialog"\n        >\n            <div id="' +
                  this.getIdName("lg-backdrop") +
                  '" class="lg-backdrop"></div>\n\n            <div id="' +
                  this.getIdName("lg-outer") +
                  '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                  s +
                  ' ">\n\n              <div id="' +
                  this.getIdName("lg-content") +
                  '" class="lg-content">\n                <div id="' +
                  this.getIdName("lg-inner") +
                  '" class="lg-inner">\n                </div>\n                ' +
                  t +
                  '\n              </div>\n                <div id="' +
                  this.getIdName("lg-toolbar") +
                  '" class="lg-toolbar lg-group">\n                    ' +
                  a +
                  "\n                    " +
                  l +
                  "\n                    </div>\n                    " +
                  (".lg-outer" === this.settings.appendSubHtmlTo ? i : "") +
                  '\n                <div id="' +
                  this.getIdName("lg-components") +
                  '" class="lg-components">\n                    ' +
                  (".lg-sub-html" === this.settings.appendSubHtmlTo ? i : "") +
                  "\n                </div>\n            </div>\n        </div>\n        ";
              Pi(this.settings.container).append(c),
                document.body !== this.settings.container &&
                  Pi(this.settings.container).css("position", "relative"),
                (this.outer = this.getElementById("lg-outer")),
                (this.$lgComponents = this.getElementById("lg-components")),
                (this.$backdrop = this.getElementById("lg-backdrop")),
                (this.$container = this.getElementById("lg-container")),
                (this.$inner = this.getElementById("lg-inner")),
                (this.$content = this.getElementById("lg-content")),
                (this.$toolbar = this.getElementById("lg-toolbar")),
                this.$backdrop.css(
                  "transition-duration",
                  this.settings.backdropDuration + "ms",
                );
              var d = this.settings.mode + " ";
              this.manageSingleSlideClassName(),
                this.settings.enableDrag && (d += "lg-grab "),
                this.outer.addClass(d),
                this.$inner.css(
                  "transition-timing-function",
                  this.settings.easing,
                ),
                this.$inner.css(
                  "transition-duration",
                  this.settings.speed + "ms",
                ),
                this.settings.download &&
                  this.$toolbar.append(
                    '<a id="' +
                      this.getIdName("lg-download") +
                      '" target="_blank" rel="noopener" aria-label="' +
                      this.settings.strings.download +
                      '" download class="lg-download lg-icon"></a>',
                  ),
                this.counter(),
                Pi(window).on(
                  "resize.lg.global" +
                    this.lgId +
                    " orientationchange.lg.global" +
                    this.lgId,
                  function () {
                    e.refreshOnResize();
                  },
                ),
                this.hideBars(),
                this.manageCloseGallery(),
                this.toggleMaximize(),
                this.initModules();
            }
          }),
          (e.prototype.refreshOnResize = function () {
            if (this.lgOpened) {
              var e = this.galleryItems[this.index].__slideVideoInfo;
              this.mediaContainerPosition = this.getMediaContainerPosition();
              var t = this.mediaContainerPosition,
                i = t.top,
                s = t.bottom;
              if (
                ((this.currentImageSize = Ni(
                  this.items[this.index],
                  this.outer,
                  i + s,
                  e && this.settings.videoMaxSize,
                )),
                e && this.resizeVideoSlide(this.index, this.currentImageSize),
                this.zoomFromOrigin && !this.isDummyImageRemoved)
              ) {
                var r = this.getDummyImgStyles(this.currentImageSize);
                this.outer
                  .find(".lg-current .lg-dummy-img")
                  .first()
                  .attr("style", r);
              }
              this.LGel.trigger(gi);
            }
          }),
          (e.prototype.resizeVideoSlide = function (e, t) {
            var i = this.getVideoContStyle(t);
            this.getSlideItem(e).find(".lg-video-cont").attr("style", i);
          }),
          (e.prototype.updateSlides = function (e, t) {
            if (
              (this.index > e.length - 1 && (this.index = e.length - 1),
              1 === e.length && (this.index = 0),
              e.length)
            ) {
              var i = this.galleryItems[t].src;
              (this.galleryItems = e),
                this.updateControls(),
                this.$inner.empty(),
                (this.currentItemsInDom = []);
              var s = 0;
              this.galleryItems.some(function (e, t) {
                return e.src === i && ((s = t), !0);
              }),
                (this.currentItemsInDom = this.organizeSlideItems(s, -1)),
                this.loadContent(s, !0),
                this.getSlideItem(s).addClass("lg-current"),
                (this.index = s),
                this.updateCurrentCounter(s),
                this.LGel.trigger(mi);
            } else this.closeGallery();
          }),
          (e.prototype.getItems = function () {
            if (((this.items = []), this.settings.dynamic))
              return this.settings.dynamicEl || [];
            if ("this" === this.settings.selector) this.items.push(this.el);
            else if (this.settings.selector)
              if ("string" == typeof this.settings.selector)
                if (this.settings.selectWithin) {
                  var e = Pi(this.settings.selectWithin);
                  this.items = e.find(this.settings.selector).get();
                } else
                  this.items = this.el.querySelectorAll(this.settings.selector);
              else this.items = this.settings.selector;
            else this.items = this.el.children;
            return $i(
              this.items,
              this.settings.extraProps,
              this.settings.getCaptionFromTitleOrAlt,
              this.settings.exThumbImage,
            );
          }),
          (e.prototype.shouldHideScrollbar = function () {
            return (
              this.settings.hideScrollbar &&
              document.body === this.settings.container
            );
          }),
          (e.prototype.hideScrollbar = function () {
            if (this.shouldHideScrollbar()) {
              this.bodyPaddingRight = parseFloat(
                Pi("body").style().paddingRight,
              );
              var e = document.documentElement.getBoundingClientRect(),
                t = window.innerWidth - e.width;
              Pi(document.body).css(
                "padding-right",
                t + this.bodyPaddingRight + "px",
              ),
                Pi(document.body).addClass("lg-overlay-open");
            }
          }),
          (e.prototype.resetScrollBar = function () {
            this.shouldHideScrollbar() &&
              (Pi(document.body).css(
                "padding-right",
                this.bodyPaddingRight + "px",
              ),
              Pi(document.body).removeClass("lg-overlay-open"));
          }),
          (e.prototype.openGallery = function (e, t) {
            var i = this;
            if ((void 0 === e && (e = this.settings.index), !this.lgOpened)) {
              (this.lgOpened = !0),
                this.outer.removeClass("lg-hide-items"),
                this.hideScrollbar(),
                this.$container.addClass("lg-show");
              var s = this.getItemsToBeInsertedToDom(e, e);
              this.currentItemsInDom = s;
              var r = "";
              s.forEach(function (e) {
                r = r + '<div id="' + e + '" class="lg-item"></div>';
              }),
                this.$inner.append(r),
                this.addHtml(e);
              var n = "";
              this.mediaContainerPosition = this.getMediaContainerPosition();
              var o = this.mediaContainerPosition,
                l = o.top,
                a = o.bottom;
              this.settings.allowMediaOverlap ||
                this.setMediaContainerPosition(l, a);
              var c = this.galleryItems[e].__slideVideoInfo;
              this.zoomFromOrigin &&
                t &&
                ((this.currentImageSize = Ni(
                  t,
                  this.outer,
                  l + a,
                  c && this.settings.videoMaxSize,
                )),
                (n = Vi(t, this.outer, l, a, this.currentImageSize))),
                (this.zoomFromOrigin && n) ||
                  (this.outer.addClass(this.settings.startClass),
                  this.getSlideItem(e).removeClass("lg-complete"));
              var d = this.settings.zoomFromOrigin
                ? 100
                : this.settings.backdropDuration;
              setTimeout(function () {
                i.outer.addClass("lg-components-open");
              }, d),
                (this.index = e),
                this.LGel.trigger(bi),
                this.getSlideItem(e).addClass("lg-current"),
                (this.lGalleryOn = !1),
                (this.prevScrollTop = Pi(window).scrollTop()),
                setTimeout(function () {
                  if (i.zoomFromOrigin && n) {
                    var t = i.getSlideItem(e);
                    t.css("transform", n),
                      setTimeout(function () {
                        t
                          .addClass("lg-start-progress lg-start-end-progress")
                          .css(
                            "transition-duration",
                            i.settings.startAnimationDuration + "ms",
                          ),
                          i.outer.addClass("lg-zoom-from-image");
                      }),
                      setTimeout(function () {
                        t.css("transform", "translate3d(0, 0, 0)");
                      }, 100);
                  }
                  setTimeout(function () {
                    i.$backdrop.addClass("in"),
                      i.$container.addClass("lg-show-in");
                  }, 10),
                    setTimeout(function () {
                      i.settings.trapFocus &&
                        document.body === i.settings.container &&
                        i.trapFocus();
                    }, i.settings.backdropDuration + 50),
                    (i.zoomFromOrigin && n) ||
                      setTimeout(function () {
                        i.outer.addClass("lg-visible");
                      }, i.settings.backdropDuration),
                    i.slide(e, !1, !1, !1),
                    i.LGel.trigger(yi);
                }),
                document.body === this.settings.container &&
                  Pi("html").addClass("lg-on");
            }
          }),
          (e.prototype.getMediaContainerPosition = function () {
            if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
            var e = this.$toolbar.get().clientHeight || 0,
              t = this.outer.find(".lg-components .lg-sub-html").get(),
              i =
                this.settings.defaultCaptionHeight ||
                (t && t.clientHeight) ||
                0,
              s = this.outer.find(".lg-thumb-outer").get();
            return { top: e, bottom: (s ? s.clientHeight : 0) + i };
          }),
          (e.prototype.setMediaContainerPosition = function (e, t) {
            void 0 === e && (e = 0),
              void 0 === t && (t = 0),
              this.$content.css("top", e + "px").css("bottom", t + "px");
          }),
          (e.prototype.hideBars = function () {
            var e = this;
            setTimeout(function () {
              e.outer.removeClass("lg-hide-items"),
                e.settings.hideBarsDelay > 0 &&
                  (e.outer.on(
                    "mousemove.lg click.lg touchstart.lg",
                    function () {
                      e.outer.removeClass("lg-hide-items"),
                        clearTimeout(e.hideBarTimeout),
                        (e.hideBarTimeout = setTimeout(function () {
                          e.outer.addClass("lg-hide-items");
                        }, e.settings.hideBarsDelay));
                    },
                  ),
                  e.outer.trigger("mousemove.lg"));
            }, this.settings.showBarsAfter);
          }),
          (e.prototype.initPictureFill = function (e) {
            if (this.settings.supportLegacyBrowser)
              try {
                picturefill({ elements: [e.get()] });
              } catch (e) {
                console.warn(
                  "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.",
                );
              }
          }),
          (e.prototype.counter = function () {
            if (this.settings.counter) {
              var e =
                '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
                this.getIdName("lg-counter-current") +
                '" class="lg-counter-current">' +
                (this.index + 1) +
                ' </span> /\n                <span id="' +
                this.getIdName("lg-counter-all") +
                '" class="lg-counter-all">' +
                this.galleryItems.length +
                " </span></div>";
              this.outer.find(this.settings.appendCounterTo).append(e);
            }
          }),
          (e.prototype.addHtml = function (e) {
            var t, i;
            if (
              (this.galleryItems[e].subHtmlUrl
                ? (i = this.galleryItems[e].subHtmlUrl)
                : (t = this.galleryItems[e].subHtml),
              !i)
            )
              if (t) {
                var s = t.substring(0, 1);
                ("." !== s && "#" !== s) ||
                  (t =
                    this.settings.subHtmlSelectorRelative &&
                    !this.settings.dynamic
                      ? Pi(this.items).eq(e).find(t).first().html()
                      : Pi(t).first().html());
              } else t = "";
            if (".lg-item" !== this.settings.appendSubHtmlTo)
              i
                ? this.outer.find(".lg-sub-html").load(i)
                : this.outer.find(".lg-sub-html").html(t);
            else {
              var r = Pi(this.getSlideItemId(e));
              i
                ? r.load(i)
                : r.append('<div class="lg-sub-html">' + t + "</div>");
            }
            null != t &&
              ("" === t
                ? this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .addClass("lg-empty-html")
                : this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .removeClass("lg-empty-html")),
              this.LGel.trigger(vi, { index: e });
          }),
          (e.prototype.preload = function (e) {
            for (
              var t = 1;
              t <= this.settings.preload &&
              !(t >= this.galleryItems.length - e);
              t++
            )
              this.loadContent(e + t, !1);
            for (var i = 1; i <= this.settings.preload && !(e - i < 0); i++)
              this.loadContent(e - i, !1);
          }),
          (e.prototype.getDummyImgStyles = function (e) {
            return e
              ? "width:" +
                  e.width +
                  "px;\n                margin-left: -" +
                  e.width / 2 +
                  "px;\n                margin-top: -" +
                  e.height / 2 +
                  "px;\n                height:" +
                  e.height +
                  "px"
              : "";
          }),
          (e.prototype.getVideoContStyle = function (e) {
            return e
              ? "width:" +
                  e.width +
                  "px;\n                height:" +
                  e.height +
                  "px"
              : "";
          }),
          (e.prototype.getDummyImageContent = function (e, t, i) {
            var s;
            if ((this.settings.dynamic || (s = Pi(this.items).eq(t)), s)) {
              var r = void 0;
              if (
                !(r = this.settings.exThumbImage
                  ? s.attr(this.settings.exThumbImage)
                  : s.find("img").first().attr("src"))
              )
                return "";
              var n =
                "<img " +
                i +
                ' style="' +
                this.getDummyImgStyles(this.currentImageSize) +
                '" class="lg-dummy-img" src="' +
                r +
                '" />';
              return (
                e.addClass("lg-first-slide"),
                this.outer.addClass("lg-first-slide-loading"),
                n
              );
            }
            return "";
          }),
          (e.prototype.setImgMarkup = function (e, t, i) {
            var s = this.galleryItems[i],
              r = s.alt,
              n = s.srcset,
              o = s.sizes,
              l = s.sources,
              a = r ? 'alt="' + r + '"' : "",
              c =
                '<picture class="lg-img-wrap"> ' +
                (this.isFirstSlideWithZoomAnimation()
                  ? this.getDummyImageContent(t, i, a)
                  : Gi(i, e, a, n, o, l)) +
                "</picture>";
            t.prepend(c);
          }),
          (e.prototype.onSlideObjectLoad = function (e, t, i, s) {
            var r = e.find(".lg-object").first();
            Wi(r.get()) || t
              ? i()
              : (r.on("load.lg error.lg", function () {
                  i && i();
                }),
                r.on("error.lg", function () {
                  s && s();
                }));
          }),
          (e.prototype.onLgObjectLoad = function (e, t, i, s, r, n) {
            var o = this;
            this.onSlideObjectLoad(
              e,
              n,
              function () {
                o.triggerSlideItemLoad(e, t, i, s, r);
              },
              function () {
                e.addClass("lg-complete lg-complete_"),
                  e.html(
                    '<span class="lg-error-msg">' +
                      o.settings.strings.mediaLoadingFailed +
                      "</span>",
                  );
              },
            );
          }),
          (e.prototype.triggerSlideItemLoad = function (e, t, i, s, r) {
            var n = this,
              o = this.galleryItems[t],
              l = r && "video" === this.getSlideType(o) && !o.poster ? s : 0;
            setTimeout(function () {
              e.addClass("lg-complete lg-complete_"),
                n.LGel.trigger(wi, {
                  index: t,
                  delay: i || 0,
                  isFirstSlide: r,
                });
            }, l);
          }),
          (e.prototype.isFirstSlideWithZoomAnimation = function () {
            return !(
              this.lGalleryOn ||
              !this.zoomFromOrigin ||
              !this.currentImageSize
            );
          }),
          (e.prototype.addSlideVideoInfo = function (e) {
            var t = this;
            e.forEach(function (e, i) {
              (e.__slideVideoInfo = qi(e.src, !!e.video, i)),
                e.__slideVideoInfo &&
                  t.settings.loadYouTubePoster &&
                  !e.poster &&
                  e.__slideVideoInfo.youtube &&
                  (e.poster =
                    "//img.youtube.com/vi/" +
                    e.__slideVideoInfo.youtube[1] +
                    "/maxresdefault.jpg");
            });
          }),
          (e.prototype.loadContent = function (e, t) {
            var i = this,
              s = this.galleryItems[e],
              r = Pi(this.getSlideItemId(e)),
              n = s.poster,
              o = s.srcset,
              l = s.sizes,
              a = s.sources,
              c = s.src,
              d = s.video,
              u = d && "string" == typeof d ? JSON.parse(d) : d;
            if (s.responsive) {
              var h = s.responsive.split(",");
              c = Bi(h) || c;
            }
            var p = s.__slideVideoInfo,
              f = "",
              g = !!s.iframe,
              m = !this.lGalleryOn,
              v = 0;
            if (
              (m &&
                (v =
                  this.zoomFromOrigin && this.currentImageSize
                    ? this.settings.startAnimationDuration + 10
                    : this.settings.backdropDuration + 10),
              !r.hasClass("lg-loaded"))
            ) {
              if (p) {
                var b = this.mediaContainerPosition,
                  y = b.top,
                  w = b.bottom,
                  S = Ni(
                    this.items[e],
                    this.outer,
                    y + w,
                    p && this.settings.videoMaxSize,
                  );
                f = this.getVideoContStyle(S);
              }
              if (g) {
                var x = Hi(
                  this.settings.iframeWidth,
                  this.settings.iframeHeight,
                  this.settings.iframeMaxWidth,
                  this.settings.iframeMaxHeight,
                  c,
                  s.iframeTitle,
                );
                r.prepend(x);
              } else if (n) {
                var E = "";
                m &&
                  this.zoomFromOrigin &&
                  this.currentImageSize &&
                  (E = this.getDummyImageContent(r, e, ""));
                x = Fi(n, E || "", f, this.settings.strings.playVideo, p);
                r.prepend(x);
              } else if (p) {
                x = '<div class="lg-video-cont " style="' + f + '"></div>';
                r.prepend(x);
              } else if ((this.setImgMarkup(c, r, e), o || a)) {
                var C = r.find(".lg-object");
                this.initPictureFill(C);
              }
              (n || p) &&
                this.LGel.trigger(fi, {
                  index: e,
                  src: c,
                  html5Video: u,
                  hasPoster: !!n,
                }),
                this.LGel.trigger(hi, { index: e }),
                this.lGalleryOn &&
                  ".lg-item" === this.settings.appendSubHtmlTo &&
                  this.addHtml(e);
            }
            var T = 0;
            v && !Pi(document.body).hasClass("lg-from-hash") && (T = v),
              this.isFirstSlideWithZoomAnimation() &&
                (setTimeout(function () {
                  r.removeClass(
                    "lg-start-end-progress lg-start-progress",
                  ).removeAttr("style");
                }, this.settings.startAnimationDuration + 100),
                r.hasClass("lg-loaded") ||
                  setTimeout(function () {
                    if ("image" === i.getSlideType(s)) {
                      var t = s.alt,
                        d = t ? 'alt="' + t + '"' : "";
                      if (
                        (r
                          .find(".lg-img-wrap")
                          .append(Gi(e, c, d, o, l, s.sources)),
                        o || a)
                      ) {
                        var u = r.find(".lg-object");
                        i.initPictureFill(u);
                      }
                    }
                    ("image" === i.getSlideType(s) ||
                      ("video" === i.getSlideType(s) && n)) &&
                      (i.onLgObjectLoad(r, e, v, T, !0, !1),
                      i.onSlideObjectLoad(
                        r,
                        !(!p || !p.html5 || n),
                        function () {
                          i.loadContentOnFirstSlideLoad(e, r, T);
                        },
                        function () {
                          i.loadContentOnFirstSlideLoad(e, r, T);
                        },
                      ));
                  }, this.settings.startAnimationDuration + 100)),
              r.addClass("lg-loaded"),
              (this.isFirstSlideWithZoomAnimation() &&
                ("video" !== this.getSlideType(s) || n)) ||
                this.onLgObjectLoad(r, e, v, T, m, !(!p || !p.html5 || n)),
              (this.zoomFromOrigin && this.currentImageSize) ||
                !r.hasClass("lg-complete_") ||
                this.lGalleryOn ||
                setTimeout(function () {
                  r.addClass("lg-complete");
                }, this.settings.backdropDuration),
              (this.lGalleryOn = !0),
              !0 === t &&
                (r.hasClass("lg-complete_")
                  ? this.preload(e)
                  : r
                      .find(".lg-object")
                      .first()
                      .on("load.lg error.lg", function () {
                        i.preload(e);
                      }));
          }),
          (e.prototype.loadContentOnFirstSlideLoad = function (e, t, i) {
            var s = this;
            setTimeout(function () {
              t.find(".lg-dummy-img").remove(),
                t.removeClass("lg-first-slide"),
                s.outer.removeClass("lg-first-slide-loading"),
                (s.isDummyImageRemoved = !0),
                s.preload(e);
            }, i + 300);
          }),
          (e.prototype.getItemsToBeInsertedToDom = function (e, t, i) {
            var s = this;
            void 0 === i && (i = 0);
            var r = [],
              n = Math.max(i, 3);
            n = Math.min(n, this.galleryItems.length);
            var o = "lg-item-" + this.lgId + "-" + t;
            if (this.galleryItems.length <= 3)
              return (
                this.galleryItems.forEach(function (e, t) {
                  r.push("lg-item-" + s.lgId + "-" + t);
                }),
                r
              );
            if (e < (this.galleryItems.length - 1) / 2) {
              for (var l = e; l > e - n / 2 && l >= 0; l--)
                r.push("lg-item-" + this.lgId + "-" + l);
              var a = r.length;
              for (l = 0; l < n - a; l++)
                r.push("lg-item-" + this.lgId + "-" + (e + l + 1));
            } else {
              for (
                l = e;
                l <= this.galleryItems.length - 1 && l < e + n / 2;
                l++
              )
                r.push("lg-item-" + this.lgId + "-" + l);
              for (a = r.length, l = 0; l < n - a; l++)
                r.push("lg-item-" + this.lgId + "-" + (e - l - 1));
            }
            return (
              this.settings.loop &&
                (e === this.galleryItems.length - 1
                  ? r.push("lg-item-" + this.lgId + "-0")
                  : 0 === e &&
                    r.push(
                      "lg-item-" +
                        this.lgId +
                        "-" +
                        (this.galleryItems.length - 1),
                    )),
              -1 === r.indexOf(o) && r.push("lg-item-" + this.lgId + "-" + t),
              r
            );
          }),
          (e.prototype.organizeSlideItems = function (e, t) {
            var i = this,
              s = this.getItemsToBeInsertedToDom(
                e,
                t,
                this.settings.numberOfSlideItemsInDom,
              );
            return (
              s.forEach(function (e) {
                -1 === i.currentItemsInDom.indexOf(e) &&
                  i.$inner.append('<div id="' + e + '" class="lg-item"></div>');
              }),
              this.currentItemsInDom.forEach(function (e) {
                -1 === s.indexOf(e) && Pi("#" + e).remove();
              }),
              s
            );
          }),
          (e.prototype.getPreviousSlideIndex = function () {
            var e = 0;
            try {
              var t = this.outer.find(".lg-current").first().attr("id");
              e = parseInt(t.split("-")[3]) || 0;
            } catch (t) {
              e = 0;
            }
            return e;
          }),
          (e.prototype.setDownloadValue = function (e) {
            if (this.settings.download) {
              var t = this.galleryItems[e];
              if (!1 === t.downloadUrl || "false" === t.downloadUrl)
                this.outer.addClass("lg-hide-download");
              else {
                var i = this.getElementById("lg-download");
                this.outer.removeClass("lg-hide-download"),
                  i.attr("href", t.downloadUrl || t.src),
                  t.download && i.attr("download", t.download);
              }
            }
          }),
          (e.prototype.makeSlideAnimation = function (e, t, i) {
            var s = this;
            this.lGalleryOn && i.addClass("lg-slide-progress"),
              setTimeout(
                function () {
                  s.outer.addClass("lg-no-trans"),
                    s.outer
                      .find(".lg-item")
                      .removeClass("lg-prev-slide lg-next-slide"),
                    "prev" === e
                      ? (t.addClass("lg-prev-slide"),
                        i.addClass("lg-next-slide"))
                      : (t.addClass("lg-next-slide"),
                        i.addClass("lg-prev-slide")),
                    setTimeout(function () {
                      s.outer.find(".lg-item").removeClass("lg-current"),
                        t.addClass("lg-current"),
                        s.outer.removeClass("lg-no-trans");
                    }, 50);
                },
                this.lGalleryOn ? this.settings.slideDelay : 0,
              );
          }),
          (e.prototype.slide = function (e, t, i, s) {
            var r = this,
              n = this.getPreviousSlideIndex();
            if (
              ((this.currentItemsInDom = this.organizeSlideItems(e, n)),
              !this.lGalleryOn || n !== e)
            ) {
              var o = this.galleryItems.length;
              if (!this.lgBusy) {
                this.settings.counter && this.updateCurrentCounter(e);
                var l = this.getSlideItem(e),
                  a = this.getSlideItem(n),
                  c = this.galleryItems[e],
                  d = c.__slideVideoInfo;
                if (
                  (this.outer.attr("data-lg-slide-type", this.getSlideType(c)),
                  this.setDownloadValue(e),
                  d)
                ) {
                  var u = this.mediaContainerPosition,
                    h = u.top,
                    p = u.bottom,
                    f = Ni(
                      this.items[e],
                      this.outer,
                      h + p,
                      d && this.settings.videoMaxSize,
                    );
                  this.resizeVideoSlide(e, f);
                }
                if (
                  (this.LGel.trigger(Si, {
                    prevIndex: n,
                    index: e,
                    fromTouch: !!t,
                    fromThumb: !!i,
                  }),
                  (this.lgBusy = !0),
                  clearTimeout(this.hideBarTimeout),
                  this.arrowDisable(e),
                  s || (e < n ? (s = "prev") : e > n && (s = "next")),
                  t)
                ) {
                  this.outer
                    .find(".lg-item")
                    .removeClass("lg-prev-slide lg-current lg-next-slide");
                  var g = void 0,
                    m = void 0;
                  o > 2
                    ? ((g = e - 1),
                      (m = e + 1),
                      ((0 === e && n === o - 1) || (e === o - 1 && 0 === n)) &&
                        ((m = 0), (g = o - 1)))
                    : ((g = 0), (m = 1)),
                    "prev" === s
                      ? this.getSlideItem(m).addClass("lg-next-slide")
                      : this.getSlideItem(g).addClass("lg-prev-slide"),
                    l.addClass("lg-current");
                } else this.makeSlideAnimation(s, l, a);
                this.lGalleryOn
                  ? setTimeout(
                      function () {
                        r.loadContent(e, !0),
                          ".lg-item" !== r.settings.appendSubHtmlTo &&
                            r.addHtml(e);
                      },
                      this.settings.speed +
                        50 +
                        (t ? 0 : this.settings.slideDelay),
                    )
                  : this.loadContent(e, !0),
                  setTimeout(
                    function () {
                      (r.lgBusy = !1),
                        a.removeClass("lg-slide-progress"),
                        r.LGel.trigger(xi, {
                          prevIndex: n,
                          index: e,
                          fromTouch: t,
                          fromThumb: i,
                        });
                    },
                    (this.lGalleryOn ? this.settings.speed + 100 : 100) +
                      (t ? 0 : this.settings.slideDelay),
                  );
              }
              this.index = e;
            }
          }),
          (e.prototype.updateCurrentCounter = function (e) {
            this.getElementById("lg-counter-current").html(e + 1 + "");
          }),
          (e.prototype.updateCounterTotal = function () {
            this.getElementById("lg-counter-all").html(
              this.galleryItems.length + "",
            );
          }),
          (e.prototype.getSlideType = function (e) {
            return e.__slideVideoInfo ? "video" : e.iframe ? "iframe" : "image";
          }),
          (e.prototype.touchMove = function (e, t, i) {
            var s = t.pageX - e.pageX,
              r = t.pageY - e.pageY,
              n = !1;
            if (
              (this.swipeDirection
                ? (n = !0)
                : Math.abs(s) > 15
                ? ((this.swipeDirection = "horizontal"), (n = !0))
                : Math.abs(r) > 15 &&
                  ((this.swipeDirection = "vertical"), (n = !0)),
              n)
            ) {
              var o = this.getSlideItem(this.index);
              if ("horizontal" === this.swipeDirection) {
                null == i || i.preventDefault(),
                  this.outer.addClass("lg-dragging"),
                  this.setTranslate(o, s, 0);
                var l = o.get().offsetWidth,
                  a = (15 * l) / 100 - Math.abs((10 * s) / 100);
                this.setTranslate(
                  this.outer.find(".lg-prev-slide").first(),
                  -l + s - a,
                  0,
                ),
                  this.setTranslate(
                    this.outer.find(".lg-next-slide").first(),
                    l + s + a,
                    0,
                  );
              } else if (
                "vertical" === this.swipeDirection &&
                this.settings.swipeToClose
              ) {
                null == i || i.preventDefault(),
                  this.$container.addClass("lg-dragging-vertical");
                var c = 1 - Math.abs(r) / window.innerHeight;
                this.$backdrop.css("opacity", c);
                var d = 1 - Math.abs(r) / (2 * window.innerWidth);
                this.setTranslate(o, 0, r, d, d),
                  Math.abs(r) > 100 &&
                    this.outer
                      .addClass("lg-hide-items")
                      .removeClass("lg-components-open");
              }
            }
          }),
          (e.prototype.touchEnd = function (e, t, i) {
            var s,
              r = this;
            "lg-slide" !== this.settings.mode &&
              this.outer.addClass("lg-slide"),
              setTimeout(function () {
                r.$container.removeClass("lg-dragging-vertical"),
                  r.outer
                    .removeClass("lg-dragging lg-hide-items")
                    .addClass("lg-components-open");
                var n = !0;
                if ("horizontal" === r.swipeDirection) {
                  s = e.pageX - t.pageX;
                  var o = Math.abs(e.pageX - t.pageX);
                  s < 0 && o > r.settings.swipeThreshold
                    ? (r.goToNextSlide(!0), (n = !1))
                    : s > 0 &&
                      o > r.settings.swipeThreshold &&
                      (r.goToPrevSlide(!0), (n = !1));
                } else if ("vertical" === r.swipeDirection) {
                  if (
                    ((s = Math.abs(e.pageY - t.pageY)),
                    r.settings.closable && r.settings.swipeToClose && s > 100)
                  )
                    return void r.closeGallery();
                  r.$backdrop.css("opacity", 1);
                }
                if (
                  (r.outer.find(".lg-item").removeAttr("style"),
                  n && Math.abs(e.pageX - t.pageX) < 5)
                ) {
                  var l = Pi(i.target);
                  r.isPosterElement(l) && r.LGel.trigger(Ei);
                }
                r.swipeDirection = void 0;
              }),
              setTimeout(function () {
                r.outer.hasClass("lg-dragging") ||
                  "lg-slide" === r.settings.mode ||
                  r.outer.removeClass("lg-slide");
              }, this.settings.speed + 100);
          }),
          (e.prototype.enableSwipe = function () {
            var e = this,
              t = {},
              i = {},
              s = !1,
              r = !1;
            this.settings.enableSwipe &&
              (this.$inner.on("touchstart.lg", function (i) {
                e.dragOrSwipeEnabled = !0;
                var s = e.getSlideItem(e.index);
                (!Pi(i.target).hasClass("lg-item") &&
                  !s.get().contains(i.target)) ||
                  e.outer.hasClass("lg-zoomed") ||
                  e.lgBusy ||
                  1 !== i.touches.length ||
                  ((r = !0),
                  (e.touchAction = "swipe"),
                  e.manageSwipeClass(),
                  (t = {
                    pageX: i.touches[0].pageX,
                    pageY: i.touches[0].pageY,
                  }));
              }),
              this.$inner.on("touchmove.lg", function (n) {
                r &&
                  "swipe" === e.touchAction &&
                  1 === n.touches.length &&
                  ((i = {
                    pageX: n.touches[0].pageX,
                    pageY: n.touches[0].pageY,
                  }),
                  e.touchMove(t, i, n),
                  (s = !0));
              }),
              this.$inner.on("touchend.lg", function (n) {
                if ("swipe" === e.touchAction) {
                  if (s) (s = !1), e.touchEnd(i, t, n);
                  else if (r) {
                    var o = Pi(n.target);
                    e.isPosterElement(o) && e.LGel.trigger(Ei);
                  }
                  (e.touchAction = void 0), (r = !1);
                }
              }));
          }),
          (e.prototype.enableDrag = function () {
            var e = this,
              t = {},
              i = {},
              s = !1,
              r = !1;
            this.settings.enableDrag &&
              (this.outer.on("mousedown.lg", function (i) {
                e.dragOrSwipeEnabled = !0;
                var r = e.getSlideItem(e.index);
                (Pi(i.target).hasClass("lg-item") ||
                  r.get().contains(i.target)) &&
                  (e.outer.hasClass("lg-zoomed") ||
                    e.lgBusy ||
                    (i.preventDefault(),
                    e.lgBusy ||
                      (e.manageSwipeClass(),
                      (t = { pageX: i.pageX, pageY: i.pageY }),
                      (s = !0),
                      (e.outer.get().scrollLeft += 1),
                      (e.outer.get().scrollLeft -= 1),
                      e.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                      e.LGel.trigger(Ci))));
              }),
              Pi(window).on("mousemove.lg.global" + this.lgId, function (n) {
                s &&
                  e.lgOpened &&
                  ((r = !0),
                  (i = { pageX: n.pageX, pageY: n.pageY }),
                  e.touchMove(t, i),
                  e.LGel.trigger(Ti));
              }),
              Pi(window).on("mouseup.lg.global" + this.lgId, function (n) {
                if (e.lgOpened) {
                  var o = Pi(n.target);
                  r
                    ? ((r = !1), e.touchEnd(i, t, n), e.LGel.trigger(Ai))
                    : e.isPosterElement(o) && e.LGel.trigger(Ei),
                    s &&
                      ((s = !1),
                      e.outer.removeClass("lg-grabbing").addClass("lg-grab"));
                }
              }));
          }),
          (e.prototype.triggerPosterClick = function () {
            var e = this;
            this.$inner.on("click.lg", function (t) {
              !e.dragOrSwipeEnabled &&
                e.isPosterElement(Pi(t.target)) &&
                e.LGel.trigger(Ei);
            });
          }),
          (e.prototype.manageSwipeClass = function () {
            var e = this.index + 1,
              t = this.index - 1;
            this.settings.loop &&
              this.galleryItems.length > 2 &&
              (0 === this.index
                ? (t = this.galleryItems.length - 1)
                : this.index === this.galleryItems.length - 1 && (e = 0)),
              this.outer
                .find(".lg-item")
                .removeClass("lg-next-slide lg-prev-slide"),
              t > -1 && this.getSlideItem(t).addClass("lg-prev-slide"),
              this.getSlideItem(e).addClass("lg-next-slide");
          }),
          (e.prototype.goToNextSlide = function (e) {
            var t = this,
              i = this.settings.loop;
            e && this.galleryItems.length < 3 && (i = !1),
              this.lgBusy ||
                (this.index + 1 < this.galleryItems.length
                  ? (this.index++,
                    this.LGel.trigger(Li, { index: this.index }),
                    this.slide(this.index, !!e, !1, "next"))
                  : i
                  ? ((this.index = 0),
                    this.LGel.trigger(Li, { index: this.index }),
                    this.slide(this.index, !!e, !1, "next"))
                  : this.settings.slideEndAnimation &&
                    !e &&
                    (this.outer.addClass("lg-right-end"),
                    setTimeout(function () {
                      t.outer.removeClass("lg-right-end");
                    }, 400)));
          }),
          (e.prototype.goToPrevSlide = function (e) {
            var t = this,
              i = this.settings.loop;
            e && this.galleryItems.length < 3 && (i = !1),
              this.lgBusy ||
                (this.index > 0
                  ? (this.index--,
                    this.LGel.trigger(Oi, { index: this.index, fromTouch: e }),
                    this.slide(this.index, !!e, !1, "prev"))
                  : i
                  ? ((this.index = this.galleryItems.length - 1),
                    this.LGel.trigger(Oi, { index: this.index, fromTouch: e }),
                    this.slide(this.index, !!e, !1, "prev"))
                  : this.settings.slideEndAnimation &&
                    !e &&
                    (this.outer.addClass("lg-left-end"),
                    setTimeout(function () {
                      t.outer.removeClass("lg-left-end");
                    }, 400)));
          }),
          (e.prototype.keyPress = function () {
            var e = this;
            Pi(window).on("keydown.lg.global" + this.lgId, function (t) {
              e.lgOpened &&
                !0 === e.settings.escKey &&
                27 === t.keyCode &&
                (t.preventDefault(),
                e.settings.allowMediaOverlap &&
                e.outer.hasClass("lg-can-toggle") &&
                e.outer.hasClass("lg-components-open")
                  ? e.outer.removeClass("lg-components-open")
                  : e.closeGallery()),
                e.lgOpened &&
                  e.galleryItems.length > 1 &&
                  (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()),
                  39 === t.keyCode && (t.preventDefault(), e.goToNextSlide()));
            });
          }),
          (e.prototype.arrow = function () {
            var e = this;
            this.getElementById("lg-prev").on("click.lg", function () {
              e.goToPrevSlide();
            }),
              this.getElementById("lg-next").on("click.lg", function () {
                e.goToNextSlide();
              });
          }),
          (e.prototype.arrowDisable = function (e) {
            if (!this.settings.loop && this.settings.hideControlOnEnd) {
              var t = this.getElementById("lg-prev"),
                i = this.getElementById("lg-next");
              e + 1 === this.galleryItems.length
                ? i.attr("disabled", "disabled").addClass("disabled")
                : i.removeAttr("disabled").removeClass("disabled"),
                0 === e
                  ? t.attr("disabled", "disabled").addClass("disabled")
                  : t.removeAttr("disabled").removeClass("disabled");
            }
          }),
          (e.prototype.setTranslate = function (e, t, i, s, r) {
            void 0 === s && (s = 1),
              void 0 === r && (r = 1),
              e.css(
                "transform",
                "translate3d(" +
                  t +
                  "px, " +
                  i +
                  "px, 0px) scale3d(" +
                  s +
                  ", " +
                  r +
                  ", 1)",
              );
          }),
          (e.prototype.mousewheel = function () {
            var e = this,
              t = 0;
            this.outer.on("wheel.lg", function (i) {
              if (i.deltaY && !(e.galleryItems.length < 2)) {
                i.preventDefault();
                var s = new Date().getTime();
                s - t < 1e3 ||
                  ((t = s),
                  i.deltaY > 0
                    ? e.goToNextSlide()
                    : i.deltaY < 0 && e.goToPrevSlide());
              }
            });
          }),
          (e.prototype.isSlideElement = function (e) {
            return (
              e.hasClass("lg-outer") ||
              e.hasClass("lg-item") ||
              e.hasClass("lg-img-wrap")
            );
          }),
          (e.prototype.isPosterElement = function (e) {
            var t = this.getSlideItem(this.index)
              .find(".lg-video-play-button")
              .get();
            return (
              e.hasClass("lg-video-poster") ||
              e.hasClass("lg-video-play-button") ||
              (t && t.contains(e.get()))
            );
          }),
          (e.prototype.toggleMaximize = function () {
            var e = this;
            this.getElementById("lg-maximize").on("click.lg", function () {
              e.$container.toggleClass("lg-inline"), e.refreshOnResize();
            });
          }),
          (e.prototype.invalidateItems = function () {
            for (var e = 0; e < this.items.length; e++) {
              var t = Pi(this.items[e]);
              t.off("click.lgcustom-item-" + t.attr("data-lg-id"));
            }
          }),
          (e.prototype.trapFocus = function () {
            var e = this;
            this.$container.get().focus({ preventScroll: !0 }),
              Pi(window).on("keydown.lg.global" + this.lgId, function (t) {
                if (e.lgOpened && ("Tab" === t.key || 9 === t.keyCode)) {
                  var i = Ri(e.$container.get()),
                    s = i[0],
                    r = i[i.length - 1];
                  t.shiftKey
                    ? document.activeElement === s &&
                      (r.focus(), t.preventDefault())
                    : document.activeElement === r &&
                      (s.focus(), t.preventDefault());
                }
              });
          }),
          (e.prototype.manageCloseGallery = function () {
            var e = this;
            if (this.settings.closable) {
              var t = !1;
              this.getElementById("lg-close").on("click.lg", function () {
                e.closeGallery();
              }),
                this.settings.closeOnTap &&
                  (this.outer.on("mousedown.lg", function (i) {
                    var s = Pi(i.target);
                    t = !!e.isSlideElement(s);
                  }),
                  this.outer.on("mousemove.lg", function () {
                    t = !1;
                  }),
                  this.outer.on("mouseup.lg", function (i) {
                    var s = Pi(i.target);
                    e.isSlideElement(s) &&
                      t &&
                      (e.outer.hasClass("lg-dragging") || e.closeGallery());
                  }));
            }
          }),
          (e.prototype.closeGallery = function (e) {
            var t = this;
            if (!this.lgOpened || (!this.settings.closable && !e)) return 0;
            this.LGel.trigger(Ii),
              this.settings.resetScrollPosition &&
                !this.settings.hideScrollbar &&
                Pi(window).scrollTop(this.prevScrollTop);
            var i,
              s = this.items[this.index];
            if (this.zoomFromOrigin && s) {
              var r = this.mediaContainerPosition,
                n = r.top,
                o = r.bottom,
                l = this.galleryItems[this.index],
                a = l.__slideVideoInfo,
                c = l.poster,
                d = Ni(
                  s,
                  this.outer,
                  n + o,
                  a && c && this.settings.videoMaxSize,
                );
              i = Vi(s, this.outer, n, o, d);
            }
            this.zoomFromOrigin && i
              ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
                this.getSlideItem(this.index)
                  .addClass("lg-start-end-progress")
                  .css(
                    "transition-duration",
                    this.settings.startAnimationDuration + "ms",
                  )
                  .css("transform", i))
              : (this.outer.addClass("lg-hide-items"),
                this.outer.removeClass("lg-zoom-from-image")),
              this.destroyModules(),
              (this.lGalleryOn = !1),
              (this.isDummyImageRemoved = !1),
              (this.zoomFromOrigin = this.settings.zoomFromOrigin),
              clearTimeout(this.hideBarTimeout),
              (this.hideBarTimeout = !1),
              Pi("html").removeClass("lg-on"),
              this.outer.removeClass("lg-visible lg-components-open"),
              this.$backdrop.removeClass("in").css("opacity", 0);
            var u =
              this.zoomFromOrigin && i
                ? Math.max(
                    this.settings.startAnimationDuration,
                    this.settings.backdropDuration,
                  )
                : this.settings.backdropDuration;
            return (
              this.$container.removeClass("lg-show-in"),
              setTimeout(function () {
                t.zoomFromOrigin &&
                  i &&
                  t.outer.removeClass("lg-zoom-from-image"),
                  t.$container.removeClass("lg-show"),
                  t.resetScrollBar(),
                  t.$backdrop
                    .removeAttr("style")
                    .css(
                      "transition-duration",
                      t.settings.backdropDuration + "ms",
                    ),
                  t.outer.removeClass("lg-closing " + t.settings.startClass),
                  t.getSlideItem(t.index).removeClass("lg-start-end-progress"),
                  t.$inner.empty(),
                  t.lgOpened && t.LGel.trigger(Mi, { instance: t }),
                  t.$container.get() && t.$container.get().blur(),
                  (t.lgOpened = !1);
              }, u + 100),
              u + 100
            );
          }),
          (e.prototype.initModules = function () {
            this.plugins.forEach(function (e) {
              try {
                e.init();
              } catch (e) {
                console.warn(
                  "lightGallery:- make sure lightGallery module is properly initiated",
                );
              }
            });
          }),
          (e.prototype.destroyModules = function (e) {
            this.plugins.forEach(function (t) {
              try {
                e ? t.destroy() : t.closeGallery && t.closeGallery();
              } catch (e) {
                console.warn(
                  "lightGallery:- make sure lightGallery module is properly destroyed",
                );
              }
            });
          }),
          (e.prototype.refresh = function (e) {
            this.settings.dynamic || this.invalidateItems(),
              (this.galleryItems = e || this.getItems()),
              this.updateControls(),
              this.openGalleryOnItemClick(),
              this.LGel.trigger(mi);
          }),
          (e.prototype.updateControls = function () {
            this.addSlideVideoInfo(this.galleryItems),
              this.updateCounterTotal(),
              this.manageSingleSlideClassName();
          }),
          (e.prototype.destroyGallery = function () {
            this.destroyModules(!0),
              this.settings.dynamic || this.invalidateItems(),
              Pi(window).off(".lg.global" + this.lgId),
              this.LGel.off(".lg"),
              this.$container.remove();
          }),
          (e.prototype.destroy = function () {
            var e = this.closeGallery(!0);
            return (
              e
                ? setTimeout(this.destroyGallery.bind(this), e)
                : this.destroyGallery(),
              e
            );
          }),
          e
        );
      })();
    const Xi = function (e, t) {
      return new Yi(e, t);
    };
    var Ki = i(913);
    const Zi = document.querySelector("[data-gallery-1]");
    Zi &&
      Xi(Zi, {
        plugins: [Ki],
        selector: ".header-popup__gallery-img-ibg",
        licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
        speed: 500,
      });
    const Qi = document.querySelector("[data-gallery-2]");
    Qi &&
      Xi(Qi, {
        plugins: [Ki],
        licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
        speed: 500,
      });
    let Ji = document.querySelectorAll(".choose-size");
    Ji &&
      Ji.forEach((e) => {
        e.addEventListener("click", function (t) {
          t.target.classList.contains("choose-size") &&
            !t.target.classList.contains("no-size") &&
            e.classList.toggle("size-selected");
        });
      });
    let es,
      ts = !0,
      is = document.querySelector(".catalog__btn-open-filter"),
      ss = document.querySelector(".catalog__btn-close-filter");
    document.addEventListener("click", function (e) {
      (es = e.target),
        is &&
          (ts && es.closest(".catalog__btn-open-filter")
            ? (document.documentElement.classList.add("open-filter"),
              document.documentElement.classList.add("lock"),
              (ts = !1))
            : (es.classList.contains("catalog__wrapper-aside-filter") ||
                (ss && es.closest(".catalog__btn-close-filter"))) &&
              (document.documentElement.classList.remove("open-filter"),
              document.documentElement.classList.remove("lock"),
              (ts = !0)));
    });
    let rs = document.querySelectorAll(".quiz__items"),
      ns = document.querySelectorAll(".footer-quiz__btn"),
      os = document.querySelectorAll(".footer-quiz__count-page"),
      ls = 0;
    os[ls].innerHTML = "";
    const as = `<span>${ls + 1}</span><span>из</span><span>${rs.length}</span>`;
    os[ls].insertAdjacentHTML("beforeend", as),
      ns.forEach((e) => {
        e.addEventListener("click", function (e) {
          e.target.classList.contains("footer-quiz__btn") &&
            (function () {
              let e = rs[ls].querySelectorAll("input");
              if (e.length > 0)
                e.forEach((e) => {
                  e.checked &&
                    ((ls += 1),
                    rs[ls].hidden &&
                      ((rs[ls].hidden = !1), (rs[ls - 1].hidden = !0)));
                });
              else {
                let e = document.querySelector(".questions__selection-product");
                e && e.hidden && ((rs[ls].hidden = !0), (e.hidden = !1));
              }
              os[ls].innerHTML = "";
              const t = `<span>${ls + 1}</span><span>из</span><span>${
                rs.length
              }</span>`;
              os[ls].insertAdjacentHTML("beforeend", t);
            })();
        });
      }),
      document.addEventListener("formSent", function (e) {
        let t = document.querySelector(".send-letter");
        t && t.classList.add("sent-form");
      });
    let cs = document.querySelectorAll("[data-typing]");
    cs.forEach((e) => {
      !(function (e, t) {
        let i = e.innerHTML;
        e.innerHTML = "";
        let s = 0,
          r = setInterval(function () {
            s < i.length ? (e.append(i.charAt(s)), s++) : clearInterval(r);
          }, t);
      })(e, 70);
    }),
      (window.FLS = !1),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            n && (o(), document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        const e = document.querySelectorAll("[data-spollers]");
        if (e.length > 0) {
          const t = Array.from(e).filter(function (e, t, i) {
            return !e.dataset.spollers.split(",")[0];
          });
          t.length && n(t);
          let i = u(e, "spollers");
          function n(e, t = !1) {
            e.forEach((e) => {
              (e = t ? e.item : e),
                t.matches || !t
                  ? (e.classList.add("_spoller-init"),
                    o(e),
                    e.addEventListener("click", l))
                  : (e.classList.remove("_spoller-init"),
                    o(e, !1),
                    e.removeEventListener("click", l));
            });
          }
          function o(e, t = !0) {
            const i = e.querySelectorAll("[data-spoller]");
            i.length > 0 &&
              i.forEach((e) => {
                t
                  ? (e.removeAttribute("tabindex"),
                    e.classList.contains("_spoller-active") ||
                      (e.nextElementSibling.hidden = !0))
                  : (e.setAttribute("tabindex", "-1"),
                    (e.nextElementSibling.hidden = !1));
              });
          }
          function l(e) {
            const t = e.target;
            if (t.closest("[data-spoller]")) {
              const i = t.closest("[data-spoller]"),
                n = i.closest("[data-spollers]"),
                o = !!n.hasAttribute("data-one-spoller");
              n.querySelectorAll("._slide").length ||
                (o && !i.classList.contains("_spoller-active") && a(n),
                i.classList.toggle("_spoller-active"),
                ((e, t = 500) => {
                  e.hidden ? r(e, t) : s(e, t);
                })(i.nextElementSibling, 500)),
                e.preventDefault();
            }
          }
          function a(e) {
            const t = e.querySelector("[data-spoller]._spoller-active");
            t &&
              (t.classList.remove("_spoller-active"),
              s(t.nextElementSibling, 500));
          }
          i &&
            i.length &&
            i.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                n(e.itemsArray, e.matchMedia);
              }),
                n(e.itemsArray, e.matchMedia);
            });
        }
      })(),
      new t({}),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]",
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              f.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && f.validateInput(t));
          });
      })(),
      (function (e) {
        const t = document.forms;
        if (t.length)
          for (const e of t)
            e.addEventListener("submit", function (e) {
              i(e.target, e);
            }),
              e.addEventListener("reset", function (e) {
                const t = e.target;
                f.formClean(t);
              });
        async function i(t, i) {
          if (0 === (e ? f.getErrors(t) : 0)) {
            if (t.hasAttribute("data-ajax")) {
              i.preventDefault();
              const e = t.getAttribute("action")
                  ? t.getAttribute("action").trim()
                  : "#",
                r = t.getAttribute("method")
                  ? t.getAttribute("method").trim()
                  : "GET",
                n = new FormData(t);
              t.classList.add("_sending");
              const o = await fetch(e, { method: r, body: n });
              if (o.ok) {
                await o.json();
                t.classList.remove("_sending"), s(t);
              } else alert("Ошибка"), t.classList.remove("_sending");
            } else t.hasAttribute("data-dev") && (i.preventDefault(), s(t));
          } else {
            i.preventDefault();
            const e = t.querySelector("._form-error");
            e && t.hasAttribute("data-goto-error") && h(e, !0, 1e3);
          }
        }
        function s(e) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: e } }),
          ),
            f.formClean(e),
            c(`[Формы]: ${"Форма отправлена!"}`);
        }
      })(!0),
      (function () {
        const e = document.querySelectorAll(".rating");
        e.length > 0 &&
          (function () {
            let t, i;
            for (let t = 0; t < e.length; t++) {
              s(e[t]);
            }
            function s(e) {
              r(e), n(), e.classList.contains("rating_set") && o(e);
            }
            function r(e) {
              (t = e.querySelector(".rating__active")),
                (i = e.querySelector(".rating__value"));
            }
            function n(e = i.innerHTML) {
              const s = e / 0.05;
              t.style.width = `${s}%`;
            }
            function o(e) {
              const t = e.querySelectorAll(".rating__item");
              for (let s = 0; s < t.length; s++) {
                const o = t[s];
                o.addEventListener("mouseenter", function (t) {
                  r(e), n(o.value);
                }),
                  o.addEventListener("mouseleave", function (e) {
                    n();
                  }),
                  o.addEventListener("click", function (t) {
                    r(e),
                      e.dataset.ajax
                        ? l(o.value, e)
                        : ((i.innerHTML = s + 1), n());
                  });
              }
            }
            async function l(e, t) {
              if (!t.classList.contains("rating_sending")) {
                t.classList.add("rating_sending");
                let e = await fetch("rating.json", { method: "GET" });
                if (e.ok) {
                  const s = (await e.json()).newRating;
                  (i.innerHTML = s), n(), t.classList.remove("rating_sending");
                } else alert("Ошибка"), t.classList.remove("rating_sending");
              }
            }
          })();
      })(),
      new ci({}),
      (function () {
        function e(e) {
          if ("click" === e.type) {
            const t = e.target;
            if (t.closest("[data-goto]")) {
              const i = t.closest("[data-goto]"),
                s = i.dataset.goto ? i.dataset.goto : "",
                r = !!i.hasAttribute("data-goto-header"),
                n = i.dataset.gotoSpeed ? i.dataset.gotoSpeed : "500";
              h(s, r, n), e.preventDefault();
            }
          } else if ("watcherCallback" === e.type && e.detail) {
            const t = e.detail.entry,
              i = t.target;
            if ("navigator" === i.dataset.watch) {
              const e = i.id;
              console.log(e);
              document.querySelector("[data-goto]._navigator-active");
              const s = document.querySelector(`[data-goto="#${e}"]`);
              t.isIntersecting
                ? s && s.classList.add("_navigator-active")
                : s && s.classList.remove("_navigator-active");
            }
          }
        }
        document.addEventListener("click", e),
          document.addEventListener("watcherCallback", e);
      })(),
      (function () {
        di = !0;
        const e = document.querySelector("header.header"),
          t = e.hasAttribute("data-scroll-show"),
          i = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
          s = e.dataset.scroll ? e.dataset.scroll : 1;
        let r,
          n = 0;
        document.addEventListener("windowScroll", function (o) {
          const l = window.scrollY;
          clearTimeout(r),
            l >= s
              ? (!e.classList.contains("_header-scroll") &&
                  e.classList.add("_header-scroll"),
                t &&
                  (l > n
                    ? e.classList.contains("_header-show") &&
                      e.classList.remove("_header-show")
                    : !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show"),
                  (r = setTimeout(() => {
                    !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show");
                  }, i))))
              : (e.classList.contains("_header-scroll") &&
                  e.classList.remove("_header-scroll"),
                t &&
                  e.classList.contains("_header-show") &&
                  e.classList.remove("_header-show")),
            (n = l <= 0 ? 0 : l);
        });
      })();
  })();
})();
