import InnerCirclesSection from "./InnerCirclesSection";
import { Analytics } from "@vercel/analytics/react";
import {
  Heart,
  Sparkles,
  MessageCircle,
  Lock,
  ArrowRight,
  CalendarHeart,
  BookHeart,
  ShieldCheck,
  MapPinned,
  Camera,
  Users,
} from "lucide-react";
import WaitlistForm from "./WaitlistForm";

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

function PillarCard({ title, text }) {
  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-stone-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-stone-600">{text}</p>
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
                  Keep your people close.
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
                  Private people map
                </span>
                <span className="rounded-full border border-rose-200 bg-white/80 px-3 py-1 text-xs font-medium text-rose-700 shadow-sm">
                  Story-driven photos
                </span>
              </div>

              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
                Never lose touch with the people who matter most.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
                Kinnerly helps you stay connected to family and friends through a
                private people map, meaningful reminders, one-question memory
                prompts, and story-driven photos that preserve the moments you
                never want to lose.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#waitlist"
                  className="group inline-flex items-center justify-center rounded-2xl bg-stone-950 px-6 py-4 font-semibold text-white shadow-xl shadow-stone-950/15 transition hover:bg-rose-700"
                >
                  Join the private beta
                  <ArrowRight
                    className="ml-2 transition group-hover:translate-x-1"
                    size={19}
                  />
                </a>

                <a
                  href="#how"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-stone-900 shadow-sm ring-1 ring-stone-200 transition hover:bg-stone-50"
                >
                  See how it works
                </a>
              </div>

              <p className="mt-5 text-sm text-stone-500">
                Private by design. No public feed. No exact-location tracking. No
                posting without permission.
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-xl shadow-rose-950/5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
                    Kinnerly Map
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-stone-950">
                    A private map of your people
                  </h3>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
                  <MapPinned size={22} />
                </div>
              </div>

              <div className="space-y-4 rounded-3xl bg-stone-50 p-5">
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-stone-200">
                  <p className="text-sm font-medium text-stone-500">Near your trip</p>
                  <p className="mt-1 text-lg font-semibold text-stone-950">
                    You’ll be near Charlotte next weekend
                  </p>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    Aunt Linda — 18 miles away
                    <br />
                    Cousin Maria — 27 miles away
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-stone-200">
  <p className="text-sm font-medium text-stone-500">
    Suggested message
  </p>
  <p className="mt-1 text-lg font-semibold leading-snug text-stone-950">
    “I’ll be near Charlotte next week and thought of you. Would love to say hello if timing works.”
  </p>
</div>
              </div>
            </div>
          </div>
        </div>
      </section>
 <section className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
          <div className="mb-4">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-rose-500">
              Core concept
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              People. Places. Moments. Memories.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <PillarCard
              title="People"
              text="Keep track of the family and close friends who matter most."
            />
            <PillarCard
              title="Places"
              text="See where your people are with a private city-level map."
            />
            <PillarCard
              title="Moments"
              text="Get gentle reminders for birthdays, travel, and meaningful check-ins."
            />
            <PillarCard
              title="Memories"
              text="Save the stories behind conversations, moments, and photos."
            />
          </div>
        </div>
      </section>
      <InnerCirclesSection />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
  <div className="mx-auto mb-12 max-w-3xl text-center">
    <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-rose-500">
      Memory Starters
    </p>
    <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
      One simple question can bring back a story.
    </h2>
    <p className="mt-4 text-lg leading-8 text-stone-600">
      Kinnerly helps you send meaningful prompts to family and close friends —
      then saves the replies as private Memory Threads.
    </p>
  </div>

  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
    <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
        Memory Starter
      </p>
      <p className="mt-3 text-lg font-semibold leading-8 text-stone-950">
        “What is one family story we should never forget?”
      </p>
    </div>

    <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
        Memory Starter
      </p>
      <p className="mt-3 text-lg font-semibold leading-8 text-stone-950">
        “What is something Grandma always said?”
      </p>
    </div>

    <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
        Memory Starter
      </p>
      <p className="mt-3 text-lg font-semibold leading-8 text-stone-950">
        “What do you remember about this photo?”
      </p>
    </div>

    <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
        Memory Starter
      </p>
      <p className="mt-3 text-lg font-semibold leading-8 text-stone-950">
        “What was Dad like when he was young?”
      </p>
    </div>

    <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
        Memory Starter
      </p>
      <p className="mt-3 text-lg font-semibold leading-8 text-stone-950">
        “What family recipe should never be lost?”
      </p>
    </div>

    <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600">
        Why it matters
      </p>
      <p className="mt-3 text-sm leading-7 text-stone-700">
        A simple prompt can unlock stories, details, and memories that might
        otherwise disappear. Kinnerly helps capture them while there’s still
        time.
      </p>
    </div>
  </div>
</section>

      <section
        id="how"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-rose-500">
            How it works
          </p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Small moments. Lasting bonds.
          </h2>
          <p className="mt-4 text-lg leading-8 text-stone-600">
            Kinnerly turns good intentions into simple, meaningful actions that
            help families and close friends stay connected.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard icon={Users} title="Add your people">
            Build a private circle of family members and close friends, with
            relationships, birthdays, notes, and meaningful details.
          </FeatureCard>

          <FeatureCard icon={MapPinned} title="See where they are">
            Use a private city-level people map to see who lives nearby, who is
            near your travels, and where your family branches are today.
          </FeatureCard>

          <FeatureCard icon={CalendarHeart} title="Get gentle reminders">
            Receive thoughtful nudges for birthdays, check-ins, holidays, and
            moments when life takes you near someone you care about.
          </FeatureCard>

          <FeatureCard icon={BookHeart} title="Save the stories">
            Turn small questions and shared memories into private threads your
            family can revisit for years.
          </FeatureCard>
        </div>
      </section>

      <section className="bg-stone-950 px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-rose-300">
              Featured concept
            </p>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Kinnerly Map helps you see where your people are.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-300">
              Family trees show where you came from. Kinnerly Map shows where
              your people are now. Discover relatives and close friends by city,
              see who is near your next trip, and get a nudge to reconnect while
              the moment is still there.
            </p>

            <ul className="mt-6 space-y-3 text-stone-200">
              <li>• Private city-level pins for family and friends</li>
              <li>• “People near me” and “Near my trip” ideas</li>
              <li>• Helpful reminders when you are close to someone you love</li>
              <li>• No exact addresses and no live tracking</li>
            </ul>
          </div>

          <div className="rounded-[2rem] bg-white p-5 text-stone-950 shadow-2xl shadow-black/20">
            <div className="rounded-3xl bg-[#fff6f4] p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-600 text-white">
                  <MapPinned />
                </div>
                <div>
                  <p className="font-semibold">Near My Trip</p>
                  <p className="text-sm text-stone-500">
                    Charlotte, NC next weekend
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="rounded-2xl bg-white p-4">
                  <p className="font-semibold">Aunt Linda</p>
                  <p className="text-sm text-stone-500">18 miles away</p>
                </div>
                <div className="rounded-2xl bg-white p-4">
                  <p className="font-semibold">Cousin Maria</p>
                  <p className="text-sm text-stone-500">27 miles away</p>
                </div>
                <div className="rounded-2xl bg-white p-4">
                  <p className="text-sm font-medium text-stone-500">
                    Suggested message
                  </p>
                  <p className="mt-1 text-sm text-stone-700">
                    “I’ll be near Charlotte next week and thought of you. Would
                    love to say hello if timing works.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-rose-500">
              New memory feature
            </p>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Story Photos preserve the memory behind the picture.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              Kinnerly is not just a place to store photos. It is a place to save
              the stories behind them. Share a meaningful picture, ask one simple
              question, and turn the replies into a private Memory Thread.
            </p>

            <ul className="mt-6 space-y-3 text-stone-700">
              <li>• Upload a meaningful family photo</li>
              <li>• Ask: “What do you remember about this day?”</li>
              <li>• Collect replies from family or close friends</li>
              <li>• Keep the photo and the story together</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-xl shadow-rose-950/5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
                  Story Photos
                </p>
                <h3 className="mt-1 text-xl font-semibold text-stone-950">
                  The story behind the photo
                </h3>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
                <Camera size={22} />
              </div>
            </div>

            <div className="rounded-3xl bg-stone-50 p-5">
              <div className="mb-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-stone-200">
                <p className="text-sm font-medium text-stone-500">Photo prompt</p>
                <p className="mt-1 text-lg font-semibold text-stone-950">
                  “What do you remember about this day?”
                </p>
              </div>

              <div className="space-y-3">
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-stone-200">
                  <p className="text-sm text-stone-600">
                    “That was the year Uncle Joe burned the turkey.”
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-stone-200">
                  <p className="text-sm text-stone-600">
                    “Grandma wore that apron every holiday.”
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-stone-200">
                  <p className="text-sm text-stone-600">
                    “That was our last Thanksgiving at the old house.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-10 sm:px-8 lg:px-10">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard icon={MessageCircle} title="Ask one question">
            Send one meaningful question to a family member or close friend and
            spark a story worth saving.
          </FeatureCard>

          <FeatureCard icon={Camera} title="Add story photos">
            Attach a photo to a memory so the image and the meaning stay together.
          </FeatureCard>

          <FeatureCard icon={Sparkles} title="Capture real moments">
            Kinnerly helps turn ordinary check-ins into stories, reflections, and
            keepsakes.
          </FeatureCard>

          <FeatureCard icon={ShieldCheck} title="Private by design">
            No public feed. No posting without permission. No exact-location
            tracking. You stay in control.
          </FeatureCard>
        </div>
      </section>

      <section
        id="waitlist"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:px-10"
      >
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-rose-500">
            Early access
          </p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Help shape Kinnerly before launch.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">
            We’re testing the first version of Kinnerly with people who care
            deeply about family, friendships, meaningful memories, and staying
            closer across distance.
          </p>

          <div className="mt-6 rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
              We’d especially love feedback on:
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-stone-700">
             <li>• Kinnerly Map</li>
	     <li>• Inner Circles</li>
	     <li>• Memory Starters</li>
	     <li>• Story Photos</li>
	     <li>• Gentle reminders for staying in touch</li>
            </ul>
          </div>
        </div>

        <WaitlistForm />
      </section>

          <footer className="border-t border-stone-200 px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-stone-500 sm:flex-row">
          <p>© 2026 Kinnerly. Working prototype.</p>
         <p>
  People. Places. Moments. Memories.
  <span className="mx-2">|</span>
  <a href="/privacy.html" className="font-semibold text-rose-600 hover:underline">
    Privacy Policy
  </a>
  <span className="mx-2">|</span>
  <a href="/terms.html" className="font-semibold text-rose-600 hover:underline">
    Terms of Use
  </a>
</p>
        </div>
      </footer>
      <Analytics />
    </main>
  );
}
