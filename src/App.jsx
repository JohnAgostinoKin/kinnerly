import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  BookHeart,
  Camera,
  CheckCircle2,
  Compass,
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

const memoryPrompts = [
  "What is one story our family should never lose?",
  "What do you remember about this photo?",
  "What family recipe, saying, or tradition should be saved?",
  "What is a place that always feels like family?",
  "What is one memory you wish more people knew?",
];

const memoryMoments = [
  {
    title: "Save an old story",
    text: "Ask one question before the details fade.",
  },
  {
    title: "Capture a new moment",
    text: "Turn today’s gathering, trip, or call into something worth keeping.",
  },
  {
    title: "Make the next memory",
    text: "Use people, places, and prompts to bring everyone together again.",
  },
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#d9bea6] bg-[#fff9ef]/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#8d4d3f] shadow-sm">
      {children}
    </span>
  );
}

function FeatureCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-3xl border border-[#d9c7ad] bg-[#fffaf2] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2b1d30]/10">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ead1bd] text-[#8d4d3f]">
        <Icon size={24} />
      </div>
      <h3 className="mb-2 text-lg font-black text-[#241925]">{title}</h3>
      <p className="text-sm leading-6 text-[#66584e]">{children}</p>
    </div>
  );
}

function MemoryPromptDemo() {
  const [index, setIndex] = useState(0);
  const question = useMemo(() => memoryPrompts[index], [index]);

  return (
    <div className="rounded-[2rem] border border-[#d9c7ad] bg-[#fffaf2] p-5 shadow-2xl shadow-[#2b1d30]/10">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a85f4c]">
            Memory Starter
          </p>
          <h3 className="mt-1 text-xl font-black text-[#241925]">
            One question can save a story.
          </h3>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fffaf2] shadow-sm ring-1 ring-[#d9c7ad]">
          <img
            src="/favicon.png"
            alt="Kinnerly"
            className="h-9 w-9 rounded-xl"
          />
        </div>
      </div>

      <div className="rounded-3xl bg-[#efe5d4] p-5">
        <p className="mb-2 text-sm font-semibold text-[#66584e]">
          Suggested question
        </p>
        <p className="text-2xl font-black leading-snug text-[#241925]">
          “{question}”
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          onClick={() => setIndex((index + 1) % memoryPrompts.length)}
          className="rounded-2xl border border-[#d9c7ad] bg-white px-4 py-3 text-sm font-bold text-[#241925] transition hover:bg-[#fff4e6]"
        >
          New prompt
        </button>
        <button className="rounded-2xl bg-[#241925] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#8d4d3f]">
          Save memory
        </button>
      </div>
    </div>
  );
}

function MemoryMomentStack() {
  return (
    <div className="space-y-3">
      {memoryMoments.map((moment, idx) => (
        <div
          key={moment.title}
          className={`rounded-3xl border border-[#d9c7ad] bg-[#fffaf2] p-4 shadow-sm ${
            idx === 1 ? "ml-5" : ""
          }`}
        >
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#241925] text-white">
                <Heart size={17} />
              </div>
              <div>
                <p className="text-sm font-black text-[#241925]">
                  {moment.title}
                </p>
                <p className="text-xs font-bold text-[#a85f4c]">
                  Kinnerly moment
                </p>
              </div>
            </div>
            <CheckCircle2 size={18} className="text-[#d6a64f]" />
          </div>
          <p className="text-sm leading-6 text-[#66584e]">{moment.text}</p>
        </div>
      ))}
    </div>
  );
}

export default function KinnerlyLandingPage() {
  return (
    <main className="min-h-screen bg-[#efe5d4] text-[#241925]">
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-[#d6a64f]/20 blur-3xl" />
        <div className="absolute right-[-10rem] top-36 h-[440px] w-[440px] rounded-full bg-[#8d4d3f]/18 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-6 sm:px-8 lg:px-10">
          <nav className="mb-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/favicon.png"
                alt="Kinnerly icon"
                className="h-12 w-12 rounded-2xl shadow-lg shadow-[#241925]/15"
              />
              <div>
                <p className="text-xl font-black tracking-tight">Kinnerly</p>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8d4d3f]">
                  Because memories matter most.
                </p>
              </div>
            </div>

            <a
              href="#waitlist"
              className="hidden rounded-full bg-[#fffaf2] px-5 py-2.5 text-sm font-bold text-[#241925] shadow-sm ring-1 ring-[#d9c7ad] transition hover:bg-white sm:inline-flex"
            >
              Join beta
            </a>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-5 flex flex-wrap gap-2">
                <Badge>Private memory platform</Badge>
                <Badge>Old stories</Badge>
                <Badge>New moments</Badge>
              </div>

              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-[#241925] sm:text-6xl lg:text-7xl">
                Preserve the memories that matter most — and make new ones
                together.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#66584e] sm:text-xl">
                Kinnerly is a private place for families and close friends to
                save old stories, remember the people and places that shaped
                them, and create more moments worth keeping.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#waitlist"
                  className="group inline-flex items-center justify-center rounded-2xl bg-[#241925] px-6 py-4 font-bold text-white shadow-xl shadow-[#241925]/20 transition hover:bg-[#8d4d3f]"
                >
                  Join the private beta
                  <ArrowRight
                    className="ml-2 transition group-hover:translate-x-1"
                    size={19}
                  />
                </a>

                <a
                  href="#story-photos"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#fffaf2] px-6 py-4 font-bold text-[#241925] shadow-sm ring-1 ring-[#d9c7ad] transition hover:bg-white"
                >
                  See Story Photos
                </a>
              </div>

              <p className="mt-5 text-sm text-[#75665b]">
                Not a public social network. Not a family tree. A private home
                for memories, stories, photos, and moments.
              </p>
            </div>

            <div className="grid gap-5">
              <MemoryPromptDemo />
              <MemoryMomentStack />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d9c7ad] bg-[#fff6e8]/80 px-5 py-10 backdrop-blur">
        <div className="mx-auto grid max-w-6xl gap-6 text-center sm:grid-cols-3">
          <div>
            <p className="text-3xl font-black text-[#241925]">Preserve</p>
            <p className="mt-1 text-sm text-[#66584e]">
              save the stories before they fade
            </p>
          </div>
          <div>
            <p className="text-3xl font-black text-[#241925]">Remember</p>
            <p className="mt-1 text-sm text-[#66584e]">
              old photos, places, people, and traditions
            </p>
          </div>
          <div>
            <p className="text-3xl font-black text-[#241925]">Make</p>
            <p className="mt-1 text-sm text-[#66584e]">
              new memories with the people who matter
            </p>
          </div>
        </div>
      </section>

      <section
        id="how"
        className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-[#d9c7ad] bg-[#fff4e2] px-5 py-20 shadow-sm sm:px-8 lg:px-10"
      >
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#a85f4c]">
            What Kinnerly does
          </p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            A memory home for your real people.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#66584e]">
            Kinnerly helps turn scattered photos, forgotten stories, family
            questions, and future plans into something private, organized, and
            worth keeping.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard icon={Camera} title="Story Photos">
            Add an old photo, ask one question, and save the story behind the
            image before it disappears.
          </FeatureCard>

          <FeatureCard icon={MessageCircle} title="Memory Starters">
            Send thoughtful prompts that bring back stories, sayings, recipes,
            traditions, and family details.
          </FeatureCard>

          <FeatureCard icon={BookHeart} title="Memory Threads">
            Keep responses, photos, and reflections together in private threads
            your family can revisit.
          </FeatureCard>

          <FeatureCard icon={Compass} title="Make New Memories">
            Use people, places, and gentle reminders to create more real moments
            together.
          </FeatureCard>
        </div>
      </section>

      <section className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-[#d9c7ad] bg-[#241925] px-5 py-20 text-white shadow-2xl shadow-[#241925]/20 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#d6a64f]">
              Memory Map
            </p>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              See where new memories can happen next.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#e8dac8]">
              Kinnerly’s map is not about tracking people. It is about noticing
              when life brings you close enough to call, visit, plan dinner, or
              make a memory you almost missed.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#e8dac8]">
              City-level only. No exact addresses. No live GPS. No public
              location feed.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#fffaf2] p-5 text-[#241925] shadow-2xl shadow-black/25">
            <div className="rounded-3xl bg-[#efe5d4] p-5">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8d4d3f] text-white">
                  <MapPin />
                </div>
                <div>
                  <p className="font-black">Memory Map</p>
                  <p className="text-sm text-[#66584e]">
                    Places connected to your people
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                {[
                  "Aunt Mary · Greenville, SC",
                  "Cousin Maria · Charlotte, NC",
                  "College friends · Clemson, SC",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl bg-[#fffaf2] p-4 shadow-sm"
                  >
                    <p className="text-sm font-bold text-[#241925]">{item}</p>
                    <MapPin size={18} className="text-[#a85f4c]" />
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-[#66584e]">
                Use the map to remember who is nearby, where family stories
                happened, and where the next memory could be made.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StoryPhotosSection />

      <InnerCirclesSection />

      <section className="mx-auto my-6 max-w-7xl rounded-[2rem] border border-[#d9c7ad] bg-[#fffaf2] px-5 py-20 shadow-sm sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#a85f4c]">
              Private by design
            </p>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Built for memories, not performance.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#66584e]">
              Kinnerly is not trying to be another public social app. It is for
              the photos, stories, people, and moments that are too meaningful
              to get buried in a feed.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <FeatureCard icon={Lock} title="No public feed">
              Memories stay private to the people and circles you choose. No
              followers, likes, or public posting pressure.
            </FeatureCard>

            <FeatureCard icon={ShieldCheck} title="You control sharing">
              Invite people only when you are ready, and decide which memories,
              photos, and prompts are shared.
            </FeatureCard>
          </div>
        </div>
      </section>

      <section
        id="waitlist"
        className="mx-auto my-6 grid max-w-7xl gap-10 rounded-[2rem] border border-[#d9c7ad] bg-[#fff4e2] px-5 py-20 shadow-sm sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:px-10"
      >
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#a85f4c]">
            Early access
          </p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Help shape Kinnerly before launch.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#66584e]">
            The first private beta will focus on families and close friends who
            want to preserve old memories, capture new ones, and keep their most
            important stories alive.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-[#fffaf2] p-5 shadow-sm ring-1 ring-[#d9c7ad]">
              <Mail className="mb-3 text-[#a85f4c]" />
              <h3 className="font-black">Beta invite</h3>
              <p className="mt-1 text-sm leading-6 text-[#66584e]">
                Get invited when the first memory-focused version is ready.
              </p>
            </div>

            <div className="rounded-3xl bg-[#fffaf2] p-5 shadow-sm ring-1 ring-[#d9c7ad]">
              <Sparkles className="mb-3 text-[#a85f4c]" />
              <h3 className="font-black">Founder feedback</h3>
              <p className="mt-1 text-sm leading-6 text-[#66584e]">
                Help choose the prompts, Story Photo tools, and memory features
                that matter most.
              </p>
            </div>
          </div>
        </div>

        <WaitlistForm />
      </section>

      <footer className="bg-[#241925] px-5 py-10 text-[#e8dac8] sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm sm:flex-row">
          <p>© 2026 Kinnerly. Working prototype.</p>
          <p>
            Preserve old memories. Make new ones together.
            <span className="mx-2 text-[#9b8b7e]">|</span>
            <a
              href="/privacy.html"
              className="font-bold text-[#d6a64f] hover:text-white hover:underline"
            >
              Privacy Policy
            </a>
            <span className="mx-2 text-[#9b8b7e]">|</span>
            <a
              href="/terms.html"
              className="font-bold text-[#d6a64f] hover:text-white hover:underline"
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