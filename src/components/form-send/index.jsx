import React, { useState, useMemo } from "react";
import { services } from "../../data/links";
import { MdKeyboardArrowDown } from "react-icons/md";
import { toast } from "react-toastify";

const TELEGRAM_BOT_TOKEN = "7912663808:AAEdKAKzgWROxRtrtfuRlJuK3WDqwlmFYjg";
const CHAT_ID = "6713537237";
const phoneRegex = /^(\+?\d{1,3})?[\s-]?\(?\d{2,3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;

export default function FormSend() {
  const [form, setForm] = useState({
    service: "",
    doctor: "",
    name: "",
    phone: "",
    policy: false,
  });

  console.log(form);
  const [touched, setTouched] = useState({});
  const [sending, setSending] = useState(false);

  /* === Helper data === */
  const selectedService = useMemo(
    () => services.find((s) => s.id === form.service),
    [form.service]
  );
  const doctorOptions = selectedService ? selectedService.doctors : [];

  /* === Validation rules === */
  const errors = {
    service: !form.service ? "Xizmatni tanlang" : "",
    doctor: form.service && !form.doctor ? "Vrachni tanlang" : "",
    name: !form.name.trim() ? "Ismingizni kiriting" : "",
    phone: !form.phone.trim()
      ? "Telefon raqamini kiriting"
      : !phoneRegex.test(form.phone)
      ? "Telefon formati noto‘g‘ri"
      : "",
    policy: !form.policy ? "Maxfiylik siyosatiga rozilik belgilang" : "",
  };

  /* === Handlers === */
  const handleChange = (field) => (e) => {
    const value = field === "policy" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };
  const handleBlur = (field) => () =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    // all fields touched
    setTouched({
      service: true,
      doctor: true,
      name: true,
      phone: true,
      policy: true,
    });

    const hasErrors = Object.values(errors).some(Boolean);
    if (hasErrors) return;

    /* === Build Telegram message === */
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

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    setSending(true);
    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: msg,
          parse_mode: "HTML",
        }),        
      });

      toast.success("Muvaffaqiyatli yuborildi!")
      // reset form
      setForm({
        service: "",
        doctor: "",
        name: "",
        phone: "",
        policy: false,
      });
      setTouched({});
    } catch (err) {
      console.error("Telegramga yuborishda xatolik:", err);
      toast.error("Xatolik yuz berdi. Qaytadan urinib ko‘ring.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="form">
      <div className="container bg-gradient-to-r from-[#02B0C5] to-[#0074B8] p-14 rounded-[12px]">
        <h1 className="text-4xl font-bold text-white mb-6">
          Записаться на приём
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-3 gap-5 mt-6"
          noValidate
        >
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
                <option value="">Xizmatni tanlang</option>
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
              <MdKeyboardArrowDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
              {touched.service && errors.service && (
                <p className="text-red-500 text-sm absolute left-0 -bottom-5">
                  {errors.service}
                </p>
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
                  {form.service ? "Vrachnı tanlang" : "Avval xizmatni tanlang"}
                </option>
                {doctorOptions.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name}
                  </option>
                ))}
              </select>
              <MdKeyboardArrowDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
              {touched.doctor && errors.doctor && (
                <p className="text-red-500 text-sm absolute left-0 -bottom-5">
                  {errors.doctor}
                </p>
              )}
            </div>
          </div>

          {/* NAME & PHONE */}
          <div className="flex flex-col gap-5">
            <div className="relative">
              <input
                className="w-full bg-white p-3 rounded outline-none"
                placeholder="Ваше имя"
                value={form.name}
                onChange={handleChange("name")}
                onBlur={handleBlur("name")}
              />
              {touched.name && errors.name && (
                <p className="text-red-500 text-sm absolute left-0 -bottom-5">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="relative">
              <input
                className="w-full bg-white p-3 rounded outline-none"
                placeholder="Ваш телефон"
                value={form.phone}
                onChange={handleChange("phone")}
                onBlur={handleBlur("phone")}
              />
              {touched.phone && errors.phone && (
                <p className="text-red-500 text-sm absolute left-0 -bottom-5">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* SUBMIT & POLICY */}
          <div className="flex flex-col gap-5">
            <button
              type="submit"
              className="w-full p-3 rounded text-white bg-[#00C6BF]"
              disabled={sending}
            >
              {sending ? "Yuborilmoqda..." : "Оставить заявку"}
            </button>

            <div className="relative">
              <label className="flex items-start gap-2 text-white text-sm">
                <input
                  type="checkbox"
                  checked={form.policy}
                  onChange={handleChange("policy")}
                  onBlur={handleBlur("policy")}
                />
                Отправляя заявку, вы соглашаетесь на нашу политику
                конфиденциальности
              </label>
              {touched.policy && errors.policy && (
                <p className="text-red-500 text-sm absolute left-0 -bottom-5">
                  {errors.policy}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
