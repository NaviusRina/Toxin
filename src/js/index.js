import './../scss/style.scss'

// import AirDatepicker from 'air-datepicker';
// import 'air-datepicker/air-datepicker.css';

(function (requireContext) {
    return requireContext.keys().map(requireContext);
} (require.context('../', true, /(\.scss$)|(\.css$)/)));
