var app = (function () {
	'use strict';
	function t() {}
	function e(t) {
		return t();
	}
	function n() {
		return Object.create(null);
	}
	function o(t) {
		t.forEach(e);
	}
	function s(t) {
		return 'function' == typeof t;
	}
	function a(t, e) {
		return t != t
			? e == e
			: t !== e || (t && 'object' == typeof t) || 'function' == typeof t;
	}
	function r(t, e) {
		t.appendChild(e);
	}
	function i(t, e, n) {
		t.insertBefore(e, n || null);
	}
	function c(t) {
		t.parentNode.removeChild(t);
	}
	function l(t) {
		return document.createElement(t);
	}
	function u() {
		return (t = ' '), document.createTextNode(t);
		var t;
	}
	function d(t, e, n, o) {
		return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o);
	}
	function p(t, e, n) {
		null == n
			? t.removeAttribute(e)
			: t.getAttribute(e) !== n && t.setAttribute(e, n);
	}
	let f;
	function v(t) {
		f = t;
	}
	const k = [],
		m = [],
		y = [],
		g = [],
		$ = Promise.resolve();
	let h = !1;
	function x(t) {
		y.push(t);
	}
	let b = !1;
	const _ = new Set();
	function w() {
		if (!b) {
			b = !0;
			do {
				for (let t = 0; t < k.length; t += 1) {
					const e = k[t];
					v(e), S(e.$$);
				}
				for (k.length = 0; m.length; ) m.pop()();
				for (let t = 0; t < y.length; t += 1) {
					const e = y[t];
					_.has(e) || (_.add(e), e());
				}
				y.length = 0;
			} while (k.length);
			for (; g.length; ) g.pop()();
			(h = !1), (b = !1), _.clear();
		}
	}
	function S(t) {
		if (null !== t.fragment) {
			t.update(), o(t.before_update);
			const e = t.dirty;
			(t.dirty = [-1]),
				t.fragment && t.fragment.p(t.ctx, e),
				t.after_update.forEach(x);
		}
	}
	const E = new Set();
	function A(t, e) {
		t && t.i && (E.delete(t), t.i(e));
	}
	function C(t, n, a) {
		const { fragment: r, on_mount: i, on_destroy: c, after_update: l } = t.$$;
		r && r.m(n, a),
			x(() => {
				const n = i.map(e).filter(s);
				c ? c.push(...n) : o(n), (t.$$.on_mount = []);
			}),
			l.forEach(x);
	}
	function N(t, e) {
		const n = t.$$;
		null !== n.fragment &&
			(o(n.on_destroy),
			n.fragment && n.fragment.d(e),
			(n.on_destroy = n.fragment = null),
			(n.ctx = []));
	}
	function j(t, e) {
		-1 === t.$$.dirty[0] &&
			(k.push(t), h || ((h = !0), $.then(w)), t.$$.dirty.fill(0)),
			(t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
	}
	function L(e, s, a, r, i, l, u = [-1]) {
		const d = f;
		v(e);
		const p = s.props || {},
			k = (e.$$ = {
				fragment: null,
				ctx: null,
				props: l,
				update: t,
				not_equal: i,
				bound: n(),
				on_mount: [],
				on_destroy: [],
				before_update: [],
				after_update: [],
				context: new Map(d ? d.$$.context : []),
				callbacks: n(),
				dirty: u,
			});
		let m = !1;
		if (
			((k.ctx = a
				? a(e, p, (t, n, ...o) => {
						const s = o.length ? o[0] : n;
						return (
							k.ctx &&
								i(k.ctx[t], (k.ctx[t] = s)) &&
								(k.bound[t] && k.bound[t](s), m && j(e, t)),
							n
						);
				  })
				: []),
			k.update(),
			(m = !0),
			o(k.before_update),
			(k.fragment = !!r && r(k.ctx)),
			s.target)
		) {
			if (s.hydrate) {
				const t = (function (t) {
					return Array.from(t.childNodes);
				})(s.target);
				k.fragment && k.fragment.l(t), t.forEach(c);
			} else k.fragment && k.fragment.c();
			s.intro && A(e.$$.fragment), C(e, s.target, s.anchor), w();
		}
		v(d);
	}
	class T {
		$destroy() {
			N(this, 1), (this.$destroy = t);
		}
		$on(t, e) {
			const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
			return (
				n.push(e),
				() => {
					const t = n.indexOf(e);
					-1 !== t && n.splice(t, 1);
				}
			);
		}
		$set() {}
	}
	function q(e) {
		let n, o;
		return {
			c() {
				(n = l('button')),
					(n.textContent = 'Reset ⤶'),
					p(n, 'class', 'button reset svelte-12ke20y');
			},
			m(t, s, a) {
				i(t, n, s), a && o(), (o = d(n, 'click', e[2]));
			},
			p: t,
			d(t) {
				t && c(n), o();
			},
		};
	}
	function z(e) {
		let n, o;
		return {
			c() {
				(n = l('button')),
					(n.textContent = 'Start ⟩'),
					p(n, 'class', 'button start svelte-12ke20y');
			},
			m(t, s, a) {
				i(t, n, s), a && o(), (o = d(n, 'click', e[1]));
			},
			p: t,
			d(t) {
				t && c(n), o();
			},
		};
	}
	function G(e) {
		let n, o, s, a, d;
		function f(t, e) {
			return t[0] ? q : z;
		}
		let v = f(e),
			k = v(e);
		return {
			c() {
				(n = l('section')),
					(o = l('div')),
					(s = l('div')),
					k.c(),
					(a = u()),
					(d = l('div')),
					(d.innerHTML =
						'<div class="star step-1 svelte-12ke20y">NEW</div> \n    <div class="title step-2 svelte-12ke20y">A Strong Title</div> \n    <div class="text step-3 svelte-12ke20y">Now available at a store or supermarket near you 👍</div> \n    <div class="slide svelte-12ke20y"></div> \n        <div class="sparkles spark1 svelte-12ke20y"></div> \n        <div class="sparkles spark2 svelte-12ke20y"></div> \n        <div class="sparkles spark3 svelte-12ke20y"></div> \n        <div class="sparkles spark4 svelte-12ke20y"></div> \n        <div class="sparkles spark5 svelte-12ke20y"></div> \n        <div class="sparkles spark6 svelte-12ke20y"></div> \n        <div class="sparkles spark7 svelte-12ke20y"></div> \n        <div class="sparkles spark8 svelte-12ke20y"></div>'),
					p(d, 'class', 'window svelte-12ke20y'),
					p(s, 'class', 'demoblock'),
					p(o, 'class', 'demo__container svelte-12ke20y'),
					p(o, 'id', 'simpleDemo4');
			},
			m(t, e) {
				i(t, n, e), r(n, o), r(o, s), k.m(s, null), r(s, a), r(s, d);
			},
			p(t, [e]) {
				v === (v = f(t)) && k
					? k.p(t, e)
					: (k.d(1), (k = v(t)), k && (k.c(), k.m(s, a)));
			},
			i: t,
			o: t,
			d(t) {
				t && c(n), k.d();
			},
		};
	}
	function I(t, e, n) {
		let { example4Started: o = !1 } = e;
		var s = gsap.utils.random(0, 100, !0),
			a = gsap.timeline({
				defaults: { duration: 0.5, opacity: 1, ease: 'elastic' },
			});
		return (
			(t.$set = (t) => {
				'example4Started' in t && n(0, (o = t.example4Started));
			}),
			[
				o,
				function (t) {
					a.paused(!1),
						a
							.to('.title', {
								scale: 1,
								opacity: 1,
								x: 10,
								duration: 1.5,
								ease: 'elastic',
							})
							.to('.star', { y: 0, ease: 'power4.in' })
							.to('.text', {
								y: 0,
								opacity: 0.3,
								duration: 1.5,
								ease: 'power4.in',
							})
							.to('.text', { opacity: 1, ease: 'ease.in' })
							.to('.star', {
								duration: 0.2,
								rotation: '-18',
								scale: '1.2',
								zIndex: 1,
								ease: 'power4.in',
							})
							.to('.slide', {
								duration: 0.8,
								opacity: 1,
								backgroundColor: '#8686e05d',
								ease: 'ease',
							})
							.to('.spark1', {
								duration: 0.2,
								opacity: 0,
								left: s() + '%',
								top: s() + '%',
							})
							.to('.spark2', {
								duration: 0.2,
								opacity: 0,
								left: s() + '%',
								top: s() + '%',
							})
							.to('.spark3', {
								duration: 0.2,
								opacity: 0,
								left: s() + '%',
								top: s() + '%',
							})
							.to('.spark4', {
								duration: 0.2,
								opacity: 0,
								left: s() + '%',
								top: s() + '%',
							})
							.to('.spark5', {
								duration: 0.2,
								opacity: 0,
								left: s() + '%',
								top: s() + '%',
							})
							.to('.spark6', {
								duration: 0.2,
								opacity: 0,
								left: s() + '%',
								top: s() + '%',
							})
							.to('.spark7', {
								duration: 0.2,
								opacity: 0,
								left: s() + '%',
								top: s() + '%',
							})
							.to('.spark8', {
								duration: 0.2,
								opacity: 0,
								left: s() + '%',
								top: s() + '%',
							})
							.to('.sparkles', {
								opacity: 1,
								scale: 1,
								repeat: -1,
								stagger: { amount: 1.8, grid: 'auto', from: 'random' },
								ease: 'back',
							})
							.to('.slide', { background: '#8686e05d', ease: 'ease' })
							.to('.title', { zIndex: 1, scale: 1.25, ease: 'ease.in' }),
						n(0, (o = !0));
				},
				function (t) {
					a.seek(0) && a.paused(!0), n(0, (o = !1));
				},
			]
		);
	}
	class M extends T {
		constructor(t) {
			super(), L(this, t, I, G, a, { example4Started: 0 });
		}
	}
	function O(e) {
		let n, o, s;
		const a = new M({});
		return {
			c() {
				var t;
				(n = l('div')),
					(o = l('main')),
					(t = a.$$.fragment) && t.c(),
					p(o, 'class', 'svelte-sajphf'),
					p(n, 'class', 'container svelte-sajphf');
			},
			m(t, e) {
				i(t, n, e), r(n, o), C(a, o, null), (s = !0);
			},
			p: t,
			i(t) {
				s || (A(a.$$.fragment, t), (s = !0));
			},
			o(t) {
				!(function (t, e, n, o) {
					if (t && t.o) {
						if (E.has(t)) return;
						E.add(t),
							(void 0).c.push(() => {
								E.delete(t), o && (n && t.d(1), o());
							}),
							t.o(e);
					}
				})(a.$$.fragment, t),
					(s = !1);
			},
			d(t) {
				t && c(n), N(a);
			},
		};
	}
	return new (class extends T {
		constructor(t) {
			super(), L(this, t, null, O, a, {});
		}
	})({
		target: document.querySelector('svelte4'),
		props: { title: "Learning Greensock's GSAP" },
	});
})();
//# sourceMappingURL=bundle.js.map
