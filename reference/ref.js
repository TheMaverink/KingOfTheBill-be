(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5581], {
        39697: function(e, t, n) {
            "use strict";
            let i;
            n.d(t, {
                _uA: function() {
                    return l._u
                },
                ZpI: function() {
                    return rz
                },
                SsU: function() {
                    return rR
                },
                gGi: function() {
                    return eO
                },
                WUB: function() {
                    return eg
                },
                dtM: function() {
                    return eR
                }
            });
            var r, o, s, a, c, u = n(89802),
                l = n(63742),
                m = n(76545),
                d = n(63438),
                p = "[big.js] ",
                f = p + "Invalid ",
                g = f + "decimal places",
                w = f + "rounding mode",
                S = p + "Division by zero",
                h = {},
                y = void 0,
                A = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;

            function b(e, t, n, i) {
                var r = e.c;
                if (n === y && (n = e.constructor.RM), 0 !== n && 1 !== n && 2 !== n && 3 !== n) throw Error(w);
                if (t < 1) i = 3 === n && (i || !!r[0]) || 0 === t && (1 === n && r[0] >= 5 || 2 === n && (r[0] > 5 || 5 === r[0] && (i || r[1] !== y))), r.length = 1, i ? (e.e = e.e - t + 1, r[0] = 1) : r[0] = e.e = 0;
                else if (t < r.length) {
                    if (i = 1 === n && r[t] >= 5 || 2 === n && (r[t] > 5 || 5 === r[t] && (i || r[t + 1] !== y || 1 & r[t - 1])) || 3 === n && (i || !!r[0]), r.length = t, i) {
                        for (; ++r[--t] > 9;)
                            if (r[t] = 0, 0 === t) {
                                ++e.e, r.unshift(1);
                                break
                            }
                    }
                    for (t = r.length; !r[--t];) r.pop()
                }
                return e
            }

            function k(e, t, n) {
                var i = e.e,
                    r = e.c.join(""),
                    o = r.length;
                if (t) r = r.charAt(0) + (o > 1 ? "." + r.slice(1) : "") + (i < 0 ? "e" : "e+") + i;
                else if (i < 0) {
                    for (; ++i;) r = "0" + r;
                    r = "0." + r
                } else if (i > 0) {
                    if (++i > o)
                        for (i -= o; i--;) r += "0";
                    else i < o && (r = r.slice(0, i) + "." + r.slice(i))
                } else o > 1 && (r = r.charAt(0) + "." + r.slice(1));
                return e.s < 0 && n ? "-" + r : r
            }
            h.abs = function() {
                var e = new this.constructor(this);
                return e.s = 1, e
            }, h.cmp = function(e) {
                var t, n = this.c,
                    i = (e = new this.constructor(e)).c,
                    r = this.s,
                    o = e.s,
                    s = this.e,
                    a = e.e;
                if (!n[0] || !i[0]) return n[0] ? r : i[0] ? -o : 0;
                if (r != o) return r;
                if (t = r < 0, s != a) return s > a ^ t ? 1 : -1;
                for (r = -1, o = (s = n.length) < (a = i.length) ? s : a; ++r < o;)
                    if (n[r] != i[r]) return n[r] > i[r] ^ t ? 1 : -1;
                return s == a ? 0 : s > a ^ t ? 1 : -1
            }, h.div = function(e) {
                var t = this.constructor,
                    n = this.c,
                    i = (e = new t(e)).c,
                    r = this.s == e.s ? 1 : -1,
                    o = t.DP;
                if (o !== ~~o || o < 0 || o > 1e6) throw Error(g);
                if (!i[0]) throw Error(S);
                if (!n[0]) return e.s = r, e.c = [e.e = 0], e;
                var s, a, c, u, l, m = i.slice(),
                    d = s = i.length,
                    p = n.length,
                    f = n.slice(0, s),
                    w = f.length,
                    h = e,
                    A = h.c = [],
                    k = 0,
                    T = o + (h.e = this.e - e.e) + 1;
                for (h.s = r, r = T < 0 ? 0 : T, m.unshift(0); w++ < s;) f.push(0);
                do {
                    for (c = 0; c < 10; c++) {
                        if (s != (w = f.length)) u = s > w ? 1 : -1;
                        else
                            for (l = -1, u = 0; ++l < s;)
                                if (i[l] != f[l]) {
                                    u = i[l] > f[l] ? 1 : -1;
                                    break
                                } if (u < 0) {
                            for (a = w == s ? i : m; w;) {
                                if (f[--w] < a[w]) {
                                    for (l = w; l && !f[--l];) f[l] = 9;
                                    --f[l], f[w] += 10
                                }
                                f[w] -= a[w]
                            }
                            for (; !f[0];) f.shift()
                        } else break
                    }
                    A[k++] = u ? c : ++c, f[0] && u ? f[w] = n[d] || 0 : f = [n[d]]
                } while ((d++ < p || f[0] !== y) && r--);
                return !A[0] && 1 != k && (A.shift(), h.e--, T--), k > T && b(h, T, t.RM, f[0] !== y), h
            }, h.eq = function(e) {
                return 0 === this.cmp(e)
            }, h.gt = function(e) {
                return this.cmp(e) > 0
            }, h.gte = function(e) {
                return this.cmp(e) > -1
            }, h.lt = function(e) {
                return 0 > this.cmp(e)
            }, h.lte = function(e) {
                return 1 > this.cmp(e)
            }, h.minus = h.sub = function(e) {
                var t, n, i, r, o = this.constructor,
                    s = this.s,
                    a = (e = new o(e)).s;
                if (s != a) return e.s = -a, this.plus(e);
                var c = this.c.slice(),
                    u = this.e,
                    l = e.c,
                    m = e.e;
                if (!c[0] || !l[0]) return l[0] ? e.s = -a : c[0] ? e = new o(this) : e.s = 1, e;
                if (s = u - m) {
                    for ((r = s < 0) ? (s = -s, i = c) : (m = u, i = l), i.reverse(), a = s; a--;) i.push(0);
                    i.reverse()
                } else
                    for (n = ((r = c.length < l.length) ? c : l).length, s = a = 0; a < n; a++)
                        if (c[a] != l[a]) {
                            r = c[a] < l[a];
                            break
                        } if (r && (i = c, c = l, l = i, e.s = -e.s), (a = (n = l.length) - (t = c.length)) > 0)
                    for (; a--;) c[t++] = 0;
                for (a = t; n > s;) {
                    if (c[--n] < l[n]) {
                        for (t = n; t && !c[--t];) c[t] = 9;
                        --c[t], c[n] += 10
                    }
                    c[n] -= l[n]
                }
                for (; 0 === c[--a];) c.pop();
                for (; 0 === c[0];) c.shift(), --m;
                return c[0] || (e.s = 1, c = [m = 0]), e.c = c, e.e = m, e
            }, h.mod = function(e) {
                var t, n = this,
                    i = n.constructor,
                    r = n.s,
                    o = (e = new i(e)).s;
                if (!e.c[0]) throw Error(S);
                return (n.s = e.s = 1, t = 1 == e.cmp(n), n.s = r, e.s = o, t) ? new i(n) : (r = i.DP, o = i.RM, i.DP = i.RM = 0, n = n.div(e), i.DP = r, i.RM = o, this.minus(n.times(e)))
            }, h.neg = function() {
                var e = new this.constructor(this);
                return e.s = -e.s, e
            }, h.plus = h.add = function(e) {
                var t, n, i, r = this.constructor;
                if (e = new r(e), this.s != e.s) return e.s = -e.s, this.minus(e);
                var o = this.e,
                    s = this.c,
                    a = e.e,
                    c = e.c;
                if (!s[0] || !c[0]) return c[0] || (s[0] ? e = new r(this) : e.s = this.s), e;
                if (s = s.slice(), t = o - a) {
                    for (t > 0 ? (a = o, i = c) : (t = -t, i = s), i.reverse(); t--;) i.push(0);
                    i.reverse()
                }
                for (s.length - c.length < 0 && (i = c, c = s, s = i), t = c.length, n = 0; t; s[t] %= 10) n = (s[--t] = s[t] + c[t] + n) / 10 | 0;
                for (n && (s.unshift(n), ++a), t = s.length; 0 === s[--t];) s.pop();
                return e.c = s, e.e = a, e
            }, h.pow = function(e) {
                var t = this,
                    n = new t.constructor("1"),
                    i = n,
                    r = e < 0;
                if (e !== ~~e || e < -1e6 || e > 1e6) throw Error(f + "exponent");
                for (r && (e = -e); 1 & e && (i = i.times(t)), e >>= 1;) t = t.times(t);
                return r ? n.div(i) : i
            }, h.prec = function(e, t) {
                if (e !== ~~e || e < 1 || e > 1e6) throw Error(f + "precision");
                return b(new this.constructor(this), e, t)
            }, h.round = function(e, t) {
                if (e === y) e = 0;
                else if (e !== ~~e || e < -1e6 || e > 1e6) throw Error(g);
                return b(new this.constructor(this), e + this.e + 1, t)
            }, h.sqrt = function() {
                var e, t, n, i = this.constructor,
                    r = this.s,
                    o = this.e,
                    s = new i("0.5");
                if (!this.c[0]) return new i(this);
                if (r < 0) throw Error(p + "No square root");
                0 === (r = Math.sqrt(this + "")) || r === 1 / 0 ? ((t = this.c.join("")).length + o & 1 || (t += "0"), o = ((o + 1) / 2 | 0) - (o < 0 || 1 & o), e = new i(((r = Math.sqrt(t)) == 1 / 0 ? "5e" : (r = r.toExponential()).slice(0, r.indexOf("e") + 1)) + o)) : e = new i(r + ""), o = e.e + (i.DP += 4);
                do n = e, e = s.times(n.plus(this.div(n))); while (n.c.slice(0, o).join("") !== e.c.slice(0, o).join(""));
                return b(e, (i.DP -= 4) + e.e + 1, i.RM)
            }, h.times = h.mul = function(e) {
                var t, n = this.constructor,
                    i = this.c,
                    r = (e = new n(e)).c,
                    o = i.length,
                    s = r.length,
                    a = this.e,
                    c = e.e;
                if (e.s = this.s == e.s ? 1 : -1, !i[0] || !r[0]) return e.c = [e.e = 0], e;
                for (e.e = a + c, o < s && (t = i, i = r, r = t, c = o, o = s, s = c), t = Array(c = o + s); c--;) t[c] = 0;
                for (a = s; a--;) {
                    for (s = 0, c = o + a; c > a;) s = t[c] + r[a] * i[c - a - 1] + s, t[c--] = s % 10, s = s / 10 | 0;
                    t[c] = s
                }
                for (s ? ++e.e : t.shift(), a = t.length; !t[--a];) t.pop();
                return e.c = t, e
            }, h.toExponential = function(e, t) {
                var n = this,
                    i = n.c[0];
                if (e !== y) {
                    if (e !== ~~e || e < 0 || e > 1e6) throw Error(g);
                    for (n = b(new n.constructor(n), ++e, t); n.c.length < e;) n.c.push(0)
                }
                return k(n, !0, !!i)
            }, h.toFixed = function(e, t) {
                var n = this,
                    i = n.c[0];
                if (e !== y) {
                    if (e !== ~~e || e < 0 || e > 1e6) throw Error(g);
                    for (n = b(new n.constructor(n), e + n.e + 1, t), e = e + n.e + 1; n.c.length < e;) n.c.push(0)
                }
                return k(n, !1, !!i)
            }, h[Symbol.for("nodejs.util.inspect.custom")] = h.toJSON = h.toString = function() {
                var e = this.constructor;
                return k(this, this.e <= e.NE || this.e >= e.PE, !!this.c[0])
            }, h.toNumber = function() {
                var e = Number(k(this, !0, !0));
                if (!0 === this.constructor.strict && !this.eq(e.toString())) throw Error(p + "Imprecise conversion");
                return e
            }, h.toPrecision = function(e, t) {
                var n = this,
                    i = n.constructor,
                    r = n.c[0];
                if (e !== y) {
                    if (e !== ~~e || e < 1 || e > 1e6) throw Error(f + "precision");
                    for (n = b(new i(n), e, t); n.c.length < e;) n.c.push(0)
                }
                return k(n, e <= n.e || n.e <= i.NE || n.e >= i.PE, !!r)
            }, h.valueOf = function() {
                var e = this.constructor;
                if (!0 === e.strict) throw Error(p + "valueOf disallowed");
                return k(this, this.e <= e.NE || this.e >= e.PE, !0)
            };
            var T = function e() {
                    function t(n) {
                        if (!(this instanceof t)) return n === y ? e() : new t(n);
                        if (n instanceof t) this.s = n.s, this.e = n.e, this.c = n.c.slice();
                        else {
                            if ("string" != typeof n) {
                                if (!0 === t.strict && "bigint" != typeof n) throw TypeError(f + "value");
                                n = 0 === n && 1 / n < 0 ? "-0" : String(n)
                            }! function(e, t) {
                                var n, i, r;
                                if (!A.test(t)) throw Error(f + "number");
                                for (e.s = "-" == t.charAt(0) ? (t = t.slice(1), -1) : 1, (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (i = t.search(/e/i)) > 0 ? (n < 0 && (n = i), n += +t.slice(i + 1), t = t.substring(0, i)) : n < 0 && (n = t.length), r = t.length, i = 0; i < r && "0" == t.charAt(i);) ++i;
                                if (i == r) e.c = [e.e = 0];
                                else {
                                    for (; r > 0 && "0" == t.charAt(--r););
                                    for (e.e = n - i - 1, e.c = [], n = 0; i <= r;) e.c[n++] = +t.charAt(i++)
                                }
                            }(this, n)
                        }
                        this.constructor = t
                    }
                    return t.prototype = h, t.DP = 20, t.RM = 1, t.NE = -7, t.PE = 21, t.strict = !1, t.roundDown = 0, t.roundHalfUp = 1, t.roundHalfEven = 2, t.roundUp = 3, t
                }(),
                I = n(56662),
                P = n.n(I);
            let v = "1.1.0-beta.6",
                C = !1,
                L = !1,
                D = {
                    debug: 1,
                    default: 2,
                    info: 2,
                    warning: 3,
                    error: 4,
                    off: 5
                },
                R = {},
                E = function() {
                    try {
                        let e = [];
                        if (["NFD", "NFC", "NFKD", "NFKC"].forEach(t => {
                                try {
                                    if ("test" !== "test".normalize(t)) throw Error("bad normalize")
                                } catch (n) {
                                    e.push(t)
                                }
                            }), e.length) throw Error("missing " + e.join(", "));
                        if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw Error("broken implementation")
                    } catch (e) {
                        if (e instanceof Error) return e.message
                    }
                    return ""
                }();
            (t5 = ni || (ni = {})).DEBUG = "DEBUG", t5.INFO = "INFO", t5.WARNING = "WARNING", t5.ERROR = "ERROR", t5.OFF = "OFF", (t8 = nr || (nr = {})).UNKNOWN_ERROR = "UNKNOWN_ERROR", t8.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", t8.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", t8.NETWORK_ERROR = "NETWORK_ERROR", t8.RPC_ERROR = "RPC_ERROR", t8.TIMEOUT = "TIMEOUT", t8.BUFFER_OVERRUN = "BUFFER_OVERRUN", t8.NUMERIC_FAULT = "NUMERIC_FAULT", t8.MISSING_NEW = "MISSING_NEW", t8.INVALID_ARGUMENT = "INVALID_ARGUMENT", t8.MISSING_ARGUMENT = "MISSING_ARGUMENT", t8.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", t8.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS";
            let O = "0123456789abcdef";
            class U {
                constructor(e) {
                    this.version = v, this.moduleName = e
                }
                _log(e, t) {
                    let n = e.toLowerCase();
                    null == D[n] && this.throwArgumentError("invalid log level name", "logLevel", e), (R[this.moduleName] || D.default) > D[n] || console.log(...t)
                }
                debug(...e) {
                    this._log(U.levels.DEBUG, ["[DEBUG]", ...e])
                }
                info(...e) {
                    this._log(U.levels.INFO, ["[INFO]", ...e])
                }
                warn(...e) {
                    this._log(U.levels.WARNING, ["[WARN]", ...e])
                }
                makeError(e, t, n) {
                    if (L) return this.makeError("censored error", t, {});
                    t || (t = U.errors.UNKNOWN_ERROR), n || (n = {});
                    let i = [];
                    Object.entries(n).forEach(([e, t]) => {
                        i.push(`${e}=${function e(t,n=!1){let i=t;try{if(t instanceof Uint8Array){let e="";for(let n=0;n<t.length;n++)e+=O[t[n]>>4]+O[15&t[n]];i=`Uint8Array(0x${e})`}else if(t instanceof d.PublicKey)i=`
                            PublicKey($ {
                                t.toBase58()
                            })
                            `;else if(t instanceof Object&&!n){let n={};Object.entries(t).forEach(([t,i])=>{n[t]=e(i,!0)}),i=JSON.stringify(n)}else n||(i=JSON.stringify(t))}catch(e){i=JSON.stringify(t.toString())}return i}(t)})`)
                    }), i.push(`code=${t}`), i.push(`module=${this.moduleName}`), i.push(`version=${this.version}`);
                    let r = e;
                    i.length && (e += " (" + i.join(", ") + ")");
                    let o = Error(e);
                    return o.reason = r, o.code = t, Object.entries(n).forEach(([e, t]) => {
                        o[e] = t
                    }), o
                }
                throwError(e, t, n) {
                    throw this.makeError(e, t, n)
                }
                throwArgumentError(e, t, n) {
                    return this.throwError(e, U.errors.INVALID_ARGUMENT, {
                        argument: t,
                        value: n
                    })
                }
                assert(e, t, n, i) {
                    e || this.throwError(t, n, i)
                }
                assertArgument(e, t, n, i) {
                    e || this.throwArgumentError(t, n, i)
                }
                checkNormalize(e) {
                    null == e && (e = "platform missing String.prototype.normalize"), E && this.throwError("platform missing String.prototype.normalize", U.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: E
                    })
                }
                checkSafeUint53(e, t) {
                    "number" == typeof e && (null == t && (t = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(t, U.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: e
                    }), e % 1 && this.throwError(t, U.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: e
                    }))
                }
                checkArgumentCount(e, t, n) {
                    n = n ? ": " + n : "", e < t && this.throwError("missing argument" + n, U.errors.MISSING_ARGUMENT, {
                        count: e,
                        expectedCount: t
                    }), e > t && this.throwError("too many arguments" + n, U.errors.UNEXPECTED_ARGUMENT, {
                        count: e,
                        expectedCount: t
                    })
                }
                checkNew(e, t) {
                    (e === Object || null == e) && this.throwError("missing new", U.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                checkAbstract(e, t) {
                    e === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", U.errors.UNSUPPORTED_OPERATION, {
                        name: e.name,
                        operation: "new"
                    }) : (e === Object || null == e) && this.throwError("missing new", U.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                static globalLogger() {
                    return i || (i = new U(v)), i
                }
                static setCensorship(e, t) {
                    if (!e && t && this.globalLogger().throwError("cannot permanently disable censorship", U.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), C) {
                        if (!e) return;
                        this.globalLogger().throwError("error censorship permanent", U.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    L = !!e, C = !!t
                }
                static setLogLevel(e, t) {
                    let n = D[t.toLowerCase()];
                    if (null == n) {
                        U.globalLogger().warn("invalid log level - " + t);
                        return
                    }
                    R[e] = n
                }
                static from(e) {
                    return new U(e)
                }
            }
            U.errors = nr, U.levels = ni;
            let q = U.from("common/pubkey"),
                V = d.SystemProgram.programId,
                B = new d.PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"),
                _ = new d.PublicKey("SysvarRent111111111111111111111111111111111"),
                x = new d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),
                N = new d.PublicKey("Sysvar1nstructions1111111111111111111111111");

            function M(e) {
                if (e instanceof d.PublicKey) return e;
                if ("string" == typeof e) try {
                    return new d.PublicKey(e)
                } catch {}
                return q.throwArgumentError("invalid public key", "publicKey", e)
            }

            function W(e, t) {
                let [n, i] = d.PublicKey.findProgramAddressSync(e, t);
                return {
                    publicKey: n,
                    nonce: i
                }
            }

            function F(e, t) {
                return {
                    pubkey: e,
                    isWritable: !0,
                    isSigner: t
                }
            }

            function K(e, t) {
                return {
                    pubkey: e,
                    isWritable: !1,
                    isSigner: t
                }
            }

            function Y(e, t = 1, n = []) {
                let i = [...e];
                if (t <= 0) return n;
                for (; i.length;) n.push(i.splice(0, t));
                return n
            }
            var H = n(67133).Buffer;
            let X = U.from("common/web3");
            async function G(e, t, n) {
                let {
                    batchRequest: i,
                    commitment: r
                } = {
                    batchRequest: !1,
                    ...n
                }, o = Y(t, 100), s = Array(o.length).fill([]);
                if (i) {
                    let t = Y(o.map(t => ({
                        methodName: "getMultipleAccounts",
                        args: e._buildArgs([t.map(e => e.toBase58())], r, "base64")
                    })), 10);
                    s = (await (await Promise.all(t.map(async t => await e._rpcBatchRequest(t)))).flat()).map(e => e.error ? X.throwError("failed to get info for multiple accounts", U.errors.RPC_ERROR, {
                        message: e.error.message
                    }) : e.result.value.map(e => {
                        if (!e) return null; {
                            let {
                                data: t,
                                executable: n,
                                lamports: i,
                                owner: r,
                                rentEpoch: o
                            } = e;
                            return 2 !== t.length && "base64" !== t[1] ? X.throwError("info must be base64 encoded", U.errors.RPC_ERROR) : {
                                data: H.from(t[0], "base64"),
                                executable: n,
                                lamports: i,
                                owner: new d.PublicKey(r),
                                rentEpoch: o
                            }
                        }
                    }))
                } else try {
                    s = await Promise.all(o.map(t => e.getMultipleAccountsInfo(t, r)))
                } catch (e) {
                    if (e instanceof Error) return X.throwError("failed to get info for multiple accounts", U.errors.RPC_ERROR, {
                        message: e.message
                    })
                }
                return s.flat()
            }
            async function z(e, t, n) {
                let i = await G(e, t.map(e => e.pubkey), n);
                return t.map((e, t) => ({ ...e,
                    accountInfo: i[t]
                }))
            }

            function Q(e, t) {
                if (e.length < 1) return X.throwArgumentError("no instructions provided", "instructions", e);
                if (t.length < 1) return X.throwArgumentError("no signers provided", "signers", t);
                let n = new d.Transaction({
                    recentBlockhash: "11111111111111111111111111111111",
                    feePayer: t[0]
                });
                n.add(...e);
                try {
                    return H.from(n.serialize({
                        verifySignatures: !1
                    })).toString("base64").length < et
                } catch (e) {
                    return !1
                }
            }
            async function j(e, t, n, i = !0) {
                let r = new d.PublicKey("RaydiumSimuLateTransaction11111111111111111"),
                    o = [],
                    s = new d.Transaction;
                for (let e of (s.feePayer = r, t)) Q([...s.instructions, e], [r]) || (o.push(s), (s = new d.Transaction).feePayer = r), s.add(e);
                s.instructions.length > 0 && o.push(s);
                let a = [];
                try {
                    if ((a = await J(e, o, i)).find(e => null !== e.err)) throw Error("rpc simulateTransaction error")
                } catch (e) {
                    if (e instanceof Error) return X.throwError("failed to simulate for instructions", U.errors.RPC_ERROR, {
                        message: e.message
                    })
                }
                let c = [];
                for (let e of a)
                    if (X.debug("simulate result:", e), e.logs) {
                        let t = e.logs.filter(e => e && e.includes(n));
                        X.debug("filteredLog:", c), X.assertArgument(0 !== t.length, "simulate log not match keyword", "keyword", n), c.push(...t)
                    }
                return c
            }

            function Z(e, t) {
                let n = RegExp(`"${t}":(\\d+)`, "g").exec(e);
                return n && 2 === n.length ? n[1] : X.throwArgumentError("simulate log fail to match key", "key", t)
            }
            async function J(e, t, n) {
                let i = [];
                if (n) {
                    let n = await e.getLatestBlockhash(),
                        r = [];
                    for (let e of t) {
                        e.recentBlockhash = n.blockhash, e.lastValidBlockHeight = n.lastValidBlockHeight;
                        let t = e._compile().serialize(),
                            i = e._serialize(t).toString("base64");
                        r.push(i)
                    }
                    let o = r.map(t => ({
                            methodName: "simulateTransaction",
                            args: e._buildArgs([t], void 0, "base64")
                        })),
                        s = [];
                    for (let e = 0; e < Math.ceil(o.length / 20); e++) s.push(o.slice(20 * e, (e + 1) * 20));
                    i = await (await Promise.all(s.map(async t => (await e._rpcBatchRequest(t)).map(e => e.result.value)))).flat()
                } else try {
                    i = await Promise.all(t.map(async t => await (await e.simulateTransaction(t)).value))
                } catch (e) {
                    if (e instanceof Error) return X.throwError("failed to get info for multiple accounts", U.errors.RPC_ERROR, {
                        message: e.message
                    })
                }
                return i
            }
            async function $({
                connection: e,
                makeTxVersion: t,
                innerTransaction: n,
                lookupTableCache: i,
                computeBudgetConfig: r,
                payer: o
            }) {
                let s = i ? ? {},
                    a = [...new Set(n.map(e => (e.lookupTableAddress ? ? []).map(e => e.toString())).flat())],
                    c = [];
                for (let e of a) void 0 === s[e] && c.push(new d.PublicKey(e));
                for (let [t, n] of Object.entries(await en({
                        connection: e,
                        address: c
                    }))) s[t] = n;
                let u = r ? function(e) {
                        let t = [],
                            n = [];
                        return e.microLamports && (t.push(d.ComputeBudgetProgram.setComputeUnitPrice({
                            microLamports: e.microLamports
                        })), n.push(nc.setComputeUnitPrice)), e.units && (t.push(d.ComputeBudgetProgram.setComputeUnitLimit({
                            units: e.units
                        })), n.push(nc.setComputeUnitLimit)), {
                            address: {},
                            innerTransaction: {
                                instructions: t,
                                signers: [],
                                instructionTypes: n
                            }
                        }
                    }(r).innerTransaction : void 0,
                    l = [],
                    m = [];
                for (let e of n) {
                    if (0 === e.instructions.length) continue;
                    let n = [...m, e],
                        i = u ? [u, ...n] : n;
                    if (m.length < 12 && (ee({
                            makeTxVersion: t,
                            innerIns: i,
                            payer: o,
                            lookupTableAddressAccount: s
                        }) || ee({
                            makeTxVersion: t,
                            innerIns: n,
                            payer: o,
                            lookupTableAddressAccount: s
                        }))) m.push(e);
                    else {
                        let n;
                        if (0 === m.length) throw Error(" item ins too big ");
                        if (t === na.V0)
                            for (let e of (n = {}, [...new Set(m.map(e => e.lookupTableAddress ? ? []).flat().map(e => e.toString()))])) void 0 !== s[e] && (n[e] = s[e]);
                        if (ee({
                                makeTxVersion: t,
                                innerIns: u ? [u, ...m] : m,
                                payer: o,
                                lookupTableAddressAccount: s
                            })) {
                            let e = u ? [u, ...m] : m;
                            l.push({
                                instructionTypes: e.map(e => e.instructionTypes).flat(),
                                instructions: e.map(e => e.instructions).flat(),
                                signers: m.map(e => e.signers).flat(),
                                lookupTableAddress: n
                            })
                        } else l.push({
                            instructionTypes: m.map(e => e.instructionTypes).flat(),
                            instructions: m.map(e => e.instructions).flat(),
                            signers: m.map(e => e.signers).flat(),
                            lookupTableAddress: n
                        });
                        m = [e]
                    }
                }
                if (m.length > 0) {
                    let e;
                    if (t === na.V0)
                        for (let t of (e = {}, [...new Set(m.map(e => e.lookupTableAddress ? ? []).flat().map(e => e.toString()))])) void 0 !== s[t] && (e[t] = s[t]);
                    if (ee({
                            makeTxVersion: t,
                            innerIns: u ? [u, ...m] : m,
                            payer: o,
                            lookupTableAddressAccount: s
                        })) {
                        let t = u ? [u, ...m] : m;
                        l.push({
                            instructionTypes: t.map(e => e.instructionTypes).flat(),
                            instructions: t.map(e => e.instructions).flat(),
                            signers: m.map(e => e.signers).flat(),
                            lookupTableAddress: e
                        })
                    } else l.push({
                        instructionTypes: m.map(e => e.instructionTypes).flat(),
                        instructions: m.map(e => e.instructions).flat(),
                        signers: m.map(e => e.signers).flat(),
                        lookupTableAddress: e
                    })
                }
                return l
            }

            function ee({
                makeTxVersion: e,
                innerIns: t,
                payer: n,
                lookupTableAddressAccount: i
            }) {
                let r = t.map(e => e.instructions).flat(),
                    o = [...new Set(t.map(e => e.signers).flat().map(e => e.publicKey.toString()))].map(e => new d.PublicKey(e)),
                    s = t.map(e => e.lookupTableAddress ? ? []).flat().map(e => e.toString()),
                    a = {},
                    c = i ? ? {};
                for (let e of s) void 0 !== c[e] && (a[e] = c[e]);
                return e === na.V0 ? function({
                    instructions: e,
                    payer: t,
                    lookupTableAddressAccount: n
                }) {
                    let i = new d.TransactionMessage({
                        payerKey: t,
                        recentBlockhash: d.Keypair.generate().publicKey.toString(),
                        instructions: e
                    }).compileToV0Message(Object.values(n ? ? {}));
                    try {
                        return H.from(i.serialize()).toString("base64").length < et
                    } catch (e) {
                        return !1
                    }
                }({
                    instructions: r,
                    payer: n,
                    lookupTableAddressAccount: a
                }) : function({
                    instructions: e,
                    payer: t,
                    signers: n
                }) {
                    return Q(e, [t, ...n])
                }({
                    instructions: r,
                    payer: n,
                    signers: o
                })
            }
            let et = 1644;
            async function en({
                connection: e,
                address: t
            }) {
                let n = await G(e, [...new Set(t.map(e => e.toString()))].map(e => new d.PublicKey(e))),
                    i = {};
                for (let e = 0; e < t.length; e++) {
                    let r = n[e],
                        o = t[e];
                    r && (i[o.toString()] = new d.AddressLookupTableAccount({
                        key: o,
                        state: d.AddressLookupTableAccount.deserialize(r.data)
                    }))
                }
                return i
            }(t7 = no || (no = {}))[t7.ROUND_DOWN = 0] = "ROUND_DOWN", t7[t7.ROUND_HALF_UP = 1] = "ROUND_HALF_UP", t7[t7.ROUND_UP = 2] = "ROUND_UP";
            let ei = new(P())(0),
                er = new(P())(1);
            new(P())(2), new(P())(3), new(P())(5);
            let eo = new(P())(10),
                es = new(P())(100);
            new(P())(1e3), new(P())(1e4);
            let ea = U.from("entity/bignumber");

            function ec(e) {
                return e instanceof P() ? e : "string" == typeof e ? e.match(/^-?[0-9]+$/) ? new(P())(e) : ea.throwArgumentError("invalid BigNumberish string", "value", e) : "number" == typeof e ? e % 1 ? ea.throwArgumentError("BigNumberish number underflow", "value", e) : e >= 9007199254740991 || e <= -9007199254740991 ? ea.throwArgumentError("BigNumberish number overflow", "value", e) : new(P())(String(e)) : "bigint" == typeof e ? new(P())(e.toString()) : ea.throwArgumentError("invalid BigNumberish value", "value", e)
            }

            function eu(e, t) {
                let n = e.divmod(t);
                return n.mod.isZero() ? n.div : n.div.isNeg() ? n.div.isubn(1) : n.div.iaddn(1)
            }
            let el = {
                    symbol: "SOL",
                    name: "Solana",
                    decimals: 9
                },
                em = {
                    symbol: "WSOL",
                    name: "Wrapped SOL",
                    mint: "So11111111111111111111111111111111111111112",
                    decimals: 9,
                    extensions: {
                        coingeckoId: "solana"
                    }
                };
            ({ ...em
            });
            let ed = {
                    WSOL: { ...em
                    },
                    BTC: {
                        symbol: "BTC",
                        name: "Bitcoin",
                        mint: "9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "bitcoin"
                        }
                    },
                    ETH: {
                        symbol: "ETH",
                        name: "Ethereum",
                        mint: "2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "ethereum"
                        }
                    },
                    USDT: {
                        symbol: "USDT",
                        name: "Tether",
                        mint: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "tether"
                        }
                    },
                    WUSDT: {
                        symbol: "WUSDT",
                        name: "Wrapped USDT",
                        mint: "BQcdHdAQW1hczDbBi9hiegXAR7A98Q9jx3X3iBBBDiq4",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "tether"
                        }
                    },
                    USDC: {
                        symbol: "USDC",
                        name: "USD Coin",
                        mint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "usd-coin"
                        }
                    },
                    WUSDC: {
                        symbol: "WUSDC",
                        name: "Wrapped USDC",
                        mint: "BXXkv6z8ykpG1yuvUDPgh732wzVHB69RnB9YgSYh3itW",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "usd-coin"
                        }
                    },
                    YFI: {
                        symbol: "YFI",
                        name: "YFI",
                        mint: "3JSf5tPeuscJGtaCp5giEiDhv51gQ4v3zWg8DGgyLfAB",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "yearn-finance"
                        }
                    },
                    LINK: {
                        symbol: "LINK",
                        name: "Chainlink",
                        mint: "CWE8jPTUYhdCTZYWPTe1o5DFqfdjzWKc9WKz6rSjQUdG",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "chainlink"
                        }
                    },
                    XRP: {
                        symbol: "XRP",
                        name: "XRP",
                        mint: "Ga2AXHpfAF6mv2ekZwcsJFqu7wB4NV331qNH7fW9Nst8",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "ripple"
                        }
                    },
                    SUSHI: {
                        symbol: "SUSHI",
                        name: "SUSHI",
                        mint: "AR1Mtgh7zAtxuxGd2XPovXPVjcSdY3i4rQYisNadjfKy",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "sushi"
                        }
                    },
                    ALEPH: {
                        symbol: "ALEPH",
                        name: "ALEPH",
                        mint: "CsZ5LZkDS7h9TDKjrbL7VAwQZ9nsRu8vJLhRYfmGaN8K",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "aleph"
                        }
                    },
                    SXP: {
                        symbol: "SXP",
                        name: "SXP",
                        mint: "SF3oTvfWzEP3DTwGSvUXRrGTvr75pdZNnBLAH9bzMuX",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "swipe"
                        }
                    },
                    HGET: {
                        symbol: "HGET",
                        name: "HGET",
                        mint: "BtZQfWqDGbk9Wf2rXEiWyQBdBY1etnUUn6zEphvVS7yN",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "hedget"
                        }
                    },
                    CREAM: {
                        symbol: "CREAM",
                        name: "CREAM",
                        mint: "5Fu5UUgbjpUvdBveb3a1JTNirL8rXtiYeSMWvKjtUNQv",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "cream-2"
                        }
                    },
                    UNI: {
                        symbol: "UNI",
                        name: "UNI",
                        mint: "DEhAasscXF4kEGxFgJ3bq4PpVGp5wyUxMRvn6TzGVHaw",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "uniswap"
                        }
                    },
                    SRM: {
                        symbol: "SRM",
                        name: "Serum",
                        mint: "SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "serum"
                        }
                    },
                    FTT: {
                        symbol: "FTT",
                        name: "FTX Token",
                        mint: "AGFEad2et2ZJif9jaGpdMixQqvW5i81aBdvKe7PHNfz3",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "ftx-token"
                        }
                    },
                    MSRM: {
                        symbol: "MSRM",
                        name: "MegaSerum",
                        mint: "MSRMcoVyrFxnSgo5uXwone5SKcGhT1KEJMFEkMEWf9L",
                        decimals: 0,
                        extensions: {
                            coingeckoId: "megaserum"
                        }
                    },
                    TOMO: {
                        symbol: "TOMO",
                        name: "TOMO",
                        mint: "GXMvfY2jpQctDqZ9RoU3oWPhufKiCcFEfchvYumtX7jd",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "tomochain"
                        }
                    },
                    KARMA: {
                        symbol: "KARMA",
                        name: "KARMA",
                        mint: "EcqExpGNFBve2i1cMJUTR4bPXj4ZoqmDD2rTkeCcaTFX",
                        decimals: 4,
                        extensions: {
                            coingeckoId: "karma-dao"
                        }
                    },
                    LUA: {
                        symbol: "LUA",
                        name: "LUA",
                        mint: "EqWCKXfs3x47uVosDpTRgFniThL9Y8iCztJaapxbEaVX",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "lua-token"
                        }
                    },
                    MATH: {
                        symbol: "MATH",
                        name: "MATH",
                        mint: "GeDS162t9yGJuLEHPWXXGrb1zwkzinCgRwnT8vHYjKza",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "math"
                        }
                    },
                    KEEP: {
                        symbol: "KEEP",
                        name: "KEEP",
                        mint: "GUohe4DJUA5FKPWo3joiPgsB7yzer7LpDmt1Vhzy3Zht",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "keep-network"
                        }
                    },
                    SWAG: {
                        symbol: "SWAG",
                        name: "SWAG",
                        mint: "9F9fNTT6qwjsu4X4yWYKZpsbw5qT7o6yR2i57JF2jagy",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "swag-finance"
                        }
                    },
                    FIDA: {
                        symbol: "FIDA",
                        name: "Bonfida",
                        mint: "EchesyfXePKdLtoiZSL8pBe8Myagyy8ZRqsACNCFGnvp",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "bonfida"
                        }
                    },
                    KIN: {
                        symbol: "KIN",
                        name: "Kin",
                        mint: "kinXdEcpDQeHPEuQnqmUgtYykqKGVFq6CeVX5iAHJq6",
                        decimals: 5,
                        extensions: {
                            coingeckoId: "kin"
                        }
                    },
                    MAPS: {
                        symbol: "MAPS",
                        name: "MAPS",
                        mint: "MAPS41MDahZ9QdKXhVa4dWB9RuyfV4XqhyAZ8XcYepb",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "maps"
                        }
                    },
                    OXY: {
                        symbol: "OXY",
                        name: "Oxygen",
                        mint: "z3dn17yLaGMKffVogeFHQ9zWVcXgqgf3PQnDsNs2g6M",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "oxygen"
                        }
                    },
                    RAY: {
                        symbol: "RAY",
                        name: "Raydium",
                        mint: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "raydium"
                        }
                    },
                    xCOPE: {
                        symbol: "xCOPE",
                        name: "xCOPE",
                        mint: "3K6rftdAaQYMPunrtNRHgnK2UAtjm2JwyT2oCiTDouYE",
                        decimals: 0,
                        extensions: {
                            coingeckoId: "cope"
                        }
                    },
                    COPE: {
                        symbol: "COPE",
                        name: "Cope",
                        mint: "8HGyAAB1yoM1ttS7pXjHMa3dukTFGQggnFFH3hJZgzQh",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "cope"
                        }
                    },
                    STEP: {
                        symbol: "STEP",
                        name: "Step Finance",
                        mint: "StepAscQoEioFxxWGnh2sLBDFp9d8rvKz2Yp39iDpyT",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "step-finance"
                        }
                    },
                    MEDIA: {
                        symbol: "MEDIA",
                        name: "Media Network",
                        mint: "ETAtLmCmsoiEEKfNrHKJ2kYy3MoABhU6NQvpSfij5tDs",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "media-network"
                        }
                    },
                    ROPE: {
                        symbol: "ROPE",
                        name: "Rope Token",
                        mint: "8PMHT4swUMtBzgHnh5U564N5sjPSiUz2cjEQzFnnP1Fo",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "rope-token"
                        }
                    },
                    MER: {
                        symbol: "MER",
                        name: "Mercurial",
                        mint: "MERt85fc5boKw3BW1eYdxonEuJNvXbiMbs6hvheau5K",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "mercurial"
                        }
                    },
                    TULIP: {
                        symbol: "TULIP",
                        name: "Tulip Protocol",
                        mint: "TuLipcqtGVXP9XR62wM8WWCm6a9vhLs7T1uoWBk6FDs",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "solfarm"
                        }
                    },
                    SNY: {
                        symbol: "SNY",
                        name: "SNY",
                        mint: "4dmKkXNHdgYsXqBHCuMikNQWwVomZURhYvkkX5c4pQ7y",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "synthetify-token"
                        }
                    },
                    SLRS: {
                        symbol: "SLRS",
                        name: "SLRS",
                        mint: "SLRSSpSLUTP7okbCUBYStWCo1vUgyt775faPqz8HUMr",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "solrise-finance"
                        }
                    },
                    WOO: {
                        symbol: "WOO",
                        name: "WOO Network",
                        mint: "E5rk3nmgLUuKUiS94gg4bpWwWwyjCMtddsAXkTFLtHEy",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "woo-network"
                        }
                    },
                    BOP: {
                        symbol: "BOP",
                        name: "Boring Protocol",
                        mint: "BLwTnYKqf7u4qjgZrrsKeNs2EzWkMLqVCu6j8iHyrNA3",
                        decimals: 8,
                        extensions: {
                            coingeckoId: "boring-protocol"
                        }
                    },
                    SAMO: {
                        symbol: "SAMO",
                        name: "Samoyedcoin",
                        mint: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "samoyedcoin"
                        }
                    },
                    renBTC: {
                        symbol: "renBTC",
                        name: "renBTC",
                        mint: "CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5",
                        decimals: 8,
                        extensions: {
                            coingeckoId: "renbtc"
                        }
                    },
                    renDOGE: {
                        symbol: "renDOGE",
                        name: "renDOGE",
                        mint: "ArUkYE2XDKzqy77PRRGjo4wREWwqk6RXTfM9NeqzPvjU",
                        decimals: 8,
                        extensions: {
                            coingeckoId: "rendoge"
                        }
                    },
                    LIKE: {
                        symbol: "LIKE",
                        name: "Only1",
                        mint: "3bRTivrVsitbmCTGtqwp7hxXPsybkjn4XLNtPsHqa3zR",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "only1"
                        }
                    },
                    DXL: {
                        symbol: "DXL",
                        name: "Dexlab",
                        mint: "GsNzxJfFn6zQdJGeYsupJWzUAm57Ba7335mfhWvFiE9Z",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "dexlab"
                        }
                    },
                    mSOL: {
                        symbol: "mSOL",
                        name: "Marinade staked SOL",
                        mint: "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "msol"
                        }
                    },
                    PAI: {
                        symbol: "PAI",
                        name: "Parrot USD",
                        mint: "Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "parrot-usd"
                        }
                    },
                    PORT: {
                        symbol: "PORT",
                        name: "Port Finance",
                        mint: "PoRTjZMPXb9T7dyU7tpLEZRQj7e6ssfAE62j2oQuc6y",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "port-finance"
                        }
                    },
                    MNGO: {
                        symbol: "MNGO",
                        name: "Mango",
                        mint: "MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "mango-markets"
                        }
                    },
                    CRP: {
                        symbol: "CRP",
                        name: "CropperFinance",
                        mint: "DubwWZNWiNGMMeeQHPnMATNj77YZPZSAz2WVR5WjLJqz",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "cropperfinance"
                        }
                    },
                    ATLAS: {
                        symbol: "ATLAS",
                        name: "Star Atlas",
                        mint: "ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx",
                        decimals: 8,
                        extensions: {
                            coingeckoId: "star-atlas"
                        }
                    },
                    POLIS: {
                        symbol: "POLIS",
                        name: "Star Atlas DAO",
                        mint: "poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk",
                        decimals: 8,
                        extensions: {
                            coingeckoId: "star-atlas-dao"
                        }
                    },
                    GRAPE: {
                        symbol: "GRAPE",
                        name: "Grape Protocol",
                        mint: "8upjSpvjcdpuzhfR1zriwg5NXkwDruejqNE9WNbPRtyA",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "grape-2"
                        }
                    },
                    GENE: {
                        symbol: "GENE",
                        name: "Genopets",
                        mint: "GENEtH5amGSi8kHAtQoezp1XEXwZJ8vcuePYnXdKrMYz",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "genopets"
                        }
                    },
                    DFL: {
                        symbol: "DFL",
                        name: "DeFi Land",
                        mint: "DFL1zNkaGPWm1BqAVqRjCZvHmwTFrEaJtbzJWgseoNJh",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "defi-land"
                        }
                    },
                    CHEEMS: {
                        symbol: "CHEEMS",
                        name: "Cheems",
                        mint: "3FoUAsGDbvTD6YZ4wVKJgTB76onJUKz7GPEBNiR5b8wc",
                        decimals: 4,
                        extensions: {
                            coingeckoId: "cheems"
                        }
                    },
                    stSOL: {
                        symbol: "stSOL",
                        name: "Lido Staked SOL",
                        mint: "7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "lido-staked-sol"
                        }
                    },
                    LARIX: {
                        symbol: "LARIX",
                        name: "Larix",
                        mint: "Lrxqnh6ZHKbGy3dcrCED43nsoLkM1LTzU2jRfWe8qUC",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "larix"
                        }
                    },
                    RIN: {
                        symbol: "RIN",
                        name: "Aldrin",
                        mint: "E5ndSkaB17Dm7CsD22dvcjfrYSDLCxFcMd6z8ddCk5wp",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "aldrin"
                        }
                    },
                    APEX: {
                        symbol: "APEX",
                        name: "ApeXit Finance",
                        mint: "51tMb3zBKDiQhNwGqpgwbavaGH54mk8fXFzxTc1xnasg",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "apexit-finance"
                        }
                    },
                    MNDE: {
                        symbol: "MNDE",
                        name: "Marinade",
                        mint: "MNDEFzGvMt87ueuHvVU9VcTqsAP5b3fTGPsHuuPA5ey",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "marinade"
                        }
                    },
                    LIQ: {
                        symbol: "LIQ",
                        name: "LIQ Protocol",
                        mint: "4wjPQJ6PrkC4dHhYghwJzGBVP78DkBzA2U3kHoFNBuhj",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "liq-protocol"
                        }
                    },
                    WAG: {
                        symbol: "WAG",
                        name: "Waggle Network",
                        mint: "5tN42n9vMi6ubp67Uy4NnmM5DMZYN8aS8GeB3bEDHr6E",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "waggle-network"
                        }
                    },
                    wLDO: {
                        symbol: "wLDO",
                        name: "wLDO",
                        mint: "HZRCwxP2Vq9PCpPXooayhJ2bxTpo5xfpQrwB1svh332p",
                        decimals: 8,
                        extensions: {}
                    },
                    SLIM: {
                        symbol: "SLIM",
                        name: "Solanium",
                        mint: "xxxxa1sKNGwFtw2kFn8XauW9xq8hBZ5kVtcSesTT9fW",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "solanium"
                        }
                    },
                    PRT: {
                        symbol: "PRT",
                        name: "Parrot Protocol",
                        mint: "PRT88RkA4Kg5z7pKnezeNH4mafTvtQdfFgpQTGRjz44",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "parrot-protocol"
                        }
                    },
                    SBR: {
                        symbol: "SBR",
                        name: "SBR",
                        mint: "Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1",
                        decimals: 6,
                        extensions: {}
                    },
                    FAB: {
                        symbol: "FAB",
                        name: "Fabric",
                        mint: "EdAhkbj5nF9sRM7XN7ewuW8C9XEUMs8P7cnoQ57SYE96",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "fabric"
                        }
                    },
                    ABR: {
                        symbol: "ABR",
                        name: "Allbridge",
                        mint: "a11bdAAuV8iB2fu7X6AxAvDTo1QZ8FXB3kk5eecdasp",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "allbridge"
                        }
                    },
                    IVN: {
                        symbol: "IVN",
                        name: "Investin",
                        mint: "iVNcrNE9BRZBC9Aqf753iZiZfbszeAVUoikgT9yvr2a",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "investin"
                        }
                    },
                    CYS: {
                        symbol: "CYS",
                        name: "Cyclos",
                        mint: "BRLsMczKuaR5w9vSubF4j8HwEGGprVAyyVgS4EX7DKEg",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "cyclos"
                        }
                    },
                    FRKT: {
                        symbol: "FRKT",
                        name: "FRAKT Token",
                        mint: "ErGB9xa24Szxbk1M28u2Tx8rKPqzL6BroNkkzk5rG4zj",
                        decimals: 8,
                        extensions: {
                            coingeckoId: "frakt-token"
                        }
                    },
                    AURY: {
                        symbol: "AURY",
                        name: "Aurory",
                        mint: "AURYydfxJib1ZkTir1Jn1J9ECYUtjb6rKQVmtYaixWPP",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "aurory"
                        }
                    },
                    SYP: {
                        symbol: "SYP",
                        name: "Sypool",
                        mint: "FnKE9n6aGjQoNWRBZXy4RW6LZVao7qwBonUbiD7edUmZ",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "sypool"
                        }
                    },
                    WOOF: {
                        symbol: "WOOF",
                        name: "WOOF",
                        mint: "9nEqaUcb16sQ3Tn1psbkWqyhPdLmfHWjKGymREjsAgTE",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "woof-token"
                        }
                    },
                    ORCA: {
                        symbol: "ORCA",
                        name: "Orca",
                        mint: "orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "orca"
                        }
                    },
                    SLND: {
                        symbol: "SLND",
                        name: "Solend",
                        mint: "SLNDpmoWTVADgEdndyvWzroNL7zSi1dF9PC3xHGtPwp",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "solend"
                        }
                    },
                    weWETH: {
                        symbol: "weWETH",
                        name: "weWETH",
                        mint: "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs",
                        decimals: 8,
                        extensions: {}
                    },
                    weUNI: {
                        symbol: "weUNI",
                        name: "weUNI",
                        mint: "8FU95xFJhUUkyyCLU13HSzDLs7oC4QZdXQHL6SCeab36",
                        decimals: 8,
                        extensions: {}
                    },
                    weSUSHI: {
                        symbol: "weSUSHI",
                        name: "weSUSHI",
                        mint: "ChVzxWRmrTeSgwd3Ui3UumcN8KX7VK3WaD4KGeSKpypj",
                        decimals: 8,
                        extensions: {}
                    },
                    GOFX: {
                        symbol: "GOFX",
                        name: "GooseFX",
                        mint: "GFX1ZjR2P15tmrSwow6FjyDYcEkoFb4p4gJCpLBjaxHD",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "goosefx"
                        }
                    },
                    IN: {
                        symbol: "IN",
                        name: "Invictus",
                        mint: "inL8PMVd6iiW3RCBJnr5AsrRN6nqr4BTrcNuQWQSkvY",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "invictus"
                        }
                    },
                    weDYDX: {
                        symbol: "weDYDX",
                        name: "weDYDX",
                        mint: "4Hx6Bj56eGyw8EJrrheM6LBQAvVYRikYCWsALeTrwyRU",
                        decimals: 8,
                        extensions: {}
                    },
                    STARS: {
                        symbol: "STARS",
                        name: "StarLaunch",
                        mint: "HCgybxq5Upy8Mccihrp7EsmwwFqYZtrHrsmsKwtGXLgW",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "starlaunch"
                        }
                    },
                    weAXS: {
                        symbol: "weAXS",
                        name: "weAXS",
                        mint: "HysWcbHiYY9888pHbaqhwLYZQeZrcQMXKQWRqS7zcPK5",
                        decimals: 8,
                        extensions: {}
                    },
                    weSHIB: {
                        symbol: "weSHIB",
                        name: "weSHIB",
                        mint: "CiKu4eHsVrc1eueVQeHn7qhXTcVu95gSQmBpX4utjL9z",
                        decimals: 8,
                        extensions: {}
                    },
                    OXS: {
                        symbol: "OXS",
                        name: "Oxbull Solana",
                        mint: "4TGxgCSJQx2GQk9oHZ8dC5m3JNXTYZHjXumKAW3vLnNx",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "oxbull-solana"
                        }
                    },
                    CWAR: {
                        symbol: "CWAR",
                        name: "Cryowar",
                        mint: "HfYFjMKNZygfMC8LsQ8LtpPsPxEJoXJx4M6tqi75Hajo",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "cryowar-token"
                        }
                    },
                    UPS: {
                        symbol: "UPS",
                        name: "UPFI Network",
                        mint: "EwJN2GqUGXXzYmoAciwuABtorHczTA5LqbukKXV1viH7",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "upfi-network"
                        }
                    },
                    weSAND: {
                        symbol: "weSAND",
                        name: "weSAND",
                        mint: "49c7WuCZkQgc3M4qH8WuEUNXfgwupZf1xqWkDQ7gjRGt",
                        decimals: 8,
                        extensions: {}
                    },
                    weMANA: {
                        symbol: "weMANA",
                        name: "weMANA",
                        mint: "7dgHoN8wBZCc5wbnQ2C47TDnBMAxG4Q5L3KjP67z8kNi",
                        decimals: 8,
                        extensions: {}
                    },
                    CAVE: {
                        symbol: "CAVE",
                        name: "Crypto Cavemen",
                        mint: "4SZjjNABoqhbd4hnapbvoEPEqT8mnNkfbEoAwALf1V8t",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "cave"
                        }
                    },
                    JSOL: {
                        symbol: "JSOL",
                        name: "JPool",
                        mint: "7Q2afV64in6N6SeZsAAB81TJzwDoD6zpqmHkzi9Dcavn",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "jpool"
                        }
                    },
                    APT: {
                        symbol: "APT",
                        name: "Apricot",
                        mint: "APTtJyaRX5yGTsJU522N4VYWg3vCvSb65eam5GrPT5Rt",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "apricot"
                        }
                    },
                    SONAR: {
                        symbol: "SONAR",
                        name: "SonarWatch",
                        mint: "sonarX4VtVkQemriJeLm6CKeW3GDMyiBnnAEMw1MRAE",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "sonarwatch"
                        }
                    },
                    SHILL: {
                        symbol: "SHILL",
                        name: "SHILL Token",
                        mint: "6cVgJUqo4nmvQpbgrDZwyfd6RwWw5bfnCamS3M9N1fd",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "shill-token"
                        }
                    },
                    TTT: {
                        symbol: "TTT",
                        name: "TabTrader",
                        mint: "FNFKRV3V8DtA3gVJN6UshMiLGYA8izxFwkNWmJbFjmRj",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "tabtrader"
                        }
                    },
                    BOKU: {
                        symbol: "BOKU",
                        name: "Boryoku Dragonz",
                        mint: "CN7qFa5iYkHz99PTctvT4xXUHnxwjQ5MHxCuTJtPN5uS",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "boku"
                        }
                    },
                    MIMO: {
                        symbol: "MIMO",
                        name: "Million Monke",
                        mint: "9TE7ebz1dsFo1uQ2T4oYAKSm39Y6fWuHrd6Uk6XaiD16",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "million-monke"
                        }
                    },
                    wbWBNB: {
                        symbol: "wbWBNB",
                        name: "wbWBNB",
                        mint: "9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa",
                        decimals: 8,
                        extensions: {}
                    },
                    wePEOPLE: {
                        symbol: "wePEOPLE",
                        name: "wePEOPLE",
                        mint: "CobcsUrt3p91FwvULYKorQejgsm5HoQdv5T8RUZ6PnLA",
                        decimals: 8,
                        extensions: {}
                    },
                    XTAG: {
                        symbol: "XTAG",
                        name: "xHashtag",
                        mint: "5gs8nf4wojB5EXgDUWNLwXpknzgV2YWDhveAeBZpVLbp",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "xhashtag"
                        }
                    },
                    KKO: {
                        symbol: "KKO",
                        name: "Kineko",
                        mint: "kiNeKo77w1WBEzFFCXrTDRWGRWGP8yHvKC9rX6dqjQh",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "kineko"
                        }
                    },
                    VI: {
                        symbol: "VI",
                        name: "Vybit",
                        mint: "7zBWymxbZt7PVHQzfi3i85frc1YRiQc23K7bh3gos8ZC",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "vybit"
                        }
                    },
                    SOLC: {
                        symbol: "SOLC",
                        name: "Solcubator",
                        mint: "Bx1fDtvTN6NvE4kjdPHQXtmGSg582bZx9fGy4DQNMmAT",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "solcubator"
                        }
                    },
                    STR: {
                        symbol: "STR",
                        name: "Solster",
                        mint: "9zoqdwEBKWEi9G5Ze8BSkdmppxGgVv1Kw4LuigDiNr9m",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "solster"
                        }
                    },
                    SPWN: {
                        symbol: "SPWN",
                        name: "Bitspawn",
                        mint: "5U9QqCPhqXAJcEv9uyzFJd5zhN93vuPk1aNNkXnUfPnt",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "bitspawn"
                        }
                    },
                    ISOLA: {
                        symbol: "ISOLA",
                        name: "Intersola",
                        mint: "333iHoRM2Awhf9uVZtSyTfU8AekdGrgQePZsKMFPgKmS",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "intersola"
                        }
                    },
                    RUN: {
                        symbol: "RUN",
                        name: "Run",
                        mint: "6F9XriABHfWhit6zmMUYAQBSy6XK5VF1cHXuW5LDpRtC",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "run"
                        }
                    },
                    REAL: {
                        symbol: "REAL",
                        name: "Realy Metaverse",
                        mint: "AD27ov5fVU2XzwsbvnFvb1JpCBaCB5dRXrczV9CqSVGb",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "realy-metaverse"
                        }
                    },
                    CRWNY: {
                        symbol: "CRWNY",
                        name: "CRWNY",
                        mint: "CRWNYkqdgvhGGae9CKfNka58j6QQkaD5bLhKXvUYqnc1",
                        decimals: 6,
                        extensions: {}
                    },
                    BLOCK: {
                        symbol: "BLOCK",
                        name: "Blockasset",
                        mint: "NFTUkR4u7wKxy9QLaX2TGvd9oZSWoMo4jqSJqdMb7Nk",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "blockasset"
                        }
                    },
                    SOLAR: {
                        symbol: "SOLAR",
                        name: "Solar",
                        mint: "2wmKXX1xsxLfrvjEPrt2UHiqj8Gbzwxvffr9qmNjsw8g",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "solar"
                        }
                    },
                    BASIS: {
                        symbol: "BASIS",
                        name: "basis.markets",
                        mint: "Basis9oJw9j8cw53oMV7iqsgo6ihi9ALw4QR31rcjUJa",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "basis-markets"
                        }
                    },
                    SOLX: {
                        symbol: "SOLX",
                        name: "Soldex",
                        mint: "CH74tuRLTYcxG7qNJCsV9rghfLXJCQJbsu7i52a8F1Gn",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "soldex"
                        }
                    },
                    CHICKS: {
                        symbol: "CHICKS",
                        name: "SolChicks Token",
                        mint: "cxxShYRVcepDudXhe7U62QHvw8uBJoKFifmzggGKVC2",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "solchicks-token"
                        }
                    },
                    GST: {
                        symbol: "GST",
                        name: "GST",
                        mint: "AFbX8oGjGpmVFywbVouvhQSRmiW2aR1mohfahi4Y2AdB",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "gst"
                        }
                    },
                    MBS: {
                        symbol: "MBS",
                        name: "MonkeyBall",
                        mint: "Fm9rHUTF5v3hwMLbStjZXqNBBoZyGriQaFM6sTFz3K8A",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "monkeyball"
                        }
                    },
                    PRISM: {
                        symbol: "PRISM",
                        name: "Prism",
                        mint: "PRSMNsEPqhGVCH1TtWiJqPjJyh2cKrLostPZTNy1o5x",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "prism"
                        }
                    },
                    MEAN: {
                        symbol: "MEAN",
                        name: "Meanfi",
                        mint: "MEANeD3XDdUmNMsRGjASkSWdC8prLYsoRJ61pPeHctD",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "meanfi"
                        }
                    },
                    TINY: {
                        symbol: "TINY",
                        name: "Tiny Colony",
                        mint: "HKfs24UEDQpHS5hUyKYkHd9q7GY5UQ679q2bokeL2whu",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "tiny-colony"
                        }
                    },
                    SHDW: {
                        symbol: "SHDW",
                        name: "GenesysGo Shadow",
                        mint: "SHDWyBxihqiCj6YekG2GUr7wqKLeLAMK1gHZck9pL6y",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "genesysgo-shadow"
                        }
                    },
                    SCY: {
                        symbol: "SCY",
                        name: "Synchrony",
                        mint: "SCYfrGCw8aDiqdgcpdGjV6jp4UVVQLuphxTDLNWu36f",
                        decimals: 9,
                        extensions: {
                            coingeckoId: "synchrony"
                        }
                    },
                    SLC: {
                        symbol: "SLC",
                        name: "Solice",
                        mint: "METAmTMXwdb8gYzyCPfXXFmZZw4rUsXX58PNsDg7zjL",
                        decimals: 6,
                        extensions: {
                            coingeckoId: "solice"
                        }
                    }
                },
                ep = {
                    FIDA_RAY_V4: {
                        symbol: "FIDA-RAY",
                        name: "FIDA-RAY V4 LP",
                        mint: "DsBuznXRTmzvEdb36Dx3aVLVo1XmH7r1PRZUFugLPTFv",
                        base: ed.FIDA,
                        quote: ed.RAY,
                        decimals: ed.FIDA.decimals,
                        version: 4
                    },
                    OXY_RAY_V4: {
                        symbol: "OXY-RAY",
                        name: "OXY-RAY V4 LP",
                        mint: "FwaX9W7iThTZH5MFeasxdLpxTVxRcM7ZHieTCnYog8Yb",
                        base: ed.OXY,
                        quote: ed.RAY,
                        decimals: ed.OXY.decimals,
                        version: 4
                    },
                    MAPS_RAY_V4: {
                        symbol: "MAPS-RAY",
                        name: "MAPS-RAY V4 LP",
                        mint: "CcKK8srfVdTSsFGV3VLBb2YDbzF4T4NM2C3UEjC39RLP",
                        base: ed.MAPS,
                        quote: ed.RAY,
                        decimals: ed.MAPS.decimals,
                        version: 4
                    },
                    KIN_RAY_V4: {
                        symbol: "KIN-RAY",
                        name: "KIN-RAY V4 LP",
                        mint: "CHT8sft3h3gpLYbCcZ9o27mT5s3Z6VifBVbUiDvprHPW",
                        base: ed.KIN,
                        quote: ed.RAY,
                        decimals: 6,
                        version: 4
                    },
                    RAY_USDT_V4: {
                        symbol: "RAY-USDT",
                        name: "RAY-USDT V4 LP",
                        mint: "C3sT1R3nsw4AVdepvLTLKr5Gvszr7jufyBWUCvy4TUvT",
                        base: ed.RAY,
                        quote: ed.USDT,
                        decimals: ed.RAY.decimals,
                        version: 4
                    },
                    SOL_USDC_V4: {
                        symbol: "SOL-USDC",
                        name: "SOL-USDC V4 LP",
                        mint: "8HoQnePLqPj4M7PUDzfw8e3Ymdwgc7NLGnaTUapubyvu",
                        base: ed.WSOL,
                        quote: ed.USDC,
                        decimals: ed.WSOL.decimals,
                        version: 4
                    },
                    YFI_USDC_V4: {
                        symbol: "YFI-USDC",
                        name: "YFI-USDC V4 LP",
                        mint: "865j7iMmRRycSYUXzJ33ZcvLiX9JHvaLidasCyUyKaRE",
                        base: ed.YFI,
                        quote: ed.USDC,
                        decimals: ed.YFI.decimals,
                        version: 4
                    },
                    SRM_USDC_V4: {
                        symbol: "SRM-USDC",
                        name: "SRM-USDC V4 LP",
                        mint: "9XnZd82j34KxNLgQfz29jGbYdxsYznTWRpvZE3SRE7JG",
                        base: ed.SRM,
                        quote: ed.USDC,
                        decimals: ed.SRM.decimals,
                        version: 4
                    },
                    FTT_USDC_V4: {
                        symbol: "FTT-USDC",
                        name: "FTT-USDC V4 LP",
                        mint: "75dCoKfUHLUuZ4qEh46ovsxfgWhB4icc3SintzWRedT9",
                        base: ed.FTT,
                        quote: ed.USDC,
                        decimals: ed.FTT.decimals,
                        version: 4
                    },
                    BTC_USDC_V4: {
                        symbol: "BTC-USDC",
                        name: "BTC-USDC V4 LP",
                        mint: "2hMdRdVWZqetQsaHG8kQjdZinEMBz75vsoWTCob1ijXu",
                        base: ed.BTC,
                        quote: ed.USDC,
                        decimals: ed.BTC.decimals,
                        version: 4
                    },
                    SUSHI_USDC_V4: {
                        symbol: "SUSHI-USDC",
                        name: "SUSHI-USDC V4 LP",
                        mint: "2QVjeR9d2PbSf8em8NE8zWd8RYHjFtucDUdDgdbDD2h2",
                        base: ed.SUSHI,
                        quote: ed.USDC,
                        decimals: ed.SUSHI.decimals,
                        version: 4
                    },
                    TOMO_USDC_V4: {
                        symbol: "TOMO-USDC",
                        name: "TOMO-USDC V4 LP",
                        mint: "CHyUpQFeW456zcr5XEh4RZiibH8Dzocs6Wbgz9aWpXnQ",
                        base: ed.TOMO,
                        quote: ed.USDC,
                        decimals: ed.TOMO.decimals,
                        version: 4
                    },
                    LINK_USDC_V4: {
                        symbol: "LINK-USDC",
                        name: "LINK-USDC V4 LP",
                        mint: "BqjoYjqKrXtfBKXeaWeAT5sYCy7wsAYf3XjgDWsHSBRs",
                        base: ed.LINK,
                        quote: ed.USDC,
                        decimals: ed.LINK.decimals,
                        version: 4
                    },
                    ETH_USDC_V4: {
                        symbol: "ETH-USDC",
                        name: "ETH-USDC V4 LP",
                        mint: "13PoKid6cZop4sj2GfoBeujnGfthUbTERdE5tpLCDLEY",
                        base: ed.ETH,
                        quote: ed.USDC,
                        decimals: ed.ETH.decimals,
                        version: 4
                    },
                    xCOPE_USDC_V4: {
                        symbol: "xCOPE-USDC",
                        name: "xCOPE-USDC V4 LP",
                        mint: "2Vyyeuyd15Gp8aH6uKE72c4hxc8TVSLibxDP9vzspQWG",
                        base: ed.xCOPE,
                        quote: ed.USDC,
                        decimals: ed.xCOPE.decimals,
                        version: 4
                    },
                    SOL_USDT_V4: {
                        symbol: "SOL-USDT",
                        name: "SOL-USDT V4 LP",
                        mint: "Epm4KfTj4DMrvqn6Bwg2Tr2N8vhQuNbuK8bESFp4k33K",
                        base: ed.WSOL,
                        quote: ed.USDT,
                        decimals: ed.WSOL.decimals,
                        version: 4
                    },
                    YFI_USDT_V4: {
                        symbol: "YFI-USDT",
                        name: "YFI-USDT V4 LP",
                        mint: "FA1i7fej1pAbQbnY8NbyYUsTrWcasTyipKreDgy1Mgku",
                        base: ed.YFI,
                        quote: ed.USDT,
                        decimals: ed.YFI.decimals,
                        version: 4
                    },
                    SRM_USDT_V4: {
                        symbol: "SRM-USDT",
                        name: "SRM-USDT V4 LP",
                        mint: "HYSAu42BFejBS77jZAZdNAWa3iVcbSRJSzp3wtqCbWwv",
                        base: ed.SRM,
                        quote: ed.USDT,
                        decimals: ed.SRM.decimals,
                        version: 4
                    },
                    FTT_USDT_V4: {
                        symbol: "FTT-USDT",
                        name: "FTT-USDT V4 LP",
                        mint: "2cTCiUnect5Lap2sk19xLby7aajNDYseFhC9Pigou11z",
                        base: ed.FTT,
                        quote: ed.USDT,
                        decimals: ed.FTT.decimals,
                        version: 4
                    },
                    BTC_USDT_V4: {
                        symbol: "BTC-USDT",
                        name: "BTC-USDT V4 LP",
                        mint: "DgGuvR9GSHimopo3Gc7gfkbKamLKrdyzWkq5yqA6LqYS",
                        base: ed.BTC,
                        quote: ed.USDT,
                        decimals: ed.BTC.decimals,
                        version: 4
                    },
                    SUSHI_USDT_V4: {
                        symbol: "SUSHI-USDT",
                        name: "SUSHI-USDT V4 LP",
                        mint: "Ba26poEYDy6P2o95AJUsewXgZ8DM9BCsmnU9hmC9i4Ki",
                        base: ed.SUSHI,
                        quote: ed.USDT,
                        decimals: ed.SUSHI.decimals,
                        version: 4
                    },
                    TOMO_USDT_V4: {
                        symbol: "TOMO-USDT",
                        name: "TOMO-USDT V4 LP",
                        mint: "D3iGro1vn6PWJXo9QAPj3dfta6dKkHHnmiiym2EfsAmi",
                        base: ed.TOMO,
                        quote: ed.USDT,
                        decimals: ed.TOMO.decimals,
                        version: 4
                    },
                    LINK_USDT_V4: {
                        symbol: "LINK-USDT",
                        name: "LINK-USDT V4 LP",
                        mint: "Dr12Sgt9gkY8WU5tRkgZf1TkVWJbvjYuPAhR3aDCwiiX",
                        base: ed.LINK,
                        quote: ed.USDT,
                        decimals: ed.LINK.decimals,
                        version: 4
                    },
                    ETH_USDT_V4: {
                        symbol: "ETH-USDT",
                        name: "ETH-USDT V4 LP",
                        mint: "nPrB78ETY8661fUgohpuVusNCZnedYCgghzRJzxWnVb",
                        base: ed.ETH,
                        quote: ed.USDT,
                        decimals: ed.ETH.decimals,
                        version: 4
                    },
                    YFI_SRM_V4: {
                        symbol: "YFI-SRM",
                        name: "YFI-SRM V4 LP",
                        mint: "EGJht91R7dKpCj8wzALkjmNdUUUcQgodqWCYweyKcRcV",
                        base: ed.YFI,
                        quote: ed.SRM,
                        decimals: ed.YFI.decimals,
                        version: 4
                    },
                    FTT_SRM_V4: {
                        symbol: "FTT-SRM",
                        name: "FTT-SRM V4 LP",
                        mint: "AsDuPg9MgPtt3jfoyctUCUgsvwqAN6RZPftqoeiPDefM",
                        base: ed.FTT,
                        quote: ed.SRM,
                        decimals: ed.FTT.decimals,
                        version: 4
                    },
                    BTC_SRM_V4: {
                        symbol: "BTC-SRM",
                        name: "BTC-SRM V4 LP",
                        mint: "AGHQxXb3GSzeiLTcLtXMS2D5GGDZxsB2fZYZxSB5weqB",
                        base: ed.BTC,
                        quote: ed.SRM,
                        decimals: ed.BTC.decimals,
                        version: 4
                    },
                    SUSHI_SRM_V4: {
                        symbol: "SUSHI-SRM",
                        name: "SUSHI-SRM V4 LP",
                        mint: "3HYhUnUdV67j1vn8fu7ExuVGy5dJozHEyWvqEstDbWwE",
                        base: ed.SUSHI,
                        quote: ed.SRM,
                        decimals: ed.SUSHI.decimals,
                        version: 4
                    },
                    TOMO_SRM_V4: {
                        symbol: "TOMO-SRM",
                        name: "TOMO-SRM V4 LP",
                        mint: "GgH9RnKrQpaMQeqmdbMvs5oo1A24hERQ9wuY2pSkeG7x",
                        base: ed.TOMO,
                        quote: ed.SRM,
                        decimals: ed.TOMO.decimals,
                        version: 4
                    },
                    LINK_SRM_V4: {
                        symbol: "LINK-SRM",
                        name: "LINK-SRM V4 LP",
                        mint: "GXN6yJv12o18skTmJXaeFXZVY1iqR18CHsmCT8VVCmDD",
                        base: ed.LINK,
                        quote: ed.SRM,
                        decimals: ed.LINK.decimals,
                        version: 4
                    },
                    ETH_SRM_V4: {
                        symbol: "ETH-SRM",
                        name: "ETH-SRM V4 LP",
                        mint: "9VoY3VERETuc2FoadMSYYizF26mJinY514ZpEzkHMtwG",
                        base: ed.ETH,
                        quote: ed.SRM,
                        decimals: ed.ETH.decimals,
                        version: 4
                    },
                    SRM_SOL_V4: {
                        symbol: "SRM-SOL",
                        name: "SRM-SOL V4 LP",
                        mint: "AKJHspCwDhABucCxNLXUSfEzb7Ny62RqFtC9uNjJi4fq",
                        base: ed.SRM,
                        quote: ed.WSOL,
                        decimals: ed.SRM.decimals,
                        version: 4
                    },
                    STEP_USDC_V4: {
                        symbol: "STEP-USDC",
                        name: "STEP-USDC V4 LP",
                        mint: "3k8BDobgihmk72jVmXYLE168bxxQUhqqyESW4dQVktqC",
                        base: ed.STEP,
                        quote: ed.USDC,
                        decimals: ed.STEP.decimals,
                        version: 4
                    },
                    MEDIA_USDC_V4: {
                        symbol: "MEDIA-USDC",
                        name: "MEDIA-USDC V4 LP",
                        mint: "A5zanvgtioZGiJMdEyaKN4XQmJsp1p7uVxaq2696REvQ",
                        base: ed.MEDIA,
                        quote: ed.USDC,
                        decimals: ed.MEDIA.decimals,
                        version: 4
                    },
                    ROPE_USDC_V4: {
                        symbol: "ROPE-USDC",
                        name: "ROPE-USDC V4 LP",
                        mint: "Cq4HyW5xia37tKejPF2XfZeXQoPYW6KfbPvxvw5eRoUE",
                        base: ed.ROPE,
                        quote: ed.USDC,
                        decimals: ed.ROPE.decimals,
                        version: 4
                    },
                    MER_USDC_V4: {
                        symbol: "MER-USDC",
                        name: "MER-USDC V4 LP",
                        mint: "3H9NxvaZoxMZZDZcbBDdWMKbrfNj7PCF5sbRwDr7SdDW",
                        base: ed.MER,
                        quote: ed.USDC,
                        decimals: ed.MER.decimals,
                        version: 4
                    },
                    COPE_USDC_V4: {
                        symbol: "COPE-USDC",
                        name: "COPE-USDC V4 LP",
                        mint: "Cz1kUvHw98imKkrqqu95GQB9h1frY8RikxPojMwWKGXf",
                        base: ed.COPE,
                        quote: ed.USDC,
                        decimals: ed.COPE.decimals,
                        version: 4
                    },
                    ALEPH_USDC_V4: {
                        symbol: "ALEPH-USDC",
                        name: "ALEPH-USDC V4 LP",
                        mint: "iUDasAP2nXm5wvTukAHEKSdSXn8vQkRtaiShs9ceGB7",
                        base: ed.ALEPH,
                        quote: ed.USDC,
                        decimals: ed.ALEPH.decimals,
                        version: 4
                    },
                    TULIP_USDC_V4: {
                        symbol: "TULIP-USDC",
                        name: "TULIP-USDC V4 LP",
                        mint: "2doeZGLJyACtaG9DCUyqMLtswesfje1hjNA11hMdj6YU",
                        base: ed.TULIP,
                        quote: ed.USDC,
                        decimals: ed.TULIP.decimals,
                        version: 4
                    },
                    WOO_USDC_V4: {
                        symbol: "WOO-USDC",
                        name: "WOO-USDC V4 LP",
                        mint: "7cu42ao8Jgrd5A3y3bNQsCxq5poyGZNmTydkGfJYQfzh",
                        base: ed.WOO,
                        quote: ed.USDC,
                        decimals: ed.WOO.decimals,
                        version: 4
                    },
                    SNY_USDC_V4: {
                        symbol: "SNY-USDC",
                        name: "SNY-USDC V4 LP",
                        mint: "G8qcfeFqxwbCqpxv5LpLWxUCd1PyMB5nWb5e5YyxLMKg",
                        base: ed.SNY,
                        quote: ed.USDC,
                        decimals: ed.SNY.decimals,
                        version: 4
                    },
                    BOP_RAY_V4: {
                        symbol: "BOP-RAY",
                        name: "BOP-RAY V4 LP",
                        mint: "9nQPYJvysyfnXhQ6nkK5V7sZG26hmDgusfdNQijRk5LD",
                        base: ed.BOP,
                        quote: ed.RAY,
                        decimals: ed.BOP.decimals,
                        version: 4
                    },
                    SLRS_USDC_V4: {
                        symbol: "SLRS-USDC",
                        name: "SLRS-USDC V4 LP",
                        mint: "2Xxbm1hdv5wPeen5ponDSMT3VqhGMTQ7mH9stNXm9shU",
                        base: ed.SLRS,
                        quote: ed.USDC,
                        decimals: ed.SLRS.decimals,
                        version: 4
                    },
                    SAMO_RAY_V4: {
                        symbol: "SAMO-RAY",
                        name: "SAMO-RAY V4 LP",
                        mint: "HwzkXyX8B45LsaHXwY8su92NoRBS5GQC32HzjQRDqPnr",
                        base: ed.SAMO,
                        quote: ed.RAY,
                        decimals: ed.SAMO.decimals,
                        version: 4
                    },
                    renBTC_USDC_V4: {
                        symbol: "renBTC-USDC",
                        name: "renBTC-USDC V4 LP",
                        mint: "CTEpsih91ZLo5gunvryLpJ3pzMjmt5jbS6AnSQrzYw7V",
                        base: ed.renBTC,
                        quote: ed.USDC,
                        decimals: ed.renBTC.decimals,
                        version: 4
                    },
                    renDOGE_USDC_V4: {
                        symbol: "renDOGE-USDC",
                        name: "renDOGE-USDC V4 LP",
                        mint: "Hb8KnZNKvRxu7pgMRWJgoMSMcepfvNiBFFDDrdf9o3wA",
                        base: ed.renDOGE,
                        quote: ed.USDC,
                        decimals: ed.renDOGE.decimals,
                        version: 4
                    },
                    RAY_USDC_V4: {
                        symbol: "RAY-USDC",
                        name: "RAY-USDC V4 LP",
                        mint: "FbC6K13MzHvN42bXrtGaWsvZY9fxrackRSZcBGfjPc7m",
                        base: ed.RAY,
                        quote: ed.USDC,
                        decimals: ed.RAY.decimals,
                        version: 4
                    },
                    RAY_SRM_V4: {
                        symbol: "RAY-SRM",
                        name: "RAY-SRM V4 LP",
                        mint: "7P5Thr9Egi2rvMmEuQkLn8x8e8Qro7u2U7yLD2tU2Hbe",
                        base: ed.RAY,
                        quote: ed.SRM,
                        decimals: ed.RAY.decimals,
                        version: 4
                    },
                    RAY_ETH_V4: {
                        symbol: "RAY-ETH",
                        name: "RAY-ETH V4 LP",
                        mint: "mjQH33MqZv5aKAbKHi8dG3g3qXeRQqq1GFcXceZkNSr",
                        base: ed.RAY,
                        quote: ed.ETH,
                        decimals: ed.RAY.decimals,
                        version: 4
                    },
                    RAY_SOL_V4: {
                        symbol: "RAY-SOL",
                        name: "RAY-SOL V4 LP",
                        mint: "89ZKE4aoyfLBe2RuV6jM3JGNhaV18Nxh8eNtjRcndBip",
                        base: ed.RAY,
                        quote: ed.WSOL,
                        decimals: ed.RAY.decimals,
                        version: 4
                    },
                    DXL_USDC_V4: {
                        symbol: "DXL-USDC",
                        name: "DXL-USDC V4 LP",
                        mint: "4HFaSvfgskipvrzT1exoVKsUZ174JyExEsA8bDfsAdY5",
                        base: ed.DXL,
                        quote: ed.USDC,
                        decimals: ed.DXL.decimals,
                        version: 4
                    },
                    LIKE_USDC_V4: {
                        symbol: "LIKE-USDC",
                        name: "LIKE-USDC V4 LP",
                        mint: "cjZmbt8sJgaoyWYUttomAu5LJYU44ZrcKTbzTSEPDVw",
                        base: ed.LIKE,
                        quote: ed.USDC,
                        decimals: ed.LIKE.decimals,
                        version: 4
                    },
                    mSOL_USDC_V4: {
                        symbol: "mSOL-USDC",
                        name: "mSOL-USDC V4 LP",
                        mint: "4xTpJ4p76bAeggXoYywpCCNKfJspbuRzZ79R7pRhbqSf",
                        base: ed.mSOL,
                        quote: ed.USDC,
                        decimals: ed.mSOL.decimals,
                        version: 4
                    },
                    mSOL_SOL_V4: {
                        symbol: "mSOL-SOL",
                        name: "mSOL-SOL V4 LP",
                        mint: "5ijRoAHVgd5T5CNtK5KDRUBZ7Bffb69nktMj5n6ks6m4",
                        base: ed.mSOL,
                        quote: ed.WSOL,
                        decimals: ed.mSOL.decimals,
                        version: 4
                    },
                    MER_PAI_V4: {
                        symbol: "MER-PAI",
                        name: "MER-PAI V4 LP",
                        mint: "DU5RT2D9EviaSmX6Ta8MZwMm85HwSEqGMRdqUiuCGfmD",
                        base: ed.MER,
                        quote: ed.PAI,
                        decimals: ed.MER.decimals,
                        version: 4
                    },
                    PORT_USDC_V4: {
                        symbol: "PORT-USDC",
                        name: "PORT-USDC V4 LP",
                        mint: "9tmNtbUCrLS15qC4tEfr5NNeqcqpZ4uiGgi2vS5CLQBS",
                        base: ed.PORT,
                        quote: ed.USDC,
                        decimals: ed.PORT.decimals,
                        version: 4
                    },
                    MNGO_USDC_V4: {
                        symbol: "MNGO-USDC",
                        name: "MNGO-USDC V4 LP",
                        mint: "DkiqCQ792n743xjWQVCbBUaVtkdiuvQeYndM53ReWnCC",
                        base: ed.MNGO,
                        quote: ed.USDC,
                        decimals: ed.MNGO.decimals,
                        version: 4
                    },
                    ATLAS_USDC_V4: {
                        symbol: "ATLAS-USDC",
                        name: "ATLAS-USDC V4 LP",
                        mint: "9shGU9f1EsxAbiR567MYZ78WUiS6ZNCYbHe53WUULQ7n",
                        base: ed.ATLAS,
                        quote: ed.USDC,
                        decimals: ed.ATLAS.decimals,
                        version: 4
                    },
                    POLIS_USDC_V4: {
                        symbol: "POLIS-USDC",
                        name: "POLIS-USDC V4 LP",
                        mint: "8MbKSBpyXs8fVneKgt71jfHrn5SWtX8n4wMLpiVfF9So",
                        base: ed.POLIS,
                        quote: ed.USDC,
                        decimals: ed.POLIS.decimals,
                        version: 4
                    },
                    ATLAS_RAY_V4: {
                        symbol: "ATLAS-RAY",
                        name: "ATLAS-RAY V4 LP",
                        mint: "418MFhkaYQtbn529wmjLLqL6uKxDz7j4eZBaV1cobkyd",
                        base: ed.ATLAS,
                        quote: ed.RAY,
                        decimals: ed.ATLAS.decimals,
                        version: 4
                    },
                    POLIS_RAY_V4: {
                        symbol: "POLIS-RAY",
                        name: "POLIS-RAY V4 LP",
                        mint: "9ysGKUH6WqzjQEUT4dxqYCUaFNVK9QFEa24pGzjFq8xg",
                        base: ed.POLIS,
                        quote: ed.RAY,
                        decimals: ed.POLIS.decimals,
                        version: 4
                    },
                    ALEPH_RAY_V4: {
                        symbol: "ALEPH-RAY",
                        name: "ALEPH-RAY V4 LP",
                        mint: "n76skjqv4LirhdLok2zJELXNLdRpYDgVJQuQFbamscy",
                        base: ed.ALEPH,
                        quote: ed.RAY,
                        decimals: ed.ALEPH.decimals,
                        version: 4
                    },
                    TULIP_RAY_V4: {
                        symbol: "TULIP-RAY",
                        name: "TULIP-RAY V4 LP",
                        mint: "3AZTviji5qduMG2s4FfWGR3SSQmNUCyx8ao6UKCPg3oJ",
                        base: ed.TULIP,
                        quote: ed.RAY,
                        decimals: ed.TULIP.decimals,
                        version: 4
                    },
                    SLRS_RAY_V4: {
                        symbol: "SLRS-RAY",
                        name: "SLRS-RAY V4 LP",
                        mint: "2pk78vsKT3jfJAcN2zbpMUnrR57SZrxHqaZYyFgp92mM",
                        base: ed.SLRS,
                        quote: ed.RAY,
                        decimals: ed.SLRS.decimals,
                        version: 4
                    },
                    MER_RAY_V4: {
                        symbol: "MER-RAY",
                        name: "MER-RAY V4 LP",
                        mint: "214hxy3AbKoaEKgqcg2aC1cP5R67cGGAyDEg5GDwC7Ub",
                        base: ed.MER,
                        quote: ed.RAY,
                        decimals: ed.MER.decimals,
                        version: 4
                    },
                    MEDIA_RAY_V4: {
                        symbol: "MEDIA-RAY",
                        name: "MEDIA-RAY V4 LP",
                        mint: "9Aseg5A1JD1yCiFFdDaNNxCiJ7XzrpZFmcEmLjXFdPaH",
                        base: ed.MEDIA,
                        quote: ed.RAY,
                        decimals: ed.MEDIA.decimals,
                        version: 4
                    },
                    SNY_RAY_V4: {
                        symbol: "SNY-RAY",
                        name: "SNY-RAY V4 LP",
                        mint: "2k4quTuuLUxrSEhFH99qcoZzvgvVEc3b5sz3xz3qstfS",
                        base: ed.SNY,
                        quote: ed.RAY,
                        decimals: ed.SNY.decimals,
                        version: 4
                    },
                    LIKE_RAY_V4: {
                        symbol: "LIKE-RAY",
                        name: "LIKE-RAY V4 LP",
                        mint: "7xqDycbFSCpUpzkYapFeyPJWPwEpV7zdWbYf2MVHTNjv",
                        base: ed.LIKE,
                        quote: ed.RAY,
                        decimals: ed.LIKE.decimals,
                        version: 4
                    },
                    COPE_RAY_V4: {
                        symbol: "COPE-RAY",
                        name: "COPE-RAY V4 LP",
                        mint: "A7GCVHA8NSsbdFscHdoNU41tL1TRKNmCH4K94CgcLK9F",
                        base: ed.COPE,
                        quote: ed.RAY,
                        decimals: ed.COPE.decimals,
                        version: 4
                    },
                    ETH_SOL_V4: {
                        symbol: "ETH-SOL",
                        name: "ETH-SOL V4 LP",
                        mint: "GKfgC86iJoMjwAtcyiLu6nWnjggqUXsDQihXkP14fDez",
                        base: ed.ETH,
                        quote: ed.WSOL,
                        decimals: ed.ETH.decimals,
                        version: 4
                    },
                    stSOL_USDC_V4: {
                        symbol: "stSOL-USDC",
                        name: "stSOL-USDC V4 LP",
                        mint: "HDUJMwYZkjUZre63xUeDhdCi8c6LgUDiBqxmP3QC3VPX",
                        base: ed.stSOL,
                        quote: ed.USDC,
                        decimals: ed.stSOL.decimals,
                        version: 4
                    },
                    GRAPE_USDC_V4: {
                        symbol: "GRAPE-USDC",
                        name: "GRAPE-USDC V4 LP",
                        mint: "A8ZYmnZ1vwxUa4wpJVUaJgegsuTEz5TKy5CiJXffvmpt",
                        base: ed.GRAPE,
                        quote: ed.USDC,
                        decimals: ed.GRAPE.decimals,
                        version: 4
                    },
                    LARIX_USDC_V4: {
                        symbol: "LARIX-USDC",
                        name: "LARIX-USDC V4 LP",
                        mint: "7yieit4YsNsZ9CAK8H5ZEMvvk35kPEHHeXwp6naoWU9V",
                        base: ed.LARIX,
                        quote: ed.USDC,
                        decimals: ed.LARIX.decimals,
                        version: 4
                    },
                    RIN_USDC_V4: {
                        symbol: "RIN-USDC",
                        name: "RIN-USDC V4 LP",
                        mint: "GfCWfrZez7BDmCSEeMERVDVUaaM2TEreyYUgb2cpuS3w",
                        base: ed.RIN,
                        quote: ed.USDC,
                        decimals: ed.RIN.decimals,
                        version: 4
                    },
                    APEX_USDC_V4: {
                        symbol: "APEX-USDC",
                        name: "APEX-USDC V4 LP",
                        mint: "444cVqYyDxJNo6FqiMb9qQWFUd7tYzFRdDuJRFrSAGnU",
                        base: ed.APEX,
                        quote: ed.USDC,
                        decimals: ed.APEX.decimals,
                        version: 4
                    },
                    mSOL_RAY_V4: {
                        symbol: "mSOL-RAY",
                        name: "mSOL-RAY V4 LP",
                        mint: "De2EHBAdkgfc72DpShqDGG42cV3iDWh8wvvZdPsiEcqP",
                        base: ed.mSOL,
                        quote: ed.RAY,
                        decimals: ed.mSOL.decimals,
                        version: 4
                    },
                    MNDE_mSOL_V4: {
                        symbol: "MNDE-mSOL",
                        name: "MNDE-mSOL V4 LP",
                        mint: "4bh8XCzTHSbqbWN8o1Jn4ueBdz1LvJFoEasN6K6CQ8Ny",
                        base: ed.MNDE,
                        quote: ed.mSOL,
                        decimals: ed.MNDE.decimals,
                        version: 4
                    },
                    LARIX_RAY_V4: {
                        symbol: "LARIX-RAY",
                        name: "LARIX-RAY V4 LP",
                        mint: "ZRDfSLgWGeaYSmhdPvFNKQQhDcYdZQaue2N8YDmHX4q",
                        base: ed.LARIX,
                        quote: ed.RAY,
                        decimals: ed.LARIX.decimals,
                        version: 4
                    },
                    LIQ_USDC_V4: {
                        symbol: "LIQ-USDC",
                        name: "LIQ-USDC V4 LP",
                        mint: "GWpD3eTfhJB5KDCcnE85dBQrjAk2CsrgDF9b52R9CrjV",
                        base: ed.LIQ,
                        quote: ed.USDC,
                        decimals: ed.LIQ.decimals,
                        version: 4
                    },
                    WAG_USDC_V4: {
                        symbol: "WAG-USDC",
                        name: "WAG-USDC V4 LP",
                        mint: "4yykyPugitUVRewNPXXCviRvxGfsfsRMoP32z3b6FmUC",
                        base: ed.WAG,
                        quote: ed.USDC,
                        decimals: ed.WAG.decimals,
                        version: 4
                    },
                    ETH_mSOL_V4: {
                        symbol: "ETH-mSOL",
                        name: "ETH-mSOL V4 LP",
                        mint: "HYv3grQfi8QbV7nG7EFgNK1aJSrsJ7HynXJKJVPLL2Uh",
                        base: ed.ETH,
                        quote: ed.mSOL,
                        decimals: ed.ETH.decimals,
                        version: 4
                    },
                    mSOL_USDT_V4: {
                        symbol: "mSOL-USDT",
                        name: "mSOL-USDT V4 LP",
                        mint: "69NCmEW9mGpiWLjAcAWHq51k4ionJZmzgRfRT3wQaCCf",
                        base: ed.mSOL,
                        quote: ed.USDT,
                        decimals: ed.mSOL.decimals,
                        version: 4
                    },
                    BTC_mSOL_V4: {
                        symbol: "BTC-mSOL",
                        name: "BTC-mSOL V4 LP",
                        mint: "92bcERNtUmuaJ6mwLSxYHZYSph37jdKxRdoYNxpcYNPp",
                        base: ed.BTC,
                        quote: ed.mSOL,
                        decimals: ed.BTC.decimals,
                        version: 4
                    },
                    SLIM_SOL_V4: {
                        symbol: "SLIM-SOL",
                        name: "SLIM-SOL V4 LP",
                        mint: "9X4EK8E59VAVi6ChnNvvd39m6Yg9RtkBbAPq1mDVJT57",
                        base: ed.SLIM,
                        quote: ed.WSOL,
                        decimals: ed.SLIM.decimals,
                        version: 4
                    },
                    AURY_USDC_V4: {
                        symbol: "AURY-USDC",
                        name: "AURY-USDC V4 LP",
                        mint: "Gub5dvTy4nzP82qpmpNkBxmRqjtqRddBTBqHSdNcf2oS",
                        base: ed.AURY,
                        quote: ed.USDC,
                        decimals: ed.AURY.decimals,
                        version: 4
                    },
                    PRT_SOL_V4: {
                        symbol: "PRT-SOL",
                        name: "PRT-SOL V4 LP",
                        mint: "EcJ8Wgwt1AzSPiDpVr6aaSur8TKAsNTPmmzRACeqT68Z",
                        base: ed.PRT,
                        quote: ed.WSOL,
                        decimals: ed.PRT.decimals,
                        version: 4
                    },
                    LIQ_RAY_V4: {
                        symbol: "LIQ-RAY",
                        name: "LIQ-RAY V4 LP",
                        mint: "49YUsDrThJosHSagCn1F59Uc9NRxbr9thVrZikUnQDXy",
                        base: ed.LIQ,
                        quote: ed.RAY,
                        decimals: ed.LIQ.decimals,
                        version: 4
                    },
                    SYP_SOL_V4: {
                        symbol: "SYP-SOL",
                        name: "SYP-SOL V4 LP",
                        mint: "KHV6dfj2bDntzJ9z1S26cDfqWfUZdJRFmteLR6LxHwW",
                        base: ed.SYP,
                        quote: ed.WSOL,
                        decimals: ed.SYP.decimals,
                        version: 4
                    },
                    SYP_RAY_V4: {
                        symbol: "SYP-RAY",
                        name: "SYP-RAY V4 LP",
                        mint: "FT2KZqxxM8F2h9pZtTF4PyjK88bM4YbuBzd7ZPwQ5wMB",
                        base: ed.SYP,
                        quote: ed.RAY,
                        decimals: ed.SYP.decimals,
                        version: 4
                    },
                    SYP_USDC_V4: {
                        symbol: "SYP-USDC",
                        name: "SYP-USDC V4 LP",
                        mint: "2xJGuLAivAR1WkARRA6zP1v4jaA9jV2Qis8JfMNvrVyZ",
                        base: ed.SYP,
                        quote: ed.USDC,
                        decimals: ed.SYP.decimals,
                        version: 4
                    },
                    FAB_USDC_V4: {
                        symbol: "FAB-USDC",
                        name: "FAB-USDC V4 LP",
                        mint: "5rTCvZq6BcApsC3VV1EEUuTJfaVd8uYhcGjwTy1By6P8",
                        base: ed.FAB,
                        quote: ed.USDC,
                        decimals: ed.FAB.decimals,
                        version: 4
                    },
                    WOOF_RAY_V4: {
                        symbol: "WOOF-RAY",
                        name: "WOOF-RAY V4 LP",
                        mint: "H2FAnazDaGFutcmnrwDxhmdncR1Bd7GG4mhPCSUiamDX",
                        base: ed.WOOF,
                        quote: ed.RAY,
                        decimals: ed.WOOF.decimals,
                        version: 4
                    },
                    WOOF_USDC_V4: {
                        symbol: "WOOF-USDC",
                        name: "WOOF-USDC V4 LP",
                        mint: "EFSu5TMc1ijRevaYCxUkS7uGvbhsymDHEaTK3UVdNE3q",
                        base: ed.WOOF,
                        quote: ed.USDC,
                        decimals: ed.WOOF.decimals,
                        version: 4
                    },
                    SLND_USDC_V4: {
                        symbol: "SLND-USDC",
                        name: "SLND-USDC V4 LP",
                        mint: "EunE9uDh2cGsyJcsGuGKc6wte7kBn8iye2gzC4w2ePHn",
                        base: ed.SLND,
                        quote: ed.USDC,
                        decimals: ed.SLND.decimals,
                        version: 4
                    },
                    FRKT_SOL_V4: {
                        symbol: "FRKT-SOL",
                        name: "FRKT-SOL V4 LP",
                        mint: "HYUKXgpjaxMXHttyrFYtv3z2rdhZ1U9QDH8zEc8BooQC",
                        base: ed.FRKT,
                        quote: ed.WSOL,
                        decimals: ed.FRKT.decimals,
                        version: 4
                    },
                    weWETH_SOL_V4: {
                        symbol: "weWETH-SOL",
                        name: "weWETH-SOL V4 LP",
                        mint: "3hbozt2Por7bcrGod8N7kEeJNMocFFjCJrQR16TQGBrE",
                        base: ed.weWETH,
                        quote: ed.WSOL,
                        decimals: ed.weWETH.decimals,
                        version: 4
                    },
                    weWETH_USDC_V4: {
                        symbol: "weWETH-USDC",
                        name: "weWETH-USDC V4 LP",
                        mint: "3529SBnMCDW3S3xQ52aABbRHo7PcHvpQA4no8J12L5eK",
                        base: ed.weWETH,
                        quote: ed.USDC,
                        decimals: ed.weWETH.decimals,
                        version: 4
                    },
                    weUNI_USDC_V4: {
                        symbol: "weUNI-USDC",
                        name: "weUNI-USDC V4 LP",
                        mint: "EEC4QnT41py39QaYnzQnoYQEtDUDNa6Se8SBDgfPSN2a",
                        base: ed.weUNI,
                        quote: ed.USDC,
                        decimals: ed.weUNI.decimals,
                        version: 4
                    },
                    weSUSHI_USDC_V4: {
                        symbol: "weSUSHI-USDC",
                        name: "weSUSHI-USDC V4 LP",
                        mint: "3wVrtQZsiDNp5yTPyfEzQHPU6iuJoMmpnWg6CTt4V8sR",
                        base: ed.weSUSHI,
                        quote: ed.USDC,
                        decimals: ed.weSUSHI.decimals,
                        version: 4
                    },
                    CYS_USDC_V4: {
                        symbol: "CYS-USDC",
                        name: "CYS-USDC V4 LP",
                        mint: "GfV3QDzzdVUwCNSdfn6PjhmyJvjw18tn51RingWZYwk3",
                        base: ed.CYS,
                        quote: ed.USDC,
                        decimals: ed.CYS.decimals,
                        version: 4
                    },
                    SAMO_USDC_V4: {
                        symbol: "SAMO-USDC",
                        name: "SAMO-USDC V4 LP",
                        mint: "B2PjGEP3vPf1999fUD14pYdxvSDRVBk43hxB2rgthwEY",
                        base: ed.SAMO,
                        quote: ed.USDC,
                        decimals: ed.SAMO.decimals,
                        version: 4
                    },
                    ABR_USDC_V4: {
                        symbol: "ABR-USDC",
                        name: "ABR-USDC V4 LP",
                        mint: "ECHfxkf5zjjZFTX95QfFahNyzG7feyEKcfTdjsdrMSGU",
                        base: ed.ABR,
                        quote: ed.USDC,
                        decimals: ed.ABR.decimals,
                        version: 4
                    },
                    IN_USDC_V4: {
                        symbol: "IN-USDC",
                        name: "IN-USDC V4 LP",
                        mint: "GbmJtVgg9fRmmmjKUYGMZeSt8wZ47cDDXasg5Y3iF4kz",
                        base: ed.IN,
                        quote: ed.USDC,
                        decimals: ed.IN.decimals,
                        version: 4
                    },
                    weDYDX_USDC_V4: {
                        symbol: "weDYDX-USDC",
                        name: "weDYDX-USDC V4 LP",
                        mint: "BjkkMZnnzmgLqzGErzDbkk15ozv48iVKQuunpeM2Hqnk",
                        base: ed.weDYDX,
                        quote: ed.USDC,
                        decimals: ed.weDYDX.decimals,
                        version: 4
                    },
                    STARS_USDC_V4: {
                        symbol: "STARS-USDC",
                        name: "STARS-USDC V4 LP",
                        mint: "FJ68q7NChhETcGVdinMbM2FF1Cy79dpmUi6HC83K55Hv",
                        base: ed.STARS,
                        quote: ed.USDC,
                        decimals: ed.STARS.decimals,
                        version: 4
                    },
                    weAXS_USDC_V4: {
                        symbol: "weAXS-USDC",
                        name: "weAXS-USDC V4 LP",
                        mint: "6PSoJQ7myQ1BJtbQC6oiWR8HSecQGyoWsPYTZRJo2ci3",
                        base: ed.weAXS,
                        quote: ed.USDC,
                        decimals: ed.weAXS.decimals,
                        version: 4
                    },
                    weSHIB_USDC_V4: {
                        symbol: "weSHIB-USDC",
                        name: "weSHIB-USDC V4 LP",
                        mint: "AcjX5pmTMGSgxkdxc3r82r6WMKBvS6eQXXFz5ck5KKUa",
                        base: ed.weSHIB,
                        quote: ed.USDC,
                        decimals: ed.weSHIB.decimals,
                        version: 4
                    },
                    SBR_USDC_V4: {
                        symbol: "SBR-USDC",
                        name: "SBR-USDC V4 LP",
                        mint: "9FC8xTFRbgTpuZZYAYnZLxgnQ8r7FwfSBM1SWvGwgF7s",
                        base: ed.SBR,
                        quote: ed.USDC,
                        decimals: ed.SBR.decimals,
                        version: 4
                    },
                    OXS_USDC_V4: {
                        symbol: "OXS-USDC",
                        name: "OXS-USDC V4 LP",
                        mint: "et9pdjWm97rbmsJoN183GkFV5qzTGru79GE1Zhe7NTU",
                        base: ed.OXS,
                        quote: ed.USDC,
                        decimals: ed.OXS.decimals,
                        version: 4
                    },
                    CWAR_USDC_V4: {
                        symbol: "CWAR-USDC",
                        name: "CWAR-USDC V4 LP",
                        mint: "HjR23bxn2gtRDB2P1Tm3DLepAPPZgazsWJpLG9wqjnYR",
                        base: ed.CWAR,
                        quote: ed.USDC,
                        decimals: ed.CWAR.decimals,
                        version: 4
                    },
                    UPS_USDC_V4: {
                        symbol: "UPS-USDC",
                        name: "UPS-USDC V4 LP",
                        mint: "9hSUZdREEsbaYaKY4FouvXr7xyAqtpdHRDoYCb6Mb28a",
                        base: ed.UPS,
                        quote: ed.USDC,
                        decimals: ed.UPS.decimals,
                        version: 4
                    },
                    weSAND_USDC_V4: {
                        symbol: "weSAND-USDC",
                        name: "weSAND-USDC V4 LP",
                        mint: "3dADrQa7utyiCsaFeVk9r7oebW1WheowhKo5soBYKBVT",
                        base: ed.weSAND,
                        quote: ed.USDC,
                        decimals: ed.weSAND.decimals,
                        version: 4
                    },
                    weMANA_USDC_V4: {
                        symbol: "weMANA-USDC",
                        name: "weMANA-USDC V4 LP",
                        mint: "HpUkVAPRJ5zNRuJ1ZwMXEhbMHL3gSuPb2QuSER9YUd3a",
                        base: ed.weMANA,
                        quote: ed.USDC,
                        decimals: ed.weMANA.decimals,
                        version: 4
                    },
                    CAVE_USDC_V4: {
                        symbol: "CAVE-USDC",
                        name: "CAVE-USDC V4 LP",
                        mint: "5Gba1k3fU7Vh7UtAiBmie9vhQNNq1JfEwgn1DPGZ7NKQ",
                        base: ed.CAVE,
                        quote: ed.USDC,
                        decimals: ed.CAVE.decimals,
                        version: 4
                    },
                    GENE_USDC_V4: {
                        symbol: "GENE-USDC",
                        name: "GENE-USDC V4 LP",
                        mint: "7GKvfHEXenNiWYbJBKae89mdaMPr5gGMYwZmyC8gBNVG",
                        base: ed.GENE,
                        quote: ed.USDC,
                        decimals: ed.GENE.decimals,
                        version: 4
                    },
                    GENE_RAY_V4: {
                        symbol: "GENE-RAY",
                        name: "GENE-RAY V4 LP",
                        mint: "3HzXnc1qZ8mGqun18Ck3KA616XnZNqF1RWbgYE2nGRMA",
                        base: ed.GENE,
                        quote: ed.RAY,
                        decimals: ed.GENE.decimals,
                        version: 4
                    },
                    APT_USDC_V4: {
                        symbol: "APT-USDC",
                        name: "APT-USDC V4 LP",
                        mint: "Hk8mDAJFq4E9kF3DtNgPFwzbo5kbeiusNFJgWmo3LoQ5",
                        base: ed.APT,
                        quote: ed.USDC,
                        decimals: ed.APT.decimals,
                        version: 4
                    },
                    GOFX_USDC_V4: {
                        symbol: "GOFX-USDC",
                        name: "GOFX-USDC V4 LP",
                        mint: "4svqAwrLPGRDCQuuieYTmtLXF75wiahjeK2rEN9tY1YL",
                        base: ed.GOFX,
                        quote: ed.USDC,
                        decimals: ed.GOFX.decimals,
                        version: 4
                    },
                    SONAR_USDC_V4: {
                        symbol: "SONAR-USDC",
                        name: "SONAR-USDC V4 LP",
                        mint: "2tAcfqJ1YYjpGLqwh76kyNt9VaNFDd4fJySfH6SmWfKt",
                        base: ed.SONAR,
                        quote: ed.USDC,
                        decimals: ed.SONAR.decimals,
                        version: 4
                    },
                    JSOL_SOL_V4: {
                        symbol: "JSOL-SOL",
                        name: "JSOL-SOL V4 LP",
                        mint: "61z37rpHsU6d3Fq5sUjJ85K6tXGzkoYKDAG3kPJQNDRo",
                        base: ed.JSOL,
                        quote: ed.WSOL,
                        decimals: ed.JSOL.decimals,
                        version: 4
                    },
                    JSOL_USDC_V4: {
                        symbol: "JSOL-USDC",
                        name: "JSOL-USDC V4 LP",
                        mint: "3JZqf2VPNxj1kDZQsfzC7myM6spsGQbGuFv1gVfdYosN",
                        base: ed.JSOL,
                        quote: ed.USDC,
                        decimals: ed.JSOL.decimals,
                        version: 4
                    },
                    SHILL_USDC_V4: {
                        symbol: "SHILL-USDC",
                        name: "SHILL-USDC V4 LP",
                        mint: "CnUhYBtQEbSBZ76bgxAouVCTCb8rofZzwerVF5z5LREJ",
                        base: ed.SHILL,
                        quote: ed.USDC,
                        decimals: ed.SHILL.decimals,
                        version: 4
                    },
                    DFL_USDC_V4: {
                        symbol: "DFL-USDC",
                        name: "DFL-USDC V4 LP",
                        mint: "Fffijd6UVJdQeLVXhenS8YcsnMUdWJqpbBeH42LFkXgS",
                        base: ed.DFL,
                        quote: ed.USDC,
                        decimals: ed.DFL.decimals,
                        version: 4
                    },
                    BOKU_USDC_V4: {
                        symbol: "BOKU-USDC",
                        name: "BOKU-USDC V4 LP",
                        mint: "8jjQn5Yagb6Nm2WGAxPW1bcGqrTWpg5adf6QukXEarcP",
                        base: ed.BOKU,
                        quote: ed.USDC,
                        decimals: ed.BOKU.decimals,
                        version: 4
                    },
                    MIMO_SOL_V4: {
                        symbol: "MIMO-SOL",
                        name: "MIMO-SOL V4 LP",
                        mint: "HUJ1opSk8AiPfDT47r7n4hTiK2EXgrR3Msy7T8q1BywS",
                        base: ed.MIMO,
                        quote: ed.WSOL,
                        decimals: ed.MIMO.decimals,
                        version: 4
                    },
                    wbWBNB_USDC_V4: {
                        symbol: "wbWBNB-USDC",
                        name: "wbWBNB-USDC V4 LP",
                        mint: "FEsEfEJJSfiMQcshUgZ5UigfytfGRQ3z5puyF6DXDp9C",
                        base: ed.wbWBNB,
                        quote: ed.USDC,
                        decimals: ed.wbWBNB.decimals,
                        version: 4
                    },
                    wePEOPLE_USDC_V4: {
                        symbol: "wePEOPLE-USDC",
                        name: "wePEOPLE-USDC V4 LP",
                        mint: "3e5ZCKi4etorpV4pv1fSckP5iJD67xcUkx3RtFCZhbzD",
                        base: ed.wePEOPLE,
                        quote: ed.USDC,
                        decimals: ed.wePEOPLE.decimals,
                        version: 4
                    },
                    ISOLA_USDT_V4: {
                        symbol: "ISOLA-USDT",
                        name: "ISOLA-USDT V4 LP",
                        mint: "H8s1wQsZpRK61pyLF3XwyQc6E8vNUnwRDhy3TBDCDENQ",
                        base: ed.ISOLA,
                        quote: ed.USDT,
                        decimals: ed.ISOLA.decimals,
                        version: 4
                    },
                    SPWN_USDC_V4: {
                        symbol: "SPWN-USDC",
                        name: "SPWN-USDC V4 LP",
                        mint: "B5uyCAQcX6nAjZypLgiivbEKabSptgUb8JK9tkaSnqdW",
                        base: ed.SPWN,
                        quote: ed.USDC,
                        decimals: ed.SPWN.decimals,
                        version: 4
                    },
                    STR_USDC_V4: {
                        symbol: "STR-USDC",
                        name: "STR-USDC V4 LP",
                        mint: "8uDVKmVwNmbXHDB7rNKqtpcT9VAsFHTJ5pPYxjyoBbNg",
                        base: ed.STR,
                        quote: ed.USDC,
                        decimals: ed.STR.decimals,
                        version: 4
                    },
                    SOLC_USDT_V4: {
                        symbol: "SOLC-USDT",
                        name: "SOLC-USDT V4 LP",
                        mint: "2g9JzTWycLzK4KEBBHsponAtZRee2ii63bRrJ8tefEyt",
                        base: ed.SOLC,
                        quote: ed.USDT,
                        decimals: ed.SOLC.decimals,
                        version: 4
                    },
                    VI_USDC_V4: {
                        symbol: "VI-USDC",
                        name: "VI-USDC V4 LP",
                        mint: "3MwHyHCRfVqtH3ABFtdKXdY9dwemr9GGxQFaBkeq6NjY",
                        base: ed.VI,
                        quote: ed.USDC,
                        decimals: ed.VI.decimals,
                        version: 4
                    },
                    KKO_USDC_V4: {
                        symbol: "KKO-USDC",
                        name: "KKO-USDC V4 LP",
                        mint: "7xr1Doc1NiMWbUg99YVFqQSLfYXNzo6YvacXUsSgBMNW",
                        base: ed.KKO,
                        quote: ed.USDC,
                        decimals: ed.KKO.decimals,
                        version: 4
                    },
                    XTAG_USDC_V4: {
                        symbol: "XTAG-USDC",
                        name: "XTAG-USDC V4 LP",
                        mint: "GCEQbLg4ik5YJ4CMcbtuVqEc4sjLdSGy34rFk1CtGjdg",
                        base: ed.XTAG,
                        quote: ed.USDC,
                        decimals: ed.XTAG.decimals,
                        version: 4
                    },
                    TTT_USDC_V4: {
                        symbol: "TTT-USDC",
                        name: "TTT-USDC V4 LP",
                        mint: "84fmrerHGohoRf4iLPDQ1KG4CjSjCRksYWGzjWfCRM8a",
                        base: ed.TTT,
                        quote: ed.USDC,
                        decimals: ed.TTT.decimals,
                        version: 4
                    },
                    RUN_USDC_V4: {
                        symbol: "RUN-USDC",
                        name: "RUN-USDC V4 LP",
                        mint: "CjTLvvKSQdEujcSzeZRYgk4w1DpuXBbMppLHaxZyz11Y",
                        base: ed.RUN,
                        quote: ed.USDC,
                        decimals: ed.RUN.decimals,
                        version: 4
                    },
                    CRWNY_USDC_V4: {
                        symbol: "CRWNY-USDC",
                        name: "CRWNY-USDC V4 LP",
                        mint: "H3D9Gyi4frRLW6bS9vBthDVDJyzyRJ6XhhpP6PJGWaDC",
                        base: ed.CRWNY,
                        quote: ed.USDC,
                        decimals: ed.CRWNY.decimals,
                        version: 4
                    },
                    CRWNY_RAY_V4: {
                        symbol: "CRWNY-RAY",
                        name: "CRWNY-RAY V4 LP",
                        mint: "5Cz9wGStNjiUg81q8t6sJJeckuT2C14CYSfyQbtYirSX",
                        base: ed.CRWNY,
                        quote: ed.RAY,
                        decimals: ed.CRWNY.decimals,
                        version: 4
                    },
                    BLOCK_USDC_V4: {
                        symbol: "BLOCK-USDC",
                        name: "BLOCK-USDC V4 LP",
                        mint: "8i44Y23GkkwDYZ5iSkVEqmrXUfwNmwo9grguTDWKM8wg",
                        base: ed.BLOCK,
                        quote: ed.USDC,
                        decimals: ed.BLOCK.decimals,
                        version: 4
                    },
                    REAL_USDC_V4: {
                        symbol: "REAL-USDC",
                        name: "REAL-USDC V4 LP",
                        mint: "EN43tp8xdkcM8RYSJ4msFHMPTJRXKhUteVYBDJLwTvr3",
                        base: ed.REAL,
                        quote: ed.USDC,
                        decimals: ed.REAL.decimals,
                        version: 4
                    },
                    FRKT_USDC_V4: {
                        symbol: "FRKT-USDC",
                        name: "FRKT-USDC V4 LP",
                        mint: "7MgzqVTGeA4wENme81QPTrPy45NJMKVL9XGwxmNT87cG",
                        base: ed.FRKT,
                        quote: ed.USDC,
                        decimals: ed.FRKT.decimals,
                        version: 4
                    },
                    MBS_USDC_V4: {
                        symbol: "MBS-USDC",
                        name: "MBS-USDC V4 LP",
                        mint: "BAgSWaPZpsQKyZJdvB5KyvmCNj6hzczzentt5FhDCVHb",
                        base: ed.MBS,
                        quote: ed.USDC,
                        decimals: ed.MBS.decimals,
                        version: 4
                    },
                    PRISM_USDC_V4: {
                        symbol: "PRISM-USDC",
                        name: "PRISM-USDC V4 LP",
                        mint: "3baYkTcudvSFMe25UpZcBfdp4FA5kL2E4pfaeJ8AiYJB",
                        base: ed.PRISM,
                        quote: ed.USDC,
                        decimals: ed.PRISM.decimals,
                        version: 4
                    },
                    CHICKS_USDC_V4: {
                        symbol: "CHICKS-USDC",
                        name: "CHICKS-USDC V4 LP",
                        mint: "CPzmcw81a6PDasSXhVLfDRKuTJXZPUqocS9VFf5zCFhs",
                        base: ed.CHICKS,
                        quote: ed.USDC,
                        decimals: ed.CHICKS.decimals,
                        version: 4
                    },
                    MEAN_RAY_V4: {
                        symbol: "MEAN-RAY",
                        name: "MEAN-RAY V4 LP",
                        mint: "H9wUyrxpAErmdNVPitpHSXgwoomoh91ggJKPWtQQoCn1",
                        base: ed.MEAN,
                        quote: ed.RAY,
                        decimals: ed.MEAN.decimals,
                        version: 4
                    },
                    TINY_USDC_V4: {
                        symbol: "TINY-USDC",
                        name: "TINY-USDC V4 LP",
                        mint: "Hho6ZzRDj49L4z6zog8nQZFaxMSz6FX6wNzVpMeAMen",
                        base: ed.TINY,
                        quote: ed.USDC,
                        decimals: ed.TINY.decimals,
                        version: 4
                    },
                    SCY_USDC_V4: {
                        symbol: "SCY-USDC",
                        name: "SCY-USDC V4 LP",
                        mint: "EcYk7t6Vw59HDnY2u6H1KDPkk8juMeA1NpGpHiGk1LDf",
                        base: ed.SCY,
                        quote: ed.USDC,
                        decimals: ed.SCY.decimals,
                        version: 4
                    }
                };
            U.from("token/util");
            class ef {
                constructor(e, t = "UNKNOWN", n = "UNKNOWN") {
                    this.decimals = e, this.symbol = t, this.name = n
                }
            }
            ef.SOL = new ef(el.decimals, el.symbol, el.name);
            class eg extends ef {
                constructor(e, t, n, i = "UNKNOWN", r = "UNKNOWN") {
                    super(n, i, r), this.programId = M(e), this.mint = M(t)
                }
                equals(e) {
                    return this === e || this.mint.equals(e.mint)
                }
            }

            function ew(e, t) {
                return e instanceof eg && t instanceof eg ? e.equals(t) : !(e instanceof eg) && !(t instanceof eg) && e === t
            }
            eg.WSOL = new eg(l.H_, em.mint, em.decimals, el.symbol, el.name);
            var eS = n(30539),
                eh = n.n(eS),
                ey = n(32402);
            let eA = n.n(ey)(),
                eb = U.from("entity/fraction"),
                ek = eA(T),
                eT = eA(eh()),
                eI = {
                    [no.ROUND_DOWN]: eT.ROUND_DOWN,
                    [no.ROUND_HALF_UP]: eT.ROUND_HALF_UP,
                    [no.ROUND_UP]: eT.ROUND_UP
                },
                eP = {
                    [no.ROUND_DOWN]: ek.roundDown,
                    [no.ROUND_HALF_UP]: ek.roundHalfUp,
                    [no.ROUND_UP]: ek.roundUp
                };
            class ev {
                constructor(e, t = er) {
                    this.numerator = ec(e), this.denominator = ec(t)
                }
                get quotient() {
                    return this.numerator.div(this.denominator)
                }
                invert() {
                    return new ev(this.denominator, this.numerator)
                }
                add(e) {
                    let t = e instanceof ev ? e : new ev(ec(e));
                    return this.denominator.eq(t.denominator) ? new ev(this.numerator.add(t.numerator), this.denominator) : new ev(this.numerator.mul(t.denominator).add(t.numerator.mul(this.denominator)), this.denominator.mul(t.denominator))
                }
                sub(e) {
                    let t = e instanceof ev ? e : new ev(ec(e));
                    return this.denominator.eq(t.denominator) ? new ev(this.numerator.sub(t.numerator), this.denominator) : new ev(this.numerator.mul(t.denominator).sub(t.numerator.mul(this.denominator)), this.denominator.mul(t.denominator))
                }
                mul(e) {
                    let t = e instanceof ev ? e : new ev(ec(e));
                    return new ev(this.numerator.mul(t.numerator), this.denominator.mul(t.denominator))
                }
                div(e) {
                    let t = e instanceof ev ? e : new ev(ec(e));
                    return new ev(this.numerator.mul(t.denominator), this.denominator.mul(t.numerator))
                }
                toSignificant(e, t = {
                    groupSeparator: ""
                }, n = no.ROUND_HALF_UP) {
                    eb.assert(Number.isInteger(e), `${e} is not an integer.`), eb.assert(e > 0, `${e} is not positive.`), eT.set({
                        precision: e + 1,
                        rounding: eI[n]
                    });
                    let i = new eT(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(e);
                    return i.toFormat(i.decimalPlaces(), t)
                }
                toFixed(e, t = {
                    groupSeparator: ""
                }, n = no.ROUND_HALF_UP) {
                    return eb.assert(Number.isInteger(e), `${e} is not an integer.`), eb.assert(e >= 0, `${e} is negative.`), ek.DP = e, ek.RM = eP[n], new ek(this.numerator.toString()).div(this.denominator.toString()).toFormat(e, t)
                }
            }
            let eC = U.from("entity/amount"),
                eL = eA(T);
            class eD extends ev {
                constructor(e, t, n = !0) {
                    let i = new(P())(0),
                        r = eo.pow(new(P())(e.decimals));
                    if (n) i = ec(t);
                    else {
                        let n = new(P())(0),
                            o = new(P())(0);
                        if ("string" == typeof t || "number" == typeof t || "bigint" == typeof t) {
                            let [i, r] = function(e, t) {
                                let n = "0",
                                    i = "0";
                                if (e.includes(".")) {
                                    let r = e.split(".");
                                    if (2 !== r.length) return eC.throwArgumentError("invalid number string", "num", e);
                                    [n, i] = r, i = i.padEnd(t, "0")
                                } else n = e;
                                return [n, i.slice(0, t) || i]
                            }(t.toString(), e.decimals);
                            n = ec(i), o = ec(r)
                        }
                        i = (n = n.mul(r)).add(o)
                    }
                    super(i, r), this.currency = e
                }
                get raw() {
                    return this.numerator
                }
                isZero() {
                    return this.raw.isZero()
                }
                gt(e) {
                    return eC.assert(ew(this.currency, e.currency), "gt currency not equals"), this.raw.gt(e.raw)
                }
                lt(e) {
                    return eC.assert(ew(this.currency, e.currency), "lt currency not equals"), this.raw.lt(e.raw)
                }
                add(e) {
                    return eC.assert(ew(this.currency, e.currency), "add currency not equals"), new eD(this.currency, this.raw.add(e.raw))
                }
                sub(e) {
                    return eC.assert(ew(this.currency, e.currency), "sub currency not equals"), new eD(this.currency, this.raw.sub(e.raw))
                }
                toSignificant(e = this.currency.decimals, t, n = no.ROUND_DOWN) {
                    return super.toSignificant(e, t, n)
                }
                toFixed(e = this.currency.decimals, t, n = no.ROUND_DOWN) {
                    return eC.assert(e <= this.currency.decimals, "decimals overflow"), super.toFixed(e, t, n)
                }
                toExact(e = {
                    groupSeparator: ""
                }) {
                    return eL.DP = this.currency.decimals, new eL(this.numerator.toString()).div(this.denominator.toString()).toFormat(e)
                }
            }
            class eR extends eD {
                constructor(e, t, n = !0) {
                    super(e, t, n), this.token = e
                }
                add(e) {
                    return eC.assert(ew(this.token, e.token), "add token not equals"), new eR(this.token, this.raw.add(e.raw))
                }
                subtract(e) {
                    return eC.assert(ew(this.token, e.token), "sub token not equals"), new eR(this.token, this.raw.sub(e.raw))
                }
            }
            let eE = new ev(es);
            class eO extends ev {
                toSignificant(e = 5, t, n) {
                    return this.mul(eE).toSignificant(e, t, n)
                }
                toFixed(e = 2, t, n) {
                    return this.mul(eE).toFixed(e, t, n)
                }
            }
            let eU = U.from("entity/price");
            class eq extends ev {
                constructor(e, t, n, i) {
                    var r, o;
                    super(i, t), this.baseCurrency = e, this.quoteCurrency = n, this.scalar = new ev((r = e.decimals, eo.pow(ec(r))), (o = n.decimals, eo.pow(ec(o))))
                }
                get raw() {
                    return new ev(this.numerator, this.denominator)
                }
                get adjusted() {
                    return super.mul(this.scalar)
                }
                invert() {
                    return new eq(this.quoteCurrency, this.numerator, this.baseCurrency, this.denominator)
                }
                mul(e) {
                    eU.assert(ew(this.quoteCurrency, e.baseCurrency), "mul currency not equals");
                    let t = super.mul(e);
                    return new eq(this.baseCurrency, t.denominator, e.quoteCurrency, t.numerator)
                }
                toSignificant(e = this.quoteCurrency.decimals, t, n) {
                    return this.adjusted.toSignificant(e, t, n)
                }
                toFixed(e = this.quoteCurrency.decimals, t, n) {
                    return this.adjusted.toFixed(e, t, n)
                }
            }
            var eV = n(32452);
            let eB = eV.Ar,
                e_ = eV.vA,
                ex = eV.fP,
                eN = eV.u8,
                eM = eV.KB,
                eW = eV.Jq,
                eF = eV.Xo,
                eK = eV.A9,
                eY = eV.Ik,
                eH = eV.pc;
            var eX = n(67133).Buffer;
            class eG extends eB {
                constructor(e, t, n) {
                    super(e, n), this.blob = eY(e), this.signed = t
                }
                decode(e, t = 0) {
                    let n = new(P())(this.blob.decode(e, t), 10, "le");
                    return this.signed ? n.fromTwos(8 * this.span).clone() : n
                }
                encode(e, t, n = 0) {
                    return "number" == typeof e && (e = new(P())(e)), this.signed && (e = e.toTwos(8 * this.span)), this.blob.encode(e.toArrayLike(eX, "le", this.span), t, n)
                }
            }
            class ez extends eB {
                constructor(e) {
                    super(8, e), this._lower = eH(eW(), !1), this._upper = eH(eW(), !1)
                }
                addBoolean(e) {
                    this._lower.fields.length < 32 ? this._lower.addBoolean(e) : this._upper.addBoolean(e)
                }
                decode(e, t = 0) {
                    let n = this._lower.decode(e, t),
                        i = this._upper.decode(e, t + this._lower.span);
                    return { ...n,
                        ...i
                    }
                }
                encode(e, t, n = 0) {
                    return this._lower.encode(e, t, n) + this._upper.encode(e, t, n + this._lower.span)
                }
            }

            function eQ(e) {
                return new ex(1, e)
            }

            function ej(e) {
                return new ex(4, e)
            }

            function eZ(e) {
                return new eG(8, !1, e)
            }

            function eJ(e) {
                return new eG(16, !1, e)
            }

            function e$(e) {
                return new eG(8, !0, e)
            }
            class e1 extends eB {
                constructor(e, t, n, i) {
                    super(e.span, i), this.layout = e, this.decoder = t, this.encoder = n
                }
                decode(e, t) {
                    return this.decoder(this.layout.decode(e, t))
                }
                encode(e, t, n) {
                    return this.layout.encode(this.encoder(e), t, n)
                }
                getSpan(e, t) {
                    return this.layout.getSpan(e, t)
                }
            }

            function e0(e) {
                return new e1(eY(32), e => new d.PublicKey(e), e => e.toBuffer(), e)
            }

            function e4(e) {
                return new e1(eN(), e6, e2, e)
            }

            function e6(e) {
                if (0 === e) return !1;
                if (1 === e) return !0;
                throw Error("Invalid bool: " + e)
            }

            function e2(e) {
                return e ? 1 : 0
            }
            class e3 extends e_ {
                decode(e, t) {
                    return super.decode(e, t)
                }
            }

            function e5(e, t, n) {
                return new e3(e, t, n)
            }

            function e8(e, t, n) {
                let i;
                return eK(e, "number" == typeof t ? t : (0, I.isBN)(t) ? t.toNumber() : new Proxy(t, {
                    get(e, t) {
                        if (!i) {
                            let t = Reflect.get(e, "count");
                            i = (0, I.isBN)(t) ? t.toNumber() : t, Reflect.set(e, "count", i)
                        }
                        return Reflect.get(e, t)
                    },
                    set: (e, t, n) => ("count" === t && (i = n), Reflect.set(e, t, n))
                }), n)
            }
            e5([ej("mintAuthorityOption"), e0("mintAuthority"), eZ("supply"), eQ("decimals"), eQ("isInitialized"), ej("freezeAuthorityOption"), e0("freezeAuthority")]);
            let e7 = e5([e0("mint"), e0("owner"), eZ("amount"), ej("delegateOption"), e0("delegate"), eQ("state"), ej("isNativeOption"), eZ("isNative"), eZ("delegatedAmount"), ej("closeAuthorityOption"), e0("closeAuthority")]);
            var e9 = n(46854),
                te = n(47352);
            (t9 = ns || (ns = {}))[t9.InitializeMint = 0] = "InitializeMint", t9[t9.InitializeAccount = 1] = "InitializeAccount", t9[t9.InitializeMultisig = 2] = "InitializeMultisig", t9[t9.Transfer = 3] = "Transfer", t9[t9.Approve = 4] = "Approve", t9[t9.Revoke = 5] = "Revoke", t9[t9.SetAuthority = 6] = "SetAuthority", t9[t9.MintTo = 7] = "MintTo", t9[t9.Burn = 8] = "Burn", t9[t9.CloseAccount = 9] = "CloseAccount", t9[t9.FreezeAccount = 10] = "FreezeAccount", t9[t9.ThawAccount = 11] = "ThawAccount", t9[t9.TransferChecked = 12] = "TransferChecked", t9[t9.ApproveChecked = 13] = "ApproveChecked", t9[t9.MintToChecked = 14] = "MintToChecked", t9[t9.BurnChecked = 15] = "BurnChecked", t9[t9.InitializeAccount2 = 16] = "InitializeAccount2", t9[t9.SyncNative = 17] = "SyncNative", t9[t9.InitializeAccount3 = 18] = "InitializeAccount3", t9[t9.InitializeMultisig2 = 19] = "InitializeMultisig2", t9[t9.InitializeMint2 = 20] = "InitializeMint2", t9[t9.GetAccountDataSize = 21] = "GetAccountDataSize", t9[t9.InitializeImmutableOwner = 22] = "InitializeImmutableOwner", t9[t9.AmountToUiAmount = 23] = "AmountToUiAmount", t9[t9.UiAmountToAmount = 24] = "UiAmountToAmount", t9[t9.InitializeMintCloseAuthority = 25] = "InitializeMintCloseAuthority", t9[t9.TransferFeeExtension = 26] = "TransferFeeExtension", t9[t9.ConfidentialTransferExtension = 27] = "ConfidentialTransferExtension", t9[t9.DefaultAccountStateExtension = 28] = "DefaultAccountStateExtension", t9[t9.Reallocate = 29] = "Reallocate", t9[t9.MemoTransferExtension = 30] = "MemoTransferExtension", t9[t9.CreateNativeMint = 31] = "CreateNativeMint", t9[t9.InitializeNonTransferableMint = 32] = "InitializeNonTransferableMint", t9[t9.InterestBearingMintExtension = 33] = "InterestBearingMintExtension", t9[t9.CpiGuardExtension = 34] = "CpiGuardExtension", t9[t9.InitializePermanentDelegate = 35] = "InitializePermanentDelegate", t9[t9.TransferHookExtension = 36] = "TransferHookExtension", t9[t9.MetadataPointerExtension = 39] = "MetadataPointerExtension";
            var tt = n(67133).Buffer;
            let tn = (0, eV.n_)([(0, eV.u8)("instruction"), (0, eV.u8)("decimals"), (0, te.ZL)("mintAuthority"), (0, eV.u8)("freezeAuthorityOption"), (0, te.ZL)("freezeAuthority")]);

            function ti(e, t, n) {
                if (n.length)
                    for (let i of (e.push({
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !1
                        }), n)) e.push({
                        pubkey: i instanceof d.PublicKey ? i : i.publicKey,
                        isSigner: !0,
                        isWritable: !1
                    });
                else e.push({
                    pubkey: t,
                    isSigner: !0,
                    isWritable: !1
                });
                return e
            }
            var tr = n(67133).Buffer;
            let to = (0, eV.n_)([(0, eV.u8)("instruction"), (0, te.AW)("amount")]);
            var ts = n(67133).Buffer;
            let ta = (0, eV.n_)([(0, eV.u8)("instruction")]);
            var tc = n(67133).Buffer;
            let tu = (0, eV.n_)([(0, eV.u8)("instruction"), (0, te.AW)("amount")]);
            var tl = n(67133).Buffer;
            let tm = (0, eV.n_)([(0, eV.u8)("instruction")]);

            function td(e, t, n) {
                return W([e.toBuffer(), n.toBuffer(), t.toBuffer()], new d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"))
            }
            var tp = n(67133).Buffer;
            class tf {
                static getAssociatedTokenAccount({
                    mint: e,
                    owner: t,
                    programId: n
                }) {
                    return td(t, e, n).publicKey
                }
                static makeCreateAssociatedTokenAccountInstruction({
                    programId: e,
                    mint: t,
                    associatedAccount: n,
                    owner: i,
                    payer: r,
                    instructionsType: o
                }) {
                    return o.push(nc.createATA), (0, e9.Ek)(r, n, i, t, e)
                }
                static async makeCreateWrappedNativeAccountInstructions({
                    connection: e,
                    owner: t,
                    payer: n,
                    amount: i,
                    commitment: r
                }) {
                    let o = [],
                        s = [],
                        a = await e.getMinimumBalanceForRentExemption(e7.span, r),
                        c = ec(i).add(new(P())(a)),
                        u = tS({
                            fromPublicKey: n,
                            programId: l.H_
                        });
                    return o.push(d.SystemProgram.createAccountWithSeed({
                        fromPubkey: n,
                        basePubkey: n,
                        seed: u.seed,
                        newAccountPubkey: u.publicKey,
                        lamports: c.toNumber(),
                        space: e7.span,
                        programId: l.H_
                    })), s.push(nc.createAccount), o.push(this.makeInitAccountInstruction({
                        programId: l.H_,
                        mint: M(em.mint),
                        tokenAccount: u.publicKey,
                        owner: t,
                        instructionTypes: s
                    })), {
                        address: {
                            newAccount: u.publicKey
                        },
                        innerTransaction: {
                            instructions: o,
                            signers: [],
                            lookupTableAddress: [],
                            instructionTypes: s
                        }
                    }
                }
                static async insertCreateWrappedNativeAccount({
                    connection: e,
                    owner: t,
                    payer: n,
                    amount: i,
                    instructions: r,
                    instructionsType: o,
                    signers: s,
                    commitment: a
                }) {
                    let c = await this.makeCreateWrappedNativeAccountInstructions({
                        connection: e,
                        owner: t,
                        payer: n,
                        amount: i,
                        commitment: a
                    });
                    return r.push(...c.innerTransaction.instructions), s.push(...c.innerTransaction.signers), o.push(...c.innerTransaction.instructionTypes), c.address.newAccount
                }
                static makeInitMintInstruction({
                    programId: e,
                    mint: t,
                    decimals: n,
                    mintAuthority: i,
                    freezeAuthority: r = null,
                    instructionTypes: o
                }) {
                    return o.push(nc.initMint),
                        function(e, t, n, i, r = l.H_) {
                            let o = [{
                                    pubkey: e,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: d.SYSVAR_RENT_PUBKEY,
                                    isSigner: !1,
                                    isWritable: !1
                                }],
                                s = tt.alloc(tn.span);
                            return tn.encode({
                                instruction: ns.InitializeMint,
                                decimals: t,
                                mintAuthority: n,
                                freezeAuthorityOption: i ? 1 : 0,
                                freezeAuthority: i || new d.PublicKey(0)
                            }, s), new d.TransactionInstruction({
                                keys: o,
                                programId: r,
                                data: s
                            })
                        }(t, n, i, r, e)
                }
                static makeMintToInstruction({
                    programId: e,
                    mint: t,
                    dest: n,
                    authority: i,
                    amount: r,
                    multiSigners: o = [],
                    instructionTypes: s
                }) {
                    return s.push(nc.mintTo),
                        function(e, t, n, i, r = [], o = l.H_) {
                            let s = ti([{
                                    pubkey: e,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: t,
                                    isSigner: !1,
                                    isWritable: !0
                                }], n, r),
                                a = tr.alloc(to.span);
                            return to.encode({
                                instruction: ns.MintTo,
                                amount: BigInt(i)
                            }, a), new d.TransactionInstruction({
                                keys: s,
                                programId: o,
                                data: a
                            })
                        }(t, n, i, BigInt(String(r)), o, e)
                }
                static makeInitAccountInstruction({
                    programId: e,
                    mint: t,
                    tokenAccount: n,
                    owner: i,
                    instructionTypes: r
                }) {
                    return r.push(nc.initAccount),
                        function(e, t, n, i = l.H_) {
                            let r = [{
                                    pubkey: e,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: t,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: n,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: d.SYSVAR_RENT_PUBKEY,
                                    isSigner: !1,
                                    isWritable: !1
                                }],
                                o = ts.alloc(ta.span);
                            return ta.encode({
                                instruction: ns.InitializeAccount
                            }, o), new d.TransactionInstruction({
                                keys: r,
                                programId: i,
                                data: o
                            })
                        }(n, t, i, e)
                }
                static makeTransferInstruction({
                    programId: e,
                    source: t,
                    destination: n,
                    owner: i,
                    amount: r,
                    multiSigners: o = [],
                    instructionsType: s
                }) {
                    return s.push(nc.transferAmount),
                        function(e, t, n, i, r = [], o = l.H_) {
                            let s = ti([{
                                    pubkey: e,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: t,
                                    isSigner: !1,
                                    isWritable: !0
                                }], n, r),
                                a = tc.alloc(tu.span);
                            return tu.encode({
                                instruction: ns.Transfer,
                                amount: BigInt(i)
                            }, a), new d.TransactionInstruction({
                                keys: s,
                                programId: o,
                                data: a
                            })
                        }(t, n, i, BigInt(String(r)), o, e)
                }
                static makeCloseAccountInstruction({
                    programId: e,
                    tokenAccount: t,
                    owner: n,
                    payer: i,
                    multiSigners: r = [],
                    instructionsType: o
                }) {
                    return o.push(nc.closeAccount),
                        function(e, t, n, i = [], r = l.H_) {
                            let o = ti([{
                                    pubkey: e,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: t,
                                    isSigner: !1,
                                    isWritable: !0
                                }], n, i),
                                s = tl.alloc(tm.span);
                            return tm.encode({
                                instruction: ns.CloseAccount
                            }, s), new d.TransactionInstruction({
                                keys: o,
                                programId: r,
                                data: s
                            })
                        }(t, i, n, r, e)
                }
                static createInitAccountInstruction(e, t, n, i) {
                    let r = [{
                            pubkey: n,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: i,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: d.SYSVAR_RENT_PUBKEY,
                            isSigner: !1,
                            isWritable: !1
                        }],
                        o = eQ("instruction"),
                        s = tp.alloc(o.span);
                    return o.encode(1, s), new d.TransactionInstruction({
                        keys: r,
                        programId: e,
                        data: s
                    })
                }
            }(ne = na || (na = {}))[ne.V0 = 0] = "V0", ne[ne.LEGACY = 1] = "LEGACY", (nt = nc || (nc = {}))[nt.createAccount = 0] = "createAccount", nt[nt.initAccount = 1] = "initAccount", nt[nt.createATA = 2] = "createATA", nt[nt.closeAccount = 3] = "closeAccount", nt[nt.transferAmount = 4] = "transferAmount", nt[nt.initMint = 5] = "initMint", nt[nt.mintTo = 6] = "mintTo", nt[nt.initMarket = 7] = "initMarket", nt[nt.util1216OwnerClaim = 8] = "util1216OwnerClaim", nt[nt.setComputeUnitPrice = 9] = "setComputeUnitPrice", nt[nt.setComputeUnitLimit = 10] = "setComputeUnitLimit", nt[nt.clmmCreatePool = 11] = "clmmCreatePool", nt[nt.clmmOpenPosition = 12] = "clmmOpenPosition", nt[nt.clmmIncreasePosition = 13] = "clmmIncreasePosition", nt[nt.clmmDecreasePosition = 14] = "clmmDecreasePosition", nt[nt.clmmClosePosition = 15] = "clmmClosePosition", nt[nt.clmmSwapBaseIn = 16] = "clmmSwapBaseIn", nt[nt.clmmSwapBaseOut = 17] = "clmmSwapBaseOut", nt[nt.clmmInitReward = 18] = "clmmInitReward", nt[nt.clmmSetReward = 19] = "clmmSetReward", nt[nt.clmmCollectReward = 20] = "clmmCollectReward", nt[nt.ammV4Swap = 21] = "ammV4Swap", nt[nt.ammV4AddLiquidity = 22] = "ammV4AddLiquidity", nt[nt.ammV4RemoveLiquidity = 23] = "ammV4RemoveLiquidity", nt[nt.ammV4SimulatePoolInfo = 24] = "ammV4SimulatePoolInfo", nt[nt.ammV4SwapBaseIn = 25] = "ammV4SwapBaseIn", nt[nt.ammV4SwapBaseOut = 26] = "ammV4SwapBaseOut", nt[nt.ammV4CreatePool = 27] = "ammV4CreatePool", nt[nt.ammV4InitPool = 28] = "ammV4InitPool", nt[nt.ammV4CreatePoolV2 = 29] = "ammV4CreatePoolV2", nt[nt.ammV5AddLiquidity = 30] = "ammV5AddLiquidity", nt[nt.ammV5RemoveLiquidity = 31] = "ammV5RemoveLiquidity", nt[nt.ammV5SimulatePoolInfo = 32] = "ammV5SimulatePoolInfo", nt[nt.ammV5SwapBaseIn = 33] = "ammV5SwapBaseIn", nt[nt.ammV5SwapBaseOut = 34] = "ammV5SwapBaseOut", nt[nt.routeSwap = 35] = "routeSwap", nt[nt.routeSwap1 = 36] = "routeSwap1", nt[nt.routeSwap2 = 37] = "routeSwap2", nt[nt.farmV3Deposit = 38] = "farmV3Deposit", nt[nt.farmV3Withdraw = 39] = "farmV3Withdraw", nt[nt.farmV3CreateLedger = 40] = "farmV3CreateLedger", nt[nt.farmV5Deposit = 41] = "farmV5Deposit", nt[nt.farmV5Withdraw = 42] = "farmV5Withdraw", nt[nt.farmV5CreateLedger = 43] = "farmV5CreateLedger", nt[nt.farmV6Deposit = 44] = "farmV6Deposit", nt[nt.farmV6Withdraw = 45] = "farmV6Withdraw", nt[nt.farmV6Create = 46] = "farmV6Create", nt[nt.farmV6Restart = 47] = "farmV6Restart", nt[nt.farmV6CreatorAddReward = 48] = "farmV6CreatorAddReward", nt[nt.farmV6CreatorWithdraw = 49] = "farmV6CreatorWithdraw", nt[nt.test = 50] = "test";
            var tg = n(67133).Buffer;
            class tw {
                static _selectTokenAccount(e) {
                    let {
                        tokenAccounts: t,
                        programId: n,
                        mint: i,
                        owner: r,
                        config: o
                    } = e, {
                        associatedOnly: s
                    } = {
                        associatedOnly: !0,
                        ...o
                    }, a = t.filter(({
                        accountInfo: e
                    }) => e.mint.equals(i)).sort((e, t) => e.accountInfo.amount.lt(t.accountInfo.amount) ? 1 : -1), c = tf.getAssociatedTokenAccount({
                        mint: i,
                        owner: r,
                        programId: n
                    });
                    for (let e of a) {
                        let {
                            pubkey: t
                        } = e;
                        if (!s || c.equals(t)) return t
                    }
                    return null
                }
                static async _handleTokenAccount(e) {
                    let {
                        connection: t,
                        side: n,
                        amount: i,
                        programId: r,
                        mint: o,
                        tokenAccount: s,
                        owner: a,
                        payer: c = a,
                        frontInstructions: u,
                        endInstructions: d,
                        signers: p,
                        bypassAssociatedCheck: f,
                        frontInstructionsType: g,
                        endInstructionsType: w,
                        checkCreateATAOwner: S
                    } = e, h = tf.getAssociatedTokenAccount({
                        mint: o,
                        owner: a,
                        programId: r
                    });
                    if (eg.WSOL.mint.equals(o)) {
                        let e = await tf.insertCreateWrappedNativeAccount({
                            connection: t,
                            owner: a,
                            payer: c,
                            instructions: u,
                            instructionsType: g,
                            signers: p,
                            amount: i
                        });
                        return d && d.push(tf.makeCloseAccountInstruction({
                            programId: l.H_,
                            tokenAccount: e,
                            owner: a,
                            payer: c,
                            instructionsType: w ? ? []
                        })), e
                    }
                    if (!s || "out" === n && !h.equals(s) && !f) {
                        let e = tf.makeCreateAssociatedTokenAccountInstruction({
                            programId: r,
                            mint: o,
                            associatedAccount: h,
                            owner: a,
                            payer: c,
                            instructionsType: g
                        });
                        if (S) {
                            let n = await t.getAccountInfo(h);
                            if (null === n) u.push(e);
                            else if (n.owner.equals(l.H_) && m.p0.decode(n.data).mint.equals(o) && m.p0.decode(n.data).owner.equals(a));
                            else throw Error(`create ata check error -> mint: ${o.toString()}, ata: ${h.toString()}`)
                        } else u.push(e);
                        return h
                    }
                    return s
                }
                static async _selectOrCreateTokenAccount(e) {
                    let {
                        mint: t,
                        tokenAccounts: n,
                        createInfo: i,
                        associatedOnly: r,
                        owner: o,
                        checkCreateATAOwner: s,
                        programId: a
                    } = e, c = tf.getAssociatedTokenAccount({
                        mint: t,
                        owner: o,
                        programId: a
                    }), u = n.filter(e => e.accountInfo.mint.equals(t) && (!r || e.pubkey.equals(c))).sort((e, t) => e.accountInfo.amount.lt(t.accountInfo.amount) ? 1 : -1);
                    if (void 0 === i || u.length > 0) return u.length > 0 ? u[0].pubkey : void 0;
                    if (r) {
                        let e = tf.makeCreateAssociatedTokenAccountInstruction({
                            programId: a,
                            mint: t,
                            associatedAccount: c,
                            owner: o,
                            payer: i.payer,
                            instructionsType: i.frontInstructionsType
                        });
                        if (s) {
                            let n = await i.connection.getAccountInfo(c);
                            if (null === n) i.frontInstructions.push(e);
                            else if (n.owner.equals(a) && m.p0.decode(n.data).mint.equals(t) && m.p0.decode(n.data).owner.equals(o));
                            else throw Error(`create ata check error -> mint: ${t.toString()}, ata: ${c.toString()}`)
                        } else i.frontInstructions.push(e);
                        if (t.equals(eg.WSOL.mint) && i.amount) {
                            let e = await tf.insertCreateWrappedNativeAccount({
                                connection: i.connection,
                                owner: o,
                                payer: i.payer,
                                instructions: i.frontInstructions,
                                instructionsType: i.frontInstructionsType,
                                signers: i.signers,
                                amount: i.amount ? ? 0
                            });
                            (i.endInstructions ? ? []).push(tf.makeCloseAccountInstruction({
                                programId: l.H_,
                                tokenAccount: e,
                                owner: o,
                                payer: i.payer,
                                instructionsType: i.endInstructionsType ? ? []
                            })), i.amount && i.frontInstructions.push(tf.makeTransferInstruction({
                                programId: l.H_,
                                source: e,
                                destination: c,
                                owner: o,
                                amount: i.amount,
                                instructionsType: i.frontInstructionsType
                            }))
                        }
                        return (i.endInstructions ? ? []).push(tf.makeCloseAccountInstruction({
                            programId: a,
                            tokenAccount: c,
                            owner: o,
                            payer: i.payer,
                            instructionsType: i.endInstructionsType ? ? []
                        })), c
                    }
                    if (t.equals(eg.WSOL.mint)) {
                        let e = await tf.insertCreateWrappedNativeAccount({
                            connection: i.connection,
                            owner: o,
                            payer: i.payer,
                            instructions: i.frontInstructions,
                            instructionsType: i.frontInstructionsType,
                            signers: i.signers,
                            amount: i.amount ? ? 0
                        });
                        return (i.endInstructions ? ? []).push(tf.makeCloseAccountInstruction({
                            programId: l.H_,
                            tokenAccount: e,
                            owner: o,
                            payer: i.payer,
                            instructionsType: i.endInstructionsType ? ? []
                        })), e
                    } {
                        let e = tS({
                                fromPublicKey: o,
                                programId: a
                            }),
                            n = await i.connection.getMinimumBalanceForRentExemption(m.p0.span),
                            r = d.SystemProgram.createAccountWithSeed({
                                fromPubkey: o,
                                basePubkey: o,
                                seed: e.seed,
                                newAccountPubkey: e.publicKey,
                                lamports: n,
                                space: m.p0.span,
                                programId: a
                            }),
                            s = tf.createInitAccountInstruction(a, t, e.publicKey, o);
                        return i.frontInstructions.push(r, s), i.frontInstructionsType.push(nc.createAccount, nc.initAccount), (i.endInstructions ? ? []).push(tf.makeCloseAccountInstruction({
                            programId: a,
                            tokenAccount: e.publicKey,
                            owner: o,
                            payer: i.payer,
                            instructionsType: i.endInstructionsType ? ? []
                        })), e.publicKey
                    }
                }
            }

            function tS({
                fromPublicKey: e,
                programId: t = l.H_
            }) {
                let n = d.Keypair.generate().publicKey.toBase58().slice(0, 32);
                return {
                    publicKey: function(e, t, n) {
                        let i = tg.concat([e.toBuffer(), tg.from(t), n.toBuffer()]),
                            r = (0, u.J)(i);
                        return new d.PublicKey(r)
                    }(e, n, t),
                    seed: n
                }
            }
            var th = n(67133).Buffer;
            new d.AddressLookupTableAccount({
                key: new d.PublicKey("2immgwYNHBbyVQKVGCEkgWpi53bLwWNRMB5G2nbgYV17"),
                state: d.AddressLookupTableAccount.deserialize(th.from("AQAAAP//////////d49+DAAAAAAAAQZMWvw7GUNJdaccNBVnb57OKakxL2BHLYvhRwVILRsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMGRm/lIRcy/+ytunLDm+e8jOW7xfcSayxDmzpAAAAABt324ddloZPZy+FGzut5rBy0he1fWzeROoz1hX7/AKkG3fbh7nWP3hhCXbzkbM3athr8TYO5DSf+vfko2KGL/AVKU1D4XciC1hSlVnJ4iilt3x6rq9CmBniISTL07vagBqfVFxksXFEhjMlMPUrxf1ja7gibof1E49vZigAAAAAGp9UXGMd0yShWY5hpHV62i164o5tLbVxzVVshAAAAAIyXJY9OJInxuz0QKRSODYMLWhOZ2v8QhASOe9jb6fhZC3BlsePRfEU4nVJ/awTDzVi4bHMaoP21SbbRvAP4KUbIScv+6Yw2LHF/6K0ZjUPibbSWXCirYPGuuVl7zT789IUPLW4CpHr4JNCatp3ELXDLKMv6JJ+37le50lbBJ2LvDQdRqCgtphMF/imcN7mY5YRx2xE1A3MQ+L4QRaYK9u4GRfZP3LsAd00a+IkCpA22UNQMKdq5BFbJuwuOLqc8zxCTDlqxBG8J0HcxtfogQHDK06ukzfaXiNDKAob1MqBHS9lJxDYCwz8gd5DtFqNSTKG5l1zxIaKpDP/sffi2is1H9aKveyXSu5StXElYRl9SD5As0DHE4N0GLnf84/siiKXVyp4Ez121kLcUui/jLLFZEz/BwZK3Ilf9B9OcsEAeDMKAy2vjGSxQODgBz0QwGA+eP4ZjIjrIAQaXENv31QfLlOdXSRCkaybRniDHF4C8YcwhcvsqrOVuTP4B2Na+9wLdtrB31uz2rtlFI5kahdsnp/d1SrASDInYCtTYtdoke4kX+hoKWcEWM4Tle8pTUkUVv4BxS6fje/EzKBE4Qu9N9LMnrw/JNO0hqMVB4rk/2ou4AB1loQ7FZoPwut2o4KZB+0p9xnbrQKw038qjpHar+PyDwvxBRcu5hpHw3dguezeWv+IwvgW5icu8EGkhGa9AkFPPJT7VMSFb8xowveU=", "base64"))
            });
            var ty = n(44581);

            function tA(e) {
                return (0, eV.n_)([(0, te.AW)("epoch"), (0, te.AW)("maximumFee"), (0, eV.KB)("transferFeeBasisPoints")], e)
            }(nn = nu || (nu = {}))[nn.Uninitialized = 0] = "Uninitialized", nn[nn.TransferFeeConfig = 1] = "TransferFeeConfig", nn[nn.TransferFeeAmount = 2] = "TransferFeeAmount", nn[nn.MintCloseAuthority = 3] = "MintCloseAuthority", nn[nn.ConfidentialTransferMint = 4] = "ConfidentialTransferMint", nn[nn.ConfidentialTransferAccount = 5] = "ConfidentialTransferAccount", nn[nn.DefaultAccountState = 6] = "DefaultAccountState", nn[nn.ImmutableOwner = 7] = "ImmutableOwner", nn[nn.MemoTransfer = 8] = "MemoTransfer", nn[nn.NonTransferable = 9] = "NonTransferable", nn[nn.InterestBearingConfig = 10] = "InterestBearingConfig", nn[nn.CpiGuard = 11] = "CpiGuard", nn[nn.PermanentDelegate = 12] = "PermanentDelegate", nn[nn.NonTransferableAccount = 13] = "NonTransferableAccount", nn[nn.TransferHook = 14] = "TransferHook", nn[nn.TransferHookAccount = 15] = "TransferHookAccount", nn[nn.MetadataPointer = 18] = "MetadataPointer", nn[nn.TokenMetadata = 19] = "TokenMetadata", BigInt(1e4);
            let tb = (0, eV.n_)([(0, te.ZL)("transferFeeConfigAuthority"), (0, te.ZL)("withdrawWithheldAuthority"), (0, te.AW)("withheldAmount"), tA("olderTransferFee"), tA("newerTransferFee")]);

            function tk(e, t, n, i) {
                if (void 0 === t) return {
                    amount: e,
                    fee: void 0,
                    expirationTime: void 0
                };
                let r = n.epoch < t.newerTransferFee.epoch ? t.olderTransferFee : t.newerTransferFee,
                    o = new(P())(r.maximumFee.toString()),
                    s = n.epoch < t.newerTransferFee.epoch ? (Number(t.newerTransferFee.epoch) * n.slotsInEpoch - n.absoluteSlot) * 400 / 1e3 : void 0;
                if (i) {
                    if (1e4 === r.transferFeeBasisPoints) {
                        let t = new(P())(r.maximumFee.toString());
                        return {
                            amount: e.add(t),
                            fee: t,
                            expirationTime: s
                        }
                    } {
                        let t = tP(e.mul(new(P())(1e4)), new(P())(1e4 - r.transferFeeBasisPoints)),
                            n = new(P())(r.maximumFee.toString()),
                            i = t.sub(e).gt(n) ? e.add(n) : t,
                            a = tP(i.mul(new(P())(r.transferFeeBasisPoints)), new(P())(1e4));
                        return {
                            amount: i,
                            fee: a.gt(o) ? o : a,
                            expirationTime: s
                        }
                    }
                } {
                    let t = tP(e.mul(new(P())(r.transferFeeBasisPoints)), new(P())(1e4));
                    return {
                        amount: e,
                        fee: t.gt(o) ? o : t,
                        expirationTime: s
                    }
                }
            }

            function tT(e, t) {
                return void 0 === e ? t : void 0 === t ? e : Math.min(e, t)
            }
            async function tI({
                connection: e,
                mints: t
            }) {
                if (0 === t.length) return {};
                let n = await z(e, t.map(e => ({
                        pubkey: e
                    }))),
                    i = {};
                for (let e of n) {
                    let t = (0, ty.rs)(e.pubkey, e.accountInfo, e.accountInfo ? .owner);
                    i[e.pubkey.toString()] = { ...t,
                        feeConfig: function(e) {
                            let t = function(e, t) {
                                let n = 0;
                                for (; n + 2 + 2 <= t.length;) {
                                    let i = t.readUInt16LE(n),
                                        r = t.readUInt16LE(n + 2),
                                        o = n + 2 + 2;
                                    if (i == e) return t.slice(o, o + r);
                                    n = o + r
                                }
                                return null
                            }(nu.TransferFeeConfig, e.tlvData);
                            return null !== t ? tb.decode(t) : null
                        }(t) ? ? void 0
                    }
                }
                return i
            }

            function tP(e, t) {
                let {
                    div: n,
                    mod: i
                } = e.divmod(t);
                return i.gt(ei) ? n.add(er) : n
            }
            tb.span, (0, eV.n_)([(0, te.AW)("withheldAmount")]).span;
            var tv = n(67133).Buffer;
            let tC = {
                    voterStakeRegistryCreateVoter: tv.from([6, 24, 245, 52, 243, 255, 148, 25]),
                    voterStakeRegistryCreateDepositEntry: tv.from([185, 131, 167, 186, 159, 125, 19, 67]),
                    voterStakeRegistryDeposit: tv.from([242, 35, 198, 137, 82, 225, 242, 182]),
                    voterStakeRegistryWithdraw: tv.from([183, 18, 70, 156, 148, 109, 161, 34]),
                    voterStakeRegistryUpdateVoterWeightRecord: tv.from([45, 185, 3, 36, 109, 190, 115, 169])
                },
                tL = e5([eZ("state"), eZ("nonce"), e0("lpVault"), e0("rewardVault"), e0(), e0(), eZ(), eZ(), eZ("totalReward"), eJ("perShareReward"), eZ("lastSlot"), eZ("perSlotReward")]),
                tD = e5([eZ("state"), eZ("nonce"), e0("lpVault"), e0("rewardVaultA"), eZ("totalRewardA"), eJ("perShareRewardA"), eZ("perSlotRewardA"), eQ("option"), e0("rewardVaultB"), eY(7), eZ("totalRewardB"), eJ("perShareRewardB"), eZ("perSlotRewardB"), eZ("lastSlot"), e0()]),
                tR = e5([eZ("rewardState"), eZ("rewardOpenTime"), eZ("rewardEndTime"), eZ("rewardLastUpdateTime"), eZ("totalReward"), eZ("totalRewardEmissioned"), eZ("rewardClaimed"), eZ("rewardPerSecond"), eJ("accRewardPerShare"), e0("rewardVault"), e0("rewardMint"), e0("rewardSender"), eZ("rewardType"), e8(eZ(), 15, "padding")]),
                tE = e5([eZ(), eZ("state"), eZ("nonce"), eZ("validRewardTokenNum"), eJ("rewardMultiplier"), eZ("rewardPeriodMax"), eZ("rewardPeriodMin"), eZ("rewardPeriodExtend"), e0("lpMint"), e0("lpVault"), e8(tR, 5, "rewardInfos"), e0("creator"), e0(), e8(eZ(), 32, "padding")]),
                tO = new Proxy(tL, {
                    get: (e, t, n) => "decode" === t ? (...t) => {
                        let n = e.decode(...t);
                        return { ...n,
                            version: 3,
                            rewardInfos: [{
                                rewardVault: n.rewardVault,
                                totalReward: n.totalReward,
                                perSlotReward: n.perSlotReward,
                                perShareReward: n.perShareReward
                            }]
                        }
                    } : Reflect.get(e, t, n)
                }),
                tU = new Proxy(tD, {
                    get: (e, t, n) => "decode" === t ? (...t) => {
                        let n = e.decode(...t);
                        return { ...n,
                            version: 5,
                            rewardInfos: [{
                                rewardVault: n.rewardVaultA,
                                totalReward: n.totalRewardA,
                                perSlotReward: n.perSlotRewardA,
                                perShareReward: n.perShareRewardA
                            }, {
                                rewardVault: n.rewardVaultB,
                                totalReward: n.totalRewardB,
                                perSlotReward: n.perSlotRewardB,
                                perShareReward: n.perShareRewardB
                            }]
                        }
                    } : Reflect.get(e, t, n)
                }),
                tq = new Proxy(tE, {
                    get: (e, t, n) => "decode" === t ? (...t) => {
                        let n = e.decode(...t);
                        return { ...n,
                            version: 6,
                            rewardInfos: n.rewardInfos.map(e => ({ ...e,
                                rewardType: (Object.entries(t4).find(t => String(t[1]) === e.rewardType.toString()) ? ? ["Standard SPL"])[0]
                            }))
                        }
                    } : Reflect.get(e, t, n)
                }),
                tV = e5([eZ("state"), e0("id"), e0("owner"), eZ("deposited"), e8(eZ(), 1, "rewardDebts")]),
                tB = e5([eZ("state"), e0("id"), e0("owner"), eZ("deposited"), e8(eJ(), 1, "rewardDebts"), eZ(""), eZ("voteLockedBalance"), e8(eZ(), 15)]),
                t_ = e5([eZ("state"), e0("id"), e0("owner"), eZ("deposited"), e8(eZ(), 2, "rewardDebts")]),
                tx = e5([eZ("state"), e0("id"), e0("owner"), eZ("deposited"), e8(eJ(), 2, "rewardDebts"), e8(eZ(), 17)]),
                tN = e5([eZ(), eZ("state"), e0("id"), e0("owner"), eZ("deposited"), e8(eJ(), 5, "rewardDebts"), e8(eZ(), 16)]),
                tM = {
                    3: tO,
                    5: tU,
                    6: tq
                },
                tW = {
                    3: tB,
                    5: tx,
                    6: tN
                },
                tF = e5([e0("mint"), e0("grantAuthority"), eZ("baselineVoteWeightScaledFactor"), eZ("maxExtraLockupVoteWeightScaledFactor"), eZ("lockupSaturationSecs"), new eG(1, !0, "digitShift"), e8(eQ(), 7, "reserved1"), e8(eZ(), 7, "reserved2")]),
                tK = e5([eY(8), e0("governanceProgramId"), e0("realm"), e0("realmGoverningTokenMint"), e0("realmAuthority"), e8(eQ(), 32, "reserved1"), e8(tF, 4, "votingMints"), e$("timeOffset"), eQ("bump"), e8(eQ(), 7, "reserved2"), e8(eZ(), 11, "reserved3")]),
                tY = e5([e$("startTime"), e$("endTime"), eQ("kind"), e8(eQ(), 15, "reserved")]),
                tH = e5([e8(tY, 1, "lockup"), eZ("amountDeposited_native"), eZ("amountInitiallyLockedNative"), e4("isUsed"), e4("allowClawback"), eQ("votingMintConfigIdx"), e8(eQ(), 29, "reserved")]),
                tX = e5([eY(8), e0("voterAuthority"), e0("registrar"), e8(tH, 32, "deposits"), eQ("voterBump"), eQ("voterWweightRecordBump"), e8(eQ(), 94, "reserved")]);
            var tG = n(67133).Buffer;

            function tz(e, t, n) {
                return W([t.toBuffer(), tG.from("registrar", "utf8"), n.toBuffer()], e)
            }

            function tQ(e, t) {
                return W([t.toBuffer(), tG.from("voting_mint_seed", "utf8")], e)
            }

            function tj(e, t) {
                return W([t.toBuffer()], e)
            }

            function tZ(e, t, n) {
                return W([t.toBuffer(), tG.from("voter", "utf8"), n.toBuffer()], e)
            }

            function tJ(e, t, n) {
                return W([t.toBuffer(), tG.from("voter-weight-record", "utf8"), n.toBuffer()], e)
            }

            function t$(e, t, n, i) {
                return W([tG.from("governance", "utf8"), t.toBuffer(), n.toBuffer(), i.toBuffer()], e)
            }
            var t1 = n(67133).Buffer;
            let t0 = U.from("Farm"),
                t4 = {
                    "Standard SPL": 0,
                    "Option tokens": 1
                };
            class t6 extends tw {
                static getStateLayout(e) {
                    let t = tM[e];
                    return t0.assertArgument(!!t, "invalid version", "version", e), t
                }
                static getLedgerLayout(e) {
                    let t = tW[e];
                    return t0.assertArgument(!!t, "invalid version", "version", e), t
                }
                static getLayouts(e) {
                    return {
                        state: this.getStateLayout(e),
                        ledger: this.getLedgerLayout(e)
                    }
                }
                static getAssociatedAuthority({
                    programId: e,
                    poolId: t
                }) {
                    return W([t.toBuffer()], e)
                }
                static getAssociatedLedgerAccount({
                    programId: e,
                    poolId: t,
                    owner: n,
                    version: i
                }) {
                    let {
                        publicKey: r
                    } = W([t.toBuffer(), n.toBuffer(), t1.from(6 === i ? "farmer_info_associated_seed" : "staker_info_v2_associated_seed", "utf-8")], e);
                    return r
                }
                static getAssociatedLedgerPoolAccount({
                    programId: e,
                    poolId: t,
                    mint: n,
                    type: i
                }) {
                    let {
                        publicKey: r
                    } = W([t.toBuffer(), n.toBuffer(), t1.from("lpVault" === i ? "lp_vault_associated_seed" : "rewardVault" === i ? "reward_vault_associated_seed" : "", "utf-8")], e);
                    return r
                }
                static makeDepositInstruction(e) {
                    let {
                        poolKeys: t
                    } = e, {
                        version: n
                    } = t;
                    return 3 === n ? this.makeDepositInstructionV3(e) : 5 === n ? this.makeDepositInstructionV5(e) : 6 === n ? this.makeDepositInstructionV6(e) : t0.throwArgumentError("invalid version", "poolKeys.version", n)
                }
                static makeDepositInstructionV3({
                    poolKeys: e,
                    userKeys: t,
                    amount: n
                }) {
                    t0.assertArgument(1 === e.rewardInfos.length, "lengths not equal 1", "poolKeys.rewardInfos", e.rewardInfos), t0.assertArgument(1 === t.rewardTokenAccounts.length, "lengths not equal 1", "userKeys.rewardTokenAccounts", t.rewardTokenAccounts);
                    let i = e5([eQ("instruction"), eZ("amount")]),
                        r = t1.alloc(i.span);
                    i.encode({
                        instruction: 10,
                        amount: ec(n)
                    }, r);
                    let o = [F(e.id, !1), K(e.authority, !1), F(t.ledger, !1), K(t.owner, !0), F(t.lpTokenAccount, !1), F(e.lpVault, !1), F(t.rewardTokenAccounts[0], !1), F(e.rewardInfos[0].rewardVault, !1), K(d.SYSVAR_CLOCK_PUBKEY, !1), K(l.H_, !1)];
                    if (t.auxiliaryLedgers)
                        for (let e of t.auxiliaryLedgers) o.push(F(e, !1));
                    return {
                        address: {},
                        innerTransaction: {
                            instructions: [new d.TransactionInstruction({
                                programId: e.programId,
                                keys: o,
                                data: r
                            })],
                            signers: [],
                            lookupTableAddress: [],
                            instructionTypes: [nc.farmV3Deposit]
                        }
                    }
                }
                static makeDepositInstructionV5({
                    poolKeys: e,
                    userKeys: t,
                    amount: n
                }) {
                    t0.assertArgument(t.rewardTokenAccounts.length === e.rewardInfos.length, "lengths not equal with poolKeys.rewardInfos", "userKeys.rewardTokenAccounts", t.rewardTokenAccounts);
                    let i = e5([eQ("instruction"), eZ("amount")]),
                        r = t1.alloc(i.span);
                    i.encode({
                        instruction: 11,
                        amount: ec(n)
                    }, r);
                    let o = [F(e.id, !1), K(e.authority, !1), F(t.ledger, !1), K(t.owner, !0), F(t.lpTokenAccount, !1), F(e.lpVault, !1), F(t.rewardTokenAccounts[0], !1), F(e.rewardInfos[0].rewardVault, !1), K(d.SYSVAR_CLOCK_PUBKEY, !1), K(l.H_, !1)];
                    for (let n = 1; n < e.rewardInfos.length; n++) o.push(F(t.rewardTokenAccounts[n], !1)), o.push(F(e.rewardInfos[n].rewardVault, !1));
                    if (t.auxiliaryLedgers)
                        for (let e of t.auxiliaryLedgers) o.push(F(e, !1));
                    return {
                        address: {},
                        innerTransaction: {
                            instructions: [new d.TransactionInstruction({
                                programId: e.programId,
                                keys: o,
                                data: r
                            })],
                            signers: [],
                            lookupTableAddress: [],
                            instructionTypes: [nc.farmV5Deposit]
                        }
                    }
                }
                static makeDepositInstructionV6({
                    poolKeys: e,
                    userKeys: t,
                    amount: n
                }) {
                    t0.assertArgument(0 !== t.rewardTokenAccounts.length, "lengths equal zero", "userKeys.rewardTokenAccounts", t.rewardTokenAccounts), t0.assertArgument(t.rewardTokenAccounts.length === e.rewardInfos.length, "lengths not equal with poolKeys.rewardInfos", "userKeys.rewardTokenAccounts", t.rewardTokenAccounts);
                    let i = e5([eQ("instruction"), eZ("amount")]),
                        r = t1.alloc(i.span);
                    i.encode({
                        instruction: 1,
                        amount: ec(n)
                    }, r);
                    let o = [K(l.H_, !1), K(V, !1), F(e.id, !1), K(e.authority, !1), F(e.lpVault, !1), F(t.ledger, !1), K(t.owner, !0), F(t.lpTokenAccount, !1)];
                    for (let n = 0; n < e.rewardInfos.length; n++) o.push(F(e.rewardInfos[n].rewardVault, !1)), o.push(F(t.rewardTokenAccounts[n], !1));
                    return {
                        address: {},
                        innerTransaction: {
                            instructions: [new d.TransactionInstruction({
                                programId: e.programId,
                                keys: o,
                                data: r
                            })],
                            signers: [],
                            lookupTableAddress: [],
                            instructionTypes: [nc.farmV6Deposit]
                        }
                    }
                }
                static makeWithdrawInstruction(e) {
                    let {
                        poolKeys: t
                    } = e, {
                        version: n
                    } = t;
                    return 3 === n ? this.makeWithdrawInstructionV3(e) : 5 === n ? this.makeWithdrawInstructionV5(e) : 6 === n ? this.makeWithdrawInstructionV6(e) : t0.throwArgumentError("invalid version", "poolKeys.version", n)
                }
                static makeWithdrawInstructionV3({
                    poolKeys: e,
                    userKeys: t,
                    amount: n
                }) {
                    t0.assertArgument(1 === e.rewardInfos.length, "lengths not equal 1", "poolKeys.rewardInfos", e.rewardInfos), t0.assertArgument(1 === t.rewardTokenAccounts.length, "lengths not equal 1", "userKeys.rewardTokenAccounts", t.rewardTokenAccounts);
                    let i = e5([eQ("instruction"), eZ("amount")]),
                        r = t1.alloc(i.span);
                    i.encode({
                        instruction: 11,
                        amount: ec(n)
                    }, r);
                    let o = [F(e.id, !1), K(e.authority, !1), F(t.ledger, !1), K(t.owner, !0), F(t.lpTokenAccount, !1), F(e.lpVault, !1), F(t.rewardTokenAccounts[0], !1), F(e.rewardInfos[0].rewardVault, !1), K(d.SYSVAR_CLOCK_PUBKEY, !1), K(l.H_, !1)];
                    if (t.auxiliaryLedgers)
                        for (let e of t.auxiliaryLedgers) o.push(F(e, !1));
                    return {
                        address: {},
                        innerTransaction: {
                            instructions: [new d.TransactionInstruction({
                                programId: e.programId,
                                keys: o,
                                data: r
                            })],
                            signers: [],
                            lookupTableAddress: [],
                            instructionTypes: [nc.farmV5Deposit]
                        }
                    }
                }
                static makeWithdrawInstructionV5({
                    poolKeys: e,
                    userKeys: t,
                    amount: n
                }) {
                    t0.assertArgument(t.rewardTokenAccounts.length === e.rewardInfos.length, "lengths not equal with params.poolKeys.rewardInfos", "userKeys.rewardTokenAccounts", t.rewardTokenAccounts);
                    let i = e5([eQ("instruction"), eZ("amount")]),
                        r = t1.alloc(i.span);
                    i.encode({
                        instruction: 12,
                        amount: ec(n)
                    }, r);
                    let o = [F(e.id, !1), K(e.authority, !1), F(t.ledger, !1), K(t.owner, !0), F(t.lpTokenAccount, !1), F(e.lpVault, !1), F(t.rewardTokenAccounts[0], !1), F(e.rewardInfos[0].rewardVault, !1), K(d.SYSVAR_CLOCK_PUBKEY, !1), K(l.H_, !1)];
                    for (let n = 1; n < e.rewardInfos.length; n++) o.push(F(t.rewardTokenAccounts[n], !1)), o.push(F(e.rewardInfos[n].rewardVault, !1));
                    if (t.auxiliaryLedgers)
                        for (let e of t.auxiliaryLedgers) o.push(F(e, !1));
                    return {
                        address: {},
                        innerTransaction: {
                            instructions: [new d.TransactionInstruction({
                                programId: e.programId,
                                keys: o,
                                data: r
                            })],
                            signers: [],
                            lookupTableAddress: [],
                            instructionTypes: [nc.farmV5Withdraw]
                        }
                    }
                }
                static makeWithdrawInstructionV6({
                    poolKeys: e,
                    userKeys: t,
                    amount: n
                }) {
                    t0.assertArgument(0 !== t.rewardTokenAccounts.length, "lengths equal zero", "userKeys.rewardTokenAccounts", t.rewardTokenAccounts), t0.assertArgument(t.rewardTokenAccounts.length === e.rewardInfos.length, "lengths not equal with params.poolKeys.rewardInfos", "userKeys.rewardTokenAccounts", t.rewardTokenAccounts);
                    let i = e5([eQ("instruction"), eZ("amount")]),
                        r = t1.alloc(i.span);
                    i.encode({
                        instruction: 2,
                        amount: ec(n)
                    }, r);
                    let o = [K(l.H_, !1), F(e.id, !1), K(e.authority, !1), F(e.lpVault, !1), F(t.ledger, !1), K(t.owner, !0), F(t.lpTokenAccount, !1)];
                    for (let n = 0; n < e.rewardInfos.length; n++) o.push(F(e.rewardInfos[n].rewardVault, !1)), o.push(F(t.rewardTokenAccounts[n], !1));
                    return {
                        address: {},
                        innerTransaction: {
                            instructions: [new d.TransactionInstruction({
                                programId: e.programId,
                                keys: o,
                                data: r
                            })],
                            signers: [],
                            lookupTableAddress: [],
                            instructionTypes: [nc.farmV6Withdraw]
                        }
                    }
                }
                static makeCreateAssociatedLedgerAccountInstruction(e) {
                    let {
                        poolKeys: t
                    } = e, {
                        version: n
                    } = t;
                    return 3 === n ? this.makeCreateAssociatedLedgerAccountInstructionV3(e) : 5 === n ? this.makeCreateAssociatedLedgerAccountInstructionV5(e) : t0.throwArgumentError("invalid version", "poolKeys.version", n)
                }
                static makeCreateAssociatedLedgerAccountInstructionV3({
                    poolKeys: e,
                    userKeys: t
                }) {
                    let n = e5([eQ("instruction")]),
                        i = t1.alloc(n.span);
                    n.encode({
                        instruction: 9
                    }, i);
                    let r = [F(e.id, !1), F(t.ledger, !1), K(t.owner, !0), K(V, !1), K(d.SYSVAR_RENT_PUBKEY, !1)];
                    return {
                        address: {},
                        innerTransaction: {
                            instructions: [new d.TransactionInstruction({
                                programId: e.programId,
                                keys: r,
                                data: i
                            })],
                            signers: [],
                            lookupTableAddress: [],
                            instructionTypes: [nc.farmV3CreateLedger]
                        }
                    }
                }
                static makeCreateAssociatedLedgerAccountInstructionV5({
                    poolKeys: e,
                    userKeys: t
                }) {
                    let n = e5([eQ("instruction")]),
                        i = t1.alloc(n.span);
                    n.encode({
                        instruction: 10
                    }, i);
                    let r = [F(e.id, !1), F(t.ledger, !1), K(t.owner, !0), K(V, !1), K(d.SYSVAR_RENT_PUBKEY, !1)];
                    return {
                        address: {},
                        innerTransaction: {
                            instructions: [new d.TransactionInstruction({
                                programId: e.programId,
                                keys: r,
                                data: i
                            })],
                            signers: [],
                            lookupTableAddress: [],
                            instructionTypes: [nc.farmV5CreateLedger]
                        }
                    }
                }
                static makeCreateFarmInstruction({
                    connection: e,
                    userKeys: t,
                    poolInfo: n
                }) {
                    let {
                        version: i
                    } = n;
                    return 6 === i ? this.makeCreateFarmInstructionV6({
                        connection: e,
                        userKeys: t,
                        poolInfo: n
                    }) : t0.throwArgumentError("invalid version", "version", i)
                }
                static async makeCreateFarmInstructionV6({
                    connection: e,
                    userKeys: t,
                    poolInfo: n
                }) {
                    let i = t.payer ? ? t.owner,
                        r = tS({
                            fromPublicKey: i,
                            programId: n.programId
                        }),
                        o = await e.getMinimumBalanceForRentExemption(tq.span),
                        s = [],
                        a = [],
                        c = [],
                        u = [],
                        m = [];
                    s.push(d.SystemProgram.createAccountWithSeed({
                        fromPubkey: i,
                        basePubkey: i,
                        seed: r.seed,
                        newAccountPubkey: r.publicKey,
                        lamports: o,
                        space: tq.span,
                        programId: n.programId
                    }));
                    let {
                        publicKey: p,
                        nonce: f
                    } = t6.getAssociatedAuthority({
                        programId: n.programId,
                        poolId: r.publicKey
                    }), g = t6.getAssociatedLedgerPoolAccount({
                        programId: n.programId,
                        poolId: r.publicKey,
                        mint: n.lpMint,
                        type: "lpVault"
                    }), w = [], S = [];
                    for (let i of n.rewardInfos) {
                        let o;
                        t0.assertArgument(i.rewardOpenTime < i.rewardEndTime, "start time error", "rewardInfo.rewardOpenTime", i.rewardOpenTime), t0.assertArgument(void 0 !== t4[i.rewardType], "reward type error", "rewardInfo.rewardType", i.rewardType), t0.assertArgument(ec(i.rewardPerSecond).gt(ei), "rewardPerSecond error", "rewardInfo.rewardPerSecond", i.rewardPerSecond), w.push({
                            isSet: new(P())(1),
                            rewardPerSecond: ec(i.rewardPerSecond),
                            rewardOpenTime: ec(i.rewardOpenTime),
                            rewardEndTime: ec(i.rewardEndTime),
                            rewardType: ec(t4[i.rewardType])
                        }), i.rewardMint.equals(d.PublicKey.default) ? (o = await tf.insertCreateWrappedNativeAccount({
                            connection: e,
                            owner: t.owner,
                            payer: t.payer ? ? t.owner,
                            instructions: s,
                            signers: m,
                            amount: ec(i.rewardEndTime).sub(ec(i.rewardOpenTime)).mul(ec(i.rewardPerSecond)),
                            instructionsType: c
                        }), a.push(tf.makeCloseAccountInstruction({
                            programId: l.H_,
                            tokenAccount: o,
                            owner: t.owner,
                            payer: t.payer ? ? t.owner,
                            instructionsType: u
                        }))) : o = this._selectTokenAccount({
                            programId: l.H_,
                            tokenAccounts: t.tokenAccounts,
                            mint: i.rewardMint,
                            owner: t.owner,
                            config: {
                                associatedOnly: !1
                            }
                        }), t0.assertArgument(null !== o, "cannot found target token accounts", "tokenAccounts", t.tokenAccounts);
                        let p = i.rewardMint.equals(d.PublicKey.default) ? eg.WSOL.mint : i.rewardMint;
                        S.push({
                            rewardMint: p,
                            rewardVault: t6.getAssociatedLedgerPoolAccount({
                                programId: n.programId,
                                poolId: r.publicKey,
                                mint: p,
                                type: "rewardVault"
                            }),
                            userRewardToken: o
                        })
                    }
                    let h = this._selectTokenAccount({
                        programId: l.H_,
                        tokenAccounts: t.tokenAccounts,
                        mint: n.lockInfo.lockMint,
                        owner: t.owner,
                        config: {
                            associatedOnly: !1
                        }
                    });
                    t0.assertArgument(null !== h, "cannot found lock vault", "tokenAccounts", t.tokenAccounts);
                    let y = e5([eZ("isSet"), eZ("rewardPerSecond"), eZ("rewardOpenTime"), eZ("rewardEndTime"), eZ("rewardType")]),
                        A = e5([eQ("instruction"), eZ("nonce"), e8(y, 5, "rewardTimeInfo")]),
                        b = t1.alloc(A.span);
                    A.encode({
                        instruction: 0,
                        nonce: new(P())(f),
                        rewardTimeInfo: w
                    }, b);
                    let k = [K(l.H_, !1), K(V, !1), K(d.SYSVAR_RENT_PUBKEY, !1), F(r.publicKey, !1), K(p, !1), F(g, !1), K(n.lpMint, !1), F(n.lockInfo.lockVault, !1), K(n.lockInfo.lockMint, !1), F(h ? ? d.PublicKey.default, !1), K(t.owner, !0)];
                    for (let e of S) k.push(...[{
                        pubkey: e.rewardMint,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: e.rewardVault,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: e.userRewardToken,
                        isSigner: !1,
                        isWritable: !0
                    }]);
                    let T = new d.TransactionInstruction({
                        programId: n.programId,
                        keys: k,
                        data: b
                    });
                    return {
                        address: {
                            farmId: r.publicKey
                        },
                        innerTransaction: {
                            instructions: [...s, T, ...a],
                            signers: m,
                            lookupTableAddress: [],
                            instructionTypes: [...c, nc.farmV6Create, ...u]
                        }
                    }
                }
                static makeCreatorWithdrawFarmRewardInstruction(e) {
                    let {
                        poolKeys: t
                    } = e, {
                        version: n
                    } = t;
                    return 6 === n ? this.makeCreatorWithdrawFarmRewardInstructionV6(e) : t0.throwArgumentError("invalid version", "version", n)
                }
                static makeCreatorWithdrawFarmRewardInstructionV6({
                    poolKeys: e,
                    userKeys: t,
                    withdrawMint: n
                }) {
                    let i = e.rewardInfos.find(e => e.rewardMint.equals(n.equals(d.PublicKey.default) ? eg.WSOL.mint : n));
                    t0.assertArgument(void 0 !== i, "withdraw mint error", "poolKeys.rewardInfos", e.rewardInfos);
                    let r = i ? .rewardVault ? ? d.PublicKey.default,
                        o = e5([eQ("instruction")]),
                        s = t1.alloc(o.span);
                    o.encode({
                        instruction: 5
                    }, s);
                    let a = [K(l.H_, !1), F(e.id, !1), K(e.authority, !1), K(e.lpVault, !1), F(r, !1), F(t.userRewardToken, !1), K(t.owner, !0)];
                    return {
                        address: {},
                        innerTransaction: {
                            instructions: [new d.TransactionInstruction({
                                programId: e.programId,
                                keys: a,
                                data: s
                            })],
                            signers: [],
                            lookupTableAddress: [],
                            instructionTypes: [nc.farmV6CreatorWithdraw]
                        }
                    }
                }
                static async fetchMultipleInfoAndUpdate({
                    connection: e,
                    pools: t,
                    owner: n,
                    config: i,
                    chainTime: r
                }) {
                    let o = !1,
                        s = !1,
                        a = [],
                        c = {};
                    for (let e of t) c[e.id.toString()] = e, 6 === e.version ? s = !0 : o = !0, a.push({
                        pubkey: e.id,
                        version: e.version,
                        key: "state",
                        poolId: e.id
                    }), a.push({
                        pubkey: e.lpVault,
                        version: e.version,
                        key: "lpVault",
                        poolId: e.id
                    }), n && a.push({
                        pubkey: this.getAssociatedLedgerAccount({
                            programId: e.programId,
                            poolId: e.id,
                            owner: n,
                            version: e.version
                        }),
                        version: e.version,
                        key: "ledger",
                        poolId: e.id
                    });
                    let u = {};
                    for (let {
                            pubkey: t,
                            version: n,
                            key: r,
                            poolId: o,
                            accountInfo: s
                        } of (await z(e, a, i))) {
                        let e = o.toBase58();
                        if ("state" === r) {
                            let i = this.getStateLayout(n);
                            if (!s || !s.data || s.data.length !== i.span) return t0.throwArgumentError("invalid farm state account info", "pools.id", t);
                            u[e] = { ...u[e],
                                apiPoolInfo: c[e],
                                state: i.decode(s.data)
                            }
                        } else if ("lpVault" === r) {
                            if (!s || !s.data || s.data.length !== e7.span) return t0.throwArgumentError("invalid farm lp vault account info", "pools.lpVault", t);
                            u[e] = { ...u[e],
                                lpVault: e7.decode(s.data)
                            }
                        } else if ("ledger" === r) {
                            let i = this.getLedgerLayout(n);
                            s && s.data && (t0.assertArgument(s.data.length === i.span, "invalid farm ledger account info", "ledger", t), u[e] = { ...u[e],
                                ledger: i.decode(s.data)
                            })
                        }
                    }
                    let l = s || o ? await e.getSlot() : 0;
                    for (let e of Object.keys(u)) void 0 !== u[e] && (u[e].state = t6.updatePoolInfo(u[e].state, u[e].lpVault, l, r));
                    for (let [e, {
                            state: t,
                            ledger: n
                        }] of Object.entries(u))
                        if (n) {
                            let i;
                            i = 6 === t.version ? t.rewardMultiplier : 1 === t.rewardInfos.length ? eo.pow(new(P())(9)) : eo.pow(new(P())(15));
                            let r = t.rewardInfos.map((e, r) => {
                                let o = n.rewardDebts[r];
                                return n.deposited.mul(6 === t.version ? e.accRewardPerShare : e.perShareReward).div(i).sub(o)
                            });
                            u[e].wrapped = { ...u[e].wrapped,
                                pendingRewards: r
                            }
                        }
                    return u
                }
                static updatePoolInfo(e, t, n, i) {
                    if (3 === e.version || 5 === e.version) {
                        if (e.lastSlot.gte(new(P())(n))) return e;
                        let i = new(P())(n).sub(e.lastSlot);
                        for (let r of (e.lastSlot = new(P())(n), e.rewardInfos)) {
                            if (t.amount.eq(new(P())(0))) continue;
                            let n = r.perSlotReward.mul(i);
                            r.perShareReward = r.perShareReward.add(n.mul(new(P())(10).pow(new(P())(3 === e.version ? 9 : 15))).div(t.amount)), r.totalReward = r.totalReward.add(n)
                        }
                    } else if (6 === e.version)
                        for (let n of e.rewardInfos) {
                            if (n.rewardState.eq(new(P())(0))) continue;
                            let r = P().min(new(P())(i), n.rewardEndTime);
                            if (n.rewardOpenTime.gte(r)) continue;
                            let o = r.sub(n.rewardLastUpdateTime).mul(n.rewardPerSecond),
                                s = n.totalReward.sub(n.totalRewardEmissioned);
                            s.lt(o) ? (o = s, n.rewardLastUpdateTime = n.rewardLastUpdateTime.add(s.div(n.rewardPerSecond))) : n.rewardLastUpdateTime = r, t.amount.eq(new(P())(0)) || (n.accRewardPerShare = n.accRewardPerShare.add(o.mul(e.rewardMultiplier).div(t.amount)), n.totalRewardEmissioned = n.totalRewardEmissioned.add(o))
                        }
                    return e
                }
                static makeCreatorWithdrawFarmRewardInstructionSimple(e) {
                    let {
                        poolKeys: t
                    } = e, {
                        version: n
                    } = t;
                    return 6 === n ? this.makeCreatorWithdrawFarmRewardInstructionV6Simple(e) : t0.throwArgumentError("invalid version", "version", n)
                }
                static async makeCreatorWithdrawFarmRewardInstructionV6Simple({
                    connection: e,
                    poolKeys: t,
                    userKeys: n,
                    withdrawMint: i,
                    makeTxVersion: r,
                    lookupTableCache: o,
                    computeBudgetConfig: s
                }) {
                    let a;
                    let c = [],
                        u = [],
                        m = [],
                        p = [],
                        f = [];
                    if (i.equals(d.PublicKey.default)) a = await tf.insertCreateWrappedNativeAccount({
                        connection: e,
                        owner: n.owner,
                        payer: n.payer ? ? n.owner,
                        instructions: c,
                        signers: f,
                        amount: 0,
                        instructionsType: m
                    }), u.push(tf.makeCloseAccountInstruction({
                        programId: l.H_,
                        tokenAccount: a,
                        owner: n.owner,
                        payer: n.payer ? ? n.owner,
                        instructionsType: p
                    }));
                    else {
                        let e = this._selectTokenAccount({
                            programId: l.H_,
                            tokenAccounts: n.tokenAccounts,
                            mint: i,
                            owner: n.owner
                        });
                        null === e ? (a = td(n.owner, i, l.H_).publicKey, c.push(tf.makeCreateAssociatedTokenAccountInstruction({
                            programId: l.H_,
                            mint: i,
                            associatedAccount: a,
                            owner: n.owner,
                            payer: n.payer ? ? n.owner,
                            instructionsType: m
                        }))) : a = e
                    }
                    let g = this.makeCreatorWithdrawFarmRewardInstructionV6({
                        poolKeys: t,
                        userKeys: {
                            userRewardToken: a,
                            owner: n.owner,
                            payer: n.payer
                        },
                        withdrawMint: i
                    });
                    return {
                        address: {},
                        innerTransactions: await $({
                            connection: e,
                            makeTxVersion: r,
                            computeBudgetConfig: s,
                            payer: n.payer ? ? n.owner,
                            innerTransaction: [{
                                instructionTypes: m,
                                instructions: c,
                                signers: f
                            }, g.innerTransaction, {
                                instructionTypes: p,
                                instructions: u,
                                signers: []
                            }],
                            lookupTableCache: o
                        })
                    }
                }
                static makeCreateFarmInstructionSimple(e) {
                    let {
                        version: t
                    } = e.poolInfo;
                    return 6 === t ? this.makeCreateFarmInstructionV6Simple(e) : t0.throwArgumentError("invalid version", "version", t)
                }
                static async makeCreateFarmInstructionV6Simple({
                    connection: e,
                    userKeys: t,
                    poolInfo: n,
                    makeTxVersion: i,
                    lookupTableCache: r,
                    computeBudgetConfig: o
                }) {
                    let s = t.payer ? ? t.owner,
                        a = tS({
                            fromPublicKey: s,
                            programId: n.programId
                        }),
                        c = await e.getMinimumBalanceForRentExemption(tq.span),
                        u = [],
                        m = [],
                        p = [],
                        f = [],
                        g = [];
                    u.push(d.SystemProgram.createAccountWithSeed({
                        fromPubkey: s,
                        basePubkey: s,
                        seed: a.seed,
                        newAccountPubkey: a.publicKey,
                        lamports: c,
                        space: tq.span,
                        programId: n.programId
                    }));
                    let {
                        publicKey: w,
                        nonce: S
                    } = t6.getAssociatedAuthority({
                        programId: n.programId,
                        poolId: a.publicKey
                    }), h = t6.getAssociatedLedgerPoolAccount({
                        programId: n.programId,
                        poolId: a.publicKey,
                        mint: n.lpMint,
                        type: "lpVault"
                    }), y = [], A = [];
                    for (let i of n.rewardInfos) {
                        let r;
                        if (t0.assertArgument(i.rewardOpenTime < i.rewardEndTime, "start time error", "rewardInfo.rewardOpenTime", i.rewardOpenTime), t0.assertArgument(void 0 !== t4[i.rewardType], "reward type error", "rewardInfo.rewardType", i.rewardType), t0.assertArgument(ec(i.rewardPerSecond).gt(ei), "rewardPerSecond error", "rewardInfo.rewardPerSecond", i.rewardPerSecond), y.push({
                                isSet: new(P())(1),
                                rewardPerSecond: ec(i.rewardPerSecond),
                                rewardOpenTime: ec(i.rewardOpenTime),
                                rewardEndTime: ec(i.rewardEndTime),
                                rewardType: ec(t4[i.rewardType])
                            }), i.rewardMint.equals(d.PublicKey.default) ? (r = await tf.insertCreateWrappedNativeAccount({
                                connection: e,
                                owner: t.owner,
                                payer: t.payer ? ? t.owner,
                                instructions: u,
                                signers: g,
                                amount: ec(i.rewardEndTime).sub(ec(i.rewardOpenTime)).mul(ec(i.rewardPerSecond)),
                                instructionsType: p
                            }), m.push(tf.makeCloseAccountInstruction({
                                programId: l.H_,
                                tokenAccount: r,
                                owner: t.owner,
                                payer: t.payer ? ? t.owner,
                                instructionsType: f
                            }))) : r = this._selectTokenAccount({
                                programId: l.H_,
                                tokenAccounts: t.tokenAccounts,
                                mint: i.rewardMint,
                                owner: t.owner,
                                config: {
                                    associatedOnly: !1
                                }
                            }), t0.assertArgument(null !== r, "cannot found target token accounts", "tokenAccounts", t.tokenAccounts), null === r) throw Error("cannot found target token accounts");
                        let o = i.rewardMint.equals(d.PublicKey.default) ? eg.WSOL.mint : i.rewardMint;
                        A.push({
                            rewardMint: o,
                            rewardVault: t6.getAssociatedLedgerPoolAccount({
                                programId: n.programId,
                                poolId: a.publicKey,
                                mint: o,
                                type: "rewardVault"
                            }),
                            userRewardToken: r
                        })
                    }
                    let b = this._selectTokenAccount({
                        programId: l.H_,
                        tokenAccounts: t.tokenAccounts,
                        mint: n.lockInfo.lockMint,
                        owner: t.owner,
                        config: {
                            associatedOnly: !1
                        }
                    });
                    t0.assertArgument(null !== b, "cannot found lock vault", "tokenAccounts", t.tokenAccounts);
                    let k = e5([eZ("isSet"), eZ("rewardPerSecond"), eZ("rewardOpenTime"), eZ("rewardEndTime"), eZ("rewardType")]),
                        T = e5([eQ("instruction"), eZ("nonce"), e8(k, 5, "rewardTimeInfo")]),
                        I = t1.alloc(T.span);
                    T.encode({
                        instruction: 0,
                        nonce: new(P())(S),
                        rewardTimeInfo: y
                    }, I);
                    let v = [K(l.H_, !1), K(V, !1), K(d.SYSVAR_RENT_PUBKEY, !1), F(a.publicKey, !1), K(w, !1), F(h, !1), K(n.lpMint, !1), F(n.lockInfo.lockVault, !1), K(n.lockInfo.lockMint, !1), F(b ? ? d.PublicKey.default, !1), K(t.owner, !0)];
                    for (let e of A) v.push(...[{
                        pubkey: e.rewardMint,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: e.rewardVault,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: e.userRewardToken,
                        isSigner: !1,
                        isWritable: !0
                    }]);
                    let C = new d.TransactionInstruction({
                        programId: n.programId,
                        keys: v,
                        data: I
                    });
                    return {
                        address: {
                            farmId: a.publicKey
                        },
                        innerTransactions: await $({
                            connection: e,
                            makeTxVersion: i,
                            computeBudgetConfig: o,
                            payer: t.payer ? ? t.owner,
                            innerTransaction: [{
                                instructionTypes: p,
                                instructions: u,
                                signers: g
                            }, {
                                instructionTypes: [nc.farmV6Create],
                                instructions: [C],
                                signers: []
                            }, {
                                instructionTypes: f,
                                instructions: m,
                                signers: []
                            }],
                            lookupTableCache: r
                        })
                    }
                }
                static makeRestartFarmInstructionSimple(e) {
                    let {
                        poolKeys: t
                    } = e, {
                        version: n
                    } = t;
                    return 6 === n ? this.makeRestartFarmInstructionV6Simple(e) : t0.throwArgumentError("invalid version", "version", n)
                }
                static async makeRestartFarmInstructionV6Simple({
                    connection: e,
                    poolKeys: t,
                    userKeys: n,
                    newRewardInfo: i,
                    makeTxVersion: r,
                    lookupTableCache: o,
                    computeBudgetConfig: s
                }) {
                    let a;
                    t0.assertArgument(i.rewardOpenTime < i.rewardEndTime, "start time error", "newRewardInfo", i);
                    let c = i.rewardMint.equals(d.PublicKey.default) ? eg.WSOL.mint : i.rewardMint,
                        u = t.rewardInfos.find(e => e.rewardMint.equals(c));
                    t0.assertArgument(u, "configuration does not exist", "rewardInfo", u);
                    let m = u ? .rewardVault ? ? d.PublicKey.default,
                        p = [],
                        f = [],
                        g = [],
                        w = [],
                        S = [];
                    if (i.rewardMint.equals(d.PublicKey.default) ? (a = await tf.insertCreateWrappedNativeAccount({
                            connection: e,
                            owner: n.owner,
                            payer: n.payer ? ? n.owner,
                            instructions: p,
                            signers: S,
                            amount: ec(i.rewardEndTime).sub(ec(i.rewardOpenTime)).mul(ec(i.rewardPerSecond)),
                            instructionsType: g
                        }), f.push(tf.makeCloseAccountInstruction({
                            programId: l.H_,
                            tokenAccount: a,
                            owner: n.owner,
                            payer: n.payer ? ? n.owner,
                            instructionsType: w
                        }))) : a = this._selectTokenAccount({
                            programId: l.H_,
                            tokenAccounts: n.tokenAccounts,
                            mint: i.rewardMint,
                            owner: n.owner,
                            config: {
                                associatedOnly: !1
                            }
                        }), t0.assertArgument(null !== a, "cannot found target token accounts", "tokenAccounts", n.tokenAccounts), null === a) throw Error("cannot found target token accounts");
                    let h = e5([eQ("instruction"), eZ("rewardReopenTime"), eZ("rewardEndTime"), eZ("rewardPerSecond")]),
                        y = t1.alloc(h.span);
                    h.encode({
                        instruction: 3,
                        rewardReopenTime: ec(i.rewardOpenTime),
                        rewardEndTime: ec(i.rewardEndTime),
                        rewardPerSecond: ec(i.rewardPerSecond)
                    }, y);
                    let A = [K(l.H_, !1), F(t.id, !1), K(t.lpVault, !1), F(m, !1), F(a, !1), K(n.owner, !0)],
                        b = new d.TransactionInstruction({
                            programId: t.programId,
                            keys: A,
                            data: y
                        });
                    return {
                        address: {},
                        innerTransactions: await $({
                            connection: e,
                            makeTxVersion: r,
                            computeBudgetConfig: s,
                            payer: n.payer ? ? n.owner,
                            innerTransaction: [{
                                instructionTypes: g,
                                instructions: p,
                                signers: S
                            }, {
                                instructionTypes: [nc.farmV6Restart],
                                instructions: [b],
                                signers: []
                            }, {
                                instructionTypes: w,
                                instructions: f,
                                signers: []
                            }],
                            lookupTableCache: o
                        })
                    }
                }
                static makeFarmCreatorAddRewardTokenInstructionSimple(e) {
                    let {
                        poolKeys: t
                    } = e, {
                        version: n
                    } = t;
                    return 6 === n ? this.makeFarmCreatorAddRewardTokenInstructionV6Simple(e) : t0.throwArgumentError("invalid version", "version", n)
                }
                static async makeFarmCreatorAddRewardTokenInstructionV6Simple({
                    connection: e,
                    poolKeys: t,
                    userKeys: n,
                    newRewardInfo: i,
                    makeTxVersion: r,
                    lookupTableCache: o,
                    computeBudgetConfig: s
                }) {
                    let a;
                    let c = t6.getAssociatedLedgerPoolAccount({
                            programId: t.programId,
                            poolId: t.id,
                            mint: i.rewardMint.equals(d.PublicKey.default) ? eg.WSOL.mint : i.rewardMint,
                            type: "rewardVault"
                        }),
                        u = [],
                        m = [],
                        p = [],
                        f = [],
                        g = [];
                    if (i.rewardMint.equals(d.PublicKey.default) ? (a = await tf.insertCreateWrappedNativeAccount({
                            connection: e,
                            owner: n.owner,
                            payer: n.payer ? ? n.owner,
                            instructions: u,
                            signers: g,
                            amount: ec(i.rewardEndTime).sub(ec(i.rewardOpenTime)).mul(ec(i.rewardPerSecond)),
                            instructionsType: p
                        }), m.push(tf.makeCloseAccountInstruction({
                            programId: l.H_,
                            tokenAccount: a,
                            owner: n.owner,
                            payer: n.payer ? ? n.owner,
                            instructionsType: f
                        }))) : a = this._selectTokenAccount({
                            programId: l.H_,
                            tokenAccounts: n.tokenAccounts,
                            mint: i.rewardMint,
                            owner: n.owner,
                            config: {
                                associatedOnly: !1
                            }
                        }), t0.assertArgument(null !== a, "cannot found target token accounts", "tokenAccounts", n.tokenAccounts), null === a) throw Error("cannot found target token accounts");
                    let w = i.rewardMint.equals(d.PublicKey.default) ? eg.WSOL.mint : i.rewardMint,
                        S = e5([eQ("instruction"), eZ("isSet"), eZ("rewardPerSecond"), eZ("rewardOpenTime"), eZ("rewardEndTime"), eZ("rewardType")]),
                        h = t1.alloc(S.span);
                    S.encode({
                        instruction: 4,
                        isSet: new(P())(1),
                        rewardPerSecond: ec(i.rewardPerSecond),
                        rewardOpenTime: ec(i.rewardOpenTime),
                        rewardEndTime: ec(i.rewardEndTime),
                        rewardType: ec(t4[i.rewardType])
                    }, h);
                    let y = [K(l.H_, !1), K(V, !1), K(d.SYSVAR_RENT_PUBKEY, !1), F(t.id, !1), K(t.authority, !1), K(w, !1), F(c, !1), F(a, !1), K(n.owner, !0)],
                        A = new d.TransactionInstruction({
                            programId: t.programId,
                            keys: y,
                            data: h
                        });
                    return {
                        address: {},
                        innerTransactions: await $({
                            connection: e,
                            makeTxVersion: r,
                            computeBudgetConfig: s,
                            payer: n.payer ? ? n.owner,
                            innerTransaction: [{
                                instructionTypes: p,
                                instructions: u,
                                signers: g
                            }, {
                                instructionTypes: [nc.farmV6CreatorAddReward],
                                instructions: [A],
                                signers: []
                            }, {
                                instructionTypes: f,
                                instructions: m,
                                signers: []
                            }],
                            lookupTableCache: o
                        })
                    }
                }
                static async makeDepositInstructionSimple({
                    connection: e,
                    poolKeys: t,
                    fetchPoolInfo: n,
                    ownerInfo: i,
                    amount: r,
                    associatedOnly: o = !0,
                    checkCreateATAOwner: s = !1,
                    makeTxVersion: a,
                    lookupTableCache: c,
                    computeBudgetConfig: u
                }) {
                    let m = {};
                    for (let e of i.tokenAccounts) o ? td(i.wallet, e.accountInfo.mint, e.programId).publicKey.equals(e.pubkey) && (m[e.accountInfo.mint.toString()] = e.pubkey) : m[e.accountInfo.mint.toString()] = e.pubkey;
                    let p = [],
                        f = [],
                        g = [],
                        w = [],
                        S = [],
                        {
                            lpVault: h,
                            apiPoolInfo: y,
                            ledger: A
                        } = n,
                        b = m[h.mint.toString()];
                    t0.assertArgument(b, "you don't have any lp", "lp zero", m);
                    let k = [];
                    for (let t of y.rewardInfos) {
                        let n = i.useSOLBalance && t.rewardMint.equals(eg.WSOL.mint),
                            r = m[t.rewardMint.toString()] ? ? await this._selectOrCreateTokenAccount({
                                programId: l.H_,
                                mint: t.rewardMint,
                                tokenAccounts: n ? [] : i.tokenAccounts,
                                owner: i.wallet,
                                createInfo: {
                                    connection: e,
                                    payer: i.feePayer,
                                    amount: 0,
                                    frontInstructions: p,
                                    frontInstructionsType: g,
                                    endInstructions: n ? f : [],
                                    endInstructionsType: n ? w : [],
                                    signers: S
                                },
                                associatedOnly: !n && o,
                                checkCreateATAOwner: s
                            });
                        m[t.rewardMint.toString()] = r, k.push(r)
                    }
                    let T = await t6.getAssociatedLedgerAccount({
                        programId: new d.PublicKey(y.programId),
                        poolId: new d.PublicKey(y.id),
                        owner: i.wallet,
                        version: y.version
                    });
                    if (y.version < 6 && !A) {
                        let e = t6.makeCreateAssociatedLedgerAccountInstruction({
                            poolKeys: t,
                            userKeys: {
                                owner: i.wallet,
                                ledger: T
                            }
                        });
                        p.push(...e.innerTransaction.instructions), g.push(...e.innerTransaction.instructionTypes)
                    }
                    let I = t6.makeDepositInstruction({
                        poolKeys: t,
                        userKeys: {
                            ledger: T,
                            lpTokenAccount: b,
                            owner: i.wallet,
                            rewardTokenAccounts: k
                        },
                        amount: r
                    });
                    return {
                        address: I.address,
                        innerTransactions: await $({
                            connection: e,
                            makeTxVersion: a,
                            computeBudgetConfig: u,
                            payer: i.feePayer,
                            innerTransaction: [{
                                instructionTypes: g,
                                instructions: p,
                                signers: S
                            }, I.innerTransaction, {
                                instructionTypes: w,
                                instructions: f,
                                signers: []
                            }],
                            lookupTableCache: c
                        })
                    }
                }
                static async makeWithdrawInstructionSimple({
                    connection: e,
                    fetchPoolInfo: t,
                    ownerInfo: n,
                    amount: i,
                    associatedOnly: r = !0,
                    checkCreateATAOwner: o = !1,
                    makeTxVersion: s,
                    lookupTableCache: a,
                    computeBudgetConfig: c
                }) {
                    let u = {};
                    for (let e of n.tokenAccounts) r ? td(n.wallet, e.accountInfo.mint, e.programId).publicKey.equals(e.pubkey) && (u[e.accountInfo.mint.toString()] = e.pubkey) : u[e.accountInfo.mint.toString()] = e.pubkey;
                    let m = [],
                        d = [],
                        p = [],
                        f = [],
                        g = [],
                        w = [],
                        S = [],
                        {
                            lpVault: h,
                            wrapped: y,
                            apiPoolInfo: A
                        } = t;
                    if (void 0 === y) throw Error("no lp");
                    let b = h.mint,
                        k = n.useSOLBalance && b.equals(eg.WSOL.mint),
                        T = u[b.toString()] ? ? await this._selectOrCreateTokenAccount({
                            programId: l.H_,
                            mint: b,
                            tokenAccounts: k ? [] : n.tokenAccounts,
                            owner: n.wallet,
                            createInfo: {
                                connection: e,
                                payer: n.feePayer,
                                amount: 0,
                                frontInstructions: m,
                                frontInstructionsType: p,
                                signers: S
                            },
                            associatedOnly: !k && r,
                            checkCreateATAOwner: o
                        });
                    u[b.toString()] = T;
                    let I = [];
                    for (let t of A.rewardInfos) {
                        let i = n.useSOLBalance && t.rewardMint.equals(eg.WSOL.mint),
                            s = u[t.rewardMint.toString()] ? ? await this._selectOrCreateTokenAccount({
                                programId: l.H_,
                                mint: t.rewardMint,
                                tokenAccounts: i ? [] : n.tokenAccounts,
                                owner: n.wallet,
                                createInfo: {
                                    connection: e,
                                    payer: n.feePayer,
                                    amount: 0,
                                    frontInstructions: m,
                                    frontInstructionsType: p,
                                    endInstructions: i ? d : [],
                                    endInstructionsType: i ? f : [],
                                    signers: S
                                },
                                associatedOnly: !i && r,
                                checkCreateATAOwner: o
                            });
                        u[t.rewardMint.toString()] = s, I.push(s)
                    }
                    let P = this.makeWithdrawInstruction({
                        poolKeys: A,
                        userKeys: {
                            ledger: this.getAssociatedLedgerAccount({
                                programId: A.programId,
                                poolId: A.id,
                                owner: n.wallet,
                                version: A.version
                            }),
                            lpTokenAccount: T,
                            rewardTokenAccounts: I,
                            owner: n.wallet
                        },
                        amount: i
                    });
                    return g.push(...P.innerTransaction.instructions), w.push(...P.innerTransaction.instructionTypes), {
                        address: {},
                        innerTransactions: await $({
                            connection: e,
                            makeTxVersion: s,
                            computeBudgetConfig: c,
                            payer: n.feePayer,
                            innerTransaction: [{
                                instructionTypes: p,
                                instructions: m,
                                signers: S
                            }, {
                                instructionTypes: w,
                                instructions: g,
                                signers: []
                            }, {
                                instructionTypes: f,
                                instructions: d,
                                signers: []
                            }],
                            lookupTableCache: a
                        })
                    }
                }
                static async makeHarvestAllRewardInstructionSimple({
                    connection: e,
                    fetchPoolInfos: t,
                    ownerInfo: n,
                    associatedOnly: i = !0,
                    checkCreateATAOwner: r = !1,
                    makeTxVersion: o,
                    lookupTableCache: s,
                    computeBudgetConfig: a
                }) {
                    let c = {};
                    for (let e of n.tokenAccounts) i ? td(n.wallet, e.accountInfo.mint, e.programId).publicKey.equals(e.pubkey) && (c[e.accountInfo.mint.toString()] = e.pubkey) : c[e.accountInfo.mint.toString()] = e.pubkey;
                    let u = [],
                        m = [],
                        d = [],
                        p = [],
                        f = [],
                        g = [];
                    for (let {
                            lpVault: o,
                            wrapped: s,
                            apiPoolInfo: a,
                            ledger: w
                        } of Object.values(t)) {
                        if (void 0 === s || void 0 === w || !(void 0 !== s.pendingRewards.find(e => e.gt(ei)) || w.deposited.isZero())) continue;
                        let t = o.mint,
                            S = n.useSOLBalance && t.equals(eg.WSOL.mint),
                            h = c[t.toString()] ? ? await this._selectOrCreateTokenAccount({
                                programId: l.H_,
                                mint: t,
                                tokenAccounts: S ? [] : n.tokenAccounts,
                                owner: n.wallet,
                                createInfo: {
                                    connection: e,
                                    payer: n.feePayer,
                                    amount: 0,
                                    frontInstructions: u,
                                    frontInstructionsType: d,
                                    signers: g
                                },
                                associatedOnly: !S && i,
                                checkCreateATAOwner: r
                            });
                        c[t.toString()] = h;
                        let y = [];
                        for (let t of a.rewardInfos) {
                            let o = n.useSOLBalance && t.rewardMint.equals(eg.WSOL.mint),
                                s = c[t.rewardMint.toString()] ? ? await this._selectOrCreateTokenAccount({
                                    programId: l.H_,
                                    mint: t.rewardMint,
                                    tokenAccounts: o ? [] : n.tokenAccounts,
                                    owner: n.wallet,
                                    createInfo: {
                                        connection: e,
                                        payer: n.feePayer,
                                        amount: 0,
                                        frontInstructions: u,
                                        frontInstructionsType: d,
                                        endInstructions: o ? m : [],
                                        endInstructionsType: o ? p : [],
                                        signers: g
                                    },
                                    associatedOnly: !o && i,
                                    checkCreateATAOwner: r
                                });
                            c[t.rewardMint.toString()] = s, y.push(s)
                        }
                        let A = this.makeWithdrawInstruction({
                            poolKeys: a,
                            userKeys: {
                                ledger: this.getAssociatedLedgerAccount({
                                    programId: a.programId,
                                    poolId: a.id,
                                    owner: n.wallet,
                                    version: a.version
                                }),
                                lpTokenAccount: h,
                                rewardTokenAccounts: y,
                                owner: n.wallet
                            },
                            amount: 0
                        });
                        f.push(A.innerTransaction)
                    }
                    return {
                        address: {},
                        innerTransactions: await $({
                            connection: e,
                            makeTxVersion: o,
                            computeBudgetConfig: a,
                            payer: n.feePayer,
                            innerTransaction: [{
                                instructionTypes: d,
                                instructions: u,
                                signers: g
                            }, ...f, {
                                instructionTypes: p,
                                instructions: m,
                                signers: []
                            }],
                            lookupTableCache: s
                        })
                    }
                }
                static async makeV1InfoToV2PdaAndHarvestSimple({
                    connection: e,
                    wallet: t,
                    tokenAccounts: n,
                    programIdV3: i,
                    programIdV5: r,
                    makeTxVersion: o,
                    lookupTableCache: s,
                    computeBudgetConfig: a
                }) {
                    let c = {};
                    for (let e of n) {
                        let n = e.accountInfo.mint,
                            i = td(t, n, e.programId).publicKey;
                        i.equals(e.pubkey) && (c[n.toString()] = i), void 0 === c[n.toString()] && (c[n.toString()] = e.pubkey)
                    }
                    let u = await e.getProgramAccounts(i, {
                            filters: [{
                                memcmp: {
                                    offset: 40,
                                    bytes: t.toString()
                                }
                            }]
                        }),
                        l = await e.getProgramAccounts(r, {
                            filters: [{
                                memcmp: {
                                    offset: 40,
                                    bytes: t.toString()
                                }
                            }]
                        }),
                        m = {},
                        p = {};
                    for (let e of u) {
                        let n = (e.account.data.length === tV.span ? tV : tB).decode(e.account.data),
                            r = n.id.toString(),
                            o = this.getAssociatedLedgerAccount({
                                programId: i,
                                poolId: n.id,
                                owner: t,
                                version: 3
                            });
                        void 0 === m[r] && (m[r] = {
                            pda: void 0,
                            other: []
                        }), o.equals(e.pubkey) ? m[r].pda = e.pubkey : m[r].other.push(e.pubkey)
                    }
                    for (let e of l) {
                        let n = (e.account.data.length === t_.span ? t_ : tx).decode(e.account.data),
                            i = n.id.toString(),
                            o = this.getAssociatedLedgerAccount({
                                programId: r,
                                poolId: n.id,
                                owner: t,
                                version: 5
                            });
                        void 0 === p[i] && (p[i] = {
                            pda: void 0,
                            other: []
                        }), o.equals(e.pubkey) ? p[i].pda = e.pubkey : p[i].other.push(e.pubkey)
                    }
                    let f = [...Object.entries(m).filter(e => e[1].other.length > 0).map(e => e[0]), ...Object.entries(p).filter(e => e[1].other.length > 0).map(e => e[0])],
                        g = await e.getMultipleAccountsInfo(f.map(e => new d.PublicKey(e))),
                        w = {};
                    for (let e = 0; e < f.length; e++) {
                        let t = f[e],
                            n = g[e];
                        null !== n && (w[t] = n.data)
                    }
                    let S = [],
                        h = [],
                        y = [],
                        A = [],
                        b = [];
                    for (let [n, r] of Object.entries(m)) {
                        if (0 === r.other.length || void 0 === w[n]) continue;
                        let o = tL.decode(w[n]),
                            [s, a] = await e.getMultipleAccountsInfo([o.lpVault, o.rewardVault]);
                        if (null === s || null === a) throw Error("get lp and reward info error");
                        let u = e7.decode(s.data),
                            l = e7.decode(a.data),
                            m = c[u.mint.toString()];
                        void 0 === m && (m = await this._selectOrCreateTokenAccount({
                            programId: s.owner,
                            mint: u.mint,
                            tokenAccounts: [],
                            owner: t,
                            createInfo: {
                                connection: e,
                                payer: t,
                                amount: 0,
                                frontInstructions: S,
                                frontInstructionsType: h,
                                endInstructions: [],
                                endInstructionsType: [],
                                signers: []
                            },
                            associatedOnly: !0,
                            checkCreateATAOwner: !0
                        }), c[u.mint.toString()] = m);
                        let p = c[l.mint.toString()];
                        if (void 0 === p && (p = await this._selectOrCreateTokenAccount({
                                programId: a.owner,
                                mint: l.mint,
                                tokenAccounts: [],
                                owner: t,
                                createInfo: {
                                    connection: e,
                                    payer: t,
                                    amount: 0,
                                    frontInstructions: S,
                                    frontInstructionsType: h,
                                    endInstructions: l.mint.toString() === em.mint ? A : [],
                                    endInstructionsType: l.mint.toString() === em.mint ? b : [],
                                    signers: []
                                },
                                associatedOnly: !0,
                                checkCreateATAOwner: !0
                            }), c[l.mint.toString()] = p), void 0 === r.pda) {
                            let e = this.makeCreateAssociatedLedgerAccountInstructionV3({
                                poolKeys: {
                                    programId: i,
                                    id: new d.PublicKey(n)
                                },
                                userKeys: {
                                    ledger: this.getAssociatedLedgerAccount({
                                        programId: i,
                                        poolId: new d.PublicKey(n),
                                        owner: t,
                                        version: 3
                                    }),
                                    owner: t
                                }
                            });
                            y.push(e.innerTransaction)
                        }
                        let f = this.makeDepositInstructionV3({
                            amount: 0,
                            userKeys: {
                                ledger: this.getAssociatedLedgerAccount({
                                    programId: i,
                                    poolId: new d.PublicKey(n),
                                    owner: t,
                                    version: 3
                                }),
                                owner: t,
                                lpTokenAccount: m,
                                rewardTokenAccounts: [p],
                                auxiliaryLedgers: r.other
                            },
                            poolKeys: {
                                programId: i,
                                id: new d.PublicKey(n),
                                authority: this.getAssociatedAuthority({
                                    programId: i,
                                    poolId: new d.PublicKey(n)
                                }).publicKey,
                                lpVault: o.lpVault,
                                rewardInfos: [{
                                    rewardVault: o.rewardVault
                                }]
                            }
                        });
                        y.push(f.innerTransaction)
                    }
                    for (let [n, i] of Object.entries(p)) {
                        if (0 === i.other.length || void 0 === w[n]) continue;
                        let o = tD.decode(w[n]),
                            [s, a, u] = await e.getMultipleAccountsInfo([o.lpVault, o.rewardVaultA, o.rewardVaultB]);
                        if (null === s || null === a || null === u) throw Error("get lp and reward A / B info error");
                        let l = e7.decode(s.data),
                            m = e7.decode(a.data),
                            p = e7.decode(u.data),
                            f = c[l.mint.toString()];
                        void 0 === f && (f = await this._selectOrCreateTokenAccount({
                            programId: s.owner,
                            mint: l.mint,
                            tokenAccounts: [],
                            owner: t,
                            createInfo: {
                                connection: e,
                                payer: t,
                                amount: 0,
                                frontInstructions: S,
                                frontInstructionsType: h,
                                endInstructions: [],
                                endInstructionsType: [],
                                signers: []
                            },
                            associatedOnly: !0,
                            checkCreateATAOwner: !0
                        }), c[l.mint.toString()] = f);
                        let g = c[m.mint.toString()];
                        void 0 === g && (g = await this._selectOrCreateTokenAccount({
                            programId: a.owner,
                            mint: m.mint,
                            tokenAccounts: [],
                            owner: t,
                            createInfo: {
                                connection: e,
                                payer: t,
                                amount: 0,
                                frontInstructions: S,
                                frontInstructionsType: h,
                                endInstructions: m.mint.toString() === em.mint ? A : [],
                                endInstructionsType: m.mint.toString() === em.mint ? b : [],
                                signers: []
                            },
                            associatedOnly: !0,
                            checkCreateATAOwner: !0
                        }), c[m.mint.toString()] = g);
                        let k = c[p.mint.toString()];
                        if (void 0 === k && (k = await this._selectOrCreateTokenAccount({
                                programId: u.owner,
                                mint: p.mint,
                                tokenAccounts: [],
                                owner: t,
                                createInfo: {
                                    connection: e,
                                    payer: t,
                                    amount: 0,
                                    frontInstructions: S,
                                    frontInstructionsType: h,
                                    endInstructions: p.mint.toString() === em.mint ? A : [],
                                    endInstructionsType: p.mint.toString() === em.mint ? b : [],
                                    signers: []
                                },
                                associatedOnly: !0,
                                checkCreateATAOwner: !0
                            }), c[p.mint.toString()] = k), void 0 === i.pda) {
                            let e = this.makeCreateAssociatedLedgerAccountInstructionV5({
                                poolKeys: {
                                    programId: r,
                                    id: new d.PublicKey(n)
                                },
                                userKeys: {
                                    ledger: this.getAssociatedLedgerAccount({
                                        programId: r,
                                        poolId: new d.PublicKey(n),
                                        owner: t,
                                        version: 5
                                    }),
                                    owner: t
                                }
                            });
                            y.push(e.innerTransaction)
                        }
                        let T = this.makeDepositInstructionV5({
                            amount: 0,
                            userKeys: {
                                ledger: this.getAssociatedLedgerAccount({
                                    programId: r,
                                    poolId: new d.PublicKey(n),
                                    owner: t,
                                    version: 5
                                }),
                                owner: t,
                                lpTokenAccount: f,
                                rewardTokenAccounts: [g, k],
                                auxiliaryLedgers: i.other
                            },
                            poolKeys: {
                                programId: r,
                                id: new d.PublicKey(n),
                                authority: this.getAssociatedAuthority({
                                    programId: r,
                                    poolId: new d.PublicKey(n)
                                }).publicKey,
                                lpVault: o.lpVault,
                                rewardInfos: [{
                                    rewardVault: o.rewardVaultA
                                }, {
                                    rewardVault: o.rewardVaultB
                                }]
                            }
                        });
                        y.push(T.innerTransaction)
                    }
                    return {
                        address: {},
                        innerTransactions: await $({
                            connection: e,
                            makeTxVersion: o,
                            computeBudgetConfig: a,
                            payer: t,
                            innerTransaction: [{
                                instructionTypes: h.slice(0, 10),
                                instructions: S.slice(0, 10),
                                signers: []
                            }, ...S.length > 10 ? [{
                                instructionTypes: h.slice(10),
                                instructions: S.slice(10),
                                signers: []
                            }] : [], ...y, {
                                instructionTypes: b,
                                instructions: A,
                                signers: []
                            }],
                            lookupTableCache: s
                        })
                    }
                }
                static async makeDepositTokenInstruction({
                    connection: e,
                    programId: t,
                    governanceProgramId: n,
                    voteWeightAddinProgramId: i,
                    realm: r,
                    communityTokenMint: o,
                    owner: s,
                    poolId: a
                }) {
                    let c = tz(i, r, o).publicKey,
                        u = this.getAssociatedLedgerAccount({
                            programId: t,
                            poolId: a,
                            owner: s,
                            version: 3
                        }),
                        m = await e.getAccountInfo(u);
                    if (null === m) throw Error("user is not staker");
                    let p = tB.decode(m.data),
                        f = p.deposited.sub(p.voteLockedBalance);
                    if (f.eq(ei)) throw Error("user do not has new stake amount");
                    let g = tQ(t, a).publicKey,
                        w = tj(t, a).publicKey,
                        {
                            publicKey: S,
                            nonce: h
                        } = tZ(i, c, s),
                        y = td(S, g, l.H_).publicKey,
                        {
                            publicKey: A,
                            nonce: b
                        } = tJ(i, c, s),
                        k = t$(n, r, o, s).publicKey,
                        T = [],
                        I = td(s, g, l.H_).publicKey;
                    if (null === await e.getAccountInfo(I) && T.push(tf.makeCreateAssociatedTokenAccountInstruction({
                            programId: l.H_,
                            mint: g,
                            associatedAccount: I,
                            owner: s,
                            payer: s,
                            instructionsType: []
                        })), null === await e.getAccountInfo(S)) {
                        let e = function(e, t, n, i, r, o) {
                            let s = e5([eQ("ins")]),
                                a = [K(t, !1), K(n, !1), F(o, !1), K(i, !1), F(r, !0), K(V, !1)],
                                c = tv.alloc(s.span);
                            return s.encode({
                                ins: 23
                            }, c), new d.TransactionInstruction({
                                keys: a,
                                programId: e,
                                data: c
                            })
                        }(n, r, s, o, s, k);
                        T.push(e, function(e, t, n, i, r, o, s, a) {
                            let c = e5([eQ("voterBump"), eQ("voterWeightRecordBump")]),
                                u = [K(t, !1), F(n, !1), K(r, !0), F(i, !1), F(o, !0), K(V, !1), K(_, !1), K(N, !1)],
                                l = tv.alloc(c.span);
                            c.encode({
                                voterBump: s,
                                voterWeightRecordBump: a
                            }, l);
                            let m = tv.from([...tC.voterStakeRegistryCreateVoter, ...l]);
                            return new d.TransactionInstruction({
                                keys: u,
                                programId: e,
                                data: m
                            })
                        }(i, c, S, A, s, s, h, b))
                    }
                    let {
                        index: P,
                        isInit: v
                    } = await t2(e, c, S, g);
                    return v || T.push(function(e, t, n, i, r, o, s, a, c, u, m, p) {
                        let f = e5([eQ("depositEntryIndex"), eQ("kind"), eQ("option"), eZ("startTs"), ej("periods"), e4("allowClawback")]),
                            g = [K(t, !1), F(n, !1), F(i, !1), K(r, !0), F(o, !0), K(s, !1), K(V, !1), K(l.H_, !1), K(l._u, !1), K(_, !1)],
                            w = tv.alloc(f.span);
                        f.encode({
                            depositEntryIndex: a,
                            kind: 0,
                            option: void 0 === u ? 0 : 1,
                            startTs: u ? ? ei,
                            periods: 0,
                            allowClawback: p
                        }, w);
                        let S = tv.from([...tC.voterStakeRegistryCreateDepositEntry, ...w]);
                        return new d.TransactionInstruction({
                            keys: g,
                            programId: e,
                            data: S
                        })
                    }(i, c, S, y, s, s, g, P, 0, void 0, 0, !1)), T.push(function(e, t, n, i, r, o, s, a, c, u, m, p, f) {
                        let g = e5([eQ("depositEntryIndex"), eZ("amount")]),
                            w = [K(t, !1), F(n, !1), F(i, !1), F(r, !1), K(o, !0), K(l.H_, !1), F(s, !1), K(a, !1), F(c, !1), K(u, !1), K(m, !1), K(N, !1)],
                            S = tv.alloc(g.span);
                        g.encode({
                            depositEntryIndex: p,
                            amount: f
                        }, S);
                        let h = tv.from([...tC.voterStakeRegistryDeposit, ...S]);
                        return new d.TransactionInstruction({
                            keys: w,
                            programId: e,
                            data: h
                        })
                    }(i, c, S, y, I, s, u, a, g, w, t, P, f), function(e, t, n, i) {
                        let r = e5([]),
                            o = [K(t, !1), K(n, !1), F(i, !1), K(V, !1)],
                            s = tv.alloc(r.span);
                        r.encode({}, s);
                        let a = tv.from([...tC.voterStakeRegistryUpdateVoterWeightRecord, ...s]);
                        return new d.TransactionInstruction({
                            keys: o,
                            programId: e,
                            data: a
                        })
                    }(i, c, S, A)), {
                        address: {},
                        innerTransaction: {
                            instructions: T,
                            signers: [],
                            lookupTableAddress: [],
                            instructionTypes: Array(T.length).fill(nc.test)
                        }
                    }
                }
                static async makeWithdrawTokenInstruction({
                    connection: e,
                    programId: t,
                    governanceProgramId: n,
                    voteWeightAddinProgramId: i,
                    realm: r,
                    communityTokenMint: o,
                    owner: s,
                    poolId: a
                }) {
                    let c = tz(i, r, o).publicKey,
                        u = this.getAssociatedLedgerAccount({
                            programId: t,
                            poolId: a,
                            owner: s,
                            version: 3
                        }),
                        m = await e.getAccountInfo(u);
                    if (null === m) throw Error("user is not staker");
                    let p = tB.decode(m.data);
                    if (p.voteLockedBalance.eq(ei)) throw Error("user has vote locked balance = 0");
                    let f = tQ(t, a).publicKey,
                        g = tj(t, a).publicKey,
                        {
                            publicKey: w
                        } = tZ(i, c, s),
                        S = td(w, f, l.H_).publicKey,
                        {
                            publicKey: h
                        } = tJ(i, c, s),
                        y = t$(n, r, o, s).publicKey,
                        A = [],
                        {
                            index: b,
                            isInit: k
                        } = await t2(e, c, w, f);
                    if (!k) throw Error("deposit entry index check error");
                    return A.push(function(e, t, n, i, r, o, s, a, c, u, m, p, f, g, w) {
                        let S = e5([eQ("depositEntryIndex"), eZ("amount")]),
                            h = [K(t, !1), F(n, !1), K(i, !0), K(r, !1), F(o, !1), F(s, !1), F(a, !1), K(l.H_, !1), F(c, !1), K(u, !1), F(m, !1), K(p, !1), K(f, !1), K(N, !1)],
                            y = tv.alloc(S.span);
                        S.encode({
                            depositEntryIndex: g,
                            amount: w
                        }, y);
                        let A = tv.from([...tC.voterStakeRegistryWithdraw, ...y]);
                        return new d.TransactionInstruction({
                            keys: h,
                            programId: e,
                            data: A
                        })
                    }(i, c, w, s, y, h, S, td(s, f, l.H_).publicKey, u, a, f, g, t, b, p.voteLockedBalance)), {
                        address: {},
                        innerTransaction: {
                            instructions: A,
                            signers: [],
                            lookupTableAddress: [],
                            instructionTypes: Array(A.length).fill(nc.test)
                        }
                    }
                }
            }
            async function t2(e, t, n, i) {
                let r = await e.getAccountInfo(t);
                if (null === r) throw Error("registrar info check error");
                let o = tK.decode(r.data).votingMints.findIndex(e => e.mint.equals(i));
                if (-1 === o) throw Error("find voter mint error");
                let s = await e.getAccountInfo(n);
                if (null === s) return {
                    index: o,
                    isInit: !1
                };
                let a = tX.decode(s.data).deposits.findIndex(e => e.isUsed && e.votingMintConfigIdx === o);
                return -1 === a ? {
                    index: o,
                    isInit: !1
                } : {
                    index: a,
                    isInit: !0
                }
            }
            ep.RAY_USDT_V4, ed.RAY, ep.xCOPE_USDC_V4, ep.STEP_USDC_V4, ep.MEDIA_USDC_V4, ep.COPE_USDC_V4, ep.MER_USDC_V4, ep.ROPE_USDC_V4, ep.ALEPH_USDC_V4, ep.TULIP_USDC_V4, ep.SNY_USDC_V4, ep.BOP_RAY_V4, ep.SLRS_USDC_V4, ep.SAMO_RAY_V4, ep.LIKE_USDC_V4, ep.RAY_SOL_V4, ep.RAY_USDC_V4, ep.RAY_ETH_V4, ep.RAY_SRM_V4, ep.MNGO_USDC_V4, ep.COPE_RAY_V4, ep.LIKE_RAY_V4, ep.MEDIA_RAY_V4, ep.MER_RAY_V4, ep.SLRS_RAY_V4, ep.SNY_RAY_V4, ep.TULIP_RAY_V4, ep.ALEPH_RAY_V4, ep.RAY_SRM_V4, ep.ATLAS_USDC_V4, ep.POLIS_USDC_V4, ep.ATLAS_RAY_V4, ep.POLIS_RAY_V4, ep.GRAPE_USDC_V4, ep.LARIX_USDC_V4, ep.LARIX_RAY_V4, ep.stSOL_USDC_V4, ep.BTC_mSOL_V4, ep.ETH_mSOL_V4, ep.mSOL_USDT_V4, ep.MNDE_mSOL_V4, ep.mSOL_USDC_V4, ep.mSOL_RAY_V4, ep.LIQ_USDC_V4, ep.LIQ_RAY_V4, ep.SYP_RAY_V4, ep.SYP_SOL_V4, ep.SYP_USDC_V4, ep.WOOF_RAY_V4, ep.KIN_RAY_V4, ep.STARS_USDC_V4, ep.weWETH_SOL_V4, ep.weWETH_USDC_V4, ep.weUNI_USDC_V4, ep.weSUSHI_USDC_V4, ep.weAXS_USDC_V4, ep.weDYDX_USDC_V4, ep.weSHIB_USDC_V4, ep.weSAND_USDC_V4, ep.weMANA_USDC_V4, ep.wbWBNB_USDC_V4, ep.wePEOPLE_USDC_V4, ep.SRM_USDC_V4, ep.CAVE_USDC_V4, ep.GENE_USDC_V4, ep.GENE_RAY_V4, ep.CWAR_USDC_V4, ep.SONAR_USDC_V4, ep.APT_USDC_V4, ep.SHILL_USDC_V4, ep.DFL_USDC_V4, ep.BOKU_USDC_V4, ep.MIMO_SOL_V4, ep.XTAG_USDC_V4, ep.TTT_USDC_V4, ep.SOL_USDC_V4, ep.SOL_USDT_V4, ep.RUN_USDC_V4, ep.CRWNY_RAY_V4, ep.CRWNY_USDC_V4, ep.REAL_USDC_V4, ep.BLOCK_USDC_V4, ep.FRKT_SOL_V4, ep.FRKT_USDC_V4, ep.MBS_USDC_V4, ep.PRISM_USDC_V4, ep.CHICKS_USDC_V4, ep.MEAN_RAY_V4, ep.TINY_USDC_V4, ep.SCY_USDC_V4;
            let t3 = {
                4: e5([eZ("status"), eZ("nonce"), eZ("maxOrder"), eZ("depth"), eZ("baseDecimal"), eZ("quoteDecimal"), eZ("state"), eZ("resetFlag"), eZ("minSize"), eZ("volMaxCutRatio"), eZ("amountWaveRatio"), eZ("baseLotSize"), eZ("quoteLotSize"), eZ("minPriceMultiplier"), eZ("maxPriceMultiplier"), eZ("systemDecimalValue"), eZ("minSeparateNumerator"), eZ("minSeparateDenominator"), eZ("tradeFeeNumerator"), eZ("tradeFeeDenominator"), eZ("pnlNumerator"), eZ("pnlDenominator"), eZ("swapFeeNumerator"), eZ("swapFeeDenominator"), eZ("baseNeedTakePnl"), eZ("quoteNeedTakePnl"), eZ("quoteTotalPnl"), eZ("baseTotalPnl"), eZ("poolOpenTime"), eZ("punishPcAmount"), eZ("punishCoinAmount"), eZ("orderbookToInitTime"), eJ("swapBaseInAmount"), eJ("swapQuoteOutAmount"), eZ("swapBase2QuoteFee"), eJ("swapQuoteInAmount"), eJ("swapBaseOutAmount"), eZ("swapQuote2BaseFee"), e0("baseVault"), e0("quoteVault"), e0("baseMint"), e0("quoteMint"), e0("lpMint"), e0("openOrders"), e0("marketId"), e0("marketProgramId"), e0("targetOrders"), e0("withdrawQueue"), e0("lpVault"), e0("owner"), eZ("lpReserve"), e8(eZ(), 3, "padding")]),
                5: e5([eZ("accountType"), eZ("status"), eZ("nonce"), eZ("maxOrder"), eZ("depth"), eZ("baseDecimal"), eZ("quoteDecimal"), eZ("state"), eZ("resetFlag"), eZ("minSize"), eZ("volMaxCutRatio"), eZ("amountWaveRatio"), eZ("baseLotSize"), eZ("quoteLotSize"), eZ("minPriceMultiplier"), eZ("maxPriceMultiplier"), eZ("systemDecimalsValue"), eZ("abortTradeFactor"), eZ("priceTickMultiplier"), eZ("priceTick"), eZ("minSeparateNumerator"), eZ("minSeparateDenominator"), eZ("tradeFeeNumerator"), eZ("tradeFeeDenominator"), eZ("pnlNumerator"), eZ("pnlDenominator"), eZ("swapFeeNumerator"), eZ("swapFeeDenominator"), eZ("baseNeedTakePnl"), eZ("quoteNeedTakePnl"), eZ("quoteTotalPnl"), eZ("baseTotalPnl"), eZ("poolOpenTime"), eZ("punishPcAmount"), eZ("punishCoinAmount"), eZ("orderbookToInitTime"), eJ("swapBaseInAmount"), eJ("swapQuoteOutAmount"), eJ("swapQuoteInAmount"), eJ("swapBaseOutAmount"), eZ("swapQuote2BaseFee"), eZ("swapBase2QuoteFee"), e0("baseVault"), e0("quoteVault"), e0("baseMint"), e0("quoteMint"), e0("lpMint"), e0("modelDataAccount"), e0("openOrders"), e0("marketId"), e0("marketProgramId"), e0("targetOrders"), e0("owner"), e8(eZ(), 64, "padding")])
            };
            /*!
             *  decimal.js v10.4.3
             *  An arbitrary-precision Decimal type for JavaScript.
             *  https://github.com/MikeMcl/decimal.js
             *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
             *  MIT Licence
             */
            var t5, t8, t7, t9, ne, nt, nn, ni, nr, no, ns, na, nc, nu, nl, nm, nd = "0123456789abcdef",
                np = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
                nf = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
                ng = {
                    precision: 20,
                    rounding: 4,
                    modulo: 1,
                    toExpNeg: -7,
                    toExpPos: 21,
                    minE: -9e15,
                    maxE: 9e15,
                    crypto: !1
                },
                nw = !0,
                nS = "[DecimalError] ",
                nh = nS + "Invalid argument: ",
                ny = nS + "Precision limit exceeded",
                nA = nS + "crypto unavailable",
                nb = "[object Decimal]",
                nk = Math.floor,
                nT = Math.pow,
                nI = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
                nP = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
                nv = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
                nC = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
                nL = np.length - 1,
                nD = nf.length - 1,
                nR = {
                    toStringTag: nb
                };

            function nE(e) {
                var t, n, i, r = e.length - 1,
                    o = "",
                    s = e[0];
                if (r > 0) {
                    for (o += s, t = 1; t < r; t++)(n = 7 - (i = e[t] + "").length) && (o += nF(n)), o += i;
                    (n = 7 - (i = (s = e[t]) + "").length) && (o += nF(n))
                } else if (0 === s) return "0";
                for (; s % 10 == 0;) s /= 10;
                return o + s
            }

            function nO(e, t, n) {
                if (e !== ~~e || e < t || e > n) throw Error(nh + e)
            }

            function nU(e, t, n, i) {
                var r, o, s, a;
                for (o = e[0]; o >= 10; o /= 10) --t;
                return --t < 0 ? (t += 7, r = 0) : (r = Math.ceil((t + 1) / 7), t %= 7), o = nT(10, 7 - t), a = e[r] % o | 0, null == i ? t < 3 ? (0 == t ? a = a / 100 | 0 : 1 == t && (a = a / 10 | 0), s = n < 4 && 99999 == a || n > 3 && 49999 == a || 5e4 == a || 0 == a) : s = (n < 4 && a + 1 == o || n > 3 && a + 1 == o / 2) && (e[r + 1] / o / 100 | 0) == nT(10, t - 2) - 1 || (a == o / 2 || 0 == a) && (e[r + 1] / o / 100 | 0) == 0 : t < 4 ? (0 == t ? a = a / 1e3 | 0 : 1 == t ? a = a / 100 | 0 : 2 == t && (a = a / 10 | 0), s = (i || n < 4) && 9999 == a || !i && n > 3 && 4999 == a) : s = ((i || n < 4) && a + 1 == o || !i && n > 3 && a + 1 == o / 2) && (e[r + 1] / o / 1e3 | 0) == nT(10, t - 3) - 1, s
            }

            function nq(e, t, n) {
                for (var i, r, o = [0], s = 0, a = e.length; s < a;) {
                    for (r = o.length; r--;) o[r] *= t;
                    for (o[0] += nd.indexOf(e.charAt(s++)), i = 0; i < o.length; i++) o[i] > n - 1 && (void 0 === o[i + 1] && (o[i + 1] = 0), o[i + 1] += o[i] / n | 0, o[i] %= n)
                }
                return o.reverse()
            }
            nR.absoluteValue = nR.abs = function() {
                var e = new this.constructor(this);
                return e.s < 0 && (e.s = 1), nB(e)
            }, nR.ceil = function() {
                return nB(new this.constructor(this), this.e + 1, 2)
            }, nR.clampedTo = nR.clamp = function(e, t) {
                var n = this.constructor;
                if (e = new n(e), t = new n(t), !e.s || !t.s) return new n(NaN);
                if (e.gt(t)) throw Error(nh + t);
                return 0 > this.cmp(e) ? e : this.cmp(t) > 0 ? t : new n(this)
            }, nR.comparedTo = nR.cmp = function(e) {
                var t, n, i, r, o = this.d,
                    s = (e = new this.constructor(e)).d,
                    a = this.s,
                    c = e.s;
                if (!o || !s) return a && c ? a !== c ? a : o === s ? 0 : !o ^ a < 0 ? 1 : -1 : NaN;
                if (!o[0] || !s[0]) return o[0] ? a : s[0] ? -c : 0;
                if (a !== c) return a;
                if (this.e !== e.e) return this.e > e.e ^ a < 0 ? 1 : -1;
                for (t = 0, n = (i = o.length) < (r = s.length) ? i : r; t < n; ++t)
                    if (o[t] !== s[t]) return o[t] > s[t] ^ a < 0 ? 1 : -1;
                return i === r ? 0 : i > r ^ a < 0 ? 1 : -1
            }, nR.cosine = nR.cos = function() {
                var e, t, n = this,
                    i = n.constructor;
                return n.d ? n.d[0] ? (e = i.precision, t = i.rounding, i.precision = e + Math.max(n.e, n.sd()) + 7, i.rounding = 1, n = function(e, t) {
                    var n, i, r;
                    if (t.isZero()) return t;
                    (i = t.d.length) < 32 ? r = (1 / nZ(4, n = Math.ceil(i / 3))).toString() : (n = 16, r = "2.3283064365386962890625e-10"), e.precision += n, t = nj(e, 1, t.times(r), new e(1));
                    for (var o = n; o--;) {
                        var s = t.times(t);
                        t = s.times(s).minus(s).times(8).plus(1)
                    }
                    return e.precision -= n, t
                }(i, nJ(i, n)), i.precision = e, i.rounding = t, nB(2 == nm || 3 == nm ? n.neg() : n, e, t, !0)) : new i(1) : new i(NaN)
            }, nR.cubeRoot = nR.cbrt = function() {
                var e, t, n, i, r, o, s, a, c, u, l = this.constructor;
                if (!this.isFinite() || this.isZero()) return new l(this);
                for (nw = !1, (o = this.s * nT(this.s * this, 1 / 3)) && Math.abs(o) != 1 / 0 ? i = new l(o.toString()) : (n = nE(this.d), (o = ((e = this.e) - n.length + 1) % 3) && (n += 1 == o || -2 == o ? "0" : "00"), o = nT(n, 1 / 3), e = nk((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), (i = new l(n = o == 1 / 0 ? "5e" + e : (n = o.toExponential()).slice(0, n.indexOf("e") + 1) + e)).s = this.s), s = (e = l.precision) + 3;;)
                    if (i = nV((u = (c = (a = i).times(a).times(a)).plus(this)).plus(this).times(a), u.plus(c), s + 2, 1), nE(a.d).slice(0, s) === (n = nE(i.d)).slice(0, s)) {
                        if ("9999" != (n = n.slice(s - 3, s + 1)) && (r || "4999" != n)) {
                            +n && (+n.slice(1) || "5" != n.charAt(0)) || (nB(i, e + 1, 1), t = !i.times(i).times(i).eq(this));
                            break
                        }
                        if (!r && (nB(a, e + 1, 0), a.times(a).times(a).eq(this))) {
                            i = a;
                            break
                        }
                        s += 4, r = 1
                    }
                return nw = !0, nB(i, e, l.rounding, t)
            }, nR.decimalPlaces = nR.dp = function() {
                var e, t = this.d,
                    n = NaN;
                if (t) {
                    if (n = ((e = t.length - 1) - nk(this.e / 7)) * 7, e = t[e])
                        for (; e % 10 == 0; e /= 10) n--;
                    n < 0 && (n = 0)
                }
                return n
            }, nR.dividedBy = nR.div = function(e) {
                return nV(this, new this.constructor(e))
            }, nR.dividedToIntegerBy = nR.divToInt = function(e) {
                var t = this.constructor;
                return nB(nV(this, new t(e), 0, 1, 1), t.precision, t.rounding)
            }, nR.equals = nR.eq = function(e) {
                return 0 === this.cmp(e)
            }, nR.floor = function() {
                return nB(new this.constructor(this), this.e + 1, 3)
            }, nR.greaterThan = nR.gt = function(e) {
                return this.cmp(e) > 0
            }, nR.greaterThanOrEqualTo = nR.gte = function(e) {
                var t = this.cmp(e);
                return 1 == t || 0 === t
            }, nR.hyperbolicCosine = nR.cosh = function() {
                var e, t, n, i, r, o = this,
                    s = o.constructor,
                    a = new s(1);
                if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
                if (o.isZero()) return a;
                n = s.precision, i = s.rounding, s.precision = n + Math.max(o.e, o.sd()) + 4, s.rounding = 1, (r = o.d.length) < 32 ? t = (1 / nZ(4, e = Math.ceil(r / 3))).toString() : (e = 16, t = "2.3283064365386962890625e-10"), o = nj(s, 1, o.times(t), new s(1), !0);
                for (var c, u = e, l = new s(8); u--;) c = o.times(o), o = a.minus(c.times(l.minus(c.times(l))));
                return nB(o, s.precision = n, s.rounding = i, !0)
            }, nR.hyperbolicSine = nR.sinh = function() {
                var e, t, n, i, r = this,
                    o = r.constructor;
                if (!r.isFinite() || r.isZero()) return new o(r);
                if (t = o.precision, n = o.rounding, o.precision = t + Math.max(r.e, r.sd()) + 4, o.rounding = 1, (i = r.d.length) < 3) r = nj(o, 2, r, r, !0);
                else {
                    e = (e = 1.4 * Math.sqrt(i)) > 16 ? 16 : 0 | e, r = nj(o, 2, r = r.times(1 / nZ(5, e)), r, !0);
                    for (var s, a = new o(5), c = new o(16), u = new o(20); e--;) s = r.times(r), r = r.times(a.plus(s.times(c.times(s).plus(u))))
                }
                return o.precision = t, o.rounding = n, nB(r, t, n, !0)
            }, nR.hyperbolicTangent = nR.tanh = function() {
                var e, t, n = this.constructor;
                return this.isFinite() ? this.isZero() ? new n(this) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, nV(this.sinh(), this.cosh(), n.precision = e, n.rounding = t)) : new n(this.s)
            }, nR.inverseCosine = nR.acos = function() {
                var e, t = this,
                    n = t.constructor,
                    i = t.abs().cmp(1),
                    r = n.precision,
                    o = n.rounding;
                return -1 !== i ? 0 === i ? t.isNeg() ? nM(n, r, o) : new n(0) : new n(NaN) : t.isZero() ? nM(n, r + 4, o).times(.5) : (n.precision = r + 6, n.rounding = 1, t = t.asin(), e = nM(n, r + 4, o).times(.5), n.precision = r, n.rounding = o, e.minus(t))
            }, nR.inverseHyperbolicCosine = nR.acosh = function() {
                var e, t, n = this,
                    i = n.constructor;
                return n.lte(1) ? new i(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = i.precision, t = i.rounding, i.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, i.rounding = 1, nw = !1, n = n.times(n).minus(1).sqrt().plus(n), nw = !0, i.precision = e, i.rounding = t, n.ln()) : new i(n)
            }, nR.inverseHyperbolicSine = nR.asinh = function() {
                var e, t, n = this,
                    i = n.constructor;
                return !n.isFinite() || n.isZero() ? new i(n) : (e = i.precision, t = i.rounding, i.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, i.rounding = 1, nw = !1, n = n.times(n).plus(1).sqrt().plus(n), nw = !0, i.precision = e, i.rounding = t, n.ln())
            }, nR.inverseHyperbolicTangent = nR.atanh = function() {
                var e, t, n, i, r = this,
                    o = r.constructor;
                return r.isFinite() ? r.e >= 0 ? new o(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN) : (e = o.precision, t = o.rounding, Math.max(i = r.sd(), e) < -(2 * r.e) - 1) ? nB(new o(r), e, t, !0) : (o.precision = n = i - r.e, r = nV(r.plus(1), new o(1).minus(r), n + e, 1), o.precision = e + 4, o.rounding = 1, r = r.ln(), o.precision = e, o.rounding = t, r.times(.5)) : new o(NaN)
            }, nR.inverseSine = nR.asin = function() {
                var e, t, n, i, r = this,
                    o = r.constructor;
                return r.isZero() ? new o(r) : (t = r.abs().cmp(1), n = o.precision, i = o.rounding, -1 !== t) ? 0 === t ? ((e = nM(o, n + 4, i).times(.5)).s = r.s, e) : new o(NaN) : (o.precision = n + 6, o.rounding = 1, r = r.div(new o(1).minus(r.times(r)).sqrt().plus(1)).atan(), o.precision = n, o.rounding = i, r.times(2))
            }, nR.inverseTangent = nR.atan = function() {
                var e, t, n, i, r, o, s, a, c, u = this,
                    l = u.constructor,
                    m = l.precision,
                    d = l.rounding;
                if (u.isFinite()) {
                    if (u.isZero()) return new l(u);
                    if (u.abs().eq(1) && m + 4 <= nD) return (s = nM(l, m + 4, d).times(.25)).s = u.s, s
                } else {
                    if (!u.s) return new l(NaN);
                    if (m + 4 <= nD) return (s = nM(l, m + 4, d).times(.5)).s = u.s, s
                }
                for (l.precision = a = m + 10, l.rounding = 1, e = n = Math.min(28, a / 7 + 2 | 0); e; --e) u = u.div(u.times(u).plus(1).sqrt().plus(1));
                for (nw = !1, t = Math.ceil(a / 7), i = 1, c = u.times(u), s = new l(u), r = u; - 1 !== e;)
                    if (r = r.times(c), o = s.minus(r.div(i += 2)), r = r.times(c), void 0 !== (s = o.plus(r.div(i += 2))).d[t])
                        for (e = t; s.d[e] === o.d[e] && e--;);
                return n && (s = s.times(2 << n - 1)), nw = !0, nB(s, l.precision = m, l.rounding = d, !0)
            }, nR.isFinite = function() {
                return !!this.d
            }, nR.isInteger = nR.isInt = function() {
                return !!this.d && nk(this.e / 7) > this.d.length - 2
            }, nR.isNaN = function() {
                return !this.s
            }, nR.isNegative = nR.isNeg = function() {
                return this.s < 0
            }, nR.isPositive = nR.isPos = function() {
                return this.s > 0
            }, nR.isZero = function() {
                return !!this.d && 0 === this.d[0]
            }, nR.lessThan = nR.lt = function(e) {
                return 0 > this.cmp(e)
            }, nR.lessThanOrEqualTo = nR.lte = function(e) {
                return 1 > this.cmp(e)
            }, nR.logarithm = nR.log = function(e) {
                var t, n, i, r, o, s, a, c = this.constructor,
                    u = c.precision,
                    l = c.rounding;
                if (null == e) e = new c(10), t = !0;
                else {
                    if (n = (e = new c(e)).d, e.s < 0 || !n || !n[0] || e.eq(1)) return new c(NaN);
                    t = e.eq(10)
                }
                if (n = this.d, this.s < 0 || !n || !n[0] || this.eq(1)) return new c(n && !n[0] ? -1 / 0 : 1 != this.s ? NaN : n ? 0 : 1 / 0);
                if (t) {
                    if (n.length > 1) r = !0;
                    else {
                        for (i = n[0]; i % 10 == 0;) i /= 10;
                        r = 1 !== i
                    }
                }
                if (nw = !1, nU((a = nV(nG(this, s = u + 5), t ? nN(c, s + 10) : nG(e, s), s, 1)).d, i = u, l))
                    do
                        if (s += 10, a = nV(nG(this, s), t ? nN(c, s + 10) : nG(e, s), s, 1), !r) {
                            +nE(a.d).slice(i + 1, i + 15) + 1 == 1e14 && (a = nB(a, u + 1, 0));
                            break
                        }
                while (nU(a.d, i += 10, l));
                return nw = !0, nB(a, u, l)
            }, nR.minus = nR.sub = function(e) {
                var t, n, i, r, o, s, a, c, u, l, m, d, p = this.constructor;
                if (e = new p(e), !this.d || !e.d) return this.s && e.s ? this.d ? e.s = -e.s : e = new p(e.d || this.s !== e.s ? this : NaN) : e = new p(NaN), e;
                if (this.s != e.s) return e.s = -e.s, this.plus(e);
                if (u = this.d, d = e.d, a = p.precision, c = p.rounding, !u[0] || !d[0]) {
                    if (d[0]) e.s = -e.s;
                    else {
                        if (!u[0]) return new p(3 === c ? -0 : 0);
                        e = new p(this)
                    }
                    return nw ? nB(e, a, c) : e
                }
                if (n = nk(e.e / 7), l = nk(this.e / 7), u = u.slice(), o = l - n) {
                    for ((m = o < 0) ? (t = u, o = -o, s = d.length) : (t = d, n = l, s = u.length), o > (i = Math.max(Math.ceil(a / 7), s) + 2) && (o = i, t.length = 1), t.reverse(), i = o; i--;) t.push(0);
                    t.reverse()
                } else {
                    for ((m = (i = u.length) < (s = d.length)) && (s = i), i = 0; i < s; i++)
                        if (u[i] != d[i]) {
                            m = u[i] < d[i];
                            break
                        }
                    o = 0
                }
                for (m && (t = u, u = d, d = t, e.s = -e.s), s = u.length, i = d.length - s; i > 0; --i) u[s++] = 0;
                for (i = d.length; i > o;) {
                    if (u[--i] < d[i]) {
                        for (r = i; r && 0 === u[--r];) u[r] = 1e7 - 1;
                        --u[r], u[i] += 1e7
                    }
                    u[i] -= d[i]
                }
                for (; 0 === u[--s];) u.pop();
                for (; 0 === u[0]; u.shift()) --n;
                return u[0] ? (e.d = u, e.e = nx(u, n), nw ? nB(e, a, c) : e) : new p(3 === c ? -0 : 0)
            }, nR.modulo = nR.mod = function(e) {
                var t, n = this.constructor;
                return (e = new n(e), this.d && e.s && (!e.d || e.d[0])) ? e.d && (!this.d || this.d[0]) ? (nw = !1, 9 == n.modulo ? (t = nV(this, e.abs(), 0, 3, 1), t.s *= e.s) : t = nV(this, e, 0, n.modulo, 1), t = t.times(e), nw = !0, this.minus(t)) : nB(new n(this), n.precision, n.rounding) : new n(NaN)
            }, nR.naturalExponential = nR.exp = function() {
                return nX(this)
            }, nR.naturalLogarithm = nR.ln = function() {
                return nG(this)
            }, nR.negated = nR.neg = function() {
                var e = new this.constructor(this);
                return e.s = -e.s, nB(e)
            }, nR.plus = nR.add = function(e) {
                var t, n, i, r, o, s, a, c, u, l, m = this.constructor;
                if (e = new m(e), !this.d || !e.d) return this.s && e.s ? this.d || (e = new m(e.d || this.s === e.s ? this : NaN)) : e = new m(NaN), e;
                if (this.s != e.s) return e.s = -e.s, this.minus(e);
                if (u = this.d, l = e.d, a = m.precision, c = m.rounding, !u[0] || !l[0]) return l[0] || (e = new m(this)), nw ? nB(e, a, c) : e;
                if (o = nk(this.e / 7), i = nk(e.e / 7), u = u.slice(), r = o - i) {
                    for (r < 0 ? (n = u, r = -r, s = l.length) : (n = l, i = o, s = u.length), r > (s = (o = Math.ceil(a / 7)) > s ? o + 1 : s + 1) && (r = s, n.length = 1), n.reverse(); r--;) n.push(0);
                    n.reverse()
                }
                for ((s = u.length) - (r = l.length) < 0 && (r = s, n = l, l = u, u = n), t = 0; r;) t = (u[--r] = u[r] + l[r] + t) / 1e7 | 0, u[r] %= 1e7;
                for (t && (u.unshift(t), ++i), s = u.length; 0 == u[--s];) u.pop();
                return e.d = u, e.e = nx(u, i), nw ? nB(e, a, c) : e
            }, nR.precision = nR.sd = function(e) {
                var t;
                if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(nh + e);
                return this.d ? (t = nW(this.d), e && this.e + 1 > t && (t = this.e + 1)) : t = NaN, t
            }, nR.round = function() {
                var e = this.constructor;
                return nB(new e(this), this.e + 1, e.rounding)
            }, nR.sine = nR.sin = function() {
                var e, t, n = this,
                    i = n.constructor;
                return n.isFinite() ? n.isZero() ? new i(n) : (e = i.precision, t = i.rounding, i.precision = e + Math.max(n.e, n.sd()) + 7, i.rounding = 1, n = function(e, t) {
                    var n, i = t.d.length;
                    if (i < 3) return t.isZero() ? t : nj(e, 2, t, t);
                    n = (n = 1.4 * Math.sqrt(i)) > 16 ? 16 : 0 | n, t = nj(e, 2, t = t.times(1 / nZ(5, n)), t);
                    for (var r, o = new e(5), s = new e(16), a = new e(20); n--;) r = t.times(t), t = t.times(o.plus(r.times(s.times(r).minus(a))));
                    return t
                }(i, nJ(i, n)), i.precision = e, i.rounding = t, nB(nm > 2 ? n.neg() : n, e, t, !0)) : new i(NaN)
            }, nR.squareRoot = nR.sqrt = function() {
                var e, t, n, i, r, o, s = this.d,
                    a = this.e,
                    c = this.s,
                    u = this.constructor;
                if (1 !== c || !s || !s[0]) return new u(!c || c < 0 && (!s || s[0]) ? NaN : s ? this : 1 / 0);
                for (nw = !1, 0 == (c = Math.sqrt(+this)) || c == 1 / 0 ? (((t = nE(s)).length + a) % 2 == 0 && (t += "0"), c = Math.sqrt(t), a = nk((a + 1) / 2) - (a < 0 || a % 2), i = new u(t = c == 1 / 0 ? "5e" + a : (t = c.toExponential()).slice(0, t.indexOf("e") + 1) + a)) : i = new u(c.toString()), n = (a = u.precision) + 3;;)
                    if (i = (o = i).plus(nV(this, o, n + 2, 1)).times(.5), nE(o.d).slice(0, n) === (t = nE(i.d)).slice(0, n)) {
                        if ("9999" != (t = t.slice(n - 3, n + 1)) && (r || "4999" != t)) {
                            +t && (+t.slice(1) || "5" != t.charAt(0)) || (nB(i, a + 1, 1), e = !i.times(i).eq(this));
                            break
                        }
                        if (!r && (nB(o, a + 1, 0), o.times(o).eq(this))) {
                            i = o;
                            break
                        }
                        n += 4, r = 1
                    }
                return nw = !0, nB(i, a, u.rounding, e)
            }, nR.tangent = nR.tan = function() {
                var e, t, n = this,
                    i = n.constructor;
                return n.isFinite() ? n.isZero() ? new i(n) : (e = i.precision, t = i.rounding, i.precision = e + 10, i.rounding = 1, (n = n.sin()).s = 1, n = nV(n, new i(1).minus(n.times(n)).sqrt(), e + 10, 0), i.precision = e, i.rounding = t, nB(2 == nm || 4 == nm ? n.neg() : n, e, t, !0)) : new i(NaN)
            }, nR.times = nR.mul = function(e) {
                var t, n, i, r, o, s, a, c, u, l = this.constructor,
                    m = this.d,
                    d = (e = new l(e)).d;
                if (e.s *= this.s, !m || !m[0] || !d || !d[0]) return new l(e.s && (!m || m[0] || d) && (!d || d[0] || m) ? m && d ? 0 * e.s : e.s / 0 : NaN);
                for (n = nk(this.e / 7) + nk(e.e / 7), (c = m.length) < (u = d.length) && (o = m, m = d, d = o, s = c, c = u, u = s), o = [], i = s = c + u; i--;) o.push(0);
                for (i = u; --i >= 0;) {
                    for (t = 0, r = c + i; r > i;) a = o[r] + d[i] * m[r - i - 1] + t, o[r--] = a % 1e7 | 0, t = a / 1e7 | 0;
                    o[r] = (o[r] + t) % 1e7 | 0
                }
                for (; !o[--s];) o.pop();
                return t ? ++n : o.shift(), e.d = o, e.e = nx(o, n), nw ? nB(e, l.precision, l.rounding) : e
            }, nR.toBinary = function(e, t) {
                return n$(this, 2, e, t)
            }, nR.toDecimalPlaces = nR.toDP = function(e, t) {
                var n = this,
                    i = n.constructor;
                return (n = new i(n), void 0 === e) ? n : (nO(e, 0, 1e9), void 0 === t ? t = i.rounding : nO(t, 0, 8), nB(n, e + n.e + 1, t))
            }, nR.toExponential = function(e, t) {
                var n, i = this,
                    r = i.constructor;
                return void 0 === e ? n = n_(i, !0) : (nO(e, 0, 1e9), void 0 === t ? t = r.rounding : nO(t, 0, 8), n = n_(i = nB(new r(i), e + 1, t), !0, e + 1)), i.isNeg() && !i.isZero() ? "-" + n : n
            }, nR.toFixed = function(e, t) {
                var n, i, r = this.constructor;
                return void 0 === e ? n = n_(this) : (nO(e, 0, 1e9), void 0 === t ? t = r.rounding : nO(t, 0, 8), n = n_(i = nB(new r(this), e + this.e + 1, t), !1, e + i.e + 1)), this.isNeg() && !this.isZero() ? "-" + n : n
            }, nR.toFraction = function(e) {
                var t, n, i, r, o, s, a, c, u, l, m, d, p = this.d,
                    f = this.constructor;
                if (!p) return new f(this);
                if (u = n = new f(1), i = c = new f(0), s = (o = (t = new f(i)).e = nW(p) - this.e - 1) % 7, t.d[0] = nT(10, s < 0 ? 7 + s : s), null == e) e = o > 0 ? t : u;
                else {
                    if (!(a = new f(e)).isInt() || a.lt(u)) throw Error(nh + a);
                    e = a.gt(t) ? o > 0 ? t : u : a
                }
                for (nw = !1, a = new f(nE(p)), l = f.precision, f.precision = o = 14 * p.length; m = nV(a, t, 0, 1, 1), 1 != (r = n.plus(m.times(i))).cmp(e);) n = i, i = r, r = u, u = c.plus(m.times(r)), c = r, r = t, t = a.minus(m.times(r)), a = r;
                return r = nV(e.minus(n), i, 0, 1, 1), c = c.plus(r.times(u)), n = n.plus(r.times(i)), c.s = u.s = this.s, d = 1 > nV(u, i, o, 1).minus(this).abs().cmp(nV(c, n, o, 1).minus(this).abs()) ? [u, i] : [c, n], f.precision = l, nw = !0, d
            }, nR.toHexadecimal = nR.toHex = function(e, t) {
                return n$(this, 16, e, t)
            }, nR.toNearest = function(e, t) {
                var n = this,
                    i = n.constructor;
                if (n = new i(n), null == e) {
                    if (!n.d) return n;
                    e = new i(1), t = i.rounding
                } else {
                    if (e = new i(e), void 0 === t ? t = i.rounding : nO(t, 0, 8), !n.d) return e.s ? n : e;
                    if (!e.d) return e.s && (e.s = n.s), e
                }
                return e.d[0] ? (nw = !1, n = nV(n, e, 0, t, 1).times(e), nw = !0, nB(n)) : (e.s = n.s, n = e), n
            }, nR.toNumber = function() {
                return +this
            }, nR.toOctal = function(e, t) {
                return n$(this, 8, e, t)
            }, nR.toPower = nR.pow = function(e) {
                var t, n, i, r, o, s, a = this,
                    c = a.constructor,
                    u = +(e = new c(e));
                if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new c(nT(+a, u));
                if ((a = new c(a)).eq(1)) return a;
                if (i = c.precision, o = c.rounding, e.eq(1)) return nB(a, i, o);
                if ((t = nk(e.e / 7)) >= e.d.length - 1 && (n = u < 0 ? -u : u) <= 9007199254740991) return r = nK(c, a, n, i), e.s < 0 ? new c(1).div(r) : nB(r, i, o);
                if ((s = a.s) < 0) {
                    if (t < e.d.length - 1) return new c(NaN);
                    if ((1 & e.d[t]) == 0 && (s = 1), 0 == a.e && 1 == a.d[0] && 1 == a.d.length) return a.s = s, a
                }
                return (t = 0 != (n = nT(+a, u)) && isFinite(n) ? new c(n + "").e : nk(u * (Math.log("0." + nE(a.d)) / Math.LN10 + a.e + 1))) > c.maxE + 1 || t < c.minE - 1 ? new c(t > 0 ? s / 0 : 0) : (nw = !1, c.rounding = a.s = 1, n = Math.min(12, (t + "").length), (r = nX(e.times(nG(a, i + n)), i)).d && nU((r = nB(r, i + 5, 1)).d, i, o) && (t = i + 10, +nE((r = nB(nX(e.times(nG(a, t + n)), t), t + 5, 1)).d).slice(i + 1, i + 15) + 1 == 1e14 && (r = nB(r, i + 1, 0))), r.s = s, nw = !0, c.rounding = o, nB(r, i, o))
            }, nR.toPrecision = function(e, t) {
                var n, i = this,
                    r = i.constructor;
                return void 0 === e ? n = n_(i, i.e <= r.toExpNeg || i.e >= r.toExpPos) : (nO(e, 1, 1e9), void 0 === t ? t = r.rounding : nO(t, 0, 8), n = n_(i = nB(new r(i), e, t), e <= i.e || i.e <= r.toExpNeg, e)), i.isNeg() && !i.isZero() ? "-" + n : n
            }, nR.toSignificantDigits = nR.toSD = function(e, t) {
                var n = this.constructor;
                return void 0 === e ? (e = n.precision, t = n.rounding) : (nO(e, 1, 1e9), void 0 === t ? t = n.rounding : nO(t, 0, 8)), nB(new n(this), e, t)
            }, nR.toString = function() {
                var e = this.constructor,
                    t = n_(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
                return this.isNeg() && !this.isZero() ? "-" + t : t
            }, nR.truncated = nR.trunc = function() {
                return nB(new this.constructor(this), this.e + 1, 1)
            }, nR.valueOf = nR.toJSON = function() {
                var e = this.constructor,
                    t = n_(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
                return this.isNeg() ? "-" + t : t
            };
            var nV = function() {
                function e(e, t, n) {
                    var i, r = 0,
                        o = e.length;
                    for (e = e.slice(); o--;) i = e[o] * t + r, e[o] = i % n | 0, r = i / n | 0;
                    return r && e.unshift(r), e
                }

                function t(e, t, n, i) {
                    var r, o;
                    if (n != i) o = n > i ? 1 : -1;
                    else
                        for (r = o = 0; r < n; r++)
                            if (e[r] != t[r]) {
                                o = e[r] > t[r] ? 1 : -1;
                                break
                            } return o
                }

                function n(e, t, n, i) {
                    for (var r = 0; n--;) e[n] -= r, r = e[n] < t[n] ? 1 : 0, e[n] = r * i + e[n] - t[n];
                    for (; !e[0] && e.length > 1;) e.shift()
                }
                return function(i, r, o, s, a, c) {
                    var u, l, m, d, p, f, g, w, S, h, y, A, b, k, T, I, P, v, C, L, D = i.constructor,
                        R = i.s == r.s ? 1 : -1,
                        E = i.d,
                        O = r.d;
                    if (!E || !E[0] || !O || !O[0]) return new D(i.s && r.s && (E ? !O || E[0] != O[0] : O) ? E && 0 == E[0] || !O ? 0 * R : R / 0 : NaN);
                    for (c ? (p = 1, l = i.e - r.e) : (c = 1e7, p = 7, l = nk(i.e / p) - nk(r.e / p)), C = O.length, P = E.length, h = (S = new D(R)).d = [], m = 0; O[m] == (E[m] || 0); m++);
                    if (O[m] > (E[m] || 0) && l--, null == o ? (k = o = D.precision, s = D.rounding) : k = a ? o + (i.e - r.e) + 1 : o, k < 0) h.push(1), f = !0;
                    else {
                        if (k = k / p + 2 | 0, m = 0, 1 == C) {
                            for (d = 0, O = O[0], k++;
                                (m < P || d) && k--; m++) T = d * c + (E[m] || 0), h[m] = T / O | 0, d = T % O | 0;
                            f = d || m < P
                        } else {
                            for ((d = c / (O[0] + 1) | 0) > 1 && (O = e(O, d, c), E = e(E, d, c), C = O.length, P = E.length), I = C, A = (y = E.slice(0, C)).length; A < C;) y[A++] = 0;
                            (L = O.slice()).unshift(0), v = O[0], O[1] >= c / 2 && ++v;
                            do d = 0, (u = t(O, y, C, A)) < 0 ? (b = y[0], C != A && (b = b * c + (y[1] || 0)), (d = b / v | 0) > 1 ? (d >= c && (d = c - 1), w = (g = e(O, d, c)).length, A = y.length, 1 == (u = t(g, y, w, A)) && (d--, n(g, C < w ? L : O, w, c))) : (0 == d && (u = d = 1), g = O.slice()), (w = g.length) < A && g.unshift(0), n(y, g, A, c), -1 == u && (A = y.length, (u = t(O, y, C, A)) < 1 && (d++, n(y, C < A ? L : O, A, c))), A = y.length) : 0 === u && (d++, y = [0]), h[m++] = d, u && y[0] ? y[A++] = E[I] || 0 : (y = [E[I]], A = 1); while ((I++ < P || void 0 !== y[0]) && k--);
                            f = void 0 !== y[0]
                        }
                        h[0] || h.shift()
                    }
                    if (1 == p) S.e = l, nl = f;
                    else {
                        for (m = 1, d = h[0]; d >= 10; d /= 10) m++;
                        S.e = m + l * p - 1, nB(S, a ? o + S.e + 1 : o, s, f)
                    }
                    return S
                }
            }();

            function nB(e, t, n, i) {
                var r, o, s, a, c, u, l, m, d, p = e.constructor;
                e: if (null != t) {
                    if (!(m = e.d)) return e;
                    for (r = 1, a = m[0]; a >= 10; a /= 10) r++;
                    if ((o = t - r) < 0) o += 7, s = t, c = (l = m[d = 0]) / nT(10, r - s - 1) % 10 | 0;
                    else if ((d = Math.ceil((o + 1) / 7)) >= (a = m.length)) {
                        if (i) {
                            for (; a++ <= d;) m.push(0);
                            l = c = 0, r = 1, o %= 7, s = o - 7 + 1
                        } else break e
                    } else {
                        for (r = 1, l = a = m[d]; a >= 10; a /= 10) r++;
                        o %= 7, c = (s = o - 7 + r) < 0 ? 0 : l / nT(10, r - s - 1) % 10 | 0
                    }
                    if (i = i || t < 0 || void 0 !== m[d + 1] || (s < 0 ? l : l % nT(10, r - s - 1)), u = n < 4 ? (c || i) && (0 == n || n == (e.s < 0 ? 3 : 2)) : c > 5 || 5 == c && (4 == n || i || 6 == n && (o > 0 ? s > 0 ? l / nT(10, r - s) : 0 : m[d - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !m[0]) return m.length = 0, u ? (t -= e.e + 1, m[0] = nT(10, (7 - t % 7) % 7), e.e = -t || 0) : m[0] = e.e = 0, e;
                    if (0 == o ? (m.length = d, a = 1, d--) : (m.length = d + 1, a = nT(10, 7 - o), m[d] = s > 0 ? (l / nT(10, r - s) % nT(10, s) | 0) * a : 0), u)
                        for (;;) {
                            if (0 == d) {
                                for (o = 1, s = m[0]; s >= 10; s /= 10) o++;
                                for (s = m[0] += a, a = 1; s >= 10; s /= 10) a++;
                                o != a && (e.e++, 1e7 == m[0] && (m[0] = 1));
                                break
                            }
                            if (m[d] += a, 1e7 != m[d]) break;
                            m[d--] = 0, a = 1
                        }
                    for (o = m.length; 0 === m[--o];) m.pop()
                }
                return nw && (e.e > p.maxE ? (e.d = null, e.e = NaN) : e.e < p.minE && (e.e = 0, e.d = [0])), e
            }

            function n_(e, t, n) {
                if (!e.isFinite()) return nz(e);
                var i, r = e.e,
                    o = nE(e.d),
                    s = o.length;
                return t ? (n && (i = n - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + nF(i) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : r < 0 ? (o = "0." + nF(-r - 1) + o, n && (i = n - s) > 0 && (o += nF(i))) : r >= s ? (o += nF(r + 1 - s), n && (i = n - r - 1) > 0 && (o = o + "." + nF(i))) : ((i = r + 1) < s && (o = o.slice(0, i) + "." + o.slice(i)), n && (i = n - s) > 0 && (r + 1 === s && (o += "."), o += nF(i))), o
            }

            function nx(e, t) {
                var n = e[0];
                for (t *= 7; n >= 10; n /= 10) t++;
                return t
            }

            function nN(e, t, n) {
                if (t > nL) throw nw = !0, n && (e.precision = n), Error(ny);
                return nB(new e(np), t, 1, !0)
            }

            function nM(e, t, n) {
                if (t > nD) throw Error(ny);
                return nB(new e(nf), t, n, !0)
            }

            function nW(e) {
                var t = e.length - 1,
                    n = 7 * t + 1;
                if (t = e[t]) {
                    for (; t % 10 == 0; t /= 10) n--;
                    for (t = e[0]; t >= 10; t /= 10) n++
                }
                return n
            }

            function nF(e) {
                for (var t = ""; e--;) t += "0";
                return t
            }

            function nK(e, t, n, i) {
                var r, o = new e(1),
                    s = Math.ceil(i / 7 + 4);
                for (nw = !1;;) {
                    if (n % 2 && n1((o = o.times(t)).d, s) && (r = !0), 0 === (n = nk(n / 2))) {
                        n = o.d.length - 1, r && 0 === o.d[n] && ++o.d[n];
                        break
                    }
                    n1((t = t.times(t)).d, s)
                }
                return nw = !0, o
            }

            function nY(e) {
                return 1 & e.d[e.d.length - 1]
            }

            function nH(e, t, n) {
                for (var i, r = new e(t[0]), o = 0; ++o < t.length;)
                    if ((i = new e(t[o])).s) r[n](i) && (r = i);
                    else {
                        r = i;
                        break
                    }
                return r
            }

            function nX(e, t) {
                var n, i, r, o, s, a, c, u = 0,
                    l = 0,
                    m = 0,
                    d = e.constructor,
                    p = d.rounding,
                    f = d.precision;
                if (!e.d || !e.d[0] || e.e > 17) return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
                for (null == t ? (nw = !1, c = f) : c = t, a = new d(.03125); e.e > -2;) e = e.times(a), m += 5;
                for (c += i = Math.log(nT(2, m)) / Math.LN10 * 2 + 5 | 0, n = o = s = new d(1), d.precision = c;;) {
                    if (o = nB(o.times(e), c, 1), n = n.times(++l), nE((a = s.plus(nV(o, n, c, 1))).d).slice(0, c) === nE(s.d).slice(0, c)) {
                        for (r = m; r--;) s = nB(s.times(s), c, 1);
                        if (null != t) return d.precision = f, s;
                        if (!(u < 3 && nU(s.d, c - i, p, u))) return nB(s, d.precision = f, p, nw = !0);
                        d.precision = c += 10, n = o = a = new d(1), l = 0, u++
                    }
                    s = a
                }
            }

            function nG(e, t) {
                var n, i, r, o, s, a, c, u, l, m, d, p = 1,
                    f = e,
                    g = f.d,
                    w = f.constructor,
                    S = w.rounding,
                    h = w.precision;
                if (f.s < 0 || !g || !g[0] || !f.e && 1 == g[0] && 1 == g.length) return new w(g && !g[0] ? -1 / 0 : 1 != f.s ? NaN : g ? 0 : f);
                if (null == t ? (nw = !1, l = h) : l = t, w.precision = l += 10, i = (n = nE(g)).charAt(0), !(15e14 > Math.abs(o = f.e))) return u = nN(w, l + 2, h).times(o + ""), f = nG(new w(i + "." + n.slice(1)), l - 10).plus(u), w.precision = h, null == t ? nB(f, h, S, nw = !0) : f;
                for (; i < 7 && 1 != i || 1 == i && n.charAt(1) > 3;) i = (n = nE((f = f.times(e)).d)).charAt(0), p++;
                for (o = f.e, i > 1 ? (f = new w("0." + n), o++) : f = new w(i + "." + n.slice(1)), m = f, c = s = f = nV(f.minus(1), f.plus(1), l, 1), d = nB(f.times(f), l, 1), r = 3;;) {
                    if (s = nB(s.times(d), l, 1), nE((u = c.plus(nV(s, new w(r), l, 1))).d).slice(0, l) === nE(c.d).slice(0, l)) {
                        if (c = c.times(2), 0 !== o && (c = c.plus(nN(w, l + 2, h).times(o + ""))), c = nV(c, new w(p), l, 1), null != t) return w.precision = h, c;
                        if (!nU(c.d, l - 10, S, a)) return nB(c, w.precision = h, S, nw = !0);
                        w.precision = l += 10, u = s = f = nV(m.minus(1), m.plus(1), l, 1), d = nB(f.times(f), l, 1), r = a = 1
                    }
                    c = u, r += 2
                }
            }

            function nz(e) {
                return String(e.s * e.s / 0)
            }

            function nQ(e, t) {
                var n, i, r;
                for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (i = t.search(/e/i)) > 0 ? (n < 0 && (n = i), n += +t.slice(i + 1), t = t.substring(0, i)) : n < 0 && (n = t.length), i = 0; 48 === t.charCodeAt(i); i++);
                for (r = t.length; 48 === t.charCodeAt(r - 1); --r);
                if (t = t.slice(i, r)) {
                    if (r -= i, e.e = n = n - i - 1, e.d = [], i = (n + 1) % 7, n < 0 && (i += 7), i < r) {
                        for (i && e.d.push(+t.slice(0, i)), r -= 7; i < r;) e.d.push(+t.slice(i, i += 7));
                        i = 7 - (t = t.slice(i)).length
                    } else i -= r;
                    for (; i--;) t += "0";
                    e.d.push(+t), nw && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]))
                } else e.e = 0, e.d = [0];
                return e
            }

            function nj(e, t, n, i, r) {
                var o, s, a, c, u = e.precision,
                    l = Math.ceil(u / 7);
                for (nw = !1, c = n.times(n), a = new e(i);;) {
                    if (s = nV(a.times(c), new e(t++ * t++), u, 1), a = r ? i.plus(s) : i.minus(s), i = nV(s.times(c), new e(t++ * t++), u, 1), void 0 !== (s = a.plus(i)).d[l]) {
                        for (o = l; s.d[o] === a.d[o] && o--;);
                        if (-1 == o) break
                    }
                    o = a, a = i, i = s, s = o
                }
                return nw = !0, s.d.length = l + 1, s
            }

            function nZ(e, t) {
                for (var n = e; --t;) n *= e;
                return n
            }

            function nJ(e, t) {
                var n, i = t.s < 0,
                    r = nM(e, e.precision, 1),
                    o = r.times(.5);
                if ((t = t.abs()).lte(o)) return nm = i ? 4 : 1, t;
                if ((n = t.divToInt(r)).isZero()) nm = i ? 3 : 2;
                else {
                    if ((t = t.minus(n.times(r))).lte(o)) return nm = nY(n) ? i ? 2 : 3 : i ? 4 : 1, t;
                    nm = nY(n) ? i ? 1 : 4 : i ? 3 : 2
                }
                return t.minus(r).abs()
            }

            function n$(e, t, n, i) {
                var r, o, s, a, c, u, l, m, d, p = e.constructor,
                    f = void 0 !== n;
                if (f ? (nO(n, 1, 1e9), void 0 === i ? i = p.rounding : nO(i, 0, 8)) : (n = p.precision, i = p.rounding), e.isFinite()) {
                    for (s = (l = n_(e)).indexOf("."), f ? (r = 2, 16 == t ? n = 4 * n - 3 : 8 == t && (n = 3 * n - 2)) : r = t, s >= 0 && (l = l.replace(".", ""), (d = new p(1)).e = l.length - s, d.d = nq(n_(d), 10, r), d.e = d.d.length), o = c = (m = nq(l, 10, r)).length; 0 == m[--c];) m.pop();
                    if (m[0]) {
                        if (s < 0 ? o-- : ((e = new p(e)).d = m, e.e = o, m = (e = nV(e, d, n, i, 0, r)).d, o = e.e, u = nl), s = m[n], a = r / 2, u = u || void 0 !== m[n + 1], u = i < 4 ? (void 0 !== s || u) && (0 === i || i === (e.s < 0 ? 3 : 2)) : s > a || s === a && (4 === i || u || 6 === i && 1 & m[n - 1] || i === (e.s < 0 ? 8 : 7)), m.length = n, u)
                            for (; ++m[--n] > r - 1;) m[n] = 0, n || (++o, m.unshift(1));
                        for (c = m.length; !m[c - 1]; --c);
                        for (s = 0, l = ""; s < c; s++) l += nd.charAt(m[s]);
                        if (f) {
                            if (c > 1) {
                                if (16 == t || 8 == t) {
                                    for (s = 16 == t ? 4 : 3, --c; c % s; c++) l += "0";
                                    for (c = (m = nq(l, r, t)).length; !m[c - 1]; --c);
                                    for (s = 1, l = "1."; s < c; s++) l += nd.charAt(m[s])
                                } else l = l.charAt(0) + "." + l.slice(1)
                            }
                            l = l + (o < 0 ? "p" : "p+") + o
                        } else if (o < 0) {
                            for (; ++o;) l = "0" + l;
                            l = "0." + l
                        } else if (++o > c)
                            for (o -= c; o--;) l += "0";
                        else o < c && (l = l.slice(0, o) + "." + l.slice(o))
                    } else l = f ? "0p+0" : "0";
                    l = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + l
                } else l = nz(e);
                return e.s < 0 ? "-" + l : l
            }

            function n1(e, t) {
                if (e.length > t) return e.length = t, !0
            }

            function n0(e) {
                return new this(e).abs()
            }

            function n4(e) {
                return new this(e).acos()
            }

            function n6(e) {
                return new this(e).acosh()
            }

            function n2(e, t) {
                return new this(e).plus(t)
            }

            function n3(e) {
                return new this(e).asin()
            }

            function n5(e) {
                return new this(e).asinh()
            }

            function n8(e) {
                return new this(e).atan()
            }

            function n7(e) {
                return new this(e).atanh()
            }

            function n9(e, t) {
                e = new this(e), t = new this(t);
                var n, i = this.precision,
                    r = this.rounding,
                    o = i + 4;
                return e.s && t.s ? e.d || t.d ? !t.d || e.isZero() ? (n = t.s < 0 ? nM(this, i, r) : new this(0)).s = e.s : !e.d || t.isZero() ? (n = nM(this, o, 1).times(.5)).s = e.s : t.s < 0 ? (this.precision = o, this.rounding = 1, n = this.atan(nV(e, t, o, 1)), t = nM(this, o, 1), this.precision = i, this.rounding = r, n = e.s < 0 ? n.minus(t) : n.plus(t)) : n = this.atan(nV(e, t, o, 1)) : (n = nM(this, o, 1).times(t.s > 0 ? .25 : .75)).s = e.s : n = new this(NaN), n
            }

            function ie(e) {
                return new this(e).cbrt()
            }

            function it(e) {
                return nB(e = new this(e), e.e + 1, 2)
            }

            function ii(e, t, n) {
                return new this(e).clamp(t, n)
            }

            function ir(e) {
                if (!e || "object" != typeof e) throw Error(nS + "Object expected");
                var t, n, i, r = !0 === e.defaults,
                    o = ["precision", 1, 1e9, "rounding", 0, 8, "toExpNeg", -9e15, 0, "toExpPos", 0, 9e15, "maxE", 0, 9e15, "minE", -9e15, 0, "modulo", 0, 9];
                for (t = 0; t < o.length; t += 3)
                    if (n = o[t], r && (this[n] = ng[n]), void 0 !== (i = e[n])) {
                        if (nk(i) === i && i >= o[t + 1] && i <= o[t + 2]) this[n] = i;
                        else throw Error(nh + n + ": " + i)
                    }
                if (n = "crypto", r && (this[n] = ng[n]), void 0 !== (i = e[n])) {
                    if (!0 === i || !1 === i || 0 === i || 1 === i) {
                        if (i) {
                            if ("undefined" != typeof crypto && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[n] = !0;
                            else throw Error(nA)
                        } else this[n] = !1
                    } else throw Error(nh + n + ": " + i)
                }
                return this
            }

            function io(e) {
                return new this(e).cos()
            }

            function is(e) {
                return new this(e).cosh()
            }

            function ia(e, t) {
                return new this(e).div(t)
            }

            function ic(e) {
                return new this(e).exp()
            }

            function iu(e) {
                return nB(e = new this(e), e.e + 1, 3)
            }

            function il() {
                var e, t, n = new this(0);
                for (e = 0, nw = !1; e < arguments.length;)
                    if (t = new this(arguments[e++]), t.d) n.d && (n = n.plus(t.times(t)));
                    else {
                        if (t.s) return nw = !0, new this(1 / 0);
                        n = t
                    }
                return nw = !0, n.sqrt()
            }

            function im(e) {
                return e instanceof iU || e && e.toStringTag === nb || !1
            }

            function id(e) {
                return new this(e).ln()
            }

            function ip(e, t) {
                return new this(e).log(t)
            }

            function ig(e) {
                return new this(e).log(2)
            }

            function iw(e) {
                return new this(e).log(10)
            }

            function iS() {
                return nH(this, arguments, "lt")
            }

            function ih() {
                return nH(this, arguments, "gt")
            }

            function iy(e, t) {
                return new this(e).mod(t)
            }

            function iA(e, t) {
                return new this(e).mul(t)
            }

            function ib(e, t) {
                return new this(e).pow(t)
            }

            function ik(e) {
                var t, n, i, r, o = 0,
                    s = new this(1),
                    a = [];
                if (void 0 === e ? e = this.precision : nO(e, 1, 1e9), i = Math.ceil(e / 7), this.crypto) {
                    if (crypto.getRandomValues)
                        for (t = crypto.getRandomValues(new Uint32Array(i)); o < i;)(r = t[o]) >= 429e7 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = r % 1e7;
                    else if (crypto.randomBytes) {
                        for (t = crypto.randomBytes(i *= 4); o < i;)(r = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((127 & t[o + 3]) << 24)) >= 214e7 ? crypto.randomBytes(4).copy(t, o) : (a.push(r % 1e7), o += 4);
                        o = i / 4
                    } else throw Error(nA)
                } else
                    for (; o < i;) a[o++] = 1e7 * Math.random() | 0;
                for (i = a[--o], e %= 7, i && e && (r = nT(10, 7 - e), a[o] = (i / r | 0) * r); 0 === a[o]; o--) a.pop();
                if (o < 0) n = 0, a = [0];
                else {
                    for (n = -1; 0 === a[0]; n -= 7) a.shift();
                    for (i = 1, r = a[0]; r >= 10; r /= 10) i++;
                    i < 7 && (n -= 7 - i)
                }
                return s.e = n, s.d = a, s
            }

            function iT(e) {
                return nB(e = new this(e), e.e + 1, this.rounding)
            }

            function iI(e) {
                return (e = new this(e)).d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN
            }

            function iP(e) {
                return new this(e).sin()
            }

            function iv(e) {
                return new this(e).sinh()
            }

            function iC(e) {
                return new this(e).sqrt()
            }

            function iL(e, t) {
                return new this(e).sub(t)
            }

            function iD() {
                var e = 0,
                    t = arguments,
                    n = new this(t[e]);
                for (nw = !1; n.s && ++e < t.length;) n = n.plus(t[e]);
                return nw = !0, nB(n, this.precision, this.rounding)
            }

            function iR(e) {
                return new this(e).tan()
            }

            function iE(e) {
                return new this(e).tanh()
            }

            function iO(e) {
                return nB(e = new this(e), e.e + 1, 1)
            }
            nR[Symbol.for("nodejs.util.inspect.custom")] = nR.toString, nR[Symbol.toStringTag] = "Decimal";
            var iU = nR.constructor = function e(t) {
                var n, i, r;

                function o(e) {
                    var t, n, i;
                    if (!(this instanceof o)) return new o(e);
                    if (this.constructor = o, im(e)) {
                        this.s = e.s, nw ? !e.d || e.e > o.maxE ? (this.e = NaN, this.d = null) : e.e < o.minE ? (this.e = 0, this.d = [0]) : (this.e = e.e, this.d = e.d.slice()) : (this.e = e.e, this.d = e.d ? e.d.slice() : e.d);
                        return
                    }
                    if ("number" == (i = typeof e)) {
                        if (0 === e) {
                            this.s = 1 / e < 0 ? -1 : 1, this.e = 0, this.d = [0];
                            return
                        }
                        if (e < 0 ? (e = -e, this.s = -1) : this.s = 1, e === ~~e && e < 1e7) {
                            for (t = 0, n = e; n >= 10; n /= 10) t++;
                            nw ? t > o.maxE ? (this.e = NaN, this.d = null) : t < o.minE ? (this.e = 0, this.d = [0]) : (this.e = t, this.d = [e]) : (this.e = t, this.d = [e]);
                            return
                        }
                        if (0 * e != 0) {
                            e || (this.s = NaN), this.e = NaN, this.d = null;
                            return
                        }
                        return nQ(this, e.toString())
                    }
                    if ("string" !== i) throw Error(nh + e);
                    return 45 === (n = e.charCodeAt(0)) ? (e = e.slice(1), this.s = -1) : (43 === n && (e = e.slice(1)), this.s = 1), nC.test(e) ? nQ(this, e) : function(e, t) {
                        var n, i, r, o, s, a, c, u, l;
                        if (t.indexOf("_") > -1) {
                            if (t = t.replace(/(\d)_(?=\d)/g, "$1"), nC.test(t)) return nQ(e, t)
                        } else if ("Infinity" === t || "NaN" === t) return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
                        if (nP.test(t)) n = 16, t = t.toLowerCase();
                        else if (nI.test(t)) n = 2;
                        else if (nv.test(t)) n = 8;
                        else throw Error(nh + t);
                        for ((o = t.search(/p/i)) > 0 ? (c = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), s = (o = t.indexOf(".")) >= 0, i = e.constructor, s && (o = (a = (t = t.replace(".", "")).length) - o, r = nK(i, new i(n), o, 2 * o)), o = l = (u = nq(t, n, 1e7)).length - 1; 0 === u[o]; --o) u.pop();
                        return o < 0 ? new i(0 * e.s) : (e.e = nx(u, l), e.d = u, nw = !1, s && (e = nV(e, r, 4 * a)), c && (e = e.times(54 > Math.abs(c) ? nT(2, c) : iU.pow(2, c))), nw = !0, e)
                    }(this, e)
                }
                if (o.prototype = nR, o.ROUND_UP = 0, o.ROUND_DOWN = 1, o.ROUND_CEIL = 2, o.ROUND_FLOOR = 3, o.ROUND_HALF_UP = 4, o.ROUND_HALF_DOWN = 5, o.ROUND_HALF_EVEN = 6, o.ROUND_HALF_CEIL = 7, o.ROUND_HALF_FLOOR = 8, o.EUCLID = 9, o.config = o.set = ir, o.clone = e, o.isDecimal = im, o.abs = n0, o.acos = n4, o.acosh = n6, o.add = n2, o.asin = n3, o.asinh = n5, o.atan = n8, o.atanh = n7, o.atan2 = n9, o.cbrt = ie, o.ceil = it, o.clamp = ii, o.cos = io, o.cosh = is, o.div = ia, o.exp = ic, o.floor = iu, o.hypot = il, o.ln = id, o.log = ip, o.log10 = iw, o.log2 = ig, o.max = iS, o.min = ih, o.mod = iy, o.mul = iA, o.pow = ib, o.random = ik, o.round = iT, o.sign = iI, o.sin = iP, o.sinh = iv, o.sqrt = iC, o.sub = iL, o.sum = iD, o.tan = iR, o.tanh = iE, o.trunc = iO, void 0 === t && (t = {}), t && !0 !== t.defaults)
                    for (n = 0, r = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"]; n < r.length;) t.hasOwnProperty(i = r[n++]) || (t[i] = this[i]);
                return o.config(t), o
            }(ng);
            np = new iU(np), nf = new iU(nf);
            var iq = n(67133).Buffer;
            let iV = {
                createPool: [233, 146, 209, 142, 207, 104, 64, 188],
                initReward: [95, 135, 192, 196, 242, 129, 230, 68],
                setRewardEmissions: [112, 52, 167, 75, 32, 201, 211, 137],
                openPosition: [77, 184, 74, 214, 112, 86, 241, 199],
                closePosition: [123, 134, 81, 0, 49, 68, 98, 98],
                increaseLiquidity: [133, 29, 89, 223, 69, 238, 176, 10],
                decreaseLiquidity: [58, 127, 188, 62, 79, 82, 196, 96],
                swap: [43, 4, 237, 11, 26, 201, 30, 98],
                collectReward: [18, 237, 166, 197, 34, 16, 213, 144]
            };

            function iB(e, t, n, i, r, o, s, a, c, u, m, p, f, g, w, S, h) {
                let y = e5([eZ("amount"), eZ("otherAmountThreshold"), eJ("sqrtPriceLimitX64"), e4("isBaseInput")]),
                    A = [...h ? [{
                        pubkey: h,
                        isSigner: !1,
                        isWritable: !0
                    }] : [], ...m.map(e => ({
                        pubkey: e,
                        isSigner: !1,
                        isWritable: !0
                    }))],
                    b = [{
                        pubkey: t,
                        isSigner: !0,
                        isWritable: !1
                    }, {
                        pubkey: i,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: r,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: o,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: s,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: a,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: p,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: l.H_,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: l.nA,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: B,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: c,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: u,
                        isSigner: !1,
                        isWritable: !1
                    }, ...A],
                    k = iq.alloc(y.span);
                y.encode({
                    amount: f,
                    otherAmountThreshold: g,
                    sqrtPriceLimitX64: w,
                    isBaseInput: S
                }, k);
                let T = iq.from([...iV.swap, ...k]);
                return new d.TransactionInstruction({
                    keys: b,
                    programId: e,
                    data: T
                })
            }
            let i_ = new(P())(-1),
                ix = new(P())(1).shln(64),
                iN = new(P())(1).shln(128),
                iM = ix.sub(er),
                iW = iN.subn(1),
                iF = new(P())("4295048016"),
                iK = new(P())("79226673521066979257578248091"),
                iY = new(P())(10).pow(new(P())(6));
            (r = s || (s = {}))[r.rate_500 = 500] = "rate_500", r[r.rate_3000 = 3e3] = "rate_3000", r[r.rate_10000 = 1e4] = "rate_10000", s.rate_500, s.rate_3000, s.rate_10000;
            let iH = new(P())("18446744073700000000");

            function iX(e) {
                let t = new ArrayBuffer(4);
                return new DataView(t).setInt32(0, e, !1), new Uint8Array(t)
            }

            function iG(e, t) {
                let n = 0;
                for (let i = e - 1; i >= 0 && !t.testn(i); i--) n++;
                return n
            }

            function iz(e, t) {
                let n = 0;
                for (let i = 0; i < e && !t.testn(i); i++) n++;
                return n
            }

            function iQ(e, t) {
                for (let n = 0; n < e; n++)
                    if (t.testn(n)) return !1;
                return !0
            }
            var ij = n(67133).Buffer;
            ij.from("amm_config", "utf8");
            let iZ = ij.from("pool", "utf8"),
                iJ = ij.from("pool_vault", "utf8"),
                i$ = ij.from("pool_reward_vault", "utf8"),
                i1 = ij.from("position", "utf8"),
                i0 = ij.from("tick_array", "utf8"),
                i4 = ij.from("operation", "utf8"),
                i6 = ij.from("pool_tick_array_bitmap_extension", "utf8");

            function i2(e, t, n) {
                return W([iJ, t.toBuffer(), n.toBuffer()], e)
            }

            function i3(e, t, n) {
                return W([i0, t.toBuffer(), iX(n)], e)
            }

            function i5(e, t, n, i) {
                return W([i1, t.toBuffer(), iX(n), iX(i)], e)
            }

            function i8(e, t) {
                return W([i1, t.toBuffer()], e)
            }

            function i7(e) {
                return W([ij.from("metadata", "utf8"), x.toBuffer(), e.toBuffer()], x)
            }

            function i9(e, t) {
                return W([i6, t.toBuffer()], e)
            }
            class re {
                static async getTickArrays(e, t, n, i, r, o, s) {
                    let a = [],
                        c = rn.getTickArrayStartIndexByTick(i, r),
                        u = rn.getInitializedTickArrayInRange(o, s, r, c, Math.floor(7.5));
                    for (let e = 0; e < u.length; e++) {
                        let {
                            publicKey: i
                        } = i3(t, n, u[e]);
                        a.push(i)
                    }
                    let l = (await G(e, a)).map(e => null !== e ? rd.decode(e.data) : null),
                        m = {};
                    for (let e = 0; e < a.length; e++) {
                        let t = l[e];
                        null !== t && (m[t.startTickIndex] = { ...t,
                            address: a[e]
                        })
                    }
                    return m
                }
                static nextInitializedTick(e, t, n, i, r, o) {
                    let {
                        initializedTick: s,
                        tickArrayAddress: a,
                        tickArrayStartTickIndex: c
                    } = this.nextInitializedTickInOneArray(e, t, n, i, r, o);
                    for (; void 0 == s || s.liquidityGross.lten(0);) {
                        if (c = rn.getNextTickArrayStartIndex(c, r, o), this.checkIsValidStartIndex(c, r)) throw Error("No enough initialized tickArray");
                        let i = n[c];
                        if (void 0 === i) continue;
                        let {
                            nextTick: u,
                            tickArrayAddress: l,
                            tickArrayStartTickIndex: m
                        } = this.firstInitializedTickInOneArray(e, t, i, o);
                        [s, a, c] = [u, l, m]
                    }
                    if (void 0 == s) throw Error("No invaild tickArray cache");
                    return {
                        nextTick: s,
                        tickArrayAddress: a,
                        tickArrayStartTickIndex: c
                    }
                }
                static nextInitializedTickArray(e, t, n, i, r) {
                    let o = Math.floor(e / re.tickCount(t)),
                        s = n ? rn.searchLowBitFromStart(i, r, o - 1, 1, t) : rn.searchHightBitFromStart(i, r, o + 1, 1, t);
                    return s.length > 0 ? {
                        isExist: !0,
                        nextStartIndex: s[0]
                    } : {
                        isExist: !1,
                        nextStartIndex: 0
                    }
                }
                static firstInitializedTickInOneArray(e, t, n, i) {
                    let r;
                    if (i) {
                        let e = rt - 1;
                        for (; e >= 0;) {
                            let t = n.ticks[e];
                            if (t.liquidityGross.gtn(0)) {
                                r = t;
                                break
                            }
                            e -= 1
                        }
                    } else {
                        let e = 0;
                        for (; e < rt;) {
                            let t = n.ticks[e];
                            if (t.liquidityGross.gtn(0)) {
                                r = t;
                                break
                            }
                            e += 1
                        }
                    }
                    let {
                        publicKey: o
                    } = i3(e, t, n.startTickIndex);
                    return {
                        nextTick: r,
                        tickArrayAddress: o,
                        tickArrayStartTickIndex: n.startTickIndex
                    }
                }
                static nextInitializedTickInOneArray(e, t, n, i, r, o) {
                    let s;
                    let a = rn.getTickArrayStartIndexByTick(i, r),
                        c = Math.floor((i - a) / r),
                        u = n[a];
                    if (void 0 == u) return {
                        initializedTick: void 0,
                        tickArrayAddress: void 0,
                        tickArrayStartTickIndex: a
                    };
                    if (o)
                        for (; c >= 0;) {
                            let e = u.ticks[c];
                            if (e.liquidityGross.gtn(0)) {
                                s = e;
                                break
                            }
                            c -= 1
                        } else
                            for (c += 1; c < rt;) {
                                let e = u.ticks[c];
                                if (e.liquidityGross.gtn(0)) {
                                    s = e;
                                    break
                                }
                                c += 1
                            }
                    let {
                        publicKey: l
                    } = i3(e, t, a);
                    return {
                        initializedTick: s,
                        tickArrayAddress: l,
                        tickArrayStartTickIndex: u.startTickIndex
                    }
                }
                static getArrayStartIndex(e, t) {
                    let n = this.tickCount(t);
                    return Math.floor(e / n) * n
                }
                static checkIsValidStartIndex(e, t) {
                    return rn.checkIsOutOfBoundary(e) ? !(e > 443636) && e == rn.getTickArrayStartIndexByTick(-443636, t) : e % this.tickCount(t) == 0
                }
                static tickCount(e) {
                    return rt * e
                }
            }
            let rt = 60;
            class rn {
                static getTickArrayAddressByTick(e, t, n, i) {
                    let {
                        publicKey: r
                    } = i3(e, t, rn.getTickArrayStartIndexByTick(n, i));
                    return r
                }
                static getTickOffsetInArray(e, t) {
                    if (e % t != 0) throw Error("tickIndex % tickSpacing not equal 0");
                    let n = rn.getTickArrayStartIndexByTick(e, t),
                        i = Math.floor((e - n) / t);
                    if (i < 0 || i >= rt) throw Error("tick offset in array overflow");
                    return i
                }
                static getTickArrayBitIndex(e, t) {
                    let n = re.tickCount(t),
                        i = e / n;
                    return e < 0 && e % n != 0 ? Math.ceil(i) - 1 : Math.floor(i)
                }
                static getTickArrayStartIndexByTick(e, t) {
                    return this.getTickArrayBitIndex(e, t) * re.tickCount(t)
                }
                static getTickArrayOffsetInBitmapByTick(e, t) {
                    return Math.abs(Math.floor(e / (t * rt)) + 512)
                }
                static checkTickArrayIsInitialized(e, t, n) {
                    let i = n * rt,
                        r = Math.abs(Math.floor(t / i) + 512);
                    return {
                        isInitialized: e.testn(r),
                        startIndex: (r - 512) * i
                    }
                }
                static getNextTickArrayStartIndex(e, t, n) {
                    return n ? e - t * rt : e + t * rt
                }
                static mergeTickArrayBitmap(e) {
                    let t = new(P())(0);
                    for (let n = 0; n < e.length; n++) t = t.add(e[n].shln(64 * n));
                    return t
                }
                static getInitializedTickArrayInRange(e, t, n, i, r) {
                    let o = Math.floor(i / (n * rt));
                    return [...rn.searchLowBitFromStart(e, t, o - 1, r, n), ...rn.searchHightBitFromStart(e, t, o, r, n)]
                }
                static getAllInitializedTickArrayStartIndex(e, t, n) {
                    return rn.searchHightBitFromStart(e, t, 0, 512, n)
                }
                static getAllInitializedTickArrayInfo(e, t, n, i, r) {
                    let o = [];
                    for (let s of rn.getAllInitializedTickArrayStartIndex(n, i, r)) {
                        let {
                            publicKey: n
                        } = i3(e, t, s);
                        o.push({
                            tickArrayStartIndex: s,
                            tickArrayAddress: n
                        })
                    }
                    return o
                }
                static getAllInitializedTickInTickArray(e) {
                    return e.ticks.filter(e => e.liquidityGross.gtn(0))
                }
                static searchLowBitFromStart(e, t, n, i, r) {
                    let o = [...[...t.negativeTickArrayBitmap].reverse(), e.slice(0, 8), e.slice(8, 16), ...t.positiveTickArrayBitmap].map(e => rn.mergeTickArrayBitmap(e)),
                        s = [];
                    for (; n >= -7680;) {
                        let e = Math.floor((n + 7680) / 512),
                            t = (n + 7680) % 512;
                        if (o[e].testn(t) && s.push(n), n--, s.length === i) break
                    }
                    let a = re.tickCount(r);
                    return s.map(e => e * a)
                }
                static searchHightBitFromStart(e, t, n, i, r) {
                    let o = [...[...t.negativeTickArrayBitmap].reverse(), e.slice(0, 8), e.slice(8, 16), ...t.positiveTickArrayBitmap].map(e => rn.mergeTickArrayBitmap(e)),
                        s = [];
                    for (; n < 7680;) {
                        let e = Math.floor((n + 7680) / 512),
                            t = (n + 7680) % 512;
                        if (o[e].testn(t) && s.push(n), n++, s.length === i) break
                    }
                    let a = re.tickCount(r);
                    return s.map(e => e * a)
                }
                static checkIsOutOfBoundary(e) {
                    return e < -443636 || e > 443636
                }
                static nextInitTick(e, t, n, i, r) {
                    if (re.getArrayStartIndex(t, n) != e.startTickIndex) return null;
                    let o = Math.floor((t - e.startTickIndex) / n);
                    if (i)
                        for (; o >= 0;) {
                            if (e.ticks[o].liquidityGross.gtn(0)) return e.ticks[o];
                            o -= 1
                        } else
                            for (r || (o += 1); o < rt;) {
                                if (e.ticks[o].liquidityGross.gtn(0)) return e.ticks[o];
                                o += 1
                            }
                    return null
                }
                static firstInitializedTick(e, t) {
                    if (t) {
                        let t = rt - 1;
                        for (; t >= 0;) {
                            if (e.ticks[t].liquidityGross.gtn(0)) return e.ticks[t];
                            t -= 1
                        }
                    } else {
                        let t = 0;
                        for (; t < rt;) {
                            if (e.ticks[t].liquidityGross.gtn(0)) return e.ticks[t];
                            t += 1
                        }
                    }
                    throw Error(`firstInitializedTick check error: ${e} - ${t}`)
                }
            }
            class ri {
                static maxTickInTickarrayBitmap(e) {
                    return e * rt * 512
                }
                static getBitmapTickBoundary(e, t) {
                    let n = this.maxTickInTickarrayBitmap(t),
                        i = Math.floor(Math.abs(e) / n);
                    e < 0 && Math.abs(e) % n != 0 && (i += 1);
                    let r = n * i;
                    return e < 0 ? {
                        minValue: -r,
                        maxValue: -r + n
                    } : {
                        minValue: r,
                        maxValue: r + n
                    }
                }
                static nextInitializedTickArrayStartIndex(e, t, n, i) {
                    var r, o;
                    if (!re.checkIsValidStartIndex(t, n)) throw Error("nextInitializedTickArrayStartIndex check error");
                    let s = this.maxTickInTickarrayBitmap(n),
                        a = i ? t - re.tickCount(n) : t + re.tickCount(n);
                    if (a < -s || a >= s) return {
                        isInit: !1,
                        tickIndex: t
                    };
                    let c = n * rt,
                        u = a / c + 512;
                    a < 0 && a % c != 0 && u--;
                    let l = Math.abs(u);
                    if (i) {
                        let t = iQ(1024, r = e.shln(1024 - l - 1)) ? null : iG(1024, r);
                        return null !== t ? {
                            isInit: !0,
                            tickIndex: (l - t - 512) * c
                        } : {
                            isInit: !1,
                            tickIndex: -s
                        }
                    } {
                        let t = iQ(1024, o = e.shrn(l)) ? null : iz(1024, o);
                        return null !== t ? {
                            isInit: !0,
                            tickIndex: (l + t - 512) * c
                        } : {
                            isInit: !1,
                            tickIndex: s - re.tickCount(n)
                        }
                    }
                }
            }
            class rr {
                static getBitmapOffset(e, t) {
                    if (!re.checkIsValidStartIndex(e, t)) throw Error("No enough initialized tickArray");
                    this.checkExtensionBoundary(e, t);
                    let n = ri.maxTickInTickarrayBitmap(t),
                        i = Math.floor(Math.abs(e) / n) - 1;
                    return e < 0 && Math.abs(e) % n == 0 && i--, i
                }
                static getBitmap(e, t, n) {
                    let i = this.getBitmapOffset(e, t);
                    return e < 0 ? {
                        offset: i,
                        tickarrayBitmap: n.negativeTickArrayBitmap[i]
                    } : {
                        offset: i,
                        tickarrayBitmap: n.positiveTickArrayBitmap[i]
                    }
                }
                static checkExtensionBoundary(e, t) {
                    let {
                        positiveTickBoundary: n,
                        negativeTickBoundary: i
                    } = this.extensionTickBoundary(t);
                    if (e >= i && e < n) throw Error("checkExtensionBoundary -> InvalidTickArrayBoundary")
                }
                static extensionTickBoundary(e) {
                    let t = ri.maxTickInTickarrayBitmap(e),
                        n = -t;
                    if (443636 <= t) throw Error(`extensionTickBoundary check error: 443636, ${t}`);
                    if (n <= -443636) throw Error(`extensionTickBoundary check error: ${n}, -443636`);
                    return {
                        positiveTickBoundary: t,
                        negativeTickBoundary: n
                    }
                }
                static checkTickArrayIsInit(e, t, n) {
                    let {
                        tickarrayBitmap: i
                    } = this.getBitmap(e, t, n), r = this.tickArrayOffsetInBitmap(e, t);
                    return {
                        isInitialized: rn.mergeTickArrayBitmap(i).testn(r),
                        startIndex: e
                    }
                }
                static nextInitializedTickArrayFromOneBitmap(e, t, n, i) {
                    let r = re.tickCount(t),
                        o = n ? e - r : e + r,
                        s = re.getArrayStartIndex(-443636, t),
                        a = re.getArrayStartIndex(443636, t);
                    if (o < s || o > a) return {
                        isInit: !1,
                        tickIndex: o
                    };
                    let {
                        tickarrayBitmap: c
                    } = this.getBitmap(o, t, i);
                    return this.nextInitializedTickArrayInBitmap(c, o, t, n)
                }
                static nextInitializedTickArrayInBitmap(e, t, n, i) {
                    let {
                        minValue: r,
                        maxValue: o
                    } = ri.getBitmapTickBoundary(t, n), s = this.tickArrayOffsetInBitmap(t, n);
                    if (i) {
                        let i = rn.mergeTickArrayBitmap(e).shln(511 - s),
                            o = iQ(512, i) ? null : iG(512, i);
                        return null !== o ? {
                            isInit: !0,
                            tickIndex: t - o * re.tickCount(n)
                        } : {
                            isInit: !1,
                            tickIndex: r
                        }
                    } {
                        let i = rn.mergeTickArrayBitmap(e).shrn(s),
                            r = iQ(512, i) ? null : iz(512, i);
                        return null !== r ? {
                            isInit: !0,
                            tickIndex: t + r * re.tickCount(n)
                        } : {
                            isInit: !1,
                            tickIndex: o - re.tickCount(n)
                        }
                    }
                }
                static tickArrayOffsetInBitmap(e, t) {
                    let n = Math.abs(e) % ri.maxTickInTickarrayBitmap(t),
                        i = Math.floor(n / re.tickCount(t));
                    return e < 0 && 0 != n && (i = 512 - i), i
                }
            }
            e5([eY(8), eQ("bump"), eM("index"), e0(""), ej("protocolFeeRate"), ej("tradeFeeRate"), eM("tickSpacing"), ej("fundFeeRate"), e8(ej(), 1, "padding"), e0("fundOwner"), e8(eZ(), 3, "padding")]);
            let ro = e5([ej("blockTimestamp"), eJ("sqrtPriceX64"), eJ("cumulativeTimePriceX64"), e8(eJ(), 1, "")]),
                rs = e5([eY(8), e4("initialized"), e0("poolId"), e8(ro, 1e3, "observations"), e8(eJ(), 5, "")]),
                ra = e5([eQ("rewardState"), eZ("openTime"), eZ("endTime"), eZ("lastUpdateTime"), eJ("emissionsPerSecondX64"), eZ("rewardTotalEmissioned"), eZ("rewardClaimed"), e0("tokenMint"), e0("tokenVault"), e0("creator"), eJ("rewardGrowthGlobalX64")]),
                rc = e5([eY(8), eQ("bump"), e0("ammConfig"), e0("creator"), e0("mintA"), e0("mintB"), e0("vaultA"), e0("vaultB"), e0("observationId"), eQ("mintDecimalsA"), eQ("mintDecimalsB"), eM("tickSpacing"), eJ("liquidity"), eJ("sqrtPriceX64"), eF("tickCurrent"), eM("observationIndex"), eM("observationUpdateDuration"), eJ("feeGrowthGlobalX64A"), eJ("feeGrowthGlobalX64B"), eZ("protocolFeesTokenA"), eZ("protocolFeesTokenB"), eJ("swapInAmountTokenA"), eJ("swapOutAmountTokenB"), eJ("swapInAmountTokenB"), eJ("swapOutAmountTokenA"), eQ("status"), e8(eQ(), 7, ""), e8(ra, 3, "rewardInfos"), e8(eZ(), 16, "tickArrayBitmap"), eZ("totalFeesTokenA"), eZ("totalFeesClaimedTokenA"), eZ("totalFeesTokenB"), eZ("totalFeesClaimedTokenB"), eZ("fundFeesTokenA"), eZ("fundFeesTokenB"), eZ("startTime"), e8(eZ(), 57, "padding")]),
                ru = e5([eJ("growthInsideLastX64"), eZ("rewardAmountOwed")]),
                rl = e5([eY(8), eQ("bump"), e0("nftMint"), e0("poolId"), eF("tickLower"), eF("tickUpper"), eJ("liquidity"), eJ("feeGrowthInsideLastX64A"), eJ("feeGrowthInsideLastX64B"), eZ("tokenFeesOwedA"), eZ("tokenFeesOwedB"), e8(ru, 3, "rewardInfos"), e8(eZ(), 8, "")]);
            e5([eY(8), eQ("bump"), e0("poolId"), eF("tickLowerIndex"), eF("tickUpperIndex"), eJ("liquidity"), eJ("feeGrowthInsideLastX64A"), eJ("feeGrowthInsideLastX64B"), eZ("tokenFeesOwedA"), eZ("tokenFeesOwedB"), e8(eJ(), 3, "rewardGrowthInside"), e8(eZ(), 8, "")]);
            let rm = e5([eF("tick"), new eG(16, !0, "liquidityNet"), eJ("liquidityGross"), eJ("feeGrowthOutsideX64A"), eJ("feeGrowthOutsideX64B"), e8(eJ(), 3, "rewardGrowthsOutsideX64"), e8(ej(), 13, "")]),
                rd = e5([eY(8), e0("poolId"), eF("startTickIndex"), e8(rm, rt, "ticks"), eQ("initializedTickCount"), e8(eQ(), 115, "")]),
                rp = e5([eY(329), e8(e0(), 100, "whitelistMints")]),
                rf = e5([eY(8), e0("poolId"), e8(e8(eZ(), 8), 14, "positiveTickArrayBitmap"), e8(e8(eZ(), 8), 14, "negativeTickArrayBitmap")]);
            class rg {
                static getOutputAmountAndRemainAccounts(e, t, n, i, r, o = !1) {
                    let s = n.equals(e.mintA.mint),
                        a = [],
                        {
                            isExist: c,
                            startIndex: u,
                            nextAccountMeta: l
                        } = this.getFirstInitializedTickArray(e, s);
                    if (!c || void 0 === u || !l) throw Error("Invalid tick array");
                    try {
                        let t = this.preInitializedTickArrayStartIndex(e, s);
                        if (t.isExist) {
                            let {
                                publicKey: n
                            } = i3(e.programId, e.id, t.nextStartIndex);
                            a.push(n)
                        }
                    } catch (e) {}
                    a.push(l);
                    let {
                        allTrade: m,
                        amountSpecifiedRemaining: d,
                        amountCalculated: p,
                        accounts: f,
                        sqrtPriceX64: g,
                        feeAmount: w
                    } = rk.swapCompute(e.programId, e.id, t, e.tickArrayBitmap, e.exBitmapInfo, s, e.ammConfig.tradeFeeRate, e.liquidity, e.tickCurrent, e.tickSpacing, e.sqrtPriceX64, i, u, r, o);
                    return a.push(...f), {
                        allTrade: m,
                        realTradeAmountIn: i.sub(d),
                        expectedAmountOut: p.mul(i_),
                        remainingAccounts: a,
                        executionPrice: g,
                        feeAmount: w
                    }
                }
                static getInputAmountAndRemainAccounts(e, t, n, i, r) {
                    let o = n.equals(e.mintB.mint),
                        s = [],
                        {
                            isExist: a,
                            startIndex: c,
                            nextAccountMeta: u
                        } = this.getFirstInitializedTickArray(e, o);
                    if (!a || void 0 === c || !u) throw Error("Invalid tick array");
                    try {
                        let t = this.preInitializedTickArrayStartIndex(e, o);
                        if (t.isExist) {
                            let {
                                publicKey: n
                            } = i3(e.programId, e.id, t.nextStartIndex);
                            s.push(n)
                        }
                    } catch (e) {}
                    s.push(u);
                    let {
                        amountCalculated: l,
                        accounts: m,
                        sqrtPriceX64: d,
                        feeAmount: p
                    } = rk.swapCompute(e.programId, e.id, t, e.tickArrayBitmap, e.exBitmapInfo, o, e.ammConfig.tradeFeeRate, e.liquidity, e.tickCurrent, e.tickSpacing, e.sqrtPriceX64, i.mul(i_), c, r);
                    return s.push(...m), {
                        expectedAmountIn: l,
                        remainingAccounts: s,
                        executionPrice: d,
                        feeAmount: p
                    }
                }
                static getFirstInitializedTickArray(e, t) {
                    let {
                        isInitialized: n,
                        startIndex: i
                    } = rg.isOverflowDefaultTickarrayBitmap(e.tickSpacing, [e.tickCurrent]) ? rr.checkTickArrayIsInit(re.getArrayStartIndex(e.tickCurrent, e.tickSpacing), e.tickSpacing, e.exBitmapInfo) : rn.checkTickArrayIsInitialized(rn.mergeTickArrayBitmap(e.tickArrayBitmap), e.tickCurrent, e.tickSpacing);
                    if (n) {
                        let {
                            publicKey: t
                        } = i3(e.programId, e.id, i);
                        return {
                            isExist: !0,
                            startIndex: i,
                            nextAccountMeta: t
                        }
                    }
                    let {
                        isExist: r,
                        nextStartIndex: o
                    } = this.nextInitializedTickArrayStartIndex(e, re.getArrayStartIndex(e.tickCurrent, e.tickSpacing), t);
                    if (r) {
                        let {
                            publicKey: t
                        } = i3(e.programId, e.id, o);
                        return {
                            isExist: !0,
                            startIndex: o,
                            nextAccountMeta: t
                        }
                    }
                    return {
                        isExist: !1,
                        nextAccountMeta: void 0,
                        startIndex: void 0
                    }
                }
                static preInitializedTickArrayStartIndex(e, t) {
                    let n = Math.floor(e.tickCurrent / re.tickCount(e.tickSpacing)),
                        i = t ? rn.searchHightBitFromStart(e.tickArrayBitmap, e.exBitmapInfo, n + 1, 1, e.tickSpacing) : rn.searchLowBitFromStart(e.tickArrayBitmap, e.exBitmapInfo, n - 1, 1, e.tickSpacing);
                    return i.length > 0 ? {
                        isExist: !0,
                        nextStartIndex: i[0]
                    } : {
                        isExist: !1,
                        nextStartIndex: 0
                    }
                }
                static nextInitializedTickArrayStartIndex(e, t, n) {
                    for (t = re.getArrayStartIndex(t, e.tickSpacing);;) {
                        let {
                            isInit: i,
                            tickIndex: r
                        } = ri.nextInitializedTickArrayStartIndex(rn.mergeTickArrayBitmap(e.tickArrayBitmap), t, e.tickSpacing, n);
                        if (i) return {
                            isExist: !0,
                            nextStartIndex: r
                        };
                        t = r;
                        let {
                            isInit: o,
                            tickIndex: s
                        } = rr.nextInitializedTickArrayFromOneBitmap(t, e.tickSpacing, n, e.exBitmapInfo);
                        if (o) return {
                            isExist: !0,
                            nextStartIndex: s
                        };
                        if ((t = s) < -443636 || t > 443636) return {
                            isExist: !1,
                            nextStartIndex: 0
                        }
                    }
                }
                static async updatePoolRewardInfos({
                    connection: e,
                    apiPoolInfo: t,
                    chainTime: n,
                    poolLiquidity: i,
                    rewardInfos: r
                }) {
                    let o = [];
                    for (let s = 0; s < r.length; s++) {
                        let a = r[s],
                            c = t.rewardInfos[s] ? .programId ? ? (await e.getAccountInfo(a.tokenMint)) ? .owner;
                        if (void 0 === c) throw Error("get new reward mint info error");
                        let u = { ...a,
                            perSecond: rw.x64ToDecimal(a.emissionsPerSecondX64),
                            remainingRewards: void 0,
                            tokenProgramId: new d.PublicKey(c)
                        };
                        if (u.tokenMint.equals(d.PublicKey.default)) continue;
                        if (n <= u.openTime.toNumber() || i.eq(ei)) {
                            o.push(u);
                            continue
                        }
                        let l = new(P())(Math.min(u.endTime.toNumber(), n)),
                            m = l.sub(u.lastUpdateTime),
                            p = rw.mulDivFloor(m, u.emissionsPerSecondX64, i),
                            f = u.rewardGrowthGlobalX64.add(p),
                            g = rw.mulDivFloor(m, u.emissionsPerSecondX64, ix),
                            w = u.rewardTotalEmissioned.add(g);
                        o.push({ ...u,
                            rewardGrowthGlobalX64: f,
                            rewardTotalEmissioned: w,
                            lastUpdateTime: l
                        })
                    }
                    return o
                }
                static isOverflowDefaultTickarrayBitmap(e, t) {
                    let {
                        maxTickBoundary: n,
                        minTickBoundary: i
                    } = this.tickRange(e);
                    for (let r of t) {
                        let t = rn.getTickArrayStartIndexByTick(r, e);
                        if (t >= n || t < i) return !0
                    }
                    return !1
                }
                static tickRange(e) {
                    let t = ri.maxTickInTickarrayBitmap(e),
                        n = -t;
                    return t > 443636 && (t = 443636), n < -443636 && (n = -443636), {
                        maxTickBoundary: t,
                        minTickBoundary: n
                    }
                }
                static get_tick_array_offset(e, t) {
                    if (!re.checkIsValidStartIndex(e, t)) throw Error("No enough initialized tickArray");
                    return e / re.tickCount(t) * 512
                }
            }
            class rw {
                static mulDivRoundingUp(e, t, n) {
                    let i = e.mul(t),
                        r = i.div(n);
                    return i.mod(n).eq(ei) || (r = r.add(er)), r
                }
                static mulDivFloor(e, t, n) {
                    if (n.eq(ei)) throw Error("division by 0");
                    return e.mul(t).div(n)
                }
                static mulDivCeil(e, t, n) {
                    if (n.eq(ei)) throw Error("division by 0");
                    return e.mul(t).add(n.sub(er)).div(n)
                }
                static x64ToDecimal(e, t) {
                    return new iU(e.toString()).div(iU.pow(2, 64)).toDecimalPlaces(t)
                }
                static decimalToX64(e) {
                    return new(P())(e.mul(iU.pow(2, 64)).floor().toFixed())
                }
                static wrappingSubU128(e, t) {
                    return e.add(iN).sub(t).mod(iN)
                }
            }

            function rS(e, t) {
                return rh(e.mul(t), 64, 256)
            }

            function rh(e, t, n) {
                let i = e.toTwos(n).shrn(t);
                return i.imaskn(n - t + 1), i.fromTwos(n - t)
            }
            class ry {
                static sqrtPriceX64ToPrice(e, t, n) {
                    return rw.x64ToDecimal(e).pow(2).mul(iU.pow(10, t - n))
                }
                static priceToSqrtPriceX64(e, t, n) {
                    return rw.decimalToX64(e.mul(iU.pow(10, n - t)).sqrt())
                }
                static getNextSqrtPriceX64FromInput(e, t, n, i) {
                    if (!e.gt(ei)) throw Error("sqrtPriceX64 must greater than 0");
                    if (!t.gt(ei)) throw Error("liquidity must greater than 0");
                    return i ? this.getNextSqrtPriceFromTokenAmountARoundingUp(e, t, n, !0) : this.getNextSqrtPriceFromTokenAmountBRoundingDown(e, t, n, !0)
                }
                static getNextSqrtPriceX64FromOutput(e, t, n, i) {
                    if (!e.gt(ei)) throw Error("sqrtPriceX64 must greater than 0");
                    if (!t.gt(ei)) throw Error("liquidity must greater than 0");
                    return i ? this.getNextSqrtPriceFromTokenAmountBRoundingDown(e, t, n, !1) : this.getNextSqrtPriceFromTokenAmountARoundingUp(e, t, n, !1)
                }
                static getNextSqrtPriceFromTokenAmountARoundingUp(e, t, n, i) {
                    if (n.eq(ei)) return e;
                    let r = t.shln(64);
                    if (i) {
                        let t = r.add(n.mul(e));
                        return t.gte(r) ? rw.mulDivCeil(r, e, t) : rw.mulDivRoundingUp(r, er, r.div(e).add(n))
                    } {
                        let t = n.mul(e);
                        if (!r.gt(t)) throw Error("getNextSqrtPriceFromTokenAmountARoundingUp,liquidityLeftShift must gt amountMulSqrtPrice");
                        let i = r.sub(t);
                        return rw.mulDivCeil(r, e, i)
                    }
                }
                static getNextSqrtPriceFromTokenAmountBRoundingDown(e, t, n, i) {
                    let r = n.shln(64);
                    if (i) return e.add(r.div(t)); {
                        let n = rw.mulDivRoundingUp(r, er, t);
                        if (!e.gt(n)) throw Error("getNextSqrtPriceFromTokenAmountBRoundingDown sqrtPriceX64 must gt amountDivLiquidity");
                        return e.sub(n)
                    }
                }
                static getSqrtPriceX64FromTick(e) {
                    if (!Number.isInteger(e)) throw Error("tick must be integer");
                    if (e < -443636 || e > 443636) throw Error("tick must be in MIN_TICK and MAX_TICK");
                    let t = e < 0 ? -1 * e : e,
                        n = new(P())((1 & t) != 0 ? "18445821805675395072" : "18446744073709551616");
                    return (2 & t) != 0 && (n = rS(n, new(P())("18444899583751176192"))), (4 & t) != 0 && (n = rS(n, new(P())("18443055278223355904"))), (8 & t) != 0 && (n = rS(n, new(P())("18439367220385607680"))), (16 & t) != 0 && (n = rS(n, new(P())("18431993317065453568"))), (32 & t) != 0 && (n = rS(n, new(P())("18417254355718170624"))), (64 & t) != 0 && (n = rS(n, new(P())("18387811781193609216"))), (128 & t) != 0 && (n = rS(n, new(P())("18329067761203558400"))), (256 & t) != 0 && (n = rS(n, new(P())("18212142134806163456"))), (512 & t) != 0 && (n = rS(n, new(P())("17980523815641700352"))), (1024 & t) != 0 && (n = rS(n, new(P())("17526086738831433728"))), (2048 & t) != 0 && (n = rS(n, new(P())("16651378430235570176"))), (4096 & t) != 0 && (n = rS(n, new(P())("15030750278694412288"))), (8192 & t) != 0 && (n = rS(n, new(P())("12247334978884435968"))), (16384 & t) != 0 && (n = rS(n, new(P())("8131365268886854656"))), (32768 & t) != 0 && (n = rS(n, new(P())("3584323654725218816"))), (65536 & t) != 0 && (n = rS(n, new(P())("696457651848324352"))), (131072 & t) != 0 && (n = rS(n, new(P())("26294789957507116"))), (262144 & t) != 0 && (n = rS(n, new(P())("37481735321082"))), e > 0 && (n = iW.div(n)), n
                }
                static getTickFromPrice(e, t, n) {
                    return ry.getTickFromSqrtPriceX64(ry.priceToSqrtPriceX64(e, t, n))
                }
                static getTickFromSqrtPriceX64(e) {
                    if (e.gt(iK) || e.lt(iF)) throw Error("Provided sqrtPrice is not within the supported sqrtPrice range.");
                    let t = e.bitLength() - 1,
                        n = function(e, t, n) {
                            let i = e.toTwos(n).shln(32);
                            return i.imaskn(n + 1), i.fromTwos(n)
                        }(new(P())(t - 64), 0, 128),
                        i = new(P())("8000000000000000", "hex"),
                        r = 0,
                        o = new(P())(0),
                        s = t >= 64 ? e.shrn(t - 63) : e.shln(63 - t);
                    for (; i.gt(new(P())(0)) && r < 16;) {
                        let e = (s = s.mul(s)).shrn(127);
                        s = s.shrn(63 + e.toNumber()), o = o.add(i.mul(e)), i = i.shrn(1), r += 1
                    }
                    let a = o.shrn(32),
                        c = n.add(a).mul(new(P())("59543866431248")),
                        u = rh(c.sub(new(P())("184467440737095516")), 64, 128).toNumber(),
                        l = rh(c.add(new(P())("15793534762490258745")), 64, 128).toNumber();
                    return u == l ? u : ry.getSqrtPriceX64FromTick(l).lte(e) ? l : u
                }
            }
            class rA {
                static getTickWithPriceAndTickspacing(e, t, n, i) {
                    let r = ry.getTickFromSqrtPriceX64(ry.priceToSqrtPriceX64(e, n, i)) / t;
                    return (r = r < 0 ? Math.floor(r) : Math.ceil(r)) * t
                }
                static roundPriceWithTickspacing(e, t, n, i) {
                    let r = rA.getTickWithPriceAndTickspacing(e, t, n, i),
                        o = ry.getSqrtPriceX64FromTick(r);
                    return ry.sqrtPriceX64ToPrice(o, n, i)
                }
            }
            class rb {
                static addDelta(e, t) {
                    return e.add(t)
                }
                static getTokenAmountAFromLiquidity(e, t, n, i) {
                    if (e.gt(t) && ([e, t] = [t, e]), !e.gt(ei)) throw Error("sqrtPriceX64A must greater than 0");
                    let r = n.ushln(64),
                        o = t.sub(e);
                    return i ? rw.mulDivRoundingUp(rw.mulDivCeil(r, o, t), er, e) : rw.mulDivFloor(r, o, t).div(e)
                }
                static getTokenAmountBFromLiquidity(e, t, n, i) {
                    if (e.gt(t) && ([e, t] = [t, e]), !e.gt(ei)) throw Error("sqrtPriceX64A must greater than 0");
                    return i ? rw.mulDivCeil(n, t.sub(e), ix) : rw.mulDivFloor(n, t.sub(e), ix)
                }
                static getLiquidityFromTokenAmountA(e, t, n, i) {
                    e.gt(t) && ([e, t] = [t, e]);
                    let r = n.mul(e).mul(t),
                        o = t.sub(e),
                        s = r.div(o);
                    return i ? rw.mulDivRoundingUp(s, er, iM) : s.shrn(64)
                }
                static getLiquidityFromTokenAmountB(e, t, n) {
                    return e.gt(t) && ([e, t] = [t, e]), rw.mulDivFloor(n, iM, t.sub(e))
                }
                static getLiquidityFromTokenAmounts(e, t, n, i, r) {
                    if (t.gt(n) && ([t, n] = [n, t]), e.lte(t)) return rb.getLiquidityFromTokenAmountA(t, n, i, !1);
                    if (!e.lt(n)) return rb.getLiquidityFromTokenAmountB(t, n, r); {
                        let o = rb.getLiquidityFromTokenAmountA(e, n, i, !1),
                            s = rb.getLiquidityFromTokenAmountB(t, e, r);
                        return o.lt(s) ? o : s
                    }
                }
                static getAmountsFromLiquidity(e, t, n, i, r) {
                    return (t.gt(n) && ([t, n] = [n, t]), e.lte(t)) ? {
                        amountA: rb.getTokenAmountAFromLiquidity(t, n, i, r),
                        amountB: new(P())(0)
                    } : e.lt(n) ? {
                        amountA: rb.getTokenAmountAFromLiquidity(e, n, i, r),
                        amountB: rb.getTokenAmountBFromLiquidity(t, e, i, r)
                    } : {
                        amountA: new(P())(0),
                        amountB: rb.getTokenAmountBFromLiquidity(t, n, i, r)
                    }
                }
                static getAmountsFromLiquidityWithSlippage(e, t, n, i, r, o, s) {
                    let {
                        amountA: a,
                        amountB: c
                    } = rb.getAmountsFromLiquidity(e, t, n, i, o), u = r ? 1 + s : 1 - s;
                    return {
                        amountSlippageA: new(P())(new iU(a.toString()).mul(u).toFixed(0)),
                        amountSlippageB: new(P())(new iU(c.toString()).mul(u).toFixed(0))
                    }
                }
            }
            class rk {
                static swapCompute(e, t, n, i, r, o, s, a, c, u, l, m, d, p, f = !1) {
                    if (m.eq(ei)) throw Error("amountSpecified must not be 0");
                    if (p || (p = o ? iF.add(er) : iK.sub(er)), o) {
                        if (p.lt(iF)) throw Error("sqrtPriceX64 must greater than MIN_SQRT_PRICE_X64");
                        if (p.gte(l)) throw Error("sqrtPriceX64 must smaller than current")
                    } else {
                        if (p.gt(iK)) throw Error("sqrtPriceX64 must smaller than MAX_SQRT_PRICE_X64");
                        if (p.lte(l)) throw Error("sqrtPriceX64 must greater than current")
                    }
                    let g = m.gt(ei),
                        w = {
                            amountSpecifiedRemaining: m,
                            amountCalculated: ei,
                            sqrtPriceX64: l,
                            tick: c > d ? Math.min(d + re.tickCount(u) - 1, c) : d,
                            accounts: [],
                            liquidity: a,
                            feeAmount: new(P())(0)
                        },
                        S = d,
                        h = n[d],
                        y = !o && h.startTickIndex === w.tick;
                    for (; !w.amountSpecifiedRemaining.eq(ei) && !w.sqrtPriceX64.eq(p);) {
                        let a;
                        let c = {};
                        c.sqrtPriceStartX64 = w.sqrtPriceX64;
                        let l = rn.nextInitTick(h, w.tick, u, o, y) || null,
                            m = null;
                        if (!l ? .liquidityGross.gtn(0)) {
                            let s = rg.nextInitializedTickArrayStartIndex({
                                tickCurrent: w.tick,
                                tickSpacing: u,
                                tickArrayBitmap: i,
                                exBitmapInfo: r
                            }, S, o);
                            if (!s.isExist) {
                                if (f) return {
                                    allTrade: !1,
                                    amountSpecifiedRemaining: w.amountSpecifiedRemaining,
                                    amountCalculated: w.amountCalculated,
                                    feeAmount: w.feeAmount,
                                    sqrtPriceX64: w.sqrtPriceX64,
                                    liquidity: w.liquidity,
                                    tickCurrent: w.tick,
                                    accounts: w.accounts
                                };
                                throw Error("swapCompute LiquidityInsufficient")
                            }
                            let {
                                publicKey: a
                            } = i3(e, t, S = s.nextStartIndex);
                            m = a, h = n[S];
                            try {
                                l = rn.firstInitializedTick(h, o)
                            } catch (e) {
                                throw Error("not found next tick info")
                            }
                        }
                        if (c.tickNext = l.tick, c.initialized = l.liquidityGross.gtn(0), d !== S && m && (w.accounts.push(m), d = S), c.tickNext < -443636 ? c.tickNext = -443636 : c.tickNext > 443636 && (c.tickNext = 443636), c.sqrtPriceNextX64 = ry.getSqrtPriceX64FromTick(c.tickNext), a = o && c.sqrtPriceNextX64.lt(p) || !o && c.sqrtPriceNextX64.gt(p) ? p : c.sqrtPriceNextX64, [w.sqrtPriceX64, c.amountIn, c.amountOut, c.feeAmount] = rk.swapStepCompute(w.sqrtPriceX64, a, w.liquidity, w.amountSpecifiedRemaining, s), w.feeAmount = w.feeAmount.add(c.feeAmount), g ? (w.amountSpecifiedRemaining = w.amountSpecifiedRemaining.sub(c.amountIn.add(c.feeAmount)), w.amountCalculated = w.amountCalculated.sub(c.amountOut)) : (w.amountSpecifiedRemaining = w.amountSpecifiedRemaining.add(c.amountOut), w.amountCalculated = w.amountCalculated.add(c.amountIn.add(c.feeAmount))), w.sqrtPriceX64.eq(c.sqrtPriceNextX64)) {
                            if (c.initialized) {
                                let e = l.liquidityNet;
                                o && (e = e.mul(i_)), w.liquidity = rb.addDelta(w.liquidity, e)
                            }
                            y = c.tickNext != w.tick && !o && h.startTickIndex === c.tickNext, w.tick = o ? c.tickNext - 1 : c.tickNext
                        } else if (w.sqrtPriceX64 != c.sqrtPriceStartX64) {
                            let e = ry.getTickFromSqrtPriceX64(w.sqrtPriceX64);
                            y = e != w.tick && !o && h.startTickIndex === e, w.tick = e
                        }
                    }
                    try {
                        let {
                            nextStartIndex: n,
                            isExist: s
                        } = re.nextInitializedTickArray(w.tick, u, o, i, r);
                        s && d !== n && (w.accounts.push(i3(e, t, n).publicKey), d = n)
                    } catch (e) {}
                    return {
                        allTrade: !0,
                        amountSpecifiedRemaining: ei,
                        amountCalculated: w.amountCalculated,
                        feeAmount: w.feeAmount,
                        sqrtPriceX64: w.sqrtPriceX64,
                        liquidity: w.liquidity,
                        tickCurrent: w.tick,
                        accounts: w.accounts
                    }
                }
                static swapStepCompute(e, t, n, i, r) {
                    let o = {
                            sqrtPriceX64Next: new(P())(0),
                            amountIn: new(P())(0),
                            amountOut: new(P())(0),
                            feeAmount: new(P())(0)
                        },
                        s = e.gte(t),
                        a = i.gte(ei);
                    if (a) {
                        let a = rw.mulDivFloor(i, iY.sub(new(P())(r.toString())), iY);
                        o.amountIn = s ? rb.getTokenAmountAFromLiquidity(t, e, n, !0) : rb.getTokenAmountBFromLiquidity(e, t, n, !0), a.gte(o.amountIn) ? o.sqrtPriceX64Next = t : o.sqrtPriceX64Next = ry.getNextSqrtPriceX64FromInput(e, n, a, s)
                    } else o.amountOut = s ? rb.getTokenAmountBFromLiquidity(t, e, n, !1) : rb.getTokenAmountAFromLiquidity(e, t, n, !1), i.mul(i_).gte(o.amountOut) ? o.sqrtPriceX64Next = t : o.sqrtPriceX64Next = ry.getNextSqrtPriceX64FromOutput(e, n, i.mul(i_), s);
                    let c = t.eq(o.sqrtPriceX64Next);
                    return s ? (c && a || (o.amountIn = rb.getTokenAmountAFromLiquidity(o.sqrtPriceX64Next, e, n, !0)), c && !a || (o.amountOut = rb.getTokenAmountBFromLiquidity(o.sqrtPriceX64Next, e, n, !1))) : (o.amountIn = c && a ? o.amountIn : rb.getTokenAmountBFromLiquidity(e, o.sqrtPriceX64Next, n, !0), o.amountOut = c && !a ? o.amountOut : rb.getTokenAmountAFromLiquidity(e, o.sqrtPriceX64Next, n, !1)), !a && o.amountOut.gt(i.mul(i_)) && (o.amountOut = i.mul(i_)), a && !o.sqrtPriceX64Next.eq(t) ? o.feeAmount = i.sub(o.amountIn) : o.feeAmount = rw.mulDivCeil(o.amountIn, new(P())(r), iY.sub(new(P())(r))), [o.sqrtPriceX64Next, o.amountIn, o.amountOut, o.feeAmount]
                }
            }
            class rT {
                static getfeeGrowthInside(e, t, n) {
                    let i = new(P())(0),
                        r = new(P())(0);
                    e.tickCurrent >= t.tick ? (i = t.feeGrowthOutsideX64A, r = t.feeGrowthOutsideX64B) : (i = e.feeGrowthGlobalX64A.sub(t.feeGrowthOutsideX64A), r = e.feeGrowthGlobalX64B.sub(t.feeGrowthOutsideX64B));
                    let o = new(P())(0),
                        s = new(P())(0);
                    return e.tickCurrent < n.tick ? (o = n.feeGrowthOutsideX64A, s = n.feeGrowthOutsideX64B) : (o = e.feeGrowthGlobalX64A.sub(n.feeGrowthOutsideX64A), s = e.feeGrowthGlobalX64B.sub(n.feeGrowthOutsideX64B)), {
                        feeGrowthInsideX64A: rw.wrappingSubU128(rw.wrappingSubU128(e.feeGrowthGlobalX64A, i), o),
                        feeGrowthInsideBX64: rw.wrappingSubU128(rw.wrappingSubU128(e.feeGrowthGlobalX64B, r), s)
                    }
                }
                static GetPositionFees(e, t, n, i) {
                    let {
                        feeGrowthInsideX64A: r,
                        feeGrowthInsideBX64: o
                    } = this.getfeeGrowthInside(e, n, i), s = rw.mulDivFloor(rw.wrappingSubU128(r, t.feeGrowthInsideLastX64A), t.liquidity, ix), a = t.tokenFeesOwedA.add(s), c = rw.mulDivFloor(rw.wrappingSubU128(o, t.feeGrowthInsideLastX64B), t.liquidity, ix);
                    return {
                        tokenFeeAmountA: a,
                        tokenFeeAmountB: t.tokenFeesOwedB.add(c)
                    }
                }
                static GetPositionRewards(e, t, n, i) {
                    let r = [],
                        o = this.getRewardGrowthInside(e.tickCurrent, n, i, e.rewardInfos);
                    for (let e = 0; e < o.length; e++) {
                        let n = o[e],
                            i = t.rewardInfos[e],
                            s = rw.wrappingSubU128(n, i.growthInsideLastX64),
                            a = rw.mulDivFloor(s, t.liquidity, ix),
                            c = i.rewardAmountOwed.add(a);
                        r.push(c)
                    }
                    return r
                }
                static getRewardGrowthInside(e, t, n, i) {
                    let r = [];
                    for (let o = 0; o < i.length; o++) {
                        let s = new(P())(0);
                        s = t.liquidityGross.eqn(0) ? i[o].rewardGrowthGlobalX64 : e < t.tick ? i[o].rewardGrowthGlobalX64.sub(t.rewardGrowthsOutsideX64[o]) : t.rewardGrowthsOutsideX64[o];
                        let a = new(P())(0);
                        n.liquidityGross.eqn(0) || (a = e < n.tick ? n.rewardGrowthsOutsideX64[o] : i[o].rewardGrowthGlobalX64.sub(n.rewardGrowthsOutsideX64[o])), r.push(rw.wrappingSubU128(rw.wrappingSubU128(i[o].rewardGrowthGlobalX64, s), a))
                    }
                    return r
                }
            }
            let rI = U.from("Clmm");
            class rP extends tw {
                static makeMockPoolInfo({
                    programId: e,
                    mint1: t,
                    mint2: n,
                    ammConfig: i,
                    createPoolInstructionSimpleAddress: r,
                    initialPrice: o,
                    startTime: s,
                    owner: a
                }) {
                    let [c, u, l] = new(P())(t.mint.toBuffer()).gt(new(P())(n.mint.toBuffer())) ? [n, t, new iU(1).div(o)] : [t, n, o], m = ry.priceToSqrtPriceX64(l, c.decimals, u.decimals);
                    return {
                        id: r.poolId,
                        mintA: {
                            programId: r.mintProgramIdA,
                            mint: r.mintA,
                            vault: r.mintAVault,
                            decimals: c.decimals
                        },
                        mintB: {
                            programId: r.mintProgramIdB,
                            mint: r.mintB,
                            vault: r.mintBVault,
                            decimals: u.decimals
                        },
                        ammConfig: i,
                        observationId: r.observationId,
                        creator: a,
                        programId: e,
                        version: 6,
                        tickSpacing: i.tickSpacing,
                        liquidity: ei,
                        sqrtPriceX64: m,
                        currentPrice: l,
                        tickCurrent: 0,
                        observationIndex: 0,
                        observationUpdateDuration: 0,
                        feeGrowthGlobalX64A: ei,
                        feeGrowthGlobalX64B: ei,
                        protocolFeesTokenA: ei,
                        protocolFeesTokenB: ei,
                        swapInAmountTokenA: ei,
                        swapOutAmountTokenB: ei,
                        swapInAmountTokenB: ei,
                        swapOutAmountTokenA: ei,
                        tickArrayBitmap: [],
                        rewardInfos: [],
                        day: {
                            volume: 0,
                            volumeFee: 0,
                            feeA: 0,
                            feeB: 0,
                            feeApr: 0,
                            rewardApr: {
                                A: 0,
                                B: 0,
                                C: 0
                            },
                            apr: 0,
                            priceMax: 0,
                            priceMin: 0
                        },
                        week: {
                            volume: 0,
                            volumeFee: 0,
                            feeA: 0,
                            feeB: 0,
                            feeApr: 0,
                            rewardApr: {
                                A: 0,
                                B: 0,
                                C: 0
                            },
                            apr: 0,
                            priceMax: 0,
                            priceMin: 0
                        },
                        month: {
                            volume: 0,
                            volumeFee: 0,
                            feeA: 0,
                            feeB: 0,
                            feeApr: 0,
                            rewardApr: {
                                A: 0,
                                B: 0,
                                C: 0
                            },
                            apr: 0,
                            priceMax: 0,
                            priceMin: 0
                        },
                        tvl: 0,
                        lookupTableAccount: d.PublicKey.default,
                        startTime: s.toNumber(),
                        exBitmapInfo: {
                            poolId: r.poolId,
                            positiveTickArrayBitmap: Array.from({
                                length: 14
                            }, () => Array.from({
                                length: 8
                            }, () => new(P())(0))),
                            negativeTickArrayBitmap: Array.from({
                                length: 14
                            }, () => Array.from({
                                length: 8
                            }, () => new(P())(0)))
                        }
                    }
                }
                static async makeCreatePoolInstructionSimple({
                    makeTxVersion: e,
                    connection: t,
                    programId: n,
                    owner: i,
                    payer: r,
                    mint1: o,
                    mint2: s,
                    ammConfig: a,
                    initialPrice: c,
                    startTime: u,
                    computeBudgetConfig: l,
                    lookupTableCache: m
                }) {
                    let [d, p, f] = new(P())(o.mint.toBuffer()).gt(new(P())(s.mint.toBuffer())) ? [s, o, new iU(1).div(c)] : [o, s, c], g = ry.priceToSqrtPriceX64(f, d.decimals, p.decimals), w = await this.makeCreatePoolInstructions({
                        connection: t,
                        programId: n,
                        owner: i,
                        mintA: d,
                        mintB: p,
                        ammConfigId: a.id,
                        initialPriceX64: g,
                        startTime: u
                    });
                    return {
                        address: { ...w.address,
                            mintA: d.mint,
                            mintB: p.mint,
                            mintProgramIdA: d.programId,
                            mintProgramIdB: p.programId
                        },
                        innerTransactions: await $({
                            connection: t,
                            makeTxVersion: e,
                            computeBudgetConfig: l,
                            payer: r,
                            innerTransaction: [w.innerTransaction],
                            lookupTableCache: m
                        })
                    }
                }
                static async makeOpenPositionFromLiquidityInstructionSimple({
                    makeTxVersion: e,
                    connection: t,
                    poolInfo: n,
                    ownerInfo: i,
                    amountMaxA: r,
                    amountMaxB: o,
                    tickLower: s,
                    tickUpper: a,
                    liquidity: c,
                    associatedOnly: u = !0,
                    checkCreateATAOwner: l = !1,
                    withMetadata: m = "create",
                    getEphemeralSigners: d,
                    computeBudgetConfig: p,
                    lookupTableCache: f
                }) {
                    let g = [],
                        w = [],
                        S = [],
                        h = [],
                        y = [],
                        A = i.useSOLBalance && n.mintA.mint.equals(eg.WSOL.mint),
                        b = i.useSOLBalance && n.mintB.mint.equals(eg.WSOL.mint),
                        k = await this._selectOrCreateTokenAccount({
                            programId: n.mintA.programId,
                            mint: n.mintA.mint,
                            tokenAccounts: A ? [] : i.tokenAccounts,
                            owner: i.wallet,
                            createInfo: A || r.eq(ei) ? {
                                connection: t,
                                payer: i.feePayer,
                                amount: r,
                                frontInstructions: g,
                                endInstructions: w,
                                frontInstructionsType: S,
                                endInstructionsType: h,
                                signers: y
                            } : void 0,
                            associatedOnly: !A && u,
                            checkCreateATAOwner: l
                        }),
                        T = await this._selectOrCreateTokenAccount({
                            programId: n.mintB.programId,
                            mint: n.mintB.mint,
                            tokenAccounts: b ? [] : i.tokenAccounts,
                            owner: i.wallet,
                            createInfo: b || o.eq(ei) ? {
                                connection: t,
                                payer: i.feePayer,
                                amount: o,
                                frontInstructions: g,
                                endInstructions: w,
                                frontInstructionsType: S,
                                endInstructionsType: h,
                                signers: y
                            } : void 0,
                            associatedOnly: !b && u,
                            checkCreateATAOwner: l
                        });
                    rI.assertArgument(void 0 !== k && void 0 !== T, "cannot found target token accounts", "tokenAccounts", i.tokenAccounts);
                    let I = await this.makeOpenPositionFromLiquidityInstructions({
                        poolInfo: n,
                        ownerInfo: { ...i,
                            tokenAccountA: k,
                            tokenAccountB: T
                        },
                        tickLower: s,
                        tickUpper: a,
                        liquidity: c,
                        amountMaxA: r,
                        amountMaxB: o,
                        withMetadata: m,
                        getEphemeralSigners: d
                    });
                    return {
                        address: I.address,
                        innerTransactions: await $({
                            connection: t,
                            makeTxVersion: e,
                            computeBudgetConfig: p,
                            payer: i.feePayer,
                            innerTransaction: [{
                                instructionTypes: S,
                                instructions: g,
                                signers: y
                            }, I.innerTransaction, {
                                instructionTypes: h,
                                instructions: w,
                                signers: []
                            }],
                            lookupTableCache: f
                        })
                    }
                }
                static async makeOpenPositionFromBaseInstructionSimple({
                    connection: e,
                    poolInfo: t,
                    ownerInfo: n,
                    tickLower: i,
                    tickUpper: r,
                    base: o,
                    baseAmount: s,
                    otherAmountMax: a,
                    associatedOnly: c = !0,
                    checkCreateATAOwner: u = !1,
                    computeBudgetConfig: l,
                    withMetadata: m = "create",
                    makeTxVersion: d,
                    lookupTableCache: p,
                    getEphemeralSigners: f
                }) {
                    let g = [],
                        w = [],
                        S = [],
                        h = [],
                        y = [],
                        A = n.useSOLBalance && t.mintA.mint.equals(eg.WSOL.mint),
                        b = n.useSOLBalance && t.mintB.mint.equals(eg.WSOL.mint),
                        k = await this._selectOrCreateTokenAccount({
                            programId: t.mintA.programId,
                            mint: t.mintA.mint,
                            tokenAccounts: A ? [] : n.tokenAccounts,
                            owner: n.wallet,
                            createInfo: A ? {
                                connection: e,
                                payer: n.feePayer,
                                amount: "MintA" === o ? s : a,
                                frontInstructions: g,
                                endInstructions: w,
                                frontInstructionsType: S,
                                endInstructionsType: h,
                                signers: y
                            } : void 0,
                            associatedOnly: !A && c,
                            checkCreateATAOwner: u
                        }),
                        T = await this._selectOrCreateTokenAccount({
                            programId: t.mintB.programId,
                            mint: t.mintB.mint,
                            tokenAccounts: b ? [] : n.tokenAccounts,
                            owner: n.wallet,
                            createInfo: b ? {
                                connection: e,
                                payer: n.feePayer,
                                amount: "MintA" === o ? a : s,
                                frontInstructions: g,
                                endInstructions: w,
                                frontInstructionsType: S,
                                endInstructionsType: h,
                                signers: y
                            } : void 0,
                            associatedOnly: !b && c,
                            checkCreateATAOwner: u
                        });
                    rI.assertArgument(void 0 !== k && void 0 !== T, "cannot found target token accounts", "tokenAccounts", n.tokenAccounts);
                    let I = await this.makeOpenPositionFromBaseInstructions({
                        poolInfo: t,
                        ownerInfo: { ...n,
                            tokenAccountA: k,
                            tokenAccountB: T
                        },
                        tickLower: i,
                        tickUpper: r,
                        base: o,
                        baseAmount: s,
                        otherAmountMax: a,
                        withMetadata: m,
                        getEphemeralSigners: f
                    });
                    return {
                        address: I.address,
                        innerTransactions: await $({
                            connection: e,
                            makeTxVersion: d,
                            computeBudgetConfig: l,
                            payer: n.feePayer,
                            innerTransaction: [{
                                instructionTypes: S,
                                instructions: g,
                                signers: y
                            }, I.innerTransaction, {
                                instructionTypes: h,
                                instructions: w,
                                signers: []
                            }],
                            lookupTableCache: p
                        })
                    }
                }
                static async makeIncreasePositionFromLiquidityInstructionSimple({
                    connection: e,
                    poolInfo: t,
                    ownerPosition: n,
                    ownerInfo: i,
                    amountMaxA: r,
                    amountMaxB: o,
                    liquidity: s,
                    associatedOnly: a = !0,
                    checkCreateATAOwner: c = !1,
                    computeBudgetConfig: u,
                    makeTxVersion: l,
                    lookupTableCache: m
                }) {
                    let d = [],
                        p = [],
                        f = [],
                        g = [],
                        w = [],
                        S = i.useSOLBalance && t.mintA.mint.equals(eg.WSOL.mint),
                        h = i.useSOLBalance && t.mintB.mint.equals(eg.WSOL.mint),
                        y = await this._selectOrCreateTokenAccount({
                            programId: t.mintA.programId,
                            mint: t.mintA.mint,
                            tokenAccounts: S ? [] : i.tokenAccounts,
                            owner: i.wallet,
                            createInfo: S ? {
                                connection: e,
                                payer: i.feePayer,
                                amount: r,
                                frontInstructions: d,
                                endInstructions: p,
                                frontInstructionsType: f,
                                endInstructionsType: g,
                                signers: w
                            } : void 0,
                            associatedOnly: !S && a,
                            checkCreateATAOwner: c
                        }),
                        A = await this._selectOrCreateTokenAccount({
                            programId: t.mintB.programId,
                            mint: t.mintB.mint,
                            tokenAccounts: h ? [] : i.tokenAccounts,
                            owner: i.wallet,
                            createInfo: h ? {
                                connection: e,
                                payer: i.feePayer,
                                amount: o,
                                frontInstructions: d,
                                endInstructions: p,
                                frontInstructionsType: f,
                                endInstructionsType: g,
                                signers: w
                            } : void 0,
                            associatedOnly: !h && a,
                            checkCreateATAOwner: c
                        });
                    rI.assertArgument(!!y || !!A, "cannot found target token accounts", "tokenAccounts", i.tokenAccounts);
                    let b = this.makeIncreasePositionFromLiquidityInstructions({
                        poolInfo: t,
                        ownerPosition: n,
                        ownerInfo: {
                            wallet: i.wallet,
                            tokenAccountA: y,
                            tokenAccountB: A
                        },
                        liquidity: s,
                        amountMaxA: r,
                        amountMaxB: o
                    });
                    return {
                        address: b.address,
                        innerTransactions: await $({
                            connection: e,
                            makeTxVersion: l,
                            computeBudgetConfig: u,
                            payer: i.feePayer,
                            innerTransaction: [{
                                instructionTypes: f,
                                instructions: d,
                                signers: w
                            }, b.innerTransaction, {
                                instructionTypes: g,
                                instructions: p,
                                signers: []
                            }],
                            lookupTableCache: m
                        })
                    }
                }
                static async makeIncreasePositionFromBaseInstructionSimple({
                    connection: e,
                    poolInfo: t,
                    ownerPosition: n,
                    ownerInfo: i,
                    base: r,
                    baseAmount: o,
                    otherAmountMax: s,
                    associatedOnly: a = !0,
                    checkCreateATAOwner: c = !1,
                    computeBudgetConfig: u,
                    makeTxVersion: l,
                    lookupTableCache: m
                }) {
                    let d = [],
                        p = [],
                        f = [],
                        g = [],
                        w = [],
                        S = i.useSOLBalance && t.mintA.mint.equals(eg.WSOL.mint),
                        h = i.useSOLBalance && t.mintB.mint.equals(eg.WSOL.mint),
                        y = await this._selectOrCreateTokenAccount({
                            programId: t.mintA.programId,
                            mint: t.mintA.mint,
                            tokenAccounts: S ? [] : i.tokenAccounts,
                            owner: i.wallet,
                            createInfo: S ? {
                                connection: e,
                                payer: i.feePayer,
                                amount: "MintA" === r ? o : s,
                                frontInstructions: d,
                                endInstructions: p,
                                frontInstructionsType: f,
                                endInstructionsType: g,
                                signers: w
                            } : void 0,
                            associatedOnly: !S && a,
                            checkCreateATAOwner: c
                        }),
                        A = await this._selectOrCreateTokenAccount({
                            programId: t.mintB.programId,
                            mint: t.mintB.mint,
                            tokenAccounts: h ? [] : i.tokenAccounts,
                            owner: i.wallet,
                            createInfo: h ? {
                                connection: e,
                                payer: i.feePayer,
                                amount: "MintA" === r ? s : o,
                                frontInstructions: d,
                                endInstructions: p,
                                frontInstructionsType: f,
                                endInstructionsType: g,
                                signers: w
                            } : void 0,
                            associatedOnly: !h && a,
                            checkCreateATAOwner: c
                        });
                    rI.assertArgument(!!y || !!A, "cannot found target token accounts", "tokenAccounts", i.tokenAccounts);
                    let b = this.makeIncreasePositionFromBaseInstructions({
                        poolInfo: t,
                        ownerPosition: n,
                        ownerInfo: {
                            wallet: i.wallet,
                            tokenAccountA: y,
                            tokenAccountB: A
                        },
                        base: r,
                        baseAmount: o,
                        otherAmountMax: s
                    });
                    return {
                        address: b.address,
                        innerTransactions: await $({
                            connection: e,
                            makeTxVersion: l,
                            computeBudgetConfig: u,
                            payer: i.feePayer,
                            innerTransaction: [{
                                instructionTypes: f,
                                instructions: d,
                                signers: w
                            }, b.innerTransaction, {
                                instructionTypes: g,
                                instructions: p,
                                signers: []
                            }],
                            lookupTableCache: m
                        })
                    }
                }
                static async makeDecreaseLiquidityInstructionSimple({
                    connection: e,
                    poolInfo: t,
                    ownerPosition: n,
                    ownerInfo: i,
                    liquidity: r,
                    amountMinA: o,
                    amountMinB: s,
                    associatedOnly: a = !0,
                    checkCreateATAOwner: c = !1,
                    computeBudgetConfig: u,
                    makeTxVersion: l,
                    lookupTableCache: m
                }) {
                    let d = [],
                        p = [],
                        f = [],
                        g = [],
                        w = [],
                        S = i.useSOLBalance && t.mintA.mint.equals(eg.WSOL.mint),
                        h = i.useSOLBalance && t.mintB.mint.equals(eg.WSOL.mint),
                        y = await this._selectOrCreateTokenAccount({
                            programId: t.mintA.programId,
                            mint: t.mintA.mint,
                            tokenAccounts: S ? [] : i.tokenAccounts,
                            owner: i.wallet,
                            createInfo: {
                                connection: e,
                                payer: i.feePayer,
                                amount: 0,
                                frontInstructions: d,
                                frontInstructionsType: f,
                                endInstructions: S ? p : [],
                                endInstructionsType: S ? g : [],
                                signers: w
                            },
                            associatedOnly: !S && a,
                            checkCreateATAOwner: c
                        }),
                        A = await this._selectOrCreateTokenAccount({
                            programId: t.mintB.programId,
                            mint: t.mintB.mint,
                            tokenAccounts: h ? [] : i.tokenAccounts,
                            owner: i.wallet,
                            createInfo: {
                                connection: e,
                                payer: i.feePayer,
                                amount: 0,
                                frontInstructions: d,
                                frontInstructionsType: f,
                                endInstructions: h ? p : [],
                                endInstructionsType: h ? g : [],
                                signers: w
                            },
                            associatedOnly: !h && a,
                            checkCreateATAOwner: c
                        }),
                        b = [];
                    for (let n of t.rewardInfos) {
                        let r = i.useSOLBalance && n.tokenMint.equals(eg.WSOL.mint),
                            o = n.tokenMint.equals(t.mintA.mint) ? y : n.tokenMint.equals(t.mintB.mint) ? A : await this._selectOrCreateTokenAccount({
                                programId: n.tokenProgramId,
                                mint: n.tokenMint,
                                tokenAccounts: r ? [] : i.tokenAccounts,
                                owner: i.wallet,
                                createInfo: {
                                    connection: e,
                                    payer: i.feePayer,
                                    amount: 0,
                                    frontInstructions: d,
                                    frontInstructionsType: f,
                                    endInstructions: r ? p : [],
                                    endInstructionsType: r ? g : [],
                                    signers: w
                                },
                                associatedOnly: !r && a,
                                checkCreateATAOwner: c
                            });
                        b.push(o)
                    }
                    rI.assertArgument(!!y || !!A, "cannot found target token accounts", "tokenAccounts", i.tokenAccounts);
                    let k = this.makeDecreaseLiquidityInstructions({
                            poolInfo: t,
                            ownerPosition: n,
                            ownerInfo: {
                                wallet: i.wallet,
                                tokenAccountA: y,
                                tokenAccountB: A,
                                rewardAccounts: b
                            },
                            liquidity: r,
                            amountMinA: o,
                            amountMinB: s
                        }),
                        T = i.closePosition ? this.makeClosePositionInstructions({
                            poolInfo: t,
                            ownerInfo: i,
                            ownerPosition: n
                        }) : {
                            address: {},
                            innerTransaction: {
                                instructions: [],
                                signers: [],
                                instructionTypes: []
                            }
                        };
                    return {
                        address: k.address,
                        innerTransactions: await $({
                            connection: e,
                            makeTxVersion: l,
                            computeBudgetConfig: u,
                            payer: i.feePayer,
                            innerTransaction: [{
                                instructionTypes: f,
                                instructions: d,
                                signers: w
                            }, k.innerTransaction, {
                                instructionTypes: g,
                                instructions: p,
                                signers: []
                            }, T.innerTransaction],
                            lookupTableCache: m
                        })
                    }
                }
                static async makeSwapBaseInInstructionSimple({
                    connection: e,
                    poolInfo: t,
                    ownerInfo: n,
                    inputMint: i,
                    amountIn: r,
                    amountOutMin: o,
                    priceLimit: s,
                    remainingAccounts: a,
                    associatedOnly: c = !0,
                    checkCreateATAOwner: u = !1,
                    computeBudgetConfig: l,
                    makeTxVersion: m,
                    lookupTableCache: d
                }) {
                    let p;
                    let f = [],
                        g = [],
                        w = [],
                        S = [],
                        h = [];
                    p = !s || s.equals(new iU(0)) ? i.equals(t.mintA.mint) ? iF.add(er) : iK.sub(er) : ry.priceToSqrtPriceX64(s, t.mintA.decimals, t.mintB.decimals);
                    let y = t.mintA.mint.equals(i),
                        A = n.useSOLBalance && t.mintA.mint.equals(eg.WSOL.mint),
                        b = n.useSOLBalance && t.mintB.mint.equals(eg.WSOL.mint),
                        k = await this._selectOrCreateTokenAccount({
                            programId: t.mintA.programId,
                            mint: t.mintA.mint,
                            tokenAccounts: A ? [] : n.tokenAccounts,
                            owner: n.wallet,
                            createInfo: A || !y ? {
                                connection: e,
                                payer: n.feePayer,
                                amount: y ? r : 0,
                                frontInstructions: f,
                                endInstructions: g,
                                frontInstructionsType: w,
                                endInstructionsType: S,
                                signers: h
                            } : void 0,
                            associatedOnly: !A && c,
                            checkCreateATAOwner: u
                        }),
                        T = await this._selectOrCreateTokenAccount({
                            programId: t.mintB.programId,
                            mint: t.mintB.mint,
                            tokenAccounts: b ? [] : n.tokenAccounts,
                            owner: n.wallet,
                            createInfo: b || y ? {
                                connection: e,
                                payer: n.feePayer,
                                amount: y ? 0 : r,
                                frontInstructions: f,
                                endInstructions: g,
                                frontInstructionsType: w,
                                endInstructionsType: S,
                                signers: h
                            } : void 0,
                            associatedOnly: !b && c,
                            checkCreateATAOwner: u
                        });
                    rI.assertArgument(!!k || !!T, "cannot found target token accounts", "tokenAccounts", n.tokenAccounts);
                    let I = this.makeSwapBaseInInstructions({
                        poolInfo: t,
                        ownerInfo: {
                            wallet: n.wallet,
                            tokenAccountA: k,
                            tokenAccountB: T
                        },
                        inputMint: i,
                        amountIn: r,
                        amountOutMin: o,
                        sqrtPriceLimitX64: p,
                        remainingAccounts: a
                    });
                    return {
                        address: I.address,
                        innerTransactions: await $({
                            connection: e,
                            makeTxVersion: m,
                            computeBudgetConfig: l,
                            payer: n.feePayer,
                            innerTransaction: [{
                                instructionTypes: w,
                                instructions: f,
                                signers: h
                            }, I.innerTransaction, {
                                instructionTypes: S,
                                instructions: g,
                                signers: []
                            }],
                            lookupTableCache: d
                        })
                    }
                }
                static async makeSwapBaseOutInstructionSimple({
                    connection: e,
                    poolInfo: t,
                    ownerInfo: n,
                    outputMint: i,
                    amountOut: r,
                    amountInMax: o,
                    priceLimit: s,
                    remainingAccounts: a,
                    associatedOnly: c = !0,
                    checkCreateATAOwner: u = !1,
                    computeBudgetConfig: l,
                    makeTxVersion: m,
                    lookupTableCache: d
                }) {
                    let p;
                    let f = [],
                        g = [],
                        w = [],
                        S = [],
                        h = [];
                    p = !s || s.equals(new iU(0)) ? i.equals(t.mintB.mint) ? iF.add(er) : iK.sub(er) : ry.priceToSqrtPriceX64(s, t.mintA.decimals, t.mintB.decimals);
                    let y = t.mintA.mint.equals(i),
                        A = n.useSOLBalance && t.mintA.mint.equals(eg.WSOL.mint),
                        b = n.useSOLBalance && t.mintB.mint.equals(eg.WSOL.mint),
                        k = await this._selectOrCreateTokenAccount({
                            programId: t.mintA.programId,
                            mint: t.mintA.mint,
                            tokenAccounts: A ? [] : n.tokenAccounts,
                            owner: n.wallet,
                            createInfo: A || !y ? {
                                connection: e,
                                payer: n.feePayer,
                                amount: y ? o : 0,
                                frontInstructions: f,
                                endInstructions: g,
                                frontInstructionsType: w,
                                endInstructionsType: S,
                                signers: h
                            } : void 0,
                            associatedOnly: !A && c,
                            checkCreateATAOwner: u
                        }),
                        T = await this._selectOrCreateTokenAccount({
                            programId: t.mintB.programId,
                            mint: t.mintB.mint,
                            tokenAccounts: b ? [] : n.tokenAccounts,
                            owner: n.wallet,
                            createInfo: b || y ? {
                                connection: e,
                                payer: n.feePayer,
                                amount: y ? 0 : o,
                                frontInstructions: f,
                                endInstructions: g,
                                frontInstructionsType: w,
                                endInstructionsType: S,
                                signers: h
                            } : void 0,
                            associatedOnly: !b && c,
                            checkCreateATAOwner: u
                        });
                    rI.assertArgument(!!k || !!T, "cannot found target token accounts", "tokenAccounts", n.tokenAccounts);
                    let I = this.makeSwapBaseOutInstructions({
                        poolInfo: t,
                        ownerInfo: {
                            wallet: n.wallet,
                            tokenAccountA: k,
                            tokenAccountB: T
                        },
                        outputMint: i,
                        amountOut: r,
                        amountInMax: o,
                        sqrtPriceLimitX64: p,
                        remainingAccounts: a
                    });
                    return {
                        address: I.address,
                        innerTransactions: await $({
                            connection: e,
                            makeTxVersion: m,
                            computeBudgetConfig: l,
                            payer: n.feePayer,
                            innerTransaction: [{
                                instructionTypes: w,
                                instructions: f,
                                signers: h
                            }, I.innerTransaction, {
                                instructionTypes: S,
                                instructions: g,
                                signers: []
                            }],
                            lookupTableCache: d
                        })
                    }
                }
                static async makeCLosePositionInstructionSimple({
                    poolInfo: e,
                    ownerPosition: t,
                    ownerInfo: n,
                    makeTxVersion: i,
                    lookupTableCache: r,
                    connection: o
                }) {
                    let s = this.makeClosePositionInstructions({
                        poolInfo: e,
                        ownerInfo: n,
                        ownerPosition: t
                    });
                    return {
                        address: s.address,
                        innerTransactions: await $({
                            connection: o,
                            makeTxVersion: i,
                            computeBudgetConfig: void 0,
                            payer: n.feePayer,
                            innerTransaction: [s.innerTransaction],
                            lookupTableCache: r
                        })
                    }
                }
                static async makeInitRewardInstructionSimple({
                    connection: e,
                    poolInfo: t,
                    ownerInfo: n,
                    rewardInfo: i,
                    chainTime: r,
                    associatedOnly: o = !0,
                    checkCreateATAOwner: s = !1,
                    makeTxVersion: a,
                    lookupTableCache: c
                }) {
                    rI.assertArgument(i.endTime > i.openTime, "reward time error", "rewardInfo", i), rI.assertArgument(i.openTime > r, "reward must be paid later", "rewardInfo", i);
                    let u = [],
                        l = [],
                        m = [],
                        d = [],
                        p = [],
                        f = n.useSOLBalance && i.mint.equals(eg.WSOL.mint),
                        g = i.perSecond.mul(i.endTime - i.openTime),
                        w = await this._selectOrCreateTokenAccount({
                            programId: i.programId,
                            mint: i.mint,
                            tokenAccounts: f ? [] : n.tokenAccounts,
                            owner: n.wallet,
                            createInfo: f ? {
                                connection: e,
                                payer: n.feePayer,
                                amount: new(P())(new iU(g.toFixed(0)).gte(g) ? g.toFixed(0) : g.add(1).toFixed(0)),
                                frontInstructions: u,
                                endInstructions: l,
                                frontInstructionsType: m,
                                endInstructionsType: d,
                                signers: p
                            } : void 0,
                            associatedOnly: !f && o,
                            checkCreateATAOwner: s
                        });
                    rI.assertArgument(w, "no money", "ownerRewardAccount", n.tokenAccounts);
                    let S = this.makeInitRewardInstructions({
                        poolInfo: t,
                        ownerInfo: {
                            wallet: n.wallet,
                            tokenAccount: w
                        },
                        rewardInfo: {
                            programId: i.programId,
                            mint: i.mint,
                            openTime: i.openTime,
                            endTime: i.endTime,
                            emissionsPerSecondX64: rw.decimalToX64(i.perSecond)
                        }
                    });
                    return {
                        address: S.address,
                        innerTransactions: await $({
                            connection: e,
                            makeTxVersion: a,
                            computeBudgetConfig: void 0,
                            payer: n.feePayer,
                            innerTransaction: [{
                                instructionTypes: m,
                                instructions: u,
                                signers: p
                            }, S.innerTransaction, {
                                instructionTypes: d,
                                instructions: l,
                                signers: []
                            }],
                            lookupTableCache: c
                        })
                    }
                }
                static async makeInitRewardsInstructionSimple({
                    connection: e,
                    poolInfo: t,
                    ownerInfo: n,
                    rewardInfos: i,
                    associatedOnly: r = !0,
                    checkCreateATAOwner: o = !1,
                    computeBudgetConfig: s,
                    makeTxVersion: a,
                    lookupTableCache: c
                }) {
                    for (let e of i) rI.assertArgument(e.endTime > e.openTime, "reward time error", "rewardInfo", e);
                    let u = [],
                        l = [],
                        m = [],
                        d = [],
                        p = [],
                        f = [];
                    for (let s of i) {
                        let i = n.useSOLBalance && s.mint.equals(eg.WSOL.mint),
                            a = s.perSecond.mul(s.endTime - s.openTime),
                            c = await this._selectOrCreateTokenAccount({
                                programId: s.programId,
                                mint: s.mint,
                                tokenAccounts: i ? [] : n.tokenAccounts,
                                owner: n.wallet,
                                createInfo: i ? {
                                    connection: e,
                                    payer: n.feePayer,
                                    amount: new(P())(new iU(a.toFixed(0)).gte(a) ? a.toFixed(0) : a.add(1).toFixed(0)),
                                    frontInstructions: u,
                                    endInstructions: l,
                                    frontInstructionsType: m,
                                    endInstructionsType: d,
                                    signers: f
                                } : void 0,
                                associatedOnly: !i && r,
                                checkCreateATAOwner: o
                            });
                        rI.assertArgument(c, "no money", "ownerRewardAccount", n.tokenAccounts), p.push(this.makeInitRewardInstructions({
                            poolInfo: t,
                            ownerInfo: {
                                wallet: n.wallet,
                                tokenAccount: c
                            },
                            rewardInfo: {
                                programId: s.programId,
                                mint: s.mint,
                                openTime: s.openTime,
                                endTime: s.endTime,
                                emissionsPerSecondX64: rw.decimalToX64(s.perSecond)
                            }
                        }))
                    }
                    let g = {};
                    for (let e of p) g = { ...g,
                        ...e.address
                    };
                    return {
                        address: g,
                        innerTransactions: await $({
                            connection: e,
                            makeTxVersion: a,
                            computeBudgetConfig: s,
                            payer: n.feePayer,
                            innerTransaction: [{
                                instructionTypes: m,
                                instructions: u,
                                signers: f
                            }, ...p.map(e => e.innerTransaction), {
                                instructionTypes: d,
                                instructions: l,
                                signers: []
                            }],
                            lookupTableCache: c
                        })
                    }
                }
                static async makeSetRewardInstructionSimple({
                    connection: e,
                    poolInfo: t,
                    ownerInfo: n,
                    rewardInfo: i,
                    chainTime: r,
                    associatedOnly: o = !0,
                    checkCreateATAOwner: s = !1,
                    makeTxVersion: a,
                    lookupTableCache: c
                }) {
                    rI.assertArgument(i.endTime > i.openTime, "reward time error", "rewardInfo", i), rI.assertArgument(i.openTime > r, "reward must be paid later", "rewardInfo", i);
                    let u = [],
                        l = [],
                        m = [],
                        d = [],
                        p = [],
                        f = n.useSOLBalance && i.mint.equals(eg.WSOL.mint),
                        g = await this._selectOrCreateTokenAccount({
                            programId: i.programId,
                            mint: i.mint,
                            tokenAccounts: f ? [] : n.tokenAccounts,
                            owner: n.wallet,
                            createInfo: f ? {
                                connection: e,
                                payer: n.feePayer,
                                amount: new(P())(new iU(i.perSecond.sub(i.endTime - i.openTime).toFixed(0)).gte(i.perSecond.sub(i.endTime - i.openTime)) ? i.perSecond.sub(i.endTime - i.openTime).toFixed(0) : i.perSecond.sub(i.endTime - i.openTime).add(1).toFixed(0)),
                                frontInstructions: u,
                                endInstructions: l,
                                frontInstructionsType: m,
                                endInstructionsType: d,
                                signers: p
                            } : void 0,
                            associatedOnly: !f && o,
                            checkCreateATAOwner: s
                        });
                    rI.assertArgument(g, "no money", "ownerRewardAccount", n.tokenAccounts);
                    let w = this.makeSetRewardInstructions({
                        poolInfo: t,
                        ownerInfo: {
                            wallet: n.wallet,
                            tokenAccount: g
                        },
                        rewardInfo: {
                            mint: i.mint,
                            openTime: i.openTime,
                            endTime: i.endTime,
                            emissionsPerSecondX64: rw.decimalToX64(i.perSecond)
                        }
                    });
                    return {
                        address: w.address,
                        innerTransactions: await $({
                            connection: e,
                            makeTxVersion: a,
                            computeBudgetConfig: void 0,
                            payer: n.feePayer,
                            innerTransaction: [{
                                instructionTypes: m,
                                instructions: u,
                                signers: p
                            }, w.innerTransaction, {
                                instructionTypes: d,
                                instructions: l,
                                signers: []
                            }],
                            lookupTableCache: c
                        })
                    }
                }
                static async makeSetRewardsInstructionSimple({
                    connection: e,
                    poolInfo: t,
                    ownerInfo: n,
                    rewardInfos: i,
                    chainTime: r,
                    associatedOnly: o = !0,
                    checkCreateATAOwner: s = !1,
                    computeBudgetConfig: a,
                    makeTxVersion: c,
                    lookupTableCache: u
                }) {
                    let l = [],
                        m = [],
                        d = [],
                        p = [],
                        f = [],
                        g = [];
                    for (let a of i) {
                        rI.assertArgument(a.endTime > a.openTime, "reward time error", "rewardInfo", a), rI.assertArgument(a.openTime > r, "reward must be paid later", "rewardInfo", a);
                        let i = n.useSOLBalance && a.mint.equals(eg.WSOL.mint),
                            c = await this._selectOrCreateTokenAccount({
                                programId: a.programId,
                                mint: a.mint,
                                tokenAccounts: i ? [] : n.tokenAccounts,
                                owner: n.wallet,
                                createInfo: i ? {
                                    connection: e,
                                    payer: n.feePayer,
                                    amount: new(P())(new iU(a.perSecond.sub(a.endTime - a.openTime).toFixed(0)).gte(a.perSecond.sub(a.endTime - a.openTime)) ? a.perSecond.sub(a.endTime - a.openTime).toFixed(0) : a.perSecond.sub(a.endTime - a.openTime).add(1).toFixed(0)),
                                    frontInstructions: l,
                                    endInstructions: m,
                                    frontInstructionsType: d,
                                    endInstructionsType: p,
                                    signers: g
                                } : void 0,
                                associatedOnly: !i && o,
                                checkCreateATAOwner: s
                            });
                        rI.assertArgument(c, "no money", "ownerRewardAccount", n.tokenAccounts), f.push(this.makeSetRewardInstructions({
                            poolInfo: t,
                            ownerInfo: {
                                wallet: n.wallet,
                                tokenAccount: c
                            },
                            rewardInfo: {
                                mint: a.mint,
                                openTime: a.openTime,
                                endTime: a.endTime,
                                emissionsPerSecondX64: rw.decimalToX64(a.perSecond)
                            }
                        }))
                    }
                    let w = {};
                    for (let e of f) w = { ...w,
                        ...e.address
                    };
                    return {
                        address: w,
                        innerTransactions: await $({
                            connection: e,
                            makeTxVersion: c,
                            computeBudgetConfig: a,
                            payer: n.feePayer,
                            innerTransaction: [{
                                instructionTypes: d,
                                instructions: l,
                                signers: g
                            }, ...f.map(e => e.innerTransaction), {
                                instructionTypes: p,
                                instructions: m,
                                signers: []
                            }],
                            lookupTableCache: u
                        })
                    }
                }
                static async makeCollectRewardInstructionSimple({
                    connection: e,
                    poolInfo: t,
                    ownerInfo: n,
                    rewardMint: i,
                    associatedOnly: r = !0,
                    checkCreateATAOwner: o = !1,
                    computeBudgetConfig: s,
                    makeTxVersion: a,
                    lookupTableCache: c
                }) {
                    let u = [],
                        l = [],
                        m = [],
                        d = [],
                        p = [],
                        f = t.rewardInfos.find(e => e.tokenMint.equals(i));
                    if (rI.assertArgument(void 0 !== f, "reward mint error", "not found reward mint", i), void 0 === f) throw Error("reward mint error");
                    let g = n.useSOLBalance && i.equals(eg.WSOL.mint),
                        w = await this._selectOrCreateTokenAccount({
                            programId: f.tokenProgramId,
                            mint: i,
                            tokenAccounts: g ? [] : n.tokenAccounts,
                            owner: n.wallet,
                            createInfo: {
                                connection: e,
                                payer: n.feePayer,
                                amount: 0,
                                frontInstructions: u,
                                endInstructions: g ? l : [],
                                frontInstructionsType: m,
                                endInstructionsType: d,
                                signers: p
                            },
                            associatedOnly: !g && r,
                            checkCreateATAOwner: o
                        });
                    rI.assertArgument(w, "no money", "ownerRewardAccount", n.tokenAccounts);
                    let S = this.makeCollectRewardInstructions({
                        poolInfo: t,
                        ownerInfo: {
                            wallet: n.wallet,
                            tokenAccount: w
                        },
                        rewardMint: i
                    });
                    return {
                        address: S.address,
                        innerTransactions: await $({
                            connection: e,
                            makeTxVersion: a,
                            computeBudgetConfig: s,
                            payer: n.feePayer,
                            innerTransaction: [{
                                instructionTypes: m,
                                instructions: u,
                                signers: p
                            }, S.innerTransaction, {
                                instructionTypes: d,
                                instructions: l,
                                signers: []
                            }],
                            lookupTableCache: c
                        })
                    }
                }
                static async makeCollectRewardsInstructionSimple({
                    connection: e,
                    poolInfo: t,
                    ownerInfo: n,
                    rewardMints: i,
                    associatedOnly: r = !0,
                    checkCreateATAOwner: o = !1,
                    computeBudgetConfig: s,
                    makeTxVersion: a,
                    lookupTableCache: c
                }) {
                    let u = [],
                        l = [],
                        m = [],
                        d = [],
                        p = [],
                        f = [];
                    for (let s of i) {
                        let i = t.rewardInfos.find(e => e.tokenMint.equals(s));
                        if (rI.assertArgument(void 0 !== i, "reward mint error", "not found reward mint", s), void 0 === i) throw Error("reward mint error");
                        let a = n.useSOLBalance && s.equals(eg.WSOL.mint),
                            c = await this._selectOrCreateTokenAccount({
                                programId: i.tokenProgramId,
                                mint: s,
                                tokenAccounts: a ? [] : n.tokenAccounts,
                                owner: n.wallet,
                                createInfo: {
                                    connection: e,
                                    payer: n.feePayer,
                                    amount: 0,
                                    frontInstructions: u,
                                    endInstructions: a ? l : [],
                                    signers: f,
                                    frontInstructionsType: m,
                                    endInstructionsType: d
                                },
                                associatedOnly: !a && r,
                                checkCreateATAOwner: o
                            });
                        rI.assertArgument(c, "no money", "ownerRewardAccount", n.tokenAccounts), p.push(this.makeCollectRewardInstructions({
                            poolInfo: t,
                            ownerInfo: {
                                wallet: n.wallet,
                                tokenAccount: c
                            },
                            rewardMint: s
                        }))
                    }
                    let g = {};
                    for (let e of p) g = { ...g,
                        ...e.address
                    };
                    return {
                        address: g,
                        innerTransactions: await $({
                            connection: e,
                            makeTxVersion: a,
                            computeBudgetConfig: s,
                            payer: n.feePayer,
                            innerTransaction: [{
                                instructionTypes: m,
                                instructions: u,
                                signers: f
                            }, ...p.map(e => e.innerTransaction), {
                                instructionTypes: d,
                                instructions: l,
                                signers: []
                            }],
                            lookupTableCache: c
                        })
                    }
                }
                static async makeHarvestAllRewardInstructionSimple({
                    connection: e,
                    fetchPoolInfos: t,
                    ownerInfo: n,
                    associatedOnly: i = !0,
                    checkCreateATAOwner: r = !1,
                    makeTxVersion: o,
                    lookupTableCache: s
                }) {
                    let a = {};
                    for (let e of n.tokenAccounts) i ? td(n.wallet, e.accountInfo.mint, e.programId).publicKey.equals(e.pubkey) && (a[e.accountInfo.mint.toString()] = e.pubkey) : a[e.accountInfo.mint.toString()] = e.pubkey;
                    let c = [],
                        u = [],
                        l = [],
                        m = [],
                        d = [],
                        p = [];
                    for (let o of Object.values(t)) {
                        if (void 0 === o.positionAccount || !o.positionAccount.find(e => !e.tokenFeeAmountA.isZero() || !e.tokenFeeAmountB.isZero() || e.rewardInfos.find(e => !e.pendingReward.isZero()))) continue;
                        let t = o.state,
                            s = n.useSOLBalance && t.mintA.mint.equals(eg.WSOL.mint),
                            f = n.useSOLBalance && t.mintB.mint.equals(eg.WSOL.mint),
                            g = a[t.mintA.mint.toString()] ? ? await this._selectOrCreateTokenAccount({
                                programId: t.mintA.programId,
                                mint: t.mintA.mint,
                                tokenAccounts: s ? [] : n.tokenAccounts,
                                owner: n.wallet,
                                createInfo: {
                                    connection: e,
                                    payer: n.feePayer,
                                    amount: 0,
                                    frontInstructions: c,
                                    frontInstructionsType: l,
                                    endInstructions: s ? u : [],
                                    endInstructionsType: s ? m : [],
                                    signers: p
                                },
                                associatedOnly: !s && i,
                                checkCreateATAOwner: r
                            }),
                            w = a[t.mintB.mint.toString()] ? ? await this._selectOrCreateTokenAccount({
                                programId: t.mintB.programId,
                                mint: t.mintB.mint,
                                tokenAccounts: f ? [] : n.tokenAccounts,
                                owner: n.wallet,
                                createInfo: {
                                    connection: e,
                                    payer: n.feePayer,
                                    amount: 0,
                                    frontInstructions: c,
                                    frontInstructionsType: l,
                                    endInstructions: f ? u : [],
                                    endInstructionsType: f ? m : [],
                                    signers: p
                                },
                                associatedOnly: !f && i,
                                checkCreateATAOwner: r
                            });
                        a[t.mintA.mint.toString()] = g, a[t.mintB.mint.toString()] = w;
                        let S = [];
                        for (let o of t.rewardInfos) {
                            let t = n.useSOLBalance && o.tokenMint.equals(eg.WSOL.mint),
                                s = a[o.tokenMint.toString()] ? ? await this._selectOrCreateTokenAccount({
                                    programId: o.tokenProgramId,
                                    mint: o.tokenMint,
                                    tokenAccounts: t ? [] : n.tokenAccounts,
                                    owner: n.wallet,
                                    createInfo: {
                                        connection: e,
                                        payer: n.feePayer,
                                        amount: 0,
                                        frontInstructions: c,
                                        endInstructions: t ? u : [],
                                        frontInstructionsType: l,
                                        endInstructionsType: m,
                                        signers: p
                                    },
                                    associatedOnly: !t && i,
                                    checkCreateATAOwner: r
                                });
                            a[o.tokenMint.toString()] = s, S.push(s)
                        }
                        for (let e of o.positionAccount) d.push(this.makeDecreaseLiquidityInstructions({
                            poolInfo: t,
                            ownerPosition: e,
                            ownerInfo: {
                                wallet: n.wallet,
                                tokenAccountA: g,
                                tokenAccountB: w,
                                rewardAccounts: S
                            },
                            liquidity: ei,
                            amountMinA: ei,
                            amountMinB: ei
                        }))
                    }
                    return {
                        address: {},
                        innerTransactions: await $({
                            connection: e,
                            makeTxVersion: o,
                            computeBudgetConfig: void 0,
                            payer: n.feePayer,
                            innerTransaction: [{
                                instructionTypes: l,
                                instructions: c,
                                signers: p
                            }, ...d.map(e => e.innerTransaction), {
                                instructionTypes: m,
                                instructions: u,
                                signers: []
                            }],
                            lookupTableCache: s
                        })
                    }
                }
                static async makeCreatePoolInstructions({
                    connection: e,
                    programId: t,
                    owner: n,
                    mintA: i,
                    mintB: r,
                    ammConfigId: o,
                    initialPriceX64: s,
                    startTime: a
                }) {
                    var c, u;
                    let l = tS({
                            fromPublicKey: n,
                            programId: t
                        }),
                        m = (c = i.mint, u = r.mint, W([iZ, o.toBuffer(), c.toBuffer(), u.toBuffer()], t)).publicKey,
                        p = i2(t, m, i.mint).publicKey,
                        f = i2(t, m, r.mint).publicKey,
                        g = [d.SystemProgram.createAccountWithSeed({
                            fromPubkey: n,
                            basePubkey: n,
                            seed: l.seed,
                            newAccountPubkey: l.publicKey,
                            lamports: await e.getMinimumBalanceForRentExemption(rs.span),
                            space: rs.span,
                            programId: t
                        }), function(e, t, n, i, r, o, s, a, c, u, l, m, p, f) {
                            let g = e5([eJ("sqrtPriceX64"), eZ("startTime")]),
                                w = [{
                                    pubkey: n,
                                    isSigner: !0,
                                    isWritable: !0
                                }, {
                                    pubkey: i,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: t,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: o,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: c,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: s,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: u,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: r,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: m,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: a,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: l,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: V,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: _,
                                    isSigner: !1,
                                    isWritable: !1
                                }],
                                S = iq.alloc(g.span);
                            g.encode({
                                sqrtPriceX64: p,
                                startTime: f
                            }, S);
                            let h = iq.from([...iV.createPool, ...S]);
                            return new d.TransactionInstruction({
                                keys: w,
                                programId: e,
                                data: h
                            })
                        }(t, m, n, o, l.publicKey, i.mint, p, i.programId, r.mint, f, r.programId, i9(t, m).publicKey, s, a)];
                    return {
                        address: {
                            observationId: l.publicKey,
                            poolId: m,
                            mintAVault: p,
                            mintBVault: f
                        },
                        innerTransaction: {
                            instructions: g,
                            signers: [],
                            instructionTypes: [nc.createAccount, nc.clmmCreatePool],
                            lookupTableAddress: []
                        }
                    }
                }
                static async makeOpenPositionFromLiquidityInstructions({
                    poolInfo: e,
                    ownerInfo: t,
                    tickLower: n,
                    tickUpper: i,
                    liquidity: r,
                    amountMaxA: o,
                    amountMaxB: s,
                    withMetadata: a,
                    getEphemeralSigners: c
                }) {
                    let u;
                    let m = [];
                    if (c) u = new d.PublicKey((await c(1))[0]);
                    else {
                        let e = d.Keypair.generate();
                        m.push(e), u = e.publicKey
                    }
                    let p = rn.getTickArrayStartIndexByTick(n, e.ammConfig.tickSpacing),
                        f = rn.getTickArrayStartIndexByTick(i, e.ammConfig.tickSpacing),
                        {
                            publicKey: g
                        } = i3(e.programId, e.id, p),
                        {
                            publicKey: w
                        } = i3(e.programId, e.id, f),
                        {
                            publicKey: S
                        } = td(t.wallet, u, l.H_),
                        {
                            publicKey: h
                        } = i7(u),
                        {
                            publicKey: y
                        } = i8(e.programId, u),
                        {
                            publicKey: A
                        } = i5(e.programId, e.id, n, i),
                        b = function(e, t, n, i, r, o, s, a, c, u, m, p, f, g, w, S, h, y, A, b, k, T, I, P, v, C) {
                            let L = e5([eF("tickLowerIndex"), eF("tickUpperIndex"), eF("tickArrayLowerStartIndex"), eF("tickArrayUpperStartIndex"), eJ("liquidity"), eZ("amountMaxA"), eZ("amountMaxB"), e4("withMetadata"), eQ("optionBaseFlag"), e4("baseFlag")]),
                                D = [...C ? [{
                                    pubkey: C,
                                    isSigner: !1,
                                    isWritable: !0
                                }] : []],
                                R = [{
                                    pubkey: t,
                                    isSigner: !0,
                                    isWritable: !0
                                }, {
                                    pubkey: i,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: r,
                                    isSigner: !0,
                                    isWritable: !0
                                }, {
                                    pubkey: o,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: s,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: n,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: a,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: c,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: u,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: m,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: p,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: f,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: g,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: w,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: _,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: V,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: l.H_,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: l._u,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: x,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: l.nA,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: S,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: h,
                                    isSigner: !1,
                                    isWritable: !1
                                }, ...D],
                                E = iq.alloc(L.span);
                            L.encode({
                                tickLowerIndex: y,
                                tickUpperIndex: A,
                                tickArrayLowerStartIndex: b,
                                tickArrayUpperStartIndex: k,
                                liquidity: T,
                                amountMaxA: I,
                                amountMaxB: P,
                                withMetadata: "create" === v,
                                baseFlag: !1,
                                optionBaseFlag: 0
                            }, E);
                            let O = iq.from([...iV.openPosition, ...E]);
                            return new d.TransactionInstruction({
                                keys: R,
                                programId: e,
                                data: O
                            })
                        }(e.programId, t.feePayer, e.id, t.wallet, u, S, h, A, g, w, y, t.tokenAccountA, t.tokenAccountB, e.mintA.vault, e.mintB.vault, e.mintA.mint, e.mintB.mint, n, i, p, f, r, o, s, a, rg.isOverflowDefaultTickarrayBitmap(e.tickSpacing, [p, f]) ? i9(e.programId, e.id).publicKey : void 0);
                    return {
                        address: {
                            nftMint: u,
                            tickArrayLower: g,
                            tickArrayUpper: w,
                            positionNftAccount: S,
                            metadataAccount: h,
                            personalPosition: y,
                            protocolPosition: A
                        },
                        innerTransaction: {
                            instructions: [b],
                            signers: m,
                            instructionTypes: [nc.clmmOpenPosition],
                            lookupTableAddress: [e.lookupTableAccount].filter(e => e && !e.equals(d.PublicKey.default))
                        }
                    }
                }
                static async makeOpenPositionFromBaseInstructions({
                    poolInfo: e,
                    ownerInfo: t,
                    tickLower: n,
                    tickUpper: i,
                    base: r,
                    baseAmount: o,
                    otherAmountMax: s,
                    withMetadata: a,
                    getEphemeralSigners: c
                }) {
                    let u;
                    let m = [];
                    if (c) u = new d.PublicKey((await c(1))[0]);
                    else {
                        let e = d.Keypair.generate();
                        m.push(e), u = e.publicKey
                    }
                    let p = rn.getTickArrayStartIndexByTick(n, e.ammConfig.tickSpacing),
                        f = rn.getTickArrayStartIndexByTick(i, e.ammConfig.tickSpacing),
                        {
                            publicKey: g
                        } = i3(e.programId, e.id, p),
                        {
                            publicKey: w
                        } = i3(e.programId, e.id, f),
                        {
                            publicKey: S
                        } = td(t.wallet, u, l.H_),
                        {
                            publicKey: h
                        } = i7(u),
                        {
                            publicKey: y
                        } = i8(e.programId, u),
                        {
                            publicKey: A
                        } = i5(e.programId, e.id, n, i),
                        b = function(e, t, n, i, r, o, s, a, c, u, m, p, f, g, w, S, h, y, A, b, k, T, I, P, v, C) {
                            let L = e5([eF("tickLowerIndex"), eF("tickUpperIndex"), eF("tickArrayLowerStartIndex"), eF("tickArrayUpperStartIndex"), eJ("liquidity"), eZ("amountMaxA"), eZ("amountMaxB"), e4("withMetadata"), eQ("optionBaseFlag"), e4("baseFlag")]),
                                D = [...C ? [{
                                    pubkey: C,
                                    isSigner: !1,
                                    isWritable: !0
                                }] : []],
                                R = [{
                                    pubkey: t,
                                    isSigner: !0,
                                    isWritable: !0
                                }, {
                                    pubkey: i,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: r,
                                    isSigner: !0,
                                    isWritable: !0
                                }, {
                                    pubkey: o,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: s,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: n,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: a,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: c,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: u,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: m,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: p,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: f,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: g,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: w,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: _,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: V,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: l.H_,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: l._u,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: x,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: l.nA,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: S,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: h,
                                    isSigner: !1,
                                    isWritable: !1
                                }, ...D],
                                E = iq.alloc(L.span);
                            L.encode({
                                tickLowerIndex: y,
                                tickUpperIndex: A,
                                tickArrayLowerStartIndex: b,
                                tickArrayUpperStartIndex: k,
                                liquidity: ei,
                                amountMaxA: "MintA" === I ? P : v,
                                amountMaxB: "MintA" === I ? v : P,
                                withMetadata: "create" === T,
                                baseFlag: "MintA" === I,
                                optionBaseFlag: 1
                            }, E);
                            let O = iq.from([...iV.openPosition, ...E]);
                            return new d.TransactionInstruction({
                                keys: R,
                                programId: e,
                                data: O
                            })
                        }(e.programId, t.feePayer, e.id, t.wallet, u, S, h, A, g, w, y, t.tokenAccountA, t.tokenAccountB, e.mintA.vault, e.mintB.vault, e.mintA.mint, e.mintB.mint, n, i, p, f, a, r, o, s, rg.isOverflowDefaultTickarrayBitmap(e.tickSpacing, [p, f]) ? i9(e.programId, e.id).publicKey : void 0);
                    return {
                        address: {
                            nftMint: u,
                            tickArrayLower: g,
                            tickArrayUpper: w,
                            positionNftAccount: S,
                            metadataAccount: h,
                            personalPosition: y,
                            protocolPosition: A
                        },
                        innerTransaction: {
                            instructions: [b],
                            signers: m,
                            instructionTypes: [nc.clmmOpenPosition],
                            lookupTableAddress: [e.lookupTableAccount].filter(e => e && !e.equals(d.PublicKey.default))
                        }
                    }
                }
                static makeIncreasePositionFromLiquidityInstructions({
                    poolInfo: e,
                    ownerPosition: t,
                    ownerInfo: n,
                    liquidity: i,
                    amountMaxA: r,
                    amountMaxB: o
                }) {
                    let s = rn.getTickArrayStartIndexByTick(t.tickLower, e.ammConfig.tickSpacing),
                        a = rn.getTickArrayStartIndexByTick(t.tickUpper, e.ammConfig.tickSpacing),
                        {
                            publicKey: c
                        } = i3(e.programId, e.id, s),
                        {
                            publicKey: u
                        } = i3(e.programId, e.id, a),
                        {
                            publicKey: m
                        } = td(n.wallet, t.nftMint, l.H_),
                        {
                            publicKey: p
                        } = i8(e.programId, t.nftMint),
                        {
                            publicKey: f
                        } = i5(e.programId, e.id, t.tickLower, t.tickUpper);
                    return {
                        address: {
                            tickArrayLower: c,
                            tickArrayUpper: u,
                            positionNftAccount: m,
                            personalPosition: p,
                            protocolPosition: f
                        },
                        innerTransaction: {
                            instructions: [function(e, t, n, i, r, o, s, a, c, u, m, p, f, g, w, S, h, y) {
                                let A = e5([eJ("liquidity"), eZ("amountMaxA"), eZ("amountMaxB"), eQ("optionBaseFlag"), e4("baseFlag")]),
                                    b = [...y ? [{
                                        pubkey: y,
                                        isSigner: !1,
                                        isWritable: !0
                                    }] : []],
                                    k = [{
                                        pubkey: t,
                                        isSigner: !0,
                                        isWritable: !1
                                    }, {
                                        pubkey: n,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, {
                                        pubkey: r,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: o,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: i,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: s,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: a,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: c,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: u,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: m,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: p,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: l.H_,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, {
                                        pubkey: l.nA,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, {
                                        pubkey: f,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, {
                                        pubkey: g,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, ...b],
                                    T = iq.alloc(A.span);
                                A.encode({
                                    liquidity: w,
                                    amountMaxA: S,
                                    amountMaxB: h,
                                    optionBaseFlag: 0,
                                    baseFlag: !1
                                }, T);
                                let I = iq.from([...iV.increaseLiquidity, ...T]);
                                return new d.TransactionInstruction({
                                    keys: k,
                                    programId: e,
                                    data: I
                                })
                            }(e.programId, n.wallet, m, p, e.id, f, c, u, n.tokenAccountA, n.tokenAccountB, e.mintA.vault, e.mintB.vault, e.mintA.mint, e.mintB.mint, i, r, o, rg.isOverflowDefaultTickarrayBitmap(e.tickSpacing, [s, a]) ? i9(e.programId, e.id).publicKey : void 0)],
                            signers: [],
                            instructionTypes: [nc.clmmIncreasePosition],
                            lookupTableAddress: [e.lookupTableAccount].filter(e => e && !e.equals(d.PublicKey.default))
                        }
                    }
                }
                static makeIncreasePositionFromBaseInstructions({
                    poolInfo: e,
                    ownerPosition: t,
                    ownerInfo: n,
                    base: i,
                    baseAmount: r,
                    otherAmountMax: o
                }) {
                    let s = rn.getTickArrayStartIndexByTick(t.tickLower, e.ammConfig.tickSpacing),
                        a = rn.getTickArrayStartIndexByTick(t.tickUpper, e.ammConfig.tickSpacing),
                        {
                            publicKey: c
                        } = i3(e.programId, e.id, s),
                        {
                            publicKey: u
                        } = i3(e.programId, e.id, a),
                        {
                            publicKey: m
                        } = td(n.wallet, t.nftMint, l.H_),
                        {
                            publicKey: p
                        } = i8(e.programId, t.nftMint),
                        {
                            publicKey: f
                        } = i5(e.programId, e.id, t.tickLower, t.tickUpper);
                    return {
                        address: {
                            tickArrayLower: c,
                            tickArrayUpper: u,
                            positionNftAccount: m,
                            personalPosition: p,
                            protocolPosition: f
                        },
                        innerTransaction: {
                            instructions: [function(e, t, n, i, r, o, s, a, c, u, m, p, f, g, w, S, h, y) {
                                let A = e5([eJ("liquidity"), eZ("amountMaxA"), eZ("amountMaxB"), eQ("optionBaseFlag"), e4("baseFlag")]),
                                    b = [...y ? [{
                                        pubkey: y,
                                        isSigner: !1,
                                        isWritable: !0
                                    }] : []],
                                    k = [{
                                        pubkey: t,
                                        isSigner: !0,
                                        isWritable: !1
                                    }, {
                                        pubkey: n,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, {
                                        pubkey: r,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: o,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: i,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: s,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: a,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: c,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: u,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: m,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: p,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: l.H_,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, {
                                        pubkey: l.nA,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, {
                                        pubkey: f,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, {
                                        pubkey: g,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, ...b],
                                    T = iq.alloc(A.span);
                                A.encode({
                                    liquidity: ei,
                                    amountMaxA: "MintA" === w ? S : h,
                                    amountMaxB: "MintA" === w ? h : S,
                                    baseFlag: "MintA" === w,
                                    optionBaseFlag: 1
                                }, T);
                                let I = iq.from([...iV.increaseLiquidity, ...T]);
                                return new d.TransactionInstruction({
                                    keys: k,
                                    programId: e,
                                    data: I
                                })
                            }(e.programId, n.wallet, m, p, e.id, f, c, u, n.tokenAccountA, n.tokenAccountB, e.mintA.vault, e.mintB.vault, e.mintA.mint, e.mintB.mint, i, r, o, rg.isOverflowDefaultTickarrayBitmap(e.tickSpacing, [s, a]) ? i9(e.programId, e.id).publicKey : void 0)],
                            signers: [],
                            instructionTypes: [nc.clmmIncreasePosition],
                            lookupTableAddress: [e.lookupTableAccount].filter(e => e && !e.equals(d.PublicKey.default))
                        }
                    }
                }
                static makeDecreaseLiquidityInstructions({
                    poolInfo: e,
                    ownerPosition: t,
                    ownerInfo: n,
                    liquidity: i,
                    amountMinA: r,
                    amountMinB: o
                }) {
                    let s = rn.getTickArrayStartIndexByTick(t.tickLower, e.ammConfig.tickSpacing),
                        a = rn.getTickArrayStartIndexByTick(t.tickUpper, e.ammConfig.tickSpacing),
                        {
                            publicKey: c
                        } = i3(e.programId, e.id, s),
                        {
                            publicKey: u
                        } = i3(e.programId, e.id, a),
                        {
                            publicKey: m
                        } = td(n.wallet, t.nftMint, l.H_),
                        {
                            publicKey: p
                        } = i8(e.programId, t.nftMint),
                        {
                            publicKey: f
                        } = i5(e.programId, e.id, t.tickLower, t.tickUpper),
                        g = [];
                    for (let t = 0; t < e.rewardInfos.length; t++) g.push({
                        poolRewardVault: e.rewardInfos[t].tokenVault,
                        ownerRewardVault: n.rewardAccounts[t],
                        rewardMint: e.rewardInfos[t].tokenMint
                    });
                    return {
                        address: {
                            tickArrayLower: c,
                            tickArrayUpper: u,
                            positionNftAccount: m,
                            personalPosition: p,
                            protocolPosition: f
                        },
                        innerTransaction: {
                            instructions: [function(e, t, n, i, r, o, s, a, c, u, m, p, f, g, w, S, h, y, A) {
                                let b = e5([eJ("liquidity"), eZ("amountMinA"), eZ("amountMinB")]),
                                    k = [...A ? [{
                                        pubkey: A,
                                        isSigner: !1,
                                        isWritable: !0
                                    }] : [], ...w.map(e => [{
                                        pubkey: e.poolRewardVault,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: e.ownerRewardVault,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: e.rewardMint,
                                        isSigner: !1,
                                        isWritable: !1
                                    }]).flat()],
                                    T = [{
                                        pubkey: t,
                                        isSigner: !0,
                                        isWritable: !1
                                    }, {
                                        pubkey: n,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, {
                                        pubkey: i,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: r,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: o,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: m,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: p,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: s,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: a,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: c,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: u,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: l.H_,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, {
                                        pubkey: l.nA,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, {
                                        pubkey: B,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, {
                                        pubkey: f,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, {
                                        pubkey: g,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, ...k],
                                    I = iq.alloc(b.span);
                                b.encode({
                                    liquidity: S,
                                    amountMinA: h,
                                    amountMinB: y
                                }, I);
                                let P = iq.from([...iV.decreaseLiquidity, ...I]);
                                return new d.TransactionInstruction({
                                    keys: T,
                                    programId: e,
                                    data: P
                                })
                            }(e.programId, n.wallet, m, p, e.id, f, c, u, n.tokenAccountA, n.tokenAccountB, e.mintA.vault, e.mintB.vault, e.mintA.mint, e.mintB.mint, g, i, r, o, rg.isOverflowDefaultTickarrayBitmap(e.tickSpacing, [s, a]) ? i9(e.programId, e.id).publicKey : void 0)],
                            signers: [],
                            instructionTypes: [nc.clmmDecreasePosition],
                            lookupTableAddress: [e.lookupTableAccount].filter(e => e && !e.equals(d.PublicKey.default))
                        }
                    }
                }
                static makeClosePositionInstructions({
                    poolInfo: e,
                    ownerInfo: t,
                    ownerPosition: n
                }) {
                    let {
                        publicKey: i
                    } = td(t.wallet, n.nftMint, l.H_), {
                        publicKey: r
                    } = i8(e.programId, n.nftMint);
                    return {
                        address: {
                            positionNftAccount: i,
                            personalPosition: r
                        },
                        innerTransaction: {
                            instructions: [function(e, t, n, i, r) {
                                let o = e5([]),
                                    s = [{
                                        pubkey: t,
                                        isSigner: !0,
                                        isWritable: !0
                                    }, {
                                        pubkey: n,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: i,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: r,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: V,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, {
                                        pubkey: l.H_,
                                        isSigner: !1,
                                        isWritable: !1
                                    }],
                                    a = iq.alloc(o.span);
                                o.encode({}, a);
                                let c = iq.from([...iV.closePosition, ...a]);
                                return new d.TransactionInstruction({
                                    keys: s,
                                    programId: e,
                                    data: c
                                })
                            }(e.programId, t.wallet, n.nftMint, i, r)],
                            signers: [],
                            instructionTypes: [nc.clmmClosePosition],
                            lookupTableAddress: [e.lookupTableAccount].filter(e => e && !e.equals(d.PublicKey.default))
                        }
                    }
                }
                static makeSwapBaseInInstructions({
                    poolInfo: e,
                    ownerInfo: t,
                    inputMint: n,
                    amountIn: i,
                    amountOutMin: r,
                    sqrtPriceLimitX64: o,
                    remainingAccounts: s
                }) {
                    let a = e.mintA.mint.equals(n);
                    return {
                        address: {},
                        innerTransaction: {
                            instructions: [iB(e.programId, t.wallet, e.id, e.ammConfig.id, a ? t.tokenAccountA : t.tokenAccountB, a ? t.tokenAccountB : t.tokenAccountA, a ? e.mintA.vault : e.mintB.vault, a ? e.mintB.vault : e.mintA.vault, a ? e.mintA.mint : e.mintB.mint, a ? e.mintB.mint : e.mintA.mint, s, e.observationId, i, r, o, !0, i9(e.programId, e.id).publicKey)],
                            signers: [],
                            lookupTableAddress: [e.lookupTableAccount].filter(e => e && !e.equals(d.PublicKey.default)),
                            instructionTypes: [nc.clmmSwapBaseIn]
                        }
                    }
                }
                static makeSwapBaseOutInstructions({
                    poolInfo: e,
                    ownerInfo: t,
                    outputMint: n,
                    amountOut: i,
                    amountInMax: r,
                    sqrtPriceLimitX64: o,
                    remainingAccounts: s
                }) {
                    let a = e.mintA.mint.equals(n);
                    return {
                        address: {},
                        innerTransaction: {
                            instructions: [iB(e.programId, t.wallet, e.id, e.ammConfig.id, a ? t.tokenAccountB : t.tokenAccountA, a ? t.tokenAccountA : t.tokenAccountB, a ? e.mintB.vault : e.mintA.vault, a ? e.mintA.vault : e.mintB.vault, a ? e.mintB.mint : e.mintA.mint, a ? e.mintA.mint : e.mintB.mint, s, e.observationId, i, r, o, !1, i9(e.programId, e.id).publicKey)],
                            signers: [],
                            lookupTableAddress: [e.lookupTableAccount].filter(e => e && !e.equals(d.PublicKey.default)),
                            instructionTypes: [nc.clmmSwapBaseOut]
                        }
                    }
                }
                static makeInitRewardInstructions({
                    poolInfo: e,
                    ownerInfo: t,
                    rewardInfo: n
                }) {
                    var i, r, o;
                    let s = (i = e.programId, r = e.id, o = n.mint, W([i$, r.toBuffer(), o.toBuffer()], i)).publicKey,
                        a = W([i4], e.programId).publicKey;
                    return {
                        address: {
                            poolRewardVault: s,
                            operationId: a
                        },
                        innerTransaction: {
                            instructions: [function(e, t, n, i, r, o, s, a, c, u, l, m) {
                                let p = e5([eZ("openTime"), eZ("endTime"), eJ("emissionsPerSecondX64")]),
                                    f = [{
                                        pubkey: t,
                                        isSigner: !0,
                                        isWritable: !0
                                    }, {
                                        pubkey: o,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: r,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, {
                                        pubkey: n,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: i,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: a,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, {
                                        pubkey: c,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: s,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, {
                                        pubkey: V,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, {
                                        pubkey: _,
                                        isSigner: !1,
                                        isWritable: !1
                                    }],
                                    g = iq.alloc(p.span);
                                p.encode({
                                    openTime: ec(u),
                                    endTime: ec(l),
                                    emissionsPerSecondX64: m
                                }, g);
                                let w = iq.from([...iV.initReward, ...g]);
                                return new d.TransactionInstruction({
                                    keys: f,
                                    programId: e,
                                    data: w
                                })
                            }(e.programId, t.wallet, e.id, a, e.ammConfig.id, t.tokenAccount, n.programId, n.mint, s, n.openTime, n.endTime, n.emissionsPerSecondX64)],
                            signers: [],
                            instructionTypes: [nc.clmmInitReward],
                            lookupTableAddress: [e.lookupTableAccount].filter(e => e && !e.equals(d.PublicKey.default))
                        }
                    }
                }
                static makeSetRewardInstructions({
                    poolInfo: e,
                    ownerInfo: t,
                    rewardInfo: n
                }) {
                    let i, r, o;
                    for (let t = 0; t < e.rewardInfos.length; t++) e.rewardInfos[t].tokenMint.equals(n.mint) && (i = t, r = e.rewardInfos[t].tokenVault, o = e.rewardInfos[t].tokenMint);
                    if (void 0 === i || void 0 === r || void 0 === o) throw Error("reward mint check error");
                    let s = W([i4], e.programId).publicKey;
                    return {
                        address: {
                            rewardVault: r,
                            operationId: s
                        },
                        innerTransaction: {
                            instructions: [function(e, t, n, i, r, o, s, a, c, u, m, p) {
                                let f = e5([eQ("rewardIndex"), eJ("emissionsPerSecondX64"), eZ("openTime"), eZ("endTime")]),
                                    g = [{
                                        pubkey: t,
                                        isSigner: !0,
                                        isWritable: !0
                                    }, {
                                        pubkey: r,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, {
                                        pubkey: n,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: i,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: l.H_,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, {
                                        pubkey: l.nA,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, {
                                        pubkey: s,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: o,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: a,
                                        isSigner: !1,
                                        isWritable: !0
                                    }],
                                    w = iq.alloc(f.span);
                                f.encode({
                                    rewardIndex: c,
                                    emissionsPerSecondX64: p,
                                    openTime: ec(u),
                                    endTime: ec(m)
                                }, w);
                                let S = iq.from([...iV.setRewardEmissions, ...w]);
                                return new d.TransactionInstruction({
                                    keys: g,
                                    programId: e,
                                    data: S
                                })
                            }(e.programId, t.wallet, e.id, s, e.ammConfig.id, t.tokenAccount, r, o, i, n.openTime, n.endTime, n.emissionsPerSecondX64)],
                            signers: [],
                            instructionTypes: [nc.clmmInitReward],
                            lookupTableAddress: [e.lookupTableAccount].filter(e => e && !e.equals(d.PublicKey.default))
                        }
                    }
                }
                static makeCollectRewardInstructions({
                    poolInfo: e,
                    ownerInfo: t,
                    rewardMint: n
                }) {
                    let i, r;
                    for (let t = 0; t < e.rewardInfos.length; t++) e.rewardInfos[t].tokenMint.equals(n) && (i = t, r = e.rewardInfos[t].tokenVault);
                    if (void 0 === i || void 0 === r) throw Error("reward mint check error");
                    return {
                        address: {
                            rewardVault: r
                        },
                        innerTransaction: {
                            instructions: [function(e, t, n, i, r, o, s) {
                                let a = e5([eQ("rewardIndex")]),
                                    c = [{
                                        pubkey: t,
                                        isSigner: !0,
                                        isWritable: !0
                                    }, {
                                        pubkey: i,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: n,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: r,
                                        isSigner: !1,
                                        isWritable: !0
                                    }, {
                                        pubkey: o,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, {
                                        pubkey: l.H_,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, {
                                        pubkey: l.nA,
                                        isSigner: !1,
                                        isWritable: !1
                                    }, {
                                        pubkey: B,
                                        isSigner: !1,
                                        isWritable: !1
                                    }],
                                    u = iq.alloc(a.span);
                                a.encode({
                                    rewardIndex: s
                                }, u);
                                let m = iq.from([...iV.collectReward, ...u]);
                                return new d.TransactionInstruction({
                                    keys: c,
                                    programId: e,
                                    data: m
                                })
                            }(e.programId, t.wallet, e.id, t.tokenAccount, r, n, i)],
                            signers: [],
                            instructionTypes: [nc.clmmInitReward],
                            lookupTableAddress: [e.lookupTableAccount].filter(e => e && !e.equals(d.PublicKey.default))
                        }
                    }
                }
                static getLiquidityAmountOutFromAmountIn({
                    poolInfo: e,
                    inputA: t,
                    tickLower: n,
                    tickUpper: i,
                    amount: r,
                    slippage: o,
                    add: s,
                    token2022Infos: a,
                    epochInfo: c,
                    amountHasFee: u
                }) {
                    let l;
                    let m = e.sqrtPriceX64,
                        d = ry.getSqrtPriceX64FromTick(n),
                        p = ry.getSqrtPriceX64FromTick(i),
                        f = tk(r, a[t ? e.mintA.mint.toString() : e.mintB.mint.toString()] ? .feeConfig, c, !u),
                        g = new(P())(new iU(f.amount.sub(f.fee ? ? ei).toString()).mul(s ? 1 - o : 1 + o).toFixed(0));
                    if (m.lte(d)) l = t ? rb.getLiquidityFromTokenAmountA(d, p, g, !s) : new(P())(0);
                    else if (m.lte(p)) {
                        let e = rb.getLiquidityFromTokenAmountA(m, p, g, !s),
                            n = rb.getLiquidityFromTokenAmountB(d, m, g);
                        l = t ? e : n
                    } else l = t ? new(P())(0) : rb.getLiquidityFromTokenAmountB(d, p, g);
                    return this.getAmountsFromLiquidity({
                        poolInfo: e,
                        tickLower: n,
                        tickUpper: i,
                        liquidity: l,
                        slippage: o,
                        add: s,
                        token2022Infos: a,
                        epochInfo: c,
                        amountAddFee: u
                    })
                }
                static getLiquidityFromAmounts({
                    poolInfo: e,
                    tickLower: t,
                    tickUpper: n,
                    amountA: i,
                    amountB: r,
                    slippage: o,
                    add: s,
                    token2022Infos: a,
                    epochInfo: c,
                    amountHasFee: u
                }) {
                    let [l, m, d, p] = t < n ? [t, n, i, r] : [n, t, r, i], f = e.sqrtPriceX64, g = ry.getSqrtPriceX64FromTick(l), w = ry.getSqrtPriceX64FromTick(m), [S, h] = [tk(d, a[e.mintA.mint.toString()] ? .feeConfig, c, !u), tk(p, a[e.mintB.mint.toString()] ? .feeConfig, c, !u)], y = rb.getLiquidityFromTokenAmounts(f, g, w, S.amount.sub(S.fee ? ? ei), h.amount.sub(h.fee ? ? ei));
                    return this.getAmountsFromLiquidity({
                        poolInfo: e,
                        tickLower: t,
                        tickUpper: n,
                        liquidity: y,
                        slippage: o,
                        add: s,
                        token2022Infos: a,
                        epochInfo: c,
                        amountAddFee: !u
                    })
                }
                static getAmountsFromLiquidity({
                    poolInfo: e,
                    tickLower: t,
                    tickUpper: n,
                    liquidity: i,
                    slippage: r,
                    add: o,
                    token2022Infos: s,
                    epochInfo: a,
                    amountAddFee: c
                }) {
                    let u = ry.getSqrtPriceX64FromTick(t),
                        l = ry.getSqrtPriceX64FromTick(n),
                        m = o ? 1 + r : 1 - r,
                        d = rb.getAmountsFromLiquidity(e.sqrtPriceX64, u, l, i, o),
                        [p, f] = [tk(d.amountA, s[e.mintA.mint.toString()] ? .feeConfig, a, c), tk(d.amountB, s[e.mintB.mint.toString()] ? .feeConfig, a, c)],
                        [g, w] = [tk(new(P())(new iU(d.amountA.toString()).mul(m).toFixed(0)), s[e.mintA.mint.toString()] ? .feeConfig, a, c), tk(new(P())(new iU(d.amountB.toString()).mul(m).toFixed(0)), s[e.mintB.mint.toString()] ? .feeConfig, a, c)];
                    return {
                        liquidity: i,
                        amountA: p,
                        amountB: f,
                        amountSlippageA: g,
                        amountSlippageB: w,
                        expirationTime: tT(p.expirationTime, f.expirationTime)
                    }
                }
                static getPriceAndTick({
                    poolInfo: e,
                    price: t,
                    baseIn: n
                }) {
                    let i = n ? t : new iU(1).div(t),
                        r = rA.getTickWithPriceAndTickspacing(i, e.ammConfig.tickSpacing, e.mintA.decimals, e.mintB.decimals),
                        o = ry.getSqrtPriceX64FromTick(r),
                        s = ry.sqrtPriceX64ToPrice(o, e.mintA.decimals, e.mintB.decimals);
                    return n ? {
                        tick: r,
                        price: s
                    } : {
                        tick: r,
                        price: new iU(1).div(s)
                    }
                }
                static getTickPrice({
                    poolInfo: e,
                    tick: t,
                    baseIn: n
                }) {
                    let i = ry.getSqrtPriceX64FromTick(t),
                        r = ry.sqrtPriceX64ToPrice(i, e.mintA.decimals, e.mintB.decimals);
                    return n ? {
                        tick: t,
                        price: r,
                        tickSqrtPriceX64: i
                    } : {
                        tick: t,
                        price: new iU(1).div(r),
                        tickSqrtPriceX64: i
                    }
                }
                static computeAmountOutFormat({
                    poolInfo: e,
                    tickArrayCache: t,
                    token2022Infos: n,
                    epochInfo: i,
                    amountIn: r,
                    currencyOut: o,
                    slippage: s,
                    catchLiquidityInsufficient: a = !1
                }) {
                    let c = r instanceof eR,
                        u = (c ? r.token : eg.WSOL).mint,
                        l = r.raw,
                        m = s.numerator.toNumber() / s.denominator.toNumber(),
                        {
                            allTrade: d,
                            realAmountIn: p,
                            amountOut: f,
                            minAmountOut: g,
                            expirationTime: w,
                            currentPrice: S,
                            executionPrice: h,
                            priceImpact: y,
                            fee: A,
                            remainingAccounts: b,
                            executionPriceX64: k
                        } = this.computeAmountOut({
                            poolInfo: e,
                            tickArrayCache: t,
                            baseMint: u,
                            amountIn: l,
                            slippage: m,
                            token2022Infos: n,
                            epochInfo: i,
                            catchLiquidityInsufficient: a
                        }),
                        T = { ...p,
                            amount: c ? new eR(r.token, p.amount) : new eD(ef.SOL, p.amount),
                            fee: void 0 === p.fee ? void 0 : c ? new eR(r.token, p.fee) : new eD(ef.SOL, p.fee)
                        },
                        I = { ...f,
                            amount: o instanceof eg ? new eR(o, f.amount) : new eD(o, f.amount),
                            fee: void 0 === f.fee ? void 0 : o instanceof eg ? new eR(o, f.fee) : new eD(o, f.fee)
                        },
                        v = { ...g,
                            amount: o instanceof eg ? new eR(o, g.amount) : new eD(o, g.amount),
                            fee: void 0 === g.fee ? void 0 : o instanceof eg ? new eR(o, g.fee) : new eD(o, g.fee)
                        };
                    return {
                        allTrade: d,
                        realAmountIn: T,
                        amountOut: I,
                        minAmountOut: v,
                        expirationTime: w,
                        currentPrice: new eq(c ? r.token : r.currency, new(P())(10).pow(new(P())(20 + (c ? r.token : r.currency).decimals)), o instanceof eg ? o : eg.WSOL, S.mul(new iU(10 ** (20 + (o instanceof eg ? o : eg.WSOL).decimals))).toFixed(0)),
                        executionPrice: new eq(c ? r.token : r.currency, new(P())(10).pow(new(P())(20 + (c ? r.token : r.currency).decimals)), o instanceof eg ? o : eg.WSOL, h.mul(new iU(10 ** (20 + (o instanceof eg ? o : eg.WSOL).decimals))).toFixed(0)),
                        priceImpact: y,
                        fee: c ? new eR(r.token, A) : new eD(r.currency, A),
                        remainingAccounts: b,
                        executionPriceX64: k
                    }
                }
                static async computeAmountOutAndCheckToken({
                    connection: e,
                    poolInfo: t,
                    tickArrayCache: n,
                    baseMint: i,
                    amountIn: r,
                    slippage: o,
                    priceLimit: s = new iU(0),
                    catchLiquidityInsufficient: a = !1
                }) {
                    let c = await e.getEpochInfo(),
                        u = await tI({
                            connection: e,
                            mints: [t.mintA, t.mintB].filter(e => e.programId.equals(l.nA)).map(e => e.mint)
                        });
                    return this.computeAmountOut({
                        poolInfo: t,
                        tickArrayCache: n,
                        baseMint: i,
                        amountIn: r,
                        slippage: o,
                        priceLimit: s,
                        token2022Infos: u,
                        epochInfo: c,
                        catchLiquidityInsufficient: a
                    })
                }
                static computeAmountOut({
                    poolInfo: e,
                    tickArrayCache: t,
                    baseMint: n,
                    token2022Infos: i,
                    epochInfo: r,
                    amountIn: o,
                    slippage: s,
                    priceLimit: a = new iU(0),
                    catchLiquidityInsufficient: c = !1
                }) {
                    let u;
                    u = a.equals(new iU(0)) ? n.equals(e.mintA.mint) ? iF.add(er) : iK.sub(er) : ry.priceToSqrtPriceX64(a, e.mintA.decimals, e.mintB.decimals);
                    let l = tk(o, i[n.toString()] ? .feeConfig, r, !1),
                        {
                            allTrade: m,
                            realTradeAmountIn: d,
                            expectedAmountOut: p,
                            remainingAccounts: f,
                            executionPrice: g,
                            feeAmount: w
                        } = rg.getOutputAmountAndRemainAccounts(e, t, n, l.amount.sub(l.fee ? ? ei), u, c),
                        S = tk(d, i[n.toString()] ? .feeConfig, r, !0),
                        h = e.mintA.mint.equals(n) ? e.mintB.mint : e.mintA.mint,
                        y = tk(p, i[h.toString()] ? .feeConfig, r, !1),
                        A = ry.sqrtPriceX64ToPrice(g, e.mintA.decimals, e.mintB.decimals),
                        b = n.equals(e.mintA.mint) ? A : new iU(1).div(A),
                        k = tk(p.mul(new(P())(Math.floor((1 - s) * 1e10))).div(new(P())(1e10)), i[h.toString()] ? .feeConfig, r, !1),
                        T = e.mintA.mint.equals(n) ? e.currentPrice : new iU(1).div(e.currentPrice),
                        I = new iU(b).sub(T).abs(),
                        v = new eO(new iU(I).mul(1e15).toFixed(0), new iU(T).mul(1e15).toFixed(0));
                    return {
                        allTrade: m,
                        realAmountIn: S,
                        amountOut: y,
                        minAmountOut: k,
                        expirationTime: tT(S.expirationTime, y.expirationTime),
                        currentPrice: e.currentPrice,
                        executionPrice: b,
                        priceImpact: v,
                        fee: w,
                        remainingAccounts: f,
                        executionPriceX64: g
                    }
                }
                static async computeAmountInAndCheckToken({
                    connection: e,
                    poolInfo: t,
                    tickArrayCache: n,
                    baseMint: i,
                    amountOut: r,
                    slippage: o,
                    priceLimit: s = new iU(0)
                }) {
                    let a = await e.getEpochInfo(),
                        c = await tI({
                            connection: e,
                            mints: [t.mintA, t.mintB].filter(e => e.programId.equals(l.nA)).map(e => e.mint)
                        });
                    return this.computeAmountIn({
                        poolInfo: t,
                        tickArrayCache: n,
                        baseMint: i,
                        amountOut: r,
                        slippage: o,
                        priceLimit: s,
                        token2022Infos: c,
                        epochInfo: a
                    })
                }
                static computeAmountIn({
                    poolInfo: e,
                    tickArrayCache: t,
                    baseMint: n,
                    token2022Infos: i,
                    epochInfo: r,
                    amountOut: o,
                    slippage: s,
                    priceLimit: a = new iU(0)
                }) {
                    let c;
                    c = a.equals(new iU(0)) ? n.equals(e.mintB.mint) ? iF.add(er) : iK.sub(er) : ry.priceToSqrtPriceX64(a, e.mintA.decimals, e.mintB.decimals);
                    let u = tk(o, i[n.toString()] ? .feeConfig, r, !0),
                        {
                            expectedAmountIn: l,
                            remainingAccounts: m,
                            executionPrice: d,
                            feeAmount: p
                        } = rg.getInputAmountAndRemainAccounts(e, t, n, u.amount.sub(u.fee ? ? ei), c),
                        f = e.mintA.mint.equals(n) ? e.mintB.mint : e.mintA.mint,
                        g = tk(l, i[f.toString()] ? .feeConfig, r, !0),
                        w = ry.sqrtPriceX64ToPrice(d, e.mintA.decimals, e.mintB.decimals),
                        S = n.equals(e.mintA.mint) ? w : new iU(1).div(w),
                        h = tk(l.mul(new(P())(Math.floor((1 + s) * 1e10))).div(new(P())(1e10)), i[f.toString()] ? .feeConfig, r, !0),
                        y = e.mintA.mint.equals(n) ? e.currentPrice : new iU(1).div(e.currentPrice),
                        A = new iU(S).sub(y).abs(),
                        b = new eO(new iU(A).mul(1e15).toFixed(0), new iU(y).mul(1e15).toFixed(0));
                    return {
                        amountIn: g,
                        maxAmountIn: h,
                        realAmountOut: u,
                        expirationTime: tT(g.expirationTime, u.expirationTime),
                        currentPrice: e.currentPrice,
                        executionPrice: S,
                        priceImpact: b,
                        fee: p,
                        remainingAccounts: m
                    }
                }
                static estimateAprsForPriceRangeMultiplier({
                    poolInfo: e,
                    aprType: t,
                    positionTickLowerIndex: n,
                    positionTickUpperIndex: i
                }) {
                    let r;
                    let o = e[t],
                        s = this.getTickPrice({
                            poolInfo: e,
                            tick: n,
                            baseIn: !0
                        }).price.toNumber(),
                        a = this.getTickPrice({
                            poolInfo: e,
                            tick: i,
                            baseIn: !0
                        }).price.toNumber(),
                        c = Math.max(s, o.priceMin),
                        u = Math.min(a, o.priceMax) - c,
                        l = a - s,
                        m = o.priceMax - o.priceMin;
                    return r = u <= 0 ? 0 : l === u ? m / u : m === u ? u / l : u / m * (u / l), {
                        feeApr: o.feeApr * r,
                        rewardsApr: [o.rewardApr.A * r, o.rewardApr.B * r, o.rewardApr.C * r],
                        apr: o.apr * r
                    }
                }
                static estimateAprsForPriceRangeDelta({
                    poolInfo: e,
                    aprType: t,
                    mintPrice: n,
                    rewardMintDecimals: i,
                    liquidity: r,
                    positionTickLowerIndex: o,
                    positionTickUpperIndex: s,
                    chainTime: a
                }) {
                    let c = e[t],
                        u = n[e.mintA.mint.toString()],
                        l = n[e.mintB.mint.toString()],
                        m = e.mintA.decimals,
                        d = e.mintB.decimals;
                    if (!c || !u || !l) return {
                        feeApr: 0,
                        rewardsApr: [0, 0, 0],
                        apr: 0
                    };
                    let p = ry.getSqrtPriceX64FromTick(o),
                        f = ry.getSqrtPriceX64FromTick(s),
                        {
                            amountSlippageA: g,
                            amountSlippageB: w
                        } = rb.getAmountsFromLiquidityWithSlippage(e.sqrtPriceX64, p, f, e.liquidity, !1, !1, 0),
                        {
                            amountSlippageA: S,
                            amountSlippageB: h
                        } = rb.getAmountsFromLiquidityWithSlippage(e.sqrtPriceX64, p, f, r, !1, !1, 0),
                        y = new iU(g.toString()).div(new iU(10).pow(m)).mul(u.toFixed(m)).add(new iU(w.toString()).div(new iU(10).pow(d)).mul(l.toFixed(d))),
                        A = new iU(S.toString()).div(new iU(10).pow(m)).mul(u.toFixed(m)).add(new iU(h.toString()).div(new iU(10).pow(d)).mul(l.toFixed(d))),
                        b = A.div(y.add(A)).div(A),
                        k = new iU(c.volumeFee).mul(365).div("day" === t ? 1 : "week" === t ? 7 : "month" === t ? 30 : 0).mul(b).mul(100).toNumber(),
                        T = e.rewardInfos.map(e => {
                            let t = i[e.tokenMint.toString()],
                                r = n[e.tokenMint.toString()];
                            return a < e.openTime.toNumber() || a > e.endTime.toNumber() || e.perSecond.equals(0) || !r || void 0 === t ? 0 : new iU(r.toFixed(t)).mul(e.perSecond.mul(31536e3)).div(new iU(10).pow(t)).mul(b).mul(100).toNumber()
                        });
                    return {
                        feeApr: k,
                        rewardsApr: T,
                        apr: k + T.reduce((e, t) => e + t, 0)
                    }
                }
                static async fetchMultiplePoolInfos({
                    connection: e,
                    poolKeys: t,
                    ownerInfo: n,
                    chainTime: i,
                    batchRequest: r = !1,
                    updateOwnerRewardAndFee: o = !0
                }) {
                    let s = await G(e, t.map(e => new d.PublicKey(e.id)), {
                            batchRequest: r
                        }),
                        a = {};
                    for (let e = 0; e < t.length; e++) {
                        let n = t[e],
                            i = s[e];
                        null !== i && (a[n.id] = i9(i.owner, new d.PublicKey(n.id)).publicKey)
                    }
                    let c = await this.fetchExBitmaps({
                            connection: e,
                            exBitmapAddress: Object.values(a),
                            batchRequest: r
                        }),
                        u = [],
                        l = {},
                        m = [];
                    for (let r = 0; r < t.length; r++) {
                        let o = t[r],
                            p = s[r],
                            f = c[a[o.id].toString()];
                        if (null === p) continue;
                        let g = rc.decode(p.data);
                        l[o.id] = {
                            state: {
                                id: new d.PublicKey(o.id),
                                mintA: {
                                    programId: new d.PublicKey(o.mintProgramIdA),
                                    mint: g.mintA,
                                    vault: g.vaultA,
                                    decimals: g.mintDecimalsA
                                },
                                mintB: {
                                    programId: new d.PublicKey(o.mintProgramIdB),
                                    mint: g.mintB,
                                    vault: g.vaultB,
                                    decimals: g.mintDecimalsB
                                },
                                observationId: g.observationId,
                                ammConfig: { ...o.ammConfig,
                                    id: new d.PublicKey(o.ammConfig.id)
                                },
                                creator: g.creator,
                                programId: p.owner,
                                version: 6,
                                tickSpacing: g.tickSpacing,
                                liquidity: g.liquidity,
                                sqrtPriceX64: g.sqrtPriceX64,
                                currentPrice: ry.sqrtPriceX64ToPrice(g.sqrtPriceX64, g.mintDecimalsA, g.mintDecimalsB),
                                tickCurrent: g.tickCurrent,
                                observationIndex: g.observationIndex,
                                observationUpdateDuration: g.observationUpdateDuration,
                                feeGrowthGlobalX64A: g.feeGrowthGlobalX64A,
                                feeGrowthGlobalX64B: g.feeGrowthGlobalX64B,
                                protocolFeesTokenA: g.protocolFeesTokenA,
                                protocolFeesTokenB: g.protocolFeesTokenB,
                                swapInAmountTokenA: g.swapInAmountTokenA,
                                swapOutAmountTokenB: g.swapOutAmountTokenB,
                                swapInAmountTokenB: g.swapInAmountTokenB,
                                swapOutAmountTokenA: g.swapOutAmountTokenA,
                                tickArrayBitmap: g.tickArrayBitmap,
                                rewardInfos: await rg.updatePoolRewardInfos({
                                    connection: e,
                                    apiPoolInfo: o,
                                    chainTime: i,
                                    poolLiquidity: g.liquidity,
                                    rewardInfos: g.rewardInfos.filter(e => !e.tokenMint.equals(d.PublicKey.default))
                                }),
                                day: o.day,
                                week: o.week,
                                month: o.month,
                                tvl: o.tvl,
                                lookupTableAccount: o.lookupTableAccount ? new d.PublicKey(o.lookupTableAccount) : d.PublicKey.default,
                                startTime: g.startTime.toNumber(),
                                exBitmapInfo: f
                            }
                        }, n && m.push(...l[o.id].state.rewardInfos.filter(e => e.creator.equals(n.wallet))), u.find(e => e.equals(p.owner)) || u.push(p.owner)
                    }
                    if (n) {
                        let t = n.tokenAccounts.filter(e => e.accountInfo.amount.eq(new(P())(1))).map(e => e.accountInfo.mint),
                            i = [];
                        for (let e of t)
                            for (let t of u) i.push(i8(t, e).publicKey);
                        let s = await G(e, i, {
                                batchRequest: r
                            }),
                            a = {};
                        for (let e of s) {
                            if (null === e) continue;
                            let t = rl.decode(e.data),
                                n = t.poolId.toString(),
                                i = l[n];
                            if (void 0 === i) continue;
                            let r = i.state,
                                o = this.getTickPrice({
                                    poolInfo: r,
                                    tick: t.tickLower,
                                    baseIn: !0
                                }),
                                s = this.getTickPrice({
                                    poolInfo: r,
                                    tick: t.tickUpper,
                                    baseIn: !0
                                }),
                                {
                                    amountA: c,
                                    amountB: u
                                } = rb.getAmountsFromLiquidity(r.sqrtPriceX64, o.tickSqrtPriceX64, s.tickSqrtPriceX64, t.liquidity, !1),
                                m = 1 / (1 - Math.sqrt(Math.sqrt(o.price.div(s.price).toNumber())));
                            l[n].positionAccount = [...l[n].positionAccount ? ? [], {
                                poolId: t.poolId,
                                nftMint: t.nftMint,
                                priceLower: o.price,
                                priceUpper: s.price,
                                amountA: c,
                                amountB: u,
                                tickLower: t.tickLower,
                                tickUpper: t.tickUpper,
                                liquidity: t.liquidity,
                                feeGrowthInsideLastX64A: t.feeGrowthInsideLastX64A,
                                feeGrowthInsideLastX64B: t.feeGrowthInsideLastX64B,
                                tokenFeesOwedA: t.tokenFeesOwedA,
                                tokenFeesOwedB: t.tokenFeesOwedB,
                                rewardInfos: t.rewardInfos.map(e => ({ ...e,
                                    pendingReward: new(P())(0)
                                })),
                                leverage: m,
                                tokenFeeAmountA: new(P())(0),
                                tokenFeeAmountB: new(P())(0)
                            }];
                            let d = rn.getTickArrayAddressByTick(l[n].state.programId, t.poolId, t.tickLower, l[n].state.tickSpacing),
                                p = rn.getTickArrayAddressByTick(l[n].state.programId, t.poolId, t.tickUpper, l[n].state.tickSpacing);
                            a[`${l[n].state.programId.toString()}-${t.poolId.toString()}-${t.tickLower}`] = d, a[`${l[n].state.programId.toString()}-${t.poolId.toString()}-${t.tickUpper}`] = p
                        }
                        if (o) {
                            let t = Object.values(a),
                                n = await G(e, t, {
                                    batchRequest: r
                                }),
                                i = {};
                            for (let e = 0; e < t.length; e++) {
                                let r = n[e];
                                if (null === r) continue;
                                let o = t[e];
                                i[o.toString()] = {
                                    address: o,
                                    ...rd.decode(r.data)
                                }
                            }
                            for (let {
                                    state: e,
                                    positionAccount: t
                                } of Object.values(l))
                                if (t)
                                    for (let n of t) {
                                        let t = `${e.programId.toString()}-${e.id.toString()}-${n.tickLower}`,
                                            r = `${e.programId.toString()}-${e.id.toString()}-${n.tickUpper}`,
                                            o = i[a[t].toString()],
                                            s = i[a[r].toString()],
                                            c = o.ticks[rn.getTickOffsetInArray(n.tickLower, e.tickSpacing)],
                                            u = s.ticks[rn.getTickOffsetInArray(n.tickUpper, e.tickSpacing)],
                                            {
                                                tokenFeeAmountA: l,
                                                tokenFeeAmountB: m
                                            } = rT.GetPositionFees(e, n, c, u),
                                            d = rT.GetPositionRewards(e, n, c, u);
                                        n.tokenFeeAmountA = l.gte(ei) && l.lt(iH) ? l : ei, n.tokenFeeAmountB = m.gte(ei) && l.lt(iH) ? m : ei;
                                        for (let e = 0; e < d.length; e++) n.rewardInfos[e].pendingReward = d[e].gte(ei) && d[e].lt(iH) ? d[e] : ei
                                    }
                        }
                    }
                    if (m.length > 0) {
                        let t = m.map(e => e.tokenVault),
                            n = await G(e, t, {
                                batchRequest: r
                            }),
                            i = {};
                        for (let e = 0; e < t.length; e++) {
                            let r = t[e].toString(),
                                o = n[e];
                            if (null === o) continue;
                            let s = e7.decode(o.data);
                            i[r] = s.amount
                        }
                        for (let e of m) {
                            let t = i[e.tokenVault.toString()];
                            e.remainingRewards = void 0 !== t ? t.sub(e.rewardTotalEmissioned.sub(e.rewardClaimed)) : ei
                        }
                    }
                    return l
                }
                static async fetchMultiplePoolTickArrays({
                    connection: e,
                    poolKeys: t,
                    batchRequest: n
                }) {
                    let i = {},
                        r = [];
                    for (let e of t) {
                        let t = rn.getTickArrayStartIndexByTick(e.tickCurrent, e.tickSpacing);
                        for (let n of rn.getInitializedTickArrayInRange(e.tickArrayBitmap, e.exBitmapInfo, e.tickSpacing, t, 7)) {
                            let {
                                publicKey: t
                            } = i3(e.programId, e.id, n);
                            r.push({
                                pubkey: t
                            }), i[t.toString()] = e.id
                        }
                    }
                    let o = await z(e, r, {
                            batchRequest: n
                        }),
                        s = {};
                    for (let e of o) {
                        if (!e.accountInfo) continue;
                        let t = i[e.pubkey.toString()];
                        if (!t) continue;
                        void 0 === s[t.toString()] && (s[t.toString()] = {});
                        let n = rd.decode(e.accountInfo.data);
                        s[t.toString()][n.startTickIndex] = { ...n,
                            address: e.pubkey
                        }
                    }
                    return s
                }
                static async fetchExBitmaps({
                    connection: e,
                    exBitmapAddress: t,
                    batchRequest: n
                }) {
                    let i = await z(e, t.map(e => ({
                            pubkey: e
                        })), {
                            batchRequest: n
                        }),
                        r = {};
                    for (let e of i) null !== e.accountInfo && (r[e.pubkey.toString()] = rf.decode(e.accountInfo.data));
                    return r
                }
                static async getWhiteListMint({
                    connection: e,
                    programId: t
                }) {
                    let n = await e.getAccountInfo(W([i4], t).publicKey);
                    return n ? rp.decode(n.data).whitelistMints.filter(e => !e.equals(d.PublicKey.default)) : []
                }
            }
            let rv = "9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin",
                rC = new d.PublicKey(rv),
                rL = {
                    [rv]: 3
                },
                rD = {
                    3: rC
                },
                rR = e5([eY(5), eY(8), e0("ownAddress"), eZ("vaultSignerNonce"), e0("baseMint"), e0("quoteMint"), e0("baseVault"), eZ("baseDepositsTotal"), eZ("baseFeesAccrued"), e0("quoteVault"), eZ("quoteDepositsTotal"), eZ("quoteFeesAccrued"), eZ("quoteDustThreshold"), e0("requestQueue"), e0("eventQueue"), e0("bids"), e0("asks"), eZ("baseLotSize"), eZ("quoteLotSize"), eZ("feeRateBps"), eZ("referrerRebatesAccrued"), eY(7)]),
                rE = {
                    3: rR
                };
            var rO = n(67133).Buffer;
            let rU = U.from("Serum");
            class rq {
                static getProgramId(e) {
                    let t = rD[e];
                    return rU.assertArgument(!!t, "invalid version", "version", e), t
                }
                static getVersion(e) {
                    let t = e.toBase58(),
                        n = rL[t];
                    return rU.assertArgument(!!n, "invalid program id", "programId", t), n
                }
                static getStateLayout(e) {
                    let t = rE[e];
                    return rU.assertArgument(!!t, "invalid version", "version", e), t
                }
                static getLayouts(e) {
                    return {
                        state: this.getStateLayout(e)
                    }
                }
                static getAssociatedAuthority({
                    programId: e,
                    marketId: t
                }) {
                    let n;
                    let i = [t.toBuffer()],
                        r = 0;
                    for (; r < 100;) {
                        try {
                            let t = i.concat(rO.from([r]), rO.alloc(7));
                            n = d.PublicKey.createProgramAddressSync(t, e)
                        } catch (e) {
                            if (e instanceof TypeError) throw e;
                            r++;
                            continue
                        }
                        return {
                            publicKey: n,
                            nonce: r
                        }
                    }
                    return rU.throwArgumentError("unable to find a viable program address nonce", "params", {
                        programId: e,
                        marketId: t
                    })
                }
            }
            let rV = new d.PublicKey("CDSr3ssLcRB6XYPJwAfFt18MZvEZp4LjHcvzBVZ45duo"),
                rB = e5([eZ("x"), eZ("y"), eZ("price")]),
                r_ = e5([eZ("accountType"), eZ("status"), eZ("multiplier"), eZ("validDataCount"), e8(rB, 5e4, "DataElement")]);

            function rx(e, t, n) {
                let [i, r, o] = function(e, t, n) {
                    let [i, r] = [0, 49998], o = i, s = r, a = 0, c = t * e.multiplier / n;
                    for (; o <= s && 0 !== (a = Math.floor((s + o) / 2)) && !(a >= 49998);) {
                        let t = e.DataElement[a].x * e.multiplier / e.DataElement[a].y,
                            n = e.DataElement[a - 1].x * e.multiplier / e.DataElement[a - 1].y,
                            i = e.DataElement[a + 1].x * e.multiplier / e.DataElement[a + 1].y;
                        if (c === t) return [a, a, !0];
                        if (c === n) return [a - 1, a - 1, !0];
                        if (c === i) return [a + 1, a + 1, !0];
                        if (c < n) s = a - 1;
                        else {
                            if (c > n && c < t) return [a - 1, a, !0];
                            if (c > t && c < i) return [a, a + 1, !0];
                            o = a + 1
                        }
                    }
                    return [a, a, !1]
                }(e, t, n);
                if (!o) return 0;
                if (i === r) {
                    let n = e.DataElement[i].x;
                    return t * e.multiplier / n
                } {
                    let o = e.DataElement[i].x,
                        s = e.DataElement[i].y,
                        a = e.DataElement[r].x,
                        c = e.DataElement[r].y,
                        u = n * (a * s - o * c),
                        l = (a - o) * (t * s - o * n) * c;
                    return t * e.multiplier * u / (o * u + l)
                }
            }

            function rN(e, t, n) {
                return t * e.multiplier / n
            }

            function rM(e, t, n) {
                return t * n / e.multiplier
            }

            function rW(e, t, n, i) {
                let r = i ? t + n : t - n,
                    [o, s, a] = function(e, t) {
                        let [n, i] = [0, 49998], r = n, o = i, s = 0;
                        for (; r < o && !((s = Math.floor((o + r) / 2)) <= 0) && !(s > 49998);) {
                            let n = e.DataElement[s].x,
                                i = e.DataElement[s - 1].x,
                                a = e.DataElement[s + 1].x;
                            if (t === n) return [s, s, !0];
                            if (t === i) return [s - 1, s - 1, !0];
                            if (t === a) return [s + 1, s + 1, !0];
                            if (t < i) o = s - 1;
                            else {
                                if (t > i && t < n) return [s - 1, s, !0];
                                if (t > n && t < a) return [s, s + 1, !0];
                                r = s + 1
                            }
                        }
                        return [s, s, !1]
                    }(e, r);
                if (!a) return [0, 0, !1, a];
                if (o === s) return [e.DataElement[s].price, e.DataElement[s].y, !1, a]; {
                    let n = e.DataElement[o].x,
                        c = e.DataElement[s].x,
                        u = e.DataElement[o].price,
                        l = e.DataElement[s].price,
                        m = e.DataElement[o].y,
                        d = e.DataElement[s].y;
                    if (t >= n && t <= c) return i ? [l, d, !0, a] : [u, m, !0, a]; {
                        let o, s;
                        return i ? (o = u + (l - u) * (t - n) / (c - n), s = m - (r - n) * e.multiplier / l) : (o = u + (l - u) * (t - n) / (c - n), s = d + (c - r) * e.multiplier / u), [o, s, !1, a]
                    }
                }
            }
            var rF = n(67133).Buffer;
            let rK = U.from("Liquidity"),
                rY = {
                    accountType: 0,
                    status: 0,
                    multiplier: 0,
                    validDataCount: 0,
                    DataElement: []
                };
            async function rH(e) {
                if (0 === rY.validDataCount && e) {
                    let t = await e.getAccountInfo(rV);
                    t && (rY = function(e) {
                        let t = r_.decode(e);
                        return {
                            accountType: t.accountType.toNumber(),
                            status: t.status.toNumber(),
                            multiplier: t.multiplier.toNumber(),
                            validDataCount: t.validDataCount.toNumber(),
                            DataElement: t.DataElement.map(e => ({
                                x: e.x.toNumber(),
                                y: e.y.toNumber(),
                                price: e.price.toNumber()
                            }))
                        }
                    }(t ? .data))
                }
            }(o = c || (c = {}))[o.Uninitialized = 0] = "Uninitialized", o[o.Initialized = 1] = "Initialized", o[o.Disabled = 2] = "Disabled", o[o.RemoveLiquidityOnly = 3] = "RemoveLiquidityOnly", o[o.LiquidityOnly = 4] = "LiquidityOnly", o[o.OrderBook = 5] = "OrderBook", o[o.Swap = 6] = "Swap", o[o.WaitingForStart = 7] = "WaitingForStart";
            let rX = new(P())(25),
                rG = new(P())(1e4);
            class rz extends tw {
                static getStateLayout(e) {
                    let t = t3[e];
                    return rK.assertArgument(!!t, "invalid version", "version", e), t
                }
                static getLayouts(e) {
                    return {
                        state: this.getStateLayout(e)
                    }
                }
                static getAssociatedId({
                    programId: e,
                    marketId: t
                }) {
                    let {
                        publicKey: n
                    } = W([e.toBuffer(), t.toBuffer(), rF.from("amm_associated_seed", "utf-8")], e);
                    return n
                }
                static getAssociatedAuthority({
                    programId: e
                }) {
                    return W([rF.from([97, 109, 109, 32, 97, 117, 116, 104, 111, 114, 105, 116, 121])], e)
                }
                static getAssociatedBaseVault({
                    programId: e,
                    marketId: t
                }) {
                    let {
                        publicKey: n
                    } = W([e.toBuffer(), t.toBuffer(), rF.from("coin_vault_associated_seed", "utf-8")], e);
                    return n
                }
                static getAssociatedQuoteVault({
                    programId: e,
                    marketId: t
                }) {
                    let {
                        publicKey: n
                    } = W([e.toBuffer(), t.toBuffer(), rF.from("pc_vault_associated_seed", "utf-8")], e);
                    return n
                }
                static getAssociatedLpMint({
                    programId: e,
                    marketId: t
                }) {
                    let {
                        publicKey: n
                    } = W([e.toBuffer(), t.toBuffer(), rF.from("lp_mint_associated_seed", "utf-8")], e);
                    return n
                }
                static getAssociatedLpVault({
                    programId: e,
                    marketId: t
                }) {
                    let {
                        publicKey: n
                    } = W([e.toBuffer(), t.toBuffer(), rF.from("temp_lp_token_associated_seed", "utf-8")], e);
                    return n
                }
                static getAssociatedTargetOrders({
                    programId: e,
                    marketId: t
                }) {
                    let {
                        publicKey: n
                    } = W([e.toBuffer(), t.toBuffer(), rF.from("target_associated_seed", "utf-8")], e);
                    return n
                }
                static getAssociatedWithdrawQueue({
                    programId: e,
                    marketId: t
                }) {
                    let {
                        publicKey: n
                    } = W([e.toBuffer(), t.toBuffer(), rF.from("withdraw_associated_seed", "utf-8")], e);
                    return n
                }
                static getAssociatedOpenOrders({
                    programId: e,
                    marketId: t
                }) {
                    let {
                        publicKey: n
                    } = W([e.toBuffer(), t.toBuffer(), rF.from("open_order_associated_seed", "utf-8")], e);
                    return n
                }
                static getAssociatedConfigId({
                    programId: e
                }) {
                    let {
                        publicKey: t
                    } = W([rF.from("amm_config_account_seed", "utf-8")], e);
                    return t
                }
                static getAssociatedPoolKeys({
                    version: e,
                    marketVersion: t,
                    marketId: n,
                    baseMint: i,
                    quoteMint: r,
                    baseDecimals: o,
                    quoteDecimals: s,
                    programId: a,
                    marketProgramId: c
                }) {
                    let u = this.getAssociatedId({
                            programId: a,
                            marketId: n
                        }),
                        l = this.getAssociatedLpMint({
                            programId: a,
                            marketId: n
                        }),
                        {
                            publicKey: m,
                            nonce: p
                        } = this.getAssociatedAuthority({
                            programId: a
                        }),
                        f = this.getAssociatedBaseVault({
                            programId: a,
                            marketId: n
                        }),
                        g = this.getAssociatedQuoteVault({
                            programId: a,
                            marketId: n
                        }),
                        w = this.getAssociatedLpVault({
                            programId: a,
                            marketId: n
                        }),
                        S = this.getAssociatedOpenOrders({
                            programId: a,
                            marketId: n
                        }),
                        h = this.getAssociatedTargetOrders({
                            programId: a,
                            marketId: n
                        }),
                        y = this.getAssociatedWithdrawQueue({
                            programId: a,
                            marketId: n
                        }),
                        {
                            publicKey: A
                        } = rq.getAssociatedAuthority({
                            programId: c,
                            marketId: n
                        });
                    return {
                        id: u,
                        baseMint: i,
                        quoteMint: r,
                        lpMint: l,
                        baseDecimals: o,
                        quoteDecimals: s,
                        lpDecimals: o,
                        version: e,
                        programId: a,
                        authority: m,
                        nonce: p,
                        baseVault: f,
                        quoteVault: g,
                        lpVault: w,
                        openOrders: S,
                        targetOrders: h,
                        withdrawQueue: y,
                        marketVersion: t,
                        marketProgramId: c,
                        marketId: n,
                        marketAuthority: A,
                        lookupTableAccount: d.PublicKey.default,
                        configId: this.getAssociatedConfigId({
                            programId: a
                        })
                    }
                }
                static async getCreatePoolFee({
                    connection: e,
                    programId: t
                }) {
                    let n = this.getAssociatedConfigId({
                            programId: t
                        }),
                        i = e5([eZ("fee")]),
                        r = await e.getAccountInfo(n, {
                            dataSlice: {
                                offset: 536,
                                length: 8
                            }
                        });
                    if (null === r) throw Error("get config account error");
                    return i.decode(r.data).fee
                }
                static makeAddLiquidityInstruction(e) {
                    let {
                        poolKeys: t,
                        userKeys: n,
                        baseAmountIn: i,
                        quoteAmountIn: r,
                        fixedSide: o
                    } = e, {
                        version: s
                    } = t;
                    if (4 === s || 5 === s) {
                        let e = e5([eQ("instruction"), eZ("baseAmountIn"), eZ("quoteAmountIn"), eZ("fixedSide")]),
                            a = rF.alloc(e.span);
                        e.encode({
                            instruction: 3,
                            baseAmountIn: ec(i),
                            quoteAmountIn: ec(r),
                            fixedSide: ec("base" === o ? 0 : 1)
                        }, a);
                        let c = [K(l.H_, !1), F(t.id, !1), K(t.authority, !1), K(t.openOrders, !1), F(t.targetOrders, !1), F(t.lpMint, !1), F(t.baseVault, !1), F(t.quoteVault, !1)];
                        return 5 === s && c.push(F(rV, !1)), c.push(K(t.marketId, !1), F(n.baseTokenAccount, !1), F(n.quoteTokenAccount, !1), F(n.lpTokenAccount, !1), K(n.owner, !0), K(t.marketEventQueue, !1)), {
                            address: {},
                            innerTransaction: {
                                instructions: [new d.TransactionInstruction({
                                    programId: t.programId,
                                    keys: c,
                                    data: a
                                })],
                                signers: [],
                                lookupTableAddress: [t.lookupTableAccount].filter(e => e && !e.equals(d.PublicKey.default)),
                                instructionTypes: [4 === s ? nc.ammV4AddLiquidity : nc.ammV5AddLiquidity]
                            }
                        }
                    }
                    return rK.throwArgumentError("invalid version", "poolKeys.version", s)
                }
                static async makeAddLiquidityInstructionSimple(e) {
                    let {
                        connection: t,
                        poolKeys: n,
                        userKeys: i,
                        amountInA: r,
                        amountInB: o,
                        fixedSide: s,
                        config: a,
                        makeTxVersion: c,
                        lookupTableCache: u,
                        computeBudgetConfig: m
                    } = e, {
                        lpMint: d
                    } = n, {
                        tokenAccounts: p,
                        owner: f,
                        payer: g = f
                    } = i;
                    rK.debug("amountInA:", r), rK.debug("amountInB:", o), rK.assertArgument(!r.isZero() && !o.isZero(), "amounts must greater than zero", "amountInA & amountInB", {
                        amountInA: r.toFixed(),
                        amountInB: o.toFixed()
                    });
                    let {
                        bypassAssociatedCheck: w,
                        checkCreateATAOwner: S
                    } = {
                        bypassAssociatedCheck: !1,
                        checkCreateATAOwner: !1,
                        ...a
                    }, h = r instanceof eR ? r.token : eg.WSOL, y = o instanceof eR ? o.token : eg.WSOL, A = this._selectTokenAccount({
                        programId: l.H_,
                        tokenAccounts: p,
                        mint: h.mint,
                        owner: f,
                        config: {
                            associatedOnly: !1
                        }
                    }), b = this._selectTokenAccount({
                        programId: l.H_,
                        tokenAccounts: p,
                        mint: y.mint,
                        owner: f,
                        config: {
                            associatedOnly: !1
                        }
                    });
                    rK.assertArgument(!!A || !!b, "cannot found target token accounts", "tokenAccounts", p);
                    let k = this._selectTokenAccount({
                            programId: l.H_,
                            tokenAccounts: p,
                            mint: d,
                            owner: f
                        }),
                        T = [h, y],
                        I = [A, b],
                        P = [r.raw, o.raw],
                        [v] = this._getAmountsSide(r, o, n),
                        C = "base";
                    if ("quote" === v) {
                        if (T.reverse(), I.reverse(), P.reverse(), "a" === s) C = "quote";
                        else {
                            if ("b" !== s) return rK.throwArgumentError("invalid fixedSide", "fixedSide", s);
                            C = "base"
                        }
                    } else if ("base" !== v) return rK.throwArgumentError("invalid fixedSide", "fixedSide", s);
                    else if ("a" === s) C = "base";
                    else {
                        if ("b" !== s) return rK.throwArgumentError("invalid fixedSide", "fixedSide", s);
                        C = "quote"
                    }
                    let [L, D] = T, [R, E] = I, [O, U] = P, q = [], V = [], B = [], _ = [], x = [], N = await this._handleTokenAccount({
                        programId: l.H_,
                        connection: t,
                        side: "in",
                        amount: O,
                        mint: L.mint,
                        tokenAccount: R,
                        owner: f,
                        payer: g,
                        frontInstructions: q,
                        endInstructions: V,
                        signers: x,
                        bypassAssociatedCheck: w,
                        frontInstructionsType: B,
                        endInstructionsType: _,
                        checkCreateATAOwner: S
                    }), M = await this._handleTokenAccount({
                        programId: l.H_,
                        connection: t,
                        side: "in",
                        amount: U,
                        mint: D.mint,
                        tokenAccount: E,
                        owner: f,
                        payer: g,
                        frontInstructions: q,
                        endInstructions: V,
                        signers: x,
                        bypassAssociatedCheck: w,
                        frontInstructionsType: B,
                        endInstructionsType: _,
                        checkCreateATAOwner: S
                    }), W = await this._handleTokenAccount({
                        programId: l.H_,
                        connection: t,
                        side: "out",
                        amount: 0,
                        mint: d,
                        tokenAccount: k,
                        owner: f,
                        payer: g,
                        frontInstructions: q,
                        endInstructions: V,
                        signers: x,
                        bypassAssociatedCheck: w,
                        frontInstructionsType: B,
                        endInstructionsType: _,
                        checkCreateATAOwner: S
                    }), F = this.makeAddLiquidityInstruction({
                        poolKeys: n,
                        userKeys: {
                            baseTokenAccount: N,
                            quoteTokenAccount: M,
                            lpTokenAccount: W,
                            owner: f
                        },
                        baseAmountIn: O,
                        quoteAmountIn: U,
                        fixedSide: C
                    });
                    return {
                        address: {
                            lpTokenAccount: W
                        },
                        innerTransactions: await $({
                            connection: t,
                            makeTxVersion: c,
                            computeBudgetConfig: m,
                            payer: g,
                            innerTransaction: [{
                                instructionTypes: B,
                                instructions: q,
                                signers: x
                            }, F.innerTransaction, {
                                instructionTypes: _,
                                instructions: V,
                                signers: []
                            }],
                            lookupTableCache: u
                        })
                    }
                }
                static makeRemoveLiquidityInstruction(e) {
                    let {
                        poolKeys: t,
                        userKeys: n,
                        amountIn: i
                    } = e, {
                        version: r
                    } = t;
                    if (4 === r || 5 === r) {
                        let e = e5([eQ("instruction"), eZ("amountIn")]),
                            o = rF.alloc(e.span);
                        e.encode({
                            instruction: 4,
                            amountIn: ec(i)
                        }, o);
                        let s = [K(l.H_, !1), F(t.id, !1), K(t.authority, !1), F(t.openOrders, !1), F(t.targetOrders, !1), F(t.lpMint, !1), F(t.baseVault, !1), F(t.quoteVault, !1)];
                        return 5 === r ? s.push(F(rV, !1)) : (s.push(F(t.withdrawQueue, !1)), s.push(F(t.lpVault, !1))), s.push(K(t.marketProgramId, !1), F(t.marketId, !1), F(t.marketBaseVault, !1), F(t.marketQuoteVault, !1), K(t.marketAuthority, !1), F(n.lpTokenAccount, !1), F(n.baseTokenAccount, !1), F(n.quoteTokenAccount, !1), K(n.owner, !0), F(t.marketEventQueue, !1), F(t.marketBids, !1), F(t.marketAsks, !1)), {
                            address: {},
                            innerTransaction: {
                                instructions: [new d.TransactionInstruction({
                                    programId: t.programId,
                                    keys: s,
                                    data: o
                                })],
                                signers: [],
                                lookupTableAddress: [t.lookupTableAccount].filter(e => e && !e.equals(d.PublicKey.default)),
                                instructionTypes: [4 === r ? nc.ammV4RemoveLiquidity : nc.ammV5RemoveLiquidity]
                            }
                        }
                    }
                    return rK.throwArgumentError("invalid version", "poolKeys.version", r)
                }
                static async makeRemoveLiquidityInstructionSimple(e) {
                    let {
                        connection: t,
                        poolKeys: n,
                        userKeys: i,
                        amountIn: r,
                        config: o,
                        makeTxVersion: s,
                        lookupTableCache: a,
                        computeBudgetConfig: c
                    } = e, {
                        baseMint: u,
                        quoteMint: m,
                        lpMint: d
                    } = n, {
                        tokenAccounts: p,
                        owner: f,
                        payer: g = f
                    } = i;
                    rK.debug("amountIn:", r), rK.assertArgument(!r.isZero(), "amount must greater than zero", "amountIn", r.toFixed()), rK.assertArgument(r instanceof eR && r.token.mint.equals(d), "amountIn's token not match lpMint", "amountIn", r);
                    let w = this._selectTokenAccount({
                        programId: l.H_,
                        tokenAccounts: p,
                        mint: d,
                        owner: f,
                        config: {
                            associatedOnly: !1
                        }
                    });
                    if (!w) return rK.throwArgumentError("cannot found lpTokenAccount", "tokenAccounts", p);
                    let S = this._selectTokenAccount({
                            programId: l.H_,
                            tokenAccounts: p,
                            mint: u,
                            owner: f
                        }),
                        h = this._selectTokenAccount({
                            programId: l.H_,
                            tokenAccounts: p,
                            mint: m,
                            owner: f
                        }),
                        {
                            bypassAssociatedCheck: y,
                            checkCreateATAOwner: A
                        } = {
                            bypassAssociatedCheck: !1,
                            checkCreateATAOwner: !1,
                            ...o
                        },
                        b = [],
                        k = [],
                        T = [],
                        I = [],
                        P = await this._handleTokenAccount({
                            programId: l.H_,
                            connection: t,
                            side: "out",
                            amount: 0,
                            mint: u,
                            tokenAccount: S,
                            owner: f,
                            payer: g,
                            frontInstructions: b,
                            endInstructions: k,
                            signers: I,
                            bypassAssociatedCheck: y,
                            frontInstructionsType: T,
                            checkCreateATAOwner: A
                        }),
                        v = await this._handleTokenAccount({
                            programId: l.H_,
                            connection: t,
                            side: "out",
                            amount: 0,
                            mint: m,
                            tokenAccount: h,
                            owner: f,
                            payer: g,
                            frontInstructions: b,
                            endInstructions: k,
                            signers: I,
                            bypassAssociatedCheck: y,
                            frontInstructionsType: T,
                            checkCreateATAOwner: A
                        }),
                        C = this.makeRemoveLiquidityInstruction({
                            poolKeys: n,
                            userKeys: {
                                lpTokenAccount: w,
                                baseTokenAccount: P,
                                quoteTokenAccount: v,
                                owner: f
                            },
                            amountIn: r.raw
                        });
                    return {
                        address: {
                            lpTokenAccount: w
                        },
                        innerTransactions: await $({
                            connection: t,
                            makeTxVersion: s,
                            computeBudgetConfig: c,
                            payer: g,
                            innerTransaction: [{
                                instructionTypes: T,
                                instructions: b,
                                signers: I
                            }, C.innerTransaction, {
                                instructionTypes: [],
                                instructions: k,
                                signers: []
                            }],
                            lookupTableCache: a
                        })
                    }
                }
                static makeSwapInstruction(e) {
                    let {
                        poolKeys: t,
                        userKeys: n,
                        amountIn: i,
                        amountOut: r,
                        fixedSide: o
                    } = e, {
                        version: s
                    } = t;
                    return 4 === s || 5 === s ? "in" === o ? this.makeSwapFixedInInstruction({
                        poolKeys: t,
                        userKeys: n,
                        amountIn: i,
                        minAmountOut: r
                    }, s) : "out" === o ? this.makeSwapFixedOutInstruction({
                        poolKeys: t,
                        userKeys: n,
                        maxAmountIn: i,
                        amountOut: r
                    }, s) : rK.throwArgumentError("invalid params", "params", e) : rK.throwArgumentError("invalid version", "poolKeys.version", s)
                }
                static makeSwapFixedInInstruction({
                    poolKeys: e,
                    userKeys: t,
                    amountIn: n,
                    minAmountOut: i
                }, r) {
                    let o = e5([eQ("instruction"), eZ("amountIn"), eZ("minAmountOut")]),
                        s = rF.alloc(o.span);
                    o.encode({
                        instruction: 9,
                        amountIn: ec(n),
                        minAmountOut: ec(i)
                    }, s);
                    let a = [K(l.H_, !1), F(e.id, !1), K(e.authority, !1), F(e.openOrders, !1)];
                    return 4 === r && a.push(F(e.targetOrders, !1)), a.push(F(e.baseVault, !1), F(e.quoteVault, !1)), 5 === r && a.push(F(rV, !1)), a.push(K(e.marketProgramId, !1), F(e.marketId, !1), F(e.marketBids, !1), F(e.marketAsks, !1), F(e.marketEventQueue, !1), F(e.marketBaseVault, !1), F(e.marketQuoteVault, !1), K(e.marketAuthority, !1), F(t.tokenAccountIn, !1), F(t.tokenAccountOut, !1), K(t.owner, !0)), {
                        address: {},
                        innerTransaction: {
                            instructions: [new d.TransactionInstruction({
                                programId: e.programId,
                                keys: a,
                                data: s
                            })],
                            signers: [],
                            lookupTableAddress: [e.lookupTableAccount].filter(e => e && !e.equals(d.PublicKey.default)),
                            instructionTypes: [4 === r ? nc.ammV4SwapBaseIn : nc.ammV5SwapBaseIn]
                        }
                    }
                }
                static makeSwapFixedOutInstruction({
                    poolKeys: e,
                    userKeys: t,
                    maxAmountIn: n,
                    amountOut: i
                }, r) {
                    let o = e5([eQ("instruction"), eZ("maxAmountIn"), eZ("amountOut")]),
                        s = rF.alloc(o.span);
                    o.encode({
                        instruction: 11,
                        maxAmountIn: ec(n),
                        amountOut: ec(i)
                    }, s);
                    let a = [K(l.H_, !1), F(e.id, !1), K(e.authority, !1), F(e.openOrders, !1), F(e.targetOrders, !1), F(e.baseVault, !1), F(e.quoteVault, !1)];
                    return 5 === r && a.push(F(rV, !1)), a.push(K(e.marketProgramId, !1), F(e.marketId, !1), F(e.marketBids, !1), F(e.marketAsks, !1), F(e.marketEventQueue, !1), F(e.marketBaseVault, !1), F(e.marketQuoteVault, !1), K(e.marketAuthority, !1), F(t.tokenAccountIn, !1), F(t.tokenAccountOut, !1), K(t.owner, !0)), {
                        address: {},
                        innerTransaction: {
                            instructions: [new d.TransactionInstruction({
                                programId: e.programId,
                                keys: a,
                                data: s
                            })],
                            signers: [],
                            lookupTableAddress: [e.lookupTableAccount].filter(e => e && !e.equals(d.PublicKey.default)),
                            instructionTypes: [4 === r ? nc.ammV4SwapBaseOut : nc.ammV5SwapBaseOut]
                        }
                    }
                }
                static async makeSwapInstructionSimple(e) {
                    let {
                        connection: t,
                        poolKeys: n,
                        userKeys: i,
                        amountIn: r,
                        amountOut: o,
                        fixedSide: s,
                        config: a,
                        makeTxVersion: c,
                        lookupTableCache: u,
                        computeBudgetConfig: m
                    } = e, {
                        tokenAccounts: d,
                        owner: p,
                        payer: f = p
                    } = i;
                    rK.debug("amountIn:", r), rK.debug("amountOut:", o), rK.assertArgument(!r.isZero() && !o.isZero(), "amounts must greater than zero", "currencyAmounts", {
                        amountIn: r.toFixed(),
                        amountOut: o.toFixed()
                    });
                    let {
                        bypassAssociatedCheck: g,
                        checkCreateATAOwner: w
                    } = {
                        bypassAssociatedCheck: !1,
                        checkCreateATAOwner: !1,
                        ...a
                    }, S = r instanceof eR ? r.token : eg.WSOL, h = o instanceof eR ? o.token : eg.WSOL, y = this._selectTokenAccount({
                        programId: l.H_,
                        tokenAccounts: d,
                        mint: S.mint,
                        owner: p,
                        config: {
                            associatedOnly: !1
                        }
                    }), A = this._selectTokenAccount({
                        programId: l.H_,
                        tokenAccounts: d,
                        mint: h.mint,
                        owner: p
                    }), [b, k] = [r.raw, o.raw], T = [], I = [], P = [], v = [], C = await this._handleTokenAccount({
                        programId: l.H_,
                        connection: t,
                        side: "in",
                        amount: b,
                        mint: S.mint,
                        tokenAccount: y,
                        owner: p,
                        payer: f,
                        frontInstructions: T,
                        endInstructions: I,
                        signers: v,
                        bypassAssociatedCheck: g,
                        frontInstructionsType: P,
                        checkCreateATAOwner: w
                    }), L = await this._handleTokenAccount({
                        programId: l.H_,
                        connection: t,
                        side: "out",
                        amount: 0,
                        mint: h.mint,
                        tokenAccount: A,
                        owner: p,
                        payer: f,
                        frontInstructions: T,
                        endInstructions: I,
                        signers: v,
                        bypassAssociatedCheck: g,
                        frontInstructionsType: P,
                        checkCreateATAOwner: w
                    }), D = this.makeSwapInstruction({
                        poolKeys: n,
                        userKeys: {
                            tokenAccountIn: C,
                            tokenAccountOut: L,
                            owner: p
                        },
                        amountIn: b,
                        amountOut: k,
                        fixedSide: s
                    });
                    return {
                        address: {},
                        innerTransactions: await $({
                            connection: t,
                            makeTxVersion: c,
                            computeBudgetConfig: m,
                            payer: f,
                            innerTransaction: [{
                                instructionTypes: P,
                                instructions: T,
                                signers: v
                            }, D.innerTransaction, {
                                instructionTypes: [],
                                instructions: I,
                                signers: []
                            }],
                            lookupTableCache: u
                        })
                    }
                }
                static makeSimulatePoolInfoInstruction({
                    poolKeys: e
                }) {
                    let t = e5([eQ("instruction"), eQ("simulateType")]),
                        n = rF.alloc(t.span);
                    t.encode({
                        instruction: 12,
                        simulateType: 0
                    }, n);
                    let i = [K(e.id, !1), K(e.authority, !1), K(e.openOrders, !1), K(e.baseVault, !1), K(e.quoteVault, !1), K(e.lpMint, !1), K(e.marketId, !1), K(e.marketEventQueue, !1)];
                    return {
                        address: {},
                        innerTransaction: {
                            instructions: [new d.TransactionInstruction({
                                programId: e.programId,
                                keys: i,
                                data: n
                            })],
                            signers: [],
                            lookupTableAddress: [e.lookupTableAccount].filter(e => e && !e.equals(d.PublicKey.default)),
                            instructionTypes: [4 === e.version ? nc.ammV4SimulatePoolInfo : nc.ammV5SimulatePoolInfo]
                        }
                    }
                }
                static isV4(e) {
                    return void 0 !== e.withdrawQueue
                }
                static async makeCreatePoolV4InstructionV2Simple({
                    connection: e,
                    programId: t,
                    marketInfo: n,
                    baseMintInfo: i,
                    quoteMintInfo: r,
                    baseAmount: o,
                    quoteAmount: s,
                    startTime: c,
                    ownerInfo: u,
                    associatedOnly: m = !1,
                    computeBudgetConfig: d,
                    checkCreateATAOwner: p = !1,
                    makeTxVersion: f,
                    lookupTableCache: g,
                    feeDestinationId: w
                }) {
                    let S = [],
                        h = [],
                        y = [],
                        A = [],
                        b = [],
                        k = u.useSOLBalance && i.mint.equals(eg.WSOL.mint),
                        T = u.useSOLBalance && r.mint.equals(eg.WSOL.mint),
                        I = await this._selectOrCreateTokenAccount({
                            programId: l.H_,
                            mint: i.mint,
                            tokenAccounts: k ? [] : u.tokenAccounts,
                            owner: u.wallet,
                            createInfo: k ? {
                                connection: e,
                                payer: u.feePayer,
                                amount: o,
                                frontInstructions: S,
                                frontInstructionsType: y,
                                endInstructions: k ? h : [],
                                endInstructionsType: k ? A : [],
                                signers: b
                            } : void 0,
                            associatedOnly: !k && m,
                            checkCreateATAOwner: p
                        }),
                        P = await this._selectOrCreateTokenAccount({
                            programId: l.H_,
                            mint: r.mint,
                            tokenAccounts: T ? [] : u.tokenAccounts,
                            owner: u.wallet,
                            createInfo: T ? {
                                connection: e,
                                payer: u.feePayer,
                                amount: s,
                                frontInstructions: S,
                                frontInstructionsType: y,
                                endInstructions: T ? h : [],
                                endInstructionsType: T ? A : [],
                                signers: b
                            } : void 0,
                            associatedOnly: !T && m,
                            checkCreateATAOwner: p
                        });
                    if (void 0 === I || void 0 === P) throw Error("you don't has some token account");
                    let v = a.getAssociatedPoolKeys({
                            version: 4,
                            marketVersion: 3,
                            marketId: n.marketId,
                            baseMint: i.mint,
                            quoteMint: r.mint,
                            baseDecimals: i.decimals,
                            quoteDecimals: r.decimals,
                            programId: t,
                            marketProgramId: n.programId
                        }),
                        C = this.makeCreatePoolV4InstructionV2({
                            programId: t,
                            ammId: v.id,
                            ammAuthority: v.authority,
                            ammOpenOrders: v.openOrders,
                            lpMint: v.lpMint,
                            coinMint: v.baseMint,
                            pcMint: v.quoteMint,
                            coinVault: v.baseVault,
                            pcVault: v.quoteVault,
                            ammTargetOrders: v.targetOrders,
                            marketProgramId: v.marketProgramId,
                            marketId: v.marketId,
                            userWallet: u.wallet,
                            userCoinVault: I,
                            userPcVault: P,
                            userLpVault: td(u.wallet, v.lpMint, l.H_).publicKey,
                            ammConfigId: v.configId,
                            feeDestinationId: w,
                            nonce: v.nonce,
                            openTime: c,
                            coinAmount: o,
                            pcAmount: s
                        }).innerTransaction;
                    return {
                        address: {
                            programId: t,
                            ammId: v.id,
                            ammAuthority: v.authority,
                            ammOpenOrders: v.openOrders,
                            lpMint: v.lpMint,
                            coinMint: v.baseMint,
                            pcMint: v.quoteMint,
                            coinVault: v.baseVault,
                            pcVault: v.quoteVault,
                            withdrawQueue: v.withdrawQueue,
                            ammTargetOrders: v.targetOrders,
                            poolTempLp: v.lpVault,
                            marketProgramId: v.marketProgramId,
                            marketId: v.marketId
                        },
                        innerTransactions: await $({
                            connection: e,
                            makeTxVersion: f,
                            computeBudgetConfig: d,
                            payer: u.feePayer,
                            innerTransaction: [{
                                instructionTypes: y,
                                instructions: S,
                                signers: b
                            }, C, {
                                instructionTypes: A,
                                instructions: h,
                                signers: []
                            }],
                            lookupTableCache: g
                        })
                    }
                }
                static makeCreatePoolV4InstructionV2({
                    programId: e,
                    ammId: t,
                    ammAuthority: n,
                    ammOpenOrders: i,
                    lpMint: r,
                    coinMint: o,
                    pcMint: s,
                    coinVault: a,
                    pcVault: c,
                    ammTargetOrders: u,
                    marketProgramId: m,
                    marketId: p,
                    userWallet: f,
                    userCoinVault: g,
                    userPcVault: w,
                    userLpVault: S,
                    nonce: h,
                    openTime: y,
                    coinAmount: A,
                    pcAmount: b,
                    lookupTableAddress: k,
                    ammConfigId: T,
                    feeDestinationId: I
                }) {
                    let P = e5([eQ("instruction"), eQ("nonce"), eZ("openTime"), eZ("pcAmount"), eZ("coinAmount")]),
                        v = [{
                            pubkey: l.H_,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: l._u,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: V,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: _,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: n,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: i,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: r,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: o,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: s,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: a,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: c,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: u,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: T,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: I,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: m,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: p,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: f,
                            isSigner: !0,
                            isWritable: !0
                        }, {
                            pubkey: g,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: w,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: S,
                            isSigner: !1,
                            isWritable: !0
                        }],
                        C = rF.alloc(P.span);
                    return P.encode({
                        instruction: 1,
                        nonce: h,
                        openTime: y,
                        coinAmount: A,
                        pcAmount: b
                    }, C), {
                        address: {},
                        innerTransaction: {
                            instructions: [new d.TransactionInstruction({
                                keys: v,
                                programId: e,
                                data: C
                            })],
                            signers: [],
                            lookupTableAddress: k ? [k] : void 0,
                            instructionTypes: [nc.ammV4CreatePoolV2]
                        }
                    }
                }
                static async makeRemoveAllLpAndCreateClmmPosition({
                    connection: e,
                    poolKeys: t,
                    removeLpAmount: n,
                    userKeys: i,
                    clmmPoolKeys: r,
                    createPositionInfo: o,
                    farmInfo: s,
                    computeBudgetConfig: a,
                    checkCreateATAOwner: c = !1,
                    getEphemeralSigners: u,
                    makeTxVersion: m,
                    lookupTableCache: d
                }) {
                    if (!(t.baseMint.equals(r.mintA.mint) || t.baseMint.equals(r.mintB.mint)) || !(t.quoteMint.equals(r.mintA.mint) || t.quoteMint.equals(r.mintB.mint))) throw Error("mint check error");
                    let p = [],
                        f = [],
                        g = [],
                        w = [],
                        S = [],
                        h = {};
                    for (let e of i.tokenAccounts)(void 0 === h[e.accountInfo.mint.toString()] || td(i.owner, e.accountInfo.mint, l.H_).publicKey.equals(e.pubkey)) && (h[e.accountInfo.mint.toString()] = e.pubkey);
                    let y = h[t.lpMint.toString()];
                    if (void 0 === y) throw Error("find lp account error in trade accounts");
                    let A = n.add(s ? .amount ? ? new(P())(0)),
                        b = t.baseMint.equals(eg.WSOL.mint),
                        k = t.quoteMint.equals(eg.WSOL.mint),
                        T = await this._selectOrCreateTokenAccount({
                            programId: l.H_,
                            mint: t.baseMint,
                            tokenAccounts: i.tokenAccounts,
                            owner: i.owner,
                            createInfo: {
                                connection: e,
                                payer: i.payer ? ? i.owner,
                                frontInstructions: p,
                                frontInstructionsType: g,
                                endInstructions: b ? f : [],
                                endInstructionsType: b ? w : [],
                                signers: S
                            },
                            associatedOnly: !0,
                            checkCreateATAOwner: c
                        }),
                        I = await this._selectOrCreateTokenAccount({
                            programId: l.H_,
                            mint: t.quoteMint,
                            tokenAccounts: i.tokenAccounts,
                            owner: i.owner,
                            createInfo: {
                                connection: e,
                                payer: i.payer ? ? i.owner,
                                amount: 0,
                                frontInstructions: p,
                                frontInstructionsType: g,
                                endInstructions: k ? f : [],
                                endInstructionsType: k ? w : [],
                                signers: S
                            },
                            associatedOnly: !0,
                            checkCreateATAOwner: c
                        });
                    h[t.baseMint.toString()] = T, h[t.quoteMint.toString()] = I;
                    let v = this.makeRemoveLiquidityInstruction({
                            poolKeys: t,
                            userKeys: {
                                lpTokenAccount: y,
                                baseTokenAccount: T,
                                quoteTokenAccount: I,
                                owner: i.owner
                            },
                            amountIn: A
                        }),
                        [C, L] = t.baseMint.equals(r.mintA.mint) ? [T, I] : [I, T],
                        D = await rP.makeOpenPositionFromLiquidityInstructions({
                            poolInfo: r,
                            ownerInfo: {
                                feePayer: i.payer ? ? i.owner,
                                wallet: i.owner,
                                tokenAccountA: C,
                                tokenAccountB: L
                            },
                            withMetadata: "create",
                            ...o,
                            getEphemeralSigners: u
                        }),
                        R = {
                            instructions: [],
                            signers: [],
                            instructionTypes: []
                        };
                    if (void 0 !== s) {
                        let t = [];
                        for (let n of s.poolKeys.rewardInfos) {
                            let r = n.rewardMint.equals(eg.WSOL.mint);
                            t.push(h[n.rewardMint.toString()] ? ? await this._selectOrCreateTokenAccount({
                                programId: l.H_,
                                mint: n.rewardMint,
                                tokenAccounts: i.tokenAccounts,
                                owner: i.owner,
                                createInfo: {
                                    connection: e,
                                    payer: i.payer ? ? i.owner,
                                    frontInstructions: p,
                                    frontInstructionsType: g,
                                    endInstructions: r ? f : [],
                                    endInstructionsType: r ? w : [],
                                    signers: S
                                },
                                associatedOnly: !0,
                                checkCreateATAOwner: c
                            }))
                        }
                        R = t6.makeWithdrawInstruction({
                            poolKeys: s.poolKeys,
                            amount: s.amount,
                            userKeys: {
                                ledger: t6.getAssociatedLedgerAccount({
                                    programId: s.poolKeys.programId,
                                    poolId: s.poolKeys.id,
                                    owner: i.owner,
                                    version: s.poolKeys.version
                                }),
                                lpTokenAccount: y,
                                rewardTokenAccounts: t,
                                owner: i.owner
                            }
                        }).innerTransaction
                    }
                    return {
                        address: { ...v.address,
                            ...D.address
                        },
                        innerTransactions: await $({
                            connection: e,
                            makeTxVersion: m,
                            computeBudgetConfig: a,
                            payer: i.payer ? ? i.owner,
                            innerTransaction: [{
                                instructionTypes: g,
                                instructions: p,
                                signers: S
                            }, R, v.innerTransaction, D.innerTransaction, {
                                instructionTypes: w,
                                instructions: f,
                                signers: []
                            }],
                            lookupTableCache: d
                        })
                    }
                }
                static async fetchAllPoolKeys(e, t, n) {
                    let i = (await Promise.all(Object.entries(t3).map(([n, i]) => {
                            try {
                                return e.getProgramAccounts(t[Number(n)], {
                                    filters: [{
                                        dataSize: i.span
                                    }]
                                }).then(e => e.map(e => ({
                                    id: e.pubkey,
                                    version: Number(n),
                                    programId: t[Number(n)],
                                    ...i.decode(e.account.data)
                                })))
                            } catch (e) {
                                if (e instanceof Error) return rK.throwError("failed to fetch pool info", U.errors.RPC_ERROR, {
                                    message: e.message
                                })
                            }
                        }))).flat(),
                        r = i.map(e => e.marketId),
                        o = {};
                    try {
                        for (let t of (await G(e, r, n))) {
                            if (null === t) continue;
                            let e = {
                                programId: t.owner,
                                ...rR.decode(t.data)
                            };
                            o[e.ownAddress.toString()] = e
                        }
                    } catch (e) {
                        if (e instanceof Error) return rK.throwError("failed to fetch markets", U.errors.RPC_ERROR, {
                            message: e.message
                        })
                    }
                    let s = {};
                    for (let [e, n] of Object.entries(t)) s[e] = this.getAssociatedAuthority({
                        programId: n
                    }).publicKey;
                    let a = [];
                    for (let e of i) {
                        if (void 0 === e || e.baseMint.equals(d.PublicKey.default)) continue;
                        let t = o[e.marketId.toString()],
                            n = t.programId;
                        a.push({
                            id: e.id,
                            baseMint: e.baseMint,
                            quoteMint: e.quoteMint,
                            lpMint: e.lpMint,
                            baseDecimals: e.baseDecimal.toNumber(),
                            quoteDecimals: e.quoteDecimal.toNumber(),
                            lpDecimals: "6kmMMacvoCKBkBrqssLEdFuEZu2wqtLdNQxh9VjtzfwT" === e.id.toString() ? 5 : e.baseDecimal.toNumber(),
                            version: e.version,
                            programId: e.programId,
                            authority: s[e.version],
                            openOrders: e.openOrders,
                            targetOrders: e.targetOrders,
                            baseVault: e.baseVault,
                            quoteVault: e.quoteVault,
                            marketVersion: 3,
                            marketProgramId: n,
                            marketId: t.ownAddress,
                            marketAuthority: rq.getAssociatedAuthority({
                                programId: n,
                                marketId: t.ownAddress
                            }).publicKey,
                            marketBaseVault: t.baseVault,
                            marketQuoteVault: t.quoteVault,
                            marketBids: t.bids,
                            marketAsks: t.asks,
                            marketEventQueue: t.eventQueue,
                            ...5 === e.version ? {
                                modelDataAccount: e.modelDataAccount,
                                withdrawQueue: d.PublicKey.default,
                                lpVault: d.PublicKey.default
                            } : {
                                withdrawQueue: e.withdrawQueue,
                                lpVault: e.lpVault
                            },
                            lookupTableAccount: d.PublicKey.default
                        })
                    }
                    return a
                }
                static async fetchInfo({
                    connection: e,
                    poolKeys: t
                }) {
                    let n = await this.fetchMultipleInfo({
                        connection: e,
                        pools: [t]
                    });
                    return rK.assertArgument(1 === n.length, `fetchInfo failed, ${n.length} pools found`, "poolKeys.id", t.id), n[0]
                }
                static async fetchMultipleInfo({
                    connection: e,
                    pools: t,
                    config: n
                }) {
                    await rH(e);
                    let i = t.map(e => this.makeSimulatePoolInfoInstruction({
                        poolKeys: e
                    }));
                    return (await j(e, i.map(e => e.innerTransaction.instructions).flat(), "GetPoolData")).map(e => {
                        let t = function(e, t) {
                                let n = e.match(/{["\w:,]+}/g);
                                return n && 1 === n.length ? n[0] : X.throwArgumentError("simulate log fail to match json", "keyword", t)
                            }(e, "GetPoolData"),
                            n = new(P())(Z(t, "status")),
                            i = Number(Z(t, "coin_decimals")),
                            r = Number(Z(t, "pc_decimals")),
                            o = Number(Z(t, "lp_decimals")),
                            s = new(P())(Z(t, "pool_coin_amount")),
                            a = new(P())(Z(t, "pool_pc_amount")),
                            c = new(P())(Z(t, "pool_lp_supply")),
                            u = "0";
                        try {
                            u = Z(t, "pool_open_time")
                        } catch (e) {}
                        return {
                            status: n,
                            baseDecimals: i,
                            quoteDecimals: r,
                            lpDecimals: o,
                            baseReserve: s,
                            quoteReserve: a,
                            lpSupply: c,
                            startTime: new(P())(u)
                        }
                    })
                }
                static getEnabledFeatures(e) {
                    let {
                        status: t
                    } = e, n = t.toNumber();
                    if (n === c.Uninitialized) return {
                        swap: !1,
                        addLiquidity: !1,
                        removeLiquidity: !1
                    };
                    if (n === c.Initialized) return {
                        swap: !0,
                        addLiquidity: !0,
                        removeLiquidity: !0
                    };
                    if (n === c.Disabled) return {
                        swap: !1,
                        addLiquidity: !1,
                        removeLiquidity: !1
                    }; {
                        if (n === c.RemoveLiquidityOnly) return {
                            swap: !1,
                            addLiquidity: !1,
                            removeLiquidity: !0
                        };
                        if (n === c.LiquidityOnly || n === c.OrderBook) return {
                            swap: !1,
                            addLiquidity: !0,
                            removeLiquidity: !0
                        };
                        if (n === c.Swap) return {
                            swap: !0,
                            addLiquidity: !0,
                            removeLiquidity: !0
                        };
                        if (n !== c.WaitingForStart) return {
                            swap: !1,
                            addLiquidity: !1,
                            removeLiquidity: !1
                        };
                        let {
                            startTime: t
                        } = e;
                        return Date.now() / 1e3 < t.toNumber() ? {
                            swap: !1,
                            addLiquidity: !0,
                            removeLiquidity: !0
                        } : {
                            swap: !0,
                            addLiquidity: !0,
                            removeLiquidity: !0
                        }
                    }
                }
                static includesToken(e, t) {
                    let {
                        baseMint: n,
                        quoteMint: i
                    } = t;
                    return e.mint.equals(n) || e.mint.equals(i)
                }
                static _getTokenSide(e, t) {
                    let {
                        baseMint: n,
                        quoteMint: i
                    } = t;
                    return e.mint.equals(n) ? "base" : e.mint.equals(i) ? "quote" : rK.throwArgumentError("token not match with pool", "params", {
                        token: e.mint,
                        baseMint: n,
                        quoteMint: i
                    })
                }
                static _getTokensSide(e, t, n) {
                    let {
                        baseMint: i,
                        quoteMint: r
                    } = n, o = this._getTokenSide(e, n), s = this._getTokenSide(t, n);
                    return rK.assertArgument(o !== s, "tokens not match with pool", "params", {
                        tokenA: e.mint,
                        tokenB: t.mint,
                        baseMint: i,
                        quoteMint: r
                    }), [o, s]
                }
                static _getAmountSide(e, t) {
                    let n = e instanceof eR ? e.token : eg.WSOL;
                    return this._getTokenSide(n, t)
                }
                static _getAmountsSide(e, t, n) {
                    let i = e instanceof eR ? e.token : eg.WSOL,
                        r = t instanceof eR ? t.token : eg.WSOL;
                    return this._getTokensSide(i, r, n)
                }
                static computeAnotherAmount({
                    poolKeys: e,
                    poolInfo: t,
                    amount: n,
                    anotherCurrency: i,
                    slippage: r
                }) {
                    let {
                        baseReserve: o,
                        quoteReserve: s
                    } = t;
                    rK.debug("baseReserve:", o.toString()), rK.debug("quoteReserve:", s.toString());
                    let a = n instanceof eR ? n.token : n.currency;
                    rK.debug("currencyIn:", a), rK.debug("amount:", n.toFixed()), rK.debug("anotherCurrency:", i), rK.debug("slippage:", `${r.toSignificant()}%`);
                    let c = this._getAmountSide(n, e);
                    rK.debug("input side:", c);
                    let u = ei;
                    n.isZero() || (u = "base" === c ? eu(n.raw.mul(s), o) : eu(n.raw.mul(o), s));
                    let l = eu(n.raw.mul(t.lpSupply), "base" === c ? t.baseReserve : t.quoteReserve),
                        m = new eO(er).add(r).mul(u).quotient,
                        d = i instanceof eg ? new eR(i, u) : new eD(i, u),
                        p = i instanceof eg ? new eR(i, m) : new eD(i, m);
                    return rK.debug("anotheAmount:", d.toFixed()), rK.debug("maxAnotheAmount:", p.toFixed()), {
                        anotherAmount: d,
                        maxAnotherAmount: p,
                        liquidity: l
                    }
                }
                static _computePriceImpact(e, t, n) {
                    let i = e.raw.mul(t),
                        r = i.sub(n).div(i);
                    return new eO(r.numerator, r.denominator)
                }
                static getRate(e) {
                    let {
                        baseReserve: t,
                        quoteReserve: n,
                        baseDecimals: i,
                        quoteDecimals: r
                    } = e;
                    return new eq(new ef(i), t, new ef(r), n)
                }
                static computeAmountIn({
                    poolKeys: e,
                    poolInfo: t,
                    amountOut: n,
                    currencyIn: i,
                    slippage: r
                }) {
                    let {
                        baseReserve: o,
                        quoteReserve: s
                    } = t;
                    rK.debug("baseReserve:", o.toString()), rK.debug("quoteReserve:", s.toString());
                    let a = n instanceof eR ? n.token : n.currency;
                    rK.debug("currencyOut:", a), rK.debug("amountOut:", n.toFixed()), rK.debug("currencyIn:", i), rK.debug("slippage:", `${r.toSignificant()}%`);
                    let c = [o, s],
                        u = this._getAmountSide(n, e);
                    "base" === u && c.reverse(), rK.debug("output side:", u);
                    let [l, m] = c, d = new eq(i, l, a, m);
                    rK.debug("currentPrice:", `1 ${i.symbol} ≈ ${d.toFixed()} ${a.symbol}`), rK.debug("currentPrice invert:", `1 ${a.symbol} ≈ ${d.invert().toFixed()} ${i.symbol}`);
                    let p = ei,
                        f = n.raw;
                    if (!f.isZero()) {
                        f.gt(m) && (f = m.sub(er));
                        let e = m.sub(f);
                        p = l.mul(f).div(e).mul(rG).div(rG.sub(rX))
                    }
                    let g = new eO(er).add(r).mul(p).quotient,
                        w = i instanceof eg ? new eR(i, p) : new eD(i, p),
                        S = i instanceof eg ? new eR(i, g) : new eD(i, g);
                    rK.debug("amountIn:", w.toFixed()), rK.debug("maxAmountIn:", S.toFixed());
                    let h = null;
                    p.isZero() || f.isZero() || (h = new eq(i, p, a, f), rK.debug("executionPrice:", `1 ${i.symbol} ≈ ${h.toFixed()} ${a.symbol}`), rK.debug("executionPrice invert:", `1 ${a.symbol} ≈ ${h.invert().toFixed()} ${i.symbol}`));
                    let y = this._computePriceImpact(d, p, f);
                    return rK.debug("priceImpact:", `${y.toSignificant()}%`), {
                        amountIn: w,
                        maxAmountIn: S,
                        currentPrice: d,
                        executionPrice: h,
                        priceImpact: y
                    }
                }
            }
            a = rz, rz.computeAmountOut = ({
                poolKeys: e,
                poolInfo: t,
                amountIn: n,
                currencyOut: i,
                slippage: r
            }) => {
                let o;
                let s = n instanceof eR ? n.token : eg.WSOL,
                    c = i instanceof eg ? i : eg.WSOL;
                rK.assertArgument(a.includesToken(s, e) && a.includesToken(c, e), "token not match with pool", "poolKeys", {
                    poolKeys: e,
                    tokenIn: s,
                    tokenOut: c
                });
                let {
                    baseReserve: u,
                    quoteReserve: l
                } = t;
                rK.debug("baseReserve:", u.toString()), rK.debug("quoteReserve:", l.toString());
                let m = n instanceof eR ? n.token : n.currency;
                rK.debug("currencyIn:", m), rK.debug("amountIn:", n.toFixed()), rK.debug("currencyOut:", i), rK.debug("slippage:", `${r.toSignificant()}%`);
                let d = [u, l],
                    p = a._getAmountSide(n, e);
                "quote" === p && d.reverse(), rK.debug("input side:", p);
                let [f, g] = d;
                if (4 === e.version) o = new eq(m, f, i, g);
                else {
                    let e = function(e, t, n, i) {
                        let r = function(e, t) {
                            let n = rW(e, t, 0, !1);
                            return n[3] ? n[0] : 0
                        }(e, rN(e, t, rx(e, t, n))) / e.multiplier;
                        return i ? r : 1 / r
                    }(rY, u.toNumber(), l.toNumber(), !1);
                    o = "quote" === p ? new eq(m, new(P())(1e6 * e), i, new(P())(1e6)) : new eq(m, new(P())(1e6), i, new(P())(1e6 * e))
                }
                rK.debug("currentPrice:", `1 ${m.symbol} ≈ ${o.toFixed()} ${i.symbol}`), rK.debug("currentPrice invert:", `1 ${i.symbol} ≈ ${o.invert().toFixed()} ${m.symbol}`);
                let w = n.raw,
                    S = ei,
                    h = ei;
                if (!w.isZero()) {
                    if (4 === e.version) {
                        h = tP(w.mul(rX), rG);
                        let e = w.sub(h),
                            t = f.add(e);
                        S = g.mul(e).div(t)
                    } else {
                        h = w.mul(new(P())(2)).div(new(P())(1e4));
                        let e = w.sub(h);
                        S = new(P())("quote" === p ? function(e, t, n, i) {
                            let r = rx(e, t, n),
                                o = rN(e, t, r),
                                s = rN(e, n, r),
                                a = rN(e, i, r),
                                [c, u, l, m] = rW(e, o, a, !0);
                            return m ? l ? i * e.multiplier / c : rM(e, s - u, r) : 0
                        }(rY, l.toNumber(), u.toNumber(), e.toNumber()) : function(e, t, n, i) {
                            let r = rx(e, t, n),
                                o = rN(e, t, r),
                                s = rN(e, n, r),
                                a = rN(e, i, r),
                                [c, u, l, m] = function(e, t, n, i) {
                                    let r = i ? t - n : t + n,
                                        [o, s, a] = function(e, t) {
                                            let [n, i] = [0, 49998], r = n, o = i, s = 0;
                                            for (; r <= o && !((s = Math.floor((o + r) / 2)) <= 0) && !(s >= 49998);) {
                                                let n = e.DataElement[s].y,
                                                    i = e.DataElement[s - 1].y,
                                                    a = e.DataElement[s + 1].y;
                                                if (t === n) return [s, s, !0];
                                                if (t === i) return [s - 1, s - 1, !0];
                                                if (t === a) return [s + 1, s + 1, !0];
                                                if (t < a) r = s + 1;
                                                else {
                                                    if (t < i && t > n) return [s - 1, s, !0];
                                                    if (t < n && t > a) return [s, s + 1, !0];
                                                    o = s - 1
                                                }
                                            }
                                            return [s, s, !1]
                                        }(e, r);
                                    if (!a) return [0, 0, !1, a];
                                    if (o === s) return [e.DataElement[s].price, e.DataElement[s].x, !1, a]; {
                                        let n = e.DataElement[o].x,
                                            c = e.DataElement[s].x,
                                            u = e.DataElement[o].price,
                                            l = e.DataElement[s].price,
                                            m = e.DataElement[o].y,
                                            d = e.DataElement[s].y;
                                        if (t >= d && t <= m) return i ? [l, c, !0, a] : [u, n, !0, a]; {
                                            let o, s;
                                            return i ? (o = u + (l - u) * (m - t) / (m - d), s = n + l * (m - r) / e.multiplier) : (o = u + (l - u) * (m - t) / (m - d), s = c - u * (r - d) / e.multiplier), [o, s, !1, a]
                                        }
                                    }
                                }(e, s, a, !1);
                            return m ? l ? i * c / e.multiplier : rM(e, o - u, r) : 0
                        }(rY, l.toNumber(), u.toNumber(), e.toNumber()))
                    }
                }
                let y = new eO(er).add(r).invert().mul(S).quotient,
                    A = i instanceof eg ? new eR(i, S) : new eD(i, S),
                    b = i instanceof eg ? new eR(i, y) : new eD(i, y);
                rK.debug("amountOut:", A.toFixed()), rK.debug("minAmountOut:", b.toFixed());
                let k = new eq(m, w.sub(h), i, S);
                w.isZero() || S.isZero() || (k = new eq(m, w.sub(h), i, S), rK.debug("executionPrice:", `1 ${m.symbol} ≈ ${k.toFixed()} ${i.symbol}`), rK.debug("executionPrice invert:", `1 ${i.symbol} ≈ ${k.invert().toFixed()} ${m.symbol}`));
                let T = k.denominator.mul(o.numerator),
                    I = new eO(k.numerator.mul(o.denominator).sub(T).abs(), T);
                return rK.debug("priceImpact:", `${I.toSignificant()}%`), {
                    amountOut: A,
                    minAmountOut: b,
                    currentPrice: o,
                    executionPrice: k,
                    priceImpact: I,
                    fee: m instanceof eg ? new eR(m, h) : new eD(m, h)
                }
            }, new d.PublicKey("9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin"), new d.PublicKey("srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX"), new d.PublicKey("CLaimxFqjHzgTJtAGHU47NPhg6qrc5sCnpC4tBLyABQS"), new d.PublicKey("EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q"), new d.PublicKey("9KEPoZmtHUrBbhWN1v1KWLMkkvwY6WLtAVUCPRtRjP4z"), new d.PublicKey("FarmqiPv5eAj3j1GMdMCMUGXqPUvmquZtMy86QH6rzhG"), new d.PublicKey("675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8"), new d.PublicKey("5quBtoiQqxF9Jv6KYKctB59NT3gtJD2Y65kdnB1Uev3h"), new d.PublicKey("CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK"), new d.PublicKey("routeUGWgWzqBWFcrCfv8tritsqukccJPu3q5GPP3xS"), d.PublicKey.default, new d.PublicKey("EoTcMgcDRTJVZDMZWBoU6rhYHZfkNTVEAfz3uUJRcYGj"), d.PublicKey.default, new d.PublicKey("85BFyr98MbCUU9MVTEgzx1nbhWACbJqLzho6zd6DZcWL"), new d.PublicKey("EcLzTrNg9V7qhcdyXDe2qjtPkiGzDM2UbdRaeaadU5r2"), new d.PublicKey("Farm2hJLcqPtPg8M4rR6DMrsRNc5TPm5Cs4bVQrMe2T7"), new d.PublicKey("HWy1jotHpo6UqeQxx49dpYYdQB8wj9Qk9MdxwjLvDHB8"), new d.PublicKey("DDg4VmQaJV9ogWce7LpcjBA9bv22wRp5uaTPa5pGjijF"), new d.PublicKey("devi51mZmdwUJGU9hjN27vEz64Gps7uUefqxg27EAtH"), new d.PublicKey("BVChZ3XFEwTMUk1o9i3HAf91H6mFxSwa5X2wFAWhYPhU"), n(67133).Buffer, n(67133).Buffer, e5([eY(5), function(e = "accountFlags") {
                let t = new ez(e);
                return t.addBoolean("initialized"), t.addBoolean("market"), t.addBoolean("openOrders"), t.addBoolean("requestQueue"), t.addBoolean("eventQueue"), t.addBoolean("bids"), t.addBoolean("asks"), t
            }("accountFlags"), e0("ownAddress"), eZ("vaultSignerNonce"), e0("baseMint"), e0("quoteMint"), e0("baseVault"), eZ("baseDepositsTotal"), eZ("baseFeesAccrued"), e0("quoteVault"), eZ("quoteDepositsTotal"), eZ("quoteFeesAccrued"), eZ("quoteDustThreshold"), e0("requestQueue"), e0("eventQueue"), e0("bids"), e0("asks"), eZ("baseLotSize"), eZ("quoteLotSize"), eZ("feeRateBps"), eZ("referrerRebatesAccrued"), eY(7)]);
            var rQ = n(67133).Buffer;
            class rj extends tw {
                static getPdaPoolId(e, t) {
                    return W([this.SEED_CONFIG.pool.id, t.toBuffer()], e)
                }
                static getPdaOwnerId(e, t, n, i) {
                    return W([this.SEED_CONFIG.owner.id, t.toBuffer(), n.toBuffer(), rQ.from(new(P())(i).toArray())], e)
                }
                static async getAllInfo({
                    connection: e,
                    programId: t,
                    poolIds: n,
                    wallet: i,
                    chainTime: r
                }) {
                    if (0 === n.length) return [];
                    let o = n.map(e => this.getPdaPoolId(t, e).publicKey),
                        s = [];
                    for (let e = 0; e < this.VERSION_PROJECT.length; e++) s.push(...o.map(n => this.getPdaOwnerId(t, n, i, e).publicKey));
                    let a = await G(e, [...o, ...s]),
                        c = [];
                    for (let e = 0; e < a.length; e++) {
                        let i = Math.floor(e / n.length),
                            u = e % n.length,
                            m = o[u],
                            d = s[e],
                            p = a[u],
                            f = a[n.length + e];
                        if (!(p && f) || p.data.length !== this.POOL_LAYOUT.span || f.data.length !== this.OWNER_LAYOUT.span) continue;
                        let g = this.POOL_LAYOUT.decode(p.data),
                            w = this.OWNER_LAYOUT.decode(f.data),
                            S = g.openTime.toNumber(),
                            h = g.endTime.toNumber(),
                            y = 3 !== w.tokenInfo.map(e => e.debtAmount.gt(new(P())(0))).filter(e => !e).length,
                            A = r > S && r < h && 1 === g.status,
                            b = y && A;
                        c.push({
                            programId: t,
                            poolId: m,
                            ammId: g.ammId,
                            ownerAccountId: d,
                            snapshotLpAmount: w.lpAmount,
                            project: this.VERSION_PROJECT[i],
                            openTime: S,
                            endTime: h,
                            canClaim: b,
                            canClaimErrorType: y ? A ? void 0 : "outOfOperationalTime" : "alreadyClaimIt",
                            tokenInfo: g.tokenInfo.map((e, t) => ({
                                programId: l.H_,
                                mintAddress: e.mintAddress,
                                mintVault: e.mintVault,
                                mintDecimals: e.mintDecimals,
                                perLpLoss: e.perLpLoss,
                                debtAmount: w.tokenInfo[t].debtAmount.add(w.tokenInfo[t].claimedAmount)
                            }))
                        })
                    }
                    return c
                }
                static async makeClaimInstructionSimple({
                    connection: e,
                    poolInfo: t,
                    ownerInfo: n,
                    makeTxVersion: i,
                    lookupTableCache: r
                }) {
                    let o = [],
                        s = [],
                        a = [],
                        c = [],
                        u = [],
                        l = [],
                        m = [],
                        d = [];
                    for (let i of t.tokenInfo) d.push(await this._selectOrCreateTokenAccount({
                        programId: i.programId,
                        mint: i.mintAddress,
                        tokenAccounts: i.mintAddress.equals(eg.WSOL.mint) ? [] : n.tokenAccounts,
                        owner: n.wallet,
                        createInfo: {
                            connection: e,
                            payer: n.wallet,
                            amount: 0,
                            frontInstructions: o,
                            endInstructions: i.mintAddress.equals(eg.WSOL.mint) ? a : [],
                            frontInstructionsType: s,
                            endInstructionsType: c,
                            signers: m
                        },
                        associatedOnly: !i.mintAddress.equals(eg.WSOL.mint) && n.associatedOnly,
                        checkCreateATAOwner: n.checkCreateATAOwner
                    }));
                    return u.push(this.makeClaimInstruction({
                        programId: t.programId,
                        poolInfo: t,
                        ownerInfo: {
                            wallet: n.wallet,
                            ownerPda: t.ownerAccountId,
                            claimAddress: d
                        }
                    })), l.push(nc.util1216OwnerClaim), {
                        address: {},
                        innerTransactions: await $({
                            connection: e,
                            makeTxVersion: i,
                            computeBudgetConfig: void 0,
                            payer: n.wallet,
                            innerTransaction: [{
                                instructionTypes: s,
                                instructions: o,
                                signers: m
                            }, {
                                instructionTypes: l,
                                instructions: u,
                                signers: []
                            }, {
                                instructionTypes: c,
                                instructions: a,
                                signers: []
                            }],
                            lookupTableCache: r
                        })
                    }
                }
                static async makeClaimAllInstructionSimple({
                    connection: e,
                    poolInfos: t,
                    ownerInfo: n,
                    makeTxVersion: i,
                    lookupTableCache: r
                }) {
                    let o = [],
                        s = [],
                        a = [],
                        c = [],
                        u = [],
                        l = [],
                        m = [],
                        d = {};
                    for (let i of t) {
                        let t = [];
                        for (let r of i.tokenInfo) {
                            let i = d[r.mintAddress.toString()] ? ? await this._selectOrCreateTokenAccount({
                                programId: r.programId,
                                mint: r.mintAddress,
                                tokenAccounts: r.mintAddress.equals(eg.WSOL.mint) ? [] : n.tokenAccounts,
                                owner: n.wallet,
                                createInfo: {
                                    connection: e,
                                    payer: n.wallet,
                                    amount: 0,
                                    frontInstructions: o,
                                    endInstructions: r.mintAddress.equals(eg.WSOL.mint) ? a : [],
                                    frontInstructionsType: s,
                                    endInstructionsType: c,
                                    signers: m
                                },
                                associatedOnly: !r.mintAddress.equals(eg.WSOL.mint) && n.associatedOnly,
                                checkCreateATAOwner: n.checkCreateATAOwner
                            });
                            d[r.mintAddress.toString()] = i, t.push(i)
                        }
                        u.push(this.makeClaimInstruction({
                            programId: i.programId,
                            poolInfo: i,
                            ownerInfo: {
                                wallet: n.wallet,
                                ownerPda: i.ownerAccountId,
                                claimAddress: t
                            }
                        })), l.push(nc.util1216OwnerClaim)
                    }
                    return {
                        address: {},
                        innerTransactions: await $({
                            connection: e,
                            makeTxVersion: i,
                            computeBudgetConfig: void 0,
                            payer: n.wallet,
                            innerTransaction: [{
                                instructionTypes: s,
                                instructions: o,
                                signers: m
                            }, {
                                instructionTypes: l,
                                instructions: u,
                                signers: []
                            }, {
                                instructionTypes: c,
                                instructions: a,
                                signers: []
                            }],
                            lookupTableCache: r
                        })
                    }
                }
                static makeClaimInstruction({
                    programId: e,
                    poolInfo: t,
                    ownerInfo: n
                }) {
                    let i = e5([]),
                        r = [{
                            pubkey: n.wallet,
                            isSigner: !0,
                            isWritable: !0
                        }, {
                            pubkey: t.poolId,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: n.ownerPda,
                            isSigner: !1,
                            isWritable: !0
                        }, ...n.claimAddress.map(e => ({
                            pubkey: e,
                            isSigner: !1,
                            isWritable: !0
                        })), ...t.tokenInfo.map(({
                            mintVault: e
                        }) => ({
                            pubkey: e,
                            isSigner: !1,
                            isWritable: !0
                        })), {
                            pubkey: l.H_,
                            isSigner: !1,
                            isWritable: !1
                        }],
                        o = rQ.alloc(i.span);
                    i.encode({}, o);
                    let s = rQ.from([10, 66, 208, 184, 161, 6, 191, 98, ...o]);
                    return new d.TransactionInstruction({
                        keys: r,
                        programId: e,
                        data: s
                    })
                }
            }
            rj.CLAIMED_NUM = 3, rj.POOL_LAYOUT = e5([eY(8), eQ("bump"), eQ("status"), eZ("openTime"), eZ("endTime"), e0("ammId"), e8(e5([eQ("mintDecimals"), e0("mintAddress"), e0("mintVault"), eZ("perLpLoss"), eZ("totalClaimedAmount")]), rj.CLAIMED_NUM, "tokenInfo"), e8(eZ(), 10, "padding")]), rj.OWNER_LAYOUT = e5([eY(8), eQ("bump"), eQ("version"), e0("poolId"), e0("owner"), eZ("lpAmount"), e8(e5([e0("mintAddress"), eZ("debtAmount"), eZ("claimedAmount")]), rj.CLAIMED_NUM, "tokenInfo"), e8(eZ(), 4, "padding")]), rj.DEFAULT_POOL_ID = ["58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2", "6UmmUiYoBjSrhakAobJw8BvkmJtDVxaeBtbt7rxWo1mg", "AVs9TA4nWDzfPJE9gGVNJMVhcQy3V9PGazuz33BfG2RA", "DVa7Qmb5ct9RCpaU7UTpSaf3GVMYz17vNVU67XpdCRut", "7XawhbbxtsRcQA8KTkHT9f9nc6d69UwqCDh6U5EEbEmX", "6a1CsrpeZubDjEJE9s1CMVheB6HWM5d7m1cj2jkhyXhj", "EoNrn8iUhwgJySD1pHu8Qxm5gSQqLK3za4m8xzD2RuEb", "AceAyRTWt4PyB2pHqf2qhDgNZDtKVNaxgL8Ru3V4aN1P", "6tmFJbMk5yVHFcFy7X2K8RwHjKLr6KVFLYXpgpBNeAxB"].map(e => new d.PublicKey(e)), rj.SEED_CONFIG = {
                pool: {
                    id: rQ.from("pool_seed", "utf8")
                },
                owner: {
                    id: rQ.from("user_claim_seed", "utf8")
                }
            }, rj.VERSION_PROJECT = [void 0, "Francium", "Tulip", "Larix"]
        },
        30539: function(e, t, n) {
            var i; /*! decimal.js-light v2.5.1 https://github.com/MikeMcl/decimal.js-light/LICENCE */
            ! function(r) {
                "use strict";
                var o, s = {
                        precision: 20,
                        rounding: 4,
                        toExpNeg: -7,
                        toExpPos: 21,
                        LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
                    },
                    a = !0,
                    c = "[DecimalError] ",
                    u = c + "Invalid argument: ",
                    l = c + "Exponent out of range: ",
                    m = Math.floor,
                    d = Math.pow,
                    p = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
                    f = m(1286742750677284.5),
                    g = {};

                function w(e, t) {
                    var n, i, r, o, s, c, u, l, m = e.constructor,
                        d = m.precision;
                    if (!e.s || !t.s) return t.s || (t = new m(e)), a ? v(t, d) : t;
                    if (u = e.d, l = t.d, s = e.e, r = t.e, u = u.slice(), o = s - r) {
                        for (o < 0 ? (i = u, o = -o, c = l.length) : (i = l, r = s, c = u.length), o > (c = (s = Math.ceil(d / 7)) > c ? s + 1 : c + 1) && (o = c, i.length = 1), i.reverse(); o--;) i.push(0);
                        i.reverse()
                    }
                    for ((c = u.length) - (o = l.length) < 0 && (o = c, i = l, l = u, u = i), n = 0; o;) n = (u[--o] = u[o] + l[o] + n) / 1e7 | 0, u[o] %= 1e7;
                    for (n && (u.unshift(n), ++r), c = u.length; 0 == u[--c];) u.pop();
                    return t.d = u, t.e = r, a ? v(t, d) : t
                }

                function S(e, t, n) {
                    if (e !== ~~e || e < t || e > n) throw Error(u + e)
                }

                function h(e) {
                    var t, n, i, r = e.length - 1,
                        o = "",
                        s = e[0];
                    if (r > 0) {
                        for (o += s, t = 1; t < r; t++)(n = 7 - (i = e[t] + "").length) && (o += T(n)), o += i;
                        (n = 7 - (i = (s = e[t]) + "").length) && (o += T(n))
                    } else if (0 === s) return "0";
                    for (; s % 10 == 0;) s /= 10;
                    return o + s
                }
                g.absoluteValue = g.abs = function() {
                    var e = new this.constructor(this);
                    return e.s && (e.s = 1), e
                }, g.comparedTo = g.cmp = function(e) {
                    var t, n, i, r;
                    if (e = new this.constructor(e), this.s !== e.s) return this.s || -e.s;
                    if (this.e !== e.e) return this.e > e.e ^ this.s < 0 ? 1 : -1;
                    for (t = 0, n = (i = this.d.length) < (r = e.d.length) ? i : r; t < n; ++t)
                        if (this.d[t] !== e.d[t]) return this.d[t] > e.d[t] ^ this.s < 0 ? 1 : -1;
                    return i === r ? 0 : i > r ^ this.s < 0 ? 1 : -1
                }, g.decimalPlaces = g.dp = function() {
                    var e = this.d.length - 1,
                        t = (e - this.e) * 7;
                    if (e = this.d[e])
                        for (; e % 10 == 0; e /= 10) t--;
                    return t < 0 ? 0 : t
                }, g.dividedBy = g.div = function(e) {
                    return y(this, new this.constructor(e))
                }, g.dividedToIntegerBy = g.idiv = function(e) {
                    var t = this.constructor;
                    return v(y(this, new t(e), 0, 1), t.precision)
                }, g.equals = g.eq = function(e) {
                    return !this.cmp(e)
                }, g.exponent = function() {
                    return b(this)
                }, g.greaterThan = g.gt = function(e) {
                    return this.cmp(e) > 0
                }, g.greaterThanOrEqualTo = g.gte = function(e) {
                    return this.cmp(e) >= 0
                }, g.isInteger = g.isint = function() {
                    return this.e > this.d.length - 2
                }, g.isNegative = g.isneg = function() {
                    return this.s < 0
                }, g.isPositive = g.ispos = function() {
                    return this.s > 0
                }, g.isZero = function() {
                    return 0 === this.s
                }, g.lessThan = g.lt = function(e) {
                    return 0 > this.cmp(e)
                }, g.lessThanOrEqualTo = g.lte = function(e) {
                    return 1 > this.cmp(e)
                }, g.logarithm = g.log = function(e) {
                    var t, n = this.constructor,
                        i = n.precision,
                        r = i + 5;
                    if (void 0 === e) e = new n(10);
                    else if ((e = new n(e)).s < 1 || e.eq(o)) throw Error(c + "NaN");
                    if (this.s < 1) throw Error(c + (this.s ? "NaN" : "-Infinity"));
                    return this.eq(o) ? new n(0) : (a = !1, t = y(I(this, r), I(e, r), r), a = !0, v(t, i))
                }, g.minus = g.sub = function(e) {
                    return e = new this.constructor(e), this.s == e.s ? C(this, e) : w(this, (e.s = -e.s, e))
                }, g.modulo = g.mod = function(e) {
                    var t, n = this.constructor,
                        i = n.precision;
                    if (!(e = new n(e)).s) throw Error(c + "NaN");
                    return this.s ? (a = !1, t = y(this, e, 0, 1).times(e), a = !0, this.minus(t)) : v(new n(this), i)
                }, g.naturalExponential = g.exp = function() {
                    return A(this)
                }, g.naturalLogarithm = g.ln = function() {
                    return I(this)
                }, g.negated = g.neg = function() {
                    var e = new this.constructor(this);
                    return e.s = -e.s || 0, e
                }, g.plus = g.add = function(e) {
                    return e = new this.constructor(e), this.s == e.s ? w(this, e) : C(this, (e.s = -e.s, e))
                }, g.precision = g.sd = function(e) {
                    var t, n, i;
                    if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(u + e);
                    if (t = b(this) + 1, n = 7 * (i = this.d.length - 1) + 1, i = this.d[i]) {
                        for (; i % 10 == 0; i /= 10) n--;
                        for (i = this.d[0]; i >= 10; i /= 10) n++
                    }
                    return e && t > n ? t : n
                }, g.squareRoot = g.sqrt = function() {
                    var e, t, n, i, r, o, s, u = this.constructor;
                    if (this.s < 1) {
                        if (!this.s) return new u(0);
                        throw Error(c + "NaN")
                    }
                    for (e = b(this), a = !1, 0 == (r = Math.sqrt(+this)) || r == 1 / 0 ? (((t = h(this.d)).length + e) % 2 == 0 && (t += "0"), r = Math.sqrt(t), e = m((e + 1) / 2) - (e < 0 || e % 2), i = new u(t = r == 1 / 0 ? "5e" + e : (t = r.toExponential()).slice(0, t.indexOf("e") + 1) + e)) : i = new u(r.toString()), r = s = (n = u.precision) + 3;;)
                        if (i = (o = i).plus(y(this, o, s + 2)).times(.5), h(o.d).slice(0, s) === (t = h(i.d)).slice(0, s)) {
                            if (t = t.slice(s - 3, s + 1), r == s && "4999" == t) {
                                if (v(o, n + 1, 0), o.times(o).eq(this)) {
                                    i = o;
                                    break
                                }
                            } else if ("9999" != t) break;
                            s += 4
                        }
                    return a = !0, v(i, n)
                }, g.times = g.mul = function(e) {
                    var t, n, i, r, o, s, c, u, l, m = this.constructor,
                        d = this.d,
                        p = (e = new m(e)).d;
                    if (!this.s || !e.s) return new m(0);
                    for (e.s *= this.s, n = this.e + e.e, (u = d.length) < (l = p.length) && (o = d, d = p, p = o, s = u, u = l, l = s), o = [], i = s = u + l; i--;) o.push(0);
                    for (i = l; --i >= 0;) {
                        for (t = 0, r = u + i; r > i;) c = o[r] + p[i] * d[r - i - 1] + t, o[r--] = c % 1e7 | 0, t = c / 1e7 | 0;
                        o[r] = (o[r] + t) % 1e7 | 0
                    }
                    for (; !o[--s];) o.pop();
                    return t ? ++n : o.shift(), e.d = o, e.e = n, a ? v(e, m.precision) : e
                }, g.toDecimalPlaces = g.todp = function(e, t) {
                    var n = this,
                        i = n.constructor;
                    return (n = new i(n), void 0 === e) ? n : (S(e, 0, 1e9), void 0 === t ? t = i.rounding : S(t, 0, 8), v(n, e + b(n) + 1, t))
                }, g.toExponential = function(e, t) {
                    var n, i = this,
                        r = i.constructor;
                    return void 0 === e ? n = L(i, !0) : (S(e, 0, 1e9), void 0 === t ? t = r.rounding : S(t, 0, 8), n = L(i = v(new r(i), e + 1, t), !0, e + 1)), n
                }, g.toFixed = function(e, t) {
                    var n, i, r = this.constructor;
                    return void 0 === e ? L(this) : (S(e, 0, 1e9), void 0 === t ? t = r.rounding : S(t, 0, 8), n = L((i = v(new r(this), e + b(this) + 1, t)).abs(), !1, e + b(i) + 1), this.isneg() && !this.isZero() ? "-" + n : n)
                }, g.toInteger = g.toint = function() {
                    var e = this.constructor;
                    return v(new e(this), b(this) + 1, e.rounding)
                }, g.toNumber = function() {
                    return +this
                }, g.toPower = g.pow = function(e) {
                    var t, n, i, r, s, u, l = this,
                        d = l.constructor,
                        p = +(e = new d(e));
                    if (!e.s) return new d(o);
                    if (!(l = new d(l)).s) {
                        if (e.s < 1) throw Error(c + "Infinity");
                        return l
                    }
                    if (l.eq(o)) return l;
                    if (i = d.precision, e.eq(o)) return v(l, i);
                    if (u = (t = e.e) >= (n = e.d.length - 1), s = l.s, u) {
                        if ((n = p < 0 ? -p : p) <= 9007199254740991) {
                            for (r = new d(o), t = Math.ceil(i / 7 + 4), a = !1; n % 2 && D((r = r.times(l)).d, t), 0 !== (n = m(n / 2));) D((l = l.times(l)).d, t);
                            return a = !0, e.s < 0 ? new d(o).div(r) : v(r, i)
                        }
                    } else if (s < 0) throw Error(c + "NaN");
                    return s = s < 0 && 1 & e.d[Math.max(t, n)] ? -1 : 1, l.s = 1, a = !1, r = e.times(I(l, i + 12)), a = !0, (r = A(r)).s = s, r
                }, g.toPrecision = function(e, t) {
                    var n, i, r = this,
                        o = r.constructor;
                    return void 0 === e ? (n = b(r), i = L(r, n <= o.toExpNeg || n >= o.toExpPos)) : (S(e, 1, 1e9), void 0 === t ? t = o.rounding : S(t, 0, 8), n = b(r = v(new o(r), e, t)), i = L(r, e <= n || n <= o.toExpNeg, e)), i
                }, g.toSignificantDigits = g.tosd = function(e, t) {
                    var n = this.constructor;
                    return void 0 === e ? (e = n.precision, t = n.rounding) : (S(e, 1, 1e9), void 0 === t ? t = n.rounding : S(t, 0, 8)), v(new n(this), e, t)
                }, g.toString = g.valueOf = g.val = g.toJSON = function() {
                    var e = b(this),
                        t = this.constructor;
                    return L(this, e <= t.toExpNeg || e >= t.toExpPos)
                };
                var y = function() {
                    function e(e, t) {
                        var n, i = 0,
                            r = e.length;
                        for (e = e.slice(); r--;) n = e[r] * t + i, e[r] = n % 1e7 | 0, i = n / 1e7 | 0;
                        return i && e.unshift(i), e
                    }

                    function t(e, t, n, i) {
                        var r, o;
                        if (n != i) o = n > i ? 1 : -1;
                        else
                            for (r = o = 0; r < n; r++)
                                if (e[r] != t[r]) {
                                    o = e[r] > t[r] ? 1 : -1;
                                    break
                                } return o
                    }

                    function n(e, t, n) {
                        for (var i = 0; n--;) e[n] -= i, i = e[n] < t[n] ? 1 : 0, e[n] = 1e7 * i + e[n] - t[n];
                        for (; !e[0] && e.length > 1;) e.shift()
                    }
                    return function(i, r, o, s) {
                        var a, u, l, m, d, p, f, g, w, S, h, y, A, k, T, I, P, C, L = i.constructor,
                            D = i.s == r.s ? 1 : -1,
                            R = i.d,
                            E = r.d;
                        if (!i.s) return new L(i);
                        if (!r.s) throw Error(c + "Division by zero");
                        for (l = 0, u = i.e - r.e, P = E.length, T = R.length, g = (f = new L(D)).d = []; E[l] == (R[l] || 0);) ++l;
                        if (E[l] > (R[l] || 0) && --u, (y = null == o ? o = L.precision : s ? o + (b(i) - b(r)) + 1 : o) < 0) return new L(0);
                        if (y = y / 7 + 2 | 0, l = 0, 1 == P)
                            for (m = 0, E = E[0], y++;
                                (l < T || m) && y--; l++) A = 1e7 * m + (R[l] || 0), g[l] = A / E | 0, m = A % E | 0;
                        else {
                            for ((m = 1e7 / (E[0] + 1) | 0) > 1 && (E = e(E, m), R = e(R, m), P = E.length, T = R.length), k = P, S = (w = R.slice(0, P)).length; S < P;) w[S++] = 0;
                            (C = E.slice()).unshift(0), I = E[0], E[1] >= 1e7 / 2 && ++I;
                            do m = 0, (a = t(E, w, P, S)) < 0 ? (h = w[0], P != S && (h = 1e7 * h + (w[1] || 0)), (m = h / I | 0) > 1 ? (m >= 1e7 && (m = 1e7 - 1), p = (d = e(E, m)).length, S = w.length, 1 == (a = t(d, w, p, S)) && (m--, n(d, P < p ? C : E, p))) : (0 == m && (a = m = 1), d = E.slice()), (p = d.length) < S && d.unshift(0), n(w, d, S), -1 == a && (S = w.length, (a = t(E, w, P, S)) < 1 && (m++, n(w, P < S ? C : E, S))), S = w.length) : 0 === a && (m++, w = [0]), g[l++] = m, a && w[0] ? w[S++] = R[k] || 0 : (w = [R[k]], S = 1); while ((k++ < T || void 0 !== w[0]) && y--)
                        }
                        return g[0] || g.shift(), f.e = u, v(f, s ? o + b(f) + 1 : o)
                    }
                }();

                function A(e, t) {
                    var n, i, r, s, c, u = 0,
                        m = 0,
                        p = e.constructor,
                        f = p.precision;
                    if (b(e) > 16) throw Error(l + b(e));
                    if (!e.s) return new p(o);
                    for (null == t ? (a = !1, c = f) : c = t, s = new p(.03125); e.abs().gte(.1);) e = e.times(s), m += 5;
                    for (c += Math.log(d(2, m)) / Math.LN10 * 2 + 5 | 0, n = i = r = new p(o), p.precision = c;;) {
                        if (i = v(i.times(e), c), n = n.times(++u), h((s = r.plus(y(i, n, c))).d).slice(0, c) === h(r.d).slice(0, c)) {
                            for (; m--;) r = v(r.times(r), c);
                            return p.precision = f, null == t ? (a = !0, v(r, f)) : r
                        }
                        r = s
                    }
                }

                function b(e) {
                    for (var t = 7 * e.e, n = e.d[0]; n >= 10; n /= 10) t++;
                    return t
                }

                function k(e, t, n) {
                    if (t > e.LN10.sd()) throw a = !0, n && (e.precision = n), Error(c + "LN10 precision limit exceeded");
                    return v(new e(e.LN10), t)
                }

                function T(e) {
                    for (var t = ""; e--;) t += "0";
                    return t
                }

                function I(e, t) {
                    var n, i, r, s, u, l, m, d, p, f = 1,
                        g = e,
                        w = g.d,
                        S = g.constructor,
                        A = S.precision;
                    if (g.s < 1) throw Error(c + (g.s ? "NaN" : "-Infinity"));
                    if (g.eq(o)) return new S(0);
                    if (null == t ? (a = !1, d = A) : d = t, g.eq(10)) return null == t && (a = !0), k(S, d);
                    if (d += 10, S.precision = d, i = (n = h(w)).charAt(0), !(15e14 > Math.abs(s = b(g)))) return m = k(S, d + 2, A).times(s + ""), g = I(new S(i + "." + n.slice(1)), d - 10).plus(m), S.precision = A, null == t ? (a = !0, v(g, A)) : g;
                    for (; i < 7 && 1 != i || 1 == i && n.charAt(1) > 3;) i = (n = h((g = g.times(e)).d)).charAt(0), f++;
                    for (s = b(g), i > 1 ? (g = new S("0." + n), s++) : g = new S(i + "." + n.slice(1)), l = u = g = y(g.minus(o), g.plus(o), d), p = v(g.times(g), d), r = 3;;) {
                        if (u = v(u.times(p), d), h((m = l.plus(y(u, new S(r), d))).d).slice(0, d) === h(l.d).slice(0, d)) return l = l.times(2), 0 !== s && (l = l.plus(k(S, d + 2, A).times(s + ""))), l = y(l, new S(f), d), S.precision = A, null == t ? (a = !0, v(l, A)) : l;
                        l = m, r += 2
                    }
                }

                function P(e, t) {
                    var n, i, r;
                    for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (i = t.search(/e/i)) > 0 ? (n < 0 && (n = i), n += +t.slice(i + 1), t = t.substring(0, i)) : n < 0 && (n = t.length), i = 0; 48 === t.charCodeAt(i);) ++i;
                    for (r = t.length; 48 === t.charCodeAt(r - 1);) --r;
                    if (t = t.slice(i, r)) {
                        if (r -= i, n = n - i - 1, e.e = m(n / 7), e.d = [], i = (n + 1) % 7, n < 0 && (i += 7), i < r) {
                            for (i && e.d.push(+t.slice(0, i)), r -= 7; i < r;) e.d.push(+t.slice(i, i += 7));
                            i = 7 - (t = t.slice(i)).length
                        } else i -= r;
                        for (; i--;) t += "0";
                        if (e.d.push(+t), a && (e.e > f || e.e < -f)) throw Error(l + n)
                    } else e.s = 0, e.e = 0, e.d = [0];
                    return e
                }

                function v(e, t, n) {
                    var i, r, o, s, c, u, p, g, w = e.d;
                    for (s = 1, o = w[0]; o >= 10; o /= 10) s++;
                    if ((i = t - s) < 0) i += 7, r = t, p = w[g = 0];
                    else {
                        if ((g = Math.ceil((i + 1) / 7)) >= (o = w.length)) return e;
                        for (s = 1, p = o = w[g]; o >= 10; o /= 10) s++;
                        i %= 7, r = i - 7 + s
                    }
                    if (void 0 !== n && (c = p / (o = d(10, s - r - 1)) % 10 | 0, u = t < 0 || void 0 !== w[g + 1] || p % o, u = n < 4 ? (c || u) && (0 == n || n == (e.s < 0 ? 3 : 2)) : c > 5 || 5 == c && (4 == n || u || 6 == n && (i > 0 ? r > 0 ? p / d(10, s - r) : 0 : w[g - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7))), t < 1 || !w[0]) return u ? (o = b(e), w.length = 1, t = t - o - 1, w[0] = d(10, (7 - t % 7) % 7), e.e = m(-t / 7) || 0) : (w.length = 1, w[0] = e.e = e.s = 0), e;
                    if (0 == i ? (w.length = g, o = 1, g--) : (w.length = g + 1, o = d(10, 7 - i), w[g] = r > 0 ? (p / d(10, s - r) % d(10, r) | 0) * o : 0), u)
                        for (;;) {
                            if (0 == g) {
                                1e7 == (w[0] += o) && (w[0] = 1, ++e.e);
                                break
                            }
                            if (w[g] += o, 1e7 != w[g]) break;
                            w[g--] = 0, o = 1
                        }
                    for (i = w.length; 0 === w[--i];) w.pop();
                    if (a && (e.e > f || e.e < -f)) throw Error(l + b(e));
                    return e
                }

                function C(e, t) {
                    var n, i, r, o, s, c, u, l, m, d, p = e.constructor,
                        f = p.precision;
                    if (!e.s || !t.s) return t.s ? t.s = -t.s : t = new p(e), a ? v(t, f) : t;
                    if (u = e.d, d = t.d, i = t.e, l = e.e, u = u.slice(), s = l - i) {
                        for ((m = s < 0) ? (n = u, s = -s, c = d.length) : (n = d, i = l, c = u.length), s > (r = Math.max(Math.ceil(f / 7), c) + 2) && (s = r, n.length = 1), n.reverse(), r = s; r--;) n.push(0);
                        n.reverse()
                    } else {
                        for ((m = (r = u.length) < (c = d.length)) && (c = r), r = 0; r < c; r++)
                            if (u[r] != d[r]) {
                                m = u[r] < d[r];
                                break
                            }
                        s = 0
                    }
                    for (m && (n = u, u = d, d = n, t.s = -t.s), c = u.length, r = d.length - c; r > 0; --r) u[c++] = 0;
                    for (r = d.length; r > s;) {
                        if (u[--r] < d[r]) {
                            for (o = r; o && 0 === u[--o];) u[o] = 1e7 - 1;
                            --u[o], u[r] += 1e7
                        }
                        u[r] -= d[r]
                    }
                    for (; 0 === u[--c];) u.pop();
                    for (; 0 === u[0]; u.shift()) --i;
                    return u[0] ? (t.d = u, t.e = i, a ? v(t, f) : t) : new p(0)
                }

                function L(e, t, n) {
                    var i, r = b(e),
                        o = h(e.d),
                        s = o.length;
                    return t ? (n && (i = n - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + T(i) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (r < 0 ? "e" : "e+") + r) : r < 0 ? (o = "0." + T(-r - 1) + o, n && (i = n - s) > 0 && (o += T(i))) : r >= s ? (o += T(r + 1 - s), n && (i = n - r - 1) > 0 && (o = o + "." + T(i))) : ((i = r + 1) < s && (o = o.slice(0, i) + "." + o.slice(i)), n && (i = n - s) > 0 && (r + 1 === s && (o += "."), o += T(i))), e.s < 0 ? "-" + o : o
                }

                function D(e, t) {
                    if (e.length > t) return e.length = t, !0
                }

                function R(e) {
                    if (!e || "object" != typeof e) throw Error(c + "Object expected");
                    var t, n, i, r = ["precision", 1, 1e9, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
                    for (t = 0; t < r.length; t += 3)
                        if (void 0 !== (i = e[n = r[t]])) {
                            if (m(i) === i && i >= r[t + 1] && i <= r[t + 2]) this[n] = i;
                            else throw Error(u + n + ": " + i)
                        }
                    if (void 0 !== (i = e[n = "LN10"])) {
                        if (i == Math.LN10) this[n] = new this(i);
                        else throw Error(u + n + ": " + i)
                    }
                    return this
                }(s = function e(t) {
                    var n, i, r;

                    function o(e) {
                        if (!(this instanceof o)) return new o(e);
                        if (this.constructor = o, e instanceof o) {
                            this.s = e.s, this.e = e.e, this.d = (e = e.d) ? e.slice() : e;
                            return
                        }
                        if ("number" == typeof e) {
                            if (0 * e != 0) throw Error(u + e);
                            if (e > 0) this.s = 1;
                            else if (e < 0) e = -e, this.s = -1;
                            else {
                                this.s = 0, this.e = 0, this.d = [0];
                                return
                            }
                            if (e === ~~e && e < 1e7) {
                                this.e = 0, this.d = [e];
                                return
                            }
                            return P(this, e.toString())
                        }
                        if ("string" != typeof e) throw Error(u + e);
                        if (45 === e.charCodeAt(0) ? (e = e.slice(1), this.s = -1) : this.s = 1, p.test(e)) P(this, e);
                        else throw Error(u + e)
                    }
                    if (o.prototype = g, o.ROUND_UP = 0, o.ROUND_DOWN = 1, o.ROUND_CEIL = 2, o.ROUND_FLOOR = 3, o.ROUND_HALF_UP = 4, o.ROUND_HALF_DOWN = 5, o.ROUND_HALF_EVEN = 6, o.ROUND_HALF_CEIL = 7, o.ROUND_HALF_FLOOR = 8, o.clone = e, o.config = o.set = R, void 0 === t && (t = {}), t)
                        for (n = 0, r = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"]; n < r.length;) t.hasOwnProperty(i = r[n++]) || (t[i] = this[i]);
                    return o.config(t), o
                }(s)).default = s.Decimal = s, o = new s(1), void 0 !== (i = (function() {
                    return s
                }).call(t, n, t, e)) && (e.exports = i)
            }(0)
        },
        17810: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            /**
             * @license lucide-react v0.303.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let i = (0, n(62898).Z)("Heart", [
                ["path", {
                    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
                    key: "c3ymky"
                }]
            ])
        },
        91172: function(e, t, n) {
            "use strict";
            n.d(t, {
                w_: function() {
                    return c
                }
            });
            var i = n(2265),
                r = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                o = i.createContext && i.createContext(r),
                s = function() {
                    return (s = Object.assign || function(e) {
                        for (var t, n = 1, i = arguments.length; n < i; n++)
                            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }).apply(this, arguments)
                },
                a = function(e, t) {
                    var n = {};
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (n[i] = e[i]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) 0 > t.indexOf(i[r]) && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]]);
                    return n
                };

            function c(e) {
                return function(t) {
                    return i.createElement(u, s({
                        attr: s({}, e.attr)
                    }, t), function e(t) {
                        return t && t.map(function(t, n) {
                            return i.createElement(t.tag, s({
                                key: n
                            }, t.attr), e(t.child))
                        })
                    }(e.child))
                }
            }

            function u(e) {
                var t = function(t) {
                    var n, r = e.attr,
                        o = e.size,
                        c = e.title,
                        u = a(e, ["attr", "size", "title"]),
                        l = o || t.size || "1em";
                    return t.className && (n = t.className), e.className && (n = (n ? n + " " : "") + e.className), i.createElement("svg", s({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, t.attr, r, u, {
                        className: n,
                        style: s(s({
                            color: e.color || t.color
                        }, t.style), e.style),
                        height: l,
                        width: l,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), c && i.createElement("title", null, c), e.children)
                };
                return void 0 !== o ? i.createElement(o.Consumer, null, function(e) {
                    return t(e)
                }) : t(r)
            }
        },
        32402: function(e) {
            e.exports && (e.exports = function(e) {
                return e.prototype.toFormat = function(e, t, n) {
                    if (!this.e && 0 !== this.e) return this.toString();
                    var i, r, o, s, a, c, u, l, m, d, p, f, g, w, S, h = this.format || {},
                        y = this.constructor.format || {};
                    if (e != a ? "object" == typeof e ? (n = e, e = a) : t != a ? "object" == typeof t ? (n = t, t = a) : "object" != typeof n && (n = {}) : n = {} : n = {}, l = (i = this.toFixed(e, t).split("."))[0], m = i[1], c = (u = this.s < 0 ? l.slice(1) : l).length, (d = n.decimalSeparator) == a && (d = h.decimalSeparator) == a && (d = y.decimalSeparator) == a && (d = "."), (p = n.groupSeparator) == a && (p = h.groupSeparator) == a && (p = y.groupSeparator), p && ((f = n.groupSize) == a && (f = h.groupSize) == a && (f = y.groupSize) == a && (f = 0), (g = n.secondaryGroupSize) == a && (g = h.secondaryGroupSize) == a && (g = y.secondaryGroupSize) == a && (g = 0), g ? (r = +g, c -= o = +f) : (r = +f, o = +g), r > 0 && c > 0)) {
                        for (s = c % r || r, l = u.substr(0, s); s < c; s += r) l += p + u.substr(s, r);
                        o > 0 && (l += p + u.slice(s)), this.s < 0 && (l = "-" + l)
                    }
                    return m ? ((w = n.fractionGroupSeparator) == a && (w = h.fractionGroupSeparator) == a && (w = y.fractionGroupSeparator), w && ((S = n.fractionGroupSize) == a && (S = h.fractionGroupSize) == a && (S = y.fractionGroupSize) == a && (S = 0), (S = +S) && (m = m.replace(RegExp("\\d{" + S + "}\\B", "g"), "$&" + w))), l + d + m) : l
                }, e.format = {
                    decimalSeparator: ".",
                    groupSeparator: ",",
                    groupSize: 3,
                    secondaryGroupSize: 0,
                    fractionGroupSeparator: "",
                    fractionGroupSize: 0
                }, e
            })
        },
        23177: function(e, t, n) {
            "use strict";
            n.d(t, {
                fC: function() {
                    return y
                },
                z$: function() {
                    return A
                }
            });
            var i = n(13428),
                r = n(2265),
                o = n(56989),
                s = n(9381);
            let a = "Progress",
                [c, u] = (0, o.b)(a),
                [l, m] = c(a),
                d = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeProgress: n,
                        value: o,
                        max: a,
                        getValueLabel: c = f,
                        ...u
                    } = e, m = S(a) ? a : 100, d = h(o, m) ? o : null, p = w(d) ? c(d, m) : void 0;
                    return (0, r.createElement)(l, {
                        scope: n,
                        value: d,
                        max: m
                    }, (0, r.createElement)(s.WV.div, (0, i.Z)({
                        "aria-valuemax": m,
                        "aria-valuemin": 0,
                        "aria-valuenow": w(d) ? d : void 0,
                        "aria-valuetext": p,
                        role: "progressbar",
                        "data-state": g(d, m),
                        "data-value": null != d ? d : void 0,
                        "data-max": m
                    }, u, {
                        ref: t
                    })))
                });
            d.propTypes = {
                max(e, t, n) {
                    let i = e[t],
                        r = String(i);
                    return i && !S(i) ? Error(`Invalid prop \`max\` of value \`${r}\` supplied to \`${n}\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`) : null
                },
                value(e, t, n) {
                    let i = e[t],
                        r = String(i),
                        o = S(e.max) ? e.max : 100;
                    return null == i || h(i, o) ? null : Error(`Invalid prop \`value\` of value \`${r}\` supplied to \`${n}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`)
                }
            };
            let p = (0, r.forwardRef)((e, t) => {
                var n;
                let {
                    __scopeProgress: o,
                    ...a
                } = e, c = m("ProgressIndicator", o);
                return (0, r.createElement)(s.WV.div, (0, i.Z)({
                    "data-state": g(c.value, c.max),
                    "data-value": null !== (n = c.value) && void 0 !== n ? n : void 0,
                    "data-max": c.max
                }, a, {
                    ref: t
                }))
            });

            function f(e, t) {
                return `${Math.round(e/t*100)}%`
            }

            function g(e, t) {
                return null == e ? "indeterminate" : e === t ? "complete" : "loading"
            }

            function w(e) {
                return "number" == typeof e
            }

            function S(e) {
                return w(e) && !isNaN(e) && e > 0
            }

            function h(e, t) {
                return w(e) && !isNaN(e) && e <= t && e >= 0
            }
            let y = d,
                A = p
        },
        92376: function(e, t, n) {
            "use strict";
            n.d(t, {
                bU: function() {
                    return k
                },
                fC: function() {
                    return b
                }
            });
            var i = n(13428),
                r = n(2265),
                o = n(85744),
                s = n(42210),
                a = n(56989),
                c = n(73763),
                u = n(85184),
                l = n(94977),
                m = n(9381);
            let d = "Switch",
                [p, f] = (0, a.b)(d),
                [g, w] = p(d),
                S = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeSwitch: n,
                        name: a,
                        checked: u,
                        defaultChecked: l,
                        required: d,
                        disabled: p,
                        value: f = "on",
                        onCheckedChange: w,
                        ...S
                    } = e, [h, b] = (0, r.useState)(null), k = (0, s.e)(t, e => b(e)), T = (0, r.useRef)(!1), I = !h || !!h.closest("form"), [P = !1, v] = (0, c.T)({
                        prop: u,
                        defaultProp: l,
                        onChange: w
                    });
                    return (0, r.createElement)(g, {
                        scope: n,
                        checked: P,
                        disabled: p
                    }, (0, r.createElement)(m.WV.button, (0, i.Z)({
                        type: "button",
                        role: "switch",
                        "aria-checked": P,
                        "aria-required": d,
                        "data-state": A(P),
                        "data-disabled": p ? "" : void 0,
                        disabled: p,
                        value: f
                    }, S, {
                        ref: k,
                        onClick: (0, o.M)(e.onClick, e => {
                            v(e => !e), I && (T.current = e.isPropagationStopped(), T.current || e.stopPropagation())
                        })
                    })), I && (0, r.createElement)(y, {
                        control: h,
                        bubbles: !T.current,
                        name: a,
                        value: f,
                        checked: P,
                        required: d,
                        disabled: p,
                        style: {
                            transform: "translateX(-100%)"
                        }
                    }))
                }),
                h = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeSwitch: n,
                        ...o
                    } = e, s = w("SwitchThumb", n);
                    return (0, r.createElement)(m.WV.span, (0, i.Z)({
                        "data-state": A(s.checked),
                        "data-disabled": s.disabled ? "" : void 0
                    }, o, {
                        ref: t
                    }))
                }),
                y = e => {
                    let {
                        control: t,
                        checked: n,
                        bubbles: o = !0,
                        ...s
                    } = e, a = (0, r.useRef)(null), c = (0, u.D)(n), m = (0, l.t)(t);
                    return (0, r.useEffect)(() => {
                        let e = a.current,
                            t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
                        if (c !== n && t) {
                            let i = new Event("click", {
                                bubbles: o
                            });
                            t.call(e, n), e.dispatchEvent(i)
                        }
                    }, [c, n, o]), (0, r.createElement)("input", (0, i.Z)({
                        type: "checkbox",
                        "aria-hidden": !0,
                        defaultChecked: n
                    }, s, {
                        tabIndex: -1,
                        ref: a,
                        style: { ...e.style,
                            ...m,
                            position: "absolute",
                            pointerEvents: "none",
                            opacity: 0,
                            margin: 0
                        }
                    }))
                };

            function A(e) {
                return e ? "checked" : "unchecked"
            }
            let b = S,
                k = h
        },
        94977: function(e, t, n) {
            "use strict";
            n.d(t, {
                t: function() {
                    return o
                }
            });
            var i = n(2265),
                r = n(51030);

            function o(e) {
                let [t, n] = (0, i.useState)(void 0);
                return (0, r.b)(() => {
                    if (e) {
                        n({
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        });
                        let t = new ResizeObserver(t => {
                            let i, r;
                            if (!Array.isArray(t) || !t.length) return;
                            let o = t[0];
                            if ("borderBoxSize" in o) {
                                let e = o.borderBoxSize,
                                    t = Array.isArray(e) ? e[0] : e;
                                i = t.inlineSize, r = t.blockSize
                            } else i = e.offsetWidth, r = e.offsetHeight;
                            n({
                                width: i,
                                height: r
                            })
                        });
                        return t.observe(e, {
                            box: "border-box"
                        }), () => t.unobserve(e)
                    }
                    n(void 0)
                }, [e]), t
            }
        }
    }
]);