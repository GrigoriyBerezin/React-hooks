import React from "react";
import CollapseWrapper from "../common/collapse";
import SmallTitle from "../common/typografy/smallTitle";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <SmallTitle>Задание</SmallTitle>

            <ComponentList>
                <Component />
                <Component />
                <Component />
            </ComponentList>
        </CollapseWrapper>
    );
};
const ComponentList = ({ children }) => {
    const numberChild = React.Children.toArray(children);
    return React.Children.map(numberChild, (child) =>
        React.cloneElement(child, {
            ...child.props,
            e: child.key.replace(" ")
        })
    );
};

const Component = ({ e }) => {
    return <div className="mt-2 ">{e}Компонент списка</div>;
};

ComponentList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
Component.propTypes = {
    e: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export default ChildrenExercise;
