function Price({ oldPrice, newPrice }) {
  return (
    <div
      style={{
        background: "#e0c367",
        height: "50px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
        width: "250px",
      }}
    >
      <span style={{ textDecoration: "line-through" }}>{oldPrice}</span>
      &nbsp; &nbsp;
      <span style={{ fontWeight: "bold" }}>{newPrice}</span>
    </div>
  );
}

export { Price };
