"use client"

import { Card } from "@/components/ui/card"
import { QUOTAS } from "@/config"
import { client } from "@/lib/client"
import { Plan } from "@prisma/client"
import { useMutation, useQuery } from "@tanstack/react-query"
import { format } from "date-fns"
import { BarChart } from "lucide-react"
import { useRouter } from "next/navigation"

interface UpgradePageContentProps {
  plan: Plan
}

export const UpgradePageContent = ({ plan }: UpgradePageContentProps) => {
  const router = useRouter()

  const { mutate: createCheckoutSession } = useMutation({
    mutationFn: async () => {
      const res = await client.payment.createCheckoutSession.$post()
      return await res.json()
    },
    onSuccess: ({ url }) => {
      if (url) router.push(url)
    },
  })

  const { data: usage, isLoading: usageLoading } = useQuery({
    queryKey: ["usage"],
    queryFn: async () => {
      const res = await client.project.getUsage.$get()
      return await res.json()
    },
  })

  return (
    <div className="max-w-3xl flex flex-col gap-8">
      <div>
        <h1 className="mt-1 text-xl/8 font-medium tracking-tight text-gray-900">
          {plan === "PRO" ? "Plan: Pro" : "Plan: Free"}
        </h1>
        <p className="text-sm/6 text-gray-600 max-w-prose">
          {plan === "PRO"
            ? "Thank you for supporting PingPanda. Find you increased usage limits below."
            : "Get access to more events, categories and premium support."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-2 border-brand-700">
          <div className="flex flex-row items-center justify-between space-y-2 pb-2">
            <p className="text-sm/6 font-medium">Total Events</p>
            <BarChart className="size-4 text-muted-foreground" />
          </div>

          <div>
            <p className="text-2xl font-bold">
              {usage?.eventsUsed || 0} of{" "}
              {usage?.eventsLimit.toLocaleString() ??
                QUOTAS.FREE.maxEventsPerMonth}
            </p>
            <p className="text-xs/5 text-muted-foreground">
              Events this period
            </p>
          </div>
        </Card>

        <Card className="">
          <div className="flex flex-row items-center justify-between space-y-2 pb-2">
            <p className="text-sm/6 font-medium">Event Categories</p>
            <BarChart className="size-4 text-muted-foreground" />
          </div>

          <div>
            <p className="text-2xl font-bold">
              {usage?.categoriesUsed || 0} of{" "}
              {usage?.categoriesLimit.toLocaleString() ??
                QUOTAS.FREE.maxEventCategories}
            </p>
            <p className="text-xs/5 text-muted-foreground">Active categories</p>
          </div>
        </Card>
      </div>

      <p className="text-sm text-gray-500">
        Usage will reset{" "}
        {usage?.resetDate ? (
          format(usage.resetDate, "MMM d, yyyy")
        ) : (
          <span className="animate-pulse w-8 h-4 bg-gray-200"></span>
        )}{" "}
        {plan !== "PRO" ? (
          <span
            onClick={() => createCheckoutSession()}
            className="inline cursor-pointer underline text-brand-600"
          >
            or upgrade now to increase your limit &rarr;
          </span>
        ) : null}
      </p>
    </div>
  )
}