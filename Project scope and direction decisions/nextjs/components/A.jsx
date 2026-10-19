import Link from "next/link";

// Internal links route client-side; everything else renders a plain anchor.
export default function A({ href = "", children, ...rest }) {
  const internal = href.startsWith("/") && !href.startsWith("//");
  if (internal) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
