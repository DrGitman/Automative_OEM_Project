import { useNavigate } from "react-router";
import { HiArrowLeft, HiShieldCheck } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="bg-background min-h-screen font-['Inter',sans-serif] p-8 md:p-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary font-black text-xs uppercase tracking-widest transition-colors mb-8"
        >
          <HiArrowLeft /> {t('back_to_settings')}
        </button>

        <div className="bg-card rounded-[32px] border border-border shadow-sm p-10 md:p-16">
          <div className="flex items-center gap-6 mb-12">
            <div className="bg-primary/10 p-6 rounded-[24px] text-primary text-3xl">
              <HiShieldCheck />
            </div>
            <div>
              <h1 className="text-4xl font-black text-foreground">{t('privacy_policy')}</h1>
              <p className="text-muted-foreground font-medium mt-1">{t('last_updated')}: March 20, 2026</p>
            </div>
          </div>

          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-xl font-black uppercase tracking-wider text-primary">{t('privacy_1_title')}</h2>
              <p>
                {t('privacy_1_text')}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-black uppercase tracking-wider text-primary">{t('privacy_2_title')}</h2>
              <p>{t('privacy_2_text')}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('privacy_2_li1')}</li>
                <li>{t('privacy_2_li2')}</li>
                <li>{t('privacy_2_li3')}</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-black uppercase tracking-wider text-primary">{t('privacy_3_title')}</h2>
              <p>{t('privacy_3_text')}</p>
            </section>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="w-full h-14 bg-foreground text-background rounded-2xl font-black text-sm hover:scale-[1.02] transition-all mt-12"
          >
            {t('i_understand')}
          </button>
        </div>
      </div>
    </div>
  );
}
