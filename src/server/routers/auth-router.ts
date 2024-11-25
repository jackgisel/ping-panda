import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { router } from "../__internals/router"
import { publicProcedure } from "../procedures"

export const authRouter = router({
  getBaseSyncStatus: publicProcedure.query(async ({ c }) => {
    const auth = await currentUser()

    if (!auth) {
      return c.json({ isSynced: false })
    }

    const user = await db.user.findFirst({
      where: {
        externalId: auth.id,
      },
    })

    if (!user) {
      await db.user.create({
        data: {
          quotaLimit: 100,
          email: auth.emailAddresses[0].emailAddress,
          externalId: auth.id,
        },
      })

      return c.json({ isSynced: true })
    }

    return c.json({ isSynced: true })
  }),
})
