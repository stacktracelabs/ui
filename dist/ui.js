import { Fragment as e, computed as t, createBlock as n, createCommentVNode as r, createElementBlock as i, createSlots as a, createTextVNode as o, createVNode as s, defineComponent as c, guardReactiveProps as l, h as u, inject as d, isRef as f, mergeProps as p, normalizeProps as m, onBeforeUnmount as h, onMounted as g, openBlock as _, provide as v, reactive as y, ref as b, renderList as x, renderSlot as S, resolveDynamicComponent as C, shallowRef as w, toDisplayString as T, toRaw as E, toRefs as D, toValue as O, unref as k, useAttrs as A, watch as j, withCtx as M } from "vue";
import { Link as N, router as P, usePage as F } from "@inertiajs/vue3";
import { Primitive as I, createContext as L } from "reka-ui";
//#region \0rolldown/runtime.js
var ee = Object.create, R = Object.defineProperty, z = Object.getOwnPropertyDescriptor, te = Object.getOwnPropertyNames, ne = Object.getPrototypeOf, re = Object.prototype.hasOwnProperty, B = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), ie = (e, t) => {
	let n = {};
	for (var r in e) R(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || R(n, Symbol.toStringTag, { value: "Module" }), n;
}, ae = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = te(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !re.call(e, s) && s !== n && R(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = z(t, s)) || r.enumerable
	});
	return e;
}, oe = (e, t, n) => (n = e == null ? {} : ee(ne(e)), ae(t || !e || !e.__esModule ? R(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), se = c({
	props: { src: {
		type: String,
		required: !0
	} },
	setup(e) {
		let t = (e) => {
			let t = e.attributes, n = {};
			for (let e = 0; e < t.length; e++) {
				let r = t[e];
				r && (n[r.name] = r.value);
			}
			return n;
		}, n = new DOMParser(), r = n.parseFromString(e.src, "image/svg+xml").documentElement, i = w(t(r)), a = w(r.innerHTML);
		return j(() => e.src, () => {
			let r = n.parseFromString(e.src, "image/svg+xml").documentElement;
			i.value = t(r), a.value = r.innerHTML;
		}), () => u("svg", {
			...i.value,
			innerHTML: a.value
		});
	}
}), ce = Symbol();
function le(e) {
	v(ce, e);
}
function ue() {
	let e = d(ce);
	return t(() => e ? O(e) : null);
}
//#endregion
//#region node_modules/lodash/_listCacheClear.js
var de = /* @__PURE__ */ B(((e, t) => {
	function n() {
		this.__data__ = [], this.size = 0;
	}
	t.exports = n;
})), V = /* @__PURE__ */ B(((e, t) => {
	function n(e, t) {
		return e === t || e !== e && t !== t;
	}
	t.exports = n;
})), H = /* @__PURE__ */ B(((e, t) => {
	var n = V();
	function r(e, t) {
		for (var r = e.length; r--;) if (n(e[r][0], t)) return r;
		return -1;
	}
	t.exports = r;
})), fe = /* @__PURE__ */ B(((e, t) => {
	var n = H(), r = Array.prototype.splice;
	function i(e) {
		var t = this.__data__, i = n(t, e);
		return i < 0 ? !1 : (i == t.length - 1 ? t.pop() : r.call(t, i, 1), --this.size, !0);
	}
	t.exports = i;
})), pe = /* @__PURE__ */ B(((e, t) => {
	var n = H();
	function r(e) {
		var t = this.__data__, r = n(t, e);
		return r < 0 ? void 0 : t[r][1];
	}
	t.exports = r;
})), me = /* @__PURE__ */ B(((e, t) => {
	var n = H();
	function r(e) {
		return n(this.__data__, e) > -1;
	}
	t.exports = r;
})), he = /* @__PURE__ */ B(((e, t) => {
	var n = H();
	function r(e, t) {
		var r = this.__data__, i = n(r, e);
		return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this;
	}
	t.exports = r;
})), ge = /* @__PURE__ */ B(((e, t) => {
	var n = de(), r = fe(), i = pe(), a = me(), o = he();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), _e = /* @__PURE__ */ B(((e, t) => {
	var n = ge();
	function r() {
		this.__data__ = new n(), this.size = 0;
	}
	t.exports = r;
})), ve = /* @__PURE__ */ B(((e, t) => {
	function n(e) {
		var t = this.__data__, n = t.delete(e);
		return this.size = t.size, n;
	}
	t.exports = n;
})), ye = /* @__PURE__ */ B(((e, t) => {
	function n(e) {
		return this.__data__.get(e);
	}
	t.exports = n;
})), be = /* @__PURE__ */ B(((e, t) => {
	function n(e) {
		return this.__data__.has(e);
	}
	t.exports = n;
})), xe = /* @__PURE__ */ B(((e, t) => {
	t.exports = typeof global == "object" && global && global.Object === Object && global;
})), U = /* @__PURE__ */ B(((e, t) => {
	var n = xe(), r = typeof self == "object" && self && self.Object === Object && self;
	t.exports = n || r || Function("return this")();
})), Se = /* @__PURE__ */ B(((e, t) => {
	t.exports = U().Symbol;
})), Ce = /* @__PURE__ */ B(((e, t) => {
	var n = Se(), r = Object.prototype, i = r.hasOwnProperty, a = r.toString, o = n ? n.toStringTag : void 0;
	function s(e) {
		var t = i.call(e, o), n = e[o];
		try {
			e[o] = void 0;
			var r = !0;
		} catch {}
		var s = a.call(e);
		return r && (t ? e[o] = n : delete e[o]), s;
	}
	t.exports = s;
})), we = /* @__PURE__ */ B(((e, t) => {
	var n = Object.prototype.toString;
	function r(e) {
		return n.call(e);
	}
	t.exports = r;
})), Te = /* @__PURE__ */ B(((e, t) => {
	var n = Se(), r = Ce(), i = we(), a = "[object Null]", o = "[object Undefined]", s = n ? n.toStringTag : void 0;
	function c(e) {
		return e == null ? e === void 0 ? o : a : s && s in Object(e) ? r(e) : i(e);
	}
	t.exports = c;
})), W = /* @__PURE__ */ B(((e, t) => {
	function n(e) {
		var t = typeof e;
		return e != null && (t == "object" || t == "function");
	}
	t.exports = n;
})), Ee = /* @__PURE__ */ B(((e, t) => {
	var n = Te(), r = W(), i = "[object AsyncFunction]", a = "[object Function]", o = "[object GeneratorFunction]", s = "[object Proxy]";
	function c(e) {
		if (!r(e)) return !1;
		var t = n(e);
		return t == a || t == o || t == i || t == s;
	}
	t.exports = c;
})), De = /* @__PURE__ */ B(((e, t) => {
	t.exports = U()["__core-js_shared__"];
})), Oe = /* @__PURE__ */ B(((e, t) => {
	var n = De(), r = function() {
		var e = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "");
		return e ? "Symbol(src)_1." + e : "";
	}();
	function i(e) {
		return !!r && r in e;
	}
	t.exports = i;
})), ke = /* @__PURE__ */ B(((e, t) => {
	var n = Function.prototype.toString;
	function r(e) {
		if (e != null) {
			try {
				return n.call(e);
			} catch {}
			try {
				return e + "";
			} catch {}
		}
		return "";
	}
	t.exports = r;
})), Ae = /* @__PURE__ */ B(((e, t) => {
	var n = Ee(), r = Oe(), i = W(), a = ke(), o = /[\\^$.*+?()[\]{}|]/g, s = /^\[object .+?Constructor\]$/, c = Function.prototype, l = Object.prototype, u = c.toString, d = l.hasOwnProperty, f = RegExp("^" + u.call(d).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	function p(e) {
		return !i(e) || r(e) ? !1 : (n(e) ? f : s).test(a(e));
	}
	t.exports = p;
})), je = /* @__PURE__ */ B(((e, t) => {
	function n(e, t) {
		return e?.[t];
	}
	t.exports = n;
})), G = /* @__PURE__ */ B(((e, t) => {
	var n = Ae(), r = je();
	function i(e, t) {
		var i = r(e, t);
		return n(i) ? i : void 0;
	}
	t.exports = i;
})), Me = /* @__PURE__ */ B(((e, t) => {
	t.exports = G()(U(), "Map");
})), Ne = /* @__PURE__ */ B(((e, t) => {
	t.exports = G()(Object, "create");
})), Pe = /* @__PURE__ */ B(((e, t) => {
	var n = Ne();
	function r() {
		this.__data__ = n ? n(null) : {}, this.size = 0;
	}
	t.exports = r;
})), Fe = /* @__PURE__ */ B(((e, t) => {
	function n(e) {
		var t = this.has(e) && delete this.__data__[e];
		return this.size -= +!!t, t;
	}
	t.exports = n;
})), Ie = /* @__PURE__ */ B(((e, t) => {
	var n = Ne(), r = "__lodash_hash_undefined__", i = Object.prototype.hasOwnProperty;
	function a(e) {
		var t = this.__data__;
		if (n) {
			var a = t[e];
			return a === r ? void 0 : a;
		}
		return i.call(t, e) ? t[e] : void 0;
	}
	t.exports = a;
})), Le = /* @__PURE__ */ B(((e, t) => {
	var n = Ne(), r = Object.prototype.hasOwnProperty;
	function i(e) {
		var t = this.__data__;
		return n ? t[e] !== void 0 : r.call(t, e);
	}
	t.exports = i;
})), Re = /* @__PURE__ */ B(((e, t) => {
	var n = Ne(), r = "__lodash_hash_undefined__";
	function i(e, t) {
		var i = this.__data__;
		return this.size += +!this.has(e), i[e] = n && t === void 0 ? r : t, this;
	}
	t.exports = i;
})), ze = /* @__PURE__ */ B(((e, t) => {
	var n = Pe(), r = Fe(), i = Ie(), a = Le(), o = Re();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), Be = /* @__PURE__ */ B(((e, t) => {
	var n = ze(), r = ge(), i = Me();
	function a() {
		this.size = 0, this.__data__ = {
			hash: new n(),
			map: new (i || r)(),
			string: new n()
		};
	}
	t.exports = a;
})), Ve = /* @__PURE__ */ B(((e, t) => {
	function n(e) {
		var t = typeof e;
		return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
	}
	t.exports = n;
})), He = /* @__PURE__ */ B(((e, t) => {
	var n = Ve();
	function r(e, t) {
		var r = e.__data__;
		return n(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
	}
	t.exports = r;
})), Ue = /* @__PURE__ */ B(((e, t) => {
	var n = He();
	function r(e) {
		var t = n(this, e).delete(e);
		return this.size -= +!!t, t;
	}
	t.exports = r;
})), We = /* @__PURE__ */ B(((e, t) => {
	var n = He();
	function r(e) {
		return n(this, e).get(e);
	}
	t.exports = r;
})), Ge = /* @__PURE__ */ B(((e, t) => {
	var n = He();
	function r(e) {
		return n(this, e).has(e);
	}
	t.exports = r;
})), Ke = /* @__PURE__ */ B(((e, t) => {
	var n = He();
	function r(e, t) {
		var r = n(this, e), i = r.size;
		return r.set(e, t), this.size += r.size == i ? 0 : 1, this;
	}
	t.exports = r;
})), qe = /* @__PURE__ */ B(((e, t) => {
	var n = Be(), r = Ue(), i = We(), a = Ge(), o = Ke();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), Je = /* @__PURE__ */ B(((e, t) => {
	var n = ge(), r = Me(), i = qe(), a = 200;
	function o(e, t) {
		var o = this.__data__;
		if (o instanceof n) {
			var s = o.__data__;
			if (!r || s.length < a - 1) return s.push([e, t]), this.size = ++o.size, this;
			o = this.__data__ = new i(s);
		}
		return o.set(e, t), this.size = o.size, this;
	}
	t.exports = o;
})), Ye = /* @__PURE__ */ B(((e, t) => {
	var n = ge(), r = _e(), i = ve(), a = ye(), o = be(), s = Je();
	function c(e) {
		var t = this.__data__ = new n(e);
		this.size = t.size;
	}
	c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = a, c.prototype.has = o, c.prototype.set = s, t.exports = c;
})), Xe = /* @__PURE__ */ B(((e, t) => {
	function n(e) {
		return this.__data__.set(e, "__lodash_hash_undefined__"), this;
	}
	t.exports = n;
})), Ze = /* @__PURE__ */ B(((e, t) => {
	function n(e) {
		return this.__data__.has(e);
	}
	t.exports = n;
})), Qe = /* @__PURE__ */ B(((e, t) => {
	var n = qe(), r = Xe(), i = Ze();
	function a(e) {
		var t = -1, r = e == null ? 0 : e.length;
		for (this.__data__ = new n(); ++t < r;) this.add(e[t]);
	}
	a.prototype.add = a.prototype.push = r, a.prototype.has = i, t.exports = a;
})), $e = /* @__PURE__ */ B(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
		return !1;
	}
	t.exports = n;
})), et = /* @__PURE__ */ B(((e, t) => {
	function n(e, t) {
		return e.has(t);
	}
	t.exports = n;
})), tt = /* @__PURE__ */ B(((e, t) => {
	var n = Qe(), r = $e(), i = et(), a = 1, o = 2;
	function s(e, t, s, c, l, u) {
		var d = s & a, f = e.length, p = t.length;
		if (f != p && !(d && p > f)) return !1;
		var m = u.get(e), h = u.get(t);
		if (m && h) return m == t && h == e;
		var g = -1, _ = !0, v = s & o ? new n() : void 0;
		for (u.set(e, t), u.set(t, e); ++g < f;) {
			var y = e[g], b = t[g];
			if (c) var x = d ? c(b, y, g, t, e, u) : c(y, b, g, e, t, u);
			if (x !== void 0) {
				if (x) continue;
				_ = !1;
				break;
			}
			if (v) {
				if (!r(t, function(e, t) {
					if (!i(v, t) && (y === e || l(y, e, s, c, u))) return v.push(t);
				})) {
					_ = !1;
					break;
				}
			} else if (!(y === b || l(y, b, s, c, u))) {
				_ = !1;
				break;
			}
		}
		return u.delete(e), u.delete(t), _;
	}
	t.exports = s;
})), nt = /* @__PURE__ */ B(((e, t) => {
	t.exports = U().Uint8Array;
})), rt = /* @__PURE__ */ B(((e, t) => {
	function n(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e, r) {
			n[++t] = [r, e];
		}), n;
	}
	t.exports = n;
})), it = /* @__PURE__ */ B(((e, t) => {
	function n(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e) {
			n[++t] = e;
		}), n;
	}
	t.exports = n;
})), at = /* @__PURE__ */ B(((e, t) => {
	var n = Se(), r = nt(), i = V(), a = tt(), o = rt(), s = it(), c = 1, l = 2, u = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Map]", m = "[object Number]", h = "[object RegExp]", g = "[object Set]", _ = "[object String]", v = "[object Symbol]", y = "[object ArrayBuffer]", b = "[object DataView]", x = n ? n.prototype : void 0, S = x ? x.valueOf : void 0;
	function C(e, t, n, x, C, w, T) {
		switch (n) {
			case b:
				if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
				e = e.buffer, t = t.buffer;
			case y: return !(e.byteLength != t.byteLength || !w(new r(e), new r(t)));
			case u:
			case d:
			case m: return i(+e, +t);
			case f: return e.name == t.name && e.message == t.message;
			case h:
			case _: return e == t + "";
			case p: var E = o;
			case g:
				var D = x & c;
				if (E ||= s, e.size != t.size && !D) return !1;
				var O = T.get(e);
				if (O) return O == t;
				x |= l, T.set(e, t);
				var k = a(E(e), E(t), x, C, w, T);
				return T.delete(e), k;
			case v: if (S) return S.call(e) == S.call(t);
		}
		return !1;
	}
	t.exports = C;
})), ot = /* @__PURE__ */ B(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
		return e;
	}
	t.exports = n;
})), st = /* @__PURE__ */ B(((e, t) => {
	t.exports = Array.isArray;
})), ct = /* @__PURE__ */ B(((e, t) => {
	var n = ot(), r = st();
	function i(e, t, i) {
		var a = t(e);
		return r(e) ? a : n(a, i(e));
	}
	t.exports = i;
})), lt = /* @__PURE__ */ B(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
			var o = e[n];
			t(o, n, e) && (a[i++] = o);
		}
		return a;
	}
	t.exports = n;
})), ut = /* @__PURE__ */ B(((e, t) => {
	function n() {
		return [];
	}
	t.exports = n;
})), dt = /* @__PURE__ */ B(((e, t) => {
	var n = lt(), r = ut(), i = Object.prototype.propertyIsEnumerable, a = Object.getOwnPropertySymbols;
	t.exports = a ? function(e) {
		return e == null ? [] : (e = Object(e), n(a(e), function(t) {
			return i.call(e, t);
		}));
	} : r;
})), ft = /* @__PURE__ */ B(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
		return r;
	}
	t.exports = n;
})), K = /* @__PURE__ */ B(((e, t) => {
	function n(e) {
		return typeof e == "object" && !!e;
	}
	t.exports = n;
})), pt = /* @__PURE__ */ B(((e, t) => {
	var n = Te(), r = K(), i = "[object Arguments]";
	function a(e) {
		return r(e) && n(e) == i;
	}
	t.exports = a;
})), mt = /* @__PURE__ */ B(((e, t) => {
	var n = pt(), r = K(), i = Object.prototype, a = i.hasOwnProperty, o = i.propertyIsEnumerable;
	t.exports = n(function() {
		return arguments;
	}()) ? n : function(e) {
		return r(e) && a.call(e, "callee") && !o.call(e, "callee");
	};
})), ht = /* @__PURE__ */ B(((e, t) => {
	function n() {
		return !1;
	}
	t.exports = n;
})), gt = /* @__PURE__ */ B(((e, t) => {
	var n = U(), r = ht(), i = typeof e == "object" && e && !e.nodeType && e, a = i && typeof t == "object" && t && !t.nodeType && t, o = a && a.exports === i ? n.Buffer : void 0;
	t.exports = (o ? o.isBuffer : void 0) || r;
})), _t = /* @__PURE__ */ B(((e, t) => {
	var n = /^(?:0|[1-9]\d*)$/;
	function r(e, t) {
		var r = typeof e;
		return t ??= 9007199254740991, !!t && (r == "number" || r != "symbol" && n.test(e)) && e > -1 && e % 1 == 0 && e < t;
	}
	t.exports = r;
})), vt = /* @__PURE__ */ B(((e, t) => {
	function n(e) {
		return typeof e == "number" && e > -1 && e % 1 == 0 && e <= 9007199254740991;
	}
	t.exports = n;
})), yt = /* @__PURE__ */ B(((e, t) => {
	var n = Te(), r = vt(), i = K(), a = "[object Arguments]", o = "[object Array]", s = "[object Boolean]", c = "[object Date]", l = "[object Error]", u = "[object Function]", d = "[object Map]", f = "[object Number]", p = "[object Object]", m = "[object RegExp]", h = "[object Set]", g = "[object String]", _ = "[object WeakMap]", v = "[object ArrayBuffer]", y = "[object DataView]", b = "[object Float32Array]", x = "[object Float64Array]", S = "[object Int8Array]", C = "[object Int16Array]", w = "[object Int32Array]", T = "[object Uint8Array]", E = "[object Uint8ClampedArray]", D = "[object Uint16Array]", O = "[object Uint32Array]", k = {};
	k[b] = k[x] = k[S] = k[C] = k[w] = k[T] = k[E] = k[D] = k[O] = !0, k[a] = k[o] = k[v] = k[s] = k[y] = k[c] = k[l] = k[u] = k[d] = k[f] = k[p] = k[m] = k[h] = k[g] = k[_] = !1;
	function A(e) {
		return i(e) && r(e.length) && !!k[n(e)];
	}
	t.exports = A;
})), bt = /* @__PURE__ */ B(((e, t) => {
	function n(e) {
		return function(t) {
			return e(t);
		};
	}
	t.exports = n;
})), xt = /* @__PURE__ */ B(((e, t) => {
	var n = xe(), r = typeof e == "object" && e && !e.nodeType && e, i = r && typeof t == "object" && t && !t.nodeType && t, a = i && i.exports === r && n.process;
	t.exports = function() {
		try {
			return i && i.require && i.require("util").types || a && a.binding && a.binding("util");
		} catch {}
	}();
})), St = /* @__PURE__ */ B(((e, t) => {
	var n = yt(), r = bt(), i = xt(), a = i && i.isTypedArray;
	t.exports = a ? r(a) : n;
})), Ct = /* @__PURE__ */ B(((e, t) => {
	var n = ft(), r = mt(), i = st(), a = gt(), o = _t(), s = St(), c = Object.prototype.hasOwnProperty;
	function l(e, t) {
		var l = i(e), u = !l && r(e), d = !l && !u && a(e), f = !l && !u && !d && s(e), p = l || u || d || f, m = p ? n(e.length, String) : [], h = m.length;
		for (var g in e) (t || c.call(e, g)) && !(p && (g == "length" || d && (g == "offset" || g == "parent") || f && (g == "buffer" || g == "byteLength" || g == "byteOffset") || o(g, h))) && m.push(g);
		return m;
	}
	t.exports = l;
})), wt = /* @__PURE__ */ B(((e, t) => {
	var n = Object.prototype;
	function r(e) {
		var t = e && e.constructor;
		return e === (typeof t == "function" && t.prototype || n);
	}
	t.exports = r;
})), Tt = /* @__PURE__ */ B(((e, t) => {
	function n(e, t) {
		return function(n) {
			return e(t(n));
		};
	}
	t.exports = n;
})), Et = /* @__PURE__ */ B(((e, t) => {
	t.exports = Tt()(Object.keys, Object);
})), Dt = /* @__PURE__ */ B(((e, t) => {
	var n = wt(), r = Et(), i = Object.prototype.hasOwnProperty;
	function a(e) {
		if (!n(e)) return r(e);
		var t = [];
		for (var a in Object(e)) i.call(e, a) && a != "constructor" && t.push(a);
		return t;
	}
	t.exports = a;
})), Ot = /* @__PURE__ */ B(((e, t) => {
	var n = Ee(), r = vt();
	function i(e) {
		return e != null && r(e.length) && !n(e);
	}
	t.exports = i;
})), kt = /* @__PURE__ */ B(((e, t) => {
	var n = Ct(), r = Dt(), i = Ot();
	function a(e) {
		return i(e) ? n(e) : r(e);
	}
	t.exports = a;
})), At = /* @__PURE__ */ B(((e, t) => {
	var n = ct(), r = dt(), i = kt();
	function a(e) {
		return n(e, i, r);
	}
	t.exports = a;
})), jt = /* @__PURE__ */ B(((e, t) => {
	var n = At(), r = 1, i = Object.prototype.hasOwnProperty;
	function a(e, t, a, o, s, c) {
		var l = a & r, u = n(e), d = u.length;
		if (d != n(t).length && !l) return !1;
		for (var f = d; f--;) {
			var p = u[f];
			if (!(l ? p in t : i.call(t, p))) return !1;
		}
		var m = c.get(e), h = c.get(t);
		if (m && h) return m == t && h == e;
		var g = !0;
		c.set(e, t), c.set(t, e);
		for (var _ = l; ++f < d;) {
			p = u[f];
			var v = e[p], y = t[p];
			if (o) var b = l ? o(y, v, p, t, e, c) : o(v, y, p, e, t, c);
			if (!(b === void 0 ? v === y || s(v, y, a, o, c) : b)) {
				g = !1;
				break;
			}
			_ ||= p == "constructor";
		}
		if (g && !_) {
			var x = e.constructor, S = t.constructor;
			x != S && "constructor" in e && "constructor" in t && !(typeof x == "function" && x instanceof x && typeof S == "function" && S instanceof S) && (g = !1);
		}
		return c.delete(e), c.delete(t), g;
	}
	t.exports = a;
})), Mt = /* @__PURE__ */ B(((e, t) => {
	t.exports = G()(U(), "DataView");
})), Nt = /* @__PURE__ */ B(((e, t) => {
	t.exports = G()(U(), "Promise");
})), Pt = /* @__PURE__ */ B(((e, t) => {
	t.exports = G()(U(), "Set");
})), Ft = /* @__PURE__ */ B(((e, t) => {
	t.exports = G()(U(), "WeakMap");
})), It = /* @__PURE__ */ B(((e, t) => {
	var n = Mt(), r = Me(), i = Nt(), a = Pt(), o = Ft(), s = Te(), c = ke(), l = "[object Map]", u = "[object Object]", d = "[object Promise]", f = "[object Set]", p = "[object WeakMap]", m = "[object DataView]", h = c(n), g = c(r), _ = c(i), v = c(a), y = c(o), b = s;
	(n && b(new n(/* @__PURE__ */ new ArrayBuffer(1))) != m || r && b(new r()) != l || i && b(i.resolve()) != d || a && b(new a()) != f || o && b(new o()) != p) && (b = function(e) {
		var t = s(e), n = t == u ? e.constructor : void 0, r = n ? c(n) : "";
		if (r) switch (r) {
			case h: return m;
			case g: return l;
			case _: return d;
			case v: return f;
			case y: return p;
		}
		return t;
	}), t.exports = b;
})), Lt = /* @__PURE__ */ B(((e, t) => {
	var n = Ye(), r = tt(), i = at(), a = jt(), o = It(), s = st(), c = gt(), l = St(), u = 1, d = "[object Arguments]", f = "[object Array]", p = "[object Object]", m = Object.prototype.hasOwnProperty;
	function h(e, t, h, g, _, v) {
		var y = s(e), b = s(t), x = y ? f : o(e), S = b ? f : o(t);
		x = x == d ? p : x, S = S == d ? p : S;
		var C = x == p, w = S == p, T = x == S;
		if (T && c(e)) {
			if (!c(t)) return !1;
			y = !0, C = !1;
		}
		if (T && !C) return v ||= new n(), y || l(e) ? r(e, t, h, g, _, v) : i(e, t, x, h, g, _, v);
		if (!(h & u)) {
			var E = C && m.call(e, "__wrapped__"), D = w && m.call(t, "__wrapped__");
			if (E || D) {
				var O = E ? e.value() : e, k = D ? t.value() : t;
				return v ||= new n(), _(O, k, h, g, v);
			}
		}
		return T ? (v ||= new n(), a(e, t, h, g, _, v)) : !1;
	}
	t.exports = h;
})), Rt = /* @__PURE__ */ B(((e, t) => {
	var n = Lt(), r = K();
	function i(e, t, a, o, s) {
		return e === t ? !0 : e == null || t == null || !r(e) && !r(t) ? e !== e && t !== t : n(e, t, a, o, i, s);
	}
	t.exports = i;
})), zt = /* @__PURE__ */ B(((e, t) => {
	var n = Rt();
	function r(e, t) {
		return n(e, t);
	}
	t.exports = r;
})), Bt = /* @__PURE__ */ B(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
		return e;
	}
	t.exports = n;
})), Vt = /* @__PURE__ */ B(((e, t) => {
	var n = G();
	t.exports = function() {
		try {
			var e = n(Object, "defineProperty");
			return e({}, "", {}), e;
		} catch {}
	}();
})), Ht = /* @__PURE__ */ B(((e, t) => {
	var n = Vt();
	function r(e, t, r) {
		t == "__proto__" && n ? n(e, t, {
			configurable: !0,
			enumerable: !0,
			value: r,
			writable: !0
		}) : e[t] = r;
	}
	t.exports = r;
})), Ut = /* @__PURE__ */ B(((e, t) => {
	var n = Ht(), r = V(), i = Object.prototype.hasOwnProperty;
	function a(e, t, a) {
		var o = e[t];
		(!(i.call(e, t) && r(o, a)) || a === void 0 && !(t in e)) && n(e, t, a);
	}
	t.exports = a;
})), Wt = /* @__PURE__ */ B(((e, t) => {
	var n = Ut(), r = Ht();
	function i(e, t, i, a) {
		var o = !i;
		i ||= {};
		for (var s = -1, c = t.length; ++s < c;) {
			var l = t[s], u = a ? a(i[l], e[l], l, i, e) : void 0;
			u === void 0 && (u = e[l]), o ? r(i, l, u) : n(i, l, u);
		}
		return i;
	}
	t.exports = i;
})), Gt = /* @__PURE__ */ B(((e, t) => {
	var n = Wt(), r = kt();
	function i(e, t) {
		return e && n(t, r(t), e);
	}
	t.exports = i;
})), Kt = /* @__PURE__ */ B(((e, t) => {
	function n(e) {
		var t = [];
		if (e != null) for (var n in Object(e)) t.push(n);
		return t;
	}
	t.exports = n;
})), qt = /* @__PURE__ */ B(((e, t) => {
	var n = W(), r = wt(), i = Kt(), a = Object.prototype.hasOwnProperty;
	function o(e) {
		if (!n(e)) return i(e);
		var t = r(e), o = [];
		for (var s in e) s == "constructor" && (t || !a.call(e, s)) || o.push(s);
		return o;
	}
	t.exports = o;
})), Jt = /* @__PURE__ */ B(((e, t) => {
	var n = Ct(), r = qt(), i = Ot();
	function a(e) {
		return i(e) ? n(e, !0) : r(e);
	}
	t.exports = a;
})), Yt = /* @__PURE__ */ B(((e, t) => {
	var n = Wt(), r = Jt();
	function i(e, t) {
		return e && n(t, r(t), e);
	}
	t.exports = i;
})), Xt = /* @__PURE__ */ B(((e, t) => {
	var n = U(), r = typeof e == "object" && e && !e.nodeType && e, i = r && typeof t == "object" && t && !t.nodeType && t, a = i && i.exports === r ? n.Buffer : void 0, o = a ? a.allocUnsafe : void 0;
	function s(e, t) {
		if (t) return e.slice();
		var n = e.length, r = o ? o(n) : new e.constructor(n);
		return e.copy(r), r;
	}
	t.exports = s;
})), Zt = /* @__PURE__ */ B(((e, t) => {
	function n(e, t) {
		var n = -1, r = e.length;
		for (t ||= Array(r); ++n < r;) t[n] = e[n];
		return t;
	}
	t.exports = n;
})), Qt = /* @__PURE__ */ B(((e, t) => {
	var n = Wt(), r = dt();
	function i(e, t) {
		return n(e, r(e), t);
	}
	t.exports = i;
})), $t = /* @__PURE__ */ B(((e, t) => {
	t.exports = Tt()(Object.getPrototypeOf, Object);
})), en = /* @__PURE__ */ B(((e, t) => {
	var n = ot(), r = $t(), i = dt(), a = ut();
	t.exports = Object.getOwnPropertySymbols ? function(e) {
		for (var t = []; e;) n(t, i(e)), e = r(e);
		return t;
	} : a;
})), tn = /* @__PURE__ */ B(((e, t) => {
	var n = Wt(), r = en();
	function i(e, t) {
		return n(e, r(e), t);
	}
	t.exports = i;
})), nn = /* @__PURE__ */ B(((e, t) => {
	var n = ct(), r = en(), i = Jt();
	function a(e) {
		return n(e, i, r);
	}
	t.exports = a;
})), rn = /* @__PURE__ */ B(((e, t) => {
	var n = Object.prototype.hasOwnProperty;
	function r(e) {
		var t = e.length, r = new e.constructor(t);
		return t && typeof e[0] == "string" && n.call(e, "index") && (r.index = e.index, r.input = e.input), r;
	}
	t.exports = r;
})), an = /* @__PURE__ */ B(((e, t) => {
	var n = nt();
	function r(e) {
		var t = new e.constructor(e.byteLength);
		return new n(t).set(new n(e)), t;
	}
	t.exports = r;
})), on = /* @__PURE__ */ B(((e, t) => {
	var n = an();
	function r(e, t) {
		var r = t ? n(e.buffer) : e.buffer;
		return new e.constructor(r, e.byteOffset, e.byteLength);
	}
	t.exports = r;
})), sn = /* @__PURE__ */ B(((e, t) => {
	var n = /\w*$/;
	function r(e) {
		var t = new e.constructor(e.source, n.exec(e));
		return t.lastIndex = e.lastIndex, t;
	}
	t.exports = r;
})), cn = /* @__PURE__ */ B(((e, t) => {
	var n = Se(), r = n ? n.prototype : void 0, i = r ? r.valueOf : void 0;
	function a(e) {
		return i ? Object(i.call(e)) : {};
	}
	t.exports = a;
})), ln = /* @__PURE__ */ B(((e, t) => {
	var n = an();
	function r(e, t) {
		var r = t ? n(e.buffer) : e.buffer;
		return new e.constructor(r, e.byteOffset, e.length);
	}
	t.exports = r;
})), un = /* @__PURE__ */ B(((e, t) => {
	var n = an(), r = on(), i = sn(), a = cn(), o = ln(), s = "[object Boolean]", c = "[object Date]", l = "[object Map]", u = "[object Number]", d = "[object RegExp]", f = "[object Set]", p = "[object String]", m = "[object Symbol]", h = "[object ArrayBuffer]", g = "[object DataView]", _ = "[object Float32Array]", v = "[object Float64Array]", y = "[object Int8Array]", b = "[object Int16Array]", x = "[object Int32Array]", S = "[object Uint8Array]", C = "[object Uint8ClampedArray]", w = "[object Uint16Array]", T = "[object Uint32Array]";
	function E(e, t, E) {
		var D = e.constructor;
		switch (t) {
			case h: return n(e);
			case s:
			case c: return new D(+e);
			case g: return r(e, E);
			case _:
			case v:
			case y:
			case b:
			case x:
			case S:
			case C:
			case w:
			case T: return o(e, E);
			case l: return new D();
			case u:
			case p: return new D(e);
			case d: return i(e);
			case f: return new D();
			case m: return a(e);
		}
	}
	t.exports = E;
})), dn = /* @__PURE__ */ B(((e, t) => {
	var n = W(), r = Object.create;
	t.exports = function() {
		function e() {}
		return function(t) {
			if (!n(t)) return {};
			if (r) return r(t);
			e.prototype = t;
			var i = new e();
			return e.prototype = void 0, i;
		};
	}();
})), fn = /* @__PURE__ */ B(((e, t) => {
	var n = dn(), r = $t(), i = wt();
	function a(e) {
		return typeof e.constructor == "function" && !i(e) ? n(r(e)) : {};
	}
	t.exports = a;
})), pn = /* @__PURE__ */ B(((e, t) => {
	var n = It(), r = K(), i = "[object Map]";
	function a(e) {
		return r(e) && n(e) == i;
	}
	t.exports = a;
})), mn = /* @__PURE__ */ B(((e, t) => {
	var n = pn(), r = bt(), i = xt(), a = i && i.isMap;
	t.exports = a ? r(a) : n;
})), hn = /* @__PURE__ */ B(((e, t) => {
	var n = It(), r = K(), i = "[object Set]";
	function a(e) {
		return r(e) && n(e) == i;
	}
	t.exports = a;
})), gn = /* @__PURE__ */ B(((e, t) => {
	var n = hn(), r = bt(), i = xt(), a = i && i.isSet;
	t.exports = a ? r(a) : n;
})), _n = /* @__PURE__ */ B(((e, t) => {
	var n = Ye(), r = Bt(), i = Ut(), a = Gt(), o = Yt(), s = Xt(), c = Zt(), l = Qt(), u = tn(), d = At(), f = nn(), p = It(), m = rn(), h = un(), g = fn(), _ = st(), v = gt(), y = mn(), b = W(), x = gn(), S = kt(), C = Jt(), w = 1, T = 2, E = 4, D = "[object Arguments]", O = "[object Array]", k = "[object Boolean]", A = "[object Date]", j = "[object Error]", M = "[object Function]", N = "[object GeneratorFunction]", P = "[object Map]", F = "[object Number]", I = "[object Object]", L = "[object RegExp]", ee = "[object Set]", R = "[object String]", z = "[object Symbol]", te = "[object WeakMap]", ne = "[object ArrayBuffer]", re = "[object DataView]", B = "[object Float32Array]", ie = "[object Float64Array]", ae = "[object Int8Array]", oe = "[object Int16Array]", se = "[object Int32Array]", ce = "[object Uint8Array]", le = "[object Uint8ClampedArray]", ue = "[object Uint16Array]", de = "[object Uint32Array]", V = {};
	V[D] = V[O] = V[ne] = V[re] = V[k] = V[A] = V[B] = V[ie] = V[ae] = V[oe] = V[se] = V[P] = V[F] = V[I] = V[L] = V[ee] = V[R] = V[z] = V[ce] = V[le] = V[ue] = V[de] = !0, V[j] = V[M] = V[te] = !1;
	function H(e, t, O, k, A, j) {
		var P, F = t & w, L = t & T, ee = t & E;
		if (O && (P = A ? O(e, k, A, j) : O(e)), P !== void 0) return P;
		if (!b(e)) return e;
		var R = _(e);
		if (R) {
			if (P = m(e), !F) return c(e, P);
		} else {
			var z = p(e), te = z == M || z == N;
			if (v(e)) return s(e, F);
			if (z == I || z == D || te && !A) {
				if (P = L || te ? {} : g(e), !F) return L ? u(e, o(P, e)) : l(e, a(P, e));
			} else {
				if (!V[z]) return A ? e : {};
				P = h(e, z, F);
			}
		}
		j ||= new n();
		var ne = j.get(e);
		if (ne) return ne;
		j.set(e, P), x(e) ? e.forEach(function(n) {
			P.add(H(n, t, O, n, e, j));
		}) : y(e) && e.forEach(function(n, r) {
			P.set(r, H(n, t, O, r, e, j));
		});
		var re = R ? void 0 : (ee ? L ? f : d : L ? C : S)(e);
		return r(re || e, function(n, r) {
			re && (r = n, n = e[r]), i(P, r, H(n, t, O, r, e, j));
		}), P;
	}
	t.exports = H;
})), vn = /* @__PURE__ */ B(((e, t) => {
	var n = _n(), r = 1, i = 4;
	function a(e) {
		return n(e, r | i);
	}
	t.exports = a;
})), yn = /* @__PURE__ */ oe(zt(), 1), bn = /* @__PURE__ */ oe(vn(), 1), xn = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var Sn = Object.prototype.toString, Cn = (e) => Sn.call(e) === "[object Object]", wn = () => {};
function Tn(e, t) {
	function n(...n) {
		return new Promise((r, i) => {
			Promise.resolve(e(() => t.apply(this, n), {
				fn: t,
				thisArg: this,
				args: n
			})).then(r).catch(i);
		});
	}
	return n;
}
function En(e, t = {}) {
	let n, r, i = wn, a = (e) => {
		clearTimeout(e), i(), i = wn;
	}, o;
	return (s) => {
		let c = O(e), l = O(t.maxWait);
		return n && a(n), c <= 0 || l !== void 0 && l <= 0 ? (r &&= (a(r), void 0), Promise.resolve(s())) : new Promise((e, u) => {
			i = t.rejectOnCancel ? u : e, o = s, l && !r && (r = setTimeout(() => {
				n && a(n), r = void 0, e(o());
			}, l)), n = setTimeout(() => {
				r && a(r), r = void 0, e(s());
			}, c);
		});
	};
}
function Dn(e) {
	return Object.entries(e);
}
function On(e) {
	return Array.isArray(e) ? e : [e];
}
function kn(e) {
	return f(e) ? y(new Proxy({}, {
		get(t, n, r) {
			return k(Reflect.get(e.value, n, r));
		},
		set(t, n, r) {
			return f(e.value[n]) && !f(r) ? e.value[n].value = r : e.value[n] = r, !0;
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
	})) : y(e);
}
function An(e) {
	return kn(t(e));
}
function jn(e, ...t) {
	let n = t.flat(), r = n[0];
	return An(() => Object.fromEntries(typeof r == "function" ? Object.entries(D(e)).filter(([e, t]) => !r(O(t), e)) : Object.entries(D(e)).filter((e) => !n.includes(e[0]))));
}
function Mn(e, t = 200, n = {}) {
	return Tn(En(t, n), e);
}
function Nn(e, t, n) {
	return j(e, t, {
		...n,
		immediate: !0
	});
}
//#endregion
//#region node_modules/@vueuse/core/dist/index.js
var Pn = xn ? window : void 0;
xn && window.document, xn && window.navigator, xn && window.location;
function Fn(e) {
	let t = O(e);
	return t?.$el ?? t;
}
function In(...e) {
	let n = (e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)), r = t(() => {
		let t = On(O(e[0])).filter((e) => e != null);
		return t.every((e) => typeof e != "string") ? t : void 0;
	});
	return Nn(() => [
		r.value?.map((e) => Fn(e)) ?? [Pn].filter((e) => e != null),
		On(O(r.value ? e[1] : e[0])),
		On(k(r.value ? e[2] : e[1])),
		O(r.value ? e[3] : e[2])
	], ([e, t, r, i], a, o) => {
		if (!e?.length || !t?.length || !r?.length) return;
		let s = Cn(i) ? { ...i } : i, c = e.flatMap((e) => t.flatMap((t) => r.map((r) => n(e, t, r, s))));
		o(() => {
			c.forEach((e) => e());
		});
	}, { flush: "post" });
}
var Ln = [
	"hash",
	"host",
	"hostname",
	"href",
	"pathname",
	"port",
	"protocol",
	"search"
];
function Rn(e = {}) {
	let { window: t = Pn } = e, n = Object.fromEntries(Ln.map((e) => [e, b()]));
	for (let [e, r] of Dn(n)) j(r, (n) => {
		!t?.location || t.location[e] === n || (t.location[e] = n);
	});
	let r = (e) => {
		var r;
		let { state: i, length: a } = t?.history || {}, { origin: o } = t?.location || {};
		for (let e of Ln) n[e].value = t == null || (r = t.location) == null ? void 0 : r[e];
		return y({
			trigger: e,
			state: i,
			length: a,
			origin: o,
			...n
		});
	}, i = b(r("load"));
	if (t) {
		let e = { passive: !0 };
		In(t, "popstate", () => i.value = r("popstate"), e), In(t, "hashchange", () => i.value = r("hashchange"), e);
	}
	return i;
}
//#endregion
//#region resources/js/Utils/asyncRouter.ts
var zn = {
	visit(e, t) {
		return new Promise((n, r) => {
			P.visit(e, {
				...t,
				onSuccess: (...e) => n(e),
				onError: r,
				onCancel: r
			});
		});
	},
	patch(e, t, n) {
		return this.visit(e, {
			...n,
			data: t,
			method: "patch"
		});
	},
	post(e, t, n) {
		return this.visit(e, {
			...n,
			data: t,
			method: "post"
		});
	},
	delete(e, t) {
		return this.visit(e, {
			...t,
			method: "delete"
		});
	}
};
//#endregion
//#region resources/js/Utils/components.ts
function Bn(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Vn(e, t, n) {
	return e.replace(new RegExp(Bn(t), "g"), n);
}
function Hn(e, t, n) {
	Object.keys(t).forEach((r) => {
		let i = t[r];
		if (!i) return;
		let a = `${n}${Vn(Vn(Vn(r, "./", ""), "/", ""), ".vue", "")}`;
		e.component(a, "default" in i ? i.default : i);
	});
}
//#endregion
//#region node_modules/decode-uri-component/index.js
var Un = /* @__PURE__ */ RegExp("(%[a-f0-9]{2})|([^%]+?)", "gi"), Wn = /* @__PURE__ */ RegExp("(%[a-f0-9]{2})+", "gi");
function Gn(e, t) {
	try {
		return [decodeURIComponent(e.join(""))];
	} catch {}
	if (e.length === 1) return e;
	t ||= 1;
	let n = e.slice(0, t), r = e.slice(t);
	return Array.prototype.concat.call([], Gn(n), Gn(r));
}
function Kn(e) {
	try {
		return decodeURIComponent(e);
	} catch {
		let t = e.match(Un) || [];
		for (let n = 1; n < t.length; n++) e = Gn(t, n).join(""), t = e.match(Un) || [];
		return e;
	}
}
function qn(e) {
	let t = {
		"%FE%FF": "��",
		"%FF%FE": "��"
	}, n = Wn.exec(e);
	for (; n;) {
		try {
			t[n[0]] = decodeURIComponent(n[0]);
		} catch {
			let e = Kn(n[0]);
			e !== n[0] && (t[n[0]] = e);
		}
		n = Wn.exec(e);
	}
	t["%C2"] = "�";
	let r = Object.keys(t);
	for (let n of r) e = e.replace(new RegExp(n, "g"), t[n]);
	return e;
}
function Jn(e) {
	if (typeof e != "string") throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
	try {
		return decodeURIComponent(e);
	} catch {
		return qn(e);
	}
}
//#endregion
//#region node_modules/filter-obj/index.js
function Yn(e, t) {
	let n = {};
	if (Array.isArray(t)) for (let r of t) {
		let t = Object.getOwnPropertyDescriptor(e, r);
		t?.enumerable && Object.defineProperty(n, r, t);
	}
	else for (let r of Reflect.ownKeys(e)) {
		let i = Object.getOwnPropertyDescriptor(e, r);
		if (i.enumerable) {
			let a = e[r];
			t(r, a, e) && Object.defineProperty(n, r, i);
		}
	}
	return n;
}
//#endregion
//#region node_modules/split-on-first/index.js
function Xn(e, t) {
	if (!(typeof e == "string" && typeof t == "string")) throw TypeError("Expected the arguments to be of type `string`");
	if (e === "" || t === "") return [];
	let n = e.indexOf(t);
	return n === -1 ? [] : [e.slice(0, n), e.slice(n + t.length)];
}
//#endregion
//#region node_modules/query-string/base.js
var Zn = /* @__PURE__ */ ie({
	exclude: () => hr,
	extract: () => lr,
	parse: () => ur,
	parseUrl: () => fr,
	pick: () => mr,
	stringify: () => dr,
	stringifyUrl: () => pr
}), Qn = (e) => e == null, $n = (e) => encodeURIComponent(e).replaceAll(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), er = Symbol("encodeFragmentIdentifier");
function tr(e) {
	switch (e.arrayFormat) {
		case "index": return (t) => (n, r) => {
			let i = n.length;
			return r === void 0 || e.skipNull && r === null || e.skipEmptyString && r === "" ? n : r === null ? (n.push([
				q(t, e),
				"[",
				i,
				"]"
			].join("")), n) : (n.push([
				q(t, e),
				"[",
				q(i, e),
				"]=",
				q(r, e)
			].join("")), n);
		};
		case "bracket": return (t) => (n, r) => r === void 0 || e.skipNull && r === null || e.skipEmptyString && r === "" ? n : r === null ? (n.push([q(t, e), "[]"].join("")), n) : (n.push([
			q(t, e),
			"[]=",
			q(r, e)
		].join("")), n);
		case "colon-list-separator": return (t) => (n, r) => r === void 0 || e.skipNull && r === null || e.skipEmptyString && r === "" ? n : r === null ? (n.push([q(t, e), ":list="].join("")), n) : (n.push([
			q(t, e),
			":list=",
			q(r, e)
		].join("")), n);
		case "comma":
		case "separator":
		case "bracket-separator": {
			let t = e.arrayFormat === "bracket-separator" ? "[]=" : "=";
			return (n) => (r, i) => i === void 0 || e.skipNull && i === null || e.skipEmptyString && i === "" ? r : (i = i === null ? "" : i, r.length === 0 ? (r.push([
				q(n, e),
				t,
				q(i, e)
			].join("")), r) : (r.push(q(i, e)), r));
		}
		default: return (t) => (n, r) => r === void 0 || e.skipNull && r === null || e.skipEmptyString && r === "" ? n : r === null ? (n.push(q(t, e)), n) : (n.push([
			q(t, e),
			"=",
			q(r, e)
		].join("")), n);
	}
}
function nr(e) {
	let t;
	switch (e.arrayFormat) {
		case "index": return (e, n, r) => {
			if (t = /\[(\d*)]$/.exec(e), e = e.replace(/\[\d*]$/, ""), !t) {
				r[e] = n;
				return;
			}
			r[e] === void 0 && (r[e] = {}), r[e][t[1]] = n;
		};
		case "bracket": return (e, n, r) => {
			if (t = /(\[])$/.exec(e), e = e.replace(/\[]$/, ""), !t) {
				r[e] = n;
				return;
			}
			if (r[e] === void 0) {
				r[e] = [n];
				return;
			}
			if (!Array.isArray(r[e])) {
				r[e] = [r[e], n];
				return;
			}
			r[e].push(n);
		};
		case "colon-list-separator": return (e, n, r) => {
			if (t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), !t) {
				r[e] = n;
				return;
			}
			if (r[e] === void 0) {
				r[e] = [n];
				return;
			}
			if (!Array.isArray(r[e])) {
				r[e] = [r[e], n];
				return;
			}
			r[e].push(n);
		};
		case "comma":
		case "separator": return (t, n, r) => {
			r[t] = typeof n == "string" && n.includes(e.arrayFormatSeparator) ? n.split(e.arrayFormatSeparator).map((t) => J(t, e)) : n === null ? n : J(n, e);
		};
		case "bracket-separator": return (t, n, r) => {
			let i = /(\[])$/.test(t);
			if (t = t.replace(/\[]$/, ""), !i) {
				r[t] = n && J(n, e);
				return;
			}
			let a = n === null ? [] : J(n, e).split(e.arrayFormatSeparator);
			if (r[t] === void 0) {
				r[t] = a;
				return;
			}
			Array.isArray(r[t]) || (r[t] = [r[t]]);
			for (let e of a) r[t].push(e);
		};
		default: return (e, t, n) => {
			if (n[e] === void 0) {
				n[e] = t;
				return;
			}
			if (Array.isArray(n[e])) {
				n[e].push(t);
				return;
			}
			n[e] = [n[e], t];
		};
	}
}
function rr(e) {
	if (typeof e != "string" || e.length !== 1) throw TypeError("arrayFormatSeparator must be single character string");
}
function q(e, t) {
	return t.encode ? t.strict ? $n(e) : encodeURIComponent(e) : e;
}
function J(e, t) {
	return t.decode ? Jn(e) : e;
}
function ir(e) {
	return Array.isArray(e) ? e.sort() : typeof e == "object" ? ir(Object.keys(e)).sort((e, t) => Number(e) - Number(t)).map((t) => e[t]) : e;
}
function ar(e) {
	let t = e.indexOf("#");
	return t !== -1 && (e = e.slice(0, t)), e;
}
function or(e) {
	let t = "", n = e.indexOf("#");
	return n !== -1 && (t = e.slice(n)), t;
}
function sr(e) {
	let t = e.indexOf("?");
	return t === -1 ? e : e.slice(0, t);
}
function cr(e, t, n) {
	return n === "string" && typeof e == "string" ? e : typeof n == "function" && typeof e == "string" ? n(e) : n === "boolean" && e === null ? !0 : n === "boolean" && e !== null && (e.toLowerCase() === "true" || e.toLowerCase() === "false") ? e.toLowerCase() === "true" : n === "boolean" && e !== null && (e.toLowerCase() === "1" || e.toLowerCase() === "0") ? e.toLowerCase() === "1" : n === "string[]" && t.arrayFormat !== "none" && typeof e == "string" ? [e] : n === "number[]" && t.arrayFormat !== "none" && !Number.isNaN(Number(e)) && typeof e == "string" && e.trim() !== "" ? [Number(e)] : n === "number" && !Number.isNaN(Number(e)) && typeof e == "string" && e.trim() !== "" ? Number(e) : t.parseBooleans && e !== null && (e.toLowerCase() === "true" || e.toLowerCase() === "false") ? e.toLowerCase() === "true" : t.parseNumbers && !Number.isNaN(Number(e)) && typeof e == "string" && e.trim() !== "" ? Number(e) : e;
}
function lr(e) {
	e = ar(e);
	let t = e.indexOf("?");
	return t === -1 ? "" : e.slice(t + 1);
}
function ur(e, t) {
	t = {
		decode: !0,
		sort: !0,
		arrayFormat: "none",
		arrayFormatSeparator: ",",
		parseNumbers: !1,
		parseBooleans: !1,
		types: Object.create(null),
		...t
	}, rr(t.arrayFormatSeparator);
	let n = nr(t), r = Object.create(null);
	if (typeof e != "string" || (e = e.trim().replace(/^[?#&]/, ""), !e)) return r;
	let i = 0;
	for (let a = 0; a <= e.length; a++) {
		if (a < e.length && e[a] !== "&") continue;
		if (a === i) {
			i = a + 1;
			continue;
		}
		let o = e.slice(i, a);
		i = a + 1;
		let s = t.decode ? o.replaceAll("+", " ") : o, [c, l] = Xn(s, "=");
		c === void 0 && (c = s), l = l === void 0 ? null : [
			"comma",
			"separator",
			"bracket-separator"
		].includes(t.arrayFormat) ? l : J(l, t), n(J(c, t), l, r);
	}
	for (let [e, n] of Object.entries(r)) if (typeof n == "object" && n && t.types[e] !== "string") for (let [r, i] of Object.entries(n)) {
		let a = t.types[e], o = typeof a == "function" ? a : a ? a.replace("[]", "") : void 0;
		n[r] = cr(i, t, o);
	}
	else typeof n == "object" && n && t.types[e] === "string" ? r[e] = Object.values(n).join(t.arrayFormatSeparator) : r[e] = cr(n, t, t.types[e]);
	return t.sort === !1 ? r : (t.sort === !0 ? Object.keys(r).sort() : Object.keys(r).sort(t.sort)).reduce((e, t) => {
		let n = r[t];
		return e[t] = n && typeof n == "object" && !Array.isArray(n) ? ir(n) : n, e;
	}, Object.create(null));
}
function dr(e, t) {
	if (!e) return "";
	t = {
		encode: !0,
		strict: !0,
		arrayFormat: "none",
		arrayFormatSeparator: ",",
		...t
	}, rr(t.arrayFormatSeparator);
	let n = (n) => t.skipNull && Qn(e[n]) || t.skipEmptyString && e[n] === "", r = tr(t), i = {};
	for (let [t, r] of Object.entries(e)) n(t) || (i[t] = r);
	let a = Object.keys(i);
	return t.sort !== !1 && a.sort(t.sort), a.map((n) => {
		let i = e[n];
		if (t.replacer && (i = t.replacer(n, i), i === void 0) || i === void 0) return "";
		if (i === null) return q(n, t);
		if (Array.isArray(i)) {
			if (i.length === 0 && t.arrayFormat === "bracket-separator") return q(n, t) + "[]";
			let e = i;
			t.replacer && (e = i.map((e, r) => t.replacer(`${n}[${r}]`, e)).filter((e) => e !== void 0));
			let a = e.reduce(r(n), []), o = [
				"comma",
				"separator",
				"bracket-separator"
			].includes(t.arrayFormat) ? t.arrayFormatSeparator : "&";
			return a.join(o);
		}
		return q(n, t) + "=" + q(i, t);
	}).filter((e) => e.length > 0).join("&");
}
function fr(e, t) {
	t = {
		decode: !0,
		...t
	};
	let [n, r] = Xn(e, "#");
	return n === void 0 && (n = e), {
		url: sr(n ?? ""),
		query: ur(lr(e), t),
		...t && t.parseFragmentIdentifier && r ? { fragmentIdentifier: J(r, t) } : {}
	};
}
function pr(e, t) {
	t = {
		encode: !0,
		strict: !0,
		[er]: !0,
		...t
	};
	let n = sr(ar(e.url)) || "", r = dr({
		...ur(lr(e.url), {
			sort: !1,
			...t
		}),
		...e.query
	}, t);
	r &&= `?${r}`;
	let i = or(e.url);
	if (typeof e.fragmentIdentifier == "string") {
		let r = new URL(n, "https://query-string.invalid");
		r.hash = e.fragmentIdentifier, i = t[er] ? r.hash : `#${e.fragmentIdentifier}`;
	}
	return `${n}${r}${i}`;
}
function mr(e, t, n) {
	n = {
		parseFragmentIdentifier: !0,
		[er]: !1,
		...n
	};
	let { url: r, query: i, fragmentIdentifier: a } = fr(e, n);
	return pr({
		url: r,
		query: Yn(i, t),
		fragmentIdentifier: a
	}, n);
}
function hr(e, t, n) {
	if (Array.isArray(t)) {
		let r = new Set(t);
		return mr(e, (e) => !r.has(e), n);
	}
	return mr(e, (e, n) => !t(e, n), n);
}
//#endregion
//#region node_modules/query-string/index.js
var gr = Zn;
//#endregion
//#region resources/js/Utils/query.ts
function _r() {
	return gr.parse(location.search, {
		arrayFormat: "index",
		parseNumbers: !0
	});
}
function vr(e) {
	return gr.stringify(e, { arrayFormat: "index" });
}
function yr(e) {
	let t = _r();
	return e in t ? t[e] : null;
}
function br(e) {
	let [t = window.location.href] = window.location.href.split("?");
	return Object.keys(e).length > 0 ? `${t}?${vr(e)}` : t;
}
//#endregion
//#region resources/js/Composables/useFilter.ts
var xr = (e) => Array.isArray(e) && e.length === 0, Sr = (e, t) => t === "" || t == null || xr(t) || t === !1 ? e === "" || e == null || xr(e) || e === !1 : (0, yn.default)(e, t);
function Y(e, t) {
	let n = typeof e == "object" ? (0, bn.default)(e) : (0, bn.default)(e()), r = () => {
		let e = _r();
		return Object.keys(n).reduce((t, r) => (Sr(e[r], n[r]) || e[r] === void 0 ? t[r] = n[r] : t[r] = e[r], t), {});
	}, i = (e) => Object.keys(n).some((t) => !Sr(e[t], n[t])), a = r(), o, s = () => Object.keys(n).reduce((e, t) => (e[t] = o[t], e), {}), c = (e) => {
		let t = s();
		return e.some((e) => !Sr(t[e], n[e]));
	}, l = () => {
		Object.keys(n).forEach((e) => {
			o[e] = n[e];
		}), o.applied = !1;
	};
	o = y({
		...a,
		applied: i(a),
		appliedOnly: c,
		data: s,
		reset: l
	});
	let u = (e) => {
		let r = _r();
		return Object.keys(e).forEach((t) => {
			let i = e[t], a = n[t];
			Sr(i, a) || !i ? delete r[t] : r[t] = i;
		}), (t?.resetQuery ?? ["page", "cursor"]).forEach((e) => delete r[e]), br(r);
	}, d = null, f = Mn((e) => {
		d &&= (d.cancel(), null), P.visit(e, {
			preserveState: !0,
			preserveScroll: !0,
			onCancelToken: (e) => {
				d = e;
			},
			onSuccess: () => {
				o.applied = i(o.data()), t?.onSuccess && t.onSuccess();
			}
		});
	}, 50);
	return j(o, () => {
		let e = window.location.href, t = u(o.data());
		e != t && (o.applied = i(o.data()), f(t));
	}), o;
}
//#endregion
//#region resources/js/Composables/useFlash.ts
function Cr(e, t) {
	let n;
	g(() => {
		n = P.on("flash", (n) => {
			let r = n.detail.flash[e];
			r && t(r);
		});
	}), h(() => {
		n &&= (n(), void 0);
	});
}
//#endregion
//#region resources/js/Composables/useNavigation.ts
function X(e) {
	return typeof e == "object" && !!e && "route" in e;
}
function Z(e) {
	return typeof e == "object" && !!e && "url" in e;
}
function wr(e) {
	return typeof e == "object" && !!e && "path" in e;
}
function Tr(e) {
	return typeof e == "function";
}
function Er(e) {
	let n = F(), r = Rn();
	return t(() => {
		let t = O(e), i = r.value.href;
		return Q(t, n.url, i ? new URL(i) : null);
	});
}
function Q(e, t, n) {
	if (Array.isArray(e)) return e.some((e) => Q(e, t, n));
	if (wr(e)) return e.path === t;
	if (Z(e)) {
		if (n) {
			if (e.url.startsWith("/")) return e.url === n.pathname;
			let t = new URL(e.url);
			return `${t.host}${t.pathname}` == `${n.host}${n.pathname}`;
		}
		return !1;
	} else if (X(e)) return route().current(e.route, e.params);
	else if (typeof e == "function") return e();
	return !1;
}
function Dr(e) {
	let n = F(), r = Rn(), i = t(() => n.url), a = t(() => {
		let e = r.value.href;
		return e ? new URL(e) : null;
	}), o = (e) => {
		if (e.active) return Q(e.active, i.value, a.value);
		let t = e.action;
		if (t) {
			if (typeof t == "string") return Q({ url: t }, i.value, a.value);
			if (X(t) || Z(t) || wr(t)) return Q(t, i.value, a.value);
		}
		return !1;
	}, s = (e, t = !1) => e.children && e.children.some((e) => o(e)) ? !0 : t && e.children ? e.children.some((e) => s(e, !0)) : !1, c = (e) => e.badge ? e.badge.length > 0 : !1, l = (e, t = !1) => e.children && e.children.some((e) => c(e)) ? !0 : t && e.children ? e.children.some((e) => l(e, !0)) : !1, u = (e) => {
		let t = e.children, n = t ? t.map((e) => u(e)) : [];
		return {
			...e,
			isActive: o(e),
			isChildActive: s(e, !0),
			hasBadge: c(e),
			hasChildBadge: l(e, !0),
			children: n,
			hasChildren: t ? t.length > 0 : !1
		};
	}, d = t(() => O(e));
	return t(() => d.value.map((e) => u(e)));
}
//#endregion
//#region resources/js/Composables/useToggle.ts
function Or(e = !1) {
	let t = b(e);
	return {
		active: t,
		activate: () => {
			t.value = !0;
		},
		deactivate: () => {
			t.value = !1;
		}
	};
}
function kr(e, t) {
	j(e.active, (e) => {
		e && t();
	});
}
function Ar(e, t) {
	j(e.active, (e) => {
		e || t();
	});
}
//#endregion
//#region resources/js/Components/Navigation/NavigationButton.vue
var jr = /* @__PURE__ */ c({
	__name: "NavigationButton",
	props: {
		item: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["click"],
	setup(e, { emit: r }) {
		let i = r, a = e;
		le(t(() => a.item));
		let o = jn(a, "item", "as"), s = t(() => {
			if (a.as !== void 0) return a.as;
			let e = a.item.action;
			if (e) {
				if (Z(e)) return e.external === !0 ? "a" : N;
				if (wr(e) || X(e)) return N;
			}
			return "button";
		}), c = t(() => {
			let e = a.item.action, t = {};
			return e && (Z(e) ? (t.href = e.url, e.external !== !0 && (t.preserveScroll = e.preserveScroll, t.preserveState = e.preserveState)) : wr(e) ? (t.href = e.path, t.preserveScroll = e.preserveScroll, t.preserveState = e.preserveState) : X(e) && (t.href = route(e.route, e.params), t.preserveScroll = e.preserveScroll, t.preserveState = e.preserveState)), {
				...o,
				...t
			};
		}), l = (e) => {
			let t = a.item.action;
			t && Tr(t) ? t(e) : i("click", e);
		};
		return (t, r) => (_(), n(k(I), p({ as: s.value }, c.value, {
			onClick: l,
			"data-active": e.item.isActive || e.item.isChildActive ? "active" : void 0,
			"data-state": e.item.isActive ? "active" : "inactive",
			"data-child-state": e.item.isChildActive ? "active" : "inactive"
		}), {
			default: M(() => [S(t.$slots, "default")]),
			_: 3
		}, 16, [
			"as",
			"data-active",
			"data-state",
			"data-child-state"
		]));
	}
}), Mr = /* @__PURE__ */ c({
	__name: "NavigationButtonIcon",
	setup(e) {
		let i = ue(), a = t(() => i.value?.icon);
		return (e, t) => a.value && "src" in a.value ? (_(), n(k(se), {
			key: 0,
			src: a.value.src
		}, null, 8, ["src"])) : a.value ? (_(), n(C(a.value), { key: 1 })) : r("", !0);
	}
}), Nr = () => route("ui.data-table-action"), Pr = () => void 0;
function Fr(e = {}) {
	let n = b(0);
	return {
		isRunning: t(() => n.value > 0),
		run: (t, r, i) => {
			let a = e.endpoint ?? Nr, o = typeof a == "function" ? a() : a;
			n.value += 1;
			let s = !1, c = () => {
				s || (s = !0, n.value = Math.max(0, n.value - 1));
			};
			try {
				P.post(o, {
					selection: E([...r]),
					action: t.action,
					args: t.args
				}, {
					async: !0,
					optimistic: Pr,
					preserveScroll: !0,
					onSuccess: () => i?.onSuccess?.(),
					onError: () => {
						c(), i?.onError?.();
					},
					onFinish: () => {
						c(), i?.onFinish?.();
					}
				});
			} catch (e) {
				throw c(), e;
			}
		}
	};
}
function Ir(e, n = Fr()) {
	let r = b(null), i = w(null), a = w([]), o = t(() => r.value !== null), s = 0, c = (e, t, n) => E(e.action) === E(t) && e.selection.length === n.length && e.selection.every((e, t) => Object.is(e, n[t])), l = (e, t) => e.type === "Executable" && a.value.some((n) => c(n, e, t)), u = (e, t, r) => {
		let o = ++s, c = {
			id: o,
			action: e,
			selection: [...t]
		};
		a.value = [...a.value, c], i.value = c;
		let l = () => {
			let e = a.value.filter((e) => e.id !== o);
			e.length !== a.value.length && (a.value = e, i.value = e.at(-1) ?? null);
		};
		try {
			n.run(e, [...t], {
				onSuccess: () => r?.onSuccess?.(),
				onError: () => {
					l(), r?.onError?.();
				},
				onFinish: () => {
					l(), r?.onFinish?.();
				}
			});
		} catch (e) {
			throw l(), e;
		}
	}, d = (t, n) => {
		if (t.canRun) {
			if (t.type === "Event") {
				e({
					name: t.event,
					selection: [...n],
					action: t
				});
				return;
			}
			if (t.type === "Executable") {
				if (l(t, n)) return;
				t.confirmable ? r.value = {
					action: t,
					selection: [...n]
				} : u(t, n);
			}
		}
	}, f = () => {
		r.value = null;
	}, p = () => {
		let e = r.value;
		if (!e || l(e.action, e.selection)) return;
		let t = E(e);
		u(e.action, e.selection, { onSuccess: () => {
			r.value && E(r.value) === t && f();
		} });
	};
	return {
		...n,
		pendingAction: r,
		runningAction: i,
		isConfirmingAction: o,
		isActionRunning: l,
		activateAction: d,
		cancelAction: f,
		confirmAction: p
	};
}
//#endregion
//#region resources/js/Components/DataTable/selection.ts
function Lr(e, n, r = () => []) {
	let i = t(() => [...O(n)]), a = t(() => [...O(r)]), o = t(() => i.value.filter((e) => !a.value.includes(e))), s = t(() => e.value.filter((e) => o.value.includes(e)).length), c = t(() => o.value.length), l = t(() => s.value > 0), u = t(() => c.value > 0 && s.value === c.value), d = () => {
		e.value = [];
	}, f = () => {
		e.value = [...o.value];
	}, p = () => {
		u.value ? d() : f();
	}, m = (t) => e.value.includes(t), h = (e) => a.value.includes(e);
	return j(i, (e, t) => {
		t && (e.length !== t.length || e.some((e, n) => e !== t[n])) && d();
	}), {
		selection: e,
		availableRows: i,
		disabledRows: a,
		selectableRows: o,
		selectedCount: s,
		totalCount: c,
		somethingSelected: l,
		everythingSelected: u,
		clearSelection: d,
		selectEverything: f,
		toggleEverything: p,
		toggleRow: (t) => {
			h(t) || !i.value.includes(t) || (m(t) ? e.value = e.value.filter((e) => e !== t) : e.value = [...e.value, t]);
		},
		isRowSelected: m,
		isRowDisabled: h,
		withSelection: (t) => {
			l.value && t([...e.value]);
		}
	};
}
//#endregion
//#region resources/js/Components/DataTable/context.ts
var [Rr, zr] = L("DataTableRoot"), [Br, Vr] = L(["DataTableRow", "DataTableRows"]), [Hr, Ur] = L(["DataTableHeading", "DataTableHeadings"]), [Wr, Gr] = L(["DataTableCell", "DataTableCells"]), [Kr, qr] = L(["DataTableFooterCell", "DataTableFooterCells"]), [Jr, Yr] = L(["DataTableFilterWidget", "DataTableFilterWidgets"]), [Xr, Zr] = L("DataTableAction"), [Qr, $r] = L(["DataTableRoot", "DataTableResourceActionsRoot"]), [ei, ti] = L("DataTableResourceActionsRoot"), $ = () => Rr(), ni = () => Br(), ri = () => Hr(), ii = () => Wr(), ai = () => Kr(), oi = () => Jr(), si = () => Xr(), ci = () => Qr(), li = () => ei();
function ui(e, t) {
	return `${e ?? ""}${t}`;
}
function di(e, t) {
	let n = [];
	return Object.keys(e).forEach((r) => {
		let i = e[r], a = t[r];
		i && a?.[i] && n.push(a[i]);
	}), n.join(" ");
}
var fi = (e, t = "all") => e.filter((e) => e.canRun ? t === "inline" ? e.isInline : t !== "menu" || !e.isInline : !1);
function pi(e, n, r, i = {}) {
	let a = t(() => e.value.rows), o = t(() => e.value.headings), s = (t) => ui(e.value.queryPrefix, t), c = [s("page"), s("cursor")], l = (e) => e.actions.some((e) => e.canRun && e.isBulk), u = Lr(n, () => a.value.map((e) => e.key), () => a.value.filter((e) => !l(e)).map((e) => e.key)), d = t(() => a.value.filter((e) => n.value.includes(e.key))), f = t(() => a.value.some((e) => e.actions.some((e) => e.canRun))), p = t(() => a.value.some((e) => e.actions.some((e) => e.canRun && e.isBulk))), m = t(() => {
		let e = /* @__PURE__ */ new Map();
		return d.value.flatMap((e) => e.actions.filter((e) => e.canRun && e.isBulk)).forEach((t) => {
			e.has(t.name) || e.set(t.name, t);
		}), [...e.values()];
	}), h = t(() => u.somethingSelected.value && m.value.length > 0), g = s("search"), _ = s("sort_by"), v = s("sort_direction"), y = s("limit"), b = Y(() => ({ [g]: "" }), { resetQuery: c }), x = Y(() => e.value.filter?.defaultValue ?? {}, { resetQuery: c }), S = Y(() => ({
		[_]: null,
		[v]: null
	}), { resetQuery: c }), C = Y(() => ({ [y]: e.value.defaultPerPage }), { resetQuery: c }), w = t({
		get: () => `${b[g] ?? ""}`,
		set: (e) => {
			b[g] = e;
		}
	}), T = t({
		get: () => S[_] == null ? null : `${S[_]}`,
		set: (e) => {
			S[_] = e;
		}
	}), E = t({
		get: () => S[v] === "asc" || S[v] === "desc" ? S[v] : null,
		set: (e) => {
			S[v] = e;
		}
	}), D = t({
		get: () => Number(C[y] ?? e.value.defaultPerPage),
		set: (e) => {
			C[y] = e;
		}
	}), O = () => b.reset(), k = (e) => {
		D.value = e;
	}, A = (e) => {
		T.value === e ? E.value === "asc" ? E.value = "desc" : E.value === "desc" ? (T.value = null, E.value = null) : E.value = "asc" : (T.value = e, E.value = "asc");
	}, j = (e, t = "all") => fi(e.actions, t), M = (e = "all") => fi(m.value, e), P = t(() => !e.value.isEmpty), F = t(() => e.value.isEmpty), I = t(() => !e.value.isEmpty && a.value.length === 0), L = t(() => !e.value.isEmpty && e.value.isSearchable), ee = t(() => !e.value.isEmpty && e.value.filter !== null), R = t(() => !e.value.isEmpty && a.value.length > 0 && e.value.footerCells.length > 0), z = t(() => !e.value.isEmpty && a.value.length > 0 && (e.value.pagination !== null || e.value.cursorPagination !== null));
	return {
		table: e,
		rows: a,
		headings: o,
		selectionState: u,
		selectedRows: d,
		bulkActions: m,
		hasRowActions: f,
		hasBulkActions: p,
		showBulkActions: h,
		isContentApplicable: P,
		isEmptyTableApplicable: F,
		isEmptyResultsApplicable: I,
		isSearchApplicable: L,
		isFiltersApplicable: ee,
		isFooterApplicable: R,
		isPaginationApplicable: z,
		hasPerPageSettings: t(() => z.value && e.value.perPageOptions.length > 0),
		searchFilter: b,
		filter: x,
		sortFilter: S,
		paginationFilter: C,
		search: w,
		sortBy: T,
		sortDirection: E,
		perPage: D,
		clearSearch: O,
		setPerPage: k,
		toggleSorting: A,
		isRowSelectable: l,
		rowActions: j,
		placedBulkActions: M,
		queryKey: s,
		internalLinkComponent: N,
		...Ir(r, Fr(i))
	};
}
//#endregion
//#region resources/js/Components/DataTable/DataTableRoot.vue
var mi = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTableRoot",
	props: {
		asChild: {
			type: Boolean,
			default: !1
		},
		as: { default: "div" },
		table: {},
		selection: {},
		defaultSelection: { default: () => [] },
		actionEndpoint: {}
	},
	emits: ["event", "update:selection"],
	setup(e, { expose: r, emit: i }) {
		let a = e, o = i, s = b([...a.defaultSelection]), c = t({
			get: () => a.selection === void 0 ? s.value : a.selection,
			set: (e) => {
				let t = [...e];
				a.selection === void 0 && (s.value = t), o("update:selection", t);
			}
		}), l = pi(t(() => a.table), c, (e) => o("event", e), a.actionEndpoint === void 0 ? {} : { endpoint: a.actionEndpoint });
		return zr(l), $r(l), r({ context: l }), (t, r) => (_(), n(k(I), p({
			as: e.as,
			"as-child": e.asChild
		}, t.$attrs), {
			default: M(() => [S(t.$slots, "default", {
				context: k(l),
				selection: c.value
			})]),
			_: 3
		}, 16, ["as", "as-child"]));
	}
}), hi = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTableResourceActionsRoot",
	props: {
		asChild: {
			type: Boolean,
			default: !1
		},
		as: { default: "div" },
		value: {},
		forceMount: {
			type: Boolean,
			default: !1
		},
		actionEndpoint: {}
	},
	emits: ["event"],
	setup(e, { expose: i, emit: a }) {
		let o = e, s = a, c = t(() => o.value), l = t(() => o.value.actions.filter((e) => e.canRun)), u = Ir((e) => s("event", e), Fr(o.actionEndpoint === void 0 ? {} : { endpoint: o.actionEndpoint }));
		return ti({
			value: c,
			runnableActions: l
		}), $r(u), i({ controller: u }), (t, i) => e.forceMount || l.value.length > 0 ? (_(), n(k(I), p({
			key: 0,
			as: e.as,
			"as-child": e.asChild
		}, t.$attrs), {
			default: M(() => [S(t.$slots, "default", {
				value: c.value,
				resource: c.value.resource,
				actions: l.value,
				isRunning: k(u).isRunning.value
			})]),
			_: 3
		}, 16, ["as", "as-child"])) : r("", !0);
	}
}), gi = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTableContent",
	props: {
		asChild: {
			type: Boolean,
			default: !1
		},
		as: { default: "template" }
	},
	setup(e) {
		let t = e, i = $();
		return (e, a) => k(i).isContentApplicable.value ? (_(), n(k(I), p({
			key: 0,
			as: t.as,
			"as-child": t.asChild
		}, e.$attrs), {
			default: M(() => [S(e.$slots, "default", { table: k(i).table.value })]),
			_: 3
		}, 16, ["as", "as-child"])) : r("", !0);
	}
}), _i = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTableEmptyTable",
	props: {
		asChild: {
			type: Boolean,
			default: !1
		},
		as: { default: "template" }
	},
	setup(e) {
		let t = e, i = $();
		return (e, a) => k(i).isEmptyTableApplicable.value ? (_(), n(k(I), p({
			key: 0,
			as: t.as,
			"as-child": t.asChild
		}, e.$attrs), {
			default: M(() => [S(e.$slots, "default", { table: k(i).table.value })]),
			_: 3
		}, 16, ["as", "as-child"])) : r("", !0);
	}
}), vi = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTableEmptyResults",
	props: {
		asChild: {
			type: Boolean,
			default: !1
		},
		as: { default: "template" }
	},
	setup(e) {
		let t = e, i = $();
		return (e, a) => k(i).isEmptyResultsApplicable.value ? (_(), n(k(I), p({
			key: 0,
			as: t.as,
			"as-child": t.asChild
		}, e.$attrs), {
			default: M(() => [S(e.$slots, "default", {
				table: k(i).table.value,
				clear: k(i).clearSearch
			})]),
			_: 3
		}, 16, ["as", "as-child"])) : r("", !0);
	}
}), yi = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTableSearch",
	props: {
		asChild: {
			type: Boolean,
			default: !1
		},
		as: { default: "template" }
	},
	setup(e) {
		let t = e, i = $(), a = (e) => {
			i.search.value = e;
		};
		return (e, o) => k(i).isSearchApplicable.value ? (_(), n(k(I), p({
			key: 0,
			as: t.as,
			"as-child": t.asChild
		}, e.$attrs), {
			default: M(() => [S(e.$slots, "default", {
				modelValue: k(i).search.value,
				update: a,
				clear: k(i).clearSearch,
				applied: k(i).searchFilter.applied
			})]),
			_: 3
		}, 16, ["as", "as-child"])) : r("", !0);
	}
}), bi = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTableFilters",
	props: {
		asChild: {
			type: Boolean,
			default: !1
		},
		as: { default: "template" }
	},
	setup(e) {
		let t = e, i = $();
		return (e, a) => k(i).isFiltersApplicable.value ? (_(), n(k(I), p({
			key: 0,
			as: t.as,
			"as-child": t.asChild
		}, e.$attrs), {
			default: M(() => [S(e.$slots, "default", {
				filter: k(i).filter,
				applied: k(i).filter.applied,
				reset: k(i).filter.reset
			})]),
			_: 3
		}, 16, ["as", "as-child"])) : r("", !0);
	}
}), xi = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTableFilterWidget",
	props: {
		widget: {},
		index: { default: 0 },
		asChild: {
			type: Boolean,
			default: !1
		},
		as: { default: "template" }
	},
	setup(e) {
		let r = e, i = $(), a = { widget: t(() => r.widget) }, o = t(() => ({
			...r.widget.props,
			filter: i.filter
		}));
		return Yr(a), (e, t) => (_(), n(k(I), p({
			as: r.as,
			"as-child": r.asChild
		}, e.$attrs), {
			default: M(() => [S(e.$slots, "default", {
				widget: r.widget,
				index: r.index,
				filter: k(i).filter
			}, () => [(_(), n(C(r.widget.component), m(l(o.value)), null, 16))])]),
			_: 3
		}, 16, ["as", "as-child"]));
	}
}), Si = /* @__PURE__ */ c({
	__name: "DataTableFilterWidgets",
	setup(o) {
		let s = $(), c = t(() => s.table.value.filter?.widgets ?? []);
		return (t, o) => k(s).isFiltersApplicable.value && c.value.length > 0 ? (_(!0), i(e, { key: 0 }, x(c.value, (e, r) => (_(), n(xi, {
			key: r,
			widget: e,
			index: r,
			as: "template"
		}, a({ _: 2 }, [t.$slots.default ? {
			name: "default",
			fn: M(() => [S(t.$slots, "default", {
				widget: e,
				index: r,
				filter: k(s).filter
			})]),
			key: "0"
		} : void 0]), 1032, ["widget", "index"]))), 128)) : r("", !0);
	}
}), Ci = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTableHeading",
	props: {
		heading: {},
		index: { default: 0 },
		asChild: {
			type: Boolean,
			default: !1
		},
		as: { default: "template" }
	},
	setup(e) {
		let r = e;
		return Ur({ heading: t(() => r.heading) }), (e, t) => (_(), n(k(I), p({
			as: r.as,
			"as-child": r.asChild
		}, e.$attrs), {
			default: M(() => [S(e.$slots, "default", {
				heading: r.heading,
				index: r.index
			}, () => [o(T(r.heading.name), 1)])]),
			_: 3
		}, 16, ["as", "as-child"]));
	}
}), wi = /* @__PURE__ */ c({
	__name: "DataTableHeadings",
	setup(t) {
		let o = $();
		return (t, s) => k(o).headings.value.length > 0 ? (_(!0), i(e, { key: 0 }, x(k(o).headings.value, (e, r) => (_(), n(Ci, {
			key: e.id,
			heading: e,
			index: r,
			as: "template"
		}, a({ _: 2 }, [t.$slots.default ? {
			name: "default",
			fn: M(() => [S(t.$slots, "default", {
				heading: e,
				index: r
			})]),
			key: "0"
		} : void 0]), 1032, ["heading", "index"]))), 128)) : r("", !0);
	}
}), Ti = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTableRow",
	props: {
		row: {},
		index: { default: 0 },
		asChild: {
			type: Boolean,
			default: !1
		},
		as: { default: "template" }
	},
	setup(e) {
		let r = e, i = $(), a = {
			get row() {
				return r.row;
			},
			get index() {
				return r.index;
			},
			isSelectable: t(() => i.isRowSelectable(r.row)),
			isSelected: t(() => i.selectionState.isRowSelected(r.row.key))
		};
		return Vr(a), (e, t) => (_(), n(k(I), p({
			as: r.as,
			"as-child": r.asChild
		}, e.$attrs, { "data-state": a.isSelected.value ? "selected" : void 0 }), {
			default: M(() => [S(e.$slots, "default", {
				row: r.row,
				index: r.index,
				isSelectable: a.isSelectable.value,
				isSelected: a.isSelected.value
			})]),
			_: 3
		}, 16, [
			"as",
			"as-child",
			"data-state"
		]));
	}
}), Ei = /* @__PURE__ */ c({
	__name: "DataTableRows",
	setup(t) {
		let a = $();
		return (t, o) => k(a).rows.value.length > 0 ? (_(!0), i(e, { key: 0 }, x(k(a).rows.value, (e, r) => (_(), n(Ti, {
			key: e.key,
			row: e,
			index: r,
			as: "template"
		}, {
			default: M(() => [S(t.$slots, "default", {
				row: e,
				index: r
			})]),
			_: 2
		}, 1032, ["row", "index"]))), 128)) : r("", !0);
	}
}), Di = /* @__PURE__ */ c({
	__name: "DataTableCellContent",
	setup(e) {
		let { cell: t } = ii();
		return (e, r) => k(t).link ? (_(), n(k(I), {
			key: 0,
			as: k(t).link.isExternal ? "a" : k(N),
			href: k(t).link.url
		}, {
			default: M(() => [S(e.$slots, "default", { cell: k(t) }, () => [(_(), n(C(k(t).component), m(l(k(t).props)), null, 16))])]),
			_: 3
		}, 8, ["as", "href"])) : S(e.$slots, "default", {
			key: 1,
			cell: k(t)
		}, () => [(_(), n(C(k(t).component), m(l(k(t).props)), null, 16))]);
	}
}), Oi = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTableCell",
	props: {
		cell: {},
		index: { default: 0 },
		asChild: {
			type: Boolean,
			default: !1
		},
		as: { default: "template" }
	},
	setup(e) {
		let r = e;
		return Gr({ cell: t(() => r.cell) }), (e, t) => (_(), n(k(I), p({
			as: r.as,
			"as-child": r.asChild
		}, e.$attrs), {
			default: M(() => [S(e.$slots, "default", {
				cell: r.cell,
				index: r.index
			}, () => [s(Di)])]),
			_: 3
		}, 16, ["as", "as-child"]));
	}
}), ki = /* @__PURE__ */ c({
	__name: "DataTableCells",
	setup(t) {
		let o = ni();
		return (t, s) => k(o).row.cells.length > 0 ? (_(!0), i(e, { key: 0 }, x(k(o).row.cells, (e, r) => (_(), n(Oi, {
			key: e.column || r,
			cell: e,
			index: r,
			as: "template"
		}, a({ _: 2 }, [t.$slots.default ? {
			name: "default",
			fn: M(() => [S(t.$slots, "default", {
				cell: e,
				index: r,
				row: k(o).row
			})]),
			key: "0"
		} : void 0]), 1032, ["cell", "index"]))), 128)) : r("", !0);
	}
}), Ai = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTableFooter",
	props: {
		asChild: {
			type: Boolean,
			default: !1
		},
		as: { default: "template" }
	},
	setup(e) {
		let t = e, i = $();
		return (e, a) => k(i).isFooterApplicable.value ? (_(), n(k(I), p({
			key: 0,
			as: t.as,
			"as-child": t.asChild
		}, e.$attrs), {
			default: M(() => [S(e.$slots, "default", { cells: k(i).table.value.footerCells })]),
			_: 3
		}, 16, ["as", "as-child"])) : r("", !0);
	}
}), ji = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTableFooterCell",
	props: {
		cell: { default: null },
		index: { default: 0 },
		asChild: {
			type: Boolean,
			default: !1
		},
		as: { default: "template" }
	},
	setup(e) {
		let i = e, a = t(() => i.cell), o = t(() => i.cell), s = { cell: a }, c = { cell: o };
		return qr(s), Gr(c), (e, t) => (_(), n(k(I), p({
			as: i.as,
			"as-child": i.asChild
		}, e.$attrs), {
			default: M(() => [S(e.$slots, "default", {
				cell: i.cell,
				index: i.index
			}, () => [i.cell ? (_(), n(Di, { key: 0 })) : r("", !0)])]),
			_: 3
		}, 16, ["as", "as-child"]));
	}
}), Mi = /* @__PURE__ */ c({
	__name: "DataTableFooterCells",
	setup(t) {
		let o = $();
		return (t, s) => k(o).isFooterApplicable.value ? (_(!0), i(e, { key: 0 }, x(k(o).table.value.footerCells, (e, r) => (_(), n(ji, {
			key: e?.column ?? `empty-${r}`,
			cell: e,
			index: r,
			as: "template"
		}, a({ _: 2 }, [t.$slots.default ? {
			name: "default",
			fn: M(() => [S(t.$slots, "default", {
				cell: e,
				index: r
			})]),
			key: "0"
		} : void 0]), 1032, ["cell", "index"]))), 128)) : r("", !0);
	}
}), Ni = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTableSelectionStatus",
	props: {
		asChild: {
			type: Boolean,
			default: !1
		},
		as: { default: "template" }
	},
	setup(e) {
		let t = e, i = $().selectionState;
		return (e, a) => k(i).somethingSelected.value ? (_(), n(k(I), p({
			key: 0,
			as: t.as,
			"as-child": t.asChild
		}, e.$attrs), {
			default: M(() => [S(e.$slots, "default", {
				selection: [...k(i).selection.value],
				selectedCount: k(i).selectedCount.value,
				totalCount: k(i).totalCount.value
			})]),
			_: 3
		}, 16, ["as", "as-child"])) : r("", !0);
	}
}), Pi = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTableClearSelection",
	props: {
		asChild: {
			type: Boolean,
			default: !1
		},
		as: { default: "button" }
	},
	setup(e) {
		let i = e, a = A(), o = $().selectionState, s = t(() => ({
			...a,
			type: i.as === "button" ? "button" : void 0,
			onClick: o.clearSelection
		}));
		return (e, t) => k(o).somethingSelected.value ? (_(), n(k(I), p({
			key: 0,
			as: i.as,
			"as-child": i.asChild
		}, s.value), {
			default: M(() => [S(e.$slots, "default", {
				selection: [...k(o).selection.value],
				clear: k(o).clearSelection
			})]),
			_: 3
		}, 16, ["as", "as-child"])) : r("", !0);
	}
}), Fi = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTableSelectAll",
	props: {
		asChild: {
			type: Boolean,
			default: !1
		},
		as: { default: "button" }
	},
	setup(e) {
		let i = e, a = A(), o = $(), s = o.selectionState, c = t(() => ({
			...a,
			type: i.as === "button" ? "button" : void 0,
			"aria-pressed": s.everythingSelected.value,
			"data-state": s.everythingSelected.value ? "checked" : s.somethingSelected.value ? "indeterminate" : "unchecked",
			onClick: s.toggleEverything
		}));
		return (e, t) => k(o).isContentApplicable.value && k(s).totalCount.value > 0 ? (_(), n(k(I), p({
			key: 0,
			as: i.as,
			"as-child": i.asChild
		}, c.value), {
			default: M(() => [S(e.$slots, "default", {
				selected: k(s).everythingSelected.value,
				indeterminate: k(s).somethingSelected.value && !k(s).everythingSelected.value,
				toggle: k(s).toggleEverything,
				totalCount: k(s).totalCount.value
			})]),
			_: 3
		}, 16, ["as", "as-child"])) : r("", !0);
	}
}), Ii = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTableSelectRow",
	props: {
		row: {},
		asChild: {
			type: Boolean,
			default: !1
		},
		as: { default: "button" }
	},
	setup(e) {
		let i = e, a = A(), o = $(), s = i.row === void 0 ? ni() : null, c = t(() => i.row ?? s.row), l = t(() => o.isRowSelectable(c.value)), u = t(() => o.selectionState.isRowSelected(c.value.key)), d = () => o.selectionState.toggleRow(c.value.key), f = t(() => ({
			...a,
			type: i.as === "button" ? "button" : void 0,
			"aria-pressed": u.value,
			"data-state": u.value ? "checked" : "unchecked",
			onClick: d
		}));
		return (e, t) => l.value ? (_(), n(k(I), p({
			key: 0,
			as: i.as,
			"as-child": i.asChild
		}, f.value), {
			default: M(() => [S(e.$slots, "default", {
				row: c.value,
				selected: u.value,
				toggle: d
			})]),
			_: 3
		}, 16, ["as", "as-child"])) : r("", !0);
	}
}), Li = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTableAction",
	props: {
		action: {},
		selection: {},
		index: { default: 0 },
		asChild: {
			type: Boolean,
			default: !1
		},
		as: { default: "template" }
	},
	setup(e) {
		let t = e;
		return Zr({
			get action() {
				return t.action;
			},
			get selection() {
				return t.selection;
			},
			get index() {
				return t.index;
			}
		}), (e, i) => t.action.canRun ? (_(), n(k(I), p({ key: 0 }, e.$attrs, {
			as: t.as,
			"as-child": t.asChild
		}), {
			default: M(() => [S(e.$slots, "default", {
				action: t.action,
				selection: [...t.selection],
				index: t.index
			})]),
			_: 3
		}, 16, ["as", "as-child"])) : r("", !0);
	}
}), Ri = /* @__PURE__ */ c({
	__name: "DataTableRowActions",
	props: {
		placement: { default: "all" },
		row: {}
	},
	setup(r) {
		let a = r, o = $(), s = a.row === void 0 ? ni() : null, c = t(() => a.row ?? s.row), l = t(() => o.rowActions(c.value, a.placement));
		return (t, r) => (_(!0), i(e, null, x(l.value, (e, r) => (_(), n(Li, {
			key: e.name,
			action: e,
			selection: [c.value.key],
			index: r,
			as: "template"
		}, {
			default: M((e) => [S(t.$slots, "default", {
				action: e.action,
				selection: e.selection,
				index: e.index
			})]),
			_: 2
		}, 1032, [
			"action",
			"selection",
			"index"
		]))), 128));
	}
}), zi = /* @__PURE__ */ c({
	__name: "DataTableBulkActions",
	props: { placement: { default: "all" } },
	setup(a) {
		let o = a, s = $(), c = t(() => s.placedBulkActions(o.placement)), l = t(() => [...s.selectionState.selection.value]);
		return (t, a) => k(s).showBulkActions.value && c.value.length > 0 ? (_(!0), i(e, { key: 0 }, x(c.value, (e, r) => (_(), n(Li, {
			key: e.name,
			action: e,
			selection: l.value,
			index: r,
			as: "template"
		}, {
			default: M((e) => [S(t.$slots, "default", {
				action: e.action,
				selection: e.selection,
				index: e.index
			})]),
			_: 2
		}, 1032, [
			"action",
			"selection",
			"index"
		]))), 128)) : r("", !0);
	}
}), Bi = /* @__PURE__ */ c({
	__name: "DataTableResourceActions",
	props: { placement: { default: "all" } },
	setup(r) {
		let a = r, o = li(), s = t(() => o.runnableActions.value.filter((e) => a.placement === "inline" ? e.isInline : a.placement !== "menu" || !e.isInline)), c = t(() => [o.value.value.resource.key]);
		return (t, r) => (_(!0), i(e, null, x(s.value, (e, r) => (_(), n(Li, {
			key: e.name,
			action: e,
			selection: c.value,
			index: r,
			as: "template"
		}, {
			default: M((e) => [S(t.$slots, "default", {
				action: e.action,
				selection: e.selection,
				index: e.index
			})]),
			_: 2
		}, 1032, [
			"action",
			"selection",
			"index"
		]))), 128));
	}
}), Vi = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTableActionActivation",
	props: {
		asChild: {
			type: Boolean,
			default: !1
		},
		as: {}
	},
	setup(e) {
		let i = e, a = si(), s = ci(), c = A(), l = t(() => a.action), u = t(() => a.selection), d = t(() => s.isActionRunning(l.value, u.value)), f = () => {
			d.value || s.activateAction(l.value, [...u.value]);
		}, m = t(() => i.as ?? (l.value.type === "Link" ? l.value.isExternal ? "a" : N : "button")), h = t(() => ({
			...c,
			href: l.value.type === "Link" ? l.value.url : void 0,
			type: m.value === "button" ? "button" : void 0,
			disabled: l.value.type === "Executable" && d.value ? !0 : void 0,
			onClick: l.value.type === "Link" ? void 0 : f
		}));
		return (e, t) => l.value.canRun ? (_(), n(k(I), p({ key: 0 }, h.value, {
			as: m.value,
			"as-child": i.asChild
		}), {
			default: M(() => [S(e.$slots, "default", {
				action: l.value,
				selection: [...u.value],
				activate: f,
				isRunning: d.value
			}, () => [o(T(l.value.label), 1)])]),
			_: 3
		}, 16, ["as", "as-child"])) : r("", !0);
	}
}), Hi = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTableActionConfirmation",
	props: {
		asChild: {
			type: Boolean,
			default: !1
		},
		as: { default: "template" }
	},
	setup(e) {
		let i = e, a = ci(), o = a.pendingAction, s = t(() => o.value ? a.isActionRunning(o.value.action, o.value.selection) : !1);
		return (e, t) => k(o) ? (_(), n(k(I), p({ key: 0 }, e.$attrs, {
			as: i.as,
			"as-child": i.asChild
		}), {
			default: M(() => [S(e.$slots, "default", {
				action: k(o).action,
				selection: [...k(o).selection],
				confirm: k(a).confirmAction,
				cancel: k(a).cancelAction,
				isRunning: s.value
			})]),
			_: 3
		}, 16, ["as", "as-child"])) : r("", !0);
	}
}), Ui = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTableSorting",
	props: {
		column: {},
		asChild: {
			type: Boolean,
			default: !1
		},
		as: { default: "button" }
	},
	setup(e) {
		let i = e, a = A(), s = $(), c = i.column === void 0 ? ri() : null, l = t(() => c?.heading.value), u = t(() => i.column ?? l.value?.sortableAs), d = t(() => s.sortBy.value === u.value), f = t(() => d.value && s.sortDirection.value === "asc"), m = t(() => d.value ? s.sortDirection.value : null), h = () => {
			u.value && s.toggleSorting(u.value);
		}, g = t(() => ({
			...a,
			type: i.as === "button" ? "button" : void 0,
			"data-state": d.value ? "active" : "inactive",
			"data-direction": d.value ? s.sortDirection.value : void 0,
			onClick: h
		}));
		return (e, t) => u.value ? (_(), n(k(I), p({
			key: 0,
			as: i.as,
			"as-child": i.asChild
		}, g.value), {
			default: M(() => [S(e.$slots, "default", {
				column: u.value,
				direction: m.value,
				isApplied: d.value,
				isAscending: f.value,
				toggle: h
			}, () => [o(T(l.value?.name), 1)])]),
			_: 3
		}, 16, ["as", "as-child"])) : r("", !0);
	}
}), Wi = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTablePerPage",
	props: {
		asChild: {
			type: Boolean,
			default: !1
		},
		as: { default: "template" }
	},
	setup(e) {
		let t = e, i = $();
		return (e, a) => k(i).hasPerPageSettings.value ? (_(), n(k(I), p({ key: 0 }, e.$attrs, {
			as: t.as,
			"as-child": t.asChild
		}), {
			default: M(() => [S(e.$slots, "default", {
				modelValue: k(i).perPage.value,
				options: [...k(i).table.value.perPageOptions],
				update: k(i).setPerPage
			})]),
			_: 3
		}, 16, ["as", "as-child"])) : r("", !0);
	}
}), Gi = /* @__PURE__ */ c({
	__name: "DataTablePerPageOptions",
	setup(t) {
		let n = $();
		return (t, a) => k(n).hasPerPageSettings.value ? (_(!0), i(e, { key: 0 }, x(k(n).table.value.perPageOptions, (e, r) => S(t.$slots, "default", {
			option: e,
			selected: k(n).perPage.value === e,
			select: () => k(n).setPerPage(e),
			index: r
		})), 256)) : r("", !0);
	}
}), Ki = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTablePagination",
	props: {
		asChild: {
			type: Boolean,
			default: !1
		},
		as: { default: "template" }
	},
	setup(e) {
		let i = e, a = $(), o = t(() => a.table.value.pagination), s = t(() => a.table.value.cursorPagination);
		return (e, t) => k(a).isPaginationApplicable.value ? (_(), n(k(I), p({
			key: 0,
			as: i.as,
			"as-child": i.asChild
		}, e.$attrs), {
			default: M(() => [S(e.$slots, "default", {
				pagination: o.value,
				cursorPagination: s.value
			})]),
			_: 3
		}, 16, ["as", "as-child"])) : r("", !0);
	}
}), qi = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTablePaginationFirst",
	props: {
		asChild: {
			type: Boolean,
			default: !1
		},
		as: {}
	},
	setup(e) {
		let i = e, a = $(), o = t(() => a.table.value.pagination), s = t(() => a.table.value.cursorPagination), c = t(() => a.isPaginationApplicable.value && o.value !== null), l = t(() => o.value?.firstPageUrl ?? null), u = t(() => !l.value), d = t(() => i.as ?? (l.value ? N : "button"));
		return (e, t) => c.value ? (_(), n(k(I), p({ key: 0 }, e.$attrs, {
			as: d.value,
			"as-child": i.asChild,
			href: l.value ?? void 0,
			disabled: d.value === "button" ? u.value : void 0,
			type: d.value === "button" ? "button" : void 0,
			"aria-disabled": u.value
		}), {
			default: M(() => [S(e.$slots, "default", {
				href: l.value,
				disabled: u.value,
				pagination: o.value,
				cursorPagination: s.value
			})]),
			_: 3
		}, 16, [
			"as",
			"as-child",
			"href",
			"disabled",
			"type",
			"aria-disabled"
		])) : r("", !0);
	}
}), Ji = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTablePaginationPrevious",
	props: {
		asChild: {
			type: Boolean,
			default: !1
		},
		as: {}
	},
	setup(e) {
		let i = e, a = $(), o = t(() => a.table.value.pagination), s = t(() => a.table.value.cursorPagination), c = t(() => o.value?.prevPageUrl ?? s.value?.prevPageUrl ?? null), l = t(() => !c.value), u = t(() => i.as ?? (c.value ? N : "button"));
		return (e, t) => k(a).isPaginationApplicable.value ? (_(), n(k(I), p({ key: 0 }, e.$attrs, {
			as: u.value,
			"as-child": i.asChild,
			href: c.value ?? void 0,
			disabled: u.value === "button" ? l.value : void 0,
			type: u.value === "button" ? "button" : void 0,
			"aria-disabled": l.value
		}), {
			default: M(() => [S(e.$slots, "default", {
				href: c.value,
				disabled: l.value,
				pagination: o.value,
				cursorPagination: s.value
			})]),
			_: 3
		}, 16, [
			"as",
			"as-child",
			"href",
			"disabled",
			"type",
			"aria-disabled"
		])) : r("", !0);
	}
}), Yi = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTablePaginationNext",
	props: {
		asChild: {
			type: Boolean,
			default: !1
		},
		as: {}
	},
	setup(e) {
		let i = e, a = $(), o = t(() => a.table.value.pagination), s = t(() => a.table.value.cursorPagination), c = t(() => o.value?.nextPageUrl ?? s.value?.nextPageUrl ?? null), l = t(() => !c.value), u = t(() => i.as ?? (c.value ? N : "button"));
		return (e, t) => k(a).isPaginationApplicable.value ? (_(), n(k(I), p({ key: 0 }, e.$attrs, {
			as: u.value,
			"as-child": i.asChild,
			href: c.value ?? void 0,
			disabled: u.value === "button" ? l.value : void 0,
			type: u.value === "button" ? "button" : void 0,
			"aria-disabled": l.value
		}), {
			default: M(() => [S(e.$slots, "default", {
				href: c.value,
				disabled: l.value,
				pagination: o.value,
				cursorPagination: s.value
			})]),
			_: 3
		}, 16, [
			"as",
			"as-child",
			"href",
			"disabled",
			"type",
			"aria-disabled"
		])) : r("", !0);
	}
}), Xi = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTablePaginationLast",
	props: {
		asChild: {
			type: Boolean,
			default: !1
		},
		as: {}
	},
	setup(e) {
		let i = e, a = $(), o = t(() => a.table.value.pagination), s = t(() => a.table.value.cursorPagination), c = t(() => a.isPaginationApplicable.value && o.value !== null), l = t(() => o.value?.lastPageUrl ?? null), u = t(() => !l.value), d = t(() => i.as ?? (l.value ? N : "button"));
		return (e, t) => c.value ? (_(), n(k(I), p({ key: 0 }, e.$attrs, {
			as: d.value,
			"as-child": i.asChild,
			href: l.value ?? void 0,
			disabled: d.value === "button" ? u.value : void 0,
			type: d.value === "button" ? "button" : void 0,
			"aria-disabled": u.value
		}), {
			default: M(() => [S(e.$slots, "default", {
				href: l.value,
				disabled: u.value,
				pagination: o.value,
				cursorPagination: s.value
			})]),
			_: 3
		}, 16, [
			"as",
			"as-child",
			"href",
			"disabled",
			"type",
			"aria-disabled"
		])) : r("", !0);
	}
}), Zi = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "DataTablePaginationStatus",
	props: {
		asChild: {
			type: Boolean,
			default: !1
		},
		as: { default: "template" }
	},
	setup(e) {
		let i = e, a = $(), s = t(() => a.table.value.pagination);
		return (e, t) => k(a).isPaginationApplicable.value && s.value ? (_(), n(k(I), p({
			key: 0,
			as: i.as,
			"as-child": i.asChild
		}, e.$attrs), {
			default: M(() => [S(e.$slots, "default", {
				currentPage: s.value.currentPage,
				lastPage: s.value.lastPage,
				total: s.value.total,
				pagination: s.value
			}, () => [o(T(s.value.currentPage) + " / " + T(s.value.lastPage), 1)])]),
			_: 3
		}, 16, ["as", "as-child"])) : r("", !0);
	}
});
//#endregion
//#region resources/js/Components/DataTable/events.ts
function Qi(e) {
	return (t) => {
		e[t.name]?.([...t.selection], t);
	};
}
//#endregion
export { Vi as DataTableActionActivation, Hi as DataTableActionConfirmation, zi as DataTableBulkActions, Oi as DataTableCell, Di as DataTableCellContent, ki as DataTableCells, Pi as DataTableClearSelection, gi as DataTableContent, vi as DataTableEmptyResults, _i as DataTableEmptyTable, xi as DataTableFilterWidget, Si as DataTableFilterWidgets, bi as DataTableFilters, Ai as DataTableFooter, ji as DataTableFooterCell, Mi as DataTableFooterCells, Ci as DataTableHeading, wi as DataTableHeadings, Ki as DataTablePagination, qi as DataTablePaginationFirst, Xi as DataTablePaginationLast, Yi as DataTablePaginationNext, Ji as DataTablePaginationPrevious, Zi as DataTablePaginationStatus, Wi as DataTablePerPage, Gi as DataTablePerPageOptions, Bi as DataTableResourceActions, hi as DataTableResourceActionsRoot, mi as DataTableRoot, Ti as DataTableRow, Ri as DataTableRowActions, Ei as DataTableRows, yi as DataTableSearch, Fi as DataTableSelectAll, Ii as DataTableSelectRow, Ni as DataTableSelectionStatus, Ui as DataTableSorting, se as Icon, jr as NavigationButton, Mr as NavigationButtonIcon, zn as asyncRouter, Qi as bindDataTableEvents, di as configureDataTableStyle, pi as createDataTableContext, vr as formatQuery, yr as getValueFromQuery, Q as isActivated, Tr as isEventAction, Z as isLinkAction, wr as isLinkPathAction, X as isRouteAction, kr as onActivated, Ar as onDeactivated, _r as parseQuery, $r as provideDataTableActionController, Zr as provideDataTableActionScopeContext, Gr as provideDataTableCellContext, zr as provideDataTableContext, Yr as provideDataTableFilterWidgetContext, qr as provideDataTableFooterCellContext, Ur as provideDataTableHeadingContext, ti as provideDataTableResourceActionsContext, Vr as provideDataTableRowContext, ui as qualifyDataTableQueryKey, Hn as registerNamespacedComponents, br as urlWithQuery, Er as useActiveLink, Ir as useDataTableActionController, ci as useDataTableActionControllerContext, Fr as useDataTableActionRunner, si as useDataTableActionScopeContext, ii as useDataTableCellContext, $ as useDataTableContext, oi as useDataTableFilterWidgetContext, ai as useDataTableFooterCellContext, ri as useDataTableHeadingContext, li as useDataTableResourceActionsContext, ni as useDataTableRowContext, Lr as useDataTableSelection, Y as useFilter, Cr as useFlash, Dr as useNavigation, Or as useToggle };

//# sourceMappingURL=ui.js.map