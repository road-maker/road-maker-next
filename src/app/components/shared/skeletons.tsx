import { Card, Group, SimpleGrid, Skeleton } from "@mantine/core";
import { useEffect, useState } from "react";

export default function Skeletons() {
  const [element, setElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setElement(document.getElementById("skeleton"));
  }, []);
  if (!element) {
    return <></>;
  }
  const renderSkeletons = () => {
    const skeleton = (i: number) => (
      <Card key={`${i}`}>
        <Card.Section>
          <Group>
            <Skeleton height={8} radius="xl" />
          </Group>

          <Skeleton height={8} radius="xl" />

          <Skeleton height={8} mt={6} radius="xl" />
        </Card.Section>

        <Skeleton height={8} mt={6} width="70%" radius="xl" />

        <Card.Section>
          <Group>
            <Skeleton height={50} circle mb="xl" />
            <Skeleton height={8} mt={6} width="70%" radius="xl" />
          </Group>
        </Card.Section>
      </Card>
    );
    const arr: React.JSX.Element[] = Array(20)
      .fill(<div></div>)
      .map((v, i) => (v = skeleton(i)));
    return arr;
  };
  return (
    <>
      <SimpleGrid cols={4} style={{ width: "100%" }}>
        {renderSkeletons()}
      </SimpleGrid>
    </>
  );
}
