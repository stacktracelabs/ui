import { defineComponent as Su, shallowRef as Qt, watch as W, h as Cu, getCurrentScope as Ou, onScopeDispose as ju, toValue as V, ref as Rt, reactive as gi, computed as J, unref as bi } from "vue";
import { router as qi, usePage as Ai } from "@inertiajs/vue3";
const jo = Su({
  props: {
    src: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const r = (u) => {
      const s = u.attributes, c = {};
      for (let o = 0; o < s.length; o++) {
        const f = s[o];
        c[f.name] = f.value;
      }
      return c;
    }, t = new DOMParser(), n = t.parseFromString(e.src, "image/svg+xml").documentElement, a = Qt(r(n)), i = Qt(n.innerHTML);
    return W(() => e.src, () => {
      const u = t.parseFromString(e.src, "image/svg+xml").documentElement;
      a.value = r(u), i.value = u.innerHTML;
    }), () => Cu("svg", { ...a.value, innerHTML: i.value });
  }
});
var ae = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function mi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ye, Yt;
function Ru() {
  if (Yt) return ye;
  Yt = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return ye = e, ye;
}
var _e, Xt;
function Pt() {
  if (Xt) return _e;
  Xt = 1;
  function e(r, t) {
    return r === t || r !== r && t !== t;
  }
  return _e = e, _e;
}
var pe, Zt;
function ie() {
  if (Zt) return pe;
  Zt = 1;
  var e = Pt();
  function r(t, n) {
    for (var a = t.length; a--; )
      if (e(t[a][0], n))
        return a;
    return -1;
  }
  return pe = r, pe;
}
var ge, kt;
function Iu() {
  if (kt) return ge;
  kt = 1;
  var e = ie(), r = Array.prototype, t = r.splice;
  function n(a) {
    var i = this.__data__, u = e(i, a);
    if (u < 0)
      return !1;
    var s = i.length - 1;
    return u == s ? i.pop() : t.call(i, u, 1), --this.size, !0;
  }
  return ge = n, ge;
}
var be, en;
function wu() {
  if (en) return be;
  en = 1;
  var e = ie();
  function r(t) {
    var n = this.__data__, a = e(n, t);
    return a < 0 ? void 0 : n[a][1];
  }
  return be = r, be;
}
var qe, rn;
function Eu() {
  if (rn) return qe;
  rn = 1;
  var e = ie();
  function r(t) {
    return e(this.__data__, t) > -1;
  }
  return qe = r, qe;
}
var Ae, tn;
function Pu() {
  if (tn) return Ae;
  tn = 1;
  var e = ie();
  function r(t, n) {
    var a = this.__data__, i = e(a, t);
    return i < 0 ? (++this.size, a.push([t, n])) : a[i][1] = n, this;
  }
  return Ae = r, Ae;
}
var me, nn;
function ue() {
  if (nn) return me;
  nn = 1;
  var e = Ru(), r = Iu(), t = wu(), n = Eu(), a = Pu();
  function i(u) {
    var s = -1, c = u == null ? 0 : u.length;
    for (this.clear(); ++s < c; ) {
      var o = u[s];
      this.set(o[0], o[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, me = i, me;
}
var Te, an;
function Fu() {
  if (an) return Te;
  an = 1;
  var e = ue();
  function r() {
    this.__data__ = new e(), this.size = 0;
  }
  return Te = r, Te;
}
var Se, un;
function xu() {
  if (un) return Se;
  un = 1;
  function e(r) {
    var t = this.__data__, n = t.delete(r);
    return this.size = t.size, n;
  }
  return Se = e, Se;
}
var Ce, sn;
function Lu() {
  if (sn) return Ce;
  sn = 1;
  function e(r) {
    return this.__data__.get(r);
  }
  return Ce = e, Ce;
}
var Oe, on;
function Du() {
  if (on) return Oe;
  on = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return Oe = e, Oe;
}
var je, cn;
function Ti() {
  if (cn) return je;
  cn = 1;
  var e = typeof ae == "object" && ae && ae.Object === Object && ae;
  return je = e, je;
}
var Re, fn;
function x() {
  if (fn) return Re;
  fn = 1;
  var e = Ti(), r = typeof self == "object" && self && self.Object === Object && self, t = e || r || Function("return this")();
  return Re = t, Re;
}
var Ie, ln;
function se() {
  if (ln) return Ie;
  ln = 1;
  var e = x(), r = e.Symbol;
  return Ie = r, Ie;
}
var we, dn;
function Mu() {
  if (dn) return we;
  dn = 1;
  var e = se(), r = Object.prototype, t = r.hasOwnProperty, n = r.toString, a = e ? e.toStringTag : void 0;
  function i(u) {
    var s = t.call(u, a), c = u[a];
    try {
      u[a] = void 0;
      var o = !0;
    } catch {
    }
    var f = n.call(u);
    return o && (s ? u[a] = c : delete u[a]), f;
  }
  return we = i, we;
}
var Ee, hn;
function Nu() {
  if (hn) return Ee;
  hn = 1;
  var e = Object.prototype, r = e.toString;
  function t(n) {
    return r.call(n);
  }
  return Ee = t, Ee;
}
var Pe, vn;
function oe() {
  if (vn) return Pe;
  vn = 1;
  var e = se(), r = Mu(), t = Nu(), n = "[object Null]", a = "[object Undefined]", i = e ? e.toStringTag : void 0;
  function u(s) {
    return s == null ? s === void 0 ? a : n : i && i in Object(s) ? r(s) : t(s);
  }
  return Pe = u, Pe;
}
var Fe, yn;
function k() {
  if (yn) return Fe;
  yn = 1;
  function e(r) {
    var t = typeof r;
    return r != null && (t == "object" || t == "function");
  }
  return Fe = e, Fe;
}
var xe, _n;
function Si() {
  if (_n) return xe;
  _n = 1;
  var e = oe(), r = k(), t = "[object AsyncFunction]", n = "[object Function]", a = "[object GeneratorFunction]", i = "[object Proxy]";
  function u(s) {
    if (!r(s))
      return !1;
    var c = e(s);
    return c == n || c == a || c == t || c == i;
  }
  return xe = u, xe;
}
var Le, pn;
function Gu() {
  if (pn) return Le;
  pn = 1;
  var e = x(), r = e["__core-js_shared__"];
  return Le = r, Le;
}
var De, gn;
function Uu() {
  if (gn) return De;
  gn = 1;
  var e = Gu(), r = function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function t(n) {
    return !!r && r in n;
  }
  return De = t, De;
}
var Me, bn;
function Ci() {
  if (bn) return Me;
  bn = 1;
  var e = Function.prototype, r = e.toString;
  function t(n) {
    if (n != null) {
      try {
        return r.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  return Me = t, Me;
}
var Ne, qn;
function Ku() {
  if (qn) return Ne;
  qn = 1;
  var e = Si(), r = Uu(), t = k(), n = Ci(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, u = Function.prototype, s = Object.prototype, c = u.toString, o = s.hasOwnProperty, f = RegExp(
    "^" + c.call(o).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function l(d) {
    if (!t(d) || r(d))
      return !1;
    var g = e(d) ? f : i;
    return g.test(n(d));
  }
  return Ne = l, Ne;
}
var Ge, An;
function Bu() {
  if (An) return Ge;
  An = 1;
  function e(r, t) {
    return r == null ? void 0 : r[t];
  }
  return Ge = e, Ge;
}
var Ue, mn;
function G() {
  if (mn) return Ue;
  mn = 1;
  var e = Ku(), r = Bu();
  function t(n, a) {
    var i = r(n, a);
    return e(i) ? i : void 0;
  }
  return Ue = t, Ue;
}
var Ke, Tn;
function Ft() {
  if (Tn) return Ke;
  Tn = 1;
  var e = G(), r = x(), t = e(r, "Map");
  return Ke = t, Ke;
}
var Be, Sn;
function ce() {
  if (Sn) return Be;
  Sn = 1;
  var e = G(), r = e(Object, "create");
  return Be = r, Be;
}
var He, Cn;
function Hu() {
  if (Cn) return He;
  Cn = 1;
  var e = ce();
  function r() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return He = r, He;
}
var $e, On;
function $u() {
  if (On) return $e;
  On = 1;
  function e(r) {
    var t = this.has(r) && delete this.__data__[r];
    return this.size -= t ? 1 : 0, t;
  }
  return $e = e, $e;
}
var Ve, jn;
function Vu() {
  if (jn) return Ve;
  jn = 1;
  var e = ce(), r = "__lodash_hash_undefined__", t = Object.prototype, n = t.hasOwnProperty;
  function a(i) {
    var u = this.__data__;
    if (e) {
      var s = u[i];
      return s === r ? void 0 : s;
    }
    return n.call(u, i) ? u[i] : void 0;
  }
  return Ve = a, Ve;
}
var We, Rn;
function Wu() {
  if (Rn) return We;
  Rn = 1;
  var e = ce(), r = Object.prototype, t = r.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return e ? i[a] !== void 0 : t.call(i, a);
  }
  return We = n, We;
}
var ze, In;
function zu() {
  if (In) return ze;
  In = 1;
  var e = ce(), r = "__lodash_hash_undefined__";
  function t(n, a) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = e && a === void 0 ? r : a, this;
  }
  return ze = t, ze;
}
var Je, wn;
function Ju() {
  if (wn) return Je;
  wn = 1;
  var e = Hu(), r = $u(), t = Vu(), n = Wu(), a = zu();
  function i(u) {
    var s = -1, c = u == null ? 0 : u.length;
    for (this.clear(); ++s < c; ) {
      var o = u[s];
      this.set(o[0], o[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, Je = i, Je;
}
var Qe, En;
function Qu() {
  if (En) return Qe;
  En = 1;
  var e = Ju(), r = ue(), t = Ft();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (t || r)(),
      string: new e()
    };
  }
  return Qe = n, Qe;
}
var Ye, Pn;
function Yu() {
  if (Pn) return Ye;
  Pn = 1;
  function e(r) {
    var t = typeof r;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? r !== "__proto__" : r === null;
  }
  return Ye = e, Ye;
}
var Xe, Fn;
function fe() {
  if (Fn) return Xe;
  Fn = 1;
  var e = Yu();
  function r(t, n) {
    var a = t.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return Xe = r, Xe;
}
var Ze, xn;
function Xu() {
  if (xn) return Ze;
  xn = 1;
  var e = fe();
  function r(t) {
    var n = e(this, t).delete(t);
    return this.size -= n ? 1 : 0, n;
  }
  return Ze = r, Ze;
}
var ke, Ln;
function Zu() {
  if (Ln) return ke;
  Ln = 1;
  var e = fe();
  function r(t) {
    return e(this, t).get(t);
  }
  return ke = r, ke;
}
var er, Dn;
function ku() {
  if (Dn) return er;
  Dn = 1;
  var e = fe();
  function r(t) {
    return e(this, t).has(t);
  }
  return er = r, er;
}
var rr, Mn;
function es() {
  if (Mn) return rr;
  Mn = 1;
  var e = fe();
  function r(t, n) {
    var a = e(this, t), i = a.size;
    return a.set(t, n), this.size += a.size == i ? 0 : 1, this;
  }
  return rr = r, rr;
}
var tr, Nn;
function Oi() {
  if (Nn) return tr;
  Nn = 1;
  var e = Qu(), r = Xu(), t = Zu(), n = ku(), a = es();
  function i(u) {
    var s = -1, c = u == null ? 0 : u.length;
    for (this.clear(); ++s < c; ) {
      var o = u[s];
      this.set(o[0], o[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, tr = i, tr;
}
var nr, Gn;
function rs() {
  if (Gn) return nr;
  Gn = 1;
  var e = ue(), r = Ft(), t = Oi(), n = 200;
  function a(i, u) {
    var s = this.__data__;
    if (s instanceof e) {
      var c = s.__data__;
      if (!r || c.length < n - 1)
        return c.push([i, u]), this.size = ++s.size, this;
      s = this.__data__ = new t(c);
    }
    return s.set(i, u), this.size = s.size, this;
  }
  return nr = a, nr;
}
var ar, Un;
function ji() {
  if (Un) return ar;
  Un = 1;
  var e = ue(), r = Fu(), t = xu(), n = Lu(), a = Du(), i = rs();
  function u(s) {
    var c = this.__data__ = new e(s);
    this.size = c.size;
  }
  return u.prototype.clear = r, u.prototype.delete = t, u.prototype.get = n, u.prototype.has = a, u.prototype.set = i, ar = u, ar;
}
var ir, Kn;
function ts() {
  if (Kn) return ir;
  Kn = 1;
  var e = "__lodash_hash_undefined__";
  function r(t) {
    return this.__data__.set(t, e), this;
  }
  return ir = r, ir;
}
var ur, Bn;
function ns() {
  if (Bn) return ur;
  Bn = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return ur = e, ur;
}
var sr, Hn;
function as() {
  if (Hn) return sr;
  Hn = 1;
  var e = Oi(), r = ts(), t = ns();
  function n(a) {
    var i = -1, u = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++i < u; )
      this.add(a[i]);
  }
  return n.prototype.add = n.prototype.push = r, n.prototype.has = t, sr = n, sr;
}
var or, $n;
function is() {
  if ($n) return or;
  $n = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length; ++n < a; )
      if (t(r[n], n, r))
        return !0;
    return !1;
  }
  return or = e, or;
}
var cr, Vn;
function us() {
  if (Vn) return cr;
  Vn = 1;
  function e(r, t) {
    return r.has(t);
  }
  return cr = e, cr;
}
var fr, Wn;
function Ri() {
  if (Wn) return fr;
  Wn = 1;
  var e = as(), r = is(), t = us(), n = 1, a = 2;
  function i(u, s, c, o, f, l) {
    var d = c & n, g = u.length, C = s.length;
    if (g != C && !(d && C > g))
      return !1;
    var m = l.get(u), q = l.get(s);
    if (m && q)
      return m == s && q == u;
    var b = -1, h = !0, O = c & a ? new e() : void 0;
    for (l.set(u, s), l.set(s, u); ++b < g; ) {
      var _ = u[b], j = s[b];
      if (o)
        var p = d ? o(j, _, b, s, u, l) : o(_, j, b, u, s, l);
      if (p !== void 0) {
        if (p)
          continue;
        h = !1;
        break;
      }
      if (O) {
        if (!r(s, function(y, I) {
          if (!t(O, I) && (_ === y || f(_, y, c, o, l)))
            return O.push(I);
        })) {
          h = !1;
          break;
        }
      } else if (!(_ === j || f(_, j, c, o, l))) {
        h = !1;
        break;
      }
    }
    return l.delete(u), l.delete(s), h;
  }
  return fr = i, fr;
}
var lr, zn;
function Ii() {
  if (zn) return lr;
  zn = 1;
  var e = x(), r = e.Uint8Array;
  return lr = r, lr;
}
var dr, Jn;
function ss() {
  if (Jn) return dr;
  Jn = 1;
  function e(r) {
    var t = -1, n = Array(r.size);
    return r.forEach(function(a, i) {
      n[++t] = [i, a];
    }), n;
  }
  return dr = e, dr;
}
var hr, Qn;
function os() {
  if (Qn) return hr;
  Qn = 1;
  function e(r) {
    var t = -1, n = Array(r.size);
    return r.forEach(function(a) {
      n[++t] = a;
    }), n;
  }
  return hr = e, hr;
}
var vr, Yn;
function cs() {
  if (Yn) return vr;
  Yn = 1;
  var e = se(), r = Ii(), t = Pt(), n = Ri(), a = ss(), i = os(), u = 1, s = 2, c = "[object Boolean]", o = "[object Date]", f = "[object Error]", l = "[object Map]", d = "[object Number]", g = "[object RegExp]", C = "[object Set]", m = "[object String]", q = "[object Symbol]", b = "[object ArrayBuffer]", h = "[object DataView]", O = e ? e.prototype : void 0, _ = O ? O.valueOf : void 0;
  function j(p, y, I, T, E, v, w) {
    switch (I) {
      case h:
        if (p.byteLength != y.byteLength || p.byteOffset != y.byteOffset)
          return !1;
        p = p.buffer, y = y.buffer;
      case b:
        return !(p.byteLength != y.byteLength || !v(new r(p), new r(y)));
      case c:
      case o:
      case d:
        return t(+p, +y);
      case f:
        return p.name == y.name && p.message == y.message;
      case g:
      case m:
        return p == y + "";
      case l:
        var F = a;
      case C:
        var U = T & u;
        if (F || (F = i), p.size != y.size && !U)
          return !1;
        var K = w.get(p);
        if (K)
          return K == y;
        T |= s, w.set(p, y);
        var ve = n(F(p), F(y), T, E, v, w);
        return w.delete(p), ve;
      case q:
        if (_)
          return _.call(p) == _.call(y);
    }
    return !1;
  }
  return vr = j, vr;
}
var yr, Xn;
function wi() {
  if (Xn) return yr;
  Xn = 1;
  function e(r, t) {
    for (var n = -1, a = t.length, i = r.length; ++n < a; )
      r[i + n] = t[n];
    return r;
  }
  return yr = e, yr;
}
var _r, Zn;
function le() {
  if (Zn) return _r;
  Zn = 1;
  var e = Array.isArray;
  return _r = e, _r;
}
var pr, kn;
function Ei() {
  if (kn) return pr;
  kn = 1;
  var e = wi(), r = le();
  function t(n, a, i) {
    var u = a(n);
    return r(n) ? u : e(u, i(n));
  }
  return pr = t, pr;
}
var gr, ea;
function fs() {
  if (ea) return gr;
  ea = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length, i = 0, u = []; ++n < a; ) {
      var s = r[n];
      t(s, n, r) && (u[i++] = s);
    }
    return u;
  }
  return gr = e, gr;
}
var br, ra;
function Pi() {
  if (ra) return br;
  ra = 1;
  function e() {
    return [];
  }
  return br = e, br;
}
var qr, ta;
function xt() {
  if (ta) return qr;
  ta = 1;
  var e = fs(), r = Pi(), t = Object.prototype, n = t.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(u) {
    return u == null ? [] : (u = Object(u), e(a(u), function(s) {
      return n.call(u, s);
    }));
  } : r;
  return qr = i, qr;
}
var Ar, na;
function ls() {
  if (na) return Ar;
  na = 1;
  function e(r, t) {
    for (var n = -1, a = Array(r); ++n < r; )
      a[n] = t(n);
    return a;
  }
  return Ar = e, Ar;
}
var mr, aa;
function z() {
  if (aa) return mr;
  aa = 1;
  function e(r) {
    return r != null && typeof r == "object";
  }
  return mr = e, mr;
}
var Tr, ia;
function ds() {
  if (ia) return Tr;
  ia = 1;
  var e = oe(), r = z(), t = "[object Arguments]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return Tr = n, Tr;
}
var Sr, ua;
function hs() {
  if (ua) return Sr;
  ua = 1;
  var e = ds(), r = z(), t = Object.prototype, n = t.hasOwnProperty, a = t.propertyIsEnumerable, i = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(u) {
    return r(u) && n.call(u, "callee") && !a.call(u, "callee");
  };
  return Sr = i, Sr;
}
var Q = { exports: {} }, Cr, sa;
function vs() {
  if (sa) return Cr;
  sa = 1;
  function e() {
    return !1;
  }
  return Cr = e, Cr;
}
Q.exports;
var oa;
function Lt() {
  return oa || (oa = 1, function(e, r) {
    var t = x(), n = vs(), a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, u = i && i.exports === a, s = u ? t.Buffer : void 0, c = s ? s.isBuffer : void 0, o = c || n;
    e.exports = o;
  }(Q, Q.exports)), Q.exports;
}
var Or, ca;
function ys() {
  if (ca) return Or;
  ca = 1;
  var e = 9007199254740991, r = /^(?:0|[1-9]\d*)$/;
  function t(n, a) {
    var i = typeof n;
    return a = a ?? e, !!a && (i == "number" || i != "symbol" && r.test(n)) && n > -1 && n % 1 == 0 && n < a;
  }
  return Or = t, Or;
}
var jr, fa;
function Fi() {
  if (fa) return jr;
  fa = 1;
  var e = 9007199254740991;
  function r(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= e;
  }
  return jr = r, jr;
}
var Rr, la;
function _s() {
  if (la) return Rr;
  la = 1;
  var e = oe(), r = Fi(), t = z(), n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", u = "[object Date]", s = "[object Error]", c = "[object Function]", o = "[object Map]", f = "[object Number]", l = "[object Object]", d = "[object RegExp]", g = "[object Set]", C = "[object String]", m = "[object WeakMap]", q = "[object ArrayBuffer]", b = "[object DataView]", h = "[object Float32Array]", O = "[object Float64Array]", _ = "[object Int8Array]", j = "[object Int16Array]", p = "[object Int32Array]", y = "[object Uint8Array]", I = "[object Uint8ClampedArray]", T = "[object Uint16Array]", E = "[object Uint32Array]", v = {};
  v[h] = v[O] = v[_] = v[j] = v[p] = v[y] = v[I] = v[T] = v[E] = !0, v[n] = v[a] = v[q] = v[i] = v[b] = v[u] = v[s] = v[c] = v[o] = v[f] = v[l] = v[d] = v[g] = v[C] = v[m] = !1;
  function w(F) {
    return t(F) && r(F.length) && !!v[e(F)];
  }
  return Rr = w, Rr;
}
var Ir, da;
function Dt() {
  if (da) return Ir;
  da = 1;
  function e(r) {
    return function(t) {
      return r(t);
    };
  }
  return Ir = e, Ir;
}
var Y = { exports: {} };
Y.exports;
var ha;
function Mt() {
  return ha || (ha = 1, function(e, r) {
    var t = Ti(), n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, u = i && t.process, s = function() {
      try {
        var c = a && a.require && a.require("util").types;
        return c || u && u.binding && u.binding("util");
      } catch {
      }
    }();
    e.exports = s;
  }(Y, Y.exports)), Y.exports;
}
var wr, va;
function xi() {
  if (va) return wr;
  va = 1;
  var e = _s(), r = Dt(), t = Mt(), n = t && t.isTypedArray, a = n ? r(n) : e;
  return wr = a, wr;
}
var Er, ya;
function Li() {
  if (ya) return Er;
  ya = 1;
  var e = ls(), r = hs(), t = le(), n = Lt(), a = ys(), i = xi(), u = Object.prototype, s = u.hasOwnProperty;
  function c(o, f) {
    var l = t(o), d = !l && r(o), g = !l && !d && n(o), C = !l && !d && !g && i(o), m = l || d || g || C, q = m ? e(o.length, String) : [], b = q.length;
    for (var h in o)
      (f || s.call(o, h)) && !(m && // Safari 9 has enumerable `arguments.length` in strict mode.
      (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      g && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      C && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
      a(h, b))) && q.push(h);
    return q;
  }
  return Er = c, Er;
}
var Pr, _a;
function Nt() {
  if (_a) return Pr;
  _a = 1;
  var e = Object.prototype;
  function r(t) {
    var n = t && t.constructor, a = typeof n == "function" && n.prototype || e;
    return t === a;
  }
  return Pr = r, Pr;
}
var Fr, pa;
function Di() {
  if (pa) return Fr;
  pa = 1;
  function e(r, t) {
    return function(n) {
      return r(t(n));
    };
  }
  return Fr = e, Fr;
}
var xr, ga;
function ps() {
  if (ga) return xr;
  ga = 1;
  var e = Di(), r = e(Object.keys, Object);
  return xr = r, xr;
}
var Lr, ba;
function gs() {
  if (ba) return Lr;
  ba = 1;
  var e = Nt(), r = ps(), t = Object.prototype, n = t.hasOwnProperty;
  function a(i) {
    if (!e(i))
      return r(i);
    var u = [];
    for (var s in Object(i))
      n.call(i, s) && s != "constructor" && u.push(s);
    return u;
  }
  return Lr = a, Lr;
}
var Dr, qa;
function Mi() {
  if (qa) return Dr;
  qa = 1;
  var e = Si(), r = Fi();
  function t(n) {
    return n != null && r(n.length) && !e(n);
  }
  return Dr = t, Dr;
}
var Mr, Aa;
function Gt() {
  if (Aa) return Mr;
  Aa = 1;
  var e = Li(), r = gs(), t = Mi();
  function n(a) {
    return t(a) ? e(a) : r(a);
  }
  return Mr = n, Mr;
}
var Nr, ma;
function Ni() {
  if (ma) return Nr;
  ma = 1;
  var e = Ei(), r = xt(), t = Gt();
  function n(a) {
    return e(a, t, r);
  }
  return Nr = n, Nr;
}
var Gr, Ta;
function bs() {
  if (Ta) return Gr;
  Ta = 1;
  var e = Ni(), r = 1, t = Object.prototype, n = t.hasOwnProperty;
  function a(i, u, s, c, o, f) {
    var l = s & r, d = e(i), g = d.length, C = e(u), m = C.length;
    if (g != m && !l)
      return !1;
    for (var q = g; q--; ) {
      var b = d[q];
      if (!(l ? b in u : n.call(u, b)))
        return !1;
    }
    var h = f.get(i), O = f.get(u);
    if (h && O)
      return h == u && O == i;
    var _ = !0;
    f.set(i, u), f.set(u, i);
    for (var j = l; ++q < g; ) {
      b = d[q];
      var p = i[b], y = u[b];
      if (c)
        var I = l ? c(y, p, b, u, i, f) : c(p, y, b, i, u, f);
      if (!(I === void 0 ? p === y || o(p, y, s, c, f) : I)) {
        _ = !1;
        break;
      }
      j || (j = b == "constructor");
    }
    if (_ && !j) {
      var T = i.constructor, E = u.constructor;
      T != E && "constructor" in i && "constructor" in u && !(typeof T == "function" && T instanceof T && typeof E == "function" && E instanceof E) && (_ = !1);
    }
    return f.delete(i), f.delete(u), _;
  }
  return Gr = a, Gr;
}
var Ur, Sa;
function qs() {
  if (Sa) return Ur;
  Sa = 1;
  var e = G(), r = x(), t = e(r, "DataView");
  return Ur = t, Ur;
}
var Kr, Ca;
function As() {
  if (Ca) return Kr;
  Ca = 1;
  var e = G(), r = x(), t = e(r, "Promise");
  return Kr = t, Kr;
}
var Br, Oa;
function ms() {
  if (Oa) return Br;
  Oa = 1;
  var e = G(), r = x(), t = e(r, "Set");
  return Br = t, Br;
}
var Hr, ja;
function Ts() {
  if (ja) return Hr;
  ja = 1;
  var e = G(), r = x(), t = e(r, "WeakMap");
  return Hr = t, Hr;
}
var $r, Ra;
function de() {
  if (Ra) return $r;
  Ra = 1;
  var e = qs(), r = Ft(), t = As(), n = ms(), a = Ts(), i = oe(), u = Ci(), s = "[object Map]", c = "[object Object]", o = "[object Promise]", f = "[object Set]", l = "[object WeakMap]", d = "[object DataView]", g = u(e), C = u(r), m = u(t), q = u(n), b = u(a), h = i;
  return (e && h(new e(new ArrayBuffer(1))) != d || r && h(new r()) != s || t && h(t.resolve()) != o || n && h(new n()) != f || a && h(new a()) != l) && (h = function(O) {
    var _ = i(O), j = _ == c ? O.constructor : void 0, p = j ? u(j) : "";
    if (p)
      switch (p) {
        case g:
          return d;
        case C:
          return s;
        case m:
          return o;
        case q:
          return f;
        case b:
          return l;
      }
    return _;
  }), $r = h, $r;
}
var Vr, Ia;
function Ss() {
  if (Ia) return Vr;
  Ia = 1;
  var e = ji(), r = Ri(), t = cs(), n = bs(), a = de(), i = le(), u = Lt(), s = xi(), c = 1, o = "[object Arguments]", f = "[object Array]", l = "[object Object]", d = Object.prototype, g = d.hasOwnProperty;
  function C(m, q, b, h, O, _) {
    var j = i(m), p = i(q), y = j ? f : a(m), I = p ? f : a(q);
    y = y == o ? l : y, I = I == o ? l : I;
    var T = y == l, E = I == l, v = y == I;
    if (v && u(m)) {
      if (!u(q))
        return !1;
      j = !0, T = !1;
    }
    if (v && !T)
      return _ || (_ = new e()), j || s(m) ? r(m, q, b, h, O, _) : t(m, q, y, b, h, O, _);
    if (!(b & c)) {
      var w = T && g.call(m, "__wrapped__"), F = E && g.call(q, "__wrapped__");
      if (w || F) {
        var U = w ? m.value() : m, K = F ? q.value() : q;
        return _ || (_ = new e()), O(U, K, b, h, _);
      }
    }
    return v ? (_ || (_ = new e()), n(m, q, b, h, O, _)) : !1;
  }
  return Vr = C, Vr;
}
var Wr, wa;
function Cs() {
  if (wa) return Wr;
  wa = 1;
  var e = Ss(), r = z();
  function t(n, a, i, u, s) {
    return n === a ? !0 : n == null || a == null || !r(n) && !r(a) ? n !== n && a !== a : e(n, a, i, u, t, s);
  }
  return Wr = t, Wr;
}
var zr, Ea;
function Os() {
  if (Ea) return zr;
  Ea = 1;
  var e = Cs();
  function r(t, n) {
    return e(t, n);
  }
  return zr = r, zr;
}
var js = Os();
const Rs = /* @__PURE__ */ mi(js);
var Jr, Pa;
function Is() {
  if (Pa) return Jr;
  Pa = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length; ++n < a && t(r[n], n, r) !== !1; )
      ;
    return r;
  }
  return Jr = e, Jr;
}
var Qr, Fa;
function ws() {
  if (Fa) return Qr;
  Fa = 1;
  var e = G(), r = function() {
    try {
      var t = e(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {
    }
  }();
  return Qr = r, Qr;
}
var Yr, xa;
function Gi() {
  if (xa) return Yr;
  xa = 1;
  var e = ws();
  function r(t, n, a) {
    n == "__proto__" && e ? e(t, n, {
      configurable: !0,
      enumerable: !0,
      value: a,
      writable: !0
    }) : t[n] = a;
  }
  return Yr = r, Yr;
}
var Xr, La;
function Ui() {
  if (La) return Xr;
  La = 1;
  var e = Gi(), r = Pt(), t = Object.prototype, n = t.hasOwnProperty;
  function a(i, u, s) {
    var c = i[u];
    (!(n.call(i, u) && r(c, s)) || s === void 0 && !(u in i)) && e(i, u, s);
  }
  return Xr = a, Xr;
}
var Zr, Da;
function he() {
  if (Da) return Zr;
  Da = 1;
  var e = Ui(), r = Gi();
  function t(n, a, i, u) {
    var s = !i;
    i || (i = {});
    for (var c = -1, o = a.length; ++c < o; ) {
      var f = a[c], l = u ? u(i[f], n[f], f, i, n) : void 0;
      l === void 0 && (l = n[f]), s ? r(i, f, l) : e(i, f, l);
    }
    return i;
  }
  return Zr = t, Zr;
}
var kr, Ma;
function Es() {
  if (Ma) return kr;
  Ma = 1;
  var e = he(), r = Gt();
  function t(n, a) {
    return n && e(a, r(a), n);
  }
  return kr = t, kr;
}
var et, Na;
function Ps() {
  if (Na) return et;
  Na = 1;
  function e(r) {
    var t = [];
    if (r != null)
      for (var n in Object(r))
        t.push(n);
    return t;
  }
  return et = e, et;
}
var rt, Ga;
function Fs() {
  if (Ga) return rt;
  Ga = 1;
  var e = k(), r = Nt(), t = Ps(), n = Object.prototype, a = n.hasOwnProperty;
  function i(u) {
    if (!e(u))
      return t(u);
    var s = r(u), c = [];
    for (var o in u)
      o == "constructor" && (s || !a.call(u, o)) || c.push(o);
    return c;
  }
  return rt = i, rt;
}
var tt, Ua;
function Ut() {
  if (Ua) return tt;
  Ua = 1;
  var e = Li(), r = Fs(), t = Mi();
  function n(a) {
    return t(a) ? e(a, !0) : r(a);
  }
  return tt = n, tt;
}
var nt, Ka;
function xs() {
  if (Ka) return nt;
  Ka = 1;
  var e = he(), r = Ut();
  function t(n, a) {
    return n && e(a, r(a), n);
  }
  return nt = t, nt;
}
var X = { exports: {} };
X.exports;
var Ba;
function Ls() {
  return Ba || (Ba = 1, function(e, r) {
    var t = x(), n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, u = i ? t.Buffer : void 0, s = u ? u.allocUnsafe : void 0;
    function c(o, f) {
      if (f)
        return o.slice();
      var l = o.length, d = s ? s(l) : new o.constructor(l);
      return o.copy(d), d;
    }
    e.exports = c;
  }(X, X.exports)), X.exports;
}
var at, Ha;
function Ds() {
  if (Ha) return at;
  Ha = 1;
  function e(r, t) {
    var n = -1, a = r.length;
    for (t || (t = Array(a)); ++n < a; )
      t[n] = r[n];
    return t;
  }
  return at = e, at;
}
var it, $a;
function Ms() {
  if ($a) return it;
  $a = 1;
  var e = he(), r = xt();
  function t(n, a) {
    return e(n, r(n), a);
  }
  return it = t, it;
}
var ut, Va;
function Ki() {
  if (Va) return ut;
  Va = 1;
  var e = Di(), r = e(Object.getPrototypeOf, Object);
  return ut = r, ut;
}
var st, Wa;
function Bi() {
  if (Wa) return st;
  Wa = 1;
  var e = wi(), r = Ki(), t = xt(), n = Pi(), a = Object.getOwnPropertySymbols, i = a ? function(u) {
    for (var s = []; u; )
      e(s, t(u)), u = r(u);
    return s;
  } : n;
  return st = i, st;
}
var ot, za;
function Ns() {
  if (za) return ot;
  za = 1;
  var e = he(), r = Bi();
  function t(n, a) {
    return e(n, r(n), a);
  }
  return ot = t, ot;
}
var ct, Ja;
function Gs() {
  if (Ja) return ct;
  Ja = 1;
  var e = Ei(), r = Bi(), t = Ut();
  function n(a) {
    return e(a, t, r);
  }
  return ct = n, ct;
}
var ft, Qa;
function Us() {
  if (Qa) return ft;
  Qa = 1;
  var e = Object.prototype, r = e.hasOwnProperty;
  function t(n) {
    var a = n.length, i = new n.constructor(a);
    return a && typeof n[0] == "string" && r.call(n, "index") && (i.index = n.index, i.input = n.input), i;
  }
  return ft = t, ft;
}
var lt, Ya;
function Kt() {
  if (Ya) return lt;
  Ya = 1;
  var e = Ii();
  function r(t) {
    var n = new t.constructor(t.byteLength);
    return new e(n).set(new e(t)), n;
  }
  return lt = r, lt;
}
var dt, Xa;
function Ks() {
  if (Xa) return dt;
  Xa = 1;
  var e = Kt();
  function r(t, n) {
    var a = n ? e(t.buffer) : t.buffer;
    return new t.constructor(a, t.byteOffset, t.byteLength);
  }
  return dt = r, dt;
}
var ht, Za;
function Bs() {
  if (Za) return ht;
  Za = 1;
  var e = /\w*$/;
  function r(t) {
    var n = new t.constructor(t.source, e.exec(t));
    return n.lastIndex = t.lastIndex, n;
  }
  return ht = r, ht;
}
var vt, ka;
function Hs() {
  if (ka) return vt;
  ka = 1;
  var e = se(), r = e ? e.prototype : void 0, t = r ? r.valueOf : void 0;
  function n(a) {
    return t ? Object(t.call(a)) : {};
  }
  return vt = n, vt;
}
var yt, ei;
function $s() {
  if (ei) return yt;
  ei = 1;
  var e = Kt();
  function r(t, n) {
    var a = n ? e(t.buffer) : t.buffer;
    return new t.constructor(a, t.byteOffset, t.length);
  }
  return yt = r, yt;
}
var _t, ri;
function Vs() {
  if (ri) return _t;
  ri = 1;
  var e = Kt(), r = Ks(), t = Bs(), n = Hs(), a = $s(), i = "[object Boolean]", u = "[object Date]", s = "[object Map]", c = "[object Number]", o = "[object RegExp]", f = "[object Set]", l = "[object String]", d = "[object Symbol]", g = "[object ArrayBuffer]", C = "[object DataView]", m = "[object Float32Array]", q = "[object Float64Array]", b = "[object Int8Array]", h = "[object Int16Array]", O = "[object Int32Array]", _ = "[object Uint8Array]", j = "[object Uint8ClampedArray]", p = "[object Uint16Array]", y = "[object Uint32Array]";
  function I(T, E, v) {
    var w = T.constructor;
    switch (E) {
      case g:
        return e(T);
      case i:
      case u:
        return new w(+T);
      case C:
        return r(T, v);
      case m:
      case q:
      case b:
      case h:
      case O:
      case _:
      case j:
      case p:
      case y:
        return a(T, v);
      case s:
        return new w();
      case c:
      case l:
        return new w(T);
      case o:
        return t(T);
      case f:
        return new w();
      case d:
        return n(T);
    }
  }
  return _t = I, _t;
}
var pt, ti;
function Ws() {
  if (ti) return pt;
  ti = 1;
  var e = k(), r = Object.create, t = /* @__PURE__ */ function() {
    function n() {
    }
    return function(a) {
      if (!e(a))
        return {};
      if (r)
        return r(a);
      n.prototype = a;
      var i = new n();
      return n.prototype = void 0, i;
    };
  }();
  return pt = t, pt;
}
var gt, ni;
function zs() {
  if (ni) return gt;
  ni = 1;
  var e = Ws(), r = Ki(), t = Nt();
  function n(a) {
    return typeof a.constructor == "function" && !t(a) ? e(r(a)) : {};
  }
  return gt = n, gt;
}
var bt, ai;
function Js() {
  if (ai) return bt;
  ai = 1;
  var e = de(), r = z(), t = "[object Map]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return bt = n, bt;
}
var qt, ii;
function Qs() {
  if (ii) return qt;
  ii = 1;
  var e = Js(), r = Dt(), t = Mt(), n = t && t.isMap, a = n ? r(n) : e;
  return qt = a, qt;
}
var At, ui;
function Ys() {
  if (ui) return At;
  ui = 1;
  var e = de(), r = z(), t = "[object Set]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return At = n, At;
}
var mt, si;
function Xs() {
  if (si) return mt;
  si = 1;
  var e = Ys(), r = Dt(), t = Mt(), n = t && t.isSet, a = n ? r(n) : e;
  return mt = a, mt;
}
var Tt, oi;
function Zs() {
  if (oi) return Tt;
  oi = 1;
  var e = ji(), r = Is(), t = Ui(), n = Es(), a = xs(), i = Ls(), u = Ds(), s = Ms(), c = Ns(), o = Ni(), f = Gs(), l = de(), d = Us(), g = Vs(), C = zs(), m = le(), q = Lt(), b = Qs(), h = k(), O = Xs(), _ = Gt(), j = Ut(), p = 1, y = 2, I = 4, T = "[object Arguments]", E = "[object Array]", v = "[object Boolean]", w = "[object Date]", F = "[object Error]", U = "[object Function]", K = "[object GeneratorFunction]", ve = "[object Map]", au = "[object Number]", $t = "[object Object]", iu = "[object RegExp]", uu = "[object Set]", su = "[object String]", ou = "[object Symbol]", cu = "[object WeakMap]", fu = "[object ArrayBuffer]", lu = "[object DataView]", du = "[object Float32Array]", hu = "[object Float64Array]", vu = "[object Int8Array]", yu = "[object Int16Array]", _u = "[object Int32Array]", pu = "[object Uint8Array]", gu = "[object Uint8ClampedArray]", bu = "[object Uint16Array]", qu = "[object Uint32Array]", S = {};
  S[T] = S[E] = S[fu] = S[lu] = S[v] = S[w] = S[du] = S[hu] = S[vu] = S[yu] = S[_u] = S[ve] = S[au] = S[$t] = S[iu] = S[uu] = S[su] = S[ou] = S[pu] = S[gu] = S[bu] = S[qu] = !0, S[F] = S[U] = S[cu] = !1;
  function ee(A, B, H, Au, re, D) {
    var P, te = B & p, ne = B & y, mu = B & I;
    if (H && (P = re ? H(A, Au, re, D) : H(A)), P !== void 0)
      return P;
    if (!h(A))
      return A;
    var Vt = m(A);
    if (Vt) {
      if (P = d(A), !te)
        return u(A, P);
    } else {
      var $ = l(A), Wt = $ == U || $ == K;
      if (q(A))
        return i(A, te);
      if ($ == $t || $ == T || Wt && !re) {
        if (P = ne || Wt ? {} : C(A), !te)
          return ne ? c(A, a(P, A)) : s(A, n(P, A));
      } else {
        if (!S[$])
          return re ? A : {};
        P = g(A, $, te);
      }
    }
    D || (D = new e());
    var zt = D.get(A);
    if (zt)
      return zt;
    D.set(A, P), O(A) ? A.forEach(function(M) {
      P.add(ee(M, B, H, M, A, D));
    }) : b(A) && A.forEach(function(M, N) {
      P.set(N, ee(M, B, H, N, A, D));
    });
    var Tu = mu ? ne ? f : o : ne ? j : _, Jt = Vt ? void 0 : Tu(A);
    return r(Jt || A, function(M, N) {
      Jt && (N = M, M = A[N]), t(P, N, ee(M, B, H, N, A, D));
    }), P;
  }
  return Tt = ee, Tt;
}
var St, ci;
function ks() {
  if (ci) return St;
  ci = 1;
  var e = Zs(), r = 1, t = 4;
  function n(a) {
    return e(a, r | t);
  }
  return St = n, St;
}
var eo = ks();
const fi = /* @__PURE__ */ mi(eo);
function ro(e) {
  return Ou() ? (ju(e), !0) : !1;
}
const to = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const no = Object.prototype.toString, ao = (e) => no.call(e) === "[object Object]", li = () => {
};
function io(e, r) {
  function t(...n) {
    return new Promise((a, i) => {
      Promise.resolve(e(() => r.apply(this, n), { fn: r, thisArg: this, args: n })).then(a).catch(i);
    });
  }
  return t;
}
function uo(e, r = {}) {
  let t, n, a = li;
  const i = (c) => {
    clearTimeout(c), a(), a = li;
  };
  let u;
  return (c) => {
    const o = V(e), f = V(r.maxWait);
    return t && i(t), o <= 0 || f !== void 0 && f <= 0 ? (n && (i(n), n = void 0), Promise.resolve(c())) : new Promise((l, d) => {
      a = r.rejectOnCancel ? d : l, u = c, f && !n && (n = setTimeout(() => {
        t && i(t), n = void 0, l(u());
      }, f)), t = setTimeout(() => {
        n && i(n), n = void 0, l(c());
      }, o);
    });
  };
}
function so(e) {
  return Object.entries(e);
}
function Ct(e) {
  return Array.isArray(e) ? e : [e];
}
function oo(e, r = 200, t = {}) {
  return io(
    uo(r, t),
    e
  );
}
function co(e, r, t) {
  return W(
    e,
    r,
    {
      ...t,
      immediate: !0
    }
  );
}
const Hi = to ? window : void 0;
function fo(e) {
  var r;
  const t = V(e);
  return (r = t == null ? void 0 : t.$el) != null ? r : t;
}
function di(...e) {
  const r = [], t = () => {
    r.forEach((s) => s()), r.length = 0;
  }, n = (s, c, o, f) => (s.addEventListener(c, o, f), () => s.removeEventListener(c, o, f)), a = J(() => {
    const s = Ct(V(e[0])).filter((c) => c != null);
    return s.every((c) => typeof c != "string") ? s : void 0;
  }), i = co(
    () => {
      var s, c;
      return [
        (c = (s = a.value) == null ? void 0 : s.map((o) => fo(o))) != null ? c : [Hi].filter((o) => o != null),
        Ct(V(a.value ? e[1] : e[0])),
        Ct(bi(a.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        V(a.value ? e[3] : e[2])
      ];
    },
    ([s, c, o, f]) => {
      if (t(), !(s != null && s.length) || !(c != null && c.length) || !(o != null && o.length))
        return;
      const l = ao(f) ? { ...f } : f;
      r.push(
        ...s.flatMap(
          (d) => c.flatMap(
            (g) => o.map((C) => n(d, g, C, l))
          )
        )
      );
    },
    { flush: "post" }
  ), u = () => {
    i(), t();
  };
  return ro(t), u;
}
const hi = [
  "hash",
  "host",
  "hostname",
  "href",
  "pathname",
  "port",
  "protocol",
  "search"
];
function $i(e = {}) {
  const { window: r = Hi } = e, t = Object.fromEntries(
    hi.map((i) => [i, Rt()])
  );
  for (const [i, u] of so(t))
    W(u, (s) => {
      !(r != null && r.location) || r.location[i] === s || (r.location[i] = s);
    });
  const n = (i) => {
    var u;
    const { state: s, length: c } = (r == null ? void 0 : r.history) || {}, { origin: o } = (r == null ? void 0 : r.location) || {};
    for (const f of hi)
      t[f].value = (u = r == null ? void 0 : r.location) == null ? void 0 : u[f];
    return gi({
      trigger: i,
      state: s,
      length: c,
      origin: o,
      ...t
    });
  }, a = Rt(n("load"));
  if (r) {
    const i = { passive: !0 };
    di(r, "popstate", () => a.value = n("popstate"), i), di(r, "hashchange", () => a.value = n("hashchange"), i);
  }
  return a;
}
const Ro = {
  visit(e, r) {
    return new Promise((t, n) => {
      qi.visit(e, {
        ...r,
        onSuccess: (...a) => t(a),
        onError: n,
        onCancel: n
      });
    });
  },
  patch(e, r, t) {
    return this.visit(e, { ...t, data: r, method: "patch" });
  },
  post(e, r, t) {
    return this.visit(e, { ...t, data: r, method: "post" });
  },
  delete(e, r) {
    return this.visit(e, { ...r, method: "delete" });
  }
};
function lo(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Ot(e, r, t) {
  return e.replace(new RegExp(lo(r), "g"), t);
}
function Io(e, r, t) {
  Object.keys(r).forEach((n) => {
    const a = `${t}${Ot(Ot(Ot(n, "./", ""), "/", ""), ".vue", "")}`;
    e.component(a, r[n].default);
  });
}
const Vi = "%[a-f0-9]{2}", vi = new RegExp("(" + Vi + ")|([^%]+?)", "gi"), yi = new RegExp("(" + Vi + ")+", "gi");
function It(e, r) {
  try {
    return [decodeURIComponent(e.join(""))];
  } catch {
  }
  if (e.length === 1)
    return e;
  r = r || 1;
  const t = e.slice(0, r), n = e.slice(r);
  return Array.prototype.concat.call([], It(t), It(n));
}
function ho(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    let r = e.match(vi) || [];
    for (let t = 1; t < r.length; t++)
      e = It(r, t).join(""), r = e.match(vi) || [];
    return e;
  }
}
function vo(e) {
  const r = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  };
  let t = yi.exec(e);
  for (; t; ) {
    try {
      r[t[0]] = decodeURIComponent(t[0]);
    } catch {
      const a = ho(t[0]);
      a !== t[0] && (r[t[0]] = a);
    }
    t = yi.exec(e);
  }
  r["%C2"] = "�";
  const n = Object.keys(r);
  for (const a of n)
    e = e.replace(new RegExp(a, "g"), r[a]);
  return e;
}
function yo(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
  try {
    return decodeURIComponent(e);
  } catch {
    return vo(e);
  }
}
function _o(e, r) {
  const t = {};
  if (Array.isArray(r))
    for (const n of r) {
      const a = Object.getOwnPropertyDescriptor(e, n);
      a != null && a.enumerable && Object.defineProperty(t, n, a);
    }
  else
    for (const n of Reflect.ownKeys(e)) {
      const a = Object.getOwnPropertyDescriptor(e, n);
      if (a.enumerable) {
        const i = e[n];
        r(n, i, e) && Object.defineProperty(t, n, a);
      }
    }
  return t;
}
function Wi(e, r) {
  if (!(typeof e == "string" && typeof r == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "" || r === "")
    return [];
  const t = e.indexOf(r);
  return t === -1 ? [] : [
    e.slice(0, t),
    e.slice(t + r.length)
  ];
}
const po = (e) => e == null, go = (e) => encodeURIComponent(e).replaceAll(/[!'()*]/g, (r) => `%${r.charCodeAt(0).toString(16).toUpperCase()}`), wt = Symbol("encodeFragmentIdentifier");
function bo(e) {
  switch (e.arrayFormat) {
    case "index":
      return (r) => (t, n) => {
        const a = t.length;
        return n === void 0 || e.skipNull && n === null || e.skipEmptyString && n === "" ? t : n === null ? [
          ...t,
          [R(r, e), "[", a, "]"].join("")
        ] : [
          ...t,
          [R(r, e), "[", R(a, e), "]=", R(n, e)].join("")
        ];
      };
    case "bracket":
      return (r) => (t, n) => n === void 0 || e.skipNull && n === null || e.skipEmptyString && n === "" ? t : n === null ? [
        ...t,
        [R(r, e), "[]"].join("")
      ] : [
        ...t,
        [R(r, e), "[]=", R(n, e)].join("")
      ];
    case "colon-list-separator":
      return (r) => (t, n) => n === void 0 || e.skipNull && n === null || e.skipEmptyString && n === "" ? t : n === null ? [
        ...t,
        [R(r, e), ":list="].join("")
      ] : [
        ...t,
        [R(r, e), ":list=", R(n, e)].join("")
      ];
    case "comma":
    case "separator":
    case "bracket-separator": {
      const r = e.arrayFormat === "bracket-separator" ? "[]=" : "=";
      return (t) => (n, a) => a === void 0 || e.skipNull && a === null || e.skipEmptyString && a === "" ? n : (a = a === null ? "" : a, n.length === 0 ? [[R(t, e), r, R(a, e)].join("")] : [[n, R(a, e)].join(e.arrayFormatSeparator)]);
    }
    default:
      return (r) => (t, n) => n === void 0 || e.skipNull && n === null || e.skipEmptyString && n === "" ? t : n === null ? [
        ...t,
        R(r, e)
      ] : [
        ...t,
        [R(r, e), "=", R(n, e)].join("")
      ];
  }
}
function qo(e) {
  let r;
  switch (e.arrayFormat) {
    case "index":
      return (t, n, a) => {
        if (r = /\[(\d*)]$/.exec(t), t = t.replace(/\[\d*]$/, ""), !r) {
          a[t] = n;
          return;
        }
        a[t] === void 0 && (a[t] = {}), a[t][r[1]] = n;
      };
    case "bracket":
      return (t, n, a) => {
        if (r = /(\[])$/.exec(t), t = t.replace(/\[]$/, ""), !r) {
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
        if (r = /(:list)$/.exec(t), t = t.replace(/:list$/, ""), !r) {
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
        const i = typeof n == "string" && n.includes(e.arrayFormatSeparator), u = typeof n == "string" && !i && L(n, e).includes(e.arrayFormatSeparator);
        n = u ? L(n, e) : n;
        const s = i || u ? n.split(e.arrayFormatSeparator).map((c) => L(c, e)) : n === null ? n : L(n, e);
        a[t] = s;
      };
    case "bracket-separator":
      return (t, n, a) => {
        const i = /(\[])$/.test(t);
        if (t = t.replace(/\[]$/, ""), !i) {
          a[t] = n && L(n, e);
          return;
        }
        const u = n === null ? [] : L(n, e).split(e.arrayFormatSeparator);
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
function zi(e) {
  if (typeof e != "string" || e.length !== 1)
    throw new TypeError("arrayFormatSeparator must be single character string");
}
function R(e, r) {
  return r.encode ? r.strict ? go(e) : encodeURIComponent(e) : e;
}
function L(e, r) {
  return r.decode ? yo(e) : e;
}
function Ji(e) {
  return Array.isArray(e) ? e.sort() : typeof e == "object" ? Ji(Object.keys(e)).sort((r, t) => Number(r) - Number(t)).map((r) => e[r]) : e;
}
function Qi(e) {
  const r = e.indexOf("#");
  return r !== -1 && (e = e.slice(0, r)), e;
}
function Ao(e) {
  let r = "";
  const t = e.indexOf("#");
  return t !== -1 && (r = e.slice(t)), r;
}
function _i(e, r, t) {
  return t === "string" && typeof e == "string" ? e : typeof t == "function" && typeof e == "string" ? t(e) : t === "boolean" && e === null ? !0 : t === "boolean" && e !== null && (e.toLowerCase() === "true" || e.toLowerCase() === "false") ? e.toLowerCase() === "true" : t === "boolean" && e !== null && (e.toLowerCase() === "1" || e.toLowerCase() === "0") ? e.toLowerCase() === "1" : t === "string[]" && r.arrayFormat !== "none" && typeof e == "string" ? [e] : t === "number[]" && r.arrayFormat !== "none" && !Number.isNaN(Number(e)) && typeof e == "string" && e.trim() !== "" ? [Number(e)] : t === "number" && !Number.isNaN(Number(e)) && typeof e == "string" && e.trim() !== "" ? Number(e) : r.parseBooleans && e !== null && (e.toLowerCase() === "true" || e.toLowerCase() === "false") ? e.toLowerCase() === "true" : r.parseNumbers && !Number.isNaN(Number(e)) && typeof e == "string" && e.trim() !== "" ? Number(e) : e;
}
function Bt(e) {
  e = Qi(e);
  const r = e.indexOf("?");
  return r === -1 ? "" : e.slice(r + 1);
}
function Ht(e, r) {
  r = {
    decode: !0,
    sort: !0,
    arrayFormat: "none",
    arrayFormatSeparator: ",",
    parseNumbers: !1,
    parseBooleans: !1,
    types: /* @__PURE__ */ Object.create(null),
    ...r
  }, zi(r.arrayFormatSeparator);
  const t = qo(r), n = /* @__PURE__ */ Object.create(null);
  if (typeof e != "string" || (e = e.trim().replace(/^[?#&]/, ""), !e))
    return n;
  for (const a of e.split("&")) {
    if (a === "")
      continue;
    const i = r.decode ? a.replaceAll("+", " ") : a;
    let [u, s] = Wi(i, "=");
    u === void 0 && (u = i), s = s === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(r.arrayFormat) ? s : L(s, r), t(L(u, r), s, n);
  }
  for (const [a, i] of Object.entries(n))
    if (typeof i == "object" && i !== null && r.types[a] !== "string")
      for (const [u, s] of Object.entries(i)) {
        const c = r.types[a] ? r.types[a].replace("[]", "") : void 0;
        i[u] = _i(s, r, c);
      }
    else typeof i == "object" && i !== null && r.types[a] === "string" ? n[a] = Object.values(i).join(r.arrayFormatSeparator) : n[a] = _i(i, r, r.types[a]);
  return r.sort === !1 ? n : (r.sort === !0 ? Object.keys(n).sort() : Object.keys(n).sort(r.sort)).reduce((a, i) => {
    const u = n[i];
    return a[i] = u && typeof u == "object" && !Array.isArray(u) ? Ji(u) : u, a;
  }, /* @__PURE__ */ Object.create(null));
}
function Yi(e, r) {
  if (!e)
    return "";
  r = {
    encode: !0,
    strict: !0,
    arrayFormat: "none",
    arrayFormatSeparator: ",",
    ...r
  }, zi(r.arrayFormatSeparator);
  const t = (u) => r.skipNull && po(e[u]) || r.skipEmptyString && e[u] === "", n = bo(r), a = {};
  for (const [u, s] of Object.entries(e))
    t(u) || (a[u] = s);
  const i = Object.keys(a);
  return r.sort !== !1 && i.sort(r.sort), i.map((u) => {
    const s = e[u];
    return s === void 0 ? "" : s === null ? R(u, r) : Array.isArray(s) ? s.length === 0 && r.arrayFormat === "bracket-separator" ? R(u, r) + "[]" : s.reduce(n(u), []).join("&") : R(u, r) + "=" + R(s, r);
  }).filter((u) => u.length > 0).join("&");
}
function Xi(e, r) {
  var a;
  r = {
    decode: !0,
    ...r
  };
  let [t, n] = Wi(e, "#");
  return t === void 0 && (t = e), {
    url: ((a = t == null ? void 0 : t.split("?")) == null ? void 0 : a[0]) ?? "",
    query: Ht(Bt(e), r),
    ...r && r.parseFragmentIdentifier && n ? { fragmentIdentifier: L(n, r) } : {}
  };
}
function Zi(e, r) {
  r = {
    encode: !0,
    strict: !0,
    [wt]: !0,
    ...r
  };
  const t = Qi(e.url).split("?")[0] || "", n = Bt(e.url), a = {
    ...Ht(n, { sort: !1, ...r }),
    ...e.query
  };
  let i = Yi(a, r);
  i && (i = `?${i}`);
  let u = Ao(e.url);
  if (typeof e.fragmentIdentifier == "string") {
    const s = new URL(t);
    s.hash = e.fragmentIdentifier, u = r[wt] ? s.hash : `#${e.fragmentIdentifier}`;
  }
  return `${t}${i}${u}`;
}
function ki(e, r, t) {
  t = {
    parseFragmentIdentifier: !0,
    [wt]: !1,
    ...t
  };
  const { url: n, query: a, fragmentIdentifier: i } = Xi(e, t);
  return Zi({
    url: n,
    query: _o(a, r),
    fragmentIdentifier: i
  }, t);
}
function mo(e, r, t) {
  const n = Array.isArray(r) ? (a) => !r.includes(a) : (a, i) => !r(a, i);
  return ki(e, n, t);
}
const eu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exclude: mo,
  extract: Bt,
  parse: Ht,
  parseUrl: Xi,
  pick: ki,
  stringify: Yi,
  stringifyUrl: Zi
}, Symbol.toStringTag, { value: "Module" }));
function Et() {
  return eu.parse(location.search, {
    arrayFormat: "index",
    parseNumbers: !0
  });
}
function To(e) {
  return eu.stringify(e, {
    arrayFormat: "index"
  });
}
function wo(e) {
  const r = Et();
  return e in r ? r[e] : null;
}
function So(e) {
  const r = window.location.href.split("?")[0];
  return Object.keys(e).length > 0 ? `${r}?${To(e)}` : r;
}
const pi = (e) => Array.isArray(e) && e.length === 0, jt = (e, r) => r === "" || r === void 0 || r === null || pi(r) || r === !1 ? e === "" || e === void 0 || e === null || pi(e) || e === !1 : Rs(e, r);
function Eo(e, r) {
  const t = fi(typeof e == "object" ? e : e()), n = () => {
    const f = Et();
    return Object.keys(t).reduce((l, d) => (jt(f[d], t[d]) || f[d] === void 0 ? l[d] = t[d] : l[d] = f[d], l), {});
  }, a = (f) => Object.keys(t).some((l) => !jt(f[l], t[l])), i = n(), u = gi({
    ...i,
    applied: a(i),
    data() {
      return Object.keys(t).reduce((f, l) => (f[l] = this[l], f), {});
    },
    reset() {
      Object.keys(t).forEach((f) => {
        this[f] = t[f];
      }), this.applied = !1;
    }
  }), s = (f) => {
    const l = Et();
    return Object.keys(f).forEach((d) => {
      const g = f[d], C = t[d];
      jt(g, C) || !g ? delete l[d] : l[d] = g;
    }), delete l.page, delete l.cursor, So(l);
  };
  let c = null;
  const o = oo((f) => {
    c && (c.cancel(), c = null), qi.visit(f, {
      preserveState: !0,
      preserveScroll: !0,
      onCancelToken: (l) => {
        c = l;
      },
      onSuccess: () => {
        u.applied = a(u.data()), r != null && r.onSuccess && r.onSuccess();
      }
    });
  }, 50);
  return W(u, () => {
    const f = window.location.href, l = s(u.data());
    f != l && (u.applied = a(u.data()), o(l));
  }), u;
}
function ru(e) {
  return typeof e == "object" && e !== null && "route" in e;
}
function tu(e) {
  return typeof e == "object" && e !== null && "url" in e;
}
function nu(e) {
  return typeof e == "object" && e !== null && "path" in e;
}
function Po(e) {
  return typeof e == "function";
}
function Fo(e) {
  const r = Ai(), n = $i().value.href;
  return Z(e, r.url, n ? new URL(n) : null);
}
function Z(e, r, t) {
  if (Array.isArray(e))
    return e.some((n) => Z(n, r, t));
  if (nu(e))
    return e.path === r;
  if (tu(e)) {
    if (t) {
      const n = new URL(e.url);
      return `${n.host}${n.pathname}` == `${t.host}${t.pathname}`;
    }
    return !1;
  } else {
    if (ru(e))
      return route().current(e.route, e.params);
    if (typeof e == "function")
      return e();
  }
  return !1;
}
function xo(e) {
  const r = Ai(), t = $i(), n = J(() => r.url), a = J(() => {
    const o = t.value.href;
    return o ? new URL(o) : null;
  }), i = (o) => {
    if (o.active)
      return Z(o.active, n.value, a.value);
    const f = o.action;
    if (f) {
      if (typeof f == "string")
        return Z({ url: f }, n.value, a.value);
      if (ru(f) || tu(f) || nu(f))
        return Z(f, n.value, a.value);
    }
    return !1;
  }, u = (o, f = !1) => o.children && o.children.some((l) => i(l)) ? !0 : f && o.children ? o.children.some((l) => u(l, !0)) : !1, s = (o) => {
    const f = o.children, l = f ? f.map((d) => s(d)) : [];
    return {
      ...o,
      isActive: i(o),
      isChildActive: u(o, !0),
      children: l,
      hasChildren: f ? f.length > 0 : !1
    };
  }, c = J(() => bi(e));
  return J(() => c.value.map((o) => s(o)));
}
function Lo(e = !1) {
  const r = Rt(e);
  return {
    active: r,
    activate: () => {
      r.value = !0;
    },
    deactivate: () => {
      r.value = !1;
    }
  };
}
function Do(e, r) {
  W(e.active, (t) => {
    t && r();
  });
}
function Mo(e, r) {
  W(e.active, (t) => {
    t || r();
  });
}
export {
  jo as Icon,
  Ro as asyncRouter,
  To as formatQuery,
  wo as getValueFromQuery,
  Z as isActivated,
  Fo as isCurrentlyActivated,
  Po as isEventAction,
  tu as isLinkAction,
  nu as isLinkPathAction,
  ru as isRouteAction,
  Do as onActivated,
  Mo as onDeactivated,
  Et as parseQuery,
  Io as registerNamespacedComponents,
  So as urlWithQuery,
  Eo as useFilter,
  xo as useNavigation,
  Lo as useToggle
};
//# sourceMappingURL=ui.js.map
