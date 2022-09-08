import React from 'react';

const CreateNewPassword = () => {
    return (
            <section className={'newPassword'}>
                <div className={'newPassword-inner'}>
                    <div className={'newPassword__title title'}>
                        <span>Create New Passport</span>
                    </div>
                    <div className="newPassword__password">
                        <input className={'input-password'} type={"text"} />
                    </div>
                    <div className="newPassword__text">
                        Create new password and we will send you further instructions to email
                    </div>
                    <button>Create new password</button>
                </div>
            </section>
    );
};

export default CreateNewPassword;