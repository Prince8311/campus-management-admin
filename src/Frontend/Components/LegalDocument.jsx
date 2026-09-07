import { Children, cloneElement, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { LegalDocumentWrapper } from "../../Styles/Frontend/LegalDocumentStyle";

export default function LegalDocument({ type, introduction, children, updated, version }) {
    const privacy = type === "privacy";
    const cancellation = type === "cancellation";
    const title = privacy ? "Privacy Policy" : cancellation ? "Cancellation & Refund Policy" : "Terms & Conditions";
    const sections = Children.toArray(children);
    const [active, setActive] = useState(`${type}-overview`);
    const documentRef = useRef(null);
    const contents = [
        { id: `${type}-overview`, title: "Overview" },
        ...sections.map((section, index) => ({
            id: `${type}-section-${index + 1}`,
            title: Children.toArray(section.props.children)[0].props.children.replace(/^\d+\.\s*/, ""),
        })),
    ];

    useEffect(() => {
        const nodes = documentRef.current.querySelectorAll("[data-legal-section]");
        const observer = new IntersectionObserver((entries) => {
            const visible = entries.filter((entry) => entry.isIntersecting);
            if (visible.length) setActive(visible[0].target.id);
        }, { rootMargin: "-80px 0px -60% 0px", threshold: 0 });
        nodes.forEach((node) => observer.observe(node));
        return () => observer.disconnect();
    }, [type]);

    return (
        <LegalDocumentWrapper ref={documentRef} className={`legal-${type}`}>
            <div className="legal-shell">
                <aside className="legal-sidebar" aria-label="Legal documents">
                    <div className="sidebar-sticky">
                        <span className="eyebrow">LEGAL FRAMEWORK</span>
                        <p className="sidebar-caption">Clarity. Confidence. Connection.</p>
                        <nav className="document-tabs">
                            <NavLink to="/privacy-policy"><i aria-hidden="true" className="fa-solid fa-shield-halved" />Privacy Policy</NavLink>
                            <NavLink to="/terms-conditions"><i aria-hidden="true" className="fa-solid fa-file-contract" />Terms & Conditions</NavLink>
                            <NavLink to="/cancellation-refund-policy"><i aria-hidden="true" className="fa-solid fa-arrow-rotate-left" />Cancellation & Refund Policy</NavLink>
                        </nav>
                        <label className="mobile-jump">Jump to section
                            <select value={active} onChange={(event) => {
                                setActive(event.target.value);
                                document.getElementById(event.target.value)?.scrollIntoView();
                            }}>
                                {contents.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
                            </select>
                        </label>
                        <nav className="section-nav" aria-label="On this page">
                            <span className="eyebrow">ON THIS PAGE</span>
                            <div className="section-links">
                                {contents.map((item, index) => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined} onClick={() => setActive(item.id)}><span>{String(index).padStart(2, "0")}</span>{item.title}</a>)}
                            </div>
                        </nav>
                        <div className="sidebar-help"><i aria-hidden="true" className="fa-regular fa-comments" /><strong>We're here to help</strong><p>Have a question about our policies?</p><a href="mailto:support@educonnekt.in">Contact support <span aria-hidden="true">↗</span></a></div>
                    </div>
                </aside>
                <main className="legal-main">
                    <header className="legal-hero" id={`${type}-top`}>
                        <div className="hero-topline"><span className="eyebrow">EDU CONNEKT / LEGAL</span><span className="document-badge">OFFICIAL DOCUMENT</span></div>
                        <div className="hero-title"><div><h1>{title}</h1><p>{privacy ? "Your information. Your trust. Our responsibility." : cancellation ? "Clear policies for every step of your subscription." : "A clear foundation for our connected community."}</p></div><div className="hero-icon" aria-hidden="true"><i className={`fa-solid ${privacy ? "fa-shield-halved" : cancellation ? "fa-arrow-rotate-left" : "fa-file-contract"}`} /></div></div>
                        <div className="hero-meta"><span><i aria-hidden="true" className="fa-regular fa-file-lines" />{sections.length} sections</span><span><i aria-hidden="true" className="fa-solid fa-users" />For the Edu Connekt community</span>{updated && <span>Last Updated: {updated}</span>}{version && <span>Version {version}</span>}</div>
                    </header>
                    <section className="legal-overview" id={`${type}-overview`} data-legal-section>
                        <span className="eyebrow">BEFORE YOU BEGIN</span><h2>{privacy ? "Your privacy matters to us" : cancellation ? "The foundation of agreement" : "Understanding our agreement"}</h2>
                        {introduction}
                    </section>
                    <div className="legal-sections">{sections.map((section, index) => cloneElement(section, {
                        id: `${type}-section-${index + 1}`,
                        "data-legal-section": true,
                        "data-number": String(index + 1).padStart(2, "0"),
                        className: `content_box ${contents[index + 1].title === "Contact Information" ? "contact-card" : ""}`,
                    }))}</div>
                    <div className="legal-actions"><div><h2>Keep a copy. Stay informed.</h2><p>Save this {privacy || cancellation ? "policy" : "agreement"} for your records or get in touch.</p></div><div className="action-buttons"><button type="button" onClick={() => window.print()}><i aria-hidden="true" className="fa-solid fa-print" />Print / Save PDF</button><a href="mailto:support@educonnekt.in">Contact support <span aria-hidden="true">↗</span></a></div></div>
                    <a className="back-top" href={`#${type}-top`}>Back to top <span aria-hidden="true">↑</span></a>
                </main>
            </div>
        </LegalDocumentWrapper>
    );
}
