import { useTranslation } from 'react-i18next';
import './i18n';
import { useContext } from 'react';
import { ThemeContext } from './Theme';

function Language() {
    const { t, i18n } = useTranslation();
  const { theme, toggleTheme, toggleLanguage, language } = useContext(ThemeContext);
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div>
            <p>{t('paragraph')}</p>
            
        </div>
    );
}

export default Language