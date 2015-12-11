/* START OF ARCADIADATA SPECIFIC CODE */
// mode based on impala
define(function(require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var ImpalaHighlightRules = require("./impala_highlight_rules").ImpalaHighlightRules;
  var FoldMode = require("./folding/sqlserver").FoldMode;

  var Mode = function() {
      this.HighlightRules = ImpalaHighlightRules;
      this.foldingRules = new FoldMode();
  };
  oop.inherits(Mode, TextMode);

  (function() {
      this.lineCommentStart = "--";
      this.$id = "ace/mode/impala_arcengine";

      this.getCompletions = function(state, session, pos, prefix) {
          var keywords = this.$keywordList || this.$createKeywordList();
          return keywords.map(function (word) {
              return {
                  ignoreCase: true,
                  name: word,
                  value: word,
                  upperCaseValue: word.toUpperCase(),
                  score: 1,
                  meta: "keyword"
              };
          });
      };
  }).call(Mode.prototype);

  exports.Mode = Mode;
});
/* END OF ARCADIADATA SPECIFIC CODE */