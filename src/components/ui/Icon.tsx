import {
  Truck, Ship, Warehouse, Map, Store, BarChart3, ShieldCheck, Handshake, Scale,
  HeartHandshake, Award, Users, ShoppingCart, PackageOpen, UtensilsCrossed,
  Landmark, GraduationCap, Sprout, HardHat, Leaf, type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Truck, Ship, Warehouse, Map, Store, BarChart3, ShieldCheck, Handshake, Scale,
  HeartHandshake, Award, Users, ShoppingCart, PackageOpen, UtensilsCrossed,
  Landmark, GraduationCap, Sprout, HardHat, Leaf,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = map[name] ?? Truck;
  return <Cmp className={className} />;
}
