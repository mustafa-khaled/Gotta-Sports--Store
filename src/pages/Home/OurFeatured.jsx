import { products } from "../../data/data";

import ShopItem from "../../features/shop/ShopItem";
import Container from "../../ui/Container";
import GridContainer from "../../ui/GridContainer";
import SectionHead from "../../ui/SectionHead";

function OurFeatured() {
  return (
    <Container>
      <div>
        <SectionHead title={"Explore Our Featured"} />

        <GridContainer>
          {products.map((item) => {
            return <ShopItem item={item} key={item.id} />;
          })}
        </GridContainer>
      </div>
    </Container>
  );
}

export default OurFeatured;
