import "./product.css";
import { Price } from "./Price";

function Product({ title, idx }) {
  let oldPrice = ["12,000", "13,000", "14,000", "15,000"];
  let newPrice = ["11,000", "12,000", "13,000", "14,000"];
  let description = [
    ["8,000 DPI", "intuitive surface"],
    ["intuitive surface", "designed for ipad Pro"],
    ["designed for ipad Pro", "wireless"],
    ["wireless", "8,000 DPI"],
  ];
  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}
export { Product };
