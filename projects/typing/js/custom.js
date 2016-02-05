jQuery(document).ready(function ($) {
    function init() {
        setLettersText($(".cd-headline.letters").find("b"));
        n($(".cd-headline"));
    }

    function setLettersText(letters) {
        letters.each(function () {
            var self = $(this),
                charArray = self.text().split(""),
                isVisible = self.hasClass("is-visible");
            for (i in charArray) {
                if (self.parents(".rotate-2").length > 0) {
                    charArray[i] = "<em>" + charArray[i] + "</em>"
                }
                if (isVisible) {
                    charArray[i] = '<i class="in">' + charArray[i] + "</i>";
                } else {
                    charArray[i] = "<i>" + charArray[i] + "</i>";
                }
            }
            var text = charArray.join("");
            self.html(text).css("opacity", 1)
        })
    }

    function n(i) {
        var e = h;
        i.each(function () {
            var self = $(this);
            if (self.hasClass("loading-bar")) {
                e = u;
                setTimeout(function () {
                    self.find(".cd-words-wrapper").addClass("is-loading")
                }, p);
            } else if (self.hasClass("clip")) {
                var a = self.find(".cd-words-wrapper"),
                    n = a.width() + 10;
                a.css("width", n);
            } else if (!self.hasClass("type")) {
                var cdWordsWrapperB = self.find(".cd-words-wrapper b"),
                    max = 0;
                cdWordsWrapperB.each(function () {
                    var width = $(this).width();
                    if (width > max) {
                        max = width;
                    }
                });
                self.find(".cd-words-wrapper").css("width", max);
            }
            setTimeout(function () {
                t(self.find(".is-visible").eq(0))
            }, e)
        })
    }

    function t(s) {
        var i = getNextWord(s);
        if (s.parents(".cd-headline").hasClass("type")) {
            var e = s.parent(".cd-words-wrapper");
            e.addClass("selected").removeClass("waiting"), setTimeout(function () {
                e.removeClass("selected"), s.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")
            }, m), setTimeout(function () {
                d(i, C)
            }, w)
        } else if (s.parents(".cd-headline").hasClass("letters")) {
            var a = s.children("i").length >= i.children("i").length ? !0 : !1;
            l(s.find("i").eq(0), s, a, f), r(i.find("i").eq(0), i, a, f)
        } else s.parents(".cd-headline").hasClass("clip") ? s.parents(".cd-words-wrapper").animate({
            width: "2px"
        }, v, function () {
            changeVisibility(s, i), d(i)
        }) : s.parents(".cd-headline").hasClass("loading-bar") ? (s.parents(".cd-words-wrapper").removeClass("is-loading"), changeVisibility(s, i), setTimeout(function () {
            t(i)
        }, u), setTimeout(function () {
            s.parents(".cd-words-wrapper").addClass("is-loading")
        }, p)) : (changeVisibility(s, i), setTimeout(function () {
            t(i)
        }, h))
    }

    function d(selector, i) {
        if (selector.parents(".cd-headline").hasClass("type")) {
            r(selector.find("i").eq(0), selector, false, i);
            selector.addClass("is-visible").removeClass("is-hidden");
        } else {
            if (selector.parents(".cd-headline").hasClass("clip")) {
                selector.parents(".cd-words-wrapper").animate({
                    width: selector.width() + 10
                }, v, function () {
                    setTimeout(function () {
                        t(selector)
                    }, T)
                })
            }
        }
    }

    function l(i, e, a, n) {
        if (i.removeClass("in").addClass("out"), i.is(":last-child") ? a && setTimeout(function () {
                t(getNextWord(e))
            }, h) : setTimeout(function () {
                l(i.next(), e, a, n)
            }, n), i.is(":last-child") && $("html").hasClass("no-csstransitions")) {
            var d = getNextWord(e);
            changeVisibility(e, d)
        }
    }

    function r(character, i, flag, a) {
        character.addClass("in").removeClass("out");
        if (character.is(":last-child")) {
            if (i.parents(".cd-headline").hasClass("type")) {
                setTimeout(function () {
                    i.parents(".cd-words-wrapper").addClass("waiting")
                }, 200);
                if (!flag) {
                    setTimeout(function () {
                        t(i)
                    }, h)
                }
            }
        } else {
            setTimeout(function () {
                r(character.next(), i, flag, a)
            }, a)
        }
    }

    function getNextWord(word) {
        if (word.is(":last-child")) {
            return word.parent().children().eq(0);
        } else {
            return word.next();
        }
    }

    function changeVisibility(s, i) {
        s.removeClass("is-visible").addClass("is-hidden");
        i.removeClass("is-hidden").addClass("is-visible");
    }

    var h = 2500,
        u = 3500,
        p = u - 3e3,
        f = 25,
        C = 100,
        m = 300,
        w = m + 200,
        v = 500,
        T = 1200;
    init()
});