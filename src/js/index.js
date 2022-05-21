import './../scss/style.scss'



(function (requireContext) {
    return requireContext.keys().map(requireContext);
} (require.context('../', true, /(\.scss$)|(\.css$)/)));
