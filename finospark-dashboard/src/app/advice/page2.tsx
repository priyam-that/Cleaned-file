import { Lightbulb, MessageSquare } from "lucide-react";

import { AIChatPanel } from "@/components/dashboard/ai-chat-panel";
import { Card, CardContent } from "@/components/ui/card";
import { getDashboardData } from "@/lib/server-data";

export default async function AdvicePage() {
  const data = await getDashboardData();
  const { insights, transactions } = data;

  const adviceList = [
    {
      title: "Cool down dining",
      detail: `Dining spend is up 18% week over week. Shift $${Math.round(
        insights.totals.week * 0.08
      ).toLocaleString()} to groceries for the next 7 days.`,
    },
    {
      title: "Lock in savings",
      detail: `You are ${insights.totals.savingsProgress}% toward the goal. Schedule a $${Math.round(
        insights.totals.month * 0.05
      ).toLocaleString()} transfer on payday to stay ahead.`,
    },
    {
      title: "Autopilot check",
      detail:
        "Spark is ready to run a new prediction once you share any large purchases coming up this quarter.",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-16 text-white lg:px-0">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">
          Spark AI advice
        </p>
        <h1 className="text-4xl font-semibold">Advice & co-pilot</h1>
        <p className="text-white/70">
          Review Spark&apos;s latest nudges and jump into a Gemini-powered chat
          whenever you need deeper guidance.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card className="border-white/10 bg-black/40">
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Lightbulb className="size-4 text-[#2CFF75]" />
                Spark recommendations
              </div>
              <ul className="space-y-3">
                {adviceList.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-sm font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="text-sm text-white/70">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-black/40">
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <MessageSquare className="size-4 text-[#2CFF75]" />
                Conversation starters
              </div>
              <ul className="grid gap-2 text-sm text-white/70 md:grid-cols-2">
                <li className="rounded-full border border-white/10 px-4 py-2">
                  “What spends can I trim before Friday?”
                </li>
                <li className="rounded-full border border-white/10 px-4 py-2">
                  “Predict next month’s travel budget.”
                </li>
                <li className="rounded-full border border-white/10 px-4 py-2">
                  “Show me how investing changes if I add $200.”
                </li>
                <li className="rounded-full border border-white/10 px-4 py-2">
                  “Summarize cashflow over the last quarter.”
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <AIChatPanel profile={data.profile} transactions={transactions} />
      </div>
    </div>
  );
}

