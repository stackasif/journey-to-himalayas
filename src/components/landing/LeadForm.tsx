import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Download, Loader2 } from "lucide-react";

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$|^\+?\d[\d\s-]{7,15}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(160),
  travelMonth: z.string().min(1, "Select a month"),
  travelType: z.string().min(1, "Select travel type"),
  pickupCity: z.string().min(1, "Select a pickup city"),
  budget: z.string().min(1, "Select a budget"),
});

type FormState = z.input<typeof schema>;

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const travelTypes = ["Family", "Couple", "Friends", "Pilgrimage", "Solo"];
const pickupCities = ["Lucknow", "Gorakhpur", "Delhi", "Ayodhya", "Varanasi", "Other"];
const budgets = ["Below ₹30K", "₹30K – ₹50K", "₹50K – ₹1L", "Above ₹1L"];

const inputCls =
  "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/40 transition";

export function LeadForm() {
  const [values, setValues] = useState<FormState>({
    fullName: "",
    phone: "",
    email: "",
    travelMonth: "",
    travelType: "",
    pickupCity: "",
    budget: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setValues((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const errs: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FormState;
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setStatus("submitting");
    // Simulated submission — replace with real endpoint later.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl glass-strong p-8 sm:p-10 text-center animate-fade-up">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full gradient-primary shadow-glow">
          <CheckCircle2 className="h-7 w-7 text-white" />
        </div>
        <h3 className="mt-5 text-2xl">Your guide is on the way</h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
          Check your inbox in the next 2 minutes. Our Nepal specialist will also call
          you within 24 hours to help you plan the perfect trip.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl glass-strong p-6 sm:p-8 shadow-elevated"
      noValidate
    >
      <input type="hidden" name="leadSource" value="Free Nepal Guide" />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" error={errors.fullName}>
          <input
            className={inputCls}
            placeholder="Ravi Sharma"
            value={values.fullName}
            onChange={(e) => set("fullName", e.target.value)}
            maxLength={80}
          />
        </Field>
        <Field label="Phone Number" error={errors.phone}>
          <input
            className={inputCls}
            placeholder="98XXXXXXXX"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            inputMode="tel"
            maxLength={16}
          />
        </Field>
        <Field label="Email Address" error={errors.email} className="sm:col-span-2">
          <input
            className={inputCls}
            placeholder="you@example.com"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            inputMode="email"
            maxLength={160}
          />
        </Field>
        <Field label="Travel Month" error={errors.travelMonth}>
          <Select value={values.travelMonth} onChange={(v) => set("travelMonth", v)} options={months} placeholder="Select month" />
        </Field>
        <Field label="Travel Type" error={errors.travelType}>
          <Select value={values.travelType} onChange={(v) => set("travelType", v)} options={travelTypes} placeholder="Who's traveling?" />
        </Field>
        <Field label="Pickup City" error={errors.pickupCity}>
          <Select value={values.pickupCity} onChange={(v) => set("pickupCity", v)} options={pickupCities} placeholder="Start city" />
        </Field>
        <Field label="Estimated Budget" error={errors.budget}>
          <Select value={values.budget} onChange={(v) => set("budget", v)} options={budgets} placeholder="Per person" />
        </Field>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 group relative inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-primary px-6 py-4 text-base font-semibold text-white shadow-glow transition-all hover:scale-[1.01] disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Sending your guide…
          </>
        ) : (
          <>
            <Download className="h-5 w-5" />
            Download My FREE Guide
          </>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        No spam. Instant download + a follow-up from our Nepal specialist.
      </p>
    </form>
  );
}

function Field({
  label, error, children, className,
}: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function Select({
  value, onChange, options, placeholder,
}: { value: string; onChange: (v: string) => void; options: string[]; placeholder: string }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputCls} appearance-none pr-10 ${value ? "text-foreground" : "text-muted-foreground"}`}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#18181B] text-white">
            {o}
          </option>
        ))}
      </select>
      <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
      </svg>
    </div>
  );
}
