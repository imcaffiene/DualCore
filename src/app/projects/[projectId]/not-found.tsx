import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
      <div>
        <p className="font-heading text-8xl font-bold text-foreground/10">404</p>
        <h1 className="mt-4 font-heading text-4xl font-bold text-foreground">
          Project not found
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          That case study doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/projects"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition-all hover:opacity-90"
        >
          See all work <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
