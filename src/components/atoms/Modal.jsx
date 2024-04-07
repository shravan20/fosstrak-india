import React from 'react';
const Modal = ({ childrenComponent }) => {
    return (
        <>
            {/* The button to open modal */}
            <label htmlFor="my_modal_7" className="btn">
                open modal
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="text-lg font-bold">Hello!</h3>
                    {/* <p className="py-4">
                        This modal works with a hidden checkbox!This modal works
                        with a hidden checkbox!This modal works with a hidden
                        checkbox!This modal works with a hidden checkbox!This
                        modal works with a hidden checkbox!This modal works with
                        a hidden checkbox!This modal works with a hidden
                        checkbox!
                    </p> */}
                    {childrenComponent}
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">
                    Close
                </label>
            </div>
        </>
    );
};

export default Modal;
