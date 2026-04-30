import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { supabase } from "./supabaseClient";

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    useCase: "Parents or grandparents",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    if (!supabase) {
      setIsSubmitting(false);
      alert("The waitlist is not connected yet. Please check the Supabase settings.");
      return;
    }

    const { error } = await supabase.from("waitlist").insert([
      {
        first_name: form.name,
        email: form.email,
        use_case: form.useCase,
        source: "kinnerly_landing_page",
      },
    ]);

    setIsSubmitting(false);

    if (error && error.code !== "23505") {
      alert("Something went wrong. Please try again.");
      console.error(error);
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-center shadow-sm">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-emerald-600">
          <CheckCircle2 />
        </div>
        <h3 className="text-xl font-semibold text-stone-950">
          You’re on the early access list.
        </h3>
        <p className="mt-2 text-sm leading-6 text-stone-600">
          Thanks for joining Kinnerly. We’ll be in touch as the private beta opens.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-stone-200 bg-white p-5 shadow-xl shadow-rose-950/5 sm:p-6"
    >
      <div className="mb-5">
        <h3 className="text-xl font-semibold text-stone-950">
          Join the private beta
        </h3>
        <p className="mt-1 text-sm text-stone-600">
          Be among the first families invited into Kinnerly.
        </p>
      </div>

      <label className="mb-4 block">
        <span className="mb-1 block text-sm font-medium text-stone-700">
          First name
        </span>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          placeholder="John"
          className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none ring-rose-200 transition focus:border-rose-300 focus:ring-4"
        />
      </label>

      <label className="mb-4 block">
        <span className="mb-1 block text-sm font-medium text-stone-700">
          Email
        </span>
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none ring-rose-200 transition focus:border-rose-300 focus:ring-4"
        />
      </label>

      <label className="mb-5 block">
        <span className="mb-1 block text-sm font-medium text-stone-700">
          Who would you use Kinnerly for?
        </span>
        <select
          value={form.useCase}
          onChange={(e) => setForm({ ...form, useCase: e.target.value })}
          className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none ring-rose-200 transition focus:border-rose-300 focus:ring-4"
        >
          <option>Parents or grandparents</option>
          <option>Children or grandchildren</option>
          <option>Siblings and cousins</option>
          <option>Close friends</option>
          <option>Family reunion</option>
          <option>Legacy stories</option>
        </select>
      </label>

      <button
        disabled={isSubmitting}
        className="group flex w-full items-center justify-center rounded-2xl bg-stone-950 px-5 py-3 font-semibold text-white transition hover:bg-rose-700 disabled:opacity-60"
      >
        {isSubmitting ? "Joining..." : "Request early access"}
        <ArrowRight className="ml-2 transition group-hover:translate-x-1" size={18} />
      </button>

      <p className="mt-4 text-center text-xs leading-5 text-stone-500">
        Private by design. No public feed. No posting without permission.
      </p>
    </form>
  );
}