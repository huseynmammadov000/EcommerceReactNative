import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import az from './az.json';
import en from './en.json';

const resources = {
    az:{
        translation:az,
    },
    en:{
        translation:en,
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng:'az',
    fallbackLng:'en',
    compatibilityJSON:'v3',
    interpolation:{
        espaceValue:false,
    }
})