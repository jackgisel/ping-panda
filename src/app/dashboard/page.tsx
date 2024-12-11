import { CreateEventCategoryModal } from "@/components/create-event-category-modal"
import { DashboardPage } from "@/components/dashboard-page"
import { PaymentSuccessModal } from "@/components/payment-success-modal"
import { Button } from "@/components/ui/button"
import { db } from "@/db"
import { createCheckoutSession } from "@/lib/stripe"
import { currentUser } from "@clerk/nextjs/server"
import { PlusIcon } from "lucide-react"
import { redirect } from "next/navigation"
import { DashboardPageContent } from "./dashboard-page-content"

interface PageProps {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined
  }>
}

const Page = async (props: PageProps) => {
  const searchParams = await props.searchParams;
  const intent = searchParams.intent
  const auth = await currentUser()

  if (!auth) {
    redirect("/sign-in")
  }

  const user = await db.user.findUnique({
    where: {
      externalId: auth.id,
    },
  })

  if (!user) {
    redirect("/sign-in")
  }

  if (intent === "upgrade") {
    const session = await createCheckoutSession({
      userEmail: user.email,
      userId: user.id,
    })
    if (session.url) redirect(session.url)
  }

  const success = searchParams.success

  return (
    <>
      {success ? <PaymentSuccessModal /> : null}
      <DashboardPage
        title="Dashboard"
        hideBackButton
        cta={
          <CreateEventCategoryModal>
            <Button className="w-full sm:w-fit">
              <PlusIcon className="size-4 mr-2 " />
              Add Category
            </Button>
          </CreateEventCategoryModal>
        }
      >
        <DashboardPageContent />
      </DashboardPage>
    </>
  )
}

export default Page
