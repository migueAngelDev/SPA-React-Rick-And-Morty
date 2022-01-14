import React, { useState } from "react";
import {
  FieldSetFilter,
  IconSearch,
  SearchInput,
  WrapperFilter,
} from "../styles/CardAndStyles";

export default function FilterInput() {
  const [search, setSearch] = useState("");
  return (
    <>
      <div>
        <WrapperFilter>
          <FieldSetFilter>
            <IconSearch src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png" />
            <SearchInput
              type="search"
              placeholder="Search..."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </FieldSetFilter>
        </WrapperFilter>
      </div>
    </>
  );
}
