(function ($) {
    $.fn.typing = function (options) {
        var self = this,
            def = {
                text: {
                    before: '',
                    after: ''
                },
                sentences: []
            },
            settings = $.extend({}, def, options);

        var wordIsShownInterval = 2500,
            characterTypingInterval = 100,
            m = 300,
            w = m + 200;

        function setLettersText(letters) {
            letters.each(function () {
                var self = $(this),
                    charArray = self.text().split(""),
                    isVisible = self.hasClass("is-visible");
                for (i in charArray) {
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

        function t(word) {
            var nextWord = getNextWord(word);
            var parent = word.parent(".typing-wrapper");
            parent.addClass("selected").removeClass("waiting");
            setTimeout(function () {
                parent.removeClass("selected");
                word.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out");
            }, m);
            setTimeout(function () {
                d(nextWord, characterTypingInterval);
            }, w)
        }

        function d(nextWord, characterTypingInterval) {
            typeWord(nextWord.find("i").eq(0), nextWord, false, characterTypingInterval);
            nextWord.addClass("is-visible").removeClass("is-hidden");
        }

        function init() {
            $(self).addClass('typing letters type');
            $(self).append(settings.text.before + '<span class="typing-wrapper waiting"></span>' + settings.text.after)

            for (var i = 0; i < settings.sentences.length; i++) {
                $(self).find('.typing-wrapper').append('<b>' + settings.sentences[i] + '</b>');
            }

            $(self).find('.typing-wrapper b').first().addClass('is-visible');
            setLettersText($(self).find("b"));
            $('.typing').each(function () {
                var self = $(this);
                setTimeout(function () {
                    t(self.find(".is-visible").eq(0))
                }, wordIsShownInterval)
            });

            return self;
        }

        function typeWord(character, word, flag, characterTypingInterval) {
            character.addClass("in").removeClass("out");
            if (character.is(":last-child")) {
                setTimeout(function () {
                    word.parents('.typing-wrapper').addClass("waiting")
                }, 200);
                if (!flag) {
                    setTimeout(function () {
                        t(word)
                    }, wordIsShownInterval)
                }
            } else {
                setTimeout(function () {
                    typeWord(character.next(), word, flag, characterTypingInterval)
                }, characterTypingInterval)
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

        init();
    };
})(jQuery);