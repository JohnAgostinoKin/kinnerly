import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  BookHeart,
  CalendarHeart,
  CheckCircle2,
  Gift,
  Heart,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Analytics } from "@vercel/analytics/react";

import WaitlistForm from "./WaitlistForm";
import StoryPhotosSection from "./StoryPhotosSection";
import InnerCirclesSection from "./InnerCirclesSection";

const sampleQuestions = [
  "What is one family story we should never forget?",
  "What is something Grandma always said?",
  "What is your funniest memory from when we were kids?",
  "What is one thing Dad taught you without realizing it?",
  "What is a small moment with our family that still makes you smile?",
];

const nudges = [
  {
    name: "Mom",
    label: "Gentle check-in",
    message:
      "Text Mom: “I was thinking about you today. What’s one thing that made you smile this week?”",
  },
  {
    name: "Cousins",
    label: "Memory starter",
    message:
      "Ask your cousins: “What is the funniest thing that ever happened at a family gathering?”",
  },
  {
    name: "Dad",
    label: "Story prompt",
    message:
      "Ask Dad: “What was something your father taught you that you still remember?”",
  },
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#e8d3cf] bg-[#fffaf7]/90 px-3 py-1 text-xs font-semibold text-[#9f5557] shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function FeatureCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-3xl border border-[#e5d7d0] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4e7e4] text-[#b85f63]">
        <Icon size={24} />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-stone-950">{title}</h3>
      <p className="text-sm leading-6 text-stone-600">{children}</p>
    </div>
  );
}

function PromptDemo() {
  const [index, setIndex] = useState(0);
  const question = useMemo(() => sampleQuestions[index], [index]);

  return (
    <div className="rounded-[2rem] border border-[#e4d6cf] bg-[#fffaf7] p-5 shadow-xl shadow-rose-950/5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b85f63]">
            Memory Starter
          </p>
          <h3 className="mt-1 text-xl font-semibold text-stone-950">
            Start a memory thread
          </h3>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f4e7e4] text-[#b85f63]">
          <Sparkles size={22} />
        </div>
      </div>

      <div className="rounded-3xl bg-[#efe3dd] p-5">
        <p className="mb-2 text-sm font-medium text-stone-600">
          Suggested question
        </p>
        <p className="text-2xl font-semibold leading-snug text-stone-950">
          “{question}”
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          onClick={() => setIndex((index + 1) % sampleQuestions.length)}
          className="rounded-2xl border border-[#e4d6cf] bg-white px-4 py-3 text-sm font-semibold text-stone-800 transition hover:bg-[#faf6f3]"
        >
          New question
        </button>
        <button className="rounded-2xl bg-[#23262d] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#b85f63]">
          Send to family
        </button>
      </div>
    </div>
  );
}

function NudgeStack() {
  return (
    <div className="space-y-3">
      {nudges.map((nudge, idx) => (
        <div
          key={nudge.name}
          className={`rounded-3xl border border-[#e4d6cf] bg-white p-4 shadow-sm ${
            idx === 1 ? "ml-5" : ""
          }`}
        >
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#23262d] text-sm font-bold text-white">
                {nudge.name[0]}
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-950">
                  {nudge.name}
                </p>
                <p className="text-xs font-semibold text-[#b85f63]">
                  {nudge.label}
                </p>
              </div>
            </div>
            <Heart size={18} className="text-[#c97c7a]" />
          </div>
          <p className="text-sm leading-6 text-stone-600">{nudge.message}</p>
        </div>
      ))}
    </div>
  );
}

export default function KinnerlyLandingPage() {
  return (
    <main className="min-h-screen bg-[#f3ebe6] text-stone-950">
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[#c97c7a]/20 blur-3xl" />
        <div className="absolute right-[-10rem] top-40 h-[420px] w-[420px] rounded-full bg-[#cbb8a6]/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-6 sm:px-8 lg:px-10">
          <nav className="mb-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/favicon.png"
                alt="Kinnerly icon"
                className="h-12 w-12 rounded-2xl shadow-lg shadow-stone-950/10"
              />
              <div>
                <p className="text-xl font-bold tracking-tight">Kinnerly</p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                  Keep your people close.
                </p>
              </div>
            </div>

            <a
              href="#waitlist"
              className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-stone-900 shadow-sm ring-1 ring-[#e4d6cf] transition hover:bg-[#faf6f3] sm:inline-flex"
            >
              Join beta
            </a>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-5 flex flex-wrap gap-2">
                <Badge>Private beta opening soon</Badge>
                <Badge>No public feed</Badge>
                <Badge>Family-first</Badge>
              </div>

              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
                Never lose touch with the people who matter most.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
                Kinnerly helps families and close friends stay connected, ask
                meaningful questions, and save the stories behind the people,
                places, moments, and memories that matter.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#waitlist"
                  className="group inline-flex items-center justify-center rounded-2xl bg-[#23262d] px-6 py-4 font-semibold text-white shadow-xl shadow-stone-950/15 transition hover:bg-[#b85f63]"
                >
                  Join the private beta
                  <ArrowRight
                    className="ml-2 transition group-hover:translate-x-1"
                    size={19}
                  />
                </a>

                <a
                  href="#how"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-stone-900 shadow-sm ring-1 ring-[#e4d6cf] transition hover:bg-[#faf6f3]"
                >
                  See how it works
                </a>
              </div>

              <p className="mt-5 text-sm text-stone-500">
                Built for parents, grandparents, siblings, cousins, old friends,
                reunions, and the people you keep meaning to call.
              </p>
            </div>

            <div className="grid gap-5">
              <PromptDemo />
              <NudgeStack />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e5d7d0] bg-[#fcf8f6]/85 px-5 py-10 backdrop-blur">
        <div className="mx-auto grid max-w-6xl gap-6 text-center sm:grid-cols-3">
          <div>
            <p className="text-3xl font-black text-stone-950">People</p>
            <p className="mt-1 text-sm text-stone-600">
              keep track of who matters
            </p>
          </div>
          <div>
            <p className="text-3xl font-black text-stone-950">Places</p>
            <p className="mt-1 text-sm text-stone-600">
              city-level, never live tracking
            </p>
          </div>
          <div>
            <p className="text-3xl font-black text-stone-950">Memories</p>
            <p className="mt-1 text-sm text-stone-600">
              save the stories before they fade
            </p>
          </div>
        </div>
      </section>

      <section
        id="how"
        className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-[#e7d8d1] bg-[#efe3dd] px-5 py-20 shadow-sm sm:px-8 lg:px-10"
      >
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#b85f63]">
            How it works
          </p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Small moments. Lasting bonds.
          </h2>
          <p className="mt-4 text-lg leading-8 text-stone-600">
            Kinnerly turns good intentions into simple, meaningful actions that
            keep relationships and stories alive.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard icon={Users} title="Pick your people">
            Add the parents, grandparents, siblings, cousins, friends, or loved
            ones you never want to drift away from.
          </FeatureCard>

          <FeatureCard icon={MapPin} title="See where people are">
            Use a private city-level people map to know when travel brings you
            near someone who matters.
          </FeatureCard>

          <FeatureCard icon={MessageCircle} title="Ask one question">
            Send a simple Memory Starter without the pressure of a big group
            chat or public post.
          </FeatureCard>

          <FeatureCard icon={BookHeart} title="Save the stories">
            Replies become private Memory Threads your family can revisit for
            years.
          </FeatureCard>
        </div>
      </section>

      <StoryPhotosSection />

      <InnerCirclesSection />

      <section className="bg-[#23262d] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#f3dad3]">
              Kinnerly Map
            </p>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Know when life brings you close.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-300">
              Kinnerly can help you see family and close friends at the city
              level, so you do not miss a chance to reconnect when you are
              nearby.
            </p>
            <p className="mt-5 text-lg leading-8 text-stone-300">
              No exact addresses. No live tracking. No background GPS. Just a
              private reminder of where your people are.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#fffaf7] p-5 text-stone-950 shadow-2xl shadow-black/20">
            <div className="rounded-3xl bg-[#f4e7e4] p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b85f63] text-white">
                  <MapPin />
                </div>
                <div>
                  <p className="font-semibold">Private People Map</p>
                  <p className="text-sm text-stone-600">City-level only</p>
                </div>
              </div>

              <div className="grid gap-3">
                {["Mom · Greenville, SC", "Cousin Maria · Charlotte, NC", "Uncle Joe · Brooklyn, NY"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm"
                    >
                      <p className="text-sm font-semibold text-stone-800">
                        {item}
                      </p>
                      <MapPin size={18} className="text-[#b85f63]" />
                    </div>
                  )
                )}
              </div>

              <p className="mt-5 text-sm leading-6 text-stone-600">
                See people by city, organize them into Inner Circles, and get
                reminded when you are close enough to make a real connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-[#e7d8d1] bg-[#fcf8f6] px-5 py-20 shadow-sm sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#b85f63]">
              Private by design
            </p>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Not another social network.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              Kinnerly is built for real relationships, not public performance.
              Your memories, messages, and family stories belong to you and the
              people you choose.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <FeatureCard icon={Lock} title="No public feed">
              Memory Threads are private. There is no popularity contest, no
              followers, and no public profile by default.
            </FeatureCard>

            <FeatureCard icon={ShieldCheck} title="You stay in control">
              Nothing is posted or sent without your permission. You approve
              every prompt and every invitation.
            </FeatureCard>
          </div>
        </div>
      </section>

      <section
        id="waitlist"
        className="mx-auto my-6 grid max-w-7xl gap-10 rounded-[2rem] border border-[#e4d6cf] bg-[#faf6f3] px-5 py-20 shadow-sm sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:px-10"
      >
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#b85f63]">
            Early access
          </p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Help shape Kinnerly before launch.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">
            The first private beta will focus on families and close friends who
            want to stay closer, ask better questions, and preserve stories
            before they fade.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-[#e4d6cf]">
              <Mail className="mb-3 text-[#b85f63]" />
              <h3 className="font-bold">Beta invite</h3>
              <p className="mt-1 text-sm leading-6 text-stone-600">
                Get invited when the first real version is ready.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-[#e4d6cf]">
              <Sparkles className="mb-3 text-[#b85f63]" />
              <h3 className="font-bold">Founder feedback</h3>
              <p className="mt-1 text-sm leading-6 text-stone-600">
                Vote on the prompts, features, and family tools that matter
                most.
              </p>
            </div>
          </div>
        </div>

        <WaitlistForm />
      </section>

      <footer className="bg-[#23262d] px-5 py-10 text-stone-300 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm sm:flex-row">
          <p>© 2026 Kinnerly. Working prototype.</p>
          <p>
            People. Places. Moments. Memories.
            <span className="mx-2 text-stone-500">|</span>
            <a
              href="/privacy.html"
              className="font-semibold text-[#f3dad3] hover:text-white hover:underline"
            >
              Privacy Policy
            </a>
            <span className="mx-2 text-stone-500">|</span>
            <a
              href="/terms.html"
              className="font-semibold text-[#f3dad3] hover:text-white hover:underline"
            >
              Terms of Use
            </a>
          </p>
        </div>
      </footer>

      <Analytics />
    </main>
  );
}