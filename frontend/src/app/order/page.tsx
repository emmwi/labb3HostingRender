import OrderProduct from "../../components/order-product/OrderProduct";
import Link from "next/link";
export default function order() {
  return (
    <>
      <h1>order</h1>
      <p>Är du Sugen på att göra en specialbeställning? </p>
      <Link href="/order/customOrder">Klicka här</Link>
      <OrderProduct />
    </>
  );
}
