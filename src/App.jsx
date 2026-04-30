import { useState } from "react";
import WaitlistForm from "./WaitlistForm";
import {
  Heart,
  Sparkles,
  MessageCircle,
  Lock,
  ArrowRight,
  CheckCircle2,
  CalendarHeart,
  BookHeart,
  ShieldCheck,
} from "lucide-react";

const sampleQuestions = [
  "What is one family story we should never forget?",
  "What is something Grandma always said?",
  "What is your funniest memory from when we were kids?",
  "What is one thing Dad taught you without realizing it?",
];

function FeatureCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
        <Icon size={24} />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-stone-950">{title}</h3>
      <p className="text-sm leading-6 text-stone-600">{children}</p>
    </div>
  );
}

 

export default function App() {
  return (
    <main className="min-h-screen bg-[#fffaf7] text-stone-950">
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-rose-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-6 sm:px-8 lg:px-10">
          <nav className="mb-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-stone-950 text-white shadow-lg shadow-stone-950/15">
                <Heart size={22} fill="currentColor" />
              </div>
              <div>
                <p className="text-xl font-bold tracking-tight">Kinnerly</p>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
                  For the people who matter most.
                </p>
              </div>
            </div>

            <a
              href="#waitlist"
              className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-stone-900 shadow-sm ring-1 ring-stone-200 transition hover:bg-stone-50 sm:inline-flex"
            >
              Join beta
            </a>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-rose-200 bg-white/80 px-3 py-1 text-xs font-medium text-rose-700 shadow-sm">
                  Private beta opening soon
                </span>
                <span className="rounded-full border border-rose-200 bg-white/80 px-3 py-1 text-xs font-medium text-rose-700 shadow-sm">
                  No public feed
                </span>
                <span className="rounded-full border border-rose-200 bg-white/80 px-3 py-1 text-xs font-medium text-rose-700 shadow-sm">
                  Family-first
                </span>
              </div>

              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
                Never lose touch with the people who matter most.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
                Kinnerly helps you send thoughtful check-ins, ask meaningful family
                questions, and save the stories you never want to lose — all through
                gentle reminders and private memory threads.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#waitlist"
                  className="group inline-flex items-center justify-center rounded-2xl bg-stone-950 px-6 py-4 font-semibold text-white shadow-xl shadow-stone-950/15 transition hover:bg-rose-700"
                >
                  Join the private beta
                  <ArrowRight className="ml-2 transition group-hover:translate-x-1" size={19} />
                </a>

                <a
                  href="#how"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-stone-900 shadow-sm ring-1 ring-stone-200 transition hover:bg-stone-50"
                >
                  See how it works
                </a>
              </div>

              <p className="mt-5 text-sm text-stone-500">
                Built for parents, grandparents, siblings, cousins, old friends,
                and the people you keep meaning to call.
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-xl shadow-rose-950/5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
                    One Question Drop
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-stone-950">
                    Start a memory thread
                  </h3>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
                  <Sparkles size={22} />
                </div>
              </div>

              <div className="rounded-3xl bg-stone-50 p-5">
                <p className="mb-2 text-sm font-medium text-stone-500">
                  Suggested question
                </p>
                <p className="text-2xl font-semibold leading-snug text-stone-950">
                  “{sampleQuestions[0]}”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-rose-500">
            How it works
          </p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Small moments. Lasting bonds.
          </h2>
          <p className="mt-4 text-lg leading-8 text-stone-600">
            Kinnerly turns good intentions into simple, meaningful actions that keep relationships alive.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard icon={CalendarHeart} title="Get gentle reminders">
            Receive thoughtful reminders, birthday prompts, and message ideas.
          </FeatureCard>

          <FeatureCard icon={MessageCircle} title="Ask one question">
            Send a private One Question Drop to family or close friends.
          </FeatureCard>

          <FeatureCard icon={BookHeart} title="Save the stories">
            Replies become private Memory Threads you can revisit for years.
          </FeatureCard>

          <FeatureCard icon={ShieldCheck} title="Private by design">
            No public feed. No posting without permission. You stay in control.
          </FeatureCard>
        </div>
      </section>

      <section className="bg-stone-950 px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-rose-300">
              The big idea
            </p>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Most people do not drift apart because they stop caring.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-300">
              They drift because life gets busy. Kinnerly helps you remember,
              reach out, and preserve what matters before the stories disappear.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-5 text-stone-950 shadow-2xl shadow-black/20">
            <div className="rounded-3xl bg-[#fff6f4] p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-600 text-white">
                  <Lock />
                </div>
                <div>
                  <p className="font-semibold">Private Memory Threads</p>
                  <p className="text-sm text-stone-500">
                    Family stories saved together
                  </p>
                </div>
              </div>

              <p className="text-sm font-medium text-stone-500">Question</p>
              <p className="mt-1 text-xl font-bold">
                “What is something Grandma always said?”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:px-10">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-rose-500">
            Early access
          </p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Help shape Kinnerly before launch.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">
            The first private beta will focus on families who want to stay closer,
            ask better questions, and preserve stories before they fade.
          </p>
        </div>

        <WaitlistForm />
      </section>

      <footer className="border-t border-stone-200 px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-stone-500 sm:flex-row">
          <p>© 2026 Kinnerly. Working prototype.</p>
          <p>Keep your people close.</p>
        </div>
      </footer>
    </main>
  );
}