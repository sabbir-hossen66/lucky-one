import React from 'react';

const Description = () => {
    return (
        <div>
            <h2>Ans to the Question no-<span style={{ color: "orange", fontWeight: "bold" }}>Bonus Marks</span></h2>
            <h3>1.props vs state difference- </h3>
            <h4 style={{ color: "coral" }}>props:</h4>
            <li>Can not change inside Component.</li>
            <li>Can set initial value for child Components.</li>
            <li>Can change in child Components.</li>
            <h4 style={{ color: "coral" }}>state:</h4>
            <li>Can change inside Component.</li>
            <li>	Can set initial value for child Components.</li>
            <li>	Can not change in child Components.</li>

        </div>
    );
};

export default Description;