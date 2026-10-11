import { Fade } from "@mui/material";
import { LibraryCardPreviewWrapper } from "../../../Styles/Modals/LibraryCardPreviewStyle";

// Static preview data; replace with the library card API response when available.
const previewCard = {
    school: "Greenfield International",
    name: "Aarav Sharma",
    libraryId: "LIB-2026-0148",
    className: "IX-B",
    session: "2026-27",
    validUntil: "31 Mar 2027",
};

export default function LibraryCardPreview({ open, onClose }) {
    return (
        <LibraryCardPreviewWrapper open={open} onClose={onClose} closeAfterTransition className="library-card-modal"
            slotProps={{ backdrop: { timeout: 400, className: "library-card-backdrop" } }}>
            <Fade in={open} timeout={{ enter: 450, exit: 300 }}>
                <div className="library-card-stage" role="dialog" aria-modal="true" aria-labelledby="library-card-title" tabIndex={-1}>
                    <div className="library-card-toolbar">
                        <span><span className="library-card-status" /> DIGITAL LIBRARY PASS</span>
                        <button type="button" onClick={onClose} aria-label="Close library card"><span aria-hidden="true">×</span></button>
                    </div>
                    <div className="library-card-perspective">
                        <div className="library-card-spinner">
                            <article className="library-card-face library-card-front">
                                <header className="library-card-header">
                                    <img className="library-card-library-background" src={`${process.env.PUBLIC_URL || ""}/images/library-card/library-interior.png`} alt="" aria-hidden="true" />
                                    <div className="library-card-logo"><img src={`${process.env.PUBLIC_URL || ""}/images/logo-1.png`} alt="School logo" /></div>
                                    <div className="library-card-school"><h2>{previewCard.school}</h2><p>School Library</p><span>READ &nbsp; | &nbsp; LEARN &nbsp; | &nbsp; EXPLORE &nbsp; | &nbsp; GROW</span></div>
                                    <div className="library-card-motto">A brighter<br />mind for<br />a brighter<br />tomorrow<span /></div>
                                    <svg className="library-card-wave" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true"><path fill="#26cee0" d="M0 65 Q160 140 350 45 T720 50 T1000 15 V100 H0Z" /><path fill="#edf5fc" d="M0 75 Q150 140 350 65 T730 70 T1000 40 V100 H0Z" /></svg>
                                </header>
                                <div className="library-card-body">
                                    <img className="library-card-campus-background" src={`${process.env.PUBLIC_URL || ""}/images/library-card/campus-watermark.png`} alt="" aria-hidden="true" />
                                    <aside className="library-card-identity">
                                        <div className="library-card-portrait" aria-label="Student photo placeholder"><svg viewBox="0 0 180 200" aria-hidden="true"><path d="M15 200v-25q5-32 47-42l28 22 28-22q42 10 47 42v25" fill="#768b9f" /><path d="M70 113h40v29l-20 17-20-17" fill="#9aabba" /><ellipse cx="90" cy="79" rx="39" ry="49" fill="#a9b9c6" /><path d="M49 83Q35 20 91 21q55 0 40 64l-10-32q-31 15-58-1z" fill="#526a7f" /><path d="m62 133 28 22-15 21-22-38m65-5-28 22 15 21 22-38" fill="#e0e9f0" /></svg></div>
                                        <span className="library-card-role">STUDENT</span>
                                    </aside>
                                    <section className="library-card-information">
                                        <h3 id="library-card-title"><i className="fa-solid fa-book-open" aria-hidden="true" /> LIBRARY CARD</h3>
                                        <dl>{[["Student Name", previewCard.name], ["Library ID", previewCard.libraryId], ["Class", previewCard.className], ["Session", previewCard.session], ["Valid Upto", previewCard.validUntil]].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
                                    </section>
                                    <div className="library-card-signature"><span>Greenfield</span><p>Authorised Signature</p></div>
                                </div>
                                <div className="library-card-sheen" aria-hidden="true" />
                            </article>
                            <div className="library-card-face library-card-back" aria-hidden="true"><img src={`${process.env.PUBLIC_URL || ""}/images/logo-1.png`} alt="" /><span>School Library</span><p>Read. Learn. Explore. Grow.</p></div>
                        </div>
                    </div>
                    <p className="library-card-caption">A world of stories. A lifetime of possibilities.<span>Sample card · Static preview</span></p>
                </div>
            </Fade>
        </LibraryCardPreviewWrapper>
    );
}
