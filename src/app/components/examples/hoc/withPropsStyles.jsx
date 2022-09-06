import React from "react";
import CardWrapper from "../../common/Card";

const withPropsStyles = (Component) => (props) => {
    return <CardWrapper {...props} name="new Name"></CardWrapper>;
};

export default withPropsStyles;
