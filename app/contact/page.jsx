import A from "@/components/A";
import { RESUME_URL } from "@/lib/site";

export const metadata = {
  title: "Contact · Nathan Fang",
  description: "Happy to talk, even if it is early.",
};

export default function Contact() {
  return (
    <>

<section style={{ minHeight: "100vh", padding: "clamp(96px,10vw,150px) clamp(20px,5vw,56px) clamp(60px,8vw,100px)", maxWidth: "1180px", margin: "0 auto" }}>
  <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8880", marginBottom: "22px" }}>Contact</p>
  <h1 style={{ fontFamily: "'Playfair Display',serif", fontWeight: "400", fontSize: "clamp(2rem,4.4vw,3.4rem)", lineHeight: "1.12", maxWidth: "22ch", marginBottom: "24px", textWrap: "pretty" }}>Happy to talk, even if it's early</h1>
  <p style={{ color: "#3a3a38", lineHeight: "1.9", maxWidth: "56ch", marginBottom: "clamp(40px,6vw,64px)", textWrap: "pretty" }}>Email is fastest, and it's free. If you'd rather skip straight to a working session, a 30-minute diagnosis call is $200 — send me your last twenty posts beforehand and I'll come with a read on what's actually holding the program back.</p>

  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(max(260px,min(100%,46%)),1fr))", gap: "1px", background: "#e2dfd8", border: "1px solid #e2dfd8", maxWidth: "1000px" }}>
    <A href="mailto:nathanjfang3@gmail.com" style={{ background: "#f5f4f0", padding: "clamp(26px,3vw,36px)", textDecoration: "none", color: "#0d0d0d", display: "block" }} className="hv20">
      <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.66rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8a8880", display: "block", marginBottom: "14px" }}>Email</span>
      <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", wordBreak: "break-word" }}>nathanjfang3@gmail.com</span>
    </A>
    <A href="https://cal.com/nathan-fang-srvelw/30min?overlayCalendar=true" target="_blank" rel="noopener" style={{ background: "#f5f4f0", padding: "clamp(26px,3vw,36px)", textDecoration: "none", color: "#0d0d0d", display: "block" }} className="hv21">
      <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.66rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8a8880", display: "block", marginBottom: "14px" }}>Book a call — $200</span>
      <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem" }}>30 minutes, one diagnosis</span>
    </A>
    <A href="https://www.linkedin.com/in/nathan-j-fang/" target="_blank" rel="noopener" style={{ background: "#f5f4f0", padding: "clamp(26px,3vw,36px)", textDecoration: "none", color: "#0d0d0d", display: "block" }} className="hv22">
      <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.66rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8a8880", display: "block", marginBottom: "14px" }}>LinkedIn</span>
      <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem" }}>nathan-j-fang</span>
    </A>
    <A href="https://www.instagram.com/nathan_fang_/" target="_blank" rel="noopener" style={{ background: "#f5f4f0", padding: "clamp(26px,3vw,36px)", textDecoration: "none", color: "#0d0d0d", display: "block" }} className="hv23">
      <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.66rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8a8880", display: "block", marginBottom: "14px" }}>Instagram</span>
      <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem" }}>@nathan_fang_</span>
    </A>
  </div>

  {RESUME_URL ? (<><A href={RESUME_URL} style={{ display: "inline-block", marginTop: "clamp(36px,5vw,52px)", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", color: "#0d0d0d", borderBottom: "1px solid #c8b89a", paddingBottom: "4px" }} className="hv24">Download résumé (PDF) →</A></>) : null}
</section>

    </>
  );
}
