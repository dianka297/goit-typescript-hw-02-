import css from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";
import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { FC } from "react";

interface SearchBarProps {
  onSearch: (newQuery: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values, actions) => {
          if (values.search === "") {
            toast.error("Please enter text to search photos");
          }
          onSearch(values.search);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field
            className={css.searchBox}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.searchBtn} type="submit">
            <FiSearch size="20px" />
          </button>
          <Toaster position="top-right" reverseOrder={false} />
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;