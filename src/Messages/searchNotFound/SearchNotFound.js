import React from "react";
import { ParagraphMedium } from "../../components/atoms/StylesParagraphs";
import { WrapperSearch } from "./SearchNotFound.styles";

export default function SearchNotFound() {
  return (
    <>
      <WrapperSearch>
        <div>
          <ParagraphMedium>Search not found...</ParagraphMedium>
        </div>
      </WrapperSearch>
    </>
  );
}
