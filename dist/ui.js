import { defineComponent as Gt, shallowRef as an, watch as z, h as Eu, provide as Pu, inject as Fu, computed as x, toValue as M, isRef as me, reactive as ie, unref as ce, getCurrentScope as xu, onScopeDispose as Lu, toRefs as un, ref as xt, createBlock as Lt, openBlock as Dt, mergeProps as Du, withCtx as Mu, renderSlot as Nu, createCommentVNode as Bu, resolveDynamicComponent as Gu } from "vue";
import { router as Ii, usePage as wi, Link as sn } from "@inertiajs/vue3";
import { Primitive as Uu } from "reka-ui";
const Ku = Gt({
  props: {
    src: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const r = (u) => {
      const s = u.attributes, o = {};
      for (let c = 0; c < s.length; c++) {
        const f = s[c];
        o[f.name] = f.value;
      }
      return o;
    }, t = new DOMParser(), n = t.parseFromString(e.src, "image/svg+xml").documentElement, a = an(r(n)), i = an(n.innerHTML);
    return z(() => e.src, () => {
      const u = t.parseFromString(e.src, "image/svg+xml").documentElement;
      a.value = r(u), i.value = u.innerHTML;
    }), () => Eu("svg", { ...a.value, innerHTML: i.value });
  }
}), Ei = Symbol();
function Hu(e) {
  Pu(Ei, e);
}
function $u() {
  const e = Fu(Ei);
  return x(() => e ? M(e) : null);
}
var ae = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qe, on;
function Vu() {
  if (on) return qe;
  on = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return qe = e, qe;
}
var Ae, cn;
function Ut() {
  if (cn) return Ae;
  cn = 1;
  function e(r, t) {
    return r === t || r !== r && t !== t;
  }
  return Ae = e, Ae;
}
var Te, fn;
function fe() {
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
var Se, ln;
function Wu() {
  if (ln) return Se;
  ln = 1;
  var e = fe(), r = Array.prototype, t = r.splice;
  function n(a) {
    var i = this.__data__, u = e(i, a);
    if (u < 0)
      return !1;
    var s = i.length - 1;
    return u == s ? i.pop() : t.call(i, u, 1), --this.size, !0;
  }
  return Se = n, Se;
}
var Ce, dn;
function zu() {
  if (dn) return Ce;
  dn = 1;
  var e = fe();
  function r(t) {
    var n = this.__data__, a = e(n, t);
    return a < 0 ? void 0 : n[a][1];
  }
  return Ce = r, Ce;
}
var Oe, vn;
function ku() {
  if (vn) return Oe;
  vn = 1;
  var e = fe();
  function r(t) {
    return e(this.__data__, t) > -1;
  }
  return Oe = r, Oe;
}
var je, hn;
function Ju() {
  if (hn) return je;
  hn = 1;
  var e = fe();
  function r(t, n) {
    var a = this.__data__, i = e(a, t);
    return i < 0 ? (++this.size, a.push([t, n])) : a[i][1] = n, this;
  }
  return je = r, je;
}
var Re, yn;
function le() {
  if (yn) return Re;
  yn = 1;
  var e = Vu(), r = Wu(), t = zu(), n = ku(), a = Ju();
  function i(u) {
    var s = -1, o = u == null ? 0 : u.length;
    for (this.clear(); ++s < o; ) {
      var c = u[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, Re = i, Re;
}
var Ie, pn;
function Qu() {
  if (pn) return Ie;
  pn = 1;
  var e = le();
  function r() {
    this.__data__ = new e(), this.size = 0;
  }
  return Ie = r, Ie;
}
var we, _n;
function Yu() {
  if (_n) return we;
  _n = 1;
  function e(r) {
    var t = this.__data__, n = t.delete(r);
    return this.size = t.size, n;
  }
  return we = e, we;
}
var Ee, gn;
function Xu() {
  if (gn) return Ee;
  gn = 1;
  function e(r) {
    return this.__data__.get(r);
  }
  return Ee = e, Ee;
}
var Pe, bn;
function Zu() {
  if (bn) return Pe;
  bn = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return Pe = e, Pe;
}
var Fe, mn;
function Fi() {
  if (mn) return Fe;
  mn = 1;
  var e = typeof ae == "object" && ae && ae.Object === Object && ae;
  return Fe = e, Fe;
}
var xe, qn;
function L() {
  if (qn) return xe;
  qn = 1;
  var e = Fi(), r = typeof self == "object" && self && self.Object === Object && self, t = e || r || Function("return this")();
  return xe = t, xe;
}
var Le, An;
function de() {
  if (An) return Le;
  An = 1;
  var e = L(), r = e.Symbol;
  return Le = r, Le;
}
var De, Tn;
function es() {
  if (Tn) return De;
  Tn = 1;
  var e = de(), r = Object.prototype, t = r.hasOwnProperty, n = r.toString, a = e ? e.toStringTag : void 0;
  function i(u) {
    var s = t.call(u, a), o = u[a];
    try {
      u[a] = void 0;
      var c = !0;
    } catch {
    }
    var f = n.call(u);
    return c && (s ? u[a] = o : delete u[a]), f;
  }
  return De = i, De;
}
var Me, Sn;
function rs() {
  if (Sn) return Me;
  Sn = 1;
  var e = Object.prototype, r = e.toString;
  function t(n) {
    return r.call(n);
  }
  return Me = t, Me;
}
var Ne, Cn;
function ve() {
  if (Cn) return Ne;
  Cn = 1;
  var e = de(), r = es(), t = rs(), n = "[object Null]", a = "[object Undefined]", i = e ? e.toStringTag : void 0;
  function u(s) {
    return s == null ? s === void 0 ? a : n : i && i in Object(s) ? r(s) : t(s);
  }
  return Ne = u, Ne;
}
var Be, On;
function Z() {
  if (On) return Be;
  On = 1;
  function e(r) {
    var t = typeof r;
    return r != null && (t == "object" || t == "function");
  }
  return Be = e, Be;
}
var Ge, jn;
function xi() {
  if (jn) return Ge;
  jn = 1;
  var e = ve(), r = Z(), t = "[object AsyncFunction]", n = "[object Function]", a = "[object GeneratorFunction]", i = "[object Proxy]";
  function u(s) {
    if (!r(s))
      return !1;
    var o = e(s);
    return o == n || o == a || o == t || o == i;
  }
  return Ge = u, Ge;
}
var Ue, Rn;
function ts() {
  if (Rn) return Ue;
  Rn = 1;
  var e = L(), r = e["__core-js_shared__"];
  return Ue = r, Ue;
}
var Ke, In;
function ns() {
  if (In) return Ke;
  In = 1;
  var e = ts(), r = function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function t(n) {
    return !!r && r in n;
  }
  return Ke = t, Ke;
}
var He, wn;
function Li() {
  if (wn) return He;
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
  return He = t, He;
}
var $e, En;
function as() {
  if (En) return $e;
  En = 1;
  var e = xi(), r = ns(), t = Z(), n = Li(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, u = Function.prototype, s = Object.prototype, o = u.toString, c = s.hasOwnProperty, f = RegExp(
    "^" + o.call(c).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function l(d) {
    if (!t(d) || r(d))
      return !1;
    var g = e(d) ? f : i;
    return g.test(n(d));
  }
  return $e = l, $e;
}
var Ve, Pn;
function is() {
  if (Pn) return Ve;
  Pn = 1;
  function e(r, t) {
    return r == null ? void 0 : r[t];
  }
  return Ve = e, Ve;
}
var We, Fn;
function U() {
  if (Fn) return We;
  Fn = 1;
  var e = as(), r = is();
  function t(n, a) {
    var i = r(n, a);
    return e(i) ? i : void 0;
  }
  return We = t, We;
}
var ze, xn;
function Kt() {
  if (xn) return ze;
  xn = 1;
  var e = U(), r = L(), t = e(r, "Map");
  return ze = t, ze;
}
var ke, Ln;
function he() {
  if (Ln) return ke;
  Ln = 1;
  var e = U(), r = e(Object, "create");
  return ke = r, ke;
}
var Je, Dn;
function us() {
  if (Dn) return Je;
  Dn = 1;
  var e = he();
  function r() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Je = r, Je;
}
var Qe, Mn;
function ss() {
  if (Mn) return Qe;
  Mn = 1;
  function e(r) {
    var t = this.has(r) && delete this.__data__[r];
    return this.size -= t ? 1 : 0, t;
  }
  return Qe = e, Qe;
}
var Ye, Nn;
function os() {
  if (Nn) return Ye;
  Nn = 1;
  var e = he(), r = "__lodash_hash_undefined__", t = Object.prototype, n = t.hasOwnProperty;
  function a(i) {
    var u = this.__data__;
    if (e) {
      var s = u[i];
      return s === r ? void 0 : s;
    }
    return n.call(u, i) ? u[i] : void 0;
  }
  return Ye = a, Ye;
}
var Xe, Bn;
function cs() {
  if (Bn) return Xe;
  Bn = 1;
  var e = he(), r = Object.prototype, t = r.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return e ? i[a] !== void 0 : t.call(i, a);
  }
  return Xe = n, Xe;
}
var Ze, Gn;
function fs() {
  if (Gn) return Ze;
  Gn = 1;
  var e = he(), r = "__lodash_hash_undefined__";
  function t(n, a) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = e && a === void 0 ? r : a, this;
  }
  return Ze = t, Ze;
}
var er, Un;
function ls() {
  if (Un) return er;
  Un = 1;
  var e = us(), r = ss(), t = os(), n = cs(), a = fs();
  function i(u) {
    var s = -1, o = u == null ? 0 : u.length;
    for (this.clear(); ++s < o; ) {
      var c = u[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, er = i, er;
}
var rr, Kn;
function ds() {
  if (Kn) return rr;
  Kn = 1;
  var e = ls(), r = le(), t = Kt();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (t || r)(),
      string: new e()
    };
  }
  return rr = n, rr;
}
var tr, Hn;
function vs() {
  if (Hn) return tr;
  Hn = 1;
  function e(r) {
    var t = typeof r;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? r !== "__proto__" : r === null;
  }
  return tr = e, tr;
}
var nr, $n;
function ye() {
  if ($n) return nr;
  $n = 1;
  var e = vs();
  function r(t, n) {
    var a = t.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return nr = r, nr;
}
var ar, Vn;
function hs() {
  if (Vn) return ar;
  Vn = 1;
  var e = ye();
  function r(t) {
    var n = e(this, t).delete(t);
    return this.size -= n ? 1 : 0, n;
  }
  return ar = r, ar;
}
var ir, Wn;
function ys() {
  if (Wn) return ir;
  Wn = 1;
  var e = ye();
  function r(t) {
    return e(this, t).get(t);
  }
  return ir = r, ir;
}
var ur, zn;
function ps() {
  if (zn) return ur;
  zn = 1;
  var e = ye();
  function r(t) {
    return e(this, t).has(t);
  }
  return ur = r, ur;
}
var sr, kn;
function _s() {
  if (kn) return sr;
  kn = 1;
  var e = ye();
  function r(t, n) {
    var a = e(this, t), i = a.size;
    return a.set(t, n), this.size += a.size == i ? 0 : 1, this;
  }
  return sr = r, sr;
}
var or, Jn;
function Di() {
  if (Jn) return or;
  Jn = 1;
  var e = ds(), r = hs(), t = ys(), n = ps(), a = _s();
  function i(u) {
    var s = -1, o = u == null ? 0 : u.length;
    for (this.clear(); ++s < o; ) {
      var c = u[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, or = i, or;
}
var cr, Qn;
function gs() {
  if (Qn) return cr;
  Qn = 1;
  var e = le(), r = Kt(), t = Di(), n = 200;
  function a(i, u) {
    var s = this.__data__;
    if (s instanceof e) {
      var o = s.__data__;
      if (!r || o.length < n - 1)
        return o.push([i, u]), this.size = ++s.size, this;
      s = this.__data__ = new t(o);
    }
    return s.set(i, u), this.size = s.size, this;
  }
  return cr = a, cr;
}
var fr, Yn;
function Mi() {
  if (Yn) return fr;
  Yn = 1;
  var e = le(), r = Qu(), t = Yu(), n = Xu(), a = Zu(), i = gs();
  function u(s) {
    var o = this.__data__ = new e(s);
    this.size = o.size;
  }
  return u.prototype.clear = r, u.prototype.delete = t, u.prototype.get = n, u.prototype.has = a, u.prototype.set = i, fr = u, fr;
}
var lr, Xn;
function bs() {
  if (Xn) return lr;
  Xn = 1;
  var e = "__lodash_hash_undefined__";
  function r(t) {
    return this.__data__.set(t, e), this;
  }
  return lr = r, lr;
}
var dr, Zn;
function ms() {
  if (Zn) return dr;
  Zn = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return dr = e, dr;
}
var vr, ea;
function qs() {
  if (ea) return vr;
  ea = 1;
  var e = Di(), r = bs(), t = ms();
  function n(a) {
    var i = -1, u = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++i < u; )
      this.add(a[i]);
  }
  return n.prototype.add = n.prototype.push = r, n.prototype.has = t, vr = n, vr;
}
var hr, ra;
function As() {
  if (ra) return hr;
  ra = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length; ++n < a; )
      if (t(r[n], n, r))
        return !0;
    return !1;
  }
  return hr = e, hr;
}
var yr, ta;
function Ts() {
  if (ta) return yr;
  ta = 1;
  function e(r, t) {
    return r.has(t);
  }
  return yr = e, yr;
}
var pr, na;
function Ni() {
  if (na) return pr;
  na = 1;
  var e = qs(), r = As(), t = Ts(), n = 1, a = 2;
  function i(u, s, o, c, f, l) {
    var d = o & n, g = u.length, C = s.length;
    if (g != C && !(d && C > g))
      return !1;
    var A = l.get(u), m = l.get(s);
    if (A && m)
      return A == s && m == u;
    var b = -1, v = !0, O = o & a ? new e() : void 0;
    for (l.set(u, s), l.set(s, u); ++b < g; ) {
      var p = u[b], j = s[b];
      if (c)
        var _ = d ? c(j, p, b, s, u, l) : c(p, j, b, u, s, l);
      if (_ !== void 0) {
        if (_)
          continue;
        v = !1;
        break;
      }
      if (O) {
        if (!r(s, function(y, I) {
          if (!t(O, I) && (p === y || f(p, y, o, c, l)))
            return O.push(I);
        })) {
          v = !1;
          break;
        }
      } else if (!(p === j || f(p, j, o, c, l))) {
        v = !1;
        break;
      }
    }
    return l.delete(u), l.delete(s), v;
  }
  return pr = i, pr;
}
var _r, aa;
function Bi() {
  if (aa) return _r;
  aa = 1;
  var e = L(), r = e.Uint8Array;
  return _r = r, _r;
}
var gr, ia;
function Ss() {
  if (ia) return gr;
  ia = 1;
  function e(r) {
    var t = -1, n = Array(r.size);
    return r.forEach(function(a, i) {
      n[++t] = [i, a];
    }), n;
  }
  return gr = e, gr;
}
var br, ua;
function Cs() {
  if (ua) return br;
  ua = 1;
  function e(r) {
    var t = -1, n = Array(r.size);
    return r.forEach(function(a) {
      n[++t] = a;
    }), n;
  }
  return br = e, br;
}
var mr, sa;
function Os() {
  if (sa) return mr;
  sa = 1;
  var e = de(), r = Bi(), t = Ut(), n = Ni(), a = Ss(), i = Cs(), u = 1, s = 2, o = "[object Boolean]", c = "[object Date]", f = "[object Error]", l = "[object Map]", d = "[object Number]", g = "[object RegExp]", C = "[object Set]", A = "[object String]", m = "[object Symbol]", b = "[object ArrayBuffer]", v = "[object DataView]", O = e ? e.prototype : void 0, p = O ? O.valueOf : void 0;
  function j(_, y, I, T, E, h, w) {
    switch (I) {
      case v:
        if (_.byteLength != y.byteLength || _.byteOffset != y.byteOffset)
          return !1;
        _ = _.buffer, y = y.buffer;
      case b:
        return !(_.byteLength != y.byteLength || !h(new r(_), new r(y)));
      case o:
      case c:
      case d:
        return t(+_, +y);
      case f:
        return _.name == y.name && _.message == y.message;
      case g:
      case A:
        return _ == y + "";
      case l:
        var F = a;
      case C:
        var K = T & u;
        if (F || (F = i), _.size != y.size && !K)
          return !1;
        var H = w.get(_);
        if (H)
          return H == y;
        T |= s, w.set(_, y);
        var be = n(F(_), F(y), T, E, h, w);
        return w.delete(_), be;
      case m:
        if (p)
          return p.call(_) == p.call(y);
    }
    return !1;
  }
  return mr = j, mr;
}
var qr, oa;
function Gi() {
  if (oa) return qr;
  oa = 1;
  function e(r, t) {
    for (var n = -1, a = t.length, i = r.length; ++n < a; )
      r[i + n] = t[n];
    return r;
  }
  return qr = e, qr;
}
var Ar, ca;
function pe() {
  if (ca) return Ar;
  ca = 1;
  var e = Array.isArray;
  return Ar = e, Ar;
}
var Tr, fa;
function Ui() {
  if (fa) return Tr;
  fa = 1;
  var e = Gi(), r = pe();
  function t(n, a, i) {
    var u = a(n);
    return r(n) ? u : e(u, i(n));
  }
  return Tr = t, Tr;
}
var Sr, la;
function js() {
  if (la) return Sr;
  la = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length, i = 0, u = []; ++n < a; ) {
      var s = r[n];
      t(s, n, r) && (u[i++] = s);
    }
    return u;
  }
  return Sr = e, Sr;
}
var Cr, da;
function Ki() {
  if (da) return Cr;
  da = 1;
  function e() {
    return [];
  }
  return Cr = e, Cr;
}
var Or, va;
function Ht() {
  if (va) return Or;
  va = 1;
  var e = js(), r = Ki(), t = Object.prototype, n = t.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(u) {
    return u == null ? [] : (u = Object(u), e(a(u), function(s) {
      return n.call(u, s);
    }));
  } : r;
  return Or = i, Or;
}
var jr, ha;
function Rs() {
  if (ha) return jr;
  ha = 1;
  function e(r, t) {
    for (var n = -1, a = Array(r); ++n < r; )
      a[n] = t(n);
    return a;
  }
  return jr = e, jr;
}
var Rr, ya;
function k() {
  if (ya) return Rr;
  ya = 1;
  function e(r) {
    return r != null && typeof r == "object";
  }
  return Rr = e, Rr;
}
var Ir, pa;
function Is() {
  if (pa) return Ir;
  pa = 1;
  var e = ve(), r = k(), t = "[object Arguments]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return Ir = n, Ir;
}
var wr, _a;
function ws() {
  if (_a) return wr;
  _a = 1;
  var e = Is(), r = k(), t = Object.prototype, n = t.hasOwnProperty, a = t.propertyIsEnumerable, i = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(u) {
    return r(u) && n.call(u, "callee") && !a.call(u, "callee");
  };
  return wr = i, wr;
}
var J = { exports: {} }, Er, ga;
function Es() {
  if (ga) return Er;
  ga = 1;
  function e() {
    return !1;
  }
  return Er = e, Er;
}
J.exports;
var ba;
function $t() {
  return ba || (ba = 1, function(e, r) {
    var t = L(), n = Es(), a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, u = i && i.exports === a, s = u ? t.Buffer : void 0, o = s ? s.isBuffer : void 0, c = o || n;
    e.exports = c;
  }(J, J.exports)), J.exports;
}
var Pr, ma;
function Ps() {
  if (ma) return Pr;
  ma = 1;
  var e = 9007199254740991, r = /^(?:0|[1-9]\d*)$/;
  function t(n, a) {
    var i = typeof n;
    return a = a ?? e, !!a && (i == "number" || i != "symbol" && r.test(n)) && n > -1 && n % 1 == 0 && n < a;
  }
  return Pr = t, Pr;
}
var Fr, qa;
function Hi() {
  if (qa) return Fr;
  qa = 1;
  var e = 9007199254740991;
  function r(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= e;
  }
  return Fr = r, Fr;
}
var xr, Aa;
function Fs() {
  if (Aa) return xr;
  Aa = 1;
  var e = ve(), r = Hi(), t = k(), n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", u = "[object Date]", s = "[object Error]", o = "[object Function]", c = "[object Map]", f = "[object Number]", l = "[object Object]", d = "[object RegExp]", g = "[object Set]", C = "[object String]", A = "[object WeakMap]", m = "[object ArrayBuffer]", b = "[object DataView]", v = "[object Float32Array]", O = "[object Float64Array]", p = "[object Int8Array]", j = "[object Int16Array]", _ = "[object Int32Array]", y = "[object Uint8Array]", I = "[object Uint8ClampedArray]", T = "[object Uint16Array]", E = "[object Uint32Array]", h = {};
  h[v] = h[O] = h[p] = h[j] = h[_] = h[y] = h[I] = h[T] = h[E] = !0, h[n] = h[a] = h[m] = h[i] = h[b] = h[u] = h[s] = h[o] = h[c] = h[f] = h[l] = h[d] = h[g] = h[C] = h[A] = !1;
  function w(F) {
    return t(F) && r(F.length) && !!h[e(F)];
  }
  return xr = w, xr;
}
var Lr, Ta;
function Vt() {
  if (Ta) return Lr;
  Ta = 1;
  function e(r) {
    return function(t) {
      return r(t);
    };
  }
  return Lr = e, Lr;
}
var Q = { exports: {} };
Q.exports;
var Sa;
function Wt() {
  return Sa || (Sa = 1, function(e, r) {
    var t = Fi(), n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, u = i && t.process, s = function() {
      try {
        var o = a && a.require && a.require("util").types;
        return o || u && u.binding && u.binding("util");
      } catch {
      }
    }();
    e.exports = s;
  }(Q, Q.exports)), Q.exports;
}
var Dr, Ca;
function $i() {
  if (Ca) return Dr;
  Ca = 1;
  var e = Fs(), r = Vt(), t = Wt(), n = t && t.isTypedArray, a = n ? r(n) : e;
  return Dr = a, Dr;
}
var Mr, Oa;
function Vi() {
  if (Oa) return Mr;
  Oa = 1;
  var e = Rs(), r = ws(), t = pe(), n = $t(), a = Ps(), i = $i(), u = Object.prototype, s = u.hasOwnProperty;
  function o(c, f) {
    var l = t(c), d = !l && r(c), g = !l && !d && n(c), C = !l && !d && !g && i(c), A = l || d || g || C, m = A ? e(c.length, String) : [], b = m.length;
    for (var v in c)
      (f || s.call(c, v)) && !(A && // Safari 9 has enumerable `arguments.length` in strict mode.
      (v == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      g && (v == "offset" || v == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      C && (v == "buffer" || v == "byteLength" || v == "byteOffset") || // Skip index properties.
      a(v, b))) && m.push(v);
    return m;
  }
  return Mr = o, Mr;
}
var Nr, ja;
function zt() {
  if (ja) return Nr;
  ja = 1;
  var e = Object.prototype;
  function r(t) {
    var n = t && t.constructor, a = typeof n == "function" && n.prototype || e;
    return t === a;
  }
  return Nr = r, Nr;
}
var Br, Ra;
function Wi() {
  if (Ra) return Br;
  Ra = 1;
  function e(r, t) {
    return function(n) {
      return r(t(n));
    };
  }
  return Br = e, Br;
}
var Gr, Ia;
function xs() {
  if (Ia) return Gr;
  Ia = 1;
  var e = Wi(), r = e(Object.keys, Object);
  return Gr = r, Gr;
}
var Ur, wa;
function Ls() {
  if (wa) return Ur;
  wa = 1;
  var e = zt(), r = xs(), t = Object.prototype, n = t.hasOwnProperty;
  function a(i) {
    if (!e(i))
      return r(i);
    var u = [];
    for (var s in Object(i))
      n.call(i, s) && s != "constructor" && u.push(s);
    return u;
  }
  return Ur = a, Ur;
}
var Kr, Ea;
function zi() {
  if (Ea) return Kr;
  Ea = 1;
  var e = xi(), r = Hi();
  function t(n) {
    return n != null && r(n.length) && !e(n);
  }
  return Kr = t, Kr;
}
var Hr, Pa;
function kt() {
  if (Pa) return Hr;
  Pa = 1;
  var e = Vi(), r = Ls(), t = zi();
  function n(a) {
    return t(a) ? e(a) : r(a);
  }
  return Hr = n, Hr;
}
var $r, Fa;
function ki() {
  if (Fa) return $r;
  Fa = 1;
  var e = Ui(), r = Ht(), t = kt();
  function n(a) {
    return e(a, t, r);
  }
  return $r = n, $r;
}
var Vr, xa;
function Ds() {
  if (xa) return Vr;
  xa = 1;
  var e = ki(), r = 1, t = Object.prototype, n = t.hasOwnProperty;
  function a(i, u, s, o, c, f) {
    var l = s & r, d = e(i), g = d.length, C = e(u), A = C.length;
    if (g != A && !l)
      return !1;
    for (var m = g; m--; ) {
      var b = d[m];
      if (!(l ? b in u : n.call(u, b)))
        return !1;
    }
    var v = f.get(i), O = f.get(u);
    if (v && O)
      return v == u && O == i;
    var p = !0;
    f.set(i, u), f.set(u, i);
    for (var j = l; ++m < g; ) {
      b = d[m];
      var _ = i[b], y = u[b];
      if (o)
        var I = l ? o(y, _, b, u, i, f) : o(_, y, b, i, u, f);
      if (!(I === void 0 ? _ === y || c(_, y, s, o, f) : I)) {
        p = !1;
        break;
      }
      j || (j = b == "constructor");
    }
    if (p && !j) {
      var T = i.constructor, E = u.constructor;
      T != E && "constructor" in i && "constructor" in u && !(typeof T == "function" && T instanceof T && typeof E == "function" && E instanceof E) && (p = !1);
    }
    return f.delete(i), f.delete(u), p;
  }
  return Vr = a, Vr;
}
var Wr, La;
function Ms() {
  if (La) return Wr;
  La = 1;
  var e = U(), r = L(), t = e(r, "DataView");
  return Wr = t, Wr;
}
var zr, Da;
function Ns() {
  if (Da) return zr;
  Da = 1;
  var e = U(), r = L(), t = e(r, "Promise");
  return zr = t, zr;
}
var kr, Ma;
function Bs() {
  if (Ma) return kr;
  Ma = 1;
  var e = U(), r = L(), t = e(r, "Set");
  return kr = t, kr;
}
var Jr, Na;
function Gs() {
  if (Na) return Jr;
  Na = 1;
  var e = U(), r = L(), t = e(r, "WeakMap");
  return Jr = t, Jr;
}
var Qr, Ba;
function _e() {
  if (Ba) return Qr;
  Ba = 1;
  var e = Ms(), r = Kt(), t = Ns(), n = Bs(), a = Gs(), i = ve(), u = Li(), s = "[object Map]", o = "[object Object]", c = "[object Promise]", f = "[object Set]", l = "[object WeakMap]", d = "[object DataView]", g = u(e), C = u(r), A = u(t), m = u(n), b = u(a), v = i;
  return (e && v(new e(new ArrayBuffer(1))) != d || r && v(new r()) != s || t && v(t.resolve()) != c || n && v(new n()) != f || a && v(new a()) != l) && (v = function(O) {
    var p = i(O), j = p == o ? O.constructor : void 0, _ = j ? u(j) : "";
    if (_)
      switch (_) {
        case g:
          return d;
        case C:
          return s;
        case A:
          return c;
        case m:
          return f;
        case b:
          return l;
      }
    return p;
  }), Qr = v, Qr;
}
var Yr, Ga;
function Us() {
  if (Ga) return Yr;
  Ga = 1;
  var e = Mi(), r = Ni(), t = Os(), n = Ds(), a = _e(), i = pe(), u = $t(), s = $i(), o = 1, c = "[object Arguments]", f = "[object Array]", l = "[object Object]", d = Object.prototype, g = d.hasOwnProperty;
  function C(A, m, b, v, O, p) {
    var j = i(A), _ = i(m), y = j ? f : a(A), I = _ ? f : a(m);
    y = y == c ? l : y, I = I == c ? l : I;
    var T = y == l, E = I == l, h = y == I;
    if (h && u(A)) {
      if (!u(m))
        return !1;
      j = !0, T = !1;
    }
    if (h && !T)
      return p || (p = new e()), j || s(A) ? r(A, m, b, v, O, p) : t(A, m, y, b, v, O, p);
    if (!(b & o)) {
      var w = T && g.call(A, "__wrapped__"), F = E && g.call(m, "__wrapped__");
      if (w || F) {
        var K = w ? A.value() : A, H = F ? m.value() : m;
        return p || (p = new e()), O(K, H, b, v, p);
      }
    }
    return h ? (p || (p = new e()), n(A, m, b, v, O, p)) : !1;
  }
  return Yr = C, Yr;
}
var Xr, Ua;
function Ks() {
  if (Ua) return Xr;
  Ua = 1;
  var e = Us(), r = k();
  function t(n, a, i, u, s) {
    return n === a ? !0 : n == null || a == null || !r(n) && !r(a) ? n !== n && a !== a : e(n, a, i, u, t, s);
  }
  return Xr = t, Xr;
}
var Zr, Ka;
function Hs() {
  if (Ka) return Zr;
  Ka = 1;
  var e = Ks();
  function r(t, n) {
    return e(t, n);
  }
  return Zr = r, Zr;
}
var $s = Hs();
const Vs = /* @__PURE__ */ Pi($s);
var et, Ha;
function Ws() {
  if (Ha) return et;
  Ha = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length; ++n < a && t(r[n], n, r) !== !1; )
      ;
    return r;
  }
  return et = e, et;
}
var rt, $a;
function zs() {
  if ($a) return rt;
  $a = 1;
  var e = U(), r = function() {
    try {
      var t = e(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {
    }
  }();
  return rt = r, rt;
}
var tt, Va;
function Ji() {
  if (Va) return tt;
  Va = 1;
  var e = zs();
  function r(t, n, a) {
    n == "__proto__" && e ? e(t, n, {
      configurable: !0,
      enumerable: !0,
      value: a,
      writable: !0
    }) : t[n] = a;
  }
  return tt = r, tt;
}
var nt, Wa;
function Qi() {
  if (Wa) return nt;
  Wa = 1;
  var e = Ji(), r = Ut(), t = Object.prototype, n = t.hasOwnProperty;
  function a(i, u, s) {
    var o = i[u];
    (!(n.call(i, u) && r(o, s)) || s === void 0 && !(u in i)) && e(i, u, s);
  }
  return nt = a, nt;
}
var at, za;
function ge() {
  if (za) return at;
  za = 1;
  var e = Qi(), r = Ji();
  function t(n, a, i, u) {
    var s = !i;
    i || (i = {});
    for (var o = -1, c = a.length; ++o < c; ) {
      var f = a[o], l = u ? u(i[f], n[f], f, i, n) : void 0;
      l === void 0 && (l = n[f]), s ? r(i, f, l) : e(i, f, l);
    }
    return i;
  }
  return at = t, at;
}
var it, ka;
function ks() {
  if (ka) return it;
  ka = 1;
  var e = ge(), r = kt();
  function t(n, a) {
    return n && e(a, r(a), n);
  }
  return it = t, it;
}
var ut, Ja;
function Js() {
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
var st, Qa;
function Qs() {
  if (Qa) return st;
  Qa = 1;
  var e = Z(), r = zt(), t = Js(), n = Object.prototype, a = n.hasOwnProperty;
  function i(u) {
    if (!e(u))
      return t(u);
    var s = r(u), o = [];
    for (var c in u)
      c == "constructor" && (s || !a.call(u, c)) || o.push(c);
    return o;
  }
  return st = i, st;
}
var ot, Ya;
function Jt() {
  if (Ya) return ot;
  Ya = 1;
  var e = Vi(), r = Qs(), t = zi();
  function n(a) {
    return t(a) ? e(a, !0) : r(a);
  }
  return ot = n, ot;
}
var ct, Xa;
function Ys() {
  if (Xa) return ct;
  Xa = 1;
  var e = ge(), r = Jt();
  function t(n, a) {
    return n && e(a, r(a), n);
  }
  return ct = t, ct;
}
var Y = { exports: {} };
Y.exports;
var Za;
function Xs() {
  return Za || (Za = 1, function(e, r) {
    var t = L(), n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, u = i ? t.Buffer : void 0, s = u ? u.allocUnsafe : void 0;
    function o(c, f) {
      if (f)
        return c.slice();
      var l = c.length, d = s ? s(l) : new c.constructor(l);
      return c.copy(d), d;
    }
    e.exports = o;
  }(Y, Y.exports)), Y.exports;
}
var ft, ei;
function Zs() {
  if (ei) return ft;
  ei = 1;
  function e(r, t) {
    var n = -1, a = r.length;
    for (t || (t = Array(a)); ++n < a; )
      t[n] = r[n];
    return t;
  }
  return ft = e, ft;
}
var lt, ri;
function eo() {
  if (ri) return lt;
  ri = 1;
  var e = ge(), r = Ht();
  function t(n, a) {
    return e(n, r(n), a);
  }
  return lt = t, lt;
}
var dt, ti;
function Yi() {
  if (ti) return dt;
  ti = 1;
  var e = Wi(), r = e(Object.getPrototypeOf, Object);
  return dt = r, dt;
}
var vt, ni;
function Xi() {
  if (ni) return vt;
  ni = 1;
  var e = Gi(), r = Yi(), t = Ht(), n = Ki(), a = Object.getOwnPropertySymbols, i = a ? function(u) {
    for (var s = []; u; )
      e(s, t(u)), u = r(u);
    return s;
  } : n;
  return vt = i, vt;
}
var ht, ai;
function ro() {
  if (ai) return ht;
  ai = 1;
  var e = ge(), r = Xi();
  function t(n, a) {
    return e(n, r(n), a);
  }
  return ht = t, ht;
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
var pt, ui;
function no() {
  if (ui) return pt;
  ui = 1;
  var e = Object.prototype, r = e.hasOwnProperty;
  function t(n) {
    var a = n.length, i = new n.constructor(a);
    return a && typeof n[0] == "string" && r.call(n, "index") && (i.index = n.index, i.input = n.input), i;
  }
  return pt = t, pt;
}
var _t, si;
function Qt() {
  if (si) return _t;
  si = 1;
  var e = Bi();
  function r(t) {
    var n = new t.constructor(t.byteLength);
    return new e(n).set(new e(t)), n;
  }
  return _t = r, _t;
}
var gt, oi;
function ao() {
  if (oi) return gt;
  oi = 1;
  var e = Qt();
  function r(t, n) {
    var a = n ? e(t.buffer) : t.buffer;
    return new t.constructor(a, t.byteOffset, t.byteLength);
  }
  return gt = r, gt;
}
var bt, ci;
function io() {
  if (ci) return bt;
  ci = 1;
  var e = /\w*$/;
  function r(t) {
    var n = new t.constructor(t.source, e.exec(t));
    return n.lastIndex = t.lastIndex, n;
  }
  return bt = r, bt;
}
var mt, fi;
function uo() {
  if (fi) return mt;
  fi = 1;
  var e = de(), r = e ? e.prototype : void 0, t = r ? r.valueOf : void 0;
  function n(a) {
    return t ? Object(t.call(a)) : {};
  }
  return mt = n, mt;
}
var qt, li;
function so() {
  if (li) return qt;
  li = 1;
  var e = Qt();
  function r(t, n) {
    var a = n ? e(t.buffer) : t.buffer;
    return new t.constructor(a, t.byteOffset, t.length);
  }
  return qt = r, qt;
}
var At, di;
function oo() {
  if (di) return At;
  di = 1;
  var e = Qt(), r = ao(), t = io(), n = uo(), a = so(), i = "[object Boolean]", u = "[object Date]", s = "[object Map]", o = "[object Number]", c = "[object RegExp]", f = "[object Set]", l = "[object String]", d = "[object Symbol]", g = "[object ArrayBuffer]", C = "[object DataView]", A = "[object Float32Array]", m = "[object Float64Array]", b = "[object Int8Array]", v = "[object Int16Array]", O = "[object Int32Array]", p = "[object Uint8Array]", j = "[object Uint8ClampedArray]", _ = "[object Uint16Array]", y = "[object Uint32Array]";
  function I(T, E, h) {
    var w = T.constructor;
    switch (E) {
      case g:
        return e(T);
      case i:
      case u:
        return new w(+T);
      case C:
        return r(T, h);
      case A:
      case m:
      case b:
      case v:
      case O:
      case p:
      case j:
      case _:
      case y:
        return a(T, h);
      case s:
        return new w();
      case o:
      case l:
        return new w(T);
      case c:
        return t(T);
      case f:
        return new w();
      case d:
        return n(T);
    }
  }
  return At = I, At;
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
var St, hi;
function fo() {
  if (hi) return St;
  hi = 1;
  var e = co(), r = Yi(), t = zt();
  function n(a) {
    return typeof a.constructor == "function" && !t(a) ? e(r(a)) : {};
  }
  return St = n, St;
}
var Ct, yi;
function lo() {
  if (yi) return Ct;
  yi = 1;
  var e = _e(), r = k(), t = "[object Map]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return Ct = n, Ct;
}
var Ot, pi;
function vo() {
  if (pi) return Ot;
  pi = 1;
  var e = lo(), r = Vt(), t = Wt(), n = t && t.isMap, a = n ? r(n) : e;
  return Ot = a, Ot;
}
var jt, _i;
function ho() {
  if (_i) return jt;
  _i = 1;
  var e = _e(), r = k(), t = "[object Set]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return jt = n, jt;
}
var Rt, gi;
function yo() {
  if (gi) return Rt;
  gi = 1;
  var e = ho(), r = Vt(), t = Wt(), n = t && t.isSet, a = n ? r(n) : e;
  return Rt = a, Rt;
}
var It, bi;
function po() {
  if (bi) return It;
  bi = 1;
  var e = Mi(), r = Ws(), t = Qi(), n = ks(), a = Ys(), i = Xs(), u = Zs(), s = eo(), o = ro(), c = ki(), f = to(), l = _e(), d = no(), g = oo(), C = fo(), A = pe(), m = $t(), b = vo(), v = Z(), O = yo(), p = kt(), j = Jt(), _ = 1, y = 2, I = 4, T = "[object Arguments]", E = "[object Array]", h = "[object Boolean]", w = "[object Date]", F = "[object Error]", K = "[object Function]", H = "[object GeneratorFunction]", be = "[object Map]", lu = "[object Number]", Zt = "[object Object]", du = "[object RegExp]", vu = "[object Set]", hu = "[object String]", yu = "[object Symbol]", pu = "[object WeakMap]", _u = "[object ArrayBuffer]", gu = "[object DataView]", bu = "[object Float32Array]", mu = "[object Float64Array]", qu = "[object Int8Array]", Au = "[object Int16Array]", Tu = "[object Int32Array]", Su = "[object Uint8Array]", Cu = "[object Uint8ClampedArray]", Ou = "[object Uint16Array]", ju = "[object Uint32Array]", S = {};
  S[T] = S[E] = S[_u] = S[gu] = S[h] = S[w] = S[bu] = S[mu] = S[qu] = S[Au] = S[Tu] = S[be] = S[lu] = S[Zt] = S[du] = S[vu] = S[hu] = S[yu] = S[Su] = S[Cu] = S[Ou] = S[ju] = !0, S[F] = S[K] = S[pu] = !1;
  function ee(q, $, V, Ru, re, N) {
    var P, te = $ & _, ne = $ & y, Iu = $ & I;
    if (V && (P = re ? V(q, Ru, re, N) : V(q)), P !== void 0)
      return P;
    if (!v(q))
      return q;
    var en = A(q);
    if (en) {
      if (P = d(q), !te)
        return u(q, P);
    } else {
      var W = l(q), rn = W == K || W == H;
      if (m(q))
        return i(q, te);
      if (W == Zt || W == T || rn && !re) {
        if (P = ne || rn ? {} : C(q), !te)
          return ne ? o(q, a(P, q)) : s(q, n(P, q));
      } else {
        if (!S[W])
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
    var wu = Iu ? ne ? f : c : ne ? j : p, nn = en ? void 0 : wu(q);
    return r(nn || q, function(B, G) {
      nn && (G = B, B = q[G]), t(P, G, ee(B, $, V, G, q, N));
    }), P;
  }
  return It = ee, It;
}
var wt, mi;
function _o() {
  if (mi) return wt;
  mi = 1;
  var e = po(), r = 1, t = 4;
  function n(a) {
    return e(a, r | t);
  }
  return wt = n, wt;
}
var go = _o();
const qi = /* @__PURE__ */ Pi(go);
function bo(e) {
  return xu() ? (Lu(e), !0) : !1;
}
function mo(e) {
  if (!me(e))
    return ie(e);
  const r = new Proxy({}, {
    get(t, n, a) {
      return ce(Reflect.get(e.value, n, a));
    },
    set(t, n, a) {
      return me(e.value[n]) && !me(a) ? e.value[n].value = a : e.value[n] = a, !0;
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
  return ie(r);
}
function qo(e) {
  return mo(x(e));
}
function Ao(e, ...r) {
  const t = r.flat(), n = t[0];
  return qo(() => Object.fromEntries(typeof n == "function" ? Object.entries(un(e)).filter(([a, i]) => !n(M(i), a)) : Object.entries(un(e)).filter((a) => !t.includes(a[0]))));
}
const To = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const So = Object.prototype.toString, Co = (e) => So.call(e) === "[object Object]", Ai = () => {
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
  let u;
  return (o) => {
    const c = M(e), f = M(r.maxWait);
    return t && i(t), c <= 0 || f !== void 0 && f <= 0 ? (n && (i(n), n = void 0), Promise.resolve(o())) : new Promise((l, d) => {
      a = r.rejectOnCancel ? d : l, u = o, f && !n && (n = setTimeout(() => {
        t && i(t), n = void 0, l(u());
      }, f)), t = setTimeout(() => {
        n && i(n), n = void 0, l(o());
      }, c);
    });
  };
}
function Ro(e) {
  return Object.entries(e);
}
function Et(e) {
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
const Zi = To ? window : void 0;
function Eo(e) {
  var r;
  const t = M(e);
  return (r = t == null ? void 0 : t.$el) != null ? r : t;
}
function Ti(...e) {
  const r = [], t = () => {
    r.forEach((s) => s()), r.length = 0;
  }, n = (s, o, c, f) => (s.addEventListener(o, c, f), () => s.removeEventListener(o, c, f)), a = x(() => {
    const s = Et(M(e[0])).filter((o) => o != null);
    return s.every((o) => typeof o != "string") ? s : void 0;
  }), i = wo(
    () => {
      var s, o;
      return [
        (o = (s = a.value) == null ? void 0 : s.map((c) => Eo(c))) != null ? o : [Zi].filter((c) => c != null),
        Et(M(a.value ? e[1] : e[0])),
        Et(ce(a.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        M(a.value ? e[3] : e[2])
      ];
    },
    ([s, o, c, f]) => {
      if (t(), !(s != null && s.length) || !(o != null && o.length) || !(c != null && c.length))
        return;
      const l = Co(f) ? { ...f } : f;
      r.push(
        ...s.flatMap(
          (d) => o.flatMap(
            (g) => c.map((C) => n(d, g, C, l))
          )
        )
      );
    },
    { flush: "post" }
  ), u = () => {
    i(), t();
  };
  return bo(t), u;
}
const Si = [
  "hash",
  "host",
  "hostname",
  "href",
  "pathname",
  "port",
  "protocol",
  "search"
];
function eu(e = {}) {
  const { window: r = Zi } = e, t = Object.fromEntries(
    Si.map((i) => [i, xt()])
  );
  for (const [i, u] of Ro(t))
    z(u, (s) => {
      !(r != null && r.location) || r.location[i] === s || (r.location[i] = s);
    });
  const n = (i) => {
    var u;
    const { state: s, length: o } = (r == null ? void 0 : r.history) || {}, { origin: c } = (r == null ? void 0 : r.location) || {};
    for (const f of Si)
      t[f].value = (u = r == null ? void 0 : r.location) == null ? void 0 : u[f];
    return ie({
      trigger: i,
      state: s,
      length: o,
      origin: c,
      ...t
    });
  }, a = xt(n("load"));
  if (r) {
    const i = { passive: !0 };
    Ti(r, "popstate", () => a.value = n("popstate"), i), Ti(r, "hashchange", () => a.value = n("hashchange"), i);
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
function Pt(e, r, t) {
  return e.replace(new RegExp(Po(r), "g"), t);
}
function Qo(e, r, t) {
  Object.keys(r).forEach((n) => {
    const a = `${t}${Pt(Pt(Pt(n, "./", ""), "/", ""), ".vue", "")}`;
    e.component(a, r[n].default);
  });
}
const ru = "%[a-f0-9]{2}", Ci = new RegExp("(" + ru + ")|([^%]+?)", "gi"), Oi = new RegExp("(" + ru + ")+", "gi");
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
function tu(e, r) {
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
        const i = typeof n == "string" && n.includes(e.arrayFormatSeparator), u = typeof n == "string" && !i && D(n, e).includes(e.arrayFormatSeparator);
        n = u ? D(n, e) : n;
        const s = i || u ? n.split(e.arrayFormatSeparator).map((o) => D(o, e)) : n === null ? n : D(n, e);
        a[t] = s;
      };
    case "bracket-separator":
      return (t, n, a) => {
        const i = /(\[])$/.test(t);
        if (t = t.replace(/\[]$/, ""), !i) {
          a[t] = n && D(n, e);
          return;
        }
        const u = n === null ? [] : D(n, e).split(e.arrayFormatSeparator);
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
function nu(e) {
  if (typeof e != "string" || e.length !== 1)
    throw new TypeError("arrayFormatSeparator must be single character string");
}
function R(e, r) {
  return r.encode ? r.strict ? No(e) : encodeURIComponent(e) : e;
}
function D(e, r) {
  return r.decode ? Lo(e) : e;
}
function au(e) {
  return Array.isArray(e) ? e.sort() : typeof e == "object" ? au(Object.keys(e)).sort((r, t) => Number(r) - Number(t)).map((r) => e[r]) : e;
}
function iu(e) {
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
  e = iu(e);
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
  }, nu(r.arrayFormatSeparator);
  const t = Go(r), n = /* @__PURE__ */ Object.create(null);
  if (typeof e != "string" || (e = e.trim().replace(/^[?#&]/, ""), !e))
    return n;
  for (const a of e.split("&")) {
    if (a === "")
      continue;
    const i = r.decode ? a.replaceAll("+", " ") : a;
    let [u, s] = tu(i, "=");
    u === void 0 && (u = i), s = s === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(r.arrayFormat) ? s : D(s, r), t(D(u, r), s, n);
  }
  for (const [a, i] of Object.entries(n))
    if (typeof i == "object" && i !== null && r.types[a] !== "string")
      for (const [u, s] of Object.entries(i)) {
        const o = r.types[a] ? r.types[a].replace("[]", "") : void 0;
        i[u] = ji(s, r, o);
      }
    else typeof i == "object" && i !== null && r.types[a] === "string" ? n[a] = Object.values(i).join(r.arrayFormatSeparator) : n[a] = ji(i, r, r.types[a]);
  return r.sort === !1 ? n : (r.sort === !0 ? Object.keys(n).sort() : Object.keys(n).sort(r.sort)).reduce((a, i) => {
    const u = n[i];
    return a[i] = u && typeof u == "object" && !Array.isArray(u) ? au(u) : u, a;
  }, /* @__PURE__ */ Object.create(null));
}
function uu(e, r) {
  if (!e)
    return "";
  r = {
    encode: !0,
    strict: !0,
    arrayFormat: "none",
    arrayFormatSeparator: ",",
    ...r
  }, nu(r.arrayFormatSeparator);
  const t = (u) => r.skipNull && Mo(e[u]) || r.skipEmptyString && e[u] === "", n = Bo(r), a = {};
  for (const [u, s] of Object.entries(e))
    t(u) || (a[u] = s);
  const i = Object.keys(a);
  return r.sort !== !1 && i.sort(r.sort), i.map((u) => {
    const s = e[u];
    return s === void 0 ? "" : s === null ? R(u, r) : Array.isArray(s) ? s.length === 0 && r.arrayFormat === "bracket-separator" ? R(u, r) + "[]" : s.reduce(n(u), []).join("&") : R(u, r) + "=" + R(s, r);
  }).filter((u) => u.length > 0).join("&");
}
function su(e, r) {
  var a;
  r = {
    decode: !0,
    ...r
  };
  let [t, n] = tu(e, "#");
  return t === void 0 && (t = e), {
    url: ((a = t == null ? void 0 : t.split("?")) == null ? void 0 : a[0]) ?? "",
    query: Xt(Yt(e), r),
    ...r && r.parseFragmentIdentifier && n ? { fragmentIdentifier: D(n, r) } : {}
  };
}
function ou(e, r) {
  r = {
    encode: !0,
    strict: !0,
    [Nt]: !0,
    ...r
  };
  const t = iu(e.url).split("?")[0] || "", n = Yt(e.url), a = {
    ...Xt(n, { sort: !1, ...r }),
    ...e.query
  };
  let i = uu(a, r);
  i && (i = `?${i}`);
  let u = Uo(e.url);
  if (typeof e.fragmentIdentifier == "string") {
    const s = new URL(t);
    s.hash = e.fragmentIdentifier, u = r[Nt] ? s.hash : `#${e.fragmentIdentifier}`;
  }
  return `${t}${i}${u}`;
}
function cu(e, r, t) {
  t = {
    parseFragmentIdentifier: !0,
    [Nt]: !1,
    ...t
  };
  const { url: n, query: a, fragmentIdentifier: i } = su(e, t);
  return ou({
    url: n,
    query: Do(a, r),
    fragmentIdentifier: i
  }, t);
}
function Ko(e, r, t) {
  const n = Array.isArray(r) ? (a) => !r.includes(a) : (a, i) => !r(a, i);
  return cu(e, n, t);
}
const fu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exclude: Ko,
  extract: Yt,
  parse: Xt,
  parseUrl: su,
  pick: cu,
  stringify: uu,
  stringifyUrl: ou
}, Symbol.toStringTag, { value: "Module" }));
function Bt() {
  return fu.parse(location.search, {
    arrayFormat: "index",
    parseNumbers: !0
  });
}
function Ho(e) {
  return fu.stringify(e, {
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
const Ri = (e) => Array.isArray(e) && e.length === 0, Ft = (e, r) => r === "" || r === void 0 || r === null || Ri(r) || r === !1 ? e === "" || e === void 0 || e === null || Ri(e) || e === !1 : Vs(e, r);
function Xo(e, r) {
  const t = qi(typeof e == "object" ? e : e()), n = () => {
    const f = Bt();
    return Object.keys(t).reduce((l, d) => (Ft(f[d], t[d]) || f[d] === void 0 ? l[d] = t[d] : l[d] = f[d], l), {});
  }, a = (f) => Object.keys(t).some((l) => !Ft(f[l], t[l])), i = n(), u = ie({
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
    const l = Bt();
    return Object.keys(f).forEach((d) => {
      const g = f[d], C = t[d];
      Ft(g, C) || !g ? delete l[d] : l[d] = g;
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
        u.applied = a(u.data()), r != null && r.onSuccess && r.onSuccess();
      }
    });
  }, 50);
  return z(u, () => {
    const f = window.location.href, l = s(u.data());
    f != l && (u.applied = a(u.data()), c(l));
  }), u;
}
function ue(e) {
  return typeof e == "object" && e !== null && "route" in e;
}
function se(e) {
  return typeof e == "object" && e !== null && "url" in e;
}
function oe(e) {
  return typeof e == "object" && e !== null && "path" in e;
}
function Vo(e) {
  return typeof e == "function";
}
function Zo(e) {
  const r = wi(), n = eu().value.href;
  return X(e, r.url, n ? new URL(n) : null);
}
function X(e, r, t) {
  if (Array.isArray(e))
    return e.some((n) => X(n, r, t));
  if (oe(e))
    return e.path === r;
  if (se(e)) {
    if (t) {
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
  const r = wi(), t = eu(), n = x(() => r.url), a = x(() => {
    const c = t.value.href;
    return c ? new URL(c) : null;
  }), i = (c) => {
    if (c.active)
      return X(c.active, n.value, a.value);
    const f = c.action;
    if (f) {
      if (typeof f == "string")
        return X({ url: f }, n.value, a.value);
      if (ue(f) || se(f) || oe(f))
        return X(f, n.value, a.value);
    }
    return !1;
  }, u = (c, f = !1) => c.children && c.children.some((l) => i(l)) ? !0 : f && c.children ? c.children.some((l) => u(l, !0)) : !1, s = (c) => {
    const f = c.children, l = f ? f.map((d) => s(d)) : [];
    return {
      ...c,
      isActive: i(c),
      isChildActive: u(c, !0),
      children: l,
      hasChildren: f ? f.length > 0 : !1
    };
  }, o = x(() => M(e));
  return x(() => o.value.map((c) => s(c)));
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
    Hu(x(() => n.item));
    const a = Ao(n, "item", "as"), i = x(() => {
      if (n.as !== void 0)
        return n.as;
      const o = n.item.action;
      if (o) {
        if (se(o))
          return o.external === !0 ? "a" : sn;
        if (oe(o) || ue(o))
          return sn;
      }
      return "button";
    }), u = x(() => {
      const o = n.item.action, c = {};
      return o && (se(o) ? c.href = o.url : oe(o) ? c.href = o.path : ue(o) && (c.href = route(o.route, o.params))), { ...a, ...c };
    }), s = (o) => {
      const c = n.item.action;
      c && Vo(c) ? c(o) : t("click", o);
    };
    return (o, c) => (Dt(), Lt(ce(Uu), Du({ as: i.value }, u.value, {
      onClick: s,
      "data-active": o.item.isActive || o.item.isChildActive ? "active" : "inactive",
      "data-state": o.item.isActive ? "active" : "inactive",
      "data-child-state": o.item.isChildActive ? "active" : "inactive"
    }), {
      default: Mu(() => [
        Nu(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "data-active", "data-state", "data-child-state"]));
  }
}), ic = /* @__PURE__ */ Gt({
  __name: "NavigationButtonIcon",
  setup(e) {
    const r = $u(), t = x(() => {
      var n;
      return (n = r.value) == null ? void 0 : n.icon;
    });
    return (n, a) => t.value && "src" in t.value ? (Dt(), Lt(ce(Ku), {
      key: 0,
      src: t.value.src
    }, null, 8, ["src"])) : t.value ? (Dt(), Lt(Gu(t.value), { key: 1 })) : Bu("", !0);
  }
});
export {
  Ku as Icon,
  ac as NavigationButton,
  ic as NavigationButtonIcon,
  Jo as asyncRouter,
  Ho as formatQuery,
  Yo as getValueFromQuery,
  X as isActivated,
  Zo as isCurrentlyActivated,
  Vo as isEventAction,
  se as isLinkAction,
  oe as isLinkPathAction,
  ue as isRouteAction,
  tc as onActivated,
  nc as onDeactivated,
  Bt as parseQuery,
  Qo as registerNamespacedComponents,
  $o as urlWithQuery,
  Xo as useFilter,
  ec as useNavigation,
  rc as useToggle
};
//# sourceMappingURL=ui.js.map
