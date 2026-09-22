import { useState } from "react";
import { UserData } from "../../../Context/PageContext";
import { AccountSettingWrapper } from "../../../Styles/SettingStyle";

const AccountSettingPage = () => {
    const { userDetails } = UserData();
    const [failedImage, setFailedImage] = useState(null);
    const [showPasswords, setShowPasswords] = useState(false);
    const name = userDetails.name?.trim() || 'Your account';
    const role = userDetails.user_role || (userDetails.user_type === 'super_admin' ? 'Super Admin' : 'Institution Admin');
    const initials = name.split(/\s+/).slice(0, 2).map(part => part[0]).join('').toUpperCase();

    return (
        <AccountSettingWrapper>
            <header className="account_heading">
                <div>
                    <h2>Account settings</h2>
                    <p>Manage your personal information and account security.</p>
                </div>
                <span className="heading_icon"><i className="fa-solid fa-user-gear" aria-hidden="true" /></span>
            </header>

            <section className="profile_banner" aria-label="Account overview">
                <div className="profile_identity">
                    <div className="profile_avatar">
                        {userDetails.image && failedImage !== userDetails.image ? (
                            <img src={userDetails.image} alt={name} onError={() => setFailedImage(userDetails.image)} />
                        ) : <span aria-hidden="true">{initials}</span>}
                    </div>
                    <div className="profile_summary">
                        <h3>{name}</h3>
                        <p>{userDetails.email || 'Your personal account'}</p>
                        <span className="role_badge"><i className="fa-solid fa-shield-halved" aria-hidden="true" />{role}</span>
                    </div>
                </div>
                {typeof userDetails.is_active === 'boolean' && (
                    <span className={`account_status ${userDetails.is_active ? 'active' : 'inactive'}`}>
                        <span />{userDetails.is_active ? 'Active account' : 'Inactive account'}
                    </span>
                )}
            </section>

            <form key={userDetails.id || 'account'} onSubmit={event => event.preventDefault()}>
                <section className="settings_card">
                    <div className="section_heading">
                        <span className="section_icon"><i className="fa-regular fa-user" aria-hidden="true" /></span>
                        <div><h3>Personal information</h3><p>Your name and contact details.</p></div>
                    </div>
                    <div className="fields_grid">
                        <label>Full name<input name="name" autoComplete="name" placeholder="Enter your full name" defaultValue={userDetails.name || ''} /></label>
                        <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" defaultValue={userDetails.email || ''} /></label>
                        <label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="Enter your phone number" defaultValue={userDetails.phone || ''} /></label>
                    </div>
                </section>

                {userDetails.user_type === 'inst_admin' && (
                    <section className="settings_card">
                        <div className="section_heading">
                            <span className="section_icon"><i className="fa-solid fa-building-columns" aria-hidden="true" /></span>
                            <div><h3>Institution details</h3><p>Basic information about your institution.</p></div>
                        </div>
                        <div className="fields_grid institution_fields">
                            <label>Institution name<input name="institutionName" autoComplete="organization" placeholder="Enter institution name" defaultValue={userDetails.institution?.inst_name || ''} /></label>
                            <label>Location<input name="location" placeholder="Enter institution location" /></label>
                        </div>
                    </section>
                )}

                <section className="settings_card">
                    <div className="section_heading">
                        <span className="section_icon security_icon"><i className="fa-solid fa-lock" aria-hidden="true" /></span>
                        <div><h3>Password & security</h3><p>Leave these fields blank to keep your current password.</p></div>
                        <button className="visibility_button" type="button" aria-pressed={showPasswords} onClick={() => setShowPasswords(value => !value)}>
                            <i className={`fa-regular ${showPasswords ? 'fa-eye-slash' : 'fa-eye'}`} aria-hidden="true" />
                            {showPasswords ? 'Hide' : 'Show'} passwords
                        </button>
                    </div>
                    <div className="fields_grid">
                        <label>Current password<input name="currentPassword" type={showPasswords ? 'text' : 'password'} autoComplete="current-password" placeholder="Enter current password" /></label>
                        <label>New password<input name="newPassword" type={showPasswords ? 'text' : 'password'} autoComplete="new-password" placeholder="Enter new password" /></label>
                        <label>Confirm new password<input name="confirmPassword" type={showPasswords ? 'text' : 'password'} autoComplete="new-password" placeholder="Re-enter new password" /></label>
                    </div>
                </section>
                <footer className="form_actions">
                    <p><i className="fa-solid fa-circle-info" aria-hidden="true" />Review your details before saving.</p>
                    <div>
                        <button className="reset_button" type="reset">Reset changes</button>
                        <button className="save_button" type="submit"><i className="fa-regular fa-floppy-disk" aria-hidden="true" />Save changes</button>
                    </div>
                </footer>
            </form>
        </AccountSettingWrapper>
    );
};

export default AccountSettingPage;
