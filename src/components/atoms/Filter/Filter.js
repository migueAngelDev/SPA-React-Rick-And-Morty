import {
  FieldSetFilter,
  IconSearch,
  SearchInput,
  WrapperFilter,
} from "./Filter.styles.js";

export default function Filter({ handleOnValue }) {
  return (
    <div>
      <WrapperFilter>
        <FieldSetFilter>
          <IconSearch src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png" />
          <SearchInput
            type="search"
            placeholder="Search..."
            onChange={handleOnValue}
          />
        </FieldSetFilter>
      </WrapperFilter>
    </div>
  );
}
