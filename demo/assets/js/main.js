document.addEventListener("DOMContentLoaded", function () {
  !(function (o) {
    "use strict";
    o("body")
      .on("input propertychange", ".floating-label-form-group", function (i) {
        o(this).toggleClass("floating-label-form-group-with-value", !!o(i.target).val());
      })
      .on("focus", ".floating-label-form-group", function () {
        o(this).addClass("floating-label-form-group-with-focus");
      })
      .on("blur", ".floating-label-form-group", function () {
        o(this).removeClass("floating-label-form-group-with-focus");
      });
    if (992 < o(window).width()) {
      var s = o("#mainNav").height();
      o(window).on(
        "scroll",
        {
          previousTop: 0,
        },
        function () {
          var i = o(window).scrollTop();
          i < this.previousTop
            ? 0 < i && o("#mainNav").hasClass("is-fixed")
              ? o("#mainNav").addClass("is-visible")
              : o("#mainNav").removeClass("is-visible is-fixed")
            : i > this.previousTop &&
              (o("#mainNav").removeClass("is-visible"),
              s < i && !o("#mainNav").hasClass("is-fixed") && o("#mainNav").addClass("is-fixed")),
            (this.previousTop = i);
        }
      );
    }
  })(jQuery);

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
});

/*****************************************************************************************/
/************************************** CUSTOM *******************************************/
/*****************************************************************************************/

var colors = [
    { label: 'Red', value: 'RD' },
    { label: 'Blue', value: 'BL' },
    { label: 'Yellow', value: 'YW' },
    { label: 'Gold', value: 'GD' },
    { label: 'Silver', value: 'SV' },
    { label: 'Orange', value: 'OR' },
    { label: 'Green', value: 'GR' },
    { label: 'White', value: 'WH' },
    { label: 'Pink', value: 'PI' },
    { label: 'Grey', value: 'GR' },
    { label: 'Brown', value: 'BR' },
    { label: 'Black', value: 'BE' }
];

var input = document.getElementById("searchInput");

typeaheadStandalone({
    input: input,
    fetch: function(text, update) {
        text = text.toLowerCase();
        // you can also use AJAX requests instead of preloaded data
        var suggestions = colors.filter(n => n.label.toLowerCase().startsWith(text))
        update(suggestions);
    },
    onSelect: function(item) {
        input.value = item.label;
    }
});