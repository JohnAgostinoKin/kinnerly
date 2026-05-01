import { Users, MessageCircle, ShieldCheck, CircleDotDashed } from "lucide-react";

function InnerCircleCard({ icon: Icon, title, children }) {
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

export default function InnerCirclesSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-rose-500">
            Inner Circles
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Organize the people who matter most.
          </h2>

          <p className="mt-5 text-lg leading-8 text-stone-600">
            Families and friendships overlap. Kinnerly lets you create flexible
            private circles for cousins, close friends, family branches, reunions,
            travel groups, and the people you want to stay close to.
          </p>

          <p className="mt-5 text-lg leading-8 text-stone-600">
            Add people privately for your own map and reminders, then invite them
            only when you are ready to share a Memory Starter, Story Photo, or
            Memory Thread.
          </p>

          <div className="mt-6 rounded-3xl border border-rose-200 bg-rose-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-600">
              Simple rule
            </p>
            <p className="mt-2 text-lg font-semibold leading-7 text-stone-950">
              One person can belong to several circles, because real
              relationships overlap.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <InnerCircleCard icon={Users} title="Add people privately">
            Start with the people who matter most. Add a name, relationship,
            birthday, city, or note just for yourself. No invitation required.
          </InnerCircleCard>

          <InnerCircleCard icon={CircleDotDashed} title="Create flexible circles">
            Organize people into circles like Cousins, Dad's Side, Close Friends,
            Reunion 2026, or Charlotte Area Family.
          </InnerCircleCard>

          <InnerCircleCard icon={MessageCircle} title="Invite when ready">
            Keep circles private, or invite people to answer Memory Starters,
            share Story Photos, and contribute to shared Memory Threads.
          </InnerCircleCard>

          <InnerCircleCard icon={ShieldCheck} title="Permission-based sharing">
            Invited members only see what you choose to share. Guests can answer
            simple prompts without downloading an app.
          </InnerCircleCard>
        </div>
      </div>
    </section>
  );
}