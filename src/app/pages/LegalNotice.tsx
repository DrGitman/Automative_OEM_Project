import { useNavigate } from "react-router";
import { HiArrowLeft, HiLibrary } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";

export default function LegalNotice() {
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
            <div className="bg-muted p-6 rounded-[24px] text-muted-foreground text-3xl">
              <HiLibrary />
            </div>
            <div>
              <h1 className="text-4xl font-black text-foreground">{t('legal_notice')}</h1>
              <p className="text-muted-foreground font-medium mt-1">{t('legal_version')}</p>
            </div>
          </div>

          <section className="space-y-4 mb-8">
            <h2 className="text-xl font-black uppercase tracking-wider text-primary">{t('legal_1_title')}</h2>
            <p className="text-sm font-medium leading-relaxed text-muted-foreground">
              {t('legal_1_text')}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black uppercase tracking-wider text-[#D72322]">{t('legal_2_title')}</h2>
            <p className="text-sm font-medium leading-relaxed text-[#747681]">
              {t('legal_2_text')}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black uppercase tracking-wider text-[#D72322]">{t('legal_3_title')}</h2>
            <p className="text-sm font-medium leading-relaxed text-[#747681]">
              {t('legal_3_text')}
            </p>
          </section>

          <button
            onClick={() => navigate("/settings")}
            className="w-full h-14 bg-[#D72322] text-white rounded-2xl font-black text-sm shadow-xl shadow-red-100 hover:scale-[1.02] transition-all"
          >
            {t('acknowledge_terms')}
          </button>
        </div>
      </div>
    </div>
  );
}
