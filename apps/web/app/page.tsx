import { Button } from "@workspace/ui/components/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const metadata = {
  title: "Zesummary - AI Email Digest, Redefined",
  description:
    "Connect your email and get AI-powered summaries with smart categorization",
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b bg-background/50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Image
              src="/logo.png"
              alt="Zesummary"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zesummary
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <Button asChild variant="ghost" size="sm">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </motion.div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        <section className="py-24 md:py-32">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-7xl mx-auto px-4 text-center"
          >
            <motion.div
              variants={item}
              className="mb-8 relative w-32 h-32 mx-auto"
            >
              <Image
                src="/logo.png"
                alt="Zesummary Logo"
                fill
                className="object-contain"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10" />
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-700 bg-clip-text text-transparent"
            >
              AI Email Digest,
              <br />
              Redefined
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12"
            >
              Connect your email and let AI transform your inbox into smart,
              actionable summaries. Get what matters most, all in one place.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="shadow-lg group">
                <Link href="/signup">
                  Get Started Free
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </motion.svg>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/dashboard/demo">Try Demo</Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Experience Email Like Never Before
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Zesummary transforms how you interact with your inbox through
                intelligent summarization and organization.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl p-6 bg-gradient-to-br from-background to-muted hover:shadow-lg transition-all duration-300 group border h-full"
                >
                  <div className="mb-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Smart Digest Timeline
                </h2>
                <p className="text-muted-foreground mb-8">
                  View your emails in a chronological timeline with daily and
                  weekly highlights. Easy to scan and understand at a glance.
                </p>
                <ul className="space-y-4">
                  {[
                    "Chronological view of important emails",
                    "Daily and weekly summaries",
                    "Easily identify urgent messages",
                    "Track conversations over time",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-6 md:p-8 shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 rounded-full blur-2xl" />
                <div className="relative z-10 space-y-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">Today's Digest</h3>
                    <span className="text-xs text-muted-foreground">
                      June 15, 2023
                    </span>
                  </div>
                  {[
                    {
                      time: "9:32 AM",
                      title: "Meeting with Design Team",
                      tag: "Work",
                      urgent: true,
                    },
                    {
                      time: "11:45 AM",
                      title: "Electric Bill Payment Due",
                      tag: "Bills",
                      urgent: false,
                    },
                    {
                      time: "2:15 PM",
                      title: "Flight Confirmation: NYC Trip",
                      tag: "Travel",
                      urgent: false,
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-3 bg-background/80 backdrop-blur-sm rounded-lg border flex justify-between hover:shadow-md transition-all"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">
                            {item.title}
                          </span>
                          {item.urgent && (
                            <span className="px-1.5 py-0.5 text-[10px] bg-red-500/10 text-red-600 rounded-full">
                              Urgent
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {item.time}
                        </span>
                      </div>
                      <div className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary self-start">
                        {item.tag}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-4 border-t bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Image src="/logo.png" alt="Zesummary" width={32} height={32} />
            <span className="font-bold">Zesummary</span>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Zesummary. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    title: "Smart Digest Timeline",
    description:
      "View your emails in a chronological timeline with daily and weekly highlights.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
        <line x1="16" x2="16" y1="2" y2="6"></line>
        <line x1="8" x2="8" y1="2" y2="6"></line>
        <line x1="3" x2="21" y1="10" y2="10"></line>
        <path d="m9 16 2 2 4-4"></path>
      </svg>
    ),
  },
  {
    title: "Zen Mode Summaries",
    description:
      "Get the essence of your inbox in under a minute with minimalist bullet points.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
        <path d="M8 12h8"></path>
        <path d="M12 8v8"></path>
      </svg>
    ),
  },
  {
    title: "Auto-Actions Suggestions",
    description:
      "Get AI-suggested actions for your emails like marking bills as paid or unsubscribing.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <path d="m9 15 2 2 4-4"></path>
      </svg>
    ),
  },
  {
    title: "Mood Detection",
    description:
      "AI detects the tone of emails (urgent, angry, casual) to help identify important messages quickly.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 9.05v-.1"></path>
        <path d="M16 9.05v-.1"></path>
        <path d="M12 13a4 4 0 0 1-4 4"></path>
        <path d="M16 17a4 4 0 0 0-8 0"></path>
      </svg>
    ),
  },
  {
    title: "Zetag Inbox",
    description:
      "Auto-tagging system that labels emails as needs_reply, follow_up, meeting, invoice, and more.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z"></path>
        <path d="M6 9.01V9"></path>
        <path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"></path>
      </svg>
    ),
  },
  {
    title: "Mobile-First Design",
    description:
      "Clean interface with swipe gestures to archive, tag, reply, or summarize emails further.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <rect width="7" height="12" x="8.5" y="2" rx="1"></rect>
        <path d="M8.5 14H17a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2v-4c0-1.1.9-2 2-2z"></path>
      </svg>
    ),
  },
];
