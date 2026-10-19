import A from "@/components/A";

export default function Nav() {
  return (
<nav style={{ position: "fixed", top: "0", left: "0", right: "0", zIndex: "100", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px clamp(20px,5vw,56px)", background: "rgba(245,244,240,0.92)", backdropFilter: "blur(10px)", borderBottom: "1px solid #e2dfd8" }}>
  <A href="/" style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", letterSpacing: "0.02em", textDecoration: "none", color: "#0d0d0d" }}>Nathan Fang</A>
  <div style={{ display: "flex", gap: "clamp(16px,3vw,34px)", alignItems: "center" }}>
    <A href="/" style={{ fontSize: "0.74rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8a8880", textDecoration: "none" }} className="hv25">Work</A>
    <A href="/about" style={{ fontSize: "0.74rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8a8880", textDecoration: "none" }} className="hv26">About</A>
    <A href="/contact" style={{ fontSize: "0.74rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8a8880", textDecoration: "none" }} className="hv27">Contact</A>
  </div>
</nav>
  );
}
