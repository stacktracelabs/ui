import { computed as e, createBlock as t, createCommentVNode as n, defineComponent as r, h as i, inject as a, isRef as o, mergeProps as s, onBeforeUnmount as c, onMounted as l, openBlock as u, provide as d, reactive as f, ref as p, renderSlot as m, resolveDynamicComponent as h, shallowRef as g, toRefs as _, toValue as v, unref as y, watch as b, withCtx as x } from "vue";
import { Link as S, router as C, usePage as w } from "@inertiajs/vue3";
import { Primitive as T } from "reka-ui";
//#region \0rolldown/runtime.js
var E = Object.create, D = Object.defineProperty, O = Object.getOwnPropertyDescriptor, k = Object.getOwnPropertyNames, A = Object.getPrototypeOf, j = Object.prototype.hasOwnProperty, M = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), ee = (e, t) => {
	let n = {};
	for (var r in e) D(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || D(n, Symbol.toStringTag, { value: "Module" }), n;
}, N = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = k(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !j.call(e, s) && s !== n && D(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = O(t, s)) || r.enumerable
	});
	return e;
}, P = (e, t, n) => (n = e == null ? {} : E(A(e)), N(t || !e || !e.__esModule ? D(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), F = r({
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
		}, n = new DOMParser(), r = n.parseFromString(e.src, "image/svg+xml").documentElement, a = g(t(r)), o = g(r.innerHTML);
		return b(() => e.src, () => {
			let r = n.parseFromString(e.src, "image/svg+xml").documentElement;
			a.value = t(r), o.value = r.innerHTML;
		}), () => i("svg", {
			...a.value,
			innerHTML: o.value
		});
	}
}), I = Symbol();
function te(e) {
	d(I, e);
}
function ne() {
	let t = a(I);
	return e(() => t ? v(t) : null);
}
//#endregion
//#region node_modules/lodash/_listCacheClear.js
var L = /* @__PURE__ */ M(((e, t) => {
	function n() {
		this.__data__ = [], this.size = 0;
	}
	t.exports = n;
})), R = /* @__PURE__ */ M(((e, t) => {
	function n(e, t) {
		return e === t || e !== e && t !== t;
	}
	t.exports = n;
})), z = /* @__PURE__ */ M(((e, t) => {
	var n = R();
	function r(e, t) {
		for (var r = e.length; r--;) if (n(e[r][0], t)) return r;
		return -1;
	}
	t.exports = r;
})), re = /* @__PURE__ */ M(((e, t) => {
	var n = z(), r = Array.prototype.splice;
	function i(e) {
		var t = this.__data__, i = n(t, e);
		return i < 0 ? !1 : (i == t.length - 1 ? t.pop() : r.call(t, i, 1), --this.size, !0);
	}
	t.exports = i;
})), ie = /* @__PURE__ */ M(((e, t) => {
	var n = z();
	function r(e) {
		var t = this.__data__, r = n(t, e);
		return r < 0 ? void 0 : t[r][1];
	}
	t.exports = r;
})), ae = /* @__PURE__ */ M(((e, t) => {
	var n = z();
	function r(e) {
		return n(this.__data__, e) > -1;
	}
	t.exports = r;
})), oe = /* @__PURE__ */ M(((e, t) => {
	var n = z();
	function r(e, t) {
		var r = this.__data__, i = n(r, e);
		return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this;
	}
	t.exports = r;
})), B = /* @__PURE__ */ M(((e, t) => {
	var n = L(), r = re(), i = ie(), a = ae(), o = oe();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), se = /* @__PURE__ */ M(((e, t) => {
	var n = B();
	function r() {
		this.__data__ = new n(), this.size = 0;
	}
	t.exports = r;
})), ce = /* @__PURE__ */ M(((e, t) => {
	function n(e) {
		var t = this.__data__, n = t.delete(e);
		return this.size = t.size, n;
	}
	t.exports = n;
})), le = /* @__PURE__ */ M(((e, t) => {
	function n(e) {
		return this.__data__.get(e);
	}
	t.exports = n;
})), ue = /* @__PURE__ */ M(((e, t) => {
	function n(e) {
		return this.__data__.has(e);
	}
	t.exports = n;
})), de = /* @__PURE__ */ M(((e, t) => {
	t.exports = typeof global == "object" && global && global.Object === Object && global;
})), V = /* @__PURE__ */ M(((e, t) => {
	var n = de(), r = typeof self == "object" && self && self.Object === Object && self;
	t.exports = n || r || Function("return this")();
})), H = /* @__PURE__ */ M(((e, t) => {
	t.exports = V().Symbol;
})), fe = /* @__PURE__ */ M(((e, t) => {
	var n = H(), r = Object.prototype, i = r.hasOwnProperty, a = r.toString, o = n ? n.toStringTag : void 0;
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
})), pe = /* @__PURE__ */ M(((e, t) => {
	var n = Object.prototype.toString;
	function r(e) {
		return n.call(e);
	}
	t.exports = r;
})), me = /* @__PURE__ */ M(((e, t) => {
	var n = H(), r = fe(), i = pe(), a = "[object Null]", o = "[object Undefined]", s = n ? n.toStringTag : void 0;
	function c(e) {
		return e == null ? e === void 0 ? o : a : s && s in Object(e) ? r(e) : i(e);
	}
	t.exports = c;
})), U = /* @__PURE__ */ M(((e, t) => {
	function n(e) {
		var t = typeof e;
		return e != null && (t == "object" || t == "function");
	}
	t.exports = n;
})), he = /* @__PURE__ */ M(((e, t) => {
	var n = me(), r = U(), i = "[object AsyncFunction]", a = "[object Function]", o = "[object GeneratorFunction]", s = "[object Proxy]";
	function c(e) {
		if (!r(e)) return !1;
		var t = n(e);
		return t == a || t == o || t == i || t == s;
	}
	t.exports = c;
})), ge = /* @__PURE__ */ M(((e, t) => {
	t.exports = V()["__core-js_shared__"];
})), _e = /* @__PURE__ */ M(((e, t) => {
	var n = ge(), r = function() {
		var e = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "");
		return e ? "Symbol(src)_1." + e : "";
	}();
	function i(e) {
		return !!r && r in e;
	}
	t.exports = i;
})), ve = /* @__PURE__ */ M(((e, t) => {
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
})), ye = /* @__PURE__ */ M(((e, t) => {
	var n = he(), r = _e(), i = U(), a = ve(), o = /[\\^$.*+?()[\]{}|]/g, s = /^\[object .+?Constructor\]$/, c = Function.prototype, l = Object.prototype, u = c.toString, d = l.hasOwnProperty, f = RegExp("^" + u.call(d).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	function p(e) {
		return !i(e) || r(e) ? !1 : (n(e) ? f : s).test(a(e));
	}
	t.exports = p;
})), be = /* @__PURE__ */ M(((e, t) => {
	function n(e, t) {
		return e?.[t];
	}
	t.exports = n;
})), W = /* @__PURE__ */ M(((e, t) => {
	var n = ye(), r = be();
	function i(e, t) {
		var i = r(e, t);
		return n(i) ? i : void 0;
	}
	t.exports = i;
})), xe = /* @__PURE__ */ M(((e, t) => {
	t.exports = W()(V(), "Map");
})), Se = /* @__PURE__ */ M(((e, t) => {
	t.exports = W()(Object, "create");
})), Ce = /* @__PURE__ */ M(((e, t) => {
	var n = Se();
	function r() {
		this.__data__ = n ? n(null) : {}, this.size = 0;
	}
	t.exports = r;
})), we = /* @__PURE__ */ M(((e, t) => {
	function n(e) {
		var t = this.has(e) && delete this.__data__[e];
		return this.size -= +!!t, t;
	}
	t.exports = n;
})), Te = /* @__PURE__ */ M(((e, t) => {
	var n = Se(), r = "__lodash_hash_undefined__", i = Object.prototype.hasOwnProperty;
	function a(e) {
		var t = this.__data__;
		if (n) {
			var a = t[e];
			return a === r ? void 0 : a;
		}
		return i.call(t, e) ? t[e] : void 0;
	}
	t.exports = a;
})), Ee = /* @__PURE__ */ M(((e, t) => {
	var n = Se(), r = Object.prototype.hasOwnProperty;
	function i(e) {
		var t = this.__data__;
		return n ? t[e] !== void 0 : r.call(t, e);
	}
	t.exports = i;
})), De = /* @__PURE__ */ M(((e, t) => {
	var n = Se(), r = "__lodash_hash_undefined__";
	function i(e, t) {
		var i = this.__data__;
		return this.size += +!this.has(e), i[e] = n && t === void 0 ? r : t, this;
	}
	t.exports = i;
})), Oe = /* @__PURE__ */ M(((e, t) => {
	var n = Ce(), r = we(), i = Te(), a = Ee(), o = De();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), ke = /* @__PURE__ */ M(((e, t) => {
	var n = Oe(), r = B(), i = xe();
	function a() {
		this.size = 0, this.__data__ = {
			hash: new n(),
			map: new (i || r)(),
			string: new n()
		};
	}
	t.exports = a;
})), Ae = /* @__PURE__ */ M(((e, t) => {
	function n(e) {
		var t = typeof e;
		return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
	}
	t.exports = n;
})), je = /* @__PURE__ */ M(((e, t) => {
	var n = Ae();
	function r(e, t) {
		var r = e.__data__;
		return n(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
	}
	t.exports = r;
})), Me = /* @__PURE__ */ M(((e, t) => {
	var n = je();
	function r(e) {
		var t = n(this, e).delete(e);
		return this.size -= +!!t, t;
	}
	t.exports = r;
})), Ne = /* @__PURE__ */ M(((e, t) => {
	var n = je();
	function r(e) {
		return n(this, e).get(e);
	}
	t.exports = r;
})), Pe = /* @__PURE__ */ M(((e, t) => {
	var n = je();
	function r(e) {
		return n(this, e).has(e);
	}
	t.exports = r;
})), Fe = /* @__PURE__ */ M(((e, t) => {
	var n = je();
	function r(e, t) {
		var r = n(this, e), i = r.size;
		return r.set(e, t), this.size += r.size == i ? 0 : 1, this;
	}
	t.exports = r;
})), Ie = /* @__PURE__ */ M(((e, t) => {
	var n = ke(), r = Me(), i = Ne(), a = Pe(), o = Fe();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), Le = /* @__PURE__ */ M(((e, t) => {
	var n = B(), r = xe(), i = Ie(), a = 200;
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
})), Re = /* @__PURE__ */ M(((e, t) => {
	var n = B(), r = se(), i = ce(), a = le(), o = ue(), s = Le();
	function c(e) {
		var t = this.__data__ = new n(e);
		this.size = t.size;
	}
	c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = a, c.prototype.has = o, c.prototype.set = s, t.exports = c;
})), ze = /* @__PURE__ */ M(((e, t) => {
	var n = "__lodash_hash_undefined__";
	function r(e) {
		return this.__data__.set(e, n), this;
	}
	t.exports = r;
})), Be = /* @__PURE__ */ M(((e, t) => {
	function n(e) {
		return this.__data__.has(e);
	}
	t.exports = n;
})), Ve = /* @__PURE__ */ M(((e, t) => {
	var n = Ie(), r = ze(), i = Be();
	function a(e) {
		var t = -1, r = e == null ? 0 : e.length;
		for (this.__data__ = new n(); ++t < r;) this.add(e[t]);
	}
	a.prototype.add = a.prototype.push = r, a.prototype.has = i, t.exports = a;
})), He = /* @__PURE__ */ M(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
		return !1;
	}
	t.exports = n;
})), Ue = /* @__PURE__ */ M(((e, t) => {
	function n(e, t) {
		return e.has(t);
	}
	t.exports = n;
})), We = /* @__PURE__ */ M(((e, t) => {
	var n = Ve(), r = He(), i = Ue(), a = 1, o = 2;
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
})), Ge = /* @__PURE__ */ M(((e, t) => {
	t.exports = V().Uint8Array;
})), Ke = /* @__PURE__ */ M(((e, t) => {
	function n(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e, r) {
			n[++t] = [r, e];
		}), n;
	}
	t.exports = n;
})), qe = /* @__PURE__ */ M(((e, t) => {
	function n(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e) {
			n[++t] = e;
		}), n;
	}
	t.exports = n;
})), Je = /* @__PURE__ */ M(((e, t) => {
	var n = H(), r = Ge(), i = R(), a = We(), o = Ke(), s = qe(), c = 1, l = 2, u = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Map]", m = "[object Number]", h = "[object RegExp]", g = "[object Set]", _ = "[object String]", v = "[object Symbol]", y = "[object ArrayBuffer]", b = "[object DataView]", x = n ? n.prototype : void 0, S = x ? x.valueOf : void 0;
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
})), Ye = /* @__PURE__ */ M(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
		return e;
	}
	t.exports = n;
})), G = /* @__PURE__ */ M(((e, t) => {
	t.exports = Array.isArray;
})), Xe = /* @__PURE__ */ M(((e, t) => {
	var n = Ye(), r = G();
	function i(e, t, i) {
		var a = t(e);
		return r(e) ? a : n(a, i(e));
	}
	t.exports = i;
})), Ze = /* @__PURE__ */ M(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
			var o = e[n];
			t(o, n, e) && (a[i++] = o);
		}
		return a;
	}
	t.exports = n;
})), Qe = /* @__PURE__ */ M(((e, t) => {
	function n() {
		return [];
	}
	t.exports = n;
})), $e = /* @__PURE__ */ M(((e, t) => {
	var n = Ze(), r = Qe(), i = Object.prototype.propertyIsEnumerable, a = Object.getOwnPropertySymbols;
	t.exports = a ? function(e) {
		return e == null ? [] : (e = Object(e), n(a(e), function(t) {
			return i.call(e, t);
		}));
	} : r;
})), et = /* @__PURE__ */ M(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
		return r;
	}
	t.exports = n;
})), K = /* @__PURE__ */ M(((e, t) => {
	function n(e) {
		return typeof e == "object" && !!e;
	}
	t.exports = n;
})), tt = /* @__PURE__ */ M(((e, t) => {
	var n = me(), r = K(), i = "[object Arguments]";
	function a(e) {
		return r(e) && n(e) == i;
	}
	t.exports = a;
})), nt = /* @__PURE__ */ M(((e, t) => {
	var n = tt(), r = K(), i = Object.prototype, a = i.hasOwnProperty, o = i.propertyIsEnumerable;
	t.exports = n(function() {
		return arguments;
	}()) ? n : function(e) {
		return r(e) && a.call(e, "callee") && !o.call(e, "callee");
	};
})), rt = /* @__PURE__ */ M(((e, t) => {
	function n() {
		return !1;
	}
	t.exports = n;
})), it = /* @__PURE__ */ M(((e, t) => {
	var n = V(), r = rt(), i = typeof e == "object" && e && !e.nodeType && e, a = i && typeof t == "object" && t && !t.nodeType && t, o = a && a.exports === i ? n.Buffer : void 0;
	t.exports = (o ? o.isBuffer : void 0) || r;
})), at = /* @__PURE__ */ M(((e, t) => {
	var n = 9007199254740991, r = /^(?:0|[1-9]\d*)$/;
	function i(e, t) {
		var i = typeof e;
		return t ??= n, !!t && (i == "number" || i != "symbol" && r.test(e)) && e > -1 && e % 1 == 0 && e < t;
	}
	t.exports = i;
})), ot = /* @__PURE__ */ M(((e, t) => {
	var n = 9007199254740991;
	function r(e) {
		return typeof e == "number" && e > -1 && e % 1 == 0 && e <= n;
	}
	t.exports = r;
})), st = /* @__PURE__ */ M(((e, t) => {
	var n = me(), r = ot(), i = K(), a = "[object Arguments]", o = "[object Array]", s = "[object Boolean]", c = "[object Date]", l = "[object Error]", u = "[object Function]", d = "[object Map]", f = "[object Number]", p = "[object Object]", m = "[object RegExp]", h = "[object Set]", g = "[object String]", _ = "[object WeakMap]", v = "[object ArrayBuffer]", y = "[object DataView]", b = "[object Float32Array]", x = "[object Float64Array]", S = "[object Int8Array]", C = "[object Int16Array]", w = "[object Int32Array]", T = "[object Uint8Array]", E = "[object Uint8ClampedArray]", D = "[object Uint16Array]", O = "[object Uint32Array]", k = {};
	k[b] = k[x] = k[S] = k[C] = k[w] = k[T] = k[E] = k[D] = k[O] = !0, k[a] = k[o] = k[v] = k[s] = k[y] = k[c] = k[l] = k[u] = k[d] = k[f] = k[p] = k[m] = k[h] = k[g] = k[_] = !1;
	function A(e) {
		return i(e) && r(e.length) && !!k[n(e)];
	}
	t.exports = A;
})), ct = /* @__PURE__ */ M(((e, t) => {
	function n(e) {
		return function(t) {
			return e(t);
		};
	}
	t.exports = n;
})), lt = /* @__PURE__ */ M(((e, t) => {
	var n = de(), r = typeof e == "object" && e && !e.nodeType && e, i = r && typeof t == "object" && t && !t.nodeType && t, a = i && i.exports === r && n.process;
	t.exports = function() {
		try {
			return i && i.require && i.require("util").types || a && a.binding && a.binding("util");
		} catch {}
	}();
})), ut = /* @__PURE__ */ M(((e, t) => {
	var n = st(), r = ct(), i = lt(), a = i && i.isTypedArray;
	t.exports = a ? r(a) : n;
})), dt = /* @__PURE__ */ M(((e, t) => {
	var n = et(), r = nt(), i = G(), a = it(), o = at(), s = ut(), c = Object.prototype.hasOwnProperty;
	function l(e, t) {
		var l = i(e), u = !l && r(e), d = !l && !u && a(e), f = !l && !u && !d && s(e), p = l || u || d || f, m = p ? n(e.length, String) : [], h = m.length;
		for (var g in e) (t || c.call(e, g)) && !(p && (g == "length" || d && (g == "offset" || g == "parent") || f && (g == "buffer" || g == "byteLength" || g == "byteOffset") || o(g, h))) && m.push(g);
		return m;
	}
	t.exports = l;
})), ft = /* @__PURE__ */ M(((e, t) => {
	var n = Object.prototype;
	function r(e) {
		var t = e && e.constructor;
		return e === (typeof t == "function" && t.prototype || n);
	}
	t.exports = r;
})), pt = /* @__PURE__ */ M(((e, t) => {
	function n(e, t) {
		return function(n) {
			return e(t(n));
		};
	}
	t.exports = n;
})), mt = /* @__PURE__ */ M(((e, t) => {
	t.exports = pt()(Object.keys, Object);
})), ht = /* @__PURE__ */ M(((e, t) => {
	var n = ft(), r = mt(), i = Object.prototype.hasOwnProperty;
	function a(e) {
		if (!n(e)) return r(e);
		var t = [];
		for (var a in Object(e)) i.call(e, a) && a != "constructor" && t.push(a);
		return t;
	}
	t.exports = a;
})), gt = /* @__PURE__ */ M(((e, t) => {
	var n = he(), r = ot();
	function i(e) {
		return e != null && r(e.length) && !n(e);
	}
	t.exports = i;
})), _t = /* @__PURE__ */ M(((e, t) => {
	var n = dt(), r = ht(), i = gt();
	function a(e) {
		return i(e) ? n(e) : r(e);
	}
	t.exports = a;
})), vt = /* @__PURE__ */ M(((e, t) => {
	var n = Xe(), r = $e(), i = _t();
	function a(e) {
		return n(e, i, r);
	}
	t.exports = a;
})), yt = /* @__PURE__ */ M(((e, t) => {
	var n = vt(), r = 1, i = Object.prototype.hasOwnProperty;
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
})), bt = /* @__PURE__ */ M(((e, t) => {
	t.exports = W()(V(), "DataView");
})), xt = /* @__PURE__ */ M(((e, t) => {
	t.exports = W()(V(), "Promise");
})), St = /* @__PURE__ */ M(((e, t) => {
	t.exports = W()(V(), "Set");
})), Ct = /* @__PURE__ */ M(((e, t) => {
	t.exports = W()(V(), "WeakMap");
})), wt = /* @__PURE__ */ M(((e, t) => {
	var n = bt(), r = xe(), i = xt(), a = St(), o = Ct(), s = me(), c = ve(), l = "[object Map]", u = "[object Object]", d = "[object Promise]", f = "[object Set]", p = "[object WeakMap]", m = "[object DataView]", h = c(n), g = c(r), _ = c(i), v = c(a), y = c(o), b = s;
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
})), Tt = /* @__PURE__ */ M(((e, t) => {
	var n = Re(), r = We(), i = Je(), a = yt(), o = wt(), s = G(), c = it(), l = ut(), u = 1, d = "[object Arguments]", f = "[object Array]", p = "[object Object]", m = Object.prototype.hasOwnProperty;
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
})), Et = /* @__PURE__ */ M(((e, t) => {
	var n = Tt(), r = K();
	function i(e, t, a, o, s) {
		return e === t ? !0 : e == null || t == null || !r(e) && !r(t) ? e !== e && t !== t : n(e, t, a, o, i, s);
	}
	t.exports = i;
})), Dt = /* @__PURE__ */ M(((e, t) => {
	var n = Et();
	function r(e, t) {
		return n(e, t);
	}
	t.exports = r;
})), Ot = /* @__PURE__ */ M(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
		return e;
	}
	t.exports = n;
})), kt = /* @__PURE__ */ M(((e, t) => {
	var n = W();
	t.exports = function() {
		try {
			var e = n(Object, "defineProperty");
			return e({}, "", {}), e;
		} catch {}
	}();
})), At = /* @__PURE__ */ M(((e, t) => {
	var n = kt();
	function r(e, t, r) {
		t == "__proto__" && n ? n(e, t, {
			configurable: !0,
			enumerable: !0,
			value: r,
			writable: !0
		}) : e[t] = r;
	}
	t.exports = r;
})), jt = /* @__PURE__ */ M(((e, t) => {
	var n = At(), r = R(), i = Object.prototype.hasOwnProperty;
	function a(e, t, a) {
		var o = e[t];
		(!(i.call(e, t) && r(o, a)) || a === void 0 && !(t in e)) && n(e, t, a);
	}
	t.exports = a;
})), Mt = /* @__PURE__ */ M(((e, t) => {
	var n = jt(), r = At();
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
})), Nt = /* @__PURE__ */ M(((e, t) => {
	var n = Mt(), r = _t();
	function i(e, t) {
		return e && n(t, r(t), e);
	}
	t.exports = i;
})), Pt = /* @__PURE__ */ M(((e, t) => {
	function n(e) {
		var t = [];
		if (e != null) for (var n in Object(e)) t.push(n);
		return t;
	}
	t.exports = n;
})), Ft = /* @__PURE__ */ M(((e, t) => {
	var n = U(), r = ft(), i = Pt(), a = Object.prototype.hasOwnProperty;
	function o(e) {
		if (!n(e)) return i(e);
		var t = r(e), o = [];
		for (var s in e) s == "constructor" && (t || !a.call(e, s)) || o.push(s);
		return o;
	}
	t.exports = o;
})), It = /* @__PURE__ */ M(((e, t) => {
	var n = dt(), r = Ft(), i = gt();
	function a(e) {
		return i(e) ? n(e, !0) : r(e);
	}
	t.exports = a;
})), Lt = /* @__PURE__ */ M(((e, t) => {
	var n = Mt(), r = It();
	function i(e, t) {
		return e && n(t, r(t), e);
	}
	t.exports = i;
})), Rt = /* @__PURE__ */ M(((e, t) => {
	var n = V(), r = typeof e == "object" && e && !e.nodeType && e, i = r && typeof t == "object" && t && !t.nodeType && t, a = i && i.exports === r ? n.Buffer : void 0, o = a ? a.allocUnsafe : void 0;
	function s(e, t) {
		if (t) return e.slice();
		var n = e.length, r = o ? o(n) : new e.constructor(n);
		return e.copy(r), r;
	}
	t.exports = s;
})), zt = /* @__PURE__ */ M(((e, t) => {
	function n(e, t) {
		var n = -1, r = e.length;
		for (t ||= Array(r); ++n < r;) t[n] = e[n];
		return t;
	}
	t.exports = n;
})), Bt = /* @__PURE__ */ M(((e, t) => {
	var n = Mt(), r = $e();
	function i(e, t) {
		return n(e, r(e), t);
	}
	t.exports = i;
})), Vt = /* @__PURE__ */ M(((e, t) => {
	t.exports = pt()(Object.getPrototypeOf, Object);
})), Ht = /* @__PURE__ */ M(((e, t) => {
	var n = Ye(), r = Vt(), i = $e(), a = Qe();
	t.exports = Object.getOwnPropertySymbols ? function(e) {
		for (var t = []; e;) n(t, i(e)), e = r(e);
		return t;
	} : a;
})), Ut = /* @__PURE__ */ M(((e, t) => {
	var n = Mt(), r = Ht();
	function i(e, t) {
		return n(e, r(e), t);
	}
	t.exports = i;
})), Wt = /* @__PURE__ */ M(((e, t) => {
	var n = Xe(), r = Ht(), i = It();
	function a(e) {
		return n(e, i, r);
	}
	t.exports = a;
})), Gt = /* @__PURE__ */ M(((e, t) => {
	var n = Object.prototype.hasOwnProperty;
	function r(e) {
		var t = e.length, r = new e.constructor(t);
		return t && typeof e[0] == "string" && n.call(e, "index") && (r.index = e.index, r.input = e.input), r;
	}
	t.exports = r;
})), Kt = /* @__PURE__ */ M(((e, t) => {
	var n = Ge();
	function r(e) {
		var t = new e.constructor(e.byteLength);
		return new n(t).set(new n(e)), t;
	}
	t.exports = r;
})), qt = /* @__PURE__ */ M(((e, t) => {
	var n = Kt();
	function r(e, t) {
		var r = t ? n(e.buffer) : e.buffer;
		return new e.constructor(r, e.byteOffset, e.byteLength);
	}
	t.exports = r;
})), Jt = /* @__PURE__ */ M(((e, t) => {
	var n = /\w*$/;
	function r(e) {
		var t = new e.constructor(e.source, n.exec(e));
		return t.lastIndex = e.lastIndex, t;
	}
	t.exports = r;
})), Yt = /* @__PURE__ */ M(((e, t) => {
	var n = H(), r = n ? n.prototype : void 0, i = r ? r.valueOf : void 0;
	function a(e) {
		return i ? Object(i.call(e)) : {};
	}
	t.exports = a;
})), Xt = /* @__PURE__ */ M(((e, t) => {
	var n = Kt();
	function r(e, t) {
		var r = t ? n(e.buffer) : e.buffer;
		return new e.constructor(r, e.byteOffset, e.length);
	}
	t.exports = r;
})), Zt = /* @__PURE__ */ M(((e, t) => {
	var n = Kt(), r = qt(), i = Jt(), a = Yt(), o = Xt(), s = "[object Boolean]", c = "[object Date]", l = "[object Map]", u = "[object Number]", d = "[object RegExp]", f = "[object Set]", p = "[object String]", m = "[object Symbol]", h = "[object ArrayBuffer]", g = "[object DataView]", _ = "[object Float32Array]", v = "[object Float64Array]", y = "[object Int8Array]", b = "[object Int16Array]", x = "[object Int32Array]", S = "[object Uint8Array]", C = "[object Uint8ClampedArray]", w = "[object Uint16Array]", T = "[object Uint32Array]";
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
})), Qt = /* @__PURE__ */ M(((e, t) => {
	var n = U(), r = Object.create;
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
})), $t = /* @__PURE__ */ M(((e, t) => {
	var n = Qt(), r = Vt(), i = ft();
	function a(e) {
		return typeof e.constructor == "function" && !i(e) ? n(r(e)) : {};
	}
	t.exports = a;
})), en = /* @__PURE__ */ M(((e, t) => {
	var n = wt(), r = K(), i = "[object Map]";
	function a(e) {
		return r(e) && n(e) == i;
	}
	t.exports = a;
})), tn = /* @__PURE__ */ M(((e, t) => {
	var n = en(), r = ct(), i = lt(), a = i && i.isMap;
	t.exports = a ? r(a) : n;
})), nn = /* @__PURE__ */ M(((e, t) => {
	var n = wt(), r = K(), i = "[object Set]";
	function a(e) {
		return r(e) && n(e) == i;
	}
	t.exports = a;
})), rn = /* @__PURE__ */ M(((e, t) => {
	var n = nn(), r = ct(), i = lt(), a = i && i.isSet;
	t.exports = a ? r(a) : n;
})), an = /* @__PURE__ */ M(((e, t) => {
	var n = Re(), r = Ot(), i = jt(), a = Nt(), o = Lt(), s = Rt(), c = zt(), l = Bt(), u = Ut(), d = vt(), f = Wt(), p = wt(), m = Gt(), h = Zt(), g = $t(), _ = G(), v = it(), y = tn(), b = U(), x = rn(), S = _t(), C = It(), w = 1, T = 2, E = 4, D = "[object Arguments]", O = "[object Array]", k = "[object Boolean]", A = "[object Date]", j = "[object Error]", M = "[object Function]", ee = "[object GeneratorFunction]", N = "[object Map]", P = "[object Number]", F = "[object Object]", I = "[object RegExp]", te = "[object Set]", ne = "[object String]", L = "[object Symbol]", R = "[object WeakMap]", z = "[object ArrayBuffer]", re = "[object DataView]", ie = "[object Float32Array]", ae = "[object Float64Array]", oe = "[object Int8Array]", B = "[object Int16Array]", se = "[object Int32Array]", ce = "[object Uint8Array]", le = "[object Uint8ClampedArray]", ue = "[object Uint16Array]", de = "[object Uint32Array]", V = {};
	V[D] = V[O] = V[z] = V[re] = V[k] = V[A] = V[ie] = V[ae] = V[oe] = V[B] = V[se] = V[N] = V[P] = V[F] = V[I] = V[te] = V[ne] = V[L] = V[ce] = V[le] = V[ue] = V[de] = !0, V[j] = V[M] = V[R] = !1;
	function H(e, t, O, k, A, j) {
		var N, P = t & w, I = t & T, te = t & E;
		if (O && (N = A ? O(e, k, A, j) : O(e)), N !== void 0) return N;
		if (!b(e)) return e;
		var ne = _(e);
		if (ne) {
			if (N = m(e), !P) return c(e, N);
		} else {
			var L = p(e), R = L == M || L == ee;
			if (v(e)) return s(e, P);
			if (L == F || L == D || R && !A) {
				if (N = I || R ? {} : g(e), !P) return I ? u(e, o(N, e)) : l(e, a(N, e));
			} else {
				if (!V[L]) return A ? e : {};
				N = h(e, L, P);
			}
		}
		j ||= new n();
		var z = j.get(e);
		if (z) return z;
		j.set(e, N), x(e) ? e.forEach(function(n) {
			N.add(H(n, t, O, n, e, j));
		}) : y(e) && e.forEach(function(n, r) {
			N.set(r, H(n, t, O, r, e, j));
		});
		var re = ne ? void 0 : (te ? I ? f : d : I ? C : S)(e);
		return r(re || e, function(n, r) {
			re && (r = n, n = e[r]), i(N, r, H(n, t, O, r, e, j));
		}), N;
	}
	t.exports = H;
})), on = /* @__PURE__ */ M(((e, t) => {
	var n = an(), r = 1, i = 4;
	function a(e) {
		return n(e, r | i);
	}
	t.exports = a;
})), sn = /* @__PURE__ */ P(Dt(), 1), cn = /* @__PURE__ */ P(on(), 1), ln = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var un = Object.prototype.toString, dn = (e) => un.call(e) === "[object Object]", fn = () => {};
function pn(e, t) {
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
function mn(e, t = {}) {
	let n, r, i = fn, a = (e) => {
		clearTimeout(e), i(), i = fn;
	}, o;
	return (s) => {
		let c = v(e), l = v(t.maxWait);
		return n && a(n), c <= 0 || l !== void 0 && l <= 0 ? (r &&= (a(r), void 0), Promise.resolve(s())) : new Promise((e, u) => {
			i = t.rejectOnCancel ? u : e, o = s, l && !r && (r = setTimeout(() => {
				n && a(n), r = void 0, e(o());
			}, l)), n = setTimeout(() => {
				r && a(r), r = void 0, e(s());
			}, c);
		});
	};
}
function hn(e) {
	return Object.entries(e);
}
function gn(e) {
	return Array.isArray(e) ? e : [e];
}
function _n(e) {
	return o(e) ? f(new Proxy({}, {
		get(t, n, r) {
			return y(Reflect.get(e.value, n, r));
		},
		set(t, n, r) {
			return o(e.value[n]) && !o(r) ? e.value[n].value = r : e.value[n] = r, !0;
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
	})) : f(e);
}
function vn(t) {
	return _n(e(t));
}
function yn(e, ...t) {
	let n = t.flat(), r = n[0];
	return vn(() => Object.fromEntries(typeof r == "function" ? Object.entries(_(e)).filter(([e, t]) => !r(v(t), e)) : Object.entries(_(e)).filter((e) => !n.includes(e[0]))));
}
function bn(e, t = 200, n = {}) {
	return pn(mn(t, n), e);
}
function xn(e, t, n) {
	return b(e, t, {
		...n,
		immediate: !0
	});
}
//#endregion
//#region node_modules/@vueuse/core/dist/index.js
var Sn = ln ? window : void 0;
ln && window.document, ln && window.navigator, ln && window.location;
function Cn(e) {
	let t = v(e);
	return t?.$el ?? t;
}
function wn(...t) {
	let n = (e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)), r = e(() => {
		let e = gn(v(t[0])).filter((e) => e != null);
		return e.every((e) => typeof e != "string") ? e : void 0;
	});
	return xn(() => [
		r.value?.map((e) => Cn(e)) ?? [Sn].filter((e) => e != null),
		gn(v(r.value ? t[1] : t[0])),
		gn(y(r.value ? t[2] : t[1])),
		v(r.value ? t[3] : t[2])
	], ([e, t, r, i], a, o) => {
		if (!e?.length || !t?.length || !r?.length) return;
		let s = dn(i) ? { ...i } : i, c = e.flatMap((e) => t.flatMap((t) => r.map((r) => n(e, t, r, s))));
		o(() => {
			c.forEach((e) => e());
		});
	}, { flush: "post" });
}
var Tn = [
	"hash",
	"host",
	"hostname",
	"href",
	"pathname",
	"port",
	"protocol",
	"search"
];
function En(e = {}) {
	let { window: t = Sn } = e, n = Object.fromEntries(Tn.map((e) => [e, p()]));
	for (let [e, r] of hn(n)) b(r, (n) => {
		!t?.location || t.location[e] === n || (t.location[e] = n);
	});
	let r = (e) => {
		var r;
		let { state: i, length: a } = t?.history || {}, { origin: o } = t?.location || {};
		for (let e of Tn) n[e].value = t == null || (r = t.location) == null ? void 0 : r[e];
		return f({
			trigger: e,
			state: i,
			length: a,
			origin: o,
			...n
		});
	}, i = p(r("load"));
	if (t) {
		let e = { passive: !0 };
		wn(t, "popstate", () => i.value = r("popstate"), e), wn(t, "hashchange", () => i.value = r("hashchange"), e);
	}
	return i;
}
//#endregion
//#region resources/js/Utils/asyncRouter.ts
var Dn = {
	visit(e, t) {
		return new Promise((n, r) => {
			C.visit(e, {
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
function On(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function kn(e, t, n) {
	return e.replace(new RegExp(On(t), "g"), n);
}
function An(e, t, n) {
	Object.keys(t).forEach((r) => {
		let i = t[r];
		if (!i) return;
		let a = `${n}${kn(kn(kn(r, "./", ""), "/", ""), ".vue", "")}`;
		e.component(a, "default" in i ? i.default : i);
	});
}
//#endregion
//#region node_modules/decode-uri-component/index.js
var jn = /* @__PURE__ */ RegExp("(%[a-f0-9]{2})|([^%]+?)", "gi"), Mn = /* @__PURE__ */ RegExp("(%[a-f0-9]{2})+", "gi");
function Nn(e, t) {
	try {
		return [decodeURIComponent(e.join(""))];
	} catch {}
	if (e.length === 1) return e;
	t ||= 1;
	let n = e.slice(0, t), r = e.slice(t);
	return Array.prototype.concat.call([], Nn(n), Nn(r));
}
function Pn(e) {
	try {
		return decodeURIComponent(e);
	} catch {
		let t = e.match(jn) || [];
		for (let n = 1; n < t.length; n++) e = Nn(t, n).join(""), t = e.match(jn) || [];
		return e;
	}
}
function Fn(e) {
	let t = {
		"%FE%FF": "��",
		"%FF%FE": "��"
	}, n = Mn.exec(e);
	for (; n;) {
		try {
			t[n[0]] = decodeURIComponent(n[0]);
		} catch {
			let e = Pn(n[0]);
			e !== n[0] && (t[n[0]] = e);
		}
		n = Mn.exec(e);
	}
	t["%C2"] = "�";
	let r = Object.keys(t);
	for (let n of r) e = e.replace(new RegExp(n, "g"), t[n]);
	return e;
}
function In(e) {
	if (typeof e != "string") throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
	try {
		return decodeURIComponent(e);
	} catch {
		return Fn(e);
	}
}
//#endregion
//#region node_modules/filter-obj/index.js
function Ln(e, t) {
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
function Rn(e, t) {
	if (!(typeof e == "string" && typeof t == "string")) throw TypeError("Expected the arguments to be of type `string`");
	if (e === "" || t === "") return [];
	let n = e.indexOf(t);
	return n === -1 ? [] : [e.slice(0, n), e.slice(n + t.length)];
}
//#endregion
//#region node_modules/query-string/base.js
var zn = /* @__PURE__ */ ee({
	exclude: () => nr,
	extract: () => Xn,
	parse: () => Zn,
	parseUrl: () => $n,
	pick: () => tr,
	stringify: () => Qn,
	stringifyUrl: () => er
}), Bn = (e) => e == null, Vn = (e) => encodeURIComponent(e).replaceAll(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), Hn = Symbol("encodeFragmentIdentifier");
function Un(e) {
	switch (e.arrayFormat) {
		case "index": return (t) => (n, r) => {
			let i = n.length;
			return r === void 0 || e.skipNull && r === null || e.skipEmptyString && r === "" ? n : r === null ? [...n, [
				q(t, e),
				"[",
				i,
				"]"
			].join("")] : [...n, [
				q(t, e),
				"[",
				q(i, e),
				"]=",
				q(r, e)
			].join("")];
		};
		case "bracket": return (t) => (n, r) => r === void 0 || e.skipNull && r === null || e.skipEmptyString && r === "" ? n : r === null ? [...n, [q(t, e), "[]"].join("")] : [...n, [
			q(t, e),
			"[]=",
			q(r, e)
		].join("")];
		case "colon-list-separator": return (t) => (n, r) => r === void 0 || e.skipNull && r === null || e.skipEmptyString && r === "" ? n : r === null ? [...n, [q(t, e), ":list="].join("")] : [...n, [
			q(t, e),
			":list=",
			q(r, e)
		].join("")];
		case "comma":
		case "separator":
		case "bracket-separator": {
			let t = e.arrayFormat === "bracket-separator" ? "[]=" : "=";
			return (n) => (r, i) => i === void 0 || e.skipNull && i === null || e.skipEmptyString && i === "" ? r : (i = i === null ? "" : i, r.length === 0 ? [[
				q(n, e),
				t,
				q(i, e)
			].join("")] : [[r, q(i, e)].join(e.arrayFormatSeparator)]);
		}
		default: return (t) => (n, r) => r === void 0 || e.skipNull && r === null || e.skipEmptyString && r === "" ? n : r === null ? [...n, q(t, e)] : [...n, [
			q(t, e),
			"=",
			q(r, e)
		].join("")];
	}
}
function Wn(e) {
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
			r[e] = [...r[e], n];
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
			r[e] = [...r[e], n];
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
			r[t] = [...r[t], ...a];
		};
		default: return (e, t, n) => {
			if (n[e] === void 0) {
				n[e] = t;
				return;
			}
			n[e] = [...[n[e]].flat(), t];
		};
	}
}
function Gn(e) {
	if (typeof e != "string" || e.length !== 1) throw TypeError("arrayFormatSeparator must be single character string");
}
function q(e, t) {
	return t.encode ? t.strict ? Vn(e) : encodeURIComponent(e) : e;
}
function J(e, t) {
	return t.decode ? In(e) : e;
}
function Kn(e) {
	return Array.isArray(e) ? e.sort() : typeof e == "object" ? Kn(Object.keys(e)).sort((e, t) => Number(e) - Number(t)).map((t) => e[t]) : e;
}
function qn(e) {
	let t = e.indexOf("#");
	return t !== -1 && (e = e.slice(0, t)), e;
}
function Jn(e) {
	let t = "", n = e.indexOf("#");
	return n !== -1 && (t = e.slice(n)), t;
}
function Yn(e, t, n) {
	return n === "string" && typeof e == "string" ? e : typeof n == "function" && typeof e == "string" ? n(e) : n === "boolean" && e === null ? !0 : n === "boolean" && e !== null && (e.toLowerCase() === "true" || e.toLowerCase() === "false") ? e.toLowerCase() === "true" : n === "boolean" && e !== null && (e.toLowerCase() === "1" || e.toLowerCase() === "0") ? e.toLowerCase() === "1" : n === "string[]" && t.arrayFormat !== "none" && typeof e == "string" ? [e] : n === "number[]" && t.arrayFormat !== "none" && !Number.isNaN(Number(e)) && typeof e == "string" && e.trim() !== "" ? [Number(e)] : n === "number" && !Number.isNaN(Number(e)) && typeof e == "string" && e.trim() !== "" ? Number(e) : t.parseBooleans && e !== null && (e.toLowerCase() === "true" || e.toLowerCase() === "false") ? e.toLowerCase() === "true" : t.parseNumbers && !Number.isNaN(Number(e)) && typeof e == "string" && e.trim() !== "" ? Number(e) : e;
}
function Xn(e) {
	e = qn(e);
	let t = e.indexOf("?");
	return t === -1 ? "" : e.slice(t + 1);
}
function Zn(e, t) {
	t = {
		decode: !0,
		sort: !0,
		arrayFormat: "none",
		arrayFormatSeparator: ",",
		parseNumbers: !1,
		parseBooleans: !1,
		types: Object.create(null),
		...t
	}, Gn(t.arrayFormatSeparator);
	let n = Wn(t), r = Object.create(null);
	if (typeof e != "string" || (e = e.trim().replace(/^[?#&]/, ""), !e)) return r;
	for (let i of e.split("&")) {
		if (i === "") continue;
		let e = t.decode ? i.replaceAll("+", " ") : i, [a, o] = Rn(e, "=");
		a === void 0 && (a = e), o = o === void 0 ? null : [
			"comma",
			"separator",
			"bracket-separator"
		].includes(t.arrayFormat) ? o : J(o, t), n(J(a, t), o, r);
	}
	for (let [e, n] of Object.entries(r)) if (typeof n == "object" && n && t.types[e] !== "string") for (let [r, i] of Object.entries(n)) {
		let a = t.types[e], o = typeof a == "function" ? a : a ? a.replace("[]", "") : void 0;
		n[r] = Yn(i, t, o);
	}
	else typeof n == "object" && n && t.types[e] === "string" ? r[e] = Object.values(n).join(t.arrayFormatSeparator) : r[e] = Yn(n, t, t.types[e]);
	return t.sort === !1 ? r : (t.sort === !0 ? Object.keys(r).sort() : Object.keys(r).sort(t.sort)).reduce((e, t) => {
		let n = r[t];
		return e[t] = n && typeof n == "object" && !Array.isArray(n) ? Kn(n) : n, e;
	}, Object.create(null));
}
function Qn(e, t) {
	if (!e) return "";
	t = {
		encode: !0,
		strict: !0,
		arrayFormat: "none",
		arrayFormatSeparator: ",",
		...t
	}, Gn(t.arrayFormatSeparator);
	let n = (n) => t.skipNull && Bn(e[n]) || t.skipEmptyString && e[n] === "", r = Un(t), i = {};
	for (let [t, r] of Object.entries(e)) n(t) || (i[t] = r);
	let a = Object.keys(i);
	return t.sort !== !1 && a.sort(t.sort), a.map((n) => {
		let i = e[n];
		if (t.replacer && (i = t.replacer(n, i), i === void 0) || i === void 0) return "";
		if (i === null) return q(n, t);
		if (Array.isArray(i)) {
			if (i.length === 0 && t.arrayFormat === "bracket-separator") return q(n, t) + "[]";
			let e = i;
			return t.replacer && (e = i.map((e, r) => t.replacer(`${n}[${r}]`, e)).filter((e) => e !== void 0)), e.reduce(r(n), []).join("&");
		}
		return q(n, t) + "=" + q(i, t);
	}).filter((e) => e.length > 0).join("&");
}
function $n(e, t) {
	t = {
		decode: !0,
		...t
	};
	let [n, r] = Rn(e, "#");
	return n === void 0 && (n = e), {
		url: n?.split("?")?.[0] ?? "",
		query: Zn(Xn(e), t),
		...t && t.parseFragmentIdentifier && r ? { fragmentIdentifier: J(r, t) } : {}
	};
}
function er(e, t) {
	t = {
		encode: !0,
		strict: !0,
		[Hn]: !0,
		...t
	};
	let n = qn(e.url).split("?")[0] || "", r = Qn({
		...Zn(Xn(e.url), {
			sort: !1,
			...t
		}),
		...e.query
	}, t);
	r &&= `?${r}`;
	let i = Jn(e.url);
	if (typeof e.fragmentIdentifier == "string") {
		let r = new URL(n);
		r.hash = e.fragmentIdentifier, i = t[Hn] ? r.hash : `#${e.fragmentIdentifier}`;
	}
	return `${n}${r}${i}`;
}
function tr(e, t, n) {
	n = {
		parseFragmentIdentifier: !0,
		[Hn]: !1,
		...n
	};
	let { url: r, query: i, fragmentIdentifier: a } = $n(e, n);
	return er({
		url: r,
		query: Ln(i, t),
		fragmentIdentifier: a
	}, n);
}
function nr(e, t, n) {
	return tr(e, Array.isArray(t) ? (e) => !t.includes(e) : (e, n) => !t(e, n), n);
}
//#endregion
//#region node_modules/query-string/index.js
var rr = zn;
//#endregion
//#region resources/js/Utils/query.ts
function Y() {
	return rr.parse(location.search, {
		arrayFormat: "index",
		parseNumbers: !0
	});
}
function ir(e) {
	return rr.stringify(e, { arrayFormat: "index" });
}
function ar(e) {
	let t = Y();
	return e in t ? t[e] : null;
}
function or(e) {
	let [t = window.location.href] = window.location.href.split("?");
	return Object.keys(e).length > 0 ? `${t}?${ir(e)}` : t;
}
//#endregion
//#region resources/js/Composables/useFilter.ts
var sr = (e) => Array.isArray(e) && e.length === 0, cr = (e, t) => t === "" || t == null || sr(t) || t === !1 ? e === "" || e == null || sr(e) || e === !1 : (0, sn.default)(e, t);
function lr(e, t) {
	let n = typeof e == "object" ? (0, cn.default)(e) : (0, cn.default)(e()), r = () => {
		let e = Y();
		return Object.keys(n).reduce((t, r) => (cr(e[r], n[r]) || e[r] === void 0 ? t[r] = n[r] : t[r] = e[r], t), {});
	}, i = (e) => Object.keys(n).some((t) => !cr(e[t], n[t])), a = r(), o = f({
		...a,
		applied: i(a),
		appliedOnly(e) {
			let t = this.data();
			return e.some((e) => !cr(t[e], n[e]));
		},
		data() {
			return Object.keys(n).reduce((e, t) => (e[t] = this[t], e), {});
		},
		reset() {
			Object.keys(n).forEach((e) => {
				this[e] = n[e];
			}), this.applied = !1;
		}
	}), s = (e) => {
		let t = Y();
		return Object.keys(e).forEach((r) => {
			let i = e[r], a = n[r];
			cr(i, a) || !i ? delete t[r] : t[r] = i;
		}), delete t.page, delete t.cursor, or(t);
	}, c = null, l = bn((e) => {
		c &&= (c.cancel(), null), C.visit(e, {
			preserveState: !0,
			preserveScroll: !0,
			onCancelToken: (e) => {
				c = e;
			},
			onSuccess: () => {
				o.applied = i(o.data()), t?.onSuccess && t.onSuccess();
			}
		});
	}, 50);
	return b(o, () => {
		let e = window.location.href, t = s(o.data());
		e != t && (o.applied = i(o.data()), l(t));
	}), o;
}
//#endregion
//#region resources/js/Composables/useFlash.ts
function ur(e, t) {
	let n;
	l(() => {
		n = C.on("flash", (n) => {
			let r = n.detail.flash[e];
			r && t(r);
		});
	}), c(() => {
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
function Q(e) {
	return typeof e == "object" && !!e && "path" in e;
}
function dr(e) {
	return typeof e == "function";
}
function fr(t) {
	let n = w(), r = En();
	return e(() => {
		let e = v(t), i = r.value.href;
		return $(e, n.url, i ? new URL(i) : null);
	});
}
function $(e, t, n) {
	if (Array.isArray(e)) return e.some((e) => $(e, t, n));
	if (Q(e)) return e.path === t;
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
function pr(t) {
	let n = w(), r = En(), i = e(() => n.url), a = e(() => {
		let e = r.value.href;
		return e ? new URL(e) : null;
	}), o = (e) => {
		if (e.active) return $(e.active, i.value, a.value);
		let t = e.action;
		if (t) {
			if (typeof t == "string") return $({ url: t }, i.value, a.value);
			if (X(t) || Z(t) || Q(t)) return $(t, i.value, a.value);
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
	}, d = e(() => v(t));
	return e(() => d.value.map((e) => u(e)));
}
//#endregion
//#region resources/js/Composables/useToggle.ts
function mr(e = !1) {
	let t = p(e);
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
function hr(e, t) {
	b(e.active, (e) => {
		e && t();
	});
}
function gr(e, t) {
	b(e.active, (e) => {
		e || t();
	});
}
//#endregion
//#region resources/js/Components/Navigation/NavigationButton.vue
var _r = /* @__PURE__ */ r({
	__name: "NavigationButton",
	props: {
		item: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["click"],
	setup(n, { emit: r }) {
		let i = r, a = n;
		te(e(() => a.item));
		let o = yn(a, "item", "as"), c = e(() => {
			if (a.as !== void 0) return a.as;
			let e = a.item.action;
			if (e) {
				if (Z(e)) return e.external === !0 ? "a" : S;
				if (Q(e) || X(e)) return S;
			}
			return "button";
		}), l = e(() => {
			let e = a.item.action, t = {};
			return e && (Z(e) ? (t.href = e.url, e.external !== !0 && (t.preserveScroll = e.preserveScroll, t.preserveState = e.preserveState)) : Q(e) ? (t.href = e.path, t.preserveScroll = e.preserveScroll, t.preserveState = e.preserveState) : X(e) && (t.href = route(e.route, e.params), t.preserveScroll = e.preserveScroll, t.preserveState = e.preserveState)), {
				...o,
				...t
			};
		}), d = (e) => {
			let t = a.item.action;
			t && dr(t) ? t(e) : i("click", e);
		};
		return (e, r) => (u(), t(y(T), s({ as: c.value }, l.value, {
			onClick: d,
			"data-active": n.item.isActive || n.item.isChildActive ? "active" : void 0,
			"data-state": n.item.isActive ? "active" : "inactive",
			"data-child-state": n.item.isChildActive ? "active" : "inactive"
		}), {
			default: x(() => [m(e.$slots, "default")]),
			_: 3
		}, 16, [
			"as",
			"data-active",
			"data-state",
			"data-child-state"
		]));
	}
}), vr = /* @__PURE__ */ r({
	__name: "NavigationButtonIcon",
	setup(r) {
		let i = ne(), a = e(() => i.value?.icon);
		return (e, r) => a.value && "src" in a.value ? (u(), t(y(F), {
			key: 0,
			src: a.value.src
		}, null, 8, ["src"])) : a.value ? (u(), t(h(a.value), { key: 1 })) : n("", !0);
	}
});
//#endregion
export { F as Icon, _r as NavigationButton, vr as NavigationButtonIcon, Dn as asyncRouter, ir as formatQuery, ar as getValueFromQuery, $ as isActivated, dr as isEventAction, Z as isLinkAction, Q as isLinkPathAction, X as isRouteAction, hr as onActivated, gr as onDeactivated, Y as parseQuery, An as registerNamespacedComponents, or as urlWithQuery, fr as useActiveLink, lr as useFilter, ur as useFlash, pr as useNavigation, mr as useToggle };

//# sourceMappingURL=ui.js.map