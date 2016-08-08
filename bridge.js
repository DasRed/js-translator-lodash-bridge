'use strict';

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['lodash', 'translator'], function (lodash, Translator) {
            return factory(lodash, Translator);
        });

    } else if (typeof exports !== 'undefined') {
        root.Translator = factory(root.lodash, root.Translator);

    } else {
        root.Translator = factory(root.lodash, root.Translator);
    }
}(this, function (lodash, Translator) {
    // Translation in templates
    lodash.templateSettings.imports.translate = function () {
        return Translator.default.translate.apply(translation, arguments);
    };

    lodash.templateSettings.imports.__ = lodash.templateSettings.imports.translate;
}));
