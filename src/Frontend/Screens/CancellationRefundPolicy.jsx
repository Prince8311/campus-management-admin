import LegalDocument from "../Components/LegalDocument";

const CancellationRefundPolicyPage = () => (
    <LegalDocument
        type="cancellation"
        updated="May 08, 2026"
        version="1.0.0"
        introduction={<p>This policy outlines the terms and conditions governing cancellations and refunds for services provided by Campus Management Systems. As a partner in your educational journey, we maintain a policy of absolute transparency to ensure institutional trust and administrative clarity.</p>}
    >
        <section className="content_box">
            <h3>1. Institutional Subscriptions</h3>
            <div className="box_item">
                <p>For educational institutions utilizing our SaaS ecosystem, the framework is designed for continuity and long-term stability. Our subscription model reflects the complex resource allocation required for high-tier academic support.</p>
                <div className="sub_item_sec">
                    <div className="sub_box">
                        <h4>Cancellation & Refunds</h4>
                        <p>"For Institutions: There is no Refund for the subscription you have taken. You can cancel the subscription within your subscription time ends."</p>
                    </div>
                    <div className="sub_box">
                        <h4>Integrity Guarantee</h4>
                        <p>We prioritize data security and system uptime. When an institution commits, we allocate dedicated infrastructure to ensure your campus never faces downtime.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="content_box">
            <h3>2. Student & Staff Policies</h3>
            <div className="box_item">
                <p>Individual users under an institutional umbrella are managed by their respective organizations. This ensures that privacy and local administrative policies are respected.</p>
                <div className="sub_box">
                    <h4>DIRECT ACTION DIRECTIVE:</h4>
                    <p>"For staffs or Students: For refund or cancellation contact your respective institutions."</p>
                </div>
            </div>
        </section>
        <section className="content_box">
            <h3>3. The Cancellation Process</h3>
            <div className="box_item">
                <p>A streamlined, 3-step digital journey for institutional administrators.</p>
                <div className="sub_item_sec">
                    <div className="sub_box">
                        <h4>01. Account Review</h4>
                        <p>Login to the Admin Console and navigate to the 'Billing & Subscriptions' segment to review your current period status.</p>
                    </div>
                    <div className="sub_box">
                        <h4>02. Formal Intent</h4>
                        <p>Select 'Terminate Automatic Renewal'. Your service will remain fully active until the precise end date of your current cycle.</p>
                    </div>
                    <div className="sub_box">
                        <h4>03. Data Export</h4>
                        <p>You will have 30 days post-expiration to export all institutional data via our secure 'Ethics & Portability' portal.</p>
                    </div>
                </div>
            </div>
        </section>
    </LegalDocument>
);

export default CancellationRefundPolicyPage;
