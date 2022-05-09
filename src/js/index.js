import './../scss/style.scss'

(function (requireContext) {
    return requireContext.keys().map(requireContext);
} (require.context('../', true, /(\.scss$)|(\.css$)/)));
// function requireAll (r) { r.keys().forEach(r); }
// requireAll(require.context('./', true, /\.pug$/));
// var template = require('./../pug/includes/elements/buttons/buttons.pug');
