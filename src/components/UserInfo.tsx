import React from 'react';

const UserInfo: React.FC = () => {
    return <>
        <form className="user-info-form" autoComplete="off">
            <h2 className="user-info-form__title">Please, fill some information</h2>
            <label className="input">
                <span className="input__heading">Full name</span>
                <input
                    name="full-name"
                    type="text"
                    required
                    defaultValue=""
                />
            </label>
            <label className="input">
                <span className="input__heading">Email</span>
                <input data-test-id="auth-email"
                       name="email"
                       type="email"
                       required
                       defaultValue=""
                />
            </label>
            <label className="input">
                <span className="input__heading">Phone:</span>
                <input
                    name="phone"
                    type="tel"
                    required
                />
            </label>
            <label className="input">
                <span className="input__heading">Address:</span>
                <input
                    name="address"
                    type="text"
                    required
                />
            </label>
        </form>
    </>
}

export default UserInfo;