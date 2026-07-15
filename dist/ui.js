import { Fragment as e, computed as t, createBlock as n, createCommentVNode as r, createElementBlock as i, createSlots as a, createTextVNode as o, createVNode as s, defineComponent as c, guardReactiveProps as l, h as u, inject as d, isRef as f, mergeProps as p, normalizeProps as m, onBeforeUnmount as h, onMounted as g, openBlock as _, provide as v, reactive as y, ref as b, renderList as x, renderSlot as S, resolveDynamicComponent as C, shallowRef as w, toDisplayString as T, toRaw as E, toRefs as D, toValue as O, unref as k, useAttrs as A, watch as j, withCtx as M } from "vue";
import { Link as N, router as P, usePage as F } from "@inertiajs/vue3";
import { Primitive as I, createContext as L } from "reka-ui";
//#region \0rolldown/runtime.js
var ee = Object.create, R = Object.defineProperty, z = Object.getOwnPropertyDescriptor, B = Object.getOwnPropertyNames, te = Object.getPrototypeOf, ne = Object.prototype.hasOwnProperty, V = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), re = (e, t) => {
	let n = {};
	for (var r in e) R(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || R(n, Symbol.toStringTag, { value: "Module" }), n;
}, ie = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = B(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !ne.call(e, s) && s !== n && R(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = z(t, s)) || r.enumerable
	});
	return e;
}, ae = (e, t, n) => (n = e == null ? {} : ee(te(e)), ie(t || !e || !e.__esModule ? R(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), oe = c({
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
}), se = Symbol();
function ce(e) {
	v(se, e);
}
function le() {
	let e = d(se);
	return t(() => e ? O(e) : null);
}
//#endregion
//#region node_modules/lodash/_listCacheClear.js
var ue = /* @__PURE__ */ V(((e, t) => {
	function n() {
		this.__data__ = [], this.size = 0;
	}
	t.exports = n;
})), H = /* @__PURE__ */ V(((e, t) => {
	function n(e, t) {
		return e === t || e !== e && t !== t;
	}
	t.exports = n;
})), U = /* @__PURE__ */ V(((e, t) => {
	var n = H();
	function r(e, t) {
		for (var r = e.length; r--;) if (n(e[r][0], t)) return r;
		return -1;
	}
	t.exports = r;
})), de = /* @__PURE__ */ V(((e, t) => {
	var n = U(), r = Array.prototype.splice;
	function i(e) {
		var t = this.__data__, i = n(t, e);
		return i < 0 ? !1 : (i == t.length - 1 ? t.pop() : r.call(t, i, 1), --this.size, !0);
	}
	t.exports = i;
})), fe = /* @__PURE__ */ V(((e, t) => {
	var n = U();
	function r(e) {
		var t = this.__data__, r = n(t, e);
		return r < 0 ? void 0 : t[r][1];
	}
	t.exports = r;
})), pe = /* @__PURE__ */ V(((e, t) => {
	var n = U();
	function r(e) {
		return n(this.__data__, e) > -1;
	}
	t.exports = r;
})), me = /* @__PURE__ */ V(((e, t) => {
	var n = U();
	function r(e, t) {
		var r = this.__data__, i = n(r, e);
		return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this;
	}
	t.exports = r;
})), he = /* @__PURE__ */ V(((e, t) => {
	var n = ue(), r = de(), i = fe(), a = pe(), o = me();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), ge = /* @__PURE__ */ V(((e, t) => {
	var n = he();
	function r() {
		this.__data__ = new n(), this.size = 0;
	}
	t.exports = r;
})), _e = /* @__PURE__ */ V(((e, t) => {
	function n(e) {
		var t = this.__data__, n = t.delete(e);
		return this.size = t.size, n;
	}
	t.exports = n;
})), ve = /* @__PURE__ */ V(((e, t) => {
	function n(e) {
		return this.__data__.get(e);
	}
	t.exports = n;
})), ye = /* @__PURE__ */ V(((e, t) => {
	function n(e) {
		return this.__data__.has(e);
	}
	t.exports = n;
})), be = /* @__PURE__ */ V(((e, t) => {
	t.exports = typeof global == "object" && global && global.Object === Object && global;
})), W = /* @__PURE__ */ V(((e, t) => {
	var n = be(), r = typeof self == "object" && self && self.Object === Object && self;
	t.exports = n || r || Function("return this")();
})), xe = /* @__PURE__ */ V(((e, t) => {
	t.exports = W().Symbol;
})), Se = /* @__PURE__ */ V(((e, t) => {
	var n = xe(), r = Object.prototype, i = r.hasOwnProperty, a = r.toString, o = n ? n.toStringTag : void 0;
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
})), Ce = /* @__PURE__ */ V(((e, t) => {
	var n = Object.prototype.toString;
	function r(e) {
		return n.call(e);
	}
	t.exports = r;
})), we = /* @__PURE__ */ V(((e, t) => {
	var n = xe(), r = Se(), i = Ce(), a = "[object Null]", o = "[object Undefined]", s = n ? n.toStringTag : void 0;
	function c(e) {
		return e == null ? e === void 0 ? o : a : s && s in Object(e) ? r(e) : i(e);
	}
	t.exports = c;
})), G = /* @__PURE__ */ V(((e, t) => {
	function n(e) {
		var t = typeof e;
		return e != null && (t == "object" || t == "function");
	}
	t.exports = n;
})), Te = /* @__PURE__ */ V(((e, t) => {
	var n = we(), r = G(), i = "[object AsyncFunction]", a = "[object Function]", o = "[object GeneratorFunction]", s = "[object Proxy]";
	function c(e) {
		if (!r(e)) return !1;
		var t = n(e);
		return t == a || t == o || t == i || t == s;
	}
	t.exports = c;
})), Ee = /* @__PURE__ */ V(((e, t) => {
	t.exports = W()["__core-js_shared__"];
})), De = /* @__PURE__ */ V(((e, t) => {
	var n = Ee(), r = function() {
		var e = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "");
		return e ? "Symbol(src)_1." + e : "";
	}();
	function i(e) {
		return !!r && r in e;
	}
	t.exports = i;
})), Oe = /* @__PURE__ */ V(((e, t) => {
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
})), ke = /* @__PURE__ */ V(((e, t) => {
	var n = Te(), r = De(), i = G(), a = Oe(), o = /[\\^$.*+?()[\]{}|]/g, s = /^\[object .+?Constructor\]$/, c = Function.prototype, l = Object.prototype, u = c.toString, d = l.hasOwnProperty, f = RegExp("^" + u.call(d).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	function p(e) {
		return !i(e) || r(e) ? !1 : (n(e) ? f : s).test(a(e));
	}
	t.exports = p;
})), Ae = /* @__PURE__ */ V(((e, t) => {
	function n(e, t) {
		return e?.[t];
	}
	t.exports = n;
})), K = /* @__PURE__ */ V(((e, t) => {
	var n = ke(), r = Ae();
	function i(e, t) {
		var i = r(e, t);
		return n(i) ? i : void 0;
	}
	t.exports = i;
})), je = /* @__PURE__ */ V(((e, t) => {
	t.exports = K()(W(), "Map");
})), Me = /* @__PURE__ */ V(((e, t) => {
	t.exports = K()(Object, "create");
})), Ne = /* @__PURE__ */ V(((e, t) => {
	var n = Me();
	function r() {
		this.__data__ = n ? n(null) : {}, this.size = 0;
	}
	t.exports = r;
})), Pe = /* @__PURE__ */ V(((e, t) => {
	function n(e) {
		var t = this.has(e) && delete this.__data__[e];
		return this.size -= +!!t, t;
	}
	t.exports = n;
})), Fe = /* @__PURE__ */ V(((e, t) => {
	var n = Me(), r = "__lodash_hash_undefined__", i = Object.prototype.hasOwnProperty;
	function a(e) {
		var t = this.__data__;
		if (n) {
			var a = t[e];
			return a === r ? void 0 : a;
		}
		return i.call(t, e) ? t[e] : void 0;
	}
	t.exports = a;
})), Ie = /* @__PURE__ */ V(((e, t) => {
	var n = Me(), r = Object.prototype.hasOwnProperty;
	function i(e) {
		var t = this.__data__;
		return n ? t[e] !== void 0 : r.call(t, e);
	}
	t.exports = i;
})), Le = /* @__PURE__ */ V(((e, t) => {
	var n = Me(), r = "__lodash_hash_undefined__";
	function i(e, t) {
		var i = this.__data__;
		return this.size += +!this.has(e), i[e] = n && t === void 0 ? r : t, this;
	}
	t.exports = i;
})), Re = /* @__PURE__ */ V(((e, t) => {
	var n = Ne(), r = Pe(), i = Fe(), a = Ie(), o = Le();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), ze = /* @__PURE__ */ V(((e, t) => {
	var n = Re(), r = he(), i = je();
	function a() {
		this.size = 0, this.__data__ = {
			hash: new n(),
			map: new (i || r)(),
			string: new n()
		};
	}
	t.exports = a;
})), Be = /* @__PURE__ */ V(((e, t) => {
	function n(e) {
		var t = typeof e;
		return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
	}
	t.exports = n;
})), Ve = /* @__PURE__ */ V(((e, t) => {
	var n = Be();
	function r(e, t) {
		var r = e.__data__;
		return n(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
	}
	t.exports = r;
})), He = /* @__PURE__ */ V(((e, t) => {
	var n = Ve();
	function r(e) {
		var t = n(this, e).delete(e);
		return this.size -= +!!t, t;
	}
	t.exports = r;
})), Ue = /* @__PURE__ */ V(((e, t) => {
	var n = Ve();
	function r(e) {
		return n(this, e).get(e);
	}
	t.exports = r;
})), We = /* @__PURE__ */ V(((e, t) => {
	var n = Ve();
	function r(e) {
		return n(this, e).has(e);
	}
	t.exports = r;
})), Ge = /* @__PURE__ */ V(((e, t) => {
	var n = Ve();
	function r(e, t) {
		var r = n(this, e), i = r.size;
		return r.set(e, t), this.size += r.size == i ? 0 : 1, this;
	}
	t.exports = r;
})), Ke = /* @__PURE__ */ V(((e, t) => {
	var n = ze(), r = He(), i = Ue(), a = We(), o = Ge();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), qe = /* @__PURE__ */ V(((e, t) => {
	var n = he(), r = je(), i = Ke(), a = 200;
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
})), Je = /* @__PURE__ */ V(((e, t) => {
	var n = he(), r = ge(), i = _e(), a = ve(), o = ye(), s = qe();
	function c(e) {
		var t = this.__data__ = new n(e);
		this.size = t.size;
	}
	c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = a, c.prototype.has = o, c.prototype.set = s, t.exports = c;
})), Ye = /* @__PURE__ */ V(((e, t) => {
	function n(e) {
		return this.__data__.set(e, "__lodash_hash_undefined__"), this;
	}
	t.exports = n;
})), Xe = /* @__PURE__ */ V(((e, t) => {
	function n(e) {
		return this.__data__.has(e);
	}
	t.exports = n;
})), Ze = /* @__PURE__ */ V(((e, t) => {
	var n = Ke(), r = Ye(), i = Xe();
	function a(e) {
		var t = -1, r = e == null ? 0 : e.length;
		for (this.__data__ = new n(); ++t < r;) this.add(e[t]);
	}
	a.prototype.add = a.prototype.push = r, a.prototype.has = i, t.exports = a;
})), Qe = /* @__PURE__ */ V(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
		return !1;
	}
	t.exports = n;
})), $e = /* @__PURE__ */ V(((e, t) => {
	function n(e, t) {
		return e.has(t);
	}
	t.exports = n;
})), et = /* @__PURE__ */ V(((e, t) => {
	var n = Ze(), r = Qe(), i = $e(), a = 1, o = 2;
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
})), tt = /* @__PURE__ */ V(((e, t) => {
	t.exports = W().Uint8Array;
})), nt = /* @__PURE__ */ V(((e, t) => {
	function n(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e, r) {
			n[++t] = [r, e];
		}), n;
	}
	t.exports = n;
})), rt = /* @__PURE__ */ V(((e, t) => {
	function n(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e) {
			n[++t] = e;
		}), n;
	}
	t.exports = n;
})), it = /* @__PURE__ */ V(((e, t) => {
	var n = xe(), r = tt(), i = H(), a = et(), o = nt(), s = rt(), c = 1, l = 2, u = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Map]", m = "[object Number]", h = "[object RegExp]", g = "[object Set]", _ = "[object String]", v = "[object Symbol]", y = "[object ArrayBuffer]", b = "[object DataView]", x = n ? n.prototype : void 0, S = x ? x.valueOf : void 0;
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
})), at = /* @__PURE__ */ V(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
		return e;
	}
	t.exports = n;
})), ot = /* @__PURE__ */ V(((e, t) => {
	t.exports = Array.isArray;
})), st = /* @__PURE__ */ V(((e, t) => {
	var n = at(), r = ot();
	function i(e, t, i) {
		var a = t(e);
		return r(e) ? a : n(a, i(e));
	}
	t.exports = i;
})), ct = /* @__PURE__ */ V(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
			var o = e[n];
			t(o, n, e) && (a[i++] = o);
		}
		return a;
	}
	t.exports = n;
})), lt = /* @__PURE__ */ V(((e, t) => {
	function n() {
		return [];
	}
	t.exports = n;
})), ut = /* @__PURE__ */ V(((e, t) => {
	var n = ct(), r = lt(), i = Object.prototype.propertyIsEnumerable, a = Object.getOwnPropertySymbols;
	t.exports = a ? function(e) {
		return e == null ? [] : (e = Object(e), n(a(e), function(t) {
			return i.call(e, t);
		}));
	} : r;
})), dt = /* @__PURE__ */ V(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
		return r;
	}
	t.exports = n;
})), q = /* @__PURE__ */ V(((e, t) => {
	function n(e) {
		return typeof e == "object" && !!e;
	}
	t.exports = n;
})), ft = /* @__PURE__ */ V(((e, t) => {
	var n = we(), r = q(), i = "[object Arguments]";
	function a(e) {
		return r(e) && n(e) == i;
	}
	t.exports = a;
})), pt = /* @__PURE__ */ V(((e, t) => {
	var n = ft(), r = q(), i = Object.prototype, a = i.hasOwnProperty, o = i.propertyIsEnumerable;
	t.exports = n(function() {
		return arguments;
	}()) ? n : function(e) {
		return r(e) && a.call(e, "callee") && !o.call(e, "callee");
	};
})), mt = /* @__PURE__ */ V(((e, t) => {
	function n() {
		return !1;
	}
	t.exports = n;
})), ht = /* @__PURE__ */ V(((e, t) => {
	var n = W(), r = mt(), i = typeof e == "object" && e && !e.nodeType && e, a = i && typeof t == "object" && t && !t.nodeType && t, o = a && a.exports === i ? n.Buffer : void 0;
	t.exports = (o ? o.isBuffer : void 0) || r;
})), gt = /* @__PURE__ */ V(((e, t) => {
	var n = /^(?:0|[1-9]\d*)$/;
	function r(e, t) {
		var r = typeof e;
		return t ??= 9007199254740991, !!t && (r == "number" || r != "symbol" && n.test(e)) && e > -1 && e % 1 == 0 && e < t;
	}
	t.exports = r;
})), _t = /* @__PURE__ */ V(((e, t) => {
	function n(e) {
		return typeof e == "number" && e > -1 && e % 1 == 0 && e <= 9007199254740991;
	}
	t.exports = n;
})), vt = /* @__PURE__ */ V(((e, t) => {
	var n = we(), r = _t(), i = q(), a = "[object Arguments]", o = "[object Array]", s = "[object Boolean]", c = "[object Date]", l = "[object Error]", u = "[object Function]", d = "[object Map]", f = "[object Number]", p = "[object Object]", m = "[object RegExp]", h = "[object Set]", g = "[object String]", _ = "[object WeakMap]", v = "[object ArrayBuffer]", y = "[object DataView]", b = "[object Float32Array]", x = "[object Float64Array]", S = "[object Int8Array]", C = "[object Int16Array]", w = "[object Int32Array]", T = "[object Uint8Array]", E = "[object Uint8ClampedArray]", D = "[object Uint16Array]", O = "[object Uint32Array]", k = {};
	k[b] = k[x] = k[S] = k[C] = k[w] = k[T] = k[E] = k[D] = k[O] = !0, k[a] = k[o] = k[v] = k[s] = k[y] = k[c] = k[l] = k[u] = k[d] = k[f] = k[p] = k[m] = k[h] = k[g] = k[_] = !1;
	function A(e) {
		return i(e) && r(e.length) && !!k[n(e)];
	}
	t.exports = A;
})), yt = /* @__PURE__ */ V(((e, t) => {
	function n(e) {
		return function(t) {
			return e(t);
		};
	}
	t.exports = n;
})), bt = /* @__PURE__ */ V(((e, t) => {
	var n = be(), r = typeof e == "object" && e && !e.nodeType && e, i = r && typeof t == "object" && t && !t.nodeType && t, a = i && i.exports === r && n.process;
	t.exports = function() {
		try {
			return i && i.require && i.require("util").types || a && a.binding && a.binding("util");
		} catch {}
	}();
})), xt = /* @__PURE__ */ V(((e, t) => {
	var n = vt(), r = yt(), i = bt(), a = i && i.isTypedArray;
	t.exports = a ? r(a) : n;
})), St = /* @__PURE__ */ V(((e, t) => {
	var n = dt(), r = pt(), i = ot(), a = ht(), o = gt(), s = xt(), c = Object.prototype.hasOwnProperty;
	function l(e, t) {
		var l = i(e), u = !l && r(e), d = !l && !u && a(e), f = !l && !u && !d && s(e), p = l || u || d || f, m = p ? n(e.length, String) : [], h = m.length;
		for (var g in e) (t || c.call(e, g)) && !(p && (g == "length" || d && (g == "offset" || g == "parent") || f && (g == "buffer" || g == "byteLength" || g == "byteOffset") || o(g, h))) && m.push(g);
		return m;
	}
	t.exports = l;
})), Ct = /* @__PURE__ */ V(((e, t) => {
	var n = Object.prototype;
	function r(e) {
		var t = e && e.constructor;
		return e === (typeof t == "function" && t.prototype || n);
	}
	t.exports = r;
})), wt = /* @__PURE__ */ V(((e, t) => {
	function n(e, t) {
		return function(n) {
			return e(t(n));
		};
	}
	t.exports = n;
})), Tt = /* @__PURE__ */ V(((e, t) => {
	t.exports = wt()(Object.keys, Object);
})), Et = /* @__PURE__ */ V(((e, t) => {
	var n = Ct(), r = Tt(), i = Object.prototype.hasOwnProperty;
	function a(e) {
		if (!n(e)) return r(e);
		var t = [];
		for (var a in Object(e)) i.call(e, a) && a != "constructor" && t.push(a);
		return t;
	}
	t.exports = a;
})), Dt = /* @__PURE__ */ V(((e, t) => {
	var n = Te(), r = _t();
	function i(e) {
		return e != null && r(e.length) && !n(e);
	}
	t.exports = i;
})), Ot = /* @__PURE__ */ V(((e, t) => {
	var n = St(), r = Et(), i = Dt();
	function a(e) {
		return i(e) ? n(e) : r(e);
	}
	t.exports = a;
})), kt = /* @__PURE__ */ V(((e, t) => {
	var n = st(), r = ut(), i = Ot();
	function a(e) {
		return n(e, i, r);
	}
	t.exports = a;
})), At = /* @__PURE__ */ V(((e, t) => {
	var n = kt(), r = 1, i = Object.prototype.hasOwnProperty;
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
})), jt = /* @__PURE__ */ V(((e, t) => {
	t.exports = K()(W(), "DataView");
})), Mt = /* @__PURE__ */ V(((e, t) => {
	t.exports = K()(W(), "Promise");
})), Nt = /* @__PURE__ */ V(((e, t) => {
	t.exports = K()(W(), "Set");
})), Pt = /* @__PURE__ */ V(((e, t) => {
	t.exports = K()(W(), "WeakMap");
})), Ft = /* @__PURE__ */ V(((e, t) => {
	var n = jt(), r = je(), i = Mt(), a = Nt(), o = Pt(), s = we(), c = Oe(), l = "[object Map]", u = "[object Object]", d = "[object Promise]", f = "[object Set]", p = "[object WeakMap]", m = "[object DataView]", h = c(n), g = c(r), _ = c(i), v = c(a), y = c(o), b = s;
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
})), It = /* @__PURE__ */ V(((e, t) => {
	var n = Je(), r = et(), i = it(), a = At(), o = Ft(), s = ot(), c = ht(), l = xt(), u = 1, d = "[object Arguments]", f = "[object Array]", p = "[object Object]", m = Object.prototype.hasOwnProperty;
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
})), Lt = /* @__PURE__ */ V(((e, t) => {
	var n = It(), r = q();
	function i(e, t, a, o, s) {
		return e === t ? !0 : e == null || t == null || !r(e) && !r(t) ? e !== e && t !== t : n(e, t, a, o, i, s);
	}
	t.exports = i;
})), Rt = /* @__PURE__ */ V(((e, t) => {
	var n = Lt();
	function r(e, t) {
		return n(e, t);
	}
	t.exports = r;
})), zt = /* @__PURE__ */ V(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
		return e;
	}
	t.exports = n;
})), Bt = /* @__PURE__ */ V(((e, t) => {
	var n = K();
	t.exports = function() {
		try {
			var e = n(Object, "defineProperty");
			return e({}, "", {}), e;
		} catch {}
	}();
})), Vt = /* @__PURE__ */ V(((e, t) => {
	var n = Bt();
	function r(e, t, r) {
		t == "__proto__" && n ? n(e, t, {
			configurable: !0,
			enumerable: !0,
			value: r,
			writable: !0
		}) : e[t] = r;
	}
	t.exports = r;
})), Ht = /* @__PURE__ */ V(((e, t) => {
	var n = Vt(), r = H(), i = Object.prototype.hasOwnProperty;
	function a(e, t, a) {
		var o = e[t];
		(!(i.call(e, t) && r(o, a)) || a === void 0 && !(t in e)) && n(e, t, a);
	}
	t.exports = a;
})), Ut = /* @__PURE__ */ V(((e, t) => {
	var n = Ht(), r = Vt();
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
})), Wt = /* @__PURE__ */ V(((e, t) => {
	var n = Ut(), r = Ot();
	function i(e, t) {
		return e && n(t, r(t), e);
	}
	t.exports = i;
})), Gt = /* @__PURE__ */ V(((e, t) => {
	function n(e) {
		var t = [];
		if (e != null) for (var n in Object(e)) t.push(n);
		return t;
	}
	t.exports = n;
})), Kt = /* @__PURE__ */ V(((e, t) => {
	var n = G(), r = Ct(), i = Gt(), a = Object.prototype.hasOwnProperty;
	function o(e) {
		if (!n(e)) return i(e);
		var t = r(e), o = [];
		for (var s in e) s == "constructor" && (t || !a.call(e, s)) || o.push(s);
		return o;
	}
	t.exports = o;
})), qt = /* @__PURE__ */ V(((e, t) => {
	var n = St(), r = Kt(), i = Dt();
	function a(e) {
		return i(e) ? n(e, !0) : r(e);
	}
	t.exports = a;
})), Jt = /* @__PURE__ */ V(((e, t) => {
	var n = Ut(), r = qt();
	function i(e, t) {
		return e && n(t, r(t), e);
	}
	t.exports = i;
})), Yt = /* @__PURE__ */ V(((e, t) => {
	var n = W(), r = typeof e == "object" && e && !e.nodeType && e, i = r && typeof t == "object" && t && !t.nodeType && t, a = i && i.exports === r ? n.Buffer : void 0, o = a ? a.allocUnsafe : void 0;
	function s(e, t) {
		if (t) return e.slice();
		var n = e.length, r = o ? o(n) : new e.constructor(n);
		return e.copy(r), r;
	}
	t.exports = s;
})), Xt = /* @__PURE__ */ V(((e, t) => {
	function n(e, t) {
		var n = -1, r = e.length;
		for (t ||= Array(r); ++n < r;) t[n] = e[n];
		return t;
	}
	t.exports = n;
})), Zt = /* @__PURE__ */ V(((e, t) => {
	var n = Ut(), r = ut();
	function i(e, t) {
		return n(e, r(e), t);
	}
	t.exports = i;
})), Qt = /* @__PURE__ */ V(((e, t) => {
	t.exports = wt()(Object.getPrototypeOf, Object);
})), $t = /* @__PURE__ */ V(((e, t) => {
	var n = at(), r = Qt(), i = ut(), a = lt();
	t.exports = Object.getOwnPropertySymbols ? function(e) {
		for (var t = []; e;) n(t, i(e)), e = r(e);
		return t;
	} : a;
})), en = /* @__PURE__ */ V(((e, t) => {
	var n = Ut(), r = $t();
	function i(e, t) {
		return n(e, r(e), t);
	}
	t.exports = i;
})), tn = /* @__PURE__ */ V(((e, t) => {
	var n = st(), r = $t(), i = qt();
	function a(e) {
		return n(e, i, r);
	}
	t.exports = a;
})), nn = /* @__PURE__ */ V(((e, t) => {
	var n = Object.prototype.hasOwnProperty;
	function r(e) {
		var t = e.length, r = new e.constructor(t);
		return t && typeof e[0] == "string" && n.call(e, "index") && (r.index = e.index, r.input = e.input), r;
	}
	t.exports = r;
})), rn = /* @__PURE__ */ V(((e, t) => {
	var n = tt();
	function r(e) {
		var t = new e.constructor(e.byteLength);
		return new n(t).set(new n(e)), t;
	}
	t.exports = r;
})), an = /* @__PURE__ */ V(((e, t) => {
	var n = rn();
	function r(e, t) {
		var r = t ? n(e.buffer) : e.buffer;
		return new e.constructor(r, e.byteOffset, e.byteLength);
	}
	t.exports = r;
})), on = /* @__PURE__ */ V(((e, t) => {
	var n = /\w*$/;
	function r(e) {
		var t = new e.constructor(e.source, n.exec(e));
		return t.lastIndex = e.lastIndex, t;
	}
	t.exports = r;
})), sn = /* @__PURE__ */ V(((e, t) => {
	var n = xe(), r = n ? n.prototype : void 0, i = r ? r.valueOf : void 0;
	function a(e) {
		return i ? Object(i.call(e)) : {};
	}
	t.exports = a;
})), cn = /* @__PURE__ */ V(((e, t) => {
	var n = rn();
	function r(e, t) {
		var r = t ? n(e.buffer) : e.buffer;
		return new e.constructor(r, e.byteOffset, e.length);
	}
	t.exports = r;
})), ln = /* @__PURE__ */ V(((e, t) => {
	var n = rn(), r = an(), i = on(), a = sn(), o = cn(), s = "[object Boolean]", c = "[object Date]", l = "[object Map]", u = "[object Number]", d = "[object RegExp]", f = "[object Set]", p = "[object String]", m = "[object Symbol]", h = "[object ArrayBuffer]", g = "[object DataView]", _ = "[object Float32Array]", v = "[object Float64Array]", y = "[object Int8Array]", b = "[object Int16Array]", x = "[object Int32Array]", S = "[object Uint8Array]", C = "[object Uint8ClampedArray]", w = "[object Uint16Array]", T = "[object Uint32Array]";
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
})), un = /* @__PURE__ */ V(((e, t) => {
	var n = G(), r = Object.create;
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
})), dn = /* @__PURE__ */ V(((e, t) => {
	var n = un(), r = Qt(), i = Ct();
	function a(e) {
		return typeof e.constructor == "function" && !i(e) ? n(r(e)) : {};
	}
	t.exports = a;
})), fn = /* @__PURE__ */ V(((e, t) => {
	var n = Ft(), r = q(), i = "[object Map]";
	function a(e) {
		return r(e) && n(e) == i;
	}
	t.exports = a;
})), pn = /* @__PURE__ */ V(((e, t) => {
	var n = fn(), r = yt(), i = bt(), a = i && i.isMap;
	t.exports = a ? r(a) : n;
})), mn = /* @__PURE__ */ V(((e, t) => {
	var n = Ft(), r = q(), i = "[object Set]";
	function a(e) {
		return r(e) && n(e) == i;
	}
	t.exports = a;
})), hn = /* @__PURE__ */ V(((e, t) => {
	var n = mn(), r = yt(), i = bt(), a = i && i.isSet;
	t.exports = a ? r(a) : n;
})), gn = /* @__PURE__ */ V(((e, t) => {
	var n = Je(), r = zt(), i = Ht(), a = Wt(), o = Jt(), s = Yt(), c = Xt(), l = Zt(), u = en(), d = kt(), f = tn(), p = Ft(), m = nn(), h = ln(), g = dn(), _ = ot(), v = ht(), y = pn(), b = G(), x = hn(), S = Ot(), C = qt(), w = 1, T = 2, E = 4, D = "[object Arguments]", O = "[object Array]", k = "[object Boolean]", A = "[object Date]", j = "[object Error]", M = "[object Function]", N = "[object GeneratorFunction]", P = "[object Map]", F = "[object Number]", I = "[object Object]", L = "[object RegExp]", ee = "[object Set]", R = "[object String]", z = "[object Symbol]", B = "[object WeakMap]", te = "[object ArrayBuffer]", ne = "[object DataView]", V = "[object Float32Array]", re = "[object Float64Array]", ie = "[object Int8Array]", ae = "[object Int16Array]", oe = "[object Int32Array]", se = "[object Uint8Array]", ce = "[object Uint8ClampedArray]", le = "[object Uint16Array]", ue = "[object Uint32Array]", H = {};
	H[D] = H[O] = H[te] = H[ne] = H[k] = H[A] = H[V] = H[re] = H[ie] = H[ae] = H[oe] = H[P] = H[F] = H[I] = H[L] = H[ee] = H[R] = H[z] = H[se] = H[ce] = H[le] = H[ue] = !0, H[j] = H[M] = H[B] = !1;
	function U(e, t, O, k, A, j) {
		var P, F = t & w, L = t & T, ee = t & E;
		if (O && (P = A ? O(e, k, A, j) : O(e)), P !== void 0) return P;
		if (!b(e)) return e;
		var R = _(e);
		if (R) {
			if (P = m(e), !F) return c(e, P);
		} else {
			var z = p(e), B = z == M || z == N;
			if (v(e)) return s(e, F);
			if (z == I || z == D || B && !A) {
				if (P = L || B ? {} : g(e), !F) return L ? u(e, o(P, e)) : l(e, a(P, e));
			} else {
				if (!H[z]) return A ? e : {};
				P = h(e, z, F);
			}
		}
		j ||= new n();
		var te = j.get(e);
		if (te) return te;
		j.set(e, P), x(e) ? e.forEach(function(n) {
			P.add(U(n, t, O, n, e, j));
		}) : y(e) && e.forEach(function(n, r) {
			P.set(r, U(n, t, O, r, e, j));
		});
		var ne = R ? void 0 : (ee ? L ? f : d : L ? C : S)(e);
		return r(ne || e, function(n, r) {
			ne && (r = n, n = e[r]), i(P, r, U(n, t, O, r, e, j));
		}), P;
	}
	t.exports = U;
})), _n = /* @__PURE__ */ V(((e, t) => {
	var n = gn(), r = 1, i = 4;
	function a(e) {
		return n(e, r | i);
	}
	t.exports = a;
})), vn = /* @__PURE__ */ ae(Rt(), 1), yn = /* @__PURE__ */ ae(_n(), 1), bn = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var xn = Object.prototype.toString, Sn = (e) => xn.call(e) === "[object Object]", Cn = () => {};
function wn(e, t) {
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
function Tn(e, t = {}) {
	let n, r, i = Cn, a = (e) => {
		clearTimeout(e), i(), i = Cn;
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
function En(e) {
	return Object.entries(e);
}
function Dn(e) {
	return Array.isArray(e) ? e : [e];
}
function On(e) {
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
function kn(e) {
	return On(t(e));
}
function An(e, ...t) {
	let n = t.flat(), r = n[0];
	return kn(() => Object.fromEntries(typeof r == "function" ? Object.entries(D(e)).filter(([e, t]) => !r(O(t), e)) : Object.entries(D(e)).filter((e) => !n.includes(e[0]))));
}
function jn(e, t = 200, n = {}) {
	return wn(Tn(t, n), e);
}
function Mn(e, t, n) {
	return j(e, t, {
		...n,
		immediate: !0
	});
}
//#endregion
//#region node_modules/@vueuse/core/dist/index.js
var Nn = bn ? window : void 0;
bn && window.document, bn && window.navigator, bn && window.location;
function Pn(e) {
	let t = O(e);
	return t?.$el ?? t;
}
function Fn(...e) {
	let n = (e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)), r = t(() => {
		let t = Dn(O(e[0])).filter((e) => e != null);
		return t.every((e) => typeof e != "string") ? t : void 0;
	});
	return Mn(() => [
		r.value?.map((e) => Pn(e)) ?? [Nn].filter((e) => e != null),
		Dn(O(r.value ? e[1] : e[0])),
		Dn(k(r.value ? e[2] : e[1])),
		O(r.value ? e[3] : e[2])
	], ([e, t, r, i], a, o) => {
		if (!e?.length || !t?.length || !r?.length) return;
		let s = Sn(i) ? { ...i } : i, c = e.flatMap((e) => t.flatMap((t) => r.map((r) => n(e, t, r, s))));
		o(() => {
			c.forEach((e) => e());
		});
	}, { flush: "post" });
}
var In = [
	"hash",
	"host",
	"hostname",
	"href",
	"pathname",
	"port",
	"protocol",
	"search"
];
function Ln(e = {}) {
	let { window: t = Nn } = e, n = Object.fromEntries(In.map((e) => [e, b()]));
	for (let [e, r] of En(n)) j(r, (n) => {
		!t?.location || t.location[e] === n || (t.location[e] = n);
	});
	let r = (e) => {
		var r;
		let { state: i, length: a } = t?.history || {}, { origin: o } = t?.location || {};
		for (let e of In) n[e].value = t == null || (r = t.location) == null ? void 0 : r[e];
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
		Fn(t, "popstate", () => i.value = r("popstate"), e), Fn(t, "hashchange", () => i.value = r("hashchange"), e);
	}
	return i;
}
//#endregion
//#region resources/js/Utils/asyncRouter.ts
var Rn = {
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
function zn(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Bn(e, t, n) {
	return e.replace(new RegExp(zn(t), "g"), n);
}
function Vn(e, t, n) {
	Object.keys(t).forEach((r) => {
		let i = t[r];
		if (!i) return;
		let a = `${n}${Bn(Bn(Bn(r, "./", ""), "/", ""), ".vue", "")}`;
		e.component(a, "default" in i ? i.default : i);
	});
}
//#endregion
//#region node_modules/decode-uri-component/index.js
var Hn = /* @__PURE__ */ RegExp("(%[a-f0-9]{2})|([^%]+?)", "gi"), Un = /* @__PURE__ */ RegExp("(%[a-f0-9]{2})+", "gi");
function Wn(e, t) {
	try {
		return [decodeURIComponent(e.join(""))];
	} catch {}
	if (e.length === 1) return e;
	t ||= 1;
	let n = e.slice(0, t), r = e.slice(t);
	return Array.prototype.concat.call([], Wn(n), Wn(r));
}
function Gn(e) {
	try {
		return decodeURIComponent(e);
	} catch {
		let t = e.match(Hn) || [];
		for (let n = 1; n < t.length; n++) e = Wn(t, n).join(""), t = e.match(Hn) || [];
		return e;
	}
}
function Kn(e) {
	let t = {
		"%FE%FF": "��",
		"%FF%FE": "��"
	}, n = Un.exec(e);
	for (; n;) {
		try {
			t[n[0]] = decodeURIComponent(n[0]);
		} catch {
			let e = Gn(n[0]);
			e !== n[0] && (t[n[0]] = e);
		}
		n = Un.exec(e);
	}
	t["%C2"] = "�";
	let r = Object.keys(t);
	for (let n of r) e = e.replace(new RegExp(n, "g"), t[n]);
	return e;
}
function qn(e) {
	if (typeof e != "string") throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
	try {
		return decodeURIComponent(e);
	} catch {
		return Kn(e);
	}
}
//#endregion
//#region node_modules/filter-obj/index.js
function Jn(e, t) {
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
function Yn(e, t) {
	if (!(typeof e == "string" && typeof t == "string")) throw TypeError("Expected the arguments to be of type `string`");
	if (e === "" || t === "") return [];
	let n = e.indexOf(t);
	return n === -1 ? [] : [e.slice(0, n), e.slice(n + t.length)];
}
//#endregion
//#region node_modules/query-string/base.js
var Xn = /* @__PURE__ */ re({
	exclude: () => mr,
	extract: () => cr,
	parse: () => lr,
	parseUrl: () => dr,
	pick: () => pr,
	stringify: () => ur,
	stringifyUrl: () => fr
}), Zn = (e) => e == null, Qn = (e) => encodeURIComponent(e).replaceAll(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), $n = Symbol("encodeFragmentIdentifier");
function er(e) {
	switch (e.arrayFormat) {
		case "index": return (t) => (n, r) => {
			let i = n.length;
			return r === void 0 || e.skipNull && r === null || e.skipEmptyString && r === "" ? n : r === null ? (n.push([
				J(t, e),
				"[",
				i,
				"]"
			].join("")), n) : (n.push([
				J(t, e),
				"[",
				J(i, e),
				"]=",
				J(r, e)
			].join("")), n);
		};
		case "bracket": return (t) => (n, r) => r === void 0 || e.skipNull && r === null || e.skipEmptyString && r === "" ? n : r === null ? (n.push([J(t, e), "[]"].join("")), n) : (n.push([
			J(t, e),
			"[]=",
			J(r, e)
		].join("")), n);
		case "colon-list-separator": return (t) => (n, r) => r === void 0 || e.skipNull && r === null || e.skipEmptyString && r === "" ? n : r === null ? (n.push([J(t, e), ":list="].join("")), n) : (n.push([
			J(t, e),
			":list=",
			J(r, e)
		].join("")), n);
		case "comma":
		case "separator":
		case "bracket-separator": {
			let t = e.arrayFormat === "bracket-separator" ? "[]=" : "=";
			return (n) => (r, i) => i === void 0 || e.skipNull && i === null || e.skipEmptyString && i === "" ? r : (i = i === null ? "" : i, r.length === 0 ? (r.push([
				J(n, e),
				t,
				J(i, e)
			].join("")), r) : (r.push(J(i, e)), r));
		}
		default: return (t) => (n, r) => r === void 0 || e.skipNull && r === null || e.skipEmptyString && r === "" ? n : r === null ? (n.push(J(t, e)), n) : (n.push([
			J(t, e),
			"=",
			J(r, e)
		].join("")), n);
	}
}
function tr(e) {
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
			r[t] = typeof n == "string" && n.includes(e.arrayFormatSeparator) ? n.split(e.arrayFormatSeparator).map((t) => Y(t, e)) : n === null ? n : Y(n, e);
		};
		case "bracket-separator": return (t, n, r) => {
			let i = /(\[])$/.test(t);
			if (t = t.replace(/\[]$/, ""), !i) {
				r[t] = n && Y(n, e);
				return;
			}
			let a = n === null ? [] : Y(n, e).split(e.arrayFormatSeparator);
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
function nr(e) {
	if (typeof e != "string" || e.length !== 1) throw TypeError("arrayFormatSeparator must be single character string");
}
function J(e, t) {
	return t.encode ? t.strict ? Qn(e) : encodeURIComponent(e) : e;
}
function Y(e, t) {
	return t.decode ? qn(e) : e;
}
function rr(e) {
	return Array.isArray(e) ? e.sort() : typeof e == "object" ? rr(Object.keys(e)).sort((e, t) => Number(e) - Number(t)).map((t) => e[t]) : e;
}
function ir(e) {
	let t = e.indexOf("#");
	return t !== -1 && (e = e.slice(0, t)), e;
}
function ar(e) {
	let t = "", n = e.indexOf("#");
	return n !== -1 && (t = e.slice(n)), t;
}
function or(e) {
	let t = e.indexOf("?");
	return t === -1 ? e : e.slice(0, t);
}
function sr(e, t, n) {
	return n === "string" && typeof e == "string" ? e : typeof n == "function" && typeof e == "string" ? n(e) : n === "boolean" && e === null ? !0 : n === "boolean" && e !== null && (e.toLowerCase() === "true" || e.toLowerCase() === "false") ? e.toLowerCase() === "true" : n === "boolean" && e !== null && (e.toLowerCase() === "1" || e.toLowerCase() === "0") ? e.toLowerCase() === "1" : n === "string[]" && t.arrayFormat !== "none" && typeof e == "string" ? [e] : n === "number[]" && t.arrayFormat !== "none" && !Number.isNaN(Number(e)) && typeof e == "string" && e.trim() !== "" ? [Number(e)] : n === "number" && !Number.isNaN(Number(e)) && typeof e == "string" && e.trim() !== "" ? Number(e) : t.parseBooleans && e !== null && (e.toLowerCase() === "true" || e.toLowerCase() === "false") ? e.toLowerCase() === "true" : t.parseNumbers && !Number.isNaN(Number(e)) && typeof e == "string" && e.trim() !== "" ? Number(e) : e;
}
function cr(e) {
	e = ir(e);
	let t = e.indexOf("?");
	return t === -1 ? "" : e.slice(t + 1);
}
function lr(e, t) {
	t = {
		decode: !0,
		sort: !0,
		arrayFormat: "none",
		arrayFormatSeparator: ",",
		parseNumbers: !1,
		parseBooleans: !1,
		types: Object.create(null),
		...t
	}, nr(t.arrayFormatSeparator);
	let n = tr(t), r = Object.create(null);
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
		let s = t.decode ? o.replaceAll("+", " ") : o, [c, l] = Yn(s, "=");
		c === void 0 && (c = s), l = l === void 0 ? null : [
			"comma",
			"separator",
			"bracket-separator"
		].includes(t.arrayFormat) ? l : Y(l, t), n(Y(c, t), l, r);
	}
	for (let [e, n] of Object.entries(r)) if (typeof n == "object" && n && t.types[e] !== "string") for (let [r, i] of Object.entries(n)) {
		let a = t.types[e], o = typeof a == "function" ? a : a ? a.replace("[]", "") : void 0;
		n[r] = sr(i, t, o);
	}
	else typeof n == "object" && n && t.types[e] === "string" ? r[e] = Object.values(n).join(t.arrayFormatSeparator) : r[e] = sr(n, t, t.types[e]);
	return t.sort === !1 ? r : (t.sort === !0 ? Object.keys(r).sort() : Object.keys(r).sort(t.sort)).reduce((e, t) => {
		let n = r[t];
		return e[t] = n && typeof n == "object" && !Array.isArray(n) ? rr(n) : n, e;
	}, Object.create(null));
}
function ur(e, t) {
	if (!e) return "";
	t = {
		encode: !0,
		strict: !0,
		arrayFormat: "none",
		arrayFormatSeparator: ",",
		...t
	}, nr(t.arrayFormatSeparator);
	let n = (n) => t.skipNull && Zn(e[n]) || t.skipEmptyString && e[n] === "", r = er(t), i = {};
	for (let [t, r] of Object.entries(e)) n(t) || (i[t] = r);
	let a = Object.keys(i);
	return t.sort !== !1 && a.sort(t.sort), a.map((n) => {
		let i = e[n];
		if (t.replacer && (i = t.replacer(n, i), i === void 0) || i === void 0) return "";
		if (i === null) return J(n, t);
		if (Array.isArray(i)) {
			if (i.length === 0 && t.arrayFormat === "bracket-separator") return J(n, t) + "[]";
			let e = i;
			t.replacer && (e = i.map((e, r) => t.replacer(`${n}[${r}]`, e)).filter((e) => e !== void 0));
			let a = e.reduce(r(n), []), o = [
				"comma",
				"separator",
				"bracket-separator"
			].includes(t.arrayFormat) ? t.arrayFormatSeparator : "&";
			return a.join(o);
		}
		return J(n, t) + "=" + J(i, t);
	}).filter((e) => e.length > 0).join("&");
}
function dr(e, t) {
	t = {
		decode: !0,
		...t
	};
	let [n, r] = Yn(e, "#");
	return n === void 0 && (n = e), {
		url: or(n ?? ""),
		query: lr(cr(e), t),
		...t && t.parseFragmentIdentifier && r ? { fragmentIdentifier: Y(r, t) } : {}
	};
}
function fr(e, t) {
	t = {
		encode: !0,
		strict: !0,
		[$n]: !0,
		...t
	};
	let n = or(ir(e.url)) || "", r = ur({
		...lr(cr(e.url), {
			sort: !1,
			...t
		}),
		...e.query
	}, t);
	r &&= `?${r}`;
	let i = ar(e.url);
	if (typeof e.fragmentIdentifier == "string") {
		let r = new URL(n, "https://query-string.invalid");
		r.hash = e.fragmentIdentifier, i = t[$n] ? r.hash : `#${e.fragmentIdentifier}`;
	}
	return `${n}${r}${i}`;
}
function pr(e, t, n) {
	n = {
		parseFragmentIdentifier: !0,
		[$n]: !1,
		...n
	};
	let { url: r, query: i, fragmentIdentifier: a } = dr(e, n);
	return fr({
		url: r,
		query: Jn(i, t),
		fragmentIdentifier: a
	}, n);
}
function mr(e, t, n) {
	if (Array.isArray(t)) {
		let r = new Set(t);
		return pr(e, (e) => !r.has(e), n);
	}
	return pr(e, (e, n) => !t(e, n), n);
}
//#endregion
//#region node_modules/query-string/index.js
var hr = Xn;
//#endregion
//#region resources/js/Utils/query.ts
function gr() {
	return hr.parse(location.search, {
		arrayFormat: "index",
		parseNumbers: !0
	});
}
function _r(e) {
	return hr.stringify(e, { arrayFormat: "index" });
}
function vr(e) {
	let t = gr();
	return e in t ? t[e] : null;
}
function yr(e) {
	let [t = window.location.href] = window.location.href.split("?");
	return Object.keys(e).length > 0 ? `${t}?${_r(e)}` : t;
}
//#endregion
//#region resources/js/Composables/useFilter.ts
var br = (e) => Array.isArray(e) && e.length === 0, xr = (e, t) => t === "" || t == null || br(t) || t === !1 ? e === "" || e == null || br(e) || e === !1 : (0, vn.default)(e, t);
function X(e, t) {
	let n = typeof e == "object" ? (0, yn.default)(e) : (0, yn.default)(e()), r = () => {
		let e = gr();
		return Object.keys(n).reduce((t, r) => (xr(e[r], n[r]) || e[r] === void 0 ? t[r] = n[r] : t[r] = e[r], t), {});
	}, i = (e) => Object.keys(n).some((t) => !xr(e[t], n[t])), a = r(), o, s = () => Object.keys(n).reduce((e, t) => (e[t] = o[t], e), {}), c = (e) => {
		let t = s();
		return e.some((e) => !xr(t[e], n[e]));
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
		let r = gr();
		return Object.keys(e).forEach((t) => {
			let i = e[t], a = n[t];
			xr(i, a) || !i ? delete r[t] : r[t] = i;
		}), (t?.resetQuery ?? ["page", "cursor"]).forEach((e) => delete r[e]), yr(r);
	}, d = null, f = jn((e) => {
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
function Sr(e, t) {
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
function Z(e) {
	return typeof e == "object" && !!e && "route" in e;
}
function Cr(e) {
	return typeof e == "object" && !!e && "url" in e;
}
function wr(e) {
	return typeof e == "object" && !!e && "path" in e;
}
function Tr(e) {
	return typeof e == "function";
}
function Er(e) {
	let n = F(), r = Ln();
	return t(() => {
		let t = O(e), i = r.value.href;
		return Q(t, n.url, i ? new URL(i) : null);
	});
}
function Q(e, t, n) {
	if (Array.isArray(e)) return e.some((e) => Q(e, t, n));
	if (wr(e)) return e.path === t;
	if (Cr(e)) {
		if (n) {
			if (e.url.startsWith("/")) return e.url === n.pathname;
			let t = new URL(e.url);
			return `${t.host}${t.pathname}` == `${n.host}${n.pathname}`;
		}
		return !1;
	} else if (Z(e)) return route().current(e.route, e.params);
	else if (typeof e == "function") return e();
	return !1;
}
function Dr(e) {
	let n = F(), r = Ln(), i = t(() => n.url), a = t(() => {
		let e = r.value.href;
		return e ? new URL(e) : null;
	}), o = (e) => {
		if (e.active) return Q(e.active, i.value, a.value);
		let t = e.action;
		if (t) {
			if (typeof t == "string") return Q({ url: t }, i.value, a.value);
			if (Z(t) || Cr(t) || wr(t)) return Q(t, i.value, a.value);
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
		ce(t(() => a.item));
		let o = An(a, "item", "as"), s = t(() => {
			if (a.as !== void 0) return a.as;
			let e = a.item.action;
			if (e) {
				if (Cr(e)) return e.external === !0 ? "a" : N;
				if (wr(e) || Z(e)) return N;
			}
			return "button";
		}), c = t(() => {
			let e = a.item.action, t = {};
			return e && (Cr(e) ? (t.href = e.url, e.external !== !0 && (t.preserveScroll = e.preserveScroll, t.preserveState = e.preserveState)) : wr(e) ? (t.href = e.path, t.preserveScroll = e.preserveScroll, t.preserveState = e.preserveState) : Z(e) && (t.href = route(e.route, e.params), t.preserveScroll = e.preserveScroll, t.preserveState = e.preserveState)), {
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
		let i = le(), a = t(() => i.value?.icon);
		return (e, t) => a.value && "src" in a.value ? (_(), n(k(oe), {
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
	}), h = t(() => u.somethingSelected.value && m.value.length > 0), g = s("search"), _ = s("sort_by"), v = s("sort_direction"), y = s("limit"), b = X(() => ({ [g]: "" }), { resetQuery: c }), x = X(() => e.value.filter?.defaultValue ?? {}, { resetQuery: c }), S = X(() => ({
		[_]: null,
		[v]: null
	}), { resetQuery: c }), C = X(() => ({ [y]: e.value.defaultPerPage }), { resetQuery: c }), w = t({
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
	}, j = (e, t = "all") => fi(e.actions, t), M = (e = "all") => fi(m.value, e), P = t(() => !e.value.isEmpty), F = t(() => P.value && p.value), I = t(() => e.value.isEmpty), L = t(() => !e.value.isEmpty && a.value.length === 0), ee = t(() => !e.value.isEmpty && e.value.isSearchable), R = t(() => !e.value.isEmpty && e.value.filter !== null), z = t(() => !e.value.isEmpty && a.value.length > 0 && e.value.footerCells.length > 0), B = t(() => !e.value.isEmpty && a.value.length > 0 && (e.value.pagination !== null || e.value.cursorPagination !== null));
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
		isSelectionApplicable: F,
		isContentApplicable: P,
		isEmptyTableApplicable: I,
		isEmptyResultsApplicable: L,
		isSearchApplicable: ee,
		isFiltersApplicable: R,
		isFooterApplicable: z,
		isPaginationApplicable: B,
		hasPerPageSettings: t(() => B.value && e.value.perPageOptions.length > 0),
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
		let t = e, i = $(), a = () => {
			if (i.searchFilter.applied) {
				i.clearSearch();
				return;
			}
			i.filter.applied && i.filter.reset();
		};
		return (e, o) => k(i).isEmptyResultsApplicable.value ? (_(), n(k(I), p({
			key: 0,
			as: t.as,
			"as-child": t.asChild
		}, e.$attrs), {
			default: M(() => [S(e.$slots, "default", {
				table: k(i).table.value,
				clear: a,
				clearSearch: k(i).clearSearch,
				resetFilters: k(i).filter.reset,
				searchApplied: k(i).searchFilter.applied,
				filtersApplied: k(i).filter.applied
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
		return (e, t) => k(o).isSelectionApplicable.value && k(s).totalCount.value > 0 ? (_(), n(k(I), p({
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
		let i = e, a = A(), o = $(), s = i.row === void 0 ? ni() : null, c = t(() => i.row ?? s.row), l = t(() => o.isSelectionApplicable.value && o.isRowSelectable(c.value)), u = t(() => o.selectionState.isRowSelected(c.value.key)), d = () => o.selectionState.toggleRow(c.value.key), f = t(() => ({
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
	return { onEvent(t) {
		e[t.name]?.([...t.selection], t);
	} };
}
//#endregion
export { Vi as DataTableActionActivation, Hi as DataTableActionConfirmation, zi as DataTableBulkActions, Oi as DataTableCell, Di as DataTableCellContent, ki as DataTableCells, Pi as DataTableClearSelection, gi as DataTableContent, vi as DataTableEmptyResults, _i as DataTableEmptyTable, xi as DataTableFilterWidget, Si as DataTableFilterWidgets, bi as DataTableFilters, Ai as DataTableFooter, ji as DataTableFooterCell, Mi as DataTableFooterCells, Ci as DataTableHeading, wi as DataTableHeadings, Ki as DataTablePagination, qi as DataTablePaginationFirst, Xi as DataTablePaginationLast, Yi as DataTablePaginationNext, Ji as DataTablePaginationPrevious, Zi as DataTablePaginationStatus, Wi as DataTablePerPage, Gi as DataTablePerPageOptions, Bi as DataTableResourceActions, hi as DataTableResourceActionsRoot, mi as DataTableRoot, Ti as DataTableRow, Ri as DataTableRowActions, Ei as DataTableRows, yi as DataTableSearch, Fi as DataTableSelectAll, Ii as DataTableSelectRow, Ni as DataTableSelectionStatus, Ui as DataTableSorting, oe as Icon, jr as NavigationButton, Mr as NavigationButtonIcon, Rn as asyncRouter, Qi as bindDataTableEvents, di as configureDataTableStyle, pi as createDataTableContext, _r as formatQuery, vr as getValueFromQuery, Q as isActivated, Tr as isEventAction, Cr as isLinkAction, wr as isLinkPathAction, Z as isRouteAction, kr as onActivated, Ar as onDeactivated, gr as parseQuery, $r as provideDataTableActionController, Zr as provideDataTableActionScopeContext, Gr as provideDataTableCellContext, zr as provideDataTableContext, Yr as provideDataTableFilterWidgetContext, qr as provideDataTableFooterCellContext, Ur as provideDataTableHeadingContext, ti as provideDataTableResourceActionsContext, Vr as provideDataTableRowContext, ui as qualifyDataTableQueryKey, Vn as registerNamespacedComponents, yr as urlWithQuery, Er as useActiveLink, Ir as useDataTableActionController, ci as useDataTableActionControllerContext, Fr as useDataTableActionRunner, si as useDataTableActionScopeContext, ii as useDataTableCellContext, $ as useDataTableContext, oi as useDataTableFilterWidgetContext, ai as useDataTableFooterCellContext, ri as useDataTableHeadingContext, li as useDataTableResourceActionsContext, ni as useDataTableRowContext, Lr as useDataTableSelection, X as useFilter, Sr as useFlash, Dr as useNavigation, Or as useToggle };

//# sourceMappingURL=ui.js.map