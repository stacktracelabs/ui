import { defineComponent as Gt, shallowRef as un, watch as z, h as Eu, provide as Pu, inject as xu, computed as F, toValue as L, isRef as qe, reactive as ue, unref as fe, getCurrentScope as Fu, onScopeDispose as Lu, toRefs as sn, ref as Ft, onMounted as Du, onBeforeUnmount as Mu, createBlock as Lt, openBlock as Dt, mergeProps as Nu, withCtx as Bu, renderSlot as Gu, createCommentVNode as Uu, resolveDynamicComponent as Ku } from "vue";
import { router as Ut, usePage as wi, Link as on } from "@inertiajs/vue3";
import { Primitive as Hu } from "reka-ui";
const $u = Gt({
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
    }, t = new DOMParser(), n = t.parseFromString(e.src, "image/svg+xml").documentElement, a = un(r(n)), i = un(n.innerHTML);
    return z(() => e.src, () => {
      const u = t.parseFromString(e.src, "image/svg+xml").documentElement;
      a.value = r(u), i.value = u.innerHTML;
    }), () => Eu("svg", { ...a.value, innerHTML: i.value });
  }
}), Ei = Symbol();
function Vu(e) {
  Pu(Ei, e);
}
function Wu() {
  const e = xu(Ei);
  return F(() => e ? L(e) : null);
}
var ae = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ae, cn;
function zu() {
  if (cn) return Ae;
  cn = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Ae = e, Ae;
}
var Se, fn;
function Kt() {
  if (fn) return Se;
  fn = 1;
  function e(r, t) {
    return r === t || r !== r && t !== t;
  }
  return Se = e, Se;
}
var Te, ln;
function le() {
  if (ln) return Te;
  ln = 1;
  var e = Kt();
  function r(t, n) {
    for (var a = t.length; a--; )
      if (e(t[a][0], n))
        return a;
    return -1;
  }
  return Te = r, Te;
}
var Ce, dn;
function ku() {
  if (dn) return Ce;
  dn = 1;
  var e = le(), r = Array.prototype, t = r.splice;
  function n(a) {
    var i = this.__data__, u = e(i, a);
    if (u < 0)
      return !1;
    var s = i.length - 1;
    return u == s ? i.pop() : t.call(i, u, 1), --this.size, !0;
  }
  return Ce = n, Ce;
}
var Oe, vn;
function Ju() {
  if (vn) return Oe;
  vn = 1;
  var e = le();
  function r(t) {
    var n = this.__data__, a = e(n, t);
    return a < 0 ? void 0 : n[a][1];
  }
  return Oe = r, Oe;
}
var je, hn;
function Qu() {
  if (hn) return je;
  hn = 1;
  var e = le();
  function r(t) {
    return e(this.__data__, t) > -1;
  }
  return je = r, je;
}
var Re, pn;
function Yu() {
  if (pn) return Re;
  pn = 1;
  var e = le();
  function r(t, n) {
    var a = this.__data__, i = e(a, t);
    return i < 0 ? (++this.size, a.push([t, n])) : a[i][1] = n, this;
  }
  return Re = r, Re;
}
var Ie, yn;
function de() {
  if (yn) return Ie;
  yn = 1;
  var e = zu(), r = ku(), t = Ju(), n = Qu(), a = Yu();
  function i(u) {
    var s = -1, o = u == null ? 0 : u.length;
    for (this.clear(); ++s < o; ) {
      var c = u[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, Ie = i, Ie;
}
var we, _n;
function Xu() {
  if (_n) return we;
  _n = 1;
  var e = de();
  function r() {
    this.__data__ = new e(), this.size = 0;
  }
  return we = r, we;
}
var Ee, gn;
function Zu() {
  if (gn) return Ee;
  gn = 1;
  function e(r) {
    var t = this.__data__, n = t.delete(r);
    return this.size = t.size, n;
  }
  return Ee = e, Ee;
}
var Pe, bn;
function es() {
  if (bn) return Pe;
  bn = 1;
  function e(r) {
    return this.__data__.get(r);
  }
  return Pe = e, Pe;
}
var xe, mn;
function rs() {
  if (mn) return xe;
  mn = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return xe = e, xe;
}
var Fe, qn;
function xi() {
  if (qn) return Fe;
  qn = 1;
  var e = typeof ae == "object" && ae && ae.Object === Object && ae;
  return Fe = e, Fe;
}
var Le, An;
function D() {
  if (An) return Le;
  An = 1;
  var e = xi(), r = typeof self == "object" && self && self.Object === Object && self, t = e || r || Function("return this")();
  return Le = t, Le;
}
var De, Sn;
function ve() {
  if (Sn) return De;
  Sn = 1;
  var e = D(), r = e.Symbol;
  return De = r, De;
}
var Me, Tn;
function ts() {
  if (Tn) return Me;
  Tn = 1;
  var e = ve(), r = Object.prototype, t = r.hasOwnProperty, n = r.toString, a = e ? e.toStringTag : void 0;
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
  return Me = i, Me;
}
var Ne, Cn;
function ns() {
  if (Cn) return Ne;
  Cn = 1;
  var e = Object.prototype, r = e.toString;
  function t(n) {
    return r.call(n);
  }
  return Ne = t, Ne;
}
var Be, On;
function he() {
  if (On) return Be;
  On = 1;
  var e = ve(), r = ts(), t = ns(), n = "[object Null]", a = "[object Undefined]", i = e ? e.toStringTag : void 0;
  function u(s) {
    return s == null ? s === void 0 ? a : n : i && i in Object(s) ? r(s) : t(s);
  }
  return Be = u, Be;
}
var Ge, jn;
function Z() {
  if (jn) return Ge;
  jn = 1;
  function e(r) {
    var t = typeof r;
    return r != null && (t == "object" || t == "function");
  }
  return Ge = e, Ge;
}
var Ue, Rn;
function Fi() {
  if (Rn) return Ue;
  Rn = 1;
  var e = he(), r = Z(), t = "[object AsyncFunction]", n = "[object Function]", a = "[object GeneratorFunction]", i = "[object Proxy]";
  function u(s) {
    if (!r(s))
      return !1;
    var o = e(s);
    return o == n || o == a || o == t || o == i;
  }
  return Ue = u, Ue;
}
var Ke, In;
function as() {
  if (In) return Ke;
  In = 1;
  var e = D(), r = e["__core-js_shared__"];
  return Ke = r, Ke;
}
var He, wn;
function is() {
  if (wn) return He;
  wn = 1;
  var e = as(), r = (function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  })();
  function t(n) {
    return !!r && r in n;
  }
  return He = t, He;
}
var $e, En;
function Li() {
  if (En) return $e;
  En = 1;
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
var Ve, Pn;
function us() {
  if (Pn) return Ve;
  Pn = 1;
  var e = Fi(), r = is(), t = Z(), n = Li(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, u = Function.prototype, s = Object.prototype, o = u.toString, c = s.hasOwnProperty, f = RegExp(
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
var We, xn;
function ss() {
  if (xn) return We;
  xn = 1;
  function e(r, t) {
    return r == null ? void 0 : r[t];
  }
  return We = e, We;
}
var ze, Fn;
function U() {
  if (Fn) return ze;
  Fn = 1;
  var e = us(), r = ss();
  function t(n, a) {
    var i = r(n, a);
    return e(i) ? i : void 0;
  }
  return ze = t, ze;
}
var ke, Ln;
function Ht() {
  if (Ln) return ke;
  Ln = 1;
  var e = U(), r = D(), t = e(r, "Map");
  return ke = t, ke;
}
var Je, Dn;
function pe() {
  if (Dn) return Je;
  Dn = 1;
  var e = U(), r = e(Object, "create");
  return Je = r, Je;
}
var Qe, Mn;
function os() {
  if (Mn) return Qe;
  Mn = 1;
  var e = pe();
  function r() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Qe = r, Qe;
}
var Ye, Nn;
function cs() {
  if (Nn) return Ye;
  Nn = 1;
  function e(r) {
    var t = this.has(r) && delete this.__data__[r];
    return this.size -= t ? 1 : 0, t;
  }
  return Ye = e, Ye;
}
var Xe, Bn;
function fs() {
  if (Bn) return Xe;
  Bn = 1;
  var e = pe(), r = "__lodash_hash_undefined__", t = Object.prototype, n = t.hasOwnProperty;
  function a(i) {
    var u = this.__data__;
    if (e) {
      var s = u[i];
      return s === r ? void 0 : s;
    }
    return n.call(u, i) ? u[i] : void 0;
  }
  return Xe = a, Xe;
}
var Ze, Gn;
function ls() {
  if (Gn) return Ze;
  Gn = 1;
  var e = pe(), r = Object.prototype, t = r.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return e ? i[a] !== void 0 : t.call(i, a);
  }
  return Ze = n, Ze;
}
var er, Un;
function ds() {
  if (Un) return er;
  Un = 1;
  var e = pe(), r = "__lodash_hash_undefined__";
  function t(n, a) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = e && a === void 0 ? r : a, this;
  }
  return er = t, er;
}
var rr, Kn;
function vs() {
  if (Kn) return rr;
  Kn = 1;
  var e = os(), r = cs(), t = fs(), n = ls(), a = ds();
  function i(u) {
    var s = -1, o = u == null ? 0 : u.length;
    for (this.clear(); ++s < o; ) {
      var c = u[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, rr = i, rr;
}
var tr, Hn;
function hs() {
  if (Hn) return tr;
  Hn = 1;
  var e = vs(), r = de(), t = Ht();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (t || r)(),
      string: new e()
    };
  }
  return tr = n, tr;
}
var nr, $n;
function ps() {
  if ($n) return nr;
  $n = 1;
  function e(r) {
    var t = typeof r;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? r !== "__proto__" : r === null;
  }
  return nr = e, nr;
}
var ar, Vn;
function ye() {
  if (Vn) return ar;
  Vn = 1;
  var e = ps();
  function r(t, n) {
    var a = t.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return ar = r, ar;
}
var ir, Wn;
function ys() {
  if (Wn) return ir;
  Wn = 1;
  var e = ye();
  function r(t) {
    var n = e(this, t).delete(t);
    return this.size -= n ? 1 : 0, n;
  }
  return ir = r, ir;
}
var ur, zn;
function _s() {
  if (zn) return ur;
  zn = 1;
  var e = ye();
  function r(t) {
    return e(this, t).get(t);
  }
  return ur = r, ur;
}
var sr, kn;
function gs() {
  if (kn) return sr;
  kn = 1;
  var e = ye();
  function r(t) {
    return e(this, t).has(t);
  }
  return sr = r, sr;
}
var or, Jn;
function bs() {
  if (Jn) return or;
  Jn = 1;
  var e = ye();
  function r(t, n) {
    var a = e(this, t), i = a.size;
    return a.set(t, n), this.size += a.size == i ? 0 : 1, this;
  }
  return or = r, or;
}
var cr, Qn;
function Di() {
  if (Qn) return cr;
  Qn = 1;
  var e = hs(), r = ys(), t = _s(), n = gs(), a = bs();
  function i(u) {
    var s = -1, o = u == null ? 0 : u.length;
    for (this.clear(); ++s < o; ) {
      var c = u[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, cr = i, cr;
}
var fr, Yn;
function ms() {
  if (Yn) return fr;
  Yn = 1;
  var e = de(), r = Ht(), t = Di(), n = 200;
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
  return fr = a, fr;
}
var lr, Xn;
function Mi() {
  if (Xn) return lr;
  Xn = 1;
  var e = de(), r = Xu(), t = Zu(), n = es(), a = rs(), i = ms();
  function u(s) {
    var o = this.__data__ = new e(s);
    this.size = o.size;
  }
  return u.prototype.clear = r, u.prototype.delete = t, u.prototype.get = n, u.prototype.has = a, u.prototype.set = i, lr = u, lr;
}
var dr, Zn;
function qs() {
  if (Zn) return dr;
  Zn = 1;
  var e = "__lodash_hash_undefined__";
  function r(t) {
    return this.__data__.set(t, e), this;
  }
  return dr = r, dr;
}
var vr, ea;
function As() {
  if (ea) return vr;
  ea = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return vr = e, vr;
}
var hr, ra;
function Ss() {
  if (ra) return hr;
  ra = 1;
  var e = Di(), r = qs(), t = As();
  function n(a) {
    var i = -1, u = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++i < u; )
      this.add(a[i]);
  }
  return n.prototype.add = n.prototype.push = r, n.prototype.has = t, hr = n, hr;
}
var pr, ta;
function Ts() {
  if (ta) return pr;
  ta = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length; ++n < a; )
      if (t(r[n], n, r))
        return !0;
    return !1;
  }
  return pr = e, pr;
}
var yr, na;
function Cs() {
  if (na) return yr;
  na = 1;
  function e(r, t) {
    return r.has(t);
  }
  return yr = e, yr;
}
var _r, aa;
function Ni() {
  if (aa) return _r;
  aa = 1;
  var e = Ss(), r = Ts(), t = Cs(), n = 1, a = 2;
  function i(u, s, o, c, f, l) {
    var d = o & n, g = u.length, C = s.length;
    if (g != C && !(d && C > g))
      return !1;
    var A = l.get(u), m = l.get(s);
    if (A && m)
      return A == s && m == u;
    var b = -1, v = !0, O = o & a ? new e() : void 0;
    for (l.set(u, s), l.set(s, u); ++b < g; ) {
      var y = u[b], j = s[b];
      if (c)
        var _ = d ? c(j, y, b, s, u, l) : c(y, j, b, u, s, l);
      if (_ !== void 0) {
        if (_)
          continue;
        v = !1;
        break;
      }
      if (O) {
        if (!r(s, function(p, I) {
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
    return l.delete(u), l.delete(s), v;
  }
  return _r = i, _r;
}
var gr, ia;
function Bi() {
  if (ia) return gr;
  ia = 1;
  var e = D(), r = e.Uint8Array;
  return gr = r, gr;
}
var br, ua;
function Os() {
  if (ua) return br;
  ua = 1;
  function e(r) {
    var t = -1, n = Array(r.size);
    return r.forEach(function(a, i) {
      n[++t] = [i, a];
    }), n;
  }
  return br = e, br;
}
var mr, sa;
function js() {
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
var qr, oa;
function Rs() {
  if (oa) return qr;
  oa = 1;
  var e = ve(), r = Bi(), t = Kt(), n = Ni(), a = Os(), i = js(), u = 1, s = 2, o = "[object Boolean]", c = "[object Date]", f = "[object Error]", l = "[object Map]", d = "[object Number]", g = "[object RegExp]", C = "[object Set]", A = "[object String]", m = "[object Symbol]", b = "[object ArrayBuffer]", v = "[object DataView]", O = e ? e.prototype : void 0, y = O ? O.valueOf : void 0;
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
        var x = a;
      case C:
        var K = S & u;
        if (x || (x = i), _.size != p.size && !K)
          return !1;
        var H = w.get(_);
        if (H)
          return H == p;
        S |= s, w.set(_, p);
        var me = n(x(_), x(p), S, E, h, w);
        return w.delete(_), me;
      case m:
        if (y)
          return y.call(_) == y.call(p);
    }
    return !1;
  }
  return qr = j, qr;
}
var Ar, ca;
function Gi() {
  if (ca) return Ar;
  ca = 1;
  function e(r, t) {
    for (var n = -1, a = t.length, i = r.length; ++n < a; )
      r[i + n] = t[n];
    return r;
  }
  return Ar = e, Ar;
}
var Sr, fa;
function _e() {
  if (fa) return Sr;
  fa = 1;
  var e = Array.isArray;
  return Sr = e, Sr;
}
var Tr, la;
function Ui() {
  if (la) return Tr;
  la = 1;
  var e = Gi(), r = _e();
  function t(n, a, i) {
    var u = a(n);
    return r(n) ? u : e(u, i(n));
  }
  return Tr = t, Tr;
}
var Cr, da;
function Is() {
  if (da) return Cr;
  da = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length, i = 0, u = []; ++n < a; ) {
      var s = r[n];
      t(s, n, r) && (u[i++] = s);
    }
    return u;
  }
  return Cr = e, Cr;
}
var Or, va;
function Ki() {
  if (va) return Or;
  va = 1;
  function e() {
    return [];
  }
  return Or = e, Or;
}
var jr, ha;
function $t() {
  if (ha) return jr;
  ha = 1;
  var e = Is(), r = Ki(), t = Object.prototype, n = t.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(u) {
    return u == null ? [] : (u = Object(u), e(a(u), function(s) {
      return n.call(u, s);
    }));
  } : r;
  return jr = i, jr;
}
var Rr, pa;
function ws() {
  if (pa) return Rr;
  pa = 1;
  function e(r, t) {
    for (var n = -1, a = Array(r); ++n < r; )
      a[n] = t(n);
    return a;
  }
  return Rr = e, Rr;
}
var Ir, ya;
function k() {
  if (ya) return Ir;
  ya = 1;
  function e(r) {
    return r != null && typeof r == "object";
  }
  return Ir = e, Ir;
}
var wr, _a;
function Es() {
  if (_a) return wr;
  _a = 1;
  var e = he(), r = k(), t = "[object Arguments]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return wr = n, wr;
}
var Er, ga;
function Ps() {
  if (ga) return Er;
  ga = 1;
  var e = Es(), r = k(), t = Object.prototype, n = t.hasOwnProperty, a = t.propertyIsEnumerable, i = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(u) {
    return r(u) && n.call(u, "callee") && !a.call(u, "callee");
  };
  return Er = i, Er;
}
var J = { exports: {} }, Pr, ba;
function xs() {
  if (ba) return Pr;
  ba = 1;
  function e() {
    return !1;
  }
  return Pr = e, Pr;
}
J.exports;
var ma;
function Vt() {
  return ma || (ma = 1, (function(e, r) {
    var t = D(), n = xs(), a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, u = i && i.exports === a, s = u ? t.Buffer : void 0, o = s ? s.isBuffer : void 0, c = o || n;
    e.exports = c;
  })(J, J.exports)), J.exports;
}
var xr, qa;
function Fs() {
  if (qa) return xr;
  qa = 1;
  var e = 9007199254740991, r = /^(?:0|[1-9]\d*)$/;
  function t(n, a) {
    var i = typeof n;
    return a = a ?? e, !!a && (i == "number" || i != "symbol" && r.test(n)) && n > -1 && n % 1 == 0 && n < a;
  }
  return xr = t, xr;
}
var Fr, Aa;
function Hi() {
  if (Aa) return Fr;
  Aa = 1;
  var e = 9007199254740991;
  function r(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= e;
  }
  return Fr = r, Fr;
}
var Lr, Sa;
function Ls() {
  if (Sa) return Lr;
  Sa = 1;
  var e = he(), r = Hi(), t = k(), n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", u = "[object Date]", s = "[object Error]", o = "[object Function]", c = "[object Map]", f = "[object Number]", l = "[object Object]", d = "[object RegExp]", g = "[object Set]", C = "[object String]", A = "[object WeakMap]", m = "[object ArrayBuffer]", b = "[object DataView]", v = "[object Float32Array]", O = "[object Float64Array]", y = "[object Int8Array]", j = "[object Int16Array]", _ = "[object Int32Array]", p = "[object Uint8Array]", I = "[object Uint8ClampedArray]", S = "[object Uint16Array]", E = "[object Uint32Array]", h = {};
  h[v] = h[O] = h[y] = h[j] = h[_] = h[p] = h[I] = h[S] = h[E] = !0, h[n] = h[a] = h[m] = h[i] = h[b] = h[u] = h[s] = h[o] = h[c] = h[f] = h[l] = h[d] = h[g] = h[C] = h[A] = !1;
  function w(x) {
    return t(x) && r(x.length) && !!h[e(x)];
  }
  return Lr = w, Lr;
}
var Dr, Ta;
function Wt() {
  if (Ta) return Dr;
  Ta = 1;
  function e(r) {
    return function(t) {
      return r(t);
    };
  }
  return Dr = e, Dr;
}
var Q = { exports: {} };
Q.exports;
var Ca;
function zt() {
  return Ca || (Ca = 1, (function(e, r) {
    var t = xi(), n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, u = i && t.process, s = (function() {
      try {
        var o = a && a.require && a.require("util").types;
        return o || u && u.binding && u.binding("util");
      } catch {
      }
    })();
    e.exports = s;
  })(Q, Q.exports)), Q.exports;
}
var Mr, Oa;
function $i() {
  if (Oa) return Mr;
  Oa = 1;
  var e = Ls(), r = Wt(), t = zt(), n = t && t.isTypedArray, a = n ? r(n) : e;
  return Mr = a, Mr;
}
var Nr, ja;
function Vi() {
  if (ja) return Nr;
  ja = 1;
  var e = ws(), r = Ps(), t = _e(), n = Vt(), a = Fs(), i = $i(), u = Object.prototype, s = u.hasOwnProperty;
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
  return Nr = o, Nr;
}
var Br, Ra;
function kt() {
  if (Ra) return Br;
  Ra = 1;
  var e = Object.prototype;
  function r(t) {
    var n = t && t.constructor, a = typeof n == "function" && n.prototype || e;
    return t === a;
  }
  return Br = r, Br;
}
var Gr, Ia;
function Wi() {
  if (Ia) return Gr;
  Ia = 1;
  function e(r, t) {
    return function(n) {
      return r(t(n));
    };
  }
  return Gr = e, Gr;
}
var Ur, wa;
function Ds() {
  if (wa) return Ur;
  wa = 1;
  var e = Wi(), r = e(Object.keys, Object);
  return Ur = r, Ur;
}
var Kr, Ea;
function Ms() {
  if (Ea) return Kr;
  Ea = 1;
  var e = kt(), r = Ds(), t = Object.prototype, n = t.hasOwnProperty;
  function a(i) {
    if (!e(i))
      return r(i);
    var u = [];
    for (var s in Object(i))
      n.call(i, s) && s != "constructor" && u.push(s);
    return u;
  }
  return Kr = a, Kr;
}
var Hr, Pa;
function zi() {
  if (Pa) return Hr;
  Pa = 1;
  var e = Fi(), r = Hi();
  function t(n) {
    return n != null && r(n.length) && !e(n);
  }
  return Hr = t, Hr;
}
var $r, xa;
function Jt() {
  if (xa) return $r;
  xa = 1;
  var e = Vi(), r = Ms(), t = zi();
  function n(a) {
    return t(a) ? e(a) : r(a);
  }
  return $r = n, $r;
}
var Vr, Fa;
function ki() {
  if (Fa) return Vr;
  Fa = 1;
  var e = Ui(), r = $t(), t = Jt();
  function n(a) {
    return e(a, t, r);
  }
  return Vr = n, Vr;
}
var Wr, La;
function Ns() {
  if (La) return Wr;
  La = 1;
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
    var y = !0;
    f.set(i, u), f.set(u, i);
    for (var j = l; ++m < g; ) {
      b = d[m];
      var _ = i[b], p = u[b];
      if (o)
        var I = l ? o(p, _, b, u, i, f) : o(_, p, b, i, u, f);
      if (!(I === void 0 ? _ === p || c(_, p, s, o, f) : I)) {
        y = !1;
        break;
      }
      j || (j = b == "constructor");
    }
    if (y && !j) {
      var S = i.constructor, E = u.constructor;
      S != E && "constructor" in i && "constructor" in u && !(typeof S == "function" && S instanceof S && typeof E == "function" && E instanceof E) && (y = !1);
    }
    return f.delete(i), f.delete(u), y;
  }
  return Wr = a, Wr;
}
var zr, Da;
function Bs() {
  if (Da) return zr;
  Da = 1;
  var e = U(), r = D(), t = e(r, "DataView");
  return zr = t, zr;
}
var kr, Ma;
function Gs() {
  if (Ma) return kr;
  Ma = 1;
  var e = U(), r = D(), t = e(r, "Promise");
  return kr = t, kr;
}
var Jr, Na;
function Us() {
  if (Na) return Jr;
  Na = 1;
  var e = U(), r = D(), t = e(r, "Set");
  return Jr = t, Jr;
}
var Qr, Ba;
function Ks() {
  if (Ba) return Qr;
  Ba = 1;
  var e = U(), r = D(), t = e(r, "WeakMap");
  return Qr = t, Qr;
}
var Yr, Ga;
function ge() {
  if (Ga) return Yr;
  Ga = 1;
  var e = Bs(), r = Ht(), t = Gs(), n = Us(), a = Ks(), i = he(), u = Li(), s = "[object Map]", o = "[object Object]", c = "[object Promise]", f = "[object Set]", l = "[object WeakMap]", d = "[object DataView]", g = u(e), C = u(r), A = u(t), m = u(n), b = u(a), v = i;
  return (e && v(new e(new ArrayBuffer(1))) != d || r && v(new r()) != s || t && v(t.resolve()) != c || n && v(new n()) != f || a && v(new a()) != l) && (v = function(O) {
    var y = i(O), j = y == o ? O.constructor : void 0, _ = j ? u(j) : "";
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
    return y;
  }), Yr = v, Yr;
}
var Xr, Ua;
function Hs() {
  if (Ua) return Xr;
  Ua = 1;
  var e = Mi(), r = Ni(), t = Rs(), n = Ns(), a = ge(), i = _e(), u = Vt(), s = $i(), o = 1, c = "[object Arguments]", f = "[object Array]", l = "[object Object]", d = Object.prototype, g = d.hasOwnProperty;
  function C(A, m, b, v, O, y) {
    var j = i(A), _ = i(m), p = j ? f : a(A), I = _ ? f : a(m);
    p = p == c ? l : p, I = I == c ? l : I;
    var S = p == l, E = I == l, h = p == I;
    if (h && u(A)) {
      if (!u(m))
        return !1;
      j = !0, S = !1;
    }
    if (h && !S)
      return y || (y = new e()), j || s(A) ? r(A, m, b, v, O, y) : t(A, m, p, b, v, O, y);
    if (!(b & o)) {
      var w = S && g.call(A, "__wrapped__"), x = E && g.call(m, "__wrapped__");
      if (w || x) {
        var K = w ? A.value() : A, H = x ? m.value() : m;
        return y || (y = new e()), O(K, H, b, v, y);
      }
    }
    return h ? (y || (y = new e()), n(A, m, b, v, O, y)) : !1;
  }
  return Xr = C, Xr;
}
var Zr, Ka;
function $s() {
  if (Ka) return Zr;
  Ka = 1;
  var e = Hs(), r = k();
  function t(n, a, i, u, s) {
    return n === a ? !0 : n == null || a == null || !r(n) && !r(a) ? n !== n && a !== a : e(n, a, i, u, t, s);
  }
  return Zr = t, Zr;
}
var et, Ha;
function Vs() {
  if (Ha) return et;
  Ha = 1;
  var e = $s();
  function r(t, n) {
    return e(t, n);
  }
  return et = r, et;
}
var Ws = Vs();
const zs = /* @__PURE__ */ Pi(Ws);
var rt, $a;
function ks() {
  if ($a) return rt;
  $a = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length; ++n < a && t(r[n], n, r) !== !1; )
      ;
    return r;
  }
  return rt = e, rt;
}
var tt, Va;
function Js() {
  if (Va) return tt;
  Va = 1;
  var e = U(), r = (function() {
    try {
      var t = e(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {
    }
  })();
  return tt = r, tt;
}
var nt, Wa;
function Ji() {
  if (Wa) return nt;
  Wa = 1;
  var e = Js();
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
var at, za;
function Qi() {
  if (za) return at;
  za = 1;
  var e = Ji(), r = Kt(), t = Object.prototype, n = t.hasOwnProperty;
  function a(i, u, s) {
    var o = i[u];
    (!(n.call(i, u) && r(o, s)) || s === void 0 && !(u in i)) && e(i, u, s);
  }
  return at = a, at;
}
var it, ka;
function be() {
  if (ka) return it;
  ka = 1;
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
  return it = t, it;
}
var ut, Ja;
function Qs() {
  if (Ja) return ut;
  Ja = 1;
  var e = be(), r = Jt();
  function t(n, a) {
    return n && e(a, r(a), n);
  }
  return ut = t, ut;
}
var st, Qa;
function Ys() {
  if (Qa) return st;
  Qa = 1;
  function e(r) {
    var t = [];
    if (r != null)
      for (var n in Object(r))
        t.push(n);
    return t;
  }
  return st = e, st;
}
var ot, Ya;
function Xs() {
  if (Ya) return ot;
  Ya = 1;
  var e = Z(), r = kt(), t = Ys(), n = Object.prototype, a = n.hasOwnProperty;
  function i(u) {
    if (!e(u))
      return t(u);
    var s = r(u), o = [];
    for (var c in u)
      c == "constructor" && (s || !a.call(u, c)) || o.push(c);
    return o;
  }
  return ot = i, ot;
}
var ct, Xa;
function Qt() {
  if (Xa) return ct;
  Xa = 1;
  var e = Vi(), r = Xs(), t = zi();
  function n(a) {
    return t(a) ? e(a, !0) : r(a);
  }
  return ct = n, ct;
}
var ft, Za;
function Zs() {
  if (Za) return ft;
  Za = 1;
  var e = be(), r = Qt();
  function t(n, a) {
    return n && e(a, r(a), n);
  }
  return ft = t, ft;
}
var Y = { exports: {} };
Y.exports;
var ei;
function eo() {
  return ei || (ei = 1, (function(e, r) {
    var t = D(), n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, u = i ? t.Buffer : void 0, s = u ? u.allocUnsafe : void 0;
    function o(c, f) {
      if (f)
        return c.slice();
      var l = c.length, d = s ? s(l) : new c.constructor(l);
      return c.copy(d), d;
    }
    e.exports = o;
  })(Y, Y.exports)), Y.exports;
}
var lt, ri;
function ro() {
  if (ri) return lt;
  ri = 1;
  function e(r, t) {
    var n = -1, a = r.length;
    for (t || (t = Array(a)); ++n < a; )
      t[n] = r[n];
    return t;
  }
  return lt = e, lt;
}
var dt, ti;
function to() {
  if (ti) return dt;
  ti = 1;
  var e = be(), r = $t();
  function t(n, a) {
    return e(n, r(n), a);
  }
  return dt = t, dt;
}
var vt, ni;
function Yi() {
  if (ni) return vt;
  ni = 1;
  var e = Wi(), r = e(Object.getPrototypeOf, Object);
  return vt = r, vt;
}
var ht, ai;
function Xi() {
  if (ai) return ht;
  ai = 1;
  var e = Gi(), r = Yi(), t = $t(), n = Ki(), a = Object.getOwnPropertySymbols, i = a ? function(u) {
    for (var s = []; u; )
      e(s, t(u)), u = r(u);
    return s;
  } : n;
  return ht = i, ht;
}
var pt, ii;
function no() {
  if (ii) return pt;
  ii = 1;
  var e = be(), r = Xi();
  function t(n, a) {
    return e(n, r(n), a);
  }
  return pt = t, pt;
}
var yt, ui;
function ao() {
  if (ui) return yt;
  ui = 1;
  var e = Ui(), r = Xi(), t = Qt();
  function n(a) {
    return e(a, t, r);
  }
  return yt = n, yt;
}
var _t, si;
function io() {
  if (si) return _t;
  si = 1;
  var e = Object.prototype, r = e.hasOwnProperty;
  function t(n) {
    var a = n.length, i = new n.constructor(a);
    return a && typeof n[0] == "string" && r.call(n, "index") && (i.index = n.index, i.input = n.input), i;
  }
  return _t = t, _t;
}
var gt, oi;
function Yt() {
  if (oi) return gt;
  oi = 1;
  var e = Bi();
  function r(t) {
    var n = new t.constructor(t.byteLength);
    return new e(n).set(new e(t)), n;
  }
  return gt = r, gt;
}
var bt, ci;
function uo() {
  if (ci) return bt;
  ci = 1;
  var e = Yt();
  function r(t, n) {
    var a = n ? e(t.buffer) : t.buffer;
    return new t.constructor(a, t.byteOffset, t.byteLength);
  }
  return bt = r, bt;
}
var mt, fi;
function so() {
  if (fi) return mt;
  fi = 1;
  var e = /\w*$/;
  function r(t) {
    var n = new t.constructor(t.source, e.exec(t));
    return n.lastIndex = t.lastIndex, n;
  }
  return mt = r, mt;
}
var qt, li;
function oo() {
  if (li) return qt;
  li = 1;
  var e = ve(), r = e ? e.prototype : void 0, t = r ? r.valueOf : void 0;
  function n(a) {
    return t ? Object(t.call(a)) : {};
  }
  return qt = n, qt;
}
var At, di;
function co() {
  if (di) return At;
  di = 1;
  var e = Yt();
  function r(t, n) {
    var a = n ? e(t.buffer) : t.buffer;
    return new t.constructor(a, t.byteOffset, t.length);
  }
  return At = r, At;
}
var St, vi;
function fo() {
  if (vi) return St;
  vi = 1;
  var e = Yt(), r = uo(), t = so(), n = oo(), a = co(), i = "[object Boolean]", u = "[object Date]", s = "[object Map]", o = "[object Number]", c = "[object RegExp]", f = "[object Set]", l = "[object String]", d = "[object Symbol]", g = "[object ArrayBuffer]", C = "[object DataView]", A = "[object Float32Array]", m = "[object Float64Array]", b = "[object Int8Array]", v = "[object Int16Array]", O = "[object Int32Array]", y = "[object Uint8Array]", j = "[object Uint8ClampedArray]", _ = "[object Uint16Array]", p = "[object Uint32Array]";
  function I(S, E, h) {
    var w = S.constructor;
    switch (E) {
      case g:
        return e(S);
      case i:
      case u:
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
      case s:
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
var Tt, hi;
function lo() {
  if (hi) return Tt;
  hi = 1;
  var e = Z(), r = Object.create, t = /* @__PURE__ */ (function() {
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
  })();
  return Tt = t, Tt;
}
var Ct, pi;
function vo() {
  if (pi) return Ct;
  pi = 1;
  var e = lo(), r = Yi(), t = kt();
  function n(a) {
    return typeof a.constructor == "function" && !t(a) ? e(r(a)) : {};
  }
  return Ct = n, Ct;
}
var Ot, yi;
function ho() {
  if (yi) return Ot;
  yi = 1;
  var e = ge(), r = k(), t = "[object Map]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return Ot = n, Ot;
}
var jt, _i;
function po() {
  if (_i) return jt;
  _i = 1;
  var e = ho(), r = Wt(), t = zt(), n = t && t.isMap, a = n ? r(n) : e;
  return jt = a, jt;
}
var Rt, gi;
function yo() {
  if (gi) return Rt;
  gi = 1;
  var e = ge(), r = k(), t = "[object Set]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return Rt = n, Rt;
}
var It, bi;
function _o() {
  if (bi) return It;
  bi = 1;
  var e = yo(), r = Wt(), t = zt(), n = t && t.isSet, a = n ? r(n) : e;
  return It = a, It;
}
var wt, mi;
function go() {
  if (mi) return wt;
  mi = 1;
  var e = Mi(), r = ks(), t = Qi(), n = Qs(), a = Zs(), i = eo(), u = ro(), s = to(), o = no(), c = ki(), f = ao(), l = ge(), d = io(), g = fo(), C = vo(), A = _e(), m = Vt(), b = po(), v = Z(), O = _o(), y = Jt(), j = Qt(), _ = 1, p = 2, I = 4, S = "[object Arguments]", E = "[object Array]", h = "[object Boolean]", w = "[object Date]", x = "[object Error]", K = "[object Function]", H = "[object GeneratorFunction]", me = "[object Map]", lu = "[object Number]", en = "[object Object]", du = "[object RegExp]", vu = "[object Set]", hu = "[object String]", pu = "[object Symbol]", yu = "[object WeakMap]", _u = "[object ArrayBuffer]", gu = "[object DataView]", bu = "[object Float32Array]", mu = "[object Float64Array]", qu = "[object Int8Array]", Au = "[object Int16Array]", Su = "[object Int32Array]", Tu = "[object Uint8Array]", Cu = "[object Uint8ClampedArray]", Ou = "[object Uint16Array]", ju = "[object Uint32Array]", T = {};
  T[S] = T[E] = T[_u] = T[gu] = T[h] = T[w] = T[bu] = T[mu] = T[qu] = T[Au] = T[Su] = T[me] = T[lu] = T[en] = T[du] = T[vu] = T[hu] = T[pu] = T[Tu] = T[Cu] = T[Ou] = T[ju] = !0, T[x] = T[K] = T[yu] = !1;
  function ee(q, $, V, Ru, re, M) {
    var P, te = $ & _, ne = $ & p, Iu = $ & I;
    if (V && (P = re ? V(q, Ru, re, M) : V(q)), P !== void 0)
      return P;
    if (!v(q))
      return q;
    var rn = A(q);
    if (rn) {
      if (P = d(q), !te)
        return u(q, P);
    } else {
      var W = l(q), tn = W == K || W == H;
      if (m(q))
        return i(q, te);
      if (W == en || W == S || tn && !re) {
        if (P = ne || tn ? {} : C(q), !te)
          return ne ? o(q, a(P, q)) : s(q, n(P, q));
      } else {
        if (!T[W])
          return re ? q : {};
        P = g(q, W, te);
      }
    }
    M || (M = new e());
    var nn = M.get(q);
    if (nn)
      return nn;
    M.set(q, P), O(q) ? q.forEach(function(N) {
      P.add(ee(N, $, V, N, q, M));
    }) : b(q) && q.forEach(function(N, B) {
      P.set(B, ee(N, $, V, B, q, M));
    });
    var wu = Iu ? ne ? f : c : ne ? j : y, an = rn ? void 0 : wu(q);
    return r(an || q, function(N, B) {
      an && (B = N, N = q[B]), t(P, B, ee(N, $, V, B, q, M));
    }), P;
  }
  return wt = ee, wt;
}
var Et, qi;
function bo() {
  if (qi) return Et;
  qi = 1;
  var e = go(), r = 1, t = 4;
  function n(a) {
    return e(a, r | t);
  }
  return Et = n, Et;
}
var mo = bo();
const Ai = /* @__PURE__ */ Pi(mo);
function qo(e) {
  return Fu() ? (Lu(e), !0) : !1;
}
function Ao(e) {
  if (!qe(e))
    return ue(e);
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
  return ue(r);
}
function So(e) {
  return Ao(F(e));
}
function To(e, ...r) {
  const t = r.flat(), n = t[0];
  return So(() => Object.fromEntries(typeof n == "function" ? Object.entries(sn(e)).filter(([a, i]) => !n(L(i), a)) : Object.entries(sn(e)).filter((a) => !t.includes(a[0]))));
}
const Co = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Oo = Object.prototype.toString, jo = (e) => Oo.call(e) === "[object Object]", Si = () => {
};
function Ro(e, r) {
  function t(...n) {
    return new Promise((a, i) => {
      Promise.resolve(e(() => r.apply(this, n), { fn: r, thisArg: this, args: n })).then(a).catch(i);
    });
  }
  return t;
}
function Io(e, r = {}) {
  let t, n, a = Si;
  const i = (o) => {
    clearTimeout(o), a(), a = Si;
  };
  let u;
  return (o) => {
    const c = L(e), f = L(r.maxWait);
    return t && i(t), c <= 0 || f !== void 0 && f <= 0 ? (n && (i(n), n = void 0), Promise.resolve(o())) : new Promise((l, d) => {
      a = r.rejectOnCancel ? d : l, u = o, f && !n && (n = setTimeout(() => {
        t && i(t), n = void 0, l(u());
      }, f)), t = setTimeout(() => {
        n && i(n), n = void 0, l(o());
      }, c);
    });
  };
}
function wo(e) {
  return Object.entries(e);
}
function Pt(e) {
  return Array.isArray(e) ? e : [e];
}
// @__NO_SIDE_EFFECTS__
function Eo(e, r = 200, t = {}) {
  return Ro(
    Io(r, t),
    e
  );
}
function Po(e, r, t) {
  return z(
    e,
    r,
    {
      ...t,
      immediate: !0
    }
  );
}
const Zi = Co ? window : void 0;
function xo(e) {
  var r;
  const t = L(e);
  return (r = t == null ? void 0 : t.$el) != null ? r : t;
}
function Ti(...e) {
  const r = [], t = () => {
    r.forEach((s) => s()), r.length = 0;
  }, n = (s, o, c, f) => (s.addEventListener(o, c, f), () => s.removeEventListener(o, c, f)), a = F(() => {
    const s = Pt(L(e[0])).filter((o) => o != null);
    return s.every((o) => typeof o != "string") ? s : void 0;
  }), i = Po(
    () => {
      var s, o;
      return [
        (o = (s = a.value) == null ? void 0 : s.map((c) => xo(c))) != null ? o : [Zi].filter((c) => c != null),
        Pt(L(a.value ? e[1] : e[0])),
        Pt(fe(a.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        L(a.value ? e[3] : e[2])
      ];
    },
    ([s, o, c, f]) => {
      if (t(), !(s != null && s.length) || !(o != null && o.length) || !(c != null && c.length))
        return;
      const l = jo(f) ? { ...f } : f;
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
  return qo(t), u;
}
const Ci = [
  "hash",
  "host",
  "hostname",
  "href",
  "pathname",
  "port",
  "protocol",
  "search"
];
// @__NO_SIDE_EFFECTS__
function eu(e = {}) {
  const { window: r = Zi } = e, t = Object.fromEntries(
    Ci.map((i) => [i, Ft()])
  );
  for (const [i, u] of wo(t))
    z(u, (s) => {
      !(r != null && r.location) || r.location[i] === s || (r.location[i] = s);
    });
  const n = (i) => {
    var u;
    const { state: s, length: o } = (r == null ? void 0 : r.history) || {}, { origin: c } = (r == null ? void 0 : r.location) || {};
    for (const f of Ci)
      t[f].value = (u = r == null ? void 0 : r.location) == null ? void 0 : u[f];
    return ue({
      trigger: i,
      state: s,
      length: o,
      origin: c,
      ...t
    });
  }, a = Ft(n("load"));
  if (r) {
    const i = { passive: !0 };
    Ti(r, "popstate", () => a.value = n("popstate"), i), Ti(r, "hashchange", () => a.value = n("hashchange"), i);
  }
  return a;
}
const Yo = {
  visit(e, r) {
    return new Promise((t, n) => {
      Ut.visit(e, {
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
function Fo(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function xt(e, r, t) {
  return e.replace(new RegExp(Fo(r), "g"), t);
}
function Xo(e, r, t) {
  Object.keys(r).forEach((n) => {
    const a = `${t}${xt(xt(xt(n, "./", ""), "/", ""), ".vue", "")}`;
    e.component(a, r[n].default);
  });
}
const ru = "%[a-f0-9]{2}", Oi = new RegExp("(" + ru + ")|([^%]+?)", "gi"), ji = new RegExp("(" + ru + ")+", "gi");
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
function Lo(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    let r = e.match(Oi) || [];
    for (let t = 1; t < r.length; t++)
      e = Mt(r, t).join(""), r = e.match(Oi) || [];
    return e;
  }
}
function Do(e) {
  const r = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  };
  let t = ji.exec(e);
  for (; t; ) {
    try {
      r[t[0]] = decodeURIComponent(t[0]);
    } catch {
      const a = Lo(t[0]);
      a !== t[0] && (r[t[0]] = a);
    }
    t = ji.exec(e);
  }
  r["%C2"] = "�";
  const n = Object.keys(r);
  for (const a of n)
    e = e.replace(new RegExp(a, "g"), r[a]);
  return e;
}
function Mo(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
  try {
    return decodeURIComponent(e);
  } catch {
    return Do(e);
  }
}
function No(e, r) {
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
const Bo = (e) => e == null, Go = (e) => encodeURIComponent(e).replaceAll(/[!'()*]/g, (r) => `%${r.charCodeAt(0).toString(16).toUpperCase()}`), Nt = Symbol("encodeFragmentIdentifier");
function Uo(e) {
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
function Ko(e) {
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
        const u = typeof n == "string" && n.includes(e.arrayFormatSeparator) ? n.split(e.arrayFormatSeparator).map((s) => G(s, e)) : n === null ? n : G(n, e);
        a[t] = u;
      };
    case "bracket-separator":
      return (t, n, a) => {
        const i = /(\[])$/.test(t);
        if (t = t.replace(/\[]$/, ""), !i) {
          a[t] = n && G(n, e);
          return;
        }
        const u = n === null ? [] : G(n, e).split(e.arrayFormatSeparator);
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
  return r.encode ? r.strict ? Go(e) : encodeURIComponent(e) : e;
}
function G(e, r) {
  return r.decode ? Mo(e) : e;
}
function au(e) {
  return Array.isArray(e) ? e.sort() : typeof e == "object" ? au(Object.keys(e)).sort((r, t) => Number(r) - Number(t)).map((r) => e[r]) : e;
}
function iu(e) {
  const r = e.indexOf("#");
  return r !== -1 && (e = e.slice(0, r)), e;
}
function Ho(e) {
  let r = "";
  const t = e.indexOf("#");
  return t !== -1 && (r = e.slice(t)), r;
}
function Ri(e, r, t) {
  return t === "string" && typeof e == "string" ? e : typeof t == "function" && typeof e == "string" ? t(e) : t === "boolean" && e === null ? !0 : t === "boolean" && e !== null && (e.toLowerCase() === "true" || e.toLowerCase() === "false") ? e.toLowerCase() === "true" : t === "boolean" && e !== null && (e.toLowerCase() === "1" || e.toLowerCase() === "0") ? e.toLowerCase() === "1" : t === "string[]" && r.arrayFormat !== "none" && typeof e == "string" ? [e] : t === "number[]" && r.arrayFormat !== "none" && !Number.isNaN(Number(e)) && typeof e == "string" && e.trim() !== "" ? [Number(e)] : t === "number" && !Number.isNaN(Number(e)) && typeof e == "string" && e.trim() !== "" ? Number(e) : r.parseBooleans && e !== null && (e.toLowerCase() === "true" || e.toLowerCase() === "false") ? e.toLowerCase() === "true" : r.parseNumbers && !Number.isNaN(Number(e)) && typeof e == "string" && e.trim() !== "" ? Number(e) : e;
}
function Xt(e) {
  e = iu(e);
  const r = e.indexOf("?");
  return r === -1 ? "" : e.slice(r + 1);
}
function Zt(e, r) {
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
  const t = Ko(r), n = /* @__PURE__ */ Object.create(null);
  if (typeof e != "string" || (e = e.trim().replace(/^[?#&]/, ""), !e))
    return n;
  for (const a of e.split("&")) {
    if (a === "")
      continue;
    const i = r.decode ? a.replaceAll("+", " ") : a;
    let [u, s] = tu(i, "=");
    u === void 0 && (u = i), s = s === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(r.arrayFormat) ? s : G(s, r), t(G(u, r), s, n);
  }
  for (const [a, i] of Object.entries(n))
    if (typeof i == "object" && i !== null && r.types[a] !== "string")
      for (const [u, s] of Object.entries(i)) {
        const o = r.types[a], c = typeof o == "function" ? o : o ? o.replace("[]", "") : void 0;
        i[u] = Ri(s, r, c);
      }
    else typeof i == "object" && i !== null && r.types[a] === "string" ? n[a] = Object.values(i).join(r.arrayFormatSeparator) : n[a] = Ri(i, r, r.types[a]);
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
  const t = (u) => r.skipNull && Bo(e[u]) || r.skipEmptyString && e[u] === "", n = Uo(r), a = {};
  for (const [u, s] of Object.entries(e))
    t(u) || (a[u] = s);
  const i = Object.keys(a);
  return r.sort !== !1 && i.sort(r.sort), i.map((u) => {
    let s = e[u];
    if (r.replacer && (s = r.replacer(u, s), s === void 0) || s === void 0)
      return "";
    if (s === null)
      return R(u, r);
    if (Array.isArray(s)) {
      if (s.length === 0 && r.arrayFormat === "bracket-separator")
        return R(u, r) + "[]";
      let o = s;
      return r.replacer && (o = s.map(
        (c, f) => r.replacer(`${u}[${f}]`, c)
      ).filter((c) => c !== void 0)), o.reduce(n(u), []).join("&");
    }
    return R(u, r) + "=" + R(s, r);
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
    query: Zt(Xt(e), r),
    ...r && r.parseFragmentIdentifier && n ? { fragmentIdentifier: G(n, r) } : {}
  };
}
function ou(e, r) {
  r = {
    encode: !0,
    strict: !0,
    [Nt]: !0,
    ...r
  };
  const t = iu(e.url).split("?")[0] || "", n = Xt(e.url), a = {
    ...Zt(n, { sort: !1, ...r }),
    ...e.query
  };
  let i = uu(a, r);
  i && (i = `?${i}`);
  let u = Ho(e.url);
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
    query: No(a, r),
    fragmentIdentifier: i
  }, t);
}
function $o(e, r, t) {
  const n = Array.isArray(r) ? (a) => !r.includes(a) : (a, i) => !r(a, i);
  return cu(e, n, t);
}
const fu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exclude: $o,
  extract: Xt,
  parse: Zt,
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
function Vo(e) {
  return fu.stringify(e, {
    arrayFormat: "index"
  });
}
function Zo(e) {
  const r = Bt();
  return e in r ? r[e] : null;
}
function Wo(e) {
  const r = window.location.href.split("?")[0];
  return Object.keys(e).length > 0 ? `${r}?${Vo(e)}` : r;
}
const Ii = (e) => Array.isArray(e) && e.length === 0, ie = (e, r) => r === "" || r === void 0 || r === null || Ii(r) || r === !1 ? e === "" || e === void 0 || e === null || Ii(e) || e === !1 : zs(e, r);
function ec(e, r) {
  const t = Ai(typeof e == "object" ? e : e()), n = () => {
    const f = Bt();
    return Object.keys(t).reduce((l, d) => (ie(f[d], t[d]) || f[d] === void 0 ? l[d] = t[d] : l[d] = f[d], l), {});
  }, a = (f) => Object.keys(t).some((l) => !ie(f[l], t[l])), i = n(), u = ue({
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
  }), s = (f) => {
    const l = Bt();
    return Object.keys(f).forEach((d) => {
      const g = f[d], C = t[d];
      ie(g, C) || !g ? delete l[d] : l[d] = g;
    }), delete l.page, delete l.cursor, Wo(l);
  };
  let o = null;
  const c = /* @__PURE__ */ Eo((f) => {
    o && (o.cancel(), o = null), Ut.visit(f, {
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
function rc(e, r) {
  let t;
  Du(() => {
    t = Ut.on("flash", (n) => {
      const a = n.detail.flash[e];
      a && r(a);
    });
  }), Mu(() => {
    t && (t(), t = void 0);
  });
}
function se(e) {
  return typeof e == "object" && e !== null && "route" in e;
}
function oe(e) {
  return typeof e == "object" && e !== null && "url" in e;
}
function ce(e) {
  return typeof e == "object" && e !== null && "path" in e;
}
function zo(e) {
  return typeof e == "function";
}
function tc(e) {
  const r = wi(), t = /* @__PURE__ */ eu();
  return F(() => {
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
    if (se(e))
      return route().current(e.route, e.params);
    if (typeof e == "function")
      return e();
  }
  return !1;
}
function nc(e) {
  const r = wi(), t = /* @__PURE__ */ eu(), n = F(() => r.url), a = F(() => {
    const c = t.value.href;
    return c ? new URL(c) : null;
  }), i = (c) => {
    if (c.active)
      return X(c.active, n.value, a.value);
    const f = c.action;
    if (f) {
      if (typeof f == "string")
        return X({ url: f }, n.value, a.value);
      if (se(f) || oe(f) || ce(f))
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
  }, o = F(() => L(e));
  return F(() => o.value.map((c) => s(c)));
}
function ac(e = !1) {
  const r = Ft(e);
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
function ic(e, r) {
  z(e.active, (t) => {
    t && r();
  });
}
function uc(e, r) {
  z(e.active, (t) => {
    t || r();
  });
}
const sc = /* @__PURE__ */ Gt({
  __name: "NavigationButton",
  props: {
    item: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["click"],
  setup(e, { emit: r }) {
    const t = r, n = e;
    Vu(F(() => n.item));
    const a = To(n, "item", "as"), i = F(() => {
      if (n.as !== void 0)
        return n.as;
      const o = n.item.action;
      if (o) {
        if (oe(o))
          return o.external === !0 ? "a" : on;
        if (ce(o) || se(o))
          return on;
      }
      return "button";
    }), u = F(() => {
      const o = n.item.action, c = {};
      return o && (oe(o) ? (c.href = o.url, o.external !== !0 && (c.preserveScroll = o.preserveScroll, c.preserveState = o.preserveState)) : ce(o) ? (c.href = o.path, c.preserveScroll = o.preserveScroll, c.preserveState = o.preserveState) : se(o) && (c.href = route(o.route, o.params), c.preserveScroll = o.preserveScroll, c.preserveState = o.preserveState)), { ...a, ...c };
    }), s = (o) => {
      const c = n.item.action;
      c && zo(c) ? c(o) : t("click", o);
    };
    return (o, c) => (Dt(), Lt(fe(Hu), Nu({ as: i.value }, u.value, {
      onClick: s,
      "data-active": e.item.isActive || e.item.isChildActive ? "active" : void 0,
      "data-state": e.item.isActive ? "active" : "inactive",
      "data-child-state": e.item.isChildActive ? "active" : "inactive"
    }), {
      default: Bu(() => [
        Gu(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "data-active", "data-state", "data-child-state"]));
  }
}), oc = /* @__PURE__ */ Gt({
  __name: "NavigationButtonIcon",
  setup(e) {
    const r = Wu(), t = F(() => {
      var n;
      return (n = r.value) == null ? void 0 : n.icon;
    });
    return (n, a) => t.value && "src" in t.value ? (Dt(), Lt(fe($u), {
      key: 0,
      src: t.value.src
    }, null, 8, ["src"])) : t.value ? (Dt(), Lt(Ku(t.value), { key: 1 })) : Uu("", !0);
  }
});
export {
  $u as Icon,
  sc as NavigationButton,
  oc as NavigationButtonIcon,
  Yo as asyncRouter,
  Vo as formatQuery,
  Zo as getValueFromQuery,
  X as isActivated,
  zo as isEventAction,
  oe as isLinkAction,
  ce as isLinkPathAction,
  se as isRouteAction,
  ic as onActivated,
  uc as onDeactivated,
  Bt as parseQuery,
  Xo as registerNamespacedComponents,
  Wo as urlWithQuery,
  tc as useActiveLink,
  ec as useFilter,
  rc as useFlash,
  nc as useNavigation,
  ac as useToggle
};
//# sourceMappingURL=ui.js.map
