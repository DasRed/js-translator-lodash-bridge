# translator-lodash-bridge
## Install
```
bower install translator-lodash-bridge --save
```

# How To
This connects the default translator from bower "translator" with lodash imports.
The default translator can be used in lodash templates with the function "translate" or "__":

```
<a href="www.heise.de"><%=translate('heise') %></a>
<a href="www.heise.de"><%=__('heise') %></a>

```

## Configure the Translator and BBCode parser
```
// use to create a clean parser
var parser = new BBCode({}, {})

// use default parser
var parser = BBCode.default

// configure the default parser with
BBCode.setCodes({});

// use to create a clean translator
var translator = new Translator({}, {})

// use default translator
var translator = Translator.default

// configure the default translator with
Translator.setTranslations({});
```

The Translator use default parser from bower "bbcode-parser".
