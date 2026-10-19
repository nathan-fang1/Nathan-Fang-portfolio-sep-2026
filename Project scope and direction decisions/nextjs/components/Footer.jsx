import A from "@/components/A";

export default function Footer() {
  return (
<footer style={{ padding: "28px clamp(20px,5vw,56px)", borderTop: "1px solid #e2dfd8", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
  <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.9rem" }}>Nathan Fang</span>
  <div style={{ display: "flex", gap: "22px", flexWrap: "wrap" }}>
    <A href="mailto:nathanjfang3@gmail.com" style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8a8880", textDecoration: "none" }} className="hv28">Email</A>
    <A href="https://www.linkedin.com/in/nathan-j-fang/" target="_blank" rel="noopener" style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8a8880", textDecoration: "none" }} className="hv29">LinkedIn</A>
    <A href="https://www.instagram.com/nathan_fang_/" target="_blank" rel="noopener" style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8a8880", textDecoration: "none" }} className="hv30">Instagram</A>
    <span style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#b3afa6" }}>nathanfang.com · 2026</span>
  </div>
</footer>
  );
}
