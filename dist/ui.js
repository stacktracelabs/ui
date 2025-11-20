import { defineComponent as Gt, shallowRef as an, watch as z, h as Es, provide as Ps, inject as Fs, computed as x, toValue as L, isRef as qe, reactive as se, unref as fe, getCurrentScope as xs, onScopeDispose as Ls, toRefs as sn, ref as xt, createBlock as Lt, openBlock as Dt, mergeProps as Ds, withCtx as Ms, renderSlot as Ns, createCommentVNode as Bs, resolveDynamicComponent as Gs } from "vue";
import { router as Ii, usePage as wi, Link as un } from "@inertiajs/vue3";
import { Primitive as Us } from "reka-ui";
const Ks = Gt({
  props: {
    src: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const r = (s) => {
      const u = s.attributes, o = {};
      for (let c = 0; c < u.length; c++) {
        const f = u[c];
        o[f.name] = f.value;
      }
      return o;
    }, t = new DOMParser(), n = t.parseFromString(e.src, "image/svg+xml").documentElement, a = an(r(n)), i = an(n.innerHTML);
    return z(() => e.src, () => {
      const s = t.parseFromString(e.src, "image/svg+xml").documentElement;
      a.value = r(s), i.value = s.innerHTML;
    }), () => Es("svg", { ...a.value, innerHTML: i.value });
  }
}), Ei = Symbol();
function Hs(e) {
  Ps(Ei, e);
}
function $s() {
  const e = Fs(Ei);
  return x(() => e ? L(e) : null);
}
var ae = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ae, on;
function Vs() {
  if (on) return Ae;
  on = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Ae = e, Ae;
}
var Se, cn;
function Ut() {
  if (cn) return Se;
  cn = 1;
  function e(r, t) {
    return r === t || r !== r && t !== t;
  }
  return Se = e, Se;
}
var Te, fn;
function le() {
  if (fn) return Te;
  fn = 1;
  var e = Ut();
  function r(t, n) {
    for (var a = t.length; a--; )
      if (e(t[a][0], n))
        return a;
    return -1;
  }
  return Te = r, Te;
}
var Ce, ln;
function Ws() {
  if (ln) return Ce;
  ln = 1;
  var e = le(), r = Array.prototype, t = r.splice;
  function n(a) {
    var i = this.__data__, s = e(i, a);
    if (s < 0)
      return !1;
    var u = i.length - 1;
    return s == u ? i.pop() : t.call(i, s, 1), --this.size, !0;
  }
  return Ce = n, Ce;
}
var Oe, dn;
function zs() {
  if (dn) return Oe;
  dn = 1;
  var e = le();
  function r(t) {
    var n = this.__data__, a = e(n, t);
    return a < 0 ? void 0 : n[a][1];
  }
  return Oe = r, Oe;
}
var je, vn;
function ks() {
  if (vn) return je;
  vn = 1;
  var e = le();
  function r(t) {
    return e(this.__data__, t) > -1;
  }
  return je = r, je;
}
var Re, hn;
function Js() {
  if (hn) return Re;
  hn = 1;
  var e = le();
  function r(t, n) {
    var a = this.__data__, i = e(a, t);
    return i < 0 ? (++this.size, a.push([t, n])) : a[i][1] = n, this;
  }
  return Re = r, Re;
}
var Ie, pn;
function de() {
  if (pn) return Ie;
  pn = 1;
  var e = Vs(), r = Ws(), t = zs(), n = ks(), a = Js();
  function i(s) {
    var u = -1, o = s == null ? 0 : s.length;
    for (this.clear(); ++u < o; ) {
      var c = s[u];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, Ie = i, Ie;
}
var we, yn;
function Qs() {
  if (yn) return we;
  yn = 1;
  var e = de();
  function r() {
    this.__data__ = new e(), this.size = 0;
  }
  return we = r, we;
}
var Ee, _n;
function Ys() {
  if (_n) return Ee;
  _n = 1;
  function e(r) {
    var t = this.__data__, n = t.delete(r);
    return this.size = t.size, n;
  }
  return Ee = e, Ee;
}
var Pe, gn;
function Xs() {
  if (gn) return Pe;
  gn = 1;
  function e(r) {
    return this.__data__.get(r);
  }
  return Pe = e, Pe;
}
var Fe, bn;
function Zs() {
  if (bn) return Fe;
  bn = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return Fe = e, Fe;
}
var xe, mn;
function Fi() {
  if (mn) return xe;
  mn = 1;
  var e = typeof ae == "object" && ae && ae.Object === Object && ae;
  return xe = e, xe;
}
var Le, qn;
function D() {
  if (qn) return Le;
  qn = 1;
  var e = Fi(), r = typeof self == "object" && self && self.Object === Object && self, t = e || r || Function("return this")();
  return Le = t, Le;
}
var De, An;
function ve() {
  if (An) return De;
  An = 1;
  var e = D(), r = e.Symbol;
  return De = r, De;
}
var Me, Sn;
function eu() {
  if (Sn) return Me;
  Sn = 1;
  var e = ve(), r = Object.prototype, t = r.hasOwnProperty, n = r.toString, a = e ? e.toStringTag : void 0;
  function i(s) {
    var u = t.call(s, a), o = s[a];
    try {
      s[a] = void 0;
      var c = !0;
    } catch {
    }
    var f = n.call(s);
    return c && (u ? s[a] = o : delete s[a]), f;
  }
  return Me = i, Me;
}
var Ne, Tn;
function ru() {
  if (Tn) return Ne;
  Tn = 1;
  var e = Object.prototype, r = e.toString;
  function t(n) {
    return r.call(n);
  }
  return Ne = t, Ne;
}
var Be, Cn;
function he() {
  if (Cn) return Be;
  Cn = 1;
  var e = ve(), r = eu(), t = ru(), n = "[object Null]", a = "[object Undefined]", i = e ? e.toStringTag : void 0;
  function s(u) {
    return u == null ? u === void 0 ? a : n : i && i in Object(u) ? r(u) : t(u);
  }
  return Be = s, Be;
}
var Ge, On;
function Z() {
  if (On) return Ge;
  On = 1;
  function e(r) {
    var t = typeof r;
    return r != null && (t == "object" || t == "function");
  }
  return Ge = e, Ge;
}
var Ue, jn;
function xi() {
  if (jn) return Ue;
  jn = 1;
  var e = he(), r = Z(), t = "[object AsyncFunction]", n = "[object Function]", a = "[object GeneratorFunction]", i = "[object Proxy]";
  function s(u) {
    if (!r(u))
      return !1;
    var o = e(u);
    return o == n || o == a || o == t || o == i;
  }
  return Ue = s, Ue;
}
var Ke, Rn;
function tu() {
  if (Rn) return Ke;
  Rn = 1;
  var e = D(), r = e["__core-js_shared__"];
  return Ke = r, Ke;
}
var He, In;
function nu() {
  if (In) return He;
  In = 1;
  var e = tu(), r = function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function t(n) {
    return !!r && r in n;
  }
  return He = t, He;
}
var $e, wn;
function Li() {
  if (wn) return $e;
  wn = 1;
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
  return $e = t, $e;
}
var Ve, En;
function au() {
  if (En) return Ve;
  En = 1;
  var e = xi(), r = nu(), t = Z(), n = Li(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, s = Function.prototype, u = Object.prototype, o = s.toString, c = u.hasOwnProperty, f = RegExp(
    "^" + o.call(c).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function l(d) {
    if (!t(d) || r(d))
      return !1;
    var g = e(d) ? f : i;
    return g.test(n(d));
  }
  return Ve = l, Ve;
}
var We, Pn;
function iu() {
  if (Pn) return We;
  Pn = 1;
  function e(r, t) {
    return r == null ? void 0 : r[t];
  }
  return We = e, We;
}
var ze, Fn;
function U() {
  if (Fn) return ze;
  Fn = 1;
  var e = au(), r = iu();
  function t(n, a) {
    var i = r(n, a);
    return e(i) ? i : void 0;
  }
  return ze = t, ze;
}
var ke, xn;
function Kt() {
  if (xn) return ke;
  xn = 1;
  var e = U(), r = D(), t = e(r, "Map");
  return ke = t, ke;
}
var Je, Ln;
function pe() {
  if (Ln) return Je;
  Ln = 1;
  var e = U(), r = e(Object, "create");
  return Je = r, Je;
}
var Qe, Dn;
function su() {
  if (Dn) return Qe;
  Dn = 1;
  var e = pe();
  function r() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Qe = r, Qe;
}
var Ye, Mn;
function uu() {
  if (Mn) return Ye;
  Mn = 1;
  function e(r) {
    var t = this.has(r) && delete this.__data__[r];
    return this.size -= t ? 1 : 0, t;
  }
  return Ye = e, Ye;
}
var Xe, Nn;
function ou() {
  if (Nn) return Xe;
  Nn = 1;
  var e = pe(), r = "__lodash_hash_undefined__", t = Object.prototype, n = t.hasOwnProperty;
  function a(i) {
    var s = this.__data__;
    if (e) {
      var u = s[i];
      return u === r ? void 0 : u;
    }
    return n.call(s, i) ? s[i] : void 0;
  }
  return Xe = a, Xe;
}
var Ze, Bn;
function cu() {
  if (Bn) return Ze;
  Bn = 1;
  var e = pe(), r = Object.prototype, t = r.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return e ? i[a] !== void 0 : t.call(i, a);
  }
  return Ze = n, Ze;
}
var er, Gn;
function fu() {
  if (Gn) return er;
  Gn = 1;
  var e = pe(), r = "__lodash_hash_undefined__";
  function t(n, a) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = e && a === void 0 ? r : a, this;
  }
  return er = t, er;
}
var rr, Un;
function lu() {
  if (Un) return rr;
  Un = 1;
  var e = su(), r = uu(), t = ou(), n = cu(), a = fu();
  function i(s) {
    var u = -1, o = s == null ? 0 : s.length;
    for (this.clear(); ++u < o; ) {
      var c = s[u];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, rr = i, rr;
}
var tr, Kn;
function du() {
  if (Kn) return tr;
  Kn = 1;
  var e = lu(), r = de(), t = Kt();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (t || r)(),
      string: new e()
    };
  }
  return tr = n, tr;
}
var nr, Hn;
function vu() {
  if (Hn) return nr;
  Hn = 1;
  function e(r) {
    var t = typeof r;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? r !== "__proto__" : r === null;
  }
  return nr = e, nr;
}
var ar, $n;
function ye() {
  if ($n) return ar;
  $n = 1;
  var e = vu();
  function r(t, n) {
    var a = t.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return ar = r, ar;
}
var ir, Vn;
function hu() {
  if (Vn) return ir;
  Vn = 1;
  var e = ye();
  function r(t) {
    var n = e(this, t).delete(t);
    return this.size -= n ? 1 : 0, n;
  }
  return ir = r, ir;
}
var sr, Wn;
function pu() {
  if (Wn) return sr;
  Wn = 1;
  var e = ye();
  function r(t) {
    return e(this, t).get(t);
  }
  return sr = r, sr;
}
var ur, zn;
function yu() {
  if (zn) return ur;
  zn = 1;
  var e = ye();
  function r(t) {
    return e(this, t).has(t);
  }
  return ur = r, ur;
}
var or, kn;
function _u() {
  if (kn) return or;
  kn = 1;
  var e = ye();
  function r(t, n) {
    var a = e(this, t), i = a.size;
    return a.set(t, n), this.size += a.size == i ? 0 : 1, this;
  }
  return or = r, or;
}
var cr, Jn;
function Di() {
  if (Jn) return cr;
  Jn = 1;
  var e = du(), r = hu(), t = pu(), n = yu(), a = _u();
  function i(s) {
    var u = -1, o = s == null ? 0 : s.length;
    for (this.clear(); ++u < o; ) {
      var c = s[u];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, cr = i, cr;
}
var fr, Qn;
function gu() {
  if (Qn) return fr;
  Qn = 1;
  var e = de(), r = Kt(), t = Di(), n = 200;
  function a(i, s) {
    var u = this.__data__;
    if (u instanceof e) {
      var o = u.__data__;
      if (!r || o.length < n - 1)
        return o.push([i, s]), this.size = ++u.size, this;
      u = this.__data__ = new t(o);
    }
    return u.set(i, s), this.size = u.size, this;
  }
  return fr = a, fr;
}
var lr, Yn;
function Mi() {
  if (Yn) return lr;
  Yn = 1;
  var e = de(), r = Qs(), t = Ys(), n = Xs(), a = Zs(), i = gu();
  function s(u) {
    var o = this.__data__ = new e(u);
    this.size = o.size;
  }
  return s.prototype.clear = r, s.prototype.delete = t, s.prototype.get = n, s.prototype.has = a, s.prototype.set = i, lr = s, lr;
}
var dr, Xn;
function bu() {
  if (Xn) return dr;
  Xn = 1;
  var e = "__lodash_hash_undefined__";
  function r(t) {
    return this.__data__.set(t, e), this;
  }
  return dr = r, dr;
}
var vr, Zn;
function mu() {
  if (Zn) return vr;
  Zn = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return vr = e, vr;
}
var hr, ea;
function qu() {
  if (ea) return hr;
  ea = 1;
  var e = Di(), r = bu(), t = mu();
  function n(a) {
    var i = -1, s = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++i < s; )
      this.add(a[i]);
  }
  return n.prototype.add = n.prototype.push = r, n.prototype.has = t, hr = n, hr;
}
var pr, ra;
function Au() {
  if (ra) return pr;
  ra = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length; ++n < a; )
      if (t(r[n], n, r))
        return !0;
    return !1;
  }
  return pr = e, pr;
}
var yr, ta;
function Su() {
  if (ta) return yr;
  ta = 1;
  function e(r, t) {
    return r.has(t);
  }
  return yr = e, yr;
}
var _r, na;
function Ni() {
  if (na) return _r;
  na = 1;
  var e = qu(), r = Au(), t = Su(), n = 1, a = 2;
  function i(s, u, o, c, f, l) {
    var d = o & n, g = s.length, C = u.length;
    if (g != C && !(d && C > g))
      return !1;
    var A = l.get(s), m = l.get(u);
    if (A && m)
      return A == u && m == s;
    var b = -1, v = !0, O = o & a ? new e() : void 0;
    for (l.set(s, u), l.set(u, s); ++b < g; ) {
      var y = s[b], j = u[b];
      if (c)
        var _ = d ? c(j, y, b, u, s, l) : c(y, j, b, s, u, l);
      if (_ !== void 0) {
        if (_)
          continue;
        v = !1;
        break;
      }
      if (O) {
        if (!r(u, function(p, I) {
          if (!t(O, I) && (y === p || f(y, p, o, c, l)))
            return O.push(I);
        })) {
          v = !1;
          break;
        }
      } else if (!(y === j || f(y, j, o, c, l))) {
        v = !1;
        break;
      }
    }
    return l.delete(s), l.delete(u), v;
  }
  return _r = i, _r;
}
var gr, aa;
function Bi() {
  if (aa) return gr;
  aa = 1;
  var e = D(), r = e.Uint8Array;
  return gr = r, gr;
}
var br, ia;
function Tu() {
  if (ia) return br;
  ia = 1;
  function e(r) {
    var t = -1, n = Array(r.size);
    return r.forEach(function(a, i) {
      n[++t] = [i, a];
    }), n;
  }
  return br = e, br;
}
var mr, sa;
function Cu() {
  if (sa) return mr;
  sa = 1;
  function e(r) {
    var t = -1, n = Array(r.size);
    return r.forEach(function(a) {
      n[++t] = a;
    }), n;
  }
  return mr = e, mr;
}
var qr, ua;
function Ou() {
  if (ua) return qr;
  ua = 1;
  var e = ve(), r = Bi(), t = Ut(), n = Ni(), a = Tu(), i = Cu(), s = 1, u = 2, o = "[object Boolean]", c = "[object Date]", f = "[object Error]", l = "[object Map]", d = "[object Number]", g = "[object RegExp]", C = "[object Set]", A = "[object String]", m = "[object Symbol]", b = "[object ArrayBuffer]", v = "[object DataView]", O = e ? e.prototype : void 0, y = O ? O.valueOf : void 0;
  function j(_, p, I, S, E, h, w) {
    switch (I) {
      case v:
        if (_.byteLength != p.byteLength || _.byteOffset != p.byteOffset)
          return !1;
        _ = _.buffer, p = p.buffer;
      case b:
        return !(_.byteLength != p.byteLength || !h(new r(_), new r(p)));
      case o:
      case c:
      case d:
        return t(+_, +p);
      case f:
        return _.name == p.name && _.message == p.message;
      case g:
      case A:
        return _ == p + "";
      case l:
        var F = a;
      case C:
        var K = S & s;
        if (F || (F = i), _.size != p.size && !K)
          return !1;
        var H = w.get(_);
        if (H)
          return H == p;
        S |= u, w.set(_, p);
        var me = n(F(_), F(p), S, E, h, w);
        return w.delete(_), me;
      case m:
        if (y)
          return y.call(_) == y.call(p);
    }
    return !1;
  }
  return qr = j, qr;
}
var Ar, oa;
function Gi() {
  if (oa) return Ar;
  oa = 1;
  function e(r, t) {
    for (var n = -1, a = t.length, i = r.length; ++n < a; )
      r[i + n] = t[n];
    return r;
  }
  return Ar = e, Ar;
}
var Sr, ca;
function _e() {
  if (ca) return Sr;
  ca = 1;
  var e = Array.isArray;
  return Sr = e, Sr;
}
var Tr, fa;
function Ui() {
  if (fa) return Tr;
  fa = 1;
  var e = Gi(), r = _e();
  function t(n, a, i) {
    var s = a(n);
    return r(n) ? s : e(s, i(n));
  }
  return Tr = t, Tr;
}
var Cr, la;
function ju() {
  if (la) return Cr;
  la = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length, i = 0, s = []; ++n < a; ) {
      var u = r[n];
      t(u, n, r) && (s[i++] = u);
    }
    return s;
  }
  return Cr = e, Cr;
}
var Or, da;
function Ki() {
  if (da) return Or;
  da = 1;
  function e() {
    return [];
  }
  return Or = e, Or;
}
var jr, va;
function Ht() {
  if (va) return jr;
  va = 1;
  var e = ju(), r = Ki(), t = Object.prototype, n = t.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(s) {
    return s == null ? [] : (s = Object(s), e(a(s), function(u) {
      return n.call(s, u);
    }));
  } : r;
  return jr = i, jr;
}
var Rr, ha;
function Ru() {
  if (ha) return Rr;
  ha = 1;
  function e(r, t) {
    for (var n = -1, a = Array(r); ++n < r; )
      a[n] = t(n);
    return a;
  }
  return Rr = e, Rr;
}
var Ir, pa;
function k() {
  if (pa) return Ir;
  pa = 1;
  function e(r) {
    return r != null && typeof r == "object";
  }
  return Ir = e, Ir;
}
var wr, ya;
function Iu() {
  if (ya) return wr;
  ya = 1;
  var e = he(), r = k(), t = "[object Arguments]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return wr = n, wr;
}
var Er, _a;
function wu() {
  if (_a) return Er;
  _a = 1;
  var e = Iu(), r = k(), t = Object.prototype, n = t.hasOwnProperty, a = t.propertyIsEnumerable, i = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(s) {
    return r(s) && n.call(s, "callee") && !a.call(s, "callee");
  };
  return Er = i, Er;
}
var J = { exports: {} }, Pr, ga;
function Eu() {
  if (ga) return Pr;
  ga = 1;
  function e() {
    return !1;
  }
  return Pr = e, Pr;
}
J.exports;
var ba;
function $t() {
  return ba || (ba = 1, function(e, r) {
    var t = D(), n = Eu(), a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, u = s ? t.Buffer : void 0, o = u ? u.isBuffer : void 0, c = o || n;
    e.exports = c;
  }(J, J.exports)), J.exports;
}
var Fr, ma;
function Pu() {
  if (ma) return Fr;
  ma = 1;
  var e = 9007199254740991, r = /^(?:0|[1-9]\d*)$/;
  function t(n, a) {
    var i = typeof n;
    return a = a ?? e, !!a && (i == "number" || i != "symbol" && r.test(n)) && n > -1 && n % 1 == 0 && n < a;
  }
  return Fr = t, Fr;
}
var xr, qa;
function Hi() {
  if (qa) return xr;
  qa = 1;
  var e = 9007199254740991;
  function r(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= e;
  }
  return xr = r, xr;
}
var Lr, Aa;
function Fu() {
  if (Aa) return Lr;
  Aa = 1;
  var e = he(), r = Hi(), t = k(), n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", s = "[object Date]", u = "[object Error]", o = "[object Function]", c = "[object Map]", f = "[object Number]", l = "[object Object]", d = "[object RegExp]", g = "[object Set]", C = "[object String]", A = "[object WeakMap]", m = "[object ArrayBuffer]", b = "[object DataView]", v = "[object Float32Array]", O = "[object Float64Array]", y = "[object Int8Array]", j = "[object Int16Array]", _ = "[object Int32Array]", p = "[object Uint8Array]", I = "[object Uint8ClampedArray]", S = "[object Uint16Array]", E = "[object Uint32Array]", h = {};
  h[v] = h[O] = h[y] = h[j] = h[_] = h[p] = h[I] = h[S] = h[E] = !0, h[n] = h[a] = h[m] = h[i] = h[b] = h[s] = h[u] = h[o] = h[c] = h[f] = h[l] = h[d] = h[g] = h[C] = h[A] = !1;
  function w(F) {
    return t(F) && r(F.length) && !!h[e(F)];
  }
  return Lr = w, Lr;
}
var Dr, Sa;
function Vt() {
  if (Sa) return Dr;
  Sa = 1;
  function e(r) {
    return function(t) {
      return r(t);
    };
  }
  return Dr = e, Dr;
}
var Q = { exports: {} };
Q.exports;
var Ta;
function Wt() {
  return Ta || (Ta = 1, function(e, r) {
    var t = Fi(), n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, s = i && t.process, u = function() {
      try {
        var o = a && a.require && a.require("util").types;
        return o || s && s.binding && s.binding("util");
      } catch {
      }
    }();
    e.exports = u;
  }(Q, Q.exports)), Q.exports;
}
var Mr, Ca;
function $i() {
  if (Ca) return Mr;
  Ca = 1;
  var e = Fu(), r = Vt(), t = Wt(), n = t && t.isTypedArray, a = n ? r(n) : e;
  return Mr = a, Mr;
}
var Nr, Oa;
function Vi() {
  if (Oa) return Nr;
  Oa = 1;
  var e = Ru(), r = wu(), t = _e(), n = $t(), a = Pu(), i = $i(), s = Object.prototype, u = s.hasOwnProperty;
  function o(c, f) {
    var l = t(c), d = !l && r(c), g = !l && !d && n(c), C = !l && !d && !g && i(c), A = l || d || g || C, m = A ? e(c.length, String) : [], b = m.length;
    for (var v in c)
      (f || u.call(c, v)) && !(A && // Safari 9 has enumerable `arguments.length` in strict mode.
      (v == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      g && (v == "offset" || v == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      C && (v == "buffer" || v == "byteLength" || v == "byteOffset") || // Skip index properties.
      a(v, b))) && m.push(v);
    return m;
  }
  return Nr = o, Nr;
}
var Br, ja;
function zt() {
  if (ja) return Br;
  ja = 1;
  var e = Object.prototype;
  function r(t) {
    var n = t && t.constructor, a = typeof n == "function" && n.prototype || e;
    return t === a;
  }
  return Br = r, Br;
}
var Gr, Ra;
function Wi() {
  if (Ra) return Gr;
  Ra = 1;
  function e(r, t) {
    return function(n) {
      return r(t(n));
    };
  }
  return Gr = e, Gr;
}
var Ur, Ia;
function xu() {
  if (Ia) return Ur;
  Ia = 1;
  var e = Wi(), r = e(Object.keys, Object);
  return Ur = r, Ur;
}
var Kr, wa;
function Lu() {
  if (wa) return Kr;
  wa = 1;
  var e = zt(), r = xu(), t = Object.prototype, n = t.hasOwnProperty;
  function a(i) {
    if (!e(i))
      return r(i);
    var s = [];
    for (var u in Object(i))
      n.call(i, u) && u != "constructor" && s.push(u);
    return s;
  }
  return Kr = a, Kr;
}
var Hr, Ea;
function zi() {
  if (Ea) return Hr;
  Ea = 1;
  var e = xi(), r = Hi();
  function t(n) {
    return n != null && r(n.length) && !e(n);
  }
  return Hr = t, Hr;
}
var $r, Pa;
function kt() {
  if (Pa) return $r;
  Pa = 1;
  var e = Vi(), r = Lu(), t = zi();
  function n(a) {
    return t(a) ? e(a) : r(a);
  }
  return $r = n, $r;
}
var Vr, Fa;
function ki() {
  if (Fa) return Vr;
  Fa = 1;
  var e = Ui(), r = Ht(), t = kt();
  function n(a) {
    return e(a, t, r);
  }
  return Vr = n, Vr;
}
var Wr, xa;
function Du() {
  if (xa) return Wr;
  xa = 1;
  var e = ki(), r = 1, t = Object.prototype, n = t.hasOwnProperty;
  function a(i, s, u, o, c, f) {
    var l = u & r, d = e(i), g = d.length, C = e(s), A = C.length;
    if (g != A && !l)
      return !1;
    for (var m = g; m--; ) {
      var b = d[m];
      if (!(l ? b in s : n.call(s, b)))
        return !1;
    }
    var v = f.get(i), O = f.get(s);
    if (v && O)
      return v == s && O == i;
    var y = !0;
    f.set(i, s), f.set(s, i);
    for (var j = l; ++m < g; ) {
      b = d[m];
      var _ = i[b], p = s[b];
      if (o)
        var I = l ? o(p, _, b, s, i, f) : o(_, p, b, i, s, f);
      if (!(I === void 0 ? _ === p || c(_, p, u, o, f) : I)) {
        y = !1;
        break;
      }
      j || (j = b == "constructor");
    }
    if (y && !j) {
      var S = i.constructor, E = s.constructor;
      S != E && "constructor" in i && "constructor" in s && !(typeof S == "function" && S instanceof S && typeof E == "function" && E instanceof E) && (y = !1);
    }
    return f.delete(i), f.delete(s), y;
  }
  return Wr = a, Wr;
}
var zr, La;
function Mu() {
  if (La) return zr;
  La = 1;
  var e = U(), r = D(), t = e(r, "DataView");
  return zr = t, zr;
}
var kr, Da;
function Nu() {
  if (Da) return kr;
  Da = 1;
  var e = U(), r = D(), t = e(r, "Promise");
  return kr = t, kr;
}
var Jr, Ma;
function Bu() {
  if (Ma) return Jr;
  Ma = 1;
  var e = U(), r = D(), t = e(r, "Set");
  return Jr = t, Jr;
}
var Qr, Na;
function Gu() {
  if (Na) return Qr;
  Na = 1;
  var e = U(), r = D(), t = e(r, "WeakMap");
  return Qr = t, Qr;
}
var Yr, Ba;
function ge() {
  if (Ba) return Yr;
  Ba = 1;
  var e = Mu(), r = Kt(), t = Nu(), n = Bu(), a = Gu(), i = he(), s = Li(), u = "[object Map]", o = "[object Object]", c = "[object Promise]", f = "[object Set]", l = "[object WeakMap]", d = "[object DataView]", g = s(e), C = s(r), A = s(t), m = s(n), b = s(a), v = i;
  return (e && v(new e(new ArrayBuffer(1))) != d || r && v(new r()) != u || t && v(t.resolve()) != c || n && v(new n()) != f || a && v(new a()) != l) && (v = function(O) {
    var y = i(O), j = y == o ? O.constructor : void 0, _ = j ? s(j) : "";
    if (_)
      switch (_) {
        case g:
          return d;
        case C:
          return u;
        case A:
          return c;
        case m:
          return f;
        case b:
          return l;
      }
    return y;
  }), Yr = v, Yr;
}
var Xr, Ga;
function Uu() {
  if (Ga) return Xr;
  Ga = 1;
  var e = Mi(), r = Ni(), t = Ou(), n = Du(), a = ge(), i = _e(), s = $t(), u = $i(), o = 1, c = "[object Arguments]", f = "[object Array]", l = "[object Object]", d = Object.prototype, g = d.hasOwnProperty;
  function C(A, m, b, v, O, y) {
    var j = i(A), _ = i(m), p = j ? f : a(A), I = _ ? f : a(m);
    p = p == c ? l : p, I = I == c ? l : I;
    var S = p == l, E = I == l, h = p == I;
    if (h && s(A)) {
      if (!s(m))
        return !1;
      j = !0, S = !1;
    }
    if (h && !S)
      return y || (y = new e()), j || u(A) ? r(A, m, b, v, O, y) : t(A, m, p, b, v, O, y);
    if (!(b & o)) {
      var w = S && g.call(A, "__wrapped__"), F = E && g.call(m, "__wrapped__");
      if (w || F) {
        var K = w ? A.value() : A, H = F ? m.value() : m;
        return y || (y = new e()), O(K, H, b, v, y);
      }
    }
    return h ? (y || (y = new e()), n(A, m, b, v, O, y)) : !1;
  }
  return Xr = C, Xr;
}
var Zr, Ua;
function Ku() {
  if (Ua) return Zr;
  Ua = 1;
  var e = Uu(), r = k();
  function t(n, a, i, s, u) {
    return n === a ? !0 : n == null || a == null || !r(n) && !r(a) ? n !== n && a !== a : e(n, a, i, s, t, u);
  }
  return Zr = t, Zr;
}
var et, Ka;
function Hu() {
  if (Ka) return et;
  Ka = 1;
  var e = Ku();
  function r(t, n) {
    return e(t, n);
  }
  return et = r, et;
}
var $u = Hu();
const Vu = /* @__PURE__ */ Pi($u);
var rt, Ha;
function Wu() {
  if (Ha) return rt;
  Ha = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length; ++n < a && t(r[n], n, r) !== !1; )
      ;
    return r;
  }
  return rt = e, rt;
}
var tt, $a;
function zu() {
  if ($a) return tt;
  $a = 1;
  var e = U(), r = function() {
    try {
      var t = e(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {
    }
  }();
  return tt = r, tt;
}
var nt, Va;
function Ji() {
  if (Va) return nt;
  Va = 1;
  var e = zu();
  function r(t, n, a) {
    n == "__proto__" && e ? e(t, n, {
      configurable: !0,
      enumerable: !0,
      value: a,
      writable: !0
    }) : t[n] = a;
  }
  return nt = r, nt;
}
var at, Wa;
function Qi() {
  if (Wa) return at;
  Wa = 1;
  var e = Ji(), r = Ut(), t = Object.prototype, n = t.hasOwnProperty;
  function a(i, s, u) {
    var o = i[s];
    (!(n.call(i, s) && r(o, u)) || u === void 0 && !(s in i)) && e(i, s, u);
  }
  return at = a, at;
}
var it, za;
function be() {
  if (za) return it;
  za = 1;
  var e = Qi(), r = Ji();
  function t(n, a, i, s) {
    var u = !i;
    i || (i = {});
    for (var o = -1, c = a.length; ++o < c; ) {
      var f = a[o], l = s ? s(i[f], n[f], f, i, n) : void 0;
      l === void 0 && (l = n[f]), u ? r(i, f, l) : e(i, f, l);
    }
    return i;
  }
  return it = t, it;
}
var st, ka;
function ku() {
  if (ka) return st;
  ka = 1;
  var e = be(), r = kt();
  function t(n, a) {
    return n && e(a, r(a), n);
  }
  return st = t, st;
}
var ut, Ja;
function Ju() {
  if (Ja) return ut;
  Ja = 1;
  function e(r) {
    var t = [];
    if (r != null)
      for (var n in Object(r))
        t.push(n);
    return t;
  }
  return ut = e, ut;
}
var ot, Qa;
function Qu() {
  if (Qa) return ot;
  Qa = 1;
  var e = Z(), r = zt(), t = Ju(), n = Object.prototype, a = n.hasOwnProperty;
  function i(s) {
    if (!e(s))
      return t(s);
    var u = r(s), o = [];
    for (var c in s)
      c == "constructor" && (u || !a.call(s, c)) || o.push(c);
    return o;
  }
  return ot = i, ot;
}
var ct, Ya;
function Jt() {
  if (Ya) return ct;
  Ya = 1;
  var e = Vi(), r = Qu(), t = zi();
  function n(a) {
    return t(a) ? e(a, !0) : r(a);
  }
  return ct = n, ct;
}
var ft, Xa;
function Yu() {
  if (Xa) return ft;
  Xa = 1;
  var e = be(), r = Jt();
  function t(n, a) {
    return n && e(a, r(a), n);
  }
  return ft = t, ft;
}
var Y = { exports: {} };
Y.exports;
var Za;
function Xu() {
  return Za || (Za = 1, function(e, r) {
    var t = D(), n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, s = i ? t.Buffer : void 0, u = s ? s.allocUnsafe : void 0;
    function o(c, f) {
      if (f)
        return c.slice();
      var l = c.length, d = u ? u(l) : new c.constructor(l);
      return c.copy(d), d;
    }
    e.exports = o;
  }(Y, Y.exports)), Y.exports;
}
var lt, ei;
function Zu() {
  if (ei) return lt;
  ei = 1;
  function e(r, t) {
    var n = -1, a = r.length;
    for (t || (t = Array(a)); ++n < a; )
      t[n] = r[n];
    return t;
  }
  return lt = e, lt;
}
var dt, ri;
function eo() {
  if (ri) return dt;
  ri = 1;
  var e = be(), r = Ht();
  function t(n, a) {
    return e(n, r(n), a);
  }
  return dt = t, dt;
}
var vt, ti;
function Yi() {
  if (ti) return vt;
  ti = 1;
  var e = Wi(), r = e(Object.getPrototypeOf, Object);
  return vt = r, vt;
}
var ht, ni;
function Xi() {
  if (ni) return ht;
  ni = 1;
  var e = Gi(), r = Yi(), t = Ht(), n = Ki(), a = Object.getOwnPropertySymbols, i = a ? function(s) {
    for (var u = []; s; )
      e(u, t(s)), s = r(s);
    return u;
  } : n;
  return ht = i, ht;
}
var pt, ai;
function ro() {
  if (ai) return pt;
  ai = 1;
  var e = be(), r = Xi();
  function t(n, a) {
    return e(n, r(n), a);
  }
  return pt = t, pt;
}
var yt, ii;
function to() {
  if (ii) return yt;
  ii = 1;
  var e = Ui(), r = Xi(), t = Jt();
  function n(a) {
    return e(a, t, r);
  }
  return yt = n, yt;
}
var _t, si;
function no() {
  if (si) return _t;
  si = 1;
  var e = Object.prototype, r = e.hasOwnProperty;
  function t(n) {
    var a = n.length, i = new n.constructor(a);
    return a && typeof n[0] == "string" && r.call(n, "index") && (i.index = n.index, i.input = n.input), i;
  }
  return _t = t, _t;
}
var gt, ui;
function Qt() {
  if (ui) return gt;
  ui = 1;
  var e = Bi();
  function r(t) {
    var n = new t.constructor(t.byteLength);
    return new e(n).set(new e(t)), n;
  }
  return gt = r, gt;
}
var bt, oi;
function ao() {
  if (oi) return bt;
  oi = 1;
  var e = Qt();
  function r(t, n) {
    var a = n ? e(t.buffer) : t.buffer;
    return new t.constructor(a, t.byteOffset, t.byteLength);
  }
  return bt = r, bt;
}
var mt, ci;
function io() {
  if (ci) return mt;
  ci = 1;
  var e = /\w*$/;
  function r(t) {
    var n = new t.constructor(t.source, e.exec(t));
    return n.lastIndex = t.lastIndex, n;
  }
  return mt = r, mt;
}
var qt, fi;
function so() {
  if (fi) return qt;
  fi = 1;
  var e = ve(), r = e ? e.prototype : void 0, t = r ? r.valueOf : void 0;
  function n(a) {
    return t ? Object(t.call(a)) : {};
  }
  return qt = n, qt;
}
var At, li;
function uo() {
  if (li) return At;
  li = 1;
  var e = Qt();
  function r(t, n) {
    var a = n ? e(t.buffer) : t.buffer;
    return new t.constructor(a, t.byteOffset, t.length);
  }
  return At = r, At;
}
var St, di;
function oo() {
  if (di) return St;
  di = 1;
  var e = Qt(), r = ao(), t = io(), n = so(), a = uo(), i = "[object Boolean]", s = "[object Date]", u = "[object Map]", o = "[object Number]", c = "[object RegExp]", f = "[object Set]", l = "[object String]", d = "[object Symbol]", g = "[object ArrayBuffer]", C = "[object DataView]", A = "[object Float32Array]", m = "[object Float64Array]", b = "[object Int8Array]", v = "[object Int16Array]", O = "[object Int32Array]", y = "[object Uint8Array]", j = "[object Uint8ClampedArray]", _ = "[object Uint16Array]", p = "[object Uint32Array]";
  function I(S, E, h) {
    var w = S.constructor;
    switch (E) {
      case g:
        return e(S);
      case i:
      case s:
        return new w(+S);
      case C:
        return r(S, h);
      case A:
      case m:
      case b:
      case v:
      case O:
      case y:
      case j:
      case _:
      case p:
        return a(S, h);
      case u:
        return new w();
      case o:
      case l:
        return new w(S);
      case c:
        return t(S);
      case f:
        return new w();
      case d:
        return n(S);
    }
  }
  return St = I, St;
}
var Tt, vi;
function co() {
  if (vi) return Tt;
  vi = 1;
  var e = Z(), r = Object.create, t = /* @__PURE__ */ function() {
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
  return Tt = t, Tt;
}
var Ct, hi;
function fo() {
  if (hi) return Ct;
  hi = 1;
  var e = co(), r = Yi(), t = zt();
  function n(a) {
    return typeof a.constructor == "function" && !t(a) ? e(r(a)) : {};
  }
  return Ct = n, Ct;
}
var Ot, pi;
function lo() {
  if (pi) return Ot;
  pi = 1;
  var e = ge(), r = k(), t = "[object Map]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return Ot = n, Ot;
}
var jt, yi;
function vo() {
  if (yi) return jt;
  yi = 1;
  var e = lo(), r = Vt(), t = Wt(), n = t && t.isMap, a = n ? r(n) : e;
  return jt = a, jt;
}
var Rt, _i;
function ho() {
  if (_i) return Rt;
  _i = 1;
  var e = ge(), r = k(), t = "[object Set]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return Rt = n, Rt;
}
var It, gi;
function po() {
  if (gi) return It;
  gi = 1;
  var e = ho(), r = Vt(), t = Wt(), n = t && t.isSet, a = n ? r(n) : e;
  return It = a, It;
}
var wt, bi;
function yo() {
  if (bi) return wt;
  bi = 1;
  var e = Mi(), r = Wu(), t = Qi(), n = ku(), a = Yu(), i = Xu(), s = Zu(), u = eo(), o = ro(), c = ki(), f = to(), l = ge(), d = no(), g = oo(), C = fo(), A = _e(), m = $t(), b = vo(), v = Z(), O = po(), y = kt(), j = Jt(), _ = 1, p = 2, I = 4, S = "[object Arguments]", E = "[object Array]", h = "[object Boolean]", w = "[object Date]", F = "[object Error]", K = "[object Function]", H = "[object GeneratorFunction]", me = "[object Map]", ls = "[object Number]", Zt = "[object Object]", ds = "[object RegExp]", vs = "[object Set]", hs = "[object String]", ps = "[object Symbol]", ys = "[object WeakMap]", _s = "[object ArrayBuffer]", gs = "[object DataView]", bs = "[object Float32Array]", ms = "[object Float64Array]", qs = "[object Int8Array]", As = "[object Int16Array]", Ss = "[object Int32Array]", Ts = "[object Uint8Array]", Cs = "[object Uint8ClampedArray]", Os = "[object Uint16Array]", js = "[object Uint32Array]", T = {};
  T[S] = T[E] = T[_s] = T[gs] = T[h] = T[w] = T[bs] = T[ms] = T[qs] = T[As] = T[Ss] = T[me] = T[ls] = T[Zt] = T[ds] = T[vs] = T[hs] = T[ps] = T[Ts] = T[Cs] = T[Os] = T[js] = !0, T[F] = T[K] = T[ys] = !1;
  function ee(q, $, V, Rs, re, N) {
    var P, te = $ & _, ne = $ & p, Is = $ & I;
    if (V && (P = re ? V(q, Rs, re, N) : V(q)), P !== void 0)
      return P;
    if (!v(q))
      return q;
    var en = A(q);
    if (en) {
      if (P = d(q), !te)
        return s(q, P);
    } else {
      var W = l(q), rn = W == K || W == H;
      if (m(q))
        return i(q, te);
      if (W == Zt || W == S || rn && !re) {
        if (P = ne || rn ? {} : C(q), !te)
          return ne ? o(q, a(P, q)) : u(q, n(P, q));
      } else {
        if (!T[W])
          return re ? q : {};
        P = g(q, W, te);
      }
    }
    N || (N = new e());
    var tn = N.get(q);
    if (tn)
      return tn;
    N.set(q, P), O(q) ? q.forEach(function(B) {
      P.add(ee(B, $, V, B, q, N));
    }) : b(q) && q.forEach(function(B, G) {
      P.set(G, ee(B, $, V, G, q, N));
    });
    var ws = Is ? ne ? f : c : ne ? j : y, nn = en ? void 0 : ws(q);
    return r(nn || q, function(B, G) {
      nn && (G = B, B = q[G]), t(P, G, ee(B, $, V, G, q, N));
    }), P;
  }
  return wt = ee, wt;
}
var Et, mi;
function _o() {
  if (mi) return Et;
  mi = 1;
  var e = yo(), r = 1, t = 4;
  function n(a) {
    return e(a, r | t);
  }
  return Et = n, Et;
}
var go = _o();
const qi = /* @__PURE__ */ Pi(go);
function bo(e) {
  return xs() ? (Ls(e), !0) : !1;
}
function mo(e) {
  if (!qe(e))
    return se(e);
  const r = new Proxy({}, {
    get(t, n, a) {
      return fe(Reflect.get(e.value, n, a));
    },
    set(t, n, a) {
      return qe(e.value[n]) && !qe(a) ? e.value[n].value = a : e.value[n] = a, !0;
    },
    deleteProperty(t, n) {
      return Reflect.deleteProperty(e.value, n);
    },
    has(t, n) {
      return Reflect.has(e.value, n);
    },
    ownKeys() {
      return Object.keys(e.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: !0,
        configurable: !0
      };
    }
  });
  return se(r);
}
function qo(e) {
  return mo(x(e));
}
function Ao(e, ...r) {
  const t = r.flat(), n = t[0];
  return qo(() => Object.fromEntries(typeof n == "function" ? Object.entries(sn(e)).filter(([a, i]) => !n(L(i), a)) : Object.entries(sn(e)).filter((a) => !t.includes(a[0]))));
}
const So = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const To = Object.prototype.toString, Co = (e) => To.call(e) === "[object Object]", Ai = () => {
};
function Oo(e, r) {
  function t(...n) {
    return new Promise((a, i) => {
      Promise.resolve(e(() => r.apply(this, n), { fn: r, thisArg: this, args: n })).then(a).catch(i);
    });
  }
  return t;
}
function jo(e, r = {}) {
  let t, n, a = Ai;
  const i = (o) => {
    clearTimeout(o), a(), a = Ai;
  };
  let s;
  return (o) => {
    const c = L(e), f = L(r.maxWait);
    return t && i(t), c <= 0 || f !== void 0 && f <= 0 ? (n && (i(n), n = void 0), Promise.resolve(o())) : new Promise((l, d) => {
      a = r.rejectOnCancel ? d : l, s = o, f && !n && (n = setTimeout(() => {
        t && i(t), n = void 0, l(s());
      }, f)), t = setTimeout(() => {
        n && i(n), n = void 0, l(o());
      }, c);
    });
  };
}
function Ro(e) {
  return Object.entries(e);
}
function Pt(e) {
  return Array.isArray(e) ? e : [e];
}
function Io(e, r = 200, t = {}) {
  return Oo(
    jo(r, t),
    e
  );
}
function wo(e, r, t) {
  return z(
    e,
    r,
    {
      ...t,
      immediate: !0
    }
  );
}
const Zi = So ? window : void 0;
function Eo(e) {
  var r;
  const t = L(e);
  return (r = t == null ? void 0 : t.$el) != null ? r : t;
}
function Si(...e) {
  const r = [], t = () => {
    r.forEach((u) => u()), r.length = 0;
  }, n = (u, o, c, f) => (u.addEventListener(o, c, f), () => u.removeEventListener(o, c, f)), a = x(() => {
    const u = Pt(L(e[0])).filter((o) => o != null);
    return u.every((o) => typeof o != "string") ? u : void 0;
  }), i = wo(
    () => {
      var u, o;
      return [
        (o = (u = a.value) == null ? void 0 : u.map((c) => Eo(c))) != null ? o : [Zi].filter((c) => c != null),
        Pt(L(a.value ? e[1] : e[0])),
        Pt(fe(a.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        L(a.value ? e[3] : e[2])
      ];
    },
    ([u, o, c, f]) => {
      if (t(), !(u != null && u.length) || !(o != null && o.length) || !(c != null && c.length))
        return;
      const l = Co(f) ? { ...f } : f;
      r.push(
        ...u.flatMap(
          (d) => o.flatMap(
            (g) => c.map((C) => n(d, g, C, l))
          )
        )
      );
    },
    { flush: "post" }
  ), s = () => {
    i(), t();
  };
  return bo(t), s;
}
const Ti = [
  "hash",
  "host",
  "hostname",
  "href",
  "pathname",
  "port",
  "protocol",
  "search"
];
function es(e = {}) {
  const { window: r = Zi } = e, t = Object.fromEntries(
    Ti.map((i) => [i, xt()])
  );
  for (const [i, s] of Ro(t))
    z(s, (u) => {
      !(r != null && r.location) || r.location[i] === u || (r.location[i] = u);
    });
  const n = (i) => {
    var s;
    const { state: u, length: o } = (r == null ? void 0 : r.history) || {}, { origin: c } = (r == null ? void 0 : r.location) || {};
    for (const f of Ti)
      t[f].value = (s = r == null ? void 0 : r.location) == null ? void 0 : s[f];
    return se({
      trigger: i,
      state: u,
      length: o,
      origin: c,
      ...t
    });
  }, a = xt(n("load"));
  if (r) {
    const i = { passive: !0 };
    Si(r, "popstate", () => a.value = n("popstate"), i), Si(r, "hashchange", () => a.value = n("hashchange"), i);
  }
  return a;
}
const Jo = {
  visit(e, r) {
    return new Promise((t, n) => {
      Ii.visit(e, {
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
function Po(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Ft(e, r, t) {
  return e.replace(new RegExp(Po(r), "g"), t);
}
function Qo(e, r, t) {
  Object.keys(r).forEach((n) => {
    const a = `${t}${Ft(Ft(Ft(n, "./", ""), "/", ""), ".vue", "")}`;
    e.component(a, r[n].default);
  });
}
const rs = "%[a-f0-9]{2}", Ci = new RegExp("(" + rs + ")|([^%]+?)", "gi"), Oi = new RegExp("(" + rs + ")+", "gi");
function Mt(e, r) {
  try {
    return [decodeURIComponent(e.join(""))];
  } catch {
  }
  if (e.length === 1)
    return e;
  r = r || 1;
  const t = e.slice(0, r), n = e.slice(r);
  return Array.prototype.concat.call([], Mt(t), Mt(n));
}
function Fo(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    let r = e.match(Ci) || [];
    for (let t = 1; t < r.length; t++)
      e = Mt(r, t).join(""), r = e.match(Ci) || [];
    return e;
  }
}
function xo(e) {
  const r = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  };
  let t = Oi.exec(e);
  for (; t; ) {
    try {
      r[t[0]] = decodeURIComponent(t[0]);
    } catch {
      const a = Fo(t[0]);
      a !== t[0] && (r[t[0]] = a);
    }
    t = Oi.exec(e);
  }
  r["%C2"] = "�";
  const n = Object.keys(r);
  for (const a of n)
    e = e.replace(new RegExp(a, "g"), r[a]);
  return e;
}
function Lo(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
  try {
    return decodeURIComponent(e);
  } catch {
    return xo(e);
  }
}
function Do(e, r) {
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
function ts(e, r) {
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
const Mo = (e) => e == null, No = (e) => encodeURIComponent(e).replaceAll(/[!'()*]/g, (r) => `%${r.charCodeAt(0).toString(16).toUpperCase()}`), Nt = Symbol("encodeFragmentIdentifier");
function Bo(e) {
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
function Go(e) {
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
        const i = typeof n == "string" && n.includes(e.arrayFormatSeparator), s = typeof n == "string" && !i && M(n, e).includes(e.arrayFormatSeparator);
        n = s ? M(n, e) : n;
        const u = i || s ? n.split(e.arrayFormatSeparator).map((o) => M(o, e)) : n === null ? n : M(n, e);
        a[t] = u;
      };
    case "bracket-separator":
      return (t, n, a) => {
        const i = /(\[])$/.test(t);
        if (t = t.replace(/\[]$/, ""), !i) {
          a[t] = n && M(n, e);
          return;
        }
        const s = n === null ? [] : M(n, e).split(e.arrayFormatSeparator);
        if (a[t] === void 0) {
          a[t] = s;
          return;
        }
        a[t] = [...a[t], ...s];
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
function ns(e) {
  if (typeof e != "string" || e.length !== 1)
    throw new TypeError("arrayFormatSeparator must be single character string");
}
function R(e, r) {
  return r.encode ? r.strict ? No(e) : encodeURIComponent(e) : e;
}
function M(e, r) {
  return r.decode ? Lo(e) : e;
}
function as(e) {
  return Array.isArray(e) ? e.sort() : typeof e == "object" ? as(Object.keys(e)).sort((r, t) => Number(r) - Number(t)).map((r) => e[r]) : e;
}
function is(e) {
  const r = e.indexOf("#");
  return r !== -1 && (e = e.slice(0, r)), e;
}
function Uo(e) {
  let r = "";
  const t = e.indexOf("#");
  return t !== -1 && (r = e.slice(t)), r;
}
function ji(e, r, t) {
  return t === "string" && typeof e == "string" ? e : typeof t == "function" && typeof e == "string" ? t(e) : t === "boolean" && e === null ? !0 : t === "boolean" && e !== null && (e.toLowerCase() === "true" || e.toLowerCase() === "false") ? e.toLowerCase() === "true" : t === "boolean" && e !== null && (e.toLowerCase() === "1" || e.toLowerCase() === "0") ? e.toLowerCase() === "1" : t === "string[]" && r.arrayFormat !== "none" && typeof e == "string" ? [e] : t === "number[]" && r.arrayFormat !== "none" && !Number.isNaN(Number(e)) && typeof e == "string" && e.trim() !== "" ? [Number(e)] : t === "number" && !Number.isNaN(Number(e)) && typeof e == "string" && e.trim() !== "" ? Number(e) : r.parseBooleans && e !== null && (e.toLowerCase() === "true" || e.toLowerCase() === "false") ? e.toLowerCase() === "true" : r.parseNumbers && !Number.isNaN(Number(e)) && typeof e == "string" && e.trim() !== "" ? Number(e) : e;
}
function Yt(e) {
  e = is(e);
  const r = e.indexOf("?");
  return r === -1 ? "" : e.slice(r + 1);
}
function Xt(e, r) {
  r = {
    decode: !0,
    sort: !0,
    arrayFormat: "none",
    arrayFormatSeparator: ",",
    parseNumbers: !1,
    parseBooleans: !1,
    types: /* @__PURE__ */ Object.create(null),
    ...r
  }, ns(r.arrayFormatSeparator);
  const t = Go(r), n = /* @__PURE__ */ Object.create(null);
  if (typeof e != "string" || (e = e.trim().replace(/^[?#&]/, ""), !e))
    return n;
  for (const a of e.split("&")) {
    if (a === "")
      continue;
    const i = r.decode ? a.replaceAll("+", " ") : a;
    let [s, u] = ts(i, "=");
    s === void 0 && (s = i), u = u === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(r.arrayFormat) ? u : M(u, r), t(M(s, r), u, n);
  }
  for (const [a, i] of Object.entries(n))
    if (typeof i == "object" && i !== null && r.types[a] !== "string")
      for (const [s, u] of Object.entries(i)) {
        const o = r.types[a] ? r.types[a].replace("[]", "") : void 0;
        i[s] = ji(u, r, o);
      }
    else typeof i == "object" && i !== null && r.types[a] === "string" ? n[a] = Object.values(i).join(r.arrayFormatSeparator) : n[a] = ji(i, r, r.types[a]);
  return r.sort === !1 ? n : (r.sort === !0 ? Object.keys(n).sort() : Object.keys(n).sort(r.sort)).reduce((a, i) => {
    const s = n[i];
    return a[i] = s && typeof s == "object" && !Array.isArray(s) ? as(s) : s, a;
  }, /* @__PURE__ */ Object.create(null));
}
function ss(e, r) {
  if (!e)
    return "";
  r = {
    encode: !0,
    strict: !0,
    arrayFormat: "none",
    arrayFormatSeparator: ",",
    ...r
  }, ns(r.arrayFormatSeparator);
  const t = (s) => r.skipNull && Mo(e[s]) || r.skipEmptyString && e[s] === "", n = Bo(r), a = {};
  for (const [s, u] of Object.entries(e))
    t(s) || (a[s] = u);
  const i = Object.keys(a);
  return r.sort !== !1 && i.sort(r.sort), i.map((s) => {
    const u = e[s];
    return u === void 0 ? "" : u === null ? R(s, r) : Array.isArray(u) ? u.length === 0 && r.arrayFormat === "bracket-separator" ? R(s, r) + "[]" : u.reduce(n(s), []).join("&") : R(s, r) + "=" + R(u, r);
  }).filter((s) => s.length > 0).join("&");
}
function us(e, r) {
  var a;
  r = {
    decode: !0,
    ...r
  };
  let [t, n] = ts(e, "#");
  return t === void 0 && (t = e), {
    url: ((a = t == null ? void 0 : t.split("?")) == null ? void 0 : a[0]) ?? "",
    query: Xt(Yt(e), r),
    ...r && r.parseFragmentIdentifier && n ? { fragmentIdentifier: M(n, r) } : {}
  };
}
function os(e, r) {
  r = {
    encode: !0,
    strict: !0,
    [Nt]: !0,
    ...r
  };
  const t = is(e.url).split("?")[0] || "", n = Yt(e.url), a = {
    ...Xt(n, { sort: !1, ...r }),
    ...e.query
  };
  let i = ss(a, r);
  i && (i = `?${i}`);
  let s = Uo(e.url);
  if (typeof e.fragmentIdentifier == "string") {
    const u = new URL(t);
    u.hash = e.fragmentIdentifier, s = r[Nt] ? u.hash : `#${e.fragmentIdentifier}`;
  }
  return `${t}${i}${s}`;
}
function cs(e, r, t) {
  t = {
    parseFragmentIdentifier: !0,
    [Nt]: !1,
    ...t
  };
  const { url: n, query: a, fragmentIdentifier: i } = us(e, t);
  return os({
    url: n,
    query: Do(a, r),
    fragmentIdentifier: i
  }, t);
}
function Ko(e, r, t) {
  const n = Array.isArray(r) ? (a) => !r.includes(a) : (a, i) => !r(a, i);
  return cs(e, n, t);
}
const fs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exclude: Ko,
  extract: Yt,
  parse: Xt,
  parseUrl: us,
  pick: cs,
  stringify: ss,
  stringifyUrl: os
}, Symbol.toStringTag, { value: "Module" }));
function Bt() {
  return fs.parse(location.search, {
    arrayFormat: "index",
    parseNumbers: !0
  });
}
function Ho(e) {
  return fs.stringify(e, {
    arrayFormat: "index"
  });
}
function Yo(e) {
  const r = Bt();
  return e in r ? r[e] : null;
}
function $o(e) {
  const r = window.location.href.split("?")[0];
  return Object.keys(e).length > 0 ? `${r}?${Ho(e)}` : r;
}
const Ri = (e) => Array.isArray(e) && e.length === 0, ie = (e, r) => r === "" || r === void 0 || r === null || Ri(r) || r === !1 ? e === "" || e === void 0 || e === null || Ri(e) || e === !1 : Vu(e, r);
function Xo(e, r) {
  const t = qi(typeof e == "object" ? e : e()), n = () => {
    const f = Bt();
    return Object.keys(t).reduce((l, d) => (ie(f[d], t[d]) || f[d] === void 0 ? l[d] = t[d] : l[d] = f[d], l), {});
  }, a = (f) => Object.keys(t).some((l) => !ie(f[l], t[l])), i = n(), s = se({
    ...i,
    applied: a(i),
    appliedOnly(f) {
      const l = this.data();
      return f.some((d) => !ie(l[d], t[d]));
    },
    data() {
      return Object.keys(t).reduce((f, l) => (f[l] = this[l], f), {});
    },
    reset() {
      Object.keys(t).forEach((f) => {
        this[f] = t[f];
      }), this.applied = !1;
    }
  }), u = (f) => {
    const l = Bt();
    return Object.keys(f).forEach((d) => {
      const g = f[d], C = t[d];
      ie(g, C) || !g ? delete l[d] : l[d] = g;
    }), delete l.page, delete l.cursor, $o(l);
  };
  let o = null;
  const c = Io((f) => {
    o && (o.cancel(), o = null), Ii.visit(f, {
      preserveState: !0,
      preserveScroll: !0,
      onCancelToken: (l) => {
        o = l;
      },
      onSuccess: () => {
        s.applied = a(s.data()), r != null && r.onSuccess && r.onSuccess();
      }
    });
  }, 50);
  return z(s, () => {
    const f = window.location.href, l = u(s.data());
    f != l && (s.applied = a(s.data()), c(l));
  }), s;
}
function ue(e) {
  return typeof e == "object" && e !== null && "route" in e;
}
function oe(e) {
  return typeof e == "object" && e !== null && "url" in e;
}
function ce(e) {
  return typeof e == "object" && e !== null && "path" in e;
}
function Vo(e) {
  return typeof e == "function";
}
function Zo(e) {
  const r = wi(), t = es();
  return x(() => {
    const n = L(e), a = t.value.href;
    return X(n, r.url, a ? new URL(a) : null);
  });
}
function X(e, r, t) {
  if (Array.isArray(e))
    return e.some((n) => X(n, r, t));
  if (ce(e))
    return e.path === r;
  if (oe(e)) {
    if (t) {
      if (e.url.startsWith("/"))
        return e.url === t.pathname;
      const n = new URL(e.url);
      return `${n.host}${n.pathname}` == `${t.host}${t.pathname}`;
    }
    return !1;
  } else {
    if (ue(e))
      return route().current(e.route, e.params);
    if (typeof e == "function")
      return e();
  }
  return !1;
}
function ec(e) {
  const r = wi(), t = es(), n = x(() => r.url), a = x(() => {
    const c = t.value.href;
    return c ? new URL(c) : null;
  }), i = (c) => {
    if (c.active)
      return X(c.active, n.value, a.value);
    const f = c.action;
    if (f) {
      if (typeof f == "string")
        return X({ url: f }, n.value, a.value);
      if (ue(f) || oe(f) || ce(f))
        return X(f, n.value, a.value);
    }
    return !1;
  }, s = (c, f = !1) => c.children && c.children.some((l) => i(l)) ? !0 : f && c.children ? c.children.some((l) => s(l, !0)) : !1, u = (c) => {
    const f = c.children, l = f ? f.map((d) => u(d)) : [];
    return {
      ...c,
      isActive: i(c),
      isChildActive: s(c, !0),
      children: l,
      hasChildren: f ? f.length > 0 : !1
    };
  }, o = x(() => L(e));
  return x(() => o.value.map((c) => u(c)));
}
function rc(e = !1) {
  const r = xt(e);
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
function tc(e, r) {
  z(e.active, (t) => {
    t && r();
  });
}
function nc(e, r) {
  z(e.active, (t) => {
    t || r();
  });
}
const ac = /* @__PURE__ */ Gt({
  __name: "NavigationButton",
  props: {
    item: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["click"],
  setup(e, { emit: r }) {
    const t = r, n = e;
    Hs(x(() => n.item));
    const a = Ao(n, "item", "as"), i = x(() => {
      if (n.as !== void 0)
        return n.as;
      const o = n.item.action;
      if (o) {
        if (oe(o))
          return o.external === !0 ? "a" : un;
        if (ce(o) || ue(o))
          return un;
      }
      return "button";
    }), s = x(() => {
      const o = n.item.action, c = {};
      return o && (oe(o) ? (c.href = o.url, o.external !== !0 && (c.preserveScroll = o.preserveScroll, c.preserveState = o.preserveState)) : ce(o) ? (c.href = o.path, c.preserveScroll = o.preserveScroll, c.preserveState = o.preserveState) : ue(o) && (c.href = route(o.route, o.params), c.preserveScroll = o.preserveScroll, c.preserveState = o.preserveState)), { ...a, ...c };
    }), u = (o) => {
      const c = n.item.action;
      c && Vo(c) ? c(o) : t("click", o);
    };
    return (o, c) => (Dt(), Lt(fe(Us), Ds({ as: i.value }, s.value, {
      onClick: u,
      "data-active": o.item.isActive || o.item.isChildActive ? "active" : void 0,
      "data-state": o.item.isActive ? "active" : "inactive",
      "data-child-state": o.item.isChildActive ? "active" : "inactive"
    }), {
      default: Ms(() => [
        Ns(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "data-active", "data-state", "data-child-state"]));
  }
}), ic = /* @__PURE__ */ Gt({
  __name: "NavigationButtonIcon",
  setup(e) {
    const r = $s(), t = x(() => {
      var n;
      return (n = r.value) == null ? void 0 : n.icon;
    });
    return (n, a) => t.value && "src" in t.value ? (Dt(), Lt(fe(Ks), {
      key: 0,
      src: t.value.src
    }, null, 8, ["src"])) : t.value ? (Dt(), Lt(Gs(t.value), { key: 1 })) : Bs("", !0);
  }
});
export {
  Ks as Icon,
  ac as NavigationButton,
  ic as NavigationButtonIcon,
  Jo as asyncRouter,
  Ho as formatQuery,
  Yo as getValueFromQuery,
  X as isActivated,
  Vo as isEventAction,
  oe as isLinkAction,
  ce as isLinkPathAction,
  ue as isRouteAction,
  tc as onActivated,
  nc as onDeactivated,
  Bt as parseQuery,
  Qo as registerNamespacedComponents,
  $o as urlWithQuery,
  Zo as useActiveLink,
  Xo as useFilter,
  ec as useNavigation,
  rc as useToggle
};
//# sourceMappingURL=ui.js.map
