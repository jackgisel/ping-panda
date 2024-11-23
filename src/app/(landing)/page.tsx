import { Check } from "lucide-react"

import { DiscordMessage } from "@/components/discord-message"
import { Heading } from "@/components/heading"
import MaxWidthWrapper from "@/components/max-width-wrapper"
import { MockDiscordUi } from "@/components/mock-discord-ui"
import ShinyButton from "@/components/shiny-button"
import { AnimatedList } from "@/components/ui/animated-list"
import Image from "next/image"

export default function HomePage() {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <Heading>
                <span>Real-Time Saas Insights</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">
                  Delivered to Your Discord
                </span>
              </Heading>
            </div>
            <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
              PingPanda is the easiest way to monitor your SaaS. Get instant
              notifications for{" "}
              <span className="font-semibold text-gray-700">
                sales, new users, or any other event
              </span>{" "}
              sent direct to your Discord.
            </p>

            <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-start">
              {[
                "Real-time Discord alerts for critical events",
                "Buy once, use forever",
                "Track sales, new users, or any other event",
              ].map((item, index) => (
                <li key={index} className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-brand-700" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="w-full max-w-80">
              <ShinyButton
                href="/sign-up"
                className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                Try now
              </ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="relative bg-brand-25 pb-4">
        <div className="absolute inset-x-0 bottom-24 top-24 bg-brand-700" />
        <div className="relative mx-auto">
          <MaxWidthWrapper className="relative">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <MockDiscordUi>
                <AnimatedList>
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avaterAlt="PingPanda avatar"
                    username="PingPanda"
                    timestamp="Today at 11:34am"
                    badgeText="Revenue"
                    badgeColor="#43b581"
                    title="🏋️ MRR Aquired"
                    content={{
                      name: "Jon Snow",
                      email: "therealtargerayan@gmail.com",
                    }}
                  />
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avaterAlt="PingPanda avatar"
                    username="PingPanda"
                    timestamp="Today at 11:57am"
                    badgeText="Revenue"
                    badgeColor="#43b581"
                    title="🏋️ MRR Aquired"
                    content={{
                      name: "Jake Peralta",
                      email: "goodcop@cox.net",
                    }}
                  />
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avaterAlt="PingPanda avatar"
                    username="PingPanda"
                    timestamp="Today at 11:59am"
                    badgeText="Sign Up"
                    badgeColor="#faa61a"
                    title="👦 New User"
                    content={{
                      name: "Amy Santiago",
                      email: "amy.santiago@gmail.com",
                    }}
                  />
                </AnimatedList>
              </MockDiscordUi>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <h2 className="text-center text-base/7 font-semibold text-brand-600">
              Intuitive Monitoring
            </h2>
            <Heading className="text-center">
              Stay ahead with real-time insights
            </Heading>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
            {/* bento grid 1 */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Real time notifications
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Get notified about critical events the moment they happen,
                    no matter if you're at home or on the go.
                  </p>
                </div>

                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 buttom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <Image
                      className="size-full object-cover object-top"
                      src="/phone-screen.png"
                      alt="Phone screen display app interface"
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section></section>
    </>
  )
}
