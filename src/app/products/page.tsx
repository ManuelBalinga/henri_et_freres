import type { Metadata } from "next";
import { ProductsView } from "./ProductsView";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore the categories Henri & Frères distributes across Cameroon — food, beverages, dairy, personal care, baby care, household and stationery — from global brands and our own labels.",
};

export default function ProductsPage() {
  return <ProductsView />;
}
