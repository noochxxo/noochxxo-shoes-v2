import Hero from "@/components/shared/Hero";
import ProductRow from "@/components/shared/ProductRow";

export default function Home() {
  return (
    <main
      className="h-full flex flex-col"
    >
        <Hero />
        <ProductRow /> 
    </main>
  );
}
