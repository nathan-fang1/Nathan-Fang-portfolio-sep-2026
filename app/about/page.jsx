import A from "@/components/A";
import { RESUME_URL } from "@/lib/site";

export const metadata = {
  title: "About · Nathan Fang",
  description: "I am a content person who ended up building systems.",
};

export default function About() {
  return (
    <>

<section style={{ padding: "clamp(96px,10vw,150px) clamp(20px,5vw,56px) clamp(60px,8vw,100px)", maxWidth: "1180px", margin: "0 auto" }}>
  <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(32px,5vw,72px)", alignItems: "flex-start" }}>
    <div style={{ flex: "1 1 460px" }}>
      <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8880", marginBottom: "22px" }}>About</p>
      <h1 style={{ fontFamily: "'Playfair Display',serif", fontWeight: "400", fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: "1.12", marginBottom: "32px", maxWidth: "24ch", textWrap: "pretty" }}>I'm a content person who ended up building systems</h1>
      <div style={{ maxWidth: "60ch" }}>
        <p style={{ color: "#3a3a38", lineHeight: "1.9", marginBottom: "20px", textWrap: "pretty" }}>I've spent about six years making short-form video and studying why some of it travels. First on my own accounts, then inside startups, where the question stopped being “can I make a video that works” and became “can a team of people I don't control make videos that work, repeatedly, after I stop paying attention.”</p>
        <p style={{ color: "#3a3a38", lineHeight: "1.9", marginBottom: "20px", textWrap: "pretty" }}>Most of my work looks like diagnosis. A program isn't performing, and the cause is either the creative premise, the execution, the creators, or the system around them. They need very different fixes, and picking the wrong one wastes months. I've wasted a couple of months on the wrong one before, which is mostly how I learned to tell them apart.</p>
        <p style={{ color: "#3a3a38", lineHeight: "1.9", marginBottom: "20px", textWrap: "pretty" }}>I'm from California, studied at UCSD, and I'm currently taking on a small number of projects with startups who need organic distribution and don't have a budget for paid.</p>
      </div>
      <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "36px" }}>
        {RESUME_URL ? (<><A href={RESUME_URL} style={{ fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", color: "#f5f4f0", background: "#0d0d0d", padding: "14px 26px" }} className="hv18">Download résumé (PDF)</A></>) : null}
        <A href="/contact" style={{ fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", color: "#0d0d0d", border: "1px solid #0d0d0d", padding: "14px 26px" }} className="hv19">Contact</A>
      </div>
    </div>
    <div style={{ flex: "0 1 300px" }}>
      <img src="/about.jpg" alt="Nathan Fang" style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", filter: "grayscale(12%)", display: "block", marginBottom: "16px" }} />
      <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.66rem", letterSpacing: "0.06em", color: "#8a8880", lineHeight: "1.6" }}>Nathan Fang · replace with a photo you like</p>
    </div>
  </div>

  <div style={{ marginTop: "clamp(56px,8vw,96px)", paddingTop: "clamp(36px,5vw,52px)", borderTop: "1px solid #e2dfd8" }}>
    <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: "400", fontSize: "clamp(1.4rem,2.4vw,2rem)", marginBottom: "clamp(28px,4vw,44px)" }}>Timeline</h2>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(16px,3vw,40px)", padding: "22px 0", borderTop: "1px solid #e2dfd8" }}>
        <span style={{ flex: "0 0 150px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.72rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#8a8880" }}>2020 — 2023</span>
        <div style={{ flex: "1 1 300px" }}><h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: "400", fontSize: "1.15rem", marginBottom: "6px" }}>My own accounts</h3><p style={{ fontSize: "0.93rem", color: "#5a5852", lineHeight: "1.75", maxWidth: "60ch", textWrap: "pretty" }}>Comedy to 200K followers. An anonymous breakup account to 60K, 2M likes and an 8M view video.</p></div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(16px,3vw,40px)", padding: "22px 0", borderTop: "1px solid #e2dfd8" }}>
        <span style={{ flex: "0 0 150px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.72rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#8a8880" }}>Jul — Dec 2025</span>
        <div style={{ flex: "1 1 300px" }}><h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: "400", fontSize: "1.15rem", marginBottom: "6px" }}>Turbo AI</h3><p style={{ fontSize: "0.93rem", color: "#5a5852", lineHeight: "1.75", maxWidth: "60ch", textWrap: "pretty" }}>Creator and influencer operations. 100+ creators, 196M organic views in six months.</p></div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(16px,3vw,40px)", padding: "22px 0", borderTop: "1px solid #e2dfd8" }}>
        <span style={{ flex: "0 0 150px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.72rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#8a8880" }}>Feb — Aug 2026</span>
        <div style={{ flex: "1 1 300px" }}><h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: "400", fontSize: "1.15rem", marginBottom: "6px" }}>BeFreed</h3><p style={{ fontSize: "0.93rem", color: "#5a5852", lineHeight: "1.75", maxWidth: "60ch", textWrap: "pretty" }}>Rebuilt the UGC program: sourcing, coaching, creative strategy, SOPs and an internal creator CRM. 120M campaign views.</p></div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(16px,3vw,40px)", padding: "22px 0", borderTop: "1px solid #e2dfd8", borderBottom: "1px solid #e2dfd8" }}>
        <span style={{ flex: "0 0 150px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.72rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#8a8880" }}>Jul 2026 — now</span>
        <div style={{ flex: "1 1 300px" }}><h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: "400", fontSize: "1.15rem", marginBottom: "6px" }}>Iru</h3><p style={{ fontSize: "0.93rem", color: "#5a5852", lineHeight: "1.75", maxWidth: "60ch", textWrap: "pretty" }}>Creative direction for a two-person content team. 4.3M+ views across three breakout reels.</p></div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
