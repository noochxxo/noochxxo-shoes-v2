
import ProductRow from "@/components/shared/ProductRow";
import Showcase from "@/components/shared/Showcase";

import { productRows } from '@/constants'

export default function Home() {
  return (
    <main
      className="flex flex-col pb-32 pt-8"
    >
        <Showcase />
        {
          productRows.map((row, idx) => {
            return (
              <ProductRow key={idx} row={row} />
            )
          })
        }
    </main>
  );
}
