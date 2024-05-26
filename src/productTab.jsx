import { Product } from "./product";

function ProductTab() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Product title={"Logitech MX Master"} idx={0} />
      <Product title={"Apple Pencil"} idx={1} />
      <Product title={"Zebronics Zed-transfomer"} idx={2} />
      <Product title={"Petronics Toad 23"} idx={3} />
    </div>
  );
}

export { ProductTab };
