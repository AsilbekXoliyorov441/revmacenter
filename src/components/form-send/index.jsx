import React, { useState, useMemo } from "react";
import { services } from "../../data/links";
import { MdKeyboardArrowDown } from "react-icons/md";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const TELEGRAM_BOT_TOKEN = "7912663808:AAEdKAKzgWROxRtrtfuRlJuK3WDqwlmFYjg"
const CHAT_ID = "-1002465847278";

const phoneRegex = /^(\+?\d{1,3})?[\s-]?\(?\d{2,3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;

export default function FormSend() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    service: "",
    doctor: "",
    name: "",
    phone: "",
    policy: false,
  });
  const [touched, setTouched] = useState({});
  const [sending, setSending] = useState(false);

  const selectedService = useMemo(
    () => services.find((s) => s.id === form.service),
    [form.service]
  );
  const doctorOptions = selectedService ? selectedService.doctors : [];

  const errors = {
    service: !form.service ? t("validation.service") : "",
    doctor: form.service && !form.doctor ? t("validation.doctor") : "",
    name: !form.name.trim() ? t("validation.name") : "",
    phone: !form.phone.trim()
      ? t("validation.phone")
      : !phoneRegex.test(form.phone)
        ? t("validation.phoneInvalid")
        : "",
    policy: !form.policy ? t("validation.policy") : "",
  };

  const handleChange = (field) => (e) => {
    const value = field === "policy" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };
  const handleBlur = (field) => () =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({
      service: true,
      doctor: true,
      name: true,
      phone: true,
      policy: true,
    });

    const hasErrors = Object.values(errors).some(Boolean);
    if (hasErrors) return;

    const serviceName = selectedService?.name || "";
    const doctorName =
      selectedService?.doctors.find((d) => d.id === form.doctor)?.name || "";
    const msg = `
<b>📝 Yangi ariza</b>
<b>🔹 Murojat:</b> ${serviceName}
<b>👨‍⚕️ Shifokor:</b> ${doctorName}
<b>🙍 Ismi:</b> ${form.name}
<b>📞 Tel:</b> ${form.phone}
<b>✅ Rozilik:</b> ${form.policy ? "Ha" : "Yo‘q"}
    `;

    try {
      setSending(true);
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: msg,
          parse_mode: "HTML",
        }),
      });

      toast.success(t("form.success"));
      setForm({ service: "", doctor: "", name: "", phone: "", policy: false });
      setTouched({});
    } catch (err) {
      toast.error(t("form.error"));
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="form" className="pt-[30px] pb-[30px]">
      <div className="container bg-gradient-to-r from-[black] to-[#8e0c0c] p-14 rounded-[12px]">
        <h1 className="text-4xl font-bold text-white mb-6">
          {t("form.title")}
        </h1>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-5 mt-6" noValidate>
          {/* SERVICE & DOCTOR */}
          <div className="flex flex-col gap-5">
            {/* Service */}
            <div className="relative">
              <select
                className="w-full bg-white p-3 pr-10 rounded outline-none appearance-none"
                value={form.service}
                onChange={handleChange("service")}
                onBlur={handleBlur("service")}
              >
                <option value="">{t("form.selectService")}</option>
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
              <MdKeyboardArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
              {touched.service && errors.service && (
                <p className="text-red-500 text-sm absolute left-0 -bottom-5">{errors.service}</p>
              )}
            </div>

            {/* Doctor */}
            <div className="relative">
              <select
                className="w-full bg-white p-3 pr-10 rounded outline-none appearance-none disabled:bg-gray-200"
                value={form.doctor}
                onChange={handleChange("doctor")}
                onBlur={handleBlur("doctor")}
                disabled={!form.service}
              >
                <option value="">
                  {form.service ? t("form.selectDoctor") : t("form.selectDoctorAfterService")}
                </option>
                {doctorOptions.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name}
                  </option>
                ))}
              </select>
              <MdKeyboardArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
              {touched.doctor && errors.doctor && (
                <p className="text-red-500 text-sm absolute left-0 -bottom-5">{errors.doctor}</p>
              )}
            </div>
          </div>

          {/* NAME & PHONE */}
          <div className="flex flex-col gap-5">
            <div className="relative">
              <input
                className="w-full bg-white p-3 rounded outline-none"
                placeholder={t("form.name")}
                value={form.name}
                onChange={handleChange("name")}
                onBlur={handleBlur("name")}
              />
              {touched.name && errors.name && (
                <p className="text-red-500 text-sm absolute left-0 -bottom-5">{errors.name}</p>
              )}
            </div>

            <div className="relative">
              <input
                className="w-full bg-white p-3 rounded outline-none"
                placeholder={t("form.phone")}
                value={form.phone}
                onChange={handleChange("phone")}
                onBlur={handleBlur("phone")}
              />
              {touched.phone && errors.phone && (
                <p className="text-red-500 text-sm absolute left-0 -bottom-5">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* SUBMIT & POLICY */}
          <div className="flex relative flex-col gap-5">
            <button
              type="submit"
              className="w-full p-3 rounded relative overflow-hidden group transition-colors duration-1000 text-white bg-red-600"
              disabled={sending}
            >
              {sending ? t("form.sending") : t("form.submit")}
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/70 to-white/0 translate-x-[-100%] translate-y-[100%] rotate-45 scale-150 opacity-0 transition-transform duration-1000 ease-out group-hover:translate-x-[150%] group-hover:translate-y-[-150%] group-hover:opacity-100 pointer-events-none"></span>
            </button>

            <div className="relative">
              <label className="flex items-start gap-2 text-white text-sm">
                <input
                  type="checkbox"
                  checked={form.policy}
                  onChange={handleChange("policy")}
                  onBlur={handleBlur("policy")}
                />
                <span className="mt-[-5px]">{t("form.policyText")}</span>
              </label>
              {touched.policy && errors.policy && (
                <p className="text-red-500 text-sm absolute left-0 -bottom-10">{errors.policy}</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
