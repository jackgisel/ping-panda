"use client"

import { client } from "@/lib/client"
import { useQuery } from "@tanstack/react-query"

export const DashboardPageContent = () => {
  const { data } = useQuery({
    queryKey: ["user-event-categories"],
    queryFn: async () => {
      const categories = await client.category.getEventCategories.$get()
      return categories.json()
    },
  })

  return <></>
}
