import React from 'react';

export const SubmitButton = ({ handleSubmit }) => {

  return (
      <button className="text-white bg-slate-300 p-2 rounded-lg transition ease-in-out delay-50 hover:text-slate-300 hover:bg-white" onClick={handleSubmit}>
        Submit
      </button>
  );
};
