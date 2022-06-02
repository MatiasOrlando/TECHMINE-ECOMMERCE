import React from "react";

export default function ItemCount({
  count,
  handleAddItem,
  handleDecrementItem,
  buttonAddActive,
  buttonDecreaseActive,
  maxStock,
  redBorder,
  fakeCondition,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "80px",
      }}
    >
      <div>
        <div
          className={redBorder ? "itemCounter2" : "ItemCounter"}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <button
              type="button"
              onClick={handleDecrementItem}
              disabled={!buttonDecreaseActive}
              className="buttonDecrease"
              style={{ fontSize: "45px", marginTop: fakeCondition && "-18px" }}
            >
              -
            </button>

            <div className="valueItem">
              <p
                style={{
                  color: "black",
                  border: "1px solid #eaeaea",
                  width: "100px",
                  height: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "20px",
                  fontSize: "20px",
                }}
              >
                {count}
              </p>
            </div>

            <button
              type="button"
              onClick={handleAddItem}
              disabled={buttonAddActive}
              className="buttonDecrease"
              style={{ fontSize: "37px", marginTop: fakeCondition && "-11px" }}
            >
              +
            </button>
          </div>
        </div>
        <div className="maxStock">
          {maxStock === null ? (
            <p style={{ color: "transparent" }}>
              lorem lorem lorem lorem lorem{" "}
            </p>
          ) : (
            <p>{maxStock}</p>
          )}
        </div>
      </div>
    </div>
  );
}
