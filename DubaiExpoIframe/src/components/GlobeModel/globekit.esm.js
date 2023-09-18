/* eslint-disable */
function t(e) {
  return (t =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function(t) {
          return typeof t;
        }
      : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(e);
}
function e(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function n(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(t, r.key, r);
  }
}
function r(t, e, r) {
  return e && n(t.prototype, e), r && n(t, r), t;
}
function i(t, e, n) {
  return (
    e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t
  );
}
function o(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function a(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? o(Object(n), !0).forEach(function(e) {
          i(t, e, n[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : o(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
  }
  return t;
}
function s(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })),
    e && l(t, e);
}
function u(t) {
  return (u = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
}
function l(t, e) {
  return (l =
    Object.setPrototypeOf ||
    function(t, e) {
      return (t.__proto__ = e), t;
    })(t, e);
}
function c(t) {
  if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function f(t, e) {
  return !e || ("object" != typeof e && "function" != typeof e) ? c(t) : e;
}
function m(t) {
  var e = (function() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
    } catch (t) {
      return !1;
    }
  })();
  return function() {
    var n,
      r = u(t);
    if (e) {
      var i = u(this).constructor;
      n = Reflect.construct(r, arguments, i);
    } else n = r.apply(this, arguments);
    return f(this, n);
  };
}
function h(t, e, n) {
  return (h =
    "undefined" != typeof Reflect && Reflect.get
      ? Reflect.get
      : function(t, e, n) {
          var r = (function(t, e) {
            for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)); );
            return t;
          })(t, e);
          if (r) {
            var i = Object.getOwnPropertyDescriptor(r, e);
            return i.get ? i.get.call(n) : i.value;
          }
        })(t, e, n || t);
}
function d(t, e) {
  return (
    (function(t) {
      if (Array.isArray(t)) return t;
    })(t) ||
    (function(t, e) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
      var n = [],
        r = !0,
        i = !1,
        o = void 0;
      try {
        for (
          var a, s = t[Symbol.iterator]();
          !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e);
          r = !0
        );
      } catch (t) {
        (i = !0), (o = t);
      } finally {
        try {
          r || null == s.return || s.return();
        } finally {
          if (i) throw o;
        }
      }
      return n;
    })(t, e) ||
    v(t, e) ||
    (function() {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
    /* @license twgl.js 4.15.2 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */
  );
}
function p(t) {
  return (
    (function(t) {
      if (Array.isArray(t)) return y(t);
    })(t) ||
    (function(t) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
    })(t) ||
    v(t) ||
    (function() {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function v(t, e) {
  if (t) {
    if ("string" == typeof t) return y(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    return (
      "Object" === n && t.constructor && (n = t.constructor.name),
      "Map" === n || "Set" === n
        ? Array.from(t)
        : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? y(t, e)
        : void 0
    );
  }
}
function y(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
var g = Float32Array;
function _(t, e, n) {
  var r = new g(3);
  return t && (r[0] = t), e && (r[1] = e), n && (r[2] = n), r;
}
function x(t, e, n) {
  return ((n = n || new g(3))[0] = t[0] + e[0]), (n[1] = t[1] + e[1]), (n[2] = t[2] + e[2]), n;
}
function b(t, e, n) {
  n = n || new g(3);
  var r = t[2] * e[0] - t[0] * e[2],
    i = t[0] * e[1] - t[1] * e[0];
  return (n[0] = t[1] * e[2] - t[2] * e[1]), (n[1] = r), (n[2] = i), n;
}
function w(t, e) {
  e = e || new g(3);
  var n = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
    r = Math.sqrt(n);
  return r > 1e-5 ? ((e[0] = t[0] / r), (e[1] = t[1] / r), (e[2] = t[2] / r)) : ((e[0] = 0), (e[1] = 0), (e[2] = 0)), e;
}
var A,
  C,
  T,
  I = Float32Array;
function P(t, e) {
  return (
    ((e = e || new I(16))[0] = t[0]),
    (e[1] = t[1]),
    (e[2] = t[2]),
    (e[3] = t[3]),
    (e[4] = t[4]),
    (e[5] = t[5]),
    (e[6] = t[6]),
    (e[7] = t[7]),
    (e[8] = t[8]),
    (e[9] = t[9]),
    (e[10] = t[10]),
    (e[11] = t[11]),
    (e[12] = t[12]),
    (e[13] = t[13]),
    (e[14] = t[14]),
    (e[15] = t[15]),
    e
  );
}
function S(t) {
  return (
    ((t = t || new I(16))[0] = 1),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 0),
    (t[5] = 1),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 0),
    (t[9] = 0),
    (t[10] = 1),
    (t[11] = 0),
    (t[12] = 0),
    (t[13] = 0),
    (t[14] = 0),
    (t[15] = 1),
    t
  );
}
function E(t, e) {
  e = e || new I(16);
  var n = t[0],
    r = t[1],
    i = t[2],
    o = t[3],
    a = t[4],
    s = t[5],
    u = t[6],
    l = t[7],
    c = t[8],
    f = t[9],
    m = t[10],
    h = t[11],
    d = t[12],
    p = t[13],
    v = t[14],
    y = t[15],
    g = m * y,
    _ = v * h,
    x = u * y,
    b = v * l,
    w = u * h,
    A = m * l,
    C = i * y,
    T = v * o,
    P = i * h,
    S = m * o,
    E = i * l,
    L = u * o,
    M = c * p,
    z = d * f,
    F = a * p,
    R = d * s,
    D = a * f,
    k = c * s,
    O = n * p,
    j = d * r,
    B = n * f,
    G = c * r,
    N = n * s,
    U = a * r,
    V = g * s + b * f + w * p - (_ * s + x * f + A * p),
    W = _ * r + C * f + S * p - (g * r + T * f + P * p),
    Y = x * r + T * s + E * p - (b * r + C * s + L * p),
    H = A * r + P * s + L * f - (w * r + S * s + E * f),
    X = 1 / (n * V + a * W + c * Y + d * H);
  return (
    (e[0] = X * V),
    (e[1] = X * W),
    (e[2] = X * Y),
    (e[3] = X * H),
    (e[4] = X * (_ * a + x * c + A * d - (g * a + b * c + w * d))),
    (e[5] = X * (g * n + T * c + P * d - (_ * n + C * c + S * d))),
    (e[6] = X * (b * n + C * a + L * d - (x * n + T * a + E * d))),
    (e[7] = X * (w * n + S * a + E * c - (A * n + P * a + L * c))),
    (e[8] = X * (M * l + R * h + D * y - (z * l + F * h + k * y))),
    (e[9] = X * (z * o + O * h + G * y - (M * o + j * h + B * y))),
    (e[10] = X * (F * o + j * l + N * y - (R * o + O * l + U * y))),
    (e[11] = X * (k * o + B * l + U * h - (D * o + G * l + N * h))),
    (e[12] = X * (F * m + k * v + z * u - (D * v + M * u + R * m))),
    (e[13] = X * (B * v + M * i + j * m - (O * m + G * v + z * i))),
    (e[14] = X * (O * u + U * v + R * i - (N * v + F * i + j * u))),
    (e[15] = X * (N * m + D * i + G * u - (B * u + U * m + k * i))),
    e
  );
}
function L(t, e, n) {
  n = n || _();
  var r = e[0],
    i = e[1],
    o = e[2],
    a = r * t[3] + i * t[7] + o * t[11] + t[15];
  return (
    (n[0] = (r * t[0] + i * t[4] + o * t[8] + t[12]) / a),
    (n[1] = (r * t[1] + i * t[5] + o * t[9] + t[13]) / a),
    (n[2] = (r * t[2] + i * t[6] + o * t[10] + t[14]) / a),
    n
  );
}
function M(t, e, n) {
  n = n || _();
  var r = e[0],
    i = e[1],
    o = e[2];
  return (
    (n[0] = r * t[0] + i * t[4] + o * t[8]),
    (n[1] = r * t[1] + i * t[5] + o * t[9]),
    (n[2] = r * t[2] + i * t[6] + o * t[10]),
    n
  );
}
var z = Object.freeze({
    __proto__: null,
    axisRotate: function(t, e, n, r) {
      r = r || new I(16);
      var i = e[0],
        o = e[1],
        a = e[2],
        s = Math.sqrt(i * i + o * o + a * a),
        u = (i /= s) * i,
        l = (o /= s) * o,
        c = (a /= s) * a,
        f = Math.cos(n),
        m = Math.sin(n),
        h = 1 - f,
        d = u + (1 - u) * f,
        p = i * o * h + a * m,
        v = i * a * h - o * m,
        y = i * o * h - a * m,
        g = l + (1 - l) * f,
        _ = o * a * h + i * m,
        x = i * a * h + o * m,
        b = o * a * h - i * m,
        w = c + (1 - c) * f,
        A = t[0],
        C = t[1],
        T = t[2],
        P = t[3],
        S = t[4],
        E = t[5],
        L = t[6],
        M = t[7],
        z = t[8],
        F = t[9],
        R = t[10],
        D = t[11];
      return (
        (r[0] = d * A + p * S + v * z),
        (r[1] = d * C + p * E + v * F),
        (r[2] = d * T + p * L + v * R),
        (r[3] = d * P + p * M + v * D),
        (r[4] = y * A + g * S + _ * z),
        (r[5] = y * C + g * E + _ * F),
        (r[6] = y * T + g * L + _ * R),
        (r[7] = y * P + g * M + _ * D),
        (r[8] = x * A + b * S + w * z),
        (r[9] = x * C + b * E + w * F),
        (r[10] = x * T + b * L + w * R),
        (r[11] = x * P + b * M + w * D),
        t !== r && ((r[12] = t[12]), (r[13] = t[13]), (r[14] = t[14]), (r[15] = t[15])),
        r
      );
    },
    axisRotation: function(t, e, n) {
      n = n || new I(16);
      var r = t[0],
        i = t[1],
        o = t[2],
        a = Math.sqrt(r * r + i * i + o * o),
        s = (r /= a) * r,
        u = (i /= a) * i,
        l = (o /= a) * o,
        c = Math.cos(e),
        f = Math.sin(e),
        m = 1 - c;
      return (
        (n[0] = s + (1 - s) * c),
        (n[1] = r * i * m + o * f),
        (n[2] = r * o * m - i * f),
        (n[3] = 0),
        (n[4] = r * i * m - o * f),
        (n[5] = u + (1 - u) * c),
        (n[6] = i * o * m + r * f),
        (n[7] = 0),
        (n[8] = r * o * m + i * f),
        (n[9] = i * o * m - r * f),
        (n[10] = l + (1 - l) * c),
        (n[11] = 0),
        (n[12] = 0),
        (n[13] = 0),
        (n[14] = 0),
        (n[15] = 1),
        n
      );
    },
    copy: P,
    frustum: function(t, e, n, r, i, o, a) {
      var s = e - t,
        u = r - n,
        l = i - o;
      return (
        ((a = a || new I(16))[0] = (2 * i) / s),
        (a[1] = 0),
        (a[2] = 0),
        (a[3] = 0),
        (a[4] = 0),
        (a[5] = (2 * i) / u),
        (a[6] = 0),
        (a[7] = 0),
        (a[8] = (t + e) / s),
        (a[9] = (r + n) / u),
        (a[10] = o / l),
        (a[11] = -1),
        (a[12] = 0),
        (a[13] = 0),
        (a[14] = (i * o) / l),
        (a[15] = 0),
        a
      );
    },
    getAxis: function(t, e, n) {
      var r = 4 * e;
      return ((n = n || _())[0] = t[r + 0]), (n[1] = t[r + 1]), (n[2] = t[r + 2]), n;
    },
    getTranslation: function(t, e) {
      return ((e = e || _())[0] = t[12]), (e[1] = t[13]), (e[2] = t[14]), e;
    },
    identity: S,
    inverse: E,
    lookAt: function(t, e, n, r) {
      return (
        (r = r || new I(16)),
        (A = A || _()),
        (C = C || _()),
        w(
          (function(t, e, n) {
            return ((n = n || new g(3))[0] = t[0] - e[0]), (n[1] = t[1] - e[1]), (n[2] = t[2] - e[2]), n;
          })(t, e, (T = T || _())),
          T
        ),
        w(b(n, T, A), A),
        w(b(T, A, C), C),
        (r[0] = A[0]),
        (r[1] = A[1]),
        (r[2] = A[2]),
        (r[3] = 0),
        (r[4] = C[0]),
        (r[5] = C[1]),
        (r[6] = C[2]),
        (r[7] = 0),
        (r[8] = T[0]),
        (r[9] = T[1]),
        (r[10] = T[2]),
        (r[11] = 0),
        (r[12] = t[0]),
        (r[13] = t[1]),
        (r[14] = t[2]),
        (r[15] = 1),
        r
      );
    },
    multiply: function(t, e, n) {
      n = n || new I(16);
      var r = t[0],
        i = t[1],
        o = t[2],
        a = t[3],
        s = t[4],
        u = t[5],
        l = t[6],
        c = t[7],
        f = t[8],
        m = t[9],
        h = t[10],
        d = t[11],
        p = t[12],
        v = t[13],
        y = t[14],
        g = t[15],
        _ = e[0],
        x = e[1],
        b = e[2],
        w = e[3],
        A = e[4],
        C = e[5],
        T = e[6],
        P = e[7],
        S = e[8],
        E = e[9],
        L = e[10],
        M = e[11],
        z = e[12],
        F = e[13],
        R = e[14],
        D = e[15];
      return (
        (n[0] = r * _ + s * x + f * b + p * w),
        (n[1] = i * _ + u * x + m * b + v * w),
        (n[2] = o * _ + l * x + h * b + y * w),
        (n[3] = a * _ + c * x + d * b + g * w),
        (n[4] = r * A + s * C + f * T + p * P),
        (n[5] = i * A + u * C + m * T + v * P),
        (n[6] = o * A + l * C + h * T + y * P),
        (n[7] = a * A + c * C + d * T + g * P),
        (n[8] = r * S + s * E + f * L + p * M),
        (n[9] = i * S + u * E + m * L + v * M),
        (n[10] = o * S + l * E + h * L + y * M),
        (n[11] = a * S + c * E + d * L + g * M),
        (n[12] = r * z + s * F + f * R + p * D),
        (n[13] = i * z + u * F + m * R + v * D),
        (n[14] = o * z + l * F + h * R + y * D),
        (n[15] = a * z + c * F + d * R + g * D),
        n
      );
    },
    negate: function(t, e) {
      return (
        ((e = e || new I(16))[0] = -t[0]),
        (e[1] = -t[1]),
        (e[2] = -t[2]),
        (e[3] = -t[3]),
        (e[4] = -t[4]),
        (e[5] = -t[5]),
        (e[6] = -t[6]),
        (e[7] = -t[7]),
        (e[8] = -t[8]),
        (e[9] = -t[9]),
        (e[10] = -t[10]),
        (e[11] = -t[11]),
        (e[12] = -t[12]),
        (e[13] = -t[13]),
        (e[14] = -t[14]),
        (e[15] = -t[15]),
        e
      );
    },
    ortho: function(t, e, n, r, i, o, a) {
      return (
        ((a = a || new I(16))[0] = 2 / (e - t)),
        (a[1] = 0),
        (a[2] = 0),
        (a[3] = 0),
        (a[4] = 0),
        (a[5] = 2 / (r - n)),
        (a[6] = 0),
        (a[7] = 0),
        (a[8] = 0),
        (a[9] = 0),
        (a[10] = 2 / (i - o)),
        (a[11] = 0),
        (a[12] = (e + t) / (t - e)),
        (a[13] = (r + n) / (n - r)),
        (a[14] = (o + i) / (i - o)),
        (a[15] = 1),
        a
      );
    },
    perspective: function(t, e, n, r, i) {
      i = i || new I(16);
      var o = Math.tan(0.5 * Math.PI - 0.5 * t),
        a = 1 / (n - r);
      return (
        (i[0] = o / e),
        (i[1] = 0),
        (i[2] = 0),
        (i[3] = 0),
        (i[4] = 0),
        (i[5] = o),
        (i[6] = 0),
        (i[7] = 0),
        (i[8] = 0),
        (i[9] = 0),
        (i[10] = (n + r) * a),
        (i[11] = -1),
        (i[12] = 0),
        (i[13] = 0),
        (i[14] = n * r * a * 2),
        (i[15] = 0),
        i
      );
    },
    rotateX: function(t, e, n) {
      n = n || new I(16);
      var r = t[4],
        i = t[5],
        o = t[6],
        a = t[7],
        s = t[8],
        u = t[9],
        l = t[10],
        c = t[11],
        f = Math.cos(e),
        m = Math.sin(e);
      return (
        (n[4] = f * r + m * s),
        (n[5] = f * i + m * u),
        (n[6] = f * o + m * l),
        (n[7] = f * a + m * c),
        (n[8] = f * s - m * r),
        (n[9] = f * u - m * i),
        (n[10] = f * l - m * o),
        (n[11] = f * c - m * a),
        t !== n &&
          ((n[0] = t[0]),
          (n[1] = t[1]),
          (n[2] = t[2]),
          (n[3] = t[3]),
          (n[12] = t[12]),
          (n[13] = t[13]),
          (n[14] = t[14]),
          (n[15] = t[15])),
        n
      );
    },
    rotateY: function(t, e, n) {
      n = n || new I(16);
      var r = t[0],
        i = t[1],
        o = t[2],
        a = t[3],
        s = t[8],
        u = t[9],
        l = t[10],
        c = t[11],
        f = Math.cos(e),
        m = Math.sin(e);
      return (
        (n[0] = f * r - m * s),
        (n[1] = f * i - m * u),
        (n[2] = f * o - m * l),
        (n[3] = f * a - m * c),
        (n[8] = f * s + m * r),
        (n[9] = f * u + m * i),
        (n[10] = f * l + m * o),
        (n[11] = f * c + m * a),
        t !== n &&
          ((n[4] = t[4]),
          (n[5] = t[5]),
          (n[6] = t[6]),
          (n[7] = t[7]),
          (n[12] = t[12]),
          (n[13] = t[13]),
          (n[14] = t[14]),
          (n[15] = t[15])),
        n
      );
    },
    rotateZ: function(t, e, n) {
      n = n || new I(16);
      var r = t[0],
        i = t[1],
        o = t[2],
        a = t[3],
        s = t[4],
        u = t[5],
        l = t[6],
        c = t[7],
        f = Math.cos(e),
        m = Math.sin(e);
      return (
        (n[0] = f * r + m * s),
        (n[1] = f * i + m * u),
        (n[2] = f * o + m * l),
        (n[3] = f * a + m * c),
        (n[4] = f * s - m * r),
        (n[5] = f * u - m * i),
        (n[6] = f * l - m * o),
        (n[7] = f * c - m * a),
        t !== n &&
          ((n[8] = t[8]),
          (n[9] = t[9]),
          (n[10] = t[10]),
          (n[11] = t[11]),
          (n[12] = t[12]),
          (n[13] = t[13]),
          (n[14] = t[14]),
          (n[15] = t[15])),
        n
      );
    },
    rotationX: function(t, e) {
      e = e || new I(16);
      var n = Math.cos(t),
        r = Math.sin(t);
      return (
        (e[0] = 1),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = 0),
        (e[5] = n),
        (e[6] = r),
        (e[7] = 0),
        (e[8] = 0),
        (e[9] = -r),
        (e[10] = n),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        e
      );
    },
    rotationY: function(t, e) {
      e = e || new I(16);
      var n = Math.cos(t),
        r = Math.sin(t);
      return (
        (e[0] = n),
        (e[1] = 0),
        (e[2] = -r),
        (e[3] = 0),
        (e[4] = 0),
        (e[5] = 1),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = r),
        (e[9] = 0),
        (e[10] = n),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        e
      );
    },
    rotationZ: function(t, e) {
      e = e || new I(16);
      var n = Math.cos(t),
        r = Math.sin(t);
      return (
        (e[0] = n),
        (e[1] = r),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = -r),
        (e[5] = n),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = 0),
        (e[9] = 0),
        (e[10] = 1),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        e
      );
    },
    scale: function(t, e, n) {
      n = n || new I(16);
      var r = e[0],
        i = e[1],
        o = e[2];
      return (
        (n[0] = r * t[0]),
        (n[1] = r * t[1]),
        (n[2] = r * t[2]),
        (n[3] = r * t[3]),
        (n[4] = i * t[4]),
        (n[5] = i * t[5]),
        (n[6] = i * t[6]),
        (n[7] = i * t[7]),
        (n[8] = o * t[8]),
        (n[9] = o * t[9]),
        (n[10] = o * t[10]),
        (n[11] = o * t[11]),
        t !== n && ((n[12] = t[12]), (n[13] = t[13]), (n[14] = t[14]), (n[15] = t[15])),
        n
      );
    },
    scaling: function(t, e) {
      return (
        ((e = e || new I(16))[0] = t[0]),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = 0),
        (e[5] = t[1]),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = 0),
        (e[9] = 0),
        (e[10] = t[2]),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        e
      );
    },
    setAxis: function(t, e, n, r) {
      r !== t && (r = P(t, r));
      var i = 4 * n;
      return (r[i + 0] = e[0]), (r[i + 1] = e[1]), (r[i + 2] = e[2]), r;
    },
    setDefaultType: function(t) {
      var e = I;
      return (I = t), e;
    },
    setTranslation: function(t, e, n) {
      return (
        t !== (n = n || S()) &&
          ((n[0] = t[0]),
          (n[1] = t[1]),
          (n[2] = t[2]),
          (n[3] = t[3]),
          (n[4] = t[4]),
          (n[5] = t[5]),
          (n[6] = t[6]),
          (n[7] = t[7]),
          (n[8] = t[8]),
          (n[9] = t[9]),
          (n[10] = t[10]),
          (n[11] = t[11])),
        (n[12] = e[0]),
        (n[13] = e[1]),
        (n[14] = e[2]),
        (n[15] = 1),
        n
      );
    },
    transformDirection: M,
    transformNormal: function(t, e, n) {
      n = n || _();
      var r = E(t),
        i = e[0],
        o = e[1],
        a = e[2];
      return (
        (n[0] = i * r[0] + o * r[1] + a * r[2]),
        (n[1] = i * r[4] + o * r[5] + a * r[6]),
        (n[2] = i * r[8] + o * r[9] + a * r[10]),
        n
      );
    },
    transformPoint: L,
    translate: function(t, e, n) {
      n = n || new I(16);
      var r = e[0],
        i = e[1],
        o = e[2],
        a = t[0],
        s = t[1],
        u = t[2],
        l = t[3],
        c = t[4],
        f = t[5],
        m = t[6],
        h = t[7],
        d = t[8],
        p = t[9],
        v = t[10],
        y = t[11],
        g = t[12],
        _ = t[13],
        x = t[14],
        b = t[15];
      return (
        t !== n &&
          ((n[0] = a),
          (n[1] = s),
          (n[2] = u),
          (n[3] = l),
          (n[4] = c),
          (n[5] = f),
          (n[6] = m),
          (n[7] = h),
          (n[8] = d),
          (n[9] = p),
          (n[10] = v),
          (n[11] = y)),
        (n[12] = a * r + c * i + d * o + g),
        (n[13] = s * r + f * i + p * o + _),
        (n[14] = u * r + m * i + v * o + x),
        (n[15] = l * r + h * i + y * o + b),
        n
      );
    },
    translation: function(t, e) {
      return (
        ((e = e || new I(16))[0] = 1),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = 0),
        (e[5] = 1),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = 0),
        (e[9] = 0),
        (e[10] = 1),
        (e[11] = 0),
        (e[12] = t[0]),
        (e[13] = t[1]),
        (e[14] = t[2]),
        (e[15] = 1),
        e
      );
    },
    transpose: function(t, e) {
      var n;
      if ((e = e || new I(16)) === t)
        return (
          (n = t[1]),
          (t[1] = t[4]),
          (t[4] = n),
          (n = t[2]),
          (t[2] = t[8]),
          (t[8] = n),
          (n = t[3]),
          (t[3] = t[12]),
          (t[12] = n),
          (n = t[6]),
          (t[6] = t[9]),
          (t[9] = n),
          (n = t[7]),
          (t[7] = t[13]),
          (t[13] = n),
          (n = t[11]),
          (t[11] = t[14]),
          (t[14] = n),
          e
        );
      var r = t[0],
        i = t[1],
        o = t[2],
        a = t[3],
        s = t[4],
        u = t[5],
        l = t[6],
        c = t[7],
        f = t[8],
        m = t[9],
        h = t[10],
        d = t[11],
        p = t[12],
        v = t[13],
        y = t[14],
        g = t[15];
      return (
        (e[0] = r),
        (e[1] = s),
        (e[2] = f),
        (e[3] = p),
        (e[4] = i),
        (e[5] = u),
        (e[6] = m),
        (e[7] = v),
        (e[8] = o),
        (e[9] = l),
        (e[10] = h),
        (e[11] = y),
        (e[12] = a),
        (e[13] = c),
        (e[14] = d),
        (e[15] = g),
        e
      );
    }
  }),
  F = {},
  R = F;
function D(t) {
  if (t instanceof Int8Array) return 5120;
  if (t instanceof Uint8Array) return 5121;
  if (t instanceof Uint8ClampedArray) return 5121;
  if (t instanceof Int16Array) return 5122;
  if (t instanceof Uint16Array) return 5123;
  if (t instanceof Int32Array) return 5124;
  if (t instanceof Uint32Array) return 5125;
  if (t instanceof Float32Array) return 5126;
  throw new Error("unsupported typed array type");
}
(R[5120] = Int8Array),
  (R[5121] = Uint8Array),
  (R[5122] = Int16Array),
  (R[5123] = Uint16Array),
  (R[5124] = Int32Array),
  (R[5125] = Uint32Array),
  (R[5126] = Float32Array),
  (R[32819] = Uint16Array),
  (R[32820] = Uint16Array),
  (R[33635] = Uint16Array),
  (R[5131] = Uint16Array),
  (R[33640] = Uint32Array),
  (R[35899] = Uint32Array),
  (R[35902] = Uint32Array),
  (R[36269] = Uint32Array),
  (R[34042] = Uint32Array);
var k =
  "undefined" != typeof SharedArrayBuffer
    ? function(t) {
        return t && t.buffer && (t.buffer instanceof ArrayBuffer || t.buffer instanceof SharedArrayBuffer);
      }
    : function(t) {
        return t && t.buffer && t.buffer instanceof ArrayBuffer;
      };
function O() {
  var t;
  (t = console).error.apply(t, arguments);
}
function j() {
  var t;
  (t = console).warn.apply(t, arguments);
}
function B(t, e) {
  return "undefined" != typeof WebGLTexture && e instanceof WebGLTexture;
}
var G = "";
function N(t, e, n, r, i) {
  t.bindBuffer(e, n), t.bufferData(e, r, i || 35044);
}
function U(t, e, n, r) {
  if (((i = e), "undefined" != typeof WebGLBuffer && i instanceof WebGLBuffer)) return e;
  var i;
  n = n || 34962;
  var o = t.createBuffer();
  return N(t, n, o, e, r), o;
}
function V(t) {
  return "indices" === t;
}
function W(t) {
  return t.length ? t : t.data;
}
var Y = /coord|texture/i,
  H = /color|colour/i;
function X(t, e) {
  var n;
  if (e % (n = Y.test(t) ? 2 : H.test(t) ? 4 : 3) > 0)
    throw new Error(
      "Can not guess numComponents for attribute '"
        .concat(t, "'. Tried ")
        .concat(n, " but ")
        .concat(e, " values is not evenly divisible by ")
        .concat(n, ". You should specify it.")
    );
  return n;
}
function q(t, e) {
  return t.numComponents || t.size || X(e, W(t).length);
}
function Z(t, e) {
  if (k(t)) return t;
  if (k(t.data)) return t.data;
  Array.isArray(t) && (t = { data: t });
  var n = t.type;
  return n || (n = V(e) ? Uint16Array : Float32Array), new n(t.data);
}
function K(t, e) {
  var n = {};
  return (
    Object.keys(e).forEach(function(r) {
      if (!V(r)) {
        var i = e[r],
          o = i.attrib || i.name || i.attribName || G + r;
        if (i.value) {
          if (!Array.isArray(i.value) && !k(i.value)) throw new Error("array.value is not array or typedarray");
          n[o] = { value: i.value };
        } else {
          var a, s, u, l;
          if (i.buffer && i.buffer instanceof WebGLBuffer)
            (a = i.buffer), (l = i.numComponents || i.size), (s = i.type), (u = i.normalize);
          else if ("number" == typeof i || "number" == typeof i.data) {
            var c = i.data || i,
              f = i.type || Float32Array,
              m = c * f.BYTES_PER_ELEMENT;
            (s = (function(t) {
              if (t === Int8Array) return 5120;
              if (t === Uint8Array) return 5121;
              if (t === Uint8ClampedArray) return 5121;
              if (t === Int16Array) return 5122;
              if (t === Uint16Array) return 5123;
              if (t === Int32Array) return 5124;
              if (t === Uint32Array) return 5125;
              if (t === Float32Array) return 5126;
              throw new Error("unsupported typed array type");
            })(f)),
              (u = void 0 !== i.normalize ? i.normalize : (d = f) === Int8Array || d === Uint8Array),
              (l = i.numComponents || i.size || X(r, c)),
              (a = t.createBuffer()),
              t.bindBuffer(34962, a),
              t.bufferData(34962, m, i.drawType || 35044);
          } else {
            var h = Z(i, r);
            (a = U(t, h, void 0, i.drawType)),
              (s = D(h)),
              (u =
                void 0 !== i.normalize
                  ? i.normalize
                  : (function(t) {
                      return t instanceof Int8Array || t instanceof Uint8Array;
                    })(h)),
              (l = q(i, r));
          }
          n[o] = {
            buffer: a,
            numComponents: l,
            type: s,
            normalize: u,
            stride: i.stride || 0,
            offset: i.offset || 0,
            divisor: void 0 === i.divisor ? void 0 : i.divisor,
            drawType: i.drawType
          };
        }
      }
      var d;
    }),
    t.bindBuffer(34962, null),
    n
  );
}
var J = ["position", "positions", "a_position"];
function Q(t, e, n) {
  var r = K(t, e),
    i = Object.assign({}, n || {});
  i.attribs = Object.assign({}, n ? n.attribs : {}, r);
  var o = e.indices;
  if (o) {
    var a = Z(o, "indices");
    (i.indices = U(t, a, 34963)), (i.numElements = a.length), (i.elementType = D(a));
  } else
    i.numElements ||
      (i.numElements = (function(t, e) {
        var n, r;
        for (r = 0; r < J.length && !((n = J[r]) in e) && !((n = G + n) in e); ++r);
        r === J.length && (n = Object.keys(e)[0]);
        var i = e[n];
        t.bindBuffer(34962, i.buffer);
        var o = t.getBufferParameter(34962, 34660);
        t.bindBuffer(34962, null);
        var a,
          s =
            o /
            (5120 === (a = i.type) || 5121 === a
              ? 1
              : 5122 === a || 5123 === a
              ? 2
              : 5124 === a || 5125 === a || 5126 === a
              ? 4
              : 0),
          u = i.numComponents || i.size,
          l = s / u;
        if (l % 1 != 0) throw new Error("numComponents ".concat(u, " not correct for length ").concat(length));
        return l;
      })(t, i.attribs));
  return i;
}
function $(t, e) {
  var n = {};
  return (
    Object.keys(e).forEach(function(r) {
      n[r] = (function(t, e, n) {
        var r = "indices" === n ? 34963 : 34962;
        return U(t, Z(e, n), r);
      })(t, e[r], r);
    }),
    e.indices
      ? ((n.numElements = e.indices.length), (n.elementType = D(Z(e.indices))))
      : (n.numElements = (function(t) {
          var e, n;
          for (n = 0; n < J.length && !((e = J[n]) in t); ++n);
          n === J.length && (e = Object.keys(t)[0]);
          var r = t[e],
            i = W(r).length,
            o = q(r, e),
            a = i / o;
          if (i % o > 0) throw new Error("numComponents ".concat(o, " not correct for length ").concat(i));
          return a;
        })(e)),
    n
  );
}
var tt = W,
  et = q;
function nt(t, e) {
  var n = 0;
  return (
    (t.push = function() {
      for (var e = 0; e < arguments.length; ++e) {
        var r = arguments[e];
        if (r instanceof Array || k(r)) for (var i = 0; i < r.length; ++i) t[n++] = r[i];
        else t[n++] = r;
      }
    }),
    (t.reset = function(t) {
      n = t || 0;
    }),
    (t.numComponents = e),
    Object.defineProperty(t, "numElements", {
      get: function() {
        return (this.length / this.numComponents) | 0;
      }
    }),
    t
  );
}
function rt(t, e, n) {
  return nt(new (n || Float32Array)(t * e), t);
}
function it(t) {
  return "indices" !== t;
}
function ot(t, e, n) {
  for (var r = t.length, i = new Float32Array(3), o = 0; o < r; o += 3)
    n(e, [t[o], t[o + 1], t[o + 2]], i), (t[o] = i[0]), (t[o + 1] = i[1]), (t[o + 2] = i[2]);
}
function at(t, e, n) {
  n = n || _();
  var r = e[0],
    i = e[1],
    o = e[2];
  return (
    (n[0] = r * t[0] + i * t[1] + o * t[2]),
    (n[1] = r * t[4] + i * t[5] + o * t[6]),
    (n[2] = r * t[8] + i * t[9] + o * t[10]),
    n
  );
}
function st(t, e) {
  return ot(t, e, M), t;
}
function ut(t, e) {
  return ot(t, E(e), at), t;
}
function lt(t, e) {
  return ot(t, e, L), t;
}
function ct(t, e) {
  return (
    Object.keys(t).forEach(function(n) {
      var r = t[n];
      n.indexOf("pos") >= 0
        ? lt(r, e)
        : n.indexOf("tan") >= 0 || n.indexOf("binorm") >= 0
        ? st(r, e)
        : n.indexOf("norm") >= 0 && ut(r, e);
    }),
    t
  );
}
function ft(t, e, n) {
  return (
    (t = t || 2),
    {
      position: {
        numComponents: 2,
        data: [
          (e = e || 0) + -1 * (t *= 0.5),
          (n = n || 0) + -1 * t,
          e + 1 * t,
          n + -1 * t,
          e + -1 * t,
          n + 1 * t,
          e + 1 * t,
          n + 1 * t
        ]
      },
      normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
      texcoord: [0, 0, 1, 0, 0, 1, 1, 1],
      indices: [0, 1, 2, 2, 1, 3]
    }
  );
}
function mt(t, e, n, r, i) {
  (t = t || 1), (e = e || 1), (n = n || 1), (r = r || 1), (i = i || S());
  for (var o = (n + 1) * (r + 1), a = rt(3, o), s = rt(3, o), u = rt(2, o), l = 0; l <= r; l++)
    for (var c = 0; c <= n; c++) {
      var f = c / n,
        m = l / r;
      a.push(t * f - 0.5 * t, 0, e * m - 0.5 * e), s.push(0, 1, 0), u.push(f, m);
    }
  for (var h = n + 1, d = rt(3, n * r * 2, Uint16Array), p = 0; p < r; p++)
    for (var v = 0; v < n; v++)
      d.push((p + 0) * h + v, (p + 1) * h + v, (p + 0) * h + v + 1),
        d.push((p + 1) * h + v, (p + 1) * h + v + 1, (p + 0) * h + v + 1);
  return ct({ position: a, normal: s, texcoord: u, indices: d }, i);
}
function ht(t, e, n, r, i, o, a) {
  if (e <= 0 || n <= 0) throw new Error("subdivisionAxis and subdivisionHeight must be > 0");
  (r = r || 0), (o = o || 0);
  for (
    var s = (i = i || Math.PI) - r,
      u = (a = a || 2 * Math.PI) - o,
      l = (e + 1) * (n + 1),
      c = rt(3, l),
      f = rt(3, l),
      m = rt(2, l),
      h = rt(3, l),
      d = rt(3, l),
      p = 0;
    p <= n;
    p++
  )
    for (var v = 0; v <= e; v++) {
      var y = v / e,
        g = p / n,
        _ = u * y + o,
        x = s * g + r,
        b = Math.sin(_),
        w = Math.cos(_),
        A = Math.sin(x),
        C = w * A,
        T = Math.cos(x),
        I = b * A,
        P = u * ((v + 1) / e) + o,
        S = s * (p / n) + r,
        E = Math.sin(P),
        L = Math.cos(P),
        M = Math.sin(S),
        z = Math.cos(S);
      h.push(L * M - C, z - T, E * M - I);
      var F = u * (v / e) + o,
        R = s * ((p + 1) / n) + r,
        D = Math.sin(F),
        k = Math.cos(F),
        O = Math.sin(R),
        j = k * O - C,
        B = Math.cos(R) - T,
        G = D * O - I;
      c.push(t * C, t * T, t * I), f.push(C, T, I), m.push(1 - y, g), d.push(j, B, G);
    }
  for (var N = e + 1, U = rt(3, e * n * 2, Uint16Array), V = 0; V < e; V++)
    for (var W = 0; W < n; W++)
      U.push((W + 0) * N + V, (W + 0) * N + V + 1, (W + 1) * N + V),
        U.push((W + 1) * N + V, (W + 0) * N + V + 1, (W + 1) * N + V + 1);
  return { position: c, normal: f, texcoord: m, indices: U, tangent: h, bitangent: d };
}
var dt = [
  [3, 7, 5, 1],
  [6, 2, 0, 4],
  [6, 7, 3, 2],
  [0, 1, 5, 4],
  [7, 6, 4, 5],
  [2, 3, 1, 0]
];
function pt(t) {
  for (
    var e = (t = t || 1) / 2,
      n = [
        [-e, -e, -e],
        [+e, -e, -e],
        [-e, +e, -e],
        [+e, +e, -e],
        [-e, -e, +e],
        [+e, -e, +e],
        [-e, +e, +e],
        [+e, +e, +e]
      ],
      r = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      i = [
        [1, 0],
        [0, 0],
        [0, 1],
        [1, 1]
      ],
      o = rt(3, 24),
      a = rt(3, 24),
      s = rt(2, 24),
      u = rt(3, 12, Uint16Array),
      l = 0;
    l < 6;
    ++l
  ) {
    for (var c = dt[l], f = 0; f < 4; ++f) {
      var m = n[c[f]],
        h = r[l],
        d = i[f];
      o.push(m), a.push(h), s.push(d);
    }
    var p = 4 * l;
    u.push(p + 0, p + 1, p + 2), u.push(p + 0, p + 2, p + 3);
  }
  return { position: o, normal: a, texcoord: s, indices: u };
}
function vt(t, e, n, r, i, o, a) {
  if (r < 3) throw new Error("radialSubdivisions must be 3 or greater");
  if (i < 1) throw new Error("verticalSubdivisions must be 1 or greater");
  for (
    var s = void 0 === o || o,
      u = void 0 === a || a,
      l = (s ? 2 : 0) + (u ? 2 : 0),
      c = (r + 1) * (i + 1 + l),
      f = rt(3, c),
      m = rt(3, c),
      h = rt(2, c),
      d = rt(3, r * (i + l / 2) * 2, Uint16Array),
      p = r + 1,
      v = Math.atan2(t - e, n),
      y = Math.cos(v),
      g = Math.sin(v),
      _ = i + (u ? 2 : 0),
      x = s ? -2 : 0;
    x <= _;
    ++x
  ) {
    var b = x / i,
      w = n * b,
      A = void 0;
    x < 0 ? ((w = 0), (b = 1), (A = t)) : x > i ? ((w = n), (b = 1), (A = e)) : (A = t + (x / i) * (e - t)),
      (-2 !== x && x !== i + 2) || ((A = 0), (b = 0)),
      (w -= n / 2);
    for (var C = 0; C < p; ++C) {
      var T = Math.sin((C * Math.PI * 2) / r),
        I = Math.cos((C * Math.PI * 2) / r);
      f.push(T * A, w, I * A),
        x < 0 ? m.push(0, -1, 0) : x > i ? m.push(0, 1, 0) : 0 === A ? m.push(0, 0, 0) : m.push(T * y, g, I * y),
        h.push(C / r, 1 - b);
    }
  }
  for (var P = 0; P < i + l; ++P)
    if (!((1 === P && s) || (P === i + l - 2 && u)))
      for (var S = 0; S < r; ++S)
        d.push(p * (P + 0) + 0 + S, p * (P + 0) + 1 + S, p * (P + 1) + 1 + S),
          d.push(p * (P + 0) + 0 + S, p * (P + 1) + 1 + S, p * (P + 1) + 0 + S);
  return { position: f, normal: m, texcoord: h, indices: d };
}
function yt(t, e) {
  e = e || [];
  for (var n = [], r = 0; r < t.length; r += 4) {
    var i = t[r],
      o = t.slice(r + 1, r + 4);
    o.push.apply(o, e);
    for (var a = 0; a < i; ++a) n.push.apply(n, o);
  }
  return n;
}
function gt() {
  var t = [
      0,
      0,
      0,
      0,
      150,
      0,
      30,
      0,
      0,
      0,
      150,
      0,
      30,
      150,
      0,
      30,
      0,
      0,
      30,
      0,
      0,
      30,
      30,
      0,
      100,
      0,
      0,
      30,
      30,
      0,
      100,
      30,
      0,
      100,
      0,
      0,
      30,
      60,
      0,
      30,
      90,
      0,
      67,
      60,
      0,
      30,
      90,
      0,
      67,
      90,
      0,
      67,
      60,
      0,
      0,
      0,
      30,
      30,
      0,
      30,
      0,
      150,
      30,
      0,
      150,
      30,
      30,
      0,
      30,
      30,
      150,
      30,
      30,
      0,
      30,
      100,
      0,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      100,
      0,
      30,
      100,
      30,
      30,
      30,
      60,
      30,
      67,
      60,
      30,
      30,
      90,
      30,
      30,
      90,
      30,
      67,
      60,
      30,
      67,
      90,
      30,
      0,
      0,
      0,
      100,
      0,
      0,
      100,
      0,
      30,
      0,
      0,
      0,
      100,
      0,
      30,
      0,
      0,
      30,
      100,
      0,
      0,
      100,
      30,
      0,
      100,
      30,
      30,
      100,
      0,
      0,
      100,
      30,
      30,
      100,
      0,
      30,
      30,
      30,
      0,
      30,
      30,
      30,
      100,
      30,
      30,
      30,
      30,
      0,
      100,
      30,
      30,
      100,
      30,
      0,
      30,
      30,
      0,
      30,
      60,
      30,
      30,
      30,
      30,
      30,
      30,
      0,
      30,
      60,
      0,
      30,
      60,
      30,
      30,
      60,
      0,
      67,
      60,
      30,
      30,
      60,
      30,
      30,
      60,
      0,
      67,
      60,
      0,
      67,
      60,
      30,
      67,
      60,
      0,
      67,
      90,
      30,
      67,
      60,
      30,
      67,
      60,
      0,
      67,
      90,
      0,
      67,
      90,
      30,
      30,
      90,
      0,
      30,
      90,
      30,
      67,
      90,
      30,
      30,
      90,
      0,
      67,
      90,
      30,
      67,
      90,
      0,
      30,
      90,
      0,
      30,
      150,
      30,
      30,
      90,
      30,
      30,
      90,
      0,
      30,
      150,
      0,
      30,
      150,
      30,
      0,
      150,
      0,
      0,
      150,
      30,
      30,
      150,
      30,
      0,
      150,
      0,
      30,
      150,
      30,
      30,
      150,
      0,
      0,
      0,
      0,
      0,
      0,
      30,
      0,
      150,
      30,
      0,
      0,
      0,
      0,
      150,
      30,
      0,
      150,
      0
    ],
    e = yt([
      18,
      0,
      0,
      1,
      18,
      0,
      0,
      -1,
      6,
      0,
      1,
      0,
      6,
      1,
      0,
      0,
      6,
      0,
      -1,
      0,
      6,
      1,
      0,
      0,
      6,
      0,
      1,
      0,
      6,
      1,
      0,
      0,
      6,
      0,
      -1,
      0,
      6,
      1,
      0,
      0,
      6,
      0,
      -1,
      0,
      6,
      -1,
      0,
      0
    ]),
    n = yt(
      [
        18,
        200,
        70,
        120,
        18,
        80,
        70,
        200,
        6,
        70,
        200,
        210,
        6,
        200,
        200,
        70,
        6,
        210,
        100,
        70,
        6,
        210,
        160,
        70,
        6,
        70,
        180,
        210,
        6,
        100,
        70,
        210,
        6,
        76,
        210,
        100,
        6,
        140,
        210,
        80,
        6,
        90,
        130,
        110,
        6,
        160,
        160,
        220
      ],
      [255]
    ),
    r = t.length / 3,
    i = {
      position: rt(3, r),
      texcoord: rt(2, r),
      normal: rt(3, r),
      color: rt(4, r, Uint8Array),
      indices: rt(3, r / 3, Uint16Array)
    };
  i.position.push(t),
    i.texcoord.push([
      0.22,
      0.19,
      0.22,
      0.79,
      0.34,
      0.19,
      0.22,
      0.79,
      0.34,
      0.79,
      0.34,
      0.19,
      0.34,
      0.19,
      0.34,
      0.31,
      0.62,
      0.19,
      0.34,
      0.31,
      0.62,
      0.31,
      0.62,
      0.19,
      0.34,
      0.43,
      0.34,
      0.55,
      0.49,
      0.43,
      0.34,
      0.55,
      0.49,
      0.55,
      0.49,
      0.43,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      0
    ]),
    i.normal.push(e),
    i.color.push(n);
  for (var o = 0; o < r; ++o) i.indices.push(o);
  return i;
}
function _t(t, e, n, r, i, o, a) {
  if (i <= 0) throw new Error("subdivisionDown must be > 0");
  var s = (a = a || 1) - (o = o || 0),
    u = 2 * (i + 1) * 4,
    l = rt(3, u),
    c = rt(3, u),
    f = rt(2, u);
  function m(t, e, n) {
    return t + (e - t) * n;
  }
  function h(e, n, a, u, h, d) {
    for (var p = 0; p <= i; p++) {
      var v = n / 1,
        y = p / i,
        _ = 2 * (v - 0.5),
        b = (o + y * s) * Math.PI,
        w = Math.sin(b),
        A = Math.cos(b),
        C = m(t, e, w),
        T = _ * r,
        I = A * t,
        P = w * C;
      l.push(T, I, P);
      var S = x(
        ((E = [0, w, A]),
        (L = a),
        ((M = (M = void 0) || new g(3))[0] = E[0] * L[0]),
        (M[1] = E[1] * L[1]),
        (M[2] = E[2] * L[2]),
        M),
        u
      );
      c.push(S), f.push(v * h + d, y);
    }
    var E, L, M;
  }
  for (var d = 0; d < 2; d++) {
    var p = 2 * (d / 1 - 0.5);
    h(e, d, [1, 1, 1], [0, 0, 0], 1, 0),
      h(e, d, [0, 0, 0], [p, 0, 0], 0, 0),
      h(n, d, [1, 1, 1], [0, 0, 0], 1, 0),
      h(n, d, [0, 0, 0], [p, 0, 0], 0, 1);
  }
  var v = rt(3, 2 * i * 4, Uint16Array);
  function y(t, e) {
    for (var n = 0; n < i; ++n) v.push(t + n + 0, t + n + 1, e + n + 0), v.push(t + n + 1, e + n + 1, e + n + 0);
  }
  var _ = i + 1;
  return (
    y(0 * _, 4 * _),
    y(5 * _, 7 * _),
    y(6 * _, 2 * _),
    y(3 * _, 1 * _),
    { position: l, normal: c, texcoord: f, indices: v }
  );
}
function xt(t, e, n, r, i, o) {
  return vt(t, t, e, n, r, i, o);
}
function bt(t, e, n, r, i, o) {
  if (n < 3) throw new Error("radialSubdivisions must be 3 or greater");
  if (r < 3) throw new Error("verticalSubdivisions must be 3 or greater");
  i = i || 0;
  for (
    var a = (o = o || 2 * Math.PI) - i,
      s = n + 1,
      u = r + 1,
      l = s * u,
      c = rt(3, l),
      f = rt(3, l),
      m = rt(2, l),
      h = rt(3, n * r * 2, Uint16Array),
      d = 0;
    d < u;
    ++d
  )
    for (
      var p = d / r, v = p * Math.PI * 2, y = Math.sin(v), g = t + y * e, _ = Math.cos(v), x = _ * e, b = 0;
      b < s;
      ++b
    ) {
      var w = b / n,
        A = i + w * a,
        C = Math.sin(A),
        T = Math.cos(A),
        I = C * g,
        P = T * g,
        S = C * y,
        E = T * y;
      c.push(I, x, P), f.push(S, _, E), m.push(w, 1 - p);
    }
  for (var L = 0; L < r; ++L)
    for (var M = 0; M < n; ++M) {
      var z = 1 + M,
        F = 1 + L;
      h.push(s * L + M, s * F + M, s * L + z), h.push(s * F + M, s * F + z, s * L + z);
    }
  return { position: c, normal: f, texcoord: m, indices: h };
}
function wt(t, e, n, r, i) {
  if (e < 3) throw new Error("divisions must be at least 3");
  (i = i || 1), (r = r || 0);
  for (
    var o = (e + 1) * ((n = n || 1) + 1),
      a = rt(3, o),
      s = rt(3, o),
      u = rt(2, o),
      l = rt(3, n * e * 2, Uint16Array),
      c = 0,
      f = t - r,
      m = e + 1,
      h = 0;
    h <= n;
    ++h
  ) {
    for (var d = r + f * Math.pow(h / n, i), p = 0; p <= e; ++p) {
      var v = (2 * Math.PI * p) / e,
        y = d * Math.cos(v),
        g = d * Math.sin(v);
      if ((a.push(y, 0, g), s.push(0, 1, 0), u.push(1 - p / e, h / n), h > 0 && p !== e)) {
        var _ = c + (p + 1),
          x = c + p,
          b = c + p - m,
          w = c + (p + 1) - m;
        l.push(_, x, b), l.push(_, b, w);
      }
    }
    c += e + 1;
  }
  return { position: a, normal: s, texcoord: u, indices: l };
}
function At(t) {
  return function(e) {
    var n = t.apply(this, Array.prototype.slice.call(arguments, 1));
    return $(e, n);
  };
}
function Ct(t) {
  return function(e) {
    var n = t.apply(null, Array.prototype.slice.call(arguments, 1));
    return Q(e, n);
  };
}
var Tt = ["numComponents", "size", "type", "normalize", "stride", "offset", "attrib", "name", "attribName"];
function It(t, e, n, r) {
  r = r || 0;
  for (var i = t.length, o = 0; o < i; ++o) e[n + o] = t[o] + r;
}
function Pt(t, e) {
  var n,
    r,
    i = tt(t),
    o = new i.constructor(e),
    a = o;
  return (
    i.numComponents && i.numElements && nt(o, i.numComponents),
    t.data &&
      ((n = t),
      (r = a = { data: o }),
      Tt.forEach(function(t) {
        var e = n[t];
        void 0 !== e && (r[t] = e);
      })),
    a
  );
}
var St = Ct(gt),
  Et = At(gt),
  Lt = Ct(pt),
  Mt = At(pt),
  zt = Ct(mt),
  Ft = At(mt),
  Rt = Ct(ht),
  Dt = At(ht),
  kt = Ct(vt),
  Ot = At(vt),
  jt = Ct(ft),
  Bt = At(ft),
  Gt = Ct(_t),
  Nt = At(_t),
  Ut = Ct(xt),
  Vt = At(xt),
  Wt = Ct(bt),
  Yt = At(bt),
  Ht = Ct(wt),
  Xt = At(wt),
  qt = Gt,
  Zt = Nt,
  Kt = _t,
  Jt = Object.freeze({
    __proto__: null,
    create3DFBufferInfo: St,
    create3DFBuffers: Et,
    create3DFVertices: gt,
    createAugmentedTypedArray: rt,
    createCubeBufferInfo: Lt,
    createCubeBuffers: Mt,
    createCubeVertices: pt,
    createPlaneBufferInfo: zt,
    createPlaneBuffers: Ft,
    createPlaneVertices: mt,
    createSphereBufferInfo: Rt,
    createSphereBuffers: Dt,
    createSphereVertices: ht,
    createTruncatedConeBufferInfo: kt,
    createTruncatedConeBuffers: Ot,
    createTruncatedConeVertices: vt,
    createXYQuadBufferInfo: jt,
    createXYQuadBuffers: Bt,
    createXYQuadVertices: ft,
    createCresentBufferInfo: qt,
    createCresentBuffers: Zt,
    createCresentVertices: Kt,
    createCrescentBufferInfo: Gt,
    createCrescentBuffers: Nt,
    createCrescentVertices: _t,
    createCylinderBufferInfo: Ut,
    createCylinderBuffers: Vt,
    createCylinderVertices: xt,
    createTorusBufferInfo: Wt,
    createTorusBuffers: Yt,
    createTorusVertices: bt,
    createDiscBufferInfo: Ht,
    createDiscBuffers: Xt,
    createDiscVertices: wt,
    deindexVertices: function(t) {
      var e = t.indices,
        n = {},
        r = e.length;
      return (
        Object.keys(t)
          .filter(it)
          .forEach(function(i) {
            for (var o = t[i], a = o.numComponents, s = rt(a, r, o.constructor), u = 0; u < r; ++u)
              for (var l = e[u] * a, c = 0; c < a; ++c) s.push(o[l + c]);
            n[i] = s;
          }),
        n
      );
    },
    flattenNormals: function(t) {
      if (t.indices) throw new Error("can not flatten normals of indexed vertices. deindex them first");
      for (var e = t.normal, n = e.length, r = 0; r < n; r += 9) {
        var i = e[r + 0],
          o = e[r + 1],
          a = e[r + 2],
          s = e[r + 3],
          u = e[r + 4],
          l = e[r + 5],
          c = i + s + e[r + 6],
          f = o + u + e[r + 7],
          m = a + l + e[r + 8],
          h = Math.sqrt(c * c + f * f + m * m);
        (c /= h),
          (f /= h),
          (m /= h),
          (e[r + 0] = c),
          (e[r + 1] = f),
          (e[r + 2] = m),
          (e[r + 3] = c),
          (e[r + 4] = f),
          (e[r + 5] = m),
          (e[r + 6] = c),
          (e[r + 7] = f),
          (e[r + 8] = m);
      }
      return t;
    },
    makeRandomVertexColors: function(t, e) {
      e = e || {};
      var n = t.position.numElements,
        r = rt(4, n, Uint8Array),
        i =
          e.rand ||
          function(t, e) {
            return e < 3 ? ((n = 256), (Math.random() * n) | 0) : 255;
            var n;
          };
      if (((t.color = r), t.indices)) for (var o = 0; o < n; ++o) r.push(i(o, 0), i(o, 1), i(o, 2), i(o, 3));
      else
        for (var a = e.vertsPerColor || 3, s = n / a, u = 0; u < s; ++u)
          for (var l = [i(u, 0), i(u, 1), i(u, 2), i(u, 3)], c = 0; c < a; ++c) r.push(l);
      return t;
    },
    reorientDirections: st,
    reorientNormals: ut,
    reorientPositions: lt,
    reorientVertices: ct,
    concatVertices: function(t) {
      for (
        var e,
          n = {},
          r = function(r) {
            var i = t[r];
            Object.keys(i).forEach(function(t) {
              n[t] || (n[t] = []), e || "indices" === t || (e = t);
              var r = i[t],
                o = et(r, t),
                a = tt(r).length / o;
              n[t].push(a);
            });
          },
          i = 0;
        i < t.length;
        ++i
      )
        r(i);
      var o = n[e],
        a = {};
      return (
        Object.keys(n).forEach(function(e) {
          var n = (function(e) {
              for (var n, r = 0, i = 0; i < t.length; ++i) {
                var o = t[i][e];
                (r += tt(o).length), (n && !o.data) || (n = o);
              }
              return { length: r, spec: n };
            })(e),
            r = Pt(n.spec, n.length);
          !(function(e, n, r) {
            for (var i = 0, o = 0, a = 0; a < t.length; ++a) {
              var s = t[a][e],
                u = tt(s);
              "indices" === e ? (It(u, r, o, i), (i += n[a])) : It(u, r, o), (o += u.length);
            }
          })(e, o, tt(r)),
            (a[e] = r);
        }),
        a
      );
    },
    duplicateVertices: function(t) {
      var e = {};
      return (
        Object.keys(t).forEach(function(n) {
          var r = t[n],
            i = tt(r),
            o = Pt(r, i.length);
          It(i, tt(o), 0), (e[n] = o);
        }),
        e
      );
    }
  });
function Qt(t) {
  return !!t.texStorage2D;
}
function $t(t) {
  return !t.texStorage2D;
}
var te,
  ee,
  ne,
  re =
    ((te = {}),
    (ee = {}),
    function(t, e) {
      return (
        (function(t) {
          var e = t.constructor.name;
          if (!te[e]) {
            for (var n in t)
              if ("number" == typeof t[n]) {
                var r = ee[t[n]];
                ee[t[n]] = r ? "".concat(r, " | ").concat(n) : n;
              }
            te[e] = !0;
          }
        })(t),
        ee[e] || "0x" + e.toString(16)
      );
    }),
  ie = { textureColor: new Uint8Array([128, 192, 255, 255]), textureOptions: {}, crossOrigin: void 0 },
  oe = k;
function ae() {
  return (ne =
    ne ||
    ("undefined" != typeof document && document.createElement
      ? document.createElement("canvas").getContext("2d")
      : null));
}
var se,
  ue = 6407,
  le = 33319,
  ce = {
    6406: { numColorComponents: 1 },
    6409: { numColorComponents: 1 },
    6410: { numColorComponents: 2 },
    6407: { numColorComponents: 3 },
    6408: { numColorComponents: 4 },
    6403: { numColorComponents: 1 },
    36244: { numColorComponents: 1 },
    33319: { numColorComponents: 2 },
    33320: { numColorComponents: 2 }
  };
function fe(t) {
  if (!se) {
    var e = {
      6406: {
        textureFormat: 6406,
        colorRenderable: !0,
        textureFilterable: !0,
        bytesPerElement: [1, 2, 2, 4],
        type: [5121, 5131, 36193, 5126]
      },
      6409: {
        textureFormat: 6409,
        colorRenderable: !0,
        textureFilterable: !0,
        bytesPerElement: [1, 2, 2, 4],
        type: [5121, 5131, 36193, 5126]
      },
      6410: {
        textureFormat: 6410,
        colorRenderable: !0,
        textureFilterable: !0,
        bytesPerElement: [2, 4, 4, 8],
        type: [5121, 5131, 36193, 5126]
      }
    };
    (e[ue] = {
      textureFormat: ue,
      colorRenderable: !0,
      textureFilterable: !0,
      bytesPerElement: [3, 6, 6, 12, 2],
      type: [5121, 5131, 36193, 5126, 33635]
    }),
      (e[6408] = {
        textureFormat: 6408,
        colorRenderable: !0,
        textureFilterable: !0,
        bytesPerElement: [4, 8, 8, 16, 2, 2],
        type: [5121, 5131, 36193, 5126, 32819, 32820]
      }),
      (e[33321] = {
        textureFormat: 6403,
        colorRenderable: !0,
        textureFilterable: !0,
        bytesPerElement: [1],
        type: [5121]
      }),
      (e[36756] = {
        textureFormat: 6403,
        colorRenderable: !1,
        textureFilterable: !0,
        bytesPerElement: [1],
        type: [5120]
      }),
      (e[33325] = {
        textureFormat: 6403,
        colorRenderable: !1,
        textureFilterable: !0,
        bytesPerElement: [4, 2],
        type: [5126, 5131]
      }),
      (e[33326] = {
        textureFormat: 6403,
        colorRenderable: !1,
        textureFilterable: !1,
        bytesPerElement: [4],
        type: [5126]
      }),
      (e[33330] = {
        textureFormat: 36244,
        colorRenderable: !0,
        textureFilterable: !1,
        bytesPerElement: [1],
        type: [5121]
      }),
      (e[33329] = {
        textureFormat: 36244,
        colorRenderable: !0,
        textureFilterable: !1,
        bytesPerElement: [1],
        type: [5120]
      }),
      (e[33332] = {
        textureFormat: 36244,
        colorRenderable: !0,
        textureFilterable: !1,
        bytesPerElement: [2],
        type: [5123]
      }),
      (e[33331] = {
        textureFormat: 36244,
        colorRenderable: !0,
        textureFilterable: !1,
        bytesPerElement: [2],
        type: [5122]
      }),
      (e[33334] = {
        textureFormat: 36244,
        colorRenderable: !0,
        textureFilterable: !1,
        bytesPerElement: [4],
        type: [5125]
      }),
      (e[33333] = {
        textureFormat: 36244,
        colorRenderable: !0,
        textureFilterable: !1,
        bytesPerElement: [4],
        type: [5124]
      }),
      (e[33323] = {
        textureFormat: le,
        colorRenderable: !0,
        textureFilterable: !0,
        bytesPerElement: [2],
        type: [5121]
      }),
      (e[36757] = {
        textureFormat: le,
        colorRenderable: !1,
        textureFilterable: !0,
        bytesPerElement: [2],
        type: [5120]
      }),
      (e[33327] = {
        textureFormat: le,
        colorRenderable: !1,
        textureFilterable: !0,
        bytesPerElement: [8, 4],
        type: [5126, 5131]
      }),
      (e[33328] = {
        textureFormat: le,
        colorRenderable: !1,
        textureFilterable: !1,
        bytesPerElement: [8],
        type: [5126]
      }),
      (e[33336] = {
        textureFormat: 33320,
        colorRenderable: !0,
        textureFilterable: !1,
        bytesPerElement: [2],
        type: [5121]
      }),
      (e[33335] = {
        textureFormat: 33320,
        colorRenderable: !0,
        textureFilterable: !1,
        bytesPerElement: [2],
        type: [5120]
      }),
      (e[33338] = {
        textureFormat: 33320,
        colorRenderable: !0,
        textureFilterable: !1,
        bytesPerElement: [4],
        type: [5123]
      }),
      (e[33337] = {
        textureFormat: 33320,
        colorRenderable: !0,
        textureFilterable: !1,
        bytesPerElement: [4],
        type: [5122]
      }),
      (e[33340] = {
        textureFormat: 33320,
        colorRenderable: !0,
        textureFilterable: !1,
        bytesPerElement: [8],
        type: [5125]
      }),
      (e[33339] = {
        textureFormat: 33320,
        colorRenderable: !0,
        textureFilterable: !1,
        bytesPerElement: [8],
        type: [5124]
      }),
      (e[32849] = {
        textureFormat: ue,
        colorRenderable: !0,
        textureFilterable: !0,
        bytesPerElement: [3],
        type: [5121]
      }),
      (e[35905] = {
        textureFormat: ue,
        colorRenderable: !1,
        textureFilterable: !0,
        bytesPerElement: [3],
        type: [5121]
      }),
      (e[36194] = {
        textureFormat: ue,
        colorRenderable: !0,
        textureFilterable: !0,
        bytesPerElement: [3, 2],
        type: [5121, 33635]
      }),
      (e[36758] = {
        textureFormat: ue,
        colorRenderable: !1,
        textureFilterable: !0,
        bytesPerElement: [3],
        type: [5120]
      }),
      (e[35898] = {
        textureFormat: ue,
        colorRenderable: !1,
        textureFilterable: !0,
        bytesPerElement: [12, 6, 4],
        type: [5126, 5131, 35899]
      }),
      (e[35901] = {
        textureFormat: ue,
        colorRenderable: !1,
        textureFilterable: !0,
        bytesPerElement: [12, 6, 4],
        type: [5126, 5131, 35902]
      }),
      (e[34843] = {
        textureFormat: ue,
        colorRenderable: !1,
        textureFilterable: !0,
        bytesPerElement: [12, 6],
        type: [5126, 5131]
      }),
      (e[34837] = {
        textureFormat: ue,
        colorRenderable: !1,
        textureFilterable: !1,
        bytesPerElement: [12],
        type: [5126]
      }),
      (e[36221] = {
        textureFormat: 36248,
        colorRenderable: !1,
        textureFilterable: !1,
        bytesPerElement: [3],
        type: [5121]
      }),
      (e[36239] = {
        textureFormat: 36248,
        colorRenderable: !1,
        textureFilterable: !1,
        bytesPerElement: [3],
        type: [5120]
      }),
      (e[36215] = {
        textureFormat: 36248,
        colorRenderable: !1,
        textureFilterable: !1,
        bytesPerElement: [6],
        type: [5123]
      }),
      (e[36233] = {
        textureFormat: 36248,
        colorRenderable: !1,
        textureFilterable: !1,
        bytesPerElement: [6],
        type: [5122]
      }),
      (e[36209] = {
        textureFormat: 36248,
        colorRenderable: !1,
        textureFilterable: !1,
        bytesPerElement: [12],
        type: [5125]
      }),
      (e[36227] = {
        textureFormat: 36248,
        colorRenderable: !1,
        textureFilterable: !1,
        bytesPerElement: [12],
        type: [5124]
      }),
      (e[32856] = {
        textureFormat: 6408,
        colorRenderable: !0,
        textureFilterable: !0,
        bytesPerElement: [4],
        type: [5121]
      }),
      (e[35907] = {
        textureFormat: 6408,
        colorRenderable: !0,
        textureFilterable: !0,
        bytesPerElement: [4],
        type: [5121]
      }),
      (e[36759] = {
        textureFormat: 6408,
        colorRenderable: !1,
        textureFilterable: !0,
        bytesPerElement: [4],
        type: [5120]
      }),
      (e[32855] = {
        textureFormat: 6408,
        colorRenderable: !0,
        textureFilterable: !0,
        bytesPerElement: [4, 2, 4],
        type: [5121, 32820, 33640]
      }),
      (e[32854] = {
        textureFormat: 6408,
        colorRenderable: !0,
        textureFilterable: !0,
        bytesPerElement: [4, 2],
        type: [5121, 32819]
      }),
      (e[32857] = {
        textureFormat: 6408,
        colorRenderable: !0,
        textureFilterable: !0,
        bytesPerElement: [4],
        type: [33640]
      }),
      (e[34842] = {
        textureFormat: 6408,
        colorRenderable: !1,
        textureFilterable: !0,
        bytesPerElement: [16, 8],
        type: [5126, 5131]
      }),
      (e[34836] = {
        textureFormat: 6408,
        colorRenderable: !1,
        textureFilterable: !1,
        bytesPerElement: [16],
        type: [5126]
      }),
      (e[36220] = {
        textureFormat: 36249,
        colorRenderable: !0,
        textureFilterable: !1,
        bytesPerElement: [4],
        type: [5121]
      }),
      (e[36238] = {
        textureFormat: 36249,
        colorRenderable: !0,
        textureFilterable: !1,
        bytesPerElement: [4],
        type: [5120]
      }),
      (e[36975] = {
        textureFormat: 36249,
        colorRenderable: !0,
        textureFilterable: !1,
        bytesPerElement: [4],
        type: [33640]
      }),
      (e[36214] = {
        textureFormat: 36249,
        colorRenderable: !0,
        textureFilterable: !1,
        bytesPerElement: [8],
        type: [5123]
      }),
      (e[36232] = {
        textureFormat: 36249,
        colorRenderable: !0,
        textureFilterable: !1,
        bytesPerElement: [8],
        type: [5122]
      }),
      (e[36226] = {
        textureFormat: 36249,
        colorRenderable: !0,
        textureFilterable: !1,
        bytesPerElement: [16],
        type: [5124]
      }),
      (e[36208] = {
        textureFormat: 36249,
        colorRenderable: !0,
        textureFilterable: !1,
        bytesPerElement: [16],
        type: [5125]
      }),
      (e[33189] = {
        textureFormat: 6402,
        colorRenderable: !0,
        textureFilterable: !1,
        bytesPerElement: [2, 4],
        type: [5123, 5125]
      }),
      (e[33190] = {
        textureFormat: 6402,
        colorRenderable: !0,
        textureFilterable: !1,
        bytesPerElement: [4],
        type: [5125]
      }),
      (e[36012] = {
        textureFormat: 6402,
        colorRenderable: !0,
        textureFilterable: !1,
        bytesPerElement: [4],
        type: [5126]
      }),
      (e[35056] = {
        textureFormat: 34041,
        colorRenderable: !0,
        textureFilterable: !1,
        bytesPerElement: [4],
        type: [34042]
      }),
      (e[36013] = {
        textureFormat: 34041,
        colorRenderable: !0,
        textureFilterable: !1,
        bytesPerElement: [4],
        type: [36269]
      }),
      Object.keys(e).forEach(function(t) {
        var n = e[t];
        (n.bytesPerElementMap = {}),
          n.bytesPerElement.forEach(function(t, e) {
            var r = n.type[e];
            n.bytesPerElementMap[r] = t;
          });
      }),
      (se = e);
  }
  return se[t];
}
function me(t) {
  var e = fe(t);
  if (!e) throw "unknown internal format";
  return { format: e.textureFormat, type: e.type[0] };
}
function he(t) {
  return 0 == (t & (t - 1));
}
function de(t, e, n, r, i) {
  if (i % 1 != 0) throw "can't guess dimensions";
  if (n || r) {
    if (r) {
      if (!n && (n = i / r) % 1) throw "can't guess dimensions";
    } else if ((r = i / n) % 1) throw "can't guess dimensions";
  } else {
    var o = Math.sqrt(i / (34067 === e ? 6 : 1));
    o % 1 == 0 ? ((n = o), (r = o)) : ((n = i), (r = 1));
  }
  return { width: n, height: r };
}
(ce[ue] = { numColorComponents: 3 }),
  (ce[36248] = { numColorComponents: 3 }),
  (ce[6408] = { numColorComponents: 4 }),
  (ce[36249] = { numColorComponents: 4 }),
  (ce[6402] = { numColorComponents: 1 }),
  (ce[34041] = { numColorComponents: 2 });
var pe = {};
function ve(t, e) {
  void 0 !== e.colorspaceConversion &&
    ((pe.colorspaceConversion = t.getParameter(37443)), t.pixelStorei(37443, e.colorspaceConversion)),
    void 0 !== e.premultiplyAlpha &&
      ((pe.premultiplyAlpha = t.getParameter(37441)), t.pixelStorei(37441, e.premultiplyAlpha)),
    void 0 !== e.flipY && ((pe.flipY = t.getParameter(37440)), t.pixelStorei(37440, e.flipY));
}
function ye(t, e) {
  void 0 !== e.colorspaceConversion && t.pixelStorei(37443, pe.colorspaceConversion),
    void 0 !== e.premultiplyAlpha && t.pixelStorei(37441, pe.premultiplyAlpha),
    void 0 !== e.flipY && t.pixelStorei(37440, pe.flipY);
}
function ge(t) {
  (pe.unpackAlignment = t.getParameter(3317)),
    Qt(t) &&
      ((pe.unpackRowLength = t.getParameter(3314)),
      (pe.unpackImageHeight = t.getParameter(32878)),
      (pe.unpackSkipPixels = t.getParameter(3316)),
      (pe.unpackSkipRows = t.getParameter(3315)),
      (pe.unpackSkipImages = t.getParameter(32877)));
}
function _e(t) {
  t.pixelStorei(3317, pe.unpackAlignment),
    Qt(t) &&
      (t.pixelStorei(3314, pe.unpackRowLength),
      t.pixelStorei(32878, pe.unpackImageHeight),
      t.pixelStorei(3316, pe.unpackSkipPixels),
      t.pixelStorei(3315, pe.unpackSkipRows),
      t.pixelStorei(32877, pe.unpackSkipImages));
}
function xe(t, e, n, r) {
  var i;
  r.minMag && (n.call(t, e, 10241, r.minMag), n.call(t, e, 10240, r.minMag)),
    r.min && n.call(t, e, 10241, r.min),
    r.mag && n.call(t, e, 10240, r.mag),
    r.wrap &&
      (n.call(t, e, 10242, r.wrap),
      n.call(t, e, 10243, r.wrap),
      (32879 === e || ((i = e), "undefined" != typeof WebGLSampler && i instanceof WebGLSampler)) &&
        n.call(t, e, 32882, r.wrap)),
    r.wrapR && n.call(t, e, 32882, r.wrapR),
    r.wrapS && n.call(t, e, 10242, r.wrapS),
    r.wrapT && n.call(t, e, 10243, r.wrapT),
    r.minLod && n.call(t, e, 33082, r.minLod),
    r.maxLod && n.call(t, e, 33083, r.maxLod),
    r.baseLevel && n.call(t, e, 33084, r.baseLevel),
    r.maxLevel && n.call(t, e, 33085, r.maxLevel);
}
function be(t, e, n) {
  var r = n.target || 3553;
  t.bindTexture(r, e), xe(t, r, t.texParameteri, n);
}
function we(t, e, n, r, i, o) {
  o = o || 6408;
  var a = (n = n || ie.textureOptions).target || 3553;
  if (
    ((r = r || n.width),
    (i = i || n.height),
    t.bindTexture(a, e),
    (function(t, e, n, r) {
      if (!Qt(t)) return he(e) && he(n);
      var i = fe(r);
      if (!i) throw "unknown internal format";
      return i.colorRenderable && i.textureFilterable;
    })(t, r, i, o))
  )
    t.generateMipmap(a);
  else {
    var s = (function(t) {
      var e = fe(t);
      if (!e) throw "unknown internal format";
      return e.textureFilterable;
    })(o)
      ? 9729
      : 9728;
    t.texParameteri(a, 10241, s),
      t.texParameteri(a, 10240, s),
      t.texParameteri(a, 10242, 33071),
      t.texParameteri(a, 10243, 33071);
  }
}
function Ae(t) {
  return !0 === t.auto || (void 0 === t.auto && void 0 === t.level);
}
function Ce(t, e) {
  return (e = e || {}).cubeFaceOrder || [34069, 34070, 34071, 34072, 34073, 34074];
}
function Te(t, e) {
  var n = Ce(0, e).map(function(t, e) {
    return { face: t, ndx: e };
  });
  return (
    n.sort(function(t, e) {
      return t.face - e.face;
    }),
    n
  );
}
function Ie(t, e, n, r) {
  var i = (r = r || ie.textureOptions).target || 3553,
    o = r.level || 0,
    a = n.width,
    s = n.height,
    u = r.internalFormat || r.format || 6408,
    l = me(u),
    c = r.format || l.format,
    f = r.type || l.type;
  if ((ve(t, r), t.bindTexture(i, e), 34067 === i)) {
    var m,
      h,
      d = n.width,
      p = n.height;
    if (d / 6 === p) (m = p), (h = [0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0]);
    else if (p / 6 === d) (m = d), (h = [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5]);
    else if (d / 3 == p / 2) (m = d / 3), (h = [0, 0, 1, 0, 2, 0, 0, 1, 1, 1, 2, 1]);
    else {
      if (d / 2 != p / 3) throw "can't figure out cube map from element: " + (n.src ? n.src : n.nodeName);
      (m = d / 2), (h = [0, 0, 1, 0, 0, 1, 1, 1, 0, 2, 1, 2]);
    }
    var v = ae();
    v
      ? ((v.canvas.width = m),
        (v.canvas.height = m),
        (a = m),
        (s = m),
        Te(0, r).forEach(function(e) {
          var r = h[2 * e.ndx + 0] * m,
            i = h[2 * e.ndx + 1] * m;
          v.drawImage(n, r, i, m, m, 0, 0, m, m), t.texImage2D(e.face, o, u, c, f, v.canvas);
        }),
        (v.canvas.width = 1),
        (v.canvas.height = 1))
      : "undefined" != typeof createImageBitmap &&
        ((a = m),
        (s = m),
        Te(0, r).forEach(function(l) {
          var d = h[2 * l.ndx + 0] * m,
            p = h[2 * l.ndx + 1] * m;
          t.texImage2D(l.face, o, u, m, m, 0, c, f, null),
            createImageBitmap(n, d, p, m, m, { premultiplyAlpha: "none", colorSpaceConversion: "none" }).then(function(
              n
            ) {
              ve(t, r),
                t.bindTexture(i, e),
                t.texImage2D(l.face, o, u, c, f, n),
                ye(t, r),
                Ae(r) && we(t, e, r, a, s, u);
            });
        }));
  } else if (32879 === i || 35866 === i) {
    var y = Math.min(n.width, n.height),
      g = Math.max(n.width, n.height),
      _ = g / y;
    if (_ % 1 != 0) throw "can not compute 3D dimensions of element";
    var x = n.width === g ? 1 : 0,
      b = n.height === g ? 1 : 0;
    ge(t),
      t.pixelStorei(3317, 1),
      t.pixelStorei(3314, n.width),
      t.pixelStorei(32878, 0),
      t.pixelStorei(32877, 0),
      t.texImage3D(i, o, u, y, y, y, 0, c, f, null);
    for (var w = 0; w < _; ++w) {
      var A = w * y * x,
        C = w * y * b;
      t.pixelStorei(3316, A), t.pixelStorei(3315, C), t.texSubImage3D(i, o, 0, 0, w, y, y, 1, c, f, n);
    }
    _e(t);
  } else t.texImage2D(i, o, u, c, f, n);
  ye(t, r), Ae(r) && we(t, e, r, a, s, u), be(t, e, r);
}
function Pe() {}
function Se(t, e) {
  return void 0 !== e ||
    (function(t) {
      if ("undefined" != typeof document) {
        var e = document.createElement("a");
        return (
          (e.href = t), e.hostname === location.hostname && e.port === location.port && e.protocol === location.protocol
        );
      }
      var n = new URL(location.href).origin;
      return new URL(t, location.href).origin === n;
    })(t)
    ? e
    : "anonymous";
}
function Ee(t) {
  return (
    ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap) ||
    ("undefined" != typeof ImageData && t instanceof ImageData) ||
    ("undefined" != typeof HTMLElement && t instanceof HTMLElement)
  );
}
function Le(t, e, n) {
  return Ee(t)
    ? (setTimeout(function() {
        n(null, t);
      }),
      t)
    : (function(t, e, n) {
        var r;
        if (((n = n || Pe), (e = Se(t, (e = void 0 !== e ? e : ie.crossOrigin))), "undefined" != typeof Image)) {
          (r = new Image()), void 0 !== e && (r.crossOrigin = e);
          var i = function() {
              r.removeEventListener("error", o), r.removeEventListener("load", a), (r = null);
            },
            o = function() {
              var e = "couldn't load image: " + t;
              O(e), n(e, r), i();
            },
            a = function() {
              n(null, r), i();
            };
          return r.addEventListener("error", o), r.addEventListener("load", a), (r.src = t), r;
        }
        if ("undefined" != typeof ImageBitmap) {
          var s,
            u,
            l = function() {
              n(s, u);
            },
            c = {};
          e && (c.mode = "cors"),
            fetch(t, c)
              .then(function(t) {
                if (!t.ok) throw t;
                return t.blob();
              })
              .then(function(t) {
                return createImageBitmap(t, { premultiplyAlpha: "none", colorSpaceConversion: "none" });
              })
              .then(function(t) {
                (u = t), setTimeout(l);
              })
              .catch(function(t) {
                (s = t), setTimeout(l);
              }),
            (r = null);
        }
        return r;
      })(t, e, n);
}
function Me(t, e, n) {
  var r = (n = n || ie.textureOptions).target || 3553;
  if ((t.bindTexture(r, e), !1 !== n.color)) {
    var i = (function(t) {
      return oe((t = t || ie.textureColor)) ? t : new Uint8Array([255 * t[0], 255 * t[1], 255 * t[2], 255 * t[3]]);
    })(n.color);
    if (34067 === r) for (var o = 0; o < 6; ++o) t.texImage2D(34069 + o, 0, 6408, 1, 1, 0, 6408, 5121, i);
    else
      32879 === r || 35866 === r
        ? t.texImage3D(r, 0, 6408, 1, 1, 1, 0, 6408, 5121, i)
        : t.texImage2D(r, 0, 6408, 1, 1, 0, 6408, 5121, i);
  }
}
function ze(t, e, n, r) {
  r = r || Pe;
  var i = n.src;
  if (6 !== i.length) throw "there must be 6 urls for a cubemap";
  var o = n.level || 0,
    a = n.internalFormat || n.format || 6408,
    s = me(a),
    u = n.format || s.format,
    l = n.type || 5121,
    c = n.target || 3553;
  if (34067 !== c) throw "target must be TEXTURE_CUBE_MAP";
  Me(t, e, n), (n = Object.assign({}, n));
  var f,
    m = 6,
    h = [],
    d = Ce(0, n);
  f = i.map(function(i, s) {
    return Le(
      i,
      n.crossOrigin,
      ((p = d[s]),
      function(i, s) {
        --m,
          i
            ? h.push(i)
            : s.width !== s.height
            ? h.push("cubemap face img is not a square: " + s.src)
            : (ve(t, n),
              t.bindTexture(c, e),
              5 === m
                ? Ce().forEach(function(e) {
                    t.texImage2D(e, o, a, u, l, s);
                  })
                : t.texImage2D(p, o, a, u, l, s),
              ye(t, n),
              Ae(n) && t.generateMipmap(c)),
          0 === m && r(h.length ? h : void 0, e, f);
      })
    );
    var p;
  });
}
function Fe(t, e, n, r) {
  r = r || Pe;
  var i = n.src,
    o = n.internalFormat || n.format || 6408,
    a = me(o),
    s = n.format || a.format,
    u = n.type || 5121,
    l = n.target || 35866;
  if (32879 !== l && 35866 !== l) throw "target must be TEXTURE_3D or TEXTURE_2D_ARRAY";
  Me(t, e, n), (n = Object.assign({}, n));
  var c,
    f = i.length,
    m = [],
    h = n.level || 0,
    d = n.width,
    p = n.height,
    v = i.length,
    y = !0;
  c = i.map(function(i, a) {
    return Le(
      i,
      n.crossOrigin,
      ((g = a),
      function(i, a) {
        if ((--f, i)) m.push(i);
        else {
          if ((ve(t, n), t.bindTexture(l, e), y)) {
            (y = !1),
              (d = n.width || a.width),
              (p = n.height || a.height),
              t.texImage3D(l, h, o, d, p, v, 0, s, u, null);
            for (var _ = 0; _ < v; ++_) t.texSubImage3D(l, h, 0, 0, _, d, p, 1, s, u, a);
          } else {
            var x,
              b = a;
            (a.width === d && a.height === p) ||
              ((b = (x = ae()).canvas), (x.canvas.width = d), (x.canvas.height = p), x.drawImage(a, 0, 0, d, p)),
              t.texSubImage3D(l, h, 0, 0, g, d, p, 1, s, u, b),
              x && b === x.canvas && ((x.canvas.width = 0), (x.canvas.height = 0));
          }
          ye(t, n), Ae(n) && t.generateMipmap(l);
        }
        0 === f && r(m.length ? m : void 0, e, c);
      })
    );
    var g;
  });
}
function Re(t, e, n, r) {
  var i = (r = r || ie.textureOptions).target || 3553;
  t.bindTexture(i, e);
  var o = r.width,
    a = r.height,
    s = r.depth,
    u = r.level || 0,
    l = r.internalFormat || r.format || 6408,
    c = me(l),
    f = r.format || c.format,
    m =
      r.type ||
      (function(t, e, n) {
        return oe(e) ? D(e) : n || 5121;
      })(0, n, c.type);
  if (oe(n)) n instanceof Uint8ClampedArray && (n = new Uint8Array(n.buffer));
  else {
    var h = (function(t) {
      var e = F[t];
      if (!e) throw new Error("unknown gl type");
      return e;
    })(m);
    n = new h(n);
  }
  var d,
    p = (function(t, e) {
      var n = fe(t);
      if (!n) throw "unknown internal format";
      var r = n.bytesPerElementMap[e];
      if (void 0 === r) throw "unknown internal format";
      return r;
    })(l, m),
    v = n.byteLength / p;
  if (v % 1) throw "length wrong size for format: " + re(t, f);
  if (32879 === i || 35866 === i)
    if (o || a || s)
      !o || (a && s)
        ? !a || (o && s)
          ? ((d = de(0, i, o, a, v / s)), (o = d.width), (a = d.height))
          : ((d = de(0, i, o, s, v / a)), (o = d.width), (s = d.height))
        : ((d = de(0, i, a, s, v / o)), (a = d.width), (s = d.height));
    else {
      var y = Math.cbrt(v);
      if (y % 1 != 0) throw "can't guess cube size of array of numElements: " + v;
      (o = y), (a = y), (s = y);
    }
  else (d = de(0, i, o, a, v)), (o = d.width), (a = d.height);
  if ((ge(t), t.pixelStorei(3317, r.unpackAlignment || 1), ve(t, r), 34067 === i)) {
    var g = (v / 6) * (p / n.BYTES_PER_ELEMENT);
    Te(0, r).forEach(function(e) {
      var r = g * e.ndx,
        i = n.subarray(r, r + g);
      t.texImage2D(e.face, u, l, o, a, 0, f, m, i);
    });
  } else
    32879 === i || 35866 === i ? t.texImage3D(i, u, l, o, a, s, 0, f, m, n) : t.texImage2D(i, u, l, o, a, 0, f, m, n);
  return ye(t, r), _e(t), { width: o, height: a, depth: s, type: m };
}
function De(t, e, n) {
  (n = n || Pe), (e = e || ie.textureOptions);
  var r = t.createTexture(),
    i = e.target || 3553,
    o = e.width || 1,
    a = e.height || 1,
    s = e.internalFormat || 6408;
  t.bindTexture(i, r), 34067 === i && (t.texParameteri(i, 10242, 33071), t.texParameteri(i, 10243, 33071));
  var u = e.src;
  if (u)
    if (("function" == typeof u && (u = u(t, e)), "string" == typeof u))
      !(function(t, e, n, r) {
        (r = r || Pe),
          Me(t, e, (n = n || ie.textureOptions)),
          Le((n = Object.assign({}, n)).src, n.crossOrigin, function(i, o) {
            i ? r(i, e, o) : (Ie(t, e, o, n), r(null, e, o));
          });
      })(t, r, e, n);
    else if (oe(u) || (Array.isArray(u) && ("number" == typeof u[0] || Array.isArray(u[0]) || oe(u[0])))) {
      var l = Re(t, r, u, e);
      (o = l.width), (a = l.height);
    } else
      Array.isArray(u) && ("string" == typeof u[0] || Ee(u[0]))
        ? 34067 === i
          ? ze(t, r, e, n)
          : Fe(t, r, e, n)
        : (Ie(t, r, u, e), (o = u.width), (a = u.height));
  else
    !(function(t, e, n) {
      var r = n.target || 3553;
      t.bindTexture(r, e);
      var i = n.level || 0,
        o = n.internalFormat || n.format || 6408,
        a = me(o),
        s = n.format || a.format,
        u = n.type || a.type;
      if ((ve(t, n), 34067 === r))
        for (var l = 0; l < 6; ++l) t.texImage2D(34069 + l, i, o, n.width, n.height, 0, s, u, null);
      else
        32879 === r || 35866 === r
          ? t.texImage3D(r, i, o, n.width, n.height, n.depth, 0, s, u, null)
          : t.texImage2D(r, i, o, n.width, n.height, 0, s, u, null);
      ye(t, n);
    })(t, r, e);
  return Ae(e) && we(t, r, e, o, a, s), be(t, r, e), r;
}
var ke = O;
function Oe(t) {
  return "undefined" != typeof document && document.getElementById ? document.getElementById(t) : null;
}
var je = {};
function Be(t, e) {
  return je[e].bindPoint;
}
function Ge(t, e) {
  return function(n) {
    t.uniform1i(e, n);
  };
}
function Ne(t, e) {
  return function(n) {
    t.uniform1iv(e, n);
  };
}
function Ue(t, e) {
  return function(n) {
    t.uniform2iv(e, n);
  };
}
function Ve(t, e) {
  return function(n) {
    t.uniform3iv(e, n);
  };
}
function We(t, e) {
  return function(n) {
    t.uniform4iv(e, n);
  };
}
function Ye(t, e, n, r) {
  var i = Be(0, e);
  return Qt(t)
    ? function(e) {
        var o, a;
        B(0, e) ? ((o = e), (a = null)) : ((o = e.texture), (a = e.sampler)),
          t.uniform1i(r, n),
          t.activeTexture(33984 + n),
          t.bindTexture(i, o),
          t.bindSampler(n, a);
      }
    : function(e) {
        t.uniform1i(r, n), t.activeTexture(33984 + n), t.bindTexture(i, e);
      };
}
function He(t, e, n, r, i) {
  for (var o = Be(0, e), a = new Int32Array(i), s = 0; s < i; ++s) a[s] = n + s;
  return Qt(t)
    ? function(e) {
        t.uniform1iv(r, a),
          e.forEach(function(e, r) {
            var i, s;
            t.activeTexture(33984 + a[r]),
              B(0, e) ? ((i = e), (s = null)) : ((i = e.texture), (s = e.sampler)),
              t.bindSampler(n, s),
              t.bindTexture(o, i);
          });
      }
    : function(e) {
        t.uniform1iv(r, a),
          e.forEach(function(e, n) {
            t.activeTexture(33984 + a[n]), t.bindTexture(o, e);
          });
      };
}
function Xe(t, e) {
  return function(n) {
    if (n.value)
      switch ((t.disableVertexAttribArray(e), n.value.length)) {
        case 4:
          t.vertexAttrib4fv(e, n.value);
          break;
        case 3:
          t.vertexAttrib3fv(e, n.value);
          break;
        case 2:
          t.vertexAttrib2fv(e, n.value);
          break;
        case 1:
          t.vertexAttrib1fv(e, n.value);
          break;
        default:
          throw new Error("the length of a float constant value must be between 1 and 4!");
      }
    else
      t.bindBuffer(34962, n.buffer),
        t.enableVertexAttribArray(e),
        t.vertexAttribPointer(
          e,
          n.numComponents || n.size,
          n.type || 5126,
          n.normalize || !1,
          n.stride || 0,
          n.offset || 0
        ),
        void 0 !== n.divisor && t.vertexAttribDivisor(e, n.divisor);
  };
}
function qe(t, e) {
  return function(n) {
    if (n.value) {
      if ((t.disableVertexAttribArray(e), 4 !== n.value.length))
        throw new Error("The length of an integer constant value must be 4!");
      t.vertexAttrib4iv(e, n.value);
    } else
      t.bindBuffer(34962, n.buffer),
        t.enableVertexAttribArray(e),
        t.vertexAttribIPointer(e, n.numComponents || n.size, n.type || 5124, n.stride || 0, n.offset || 0),
        void 0 !== n.divisor && t.vertexAttribDivisor(e, n.divisor);
  };
}
function Ze(t, e) {
  return function(n) {
    if (n.value) {
      if ((t.disableVertexAttribArray(e), 4 !== n.value.length))
        throw new Error("The length of an unsigned integer constant value must be 4!");
      t.vertexAttrib4uiv(e, n.value);
    } else
      t.bindBuffer(34962, n.buffer),
        t.enableVertexAttribArray(e),
        t.vertexAttribIPointer(e, n.numComponents || n.size, n.type || 5125, n.stride || 0, n.offset || 0),
        void 0 !== n.divisor && t.vertexAttribDivisor(e, n.divisor);
  };
}
function Ke(t, e, n) {
  var r = n.size,
    i = n.count;
  return function(n) {
    t.bindBuffer(34962, n.buffer);
    for (
      var o = n.size || n.numComponents || r,
        a = o / i,
        s = n.type || 5126,
        u = je[s].size * o,
        l = n.normalize || !1,
        c = n.offset || 0,
        f = u / i,
        m = 0;
      m < i;
      ++m
    )
      t.enableVertexAttribArray(e + m),
        t.vertexAttribPointer(e + m, a, s, l, u, c + f * m),
        void 0 !== n.divisor && t.vertexAttribDivisor(e + m, n.divisor);
  };
}
(je[5126] = {
  Type: Float32Array,
  size: 4,
  setter: function(t, e) {
    return function(n) {
      t.uniform1f(e, n);
    };
  },
  arraySetter: function(t, e) {
    return function(n) {
      t.uniform1fv(e, n);
    };
  }
}),
  (je[35664] = {
    Type: Float32Array,
    size: 8,
    setter: function(t, e) {
      return function(n) {
        t.uniform2fv(e, n);
      };
    }
  }),
  (je[35665] = {
    Type: Float32Array,
    size: 12,
    setter: function(t, e) {
      return function(n) {
        t.uniform3fv(e, n);
      };
    }
  }),
  (je[35666] = {
    Type: Float32Array,
    size: 16,
    setter: function(t, e) {
      return function(n) {
        t.uniform4fv(e, n);
      };
    }
  }),
  (je[5124] = { Type: Int32Array, size: 4, setter: Ge, arraySetter: Ne }),
  (je[35667] = { Type: Int32Array, size: 8, setter: Ue }),
  (je[35668] = { Type: Int32Array, size: 12, setter: Ve }),
  (je[35669] = { Type: Int32Array, size: 16, setter: We }),
  (je[5125] = {
    Type: Uint32Array,
    size: 4,
    setter: function(t, e) {
      return function(n) {
        t.uniform1ui(e, n);
      };
    },
    arraySetter: function(t, e) {
      return function(n) {
        t.uniform1uiv(e, n);
      };
    }
  }),
  (je[36294] = {
    Type: Uint32Array,
    size: 8,
    setter: function(t, e) {
      return function(n) {
        t.uniform2uiv(e, n);
      };
    }
  }),
  (je[36295] = {
    Type: Uint32Array,
    size: 12,
    setter: function(t, e) {
      return function(n) {
        t.uniform3uiv(e, n);
      };
    }
  }),
  (je[36296] = {
    Type: Uint32Array,
    size: 16,
    setter: function(t, e) {
      return function(n) {
        t.uniform4uiv(e, n);
      };
    }
  }),
  (je[35670] = { Type: Uint32Array, size: 4, setter: Ge, arraySetter: Ne }),
  (je[35671] = { Type: Uint32Array, size: 8, setter: Ue }),
  (je[35672] = { Type: Uint32Array, size: 12, setter: Ve }),
  (je[35673] = { Type: Uint32Array, size: 16, setter: We }),
  (je[35674] = {
    Type: Float32Array,
    size: 16,
    setter: function(t, e) {
      return function(n) {
        t.uniformMatrix2fv(e, !1, n);
      };
    }
  }),
  (je[35675] = {
    Type: Float32Array,
    size: 36,
    setter: function(t, e) {
      return function(n) {
        t.uniformMatrix3fv(e, !1, n);
      };
    }
  }),
  (je[35676] = {
    Type: Float32Array,
    size: 64,
    setter: function(t, e) {
      return function(n) {
        t.uniformMatrix4fv(e, !1, n);
      };
    }
  }),
  (je[35685] = {
    Type: Float32Array,
    size: 24,
    setter: function(t, e) {
      return function(n) {
        t.uniformMatrix2x3fv(e, !1, n);
      };
    }
  }),
  (je[35686] = {
    Type: Float32Array,
    size: 32,
    setter: function(t, e) {
      return function(n) {
        t.uniformMatrix2x4fv(e, !1, n);
      };
    }
  }),
  (je[35687] = {
    Type: Float32Array,
    size: 24,
    setter: function(t, e) {
      return function(n) {
        t.uniformMatrix3x2fv(e, !1, n);
      };
    }
  }),
  (je[35688] = {
    Type: Float32Array,
    size: 48,
    setter: function(t, e) {
      return function(n) {
        t.uniformMatrix3x4fv(e, !1, n);
      };
    }
  }),
  (je[35689] = {
    Type: Float32Array,
    size: 32,
    setter: function(t, e) {
      return function(n) {
        t.uniformMatrix4x2fv(e, !1, n);
      };
    }
  }),
  (je[35690] = {
    Type: Float32Array,
    size: 48,
    setter: function(t, e) {
      return function(n) {
        t.uniformMatrix4x3fv(e, !1, n);
      };
    }
  }),
  (je[35678] = { Type: null, size: 0, setter: Ye, arraySetter: He, bindPoint: 3553 }),
  (je[35680] = { Type: null, size: 0, setter: Ye, arraySetter: He, bindPoint: 34067 }),
  (je[35679] = { Type: null, size: 0, setter: Ye, arraySetter: He, bindPoint: 32879 }),
  (je[35682] = { Type: null, size: 0, setter: Ye, arraySetter: He, bindPoint: 3553 }),
  (je[36289] = { Type: null, size: 0, setter: Ye, arraySetter: He, bindPoint: 35866 }),
  (je[36292] = { Type: null, size: 0, setter: Ye, arraySetter: He, bindPoint: 35866 }),
  (je[36293] = { Type: null, size: 0, setter: Ye, arraySetter: He, bindPoint: 34067 }),
  (je[36298] = { Type: null, size: 0, setter: Ye, arraySetter: He, bindPoint: 3553 }),
  (je[36299] = { Type: null, size: 0, setter: Ye, arraySetter: He, bindPoint: 32879 }),
  (je[36300] = { Type: null, size: 0, setter: Ye, arraySetter: He, bindPoint: 34067 }),
  (je[36303] = { Type: null, size: 0, setter: Ye, arraySetter: He, bindPoint: 35866 }),
  (je[36306] = { Type: null, size: 0, setter: Ye, arraySetter: He, bindPoint: 3553 }),
  (je[36307] = { Type: null, size: 0, setter: Ye, arraySetter: He, bindPoint: 32879 }),
  (je[36308] = { Type: null, size: 0, setter: Ye, arraySetter: He, bindPoint: 34067 }),
  (je[36311] = { Type: null, size: 0, setter: Ye, arraySetter: He, bindPoint: 35866 });
var Je = {};
(Je[5126] = { size: 4, setter: Xe }),
  (Je[35664] = { size: 8, setter: Xe }),
  (Je[35665] = { size: 12, setter: Xe }),
  (Je[35666] = { size: 16, setter: Xe }),
  (Je[5124] = { size: 4, setter: qe }),
  (Je[35667] = { size: 8, setter: qe }),
  (Je[35668] = { size: 12, setter: qe }),
  (Je[35669] = { size: 16, setter: qe }),
  (Je[5125] = { size: 4, setter: Ze }),
  (Je[36294] = { size: 8, setter: Ze }),
  (Je[36295] = { size: 12, setter: Ze }),
  (Je[36296] = { size: 16, setter: Ze }),
  (Je[35670] = { size: 4, setter: qe }),
  (Je[35671] = { size: 8, setter: qe }),
  (Je[35672] = { size: 12, setter: qe }),
  (Je[35673] = { size: 16, setter: qe }),
  (Je[35674] = { size: 4, setter: Ke, count: 2 }),
  (Je[35675] = { size: 9, setter: Ke, count: 3 }),
  (Je[35676] = { size: 16, setter: Ke, count: 4 });
var Qe = /^[ \t]*\n/;
function $e(t, e, n, r) {
  var i = r || ke,
    o = t.createShader(n),
    a = 0;
  if (
    (Qe.test(e) && ((a = 1), (e = e.replace(Qe, ""))),
    t.shaderSource(o, e),
    t.compileShader(o),
    !t.getShaderParameter(o, 35713))
  ) {
    var s = t.getShaderInfoLog(o);
    return (
      i(
        (function(t, e) {
          return (
            (e = e || 0),
            ++e,
            t
              .split("\n")
              .map(function(t, n) {
                return n + e + ": " + t;
              })
              .join("\n")
          );
        })(e, a) +
          "\n*** Error compiling shader: " +
          s
      ),
      t.deleteShader(o),
      null
    );
  }
  return o;
}
function tn(t, e, n) {
  var r, i;
  if (("function" == typeof e && ((n = e), (e = void 0)), "function" == typeof t)) (n = t), (t = void 0);
  else if (t && !Array.isArray(t)) {
    if (t.errorCallback) return t;
    var o = t;
    (n = o.errorCallback), (t = o.attribLocations), (r = o.transformFeedbackVaryings), (i = o.transformFeedbackMode);
  }
  var a = { errorCallback: n || ke, transformFeedbackVaryings: r, transformFeedbackMode: i };
  if (t) {
    var s = {};
    Array.isArray(t)
      ? t.forEach(function(t, n) {
          s[t] = e ? e[n] : n;
        })
      : (s = t),
      (a.attribLocations = s);
  }
  return a;
}
var en = ["VERTEX_SHADER", "FRAGMENT_SHADER"];
function nn(t, e) {
  e.forEach(function(e) {
    t.deleteShader(e);
  });
}
function rn(t, e, n, r, i) {
  for (var o = tn(n, r, i), a = [], s = 0; s < e.length; ++s) {
    var u = $e(t, e[s], t[en[s]], o.errorCallback);
    if (!u) return null;
    a.push(u);
  }
  return (function(t, e, n, r, i) {
    for (var o, a, s = tn(n, r, i), u = [], l = [], c = 0; c < e.length; ++c) {
      var f = e[c];
      if ("string" == typeof f) {
        var m = Oe(f),
          h = m ? m.text : f,
          d = t[en[c]];
        m && m.type && (d = ((a = m.type).indexOf("frag") >= 0 ? 35632 : a.indexOf("vert") >= 0 ? 35633 : void 0) || d),
          (f = $e(t, h, d, s.errorCallback)),
          l.push(f);
      }
      (o = f), "undefined" != typeof WebGLShader && o instanceof WebGLShader && u.push(f);
    }
    if (u.length !== e.length) return s.errorCallback("not enough shaders for program"), nn(t, l), null;
    var p = t.createProgram();
    u.forEach(function(e) {
      t.attachShader(p, e);
    }),
      s.attribLocations &&
        Object.keys(s.attribLocations).forEach(function(e) {
          t.bindAttribLocation(p, s.attribLocations[e], e);
        });
    var v = s.transformFeedbackVaryings;
    if (
      (v &&
        (v.attribs && (v = v.attribs),
        Array.isArray(v) || (v = Object.keys(v)),
        t.transformFeedbackVaryings(p, v, s.transformFeedbackMode || 35981)),
      t.linkProgram(p),
      !t.getProgramParameter(p, 35714))
    ) {
      var y = t.getProgramInfoLog(p);
      return s.errorCallback("Error in program linking:" + y), t.deleteProgram(p), nn(t, l), null;
    }
    return p;
  })(t, a, o);
}
function on(t) {
  var e = t.name;
  return e.startsWith("gl_") || e.startsWith("webgl_");
}
function an(t, e) {
  for (var n = t.uniformSetters || t, r = arguments.length, i = 1; i < r; ++i) {
    var o = arguments[i];
    if (Array.isArray(o)) for (var a = o.length, s = 0; s < a; ++s) an(n, o[s]);
    else
      for (var u in o) {
        var l = n[u];
        l && l(o[u]);
      }
  }
}
function sn(t, e, n) {
  n.vertexArrayObject
    ? t.bindVertexArray(n.vertexArrayObject)
    : (!(function(t, e) {
        for (var n in e) {
          var r = t[n];
          r && r(e[n]);
        }
      })(e.attribSetters || e, n.attribs),
      n.indices && t.bindBuffer(34963, n.indices));
}
function un(t, e) {
  var n = {
    program: e,
    uniformSetters: (function(t, e) {
      var n = 0;
      function r(e, r, i) {
        var o,
          a = r.size > 1 && "[0]" === r.name.substr(-3),
          s = r.type,
          u = je[s];
        if (!u) throw new Error("unknown type: 0x".concat(s.toString(16)));
        if (u.bindPoint) {
          var l = n;
          (n += r.size), (o = a ? u.arraySetter(t, s, l, i, r.size) : u.setter(t, s, l, i, r.size));
        } else o = u.arraySetter && a ? u.arraySetter(t, i) : u.setter(t, i);
        return (o.location = i), o;
      }
      for (var i = {}, o = t.getProgramParameter(e, 35718), a = 0; a < o; ++a) {
        var s = t.getActiveUniform(e, a);
        if (!on(s)) {
          var u = s.name;
          "[0]" === u.substr(-3) && (u = u.substr(0, u.length - 3));
          var l = t.getUniformLocation(e, s.name);
          l && (i[u] = r(0, s, l));
        }
      }
      return i;
    })(t, e),
    attribSetters: (function(t, e) {
      for (var n = {}, r = t.getProgramParameter(e, 35721), i = 0; i < r; ++i) {
        var o = t.getActiveAttrib(e, i);
        if (!on(o)) {
          var a = t.getAttribLocation(e, o.name),
            s = Je[o.type],
            u = s.setter(t, a, s);
          (u.location = a), (n[o.name] = u);
        }
      }
      return n;
    })(t, e)
  };
  return (
    Qt(t) &&
      ((n.uniformBlockSpec = (function(t, e) {
        for (var n = t.getProgramParameter(e, 35718), r = [], i = [], o = 0; o < n; ++o) {
          i.push(o), r.push({});
          var a = t.getActiveUniform(e, o);
          if (on(a)) break;
          r[o].name = a.name;
        }
        [
          ["UNIFORM_TYPE", "type"],
          ["UNIFORM_SIZE", "size"],
          ["UNIFORM_BLOCK_INDEX", "blockNdx"],
          ["UNIFORM_OFFSET", "offset"]
        ].forEach(function(n) {
          var o = n[0],
            a = n[1];
          t.getActiveUniforms(e, i, t[o]).forEach(function(t, e) {
            r[e][a] = t;
          });
        });
        for (var s = {}, u = t.getProgramParameter(e, 35382), l = 0; l < u; ++l) {
          var c = t.getActiveUniformBlockName(e, l),
            f = {
              index: t.getUniformBlockIndex(e, c),
              usedByVertexShader: t.getActiveUniformBlockParameter(e, l, 35396),
              usedByFragmentShader: t.getActiveUniformBlockParameter(e, l, 35398),
              size: t.getActiveUniformBlockParameter(e, l, 35392),
              uniformIndices: t.getActiveUniformBlockParameter(e, l, 35395)
            };
          (f.used = f.usedByVertexShader || f.usedByFragmentShader), (s[c] = f);
        }
        return { blockSpecs: s, uniformData: r };
      })(t, e)),
      (n.transformFeedbackInfo = (function(t, e) {
        for (var n = {}, r = t.getProgramParameter(e, 35971), i = 0; i < r; ++i) {
          var o = t.getTransformFeedbackVarying(e, i);
          n[o.name] = { index: i, type: o.type, size: o.size };
        }
        return n;
      })(t, e))),
    n
  );
}
function ln(t, e, n) {
  var r = t.createVertexArray();
  return (
    t.bindVertexArray(r),
    e.length || (e = [e]),
    e.forEach(function(e) {
      sn(t, e, n);
    }),
    t.bindVertexArray(null),
    { numElements: n.numElements, elementType: n.elementType, vertexArrayObject: r }
  );
}
var cn = !0,
  fn = /^(.*?)_/;
function mn(t, e) {
  re(t, 0);
  var n = t.getExtension(e);
  if (n) {
    var r = {},
      i = fn.exec(e)[1],
      o = "_" + i;
    for (var a in n) {
      var s = n[a],
        u = "function" == typeof s,
        l = u ? i : o,
        c = a;
      a.endsWith(l) && (c = a.substring(0, a.length - l.length)),
        void 0 !== t[c]
          ? u || t[c] === s || j(c, t[c], s, a)
          : u
          ? (t[c] = (function(t) {
              return function() {
                return t.apply(n, arguments);
              };
            })(s))
          : ((t[c] = s), (r[c] = s));
    }
    (r.constructor = { name: n.constructor.name }), re(r, 0);
  }
  return n;
}
var hn = [
  "ANGLE_instanced_arrays",
  "EXT_blend_minmax",
  "EXT_color_buffer_float",
  "EXT_color_buffer_half_float",
  "EXT_disjoint_timer_query",
  "EXT_disjoint_timer_query_webgl2",
  "EXT_frag_depth",
  "EXT_sRGB",
  "EXT_shader_texture_lod",
  "EXT_texture_filter_anisotropic",
  "OES_element_index_uint",
  "OES_standard_derivatives",
  "OES_texture_float",
  "OES_texture_float_linear",
  "OES_texture_half_float",
  "OES_texture_half_float_linear",
  "OES_vertex_array_object",
  "WEBGL_color_buffer_float",
  "WEBGL_compressed_texture_atc",
  "WEBGL_compressed_texture_etc1",
  "WEBGL_compressed_texture_pvrtc",
  "WEBGL_compressed_texture_s3tc",
  "WEBGL_compressed_texture_s3tc_srgb",
  "WEBGL_depth_texture",
  "WEBGL_draw_buffers"
];
function dn(t) {
  for (var e = 0; e < hn.length; ++e) mn(t, hn[e]);
}
function pn(t, e) {
  return (function(t, e) {
    for (var n = ["webgl", "experimental-webgl"], r = null, i = 0; i < n.length; ++i)
      if ((r = t.getContext(n[i], e))) {
        cn && dn(r);
        break;
      }
    return r;
  })(t, e);
}
function vn(t, e) {
  (e = e || 1), (e = Math.max(0, e));
  var n = (t.clientWidth * e) | 0,
    r = (t.clientHeight * e) | 0;
  return (t.width !== n || t.height !== r) && ((t.width = n), (t.height = r), !0);
}
var yn = (function() {
    function t(n, r) {
      var o = this;
      e(this, t),
        i(this, "gl", null),
        i(this, "isWebGL2", null),
        i(this, "init", function() {
          var t = o.gl;
          t.viewport(0, 0, t.canvas.width, t.canvas.height),
            t.clearColor(0, 0, 0, 1),
            t.enable(t.DEPTH_TEST),
            t.enable(t.CULL_FACE),
            t.enable(t.BLEND),
            t.blendFunc(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA);
        }),
        i(this, "resize", function(t, e) {
          o.gl.viewport(0, 0, t, e);
        }),
        i(this, "prepareRenderFrame", function() {
          o.gl.clear(o.gl.COLOR_BUFFER_BIT | o.gl.DEPTH_BUFFER_BIT);
        }),
        (this.gl = pn(n, r)),
        (this.isWebGL2 = Qt(this.gl) && $t(this.gl)),
        dn(this.gl),
        this.gl.drawArraysInstanced && this.gl.createVertexArray
          ? vn(n)
          : alert("need drawArraysInstanced and createVertexArray");
    }
    return (
      r(t, [
        {
          key: "clearColor",
          set: function(t) {
            this.gl.clearColor(t[0], t[1], t[2], t[3]);
          }
        }
      ]),
      t
    );
  })(),
  gn = "undefined" != typeof Float32Array ? Float32Array : Array;
function _n() {
  var t = new gn(16);
  return (
    gn != Float32Array &&
      ((t[1] = 0),
      (t[2] = 0),
      (t[3] = 0),
      (t[4] = 0),
      (t[6] = 0),
      (t[7] = 0),
      (t[8] = 0),
      (t[9] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0)),
    (t[0] = 1),
    (t[5] = 1),
    (t[10] = 1),
    (t[15] = 1),
    t
  );
}
function xn(t) {
  return (
    (t[0] = 1),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 0),
    (t[5] = 1),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 0),
    (t[9] = 0),
    (t[10] = 1),
    (t[11] = 0),
    (t[12] = 0),
    (t[13] = 0),
    (t[14] = 0),
    (t[15] = 1),
    t
  );
}
function bn(t, e) {
  var n = e[0],
    r = e[1],
    i = e[2],
    o = e[3],
    a = e[4],
    s = e[5],
    u = e[6],
    l = e[7],
    c = e[8],
    f = e[9],
    m = e[10],
    h = e[11],
    d = e[12],
    p = e[13],
    v = e[14],
    y = e[15],
    g = n * s - r * a,
    _ = n * u - i * a,
    x = n * l - o * a,
    b = r * u - i * s,
    w = r * l - o * s,
    A = i * l - o * u,
    C = c * p - f * d,
    T = c * v - m * d,
    I = c * y - h * d,
    P = f * v - m * p,
    S = f * y - h * p,
    E = m * y - h * v,
    L = g * E - _ * S + x * P + b * I - w * T + A * C;
  return L
    ? ((L = 1 / L),
      (t[0] = (s * E - u * S + l * P) * L),
      (t[1] = (i * S - r * E - o * P) * L),
      (t[2] = (p * A - v * w + y * b) * L),
      (t[3] = (m * w - f * A - h * b) * L),
      (t[4] = (u * I - a * E - l * T) * L),
      (t[5] = (n * E - i * I + o * T) * L),
      (t[6] = (v * x - d * A - y * _) * L),
      (t[7] = (c * A - m * x + h * _) * L),
      (t[8] = (a * S - s * I + l * C) * L),
      (t[9] = (r * I - n * S - o * C) * L),
      (t[10] = (d * w - p * x + y * g) * L),
      (t[11] = (f * x - c * w - h * g) * L),
      (t[12] = (s * T - a * P - u * C) * L),
      (t[13] = (n * P - r * T + i * C) * L),
      (t[14] = (p * _ - d * b - v * g) * L),
      (t[15] = (c * b - f * _ + m * g) * L),
      t)
    : null;
}
function wn(t, e, n) {
  var r = e[0],
    i = e[1],
    o = e[2],
    a = e[3],
    s = e[4],
    u = e[5],
    l = e[6],
    c = e[7],
    f = e[8],
    m = e[9],
    h = e[10],
    d = e[11],
    p = e[12],
    v = e[13],
    y = e[14],
    g = e[15],
    _ = n[0],
    x = n[1],
    b = n[2],
    w = n[3];
  return (
    (t[0] = _ * r + x * s + b * f + w * p),
    (t[1] = _ * i + x * u + b * m + w * v),
    (t[2] = _ * o + x * l + b * h + w * y),
    (t[3] = _ * a + x * c + b * d + w * g),
    (_ = n[4]),
    (x = n[5]),
    (b = n[6]),
    (w = n[7]),
    (t[4] = _ * r + x * s + b * f + w * p),
    (t[5] = _ * i + x * u + b * m + w * v),
    (t[6] = _ * o + x * l + b * h + w * y),
    (t[7] = _ * a + x * c + b * d + w * g),
    (_ = n[8]),
    (x = n[9]),
    (b = n[10]),
    (w = n[11]),
    (t[8] = _ * r + x * s + b * f + w * p),
    (t[9] = _ * i + x * u + b * m + w * v),
    (t[10] = _ * o + x * l + b * h + w * y),
    (t[11] = _ * a + x * c + b * d + w * g),
    (_ = n[12]),
    (x = n[13]),
    (b = n[14]),
    (w = n[15]),
    (t[12] = _ * r + x * s + b * f + w * p),
    (t[13] = _ * i + x * u + b * m + w * v),
    (t[14] = _ * o + x * l + b * h + w * y),
    (t[15] = _ * a + x * c + b * d + w * g),
    t
  );
}
function An(t, e, n, r, i) {
  var o,
    a = 1 / Math.tan(e / 2);
  return (
    (t[0] = a / n),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 0),
    (t[5] = a),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 0),
    (t[9] = 0),
    (t[11] = -1),
    (t[12] = 0),
    (t[13] = 0),
    (t[15] = 0),
    null != i && i !== 1 / 0
      ? ((o = 1 / (r - i)), (t[10] = (i + r) * o), (t[14] = 2 * i * r * o))
      : ((t[10] = -1), (t[14] = -2 * r)),
    t
  );
}
function Cn(t, e, n, r) {
  var i,
    o,
    a,
    s,
    u,
    l,
    c,
    f,
    m,
    h,
    d = e[0],
    p = e[1],
    v = e[2],
    y = r[0],
    g = r[1],
    _ = r[2],
    x = n[0],
    b = n[1],
    w = n[2];
  return Math.abs(d - x) < 1e-6 && Math.abs(p - b) < 1e-6 && Math.abs(v - w) < 1e-6
    ? xn(t)
    : ((c = d - x),
      (f = p - b),
      (m = v - w),
      (i = g * (m *= h = 1 / Math.hypot(c, f, m)) - _ * (f *= h)),
      (o = _ * (c *= h) - y * m),
      (a = y * f - g * c),
      (h = Math.hypot(i, o, a)) ? ((i *= h = 1 / h), (o *= h), (a *= h)) : ((i = 0), (o = 0), (a = 0)),
      (s = f * a - m * o),
      (u = m * i - c * a),
      (l = c * o - f * i),
      (h = Math.hypot(s, u, l)) ? ((s *= h = 1 / h), (u *= h), (l *= h)) : ((s = 0), (u = 0), (l = 0)),
      (t[0] = i),
      (t[1] = s),
      (t[2] = c),
      (t[3] = 0),
      (t[4] = o),
      (t[5] = u),
      (t[6] = f),
      (t[7] = 0),
      (t[8] = a),
      (t[9] = l),
      (t[10] = m),
      (t[11] = 0),
      (t[12] = -(i * d + o * p + a * v)),
      (t[13] = -(s * d + u * p + l * v)),
      (t[14] = -(c * d + f * p + m * v)),
      (t[15] = 1),
      t);
}
function Tn() {
  var t = new gn(3);
  return gn != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)), t;
}
function In(t, e, n) {
  var r = new gn(3);
  return (r[0] = t), (r[1] = e), (r[2] = n), r;
}
function Pn(t, e, n) {
  return (t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), (t[2] = e[2] + n[2]), t;
}
function Sn(t, e, n) {
  return (t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), (t[2] = e[2] - n[2]), t;
}
function En(t, e, n) {
  return (t[0] = e[0] * n), (t[1] = e[1] * n), (t[2] = e[2] * n), t;
}
function Ln(t, e) {
  var n = e[0],
    r = e[1],
    i = e[2],
    o = n * n + r * r + i * i;
  return o > 0 && (o = 1 / Math.sqrt(o)), (t[0] = e[0] * o), (t[1] = e[1] * o), (t[2] = e[2] * o), t;
}
function Mn(t, e) {
  return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
}
function zn(t, e, n) {
  var r = e[0],
    i = e[1],
    o = e[2],
    a = n[0],
    s = n[1],
    u = n[2];
  return (t[0] = i * u - o * s), (t[1] = o * a - r * u), (t[2] = r * s - i * a), t;
}
function Fn(t, e, n, r) {
  var i = e[0],
    o = e[1],
    a = e[2];
  return (t[0] = i + r * (n[0] - i)), (t[1] = o + r * (n[1] - o)), (t[2] = a + r * (n[2] - a)), t;
}
function Rn(t, e, n) {
  var r = e[0],
    i = e[1],
    o = e[2],
    a = n[3] * r + n[7] * i + n[11] * o + n[15];
  return (
    (a = a || 1),
    (t[0] = (n[0] * r + n[4] * i + n[8] * o + n[12]) / a),
    (t[1] = (n[1] * r + n[5] * i + n[9] * o + n[13]) / a),
    (t[2] = (n[2] * r + n[6] * i + n[10] * o + n[14]) / a),
    t
  );
}
Math.hypot ||
  (Math.hypot = function() {
    for (var t = 0, e = arguments.length; e--; ) t += arguments[e] * arguments[e];
    return Math.sqrt(t);
  });
var Dn,
  kn = function(t) {
    var e = t[0],
      n = t[1],
      r = t[2];
    return Math.hypot(e, n, r);
  };
Dn = Tn();
!(function() {
  var t,
    e = ((t = new gn(4)), gn != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0)), t);
})();
function On() {
  var t = new gn(4);
  return gn != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)), (t[3] = 1), t;
}
function jn(t, e, n, r) {
  var i,
    o,
    a,
    s,
    u,
    l = e[0],
    c = e[1],
    f = e[2],
    m = e[3],
    h = n[0],
    d = n[1],
    p = n[2],
    v = n[3];
  return (
    (o = l * h + c * d + f * p + m * v) < 0 && ((o = -o), (h = -h), (d = -d), (p = -p), (v = -v)),
    1 - o > 1e-6
      ? ((i = Math.acos(o)), (a = Math.sin(i)), (s = Math.sin((1 - r) * i) / a), (u = Math.sin(r * i) / a))
      : ((s = 1 - r), (u = r)),
    (t[0] = s * l + u * h),
    (t[1] = s * c + u * d),
    (t[2] = s * f + u * p),
    (t[3] = s * m + u * v),
    t
  );
}
var Bn,
  Gn,
  Nn,
  Un,
  Vn,
  Wn,
  Yn,
  Hn = function(t, e) {
    var n = e[0],
      r = e[1],
      i = e[2],
      o = e[3],
      a = n * n + r * r + i * i + o * o;
    return a > 0 && (a = 1 / Math.sqrt(a)), (t[0] = n * a), (t[1] = r * a), (t[2] = i * a), (t[3] = o * a), t;
  };
(Bn = Tn()),
  (Gn = In(1, 0, 0)),
  (Nn = In(0, 1, 0)),
  (Un = On()),
  (Vn = On()),
  (Wn = new gn(9)),
  gn != Float32Array && ((Wn[1] = 0), (Wn[2] = 0), (Wn[3] = 0), (Wn[5] = 0), (Wn[6] = 0), (Wn[7] = 0)),
  (Wn[0] = 1),
  (Wn[4] = 1),
  (Wn[8] = 1),
  (Yn = Wn);
!(function() {
  var t = (function() {
    var t = new gn(2);
    return gn != Float32Array && ((t[0] = 0), (t[1] = 0)), t;
  })();
})();
var Xn = function t(n, r) {
    var o = this;
    e(this, t),
      i(this, "fov", void 0),
      i(this, "width", void 0),
      i(this, "height", void 0),
      i(this, "aspect", void 0),
      i(this, "zNear", void 0),
      i(this, "zFar", void 0),
      i(this, "projection", void 0),
      i(this, "eye", void 0),
      i(this, "target", void 0),
      i(this, "up", void 0),
      i(this, "view", void 0),
      i(this, "viewProjection", void 0),
      i(this, "world", void 0),
      i(this, "resize", function(t, e) {
        (o.width = t),
          (o.height = e),
          (o.aspect = t / e),
          (o.projection = _n()),
          An(o.projection, o.fov, o.aspect, o.zNear, o.zFar);
      }),
      i(this, "update", function() {
        Cn(o.view, o.eye, o.target, o.up), bn(o.camera, o.view), wn(o.viewProjection, o.projection, o.view);
      }),
      i(this, "setPosition", function(t) {
        o.eye = t;
      }),
      i(this, "getUniforms", function() {
        var t = {};
        return (
          (t.u_viewInverse = o.camera),
          (t.u_world = o.world),
          (t.u_worldInverseTranspose = _n()),
          (t.u_view = o.view),
          (t.u_resolution = [o.width, o.height]),
          bn(t.u_worldInverseTranspose, o.world),
          (function(t, e) {
            if (t === e) {
              var n = e[1],
                r = e[2],
                i = e[3],
                o = e[6],
                a = e[7],
                s = e[11];
              (t[1] = e[4]),
                (t[2] = e[8]),
                (t[3] = e[12]),
                (t[4] = n),
                (t[6] = e[9]),
                (t[7] = e[13]),
                (t[8] = r),
                (t[9] = o),
                (t[11] = e[14]),
                (t[12] = i),
                (t[13] = a),
                (t[14] = s);
            } else
              (t[0] = e[0]),
                (t[1] = e[4]),
                (t[2] = e[8]),
                (t[3] = e[12]),
                (t[4] = e[1]),
                (t[5] = e[5]),
                (t[6] = e[9]),
                (t[7] = e[13]),
                (t[8] = e[2]),
                (t[9] = e[6]),
                (t[10] = e[10]),
                (t[11] = e[14]),
                (t[12] = e[3]),
                (t[13] = e[7]),
                (t[14] = e[11]),
                (t[15] = e[15]);
          })(t.u_worldInverseTranspose, t.u_worldInverseTranspose),
          (t.u_worldViewProjection = _n()),
          wn(t.u_worldViewProjection, o.viewProjection, o.world),
          (t.u_cameraPos = o.eye),
          t
        );
      }),
      i(this, "getRayFromScreen", function(t, e) {
        var n = 2 * t - 1,
          r = 2 * e - 1,
          i = o.unproject([n, r, -1]),
          a = o.unproject([n, r, 1]),
          s = Tn();
        return Sn(s, a, i), Ln(s, s), { origin: i, direction: s };
      }),
      i(this, "unproject", function(t) {
        var e = _n();
        bn(e, o.viewProjection);
        var n = In(t[0], t[1], t[2]);
        return Rn(n, n, e), n;
      }),
      i(this, "project", function(t) {
        var e = (function(t) {
          var e = new gn(3);
          return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), e;
        })(t);
        return Rn(e, e, o.viewProjection), [(e[0] + 1) / 2, (e[1] + 1) / 2];
      }),
      (this.fov = (Math.PI / 180) * 30),
      (this.width = n),
      (this.height = r),
      (this.aspect = n / r),
      (this.zNear = 0.01),
      (this.zFar = 100),
      (this.projection = _n()),
      An(this.projection, this.fov, this.aspect, this.zNear, this.zFar),
      (this.eye = [0, 0, 6]),
      (this.target = [0, 0, 0]),
      (this.up = [0, 1, 0]),
      (this.view = _n()),
      Cn(this.view, this.eye, this.target, this.up),
      (this.camera = _n()),
      bn(this.camera, this.view),
      (this.viewProjection = _n()),
      wn(this.viewProjection, this.projection, this.view),
      (this.world = _n()),
      xn(this.world);
  },
  qn = function t(n, r) {
    var o = this;
    e(this, t),
      i(this, "resize", function(t, e) {
        o.camera.resize(t, e);
      }),
      i(this, "update", function(t) {
        o.camera.update(t);
      }),
      i(this, "getUniforms", function(t) {
        var e = o.camera.getUniforms(t);
        return (e.time = t), e;
      }),
      (this.camera = new Xn(n, r));
  },
  Zn = (function() {
    function t(n) {
      var r = this;
      e(this, t),
        i(this, "programInfo", null),
        i(this, "textures", {}),
        i(this, "uniforms", null),
        i(this, "shaderStrings", null),
        i(this, "isInit", !1),
        i(this, "texturesLoaded", !1),
        i(this, "init", function(t) {
          (r.programInfo = (function(t, e, n, r, i) {
            var o = tn(n, r, i),
              a = !0;
            if (
              ((e = e.map(function(t) {
                if (t.indexOf("\n") < 0) {
                  var e = Oe(t);
                  e ? (t = e.text) : (o.errorCallback("no element with id: " + t), (a = !1));
                }
                return t;
              })),
              !a)
            )
              return null;
            var s = rn(t, e, o);
            return s ? un(t, s) : null;
          })(t, Object.values(r.shaderStrings))),
            (r.isInit = !0);
        }),
        i(this, "loadTextures", function(t, e, n) {
          if (e) {
            var i = Object.keys(e).length,
              o = 0;
            Object.entries(e).forEach(function(e) {
              var a = d(e, 2),
                s = a[0],
                u = a[1];
              r.textures[s] = De(t, u, function() {
                (o += 1) === i && ((r.texturesLoaded = !0), n && n());
              });
            });
          }
        }),
        i(this, "updateUniforms", function(t) {
          Object.entries(t).forEach(function(t) {
            var e = d(t, 2),
              n = e[0],
              i = e[1];
            r.uniforms[n] = i;
          });
        }),
        (this.shaderStrings = n);
    }
    return (
      r(t, [
        {
          key: "isReady",
          get: function() {
            return this.isInit && this.texturesLoaded;
          }
        }
      ]),
      t
    );
  })();
let Kn;
const Jn = new Array(32).fill(void 0);
function Qn(t) {
  return Jn[t];
}
Jn.push(void 0, null, !0, !1);
let $n = Jn.length;
function tr(t) {
  const e = Qn(t);
  return (
    (function(t) {
      t < 36 || ((Jn[t] = $n), ($n = t));
    })(t),
    e
  );
}
let er = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 });
er.decode();
let nr = null;
function rr() {
  return (null !== nr && nr.buffer === Kn.memory.buffer) || (nr = new Uint8Array(Kn.memory.buffer)), nr;
}
function ir(t, e) {
  return er.decode(rr().subarray(t, t + e));
}
function or(t) {
  $n === Jn.length && Jn.push(Jn.length + 1);
  const e = $n;
  return ($n = Jn[e]), (Jn[e] = t), e;
}
let ar = 0,
  sr = new TextEncoder("utf-8");
const ur =
  "function" == typeof sr.encodeInto
    ? function(t, e) {
        return sr.encodeInto(t, e);
      }
    : function(t, e) {
        const n = sr.encode(t);
        return e.set(n), { read: t.length, written: n.length };
      };
function lr(t, e, n) {
  if (void 0 === n) {
    const n = sr.encode(t),
      r = e(n.length);
    return (
      rr()
        .subarray(r, r + n.length)
        .set(n),
      (ar = n.length),
      r
    );
  }
  let r = t.length,
    i = e(r);
  const o = rr();
  let a = 0;
  for (; a < r; a++) {
    const e = t.charCodeAt(a);
    if (e > 127) break;
    o[i + a] = e;
  }
  if (a !== r) {
    0 !== a && (t = t.slice(a)), (i = n(i, r, (r = a + 3 * t.length)));
    const e = rr().subarray(i + a, i + r);
    a += ur(t, e).written;
  }
  return (ar = a), i;
}
let cr = null;
function fr() {
  return (null !== cr && cr.buffer === Kn.memory.buffer) || (cr = new Int32Array(Kn.memory.buffer)), cr;
}
function mr(t, e, n) {
  Kn._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__ha5107d5f7795da4f(
    t,
    e,
    or(n)
  );
}
let hr = null;
function dr(t, e) {
  const n = e(4 * t.length);
  return (
    ((null !== hr && hr.buffer === Kn.memory.buffer) || (hr = new Float32Array(Kn.memory.buffer)), hr).set(t, n / 4),
    (ar = t.length),
    n
  );
}
let pr = null;
function vr(t, e) {
  const n = e(4 * t.length);
  return (
    ((null !== pr && pr.buffer === Kn.memory.buffer) || (pr = new Uint32Array(Kn.memory.buffer)), pr).set(t, n / 4),
    (ar = t.length),
    n
  );
}
class yr {
  free() {
    const t = this.ptr;
    (this.ptr = 0), Kn.__wbg_gkcollider_free(t);
  }
  static create_collision_geometry(t, e, n) {
    var r = dr(t, Kn.__wbindgen_malloc),
      i = ar,
      o = dr(e, Kn.__wbindgen_malloc),
      a = ar,
      s = vr(n, Kn.__wbindgen_malloc),
      u = ar,
      l = Kn.gkcollider_create_collision_geometry(r, i, o, a, s, u);
    return _r.__wrap(l);
  }
}
class gr {
  free() {
    const t = this.ptr;
    (this.ptr = 0), Kn.__wbg_gkcollision_free(t);
  }
}
class _r {
  static __wrap(t) {
    const e = Object.create(_r.prototype);
    return (e.ptr = t), e;
  }
  free() {
    const t = this.ptr;
    (this.ptr = 0), Kn.__wbg_gkcollisiongeo_free(t);
  }
  raycast(t, e) {
    var n = dr(t, Kn.__wbindgen_malloc),
      r = ar,
      i = dr(e, Kn.__wbindgen_malloc),
      o = ar;
    return tr(Kn.gkcollisiongeo_raycast(this.ptr, n, r, i, o));
  }
  hitTest(t, e) {
    var n = dr(t, Kn.__wbindgen_malloc),
      r = ar,
      i = dr(e, Kn.__wbindgen_malloc),
      o = ar;
    return 0 !== Kn.gkcollisiongeo_hitTest(this.ptr, n, r, i, o);
  }
}
async function xr(t) {
  void 0 === t && console.log("You must specify wasm location");
  const e = { wbg: {} };
  (e.wbg.__wbindgen_object_drop_ref = function(t) {
    tr(t);
  }),
    (e.wbg.__wbindgen_json_parse = function(t, e) {
      return or(JSON.parse(ir(t, e)));
    }),
    (e.wbg.__wbindgen_json_serialize = function(t, e) {
      const n = Qn(e);
      var r = lr(JSON.stringify(void 0 === n ? null : n), Kn.__wbindgen_malloc, Kn.__wbindgen_realloc),
        i = ar;
      (fr()[t / 4 + 1] = i), (fr()[t / 4 + 0] = r);
    }),
    (e.wbg.__wbindgen_number_new = function(t) {
      return or(t);
    }),
    (e.wbg.__wbindgen_string_new = function(t, e) {
      return or(ir(t, e));
    }),
    (e.wbg.__wbg_new_59cb74e423758ede = function() {
      return or(new Error());
    }),
    (e.wbg.__wbg_stack_558ba5917b466edd = function(t, e) {
      var n = lr(Qn(e).stack, Kn.__wbindgen_malloc, Kn.__wbindgen_realloc),
        r = ar;
      (fr()[t / 4 + 1] = r), (fr()[t / 4 + 0] = n);
    }),
    (e.wbg.__wbg_error_4bb6c2a97407129a = function(t, e) {
      try {
        console.error(ir(t, e));
      } finally {
        Kn.__wbindgen_free(t, e);
      }
    }),
    (e.wbg.__wbg_debug_7020dcb48edf105b = function(t) {
      console.debug(Qn(t));
    }),
    (e.wbg.__wbg_error_b23efba5bfb5cec5 = function(t) {
      console.error(Qn(t));
    }),
    (e.wbg.__wbg_info_8ce99578d0b91a35 = function(t) {
      console.info(Qn(t));
    }),
    (e.wbg.__wbg_log_c180b836187d3c94 = function(t) {
      console.log(Qn(t));
    }),
    (e.wbg.__wbg_warn_942f927afebcc748 = function(t) {
      console.warn(Qn(t));
    }),
    (e.wbg.__wbindgen_cb_drop = function(t) {
      const e = tr(t).original;
      if (1 == e.cnt--) return (e.a = 0), !0;
      return !1;
    }),
    (e.wbg.__wbg_call_d713ea0274dfc6d2 = (function(t) {
      return function() {
        try {
          return t.apply(this, arguments);
        } catch (t) {
          Kn.__wbindgen_exn_store(or(t));
        }
      };
    })(function(t, e, n) {
      return or(Qn(t).call(Qn(e), Qn(n)));
    })),
    (e.wbg.__wbg_new_d0c63652ab4d825c = function(t, e) {
      try {
        var n = { a: t, b: e },
          r = new Promise((t, e) => {
            const r = n.a;
            n.a = 0;
            try {
              return (function(t, e, n, r) {
                Kn.wasm_bindgen__convert__closures__invoke2_mut__h8bf6a25e700c374c(t, e, or(n), or(r));
              })(r, n.b, t, e);
            } finally {
              n.a = r;
            }
          });
        return or(r);
      } finally {
        n.a = n.b = 0;
      }
    }),
    (e.wbg.__wbg_resolve_2529512c3bb73938 = function(t) {
      return or(Promise.resolve(Qn(t)));
    }),
    (e.wbg.__wbg_then_4a7a614abbbe6d81 = function(t, e) {
      return or(Qn(t).then(Qn(e)));
    }),
    (e.wbg.__wbindgen_throw = function(t, e) {
      throw new Error(ir(t, e));
    }),
    (e.wbg.__wbindgen_rethrow = function(t) {
      throw tr(t);
    }),
    (e.wbg.__wbindgen_closure_wrapper2042 = function(t, e, n) {
      return or(
        (function(t, e, n, r) {
          const i = { a: t, b: e, cnt: 1, dtor: n },
            o = (...t) => {
              i.cnt++;
              const e = i.a;
              i.a = 0;
              try {
                return r(e, i.b, ...t);
              } finally {
                0 == --i.cnt ? Kn.__wbindgen_export_2.get(i.dtor)(e, i.b) : (i.a = e);
              }
            };
          return (o.original = i), o;
        })(t, e, 61, mr)
      );
    }),
    ("string" == typeof t ||
      ("function" == typeof Request && t instanceof Request) ||
      ("function" == typeof URL && t instanceof URL)) &&
      (t = fetch(t));
  const { instance: n, module: r } = await (async function(t, e) {
    if ("function" == typeof Response && t instanceof Response) {
      if ("function" == typeof WebAssembly.instantiateStreaming)
        try {
          return await WebAssembly.instantiateStreaming(t, e);
        } catch (e) {
          if ("application/wasm" == t.headers.get("Content-Type")) throw e;
          console.warn(
            "`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
            e
          );
        }
      const n = await t.arrayBuffer();
      return await WebAssembly.instantiate(n, e);
    }
    {
      const n = await WebAssembly.instantiate(t, e);
      return n instanceof WebAssembly.Instance ? { instance: n, module: t } : n;
    }
  })(await t, e);
  return (Kn = n.exports), (xr.__wbindgen_wasm_module = r), Kn;
}
var br = (function() {
    function t() {
      var n = this;
      e(this, t),
        i(this, "id", null),
        i(this, "geometry", null),
        i(this, "collisionGeometry", null),
        i(this, "material", null),
        i(this, "_translation", [0, 0, 0]),
        i(this, "_rotation", [0, 0, 0]),
        i(this, "_scale", [1, 1, 1]),
        i(this, "_modelMatrix", null),
        i(this, "_modelIsDirty", !0),
        i(this, "rayCast", !0),
        i(this, "isInteractive", !1),
        i(this, "isSelectable", !1),
        i(this, "isHoverable", !1),
        i(this, "shouldDraw", !0),
        i(this, "setInteractive", function(t, e, r) {
          (n.isInteractive = "boolean" == typeof t && t),
            (n.isSelectable = "boolean" == typeof e && e),
            (n.isHoverable = "boolean" == typeof r && r);
        }),
        (this.id =
          "_" +
          Math.random()
            .toString(36)
            .substr(2, 9));
    }
    return (
      r(t, [
        {
          key: "update",
          value: function(t) {
            var e = this;
            t &&
              Object.entries(t).forEach(function(t) {
                e.material.uniforms[t[0]] = t[1];
              });
          }
        },
        {
          key: "isReady",
          get: function() {
            return !(!this.geometry || !this.material) && this.geometry.isReady && this.material.isReady;
          }
        },
        {
          key: "translation",
          get: function() {
            return this._translation;
          },
          set: function(t) {
            (this._translation = t), (this._modelIsDirty = !0);
          }
        },
        {
          key: "rotation",
          get: function() {
            return this._rotation;
          },
          set: function(t) {
            (this._rotation = t), (this._modelIsDirty = !0);
          }
        },
        {
          key: "scale",
          get: function() {
            return this._scale;
          },
          set: function(t) {
            (this._scale = t), (this._modelIsDirty = !0);
          }
        },
        {
          key: "modelMatrix",
          get: function() {
            if (this._modelIsDirty) {
              var t = z.identity(),
                e = z.translation(this._translation, t),
                n = z.scaling(this._scale);
              (this._modelMatrix = e),
                z.rotateX(e, this._rotation[0], this._modelMatrix),
                z.rotateY(e, this._rotation[1], this._modelMatrix),
                z.rotateZ(e, this._rotation[2], this._modelMatrix),
                z.multiply(this._modelMatrix, n, this._modelMatrix),
                (this._modelIsDirty = !1);
            }
            return this._modelMatrix;
          }
        }
      ]),
      t
    );
  })(),
  wr = (function(t) {
    s(r, br);
    var n = m(r);
    function r() {
      return e(this, r), n.apply(this, arguments);
    }
    return r;
  })(),
  Ar = (function() {
    function t(n) {
      var r = this;
      e(this, t),
        i(this, "isInit", !1),
        i(this, "isDirty", !1),
        i(this, "needsResize", !1),
        i(this, "bufferInfo", void 0),
        i(this, "vertices", void 0),
        i(this, "init", function(t) {
          (0 === Object.keys(r.vertices).length && r.vertices.constructor === Object) ||
            (Object.keys(r.vertices).forEach(function(e) {
              "DYNAMIC_DRAW" === r.vertices[e].drawType && (r.vertices[e].drawType = t.DYNAMIC_DRAW);
            }),
            (r.bufferInfo = Q(t, r.vertices)),
            (r.isInit = !0),
            (r.isDirty = !1));
        }),
        i(this, "resizeVertices", function() {}),
        i(this, "updateGeometry", function(t, e) {
          (void 0 !== e && "number" == typeof e) || (e = 0),
            Object.keys(t).forEach(function(n) {
              for (var i = r.vertices[n].perInstance * e, o = 0; o < t[n].data.length; o += 1)
                r.vertices[n].data[o + i] = t[n].data[o];
            }),
            (r.isDirty = !0);
        }),
        i(this, "updateBuffers", function(t) {
          Object.keys(r.bufferInfo.attribs).forEach(function(e) {
            !(function(t, e, n, r) {
              (n = Z(n)),
                void 0 !== r
                  ? (t.bindBuffer(34962, e.buffer), t.bufferSubData(34962, r, n))
                  : N(t, 34962, e.buffer, n, e.drawType);
            })(t, r.bufferInfo.attribs[e], r.vertices[e]);
          }),
            (r.isDirty = !1);
        }),
        i(this, "reloadBuffers", function(t) {
          r.deleteBuffers(t), (r.bufferInfo = Q(t, r.vertices)), (r.isDirty = !1), (r.needsResize = !1);
        }),
        i(this, "deleteBuffers", function(t) {
          Object.keys(r.bufferInfo.attribs).forEach(function(e) {
            t.deleteBuffer(e.buffer);
          }),
            t.deleteBuffer(r.bufferInfo.indices),
            (r.bufferInfo = {});
        }),
        (this.vertices = "sphere" === n ? Jt.createSphereVertices(1, 128, 128) : {});
    }
    return (
      r(t, [
        {
          key: "isReady",
          get: function() {
            return this.isInit;
          }
        }
      ]),
      t
    );
  })(),
  Cr = {
    vertex:
      "#define GLSLIFY 1\nattribute vec4 position;attribute vec3 normal;attribute vec2 texcoord;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform mat4 u_model;uniform vec3 u_cameraPos;uniform float shadowPower;varying float vAlpha;varying vec2 vTexture;void main(){vec4 pos=u_worldViewProjection*u_model*position;vec4 transformedCamera=vec4(-0.5,1.0,-1.0,1.0)*u_worldViewProjection;vAlpha=pow((1.0+(dot(normal,normalize(transformedCamera.xyz))))/2.0,shadowPower);vTexture=texcoord;gl_Position=pos;}",
    fragment:
      "precision mediump float;\n#define GLSLIFY 1\nuniform sampler2D uTexture;varying float vAlpha;varying vec2 vTexture;vec3 yellow=vec3(255.0/255.0,210.0/255.0,28.0/255.0);void main(){vec4 textureColor=texture2D(uTexture,vec2(vTexture.x-0.25,vTexture.y));float alpha=vAlpha+(1.0-vAlpha)*0.05;alpha*=0.9;gl_FragColor=vec4(textureColor.rgb*vAlpha,1.0);}"
  },
  Tr = { shadowPower: 0.3 },
  Ir = (function(t) {
    s(r, wr);
    var n = m(r);
    function r(t) {
      var o, a;
      return (
        e(this, r),
        i(c((a = n.call(this))), "material", null),
        i(c(a), "init", function(t, e) {
          (a.geometry = new Ar("sphere")), a.geometry.init(t);
          var n = { surface: { src: a.textureSrc.surface, minMag: t.LINEAR, wrap: t.REPEAT } };
          a.material.init(t),
            a.material.loadTextures(t, n, function() {
              (a.material.uniforms.uTexture = a.material.textures.surface), e && e();
            }),
            (a.material.uniforms.uModelMatrix = a.modelMatrix);
        }),
        i(c(a), "createCollisionGeo", function() {
          (a.collisionGeometry && a.collisionGeometry instanceof gr) ||
            (a.collisionGeometry = yr.create_collision_geometry(
              a.geometry.vertices.position,
              a.geometry.vertices.texcoord,
              a.geometry.vertices.indices
            ));
        }),
        i(c(a), "rayCastFrom", function(t) {
          return a.collisionGeometry.raycast(t.origin, t.direction);
        }),
        i(c(a), "hitTest", function(t) {
          return a.collisionGeometry.hitTest(t.origin, t.direction);
        }),
        i(c(a), "onSelection", function() {}),
        i(c(a), "update", function(t, e, n) {
          h(((o = c(a)), u(r.prototype)), "update", o).call(o, e, n), (a.material.uniforms.u_model = a.modelMatrix);
        }),
        i(c(a), "draw", function(t) {
          a.isReady &&
            a.shouldDraw &&
            (t.useProgram(a.material.programInfo.program),
            sn(t, a.material.programInfo, a.geometry.bufferInfo),
            an(a.material.programInfo, a.material.uniforms),
            t.drawElements(t.TRIANGLES, a.geometry.bufferInfo.numElements, t.UNSIGNED_SHORT, 0));
        }),
        i(c(a), "setShadowPower", function(t) {
          console.log(t, "ShadowPower"), (a.material.uniforms.shadowPower = t);
        }),
        (a.material = new Zn(Cr)),
        (a.material.uniforms = Tr),
        (a.textureSrc = { surface: t }),
        a
      );
    }
    return r;
  })(),
  Pr = function t(n, r) {
    var o = this;
    e(this, t),
      i(this, "isLoaded", !1),
      i(this, "ctx", void 0),
      i(this, "canvas", void 0),
      i(this, "image", void 0),
      i(this, "getIdFromLatLon", function(t, e) {
        if (o.isLoaded) {
          var n = 1 - (t / 90 + 1) / 2,
            r = ((e / 180 + 1) / 2) * o.canvas.width,
            i = n * o.canvas.height;
          return o.ctx.getImageData(r, i, 1, 1).data[0];
        }
      }),
      (this.image = new Image()),
      (this.image.src = n),
      this.image.addEventListener("load", function() {
        (o.canvas = document.createElement("canvas")),
          (o.canvas.width = o.image.width),
          (o.canvas.height = o.image.height),
          (o.ctx = o.canvas.getContext("2d")),
          o.ctx.drawImage(o.image, 0, 0),
          (o.isLoaded = !0),
          r && r();
      });
  },
  Sr = function t(n, r) {
    var o = this;
    e(this, t),
      i(this, "isInit", !1),
      i(this, "useImageLookup", !1),
      i(this, "imageLookup", null),
      i(this, "getIdFromLatLon", function(t, e) {
        return o.imageLookup.getIdFromLatLon(t, e);
      }),
      i(this, "getFromId", function(t) {
        return o.data.find(function(e) {
          return e.id === t;
        });
      }),
      i(this, "getFromCode", function(t) {
        return o.data.find(function(e) {
          return e.code === t;
        });
      }),
      i(this, "getFromName", function(t) {
        return o.data.find(function(e) {
          return e.name === t;
        });
      }),
      n instanceof Array &&
        ((this.data = n),
        r &&
          ((this.useImageLookup = !0),
          (this.imageLookup = new Pr(r, function() {
            o.isInit = !0;
          }))));
  },
  Er = (function() {
    function t() {
      e(this, t);
    }
    return (
      r(t, null, [
        {
          key: "radiansForPosition",
          value: function(t, e) {
            return e > 0
              ? t >= 0
                ? Math.atan(t / e)
                : 2 * Math.PI + Math.atan(t / e)
              : e < 0
              ? Math.PI + Math.atan(t / e)
              : t > 0
              ? Math.PI / 2
              : (3 * Math.PI) / 2;
          }
        },
        {
          key: "latLonFromWorld",
          value: function(t) {
            var e = Tn();
            Ln(e, t);
            for (
              var n = Math.asin(e[1]),
                r = this.radiansForPosition(e[0], e[2]),
                i = (180 * n) / Math.PI,
                o = (180 * r) / Math.PI;
              o > 180;

            )
              o -= 360;
            return { lat: i, lon: o };
          }
        },
        {
          key: "distanceBetweenPoints",
          value: function(t, e) {
            var n = function(t) {
                return t * (Math.PI / 180);
              },
              r = n(t.lat),
              i = n(e.lat),
              o = n(e.lat - t.lat),
              a = n(e.lon - t.lon),
              s = Math.sin(o / 2) * Math.sin(o / 2) + Math.cos(r) * Math.cos(i) * Math.sin(a / 2) * Math.sin(a / 2);
            return 6371 * (2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s)));
          }
        },
        {
          key: "worldFromLatLon",
          value: function(t, e, n) {
            var r = n || 0,
              i = (t * Math.PI) / 180,
              o = (e * Math.PI) / 180,
              a = Math.cos(i),
              s = Math.sin(i),
              u = In(Math.sin(o) * a, s, Math.cos(o) * a),
              l = Tn();
            return Ln(l, u), Pn(u, u, En(l, l, r)), u;
          }
        },
        {
          key: "dotBetweenLatLon",
          value: function(e, n) {
            return Mn(t.worldFromLatLon(e[0], e[1]), t.worldFromLatLon(n[0], n[1]));
          }
        },
        {
          key: "hexToRGB",
          value: function(t, e) {
            var n = 0,
              r = 0,
              i = 0,
              o = !1 !== e;
            return (
              4 === t.length
                ? ((n = "0x".concat(t[1]).concat(t[1])),
                  (r = "0x".concat(t[2]).concat(t[2])),
                  (i = "0x".concat(t[3]).concat(t[3])))
                : 7 === t.length &&
                  ((n = "0x".concat(t[1]).concat(t[2])),
                  (r = "0x".concat(t[3]).concat(t[4])),
                  (i = "0x".concat(t[5]).concat(t[6]))),
              o
                ? ((n /= 255), (r /= 255), (i /= 255))
                : ((n = parseInt(n, 16)), (r = parseInt(r, 16)), (i = parseInt(i, 16))),
              [n, r, i]
            );
          }
        },
        {
          key: "hexToRGBA",
          value: function(t, e, n) {
            var r = this.hexToRGB(t, n),
              i = !1 !== n ? e : 255 * e;
            return [r[0], r[1], r[2], i];
          }
        },
        {
          key: "isSubSet",
          value: function(t, e) {
            return t.every(function(t) {
              return (
                void 0 !==
                e.find(function(e) {
                  return e === t;
                })
              );
            });
          }
        },
        {
          key: "lerpColor",
          value: function(t, e, n) {
            var r = this.hexToRGB(t),
              i = this.hexToRGB(e),
              o = In(r[0], r[1], r[2]),
              a = In(i[0], i[1], i[2]),
              s = Tn();
            return Fn(s, o, a, n), s;
          }
        }
      ]),
      t
    );
  })();
i(Er, "RGBToHex", function(t, e, n) {
  var r = t.toString(16),
    i = e.toString(16),
    o = n.toString(16);
  return (
    1 === r.length && (r = "0".concat(r)),
    1 === i.length && (i = "0".concat(i)),
    1 === o.length && (o = "0".concat(o)),
    "#"
      .concat(r)
      .concat(i)
      .concat(o)
  );
});
var Lr = (function() {
  function t(n, r, o, s) {
    var u = this;
    e(this, t),
      i(this, "time", void 0),
      i(this, "delay", 0),
      i(this, "ease", function(t) {
        return t;
      }),
      i(this, "onComplete", function(t) {}),
      i(this, "onUpdate", function(t) {}),
      i(this, "endAt", void 0),
      i(this, "isNumeric", !1),
      i(this, "toObj", null),
      i(this, "fromObj", null),
      i(this, "currentObj", null),
      i(this, "mechanism", function() {
        if (u.isRunning) {
          if (u.stopped) return !1;
          var t = u.endAt - new Date().getTime();
          t <= 0
            ? (clearTimeout(u.playTimeout),
              (u.stopped = !0),
              u.advanceFrame(1, 1),
              u.isNumeric ? u.onUpdate(u.currentObj.value) : u.onUpdate(u.currentObj),
              u.onComplete(!0),
              u.cleanup())
            : (u.advanceFrame(u.time - t, u.time),
              u.isNumeric ? u.onUpdate(u.currentObj.value) : u.onUpdate(u.currentObj));
        }
      }),
      (s = s || {}),
      (this.time = o),
      (this.endAt = new Date().getTime() + this.time),
      (this.isNumeric = !isNaN(n)),
      this.isNumeric
        ? ((this.toObj = { value: r }), (this.fromObj = { value: n }))
        : ((this.toObj = a({}, r)), (this.fromObj = a({}, n))),
      (this.currentObj = a({}, this.fromObj)),
      (this.id = t.getId()),
      (t.tweens[this.id] = this),
      s.onComplete && ((this.onComplete = s.onComplete), delete s.onComplete),
      s.onUpdate && ((this.onUpdate = s.onUpdate), delete s.onUpdate),
      s.ease && ((this.ease = s.ease), delete s.ease),
      s.delay && ((this.endAt += s.delay), (this.delay = s.delay), delete s.delay),
      (this.playTimeout = setTimeout(function() {
        u.play();
      }, this.delay));
  }
  return (
    r(t, [
      {
        key: "play",
        value: function() {
          (this.endAt = new Date().getTime() + this.time),
            (this.isRunning = !0),
            t.isRunning || ((t.isRunning = !0), requestAnimationFrame(t.mechanism));
        }
      },
      {
        key: "stop",
        value: function() {
          clearTimeout(this.playTimeout), (this.stopped = !0), this.onComplete(!1), this.cleanup();
        }
      },
      {
        key: "currentValue",
        value: function() {
          return this.isNumeric ? this.currentObj.value : this.currentObj;
        }
      },
      {
        key: "cleanup",
        value: function() {
          (this.isRunning = !1), delete t.tweens[this.id], 0 === Object.keys(t.tweens).length && (t.isRunning = !1);
        }
      },
      {
        key: "advanceFrame",
        value: function(t, e) {
          var n = 0 !== e ? t / e : 1;
          for (var r in ((n = this.ease(n)), this.toObj)) {
            var i = this.fromObj[r],
              o = this.toObj[r] - i;
            this.currentObj[r] = i + o * n;
          }
        }
      }
    ]),
    t
  );
})();
(Lr.id = 0),
  (Lr.tweens = {}),
  (Lr.killTweensOf = function(t) {
    for (var e in Lr.tweens) {
      var n = Lr.tweens[e];
      n.obj === t && n.stop();
    }
  }),
  (Lr.getId = function() {
    return ++Lr.id;
  }),
  (Lr.isRunning = !1),
  (Lr.mechanism = function() {
    for (var t in Lr.tweens) Lr.tweens[t].mechanism();
    Lr.isRunning && requestAnimationFrame(Lr.mechanism);
  });
var Mr = function t(n, r) {
    var o = this;
    e(this, t),
      i(this, "width", 4),
      i(this, "height", 4),
      i(this, "channels", 4),
      i(this, "elementLength", 1),
      i(this, "data", void 0),
      i(this, "texture", void 0),
      i(this, "isInit", !1),
      i(this, "init", function(t) {
        var e = { width: o.width, height: o.height, mag: t.NEAREST, min: t.NEAREST, src: o.data };
        (o.texture = De(t, e)), (o.isInit = !0);
      }),
      i(this, "updatePixel", function(t, e, n, r) {
        if (o.isInit) {
          var i = new Uint8Array(e);
          t.bindTexture(t.TEXTURE_2D, o.texture),
            t.texSubImage2D(t.TEXTURE_2D, 0, r, n, 1, 1, t.RGBA, t.UNSIGNED_BYTE, i);
        }
      }),
      i(this, "updatePixelId", function(t, e, n) {
        var r = Math.floor(n / o.width),
          i = n - r * o.width;
        e.forEach(function(t, e) {
          o.data[4 * n + e] = t;
        }),
          o.updatePixel(t, e, r, i);
      }),
      i(this, "updateSubrect", function(t, e) {
        o.isInit &&
          (t.bindTexture(t.TEXTURE_2D, o.texture),
          t.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, o.width, o.height, t.RGBA, t.UNSIGNED_BYTE, e));
      }),
      i(this, "getIdColor", function(t) {
        return o.data.slice(4 * t, 4 * t + 4);
      }),
      (this.width = n || this.width),
      (this.height = r || this.height),
      (this.data = new Uint8Array(this.width * this.height * this.channels).fill(0));
  },
  zr = {
    vertex: document.querySelector("script[type=shader-vertex-icosphere]").innerText,
    fragment: document.querySelector("script[type=shader-fragment-icosphere]").innerText
  },
  Fr = {},
  Rr = (function(t) {
    s(r, wr);
    var n = m(r);
    function r(t) {
      var o, a;
      return (
        e(this, r),
        i(c((a = n.call(this))), "material", null),
        i(c(a), "lookup", null),
        i(c(a), "currentSelection", -1),
        i(c(a), "previousSelection", -1),
        i(c(a), "inAnimation", null),
        i(c(a), "outAnimation", null),
        i(c(a), "currentHover", -1),
        i(c(a), "hoverables", []),
        i(c(a), "hoverableUniforms", [
          "u_animatable0",
          "u_animatable1",
          "u_animatable2",
          "u_animatable3",
          "u_animatable4",
          "u_animatable5"
        ]),
        i(c(a), "inAnimations", {}),
        i(c(a), "outAnimations", {}),
        i(c(a), "highlighedCountries", []),
        i(c(a), "selection0", 236),
        i(c(a), "selection1", 144),
        i(c(a), "current", 236),
        i(c(a), "dataTexture", void 0),
        i(c(a), "dataTextureSize", 16),
        i(c(a), "updateCMDs", []),
        i(c(a), "highlightAnimationProps", {
          start: 0,
          stop: 1,
          duration: 1e3,
          onUpdate: function(t) {
            a.material.uniforms.u_animateIn = t;
          }
        }),
        i(c(a), "init", function(t, e) {
          (a.geometry = new Ar("sphere")), a.geometry.init(t);
          var n = {
            inactive: { src: a.textureSrc.inactive, minMag: t.LINEAR },
            active: { src: a.textureSrc.active, minMag: t.LINEAR },
            id: { src: a.textureSrc.id, minMag: t.NEAREST }
          };
          a.material.init(t),
            a.material.loadTextures(t, n, function() {
              (a.material.uniforms.u_inactive = a.material.textures.inactive),
                (a.material.uniforms.u_active = a.material.textures.active),
                (a.material.uniforms.u_id = a.material.textures.id),
                a.dataTexture.init(t),
                (a.material.uniforms.u_data = a.dataTexture.texture),
                e && e();
            });
        }),
        i(c(a), "getValueForId", function(t) {
          return a.lookup.getFromId(t);
        }),
        i(c(a), "getValueForCode", function(t) {
          return a.lookup.getFromCode(t);
        }),
        i(c(a), "getValueForName", function(t) {
          return a.lookup.getFromName(t);
        }),
        i(c(a), "setIdColor", function(t, e, n) {
          var r = void 0 === n ? 1 : n,
            i = Er.hexToRGBA(e, r, !1);
          a.updateCMDs.push(function(e) {
            a.dataTexture.updatePixelId(e, i, t);
          });
        }),
        i(c(a), "getIdColor", function(t) {
          var e = a.dataTexture.getIdColor(t);
          return { color: Er.RGBToHex(e[0], e[1], e[2]), alpha: e[3] / 255 };
        }),
        i(c(a), "createCollisionGeo", function() {
          (a.collisionGeometry && a.collisionGeometry instanceof gr) ||
            (a.collisionGeometry = yr.create_collision_geometry(
              a.geometry.vertices.position,
              a.geometry.vertices.texcoord,
              a.geometry.vertices.indices
            ));
        }),
        i(c(a), "rayCastFrom", function(t) {
          return a.collisionGeometry.raycast(t.origin, t.direction);
        }),
        i(c(a), "hitTest", function(t) {
          return a.collisionGeometry.hitTest(t.origin, t.direction);
        }),
        i(c(a), "onSelectionCB", function() {}),
        i(c(a), "onSelection", function(t, e, n) {
          var r = Er.latLonFromWorld(n.point);
          return (
            (a.current = a.lookup.getIdFromLatLon(r.lat, r.lon)),
            { id: a.current, name: a.lookup.getFromId(a.current), lat: r.lat, lon: r.lon }
          );
        }),
        i(c(a), "onHover", function(t) {}),
        i(c(a), "update", function(t, e, n) {
          h(((o = c(a)), u(r.prototype)), "update", o).call(o, e, n),
            (a.material.uniforms.u_model = a.modelMatrix),
            a.updateCMDs.forEach(function(e) {
              e(t);
            }),
            (a.updateCMDs = []);
        }),
        i(c(a), "draw", function(t) {
          a.isReady &&
            a.shouldDraw &&
            (t.useProgram(a.material.programInfo.program),
            sn(t, a.material.programInfo, a.geometry.bufferInfo),
            an(a.material.programInfo, a.material.uniforms),
            t.drawElements(t.TRIANGLES, a.geometry.bufferInfo.numElements, t.UNSIGNED_SHORT, 0));
        }),
        i(c(a), "setCountryHover", function(t) {}),
        i(c(a), "highlightId", function(t, e, n, r, i) {
          if (!(a.inAnimations[t] instanceof Lr)) {
            var o = e || "#ffffff",
              s = n || 1,
              u = r || !0,
              l = 0;
            a.outAnimations[t] instanceof Lr && ((l = a.outAnimations[t].currentValue()), a.outAnimations[t].stop());
            var c = i || {};
            if (
              ((c.duration = c.duration || 500),
              (c.onComplete = c.onComplete || function() {}),
              (c.outDuration = c.outDuration || c.duration),
              (c.onOutComplete = c.onOutComplete || function() {}),
              u)
            ) {
              var f = { duration: c.outDuration, onComplete: c.onOutComplete };
              a.highlighedCountries.forEach(function(e) {
                e !== t && a.unhighlightId(e, f);
              });
            }
            (a.inAnimations[t] = new Lr(l, s, c.duration, {
              onUpdate: function(e) {
                a.setIdColor(t, o, e);
              },
              onComplete: function(e) {
                delete a.inAnimations[t], c.onComplete(e);
              }
            })),
              a.highlighedCountries.push(t);
          }
        }),
        i(c(a), "unhighlightId", function(t, e) {
          if (-1 !== a.highlighedCountries.indexOf(t) && !(a.outAnimations[t] instanceof Lr)) {
            var n = e || {};
            (n.duration = n.duration || 500), (n.onComplete = n.onComplete || function() {});
            var r = a.getIdColor(t),
              i = r.alpha;
            a.inAnimations[t] instanceof Lr && ((i = a.inAnimations[t].currentValue()), a.inAnimations[t].stop()),
              (a.outAnimations[t] = new Lr(i, 0, n.duration, {
                onUpdate: function(e) {
                  a.setIdColor(t, r.color, e);
                },
                onComplete: function(e) {
                  if (e) {
                    var r = a.highlighedCountries.indexOf(t);
                    a.highlighedCountries.splice(r, 1);
                  }
                  delete a.outAnimations[t], n.onComplete(e, t);
                }
              }));
          }
        }),
        i(c(a), "addDataset", function(t) {
          a.lookup = new Sr(t, a.textureSrc.id);
        }),
        (a.material = new Zn(zr)),
        (a.material.uniforms = Fr),
        (a.textureSrc = { inactive: t.inactive, active: t.active, id: t.id }),
        (a.dataTexture = new Mr(a.dataTextureSize, a.dataTextureSize)),
        a
      );
    }
    return r;
  })(),
  Dr = (function() {
    function t() {
      var n = this;
      e(this, t),
        i(this, "springStrength", 0.2),
        i(this, "drag", 0.875),
        i(this, "poleBufferThreshold", 18),
        i(this, "panDeltaScale", 42),
        i(this, "velocityDeltaScale", 750),
        i(this, "_ambientController", null),
        i(this, "_animationController", null),
        i(this, "_interactionController", null),
        i(this, "_currentLatLonAlt", [0, 0, 4]),
        i(this, "_interactionStartLatLonAlt", null),
        i(this, "_interactionTargetLatLonAlt", null),
        i(this, "_latLonVelocity", [0, 0, 0]),
        i(this, "_ambientLonDirection", 1),
        i(this, "_ambientLatIn", 0),
        i(this, "_ambientLatDirection", 1),
        i(this, "_prevTime", 0),
        i(this, "_rotBounded", function(t) {
          return [Math.max(Math.min(t[0], 90), -90), t[1]];
        }),
        i(this, "_rotSprung", function(t) {
          var e = 0.499 * Math.PI,
            r = 0.499 * -Math.PI,
            i = (90 - n.poleBufferThreshold) / 90,
            o = e * i,
            a = r * i,
            s = t[0] * (Math.PI / 180),
            u = function(t) {
              return Math.sin((t * Math.PI) / 2);
            },
            l = s;
          if (s > o) {
            var c = s - o,
              f = e - o;
            l = o + f * u(Math.min(c / f, 1));
          }
          if (s < a) {
            var m = s - a,
              h = r - a;
            l = a + h * u(Math.min(m / h, 1));
          }
          return [l * (180 / Math.PI), t[1]];
        }),
        i(this, "_frustumDist", function(t, e) {
          return (0.5 * t) / Math.tan(0.5 * e * (Math.PI / 180));
        }),
        i(this, "_rotForDelta", function(t) {
          var e = d(n._currentLatLonAlt, 3)[2],
            r = t[0] * (n.pointsPerRadian * (e / n.zFullWidth)),
            i = t[1] * (n.pointsPerRadian * (e / n.zFullWidth)),
            o = 180 / Math.PI;
          return [-r * o, i * o];
        }),
        i(this, "_calcAmbientLatIn", function(t) {
          var e = ((t * (Math.PI / 180)) / (0.5 * Math.PI)) * (90 / (n._ambientController.latitudeVariance / 2));
          return Math.abs(e) > 1 && (e /= Math.abs(e)), Math.asin(e);
        });
    }
    return (
      r(t, [
        {
          key: "register",
          value: function(t, e, n) {
            (this._ambientController = t), (this._animationController = e), (this._interactionController = n);
          }
        },
        {
          key: "resize",
          value: function(t, e, n, r) {
            (this.pointsPerRadian = Math.PI / (t / window.devicePixelRatio)),
              (this.camFov = r),
              (this.camAspect = n),
              (this.zFullWidth = this._frustumDist((1 / this.camAspect) * 2, this.camFov));
          }
        },
        {
          key: "setLatLonAlt",
          value: function(t, e, n) {
            this.setLatLon(t, e), this.setAlt(n);
          }
        },
        {
          key: "setLatLon",
          value: function(t, e) {
            for (
              this._currentLatLonAlt = [t, e, this._currentLatLonAlt[2]],
                this._ambientLatIn = this._calcAmbientLatIn(t);
              this._currentLatLonAlt[1] > 180;

            )
              this._currentLatLonAlt[1] -= 360;
            for (; this._currentLatLonAlt[1] < -180; ) this._currentLatLonAlt[1] += 360;
            this._animationController.cancelLatLon();
          }
        },
        {
          key: "setAlt",
          value: function(t) {
            (this._currentLatLonAlt = [this._currentLatLonAlt[0], this._currentLatLonAlt[1], t]),
              this._animationController.cancelAlt();
          }
        },
        {
          key: "update",
          value: function(t, e) {
            var n = t - this._prevTime;
            (this.fov = e), this._updateAlt(n), this._updateLatLon(n), (this._prevTime = t);
          }
        },
        {
          key: "startPan",
          value: function(t) {
            for (; this._currentLatLonAlt[1] > 180; ) this._currentLatLonAlt[1] -= 360;
            for (; this._currentLatLonAlt[1] < -180; ) this._currentLatLonAlt[1] += 360;
            this._interactionStartLatLonAlt = p(this._currentLatLonAlt);
            var e = this.panDeltaScale / devicePixelRatio,
              n = [t.deltaY * e, t.deltaX * e],
              r = d(this._currentLatLonAlt, 3)[2],
              i = this._rotForDelta([
                this._interactionStartLatLonAlt[0] - n[0],
                this._interactionStartLatLonAlt[1] - n[1]
              ]);
            (this._interactionTargetLatLonAlt = [
              this._interactionStartLatLonAlt[0] + i[0],
              this._interactionStartLatLonAlt[1] + i[1],
              r
            ]),
              (this._latLonVelocity = [0, 0, 0]);
          }
        },
        {
          key: "continuePan",
          value: function(t) {
            if (this._interactionStartLatLonAlt) {
              var e = this.panDeltaScale / devicePixelRatio,
                n = [t.deltaY * e, t.deltaX * e],
                r = this._rotForDelta([
                  this._interactionStartLatLonAlt[0] - n[0],
                  this._interactionStartLatLonAlt[1] - n[1]
                ]),
                i = this.velocityDeltaScale / devicePixelRatio,
                o = this._rotForDelta([t.velocityY, t.velocityX]);
              (this._latLonVelocity = [-o[0] * i, -o[1] * i]), (this._ambientLonDirection = o[1] < 0 ? 1 : -1);
              var a = d(this._interactionTargetLatLonAlt, 3)[2],
                s = this._rotBounded([
                  this._interactionStartLatLonAlt[0] + r[0],
                  this._interactionStartLatLonAlt[1] + r[1]
                ]);
              (this._interactionTargetLatLonAlt = [s[0], s[1], a]), (this._lastGestureChange = t.timeStamp);
            }
          }
        },
        {
          key: "endPan",
          value: function(t) {
            (this._interactionStartLatLonAlt = null), (this._interactionTargetLatLonAlt = null);
            var e = t.timeStamp - this._lastGestureChange;
            (this._ambientLatIn = this._calcAmbientLatIn(this._currentLatLonAlt[0])),
              e > 0.1 && (this._latLonVelocity = [0, 0]);
          }
        },
        {
          key: "_updateAlt",
          value: function() {
            if (this._animationController.isAnimatingAlt) {
              var t = d(this._currentLatLonAlt, 2),
                e = t[0],
                n = t[1];
              this._currentLatLonAlt = [e, n, this._animationController.currentAlt];
            }
          }
        },
        {
          key: "_updateLatLon",
          value: function(t) {
            var e = d(this._currentLatLonAlt, 3),
              n = e[0],
              r = e[1],
              i = e[2];
            if (this._interactionTargetLatLonAlt) {
              var o = d(this._interactionTargetLatLonAlt, 2),
                a = [o[0] - n, o[1] - r];
              this._currentLatLonAlt = [n + a[0] * this.springStrength, r + a[1] * this.springStrength, i];
            } else {
              var s = this._rotBounded([n + this._latLonVelocity[0], r + this._latLonVelocity[1]]);
              this._currentLatLonAlt = [s[0], s[1], i];
              var u = 90 - this.poleBufferThreshold,
                l = -90 + this.poleBufferThreshold;
              if (s[0] > u) {
                var c = s[0] - u;
                this._currentLatLonAlt[0] = u + 0.95 * c;
              }
              if (s[0] < l) {
                var f = s[0] - l;
                this._currentLatLonAlt[0] = l + 0.95 * f;
              }
              if (
                ((this._latLonVelocity = [this._latLonVelocity[0] * this.drag, this._latLonVelocity[1] * this.drag]),
                this._ambientController.isEnabled)
              ) {
                var m = this._ambientController.ambientStrength,
                  h = this._ambientLonDirection,
                  p = this._ambientController.longitudeSpeed,
                  v = d(this._currentLatLonAlt, 2),
                  y = v[0],
                  g = v[1];
                (g += p * h * m),
                  Math.abs(this._latLonVelocity[0]) > 1e-4 && (this._ambientLatIn = this._calcAmbientLatIn(n));
                var _ = this._ambientController.latitudeSpeed;
                this._ambientLatIn += t * this._ambientLatDirection * _ * m;
                var x = this._ambientController.latitudeVariance / 2;
                (y += (Math.sin(this._ambientLatIn) * x - y) * m * m), (this._currentLatLonAlt = [y, g, i]);
              }
              if (this._animationController.isAnimatingLatLon) {
                var b = this._animationController.currentLatLon;
                this._currentLatLonAlt = [b[0], b[1], i];
              } else {
                for (; this._currentLatLonAlt[1] > 180; ) this._currentLatLonAlt[1] -= 360;
                for (; this._currentLatLonAlt[1] < -180; ) this._currentLatLonAlt[1] += 360;
              }
            }
          }
        },
        {
          key: "currentLatLonAlt",
          get: function() {
            return p(this._currentLatLonAlt);
          }
        }
      ]),
      t
    );
  })();
"undefined" != typeof globalThis
  ? globalThis
  : "undefined" != typeof window
  ? window
  : "undefined" != typeof global
  ? global
  : "undefined" != typeof self && self;
function kr(t, e) {
  return t((e = { exports: {} }), e.exports), e.exports;
}
kr(function(e) {
  /*! Hammer.JS - v2.0.8 - 2016-04-23
   * http://hammerjs.github.io/
   *
   * Copyright (c) 2016 Jorik Tangelder;
   * Licensed under the MIT license */
  !(function(n, r, i, o) {
    function a(t, e, n) {
      return setTimeout(f(t, n), e);
    }
    function s(t, e, n) {
      return !!Array.isArray(t) && (u(t, n[e], n), !0);
    }
    function u(t, e, n) {
      var r;
      if (t)
        if (t.forEach) t.forEach(e, n);
        else if (t.length !== o) for (r = 0; r < t.length; ) e.call(n, t[r], r, t), r++;
        else for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r, t);
    }
    function l(t, e, r) {
      var i = "DEPRECATED METHOD: " + e + "\n" + r + " AT \n";
      return function() {
        var e = new Error("get-stack-trace"),
          r =
            e && e.stack
              ? e.stack
                  .replace(/^[^\(]+?[\n$]/gm, "")
                  .replace(/^\s+at\s+/gm, "")
                  .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
              : "Unknown Stack Trace",
          o = n.console && (n.console.warn || n.console.log);
        return o && o.call(n.console, i, r), t.apply(this, arguments);
      };
    }
    function c(t, e, n) {
      var r,
        i = e.prototype;
      ((r = t.prototype = Object.create(i)).constructor = t), (r._super = i), n && ot(r, n);
    }
    function f(t, e) {
      return function() {
        return t.apply(e, arguments);
      };
    }
    function m(e, n) {
      return t(e) == ut ? e.apply((n && n[0]) || o, n) : e;
    }
    function h(t, e) {
      return t === o ? e : t;
    }
    function d(t, e, n) {
      u(g(e), function(e) {
        t.addEventListener(e, n, !1);
      });
    }
    function p(t, e, n) {
      u(g(e), function(e) {
        t.removeEventListener(e, n, !1);
      });
    }
    function v(t, e) {
      for (; t; ) {
        if (t == e) return !0;
        t = t.parentNode;
      }
      return !1;
    }
    function y(t, e) {
      return t.indexOf(e) > -1;
    }
    function g(t) {
      return t.trim().split(/\s+/g);
    }
    function _(t, e, n) {
      if (t.indexOf && !n) return t.indexOf(e);
      for (var r = 0; r < t.length; ) {
        if ((n && t[r][n] == e) || (!n && t[r] === e)) return r;
        r++;
      }
      return -1;
    }
    function x(t) {
      return Array.prototype.slice.call(t, 0);
    }
    function b(t, e, n) {
      for (var r = [], i = [], o = 0; o < t.length; ) {
        var a = e ? t[o][e] : t[o];
        _(i, a) < 0 && r.push(t[o]), (i[o] = a), o++;
      }
      return (
        n &&
          (r = e
            ? r.sort(function(t, n) {
                return t[e] > n[e];
              })
            : r.sort()),
        r
      );
    }
    function w(t, e) {
      for (var n, r, i = e[0].toUpperCase() + e.slice(1), a = 0; a < at.length; ) {
        if ((r = (n = at[a]) ? n + i : e) in t) return r;
        a++;
      }
      return o;
    }
    function A(t) {
      var e = t.ownerDocument || t;
      return e.defaultView || e.parentWindow || n;
    }
    function C(t, e) {
      var n = this;
      (this.manager = t),
        (this.callback = e),
        (this.element = t.element),
        (this.target = t.options.inputTarget),
        (this.domHandler = function(e) {
          m(t.options.enable, [t]) && n.handler(e);
        }),
        this.init();
    }
    function T(t, e, n) {
      var r = n.pointers.length,
        i = n.changedPointers.length,
        o = e & bt && r - i == 0,
        a = e & (At | Ct) && r - i == 0;
      (n.isFirst = !!o),
        (n.isFinal = !!a),
        o && (t.session = {}),
        (n.eventType = e),
        (function(t, e) {
          var n = t.session,
            r = e.pointers,
            i = r.length;
          n.firstInput || (n.firstInput = P(e)),
            i > 1 && !n.firstMultiple ? (n.firstMultiple = P(e)) : 1 === i && (n.firstMultiple = !1);
          var o = n.firstInput,
            a = n.firstMultiple,
            s = a ? a.center : o.center,
            u = (e.center = S(r));
          (e.timeStamp = ft()),
            (e.deltaTime = e.timeStamp - o.timeStamp),
            (e.angle = z(s, u)),
            (e.distance = M(s, u)),
            (function(t, e) {
              var n = e.center,
                r = t.offsetDelta || {},
                i = t.prevDelta || {},
                o = t.prevInput || {};
              (e.eventType !== bt && o.eventType !== At) ||
                ((i = t.prevDelta = { x: o.deltaX || 0, y: o.deltaY || 0 }), (r = t.offsetDelta = { x: n.x, y: n.y })),
                (e.deltaX = i.x + (n.x - r.x)),
                (e.deltaY = i.y + (n.y - r.y));
            })(n, e),
            (e.offsetDirection = L(e.deltaX, e.deltaY));
          var l = E(e.deltaTime, e.deltaX, e.deltaY);
          (e.overallVelocityX = l.x),
            (e.overallVelocityY = l.y),
            (e.overallVelocity = ct(l.x) > ct(l.y) ? l.x : l.y),
            (e.scale = a
              ? (function(t, e) {
                  return M(e[0], e[1], Rt) / M(t[0], t[1], Rt);
                })(a.pointers, r)
              : 1),
            (e.rotation = a
              ? (function(t, e) {
                  return z(e[1], e[0], Rt) + z(t[1], t[0], Rt);
                })(a.pointers, r)
              : 0),
            (e.maxPointers = n.prevInput
              ? e.pointers.length > n.prevInput.maxPointers
                ? e.pointers.length
                : n.prevInput.maxPointers
              : e.pointers.length),
            I(n, e);
          var c = t.element;
          v(e.srcEvent.target, c) && (c = e.srcEvent.target), (e.target = c);
        })(t, n),
        t.emit("hammer.input", n),
        t.recognize(n),
        (t.session.prevInput = n);
    }
    function I(t, e) {
      var n,
        r,
        i,
        a,
        s = t.lastInterval || e,
        u = e.timeStamp - s.timeStamp;
      if (e.eventType != Ct && (u > xt || s.velocity === o)) {
        var l = e.deltaX - s.deltaX,
          c = e.deltaY - s.deltaY,
          f = E(u, l, c);
        (r = f.x), (i = f.y), (n = ct(f.x) > ct(f.y) ? f.x : f.y), (a = L(l, c)), (t.lastInterval = e);
      } else (n = s.velocity), (r = s.velocityX), (i = s.velocityY), (a = s.direction);
      (e.velocity = n), (e.velocityX = r), (e.velocityY = i), (e.direction = a);
    }
    function P(t) {
      for (var e = [], n = 0; n < t.pointers.length; )
        (e[n] = { clientX: lt(t.pointers[n].clientX), clientY: lt(t.pointers[n].clientY) }), n++;
      return { timeStamp: ft(), pointers: e, center: S(e), deltaX: t.deltaX, deltaY: t.deltaY };
    }
    function S(t) {
      var e = t.length;
      if (1 === e) return { x: lt(t[0].clientX), y: lt(t[0].clientY) };
      for (var n = 0, r = 0, i = 0; e > i; ) (n += t[i].clientX), (r += t[i].clientY), i++;
      return { x: lt(n / e), y: lt(r / e) };
    }
    function E(t, e, n) {
      return { x: e / t || 0, y: n / t || 0 };
    }
    function L(t, e) {
      return t === e ? Tt : ct(t) >= ct(e) ? (0 > t ? It : Pt) : 0 > e ? St : Et;
    }
    function M(t, e, n) {
      n || (n = Ft);
      var r = e[n[0]] - t[n[0]],
        i = e[n[1]] - t[n[1]];
      return Math.sqrt(r * r + i * i);
    }
    function z(t, e, n) {
      n || (n = Ft);
      var r = e[n[0]] - t[n[0]],
        i = e[n[1]] - t[n[1]];
      return (180 * Math.atan2(i, r)) / Math.PI;
    }
    function F() {
      (this.evEl = kt), (this.evWin = Ot), (this.pressed = !1), C.apply(this, arguments);
    }
    function R() {
      (this.evEl = Gt),
        (this.evWin = Nt),
        C.apply(this, arguments),
        (this.store = this.manager.session.pointerEvents = []);
    }
    function D() {
      (this.evTarget = Vt), (this.evWin = Wt), (this.started = !1), C.apply(this, arguments);
    }
    function k(t, e) {
      var n = x(t.touches),
        r = x(t.changedTouches);
      return e & (At | Ct) && (n = b(n.concat(r), "identifier", !0)), [n, r];
    }
    function O() {
      (this.evTarget = Ht), (this.targetIds = {}), C.apply(this, arguments);
    }
    function j(t, e) {
      var n = x(t.touches),
        r = this.targetIds;
      if (e & (bt | wt) && 1 === n.length) return (r[n[0].identifier] = !0), [n, n];
      var i,
        o,
        a = x(t.changedTouches),
        s = [],
        u = this.target;
      if (
        ((o = n.filter(function(t) {
          return v(t.target, u);
        })),
        e === bt)
      )
        for (i = 0; i < o.length; ) (r[o[i].identifier] = !0), i++;
      for (i = 0; i < a.length; ) r[a[i].identifier] && s.push(a[i]), e & (At | Ct) && delete r[a[i].identifier], i++;
      return s.length ? [b(o.concat(s), "identifier", !0), s] : void 0;
    }
    function B() {
      C.apply(this, arguments);
      var t = f(this.handler, this);
      (this.touch = new O(this.manager, t)),
        (this.mouse = new F(this.manager, t)),
        (this.primaryTouch = null),
        (this.lastTouches = []);
    }
    function G(t, e) {
      t & bt
        ? ((this.primaryTouch = e.changedPointers[0].identifier), N.call(this, e))
        : t & (At | Ct) && N.call(this, e);
    }
    function N(t) {
      var e = t.changedPointers[0];
      if (e.identifier === this.primaryTouch) {
        var n = { x: e.clientX, y: e.clientY };
        this.lastTouches.push(n);
        var r = this.lastTouches;
        setTimeout(function() {
          var t = r.indexOf(n);
          t > -1 && r.splice(t, 1);
        }, Xt);
      }
    }
    function U(t) {
      for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, r = 0; r < this.lastTouches.length; r++) {
        var i = this.lastTouches[r],
          o = Math.abs(e - i.x),
          a = Math.abs(n - i.y);
        if (qt >= o && qt >= a) return !0;
      }
      return !1;
    }
    function V(t, e) {
      (this.manager = t), this.set(e);
    }
    function W(t) {
      (this.options = ot({}, this.defaults, t || {})),
        (this.id = dt++),
        (this.manager = null),
        (this.options.enable = h(this.options.enable, !0)),
        (this.state = ie),
        (this.simultaneous = {}),
        (this.requireFail = []);
    }
    function Y(t) {
      return t & le ? "cancel" : t & se ? "end" : t & ae ? "move" : t & oe ? "start" : "";
    }
    function H(t) {
      return t == Et ? "down" : t == St ? "up" : t == It ? "left" : t == Pt ? "right" : "";
    }
    function X(t, e) {
      var n = e.manager;
      return n ? n.get(t) : t;
    }
    function q() {
      W.apply(this, arguments);
    }
    function Z() {
      q.apply(this, arguments), (this.pX = null), (this.pY = null);
    }
    function K() {
      q.apply(this, arguments);
    }
    function J() {
      W.apply(this, arguments), (this._timer = null), (this._input = null);
    }
    function Q() {
      q.apply(this, arguments);
    }
    function $() {
      q.apply(this, arguments);
    }
    function tt() {
      W.apply(this, arguments),
        (this.pTime = !1),
        (this.pCenter = !1),
        (this._timer = null),
        (this._input = null),
        (this.count = 0);
    }
    function et(t, e) {
      return ((e = e || {}).recognizers = h(e.recognizers, et.defaults.preset)), new nt(t, e);
    }
    function nt(t, e) {
      (this.options = ot({}, et.defaults, e || {})),
        (this.options.inputTarget = this.options.inputTarget || t),
        (this.handlers = {}),
        (this.session = {}),
        (this.recognizers = []),
        (this.oldCssProps = {}),
        (this.element = t),
        (this.input = (function(t) {
          var e = t.options.inputClass;
          return new (e || (vt ? R : yt ? O : pt ? B : F))(t, T);
        })(this)),
        (this.touchAction = new V(this, this.options.touchAction)),
        rt(this, !0),
        u(
          this.options.recognizers,
          function(t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
          },
          this
        );
    }
    function rt(t, e) {
      var n,
        r = t.element;
      r.style &&
        (u(t.options.cssProps, function(i, o) {
          (n = w(r.style, o)),
            e ? ((t.oldCssProps[n] = r.style[n]), (r.style[n] = i)) : (r.style[n] = t.oldCssProps[n] || "");
        }),
        e || (t.oldCssProps = {}));
    }
    function it(t, e) {
      var n = r.createEvent("Event");
      n.initEvent(t, !0, !0), (n.gesture = e), e.target.dispatchEvent(n);
    }
    var ot,
      at = ["", "webkit", "Moz", "MS", "ms", "o"],
      st = r.createElement("div"),
      ut = "function",
      lt = Math.round,
      ct = Math.abs,
      ft = Date.now;
    ot =
      "function" != typeof Object.assign
        ? function(t) {
            if (t === o || null === t) throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), n = 1; n < arguments.length; n++) {
              var r = arguments[n];
              if (r !== o && null !== r) for (var i in r) r.hasOwnProperty(i) && (e[i] = r[i]);
            }
            return e;
          }
        : Object.assign;
    var mt = l(
        function(t, e, n) {
          for (var r = Object.keys(e), i = 0; i < r.length; ) (!n || (n && t[r[i]] === o)) && (t[r[i]] = e[r[i]]), i++;
          return t;
        },
        "extend",
        "Use `assign`."
      ),
      ht = l(
        function(t, e) {
          return mt(t, e, !0);
        },
        "merge",
        "Use `assign`."
      ),
      dt = 1,
      pt = "ontouchstart" in n,
      vt = w(n, "PointerEvent") !== o,
      yt = pt && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
      gt = "touch",
      _t = "mouse",
      xt = 25,
      bt = 1,
      wt = 2,
      At = 4,
      Ct = 8,
      Tt = 1,
      It = 2,
      Pt = 4,
      St = 8,
      Et = 16,
      Lt = It | Pt,
      Mt = St | Et,
      zt = Lt | Mt,
      Ft = ["x", "y"],
      Rt = ["clientX", "clientY"];
    C.prototype = {
      handler: function() {},
      init: function() {
        this.evEl && d(this.element, this.evEl, this.domHandler),
          this.evTarget && d(this.target, this.evTarget, this.domHandler),
          this.evWin && d(A(this.element), this.evWin, this.domHandler);
      },
      destroy: function() {
        this.evEl && p(this.element, this.evEl, this.domHandler),
          this.evTarget && p(this.target, this.evTarget, this.domHandler),
          this.evWin && p(A(this.element), this.evWin, this.domHandler);
      }
    };
    var Dt = { mousedown: bt, mousemove: wt, mouseup: At },
      kt = "mousedown",
      Ot = "mousemove mouseup";
    c(F, C, {
      handler: function(t) {
        var e = Dt[t.type];
        e & bt && 0 === t.button && (this.pressed = !0),
          e & wt && 1 !== t.which && (e = At),
          this.pressed &&
            (e & At && (this.pressed = !1),
            this.callback(this.manager, e, { pointers: [t], changedPointers: [t], pointerType: _t, srcEvent: t }));
      }
    });
    var jt = { pointerdown: bt, pointermove: wt, pointerup: At, pointercancel: Ct, pointerout: Ct },
      Bt = { 2: gt, 3: "pen", 4: _t, 5: "kinect" },
      Gt = "pointerdown",
      Nt = "pointermove pointerup pointercancel";
    n.MSPointerEvent && !n.PointerEvent && ((Gt = "MSPointerDown"), (Nt = "MSPointerMove MSPointerUp MSPointerCancel")),
      c(R, C, {
        handler: function(t) {
          var e = this.store,
            n = !1,
            r = t.type.toLowerCase().replace("ms", ""),
            i = jt[r],
            o = Bt[t.pointerType] || t.pointerType,
            a = o == gt,
            s = _(e, t.pointerId, "pointerId");
          i & bt && (0 === t.button || a) ? 0 > s && (e.push(t), (s = e.length - 1)) : i & (At | Ct) && (n = !0),
            0 > s ||
              ((e[s] = t),
              this.callback(this.manager, i, { pointers: e, changedPointers: [t], pointerType: o, srcEvent: t }),
              n && e.splice(s, 1));
        }
      });
    var Ut = { touchstart: bt, touchmove: wt, touchend: At, touchcancel: Ct },
      Vt = "touchstart",
      Wt = "touchstart touchmove touchend touchcancel";
    c(D, C, {
      handler: function(t) {
        var e = Ut[t.type];
        if ((e === bt && (this.started = !0), this.started)) {
          var n = k.call(this, t, e);
          e & (At | Ct) && n[0].length - n[1].length == 0 && (this.started = !1),
            this.callback(this.manager, e, { pointers: n[0], changedPointers: n[1], pointerType: gt, srcEvent: t });
        }
      }
    });
    var Yt = { touchstart: bt, touchmove: wt, touchend: At, touchcancel: Ct },
      Ht = "touchstart touchmove touchend touchcancel";
    c(O, C, {
      handler: function(t) {
        var e = Yt[t.type],
          n = j.call(this, t, e);
        n && this.callback(this.manager, e, { pointers: n[0], changedPointers: n[1], pointerType: gt, srcEvent: t });
      }
    });
    var Xt = 2500,
      qt = 25;
    c(B, C, {
      handler: function(t, e, n) {
        var r = n.pointerType == gt,
          i = n.pointerType == _t;
        if (!(i && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
          if (r) G.call(this, e, n);
          else if (i && U.call(this, n)) return;
          this.callback(t, e, n);
        }
      },
      destroy: function() {
        this.touch.destroy(), this.mouse.destroy();
      }
    });
    var Zt = w(st.style, "touchAction"),
      Kt = Zt !== o,
      Jt = "compute",
      Qt = "auto",
      $t = "manipulation",
      te = "none",
      ee = "pan-x",
      ne = "pan-y",
      re = (function() {
        if (!Kt) return !1;
        var t = {},
          e = n.CSS && n.CSS.supports;
        return (
          ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(r) {
            t[r] = !e || n.CSS.supports("touch-action", r);
          }),
          t
        );
      })();
    V.prototype = {
      set: function(t) {
        t == Jt && (t = this.compute()),
          Kt && this.manager.element.style && re[t] && (this.manager.element.style[Zt] = t),
          (this.actions = t.toLowerCase().trim());
      },
      update: function() {
        this.set(this.manager.options.touchAction);
      },
      compute: function() {
        var t = [];
        return (
          u(this.manager.recognizers, function(e) {
            m(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
          }),
          (function(t) {
            if (y(t, te)) return te;
            var e = y(t, ee),
              n = y(t, ne);
            return e && n ? te : e || n ? (e ? ee : ne) : y(t, $t) ? $t : Qt;
          })(t.join(" "))
        );
      },
      preventDefaults: function(t) {
        var e = t.srcEvent,
          n = t.offsetDirection;
        if (!this.manager.session.prevented) {
          var r = this.actions,
            i = y(r, te) && !re[te],
            o = y(r, ne) && !re[ne],
            a = y(r, ee) && !re[ee];
          if (i) {
            var s = 1 === t.pointers.length,
              u = t.distance < 2,
              l = t.deltaTime < 250;
            if (s && u && l) return;
          }
          return a && o ? void 0 : i || (o && n & Lt) || (a && n & Mt) ? this.preventSrc(e) : void 0;
        }
        e.preventDefault();
      },
      preventSrc: function(t) {
        (this.manager.session.prevented = !0), t.preventDefault();
      }
    };
    var ie = 1,
      oe = 2,
      ae = 4,
      se = 8,
      ue = se,
      le = 16;
    (W.prototype = {
      defaults: {},
      set: function(t) {
        return ot(this.options, t), this.manager && this.manager.touchAction.update(), this;
      },
      recognizeWith: function(t) {
        if (s(t, "recognizeWith", this)) return this;
        var e = this.simultaneous;
        return e[(t = X(t, this)).id] || ((e[t.id] = t), t.recognizeWith(this)), this;
      },
      dropRecognizeWith: function(t) {
        return s(t, "dropRecognizeWith", this) || ((t = X(t, this)), delete this.simultaneous[t.id]), this;
      },
      requireFailure: function(t) {
        if (s(t, "requireFailure", this)) return this;
        var e = this.requireFail;
        return -1 === _(e, (t = X(t, this))) && (e.push(t), t.requireFailure(this)), this;
      },
      dropRequireFailure: function(t) {
        if (s(t, "dropRequireFailure", this)) return this;
        t = X(t, this);
        var e = _(this.requireFail, t);
        return e > -1 && this.requireFail.splice(e, 1), this;
      },
      hasRequireFailures: function() {
        return this.requireFail.length > 0;
      },
      canRecognizeWith: function(t) {
        return !!this.simultaneous[t.id];
      },
      emit: function(t) {
        function e(e) {
          n.manager.emit(e, t);
        }
        var n = this,
          r = this.state;
        se > r && e(n.options.event + Y(r)),
          e(n.options.event),
          t.additionalEvent && e(t.additionalEvent),
          r >= se && e(n.options.event + Y(r));
      },
      tryEmit: function(t) {
        return this.canEmit() ? this.emit(t) : void (this.state = 32);
      },
      canEmit: function() {
        for (var t = 0; t < this.requireFail.length; ) {
          if (!(this.requireFail[t].state & (32 | ie))) return !1;
          t++;
        }
        return !0;
      },
      recognize: function(t) {
        var e = ot({}, t);
        return m(this.options.enable, [this, e])
          ? (this.state & (ue | le | 32) && (this.state = ie),
            (this.state = this.process(e)),
            void (this.state & (oe | ae | se | le) && this.tryEmit(e)))
          : (this.reset(), void (this.state = 32));
      },
      process: function(t) {},
      getTouchAction: function() {},
      reset: function() {}
    }),
      c(q, W, {
        defaults: { pointers: 1 },
        attrTest: function(t) {
          var e = this.options.pointers;
          return 0 === e || t.pointers.length === e;
        },
        process: function(t) {
          var e = this.state,
            n = t.eventType,
            r = e & (oe | ae),
            i = this.attrTest(t);
          return r && (n & Ct || !i) ? e | le : r || i ? (n & At ? e | se : e & oe ? e | ae : oe) : 32;
        }
      }),
      c(Z, q, {
        defaults: { event: "pan", threshold: 10, pointers: 1, direction: zt },
        getTouchAction: function() {
          var t = this.options.direction,
            e = [];
          return t & Lt && e.push(ne), t & Mt && e.push(ee), e;
        },
        directionTest: function(t) {
          var e = this.options,
            n = !0,
            r = t.distance,
            i = t.direction,
            o = t.deltaX,
            a = t.deltaY;
          return (
            i & e.direction ||
              (e.direction & Lt
                ? ((i = 0 === o ? Tt : 0 > o ? It : Pt), (n = o != this.pX), (r = Math.abs(t.deltaX)))
                : ((i = 0 === a ? Tt : 0 > a ? St : Et), (n = a != this.pY), (r = Math.abs(t.deltaY)))),
            (t.direction = i),
            n && r > e.threshold && i & e.direction
          );
        },
        attrTest: function(t) {
          return (
            q.prototype.attrTest.call(this, t) && (this.state & oe || (!(this.state & oe) && this.directionTest(t)))
          );
        },
        emit: function(t) {
          (this.pX = t.deltaX), (this.pY = t.deltaY);
          var e = H(t.direction);
          e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t);
        }
      }),
      c(K, q, {
        defaults: { event: "pinch", threshold: 0, pointers: 2 },
        getTouchAction: function() {
          return [te];
        },
        attrTest: function(t) {
          return (
            this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & oe)
          );
        },
        emit: function(t) {
          if (1 !== t.scale) {
            var e = t.scale < 1 ? "in" : "out";
            t.additionalEvent = this.options.event + e;
          }
          this._super.emit.call(this, t);
        }
      }),
      c(J, W, {
        defaults: { event: "press", pointers: 1, time: 251, threshold: 9 },
        getTouchAction: function() {
          return [Qt];
        },
        process: function(t) {
          var e = this.options,
            n = t.pointers.length === e.pointers,
            r = t.distance < e.threshold,
            i = t.deltaTime > e.time;
          if (((this._input = t), !r || !n || (t.eventType & (At | Ct) && !i))) this.reset();
          else if (t.eventType & bt)
            this.reset(),
              (this._timer = a(
                function() {
                  (this.state = ue), this.tryEmit();
                },
                e.time,
                this
              ));
          else if (t.eventType & At) return ue;
          return 32;
        },
        reset: function() {
          clearTimeout(this._timer);
        },
        emit: function(t) {
          this.state === ue &&
            (t && t.eventType & At
              ? this.manager.emit(this.options.event + "up", t)
              : ((this._input.timeStamp = ft()), this.manager.emit(this.options.event, this._input)));
        }
      }),
      c(Q, q, {
        defaults: { event: "rotate", threshold: 0, pointers: 2 },
        getTouchAction: function() {
          return [te];
        },
        attrTest: function(t) {
          return (
            this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & oe)
          );
        }
      }),
      c($, q, {
        defaults: { event: "swipe", threshold: 10, velocity: 0.3, direction: Lt | Mt, pointers: 1 },
        getTouchAction: function() {
          return Z.prototype.getTouchAction.call(this);
        },
        attrTest: function(t) {
          var e,
            n = this.options.direction;
          return (
            n & (Lt | Mt)
              ? (e = t.overallVelocity)
              : n & Lt
              ? (e = t.overallVelocityX)
              : n & Mt && (e = t.overallVelocityY),
            this._super.attrTest.call(this, t) &&
              n & t.offsetDirection &&
              t.distance > this.options.threshold &&
              t.maxPointers == this.options.pointers &&
              ct(e) > this.options.velocity &&
              t.eventType & At
          );
        },
        emit: function(t) {
          var e = H(t.offsetDirection);
          e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t);
        }
      }),
      c(tt, W, {
        defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 },
        getTouchAction: function() {
          return [$t];
        },
        process: function(t) {
          var e = this.options,
            n = t.pointers.length === e.pointers,
            r = t.distance < e.threshold,
            i = t.deltaTime < e.time;
          if ((this.reset(), t.eventType & bt && 0 === this.count)) return this.failTimeout();
          if (r && i && n) {
            if (t.eventType != At) return this.failTimeout();
            var o = !this.pTime || t.timeStamp - this.pTime < e.interval,
              s = !this.pCenter || M(this.pCenter, t.center) < e.posThreshold;
            if (
              ((this.pTime = t.timeStamp),
              (this.pCenter = t.center),
              s && o ? (this.count += 1) : (this.count = 1),
              (this._input = t),
              0 === this.count % e.taps)
            )
              return this.hasRequireFailures()
                ? ((this._timer = a(
                    function() {
                      (this.state = ue), this.tryEmit();
                    },
                    e.interval,
                    this
                  )),
                  oe)
                : ue;
          }
          return 32;
        },
        failTimeout: function() {
          return (
            (this._timer = a(
              function() {
                this.state = 32;
              },
              this.options.interval,
              this
            )),
            32
          );
        },
        reset: function() {
          clearTimeout(this._timer);
        },
        emit: function() {
          this.state == ue && ((this._input.tapCount = this.count), this.manager.emit(this.options.event, this._input));
        }
      }),
      (et.VERSION = "2.0.8"),
      (et.defaults = {
        domEvents: !1,
        touchAction: Jt,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
          [Q, { enable: !1 }],
          [K, { enable: !1 }, ["rotate"]],
          [$, { direction: Lt }],
          [Z, { direction: Lt }, ["swipe"]],
          [tt],
          [tt, { event: "doubletap", taps: 2 }, ["tap"]],
          [J]
        ],
        cssProps: {
          userSelect: "none",
          touchSelect: "none",
          touchCallout: "none",
          contentZooming: "none",
          userDrag: "none",
          tapHighlightColor: "rgba(0,0,0,0)"
        }
      });
    (nt.prototype = {
      set: function(t) {
        return (
          ot(this.options, t),
          t.touchAction && this.touchAction.update(),
          t.inputTarget && (this.input.destroy(), (this.input.target = t.inputTarget), this.input.init()),
          this
        );
      },
      stop: function(t) {
        this.session.stopped = t ? 2 : 1;
      },
      recognize: function(t) {
        var e = this.session;
        if (!e.stopped) {
          this.touchAction.preventDefaults(t);
          var n,
            r = this.recognizers,
            i = e.curRecognizer;
          (!i || (i && i.state & ue)) && (i = e.curRecognizer = null);
          for (var o = 0; o < r.length; )
            (n = r[o]),
              2 === e.stopped || (i && n != i && !n.canRecognizeWith(i)) ? n.reset() : n.recognize(t),
              !i && n.state & (oe | ae | se) && (i = e.curRecognizer = n),
              o++;
        }
      },
      get: function(t) {
        if (t instanceof W) return t;
        for (var e = this.recognizers, n = 0; n < e.length; n++) if (e[n].options.event == t) return e[n];
        return null;
      },
      add: function(t) {
        if (s(t, "add", this)) return this;
        var e = this.get(t.options.event);
        return e && this.remove(e), this.recognizers.push(t), (t.manager = this), this.touchAction.update(), t;
      },
      remove: function(t) {
        if (s(t, "remove", this)) return this;
        if ((t = this.get(t))) {
          var e = this.recognizers,
            n = _(e, t);
          -1 !== n && (e.splice(n, 1), this.touchAction.update());
        }
        return this;
      },
      on: function(t, e) {
        if (t !== o && e !== o) {
          var n = this.handlers;
          return (
            u(g(t), function(t) {
              (n[t] = n[t] || []), n[t].push(e);
            }),
            this
          );
        }
      },
      off: function(t, e) {
        if (t !== o) {
          var n = this.handlers;
          return (
            u(g(t), function(t) {
              e ? n[t] && n[t].splice(_(n[t], e), 1) : delete n[t];
            }),
            this
          );
        }
      },
      emit: function(t, e) {
        this.options.domEvents && it(t, e);
        var n = this.handlers[t] && this.handlers[t].slice();
        if (n && n.length) {
          (e.type = t),
            (e.preventDefault = function() {
              e.srcEvent.preventDefault();
            });
          for (var r = 0; r < n.length; ) n[r](e), r++;
        }
      },
      destroy: function() {
        this.element && rt(this, !1),
          (this.handlers = {}),
          (this.session = {}),
          this.input.destroy(),
          (this.element = null);
      }
    }),
      ot(et, {
        INPUT_START: bt,
        INPUT_MOVE: wt,
        INPUT_END: At,
        INPUT_CANCEL: Ct,
        STATE_POSSIBLE: ie,
        STATE_BEGAN: oe,
        STATE_CHANGED: ae,
        STATE_ENDED: se,
        STATE_RECOGNIZED: ue,
        STATE_CANCELLED: le,
        STATE_FAILED: 32,
        DIRECTION_NONE: Tt,
        DIRECTION_LEFT: It,
        DIRECTION_RIGHT: Pt,
        DIRECTION_UP: St,
        DIRECTION_DOWN: Et,
        DIRECTION_HORIZONTAL: Lt,
        DIRECTION_VERTICAL: Mt,
        DIRECTION_ALL: zt,
        Manager: nt,
        Input: C,
        TouchAction: V,
        TouchInput: O,
        MouseInput: F,
        PointerEventInput: R,
        TouchMouseInput: B,
        SingleTouchInput: D,
        Recognizer: W,
        AttrRecognizer: q,
        Tap: tt,
        Pan: Z,
        Swipe: $,
        Pinch: K,
        Rotate: Q,
        Press: J,
        on: d,
        off: p,
        each: u,
        merge: ht,
        extend: mt,
        assign: ot,
        inherit: c,
        bindFn: f,
        prefixed: w
      }),
      ((void 0 !== n ? n : "undefined" != typeof self ? self : {}).Hammer = et),
      e.exports ? (e.exports = et) : (n.Hammer = et);
  })(window, document);
});
var Or = (function() {
    function t(n, r, o) {
      var a = this;
      e(this, t),
        i(this, "targetElement", window),
        i(this, "targetDrawable", null),
        i(this, "camera", null),
        i(this, "boundingRect", null),
        i(this, "onTapCB", null),
        i(this, "onMouseMoveCB", null),
        i(this, "options", { tap: !0, pan: !0, pinch: !0 }),
        i(this, "_movementModel", null),
        i(this, "_ambientController", null),
        i(this, "_animationController", null),
        i(this, "_isInteractive", !1),
        i(this, "resize", function() {
          (a.boundingRect = a.targetElement.getBoundingClientRect()),
            a._movementModel.resize(a.boundingRect.width, a.boundingRect.height, a.camera.aspect, a.camera.fov);
        }),
        i(this, "update", function() {
          a._movementModel.update(a.camera.fov);
        }),
        i(this, "isOverTarget", function(t, e) {
          var n = t - a.boundingRect.x,
            r = e - a.boundingRect.y,
            i = n / a.boundingRect.width,
            o = (a.boundingRect.height - r) / a.boundingRect.height,
            s = a.camera.getRayFromScreen(i, o);
          return a.targetDrawable.hitTest(s);
        }),
        i(this, "onPanStart", function(t) {
          a.isOverTarget(t.center.x, t.center.y) && (a._movementModel.startPan(t), a._ambientController.pauseMotion());
        }),
        i(this, "onPanContinue", function(t) {
          a._movementModel.continuePan(t);
        }),
        i(this, "onPanEnd", function(t) {
          a._movementModel.endPan(t), a._ambientController.isEnabled && a._ambientController.resumeMotionAnimated();
        }),
        i(this, "onTap", function(t) {
          var e = t.center.x - a.boundingRect.x,
            n = t.center.y - a.boundingRect.y;
          a.onTapCB && a.onTapCB(e, n);
        }),
        i(this, "onMouseMove", function(t) {
          var e = t.offsetX - a.boundingRect.x,
            n = t.offsetY - a.boundingRect.y;
          a.onMouseMoveCB && a.onMouseMoveCB(e, n);
        }),
        n && ((this.targetElement = n), (this.boundingRect = this.targetElement.getBoundingClientRect())),
        (this.camera = r),
        o &&
          (o.tap && (this.options.tap = o.tap),
          o.pan && (this.options.pan = o.pan),
          o.pinch && (this.options.pinch = o.pinch));
      var s = window.Hammer;
      (this.hammer = s(this.targetElement, null)),
        this.hammer.get("pan").set({ direction: s.DIRECTION_ALL }),
        this.targetElement.addEventListener("mousemove", this.onMouseMove),
        (this.isInteractive = !0);
    }
    return (
      r(t, [
        {
          key: "register",
          value: function(t, e, n) {
            (this._movementModel = n),
              this._movementModel.resize(
                this.boundingRect.width,
                this.boundingRect.height,
                this.camera.aspect,
                this.camera.fov
              ),
              (this._ambientController = t),
              (this._animationController = e);
          }
        },
        {
          key: "target",
          set: function(t) {
            this.targetDrawable = t;
          }
        },
        {
          key: "isInteractive",
          get: function() {
            return this._isInteractive;
          },
          set: function(t) {
            t !== this._isInteractive &&
              (t
                ? (this.options.tap && this.hammer.on("tap", this.onTap),
                  this.options.pan && this.hammer.on("panstart", this.onPanStart),
                  this.options.pan && this.hammer.on("pan", this.onPanContinue),
                  this.options.pan && this.hammer.on("panend", this.onPanEnd),
                  this.options.pinch && this.hammer.on("tap", this.onPinch),
                  (this._isInteractive = t))
                : (this.options.tap && this.hammer.off("tap", this.onTap),
                  this.options.pan && this.hammer.off("panstart", this.onPanStart),
                  this.options.pan && this.hammer.off("pan", this.onPanContinue),
                  this.options.pan && this.hammer.off("panend", this.onPanEnd),
                  this.options.pinch && this.hammer.off("tap", this.onPinch),
                  (this._isInteractive = t)));
          }
        }
      ]),
      t
    );
  })(),
  jr = (function() {
    function t() {
      e(this, t);
    }
    return (
      r(t, null, [
        {
          key: "create",
          value: function(t, e, n, r) {
            var i = 3 * t,
              o = 3 * (n - t) - i,
              a = 1 - i - o,
              s = 3 * e,
              u = 3 * (r - e) - s,
              l = 1 - s - u,
              c = function(t) {
                return ((a * t + o) * t + i) * t;
              };
            return function(t) {
              return (function(t) {
                return ((l * t + u) * t + s) * t;
              })(
                (function(t, e) {
                  var n, r, s, u, l, f;
                  s = t;
                  for (var m = 0; m < 8; m++) {
                    if (((u = c(s) - t), Math.abs(u) < e)) return s;
                    if (((l = (3 * a * (f = s) + 2 * o) * f + i), Math.abs(l) < 1e-6)) break;
                    s -= u / l;
                  }
                  if ((s = t) < (n = 0)) return n;
                  if (s > (r = 1)) return r;
                  for (; n < r; ) {
                    if (((u = c(s)), Math.abs(u - t) < e)) return s;
                    t > u ? (n = s) : (r = s), (s = 0.5 * (r - n) + n);
                  }
                  return s;
                })(t, 1e-9)
              );
            };
          }
        }
      ]),
      t
    );
  })(),
  Br = (function() {
    function t() {
      e(this, t),
        i(this, "_latLonTween", null),
        i(this, "_altTween", null),
        i(this, "_currentLatLon", null),
        i(this, "_currentAlt", null),
        i(this, "_movementModel", null),
        i(this, "_interactionController", null),
        i(this, "_ambientController", null);
    }
    return (
      r(
        t,
        [
          {
            key: "register",
            value: function(t, e, n) {
              (this._movementModel = n), (this._interactionController = e), (this._ambientController = t);
            }
          },
          {
            key: "animateLatLonAlt",
            value: function(e, n, r, i) {
              var o = i || {};
              if (!o.duration && 0 !== o.duration) {
                var s = this._movementModel.currentLatLonAlt,
                  u = [e, n];
                o.duration = t._defaultDuration(s, u);
              }
              this.animateLatLon(e, n, o), this.animateAlt(r, a(a({}, o), {}, { onComplete: null }));
            }
          },
          {
            key: "animateLatLon",
            value: function(e, n, r) {
              var i = this,
                o = r || {},
                a = this._movementModel.currentLatLonAlt;
              this._currentLatLon = [a[0], a[1]];
              var s = p(this._currentLatLon),
                u = [e, n],
                l = n + 360,
                c = n - 360,
                f = Math.abs(n - s[1]),
                m = Math.abs(l - s[1]),
                h = Math.abs(c - s[1]);
              m <= h && m <= f && (u[1] = l), h <= f && h <= m && (u[1] = c);
              var d,
                v = o.duration;
              if (
                (v || 0 === v || (v = t._defaultDuration(s, u)),
                (d = o.ease && "function" == typeof o.ease ? o.ease : t._defaultLatLonEase(v)),
                !this._ambientController.isPaused)
              ) {
                var y = Math.min(250, v / 4);
                this._ambientController.pauseMotionAnimated({ duration: y });
              }
              this._latLonTween && this._latLonTween.stop(),
                (this._latLonTween = new Lr(0, 1, v, {
                  onUpdate: function(t) {
                    var e = d(t);
                    i._currentLatLon = [s[0] + (u[0] - s[0]) * e, s[1] + (u[1] - s[1]) * e];
                  },
                  onComplete: function(t) {
                    t &&
                      ((i._latLonTween = null),
                      (i._currentLatLon = null),
                      i._movementModel.setLatLon(u[0], u[1]),
                      i._ambientController.isEnabled &&
                        i._ambientController.isPaused &&
                        i._ambientController.resumeMotionAnimated()),
                      o.onComplete && "function" == typeof o.onComplete && o.onComplete(t);
                  }
                }));
            }
          },
          {
            key: "animateAlt",
            value: function(t, e) {
              var n = this,
                r = e || {};
              this._currentAlt = this._movementModel.currentLatLonAlt[2];
              var i,
                o = this._currentAlt,
                a = t,
                s = r.duration;
              if (
                (s || 0 === s || (s = 500),
                (i =
                  r.ease && "function" == typeof r.ease
                    ? r.ease
                    : function(t) {
                        return t;
                      }),
                !this._ambientController.isPaused)
              ) {
                var u = Math.min(250, s / 4);
                this._ambientController.pauseMotionAnimated({ duration: u });
              }
              this._altTween && this._altTween.stop(),
                (this._altTween = new Lr(0, 1, s, {
                  onUpdate: function(t) {
                    var e = i(t);
                    n._currentAlt = o + (a - o) * e;
                  },
                  onComplete: function(t) {
                    t &&
                      ((n._altTween = null),
                      (n._currentAlt = null),
                      n._movementModel.setAlt(a),
                      n._ambientController.isEnabled &&
                        n._ambientController.isPaused &&
                        n._ambientController.resumeMotionAnimated()),
                      r.onComplete && "function" == typeof r.onComplete && r.onComplete(t);
                  }
                }));
            }
          },
          {
            key: "cancelLatLonAlt",
            value: function() {
              this.cancelLatLon(), this.cancelAlt();
            }
          },
          {
            key: "cancelLatLon",
            value: function() {
              this._latLonTween && (this._latLonTween.stop(), (this._latLonTween = null), (this._currentLatLon = null));
            }
          },
          {
            key: "cancelAlt",
            value: function() {
              this._altTween && (this._altTween.stop(), (this._altTween = null), (this._currentAlt = null));
            }
          },
          {
            key: "isAnimatingLatLon",
            get: function() {
              return null != this._latLonTween;
            }
          },
          {
            key: "isAnimatingAlt",
            get: function() {
              return null != this._altTween;
            }
          },
          {
            key: "currentLatLon",
            get: function() {
              return this._currentLatLon;
            }
          },
          {
            key: "currentAlt",
            get: function() {
              return this._currentAlt;
            }
          }
        ],
        [
          {
            key: "_defaultDuration",
            value: function(t, e) {
              return 300 + 700 * (1 - (Er.dotBetweenLatLon(t, e) + 1) / 2);
            }
          },
          {
            key: "_defaultLatLonEase",
            value: function(t) {
              var e = t - 350,
                n = 0.55 + (0.85 - 0.55) * Math.min(Math.max(e / 100, 0), 1);
              return jr.create(0.315, 0.015, 1 - n, 1);
            }
          }
        ]
      ),
      t
    );
  })(),
  Gr = (function() {
    function t() {
      e(this, t),
        i(this, "latitudeVariance", 100),
        i(this, "latitudeSpeed", 0.5),
        i(this, "longitudeSpeed", 0.05),
        i(this, "isEnabled", !0),
        i(this, "_ambientStrength", 1),
        i(this, "_ambientTween", null),
        i(this, "_isPaused", !1),
        i(this, "_movementController", null),
        i(this, "_animationController", null),
        i(this, "_interactionController", null);
    }
    return (
      r(t, [
        {
          key: "register",
          value: function(t, e, n) {
            (this._movementModel = n), (this._interactionController = e), (this._animationController = t);
          }
        },
        {
          key: "pauseMotion",
          value: function() {
            (this._isPaused = !0),
              this._ambientTween && this._ambientTween.stop(),
              (this._ambientTween = null),
              (this._ambientStrength = 0);
          }
        },
        {
          key: "pauseMotionAnimated",
          value: function(t) {
            var e = this;
            this._isPaused = !0;
            var n,
              r = t || {},
              i = 500;
            (r.duration || 0 === r.duration) && (i = r.duration),
              (n =
                r.ease && "function" == typeof r.ease
                  ? r.ease
                  : function(t) {
                      return t;
                    });
            var o = 1;
            this._ambientTween && ((o = this._ambientTween.currentValue()), this._ambientTween.stop());
            this._ambientTween = new Lr(o, 0, (o - 0) * i, {
              onUpdate: function(t) {
                e._ambientStrength = n(t);
              },
              onComplete: function(t) {
                t && (e._ambientTween = null), r.onComplete && "function" == typeof r.onComplete && r.onComplete(t);
              }
            });
          }
        },
        {
          key: "resumeMotion",
          value: function() {
            (this._isPaused = !1), this._ambientTween.stop(), (this._ambientTween = null), (this._ambientStrength = 1);
          }
        },
        {
          key: "resumeMotionAnimated",
          value: function(t) {
            var e = this;
            this._isPaused = !1;
            var n,
              r = t || {},
              i = 1e3;
            (r.duration || 0 === r.duration) && (i = r.duration),
              (n =
                r.ease && "function" == typeof r.ease
                  ? r.ease
                  : function(t) {
                      return t;
                    });
            var o = 0;
            this._ambientTween && ((o = this._ambientTween.currentValue()), this._ambientTween.stop());
            this._ambientTween = new Lr(o, 1, (1 - o) * i, {
              onUpdate: function(t) {
                e._ambientStrength = 1 - n(1 - t);
              },
              onComplete: function(t) {
                t && (e._ambientTween = null), r.onComplete && "function" == typeof r.onComplete && r.onComplete(t);
              }
            });
          }
        },
        {
          key: "ambientStrength",
          get: function() {
            return this._ambientStrength;
          }
        },
        {
          key: "isPaused",
          get: function() {
            return this._isPaused;
          }
        }
      ]),
      t
    );
  })(),
  Nr = (function() {
    function t(n) {
      var r = this;
      e(this, t),
        i(this, "_container", null),
        i(this, "_callouts", {}),
        i(this, "_calloutDefinitions", []),
        i(this, "_currentlyRemoving", []),
        i(this, "onAutoRemove", null),
        i(this, "autoRemoveCallouts", !0),
        i(this, "autoRemoveThresholdSimilarity", 0.5),
        i(this, "autoRemoveThresholdMargins", { top: 0, right: 0, left: 0, bottom: 0 }),
        i(this, "shouldAutoRemoveCallout", null),
        n && "DIV" === n.tagName
          ? ((this._container = n),
            (this._container.style.pointerEvents = "none"),
            (this.resizeObserver = new ResizeObserver(function(t) {
              t.length && (r.bounds = t[0].contentRect);
            })),
            this.resizeObserver.observe(this._container))
          : console.warn("CalloutManager expects a DIV element as a container."),
        (this._removeCalloutComplete = this._removeCalloutComplete.bind(this));
    }
    return (
      r(t, [
        {
          key: "release",
          value: function() {
            this.resizeObserver.disconnect();
          }
        },
        {
          key: "addCallout",
          value: function(t) {
            this.replaceCallouts([].concat(p(this._calloutDefinitions), [t]));
          }
        },
        {
          key: "removeCallout",
          value: function(t) {
            var e = this._calloutDefinitions.findIndex(function(e) {
              return e.id === t.id;
            });
            -1 !== e &&
              this.replaceCallouts(
                [].concat(p(this._calloutDefinitions.slice(0, e)), p(this._calloutDefinitions.slice(e + 1)))
              );
          }
        },
        {
          key: "replaceCallouts",
          value: function(t) {
            var e = this,
              n = t.filter(function(t) {
                return !e._calloutDefinitions.includes(t);
              }),
              r = this._calloutDefinitions
                .filter(function(e) {
                  return !t.includes(e);
                })
                .filter(function(t) {
                  return !e._currentlyRemoving.includes(t);
                });
            (this._currentlyRemoving = [].concat(p(this._currentlyRemoving), p(r))),
              (this._calloutDefinitions = [].concat(p(this._calloutDefinitions), p(n))),
              n
                .map(function(t) {
                  var n = t.calloutClass;
                  if (n) {
                    var r = new n(t);
                    if (e.positionProvider) {
                      var i = e.positionProvider([t]);
                      r.setPosition(i[0]);
                    }
                    return r;
                  }
                })
                .filter(function(t) {
                  return t;
                })
                .forEach(function(t) {
                  (e._callouts[t.definition.id] = t), e._container.appendChild(t.element), t.animateIn();
                }),
              r
                .map(function(t) {
                  return e._callouts[t.id];
                })
                .forEach(function(t) {
                  t.animateOut(e._removeCalloutComplete);
                });
          }
        },
        {
          key: "removeAllCallouts",
          value: function() {
            this.replaceCallouts([]);
          }
        },
        {
          key: "getCalloutForDefinition",
          value: function(t) {
            return this._callouts[t.id];
          }
        },
        {
          key: "update",
          value: function(t) {
            var e = this;
            if (this.positionProvider) {
              var n = [],
                r = this.positionProvider(this._calloutDefinitions);
              this._calloutDefinitions.forEach(function(i, o) {
                var a = e._callouts[i.id],
                  s = r[o];
                if ((a && (a.setPosition(s), a.update(t)), e.autoRemoveCallouts)) {
                  var u = e.autoRemoveThresholdSimilarity,
                    l = e.autoRemoveThresholdMargins;
                  (s.world.similarityToCameraVector < u ||
                    s.screen.x < l.left ||
                    s.screen.x > e?.bounds?.width - l.right ||
                    s.screen.y < l.top ||
                    s.screen.y > e?.bounds?.height - l.bottom) &&
                    n.push(i);
                }
              }),
                n.forEach(function(t) {
                  (e.shouldAutoRemoveCallout && !e.shouldAutoRemoveCallout(t)) ||
                    (e.removeCallout(t), e.onAutoRemove && e.onAutoRemove(t));
                });
            }
          }
        },
        {
          key: "_removeCalloutComplete",
          value: function(t) {
            var e = t.definition.id,
              n = this._calloutDefinitions.findIndex(function(t) {
                return t.id === e;
              });
            -1 !== n &&
              ((this._calloutDefinitions = [].concat(
                p(this._calloutDefinitions.slice(0, n)),
                p(this._calloutDefinitions.slice(n + 1))
              )),
              (n = this._currentlyRemoving.findIndex(function(t) {
                return t.id === e;
              })),
              (this._currentlyRemoving = [].concat(
                p(this._currentlyRemoving.slice(0, n)),
                p(this._currentlyRemoving.slice(n + 1))
              )),
              this._container.removeChild(this._callouts[e].element),
              this._callouts[e].release(),
              delete this._callouts[e]);
          }
        },
        {
          key: "drawables",
          get: function() {
            var t = this;
            return this._calloutDefinitions.map(function(e) {
              return t._callouts[e.id].drawables;
            });
          }
        }
      ]),
      t
    );
  })(),
  Ur = (function() {
    function t(n, r, o) {
      var a = this;
      e(this, t),
        i(this, "_wasmLoaded", !1),
        i(this, "isInit", !1),
        i(this, "shouldDraw", !1),
        i(this, "renderer", null),
        i(this, "scene", null),
        i(this, "targetDrawable", null),
        i(this, "calloutManager", null),
        i(this, "boundingRect", null),
        i(this, "_onWasmLoad", []),
        i(this, "drawqueue", []),
        i(this, "onInit", void 0),
        i(this, "onSelection", void 0),
        i(this, "onTap", void 0),
        i(this, "onUpdate", void 0),
        i(this, "_movementModel", null),
        i(this, "_interactionController", null),
        i(this, "_ambientController", null),
        i(this, "_animationController", null),
        i(this, "_storedMouseXY", null),
        i(this, "loadWasm", function(t, e) {
          return xr(void 0 === t ? "./gkweb_bg.wasm" : t).then(function() {
            (function(t) {
              var e = lr(t, Kn.__wbindgen_malloc, Kn.__wbindgen_realloc),
                n = ar;
              return tr(Kn.init_runtime(e, n));
            })(e).then(function() {
              (a._wasmLoaded = !0),
                a._onWasmLoad.forEach(function(t) {
                  t();
                }),
                a._onInitCB();
            });
          });
        }),
        i(this, "init", function(t) {
          (a.renderer = new yn(t, a.gkOptions.attributes)),
            a.renderer.init(),
            a.gkOptions.clearColor && (a.renderer.clearColor = a.gkOptions.clearColor),
            (a.scene = new qn(t.width, t.height)),
            a.gkOptions.movementModel ? (a._movementModel = a.gkOptions.movementModel) : (a._movementModel = new Dr()),
            (a._interactionController = new Or(t, a.scene.camera)),
            (a._interactionController.onTapCB = a.onTapCB),
            (a._interactionController.onMouseMoveCB = a.onMouseMoveCB),
            (a._animationController = new Br()),
            (a._ambientController = new Gr()),
            a._ambientController.register(a._animationController, a._interactionController, a._movementModel),
            a._animationController.register(a._ambientController, a._interactionController, a._movementModel),
            a._interactionController.register(a._ambientController, a._animationController, a._movementModel),
            a._movementModel.register(a._ambientController, a._animationController, a._interactionController),
            window.addEventListener("resize", a.onResizeCB),
            window.addEventListener("scroll", a.onResizeCB),
            (a._resizeObserver = new ResizeObserver(function(t) {
              t.length && a.onResizeCB();
            })),
            a._resizeObserver.observe(t),
            a.loadWasm(a.gkOptions.wasmPath, a.gkOptions.apiKey),
            (a.isInit = !0);
        }),
        i(this, "_onInitCB", function() {
          a.onInit && a.onInit(a), a.renderloop(0);
        }),
        i(this, "onResizeCB", function() {
          (a.boundingRect = a.renderer.gl.canvas.getBoundingClientRect()),
            vn(a.renderer.gl.canvas),
            a.scene.resize(a.boundingRect.width, a.boundingRect.height),
            a.renderer.resize(a.boundingRect.width, a.boundingRect.height),
            a.interactionController.resize();
        }),
        i(this, "setCameratargetDrawable", function(t) {
          a.interactionController.hitTarget = t.hitTest;
        }),
        i(this, "addDrawable", function(t, e) {
          return (
            t instanceof br &&
            (t instanceof wr &&
              null === a.targetDrawable &&
              ((a.targetDrawable = t), (a.interactionController.target = t)),
            t.init(a.renderer.gl, e),
            a.drawqueue.push(t),
            a._wasmLoaded ? t.createCollisionGeo() : a._onWasmLoad.push(t.createCollisionGeo),
            !0)
          );
        }),
        i(this, "startDrawing", function() {
          (a.shouldDraw = !0), a.renderloop(0);
        }),
        i(this, "stopDrawing", function() {
          a.shouldDraw = !1;
        }),
        i(this, "renderloop", function(t) {
          var e = t / 1e4;
          if (a.shouldDraw) {
            a.movementModel.update(e, a.scene.camera.fov);
            var n = d(a.movementModel.currentLatLonAlt, 3),
              r = n[0],
              i = n[1],
              o = n[2],
              s = Er.worldFromLatLon(r, i, o);
            a.scene.camera.setPosition(s), a.renderer.prepareRenderFrame(), a.scene.update(e);
            var u = a.scene.getUniforms(e);
            if (
              (a.drawqueue.forEach(function(t) {
                t.update(a.renderer.gl, u, e);
              }),
              a.calloutManager && a.calloutManager.update(e),
              a.drawqueue.forEach(function(t) {
                t.draw(a.renderer.gl);
              }),
              a.onUpdate && "function" == typeof a.onUpdate)
            )
              if (a._storedMouseXY) {
                var l = d(a._storedMouseXY, 2),
                  c = l[0],
                  f = l[1],
                  m = c / a.boundingRect.width,
                  h = (a.boundingRect.height - f) / a.boundingRect.height,
                  p = a.scene.camera.getRayFromScreen(m, h),
                  v = a.targetLatLon(p);
                v ? a.onUpdate(a.getPosition(v.lat, v.lon, 0)) : a.onUpdate();
              } else a.onUpdate();
            requestAnimationFrame(a.renderloop);
          }
        }),
        i(this, "onTapCB", function(t, e) {
          if (a._wasmLoaded) {
            var n = t / a.boundingRect.width,
              r = (a.boundingRect.height - e) / a.boundingRect.height,
              i = a.scene.camera.getRayFromScreen(n, r),
              o = a.targetLatLon(i),
              s = { drawables: [] };
            o && ((s.lat = o.lat), (s.lon = o.lon)),
              a.drawqueue.forEach(function(t) {
                if (t.isInteractive && t.isSelectable) {
                  var e = {};
                  e.obj = t;
                  var n = t.rayCastFrom(i);
                  n && t.isSelectable && (e.selection = t.onSelection(o.lat, o.lon, n)), s.drawables.push(e);
                }
              }),
              a.onSelection && "function" == typeof a.onSelection && a.onSelection(s),
              a.onTap && "function" == typeof a.onTap && (o ? a.onTap(a.getPosition(o.lat, o.lon, 0)) : a.onTap());
          }
        }),
        i(this, "targetLatLon", function(t) {
          var e,
            n = a.targetDrawable.rayCastFrom(t);
          return !1 !== n && (e = Er.latLonFromWorld(n.point)), e;
        }),
        i(this, "onMouseMoveCB", function(t, e) {
          if (a._wasmLoaded) {
            var n = t / a.boundingRect.width,
              r = (a.boundingRect.height - e) / a.boundingRect.height,
              i = a.scene.camera.getRayFromScreen(n, r);
            a.drawqueue.forEach(function(t) {
              if (t.isInteractive && t.isHoverable) {
                var e = t.rayCastFrom(i);
                e && t.isHoverable && t.onHover(e);
              }
            }),
              (a._storedMouseXY = [t, e]);
          }
        }),
        i(this, "getPosition", function(t, e, n) {
          n || (n = 0);
          var r = Er.worldFromLatLon(t, e, n),
            i = a.scene.camera.project(r);
          (i[0] *= a.boundingRect.width), (i[1] *= a.boundingRect.height), (i[1] = a.boundingRect.height - i[1]);
          var o = a.scene.camera.project(a.scene.camera.target);
          (o[0] *= a.boundingRect.width), (o[1] *= a.boundingRect.height), (o[1] = a.boundingRect.height - o[1]);
          var s = [];
          s.push(i[0] - o[0]), s.push(i[1] - o[1]);
          var u = Tn();
          Ln(u, r);
          var l = a.scene.camera.eye,
            c = Tn();
          Ln(c, l);
          var f = Mn(u, c);
          return {
            coord: { lat: t, lon: e, alt: n },
            screen: { x: i[0], y: i[1] },
            world: { x: s[0], y: s[1], similarityToCameraVector: f }
          };
        }),
        i(this, "registerCalloutManager", function(t) {
          t && t instanceof Nr
            ? ((t.positionProvider = function(t) {
                return t.map(function(t) {
                  return a.getPosition(t.latitude, t.longitude, t.altitude);
                });
              }),
              (a.calloutManager = t))
            : console.warn("registerCalloutManager must be passed an instance of CalloutManager");
        }),
        i(this, "computeGlobeSize", function() {
          var t,
            e,
            n,
            r,
            i,
            o = a.scene.camera.fov,
            s =
              ((t = a.scene.camera.eye),
              (e = a.targetDrawable.translation),
              (n = e[0] - t[0]),
              (r = e[1] - t[1]),
              (i = e[2] - t[2]),
              Math.hypot(n, r, i));
          return ((2 * Math.asin(1 / s)) / o) * a.boundingRect.height;
        }),
        i(this, "setGlobeSize", function(t) {
          var e = a.scene.camera.fov;
          return 1 * Math.sin(((t / a.boundingRect.height) * e) / 2);
        }),
        (this.gkOptions = void 0 === r ? {} : r),
        o && (this.onInit = o),
        (this.boundingRect = n.getBoundingClientRect()),
        this.init(n);
    }
    return (
      r(t, [
        {
          key: "movementModel",
          get: function() {
            return this._movementModel;
          }
        },
        {
          key: "ambientController",
          get: function() {
            return this._ambientController;
          }
        },
        {
          key: "animationController",
          get: function() {
            return this._animationController;
          }
        },
        {
          key: "interactionController",
          get: function() {
            return this._interactionController;
          }
        }
      ]),
      r(t, [
        {
          key: "isWebGL1",
          get: function() {
            return !!this.gl && $t(this.gl);
          }
        },
        {
          key: "isWebGL2",
          get: function() {
            return !!this.gl && Qt(this.gl);
          }
        },
        {
          key: "VERSION",
          get: function() {
            return { version: "1.0.4", wasmVersion: this.WASM_VERSION };
          }
        },
        {
          key: "WASM_VERSION",
          get: function() {
            return (
              !!this._wasmLoaded &&
              (function() {
                try {
                  const n = Kn.__wbindgen_export_4.value - 16;
                  (Kn.__wbindgen_export_4.value = n), Kn.get_wasm_version(n);
                  var t = fr()[n / 4 + 0],
                    e = fr()[n / 4 + 1];
                  return ir(t, e);
                } finally {
                  (Kn.__wbindgen_export_4.value += 16), Kn.__wbindgen_free(t, e);
                }
              })()
            );
          }
        }
      ]),
      t
    );
  })(),
  Vr = kr(function(t, e) {
    /**
     * k-d Tree JavaScript - V 1.01
     *
     * https://github.com/ubilabs/kd-tree-javascript
     *
     * @author Mircea Pricop <pricop@ubilabs.net>, 2012
     * @author Martin Kleppe <kleppe@ubilabs.net>, 2012
     * @author Ubilabs http://ubilabs.net, 2012
     * @license MIT License <http://www.opensource.org/licenses/mit-license.php>
     */
    !(function(t) {
      function e(t, e, n) {
        (this.obj = t), (this.left = null), (this.right = null), (this.parent = n), (this.dimension = e);
      }
      function n(t) {
        (this.content = []), (this.scoreFunction = t);
      }
      (n.prototype = {
        push: function(t) {
          this.content.push(t), this.bubbleUp(this.content.length - 1);
        },
        pop: function() {
          var t = this.content[0],
            e = this.content.pop();
          return this.content.length > 0 && ((this.content[0] = e), this.sinkDown(0)), t;
        },
        peek: function() {
          return this.content[0];
        },
        remove: function(t) {
          for (var e = this.content.length, n = 0; n < e; n++)
            if (this.content[n] == t) {
              var r = this.content.pop();
              return void (
                n != e - 1 &&
                ((this.content[n] = r),
                this.scoreFunction(r) < this.scoreFunction(t) ? this.bubbleUp(n) : this.sinkDown(n))
              );
            }
          throw new Error("Node not found.");
        },
        size: function() {
          return this.content.length;
        },
        bubbleUp: function(t) {
          for (var e = this.content[t]; t > 0; ) {
            var n = Math.floor((t + 1) / 2) - 1,
              r = this.content[n];
            if (!(this.scoreFunction(e) < this.scoreFunction(r))) break;
            (this.content[n] = e), (this.content[t] = r), (t = n);
          }
        },
        sinkDown: function(t) {
          for (var e = this.content.length, n = this.content[t], r = this.scoreFunction(n); ; ) {
            var i = 2 * (t + 1),
              o = i - 1,
              a = null;
            if (o < e) {
              var s = this.content[o],
                u = this.scoreFunction(s);
              u < r && (a = o);
            }
            if (i < e) {
              var l = this.content[i];
              this.scoreFunction(l) < (null == a ? r : u) && (a = i);
            }
            if (null == a) break;
            (this.content[t] = this.content[a]), (this.content[a] = n), (t = a);
          }
        }
      }),
        (t.kdTree = function(t, r, i) {
          var o = this;
          Array.isArray(t)
            ? (this.root = (function t(n, r, o) {
                var a,
                  s,
                  u = r % i.length;
                return 0 === n.length
                  ? null
                  : 1 === n.length
                  ? new e(n[0], u, o)
                  : (n.sort(function(t, e) {
                      return t[i[u]] - e[i[u]];
                    }),
                    ((s = new e(n[(a = Math.floor(n.length / 2))], u, o)).left = t(n.slice(0, a), r + 1, s)),
                    (s.right = t(n.slice(a + 1), r + 1, s)),
                    s);
              })(t, 0, null))
            : (function(t) {
                (o.root = t),
                  (function t(e) {
                    e.left && ((e.left.parent = e), t(e.left)), e.right && ((e.right.parent = e), t(e.right));
                  })(o.root);
              })(t),
            (this.toJSON = function(t) {
              t || (t = this.root);
              var n = new e(t.obj, t.dimension, null);
              return t.left && (n.left = o.toJSON(t.left)), t.right && (n.right = o.toJSON(t.right)), n;
            }),
            (this.insert = function(t) {
              var n,
                r,
                o = (function e(n, r) {
                  if (null === n) return r;
                  var o = i[n.dimension];
                  return t[o] < n.obj[o] ? e(n.left, n) : e(n.right, n);
                })(this.root, null);
              null !== o
                ? ((n = new e(t, (o.dimension + 1) % i.length, o)),
                  (r = i[o.dimension]),
                  t[r] < o.obj[r] ? (o.left = n) : (o.right = n))
                : (this.root = new e(t, 0, null));
            }),
            (this.remove = function(t) {
              var e;
              null !==
                (e = (function e(n) {
                  if (null === n) return null;
                  if (n.obj === t) return n;
                  var r = i[n.dimension];
                  return t[r] < n.obj[r] ? e(n.left) : e(n.right);
                })(o.root)) &&
                (function t(e) {
                  function n(t, e) {
                    var r, o, a, s, u;
                    return null === t
                      ? null
                      : ((r = i[e]),
                        t.dimension === e
                          ? null !== t.left
                            ? n(t.left, e)
                            : t
                          : ((o = t.obj[r]),
                            (a = n(t.left, e)),
                            (s = n(t.right, e)),
                            (u = t),
                            null !== a && a.obj[r] < o && (u = a),
                            null !== s && s.obj[r] < u.obj[r] && (u = s),
                            u));
                  }
                  var r, a, s;
                  if (null === e.left && null === e.right)
                    return null === e.parent
                      ? void (o.root = null)
                      : ((s = i[e.parent.dimension]),
                        void (e.obj[s] < e.parent.obj[s] ? (e.parent.left = null) : (e.parent.right = null)));
                  null !== e.right
                    ? ((a = (r = n(e.right, e.dimension)).obj), t(r), (e.obj = a))
                    : ((a = (r = n(e.left, e.dimension)).obj), t(r), (e.right = e.left), (e.left = null), (e.obj = a));
                })(e);
            }),
            (this.nearest = function(t, e, a) {
              var s, u, l;
              if (
                ((l = new n(function(t) {
                  return -t[1];
                })),
                a)
              )
                for (s = 0; s < e; s += 1) l.push([null, a]);
              for (
                o.root &&
                  (function n(o) {
                    function a(t, n) {
                      l.push([t, n]), l.size() > e && l.pop();
                    }
                    var s,
                      u,
                      c,
                      f,
                      m = i[o.dimension],
                      h = r(t, o.obj),
                      d = {};
                    for (f = 0; f < i.length; f += 1) f === o.dimension ? (d[i[f]] = t[i[f]]) : (d[i[f]] = o.obj[i[f]]);
                    (u = r(d, o.obj)),
                      null !== o.right || null !== o.left
                        ? (n(
                            (s =
                              null === o.right
                                ? o.left
                                : null === o.left
                                ? o.right
                                : t[m] < o.obj[m]
                                ? o.left
                                : o.right)
                          ),
                          (l.size() < e || h < l.peek()[1]) && a(o, h),
                          (l.size() < e || Math.abs(u) < l.peek()[1]) &&
                            null !== (c = s === o.left ? o.right : o.left) &&
                            n(c))
                        : (l.size() < e || h < l.peek()[1]) && a(o, h);
                  })(o.root),
                  u = [],
                  s = 0;
                s < Math.min(e, l.content.length);
                s += 1
              )
                l.content[s][0] && u.push([l.content[s][0].obj, l.content[s][1]]);
              return u;
            }),
            (this.balanceFactor = function() {
              return (
                (function t(e) {
                  return null === e ? 0 : Math.max(t(e.left), t(e.right)) + 1;
                })(o.root) /
                (Math.log(
                  (function t(e) {
                    return null === e ? 0 : t(e.left) + t(e.right) + 1;
                  })(o.root)
                ) /
                  Math.log(2))
              );
            });
        }),
        (t.BinaryHeap = n);
    })(e);
  }),
  Wr = (function() {
    function t() {
      var n = this;
      e(this, t),
        i(this, "data", []),
        i(this, "types", []),
        i(this, "kdtree", null),
        i(this, "isInit", !1),
        i(this, "init", function() {
          n.isInit || (n.kdtree = new Vr.kdTree(n.data, Er.distanceBetweenPoints, ["lat", "lon"]));
        }),
        i(this, "addGeojson", function(t) {
          if ("FeatureCollection" === t.type && t.features instanceof Array) {
            var e = [];
            t.features.forEach(function(t) {
              var r = {
                id: "_".concat(
                  Math.random()
                    .toString(36)
                    .substr(2, 9)
                ),
                lat: t.geometry.coordinates[1],
                lon: t.geometry.coordinates[0],
                properties: t.properties
              };
              n.data.push(r), e.push(e);
            }),
              n.isInit ? n.kdtree.insert(e) : n.init();
          }
        }),
        i(this, "addGeojsonPoint", function(t) {
          var e = {
            id: "_".concat(
              Math.random()
                .toString(36)
                .substr(2, 9)
            ),
            lat: t.geometry.coordinates[1],
            lon: t.geometry.coordinates[0],
            properties: t.properties
          };
          return n.data.push(e), n.isInit ? n.kdtree.insert(e) : n.init(), e;
        }),
        i(this, "addDataPoint", function(t) {
          var e = void 0 === t.length ? [t] : t,
            r = [];
          e.forEach(function(t) {
            var e = {
              id: "_".concat(
                Math.random()
                  .toString(36)
                  .substr(2, 9)
              ),
              lat: t.coordinates[1],
              lon: t.coordinates[0],
              properties: t.properties
            };
            n.data.push(e), r.push(e);
          }),
            n.isInit ? n.kdtree.insert(r) : n.init();
        }),
        i(this, "updateDataset", function(t) {
          t.features.forEach(function(t) {
            var e = n.data.find(function(e) {
              var n = e.lat === t.geometry.coordinates[1],
                r = e.lon === t.geometry.coordinates[0];
              return n && r;
            });
            void 0 === e ? n.addGeojsonPoint(t) : (e.properties = t.properties);
          });
        }),
        i(this, "deleteDataset", function() {
          (n.data = []), n.init();
        }),
        i(this, "getNearest", function(t, e, r, i) {
          n.isInit || n.init();
          var o = n.kdtree.nearest({ lat: t, lon: e }, i, r);
          if (void 0 !== o[0]) return o;
        }),
        i(this, "getElementFromId", function(t) {
          return n.data.find(function(e) {
            return e.id === t;
          });
        }),
        i(this, "getElementFromKey", function(t, e) {
          return n.data.find(function(n) {
            return n.properties[t] === e;
          });
        }),
        i(this, "getTypeList", function() {
          var t = [];
          return (
            t.push([n.data[0]]),
            n.data.forEach(function(e) {
              var n = Object.keys(e.properties),
                r = !1;
              t.forEach(function(t) {
                var i = Object.keys(t[0].properties),
                  o = Er.isSubSet(n, i),
                  a = Er.isSubSet(i, n);
                o && a && (t.push(e), (r = !0));
              }),
                !1 === r && t.push([e]);
            }),
            t
          );
        }),
        i(this, "getMaxForKey", function(t) {
          var e,
            r = -1 / 0;
          if ("number" == typeof n.data[0].properties[t])
            return (
              n.data.forEach(function(n) {
                var i = n.properties[t];
                i >= r && ((r = i), (e = n.id));
              }),
              { max: r, id: e }
            );
          console.warn("Cannot compare non-numbers");
        }),
        i(this, "getMinForKey", function(t) {
          var e,
            r = 1 / 0;
          if ("number" == typeof n.data[0].properties[t])
            return (
              n.data.forEach(function(n) {
                var i = n.properties[t];
                i <= r && ((r = i), (e = n.id));
              }),
              { min: r, id: e }
            );
          console.warn("Cannot compare non-numbers");
        }),
        i(this, "getRangeForKey", function(t) {
          return { min: n.getMinForKey(t), max: n.getMaxForKey(t) };
        }),
        i(this, "mapKeyToRange", function(t, e, r) {
          var i = n.getRangeForKey(t);
          return n.data.map(function(n) {
            var o = ((n.properties[t] - i.min.min) / (i.max.max - i.min.min)) * (r - e) + e;
            return { id: n.properties.region_id, value: o };
          });
        });
    }
    return (
      r(t, [
        {
          key: "isHomogeneous",
          get: function() {
            return 1 === this.getTypeList().length;
          }
        }
      ]),
      t
    );
  })(),
  Yr = (function(t) {
    s(r, br);
    var n = m(r);
    function r() {
      return e(this, r), n.apply(this, arguments);
    }
    return r;
  })(),
  Hr =
    "precision mediump float;\n#define GLSLIFY 1\nuniform sampler2D u_texture;varying vec4 v_color;varying float v_alpha;void main(){vec4 surfaceColor=texture2D(u_texture,gl_PointCoord.xy);float d=(1.0+v_alpha)/2.0;float alpha=smoothstep(0.4,0.49,v_alpha);gl_FragColor=vec4(surfaceColor.rgb,surfaceColor.a*alpha);}",
  Xr = {},
  qr = (function(t) {
    s(r, Yr);
    var n = m(r);
    function r(t) {
      var o, a;
      e(this, r),
        i(c((a = n.call(this, t))), "datastore", void 0),
        i(c(a), "maxSelectionDistance", 300),
        i(c(a), "maxSelectionCount", 1),
        i(c(a), "maxDataPoints", 1e4),
        i(c(a), "dataPointCount", 0),
        i(c(a), "_resourceLoaded", !1),
        i(c(a), "_isDirty", !0),
        i(c(a), "_hasGeometry", !1),
        i(c(a), "useTexture", !1),
        i(c(a), "createEmptyVertices", function() {
          (a.geometry.vertices.position = {
            numComponents: 3,
            data: new Array(3 * a.maxDataPoints).fill(0),
            perInstance: 1
          }),
            (a.geometry.vertices.color = {
              numComponents: 4,
              data: new Array(4 * a.maxDataPoints).fill(0),
              perInstance: 4
            }),
            (a.geometry.vertices.size = {
              numComponents: 1,
              data: new Array(1 * a.maxDataPoints).fill(0),
              perInstance: 1
            }),
            (a.geometry.vertices.indices = {
              numComponents: 1,
              data: Array.from(Array(1 * a.maxDataPoints).keys()),
              perInstance: 1
            });
        }),
        i(c(a), "extendVerticesBy", function(t) {
          var e, n, r;
          (e = a.geometry.vertices.position.data).push.apply(e, p(Array(3 * t).fill(0))),
            (n = a.geometry.vertices.color.data).push.apply(n, p(Array(4 * t).fill(0))),
            (r = a.geometry.vertices.size.data).push.apply(r, p(Array(1 * t).fill(0)));
          var i = a.geometry.vertices.indices.data.length;
          (a.geometry.vertices.indices.data = Array.from(Array(1 * (i + t)).keys())),
            (a.geometry.needsResize = !0),
            (a.maxDataPoints += t);
        }),
        i(c(a), "init", function(t, e) {
          if ((a.geometry.init(t), (a._hasGeometry = !0), a.material.init(t), a.useTexture)) {
            var n = { texture: { src: a.textureSrc.texture, minMag: t.LINEAR } };
            a.material.loadTextures(t, n, function() {
              e && e(), (a.material.uniforms.u_texture = a.material.textures.texture);
            });
          } else e && e();
        }),
        i(c(a), "createCollisionGeo", function() {}),
        i(c(a), "update", function(t, e, n) {
          h(((o = c(a)), u(r.prototype)), "update", o).call(o, e, n),
            (a.material.uniforms.u_model = a.modelMatrix),
            a.geometry.needsResize && a.geometry.reloadBuffers(t),
            a.geometry.isDirty && a.geometry.updateBuffers(t);
        }),
        i(c(a), "draw", function(t) {
          (a.isReady || a._hasGeometry) &&
            0 !== !a.dataPointCount &&
            (t.useProgram(a.material.programInfo.program),
            t.disable(t.DEPTH_TEST),
            sn(t, a.material.programInfo, a.geometry.bufferInfo),
            an(a.material.programInfo, a.material.uniforms),
            t.drawElements(t.POINTS, a.dataPointCount, t.UNSIGNED_SHORT, 0),
            t.enable(t.DEPTH_TEST));
        }),
        i(c(a), "rayCastFrom", function() {
          return !0;
        }),
        i(c(a), "hitTest", function() {
          return !0;
        }),
        i(c(a), "onSelectionCB", function(t) {
          return t;
        }),
        i(c(a), "onSelection", function(t, e) {
          var n = a.getNearest(t, e);
          return (n = a.onSelectionCB(n));
        }),
        i(c(a), "transform", function(t, e) {
          return e;
        }),
        i(c(a), "addGeojson", function(t, e) {
          if ("string" != typeof t) {
            a.datastore.addGeojson(t);
            var n = {
              position: { numComponents: 3, data: [] },
              color: { numComponents: 4, data: [] },
              size: { numComponents: 1, data: [] },
              indices: { numComponents: 1, data: [] }
            };
            a.datastore.data.forEach(function(t, e) {
              var r,
                i,
                o = { lat: t.lat, lon: t.lon, color: [1, 1, 1, 1], size: 10 };
              ((o = a.transform(t, o)).coords = Er.worldFromLatLon(o.lat, o.lon, 0.01)),
                (r = n.position.data).push.apply(r, p(o.coords)),
                (i = n.color.data).push.apply(i, p(o.color)),
                n.size.data.push(o.size),
                n.indices.data.push(e);
            }),
              a.geometry.updateGeometry(n, a.dataPointCount),
              (a.dataPointCount += t.features.length),
              void 0 !== e && e();
          } else console.warn("This function needs a geojson object at this time");
        }),
        i(c(a), "addDataPoint", function(t, e) {
          a.dataPointCount + 1 >= a.maxDataPoints &&
            (console.warn(
              "More than "
                .concat(a.maxDataPoints, " datapoints have been added, Increasing buffer size by: ")
                .concat(a.maxDataPoints)
            ),
            a.extendVerticesBy(a.maxDataPoints));
          var n = [];
          n.push(a.datastore.addGeojsonPoint(t));
          var r = {
            position: { numComponents: 3, data: [] },
            color: { numComponents: 4, data: [] },
            size: { numComponents: 1, data: [] },
            indices: { numComponents: 1, data: [] }
          };
          n.forEach(function(t, e) {
            var n,
              i,
              o = { lat: t.lat, lon: t.lon, color: [1, 1, 1, 1], size: 10 };
            ((o = a.transform(t, o)).coords = Er.worldFromLatLon(o.lat, o.lon, 0.01)),
              (n = r.position.data).push.apply(n, p(o.coords)),
              (i = r.color.data).push.apply(i, p(o.color)),
              r.size.data.push(o.size),
              r.indices.data.push(e);
          }),
            a.geometry.updateGeometry(r, a.dataPointCount),
            (a.dataPointCount += 1),
            void 0 !== e && e();
        }),
        i(c(a), "updatePoint", function(t, e) {
          var n,
            r,
            i = {};
          void 0 !== e.position &&
            ((i.position = { numComponents: 3, data: [] }), (n = i.position.data).push.apply(n, p(e.position)));
          void 0 !== e.color &&
            ((i.color = { numComponents: 4, data: [] }), (r = i.color.data).push.apply(r, p(e.color)));
          void 0 !== e.size && ((i.size = { numComponents: 1, data: [] }), i.size.data.push(e.size)),
            a.geometry.updateGeometry(i, t);
        }),
        i(c(a), "getNearest", function(t, e) {
          return a.datastore.getNearest(t, e, a.maxSelectionDistance, a.maxSelectionCount);
        });
      var s = {
        vertex:
          "#define GLSLIFY 1\nattribute vec4 position;attribute vec4 color;attribute float size;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform mat4 u_model;uniform vec3 u_cameraPos;varying vec4 v_color;varying float v_alpha;void main(){vec4 pos=u_worldViewProjection*u_model*position;gl_PointSize=size;gl_Position=pos;v_color=color;v_alpha=dot(position.xyz,normalize(u_cameraPos));}",
        fragment:
          "precision mediump float;\n#define GLSLIFY 1\nvarying vec4 v_color;varying float v_alpha;void main(){float d=distance(vec2(0.5),gl_PointCoord.xy);float c=1.0-smoothstep(0.40,0.5,d);gl_FragColor=vec4(v_color.rgb,v_color.a*v_alpha*c);}"
      };
      return (
        t &&
          (t.maxSelectionCount && (a.maxSelectionCount = t.maxSelectionCount),
          t.maxSelectionDistance && (a.maxSelectionDistance = t.maxSelectionDistance),
          t.maxDataPoints && (a.maxDataPoints = t.maxDataPoints),
          !0 === t.useTexture &&
            void 0 !== t.texture &&
            ((a.useTexture = !0), (s.fragment = Hr), (a.textureSrc = { texture: t.texture }))),
        (a.material = new Zn(s)),
        (a.datastore = new Wr()),
        (a.material.uniforms = Xr),
        (a.geometry = new Ar()),
        a.createEmptyVertices(),
        a
      );
    }
    return r;
  })(),
  Zr = {
    vertex:
      "#define GLSLIFY 1\nattribute vec4 position;attribute vec3 normal;attribute vec2 texcoord;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform mat4 u_model;uniform vec3 u_cameraPos;varying vec2 vTexture;varying float vAlpha;void main(){vec4 pos=u_worldViewProjection*u_model*position;gl_PointSize=10.0;vec3 transformedNormal=(u_worldViewProjection*u_model*vec4(normal,1.0)).xyz;vec4 transformedCamera=vec4(0.0,0.0,-1.0,1.0)*u_worldViewProjection;vAlpha=pow((1.0+(dot(normal,normalize(transformedCamera.xyz))))/2.0,9.0);vTexture=texcoord.xy;gl_Position=pos+0.00000000000000001*normal.x*texcoord.x;}",
    fragment:
      "precision mediump float;\n#define GLSLIFY 1\nuniform sampler2D u_surface;varying vec2 vTexture;varying float vAlpha;void main(){vec4 surfaceColor=texture2D(u_surface,vec2(vTexture.x,1.0-vTexture.y));vec3 color=surfaceColor.rgb*vAlpha;gl_FragColor=vec4(color,1.0);}"
  },
  Kr = {},
  Jr = (function(t) {
    s(r, wr);
    var n = m(r);
    function r(t, o) {
      var a, s;
      e(this, r),
        i(c((s = n.call(this))), "material", null),
        i(c(s), "lookup", null),
        i(c(s), "currentSelection", -1),
        i(c(s), "previousSelection", -1),
        i(c(s), "inAnimation", null),
        i(c(s), "outAnimation", null),
        i(c(s), "selection0", 236),
        i(c(s), "selection1", 144),
        i(c(s), "current", 236),
        i(c(s), "dataTexture", void 0),
        i(c(s), "dataTextureSize", 16),
        i(c(s), "updateCMDs", []),
        i(c(s), "highlightAnimationProps", {
          start: 0,
          stop: 1,
          duration: 1e3,
          onUpdate: function(t) {
            s.material.uniforms.u_animateIn = t;
          }
        }),
        i(c(s), "init", function(t, e) {
          s.geometry.init(t);
          var n = { surface: { src: s.textureSrc.surface, minMag: t.LINEAR } };
          s.material.init(t),
            (s.material.uniforms.uModelMatrix = s.modelMatrix),
            s.material.loadTextures(t, n, function() {
              (s.material.uniforms.u_surface = s.material.textures.surface), e && e();
            });
        }),
        i(c(s), "getValueForId", function(t) {
          return s.lookup.getFromId(t);
        }),
        i(c(s), "getValueForCode", function(t) {
          return s.lookup.getFromCode(t);
        }),
        i(c(s), "getValueForName", function(t) {
          return s.lookup.getFromName(t);
        }),
        i(c(s), "setIdColor", function(t, e, n) {
          var r = void 0 === n ? 1 : n,
            i = Er.hexToRGBA(e, r, !1);
          s.updateCMDs.push(function(e) {
            s.dataTexture.updatePixelId(e, i, t);
          });
        }),
        i(c(s), "createCollisionGeo", function() {
          (s.collisionGeometry && s.collisionGeometry instanceof gr) ||
            (s.collisionGeometry = yr.create_collision_geometry(
              s.geometry.vertices.position.data,
              s.geometry.vertices.texcoord.data,
              s.geometry.vertices.indices.data
            ));
        }),
        i(c(s), "rayCastFrom", function(t) {
          return s.collisionGeometry.raycast(t.origin, t.direction);
        }),
        i(c(s), "hitTest", function(t) {
          return s.collisionGeometry.hitTest(t.origin, t.direction);
        }),
        i(c(s), "onSelectionCB", function() {}),
        i(c(s), "onSelection", function(t, e, n) {
          var r = Er.latLonFromWorld(n.point);
          return (
            (s.current = s.lookup.getIdFromLatLon(r.lat, r.lon)),
            s.setHighlightId(s.current),
            s.onSelectionCB(s.current),
            { id: s.current, name: s.lookup.getFromId(s.current) }
          );
        }),
        i(c(s), "onHover", function() {}),
        i(c(s), "update", function(t, e, n) {
          h(((a = c(s)), u(r.prototype)), "update", a).call(a, e, n),
            (s.material.uniforms.u_model = s.modelMatrix),
            s.updateCMDs.forEach(function(e) {
              e(t);
            }),
            (s.updateCMDs = []);
        }),
        i(c(s), "draw", function(t) {
          s.isReady &&
            s.shouldDraw &&
            (t.useProgram(s.material.programInfo.program),
            sn(t, s.material.programInfo, s.geometry.bufferInfo),
            an(s.material.programInfo, s.material.uniforms),
            t.drawArrays(t.TRIANGLES, 0, s.geometry.bufferInfo.numElements));
        }),
        i(c(s), "setCountryHover", function(t) {}),
        i(c(s), "setHighlightId", function(t) {
          (s.previousSelection = s.currentSelection), (s.currentSelection = t);
          var e = s.inAnimation ? s.inAnimation.currentValue() : 1,
            n = 300 * e;
          s.animateIn(s.currentSelection, 500), s.animateOut(s.previousSelection, n, e);
        }),
        i(c(s), "animateIn", function(t, e) {
          (s.material.uniforms.u_idAnimateIn = t),
            s.inAnimation && s.inAnimation.stop(),
            (s.material.uniforms.u_animateIn = 0),
            (s.inAnimation = new Lr(
              s.highlightAnimationProps.start,
              s.highlightAnimationProps.stop,
              s.highlightAnimationProps.duration,
              {
                onUpdate: s.highlightAnimationProps.onUpdate,
                onComplete: function() {
                  e && e();
                }
              }
            ));
        }),
        i(c(s), "animateOut", function(t, e, n, r) {
          (s.material.uniforms.u_idAnimateOut = t),
            s.outAnimation && s.outAnimation.stop(),
            (s.material.uniforms.u_animateOut = n),
            (s.outAnimation = new Lr(n, 0, e, {
              onUpdate: function(t) {
                s.material.uniforms.u_animateOut = t;
              },
              onComplete: function() {
                r && r();
              }
            }));
        }),
        i(c(s), "addDataset", function(t) {
          s.lookup = new Sr(t, s.textureSrc.id);
        }),
        (s.textureSrc = { surface: t.surface }),
        (s.material = new Zn(Zr)),
        (s.material.uniforms = Kr),
        (s.geometry = new Ar());
      var l = 0,
        f = new Float32Array(o),
        m = new Int32Array(o),
        d = f.subarray(l, l + 34992);
      l += 34992;
      var p = f.subarray(l, l + 34992);
      l += 34992;
      var v = f.subarray(l, l + 34992);
      l += 34992;
      var y = m.subarray(l, l + 11664);
      return (
        (s.geometry.vertices.position = { numComponents: 3, data: d }),
        (s.geometry.vertices.normal = { numComponents: 3, data: p }),
        (s.geometry.vertices.texcoord = { numComponents: 3, data: v }),
        (s.geometry.vertices.indices = { numComponents: 3, data: y }),
        s
      );
    }
    return r;
  })(),
  Qr = {
    vertex: `#define GLSLIFY 1
      attribute vec4 position;
      attribute vec2 texcoord;
      uniform mat4 u_worldViewProjection;
      uniform mat4 u_viewInverse;
      uniform mat4 u_model;
      uniform vec3 u_cameraPos;
      varying float vAlpha;
      varying vec2 vTexture;
      void main(){
      vTexture=texcoord;
        gl_Position=position;
      }`,
    fragment: document.querySelector("script[type=shader-fragment-background]").innerText
  },
  $r = {},
  ti = (function(t) {
    s(r, br);
    var n = m(r);
    function r(t) {
      var o, a;
      return (
        e(this, r),
        i(c((a = n.call(this))), "material", null),
        i(c(a), "init", function(t, e) {
          (a.geometry = new Ar()),
            (a.geometry.vertices.position = [-1, -1, 1, -1, 1, 1, 1, 1, 1, 1, -1, 1]),
            (a.geometry.vertices.texcoord = [0, 0, 0, 1, 1, 1, 1, 0]),
            (a.geometry.vertices.indices = [0, 2, 1, 0, 3, 2]),
            a.geometry.init(t);
          var n = { background: { src: a.textureSrc.background, minMag: t.LINEAR } };
          a.material.init(t),
            a.material.loadTextures(t, n, function() {
              (a.material.uniforms.u_background = a.material.textures.background), e && e();
            });
        }),
        i(c(a), "createCollisionGeo", function() {}),
        i(c(a), "rayCastFrom", function() {
          return !1;
        }),
        i(c(a), "hitTest", function() {
          return !1;
        }),
        i(c(a), "onSelection", function() {}),
        i(c(a), "update", function(t, e, n) {
          h(((o = c(a)), u(r.prototype)), "update", o).call(o, e, n), (a.material.uniforms.u_model = a.modelMatrix);
        }),
        i(c(a), "draw", function(t) {
          a.isReady &&
            (t.disable(t.DEPTH_TEST),
            t.useProgram(a.material.programInfo.program),
            sn(t, a.material.programInfo, a.geometry.bufferInfo),
            an(a.material.programInfo, a.material.uniforms),
            t.drawElements(t.TRIANGLES, a.geometry.bufferInfo.numElements, t.UNSIGNED_SHORT, 0),
            t.enable(t.DEPTH_TEST));
        }),
        (a.material = new Zn(Qr)),
        (a.material.uniforms = $r),
        (a.textureSrc = { background: t }),
        a
      );
    }
    return r;
  })(),
  ei = {
    vertex: document.querySelector("script[type=shader-vertex-atmosphere]").innerText,
    fragment: document.querySelector("script[type=shader-fragment-atmosphere]").innerText
  },
  ni = { u_scale: 1 },
  ri = (function(t) {
    s(r, br);
    var n = m(r);
    function r(t) {
      var o, a;
      return (
        e(this, r),
        i(c((a = n.call(this))), "material", null),
        i(c(a), "useTexture", !1),
        i(c(a), "nScale", 1),
        i(c(a), "init", function(t, e) {
          if (
            ((a.geometry = new Ar()),
            (a.geometry.vertices.position = [-1, -1, 0, -1, 1, 0, 1, 1, 0, 1, -1, 0]),
            (a.geometry.vertices.texcoord = [0, 0, 0, 1, 1, 1, 1, 0]),
            (a.geometry.vertices.indices = [0, 2, 1, 0, 3, 2]),
            a.geometry.init(t),
            a.material.init(t),
            a.useTexture)
          ) {
            var n = { background: { src: a.textureSrc.texture, minMag: t.LINEAR, flipY: !0 } };
            a.material.loadTextures(t, n, function() {
              (a.material.uniforms.u_background = a.material.textures.background), e && e();
            });
          } else (a.material.texturesLoaded = !0), e && e();
        }),
        i(c(a), "createCollisionGeo", function() {}),
        i(c(a), "rayCastFrom", function() {
          return !1;
        }),
        i(c(a), "hitTest", function() {
          return !1;
        }),
        i(c(a), "onSelection", function() {}),
        i(c(a), "update", function(t, e, n) {
          h(((o = c(a)), u(r.prototype)), "update", o).call(o, e, n),
            (a.material.uniforms.u_model = a.modelMatrix),
            (a.material.uniforms.u_scale = a.nScale);
        }),
        i(c(a), "draw", function(t) {
          a.isReady &&
            (t.disable(t.DEPTH_TEST),
            t.useProgram(a.material.programInfo.program),
            sn(t, a.material.programInfo, a.geometry.bufferInfo),
            an(a.material.programInfo, a.material.uniforms),
            t.drawElements(t.TRIANGLES, a.geometry.bufferInfo.numElements, t.UNSIGNED_SHORT, 0),
            t.enable(t.DEPTH_TEST));
        }),
        t.texture &&
          ((a.useTexture = !0),
          (ei.fragment = document.querySelector("script[type=shader-fragment-atmosphere-with-texture]").innerText),
          (a.textureSrc = { texture: t.texture, bg: t.bg })),
        (a.material = new Zn(ei)),
        (a.material.uniforms = ni),
        a
      );
    }
    return r;
  })(),
  ii = {
    vertex:
      "#define GLSLIFY 1\nattribute vec4 position;attribute vec2 texcoord;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform mat4 u_model;uniform mat4 u_view;uniform float u_scale;uniform vec3 u_point;uniform vec2 u_resolution;uniform vec3 u_cameraPos;varying float vAlpha;varying vec2 vTexture;void main(){vec4 pos=u_worldViewProjection*vec4(u_point,1.0);float size=u_scale*16.0;pos.y+=(size*4.0/u_resolution.y);gl_PointSize=size;gl_Position=pos;vTexture=texcoord;float d=(1.0+dot(u_point,normalize(u_cameraPos)))/2.0;vAlpha=smoothstep(0.4,0.5,d);}",
    fragment:
      "precision mediump float;\n#define GLSLIFY 1\nuniform sampler2D u_background;varying float vAlpha;varying vec2 vTexture;void main(){vec4 textureColor=texture2D(u_background,gl_PointCoord);gl_FragColor=vec4(textureColor.rgb,vAlpha*textureColor.a);}"
  },
  oi = { u_scale: 1, u_point: [0, 0, 1] },
  ai = (function(t) {
    s(r, br);
    var n = m(r);
    function r(t) {
      var o, a;
      return (
        e(this, r),
        i(c((a = n.call(this))), "material", null),
        i(c(a), "useTexture", !1),
        i(c(a), "nScale", 1),
        i(c(a), "point", [0, 0, 1]),
        i(c(a), "init", function(t, e) {
          (a.geometry = new Ar()), (a.geometry.vertices.position = [0, 0, 1]), a.geometry.init(t), a.material.init(t);
          var n = { background: { src: a.textureSrc.texture, minMag: t.LINEAR } };
          a.material.loadTextures(t, n, function() {
            (a.material.uniforms.u_background = a.material.textures.background), e && e();
          });
        }),
        i(c(a), "createCollisionGeo", function() {}),
        i(c(a), "rayCastFrom", function() {
          return !1;
        }),
        i(c(a), "hitTest", function() {
          return !1;
        }),
        i(c(a), "onSelection", function() {}),
        i(c(a), "update", function(t, e, n) {
          h(((o = c(a)), u(r.prototype)), "update", o).call(o, e, n),
            (a.material.uniforms.u_model = a.modelMatrix),
            (a.material.uniforms.u_scale = a.nScale),
            (a.material.uniforms.u_point = a.point);
        }),
        i(c(a), "draw", function(t) {
          a.isReady &&
            (t.disable(t.DEPTH_TEST),
            t.useProgram(a.material.programInfo.program),
            sn(t, a.material.programInfo, a.geometry.bufferInfo),
            an(a.material.programInfo, a.material.uniforms),
            t.drawArrays(t.POINTS, 0, a.geometry.bufferInfo.numElements),
            t.enable(t.DEPTH_TEST));
        }),
        i(c(a), "setPoint", function(t, e, n) {
          var r = void 0 === n ? 0 : n;
          a.point = Er.worldFromLatLon(t, e, r);
        }),
        (a.textureSrc = { texture: t.texture }),
        (a.material = new Zn(ii)),
        (a.material.uniforms = oi),
        a
      );
    }
    return r;
  })(),
  si = (function(t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var i = (e[r] = { exports: {}, id: r, loaded: !1 });
      return t[r].call(i.exports, i, i.exports, n), (i.loaded = !0), i.exports;
    }
    return (n.m = t), (n.c = e), (n.p = ""), n(0);
  })([
    function(t, e, n) {
      t.exports = n(1);
    },
    function(e, n, r) {
      var i =
        "function" == typeof Symbol && "symbol" === t(Symbol.iterator)
          ? function(e) {
              return t(e);
            }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? "symbol"
                : t(e);
            };
      !(function() {
        var t = Math.abs,
          n = Math.min,
          o = Math.max,
          a = Math.cos,
          s = Math.sin,
          u = Math.acos,
          l = Math.sqrt,
          c = Math.PI,
          f = { x: 0, y: 0, z: 0 },
          m = r(2),
          h = r(3),
          d = function(e) {
            var n = e && e.forEach ? e : [].slice.call(arguments),
              r = !1;
            if ("object" === i(n[0])) {
              r = n.length;
              var o = [];
              n.forEach(function(t) {
                ["x", "y", "z"].forEach(function(e) {
                  void 0 !== t[e] && o.push(t[e]);
                });
              }),
                (n = o);
            }
            var a = !1,
              s = n.length;
            if (r) {
              if (r > 4) {
                if (1 !== arguments.length)
                  throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");
                a = !0;
              }
            } else if (6 !== s && 8 !== s && 9 !== s && 12 !== s && 1 !== arguments.length)
              throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");
            var u = (!a && (9 === s || 12 === s)) || (e && e[0] && void 0 !== e[0].z);
            this._3d = u;
            for (var l = [], c = 0, f = u ? 3 : 2; c < s; c += f) {
              var h = { x: n[c], y: n[c + 1] };
              u && (h.z = n[c + 2]), l.push(h);
            }
            (this.order = l.length - 1), (this.points = l);
            var d = ["x", "y"];
            u && d.push("z"),
              (this.dims = d),
              (this.dimlen = d.length),
              (function(e) {
                for (var n = e.order, r = e.points, i = m.align(r, { p1: r[0], p2: r[n] }), o = 0; o < i.length; o++)
                  if (t(i[o].y) > 1e-4) return void (e._linear = !1);
                e._linear = !0;
              })(this),
              (this._t1 = 0),
              (this._t2 = 1),
              this.update();
          },
          p = r(4);
        function v(t, e, n, r, i) {
          void 0 === i && (i = 0.5);
          var o = m.projectionratio(i, t),
            a = 1 - o,
            s = { x: o * e.x + a * r.x, y: o * e.y + a * r.y },
            u = m.abcratio(i, t);
          return { A: { x: n.x + (n.x - s.x) / u, y: n.y + (n.y - s.y) / u }, B: n, C: s };
        }
        (d.SVGtoBeziers = function(t) {
          return p(d, t);
        }),
          (d.quadraticFromPoints = function(t, e, n, r) {
            if ((void 0 === r && (r = 0.5), 0 === r)) return new d(e, e, n);
            if (1 === r) return new d(t, e, e);
            var i = v(2, t, e, n, r);
            return new d(t, i.A, n);
          }),
          (d.cubicFromPoints = function(t, e, n, r, i) {
            void 0 === r && (r = 0.5);
            var o = v(3, t, e, n, r);
            void 0 === i && (i = m.dist(e, o.C));
            var a = (i * (1 - r)) / r,
              s = m.dist(t, n),
              u = (n.x - t.x) / s,
              l = (n.y - t.y) / s,
              c = i * u,
              f = i * l,
              h = a * u,
              p = a * l,
              y = e.x - c,
              g = e.y - f,
              _ = e.x + h,
              x = e.y + p,
              b = o.A,
              w = b.x + (y - b.x) / (1 - r),
              A = b.y + (g - b.y) / (1 - r),
              C = b.x + (_ - b.x) / r,
              T = b.y + (x - b.y) / r,
              I = { x: t.x + (w - t.x) / r, y: t.y + (A - t.y) / r },
              P = { x: n.x + (C - n.x) / (1 - r), y: n.y + (T - n.y) / (1 - r) };
            return new d(t, I, P, n);
          });
        var y = function() {
          return m;
        };
        (d.getUtils = y),
          (d.PolyBezier = h),
          (d.prototype = {
            getUtils: y,
            valueOf: function() {
              return this.toString();
            },
            toString: function() {
              return m.pointsToString(this.points);
            },
            toSVG: function(t) {
              if (this._3d) return !1;
              for (
                var e = this.points, n = ["M", e[0].x, e[0].y, 2 === this.order ? "Q" : "C"], r = 1, i = e.length;
                r < i;
                r++
              )
                n.push(e[r].x), n.push(e[r].y);
              return n.join(" ");
            },
            setRatios: function(t) {
              if (t.length !== this.points.length) throw new Error("incorrect number of ratio values");
              (this.ratios = t), (this._lut = []);
            },
            verify: function() {
              var t = this.coordDigest();
              t !== this._print && ((this._print = t), this.update());
            },
            coordDigest: function() {
              return this.points
                .map(function(t, e) {
                  return "" + e + t.x + t.y + (t.z ? t.z : 0);
                })
                .join("");
            },
            update: function(t) {
              (this._lut = []), (this.dpoints = m.derive(this.points, this._3d)), this.computedirection();
            },
            computedirection: function() {
              var t = this.points,
                e = m.angle(t[0], t[this.order], t[1]);
              this.clockwise = e > 0;
            },
            length: function() {
              return m.length(this.derivative.bind(this));
            },
            _lut: [],
            getLUT: function(t) {
              if ((this.verify(), (t = t || 100), this._lut.length === t)) return this._lut;
              (this._lut = []), t--;
              for (var e = 0; e <= t; e++) this._lut.push(this.compute(e / t));
              return this._lut;
            },
            on: function(t, e) {
              e = e || 5;
              for (var n, r = this.getLUT(), i = [], o = 0, a = 0; a < r.length; a++)
                (n = r[a]), m.dist(n, t) < e && (i.push(n), (o += a / r.length));
              return !!i.length && o / i.length;
            },
            project: function(t) {
              var e,
                n,
                r,
                i,
                o = this.getLUT(),
                a = o.length - 1,
                s = m.closest(o, t),
                u = s.mdist,
                l = s.mpos,
                c = (l + 1) / a,
                f = 0.1 / a;
              for (u += 1, e = n = (l - 1) / a; n < c + f; n += f)
                (r = this.compute(n)), (i = m.dist(t, r)) < u && ((u = i), (e = n));
              return ((r = this.compute(e)).t = e), (r.d = u), r;
            },
            get: function(t) {
              return this.compute(t);
            },
            point: function(t) {
              return this.points[t];
            },
            compute: function(t) {
              return this.ratios
                ? m.computeWithRatios(t, this.points, this.ratios, this._3d)
                : m.compute(t, this.points, this._3d, this.ratios);
            },
            raise: function() {
              for (var t, e, n = this.points, r = [n[0]], i = n.length, o = 1; o < i; o++)
                (t = n[o]),
                  (e = n[o - 1]),
                  (r[o] = { x: ((i - o) / i) * t.x + (o / i) * e.x, y: ((i - o) / i) * t.y + (o / i) * e.y });
              return (r[i] = n[i - 1]), new d(r);
            },
            derivative: function(t) {
              var e,
                n,
                r = 1 - t,
                i = 0,
                o = this.dpoints[0];
              2 === this.order && ((o = [o[0], o[1], f]), (e = r), (n = t)),
                3 === this.order && ((e = r * r), (n = r * t * 2), (i = t * t));
              var a = { x: e * o[0].x + n * o[1].x + i * o[2].x, y: e * o[0].y + n * o[1].y + i * o[2].y };
              return this._3d && (a.z = e * o[0].z + n * o[1].z + i * o[2].z), a;
            },
            curvature: function(t) {
              return m.curvature(t, this.points, this._3d);
            },
            inflections: function() {
              return m.inflections(this.points);
            },
            normal: function(t) {
              return this._3d ? this.__normal3(t) : this.__normal2(t);
            },
            __normal2: function(t) {
              var e = this.derivative(t),
                n = l(e.x * e.x + e.y * e.y);
              return { x: -e.y / n, y: e.x / n };
            },
            __normal3: function(t) {
              var e = this.derivative(t),
                n = this.derivative(t + 0.01),
                r = l(e.x * e.x + e.y * e.y + e.z * e.z),
                i = l(n.x * n.x + n.y * n.y + n.z * n.z);
              (e.x /= r), (e.y /= r), (e.z /= r), (n.x /= i), (n.y /= i), (n.z /= i);
              var o = { x: n.y * e.z - n.z * e.y, y: n.z * e.x - n.x * e.z, z: n.x * e.y - n.y * e.x },
                a = l(o.x * o.x + o.y * o.y + o.z * o.z);
              (o.x /= a), (o.y /= a), (o.z /= a);
              var s = [
                o.x * o.x,
                o.x * o.y - o.z,
                o.x * o.z + o.y,
                o.x * o.y + o.z,
                o.y * o.y,
                o.y * o.z - o.x,
                o.x * o.z - o.y,
                o.y * o.z + o.x,
                o.z * o.z
              ];
              return {
                x: s[0] * e.x + s[1] * e.y + s[2] * e.z,
                y: s[3] * e.x + s[4] * e.y + s[5] * e.z,
                z: s[6] * e.x + s[7] * e.y + s[8] * e.z
              };
            },
            hull: function(t) {
              var e,
                n = this.points,
                r = [],
                i = [],
                o = 0,
                a = 0,
                s = 0;
              for (i[o++] = n[0], i[o++] = n[1], i[o++] = n[2], 3 === this.order && (i[o++] = n[3]); n.length > 1; ) {
                for (r = [], a = 0, s = n.length - 1; a < s; a++)
                  (e = m.lerp(t, n[a], n[a + 1])), (i[o++] = e), r.push(e);
                n = r;
              }
              return i;
            },
            split: function(t, e) {
              if (0 === t && e) return this.split(e).left;
              if (1 === e) return this.split(t).right;
              var n = this.hull(t),
                r = {
                  left: 2 === this.order ? new d([n[0], n[3], n[5]]) : new d([n[0], n[4], n[7], n[9]]),
                  right: 2 === this.order ? new d([n[5], n[4], n[2]]) : new d([n[9], n[8], n[6], n[3]]),
                  span: n
                };
              return (
                (r.left._t1 = m.map(0, 0, 1, this._t1, this._t2)),
                (r.left._t2 = m.map(t, 0, 1, this._t1, this._t2)),
                (r.right._t1 = m.map(t, 0, 1, this._t1, this._t2)),
                (r.right._t2 = m.map(1, 0, 1, this._t1, this._t2)),
                e ? ((e = m.map(e, t, 1, 0, 1)), r.right.split(e).left) : r
              );
            },
            extrema: function() {
              var t,
                e,
                n = this.dims,
                r = {},
                i = [];
              return (
                n.forEach(
                  function(n) {
                    (e = function(t) {
                      return t[n];
                    }),
                      (t = this.dpoints[0].map(e)),
                      (r[n] = m.droots(t)),
                      3 === this.order && ((t = this.dpoints[1].map(e)), (r[n] = r[n].concat(m.droots(t)))),
                      (r[n] = r[n].filter(function(t) {
                        return t >= 0 && t <= 1;
                      })),
                      (i = i.concat(r[n].sort(m.numberSort)));
                  }.bind(this)
                ),
                (i = i.sort(m.numberSort).filter(function(t, e) {
                  return i.indexOf(t) === e;
                })),
                (r.values = i),
                r
              );
            },
            bbox: function() {
              var t = this.extrema(),
                e = {};
              return (
                this.dims.forEach(
                  function(n) {
                    e[n] = m.getminmax(this, n, t[n]);
                  }.bind(this)
                ),
                e
              );
            },
            overlaps: function(t) {
              var e = this.bbox(),
                n = t.bbox();
              return m.bboxoverlap(e, n);
            },
            offset: function(t, e) {
              if (void 0 !== e) {
                var n = this.get(t),
                  r = this.normal(t),
                  i = { c: n, n: r, x: n.x + r.x * e, y: n.y + r.y * e };
                return this._3d && (i.z = n.z + r.z * e), i;
              }
              if (this._linear) {
                var o = this.normal(0),
                  a = this.points.map(function(e) {
                    var n = { x: e.x + t * o.x, y: e.y + t * o.y };
                    return e.z && r.z && (n.z = e.z + t * o.z), n;
                  });
                return [new d(a)];
              }
              return this.reduce().map(function(e) {
                return e._linear ? e.offset(t)[0] : e.scale(t);
              });
            },
            simple: function() {
              if (3 === this.order) {
                var e = m.angle(this.points[0], this.points[3], this.points[1]),
                  n = m.angle(this.points[0], this.points[3], this.points[2]);
                if ((e > 0 && n < 0) || (e < 0 && n > 0)) return !1;
              }
              var r = this.normal(0),
                i = this.normal(1),
                o = r.x * i.x + r.y * i.y;
              return this._3d && (o += r.z * i.z), t(u(o)) < c / 3;
            },
            reduce: function() {
              var e,
                n,
                r = 0,
                i = 0,
                o = [],
                a = [],
                s = this.extrema().values;
              for (
                -1 === s.indexOf(0) && (s = [0].concat(s)), -1 === s.indexOf(1) && s.push(1), r = s[0], e = 1;
                e < s.length;
                e++
              )
                (i = s[e]), ((n = this.split(r, i))._t1 = r), (n._t2 = i), o.push(n), (r = i);
              return (
                o.forEach(function(e) {
                  for (r = 0, i = 0; i <= 1; )
                    for (i = r + 0.01; i <= 1.01; i += 0.01)
                      if (!(n = e.split(r, i)).simple()) {
                        if (t(r - (i -= 0.01)) < 0.01) return [];
                        ((n = e.split(r, i))._t1 = m.map(r, 0, 1, e._t1, e._t2)),
                          (n._t2 = m.map(i, 0, 1, e._t1, e._t2)),
                          a.push(n),
                          (r = i);
                        break;
                      }
                  r < 1 && (((n = e.split(r, 1))._t1 = m.map(r, 0, 1, e._t1, e._t2)), (n._t2 = e._t2), a.push(n));
                }),
                a
              );
            },
            scale: function(t) {
              var e = this.order,
                n = !1;
              if (("function" == typeof t && (n = t), n && 2 === e)) return this.raise().scale(n);
              var r = this.clockwise,
                i = n ? n(0) : t,
                o = n ? n(1) : t,
                a = [this.offset(0, 10), this.offset(1, 10)],
                s = m.lli4(a[0], a[0].c, a[1], a[1].c);
              if (!s) throw new Error("cannot scale this curve. Try reducing it first.");
              var u = this.points,
                c = [];
              return (
                [0, 1].forEach(
                  function(t) {
                    var n = (c[t * e] = m.copy(u[t * e]));
                    (n.x += (t ? o : i) * a[t].n.x), (n.y += (t ? o : i) * a[t].n.y);
                  }.bind(this)
                ),
                n
                  ? ([0, 1].forEach(
                      function(i) {
                        if (2 !== this.order || !i) {
                          var o = u[i + 1],
                            a = { x: o.x - s.x, y: o.y - s.y },
                            f = n ? n((i + 1) / e) : t;
                          n && !r && (f = -f);
                          var m = l(a.x * a.x + a.y * a.y);
                          (a.x /= m), (a.y /= m), (c[i + 1] = { x: o.x + f * a.x, y: o.y + f * a.y });
                        }
                      }.bind(this)
                    ),
                    new d(c))
                  : ([0, 1].forEach(
                      function(t) {
                        if (2 !== this.order || !t) {
                          var n = c[t * e],
                            r = this.derivative(t),
                            i = { x: n.x + r.x, y: n.y + r.y };
                          c[t + 1] = m.lli4(n, i, s, u[t + 1]);
                        }
                      }.bind(this)
                    ),
                    new d(c))
              );
            },
            outline: function(t, e, n, r) {
              e = void 0 === e ? t : e;
              var i,
                o = this.reduce(),
                a = o.length,
                s = [],
                u = [],
                l = 0,
                c = this.length(),
                f = void 0 !== n && void 0 !== r;
              function d(t, e, n, r, i) {
                return function(o) {
                  var a = r / n,
                    s = (r + i) / n,
                    u = e - t;
                  return m.map(o, 0, 1, t + a * u, t + s * u);
                };
              }
              o.forEach(function(i) {
                (w = i.length()),
                  f
                    ? (s.push(i.scale(d(t, n, c, l, w))), u.push(i.scale(d(-e, -r, c, l, w))))
                    : (s.push(i.scale(t)), u.push(i.scale(-e))),
                  (l += w);
              }),
                (u = u
                  .map(function(t) {
                    return (
                      (i = t.points)[3] ? (t.points = [i[3], i[2], i[1], i[0]]) : (t.points = [i[2], i[1], i[0]]), t
                    );
                  })
                  .reverse());
              var p = s[0].points[0],
                v = s[a - 1].points[s[a - 1].points.length - 1],
                y = u[a - 1].points[u[a - 1].points.length - 1],
                g = u[0].points[0],
                _ = m.makeline(y, p),
                x = m.makeline(v, g),
                b = [_]
                  .concat(s)
                  .concat([x])
                  .concat(u),
                w = b.length;
              return new h(b);
            },
            outlineshapes: function(t, e, n) {
              e = e || t;
              for (var r = this.outline(t, e).curves, i = [], o = 1, a = r.length; o < a / 2; o++) {
                var s = m.makeshape(r[o], r[a - o], n);
                (s.startcap.virtual = o > 1), (s.endcap.virtual = o < a / 2 - 1), i.push(s);
              }
              return i;
            },
            intersects: function(t, e) {
              return t
                ? t.p1 && t.p2
                  ? this.lineIntersects(t)
                  : (t instanceof d && (t = t.reduce()), this.curveintersects(this.reduce(), t, e))
                : this.selfintersects(e);
            },
            lineIntersects: function(t) {
              var e = n(t.p1.x, t.p2.x),
                r = n(t.p1.y, t.p2.y),
                i = o(t.p1.x, t.p2.x),
                a = o(t.p1.y, t.p2.y),
                s = this;
              return m.roots(this.points, t).filter(function(t) {
                var n = s.get(t);
                return m.between(n.x, e, i) && m.between(n.y, r, a);
              });
            },
            selfintersects: function(t) {
              var e,
                n,
                r,
                i,
                o = this.reduce(),
                a = o.length - 2,
                s = [];
              for (e = 0; e < a; e++)
                (r = o.slice(e, e + 1)), (i = o.slice(e + 2)), (n = this.curveintersects(r, i, t)), (s = s.concat(n));
              return s;
            },
            curveintersects: function(t, e, n) {
              var r = [];
              t.forEach(function(t) {
                e.forEach(function(e) {
                  t.overlaps(e) && r.push({ left: t, right: e });
                });
              });
              var i = [];
              return (
                r.forEach(function(t) {
                  var e = m.pairiteration(t.left, t.right, n);
                  e.length > 0 && (i = i.concat(e));
                }),
                i
              );
            },
            arcs: function(t) {
              t = t || 0.5;
              return this._iterate(t, []);
            },
            _error: function(e, n, r, i) {
              var o = (i - r) / 4,
                a = this.get(r + o),
                s = this.get(i - o),
                u = m.dist(e, n),
                l = m.dist(e, a),
                c = m.dist(e, s);
              return t(l - u) + t(c - u);
            },
            _iterate: function(t, e) {
              var n,
                r = 0,
                i = 1;
              do {
                (n = 0), (i = 1);
                var o,
                  u,
                  l,
                  c,
                  f,
                  h = this.get(r),
                  d = !1,
                  p = !1,
                  v = i,
                  y = 1;
                do {
                  if (
                    ((p = d),
                    (c = l),
                    (v = (r + i) / 2),
                    (o = this.get(v)),
                    (u = this.get(i)),
                    ((l = m.getccenter(h, o, u)).interval = { start: r, end: i }),
                    (d = this._error(l, h, r, i) <= t),
                    (f = p && !d) || (y = i),
                    d)
                  ) {
                    if (i >= 1) {
                      if (((l.interval.end = y = 1), (c = l), i > 1)) {
                        var g = { x: l.x + l.r * a(l.e), y: l.y + l.r * s(l.e) };
                        l.e += m.angle({ x: l.x, y: l.y }, g, this.get(1));
                      }
                      break;
                    }
                    i += (i - r) / 2;
                  } else i = v;
                } while (!f && n++ < 100);
                if (n >= 100) break;
                (c = c || l), e.push(c), (r = y);
              } while (i < 1);
              return e;
            }
          }),
          (e.exports = d);
      })();
    },
    function(t, e, n) {
      var r, i, o, a, s, u, l, c, f, m, h, d, p, v, y;
      (r = Math.abs),
        (i = Math.cos),
        (o = Math.sin),
        (a = Math.acos),
        (s = Math.atan2),
        (u = Math.sqrt),
        (l = Math.pow),
        (c = function(t) {
          return t < 0 ? -l(-t, 1 / 3) : l(t, 1 / 3);
        }),
        (f = Math.PI),
        (m = 2 * f),
        (h = f / 2),
        (d = Number.MAX_SAFE_INTEGER || 9007199254740991),
        (p = Number.MIN_SAFE_INTEGER || -9007199254740991),
        (v = { x: 0, y: 0, z: 0 }),
        (y = {
          Tvalues: [
            -0.06405689286260563,
            0.06405689286260563,
            -0.1911188674736163,
            0.1911188674736163,
            -0.3150426796961634,
            0.3150426796961634,
            -0.4337935076260451,
            0.4337935076260451,
            -0.5454214713888396,
            0.5454214713888396,
            -0.6480936519369755,
            0.6480936519369755,
            -0.7401241915785544,
            0.7401241915785544,
            -0.820001985973903,
            0.820001985973903,
            -0.8864155270044011,
            0.8864155270044011,
            -0.9382745520027328,
            0.9382745520027328,
            -0.9747285559713095,
            0.9747285559713095,
            -0.9951872199970213,
            0.9951872199970213
          ],
          Cvalues: [
            0.12793819534675216,
            0.12793819534675216,
            0.1258374563468283,
            0.1258374563468283,
            0.12167047292780339,
            0.12167047292780339,
            0.1155056680537256,
            0.1155056680537256,
            0.10744427011596563,
            0.10744427011596563,
            0.09761865210411388,
            0.09761865210411388,
            0.08619016153195327,
            0.08619016153195327,
            0.0733464814110803,
            0.0733464814110803,
            0.05929858491543678,
            0.05929858491543678,
            0.04427743881741981,
            0.04427743881741981,
            0.028531388628933663,
            0.028531388628933663,
            0.0123412297999872,
            0.0123412297999872
          ],
          arcfn: function(t, e) {
            var n = e(t),
              r = n.x * n.x + n.y * n.y;
            return void 0 !== n.z && (r += n.z * n.z), u(r);
          },
          compute: function(t, e, n) {
            if (0 === t) return e[0];
            var r = e.length - 1;
            if (1 === t) return e[r];
            var i = e,
              o = 1 - t;
            if (0 === r) return e[0];
            if (1 === r)
              return (
                (m = { x: o * i[0].x + t * i[1].x, y: o * i[0].y + t * i[1].y }),
                n && (m.z = o * i[0].z + t * i[1].z),
                m
              );
            if (r < 4) {
              var a,
                s,
                u,
                l = o * o,
                c = t * t,
                f = 0;
              2 === r
                ? ((i = [i[0], i[1], i[2], v]), (a = l), (s = o * t * 2), (u = c))
                : 3 === r && ((a = l * o), (s = l * t * 3), (u = o * c * 3), (f = t * c));
              var m = {
                x: a * i[0].x + s * i[1].x + u * i[2].x + f * i[3].x,
                y: a * i[0].y + s * i[1].y + u * i[2].y + f * i[3].y
              };
              return n && (m.z = a * i[0].z + s * i[1].z + u * i[2].z + f * i[3].z), m;
            }
            for (var h = JSON.parse(JSON.stringify(e)); h.length > 1; ) {
              for (var d = 0; d < h.length - 1; d++)
                (h[d] = { x: h[d].x + (h[d + 1].x - h[d].x) * t, y: h[d].y + (h[d + 1].y - h[d].y) * t }),
                  void 0 !== h[d].z && (h[d] = h[d].z + (h[d + 1].z - h[d].z) * t);
              h.splice(h.length - 1, 1);
            }
            return h[0];
          },
          computeWithRatios: function(t, e, n, r) {
            var i,
              o = 1 - t,
              a = n,
              s = e,
              u = a[0],
              l = a[1],
              c = a[2],
              f = a[3];
            return (
              (u *= o),
              (l *= t),
              2 === s.length
                ? ((i = u + l),
                  {
                    x: (u * s[0].x + l * s[1].x) / i,
                    y: (u * s[0].y + l * s[1].y) / i,
                    z: !!r && (u * s[0].z + l * s[1].z) / i
                  })
                : ((u *= o),
                  (l *= 2 * o),
                  (c *= t * t),
                  3 === s.length
                    ? ((i = u + l + c),
                      {
                        x: (u * s[0].x + l * s[1].x + c * s[2].x) / i,
                        y: (u * s[0].y + l * s[1].y + c * s[2].y) / i,
                        z: !!r && (u * s[0].z + l * s[1].z + c * s[2].z) / i
                      })
                    : ((u *= o),
                      (l *= 1.5 * o),
                      (c *= 3 * o),
                      (f *= t * t * t),
                      4 === s.length
                        ? ((i = u + l + c + f),
                          {
                            x: (u * s[0].x + l * s[1].x + c * s[2].x + f * s[3].x) / i,
                            y: (u * s[0].y + l * s[1].y + c * s[2].y + f * s[3].y) / i,
                            z: !!r && (u * s[0].z + l * s[1].z + c * s[2].z + f * s[3].z) / i
                          })
                        : void 0))
            );
          },
          derive: function(t, e) {
            for (var n = [], r = t, i = r.length, o = i - 1; i > 1; i--, o--) {
              for (var a, s = [], u = 0; u < o; u++)
                (a = { x: o * (r[u + 1].x - r[u].x), y: o * (r[u + 1].y - r[u].y) }),
                  e && (a.z = o * (r[u + 1].z - r[u].z)),
                  s.push(a);
              n.push(s), (r = s);
            }
            return n;
          },
          between: function(t, e, n) {
            return (e <= t && t <= n) || y.approximately(t, e) || y.approximately(t, n);
          },
          approximately: function(t, e, n) {
            return r(t - e) <= (n || 1e-6);
          },
          length: function(t) {
            var e,
              n,
              r = 0,
              i = y.Tvalues.length;
            for (e = 0; e < i; e++) (n = 0.5 * y.Tvalues[e] + 0.5), (r += y.Cvalues[e] * y.arcfn(n, t));
            return 0.5 * r;
          },
          map: function(t, e, n, r, i) {
            return r + ((t - e) / (n - e)) * (i - r);
          },
          lerp: function(t, e, n) {
            var r = { x: e.x + t * (n.x - e.x), y: e.y + t * (n.y - e.y) };
            return e.z && n.z && (r.z = e.z + t * (n.z - e.z)), r;
          },
          pointToString: function(t) {
            var e = t.x + "/" + t.y;
            return void 0 !== t.z && (e += "/" + t.z), e;
          },
          pointsToString: function(t) {
            return "[" + t.map(y.pointToString).join(", ") + "]";
          },
          copy: function(t) {
            return JSON.parse(JSON.stringify(t));
          },
          angle: function(t, e, n) {
            var r = e.x - t.x,
              i = e.y - t.y,
              o = n.x - t.x,
              a = n.y - t.y;
            return s(r * a - i * o, r * o + i * a);
          },
          round: function(t, e) {
            var n = "" + t,
              r = n.indexOf(".");
            return parseFloat(n.substring(0, r + 1 + e));
          },
          dist: function(t, e) {
            var n = t.x - e.x,
              r = t.y - e.y;
            return u(n * n + r * r);
          },
          closest: function(t, e) {
            var n,
              r,
              i = l(2, 63);
            return (
              t.forEach(function(t, o) {
                (r = y.dist(e, t)) < i && ((i = r), (n = o));
              }),
              { mdist: i, mpos: n }
            );
          },
          abcratio: function(t, e) {
            if (2 !== e && 3 !== e) return !1;
            if (void 0 === t) t = 0.5;
            else if (0 === t || 1 === t) return t;
            var n = l(t, e) + l(1 - t, e);
            return r((n - 1) / n);
          },
          projectionratio: function(t, e) {
            if (2 !== e && 3 !== e) return !1;
            if (void 0 === t) t = 0.5;
            else if (0 === t || 1 === t) return t;
            var n = l(1 - t, e);
            return n / (l(t, e) + n);
          },
          lli8: function(t, e, n, r, i, o, a, s) {
            var u = (t - n) * (o - s) - (e - r) * (i - a);
            return (
              0 != u && {
                x: ((t * r - e * n) * (i - a) - (t - n) * (i * s - o * a)) / u,
                y: ((t * r - e * n) * (o - s) - (e - r) * (i * s - o * a)) / u
              }
            );
          },
          lli4: function(t, e, n, r) {
            var i = t.x,
              o = t.y,
              a = e.x,
              s = e.y,
              u = n.x,
              l = n.y,
              c = r.x,
              f = r.y;
            return y.lli8(i, o, a, s, u, l, c, f);
          },
          lli: function(t, e) {
            return y.lli4(t, t.c, e, e.c);
          },
          makeline: function(t, e) {
            var r = n(1),
              i = t.x,
              o = t.y,
              a = e.x,
              s = e.y,
              u = (a - i) / 3,
              l = (s - o) / 3;
            return new r(i, o, i + u, o + l, i + 2 * u, o + 2 * l, a, s);
          },
          findbbox: function(t) {
            var e = d,
              n = d,
              r = p,
              i = p;
            return (
              t.forEach(function(t) {
                var o = t.bbox();
                e > o.x.min && (e = o.x.min),
                  n > o.y.min && (n = o.y.min),
                  r < o.x.max && (r = o.x.max),
                  i < o.y.max && (i = o.y.max);
              }),
              {
                x: { min: e, mid: (e + r) / 2, max: r, size: r - e },
                y: { min: n, mid: (n + i) / 2, max: i, size: i - n }
              }
            );
          },
          shapeintersections: function(t, e, n, r, i) {
            if (!y.bboxoverlap(e, r)) return [];
            var o = [],
              a = [t.startcap, t.forward, t.back, t.endcap],
              s = [n.startcap, n.forward, n.back, n.endcap];
            return (
              a.forEach(function(e) {
                e.virtual ||
                  s.forEach(function(r) {
                    if (!r.virtual) {
                      var a = e.intersects(r, i);
                      a.length > 0 && ((a.c1 = e), (a.c2 = r), (a.s1 = t), (a.s2 = n), o.push(a));
                    }
                  });
              }),
              o
            );
          },
          makeshape: function(t, e, n) {
            var r = e.points.length,
              i = t.points.length,
              o = y.makeline(e.points[r - 1], t.points[0]),
              a = y.makeline(t.points[i - 1], e.points[0]),
              s = { startcap: o, forward: t, back: e, endcap: a, bbox: y.findbbox([o, t, e, a]) },
              u = y;
            return (
              (s.intersections = function(t) {
                return u.shapeintersections(s, s.bbox, t, t.bbox, n);
              }),
              s
            );
          },
          getminmax: function(t, e, n) {
            if (!n) return { min: 0, max: 0 };
            var r,
              i,
              o = d,
              a = p;
            -1 === n.indexOf(0) && (n = [0].concat(n)), -1 === n.indexOf(1) && n.push(1);
            for (var s = 0, u = n.length; s < u; s++)
              (r = n[s]), (i = t.get(r))[e] < o && (o = i[e]), i[e] > a && (a = i[e]);
            return { min: o, mid: (o + a) / 2, max: a, size: a - o };
          },
          align: function(t, e) {
            var n = e.p1.x,
              r = e.p1.y,
              a = -s(e.p2.y - r, e.p2.x - n);
            return t.map(function(t) {
              return { x: (t.x - n) * i(a) - (t.y - r) * o(a), y: (t.x - n) * o(a) + (t.y - r) * i(a) };
            });
          },
          roots: function(t, e) {
            e = e || { p1: { x: 0, y: 0 }, p2: { x: 1, y: 0 } };
            var n = t.length - 1,
              r = y.align(t, e),
              o = function(t) {
                return 0 <= t && t <= 1;
              };
            if (2 === n) {
              if (0 !== (p = (v = r[0].y) - 2 * (g = r[1].y) + (_ = r[2].y))) {
                var s = -u(g * g - v * _),
                  l = -v + g;
                return [-(s + l) / p, -(-s + l) / p].filter(o);
              }
              return g !== _ && 0 === p ? [(2 * g - _) / (2 * g - 2 * _)].filter(o) : [];
            }
            var f = r[0].y,
              h = r[1].y,
              d = r[2].y,
              p = 3 * h - f - 3 * d + r[3].y,
              v = 3 * f - 6 * h + 3 * d,
              g = -3 * f + 3 * h,
              _ = f;
            if (y.approximately(p, 0)) {
              if (y.approximately(v, 0)) return y.approximately(g, 0) ? [] : [-_ / g].filter(o);
              var x = 2 * v;
              return [((b = u(g * g - 4 * v * _)) - g) / x, (-g - b) / x].filter(o);
            }
            var b,
              w,
              A = (r = (3 * (g /= p) - (v /= p) * v) / 3) / 3,
              C = (b = (2 * v * v * v - 9 * v * g + 27 * (_ /= p)) / 27) / 2,
              T = C * C + A * A * A;
            if (T < 0) {
              var I = -r / 3,
                P = u(I * I * I),
                S = -b / (2 * P),
                E = a(S < -1 ? -1 : S > 1 ? 1 : S),
                L = 2 * c(P);
              return [L * i(E / 3) - v / 3, L * i((E + m) / 3) - v / 3, L * i((E + 2 * m) / 3) - v / 3].filter(o);
            }
            if (0 === T) return [2 * (w = C < 0 ? c(-C) : -c(C)) - v / 3, -w - v / 3].filter(o);
            var M = u(T);
            return [(w = c(-C + M)) - c(C + M) - v / 3].filter(o);
          },
          droots: function(t) {
            if (3 === t.length) {
              var e = t[0],
                n = t[1],
                r = t[2],
                i = e - 2 * n + r;
              if (0 !== i) {
                var o = -u(n * n - e * r),
                  a = -e + n;
                return [-(o + a) / i, -(-o + a) / i];
              }
              return n !== r && 0 === i ? [(2 * n - r) / (2 * (n - r))] : [];
            }
            if (2 === t.length) return (e = t[0]) !== (n = t[1]) ? [e / (e - n)] : [];
          },
          curvature: function(t, e, n, i) {
            var o,
              a,
              s,
              c,
              f,
              m,
              h = y.derive(e),
              d = h[0],
              p = h[1],
              v = y.compute(t, d),
              g = y.compute(t, p),
              _ = v.x * v.x + v.y * v.y;
            if (
              (n
                ? ((o = u(l(v.y * g.z - g.y * v.z, 2) + l(v.z * g.x - g.z * v.x, 2) + l(v.x * g.y - g.x * v.y, 2))),
                  (a = l(_ + v.z * v.z, 1.5)))
                : ((o = v.x * g.y - v.y * g.x), (a = l(_, 1.5))),
              0 === o || 0 === a)
            )
              return { k: 0, r: 0 };
            if (((f = o / a), (m = a / o), !i)) {
              var x = y.curvature(t - 0.001, e, n, !0).k,
                b = y.curvature(t + 0.001, e, n, !0).k;
              (c = (b - f + (f - x)) / 2), (s = (r(b - f) + r(f - x)) / 2);
            }
            return { k: f, r: m, dk: c, adk: s };
          },
          inflections: function(t) {
            if (t.length < 4) return [];
            var e = y.align(t, { p1: t[0], p2: t.slice(-1)[0] }),
              n = e[2].x * e[1].y,
              r = e[3].x * e[1].y,
              i = e[1].x * e[2].y,
              o = 18 * (-3 * n + 2 * r + 3 * i - (f = e[3].x * e[2].y)),
              a = 18 * (3 * n - r - 3 * i),
              s = 18 * (i - n);
            if (y.approximately(o, 0)) {
              if (!y.approximately(a, 0)) {
                var u = -s / a;
                if (0 <= u && u <= 1) return [u];
              }
              return [];
            }
            var l = a * a - 4 * o * s,
              c = Math.sqrt(l),
              f = 2 * o;
            return y.approximately(f, 0)
              ? []
              : [(c - a) / f, -(a + c) / f].filter(function(t) {
                  return 0 <= t && t <= 1;
                });
          },
          bboxoverlap: function(t, e) {
            var n,
              i,
              o,
              a,
              s,
              u = ["x", "y"],
              l = u.length;
            for (n = 0; n < l; n++)
              if (((o = t[(i = u[n])].mid), (a = e[i].mid), (s = (t[i].size + e[i].size) / 2), r(o - a) >= s))
                return !1;
            return !0;
          },
          expandbox: function(t, e) {
            e.x.min < t.x.min && (t.x.min = e.x.min),
              e.y.min < t.y.min && (t.y.min = e.y.min),
              e.z && e.z.min < t.z.min && (t.z.min = e.z.min),
              e.x.max > t.x.max && (t.x.max = e.x.max),
              e.y.max > t.y.max && (t.y.max = e.y.max),
              e.z && e.z.max > t.z.max && (t.z.max = e.z.max),
              (t.x.mid = (t.x.min + t.x.max) / 2),
              (t.y.mid = (t.y.min + t.y.max) / 2),
              t.z && (t.z.mid = (t.z.min + t.z.max) / 2),
              (t.x.size = t.x.max - t.x.min),
              (t.y.size = t.y.max - t.y.min),
              t.z && (t.z.size = t.z.max - t.z.min);
          },
          pairiteration: function(t, e, n) {
            var r = t.bbox(),
              i = e.bbox(),
              o = 1e5,
              a = n || 0.5;
            if (r.x.size + r.y.size < a && i.x.size + i.y.size < a)
              return [(((o * (t._t1 + t._t2)) / 2) | 0) / o + "/" + (((o * (e._t1 + e._t2)) / 2) | 0) / o];
            var s = t.split(0.5),
              u = e.split(0.5),
              l = [
                { left: s.left, right: u.left },
                { left: s.left, right: u.right },
                { left: s.right, right: u.right },
                { left: s.right, right: u.left }
              ];
            l = l.filter(function(t) {
              return y.bboxoverlap(t.left.bbox(), t.right.bbox());
            });
            var c = [];
            return 0 === l.length
              ? c
              : (l.forEach(function(t) {
                  c = c.concat(y.pairiteration(t.left, t.right, a));
                }),
                (c = c.filter(function(t, e) {
                  return c.indexOf(t) === e;
                })));
          },
          getccenter: function(t, e, n) {
            var r,
              a = e.x - t.x,
              u = e.y - t.y,
              l = n.x - e.x,
              c = n.y - e.y,
              f = a * i(h) - u * o(h),
              d = a * o(h) + u * i(h),
              p = l * i(h) - c * o(h),
              v = l * o(h) + c * i(h),
              g = (t.x + e.x) / 2,
              _ = (t.y + e.y) / 2,
              x = (e.x + n.x) / 2,
              b = (e.y + n.y) / 2,
              w = g + f,
              A = _ + d,
              C = x + p,
              T = b + v,
              I = y.lli8(g, _, w, A, x, b, C, T),
              P = y.dist(I, t),
              S = s(t.y - I.y, t.x - I.x),
              E = s(e.y - I.y, e.x - I.x),
              L = s(n.y - I.y, n.x - I.x);
            return (
              S < L
                ? ((S > E || E > L) && (S += m), S > L && ((r = L), (L = S), (S = r)))
                : L < E && E < S
                ? ((r = L), (L = S), (S = r))
                : (L += m),
              (I.s = S),
              (I.e = L),
              (I.r = P),
              I
            );
          },
          numberSort: function(t, e) {
            return t - e;
          }
        }),
        (t.exports = y);
    },
    function(t, e, n) {
      var r, i;
      (r = n(2)),
        ((i = function(t) {
          (this.curves = []), (this._3d = !1), t && ((this.curves = t), (this._3d = this.curves[0]._3d));
        }).prototype = {
          valueOf: function() {
            return this.toString();
          },
          toString: function() {
            return (
              "[" +
              this.curves
                .map(function(t) {
                  return r.pointsToString(t.points);
                })
                .join(", ") +
              "]"
            );
          },
          addCurve: function(t) {
            this.curves.push(t), (this._3d = this._3d || t._3d);
          },
          length: function() {
            return this.curves
              .map(function(t) {
                return t.length();
              })
              .reduce(function(t, e) {
                return t + e;
              });
          },
          curve: function(t) {
            return this.curves[t];
          },
          bbox: function() {
            for (var t = this.curves, e = t[0].bbox(), n = 1; n < t.length; n++) r.expandbox(e, t[n].bbox());
            return e;
          },
          offset: function(t) {
            var e = [];
            return (
              this.curves.forEach(function(n) {
                e = e.concat(n.offset(t));
              }),
              new i(e)
            );
          }
        }),
        (t.exports = i);
    },
    function(t, e, n) {
      var r = n(5),
        i = { x: !1, y: !1 };
      function o(t, e, n) {
        if ("Z" !== e) {
          if ("M" !== e) {
            var r = [!1, i.x, i.y].concat(n),
              o = new (t.bind.apply(t, r))(),
              a = n.slice(-2);
            return (i = { x: a[0], y: a[1] }), o;
          }
          i = { x: n[0], y: n[1] };
        }
      }
      t.exports = function(t, e) {
        for (
          var n, i, a = r(e).split(" "), s = new RegExp("[MLCQZ]", ""), u = [], l = { C: 6, Q: 4, L: 2, M: 2 };
          a.length;

        )
          (n = a.splice(0, 1)[0]), s.test(n) && (i = o(t, n, a.splice(0, l[n]).map(parseFloat))) && u.push(i);
        return new t.PolyBezier(u);
      };
    },
    function(t, e) {
      t.exports = function(t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s = (t = t
            .replace(/,/g, " ")
            .replace(/-/g, " - ")
            .replace(/-\s+/g, "-")
            .replace(/([a-zA-Z])/g, " $1 "))
            .replace(/([a-zA-Z])\s?/g, "|$1")
            .split("|"),
          u = s.length,
          l = [],
          c = 0,
          f = 0,
          m = 0,
          h = 0,
          d = 0,
          p = 0,
          v = 0,
          y = 0,
          g = "";
        for (e = 1; e < u; e++)
          if (
            ((i = (r = (n = s[e]).substring(0, 1)).toLowerCase()),
            (o = (l = (l = n
              .replace(r, "")
              .trim()
              .split(" "))
              .filter(function(t) {
                return "" !== t;
              })
              .map(parseFloat)).length),
            "m" === i)
          ) {
            if (
              ((g += "M "),
              "m" === r ? ((m += l[0]), (h += l[1])) : ((m = l[0]), (h = l[1])),
              (c = m),
              (f = h),
              (g += m + " " + h + " "),
              o > 2)
            )
              for (a = 0; a < o; a += 2)
                "m" === r ? ((m += l[a]), (h += l[a + 1])) : ((m = l[a]), (h = l[a + 1])),
                  (g += ["L", m, h, ""].join(" "));
          } else if ("l" === i)
            for (a = 0; a < o; a += 2)
              "l" === r ? ((m += l[a]), (h += l[a + 1])) : ((m = l[a]), (h = l[a + 1])),
                (g += ["L", m, h, ""].join(" "));
          else if ("h" === i)
            for (a = 0; a < o; a++) "h" === r ? (m += l[a]) : (m = l[a]), (g += ["L", m, h, ""].join(" "));
          else if ("v" === i)
            for (a = 0; a < o; a++) "v" === r ? (h += l[a]) : (h = l[a]), (g += ["L", m, h, ""].join(" "));
          else if ("q" === i)
            for (a = 0; a < o; a += 4)
              "q" === r
                ? ((d = m + l[a]), (p = h + l[a + 1]), (m += l[a + 2]), (h += l[a + 3]))
                : ((d = l[a]), (p = l[a + 1]), (m = l[a + 2]), (h = l[a + 3])),
                (g += ["Q", d, p, m, h, ""].join(" "));
          else if ("t" === i)
            for (a = 0; a < o; a += 2)
              (d = m + (m - d)),
                (p = h + (h - p)),
                "t" === r ? ((m += l[a]), (h += l[a + 1])) : ((m = l[a]), (h = l[a + 1])),
                (g += ["Q", d, p, m, h, ""].join(" "));
          else if ("c" === i)
            for (a = 0; a < o; a += 6)
              "c" === r
                ? ((d = m + l[a]),
                  (p = h + l[a + 1]),
                  (v = m + l[a + 2]),
                  (y = h + l[a + 3]),
                  (m += l[a + 4]),
                  (h += l[a + 5]))
                : ((d = l[a]), (p = l[a + 1]), (v = l[a + 2]), (y = l[a + 3]), (m = l[a + 4]), (h = l[a + 5])),
                (g += ["C", d, p, v, y, m, h, ""].join(" "));
          else if ("s" === i)
            for (a = 0; a < o; a += 4)
              (d = m + (m - v)),
                (p = h + (h - y)),
                "s" === r
                  ? ((v = m + l[a]), (y = h + l[a + 1]), (m += l[a + 2]), (h += l[a + 3]))
                  : ((v = l[a]), (y = l[a + 1]), (m = l[a + 2]), (h = l[a + 3])),
                (g += ["C", d, p, v, y, m, h, ""].join(" "));
          else "z" === i && ((g += "Z "), (m = c), (h = f));
        return g.trim();
      };
    }
  ]),
  ui =
    "#define GLSLIFY 1\nattribute vec4 position;attribute vec2 texcoord;attribute vec3 pointA;attribute vec3 pointB;attribute vec3 startColor;attribute vec3 endColor;attribute vec2 width;attribute float inst;attribute float shouldDraw;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform mat4 u_model;uniform vec3 u_cameraPos;uniform vec2 u_resolution;uniform float u_segments;varying vec3 v_color;varying float v_alpha;varying float v_draw;float when_lt(float x,float y){return max(sign(y-x),0.0);}void main(){float rel_inst=inst+position.z;float width=mix(width.x,width.y,rel_inst);vec4 clip0=u_worldViewProjection*u_model*vec4(pointA,1.0);vec4 clip1=u_worldViewProjection*u_model*vec4(pointB,1.0);vec2 screen0=u_resolution*(0.5*clip0.xy/clip0.w+0.5);vec2 screen1=u_resolution*(0.5*clip1.xy/clip1.w+0.5);vec2 xBasis=normalize(screen1-screen0);vec2 yBasis=vec2(-xBasis.y,xBasis.x);vec2 pt0=screen0+width*(position.x*xBasis+position.y*yBasis);vec2 pt1=screen1+width*(position.x*xBasis+position.y*yBasis);vec2 pt=mix(pt0,pt1,position.z);vec4 clip=mix(clip0,clip1,position.z);gl_Position=vec4(clip.w*(2.0*pt/u_resolution-1.0),clip.z,clip.w)*when_lt(inst,u_segments);gl_PointSize=16.0;v_alpha=rel_inst/u_segments;v_color=mix(startColor,endColor,rel_inst/u_segments);v_draw=shouldDraw;}",
  li =
    "precision mediump float;\n#define GLSLIFY 1\nuniform float u_time;varying vec3 v_color;varying float v_alpha;varying float v_draw;void main(){if(v_alpha>v_draw){discard;}gl_FragColor=vec4(v_color,1.0);}",
  ci = (function(t) {
    s(r, Yr);
    var n = m(r);
    function r(t) {
      var o, a;
      e(this, r),
        i(c((a = n.call(this, t))), "numInstances", 1e4),
        i(c(a), "init", function(t) {
          a.geometry.init(t),
            (a._hasGeometry = !0),
            a.material.init(t),
            (a.material.texturesLoaded = !0),
            (a.vertexArrayInfo = ln(t, a.material.programInfo, a.geometry.bufferInfo));
        }),
        i(c(a), "createCollisionGeo", function() {}),
        i(c(a), "update", function(t, e, n) {
          h(((o = c(a)), u(r.prototype)), "update", o).call(o, e, n), (a.material.uniforms.u_model = a.modelMatrix);
        }),
        i(c(a), "draw", function(t) {
          a.isReady &&
            (t.useProgram(a.material.programInfo.program),
            sn(t, a.material.programInfo, a.vertexArrayInfo),
            an(a.material.programInfo, a.material.uniforms),
            t.drawElementsInstanced(
              t.TRIANGLE_FAN,
              a.vertexArrayInfo.numElements,
              t.UNSIGNED_SHORT,
              0,
              3 * a.segments - 1
            ),
            t.bindVertexArray(null));
        }),
        i(c(a), "rayCastFrom", function() {
          return !1;
        }),
        i(c(a), "hitTest", function() {
          return !1;
        }),
        i(c(a), "onSelectionCB", function(t) {
          return t;
        }),
        i(c(a), "onSelection", function(t, e) {
          var n = a.getNearest(t, e);
          return (n = a.onSelectionCB(n));
        }),
        t && void 0 !== t.numInstances && (a.numInstances = t.numInstances);
      var s = { vertex: ui, fragment: li };
      (a.material = new Zn(s)), (a.material.uniforms = {}), (a.geometry = new Ar());
      var l = [0, -0.5, 0, 0, -0.5, 1, 0, 0.5, 1, 0, -0.5, 0, 0, 0.5, 1, 0, 0.5, 0],
        f = Array.from(Array(101).keys());
      f.forEach(function(t) {
        f.push(t);
      }),
        f.forEach(function(t) {
          f.push(t);
        });
      for (var m = Array.from(Array(3).keys()), d = 0; d < 15; d += 1) {
        var v = Math.PI / 2 + ((d + 0) * Math.PI) / 15,
          y = Math.PI / 2 + ((d + 1) * Math.PI) / 15;
        l.push.apply(l, [0, 0, 0]),
          l.push.apply(l, [0.5 * Math.cos(v), 0.5 * Math.sin(v), 0]),
          l.push.apply(l, [0.5 * Math.cos(y), 0.5 * Math.sin(y), 0]);
      }
      for (var g = 0; g < 15; g += 1) {
        var _ = (3 * Math.PI) / 2 + ((g + 0) * Math.PI) / 15,
          x = (3 * Math.PI) / 2 + ((g + 1) * Math.PI) / 15;
        l.push.apply(l, [0, 0, 1]),
          l.push.apply(l, [0.5 * Math.cos(_), 0.5 * Math.sin(_), 1]),
          l.push.apply(l, [0.5 * Math.cos(x), 0.5 * Math.sin(x), 1]);
      }
      var b = [].concat(
        p(Er.worldFromLatLon(41, -111, 0.001)),
        p(Er.worldFromLatLon(20, -50, 1)),
        p(Er.worldFromLatLon(0, 0, 0.001))
      );
      a.segments = 100;
      var w = new si(b).getLUT(a.segments + 1),
        A = [];
      w.forEach(function(t) {
        A.push.apply(A, p(Object.values(t)));
      });
      new si([-1, 0, 0, -2, 0, -2, 0, 0, -1]).getLUT(a.segments + 1).forEach(function(t) {
        A.push.apply(A, p(Object.values(t)));
      });
      return (
        new si([-1, 1, -1, -2, 0, -2, 0, -1, -1]).getLUT(a.segments + 1).forEach(function(t) {
          A.push.apply(A, p(Object.values(t)));
        }),
        (a.geometry.vertices.position = { numComponents: 3, data: l, divisor: 0 }),
        (a.geometry.vertices.pointA = {
          numComponents: 3,
          data: A,
          divisor: 1,
          offset: 0 * Float32Array.BYTES_PER_ELEMENT
        }),
        (a.geometry.vertices.pointB = {
          numComponents: 3,
          data: A,
          divisor: 1,
          offset: 3 * Float32Array.BYTES_PER_ELEMENT
        }),
        (a.geometry.vertices.inst = { numComponents: 1, data: f, divisor: 1 }),
        (a.geometry.vertices.arc = { numComponents: 1, data: m, divisor: 101 }),
        (a.geometry.vertices.indices = { numComponents: 1, data: Array.from(Array(96).keys()), divisor: 0 }),
        a
      );
    }
    return r;
  })(),
  fi = (function(t) {
    s(r, Yr);
    var n = m(r);
    function r(t) {
      var o, a;
      e(this, r),
        i(c((a = n.call(this, t))), "numInstances", 1e4),
        i(c(a), "segments", 30),
        i(c(a), "capResolution", 6),
        i(c(a), "_arcCount", 0),
        i(c(a), "_tweens", []),
        i(c(a), "init", function(t) {
          a.geometry.init(t),
            (a._hasGeometry = !0),
            a.material.init(t),
            (a.material.texturesLoaded = !0),
            (a.vertexArrayInfo = ln(t, a.material.programInfo, a.geometry.bufferInfo));
        }),
        i(c(a), "createRandomArcs", function(t) {
          for (var e = 0; e < t; e += 1) {
            var n = {
              from: [180 * Math.random() - 90, 360 * Math.random() - 180],
              to: [180 * Math.random() - 90, 360 * Math.random() - 180]
            };
            a.addArc(n);
          }
        }),
        i(c(a), "addArc", function(t, e, n) {
          var r = [],
            i = {
              from: t.from,
              to: t.to,
              normalFactor: 1,
              alt: 0.5,
              startColor: "#ff0000",
              endColor: "#00ff00",
              startWidth: 4,
              endWidth: 4,
              shouldDraw: 1,
              arcNumber: a._arcCount
            };
          void 0 !== a.transform && (i = a.transform(t, i)), r.push.apply(r, p(a._createArcFrom(i)));
          var o = Array.from(Array(1).keys()),
            s = a._createInstArray(1),
            u = Er.hexToRGB(i.startColor),
            l = Er.hexToRGB(i.endColor),
            c = [i.startWidth, i.endWidth];
          if (void 0 !== e) {
            i.shouldDraw = 0;
            var f = a._arcCount,
              m = new Lr(0, 1, e, {
                onUpdate: function(t) {
                  a.geometry.updateGeometry({ shouldDraw: { data: [t] } }, f);
                },
                onComplete: function() {
                  n && n();
                }
              });
            a._tweens.push(m);
          }
          var h = [i.shouldDraw],
            d = {
              pointA: { data: new Float32Array(r) },
              pointB: { data: r },
              inst: { data: s },
              arc: { data: o },
              startColor: { data: u },
              endColor: { data: l },
              width: { data: c },
              shouldDraw: { data: h }
            };
          a.geometry.updateGeometry(d, a._arcCount), (a._arcCount += 1);
        }),
        i(c(a), "updateArc", function(t, e) {
          var n = [],
            r = {
              from: t.from,
              to: t.to,
              normalFactor: 1,
              alt: 0.5,
              startColor: "#ff0000",
              endColor: "#00ff00",
              startWidth: 4,
              endWidth: 4,
              shouldDraw: 1,
              arcNumber: a._arcCount
            };
          (r = a.transform(t, r)), n.push.apply(n, p(a._createArcFrom(r)));
          var i = Array.from(Array(1).keys()),
            o = a._createInstArray(1),
            s = Er.hexToRGB(r.startColor),
            u = Er.hexToRGB(r.endColor),
            l = [r.startWidth, r.endWidth],
            c = [r.shouldDraw],
            f = {
              pointA: { data: new Float32Array(n) },
              pointB: { data: n },
              inst: { data: o },
              arc: { data: i },
              startColor: { data: s },
              endColor: { data: u },
              width: { data: l },
              shouldDraw: { data: c }
            };
          a.geometry.updateGeometry(f, e);
        }),
        i(c(a), "_createArcFrom", function(t) {
          var e = a._computeControlPoints(t),
            n = new si(e.cp0),
            r = new si(e.cp1),
            i = n.getLUT(a._pointsPerArcHalf),
            o = r.getLUT(a._pointsPerArcHalf),
            s = [];
          i.reverse().forEach(function(t) {
            s.push(t);
          }),
            o.forEach(function(t) {
              s.push(t);
            }),
            s.splice(a._pointsPerArcHalf, 1);
          var u = [];
          return (
            s.forEach(function(t) {
              u.push.apply(u, p(Object.values(t)));
            }),
            u
          );
        }),
        i(c(a), "_computeControlPoints", function(t) {
          var e = Er.worldFromLatLon(t.from[0], t.from[1], 0.005),
            n = Er.worldFromLatLon(t.to[0], t.to[1], 0.005),
            r = Tn();
          Fn(r, e, n, 0.5);
          var i = Er.latLonFromWorld(r),
            o = Er.worldFromLatLon(i.lat, i.lon, t.alt),
            a = Tn();
          Sn(a, e, r), En(a, a, t.normalFactor);
          var s = Tn();
          Pn(s, o, a);
          var u = Tn();
          Sn(u, o, a);
          var l = [];
          l.push.apply(l, p(o)), l.push.apply(l, p(s)), l.push.apply(l, p(e));
          var c = [];
          return c.push.apply(c, p(o)), c.push.apply(c, p(u)), c.push.apply(c, p(n)), { cp0: l, cp1: c };
        }),
        i(c(a), "_createInstArray", function(t) {
          for (var e = Array.from(Array(a.segments + 1).keys()), n = [], r = 0; r < t; r += 1)
            e.forEach(function(t) {
              n.push(t);
            });
          return n;
        }),
        i(c(a), "createCollisionGeo", function() {}),
        i(c(a), "update", function(t, e, n) {
          h(((o = c(a)), u(r.prototype)), "update", o).call(o, e, n),
            (a.material.uniforms.u_model = a.modelMatrix),
            (a.material.uniforms.u_time = n),
            a.geometry.isDirty && a.geometry.updateBuffers(t);
        }),
        i(c(a), "draw", function(t) {
          !a.isReady ||
            a._arcCount <= 0 ||
            (t.useProgram(a.material.programInfo.program),
            sn(t, a.material.programInfo, a.vertexArrayInfo),
            an(a.material.programInfo, a.material.uniforms),
            t.drawElementsInstanced(
              t.TRIANGLE_FAN,
              a.vertexArrayInfo.numElements,
              t.UNSIGNED_SHORT,
              0,
              (a.segments + 1) * a._arcCount
            ),
            t.bindVertexArray(null));
        }),
        i(c(a), "rayCastFrom", function() {
          return !1;
        }),
        i(c(a), "hitTest", function() {
          return !1;
        }),
        i(c(a), "onSelectionCB", function(t) {
          return t;
        }),
        i(c(a), "onSelection", function(t, e) {
          var n = a.getNearest(t, e);
          return (n = a.onSelectionCB(n));
        }),
        t &&
          (void 0 !== t.numInstances && (a.numInstances = t.numInstances),
          void 0 !== t.segments && (a.segments = t.segments),
          void 0 !== t.transform && (a.transform = t.transform)),
        (a._pointsPerArcHalf = a.segments / 2 + 1);
      var s = { vertex: ui, fragment: li };
      (a.material = new Zn(s)), (a.material.uniforms = { u_segments: a.segments }), (a.geometry = new Ar());
      for (
        var l = [0, -0.5, 0, 0, -0.5, 1, 0, 0.5, 1, 0, -0.5, 0, 0, 0.5, 1, 0, 0.5, 0], f = 0;
        f < a.capResolution;
        f += 1
      ) {
        var m = Math.PI / 2 + ((f + 0) * Math.PI) / a.capResolution,
          d = Math.PI / 2 + ((f + 1) * Math.PI) / a.capResolution;
        l.push.apply(l, [0, 0, 0]),
          l.push.apply(l, [0.5 * Math.cos(m), 0.5 * Math.sin(m), 0]),
          l.push.apply(l, [0.5 * Math.cos(d), 0.5 * Math.sin(d), 0]);
      }
      for (var v = 0; v < a.capResolution; v += 1) {
        var y = (3 * Math.PI) / 2 + ((v + 0) * Math.PI) / a.capResolution,
          g = (3 * Math.PI) / 2 + ((v + 1) * Math.PI) / a.capResolution;
        l.push.apply(l, [0, 0, 1]),
          l.push.apply(l, [0.5 * Math.cos(y), 0.5 * Math.sin(y), 1]),
          l.push.apply(l, [0.5 * Math.cos(g), 0.5 * Math.sin(g), 1]);
      }
      var _ = Array.from(Array(2 * a._pointsPerArcHalf * a.numInstances)).fill(0);
      return (
        (a.geometry.vertices.position = { numComponents: 3, data: l, divisor: 0 }),
        (a.geometry.vertices.pointA = {
          numComponents: 3,
          data: _,
          divisor: 1,
          offset: 0 * Float32Array.BYTES_PER_ELEMENT,
          perInstance: 3 * (a.segments + 1)
        }),
        (a.geometry.vertices.pointB = {
          numComponents: 3,
          data: _,
          divisor: 1,
          offset: 3 * Float32Array.BYTES_PER_ELEMENT,
          perInstance: 3 * (a.segments + 1)
        }),
        (a.geometry.vertices.inst = { numComponents: 1, data: [], divisor: 1, perInstance: a.segments + 1 }),
        (a.geometry.vertices.arc = { numComponents: 1, data: [], divisor: a.segments, perInstance: 1 }),
        (a.geometry.vertices.startColor = {
          numComponents: 3,
          data: [],
          divisor: a.segments + 1,
          perInstance: 3,
          drawType: "DYNAMIC_DRAW"
        }),
        (a.geometry.vertices.endColor = {
          numComponents: 3,
          data: [],
          divisor: a.segments + 1,
          perInstance: 3,
          drawType: "DYNAMIC_DRAW"
        }),
        (a.geometry.vertices.width = {
          numComponents: 2,
          data: [],
          divisor: a.segments + 1,
          perInstance: 2,
          drawType: "DYNAMIC_DRAW"
        }),
        (a.geometry.vertices.shouldDraw = {
          numComponents: 1,
          data: [],
          divisor: a.segments + 1,
          perInstance: 1,
          drawType: "DYNAMIC_DRAW"
        }),
        (a.geometry.vertices.indices = {
          numComponents: 1,
          data: Array.from(Array(6 + 3 * a.capResolution * 2).keys()),
          divisor: 0
        }),
        a
      );
    }
    return r;
  })(),
  mi = {
    vertex:
      "#define GLSLIFY 1\nattribute vec4 position;attribute vec3 normal;attribute vec2 texcoord;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform mat4 u_model;varying vec2 vTexture;void main(){vec4 pos=u_worldViewProjection*u_model*position;vTexture=texcoord;gl_Position=pos;}",
    fragment:
      "precision mediump float;\n#define GLSLIFY 1\nuniform sampler2D uTexture;varying vec2 vTexture;void main(){vec4 textureColor=texture2D(uTexture,vTexture);gl_FragColor=vec4(textureColor.rgb,1.0);}"
  },
  hi = {},
  di = (function(t) {
    s(r, br);
    var n = m(r);
    function r(t) {
      var o, a;
      return (
        e(this, r),
        i(c((a = n.call(this))), "material", null),
        i(c(a), "init", function(t, e) {
          (a.geometry = new Ar()), (a.geometry.vertices = Jt.createSphereVertices(50, 128, 128)), a.geometry.init(t);
          var n = { surface: { src: a.textureSrc.surface, minMag: t.NEAREST } };
          a.material.init(t),
            a.material.loadTextures(t, n, function() {
              (a.material.uniforms.uTexture = a.material.textures.surface), e && e();
            }),
            (a.material.uniforms.uModelMatrix = a.modelMatrix);
        }),
        i(c(a), "createCollisionGeo", function() {}),
        i(c(a), "rayCastFrom", function() {
          return !1;
        }),
        i(c(a), "hitTest", function() {
          return !1;
        }),
        i(c(a), "onSelection", function() {}),
        i(c(a), "update", function(t, e, n) {
          h(((o = c(a)), u(r.prototype)), "update", o).call(o, e, n), (a.material.uniforms.u_model = a.modelMatrix);
        }),
        i(c(a), "draw", function(t) {
          a.isReady &&
            a.shouldDraw &&
            (t.useProgram(a.material.programInfo.program),
            t.cullFace(t.FRONT),
            sn(t, a.material.programInfo, a.geometry.bufferInfo),
            an(a.material.programInfo, a.material.uniforms),
            t.drawElements(t.TRIANGLES, a.geometry.bufferInfo.numElements, t.UNSIGNED_SHORT, 0),
            t.cullFace(t.BACK));
        }),
        (a.material = new Zn(mi)),
        (a.material.uniforms = hi),
        (a.textureSrc = { surface: t }),
        a
      );
    }
    return r;
  })(),
  pi = {
    vertex:
      "#define GLSLIFY 1\nattribute vec4 position;attribute vec3 normal;attribute vec2 texcoord;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform mat4 u_model;uniform vec3 u_cameraPos;varying float vAlpha;varying vec2 vTexture;void main(){vec4 pos=u_worldViewProjection*u_model*position;vec4 transformedCamera=vec4(-0.5,1.0,-1.0,1.0)*u_worldViewProjection;vAlpha=pow((1.0+(dot(normal,normalize(transformedCamera.xyz))))/2.0,1.0);vTexture=texcoord;gl_Position=pos;}",
    fragment:
      "precision mediump float;\n#define GLSLIFY 1\nuniform sampler2D uTexture;uniform vec2 u_offset;varying float vAlpha;varying vec2 vTexture;void main(){vec4 textureColor=texture2D(uTexture,vec2(vTexture.x-0.25+u_offset.x,vTexture.y+u_offset.y));float alpha=vAlpha+(1.0-vAlpha)*0.05;alpha*=0.9;gl_FragColor=vec4(textureColor.rgb,textureColor.r);}"
  },
  vi = { u_offset: [0, 0] },
  yi = (function(t) {
    s(r, br);
    var n = m(r);
    function r(t) {
      var o, a;
      return (
        e(this, r),
        i(c((a = n.call(this))), "material", null),
        i(c(a), "movementSpeed", [7, 0]),
        i(c(a), "init", function(t, e) {
          (a.geometry = new Ar("sphere")), a.geometry.init(t);
          var n = { surface: { src: a.textureSrc.surface, minMag: t.LINEAR } };
          a.material.init(t),
            a.material.loadTextures(t, n, function() {
              (a.material.uniforms.uTexture = a.material.textures.surface), e && e();
            }),
            (a.material.uniforms.uModelMatrix = a.modelMatrix);
          a.scale = [1.04, 1.04, 1.04];
        }),
        i(c(a), "createCollisionGeo", function() {}),
        i(c(a), "rayCastFrom", function() {
          return !1;
        }),
        i(c(a), "hitTest", function() {
          return !1;
        }),
        i(c(a), "onSelection", function() {}),
        i(c(a), "update", function(t, e, n) {
          h(((o = c(a)), u(r.prototype)), "update", o).call(o, e, n),
            (a.material.uniforms.u_model = a.modelMatrix),
            (a.material.uniforms.u_offset = [(n * a.movementSpeed[0]) / 1e3, (n * a.movementSpeed[1]) / 1e3]);
        }),
        i(c(a), "draw", function(t) {
          a.isReady &&
            a.shouldDraw &&
            (t.useProgram(a.material.programInfo.program),
            sn(t, a.material.programInfo, a.geometry.bufferInfo),
            an(a.material.programInfo, a.material.uniforms),
            t.drawElements(t.TRIANGLES, a.geometry.bufferInfo.numElements, t.UNSIGNED_SHORT, 0));
        }),
        (a.material = new Zn(pi)),
        (a.material.uniforms = vi),
        (a.textureSrc = { surface: t }),
        a
      );
    }
    return r;
  })(),
  gi = {
    vertex:
      "#define GLSLIFY 1\nattribute vec4 position;attribute vec3 normal;attribute vec2 texcoord;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform mat4 u_model;uniform vec3 u_cameraPos;varying vec2 vTexture;varying float vAlpha;void main(){vec4 pos=u_worldViewProjection*u_model*position;gl_PointSize=10.0;vec3 transformedNormal=(u_worldViewProjection*u_model*vec4(normal,1.0)).xyz;vec4 transformedCamera=vec4(1.0,1.0,-1.0,1.0)*u_worldViewProjection;vAlpha=pow(dot(position.xyz,normalize(u_cameraPos)),0.2);vTexture=texcoord.xy;gl_Position=pos;}",
    fragment:
      "precision mediump float;\n#define GLSLIFY 1\nuniform sampler2D u_surface;varying vec2 vTexture;varying float vAlpha;void main(){vec3 surfaceColor=texture2D(u_surface,vec2(vTexture.x,1.0-vTexture.y)).rgb;float alpha=clamp(vAlpha,0.1,1.0);vec3 color=surfaceColor*alpha;gl_FragColor=vec4(color,1.0);}"
  },
  _i = {},
  xi = (function(t) {
    s(r, wr);
    var n = m(r);
    function r(t, o) {
      var a, s;
      e(this, r),
        i(c((s = n.call(this))), "material", null),
        i(c(s), "lookup", null),
        i(c(s), "currentSelection", -1),
        i(c(s), "previousSelection", -1),
        i(c(s), "inAnimation", null),
        i(c(s), "outAnimation", null),
        i(c(s), "selection0", 236),
        i(c(s), "selection1", 144),
        i(c(s), "current", 236),
        i(c(s), "dataTexture", void 0),
        i(c(s), "dataTextureSize", 16),
        i(c(s), "updateCMDs", []),
        i(c(s), "highlightAnimationProps", {
          start: 0,
          stop: 1,
          duration: 1e3,
          onUpdate: function(t) {
            s.material.uniforms.u_animateIn = t;
          }
        }),
        i(c(s), "init", function(t, e) {
          s.geometry.init(t);
          var n = { surface: { src: s.textureSrc.surface, minMag: t.LINEAR } };
          s.material.init(t),
            (s.material.uniforms.uModelMatrix = s.modelMatrix),
            s.material.loadTextures(t, n, function() {
              (s.material.uniforms.u_surface = s.material.textures.surface), e && e();
            });
        }),
        i(c(s), "getValueForId", function(t) {
          return s.lookup.getFromId(t);
        }),
        i(c(s), "getValueForCode", function(t) {
          return s.lookup.getFromCode(t);
        }),
        i(c(s), "getValueForName", function(t) {
          return s.lookup.getFromName(t);
        }),
        i(c(s), "createCollisionGeo", function() {
          (s.collisionGeometry && s.collisionGeometry instanceof gr) ||
            (s.collisionGeometry = yr.create_collision_geometry(
              s.geometry.vertices.position.data,
              s.geometry.vertices.texcoord.data,
              s.geometry.vertices.indices.data
            ));
        }),
        i(c(s), "rayCastFrom", function(t) {
          return s.collisionGeometry.raycast(t.origin, t.direction);
        }),
        i(c(s), "hitTest", function(t) {
          return s.collisionGeometry.hitTest(t.origin, t.direction);
        }),
        i(c(s), "onSelectionCB", function() {}),
        i(c(s), "onSelection", function() {}),
        i(c(s), "onHover", function() {}),
        i(c(s), "update", function(t, e, n) {
          h(((a = c(s)), u(r.prototype)), "update", a).call(a, e, n),
            (s.material.uniforms.u_model = s.modelMatrix),
            s.updateCMDs.forEach(function(e) {
              e(t);
            }),
            (s.updateCMDs = []);
        }),
        i(c(s), "draw", function(t) {
          s.isReady &&
            s.shouldDraw &&
            (t.useProgram(s.material.programInfo.program),
            sn(t, s.material.programInfo, s.geometry.bufferInfo),
            an(s.material.programInfo, s.material.uniforms),
            t.drawElements(t.TRIANGLES, s.geometry.bufferInfo.numElements, t.UNSIGNED_INT, 0));
        }),
        i(c(s), "setCountryHover", function() {}),
        i(c(s), "setHighlightId", function(t) {
          (s.previousSelection = s.currentSelection), (s.currentSelection = t);
          var e = s.inAnimation ? s.inAnimation.currentValue() : 1,
            n = 300 * e;
          s.animateIn(s.currentSelection, 500), s.animateOut(s.previousSelection, n, e);
        }),
        i(c(s), "animateIn", function(t, e, n) {
          (s.material.uniforms.u_idAnimateIn = t),
            s.inAnimation && s.inAnimation.stop(),
            (s.material.uniforms.u_animateIn = 0),
            (s.inAnimation = new Lr(
              s.highlightAnimationProps.start,
              s.highlightAnimationProps.stop,
              s.highlightAnimationProps.duration,
              {
                onUpdate: s.highlightAnimationProps.onUpdate,
                onComplete: function() {
                  n && n();
                }
              }
            ));
        }),
        i(c(s), "animateOut", function(t, e, n, r) {
          (s.material.uniforms.u_idAnimateOut = t),
            s.outAnimation && s.outAnimation.stop(),
            (s.material.uniforms.u_animateOut = n),
            (s.outAnimation = new Lr(n, 0, e, {
              onUpdate: function(t) {
                s.material.uniforms.u_animateOut = t;
              },
              onComplete: function() {
                r && r();
              }
            }));
        }),
        i(c(s), "addDataset", function(t) {
          s.lookup = new Sr(t, s.textureSrc.id);
        }),
        i(c(s), "updateIdState", function() {}),
        (s.textureSrc = { surface: t.surface }),
        (s.material = new Zn(gi)),
        (s.material.uniforms = _i),
        (s.geometry = new Ar());
      var l = 0,
        f = new Float32Array(o),
        m = new Int32Array(o),
        d = f.subarray(l, l + 288e3);
      l += 288e3;
      var p = f.subarray(l, l + 288e3);
      l += 288e3;
      var v = f.subarray(l, l + 288e3);
      l += 288e3;
      var y = m.subarray(l, l + 96e3);
      return (
        (s.geometry.vertices.position = { numComponents: 3, data: d }),
        (s.geometry.vertices.normal = { numComponents: 3, data: p }),
        (s.geometry.vertices.texcoord = { numComponents: 3, data: v }),
        (s.geometry.vertices.indices = { numComponents: 3, data: y }),
        s
      );
    }
    return r;
  })(),
  bi = {
    vertex: document.querySelector("script[type=shader-vertex-points]").innerText,
    fragment: document.querySelector("script[type=shader-fragment-points]").innerText
  },
  wi = {
    uActiveColor: [1, 1, 1],
    uActiveColorOffset: 0.05,
    uActiveCircleDiameter: 0,
    uPointSize: 0.005,
    uPointAlpha: 2.5,
    uRandomPointSizeDelta: 0,
    uRandomPointSizeRatio: 0,
    uMinPointAlpha: 0,
    uMinPointSize: 1,
    uOffset: [0, 0],
    uRippleCenter: [0, 0, 1],
    uRippleProgress: -2,
    uRippleWidth: 0.2,
    uRippleHeight: 0.1,
    uRippleColor: [1, 1, 1],
    uColor: [1, 1, 1],
    u_speed: 10
  },
  Ai = (function(t) {
    s(r, wr);
    var n = m(r);
    function r(t, o, a) {
      var s, l;
      e(this, r),
        i(c((l = n.call(this))), "material", null),
        i(c(l), "lookup", null),
        i(c(l), "currentSelection", -1),
        i(c(l), "previousSelection", -1),
        i(c(l), "inAnimation", null),
        i(c(l), "outAnimation", null),
        i(c(l), "dataTexture", void 0),
        i(c(l), "dataTextureSize", 16),
        i(c(l), "updateCMDs", []),
        i(c(l), "highlightAnimationProps", {
          start: 0,
          stop: 1,
          duration: 1e3,
          onUpdate: function(t) {
            l.material.uniforms.u_animateIn = t;
          }
        }),
        i(c(l), "init", function(t, e) {
          l.geometry.init(t);
          var n = {
            noise: { src: l.textureSrc.noise, minMag: t.LINEAR },
            id: { src: l.textureSrc.id, minMag: t.NEAREST },
            bgTexture: { src: l.textureSrc.bgTexture, minMag: t.NEAREST },
            americas: { src: l.textureSrc.americas, minMag: t.NEAREST },
            apj: { src: l.textureSrc.apj, minMag: t.NEAREST },
            emea: { src: l.textureSrc.emea, minMag: t.NEAREST }
          };
          l.material.init(t),
            (l.material.uniforms.uModelMatrix = l.modelMatrix),
            l.material.loadTextures(t, n, function() {
              (l.material.uniforms.u_id = l.material.textures.id),
                (l.material.uniforms.uBgTexture = l.material.textures.bgTexture),
                (l.material.uniforms.uNoiseTexture = l.material.textures.noise),
                l.dataTexture.init(t),
                (l.material.uniforms.u_data = l.dataTexture.texture);
              e && e();
            });
        }),
        i(c(l), "getValueForId", function(t) {
          return l.lookup.getFromId(t);
        }),
        i(c(l), "getValueForCode", function(t) {
          return l.lookup.getFromCode(t);
        }),
        i(c(l), "getValueForName", function(t) {
          return l.lookup.getFromName(t);
        }),
        i(c(l), "setIdColor", function(t, e, n) {
          var r = void 0 === n ? 1 : n,
            i = Er.hexToRGBA(e, r, !1);
          l.updateCMDs.push(function(e) {
            l.dataTexture.updatePixelId(e, i, t);
          });
        }),
        i(c(l), "createCollisionGeo", function() {
          if (!(l.collisionGeometry && l.collisionGeometry instanceof gr)) {
            var t = Jt.createSphereVertices(1, 128, 128);
            l.collisionGeometry = yr.create_collision_geometry(t.position, t.texcoord, t.indices);
          }
        }),
        i(c(l), "rayCastFrom", function(t) {
          return l.collisionGeometry.raycast(t.origin, t.direction);
        }),
        i(c(l), "hitTest", function(t) {
          return l.collisionGeometry.hitTest(t.origin, t.direction);
        }),
        i(c(l), "onSelectionCB", function() {}),
        i(c(l), "onSelection", function(t, e, n) {
          var r = Er.latLonFromWorld(n.point);
          return (
            (l.current = l.lookup.getIdFromLatLon(r.lat, r.lon)),
            { id: l.current, name: l.lookup.getFromId(l.current), lat: t, lon: e }
          );
        }),
        i(c(l), "onHover", function() {}),
        i(c(l), "update", function(t, e, n) {
          h(((s = c(l)), u(r.prototype)), "update", s).call(s, e, n),
            (l.material.uniforms.u_model = l.modelMatrix),
            (l.material.uniforms.u_time = n),
            l.updateCMDs.forEach(function(e) {
              e(t);
            }),
            (l.updateCMDs = []);
        }),
        i(c(l), "draw", function(t) {
          l.isReady &&
            l.shouldDraw &&
            (t.useProgram(l.material.programInfo.program),
            t.disable(t.CULL_FACE),
            sn(t, l.material.programInfo, l.geometry.bufferInfo),
            an(l.material.programInfo, l.material.uniforms),
            t.drawElements(t.TRIANGLES, l.geometry.bufferInfo.numElements, t.UNSIGNED_INT, 0),
            t.enable(t.CULL_FACE));
        }),
        i(c(l), "setCountryHover", function(t) {}),
        i(c(l), "setHighlightId", function(t) {
          (l.previousSelection = l.currentSelection), (l.currentSelection = t);
          var e = l.inAnimation ? l.inAnimation.currentValue() : 1,
            n = 300 * e;
          l.animateIn(l.currentSelection, 500), l.animateOut(l.previousSelection, n, e);
        }),
        i(c(l), "animateIn", function(t, e) {
          (l.material.uniforms.u_idAnimateIn = t),
            l.inAnimation && l.inAnimation.stop(),
            (l.material.uniforms.u_animateIn = 0),
            (l.inAnimation = new Lr(
              l.highlightAnimationProps.start,
              l.highlightAnimationProps.stop,
              l.highlightAnimationProps.duration,
              {
                onUpdate: l.highlightAnimationProps.onUpdate,
                onComplete: function() {
                  e && e();
                }
              }
            ));
        }),
        i(c(l), "animateOut", function(t, e, n, r) {
          (l.material.uniforms.u_idAnimateOut = t),
            l.outAnimation && l.outAnimation.stop(),
            (l.material.uniforms.u_animateOut = n),
            (l.outAnimation = new Lr(n, 0, e, {
              onUpdate: function(t) {
                l.material.uniforms.u_animateOut = t;
              },
              onComplete: function() {
                r && r();
              }
            }));
        }),
        i(c(l), "addDataset", function(t) {
          l.lookup = new Sr(t, l.textureSrc.id);
        }),
        i(c(l), "rippleAtLocation", function(t, e, n) {
          l._ripple instanceof Lr && l._ripple.stop(),
            (l.material.uniforms.uRippleCenter = Er.worldFromLatLon(t, e, 0));
          var r = 2e3;
          n &&
            (n.width && (l.material.uniforms.uRippleWidth = n.width),
            n.height && (l.material.uniforms.uRippleHeight = n.height),
            n.speed && (l.material.uniforms.u_speed = n.speed),
            n.rippleColor && (l.material.uniforms.uRippleColor = n.rippleColor),
            n.activeColor && (l.material.uniforms.uActiveColor = n.activeColor),
            // Hack to fix glitch of point circle blinking
            (l.material.uniforms.uActiveCircleDiameter = 0),
            setTimeout(() => {
              l.material.uniforms.uActiveCircleDiameter = n.activeCircleDiameter || 0;
            }, 100),
            // ---
            n.duration && (r = n.duration));
          var i = 0 - l.material.uniforms.uRippleWidth,
            o = 1 + l.material.uniforms.uRippleWidth;
          l._ripple = new Lr(i, o, r, {
            onUpdate: function(t) {
              l.material.uniforms.uRippleProgress = t;
            }
          });
        }),
        (l.textureSrc = {
          noise: t.noise,
          id: t.id,
          bgTexture: t.bgTexture,
          americas: t.americas,
          apj: t.apj,
          emea: t.emea
        }),
        (l.dataTexture = new Mr(l.dataTextureSize, l.dataTextureSize)),
        (l.material = new Zn(bi)),
        (l.material.uniforms = wi),
        (l.geometry = new Ar());
      var f = 0,
        m = new Float32Array(o),
        d = new Int32Array(o),
        p = m.subarray(f, f + 114192);
      f += 114192;
      var v = m.subarray(f, f + 114192);
      f += 114192;
      var y = m.subarray(f, f + 114192);
      f += 114192;
      var g = m.subarray(f, f + 76128);
      f += 76128;
      var _ = m.subarray(f, f + 76128);
      f += 76128;
      var x = m.subarray(f, f + 38064);
      f += 38064;
      var b = d.subarray(f, f + 57096);
      return (
        (l.geometry.vertices.position = { numComponents: 3, data: p }),
        (l.geometry.vertices.tangentU = { numComponents: 3, data: v }),
        (l.geometry.vertices.tangentV = { numComponents: 3, data: y }),
        (l.geometry.vertices.texture = { numComponents: 2, data: g }),
        (l.geometry.vertices.textureG = { numComponents: 2, data: _ }),
        (l.geometry.vertices.random = { numComponents: 1, data: x }),
        (l.geometry.vertices.indices = { numComponents: 3, data: b }),
        a &&
          (a.pointSize && (l.material.uniforms.uPointSize = a.pointSize),
          a.pointAlpha && (l.material.uniforms.uPointAlpha = a.pointAlpha),
          a.randomPointSizeVariance && (l.material.uniforms.uRandomPointSizeDelta = a.randomPointSizeVariance),
          a.randomPointSizeRatio && (l.material.uniforms.uRandomPointSizeRatio = a.randomPointSizeRatio),
          a.minPointAlpha && (l.material.uniforms.uMinPointAlpha = a.minPointAlpha),
          a.minPointSize && (l.material.uniforms.uMinPointSize = a.minPointSize),
          a.offset && (l.material.uniforms.uOffset = a.offset),
          a.color && (l.material.uniforms.uColor = Er.hexToRGB(a.color)),
          a.activeColorOffset && (l.material.uniforms.uActiveColorOffset = a.activeColorOffset),
          a.activeColor && (l.material.uniforms.uActiveColor = Er.hexToRGB(a.activeColor))),
        l
      );
    }
    return r;
  })(),
  Ci = {
    u_animation: 1,
    u_startsize: 4,
    u_midsize: 16,
    u_endsize: 4,
    u_startColor: [1, 1, 1, 0.4],
    u_midColor: [1, 1, 1, 1],
    u_endColor: [1, 1, 1, 0.4]
  },
  Ti = (function(t) {
    s(r, Yr);
    var n = m(r);
    function r(t) {
      var o, a;
      e(this, r),
        i(c((a = n.call(this, t))), "datastore", void 0),
        i(c(a), "maxSelectionDistance", 300),
        i(c(a), "maxSelectionCount", 1),
        i(c(a), "maxDataPoints", 10),
        i(c(a), "_segments", 600),
        i(c(a), "_pointsPerArcHalf", 300),
        i(c(a), "_tweens", []),
        i(c(a), "dataPointCount", 0),
        i(c(a), "_resourceLoaded", !1),
        i(c(a), "_isDirty", !0),
        i(c(a), "_hasGeometry", !1),
        i(c(a), "useTexture", !1),
        i(c(a), "createEmptyVertices", function() {
          (a.geometry.vertices.position = { numComponents: 3, data: new Array(a._segments).fill(0), perInstance: 3 }),
            (a.geometry.vertices.inst = { numComponents: 1, data: new Array(a._segments).fill(0), perInstance: 1 }),
            (a.geometry.vertices.indices = {
              numComponents: 1,
              data: Array.from(Array(a._segments).keys()),
              perInstance: 1
            });
        }),
        i(c(a), "addArc", function(t, e, n) {
          var r = [],
            i = {
              from: t.from,
              to: t.to,
              normalFactor: t.normalFactor || 0.5,
              alt: t.alt || 0.3,
              startColor: t.startColor || "#ffffff",
              midColor: t.midColor || "#ffffff",
              endColor: t.endColor || "#ffffff",
              startAlpha: t.startAlpha || 0,
              midAlpha: t.midAlpha || 1,
              endAlpha: t.endAlpha || 0,
              startWidth: t.startWidth || 4,
              midWidth: t.midWidth || 4,
              endWidth: t.endWidth || 4
            },
            o = (Er.dotBetweenLatLon(t.from, t.to) + 1) / 2;
          void 0 !== a.transform && (i = a.transform(t, i)),
            (i.alt = 0.1 + (1 - o) * i.alt),
            (a.material.uniforms.u_startsize = i.startWidth),
            (a.material.uniforms.u_midsize = i.midWidth),
            (a.material.uniforms.u_endsize = i.endWidth),
            (a.material.uniforms.u_startColor = Er.hexToRGBA(i.startColor, i.startAlpha)),
            (a.material.uniforms.u_midColor = Er.hexToRGBA(i.midColor, i.midAlpha)),
            (a.material.uniforms.u_endColor = Er.hexToRGBA(i.endColor, i.endAlpha)),
            r.push.apply(r, p(a._createArcFrom(i)));
          var s = Array.from(Array(a._segments).keys());
          if (void 0 !== e) {
            a.material.uniforms.u_animation = 0;
            var u = new Lr(0, 1, e, {
              onUpdate: function(t) {
                a.material.uniforms.u_animation = t;
              },
              onComplete: function() {
                n && n();
              }
            });
            a._tweens.push(u);
          }
          var l = { position: { data: new Float32Array(r) }, inst: { data: s } };
          a.geometry.updateGeometry(l, 0), (a.shouldDraw = !0);
        }),
        i(c(a), "_createArcFrom", function(t) {
          var e = a._computeControlPoints(t),
            n = new si(e.cp0),
            r = new si(e.cp1),
            i = n.getLUT(a._pointsPerArcHalf),
            o = r.getLUT(a._pointsPerArcHalf),
            s = [];
          i.reverse().forEach(function(t) {
            s.push(t);
          }),
            o.forEach(function(t) {
              s.push(t);
            }),
            s.splice(a._pointsPerArcHalf, 1);
          var u = [];
          return (
            s.forEach(function(t) {
              u.push.apply(u, p(Object.values(t)));
            }),
            u
          );
        }),
        i(c(a), "_computeControlPoints", function(t) {
          var e = Er.worldFromLatLon(t.from[0], t.from[1], 0.005),
            n = Er.worldFromLatLon(t.to[0], t.to[1], 0.005),
            r = Tn();
          Fn(r, e, n, 0.5);
          var i = Er.latLonFromWorld(r),
            o = Er.worldFromLatLon(i.lat, i.lon, t.alt),
            a = Tn();
          Sn(a, e, r), En(a, a, t.normalFactor);
          var s = Tn();
          Pn(s, o, a);
          var u = Tn();
          Sn(u, o, a);
          var l = [];
          l.push.apply(l, p(o)), l.push.apply(l, p(s)), l.push.apply(l, p(e));
          var c = [];
          return c.push.apply(c, p(o)), c.push.apply(c, p(u)), c.push.apply(c, p(n)), { cp0: l, cp1: c };
        }),
        i(c(a), "_createInstArray", function(t) {
          for (var e = Array.from(Array(a._segments + 1).keys()), n = [], r = 0; r < t; r += 1)
            e.forEach(function(t) {
              n.push(t);
            });
          return n;
        }),
        i(c(a), "removeAllArcs", function() {
          a.shouldDraw = !1;
        }),
        i(c(a), "init", function(t, e) {
          if ((a.geometry.init(t), (a._hasGeometry = !0), a.material.init(t), a.useTexture)) {
            var n = { texture: { src: a.textureSrc.texture, minMag: t.LINEAR } };
            a.material.loadTextures(t, n, function() {
              e && e(), (a.material.uniforms.u_texture = a.material.textures.texture);
            });
          } else e && e();
        }),
        i(c(a), "createCollisionGeo", function() {}),
        i(c(a), "update", function(t, e, n) {
          h(((o = c(a)), u(r.prototype)), "update", o).call(o, e, n),
            (a.material.uniforms.u_model = a.modelMatrix),
            a.geometry.needsResize && a.geometry.reloadBuffers(t),
            a.geometry.isDirty && a.geometry.updateBuffers(t);
        }),
        i(c(a), "draw", function(t) {
          (a.isReady || a._hasGeometry) &&
            a.shouldDraw &&
            (t.useProgram(a.material.programInfo.program),
            t.disable(t.DEPTH_TEST),
            sn(t, a.material.programInfo, a.geometry.bufferInfo),
            an(a.material.programInfo, a.material.uniforms),
            t.drawArrays(t.POINTS, 0, a._segments - 1),
            t.enable(t.DEPTH_TEST));
        }),
        i(c(a), "rayCastFrom", function() {
          return !0;
        }),
        i(c(a), "hitTest", function() {
          return !0;
        }),
        i(c(a), "onSelectionCB", function(t) {
          return t;
        }),
        i(c(a), "onSelection", function() {});
      var s = {
        vertex:
          "#define GLSLIFY 1\nattribute vec4 position;attribute float inst;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform mat4 u_model;uniform vec3 u_cameraPos;uniform float u_startsize;uniform float u_midsize;uniform float u_endsize;uniform vec4 u_startColor;uniform vec4 u_midColor;uniform vec4 u_endColor;varying vec4 v_color;varying float v_tex;varying float v_alpha;float when_gt(float x,float y){return max(sign(x-y),0.0);}float when_lt(float x,float y){return max(sign(y-x),0.0);}float getV(vec3 x){return x.x*x.x+x.y*x.y+x.z*x.z;}void main(){v_tex=inst/600.0;float t0=v_tex*2.0;float t1=(v_tex*2.0-1.0);float firstHalfSize=mix(u_startsize,u_midsize,t0)*(1.0-step(0.5,v_tex));float secondHalfSize=mix(u_midsize,u_endsize,t1)*step(0.5,v_tex);;vec4 firstHalfColor=mix(u_startColor,u_midColor,t0)*(1.0-step(0.5,v_tex));vec4 secondHalfColor=mix(u_midColor,u_endColor,t1)*step(0.5,v_tex);vec4 pos=u_worldViewProjection*u_model*position;gl_PointSize=firstHalfSize+secondHalfSize;gl_Position=pos;v_color=firstHalfColor+secondHalfColor;v_alpha=step(0.3,(1.0+dot(normalize(u_cameraPos),normalize(position.xyz)))/2.0);}",
        fragment:
          "precision mediump float;\n#define GLSLIFY 1\nuniform float u_time;uniform float u_animation;varying vec4 v_color;varying float v_tex;varying float v_alpha;void main(){float d=distance(vec2(0.5),gl_PointCoord.xy);float c=1.0-smoothstep(0.4,0.5,d);float alpha=step(1.0-u_animation,1.0-v_tex);gl_FragColor=vec4(v_color.rgb,v_color.a*c*alpha);}"
      };
      return (
        t &&
          (t.maxSelectionCount && (a.maxSelectionCount = t.maxSelectionCount),
          t.maxSelectionDistance && (a.maxSelectionDistance = t.maxSelectionDistance),
          t.maxDataPoints && (a.maxDataPoints = t.maxDataPoints),
          !0 === t.useTexture &&
            void 0 !== t.texture &&
            ((a.useTexture = !0), (s.fragment = Hr), (a.textureSrc = { texture: t.texture }))),
        (a.material = new Zn(s)),
        (a.datastore = new Wr()),
        (a.material.uniforms = Ci),
        (a.geometry = new Ar()),
        (a.shouldDraw = !1),
        a.createEmptyVertices(),
        a
      );
    }
    return r;
  })(),
  Ii = function t(n, r, o, a) {
    e(this, t),
      i(
        this,
        "id",
        Math.random()
          .toFixed(16)
          .substr(2)
      ),
      i(this, "latitude", 0),
      i(this, "longitude", 0),
      i(this, "altitude", 0),
      i(this, "calloutClass", void 0),
      i(this, "data", void 0),
      (this.latitude = n),
      (this.longitude = r),
      (this.calloutClass = o),
      (this.data = a);
  },
  Pi = (function() {
    function t(n) {
      var r = this;
      e(this, t),
        i(this, "drawables", []),
        i(this, "element", void 0),
        i(this, "definition", void 0),
        i(this, "size", { width: 0, height: 0 }),
        (this.definition = n),
        (this.element = this.createElement()),
        (this.resizeObserver = new ResizeObserver(function(t) {
          t.length && (r.size = t[0].contentRect);
        })),
        this.resizeObserver.observe(this.element);
    }
    return (
      r(t, [
        {
          key: "release",
          value: function() {
            this.resizeObserver.disconnect();
          }
        },
        {
          key: "createElement",
          value: function() {
            return document.createElement("div");
          }
        },
        { key: "animateIn", value: function() {} },
        {
          key: "animateOut",
          value: function(t) {
            t(this);
          }
        },
        {
          key: "update",
          value: function(t) {
            this.drawables.forEach(function(e) {
              return e.update(t);
            });
          }
        },
        {
          key: "setPosition",
          value: function(t) {
            this.element.style.transform = "translate(".concat(t.screen.x, "px, ").concat(t.screen.y, "px)");
          }
        }
      ]),
      t
    );
  })();
export {
  Ti as Arc,
  ri as Atmosphere,
  ti as Background,
  Pi as Callout,
  Ii as CalloutDefinition,
  Nr as CalloutManager,
  Xn as Camera,
  yi as Clouds,
  fi as ConstantWidthArcs,
  xi as CustomGlobe,
  Wr as DataStore,
  br as Drawable,
  Er as GKUtils,
  Ar as Geometry,
  Ur as GlobeKitView,
  Ir as Icosphere,
  Rr as IcosphereLookup,
  ci as Instanced,
  Sr as Lookup,
  Jr as Lowpoly,
  Ai as PointGlobe,
  qr as Points,
  ai as QuadNormal,
  yn as Renderer,
  qn as Scene,
  Zn as ShaderMaterial,
  di as SkySphere,
  Lr as Tween
};
