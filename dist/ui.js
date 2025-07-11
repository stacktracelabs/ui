import { defineComponent as lu, shallowRef as Vt, watch as er, h as du, toValue as Wt, reactive as hu, computed as dr, unref as _u, ref as vu } from "vue";
import { router as hi, usePage as yu } from "@inertiajs/vue3";
const oo = lu({
  props: {
    src: {
      type: String,
      required: !0
    }
  },
  setup(r) {
    const e = (u) => {
      const s = u.attributes, o = {};
      for (let c = 0; c < s.length; c++) {
        const l = s[c];
        o[l.name] = l.value;
      }
      return o;
    }, t = new DOMParser(), n = t.parseFromString(r.src, "image/svg+xml").documentElement, a = Vt(e(n)), i = Vt(n.innerHTML);
    return er(() => r.src, () => {
      const u = t.parseFromString(r.src, "image/svg+xml").documentElement;
      a.value = e(u), i.value = u.innerHTML;
    }), () => du("svg", { ...a.value, innerHTML: i.value });
  }
});
var rr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _i(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var hr, zt;
function gu() {
  if (zt) return hr;
  zt = 1;
  function r() {
    this.__data__ = [], this.size = 0;
  }
  return hr = r, hr;
}
var _r, Jt;
function jt() {
  if (Jt) return _r;
  Jt = 1;
  function r(e, t) {
    return e === t || e !== e && t !== t;
  }
  return _r = r, _r;
}
var vr, Qt;
function tr() {
  if (Qt) return vr;
  Qt = 1;
  var r = jt();
  function e(t, n) {
    for (var a = t.length; a--; )
      if (r(t[a][0], n))
        return a;
    return -1;
  }
  return vr = e, vr;
}
var yr, Yt;
function pu() {
  if (Yt) return yr;
  Yt = 1;
  var r = tr(), e = Array.prototype, t = e.splice;
  function n(a) {
    var i = this.__data__, u = r(i, a);
    if (u < 0)
      return !1;
    var s = i.length - 1;
    return u == s ? i.pop() : t.call(i, u, 1), --this.size, !0;
  }
  return yr = n, yr;
}
var gr, Xt;
function bu() {
  if (Xt) return gr;
  Xt = 1;
  var r = tr();
  function e(t) {
    var n = this.__data__, a = r(n, t);
    return a < 0 ? void 0 : n[a][1];
  }
  return gr = e, gr;
}
var pr, Zt;
function qu() {
  if (Zt) return pr;
  Zt = 1;
  var r = tr();
  function e(t) {
    return r(this.__data__, t) > -1;
  }
  return pr = e, pr;
}
var br, kt;
function Au() {
  if (kt) return br;
  kt = 1;
  var r = tr();
  function e(t, n) {
    var a = this.__data__, i = r(a, t);
    return i < 0 ? (++this.size, a.push([t, n])) : a[i][1] = n, this;
  }
  return br = e, br;
}
var qr, rn;
function nr() {
  if (rn) return qr;
  rn = 1;
  var r = gu(), e = pu(), t = bu(), n = qu(), a = Au();
  function i(u) {
    var s = -1, o = u == null ? 0 : u.length;
    for (this.clear(); ++s < o; ) {
      var c = u[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = r, i.prototype.delete = e, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, qr = i, qr;
}
var Ar, en;
function mu() {
  if (en) return Ar;
  en = 1;
  var r = nr();
  function e() {
    this.__data__ = new r(), this.size = 0;
  }
  return Ar = e, Ar;
}
var mr, tn;
function Tu() {
  if (tn) return mr;
  tn = 1;
  function r(e) {
    var t = this.__data__, n = t.delete(e);
    return this.size = t.size, n;
  }
  return mr = r, mr;
}
var Tr, nn;
function Su() {
  if (nn) return Tr;
  nn = 1;
  function r(e) {
    return this.__data__.get(e);
  }
  return Tr = r, Tr;
}
var Sr, an;
function Cu() {
  if (an) return Sr;
  an = 1;
  function r(e) {
    return this.__data__.has(e);
  }
  return Sr = r, Sr;
}
var Cr, un;
function vi() {
  if (un) return Cr;
  un = 1;
  var r = typeof rr == "object" && rr && rr.Object === Object && rr;
  return Cr = r, Cr;
}
var Or, sn;
function x() {
  if (sn) return Or;
  sn = 1;
  var r = vi(), e = typeof self == "object" && self && self.Object === Object && self, t = r || e || Function("return this")();
  return Or = t, Or;
}
var Rr, on;
function ar() {
  if (on) return Rr;
  on = 1;
  var r = x(), e = r.Symbol;
  return Rr = e, Rr;
}
var jr, cn;
function Ou() {
  if (cn) return jr;
  cn = 1;
  var r = ar(), e = Object.prototype, t = e.hasOwnProperty, n = e.toString, a = r ? r.toStringTag : void 0;
  function i(u) {
    var s = t.call(u, a), o = u[a];
    try {
      u[a] = void 0;
      var c = !0;
    } catch {
    }
    var l = n.call(u);
    return c && (s ? u[a] = o : delete u[a]), l;
  }
  return jr = i, jr;
}
var Ir, fn;
function Ru() {
  if (fn) return Ir;
  fn = 1;
  var r = Object.prototype, e = r.toString;
  function t(n) {
    return e.call(n);
  }
  return Ir = t, Ir;
}
var wr, ln;
function ir() {
  if (ln) return wr;
  ln = 1;
  var r = ar(), e = Ou(), t = Ru(), n = "[object Null]", a = "[object Undefined]", i = r ? r.toStringTag : void 0;
  function u(s) {
    return s == null ? s === void 0 ? a : n : i && i in Object(s) ? e(s) : t(s);
  }
  return wr = u, wr;
}
var Er, dn;
function Q() {
  if (dn) return Er;
  dn = 1;
  function r(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  return Er = r, Er;
}
var Pr, hn;
function yi() {
  if (hn) return Pr;
  hn = 1;
  var r = ir(), e = Q(), t = "[object AsyncFunction]", n = "[object Function]", a = "[object GeneratorFunction]", i = "[object Proxy]";
  function u(s) {
    if (!e(s))
      return !1;
    var o = r(s);
    return o == n || o == a || o == t || o == i;
  }
  return Pr = u, Pr;
}
var Fr, _n;
function ju() {
  if (_n) return Fr;
  _n = 1;
  var r = x(), e = r["__core-js_shared__"];
  return Fr = e, Fr;
}
var xr, vn;
function Iu() {
  if (vn) return xr;
  vn = 1;
  var r = ju(), e = function() {
    var n = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function t(n) {
    return !!e && e in n;
  }
  return xr = t, xr;
}
var Dr, yn;
function gi() {
  if (yn) return Dr;
  yn = 1;
  var r = Function.prototype, e = r.toString;
  function t(n) {
    if (n != null) {
      try {
        return e.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  return Dr = t, Dr;
}
var Lr, gn;
function wu() {
  if (gn) return Lr;
  gn = 1;
  var r = yi(), e = Iu(), t = Q(), n = gi(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, u = Function.prototype, s = Object.prototype, o = u.toString, c = s.hasOwnProperty, l = RegExp(
    "^" + o.call(c).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function f(d) {
    if (!t(d) || e(d))
      return !1;
    var q = r(d) ? l : i;
    return q.test(n(d));
  }
  return Lr = f, Lr;
}
var Mr, pn;
function Eu() {
  if (pn) return Mr;
  pn = 1;
  function r(e, t) {
    return e == null ? void 0 : e[t];
  }
  return Mr = r, Mr;
}
var Nr, bn;
function G() {
  if (bn) return Nr;
  bn = 1;
  var r = wu(), e = Eu();
  function t(n, a) {
    var i = e(n, a);
    return r(i) ? i : void 0;
  }
  return Nr = t, Nr;
}
var Gr, qn;
function It() {
  if (qn) return Gr;
  qn = 1;
  var r = G(), e = x(), t = r(e, "Map");
  return Gr = t, Gr;
}
var Ur, An;
function ur() {
  if (An) return Ur;
  An = 1;
  var r = G(), e = r(Object, "create");
  return Ur = e, Ur;
}
var Kr, mn;
function Pu() {
  if (mn) return Kr;
  mn = 1;
  var r = ur();
  function e() {
    this.__data__ = r ? r(null) : {}, this.size = 0;
  }
  return Kr = e, Kr;
}
var Br, Tn;
function Fu() {
  if (Tn) return Br;
  Tn = 1;
  function r(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  return Br = r, Br;
}
var Hr, Sn;
function xu() {
  if (Sn) return Hr;
  Sn = 1;
  var r = ur(), e = "__lodash_hash_undefined__", t = Object.prototype, n = t.hasOwnProperty;
  function a(i) {
    var u = this.__data__;
    if (r) {
      var s = u[i];
      return s === e ? void 0 : s;
    }
    return n.call(u, i) ? u[i] : void 0;
  }
  return Hr = a, Hr;
}
var $r, Cn;
function Du() {
  if (Cn) return $r;
  Cn = 1;
  var r = ur(), e = Object.prototype, t = e.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return r ? i[a] !== void 0 : t.call(i, a);
  }
  return $r = n, $r;
}
var Vr, On;
function Lu() {
  if (On) return Vr;
  On = 1;
  var r = ur(), e = "__lodash_hash_undefined__";
  function t(n, a) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = r && a === void 0 ? e : a, this;
  }
  return Vr = t, Vr;
}
var Wr, Rn;
function Mu() {
  if (Rn) return Wr;
  Rn = 1;
  var r = Pu(), e = Fu(), t = xu(), n = Du(), a = Lu();
  function i(u) {
    var s = -1, o = u == null ? 0 : u.length;
    for (this.clear(); ++s < o; ) {
      var c = u[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = r, i.prototype.delete = e, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, Wr = i, Wr;
}
var zr, jn;
function Nu() {
  if (jn) return zr;
  jn = 1;
  var r = Mu(), e = nr(), t = It();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new r(),
      map: new (t || e)(),
      string: new r()
    };
  }
  return zr = n, zr;
}
var Jr, In;
function Gu() {
  if (In) return Jr;
  In = 1;
  function r(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  return Jr = r, Jr;
}
var Qr, wn;
function sr() {
  if (wn) return Qr;
  wn = 1;
  var r = Gu();
  function e(t, n) {
    var a = t.__data__;
    return r(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return Qr = e, Qr;
}
var Yr, En;
function Uu() {
  if (En) return Yr;
  En = 1;
  var r = sr();
  function e(t) {
    var n = r(this, t).delete(t);
    return this.size -= n ? 1 : 0, n;
  }
  return Yr = e, Yr;
}
var Xr, Pn;
function Ku() {
  if (Pn) return Xr;
  Pn = 1;
  var r = sr();
  function e(t) {
    return r(this, t).get(t);
  }
  return Xr = e, Xr;
}
var Zr, Fn;
function Bu() {
  if (Fn) return Zr;
  Fn = 1;
  var r = sr();
  function e(t) {
    return r(this, t).has(t);
  }
  return Zr = e, Zr;
}
var kr, xn;
function Hu() {
  if (xn) return kr;
  xn = 1;
  var r = sr();
  function e(t, n) {
    var a = r(this, t), i = a.size;
    return a.set(t, n), this.size += a.size == i ? 0 : 1, this;
  }
  return kr = e, kr;
}
var re, Dn;
function pi() {
  if (Dn) return re;
  Dn = 1;
  var r = Nu(), e = Uu(), t = Ku(), n = Bu(), a = Hu();
  function i(u) {
    var s = -1, o = u == null ? 0 : u.length;
    for (this.clear(); ++s < o; ) {
      var c = u[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = r, i.prototype.delete = e, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, re = i, re;
}
var ee, Ln;
function $u() {
  if (Ln) return ee;
  Ln = 1;
  var r = nr(), e = It(), t = pi(), n = 200;
  function a(i, u) {
    var s = this.__data__;
    if (s instanceof r) {
      var o = s.__data__;
      if (!e || o.length < n - 1)
        return o.push([i, u]), this.size = ++s.size, this;
      s = this.__data__ = new t(o);
    }
    return s.set(i, u), this.size = s.size, this;
  }
  return ee = a, ee;
}
var te, Mn;
function bi() {
  if (Mn) return te;
  Mn = 1;
  var r = nr(), e = mu(), t = Tu(), n = Su(), a = Cu(), i = $u();
  function u(s) {
    var o = this.__data__ = new r(s);
    this.size = o.size;
  }
  return u.prototype.clear = e, u.prototype.delete = t, u.prototype.get = n, u.prototype.has = a, u.prototype.set = i, te = u, te;
}
var ne, Nn;
function Vu() {
  if (Nn) return ne;
  Nn = 1;
  var r = "__lodash_hash_undefined__";
  function e(t) {
    return this.__data__.set(t, r), this;
  }
  return ne = e, ne;
}
var ae, Gn;
function Wu() {
  if (Gn) return ae;
  Gn = 1;
  function r(e) {
    return this.__data__.has(e);
  }
  return ae = r, ae;
}
var ie, Un;
function zu() {
  if (Un) return ie;
  Un = 1;
  var r = pi(), e = Vu(), t = Wu();
  function n(a) {
    var i = -1, u = a == null ? 0 : a.length;
    for (this.__data__ = new r(); ++i < u; )
      this.add(a[i]);
  }
  return n.prototype.add = n.prototype.push = e, n.prototype.has = t, ie = n, ie;
}
var ue, Kn;
function Ju() {
  if (Kn) return ue;
  Kn = 1;
  function r(e, t) {
    for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
      if (t(e[n], n, e))
        return !0;
    return !1;
  }
  return ue = r, ue;
}
var se, Bn;
function Qu() {
  if (Bn) return se;
  Bn = 1;
  function r(e, t) {
    return e.has(t);
  }
  return se = r, se;
}
var oe, Hn;
function qi() {
  if (Hn) return oe;
  Hn = 1;
  var r = zu(), e = Ju(), t = Qu(), n = 1, a = 2;
  function i(u, s, o, c, l, f) {
    var d = o & n, q = u.length, R = s.length;
    if (q != R && !(d && R > q))
      return !1;
    var m = f.get(u), b = f.get(s);
    if (m && b)
      return m == s && b == u;
    var p = -1, h = !0, C = o & a ? new r() : void 0;
    for (f.set(u, s), f.set(s, u); ++p < q; ) {
      var y = u[p], O = s[p];
      if (c)
        var g = d ? c(O, y, p, s, u, f) : c(y, O, p, u, s, f);
      if (g !== void 0) {
        if (g)
          continue;
        h = !1;
        break;
      }
      if (C) {
        if (!e(s, function(v, I) {
          if (!t(C, I) && (y === v || l(y, v, o, c, f)))
            return C.push(I);
        })) {
          h = !1;
          break;
        }
      } else if (!(y === O || l(y, O, o, c, f))) {
        h = !1;
        break;
      }
    }
    return f.delete(u), f.delete(s), h;
  }
  return oe = i, oe;
}
var ce, $n;
function Ai() {
  if ($n) return ce;
  $n = 1;
  var r = x(), e = r.Uint8Array;
  return ce = e, ce;
}
var fe, Vn;
function Yu() {
  if (Vn) return fe;
  Vn = 1;
  function r(e) {
    var t = -1, n = Array(e.size);
    return e.forEach(function(a, i) {
      n[++t] = [i, a];
    }), n;
  }
  return fe = r, fe;
}
var le, Wn;
function Xu() {
  if (Wn) return le;
  Wn = 1;
  function r(e) {
    var t = -1, n = Array(e.size);
    return e.forEach(function(a) {
      n[++t] = a;
    }), n;
  }
  return le = r, le;
}
var de, zn;
function Zu() {
  if (zn) return de;
  zn = 1;
  var r = ar(), e = Ai(), t = jt(), n = qi(), a = Yu(), i = Xu(), u = 1, s = 2, o = "[object Boolean]", c = "[object Date]", l = "[object Error]", f = "[object Map]", d = "[object Number]", q = "[object RegExp]", R = "[object Set]", m = "[object String]", b = "[object Symbol]", p = "[object ArrayBuffer]", h = "[object DataView]", C = r ? r.prototype : void 0, y = C ? C.valueOf : void 0;
  function O(g, v, I, T, E, _, w) {
    switch (I) {
      case h:
        if (g.byteLength != v.byteLength || g.byteOffset != v.byteOffset)
          return !1;
        g = g.buffer, v = v.buffer;
      case p:
        return !(g.byteLength != v.byteLength || !_(new e(g), new e(v)));
      case o:
      case c:
      case d:
        return t(+g, +v);
      case l:
        return g.name == v.name && g.message == v.message;
      case q:
      case m:
        return g == v + "";
      case f:
        var F = a;
      case R:
        var U = T & u;
        if (F || (F = i), g.size != v.size && !U)
          return !1;
        var K = w.get(g);
        if (K)
          return K == v;
        T |= s, w.set(g, v);
        var lr = n(F(g), F(v), T, E, _, w);
        return w.delete(g), lr;
      case b:
        if (y)
          return y.call(g) == y.call(v);
    }
    return !1;
  }
  return de = O, de;
}
var he, Jn;
function mi() {
  if (Jn) return he;
  Jn = 1;
  function r(e, t) {
    for (var n = -1, a = t.length, i = e.length; ++n < a; )
      e[i + n] = t[n];
    return e;
  }
  return he = r, he;
}
var _e, Qn;
function or() {
  if (Qn) return _e;
  Qn = 1;
  var r = Array.isArray;
  return _e = r, _e;
}
var ve, Yn;
function Ti() {
  if (Yn) return ve;
  Yn = 1;
  var r = mi(), e = or();
  function t(n, a, i) {
    var u = a(n);
    return e(n) ? u : r(u, i(n));
  }
  return ve = t, ve;
}
var ye, Xn;
function ku() {
  if (Xn) return ye;
  Xn = 1;
  function r(e, t) {
    for (var n = -1, a = e == null ? 0 : e.length, i = 0, u = []; ++n < a; ) {
      var s = e[n];
      t(s, n, e) && (u[i++] = s);
    }
    return u;
  }
  return ye = r, ye;
}
var ge, Zn;
function Si() {
  if (Zn) return ge;
  Zn = 1;
  function r() {
    return [];
  }
  return ge = r, ge;
}
var pe, kn;
function wt() {
  if (kn) return pe;
  kn = 1;
  var r = ku(), e = Si(), t = Object.prototype, n = t.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(u) {
    return u == null ? [] : (u = Object(u), r(a(u), function(s) {
      return n.call(u, s);
    }));
  } : e;
  return pe = i, pe;
}
var be, ra;
function rs() {
  if (ra) return be;
  ra = 1;
  function r(e, t) {
    for (var n = -1, a = Array(e); ++n < e; )
      a[n] = t(n);
    return a;
  }
  return be = r, be;
}
var qe, ea;
function V() {
  if (ea) return qe;
  ea = 1;
  function r(e) {
    return e != null && typeof e == "object";
  }
  return qe = r, qe;
}
var Ae, ta;
function es() {
  if (ta) return Ae;
  ta = 1;
  var r = ir(), e = V(), t = "[object Arguments]";
  function n(a) {
    return e(a) && r(a) == t;
  }
  return Ae = n, Ae;
}
var me, na;
function ts() {
  if (na) return me;
  na = 1;
  var r = es(), e = V(), t = Object.prototype, n = t.hasOwnProperty, a = t.propertyIsEnumerable, i = r(/* @__PURE__ */ function() {
    return arguments;
  }()) ? r : function(u) {
    return e(u) && n.call(u, "callee") && !a.call(u, "callee");
  };
  return me = i, me;
}
var W = { exports: {} }, Te, aa;
function ns() {
  if (aa) return Te;
  aa = 1;
  function r() {
    return !1;
  }
  return Te = r, Te;
}
W.exports;
var ia;
function Et() {
  return ia || (ia = 1, function(r, e) {
    var t = x(), n = ns(), a = e && !e.nodeType && e, i = a && !0 && r && !r.nodeType && r, u = i && i.exports === a, s = u ? t.Buffer : void 0, o = s ? s.isBuffer : void 0, c = o || n;
    r.exports = c;
  }(W, W.exports)), W.exports;
}
var Se, ua;
function as() {
  if (ua) return Se;
  ua = 1;
  var r = 9007199254740991, e = /^(?:0|[1-9]\d*)$/;
  function t(n, a) {
    var i = typeof n;
    return a = a ?? r, !!a && (i == "number" || i != "symbol" && e.test(n)) && n > -1 && n % 1 == 0 && n < a;
  }
  return Se = t, Se;
}
var Ce, sa;
function Ci() {
  if (sa) return Ce;
  sa = 1;
  var r = 9007199254740991;
  function e(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= r;
  }
  return Ce = e, Ce;
}
var Oe, oa;
function is() {
  if (oa) return Oe;
  oa = 1;
  var r = ir(), e = Ci(), t = V(), n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", u = "[object Date]", s = "[object Error]", o = "[object Function]", c = "[object Map]", l = "[object Number]", f = "[object Object]", d = "[object RegExp]", q = "[object Set]", R = "[object String]", m = "[object WeakMap]", b = "[object ArrayBuffer]", p = "[object DataView]", h = "[object Float32Array]", C = "[object Float64Array]", y = "[object Int8Array]", O = "[object Int16Array]", g = "[object Int32Array]", v = "[object Uint8Array]", I = "[object Uint8ClampedArray]", T = "[object Uint16Array]", E = "[object Uint32Array]", _ = {};
  _[h] = _[C] = _[y] = _[O] = _[g] = _[v] = _[I] = _[T] = _[E] = !0, _[n] = _[a] = _[b] = _[i] = _[p] = _[u] = _[s] = _[o] = _[c] = _[l] = _[f] = _[d] = _[q] = _[R] = _[m] = !1;
  function w(F) {
    return t(F) && e(F.length) && !!_[r(F)];
  }
  return Oe = w, Oe;
}
var Re, ca;
function Pt() {
  if (ca) return Re;
  ca = 1;
  function r(e) {
    return function(t) {
      return e(t);
    };
  }
  return Re = r, Re;
}
var z = { exports: {} };
z.exports;
var fa;
function Ft() {
  return fa || (fa = 1, function(r, e) {
    var t = vi(), n = e && !e.nodeType && e, a = n && !0 && r && !r.nodeType && r, i = a && a.exports === n, u = i && t.process, s = function() {
      try {
        var o = a && a.require && a.require("util").types;
        return o || u && u.binding && u.binding("util");
      } catch {
      }
    }();
    r.exports = s;
  }(z, z.exports)), z.exports;
}
var je, la;
function Oi() {
  if (la) return je;
  la = 1;
  var r = is(), e = Pt(), t = Ft(), n = t && t.isTypedArray, a = n ? e(n) : r;
  return je = a, je;
}
var Ie, da;
function Ri() {
  if (da) return Ie;
  da = 1;
  var r = rs(), e = ts(), t = or(), n = Et(), a = as(), i = Oi(), u = Object.prototype, s = u.hasOwnProperty;
  function o(c, l) {
    var f = t(c), d = !f && e(c), q = !f && !d && n(c), R = !f && !d && !q && i(c), m = f || d || q || R, b = m ? r(c.length, String) : [], p = b.length;
    for (var h in c)
      (l || s.call(c, h)) && !(m && // Safari 9 has enumerable `arguments.length` in strict mode.
      (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      q && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      R && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
      a(h, p))) && b.push(h);
    return b;
  }
  return Ie = o, Ie;
}
var we, ha;
function xt() {
  if (ha) return we;
  ha = 1;
  var r = Object.prototype;
  function e(t) {
    var n = t && t.constructor, a = typeof n == "function" && n.prototype || r;
    return t === a;
  }
  return we = e, we;
}
var Ee, _a;
function ji() {
  if (_a) return Ee;
  _a = 1;
  function r(e, t) {
    return function(n) {
      return e(t(n));
    };
  }
  return Ee = r, Ee;
}
var Pe, va;
function us() {
  if (va) return Pe;
  va = 1;
  var r = ji(), e = r(Object.keys, Object);
  return Pe = e, Pe;
}
var Fe, ya;
function ss() {
  if (ya) return Fe;
  ya = 1;
  var r = xt(), e = us(), t = Object.prototype, n = t.hasOwnProperty;
  function a(i) {
    if (!r(i))
      return e(i);
    var u = [];
    for (var s in Object(i))
      n.call(i, s) && s != "constructor" && u.push(s);
    return u;
  }
  return Fe = a, Fe;
}
var xe, ga;
function Ii() {
  if (ga) return xe;
  ga = 1;
  var r = yi(), e = Ci();
  function t(n) {
    return n != null && e(n.length) && !r(n);
  }
  return xe = t, xe;
}
var De, pa;
function Dt() {
  if (pa) return De;
  pa = 1;
  var r = Ri(), e = ss(), t = Ii();
  function n(a) {
    return t(a) ? r(a) : e(a);
  }
  return De = n, De;
}
var Le, ba;
function wi() {
  if (ba) return Le;
  ba = 1;
  var r = Ti(), e = wt(), t = Dt();
  function n(a) {
    return r(a, t, e);
  }
  return Le = n, Le;
}
var Me, qa;
function os() {
  if (qa) return Me;
  qa = 1;
  var r = wi(), e = 1, t = Object.prototype, n = t.hasOwnProperty;
  function a(i, u, s, o, c, l) {
    var f = s & e, d = r(i), q = d.length, R = r(u), m = R.length;
    if (q != m && !f)
      return !1;
    for (var b = q; b--; ) {
      var p = d[b];
      if (!(f ? p in u : n.call(u, p)))
        return !1;
    }
    var h = l.get(i), C = l.get(u);
    if (h && C)
      return h == u && C == i;
    var y = !0;
    l.set(i, u), l.set(u, i);
    for (var O = f; ++b < q; ) {
      p = d[b];
      var g = i[p], v = u[p];
      if (o)
        var I = f ? o(v, g, p, u, i, l) : o(g, v, p, i, u, l);
      if (!(I === void 0 ? g === v || c(g, v, s, o, l) : I)) {
        y = !1;
        break;
      }
      O || (O = p == "constructor");
    }
    if (y && !O) {
      var T = i.constructor, E = u.constructor;
      T != E && "constructor" in i && "constructor" in u && !(typeof T == "function" && T instanceof T && typeof E == "function" && E instanceof E) && (y = !1);
    }
    return l.delete(i), l.delete(u), y;
  }
  return Me = a, Me;
}
var Ne, Aa;
function cs() {
  if (Aa) return Ne;
  Aa = 1;
  var r = G(), e = x(), t = r(e, "DataView");
  return Ne = t, Ne;
}
var Ge, ma;
function fs() {
  if (ma) return Ge;
  ma = 1;
  var r = G(), e = x(), t = r(e, "Promise");
  return Ge = t, Ge;
}
var Ue, Ta;
function ls() {
  if (Ta) return Ue;
  Ta = 1;
  var r = G(), e = x(), t = r(e, "Set");
  return Ue = t, Ue;
}
var Ke, Sa;
function ds() {
  if (Sa) return Ke;
  Sa = 1;
  var r = G(), e = x(), t = r(e, "WeakMap");
  return Ke = t, Ke;
}
var Be, Ca;
function cr() {
  if (Ca) return Be;
  Ca = 1;
  var r = cs(), e = It(), t = fs(), n = ls(), a = ds(), i = ir(), u = gi(), s = "[object Map]", o = "[object Object]", c = "[object Promise]", l = "[object Set]", f = "[object WeakMap]", d = "[object DataView]", q = u(r), R = u(e), m = u(t), b = u(n), p = u(a), h = i;
  return (r && h(new r(new ArrayBuffer(1))) != d || e && h(new e()) != s || t && h(t.resolve()) != c || n && h(new n()) != l || a && h(new a()) != f) && (h = function(C) {
    var y = i(C), O = y == o ? C.constructor : void 0, g = O ? u(O) : "";
    if (g)
      switch (g) {
        case q:
          return d;
        case R:
          return s;
        case m:
          return c;
        case b:
          return l;
        case p:
          return f;
      }
    return y;
  }), Be = h, Be;
}
var He, Oa;
function hs() {
  if (Oa) return He;
  Oa = 1;
  var r = bi(), e = qi(), t = Zu(), n = os(), a = cr(), i = or(), u = Et(), s = Oi(), o = 1, c = "[object Arguments]", l = "[object Array]", f = "[object Object]", d = Object.prototype, q = d.hasOwnProperty;
  function R(m, b, p, h, C, y) {
    var O = i(m), g = i(b), v = O ? l : a(m), I = g ? l : a(b);
    v = v == c ? f : v, I = I == c ? f : I;
    var T = v == f, E = I == f, _ = v == I;
    if (_ && u(m)) {
      if (!u(b))
        return !1;
      O = !0, T = !1;
    }
    if (_ && !T)
      return y || (y = new r()), O || s(m) ? e(m, b, p, h, C, y) : t(m, b, v, p, h, C, y);
    if (!(p & o)) {
      var w = T && q.call(m, "__wrapped__"), F = E && q.call(b, "__wrapped__");
      if (w || F) {
        var U = w ? m.value() : m, K = F ? b.value() : b;
        return y || (y = new r()), C(U, K, p, h, y);
      }
    }
    return _ ? (y || (y = new r()), n(m, b, p, h, C, y)) : !1;
  }
  return He = R, He;
}
var $e, Ra;
function _s() {
  if (Ra) return $e;
  Ra = 1;
  var r = hs(), e = V();
  function t(n, a, i, u, s) {
    return n === a ? !0 : n == null || a == null || !e(n) && !e(a) ? n !== n && a !== a : r(n, a, i, u, t, s);
  }
  return $e = t, $e;
}
var Ve, ja;
function vs() {
  if (ja) return Ve;
  ja = 1;
  var r = _s();
  function e(t, n) {
    return r(t, n);
  }
  return Ve = e, Ve;
}
var ys = vs();
const gs = /* @__PURE__ */ _i(ys);
var We, Ia;
function ps() {
  if (Ia) return We;
  Ia = 1;
  function r(e, t) {
    for (var n = -1, a = e == null ? 0 : e.length; ++n < a && t(e[n], n, e) !== !1; )
      ;
    return e;
  }
  return We = r, We;
}
var ze, wa;
function bs() {
  if (wa) return ze;
  wa = 1;
  var r = G(), e = function() {
    try {
      var t = r(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {
    }
  }();
  return ze = e, ze;
}
var Je, Ea;
function Ei() {
  if (Ea) return Je;
  Ea = 1;
  var r = bs();
  function e(t, n, a) {
    n == "__proto__" && r ? r(t, n, {
      configurable: !0,
      enumerable: !0,
      value: a,
      writable: !0
    }) : t[n] = a;
  }
  return Je = e, Je;
}
var Qe, Pa;
function Pi() {
  if (Pa) return Qe;
  Pa = 1;
  var r = Ei(), e = jt(), t = Object.prototype, n = t.hasOwnProperty;
  function a(i, u, s) {
    var o = i[u];
    (!(n.call(i, u) && e(o, s)) || s === void 0 && !(u in i)) && r(i, u, s);
  }
  return Qe = a, Qe;
}
var Ye, Fa;
function fr() {
  if (Fa) return Ye;
  Fa = 1;
  var r = Pi(), e = Ei();
  function t(n, a, i, u) {
    var s = !i;
    i || (i = {});
    for (var o = -1, c = a.length; ++o < c; ) {
      var l = a[o], f = u ? u(i[l], n[l], l, i, n) : void 0;
      f === void 0 && (f = n[l]), s ? e(i, l, f) : r(i, l, f);
    }
    return i;
  }
  return Ye = t, Ye;
}
var Xe, xa;
function qs() {
  if (xa) return Xe;
  xa = 1;
  var r = fr(), e = Dt();
  function t(n, a) {
    return n && r(a, e(a), n);
  }
  return Xe = t, Xe;
}
var Ze, Da;
function As() {
  if (Da) return Ze;
  Da = 1;
  function r(e) {
    var t = [];
    if (e != null)
      for (var n in Object(e))
        t.push(n);
    return t;
  }
  return Ze = r, Ze;
}
var ke, La;
function ms() {
  if (La) return ke;
  La = 1;
  var r = Q(), e = xt(), t = As(), n = Object.prototype, a = n.hasOwnProperty;
  function i(u) {
    if (!r(u))
      return t(u);
    var s = e(u), o = [];
    for (var c in u)
      c == "constructor" && (s || !a.call(u, c)) || o.push(c);
    return o;
  }
  return ke = i, ke;
}
var rt, Ma;
function Lt() {
  if (Ma) return rt;
  Ma = 1;
  var r = Ri(), e = ms(), t = Ii();
  function n(a) {
    return t(a) ? r(a, !0) : e(a);
  }
  return rt = n, rt;
}
var et, Na;
function Ts() {
  if (Na) return et;
  Na = 1;
  var r = fr(), e = Lt();
  function t(n, a) {
    return n && r(a, e(a), n);
  }
  return et = t, et;
}
var J = { exports: {} };
J.exports;
var Ga;
function Ss() {
  return Ga || (Ga = 1, function(r, e) {
    var t = x(), n = e && !e.nodeType && e, a = n && !0 && r && !r.nodeType && r, i = a && a.exports === n, u = i ? t.Buffer : void 0, s = u ? u.allocUnsafe : void 0;
    function o(c, l) {
      if (l)
        return c.slice();
      var f = c.length, d = s ? s(f) : new c.constructor(f);
      return c.copy(d), d;
    }
    r.exports = o;
  }(J, J.exports)), J.exports;
}
var tt, Ua;
function Cs() {
  if (Ua) return tt;
  Ua = 1;
  function r(e, t) {
    var n = -1, a = e.length;
    for (t || (t = Array(a)); ++n < a; )
      t[n] = e[n];
    return t;
  }
  return tt = r, tt;
}
var nt, Ka;
function Os() {
  if (Ka) return nt;
  Ka = 1;
  var r = fr(), e = wt();
  function t(n, a) {
    return r(n, e(n), a);
  }
  return nt = t, nt;
}
var at, Ba;
function Fi() {
  if (Ba) return at;
  Ba = 1;
  var r = ji(), e = r(Object.getPrototypeOf, Object);
  return at = e, at;
}
var it, Ha;
function xi() {
  if (Ha) return it;
  Ha = 1;
  var r = mi(), e = Fi(), t = wt(), n = Si(), a = Object.getOwnPropertySymbols, i = a ? function(u) {
    for (var s = []; u; )
      r(s, t(u)), u = e(u);
    return s;
  } : n;
  return it = i, it;
}
var ut, $a;
function Rs() {
  if ($a) return ut;
  $a = 1;
  var r = fr(), e = xi();
  function t(n, a) {
    return r(n, e(n), a);
  }
  return ut = t, ut;
}
var st, Va;
function js() {
  if (Va) return st;
  Va = 1;
  var r = Ti(), e = xi(), t = Lt();
  function n(a) {
    return r(a, t, e);
  }
  return st = n, st;
}
var ot, Wa;
function Is() {
  if (Wa) return ot;
  Wa = 1;
  var r = Object.prototype, e = r.hasOwnProperty;
  function t(n) {
    var a = n.length, i = new n.constructor(a);
    return a && typeof n[0] == "string" && e.call(n, "index") && (i.index = n.index, i.input = n.input), i;
  }
  return ot = t, ot;
}
var ct, za;
function Mt() {
  if (za) return ct;
  za = 1;
  var r = Ai();
  function e(t) {
    var n = new t.constructor(t.byteLength);
    return new r(n).set(new r(t)), n;
  }
  return ct = e, ct;
}
var ft, Ja;
function ws() {
  if (Ja) return ft;
  Ja = 1;
  var r = Mt();
  function e(t, n) {
    var a = n ? r(t.buffer) : t.buffer;
    return new t.constructor(a, t.byteOffset, t.byteLength);
  }
  return ft = e, ft;
}
var lt, Qa;
function Es() {
  if (Qa) return lt;
  Qa = 1;
  var r = /\w*$/;
  function e(t) {
    var n = new t.constructor(t.source, r.exec(t));
    return n.lastIndex = t.lastIndex, n;
  }
  return lt = e, lt;
}
var dt, Ya;
function Ps() {
  if (Ya) return dt;
  Ya = 1;
  var r = ar(), e = r ? r.prototype : void 0, t = e ? e.valueOf : void 0;
  function n(a) {
    return t ? Object(t.call(a)) : {};
  }
  return dt = n, dt;
}
var ht, Xa;
function Fs() {
  if (Xa) return ht;
  Xa = 1;
  var r = Mt();
  function e(t, n) {
    var a = n ? r(t.buffer) : t.buffer;
    return new t.constructor(a, t.byteOffset, t.length);
  }
  return ht = e, ht;
}
var _t, Za;
function xs() {
  if (Za) return _t;
  Za = 1;
  var r = Mt(), e = ws(), t = Es(), n = Ps(), a = Fs(), i = "[object Boolean]", u = "[object Date]", s = "[object Map]", o = "[object Number]", c = "[object RegExp]", l = "[object Set]", f = "[object String]", d = "[object Symbol]", q = "[object ArrayBuffer]", R = "[object DataView]", m = "[object Float32Array]", b = "[object Float64Array]", p = "[object Int8Array]", h = "[object Int16Array]", C = "[object Int32Array]", y = "[object Uint8Array]", O = "[object Uint8ClampedArray]", g = "[object Uint16Array]", v = "[object Uint32Array]";
  function I(T, E, _) {
    var w = T.constructor;
    switch (E) {
      case q:
        return r(T);
      case i:
      case u:
        return new w(+T);
      case R:
        return e(T, _);
      case m:
      case b:
      case p:
      case h:
      case C:
      case y:
      case O:
      case g:
      case v:
        return a(T, _);
      case s:
        return new w();
      case o:
      case f:
        return new w(T);
      case c:
        return t(T);
      case l:
        return new w();
      case d:
        return n(T);
    }
  }
  return _t = I, _t;
}
var vt, ka;
function Ds() {
  if (ka) return vt;
  ka = 1;
  var r = Q(), e = Object.create, t = /* @__PURE__ */ function() {
    function n() {
    }
    return function(a) {
      if (!r(a))
        return {};
      if (e)
        return e(a);
      n.prototype = a;
      var i = new n();
      return n.prototype = void 0, i;
    };
  }();
  return vt = t, vt;
}
var yt, ri;
function Ls() {
  if (ri) return yt;
  ri = 1;
  var r = Ds(), e = Fi(), t = xt();
  function n(a) {
    return typeof a.constructor == "function" && !t(a) ? r(e(a)) : {};
  }
  return yt = n, yt;
}
var gt, ei;
function Ms() {
  if (ei) return gt;
  ei = 1;
  var r = cr(), e = V(), t = "[object Map]";
  function n(a) {
    return e(a) && r(a) == t;
  }
  return gt = n, gt;
}
var pt, ti;
function Ns() {
  if (ti) return pt;
  ti = 1;
  var r = Ms(), e = Pt(), t = Ft(), n = t && t.isMap, a = n ? e(n) : r;
  return pt = a, pt;
}
var bt, ni;
function Gs() {
  if (ni) return bt;
  ni = 1;
  var r = cr(), e = V(), t = "[object Set]";
  function n(a) {
    return e(a) && r(a) == t;
  }
  return bt = n, bt;
}
var qt, ai;
function Us() {
  if (ai) return qt;
  ai = 1;
  var r = Gs(), e = Pt(), t = Ft(), n = t && t.isSet, a = n ? e(n) : r;
  return qt = a, qt;
}
var At, ii;
function Ks() {
  if (ii) return At;
  ii = 1;
  var r = bi(), e = ps(), t = Pi(), n = qs(), a = Ts(), i = Ss(), u = Cs(), s = Os(), o = Rs(), c = wi(), l = js(), f = cr(), d = Is(), q = xs(), R = Ls(), m = or(), b = Et(), p = Ns(), h = Q(), C = Us(), y = Dt(), O = Lt(), g = 1, v = 2, I = 4, T = "[object Arguments]", E = "[object Array]", _ = "[object Boolean]", w = "[object Date]", F = "[object Error]", U = "[object Function]", K = "[object GeneratorFunction]", lr = "[object Map]", Vi = "[object Number]", Ut = "[object Object]", Wi = "[object RegExp]", zi = "[object Set]", Ji = "[object String]", Qi = "[object Symbol]", Yi = "[object WeakMap]", Xi = "[object ArrayBuffer]", Zi = "[object DataView]", ki = "[object Float32Array]", ru = "[object Float64Array]", eu = "[object Int8Array]", tu = "[object Int16Array]", nu = "[object Int32Array]", au = "[object Uint8Array]", iu = "[object Uint8ClampedArray]", uu = "[object Uint16Array]", su = "[object Uint32Array]", S = {};
  S[T] = S[E] = S[Xi] = S[Zi] = S[_] = S[w] = S[ki] = S[ru] = S[eu] = S[tu] = S[nu] = S[lr] = S[Vi] = S[Ut] = S[Wi] = S[zi] = S[Ji] = S[Qi] = S[au] = S[iu] = S[uu] = S[su] = !0, S[F] = S[U] = S[Yi] = !1;
  function Y(A, B, H, ou, X, L) {
    var P, Z = B & g, k = B & v, cu = B & I;
    if (H && (P = X ? H(A, ou, X, L) : H(A)), P !== void 0)
      return P;
    if (!h(A))
      return A;
    var Kt = m(A);
    if (Kt) {
      if (P = d(A), !Z)
        return u(A, P);
    } else {
      var $ = f(A), Bt = $ == U || $ == K;
      if (b(A))
        return i(A, Z);
      if ($ == Ut || $ == T || Bt && !X) {
        if (P = k || Bt ? {} : R(A), !Z)
          return k ? o(A, a(P, A)) : s(A, n(P, A));
      } else {
        if (!S[$])
          return X ? A : {};
        P = q(A, $, Z);
      }
    }
    L || (L = new r());
    var Ht = L.get(A);
    if (Ht)
      return Ht;
    L.set(A, P), C(A) ? A.forEach(function(M) {
      P.add(Y(M, B, H, M, A, L));
    }) : p(A) && A.forEach(function(M, N) {
      P.set(N, Y(M, B, H, N, A, L));
    });
    var fu = cu ? k ? l : c : k ? O : y, $t = Kt ? void 0 : fu(A);
    return e($t || A, function(M, N) {
      $t && (N = M, M = A[N]), t(P, N, Y(M, B, H, N, A, L));
    }), P;
  }
  return At = Y, At;
}
var mt, ui;
function Bs() {
  if (ui) return mt;
  ui = 1;
  var r = Ks(), e = 1, t = 4;
  function n(a) {
    return r(a, e | t);
  }
  return mt = n, mt;
}
var Hs = Bs();
const si = /* @__PURE__ */ _i(Hs);
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const oi = () => {
};
function $s(r, e) {
  function t(...n) {
    return new Promise((a, i) => {
      Promise.resolve(r(() => e.apply(this, n), { fn: e, thisArg: this, args: n })).then(a).catch(i);
    });
  }
  return t;
}
function Vs(r, e = {}) {
  let t, n, a = oi;
  const i = (o) => {
    clearTimeout(o), a(), a = oi;
  };
  let u;
  return (o) => {
    const c = Wt(r), l = Wt(e.maxWait);
    return t && i(t), c <= 0 || l !== void 0 && l <= 0 ? (n && (i(n), n = void 0), Promise.resolve(o())) : new Promise((f, d) => {
      a = e.rejectOnCancel ? d : f, u = o, l && !n && (n = setTimeout(() => {
        t && i(t), n = void 0, f(u());
      }, l)), t = setTimeout(() => {
        n && i(n), n = void 0, f(o());
      }, c);
    });
  };
}
function Ws(r, e = 200, t = {}) {
  return $s(
    Vs(e, t),
    r
  );
}
const co = {
  visit(r, e) {
    return new Promise((t, n) => {
      hi.visit(r, {
        ...e,
        onSuccess: (...a) => t(a),
        onError: n,
        onCancel: n
      });
    });
  },
  patch(r, e, t) {
    return this.visit(r, { ...t, data: e, method: "patch" });
  },
  post(r, e, t) {
    return this.visit(r, { ...t, data: e, method: "post" });
  },
  delete(r, e) {
    return this.visit(r, { ...e, method: "delete" });
  }
};
function zs(r) {
  return r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Tt(r, e, t) {
  return r.replace(new RegExp(zs(e), "g"), t);
}
function fo(r, e, t) {
  Object.keys(e).forEach((n) => {
    const a = `${t}${Tt(Tt(Tt(n, "./", ""), "/", ""), ".vue", "")}`;
    r.component(a, e[n].default);
  });
}
const Di = "%[a-f0-9]{2}", ci = new RegExp("(" + Di + ")|([^%]+?)", "gi"), fi = new RegExp("(" + Di + ")+", "gi");
function Ct(r, e) {
  try {
    return [decodeURIComponent(r.join(""))];
  } catch {
  }
  if (r.length === 1)
    return r;
  e = e || 1;
  const t = r.slice(0, e), n = r.slice(e);
  return Array.prototype.concat.call([], Ct(t), Ct(n));
}
function Js(r) {
  try {
    return decodeURIComponent(r);
  } catch {
    let e = r.match(ci) || [];
    for (let t = 1; t < e.length; t++)
      r = Ct(e, t).join(""), e = r.match(ci) || [];
    return r;
  }
}
function Qs(r) {
  const e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  };
  let t = fi.exec(r);
  for (; t; ) {
    try {
      e[t[0]] = decodeURIComponent(t[0]);
    } catch {
      const a = Js(t[0]);
      a !== t[0] && (e[t[0]] = a);
    }
    t = fi.exec(r);
  }
  e["%C2"] = "�";
  const n = Object.keys(e);
  for (const a of n)
    r = r.replace(new RegExp(a, "g"), e[a]);
  return r;
}
function Ys(r) {
  if (typeof r != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof r + "`");
  try {
    return decodeURIComponent(r);
  } catch {
    return Qs(r);
  }
}
function Xs(r, e) {
  const t = {};
  if (Array.isArray(e))
    for (const n of e) {
      const a = Object.getOwnPropertyDescriptor(r, n);
      a != null && a.enumerable && Object.defineProperty(t, n, a);
    }
  else
    for (const n of Reflect.ownKeys(r)) {
      const a = Object.getOwnPropertyDescriptor(r, n);
      if (a.enumerable) {
        const i = r[n];
        e(n, i, r) && Object.defineProperty(t, n, a);
      }
    }
  return t;
}
function Li(r, e) {
  if (!(typeof r == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (r === "" || e === "")
    return [];
  const t = r.indexOf(e);
  return t === -1 ? [] : [
    r.slice(0, t),
    r.slice(t + e.length)
  ];
}
const Zs = (r) => r == null, ks = (r) => encodeURIComponent(r).replaceAll(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), Ot = Symbol("encodeFragmentIdentifier");
function ro(r) {
  switch (r.arrayFormat) {
    case "index":
      return (e) => (t, n) => {
        const a = t.length;
        return n === void 0 || r.skipNull && n === null || r.skipEmptyString && n === "" ? t : n === null ? [
          ...t,
          [j(e, r), "[", a, "]"].join("")
        ] : [
          ...t,
          [j(e, r), "[", j(a, r), "]=", j(n, r)].join("")
        ];
      };
    case "bracket":
      return (e) => (t, n) => n === void 0 || r.skipNull && n === null || r.skipEmptyString && n === "" ? t : n === null ? [
        ...t,
        [j(e, r), "[]"].join("")
      ] : [
        ...t,
        [j(e, r), "[]=", j(n, r)].join("")
      ];
    case "colon-list-separator":
      return (e) => (t, n) => n === void 0 || r.skipNull && n === null || r.skipEmptyString && n === "" ? t : n === null ? [
        ...t,
        [j(e, r), ":list="].join("")
      ] : [
        ...t,
        [j(e, r), ":list=", j(n, r)].join("")
      ];
    case "comma":
    case "separator":
    case "bracket-separator": {
      const e = r.arrayFormat === "bracket-separator" ? "[]=" : "=";
      return (t) => (n, a) => a === void 0 || r.skipNull && a === null || r.skipEmptyString && a === "" ? n : (a = a === null ? "" : a, n.length === 0 ? [[j(t, r), e, j(a, r)].join("")] : [[n, j(a, r)].join(r.arrayFormatSeparator)]);
    }
    default:
      return (e) => (t, n) => n === void 0 || r.skipNull && n === null || r.skipEmptyString && n === "" ? t : n === null ? [
        ...t,
        j(e, r)
      ] : [
        ...t,
        [j(e, r), "=", j(n, r)].join("")
      ];
  }
}
function eo(r) {
  let e;
  switch (r.arrayFormat) {
    case "index":
      return (t, n, a) => {
        if (e = /\[(\d*)]$/.exec(t), t = t.replace(/\[\d*]$/, ""), !e) {
          a[t] = n;
          return;
        }
        a[t] === void 0 && (a[t] = {}), a[t][e[1]] = n;
      };
    case "bracket":
      return (t, n, a) => {
        if (e = /(\[])$/.exec(t), t = t.replace(/\[]$/, ""), !e) {
          a[t] = n;
          return;
        }
        if (a[t] === void 0) {
          a[t] = [n];
          return;
        }
        a[t] = [...a[t], n];
      };
    case "colon-list-separator":
      return (t, n, a) => {
        if (e = /(:list)$/.exec(t), t = t.replace(/:list$/, ""), !e) {
          a[t] = n;
          return;
        }
        if (a[t] === void 0) {
          a[t] = [n];
          return;
        }
        a[t] = [...a[t], n];
      };
    case "comma":
    case "separator":
      return (t, n, a) => {
        const i = typeof n == "string" && n.includes(r.arrayFormatSeparator), u = typeof n == "string" && !i && D(n, r).includes(r.arrayFormatSeparator);
        n = u ? D(n, r) : n;
        const s = i || u ? n.split(r.arrayFormatSeparator).map((o) => D(o, r)) : n === null ? n : D(n, r);
        a[t] = s;
      };
    case "bracket-separator":
      return (t, n, a) => {
        const i = /(\[])$/.test(t);
        if (t = t.replace(/\[]$/, ""), !i) {
          a[t] = n && D(n, r);
          return;
        }
        const u = n === null ? [] : D(n, r).split(r.arrayFormatSeparator);
        if (a[t] === void 0) {
          a[t] = u;
          return;
        }
        a[t] = [...a[t], ...u];
      };
    default:
      return (t, n, a) => {
        if (a[t] === void 0) {
          a[t] = n;
          return;
        }
        a[t] = [...[a[t]].flat(), n];
      };
  }
}
function Mi(r) {
  if (typeof r != "string" || r.length !== 1)
    throw new TypeError("arrayFormatSeparator must be single character string");
}
function j(r, e) {
  return e.encode ? e.strict ? ks(r) : encodeURIComponent(r) : r;
}
function D(r, e) {
  return e.decode ? Ys(r) : r;
}
function Ni(r) {
  return Array.isArray(r) ? r.sort() : typeof r == "object" ? Ni(Object.keys(r)).sort((e, t) => Number(e) - Number(t)).map((e) => r[e]) : r;
}
function Gi(r) {
  const e = r.indexOf("#");
  return e !== -1 && (r = r.slice(0, e)), r;
}
function to(r) {
  let e = "";
  const t = r.indexOf("#");
  return t !== -1 && (e = r.slice(t)), e;
}
function li(r, e, t) {
  return t === "string" && typeof r == "string" ? r : typeof t == "function" && typeof r == "string" ? t(r) : t === "boolean" && r === null ? !0 : t === "boolean" && r !== null && (r.toLowerCase() === "true" || r.toLowerCase() === "false") ? r.toLowerCase() === "true" : t === "boolean" && r !== null && (r.toLowerCase() === "1" || r.toLowerCase() === "0") ? r.toLowerCase() === "1" : t === "string[]" && e.arrayFormat !== "none" && typeof r == "string" ? [r] : t === "number[]" && e.arrayFormat !== "none" && !Number.isNaN(Number(r)) && typeof r == "string" && r.trim() !== "" ? [Number(r)] : t === "number" && !Number.isNaN(Number(r)) && typeof r == "string" && r.trim() !== "" ? Number(r) : e.parseBooleans && r !== null && (r.toLowerCase() === "true" || r.toLowerCase() === "false") ? r.toLowerCase() === "true" : e.parseNumbers && !Number.isNaN(Number(r)) && typeof r == "string" && r.trim() !== "" ? Number(r) : r;
}
function Nt(r) {
  r = Gi(r);
  const e = r.indexOf("?");
  return e === -1 ? "" : r.slice(e + 1);
}
function Gt(r, e) {
  e = {
    decode: !0,
    sort: !0,
    arrayFormat: "none",
    arrayFormatSeparator: ",",
    parseNumbers: !1,
    parseBooleans: !1,
    types: /* @__PURE__ */ Object.create(null),
    ...e
  }, Mi(e.arrayFormatSeparator);
  const t = eo(e), n = /* @__PURE__ */ Object.create(null);
  if (typeof r != "string" || (r = r.trim().replace(/^[?#&]/, ""), !r))
    return n;
  for (const a of r.split("&")) {
    if (a === "")
      continue;
    const i = e.decode ? a.replaceAll("+", " ") : a;
    let [u, s] = Li(i, "=");
    u === void 0 && (u = i), s = s === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(e.arrayFormat) ? s : D(s, e), t(D(u, e), s, n);
  }
  for (const [a, i] of Object.entries(n))
    if (typeof i == "object" && i !== null && e.types[a] !== "string")
      for (const [u, s] of Object.entries(i)) {
        const o = e.types[a] ? e.types[a].replace("[]", "") : void 0;
        i[u] = li(s, e, o);
      }
    else typeof i == "object" && i !== null && e.types[a] === "string" ? n[a] = Object.values(i).join(e.arrayFormatSeparator) : n[a] = li(i, e, e.types[a]);
  return e.sort === !1 ? n : (e.sort === !0 ? Object.keys(n).sort() : Object.keys(n).sort(e.sort)).reduce((a, i) => {
    const u = n[i];
    return a[i] = u && typeof u == "object" && !Array.isArray(u) ? Ni(u) : u, a;
  }, /* @__PURE__ */ Object.create(null));
}
function Ui(r, e) {
  if (!r)
    return "";
  e = {
    encode: !0,
    strict: !0,
    arrayFormat: "none",
    arrayFormatSeparator: ",",
    ...e
  }, Mi(e.arrayFormatSeparator);
  const t = (u) => e.skipNull && Zs(r[u]) || e.skipEmptyString && r[u] === "", n = ro(e), a = {};
  for (const [u, s] of Object.entries(r))
    t(u) || (a[u] = s);
  const i = Object.keys(a);
  return e.sort !== !1 && i.sort(e.sort), i.map((u) => {
    const s = r[u];
    return s === void 0 ? "" : s === null ? j(u, e) : Array.isArray(s) ? s.length === 0 && e.arrayFormat === "bracket-separator" ? j(u, e) + "[]" : s.reduce(n(u), []).join("&") : j(u, e) + "=" + j(s, e);
  }).filter((u) => u.length > 0).join("&");
}
function Ki(r, e) {
  var a;
  e = {
    decode: !0,
    ...e
  };
  let [t, n] = Li(r, "#");
  return t === void 0 && (t = r), {
    url: ((a = t == null ? void 0 : t.split("?")) == null ? void 0 : a[0]) ?? "",
    query: Gt(Nt(r), e),
    ...e && e.parseFragmentIdentifier && n ? { fragmentIdentifier: D(n, e) } : {}
  };
}
function Bi(r, e) {
  e = {
    encode: !0,
    strict: !0,
    [Ot]: !0,
    ...e
  };
  const t = Gi(r.url).split("?")[0] || "", n = Nt(r.url), a = {
    ...Gt(n, { sort: !1, ...e }),
    ...r.query
  };
  let i = Ui(a, e);
  i && (i = `?${i}`);
  let u = to(r.url);
  if (typeof r.fragmentIdentifier == "string") {
    const s = new URL(t);
    s.hash = r.fragmentIdentifier, u = e[Ot] ? s.hash : `#${r.fragmentIdentifier}`;
  }
  return `${t}${i}${u}`;
}
function Hi(r, e, t) {
  t = {
    parseFragmentIdentifier: !0,
    [Ot]: !1,
    ...t
  };
  const { url: n, query: a, fragmentIdentifier: i } = Ki(r, t);
  return Bi({
    url: n,
    query: Xs(a, e),
    fragmentIdentifier: i
  }, t);
}
function no(r, e, t) {
  const n = Array.isArray(e) ? (a) => !e.includes(a) : (a, i) => !e(a, i);
  return Hi(r, n, t);
}
const $i = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exclude: no,
  extract: Nt,
  parse: Gt,
  parseUrl: Ki,
  pick: Hi,
  stringify: Ui,
  stringifyUrl: Bi
}, Symbol.toStringTag, { value: "Module" }));
function Rt() {
  return $i.parse(location.search, {
    arrayFormat: "index",
    parseNumbers: !0
  });
}
function ao(r) {
  return $i.stringify(r, {
    arrayFormat: "index"
  });
}
function lo(r) {
  const e = Rt();
  return r in e ? e[r] : null;
}
function io(r) {
  const e = window.location.href.split("?")[0];
  return Object.keys(r).length > 0 ? `${e}?${ao(r)}` : e;
}
const di = (r) => Array.isArray(r) && r.length === 0, St = (r, e) => e === "" || e === void 0 || e === null || di(e) || e === !1 ? r === "" || r === void 0 || r === null || di(r) || r === !1 : gs(r, e);
function ho(r, e) {
  const t = si(typeof r == "object" ? r : r()), n = () => {
    const l = Rt();
    return Object.keys(t).reduce((f, d) => (St(l[d], t[d]) || l[d] === void 0 ? f[d] = t[d] : f[d] = l[d], f), {});
  }, a = (l) => Object.keys(t).some((f) => !St(l[f], t[f])), i = n(), u = hu({
    ...i,
    applied: a(i),
    data() {
      return Object.keys(t).reduce((l, f) => (l[f] = this[f], l), {});
    },
    reset() {
      Object.keys(t).forEach((l) => {
        this[l] = t[l];
      }), this.applied = !1;
    }
  }), s = (l) => {
    const f = Rt();
    return Object.keys(l).forEach((d) => {
      const q = l[d], R = t[d];
      St(q, R) || !q ? delete f[d] : f[d] = q;
    }), delete f.page, delete f.cursor, io(f);
  };
  let o = null;
  const c = Ws((l) => {
    o && (o.cancel(), o = null), hi.visit(l, {
      preserveState: !0,
      preserveScroll: !0,
      onCancelToken: (f) => {
        o = f;
      },
      onSuccess: () => {
        u.applied = a(u.data()), e != null && e.onSuccess && e.onSuccess();
      }
    });
  }, 50);
  return er(u, () => {
    const l = window.location.href, f = s(u.data());
    l != f && (u.applied = a(u.data()), c(f));
  }), u;
}
function _o(r) {
  const e = dr(() => _u(r)), t = yu(), n = dr(() => t.url);
  function a(s, o = !1) {
    return s.children && s.children.some((c) => i(c)) ? !0 : o && s.children ? s.children.some((c) => a(c, !0)) : !1;
  }
  function i(s, o = !1) {
    return !!(s.active && s.active.some((c) => c.type === "path" ? c.path === n.value : c.route.params ? route().current(c.route.name, c.route.params) : route().current(c.route.name)));
  }
  const u = (s) => ({
    isActive: i(s),
    isChildActive: a(s, !0),
    item: { ...s, children: void 0 },
    children: s.children ? s.children.map((o) => u(o)) : [],
    hasChildren: s.children ? s.children.length > 0 : !1
  });
  return dr(() => e.value.items.map((s) => u(s)));
}
function vo(r = !1) {
  const e = vu(r);
  return {
    active: e,
    activate: () => {
      e.value = !0;
    },
    deactivate: () => {
      e.value = !1;
    }
  };
}
function yo(r, e) {
  er(r.active, (t) => {
    t && e();
  });
}
function go(r, e) {
  er(r.active, (t) => {
    t || e();
  });
}
export {
  oo as Icon,
  co as asyncRouter,
  ao as formatQuery,
  lo as getValueFromQuery,
  yo as onActivated,
  go as onDeactivated,
  Rt as parseQuery,
  fo as registerNamespacedComponents,
  io as urlWithQuery,
  ho as useFilter,
  _o as useNavigation,
  vo as useToggle
};
//# sourceMappingURL=ui.js.map
