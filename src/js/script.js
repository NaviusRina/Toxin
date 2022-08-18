import $ from "jquery";

(function (requireContext) {
    return requireContext.keys().map(requireContext);
} (require.context('../', true, /(\.scss$)|(\.css$)/)));

(function (requireContext) {
    return requireContext.keys().map(requireContext);
} (require.context('../', true, /(\.js)/)));
