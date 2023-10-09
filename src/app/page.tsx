"use client";
import BaseLayout from "./components/layouts/BaseLayout";
import Skeletons from "./components/shared/skeletons";

export default function Main() {
  return (
    <>
      <BaseLayout>
        <div id="skeleton">
          <Skeletons />
        </div>
      </BaseLayout>
    </>
  );
}
