import { Heart, MessageCircle, ShieldCheck, Users } from "lucide-react";

function InnerCircleCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-3xl border border-[#d9c7ad] bg-[#fffaf2] p-6 shadow-sm">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ead1bd] text-[#8d4d3f]">
        <Icon size={24} />
      </div>
      <h3 className="mb-2 text-lg font-black text-[#241925]">{title}</h3>
      <p className="text-sm leading-6 text-[#66584e]">{children}</p>
    </div>
  );
}

export default function InnerCirclesSection() {
  return (
    <section className="border-y border-[#d9c7ad] bg-[#fff6e8]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#a85f4c]">
              Memory Circles
            </p>

            <h2 className="text-4xl font-black tracking-tight text-[#241925] sm:text-5xl">
              Every memory belongs to someone.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#66584e]">
              Families and friendships overlap. Kinnerly lets you organize
              people into private Memory Circles for cousins, parents, old
              friends, reunions, family branches, trips, and the groups that
              shaped your life.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#66584e]">
              Add people privately for your own memory map and reminders, then
              invite them only when you are ready to share a Story Photo, Memory
              Starter, or Memory Thread.
            </p>

            <div className="mt-6 rounded-3xl border border-[#d9c7ad] bg-[#ead1bd] p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8d4d3f]">
                Simple rule
              </p>
              <p className="mt-2 text-lg font-black leading-7 text-[#241925]">
                One person can belong to several circles, because real memories
                and relationships overlap.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <InnerCircleCard icon={Users} title="Add people privately">
              Start with the people connected to your memories. Add a name,
              relationship, birthday, city, or note just for yourself.
            </InnerCircleCard>

            <InnerCircleCard icon={Heart} title="Create memory circles">
              Organize people into circles like Dad’s Side, Cousins, Old
              Friends, Reunion 2026, or Clemson Memories.
            </InnerCircleCard>

            <InnerCircleCard icon={MessageCircle} title="Invite when ready">
              Keep memories private, or invite people to answer prompts, share
              photos, and help fill in the missing pieces.
            </InnerCircleCard>

            <InnerCircleCard icon={ShieldCheck} title="Permission-based sharing">
              Invited members only see what you choose to share. Guests can
              answer simple prompts without downloading an app.
            </InnerCircleCard>
          </div>
        </div>
      </div>
    </section>
  );
}