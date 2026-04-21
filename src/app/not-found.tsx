import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-heading text-8xl font-bold text-foreground/10">404</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-foreground px-6 py-2.5 text-sm font-semibold text-background transition-all hover:opacity-90"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
