import { styled } from "@mui/material";

export const LegalDocumentWrapper = styled('div')`
    --accent: #0088be;
    --ink: #192c3b;
    background: radial-gradient(ellipse at 95% 0%, #e6f5ff 0, transparent 620px), #f7fafc;
    color: var(--ink);
    .legal-shell { max-width: 1320px; margin: auto; display: grid; grid-template-columns: 245px minmax(0, 1fr); gap: 64px; padding: 48px 28px 64px; }
    .legal-sidebar { min-width: 0; }
    .sidebar-sticky { position: sticky; top: 78px; }
    .eyebrow { font-size: 10px; font-weight: 700; letter-spacing: 1.7px; color: #61798b; }
    .sidebar-caption { font-size: 10px; color: #738493; margin: 7px 0 24px; }
    a { text-decoration: none; }
    a, button, select { -webkit-tap-highlight-color: transparent; }
    a:focus-visible, button:focus-visible, select:focus-visible { outline: 3px solid #0088be; outline-offset: 4px; }
    .document-tabs { display: grid; gap: 7px; }
    .document-tabs a { display: flex; align-items: center; gap: 12px; padding: 13px 14px; border-radius: 9px; color: #617487; font-size: 12px; font-weight: 500; border: 1px solid transparent; }
    .document-tabs a.active { color: #007eaf; background: #fff; border-color: #e3eef4; box-shadow: 0 4px 16px #253f5510; }
    .section-nav { margin-top: 30px; }
    .section-links { margin-top: 12px; max-height: min(43vh, 420px); overflow-y: auto; scrollbar-width: thin; scrollbar-color: #cadce7 transparent; }
    .section-links a { display: flex; gap: 10px; padding: 8px 10px; border-left: 2px solid #e4edf2; color: #617487; font-size: 11px; line-height: 1.5; }
    .section-links a span { color: #8b9daa; font-size: 10px; padding-top: 1px; }
    .section-links a[aria-current], .section-links a:hover { border-color: var(--accent); background: #eaf6fc; color: #006e9c; }
    .sidebar-help { background: #edf7fc; border: 1px solid #dcedf6; border-radius: 12px; padding: 18px; margin-top: 25px; }
    .sidebar-help > i { color: var(--accent); margin-right: 9px; }
    .sidebar-help strong { font-size: 12px; }
    .sidebar-help p { font-size: 11px; color: #617487; margin: 9px 0 15px; line-height: 1.7; }
    .sidebar-help a { font-size: 11px; font-weight: 600; color: #007cab; display: flex; justify-content: space-between; }
    .legal-main { min-width: 0; }
    .legal-hero { padding-bottom: 30px; border-bottom: 1px solid #deebf2; scroll-margin-top: 85px; }
    .hero-topline { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
    .document-badge { color: #18884f; background: #e7f7ed; border: 1px solid #d1eedc; font-size: 9px; font-weight: 600; letter-spacing: 1.5px; padding: 6px 10px; border-radius: 30px; }
    .hero-title { display: flex; align-items: center; justify-content: space-between; gap: 20px; margin: 26px 0; }
    h1 { font-size: clamp(30px, 3.5vw, 46px); letter-spacing: -1.7px; line-height: 1.2; font-weight: 650; }
    .hero-title p { color: #657c8d; font-size: 13px; margin-top: 12px; line-height: 1.7; }
    .hero-icon { width: 76px; height: 82px; flex-shrink: 0; display: grid; place-items: center; font-size: 32px; color: #059bc7; border: 1px solid #c8e8f6; border-radius: 22px; background: linear-gradient(145deg, #fff, #dff3fc); box-shadow: 0 12px 30px #189aca12; transform: rotate(5deg); }
    .hero-meta { display: flex; gap: 22px; flex-wrap: wrap; color: #70818f; font-size: 10px; }
    .hero-meta i { margin-right: 7px; color: var(--accent); }
    .legal-overview { padding: 30px 0; }
    .legal-overview h2 { font-size: 18px; margin: 10px 0 14px; font-weight: 600; }
    p, .content_box li, .content_box a, .legal-overview li { font-size: 13px; line-height: 1.9; color: #526574; }
    .legal-overview > p { line-height: 2; }
    .heading_items { margin-top: 20px; display: grid; gap: 14px; padding: 22px; background: #eef4f8; border-radius: 12px; list-style: none; }
    .heading_items li { display: flex; align-items: flex-start; gap: 12px; }
    .heading_items i { color: var(--accent); font-size: 11px; margin-top: 7px; }
    [data-legal-section] { scroll-margin-top: 85px; }
    .content_box { padding: 27px 30px; margin: 0 0 18px; border: 1px solid #e3ecf2; border-radius: 14px; background: #ffffffb8; }
    .content_box h3 { display: flex; align-items: baseline; gap: 12px; font-size: 17px; font-weight: 600; line-height: 1.6; color: var(--ink); margin-bottom: 14px; }
    .content_box h3::before { content: ''; width: 3px; height: 16px; border-radius: 3px; background: #0cb6e5; flex-shrink: 0; }
    .content_box:nth-child(3n) h3::before { background: #42be80; }
    .content_box p + p { margin-top: 5px; }
    .content_box ul { padding: 0; margin: 8px 0; list-style: none; }
    .content_box li { display: flex; align-items: flex-start; gap: 10px; margin-top: 6px; }
    .content_box li > i { font-size: 4px; color: #0da7d1; margin-top: 11px; flex-shrink: 0; }
    .content_box a[href] { color: #007da9; text-decoration: underline; text-underline-offset: 3px; overflow-wrap: anywhere; }
    .content_box .box_item > a { display: inline-block; margin-top: 10px; }
    .sub_item_sec { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin-top: 18px; }
    .sub_box { padding: 20px; border-radius: 10px; background: #fff; border: 1px solid #e8eff4; }
    .sub_box h4 { font-size: 13px; font-weight: 600; color: #007faf; margin-bottom: 10px; }
    .sub_box:nth-child(even) h4 { color: #248855; }
    .sub_box li, .sub_box p { font-size: 12px; }
    &.legal-privacy .content_box:nth-child(2), &.legal-terms .content_box:nth-child(4) { background: #eef3f8; border-color: #eef3f8; }
    &.legal-privacy .content_box:nth-child(5), &.legal-terms .content_box:nth-child(8) { background: #eaf7fe; border-color: #daeffa; }
    .content_box.contact-card { background: #ecf9f3; border-color: #d1eee1; }
    .contact-card h3::before { background: #35b87b; }
    .legal-actions { margin-top: 36px; padding: 26px; background: #eaf0f5; border: 1px solid #e1e9ef; border-radius: 12px; display: flex; gap: 22px; align-items: center; justify-content: space-between; }
    .legal-actions h2 { font-size: 15px; margin-bottom: 5px; }
    .legal-actions p { font-size: 11px; }
    .action-buttons { display: flex; gap: 10px; flex-shrink: 0; }
    .action-buttons button, .action-buttons a { border: 1px solid #d8e7ee; border-radius: 7px; padding: 12px 15px; font-size: 11px; font-weight: 600; cursor: pointer; background: #fff; color: #007da9; display: flex; align-items: center; gap: 8px; }
    .action-buttons a { color: #fff; background: #008bbb; border-color: #008bbb; box-shadow: 0 4px 10px #008bbb20; }
    .action-buttons button:hover { background: #f4fbff; }
    .action-buttons a:hover { background: #00769e; }
    .back-top { display: block; text-align: right; color: #637e90; font-size: 11px; margin-top: 22px; }
    .mobile-jump { display: none; }
    @media (max-width: 1050px) {
        .legal-shell { grid-template-columns: 205px minmax(0, 1fr); gap: 30px; }
        .legal-actions { align-items: flex-start; flex-direction: column; }
    }
    @media (max-width: 760px) {
        .legal-shell { display: block; padding: 24px 18px 40px; }
        .sidebar-sticky { position: static; }
        .sidebar-caption, .section-nav, .sidebar-help, .legal-sidebar > .sidebar-sticky > .eyebrow { display: none; }
        .document-tabs { grid-template-columns: 1fr 1fr; margin-bottom: 16px; gap: 5px; }
        .document-tabs a { padding: 12px 8px; gap: 8px; font-size: 11px; }
        .document-tabs a:last-child { grid-column: 1 / -1; }
        .mobile-jump { display: grid; gap: 7px; font-size: 11px; color: #637e90; margin-bottom: 28px; }
        .mobile-jump select { width: 100%; padding: 12px; border: 1px solid #d9e6ef; border-radius: 8px; background: white; color: #274558; font-size: 12px; }
        .hero-topline { flex-wrap: wrap; }
        .hero-icon { width: 54px; height: 60px; font-size: 24px; border-radius: 16px; }
        h1 { letter-spacing: -1px; }
        .hero-title { gap: 12px; }
        .hero-meta { gap: 10px; }
        .content_box { padding: 22px 18px; }
        .content_box h3 { font-size: 16px; }
        .sub_item_sec { grid-template-columns: 1fr; }
        .legal-actions { padding: 20px; }
        .action-buttons { flex-wrap: wrap; }
    }
    @media print {
        background: white;
        .legal-shell { display: block; max-width: none; padding: 0; }
        .legal-sidebar, .legal-actions, .back-top, .hero-icon { display: none; }
        .content_box { break-inside: avoid; background: white !important; box-shadow: none; }
        .hero-title { margin: 16px 0; }
        .sub_item_sec { grid-template-columns: 1fr 1fr; }
    }
`;
