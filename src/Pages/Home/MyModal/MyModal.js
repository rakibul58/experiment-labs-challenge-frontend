import React from 'react';

const MyModal = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2 bg-gradient-to-r from-neutral via-secondary via-95% to-accent text-white border-0 hover:bg-gradient-to-l hover:shadow-2xl">✕</label>
                    <h3 className="text-lg font-bold">Login</h3>
                    {/* 

                        Login Form          

                    */}
                </div>
            </div>
        </div>
    );
};

export default MyModal;