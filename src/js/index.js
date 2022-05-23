import './../scss/style.scss'
// import AirDatepicker from './../pug/includes/air-datepicker/air-datepicker'
// import './../pug/includes/air-datepicker/air-datepicker.css'
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

(function (requireContext) {
    return requireContext.keys().map(requireContext);
} (require.context('../', true, /(\.scss$)|(\.css$)/)));
