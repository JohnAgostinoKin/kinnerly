import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { supabase } from "./supabaseClient";

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [duplicate, setDuplicate] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    useCase: "",
  });

  function updateField(field, value) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!supabase) {
      alert("Kinnerly is not connected to the waitlist database yet.");
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.from("waitlist").insert({
      email: form.email,
      source: "kinnerly",
    });

    setIsSubmitting(false);

    if (error) {
      if (error.code === "23505") {
        setDuplicate(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-[#d9c7ad] bg-[#fffaf2] p-6 shadow-xl shadow-[#241925]/10">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ead1bd] text-[#8d4d3f]">
          <CheckCircle2 size={28} />
        </div>
        <h3 className="text-2xl font-black text-[#241925]">
          You’re on the early access list.
        </h3>
        <p className="mt-3 leading-7 text-[#66584e]">
          Thanks for joining Kinnerly. We’ll be in touch as the private memory
          beta opens.
        </p>
      </div>
    );
  }

  if (duplicate) {
    return (
      <div className="rounded-[2rem] border border-[#d9c7ad] bg-[#fffaf2] p-6 shadow-xl shadow-[#241925]/10">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ead1bd] text-[#8d4d3f]">
          <CheckCircle2 size={28} />
        </div>
        <h3 className="text-2xl font-black text-[#241925]">
          You’re already on the list.
        </h3>
        <p className="mt-3 leading-7 text-[#66584e]">
          We already have your email. We’ll be in touch as the private memory
          beta opens.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-[#d9c7ad] bg-[#fffaf2] p-6 shadow-xl shadow-[#241925]/10"
    >
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a85f4c]">
          Join the beta
        </p>
        <h3 className="mt-2 text-2xl font-black text-[#241925]">
          Start preserving what matters.
        </h3>
      </div>

      <div className="grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm font-bold text-[#241925]">First name</span>
          <input
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="rounded-2xl border border-[#d9c7ad] bg-white px-4 py-3 text-[#241925] outline-none transition focus:border-[#8d4d3f] focus:ring-4 focus:ring-[#8d4d3f]/15"
            placeholder="John"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-bold text-[#241925]">Email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="rounded-2xl border border-[#d9c7ad] bg-white px-4 py-3 text-[#241925] outline-none transition focus:border-[#8d4d3f] focus:ring-4 focus:ring-[#8d4d3f]/15"
            placeholder="you@example.com"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-bold text-[#241925]">
            What would you use Kinnerly for?
          </span>
          <textarea
            value={form.useCase}
            onChange={(event) => updateField("useCase", event.target.value)}
            className="min-h-28 rounded-2xl border border-[#d9c7ad] bg-white px-4 py-3 text-[#241925] outline-none transition focus:border-[#8d4d3f] focus:ring-4 focus:ring-[#8d4d3f]/15"
            placeholder="Old family photos, stories, reunions, grandparents, recipes, places, or making new memories..."
          />
        </label>
      </div>

      <button
        disabled={isSubmitting}
        className="group mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-[#241925] px-6 py-4 font-bold text-white shadow-lg shadow-[#241925]/15 transition hover:bg-[#8d4d3f] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Joining..." : "Join the private beta"}
        <ArrowRight
          className="ml-2 transition group-hover:translate-x-1"
          size={19}
        />
      </button>

      <p className="mt-4 text-center text-xs leading-5 text-[#75665b]">
        No spam. No public feed. Just early updates as Kinnerly takes shape.
      </p>
    </form>
  );
}