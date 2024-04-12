import React from 'react';

const Modal = ({ childrenComponent }) => {
    return (
        <>
            {/* The button to open modal */}
            <div className="items-center flex justify-between p-4">
                <label
                    htmlFor="my_modal_7"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full max-w-xs"
                >
                    Explore &gt;&gt;&gt;
                </label>
            </div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box w-11/12 max-w-5xl">
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
