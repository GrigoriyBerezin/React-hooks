import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
    const buttonRef = useRef();
    const handleClick = () => {
        buttonRef.current.children[0].innerText = "Text";
        buttonRef.current.style.height = "80px"; // ширина 80
        buttonRef.current.style.width = "150px"; // высота 150
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={buttonRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                {/* children */}
                <small>Блок</small>
            </div>
            <button className="btn btn-secondary my-2" onClick={handleClick}>
                Button
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;

// на досуге подумать как сделать, чтобы можно было вернуть размер к исходному
