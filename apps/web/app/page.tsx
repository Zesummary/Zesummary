import { Button } from "@workspace/ui/components/button";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Zesummary - AI Email Digest, Redefined",
  description:
    "Connect your email and get AI-powered summaries with smart categorization",
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full py-6 px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Zesummary" width={40} height={40} />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Zesummary
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" size="sm">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="mb-8">
            <Image
              src="/logo.png"
              alt="Zesummary Logo"
              width={120}
              height={120}
              className="mx-auto"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 max-w-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-700 bg-clip-text text-transparent">
            AI Email Digest, Redefined
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mb-10">
            Connect your email account and let AI summarize your inbox into
            smart categories. Get what matters most, all in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="shadow-lg">
              <Link href="/signup">
                Get Started Free
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
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
                </svg>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/dashboard/demo">Try Demo</Link>
            </Button>
          </div>
        </section>

        <section id="features" className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Elevate Your Email Experience
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Zesummary transforms how you interact with your inbox through
                intelligent summarization and organization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-border"
                >
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-4 md:px-8 bg-muted/30 border-t">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image src="/logo.png" alt="Zesummary" width={32} height={32} />
            <span className="font-bold">Zesummary</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Redefining how you experience email with AI-powered summaries.
          </p>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Zesummary. All rights reserved.
          </div>
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
